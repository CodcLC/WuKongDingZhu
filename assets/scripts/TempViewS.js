var t = require;
var e = module;
var o = exports;
var n,
    i =
        (this && this.__extends) ||
        ((n = function (t, e) {
            return (n =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
        }),
        function (t, e) {
            function o() {
                this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
        }),
    r =
        (this && this.__decorate) ||
        function (t, e, o, n) {
            var i,
                r = arguments.length,
                s = r < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
            return r > 3 && s && Object.defineProperty(e, o, s), s;
        };
Object.defineProperty(o, "__esModule", {value: !0});
var s = t("DialogMgr"),
    a = t("ChatDataMgr"),
    c = t("BaseViewS"),
    l = cc._decorator,
    d = l.ccclass,
    u = l.property,
    h = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.label = null), (e.text = "hello"), e;
        }
        return (
            i(e, t),
            (e.prototype.OnOpen = function () {
                var t = a.ChatDataMgr.StartLevelUnlock(-1);
                -1 != t && s.default.openLtPage(t);
            }),
            (e.prototype.OnSure = function () {
                this.node.destroy();
                var t = a.ChatDataMgr.EndLevelUnlock(-1);
                -1 != t && s.default.openLtPage(t);
            }),
            r([u(cc.Label)], e.prototype, "label", void 0),
            r([u], e.prototype, "text", void 0),
            r([d], e)
        );
    })(c.default);
o.default = h;
