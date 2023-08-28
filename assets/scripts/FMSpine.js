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
var s = t("FMSkeletonExtend"),
    a = t("FMComponentExtend"),
    c = t("SoundMgr"),
    l = cc._decorator,
    d = l.ccclass,
    u = (l.property, l.menu),
    h = l.disallowMultiple,
    f = (l.executionOrder, l.requireComponent),
    p =
        (l.executeInEditMode,
        l.playOnFocus,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.arrayEvent = []), (e.arraySlotEvent = {}), (e.EventEnumView_csryw = {}), e;
            }
            return (
                i(e, t),
                (e.prototype.initView_csryw = function () {
                    var t = this;
                    this.getSpine().setEventListener(function (e, o) {
                        var n = e.animation,
                            i = e.animation.name,
                            r = o.data && o.data.name,
                            s = o.stringValue;
                        o.intValue,
                            o.floatValue,
                            "sound" == r && c.default.playSpineSound_csryw(s, i),
                            t.arrayEvent.forEach(function (t) {
                                var e = t.name,
                                    o = t.listener;
                                e == r && callFM_csryw(o, n, i, r);
                            });
                    });
                }),
                (e.prototype.addSlotByNodeEvent = function (t, e, o) {
                    this.arraySlotEvent[t] = {slot: this.getSpine().findSlot(t), arrayAction: e, childNode: o};
                }),
                (e.prototype.addEvent = function (t, e) {
                    this.arrayEvent.push({name: t, listener: e});
                }),
                (e.prototype.removeEventAll = function () {
                    this.arrayEvent = [];
                }),
                (e.prototype.animation = function () {
                    return this.getSpine().animation;
                }),
                (e.prototype.setTimeScale = function (t) {
                    this.getSpine().timeScale = t;
                }),
                (e.prototype.getSpine = function () {
                    return null == this.spine && (this.spine = this.node.getComponent(s.default)), this.spine;
                }),
                (e.prototype.update = function () {}),
                (e.prototype.setAnimation = function (t, e, o) {
                    void 0 === e && (e = !1), void 0 === o && (o = 0), this.getSpine().setAnimation(o, t, e);
                }),
                (e.prototype.setMix = function (t, e, o) {
                    this.getSpine().setMix(t, e, o);
                }),
                (e.prototype.setSkin = function (t) {
                    this.getSpine().setSkin(t);
                }),
                r([d, f(s.default), h(), u("FM组件/FMSpine")], e)
            );
        })(a.default));
o.default = p;
