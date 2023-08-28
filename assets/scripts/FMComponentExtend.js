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
        });
Object.defineProperty(o, "__esModule", {value: !0});
var r = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.__isInit_csryw = !1), (e.EventEnumView_csryw = {}), e;
    }
    return (
        i(e, t),
        (e.prototype.onLoad = function () {
            this.__onInit_csryw();
        }),
        (e.prototype.childNode = function (t, e) {
            var o = e || this.node,
                n = o.getChildByName(t);
            return n || console.error("没有找到节点 ", t, o.name), n;
        }),
        (e.prototype.child = function (t, e, o) {
            var n = t.getChildByName(e);
            if (n) return n.getComponent(o);
            console.error("没有找到节点 ", e, t.name);
        }),
        (e.prototype.onClick = function (t, e, o) {
            return t.on("click", e, o);
        }),
        (e.prototype.__onInit_csryw = function () {
            this.__isInit_csryw || ((this.__isInit_csryw = !0), this.initView_csryw());
        }),
        (e.prototype.onListenerEventView_csryw = function (t) {
            this._listenerCallView_csryw = t;
        }),
        (e.prototype.emitListenerEvent_csryw = function (t, e, o) {
            this._listenerCallView_csryw && callFM_csryw(this._listenerCallView_csryw, t, this, e, o);
        }),
        (e.prototype.isActiveView_csryw = function () {
            return !(!cc.isValid(this, !0) || !this.node.activeInHierarchy);
        }),
        (e.prototype.onDestroy = function () {}),
        e
    );
})(cc.Component);
o.default = r;
