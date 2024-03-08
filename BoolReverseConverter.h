#pragma once
#include "BoolReverseConverter.g.h"

using namespace winrt::Microsoft::UI::Xaml;

namespace winrt::ShowStart::implementation {
    struct BoolReverseConverter : BoolReverseConverterT<BoolReverseConverter> {
        BoolReverseConverter() = default;

        IInspectable Convert(IInspectable const& value, Windows::UI::Xaml::Interop::TypeName const&, IInspectable const&, hstring const&) {
            return box_value(!unbox_value<bool>(value));
        }

        IInspectable ConvertBack(IInspectable const&, Windows::UI::Xaml::Interop::TypeName const&, IInspectable const&, hstring const&) {
            throw hresult_not_implemented{ L"BoolReverseConverter ConvertBack not implemented" };
        }
    };
}

namespace winrt::ShowStart::factory_implementation {
    struct BoolReverseConverter : BoolReverseConverterT<BoolReverseConverter, implementation::BoolReverseConverter> { };
}
