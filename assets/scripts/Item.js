var t = require;
var e = module;
var o = exports;
var n,
    i,
    r,
    s,
    a =
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
    c =
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
    (o.DirectionType = void 0),
    (function (t) {
        (t[(t.jb = 0)] = "jb"),
            (t[(t.swk = 1)] = "swk"),
            (t[(t.ts = 6)] = "ts"),
            (t[(t.zbj = 11)] = "zbj"),
            (t[(t.shs = 16)] = "shs"),
            (t[(t.default = 17)] = "default");
    })(i || (i = {})),
    (function (t) {
        (t[(t.eliminate = 0)] = "eliminate"), (t[(t.fight = 1)] = "fight"), (t[(t.default = 2)] = "default");
    })(r || (r = {})),
    (function (t) {
        (t[(t.top = 0)] = "top"),
            (t[(t.buttom = 1)] = "buttom"),
            (t[(t.left = 2)] = "left"),
            (t[(t.right = 3)] = "right"),
            (t[(t.right_top = 4)] = "right_top"),
            (t[(t.left_top = 5)] = "left_top"),
            (t[(t.right_buttom = 6)] = "right_buttom"),
            (t[(t.left_buttom = 7)] = "left_buttom"),
            (t[(t.toroot = 8)] = "toroot");
    })((s = o.DirectionType || (o.DirectionType = {})));
