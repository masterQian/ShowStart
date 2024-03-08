#include "pch.h"
#include "ShowStart.h"

using namespace winrt;
using namespace Windows::Foundation;
using namespace Windows::Web::Http;
using namespace Windows::Storage::Streams;
using namespace Windows::Data::Json;
using namespace Microsoft::UI::Xaml;

namespace work {
	// 处理请求头
	void MakeHeader(Headers::HttpRequestHeaderCollection const& headers, hstring const& crtrace_id,
		hstring const& url, hstring const& data, hstring const& UserId, hstring const& Sign,
		hstring const& AccessToken, hstring const& IdToken, hstring const& Token, hstring const& StFlpv) {
		
		hstring v{ crtrace_id.empty() ? util::uuid32() + util::timestamp13() : crtrace_id };
		hstring crp_sign{ AccessToken + Sign + IdToken + UserId + L"wap" + Token + data + url + L"997" + L"wap" + v };
		
		headers.UserAgent().TryParseAdd(L"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0");
		headers.Insert(L"CUSAT", AccessToken);
		headers.Insert(L"CUSUT", Sign);
		headers.Insert(L"CUSIT", IdToken);
		headers.Insert(L"CUSID", UserId);
		headers.Insert(L"CUSNAME", L"nil");
		headers.Insert(L"CTERMINAL", L"wap");
		headers.Insert(L"CSAPPID", L"wap");
		headers.Insert(L"CDEVICENO", Token);
		headers.Insert(L"CUUSERREF", Token);
		headers.Insert(L"CVERSION", L"997");
		headers.Insert(L"CDEVICEINFO", L"%7B%22vendorName%22:%22%22,%22deviceMode%22:%22PC%22,%22deviceName%22:%22%22,%22systemName%22:%22windows%22,%22systemVersion%22:%2210%20x64%22,%22cpuMode%22:%22%20%22,%22cpuCores%22:%22%22,%22cpuArch%22:%22%22,%22memerySize%22:%22%22,%22diskSize%22:%22%22,%22network%22:%22UNKNOWN%22,%22resolution%22:%221536*864%22,%22pixelResolution%22:%22%22%7D");
		headers.Insert(L"CRTRACEID", v);
		headers.Insert(L"st_flpv", StFlpv);
		headers.Insert(L"CTRACKPATH", L"");
		headers.Insert(L"CSOURCEPATH", L"");
		headers.Insert(L"CRPSIGN", util::get_md5(crp_sign));
	}

