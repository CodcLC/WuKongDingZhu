var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.UmengMgr = void 0);
var n,
    i = t("AppPlatform"),
    r = t("LogUtils"),
    s = t("EventMgr"),
    a = t("EventEnum");
(function (t) {
    (t.ReportAdClickSuccess_csryw = "ReportAdClickSuccess"),
        (t.ReportAdClickFail_csryw = "ReportAdClickFail"),
        (t.ReportAdClickStart_csryw = "ReportAdClickStart"),
        (t.ReportLaunchOptions_csryw = "ReportLaunchOptions"),
        (t.LogReportInfo_csryw = "LogReportInfo"),
        (t.LogReportError_csryw = "LogReportError"),
        (t.LoginReportInfo_csryw = "LoginReportInfo"),
        (t.GameEventLVInto_csryw = "Event_LVInto"),
        (t.GameEventLVFinish_csryw = "Event_LVFinish"),
        (t.Event_Commerce_csryw = "Event_Commerce"),
        (t.Event_Custom_csryw = "Event_Custom");
})(n || (n = {}));
var c = (function () {
    function t() {}
    return (
        (t.sendEvent_csryw = function (e, o) {
            i.default.is_WECHAT_GAME_csryw()
                ? t.uma_trackEvent(e, o)
                : i.default.is_Iphone_csryw() || i.default.is_Android_csryw(),
                s.default.emitEvent_csryw(a.ryw_Event.ryw_Umeng_csryw, {event: e});
        }),
        (t.sendReportLaunchOptions_csryw = function (e, o, i) {
            t.sendEvent_csryw(n.ReportLaunchOptions_csryw, {scene: e, dqip: o, ipxq: i});
        }),
        (t.sendReportAdClickSuccess_csryw = function (e, o) {
            t.sendEvent_csryw(n.ReportAdClickSuccess_csryw, {title: e, appid: String(o)});
        }),
        (t.sendReportAdClickFail_csryw = function (e, o) {
            t.sendEvent_csryw(n.ReportAdClickFail_csryw, {title: e, appid: String(o)});
        }),
        (t.sendReportAdClickStart_csryw = function (e, o) {
            t.sendEvent_csryw(n.ReportAdClickStart_csryw, {title: e, appid: String(o)});
        }),
        (t.sendGameEventLvInto_csryw = function (e) {
            t.sendEvent_csryw(n.GameEventLVInto_csryw, {level: e}),
                i.default.is_WECHAT_GAME_csryw() &&
                    window.wx.uma.stage.onStart({stageId: e + "", stageName: "第" + e + "关"});
        }),
        (t.sendGameEventLvFinish_csryw = function (e, o, r, s) {
            var a = "win";
            o || (a = "lose");
            var c = {};
            if (((c.level = e), (c.status = a), (c.duration = r), s))
                for (var l in s)
                    if (Object.prototype.hasOwnProperty.call(s, l)) {
                        var d = s[l];
                        "status" == l ? d && (c.status = "home") : (c[l] = d);
                    }
            if ((t.sendEvent_csryw(n.GameEventLVFinish_csryw, c), i.default.is_WECHAT_GAME_csryw())) {
                var u = 0;
                r && (u = 1e3 * r),
                    window.wx.uma.stage.onEnd({
                        stageId: e + "",
                        stageName: "第" + e + "关",
                        event: o ? "complete" : "fail",
                        _um_sdu: u
                    });
            }
        }),
        (t.sendEvent_Commerce_csryw = function (e) {
            t.sendEvent_csryw(n.Event_Commerce_csryw, e);
        }),
        (t.sendEvent_Custom_csryw = function (e) {
            t.sendEvent_csryw(n.Event_Custom_csryw, e);
        }),
        (t.sendLogReportInfo_csryw = function (e) {
            t.sendEvent_csryw(n.LogReportInfo_csryw, {info: e});
        }),
        (t.sendLogReportError_csryw = function (e) {
            t.sendEvent_csryw(n.LogReportError_csryw, {info: e});
        }),
        (t.sendLoginReportInfo_csryw = function (e, o, i) {
            t.sendEvent_csryw(n.LoginReportInfo_csryw, {type: e, state: o, info: i});
        }),
        (t.uma_trackEvent = function (t, e) {
            i.default.is_WECHAT_GAME_csryw() &&
                (window.wx.uma ? window.wx.uma.trackEvent(t, e) : r.LogUtils.error_csryw("统计事件 无友盟"));
        }),
        t
    );
})();
o.UmengMgr = c;
