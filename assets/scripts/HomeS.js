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
    c = t("DialogMgr"),
    l = t("GameMgr"),
    d = t("ResMgr"),
    u = t("Utils"),
    h = t("ChatDataMgr"),
    f = t("ConfigMgr"),
    p = t("DataMgr"),
    _ = t("HeroUnlockS"),
    y = t("InfoS"),
    g = cc._decorator,
    w = g.ccclass,
    m = g.property,
    v = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.she = null),
                (e.item = null),
                (e.pageview = null),
                (e.content = null),
                (e.red = null),
                (e.btns = null),
                (e.info_btn = null),
                (e.level_img = null),
                (e.lock = null),
                (e.yl_btn = null),
                (e.record_lab = null),
                (e.record_hint = null),
                (e.title_lab = null),
                (e.items = null),
                (e.last_btn = null),
                (e.next_btn = null),
                (e.chat_btn = null),
                (e.zxxzNode = null),
                (e.loading = !1),
                (e.nt = null),
                (e.is_open_she_event = !1),
                (e.sz = [
                    "",
                    "壹",
                    "贰",
                    "叁",
                    "肆",
                    "伍",
                    "陆",
                    "柒",
                    "捌",
                    "玖",
                    "拾",
                    "拾壹",
                    "拾贰",
                    "拾叁",
                    "拾肆",
                    "拾伍",
                    "拾陆",
                    "拾柒",
                    "拾捌",
                    "拾玖",
                    "贰拾"
                ]),
                (e.level_names = [
                    "",
                    "蛇盘山",
                    "白虎岭",
                    "火焰山",
                    "女儿国",
                    "祭赛国界",
                    "荆棘岭界",
                    "乱石山地",
                    "鬼火石窟",
                    "七绝大森林",
                    "朱紫国界",
                    "盘丝洞",
                    "盘丝悬崖",
                    "盘丝山地",
                    "狮驼岭边界",
                    "狮驼岭"
                ]),
                (e.is_open_event = !1),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.onLoad = function () {
                var t = this;
                (this.select_level = p.DataMgr.user_gamedata.unlock_max_level),
                    a.default.onEvent_csryw(s.ryw_Event.HappeningsChange, this.RefreshRed, this),
                    this.RefreshRed(),
                    a.default.onEvent_csryw(s.ryw_Event.ChangeSelectIndexs, this.RefreshItemsShow, this);
                for (var e = 0; e < this.items.childrenCount; e++)
                    this.items.children[e].on(cc.Node.EventType.TOUCH_START, this.OnTouch, this);
                this.RefreshItemsShow(),
                    this.InitLevelSelect(),
                    a.default.onEvent_csryw(s.ryw_Event.AddVoucher, this.RefreshVoucher, this),
                    p.DataMgr.GetWinExtra(-3) &&
                        -1 == p.DataMgr.have_indexs.indexOf(74) &&
                        ((this.nt.active = !0),
                        this.nt.on(
                            cc.Node.EventType.TOUCH_END,
                            function () {
                                (t.loading = !0),
                                    cc
                                        .tween(t.nt)
                                        .to(0.5, {opacity: 0})
                                        .call(function () {
                                            (t.nt.active = !1),
                                                d.default.loadBundlePrefab(
                                                    "subResGame",
                                                    "ViewPrefab/HeroUnlockP",
                                                    function (e) {
                                                        t.loading = !1;
                                                        var o = cc.instantiate(e);
                                                        t.node.addChild(o),
                                                            o.getComponent(_.default).SetHeroId(
                                                                74,
                                                                function () {
                                                                    -1 == p.DataMgr.have_indexs.indexOf(74) &&
                                                                        ((t.nt.active = !0), (t.nt.opacity = 255));
                                                                },
                                                                t
                                                            );
                                                    },
                                                    t
                                                );
                                        })
                                        .start();
                            },
                            this
                        )),
                    p.DataMgr.user_gamedata.unlock_max_level >= 10 &&
                        -1 == p.DataMgr.have_indexs.indexOf(55) &&
                        ((this.yl_btn.active = !0),
                        this.yl_btn.on(
                            cc.Node.EventType.TOUCH_END,
                            function () {
                                (t.loading = !0),
                                    cc
                                        .tween(t.yl_btn)
                                        .to(0.5, {opacity: 0})
                                        .call(function () {
                                            (t.yl_btn.active = !1),
                                                d.default.loadBundlePrefab(
                                                    "subResGame",
                                                    "ViewPrefab/HeroUnlockP",
                                                    function (e) {
                                                        t.loading = !1;
                                                        var o = cc.instantiate(e);
                                                        t.node.addChild(o),
                                                            o.getComponent(_.default).SetHeroId(
                                                                55,
                                                                function () {
                                                                    -1 == p.DataMgr.have_indexs.indexOf(55) &&
                                                                        ((t.yl_btn.active = !0),
                                                                        (t.yl_btn.opacity = 255));
                                                                },
                                                                t
                                                            );
                                                    },
                                                    t
                                                );
                                        })
                                        .start();
                            },
                            this
                        ));
            }),
            (e.prototype.RefreshVoucher = function (t) {
                var e = this.content.children[t - 1].getChildByName("Voucher");
                e && e.destroy();
            }),
            (e.prototype.InitLevelSelect = function () {
                for (
                    var t = this,
                        e = function (e) {
                            var n = cc.instantiate(o.item),
                                i = n.getChildByName("bg").getChildByName("level_img").getComponent(cc.Sprite);
                            d.default.loadBundleSpriteFrame(
                                "subResGame",
                                "Textures/ConfigImg/l_" + (e + 1),
                                function (t) {
                                    i.spriteFrame = t;
                                },
                                o
                            ),
                                0 != e ||
                                    -1 != p.DataMgr.have_indexs.indexOf(43) ||
                                    o.is_open_she_event ||
                                    ((o.is_open_she_event = !0),
                                    o.she.setParent(i.node),
                                    (o.she.active = !0),
                                    (o.she.x = -95),
                                    (o.she.y = -9),
                                    o.she.on(
                                        cc.Node.EventType.TOUCH_END,
                                        function () {
                                            (t.loading = !0),
                                                cc
                                                    .tween(t.she)
                                                    .to(0.5, {opacity: 0})
                                                    .call(function () {
                                                        (t.she.active = !1),
                                                            d.default.loadBundlePrefab(
                                                                "subResGame",
                                                                "ViewPrefab/HeroUnlockP",
                                                                function (e) {
                                                                    t.loading = !1;
                                                                    var o = cc.instantiate(e);
                                                                    t.node.addChild(o),
                                                                        o.getComponent(_.default).SetHeroId(
                                                                            43,
                                                                            function () {
                                                                                -1 ==
                                                                                    p.DataMgr.have_indexs.indexOf(43) &&
                                                                                    ((t.she.active = !0),
                                                                                    (t.she.opacity = 255));
                                                                            },
                                                                            t
                                                                        );
                                                                },
                                                                t
                                                            );
                                                    })
                                                    .start();
                                        },
                                        o
                                    )),
                                o.content.addChild(n),
                                (n.getChildByName("lock").active = e + 1 > p.DataMgr.user_gamedata.unlock_max_level),
                                (n.active = !0);
                            var r = n.getChildByName("Voucher");
                            e > 4 ? p.DataMgr.CheckLevelHaveVoucher(e + 1) && r.destroy() : r.destroy();
                        },
                        o = this,
                        n = 0;
                    n < f.ConfigMgr.enmeyLevel_config.levels_len;
                    n++
                )
                    e(n);
                this.RefreshLevelNodeShow();
            }),
            (e.prototype.start = function () {
                this.pageview.setContentPosition(
                    new cc.Vec2(-200 - 405 * (p.DataMgr.user_gamedata.unlock_max_level - 1), 0)
                ),
                    this.pageview.setCurrentPageIndex(p.DataMgr.user_gamedata.unlock_max_level - 1);
            }),
            (e.prototype.RefreshItemsShow = function () {
                for (var t = 1; t < p.DataMgr.select_indexs.length; t++)
                    this.SetItemShow(t - 1, p.DataMgr.select_indexs[t] + 1);
            }),
            (e.prototype.RefreshLevelNodeShow = function () {
                (this.last_btn.active = 1 != this.select_level),
                    (this.next_btn.active = this.select_level != f.ConfigMgr.enmeyLevel_config.levels_len),
                    (this.title_lab.string = this.sz[this.select_level] + "·" + this.level_names[this.select_level]);
                var t =
                    this.select_level > p.DataMgr.user_gamedata.unlock_max_level
                        ? "未解锁"
                        : this.select_level == p.DataMgr.user_gamedata.unlock_max_level
                        ? p.DataMgr.user_gamedata.max_win_count
                        : "已通关";
                if (
                    ("string" == typeof t
                        ? ((this.record_lab.string = t),
                          (this.record_lab.node.x = -65),
                          (this.record_hint.node.active = !1))
                        : ((this.record_lab.node.x = 55),
                          (this.record_hint.node.active = !0),
                          (this.record_lab.string = t.toString())),
                    p.DataMgr.user_gamedata.unlock_max_level >= 3)
                )
                    if (3 == this.select_level && -1 == p.DataMgr.have_indexs.indexOf(49))
                        for (var e = 0; e < this.items.childrenCount; e++)
                            "孙悟空" == this.items.children[e].getChildByName("lab").getComponent(cc.Label).string &&
                                (console.log("开启事件"),
                                (o = this.items.children[e].getChildByName("sp_node")).on(
                                    cc.Node.EventType.TOUCH_MOVE,
                                    this.swkMove,
                                    this
                                ),
                                o.on(cc.Node.EventType.TOUCH_END, this.swkEnd, this),
                                o.on(cc.Node.EventType.TOUCH_CANCEL, this.swkEnd, this),
                                (this.is_open_event = !0),
                                (this.swk = o),
                                (this.zxxzNode.active = !0));
                    else if (3 != this.select_level && this.is_open_event)
                        for (e = 0; e < this.items.childrenCount; e++) {
                            var o;
                            "孙悟空" == this.items.children[e].getChildByName("lab").getComponent(cc.Label).string &&
                                (console.log("关闭事件"),
                                (o = this.items.children[e].getChildByName("sp_node")).off(
                                    cc.Node.EventType.TOUCH_MOVE,
                                    this.swkMove,
                                    this
                                ),
                                o.off(cc.Node.EventType.TOUCH_END, this.swkEnd, this),
                                o.off(cc.Node.EventType.TOUCH_CANCEL, this.swkEnd, this),
                                (this.is_open_event = !1),
                                (this.zxxzNode.active = !1));
                        }
            }),
            (e.prototype.swkMove = function (t) {
                (this.loading = !0),
                    console.log("点击移动"),
                    (this.swk.x += t.getDeltaX()),
                    (this.swk.y += t.getDeltaY());
            }),
            (e.prototype.swkEnd = function () {
                var t = this,
                    e = this.zxxzNode.getChildByName("swk_pos");
                if (u.default.GetDistance(e, this.swk) < 3e4) {
                    var o = u.default.GetNodeInNodePos(e, this.swk.parent);
                    cc.tween(this.swk)
                        .to(0.1, {x: o.x, y: o.y})
                        .call(function () {
                            var e = t.node.getChildByName("yun");
                            e ? (e.setParent(t.swk), (e.x = 0), (e.y = -10)) : (e = t.swk.children[0]),
                                (e.opacity = 0),
                                (e.active = !0),
                                cc.tween(e).to(0.3, {opacity: 255}).start();
                            var o = t.zxxzNode.getChildByName("zxxz_1");
                            cc.tween(o)
                                .to(0.5, {x: 125, y: -134})
                                .delay(1)
                                .call(function () {
                                    d.default.loadBundlePrefab(
                                        "subResGame",
                                        "ViewPrefab/HeroUnlockP",
                                        function (n) {
                                            (o.x = 171), (o.y = -214), (t.loading = !1);
                                            var i = cc.instantiate(n);
                                            t.node.addChild(i),
                                                i.getComponent(_.default).SetHeroId(
                                                    49,
                                                    function () {
                                                        (e.opacity = 0),
                                                            cc.tween(t.swk).to(0.1, {x: 0, y: -22.54}).start();
                                                    },
                                                    t
                                                );
                                        },
                                        t
                                    );
                                })
                                .start();
                        })
                        .start();
                } else
                    cc.tween(this.swk)
                        .to(0.1, {x: 0, y: -22.54})
                        .call(function () {
                            t.loading = !1;
                        })
                        .start();
            }),
            (e.prototype.SetItemShow = function (t, e) {
                var o = this.items.children[t].getChildByName("img").getComponent(cc.Sprite),
                    n = this.items.children[t].getChildByName("lab").getComponent(cc.Label),
                    i = this.items.children[t].getChildByName("sp_node").getComponent(sp.Skeleton);
                if (e && e > 0) {
                    var r = f.ConfigMgr.card_config.get(e);
                    (n.string = r.name),
                        (this.items.children[t].id = e),
                        d.default.loadBundleSpine(
                            "subResGame",
                            "sp/hero/" + f.ConfigMgr.CardInfo[r.img].sp_name,
                            function (t) {
                                (i.skeletonData = t),
                                    i.setSkin("lv" + p.DataMgr.GetHeroAniShowLv(r.index - 1)),
                                    i.setAnimation(0, "dianji", !0),
                                    (i.node.scale = 1),
                                    (i.node.y = -37.54),
                                    u.default.GetSizeScale(i.node, 120) < 0.9 && (i.node.scale = 0.3),
                                    (i.node.y += 15);
                            },
                            this
                        );
                } else
                    (o.spriteFrame = null),
                        (n.string = ""),
                        (this.items.children[t].id = null),
                        (i.skeletonData = null);
            }),
            (e.prototype.OnTouch = function (t) {
                if (!this.loading) {
                    var e = t.target;
                    this.btns.active && this.btns.item == e
                        ? this.HideHint()
                        : e.id
                        ? this.ShowHint(e)
                        : this.HideHint();
                }
            }),
            (e.prototype.ShowHint = function (t) {
                this.info_btn.active = !0;
                var e = t.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    o = this.btns.parent.convertToNodeSpaceAR(e);
                this.btns.setPosition(o), (this.btns.active = !0), (this.btns.item = t);
            }),
            (e.prototype.HideHint = function () {
                this.btns.active = !1;
            }),
            (e.prototype.OnInfo = function () {
                var t = this;
                this.loading ||
                    ((this.loading = !0),
                    d.default.loadBundlePrefab(
                        "subResGame",
                        "ViewPrefab/InfoP",
                        function (e) {
                            t.loading = !1;
                            var o = cc.instantiate(e);
                            t.node.addChild(o), o.getComponent(y.default).SetId(t.btns.item.id);
                        },
                        this
                    ));
            }),
            (e.prototype.RefreshRed = function () {
                console.log("刷新红点！！！"),
                    (this.red.active = h.ChatDataMgr.GetHaveRed()),
                    cc.Tween.stopAllByTarget(this.chat_btn),
                    this.red.active &&
                        cc
                            .tween(this.chat_btn)
                            .to(0.5, {scale: 1.1})
                            .to(0.5, {scale: 1})
                            .union()
                            .repeatForever()
                            .start();
            }),
            (e.prototype.OnStart = function () {
                var t = this;
                if (!this.loading)
                    if (this.content.children[this.pageview.getCurrentPageIndex()].getChildByName("lock").active)
                        c.default.openToast("关卡未解锁");
                    else if (this.content.children[this.pageview.getCurrentPageIndex()].getChildByName("Voucher"))
                        c.default.openToast("请先前往官衙中心获得通关文牒");
                    else {
                        var e = h.ChatDataMgr.StartLevelUnlock(this.select_level);
                        if (-1 == e)
                            if (5 == this.select_level) {
                                if (
                                    -1 == p.DataMgr.select_indexs.indexOf(13) ||
                                    -1 == p.DataMgr.select_indexs.indexOf(37)
                                )
                                    return void this.OnChange(null, function () {
                                        c.default.openToast("请上场猪八戒和红孩儿后开始游戏");
                                    });
                            } else if (9 == this.select_level && -1 == p.DataMgr.select_indexs.indexOf(37))
                                return void this.OnChange(null, function () {
                                    c.default.openToast("请上场红孩儿后开始游戏");
                                });
                        if (3 == this.select_level && !p.DataMgr.GetWinExtra(-3)) {
                            for (var o = [1, 49, -1, -1], n = [], i = 1; i < p.DataMgr.select_indexs.length; i++)
                                n.push(p.DataMgr.select_indexs[i]);
                            for (i = 0; i < o.length; i++) {
                                var r = n.indexOf(o[i]);
                                -1 != r && n.splice(r, 1);
                            }
                            if (0 == n.length)
                                return (
                                    (this.loading = !0),
                                    void d.default.loadBundlePrefab(
                                        "subResGame",
                                        "ViewPrefab/EnterLv3",
                                        function (e) {
                                            t.loading = !1;
                                            var o = cc.instantiate(e);
                                            t.node.addChild(o);
                                        },
                                        this
                                    )
                                );
                        }
                        -1 == p.DataMgr.select_indexs.indexOf(-1)
                            ? -1 != e
                                ? c.default.openLtPage(e)
                                : ((p.DataMgr.extra_lv = 0),
                                  l.default.getInstance_csryw().onLoadToGameScene_csryw(this.select_level))
                            : c.default.openToast("请先上满阵容");
                    }
            }),
            (e.prototype.OnChat = function () {
                var t = this;
                this.loading ||
                    ((this.loading = !0),
                    d.default.loadBundlePrefab(
                        "subResGame",
                        "ViewPrefab/PhoneP",
                        function (e) {
                            t.loading = !1;
                            var o = cc.instantiate(e);
                            t.node.addChild(o);
                        },
                        this
                    ));
            }),
            (e.prototype.OnBack = function () {
                this.node.destroy();
            }),
            (e.prototype.OnLast = function () {
                this.loading ||
                    (this.pageview.setCurrentPageIndex(this.pageview.getCurrentPageIndex() - 1),
                    (this.last_btn.active = 0 != this.pageview.getCurrentPageIndex()),
                    (this.select_level = this.pageview.getCurrentPageIndex() + 1),
                    this.RefreshLevelNodeShow());
            }),
            (e.prototype.OnPage = function () {
                this.loading ||
                    ((this.select_level = this.pageview.getCurrentPageIndex() + 1), this.RefreshLevelNodeShow());
            }),
            (e.prototype.OnNext = function () {
                this.loading ||
                    (this.pageview.setCurrentPageIndex(this.pageview.getCurrentPageIndex() + 1),
                    (this.next_btn.active = this.pageview.getCurrentPageIndex() != this.pageview.getPages().length - 1),
                    (this.select_level = this.pageview.getCurrentPageIndex() + 1),
                    this.RefreshLevelNodeShow());
            }),
            (e.prototype.OnChange = function (t, e) {
                var o = this;
                this.loading ||
                    ((this.loading = !0),
                    this.HideHint(),
                    d.default.loadBundlePrefab(
                        "subResGame",
                        "ViewPrefab/ChangeP",
                        function (t) {
                            o.loading = !1;
                            var n = cc.instantiate(t);
                            o.node.addChild(n), e && e();
                        },
                        this
                    ));
            }),
            (e.prototype.OnSet = function () {
                if (
                    !this.loading &&
                    (c.default.openSettingDialog(handleFM_csryw(function () {}, this)), f.ConfigMgr.is_dr)
                ) {
                    p.DataMgr.addMoney(1e3),
                        h.ChatDataMgr.AutoChatAll(),
                        p.DataMgr.SetUnlockMaxLevel(f.ConfigMgr.enmeyLevel_config.levels_len),
                        p.DataMgr.SetMaxWinCount(30);
                    for (var t = 0; t < this.content.childrenCount; t++)
                        (this.content.children[t].getChildByName("lock").active = !1), p.DataMgr.AddVoucher(t + 1);
                    this.RefreshLevelNodeShow(), this.RefreshItemsShow(), this.RefreshRed();
                }
            }),
            (e.prototype.onDestroy = function () {
                a.default.offEvent_csryw(s.ryw_Event.HappeningsChange, this.RefreshRed, this),
                    a.default.offEvent_csryw(s.ryw_Event.ChangeSelectIndexs, this.RefreshItemsShow, this);
            }),
            (e.prototype.OnGetGold = function () {
                f.ConfigMgr.is_dr && p.DataMgr.addMoney(1e3);
            }),
            (e.prototype.OnTujian = function () {
                var t = this;
                this.loading ||
                    ((this.loading = !0),
                    this.HideHint(),
                    d.default.loadBundlePrefab(
                        "subResGame",
                        "ViewPrefab/TujianP",
                        function (e) {
                            t.loading = !1;
                            var o = cc.instantiate(e);
                            t.node.addChild(o);
                        },
                        this
                    ));
            }),
            r([m(cc.Node)], e.prototype, "she", void 0),
            r([m(cc.Node)], e.prototype, "item", void 0),
            r([m(cc.PageView)], e.prototype, "pageview", void 0),
            r([m(cc.Node)], e.prototype, "content", void 0),
            r([m(cc.Node)], e.prototype, "red", void 0),
            r([m(cc.Node)], e.prototype, "btns", void 0),
            r([m(cc.Node)], e.prototype, "info_btn", void 0),
            r([m(cc.Sprite)], e.prototype, "level_img", void 0),
            r([m(cc.Node)], e.prototype, "lock", void 0),
            r([m(cc.Node)], e.prototype, "yl_btn", void 0),
            r([m(cc.Label)], e.prototype, "record_lab", void 0),
            r([m(cc.Label)], e.prototype, "record_hint", void 0),
            r([m(cc.Label)], e.prototype, "title_lab", void 0),
            r([m(cc.Node)], e.prototype, "items", void 0),
            r([m(cc.Node)], e.prototype, "last_btn", void 0),
            r([m(cc.Node)], e.prototype, "next_btn", void 0),
            r([m(cc.Node)], e.prototype, "chat_btn", void 0),
            r([m(cc.Node)], e.prototype, "zxxzNode", void 0),
            r([m(cc.Node)], e.prototype, "nt", void 0),
            r([w], e)
        );
    })(cc.Component);
o.default = v;
