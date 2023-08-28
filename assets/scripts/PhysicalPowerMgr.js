var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("EventEnum"),
    i = t("EventMgr"),
    r = t("DialogMgr"),
    s = t("GameMgr"),
    a = (function () {
        function t() {}
        return (
            (t.initData = function (t) {
                var e = this;
                (this.physicalNum = this.verify(t.physicalNum, 0)),
                    (this.physicalTime = this.verify(t.physicalTime, 0)),
                    (this.physicalAllNum = this.verify(t.physicalAllNum, 0)),
                    (this.physicalAllTime = this.verify(t.physicalAllTime, 0)),
                    this.interval && (clearInterval(this.interval), (this.interval = null)),
                    (this.interval = setInterval(function () {
                        e.updatePhysicalTime();
                    }, 1e3)),
                    this.updatePhysicalTime();
            }),
            (t.getData = function () {
                return {
                    physicalNum: this.physicalNum,
                    physicalTime: this.physicalTime,
                    physicalAllNum: this.physicalAllNum,
                    physicalAllTime: this.physicalAllTime
                };
            }),
            (t.isCanUserPhysical = function (t) {
                void 0 === t && (t = 1);
                var e = !1;
                return (
                    this.getPhyVideoAllTime() > 0
                        ? (this.updatePhysicalTime(), (e = !0))
                        : this.getPhysicalNum() - t < 0
                        ? (e = !1)
                        : (this.getPhyVideoTime() <= 0 && this.setPhyVideoTime(this.getNowTime()),
                          this.setPhysicalNum(this.getPhysicalNum() - t),
                          s.default.getInstance_csryw().saveGameData_csryw(),
                          this.updatePhysicalTime(),
                          (e = !0)),
                    e
                );
            }),
            (t.openAddPowerDialog = function (t, e) {
                var o = this;
                void 0 === e && (e = !0),
                    r.default.openAddPowerAllDialog(
                        handleFM_csryw(function (n, i) {
                            n &&
                                (i
                                    ? callFM_csryw(t, !0)
                                    : e
                                    ? r.default.openAddPowerDialog(
                                          handleFM_csryw(function (e, o) {
                                              e && o ? callFM_csryw(t, !0) : callFM_csryw(t, !1);
                                          }, o)
                                      )
                                    : callFM_csryw(t, !1));
                        }, this)
                    );
            }),
            (t.getPhysicalNum = function () {
                return this.physicalNum;
            }),
            (t.setPhysicalNum = function (t) {
                (this.physicalNum = t), this.updatePhysicalTime();
            }),
            (t.getPhyVideoAllNum = function () {
                return this.physicalAllNum;
            }),
            (t.setPhyVideoAllNum = function (t) {
                this.physicalAllNum = t;
            }),
            (t.getPhyVideoAllTime = function () {
                return this.physicalAllTime;
            }),
            (t.setPhyVideoAllTime = function (t) {
                this.physicalAllTime = t;
            }),
            (t.getPhyVideoTime = function () {
                return this.physicalTime;
            }),
            (t.setPhyVideoTime = function (t) {
                this.physicalTime = t;
            }),
            (t.updatePhysicalTime = function () {
                var t = !1;
                if (this.getPhyVideoAllTime() > 0)
                    (e = this.getPhyVideoAllTime()) - (o = new Date().getTime()) <= 0 &&
                        (this.setPhyVideoAllTime(0),
                        this.setPhysicalNum(this.MaxPhysical),
                        this.setPhyVideoTime(0),
                        s.default.getInstance_csryw().saveGameData_csryw(),
                        (t = !0));
                else if (this.getPhysicalNum() < this.MaxPhysical) {
                    var e = this.getPhyVideoTime(),
                        o = new Date().getTime(),
                        r = 1e3 * this.RecoverPhysicalTime;
                    if (o - e >= r) {
                        (e += r), this.setPhyVideoTime(e);
                        var a = this.getPhysicalNum() + 1;
                        a >= this.MaxPhysical && ((a = this.MaxPhysical), this.setPhyVideoTime(0)),
                            this.setPhysicalNum(a),
                            s.default.getInstance_csryw().saveGameData_csryw(),
                            (t = !0);
                    }
                } else this.setPhyVideoTime(0);
                i.default.emitEvent_csryw(n.ryw_Event.updatePhysicalPower), t && this.updatePhysicalTime();
            }),
            (t.addNewPhysicalAll = function () {
                var t = this.getNowTime() + 864e5;
                this.getPhyVideoAllTime() > 0 && (t = this.getPhyVideoAllTime() + 864e5),
                    this.setPhyVideoAllTime(t),
                    s.default.getInstance_csryw().saveGameData_csryw(),
                    this.updatePhysicalTime();
            }),
            (t.getNowTime = function () {
                return new Date().getTime();
            }),
            (t.verify = function (t, e) {
                return void 0 !== t ? t : e;
            }),
            (t.formatTime3 = function (t) {
                var e = "",
                    o = t / 60,
                    n = t - 60 * (o = parseInt(o + ""));
                return (e += o > 9 ? o + ":" : "0" + o + ":") + ((n = parseInt(n + "")) > 9 ? n : "0" + n);
            }),
            (t.formatTime = function (t) {
                var e = "",
                    o = t / 3600,
                    n = (t - 3600 * (o = parseInt(o + ""))) / 60,
                    i = t - 3600 * o - 60 * (n = parseInt(n + ""));
                return (
                    o > 0 && (e += o + ":"),
                    (e += n > 9 ? n + ":" : "0" + n + ":") + ((i = parseInt(i + "")) > 9 ? i + "" : "0" + i)
                );
            }),
            (t.RecoverPhysicalTime = 300),
            (t.MaxPhysical = 3),
            (t.physicalNum = 0),
            (t.physicalTime = 0),
            (t.physicalAllNum = 0),
            (t.physicalAllTime = 0),
            (t.interval = null),
            t
        );
    })();
o.default = a;
