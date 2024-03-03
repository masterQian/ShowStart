#include "pch.h"
#include "ShowInfo.xaml.h"
#if __has_include("ShowInfo.g.cpp")
#include "ShowInfo.g.cpp"
#endif
#include "ShowStart.h"

namespace winrt::ShowStart::implementation {
    void ShowInfo::TicketClick(IInspectable const&, Controls::SelectionChangedEventArgs const& args) {
        ShowStart::Info info{ window.GlobalInfo() };
        auto items{ args.AddedItems() };
        if (items.Size() == 1U) {
            auto ticket{ items.GetAt(0U).as<ShowStart::Ticket>() };
            info.TicketId(ticket.Id());
        }
    }
}