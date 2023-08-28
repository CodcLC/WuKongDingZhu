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
    f = t("hheBullet"),
    p = t("HheFire"),
    _ = t("HheFireRange"),
    y = cc._decorator,
    g = y.ccclass,
    w = y.property,
    m = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.hhe_tsj_s = []),
                (e.honghaier_tx_s = []),
                (e.file = null),
                (e.bullet = null),
                (e.three_file = null),
                (e.can_create_fire = !1),
                (e.cooldown_fire = 9),
                (e.can_attack_fowrdandback = !1),
                (e.can_hint_count = 1),
                (e.double_damage_indexs = [4, 17, 32, 47]),
                (e.bs_fetter_sp = null),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.InitHideFetter = function () {
                l.default.ins.CheckFightsHave(d.img.nmw) && this.AddAppendAttackSpeed(0.5, 999);
            }),
            (e.prototype.InitOther = function () {
                this.node_pool.SetNode("bullet", this.bullet),
                    (this.hhefire = this.three_file.getComponent(p.default)),
                    this.hhefire.Init(this.index),
                    (this.node.getChildByName("three_file_range").getComponent(_.default).hhe = this),
                    c.default.NodeSetNewParent(this.three_file, l.default.ins.center_eff_node),
                    (this.three_file.active = !1);
            }),
            (e.prototype.AddBuff = function (t) {
                switch (t.index) {
                    case 45:
                        this.AddAppendAttack(t.num / 100);
                        break;
                    case 46:
                        this.BuffAttackFowrdAndBack();
                        break;
                    case 47:
                        this.BuffAddBurnTime();
                        break;
                    case 48:
                        this.BuffAddBurnFactor();
                        break;
                    case 49:
                        this.BuffFire();
                }
            }),
            (e.prototype.BuffAttackFowrdAndBack = function () {
                this.can_attack_fowrdandback = !0;
            }),
            (e.prototype.BuffAddBurnTime = function () {
                this.append_poisoning_time += 3;
            }),
            (e.prototype.BuffAddBurnFactor = function () {
                this.append_poisoning_factor += 3;
            }),
            (e.prototype.BuffFire = function () {
                (this.can_create_fire = !0), (this.node.getChildByName("three_file_range").active = !0);
            }),
            (e.prototype.OnBulletHit = function (t) {
                if (t.CanBeAttack()) {
                    a.default.playSound_csryw("hqjz");
                    var e = this.GetAttack();
                    -1 != this.double_damage_indexs.indexOf(t.data.index)
                        ? t.SubNormalDamage(this.data.index, 2 * e)
                        : t.SubNormalDamage(this.data.index, e),
                        t.BeBurn(this.data.index, this.GetPoisoningDamage(), this.GetPoisoningTime(), this.index);
                }
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
            (e.prototype.Attack = function () {
                var e = this;
                (this.attacking = !0), t.prototype.Attack.call(this);
                var o = this.GetAttackIsTop() ? cc.Vec2.UP : this.down_v2;
                this.scheduleOnce(function () {
                    a.default.playSound_csryw("hqfs"),
                        e.can_attack_fowrdandback
                            ? (e.SendBullent(e.down_v2), e.SendBullent(cc.Vec2.UP))
                            : e.SendBullent(o),
                        (e.attacking = !1);
                }, 0.1);
            }),
            (e.prototype.Fire = function () {
                for (var t = this, e = 0; e < this.hhe_tsj_s.length; e++) this.hhe_tsj_s[e].active = !1;
                this.file.active = !0;
                var o = function (e) {
                        var o = e;
                        (n.honghaier_tx_s[o].scale = 0),
                            n.honghaier_tx_s[o].setPosition(cc.Vec2.ZERO),
                            (n.honghaier_tx_s[o].active = !0),
                            cc.tween(n.honghaier_tx_s[o]).to(0.1, {scale: 1}).start(),
                            cc
                                .tween(n.honghaier_tx_s[o])
                                .to(0.3, {x: n.hhe_tsj_s[o].x, y: n.hhe_tsj_s[o].y + 30})
                                .call(function () {
                                    (t.hhe_tsj_s[o].scale = 0),
                                        (t.hhe_tsj_s[o].active = !0),
                                        (t.three_file.active = !0),
                                        (t.three_file.scale = 1),
                                        cc
                                            .tween(t.hhe_tsj_s[o])
                                            .to(0.1, {scale: 1})
                                            .delay(3)
                                            .to(0.3, {opacity: 0})
                                            .call(function () {
                                                t.hhefire.OnHide(), (t.three_file.active = !1), (t.file.active = !1);
                                            })
                                            .start();
                                })
                                .to(0.2, {opacity: 0})
                                .start();
                    },
                    n = this;
                for (e = 0; e < this.hhe_tsj_s.length; e++) o(e);
            }),
            (e.prototype.onDestroy = function () {
                for (var e = 0; e < this.hhe_tsj_s.length; e++)
                    cc.Tween.stopAllByTarget(this.honghaier_tx_s[e]), cc.Tween.stopAllByTarget(this.hhe_tsj_s[e]);
                t.prototype.onDestroy.call(this);
            }),
            (e.prototype.OtherUpdate = function (t) {
                this.cooldown_fire > 0 && (this.cooldown_fire -= t);
            }),
            (e.prototype.OnEnmeyInFireRange = function () {
                var t = this;
                this.can_create_fire &&
                    this.cooldown_fire <= 0 &&
                    ((this.cooldown_fire = 9),
                    this.Show(),
                    this.node_sp.setAnimation(0, "gongji", !1),
                    this.scheduleOnce(function () {
                        t.Fire();
                    }, 0.1));
            }),
            (e.prototype.LoadBssp = function () {
                (this.bs_fetter_sp = this.loadSp("honghaier_zhj")), (this.bs_fetter_sp.node.active = !1);
            }),
            (e.prototype.PlayFetter = function () {
                var t = this;
                this.unscheduleAllCallbacks(),
                    (this.attacking = !0),
                    (this.node_sp.node.active = !1),
                    u.EffMgr.PlaySp(this.node, s.EnumSubGameRes.tx_hecheng, "play1", l.default.ins.center_eff_node),
                    (this.bs_fetter_sp.node.active = !0),
                    a.default.playSound_csryw("hecheng"),
                    this.bs_fetter_sp.setAnimation(0, "play", !0),
                    this.scheduleOnce(function () {
                        (t.attacking = !1), (t.node_sp.node.active = !0), (t.bs_fetter_sp.node.active = !1);
                    }, 5.6),
                    console.log("使用合击技");
            }),
            r([w(cc.Node)], e.prototype, "hhe_tsj_s", void 0),
            r([w(cc.Node)], e.prototype, "honghaier_tx_s", void 0),
            r([w(cc.Node)], e.prototype, "file", void 0),
            r([w(cc.Node)], e.prototype, "bullet", void 0),
            r([w(cc.Node)], e.prototype, "three_file", void 0),
            r([g], e)
        );
    })(h.default);
o.default = m;
