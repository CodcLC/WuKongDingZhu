var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("AppConfig"),
    i = t("HttpUnit"),
    r = t("RYAD"),
    s = t("RYSDK"),
    a = t("LogUtils"),
    c = (function () {
        function t() {}
        return (
            (t.sendClickAd_csryw = function (t) {
                n.default.UseRYSDK_csryw &&
                    (a.LogUtils.info_csryw("运营上报：点击广告" + t),
                    s.default.Instance_csryw.STAT_csryw.reportClickAd_csryw(t));
            }),
            (t.sendClickAdAllow_csryw = function (t) {
                n.default.UseRYSDK_csryw &&
                    (a.LogUtils.info_csryw("运营上报：点击广告成功 " + t),
                    s.default.Instance_csryw.STAT_csryw.reportClickAdAllow_csryw(t));
            }),
            (t.getAD_csryw = function (t, e, o) {
                return !!n.default.UseRYSDK_csryw && (s.default.Instance_csryw.AD_csryw.getAD_csryw(t, e, o), !0);
            }),
            (t.getADList_csryw = function (t, e, o) {
                this.getRYWADVData_csryw(
                    t,
                    function (t) {
                        if (t.result && t.result.list) {
                            var n = t.result.list;
                            1 == o && r.default.sortDatas_csryw(n), e(n);
                        } else a.LogUtils.networkError_csryw("获取到广告数据  为NULL"), e(null);
                    },
                    function () {
                        a.LogUtils.networkError_csryw("获取到广告数据  为NULL"), e(null);
                    }
                );
            }),
            (t.getRYWADVData_csryw = function (t, e, o) {
                var n = Date.now(),
                    r = new i.requestData();
                (r.url_csryw = this.urlRYWAdv_csryw),
                    (r.data_csryw.timelog = n),
                    (r.data_csryw.key = t),
                    (r.onSuccess_csryw = e),
                    (r.onFail_csryw = o);
                for (var s, c = r.onFail_csryw, l = "", d = 0, u = Object.keys(r.data_csryw); d < u.length; d++) {
                    var h = u[d];
                    l += h + "=" + r.data_csryw[h] + "&";
                }
                (s = l),
                    i.default.sendHttpUrl_csryw(
                        r,
                        s,
                        function (t) {
                            a.LogUtils.networkLog_csryw(t, "http Success"),
                                r.onSuccess_csryw && r.onSuccess_csryw(t),
                                (r.onSuccess_csryw = null),
                                (r = null);
                        },
                        function (t) {
                            a.LogUtils.networkLog_csryw(t, "http fail"),
                                c && c(t),
                                r && (r.onFail_csryw = null),
                                (c = null),
                                (r = null);
                        },
                        {"Content-Type": "application/x-www-form-urlencoded", au: "renyou"}
                    );
            }),
            (t.urlRYWAdv_csryw = "https://javasttts.renyouwangluo.cn/api/data/product/2result"),
            t
        );
    })();
o.default = c;
