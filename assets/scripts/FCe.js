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
    f = cc._decorator,
    p = f.ccclass,
    _ = f.property,
    y = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.bullet_spr = []),
                (e.bullet = null),
                (e.big_yy = null),
                (e.attack_three = !1),
                (e.attack_vertigo_three = !1),
                (e.attack_three_big = !1),
                (e.attack_big_back = !1),
                (e.down_big_count = 3),
                (e.base_attack_distance = 350),
                (e.bullet_pool = []),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.InitOther = function () {
                (this.down_big_count = c.default.GetRandomNum(5, 8)),
                    (this.bullet.spriteFrame = this.bullet_spr[this.lv - 1]),
                    (this.big_yy.spriteFrame = this.bullet_spr[this.lv - 1]);
                var t = this.big_yy.getComponent(cc.PolygonCollider);
                (t.tag = this.data.index),
                    (t.node.attack_name = "fight"),
                    (t.node.attack_type = "skill"),
                    (t.node.fight = this);
            }),
            (e.prototype.InitHideFetter = function () {
                l.default.ins.CheckFightsHave(d.img.zn) && this.AddAppendAttackSpeed(0.5, 9999),
                    l.default.ins.CheckFightsHave(d.img.zbj) && this.AddAppendAttack(0.5, 9999);
            }),
            (e.prototype.AddBuff = function (t) {
                switch (t.index) {
                    case 91:
                        this.BuffAddAttackRange(t.num / 100);
                        break;
                    case 93:
                        this.BuffThree();
                        break;
                    case 92:
                        this.BuffVertigoThree();
                        break;
                    case 94:
                        this.BuffThreeBig();
                        break;
                    case 95:
                        this.AttackBigBack();
                }
            }),
            (e.prototype.BuffAddAttackRange = function (t) {
                this.base_attack_distance += Math.floor(this.base_attack_distance * t);
            }),
            (e.prototype.BuffThree = function () {
                this.attack_three = !0;
            }),
            (e.prototype.BuffVertigoThree = function () {
                this.attack_vertigo_three = !0;
            }),
            (e.prototype.BuffThreeBig = function () {
                this.attack_three_big = !0;
            }),
            (e.prototype.AttackBigBack = function () {
                this.attack_big_back = !0;
            }),
            (e.prototype.GetBulletNode = function () {
                var t;
                if (this.bullet_pool.length > 0) t = this.bullet_pool.pop();
                else {
                    var e = (t = cc.instantiate(this.bullet.node)).getComponent(cc.BoxCollider);
                    (e.tag = this.data.index),
                        (e.node.attack_name = "fight"),
                        (e.node.attack_type = "default"),
                        (e.node.fight = this),
                        this.node.addChild(t);
                }
                return t;
            }),
            (e.prototype.PutBulletNode = function (t) {
                this.bullet_pool && ((t.active = !1), this.bullet_pool.push(t));
            }),
            (e.prototype.SendYy = function (t) {
                var e = this,
                    o = this.GetBulletNode();
                (o.active = !0),
                    cc.Tween.stopAllByTarget(o),
                    (o.scale = 0),
                    cc.tween(o).by(0.1, {scale: 1}).delay(1.3).by(0.1, {scale: 0}).start(),
                    cc.tween(o).by(1.5, {angle: 1800}).start(),
                    cc
                        .tween(o)
                        .by(0.75, {x: t.x * this.base_attack_distance, y: t.y * this.base_attack_distance})
                        .by(0.75, {x: -t.x * this.base_attack_distance, y: -t.y * this.base_attack_distance})
                        .call(function () {
                            e.PutBulletNode(o);
                        })
                        .start();
            }),
            (e.prototype.Attack = function () {
                var e = this;
                (this.attacking = !0), t.prototype.Attack.call(this);
                var o = this.GetAttackIsTop() ? cc.Vec2.UP : this.down_v2;
                a.default.playSound_csryw("cefs"),
                    this.scheduleOnce(function () {
                        e.SendYy(o),
                            e.attack_three && (e.SendYy(e.left_v2), e.SendYy(cc.Vec2.RIGHT)),
                            e.scheduleOnce(function () {
                                e.attackOver();
                            }, 1.5);
                    }, 0.1);
            }),
            (e.prototype.attackOver = function () {
                if (this.attack_three_big && (this.down_big_count--, 0 == this.down_big_count && this.GetAttackIsTop()))
                    return (this.down_big_count = c.default.GetRandomNum(5, 8)), void this.PlaySkill();
                (this.attacking = !1), this.EnterIdle();
            }),
            (e.prototype.PlaySkill = function () {
                var t = this;
                this.node_sp.setAnimation(0, "gongji", !1);
                var e = this.GetAttackIsTop() ? cc.Vec2.UP : this.down_v2;
                this.big_yy.node.setPosition(0, 0),
                    (this.big_yy.node.active = !0),
                    (this.big_yy.node.scale = 0),
                    (this.big_yy.node.opacity = 255),
                    cc
                        .tween(this.big_yy.node)
                        .to(0.1, {scaleX: 1, scaleY: 1 * e.y})
                        .start(),
                    cc
                        .tween(this.big_yy.node)
                        .by(1.5, {y: e.y * this.base_attack_distance})
                        .to(0.1, {opacity: 0})
                        .call(function () {
                            t.attacking = !1;
                        })
                        .start();
            }),
            (e.prototype.LoadTwsp = function () {
                (this.ce_fetter_sp = this.loadSp("change_zhj")), (this.ce_fetter_sp.node.active = !1);
            }),
            (e.prototype.PlayFetter = function () {
                (this.attacking = !0),
                    (this.node_sp.node.active = !1),
                    u.EffMgr.PlaySp(this.node, s.EnumSubGameRes.tx_hecheng, "play1", l.default.ins.center_eff_node),
                    (this.ce_fetter_sp.node.active = !0),
                    this.ce_fetter_sp.setAnimation(0, "play", !0),
                    (this.ce_fetter_sp.timeScale = 0.8),
                    a.default.playSound_csryw("hecheng");
            }),
            (e.prototype.FetterOver = function () {
                (this.attacking = !1),
                    (this.node_sp.node.active = !0),
                    u.EffMgr.PlaySp(this.node, s.EnumSubGameRes.tx_hecheng, "play1", l.default.ins.center_eff_node),
                    (this.ce_fetter_sp.node.active = !1);
            }),
            r([_(cc.SpriteFrame)], e.prototype, "bullet_spr", void 0),
            r([_(cc.Sprite)], e.prototype, "bullet", void 0),
            r([_(cc.Sprite)], e.prototype, "big_yy", void 0),
            r([p], e)
        );
    })(h.default);
o.default = y;
