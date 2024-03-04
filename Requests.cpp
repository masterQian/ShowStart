#include "pch.h"
#include "ShowStart.h"

using namespace winrt;
using namespace Windows::Foundation;
using namespace Windows::Web::Http;
using namespace Windows::Storage::Streams;
using namespace Windows::Data::Json;
using namespace Microsoft::UI::Xaml;

namespace work {
	[[nodiscard]] inline JsonValue operator ""_json(wchar_t const* str, unsigned long long size) {
		return JsonValue::CreateStringValue(hstring(str, static_cast<hstring::size_type>(size)));
	}

	[[nodiscard]] inline JsonValue operator ""_json(unsigned long long value) {
		return JsonValue::CreateNumberValue(static_cast<double>(value));
	}

	[[nodiscard]] inline JsonValue operator ""_json(long double value) {
		return JsonValue::CreateNumberValue(static_cast<double>(value));
	}

	[[nodiscard]] inline JsonValue strjson(hstring const& value) {
		return JsonValue::CreateStringValue(value);
	}

	[[nodiscard]] inline JsonValue intjson(int value) {
		return JsonValue::CreateNumberValue(static_cast<double>(value));
	}

	// 处理请求头
	void MakeHeader(Headers::HttpRequestHeaderCollection const& headers, hstring const& crtrace_id, hstring const& url, hstring const& data, ShowStart::Info const& info) {
		hstring user_id{ info.UserId() };
		hstring sign{ info.Sign() };
		hstring access_token{ info.AccessToken() };
		hstring id_token{ info.IdToken() };
		hstring token{ info.Token() };
		hstring st_flpv{ info.StFlpv() };
		hstring v{ crtrace_id.empty() ? util::uuid32() + util::timestamp13() : crtrace_id };
		hstring crp_sign{ access_token + sign + id_token + user_id + L"wap" + token + data + url + L"997" + L"wap" + v };

		headers.UserAgent().TryParseAdd(L"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0");
		headers.Insert(L"CUSAT", access_token);
		headers.Insert(L"CUSUT", sign);
		headers.Insert(L"CUSIT", id_token);
		headers.Insert(L"CUSID", user_id);
		headers.Insert(L"CUSNAME", L"nil");
		headers.Insert(L"CTERMINAL", L"wap");
		headers.Insert(L"CSAPPID", L"wap");
		headers.Insert(L"CDEVICENO", token);
		headers.Insert(L"CUUSERREF", token);
		headers.Insert(L"CVERSION", L"997");
		headers.Insert(L"CDEVICEINFO", L"%7B%22vendorName%22:%22%22,%22deviceMode%22:%22PC%22,%22deviceName%22:%22%22,%22systemName%22:%22windows%22,%22systemVersion%22:%2210%20x64%22,%22cpuMode%22:%22%20%22,%22cpuCores%22:%22%22,%22cpuArch%22:%22%22,%22memerySize%22:%22%22,%22diskSize%22:%22%22,%22network%22:%22UNKNOWN%22,%22resolution%22:%221536*864%22,%22pixelResolution%22:%22%22%7D");
		headers.Insert(L"CRTRACEID", v);
		headers.Insert(L"st_flpv", st_flpv);
		headers.Insert(L"CTRACKPATH", L"");
		headers.Insert(L"CSOURCEPATH", L"");
		headers.Insert(L"CRPSIGN", util::get_md5(crp_sign));
	}

	// 加密下单数据
	hstring EncryptOrderData(hstring const& data, hstring const& crtrace_id) {
		ShowStart::Info info{ window.GlobalInfo() };
		hstring T{ crtrace_id }, P{ info.Token() };
		std::wstring k;
		for (auto& i : { 2, 11, 22, 23, 29, 30, 33, 36 }) {
			k.push_back(T[i - 1]);
		}
		for (auto& i : { 1, 7, 8, 12, 15, 18, 19, 28 }) {
			k.push_back(P[i - 1]);
		}
		return util::get_AES_base64(data, k.data());
	}
}

