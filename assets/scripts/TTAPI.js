var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("AppPlatform"),
    i = t("AppConfig"),
    r = t("DialogMgr"),
    s = t("ConfigMgr"),
    a = t("GameHttpMgr"),
    c = (function () {
        function t() {}
        return (
            (t.ttLogin_csryw = function (e, o) {
                n.default.is_TT_GAME_csryw() &&
                    (window.tt.login({
                        force: !1,
                        success: function (t) {
                            console.log(t), console.log("登陆成功1");
                            var n = t.code;
                            n ? e(n) : (console.log("用户没有登陆，采用临时code"), o());
                        },
                        fail: function () {
                            console.log("登陆失败1"), o();
                        }
                    }),
                    t.initRecord_csryw());
            }),
            (t.onRewardedVideoAdLoad_csryw = function () {
                console.log("激励视频 广告加载完成");
            }),
            (t.onRewardedVideoAdError_csryw = function () {
                window.tt.hideLoading();
            }),
            (t.onRewardedVideoAdClose_csryw = function (e) {
                window.tt.hideLoading(),
                    (e && e.isEnded) || null == e
                        ? (console.log("激励视频 已完整观看"),
                          t.reportAnalytics("videoFinished"),
                          t._onRewardedVideoAdClose_csryw && t._onRewardedVideoAdClose_csryw(!0),
                          a.default.getInstance().Video_Active(null, null))
                        : (console.log("激励视频 未完整观看"),
                          t.reportAnalytics("videoUnFinished"),
                          t._onRewardedVideoAdClose_csryw && t._onRewardedVideoAdClose_csryw(!1));
            }),
            (t.regRewardedVideoAdEvent_csryw = function (e) {
                e.onLoad(t.onRewardedVideoAdLoad_csryw),
                    e.onError(t.onRewardedVideoAdError_csryw),
                    e.onClose(t.onRewardedVideoAdClose_csryw),
                    (t._isRegRewardedVideoAdEvent_csryw = !0);
            }),
            (t.showRewardedVideoAd_csryw = function (e, o, a) {
                if (n.default.is_TT_GAME_csryw()) {
                    if (s.ConfigMgr.is_dr) return void o(!0);
                    if (
                        (t.reportAnalytics("videoPlay", {title: e}),
                        window.tt.showLoading({title: "请求中"}),
                        window.tt.createRewardedVideoAd)
                    ) {
                        (t._onRewardedVideoAdClose_csryw = o), (t._onRewardedVideoAdFailed_csryw = a);
                        var c =
                                i.default.tt_adUnitIdArr_csryw[
                                    Math.floor(Math.random() * i.default.tt_adUnitIdArr_csryw.length)
                                ],
                            l = window.tt.createRewardedVideoAd({adUnitId: c});
                        t._isRegRewardedVideoAdEvent_csryw || t.regRewardedVideoAdEvent_csryw(l),
                            l
                                .show()
                                .then(function () {
                                    window.tt.hideLoading();
                                })
                                .catch(function () {
                                    l.load()
                                        .then(function () {
                                            l.show()
                                                .then(function () {
                                                    window.tt.hideLoading();
                                                })
                                                .catch(function (e) {
                                                    window.tt.hideLoading(),
                                                        console.log(
                                                            "激励视频 广告加载失败<2>:code:" +
                                                                e.errCode +
                                                                " ,msg:" +
                                                                e.errMsg
                                                        ),
                                                        t.reportAnalytics("videoFail", {
                                                            msg: e.errMsg,
                                                            code: e.errCode
                                                        }),
                                                        a && a(),
                                                        r.default.openToast("观看视频失败");
                                                });
                                        })
                                        .catch(function (e) {
                                            window.tt.hideLoading(),
                                                console.log(
                                                    "激励视频 广告加载失败<1>:code:" + e.errCode + " ,msg:" + e.errMsg
                                                ),
                                                t.reportAnalytics("videoFail", {msg: e.errMsg, code: e.errCode}),
                                                a && a(),
                                                r.default.openToast("观看视频失败");
                                        });
                                });
                    } else
                        window.tt.showModal({
                            title: "提示",
                            content: "当前客户端版本过低，无法使用该功能，请升级客户端或关闭后重启更新。"
                        });
                } else o(!0);
            }),
            (t.reportAnalytics = function (t, e) {
                void 0 === e && (e = {}),
                    n.default.is_TT_GAME_csryw() && (console.log("打点", t, e), window.tt.reportAnalytics(t, e));
            }),
            (t.initRecord_csryw = function () {
                (t.record_csryw = window.tt.getGameRecorderManager()),
                    null != t.record_csryw &&
                        (t.record_csryw.onStart(function () {
                            console.log("录屏开始"), (t.recordRes_csryw = "");
                        }),
                        t.record_csryw.onStop(function (e) {
                            console.log("录屏结束"), (t.recordRes_csryw = e.videoPath);
                        }));
            }),
            (t.startRecord_csryw = function (e) {
                void 0 === e && (e = 300), n.default.is_TT_GAME_csryw() && t.record_csryw.start({duration: e});
            }),
            (t.stopRecord_csryw = function () {
                n.default.is_TT_GAME_csryw() && t.record_csryw.stop();
            }),
            (t.shareRecord_csryw = function (e, o) {
                void 0 === e && (e = null),
                    void 0 === o && (o = null),
                    n.default.is_TT_GAME_csryw() &&
                        ("" != t.recordRes_csryw
                            ? window.tt.shareAppMessage({
                                  channel: "video",
                                  extra: {videoPath: t.recordRes_csryw, videoTopics: [i.default.GameName_csryw]},
                                  success: function () {
                                      null != e && e(), console.log("分享视频成功");
                                  },
                                  fail: function (t) {
                                      console.log("分享视频失败", t);
                                      var e = !1;
                                      t &&
                                          21105 == t.errNo &&
                                          ((e = !0), window.tt.showToast({title: "分享失败，分享视频时间过短"})),
                                          null != o && o(t, e);
                                  }
                              })
                            : (null != o && o(), console.log("分享视频为空")));
            }),
            (t.share_csryw = function (t) {
                void 0 === t && (t = null),
                    n.default.is_TT_GAME_csryw() &&
                        window.tt.shareAppMessage({
                            templateId: i.default.tt_templateId_csryw,
                            success: function () {
                                null != t && t();
                            },
                            fail: function () {
                                console.log("分享失败");
                            }
                        });
            }),
            (t.showBanner_csryw = function () {
                if (n.default.is_TT_GAME_csryw() && !(i.default.tt_bannerAdUnitId_csryw.length <= 0)) {
                    if (!t._banner_csryw) {
                        var e = window.tt.getSystemInfoSync(),
                            o = e.windowWidth,
                            r = e.windowHeight;
                        (t._banner_csryw = window.tt.createBannerAd({
                            adUnitId: i.default.tt_bannerAdUnitId_csryw,
                            adIntervals: 30,
                            style: {width: 150, top: r - 84.375}
                        })),
                            (t._banner_csryw.style.left = (o - 150) / 2),
                            t._banner_csryw.onResize(function (e) {
                                console.log(e.width, e.height),
                                    (t._banner_csryw.style.top = r - e.height),
                                    (t._banner_csryw.style.left = (o - e.width) / 2);
                            });
                    }
                    t._banner_csryw.show();
                }
            }),
            (t.hideBanner_csryw = function () {
                null != t._banner_csryw && t._banner_csryw.hide();
            }),
            (t.showMoreGamesModal_csryw = function (t, e) {
                "ios" !== window.tt.getSystemInfoSync().platform
                    ? window.tt.showMoreGamesModal({
                          appLaunchOptions: [{appId: i.default.AppID_csryw, query: "foo=bar&baz=qux", extraData: {}}],
                          success: function (e) {
                              console.log("success", e.errMsg), t && t();
                          },
                          fail: function (t) {
                              console.log("fail", t.errMsg), e && e();
                          }
                      })
                    : e && e();
            }),
            (t.showInterstitialAd = function (t) {
                if (n.default.is_TT_GAME_csryw()) {
                    console.log("插屏插屏create....................");
                    var e = window.tt.createInterstitialAd({adUnitId: i.default.tt_InsAdUnitId_csryw});
                    e
                        .load()
                        .then(function () {
                            console.log("插屏广告加载成功！"),
                                e
                                    .show()
                                    .then(function () {
                                        console.log("插屏广告展示成功！");
                                    })
                                    .catch(function (t) {
                                        console.log("插屏广告显示失败：", JSON.stringify(t));
                                    });
                        })
                        .catch(function (t) {
                            console.log("插屏广告加载失败：", JSON.stringify(t));
                        }),
                        e.onClose(function () {
                            console.log("插屏广告 关闭"), e.destroy(), t && t();
                        });
                }
            }),
            (t.getLaunchOptionsSync_csryw = function () {
                if (n.default.is_TT_GAME_csryw()) {
                    var t = window.tt.getLaunchOptionsSync();
                    console.log("obj ", t), console.log("场景值 " + t.scene);
                    var e = JSON.stringify(t.query);
                    console.log("Query参数 " + e);
                    var o = t.query.key;
                    return console.log("Query参数：key " + o), t;
                }
                return {scene: 1001, query: ""};
            }),
            (t.followTTCount = function () {
                n.default.is_TT_GAME_csryw() &&
                    window.tt.openAwemeUserProfile({
                        success: function (t) {
                            console.log(t);
                        }
                    });
            }),
            (t.addToZM = function () {
                n.default.is_TT_GAME_csryw() &&
                    window.tt.addShortcut({
                        success: function () {
                            console.log("添加成功");
                        },
                        fail: function () {
                            console.log("添加失败");
                        }
                    });
            }),
            (t.setRankData = function (t, e, o, i, r, s) {
                void 0 === i && (i = "extra"),
                    n.default.is_TT_GAME_csryw() &&
                        window.tt.setImRankData({
                            dataType: t,
                            value: e,
                            priority: o,
                            extra: i,
                            success: function (t) {
                                console.log("setImRankData success res: " + t), r && r();
                            },
                            fail: function (t) {
                                console.log("setImRankData fail res: " + t.errMsg), s && s();
                            }
                        });
            }),
            (t.getRankList = function (t, e, o, n, i, r, s) {
                window.tt.getImRankList({
                    relationType: t,
                    dataType: e,
                    rankType: o,
                    suffix: n,
                    rankTitle: i,
                    success: function (t) {
                        console.log("getImRankData success res: " + t), r && r();
                    },
                    fail: function (t) {
                        console.log("getImRankData fail res: " + t.errMsg), s && s();
                    }
                });
            }),
            (t.getRankData = function (t, e, o, n, i) {
                window.tt.getImRankData({
                    relationType: t,
                    dataType: e,
                    rankType: o,
                    pageNum: 1,
                    pageSize: 40,
                    success: function (t, e) {
                        console.log("getImRankData success res: " + t), n && n(e);
                    },
                    fail: function (t) {
                        console.log("getImRankData fail res: " + t.errMsg), i && i();
                    }
                });
            }),
            (t.recordRes_csryw = ""),
            (t._banner_csryw = null),
            (t._isRegRewardedVideoAdEvent_csryw = !1),
            (t._onRewardedVideoAdFailed_csryw = null),
            (t._onRewardedVideoAdClose_csryw = null),
            t
        );
    })();
o.default = c;
