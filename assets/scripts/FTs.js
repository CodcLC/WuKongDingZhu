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
    u = t("BulletBase"),
    h = t("FightBase"),
    f = cc._decorator,
    p = f.ccclass,
    _ = f.property,
    y = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.leidian_buff = null),
                (e.bullet_spr = []),
                (e.bullet = null),
                (e.add_attackotherfour = !1),
                (e.vertigo_pro = 0),
                (e.vertigo_time = 1),
                (e.can_hint_count = 1),
                (e.bs_fetter_sp = null),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.InitHideFetter = function () {
                c.default.ins.CheckFightsAllHave([l.img.swk, l.img.shs, l.img.zbj])
                    ? this.AddAppendAttack(0.2, 999)
                    : c.default.ins.CheckFightsHave(l.img.bgj) && 0 != this.vertigo_pro && this.BuffAddVertigoPro(0.1),
                    c.default.ins.CheckFightsHave(l.img.blm) && this.AddAppendAttackSpeed(0.5, 999);
            }),
            (e.prototype.LoadBssp = function () {
                console.log("加载唐僧变声"),
                    (this.bs_fetter_sp = this.loadSp("tanseng_zhe")),
                    (this.bs_fetter_sp.node.scaleX = -1),
                    (this.bs_fetter_sp.node.active = !1);
            }),
            (e.prototype.InitOther = function () {
                this.node_pool.SetNode("bullet", this.bullet);
            }),
            (e.prototype.AddBuff = function (t) {
                switch (t.index) {
                    case 24:
                        this.BuffAddSlowFactor();
                        break;
                    case 25:
                        this.BuffAddVertigoPro(0.15);
                        break;
                    case 26:
                        this.BuffAddAttackOther();
                        break;
                    case 27:
                        this.BuffAddVertigoTime(0.5);
                        break;
                    case 28:
                        this.BuffAddHitCount();
                }
            }),
            (e.prototype.BuffAddVertigoPro = function (t) {
                this.vertigo_pro += t;
            }),
            (e.prototype.BuffAddVertigoTime = function (t) {
                this.vertigo_time += t;
            }),
            (e.prototype.BuffAddSlowFactor = function () {
                this.append_slow_factor += 0.05;
            }),
            (e.prototype.BuffAddAttackOther = function () {
                this.add_attackotherfour = !0;
            }),
            (e.prototype.AddAttackOtherFour = function () {
                this.AddAttackOther(this.x - 1, this.y, 0.25, 5, this.index),
                    this.AddAttackOther(this.x + 1, this.y, 0.25, 5, this.index),
                    this.AddAttackOther(this.x, this.y - 1, 0.25, 5, this.index),
                    this.AddAttackOther(this.x, this.y + 1, 0.25, 5, this.index),
                    this.SetOtherBuffEffShow(this.x - 1, this.y, 5, this.leidian_buff),
                    this.SetOtherBuffEffShow(this.x + 1, this.y, 5, this.leidian_buff),
                    this.SetOtherBuffEffShow(this.x, this.y + 1, 5, this.leidian_buff),
                    this.SetOtherBuffEffShow(this.x, this.y - 1, 5, this.leidian_buff);
            }),
            (e.prototype.BuffAddHitCount = function () {
                this.can_hint_count++;
            }),
            (e.prototype.Attack = function () {
                var e = this;
                (this.attacking = !0), t.prototype.Attack.call(this), a.default.playSound_csryw("ts");
                var o = this.GetAttackIsTop() ? cc.Vec2.UP : this.down_v2;
                this.scheduleOnce(function () {
                    e.SendBullent(o);
                }, 0.1),
                    this.scheduleOnce(function () {
                        e.SendBullent(o);
                    }, 0.15),
                    this.scheduleOnce(function () {
                        e.SendBullent(o), (e.attacking = !1);
                    }, 0.2);
            }),
            (e.prototype.OnBulletHit = function (t) {
                var e = this.GetAttack(),
                    o = t.SubNormalDamage(this.data.index, e, s.EnumSubGameRes.blue_lab);
                t.BeSlow(this.GetSlow(), this.data.slow_time),
                    Math.random() < this.vertigo_pro && t.BeVertigo(this.vertigo_time),
                    o && this.add_attackotherfour && this.AddAttackOtherFour();
            }),
            (e.prototype.SendBullent = function (t) {
                this.node_pool
                    .GetNode("bullet")
                    .getComponent(u.default)
                    .BulletTo(this.GetWordPos(), t, this, this.can_hint_count, 5, 10);
            }),
            (e.prototype.RecycleBullet = function (t) {
                t.node.parent.removeChild(t.node),
                    this.node_pool ? this.node_pool.PutNode("bullet", t.node) : t.node.destroy();
            }),
            (e.prototype.PlayFetter = function () {
                var t = this;
                console.log("唐僧变身"),
                    this.Show(),
                    this.unscheduleAllCallbacks(),
                    (this.attacking = !0),
                    (this.node_sp.node.active = !1),
                    d.EffMgr.PlaySp(this.node, s.EnumSubGameRes.tx_hecheng, "play1", c.default.ins.center_eff_node),
                    (this.bs_fetter_sp.node.active = !0),
                    a.default.playSound_csryw("hecheng"),
                    this.bs_fetter_sp.setAnimation(0, "animation", !0),
                    this.scheduleOnce(function () {
                        (t.attacking = !1), (t.node_sp.node.active = !0), (t.bs_fetter_sp.node.active = !1);
                    }, 3.5);
            }),
            r([_(cc.Node)], e.prototype, "leidian_buff", void 0),
            r([_(cc.SpriteFrame)], e.prototype, "bullet_spr", void 0),
            r([_(cc.Node)], e.prototype, "bullet", void 0),
            r([p], e)
        );
    })(h.default);
o.default = y;
