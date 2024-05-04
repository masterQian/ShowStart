#pragma once

#include "OrderView.g.h"

using namespace winrt::Microsoft::UI::Xaml;

namespace winrt::ShowStart::implementation {
    struct OrderView : OrderViewT<OrderView> {
        OrderView();

        void SetID(hstring const& activity_id, hstring const& ticket_id)
        {
            TB_Activity().Text(activity_id);
            TB_Ticket().Text(ticket_id);
        }

        Windows::Foundation::Collections::IObservableVector<ShowStart::Order> mOrders;
        Windows::Foundation::Collections::IObservableVector<ShowStart::Order> Orders() const { return mOrders; }

        Windows::Foundation::IAsyncAction Import_Click(IInspectable const&, RoutedEventArgs const&);
        void Add_Click(IInspectable const&, RoutedEventArgs const&);
        void Delete_Click(IInspectable const&, RoutedEventArgs const&);
        void Clear_Click(IInspectable const&, RoutedEventArgs const&);

        Windows::Foundation::IAsyncAction Order_Task(ShowStart::Order order);
        void Start_Click(IInspectable const&, RoutedEventArgs const&);
    };
}

namespace winrt::ShowStart::factory_implementation {
    struct OrderView : OrderViewT<OrderView, implementation::OrderView> { };
}
