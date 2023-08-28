var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.DateUtils = void 0);
var n = (function () {
    function t() {}
    return (
        (t.getNowTime_csryw = function () {
            return new Date().getTime();
        }),
        (t.formatTime2_csryw = function (t) {
            var e = "",
                o = t / 60,
                n = t - 60 * (o = parseInt(o + ""));
            return (e += o > 9 ? o + "分" : "0" + o + "分") + ((n = parseInt(n + "")) > 9 ? n + "秒" : "0" + n + "秒");
        }),
        (t.formatTime3_csryw = function (t) {
            var e = "",
                o = t / 60,
                n = t - 60 * (o = parseInt(o + ""));
            return (e += o > 9 ? o + ":" : "0" + o + ":") + ((n = parseInt(n + "")) > 9 ? n : "0" + n);
        }),
        (t.formatTime_csryw = function (t) {
            var e = "",
                o = t / 3600,
                n = (t - 3600 * (o = parseInt(o + ""))) / 60,
                i = t - 3600 * o - 60 * (n = parseInt(n + ""));
            return (
                o > 0 && (e += o + ":"),
                (e += n > 9 ? n + ":" : "0" + n + ":") + ((i = parseInt(i + "")) > 9 ? i + "" : "0" + i)
            );
        }),
        (t.millisecondsToDate_csryw = function (t, e) {
            var o = new Date(t),
                n = {
                    "M+": o.getMonth() + 1,
                    "d+": o.getDate(),
                    "h+": o.getHours(),
                    "H+": o.getHours(),
                    "m+": o.getMinutes(),
                    "s+": o.getSeconds(),
                    "q+": Math.floor((o.getMonth() + 3) / 3),
                    S: o.getMilliseconds()
                };
            for (var i in (/(y+)/.test(e) &&
                (e = e.replace(RegExp.$1, (o.getFullYear() + "").substr(4 - RegExp.$1.length))),
            /(E+)/.test(e) &&
                (e = e.replace(
                    RegExp.$1,
                    (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? "星期" : "周") : "") +
                        {0: "日", 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六"}[o.getDay() + ""]
                )),
            n))
                new RegExp("(" + i + ")").test(e) &&
                    (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? n[i] : ("00" + n[i]).substr(("" + n[i]).length)));
            return e;
        }),
        (t.convertDateFromString_csryw = function (t) {
            if (t) {
                var e = t.split(" ")[0].split("/");
                return new Date(e[0], e[1] - 1, e[2]);
            }
        }),
        (t.getMonTimeByNowTime_csryw = function () {
            var t = new Date(),
                e = t.getDay();
            return 0 == e && (e = 7), t.setHours(0, 0, 0, 0), new Date(t.getTime() - 864e5 * (e - 1)).getTime();
        }),
        (t.isSameDay_csryw = function (t, e) {
            void 0 === e && (e = Date.now());
            var o = Number(t),
                n = Number(e);
            if (o && n) {
                var i = new Date(o),
                    r = new Date(n);
                return i.setHours(0, 0, 0, 0) == r.setHours(0, 0, 0, 0);
            }
            return !1;
        }),
        (t.getMonthWeek_csryw = function () {
            var t = new Date(),
                e = (t.getFullYear(), t.getDay(), t.getDate(), t.getDay()),
                o = t.getDate();
            return Math.ceil((o + 6 - e) / 7);
        }),
        t
    );
})();
o.DateUtils = n;
