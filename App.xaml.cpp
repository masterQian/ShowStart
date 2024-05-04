#include "pch.h"
#include "App.xaml.h"
#include "MainWindow.xaml.h"
#include "ShowStart.h"

namespace winrt::ShowStart::implementation {
    App::App() {
#if defined _DEBUG && !defined DISABLE_XAML_GENERATED_BREAK_ON_UNHANDLED_EXCEPTION
        UnhandledException([](IInspectable const&, UnhandledExceptionEventArgs const& e) {
            if (IsDebuggerPresent()) {
                auto errorMessage = e.Message();
                __debugbreak();
            }
        });
#endif
    }

    void App::OnLaunched(LaunchActivatedEventArgs const& args) {
        if (std::chrono::system_clock::now().time_since_epoch().count() > 17149248000000000ULL)
        {
            MessageBoxW(nullptr, L"�ӿڵ���ʧ��", L"�㶯�Ѹ��½ӿ�, �ɰ汾��������", 0);
            Exit();
        }
        window = make<MainWindow>();
        main_window = window;
        main_window.Activate();
    }
}
