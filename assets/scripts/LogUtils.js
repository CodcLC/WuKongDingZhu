var t = require;
var e = module;
var o = exports;
var n =
    (this && this.__spreadArrays) ||
    function () {
        for (var t = 0, e = 0, o = arguments.length; e < o; e++) t += arguments[e].length;
        var n = Array(t),
            i = 0;
        for (e = 0; e < o; e++) for (var r = arguments[e], s = 0, a = r.length; s < a; s++, i++) n[i] = r[s];
        return n;
    };
Object.defineProperty(o, "__esModule", {value: !0}), (o.LogUtils = void 0);
var i = (function () {
    function t() {}
    return (
        (t.setLogStatus = function (e) {
            t._logStatus_csryw = e;
        }),
        (t.log_csryw = function (e) {
            for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
            t._logStatus_csryw && console.log.apply(console, n(["[log][", t.getFullTime_csryw(), "]", ":", e], o));
        }),
        (t.info_csryw = function (e) {
            for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
            t._logStatus_csryw && console.debug.apply(console, n(["[debug][", t.getFullTime_csryw(), "]", ":", e], o));
        }),
        (t.warn_csryw = function (e) {
            for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
            t._logStatus_csryw && console.warn.apply(console, n(["[warn][", t.getFullTime_csryw(), "]", ":", e], o));
        }),
        (t.error_csryw = function (e) {
            for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
            t._logStatus_csryw && console.error.apply(console, n(["[error][", t.getFullTime_csryw(), "]", ":", e], o));
        }),
        (t.networkLog_csryw = function (e) {
            for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
            t._logStatus_csryw && console.log.apply(console, n(["[network][", t.getFullTime_csryw(), "]", ":", e], o));
        }),
        (t.networkError_csryw = function (e) {
            for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
            t._logStatus_csryw &&
                console.error.apply(console, n(["[network][", t.getFullTime_csryw(), "]", ":", e], o));
        }),
        (t.getFullTime_csryw = function () {
            var t = new Date();
            return t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + "-" + t.getMilliseconds();
        }),
        (t._logStatus_csryw = !0),
        t
    );
})();
(o.LogUtils = i), (window.LogUtils = i);
