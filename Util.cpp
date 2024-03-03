#include "pch.h"
#include "ShowStart.h"

using namespace winrt;
using namespace Windows::Foundation;
using namespace Windows::Security::Cryptography;
using namespace Windows::Security::Cryptography::Core;
using namespace Windows::Data::Json;

namespace util {
	hstring strip(hstring const& data) noexcept {
		std::wstring str{ data };
		auto pred{ [ ](wchar_t ch) { return ch != L' ' && ch != L'\t' && ch != L'\n'; } };
		str.erase(str.begin(), std::find_if(str.begin(), str.end(), pred));
		str.erase(std::find_if(str.rbegin(), str.rend(), pred).base(), str.end());
		return str.data();
	}

	hstring replace_br(hstring const& data) noexcept {
		std::wstring str{ data };
		long long oldPos{ }, start{ };
		while ((start = str.find(L"<br/>", oldPos)) != std::wstring::npos) {
			str.replace(start, 5, L"\n");
			oldPos = start + 1;
		}
		return str.data();
	}

	hstring timestamp13() noexcept {
		using namespace std::chrono;
		return to_hstring(duration_cast<milliseconds>(system_clock::now().time_since_epoch()).count());
	}

	hstring uuid32() noexcept {
		hstring n{ L"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" + timestamp13() };
		wchar_t buf[33]{ };
		for (auto& i : buf) {
			i = n[std::rand() % 75];
		}
		buf[32] = 0;
		return buf;
	}

	JsonObject map_to_json(std::unordered_map<hstring, IJsonValue> const& map) noexcept {
		JsonObject json;
		for (auto& [key, value] : map) {
			json.Insert(key, value);
		}
		return json;
	}
	
	hstring get_md5(hstring const& data) noexcept {
		auto provider{ HashAlgorithmProvider::OpenAlgorithm(HashAlgorithmNames::Md5()) };
		auto hasher{ provider.CreateHash() };
		auto bin{ CryptographicBuffer::ConvertStringToBinary(data, BinaryStringEncoding::Utf8) };
		hasher.Append(bin);
		auto md5{ hasher.GetValueAndReset() };
		return CryptographicBuffer::EncodeToHexString(md5);
	}

	hstring get_AES_base64(hstring const& data, hstring const& key) noexcept {
		auto provider{ SymmetricKeyAlgorithmProvider::OpenAlgorithm(SymmetricAlgorithmNames::AesEcbPkcs7()) };
		auto key_bin{ CryptographicBuffer::ConvertStringToBinary(key, BinaryStringEncoding::Utf8) };
		auto symmetricKey{ provider.CreateSymmetricKey(key_bin) };
		auto data_bin{ CryptographicBuffer::ConvertStringToBinary(data, BinaryStringEncoding::Utf8) };
		auto aes{ CryptographicEngine::Encrypt(symmetricKey, data_bin, nullptr) };
		return CryptographicBuffer::EncodeToBase64String(aes);
	}
}