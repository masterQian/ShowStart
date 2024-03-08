#include "pch.h"
#include "OrderView.xaml.h"
#if __has_include("OrderView.g.cpp")
#include "OrderView.g.cpp"
#endif
#include "ShowStart.h"

using namespace winrt::Windows::Foundation;
using namespace winrt::Windows::Data::Json;
using namespace winrt::Windows::Web::Http;

namespace winrt::ShowStart::implementation {
    OrderView::OrderView() {
        InitializeComponent();
        mOrders = single_threaded_observable_vector<ShowStart::Order>();
        mLogData = multi_threaded_observable_vector<hstring>();

        mLogData.VectorChanged([this] (auto...) {
            if (auto size{ mLogData.Size() }) {
                LogList().ScrollIntoView(box_value(mLogData.GetAt(size - 1U)));
            }
        });
    }

    void OrderView::AddClick(IInspectable const&, RoutedEventArgs const&) {
        const ShowStart::Info info{ window.GlobalInfo() };
        mOrders.Append(ShowStart::Order{ info.UserId(), info.Sign(), info.ActivityId(), info.TicketId(), 1.0, 4.0 });
    }

    void OrderView::DeleteClick(IInspectable const&, RoutedEventArgs const&) {
        if (auto item{ OrderList().SelectedItem() }) {
            uint32_t index{ };
            mOrders.IndexOf(item.as<ShowStart::Order>(), index);
            mOrders.RemoveAt(index);
        }
    }

    void OrderView::ClearClick(IInspectable const&, RoutedEventArgs const&) {
        mOrders.Clear();
        mLogData.Clear();
    }

    IAsyncAction OrderView::OrderTask(apartment_context ui_thread, int task_id, int* task_sign, hstring user_id, Windows::Data::Json::JsonObject confirm_json) {
        while (*task_sign == 0) {
            co_await winrt::resume_background();

            HttpClient client;
            JsonObject order_json{ work::api_order(client, confirm_json) };
            bool ok{ order_json.GetNamedBoolean(L"OK") };

            co_await ui_thread;
            mLogData.Append(winrt::format(L"[用户{} 线程{}] order {}\n", user_id, task_id, ok ? L"抢票成功!" : order_json.GetNamedString(L"Information")));
            if (ok) *task_sign = 2;
        }

        co_await ui_thread;
        mLogData.Append(winrt::format(L"[用户{} 线程{}] {}终止\n", user_id, task_id, *task_sign == 1 ? L"手动" : L"成功"));
        if (!std::ranges::any_of(mTasks, [ ] (int v) { return v == 0; })) {
            mLogData.Append(winrt::format(L"[用户{}] 任务完成\n", user_id));
            StopButton().IsEnabled(false);
        }
    }

    IAsyncAction OrderView::StartClick(IInspectable const&, RoutedEventArgs const&) {
        winrt::apartment_context ui_thread;
        
        StopButton().IsEnabled(true);

        int total_thread_num{ }, thread_index{ };
        for (auto const order : mOrders) {
            total_thread_num += (int)order.ThreadNum();
        }
        mTasks = std::vector<int>(total_thread_num, 0);
        
        for (auto const order : mOrders) {
            HttpClient mainClient;
            int thread_num{ (int)order.ThreadNum() };
            auto user_id{ strjson(order.UserId()) };
            auto sign{ strjson(order.Sign()) };
            auto token{ strjson(util::uuid32()) };
            auto st_flpv{ strjson(util::uuid32()) };

            co_await winrt::resume_background();
            JsonObject token_json{ work::api_get_token(mainClient, util::map_to_json({
                { L"user_id", user_id },
                { L"sign", sign },
                { L"token", token },
                { L"st_flpv", st_flpv },
                })) };
            co_await ui_thread;

            {
                bool ok{ token_json.GetNamedBoolean(L"OK") };
                mLogData.Append(winrt::format(L"[用户{}] get_token {}\n", order.UserId(), ok ? L"成功!" : token_json.GetNamedString(L"Information")));
                if (!ok) continue;
            }

            co_await winrt::resume_background();
            JsonObject confirm_json{ work::api_order_confirm(mainClient, util::map_to_json({
                { L"user_id", user_id },
                { L"sign", sign },
                { L"token", token },
                { L"st_flpv", st_flpv },
                { L"access_token", token_json.Lookup(L"access_token") },
                { L"id_token", token_json.Lookup(L"id_token") },
                { L"activityId", strjson(order.ActivityId()) },
                { L"ticketId", strjson(order.TicketId()) },
                { L"TicketNum", JsonValue::CreateNumberValue(order.TicketNum()) }
                })) };
            co_await ui_thread;

            {
                bool ok{ confirm_json.GetNamedBoolean(L"OK") };
                mLogData.Append(winrt::format(L"[用户{}] order_confirm {}\n", order.UserId(), ok ? L"成功!" : confirm_json.GetNamedString(L"Information")));
                if (!ok) continue;
            }

            for (int i{ }; i < thread_num; ++i) {
                OrderTask(ui_thread, i, &mTasks[thread_index++], order.UserId(), confirm_json);
            }
        }
    }

    void OrderView::StopClick(IInspectable const&, RoutedEventArgs const&) {
        for (auto& task : mTasks) {
            if (task == 0) {
                task = 1;
            }
        }
    }
}