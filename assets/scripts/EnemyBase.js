var t = require;
var e = module;
var o = exports;
var n,
    i,
    r =
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
    s =
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
Object.defineProperty(o, "__esModule", {value: !0}),
    (o.DelayDamage = o.EnemyBuff = o.MoveType = void 0),
    (function (t) {
        (t[(t.forword = 1)] = "forword"),
            (t[(t.LeftRight = 2)] = "LeftRight"),
            (t[(t.side = 3)] = "side"),
            (t[(t.toside = 4)] = "toside"),
            (t[(t.sideLeftRight = 5)] = "sideLeftRight"),
            (t[(t.sideForword = 6)] = "sideForword");
    })((i = o.MoveType || (o.MoveType = {})));
var a = t("EventEnum"),
    c = t("EventMgr"),
    l = t("ResSubMgr"),
    d = t("ResMgr"),
    u = t("Utils"),
    h = t("GameSceneS"),
    f = t("BuffMgr"),
    p = t("ConfigMgr"),
    _ = t("DataMgr"),
    y = t("EffMgr"),
    g = t("BossPro"),
    w = cc._decorator,
    m = w.ccclass,
    v =
        (w.property,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                    (e.sp_node = null),
                    (e.enmey_sp = null),
                    (e.append_speed = 0),
                    (e.append_weak = 0),
                    (e.move_pos = []),
                    (e.over = !1),
                    (e.is_die = !1),
                    (e.bossProS = null),
                    (e.can_not_slow_vertigo = !1),
                    (e.moveing = !1),
                    (e.vertigoing = !1),
                    (e.constraint = !1),
                    (e.stop_go_forward_ids = []),
                    (e.poisoning_data = new Map()),
                    (e.bleed_data = new Map()),
                    (e.burn_data = new Map()),
                    (e.open_bz = !1),
                    (e.kill_down_time = 0.5),
                    (e.skill_3_cool = 5),
                    (e.skill_8_cool = 2),
                    (e.buffs = []),
                    e
                );
            }
            var o;
            return (
                r(e, t),
                (o = e),
                (e.prototype.Init = function (t, e) {
                    var o = this;
                    (this.node.group = "enmey"),
                        (this.data = t),
                        (this.hp =
                            this.data.hp *
                            p.ConfigMgr.base_config.enmey_round_hp_factor[h.default.ins.round] *
                            p.ConfigMgr.base_config.enmey_level_hp_factor[_.DataMgr.user_gamedata.select_level]),
                        (this.max_hp = this.hp),
                        this.StartMove(this.data.move_type, e),
                        (this.sp_node = this.node.children[0]),
                        this.sp_node
                            ? ((this.enmey_sp = this.sp_node.getComponent(sp.Skeleton)),
                              this.enmey_sp.setAnimation(0, "play", !0))
                            : console.warn("怪物动效节点命名不为sp"),
                        this.InitOther(),
                        this.GetIsBoss() &&
                            (h.default.ins.HideBossDoor(),
                            d.default.loadBundlePrefab(
                                "subResGame",
                                "otherPrefab/boss_pro",
                                function (t) {
                                    var e = cc.instantiate(t);
                                    o.node.addChild(e),
                                        (o.bossProS = e.getComponent(g.default)),
                                        "e_b_tsgz" == o.data.img
                                            ? (e.y = 320)
                                            : "e_b_mog" == o.data.img
                                            ? (e.y = 360)
                                            : "e_b_nrt_hgt" == o.data.img
                                            ? (e.y = 250)
                                            : "e_b_dtg" == o.data.img
                                            ? (e.y = 290)
                                            : "e_b_dts" == o.data.img
                                            ? (e.y = 310)
                                            : "e_b_dem" == o.data.img && (e.y = 300);
                                },
                                this
                            ));
                }),
                (e.prototype.CheckHaveSkill = function (t) {
                    return 0 != this.data.skills.length && -1 != this.data.skills.indexOf(t);
                }),
                (e.GetForWordXs = function () {
                    if (0 == this.forword_x.length)
                        for (var t = 0; t < h.default.ins.map_logic.row_x; t++)
                            this.forword_x.push(t * h.default.ins.map_logic.width - 300);
                    return this.forword_x;
                }),
                (e.GetForWordYs = function () {
                    if (0 == this.forword_y.length)
                        for (var t = 0; t < h.default.ins.map_logic.col_y; t++)
                            this.forword_y.push(t * h.default.ins.map_logic.height - 450);
                    return this.forword_y;
                }),
                (e.prototype.InitPos = function (t, e) {
                    if (((this.in_left = Math.random() > 0.5), (this.movetype = t), t == i.forword)) {
                        var n = 600,
                            r = o.GetForWordXs(),
                            s = this.GetIsBoss()
                                ? r[h.default.ins.boss_pos]
                                : r[u.default.GetRandomNum(0, r.length - 1)];
                        this.node.setPosition(s, n), this.move_pos.push(new cc.Vec2(s, -650));
                    } else if (t == i.LeftRight)
                        (n = 600),
                            (r = o.GetForWordXs()),
                            (s = this.GetIsBoss()
                                ? r[h.default.ins.boss_pos]
                                : r[u.default.GetRandomNum(0, r.length - 1)]),
                            this.node.setPosition(s, n),
                            this.move_pos.push(new cc.Vec2(s, -650));
                    else if (t == i.side) {
                        (r = o.GetForWordXs()),
                            (s = this.in_left
                                ? r[0] - h.default.ins.map_logic.width
                                : r[r.length - 1] + h.default.ins.map_logic.width),
                            (n = (d = o.GetForWordYs())[u.default.GetRandomNum(0, d.length - 1)]),
                            this.node.setPosition(s, n);
                        var a = new cc.Vec2(s, d[d.length - 1] + h.default.ins.map_logic.height);
                        this.move_pos.push(a);
                        var c = new cc.Vec2(
                            this.in_left ? r[u.default.GetRandomNum(0, 2)] : r[r.length - u.default.GetRandomNum(1, 3)],
                            d[d.length - 1] + h.default.ins.map_logic.height
                        );
                        this.move_pos.push(c), this.move_pos.push(new cc.Vec2(c.x, -650));
                    } else if (t == i.toside) {
                        (r = o.GetForWordXs()),
                            (s = 0),
                            (n = 240 + (h.default.ins.map_logic.col_y - 6) * h.default.ins.map_logic.height),
                            this.node.setPosition(s, n);
                        var l = this.in_left
                            ? r[0] - h.default.ins.map_logic.width
                            : r[r.length - 1] + h.default.ins.map_logic.width;
                        (a = new cc.Vec2(l, n)), this.move_pos.push(a), this.move_pos.push(new cc.Vec2(l, -650));
                    } else if (t == i.sideLeftRight)
                        (r = o.GetForWordXs()),
                            (s = this.in_left
                                ? r[0] - h.default.ins.map_logic.width
                                : r[r.length - 1] + h.default.ins.map_logic.width),
                            (n =
                                (d = o.GetForWordYs())[u.default.GetRandomNum(0, 3)] +
                                4 * h.default.ins.map_logic.height),
                            this.node.setPosition(s, n),
                            this.move_pos.push(new cc.Vec2(0, -650));
                    else if (t == i.sideForword) {
                        var d;
                        (r = o.GetForWordXs()),
                            (s = this.in_left
                                ? r[0] - h.default.ins.map_logic.width
                                : r[r.length - 1] + h.default.ins.map_logic.width),
                            (n =
                                (d = o.GetForWordYs())[u.default.GetRandomNum(0, 3)] +
                                4 * h.default.ins.map_logic.height),
                            this.node.setPosition(s, n),
                            (c = new cc.Vec2(
                                this.in_left
                                    ? r[u.default.GetRandomNum(0, 2)]
                                    : r[r.length - u.default.GetRandomNum(1, 3)],
                                n
                            )),
                            this.move_pos.push(c),
                            this.move_pos.push(new cc.Vec2(c.x, -650));
                    }
                    if (e) {
                        var f = this.node.parent.convertToNodeSpaceAR(e);
                        this.node.setPosition(f);
                    }
                }),
                (e.prototype.GetSpeed = function () {
                    return 50 * this.data.speed * (1 - f.BuffMgr.GetEnmeyAppendSpeedFactor()) * (1 + this.append_speed);
                }),
                (e.prototype.StartMove = function (t, e) {
                    var o = this;
                    this.InitPos(t, e),
                        this.GetNextPos(),
                        (this.node.scale = 0),
                        cc
                            .tween(this.node)
                            .delay(0.2)
                            .to(0.2, {scale: 1})
                            .call(function () {
                                o.moveing = !0;
                            })
                            .start();
                }),
                (e.prototype.GetNextPos = function () {
                    if (this.move_pos.length > 0)
                        (this.target_pos = this.move_pos.shift()),
                            (this.direction_pos = this.target_pos.sub(this.node.getPosition())),
                            this.direction_pos.normalizeSelf();
                    else {
                        if (this.node.y > -640) return;
                        (this.moveing = !1), this.Arrived();
                    }
                }),
                (e.prototype.BeVertigo = function (t) {
                    var e = this;
                    if (!this.can_not_slow_vertigo && !this.vertigoing) {
                        if (this.GetIsBoss()) {
                            if (Math.random() < 0.1) return;
                            t = 0.5;
                        }
                        (this.vertigoing = !0),
                            this.PlayVertigoEff(t),
                            this.scheduleOnce(function () {
                                e.vertigoing = !1;
                            }, t);
                    }
                }),
                (e.prototype.BeConstraint = function (t) {
                    var e = this;
                    if (!this.can_not_slow_vertigo && !this.constraint) {
                        if (this.GetIsBoss()) {
                            if (Math.random() < 0.1) return;
                            t = 0.5;
                        }
                        (this.constraint = !0),
                            this.PlayConstraintEff(t),
                            this.scheduleOnce(function () {
                                e.constraint = !1;
                            }, t);
                    }
                }),
                (e.prototype.PlayConstraintEff = function (t) {
                    var e = new cc.Node();
                    (e.addComponent(cc.Sprite).spriteFrame = h.default.ins.sf_frame),
                        this.node.addChild(e),
                        (e.y = 0),
                        cc
                            .tween(e)
                            .delay(t)
                            .call(function () {
                                e.destroy();
                            })
                            .start();
                }),
                (e.prototype.GetIsStopForward = function () {
                    return this.stop_go_forward_ids.length > 0;
                }),
                (e.prototype.StopGoForward = function (t) {
                    -1 == this.stop_go_forward_ids.indexOf(t) && this.stop_go_forward_ids.push(t);
                }),
                (e.prototype.ContinueGoForward = function (t) {
                    var e = this.stop_go_forward_ids.indexOf(t);
                    -1 != e && this.stop_go_forward_ids.splice(e, 1);
                }),
                (e.prototype.InPoisoning = function () {
                    return this.poisoning_data.size > 0;
                }),
                (e.prototype.BePoisoning = function (t, e, o, n, i) {
                    var r = this;
                    if ((void 0 === i && (i = 0.5), !this.CheckHaveSkill(5) && !this.CheckHaveSkill(6))) {
                        this.CheckHaveSkill(7) && (e *= 3);
                        var s = this.poisoning_data.get(n);
                        if (s) {
                            if (o > s) {
                                for (a = s; a <= o; a++)
                                    (c = a),
                                        s++,
                                        this.scheduleOnce(function () {
                                            r.SubPoisoningDamage(t, e);
                                            var o = r.poisoning_data.get(n);
                                            r.poisoning_data.set(n, --o), 0 == o && r.poisoning_data.delete(n);
                                        }, c * i);
                                this.poisoning_data.set(n, s);
                            }
                        } else {
                            s = 0;
                            for (var a = 1; a <= o; a++) {
                                var c = a;
                                s++,
                                    this.scheduleOnce(function () {
                                        r.SubPoisoningDamage(t, e);
                                        var o = r.poisoning_data.get(n);
                                        r.poisoning_data.set(n, --o), 0 == o && r.poisoning_data.delete(n);
                                    }, c * i);
                            }
                            this.poisoning_data.set(n, s);
                        }
                    }
                }),
                (e.prototype.SubPoisoningDamage = function (t, e) {
                    (e += e * this.append_weak),
                        h.default.ins.logic.AddFightDamage(t, e),
                        y.EffMgr.ShowLab(this.node, l.EnumSubGameRes.green_lab, e),
                        y.EffMgr.PlaySp(this.node, l.EnumSubGameRes.tx_shouji, "play", this.node),
                        this.SubHp(e);
                }),
                (e.prototype.InBleed = function () {
                    return this.bleed_data.size > 0;
                }),
                (e.prototype.BeBleed = function (t, e, o, n, i) {
                    var r = this;
                    if (
                        (void 0 === i && (i = 0.5),
                        !this.CheckHaveSkill(5) && (this.CheckHaveSkill(6) && (e *= 3), !this.CheckHaveSkill(7)))
                    ) {
                        var s = this.bleed_data.get(n);
                        if (s) {
                            if (o > s) {
                                for (a = s; a <= o; a++)
                                    (c = a),
                                        s++,
                                        this.scheduleOnce(function () {
                                            r.SubBleedDamage(t, e);
                                            var o = r.bleed_data.get(n);
                                            r.bleed_data.set(n, --o), 0 == o && r.bleed_data.delete(n);
                                        }, c * i);
                                this.bleed_data.set(n, s);
                            }
                        } else {
                            s = 0;
                            for (var a = 1; a <= o; a++) {
                                var c = a;
                                s++,
                                    this.scheduleOnce(function () {
                                        r.SubBleedDamage(t, e);
                                        var o = r.bleed_data.get(n);
                                        r.bleed_data.set(n, --o), 0 == o && r.bleed_data.delete(n);
                                    }, c * i);
                            }
                            this.bleed_data.set(n, s);
                        }
                    }
                }),
                (e.prototype.SubBleedDamage = function (t, e) {
                    (e += e * this.append_weak),
                        h.default.ins.logic.AddFightDamage(t, e),
                        y.EffMgr.ShowLab(this.node, l.EnumSubGameRes.green_lab, e),
                        y.EffMgr.PlaySp(this.node, l.EnumSubGameRes.tx_bleed, "play", this.node),
                        this.SubHp(e);
                }),
                (e.prototype.InBurn = function () {
                    return this.burn_data.size > 0;
                }),
                (e.prototype.BeBurn = function (t, e, o, n, i) {
                    var r = this;
                    if (
                        (void 0 === i && (i = 0.5),
                        this.CheckHaveSkill(5) && (e *= 3),
                        !this.CheckHaveSkill(6) && !this.CheckHaveSkill(7))
                    ) {
                        var s = this.burn_data.get(n);
                        if (s) {
                            if (o > s) {
                                for (a = s; a <= o; a++)
                                    (c = a),
                                        s++,
                                        this.scheduleOnce(function () {
                                            r.SubBurnDamage(t, e);
                                            var o = r.burn_data.get(n);
                                            r.burn_data.set(n, --o), 0 == o && r.burn_data.delete(n);
                                        }, c * i);
                                this.burn_data.set(n, s);
                            }
                        } else {
                            s = 0;
                            for (var a = 1; a <= o; a++) {
                                var c = a;
                                s++,
                                    this.scheduleOnce(function () {
                                        r.SubBurnDamage(t, e);
                                        var o = r.burn_data.get(n);
                                        r.burn_data.set(n, --o), 0 == o && r.burn_data.delete(n);
                                    }, c * i);
                            }
                            this.burn_data.set(n, s);
                        }
                    }
                }),
                (e.prototype.SubBurnDamage = function (t, e) {
                    (e += e * this.append_weak),
                        h.default.ins.logic.AddFightDamage(t, e),
                        y.EffMgr.ShowLab(this.node, l.EnumSubGameRes.red_lab, e),
                        y.EffMgr.PlaySp(this.node, l.EnumSubGameRes.tx_burn, "play", this.node),
                        this.SubHp(e);
                }),
                (e.prototype.SubNormalDamage = function (t, e, o, n) {
                    return (
                        void 0 === o && (o = l.EnumSubGameRes.white_lab),
                        void 0 === n && (n = 1.2),
                        (e += e * this.append_weak),
                        h.default.ins.logic.AddFightDamage(t, e),
                        y.EffMgr.ShowLab(this.node, o, e, n),
                        this.BeHit(),
                        this.SubHp(e)
                    );
                }),
                (e.prototype.SubNormalDamage2 = function (t, e, o) {
                    return (
                        void 0 === e && (e = l.EnumSubGameRes.white_lab),
                        void 0 === o && (o = 1.2),
                        (t += t * this.append_weak),
                        y.EffMgr.ShowLab(this.node, e, t, o),
                        this.BeHit(),
                        this.SubHp(t)
                    );
                }),
                (e.prototype.BeSlow = function (t, e) {
                    this.AddAppendSpeed(t, e);
                }),
                (e.prototype.BeBack = function (t, e) {
                    this.GetIsBoss() || this.AddAppendSpeed(t, e);
                }),
                (e.prototype.BeKill = function (t) {
                    this.GetIsBoss() ||
                        (h.default.ins.logic.AddFightDamage(t, this.hp),
                        y.EffMgr.ShowLab(this.node, l.EnumSubGameRes.red_lab, this.hp, 1.5),
                        this.SubHp(this.hp));
                }),
                (e.prototype.BeWeak = function (t, e, o) {
                    this.AddAppendWeak(t, e, o);
                }),
                (e.prototype.SubHp = function (t) {
                    if (!h.default.ins.GetMyPause()) {
                        var e = this.hp - t;
                        return (
                            (this.hp = e < 0 ? 0 : e),
                            this.RefreshBossPro(),
                            0 == this.hp
                                ? (this.Die(), !0)
                                : (cc
                                      .tween(this.sp_node)
                                      .to(0.1, {color: cc.Color.RED})
                                      .to(0.1, {color: cc.Color.WHITE})
                                      .start(),
                                  this.CheckHaveSkill(4) &&
                                      !this.open_bz &&
                                      this.GetHpProgress() < 0.5 &&
                                      ((this.open_bz = !0),
                                      this.AddAppendSpeed(1, 999),
                                      (this.can_not_slow_vertigo = !0),
                                      this.RemoveAllSlowBuff()),
                                  !1)
                        );
                    }
                }),
                (e.prototype.BeHit = function () {}),
                (e.prototype.GetHpProgress = function () {
                    return this.hp / this.max_hp;
                }),
                (e.prototype.RefreshBossPro = function () {
                    this.GetIsBoss() && this.bossProS && this.bossProS.UpPro(this.GetHpProgress());
                }),
                (e.prototype.GetIsBoss = function () {
                    return 1 == this.data.boss;
                }),
                (e.prototype.Die = function (t) {
                    var e = this;
                    void 0 === t && (t = !1),
                        this.is_die ||
                            ((this.is_die = !0),
                            this.GetIsBoss() && this.DieCreateEnmey(),
                            t ||
                                (h.default.ins.AddExperience(
                                    this.data.experience *
                                        p.ConfigMgr.base_config.enmey_round_exp_get_factor[h.default.ins.round]
                                ),
                                _.DataMgr.AddCurrentGold(this.data.gold)),
                            h.default.ins.RemoveEnemys(this),
                            c.default.emitEvent_csryw(a.ryw_Event.Enmeydie, this),
                            (this.over = !0),
                            (this.moveing = !1),
                            this.PlayDieEff(function () {
                                e.node.destroy();
                            }, this));
                }),
                (e.prototype.DieCreateEnmey = function () {
                    for (var t = this.GetWordPos(), e = 0; e < this.data.die_create_enmey.length; e++)
                        for (
                            var o = p.ConfigMgr.enemyGroup_config.get(this.data.die_create_enmey[e]), n = 0;
                            n < o.count;
                            n++
                        )
                            h.default.ins.CreateEnemy(
                                o.enemy_index,
                                new cc.Vec2(
                                    t.x + u.default.GetRandomNum(0, 300) - 150,
                                    t.y + u.default.GetRandomNum(0, 300) - 150
                                )
                            );
                }),
                (e.prototype.GetWordPos = function () {
                    return this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
                }),
                (e.prototype.Arrived = function () {
                    h.default.ins.RemoveEnemys(this),
                        c.default.emitEvent_csryw(a.ryw_Event.Enmeydie, this),
                        (this.over = !0),
                        this.node.destroy(),
                        h.default.ins.SubHp(this.GetIsBoss() ? 500 : 100);
                }),
                (e.prototype.PlayDieEff = function (t, e) {
                    y.EffMgr.PlaySp(this.node, l.EnumSubGameRes.tx_siwang, "play", h.default.ins.center_eff_node),
                        t.call(e);
                }),
                (e.prototype.PlayVertigoEff = function (t) {
                    var e = new cc.Node();
                    (e.addComponent(cc.Sprite).spriteFrame = h.default.ins.xy_frame),
                        this.node.addChild(e),
                        (e.y = this.sp_node.height / 2 + 20),
                        cc
                            .tween(e)
                            .delay(t)
                            .call(function () {
                                e.destroy();
                            })
                            .start();
                }),
                (e.prototype.PlayHeartBroken = function () {
                    var t = new cc.Node(),
                        e = t.addComponent(cc.Sprite);
                    (e.spriteFrame = h.default.ins.xs_frame),
                        this.node.addChild(t),
                        (t.y = this.sp_node.height / 2 + 20),
                        (t.scale = 0),
                        cc
                            .tween(t)
                            .to(0.1, {scale: 1})
                            .delay(0.3)
                            .call(function () {
                                e.spriteFrame = h.default.ins.xs2_frame;
                            })
                            .delay(0.5)
                            .to(0.1, {scale: 0})
                            .call(function () {
                                t.destroy();
                            })
                            .start();
                }),
                (e.prototype.update = function (t) {
                    this.over ||
                        (this.moveing &&
                            (this.MoveToPos(t),
                            (this.kill_down_time -= t),
                            this.kill_down_time <= 0 && (this.UpdateSkills(0.5), (this.kill_down_time = 0.5))),
                        this.UpdateBuffTime(t));
                }),
                (e.prototype.UpdateSkills = function (t) {
                    var e = this;
                    if (this.CheckHaveSkill(1)) {
                        var o = this.GetInXY();
                        this.AddAttackSpeedOther(o[0], o[1], -0.2, 0.5, 101),
                            this.AddAttackSpeedOther(o[0] - 1, o[1], -0.2, 0.5, 101),
                            this.AddAttackSpeedOther(o[0] + 1, o[1], -0.2, 0.5, 101),
                            this.AddAttackSpeedOther(o[0], o[1] + 1, -0.2, 0.5, 101),
                            this.AddAttackSpeedOther(o[0], o[1] - 1, -0.2, 0.5, 101);
                    }
                    if (
                        (this.CheckHaveSkill(2) &&
                            ((o = this.GetInXY()),
                            this.AddAttackOther(o[0], o[1], -0.2, 0.5, 102),
                            this.AddAttackOther(o[0] - 1, o[1], -0.2, 0.5, 102),
                            this.AddAttackOther(o[0] + 1, o[1], -0.2, 0.5, 102),
                            this.AddAttackOther(o[0], o[1] + 1, -0.2, 0.5, 102),
                            this.AddAttackOther(o[0], o[1] - 1, -0.2, 0.5, 102)),
                        this.CheckHaveSkill(3) && ((this.skill_3_cool -= t), this.skill_3_cool <= 0))
                    ) {
                        var n = this.node.getComponent(cc.Collider);
                        (n.enabled = !1),
                            (this.sp_node.opacity = 100),
                            cc
                                .tween(n)
                                .delay(2)
                                .call(function () {
                                    (n.enabled = !0), (e.sp_node.opacity = 255), (e.skill_3_cool = 5);
                                })
                                .start();
                    }
                    if (this.CheckHaveSkill(8) && ((this.skill_8_cool -= t), this.skill_8_cool <= 0)) {
                        for (var i = this.GetWordPos(), r = 0; r < this.data.die_create_enmey.length; r++)
                            for (
                                var s = p.ConfigMgr.enemyGroup_config.get(this.data.die_create_enmey[r]), a = 0;
                                a < s.count;
                                a++
                            ) {
                                var c = 118 * (Math.random() < 0.5 ? 1 : -1),
                                    l = 118 * (Math.random() < 0.5 ? 1 : -1);
                                h.default.ins.CreateEnemy(s.enemy_index, new cc.Vec2(i.x + c, i.y + l));
                            }
                        this.skill_8_cool = 2;
                    }
                }),
                (e.prototype.AddAttackOther = function (t, e, o, n, i) {
                    h.default.ins.map_logic.ItemIsExist(t, e) &&
                        h.default.ins.map_logic.fight_items[t][e] &&
                        h.default.ins.map_logic.fight_items[t][e].AddAppendAttack(o, n, i);
                }),
                (e.prototype.AddAttackSpeedOther = function (t, e, o, n, i) {
                    h.default.ins.map_logic.ItemIsExist(t, e) &&
                        h.default.ins.map_logic.fight_items[t][e] &&
                        h.default.ins.map_logic.fight_items[t][e].AddAppendAttackSpeed(o, n, i);
                }),
                (e.prototype.GetInXY = function () {
                    var t = 295 + this.node.x + 59,
                        e = 478 + this.node.y + 59;
                    return [Math.floor(t / 118.5), Math.floor(e / 118.5)];
                }),
                (e.prototype.MoveToPos = function (t) {
                    if (!h.default.ins.is_my_pause) {
                        if (this.movetype == i.LeftRight || this.movetype == i.sideLeftRight) {
                            var e = o.GetForWordXs();
                            this.in_left
                                ? this.node.x < e[0]
                                    ? (this.in_left = !1)
                                    : (this.direction_pos.x = -1)
                                : this.node.x > e[e.length - 1]
                                ? (this.in_left = !0)
                                : (this.direction_pos.x = 1);
                        }
                        var n = this.GetSpeed();
                        if (n > 0) {
                            if (this.vertigoing || this.constraint) return;
                            if (this.GetIsStopForward()) return;
                        }
                        var r = o.GetDistance(this.node.getPosition(), this.target_pos);
                        (this.node.x += this.direction_pos.x * t * n), (this.node.y += this.direction_pos.y * t * n);
                        var s = o.GetDistance(this.node.getPosition(), this.target_pos);
                        (s > r || s < 500) && this.GetNextPos();
                    }
                }),
                (e.GetDistance = function (t, e) {
                    return (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y);
                }),
                (e.prototype.AddAppendWeak = function (t, e, o) {
                    var n = new b(t, 0, e, o);
                    this.buffs.push(n), this.BuffChange();
                }),
                (e.prototype.RemoveAppend = function (t) {
                    for (var e = 0; e < this.buffs.length; e++)
                        if (this.buffs[e]._id && this.buffs[e]._id == t) return void this.buffs.splice(e, 1);
                    this.BuffChange();
                }),
                (e.prototype.RemoveAllSlowBuff = function () {
                    for (var t = 0; t < this.buffs.length; t++)
                        this.buffs[t]._append_speed < 0 && (this.buffs.splice(t, 1), t--);
                    this.BuffChange();
                }),
                (e.prototype.AddAppendSpeed = function (t, e) {
                    if (!(this.can_not_slow_vertigo && t < -1)) {
                        var o = new b(0, t, e);
                        this.buffs.push(o), this.BuffChange();
                    }
                }),
                (e.prototype.UpdateBuffTime = function (t) {
                    for (var e = 0; e < this.buffs.length; e++)
                        this.buffs[e]._time > 0
                            ? (this.buffs[e]._time -= t)
                            : (this.buffs.splice(e, 1), e--, this.BuffChange());
                }),
                (e.prototype.BuffChange = function () {
                    var t = this;
                    (this.append_speed = 0),
                        (this.append_weak = 0),
                        this.buffs.forEach(function (e) {
                            t.append_speed > e._append_speed
                                ? (t.append_speed = e._append_speed)
                                : 0 == t.append_speed && (t.append_speed = e._append_speed),
                                (t.append_weak += e._append_weak);
                        });
                    var e = 1 + this.append_speed;
                    this.enmey_sp.timeScale = e < 0 ? 0 : e;
                }),
                (e.prototype.CanBeAttack = function () {
                    return !this.is_die && !this.over;
                }),
                (e.prototype.onCollisionEnter = function (t) {
                    var e = t.node;
                    if (e.attack_name && "fight" == e.attack_name) {
                        var o = e.fight;
                        if ("default" == e.attack_type) {
                            if (o.data.img == p.img.swk) {
                                if (0 != (a = o).pro_kill && Math.random() < a.pro_kill && this.GetHpProgress() < 0.5)
                                    return void this.BeKill(t.tag);
                                a.can_beat_vertigo &&
                                    this.vertigoing &&
                                    !this.GetIsBoss() &&
                                    this.AddAppendSpeed(-5, 1);
                            } else if (o.data.img == p.img.ce) {
                                var n = o;
                                if (
                                    (y.EffMgr.PlaySp(
                                        this.node,
                                        l.EnumSubGameRes.tx_change_shouji,
                                        "animation",
                                        h.default.ins.center_eff_node
                                    ),
                                    n.attack_vertigo_three && this.vertigoing)
                                )
                                    return void this.SubNormalDamage(t.tag, 3 * o.GetAttack());
                            } else if (o.data.img == p.img.zxxz)
                                y.EffMgr.PlaySp(
                                    this.node,
                                    l.EnumSubGameRes.tx_zixia_shouji,
                                    "play",
                                    h.default.ins.center_eff_node
                                );
                            else if (o.data.img == p.img.bgj) {
                                var i = o;
                                if (i.attack_posion_three && this.InPoisoning())
                                    return void this.SubNormalDamage(t.tag, 3 * o.GetAttack());
                                i.can_bleed &&
                                    this.BeBleed(t.tag, o.GetPoisoningDamage(), o.GetPoisoningTime(), o.index);
                            } else if (o.data.img == p.img.nmw) {
                                var r = o;
                                return r.attack_three &&
                                    (this.vertigoing || this.InBleed() || this.InBurn() || this.InPoisoning())
                                    ? void (
                                          this.SubNormalDamage(t.tag, 3 * o.GetAttack()) &&
                                          r.kill_add_attackspeed &&
                                          r.AddAppendAttackSpeed(1, 2, r.index)
                                      )
                                    : void (
                                          this.SubNormalDamage(t.tag, o.GetAttack()) &&
                                          r.kill_add_attackspeed &&
                                          r.AddAppendAttackSpeed(1, 2, r.index)
                                      );
                            }
                            this.SubNormalDamage(t.tag, o.GetAttack());
                        } else if ("Poison" == e.attack_type)
                            o.data.img == p.img.bsz
                                ? (this.SubNormalDamage(t.tag, o.GetAttack() / 5),
                                  this.BePoisoning(t.tag, o.GetPoisoningDamage(), o.GetPoisoningTime(), o.index))
                                : (this.SubNormalDamage(t.tag, o.GetAttack()),
                                  this.BePoisoning(t.tag, o.GetPoisoningDamage(), o.GetPoisoningTime(), o.index));
                        else if ("onlyPoison" == e.attack_type)
                            this.BePoisoning(t.tag, o.GetPoisoningDamage(), o.GetPoisoningTime(), o.index);
                        else if ("Bleed" == e.attack_type) {
                            if ((this.SubNormalDamage(t.tag, o.GetAttack()), o.data.img == p.img.zn)) {
                                var s = o;
                                s.can_bleed &&
                                    this.BeBleed(
                                        t.tag,
                                        o.GetPoisoningDamage() * s.bleed_double,
                                        o.GetPoisoningTime(),
                                        o.index
                                    );
                            }
                        } else if ("whack" == e.attack_type) {
                            var a;
                            if (0 != (a = o).pro_kill && Math.random() < a.pro_kill && this.GetHpProgress() < 0.5)
                                return void this.BeKill(t.tag);
                            this.SubNormalDamage(t.tag, 4 * o.GetAttack(), l.EnumSubGameRes.white_lab, 1.5);
                        } else if ("skill" == e.attack_type)
                            o.data.img == p.img.ce &&
                                ((n = o),
                                y.EffMgr.PlaySp(
                                    this.node,
                                    l.EnumSubGameRes.tx_change_shouji,
                                    "animation",
                                    h.default.ins.center_eff_node
                                ),
                                this.SubNormalDamage(t.tag, 4 * o.GetAttack()),
                                n.attack_big_back &&
                                    Math.random() < 0.05 &&
                                    !this.GetIsBoss() &&
                                    this.AddAppendSpeed(-5, 0.3));
                        else if ("Fetter" == e.attack_type) {
                            if (o.data.img == p.img.bsz) {
                                this.GetIsBoss() || this.AddAppendSpeed(-5, 0.3);
                                var c = 5 * o.GetAttack(),
                                    d = 5 * o.fetter_fig.GetAttack();
                                h.default.ins.logic.AddFightDamage(o.data.index, c),
                                    h.default.ins.logic.AddFightDamage(o.fetter_fig.data.index, d),
                                    this.SubNormalDamage2(c + d);
                            } else if (o.data.img == p.img.shs) {
                                var f = u.default.GetRandomNum(2, 5);
                                (c = o.GetAttack() / f),
                                    (d = o.fetter_fig.GetAttack() / f),
                                    h.default.ins.logic.AddFightDamage(o.data.index, c),
                                    h.default.ins.logic.AddFightDamage(o.fetter_fig.data.index, d),
                                    this.SubNormalDamage2(c + d);
                            }
                        } else if ("Boom" == e.attack_type)
                            o.data.img == p.img.zzj &&
                                ((_ = o).is_boom_slow &&
                                    !this.GetIsBoss() &&
                                    this.AddAppendSpeed(_.GetSlow(), _.data.slow_time),
                                _.attack_bleed_three && this.InBleed()
                                    ? this.SubNormalDamage(_.data.index, 3 * _.GetAttack())
                                    : this.SubNormalDamage(_.data.index, _.GetAttack()),
                                _.can_posion &&
                                    this.BePoisoning(t.tag, o.GetPoisoningDamage(), o.GetPoisoningTime(), o.index));
                        else if ("cobweb" == e.attack_type) this.BeConstraint(1);
                        else if ("ZzjFetter" == e.attack_type) {
                            var _ = o,
                                g =
                                    ((f = u.default.GetRandomNum(6, 10)),
                                    (c = o.GetAttack() / f),
                                    (d = o.fetter_fig.GetAttack() / f),
                                    _.blm_fig ? _.blm_fig.GetAttack() : 0);
                            h.default.ins.logic.AddFightDamage(o.data.index, c),
                                h.default.ins.logic.AddFightDamage(o.fetter_fig.data.index, d),
                                0 != g && h.default.ins.logic.AddFightDamage(_.blm_fig.data.index, g),
                                this.SubNormalDamage2(c + d + g),
                                this.AddAppendSpeed(_.GetSlow() - 0.1, 1);
                        }
                    }
                }),
                (e.prototype.Pause = function () {
                    this.moveing = !1;
                }),
                (e.prototype.Resume = function () {
                    this.moveing = !0;
                }),
                (e.prototype.InitOther = function () {}),
                (e.forword_x = []),
                (e.forword_y = []),
                (o = s([m], e))
            );
        })(cc.Component));
o.default = v;
var b = function (t, e, o, n) {
    (this._id = 0),
        (this._append_weak = 0),
        (this._append_speed = 0),
        (this._time = 0),
        (this._append_weak = t),
        (this._append_speed = e),
        (this._time = o),
        (this._id = n);
};
o.EnemyBuff = b;
o.DelayDamage = function () {};
