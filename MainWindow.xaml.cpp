#include "pch.h"
#include "MainWindow.xaml.h"
#if __has_include("MainWindow.g.cpp")
#include "MainWindow.g.cpp"
#endif
#include "ShowStart.h"

#include <fstream>
#include <winrt/Windows.ApplicationModel.DataTransfer.h>

using namespace winrt::Windows::Foundation;
using namespace winrt::Windows::Data::Json;
using namespace winrt::Windows::Web::Http;

namespace winrt::ShowStart::implementation {
    // 处理图片
    Media::Imaging::BitmapImage MakeImage(hstring const& url, int width) {
        Media::Imaging::BitmapImage bmp;
        bmp.UriSource(Uri(url));
        bmp.CreateOptions(Media::Imaging::BitmapCreateOptions::IgnoreImageCache);
        bmp.DecodePixelWidth(width);
        return bmp;
    }

    // 显示提示框
    IAsyncAction MainWindow::ShowTipDialog(hstring msg) {
        auto dialog{ TipDialog() };
        dialog.Title(box_value(msg));
        co_await dialog.ShowAsync();
    }
}

namespace winrt::ShowStart::implementation {
    MainWindow::MainWindow() {
        InitializeComponent();

        // 标题栏
        ExtendsContentIntoTitleBar(true);
        SetTitleBar(SP_TitleBar());

        // 设置窗口大小
        {
            RECT rect{ };
            GetClientRect(GetDesktopWindow(), &rect);
            auto screen_width{ rect.right - rect.left };
            auto screen_height{ rect.bottom - rect.top };
            Windows::Graphics::RectInt32 actualRect{
                .X = screen_width / 16,
                .Y = screen_height / 16,
                .Width = screen_width * 7 / 8,
                .Height = screen_height * 7 / 8
            };
            AppWindow().MoveAndResize(actualRect);
        }

        // 结束程序清理window
        Closed([ ] (auto...) {
            window = nullptr;
        });

        // 初始化信息
        {
            mGlobalInfo.StFlpv(util::uuid32());
            mGlobalInfo.Token(util::uuid32());
            std::wifstream ifs{ L"info.json" };
            std::wstringstream ss;
            ss << ifs.rdbuf();
            hstring info_text{ ss.str() };
            JsonObject info_json;
            if (!info_text.empty() && JsonObject::TryParse(info_text, info_json))
            {
                if (auto v1{ info_json.TryLookup(L"UserId") })
                {
                    mGlobalInfo.UserId(v1.GetString());
                }
                if (auto v2{ info_json.TryLookup(L"Sign") })
                {
                    mGlobalInfo.Sign(v2.GetString());
                }
                if (auto v3{ info_json.TryLookup(L"IdCard") })
                {
                    mGlobalInfo.IdCard(v3.GetString());
                }
                if (auto v4{ info_json.TryLookup(L"ActivityId") })
                {
                    mGlobalInfo.ActivityId(v4.GetString());
                }
            }
        }
    }

    // 更新Token
    IAsyncAction MainWindow::UpdateTokenClick(IInspectable const&, RoutedEventArgs const&) {
        winrt::apartment_context ui_thread;

        mGlobalInfo.AccessToken(L"");
        mGlobalInfo.IdToken(L"");
       
        co_await winrt::resume_background();
        JsonObject json{ work::api_get_token(mClient, util::map_to_json({
            { L"user_id", strjson(mGlobalInfo.UserId()) },
            { L"sign", strjson(mGlobalInfo.Sign()) },
            { L"token", strjson(mGlobalInfo.Token()) },
            { L"st_flpv", strjson(mGlobalInfo.StFlpv()) },
            })) };
        co_await ui_thread;

        mGlobalInfo.Message(json.GetNamedString(L"Message"));
        if (!json.GetNamedBoolean(L"OK")) {
            co_return co_await ShowTipDialog(json.GetNamedString(L"Information"));
        }
        mGlobalInfo.AccessToken(json.GetNamedString(L"access_token"));
        mGlobalInfo.IdToken(json.GetNamedString(L"id_token"));
    }
    
    // 提取ID
    Windows::Foundation::IAsyncAction MainWindow::GetIDClick(IInspectable const&, RoutedEventArgs const&)
    {
        winrt::Windows::ApplicationModel::DataTransfer::DataPackage package;
        package.SetText(L"javascript:alert('UserId: ' + localStorage.UserId + ' Sign: ' + localStorage.sign);");
        Windows::ApplicationModel::DataTransfer::Clipboard::SetContent(package);
        co_await GetIDDialog().ShowAsync();
    }

