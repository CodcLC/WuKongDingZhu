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
    d = t("Utils"),
    u = t("GameSceneS"),
    h = t("ConfigMgr"),
    f = t("EffMgr"),
    p = t("FightBase"),
    _ = t("WeakRange"),
    y = cc._decorator,
    g = y.ccclass,
    w = y.property,
    m = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.weak_range = null),
                (e.leidian_buff = null),
                (e.add_attackotherfour = 0),
                (e.add_attackspeedotherfour = 0),
                (e.is_biger_range = !1),
                (e.is_open_weak = !1),
                (e.is_emit_thunder_event = !1),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.InitHideFetter = function () {
                u.default.ins.CheckFightsHave(h.img.shs) &&
                    ((this.add_attackotherfour += 0.5), (this.add_attackspeedotherfour += 0.5)),
                    u.default.ins.CheckFightsHave(h.img.ts) && this.AddAppendAttack(1, 999),
                    u.default.ins.CheckFightsAllHave([h.img.swk, h.img.zbj, h.img.zzj]) &&
                        (this.AddAppendAttack(0.2, 999), this.AddAppendAttackSpeed(0.5, 999));
            }),
            (e.prototype.AddBuff = function (t) {
                switch (t.index) {
                    case 40:
                        this.BuffAddAll();
                        break;
                    case 41:
                        this.BuffAddAttackOther();
                        break;
                    case 42:
                        this.BuffAddAttackSpeedOther();
                        break;
                    case 43:
                        this.BuffAddRangeWeak();
                        break;
                    case 44:
                        this.BuffBigerRange();
                }
            }),
            (e.prototype.Hide = function () {
                t.prototype.Hide.call(this), this.is_open_weak && (this.weak_range.active = !1);
            }),
            (e.prototype.Show = function () {
                t.prototype.Show.call(this), this.is_open_weak && (this.weak_range.active = !0);
            }),
            (e.prototype.BuffAddRangeWeak = function () {
                (this.is_open_weak = !0),
                    this.weak_range.getComponent(_.default).Init(this.index, 0.3),
                    d.default.NodeSetNewParent(this.weak_range, u.default.ins.buttom_eff_node);
            }),
            (e.prototype.BuffAddAttackOther = function () {
                this.add_attackotherfour = 0.2 * this.GetHeroLvFactor();
            }),
            (e.prototype.BuffAddAttackSpeedOther = function () {
                this.add_attackspeedotherfour = 0.2 * this.GetHeroLvFactor();
            }),
            (e.prototype.BuffAddAll = function () {
                0 != this.add_attackotherfour && (this.add_attackotherfour += 0.1),
                    0 != this.add_attackspeedotherfour && (this.add_attackspeedotherfour += 0.1);
            }),
            (e.prototype.BuffBigerRange = function () {
                this.is_biger_range = !0;
            }),
            (e.prototype.AddOtherFour = function () {
                0 != this.add_attackotherfour &&
                    (this.AddAttackOther(this.x - 1, this.y, this.add_attackotherfour, 5, this.index),
                    this.AddAttackOther(this.x + 1, this.y, this.add_attackotherfour, 5, this.index),
                    this.AddAttackOther(this.x, this.y - 1, this.add_attackotherfour, 5, this.index),
                    this.AddAttackOther(this.x, this.y + 1, this.add_attackotherfour, 5, this.index),
                    this.is_biger_range &&
                        (this.AddAttackOther(this.x - 1, this.y - 1, this.add_attackotherfour, 5, this.index),
                        this.AddAttackOther(this.x - 1, this.y + 1, this.add_attackotherfour, 5, this.index),
                        this.AddAttackOther(this.x + 1, this.y - 1, this.add_attackotherfour, 5, this.index),
                        this.AddAttackOther(this.x + 1, this.y + 1, this.add_attackotherfour, 5, this.index))),
                    0 != this.add_attackspeedotherfour &&
                        (this.AddAttackSpeedOther(this.x - 1, this.y, this.add_attackspeedotherfour, 5, this.index),
                        this.AddAttackSpeedOther(this.x + 1, this.y, this.add_attackspeedotherfour, 5, this.index),
                        this.AddAttackSpeedOther(this.x, this.y - 1, this.add_attackspeedotherfour, 5, this.index),
                        this.AddAttackSpeedOther(this.x, this.y + 1, this.add_attackspeedotherfour, 5, this.index),
                        this.is_biger_range &&
                            (this.AddAttackSpeedOther(
                                this.x - 1,
                                this.y - 1,
                                this.add_attackspeedotherfour,
                                5,
                                this.index
                            ),
                            this.AddAttackSpeedOther(
                                this.x - 1,
                                this.y + 1,
                                this.add_attackspeedotherfour,
                                5,
                                this.index
                            ),
                            this.AddAttackSpeedOther(
                                this.x + 1,
                                this.y - 1,
                                this.add_attackspeedotherfour,
                                5,
                                this.index
                            ),
                            this.AddAttackSpeedOther(
                                this.x + 1,
                                this.y + 1,
                                this.add_attackspeedotherfour,
                                5,
                                this.index
                            ))),
                    (0 == this.add_attackotherfour && 0 == this.add_attackspeedotherfour) ||
                        (this.SetOtherBuffEffShow(this.x - 1, this.y, 5, this.leidian_buff),
                        this.SetOtherBuffEffShow(this.x + 1, this.y, 5, this.leidian_buff),
                        this.SetOtherBuffEffShow(this.x, this.y + 1, 5, this.leidian_buff),
                        this.SetOtherBuffEffShow(this.x, this.y - 1, 5, this.leidian_buff),
                        this.is_biger_range &&
                            (this.SetOtherBuffEffShow(this.x - 1, this.y - 1, 5, this.leidian_buff),
                            this.SetOtherBuffEffShow(this.x + 1, this.y + 1, 5, this.leidian_buff),
                            this.SetOtherBuffEffShow(this.x - 1, this.y + 1, 5, this.leidian_buff),
                            this.SetOtherBuffEffShow(this.x + 1, this.y - 1, 5, this.leidian_buff)));
            }),
            (e.prototype.Attack = function () {
                var e = this;
                t.prototype.Attack.call(this),
                    (this.attacking = !0),
                    this.scheduleOnce(function () {
                        e.AddOtherFour();
                        for (var t = 0; t < e.lv; t++)
                            if (t < e.enemys.length) {
                                var o = e.enemys[t];
                                e.Thunder(o);
                            }
                        e.scheduleOnce(function () {
                            e.attacking = !1;
                        }, 0.4);
                    }, 0.1);
            }),
            (e.prototype.Thunder = function (t) {
                var e = this;
                l.default.playSound_csryw("dj"),
                    f.EffMgr.PlaySp(t.node, c.EnumSubGameRes.tx_ld, "play", u.default.ins.center_eff_node),
                    this.scheduleOnce(function () {
                        t.CanBeAttack() && t.SubNormalDamage(e.data.index, e.GetAttack()),
                            e.is_emit_thunder_event ||
                                (a.default.emitEvent_csryw(s.ryw_Event.Thunder, e), (e.is_emit_thunder_event = !1));
                    }, 0.3);
            }),
            r([w(cc.Node)], e.prototype, "weak_range", void 0),
            r([w(cc.Node)], e.prototype, "leidian_buff", void 0),
            r([g], e)
        );
    })(p.default);
o.default = m;
