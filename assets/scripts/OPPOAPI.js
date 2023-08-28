var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("AppPlatform"),
    i = t("AppConfig"),
    r = t("HttpUnit"),
    s = t("AppSwitchConfig"),
    a = t("LogUtils"),
    c = (function () {
        function t() {}
        return (
            Object.defineProperty(t, "BannerInstance_csryw", {
                get: function () {
                    return t._banner_csryw;
                },
                enumerable: !1,
                configurable: !0
            }),
            (t.Login_csryw = function (t) {
                n.default.is_OPPO_GAME_csryw() &&
                    window.qg.login({
                        success: function (e) {
                            var o = e.data.token;
                            for (var n in (t(o), console.log("OPPO 登陆成功,获取到 token : " + o), e))
                                console.log(n, e[n]);
                        },
                        fail: function (t) {
                            for (var e in (console.log("OPPO 登陆失败", t), t)) console.log(e, t[e]);
                        }
                    });
            }),
            (t.initAdService_csryw = function (t, e, o) {
                window.qg.initAdService({
                    appId: i.default.AppID_csryw,
                    isDebug: !1,
                    success: function (e) {
                        console.log("oppo initAdService success"), t && t(e);
                    },
                    fail: function (t) {
                        console.log("oppo initAdService fail: ", t.code, t.msg), e && e(t);
                    },
                    complete: function (t) {
                        console.log("oppo initAdService complete"), o && o(t);
                    }
                });
            }),
            (t.showRewardedVideoAd_csryw = function (t, e, o) {
                if (n.default.is_OPPO_GAME_csryw()) {
                    var r = i.default.tt_adUnitId_csryw;
                    o && (r = o);
                    var s = window.qg.createRewardedVideoAd({posId: r});
                    s.onLoad(function () {
                        console.log("oppo 视频广告加载完成"), s.show();
                    }),
                        s.onVideoStart(function () {
                            console.log("oppo 视频广告开始播放");
                        }),
                        s.onClose(function (e) {
                            e.isEnded
                                ? (console.log("oppo 视频广告观看 完成"), t(!0))
                                : (console.log("oppo 视频广告观看 未完成"), t(!1)),
                                s.destroy();
                        }),
                        s.onError(function (t) {
                            console.log("oppo 视频广告获取失败", t), s.destroy(), e();
                        }),
                        s.load();
                } else t(!0);
            }),
            (t.navigateToMiniProgram_csryw = function (t, e, o, s, a) {
                if (n.default.is_OPPO_GAME_csryw()) {
                    console.log("OPPO 跳转游戏： " + t),
                        r.default.reportExport_csryw(
                            t,
                            e,
                            function (t) {
                                1 == t.code
                                    ? console.log("OPPO 导出上报成功")
                                    : console.log("OPPO 导出上报失败", t.msg);
                            },
                            function (t) {
                                for (var e in (console.log("OPPO 导出上报失败"), t)) console.log(e, t[e]);
                            }
                        );
                    for (var c = Date.now(); Date.now() - c <= 500; );
                    window.qg.navigateToMiniGame({
                        pkgName: t,
                        path: o,
                        extraData: {from: i.default.AppID_csryw},
                        envVersion: "release",
                        success: function (t) {
                            s && s(t);
                        },
                        fail: function (t) {
                            a && a(t);
                        }
                    });
                }
            }),
            (t.showInterstitialAd_csryw = function (e, o) {
                if (n.default.is_OPPO_GAME_csryw()) {
                    var i = window.qg.createInsertAd({posId: t.InsAdUnitId_csryw});
                    i.load(),
                        i.onLoad(function () {
                            console.log("插屏广告加载完成"), i.show();
                        }),
                        i.onShow(function () {
                            console.log("插屏广告显示成功");
                        }),
                        i.onError(function (t) {
                            console.log("插屏广告拉取失败", t), i.destroy(), o && o();
                        });
                } else e();
            }),
            (t.showBannaer_csryw = function () {
                if (t._banner_csryw) t._banner_csryw.show();
                else {
                    var e = window.qg.createBannerAd({posId: t.bannerAdUnitId_csryw});
                    e.show(), (t._banner_csryw = e);
                }
            }),
            (t.hideBanner_csryw = function () {
                t._banner_csryw && t._banner_csryw.hide();
            }),
            (t.destroyBanner_csryw = function () {
                t._banner_csryw && t._banner_csryw.destroy(), (t._banner_csryw = null);
            }),
            (t.getLaunchOptionsSync_csryw = function () {
                var t = {query: "", referrerInfo: {package: "", extraData: {appid: ""}}};
                if (n.default.is_OPPO_GAME_csryw()) {
                    var e = window.qg.getLaunchOptionsSync();
                    return null != e && "" != e ? (t = e) : console.log("没有启动设置！！！"), t;
                }
                return t;
            }),
            (t.share_csryw = function (t) {
                t(!1);
            }),
            (t.createDesktopIcon_csryw = function (t, e) {
                n.default.is_OPPO_GAME_csryw()
                    ? window.qg.hasShortcutInstalled({
                          success: function (o) {
                              0 == o
                                  ? window.qg.installShortcut({
                                        success: function () {
                                            t && t();
                                        },
                                        fail: function (t) {
                                            for (var o in (e && e(), console.log("创建桌面图标失败！！！！", t), t))
                                                console.log(o, t);
                                        },
                                        complete: function () {}
                                    })
                                  : (console.log("桌面图标已存在！！！！"), e && e());
                          },
                          fail: function (t) {
                              for (var o in (e && e(), console.log("判断桌面图标是否存在失败！！！", t), t))
                                  console.log(o, t);
                          },
                          complete: function () {}
                      })
                    : e && e();
            }),
            (t.autoPopCreateDestopIcon_csryw = function (e, o) {
                n.default.is_OPPO_GAME_csryw() &&
                Math.floor(100 * Math.random()) <=
                    s.default.getInstance_csryw().getAppSwitchData_csryw().oppocfg_csryw.addToDesktop_csryw
                    ? t.createDesktopIcon_csryw(e, o)
                    : null != o && o();
            }),
            (t.showNativeAd_csryw = function () {
                a.LogUtils.warn_csryw("111111111111111111111111");
            }),
            (t.LoadCahcedNativeAd_csryw = function () {}),
            (t.hasShortcutInstalled = function (t, e) {
                window.qg.hasShortcutInstalled({
                    success: function (e) {
                        0 == e
                            ? (console.log("桌面图标不存在！！！！"), t && t(!1))
                            : (console.log("桌面图标已存在！！！！"), t && t(!0));
                    },
                    fail: function (t) {
                        for (var o in (e && e(), console.log("判断桌面图标是否存在失败！！！", t), t))
                            console.log(o, t);
                    },
                    complete: function () {}
                });
            }),
            (t.adUnitId_csryw = ""),
            (t.bannerAdUnitId_csryw = ""),
            (t.InsAdUnitId_csryw = ""),
            (t.OpenScreenAdUnitId_csryw = ""),
            (t.NativeAdId_csryw = ""),
            (t._banner_csryw = null),
            (t._cachedNativeAd_csryw = null),
            (t._cachedAdItem_csryw = null),
            (t._cachedimgUrl_csryw = null),
            (t._tryLoadCount_csryw = 5),
            t
        );
    })();
o.default = c;
