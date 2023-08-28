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
var s = t("BulletBase"),
    a = cc._decorator,
    c = a.ccclass,
    l = a.property,
    d = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.bullet_sp = null), (e.img = null), e;
        }
        return (
            i(e, t),
            (e.prototype.InitOther = function () {
                this.img.spriteFrame || (this.img.spriteFrame = this.belong_fight.bullet_spr[this.belong_fight.lv - 1]),
                    (this.img.node.active = !0),
                    (this.bullet_sp.enabled = !1);
            }),
            (e.prototype.OnFlyOver = function () {
                this.OnRecycle();
            }),
            (e.prototype.OnHitOver = function () {
                var t = this;
                (this.img.node.active = !1),
                    (this.bullet_sp.enabled = !0),
                    this.bullet_sp.setAnimation(0, "lv" + this.belong_fight.lv, !1),
                    this.bullet_sp.setCompleteListener(function () {
                        t.OnRecycle(), t.bullet_sp.setCompleteListener(null);
                    });
            }),
            (e.prototype.OnRecycle = function () {
                this.belong_fight.RecycleBullet(this);
            }),
            r([l(sp.Skeleton)], e.prototype, "bullet_sp", void 0),
            r([l(cc.Sprite)], e.prototype, "img", void 0),
            r([c], e)
        );
    })(s.default);
o.default = d;
