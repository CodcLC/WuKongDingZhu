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
    c = t("ChatDataMgr"),
    l = t("LtItem"),
    d = cc._decorator,
    u = d.ccclass,
    h = d.property,
    f = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.scr = null), (e.content = null), (e.heroids = []), e;
        }
        var o;
        return (
            i(e, t),
            (o = e),
            (e.prototype.onLoad = function () {
                (this.content.height = this.scr.node.height + 1), this.Refresh(), (o.ins = this);
            }),
            (e.prototype.CheckHaveHero = function (t) {
                return -1 != this.heroids.indexOf(t);
            }),
            (e.prototype.Refresh = function () {
                this.content.removeAllChildren(), this.scr.scrollToTop(), (this.heroids = []);
                for (var t = c.ChatDataMgr.GetHappenings(), e = t.length - 1; e >= 0; e--)
                    this.CheckHaveHero(c.ChatDataMgr.GetChatHeroid(t[e].id)) ||
                        (this.AddItem(t[e].id, t[e].index, t[e].oldindexs[t[e].oldindexs.length - 1]),
                        this.heroids.push(c.ChatDataMgr.GetChatHeroid(t[e].id)));
                this.content.childrenCount > 8 &&
                    (this.scr.content.getComponent(cc.Layout).resizeMode = cc.Layout.ResizeMode.CONTAINER);
            }),
            (e.prototype.AddItem = function (t, e, o) {
                var n = cc.instantiate(a.ResSubMgr.getPrefabBySubGame(a.EnumSubGameRes.LtItem));
                this.content.addChild(n), n.getComponent(l.default).Init(t, e, o);
            }),
            (e.prototype.OnClose = function () {
                (o.ins = null), this.node.destroy();
            }),
            (e.prototype.onDestroy = function () {
                o.ins = null;
            }),
            (e.prototype.OnSet = function () {
                s.default.openSettingDialog(handleFM_csryw(function () {}, this));
            }),
            r([h(cc.ScrollView)], e.prototype, "scr", void 0),
            r([h(cc.Node)], e.prototype, "content", void 0),
            (o = r([u], e))
        );
    })(cc.Component);
o.default = f;
