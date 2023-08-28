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
            return (e.bullet_sp = null), (e.shouji_sp = null), (e.attack_colider = null), e;
        }
        return (
            i(e, t),
            (e.prototype.start = function () {
                this.bullet_sp.setSkin("lv" + this.belong_fight.lv);
            }),
            (e.prototype.InitOther = function () {
                (this.attack_colider.tag = this.belong_fight.data.index),
                    (this.attack_colider.node.attack_name = "fight"),
                    (this.attack_colider.node.attack_type = "Poison"),
                    (this.attack_colider.node.fight = this.belong_fight),
                    cc.tween(this.bullet_sp.node).to(0.2, {scale: 1}).start(),
                    (this.shouji_sp.node.active = !1);
            }),
            (e.prototype.OnFlyOver = function () {
                this.OnRecycle();
            }),
            (e.prototype.OnHitOver = function () {
                var t = this;
                cc.tween(this.bullet_sp.node).to(0.2, {scale: 0}).start(),
                    this.belong_fight.attack_boom
                        ? ((this.shouji_sp.node.active = !0),
                          this.shouji_sp.setAnimation(0, "play", !1),
                          this.shouji_sp.setCompleteListener(function () {
                              t.OnRecycle(), t.shouji_sp.setCompleteListener(null);
                          }),
                          this.scheduleOnce(function () {
                              t.attack_colider.node.active = !0;
                          }, 0.1),
                          this.scheduleOnce(function () {
                              t.attack_colider.node.active = !1;
                          }, 0.2))
                        : this.OnRecycle();
            }),
            (e.prototype.OnRecycle = function () {
                this.belong_fight.RecycleBullet(this);
            }),
            r([l(sp.Skeleton)], e.prototype, "bullet_sp", void 0),
            r([l(sp.Skeleton)], e.prototype, "shouji_sp", void 0),
            r([l(cc.CircleCollider)], e.prototype, "attack_colider", void 0),
            r([c], e)
        );
    })(s.default);
o.default = d;
