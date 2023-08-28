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
var s = t("SoundMgr"),
    a = t("GameSceneS"),
    c = t("ConfigMgr"),
    l = t("EffMgr"),
    d = t("FightBase"),
    u = cc._decorator,
    h = u.ccclass,
    f = u.property,
    p = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.attack_node = null),
                (e.zn_sp = null),
                (e.attack_colider = []),
                (e.attack_two = !1),
                (e.can_bleed = !1),
                (e.bleed_double = 1),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.InitOther = function () {
                for (var t = 0; t < this.attack_colider.length; t++)
                    (this.attack_colider[t].tag = this.data.index),
                        (this.attack_colider[t].node.attack_name = "fight"),
                        (this.attack_colider[t].node.attack_type = "Bleed"),
                        (this.attack_colider[t].node.fight = this);
            }),
            (e.prototype.InitHideFetter = function () {
                a.default.ins.CheckFightsHave(c.img.ce) && this.AddAppendAttackSpeed(0.5, 9999);
            }),
            (e.prototype.AddBuff = function (t) {
                switch (t.index) {
                    case 50:
                        this.AddAppendAttackSpeed(t.num / 100);
                        break;
                    case 51:
                        this.BuffAddAttackTwo();
                        break;
                    case 52:
                        this.BuffAddBleed();
                        break;
                    case 53:
                        this.BuffBleedDamageDouble();
                }
            }),
            (e.prototype.BuffAddAttackTwo = function () {
                this.attack_two = !0;
            }),
            (e.prototype.BuffAddBleed = function () {
                this.can_bleed = !0;
            }),
            (e.prototype.BuffBleedDamageDouble = function () {
                this.bleed_double = 2 * this.bleed_double;
            }),
            (e.prototype.Attack = function () {
                var e = this;
                (this.attacking = !0), t.prototype.Attack.call(this);
                var o = this.GetAttackIsTop();
                (this.attack_node.active = !0),
                    (this.attack_colider[0].node.active = !1),
                    this.scheduleOnce(function () {
                        (e.attack_colider[0].node.active = !0),
                            s.default.playSound_csryw("jd"),
                            e.scheduleOnce(function () {
                                e.attack_colider[0].node.active = !1;
                            }, 0.1);
                    }, 0.5),
                    (this.attack_node.scaleY = o ? 1.5 : -1.5),
                    l.EffMgr.PlayOncesSp(
                        this.zn_sp,
                        "lv" + this.lv,
                        function () {
                            e.attack_two
                                ? ((e.attack_colider[0].node.active = !1),
                                  e.scheduleOnce(function () {
                                      (e.attack_colider[0].node.active = !0),
                                          s.default.playSound_csryw("jd"),
                                          e.scheduleOnce(function () {
                                              e.attack_colider[0].node.active = !1;
                                          }, 0.1);
                                  }, 0.5),
                                  l.EffMgr.PlayOncesSp(
                                      e.zn_sp,
                                      "lv" + e.lv,
                                      function () {
                                          e.EnterIdle(), (e.attacking = !1);
                                      },
                                      e
                                  ))
                                : (e.EnterIdle(), (e.attacking = !1));
                        },
                        this
                    );
            }),
            r([f(cc.Node)], e.prototype, "attack_node", void 0),
            r([f(sp.Skeleton)], e.prototype, "zn_sp", void 0),
            r([f(cc.PolygonCollider)], e.prototype, "attack_colider", void 0),
            r([h], e)
        );
    })(d.default);
o.default = p;
