#pragma once
#include "Ticket.g.h"

using namespace winrt::Microsoft::UI::Xaml;

namespace winrt::ShowStart::implementation {
    struct Ticket : TicketT<Ticket> {
        Ticket() = delete;
        Ticket(hstring const& id, hstring const& type, hstring const& price, hstring const& session,
            hstring const& deadline, hstring const& max_num, hstring const& remain) {
            mId = id;
            mType = type;
            mPrice = price;
            mSession = session;
            mDeadline = deadline;
            mMaxNum = max_num;
            mRemain = remain;
        }

        hstring mId;
        hstring Id() const { return mId; }
        hstring mType;
        hstring Type() const { return mType; }
        hstring mPrice;
        hstring Price() const { return mPrice; }
        hstring mSession;
        hstring Session() const { return mSession; }
        hstring mDeadline;
        hstring Deadline() const { return mDeadline; }
        hstring mMaxNum;
        hstring MaxNum() const { return mMaxNum; }
        hstring mRemain;
        hstring Remain() const { return mRemain; }
    };
}

namespace winrt::ShowStart::factory_implementation {
    struct Ticket : TicketT<Ticket, implementation::Ticket> { };
}
