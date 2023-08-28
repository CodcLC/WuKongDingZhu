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
var s = t("BaseViewS"),
    a = cc._decorator,
    c = a.ccclass,
    l = a.property,
    d = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.yc_btn = null),
                (e.yc_spr = []),
                (e.hj_btn = null),
                (e.hj_spr = []),
                (e.Scr = null),
                (e.Scr2 = null),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.start = function () {
                this.OnYc();
            }),
            (e.prototype.OnYc = function () {
                this.Scr.active ||
                    ((this.Scr.active = !0),
                    (this.Scr2.active = !1),
                    (this.hj_btn.spriteFrame = this.hj_spr[1]),
                    (this.yc_btn.spriteFrame = this.yc_spr[0]));
            }),
            (e.prototype.OnHj = function () {
                this.Scr2.active ||
                    ((this.Scr.active = !1),
                    (this.Scr2.active = !0),
                    (this.yc_btn.spriteFrame = this.yc_spr[1]),
                    (this.hj_btn.spriteFrame = this.hj_spr[0]));
            }),
            r([l(cc.Sprite)], e.prototype, "yc_btn", void 0),
            r([l(cc.SpriteFrame)], e.prototype, "yc_spr", void 0),
            r([l(cc.Sprite)], e.prototype, "hj_btn", void 0),
            r([l(cc.SpriteFrame)], e.prototype, "hj_spr", void 0),
            r([l(cc.Node)], e.prototype, "Scr", void 0),
            r([l(cc.Node)], e.prototype, "Scr2", void 0),
            r([c], e)
        );
    })(s.default);
o.default = d;
