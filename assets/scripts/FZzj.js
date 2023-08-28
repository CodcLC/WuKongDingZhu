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
var s = t("EventEnum"),
    a = t("EventMgr"),
    c = t("ResSubMgr"),
    l = t("SoundMgr"),
    d = t("ResMgr"),
    u = t("Utils"),
    h = t("GameSceneS"),
    f = t("ConfigMgr"),
    p = t("EffMgr"),
    _ = t("FightBase"),
    y = t("zzjBullet"),
    g = cc._decorator,
    w = g.ccclass,
    m = g.property,
    v = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.bullet = null),
                (e.bullet_spr = []),
                (e.is_boom_slow = !1),
                (e.attack_bleed_three = !1),
                (e.random_send_count = 0),
                (e.can_cobweb = !1),
                (e.can_posion = !1),
                (e.append_attack_range = 1),
                (e.down_whack_count = 5),
                (e.zzs = null),
                (e.gc_node = []),
                (e.zzw_node = null),
                (e.is_ld_w = !1),
                (e.blm_fig = null),
                e
            );
        }
        var o;
        return (
            i(e, t),
            (o = e),
            (e.prototype.InitOther = function () {
                this.node_pool.SetNode("bullet", this.bullet);
            }),
            (e.prototype.InitHideFetter = function () {
                var t, e, n;
                if (
                    (h.default.ins.CheckFightsHave(f.img.bgj)
                        ? (this.can_posion = !0)
                        : h.default.ins.CheckFightsAllHave([f.img.blm, f.img.swk, f.img.zbj]) &&
                          (this.AddAppendAttack(0.2, 999), this.AddAppendAttackSpeed(0.5, 999)),
                    h.default.ins.CheckFightsHave(f.img.zbj) && (this.can_posion = !0),
                    h.default.ins.map_logic.ItemIsExist(this.x - 1, this.y) &&
                        (t = h.default.ins.map_logic.fight_items[this.x - 1][this.y]),
                    h.default.ins.map_logic.ItemIsExist(this.x + 1, this.y) &&
                        (e = h.default.ins.map_logic.fight_items[this.x + 1][this.y]),
                    t && t.data.img == f.img.bgj ? (n = t) : e && e.data.img == f.img.bgj && (n = e),
                    n)
                ) {
                    if (null == o.max_hjj) o.max_hjj = this;
                    else {
                        if (o.max_hjj.data.start + o.max_hjj.fetter_fig.data.start > this.data.start + n.data.start)
                            return;
                        (o.max_hjj.fetter_fig.fetter_fig = null),
                            (o.max_hjj.fetter_fig = null),
                            (o.max_hjj.fetter_cooldown = 999),
                            (o.max_hjj = this);
                    }
                    (n.fetter_fig = this),
                        (this.fetter_fig = n),
                        (this.fetter_cooldown = 5),
                        (this.fetter_cooldowntime = 999);
                }
            }),
            (e.prototype.InitFetterOver = function () {
                o.max_hjj;
            }),
            (e.prototype.LoadBtSp = function () {
                var t = u.default.CreateSpriteNode("Textures/other/zzjbs");
                (this.bs_node = t),
                    cc
                        .tween(this.bs_node)
                        .to(0.2, {scale: 1.1})
                        .to(0.2, {scale: 1})
                        .delay(1.6)
                        .union()
                        .repeatForever()
                        .start(),
                    this.node.addChild(t),
                    p.EffMgr.PlaySp(this.node, c.EnumSubGameRes.tx_hecheng, "play1", h.default.ins.center_eff_node),
                    l.default.playSound_csryw("hecheng");
            }),
            (e.prototype.AddBuff = function (t) {
                switch (t.index) {
                    case 107:
                        this.BuffAddAttackRange(t.num / 100);
                        break;
                    case 108:
                        this.BuffAddBoomSlow();
                        break;
                    case 109:
                        this.BuffAddAttackBleedThree();
                        break;
                    case 110:
                        this.BuffRandomSendBullet();
                        break;
                    case 111:
                        this.BuffCanCobweb();
                }
            }),
            (e.prototype.BuffAddAttackRange = function (t) {
                (this.append_attack_range += t),
                    (this.node.getComponent(cc.CircleCollider).radius = 200 * this.append_attack_range);
            }),
            (e.prototype.BuffAddBoomSlow = function () {
                this.is_boom_slow = !0;
            }),
            (e.prototype.BuffAddAttackBleedThree = function () {
                this.attack_bleed_three = !0;
            }),
            (e.prototype.BuffRandomSendBullet = function () {
                this.random_send_count += 2;
            }),
            (e.prototype.BuffCanCobweb = function () {
                (this.can_cobweb = !0), u.default.NodeSetNewParent(this.zzs, h.default.ins.ground_eff_node);
                var t = this.zzs.getComponent(cc.BoxCollider);
                (t.tag = this.data.index),
                    (t.node.attack_name = "fight"),
                    (t.node.attack_type = "cobweb"),
                    (t.node.fight = this);
            }),
            (e.prototype.OnBulletHit = function () {}),
            (e.prototype.SendBullent = function (t) {
                this.node_pool
                    .GetNode("bullet")
                    .getComponent(y.default)
                    .BulletTo(this.GetWordPos(), t, this, 1, 0.6 * this.append_attack_range, 10);
            }),
            (e.prototype.RecycleBullet = function (t) {
                t.node.parent.removeChild(t.node),
                    this.node_pool ? this.node_pool.PutNode("bullet", t.node) : t.node.destroy();
            }),
            (e.prototype.Attack = function () {
                var e = this;
                (this.attacking = !0), t.prototype.Attack.call(this);
                var o = this.GetAttackDirection();
                this.scheduleOnce(function () {
                    e.SendBullent(o);
                    for (var t = 0; t < e.random_send_count; t++) {
                        var n = new cc.Vec2(Math.random() - 0.5, Math.random() - 0.5).normalize();
                        e.SendBullent(n);
                    }
                    e.attackOver();
                }, 0.1);
            }),
            (e.prototype.attackOver = function () {
                if (this.can_cobweb && (this.down_whack_count--, 0 == this.down_whack_count))
                    return (this.down_whack_count = u.default.GetRandomNum(5, 8)), void this.Whack();
                (this.attacking = !1), this.EnterIdle();
            }),
            (e.prototype.Whack = function () {
                var e = this;
                t.prototype.Attack.call(this),
                    this.scheduleOnce(function () {
                        e.node &&
                            ((e.zzs.active = !0),
                            cc
                                .tween(e.zzs)
                                .by(1, {y: 1e3})
                                .call(function () {
                                    e.zzs && ((e.zzs.active = !1), (e.zzs.y -= 1e3), e.attackOver());
                                })
                                .start());
                    }, 0.1);
            }),
            (e.prototype.UpdateSkill = function (t) {
                this.attacking ||
                    (this.fetter_cooldown > 0
                        ? (this.fetter_cooldown -= t)
                        : this.fetter_cooldown <= 0 &&
                          ((this.fetter_cooldown = this.fetter_cooldowntime),
                          console.log("放合击技能"),
                          this.PlayFetter()));
            }),
            (e.prototype.OnThunder = function (t) {
                null == this.blm_fig
                    ? (this.blm_fig = t)
                    : t.data.start > this.blm_fig.data.start && (this.blm_fig = t);
            }),
            (e.prototype.PlayFetter = function () {
                var t = this;
                this.Show(),
                    this.unscheduleAllCallbacks(),
                    (this.attacking = !0),
                    this.fetter_fig.PlayFetter(),
                    console.warn("合击技蜘蛛网"),
                    this.LoadBtSp(),
                    (h.default.ins.qp_colider.scaleY = h.default.ins.map_logic.col_y);
                var e = h.default.ins.qp_colider.getComponent(cc.BoxCollider);
                (e.tag = this.data.index),
                    (e.node.attack_name = "fight"),
                    (e.node.attack_type = "ZzjFetter"),
                    (e.node.fight = this),
                    (e.enabled = !1);
                var o = this.loadSp(
                    "zhizhujin_zhj",
                    function (e) {
                        (t.zzw_node = o.node),
                            t.zzw_node.setParent(h.default.ins.bg_eff_node),
                            (t.zzw_node.x = 0),
                            (t.zzw_node.y = -141.6),
                            e.setAnimation(0, "play1", !1),
                            e.setCompleteListener(function () {
                                e.setCompleteListener(null),
                                    e.setAnimation(0, "play2", !0),
                                    a.default.onceEvent_csryw(
                                        s.ryw_Event.Thunder,
                                        function (o) {
                                            (t.is_ld_w = !0), e.setAnimation(0, "play3", !0), (t.blm_fig = o);
                                        },
                                        t
                                    ),
                                    a.default.onEvent_csryw(s.ryw_Event.Thunder, t.OnThunder, t);
                            });
                    },
                    this
                );
                d.default.loadBundleSpriteFrame(
                    "subResGame",
                    "Textures/other/bgc",
                    function (e) {
                        for (var o = 0; o < h.default.ins.map_logic.col_y; o++) {
                            var n = new cc.Node();
                            n.addComponent(cc.Sprite).spriteFrame = e;
                            var i = cc.instantiate(n);
                            h.default.ins.buttom_eff_node.addChild(n),
                                h.default.ins.buttom_eff_node.addChild(i),
                                (n.y = 118 * o - 478),
                                (i.y = 118 * o - 478),
                                (n.x = -371),
                                (n.scaleX = -1),
                                (i.x = 371),
                                (i.opacity = 0),
                                (n.opacity = 0),
                                cc.tween(n).to(0.3, {opacity: 255}).start(),
                                cc.tween(i).to(0.3, {opacity: 255}).start(),
                                t.gc_node.push(n),
                                t.gc_node.push(i);
                        }
                    },
                    this
                );
                var n = e.node;
                (n.active = !0),
                    cc
                        .tween(n)
                        .delay(0.2)
                        .call(function () {
                            e.enabled = !0;
                        })
                        .delay(0.01)
                        .call(function () {
                            e.enabled = !1;
                        })
                        .delay(0.79)
                        .union()
                        .repeatForever()
                        .start();
            }),
            (e.prototype.onDestroy = function () {
                if ((t.prototype.onDestroy.call(this), this.fetter_fig && h.default.ins.qp_colider.active)) {
                    for (
                        cc.Tween.stopAllByTarget(h.default.ins.qp_colider), h.default.ins.qp_colider.active = !1;
                        this.gc_node.length > 0;

                    )
                        this.gc_node.pop().destroy();
                    this.zzw_node.destroy(), a.default.offEvent_csryw(s.ryw_Event.Thunder, this.OnThunder, this);
                }
            }),
            (e.max_hjj = null),
            r([m(cc.Node)], e.prototype, "bullet", void 0),
            r([m(cc.SpriteFrame)], e.prototype, "bullet_spr", void 0),
            r([m(cc.Node)], e.prototype, "zzs", void 0),
            (o = r([w], e))
        );
    })(_.default);
o.default = v;
