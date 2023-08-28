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
    a = t("PhysicalPowerMgr"),
    c = t("DialogUIBase"),
    l = cc._decorator,
    d = l.ccclass,
    u =
        (l.property,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.label = null), e;
            }
            return (
                i(e, t),
                (e.prototype.initView_csryw = function () {
                    var e = this;
                    t.prototype.initView_csryw.call(this),
                        this.onClick(
                            this.childNode("butLeft", this.showNode),
                            function () {
                                e.closeDialog();
                            },
                            this
                        );
                    var o = this.childNode("butRight", this.showNode);
                    (this.label = this.child(o, "label", cc.Label)),
                        this.onClick(
                            o,
                            function () {
                                s.default.showRewardedVideoAd_csryw(
                                    "无线体力",
                                    function (t) {
                                        if (t) {
                                            var o = a.default.getPhyVideoAllNum();
                                            (o += 1) >= 3
                                                ? ((o = 0),
                                                  a.default.setPhyVideoAllNum(o),
                                                  a.default.addNewPhysicalAll(),
                                                  e.closeDialog(!0))
                                                : (a.default.setPhyVideoAllNum(o), e.updateVideoNum());
                                        }
                                    },
                                    function () {}
                                );
                            },
                            this
                        ),
                        this.updateVideoNum();
                }),
                (e.prototype.updateVideoNum = function () {
                    this.label.string = a.default.getPhyVideoAllNum() + "/3";
                }),
                r([d], e)
            );
        })(c.default));
o.default = u;
