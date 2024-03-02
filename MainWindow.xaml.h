#pragma once
#include "MainWindow.g.h"

using namespace winrt::Microsoft::UI::Xaml;

namespace winrt::ShowStart::implementation {
    struct MainWindow : MainWindowT<MainWindow> {
        MainWindow();
    };
}

namespace winrt::ShowStart::factory_implementation {
    struct MainWindow : MainWindowT<MainWindow, implementation::MainWindow> { };
}
