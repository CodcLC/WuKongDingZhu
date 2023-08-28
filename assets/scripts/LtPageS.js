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
    d = t("ResSubMgr"),
    u = t("CommonMethod"),
    h = t("ResMgr"),
    f = t("ChatDataMgr"),
    p = t("ConfigMgr"),
    _ = t("DataMgr"),
    y = t("GuideMgr"),
    g = t("ChatFailS"),
    w = t("ChatWinS"),
    m = t("ChatPageS"),
    v = t("OtherEmo"),
    b = t("OtherHb"),
    S = t("OtherIamge"),
    M = t("OtherTalk"),
    k = t("SelfEmo"),
    A = t("SelfHb"),
    C = t("SelfTalk"),
    O = cc._decorator,
    x = O.ccclass,
    P = O.property,
    R = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.wait_time = p.ConfigMgr.is_dr ? 0 : 0.5),
                (e.wait_time2 = p.ConfigMgr.is_dr ? 0 : 1),
                (e.btnBack = null),
                (e.GoldNode = null),
                (e.ltScrollNode = null),
                (e.heroName = null),
                (e.content = null),
                (e.pickNode = null),
                (e.pickOne = null),
                (e.pickTwo = null),
                (e.pickoneVal = null),
                (e.picktwoVal = null),
                (e.scr = null),
                (e.is_group = !1),
                (e.is_temp_chat = !1),
                (e.loading = !1),
                (e.is_off = !1),
                (e.reply_fail_count = 0),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.Init = function (t, e) {
                void 0 === e && (e = !1), (this.id = t), (this.is_temp_chat = e);
                var o = p.ConfigMgr.chatLibrary_config.get(t);
                console.log("获取对话信息", t, o),
                    o.group_img && (this.is_group = !0),
                    (this.heroData = p.ConfigMgr.chathero_config.get(o.heroId)),
                    (this.heroName.string = this.heroData.name),
                    this.LoadChat(),
                    this.is_temp_chat ||
                        (this.scr.node.on("scrolling", this.Scrolling, this),
                        this.scr.node.on(cc.Node.EventType.TOUCH_START, this.TouchStart, this),
                        this.scr.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnd, this),
                        this.scr.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnd, this)),
                    y.GuideMgr.in_guide &&
                        ((this.btnBack.active = !1),
                        (this.GoldNode.active = !1),
                        1002 == t && ((y.GuideMgr.in_guide = !1), _.DataMgr.SetMaxWinCount(0)));
            }),
            (e.prototype.Scrolling = function () {
                var t = this;
                this.loading ||
                    (this.scr.getScrollOffset().y < -100 &&
                        ((this.loading = !0),
                        this.LoadOlder(),
                        this.scheduleOnce(function () {
                            t.loading = !1;
                        }, 0.5)));
            }),
            (e.prototype.OnContentHeightChange = function () {
                this.scr.stopAutoScroll();
                var t = this.content.height - this.before_h,
                    e = new cc.Vec2(
                        0,
                        (this.scr.getMaxScrollOffset().y - (this.before_y + t)) / this.scr.getMaxScrollOffset().y
                    );
                this.scr.scrollTo(e, 0), (this.before_y = this.before_y + t), (this.before_h = this.content.height);
            }),
            (e.prototype.OffTouchEvent = function () {
                this.is_off ||
                    ((this.is_off = !0),
                    this.scr.node.off(cc.Node.EventType.TOUCH_START, this.TouchStart, this),
                    this.scr.node.off(cc.Node.EventType.TOUCH_END, this.TouchEnd, this),
                    this.scr.node.off(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnd, this));
            }),
            (e.prototype.TouchStart = function () {
                this.content.height - this.scr.node.height > 0 && this.scr.content.height != this.node.height + 1
                    ? this.OffTouchEvent()
                    : ((this.scr.content.getComponent(cc.Layout).resizeMode = cc.Layout.ResizeMode.NONE),
                      (this.scr.content.height = this.node.height + 1));
            }),
            (e.prototype.TouchEnd = function () {
                this.scr.content.getComponent(cc.Layout).resizeMode = cc.Layout.ResizeMode.CONTAINER;
            }),
            (e.prototype.LoadChat = function () {
                var t = this,
                    e = f.ChatDataMgr.GetChatHappeningByHeroid(this.heroData.heroId);
                this.is_temp_chat && (e = [new f.happeningData(this.id, [], 0)]),
                    (this.show_index = e.length - 1),
                    this.LoadOld(e[this.show_index]),
                    (this.librarydata = p.ConfigMgr.chatLibrary_config.get(e[this.show_index].id)),
                    (this.chat = e[this.show_index]),
                    this.scheduleOnce(function () {
                        t.scr.scrollToBottom(0.2);
                    }, 0.1),
                    this.StartChat();
            }),
            (e.prototype.LoadOlder = function () {
                var t = this;
                if (0 != this.show_index) {
                    console.log("加载之前的消息：", this.show_index);
                    var e = f.ChatDataMgr.GetChatHappeningByHeroid(this.heroData.heroId),
                        o = this.show_index - 1;
                    if (
                        ((this.show_index = o),
                        this.content.on(cc.Node.EventType.SIZE_CHANGED, this.OnContentHeightChange, this),
                        (this.before_y = this.scr.getScrollOffset().y),
                        (this.before_h = this.content.height),
                        0 != e[o].index && this.LoadOldchat(e[o]),
                        this.before_h == this.node.height + 1)
                    )
                        return (
                            this.content.off(cc.Node.EventType.SIZE_CHANGED, this.OnContentHeightChange, this),
                            void this.scheduleOnce(function () {
                                t.scr.stopAutoScroll(), t.scr.scrollToBottom(0);
                            }, 0.1)
                        );
                    this.scheduleOnce(function () {
                        t.content.off(cc.Node.EventType.SIZE_CHANGED, t.OnContentHeightChange, t);
                    }, 0.5);
                } else this.scr.node.off("scrolling", this.Scrolling, this);
            }),
            (e.prototype.LoadOldchat = function (t) {
                for (var e = p.ConfigMgr.chatLibrary_config.get(t.id), o = 0; o < t.oldindexs.length; o++) {
                    var n = t.oldindexs[o],
                        i = e.value[n - 1];
                    0 != i.attribute ? this.AddOther(i, !0) : this.AddSelf(i, !0);
                }
            }),
            (e.prototype.LoadOld = function (t) {
                for (var e = p.ConfigMgr.chatLibrary_config.get(t.id), o = 0; o < t.oldindexs.length; o++) {
                    var n = t.oldindexs[o],
                        i = e.value[n - 1];
                    if (0 != t.index && -1 != t.index && o == t.oldindexs.length - 1) return;
                    0 != i.attribute ? this.AddOther(i, !0) : this.AddSelf(i, !0);
                }
            }),
            (e.prototype.StartChat = function () {
                console.log("进行对话！！！", this.chat),
                    0 == this.chat.index ? this.OnOhter(1) : -1 == this.chat.index || this.OnOhter(this.chat.index);
            }),
            (e.prototype.OnOhter = function (t, e) {
                var o = this;
                void 0 === e && (e = !0);
                var n = this.librarydata.value[t - 1];
                0 != n.attribute ? this.AddOther(n) : e && this.AddSelf(n, e);
                var i = this.GetNext(n.id);
                if (2 == i.length) {
                    this.scheduleOnce(function () {
                        (o.pickOne.active = !0), (o.pickOne.y = 75.5), (o.pickTwo.active = !0);
                    }, this.wait_time);
                    var r = this.librarydata.value[i[0] - 1];
                    (this.pickOne.chatdata = r), (this.pickoneVal.string = r.content);
                    var s = this.librarydata.value[i[1] - 1];
                    (this.pickTwo.chatdata = s), (this.picktwoVal.string = s.content);
                } else if (1 == i.length) {
                    var a = this.librarydata.value[i[0] - 1];
                    if (0 != a.attribute)
                        return void this.scheduleOnce(function () {
                            o.OnOhter(i[0], !1);
                        }, this.wait_time2);
                    this.scheduleOnce(function () {
                        (o.pickOne.active = !0), 2 == a.type && o.OnPickOne();
                    }, this.wait_time),
                        (this.pickOne.y = -4.5),
                        (this.pickOne.chatdata = a),
                        (this.pickoneVal.string = a.content);
                } else
                    console.log("无后续对话了", !e),
                        e ||
                            (this.is_temp_chat || f.ChatDataMgr.SetHappenings(this.chat.id, -1),
                            this.scheduleOnce(function () {
                                console.log("对话结果 ：", n.result),
                                    0 == n.result
                                        ? o.OnClose()
                                        : 1 == n.result
                                        ? o.OnFail()
                                        : 2 == n.result
                                        ? o.OnWin()
                                        : o.OnClose();
                            }, 2));
            }),
            (e.prototype.OnPickOne = function () {
                this.OnPick(this.pickOne.chatdata);
            }),
            (e.prototype.OnPickTwo = function () {
                this.OnPick(this.pickTwo.chatdata);
            }),
            (e.prototype.OnPick = function (t) {
                var e = this;
                -1 == t.result && (this.in_fail = !0),
                    (this.pickOne.active = !1),
                    (this.pickTwo.active = !1),
                    this.AddSelf(t);
                var o = this.GetNext(t.id);
                o.length >= 1
                    ? 0 != this.librarydata.value[o[0] - 1].attribute
                        ? this.scheduleOnce(function () {
                              e.OnOhter(o[0], !1);
                          }, this.wait_time2)
                        : this.scheduleOnce(function () {
                              e.OnOhter(t.id, !1);
                          }, 0.2)
                    : o.length > 1
                    ? console.warn("配置    重复：", o)
                    : (this.is_temp_chat || f.ChatDataMgr.SetHappenings(this.chat.id, -1),
                      console.log("无后续对话了"),
                      this.scheduleOnce(function () {
                          0 == t.result
                              ? e.OnClose()
                              : 1 == t.result
                              ? e.OnFail()
                              : 2 == t.result
                              ? e.OnWin()
                              : e.OnClose();
                      }, 2));
            }),
            (e.prototype.GetNext = function (t) {
                for (var e = [], o = 0; o < this.librarydata.value.length; o++)
                    this.librarydata.value[o].id2 == t && e.push(this.librarydata.value[o].id);
                return e;
            }),
            (e.prototype.AddOther = function (t, e) {
                var o = this;
                void 0 === e && (e = !1),
                    !this.chat ||
                        e ||
                        this.in_fail ||
                        this.is_temp_chat ||
                        f.ChatDataMgr.SetHappenings(this.chat.id, t.id),
                    this.in_fail && this.reply_fail_count++;
                var n = e ? this.show_index : 999,
                    i = p.ConfigMgr.chatTask_config.get(t.task);
                if (i)
                    if (1 == i.taskType)
                        e ||
                            this.scheduleOnce(function () {
                                if (5 == i.numb) {
                                    if (
                                        -1 == _.DataMgr.select_indexs.indexOf(13) ||
                                        -1 == _.DataMgr.select_indexs.indexOf(37)
                                    )
                                        return void l.default.getInstance_csryw().onLoadToWorldScene_csryw(
                                            !0,
                                            function () {
                                                c.default.openToast("请上场猪八戒和红孩儿后开始游戏");
                                            },
                                            !0
                                        );
                                } else if (9 == i.numb && -1 == _.DataMgr.select_indexs.indexOf(37))
                                    return void l.default.getInstance_csryw().onLoadToWorldScene_csryw(
                                        !0,
                                        function () {
                                            c.default.openToast("红孩儿后开始游戏");
                                        },
                                        !0
                                    );
                                -1 != i.numb
                                    ? l.default.getInstance_csryw().onLoadToGameScene_csryw(i.numb)
                                    : l.default.getInstance_csryw().onLoadToGameScene_csryw(1);
                            }, 1);
                    else if (2 == i.taskType) e || f.ChatDataMgr.UnlockChat(i.chatid);
                    else if (4 == i.taskType) {
                        if (!e) {
                            for (var r = p.ConfigMgr.StringToNumbers(i.buyid.toString()), h = 0; h < r.length; h++)
                                _.DataMgr.SetHeroLv(r[h], i.numb);
                            c.default.openToast("所有人物攻击提升，解锁新技能"),
                                a.default.emitEvent_csryw(s.ryw_Event.ChangeSelectIndexs);
                        }
                    } else if (6 == i.taskType)
                        e || (_.DataMgr.AddHero(i.buyid, i.numb), c.default.openToast("新英雄已解锁！"));
                    else {
                        if (5 == i.taskType)
                            return (
                                u.default
                                    .createPrefab_csryw(
                                        d.ResSubMgr.getPrefabBySubGame(d.EnumSubGameRes.OtherEmo),
                                        this.content,
                                        n
                                    )
                                    .getComponent(v.default)
                                    .initOtherEmo(t, i, this.is_group),
                                void (e || this.scr.scrollToBottom(0.2))
                            );
                        if (12 == i.taskType)
                            return (
                                u.default
                                    .createPrefab_csryw(
                                        d.ResSubMgr.getPrefabBySubGame(d.EnumSubGameRes.OtherImage),
                                        this.content,
                                        n
                                    )
                                    .getComponent(S.default)
                                    .initOtherImage(t, i, this.is_group),
                                void (e || this.scr.scrollToBottom(0.2))
                            );
                        if (11 == i.taskType)
                            return (
                                u.default
                                    .createPrefab_csryw(
                                        d.ResSubMgr.getPrefabBySubGame(d.EnumSubGameRes.OtherHB),
                                        this.content,
                                        n
                                    )
                                    .getComponent(b.default)
                                    .initOtherHb(t, i, this.is_group),
                                void (e || this.scr.scrollToBottom(0.2))
                            );
                        3 == i.taskType &&
                            (e || (_.DataMgr.AddVoucher(i.buyid), c.default.openToast("已获得通关文牒")));
                    }
                u.default
                    .createPrefab_csryw(d.ResSubMgr.getPrefabBySubGame(d.EnumSubGameRes.OtherTalk), this.content, n)
                    .getComponent(M.default)
                    .initOtherTalk(t, this.is_group),
                    e ||
                        this.scheduleOnce(function () {
                            o.scr.scrollToBottom(0.2);
                        }, 0.02);
            }),
            (e.prototype.AddSelf = function (t, e) {
                var o = this;
                void 0 === e && (e = !1),
                    !this.chat ||
                        e ||
                        this.in_fail ||
                        this.is_temp_chat ||
                        f.ChatDataMgr.SetHappenings(this.chat.id, t.id),
                    this.in_fail && this.reply_fail_count++;
                var n = e ? this.show_index : 999,
                    i = p.ConfigMgr.chatTask_config.get(t.task);
                if (i)
                    if (1 == i.taskType)
                        console.log("是否是之前的对话：", e),
                            e ||
                                this.scheduleOnce(function () {
                                    if (5 == i.numb) {
                                        if (
                                            -1 == _.DataMgr.select_indexs.indexOf(13) ||
                                            -1 == _.DataMgr.select_indexs.indexOf(37)
                                        )
                                            return void l.default.getInstance_csryw().onLoadToWorldScene_csryw(
                                                !0,
                                                function () {
                                                    c.default.openToast("请上场猪八戒和红孩儿后开始游戏");
                                                },
                                                !0
                                            );
                                    } else if (9 == i.numb && -1 == _.DataMgr.select_indexs.indexOf(37))
                                        return void l.default.getInstance_csryw().onLoadToWorldScene_csryw(
                                            !0,
                                            function () {
                                                c.default.openToast("红孩儿后开始游戏");
                                            },
                                            !0
                                        );
                                    -1 != i.numb
                                        ? l.default.getInstance_csryw().onLoadToGameScene_csryw(i.numb)
                                        : l.default.getInstance_csryw().onLoadToGameScene_csryw(1);
                                }, 1);
                    else if (2 == i.taskType) e || f.ChatDataMgr.UnlockChat(i.chatid);
                    else if (4 == i.taskType) {
                        if (!e) {
                            for (var r = p.ConfigMgr.StringToNumbers(i.buyid.toString()), h = 0; h < r.length; h++)
                                _.DataMgr.SetHeroLv(r[h], i.numb);
                            c.default.openToast("所有人物攻击提升，解锁新技能"),
                                a.default.emitEvent_csryw(s.ryw_Event.ChangeSelectIndexs);
                        }
                    } else if (6 == i.taskType)
                        e || (_.DataMgr.AddHero(i.buyid, i.numb), c.default.openToast("新英雄已解锁！"));
                    else {
                        if (5 == i.taskType)
                            return (
                                u.default
                                    .createPrefab_csryw(
                                        d.ResSubMgr.getPrefabBySubGame(d.EnumSubGameRes.SelfEmo),
                                        this.content,
                                        n
                                    )
                                    .getComponent(k.default)
                                    .initSelfEmo(t, i),
                                void (e || this.scr.scrollToBottom(0.2))
                            );
                        if (11 == i.taskType)
                            return (
                                u.default
                                    .createPrefab_csryw(
                                        d.ResSubMgr.getPrefabBySubGame(d.EnumSubGameRes.SelfHB),
                                        this.content,
                                        n
                                    )
                                    .getComponent(A.default)
                                    .initSelfHb(t, i),
                                void (e || this.scr.scrollToBottom(0.2))
                            );
                        3 == i.taskType &&
                            (e || (_.DataMgr.AddVoucher(i.buyid), c.default.openToast("已获得通关文牒")));
                    }
                u.default
                    .createPrefab_csryw(d.ResSubMgr.getPrefabBySubGame(d.EnumSubGameRes.SelfTalk), this.content, n)
                    .getComponent(C.default)
                    .initSelfTalk(t),
                    e ||
                        this.scheduleOnce(function () {
                            o.scr.scrollToBottom(0.2);
                        }, 0.02);
            }),
            (e.prototype.OnFail = function () {
                var t = this;
                h.default.loadBundlePrefab(
                    "subResGame",
                    "ViewPrefab/ChatFailP",
                    function (e) {
                        var o = cc.instantiate(e);
                        t.node.addChild(o),
                            o.getComponent(g.default).Init(
                                function () {
                                    for (; t.reply_fail_count > 0; )
                                        t.reply_fail_count--,
                                            t.content.removeChild(t.content.children[t.content.childrenCount - 1]);
                                    t.content.removeChild(t.content.children[t.content.childrenCount - 1]),
                                        (t.in_fail = !1),
                                        t.StartChat();
                                },
                                function () {
                                    t.is_temp_chat || f.ChatDataMgr.SetHappenings(t.chat.id, 0), t.OnClose();
                                },
                                t
                            );
                    },
                    this
                );
            }),
            (e.prototype.OnWin = function () {
                var t = this;
                h.default.loadBundlePrefab(
                    "subResGame",
                    "ViewPrefab/ChatWinP",
                    function (e) {
                        var o = cc.instantiate(e);
                        t.node.addChild(o),
                            o.getComponent(w.default).Init(function () {
                                t.OnClose();
                            }, t);
                    },
                    this
                );
            }),
            (e.prototype.OnClose = function () {
                console.log("关闭页面"),
                    this.chat.id && (this.is_temp_chat || f.ChatDataMgr.SetChatOver(this.chat)),
                    m.default.ins && m.default.ins.Refresh(),
                    this.node.destroy();
            }),
            (e.prototype.OnSet = function () {
                c.default.openSettingDialog(handleFM_csryw(function () {}, this));
            }),
            r([P({displayName: "返回", type: cc.Node})], e.prototype, "btnBack", void 0),
            r([P(cc.Node)], e.prototype, "GoldNode", void 0),
            r([P({displayName: "滚动视图", type: cc.ScrollView})], e.prototype, "ltScrollNode", void 0),
            r([P({displayName: "角色名字", type: cc.Label})], e.prototype, "heroName", void 0),
            r([P({displayName: "聊天content", type: cc.Node})], e.prototype, "content", void 0),
            r([P({displayName: "选择节点", type: cc.Node})], e.prototype, "pickNode", void 0),
            r([P({displayName: "选择节点1", type: cc.Node})], e.prototype, "pickOne", void 0),
            r([P({displayName: "选择节点2", type: cc.Node})], e.prototype, "pickTwo", void 0),
            r([P({displayName: "对话一文本", type: cc.Label})], e.prototype, "pickoneVal", void 0),
            r([P({displayName: "对话二文本", type: cc.Label})], e.prototype, "picktwoVal", void 0),
            r([P(cc.ScrollView)], e.prototype, "scr", void 0),
            r([x], e)
        );
    })(cc.Component);
o.default = R;
