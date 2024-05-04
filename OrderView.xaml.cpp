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
    OrderView::OrderView() : mOrders{ winrt::single_threaded_observable_vector<ShowStart::Order>() }
    {
        InitializeComponent();
    }

    Windows::Foundation::IAsyncAction OrderView::Import_Click(IInspectable const&, RoutedEventArgs const&)
    {
        auto import_box{ ImportBox() };
        import_box.Text(L"");
        auto result{ co_await ImportDialog().ShowAsync() };
        if (result == Controls::ContentDialogResult::Primary)
        {
            auto text{ import_box.Text() };
            bool isOK{ };
            try
            {
                JsonArray json{ JsonArray::Parse(text) };
                for (auto item : json)
                {
                    auto task{ item.GetArray() };
                    mOrders.Append(ShowStart::Order{ task.GetStringAt(0), task.GetStringAt(1), task.GetStringAt(2) });
                }
                isOK = true;
            }
            catch (...) { }
            if (!isOK)
            {
                co_return co_await window.ShowTipDialog(L"任务数据格式非法");
            }
        }
    }

    void OrderView::Add_Click(IInspectable const&, RoutedEventArgs const&)
    {
        const ShowStart::Info info{ window.GlobalInfo() };
        mOrders.Append(ShowStart::Order{ info.UserId(), info.Sign(), info.IdCard() });
    }

    void OrderView::Delete_Click(IInspectable const&, RoutedEventArgs const&)
    {
        if (auto item{ LV_Orders().SelectedItem() })
        {
            uint32_t index{ };
            mOrders.IndexOf(item.as<ShowStart::Order>(), index);
            mOrders.RemoveAt(index);
        }
    }

    void OrderView::Clear_Click(IInspectable const&, RoutedEventArgs const&)
    {
        mOrders.Clear();
    }

    Windows::Foundation::IAsyncAction OrderView::Order_Task(ShowStart::Order order)
    {
        winrt::apartment_context ui_thread;
        HttpClient client;
        auto idcards{ util::split_string(order.IdCards()) };
        auto user_id{ strjson(order.UserId()) };
        auto sign{ strjson(order.Sign()) };
        auto activity_id{ strjson(TB_Activity().Text()) };
        auto ticket_id{ strjson(TB_Ticket().Text()) };
        auto token{ strjson(util::uuid32()) };
        auto st_flpv{ strjson(util::uuid32()) };
        IJsonValue access_token, id_token;
        hstring log;
        bool ok{ false };

        // get_token
        co_await winrt::resume_background();
        JsonObject token_json{ work::api_get_token(client, util::map_to_json({
            { L"user_id", user_id },
            { L"sign", sign },
            { L"token", token },
            { L"st_flpv", st_flpv },
            })) };
        co_await ui_thread;
        ok = token_json.GetNamedBoolean(L"OK");
        log = ok ? L"成功!" : token_json.GetNamedString(L"Information");
        order.Log(winrt::format(L"{}[get_token] {}\n", order.Log(), log));
        if (!ok) co_return;
        access_token = token_json.Lookup(L"access_token");
        id_token = token_json.Lookup(L"id_token");

        // order_confirm
        co_await winrt::resume_background();
        JsonObject confirm_json{ work::api_order_confirm(client, util::map_to_json({
            { L"user_id", user_id },
            { L"sign", sign },
            { L"token", token },
            { L"st_flpv", st_flpv },
            { L"access_token", access_token },
            { L"id_token", id_token },
            { L"activityId", activity_id },
            { L"ticketId", ticket_id },
            { L"TicketNum", JsonValue::CreateNumberValue(idcards.Size()) }
            })) };
        co_await ui_thread;
        ok = confirm_json.GetNamedBoolean(L"OK");
        log = ok ? L"成功!" : confirm_json.GetNamedString(L"Information");
        order.Log(winrt::format(L"{}[order_confirm] {}\n", order.Log(), log));
        if (!ok) co_return;

        // order
        JsonArray viewer_ids;
        for (auto idcard : idcards)
        {
            viewer_ids.Append(intjson(std::stoi(idcard.data())));
        }
        confirm_json.Insert(L"IdCards", viewer_ids);
        co_await winrt::resume_background();
        JsonObject order_json{ work::api_order(client, confirm_json) };
        co_await ui_thread;
        ok = order_json.GetNamedBoolean(L"OK");
        log = ok ? L"购买成功!" : order_json.GetNamedString(L"Information");
        order.Log(winrt::format(L"{}[order] {}\n", order.Log(), log));
        if (!ok) co_return;
    }

    void OrderView::Start_Click(IInspectable const&, RoutedEventArgs const&)
    {
        for (auto order : mOrders)
        {
            Order_Task(order);
        }
    }
}
