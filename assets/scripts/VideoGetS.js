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
var s = t("TTAPI"),
    a = t("ResMgr"),
    c = t("BaseViewS"),
    l = cc._decorator,
    d = l.ccclass,
    u = l.property,
    h = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.img = null), e;
        }
        return (
            i(e, t),
            (e.prototype.SetSucessFun = function (t, e, o, n, i) {
                var r = this;
                (this.video_title = t),
                    a.default.loadBundleSpriteFrame(
                        "subResGame",
                        "Textures/VideoGet/" + n,
                        function (t) {
                            r.img.spriteFrame = t;
                        },
                        this
                    ),
                    (this.sucess_fun = e),
                    (this.caller = o),
                    (this.cancel = i);
            }),
            (e.prototype.OnVideo = function () {
                var t = this;
                s.default.showRewardedVideoAd_csryw(
                    this.video_title,
                    function (e) {
                        e && t.OnSucess();
                    },
                    function () {}
                );
            }),
            (e.prototype.OnSucess = function () {
                this.sucess_fun && this.sucess_fun.call(this.caller), this.OnClose();
            }),
            (e.prototype.OnCancel = function () {
                this.cancel && this.cancel.call(this.caller), this.OnClose();
            }),
            r([u(cc.Sprite)], e.prototype, "img", void 0),
            r([d], e)
        );
    })(c.default);
o.default = h;
