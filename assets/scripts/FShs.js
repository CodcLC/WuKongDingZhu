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
    h = t("BulletBase"),
    f = t("FightBase"),
    p = t("PqRange"),
    _ = cc._decorator,
    y = _.ccclass,
    g = _.property,
    w = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.bullet_spr = []),
                (e.bullet = null),
                (e.attack_three = !1),
                (e.can_hint_count = 1),
                (e.attack_poisoning_three = !1),
                (e.kill_add_attack_speed = !1),
                (e.pq_colider = null),
                (e.pq_rangeS = null),
                (e.bs_fetter_sp = null),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.InitHideFetter = function () {
                var t;
                if (
                    (l.default.ins.CheckFightsHave(d.img.blm)
                        ? this.AddAppendAttack(0.5, 999)
                        : l.default.ins.CheckFightsAllHave([d.img.ts, d.img.shs, d.img.zbj]) &&
                          this.AddAppendAttack(0.2, 999),
                    l.default.ins.map_logic.ItemIsExist(this.x, this.y + 1) &&
                        (t = l.default.ins.map_logic.fight_items[this.x][this.y + 1]),
                    t && t.data.img == d.img.hhe)
                ) {
                    (t.fetter_fig = this),
                        (this.fetter_fig = t),
                        (this.fetter_cooldown = c.default.GetRandomNum(3, 8)),
                        (this.fetter_cooldowntime = 7),
                        (this.pq_colider = this.node
                            .getChildByName("pq")
                            .getChildByName("pq_sp")
                            .getComponent(cc.PolygonCollider));
                    var e = this.pq_colider;
                    (e.tag = this.data.index),
                        (e.node.attack_name = "fight"),
                        (e.node.attack_type = "Fetter"),
                        (e.node.fight = this),
                        (this.pq_rangeS = this.node
                            .getChildByName("pq")
                            .getChildByName("pq_range")
                            .getComponent(p.default)),
                        (this.pq_rangeS.node.active = !0),
                        t.LoadBssp(),
                        (this.bs_fetter_sp = this.loadSp("shaseng_zhj")),
                        (this.bs_fetter_sp.node.active = !1);
                } else {
                    var o = this.node.getChildByName("pq").getChildByName("pq_sp");
                    o && o.destroy();
                    var n = this.node.getChildByName("pq").getChildByName("pq_range");
                    n && n.destroy();
                }
            }),
            (e.prototype.AddBuff = function (t) {
                switch (t.index) {
                    case 34:
                        this.AddAppendAttack(t.num / 100);
                        break;
                    case 35:
                        this.AddAppendAttackSpeed(t.num / 100);
                        break;
                    case 36:
                        this.BuffAddAttackThree();
                        break;
                    case 37:
                        this.BuffAddHitCount();
                        break;
                    case 38:
                        this.BuffPoisoningThree();
                        break;
                    case 39:
                        this.BuffKillAddAttackSpeed();
                }
            }),
            (e.prototype.BuffKillAddAttackSpeed = function () {
                this.kill_add_attack_speed = !0;
            }),
            (e.prototype.BuffPoisoningThree = function () {
                this.attack_poisoning_three = !0;
            }),
            (e.prototype.BuffAddAttackThree = function () {
                this.attack_three = !0;
            }),
            (e.prototype.BuffAddHitCount = function () {
                this.can_hint_count++;
            }),
            (e.prototype.InitOther = function () {
                this.node_pool.SetNode("bullet", this.bullet);
            }),
            (e.prototype.Attack = function () {
                var e = this;
                (this.attacking = !0), t.prototype.Attack.call(this);
                var o = this.GetAttackIsTop(),
                    n = o ? cc.Vec2.UP : this.down_v2;
                a.default.playSound_csryw("ss"),
                    this.scheduleOnce(function () {
                        e.SendBullent(n),
                            e.attack_three &&
                                ((e.temp_v2.x = 0.25),
                                (e.temp_v2.y = o ? 0.966 : -0.966),
                                e.SendBullent(e.temp_v2),
                                (e.temp_v2.x = -0.25),
                                (e.temp_v2.y = o ? 0.966 : -0.966),
                                e.SendBullent(e.temp_v2)),
                            (e.attacking = !1);
                    }, 0.1);
            }),
            (e.prototype.OnBulletHit = function (t) {
                var e = this.GetAttack();
                (this.attack_poisoning_three && t.InPoisoning()
                    ? t.SubNormalDamage(this.data.index, 3 * e)
                    : t.SubNormalDamage(this.data.index, e)) &&
                    this.kill_add_attack_speed &&
                    this.AddAppendAttackSpeed(1, 1, this.index);
            }),
            (e.prototype.SendBullent = function (t) {
                this.node_pool
                    .GetNode("bullet")
                    .getComponent(h.default)
                    .BulletTo(this.GetWordPos(), t, this, this.can_hint_count, 5, 10);
            }),
            (e.prototype.RecycleBullet = function (t) {
                t.node.parent.removeChild(t.node),
                    this.node_pool ? this.node_pool.PutNode("bullet", t.node) : t.node.destroy();
            }),
            (e.prototype.UpdateSkill = function (t) {
                this.attacking ||
                    (this.fetter_cooldown > 0
                        ? (this.fetter_cooldown -= t)
                        : this.fetter_cooldown <= 0 &&
                          this.pq_rangeS.HaveEnemy() &&
                          ((this.fetter_cooldown = this.fetter_cooldowntime),
                          console.log("放合击技能"),
                          this.PlayFetter()));
            }),
            (e.prototype.PlayFetter = function () {
                var t = this;
                this.unscheduleAllCallbacks(),
                    (this.attacking = !0),
                    this.fetter_fig.PlayFetter(),
                    (this.node_sp.node.active = !1),
                    u.EffMgr.PlaySp(this.node, s.EnumSubGameRes.tx_hecheng, "play1", l.default.ins.center_eff_node),
                    (this.bs_fetter_sp.node.active = !0),
                    a.default.playSound_csryw("hecheng"),
                    this.bs_fetter_sp.setAnimation(0, "play", !0);
                var e = this.pq_colider.node;
                (this.pq_colider.enabled = !1),
                    (e.active = !0),
                    (e.opacity = 0),
                    a.default.playSound_csryw("zq"),
                    cc
                        .tween(e)
                        .to(0.3, {opacity: 255})
                        .call(function () {
                            cc.tween(e)
                                .call(function () {
                                    t.pq_colider.enabled = !0;
                                })
                                .delay(0.05)
                                .call(function () {
                                    t.pq_colider.enabled = !1;
                                })
                                .delay(0.45)
                                .union()
                                .repeat(10)
                                .to(0.3, {opacity: 0})
                                .call(function () {
                                    (e.active = !1),
                                        (t.attacking = !1),
                                        (t.node_sp.node.active = !0),
                                        (t.bs_fetter_sp.node.active = !1);
                                })
                                .start();
                        })
                        .start(),
                    this.attack_three && (this.PenQi(90), this.PenQi(-90)),
                    this.fetter_fig.can_attack_fowrdandback && this.PenQi(180);
            }),
            (e.prototype.PenQi = function (t) {
                var e = cc.instantiate(this.node.getChildByName("pq").getChildByName("pq_sp"));
                this.node.getChildByName("pq").addChild(e);
                var o = e.getComponent(cc.PolygonCollider);
                (o.tag = this.data.index),
                    (o.node.attack_name = "fight"),
                    (o.node.attack_type = "Fetter"),
                    (o.node.fight = this),
                    (o.enabled = !1),
                    (e.active = !0),
                    (e.opacity = 0),
                    (e.angle = t),
                    cc
                        .tween(e)
                        .to(0.3, {opacity: 255})
                        .call(function () {
                            cc.tween(e)
                                .call(function () {
                                    o.enabled = !0;
                                })
                                .delay(0.05)
                                .call(function () {
                                    o.enabled = !1;
                                })
                                .delay(0.45)
                                .union()
                                .repeat(10)
                                .to(0.3, {opacity: 0})
                                .call(function () {
                                    e.destroy();
                                })
                                .start();
                        })
                        .start();
            }),
            r([g(cc.SpriteFrame)], e.prototype, "bullet_spr", void 0),
            r([g(cc.Node)], e.prototype, "bullet", void 0),
            r([y], e)
        );
    })(f.default);
o.default = w;
