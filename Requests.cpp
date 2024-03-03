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

	struct OrderInfo {
		int skuType; // 票类型
		hstring num; // 票张数
		int goodsId; // 演出ID
		hstring skuId; // 票ID
		double price; // 价格
		hstring goodsPhoto; // 演出照片
		int dyPOIType; // 抖音?
		hstring goodsName; // 演出名称
		hstring areaCode; // 地域
		hstring telephone; // 手机号码
		int sessionId; // 订单ID
		hstring totalAmount; // 总价
	};
}

namespace work {
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

	// 更新Token
	IAsyncAction UpdateToken() {
		ShowStart::Info info{ window.GlobalInfo() };
		HttpClient client{ window.Client() };
		info.AccessToken(L"");
		info.IdToken(L"");
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
		info.Message(body);

		auto json{ JsonObject::Parse(body) };
		if (json.Lookup(L"success").GetBoolean()) {
			auto result{ json.Lookup(L"result").GetObject() };
			hstring access_token{ result.Lookup(L"accessToken").GetObject().Lookup(L"access_token").GetString() };
			hstring id_token{ result.Lookup(L"idToken").GetObject().Lookup(L"id_token").GetString() };

			info.AccessToken(access_token);
			info.IdToken(id_token);
		}
	}

	// 获取票种列表
	IAsyncAction GetList() {
		ShowStart::Info info{ window.GlobalInfo() };
		HttpClient client{ window.Client() };
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
		info.Message(body);

		auto showInfo{ window.ShowPanel() };
		auto json{ JsonObject::Parse(body) };
		if (json.Lookup(L"state").GetString() == L"1") {
			auto ticketsVector{ single_threaded_observable_vector<ShowStart::Ticket>() };
			for (auto sessions : json.Lookup(L"result").GetArray()) {
				auto session{ sessions.GetObject() };
				auto start_time{ session.Lookup(L"sessionName").GetString() };
				for (auto ticket_list : session.Lookup(L"ticketList").GetArray()) {
					auto ticket{ ticket_list.GetObject() };
					auto max_num{ (int)ticket.Lookup(L"canBuyNum").GetNumber() };
					auto remain_ticket{ (int)ticket.Lookup(L"remainTicket").GetNumber() };
					hstring remain{ L"余票未知" };
					if (remain_ticket == 0) remain = L"告罄";
					else if (remain_ticket == 1) remain = L"余票紧张";
					else if (remain_ticket == 2) remain = L"余票充足";
					ticketsVector.Append(ShowStart::Ticket{
						ticket.Lookup(L"ticketId").GetString(),
						ticket.Lookup(L"ticketType").GetString(),
						ticket.Lookup(L"sellingPrice").GetString(),
						start_time,
						ticket.Lookup(L"time").GetString(),
						winrt::format(L"限购{}张", max_num),
						remain,
						});
				}
			}
			showInfo.Tickets(ticketsVector);
		}
	}

	// 获取演出信息
	IAsyncAction GetDetails() {
		ShowStart::Info info{ window.GlobalInfo() };
		HttpClient client{ window.Client() };
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
		info.Message(body);

		auto showInfo{ window.ShowPanel() };
		auto json{ JsonObject::Parse(body) };
		if (json.Lookup(L"state").GetString() == L"1") {
			auto result{ json.Lookup(L"result").GetObject() };
			auto site{ result.Lookup(L"site").GetObject() };
			auto sessionUserInfos{ result.Lookup(L"sessionUserInfos").GetArray() };

			showInfo.Title(util::strip(result.Lookup(L"activityName").GetString()));
			{
				Media::Imaging::BitmapImage bmp;
				bmp.UriSource(Uri(result.Lookup(L"avatar").GetString()));
				bmp.CreateOptions(Media::Imaging::BitmapCreateOptions::IgnoreImageCache);
				bmp.DecodePixelWidth(300);
				showInfo.Poster(bmp);
			}
			showInfo.Price(result.Lookup(L"price").GetString());
			showInfo.ShowTime(result.Lookup(L"showTime").GetString());
			showInfo.Host(site.Lookup(L"name").GetString());
			showInfo.Address(site.Lookup(L"address").GetString());
			{
				Media::Imaging::BitmapImage bmp;
				bmp.UriSource(Uri(site.Lookup(L"avatar").GetString()));
				bmp.CreateOptions(Media::Imaging::BitmapCreateOptions::IgnoreImageCache);
				bmp.DecodePixelWidth(48);
				showInfo.HostAvatar(bmp);
			}
			showInfo.Service(util::replace_br(result.Lookup(L"serviceTemplateEnContent").GetString()));
			
			auto singersVector{ single_threaded_observable_vector<ShowStart::Singer>() };
			if (sessionUserInfos.Size() > 0U) {
				auto singerInfos{ sessionUserInfos.GetObjectAt(0U).Lookup(L"userInfos").GetArray() };
				for (auto singerInfo : singerInfos) {
					auto singer{ singerInfo.GetObject() };
					singersVector.Append(ShowStart::Singer{ singer.Lookup(L"name").GetString(),
						singer.Lookup(L"avatar").GetString() });
				}
			}
			showInfo.Singers(singersVector);

			co_await GetList();
		}
	}

