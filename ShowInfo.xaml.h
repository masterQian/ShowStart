#pragma once

#include "ShowInfo.g.h"

using namespace winrt::Microsoft::UI::Xaml;

namespace winrt::ShowStart::implementation {
    struct ShowInfo : ShowInfoT<ShowInfo> {
        ShowInfo() {
            mSingers = single_threaded_observable_vector<ShowStart::Singer>();
            mTickets = single_threaded_observable_vector<ShowStart::Ticket>();
        }

        event<Data::PropertyChangedEventHandler> mPropertyChanged;
        event_token PropertyChanged(Data::PropertyChangedEventHandler const& value) {
            return mPropertyChanged.add(value);
        }
        void PropertyChanged(event_token const& token) {
            mPropertyChanged.remove(token);
        }

        hstring mTitle;
        hstring Title() const { return mTitle; }
        void Title(hstring const& value) {
            if (value != mTitle) {
                mTitle = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"Title" });
            }
        }

        Media::ImageSource mPoster{ nullptr };
        Media::ImageSource Poster() const { return mPoster; }
        void Poster(Media::ImageSource const& value) {
            if (value != mPoster) {
                mPoster = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"Poster" });
            }
        }

        hstring mPrice;
        hstring Price() const { return mPrice; }
        void Price(hstring const& value) {
            if (value != mPrice) {
                mPrice = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"Price" });
            }
        }

        hstring mShowTime;
        hstring ShowTime() const { return mShowTime; }
        void ShowTime(hstring const& value) {
            if (value != mShowTime) {
                mShowTime = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"ShowTime" });
            }
        }

        hstring mHost;
        hstring Host() const { return mHost; }
        void Host(hstring const& value) {
            if (value != mHost) {
                mHost = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"Host" });
            }
        }

        hstring mAddress;
        hstring Address() const { return mAddress; }
        void Address(hstring const& value) {
            if (value != mAddress) {
                mAddress = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"Address" });
            }
        }

        Media::ImageSource mHostAvatar{ nullptr };
        Media::ImageSource HostAvatar() const { return mHostAvatar; }
        void HostAvatar(Media::ImageSource const& value) {
            if (value != mHostAvatar) {
                mHostAvatar = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"HostAvatar" });
            }
        }

        hstring mService;
        hstring Service() const { return mService; }
        void Service(hstring const& value) {
            if (value != mService) {
                mService = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"Service" });
            }
        }

        Windows::Foundation::Collections::IObservableVector<ShowStart::Singer> mSingers{ nullptr };
        Windows::Foundation::Collections::IObservableVector<ShowStart::Singer> Singers() const { return mSingers; }
        void Singers(Windows::Foundation::Collections::IObservableVector<ShowStart::Singer> const& value) {
            if (value != mSingers) {
                mSingers = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"Singers" });
            }
        }

        Windows::Foundation::Collections::IObservableVector<ShowStart::Ticket> mTickets{ nullptr };
        Windows::Foundation::Collections::IObservableVector<ShowStart::Ticket> Tickets() const { return mTickets; }
        void Tickets(Windows::Foundation::Collections::IObservableVector<ShowStart::Ticket> const& value) {
            if (value != mTickets) {
                mTickets = value;
                mPropertyChanged(*this, Data::PropertyChangedEventArgs{ L"Tickets" });
            }
        }

        void TicketClick(IInspectable const&, Controls::SelectionChangedEventArgs const&);
};
}

namespace winrt::ShowStart::factory_implementation {
    struct ShowInfo : ShowInfoT<ShowInfo, implementation::ShowInfo> { };
}
