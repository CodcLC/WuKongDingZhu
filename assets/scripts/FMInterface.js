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
Object.defineProperty(o, "__esModule", {value: !0}), (o.callFM_csryw = o.handleFM_csryw = o.FMListener = void 0);
var i = function () {};
function r(t, e) {
    return {target: e, callback: t};
}
function s(t) {
    for (var e, o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
    if (t && t.callback) return (e = t.callback).call.apply(e, n([t.target], o));
}
(o.FMListener = i),
    (o.handleFM_csryw = r),
    (o.callFM_csryw = s),
    (window.FMListener = i),
    (window.handleFM_csryw = r),
    (window.callFM_csryw = s);