namespace work {
	IAsyncOperation<JsonObject> api_get_token() {
		JsonObject ret;
		HttpClient client{ window.Client() };
		const ShowStart::Info info{ window.GlobalInfo() };
		Uri url{ L"https://wap.showstart.com/v3/waf/gettoken" };
		hstring data{ util::map_to_json({
			{ L"st_flpv", strjson(info.StFlpv()) },
			{ L"sign", strjson(info.Sign()) },
			{ L"trackPath", L""_json }
			}).Stringify() };
		HttpStringContent content{ data, UnicodeEncoding::Utf8, L"application/json" };
		MakeHeader(client.DefaultRequestHeaders(), L"", L"/waf/gettoken", data, info);
		HttpResponseMessage res{ co_await client.PostAsync(url, content) };
		res.EnsureSuccessStatusCode();
		hstring body{ co_await res.Content().ReadAsStringAsync() };
		ret.Insert(L"Message", strjson(body));
		auto json{ JsonObject::Parse(body) };
		auto ok{ json.GetNamedString(L"state") == L"1" && json.GetNamedBoolean(L"success") };
		ret.Insert(L"OK", JsonValue::CreateBooleanValue(ok));
		if (ok) {
			auto result{ json.GetNamedObject(L"result") };
			ret.Insert(L"access_token", result.GetNamedObject(L"accessToken").Lookup(L"access_token"));
			ret.Insert(L"id_token", result.GetNamedObject(L"idToken").Lookup(L"id_token"));
		}
		else {
			ret.Insert(L"Information", strjson(json.GetNamedString(L"msg", L"请求服务器失败")));
		}
		co_return ret;
	}

	IAsyncOperation<JsonObject> api_activity_details() {
		JsonObject ret;
		HttpClient client{ window.Client() };
		const ShowStart::Info info{ window.GlobalInfo() };
		Uri url{ L"https://wap.showstart.com/v3/wap/activity/details" };
		hstring data{ util::map_to_json({
			{ L"st_flpv", strjson(info.StFlpv()) },
			{ L"sign", strjson(info.Sign()) },
			{ L"trackPath", L""_json },
			{ L"coupon", L""_json },
			{ L"activityId", strjson(info.ActivityId()) },
			{ L"shareId", L""_json }
			}).Stringify() };
		HttpStringContent content{ data, UnicodeEncoding::Utf8, L"application/json" };
		MakeHeader(client.DefaultRequestHeaders(), L"", L"/wap/activity/details", data, info);
		HttpResponseMessage res{ co_await client.PostAsync(url, content) };
		res.EnsureSuccessStatusCode();
		hstring body{ co_await res.Content().ReadAsStringAsync() };
		ret.Insert(L"Message", strjson(body));
		auto json{ JsonObject::Parse(body) };
		auto ok{ json.GetNamedString(L"state") == L"1" };
		ret.Insert(L"OK", JsonValue::CreateBooleanValue(ok));
		if (ok) {
			auto result{ json.GetNamedObject(L"result") };
			ret.Insert(L"activityName", strjson(util::strip(result.GetNamedString(L"activityName"))));
			ret.Insert(L"avatar", result.Lookup(L"avatar"));
			ret.Insert(L"price", result.Lookup(L"price"));
			ret.Insert(L"showTime", result.Lookup(L"showTime"));
			auto site{ result.GetNamedObject(L"site") };
			ret.Insert(L"host", site.Lookup(L"name"));
			ret.Insert(L"address", site.Lookup(L"address"));
			ret.Insert(L"hostAvatar", site.Lookup(L"avatar"));
			ret.Insert(L"service", strjson(util::replace_br(result.GetNamedString(L"serviceTemplateEnContent"))));
			JsonArray ret_singers;
			if (auto singers{ result.GetNamedArray(L"sessionUserInfos") }; singers.Size() > 0U) {
				for (auto iter : singers.GetObjectAt(0U).GetNamedArray(L"userInfos")) {
					auto singer{ iter.GetObject() };
					ret_singers.Append(util::map_to_json({
						{ L"name", singer.Lookup(L"name") },
						{ L"avatar", singer.Lookup(L"avatar") }
						}));
				}
			}
			ret.Insert(L"Singers", ret_singers);
		}
		else {
			ret.Insert(L"Information", strjson(json.GetNamedString(L"msg", L"请求服务器失败")));
		}
		co_return ret;
	}

