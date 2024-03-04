#include "pch.h"
#include "MainWindow.xaml.h"
#if __has_include("MainWindow.g.cpp")
#include "MainWindow.g.cpp"
#endif
#include "ShowStart.h"

using namespace winrt::Windows::Foundation;
using namespace winrt::Windows::Data::Json;

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
            mGlobalInfo.UserId(L"15171848");
            mGlobalInfo.Sign(L"35a0b68d7166fe9384732d9bdb5eac83");
            mGlobalInfo.StFlpv(util::uuid32());
            mGlobalInfo.Token(util::uuid32());
            mGlobalInfo.ActivityId(L"221229");
        }
    }

    // 更新Token
    IAsyncAction MainWindow::UpdateTokenClick(IInspectable const&, RoutedEventArgs const&) {
        mGlobalInfo.AccessToken(L"");
        mGlobalInfo.IdToken(L"");
        JsonObject json{ co_await work::api_get_token() };
        mGlobalInfo.Message(json.GetNamedString(L"Message"));
        if (!json.GetNamedBoolean(L"OK")) {
            co_return co_await ShowTipDialog(json.GetNamedString(L"Information"));
        }

        mGlobalInfo.AccessToken(json.GetNamedString(L"access_token"));
        mGlobalInfo.IdToken(json.GetNamedString(L"id_token"));
    }

    // 获取演出信息
    IAsyncAction MainWindow::GetDetailsClick(IInspectable const&, RoutedEventArgs const&) {
        // 查演出信息
        JsonObject json{ co_await work::api_activity_details() };
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
        JsonObject ticket_json{ co_await work::api_ticket_list() };
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
        // 输入购买张数
        InputTicketNumBox().Value(1.0);
        auto input_result{ co_await InputTicketNumDialog().ShowAsync() };
        if (input_result != Controls::ContentDialogResult::Primary) {
            co_return;
        }

        // 确认订单
        auto ticket_num{ InputTicketNumBox().Value() };
        JsonObject json{ co_await work::api_order_confirm(util::map_to_json({
            { L"TicketNum", JsonValue::CreateNumberValue(ticket_num) }
            })) };
        mGlobalInfo.Message(json.GetNamedString(L"Message"));
        if (!json.GetNamedBoolean(L"OK")) {
            co_return co_await ShowTipDialog(json.GetNamedString(L"Information"));
        }

        // 下单
        JsonObject order_json{ co_await work::api_order(json) };
        mGlobalInfo.Message(order_json.GetNamedString(L"Message"));
        if (!order_json.GetNamedBoolean(L"OK")) {
            co_return co_await ShowTipDialog(order_json.GetNamedString(L"Information"));
        }

        // 查看下单结果
        JsonObject order_result_json{ co_await work::api_get_order_result(util::map_to_json({
            { L"orderJobKey", order_json.Lookup(L"orderJobKey") }
            })) };
        mGlobalInfo.Message(order_result_json.GetNamedString(L"Message"));
        if (!order_result_json.GetNamedBoolean(L"OK")) {
            co_return co_await ShowTipDialog(order_result_json.GetNamedString(L"Information"));
        }

        co_await ShowTipDialog(L"购票成功!");
    }

    // 多线程抢票
    IAsyncAction MainWindow::MutilThreadBuyClick(IInspectable const&, RoutedEventArgs const&) {
        co_return;
    }
}