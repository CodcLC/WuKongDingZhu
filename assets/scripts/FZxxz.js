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
    c = t("ResMgr"),
    l = t("Utils"),
    d = t("GameSceneS"),
    u = t("ConfigMgr"),
    h = t("EffMgr"),
    f = t("BulletBase"),
    p = t("FightBase"),
    _ = cc._decorator,
    y = _.ccclass,
    g = _.property,
    w = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.bullet_spr = []),
                (e.bullet = null),
                (e.item = null),
                (e.sword_center = null),
                (e.sword = null),
                (e.sword_spr = null),
                (e.attack_leftandright = !1),
                (e.attack_burn_three = !1),
                (e.attack_kill_pro = 0),
                (e.fly_sword_count = 0),
                (e.can_hint_count = 99),
                (e.zx_bt_sp = null),
                e
            );
        }
        var o;
        return (
            i(e, t),
            (o = e),
            (e.prototype.InitOther = function () {
                if (
                    ((this.sword_spr.spriteFrame = this.bullet_spr[this.lv - 1]),
                    this.node_pool.SetNode("bullet", this.bullet),
                    this.fly_sword_count > 0)
                ) {
                    for (var t = 0; t < this.fly_sword_count; t++) {
                        var e = cc.instantiate(this.item);
                        this.sword_center.addChild(e), (e.angle = t * (360 / this.fly_sword_count));
                        var o = e.children[0].getComponent(cc.BoxCollider);
                        (o.tag = this.data.index),
                            (o.node.attack_name = "fight"),
                            (o.node.attack_type = "default"),
                            (o.node.fight = this),
                            (e.active = !0);
                    }
                    cc.tween(this.sword_center).by(2, {angle: 360}).repeatForever().start();
                }
            }),
            (e.prototype.InitHideFetter = function () {
                var t;
                if (
                    (d.default.ins.CheckFightsHave(u.img.swk) &&
                        0 != this.attack_kill_pro &&
                        (this.attack_kill_pro += 0.1),
                    d.default.ins.CheckFightsHave(u.img.nmw) && this.AddAppendAttackSpeed(0.5, 999),
                    d.default.ins.map_logic.ItemIsExist(this.x - 1, this.y) &&
                        (t = d.default.ins.map_logic.fight_items[this.x - 1][this.y]),
                    t && t.data.img == u.img.swk)
                ) {
                    if (null == o.max_hjj) o.max_hjj = this;
                    else {
                        if (o.max_hjj.data.start + o.max_hjj.fetter_fig.data.start > this.data.start + t.data.start)
                            return;
                        (o.max_hjj.fetter_fig.fetter_fig = null),
                            (o.max_hjj.fetter_fig = null),
                            (o.max_hjj.fetter_cooldown = 999),
                            (o.max_hjj = this);
                    }
                    (t.fetter_fig = this),
                        (this.fetter_fig = t),
                        (this.fetter_cooldown = 1),
                        (this.fetter_cooldowntime = 5);
                }
            }),
            (e.prototype.InitFetterOver = function () {
                o.max_hjj == this && (this.fetter_fig.LoadBtSp(), this.LoadBtSp());
            }),
            (e.prototype.LoadBtSp = function () {
                var t = this,
                    e = new cc.Node();
                e.y = -43;
                var o = e.addComponent(sp.Skeleton);
                (o.loop = !1),
                    (o.paused = !0),
                    (o.premultipliedAlpha = !1),
                    c.default.loadBundleSpine(
                        "subResGame",
                        "sp/other/zixia_zhj",
                        function (e) {
                            (o.skeletonData = e),
                                (t.zx_bt_sp = o),
                                (t.node_sp.node.active = !1),
                                a.default.playSound_csryw("hecheng"),
                                h.EffMgr.PlaySp(
                                    t.node,
                                    s.EnumSubGameRes.tx_hecheng,
                                    "play1",
                                    d.default.ins.center_eff_node
                                );
                        },
                        this
                    ),
                    this.node.addChild(e),
                    this.loadSp(
                        "zixia_aixin",
                        function (t) {
                            (t.timeScale = 0.5), t.setAnimation(0, "play", !0);
                        },
                        this
                    );
            }),
            (e.prototype.Hide = function (e) {
                void 0 === e && (e = 0.1), t.prototype.Hide.call(this, e), (this.sword_center.active = !1);
            }),
            (e.prototype.Show = function () {
                t.prototype.Show.call(this), (this.sword_center.active = !0);
            }),
            (e.prototype.AddBuff = function (t) {
                switch (t.index) {
                    case 86:
                        this.AddAppendAttackSpeed(t.num / 100);
                        break;
                    case 87:
                        this.BuffLeftRight();
                        break;
                    case 88:
                        this.BuffBurnThree();
                        break;
                    case 89:
                        this.BuffAddKillPro();
                        break;
                    case 90:
                        this.BuffAddFlySword();
                }
            }),
            (e.prototype.BuffLeftRight = function () {
                this.attack_leftandright = !0;
            }),
            (e.prototype.BuffBurnThree = function () {
                this.attack_burn_three = !0;
            }),
            (e.prototype.BuffAddKillPro = function () {
                this.attack_kill_pro += 0.1;
            }),
            (e.prototype.BuffAddFlySword = function () {
                this.fly_sword_count++, console.log("飞剑：", this.fly_sword_count);
            }),
            (e.prototype.Attack = function () {
                var e = this;
                (this.attacking = !0), t.prototype.Attack.call(this);
                var o = this.GetAttackIsLeft() ? this.left_v2 : cc.Vec2.RIGHT;
                a.default.playSound_csryw("zxfs"),
                    this.scheduleOnce(function () {
                        e.attack_leftandright
                            ? (e.SendBullent(e.left_v2), e.SendBullent(cc.Vec2.RIGHT))
                            : e.SendBullent(o),
                            (e.attacking = !1);
                    }, 0.1);
            }),
            (e.prototype.OnBulletHit = function (t) {
                var e = this.GetAttack();
                h.EffMgr.PlaySp(t.node, s.EnumSubGameRes.tx_zixia_shouji, "play", d.default.ins.center_eff_node),
                    Math.random() < this.attack_kill_pro && t.GetHpProgress() < 0.5
                        ? t.BeKill(this.index)
                        : this.attack_burn_three && t.InBurn()
                        ? t.SubNormalDamage(this.data.index, 3 * e)
                        : t.SubNormalDamage(this.data.index, e);
            }),
            (e.prototype.SendBullent = function (t) {
                this.node_pool
                    .GetNode("bullet")
                    .getComponent(f.default)
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
                          ((this.fetter_cooldown = this.fetter_cooldowntime),
                          console.log("放合击技能"),
                          this.PlayFetter()));
            }),
            (e.prototype.PlayFetter = function () {
                this.Show(),
                    this.unscheduleAllCallbacks(),
                    (this.attacking = !0),
                    this.fetter_fig.PlayFetter(),
                    console.warn("开始拜堂~~~"),
                    (this.zx_bt_sp.paused = !1),
                    this.schedule(this.Married, 3, cc.macro.REPEAT_FOREVER),
                    (this.zx_bt_sp.timeScale = 0.5);
            }),
            (e.prototype.Married = function () {
                var t = this;
                this.fetter_fig.Married(),
                    this.zx_bt_sp.setAnimation(0, "play", !1),
                    this.scheduleOnce(function () {
                        t.scheduleOnce(function () {
                            a.default.playSound_csryw("xinsui");
                        }, 0.6);
                        for (
                            var e = function (e) {
                                    var o = d.default.ins.enemys[e],
                                        n = t.GetAttack(),
                                        i = t.fetter_fig.GetAttack(),
                                        r = l.default.GetRandomNum(2, 5);
                                    d.default.ins.logic.AddFightDamage(t.index, n / r),
                                        d.default.ins.logic.AddFightDamage(t.fetter_fig.index, i / r),
                                        Math.random() < 0.01
                                            ? o.BeKill(t.index)
                                            : (t.scheduleOnce(function () {
                                                  o.CanBeAttack() && o.SubNormalDamage2((n + i) / r);
                                              }, 0.5),
                                              o.PlayHeartBroken());
                                },
                                o = 0;
                            o < d.default.ins.enemys.length;
                            o++
                        )
                            e(o);
                    }, 0.7);
            }),
            (e.prototype.onDestroy = function () {
                t.prototype.onDestroy.call(this), this.unschedule(this.Married);
            }),
            (e.max_hjj = null),
            r([g(cc.SpriteFrame)], e.prototype, "bullet_spr", void 0),
            r([g(cc.Node)], e.prototype, "bullet", void 0),
            r([g(cc.Node)], e.prototype, "item", void 0),
            r([g(cc.Node)], e.prototype, "sword_center", void 0),
            r([g(cc.BoxCollider)], e.prototype, "sword", void 0),
            r([g(cc.Sprite)], e.prototype, "sword_spr", void 0),
            (o = r([y], e))
        );
    })(p.default);
o.default = w;
