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
var s = t("SoundMgr"),
    a = t("GameSceneS"),
    c = t("EnemyBase"),
    l = cc._decorator,
    d = l.ccclass,
    u = l.property,
    h = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.need_look_at = !1), (e.base_speed = 50), (e.direction = new cc.Vec2(0, 0)), (e.flying = !1), e;
        }
        return (
            i(e, t),
            (e.prototype.BulletTo = function (t, e, o, n, i, r) {
                void 0 === n && (n = 1), void 0 === i && (i = 5), void 0 === r && (r = 1);
                var s = a.default.ins.center_eff_node.convertToNodeSpaceAR(t);
                if (
                    (this.node.setParent(a.default.ins.center_eff_node),
                    this.node.setPosition(s),
                    (this.fly_time = i),
                    (this.speed = r),
                    this.direction.set(e),
                    (this.belong_fight = o),
                    (this.hit_count = n),
                    (this.flying = !0),
                    this.InitOther(),
                    (this.node.active = !0),
                    this.need_look_at)
                ) {
                    var c = (180 * Math.atan2(e.y, e.x)) / Math.PI;
                    this.node.angle = c - 90;
                }
            }),
            (e.prototype.GetSpeed = function () {
                return this.speed * this.base_speed;
            }),
            (e.prototype.onCollisionEnter = function (t) {
                if (this.flying) {
                    var e = t.node;
                    -1 != e.name.indexOf("e_") && this.OnHit(e);
                }
            }),
            (e.prototype.OnHit = function (t) {
                var e = t.getComponent(c.default);
                e
                    ? (this.belong_fight.OnBulletHit(e, this.node), this.SubHitCount())
                    : console.warn("为获取到敌人身上的脚本", t.name);
            }),
            (e.prototype.SubHitCount = function () {
                this.hit_count--, 0 == this.hit_count && ((this.flying = !1), this.OnHitOver()), this.PlayHitSound();
            }),
            (e.prototype.PlayHitSound = function () {
                s.default.playSound_csryw("shouji", 1);
            }),
            (e.prototype.update = function (t) {
                this.flying &&
                    !a.default.ins.GetMyPause() &&
                    ((this.fly_time -= t),
                    this.fly_time <= 0
                        ? ((this.flying = !1), this.OnFlyOver())
                        : ((this.node.x += this.direction.x * t * this.GetSpeed()),
                          (this.node.y += this.direction.y * t * this.GetSpeed())));
            }),
            (e.prototype.InitOther = function () {}),
            (e.prototype.OnFlyOver = function () {}),
            (e.prototype.OnHitOver = function () {}),
            r([u({type: Boolean, tooltip: "子弹是否需要看向敌人"})], e.prototype, "need_look_at", void 0),
            r([d], e)
        );
    })(cc.Component);
o.default = h;
