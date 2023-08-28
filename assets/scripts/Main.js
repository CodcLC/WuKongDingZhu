var t = require;
var e = module;
var o = exports;
var n,
    i =
        (this && this.__extends) ||
        ((n = function (t, e) {
            return (n =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
        }),
        function (t, e) {
            function o() {
                this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
        }),
    r =
        (this && this.__decorate) ||
        function (t, e, o, n) {
            var i,
                r = arguments.length,
                s = r < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
            return r > 3 && s && Object.defineProperty(e, o, s), s;
        };
Object.defineProperty(o, "__esModule", {value: !0});
var s = t("LoadingView"),
    a = t("AppPlatform"),
    c = t("AppConfig"),
    l = t("AppSwitchConfig"),
    d = t("LogUtils"),
    u = t("BundleMgr"),
    h = t("GameMgr"),
    f = t("User"),
    p = t("RYSDK"),
    _ = t("ResSubMgr"),
    y = t("KSAPI"),
    g = t("ConfigMgr"),
    w = t("DataMgr"),
    m = t("GameHttpMgr"),
    v = cc._decorator,
    b = v.ccclass,
    S = v.property,
    M = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.loadingPrefab = null),
                (e.loadSubpackageTotal_csryw = 0.8),
                (e.loadHttpNetworkTotal_csryw = 1),
                (e.subpackageIndex_csryw = 0),
                (e.subpackageSum_csryw = 0),
                (e.needProcessNum_csryw = 0),
                (e.loadingState_csryw = 0),
                (e.loadingSpeed_csryw = 0),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.onLoad = function () {
                var t = this;
                console.log("版本：", 9),
                    a.default.is_TT_GAME_csryw()
                        ? ((c.default.AppID_csryw = c.default.TT_APP_ID_csryw),
                          (c.default.state_csryw = c.default.TT_state_csryw),
                          (c.default.gameid_csryw = c.default.TT_gameid_csryw),
                          (c.default.ResServer_csryw = c.default.TT_ResServer_csryw),
                          (c.default.Versions_csryw = c.default.TT_Versions_csryw),
                          (c.default.UseRYSDK_csryw = !1),
                          (c.default.LoopAdLocationID_csryw = c.default.TT_LoopAdLocationID_csryw),
                          (c.default.BannerAdLocationID_csryw = c.default.TT_BannerAdLocationID_csryw),
                          (c.default.InsertAdLocationID_csryw = c.default.TT_InsertAdLocationID_csryw),
                          (c.default.AniAdLocationID_csryw = c.default.TT_AniAdLocationID_csryw),
                          (c.default.HistoryLocationID_csryw = c.default.TT_HistoryLocationID_csryw),
                          (c.default.MoreGameLocationID_csryw = c.default.TT_MoreGameLocationID_csryw))
                        : a.default.is_KS_csryw()
                        ? (console.log(" --- mian kwaigame ===== "),
                          y.default.init_csryw(),
                          (c.default.AppID_csryw = y.default.App_ID),
                          (c.default.ResServer_csryw = c.default.KS_ResServer_csryw),
                          (c.default.Versions_csryw = c.default.KS_Versions_csryw),
                          (c.default.UseRYSDK_csryw = !1))
                        : a.default.is_WECHAT_GAME_csryw()
                        ? ((c.default.AppID_csryw = c.default.WX_APP_ID_csryw),
                          (c.default.state_csryw = c.default.WX_state_csryw),
                          (c.default.gameid_csryw = c.default.WX_gameid_csryw),
                          (c.default.ResServer_csryw = c.default.WX_ResServer_csryw),
                          (c.default.Versions_csryw = c.default.WX_Versions_csryw),
                          (c.default.UseRYSDK_csryw = !0),
                          c.default.closeUseRYSDK_csryw && (c.default.UseRYSDK_csryw = !1),
                          (c.default.LoopAdLocationID_csryw = c.default.WX_LoopAdLocationID_csryw),
                          (c.default.BannerAdLocationID_csryw = c.default.WX_BannerAdLocationID_csryw),
                          (c.default.InsertAdLocationID_csryw = c.default.WX_InsertAdLocationID_csryw),
                          (c.default.AniAdLocationID_csryw = c.default.WX_AniAdLocationID_csryw),
                          (c.default.HistoryLocationID_csryw = c.default.WX_HistoryLocationID_csryw),
                          (c.default.MoreGameLocationID_csryw = c.default.WX_MoreGameLocationID_csryw))
                        : a.default.is_QQ_PLAY_csryw()
                        ? ((c.default.AppID_csryw = c.default.QQ_APP_ID_csryw),
                          (c.default.state_csryw = c.default.QQ_state_csryw),
                          (c.default.gameid_csryw = c.default.QQ_gameid_csryw),
                          (c.default.ResServer_csryw = c.default.QQ_ResServer_csryw),
                          (c.default.Versions_csryw = c.default.QQ_Versions_csryw),
                          (c.default.UseRYSDK_csryw = !1),
                          (c.default.LoopAdLocationID_csryw = c.default.QQ_LoopAdLocationID_csryw),
                          (c.default.BannerAdLocationID_csryw = c.default.QQ_BannerAdLocationID_csryw),
                          (c.default.InsertAdLocationID_csryw = c.default.QQ_InsertAdLocationID_csryw),
                          (c.default.AniAdLocationID_csryw = c.default.QQ_AniAdLocationID_csryw),
                          (c.default.HistoryLocationID_csryw = c.default.QQ_HistoryLocationID_csryw),
                          (c.default.MoreGameLocationID_csryw = c.default.QQ_MoreGameLocationID_csryw))
                        : a.default.is_OPPO_GAME_csryw()
                        ? ((c.default.AppID_csryw = c.default.OPPO_APP_ID_csryw),
                          (c.default.state_csryw = c.default.OPPO_state_csryw),
                          (c.default.gameid_csryw = c.default.OPPO_gameid_csryw),
                          (c.default.ResServer_csryw = c.default.OPPO_ResServer_csryw),
                          (c.default.Versions_csryw = c.default.OPPO_Versions_csryw),
                          (c.default.UseRYSDK_csryw = !1),
                          (c.default.LoopAdLocationID_csryw = c.default.OPPO_LoopAdLocationID_csryw),
                          (c.default.BannerAdLocationID_csryw = c.default.OPPO_BannerAdLocationID_csryw),
                          (c.default.InsertAdLocationID_csryw = c.default.OPPO_InsertAdLocationID_csryw),
                          (c.default.AniAdLocationID_csryw = c.default.OPPO_AniAdLocationID_csryw),
                          (c.default.HistoryLocationID_csryw = c.default.OPPO_HistoryLocationID_csryw),
                          (c.default.MoreGameLocationID_csryw = c.default.OPPO_MoreGameLocationID_csryw))
                        : a.default.is_VIVO_GAME_csryw()
                        ? ((c.default.AppID_csryw = c.default.VIVO_APP_ID_csryw),
                          (c.default.state_csryw = c.default.VIVO_state_csryw),
                          (c.default.gameid_csryw = c.default.VIVO_gameid_csryw),
                          (c.default.ResServer_csryw = c.default.VIVO_ResServer_csryw),
                          (c.default.Versions_csryw = c.default.VIVO_Versions_csryw),
                          (c.default.UseRYSDK_csryw = !1),
                          (c.default.LoopAdLocationID_csryw = c.default.VIVO_LoopAdLocationID_csryw),
                          (c.default.BannerAdLocationID_csryw = c.default.VIVO_BannerAdLocationID_csryw),
                          (c.default.InsertAdLocationID_csryw = c.default.VIVO_InsertAdLocationID_csryw),
                          (c.default.AniAdLocationID_csryw = c.default.VIVO_AniAdLocationID_csryw),
                          (c.default.HistoryLocationID_csryw = c.default.VIVO_HistoryLocationID_csryw),
                          (c.default.MoreGameLocationID_csryw = c.default.VIVO_MoreGameLocationID_csryw))
                        : a.default.is_Android_csryw() || a.default.is_Iphone_csryw()
                        ? ((c.default.AppID_csryw = c.default.APK_APP_ID_csryw),
                          (c.default.state_csryw = c.default.APK_state_csryw),
                          (c.default.gameid_csryw = c.default.APK_gameid_csryw),
                          (c.default.ResServer_csryw = c.default.APK_ResServer_csryw),
                          (c.default.Versions_csryw = c.default.APK_Versions_csryw),
                          (c.default.UseRYSDK_csryw = !1))
                        : ((c.default.AppID_csryw = c.default.WX_APP_ID_csryw),
                          (c.default.state_csryw = c.default.WX_state_csryw),
                          (c.default.gameid_csryw = c.default.WX_gameid_csryw),
                          (c.default.ResServer_csryw = c.default.WX_ResServer_csryw),
                          (c.default.Versions_csryw = c.default.WX_Versions_csryw),
                          (c.default.UseRYSDK_csryw = !1),
                          (c.default.LoopAdLocationID_csryw = c.default.WX_LoopAdLocationID_csryw),
                          (c.default.BannerAdLocationID_csryw = c.default.WX_BannerAdLocationID_csryw),
                          (c.default.InsertAdLocationID_csryw = c.default.WX_InsertAdLocationID_csryw),
                          (c.default.AniAdLocationID_csryw = c.default.WX_AniAdLocationID_csryw),
                          (c.default.HistoryLocationID_csryw = c.default.WX_HistoryLocationID_csryw),
                          (c.default.MoreGameLocationID_csryw = c.default.WX_MoreGameLocationID_csryw)),
                    (this.loadView_csryw = this.loadingPrefab.getComponent(s.default)),
                    (this.subpackageSum_csryw = c.default.subResArray_csryw.length),
                    this.loadView_csryw.setProcess_csryw(0),
                    l.default.getInstance_csryw().loadUrlConfig_csryw(
                        handleFM_csryw(function () {
                            d.LogUtils.log_csryw("加载 AppSwitchConfig 完成"), t.loadSubpackage_csryw();
                        }, this),
                        handleFM_csryw(function () {
                            console.log("加载失败。。。");
                        }, this)
                    ),
                    a.default.checkUpdate_csryw(),
                    w.DataMgr.Load(),
                    g.ConfigMgr.Load(),
                    (cc.director.getCollisionManager().enabled = !0),
                    cc.game.setFrameRate(59);
            }),
            (e.prototype.start = function () {}),
            (e.prototype.loadSubpackage_csryw = function () {
                var t = this,
                    e = this;
                if (this.subpackageIndex_csryw < this.subpackageSum_csryw) {
                    var o = c.default.subResArray_csryw[this.subpackageIndex_csryw],
                        n = ((this.subpackageIndex_csryw + 1) / this.subpackageSum_csryw) * e.loadSubpackageTotal_csryw;
                    this.setStartLoadingPerNum_csryw(n),
                        u.default.loadBundleByName_csryw(
                            o,
                            handleFM_csryw(function (n) {
                                n
                                    ? console.error(n)
                                    : ((e.subpackageIndex_csryw = e.subpackageIndex_csryw + 1),
                                      _.ResSubMgr.loadSubpackageFinish_csryw(
                                          o,
                                          handleFM_csryw(function () {
                                              e.loadSubpackage_csryw();
                                          }, t)
                                      ));
                            }, this)
                        );
                } else this.onLoadResComplate_csryw();
            }),
            (e.prototype.setStartLoadingPerNum_csryw = function (t) {
                this.setLoadingState_csryw(1, t);
            }),
            (e.prototype.setLoadingState_csryw = function (t, e) {
                switch (((this.loadingState_csryw = t), (this.needProcessNum_csryw = e), t)) {
                    case 0:
                        break;
                    case 1:
                        this.loadingSpeed_csryw = 1 / 80;
                        break;
                    case 2:
                        this.loadingSpeed_csryw = 0.005;
                        break;
                    case 3:
                        var o = 1 - this.loadView_csryw.getProcess_csryw();
                        this.loadingSpeed_csryw = o > 0 ? o / 20 : 0.5;
                }
            }),
            (e.prototype.update = function () {
                if (this.loadView_csryw) {
                    var t = this.loadView_csryw.getProcess_csryw(),
                        e = t + this.loadingSpeed_csryw;
                    switch (this.loadingState_csryw) {
                        case 0:
                            break;
                        case 1:
                            e >= 0.7 * this.needProcessNum_csryw &&
                                (e >= this.needProcessNum_csryw && (e = this.needProcessNum_csryw),
                                this.setLoadingState_csryw(2, this.needProcessNum_csryw));
                            break;
                        case 2:
                            e >= this.needProcessNum_csryw && (e = this.needProcessNum_csryw);
                            break;
                        case 3:
                            e >= 1 && ((e = 1), (this.loadingState_csryw = 4));
                    }
                    t != e && this.loadView_csryw.setProcess_csryw(e);
                }
            }),
            (e.prototype.setDownloadOver_csryw = function () {
                this.initGame_csryw(), this.setLoadingState_csryw(3, 1);
            }),
            (e.prototype.onLoadResComplate_csryw = function () {
                this.setStartLoadingPerNum_csryw(this.loadHttpNetworkTotal_csryw),
                    h.default.getInstance_csryw().preloadScene_csryw();
                var t = cc.sys.localStorage.getItem("data" + c.default.AppID_csryw);
                t ? f.default.initiUser_csryw(JSON.parse(t)) : f.default.initiUser_csryw(null),
                    this.setDownloadOver_csryw();
            }),
            (e.prototype.initGame_csryw = function () {
                a.default.is_KS_csryw()
                    ? a.default.loginPlatform_csryw(function () {
                          console.log("登陆成功，进行初始化"), h.default.getInstance_csryw().onLoadToWorldScene_csryw();
                      }, null)
                    : a.default.is_WECHAT_GAME_csryw()
                    ? (console.log("小游戏设置转发按钮"),
                      window.wx.showShareMenu({
                          withShareTicket: !1,
                          success: function () {},
                          fail: function () {},
                          complete: function () {}
                      }),
                      window.wx.onShareAppMessage(function () {
                          return {title: "", imageUrl: ""};
                      }),
                      window.wx.onShow(function () {
                          console.log("微信 显示在前台"), (a.default.isBackGameWX = !0);
                      }),
                      a.default.loginPlatform_csryw(function (t) {
                          console.log("登陆成功，进行初始化"),
                              h.default.getInstance_csryw().onLoadToWorldScene_csryw(),
                              c.default.UseRYSDK_csryw && p.default.init_csryw(t);
                      }, null))
                    : a.default.is_TT_GAME_csryw()
                    ? a.default.loginPlatform_csryw(function (t) {
                          console.log("登陆成功，进行初始化"),
                              f.default.setGameCode(t),
                              m.default.getInstance().UserLoginActive("", "", "", null, null),
                              h.default.getInstance_csryw().onLoadToWorldScene_csryw();
                      }, null)
                    : h.default.getInstance_csryw().onLoadToWorldScene_csryw();
            }),
            (e.isBack_csryw = !1),
            r([S({tooltip: "加载页面预支", type: cc.Node})], e.prototype, "loadingPrefab", void 0),
            r([b], e)
        );
    })(cc.Component);
o.default = M;
