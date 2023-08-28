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
    c = t("GameSceneS"),
    l = t("ConfigMgr"),
    d = t("EffMgr"),
    u = t("FightBase"),
    h = t("WeakRange"),
    f = cc._decorator,
    p = f.ccclass,
    _ = f.property,
    y = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.bj_sp = null),
                (e.attack_colider = []),
                (e.attack_node = null),
                (e.weak_range = null),
                (e.can_weak_range = !1),
                (e.play_attack_two = !1),
                (e.height_scale = 1),
                (e.pen_count = 20),
                (e.to_dt = -10),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.onLoad = function () {
                t.prototype.onLoad.call(this), (this.base_height = this.attack_colider[0].size.height);
            }),
            (e.prototype.InitHideFetter = function () {
                var t;
                c.default.ins.CheckFightsHave(l.img.ce)
                    ? this.AddAppendAttackSpeed(0.2, 999)
                    : c.default.ins.CheckFightsAllHave([l.img.swk, l.img.shs, l.img.ts])
                    ? this.AddAppendAttack(0.2, 999)
                    : c.default.ins.CheckFightsAllHave([l.img.blm, l.img.swk, l.img.zzj]) &&
                      (this.AddAppendAttack(0.2, 999), this.AddAppendAttackSpeed(0.5, 999)),
                    c.default.ins.CheckFightsHave(l.img.zzj) && (this.append_poisoning_factor += 2),
                    c.default.ins.map_logic.ItemIsExist(this.x, this.y - 1) &&
                        (t = c.default.ins.map_logic.fight_items[this.x][this.y - 1]),
                    t &&
                        t.data.img == l.img.ce &&
                        ((t.fetter_fig = this),
                        (this.fetter_fig = t),
                        (this.fetter_cooldown = 1),
                        (this.fetter_cooldowntime = 10),
                        console.log("后方有嫦娥"),
                        t.LoadTwsp(),
                        (this.zb_fetter_sp = this.loadSp("zhubajie_zhj")),
                        (this.zb_fetter_sp.node.active = !1));
            }),
            (e.prototype.InitOther = function () {
                for (var t = 0; t < this.attack_colider.length; t++)
                    (this.attack_colider[t].tag = this.data.index),
                        (this.attack_colider[t].node.attack_name = "fight"),
                        (this.attack_colider[t].node.attack_type = "Poison"),
                        (this.attack_colider[t].node.fight = this);
            }),
            (e.prototype.AddBuff = function (t) {
                switch (t.index) {
                    case 29:
                        this.AddAppendAttack(t.num / 100);
                        break;
                    case 30:
                        this.BuffAddAttackRange();
                        break;
                    case 31:
                        this.BuffSetAttackTwo();
                        break;
                    case 32:
                        this.BuffAddPoisoning();
                        break;
                    case 33:
                        this.BuffAddRangeWeak();
                }
            }),
            (e.prototype.BuffAddAttackRange = function () {
                (this.bj_sp.node.scaleY += 0.5),
                    (this.height_scale += 0.5),
                    (this.attack_colider[0].size.height = this.height_scale * this.base_height);
            }),
            (e.prototype.BuffSetAttackTwo = function () {
                this.play_attack_two = !0;
            }),
            (e.prototype.BuffAddPoisoning = function () {
                this.append_poisoning_factor += 2;
            }),
            (e.prototype.BuffAddRangeWeak = function () {
                (this.can_weak_range = !0), this.weak_range.getComponent(h.default).Init(this.index, 0.3);
            }),
            (e.prototype.Hide = function (e) {
                t.prototype.Hide.call(this, e), this.can_weak_range && (this.weak_range.active = !1);
            }),
            (e.prototype.Show = function () {
                t.prototype.Show.call(this), this.can_weak_range && (this.weak_range.active = !0);
            }),
            (e.prototype.Attack = function () {
                var e = this;
                (this.attacking = !0), t.prototype.Attack.call(this), a.default.playSound_csryw("zbj");
                var o = this.GetAttackIsTop();
                (this.attack_node.scaleY = o ? 1 : -1),
                    d.EffMgr.PlayOncesSp(
                        this.bj_sp,
                        "lv" + this.lv,
                        function () {
                            e.play_attack_two
                                ? d.EffMgr.PlayOncesSp(
                                      e.bj_sp,
                                      "lv" + e.lv,
                                      function () {
                                          e.EnterIdle(), (e.attacking = !1);
                                      },
                                      e
                                  )
                                : (e.EnterIdle(), (e.attacking = !1));
                        },
                        this
                    );
            }),
            (e.prototype.PlayFetter = function () {
                (this.node_sp.node.active = !1),
                    d.EffMgr.PlaySp(this.node, s.EnumSubGameRes.tx_hecheng, "play1", c.default.ins.center_eff_node),
                    (this.zb_fetter_sp.node.active = !0),
                    a.default.playSound_csryw("hecheng"),
                    this.zb_fetter_sp.setAnimation(0, "play", !0),
                    this.fetter_fig.PlayFetter(),
                    (this.feeterattack = this.fetter_fig.GetAttack()),
                    this.bj_sp.setCompleteListener(null),
                    (this.bj_sp.timeScale = 3),
                    (this.pen_count = 30),
                    (this.attacking = !0),
                    this.Pen(30);
            }),
            (e.prototype.Pen = function (t) {
                var e = this;
                this.pen_count--, (this.attack_node.angle = t);
                var o = this.GetAttackIsTop();
                (this.attack_node.scaleY = o ? 1 : -1),
                    d.EffMgr.PlayOncesSp(
                        this.bj_sp,
                        "lv" + this.lv,
                        function () {
                            if (e.pen_count > 0) {
                                var o = t + e.to_dt;
                                o <= -30 ? (e.to_dt = 10) : o >= 30 && (e.to_dt = -10), e.Pen(o);
                            } else e.PenOver();
                        },
                        this
                    );
            }),
            (e.prototype.PenOver = function () {
                (this.attack_node.angle = 0),
                    (this.bj_sp.timeScale = 1),
                    (this.attacking = !1),
                    (this.feeterattack = 0),
                    (this.zb_fetter_sp.node.active = !1),
                    (this.node_sp.node.active = !0),
                    this.fetter_fig.FetterOver();
            }),
            r([_(sp.Skeleton)], e.prototype, "bj_sp", void 0),
            r([_(cc.BoxCollider)], e.prototype, "attack_colider", void 0),
            r([_(cc.Node)], e.prototype, "attack_node", void 0),
            r([_(cc.Node)], e.prototype, "weak_range", void 0),
            r([p], e)
        );
    })(u.default);
o.default = y;
