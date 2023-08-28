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
var s = t("ResMgr"),
    a = t("Utils"),
    c = t("ConfigMgr"),
    l = t("DataMgr"),
    d = t("BaseViewS"),
    u = cc._decorator,
    h = u.ccclass,
    f = u.property,
    p = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.topskills = null),
                (e.buttomItems = null),
                (e.hint_des_lab = null),
                (e.item = null),
                (e.name_lab = null),
                (e.desHint = null),
                (e.des_lab = null),
                (e.bg = null),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.SetId = function (t) {
                var e = this,
                    o = c.ConfigMgr.card_config.get(t - 1),
                    n = c.ConfigMgr.card_config.get(t);
                this.bg.on(
                    cc.Node.EventType.TOUCH_START,
                    function () {
                        e.HideHint();
                    },
                    this
                ),
                    this.SetItemShow(this.item, t),
                    (this.name_lab.string = o.name);
                for (
                    var i = function (t) {
                            var e = r.topskills.children[t];
                            if (o.skillBuffIndexs[t]) {
                                var n = c.ConfigMgr.buff_config.get(o.skillBuffIndexs[t]);
                                (e.des = n.des),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/Select/" + n.img,
                                        function (t) {
                                            e.getChildByName("img").getComponent(cc.Sprite).spriteFrame = t;
                                        },
                                        r
                                    ),
                                    (e.getChildByName("lock").active = l.DataMgr.GetHeroLv(o.index) - 1 < t),
                                    e.on(cc.Node.EventType.TOUCH_START, r.OnStart, r),
                                    e.on(cc.Node.EventType.TOUCH_END, r.OnEnd, r),
                                    e.on(cc.Node.EventType.TOUCH_CANCEL, r.OnEnd, r);
                            } else e.active = !1;
                        },
                        r = this,
                        a = 0;
                    a < this.topskills.childrenCount;
                    a++
                )
                    i(a);
                var d = function (t) {
                        var e = u.buttomItems.children[t],
                            i = e.getChildByName("lab").getComponent(cc.Label),
                            r = e.getChildByName("icon_img").getComponent(cc.Sprite);
                        0 == t
                            ? (i.string =
                                  "攻击力\n" +
                                  n.attack * c.ConfigMgr.base_config.hero_lv_factor[l.DataMgr.GetHeroLv(o.index)])
                            : 1 == t
                            ? (i.string = "攻击速度\n" + n.attack_speed)
                            : "swk" == o.img
                            ? ((u.hint_des_lab.string = "近战输出\n挥舞一圈金箍棒"),
                              2 == t ? (i.string = "攻击范围\n周围一格") : (e.active = !1))
                            : "ts" == o.img
                            ? ((u.hint_des_lab.string = "用三环嘴炮攻击同列敌人\n可以减速敌人"),
                              2 == t
                                  ? (i.string = "攻击范围\n同列")
                                  : 3 == t
                                  ? ((i.string = "减速效果\n20%"),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_17",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    ))
                                  : 4 == t &&
                                    ((i.string = "减速时间\n" + n.slow_time),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_16",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    )))
                            : "zbj" == o.img
                            ? ((u.hint_des_lab.string = "向前方两格范围放屁\n造成持续中毒状态"),
                              2 == t
                                  ? (i.string = "攻击范围\n前方两格")
                                  : 3 == t
                                  ? ((i.string =
                                        "中毒伤害\n" +
                                        n.poisoning_damage *
                                            c.ConfigMgr.base_config.hero_lv_factor[l.DataMgr.GetHeroLv(o.index)]),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_25",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    ))
                                  : 4 == t &&
                                    ((i.string = "中毒时间\n" + n.poisoning_time),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_24",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    )))
                            : "hhe" == o.img
                            ? ((u.hint_des_lab.string = "吃下魔鬼辣椒\n向前一列喷出火球\n造成持续灼烧伤害"),
                              2 == t
                                  ? (i.string = "攻击范围\n同列")
                                  : 3 == t
                                  ? ((i.string =
                                        "灼烧伤害\n" +
                                        n.poisoning_damage *
                                            c.ConfigMgr.base_config.hero_lv_factor[l.DataMgr.GetHeroLv(o.index)]),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_21",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    ))
                                  : 4 == t &&
                                    ((i.string = "灼烧时间\n" + n.poisoning_time),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_20",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    )))
                            : "zn" == o.img
                            ? ((u.hint_des_lab.string = "向前方一格扇形区域\n进行剪刀攻击"),
                              2 == t
                                  ? (i.string = "攻击范围\n前方扇形二格")
                                  : 3 == t
                                  ? ((i.string =
                                        "流血伤害\n" +
                                        n.poisoning_damage *
                                            c.ConfigMgr.base_config.hero_lv_factor[l.DataMgr.GetHeroLv(o.index)]),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_19",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    ))
                                  : 4 == t &&
                                    ((i.string = "流血时间\n" + n.poisoning_time),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_18",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    )))
                            : "blm" == o.img
                            ? ((u.hint_des_lab.string = "向天发誓召唤一道雷劈敌人\n击杀敌人后给周围一格友军提供增益"),
                              2 == t
                                  ? (i.string = "攻击范围\n周围一格")
                                  : 3 == t
                                  ? ((i.string =
                                        "增益效果\n" +
                                        20 * c.ConfigMgr.base_config.hero_lv_factor[l.DataMgr.GetHeroLv(o.index)] +
                                        "%"),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_12",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    ))
                                  : 4 == t &&
                                    ((i.string = "增益时间\n5"),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_09",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    )))
                            : "shs" == o.img
                            ? 2 == t
                                ? (i.string = "攻击范围\n同列")
                                : ((u.hint_des_lab.string = "远程输出\n向同列发射眼泪弹"), (e.active = !1))
                            : "bsz" == o.img
                            ? ((u.hint_des_lab.string = "向前方一列\n发出一团毒液"),
                              2 == t && (i.string = "攻击范围\n同列"),
                              3 == t
                                  ? ((i.string =
                                        "中毒伤害\n" +
                                        n.poisoning_damage *
                                            c.ConfigMgr.base_config.hero_lv_factor[l.DataMgr.GetHeroLv(o.index)]),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_25",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    ))
                                  : 4 == t &&
                                    ((i.string = "中毒时间\n" + n.poisoning_time),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_24",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    )))
                            : "zxxz" == o.img
                            ? ((u.hint_des_lab.string = "向同行的敌人\n发出一柄可以穿透的飞剑"),
                              2 == t ? (i.string = "攻击范围\n同行") : (e.active = !1))
                            : "ce" == o.img
                            ? ((u.hint_des_lab.string = "向前方三格\n发出一个会回旋的月牙"),
                              2 == t ? (i.string = "攻击范围\n前方三格") : (e.active = !1))
                            : o.img == c.img.zzj
                            ? ((u.hint_des_lab.string = "向周围两格范围内丢出会爆炸的蜘蛛卵"),
                              2 == t
                                  ? (i.string = "攻击范围\n周围两格")
                                  : 3 == t
                                  ? ((i.string =
                                        "中毒伤害\n" +
                                        n.poisoning_damage *
                                            c.ConfigMgr.base_config.hero_lv_factor[l.DataMgr.GetHeroLv(o.index)]),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_25",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    ))
                                  : 4 == t &&
                                    ((i.string = "中毒时间\n" + n.poisoning_time),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_24",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    )))
                            : o.img == c.img.bgj
                            ? ((u.hint_des_lab.string = "召唤地刺攻击前方两格内的全部敌人"),
                              2 == t
                                  ? (i.string = "攻击范围\n前方两格")
                                  : 3 == t
                                  ? ((i.string =
                                        "流血伤害\n" +
                                        n.poisoning_damage *
                                            c.ConfigMgr.base_config.hero_lv_factor[l.DataMgr.GetHeroLv(o.index)]),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_19",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    ))
                                  : 4 == t &&
                                    ((i.string = "流血时间\n" + n.poisoning_time),
                                    s.default.loadBundleSpriteFrame(
                                        "subResGame",
                                        "Textures/change/hgxy_yxxx_18",
                                        function (t) {
                                            r.spriteFrame = t;
                                        },
                                        u
                                    )))
                            : o.img == c.img.nmw
                            ? ((u.hint_des_lab.string = "用连续拳打出巨额伤害"),
                              2 == t ? (i.string = "攻击范围\n周围一格") : (e.active = !1))
                            : (e.active = !1);
                    },
                    u = this;
                for (a = 0; a < this.buttomItems.childrenCount; a++) d(a);
            }),
            (e.prototype.OnStart = function (t) {
                var e = t.target;
                this.ShowHint(e);
            }),
            (e.prototype.OnEnd = function () {}),
            (e.prototype.ShowHint = function (t) {
                var e = t.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    o = this.desHint.parent.convertToNodeSpaceAR(e);
                (o.y += 60),
                    this.desHint.setPosition(o),
                    (this.des_lab.string = t.des),
                    (this.desHint.active = !0),
                    (this.desHint.item = t),
                    t.getChildByName("lock").active && (this.des_lab.string = "未解锁");
            }),
            (e.prototype.HideHint = function () {
                this.desHint.active = !1;
            }),
            (e.prototype.SetItemShow = function (t, e) {
                var o = t.getChildByName("img").getComponent(cc.Sprite),
                    n = t.getChildByName("lab").getComponent(cc.Label);
                if (((t.id = e), e && e > 0)) {
                    var i = c.ConfigMgr.card_config.get(e);
                    (n.string = i.name),
                        s.default.loadBundleSpriteFrame(
                            "subResGame",
                            "Textures/items/" + i.img + "_" + l.DataMgr.GetHeroAniShowLv(i.index - 1),
                            function (t) {
                                (o.spriteFrame = t), (o.node.scale = a.default.GetSizeScale(o.node, 100));
                            },
                            this
                        );
                } else (o.spriteFrame = null), (n.string = "");
            }),
            r([f(cc.Node)], e.prototype, "topskills", void 0),
            r([f(cc.Node)], e.prototype, "buttomItems", void 0),
            r([f(cc.Label)], e.prototype, "hint_des_lab", void 0),
            r([f(cc.Node)], e.prototype, "item", void 0),
            r([f(cc.Label)], e.prototype, "name_lab", void 0),
            r([f(cc.Node)], e.prototype, "desHint", void 0),
            r([f(cc.Label)], e.prototype, "des_lab", void 0),
            r([f(cc.Node)], e.prototype, "bg", void 0),
            r([h], e)
        );
    })(d.default);
o.default = p;
