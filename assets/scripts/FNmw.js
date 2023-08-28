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
var s = t("Utils"),
    a = t("GameSceneS"),
    c = t("ConfigMgr"),
    l = t("EffMgr"),
    d = t("FightBase"),
    u = cc._decorator,
    h = u.ccclass,
    f = u.property,
    p = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.attack_node1 = null),
                (e.attack_node2 = null),
                (e.quan_sp1 = null),
                (e.quan_sp2 = null),
                (e.colider1 = null),
                (e.colider2 = null),
                (e.can_attack_fowrdandback = !1),
                (e.attack_three = !1),
                (e.kill_add_attackspeed = !1),
                (e.can_whack = !1),
                (e.down_whack_count = 7),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.InitOther = function () {
                var t = this.colider1;
                (t.tag = this.data.index),
                    (t.node.attack_name = "fight"),
                    (t.node.attack_type = "default"),
                    (t.node.fight = this);
            }),
            (e.prototype.InitHideFetter = function () {
                a.default.ins.CheckFightsHave(c.img.hhe) && this.AddAppendAttack(0.2, 999),
                    a.default.ins.CheckFightsHave(c.img.swk) && this.AddAppendAttack(0.2, 999),
                    a.default.ins.CheckFightsHave(c.img.zxxz) && this.AddAppendAttack(0.2, 999);
            }),
            (e.prototype.AddBuff = function (t) {
                switch (t.index) {
                    case 116:
                        this.AddAppendAttack(t.num / 100);
                        break;
                    case 117:
                        this.BuffAttackFowrdAndBack();
                        break;
                    case 118:
                        this.BuffAddAttackThree();
                        break;
                    case 119:
                        this.BuffAddKillAddAttackSpeed();
                        break;
                    case 120:
                        this.BuffAttackBigSkill();
                }
            }),
            (e.prototype.BuffAttackFowrdAndBack = function () {
                this.can_attack_fowrdandback = !0;
                var t = this.colider2;
                (t.tag = this.data.index),
                    (t.node.attack_name = "fight"),
                    (t.node.attack_type = "default"),
                    (t.node.fight = this);
            }),
            (e.prototype.BuffAddAttackThree = function () {
                this.attack_three = !0;
            }),
            (e.prototype.BuffAddKillAddAttackSpeed = function () {
                this.kill_add_attackspeed = !0;
            }),
            (e.prototype.BuffAttackBigSkill = function () {
                this.can_whack = !0;
            }),
            (e.prototype.Attack = function () {
                var e = this;
                (this.attacking = !0), t.prototype.Attack.call(this);
                var o = this.GetAttackIsTop();
                (this.colider1.node.active = !1),
                    (this.attack_node1.scaleY = o ? 1 : -1),
                    (this.attack_node1.active = !0),
                    l.EffMgr.PlayOncesSp(
                        this.quan_sp1,
                        "lv" + this.lv,
                        function () {
                            e.EnterIdle(), (e.attacking = !1), (e.attack_node1.active = !1);
                        },
                        this
                    ),
                    cc
                        .tween(this.colider1)
                        .delay(0.2)
                        .call(function () {
                            e.colider1.node.active = !0;
                        })
                        .start(),
                    this.can_attack_fowrdandback &&
                        ((this.colider2.node.active = !1),
                        (this.attack_node2.scaleY = o ? -1 : 1),
                        (this.attack_node2.active = !0),
                        l.EffMgr.PlayOncesSp(
                            this.quan_sp2,
                            "lv" + this.lv,
                            function () {
                                e.attack_node2.active = !1;
                            },
                            this
                        ),
                        cc
                            .tween(this.colider2)
                            .delay(0.2)
                            .call(function () {
                                e.colider2.node.active = !0;
                            })
                            .start());
            }),
            (e.prototype.attackOver = function () {
                if (this.can_whack && (this.down_whack_count--, 0 == this.down_whack_count))
                    return (this.down_whack_count = s.default.GetRandomNum(5, 8)), void this.Whack();
                (this.attacking = !1), this.EnterIdle();
            }),
            (e.prototype.Whack = function () {
                this.attackOver();
            }),
            r([f(cc.Node)], e.prototype, "attack_node1", void 0),
            r([f(cc.Node)], e.prototype, "attack_node2", void 0),
            r([f(sp.Skeleton)], e.prototype, "quan_sp1", void 0),
            r([f(sp.Skeleton)], e.prototype, "quan_sp2", void 0),
            r([f(cc.Collider)], e.prototype, "colider1", void 0),
            r([f(cc.Collider)], e.prototype, "colider2", void 0),
            r([h], e)
        );
    })(d.default);
o.default = p;
