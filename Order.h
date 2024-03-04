#pragma once
#include "Order.g.h"

using namespace winrt::Microsoft::UI::Xaml;

namespace winrt::ShowStart::implementation {
    struct Order : OrderT<Order> {
        Order() { }

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

        double mTicketNum{ 1.0 };
        double TicketNum() const { return mTicketNum; }
        void TicketNum(double value) {
            if (value != mTicketNum) {
                mTicketNum = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"TicketNum" });
            }
        }

        double mLoopNum{ 1000.0 };
        double LoopNum() const { return mLoopNum; }
        void LoopNum(double value) {
            if (value != mLoopNum) {
                mLoopNum = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"LoopNum" });
            }
        }

        double mThreadNum{ 4.0 };
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
