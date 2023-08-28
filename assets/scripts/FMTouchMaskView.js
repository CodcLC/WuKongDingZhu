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
Object.defineProperty(o, "__esModule", {value: !0}), (o.FMTouchEvent = o.SlideDirection = void 0);
var s,
    a,
    c = t("LogUtils"),
    l = t("FMItemLayout"),
    d = cc._decorator,
    u = d.ccclass,
    h = d.property,
    f = (d.requireComponent, d.disallowMultiple);
d.menu,
    (function (t) {
        (t[(t.HORIZONTAL = 1)] = "HORIZONTAL"), (t[(t.VERTICAL = 2)] = "VERTICAL");
    })((s = o.SlideDirection || (o.SlideDirection = {}))),
    (function (t) {
        (t.TouchStart = "touch_start"), (t.Scrolling = "scrolling"), (t.TouchEnded = "touch_ended");
    })((a = o.FMTouchEvent || (o.FMTouchEvent = {})));
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (
            (e.itemPrefab = null),
            (e._slideDirection = s.HORIZONTAL),
            (e._tempPoint_csryw = cc.v2()),
            (e._tempPrevPoint_csryw = cc.v2()),
            (e._outOfBoundaryAmount_csryw = cc.v2(0, 0)),
            (e._outOfBoundaryAmountDirty_csryw = !0),
            (e._inited_csryw = !1),
            (e._touchMoved_csryw = !1),
            (e.cancelInnerEvents_csryw = !0),
            (e.itemPrefabWidth_csryw = 0),
            (e.itemPrefabHeight_csryw = 0),
            e
        );
    }
    return (
        i(e, t),
        Object.defineProperty(e.prototype, "slideDirection", {
            get: function () {
                return this._slideDirection;
            },
            set: function (t) {
                this._slideDirection = t;
            },
            enumerable: !1,
            configurable: !0
        }),
        (e.prototype.onLoad = function () {
            this._init_csryw();
        }),
        (e.prototype._init_csryw = function () {
            if (this._inited_csryw) return !1;
            var t = this.node.getComponent(cc.Widget);
            t && t.updateAlignment();
            var e = new cc.Node();
            (e.anchorX = 0), (e.anchorY = 1);
            var o = e.addComponent(cc.Widget);
            return (
                (o.top = 0),
                (o.left = 0),
                (o.right = 0),
                (o.bottom = 0),
                (o.isAlignTop = !0),
                (o.isAlignLeft = !0),
                (o.isAlignRight = !0),
                (o.isAlignBottom = !0),
                this.node.addChild(e),
                o.updateAlignment(),
                (e.addComponent(cc.Mask).type = cc.Mask.Type.RECT),
                (this.content_csryw = new cc.Node()),
                e.addChild(this.content_csryw),
                (this.content_csryw.width = e.width),
                (this.content_csryw.height = e.height),
                (this.content_csryw.anchorX = 0),
                (this.content_csryw.anchorY = 1),
                (this.content_csryw.x = 0),
                (this.content_csryw.y = 0),
                (this.itemPrefabWidth_csryw = this.itemPrefab.data.width),
                (this.itemPrefabHeight_csryw = this.itemPrefab.data.height),
                (this.scriptItemPrefab_csryw = this.itemPrefab.data.getComponent(l.default)),
                this.scriptItemPrefab_csryw
                    ? 0 == this.scriptItemPrefab_csryw.getItemChildrenCount_csryw() &&
                      c.LogUtils.error_csryw("FMTouchMaskView -> _init -> scriptItemPrefab item child count ==0")
                    : c.LogUtils.error_csryw("FMTouchMaskView -> _init -> scriptItemPrefab is null"),
                (this._inited_csryw = !0),
                !0
            );
        }),
        (e.prototype._dispatchEvent_csryw = function (t) {
            console.log("FMTouchMaskView -> _dispatchEvent -> name", t);
        }),
        (e.prototype.setCancelInnerEvents_csryw = function (t) {
            this.cancelInnerEvents_csryw = t;
        }),
        (e.prototype.handlePressLogic_csryw = function () {
            this._dispatchEvent_csryw(a.TouchStart);
        }),
        (e.prototype.handleMoveLogic_csryw = function (t) {
            var e = this.getLocalAxisAlignDelta_csryw(t),
                o = (e = this.clampDelta_csryw(e)),
                n = this.getHowMuchOutOfBoundary_csryw(o);
            (0 === (o = o.add(n)).x && 0 === o.y) ||
                (this._moveContent_csryw(o), this._dispatchEvent_csryw(a.Scrolling));
        }),
        (e.prototype.handleReleaseLogic_csryw = function (t) {
            this.getLocalAxisAlignDelta_csryw(t), this._dispatchEvent_csryw(a.TouchEnded);
        }),
        (e.prototype._flattenVectorByDirection_csryw = function (t) {
            var e = t;
            return (
                (e.x = this._slideDirection == s.HORIZONTAL ? e.x : 0),
                (e.y = this._slideDirection == s.VERTICAL ? e.y : 0),
                e
            );
        }),
        (e.prototype._moveContent_csryw = function (t) {
            var e = this._flattenVectorByDirection_csryw(t),
                o = this.getContentPosition_csryw().add(e);
            this.setContentPosition_csryw(o);
        }),
        (e.prototype.getLocalAxisAlignDelta_csryw = function (t) {
            return (
                this.node.convertToNodeSpaceAR(t.getLocation(), this._tempPoint_csryw),
                this.node.convertToNodeSpaceAR(t.getPreviousLocation(), this._tempPrevPoint_csryw),
                this._tempPoint_csryw.sub(this._tempPrevPoint_csryw)
            );
        }),
        (e.prototype._hasNestedViewGroup_csryw = function (t, e) {
            if (t.eventPhase === cc.Event.CAPTURING_PHASE) {
                if (e)
                    for (var o = 0; o < e.length; ++o) {
                        var n = e[o];
                        if (this.node === n) return !!t.target.getComponent(cc.ViewGroup);
                        if (n.getComponent(cc.ViewGroup)) return !0;
                    }
                return !1;
            }
        }),
        (e.prototype._stopPropagationIfTargetIsMe_csryw = function (t) {
            t.eventPhase === cc.Event.AT_TARGET && t.target === this.node && t.stopPropagation();
        }),
        (e.prototype._onTouchBegan_csryw = function (t, e) {
            if (this.enabledInHierarchy && !this._hasNestedViewGroup_csryw(t, e)) {
                var o = t.touch;
                this.content_csryw && this.handlePressLogic_csryw(o),
                    (this._touchMoved_csryw = !1),
                    this._stopPropagationIfTargetIsMe_csryw(t);
            }
        }),
        (e.prototype._onTouchMoved_csryw = function (t, e) {
            if (this.enabledInHierarchy && !this._hasNestedViewGroup_csryw(t, e)) {
                var o = t.touch;
                if (
                    this.node._hitTest(o.getLocation(), this.node) &&
                    (this.content_csryw && this.handleMoveLogic_csryw(o), this.cancelInnerEvents_csryw)
                ) {
                    if (o.getLocation().sub(o.getStartLocation()).mag() > 7 && !this._touchMoved_csryw) {
                        var n = new cc.Event.EventTouch(t.getTouches(), t.bubbles);
                        (n.type = cc.Node.EventType.TOUCH_CANCEL),
                            (n.touch = t.touch),
                            (n.simulate = !0),
                            t.target.dispatchEvent(n),
                            (this._touchMoved_csryw = !0);
                    }
                    this._stopPropagationIfTargetIsMe_csryw(t);
                }
            }
        }),
        (e.prototype._onTouchEnded_csryw = function (t, e) {
            if (this.enabledInHierarchy && !this._hasNestedViewGroup_csryw(t, e)) {
                var o = t.touch;
                this.content_csryw && this.handleReleaseLogic_csryw(o),
                    this._touchMoved_csryw ? t.stopPropagation() : this._stopPropagationIfTargetIsMe_csryw(t);
            }
        }),
        (e.prototype._onTouchCancelled_csryw = function (t, e) {
            if (this.enabledInHierarchy && !this._hasNestedViewGroup_csryw(t, e)) {
                if (!t.simulate) {
                    var o = t.touch;
                    this.content_csryw && this.handleReleaseLogic_csryw(o);
                }
                this._stopPropagationIfTargetIsMe_csryw(t);
            }
        }),
        (e.prototype.clampDelta_csryw = function (t) {
            return (
                this._slideDirection == s.HORIZONTAL ? (t.y = 0) : this._slideDirection == s.VERTICAL && (t.x = 0), t
            );
        }),
        (e.prototype.getHowMuchOutOfBoundary_csryw = function (t) {
            if ((t = t || cc.v2(0, 0)).fuzzyEquals(cc.v2(0, 0), 1e-4) && !this._outOfBoundaryAmountDirty_csryw)
                return this._outOfBoundaryAmount_csryw;
            var e = cc.v2(0, 0);
            return (
                t.fuzzyEquals(cc.v2(0, 0), 1e-4) &&
                    ((this._outOfBoundaryAmount_csryw = e), (this._outOfBoundaryAmountDirty_csryw = !1)),
                this.clampDelta_csryw(e)
            );
        }),
        (e.prototype.getContentPosition_csryw = function () {
            return this.content_csryw.getPosition();
        }),
        (e.prototype.setContentPosition_csryw = function (t) {
            t.fuzzyEquals(this.getContentPosition_csryw(), 1e-4) ||
                (this.content_csryw.setPosition(t), (this._outOfBoundaryAmountDirty_csryw = !0));
        }),
        (e.prototype.onEnable = function () {
            this._registerEvent_csryw();
        }),
        (e.prototype.onDisable = function () {
            this._unregisterEvent_csryw();
        }),
        (e.prototype._registerEvent_csryw = function () {
            this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan_csryw, this, !0),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved_csryw, this, !0),
                this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded_csryw, this, !0),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled_csryw, this, !0);
        }),
        (e.prototype._unregisterEvent_csryw = function () {
            this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan_csryw, this, !0),
                this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved_csryw, this, !0),
                this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded_csryw, this, !0),
                this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled_csryw, this, !0);
        }),
        r([h({tooltip: "layout预制体(0,1)", type: cc.Prefab})], e.prototype, "itemPrefab", void 0),
        r([h()], e.prototype, "_slideDirection", void 0),
        r(
            [h({type: cc.Enum(s), tooltip: "滚动方向:\n HORIZONTAL 水平滚动\nVERTICAL垂直滚动"})],
            e.prototype,
            "slideDirection",
            null
        ),
        r([u, f()], e)
    );
})(cc.Component);
o.default = p;
