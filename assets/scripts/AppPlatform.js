var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("LogUtils"),
    i = t("AppConfig"),
    r = t("EventMgr"),
    s = t("EventEnum"),
    a = t("RYPlatformMgr"),
    c = t("TTAPI"),
    l = t("OPPOAPI"),
    d = t("VIVOAPI"),
    u = t("QQMiniGameAPI"),
    h = t("WXAPI"),
    f = t("UmengMgr"),
    p = t("KSAPI"),
    _ = (function () {
        function t() {}
        return (
            (t.loginPlatform_csryw = function (e, o, i) {
                if (t.is_KS_csryw())
                    p.default.login_csryw(
                        function (t) {
                            e(t);
                        },
                        function (t) {
                            o(t);
                        }
                    );
                else if (t.is_TT_GAME_csryw())
                    c.default.ttLogin_csryw(
                        function (t) {
                            e(t);
                        },
                        function () {
                            o();
                        }
                    );
                else if (t.is_WECHAT_GAME_csryw())
                    h.default.wxLogin_csryw(function (t) {
                        e(t);
                    }, null);
                else if (t.is_OPPO_GAME_csryw())
                    l.default.initAdService_csryw(
                        function () {},
                        function () {},
                        function () {}
                    ),
                        l.default.Login_csryw(function (t) {
                            e(t);
                        }, null);
                else if (t.is_QQ_PLAY_csryw())
                    u.default.Login_csryw(function (t) {
                        e(t);
                    }, null);
                else if (t.is_VIVO_GAME_csryw()) {
                    var r = 0,
                        s = function (t) {
                            e(t);
                        },
                        a = function () {
                            if (r >= 1) return console.log("vivo 登陆失败！！！重试次数已达上限"), void o();
                            d.default.showDialog_csryw(
                                "提示",
                                "登录失败，点击确定按钮重试",
                                [{text: "确定", color: "#33dd44"}],
                                function () {
                                    d.default.Login_csryw(
                                        function (t) {
                                            s(t);
                                        },
                                        function () {
                                            a();
                                        }
                                    ),
                                        ++r;
                                },
                                function () {},
                                function () {}
                            );
                        };
                    d.default.Login_csryw(
                        function (t) {
                            s(t);
                        },
                        function () {
                            a();
                        }
                    );
                } else
                    t.is_Android_csryw() || t.is_Iphone_csryw()
                        ? n.LogUtils.log_csryw("playVideo android ios 未实现")
                        : i
                        ? i()
                        : o();
            }),
            (t.loadSubpackageFinish_csryw = function () {}),
            (t.playVideo_csryw = function (e) {
                t.is_KS_csryw()
                    ? p.default.showRewardedVideoAd_csryw(e.onClose, e.onFailed, e.onClose)
                    : t.is_WECHAT_GAME_csryw()
                    ? h.default.showRewardedVideoAd_csryw(e.onClose, e.onFailed, e.name)
                    : t.is_TT_GAME_csryw()
                    ? c.default.showRewardedVideoAd_csryw("未知", e.onClose, e.onFailed)
                    : t.is_VIVO_GAME_csryw()
                    ? d.default.showRewardedVideoAd_csryw(e.onClose, e.onFailed)
                    : t.is_OPPO_GAME_csryw()
                    ? l.default.showRewardedVideoAd_csryw(e.onClose, e.onFailed)
                    : t.is_QQ_PLAY_csryw()
                    ? u.default.showRewardedVideoAd_csryw(e.onClose, e.onFailed)
                    : t.is_Android_csryw() || t.is_Iphone_csryw()
                    ? n.LogUtils.log_csryw("playVideo android ios 未实现")
                    : (n.LogUtils.log_csryw("playVideo 其他平台 未实现"), e.onClose && e.onClose(!0));
            }),
            (t.showToast_csryw = function (e) {
                t.is_WECHAT_GAME_csryw() ||
                    (t.is_TT_GAME_csryw()
                        ? window.tt.showToast({title: e, icon: "none"})
                        : t.is_VIVO_GAME_csryw()
                        ? window.qg.showToast({message: e})
                        : t.is_OPPO_GAME_csryw()
                        ? window.qg.showToast({title: e, icon: "none"})
                        : t.is_QQ_PLAY_csryw()
                        ? window.qq.showToast({title: e, icon: "none"})
                        : t.is_Android_csryw() ||
                          t.is_Iphone_csryw() ||
                          n.LogUtils.log_csryw("showToast 其他平台 未实现"));
            }),
            (t.checkUpdate_csryw = function () {
                var e = "";
                if ((t.is_WECHAT_GAME_csryw() ? (e = "wx") : t.is_TT_GAME_csryw() && (e = "tt"), "" != e)) {
                    console.log("启动了版本更新机制。。。。");
                    var o = window[e].getUpdateManager();
                    o.onCheckForUpdate(function (t) {
                        console.log("是否需要更新 : ", t.hasUpdate);
                    }),
                        o.onUpdateReady(function () {
                            window[e].showModal({
                                title: "更新提示",
                                content: "新版本已经准备好，是否重启小游戏？",
                                success: function (t) {
                                    t.confirm && o.applyUpdate();
                                }
                            });
                        }),
                        o.onUpdateFailed(function () {
                            console.log("新版本下载失败!!!");
                        });
                }
            }),
            (t.navigateToMiniProgram_csryw = function (e, o) {
                e &&
                    (n.LogUtils.log_csryw("跳转游戏： " + e.title),
                    t.is_TT_GAME_csryw()
                        ? c.default.showMoreGamesModal_csryw(
                              function () {
                                  n.LogUtils.log_csryw("跳转成功");
                              },
                              function () {
                                  n.LogUtils.log_csryw("跳转失败"),
                                      r.default.emitEvent_csryw(s.ryw_Event.ryw_ADKRQ_ClickQuit_csryw);
                              }
                          )
                        : t.is_WECHAT_GAME_csryw()
                        ? (a.default.sendClickAd_csryw(e.id),
                          f.UmengMgr.sendReportAdClickStart_csryw(e.title, e.appid),
                          h.default.navigateToMiniProgram_csryw(
                              e.appid,
                              e.url,
                              function () {
                                  n.LogUtils.log_csryw("跳转成功"),
                                      f.UmengMgr.sendReportAdClickSuccess_csryw(e.title, e.appid),
                                      a.default.sendClickAdAllow_csryw(e.id);
                              },
                              function (t) {
                                  n.LogUtils.log_csryw("跳转失败"),
                                      r.default.emitEvent_csryw(s.ryw_Event.ryw_ADKRQ_ClickQuit_csryw),
                                      "navigateToMiniProgram:fail cancel" == t.errMsg &&
                                          (n.LogUtils.log_csryw("用户取消跳转"),
                                          f.UmengMgr.sendReportAdClickFail_csryw(e.title, e.appid),
                                          r.default.emitEvent_csryw(s.ryw_Event.ryw_ADKRQ_ClickQuit_csryw, o));
                              },
                              function () {
                                  n.LogUtils.log_csryw("跳转完成");
                              }
                          ))
                        : t.is_OPPO_GAME_csryw()
                        ? l.default.navigateToMiniProgram_csryw(
                              e.appid,
                              e.title,
                              e.url,
                              function () {
                                  n.LogUtils.log_csryw("跳转成功");
                              },
                              function () {
                                  n.LogUtils.log_csryw("跳转失败"),
                                      r.default.emitEvent_csryw(s.ryw_Event.ryw_ADKRQ_ClickQuit_csryw);
                              },
                              function () {
                                  n.LogUtils.log_csryw("跳转完成");
                              }
                          )
                        : t.is_QQ_PLAY_csryw()
                        ? u.default.navigateToMiniProgram_csryw(
                              e.appid,
                              e.url,
                              function () {
                                  n.LogUtils.log_csryw("跳转成功");
                              },
                              function () {
                                  n.LogUtils.log_csryw("跳转失败"),
                                      r.default.emitEvent_csryw(s.ryw_Event.ryw_ADKRQ_ClickQuit_csryw);
                              },
                              function () {
                                  n.LogUtils.log_csryw("跳转完成");
                              }
                          )
                        : t.is_VIVO_GAME_csryw() &&
                          d.default.navigateToMiniProgram_csryw(
                              e.appid,
                              e.url,
                              function () {
                                  n.LogUtils.log_csryw("跳转成功");
                              },
                              function () {
                                  n.LogUtils.log_csryw("跳转失败"),
                                      r.default.emitEvent_csryw(s.ryw_Event.ryw_ADKRQ_ClickQuit_csryw);
                              },
                              function () {
                                  n.LogUtils.log_csryw("跳转完成");
                              }
                          ));
            }),
            (t.initGame_csryw = function () {
                t.is_WECHAT_GAME_csryw() ||
                    (t.is_QQ_PLAY_csryw()
                        ? u.default.LoadAppBoxAd_csryw(
                              function () {},
                              function () {}
                          )
                        : t.is_OPPO_GAME_csryw()
                        ? (null != window.qg.reportMonitor &&
                              "function" == typeof window.qg.reportMonitor &&
                              window.qg.reportMonitor("game_scene", 0),
                          l.default.LoadCahcedNativeAd_csryw())
                        : t.is_VIVO_GAME_csryw()
                        ? d.default.LoadCahcedNativeAd_csryw()
                        : t.is_TT_GAME_csryw());
            }),
            (t.is_KS_csryw = function () {
                return null != window.kwaigame;
            }),
            (t.is_WECHAT_GAME_csryw = function () {
                return 0 == i.default.isWX_TT_QQ_MiniGame_csryw && cc.sys.platform == cc.sys.WECHAT_GAME;
            }),
            (t.is_QQ_PLAY_csryw = function () {
                return cc.sys.platform == cc.sys.WECHAT_GAME && 2 == i.default.isWX_TT_QQ_MiniGame_csryw;
            }),
            (t.is_OPPO_GAME_csryw = function () {
                return cc.sys.platform == cc.sys.OPPO_GAME;
            }),
            (t.is_VIVO_GAME_csryw = function () {
                return cc.sys.platform == cc.sys.VIVO_GAME;
            }),
            (t.is_TT_GAME_csryw = function () {
                return cc.sys.platform == cc.sys.BYTEDANCE_GAME;
            }),
            (t.is_Xiaomi_GAME_csryw = function () {
                return cc.sys.platform == cc.sys.XIAOMI_GAME;
            }),
            (t.is_Android_csryw = function () {
                return cc.sys.platform == cc.sys.ANDROID;
            }),
            (t.isIphoneX_csryw = function () {
                if (this.is_Iphone_csryw()) {
                    var t = cc.sys.windowPixelResolution;
                    if ((2436 == t.width && 1125 == t.height) || (2436 == t.height && 1125 == t.width)) return !0;
                    if ((2688 == t.width && 1242 == t.height) || (2688 == t.height && 1242 == t.width)) return !0;
                    if ((1792 == t.width && 828 == t.height) || (1792 == t.height && 828 == t.width)) return !0;
                }
                return !1;
            }),
            (t.is_Iphone_csryw = function () {
                return cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD;
            }),
            (t.getLaunchOptionsSync_csryw = function () {
                var e = null;
                if (t.is_TT_GAME_csryw()) {
                    e = window.tt.getLaunchOptionsSync();
                    var o = JSON.stringify(e);
                    return n.LogUtils.log_csryw("场景值: " + o), e;
                }
                if (t.is_WECHAT_GAME_csryw())
                    return (
                        (e = window.wx.getLaunchOptionsSync()),
                        (o = JSON.stringify(e)),
                        n.LogUtils.log_csryw("场景值: " + o),
                        e
                    );
                if (t.is_OPPO_GAME_csryw()) {
                    var i = window.qg.getLaunchOptionsSync();
                    return (
                        null != i && "" != i
                            ? (e = i)
                            : ((e = {query: "", referrerInfo: {package: "", extraData: {appid: ""}}}),
                              console.log("没有启动设置！！！")),
                        (o = JSON.stringify(e)),
                        n.LogUtils.log_csryw("场景值: " + o),
                        e
                    );
                }
                return t.is_QQ_PLAY_csryw()
                    ? ((e = window.qq.getLaunchOptionsSync()),
                      (o = JSON.stringify(e)),
                      n.LogUtils.log_csryw("场景值: " + o),
                      e)
                    : (t.is_VIVO_GAME_csryw(), {});
            }),
            (t.startRecord_csryw = function () {
                t.is_KS_csryw()
                    ? p.default.startRecord_csryw()
                    : t.is_TT_GAME_csryw()
                    ? c.default.startRecord_csryw()
                    : n.LogUtils.log_csryw("startRecord 其他平台 未实现");
            }),
            (t.stopRecord_csryw = function () {
                t.is_KS_csryw()
                    ? p.default.stopRecord_csryw()
                    : t.is_TT_GAME_csryw()
                    ? c.default.stopRecord_csryw()
                    : n.LogUtils.log_csryw("stopRecord 其他平台 未实现");
            }),
            (t.shareRecord_csryw = function () {
                t.is_KS_csryw()
                    ? p.default.shareRecord_csryw()
                    : t.is_TT_GAME_csryw()
                    ? c.default.shareRecord_csryw()
                    : n.LogUtils.log_csryw("shareRecord 其他平台 未实现");
            }),
            (t.PlatformResSubName_csryw = "PlatformRes"),
            (t.isBackGameWX = !1),
            t
        );
    })();
o.default = _;
