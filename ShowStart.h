#pragma once
#include <winrt/ShowStart.h>
#include <winrt/Windows.Foundation.Collections.h>
#include <winrt/Windows.Web.Http.h>

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

[[nodiscard]] inline winrt::Windows::Data::Json::JsonValue operator ""_json(wchar_t const* str, unsigned long long size) {
	return winrt::Windows::Data::Json::JsonValue::CreateStringValue(winrt::hstring(str, static_cast<winrt::hstring::size_type>(size)));
}

[[nodiscard]] inline winrt::Windows::Data::Json::JsonValue operator ""_json(unsigned long long value) {
	return winrt::Windows::Data::Json::JsonValue::CreateNumberValue(static_cast<double>(value));
}

[[nodiscard]] inline winrt::Windows::Data::Json::JsonValue operator ""_json(long double value) {
	return winrt::Windows::Data::Json::JsonValue::CreateNumberValue(static_cast<double>(value));
}

[[nodiscard]] inline winrt::Windows::Data::Json::JsonValue strjson(winrt::hstring const& value) {
	return winrt::Windows::Data::Json::JsonValue::CreateStringValue(value);
}

[[nodiscard]] inline winrt::Windows::Data::Json::JsonValue intjson(int value) {
	return winrt::Windows::Data::Json::JsonValue::CreateNumberValue(static_cast<double>(value));
}

namespace work {
	winrt::Windows::Data::Json::JsonObject api_get_token(
			winrt::Windows::Web::Http::HttpClient client,
			winrt::Windows::Data::Json::JsonObject args
		);
	winrt::Windows::Data::Json::JsonObject api_activity_details(
		winrt::Windows::Web::Http::HttpClient client,
		winrt::Windows::Data::Json::JsonObject args
	);
	winrt::Windows::Data::Json::JsonObject api_ticket_list(
			winrt::Windows::Web::Http::HttpClient client,
			winrt::Windows::Data::Json::JsonObject args
		);
	winrt::Windows::Data::Json::JsonObject api_order_confirm(
			winrt::Windows::Web::Http::HttpClient client,
			winrt::Windows::Data::Json::JsonObject args
		);
	winrt::Windows::Data::Json::JsonObject api_order(
			winrt::Windows::Web::Http::HttpClient client,
			winrt::Windows::Data::Json::JsonObject args
		);
	winrt::Windows::Data::Json::JsonObject api_get_order_result(
			winrt::Windows::Web::Http::HttpClient client,
			winrt::Windows::Data::Json::JsonObject args
		);
}