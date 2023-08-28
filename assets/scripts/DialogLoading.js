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
var s = t("FMViewBase"),
    a = t("AppPlatform"),
    c = cc._decorator,
    l = c.ccclass,
    d = c.property,
    u = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.bgNode = null),
                (e.labelInfo = null),
                (e.typeNode1 = null),
                (e.typeNode2 = null),
                (e.butLoad1 = null),
                (e.butVisitor1 = null),
                (e.butLoad2 = null),
                (e.EventEnumView_csryw = {ClickVisitor: "ClickVisitor", ClickLoad: "ClickLoad"}),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.initView_csryw = function () {
                var t = this;
                this.butLoad1.on(
                    "click",
                    function () {
                        t.closeView(), t.emitListenerEvent_csryw(t.EventEnumView_csryw.ClickLoad);
                    },
                    this
                ),
                    this.butVisitor1.on(
                        "click",
                        function () {
                            t.closeView(), t.emitListenerEvent_csryw(t.EventEnumView_csryw.ClickVisitor);
                        },
                        this
                    ),
                    this.butLoad2.on(
                        "click",
                        function () {
                            t.closeView(), t.emitListenerEvent_csryw(t.EventEnumView_csryw.ClickLoad);
                        },
                        this
                    ),
                    a.default.is_Android_csryw() || a.default.is_Iphone_csryw()
                        ? ((this.typeNode1.active = !1), (this.typeNode2.active = !0))
                        : ((this.typeNode1.active = !0), (this.typeNode2.active = !1));
            }),
            (e.prototype.openView = function (t) {
                this._initView_csryw(),
                    (this.labelInfo.string = t),
                    cc.Tween.stopAllByTarget(this.bgNode),
                    (this.bgNode.opacity = 0),
                    (this.bgNode.scale = 0.75),
                    cc
                        .tween(this.bgNode)
                        .to(0.25, {opacity: 255, scale: 1}, {easing: "backOut"})
                        .call(function () {})
                        .start(),
                    (this.node.active = !0);
            }),
            (e.prototype.closeView = function () {
                this.node.active = !1;
            }),
            (e.prototype.addEvent_csryw = function () {}),
            (e.prototype.removeEvent_csryw = function () {}),
            r([d({tooltip: "背景图", type: cc.Node})], e.prototype, "bgNode", void 0),
            r([d({tooltip: "错误文本", type: cc.Label})], e.prototype, "labelInfo", void 0),
            r([d({tooltip: "第一种类型", type: cc.Node})], e.prototype, "typeNode1", void 0),
            r([d({tooltip: "第二种类型", type: cc.Node})], e.prototype, "typeNode2", void 0),
            r([d({tooltip: "类型1中重新登录", type: cc.Node})], e.prototype, "butLoad1", void 0),
            r([d({tooltip: "类型1中游客模式", type: cc.Node})], e.prototype, "butVisitor1", void 0),
            r([d({tooltip: "类型2中重新登录", type: cc.Node})], e.prototype, "butLoad2", void 0),
            r([l], e)
        );
    })(s.default);
o.default = u;
