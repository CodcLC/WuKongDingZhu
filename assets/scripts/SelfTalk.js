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
    a = t("ChatDataMgr"),
    c = cc._decorator,
    l = c.ccclass,
    d = c.property,
    u = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.imageSpr = null), (e.contentLabel = null), e;
        }
        return (
            i(e, t),
            (e.prototype.initSelfTalk = function (t) {
                var e = "Textures/headImg/" + a.ChatDataMgr.getHeadIamge();
                s.default.getSpriteFrameFromBundle("subResGame", e, this.imageSpr);
                var o = s.default.addLinmFeed(t.content);
                (this.contentLabel.string = o), cc.tween(this.node).to(0.1, {scale: 1}).start();
            }),
            r([d({displayName: "照片", type: cc.Sprite})], e.prototype, "imageSpr", void 0),
            r([d({displayName: "文字", type: cc.Label})], e.prototype, "contentLabel", void 0),
            r([l], e)
        );
    })(cc.Component);
o.default = u;
