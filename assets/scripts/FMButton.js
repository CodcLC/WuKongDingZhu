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
Object.defineProperty(o, "__esModule", {value: !0}), (o.FMButton = void 0);
var s = t("SoundMgr"),
    a = cc._decorator,
    c = a.ccclass,
    l = (a.property, a.menu),
    d = a.disallowMultiple,
    u = (a.executionOrder, a.requireComponent),
    h = (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
            i(e, t),
            (e.prototype.onLoad = function () {
                var t = this.node.getComponent(cc.Button);
                t.transition == cc.Button.Transition.NONE &&
                    ((t.transition = cc.Button.Transition.SCALE), (t.duration = 0.1), (t.zoomScale = 0.9)),
                    this.node.on(
                        "click",
                        function () {
                            s.default.playSound_csryw("anniu");
                        },
                        this
                    );
            }),
            r([c, u(cc.Button), d(), l("FM组件/FMButton")], e)
        );
    })(cc.Component);
o.FMButton = h;
