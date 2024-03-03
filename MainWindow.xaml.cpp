#include "pch.h"
#include "MainWindow.xaml.h"
#if __has_include("MainWindow.g.cpp")
#include "MainWindow.g.cpp"
#endif
#include "ShowStart.h"

using namespace winrt::Windows::Foundation;

namespace winrt::ShowStart::implementation {
    // 设置窗口大小
    void AdjustWindowSize(Microsoft::UI::Windowing::AppWindow const& appWindow) {
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
        appWindow.MoveAndResize(actualRect);
    }

    // 初始化信息
    void InitializeInfo(ShowStart::Info const& info) {
        info.UserId(L"15171848");
        info.Sign(L"0cc1336675ff6f4393cd3b13f14bfba8");
        info.StFlpv(L"Rr72G4045ODi6fTH0250");
        info.Token(util::uuid32());
        info.ActivityId(L"221229");
    }

    MainWindow::MainWindow() {
        InitializeComponent();
        ExtendsContentIntoTitleBar(true);
        SetTitleBar(SP_TitleBar());
        AdjustWindowSize(AppWindow());
        InitializeInfo(mGlobalInfo);

        Closed([ ] (auto...) {
            window = nullptr;
        });

        MainGrid().Loaded([] (auto...) -> IAsyncAction {
            co_await work::UpdateToken();
        });

        GetDetailsButton().Click([] (auto...) -> IAsyncAction {
            co_await work::GetDetails();
        });

        BuyTicketsButton().Click([ ] (auto...) -> IAsyncAction {
            co_await work::BuyTickets();
        });
    }
}
