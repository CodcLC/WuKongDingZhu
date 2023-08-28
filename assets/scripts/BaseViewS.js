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
var s = t("Utils"),
    a = cc._decorator,
    c = a.ccclass,
    l = a.property,
    d = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.open_click_empt_close = !1), (e.open_show_tween = !0), (e.is_closed = !1), e;
        }
        return (
            i(e, t),
            (e.prototype.start = function () {
                var t = this;
                this.open_show_tween
                    ? s.default.PopInOrOut(1, this.node.getChildByName("ShowNode"), 0.5, function () {
                          t.OnOpen();
                      })
                    : this.OnOpen(),
                    this.open_click_empt_close &&
                        this.node.getChildByName("close").once(cc.Node.EventType.TOUCH_END, this.OnClose, this);
            }),
            (e.prototype.OnOpen = function () {}),
            (e.prototype.OnClose = function () {
                var t = this;
                this.is_closed ||
                    ((this.is_closed = !0),
                    s.default.PopInOrOut(2, this.node.getChildByName("ShowNode"), 0.5, function () {
                        t.node.destroy();
                    }));
            }),
            r([l({displayName: "点击空白处关闭"})], e.prototype, "open_click_empt_close", void 0),
            r([l({displayName: "页面打开时弹出来"})], e.prototype, "open_show_tween", void 0),
            r([c], e)
        );
    })(cc.Component);
o.default = d;
