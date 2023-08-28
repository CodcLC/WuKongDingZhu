var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("RYSDK"),
    i = (function () {
        function t() {}
        return (
            (t.prototype.getAD_csryw = function (e, o, i) {
                i = null == i || i;
                var r = {
                    adv_key: e,
                    success: function (e) {
                        if ((console.log("获取到广告数据 RYAD:", e), 200 == e.code)) {
                            var n = e.result.list;
                            null == n && console.error("获取到广告数据  为NULL"), 1 == i && t.sortDatas_csryw(n), o(n);
                        } else console.error("获取到广告数据  为NULL"), o(null);
                    },
                    fail: function () {
                        o(null);
                    },
                    complete: function () {}
                };
                null != n.default.Instance_csryw.rysdk_csryw
                    ? n.default.Instance_csryw.rysdk_csryw.ry_GetAdv(r)
                    : o(null);
            }),
            (t.sortDatas_csryw = function (t) {
                if (null == t || 0 == t.length) return [];
                for (var e = {}, o = new Array(), n = 0; n < t.length; ++n)
                    null == e[(l = t[n]).appid]
                        ? ((e[l.appid] = new Array()), e[l.appid].push(l), o.push(l.appid))
                        : e[l.appid].push(l);
                for (n = 0; n < o.length; ++n) {
                    var i = o[n],
                        r = o[(c = Math.floor(Math.random() * o.length))];
                    (o[c] = i), (o[n] = r);
                }
                for (n = 0; n < o.length; ++n)
                    for (var s = e[(i = o[n])], a = 0; a < s.length; ++a) {
                        var c,
                            l = s[a];
                        (r = s[(c = Math.floor(Math.random() * s.length))]), (s[c] = l), (s[a] = r);
                    }
                for (var d = new Array(); o.length > 0; )
                    if (1 == o.length) {
                        var u = !1;
                        for (s = e[(i = o[0])], n = 0; n < d.length; ++n) {
                            var h = d[n],
                                f = d[n + 1];
                            if (null != f) {
                                if (h.appid != i && f.appid != i) {
                                    if (null != (l = s.shift())) {
                                        var p = d.slice(0, n + 1),
                                            _ = d.slice(n + 1, d.length);
                                        (d = p).push(l);
                                        for (var y = 0; y < _.length; ++y) d.push(_[y]);
                                    }
                                    u = !0;
                                    break;
                                }
                            } else if (h.appid != i) {
                                if (null != (l = s.shift()))
                                    for (
                                        p = d.slice(0, n + 1), _ = d.slice(n + 1, d.length), (d = p).push(l), y = 0;
                                        y < _.length;
                                        ++y
                                    )
                                        d.push(_[y]);
                                u = !0;
                                break;
                            }
                        }
                        (!u || s.length <= 0) && o.splice(0, 1);
                    } else
                        for (n = 0; n < o.length; ++n)
                            (l = (s = e[(i = o[n])]).shift()), d.push(l), s.length <= 0 && (o.splice(n, 1), --n);
                return d;
            }),
            t
        );
    })();
o.default = i;
