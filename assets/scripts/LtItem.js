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
    a = t("CommonMethod"),
    c = t("ConfigMgr"),
    l = cc._decorator,
    d = l.ccclass,
    u = l.property,
    h = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.headIamge = null), (e.nickName = null), (e.dialogLabel = null), (e.red = null), e;
        }
        return (
            i(e, t),
            (e.prototype.Init = function (t, e, o) {
                (this.id = t),
                    (this.data = c.ConfigMgr.chatLibrary_config.get(t)),
                    (this.index = e),
                    (this.heroData = c.ConfigMgr.chathero_config.get(this.data.heroId)),
                    -1 == e
                        ? (this.chatData = this.data.value[o - 1])
                        : 0 == e
                        ? ((this.chatData = this.data.value[0]), (this.red.active = !0))
                        : ((this.chatData = this.data.value[e - 1]), (this.red.active = !0)),
                    (this.dialogLabel.string = this.chatData.content),
                    (this.nickName.string = this.heroData.name),
                    this.data.group_img
                        ? a.default.getSpriteFrameFromBundle(
                              "subResGame",
                              "Textures/headImg/" + this.data.group_img,
                              this.headIamge
                          )
                        : a.default.getSpriteFrameFromBundle(
                              "subResGame",
                              "Textures/headImg/" + this.heroData.tx_img,
                              this.headIamge
                          );
            }),
            (e.prototype.start = function () {}),
            (e.prototype.clickItem = function () {
                s.default.openLtPage(this.id);
            }),
            r([u({displayName: "头像", type: cc.Sprite})], e.prototype, "headIamge", void 0),
            r([u({displayName: "昵称", type: cc.Label})], e.prototype, "nickName", void 0),
            r([u({displayName: "对话", type: cc.Label})], e.prototype, "dialogLabel", void 0),
            r([u({displayName: "红点", type: cc.Node})], e.prototype, "red", void 0),
            r([d], e)
        );
    })(cc.Component);
o.default = h;
