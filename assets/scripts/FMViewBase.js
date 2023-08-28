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
var r = t("FMInterface"),
    s = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e._isInit_csryw = 0), (e.EventEnumView_csryw = {}), e;
        }
        return (
            i(e, t),
            (e.prototype.onLoad = function () {
                this._initView_csryw();
            }),
            (e.prototype._initView_csryw = function () {
                if (0 == this._isInit_csryw)
                    return (
                        (this._isInit_csryw = 1),
                        this.initView_csryw(),
                        this.addEvent_csryw(),
                        (this._isInit_csryw = 2),
                        !0
                    );
            }),
            (e.prototype.onListenerEventView_csryw = function (t) {
                this._listenerCallView_csryw = t;
            }),
            (e.prototype.emitListenerEvent_csryw = function (t) {
                console.log("发送 " + t),
                    this._listenerCallView_csryw && r.callFM_csryw(this._listenerCallView_csryw, t, this);
            }),
            (e.prototype.removeView_csryw = function () {
                this.onDestroy(), this.node.destroy();
            }),
            (e.prototype.hideView_csryw = function () {
                this.node.active = !1;
            }),
            (e.prototype.showView_csryw = function () {
                this.node.active = !0;
            }),
            (e.prototype.isActiveView_csryw = function () {
                return !(!cc.isValid(this, !0) || !this.node.activeInHierarchy);
            }),
            (e.prototype.showBanner_csryw = function () {}),
            (e.prototype.hideBanner_csryw = function () {}),
            (e.prototype.onEnable = function () {}),
            (e.prototype.onDisable = function () {
                this.hideBanner_csryw();
            }),
            (e.prototype.onDestroy = function () {
                this.removeEvent_csryw(), this.hideBanner_csryw();
            }),
            e
        );
    })(cc.Component);
o.default = s;
