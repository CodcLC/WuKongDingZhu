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
var s = t("FlayGold"),
    a = t("ResMgr"),
    c = t("ChatDataMgr"),
    l = t("ConfigMgr"),
    d = t("GuideMgr"),
    u = t("HomeS"),
    h = t("DialogMgr"),
    f = t("SoundMgr"),
    p = cc._decorator,
    _ = p.ccclass,
    y = p.property,
    g = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.flygod = null), (e.money_pos = null), (e.loading = !1), e;
        }
        var o;
        return (
            i(e, t),
            (o = e),
            (e.prototype.onLoad = function () {
                var t = this,
                    e = window.location.href;
                (-1 == e.indexOf("_dr") && -1 == e.indexOf("localhost")) || (l.ConfigMgr.is_dr = !0),
                    f.default.playMusic_csryw("zhuye"),
                    (o.ins = this),
                    this.node.getChildByName("butSet").on(
                        "click",
                        function () {
                            h.default.openSettingDialog(handleFM_csryw(function () {}, t));
                        },
                        this
                    ),
                    this.node.getChildByName("butStart").on(
                        "click",
                        function () {
                            t.OnStart();
                        },
                        this
                    ),
                    this.node.getChildByName("butToast").on(
                        "click",
                        function () {
                            h.default.openToast("这是提示语");
                        },
                        this
                    );
            }),
            (e.prototype.OnStart = function (t, e, o) {
                var n = this;
                if ((void 0 === t && (t = !1), void 0 === e && (e = !1), !this.loading)) {
                    this.loading = !0;
                    var i = c.ChatDataMgr.UnlockChat(1001);
                    if (!i && !t) {
                        var r = c.ChatDataMgr.GetHappeningById(1002);
                        r || (c.ChatDataMgr.UnlockChat(1002, !0), (r = c.ChatDataMgr.GetHappeningById(1002))),
                            -1 != r.index && c.ChatDataMgr.SetChatOver(r);
                    }
                    i
                        ? ((this.loading = !1), d.GuideMgr.getInstance(), h.default.openLtPage(1001))
                        : a.default.loadBundlePrefab(
                              "subResGame",
                              "ViewPrefab/HomeP",
                              function (t) {
                                  n.loading = !1;
                                  var i = cc.instantiate(t);
                                  n.node.addChild(i), e && i.getComponent(u.default).OnChange(null, o);
                              },
                              this
                          );
                }
            }),
            (e.prototype.onDestroy = function () {
                o.ins = null;
            }),
            (e.prototype.OnResetGame = function () {
                if (l.ConfigMgr.IsBrowser() && l.ConfigMgr.is_dr) {
                    cc.sys.localStorage.removeItem("select_indexs"),
                        cc.sys.localStorage.removeItem("hero_video"),
                        cc.sys.localStorage.removeItem("hero_lv"),
                        cc.sys.localStorage.removeItem("have_indexs"),
                        cc.sys.localStorage.removeItem("money"),
                        cc.sys.localStorage.removeItem("MyUserGameData"),
                        cc.sys.localStorage.removeItem("swk_five_count"),
                        cc.sys.localStorage.removeItem("all_look_video_taskids"),
                        cc.sys.localStorage.removeItem("try_unlock_ids"),
                        cc.sys.localStorage.removeItem("need_unlock_ids");
                    for (var t = 0; t < c.ChatDataMgr.all_chat_ids.length; t++)
                        cc.sys.localStorage.removeItem("happening_datas_" + c.ChatDataMgr.all_chat_ids[t]);
                    cc.sys.localStorage.removeItem("all_chat_ids"), window.location.reload();
                }
            }),
            (e.ins = null),
            r([y(s.default)], e.prototype, "flygod", void 0),
            r([y(cc.Node)], e.prototype, "money_pos", void 0),
            (o = r([_], e))
        );
    })(cc.Component);
o.default = g;
