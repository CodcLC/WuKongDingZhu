var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("AppPlatform"),
    i = t("AppConfig"),
    r = t("AppSwitchConfig"),
    s = t("WudianMgr"),
    a = (function () {
        function t() {}
        return (
            (t.Login_csryw = function (t) {
                n.default.is_QQ_PLAY_csryw() &&
                    window.qq.login({
                        success: function (e) {
                            if (e.code) {
                                var o = e.code;
                                t(o), console.log("登陆成功,获取到code : " + o);
                            }
                        }
                    });
            }),
            (t.onRewardedVideoAdLoad_csryw = function () {
                console.log("激励视频 广告加载完成");
            }),
            (t.onRewardedVideoAdError_csryw = function (e) {
                console.log("激励视频 广告加载失败" + e),
                    t._onRewardedVideoAdFailed_csryw && t._onRewardedVideoAdFailed_csryw();
            }),
            (t.onRewardedVideoAdClose_csryw = function (e) {
                (e && e.isEnded) || null == e
                    ? (console.log("激励视频 已完整观看"),
                      t._onRewardedVideoAdClose_csryw && t._onRewardedVideoAdClose_csryw(!0))
                    : (console.log("激励视频 未完整观看"),
                      t._onRewardedVideoAdClose_csryw && t._onRewardedVideoAdClose_csryw(!1));
            }),
            (t.regRewardedVideoAdEvent_csryw = function (e) {
                e.onLoad(t.onRewardedVideoAdLoad_csryw),
                    e.onError(t.onRewardedVideoAdError_csryw),
                    e.onClose(t.onRewardedVideoAdClose_csryw),
                    (t._isRegRewardedVideoAdEvent_csryw = !0);
            }),
            (t.showRewardedVideoAd_csryw = function (e, o) {
                if (n.default.is_QQ_PLAY_csryw()) {
                    (t._onRewardedVideoAdClose_csryw = e), (t._onRewardedVideoAdFailed_csryw = o);
                    var r = window.qq.createRewardedVideoAd({adUnitId: i.default.qq_adUnitId_csryw});
                    t._isRegRewardedVideoAdEvent_csryw || t.regRewardedVideoAdEvent_csryw(r),
                        r
                            .load()
                            .then(function () {
                                var t = r.show();
                                t.then(function () {
                                    return console.log("激励视频 广告显示成功");
                                }),
                                    t.catch(function () {
                                        r.load()
                                            .then(function () {
                                                return r.show();
                                            })
                                            .catch(function () {
                                                console.log("激励视频 广告显示失败"), o && o();
                                            });
                                    });
                            })
                            .catch(function () {
                                console.log("激励视频 广告加载失败"), o && o();
                            });
                } else e(!0);
            }),
            (t.navigateToMiniProgram_csryw = function (t, e, o, i, r) {
                n.default.is_QQ_PLAY_csryw() &&
                    (console.log("跳转游戏： " + t),
                    window.qq.navigateToMiniProgram({
                        appId: t,
                        path: e,
                        extraData: {foo: "bar"},
                        envVersion: "release",
                        success: function (t) {
                            o && o(t);
                        },
                        fail: function (t) {
                            i && i(t);
                        },
                        complete: function (t) {
                            r && r(t);
                        }
                    }));
            }),
            (t.share_csryw = function (e, o, i) {
                var r = this;
                n.default.is_QQ_PLAY_csryw() &&
                    ((t._onShow_csryw = function () {
                        window.qq.offShow(t._onShow_csryw),
                            (t._onShow_csryw = null),
                            Date.now(),
                            r._lastShareTime_csryw,
                            e && (Date.now() - r._lastShareTime_csryw > 2e3 ? e(!0) : e(!1));
                    }),
                    window.qq.onShow(t._onShow_csryw),
                    (t._lastShareTime_csryw = Date.now()),
                    window.qq.shareAppMessage({title: o, imageUrl: i}));
            }),
            (t.showInterstitialAd_csryw = function (t, e) {
                if (n.default.is_QQ_PLAY_csryw()) {
                    var o = window.qq.createInterstitialAd({adUnitId: i.default.qq_InsAdUnitId_csryw}),
                        r = function () {
                            console.log("插屏广告 加载完成"),
                                o.show().catch(function (t) {
                                    console.log("插屏广告 显示失败 ：" + t),
                                        o.offLoad(r),
                                        o.offError(s),
                                        o.offClose(a),
                                        o.destroy(),
                                        e && e();
                                });
                        };
                    o.onLoad(r);
                    var s = function (t) {
                        console.log("插屏广告 加载失败" + t),
                            o.offLoad(r),
                            o.offError(s),
                            o.offClose(a),
                            o.destroy(),
                            e && e();
                    };
                    o.onError(s);
                    var a = function () {
                        console.log("插屏广告 关闭"), o.offLoad(r), o.offError(s), o.offClose(a), o.destroy(), t && t();
                    };
                    o.onClose(a);
                } else t();
            }),
            (t.LoadAppBoxAd_csryw = function (t, e) {
                n.default.is_QQ_PLAY_csryw()
                    ? ((this.mAppboxAd_csryw = window.qq.createAppBox({adUnitId: i.default.qq_AppBoxId_csryw})),
                      this.mAppboxAd_csryw.load().then(function () {
                          console.log("盒子广告 加载完成");
                      }),
                      this.mAppboxAd_csryw.onError(function (t) {
                          console.log("盒子广告 加载失败" + t), e && (e(), (e = null));
                      }),
                      (this.onBoxAdClose_csryw = function () {
                          console.log("盒子广告 关闭"), t && (t(), (t = null));
                      }),
                      this.mAppboxAd_csryw.onClose(this.onBoxAdClose_csryw))
                    : t && (t(), (t = null));
            }),
            (t.showAppBoxAd_csryw = function (e, o) {
                n.default.is_QQ_PLAY_csryw() &&
                    (t.mAppboxAd_csryw
                        ? (console.log("显示盒子广告"),
                          t.mAppboxAd_csryw.offClose(t.onBoxAdClose_csryw),
                          (t.onBoxAdClose_csryw = function () {
                              console.log("盒子广告 关闭"), o && (o(), (o = null));
                          }),
                          t.mAppboxAd_csryw.onClose(t.onBoxAdClose_csryw),
                          t.mAppboxAd_csryw.show().catch(function (t) {
                              console.log("盒子广告 显示失败 ：" + t), e && (e(), (e = null));
                          }))
                        : t.LoadAppBoxAd_csryw(o, e));
            }),
            (t.getLaunchOptionsSync_csryw = function () {
                if (n.default.is_QQ_PLAY_csryw()) {
                    var t = window.qq.getLaunchOptionsSync();
                    console.log("场景值 " + t.scene);
                    var e = JSON.stringify(t.query);
                    console.log("Query参数 " + e);
                    var o = t.query.key;
                    return (
                        console.log("Query参数：key " + o),
                        console.log("ShareTicket " + t.shareTicket),
                        console.log("ReferrerInfo.appId " + t.referrerInfo.appId),
                        console.log("ReferrerInfo.extraData " + t.referrerInfo.extraData),
                        t
                    );
                }
                return {scene: 1001, query: "", shareTicket: "", appId: "", extraData: ""};
            }),
            (t.SetShareMenu_csryw = function (t, e, o, i, r) {
                n.default.is_QQ_PLAY_csryw() &&
                    (console.log("小游戏设置转发按钮"),
                    window.qq.showShareMenu({withShareTicket: !1, success: o, fail: i, complete: r}),
                    window.qq.onShareAppMessage(function () {
                        return {title: t, imageUrl: e};
                    }));
            }),
            (t.tryShowWXCrazyClick_csryw = function () {
                for (
                    var e = t.getLaunchOptionsSync_csryw().scene,
                        o = !0,
                        n = r.default.getInstance_csryw().getAppSwitchData_csryw().wudianSceneList_csryw,
                        a = 0;
                    a < n.length;
                    ++a
                )
                    e == n[a] && (o = !1);
                var c = s.default.ryw_GetIpBlocked_csryw(),
                    l = r.default.getInstance_csryw().getAppSwitchData_csryw().wudian_csryw,
                    d = r.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.kuangdianBanner_csryw;
                return !(
                    i.default.Versions_csryw !=
                        r.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.qqversions_csryw ||
                    !c ||
                    !o ||
                    1 != l ||
                    1 != d
                );
            }),
            (t.tryShowWXCrazyClick2_csryw = function () {
                for (
                    var e = t.getLaunchOptionsSync_csryw().scene,
                        o = !0,
                        n = r.default.getInstance_csryw().getAppSwitchData_csryw().wudianSceneList_csryw,
                        a = 0;
                    a < n.length;
                    ++a
                )
                    e == n[a] && (o = !1);
                var c = s.default.ryw_GetIpBlocked_csryw(),
                    l = r.default.getInstance_csryw().getAppSwitchData_csryw().wudian_csryw,
                    d = r.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.kuangdianBox_csryw;
                return !(
                    i.default.Versions_csryw !=
                        r.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.qqversions_csryw ||
                    !c ||
                    !o ||
                    1 != l ||
                    1 != d
                );
            }),
            (t.showAppBlockAd_csryw = function (e, o, r) {
                if (
                    (void 0 === o && (o = 150),
                    void 0 === r && (r = "landscape"),
                    n.default.is_QQ_PLAY_csryw() && window.qq.createBlockAd && !t.isAppBlockAdLoading_csryw)
                ) {
                    if (((t.isAppBlockAdLoading_csryw = !0), isNaN(t.screenWidth_csryw)))
                        try {
                            var s = window.qq.getSystemInfoSync();
                            (t.screenWidth_csryw = s.windowWidth),
                                (t.screenHeight_csryw = s.windowHeight),
                                (t.pixelRatio_csryw = s.pixelRatio),
                                (t.isIos_csryw = "ios" == s.platform),
                                (t.skdVersion_csryw = s.SDKVersion),
                                (t.screenWidth_csryw *= t.isIos_csryw ? 1 : t.pixelRatio_csryw),
                                (t.screenHeight_csryw *= t.isIos_csryw ? 1 : t.pixelRatio_csryw),
                                console.log("getSystemInfoSync ==> ", s.SDKVersion);
                        } catch (p) {
                            return void (e && e());
                        }
                    for (
                        var a = t.skdVersion_csryw.split(".").map(function (t) {
                                return parseInt(t);
                            }),
                            c = t.supportSDKVersion_csryw.split(".").map(function (t) {
                                return parseInt(t);
                            }),
                            l = !0,
                            d = 0;
                        d < a.length;
                        d++
                    )
                        if (a[d] < c[d]) {
                            l = !1;
                            break;
                        }
                    if (l) {
                        console.log("QQMiniGameAPI.showAppBlockAd ", o), t.destroyAppBlockAd_csryw(), (t.onFail = e);
                        var u = t.isIos_csryw ? 32 / t.pixelRatio_csryw : 32,
                            h = Math.max(u, o / (t.isIos_csryw ? t.pixelRatio_csryw : 1)),
                            f = t.screenWidth_csryw;
                        (f = u),
                            (t.mAppBlockAd_csryw = window.qq.createBlockAd({
                                adUnitId:
                                    i.default.qq_blockAdArray_csryw[
                                        Math.floor(Math.random() * i.default.qq_blockAdArray_csryw.length)
                                    ],
                                style: {left: f, top: h},
                                size: t.AppBlockSize_csryw,
                                orientation: r
                            })),
                            t.mAppBlockAd_csryw.onError(t.appBlockADError_csryw),
                            t.mAppBlockAd_csryw.show().catch(function (t) {
                                console.log("积木广告 显示失败 ：" + JSON.stringify(t)), e && e();
                            }),
                            (t.isAppBlockAdLoading_csryw = !1);
                    }
                }
            }),
            (t.appBlockADResize_csryw = function (e) {
                if (t.mAppBlockAd_csryw.style) {
                    var o = e.width,
                        n = (e.height, (t.screenWidth_csryw - o) / 2);
                    t.mAppBlockAd_csryw.style.left = n;
                }
            }),
            (t.appBlockADError_csryw = function (e) {
                console.log("积木广告  加载失败 ", JSON.stringify(e)), t.onFail && t.onFail();
            }),
            (t.destroyAppBlockAd_csryw = function () {
                n.default.is_QQ_PLAY_csryw() &&
                    t.mAppBlockAd_csryw &&
                    (console.log("QQMiniGameAPI.destroyAppBlockAd"),
                    t.mAppBlockAd_csryw.offResize(t.appBlockADResize_csryw),
                    t.mAppBlockAd_csryw.offError(t.appBlockADError_csryw),
                    t.mAppBlockAd_csryw.hide(),
                    t.mAppBlockAd_csryw.destroy(),
                    (t.mAppBlockAd_csryw = null));
            }),
            (t.AppBlockStyle_csryw = {left: 120, top: 200}),
            (t.AppBlockSize_csryw = 5),
            (t.AppBlockOrientation_csryw = "landscape"),
            (t._isRegRewardedVideoAdEvent_csryw = !1),
            (t._onRewardedVideoAdFailed_csryw = null),
            (t._onRewardedVideoAdClose_csryw = null),
            (t._onShow_csryw = null),
            (t._lastShareTime_csryw = 0),
            (t.mAppboxAd_csryw = null),
            (t.onBoxAdClose_csryw = null),
            (t.mAppBlockAd_csryw = null),
            (t.screenWidth_csryw = NaN),
            (t.isAppBlockAdLoading_csryw = !1),
            (t.supportSDKVersion_csryw = "1.15.0"),
            t
        );
    })();
o.default = a;
