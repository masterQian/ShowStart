#pragma once
#include "App.xaml.g.h"

using namespace winrt::Microsoft::UI::Xaml;

namespace winrt::ShowStart::implementation {
    struct App : AppT<App> {
        App();
        void OnLaunched(LaunchActivatedEventArgs const&);

        Window window{ nullptr };
    };
}
