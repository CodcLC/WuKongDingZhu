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
    f = t("FightBase"),
    p = cc._decorator,
    _ = p.ccclass,
    y = p.property,
    g = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.gz_sp = null),
                (e.swk_tsj = null),
                (e.attack_colider = []),
                (e.whack = null),
                (e.attack_range_collider = null),
                (e.can_beat_vertigo = !1),
                (e.can_three_whack = !1),
                (e.down_whack_count = 5),
                (e.play_attack_two = !1),
                (e.pro_kill = 0),
                (e.zx_bt_sp = null),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.AddBuff = function (t) {
                switch (t.index) {
                    case 18:
                        this.AddAppendAttack(t.num / 100);
                        break;
                    case 19:
                        this.BuffSetAttackTwo();
                        break;
                    case 20:
                        this.BuffSetCanBeatVertigo();
                        break;
                    case 21:
                        this.BuffSetGzBigger();
                        break;
                    case 22:
                        this.BuffAddProKill(0.1);
                        break;
                    case 23:
                        this.BuffAddThreeWhack();
                }
            }),
            (e.prototype.InitHideFetter = function () {
                d.default.ins.CheckFightsHave(u.img.zxxz)
                    ? 0 != this.pro_kill && (this.pro_kill += 0.1)
                    : d.default.ins.CheckFightsAllHave([u.img.ts, u.img.shs, u.img.zbj])
                    ? this.AddAppendAttack(0.2, 999)
                    : d.default.ins.CheckFightsAllHave([u.img.blm, u.img.zbj, u.img.zzj]) &&
                      (this.AddAppendAttack(0.2, 999), this.AddAppendAttackSpeed(0.5, 999)),
                    d.default.ins.CheckFightsHave(u.img.bgj) && this.AddAppendAttackSpeed(0.5, 999),
                    d.default.ins.CheckFightsHave(u.img.ts) && this.AddAppendAttack(0.2, 999),
                    d.default.ins.CheckFightsHave(u.img.nmw) && this.AddAppendAttack(0.2, 999);
            }),
            (e.prototype.BuffAddThreeWhack = function () {
                this.can_three_whack = !0;
            }),
            (e.prototype.BuffSetCanBeatVertigo = function () {
                this.can_beat_vertigo = !0;
            }),
            (e.prototype.BuffAddProKill = function (t) {
                this.pro_kill = t;
            }),
            (e.prototype.BuffSetAttackTwo = function () {
                this.play_attack_two = !0;
            }),
            (e.prototype.BuffSetGzBigger = function () {
                (this.node.getComponent(cc.CircleCollider).radius += 0.2), (this.gz_sp.node.scale += 0.2);
            }),
            (e.prototype.InitOther = function () {
                (this.down_whack_count = l.default.GetRandomNum(5, 8)),
                    (this.swk_tsj.node.active = !0),
                    this.swk_tsj.setSkin("lv" + this.data.start),
                    (this.swk_tsj.node.active = !1);
                for (var t = 0; t < this.attack_colider.length; t++)
                    (this.attack_colider[t].tag = this.data.index),
                        (this.attack_colider[t].node.attack_name = "fight"),
                        (this.attack_colider[t].node.attack_type = "default"),
                        (this.attack_colider[t].node.fight = this);
                (this.whack.tag = this.data.index),
                    (this.whack.node.attack_name = "fight"),
                    (this.whack.node.attack_type = "whack"),
                    (this.whack.node.fight = this);
            }),
            (e.prototype.Attack = function () {
                var e = this;
                (this.attacking = !0),
                    t.prototype.Attack.call(this),
                    this.scheduleOnce(function () {
                        a.default.playSound_csryw("swk");
                    }, 0.15),
                    h.EffMgr.PlayOncesSp(
                        this.gz_sp,
                        "lv" + this.lv,
                        function () {
                            e.play_attack_two
                                ? h.EffMgr.PlayOncesSp(
                                      e.gz_sp,
                                      "lv" + e.lv,
                                      function () {
                                          e.attackOver();
                                      },
                                      e
                                  )
                                : e.attackOver();
                        },
                        this
                    );
            }),
            (e.prototype.attackOver = function () {
                if (this.can_three_whack && (this.down_whack_count--, 0 == this.down_whack_count))
                    return (this.down_whack_count = l.default.GetRandomNum(5, 8)), void this.Whack();
                (this.attacking = !1), this.EnterIdle();
            }),
            (e.prototype.Whack = function () {
                var t = this;
                (this.whack.node.y = this.GetAttackIsTop() ? 1 : -1),
                    this.scheduleOnce(function () {
                        t.whack.node.active = !0;
                    }, 0.6),
                    this.scheduleOnce(function () {
                        t.whack.node.active = !1;
                    }, 0.7),
                    h.EffMgr.PlayOncesSp(
                        this.swk_tsj,
                        "play",
                        function () {
                            t.attackOver();
                        },
                        this,
                        d.default.ins.center_eff_node
                    );
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
                        "sp/other/wukong_zhj",
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
            (e.prototype.PlayFetter = function () {
                this.Show(),
                    this.unscheduleAllCallbacks(),
                    (this.attacking = !0),
                    (this.whack.node.active = !1),
                    console.log("孙悟空拜堂"),
                    (this.zx_bt_sp.paused = !1),
                    (this.zx_bt_sp.timeScale = 0.5);
            }),
            (e.prototype.Married = function () {
                this.zx_bt_sp.setAnimation(0, "play", !1);
            }),
            r([y(sp.Skeleton)], e.prototype, "gz_sp", void 0),
            r([y(sp.Skeleton)], e.prototype, "swk_tsj", void 0),
            r([y(cc.PolygonCollider)], e.prototype, "attack_colider", void 0),
            r([y(cc.BoxCollider)], e.prototype, "whack", void 0),
            r([y(cc.CircleCollider)], e.prototype, "attack_range_collider", void 0),
            r([_], e)
        );
    })(f.default);
o.default = g;
