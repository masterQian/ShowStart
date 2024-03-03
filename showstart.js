(function (e) {
    function n(n) {
        for (var t, r, s = n[0], c = n[1], u = n[2], l = 0, p = []; l < s.length; l++) r = s[l], Object.prototype.hasOwnProperty
            .call(i, r) && i[r] && p.push(i[r][0]), i[r] = 0;
        for (t in c) Object.prototype.hasOwnProperty.call(c, t) && (e[t] = c[t]);
        d && d(n);
        while (p.length) p.shift()();
        return o.push.apply(o, u || []), a()
    }
    function a() {
        for (var e, n = 0; n < o.length; n++) {
            for (var a = o[n], t = !0, s = 1; s < a.length; s++) {
                var c = a[s];
                0 !== i[c] && (t = !1)
            }
            t && (o.splice(n--, 1), e = r(r.s = a[0]))
        }
        return e
    }
    var t = {},
        i = {
            index: 0
        },
        o = [];
    function r(n) {
        if (t[n]) return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    r.e = function (e) {
        var n = [],
            a = i[e];
        if (0 !== a)
            if (a) n.push(a[2]);
            else {
                var t = new Promise((function (n, t) {
                    a = i[e] = [n, t]
                }));
                n.push(a[2] = t);
                var o, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, r.nc && s.setAttribute("nonce", r.nc), s.src = function (
                    e) {
                    return r.p + "static/js/" + ({
                        "pages-404": "pages-404",
                        "pages-activity-detail-detail~pages-goods-detail-detail~pages-order-activity-detail-detail~pages-orde~61bc27bc": "pages-activity-detail-detail~pages-goods-detail-detail~pages-order-activity-detail-detail~pages-orde~61bc27bc",
                        "pages-activity-detail-detail~pages-ticketIndex-ticketIndex~pages-user-identity-list-list": "pages-activity-detail-detail~pages-ticketIndex-ticketIndex~pages-user-identity-list-list",
                        "pages-activity-detail-detail~pages-goods-detail-detail": "pages-activity-detail-detail~pages-goods-detail-detail",
                        "pages-activity-detail-detail": "pages-activity-detail-detail",
                        "pages-ticketIndex-ticketIndex": "pages-ticketIndex-ticketIndex",
                        "pages-user-identity-list-list": "pages-user-identity-list-list",
                        "pages-activity-list-list~pages-goods-detail-detail~pages-index-index~pages-site-artist-artist~pages-~0fdc9a0e": "pages-activity-list-list~pages-goods-detail-detail~pages-index-index~pages-site-artist-artist~pages-~0fdc9a0e",
                        "pages-goods-detail-detail": "pages-goods-detail-detail",
                        "pages-activity-list-list": "pages-activity-list-list",
                        "pages-index-index": "pages-index-index",
                        "pages-site-artist-artist~pages-site-brand-brand~pages-site-site-site": "pages-site-artist-artist~pages-site-brand-brand~pages-site-site-site",
                        "pages-site-artist-artist": "pages-site-artist-artist",
                        "pages-site-brand-brand": "pages-site-brand-brand",
                        "pages-site-site-site": "pages-site-site-site",
                        "pages-special-expand-index": "pages-special-expand-index",
                        "pages-activity-livehouse-livehouse": "pages-activity-livehouse-livehouse",
                        "pages-activity-search-search": "pages-activity-search-search",
                        "pages-activity-seat-seat": "pages-activity-seat-seat",
                        "pages-activity-userClaim-userClaim": "pages-activity-userClaim-userClaim",
                        "pages-apptest-apptest": "pages-apptest-apptest",
                        "pages-city-city": "pages-city-city",
                        "pages-command-activity": "pages-command-activity",
                        "pages-coupon-goods-goods-list-goods-list": "pages-coupon-goods-goods-list-goods-list",
                        "pages-coupon-list-list~pages-order-activity-confirm-confirm~pages-order-goods-confirm-confirm": "pages-coupon-list-list~pages-order-activity-confirm-confirm~pages-order-goods-confirm-confirm",
                        "pages-coupon-list-list": "pages-coupon-list-list",
                        "pages-coupon-receive-receive": "pages-coupon-receive-receive",
                        "pages-goods-list-list": "pages-goods-list-list",
                        "pages-goods-theme-theme": "pages-goods-theme-theme",
                        "pages-goodsIndex-goodsIndex": "pages-goodsIndex-goodsIndex",
                        "pages-helpCenter-aboutus-aboutus": "pages-helpCenter-aboutus-aboutus",
                        "pages-helpCenter-help-help": "pages-helpCenter-help-help",
                        "pages-invitation-index": "pages-invitation-index",
                        "pages-invitation-receive": "pages-invitation-receive",
                        "pages-invitation-succeed": "pages-invitation-succeed",
                        "pages-live-event-event": "pages-live-event-event",
                        "pages-live-list-list": "pages-live-list-list",
                        "pages-live-room-room": "pages-live-room-room",
                        "pages-live-theme-theme": "pages-live-theme-theme",
                        "pages-myHome-myHome": "pages-myHome-myHome",
                        "pages-order-activity-codeInfo-codeInfo~pages-order-gifts-gifts~pages-order-goods-detail-detail~pages~35ac490a": "pages-order-activity-codeInfo-codeInfo~pages-order-gifts-gifts~pages-order-goods-detail-detail~pages~35ac490a",
                        "pages-order-activity-codeInfo-codeInfo": "pages-order-activity-codeInfo-codeInfo",
                        "pages-order-gifts-gifts": "pages-order-gifts-gifts",
                        "pages-tickets-tickets": "pages-tickets-tickets",
                        "pages-user-code-code": "pages-user-code-code",
                        "pages-order-activity-confirm-confirm~pages-order-activity-detail-detail~pages-order-activity-list-li~815001a0": "pages-order-activity-confirm-confirm~pages-order-activity-detail-detail~pages-order-activity-list-li~815001a0",
                        "pages-order-activity-detail-detail": "pages-order-activity-detail-detail",
                        "pages-order-raise-detail-detail": "pages-order-raise-detail-detail",
                        "pages-order-goods-confirm-confirm": "pages-order-goods-confirm-confirm",
                        "pages-order-goods-detail-detail": "pages-order-goods-detail-detail",
                        "pages-order-activity-confirm-confirm~pages-order-refund-refund~pages-order-refundv1-refund~pages-pas~9b66f36a": "pages-order-activity-confirm-confirm~pages-order-refund-refund~pages-order-refundv1-refund~pages-pas~9b66f36a",
                        "pages-order-activity-confirm-confirm": "pages-order-activity-confirm-confirm",
                        "pages-order-activity-list-list": "pages-order-activity-list-list",
                        "pages-order-goods-list-list": "pages-order-goods-list-list",
                        "pages-order-payFailed-payFailed": "pages-order-payFailed-payFailed",
                        "pages-order-payResult-payResult": "pages-order-payResult-payResult",
                        "pages-order-raise-confirm-confirm": "pages-order-raise-confirm-confirm",
                        "pages-order-raise-list-list": "pages-order-raise-list-list",
                        "pages-order-refund-refund": "pages-order-refund-refund",
                        "pages-order-refundv1-refund": "pages-order-refundv1-refund",
                        "pages-passport-close-close": "pages-passport-close-close",
                        "pages-passport-login-login": "pages-passport-login-login",
                        "pages-order-paySuccess-paySuccess": "pages-order-paySuccess-paySuccess",
                        "pages-order-refundSuccess-refundSuccess": "pages-order-refundSuccess-refundSuccess",
                        "pages-order-refundcheck-refundcheck": "pages-order-refundcheck-refundcheck",
                        "pages-order-wxpay-wxpay": "pages-order-wxpay-wxpay",
                        "pages-passport-permit-permit": "pages-passport-permit-permit",
                        "pages-raise-detail-detail": "pages-raise-detail-detail",
                        "pages-raise-list-list": "pages-raise-list-list",
                        "pages-raise-ticket-ticket": "pages-raise-ticket-ticket",
                        "pages-raiseIndex-raiseIndex": "pages-raiseIndex-raiseIndex",
                        "pages-site-license-license": "pages-site-license-license",
                        "pages-special-2022-2022~pages-special-2023-poster-poster~pages-special-lottery-194905~pages-special-~32550d53": "pages-special-2022-2022~pages-special-2023-poster-poster~pages-special-lottery-194905~pages-special-~32550d53",
                        "pages-special-2022-2022~pages-special-2023-poster-poster": "pages-special-2022-2022~pages-special-2023-poster-poster",
                        "pages-special-2022-2022": "pages-special-2022-2022",
                        "pages-special-2023-poster-poster": "pages-special-2023-poster-poster",
                        "pages-special-lottery-194905": "pages-special-lottery-194905",
                        "pages-special-lottery-39": "pages-special-lottery-39",
                        "pages-special-wenda-command": "pages-special-wenda-command",
                        "pages-special-wenda-index": "pages-special-wenda-index",
                        "pages-special-checkIn-index": "pages-special-checkIn-index",
                        "pages-special-citytvpage-citytvpage": "pages-special-citytvpage-citytvpage",
                        "pages-special-expand-command": "pages-special-expand-command",
                        "pages-special-fineband-fineband": "pages-special-fineband-fineband",
                        "pages-special-fy-fy": "pages-special-fy-fy",
                        "pages-special-getTicket-getTicket": "pages-special-getTicket-getTicket",
                        "pages-special-guide-guide": "pages-special-guide-guide",
                        "pages-special-indiestar-apply-apply~pages-special-summerband-summerband": "pages-special-indiestar-apply-apply~pages-special-summerband-summerband",
                        "pages-special-indiestar-apply-apply": "pages-special-indiestar-apply-apply",
                        "pages-special-summerband-summerband": "pages-special-summerband-summerband",
                        "pages-special-indiestar-vote-vote~pages-special-indiestar-vote2-vote2": "pages-special-indiestar-vote-vote~pages-special-indiestar-vote2-vote2",
                        "pages-special-indiestar-vote-vote": "pages-special-indiestar-vote-vote",
                        "pages-special-indiestar-vote2-vote2": "pages-special-indiestar-vote2-vote2",
                        "pages-special-join-join": "pages-special-join-join",
                        "pages-special-lpa-index-index": "pages-special-lpa-index-index",
                        "pages-special-lpa-vote-vote": "pages-special-lpa-vote-vote",
                        "pages-special-nft-exchange": "pages-special-nft-exchange",
                        "pages-special-nft-owner": "pages-special-nft-owner",
                        "pages-special-purchase-goods~pages-special-purchase-index": "pages-special-purchase-goods~pages-special-purchase-index",
                        "pages-special-purchase-goods": "pages-special-purchase-goods",
                        "pages-special-purchase-index": "pages-special-purchase-index",
                        "pages-special-redeem": "pages-special-redeem",
                        "pages-special-share-article-article": "pages-special-share-article-article",
                        "pages-special-share-brand-brand": "pages-special-share-brand-brand",
                        "pages-special-share-detail-detail": "pages-special-share-detail-detail",
                        "pages-special-share-join-join": "pages-special-share-join-join",
                        "pages-special-share-list-list": "pages-special-share-list-list",
                        "pages-special-showdesk-showdesk": "pages-special-showdesk-showdesk",
                        "pages-special-showfun-showfun": "pages-special-showfun-showfun",
                        "pages-special-sitetvpage-sitetvpage": "pages-special-sitetvpage-sitetvpage",
                        "pages-special-unlockposter-index": "pages-special-unlockposter-index",
                        "pages-test": "pages-test",
                        "pages-tool-bbs-bbs": "pages-tool-bbs-bbs",
                        "pages-tool-map-map": "pages-tool-map-map",
                        "pages-tool-mvideo-mvideo": "pages-tool-mvideo-mvideo",
                        "pages-tool-survey-survey": "pages-tool-survey-survey",
                        "pages-tool-ticketrules-ticketrules": "pages-tool-ticketrules-ticketrules",
                        "pages-tool-video-video": "pages-tool-video-video",
                        "pages-tool-videodetails-videodetails": "pages-tool-videodetails-videodetails",
                        "pages-tool-visitcard-visitcard": "pages-tool-visitcard-visitcard",
                        "pages-tool-webView-webView": "pages-tool-webView-webView",
                        "pages-user-address-edit-edit": "pages-user-address-edit-edit",
                        "pages-user-address-list-list~pages-user-viewer-list-list": "pages-user-address-list-list~pages-user-viewer-list-list",
                        "pages-user-address-list-list": "pages-user-address-list-list",
                        "pages-user-viewer-list-list": "pages-user-viewer-list-list",
                        "pages-user-aut-fail": "pages-user-aut-fail",
                        "pages-user-aut-step1": "pages-user-aut-step1",
                        "pages-user-aut-step2": "pages-user-aut-step2",
                        "pages-user-creditLevel-creditLevel": "pages-user-creditLevel-creditLevel",
                        "pages-user-identity-identapp-index": "pages-user-identity-identapp-index",
                        "pages-user-viewer-edit-edit": "pages-user-viewer-edit-edit",
                        "pages-video-channel-channel": "pages-video-channel-channel",
                        "pages-videoissue-videoissue": "pages-videoissue-videoissue"
                    } [e] || e) + "." + {
                        "pages-404": "d52bffc9",
                        "pages-activity-detail-detail~pages-goods-detail-detail~pages-order-activity-detail-detail~pages-orde~61bc27bc": "b5bcf1e6",
                        "pages-activity-detail-detail~pages-ticketIndex-ticketIndex~pages-user-identity-list-list": "33965d35",
                        "pages-activity-detail-detail~pages-goods-detail-detail": "6575d465",
                        "pages-activity-detail-detail": "2ea451a0",
                        "pages-ticketIndex-ticketIndex": "b9cae754",
                        "pages-user-identity-list-list": "81e5dbb2",
                        "pages-activity-list-list~pages-goods-detail-detail~pages-index-index~pages-site-artist-artist~pages-~0fdc9a0e": "d0fa3809",
                        "pages-goods-detail-detail": "cd3940eb",
                        "pages-activity-list-list": "85102ba8",
                        "pages-index-index": "62b56b7d",
                        "pages-site-artist-artist~pages-site-brand-brand~pages-site-site-site": "9ae0607c",
                        "pages-site-artist-artist": "0ba03b83",
                        "pages-site-brand-brand": "9e731df8",
                        "pages-site-site-site": "04bb4630",
                        "pages-special-expand-index": "c18cb423",
                        "pages-activity-livehouse-livehouse": "06d2a9a8",
                        "pages-activity-search-search": "5626ba19",
                        "pages-activity-seat-seat": "a90d1583",
                        "pages-activity-userClaim-userClaim": "6879a6d4",
                        "pages-apptest-apptest": "d284343a",
                        "pages-city-city": "3bb7cd22",
                        "pages-command-activity": "ac0afa03",
                        "pages-coupon-goods-goods-list-goods-list": "02d11e88",
                        "pages-coupon-list-list~pages-order-activity-confirm-confirm~pages-order-goods-confirm-confirm": "33e025ee",
                        "pages-coupon-list-list": "ce2a3245",
                        "pages-coupon-receive-receive": "431e8cc2",
                        "pages-goods-list-list": "6c5ac7fd",
                        "pages-goods-theme-theme": "566fe648",
                        "pages-goodsIndex-goodsIndex": "58ef3496",
                        "pages-helpCenter-aboutus-aboutus": "9fcece0b",
                        "pages-helpCenter-help-help": "0589da3e",
                        "pages-invitation-index": "567f2923",
                        "pages-invitation-receive": "6f09d7d1",
                        "pages-invitation-succeed": "accfba98",
                        "pages-live-event-event": "5de2e170",
                        "pages-live-list-list": "db325a93",
                        "pages-live-room-room": "3b19bc07",
                        "pages-live-theme-theme": "8f2a111d",
                        "pages-myHome-myHome": "b1b4a3d2",
                        "pages-order-activity-codeInfo-codeInfo~pages-order-gifts-gifts~pages-order-goods-detail-detail~pages~35ac490a": "d0c1731c",
                        "pages-order-activity-codeInfo-codeInfo": "5ede0d77",
                        "pages-order-gifts-gifts": "ec2b11bb",
                        "pages-tickets-tickets": "d0b8c436",
                        "pages-user-code-code": "7702560a",
                        "pages-order-activity-confirm-confirm~pages-order-activity-detail-detail~pages-order-activity-list-li~815001a0": "db421de4",
                        "pages-order-activity-detail-detail": "6674a15c",
                        "pages-order-raise-detail-detail": "7e6840df",
                        "pages-order-goods-confirm-confirm": "e010e655",
                        "pages-order-goods-detail-detail": "234df322",
                        "pages-order-activity-confirm-confirm~pages-order-refund-refund~pages-order-refundv1-refund~pages-pas~9b66f36a": "6ed1cb3b",
                        "pages-order-activity-confirm-confirm": "f9064b07",
                        "pages-order-activity-list-list": "2cb24e58",
                        "pages-order-goods-list-list": "55ce7a29",
                        "pages-order-payFailed-payFailed": "61146e76",
                        "pages-order-payResult-payResult": "8253ecb6",
                        "pages-order-raise-confirm-confirm": "c128b014",
                        "pages-order-raise-list-list": "a1711e6f",
                        "pages-order-refund-refund": "52ed4967",
                        "pages-order-refundv1-refund": "a50a3f1c",
                        "pages-passport-close-close": "ca820250",
                        "pages-passport-login-login": "7d7ce71a",
                        "pages-order-paySuccess-paySuccess": "8c2dce8e",
                        "pages-order-refundSuccess-refundSuccess": "bc5d1dc7",
                        "pages-order-refundcheck-refundcheck": "4e9015d0",
                        "pages-order-wxpay-wxpay": "a4c7ddef",
                        "pages-passport-permit-permit": "5d200d21",
                        "pages-raise-detail-detail": "67496c89",
                        "pages-raise-list-list": "c532186b",
                        "pages-raise-ticket-ticket": "4ff89800",
                        "pages-raiseIndex-raiseIndex": "8326debd",
                        "pages-site-license-license": "b455732d",
                        "pages-special-2022-2022~pages-special-2023-poster-poster~pages-special-lottery-194905~pages-special-~32550d53": "31a897f8",
                        "pages-special-2022-2022~pages-special-2023-poster-poster": "26faadb4",
                        "pages-special-2022-2022": "1ad189db",
                        "pages-special-2023-poster-poster": "6a5eec40",
                        "pages-special-lottery-194905": "232e8e20",
                        "pages-special-lottery-39": "57e46b73",
                        "pages-special-wenda-command": "43da5774",
                        "pages-special-wenda-index": "ef0a5510",
                        "pages-special-checkIn-index": "62bfb0c0",
                        "pages-special-citytvpage-citytvpage": "0693599e",
                        "pages-special-expand-command": "f6c4e0bb",
                        "pages-special-fineband-fineband": "e3432135",
                        "pages-special-fy-fy": "59e6b0b4",
                        "pages-special-getTicket-getTicket": "28e66477",
                        "pages-special-guide-guide": "eeeb508d",
                        "pages-special-indiestar-apply-apply~pages-special-summerband-summerband": "452f2e92",
                        "pages-special-indiestar-apply-apply": "6f3d1807",
                        "pages-special-summerband-summerband": "2c9acb3a",
                        "pages-special-indiestar-vote-vote~pages-special-indiestar-vote2-vote2": "d56a9e30",
                        "pages-special-indiestar-vote-vote": "18021daa",
                        "pages-special-indiestar-vote2-vote2": "5e21dfee",
                        "pages-special-join-join": "2339446f",
                        "pages-special-lpa-index-index": "efff1426",
                        "pages-special-lpa-vote-vote": "e814d533",
                        "pages-special-nft-exchange": "c9bfe52b",
                        "pages-special-nft-owner": "4f838fe0",
                        "pages-special-purchase-goods~pages-special-purchase-index": "7b115e8c",
                        "pages-special-purchase-goods": "f3ab475f",
                        "pages-special-purchase-index": "d93abeb1",
                        "pages-special-redeem": "e3d54c68",
                        "pages-special-share-article-article": "0c3da2c9",
                        "pages-special-share-brand-brand": "31989acb",
                        "pages-special-share-detail-detail": "e52441bc",
                        "pages-special-share-join-join": "187bebae",
                        "pages-special-share-list-list": "821e0f70",
                        "pages-special-showdesk-showdesk": "0b47d012",
                        "pages-special-showfun-showfun": "82b8e2af",
                        "pages-special-sitetvpage-sitetvpage": "5eb56d0c",
                        "pages-special-unlockposter-index": "4892dccd",
                        "pages-test": "ec758f0a",
                        "pages-tool-bbs-bbs": "1709d16d",
                        "pages-tool-map-map": "029291b0",
                        "pages-tool-mvideo-mvideo": "24a217c6",
                        "pages-tool-survey-survey": "ccb8d708",
                        "pages-tool-ticketrules-ticketrules": "49156baa",
                        "pages-tool-video-video": "4a8cb348",
                        "pages-tool-videodetails-videodetails": "c21ccf76",
                        "pages-tool-visitcard-visitcard": "2f01861e",
                        "pages-tool-webView-webView": "bb6f193f",
                        "pages-user-address-edit-edit": "61804781",
                        "pages-user-address-list-list~pages-user-viewer-list-list": "ad906c6c",
                        "pages-user-address-list-list": "99a44053",
                        "pages-user-viewer-list-list": "e43c04c1",
                        "pages-user-aut-fail": "08e0e638",
                        "pages-user-aut-step1": "c66d3ad1",
                        "pages-user-aut-step2": "e6179cb9",
                        "pages-user-creditLevel-creditLevel": "75af513e",
                        "pages-user-identity-identapp-index": "4629a17d",
                        "pages-user-viewer-edit-edit": "ab480396",
                        "pages-video-channel-channel": "bef105bb",
                        "pages-videoissue-videoissue": "8d796c84"
                    } [e] + ".js?v=1709293803065"
                }(e);
                var c = new Error;
                o = function (n) {
                    s.onerror = s.onload = null, clearTimeout(u);
                    var a = i[e];
                    if (0 !== a) {
                        if (a) {
                            var t = n && ("load" === n.type ? "missing" : n.type),
                                o = n && n.target && n.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + t + ": " + o + ")", c.name =
                                "ChunkLoadError", c.type = t, c.request = o, a[1](c)
                        }
                        i[e] = void 0
                    }
                };
                var u = setTimeout((function () {
                    o({
                        type: "timeout",
                        target: s
                    })
                }), 12e4);
                s.onerror = s.onload = o, document.head.appendChild(s)
            } return Promise.all(n)
    }, r.m = e, r.c = t, r.d = function (e, n, a) {
        r.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: a
        })
    }, r.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function (e, n) {
        if (1 & n && (e = r(e)), 8 & n) return e;
        if (4 & n && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var t in e) r.d(a, t, function (n) {
                return e[n]
            }.bind(null, t));
        return a
    }, r.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return r.d(n, "a", n), n
    }, r.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, r.p = "https://img05.showstart.com/", r.oe = function (e) {
        throw console.error(e), e
    };
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = s.push.bind(s);
    s.push = n, s = s.slice();
    for (var u = 0; u < s.length; u++) n(s[u]);
    var d = c;
    o.push([0, "chunk-vendors"]), a()
})({
    0: function (e, n, a) {
        e.exports = a("a7a7")
    },
    "0321": function (e, n, a) {
        "use strict";
        a("7a82");
        var t = a("4ea4").default;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, a("ac1f"), a("5319");
        var i = t(a("5530")),
            o = a("6b33"),
            r = t(a("0d7e")),
            s = function (e) {
                var n = (0, i.default)((0, i.default)({}, e), {}, {
                    url: e.url ? e.url.replace(".json", "") : ""
                });
                n.success = n.success || function () {}, n.fail = n.fail || function () {}, n.complete = n.complete ||
                    function () {};
                var a = uni.getStorageSync("sign"),
                    t = uni.getStorageSync("token"),
                    s = "wap";
                uni.getStorageSync("openFrom");
                r.default.isInShowstart() && (s = "app"), r.default.isInWxminiprogram() && (s = "wechat_mini"),
                    r.default.isInTtminiprogram() && (s = "byte_mini");
                var c = uni.getStorageSync("userInfo") || null,
                    u = c && c.userId || "";
                n.header = (0, i.default)((0, i.default)({}, n.header), {}, {
                    CUSUT: a || "",
                    CUUSERREF: t,
                    CSAPPID: s,
                    CUSID: u
                });
                var d = uni.uploadFile((0, i.default)((0, i.default)({}, n), {}, {
                    url: o.uploadFileUrl + n.url,
                    success: function (e) {
                        n.success(e)
                    },
                    fail: function (e) {
                        n.fail(e)
                    },
                    complete: function () {
                        n.complete()
                    }
                }));
                d && d.onProgressUpdate((function (e) {
                    n.onProgressUpdate(e)
                }))
            };
        n.default = s
    },
    "0cf5": function (e, n, a) {
        var t = a("6071");
        t.__esModule && (t = t.default), "string" === typeof t && (t = [[e.i, t, ""]]), t.locals && (e.exports =
            t.locals);
        var i = a("4f06").default;
        i("46436e3c", t, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "0d7e": function (e, n, a) {
        "use strict";
        var t = a("4ea4").default,
            i = t(a("5530"));
        a("c975"), a("14d9"), a("ac1f"), a("466d"), a("caad"), a("2532"), a("841c"), a("b64b"), a("99af"), a(
            "fb6a"), a("d3b7"), a("159b"), a("00b4"), a("3ca3"), a("ddb0"), a("2b3d"), a("9861");
        var o = t(a("c79c")),
            r = t(a("d6db")),
            s = t(a("5c13")),
            c = navigator.userAgent.indexOf("miniProgram") > -1;
        if (c) var u = a("70c7");
        window.bridge = {}, window.bridge.callHandler = function () {};
        var d = navigator.userAgent,
            l = function (e) {
                (d.match(/(iPhone|iPod|iPad);?/i) || d.indexOf("Android") > -1) && d.indexOf("showstart") > -1 &&
                    (d.match(/(iPhone|iPod|iPad);?/i) ? function (e) {
                        if (window.WebViewJavascriptBridge) return e(WebViewJavascriptBridge);
                        if (window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
                        window.WVJBCallbacks = [e];
                        var n = document.createElement("iframe");
                        n.style.display = "none", n.src = "wvjbscheme://__BRIDGE_LOADED__", document.documentElement
                            .appendChild(n), setTimeout((function () {
                                document.documentElement.removeChild(n)
                            }), 0)
                    }((function (n) {
                        window.bridge = n, e(n)
                    })) : function (e) {
                        window.WebViewJavascriptBridge ? e(WebViewJavascriptBridge) : document.addEventListener(
                            "WebViewJavascriptBridgeReady", (function () {
                                e(WebViewJavascriptBridge)
                            }), !1)
                    }((function (n) {
                        window.bridge = n, e(n)
                    })))
            },
            p = function () {
                return d.indexOf("Android") > -1
            },
            g = function () {
                return !!((d.match(/(iPhone|iPod|iPad);?/i) || d.indexOf("Android") > -1) && d.indexOf(
                    "showstart") > -1)
            },
            f = function () {
                return !!((d.match(/(iPhone|iPod|iPad);?/i) || d.indexOf("Android") > -1) && d.toLowerCase().indexOf(
                    "toutiaomicroapp") > -1)
            },
            m = function () {
                return !!((d.match(/(iPhone|iPod|iPad);?/i) || d.indexOf("Android") > -1) && d.indexOf(
                    "miniProgram") > -1)
            },
            y = function () {
                return !!((d.match(/(iPhone|iPod|iPad);?/i) || d.indexOf("Android") > -1) && d.indexOf("AliApp") >
                    -1)
            },
            _ = function (e, n, a) {
                var t = e.currentTarget.dataset.url || window.location.href;
                null != n && (t = function (e, n) {
                    var a = e.includes("?") ? e + "&" : e + "?",
                        t = Object.keys(n);
                    return t.forEach((function (e) {
                        a += e + "=" + encodeURIComponent(n[e]) + "&"
                    })), a = a.substring(0, a.length - 1), a
                }(t, n)), t = s.default.setUrlssfrom(t);
                var o = (0, i.default)((0, i.default)({}, e.currentTarget.dataset), {}, {
                    url: t
                });
                v(o, a)
            },
            h = function () {
                if ("undefined" !== typeof window && window) {
                    var e = /iphone/gi.test(window.navigator.userAgent);
                    if (!e) return !1;
                    var n = window,
                        a = n.devicePixelRatio,
                        t = n.screen,
                        i = t.width,
                        o = t.height;
                    return [{
                        devicePixelRatio: 3,
                        width: 375,
                        height: 812
                    }, {
                        devicePixelRatio: 3,
                        width: 414,
                        height: 896
                    }, {
                        devicePixelRatio: 2,
                        width: 414,
                        height: 896
                    }, {
                        devicePixelRatio: 3,
                        width: 390,
                        height: 844
                    }, {
                        devicePixelRatio: 3,
                        width: 429,
                        height: 926
                    }].some((function (e) {
                        return e.devicePixelRatio === a && e.width === i && e.height === o
                    }))
                }
                return !1
            },
            v = function (e) {
                if (g()) {
                    var n = e.url || window.location.href;
                    n = s.default.setUrlssfrom(n);
                    var a = (0, i.default)((0, i.default)({}, e), {}, {
                            type: e.type || 1,
                            url: n,
                            poster: e.poster || r.default.logo,
                            title: e.title || document.title || "秀动ShowStart",
                            remark: e.remark || "我在秀动发现一个有趣的内容，快来看看吧",
                            channel: e.channel || 0,
                            from: e.from || ""
                        }),
                        t = "我在秀动发现【" + a.title + "】很有趣，快来看看吧";
                    a.weiboContent = a.weibocontent || t, a.weiboContent = a.weiboContent + " @秀动ShowStart " +
                        a.url, 3 == a.type && 255254 == a.channel && (a.weChatMiniProgram || (a.weChatMiniProgram = {
                            title: a.title,
                            desc: a.desc || a.remark,
                            webpageUrl: n,
                            path: new URL(n).pathname,
                            imageURL: a.imageURL || a.poster || r.default.logo,
                            type: 0,
                            userName: "gh_356b81673aea",
                            shareTicket: !0
                        })), l((function (e) {
                            window.bridge.callHandler("callShare", a)
                        }))
                }
            };
        e.exports = {
            isInAndroid: p,
            isInShowstart: g,
            isInShowstartRichText: function () {
                return !(!g() || !d.includes("RichText"))
            },
            isInTtminiprogram: f,
            isInWxminiprogram: m,
            isInAlminiprogram: y,
            isInWeb: function () {
                return !(g() || f() || m() || y())
            },
            isInH5: function () {
                return !(!(d.match(/(iPhone|iPod|iPad);?/i) || d.indexOf("Android") > -1) || f() || m() ||
                    y())
            },
            isInWeixin: function () {
                return "micromessenger" == d.toLowerCase().match(/MicroMessenger/i)
            },
            openMiniprogram: function (e, n) {
                var a = e && "" != e ? e : window.location.pathname + window.location.search;
                f() && tt ? (uni.showLoading({
                    title: "正在打开"
                }), tt.miniProgram.redirectTo({
                    url: a
                })) : m() && u ? (uni.showLoading({
                    title: "正在打开"
                }), u.miniProgram.redirectTo({
                    url: a
                })) : y() && my ? (uni.showLoading({
                    title: "正在打开"
                }), my.redirectTo({
                    url: a
                })) : n && n()
            },
            share: function (e, n) {
                _(e, null, n)
            },
            shareWithParams: _,
            appReadClipboard: function () {
                g() && l((function (e) {
                    window.bridge.callHandler("readClipboard", {}, (function (e) {
                        "string" == typeof e && JSON.parse(e)
                    }))
                }))
            },
            appWriteClipboard: function (e, n) {
                g() && l((function (a) {
                    window.bridge.callHandler("writeClipboard", e, (function (e) {
                        var a = "string" == typeof e ? JSON.parse(e) : e;
                        n && n(a)
                    }))
                }))
            },
            appLogin: function (e, n) {
                if (g()) {
                    var a = uni.getStorageSync("trackPath") ? uni.getStorageSync("trackPath").value :
                        "";
                    l((function (t) {
                        window.bridge.callHandler("callLogin", (0, i.default)((0, i.default)
                            ({}, e), {}, {
                                extra: (0, i.default)((0, i.default)({}, e.extra), {}, {
                                    trackPath: e.extra && e.extra.trackPath ?
                                        e.extra.trackPath : a
                                })
                            }), (function (e) {
                            var a = "string" == typeof e ? JSON.parse(e) : e;
                            a.userInfo && a.userInfo.sign ? (o.default.commit(
                                    "setSign", a.userInfo.sign), o.default.commit(
                                    "setUserInfo", a.userInfo), o.default.commit(
                                    "setIdToken", a.userInfo.idtoken || "")) :
                                o.default.commit("logOut"), n && n(a)
                        }))
                    }))
                }
            },
            appLoginInfo: function (e) {
                g() && !this.isInShowstartRichText() ? l((function (n) {
                    window.bridge.callHandler("callLoginInfo", {}, (function (n) {
                        var a = "string" == typeof n ? JSON.parse(n) : n;
                        a.userInfo && a.userInfo.sign ? (o.default.commit(
                            "setSign", a.userInfo.sign), o.default.commit(
                            "setUserInfo", a.userInfo), o.default.commit(
                            "setIdToken", a.userInfo.idtoken || "")) : (o.default
                            .commit("setSign", ""), o.default.commit(
                                "setUserInfo", ""), o.default.commit(
                                "setIdToken", "")), e && e(a)
                    }))
                })) : e && e()
            },
            appLogout: function (e) {
                g() && l((function (n) {
                    window.bridge.callHandler("callLogout", {}, (function (n) {
                        var a = "string" == typeof n ? JSON.parse(n) : n;
                        e && e(a)
                    }))
                }))
            },
            sendUserData: function (e) {
                g() && l((function (n) {
                    window.bridge.callHandler("sendLoginData", e, (function (e) {}))
                }))
            },
            openApp: function () {
                var e = "https://apps.apple.com/cn/app/xiu-dong-kan-xian-chang-yan/id923912459";
                p() && (e = "http://a.app.qq.com/o/simple.jsp?pkgname=com.showstartfans.activity"),
                    document.location = e
            },
            umStatistical: function (e, n) {
                g() && l((function (a) {
                    window.bridge.callHandler("callUMStatistical", e, (function (e) {
                        var a = "string" == typeof e ? JSON.parse(e) : e;
                        n && n(a)
                    }))
                }))
            },
            getAppVersion: function () {
                return g() ? d.split("showstart/")[1].split(" ")[0] : ""
            },
            callAppCustomerService: function (e) {
                g() && l((function (n) {
                    window.bridge.callHandler("callCustomerService", (function (n) {
                        var a = "string" == typeof n ? JSON.parse(n) : n;
                        e(a)
                    }))
                }))
            },
            callAppMemberStatus: function (e, n) {
                g() && l((function (a) {
                    window.bridge.callHandler("callMemberStatus", {
                        valid: e
                    }, (function (e) {
                        var a = "string" == typeof e ? JSON.parse(e) : e;
                        n(a)
                    }))
                }))
            },
            checkAppInstalled: function (e, n) {
                g() && l((function (a) {
                    window.bridge.callHandler("checkAppInstalled", {
                        url: e
                    }, (function (e) {
                        var a = "string" == typeof e ? JSON.parse(e) : e;
                        n && n(a)
                    }))
                }))
            },
            enableShareWebPage: function (e) {
                g() && l((function (n) {
                    window.bridge.callHandler("enableShareWebPage", {
                        enable: e
                    }, (function (e) {}))
                }))
            },
            addEventToSystemCalendar: function (e, n) {
                g() && l((function (a) {
                    window.bridge.callHandler("addEventToSystemCalendar", e, (function (e) {
                        var a = "string" == typeof e ? JSON.parse(e) : e;
                        n && n(a)
                    }))
                }))
            },
            queryExistEventForSystemCalendar: function (e, n) {
                g() && l((function (a) {
                    window.bridge.callHandler("queryExistEventForSystemCalendar", e, (
                        function (e) {
                            var a = "string" == typeof e ? JSON.parse(e) : e;
                            n && n(a)
                        }))
                }))
            },
            watchLiveBroadcast: function (e) {
                g() && l((function (n) {
                    window.bridge.callHandler("watchLiveBroadcast", e, (function (e) {}))
                }))
            },
            isIPhoneX: h,
            iPhoneNavigationBarHeight: function () {
                return h() ? 88 : 64
            },
            callSpecialPageChange: function (e, n, a) {
                g() && l((function (t) {
                    window.bridge.callHandler("callSpecialPageChange", {
                        curPage: e,
                        totalPage: n,
                        show: a
                    }, (function (e) {
                        "string" == typeof e && JSON.parse(e)
                    }))
                }))
            },
            callVideoShare: function (e, n, a) {
                g() && l((function (t) {
                    window.bridge.callHandler("callVideoShare", {
                        videoId: e,
                        photoShare: n
                    }, (function (e) {
                        var n = "string" == typeof e ? JSON.parse(e) : e;
                        a(n)
                    }))
                }))
            },
            callVideoCommentReplyList: function (e, n) {
                g() && l((function (a) {
                    window.bridge.callHandler("callVideoCommentReplyList", {
                        videoId: e,
                        mainletterId: n
                    }, (function (e) {
                        "string" == typeof e && JSON.parse(e)
                    }))
                }))
            },
            callVideoPaid: function (e, n) {
                g() && l((function (a) {
                    window.bridge.callHandler("callVideoPaid", {
                        videoId: e,
                        payUrl: n
                    }, (function (e) {
                        "string" == typeof e && JSON.parse(e)
                    }))
                }))
            },
            callCertificationCenter: function () {
                g() && l((function (e) {
                    window.bridge.callHandler("callCertificationCenter", (function (e) {
                        "string" == typeof e && JSON.parse(e)
                    }))
                }))
            },
            appCallClose: function (e) {
                g() && l((function (n) {
                    window.bridge.callHandler("callClose", {}, (function (n) {
                        var a = "string" == typeof n ? JSON.parse(n) : n;
                        e(a)
                    }))
                }))
            },
            appCallOpenPage: function (e, n) {
                e && g() && l((function (a) {
                    e.url = s.default.setUrlssfrom(e.url), window.bridge.callHandler(
                        "callOpenPage", e, (function (e) {
                            var a = "string" == typeof e ? JSON.parse(e) : e;
                            n && n(a)
                        }))
                }))
            },
            appCallOpenApp: function (e, n) {
                g() && l((function (a) {
                    window.bridge.callHandler("callOpenApp", e, (function (e) {
                        var a = "string" == typeof e ? JSON.parse(e) : e;
                        n && n(a)
                    }))
                }))
            },
            callAccountRealNameAuthentication: function (e, n) {
                g() && l((function (a) {
                    window.bridge.callHandler("callAccountRealNameAuthentication", e, (
                        function (e) {
                            var a = "string" == typeof e ? JSON.parse(e) : e;
                            n && n(a)
                        }))
                }))
            },
            callAccountFaceAuthentication: function (e, n) {
                g() && l((function (a) {
                    window.bridge.callHandler("callAccountFaceAuthentication", e, (function (
                        e) {
                        var a = "string" == typeof e ? JSON.parse(e) : e;
                        n && n(a)
                    }))
                }))
            },
            callCheckAppInstalled: function (e, n) {
                g() && l((function (a) {
                    window.bridge.callHandler("callCheckAppInstalled", e, (function (e) {
                        var a = "string" == typeof e ? JSON.parse(e) : e;
                        n && n(a)
                    }))
                }))
            },
            callUpdateNavigationBarState: function (e) {
                g() && l((function (n) {
                    window.bridge.callHandler("callUpdateNavigationBarState", {
                        hidden: e
                    }, (function (e) {}))
                }))
            },
            callScanQRCode: function (e) {
                var n = this;
                g() && (-1 == s.default.appVersionCompare("5.2.4") ? uni.showModal({
                    title: "当前版本过低",
                    content: "请升级至5.2.4及以上版本才能扫码打卡",
                    confirmText: "去升级",
                    success: function (e) {
                        e.confirm && n.openApp()
                    }
                }) : l((function (n) {
                    window.bridge.callHandler("callScanQRCode", {}, (function (n) {
                        var a = "string" == typeof n ? JSON.parse(n) : n;
                        e && e(a)
                    }))
                })))
            },
            callNotifySeatSelectResult: function (e) {
                var n = this;
                g() && (-1 == s.default.appVersionCompare("5.4.0") ? uni.showModal({
                    title: "当前版本过低",
                    content: "请升级至5.4.0及以上版本",
                    confirmText: "去升级",
                    success: function (e) {
                        e.confirm && n.openApp()
                    }
                }) : l((function (n) {
                    window.bridge.callHandler("callNotifySeatSelectResult", e, (
                        function (e) {}))
                })))
            },
            callAppShare: v,
            callSaveImageToAlbum: function (e, n) {
                g() && l((function (a) {
                    window.bridge.callHandler("callSaveImageToAlbum", {
                        image: e
                    }, (function (e) {
                        var a = "string" == typeof e ? JSON.parse(e) : e;
                        n && n(a)
                    }))
                }))
            },
            callShareWeChatMiniProgram: function (e, n) {
                if (g()) {
                    var a = e && e.url || window.location.href;
                    a = s.default.setUrlssfrom(a);
                    var t = {
                        title: e.title || document.title || "秀动ShowStart",
                        desc: e.desc || e.remark || "我在秀动发现一个有趣的内容，快来看看吧",
                        webpageUrl: a,
                        path: new URL(a).pathname,
                        imageURL: e.imageURL || e.poster || r.default.logo,
                        type: 0,
                        userName: "gh_356b81673aea",
                        shareTicket: !0
                    };
                    l((function (e) {
                        window.bridge.callHandler("callShareWeChatMiniProgram", t, (
                            function (e) {
                                var a = "string" == typeof e ? JSON.parse(e) : e;
                                n && n(a)
                            }))
                    }))
                }
            }
        }
    },
    "0e83": function (e, n, a) {
        "use strict";
        a.r(n);
        var t = a("2aa2"),
            i = a("6f535");
        for (var o in i)["default"].indexOf(o) < 0 && function (e) {
            a.d(n, e, (function () {
                return i[e]
            }))
        }(o);
        a("34d5");
        var r = a("f0c5"),
            s = Object(r["a"])(i["default"], t["b"], t["c"], !1, null, null, null, !1, t["a"], void 0);
        n["default"] = s.exports
    },
    1: function (e, n) {},
    "17b2": function (e, n, a) {
        "use strict";
        a.r(n);
        var t = a("a4eb"),
            i = a.n(t);
        for (var o in t)["default"].indexOf(o) < 0 && function (e) {
            a.d(n, e, (function () {
                return t[e]
            }))
        }(o);
        n["default"] = i.a
    },
    "19fa": function (e, n, a) {
        "use strict";
        (function (e) {
            a("7a82");
            var t = a("4ea4").default;
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0, a("d3b7"), a("c975"), a("ac1f"), a("00b4");
            var i = t(a("53ca"));
            (function () {
                function e() {
                    WeixinJSBridge.invoke("setFontSizeCallback", {
                        fontSize: 0
                    }), WeixinJSBridge.on("menu:setfont", (function () {
                        WeixinJSBridge.invoke("setFontSizeCallback", {
                            fontSize: 0
                        })
                    }))
                }
                "object" == ("undefined" === typeof WeixinJSBridge ? "undefined" : (0, i.default)(
                    WeixinJSBridge)) && "function" == typeof WeixinJSBridge.invoke ? e() : document.addEventListener ?
                    document.addEventListener("WeixinJSBridgeReady", e, !1) : document.attachEvent && (
                        document.attachEvent("WeixinJSBridgeReady", e), document.attachEvent(
                            "onWeixinJSBridgeReady", e))
            })();
            var o = {
                globalData: {
                    toLogin: !1
                },
                onLaunch: function (n) {
                    e.log("App Launch");
                    var a = n.query || null,
                        t = uni.getStorageSync("st_flpv") || this.$util.uuid();
                    this.$store.commit("setStflpv", t);
                    var i = uni.getStorageSync("token") || this.$util.uuid(32).toLowerCase();
                    this.$store.commit("setToken", i);
                    var o = a && a.userInfo ? JSON.parse(decodeURIComponent(a.userInfo)) : uni.getStorageSync(
                        "userInfo");
                    this.$store.commit("setUserInfo", o), this.$store.commit("setIdToken", o && o.idtoken ||
                        "");
                    var r = a && a.sdsign || o && o.sign || uni.getStorageSync("sign") || "";
                    this.$store.commit("setSign", r);
                    var s = a && a.openFrom || "";
                    this.$store.commit("setOpenFrom", s);
                    var c = a && a.gateway || "";
                    if (this.$store.commit("setGateway", c), a) {
                        var u = a.partner,
                            d = a.ssfrom;
                        u && (this.$store.commit("setPartner", u), this.$store.commit(
                            "setTrackPath", u)), this.$store.commit("setTrackPath", d)
                    }
                    var l = this;
                    ["navigateTo", "redirectTo", "reLaunch", "switchTab"].forEach((function (n) {
                        uni.addInterceptor(n, {
                            invoke: function (e) {
                                var n = e.url;
                                return n = l.$util.setUrlssfrom(n), e.url =
                                    n, e
                            },
                            fail: function (n) {
                                e.log(n)
                            }
                        })
                    }))
                },
                onShow: function () {
                    e.log("App Show");
                    UA.indexOf("android"), /iphone|ipad|ipod|ios/.test(UA);
                    this.$callApp.isInShowstart() && this.$callApp.appLoginInfo()
                },
                onHide: function () {
                    e.log("App Hide")
                }
            };
            n.default = o
        }).call(this, a("5a52")["default"])
    },
    2: function (e, n) {},
    "27b2": function (e, n, a) {
        "use strict";
        (function (e) {
            var n = a("4ea4").default;
            a("13d5"), a("d3b7"), a("ddb0"), a("ac1f"), a("5319");
            var t = n(a("e143")),
                i = {
                    keys: function () {
                        return []
                    }
                };
            e["____A77910C____"] = !0, delete e["____A77910C____"], e.__uniConfig = {
                    globalStyle: {
                        navigationBarTextStyle: "black",
                        navigationBarTitleText: "秀动",
                        navigationBarBackgroundColor: "#F8F8F8",
                        backgroundColor: "#F8F8F8",
                        titleNView: !1
                    },
                    tabBar: {
                        color: "#bbbbbb",
                        selectedColor: "#000000",
                        borderStyle: "white",
                        backgroundColor: "#ffffff",
                        list: [{
                            pagePath: "pages/index/index",
                            iconPath: "static/cmd_bt_home__normal@3x.png",
                            selectedIconPath: "static/cmd_bt_home__highlight@3x.png",
                            text: "演出",
                            redDot: !1,
                            badge: ""
                        }, {
                            pagePath: "pages/ticketIndex/ticketIndex",
                            iconPath: "static/cmd_icon_tiket_normal@3x.png",
                            selectedIconPath: "static/cmd_icon_tiket@2x.png",
                            text: "票夹",
                            redDot: !1,
                            badge: ""
                        }, {
                            pagePath: "pages/goodsIndex/goodsIndex",
                            iconPath: "static/cmd_icon_souvenir_normal@3x.png",
                            selectedIconPath: "static/cmd_icon_souvenir_highlight@3x.png",
                            text: "周边",
                            redDot: !1,
                            badge: ""
                        }, {
                            pagePath: "pages/raiseIndex/raiseIndex",
                            iconPath: "static/cmd_icon_crowd_normal@3x.png",
                            selectedIconPath: "static/cmd_icon_crowd_highlight@3x.png",
                            text: "众筹",
                            redDot: !1,
                            badge: ""
                        }, {
                            pagePath: "pages/myHome/myHome",
                            iconPath: "static/cmd_icon_mine_normal@3x.png",
                            selectedIconPath: "static/cmd_icon_mine_highlight@3x.png",
                            text: "我的",
                            redDot: !1,
                            badge: ""
                        }, {
                            pagePath: "pages/special/sitetvpage/sitetvpage",
                            text: "",
                            iconPath: "",
                            selectedIconPath: "",
                            redDot: !1,
                            badge: ""
                        }]
                    }
                }, e.__uniConfig.compilerVersion = "3.99", e.__uniConfig.darkmode = !1, e.__uniConfig.themeConfig = {},
                e.__uniConfig.uniPlatform = "h5", e.__uniConfig.appId = "__UNI__A77910C", e.__uniConfig.appName =
                "秀动", e.__uniConfig.appVersion = "1.0.0", e.__uniConfig.appVersionCode = "100", e.__uniConfig
                .router = {
                    mode: "history",
                    base: "/"
                }, e.__uniConfig.publicPath = "https://img05.showstart.com/", e.__uniConfig["async"] = {
                    loading: "AsyncLoading",
                    error: "AsyncError",
                    delay: 200,
                    timeout: 6e4
                }, e.__uniConfig.debug = !1, e.__uniConfig.networkTimeout = {
                    request: 6e4,
                    connectSocket: 6e4,
                    uploadFile: 6e4,
                    downloadFile: 6e4
                }, e.__uniConfig.sdkConfigs = {}, e.__uniConfig.qqMapKey = void 0, e.__uniConfig.googleMapKey =
                void 0, e.__uniConfig.aMapKey = void 0, e.__uniConfig.aMapSecurityJsCode = void 0, e.__uniConfig
                .aMapServiceHost = void 0, e.__uniConfig.locale = "", e.__uniConfig.fallbackLocale = void 0,
                e.__uniConfig.locales = i.keys().reduce((function (e, n) {
                    var a = n.replace(/\.\/(uni-app.)?(.*).json/, "$2"),
                        t = i(n);
                    return Object.assign(e[a] || (e[a] = {}), t.common || t), e
                }), {}), e.__uniConfig.nvue = {
                    "flex-direction": "column"
                }, e.__uniConfig.__webpack_chunk_load__ = a.e, t.default.component("pages-index-index", (
                    function (e) {
                        var n = {
                            component: Promise.all([a.e(
                                "pages-activity-list-list~pages-goods-detail-detail~pages-index-index~pages-site-artist-artist~pages-~0fdc9a0e"
                            ), a.e("pages-index-index")]).then(function () {
                                return e(a("628f"))
                            }.bind(null, a)).catch(a.oe),
                            delay: __uniConfig["async"].delay,
                            timeout: __uniConfig["async"].timeout
                        };
                        return __uniConfig["async"]["loading"] && (n.loading = {
                            name: "SystemAsyncLoading",
                            render: function (e) {
                                return e(__uniConfig["async"]["loading"])
                            }
                        }), __uniConfig["async"]["error"] && (n.error = {
                            name: "SystemAsyncError",
                            render: function (e) {
                                return e(__uniConfig["async"]["error"])
                            }
                        }), n
                    })), t.default.component("pages-ticketIndex-ticketIndex", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-activity-detail-detail~pages-ticketIndex-ticketIndex~pages-user-identity-list-list"
                        ), a.e("pages-ticketIndex-ticketIndex")]).then(function () {
                            return e(a("0b20"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-myHome-myHome", (function (e) {
                    var n = {
                        component: a.e("pages-myHome-myHome").then(function () {
                            return e(a("13b6"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-city-city", (function (e) {
                    var n = {
                        component: a.e("pages-city-city").then(function () {
                            return e(a("bd90"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-goodsIndex-goodsIndex", (function (e) {
                    var n = {
                        component: a.e("pages-goodsIndex-goodsIndex").then(function () {
                            return e(a("56f1"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-raiseIndex-raiseIndex", (function (e) {
                    var n = {
                        component: a.e("pages-raiseIndex-raiseIndex").then(function () {
                            return e(a("73f9"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-video-channel-channel", (function (e) {
                    var n = {
                        component: a.e("pages-video-channel-channel").then(function () {
                            return e(a("364d"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-videoissue-videoissue", (function (e) {
                    var n = {
                        component: a.e("pages-videoissue-videoissue").then(function () {
                            return e(a("50ed"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-404", (function (e) {
                    var n = {
                        component: a.e("pages-404").then(function () {
                            return e(a("d4ef"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-apptest-apptest", (function (e) {
                    var n = {
                        component: a.e("pages-apptest-apptest").then(function () {
                            return e(a("6a44"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-command-activity", (function (e) {
                    var n = {
                        component: a.e("pages-command-activity").then(function () {
                            return e(a("da77"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-test", (function (e) {
                    var n = {
                        component: a.e("pages-test").then(function () {
                            return e(a("e73e"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-passport-login-login", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-confirm-confirm~pages-order-refund-refund~pages-order-refundv1-refund~pages-pas~9b66f36a"
                        ), a.e("pages-passport-login-login")]).then(function () {
                            return e(a("ae04"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-passport-permit-permit", (function (e) {
                    var n = {
                        component: a.e("pages-passport-permit-permit").then(function () {
                            return e(a("0486"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-passport-close-close", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-confirm-confirm~pages-order-refund-refund~pages-order-refundv1-refund~pages-pas~9b66f36a"
                        ), a.e("pages-passport-close-close")]).then(function () {
                            return e(a("e943"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-tickets-tickets", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-codeInfo-codeInfo~pages-order-gifts-gifts~pages-order-goods-detail-detail~pages~35ac490a"
                        ), a.e("pages-tickets-tickets")]).then(function () {
                            return e(a("3cf1"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-videoissue-videoissue", (function (e) {
                    var n = {
                        component: a.e("pages-videoissue-videoissue").then(function () {
                            return e(a("50ed"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-activity-list-list", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-activity-list-list~pages-goods-detail-detail~pages-index-index~pages-site-artist-artist~pages-~0fdc9a0e"
                        ), a.e("pages-activity-list-list")]).then(function () {
                            return e(a("9d7e"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-activity-detail-detail", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-activity-detail-detail~pages-goods-detail-detail~pages-order-activity-detail-detail~pages-orde~61bc27bc"
                        ), a.e(
                            "pages-activity-detail-detail~pages-ticketIndex-ticketIndex~pages-user-identity-list-list"
                        ), a.e(
                            "pages-activity-detail-detail~pages-goods-detail-detail"
                        ), a.e("pages-activity-detail-detail")]).then(function () {
                            return e(a("6ff2"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-activity-search-search", (function (e) {
                    var n = {
                        component: a.e("pages-activity-search-search").then(function () {
                            return e(a("f1d2"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-activity-livehouse-livehouse", (function (e) {
                    var n = {
                        component: a.e("pages-activity-livehouse-livehouse").then(function () {
                            return e(a("8db3"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-activity-seat-seat", (function (e) {
                    var n = {
                        component: a.e("pages-activity-seat-seat").then(function () {
                            return e(a("e70f"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-activity-userClaim-userClaim", (function (e) {
                    var n = {
                        component: a.e("pages-activity-userClaim-userClaim").then(function () {
                            return e(a("1c5b"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-raise-list-list", (function (e) {
                    var n = {
                        component: a.e("pages-raise-list-list").then(function () {
                            return e(a("e4dd"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-raise-detail-detail", (function (e) {
                    var n = {
                        component: a.e("pages-raise-detail-detail").then(function () {
                            return e(a("80dd"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-raise-ticket-ticket", (function (e) {
                    var n = {
                        component: a.e("pages-raise-ticket-ticket").then(function () {
                            return e(a("34ad"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-goods-theme-theme", (function (e) {
                    var n = {
                        component: a.e("pages-goods-theme-theme").then(function () {
                            return e(a("3cb7"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-goods-detail-detail", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-activity-list-list~pages-goods-detail-detail~pages-index-index~pages-site-artist-artist~pages-~0fdc9a0e"
                        ), a.e(
                            "pages-activity-detail-detail~pages-goods-detail-detail~pages-order-activity-detail-detail~pages-orde~61bc27bc"
                        ), a.e(
                            "pages-activity-detail-detail~pages-goods-detail-detail"
                        ), a.e("pages-goods-detail-detail")]).then(function () {
                            return e(a("77e7"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-goods-list-list", (function (e) {
                    var n = {
                        component: a.e("pages-goods-list-list").then(function () {
                            return e(a("0c9d"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-gifts-gifts", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-codeInfo-codeInfo~pages-order-gifts-gifts~pages-order-goods-detail-detail~pages~35ac490a"
                        ), a.e("pages-order-gifts-gifts")]).then(function () {
                            return e(a("007b"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-activity-list-list", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-confirm-confirm~pages-order-activity-detail-detail~pages-order-activity-list-li~815001a0"
                        ), a.e("pages-order-activity-list-list")]).then(function () {
                            return e(a("7e0b"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-activity-detail-detail", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-confirm-confirm~pages-order-activity-detail-detail~pages-order-activity-list-li~815001a0"
                        ), a.e(
                            "pages-activity-detail-detail~pages-goods-detail-detail~pages-order-activity-detail-detail~pages-orde~61bc27bc"
                        ), a.e("pages-order-activity-detail-detail")]).then(function () {
                            return e(a("bd67"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-activity-confirm-confirm", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-confirm-confirm~pages-order-activity-detail-detail~pages-order-activity-list-li~815001a0"
                        ), a.e(
                            "pages-order-activity-confirm-confirm~pages-order-refund-refund~pages-order-refundv1-refund~pages-pas~9b66f36a"
                        ), a.e(
                            "pages-coupon-list-list~pages-order-activity-confirm-confirm~pages-order-goods-confirm-confirm"
                        ), a.e("pages-order-activity-confirm-confirm")]).then(function () {
                            return e(a("597d"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-raise-confirm-confirm", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-confirm-confirm~pages-order-activity-detail-detail~pages-order-activity-list-li~815001a0"
                        ), a.e("pages-order-raise-confirm-confirm")]).then(function () {
                            return e(a("c775"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-goods-confirm-confirm", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-confirm-confirm~pages-order-activity-detail-detail~pages-order-activity-list-li~815001a0"
                        ), a.e(
                            "pages-coupon-list-list~pages-order-activity-confirm-confirm~pages-order-goods-confirm-confirm"
                        ), a.e("pages-order-goods-confirm-confirm")]).then(function () {
                            return e(a("3999"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-wxpay-wxpay", (function (e) {
                    var n = {
                        component: a.e("pages-order-wxpay-wxpay").then(function () {
                            return e(a("c3fa"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-payFailed-payFailed", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-confirm-confirm~pages-order-activity-detail-detail~pages-order-activity-list-li~815001a0"
                        ), a.e("pages-order-payFailed-payFailed")]).then(function () {
                            return e(a("a388"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-paySuccess-paySuccess", (function (e) {
                    var n = {
                        component: a.e("pages-order-paySuccess-paySuccess").then(function () {
                            return e(a("7789"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-raise-list-list", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-confirm-confirm~pages-order-activity-detail-detail~pages-order-activity-list-li~815001a0"
                        ), a.e("pages-order-raise-list-list")]).then(function () {
                            return e(a("94443"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-raise-detail-detail", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-confirm-confirm~pages-order-activity-detail-detail~pages-order-activity-list-li~815001a0"
                        ), a.e(
                            "pages-activity-detail-detail~pages-goods-detail-detail~pages-order-activity-detail-detail~pages-orde~61bc27bc"
                        ), a.e("pages-order-raise-detail-detail")]).then(function () {
                            return e(a("a61f"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-goods-list-list", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-confirm-confirm~pages-order-activity-detail-detail~pages-order-activity-list-li~815001a0"
                        ), a.e("pages-order-goods-list-list")]).then(function () {
                            return e(a("9554"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-goods-detail-detail", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-confirm-confirm~pages-order-activity-detail-detail~pages-order-activity-list-li~815001a0"
                        ), a.e(
                            "pages-order-activity-codeInfo-codeInfo~pages-order-gifts-gifts~pages-order-goods-detail-detail~pages~35ac490a"
                        ), a.e(
                            "pages-activity-detail-detail~pages-goods-detail-detail~pages-order-activity-detail-detail~pages-orde~61bc27bc"
                        ), a.e("pages-order-goods-detail-detail")]).then(function () {
                            return e(a("cfad"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-activity-codeInfo-codeInfo", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-codeInfo-codeInfo~pages-order-gifts-gifts~pages-order-goods-detail-detail~pages~35ac490a"
                        ), a.e("pages-order-activity-codeInfo-codeInfo")]).then(function () {
                            return e(a("935b"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-refund-refund", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-confirm-confirm~pages-order-refund-refund~pages-order-refundv1-refund~pages-pas~9b66f36a"
                        ), a.e("pages-order-refund-refund")]).then(function () {
                            return e(a("91bc"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-refundv1-refund", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-confirm-confirm~pages-order-refund-refund~pages-order-refundv1-refund~pages-pas~9b66f36a"
                        ), a.e("pages-order-refundv1-refund")]).then(function () {
                            return e(a("bfc5"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-refundcheck-refundcheck", (function (e) {
                    var n = {
                        component: a.e("pages-order-refundcheck-refundcheck").then(function () {
                            return e(a("d0d9"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-refundSuccess-refundSuccess", (function (e) {
                    var n = {
                        component: a.e("pages-order-refundSuccess-refundSuccess").then(function () {
                            return e(a("3d3a"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-order-payResult-payResult", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-confirm-confirm~pages-order-activity-detail-detail~pages-order-activity-list-li~815001a0"
                        ), a.e("pages-order-payResult-payResult")]).then(function () {
                            return e(a("dd32"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-coupon-list-list", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-coupon-list-list~pages-order-activity-confirm-confirm~pages-order-goods-confirm-confirm"
                        ), a.e("pages-coupon-list-list")]).then(function () {
                            return e(a("3f45"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-coupon-receive-receive", (function (e) {
                    var n = {
                        component: a.e("pages-coupon-receive-receive").then(function () {
                            return e(a("f255"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-coupon-goods-goods-list-goods-list", (function (e) {
                    var n = {
                        component: a.e("pages-coupon-goods-goods-list-goods-list").then(
                            function () {
                                return e(a("6b21"))
                            }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-user-address-list-list", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-user-address-list-list~pages-user-viewer-list-list"
                        ), a.e("pages-user-address-list-list")]).then(function () {
                            return e(a("32e8"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-user-address-edit-edit", (function (e) {
                    var n = {
                        component: a.e("pages-user-address-edit-edit").then(function () {
                            return e(a("45ee"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-user-viewer-list-list", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-user-address-list-list~pages-user-viewer-list-list"
                        ), a.e("pages-user-viewer-list-list")]).then(function () {
                            return e(a("3380"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-user-viewer-edit-edit", (function (e) {
                    var n = {
                        component: a.e("pages-user-viewer-edit-edit").then(function () {
                            return e(a("ed81"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-user-identity-list-list", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-activity-detail-detail~pages-ticketIndex-ticketIndex~pages-user-identity-list-list"
                        ), a.e("pages-user-identity-list-list")]).then(function () {
                            return e(a("46c8"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-user-identity-identapp-index", (function (e) {
                    var n = {
                        component: a.e("pages-user-identity-identapp-index").then(function () {
                            return e(a("10ee"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-user-code-code", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-order-activity-codeInfo-codeInfo~pages-order-gifts-gifts~pages-order-goods-detail-detail~pages~35ac490a"
                        ), a.e("pages-user-code-code")]).then(function () {
                            return e(a("c84a"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-user-aut-step1", (function (e) {
                    var n = {
                        component: a.e("pages-user-aut-step1").then(function () {
                            return e(a("2981"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-user-aut-step2", (function (e) {
                    var n = {
                        component: a.e("pages-user-aut-step2").then(function () {
                            return e(a("b4d8"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-user-aut-fail", (function (e) {
                    var n = {
                        component: a.e("pages-user-aut-fail").then(function () {
                            return e(a("2e00"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-user-creditLevel-creditLevel", (function (e) {
                    var n = {
                        component: a.e("pages-user-creditLevel-creditLevel").then(function () {
                            return e(a("b43a"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-join-join", (function (e) {
                    var n = {
                        component: a.e("pages-special-join-join").then(function () {
                            return e(a("1604"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-share-list-list", (function (e) {
                    var n = {
                        component: a.e("pages-special-share-list-list").then(function () {
                            return e(a("9628"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-showdesk-showdesk", (function (e) {
                    var n = {
                        component: a.e("pages-special-showdesk-showdesk").then(function () {
                            return e(a("c8ee"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-share-detail-detail", (function (e) {
                    var n = {
                        component: a.e("pages-special-share-detail-detail").then(function () {
                            return e(a("005c"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-share-article-article", (function (e) {
                    var n = {
                        component: a.e("pages-special-share-article-article").then(function () {
                            return e(a("246c"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-share-brand-brand", (function (e) {
                    var n = {
                        component: a.e("pages-special-share-brand-brand").then(function () {
                            return e(a("fae5"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-share-join-join", (function (e) {
                    var n = {
                        component: a.e("pages-special-share-join-join").then(function () {
                            return e(a("d780"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-citytvpage-citytvpage", (function (e) {
                    var n = {
                        component: a.e("pages-special-citytvpage-citytvpage").then(function () {
                            return e(a("b876"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-sitetvpage-sitetvpage", (function (e) {
                    var n = {
                        component: a.e("pages-special-sitetvpage-sitetvpage").then(function () {
                            return e(a("f852"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-showfun-showfun", (function (e) {
                    var n = {
                        component: a.e("pages-special-showfun-showfun").then(function () {
                            return e(a("1efc"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-indiestar-apply-apply", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-special-indiestar-apply-apply~pages-special-summerband-summerband"
                        ), a.e("pages-special-indiestar-apply-apply")]).then(function () {
                            return e(a("31d3"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-indiestar-vote-vote", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-special-indiestar-vote-vote~pages-special-indiestar-vote2-vote2"
                        ), a.e("pages-special-indiestar-vote-vote")]).then(function () {
                            return e(a("0e39"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-indiestar-vote2-vote2", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-special-indiestar-vote-vote~pages-special-indiestar-vote2-vote2"
                        ), a.e("pages-special-indiestar-vote2-vote2")]).then(function () {
                            return e(a("7c9d"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-getTicket-getTicket", (function (e) {
                    var n = {
                        component: a.e("pages-special-getTicket-getTicket").then(function () {
                            return e(a("e5e4"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-guide-guide", (function (e) {
                    var n = {
                        component: a.e("pages-special-guide-guide").then(function () {
                            return e(a("81d1"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-lpa-index-index", (function (e) {
                    var n = {
                        component: a.e("pages-special-lpa-index-index").then(function () {
                            return e(a("fbd3"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-lpa-vote-vote", (function (e) {
                    var n = {
                        component: a.e("pages-special-lpa-vote-vote").then(function () {
                            return e(a("78ca"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-expand-index", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-activity-list-list~pages-goods-detail-detail~pages-index-index~pages-site-artist-artist~pages-~0fdc9a0e"
                        ), a.e("pages-special-expand-index")]).then(function () {
                            return e(a("6ed4"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-expand-command", (function (e) {
                    var n = {
                        component: a.e("pages-special-expand-command").then(function () {
                            return e(a("de50"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-fineband-fineband", (function (e) {
                    var n = {
                        component: a.e("pages-special-fineband-fineband").then(function () {
                            return e(a("5c2f"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-summerband-summerband", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-special-indiestar-apply-apply~pages-special-summerband-summerband"
                        ), a.e("pages-special-summerband-summerband")]).then(function () {
                            return e(a("2b4d"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-fy-fy", (function (e) {
                    var n = {
                        component: a.e("pages-special-fy-fy").then(function () {
                            return e(a("91b4"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-purchase-index", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-special-purchase-goods~pages-special-purchase-index"
                        ), a.e("pages-special-purchase-index")]).then(function () {
                            return e(a("8878"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-purchase-goods", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-special-purchase-goods~pages-special-purchase-index"
                        ), a.e("pages-special-purchase-goods")]).then(function () {
                            return e(a("4efe"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-nft-exchange", (function (e) {
                    var n = {
                        component: a.e("pages-special-nft-exchange").then(function () {
                            return e(a("80d2"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-nft-owner", (function (e) {
                    var n = {
                        component: a.e("pages-special-nft-owner").then(function () {
                            return e(a("50a6"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-redeem", (function (e) {
                    var n = {
                        component: a.e("pages-special-redeem").then(function () {
                            return e(a("970f"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-2022-2022", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-special-2022-2022~pages-special-2023-poster-poster~pages-special-lottery-194905~pages-special-~32550d53"
                        ), a.e(
                            "pages-order-activity-codeInfo-codeInfo~pages-order-gifts-gifts~pages-order-goods-detail-detail~pages~35ac490a"
                        ), a.e(
                            "pages-special-2022-2022~pages-special-2023-poster-poster"
                        ), a.e("pages-special-2022-2022")]).then(function () {
                            return e(a("c00c"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-unlockposter-index", (function (e) {
                    var n = {
                        component: a.e("pages-special-unlockposter-index").then(function () {
                            return e(a("2111"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-lottery-194905", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-special-2022-2022~pages-special-2023-poster-poster~pages-special-lottery-194905~pages-special-~32550d53"
                        ), a.e("pages-special-lottery-194905")]).then(function () {
                            return e(a("2d6b"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-checkIn-index", (function (e) {
                    var n = {
                        component: a.e("pages-special-checkIn-index").then(function () {
                            return e(a("6c03"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-wenda-index", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-special-2022-2022~pages-special-2023-poster-poster~pages-special-lottery-194905~pages-special-~32550d53"
                        ), a.e("pages-special-wenda-index")]).then(function () {
                            return e(a("3c34"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-wenda-command", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-special-2022-2022~pages-special-2023-poster-poster~pages-special-lottery-194905~pages-special-~32550d53"
                        ), a.e("pages-special-wenda-command")]).then(function () {
                            return e(a("7d27"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-2023-poster-poster", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-special-2022-2022~pages-special-2023-poster-poster~pages-special-lottery-194905~pages-special-~32550d53"
                        ), a.e(
                            "pages-special-2022-2022~pages-special-2023-poster-poster"
                        ), a.e("pages-special-2023-poster-poster")]).then(function () {
                            return e(a("1b9f"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-special-lottery-39", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-special-2022-2022~pages-special-2023-poster-poster~pages-special-lottery-194905~pages-special-~32550d53"
                        ), a.e("pages-special-lottery-39")]).then(function () {
                            return e(a("940f"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-site-site-site", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-activity-list-list~pages-goods-detail-detail~pages-index-index~pages-site-artist-artist~pages-~0fdc9a0e"
                        ), a.e(
                            "pages-site-artist-artist~pages-site-brand-brand~pages-site-site-site"
                        ), a.e("pages-site-site-site")]).then(function () {
                            return e(a("f7a3"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-site-artist-artist", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-activity-list-list~pages-goods-detail-detail~pages-index-index~pages-site-artist-artist~pages-~0fdc9a0e"
                        ), a.e(
                            "pages-site-artist-artist~pages-site-brand-brand~pages-site-site-site"
                        ), a.e("pages-site-artist-artist")]).then(function () {
                            return e(a("e2fb"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-site-brand-brand", (function (e) {
                    var n = {
                        component: Promise.all([a.e(
                            "pages-activity-list-list~pages-goods-detail-detail~pages-index-index~pages-site-artist-artist~pages-~0fdc9a0e"
                        ), a.e(
                            "pages-site-artist-artist~pages-site-brand-brand~pages-site-site-site"
                        ), a.e("pages-site-brand-brand")]).then(function () {
                            return e(a("fa77"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-site-license-license", (function (e) {
                    var n = {
                        component: a.e("pages-site-license-license").then(function () {
                            return e(a("699d"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-helpCenter-help-help", (function (e) {
                    var n = {
                        component: a.e("pages-helpCenter-help-help").then(function () {
                            return e(a("7357"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-helpCenter-aboutus-aboutus", (function (e) {
                    var n = {
                        component: a.e("pages-helpCenter-aboutus-aboutus").then(function () {
                            return e(a("221c"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-tool-map-map", (function (e) {
                    var n = {
                        component: a.e("pages-tool-map-map").then(function () {
                            return e(a("894e"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-tool-video-video", (function (e) {
                    var n = {
                        component: a.e("pages-tool-video-video").then(function () {
                            return e(a("7943"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-tool-webView-webView", (function (e) {
                    var n = {
                        component: a.e("pages-tool-webView-webView").then(function () {
                            return e(a("aaba"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-tool-ticketrules-ticketrules", (function (e) {
                    var n = {
                        component: a.e("pages-tool-ticketrules-ticketrules").then(function () {
                            return e(a("9c8f"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-tool-mvideo-mvideo", (function (e) {
                    var n = {
                        component: a.e("pages-tool-mvideo-mvideo").then(function () {
                            return e(a("d579"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-tool-bbs-bbs", (function (e) {
                    var n = {
                        component: a.e("pages-tool-bbs-bbs").then(function () {
                            return e(a("e26c"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-tool-visitcard-visitcard", (function (e) {
                    var n = {
                        component: a.e("pages-tool-visitcard-visitcard").then(function () {
                            return e(a("aa1d"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-tool-survey-survey", (function (e) {
                    var n = {
                        component: a.e("pages-tool-survey-survey").then(function () {
                            return e(a("b520"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-tool-videodetails-videodetails", (function (e) {
                    var n = {
                        component: a.e("pages-tool-videodetails-videodetails").then(function () {
                            return e(a("79018"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-live-theme-theme", (function (e) {
                    var n = {
                        component: a.e("pages-live-theme-theme").then(function () {
                            return e(a("5e75"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-live-room-room", (function (e) {
                    var n = {
                        component: a.e("pages-live-room-room").then(function () {
                            return e(a("8bc3"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-live-event-event", (function (e) {
                    var n = {
                        component: a.e("pages-live-event-event").then(function () {
                            return e(a("0c04"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-live-list-list", (function (e) {
                    var n = {
                        component: a.e("pages-live-list-list").then(function () {
                            return e(a("137a"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-invitation-index", (function (e) {
                    var n = {
                        component: a.e("pages-invitation-index").then(function () {
                            return e(a("a2d7"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-invitation-receive", (function (e) {
                    var n = {
                        component: a.e("pages-invitation-receive").then(function () {
                            return e(a("622e"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), t.default.component("pages-invitation-succeed", (function (e) {
                    var n = {
                        component: a.e("pages-invitation-succeed").then(function () {
                            return e(a("df62"))
                        }.bind(null, a)).catch(a.oe),
                        delay: __uniConfig["async"].delay,
                        timeout: __uniConfig["async"].timeout
                    };
                    return __uniConfig["async"]["loading"] && (n.loading = {
                        name: "SystemAsyncLoading",
                        render: function (e) {
                            return e(__uniConfig["async"]["loading"])
                        }
                    }), __uniConfig["async"]["error"] && (n.error = {
                        name: "SystemAsyncError",
                        render: function (e) {
                            return e(__uniConfig["async"]["error"])
                        }
                    }), n
                })), e.__uniRoutes = [{
                    path: "/",
                    alias: "/pages/index/index",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({
                                    isQuit: !0,
                                    isEntry: !0,
                                    isTabBar: !0,
                                    tabBarIndex: 0
                                }, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "秀动ShowStart",
                                    enablePullDownRefresh: !0
                                })
                            }, [e("pages-index-index", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        id: 1,
                        name: "pages-index-index",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/index/index",
                        isQuit: !0,
                        isEntry: !0,
                        isTabBar: !0,
                        tabBarIndex: 0,
                        windowTop: 0
                    }
                }, {
                    path: "/pages/ticketIndex/ticketIndex",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({
                                    isQuit: !0,
                                    isTabBar: !0,
                                    tabBarIndex: 1
                                }, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "秀动-票夹",
                                    enablePullDownRefresh: !0
                                })
                            }, [e("pages-ticketIndex-ticketIndex", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        id: 2,
                        name: "pages-ticketIndex-ticketIndex",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/ticketIndex/ticketIndex",
                        isQuit: !0,
                        isTabBar: !0,
                        tabBarIndex: 1,
                        windowTop: 0
                    }
                }, {
                    path: "/pages/myHome/myHome",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({
                                    isQuit: !0,
                                    isTabBar: !0,
                                    tabBarIndex: 4
                                }, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "我的"
                                })
                            }, [e("pages-myHome-myHome", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        id: 3,
                        name: "pages-myHome-myHome",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/myHome/myHome",
                        isQuit: !0,
                        isTabBar: !0,
                        tabBarIndex: 4,
                        windowTop: 0
                    }
                }, {
                    path: "/pages/city/city",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "城市列表"
                                })
                            }, [e("pages-city-city", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-city-city",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/city/city",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/goodsIndex/goodsIndex",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({
                                    isQuit: !0,
                                    isTabBar: !0,
                                    tabBarIndex: 2
                                }, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "秀动-周边",
                                    enablePullDownRefresh: !0
                                })
                            }, [e("pages-goodsIndex-goodsIndex", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        id: 4,
                        name: "pages-goodsIndex-goodsIndex",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/goodsIndex/goodsIndex",
                        isQuit: !0,
                        isTabBar: !0,
                        tabBarIndex: 2,
                        windowTop: 0
                    }
                }, {
                    path: "/pages/raiseIndex/raiseIndex",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({
                                    isQuit: !0,
                                    isTabBar: !0,
                                    tabBarIndex: 3
                                }, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "秀动-众筹",
                                    enablePullDownRefresh: !0
                                })
                            }, [e("pages-raiseIndex-raiseIndex", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        id: 5,
                        name: "pages-raiseIndex-raiseIndex",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/raiseIndex/raiseIndex",
                        isQuit: !0,
                        isTabBar: !0,
                        tabBarIndex: 3,
                        windowTop: 0
                    }
                }, {
                    path: "/pages/video/channel/channel",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "视频频道页"
                                })
                            }, [e("pages-video-channel-channel", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-video-channel-channel",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/video/channel/channel",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/videoissue/videoissue",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "秀动特刊"
                                })
                            }, [e("pages-videoissue-videoissue", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-videoissue-videoissue",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/videoissue/videoissue",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/404",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "404",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-404", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-404",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/404",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/apptest/apptest",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "测试！测试！",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-apptest-apptest", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-apptest-apptest",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/apptest/apptest",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/command/activity",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "演出口令",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-command-activity", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-command-activity",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/command/activity",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/test",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "APItest",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-test", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-test",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/test",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/passport/login/login",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "登录"
                                })
                            }, [e("pages-passport-login-login", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-passport-login-login",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/passport/login/login",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/passport/permit/permit",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "通行证"
                                })
                            }, [e("pages-passport-permit-permit", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-passport-permit-permit",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/passport/permit/permit",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/passport/close/close",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "秀动账号注销"
                                })
                            }, [e("pages-passport-close-close", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-passport-close-close",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/passport/close/close",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/tickets/tickets",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "票品详情",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-tickets-tickets", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-tickets-tickets",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/tickets/tickets",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/videoissue/videoissue",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "秀动特刊"
                                })
                            }, [e("pages-videoissue-videoissue", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-videoissue-videoissue",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/videoissue/videoissue",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/activity/list/list",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "演出列表"
                                })
                            }, [e("pages-activity-list-list", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-activity-list-list",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/activity/list/list",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/activity/detail/detail",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "演出详情"
                                })
                            }, [e("pages-activity-detail-detail", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-activity-detail-detail",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/activity/detail/detail",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/activity/search/search",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "搜索"
                                })
                            }, [e("pages-activity-search-search", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-activity-search-search",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/activity/search/search",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/activity/livehouse/livehouse",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "现场扫码购票"
                                })
                            }, [e("pages-activity-livehouse-livehouse", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-activity-livehouse-livehouse",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/activity/livehouse/livehouse",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/activity/seat/seat",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "选择座位",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-activity-seat-seat", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-activity-seat-seat",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/activity/seat/seat",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/activity/userClaim/userClaim",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "证照信息",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-activity-userClaim-userClaim", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-activity-userClaim-userClaim",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/activity/userClaim/userClaim",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/raise/list/list",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "众筹列表"
                                })
                            }, [e("pages-raise-list-list", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-raise-list-list",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/raise/list/list",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/raise/detail/detail",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "众筹详情"
                                })
                            }, [e("pages-raise-detail-detail", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-raise-detail-detail",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/raise/detail/detail",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/raise/ticket/ticket",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "项目列表"
                                })
                            }, [e("pages-raise-ticket-ticket", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-raise-ticket-ticket",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/raise/ticket/ticket",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/goods/theme/theme",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "周边专题详情"
                                })
                            }, [e("pages-goods-theme-theme", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-goods-theme-theme",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/goods/theme/theme",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/goods/detail/detail",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "周边商品详情"
                                })
                            }, [e("pages-goods-detail-detail", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-goods-detail-detail",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/goods/detail/detail",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/goods/list/list",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "周边商品列表"
                                })
                            }, [e("pages-goods-list-list", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-goods-list-list",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/goods/list/list",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/gifts/gifts",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "赠品"
                                })
                            }, [e("pages-order-gifts-gifts", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-gifts-gifts",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/gifts/gifts",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/activity/list/list",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "演出订单-列表",
                                    enablePullDownRefresh: !0
                                })
                            }, [e("pages-order-activity-list-list", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-activity-list-list",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/activity/list/list",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/activity/detail/detail",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "演出订单-详情"
                                })
                            }, [e("pages-order-activity-detail-detail", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-activity-detail-detail",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/activity/detail/detail",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/activity/confirm/confirm",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "演出订单确认"
                                })
                            }, [e("pages-order-activity-confirm-confirm", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-activity-confirm-confirm",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/activity/confirm/confirm",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/raise/confirm/confirm",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "众筹订单确认"
                                })
                            }, [e("pages-order-raise-confirm-confirm", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-raise-confirm-confirm",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/raise/confirm/confirm",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/goods/confirm/confirm",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "周边商品订单确认"
                                })
                            }, [e("pages-order-goods-confirm-confirm", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-goods-confirm-confirm",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/goods/confirm/confirm",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/wxpay/wxpay",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "微信支付"
                                })
                            }, [e("pages-order-wxpay-wxpay", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-wxpay-wxpay",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/wxpay/wxpay",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/payFailed/payFailed",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "支付失败"
                                })
                            }, [e("pages-order-payFailed-payFailed", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-payFailed-payFailed",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/payFailed/payFailed",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/paySuccess/paySuccess",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "支付成功"
                                })
                            }, [e("pages-order-paySuccess-paySuccess", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-paySuccess-paySuccess",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/paySuccess/paySuccess",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/raise/list/list",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "众筹订单列表",
                                    enablePullDownRefresh: !0
                                })
                            }, [e("pages-order-raise-list-list", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-raise-list-list",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/raise/list/list",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/raise/detail/detail",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "众筹订单详情"
                                })
                            }, [e("pages-order-raise-detail-detail", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-raise-detail-detail",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/raise/detail/detail",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/goods/list/list",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "周边商品订单列表",
                                    enablePullDownRefresh: !0
                                })
                            }, [e("pages-order-goods-list-list", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-goods-list-list",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/goods/list/list",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/goods/detail/detail",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "周边商品订单详情"
                                })
                            }, [e("pages-order-goods-detail-detail", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-goods-detail-detail",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/goods/detail/detail",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/activity/codeInfo/codeInfo",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "演出电子票二维码"
                                })
                            }, [e("pages-order-activity-codeInfo-codeInfo", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-activity-codeInfo-codeInfo",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/activity/codeInfo/codeInfo",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/refund/refund",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "演出变更详情"
                                })
                            }, [e("pages-order-refund-refund", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-refund-refund",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/refund/refund",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/refundv1/refund",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "演出变更详情"
                                })
                            }, [e("pages-order-refundv1-refund", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-refundv1-refund",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/refundv1/refund",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/refundcheck/refundcheck",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "退票确认"
                                })
                            }, [e("pages-order-refundcheck-refundcheck", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-refundcheck-refundcheck",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/refundcheck/refundcheck",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/refundSuccess/refundSuccess",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "退票成功"
                                })
                            }, [e("pages-order-refundSuccess-refundSuccess", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-refundSuccess-refundSuccess",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/refundSuccess/refundSuccess",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/order/payResult/payResult",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "支付结果"
                                })
                            }, [e("pages-order-payResult-payResult", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-order-payResult-payResult",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/order/payResult/payResult",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/coupon/list/list",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "我的优惠券"
                                })
                            }, [e("pages-coupon-list-list", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-coupon-list-list",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/coupon/list/list",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/coupon/receive/receive",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "领取优惠券"
                                })
                            }, [e("pages-coupon-receive-receive", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-coupon-receive-receive",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/coupon/receive/receive",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/coupon/goods/goods-list/goods-list",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "优惠券-商品列表"
                                })
                            }, [e("pages-coupon-goods-goods-list-goods-list", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-coupon-goods-goods-list-goods-list",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/coupon/goods/goods-list/goods-list",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/user/address/list/list",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "地址管理"
                                })
                            }, [e("pages-user-address-list-list", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-user-address-list-list",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/user/address/list/list",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/user/address/edit/edit",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "地址管理"
                                })
                            }, [e("pages-user-address-edit-edit", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-user-address-edit-edit",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/user/address/edit/edit",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/user/viewer/list/list",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "观演人"
                                })
                            }, [e("pages-user-viewer-list-list", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-user-viewer-list-list",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/user/viewer/list/list",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/user/viewer/edit/edit",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "观演人"
                                })
                            }, [e("pages-user-viewer-edit-edit", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-user-viewer-edit-edit",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/user/viewer/edit/edit",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/user/identity/list/list",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "实名认证中心"
                                })
                            }, [e("pages-user-identity-list-list", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-user-identity-list-list",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/user/identity/list/list",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/user/identity/identapp/index",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "实名认证服务"
                                })
                            }, [e("pages-user-identity-identapp-index", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-user-identity-identapp-index",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/user/identity/identapp/index",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/user/code/code",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "我的二维码",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-user-code-code", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-user-code-code",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/user/code/code",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/user/aut/step1",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "实人认证服务",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-user-aut-step1", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-user-aut-step1",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/user/aut/step1",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/user/aut/step2",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "实人认证",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-user-aut-step2", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-user-aut-step2",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/user/aut/step2",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/user/aut/fail",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "授权失败",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-user-aut-fail", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-user-aut-fail",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/user/aut/fail",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/user/creditLevel/creditLevel",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "信用等级",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-user-creditLevel-creditLevel", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-user-creditLevel-creditLevel",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/user/creditLevel/creditLevel",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/join/join",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "入驻秀动"
                                })
                            }, [e("pages-special-join-join", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-join-join",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/join/join",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/share/list/list",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "秀动活动列表"
                                })
                            }, [e("pages-special-share-list-list", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-share-list-list",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/share/list/list",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/showdesk/showdesk",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "秀桌面赢福利"
                                })
                            }, [e("pages-special-showdesk-showdesk", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-showdesk-showdesk",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/showdesk/showdesk",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/share/detail/detail",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "分享活动"
                                })
                            }, [e("pages-special-share-detail-detail", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-share-detail-detail",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/share/detail/detail",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/share/article/article",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "分享文章"
                                })
                            }, [e("pages-special-share-article-article", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-share-article-article",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/share/article/article",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/share/brand/brand",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "排行榜"
                                })
                            }, [e("pages-special-share-brand-brand", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-share-brand-brand",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/share/brand/brand",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/share/join/join",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "参加活动"
                                })
                            }, [e("pages-special-share-join-join", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-share-join-join",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/share/join/join",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/citytvpage/citytvpage",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "城市电视屏"
                                })
                            }, [e("pages-special-citytvpage-citytvpage", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-citytvpage-citytvpage",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/citytvpage/citytvpage",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/sitetvpage/sitetvpage",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({
                                    isQuit: !0,
                                    isTabBar: !0,
                                    tabBarIndex: 5
                                }, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "场地电视屏"
                                })
                            }, [e("pages-special-sitetvpage-sitetvpage", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        id: 6,
                        name: "pages-special-sitetvpage-sitetvpage",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/sitetvpage/sitetvpage",
                        isQuit: !0,
                        isTabBar: !0,
                        tabBarIndex: 5,
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/showfun/showfun",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "关于SHOWFUN"
                                })
                            }, [e("pages-special-showfun-showfun", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-showfun-showfun",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/showfun/showfun",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/indiestar/apply/apply",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "Indie Star计划"
                                })
                            }, [e("pages-special-indiestar-apply-apply", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-indiestar-apply-apply",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/indiestar/apply/apply",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/indiestar/vote/vote",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "Indie Star投票",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-indiestar-vote-vote", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-indiestar-vote-vote",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/indiestar/vote/vote",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/indiestar/vote2/vote2",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "Indie Star投票",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-indiestar-vote2-vote2", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-indiestar-vote2-vote2",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/indiestar/vote2/vote2",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/getTicket/getTicket",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "兑换演出票",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-getTicket-getTicket", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-getTicket-getTicket",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/getTicket/getTicket",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/guide/guide",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "新手指南"
                                })
                            }, [e("pages-special-guide-guide", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-guide-guide",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/guide/guide",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/lpa/index/index",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "第五届LPA投票",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-lpa-index-index", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-lpa-index-index",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/lpa/index/index",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/lpa/vote/vote",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "第五届LPA投票",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-lpa-vote-vote", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-lpa-vote-vote",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/lpa/vote/vote",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/expand/index",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "膨胀吧，红包",
                                    enablePullDownRefresh: !0
                                })
                            }, [e("pages-special-expand-index", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-expand-index",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/expand/index",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/expand/command",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "为好友助力",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-expand-command", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-expand-command",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/expand/command",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/fineband/fineband",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-fineband-fineband", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-fineband-fineband",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/fineband/fineband",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/summerband/summerband",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-summerband-summerband", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-summerband-summerband",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/summerband/summerband",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/fy/fy",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "疫情防控健康承诺书",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-fy-fy", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-fy-fy",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/fy/fy",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/purchase/index",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "申购",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-purchase-index", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-purchase-index",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/purchase/index",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/purchase/goods",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "申购商品",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-purchase-goods", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-purchase-goods",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/purchase/goods",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/nft/exchange",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "权益兑换",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-nft-exchange", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-nft-exchange",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/nft/exchange",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/nft/owner",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "NFT拥有者",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-nft-owner", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-nft-owner",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/nft/owner",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/redeem",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "兑换码兑换",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-redeem", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-redeem",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/redeem",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/2022/2022",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "2022秀动观演报告",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-2022-2022", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-2022-2022",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/2022/2022",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/unlockposter/index",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "解锁演出阵容",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-unlockposter-index", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-unlockposter-index",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/unlockposter/index",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/lottery/194905",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "抽奖活动",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-lottery-194905", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-lottery-194905",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/lottery/194905",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/checkIn/index",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "现场打卡",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-checkIn-index", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-checkIn-index",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/checkIn/index",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/wenda/index",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "有奖问答",
                                    enablePullDownRefresh: !0
                                })
                            }, [e("pages-special-wenda-index", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-wenda-index",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/wenda/index",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/wenda/command",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "为好友助力",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-wenda-command", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-wenda-command",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/wenda/command",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/2023/poster/poster",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "2023秀动年度观演海报",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-2023-poster-poster", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-2023-poster-poster",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/2023/poster/poster",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/special/lottery/39",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "抽奖",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-special-lottery-39", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-special-lottery-39",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/special/lottery/39",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/site/site/site",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "场地小站"
                                })
                            }, [e("pages-site-site-site", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-site-site-site",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/site/site/site",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/site/artist/artist",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "艺人小站"
                                })
                            }, [e("pages-site-artist-artist", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-site-artist-artist",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/site/artist/artist",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/site/brand/brand",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "厂牌小站"
                                })
                            }, [e("pages-site-brand-brand", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-site-brand-brand",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/site/brand/brand",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/site/license/license",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "资质许可"
                                })
                            }, [e("pages-site-license-license", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-site-license-license",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/site/license/license",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/helpCenter/help/help",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "帮助中心"
                                })
                            }, [e("pages-helpCenter-help-help", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-helpCenter-help-help",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/helpCenter/help/help",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/helpCenter/aboutus/aboutus",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "关于我们"
                                })
                            }, [e("pages-helpCenter-aboutus-aboutus", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-helpCenter-aboutus-aboutus",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/helpCenter/aboutus/aboutus",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/tool/map/map",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "地图导航"
                                })
                            }, [e("pages-tool-map-map", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-tool-map-map",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/tool/map/map",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/tool/video/video",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "视频播放"
                                })
                            }, [e("pages-tool-video-video", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-tool-video-video",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/tool/video/video",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/tool/webView/webView",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {})
                            }, [e("pages-tool-webView-webView", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-tool-webView-webView",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/tool/webView/webView",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/tool/ticketrules/ticketrules",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "限购规则"
                                })
                            }, [e("pages-tool-ticketrules-ticketrules", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-tool-ticketrules-ticketrules",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/tool/ticketrules/ticketrules",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/tool/mvideo/mvideo",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "视频"
                                })
                            }, [e("pages-tool-mvideo-mvideo", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-tool-mvideo-mvideo",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/tool/mvideo/mvideo",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/tool/bbs/bbs",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "帖子详情"
                                })
                            }, [e("pages-tool-bbs-bbs", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-tool-bbs-bbs",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/tool/bbs/bbs",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/tool/visitcard/visitcard",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "名片"
                                })
                            }, [e("pages-tool-visitcard-visitcard", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-tool-visitcard-visitcard",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/tool/visitcard/visitcard",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/tool/survey/survey",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "问卷调查"
                                })
                            }, [e("pages-tool-survey-survey", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-tool-survey-survey",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/tool/survey/survey",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/tool/videodetails/videodetails",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "视频详情"
                                })
                            }, [e("pages-tool-videodetails-videodetails", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-tool-videodetails-videodetails",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/tool/videodetails/videodetails",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/live/theme/theme",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "直播主题"
                                })
                            }, [e("pages-live-theme-theme", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-live-theme-theme",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/live/theme/theme",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/live/room/room",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "直播房间"
                                })
                            }, [e("pages-live-room-room", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-live-room-room",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/live/room/room",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/live/event/event",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "直播事件"
                                })
                            }, [e("pages-live-event-event", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-live-event-event",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/live/event/event",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/live/list/list",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "秀动直播"
                                })
                            }, [e("pages-live-list-list", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-live-list-list",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/live/list/list",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/invitation/index",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "邀请函",
                                    navigationStyle: "custom",
                                    backgroundColor: "#000000",
                                    backgroundColorTop: "#000000",
                                    backgroundColorBottom: "#000000",
                                    navigationBarBackgroundColor: "#000000"
                                })
                            }, [e("pages-invitation-index", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-invitation-index",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/invitation/index",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/invitation/receive",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "领取赠票",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-invitation-receive", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-invitation-receive",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/invitation/receive",
                        windowTop: 0
                    }
                }, {
                    path: "/pages/invitation/succeed",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: Object.assign({}, __uniConfig.globalStyle, {
                                    navigationBarTitleText: "赠票领取成功",
                                    enablePullDownRefresh: !1
                                })
                            }, [e("pages-invitation-succeed", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "pages-invitation-succeed",
                        isNVue: !1,
                        maxWidth: 0,
                        pagePath: "pages/invitation/succeed",
                        windowTop: 0
                    }
                }, {
                    path: "/choose-location",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: {
                                    navigationStyle: "custom"
                                }
                            }, [e("system-choose-location", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "choose-location",
                        pagePath: "/choose-location"
                    }
                }, {
                    path: "/open-location",
                    component: {
                        render: function (e) {
                            return e("Page", {
                                props: {
                                    navigationStyle: "custom"
                                }
                            }, [e("system-open-location", {
                                slot: "page"
                            })])
                        }
                    },
                    meta: {
                        name: "open-location",
                        pagePath: "/open-location"
                    }
                }], e.UniApp && new e.UniApp
        }).call(this, a("c8ba"))
    },
    "2aa2": function (e, n, a) {
        "use strict";
        a.d(n, "b", (function () {
            return t
        })), a.d(n, "c", (function () {
            return i
        })), a.d(n, "a", (function () {}));
        var t = function () {
                var e = this.$createElement,
                    n = this._self._c || e;
                return n("App", {
                    attrs: {
                        keepAliveInclude: this.keepAliveInclude
                    }
                })
            },
            i = []
    },
    "2c47": function (e, n, a) {
        "use strict";
        var t = a("368e"),
            i = a.n(t);
        i.a
    },
    "2d15": function (e, n, a) {
        "use strict";
        a("7a82");
        var t = a("4ea4").default;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, a("d3b7"), a("ac1f"), a("00b4");
        var i = t(a("5530")),
            o = t(a("d4ec")),
            r = t(a("bee2")),
            s = t(a("ade3")),
            c = function () {
                function e() {
                    (0, o.default)(this, e), (0, s.default)(this, "config", {
                        baseUrl: "",
                        header: {
                            "Content-Type": "application/json;charset=UTF-8"
                        },
                        method: "POST",
                        dataType: "json",
                        responseType: "text",
                        success: function () {},
                        fail: function () {},
                        complete: function () {}
                    }), (0, s.default)(this, "interceptor", {
                        request: function (n) {
                            n && (e.requestBeforeFun = n)
                        },
                        response: function (n) {
                            n && (e.requestComFun = n)
                        }
                    })
                }
                return (0, r.default)(e, [{
                    key: "setConfig",
                    value: function (e) {
                        this.config = e(this.config)
                    }
                }, {
                    key: "request",
                    value: function () {
                        var n = this,
                            a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] :
                            {};
                        a.baseUrl = a.baseUrl || this.config.baseUrl, a.dataType = a.dataType ||
                            this.config.dataType, a.url = e.posUrl(a.url) ? a.url : a.baseUrl +
                            a.url, a.data = a.data || {}, a.header = a.header || this.config.header,
                            a.method = a.method || this.config.method;
                        var t = a.complete || this.config.complete;
                        return new Promise((function (o, r) {
                            var s = !0,
                                c = null;
                            a.complete = function (n) {
                                var a = n.statusCode;
                                n.config = c, n = e.requestComFun(n), t(), 200 ===
                                    a ? o(n) : r(n || null)
                            };
                            var u = (0, i.default)((0, i.default)((0, i.default)({},
                                n.config), a), {}, {
                                success: function (e) {
                                    1 == e.data.state && a.success && a
                                        .success(e)
                                }
                            });
                            c = (0, i.default)((0, i.default)({}, u), e.requestBeforeFun(
                                u, (function () {
                                    var e = arguments.length > 0 &&
                                        void 0 !== arguments[0] ?
                                        arguments[0] : "handle cancel",
                                        n = {
                                            errMsg: e,
                                            config: u
                                        };
                                    r(n), s = !1
                                }))), s && uni.request(c)
                        }))
                    }
                }, {
                    key: "get",
                    value: function (e, n) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] :
                            {};
                        return a.url = e, a.data = n, a.method = "GET", this.request(a)
                    }
                }, {
                    key: "post",
                    value: function (e, n) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] :
                            {};
                        return a.url = e, a.data = n, a.method = "POST", this.request(a)
                    }
                }], [{
                    key: "posUrl",
                    value: function (e) {
                        return /(http|https):\/\/([\w.]+\/?)\S*/.test(e)
                    }
                }, {
                    key: "requestBeforeFun",
                    value: function (e) {
                        return e
                    }
                }, {
                    key: "requestComFun",
                    value: function (e) {
                        return e
                    }
                }]), e
            }();
        n.default = c
    },
    3: function (e, n) {},
    "34d5": function (e, n, a) {
        "use strict";
        var t = a("0cf5"),
            i = a.n(t);
        i.a
    },
    "354e": function (e, n, a) {
        var t = a("24fb");
        n = t(!1), n.push([e.i,
            '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.app-download-bar[data-v-32e239d2]{padding:%?24?% %?40?%;border-bottom:%?1?% #ebebeb solid;display:flex;align-items:center;justify-content:space-between;background:#fff}.app-download-bar .ll[data-v-32e239d2]{display:flex;align-items:center}.app-download-bar .logo[data-v-32e239d2]{vertical-align:middle;width:%?172?%;height:%?65?%}.app-download-bar .text[data-v-32e239d2]{vertical-align:middle;font-size:%?28?%;color:#999}.app-download-bar .btn[data-v-32e239d2]{height:%?65?%;line-height:%?65?%;font-size:%?28?%;color:#fff;padding:0 %?30?%;background:#eb484a;border-radius:%?80?%}',
            ""]), e.exports = n
    },
    "368e": function (e, n, a) {
        var t = a("354e");
        t.__esModule && (t = t.default), "string" === typeof t && (t = [[e.i, t, ""]]), t.locals && (e.exports =
            t.locals);
        var i = a("4f06").default;
        i("318f35a4", t, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    4: function (e, n) {},
    4471: function (e, n, a) {
        "use strict";
        a.d(n, "b", (function () {
            return t
        })), a.d(n, "c", (function () {
            return i
        })), a.d(n, "a", (function () {}));
        var t = function () {
                var e = this,
                    n = e.$createElement,
                    a = e._self._c || n;
                return a("v-uni-view", {
                    staticClass: "app-download-bar"
                }, [e.$callApp.isInWeb ? [a("v-uni-view", {
                    staticClass: "ll"
                }, [a("v-uni-image", {
                    staticClass: "logo",
                    attrs: {
                        src: e.logo,
                        mode: "aspectFit"
                    }
                })], 1), a("v-uni-view", {
                    directives: [{
                        name: "clickDown",
                        rawName: "v-clickDown"
                    }],
                    ref: "openApp",
                    staticClass: "btn",
                    attrs: {
                        id: "openApp"
                    },
                    on: {
                        click: function (n) {
                            arguments[0] = n = e.$handleEvent(n), e.openApp()
                        }
                    }
                }, [e._v("打开APP")])] : e._e()], 2)
            },
            i = []
    },
    "558e": function (e, n, a) {
        e.exports = a.p + "static/img/showstartlogo.0d4f7d47.png"
    },
    "5c13": function (e, n, a) {
        "use strict";
        (function (e) {
            a("7a82");
            var t = a("4ea4").default;
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = t(a("5530")),
                o = t(a("3835"));
            a("e25e"), a("d81d"), a("d401"), a("d3b7"), a("25f0"), a("acd8"), a("ac1f"), a("1276"), a(
                "caad"), a("2532"), a("b64b"), a("159b"), a("e9c4"), a("5319"), a("fb6a"), a("14d9"), a(
                "00b4"), a("4d63"), a("c607"), a("2c3e"), a("466d"), a("c975"), a("a9e3");
            var r = a("6b33"),
                s = t(a("c79c")),
                c = t(a("0d7e")),
                u = t(a("998d")),
                d = t(a("d7e1")),
                l = t(a("eda9")),
                p = a("9fc8"),
                g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            g = p.indexCharset(g);
            var f = {
                    UNITS: {
                        "年": 315576e5,
                        "月": 26298e5,
                        "天": 864e5,
                        "小时": 36e5,
                        "分钟": 6e4,
                        "秒": 1e3
                    },
                    humanize: function (e) {
                        var n = "";
                        for (var a in this.UNITS)
                            if (e >= this.UNITS[a]) {
                                n = Math.floor(e / this.UNITS[a]) + a + "前";
                                break
                            } return n || "刚刚"
                    },
                    format: function (e) {
                        var n = this.parse(e),
                            a = Date.now() - n.getTime();
                        if (a < this.UNITS["天"]) return this.humanize(a);
                        var t = function (e) {
                            return e < 10 ? "0" + e : e
                        };
                        return n.getFullYear() + "/" + t(n.getMonth() + 1) + "/" + t(n.getDay()) + "-" +
                            t(n.getHours()) + ":" + t(n.getMinutes())
                    },
                    parse: function (e) {
                        var n = e.split(/[^0-9]/);
                        return new Date(n[0], n[1] - 1, n[2], n[3], n[4], n[5])
                    }
                },
                m = function (e, n) {
                    var a = e.includes("?") ? e + "&" : e + "?",
                        t = Object.keys(n);
                    return t.forEach((function (e) {
                        a += e + "=" + encodeURIComponent(n[e]) + "&"
                    })), a = a.substring(0, a.length - 1), encodeURIComponent(a)
                },
                y = function (e) {
                    c.default.isInShowstart() ? c.default.appLoginInfo((function () {
                        _(e)
                    })) : _(e)
                },
                _ = function (e) {
                    var n = C("5.2.5"),
                        a = navigator.userAgent;
                    if (!c.default.isInShowstart() || c.default.isInShowstart() && 1 == n && a.includes(
                            "gateway_v3")) l.default.request(e);
                    else {
                        var t = JSON.parse(JSON.stringify(e.data || {})),
                            i = e || {};
                        i.url = i.url || "", i.data = i.data || {}, i.data.st_flpv = i.data.st_flpv ? i.data
                            .st_flpv : s.default.state && s.default.state.st_flpv, i.data.sign = i.data.sign ||
                            "" == i.data.sign ? i.data.sign : uni.getStorageSync("sign");
                        var f = (new Date).getTime(),
                            m = uni.getStorageSync("trackPath").time || 0,
                            y = Math.floor((f - m) / 1e3 / 60 / 60),
                            _ = y <= .5 && uni.getStorageSync("trackPath") && uni.getStorageSync(
                                "trackPath").value ? uni.getStorageSync("trackPath").value : "";
                        i.data.trackPath = i.data.trackPath || "" == i.data.trackPath ? i.data.trackPath :
                            _, i.method = i.method || "GET", i.header = {
                                "Content-Type": "application/json"
                            }, i.header.st_flpv = i.data.st_flpv, i.header.sign = i.data.sign, i.header.terminal =
                            i.data.terminal = "wap", i.success = i.success || function () {}, i.fail = i.fail ||
                            function () {}, i.complete = i.complete || function () {};
                        var b = (new Date).getTime(),
                            w = i.url.split("?")[0];
                        i.header.r = b, i.header.s = (0, u.default)(b + w + i.data.st_flpv +
                            "xVgXtOUSos6jzR3mqb4aLHYybqqPFFGfx12r").toLowerCase();
                        var S = uni.getStorageSync("token") || (0, u.default)(v(32)).toLowerCase();
                        uni.getStorageSync("token") || uni.setStorage({
                            key: "token",
                            data: S
                        });
                        var x = "none";
                        uni.getNetworkType({
                                success: function (e) {
                                    x = e.networkType
                                }
                            }), i.header.CUSUT = i.data.sign, i.header.CUUSERREF = S, i.header.CUSYSTIME =
                            (new Date).getTime(), i.header.CTRACKPATH = i.data.trackPath, i.header.CSOURCEPATH =
                            i.data.trackReferer || "", i.header.CNETWORK = x.toUpperCase();
                        var T = i.paramsType || "query",
                            P = i.apiSource || "hw",
                            k = {
                                action: i.url.replace(".json", ""),
                                method: i.method,
                                query: "query" == T ? i.data : null,
                                body: "body" == T ? i.data : null,
                                qtime: (new Date).getTime(),
                                ranstr: v(8)
                            },
                            A = JSON.stringify(k) + "",
                            I = (0, u.default)(A).toLowerCase();
                        k = d.default.encrypt(JSON.stringify(k)), i.data = {
                            data: k,
                            sign: I,
                            appid: "wap",
                            terminal: i.data.terminal || "wap",
                            version: "997"
                        };
                        var E = ("00" + p.encode(i.apiId, g)).slice(-2),
                            O = ("0000" + p.encode(i.eventId, g)).slice(-4),
                            B = s.default.state.userInfo && s.default.state.userInfo.userId || uni.getStorageSync(
                                "userInfo").userId || "",
                            N = ("000000" + p.encode(B, g)).slice(-6),
                            R = E + O + N;
                        uni.request({
                            url: r.ApiUrl + "/" + P + "/" + R,
                            data: i.data,
                            method: "POST",
                            header: i.header,
                            dataType: "json"
                        }).then((function (e) {
                            var n = (0, o.default)(e, 2),
                                a = n[0],
                                r = n[1];
                            if (a) uni.showToast({
                                title: "网络错误或请求失败",
                                icon: "none"
                            });
                            else if (i.complete(r), r.statusCode >= 440 && r.statusCode <= 459)
                                uni.showToast({
                                    title: "访问的过于频繁了请慢一些(".concat(r.statusCode, ")"),
                                    icon: "none"
                                });
                            else if (500 == r.statusCode || 502 == r.statusCode) uni.showToast({
                                title: "前方太拥挤，请稍后再试(".concat(r.statusCode, ")"),
                                icon: "none"
                            });
                            else if (599 == r.statusCode) uni.showToast({
                                title: "您的访问存在异常，我们已经记录，请稍后重新尝试(".concat(r.statusCode,
                                    ")"),
                                icon: "none"
                            });
                            else {
                                var s = r.data,
                                    u = s.state,
                                    d = s.msg,
                                    l = s.message,
                                    p = getCurrentPages();
                                ["secret.key.empty", "token.empty", "USER_NOT_LOGIN_DEFAULT",
                                    "login.other.terminal"].includes(u) ? (c.default.isInShowstart() &&
                                    c.default.appLogout(), "/pages/passport/login/login" !=
                                    p[p.length - 1].route && h(t, "redirectTo")) : i.url.includes(
                                    "accesslog") || u && 1 == u ? i.success(r) : (uni.showToast({
                                    title: d || l || "请求错误",
                                    icon: "none"
                                }), i.fail && i.fail(r))
                            }
                        }))
                    }
                },
                h = function (e, n) {
                    if (!getApp().globalData.toLogin) {
                        getApp().globalData.toLogin = !0;
                        var a = getCurrentPages(),
                            t = a.length > 0 ? a[a.length - 1].route : "";
                        t = e ? m(t, e) : t;
                        var o = a[a.length - 1].$page.fullPath ? encodeURIComponent(a[a.length - 1].$page.fullPath) :
                            "";
                        o.includes("webview") && (o = encodeURIComponent(window.location.href));
                        var r = "/pages/passport/login/login?redirect=" + o;
                        c.default.isInShowstart() ? c.default.appLogin((0, i.default)({}, e), (function (e) {
                            e.userInfo && e.userInfo.sign && window.location.reload()
                        })) : function () {
                            n && "redirectTo" == n ? uni.redirectTo({
                                url: r
                            }) : uni.navigateTo({
                                url: r
                            })
                        }()
                    }
                },
                v = function (e) {
                    for (var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" + (new Date)
                            .getTime(), a = e || 20, t = [], i = 0; i < a; i++) t.push(n.charAt(Math.floor(
                        Math.random() * n.length)));
                    return t.join("")
                };
            function b(e) {
                y({
                    url: "/wap/common/info.json",
                    data: {},
                    success: function (n) {
                        var a = n.data,
                            t = a.state,
                            i = a.result;
                        a.msg;
                        1 == t && (s.default.commit("setInfo", i), e && e.callback && e.callback(
                            i))
                    }
                })
            }
            function C(e) {
                if (c.default.isInShowstart()) {
                    var n = c.default.getAppVersion(),
                        a = n.split("."),
                        t = a.length > 0 ? parseInt(a[0]) : 0,
                        i = a.length > 1 ? parseInt(a[1]) : 0,
                        o = a.length > 2 ? parseInt(a[2]) : 0,
                        r = e.split("."),
                        s = r.length > 0 ? parseInt(r[0]) : 0,
                        u = r.length > 1 ? parseInt(r[1]) : 0,
                        d = r.length > 2 ? parseInt(r[2]) : 0;
                    return t == s && i == u && o == d ? 0 : t < s ? -1 : t > s ? 1 : i < u ? -1 : i > u ? 1 :
                        o < d ? -1 : o > d ? 1 : 0
                }
                return 1
            }
            var w = {
                formatTime: function (e) {
                    if ("number" !== typeof e || e < 0) return e;
                    var n = parseInt(e / 3600);
                    e %= 3600;
                    var a = parseInt(e / 60);
                    e %= 60;
                    var t = e;
                    return [n, a, t].map((function (e) {
                        return e = e.toString(), e[1] ? e : "0" + e
                    })).join(":")
                },
                formatLocation: function (e, n) {
                    return "string" === typeof e && "string" === typeof n && (e = parseFloat(e), n =
                        parseFloat(n)), e = e.toFixed(2), n = n.toFixed(2), {
                        longitude: e.toString().split("."),
                        latitude: n.toString().split(".")
                    }
                },
                dateUtils: f,
                ajax: y,
                uuid: v,
                formatDate: function (e, n) {
                    var a = e && e.toString().includes("-") ? e.replace(/-/g, "/") : e,
                        t = new Date(a);
                    "undefined" !== typeof n && null !== n || (n = "yyyy-MM-dd");
                    var i = {
                        "M+": t.getMonth() + 1,
                        "d+": t.getDate(),
                        "H+": t.getHours(),
                        "m+": t.getMinutes(),
                        "s+": t.getSeconds()
                    };
                    if (/(y+)/.test(n)) {
                        var o = String(t.getFullYear());
                        n = n.replace(RegExp.$1, o.substr(4 - RegExp.$1.length))
                    }
                    for (var r in i)
                        if (new RegExp("(" + r + ")").test(n)) {
                            var s = 1 === RegExp.$1.length ? i[r] : ("00" + i[r]).substr(String(i[r])
                                .length);
                            n = n.replace(RegExp.$1, s)
                        } return n
                },
                objArgs: m,
                service: function () {
                    var e = s.default.state.info.serviceTelephone || "";
                    e && "" != e ? uni.makePhoneCall({
                        phoneNumber: e
                    }) : b({
                        callback: function (e) {
                            uni.makePhoneCall({
                                phoneNumber: e.serviceTelephone
                            })
                        }
                    })
                },
                getInfo: b,
                formatPrice: function (e) {
                    var n = e;
                    if (n.match(RegExp(/起/))) {
                        n = n.split("起")[0] +
                            '<label class="price-mini-icon" style="font-size:11px;">起</label>'
                    }
                    return n
                },
                coverImg: function (e, n, a) {
                    var t = n || "",
                        i = a || "";
                    return e ? e.split("?")[0] + "?imageMogr2/thumbnail/!" + t + "x" + i +
                        "r/gravity/Center/crop/!" + t + "x" + i : null
                },
                HtmlEncode: function (e) {
                    var n = document.createElement("div");
                    null != n.textContent ? n.textContent = e : n.innerText = e;
                    var a = n.innerHTML;
                    return n = null, a
                },
                HtmlDecode: function (e) {
                    var n = document.createElement("div");
                    n.innerHTML = e;
                    var a = n.innerText || n.textContent;
                    return n = null, a
                },
                loginAction: h,
                urlReset: function () {
                    var e = window.navigator.userAgent.toLowerCase(),
                        n = "micromessenger" == e.match(/MicroMessenger/i),
                        a = /iphone|ipad|ipod|ios/.test(e),
                        t = window.location.href;
                    if (a && n && t.indexOf("showstart=nb") <= -1) {
                        var i = t.indexOf("?") <= -1 ? "?" : "&";
                        i += "showstart=nb", t += i
                    }
                },
                accesslog: function (e) {
                    var n = getCurrentPages(),
                        a = e || {},
                        t = a.trackPath || a.ssfrom || n[n.length - 1].options.ssfrom;
                    t && s.default.commit("setTrackPath", t);
                    var i = r.h5Url;
                    i = window.location.href;
                    var o = uni.getStorageSync("cityId") || 0,
                        c = {
                            ref: decodeURIComponent(a.ref || i),
                            cityId: a.cityId || o,
                            latitude: a.latitude || "",
                            longitude: a.longitude || "",
                            o_s: a.o_s || "",
                            u_s: a.u_s || "",
                            trackReferer: a.trackReferer || "",
                            vTime: a.vTime || (new Date).getTime()
                        };
                    y({
                        url: "/wap/accesslog.json",
                        data: c,
                        method: "POST",
                        success: function (e) {
                            var n = e.data;
                            n.state, n.result, n.msg
                        }
                    })
                },
                mul: function (e, n) {
                    var a = 0,
                        t = e.toString(),
                        i = n.toString();
                    try {
                        a += t.split(".")[1].length
                    } catch (o) {}
                    try {
                        a += i.split(".")[1].length
                    } catch (o) {}
                    return Number(t.replace(".", "")) * Number(i.replace(".", "")) / Math.pow(10, a)
                },
                openMap: function (n) {
                    var a = function (e, n) {
                        var a = 52.35987755982988,
                            t = Number(n - .0065),
                            i = Number(e - .006),
                            o = Number(Math.sqrt(t * t + i * i) - 2e-5 * Math.sin(i * a)),
                            r = Number(Math.atan2(i, t) - 3e-6 * Math.cos(t * a));
                        return n = Number(o * Math.cos(r)), e = Number(o * Math.sin(r)), {
                            longitude: n,
                            latitude: e
                        }
                    }(n.latitude, n.longitude);
                    uni.openLocation({
                        latitude: a.latitude,
                        longitude: a.longitude,
                        address: n.address || "",
                        name: n.name || n.siteName || "",
                        success: function () {
                            e.log("success")
                        },
                        fail: function () {
                            uni.showModal({
                                title: "提示",
                                content: "点击右上角“...”，选择“权限设置”，打开地理位置",
                                showCancel: !1,
                                confirmText: "知道了"
                            })
                        }
                    })
                },
                appVersionCompare: C,
                setUrlssfrom: function (e) {
                    var n = e,
                        a = uni.getStorageSync("trackPath") ? uni.getStorageSync("trackPath").value :
                        "";
                    return !n.includes("ssfrom") && a && (n = n.includes("?") ? n + "&" : n + "?",
                        n += "ssfrom=" + a), n
                },
                encryptName: function (e) {
                    var n;
                    if (2 === e.length) n = e.substr(0, 1) + "*";
                    else if (e.length > 2) {
                        for (var a = "", t = 0, i = e.length - 2; t < i; t++) a += "*";
                        n = e.substr(0, 1) + a + e.substr(-1, 1)
                    } else n = e;
                    return n
                },
                encryptCert: function (e) {
                    return e.replace(/^(.{3})(?:\d+)(.{3})$/, "$1*********$2")
                },
                encodeId: function (e) {
                    var n = p.encode(e.toString(), g);
                    return n
                },
                decodeId: function (e) {
                    return p.decode(e, g)
                }
            };
            n.default = w
        }).call(this, a("5a52")["default"])
    },
    6071: function (e, n, a) {
        var t = a("24fb"),
            i = a("1de5"),
            o = a("93e0");
        n = t(!1);
        var r = i(o);
        n.push([e.i,
            "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */\n/*通用 */uni-page-body{background-color:#fff}body.?%PAGE?%{background-color:#fff}@font-face{font-family:uniicons;font-weight:400;font-style:normal;src:url(" +
            r +
            ') format("truetype")}uni-image{vertical-align:middle;will-change:transform}\n/* 主题颜色 */.theme-color{color:#eb484a}.MT20{margin-top:%?40?%}\n/* tab bar */.uni-tab-bar{display:flex;flex:1;flex-direction:column;overflow:hidden;height:100%}.uni-swiper-tab{width:100%;white-space:nowrap;border-bottom:%?2?% solid #ebebeb}.swiper-tab-list{font-size:%?32?%;width:%?200?%;display:inline-block;text-align:center;color:#999}.swiper-tab-list > uni-text{display:inline-block;line-height:%?96?%;height:%?96?%;border-bottom:%?4?% transparent solid;padding:0 %?10?%}.uni-tab-bar .active{color:#333}.uni-tab-bar .active > uni-text{border-bottom:%?4?% #eb484a solid}.uni-tab-bar .tab-view .tab-content{display:none}.uni-tab-bar .tab-view .active{display:block}\n/* button */uni-button[type=default][plain], uni-button[type=default][plain]{color:#333;border:%?1?% solid #bbb;border-color:#bbb\n    /* background-color: rgba(0,0,0,0); */}uni-button[type=primary][plain]{color:#eb484a;border:%?1?% solid #eb484a;background-color:transparent}uni-button[type=primary][plain]{color:#eb484a;border:%?1?% solid #eb484a;background-color:initial}.uni-popup.uni-popup-bottom{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important}::-webkit-scrollbar{width:0;height:0}\n/* uni-icon */.uni-icon{font-family:uniicons;font-size:24px;font-weight:400;font-style:normal;line-height:1;display:inline-block;text-decoration:none;-webkit-font-smoothing:antialiased}.uni-icon.uni-active{color:#007aff}.uni-icon-contact:before{content:"\\e100"}.uni-icon-person:before{content:"\\e101"}.uni-icon-personadd:before{content:"\\e102"}.uni-icon-contact-filled:before{content:"\\e130"}.uni-icon-person-filled:before{content:"\\e131"}.uni-icon-personadd-filled:before{content:"\\e132"}.uni-icon-phone:before{content:"\\e200"}.uni-icon-email:before{content:"\\e201"}.uni-icon-chatbubble:before{content:"\\e202"}.uni-icon-chatboxes:before{content:"\\e203"}.uni-icon-phone-filled:before{content:"\\e230"}.uni-icon-email-filled:before{content:"\\e231"}.uni-icon-chatbubble-filled:before{content:"\\e232"}.uni-icon-chatboxes-filled:before{content:"\\e233"}.uni-icon-weibo:before{content:"\\e260"}.uni-icon-weixin:before{content:"\\e261"}.uni-icon-pengyouquan:before{content:"\\e262"}.uni-icon-chat:before{content:"\\e263"}.uni-icon-qq:before{content:"\\e264"}.uni-icon-videocam:before{content:"\\e300"}.uni-icon-camera:before{content:"\\e301"}.uni-icon-mic:before{content:"\\e302"}.uni-icon-location:before{content:"\\e303"}.uni-icon-mic-filled:before,\n.uni-icon-speech:before{content:"\\e332"}.uni-icon-location-filled:before{content:"\\e333"}.uni-icon-micoff:before{content:"\\e360"}.uni-icon-image:before{content:"\\e363"}.uni-icon-map:before{content:"\\e364"}.uni-icon-compose:before{content:"\\e400"}.uni-icon-trash:before{content:"\\e401"}.uni-icon-upload:before{content:"\\e402"}.uni-icon-download:before{content:"\\e403"}.uni-icon-close:before{content:"\\e404"}.uni-icon-redo:before{content:"\\e405"}.uni-icon-undo:before{content:"\\e406"}.uni-icon-refresh:before{content:"\\e407"}.uni-icon-star:before{content:"\\e408"}.uni-icon-plus:before{content:"\\e409"}.uni-icon-minus:before{content:"\\e410"}.uni-icon-circle:before,\n.uni-icon-checkbox:before{content:"\\e411"}.uni-icon-close-filled:before,\n.uni-icon-clear:before{content:"\\e434"}.uni-icon-refresh-filled:before{content:"\\e437"}.uni-icon-star-filled:before{content:"\\e438"}.uni-icon-plus-filled:before{content:"\\e439"}.uni-icon-minus-filled:before{content:"\\e440"}.uni-icon-circle-filled:before{content:"\\e441"}.uni-icon-checkbox-filled:before{content:"\\e442"}.uni-icon-closeempty:before{content:"\\e460"}.uni-icon-refreshempty:before{content:"\\e461"}.uni-icon-reload:before{content:"\\e462"}.uni-icon-starhalf:before{content:"\\e463"}.uni-icon-spinner:before{content:"\\e464"}.uni-icon-spinner-cycle:before{content:"\\e465"}.uni-icon-search:before{content:"\\e466"}.uni-icon-plusempty:before{content:"\\e468"}.uni-icon-forward:before{content:"\\e470"}.uni-icon-back:before,\n.uni-icon-left-nav:before{content:"\\e471"}.uni-icon-checkmarkempty:before{content:"\\e472"}.uni-icon-home:before{content:"\\e500"}.uni-icon-navigate:before{content:"\\e501"}.uni-icon-gear:before{content:"\\e502"}.uni-icon-paperplane:before{content:"\\e503"}.uni-icon-info:before{content:"\\e504"}.uni-icon-help:before{content:"\\e505"}.uni-icon-locked:before{content:"\\e506"}.uni-icon-more:before{content:"\\e507"}.uni-icon-flag:before{content:"\\e508"}.uni-icon-home-filled:before{content:"\\e530"}.uni-icon-gear-filled:before{content:"\\e532"}.uni-icon-info-filled:before{content:"\\e534"}.uni-icon-help-filled:before{content:"\\e535"}.uni-icon-more-filled:before{content:"\\e537"}.uni-icon-settings:before{content:"\\e560"}.uni-icon-list:before{content:"\\e562"}.uni-icon-bars:before{content:"\\e563"}.uni-icon-loop:before{content:"\\e565"}.uni-icon-paperclip:before{content:"\\e567"}.uni-icon-eye:before{content:"\\e568"}.uni-icon-arrowup:before{content:"\\e580"}.uni-icon-arrowdown:before{content:"\\e581"}.uni-icon-arrowleft:before{content:"\\e582"}.uni-icon-arrowright:before{content:"\\e583"}.uni-icon-arrowthinup:before{content:"\\e584"}.uni-icon-arrowthindown:before{content:"\\e585"}.uni-icon-arrowthinleft:before{content:"\\e586"}.uni-icon-arrowthinright:before{content:"\\e587"}.uni-icon-pulldown:before{content:"\\e588"}.uni-icon-scan:before{content:"\\e612"}@supports (bottom:env(safe-area-inset-bottom)){.bottom-bar,.footer-bar{padding-bottom:env(safe-area-inset-bottom)/* 为底下圆弧的高度 34px */}}\n/*每个页面公共css */uni-page{font-size:%?28?%;font-family:"PingFangSC-Regular, PingFang SC, serif";\n-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important;-moz-text-size-adjust:100%!important\n}\n.uni-tabbar__item:last-child{display:none}uni-page{max-width:960px;margin:0 auto}uni-page-head{display:none}@supports (bottom:env(safe-area-inset-bottom)){.bottom-bar,\n\t.footer-bar{padding-bottom:env(safe-area-inset-bottom)\n\t\t/* 为底下圆弧的高度 34px */}}\n',
            ""]), e.exports = n
    },
    6807: function (e, n, a) {
        "use strict";
        a("7a82"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = [{
            path: /^\/event\/list(.*)+$/,
            name: "activityList",
            propsId: !1
        }, {
            path: /^\/event\/\d+$/,
            name: "activityDetail",
            activityId: !0
        }, {
            path: /^\/city\/it\/\d+$/,
            name: "citytvpage",
            propsId: !0
        }, {
            path: /^\/venue\/it\/\d+$/,
            name: "sitetvpage",
            propsId: !0
        }, {
            path: /^\/coupon\/receive\/([0-9A-Za-z])+$/,
            name: "couponReceive",
            propsId: !0
        }, {
            path: /^\/coupon\/mylist(.*)+$/,
            name: "couponList"
        }, {
            path: /^\/theme\/list(.*)+$/,
            name: "goodsIndex"
        }, {
            path: /^\/theme\/\d+$/,
            name: "goodsTheme",
            propsId: !0
        }, {
            path: /^\/goods\/list(.*)+$/,
            name: "goodsList"
        }, {
            path: /^\/goods\/\d+$/,
            name: "goodsDetail",
            propsId: !0
        }, {
            path: /^\/raise\/list(.*)+$/,
            name: "raiseIndex"
        }, {
            path: /^\/raise\/\d+$/,
            name: "raiseDetail",
            propsId: !0
        }, {
            path: /^\/raise\/ticket\/list(.*)+$/,
            name: "raiseTicket"
        }, {
            path: /^\/app\/help\/menu(.*)+$/,
            name: "helpCenter"
        }, {
            path: /^\/app\/help\/entry(.*)+$/,
            name: "helpCenter"
        }, {
            path: /^\/help\/menu(.*)+$/,
            name: "helpCenter"
        }, {
            path: /^\/help\/entry(.*)+$/,
            name: "helpCenter"
        }, {
            path: /^\/host\/\d+$/,
            name: "brandSite",
            propsId: !0
        }, {
            path: /^\/artist\/\d+$/,
            name: "artistSite",
            propsId: !0
        }, {
            path: /^\/venue\/\d+$/,
            name: "venueSite",
            propsId: !0
        }, {
            path: /^\/join(.*)+$/,
            name: "join"
        }, {
            path: /^\/permit\/([0-9A-Za-z])+$/,
            name: "permit",
            propsId: !0
        }, {
            path: /^\/refund\/([0-9A-Za-z])+$/,
            name: "refund",
            propsId: !0
        }, {
            path: /^\/guide(.*)+$/,
            name: "guide"
        }, {
            path: /^\/video(.*)+$/,
            name: "video"
        }, {
            path: /^\/mm\/video.html(.*)+$/,
            name: "video"
        }, {
            path: /^\/t\/([0-9A-Za-z])+$/,
            name: "activityCodeInfo",
            propsId: !0
        }, {
            path: /^\/e\/([0-9A-Za-z])+$/,
            name: "activityCodeInfo",
            propsId: !0
        }, {
            path: /^\/livehouse\/buyticket\/\d+$/,
            name: "livehouse",
            propsId: !0
        }];
        n.default = t
    },
    "6b33": function (e, n) {
        var a;
        a = window.location.protocol + "//" + window.location.host, e.exports = {
            ApiUrl: "/api",
            ApiUrlV3: "/v3",
            imageUrl: "https://s4.showstart.com",
            h5Url: a,
            geTokenUrl: "/getoken",
            uploadFileUrl: "",
            dyCreateOrderCallbackUrl: "https://dev2-pay.showstart.com/applet/order/byteMini/pre/callback"
        }
    },
    "6f535": function (e, n, a) {
        "use strict";
        a.r(n);
        var t = a("19fa"),
            i = a.n(t);
        for (var o in t)["default"].indexOf(o) < 0 && function (e) {
            a.d(n, e, (function () {
                return t[e]
            }))
        }(o);
        n["default"] = i.a
    },
    "70c7": function (e, n, a) {
        (function (t) {
            var i, o = a("9523").default;
            a("ac1f"), a("466d"), a("c975"), a("14d9"), a("5319"), a("e9c4"),
                function (r, s) {
                    i = function () {
                        return function (e, n) {
                            if (!e.jWeixin) {
                                var a, i, r = {
                                        config: "preVerifyJSAPI",
                                        onMenuShareTimeline: "menu:share:timeline",
                                        onMenuShareAppMessage: "menu:share:appmessage",
                                        onMenuShareQQ: "menu:share:qq",
                                        onMenuShareWeibo: "menu:share:weiboApp",
                                        onMenuShareQZone: "menu:share:QZone",
                                        previewImage: "imagePreview",
                                        getLocation: "geoLocation",
                                        openProductSpecificView: "openProductViewWithPid",
                                        addCard: "batchAddCard",
                                        openCard: "batchViewCard",
                                        chooseWXPay: "getBrandWCPayRequest",
                                        openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
                                        startSearchBeacons: "startMonitoringBeacons",
                                        stopSearchBeacons: "stopMonitoringBeacons",
                                        onSearchBeacons: "onBeaconsInRange",
                                        consumeAndShareCard: "consumedShareCard",
                                        openAddress: "editAddress"
                                    },
                                    s = function () {
                                        var e = {};
                                        for (var n in r) e[r[n]] = n;
                                        return e
                                    }(),
                                    c = e.document,
                                    u = c.title,
                                    d = navigator.userAgent.toLowerCase(),
                                    l = navigator.platform.toLowerCase(),
                                    p = !(!l.match("mac") && !l.match("win")),
                                    g = -1 != d.indexOf("wxdebugger"),
                                    f = -1 != d.indexOf("micromessenger"),
                                    m = -1 != d.indexOf("android"),
                                    y = -1 != d.indexOf("iphone") || -1 != d.indexOf("ipad"),
                                    _ = (i = d.match(/micromessenger\/(\d+\.\d+\.\d+)/) || d.match(
                                        /micromessenger\/(\d+\.\d+)/)) ? i[1] : "",
                                    h = {
                                        initStartTime: L(),
                                        initEndTime: 0,
                                        preVerifyStartTime: 0,
                                        preVerifyEndTime: 0
                                    },
                                    v = {
                                        version: 1,
                                        appId: "",
                                        initTime: 0,
                                        preVerifyTime: 0,
                                        networkType: "",
                                        isPreVerifyOk: 1,
                                        systemType: y ? 1 : m ? 2 : -1,
                                        clientVersion: _,
                                        url: encodeURIComponent(location.href)
                                    },
                                    b = {},
                                    C = {
                                        _completes: []
                                    },
                                    w = {
                                        state: 0,
                                        data: {}
                                    };
                                j((function () {
                                    h.initEndTime = L()
                                }));
                                var S = !1,
                                    x = [],
                                    T = (a = {
                                        config: function (n) {
                                            R("config", b = n);
                                            var a = !1 !== b.check;
                                            j((function () {
                                                if (a) A(r.config, {
                                                        verifyJsApiList: N(
                                                            b.jsApiList
                                                        ),
                                                        verifyOpenTagList: N(
                                                            b.openTagList
                                                        )
                                                    }, function () {
                                                        C._complete =
                                                            function (e) {
                                                                h.preVerifyEndTime =
                                                                    L(), w.state =
                                                                    1, w.data =
                                                                    e
                                                            }, C.success =
                                                            function (e) {
                                                                v.isPreVerifyOk =
                                                                    0
                                                            }, C.fail =
                                                            function (e) {
                                                                C._fail ? C
                                                                    ._fail(
                                                                        e) :
                                                                    w.state = -
                                                                    1
                                                            };
                                                        var e = C._completes;
                                                        return e.push((
                                                                function () {
                                                                    !
                                                                    function () {
                                                                        if (
                                                                            !
                                                                            (
                                                                                p ||
                                                                                g ||
                                                                                b
                                                                                .debug ||
                                                                                _ <
                                                                                "6.0.2" ||
                                                                                v
                                                                                .systemType <
                                                                                0
                                                                            )
                                                                        ) {
                                                                            var
                                                                                e =
                                                                                new Image;
                                                                            v
                                                                                .appId =
                                                                                b
                                                                                .appId,
                                                                                v
                                                                                .initTime =
                                                                                h
                                                                                .initEndTime -
                                                                                h
                                                                                .initStartTime,
                                                                                v
                                                                                .preVerifyTime =
                                                                                h
                                                                                .preVerifyEndTime -
                                                                                h
                                                                                .preVerifyStartTime,
                                                                                T
                                                                                .getNetworkType({
                                                                                    isInnerInvoke:
                                                                                        !
                                                                                        0,
                                                                                    success: function (
                                                                                        n
                                                                                    ) {
                                                                                        v
                                                                                            .networkType =
                                                                                            n
                                                                                            .networkType;
                                                                                        var
                                                                                            a =
                                                                                            "https://open.weixin.qq.com/sdk/report?v=" +
                                                                                            v
                                                                                            .version +
                                                                                            "&o=" +
                                                                                            v
                                                                                            .isPreVerifyOk +
                                                                                            "&s=" +
                                                                                            v
                                                                                            .systemType +
                                                                                            "&c=" +
                                                                                            v
                                                                                            .clientVersion +
                                                                                            "&a=" +
                                                                                            v
                                                                                            .appId +
                                                                                            "&n=" +
                                                                                            v
                                                                                            .networkType +
                                                                                            "&i=" +
                                                                                            v
                                                                                            .initTime +
                                                                                            "&p=" +
                                                                                            v
                                                                                            .preVerifyTime +
                                                                                            "&u=" +
                                                                                            v
                                                                                            .url;
                                                                                        e
                                                                                            .src =
                                                                                            a
                                                                                    }
                                                                                })
                                                                        }
                                                                    }()
                                                                })), C.complete =
                                                            function (n) {
                                                                for (var a =
                                                                        0,
                                                                        t =
                                                                        e.length; a <
                                                                    t; ++a)
                                                                    e[a]();
                                                                C._completes = []
                                                            }, C
                                                    }()), h.preVerifyStartTime =
                                                    L();
                                                else {
                                                    w.state = 1;
                                                    for (var e = C._completes,
                                                            n = 0, t = e.length; n <
                                                        t; ++n) e[n]();
                                                    C._completes = []
                                                }
                                            })), T.invoke || (T.invoke = function (n, a,
                                                t) {
                                                e.WeixinJSBridge && WeixinJSBridge.invoke(
                                                    n, E(a), t)
                                            }, T.on = function (n, a) {
                                                e.WeixinJSBridge && WeixinJSBridge.on(
                                                    n, a)
                                            })
                                        },
                                        ready: function (e) {
                                            0 != w.state ? e() : (C._completes.push(e), !f &&
                                                b.debug && e())
                                        },
                                        error: function (e) {
                                            _ < "6.0.2" || (-1 == w.state ? e(w.data) : C._fail =
                                                e)
                                        },
                                        checkJsApi: function (e) {
                                            A("checkJsApi", {
                                                jsApiList: N(e.jsApiList)
                                            }, (e._complete = function (e) {
                                                if (m) {
                                                    var n = e.checkResult;
                                                    n && (e.checkResult = JSON.parse(
                                                        n))
                                                }
                                                e = function (e) {
                                                    var n = e.checkResult;
                                                    for (var a in n) {
                                                        var t = s[a];
                                                        t && (n[t] = n[a],
                                                            delete n[a]
                                                        )
                                                    }
                                                    return e
                                                }(e)
                                            }, e))
                                        },
                                        onMenuShareTimeline: function (e) {
                                            I(r.onMenuShareTimeline, {
                                                complete: function () {
                                                    A("shareTimeline", {
                                                        title: e.title ||
                                                            u,
                                                        desc: e.title ||
                                                            u,
                                                        img_url: e.imgUrl ||
                                                            "",
                                                        link: e.link ||
                                                            location.href,
                                                        type: e.type ||
                                                            "link",
                                                        data_url: e.dataUrl ||
                                                            ""
                                                    }, e)
                                                }
                                            }, e)
                                        },
                                        onMenuShareAppMessage: function (e) {
                                            I(r.onMenuShareAppMessage, {
                                                complete: function (n) {
                                                    "favorite" === n.scene ? A(
                                                        "sendAppMessage", {
                                                            title: e.title ||
                                                                u,
                                                            desc: e.desc ||
                                                                "",
                                                            link: e.link ||
                                                                location.href,
                                                            img_url: e.imgUrl ||
                                                                "",
                                                            type: e.type ||
                                                                "link",
                                                            data_url: e.dataUrl ||
                                                                ""
                                                        }) : A(
                                                        "sendAppMessage", {
                                                            title: e.title ||
                                                                u,
                                                            desc: e.desc ||
                                                                "",
                                                            link: e.link ||
                                                                location.href,
                                                            img_url: e.imgUrl ||
                                                                "",
                                                            type: e.type ||
                                                                "link",
                                                            data_url: e.dataUrl ||
                                                                ""
                                                        }, e)
                                                }
                                            }, e)
                                        },
                                        onMenuShareQQ: function (e) {
                                            I(r.onMenuShareQQ, {
                                                complete: function () {
                                                    A("shareQQ", {
                                                        title: e.title ||
                                                            u,
                                                        desc: e.desc ||
                                                            "",
                                                        img_url: e.imgUrl ||
                                                            "",
                                                        link: e.link ||
                                                            location.href
                                                    }, e)
                                                }
                                            }, e)
                                        },
                                        onMenuShareWeibo: function (e) {
                                            I(r.onMenuShareWeibo, {
                                                complete: function () {
                                                    A("shareWeiboApp", {
                                                        title: e.title ||
                                                            u,
                                                        desc: e.desc ||
                                                            "",
                                                        img_url: e.imgUrl ||
                                                            "",
                                                        link: e.link ||
                                                            location.href
                                                    }, e)
                                                }
                                            }, e)
                                        },
                                        onMenuShareQZone: function (e) {
                                            I(r.onMenuShareQZone, {
                                                complete: function () {
                                                    A("shareQZone", {
                                                        title: e.title ||
                                                            u,
                                                        desc: e.desc ||
                                                            "",
                                                        img_url: e.imgUrl ||
                                                            "",
                                                        link: e.link ||
                                                            location.href
                                                    }, e)
                                                }
                                            }, e)
                                        },
                                        updateTimelineShareData: function (e) {
                                            A("updateTimelineShareData", {
                                                title: e.title,
                                                link: e.link,
                                                imgUrl: e.imgUrl
                                            }, e)
                                        },
                                        updateAppMessageShareData: function (e) {
                                            A("updateAppMessageShareData", {
                                                title: e.title,
                                                desc: e.desc,
                                                link: e.link,
                                                imgUrl: e.imgUrl
                                            }, e)
                                        },
                                        startRecord: function (e) {
                                            A("startRecord", {}, e)
                                        },
                                        stopRecord: function (e) {
                                            A("stopRecord", {}, e)
                                        },
                                        onVoiceRecordEnd: function (e) {
                                            I("onVoiceRecordEnd", e)
                                        },
                                        playVoice: function (e) {
                                            A("playVoice", {
                                                localId: e.localId
                                            }, e)
                                        },
                                        pauseVoice: function (e) {
                                            A("pauseVoice", {
                                                localId: e.localId
                                            }, e)
                                        },
                                        stopVoice: function (e) {
                                            A("stopVoice", {
                                                localId: e.localId
                                            }, e)
                                        },
                                        onVoicePlayEnd: function (e) {
                                            I("onVoicePlayEnd", e)
                                        },
                                        uploadVoice: function (e) {
                                            A("uploadVoice", {
                                                localId: e.localId,
                                                isShowProgressTips: 0 == e.isShowProgressTips ?
                                                    0 : 1
                                            }, e)
                                        },
                                        downloadVoice: function (e) {
                                            A("downloadVoice", {
                                                serverId: e.serverId,
                                                isShowProgressTips: 0 == e.isShowProgressTips ?
                                                    0 : 1
                                            }, e)
                                        },
                                        translateVoice: function (e) {
                                            A("translateVoice", {
                                                localId: e.localId,
                                                isShowProgressTips: 0 == e.isShowProgressTips ?
                                                    0 : 1
                                            }, e)
                                        },
                                        chooseImage: function (e) {
                                            A("chooseImage", {
                                                scene: "1|2",
                                                count: e.count || 9,
                                                sizeType: e.sizeType || ["original",
                                                    "compressed"],
                                                sourceType: e.sourceType || [
                                                    "album", "camera"]
                                            }, (e._complete = function (e) {
                                                if (m) {
                                                    var n = e.localIds;
                                                    try {
                                                        n && (e.localIds = JSON
                                                            .parse(n))
                                                    } catch (e) {}
                                                }
                                            }, e))
                                        },
                                        getLocation: function (e) {},
                                        previewImage: function (e) {
                                            A(r.previewImage, {
                                                current: e.current,
                                                urls: e.urls
                                            }, e)
                                        },
                                        uploadImage: function (e) {
                                            A("uploadImage", {
                                                localId: e.localId,
                                                isShowProgressTips: 0 == e.isShowProgressTips ?
                                                    0 : 1
                                            }, e)
                                        },
                                        downloadImage: function (e) {
                                            A("downloadImage", {
                                                serverId: e.serverId,
                                                isShowProgressTips: 0 == e.isShowProgressTips ?
                                                    0 : 1
                                            }, e)
                                        },
                                        getLocalImgData: function (e) {
                                            !1 === S ? (S = !0, A("getLocalImgData", {
                                                localId: e.localId
                                            }, (e._complete = function (e) {
                                                if (S = !1, 0 < x.length) {
                                                    var n = x.shift();
                                                    wx.getLocalImgData(n)
                                                }
                                            }, e))) : x.push(e)
                                        },
                                        getNetworkType: function (e) {
                                            A("getNetworkType", {}, (e._complete = function (
                                                e) {
                                                e = function (e) {
                                                    var n = e.errMsg;
                                                    e.errMsg =
                                                        "getNetworkType:ok";
                                                    var a = e.subtype;
                                                    if (delete e.subtype, a)
                                                        e.networkType = a;
                                                    else {
                                                        var t = n.indexOf(
                                                                ":"),
                                                            i = n.substring(
                                                                t + 1);
                                                        switch (i) {
                                                            case "wifi":
                                                            case "edge":
                                                            case "wwan":
                                                                e.networkType =
                                                                    i;
                                                                break;
                                                            default:
                                                                e.errMsg =
                                                                    "getNetworkType:fail"
                                                        }
                                                    }
                                                    return e
                                                }(e)
                                            }, e))
                                        },
                                        openLocation: function (e) {
                                            A("openLocation", {
                                                latitude: e.latitude,
                                                longitude: e.longitude,
                                                name: e.name || "",
                                                address: e.address || "",
                                                scale: e.scale || 28,
                                                infoUrl: e.infoUrl || ""
                                            }, e)
                                        }
                                    }, o(a, "getLocation", (function (e) {
                                        A(r.getLocation, {
                                            type: (e = e || {}).type || "wgs84"
                                        }, (e._complete = function (e) {
                                            delete e.type
                                        }, e))
                                    })), o(a, "hideOptionMenu", (function (e) {
                                        A("hideOptionMenu", {}, e)
                                    })), o(a, "showOptionMenu", (function (e) {
                                        A("showOptionMenu", {}, e)
                                    })), o(a, "closeWindow", (function (e) {
                                        A("closeWindow", {}, e = e || {})
                                    })), o(a, "hideMenuItems", (function (e) {
                                        A("hideMenuItems", {
                                            menuList: e.menuList
                                        }, e)
                                    })), o(a, "showMenuItems", (function (e) {
                                        A("showMenuItems", {
                                            menuList: e.menuList
                                        }, e)
                                    })), o(a, "hideAllNonBaseMenuItem", (function (e) {
                                        A("hideAllNonBaseMenuItem", {}, e)
                                    })), o(a, "showAllNonBaseMenuItem", (function (e) {
                                        A("showAllNonBaseMenuItem", {}, e)
                                    })), o(a, "scanQRCode", (function (e) {
                                        A("scanQRCode", {
                                            needResult: (e = e || {}).needResult ||
                                                0,
                                            scanType: e.scanType || ["qrCode",
                                                "barCode"]
                                        }, (e._complete = function (e) {
                                            if (y) {
                                                var n = e.resultStr;
                                                if (n) {
                                                    var a = JSON.parse(n);
                                                    e.resultStr = a && a.scan_code &&
                                                        a.scan_code.scan_result
                                                }
                                            }
                                        }, e))
                                    })), o(a, "openAddress", (function (e) {
                                        A(r.openAddress, {}, (e._complete = function (e) {
                                            e = function (e) {
                                                return e.postalCode = e
                                                    .addressPostalCode,
                                                    delete e.addressPostalCode,
                                                    e.provinceName = e.proviceFirstStageName,
                                                    delete e.proviceFirstStageName,
                                                    e.cityName = e.addressCitySecondStageName,
                                                    delete e.addressCitySecondStageName,
                                                    e.countryName = e.addressCountiesThirdStageName,
                                                    delete e.addressCountiesThirdStageName,
                                                    e.detailInfo = e.addressDetailInfo,
                                                    delete e.addressDetailInfo,
                                                    e
                                            }(e)
                                        }, e))
                                    })), o(a, "openProductSpecificView", (function (e) {
                                        A(r.openProductSpecificView, {
                                            pid: e.productId,
                                            view_type: e.viewType || 0,
                                            ext_info: e.extInfo
                                        }, e)
                                    })), o(a, "addCard", (function (e) {
                                        for (var n = e.cardList, a = [], t = 0, i = n.length; t <
                                            i; ++t) {
                                            var o = n[t],
                                                s = {
                                                    card_id: o.cardId,
                                                    card_ext: o.cardExt
                                                };
                                            a.push(s)
                                        }
                                        A(r.addCard, {
                                            card_list: a
                                        }, (e._complete = function (e) {
                                            var n = e.card_list;
                                            if (n) {
                                                for (var a = 0, t = (n =
                                                        JSON.parse(n)).length; a <
                                                    t; ++a) {
                                                    var i = n[a];
                                                    i.cardId = i.card_id, i
                                                        .cardExt = i.card_ext,
                                                        i.isSuccess = !!i.is_succ,
                                                        delete i.card_id,
                                                        delete i.card_ext,
                                                        delete i.is_succ
                                                }
                                                e.cardList = n, delete e.card_list
                                            }
                                        }, e))
                                    })), o(a, "chooseCard", (function (e) {
                                        A("chooseCard", {
                                            app_id: b.appId,
                                            location_id: e.shopId || "",
                                            sign_type: e.signType || "SHA1",
                                            card_id: e.cardId || "",
                                            card_type: e.cardType || "",
                                            card_sign: e.cardSign,
                                            time_stamp: e.timestamp + "",
                                            nonce_str: e.nonceStr
                                        }, (e._complete = function (e) {
                                            e.cardList = e.choose_card_info,
                                                delete e.choose_card_info
                                        }, e))
                                    })), o(a, "openCard", (function (e) {
                                        for (var n = e.cardList, a = [], t = 0, i = n.length; t <
                                            i; ++t) {
                                            var o = n[t],
                                                s = {
                                                    card_id: o.cardId,
                                                    code: o.code
                                                };
                                            a.push(s)
                                        }
                                        A(r.openCard, {
                                            card_list: a
                                        }, e)
                                    })), o(a, "consumeAndShareCard", (function (e) {
                                        A(r.consumeAndShareCard, {
                                            consumedCardId: e.cardId,
                                            consumedCode: e.code
                                        }, e)
                                    })), o(a, "chooseWXPay", (function (e) {
                                        A(r.chooseWXPay, O(e), e)
                                    })), o(a, "openEnterpriseRedPacket", (function (e) {
                                        A(r.openEnterpriseRedPacket, O(e), e)
                                    })), o(a, "startSearchBeacons", (function (e) {
                                        A(r.startSearchBeacons, {
                                            ticket: e.ticket
                                        }, e)
                                    })), o(a, "stopSearchBeacons", (function (e) {
                                        A(r.stopSearchBeacons, {}, e)
                                    })), o(a, "onSearchBeacons", (function (e) {
                                        I(r.onSearchBeacons, e)
                                    })), o(a, "openEnterpriseChat", (function (e) {
                                        A("openEnterpriseChat", {
                                            useridlist: e.userIds,
                                            chatname: e.groupName
                                        }, e)
                                    })), o(a, "launchMiniProgram", (function (e) {
                                        A("launchMiniProgram", {
                                            targetAppId: e.targetAppId,
                                            path: function (e) {
                                                if ("string" == typeof e &&
                                                    0 < e.length) {
                                                    var n = e.split("?")[0],
                                                        a = e.split("?")[1];
                                                    return n += ".html",
                                                        void 0 !== a ? n +
                                                        "?" + a : n
                                                }
                                            }(e.path),
                                            envVersion: e.envVersion
                                        }, e)
                                    })), o(a, "openBusinessView", (function (e) {
                                        A("openBusinessView", {
                                            businessType: e.businessType,
                                            queryString: e.queryString || "",
                                            envVersion: e.envVersion
                                        }, (e._complete = function (e) {
                                            if (m) {
                                                var n = e.extraData;
                                                if (n) try {
                                                    e.extraData = JSON.parse(
                                                        n)
                                                } catch (n) {
                                                    e.extraData = {}
                                                }
                                            }
                                        }, e))
                                    })), o(a, "miniProgram", {
                                        navigateBack: function (e) {
                                            e = e || {}, j((function () {
                                                A("invokeMiniProgramAPI", {
                                                    name: "navigateBack",
                                                    arg: {
                                                        delta: e.delta ||
                                                            1
                                                    }
                                                }, e)
                                            }))
                                        },
                                        navigateTo: function (e) {
                                            j((function () {
                                                A("invokeMiniProgramAPI", {
                                                    name: "navigateTo",
                                                    arg: {
                                                        url: e.url
                                                    }
                                                }, e)
                                            }))
                                        },
                                        redirectTo: function (e) {
                                            j((function () {
                                                A("invokeMiniProgramAPI", {
                                                    name: "redirectTo",
                                                    arg: {
                                                        url: e.url
                                                    }
                                                }, e)
                                            }))
                                        },
                                        switchTab: function (e) {
                                            j((function () {
                                                A("invokeMiniProgramAPI", {
                                                    name: "switchTab",
                                                    arg: {
                                                        url: e.url
                                                    }
                                                }, e)
                                            }))
                                        },
                                        reLaunch: function (e) {
                                            j((function () {
                                                A("invokeMiniProgramAPI", {
                                                    name: "reLaunch",
                                                    arg: {
                                                        url: e.url
                                                    }
                                                }, e)
                                            }))
                                        },
                                        postMessage: function (e) {
                                            j((function () {
                                                A("invokeMiniProgramAPI", {
                                                    name: "postMessage",
                                                    arg: e.data ||
                                                        {}
                                                }, e)
                                            }))
                                        },
                                        getEnv: function (n) {
                                            j((function () {
                                                n({
                                                    miniprogram: "miniprogram" ===
                                                        e.__wxjs_environment
                                                })
                                            }))
                                        }
                                    }), a),
                                    P = 1,
                                    k = {};
                                return c.addEventListener("error", (function (e) {
                                    if (!m) {
                                        var n = e.target,
                                            a = n.tagName,
                                            t = n.src;
                                        if (("IMG" == a || "VIDEO" == a || "AUDIO" == a ||
                                                "SOURCE" == a) && -1 != t.indexOf(
                                                "wxlocalresource://")) {
                                            e.preventDefault(), e.stopPropagation();
                                            var i = n["wx-id"];
                                            if (i || (i = P++, n["wx-id"] = i), k[i])
                                                return;
                                            k[i] = !0, wx.ready((function () {
                                                wx.getLocalImgData({
                                                    localId: t,
                                                    success: function (
                                                        e) {
                                                        n.src =
                                                            e.localData
                                                    }
                                                })
                                            }))
                                        }
                                    }
                                }), !0), c.addEventListener("load", (function (e) {
                                    if (!m) {
                                        var n = e.target,
                                            a = n.tagName;
                                        if (n.src, "IMG" == a || "VIDEO" == a ||
                                            "AUDIO" == a || "SOURCE" == a) {
                                            var t = n["wx-id"];
                                            t && (k[t] = !1)
                                        }
                                    }
                                }), !0), n && (e.wx = e.jWeixin = T), T
                            }
                            function A(n, a, t) {
                                e.WeixinJSBridge ? WeixinJSBridge.invoke(n, E(a), (function (e) {
                                    B(n, e, t)
                                })) : R(n, t)
                            }
                            function I(n, a, t) {
                                e.WeixinJSBridge ? WeixinJSBridge.on(n, (function (e) {
                                    t && t.trigger && t.trigger(e), B(n, e, a)
                                })) : R(n, t || a)
                            }
                            function E(e) {
                                return (e = e || {}).appId = b.appId, e.verifyAppId = b.appId, e.verifySignType =
                                    "sha1", e.verifyTimestamp = b.timestamp + "", e.verifyNonceStr =
                                    b.nonceStr, e.verifySignature = b.signature, e
                            }
                            function O(e) {
                                return {
                                    timeStamp: e.timestamp + "",
                                    nonceStr: e.nonceStr,
                                    package: e.package,
                                    paySign: e.paySign,
                                    signType: e.signType || "SHA1"
                                }
                            }
                            function B(e, n, a) {
                                "openEnterpriseChat" != e && "openBusinessView" !== e || (n.errCode =
                                        n.err_code), delete n.err_code, delete n.err_desc, delete n
                                    .err_detail;
                                var t = n.errMsg;
                                t || (t = n.err_msg, delete n.err_msg, t = function (e, n) {
                                        var a = e,
                                            t = s[a];
                                        t && (a = t);
                                        var i = "ok";
                                        if (n) {
                                            var o = n.indexOf(":");
                                            "confirm" == (i = n.substring(o + 1)) && (i = "ok"),
                                            "failed" == i && (i = "fail"), -1 != i.indexOf(
                                                    "failed_") && (i = i.substring(7)), -1 != i
                                                .indexOf("fail_") && (i = i.substring(5)),
                                                "access denied" != (i = (i = i.replace(/_/g,
                                                    " ")).toLowerCase()) &&
                                                "no permission to execute" != i || (i =
                                                    "permission denied"), "config" == a &&
                                                "function not exist" == i && (i = "ok"), "" ==
                                                i && (i = "fail")
                                        }
                                        return a + ":" + i
                                    }(e, t), n.errMsg = t), (a = a || {})._complete && (a._complete(
                                        n), delete a._complete), t = n.errMsg || "", b.debug && !a.isInnerInvoke &&
                                    alert(JSON.stringify(n));
                                var i = t.indexOf(":");
                                switch (t.substring(i + 1)) {
                                    case "ok":
                                        a.success && a.success(n);
                                        break;
                                    case "cancel":
                                        a.cancel && a.cancel(n);
                                        break;
                                    default:
                                        a.fail && a.fail(n)
                                }
                                a.complete && a.complete(n)
                            }
                            function N(e) {
                                if (e) {
                                    for (var n = 0, a = e.length; n < a; ++n) {
                                        var t = e[n],
                                            i = r[t];
                                        i && (e[n] = i)
                                    }
                                    return e
                                }
                            }
                            function R(e, n) {
                                if (!(!b.debug || n && n.isInnerInvoke)) {
                                    var a = s[e];
                                    a && (e = a), n && n._complete && delete n._complete, t.log('"' +
                                        e + '",', n || "")
                                }
                            }
                            function L() {
                                return (new Date).getTime()
                            }
                            function j(n) {
                                f && (e.WeixinJSBridge ? n() : c.addEventListener && c.addEventListener(
                                    "WeixinJSBridgeReady", n, !1))
                            }
                        }(r)
                    }.call(n, a, n, e), void 0 === i || (e.exports = i)
                }(window)
        }).call(this, a("5a52")["default"])
    },
    9175: function (e, n, a) {
        "use strict";
        a("7a82");
        var t = a("4ea4").default;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, a("99af"), a("7db0"), a("d3b7"), a("ac1f"), a("00b4"), a("baa5");
        var i = t(a("5530")),
            o = t(a("2909")),
            r = t(a("e143")),
            s = t(a("7d7f")),
            c = t(a("6807"));
        r.default.use(s.default);
        var u = new s.default({
            encodeURI: !1,
            h5: {
                rewriteFun: !1
            },
            routes: [].concat((0, o.default)([{
                path: "/pages/index/index",
                aliasPath: "/"
            }, {
                path: "/pages/ticketIndex/ticketIndex",
                name: "ticketIndex"
            }, {
                path: "/pages/myHome/myHome"
            }, {
                path: "/pages/city/city"
            }, {
                path: "/pages/goodsIndex/goodsIndex",
                name: "goodsIndex"
            }, {
                path: "/pages/raiseIndex/raiseIndex",
                name: "raiseIndex"
            }, {
                path: "/pages/video/channel/channel"
            }, {
                path: "/pages/videoissue/videoissue"
            }, {
                path: "/pages/404",
                name: "404"
            }, {
                path: "/pages/apptest/apptest"
            }, {
                path: "/pages/command/activity"
            }, {
                path: "/pages/test"
            }, {
                path: "/pages/passport/login/login"
            }, {
                path: "/pages/passport/permit/permit",
                name: "permit"
            }, {
                path: "/pages/passport/close/close"
            }, {
                path: "/pages/tickets/tickets"
            }, {
                path: "/pages/videoissue/videoissue"
            }, {
                path: "/pages/activity/list/list",
                name: "activityList"
            }, {
                path: "/pages/activity/detail/detail",
                name: "activityDetail"
            }, {
                path: "/pages/activity/search/search"
            }, {
                path: "/pages/activity/livehouse/livehouse",
                name: "livehouse"
            }, {
                path: "/pages/activity/seat/seat"
            }, {
                path: "/pages/activity/userClaim/userClaim"
            }, {
                path: "/pages/raise/list/list"
            }, {
                path: "/pages/raise/detail/detail",
                name: "raiseDetail"
            }, {
                path: "/pages/raise/ticket/ticket",
                name: "raiseTicket"
            }, {
                path: "/pages/goods/theme/theme",
                name: "goodsTheme"
            }, {
                path: "/pages/goods/detail/detail",
                name: "goodsDetail"
            }, {
                path: "/pages/goods/list/list",
                name: "goodsList"
            }, {
                path: "/pages/order/gifts/gifts"
            }, {
                path: "/pages/order/activity/list/list"
            }, {
                path: "/pages/order/activity/detail/detail"
            }, {
                path: "/pages/order/activity/confirm/confirm"
            }, {
                path: "/pages/order/raise/confirm/confirm"
            }, {
                path: "/pages/order/goods/confirm/confirm"
            }, {
                path: "/pages/order/wxpay/wxpay"
            }, {
                path: "/pages/order/payFailed/payFailed"
            }, {
                path: "/pages/order/paySuccess/paySuccess"
            }, {
                path: "/pages/order/raise/list/list"
            }, {
                path: "/pages/order/raise/detail/detail"
            }, {
                path: "/pages/order/goods/list/list"
            }, {
                path: "/pages/order/goods/detail/detail"
            }, {
                path: "/pages/order/activity/codeInfo/codeInfo",
                name: "activityCodeInfo"
            }, {
                path: "/pages/order/refund/refund"
            }, {
                path: "/pages/order/refundv1/refund",
                name: "refund"
            }, {
                path: "/pages/order/refundcheck/refundcheck",
                name: "refundcheck"
            }, {
                path: "/pages/order/refundSuccess/refundSuccess",
                name: "refundSuccess"
            }, {
                path: "/pages/order/payResult/payResult"
            }, {
                path: "/pages/coupon/list/list",
                name: "couponList"
            }, {
                path: "/pages/coupon/receive/receive",
                name: "couponReceive"
            }, {
                path: "/pages/coupon/goods/goods-list/goods-list"
            }, {
                path: "/pages/user/address/list/list"
            }, {
                path: "/pages/user/address/edit/edit"
            }, {
                path: "/pages/user/viewer/list/list"
            }, {
                path: "/pages/user/viewer/edit/edit"
            }, {
                path: "/pages/user/identity/list/list"
            }, {
                path: "/pages/user/identity/identapp/index"
            }, {
                path: "/pages/user/code/code"
            }, {
                path: "/pages/user/aut/step1"
            }, {
                path: "/pages/user/aut/step2"
            }, {
                path: "/pages/user/aut/fail"
            }, {
                path: "/pages/user/creditLevel/creditLevel"
            }, {
                path: "/pages/special/join/join",
                name: "join"
            }, {
                path: "/pages/special/share/list/list"
            }, {
                path: "/pages/special/showdesk/showdesk"
            }, {
                path: "/pages/special/share/detail/detail"
            }, {
                path: "/pages/special/share/article/article"
            }, {
                path: "/pages/special/share/brand/brand"
            }, {
                path: "/pages/special/share/join/join"
            }, {
                path: "/pages/special/citytvpage/citytvpage",
                name: "citytvage"
            }, {
                path: "/pages/special/sitetvpage/sitetvpage",
                name: "sitetvpage"
            }, {
                path: "/pages/special/showfun/showfun"
            }, {
                path: "/pages/special/indiestar/apply/apply"
            }, {
                path: "/pages/special/indiestar/vote/vote"
            }, {
                path: "/pages/special/indiestar/vote2/vote2"
            }, {
                path: "/pages/special/getTicket/getTicket"
            }, {
                path: "/pages/special/guide/guide",
                name: "guide"
            }, {
                path: "/pages/special/lpa/index/index"
            }, {
                path: "/pages/special/lpa/vote/vote"
            }, {
                path: "/pages/special/expand/index"
            }, {
                path: "/pages/special/expand/command"
            }, {
                path: "/pages/special/fineband/fineband"
            }, {
                path: "/pages/special/summerband/summerband"
            }, {
                path: "/pages/special/fy/fy"
            }, {
                path: "/pages/special/purchase/index"
            }, {
                path: "/pages/special/purchase/goods"
            }, {
                path: "/pages/special/nft/exchange"
            }, {
                path: "/pages/special/nft/owner"
            }, {
                path: "/pages/special/redeem"
            }, {
                path: "/pages/special/2022/2022",
                name: "2022"
            }, {
                path: "/pages/special/unlockposter/index"
            }, {
                path: "/pages/special/lottery/194905"
            }, {
                path: "/pages/special/checkIn/index"
            }, {
                path: "/pages/special/wenda/index"
            }, {
                path: "/pages/special/wenda/command"
            }, {
                path: "/pages/special/2023/poster/poster"
            }, {
                path: "/pages/special/lottery/39"
            }, {
                path: "/pages/site/site/site",
                name: "venueSite"
            }, {
                path: "/pages/site/artist/artist",
                name: "artistSite"
            }, {
                path: "/pages/site/brand/brand",
                name: "brandSite"
            }, {
                path: "/pages/site/license/license"
            }, {
                path: "/pages/helpCenter/help/help",
                name: "helpCenter"
            }, {
                path: "/pages/helpCenter/aboutus/aboutus"
            }, {
                path: "/pages/tool/map/map"
            }, {
                path: "/pages/tool/video/video",
                name: "video"
            }, {
                path: "/pages/tool/webView/webView"
            }, {
                path: "/pages/tool/ticketrules/ticketrules"
            }, {
                path: "/pages/tool/mvideo/mvideo"
            }, {
                path: "/pages/tool/bbs/bbs"
            }, {
                path: "/pages/tool/visitcard/visitcard"
            }, {
                path: "/pages/tool/survey/survey",
                name: "survey"
            }, {
                path: "/pages/tool/videodetails/videodetails"
            }, {
                path: "/pages/live/theme/theme"
            }, {
                path: "/pages/live/room/room"
            }, {
                path: "/pages/live/event/event"
            }, {
                path: "/pages/live/list/list"
            }, {
                path: "/pages/invitation/index"
            }, {
                path: "/pages/invitation/receive"
            }, {
                path: "/pages/invitation/succeed"
            }]), [{
                path: "*",
                redirect: function (e) {
                    var n = c.default.find((function (n) {
                            return n.path.test(e.path)
                        })),
                        a = n && n.name,
                        t = (0, i.default)({}, e.query),
                        o = n && n.propsId ? e.path.substring(e.path.lastIndexOf("/") +
                            1) : "";
                    o && (t.id = o);
                    var r = n && n.activityId ? e.path.substring(e.path.lastIndexOf("/") +
                        1) : "";
                    return r && (t.activityId = r), a ? {
                        name: a,
                        query: (0, i.default)({}, t)
                    } : {
                        name: "404"
                    }
                }
            }])
        });
        u.beforeEach((function (e, n, a) {
            a()
        })), u.afterEach((function (e, n) {}));
        var d = u;
        n.default = d
    },
    "93e0": function (e, n, a) {
        e.exports = a.p + "static/fonts/uni.2d930681.ttf"
    },
    "998d": function (module, exports, __webpack_require__) {
        (function (process, global, module) {
            var __WEBPACK_AMD_DEFINE_RESULT__, _typeof = __webpack_require__("7037").default;
            __webpack_require__("c19f"), __webpack_require__("ace4"), __webpack_require__("d3b7"),
                __webpack_require__("5cc6"), __webpack_require__("907a"), __webpack_require__("9a8c"),
                __webpack_require__("a975"), __webpack_require__("735e"), __webpack_require__("c1ac"),
                __webpack_require__("d139"), __webpack_require__("3a7b"), __webpack_require__("986a"),
                __webpack_require__("1d02"), __webpack_require__("d5d6"), __webpack_require__("82f8"),
                __webpack_require__("e91f"), __webpack_require__("60bd"), __webpack_require__("5f96"),
                __webpack_require__("3280"), __webpack_require__("3fcc"), __webpack_require__("ca91"),
                __webpack_require__("25a1"), __webpack_require__("cd26"), __webpack_require__("3c5d"),
                __webpack_require__("2954"), __webpack_require__("649e"), __webpack_require__("219c"),
                __webpack_require__("b39a"), __webpack_require__("72f7"), __webpack_require__("fb2c"),
                __webpack_require__("82da"), __webpack_require__("d401"), __webpack_require__("25f0"),
                /**
                 * [js-md5]{@link https://github.com/emn178/js-md5}
                 *
                 * @namespace md5
                 * @version 0.7.3
                 * @author Chen, Yi-Cyuan [emn178@gmail.com]
                 * @copyright Chen, Yi-Cyuan 2014-2017
                 * @license MIT
                 */
                function () {
                    "use strict";
                    var ERROR = "input is invalid type",
                        WINDOW = "object" === ("undefined" === typeof window ? "undefined" : _typeof(window)),
                        root = WINDOW ? window : {};
                    root.JS_MD5_NO_WINDOW && (WINDOW = !1);
                    var WEB_WORKER = !WINDOW && "object" === ("undefined" === typeof self ? "undefined" :
                            _typeof(self)),
                        NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" === ("undefined" === typeof process ?
                            "undefined" : _typeof(process)) && process.versions && process.versions.node;
                    NODE_JS ? root = global : WEB_WORKER && (root = self);
                    var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" === _typeof(module) && module.exports,
                        AMD = __webpack_require__("3c35"),
                        ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer,
                        HEX_CHARS = "0123456789abcdef".split(""),
                        EXTRA = [128, 32768, 8388608, -2147483648],
                        SHIFT = [0, 8, 16, 24],
                        OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],
                        BASE64_ENCODE_CHAR =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
                        blocks = [],
                        buffer8;
                    if (ARRAY_BUFFER) {
                        var buffer = new ArrayBuffer(68);
                        buffer8 = new Uint8Array(buffer), blocks = new Uint32Array(buffer)
                    }!root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function (e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        }), !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView ||
                        (ArrayBuffer.isView = function (e) {
                            return "object" === _typeof(e) && e.buffer && e.buffer.constructor ===
                                ArrayBuffer
                        });
                    var createOutputMethod = function (e) {
                            return function (n) {
                                return new Md5(!0).update(n)[e]()
                            }
                        },
                        createMethod = function () {
                            var e = createOutputMethod("hex");
                            NODE_JS && (e = nodeWrap(e)), e.create = function () {
                                return new Md5
                            }, e.update = function (n) {
                                return e.create().update(n)
                            };
                            for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
                                var a = OUTPUT_TYPES[n];
                                e[a] = createOutputMethod(a)
                            }
                            return e
                        },
                        nodeWrap = function nodeWrap(method) {
                            var crypto = eval("require('crypto')"),
                                Buffer = eval("require('buffer').Buffer"),
                                nodeMethod = function (e) {
                                    if ("string" === typeof e) return crypto.createHash("md5").update(e,
                                        "utf8").digest("hex");
                                    if (null === e || void 0 === e) throw ERROR;
                                    return e.constructor === ArrayBuffer && (e = new Uint8Array(e)), Array.isArray(
                                            e) || ArrayBuffer.isView(e) || e.constructor === Buffer ?
                                        crypto.createHash("md5").update(new Buffer(e)).digest("hex") :
                                        method(e)
                                };
                            return nodeMethod
                        };
                    function Md5(e) {
                        if (e) blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] =
                            blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[
                                11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks =
                            blocks, this.buffer8 = buffer8;
                        else if (ARRAY_BUFFER) {
                            var n = new ArrayBuffer(68);
                            this.buffer8 = new Uint8Array(n), this.blocks = new Uint32Array(n)
                        } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0,
                            this.finalized = this.hashed = !1, this.first = !0
                    }
                    Md5.prototype.update = function (e) {
                            if (!this.finalized) {
                                var n, a = _typeof(e);
                                if ("string" !== a) {
                                    if ("object" !== a) throw ERROR;
                                    if (null === e) throw ERROR;
                                    if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                                    else if (!Array.isArray(e) && (!ARRAY_BUFFER || !ArrayBuffer.isView(e)))
                                        throw ERROR;
                                    n = !0
                                }
                                var t, i, o = 0,
                                    r = e.length,
                                    s = this.blocks,
                                    c = this.buffer8;
                                while (o < r) {
                                    if (this.hashed && (this.hashed = !1, s[0] = s[16], s[16] = s[1] = s[2] =
                                            s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] =
                                            s[12] = s[13] = s[14] = s[15] = 0), n)
                                        if (ARRAY_BUFFER)
                                            for (i = this.start; o < r && i < 64; ++o) c[i++] = e[o];
                                        else
                                            for (i = this.start; o < r && i < 64; ++o) s[i >> 2] |= e[o] <<
                                                SHIFT[3 & i++];
                                    else if (ARRAY_BUFFER)
                                        for (i = this.start; o < r && i < 64; ++o) t = e.charCodeAt(o), t <
                                            128 ? c[i++] = t : t < 2048 ? (c[i++] = 192 | t >> 6, c[i++] =
                                                128 | 63 & t) : t < 55296 || t >= 57344 ? (c[i++] = 224 | t >>
                                                12, c[i++] = 128 | t >> 6 & 63, c[i++] = 128 | 63 & t) : (t =
                                                65536 + ((1023 & t) << 10 | 1023 & e.charCodeAt(++o)), c[i++] =
                                                240 | t >> 18, c[i++] = 128 | t >> 12 & 63, c[i++] = 128 |
                                                t >> 6 & 63, c[i++] = 128 | 63 & t);
                                    else
                                        for (i = this.start; o < r && i < 64; ++o) t = e.charCodeAt(o), t <
                                            128 ? s[i >> 2] |= t << SHIFT[3 & i++] : t < 2048 ? (s[i >> 2] |=
                                                (192 | t >> 6) << SHIFT[3 & i++], s[i >> 2] |= (128 | 63 &
                                                    t) << SHIFT[3 & i++]) : t < 55296 || t >= 57344 ? (s[i >>
                                                2] |= (224 | t >> 12) << SHIFT[3 & i++], s[i >> 2] |= (
                                                128 | t >> 6 & 63) << SHIFT[3 & i++], s[i >> 2] |= (128 |
                                                63 & t) << SHIFT[3 & i++]) : (t = 65536 + ((1023 & t) << 10 |
                                                    1023 & e.charCodeAt(++o)), s[i >> 2] |= (240 | t >> 18) <<
                                                SHIFT[3 & i++], s[i >> 2] |= (128 | t >> 12 & 63) << SHIFT[
                                                    3 & i++], s[i >> 2] |= (128 | t >> 6 & 63) << SHIFT[3 &
                                                    i++], s[i >> 2] |= (128 | 63 & t) << SHIFT[3 & i++]);
                                    this.lastByteIndex = i, this.bytes += i - this.start, i >= 64 ? (this.start =
                                        i - 64, this.hash(), this.hashed = !0) : this.start = i
                                }
                                return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 <<
                                    0, this.bytes = this.bytes % 4294967296), this
                            }
                        }, Md5.prototype.finalize = function () {
                            if (!this.finalized) {
                                this.finalized = !0;
                                var e = this.blocks,
                                    n = this.lastByteIndex;
                                e[n >> 2] |= EXTRA[3 & n], n >= 56 && (this.hashed || this.hash(), e[0] = e[
                                        16], e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[
                                        8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), e[
                                        14] = this.bytes << 3, e[15] = this.hBytes << 3 | this.bytes >>> 29,
                                    this.hash()
                            }
                        }, Md5.prototype.hash = function () {
                            var e, n, a, t, i, o, r = this.blocks;
                            this.first ? (e = r[0] - 680876937, e = (e << 7 | e >>> 25) - 271733879 << 0, t =
                                    (-1732584194 ^ 2004318071 & e) + r[1] - 117830708, t = (t << 12 | t >>>
                                        20) + e << 0, a = (-271733879 ^ t & (-271733879 ^ e)) + r[2] -
                                    1126478375, a = (a << 17 | a >>> 15) + t << 0, n = (e ^ a & (t ^ e)) +
                                    r[3] - 1316259209, n = (n << 22 | n >>> 10) + a << 0) : (e = this.h0, n =
                                    this.h1, a = this.h2, t = this.h3, e += (t ^ n & (a ^ t)) + r[0] -
                                    680876936, e = (e << 7 | e >>> 25) + n << 0, t += (a ^ e & (n ^ a)) + r[
                                        1] - 389564586, t = (t << 12 | t >>> 20) + e << 0, a += (n ^ t & (e ^
                                        n)) + r[2] + 606105819, a = (a << 17 | a >>> 15) + t << 0, n += (e ^
                                        a & (t ^ e)) + r[3] - 1044525330, n = (n << 22 | n >>> 10) + a << 0
                                ), e += (t ^ n & (a ^ t)) + r[4] - 176418897, e = (e << 7 | e >>> 25) + n <<
                                0, t += (a ^ e & (n ^ a)) + r[5] + 1200080426, t = (t << 12 | t >>> 20) + e <<
                                0, a += (n ^ t & (e ^ n)) + r[6] - 1473231341, a = (a << 17 | a >>> 15) + t <<
                                0, n += (e ^ a & (t ^ e)) + r[7] - 45705983, n = (n << 22 | n >>> 10) + a <<
                                0, e += (t ^ n & (a ^ t)) + r[8] + 1770035416, e = (e << 7 | e >>> 25) + n <<
                                0, t += (a ^ e & (n ^ a)) + r[9] - 1958414417, t = (t << 12 | t >>> 20) + e <<
                                0, a += (n ^ t & (e ^ n)) + r[10] - 42063, a = (a << 17 | a >>> 15) + t <<
                                0, n += (e ^ a & (t ^ e)) + r[11] - 1990404162, n = (n << 22 | n >>> 10) +
                                a << 0, e += (t ^ n & (a ^ t)) + r[12] + 1804603682, e = (e << 7 | e >>> 25) +
                                n << 0, t += (a ^ e & (n ^ a)) + r[13] - 40341101, t = (t << 12 | t >>> 20) +
                                e << 0, a += (n ^ t & (e ^ n)) + r[14] - 1502002290, a = (a << 17 | a >>>
                                    15) + t << 0, n += (e ^ a & (t ^ e)) + r[15] + 1236535329, n = (n << 22 |
                                    n >>> 10) + a << 0, e += (a ^ t & (n ^ a)) + r[1] - 165796510, e = (e <<
                                    5 | e >>> 27) + n << 0, t += (n ^ a & (e ^ n)) + r[6] - 1069501632, t =
                                (t << 9 | t >>> 23) + e << 0, a += (e ^ n & (t ^ e)) + r[11] + 643717713, a =
                                (a << 14 | a >>> 18) + t << 0, n += (t ^ e & (a ^ t)) + r[0] - 373897302, n =
                                (n << 20 | n >>> 12) + a << 0, e += (a ^ t & (n ^ a)) + r[5] - 701558691, e =
                                (e << 5 | e >>> 27) + n << 0, t += (n ^ a & (e ^ n)) + r[10] + 38016083, t =
                                (t << 9 | t >>> 23) + e << 0, a += (e ^ n & (t ^ e)) + r[15] - 660478335, a =
                                (a << 14 | a >>> 18) + t << 0, n += (t ^ e & (a ^ t)) + r[4] - 405537848, n =
                                (n << 20 | n >>> 12) + a << 0, e += (a ^ t & (n ^ a)) + r[9] + 568446438, e =
                                (e << 5 | e >>> 27) + n << 0, t += (n ^ a & (e ^ n)) + r[14] - 1019803690,
                                t = (t << 9 | t >>> 23) + e << 0, a += (e ^ n & (t ^ e)) + r[3] - 187363961,
                                a = (a << 14 | a >>> 18) + t << 0, n += (t ^ e & (a ^ t)) + r[8] +
                                1163531501, n = (n << 20 | n >>> 12) + a << 0, e += (a ^ t & (n ^ a)) + r[
                                    13] - 1444681467, e = (e << 5 | e >>> 27) + n << 0, t += (n ^ a & (e ^
                                    n)) + r[2] - 51403784, t = (t << 9 | t >>> 23) + e << 0, a += (e ^ n &
                                    (t ^ e)) + r[7] + 1735328473, a = (a << 14 | a >>> 18) + t << 0, n += (
                                    t ^ e & (a ^ t)) + r[12] - 1926607734, n = (n << 20 | n >>> 12) + a <<
                                0, i = n ^ a, e += (i ^ t) + r[5] - 378558, e = (e << 4 | e >>> 28) + n <<
                                0, t += (i ^ e) + r[8] - 2022574463, t = (t << 11 | t >>> 21) + e << 0, o =
                                t ^ e, a += (o ^ n) + r[11] + 1839030562, a = (a << 16 | a >>> 16) + t << 0,
                                n += (o ^ a) + r[14] - 35309556, n = (n << 23 | n >>> 9) + a << 0, i = n ^
                                a, e += (i ^ t) + r[1] - 1530992060, e = (e << 4 | e >>> 28) + n << 0, t +=
                                (i ^ e) + r[4] + 1272893353, t = (t << 11 | t >>> 21) + e << 0, o = t ^ e,
                                a += (o ^ n) + r[7] - 155497632, a = (a << 16 | a >>> 16) + t << 0, n += (o ^
                                    a) + r[10] - 1094730640, n = (n << 23 | n >>> 9) + a << 0, i = n ^ a, e +=
                                (i ^ t) + r[13] + 681279174, e = (e << 4 | e >>> 28) + n << 0, t += (i ^ e) +
                                r[0] - 358537222, t = (t << 11 | t >>> 21) + e << 0, o = t ^ e, a += (o ^ n) +
                                r[3] - 722521979, a = (a << 16 | a >>> 16) + t << 0, n += (o ^ a) + r[6] +
                                76029189, n = (n << 23 | n >>> 9) + a << 0, i = n ^ a, e += (i ^ t) + r[9] -
                                640364487, e = (e << 4 | e >>> 28) + n << 0, t += (i ^ e) + r[12] -
                                421815835, t = (t << 11 | t >>> 21) + e << 0, o = t ^ e, a += (o ^ n) + r[
                                    15] + 530742520, a = (a << 16 | a >>> 16) + t << 0, n += (o ^ a) + r[2] -
                                995338651, n = (n << 23 | n >>> 9) + a << 0, e += (a ^ (n | ~t)) + r[0] -
                                198630844, e = (e << 6 | e >>> 26) + n << 0, t += (n ^ (e | ~a)) + r[7] +
                                1126891415, t = (t << 10 | t >>> 22) + e << 0, a += (e ^ (t | ~n)) + r[14] -
                                1416354905, a = (a << 15 | a >>> 17) + t << 0, n += (t ^ (a | ~e)) + r[5] -
                                57434055, n = (n << 21 | n >>> 11) + a << 0, e += (a ^ (n | ~t)) + r[12] +
                                1700485571, e = (e << 6 | e >>> 26) + n << 0, t += (n ^ (e | ~a)) + r[3] -
                                1894986606, t = (t << 10 | t >>> 22) + e << 0, a += (e ^ (t | ~n)) + r[10] -
                                1051523, a = (a << 15 | a >>> 17) + t << 0, n += (t ^ (a | ~e)) + r[1] -
                                2054922799, n = (n << 21 | n >>> 11) + a << 0, e += (a ^ (n | ~t)) + r[8] +
                                1873313359, e = (e << 6 | e >>> 26) + n << 0, t += (n ^ (e | ~a)) + r[15] -
                                30611744, t = (t << 10 | t >>> 22) + e << 0, a += (e ^ (t | ~n)) + r[6] -
                                1560198380, a = (a << 15 | a >>> 17) + t << 0, n += (t ^ (a | ~e)) + r[13] +
                                1309151649, n = (n << 21 | n >>> 11) + a << 0, e += (a ^ (n | ~t)) + r[4] -
                                145523070, e = (e << 6 | e >>> 26) + n << 0, t += (n ^ (e | ~a)) + r[11] -
                                1120210379, t = (t << 10 | t >>> 22) + e << 0, a += (e ^ (t | ~n)) + r[2] +
                                718787259, a = (a << 15 | a >>> 17) + t << 0, n += (t ^ (a | ~e)) + r[9] -
                                343485551, n = (n << 21 | n >>> 11) + a << 0, this.first ? (this.h0 = e +
                                    1732584193 << 0, this.h1 = n - 271733879 << 0, this.h2 = a - 1732584194 <<
                                    0, this.h3 = t + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 +
                                    e << 0, this.h1 = this.h1 + n << 0, this.h2 = this.h2 + a << 0, this.h3 =
                                    this.h3 + t << 0)
                        }, Md5.prototype.hex = function () {
                            this.finalize();
                            var e = this.h0,
                                n = this.h1,
                                a = this.h2,
                                t = this.h3;
                            return HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] +
                                HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] +
                                HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[n >> 4 & 15] +
                                HEX_CHARS[15 & n] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] +
                                HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 28 & 15] +
                                HEX_CHARS[n >> 24 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a] +
                                HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 20 & 15] +
                                HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] +
                                HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] +
                                HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] +
                                HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15]
                        }, Md5.prototype.toString = Md5.prototype.hex, Md5.prototype.digest = function () {
                            this.finalize();
                            var e = this.h0,
                                n = this.h1,
                                a = this.h2,
                                t = this.h3;
                            return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & n, n >> 8 &
                                255, n >> 16 & 255, n >> 24 & 255, 255 & a, a >> 8 & 255, a >> 16 & 255,
                                a >> 24 & 255, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
                        }, Md5.prototype.array = Md5.prototype.digest, Md5.prototype.arrayBuffer = function () {
                            this.finalize();
                            var e = new ArrayBuffer(16),
                                n = new Uint32Array(e);
                            return n[0] = this.h0, n[1] = this.h1, n[2] = this.h2, n[3] = this.h3, e
                        }, Md5.prototype.buffer = Md5.prototype.arrayBuffer, Md5.prototype.base64 =
                        function () {
                            for (var e, n, a, t = "", i = this.array(), o = 0; o < 15;) e = i[o++], n = i[o++],
                                a = i[o++], t += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[63 & (e <<
                                    4 | n >>> 4)] + BASE64_ENCODE_CHAR[63 & (n << 2 | a >>> 6)] +
                                BASE64_ENCODE_CHAR[63 & a];
                            return e = i[o], t += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[e << 4 &
                                63] + "==", t
                        };
                    var exports = createMethod();
                    COMMON_JS ? module.exports = exports : (root.md5 = exports, AMD && (
                        __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                            return exports
                        }.call(exports, __webpack_require__, exports, module), void 0 ===
                        __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports =
                            __WEBPACK_AMD_DEFINE_RESULT__)))
                }()
        }).call(this, __webpack_require__("4362"), __webpack_require__("c8ba"), __webpack_require__("62e4")(
            module))
    },
    a4eb: function (e, n, a) {
        "use strict";
        a("7a82");
        var t = a("4ea4").default;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = t(a("558e")),
            o = {
                data: function () {
                    return {
                        logo: i.default
                    }
                },
                props: ["path"],
                created: function () {},
                directives: {
                    clickDown: {
                        inserted: function (e) {
                            e.click()
                        }
                    }
                },
                methods: {
                    openApp: function () {
                        var e = window.location.href;
                        MobLink([{
                            el: "#openApp",
                            path: "/openapp",
                            params: {
                                url: e
                            }
                        }])
                    }
                }
            };
        n.default = o
    },
    a7a7: function (e, n, a) {
        "use strict";
        var t = a("4ea4").default,
            i = t(a("5530"));
        a("e260"), a("e6cf"), a("cca6"), a("a79d"), a("27b2"), a("06b9");
        var o = t(a("e143")),
            r = t(a("0e83")),
            s = t(a("6b33")),
            c = t(a("5c13")),
            u = t(a("c79c")),
            d = (t(a("9175")), a("7d7f")),
            l = t(a("0321")),
            p = t(a("eefe")),
            g = t(a("0d7e"));
        o.default.config.productionTip = !1, o.default.prototype.$config = s.default, o.default.prototype.$imageUrl =
            s.default.imageUrl, o.default.prototype.$util = c.default, o.default.prototype.$store = u.default,
            o.default.prototype.$uploadFile = l.default, o.default.prototype.$callApp = g.default, r.default.mpType =
            "app", o.default.component("app-download-bar", p.default);
        var f = new o.default((0, i.default)({
            store: u.default
        }, r.default));
        (0, d.RouterMount)(f, "#app")
    },
    c79c: function (e, n, a) {
        "use strict";
        a("7a82");
        var t = a("4ea4").default;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, a("d3b7");
        var i = t(a("e143")),
            o = t(a("26cb")),
            r = t(a("0d7e")),
            s = t(a("5c13"));
        i.default.use(o.default);
        var c = new o.default.Store({
                state: {
                    st_flpv: "",
                    sign: "",
                    userInfo: "",
                    info: "",
                    adsPopupFlag: "",
                    qrCodeFlag: "",
                    newAddressId: "",
                    trackPath: "",
                    partner: "",
                    token: "",
                    accessToken: "",
                    idToken: "",
                    openFrom: "",
                    gateway: ""
                },
                mutations: {
                    setStflpv: function (e, n) {
                        e.st_flpv = n, uni.setStorage({
                            key: "st_flpv",
                            data: n
                        })
                    },
                    setSign: function (e, n) {
                        e.sign = n, uni.setStorage({
                            key: "sign",
                            data: n
                        })
                    },
                    setUserInfo: function (e, n) {
                        e.userInfo = n, uni.setStorage({
                            key: "userInfo",
                            data: n
                        })
                    },
                    setInfo: function (e, n) {
                        e.info = n, uni.setStorage({
                            key: "info",
                            data: n
                        })
                    },
                    logOut: function (e) {
                        e.sign = "", e.userInfo = null, e.idToken = "", e.openFrom = "", e.gateway = "",
                            uni.removeStorage({
                                key: "sign"
                            }), uni.removeStorage({
                                key: "userInfo"
                            }), uni.removeStorage({
                                key: "idToken"
                            }), uni.removeStorage({
                                key: "openFrom"
                            }), uni.removeStorage({
                                key: "gateway"
                            }), r.default.isInShowstart() && r.default.appLogout()
                    },
                    setQrCodeFlag: function (e) {
                        e.qrCodeFlag = !0
                    },
                    setNewAddressId: function (e, n) {
                        e.newAddressId = n || ""
                    },
                    setTrackPath: function (e, n) {
                        n ? (e.trackPath = n, uni.setStorage({
                            key: "trackPath",
                            data: {
                                value: n,
                                time: (new Date).getTime()
                            }
                        })) : (e.trackPath = "", uni.removeStorage({
                            key: "trackPath"
                        }))
                    },
                    setPartner: function (e, n) {
                        e.partner = n || "", uni.setStorage({
                            key: "partner",
                            data: {
                                value: n,
                                time: (new Date).getTime()
                            }
                        })
                    },
                    setToken: function (e, n) {
                        e.token = n, uni.setStorage({
                            key: "token",
                            data: n
                        })
                    },
                    setAccessToken: function (e, n) {
                        e.accessToken = n, uni.setStorage({
                            key: "accessToken",
                            data: n
                        })
                    },
                    setIdToken: function (e, n) {
                        e.idToken = n, uni.setStorage({
                            key: "idToken",
                            data: n
                        })
                    },
                    setOpenFrom: function (e, n) {
                        e.openFrom = n, uni.setStorage({
                            key: "openFrom",
                            data: n
                        })
                    },
                    setGateway: function (e, n) {
                        e.gateway = n, uni.setStorage({
                            key: "gateway",
                            data: n
                        })
                    }
                },
                actions: {
                    fetchAccessToken: function (e) {
                        e.commit;
                        return new Promise((function (e, n) {
                            s.default.ajax({
                                url: "/waf/gettoken",
                                method: "get",
                                success: function (n) {
                                    var a = n.data,
                                        t = a.state,
                                        i = a.result;
                                    if (t && i) {
                                        var o = i.accessToken,
                                            r = i.idToken;
                                        c.commit("setAccessToken", o.access_token),
                                            c.commit("setIdToken", r.id_token)
                                    }
                                    e(n)
                                }
                            })
                        }))
                    }
                }
            }),
            u = c;
        n.default = u
    },
    d6db: function (e, n, a) {
        "use strict";
        var t = a("4ea4").default;
        a("ac1f"), a("466d");
        var i = t(a("5c13")),
            o = window.navigator.userAgent.toLowerCase(),
            r = "micromessenger" == o.match(/MicroMessenger/i);
        if (r) var s = a("70c7");
        e.exports = {
            logo: "https://s2.showstart.com/static/ssweb/images/shareLogo.png",
            title: "秀动网（showstart.com） - 和热爱音乐的朋友开启原创音乐现场之旅",
            desc: "秀动网,太合音乐集团旗下产品,最新最热演出在线低价购票,艺人最新最热歌曲在线免费试听,同城乐迷互动交友,一切尽在秀动网！",
            share: function (e) {
                var n = e.title || this.title,
                    a = e.summary || this.desc,
                    t = (e.type, e.imageUrl || this.logo);
                e.mediaUrl;
                if (r) {
                    var o = e.href || window.location.href;
                    o = i.default.setUrlssfrom(o), i.default.ajax({
                        url: "/wap/common/wxShare.json",
                        data: {
                            url: o
                        },
                        success: function (e) {
                            var n = e.data,
                                a = n.state,
                                t = n.result;
                            n.msg;
                            a && s.config({
                                debug: !1,
                                appId: t.appId,
                                timestamp: t.timeStamp,
                                nonceStr: t.nonceStr,
                                signature: t.signature,
                                jsApiList: ["updateAppMessageShareData",
                                    "updateTimelineShareData", "onMenuShareQQ"]
                            })
                        }
                    }), s.ready((function () {
                        s.updateTimelineShareData({
                            title: n,
                            link: o,
                            imgUrl: t
                        }), s.updateAppMessageShareData({
                            title: n,
                            desc: a,
                            link: o,
                            imgUrl: t,
                            type: "link"
                        })
                    }))
                }
            }
        }
    },
    d7e1: function (e, n, a) {
        "use strict";
        a("7a82");
        var t = a("4ea4").default;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, a("d401"), a("d3b7"), a("25f0");
        var i = t(a("5835")),
            o = "0RGF99CtUajPF0Ny",
            r = {
                encrypt: function (e, n) {
                    n = n || o;
                    var a = i.default.enc.Base64,
                        t = i.default.enc.Utf8.parse(n),
                        r = i.default.enc.Utf8.parse(e),
                        s = i.default.AES.encrypt(r, t, {
                            mode: i.default.mode.ECB,
                            padding: i.default.pad.Pkcs7
                        });
                    return a.stringify(s.ciphertext)
                },
                decrypt: function (e, n) {
                    n = n || o;
                    var a = i.default.enc.Utf8.parse(n),
                        t = i.default.AES.decrypt(e, a, {
                            mode: i.default.mode.ECB,
                            padding: i.default.pad.Pkcs7
                        });
                    return i.default.enc.Utf8.stringify(t).toString()
                }
            };
        n.default = r
    },
    eda9: function (e, n, a) {
        "use strict";
        a("7a82");
        var t = a("4ea4").default;
        Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0, a("e9c4"), a("d401"), a("d3b7"), a("25f0"), a("d81d"), a("caad"), a("2532"),
            a("ac1f"), a("5319"), a("99af"), a("159b"), a("14d9");
        var i = t(a("c7eb")),
            o = t(a("1da1")),
            r = t(a("5530")),
            s = t(a("2d15")),
            c = a("6b33"),
            u = t(a("c79c")),
            d = t(a("998d")),
            l = t(a("5c13")),
            p = t(a("0d7e")),
            g = t(a("d7e1")),
            f = !1,
            m = "none";
        uni.getNetworkType({
            success: function (e) {
                m = e.networkType, m = m.toUpperCase()
            }
        });
        var y = new s.default;
        y.setConfig((function (e) {
            return e
        })), y.interceptor.request((function (e) {
            var n = e.original ? (0, r.default)((0, r.default)({}, e), e.original) : (0, r.default)
                ({}, e);
            n.original = (0, r.default)({}, n);
            var a = uni.getStorageSync("accessToken") || "";
            n.header["CUSAT"] = a || "nil";
            var t = uni.getStorageSync("sign") || "";
            n.header["CUSUT"] = t || "nil";
            var i = uni.getStorageSync("idToken") || "";
            n.header["CUSIT"] = i || "nil";
            var o = uni.getStorageSync("userInfo") || null,
                s = o && o.userId || "";
            n.header["CUSID"] = s || "nil";
            n.header["CUSNAME"] = "nil";
            var f = "wap";
            uni.getStorageSync("openFrom");
            p.default.isInShowstart() && (f = "app"), p.default.isInWxminiprogram() && (f =
                    "wechat_mini"), p.default.isInTtminiprogram() && (f = "byte_mini"), p.default.isInAlminiprogram() &&
                (f = "ali_mini"), n.header["CTERMINAL"] = "wap", n.header["CSAPPID"] = f;
            var y = uni.getStorageSync("token") || l.default.uuid(32).toLowerCase();
            u.default.commit("setToken", y);
            var _ = y;
            n.header["CDEVICENO"] = _, n.header["CUUSERREF"] = _, n.header["CVERSION"] = "997";
            var h = {
                vendorName: uni.getSystemInfoSync().deviceBrand || "",
                deviceMode: uni.getSystemInfoSync().deviceModel || "",
                deviceName: "",
                systemName: uni.getSystemInfoSync().osName || "",
                systemVersion: uni.getSystemInfoSync().osVersion || "",
                cpuMode: " ",
                cpuCores: "",
                cpuArch: "",
                memerySize: "",
                diskSize: "",
                network: m,
                resolution: uni.getSystemInfoSync().screenWidth + "*" + uni.getSystemInfoSync()
                    .screenHeight,
                pixelResolution: ""
            };
            n.header["CDEVICEINFO"] = encodeURI(JSON.stringify(h));
            var v = l.default.uuid(32) + (new Date).getTime();
            n.header["CRTRACEID"] = v;
            var b = n.data.st_flpv ? n.data.st_flpv : u.default.state && u.default.state.st_flpv;
            n.data.st_flpv = b, n.header["st_flpv"] = b, n.data.sign = n.data.sign || "" == n.data.sign ?
                n.data.sign : uni.getStorageSync("sign");
            var C = (new Date).getTime(),
                w = uni.getStorageSync("trackPath").time || 0,
                S = Math.floor((C - w) / 1e3 / 60 / 60),
                x = S <= 168 && uni.getStorageSync("trackPath") && uni.getStorageSync("trackPath").value ?
                uni.getStorageSync("trackPath").value : "";
            if (n.data.trackPath = n.data.trackPath || "" == n.data.trackPath ? n.data.trackPath :
                x, n.header["CTRACKPATH"] = n.data.trackPath, n.header["CSOURCEPATH"] = n.data.trackReferer ||
                "", n.secret) {
                var T = v.toString(),
                    P = _.toString(),
                    k = "";
                [2, 11, 22, 23, 29, 30, 33, 36].map((function (e) {
                    k += T.charAt(e - 1)
                })), [1, 7, 8, 12, 15, 18, 19, 28].map((function (e) {
                    k += P.charAt(e - 1)
                }));
                var A = n.data ? g.default.encrypt(JSON.stringify(n.data), k) : "";
                n.data = {
                    q: A
                }
            }
            n.url = n.url.includes(".json") ? n.url.replace(".json", "") : n.url;
            var I = "";
            n.apiSource && ("appnj" == n.apiSource && (n.apiSource = "nj"), I += "/" + n.apiSource),
                n.url = "".concat(I).concat(n.url);
            var E = n.data ? JSON.stringify(n.data) : "",
                O = a + t + i + s + "wap" + _ + E + n.url + "997" + f + v;
            return n.header["CRPSIGN"] = (0, d.default)(O), n.url = "".concat(c.ApiUrlV3).concat(n.url),
                n.method = "POST", n
        }));
        var _ = !1,
            h = [];
        y.interceptor.response(function () {
            var e = (0, o.default)((0, i.default)().mark((function e(n) {
                var a, t, o, r, s, c, d, p;
                return (0, i.default)().wrap((function (e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (a = n.data, t = a.state, a.result, o =
                                a.msg, r = t.toString().toLowerCase(),
                                s = ["token-expire-at",
                                    "token-expire-ut", "token-clean-at",
                                    "login.other.terminal",
                                    "token-clean-ut"], c = uni.getStorageSync(
                                    "idToken"), !s.includes(r)) {
                                e.next = 21;
                                break
                            }
                            if (_) {
                                e.next = 18;
                                break
                            }
                            return "login.other.terminal" == r && uni.showToast({
                                    title: o || "当前账号已在其他设备登录",
                                    icon: "none"
                                }), ("token-clean-ut" == r ||
                                    "login.other.terminal" == r && c) &&
                                u.default.commit("logOut"),
                                "token-expire-ut" == r && u.default.commit(
                                    "setIdToken", ""), _ = !0, e.next =
                                12, u.default.dispatch(
                                    "fetchAccessToken").then((function (
                                    e) {}));
                        case 12:
                            return _ = !1, h.forEach((function (e) {
                                return e()
                            })), h = [], e.abrupt("return", y.request(
                                n.config));
                        case 18:
                            h.push((function () {
                                return new Promise((
                                    function (e) {
                                        e(y.request(
                                            n
                                            .config
                                        ))
                                    }))
                            }));
                        case 19:
                            e.next = 30;
                            break;
                        case 21:
                            if ("user_not_login_default" != r) {
                                e.next = 27;
                                break
                            }
                            d = getCurrentPages(), u.default.commit(
                                "logOut"), f || (f = !0,
                                "/pages/passport/login/login" != d[
                                    d.length - 1].route ? (p = JSON
                                    .parse(JSON.stringify(n.config.data ||
                                        {})), l.default.loginAction(
                                        p, "redirectTo"), f = !1) :
                                f = !1), e.next = 30;
                            break;
                        case 27:
                            if (n.config.url.includes("accesslog") || t &&
                                1 == r) {
                                e.next = 30;
                                break
                            }
                            return uni.showToast({
                                title: o || "请求错误",
                                icon: "none"
                            }), e.abrupt("return", n.config.fail ?
                                n.config.fail(n) : n);
                        case 30:
                            return e.abrupt("return", n);
                        case 31:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (n) {
                return e.apply(this, arguments)
            }
        }());
        var v = y;
        n.default = v
    },
    eefe: function (e, n, a) {
        "use strict";
        a.r(n);
        var t = a("4471"),
            i = a("17b2");
        for (var o in i)["default"].indexOf(o) < 0 && function (e) {
            a.d(n, e, (function () {
                return i[e]
            }))
        }(o);
        a("2c47");
        var r = a("f0c5"),
            s = Object(r["a"])(i["default"], t["b"], t["c"], !1, null, "32e239d2", null, !1, t["a"], void 0);
        n["default"] = s.exports
    }
});