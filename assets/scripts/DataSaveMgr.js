var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.DataSaveMgr = void 0);
var n = (function () {
    function t() {}
    return (
        (t.Save = function (t, e) {
            cc.sys.localStorage.setItem(t, e);
        }),
        (t.Get = function (t, e) {
            var o = cc.sys.localStorage.getItem(t);
            return null == o || 0 == o ? e : JSON.parse(o);
        }),
        (t.StringifyMap = function (t) {
            var e = new i();
            return (
                t.forEach(function (t, o) {
                    e.key.push(o), e.obj.push(JSON.stringify(t));
                }),
                JSON.stringify(e)
            );
        }),
        (t.ParseMap = function (t) {
            for (var e = JSON.parse(t), o = new Map(), n = 0; n < e.key.length; n++)
                o.set(e.key[n], JSON.parse(e.obj[n]));
            return o;
        }),
        (t.StringfyAnyArray = function (t) {
            for (var e = [], o = 0; o < t.length; o++) e.push(JSON.stringify(t[o]));
            return JSON.stringify(e);
        }),
        (t.ParseAnyArray = function (t) {
            for (var e = JSON.parse(t), o = [], n = 0; n < e.length; n++) o.push(JSON.parse(e[n]));
            return o;
        }),
        t
    );
})();
o.DataSaveMgr = n;
var i = function () {
    (this.key = []), (this.obj = []);
};
