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
var s = t("DialogMgr"),
    a = t("ResSubMgr"),
    c = t("CommonMethod"),
    l = t("ConfigMgr"),
    d = t("DataMgr"),
    u = t("OtherTalk"),
    h = t("SelfTalk"),
    f = cc._decorator,
    p = f.ccclass,
    _ = f.property,
    y = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.btnBack = null),
                (e.set_btn = null),
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
                (e.n_h = new l.ChatData()),
                (e.q_w_q = new l.ChatData()),
                (e.w_b_d = new l.ChatData()),
                (e.z_r_g = new l.ChatData()),
                (e.s_q_w_d = new l.ChatData()),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.start = function () {
                var t = this;
                this.InitFixChat(),
                    (this.heroName.string = "官衙中心客服"),
                    this.AddOther(this.n_h),
                    this.scheduleOnce(function () {
                        t.AddOther(t.q_w_q);
                    }, 0.5),
                    this.scheduleOnce(function () {
                        (t.pickOne.active = !0),
                            (t.pickOne.y = 75.5),
                            (t.pickTwo.active = !0),
                            (t.pickOne.chatdata = t.z_r_g),
                            (t.pickoneVal.string = t.z_r_g.content),
                            (t.pickTwo.chatdata = t.s_q_w_d),
                            (t.picktwoVal.string = t.s_q_w_d.content);
                    }, 1);
            }),
            (e.prototype.InitFixChat = function () {
                (this.n_h.attribute = 15),
                    (this.n_h.content = "您好，智能客服小衙衙为您服务"),
                    (this.q_w_q.attribute = 15),
                    (this.q_w_q.content = "请问亲遇到什么问题了吗？"),
                    (this.w_b_d.attribute = 15),
                    (this.w_b_d.content = "不好意思，我不理解这个问题"),
                    (this.z_r_g.content = "转人工"),
                    (this.s_q_w_d.content = "我要申请通关文牒");
            }),
            (e.prototype.OnOhter = function (t) {
                var e = this,
                    o = this.librarydata.value[t - 1];
                0 != o.attribute && this.AddOther(o);
                var n = this.GetNext(o.id);
                if (2 == n.length) {
                    this.scheduleOnce(function () {
                        (e.pickOne.active = !0), (e.pickOne.y = 75.5), (e.pickTwo.active = !0);
                    }, 0.5);
                    var i = this.librarydata.value[n[0] - 1];
                    (this.pickOne.chatdata = i), (this.pickoneVal.string = i.content);
                    var r = this.librarydata.value[n[1] - 1];
                    (this.pickTwo.chatdata = r), (this.picktwoVal.string = r.content);
                } else if (1 == n.length) {
                    var s = this.librarydata.value[n[0] - 1];
                    if (0 != s.attribute)
                        return void this.scheduleOnce(function () {
                            e.OnOhter(n[0]);
                        }, 1);
                    this.scheduleOnce(function () {
                        (e.pickOne.active = !0), 2 == s.type && e.OnPickOne();
                    }, 0.5),
                        (this.pickOne.y = -4.5),
                        (this.pickOne.chatdata = s),
                        (this.pickoneVal.string = s.content);
                } else
                    this.scheduleOnce(function () {
                        console.log("对话结果 ：", o.result), e.OnClose();
                    }, 2);
            }),
            (e.prototype.OnPickOne = function () {
                this.OnPick(this.pickOne.chatdata);
            }),
            (e.prototype.OnPickTwo = function () {
                this.OnPick(this.pickTwo.chatdata);
            }),
            (e.prototype.OnPick = function (t) {
                var e = this;
                if (t.id) {
                    var o = l.ConfigMgr.chatTask_config.get(t.task);
                    if (o && 3 == o.taskType) {
                        if (d.DataMgr.getMoney() < o.numb) return void s.default.openToast("金币不足");
                        d.DataMgr.subMoney(o.numb),
                            d.DataMgr.AddVoucher(o.buyid),
                            s.default.openToast("已获得通关文牒");
                    }
                    (this.pickOne.active = !1), (this.pickTwo.active = !1), this.AddSelf(t);
                    var n = this.GetNext(t.id);
                    n.length >= 1
                        ? 0 != this.librarydata.value[n[0] - 1].attribute
                            ? this.scheduleOnce(function () {
                                  e.OnOhter(n[0]);
                              }, 1)
                            : this.scheduleOnce(function () {
                                  e.OnOhter(t.id);
                              }, 0.2)
                        : n.length > 1
                        ? console.warn("配置    重复：", n)
                        : (console.log("无后续对话了"),
                          this.scheduleOnce(function () {
                              e.OnClose();
                          }, 2));
                } else if ((this.AddSelf(t), (this.pickOne.active = !1), (this.pickTwo.active = !1), t == this.z_r_g)) {
                    if (d.DataMgr.CheckIsGetVoucher()) {
                        if (
                            ((this.librarydata = l.ConfigMgr.chatLibrary_config.get(
                                3e3 + d.DataMgr.user_gamedata.unlock_max_level - 6
                            )),
                            !this.librarydata)
                        )
                            return void console.error(
                                "未获取到对话事件：",
                                3e3 + d.DataMgr.user_gamedata.unlock_max_level - 6
                            );
                        this.scheduleOnce(function () {
                            e.OnOhter(1);
                        }, 0.5);
                    } else {
                        if (
                            ((this.librarydata = l.ConfigMgr.chatLibrary_config.get(
                                2e3 + d.DataMgr.user_gamedata.unlock_max_level - 6
                            )),
                            !this.librarydata)
                        )
                            return void console.error(
                                "未获取到对话事件：",
                                2e3 + d.DataMgr.user_gamedata.unlock_max_level - 6
                            );
                        this.scheduleOnce(function () {
                            e.OnOhter(1);
                        }, 0.5);
                    }
                } else
                    t == this.s_q_w_d &&
                        this.scheduleOnce(function () {
                            e.AddOther(e.w_b_d),
                                e.scheduleOnce(function () {
                                    (e.pickOne.active = !0),
                                        (e.pickOne.y = 75.5),
                                        (e.pickTwo.active = !0),
                                        (e.pickOne.chatdata = e.z_r_g),
                                        (e.pickoneVal.string = e.z_r_g.content),
                                        (e.pickTwo.chatdata = e.s_q_w_d),
                                        (e.picktwoVal.string = e.s_q_w_d.content);
                                }, 0.5);
                        }, 0.5);
            }),
            (e.prototype.GetNext = function (t) {
                for (var e = [], o = 0; o < this.librarydata.value.length; o++)
                    this.librarydata.value[o].id2 == t && e.push(this.librarydata.value[o].id);
                return e;
            }),
            (e.prototype.AddOther = function (t) {
                l.ConfigMgr.chatTask_config.get(t.task),
                    c.default
                        .createPrefab_csryw(a.ResSubMgr.getPrefabBySubGame(a.EnumSubGameRes.OtherTalk), this.content)
                        .getComponent(u.default)
                        .initOtherTalk(t, this.is_group),
                    this.scr.scrollToBottom(0.2);
            }),
            (e.prototype.AddSelf = function (t) {
                l.ConfigMgr.chatTask_config.get(t.task),
                    c.default
                        .createPrefab_csryw(a.ResSubMgr.getPrefabBySubGame(a.EnumSubGameRes.SelfTalk), this.content)
                        .getComponent(h.default)
                        .initSelfTalk(t),
                    this.scr.scrollToBottom(0.2);
            }),
            (e.prototype.OnClose = function () {
                this.node.destroy();
            }),
            (e.prototype.OnSet = function () {
                s.default.openSettingDialog(handleFM_csryw(function () {}, this));
            }),
            r([_({displayName: "返回", type: cc.Node})], e.prototype, "btnBack", void 0),
            r([_(cc.Node)], e.prototype, "set_btn", void 0),
            r([_(cc.Node)], e.prototype, "GoldNode", void 0),
            r([_({displayName: "滚动视图", type: cc.ScrollView})], e.prototype, "ltScrollNode", void 0),
            r([_({displayName: "角色名字", type: cc.Label})], e.prototype, "heroName", void 0),
            r([_({displayName: "聊天content", type: cc.Node})], e.prototype, "content", void 0),
            r([_({displayName: "选择节点", type: cc.Node})], e.prototype, "pickNode", void 0),
            r([_({displayName: "选择节点1", type: cc.Node})], e.prototype, "pickOne", void 0),
            r([_({displayName: "选择节点2", type: cc.Node})], e.prototype, "pickTwo", void 0),
            r([_({displayName: "对话一文本", type: cc.Label})], e.prototype, "pickoneVal", void 0),
            r([_({displayName: "对话二文本", type: cc.Label})], e.prototype, "picktwoVal", void 0),
            r([_(cc.ScrollView)], e.prototype, "scr", void 0),
            r([p], e)
        );
    })(cc.Component);
o.default = y;
