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
            return (e.show_node = null), e;
        }
        return (
            i(e, t),
            (e.prototype.start = function () {
                this.node.y = 0;
            }),
            (e.prototype.onCollisionEnter = function (t) {
                "center" == t.node.name && cc.tween(this.show_node).to(0.1, {scale: 1.1}).start();
            }),
            (e.prototype.onCollisionExit = function (t) {
                "center" == t.node.name &&
                    (cc.Tween.stopAllByTarget(this.show_node), cc.tween(this.show_node).to(0.1, {scale: 0.8}).start());
            }),
            r([c(cc.Node)], e.prototype, "show_node", void 0),
            r([a], e)
        );
    })(cc.Component);
o.default = l;
