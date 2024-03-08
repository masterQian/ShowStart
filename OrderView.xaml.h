#pragma once

#include "OrderView.g.h"

using namespace winrt::Microsoft::UI::Xaml;

namespace winrt::ShowStart::implementation {
    struct OrderView : OrderViewT<OrderView> {
        OrderView();
        
        std::vector<int> mTasks;

        Windows::Foundation::Collections::IObservableVector<hstring> mLogData{ nullptr };
        Windows::Foundation::Collections::IObservableVector<hstring> LogData() const { return mLogData; }

        Windows::Foundation::Collections::IObservableVector<ShowStart::Order> mOrders{ nullptr };
        Windows::Foundation::Collections::IObservableVector<ShowStart::Order> Orders() const { return mOrders; }

        void AddClick(IInspectable const&, RoutedEventArgs const&);
        void DeleteClick(IInspectable const&, RoutedEventArgs const&);
        void ClearClick(IInspectable const&, RoutedEventArgs const&);
        Windows::Foundation::IAsyncAction OrderTask(apartment_context ui_thread, int task_id, int* task_sign, hstring user_id, Windows::Data::Json::JsonObject confirm_json);
        Windows::Foundation::IAsyncAction StartClick(IInspectable const&, RoutedEventArgs const&);
        void StopClick(IInspectable const&, RoutedEventArgs const&);
    };
}

namespace winrt::ShowStart::factory_implementation {
    struct OrderView : OrderViewT<OrderView, implementation::OrderView> { };
}
