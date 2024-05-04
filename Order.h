#pragma once
#include "Order.g.h"

using namespace winrt::Microsoft::UI::Xaml;

namespace winrt::ShowStart::implementation {
    struct Order : OrderT<Order> {
        Order(hstring const& user_id, hstring const& sign, hstring const& idcards) :
            mUserId{ user_id }, mSign{ sign }, mIdCards{ idcards } { }

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

        hstring mIdCards;
        hstring IdCards() const { return mIdCards; }
        void IdCards(hstring const& value) {
            if (value != mIdCards) {
                mIdCards = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"IdCards" });
            }
        }

        hstring mLog;
        hstring Log() const { return mLog; }
        void Log(hstring const& value)
        {
            if (value != mLog)
            {
                mLog = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"Log" });
            }
        }
    };
}

namespace winrt::ShowStart::factory_implementation {
    struct Order : OrderT<Order, implementation::Order> { };
}
