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
    l = a.property,
    d = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.zbj_tsj = null), (e.weak_factor = 0), (e.index = 0), e;
        }
        return (
            i(e, t),
            (e.prototype.Init = function (t, e) {
                (this.index = t), (this.weak_factor = e);
            }),
            (e.prototype.onEnable = function () {
                this.zbj_tsj
                    ? this.zbj_tsj.setAnimation(0, "play", !0)
                    : (cc.Tween.stopAllByTarget(this.node),
                      cc
                          .tween(this.node)
                          .to(0.5, {opacity: 100})
                          .to(0.5, {opacity: 255})
                          .union()
                          .repeatForever()
                          .start());
            }),
            (e.prototype.onCollisionEnter = function (t) {
                -1 != t.node.name.indexOf("e_") &&
                    0 != this.index &&
                    t.node.getComponent(s.default).AddAppendWeak(this.weak_factor, 999, this.index);
            }),
            (e.prototype.onCollisionExit = function (t) {
                -1 != t.node.name.indexOf("e_") &&
                    0 != this.index &&
                    t.node.getComponent(s.default).AddAppendWeak(this.weak_factor, 999, this.index);
            }),
            r([l(sp.Skeleton)], e.prototype, "zbj_tsj", void 0),
            r([c], e)
        );
    })(cc.Component);
o.default = d;
