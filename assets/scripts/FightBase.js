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
Object.defineProperty(o, "__esModule", {value: !0}), (o.FightBuff = void 0);
var s = t("EventEnum"),
    a = t("EventMgr"),
    c = t("NodePool"),
    l = t("ResMgr"),
    d = t("Utils"),
    u = t("GameSceneS"),
    h = t("BuffMgr"),
    f = t("ConfigMgr"),
    p = t("DataMgr"),
    _ = t("EnemyBase"),
    y = cc._decorator,
    g = y.ccclass,
    w =
        (y.property,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                    (e.fetter_fig = null),
                    (e.node_sp = null),
                    (e.cooldown = 0),
                    (e.fetter_cooldown = 999),
                    (e.fetter_cooldowntime = 999),
                    (e.enemys = []),
                    (e.node_pool = new c.default()),
                    (e.stoping = !1),
                    (e.down_v2 = new cc.Vec2(0, -1)),
                    (e.temp_v2 = new cc.Vec2(0, 0)),
                    (e.left_v2 = new cc.Vec2(-1, 0)),
                    (e.temp_color = new cc.Color(255, 255, 255, 255)),
                    (e.feeterattack = 0),
                    (e.append_poisoning_factor = 0),
                    (e.append_poisoning_time = 0),
                    (e.append_slow_factor = 0),
                    (e.append_attack = 0),
                    (e.append_attack_speed = 0),
                    (e.buffs = []),
                    (e.attacking = !1),
                    (e.eff_ld = {}),
                    e
                );
            }
            return (
                i(e, t),
                (e.prototype.onLoad = function () {
                    var t = this;
                    (this.node_sp = this.node.getChildByName("sp").getComponent(sp.Skeleton)),
                        (this.node_sp.premultipliedAlpha = !1),
                        (this.node_sp.node.color = new cc.Color(106, 106, 106, 255)),
                        a.default.onEvent_csryw(s.ryw_Event.Enmeydie, this.RemoveEnmey, this),
                        a.default.onEvent_csryw(
                            s.ryw_Event.EnterEliminateStage,
                            function () {
                                console.warn("战斗人员未销毁，尝试再次销毁"), t.node.destroy();
                            },
                            this
                        );
                }),
                (e.prototype.EnterOver = function () {
                    this.InitHideFetter();
                }),
                (e.prototype.EnterOver2 = function () {
                    this.InitFetterOver();
                }),
                (e.prototype.Init = function (t, e, o, n) {
                    (this.index = n), (this.x = t), (this.y = e), (this.data = o);
                    var i = this.data.start;
                    (this.lv = i <= 2 ? 1 : i <= 4 ? 2 : 3),
                        (this.this_word_pos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO)),
                        this.InitSp(),
                        this.Hide(0),
                        this.GetZeroInde(),
                        this.InitBuff(),
                        this.InitOther();
                }),
                (e.prototype.InitHideFetter = function () {}),
                (e.prototype.InitFetterOver = function () {}),
                (e.prototype.loadSp = function (t, e, o) {
                    var n = new cc.Node();
                    n.y = -43;
                    var i = n.addComponent(sp.Skeleton);
                    return (
                        (i.premultipliedAlpha = !1),
                        l.default.loadBundleSpine(
                            "subResGame",
                            "sp/other/" + t,
                            function (t) {
                                (i.skeletonData = t), e && e.call(o, i);
                            },
                            this
                        ),
                        this.node.addChild(n),
                        i
                    );
                }),
                (e.prototype.GetZeroInde = function () {
                    for (var t = u.default.ins.map_logic.create_indexs, e = 1; e < t.length; e++)
                        for (var o = 1; o <= 5; o++) t[e] + o == this.data.index && (this.zero_index = t[e]);
                    this.hero_lv = p.DataMgr.GetHeroLv(this.zero_index);
                }),
                (e.prototype.InitBuff = function () {
                    for (var t = h.BuffMgr.GetNowBuffs(), e = 0; e < t.length; e++) {
                        var o = h.BuffMgr.now_buffs_data[e];
                        this.AddBuff(o);
                    }
                    a.default.onEvent_csryw(s.ryw_Event.AddBuff, this.AddBuff, this);
                }),
                (e.prototype.AddBuff = function () {}),
                (e.prototype.RemoveEnmey = function (t) {
                    var e = this.enemys.indexOf(t);
                    -1 != e &&
                        (this.enemys.splice(e, 1), 0 == this.enemys.length && this.scheduleOnce(this.DelayHide, 2));
                }),
                (e.prototype.DelayHide = function () {
                    this.Hide();
                }),
                (e.prototype.AddEnmey = function (t) {
                    -1 == this.enemys.indexOf(t) &&
                        (0 == this.enemys.length && (this.unschedule(this.DelayHide), this.Show()),
                        this.enemys.push(t));
                }),
                (e.prototype.AddAttackOther = function (t, e, o, n, i) {
                    u.default.ins.map_logic.ItemIsExist(t, e) &&
                        u.default.ins.map_logic.fight_items[t][e] &&
                        u.default.ins.map_logic.fight_items[t][e].AddAppendAttack(o, n, i);
                }),
                (e.prototype.AddAttackSpeedOther = function (t, e, o, n, i) {
                    u.default.ins.map_logic.ItemIsExist(t, e) &&
                        u.default.ins.map_logic.fight_items[t][e] &&
                        u.default.ins.map_logic.fight_items[t][e].AddAppendAttackSpeed(o, n, i);
                }),
                (e.prototype.GetWordPos = function () {
                    return this.this_word_pos;
                }),
                (e.prototype.GetAttackIsTop = function () {
                    if (0 == this.enemys.length) return !0;
                    var t = this.enemys[0].node.convertToWorldSpaceAR(cc.Vec2.ZERO);
                    return this.this_word_pos.y - t.y < 0;
                }),
                (e.prototype.GetAttackDirection = function () {
                    return this.enemys[0].node
                        .convertToWorldSpaceAR(cc.Vec2.ZERO)
                        .sub(this.this_word_pos)
                        .normalizeSelf();
                }),
                (e.prototype.GetAttackIsLeft = function () {
                    if (0 == this.enemys.length) return !0;
                    var t = this.enemys[0].node.convertToWorldSpaceAR(cc.Vec2.ZERO);
                    return this.this_word_pos.x - t.x > 0;
                }),
                (e.prototype.InitSp = function () {
                    this.node_sp.setSkin("lv" + this.data.start), this.EnterIdle();
                }),
                (e.prototype.Show = function () {
                    if (255 != this.node_sp.node.color.r) {
                        var t = 106;
                        f.ConfigMgr.is_dr && (t = 255 - p.DataMgr.mask_opacity + 6),
                            (this.temp_color.r = t),
                            (this.temp_color.g = t),
                            (this.temp_color.b = t);
                        var e = this.node_sp.node;
                        cc.tween(this.temp_color)
                            .to(
                                0.1,
                                {r: 255, g: 255, b: 255},
                                {
                                    onUpdate: function (t) {
                                        e.color = t;
                                    }
                                }
                            )
                            .start();
                    }
                }),
                (e.prototype.Hide = function (t) {
                    if ((void 0 === t && (t = 0.1), !this.attacking)) {
                        var e = 106;
                        if (
                            (f.ConfigMgr.is_dr && (e = 255 - p.DataMgr.mask_opacity + 6),
                            this.node_sp.node.color.r != e)
                        ) {
                            (this.temp_color.r = 255), (this.temp_color.g = 255), (this.temp_color.b = 255);
                            var o = this.node_sp.node;
                            cc.tween(this.temp_color)
                                .to(
                                    t,
                                    {r: e, g: e, b: e},
                                    {
                                        onUpdate: function (t) {
                                            o.color = t;
                                        }
                                    }
                                )
                                .start();
                        }
                    }
                }),
                (e.prototype.EnterIdle = function () {
                    this.node_sp;
                }),
                (e.prototype.GetHeroLvFactor = function () {
                    return f.ConfigMgr.base_config.hero_lv_factor[this.hero_lv];
                }),
                (e.prototype.GetAttack = function () {
                    return (
                        this.data.attack *
                            (1 + h.BuffMgr.GetAttackBuff() + this.GetAppendAttack()) *
                            this.GetHeroLvFactor() +
                        this.GetFeeterAttack()
                    );
                }),
                (e.prototype.GetFeeterAttack = function () {
                    return this.feeterattack;
                }),
                (e.prototype.GetPoisoningDamage = function () {
                    return this.data.poisoning_damage * (1 + this.GetAppendPoisoningFactor()) * this.GetHeroLvFactor();
                }),
                (e.prototype.GetPoisoningTime = function () {
                    return this.data.poisoning_time + this.GetAppendPoisoningTime();
                }),
                (e.prototype.GetAppendPoisoningFactor = function () {
                    return this.append_poisoning_factor;
                }),
                (e.prototype.GetAppendPoisoningTime = function () {
                    return this.append_poisoning_time;
                }),
                (e.prototype.GetAppendSlowFactor = function () {
                    return this.append_slow_factor;
                }),
                (e.prototype.GetSlow = function () {
                    return -0.2 * (1 + this.GetAppendSlowFactor());
                }),
                (e.prototype.GetAttackSpeed = function () {
                    return this.data.attack_speed * (1 + h.BuffMgr.GetAttackSpeedBuff() + this.GetAppendAttackSpeed());
                }),
                (e.prototype.GetBuffIndexById = function (t) {
                    for (var e = 0; e < this.buffs.length; e++)
                        if (this.buffs[e]._id && this.buffs[e]._id == t) return e;
                    return -1;
                }),
                (e.prototype.AddAppendAttack = function (t, e, o) {
                    if ((void 0 === e && (e = 999), o)) {
                        var n = this.GetBuffIndexById(o);
                        if (-1 != n)
                            return void (this.buffs[n]._time = this.buffs[n]._time > e ? this.buffs[n]._time : e);
                    }
                    var i = new m(0, t, e, o);
                    this.buffs.push(i), this.BuffChange();
                }),
                (e.prototype.GetAppendAttack = function () {
                    return this.append_attack;
                }),
                (e.prototype.AddAppendAttackSpeed = function (t, e, o) {
                    if ((void 0 === e && (e = 999), o)) {
                        var n = this.GetBuffIndexById(o);
                        if (-1 != n)
                            return void (this.buffs[n]._time = this.buffs[n]._time > e ? this.buffs[n]._time : e);
                    }
                    var i = new m(t, 0, e, o);
                    this.buffs.push(i), this.BuffChange();
                }),
                (e.prototype.GetAppendAttackSpeed = function () {
                    return this.append_attack_speed;
                }),
                (e.prototype.UpdateBuffTime = function (t) {
                    for (var e = 0; e < this.buffs.length; e++)
                        this.buffs[e]._time > 0
                            ? (this.buffs[e]._time -= t)
                            : (this.buffs.splice(e, 1), e--, this.BuffChange());
                }),
                (e.prototype.BuffChange = function () {
                    var t = this;
                    (this.append_attack = 0),
                        (this.append_attack_speed = 0),
                        this.buffs.forEach(function (e) {
                            (t.append_attack_speed += e._attack_speed), (t.append_attack += e._attack);
                        });
                }),
                (e.prototype.HaveEnemy = function () {
                    return this.enemys.length > 0;
                }),
                (e.prototype.UpdateNorMalAttack = function (t) {
                    this.attacking ||
                        (this.cooldown > 0
                            ? (this.cooldown -= t)
                            : this.cooldown <= 0 &&
                              this.HaveEnemy() &&
                              ((this.cooldown = 1 / this.GetAttackSpeed()), this.Attack()));
                }),
                (e.prototype.UpdateSkill = function (t) {
                    this.attacking ||
                        (this.fetter_cooldown > 0
                            ? (this.fetter_cooldown -= t)
                            : this.fetter_cooldown <= 0 &&
                              this.HaveEnemy() &&
                              ((this.fetter_cooldown = this.fetter_cooldowntime),
                              console.log("放合击技能"),
                              this.PlayFetter()));
                }),
                (e.prototype.Pause = function () {
                    this.stoping = !0;
                }),
                (e.prototype.Resume = function () {
                    this.stoping = !1;
                }),
                (e.prototype.SetOtherBuffEffShow = function (t, e, o, n) {
                    if (u.default.ins.map_logic.ItemIsExist(t, e) && u.default.ins.map_logic.fight_items[t][e]) {
                        var i = u.default.ins.map_logic.fight_items[t][e].node;
                        if (this.eff_ld[t + "_" + e]) {
                            var r = this.eff_ld[t + "_" + e];
                            r.active
                                ? (cc.Tween.stopAllByTarget(r),
                                  cc
                                      .tween(r)
                                      .delay(o)
                                      .call(function () {
                                          r.active = !1;
                                      })
                                      .start())
                                : ((r.parent = this.node),
                                  r.setPosition(cc.Vec2.ZERO),
                                  (r.active = !0),
                                  d.default.NodeSetNewParent(r, i),
                                  (r.scale = 0),
                                  cc
                                      .tween(r)
                                      .to(0.3, {scale: 1, x: 0, y: 0})
                                      .delay(o)
                                      .call(function () {
                                          r.active = !1;
                                      })
                                      .start());
                        } else {
                            var s = cc.instantiate(n);
                            (this.eff_ld[t + "_" + e] = s),
                                (s.parent = this.node),
                                s.setPosition(cc.Vec2.ZERO),
                                (s.active = !0),
                                d.default.NodeSetNewParent(s, i),
                                (s.scale = 0),
                                cc
                                    .tween(s)
                                    .to(0.3, {scale: 1, x: 0, y: 0})
                                    .delay(o)
                                    .call(function () {
                                        s.active = !1;
                                    })
                                    .start();
                        }
                    }
                }),
                (e.prototype.update = function (t) {
                    this.stoping ||
                        (this.UpdateBuffTime(t), this.UpdateNorMalAttack(t), this.UpdateSkill(t), this.OtherUpdate(t));
                }),
                (e.prototype.OtherUpdate = function () {}),
                (e.prototype.onCollisionEnter = function (t) {
                    -1 != t.node.name.indexOf("e_") && this.AddEnmey(t.node.getComponent(_.default));
                }),
                (e.prototype.onCollisionExit = function (t) {
                    -1 != t.node.name.indexOf("e_") && this.RemoveEnmey(t.node.getComponent(_.default));
                }),
                (e.prototype.Attack = function () {
                    this.node_sp.setAnimation(0, "gongji", !1);
                }),
                (e.prototype.PlayFetter = function () {}),
                (e.prototype.InitOther = function () {}),
                (e.prototype.OnBulletHit = function () {}),
                (e.prototype.onDestroy = function () {
                    cc.Tween.stopAllByTarget(this.temp_color),
                        a.default.offEvent_csryw(s.ryw_Event.AddBuff, this.AddBuff, this);
                }),
                r([g], e)
            );
        })(cc.Component));
o.default = w;
var m = function (t, e, o, n) {
    (this._id = 0),
        (this._attack = 0),
        (this._attack_speed = 0),
        (this._time = 0),
        (this._attack_speed = t),
        (this._attack = e),
        (this._time = o),
        (this._id = n);
};
o.FightBuff = m;
