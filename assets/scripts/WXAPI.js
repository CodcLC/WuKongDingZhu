var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.GameRecorder = void 0);
var n = t("AppPlatform"),
    i = t("AppConfig"),
    r = t("AppSwitchConfig"),
    s = t("WudianMgr"),
    a = (function () {
        function t() {
            this._recorder_csryw = null;
        }
        return (
            Object.defineProperty(t.prototype, "recorder_csryw", {
                get: function () {
                    return this._recorder_csryw;
                },
                enumerable: !1,
                configurable: !0
            }),
            (t.prototype.start_csryw = function () {
                null != this.recorder_csryw && this.recorder_csryw.start();
            }),
            (t.prototype.stop_csryw = function () {
                null != this.recorder_csryw && this.recorder_csryw.stop();
            }),
            (t.prototype.pause_csryw = function () {
                null != this.recorder_csryw && this.recorder_csryw.pause();
            }),
            (t.prototype.resume_csryw = function () {
                null != this.recorder_csryw && this.recorder_csryw.resume();
            }),
            (t.prototype.abort_csryw = function () {
                null != this.recorder_csryw && this.recorder_csryw.abort();
            }),
            (t.prototype.showShareBtn_csryw = function () {
                null != this.recorder_csryw &&
                    window.wx.createGameRecorderShareButton({
                        style: {
                            left: 10,
                            top: 150,
                            height: 50,
                            color: "#ffffff",
                            textAlign: "center",
                            fontSize: 16,
                            borderRadius: 4,
                            iconMarginRight: 16,
                            paddingLeft: 1,
                            paddingRight: 30
                        },
                        image: "button.jpg",
                        text: "自定义文案",
                        icon: "icon.jpg",
                        share: {
                            query: "a=1&b=2",
                            bgm: "walkin.mp3",
                            timeRange: [
                                [0, 1e3],
                                [2e3, 3e3]
                            ],
                            title: {template: "default.score", data: {score: 6500}},
                            button: {template: "default.enter"}
                        }
                    });
            }),
            t
        );
    })();
