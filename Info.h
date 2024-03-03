#pragma once
#include "Info.g.h"

using namespace winrt::Microsoft::UI::Xaml;

namespace winrt::ShowStart::implementation {
    struct Info : InfoT<Info> {
        Info() { }

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

        hstring mStFlpv;
        hstring StFlpv() const { return mStFlpv; }
        void StFlpv(hstring const& value) {
            if (value != mStFlpv) {
                mStFlpv = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"StFlpv" });
            }
        }

        hstring mToken;
        hstring Token() const { return mToken; }
        void Token(hstring const& value) {
            if (value != mToken) {
                mToken = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"Token" });
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

        hstring mAccessToken;
        hstring AccessToken() const { return mAccessToken; }
        void AccessToken(hstring const& value) {
            if (value != mAccessToken) {
                mAccessToken = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"AccessToken" });
            }
        }

        hstring mIdToken;
        hstring IdToken() const { return mIdToken; }
        void IdToken(hstring const& value) {
            if (value != mIdToken) {
                mIdToken = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"IdToken" });
            }
        }

        hstring mMessage;
        hstring Message() const { return mMessage; }
        void Message(hstring const& value) {
            if (value != mMessage) {
                mMessage = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"Message" });
            }
        }
    };
}

namespace winrt::ShowStart::factory_implementation {
    struct Info : InfoT<Info, implementation::Info>{ };
}
