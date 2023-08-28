var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("RYAD"),
    i = t("RYSTAT"),
    r = (function () {
        function t() {
            (this._ad_csryw = null), (this._stat_csryw = null), (this._rysdk_csryw = null);
        }
        return (
            Object.defineProperty(t, "Instance_csryw", {
                get: function () {
                    return (
                        null == t._instance_csryw &&
                            console.error("请先调用 RYSDK.init() 对RYSDK进行初始化！！！！！！"),
                        t._instance_csryw
                    );
                },
                enumerable: !1,
                configurable: !0
            }),
            (t.init_csryw = function () {
                if (null == t._instance_csryw) {
                    console.log("初始化 RYSDK ！！！！！！");
                    var e = new t();
                    (e._ad_csryw = new n.default()),
                        (e._stat_csryw = new i.default()),
                        (t._instance_csryw = e),
                        null != window.rysdk &&
                            (window.rysdk.ry_init(),
                            (t._instance_csryw._rysdk_csryw = window.rysdk),
                            t.Instance_csryw.STAT_csryw.reportInit_csryw(),
                            t.Instance_csryw.STAT_csryw.reportLogin_csryw());
                } else console.error("请不要重复初始化 RYSDK ！！！！！！");
            }),
            Object.defineProperty(t.prototype, "AD_csryw", {
                get: function () {
                    return this._ad_csryw;
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "STAT_csryw", {
                get: function () {
                    return this._stat_csryw;
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "rysdk_csryw", {
                get: function () {
                    return this._rysdk_csryw;
                },
                enumerable: !1,
                configurable: !0
            }),
            (t._instance_csryw = null),
            t
        );
    })();
o.default = r;
