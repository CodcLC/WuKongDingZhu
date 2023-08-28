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
var s = t("FMTouchMaskView"),
    a = t("FMInterface"),
    c = t("Utilit"),
    l = t("FMItemLayout"),
    d = cc._decorator,
    u = d.ccclass,
    h = d.property,
    f = (d.requireComponent, d.disallowMultiple),
    p =
        (d.menu,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                    (e._isAutoMoveType = !0),
                    (e.arrayAliveListLayout_csryw = []),
                    (e.arrayFreeListLayout_csryw = []),
                    (e.viewLayoutNum_csryw = 0),
                    (e.viewLayoutGapNum_csryw = 3),
                    (e.viewLayoutSum_csryw = 0),
                    (e.startIndexItem_csryw = 0),
                    (e.isCanUpdateItems_csryw = !1),
                    (e.isTouchStop_csryw = !1),
                    (e._isCanScrollViewLoopUpdate_csryw = !0),
                    (e.isAutoMoveWayLeftUp_csryw = !0),
                    (e.autoMoveWaitTime_csryw = 60),
                    (e.autoMoveWaitNum_csryw = 1),
                    (e.autoMoveSpeed_csryw = 3),
                    (e._nextMoveLength_csryw = 0),
                    (e._waitTimeNum_csryw = 0),
                    (e._moveState_csryw = 0),
                    e
                );
            }
            return (
                i(e, t),
                Object.defineProperty(e.prototype, "isAutoMoveType", {
                    get: function () {
                        return this._isAutoMoveType;
                    },
                    set: function (t) {
                        this._isAutoMoveType = t;
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                (e.prototype._init_csryw = function () {
                    if (t.prototype._init_csryw.call(this)) {
                        this._slideDirection == s.SlideDirection.HORIZONTAL
                            ? (this.viewLayoutNum_csryw = Math.ceil(this.node.width / this.itemPrefabWidth_csryw))
                            : this._slideDirection == s.SlideDirection.VERTICAL &&
                              (this.viewLayoutNum_csryw = Math.ceil(this.node.width / this.itemPrefabHeight_csryw)),
                            (this.viewLayoutSum_csryw = this.viewLayoutNum_csryw + 2 * this.viewLayoutGapNum_csryw);
                        for (var e = 0, o = 0; o < this.viewLayoutSum_csryw; o++) {
                            var n = this.cloneLayout_csryw(),
                                i = n.node;
                            this._slideDirection == s.SlideDirection.HORIZONTAL
                                ? ((i.x = e), (i.y = 0), (e += i.width))
                                : this._slideDirection == s.SlideDirection.VERTICAL &&
                                  ((i.x = 0), (i.y = e), (e -= i.height)),
                                this.arrayAliveListLayout_csryw.push(n);
                        }
                        return (this.isCanUpdateItems_csryw = !0), !0;
                    }
                    return !1;
                }),
                (e.prototype.setFMListenerUpdateItem_csryw = function (t) {
                    this.fmListenerUpdateData_csryw = t;
                }),
                (e.prototype.setAutoData_csryw = function (t, e, o, n, i) {
                    (this.isAutoMoveWayLeftUp_csryw = 0 == t),
                        (this.autoMoveWaitNum_csryw = e ? Math.abs(e) : 0),
                        (this.autoMoveWaitTime_csryw = o ? 60 * Math.abs(o) : 60),
                        (this.autoMoveSpeed_csryw = n ? Math.abs(n) : 3),
                        i && (this.node.color = c.default.colorHex2Rgb_csryw(i));
                }),
                (e.prototype.isTouchStopView_csryw = function () {
                    return this.isTouchStop_csryw;
                }),
                (e.prototype.setCanScrollViewLoopUpdate_csryw = function (t) {
                    this._isCanScrollViewLoopUpdate_csryw = t;
                }),
                (e.prototype.setAdTag_csryw = function (t) {
                    this.ad_tag_csryw = t;
                    for (var e = 0; e < this.arrayAliveListLayout_csryw.length; e++)
                        this.arrayAliveListLayout_csryw[e].setAdTag_csryw(this.ad_tag_csryw);
                    for (e = 0; e < this.arrayFreeListLayout_csryw.length; e++)
                        this.arrayFreeListLayout_csryw[e].setAdTag_csryw(this.ad_tag_csryw);
                }),
                (e.prototype.initUpdateItems_csryw = function () {
                    if (
                        (this._init_csryw(),
                        (this.startIndexItem_csryw = 0),
                        this._slideDirection == s.SlideDirection.HORIZONTAL)
                    )
                        for (
                            var t = 3 * -this.itemPrefabWidth_csryw, e = 0;
                            e < this.arrayAliveListLayout_csryw.length;
                            e++
                        )
                            (o = this.arrayAliveListLayout_csryw[e]).setPointX_csryw(t),
                                o.setItemIndex_csryw(this.startIndexItem_csryw + e),
                                (t += this.itemPrefabWidth_csryw);
                    else
                        for (
                            t = 3 * this.itemPrefabHeight_csryw, e = 0;
                            e < this.arrayAliveListLayout_csryw.length;
                            e++
                        ) {
                            var o;
                            (o = this.arrayAliveListLayout_csryw[e]).setPointY_csryw(t),
                                o.setItemIndex_csryw(this.startIndexItem_csryw + e),
                                (t -= this.itemPrefabHeight_csryw);
                        }
                    this._updateNextLengthTime_csryw();
                }),
                (e.prototype.update = function () {
                    this.isCanUpdateItems_csryw &&
                        this._isCanScrollViewLoopUpdate_csryw &&
                        (this.updateScrollingItems_csryw(), 1 == this.isAutoMoveType && this._updateAutoMove_csryw());
                }),
                (e.prototype.listenerUpdateInitItem_csryw = function (t) {
                    if (this.fmListenerUpdateData_csryw) return a.callFM_csryw(this.fmListenerUpdateData_csryw, t);
                }),
                (e.prototype._updateAutoMove_csryw = function () {
                    this.isTouchStopView_csryw() ||
                        (0 == this._moveState_csryw
                            ? (this.isAutoMoveWayLeftUp_csryw
                                  ? this._slideDirection == s.SlideDirection.HORIZONTAL
                                      ? (this.content_csryw.x = this.content_csryw.x - this.autoMoveSpeed_csryw)
                                      : (this.content_csryw.y = this.content_csryw.y + this.autoMoveSpeed_csryw)
                                  : this._slideDirection == s.SlideDirection.HORIZONTAL
                                  ? (this.content_csryw.x = this.content_csryw.x + this.autoMoveSpeed_csryw)
                                  : (this.content_csryw.y = this.content_csryw.y - this.autoMoveSpeed_csryw),
                              this.autoMoveWaitNum_csryw > 0 &&
                                  ((this._nextMoveLength_csryw = this._nextMoveLength_csryw - this.autoMoveSpeed_csryw),
                                  this._nextMoveLength_csryw <= 0 && (this._moveState_csryw = 1)))
                            : ((this._waitTimeNum_csryw = this._waitTimeNum_csryw + 1),
                              this._waitTimeNum_csryw >= this.autoMoveWaitTime_csryw &&
                                  ((this._waitTimeNum_csryw = 0), this._updateNextLengthTime_csryw())));
                }),
                (e.prototype._dispatchEvent_csryw = function (t) {
                    t == s.FMTouchEvent.Scrolling ||
                        (t == s.FMTouchEvent.TouchStart
                            ? (this.isTouchStop_csryw = !0)
                            : t == s.FMTouchEvent.TouchEnded &&
                              (this._updateNextLengthTime_csryw(), (this.isTouchStop_csryw = !1)));
                }),
                (e.prototype._updateNextLengthTime_csryw = function () {
                    if (this.autoMoveWaitNum_csryw > 0)
                        if (this._slideDirection == s.SlideDirection.HORIZONTAL) {
                            if (
                                ((this._nextMoveLength_csryw = this.autoMoveWaitNum_csryw * this.itemPrefab.data.width),
                                this.isAutoMoveWayLeftUp_csryw)
                            )
                                for (var t = 0; t < this.arrayAliveListLayout_csryw.length; t++) {
                                    var e = this.arrayAliveListLayout_csryw[t];
                                    if ((o = this.content_csryw.x + e.node.x) > -e.node.width && o < 0) {
                                        this._nextMoveLength_csryw = this._nextMoveLength_csryw + o;
                                        break;
                                    }
                                }
                            else
                                for (t = this.arrayAliveListLayout_csryw.length - 1; t >= 0; t--) {
                                    var o;
                                    if (
                                        ((e = this.arrayAliveListLayout_csryw[t]),
                                        (o = this.content_csryw.x + e.node.x) < this.node.width + e.node.width &&
                                            o > this.node.width)
                                    ) {
                                        (o -= this.node.width),
                                            (this._nextMoveLength_csryw = this._nextMoveLength_csryw - o);
                                        break;
                                    }
                                }
                        } else if (
                            ((this._nextMoveLength_csryw = this.autoMoveWaitNum_csryw * this.itemPrefab.data.height),
                            this.isAutoMoveWayLeftUp_csryw)
                        ) {
                            for (t = 0; t < this.arrayAliveListLayout_csryw.length; t++)
                                if (
                                    ((e = this.arrayAliveListLayout_csryw[t]),
                                    (n = this.content_csryw.y + e.node.y) < e.node.height && n > 0)
                                ) {
                                    this._nextMoveLength_csryw = this._nextMoveLength_csryw - n;
                                    break;
                                }
                        } else
                            for (t = this.arrayAliveListLayout_csryw.length - 1; t >= 0; t--) {
                                var n;
                                if (
                                    ((e = this.arrayAliveListLayout_csryw[t]),
                                    (n = this.content_csryw.y + e.node.y - e.node.height) >
                                        -(this.node.height + e.node.height) && n < -this.node.height)
                                ) {
                                    (n += this.node.height),
                                        (this._nextMoveLength_csryw = this._nextMoveLength_csryw + n);
                                    break;
                                }
                            }
                    (this._waitTimeNum_csryw = 0), (this._moveState_csryw = 0);
                }),
                (e.prototype.updateScrollingItems_csryw = function () {
                    var t = [];
                    if (this._slideDirection == s.SlideDirection.HORIZONTAL) {
                        for (var e = 0; e < this.arrayAliveListLayout_csryw.length; e++) {
                            var o = this.arrayAliveListLayout_csryw[e];
                            this.content_csryw.x + o.getPointX_csryw() < 3 * -this.itemPrefabWidth_csryw
                                ? this.addFreeItem_csryw(o)
                                : o.getPointX_csryw() + this.content_csryw.x >
                                  this.node.width + 3 * this.itemPrefabWidth_csryw
                                ? this.addFreeItem_csryw(o)
                                : t.push(o);
                        }
                        t[0].getPointX_csryw() + this.content_csryw.x > -this.itemPrefabWidth_csryw &&
                            ((o = this.getFreeItem_csryw()).setPointX_csryw(
                                t[0].getPointX_csryw() - this.itemPrefabWidth_csryw
                            ),
                            o.setItemIndex_csryw(t[0].getItemIndex_csryw() - 1),
                            t.splice(0, 0, o),
                            (o.node.active = !0)),
                            t[t.length - 1].getPointX_csryw() + this.content_csryw.x <
                                +this.node.width + this.itemPrefabWidth_csryw &&
                                ((o = this.getFreeItem_csryw()).setPointX_csryw(
                                    t[t.length - 1].getPointX_csryw() + this.itemPrefabWidth_csryw
                                ),
                                o.setItemIndex_csryw(t[t.length - 1].getItemIndex_csryw() + 1),
                                t.push(o),
                                (o.node.active = !0));
                    } else {
                        for (e = 0; e < this.arrayAliveListLayout_csryw.length; e++)
                            (o = this.arrayAliveListLayout_csryw[e]).getPointY_csryw() + this.content_csryw.y >
                            3 * this.itemPrefabHeight_csryw
                                ? this.addFreeItem_csryw(o)
                                : o.getPointY_csryw() <
                                  -(this.content_csryw.y + this.node.height + 3 * this.itemPrefabHeight_csryw)
                                ? this.addFreeItem_csryw(o)
                                : t.push(o);
                        t[0].getPointY_csryw() + this.content_csryw.y <= this.itemPrefabHeight_csryw &&
                            ((o = this.getFreeItem_csryw()).setPointY_csryw(
                                t[0].getPointY_csryw() + this.itemPrefabHeight_csryw
                            ),
                            o.setItemIndex_csryw(t[0].getItemIndex_csryw() - 1),
                            t.splice(0, 0, o),
                            (o.node.active = !0)),
                            t[t.length - 1].getPointY_csryw() >=
                                -(this.content_csryw.y + this.node.height + this.itemPrefabHeight_csryw) &&
                                ((o = this.getFreeItem_csryw()).setPointY_csryw(
                                    t[t.length - 1].getPointY_csryw() - this.itemPrefabHeight_csryw
                                ),
                                o.setItemIndex_csryw(t[t.length - 1].getItemIndex_csryw() + 1),
                                t.push(o),
                                (o.node.active = !0));
                    }
                    this.arrayAliveListLayout_csryw = t;
                }),
                (e.prototype.cloneLayout_csryw = function () {
                    var t = cc.instantiate(this.itemPrefab),
                        e = t.getComponent(l.default);
                    return (
                        e.setAdTag_csryw(this.ad_tag_csryw),
                        e.setFMListenerUpdate_csryw(a.handleFM_csryw(this.listenerUpdateInitItem_csryw, this)),
                        this.content_csryw.addChild(t),
                        e
                    );
                }),
                (e.prototype.getFreeItem_csryw = function () {
                    var t = this.arrayFreeListLayout_csryw.pop();
                    return t || (t = this.cloneLayout_csryw()), t;
                }),
                (e.prototype.addFreeItem_csryw = function (t) {
                    (t.node.active = !1), this.arrayFreeListLayout_csryw.push(t);
                }),
                r([h()], e.prototype, "_isAutoMoveType", void 0),
                r([h({tooltip: "自动滚动", type: cc.Boolean})], e.prototype, "isAutoMoveType", null),
                r([u, f()], e)
            );
        })(s.default));
o.default = p;