    // 查看身份证绑定信息
    IAsyncAction MainWindow::IDCardBindClick(IInspectable const&, RoutedEventArgs const&)
    {
        winrt::apartment_context ui_thread;

        auto dialog{ IDCardBindDialog() };
        auto viewers_list{ IDCardBindList().Items() };

        co_await winrt::resume_background();
        JsonObject json{ work::api_viewers_list(mClient, util::map_to_json({
            { L"user_id", strjson(mGlobalInfo.UserId()) },
            { L"sign", strjson(mGlobalInfo.Sign()) },
            { L"access_token", strjson(mGlobalInfo.AccessToken()) },
            { L"id_token", strjson(mGlobalInfo.IdToken()) },
            { L"token", strjson(mGlobalInfo.Token()) },
            { L"st_flpv", strjson(mGlobalInfo.StFlpv()) },
            })) };
        co_await ui_thread;

        mGlobalInfo.Message(json.GetNamedString(L"Message"));
        if (json.GetNamedBoolean(L"OK"))
        {
            viewers_list.Clear();
            for (auto item : json.GetNamedArray(L"Viewers"))
            {
                auto viewer{ item.GetObject() };
                viewers_list.Append(ShowStart::Viewer{
                    winrt::to_hstring(static_cast<uint64_t>(viewer.GetNamedNumber(L"id"))),
                    viewer.GetNamedString(L"name"),
                    viewer.GetNamedString(L"showDocumentNumber"),
                    });
            }
            co_await dialog.ShowAsync();
        }
        else
        {
            co_await ShowTipDialog(json.GetNamedString(L"Information"));
        }
    }

    // 观演人被选择
    void MainWindow::IDCardBindSelected(IInspectable const&, Controls::SelectionChangedEventArgs const& args)
    {
        if (auto items{ args.AddedItems() }; items && items.Size() == 1)
        {
            auto item{ items.GetAt(0).as<ShowStart::Viewer>() };
            mGlobalInfo.IdCard(item.ViewId());
            IDCardBindDialog().Hide();
        }
    }

    // 获取演出信息
    IAsyncAction MainWindow::GetDetailsClick(IInspectable const&, RoutedEventArgs const&) {
        winrt::apartment_context ui_thread;
        // 查演出信息
        co_await winrt::resume_background();
        JsonObject json{ work::api_activity_details(mClient, util::map_to_json({
            { L"user_id", strjson(mGlobalInfo.UserId()) },
            { L"sign", strjson(mGlobalInfo.Sign()) },
            { L"access_token", strjson(mGlobalInfo.AccessToken()) },
            { L"id_token", strjson(mGlobalInfo.IdToken()) },
            { L"token", strjson(mGlobalInfo.Token()) },
            { L"st_flpv", strjson(mGlobalInfo.StFlpv()) },
            { L"activityId", strjson(mGlobalInfo.ActivityId()) }
            })) };
        co_await ui_thread;

        mGlobalInfo.Message(json.GetNamedString(L"Message"));
        if (!json.GetNamedBoolean(L"OK")) {
            co_return co_await ShowTipDialog(json.GetNamedString(L"Information"));
        }

        auto showInfo{ ShowPanel() };
        showInfo.Title(json.GetNamedString(L"activityName"));
        showInfo.Poster(MakeImage(json.GetNamedString(L"avatar"), 300));
        showInfo.Price(json.GetNamedString(L"price"));
        showInfo.ShowTime(json.GetNamedString(L"showTime"));
        showInfo.Host(json.GetNamedString(L"host"));
        showInfo.Address(json.GetNamedString(L"address"));
        showInfo.HostAvatar(MakeImage(json.GetNamedString(L"hostAvatar"), 48));
        showInfo.Service(json.GetNamedString(L"service"));
        auto singersVector{ single_threaded_observable_vector<ShowStart::Singer>() };
        for (auto iter : json.GetNamedArray(L"Singers")) {
            auto singer{ iter.GetObject() };
            singersVector.Append(ShowStart::Singer{
                singer.GetNamedString(L"name"),
                singer.GetNamedString(L"avatar")
                });
        }
        showInfo.Singers(singersVector);

        // 查票列表
        co_await winrt::resume_background();
        JsonObject ticket_json{ work::api_ticket_list(mClient, util::map_to_json({
            { L"user_id", strjson(mGlobalInfo.UserId()) },
            { L"sign", strjson(mGlobalInfo.Sign()) },
            { L"access_token", strjson(mGlobalInfo.AccessToken()) },
            { L"id_token", strjson(mGlobalInfo.IdToken()) },
            { L"token", strjson(mGlobalInfo.Token()) },
            { L"st_flpv", strjson(mGlobalInfo.StFlpv()) },
            { L"activityId", strjson(mGlobalInfo.ActivityId()) }
            })) };
        co_await ui_thread;

        mGlobalInfo.Message(ticket_json.GetNamedString(L"Message"));
        if (!ticket_json.GetNamedBoolean(L"OK")) {
            co_return co_await ShowTipDialog(ticket_json.GetNamedString(L"Information"));
        }

        auto ticketsVector{ single_threaded_observable_vector<ShowStart::Ticket>() };
        for (auto iter : ticket_json.GetNamedArray(L"Tickets")) {
            auto ticket{ iter.GetObject() };
            ticketsVector.Append(ShowStart::Ticket{
                ticket.GetNamedString(L"ticketId"),
                ticket.GetNamedString(L"ticketType"),
                winrt::format(L"\xa5{}", ticket.GetNamedString(L"sellingPrice")),
                ticket.GetNamedString(L"sessionName"),
                ticket.GetNamedString(L"time"),
                ticket.GetNamedString(L"maxNum"),
                ticket.GetNamedString(L"remainTicket"),
                });
        }
        showInfo.Tickets(ticketsVector);
    }

