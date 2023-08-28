var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.RYSTAT_Event = void 0);
var n,
    i = t("RYSDK"),
    r = t("TimerUtils");
(function (t) {
    (t.RYSTAT_E_INIT_csryw = "init"),
        (t.RYSTAT_E_LOGIN_csryw = "login"),
        (t.RYSTAT_E_ENTRY_SOURCE_csryw = "entrysource"),
        (t.RYSTAT_E_CLICK_AD_csryw = "clickad"),
        (t.RYSTAT_E_CLICK_ALLOW_csryw = "clickad");
})((n = o.RYSTAT_Event || (o.RYSTAT_Event = {})));
var s = (function () {
    function t() {}
    return (
        (t.prototype.SendEvent_csryw = function (t, e, o, n) {
            null != i.default.Instance_csryw.rysdk_csryw &&
                null != i.default.Instance_csryw.rysdk_csryw.ry_SendEvent &&
                i.default.Instance_csryw.rysdk_csryw.ry_SendEvent(t, e, null, o, n);
        }),
        (t.prototype.reportInitFail_csryw = function () {
            null != i.default.Instance_csryw.rysdk_csryw &&
                null != i.default.Instance_csryw.rysdk_csryw.ry_ReportFail &&
                i.default.Instance_csryw.rysdk_csryw.ry_ReportFail();
        }),
        (t.prototype.reportInit_csryw = function () {
            var t = this,
                e = 0,
                o = function () {
                    console.log("init 上报成功!!");
                },
                i = function () {
                    console.log("init 上报失败!!"),
                        e >= 10
                            ? (console.log("init 上报重试次数超过 10次，放弃上报"), t.reportInitFail_csryw())
                            : (++e,
                              r.TimerUtils.once_csryw(function () {
                                  t.SendEvent_csryw(n.RYSTAT_E_INIT_csryw, null, o, i),
                                      console.log("init 第 " + e + " 次重新上报");
                              }, 5));
                };
            this.SendEvent_csryw(n.RYSTAT_E_INIT_csryw, null, o, i);
        }),
        (t.prototype.reportLogin_csryw = function () {
            this.SendEvent_csryw(n.RYSTAT_E_LOGIN_csryw);
        }),
        (t.prototype.reportEntrySource_csryw = function () {
            this.SendEvent_csryw(n.RYSTAT_E_ENTRY_SOURCE_csryw);
        }),
        (t.prototype.reportClickAd_csryw = function (t) {
            this.SendEvent_csryw(n.RYSTAT_E_CLICK_AD_csryw, {adv_id: t, timelog: Date.now(), type: 0});
        }),
        (t.prototype.reportClickAdAllow_csryw = function (t) {
            this.SendEvent_csryw(n.RYSTAT_E_CLICK_ALLOW_csryw, {adv_id: t, timelog: Date.now(), type: 1});
        }),
        t
    );
})();
o.default = s;
