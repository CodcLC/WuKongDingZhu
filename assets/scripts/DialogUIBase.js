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
var s = t("FMComponentExtend"),
    a = t("TweenScale"),
    c = cc._decorator,
    l = c.ccclass,
    d =
        (c.property,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.EventEnumView_csryw = {}), (e.showNode = null), (e.tweenScale = null), (e.listener = null), e;
            }
            return (
                i(e, t),
                (e.prototype.initView_csryw = function () {
                    (this.showNode = this.node.getChildByName("showNode")),
                        (this.tweenScale = this.showNode.getComponent(a.default));
                }),
                (e.prototype.openDialog = function (t) {
                    (this.listener = t), this.__onInit_csryw(), this.tweenScale.openAction();
                }),
                (e.prototype.closeDialog = function (t) {
                    var e = this;
                    this.tweenScale.closeAction(
                        handleFM_csryw(function () {
                            callFM_csryw(e.listener, !0, t), e.node.destroy();
                        }, this)
                    );
                }),
                r([l], e)
            );
        })(s.default));
o.default = d;