	// 输入票张数
	IAsyncOperation<unsigned int> InputTicketNum() {
		Controls::ContentDialog dialog;
		dialog.CloseButtonText(L"取消");
		dialog.DefaultButton(Controls::ContentDialogButton::Primary);
		dialog.PrimaryButtonText(L"确定");
		dialog.Title(box_value(L"输入票的张数"));
		Controls::NumberBox number_box;
		number_box.Value(1.0);
		number_box.Minimum(1.0);
		number_box.Maximum(99.0);
		dialog.Content(number_box);
		dialog.XamlRoot(window.ShowPanel().XamlRoot());
		auto dialog_result{ co_await dialog.ShowAsync() };
		if (dialog_result != Controls::ContentDialogResult::Primary) {
			co_return 0U;
		}
		co_return static_cast<unsigned int>(number_box.Value());
	}

	// 加密下单数据
	hstring EncryptOrder(hstring const& data, hstring const& crtrace_id) {
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

	// 下单
	IAsyncAction Order(OrderInfo order_info) {
		ShowStart::Info info{ window.GlobalInfo() };
		HttpClient client{ window.Client() };
		Uri url{ L"https://wap.showstart.com/v3/nj/order/order" };
		hstring crtrace_id{ util::uuid32() + util::timestamp13() };
		
		JsonArray order_details;
		order_details.Append(util::map_to_json({
			{ L"goodsType", 1_json },
			{ L"skuType", intjson(order_info.skuType) },
			{ L"num", strjson(order_info.num) },
			{ L"goodsId", intjson(order_info.goodsId) },
			{ L"skuId", strjson(order_info.skuId) },
			{ L"price", JsonValue::CreateNumberValue(order_info.price) },
			{ L"goodsPhoto", strjson(order_info.goodsPhoto) },
			{ L"dyPOIType", intjson(order_info.dyPOIType) },
			{ L"goodsName", strjson(order_info.goodsName) }
			}));
		auto json_data{ util::map_to_json({
			{ L"orderDetails", order_details },
			{ L"commonPerfomerIds", JsonArray{ } },
			{ L"areaCode", strjson(order_info.areaCode) },
			{ L"telephone", strjson(order_info.telephone) },
			{ L"addressId", L""_json },
			{ L"teamId", L""_json },
			{ L"couponId", L""_json },
			{ L"checkCode", L""_json },
			{ L"source", 0_json },
			{ L"discount", 0_json },
			{ L"sessionId", intjson(order_info.sessionId) },
			{ L"freight", 0_json },
			{ L"amountPayable", strjson(order_info.totalAmount) },
			{ L"totalAmount", strjson(order_info.totalAmount) },
			{ L"partner", L""_json },
			{ L"orderSource", 1_json },
			{ L"videoId", L""_json },
			{ L"payVideotype", L""_json },
			{ L"st_flpv", strjson(info.StFlpv()) },
			{ L"sign", strjson(info.Sign()) },
			{ L"trackPath", L""_json }
			}) };
		JsonObject encrypt_data{ util::map_to_json({
			{ L"q", strjson(EncryptOrder(json_data.Stringify(), crtrace_id)) }
			}) };

		hstring data{ encrypt_data.Stringify() };
		HttpStringContent content{ data, UnicodeEncoding::Utf8, L"application/json" };
		MakeHeader(client.DefaultRequestHeaders(), crtrace_id, L"/nj/order/order", data, info);
		HttpResponseMessage res{ co_await client.PostAsync(url, content) };
		res.EnsureSuccessStatusCode();
		hstring body{ co_await res.Content().ReadAsStringAsync() };
		info.Message(body);

		auto json{ JsonObject::Parse(body) };
		if (json.Lookup(L"state").GetString() == L"1") {
			Controls::ContentDialog dialog;
			dialog.CloseButtonText(L"关闭");
			dialog.DefaultButton(Controls::ContentDialogButton::Close);
			dialog.Title(box_value(L"购票成功!"));
			dialog.XamlRoot(window.ShowPanel().XamlRoot());
			co_await dialog.ShowAsync();
		}
	}

	// 买票
	IAsyncAction BuyTickets() {
		if (auto ticket_num{ co_await InputTicketNum() }) {
			ShowStart::Info info{ window.GlobalInfo() };
			HttpClient client{ window.Client() };
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
			info.Message(body);

			auto json{ JsonObject::Parse(body) };
			if (json.Lookup(L"state").GetString() == L"1") {
				auto orderInfoVo{ json.Lookup(L"result").GetObject().Lookup(L"orderInfoVo").GetObject() };
				auto ticketPriceVo{ orderInfoVo.Lookup(L"ticketPriceVo").GetObject() };
				auto price{ ticketPriceVo.Lookup(L"price").GetNumber() };
				OrderInfo order_info{
					.skuType = (int)ticketPriceVo.Lookup(L"ticketType").GetNumber(),
					.num = to_hstring(ticket_num),
					.goodsId = (int)orderInfoVo.Lookup(L"activityId").GetNumber(),
					.skuId = info.TicketId(),
					.price = price,
					.goodsPhoto = orderInfoVo.Lookup(L"poster").GetString(),
					.dyPOIType = (int)ticketPriceVo.Lookup(L"dyPOIType").GetNumber(),
					.goodsName = orderInfoVo.Lookup(L"title").GetString(),
					.areaCode = orderInfoVo.Lookup(L"areaCode").GetString(),
					.telephone = orderInfoVo.Lookup(L"telephone").GetString(),
					.sessionId = (int)orderInfoVo.Lookup(L"sessionId").GetNumber(),
					.totalAmount = to_hstring(price * ticket_num)
				};
				co_await Order(order_info);
			}
		}
	}
}