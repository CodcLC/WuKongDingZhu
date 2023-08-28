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
    a = cc._decorator,
    c = a.ccclass,
    l =
        (a.property,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.EventEnumView_csryw = {}), (e.label = null), e;
            }
            return (
                i(e, t),
                (e.prototype.initView_csryw = function () {
                    this.label = this.child(this.node, "label", cc.Label);
                }),
                (e.prototype.openTip = function (t) {
                    this.__onInit_csryw(), (this.label.string = t);
                    var e = 0.25 * cc.winSize.height;
                    (this.node.opacity = 0), (this.node.x = 0), (this.node.y = e);
                    var o = this;
                    cc.tween(this.node)
                        .to(0.5, {y: e + 150, opacity: 255}, {easing: cc.easing.cubicOut})
                        .delay(2)
                        .to(0.5, {y: e + 250, opacity: 0}, {easing: cc.easing.cubicOut})
                        .call(function () {
                            o.node.destroy();
                        })
                        .start();
                }),
                r([c], e)
            );
        })(s.default));
o.default = l;
