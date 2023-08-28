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
    a = cc._decorator,
    c = a.ccclass,
    l = a.property,
    d = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.EventEnumView_csryw = {}),
                (e.goldNode = null),
                (e.starNode = null),
                (e.goldPoolArray = []),
                (e.timeLaunch = 0.3),
                (e.timeLaunchInterval = 0.01),
                (e.timeEnd = 0.5),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.initView_csryw = function () {}),
            (e.prototype.getRelativePosition = function (t, e, o) {
                var n = o || cc.Vec2.ZERO,
                    i = t.convertToWorldSpaceAR(n);
                return e.convertToNodeSpaceAR(i);
            }),
            (e.prototype.createFlyGold = function (t, e, o, n, i, r, s, a, c) {
                void 0 === i && (i = null),
                    void 0 === r && (r = 60),
                    void 0 === s && (s = 130),
                    void 0 === a && (a = cc.Vec2.ZERO),
                    void 0 === c && (c = cc.Vec2.ZERO),
                    (this.goldPoolArray = []);
                for (
                    var l = this.getRelativePosition(t, this.node, a),
                        d = this.getRelativePosition(e, this.node, c),
                        u = this.goldPoolArray.length,
                        h = u > n ? 0 : n - u,
                        f = 0;
                    f < h;
                    f++
                ) {
                    var p = cc.instantiate(this.goldNode);
                    (p.group = "ui"),
                        this.goldPoolArray.push({
                            node: p,
                            launchLength: 0,
                            launchPos: cc.Vec2.ZERO,
                            spos: cc.Vec2.ZERO,
                            epos: cc.Vec2.ZERO
                        }),
                        o.addChild(p);
                }
                for (f = 0; f < this.goldPoolArray.length; f++)
                    ((y = this.goldPoolArray[f]).node.active = !1),
                        cc.Tween.stopAllByTarget(y.node),
                        (y.launchLength = 0);
                var _ = this.getCirclePoints(s, l, n, r);
                for (f = 0; f < n; f++) {
                    var y;
                    (y = this.goldPoolArray[f]).node.active = !0;
                    var g = _[f];
                    (y.launchPos = g),
                        (y.spos = l),
                        (y.epos = d),
                        (y.launchLength = g.sub(d).mag()),
                        y.node.setPosition(l);
                }
                this.goldPoolArray = this.goldPoolArray.sort(function (t, e) {
                    return t.launchLength - e.launchLength > 0 ? 1 : t.launchLength - e.launchLength < 0 ? -1 : 0;
                });
                var w = 0,
                    m = function (t) {
                        var e = v.goldPoolArray.length - 1,
                            o = t,
                            n = v.goldPoolArray[t];
                        n.node.active &&
                            ((w += 1),
                            cc
                                .tween(n.node)
                                .to(v.timeLaunch, {x: n.launchPos.x, y: n.launchPos.y})
                                .delay(w * v.timeLaunchInterval)
                                .to(v.timeEnd, {x: n.epos.x, y: n.epos.y})
                                .call(function () {
                                    (n.node.active = !1), o == e && i && i();
                                })
                                .start());
                    },
                    v = this;
                for (f = 0; f < this.goldPoolArray.length; f++) m(f);
            }),
            (e.prototype.createFlyStar = function (t, e, o, n, i, r, s, a) {
                void 0 === i && (i = 60),
                    void 0 === r && (r = 130),
                    void 0 === s && (s = cc.Vec2.ZERO),
                    void 0 === a && (a = cc.Vec2.ZERO),
                    (this.goldPoolArray = []);
                for (
                    var c = this.getRelativePosition(t, this.node, s),
                        l = this.getRelativePosition(e, this.node, a),
                        d = this.goldPoolArray.length,
                        u = d > n ? 0 : n - d,
                        h = 0;
                    h < u;
                    h++
                ) {
                    var f = cc.instantiate(this.starNode);
                    this.goldPoolArray.push({
                        node: f,
                        launchLength: 0,
                        launchPos: cc.Vec2.ZERO,
                        spos: cc.Vec2.ZERO,
                        epos: cc.Vec2.ZERO
                    }),
                        o.addChild(f);
                }
                for (h = 0; h < this.goldPoolArray.length; h++)
                    ((_ = this.goldPoolArray[h]).node.active = !1),
                        cc.Tween.stopAllByTarget(_.node),
                        (_.launchLength = 0);
                var p = this.getCirclePoints(r, c, n, i);
                for (h = 0; h < n; h++) {
                    var _;
                    (_ = this.goldPoolArray[h]).node.active = !0;
                    var y = p[h];
                    (_.launchPos = y),
                        (_.spos = c),
                        (_.epos = l),
                        (_.launchLength = y.sub(l).mag()),
                        _.node.setPosition(c);
                }
                this.goldPoolArray = this.goldPoolArray.sort(function (t, e) {
                    return t.launchLength - e.launchLength > 0 ? 1 : t.launchLength - e.launchLength < 0 ? -1 : 0;
                });
                var g = 0,
                    w = function (t) {
                        var e = m.goldPoolArray[t];
                        e.node.active &&
                            ((g += 1),
                            cc
                                .tween(e.node)
                                .to(m.timeLaunch, {x: e.launchPos.x, y: e.launchPos.y})
                                .delay(g * m.timeLaunchInterval)
                                .to(m.timeEnd, {x: e.epos.x, y: e.epos.y})
                                .call(function () {
                                    e.node.active = !1;
                                })
                                .start());
                    },
                    m = this;
                for (h = 0; h < this.goldPoolArray.length; h++) w(h);
            }),
            (e.prototype.getCirclePoints = function (t, e, o, n) {
                void 0 === n && (n = 60);
                for (var i = [], r = (Math.PI / 180) * Math.round(360 / o), s = 0; s < o; s++) {
                    var a = e.x + t * Math.sin(r * s),
                        c = e.y + t * Math.cos(r * s);
                    i.unshift(cc.v2(a + Math.random() * n, c + Math.random() * n));
                }
                return i;
            }),
            (e.prototype.createFlyLabel = function (t, e) {
                console.log("调用飘字------------------------->");
                var o = new cc.Node(),
                    n = o.addComponent(cc.Label);
                (n.string = "未达到要求"),
                    (n.fontSize = 50),
                    (o.color = cc.color(0, 0, 0)),
                    o.setAnchorPoint(0, 0),
                    o.setPosition(-100, -100),
                    (o.active = !0),
                    (o.parent = t);
                var i = cc.moveBy(e, cc.v2(0, 100)),
                    r = cc.callFunc(
                        function () {
                            (o.active = !1), o.removeFromParent();
                        }.bind(this)
                    );
                o.runAction(cc.sequence(i, r));
            }),
            r([l({tooltip: "金币图标", type: cc.Node})], e.prototype, "goldNode", void 0),
            r([l({tooltip: "星星图标", type: cc.Node})], e.prototype, "starNode", void 0),
            r([c], e)
        );
    })(s.default);
o.default = d;
