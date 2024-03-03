#pragma once
#include <winrt/ShowStart.h>
#include <winrt/Windows.Foundation.Collections.h>

inline winrt::ShowStart::MainWindow window{ nullptr };

namespace util {
	winrt::hstring strip(winrt::hstring const& data) noexcept;
	winrt::hstring replace_br(winrt::hstring const& data) noexcept;
	winrt::hstring timestamp13() noexcept;
	winrt::hstring uuid32() noexcept;
	winrt::Windows::Data::Json::JsonObject map_to_json(std::unordered_map<winrt::hstring, winrt::Windows::Data::Json::IJsonValue> const& map) noexcept;
	winrt::hstring get_md5(winrt::hstring const& data) noexcept;
	winrt::hstring get_AES_base64(winrt::hstring const& data, winrt::hstring const& key) noexcept;
}

namespace work {
	winrt::Windows::Foundation::IAsyncAction UpdateToken();
	winrt::Windows::Foundation::IAsyncAction GetDetails();
	winrt::Windows::Foundation::IAsyncAction BuyTickets();
}