var l = t("EventEnum"),
    d = t("EventMgr"),
    u = t("ResSubMgr"),
    h = t("SoundMgr"),
    f = t("ResMgr"),
    p = t("GameSceneS"),
    _ = t("BuffMgr"),
    y = t("ConfigMgr"),
    g = t("DataMgr"),
    w = t("EffMgr"),
    m = t("GuideMgr"),
    v = cc._decorator,
    b = v.ccclass,
    S = v.property,
    M = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.img = null),
                (e.stage = r.default),
                (e.direction = s.toroot),
                (e.lock = !1),
                (e.pos = new cc.Vec2(0, 0)),
                (e.move_radii = 130),
                (e.temp_v2 = new cc.Vec2(0, 0)),
                (e.fight_item = null),
                (e.item_sp_scale = -1),
                (e.sp_node = null),
                (e.item_sp = null),
                (e.box_lv = 0),
                (e.box_sp = null),
                (e.is_eliminate = !1),
                (e.fight_item2 = null),
                (e.in_delay_destory = !1),
                e
            );
        }
        var o;
        return (
            a(e, t),
            (o = e),
            (e.prototype.onLoad = function () {
                this.AddEvent();
            }),
            (e.prototype.start = function () {}),
            (e.prototype.Init = function (t, e, o, n) {
                void 0 === n && (n = !1),
                    (this.index = t),
                    (this.data && this.data.index == this.index) ||
                        (this.data = y.ConfigMgr.card_config.get(this.index)),
                    (this.x = e),
                    (this.y = o),
                    n
                        ? ((this.pos.x = p.default.ins.map_logic.width * this.x),
                          (this.pos.y = p.default.ins.map_logic.height * this.y))
                        : ((this.pos.x = this.node.x = p.default.ins.map_logic.width * this.x),
                          (this.pos.y = this.node.y = p.default.ins.map_logic.height * this.y)),
                    (this.node.scale = 1),
                    this.now_type != this.index && ((this.now_type = this.index), this.ReshView()),
                    this.item_sp &&
                        ((this.item_sp_scale = this.item_sp.node.scale),
                        (this.item_sp.node.scale = this.item_sp_scale = this.item_sp_scale < 0.6 ? 0.3 : 1));
            }),
            (e.prototype.GetStart = function () {
                return 0 == this.index ? 0 : this.data.start;
            }),
            (e.prototype.ReshView = function () {
                var t,
                    e = this;
                if (
                    ((this.node.width = p.default.ins.map_logic.width),
                    (this.node.height = p.default.ins.map_logic.height),
                    0 == this.index)
                )
                    (t = "jb"),
                        f.default.loadBundleSpriteFrame(
                            "subResGame",
                            "Textures/items/" + t,
                            function (t) {
                                e.img.spriteFrame = t;
                            },
                            this
                        );
                else {
                    if (
                        ((t = this.data.img + "_" + this.data.start),
                        f.default.loadBundleSpriteFrame(
                            "subResGame",
                            "Textures/items/" + t,
                            function (t) {
                                e.img.spriteFrame = t;
                            },
                            this
                        ),
                        0 == this.data.start)
                    ) {
                        if (((t = "i_" + this.data.img + "_0"), !this.sp_node)) {
                            var o = cc.instantiate(u.ResSubMgr.getPrefabBySubGame(t));
                            (this.sp_node = o),
                                this.node.addChild(o),
                                (this.item_sp = o.getComponent(sp.Skeleton)),
                                (this.item_sp.premultipliedAlpha = !1);
                        }
                        this.sp_node.y = -55;
                    } else
                        (t = "i_" + this.data.img + "_"),
                            -1 != this.sp_node.name.indexOf("0") && (this.sp_node.destroy(), (this.sp_node = null)),
                            this.sp_node ||
                                ((o = cc.instantiate(u.ResSubMgr.getPrefabBySubGame(t))),
                                (this.sp_node = o),
                                (o.y = -55),
                                this.node.addChild(o),
                                (this.item_sp = o.getComponent(sp.Skeleton)),
                                (this.item_sp.premultipliedAlpha = !1)),
                            this.item_sp.setSkin("lv" + this.data.start);
                    this.item_sp &&
                        ((this.item_sp_scale = this.item_sp.node.scale),
                        (this.item_sp.node.scale = this.item_sp_scale = this.item_sp_scale < 0.6 ? 0.3 : 1),
                        (this.img.node.y = -20),
                        (this.img.node.scale = 1.15),
                        (this.img.node.zIndex = 2),
                        (this.img.node.active = !1));
                }
            }),
            (e.prototype.UpLv = function (t) {
                if ((void 0 === t && (t = !0), this.StopDelayDestroy(), 5 == this.data.start))
                    return console.warn("已升满级"), !1;
                this.index++,
                    t &&
                        (h.default.playSound_csryw("hecheng"),
                        w.EffMgr.PlaySp(this.node, u.EnumSubGameRes.tx_hecheng, "play1"),
                        (this.node.scale = 0),
                        cc.tween(this.node).to(0.3, {scale: 1}).start()),
                    this.Init(this.index, this.x, this.y, !0),
                    p.default.ins.map_logic.RemoveNeedEliminates(this),
                    (this.direction = s.toroot),
                    p.default.ins.map_logic.AddNeedToCheckItems(this);
            }),
            (e.prototype.BeComeBox = function (t) {
                h.default.playSound_csryw("hecheng"),
                    w.EffMgr.PlaySp(this.node, u.EnumSubGameRes.tx_hecheng, "play1"),
                    (this.img.node.active = !1);
                var e = cc.instantiate(u.ResSubMgr.getPrefabBySubGame(u.EnumSubGameRes.tx_baoxiang));
                this.node.addChild(e), (this.box_sp = e.getComponent(sp.Skeleton));
                var o = "";
                switch (t) {
                    case 1:
                        o = "A";
                        break;
                    case 2:
                        o = "B";
                        break;
                    case 3:
                        o = "C";
                }
                this.box_sp.setSkin(o),
                    this.box_sp.setAnimation(0, "idle", !1),
                    h.default.playSound_csryw("hecheng"),
                    p.default.ins.map_logic.AddBoxItems(this),
                    (this.box_lv = t),
                    p.default.ins.map_logic.RemoveNeedEliminates(this),
                    (this.node.scale = 0),
                    cc.tween(this.node).to(0.2, {scale: 1}).start();
            }),
            (e.prototype.OpenBox = function (t, e) {
                var o = this;
                this.box_sp.setAnimation(0, "play1", !1),
                    this.scheduleOnce(function () {
                        h.default.playSound_csryw("bx");
                    }, 0.6),
                    this.box_sp.setCompleteListener(function () {
                        o.box_sp &&
                            (o.box_sp.setCompleteListener(null),
                            o.box_sp.setAnimation(0, "play2", !0),
                            o.scheduleOnce(function () {
                                t.call(e);
                            }, 0.5));
                    });
            }),
            (e.prototype.GetIndex = function () {
                return 0 == this.index ? this.index - this.box_lv : this.data.index;
            }),
            (e.prototype.Eliminate = function () {
                var t = this;
                (this.is_eliminate = !0),
                    (this.box_lv = 0),
                    this.RemoveEvent(),
                    w.EffMgr.PlaySp(this.node, u.EnumSubGameRes.tx_hecheng, "play2"),
                    p.default.ins.map_logic.RecoveryItem(this),
                    p.default.ins.map_logic.SetInMapItem(this.x, this.y, null),
                    cc
                        .tween(this.node)
                        .to(0.2, {scale: 0})
                        .call(function () {
                            t.box_sp && (t.box_sp.node.destroy(), (t.box_sp = null), (t.img.node.active = !0)),
                                p.default.ins.items_node.removeChild(t.node);
                        })
                        .start();
            }),
            (e.prototype.EnterFightingStage = function () {
                var t = this;
                if (this.item_sp) {
                    if (0 == this.index || 0 == this.data.start)
                        return (
                            cc
                                .tween(this.item_sp.node)
                                .to(0.5, {opacity: 0})
                                .call(function () {
                                    t.item_sp.node.active = !1;
                                })
                                .start(),
                            (this.img.node.active = !0),
                            void cc.tween(this.img.node).to(0.5, {opacity: 255}).start()
                        );
                    cc.tween(this.item_sp.node)
                        .to(0.5, {opacity: 0})
                        .call(function () {
                            t.item_sp.node.active = !1;
                        })
                        .start();
                }
                if (0 != this.index && 0 != this.data.start) {
                    var e = y.ConfigMgr.CardInfo[this.data.img],
                        o = cc.instantiate(u.ResSubMgr.getPrefabBySubGame(e.prefab));
                    p.default.ins.fight_node.addChild(o);
                    var n = p.default.ins.fight_node.convertToNodeSpaceAR(this.GetWordPos());
                    (n.y -= 12), o.setPosition(n);
                    var i = o.getComponent(e.scrS);
                    (this.fight_item = i),
                        i.Init(this.x, this.y, this.data, p.default.ins.fights.length),
                        p.default.ins.Addfights(this.x, this.y, i);
                }
            }),
            (e.prototype.GetWordPos = function () {
                return this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
            }),
            (e.prototype.EnterEliminateStage = function () {
                var t = this;
                (this.stage = r.eliminate),
                    this.fight_item &&
                        ((this.fight_item2 = this.fight_item),
                        p.default.ins.Removefights(this.x, this.y, this.fight_item),
                        this.fight_item.node.destroy(),
                        this.scheduleOnce(function () {
                            t.fight_item = null;
                        }, 0.1)),
                    this.item_sp &&
                        ((this.item_sp.node.active = !0),
                        cc.tween(this.item_sp.node).to(0.5, {opacity: 255}).start(),
                        cc
                            .tween(this.img.node)
                            .to(0.5, {opacity: 0})
                            .call(function () {
                                t.img.node.active = !1;
                            })
                            .start()),
                    this.scheduleOnce(function () {
                        t.fight_item2 &&
                            t.fight_item2.node &&
                            (console.warn("进入合成阶段异常，重新进入"),
                            t.fight_item2.node.destroy(),
                            t.scheduleOnce(function () {
                                t.fight_item2 = null;
                            }, 0.1));
                    }, 0.6);
            }),
            (e.prototype.OnEnterEliminateStage = function () {
                !this.item_sp ||
                    (1 == this.item_sp.node.active && 255 == this.item_sp.node.opacity) ||
                    (console.warn("元素进入合成阶段异常，尝试重新设置"),
                    (this.img.node.active = !1),
                    (this.item_sp.node.active = !0),
                    (this.item_sp.node.opacity = 255));
            }),
            (e.prototype.OnTouchStart = function (t) {
                0 != g.DataMgr.step &&
                    ((this.touch_start_time = new Date().getTime()),
                    p.default.ins.touch_item ||
                        ((p.default.ins.touch_item = this),
                        t.getTouches().length > 1 ||
                            (this.CheckCanTouch() && (this.StartDelayDestroy(), this.SetNodeTop()))));
            }),
            (e.prototype.OnTouchMove = function (t) {
                if (p.default.ins.touch_item == this && this.CheckCanTouch()) {
                    this.StopDelayDestroy();
                    var e = this.node.parent.convertToNodeSpaceAR(t.getLocation());
                    if (((e.y -= 100), _.BuffMgr.GetCanMoveAny())) this.node.setPosition(e);
                    else {
                        var o = e.sub(this.pos);
                        o.len() > this.move_radii && (o.normalizeSelf(), (o = o.mul(this.move_radii))),
                            (o = o.add(this.pos)),
                            this.node.setPosition(o);
                    }
                }
            }),
            (e.prototype.OnTouchEnd = function () {
                if (
                    p.default.ins.touch_item == this &&
                    ((p.default.ins.touch_item = null),
                    (p.default.ins.end_letgo_time = new Date().getSeconds()),
                    this.CheckCanTouch())
                )
                    if ((this.StopDelayDestroy(), _.BuffMgr.GetCanMoveAny())) {
                        var t = p.default.ins.map_logic.GetNearInItems(this);
                        t.min_distance < 3e3 ? (this.SwapItem(t.min_item), _.BuffMgr.SubCanMoveAny()) : this.ToRoot();
                    } else {
                        var e = this.GetEndDirection();
                        if (
                            ((this.direction = e),
                            m.GuideMgr.in_guide &&
                                m.GuideMgr.getInstance().gude_step < 5 &&
                                !m.GuideMgr.getInstance().CheckCanMoveDirection(this.x, this.y, e))
                        )
                            return void this.ToRoot();
                        if (e == s.toroot)
                            new Date().getTime() - this.touch_start_time < 200 &&
                                (this.HideOtherHint(), console.log(this.x, this.y), this.ShowAllHint()),
                                this.ToRoot();
                        else {
                            var o = this.GetDirectionItem(e);
                            o
                                ? (p.default.ins.SubStep(1),
                                  this.SwapItem(o),
                                  m.GuideMgr.in_guide &&
                                      m.GuideMgr.show_guideing &&
                                      (m.GuideMgr.getInstance().HideGuide(),
                                      m.GuideMgr.getInstance().gude_step < 5 && p.default.ins.BlockTop(10)))
                                : e != s.buttom
                                ? (p.default.ins.map_logic.AddNeedEliminates(this),
                                  p.default.ins.map_logic.Eliminate(),
                                  p.default.ins.SubStep(1))
                                : this.ToRoot();
                        }
                    }
            }),
            (e.prototype.SwapItem = function (t) {
                var e = this;
                (t.direction = this.direction),
                    (this.temp_v2.x = t.x),
                    (this.temp_v2.y = t.y),
                    t.ToPos(this.x, this.y),
                    this.ToPos(this.temp_v2.x, this.temp_v2.y),
                    p.default.ins.map_logic.SwapItem(t.x, t.y, this.x, this.y),
                    p.default.ins.BlockCenter(0.1),
                    this.scheduleOnce(function () {
                        var o = p.default.ins.map_logic.CheckPosHaveTriplet(e.x, e.y),
                            n = p.default.ins.map_logic.CheckPosHaveTriplet(t.x, t.y);
                        o || n
                            ? (o && p.default.ins.map_logic.DetailXio(e.x, e.y),
                              n && p.default.ins.map_logic.DetailXio(t.x, t.y),
                              p.default.ins.map_logic.Eliminate())
                            : 0 == g.DataMgr.step && p.default.ins.ALlEnterFightingStage();
                    }, 0.1);
            }),
            (e.prototype.StartDelayDestroy = function () {
                var t = this;
                m.GuideMgr.in_guide ||
                    (this.node.x == this.pos.x &&
                        this.node.y == this.pos.y &&
                        0 != g.DataMgr.step &&
                        ((this.in_delay_destory = !0),
                        cc
                            .tween(p.default.ins.sp_caxc)
                            .delay(0.3)
                            .call(function () {
                                var e = t.GetWordPos(),
                                    o = p.default.ins.GameNode.convertToNodeSpaceAR(e);
                                p.default.ins.sp_caxc.node.setPosition(o),
                                    (p.default.ins.sp_caxc.node.active = !0),
                                    w.EffMgr.PlayOncesSp(p.default.ins.sp_caxc, "animation2", function () {}, t),
                                    cc
                                        .tween(p.default.ins.sp_caxc)
                                        .delay(0.6)
                                        .call(function () {
                                            p.default.ins.SubStep(1),
                                                (t.in_delay_destory = !1),
                                                (p.default.ins.touch_item = null),
                                                p.default.ins.map_logic.AddNeedEliminates(t),
                                                p.default.ins.map_logic.Eliminate();
                                        })
                                        .start();
                            })
                            .start()));
            }),
            (e.prototype.StopDelayDestroy = function () {
                this.in_delay_destory &&
                    (cc.Tween.stopAllByTarget(p.default.ins.sp_caxc),
                    m.GuideMgr.in_guide ||
                        this.is_eliminate ||
                        (p.default.ins.sp_caxc.node.active &&
                            (p.default.ins.sp_caxc.setCompleteListener(null),
                            (p.default.ins.sp_caxc.node.active = !1))));
            }),
            (e.prototype.GetIsVerticalDirection = function () {
                return this.direction == s.top || this.direction == s.buttom;
            }),
            (e.prototype.GetDirectionItem = function (t) {
                var e = this.x,
                    o = this.y;
                return (
                    t == s.right_top
                        ? ((e += 1), (o += 1))
                        : t == s.top
                        ? (o += 1)
                        : t == s.left_top
                        ? ((e -= 1), (o += 1))
                        : t == s.left
                        ? (e -= 1)
                        : t == s.left_buttom
                        ? ((e -= 1), (o -= 1))
                        : t == s.buttom
                        ? (o -= 1)
                        : t == s.right_buttom
                        ? ((e += 1), (o -= 1))
                        : t == s.right && (e += 1),
                    p.default.ins.map_logic.ItemIsExist(e, o) ? p.default.ins.map_logic.items[e][o] : null
                );
            }),
            (e.prototype.GetEndDirection = function () {
                if (
                    ((this.temp_v2.x = this.node.x),
                    (this.temp_v2.y = this.node.y),
                    this.temp_v2.sub(this.pos).len() < this.move_radii / 3)
                )
                    return s.toroot;
                var t,
                    e = this.temp_v2.x - this.pos.x,
                    o = this.temp_v2.y - this.pos.y,
                    n = (180 * Math.atan2(o, e)) / Math.PI;
                return (
                    _.BuffMgr.can_tilted
                        ? n >= 22.5 && n < 67.5
                            ? (t = s.right_top)
                            : n >= 67.5 && n < 112.5
                            ? (t = s.top)
                            : n >= 112.5 && n < 157.5
                            ? (t = s.left_top)
                            : n >= 157.5 || n < -157.5
                            ? (t = s.left)
                            : n >= -157.5 && n < -112.5
                            ? (t = s.left_buttom)
                            : n >= -112.5 && n < -67.5
                            ? (t = s.buttom)
                            : n >= -67.5 && n < -22.5
                            ? (t = s.right_buttom)
                            : n >= -22.5 && n < 22.5 && (t = s.right)
                        : n >= 45 && n < 135
                        ? (t = s.top)
                        : n >= 135 || n < -135
                        ? (t = s.left)
                        : n >= -135 && n < -45
                        ? (t = s.buttom)
                        : n >= -45 && n < 45 && (t = s.right),
                    t
                );
            }),
            (e.prototype.ToPos = function (t, e, o) {
                void 0 === o && (o = 0.1),
                    (this.x = t),
                    (this.y = e),
                    (this.pos.x = p.default.ins.map_logic.width * this.x),
                    (this.pos.y = p.default.ins.map_logic.height * this.y),
                    this.MoveTo(this.pos, o, this.SetNodeDefault, this);
            }),
            (e.prototype.ToRoot = function () {
                this.MoveTo(this.pos, 0.1, this.SetNodeDefault, this);
            }),
            (e.prototype.MoveTo = function (t, e, o, n) {
                var i = this;
                void 0 === e && (e = 0.1),
                    (this.lock = !0),
                    cc
                        .tween(this.node)
                        .to(e, {x: t.x, y: t.y})
                        .call(function () {
                            (i.lock = !1), o.call(n);
                        })
                        .start();
            }),
            (e.prototype.SetNodeTop = function () {
                this.node.group = "top";
            }),
            (e.prototype.SetNodeDefault = function () {
                this.node.group = "default";
            }),
            (e.prototype.ShowAllHint = function () {
                (o.showing_index = this.index), p.default.ins.map_logic.SetItemShowHint(this.index);
            }),
            (e.prototype.HideOtherHint = function () {
                -1 != o.showing_index &&
                    (p.default.ins.map_logic.SetItemHiedHint(o.showing_index), (o.showing_index = -1));
            }),
            (e.prototype.ShowHint = function () {
                var t = this;
                if (this.item_sp) {
                    var e = this.item_sp_scale;
                    cc
                        .tween(this.sp_node)
                        .to(0.15, {scale: e + 0.35 * e})
                        .to(0.15, {scale: e})
                        .start(),
                        this.item_sp.setAnimation(0, "dianji", !0),
                        cc.Tween.stopAllByTarget(this.item_sp),
                        cc
                            .tween(this.item_sp)
                            .delay(3)
                            .call(function () {
                                t.HiedHint();
                            })
                            .start();
                } else cc.tween(this.img.node).to(0.15, {scale: 1.35}).to(0.15, {scale: 1}).start();
            }),
            (e.prototype.ShowCanHcHint = function () {
                var t = this;
                if (this.item_sp) {
                    var e = this.item_sp_scale;
                    cc
                        .tween(this.sp_node)
                        .to(0.5, {scale: e + 0.2 * e})
                        .to(0.5, {scale: e})
                        .to(0.5, {scale: e + 0.2 * e})
                        .to(0.5, {scale: e})
                        .start(),
                        this.item_sp.setAnimation(0, "dianji", !0),
                        cc.Tween.stopAllByTarget(this.item_sp),
                        cc
                            .tween(this.item_sp)
                            .delay(2)
                            .call(function () {
                                t.HiedHint();
                            })
                            .start();
                } else
                    cc.tween(this.img.node)
                        .to(0.5, {scale: 1.2})
                        .to(0.5, {scale: 1})
                        .to(0.5, {scale: 1.2})
                        .to(0.5, {scale: 1})
                        .start();
            }),
            (e.prototype.HiedHint = function () {
                this.item_sp && this.item_sp.setAnimation(0, "stop", !0);
            }),
            (e.prototype.CheckCanTouch = function () {
                return m.GuideMgr.in_guide && m.GuideMgr.getInstance().gude_step < 5
                    ? m.GuideMgr.getInstance().CheckControlPos(this.x, this.y)
                    : !this.lock && this.stage == r.eliminate;
            }),
            (e.prototype.AddEvent = function () {
                this.node.on(cc.Node.EventType.TOUCH_START, this.OnTouchStart, this),
                    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.OnTouchMove, this),
                    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnTouchEnd, this),
                    this.node.on(cc.Node.EventType.TOUCH_END, this.OnTouchEnd, this),
                    d.default.onEvent_csryw(l.ryw_Event.EnterEliminateStage, this.OnEnterEliminateStage, this);
            }),
            (e.prototype.RemoveEvent = function () {
                this.node.off(cc.Node.EventType.TOUCH_START, this.OnTouchStart, this),
                    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.OnTouchMove, this),
                    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.OnTouchEnd, this),
                    this.node.off(cc.Node.EventType.TOUCH_END, this.OnTouchEnd, this);
            }),
            (e.prototype.onDestroy = function () {
                this.RemoveEvent(), p.default.ins.touch_item == this && (p.default.ins.touch_item = null);
            }),
            (e.showing_index = -1),
            c([S(cc.Sprite)], e.prototype, "img", void 0),
            (o = c([b], e))
        );
    })(cc.Component);
o.default = M;