    // 买票
    IAsyncAction MainWindow::BuyClick(IInspectable const&, RoutedEventArgs const&) {
        winrt::apartment_context ui_thread;
        // 输入购买张数
        InputTicketNumBox().Value(1.0);
        auto input_result{ co_await InputTicketNumDialog().ShowAsync() };
        if (input_result != Controls::ContentDialogResult::Primary) {
            co_return;
        }

        // 确认订单
        auto ticket_num{ InputTicketNumBox().Value() };
        co_await winrt::resume_background();
        JsonObject json{ work::api_order_confirm(mClient, util::map_to_json({
            { L"user_id", strjson(mGlobalInfo.UserId()) },
            { L"sign", strjson(mGlobalInfo.Sign()) },
            { L"access_token", strjson(mGlobalInfo.AccessToken()) },
            { L"id_token", strjson(mGlobalInfo.IdToken()) },
            { L"token", strjson(mGlobalInfo.Token()) },
            { L"st_flpv", strjson(mGlobalInfo.StFlpv()) },
            { L"activityId", strjson(mGlobalInfo.ActivityId()) },
            { L"ticketId", strjson(mGlobalInfo.TicketId()) },
            { L"TicketNum", JsonValue::CreateNumberValue(ticket_num) }
            })) };
        co_await ui_thread;
        
        mGlobalInfo.Message(json.GetNamedString(L"Message"));
        if (!json.GetNamedBoolean(L"OK")) {
            co_return co_await ShowTipDialog(json.GetNamedString(L"Information"));
        }

        JsonArray idcards;
        idcards.Append(intjson(std::stoi(mGlobalInfo.IdCard().data())));

        // 下单
        co_await winrt::resume_background();
        json.Insert(L"IdCards", idcards);
        JsonObject order_json{ work::api_order(mClient, json) };
        co_await ui_thread;

        mGlobalInfo.Message(order_json.GetNamedString(L"Message"));
        if (!order_json.GetNamedBoolean(L"OK")) {
            co_return co_await ShowTipDialog(order_json.GetNamedString(L"Information"));
        }

        // 查看下单结果
        co_await winrt::resume_background();
        JsonObject order_result_json{ work::api_get_order_result(mClient, util::map_to_json({
            { L"user_id", strjson(mGlobalInfo.UserId()) },
            { L"sign", strjson(mGlobalInfo.Sign()) },
            { L"access_token", strjson(mGlobalInfo.AccessToken()) },
            { L"id_token", strjson(mGlobalInfo.IdToken()) },
            { L"token", strjson(mGlobalInfo.Token()) },
            { L"st_flpv", strjson(mGlobalInfo.StFlpv()) },
            { L"orderJobKey", order_json.Lookup(L"orderJobKey") }
            })) };
        co_await ui_thread;

        mGlobalInfo.Message(order_result_json.GetNamedString(L"Message"));
        if (!order_result_json.GetNamedBoolean(L"OK")) {
            co_return co_await ShowTipDialog(order_result_json.GetNamedString(L"Information"));
        }

        co_await ShowTipDialog(L"购票成功!");
    }

    // 多线程抢票
    void MainWindow::MultiThreadBuyClick(IInspectable const& sender, RoutedEventArgs const&) {
        auto showPanel{ ShowPanel() };
        auto orderPanel{ OrderPanel() };
        auto button{ sender.as<Controls::AppBarButton>() };
        if (showPanel.Visibility() == Visibility::Visible) {
            showPanel.Visibility(Visibility::Collapsed);
            orderPanel.Visibility(Visibility::Visible);
            orderPanel.SetID(mGlobalInfo.ActivityId(), mGlobalInfo.TicketId());
            button.Label(L"票务详情");
            button.Icon(Controls::SymbolIcon{ Controls::Symbol::Upload });
        }
        else {
            showPanel.Visibility(Visibility::Visible);
            orderPanel.Visibility(Visibility::Collapsed);
            button.Label(L"多线程抢票");
            button.Icon(Controls::SymbolIcon{ Controls::Symbol::Download });
        }
    }

    // 买票
    IAsyncAction MainWindow::AboutClick(IInspectable const&, RoutedEventArgs const&)
    {
        co_await AboutDialog().ShowAsync();
    }
}