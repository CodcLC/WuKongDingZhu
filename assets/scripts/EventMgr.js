var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = (function () {
    function t() {}
    return (
        (t.emitEvent_csryw = function (t, e, o, n, i, r) {
            this.eventTarget_csryw.emit(t + "", e, o, n, i, r);
        }),
        (t.onEvent_csryw = function (t, e, o) {
            this.eventTarget_csryw.on(t + "", e, o);
        }),
        (t.onceEvent_csryw = function (t, e, o) {
            this.eventTarget_csryw.once(t + "", e, o);
        }),
        (t.offEvent_csryw = function (t, e, o) {
            this.eventTarget_csryw.off(t + "", e, o);
        }),
        (t.offTargetEvent_csryw = function (t) {
            this.eventTarget_csryw.targetOff(t);
        }),
        (t.eventTarget_csryw = new cc.EventTarget()),
        t
    );
})();
o.default = n;