o.GameRecorder = a;
var c = (function () {
    function t() {}
    return (
        (t.wxLogin_csryw = function (t) {
            n.default.is_WECHAT_GAME_csryw() &&
                window.wx.login({
                    success: function (e) {
                        if (e.code) {
                            var o = e.code;
                            console.log("登陆成功,获取到code : " + o), t(o);
                        }
                    }
                });
        }),
        (t.onRewardedVideoAdLoad_csryw = function () {
            console.log("激励视频 广告加载完成");
        }),
        (t.onRewardedVideoAdError_csryw = function (e) {
            console.log("激励视频 广告加载失败" + e),
                console.log(JSON.stringify(e)),
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
        (t.showRewardedVideoAd_csryw = function (e, o, r) {
            var s = Math.floor(Math.random() * i.default.adUnitId_csryw.length);
            if (n.default.is_WECHAT_GAME_csryw()) {
                (t._onRewardedVideoAdClose_csryw = e), (t._onRewardedVideoAdFailed_csryw = o);
                var a = i.default.adUnitId_csryw[s];
                r && (a = r);
                var c = window.wx.createRewardedVideoAd({adUnitId: a});
                t._isRegRewardedVideoAdEvent_csryw || t.regRewardedVideoAdEvent_csryw(c),
                    c
                        .load()
                        .then(function () {
                            var t = c.show();
                            t.then(function () {
                                return console.log("激励视频 广告显示成功");
                            }),
                                t.catch(function () {
                                    c.load()
                                        .then(function () {
                                            return c.show();
                                        })
                                        .catch(function () {
                                            console.log("激励视频 广告显示失败");
                                        });
                                });
                        })
                        .catch(function () {
                            console.log("激励视频 广告加载失败");
                        });
            } else e(!0);
        }),
        (t.navigateToMiniProgram_csryw = function (t, e, o, i, r) {
            n.default.is_WECHAT_GAME_csryw() &&
                (console.log("跳转游戏： " + t),
                window.wx.navigateToMiniProgram({
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
            n.default.is_WECHAT_GAME_csryw() &&
                ((t._onShow_csryw = function () {
                    window.wx.offShow(t._onShow_csryw),
                        (t._onShow_csryw = null),
                        Date.now(),
                        r._lastShareTime_csryw,
                        e && (Date.now() - r._lastShareTime_csryw > 2e3 ? e(!0) : e(!1));
                }),
                window.wx.onShow(t._onShow_csryw),
                (this._lastShareTime_csryw = Date.now()),
                window.wx.shareAppMessage({title: o, imageUrl: i}));
        }),
        (t.showInterstitialAd_csryw = function (t, e) {
            var o = Math.floor(Math.random() * i.default.InsAdUnitId_csryw.length);
            if (n.default.is_WECHAT_GAME_csryw()) {
                var r = window.wx.createInterstitialAd({adUnitId: i.default.InsAdUnitId_csryw[o]});
                r.onLoad(function () {
                    console.log("插屏广告 加载完成"),
                        r.show().catch(function (t) {
                            console.log("插屏广告 显示失败 ：" + t), e && e();
                        });
                }),
                    r.onError(function (t) {
                        console.log("插屏广告 加载失败" + t), e && e();
                    }),
                    r.onClose(function () {
                        console.log("插屏广告 关闭"), t && t();
                    });
            } else t();
        }),
        (t.getLaunchOptionsSync_csryw = function () {
            if (n.default.is_WECHAT_GAME_csryw()) {
                var t = window.wx.getLaunchOptionsSync();
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
            n.default.is_WECHAT_GAME_csryw() &&
                (console.log("小游戏设置转发按钮"),
                window.wx.showShareMenu({withShareTicket: !1, success: o, fail: i, complete: r}),
                window.wx.onShareAppMessage(function () {
                    return {title: t, imageUrl: e};
                }));
        }),
        (t.checkUpdate_csryw = function () {
            if (n.default.is_WECHAT_GAME_csryw()) {
                var t = window.wx.getUpdateManager();
                t.onCheckForUpdate(function (t) {
                    console.log("是否需要更新 : ", t.hasUpdate);
                }),
                    t.onUpdateReady(function () {
                        window.wx.showModal({
                            title: "更新提示",
                            content: "新版本已经准备好，是否重启小游戏？",
                            success: function (e) {
                                e.confirm && t.applyUpdate();
                            }
                        });
                    }),
                    t.onUpdateFailed(function () {
                        console.log("新版本下载失败!!!");
                    });
            }
        }),
        (t.tryShowWXCrazyClick_csryw = function () {
            if (
                !s.default.wudianFlag_csryw ||
                1 != r.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.kuangdianBanner_csryw
            )
                return !1;
            var e = r.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.kuangdianLevelSpcacing_csryw;
            return (
                0 == e ||
                (console.log(
                    " WXAPI._crazyClickShowCounter_csryw = " +
                        t._crazyClickShowCounter_csryw +
                        " (kuangdianLevelSpcacing - 1) = " +
                        (e - 1)
                ),
                t._crazyClickShowCounter_csryw == e - 1
                    ? ((t._crazyClickShowCounter_csryw = 0), !0)
                    : (t._crazyClickShowCounter_csryw++, !1))
            );
        }),
        (t.GameRecorder_csryw = new a()),
        (t._isRegRewardedVideoAdEvent_csryw = !1),
        (t._onRewardedVideoAdFailed_csryw = null),
        (t._onRewardedVideoAdClose_csryw = null),
        (t._onShow_csryw = null),
        (t._lastShareTime_csryw = 0),
        (t._crazyClickShowCounter_csryw = 0),
        t
    );
})();
o.default = c;
