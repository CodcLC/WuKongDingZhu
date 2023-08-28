var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("QQMiniGameAPI"),
    i = t("WXAPI"),
    r = t("AppSwitchConfig"),
    s = t("EventEnum"),
    a = t("EventMgr"),
    c = t("HttpUnit"),
    l = t("AppPlatform"),
    d = (function () {
        function t() {}
        return (
            (t.ryw_IpBlockFlag_csryw = function () {
                return t.ipBlockFlag_csryw;
            }),
            (t.UpdateIpBlockState_csryw = function (e) {
                c.default.GetIpBlock_csryw(function (o) {
                    console.log("调用IpBlock接口成功,结果为:", o),
                        (t.ipBlockFlag_csryw = o.code),
                        a.default.emitEvent_csryw(s.ryw_Event.ryw_App_OnUpdateIpBlockState_csryw, {
                            ipBlockFlag: t.ipBlockFlag_csryw
                        }),
                        e && e();
                }, null);
            }),
            (t.ryw_GetIpBlocked_csryw = function () {
                return 0 == t.ipBlockFlag_csryw;
            }),
            (t.ryw_IsSwitchOpen_csryw = function () {
                var t = 1 == r.default.getInstance_csryw().getAppSwitchData_csryw().wudian_csryw,
                    e = r.default.getInstance_csryw().getAppSwitchData_csryw().wudianTimeAvaliable_csryw;
                return console.log("误点 Flag_csryw 状态: ", "总开关:", t, "打开时间", e), t && e;
            }),
            Object.defineProperty(t, "wudianFlag_noIpBlock_csryw", {
                get: function () {
                    var t = 1 == r.default.getInstance_csryw().getAppSwitchData_csryw().wudian_csryw,
                        e = r.default.getInstance_csryw().getAppSwitchData_csryw().wudianTimeAvaliable_csryw,
                        o = l.default.getLaunchOptionsSync_csryw().scene;
                    l.default.is_TT_GAME_csryw() && ((t = !0), (e = !0));
                    for (
                        var n = !0,
                            i = r.default.getInstance_csryw().getAppSwitchData_csryw().wudianSceneList_csryw,
                            s = 0;
                        s < i.length;
                        ++s
                    )
                        o == i[s] && (n = !1);
                    return (
                        console.log("误点 Flag_csryw 状态: ", "总开关:", t, "场景进入", n, "打开时间", e), t && n && e
                    );
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "wudianFlag_csryw", {
                get: function () {
                    var t = 1 == r.default.getInstance_csryw().getAppSwitchData_csryw().wudian_csryw,
                        e = r.default.getInstance_csryw().getAppSwitchData_csryw().wudianTimeAvaliable_csryw,
                        o = 0 == this.ipBlockFlag_csryw,
                        n = l.default.getLaunchOptionsSync_csryw().scene;
                    l.default.is_TT_GAME_csryw() && ((t = !0), (e = !0));
                    for (
                        var i = !0,
                            s = r.default.getInstance_csryw().getAppSwitchData_csryw().wudianSceneList_csryw,
                            a = 0;
                        a < s.length;
                        ++a
                    )
                        n == s[a] && (i = !1);
                    return (
                        console.log(
                            "误点 Flag_csryw 状态: ",
                            "总开关:",
                            t,
                            "场景进入",
                            i,
                            "IP未被屏蔽",
                            o,
                            "打开时间",
                            e
                        ),
                        t && i && o && e
                    );
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "NoTimeWudianFlag_csryw", {
                get: function () {
                    for (
                        var e = 1 == r.default.getInstance_csryw().getAppSwitchData_csryw().wudian_csryw,
                            o = l.default.getLaunchOptionsSync_csryw().scene,
                            n = !0,
                            i = r.default.getInstance_csryw().getAppSwitchData_csryw().wudianSceneList_csryw,
                            s = 0;
                        s < i.length;
                        ++s
                    )
                        o == i[s] && (n = !1);
                    var a = 0 == t.ipBlockFlag_csryw;
                    return (
                        console.log("误点 Flag_csryw 状态: ", "总开关:", e, "场景进入", n, "IP未被屏蔽"), e && n && a
                    );
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "isEnterBySerach_csryw", {
                get: function () {
                    var t = null;
                    l.default.is_WECHAT_GAME_csryw()
                        ? (t = i.default.getLaunchOptionsSync_csryw().scene)
                        : l.default.is_QQ_PLAY_csryw() && (t = n.default.getLaunchOptionsSync_csryw().scene);
                    for (var e = !0, o = [1011, 1012, 1013, 1047], r = 0; r < o.length; ++r) t == o[r] && (e = !1);
                    return console.log("场景进入", e), e;
                },
                enumerable: !1,
                configurable: !0
            }),
            (t.ipBlockFlag_csryw = -1),
            t
        );
    })();
o.default = d;