	// 加密下单数据
	hstring EncryptOrderData(hstring const& data, hstring const& crtrace_id, hstring const& token) {
		hstring T{ crtrace_id }, P{ token };
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
	// [request]
	// user_id
	// sign
	// token
	// st_flpv
	// [response]
	// OK 是否成功
	// Message 原始文本
	// access_token
	// id_token
	// <option: !OK> Information 错误信息
	JsonObject api_get_token(HttpClient client, JsonObject args) {
		JsonObject ret;
		Uri url{ L"https://wap.showstart.com/v3/waf/gettoken" };
		hstring data{ util::map_to_json({
			{ L"st_flpv", args.Lookup(L"st_flpv") },
			{ L"sign", args.Lookup(L"sign") },
			{ L"trackPath", L""_json }
			}).Stringify() };
		HttpStringContent content{ data, UnicodeEncoding::Utf8, L"application/json" };
		MakeHeader(client.DefaultRequestHeaders(), L"", L"/waf/gettoken", data,
			args.GetNamedString(L"user_id"), args.GetNamedString(L"sign"), L"", L"",
			args.GetNamedString(L"token"), args.GetNamedString(L"st_flpv"));
		HttpResponseMessage res{ client.PostAsync(url, content).get() };
		res.EnsureSuccessStatusCode();
		hstring body{ res.Content().ReadAsStringAsync().get() };
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
		return ret;
	}

	// [request]
	// user_id
	// sign
	// access_token
	// id_token
	// token
	// st_flpv
	// activityId
	// [response]
	// OK 是否成功
	// Message 原始文本
	// activityName 演出名称
	// avatar 演出海报
	// price 演出价格
	// showTime 演出时间
	// host 主办方
	// address 演出地址
	// hostAvatar 主办方头像
	// service 服务说明
	// Singers 歌手集合 { name: 歌手名, avatar: 歌手头像 }
	// <option: !OK> Information 错误信息
	JsonObject api_activity_details(HttpClient client, JsonObject args) {
		JsonObject ret;
		Uri url{ L"https://wap.showstart.com/v3/wap/activity/details" };
		hstring data{ util::map_to_json({
			{ L"st_flpv", args.Lookup(L"st_flpv") },
			{ L"sign", args.Lookup(L"sign") },
			{ L"trackPath", L""_json },
			{ L"coupon", L""_json },
			{ L"activityId", args.Lookup(L"activityId") },
			{ L"shareId", L""_json }
			}).Stringify() };
		HttpStringContent content{ data, UnicodeEncoding::Utf8, L"application/json" };
		MakeHeader(client.DefaultRequestHeaders(), L"", L"/wap/activity/details", data,
			args.GetNamedString(L"user_id"), args.GetNamedString(L"sign"),
			args.GetNamedString(L"access_token"), args.GetNamedString(L"id_token"),
			args.GetNamedString(L"token"), args.GetNamedString(L"st_flpv"));
		HttpResponseMessage res{ client.PostAsync(url, content).get() };
		res.EnsureSuccessStatusCode();
		hstring body{ res.Content().ReadAsStringAsync().get() };
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
		return ret;
	}

	// [request]
	// user_id
	// sign
	// access_token
	// id_token
	// token
	// st_flpv
	// activityId
	// [response]
	// OK 是否成功
	// Message 原始文本
	// Tickets 票集合 { ticketId, ticketType, sellingPrice: 票价格, sessionName: 场次, time: 演出时间, maxNum: 最大限购张数, remainTicket: 余票情况 }
	// <option: !OK> Information 错误信息
	JsonObject api_ticket_list(HttpClient client, JsonObject args) {
		JsonObject ret;
		Uri url{ L"https://wap.showstart.com/v3/wap/activity/V2/ticket/list" };
		hstring data{ util::map_to_json({
			{ L"st_flpv", args.Lookup(L"st_flpv") },
			{ L"sign", args.Lookup(L"sign") },
			{ L"trackPath", L""_json },
			{ L"coupon", L""_json },
			{ L"activityId", args.Lookup(L"activityId") }
			}).Stringify() };
		HttpStringContent content{ data, UnicodeEncoding::Utf8, L"application/json" };
		MakeHeader(client.DefaultRequestHeaders(), L"", L"/wap/activity/V2/ticket/list", data,
			args.GetNamedString(L"user_id"), args.GetNamedString(L"sign"),
			args.GetNamedString(L"access_token"), args.GetNamedString(L"id_token"),
			args.GetNamedString(L"token"), args.GetNamedString(L"st_flpv"));
		HttpResponseMessage res{ client.PostAsync(url, content).get() };
		res.EnsureSuccessStatusCode();
		hstring body{ res.Content().ReadAsStringAsync().get() };
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
		return ret;
	}

	// [request]
	// user_id
	// sign
	// access_token
	// id_token
	// token
	// st_flpv
	// activityId
	// ticketId
	// TicketNum 票张数
	// [response]
	// user_id
	// sign
	// access_token
	// id_token
	// token
	// st_flpv
	// ticketId
	// OK 是否成功
	// Message 原始文本
	// skuType 票类型
	// num 票张数
	// goodsId 演出Id
	// price 价格
	// goodsPhoto 演出照片
	// dyPOIType 抖音?
	// goodsName 演出名称
	// areaCode 地域
	// telephone 电话
	// sessionId 下单Id
	// totalAmount 总价
	// <option: !OK> Information 错误信息
	JsonObject api_order_confirm(HttpClient client, JsonObject args) {
		JsonObject ret;
		auto ticket_num{ (int)args.GetNamedNumber(L"TicketNum") };
		Uri url{ L"https://wap.showstart.com/v3/order/wap/order/confirm" };
		hstring data{ util::map_to_json({
			{ L"st_flpv", args.Lookup(L"st_flpv") },
			{ L"sign", args.Lookup(L"sign") },
			{ L"trackPath", L""_json },
			{ L"sequence", args.Lookup(L"activityId") },
			{ L"ticketId", args.Lookup(L"ticketId") },
			{ L"ticketNum", strjson(to_hstring(ticket_num)) },
			}).Stringify() };
		HttpStringContent content{ data, UnicodeEncoding::Utf8, L"application/json" };
		MakeHeader(client.DefaultRequestHeaders(), L"", L"/order/wap/order/confirm", data,
			args.GetNamedString(L"user_id"), args.GetNamedString(L"sign"),
			args.GetNamedString(L"access_token"), args.GetNamedString(L"id_token"),
			args.GetNamedString(L"token"), args.GetNamedString(L"st_flpv"));
		HttpResponseMessage res{ client.PostAsync(url, content).get() };
		res.EnsureSuccessStatusCode();
		hstring body{ res.Content().ReadAsStringAsync().get() };
		auto json{ JsonObject::Parse(body) };
		auto ok{ json.GetNamedString(L"state") == L"1" };
		if (ok) {
			auto orderInfoVo{ json.GetNamedObject(L"result").GetNamedObject(L"orderInfoVo") };
			auto ticketPriceVo{ orderInfoVo.GetNamedObject(L"ticketPriceVo") };
			auto price{ ticketPriceVo.GetNamedNumber(L"price") };
			ret = util::map_to_json({
				{ L"user_id", args.Lookup(L"user_id") },
				{ L"sign", args.Lookup(L"sign") },
				{ L"access_token", args.Lookup(L"access_token") },
				{ L"id_token", args.Lookup(L"id_token") },
				{ L"token", args.Lookup(L"token") },
				{ L"st_flpv", args.Lookup(L"st_flpv") },
				{ L"ticketId", args.Lookup(L"ticketId") },
				{ L"OK", JsonValue::CreateBooleanValue(true) },
				{ L"skuType", ticketPriceVo.Lookup(L"ticketType") },
				{ L"num", strjson(to_hstring(ticket_num)) },
				{ L"goodsId", orderInfoVo.Lookup(L"activityId") },
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
		return ret;
	}

	// [request]
	// user_id
	// sign
	// access_token
	// id_token
	// token
	// st_flpv
	// activityId
	// ticketId
	// skuType 票类型
	// num 票张数
	// goodsId 演出Id
	// price 价格
	// goodsPhoto 演出照片
	// dyPOIType 抖音?
	// goodsName 演出名称
	// areaCode 地域
	// telephone 电话
	// sessionId 下单Id
	// totalAmount 总价
	// [response]
	// OK 是否成功
	// Message 原始文本
	// orderJobKey 下单记录Id
	// <option: !OK> Information 错误信息
	JsonObject api_order(HttpClient client, JsonObject args) {
		JsonObject ret;
		Uri url{ L"https://wap.showstart.com/v3/nj/order/order" };
		hstring crtrace_id{ util::uuid32() + util::timestamp13() };
		JsonArray order_details;
		order_details.Append(util::map_to_json({
			{ L"goodsType", 1_json },
			{ L"skuType", args.Lookup(L"skuType") },
			{ L"num", args.Lookup(L"num") },
			{ L"goodsId", args.Lookup(L"goodsId") },
			{ L"skuId", args.Lookup(L"ticketId") },
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
			{ L"st_flpv", args.Lookup(L"st_flpv") },
			{ L"sign", args.Lookup(L"sign") },
			{ L"trackPath", L""_json }
			}) };
		JsonObject encrypt_data{ util::map_to_json({
			{ L"q", strjson(EncryptOrderData(json_data.Stringify(), crtrace_id, args.GetNamedString(L"token"))) }
			}) };
		hstring data{ encrypt_data.Stringify() };
		HttpStringContent content{ data, UnicodeEncoding::Utf8, L"application/json" };
		MakeHeader(client.DefaultRequestHeaders(), crtrace_id, L"/nj/order/order", data,
			args.GetNamedString(L"user_id"), args.GetNamedString(L"sign"),
			args.GetNamedString(L"access_token"), args.GetNamedString(L"id_token"),
			args.GetNamedString(L"token"), args.GetNamedString(L"st_flpv"));
		HttpResponseMessage res{ client.PostAsync(url, content).get() };
		res.EnsureSuccessStatusCode();
		hstring body{ res.Content().ReadAsStringAsync().get() };
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
		return ret;
	}

	// [request]
	// user_id
	// sign
	// access_token
	// id_token
	// token
	// st_flpv
	// orderJobKey 下单记录Id
	// [response]
	// OK 是否成功
	// Message 原始文本
	// <option: !OK> Information 错误信息
	JsonObject api_get_order_result(HttpClient client, JsonObject args) {
		JsonObject ret;
		Uri url{ L"https://wap.showstart.com/v3/nj/order/getOrderResult" };
		hstring crtrace_id{ util::uuid32() + util::timestamp13() };
		auto json_data{ util::map_to_json({
			{ L"orderJobKey", args.Lookup(L"orderJobKey") },
			{ L"st_flpv", args.Lookup(L"st_flpv") },
			{ L"sign", args.Lookup(L"sign") },
			{ L"trackPath", L""_json }
			}) };
		JsonObject encrypt_data{ util::map_to_json({
			{ L"q", strjson(EncryptOrderData(json_data.Stringify(), crtrace_id, args.GetNamedString(L"token"))) }
			}) };
		hstring data{ encrypt_data.Stringify() };
		HttpStringContent content{ data, UnicodeEncoding::Utf8, L"application/json" };
		MakeHeader(client.DefaultRequestHeaders(), crtrace_id, L"/nj/order/getOrderResult", data,
			args.GetNamedString(L"user_id"), args.GetNamedString(L"sign"),
			args.GetNamedString(L"access_token"), args.GetNamedString(L"id_token"),
			args.GetNamedString(L"token"), args.GetNamedString(L"st_flpv"));
		HttpResponseMessage res{ client.PostAsync(url, content).get() };
		res.EnsureSuccessStatusCode();
		hstring body{ res.Content().ReadAsStringAsync().get() };
		ret.Insert(L"Message", strjson(body));
		auto json{ JsonObject::Parse(body) };
		auto ok{ json.GetNamedString(L"state") == L"1" && json.GetNamedBoolean(L"success") };
		ret.Insert(L"OK", JsonValue::CreateBooleanValue(ok));
		if (!ok) {
			ret.Insert(L"Information", json.Lookup(L"msg"));
		}
		return ret;
	}
}