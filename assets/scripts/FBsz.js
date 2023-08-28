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
    f = t("bszBullet"),
    p = t("BszDy"),
    _ = cc._decorator,
    y = _.ccclass,
    g = _.property,
    w = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.dy_node = null),
                (e.bullet = null),
                (e.can_hint_count = 1),
                (e.attack_bleed_factor = 1),
                (e.attack_three = !1),
                (e.attack_boom = !1),
                (e.kill_stay = !1),
                (e.dy_nodes = []),
                (e.bs_fetter_sp = null),
                (e.dragon = null),
                (e.colider = null),
                (e.zhj_long = null),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.InitHideFetter = function () {
                var t;
                l.default.ins.map_logic.ItemIsExist(this.x - 1, this.y) &&
                    (t = l.default.ins.map_logic.fight_items[this.x - 1][this.y]),
                    t && t.data.img == d.img.ts
                        ? ((t.fetter_fig = this),
                          (this.fetter_fig = t),
                          (this.fetter_cooldown = c.default.GetRandomNum(3, 8)),
                          (this.fetter_cooldowntime = 999),
                          c.default.NodeSetNewParent(this.dragon, l.default.ins.center_eff_node),
                          t.LoadBssp(),
                          (this.bs_fetter_sp = this.loadSp("baisuzhen_zhj")),
                          (this.bs_fetter_sp.node.scaleX = -1),
                          (this.bs_fetter_sp.node.active = !1))
                        : this.dragon && this.dragon.destroy();
            }),
            (e.prototype.InitOther = function () {
                this.node_pool.SetNode("bullet", this.bullet),
                    this.dy_node.getComponent(p.default).Init(this.index, this),
                    this.dy_node.setParent(l.default.ins.ground_eff_node);
            }),
            (e.prototype.GetDyNode = function () {
                var t;
                if (this.dy_nodes.length > 0) t = this.dy_nodes.pop();
                else {
                    var e = cc.instantiate(this.dy_node),
                        o = e.getComponent(cc.CircleCollider);
                    (o.tag = this.data.index),
                        (o.node.attack_name = "fight"),
                        (o.node.attack_type = "onlyPoison"),
                        (o.node.fight = this),
                        e.setParent(l.default.ins.ground_eff_node),
                        (t = e),
                        (e.active = !0),
                        e.children[0].getComponent(sp.Skeleton).setSkin("lv" + this.lv);
                }
                return t;
            }),
            (e.prototype.PutDyNode = function (t) {
                this.dy_nodes && ((t.active = !1), this.dy_nodes.push(t));
            }),
            (e.prototype.AddBuff = function (t) {
                switch (t.index) {
                    case 81:
                        this.append_poisoning_factor += 0.5;
                        break;
                    case 83:
                        this.BuffPoisoningTwo();
                        break;
                    case 84:
                        this.BuffAttackThree();
                        break;
                    case 82:
                        this.BuffAttackBoom();
                        break;
                    case 85:
                        this.BuffkillStay();
                }
            }),
            (e.prototype.BuffPoisoningTwo = function () {
                this.attack_bleed_factor += 2;
            }),
            (e.prototype.BuffAttackThree = function () {
                this.attack_three = !0;
            }),
            (e.prototype.BuffAttackBoom = function () {
                this.attack_boom = !0;
            }),
            (e.prototype.BuffkillStay = function () {
                this.kill_stay = !0;
            }),
            (e.prototype.OnBulletHit = function (t, e) {
                var o = this;
                if (t.CanBeAttack()) {
                    var n = this.GetAttack();
                    if (
                        (t.InBleed() && (n *= this.attack_bleed_factor),
                        t.SubNormalDamage(this.data.index, n) && this.kill_stay)
                    ) {
                        var i = this.GetDyNode(),
                            r = c.default.GetNodeInNodePos(e, l.default.ins.ground_eff_node);
                        return (
                            i.setPosition(r),
                            void cc
                                .tween(i)
                                .delay(2)
                                .call(function () {
                                    o.PutDyNode(i);
                                })
                                .start()
                        );
                    }
                    t.BePoisoning(this.data.index, this.GetPoisoningDamage(), this.GetPoisoningTime(), this.index);
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
                var o = this.GetAttackIsTop(),
                    n = o ? cc.Vec2.UP : this.down_v2;
                a.default.playSound_csryw("bszfs"),
                    this.scheduleOnce(function () {
                        e.SendBullent(n),
                            e.attack_three &&
                                ((e.temp_v2.x = 0.25),
                                (e.temp_v2.y = o ? 0.966 : -0.966),
                                e.SendBullent(e.temp_v2),
                                (e.temp_v2.x = -0.25),
                                (e.temp_v2.y = o ? 0.966 : -0.966),
                                e.SendBullent(e.temp_v2)),
                            (e.attacking = !1);
                    }, 0.1);
            }),
            (e.prototype.PlayFetter = function () {
                var t = this;
                this.Show(),
                    this.fetter_fig.PlayFetter(),
                    this.unscheduleAllCallbacks(),
                    (this.attacking = !0),
                    console.log("白素贞变身"),
                    a.default.playSound_csryw("hecheng"),
                    (this.node_sp.node.active = !1),
                    u.EffMgr.PlaySp(this.node, s.EnumSubGameRes.tx_hecheng, "play1", l.default.ins.center_eff_node),
                    (this.bs_fetter_sp.node.active = !0),
                    this.bs_fetter_sp.setAnimation(0, "play", !0),
                    this.scheduleOnce(function () {
                        (t.colider.tag = t.data.index),
                            (t.colider.node.attack_name = "fight"),
                            (t.colider.node.attack_type = "Fetter"),
                            (t.colider.node.fight = t),
                            (t.dragon.active = !0),
                            a.default.playSound_csryw("dwtl"),
                            (t.zhj_long.timeScale = 0.5),
                            u.EffMgr.PlayOncesSp(t.zhj_long, "play2", function () {}, t, l.default.ins.center_eff_node),
                            cc
                                .tween(t.dragon)
                                .by(3, {y: 1334})
                                .call(function () {
                                    t.dragon &&
                                        ((t.attacking = !1),
                                        (t.node_sp.node.active = !0),
                                        (t.bs_fetter_sp.node.active = !1),
                                        (t.dragon.active = !1),
                                        (t.dragon.y -= 1334));
                                })
                                .start();
                    }, 0.5);
            }),
            (e.prototype.onDestroy = function () {
                t.prototype.onDestroy.call(this);
            }),
            r([g(cc.Node)], e.prototype, "dy_node", void 0),
            r([g(cc.Node)], e.prototype, "bullet", void 0),
            r([g(cc.Node)], e.prototype, "dragon", void 0),
            r([g(cc.BoxCollider)], e.prototype, "colider", void 0),
            r([g(sp.Skeleton)], e.prototype, "zhj_long", void 0),
            r([y], e)
        );
    })(h.default);
o.default = w;
