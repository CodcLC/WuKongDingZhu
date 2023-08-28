var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.TimerUtils = void 0);
var n = (function () {
    function t() {}
    return (
        (t.loopNum_csryw = function (t, e, o, n) {
            return this.schedule_csryw(t, e, o, n);
        }),
        (t.once_csryw = function (t, e) {
            return void 0 === e && (e = 0), this.scheduleOnce_csryw(t, e);
        }),
        (t.loop_csryw = function (t, e, o) {
            return (
                void 0 === e && (e = 0),
                void 0 === o && (o = 0),
                this.schedule_csryw(t, e || 0.02, cc.macro.REPEAT_FOREVER, o)
            );
        }),
        (t.removeTimer_csryw = function (t) {
            this.unschedule_csryw(t);
        }),
        (t.removeAllTimers_csryw = function () {
            cc.director.getScheduler().unscheduleAllForTarget(this);
        }),
        (t.scheduleOnce_csryw = function (t, e) {
            return this.schedule_csryw(t, 0, 0, e), t;
        }),
        (t.schedule_csryw = function (t, e, o, n) {
            return cc.director.getScheduler().schedule(t, this, e, o, n), t;
        }),
        (t.unschedule_csryw = function (t) {
            t && cc.director.getScheduler().unschedule(t, this);
        }),
        t
    );
})();
o.TimerUtils = n;
