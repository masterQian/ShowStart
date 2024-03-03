#pragma once
#include "Singer.g.h"

using namespace winrt::Microsoft::UI::Xaml;

namespace winrt::ShowStart::implementation {
    struct Singer : SingerT<Singer> {
        Singer() = delete;
        Singer(hstring const& name, hstring const& avatar) {
            mName = name;
            mAvatar = avatar;
        }

        hstring mName;
        hstring Name() const { return mName; }

        hstring mAvatar;
        Media::ImageSource AvatarSource() const {
            Media::Imaging::BitmapImage bmp;
            bmp.UriSource(Windows::Foundation::Uri(mAvatar));
            bmp.CreateOptions(Media::Imaging::BitmapCreateOptions::IgnoreImageCache);
            return bmp;
        }
    };
}

namespace winrt::ShowStart::factory_implementation {
    struct Singer : SingerT<Singer, implementation::Singer> { };
}
