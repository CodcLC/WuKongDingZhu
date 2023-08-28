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
var s = t("ResSubMgr"),
    a = t("SoundMgr"),
    c = t("Utils"),
    l = t("GameSceneS"),
    d = t("ConfigMgr"),
    u = t("EffMgr"),
    h = t("FightBase"),
    f = cc._decorator,
    p = f.ccclass,
    _ = f.property,
    y = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.is_attack_two = !1),
                (e.attack_posion_three = !1),
                (e.can_attack_all_direction = !1),
                (e.can_bleed = !1),
                (e.append_attack_range = 0),
                (e.gc_node = null),
                (e.gc_coliders = []),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.InitOther = function () {}),
            (e.prototype.InitHideFetter = function () {
                l.default.ins.CheckFightsHave(d.img.swk) && this.AddAppendAttackSpeed(0.5, 999),
                    l.default.ins.CheckFightsHave(d.img.zzj) && (this.can_bleed = !0),
                    l.default.ins.CheckFightsHave(d.img.ts) && (this.append_attack_range += 1);
            }),
            (e.prototype.AddBuff = function (t) {
                switch (t.index) {
                    case 102:
                        this.AddAppendAttack(t.num / 100);
                        break;
                    case 103:
                        this.BuffAttackTwo();
                        break;
                    case 104:
                        this.BuffAddAttackPosionThree();
                        break;
                    case 105:
                        this.BuffAddAttackRange();
                        break;
                    case 106:
                        this.BuffCanAttackAllDirection();
                }
            }),
            (e.prototype.BuffAttackTwo = function () {
                this.is_attack_two = !0;
            }),
            (e.prototype.BuffAddAttackPosionThree = function () {
                this.attack_posion_three = !0;
            }),
            (e.prototype.BuffAddAttackRange = function () {
                this.append_attack_range += 1;
            }),
            (e.prototype.BuffCanAttackAllDirection = function () {
                this.can_attack_all_direction = !0;
            }),
            (e.prototype.GetGcColider = function () {
                var t;
                if (this.gc_coliders.length > 0) t = this.gc_coliders.pop();
                else {
                    var e = cc.instantiate(this.gc_node),
                        o = e.getComponent(cc.BoxCollider);
                    (o.tag = this.data.index),
                        (o.node.attack_name = "fight"),
                        (o.node.attack_type = "default"),
                        (o.node.fight = this),
                        (o.enabled = !1),
                        e.setParent(this.node),
                        (t = o);
                }
                return t;
            }),
            (e.prototype.BonySpur = function (t, e, o) {
                var n = this;
                this.scheduleOnce(function () {
                    var o = n.GetGcColider(),
                        i = new cc.Vec2();
                    (i.x = 118.5 * t),
                        (i.y = 118.5 * e),
                        o.node.setPosition(i),
                        (o.node.active = !0),
                        u.EffMgr.PlayOncesSp(
                            o.node.children[0].getComponent(sp.Skeleton),
                            "lv" + n.lv,
                            function () {
                                n.gc_coliders && ((o.node.active = !1), n.gc_coliders.push(o));
                            },
                            n
                        ),
                        n.scheduleOnce(function () {
                            o.enabled = !0;
                        }, 0.3);
                }, o);
            }),
            (e.prototype.Attack = function (e) {
                var o = this;
                void 0 === e && (e = !1), t.prototype.Attack.call(this), (this.attacking = !0);
                var n = this.GetAttackIsTop();
                if (
                    (this.scheduleOnce(function () {
                        a.default.playSound_csryw("zxcesj");
                    }, 0.2),
                    this.scheduleOnce(function () {
                        a.default.playSound_csryw("zxcesj");
                    }, 0.4),
                    this.BonySpur(0, n ? 1 : -1, 0),
                    this.BonySpur(0, n ? 2 : -2, 0.2),
                    this.can_attack_all_direction)
                ) {
                    this.BonySpur(0, n ? -1 : 1, 0),
                        this.BonySpur(0, n ? -2 : 2, 0.2),
                        this.BonySpur(1, 0, 0),
                        this.BonySpur(2, 0, 0.2),
                        this.BonySpur(-1, 0, 0),
                        this.BonySpur(-2, 0, 0.2);
                    for (var i = 1; i <= this.append_attack_range; i++) this.AddRound(i + 2);
                } else
                    for (i = 1; i <= this.append_attack_range; i++)
                        this.scheduleOnce(function () {
                            a.default.playSound_csryw("zxcesj");
                        }, 0.4 + 0.2 * i),
                            this.BonySpur(0, n ? i + 2 : -i - 2, 0.2 + 0.2 * i);
                !e && this.is_attack_two
                    ? this.scheduleOnce(function () {
                          o.Attack(!0);
                      }, 0.7 + 0.1 * this.append_attack_range)
                    : this.scheduleOnce(function () {
                          o.attacking = !1;
                      }, 0.7 + 0.2 * this.append_attack_range);
            }),
            (e.prototype.AddRound = function (t) {
                var e = 0.2 * (t - 1);
                this.scheduleOnce(function () {
                    a.default.playSound_csryw("zxcesj");
                }, e + 0.2),
                    this.BonySpur(t, 0, e),
                    this.BonySpur(-t, 0, e),
                    this.BonySpur(0, t, e),
                    this.BonySpur(0, -t, e);
            }),
            (e.prototype.LoadBtSp = function () {
                var t = c.default.CreateSpriteNode("Textures/other/bgjbs");
                (this.bs_node = t),
                    cc
                        .tween(this.bs_node)
                        .to(0.2, {scale: 1.1})
                        .to(0.2, {scale: 1})
                        .delay(0.6)
                        .union()
                        .repeatForever()
                        .start(),
                    this.node.addChild(t),
                    u.EffMgr.PlaySp(this.node, s.EnumSubGameRes.tx_hecheng, "play1", l.default.ins.center_eff_node),
                    a.default.playSound_csryw("hecheng");
            }),
            (e.prototype.PlayFetter = function () {
                this.Show(),
                    this.unscheduleAllCallbacks(),
                    (this.attacking = !0),
                    console.log("白骨精合击技"),
                    this.LoadBtSp();
            }),
            r([_(cc.Node)], e.prototype, "gc_node", void 0),
            r([p], e)
        );
    })(h.default);
o.default = y;
