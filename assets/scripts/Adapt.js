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
            return (e.isByChange = !0), e;
        }
        return (
            i(e, t),
            (e.prototype.onLoad = function () {
                var t = this;
                this.isByChange &&
                    cc.view.setResizeCallback(function () {
                        return t.resize();
                    }),
                    this.resize();
            }),
            (e.prototype.resize = function () {
                var t = cc.find("Canvas").getComponent(cc.Canvas);
                this.curDR || (this.curDR = t.designResolution);
                var e = this.curDR,
                    o = cc.view.getFrameSize(),
                    n = o.width,
                    i = o.height,
                    r = n,
                    s = i;
                n / i > e.width / e.height ? (r = ((s = e.height) * n) / i) : (s = (i / n) * (r = e.width)),
                    (t.designResolution = cc.size(r, s)),
                    (t.node.width = r),
                    (t.node.height = s),
                    t.node.emit("resize");
            }),
            r([c()], e.prototype, "isByChange", void 0),
            r([a], e)
        );
    })(cc.Component);
o.default = l;
