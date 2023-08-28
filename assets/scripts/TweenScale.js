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
var s = cc._decorator,
    a = s.ccclass,
    c = s.property,
    l = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.scaleStartNum = 0.65), (e.scaleEndNum = 1), (e.scaleTime = 0.3), (e.listener = null), e;
        }
        return (
            i(e, t),
            (e.prototype.openAction = function (t) {
                var e = this;
                (this.listener = t),
                    cc.Tween.stopAllByTarget(this),
                    (this.node.scale = this.scaleStartNum),
                    cc
                        .tween(this.node)
                        .to(this.scaleTime, {scale: this.scaleEndNum}, {easing: cc.easing.backOut})
                        .call(function () {
                            e.listener && callFM_csryw(t);
                        })
                        .start();
            }),
            (e.prototype.closeAction = function (t) {
                var e = this;
                (this.listener = t),
                    cc.Tween.stopAllByTarget(this),
                    cc
                        .tween(this.node)
                        .to(this.scaleTime, {scale: this.scaleStartNum}, {easing: cc.easing.backIn})
                        .call(function () {
                            e.listener && callFM_csryw(t);
                        })
                        .start();
            }),
            r([c({tooltip: "初始缩放比例", type: cc.Float})], e.prototype, "scaleStartNum", void 0),
            r([c({tooltip: "结束缩放比例", type: cc.Float})], e.prototype, "scaleEndNum", void 0),
            r([c({tooltip: "缩放时间", type: cc.Float})], e.prototype, "scaleTime", void 0),
            r([a], e)
        );
    })(cc.Component);
o.default = l;
