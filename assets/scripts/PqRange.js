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
var s = t("EventEnum"),
    a = t("EventMgr"),
    c = t("EnemyBase"),
    l = cc._decorator,
    d = l.ccclass,
    u =
        (l.property,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.enemys = []), e;
            }
            return (
                i(e, t),
                (e.prototype.onLoad = function () {
                    a.default.onEvent_csryw(s.ryw_Event.Enmeydie, this.RemoveEnmey, this);
                }),
                (e.prototype.HaveEnemy = function () {
                    return this.enemys.length > 0;
                }),
                (e.prototype.AddEnmey = function (t) {
                    -1 == this.enemys.indexOf(t) && this.enemys.push(t);
                }),
                (e.prototype.RemoveEnmey = function (t) {
                    var e = this.enemys.indexOf(t);
                    -1 != e && this.enemys.splice(e, 1);
                }),
                (e.prototype.onCollisionEnter = function (t) {
                    -1 != t.node.name.indexOf("e_") && this.AddEnmey(t.node.getComponent(c.default));
                }),
                (e.prototype.onCollisionExit = function (t) {
                    -1 != t.node.name.indexOf("e_") && this.RemoveEnmey(t.node.getComponent(c.default));
                }),
                r([d], e)
            );
        })(cc.Component));
o.default = u;
