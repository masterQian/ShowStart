#pragma once
#include "Order.g.h"

using namespace winrt::Microsoft::UI::Xaml;

namespace winrt::ShowStart::implementation {
    struct Order : OrderT<Order> {
        Order(hstring const& user_id, hstring const& sign, hstring const& activity_id,
            hstring const& ticket_id, double ticket_num, double thread_num) :
            mUserId{ user_id }, mSign{ sign }, mActivityId{ activity_id }, mTicketId{ ticket_id },
            mTicketNum{ ticket_num }, mThreadNum{ thread_num } { }

        event<Data::PropertyChangedEventHandler> mPropertyChanged;
        event_token PropertyChanged(Data::PropertyChangedEventHandler const& value) {
            return mPropertyChanged.add(value);
        }
        void PropertyChanged(event_token const& token) {
            mPropertyChanged.remove(token);
        }

        hstring mUserId;
        hstring UserId() const { return mUserId; }
        void UserId(hstring const& value) {
            if (value != mUserId) {
                mUserId = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"UserId" });
            }
        }

        hstring mSign;
        hstring Sign() const { return mSign; }
        void Sign(hstring const& value) {
            if (value != mSign) {
                mSign = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"Sign" });
            }
        }

        hstring mActivityId;
        hstring ActivityId() const { return mActivityId; }
        void ActivityId(hstring const& value) {
            if (value != mActivityId) {
                mActivityId = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"ActivityId" });
            }
        }

        hstring mTicketId;
        hstring TicketId() const { return mTicketId; }
        void TicketId(hstring const& value) {
            if (value != mTicketId) {
                mTicketId = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"TicketId" });
            }
        }

        double mTicketNum;
        double TicketNum() const { return mTicketNum; }
        void TicketNum(double value) {
            if (value != mTicketNum) {
                mTicketNum = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"TicketNum" });
            }
        }

        double mThreadNum;
        double ThreadNum() const { return mThreadNum; }
        void ThreadNum(double value) {
            if (value != mThreadNum) {
                mThreadNum = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"ThreadNum" });
            }
        }
    };
}

namespace winrt::ShowStart::factory_implementation {
    struct Order : OrderT<Order, implementation::Order> { };
}
