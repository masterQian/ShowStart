#pragma once
#include "MainWindow.g.h"
#include <winrt/Windows.Web.Http.h>

using namespace winrt::Microsoft::UI::Xaml;

namespace winrt::ShowStart::implementation {
    struct MainWindow : MainWindowT<MainWindow> {
        MainWindow();

        ShowStart::Info mGlobalInfo;
        ShowStart::Info GlobalInfo() { return mGlobalInfo; }

        Windows::Web::Http::HttpClient mClient;
        Windows::Web::Http::HttpClient Client() { return mClient; }

        Windows::Foundation::IAsyncAction ShowTipDialog(hstring);

        Windows::Foundation::IAsyncAction UpdateTokenClick(IInspectable const&, RoutedEventArgs const&);
        Windows::Foundation::IAsyncAction GetDetailsClick(IInspectable const&, RoutedEventArgs const&);
        Windows::Foundation::IAsyncAction BuyClick(IInspectable const&, RoutedEventArgs const&);
        void MultiThreadBuyClick(IInspectable const&, RoutedEventArgs const&);
    };
}

namespace winrt::ShowStart::factory_implementation {
    struct MainWindow : MainWindowT<MainWindow, implementation::MainWindow> { };
}
