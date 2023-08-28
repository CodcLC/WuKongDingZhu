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
var s = t("EnemyBase"),
    a = cc._decorator,
    c = a.ccclass,
    l =
        (a.property,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.index = -1), (e.bsz = null), e;
            }
            return (
                i(e, t),
                (e.prototype.Init = function (t, e) {
                    (this.index = t), (this.bsz = e);
                }),
                (e.prototype.onCollisionEnter = function (t) {
                    if (-1 != t.node.name.indexOf("e_") && -1 != this.index) {
                        var e = t.node.getComponent(s.default),
                            o = this.bsz.GetPoisoningDamage();
                        e.InBleed() && (o *= this.bsz.attack_bleed_factor),
                            e.BePoisoning(this.bsz.data.index, o, this.bsz.GetPoisoningTime(), this.index);
                    }
                }),
                r([c], e)
            );
        })(cc.Component));
o.default = l;