	IAsyncOperation<JsonObject> api_ticket_list() {
		JsonObject ret;
		HttpClient client{ window.Client() };
		const ShowStart::Info info{ window.GlobalInfo() };
		Uri url{ L"https://wap.showstart.com/v3/wap/activity/V2/ticket/list" };
		hstring data{ util::map_to_json({
			{ L"st_flpv", strjson(info.StFlpv()) },
			{ L"sign", strjson(info.Sign()) },
			{ L"trackPath", L""_json },
			{ L"coupon", L""_json },
			{ L"activityId", strjson(info.ActivityId()) }
			}).Stringify() };
		HttpStringContent content{ data, UnicodeEncoding::Utf8, L"application/json" };
		MakeHeader(client.DefaultRequestHeaders(), L"", L"/wap/activity/V2/ticket/list", data, info);
		HttpResponseMessage res{ co_await client.PostAsync(url, content) };
		res.EnsureSuccessStatusCode();
		hstring body{ co_await res.Content().ReadAsStringAsync() };
		ret.Insert(L"Message", strjson(body));
		auto json{ JsonObject::Parse(body) };
		auto ok{ json.GetNamedString(L"state") == L"1" };
		ret.Insert(L"OK", JsonValue::CreateBooleanValue(ok));
		if (ok) {
			JsonArray ret_tickets;
			for (auto sessions : json.GetNamedArray(L"result")) {
				auto session{ sessions.GetObject() };
				auto session_name{ session.Lookup(L"sessionName") };
				for (auto iter : session.GetNamedArray(L"ticketList")) {
					auto ticket{ iter.GetObject() };
					hstring remain;
					switch ((int)ticket.GetNamedNumber(L"remainTicket")) {
					case 0: remain = L"告罄"; break;
					case 1: remain = L"余票紧张"; break;
					case 2: remain = L"余票充足"; break;
					default: remain = L"余票未知"; break;
					}
					ret_tickets.Append(util::map_to_json({
						{ L"ticketId", ticket.Lookup(L"ticketId") },
						{ L"ticketType", ticket.Lookup(L"ticketType") },
						{ L"sellingPrice", ticket.Lookup(L"sellingPrice") },
						{ L"sessionName", session_name },
						{ L"time", ticket.Lookup(L"time") },
						{ L"maxNum", strjson(winrt::format(L"限购{}张", (int)ticket.GetNamedNumber(L"canBuyNum"))) },
						{ L"remainTicket", strjson(remain) }
						}));
				}
			}
			ret.Insert(L"Tickets", ret_tickets);
		}
		else {
			ret.Insert(L"Information", strjson(json.GetNamedString(L"msg", L"请求服务器失败")));
		}
		co_return ret;
	}

	IAsyncOperation<JsonObject> api_order_confirm(JsonObject args) {
		JsonObject ret;
		HttpClient client{ window.Client() };
		ShowStart::Info info{ window.GlobalInfo() };
		auto ticket_num{ (int)args.GetNamedNumber(L"TicketNum") };
		Uri url{ L"https://wap.showstart.com/v3/order/wap/order/confirm" };
		hstring data{ util::map_to_json({
			{ L"st_flpv", strjson(info.StFlpv()) },
			{ L"sign", strjson(info.Sign()) },
			{ L"trackPath", L""_json },
			{ L"sequence", strjson(info.ActivityId()) },
			{ L"ticketId", strjson(info.TicketId()) },
			{ L"ticketNum", strjson(to_hstring(ticket_num)) },
			}).Stringify() };
		HttpStringContent content{ data, UnicodeEncoding::Utf8, L"application/json" };
		MakeHeader(client.DefaultRequestHeaders(), L"", L"/order/wap/order/confirm", data, info);
		HttpResponseMessage res{ co_await client.PostAsync(url, content) };
		res.EnsureSuccessStatusCode();
		hstring body{ co_await res.Content().ReadAsStringAsync() };
		auto json{ JsonObject::Parse(body) };
		auto ok{ json.GetNamedString(L"state") == L"1" };
		if (ok) {
			auto orderInfoVo{ json.GetNamedObject(L"result").GetNamedObject(L"orderInfoVo") };
			auto ticketPriceVo{ orderInfoVo.GetNamedObject(L"ticketPriceVo") };
			auto price{ ticketPriceVo.GetNamedNumber(L"price") };
			ret = util::map_to_json({
				{ L"OK", JsonValue::CreateBooleanValue(true) },
				{ L"skuType", ticketPriceVo.Lookup(L"ticketType") },
				{ L"num", strjson(to_hstring(ticket_num)) },
				{ L"goodsId", orderInfoVo.Lookup(L"activityId") },
				{ L"skuId", strjson(info.TicketId()) },
				{ L"price", JsonValue::CreateNumberValue(price) },
				{ L"goodsPhoto", orderInfoVo.Lookup(L"poster") },
				{ L"dyPOIType", ticketPriceVo.Lookup(L"dyPOIType") },
				{ L"goodsName", orderInfoVo.Lookup(L"title") },
				{ L"areaCode", orderInfoVo.Lookup(L"areaCode") },
				{ L"telephone", orderInfoVo.Lookup(L"telephone") },
				{ L"sessionId", orderInfoVo.Lookup(L"sessionId") },
				{ L"totalAmount", strjson(winrt::format(L"{:.2f}", price * ticket_num)) }
				});
		}
		else {
			ret.Insert(L"OK", JsonValue::CreateBooleanValue(false));
			ret.Insert(L"Information", strjson(json.GetNamedString(L"msg", L"请求服务器失败")));
		}
		ret.Insert(L"Message", strjson(body));
		co_return ret;
	}

