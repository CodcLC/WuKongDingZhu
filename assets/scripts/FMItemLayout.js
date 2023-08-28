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
    a = cc._decorator,
    c = a.ccclass,
    l = a.property,
    d = (a.requireComponent, a.disallowMultiple),
    u =
        (a.menu,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.itemChilds = []), (e.ad_tag_csryw = null), (e.itemIndex_csryw = 0), e;
            }
            return (
                i(e, t),
                (e.prototype.setAdTag_csryw = function (t) {
                    this.ad_tag_csryw = t;
                }),
                (e.prototype.addEvent_csryw = function () {}),
                (e.prototype.removeEvent_csryw = function () {}),
                (e.prototype.initView_csryw = function () {}),
                (e.prototype.setFMListenerUpdate_csryw = function (t) {
                    this._fmListenerData_csryw = t;
                }),
                (e.prototype.setItemIndex_csryw = function (t) {
                    if (((this.itemIndex_csryw = t), this._fmListenerData_csryw))
                        for (var e = this.itemChilds.length, o = 0; o < e; o++) {
                            var n = this.itemIndex_csryw * e + o,
                                i = callFM_csryw(this._fmListenerData_csryw, n);
                            this.updateDataItemByIndex_csryw(i, o);
                        }
                }),
                (e.prototype.updateDataItemByIndex_csryw = function (t) {
                    LogUtils.log_csryw("FMItemLayout -> updateDataItemByIndex -> data", t);
                }),
                (e.prototype.getItemIndex_csryw = function () {
                    return this.itemIndex_csryw;
                }),
                (e.prototype.getPointX_csryw = function () {
                    return this.node.x;
                }),
                (e.prototype.getPointY_csryw = function () {
                    return this.node.y;
                }),
                (e.prototype.setPointX_csryw = function (t) {
                    this.node.x = t;
                }),
                (e.prototype.setPointY_csryw = function (t) {
                    this.node.y = t;
                }),
                (e.prototype.getItemChildrenCount_csryw = function () {
                    return this.itemChilds.length;
                }),
                r([l({tooltip: "子节点集合", type: [cc.Node]})], e.prototype, "itemChilds", void 0),
                r([c, d()], e)
            );
        })(s.default));
o.default = u;
