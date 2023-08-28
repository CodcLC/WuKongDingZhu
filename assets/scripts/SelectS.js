var t = require;
var e = module;
var o = exports;
var n,
    i,
    r =
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
    s =
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
Object.defineProperty(o, "__esModule", {value: !0}),
    (o.SelectType = void 0),
    (function (t) {
        (t.boss = "boss"), (t.box1 = "box1"), (t.box2 = "box2"), (t.box3 = "box3"), (t.uplv = "uplv");
    })((i = o.SelectType || (o.SelectType = {})));
var a = t("EventEnum"),
    c = t("EventMgr"),
    l = t("TTAPI"),
    d = t("ResMgr"),
    u = t("Utils"),
    h = t("GameSceneS"),
    f = t("BuffMgr"),
    p = t("GuideMgr"),
    _ = t("BaseViewS"),
    y = cc._decorator,
    g = y.ccclass,
    w = y.property,
    m = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.labs = []), (e.refresh_btn = null), (e.all_btn = null), (e.btns = null), (e.is_selected = !1), e;
        }
        return (
            r(e, t),
            (e.prototype.start = function () {
                if (p.GuideMgr.in_guide) {
                    if (
                        ((this.refresh_btn.active = !1),
                        (this.all_btn.active = !1),
                        console.warn("当前引导的步骤", p.GuideMgr.getInstance().gude_step),
                        4 == p.GuideMgr.getInstance().gude_step || 7 == p.GuideMgr.getInstance().gude_step)
                    ) {
                        var t = this.btns.children[0].children[0],
                            e = t.convertToWorldSpaceAR(cc.Vec2.ZERO);
                        p.GuideMgr.getInstance().NextStep(e, t.getComponent(cc.Sprite).spriteFrame);
                    }
                    h.default.ins.PauseMyGame();
                } else cc.director.pause();
            }),
            (e.prototype.Init = function (t) {
                var e;
                switch (t) {
                    case i.boss:
                        e = f.BuffMgr.GetBossIndexs();
                        break;
                    case i.uplv:
                        e = f.BuffMgr.GetUpLvIndexs();
                        break;
                    case i.box1:
                        e = f.BuffMgr.GetBoxIndexs(1);
                        break;
                    case i.box2:
                        e = f.BuffMgr.GetBoxIndexs(2);
                        break;
                    case i.box3:
                        e = f.BuffMgr.GetBoxIndexs(3);
                        break;
                    default:
                        console.warn("类型异常：", t);
                }
                (this.type = t), (this.buffs = e);
                for (var o = 0; o < e.length; o++) this.SetBtnView(o);
            }),
            (e.prototype.SetBtnView = function (t) {
                var e,
                    o = this.buffs[t],
                    n = this.btns.children[t];
                -1 != (e = o.des).indexOf("*")
                    ? ((o.num = u.default.GetRandomNum(o.min, o.max)), (e = e.replace("*", o.num.toString())))
                    : -1 != e.indexOf("@")
                    ? ((o.num = u.default.GetRandomNum(o.min, o.max)), (e = e.replace("@", o.num.toString())))
                    : (o.num = 0),
                    (this.labs[t].string = e),
                    3 == o.belong
                        ? d.default.loadBundleSpriteFrame(
                              "subResGame",
                              "Textures/Select/bg_2",
                              function (t) {
                                  n.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = t;
                              },
                              this
                          )
                        : d.default.loadBundleSpriteFrame(
                              "subResGame",
                              "Textures/Select/bg_" + o.rare,
                              function (t) {
                                  n.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = t;
                              },
                              this
                          ),
                    d.default.loadBundleSpriteFrame(
                        "subResGame",
                        "Textures/Select/" + o.img,
                        function (t) {
                            n.getChildByName("img").getComponent(cc.Sprite).spriteFrame = t;
                        },
                        this
                    );
            }),
            (e.prototype.OnBtn = function (t, e) {
                var o = this;
                (p.GuideMgr.in_guide && p.GuideMgr.getInstance().gude_step < 8 && 0 != e) ||
                    this.is_selected ||
                    ((this.is_selected = !0),
                    p.GuideMgr.in_guide
                        ? (h.default.ins.ResumeMyGame(),
                          p.GuideMgr.in_guide && p.GuideMgr.show_guideing && 5 == p.GuideMgr.getInstance().gude_step
                              ? (p.GuideMgr.getInstance().HideGuide(),
                                h.default.ins.BlockTop(1),
                                h.default.ins.scheduleOnce(function () {
                                    var t = h.default.ins.UiNode.getChildByName("StepNode").getChildByName("bg"),
                                        e = t.convertToWorldSpaceAR(cc.Vec2.ZERO);
                                    p.GuideMgr.getInstance().NextStep(
                                        e,
                                        t.getComponent(cc.Sprite).spriteFrame,
                                        function () {
                                            var t =
                                                    h.default.ins.UiNode.getChildByName("CountNode").getChildByName(
                                                        "bg"
                                                    ),
                                                e = t.convertToWorldSpaceAR(cc.Vec2.ZERO);
                                            h.default.ins.BlockTop(0.5),
                                                p.GuideMgr.getInstance().HideGuide(),
                                                o.scheduleOnce(function () {
                                                    p.GuideMgr.getInstance().NextStep(
                                                        e,
                                                        t.getComponent(cc.Sprite).spriteFrame,
                                                        function () {
                                                            p.GuideMgr.getInstance().HideGuide(),
                                                                h.default.ins.CloseBlockTop();
                                                        }
                                                    );
                                                }, 0.5);
                                        }
                                    );
                                }, 1))
                              : p.GuideMgr.in_guide &&
                                p.GuideMgr.show_guideing &&
                                8 == p.GuideMgr.getInstance().gude_step &&
                                p.GuideMgr.getInstance().HideGuide())
                        : cc.director.resume(),
                    f.BuffMgr.SelectBuff([this.buffs[e]]),
                    this.buffs.splice(e, 1),
                    f.BuffMgr.CancelBuff(this.buffs),
                    this.OnClose());
            }),
            (e.prototype.onDestroy = function () {
                c.default.emitEvent_csryw(a.ryw_Event.CloseSelectP);
            }),
            (e.prototype.OnAll = function () {
                var t = this;
                l.default.showRewardedVideoAd_csryw(
                    "技能全都要",
                    function (e) {
                        e && (cc.director.resume(), f.BuffMgr.SelectBuff(t.buffs), t.OnClose());
                    },
                    function () {}
                );
            }),
            (e.prototype.OnRefresh = function () {
                var t = this;
                l.default.showRewardedVideoAd_csryw(
                    "技能刷新",
                    function (e) {
                        e && (f.BuffMgr.CancelBuff(t.buffs), t.Init(t.type));
                    },
                    function () {}
                );
            }),
            s([w({type: cc.Label})], e.prototype, "labs", void 0),
            s([w(cc.Node)], e.prototype, "refresh_btn", void 0),
            s([w(cc.Node)], e.prototype, "all_btn", void 0),
            s([w(cc.Node)], e.prototype, "btns", void 0),
            s([g], e)
        );
    })(_.default);
o.default = m;
