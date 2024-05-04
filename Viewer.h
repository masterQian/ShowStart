#pragma once
#include "Viewer.g.h"

using namespace winrt::Microsoft::UI::Xaml;

namespace winrt::ShowStart::implementation {
    struct Viewer : ViewerT<Viewer> {
        Viewer(hstring const& view_id, hstring const& name, hstring const& idcard) : mViewId{ view_id }, mName{ name }, mIdCard{ idcard } { }

        hstring mViewId;
        hstring ViewId() const { return mViewId; }
        hstring mName;
        hstring Name() const { return mName; }
        hstring mIdCard;
        hstring IdCard() const { return mIdCard; }
    };
}

namespace winrt::ShowStart::factory_implementation {
    struct Viewer : ViewerT<Viewer, implementation::Viewer>{ };
}
