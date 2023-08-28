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
var s = t("CommonMethod"),
    a = t("Utils"),
    c = t("ConfigMgr"),
    l = cc._decorator,
    d = l.ccclass,
    u = l.property,
    h = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.Spr = null), (e.imageSpr = null), e;
        }
        return (
            i(e, t),
            (e.prototype.initOtherEmo = function (t, e, o) {
                void 0 === o && (o = !1);
                var n = c.ConfigMgr.chathero_config.get(t.attribute),
                    i = "Textures/headImg/" + n.tx_img;
                if (
                    (s.default.getSpriteFrameFromBundle("subResGame", i, this.imageSpr),
                    a.default.SetImgRemote(this.Spr, "img/" + e.photo),
                    cc.tween(this.node).to(0.1, {scale: 1}).start(),
                    o)
                ) {
                    var r = this.node.getChildByName("headImg").getChildByName("name");
                    (r.getComponent(cc.Label).string = n.name), (r.active = !0);
                }
            }),
            r([u({displayName: "表情包", type: cc.Sprite})], e.prototype, "Spr", void 0),
            r([u({displayName: "照片", type: cc.Sprite})], e.prototype, "imageSpr", void 0),
            r([d], e)
        );
    })(cc.Component);
o.default = h;
