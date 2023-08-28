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
    l = t("ResMgr"),
    d = t("ChatDataMgr"),
    u = t("DataMgr"),
    h = cc._decorator,
    f = h.ccclass,
    p = h.property,
    _ = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.chat_red = null), (e.gy_red = null), (e.shop_red = null), (e.loading = !1), e;
        }
        return (
            i(e, t),
            (e.prototype.onLoad = function () {
                a.default.onEvent_csryw(s.ryw_Event.HappeningsChange, this.RefreshRed, this), this.RefreshRed();
            }),
            (e.prototype.OnChat = function () {
                var t = this;
                this.loading ||
                    ((this.loading = !0),
                    l.default.loadBundlePrefab(
                        "subResGame",
                        "ViewPrefab/ChatPage",
                        function (e) {
                            t.loading = !1;
                            var o = cc.instantiate(e);
                            t.node.addChild(o);
                        },
                        this
                    ));
            }),
            (e.prototype.OnGy = function () {
                var t = this;
                u.DataMgr.user_gamedata.unlock_max_level < 7 ||
                (u.DataMgr.user_gamedata.unlock_max_level > 10 && u.DataMgr.user_gamedata.unlock_max_level < 12)
                    ? c.default.openToast("未到上班时间")
                    : this.loading ||
                      ((this.loading = !0),
                      l.default.loadBundlePrefab(
                          "subResGame",
                          "ViewPrefab/GyPage",
                          function (e) {
                              t.loading = !1;
                              var o = cc.instantiate(e);
                              t.node.addChild(o);
                          },
                          this
                      ));
            }),
            (e.prototype.OnShop = function () {
                c.default.openToast("暂未开发");
            }),
            (e.prototype.RefreshRed = function () {
                this.chat_red.active = d.ChatDataMgr.GetHaveRed();
            }),
            (e.prototype.OnBack = function () {
                this.node.destroy();
            }),
            (e.prototype.OnSet = function () {
                c.default.openSettingDialog(handleFM_csryw(function () {}, this));
            }),
            r([p(cc.Node)], e.prototype, "chat_red", void 0),
            r([p(cc.Node)], e.prototype, "gy_red", void 0),
            r([p(cc.Node)], e.prototype, "shop_red", void 0),
            r([f], e)
        );
    })(cc.Component);
o.default = _;
