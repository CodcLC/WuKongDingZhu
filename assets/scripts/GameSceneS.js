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
    c = t("DialogMgr"),
    l = t("ResSubMgr"),
    d = t("SoundMgr"),
    u = t("User"),
    h = t("AppPlatform"),
    f = t("TTAPI"),
    p = t("FlayGold"),
    _ = t("ResMgr"),
    y = t("Utils"),
    g = t("BuffMgr"),
    w = t("ConfigMgr"),
    m = t("DataMgr"),
    v = t("EffMgr"),
    b = t("GuideMgr"),
    S = t("LogicMgr"),
    M = t("MapLogic"),
    k = t("LevelProS"),
    A = t("SelectS"),
    C = t("VideoGetS"),
    O = cc._decorator,
    x = O.ccclass,
    P = O.property,
    R = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.end_letgo_time = 0),
                (e.qp_colider = null),
                (e.ground_eff_node = null),
                (e.TestNode = null),
                (e.singleColor = null),
                (e.cm = null),
                (e.levelProS = null),
                (e.xy_frame = null),
                (e.xs_frame = null),
                (e.sf_frame = null),
                (e.xs2_frame = null),
                (e.fail_baozha = null),
                (e.jiaxue_tx = null),
                (e.bg_eff_node = null),
                (e.sp_caxc = null),
                (e.bg = null),
                (e.pause_btn = null),
                (e.red_hint = null),
                (e.boss_door = null),
                (e.boss_hint = null),
                (e.exp_pro = null),
                (e.count_lab = null),
                (e.hp_pro = null),
                (e.buttom_eff_node = null),
                (e.ExperienceNode = null),
                (e.HpNode = null),
                (e.buttom = null),
                (e.gz = null),
                (e.flygod = null),
                (e.money_pos = null),
                (e.MainCamera = null),
                (e.TopCamera = null),
                (e.GameNode = null),
                (e.UiNode = null),
                (e.topBlock = null),
                (e.centerBlock = null),
                (e.items_node = null),
                (e.step_lab = null),
                (e.center_eff_node = null),
                (e.top_eff_node = null),
                (e.hp_lab = null),
                (e.fight_node = null),
                (e.dark_mask = null),
                (e.enemy_node = null),
                (e.gameOver = !1),
                (e.touch_item = null),
                (e.loading = !1),
                (e.color = cc.color(0, 0, 0, 255)),
                (e.color_str = [
                    "#9fbca4",
                    "#9dc2a0",
                    "#eee8b5",
                    "#92807e",
                    "#c3ddae",
                    "#92807e",
                    "#ff8559",
                    "#e1747d",
                    "#543f7f",
                    "#9dbca2",
                    "#495665",
                    "#498690",
                    "##658a69",
                    "##769593",
                    "##9da964",
                    "##b29671"
                ]),
                (e.KaiZhanHint = null),
                (e.tx_kaizhan = null),
                (e.kz_hint = null),
                (e.fights = []),
                (e.round = 0),
                (e.round_sub_hp = 0),
                (e.enemys = []),
                (e.wait_show_rount = 0),
                (e.enemy_show_over = !1),
                (e.boss_pos = -1),
                (e.inEliminateStage = !0),
                (e.show_eliminate_radom_time = 5),
                (e.is_FightFinished = !1),
                (e.revive_round = -1),
                (e.mens = {}),
                (e.top_block_time = 0),
                (e.center_block_time = 0),
                (e.experience = 0),
                (e.is_my_pause = !1),
                (e.have_anymove = !1),
                (e.have_refresh = !1),
                (e.have_step = !1),
                e
            );
        }
        var o;
        return (
            i(e, t),
            (o = e),
            (e.prototype.onLoad = function () {
                (this.TestNode.active = !1),
                    (o.ins = this),
                    (this.map_logic = new M.MapLogic()),
                    (this.logic = new S.default()),
                    d.default.playMusic_csryw("zhandou"),
                    b.GuideMgr.in_guide && this.InitGuideView(),
                    this.InitBg();
            }),
            (e.prototype.start = function () {
                this.OnReSet(),
                    this.AddEvent(),
                    this.InitView(),
                    this.GetEnemyLevelConfig(),
                    this.StartRecord(),
                    g.BuffMgr.staybuff && (g.BuffMgr.AddBuff(g.BuffMgr.staybuff), (g.BuffMgr.staybuff = null)),
                    b.GuideMgr.in_guide &&
                        this.scheduleOnce(function () {
                            b.GuideMgr.getInstance().NextStep();
                        }, 1);
            }),
            (e.prototype.InitView = function () {
                this.RefreshStepView(), this.RefreshHpView();
            }),
            (e.prototype.InitBg = function () {
                var t = this;
                this.bg.spriteFrame = o.bg_frame;
                var e = "cm" + m.DataMgr.user_gamedata.select_level;
                b.GuideMgr.in_guide
                    ? ((e = "cm0"), (this.singleColor.color = this.color.fromHEX(this.color_str[0])))
                    : (this.singleColor.color = this.color.fromHEX(
                          this.color_str[m.DataMgr.user_gamedata.select_level]
                      )),
                    _.default.loadBundleSpriteFrame(
                        "subResGame",
                        "Textures/bg/" + e,
                        function (e) {
                            t.cm.spriteFrame = e;
                        },
                        this
                    );
                var n = "gz" + m.DataMgr.user_gamedata.select_level;
                b.GuideMgr.in_guide && (n = "gz0"),
                    _.default.loadBundleSpriteFrame(
                        "subResGame",
                        "Textures/bg/" + n,
                        function (e) {
                            t.gz.spriteFrame = e;
                        },
                        this
                    );
            }),
            (e.prototype.LoadCmPo = function () {
                var t = this,
                    e = "cmp" + m.DataMgr.user_gamedata.select_level;
                b.GuideMgr.in_guide && (e = "cmp0"),
                    _.default.loadBundleSpriteFrame(
                        "subResGame",
                        "Textures/bg/" + e,
                        function (e) {
                            t.cm.spriteFrame = e;
                        },
                        this
                    );
            }),
            (e.prototype.ShowKaiZhan = function () {
                var t = this;
                (this.kz_hint.opacity = 0),
                    (this.KaiZhanHint.active = !0),
                    cc
                        .tween(this.kz_hint)
                        .to(0.3, {opacity: 255})
                        .delay(1)
                        .to(0.3, {opacity: 0})
                        .call(function () {
                            t.KaiZhanHint.active = !1;
                        })
                        .start(),
                    v.EffMgr.PlayOncesSp(this.tx_kaizhan, "play");
            }),
            (e.prototype.AddEvent = function () {
                a.default.onEvent_csryw(s.ryw_Event.CloseSelectP, this.CheckHaveBox, this),
                    a.default.onEvent_csryw(s.ryw_Event.ChangeStep, this.RefreshStepView, this);
            }),
            (e.prototype.RemoveEvent = function () {
                a.default.offEvent_csryw(s.ryw_Event.CloseSelectP, this.CheckHaveBox, this),
                    a.default.offEvent_csryw(s.ryw_Event.ChangeStep, this.RefreshStepView, this);
            }),
            (e.prototype.Addfights = function (t, e, o) {
                -1 == this.fights.indexOf(o) &&
                    (this.fights.push(o),
                    this.logic.fight_damage[o.data.index] || (this.logic.fight_damage[o.data.index] = 0),
                    (this.map_logic.fight_items[t][e] = o));
            }),
            (e.prototype.CheckFightsHave = function (t) {
                var e = m.DataMgr.img_index[t];
                return e || console.error(t + "DataMgr.img_index未配置"), -1 != m.DataMgr.select_indexs.indexOf(e);
            }),
            (e.prototype.CheckFightsAllHave = function (t) {
                for (var e = [], o = 0; o < t.length; o++) e.push(m.DataMgr.img_index[t[o]]);
                for (o = 0; o < m.DataMgr.select_indexs.length; o++) {
                    var n = e.indexOf(m.DataMgr.select_indexs[o]);
                    -1 != n && e.splice(n, 1);
                }
                return 0 == e.length;
            }),
            (e.prototype.Removefights = function (t, e, o) {
                var n = this.fights.indexOf(o);
                -1 != n ? this.fights.splice(n, 1) : console.warn("索引有误"),
                    (this.map_logic.fight_items[t][e] = null);
            }),
            (e.prototype.RemoveAllEff = function () {
                this.buttom_eff_node.removeAllChildren(),
                    this.ground_eff_node.removeAllChildren(),
                    this.center_eff_node.removeAllChildren(),
                    this.top_eff_node.removeAllChildren();
            }),
            (e.prototype.GetEnemyLevelConfig = function () {
                var t;
                this.round++,
                    0 == m.DataMgr.extra_lv
                        ? ((this.enemys_level_data = w.ConfigMgr.GetEnemyLevelConfigClone(
                              m.DataMgr.user_gamedata.select_level,
                              this.round
                          )),
                          (t = w.ConfigMgr.GetLevelHaveBoss(m.DataMgr.user_gamedata.select_level, this.round)))
                        : ((this.enemys_level_data = w.ConfigMgr.GetEnemyLevelConfigClone(
                              m.DataMgr.extra_lv,
                              this.round
                          )),
                          (t = w.ConfigMgr.GetLevelHaveBoss(m.DataMgr.extra_lv, this.round))),
                    console.log("关卡敌人配置信息：", this.round, t, this.enemys_level_data),
                    b.GuideMgr.in_guide
                        ? ((this.enemys_level_data = w.ConfigMgr.GetGuideEnemyLevelConfigClone(this.round)),
                          (t = 2 == this.round))
                        : 0 == m.DataMgr.extra_lv
                        ? this.levelProS.ShowDay(
                              this.round,
                              w.ConfigMgr.enmeyLevel_config.levels["l_" + m.DataMgr.user_gamedata.select_level]
                                  .round_count
                          )
                        : this.levelProS.ShowDay(
                              this.round,
                              w.ConfigMgr.enmeyLevel_config.levels["l_" + m.DataMgr.extra_lv].round_count
                          ),
                    t &&
                        ((this.boss_pos = y.default.GetRandomNum(1, 4)),
                        b.GuideMgr.in_guide && (this.boss_pos = 2),
                        this.ShowBossHint(this.boss_pos));
            }),
            (e.prototype.ALlEnterFightingStage = function () {
                var t = this;
                (this.inEliminateStage = !1),
                    console.log("进入战斗阶段：", new Date().getTime()),
                    (this.is_FightFinished = !1),
                    this.ShowKaiZhan(),
                    this.OnViewEnterZq(),
                    (this.enemy_show_over = !1),
                    this.ShowDark(),
                    this.CameraEnterZq(function () {
                        (0 != t.dark_mask.active && t.dark_mask.opacity == m.DataMgr.mask_opacity) ||
                            (console.error("黑色遮罩异常，已纠正"),
                            (t.dark_mask.active = !0),
                            (t.dark_mask.opacity = m.DataMgr.mask_opacity)),
                            (t.wait_show_rount = t.enemys_level_data.length),
                            console.log("怪物波数为：", t.wait_show_rount),
                            t.map_logic.AllEnteright();
                        for (
                            var e = function (e) {
                                    var o = t.enemys_level_data[e];
                                    t.scheduleOnce(function () {
                                        console.log("出一波,剩余波数为：", t.wait_show_rount), t.ShowEnemy(o[0]);
                                    }, o[1]);
                                },
                                o = 0;
                            o < t.enemys_level_data.length;
                            o++
                        )
                            e(o);
                    });
            }),
            (e.prototype.EnterEliminateStage = function () {
                var t = this;
                console.log("进入消除阶段：", new Date().getTime()), this.UpdateBuffEffect(), this.HideBossHint();
                var e = -1 != this.boss_pos;
                this.GetEnemyLevelConfig(),
                    this.map_logic.AllItemsEnterEliminateStage(),
                    this.AddStep(g.BuffMgr.GetAddStep()),
                    this.OnViewEnterBz(),
                    this.HideDark(),
                    this.CameraEnterBz(function () {
                        if (
                            (t.RemoveAllEff(),
                            (t.inEliminateStage = !0),
                            console.log("发送进入消除阶段事件！！！", new Date().getTime()),
                            a.default.emitEvent_csryw(s.ryw_Event.EnterEliminateStage),
                            t.round % 5 == 1 && t.StartRecord(),
                            b.GuideMgr.in_guide && -1 != t.boss_pos)
                        ) {
                            var n = o.ins.UiNode.getChildByName("StepNode").getChildByName("bg"),
                                i = n.convertToWorldSpaceAR(cc.Vec2.ZERO);
                            (i.x -= 300),
                                b.GuideMgr.getInstance().NextStep(
                                    i,
                                    n.getComponent(cc.Sprite).spriteFrame,
                                    function () {
                                        b.GuideMgr.getInstance().HideGuide(),
                                            o.ins.BlockTop(0.5),
                                            console.log("准备进入引导最后一步========="),
                                            t.scheduleOnce(function () {
                                                console.log("引导最后一步========="),
                                                    b.GuideMgr.getInstance().NextStep(
                                                        i,
                                                        n.getComponent(cc.Sprite).spriteFrame,
                                                        function () {
                                                            b.GuideMgr.getInstance().HideGuide(), o.ins.CloseBlockTop();
                                                        }
                                                    );
                                            }, 0.5);
                                    }
                                );
                        }
                        e &&
                            t.round != t.revive_round &&
                            (t.gameOver ||
                                (t.OnBoss(),
                                t.scheduleOnce(function () {
                                    t.map_logic.RetainItem(m.DataMgr.RetainCount);
                                }, 0.5)),
                            (t.boss_pos = -1));
                    });
            }),
            (e.prototype.UpdateBuffEffect = function () {
                if (
                    (g.BuffMgr.CheckHaveBuff(15) &&
                        (0 == this.round_sub_hp && this.AddHp(200), (this.round_sub_hp = 0)),
                    g.BuffMgr.CheckHaveBuff(54))
                ) {
                    for (var t = 0, e = 0; e < this.fights.length; e++) "zn" == this.fights[e].data.img && (t += 5);
                    this.AddHp(t);
                }
            }),
            (e.prototype.ShowEnemy = function (t) {
                for (
                    var e = this,
                        o = w.ConfigMgr.enemyGroup_config.get(t),
                        n = function (t) {
                            var n = t * (o.time / o.count),
                                r = t;
                            i.scheduleOnce(function () {
                                r == o.count - 1 && e.wait_show_rount--,
                                    0 == e.wait_show_rount &&
                                        (console.log("最后一个人生成完"),
                                        (e.enemy_show_over = !0),
                                        a.default.onEvent_csryw(s.ryw_Event.Enmeydie, e.CheckFightFinish, e)),
                                    e.CreateEnemy(o.enemy_index);
                            }, n);
                        },
                        i = this,
                        r = 0;
                    r < o.count;
                    r++
                )
                    n(r);
            }),
            (e.prototype.CheckFightFinish = function () {
                if (this.CheckEnmeyKillOver()) {
                    if (this.is_FightFinished) return;
                    if (
                        ((this.is_FightFinished = !0),
                        a.default.offEvent_csryw(s.ryw_Event.Enmeydie, this.CheckFightFinish, this),
                        b.GuideMgr.in_guide)
                    )
                        return void (2 == this.round
                            ? this.OnFightWin()
                            : (console.log("进入消除阶段11111111111111"), this.EnterEliminateStage()));
                    var t;
                    (t = 0 == m.DataMgr.extra_lv ? m.DataMgr.user_gamedata.select_level : m.DataMgr.extra_lv),
                        this.round == w.ConfigMgr.enmeyLevel_config.levels["l_" + t].round_count && m.DataMgr.hp > 0
                            ? this.OnFightWin()
                            : (console.log("进入消除阶段2222222222222222"), this.EnterEliminateStage());
                }
            }),
            (e.prototype.OnFightWin = function () {
                var t = this;
                this.gameOver ||
                    ((this.gameOver = !0),
                    this.loading ||
                        ((this.loading = !0),
                        this.BlockTop(2),
                        this.scheduleOnce(function () {
                            _.default.loadBundlePrefab(
                                "subResGame",
                                "ViewPrefab/FightWinP",
                                function (e) {
                                    t.loading = !1;
                                    var o = cc.instantiate(e);
                                    t.node.addChild(o);
                                },
                                t
                            );
                        }, 2)));
            }),
            (e.prototype.OnFighFail = function () {
                var t = this;
                if (!this.gameOver && ((this.gameOver = !0), !this.loading))
                    if (((this.loading = !0), this.PauseMyGame(), b.GuideMgr.in_guide)) this.OnFail();
                    else if (m.DataMgr.is_revive) this.OnFail();
                    else {
                        var e = cc.instantiate(l.ResSubMgr.getPrefabBySubGame(l.EnumSubGameRes.VideoGetP)),
                            o = e.getComponent(C.default);
                        (o.open_click_empt_close = !1),
                            o.SetSucessFun(
                                "复活",
                                function () {
                                    (m.DataMgr.is_revive = !0),
                                        t.ResumeMyGame(!1),
                                        (t.loading = !1),
                                        -1 != t.boss_pos &&
                                            (console.log("boss回合，复活重新打"),
                                            (t.revive_round = t.round),
                                            t.round--),
                                        t.unscheduleAllCallbacks(),
                                        t.enemy_show_over ||
                                            ((t.enemy_show_over = !0),
                                            a.default.onEvent_csryw(s.ryw_Event.Enmeydie, t.CheckFightFinish, t)),
                                        t.scheduleOnce(function () {
                                            t.logic.AllEnmeysDie();
                                        }, 1),
                                        (t.gameOver = !1),
                                        t.AddHp(1e7),
                                        t.AddStep(6),
                                        t.scheduleOnce(function () {
                                            t.AddExperience(0, !0);
                                        }, 2);
                                },
                                this,
                                "hgxy_yxjm_30",
                                function () {
                                    t.OnFail();
                                }
                            ),
                            this.node.addChild(e);
                    }
            }),
            (e.prototype.OnFail = function () {
                var t = this;
                console.log("游戏失败~~~~~~~~~~~"),
                    cc
                        .tween(this.MainCamera.node)
                        .to(0.5, {y: -200})
                        .call(function () {
                            t.scheduleOnce(function () {
                                d.default.playSound_csryw("cmbaozha");
                            }, 0.3),
                                t.scheduleOnce(function () {
                                    t.LoadCmPo();
                                }, 0.6),
                                v.EffMgr.PlayOncesSp(
                                    t.fail_baozha,
                                    "play",
                                    function () {
                                        _.default.loadBundlePrefab(
                                            "subResGame",
                                            "ViewPrefab/FightFailP",
                                            function (e) {
                                                t.loading = !1;
                                                var o = cc.instantiate(e);
                                                t.node.addChild(o);
                                            },
                                            t
                                        );
                                    },
                                    t
                                );
                        })
                        .start();
            }),
            (e.prototype.CreateEnemy = function (t, e) {
                var o = w.ConfigMgr.enemy_config.get(t),
                    n = w.ConfigMgr.EnemyInfo[o.img],
                    i = cc.instantiate(l.ResSubMgr.getPrefabBySubGame(n.prefab));
                this.enemy_node.addChild(i);
                var r = i.getComponent(n.scrS);
                this.enemys.push(r), r.Init(o, e), e || this.ShowCreateMen(i);
            }),
            (e.prototype.ShowCreateMen = function (t) {
                if (this.mens[t.x + "_" + t.y]) {
                    var e = this.mens[t.x + "_" + t.y];
                    e.active
                        ? (cc.Tween.stopAllByTarget(e),
                          cc
                              .tween(e)
                              .delay(1.5)
                              .call(function () {
                                  e.node.active = !1;
                              })
                              .start())
                        : ((e.node.active = !0),
                          e.setAnimation(0, "play1", !1),
                          e.setCompleteListener(function () {
                              e.setCompleteListener(null),
                                  e.setAnimation(0, "play2", !0),
                                  cc
                                      .tween(e)
                                      .delay(1.5)
                                      .call(function () {
                                          e.node.active = !1;
                                      })
                                      .start();
                          }));
                } else {
                    var n = cc
                            .instantiate(l.ResSubMgr.getPrefabBySubGame(l.EnumSubGameRes.tx_sc))
                            .getComponent(sp.Skeleton),
                        i = t.convertToWorldSpaceAR(cc.Vec2.ZERO),
                        r = o.ins.bg_eff_node.convertToNodeSpaceAR(i);
                    (n.node.parent = o.ins.bg_eff_node),
                        n.node.setPosition(r),
                        (this.mens[t.x + "_" + t.y] = n),
                        (n.node.active = !0),
                        n.setAnimation(0, "play1", !1),
                        n.setCompleteListener(function () {
                            n.setCompleteListener(null),
                                n.setAnimation(0, "play2", !0),
                                cc
                                    .tween(n)
                                    .delay(1.5)
                                    .call(function () {
                                        n.node.active = !1;
                                    })
                                    .start();
                        });
                }
            }),
            (e.prototype.RemoveEnemys = function (t) {
                var e = o.ins.enemys.indexOf(t);
                -1 != e ? this.enemys.splice(e, 1) : console.warn("移除敌人数组失败");
            }),
            (e.prototype.CheckEnmeyKillOver = function () {
                return 0 == this.enemys.length;
            }),
            (e.prototype.ShowBossHint = function (t) {
                d.default.playSound_csryw("boss"),
                    (this.boss_hint.x = t * this.map_logic.width - 297),
                    (this.boss_hint.active = !0),
                    (this.boss_hint.opacity = 0),
                    (this.boss_door.opacity = 255),
                    cc.Tween.stopAllByTarget(this.boss_hint),
                    cc.tween(this.boss_hint).to(0.1, {opacity: 255}).start();
            }),
            (e.prototype.HideBossDoor = function () {
                cc.tween(this.boss_door).to(0.1, {opacity: 0}).start();
            }),
            (e.prototype.HideBossHint = function () {
                var t = this;
                0 != this.boss_hint.active &&
                    cc
                        .tween(this.boss_hint)
                        .to(0.1, {opacity: 0})
                        .call(function () {
                            t.boss_hint.active = !1;
                        })
                        .start();
            }),
            (e.prototype.ShowDark = function () {
                this.dark_mask.active = !0;
                var t = m.DataMgr.mask_opacity;
                cc.tween(this.dark_mask).to(0.5, {opacity: t}).start();
            }),
            (e.prototype.HideDark = function () {
                var t = this;
                cc.tween(this.dark_mask)
                    .to(0.5, {opacity: 0})
                    .call(function () {
                        t.dark_mask.active = !1;
                    })
                    .start();
            }),
            (e.prototype.CheckHaveBox = function () {
                this.map_logic.CheckHaveBox();
            }),
            (e.prototype.RefreshStepView = function () {
                this.step_lab.string = m.DataMgr.step.toString();
            }),
            (e.prototype.RefreshHpView = function () {
                this.hp_lab.string = m.DataMgr.hp + "/" + m.DataMgr.GetMaxHp();
                var t = m.DataMgr.hp / m.DataMgr.GetMaxHp();
                cc.Tween.stopAllByTarget(this.hp_pro), cc.tween(this.hp_pro).to(0.2, {progress: t}).start();
            }),
            (e.prototype.CameraEnterZq = function (t) {
                cc.tween(this.MainCamera.node).to(0.5, {y: 0}).start(),
                    cc
                        .tween(this.MainCamera)
                        .to(0.5, {zoomRatio: 0.73})
                        .delay(0.5)
                        .call(function () {
                            t();
                        })
                        .start(),
                    cc.tween(this.TopCamera).to(0.5, {zoomRatio: 0.73}).delay(0.5).start();
            }),
            (e.prototype.CameraEnterBz = function (t) {
                cc.tween(this.MainCamera.node).to(0.5, {y: -100}).start(),
                    cc
                        .tween(this.MainCamera)
                        .to(0.5, {zoomRatio: 1})
                        .delay(0.5)
                        .call(function () {
                            t();
                        })
                        .start(),
                    cc.tween(this.TopCamera).to(0.5, {zoomRatio: 1}).start();
            }),
            (e.prototype.OnViewEnterZq = function () {
                this.HideButtom(),
                    cc.tween(this.ExperienceNode).to(0.5, {opacity: 255}).start(),
                    cc.tween(this.HpNode).by(0.5, {y: -40}).start();
            }),
            (e.prototype.OnViewEnterBz = function () {
                this.ShowButtom(),
                    cc.tween(this.ExperienceNode).to(0.5, {opacity: 0}).start(),
                    cc.tween(this.HpNode).by(0.5, {y: 40}).start(),
                    (this.count_lab.string = this.round.toString());
            }),
            (e.prototype.update = function (t) {
                this.UpdateBlock(t),
                    this.UpdateRecord(t),
                    this.inEliminateStage &&
                        ((this.show_eliminate_radom_time -= t),
                        this.show_eliminate_radom_time <= 0 &&
                            this.map_logic.ShowHint() &&
                            (this.show_eliminate_radom_time = 5));
            }),
            (e.prototype.UpdateBlock = function (t) {
                0 != this.top_block_time &&
                    ((this.top_block_time -= t),
                    this.top_block_time <= 0 && ((this.top_block_time = 0), (this.topBlock.active = !1))),
                    0 != this.center_block_time &&
                        ((this.center_block_time -= t),
                        this.center_block_time <= 0 && ((this.center_block_time = 0), (this.centerBlock.active = !1)));
            }),
            (e.prototype.BlockTop = function (t) {
                void 0 === t && (t = 0.1),
                    (this.topBlock.active = !0),
                    this.top_block_time < t && (this.top_block_time = t);
            }),
            (e.prototype.BlockCenter = function (t) {
                void 0 === t && (t = 0.1),
                    (this.centerBlock.active = !0),
                    this.center_block_time < t && (this.center_block_time = t);
            }),
            (e.prototype.CloseBlocCenter = function () {
                (this.center_block_time = 0), (this.centerBlock.active = !1);
            }),
            (e.prototype.CloseBlockTop = function () {
                (this.top_block_time = 0), (this.topBlock.active = !1);
            }),
            (e.prototype.AddStep = function (t) {
                m.DataMgr.AddStep(t);
            }),
            (e.prototype.SubStep = function (t) {
                m.DataMgr.SubStep(t);
            }),
            (e.prototype.AddHp = function (t) {
                this.PlayAddHpEff(), m.DataMgr.AddHp(t), this.RefreshHpView();
            }),
            (e.prototype.PlayAddHpEff = function () {
                v.EffMgr.PlayOncesSp(this.jiaxue_tx, "play");
            }),
            (e.prototype.SubHp = function (t) {
                (this.round_sub_hp += t),
                    this.ShowRedHint(),
                    m.DataMgr.SubHp(t),
                    this.RefreshHpView(),
                    m.DataMgr.hp <= 0 && this.OnFighFail();
            }),
            (e.prototype.Surrender = function () {
                this.PauseMyGame(),
                    this.ShowRedHint(),
                    m.DataMgr.SubHp(m.DataMgr.hp),
                    this.RefreshHpView(),
                    this.OnFail();
            }),
            (e.prototype.AddMaxHp = function (t) {
                m.DataMgr.AddAppedMaxHp(t), this.AddHp(t);
            }),
            (e.prototype.AddExperience = function (t, e) {
                void 0 === e && (e = !1),
                    (this.experience += Math.floor(t)),
                    (this.experience += Math.floor(t * g.BuffMgr.GetExperienceFactorBuff()));
                var o = w.ConfigMgr.base_config.exp_base * w.ConfigMgr.base_config.exp_facotr * m.DataMgr.lv;
                if (e || this.experience >= o) {
                    m.DataMgr.lv++, (this.experience = 0);
                    var n = cc
                        .instantiate(l.ResSubMgr.getPrefabBySubGame(l.EnumSubGameRes.SelectP))
                        .getComponent(A.default);
                    this.node.addChild(n.node), n.Init(A.SelectType.uplv);
                }
                this.exp_pro.progress = this.experience / o;
            }),
            (e.prototype.GetMyPause = function () {
                return this.is_my_pause;
            }),
            (e.prototype.PauseMyGame = function () {
                (this.is_my_pause = !0), this.logic.StopAllEnmeys(), this.logic.PauseAllFights();
            }),
            (e.prototype.ResumeMyGame = function (t) {
                void 0 === t && (t = !0),
                    (this.is_my_pause = !1),
                    t && this.logic.ResumeAllEnmeys(),
                    this.logic.ResumeAllFights();
            }),
            (e.prototype.PauseGame = function () {
                cc.director.pause();
            }),
            (e.prototype.ResumeGame = function () {
                cc.director.resume();
            }),
            (e.prototype.onDestroy = function () {
                (o.ins = null), this.RemoveEvent();
            }),
            (e.prototype.OnPause = function () {
                var t = this;
                this.loading ||
                    ((this.loading = !0),
                    _.default.loadBundlePrefab(
                        "subResGame",
                        "ViewPrefab/PauseP",
                        function (e) {
                            t.loading = !1;
                            var o = cc.instantiate(e);
                            t.node.addChild(o);
                        },
                        this
                    ));
            }),
            (e.prototype.OnAnyMove = function () {
                var t = this;
                if (this.have_anymove) {
                    c.default.openToast("开启任意走"), g.BuffMgr.AddCanMoveAny(), (this.have_anymove = !1);
                    var e = this.buttom.getChildByName("anymove_btn").getChildByName("add");
                    m.DataMgr.video_gamedata.anyMove_count > 0
                        ? _.default.loadBundleSpriteFrame(
                              "subResGame",
                              "Textures/gameui/add",
                              function (t) {
                                  e.getComponent(cc.Sprite).spriteFrame = t;
                              },
                              this
                          )
                        : ((e.active = !1),
                          (this.buttom.getChildByName("anymove_btn").getChildByName("mask").active = !0));
                } else {
                    var o = cc.instantiate(l.ResSubMgr.getPrefabBySubGame(l.EnumSubGameRes.VideoGetP));
                    this.node.addChild(o),
                        o.getComponent(C.default).SetSucessFun(
                            "移动道具",
                            function () {
                                (t.have_anymove = !0), m.DataMgr.video_gamedata.anyMove_count--;
                                var e = t.buttom.getChildByName("anymove_btn").getChildByName("add");
                                _.default.loadBundleSpriteFrame(
                                    "subResGame",
                                    "Textures/gameui/one",
                                    function (t) {
                                        e.getComponent(cc.Sprite).spriteFrame = t;
                                    },
                                    t
                                );
                            },
                            this,
                            "hgxy_yxjm_27"
                        );
                }
            }),
            (e.prototype.OnRefresh = function () {
                var t = this;
                if (this.have_refresh) {
                    this.map_logic.OnRefreshAll(), (this.have_refresh = !1);
                    var e = this.buttom.getChildByName("refresh_btn").getChildByName("add");
                    m.DataMgr.video_gamedata.refresh_count > 0
                        ? _.default.loadBundleSpriteFrame(
                              "subResGame",
                              "Textures/gameui/add",
                              function (t) {
                                  e.getComponent(cc.Sprite).spriteFrame = t;
                              },
                              this
                          )
                        : ((e.active = !1),
                          (this.buttom.getChildByName("refresh_btn").getChildByName("mask").active = !0));
                } else {
                    var o = cc.instantiate(l.ResSubMgr.getPrefabBySubGame(l.EnumSubGameRes.VideoGetP));
                    this.node.addChild(o),
                        o.getComponent(C.default).SetSucessFun(
                            "刷新棋盘",
                            function () {
                                (t.have_refresh = !0), m.DataMgr.video_gamedata.refresh_count--;
                                var e = t.buttom.getChildByName("refresh_btn").getChildByName("add");
                                _.default.loadBundleSpriteFrame(
                                    "subResGame",
                                    "Textures/gameui/one",
                                    function (t) {
                                        e.getComponent(cc.Sprite).spriteFrame = t;
                                    },
                                    t
                                );
                            },
                            this,
                            "hgxy_yxjm_28"
                        );
                }
            }),
            (e.prototype.OnStep = function () {
                var t = this;
                if (this.have_step) {
                    c.default.openToast("步数+10"), m.DataMgr.AddStep(10), (this.have_step = !1);
                    var e = this.buttom.getChildByName("step_btn").getChildByName("add");
                    m.DataMgr.video_gamedata.step_count > 0
                        ? _.default.loadBundleSpriteFrame(
                              "subResGame",
                              "Textures/gameui/add",
                              function (t) {
                                  e.getComponent(cc.Sprite).spriteFrame = t;
                              },
                              this
                          )
                        : ((e.active = !1),
                          (this.buttom.getChildByName("step_btn").getChildByName("mask").active = !0));
                } else {
                    var o = cc.instantiate(l.ResSubMgr.getPrefabBySubGame(l.EnumSubGameRes.VideoGetP));
                    this.node.addChild(o),
                        o.getComponent(C.default).SetSucessFun(
                            "增加步数",
                            function () {
                                (t.have_step = !0), m.DataMgr.video_gamedata.step_count;
                                var e = t.buttom.getChildByName("step_btn").getChildByName("add");
                                _.default.loadBundleSpriteFrame(
                                    "subResGame",
                                    "Textures/gameui/one",
                                    function (t) {
                                        e.getComponent(cc.Sprite).spriteFrame = t;
                                    },
                                    t
                                );
                            },
                            this,
                            "hgxy_yxjm_29"
                        );
                }
            }),
            (e.prototype.HideButtom = function () {
                var t = this;
                cc.tween(this.buttom)
                    .to(0.5, {opacity: 0})
                    .call(function () {
                        t.buttom.active = !1;
                    })
                    .start();
            }),
            (e.prototype.ShowButtom = function () {
                (this.buttom.active = !0), cc.tween(this.buttom).to(0.5, {opacity: 255}).start();
            }),
            (e.prototype.ShowRedHint = function () {
                var t = this;
                cc.Tween.stopAllByTarget(this.red_hint),
                    (this.red_hint.active = !0),
                    cc
                        .tween(this.red_hint)
                        .to(0.2, {opacity: 255})
                        .delay(0.2)
                        .to(0.2, {opacity: 0})
                        .call(function () {
                            t.red_hint.active = !1;
                        })
                        .start();
            }),
            (e.prototype.InitGuideView = function () {
                this.BlockTop(1),
                    (this.pause_btn.active = !1),
                    (this.buttom.getChildByName("anymove_btn").getChildByName("add").active = !1),
                    (this.buttom.getChildByName("anymove_btn").getChildByName("mask").active = !0),
                    (this.buttom.getChildByName("refresh_btn").getChildByName("add").active = !1),
                    (this.buttom.getChildByName("refresh_btn").getChildByName("mask").active = !0),
                    (this.buttom.getChildByName("step_btn").getChildByName("add").active = !1),
                    (this.buttom.getChildByName("step_btn").getChildByName("mask").active = !0),
                    (this.ExperienceNode.y -= 60);
            }),
            (e.prototype.StartRecord = function () {
                f.default.startRecord_csryw(),
                    (m.DataMgr.GameRecordTime = 0),
                    (m.DataMgr.GameRecordTimeDt = 0),
                    (m.DataMgr.GameIsRecord = !1);
            }),
            (e.prototype.OnShare = function () {
                m.DataMgr.GameRecordTime < 3.1
                    ? c.default.openToast("当前录屏不足3s")
                    : (m.DataMgr.GameIsRecord || ((m.DataMgr.GameIsRecord = !0), f.default.stopRecord_csryw()),
                      "" == f.default.recordRes_csryw
                          ? (console.log("延时分享222"),
                            y.default.ShowLoading(),
                            this.scheduleOnce(function () {
                                y.default.HideLoading(), f.default.shareRecord_csryw();
                            }, 0.5))
                          : f.default.shareRecord_csryw());
            }),
            (e.prototype.UpdateRecord = function (t) {
                m.DataMgr.GameIsRecord ||
                    ((m.DataMgr.GameRecordTimeDt += t),
                    m.DataMgr.GameRecordTimeDt >= 1 &&
                        ((m.DataMgr.GameRecordTimeDt -= 1),
                        m.DataMgr.GameRecordTime++,
                        m.DataMgr.GameRecordTime >= 298 &&
                            ((m.DataMgr.GameRecordTime = 0),
                            f.default.stopRecord_csryw(),
                            (m.DataMgr.GameIsRecord = !0))));
            }),
            (e.prototype.OnAddCols = function () {
                8 != this.map_logic.col_y &&
                    (this.map_logic.AddCols(),
                    cc.tween(this.gz.node).by(0.1, {y: 118.5}).start(),
                    cc.tween(this.dark_mask).by(0.1, {y: 118.5}).start());
            }),
            (e.prototype.OnReSet = function () {
                (this.map_logic.Pool_Items = {}),
                    (this.map_logic.items = []),
                    this.map_logic.CreateItems(),
                    this.map_logic.AllItemsEnterEliminateStage(),
                    this.logic.ClearFightDamage();
            }),
            (e.prototype.OnGm = function () {
                w.ConfigMgr.is_dr
                    ? (this.TestNode.active = !0)
                    : h.default.is_TT_GAME_csryw() &&
                      u.default.getGameOpenid() &&
                      -1 != w.ConfigMgr.dr_openids.indexOf(u.default.getGameOpenid()) &&
                      ((w.ConfigMgr.is_dr = !0), (this.TestNode.active = !0));
            }),
            (e.prototype.OnCloseGm = function () {
                this.TestNode.active = !1;
            }),
            (e.prototype.OnBtnWin = function () {
                var t = this;
                (this.TestNode.active = !1),
                    this.gameOver ||
                        ((this.gameOver = !0),
                        this.loading ||
                            ((this.loading = !0),
                            _.default.loadBundlePrefab(
                                "subResGame",
                                "ViewPrefab/FightWinP",
                                function (e) {
                                    t.loading = !1;
                                    var o = cc.instantiate(e);
                                    t.node.addChild(o);
                                },
                                this
                            )));
            }),
            (e.prototype.OnOpenTilted = function () {
                g.BuffMgr.can_tilted = !g.BuffMgr.can_tilted;
            }),
            (e.prototype.OnRefreshAll = function () {
                this.map_logic.OnRefreshAll();
            }),
            (e.prototype.OnAddCanMoveAny = function () {
                g.BuffMgr.AddCanMoveAny();
            }),
            (e.prototype.OnSetShowUpLv = function () {}),
            (e.prototype.OnRandomUplv = function () {
                this.map_logic.RandomUplv(Math.random() > 0.5 ? 2 : 3);
            }),
            (e.prototype.OnRetainItem = function () {
                this.map_logic.RetainItem(6);
            }),
            (e.prototype.OnBoss = function () {
                var t = cc
                    .instantiate(l.ResSubMgr.getPrefabBySubGame(l.EnumSubGameRes.SelectP))
                    .getComponent(A.default);
                this.node.addChild(t.node), t.Init(A.SelectType.boss);
            }),
            (e.prototype.OnUp = function () {
                var t = cc
                    .instantiate(l.ResSubMgr.getPrefabBySubGame(l.EnumSubGameRes.SelectP))
                    .getComponent(A.default);
                this.node.addChild(t.node), t.Init(A.SelectType.uplv);
            }),
            (e.prototype.OnBox = function () {
                var t = cc
                    .instantiate(l.ResSubMgr.getPrefabBySubGame(l.EnumSubGameRes.SelectP))
                    .getComponent(A.default);
                this.node.addChild(t.node), t.Init(A.SelectType.box3);
            }),
            (e.prototype.OnDownOpatity = function () {
                (m.DataMgr.mask_opacity -= 25),
                    m.DataMgr.mask_opacity < 0 && (m.DataMgr.mask_opacity = 0),
                    (this.dark_mask.opacity = m.DataMgr.mask_opacity);
            }),
            (e.ins = null),
            r([P(cc.Node)], e.prototype, "qp_colider", void 0),
            r([P(cc.Node)], e.prototype, "ground_eff_node", void 0),
            r([P(cc.Node)], e.prototype, "TestNode", void 0),
            r([P(cc.Node)], e.prototype, "singleColor", void 0),
            r([P(cc.Sprite)], e.prototype, "cm", void 0),
            r([P(k.default)], e.prototype, "levelProS", void 0),
            r([P(cc.SpriteFrame)], e.prototype, "xy_frame", void 0),
            r([P(cc.SpriteFrame)], e.prototype, "xs_frame", void 0),
            r([P(cc.SpriteFrame)], e.prototype, "sf_frame", void 0),
            r([P(cc.SpriteFrame)], e.prototype, "xs2_frame", void 0),
            r([P(sp.Skeleton)], e.prototype, "fail_baozha", void 0),
            r([P(sp.Skeleton)], e.prototype, "jiaxue_tx", void 0),
            r([P(cc.Node)], e.prototype, "bg_eff_node", void 0),
            r([P(sp.Skeleton)], e.prototype, "sp_caxc", void 0),
            r([P(cc.Sprite)], e.prototype, "bg", void 0),
            r([P(cc.Node)], e.prototype, "pause_btn", void 0),
            r([P(cc.Node)], e.prototype, "red_hint", void 0),
            r([P(cc.Node)], e.prototype, "boss_door", void 0),
            r([P(cc.Node)], e.prototype, "boss_hint", void 0),
            r([P(cc.ProgressBar)], e.prototype, "exp_pro", void 0),
            r([P(cc.Label)], e.prototype, "count_lab", void 0),
            r([P(cc.ProgressBar)], e.prototype, "hp_pro", void 0),
            r([P(cc.Node)], e.prototype, "buttom_eff_node", void 0),
            r([P(cc.Node)], e.prototype, "ExperienceNode", void 0),
            r([P(cc.Node)], e.prototype, "HpNode", void 0),
            r([P(cc.Node)], e.prototype, "buttom", void 0),
            r([P(cc.Sprite)], e.prototype, "gz", void 0),
            r([P(p.default)], e.prototype, "flygod", void 0),
            r([P(cc.Node)], e.prototype, "money_pos", void 0),
            r([P(cc.Camera)], e.prototype, "MainCamera", void 0),
            r([P(cc.Camera)], e.prototype, "TopCamera", void 0),
            r([P(cc.Node)], e.prototype, "GameNode", void 0),
            r([P(cc.Node)], e.prototype, "UiNode", void 0),
            r([P(cc.Node)], e.prototype, "topBlock", void 0),
            r([P(cc.Node)], e.prototype, "centerBlock", void 0),
            r([P(cc.Node)], e.prototype, "items_node", void 0),
            r([P(cc.Label)], e.prototype, "step_lab", void 0),
            r([P(cc.Node)], e.prototype, "center_eff_node", void 0),
            r([P(cc.Node)], e.prototype, "top_eff_node", void 0),
            r([P(cc.Label)], e.prototype, "hp_lab", void 0),
            r([P(cc.Node)], e.prototype, "fight_node", void 0),
            r([P(cc.Node)], e.prototype, "dark_mask", void 0),
            r([P(cc.Node)], e.prototype, "enemy_node", void 0),
            r([P(cc.Node)], e.prototype, "KaiZhanHint", void 0),
            r([P(sp.Skeleton)], e.prototype, "tx_kaizhan", void 0),
            r([P(cc.Node)], e.prototype, "kz_hint", void 0),
            (o = r([x], e))
        );
    })(cc.Component);
o.default = R;
