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
var s = t("FMComponentExtend"),
    a = t("EventEnum"),
    c = t("EventMgr"),
    l = t("PhysicalPowerMgr"),
    d = cc._decorator,
    u = d.ccclass,
    h =
        (d.property,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                    (e.EventEnumView_csryw = {}),
                    (e.labelPower = null),
                    (e.labelPowerTime = null),
                    (e.labelPowerAll = null),
                    e
                );
            }
            return (
                i(e, t),
                (e.prototype.initView_csryw = function () {
                    var t = this,
                        e = this.node.getChildByName("bgNode");
                    this.onClick(
                        e,
                        function () {
                            l.default.getPhyVideoAllTime() <= 0 && l.default.getPhysicalNum() < l.default.MaxPhysical
                                ? l.default.openAddPowerDialog(
                                      handleFM_csryw(function () {}, t),
                                      !0
                                  )
                                : l.default.openAddPowerDialog(
                                      handleFM_csryw(function () {}, t),
                                      !1
                                  );
                        },
                        this
                    ),
                        (this.labelPower = this.child(e, "labelPower", cc.Label)),
                        (this.labelPowerTime = this.child(e, "labelPowerTime", cc.Label)),
                        (this.labelPowerAll = this.child(e, "labelPowerAll", cc.Label)),
                        (this.labelPower.node.active = !0),
                        (this.labelPowerTime.node.active = !0),
                        (this.labelPowerAll.node.active = !0),
                        c.default.onEvent_csryw(
                            a.ryw_Event.updatePhysicalPower,
                            function () {
                                t.updatePhysicalPower();
                            },
                            this
                        ),
                        this.updatePhysicalPower();
                }),
                (e.prototype.updatePhysicalPower = function () {
                    if (l.default.getPhyVideoAllTime() > 0) {
                        (this.labelPowerTime.string = ""), (this.labelPower.string = "");
                        var t = (e = l.default.getPhyVideoAllTime()) - (o = new Date().getTime());
                        this.labelPowerAll.string = l.default.formatTime(t / 1e3);
                    } else if (
                        ((this.labelPowerAll.string = ""),
                        (this.labelPower.string = l.default.getPhysicalNum() + "/" + l.default.MaxPhysical),
                        l.default.getPhysicalNum() < l.default.MaxPhysical)
                    ) {
                        var e = l.default.getPhyVideoTime(),
                            o = new Date().getTime();
                        (t = 1e3 * l.default.RecoverPhysicalTime - (o - e)),
                            (this.labelPowerTime.string = t > 0 ? l.default.formatTime3(t / 1e3) : "");
                    } else this.labelPowerTime.string = "";
                }),
                r([u], e)
            );
        })(s.default));
o.default = h;