	IAsyncOperation<JsonObject> api_order(JsonObject args) {
		JsonObject ret;
		HttpClient client{ window.Client() };
		ShowStart::Info info{ window.GlobalInfo() };
		Uri url{ L"https://wap.showstart.com/v3/nj/order/order" };
		hstring crtrace_id{ util::uuid32() + util::timestamp13() };
		JsonArray order_details;
		order_details.Append(util::map_to_json({
			{ L"goodsType", 1_json },
			{ L"skuType", args.Lookup(L"skuType") },
			{ L"num", args.Lookup(L"num") },
			{ L"goodsId", args.Lookup(L"goodsId") },
			{ L"skuId", args.Lookup(L"skuId") },
			{ L"price", args.Lookup(L"price") },
			{ L"goodsPhoto", args.Lookup(L"goodsPhoto") },
			{ L"dyPOIType", args.Lookup(L"dyPOIType") },
			{ L"goodsName", args.Lookup(L"goodsName") }
			}));
		auto json_data{ util::map_to_json({
			{ L"orderDetails", order_details },
			{ L"commonPerfomerIds", JsonArray{ } },
			{ L"areaCode", args.Lookup(L"areaCode") },
			{ L"telephone", args.Lookup(L"telephone") },
			{ L"addressId", L""_json },
			{ L"teamId", L""_json },
			{ L"couponId", L""_json },
			{ L"checkCode", L""_json },
			{ L"source", 0_json },
			{ L"discount", 0_json },
			{ L"sessionId", args.Lookup(L"sessionId") },
			{ L"freight", 0_json },
			{ L"amountPayable", args.Lookup(L"totalAmount") },
			{ L"totalAmount", args.Lookup(L"totalAmount") },
			{ L"partner", L""_json },
			{ L"orderSource", 1_json },
			{ L"videoId", L""_json },
			{ L"payVideotype", L""_json },
			{ L"st_flpv", strjson(info.StFlpv()) },
			{ L"sign", strjson(info.Sign()) },
			{ L"trackPath", L""_json }
			}) };
		JsonObject encrypt_data{ util::map_to_json({
			{ L"q", strjson(EncryptOrderData(json_data.Stringify(), crtrace_id)) }
			}) };
		hstring data{ encrypt_data.Stringify() };
		HttpStringContent content{ data, UnicodeEncoding::Utf8, L"application/json" };
		MakeHeader(client.DefaultRequestHeaders(), crtrace_id, L"/nj/order/order", data, info);
		HttpResponseMessage res{ co_await client.PostAsync(url, content) };
		res.EnsureSuccessStatusCode();
		hstring body{ co_await res.Content().ReadAsStringAsync() };
		ret.Insert(L"Message", strjson(body));
		auto json{ JsonObject::Parse(body) };
		auto ok{ json.GetNamedString(L"state") == L"1" && json.GetNamedBoolean(L"success") };
		ret.Insert(L"OK", JsonValue::CreateBooleanValue(ok));
		if (ok) {
			ret.Insert(L"orderJobKey", json.GetNamedObject(L"result").Lookup(L"orderJobKey"));
		}
		else {
			ret.Insert(L"Information", json.Lookup(L"msg"));
		}
		co_return ret;
	}

	IAsyncOperation<JsonObject> api_get_order_result(JsonObject args) {
		JsonObject ret;
		HttpClient client{ window.Client() };
		ShowStart::Info info{ window.GlobalInfo() };
		Uri url{ L"https://wap.showstart.com/v3/nj/order/getOrderResult" };
		hstring crtrace_id{ util::uuid32() + util::timestamp13() };
		auto json_data{ util::map_to_json({
			{ L"orderJobKey", args.Lookup(L"orderJobKey") },
			{ L"st_flpv", strjson(info.StFlpv()) },
			{ L"sign", strjson(info.Sign()) },
			{ L"trackPath", L""_json }
			}) };
		JsonObject encrypt_data{ util::map_to_json({
			{ L"q", strjson(EncryptOrderData(json_data.Stringify(), crtrace_id)) }
			}) };
		hstring data{ encrypt_data.Stringify() };
		HttpStringContent content{ data, UnicodeEncoding::Utf8, L"application/json" };
		MakeHeader(client.DefaultRequestHeaders(), crtrace_id, L"/nj/order/getOrderResult", data, info);
		HttpResponseMessage res{ co_await client.PostAsync(url, content) };
		res.EnsureSuccessStatusCode();
		hstring body{ co_await res.Content().ReadAsStringAsync() };
		ret.Insert(L"Message", strjson(body));
		auto json{ JsonObject::Parse(body) };
		auto ok{ json.GetNamedString(L"state") == L"1" && json.GetNamedBoolean(L"success") };
		ret.Insert(L"OK", JsonValue::CreateBooleanValue(ok));
		if (!ok) {
			ret.Insert(L"Information", json.Lookup(L"msg"));
		}
		co_return ret;
	}
}