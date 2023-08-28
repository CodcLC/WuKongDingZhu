var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("VibrateMgr"),
    i = (function () {
        function t() {}
        return (
            (t.btnRegister_csryw = function (e, o, i, r, s) {
                void 0 === i && (i = 0.1), void 0 === r && (r = 0.2), void 0 === s && (s = null);
                var a = null;
                null != e.getComponent(cc.Sprite) && (a = e.getComponent(cc.Sprite).spriteFrame),
                    e.on(
                        cc.Node.EventType.TOUCH_START,
                        function () {
                            n.default.vibrateShort_csryw(),
                                r > 0 && cc.tween(e).to(r, {scale: 0.8}).start(),
                                null != s && (e.getComponent(cc.Sprite).spriteFrame = s);
                        },
                        this
                    ),
                    e.on(
                        cc.Node.EventType.TOUCH_END,
                        function () {
                            r > 0 && cc.tween(e).to(r, {scale: 1}).start(),
                                null != a && (e.getComponent(cc.Sprite).spriteFrame = a),
                                !1 === t.isTouching &&
                                    ((t.isTouching = !0),
                                    o(e),
                                    setTimeout(function () {
                                        t.isTouching = !1;
                                    }, 1e3 * i));
                        },
                        this
                    ),
                    e.on(
                        cc.Node.EventType.TOUCH_CANCEL,
                        function () {
                            null != a && (e.getComponent(cc.Sprite).spriteFrame = a),
                                r > 0 && cc.tween(e).to(r, {scale: 1}).start();
                        },
                        this
                    );
            }),
            (t.createPrefab_csryw = function (t, e, o) {
                void 0 === o && (o = 0);
                var n = cc.instantiate(t);
                return e ? e.addChild(n, o) : cc.director.getScene().getChildByName("Canvas").addChild(n, 0), n;
            }),
            (t.getPrefabFromBundle = function (t, e, o, n) {
                void 0 === t && (t = "subRes_resources"), void 0 === n && (n = null);
                var i = cc.assetManager.getBundle(t);
                i &&
                    i.load(e, cc.Prefab, function (t, e) {
                        if (t) return console.log("加载预制体错误>:", t), null;
                        var i = cc.instantiate(e);
                        o.addChild(i), n && n(i);
                    });
            }),
            (t.getSpriteFrameFromBundle = function (t, e, o, n) {
                void 0 === t && (t = "subRes"), void 0 === o && (o = null), void 0 === n && (n = null);
                var i = cc.assetManager.getBundle(t);
                i &&
                    i.load(e, cc.SpriteFrame, function (t, e) {
                        if (t) return console.log("加载Sprite错误>:", t), null;
                        null != o && (o.spriteFrame = e), n && n(e);
                    });
            }),
            (t.getPosInWorld = function (t) {
                var e = t.getPosition(),
                    o = t.parent.convertToWorldSpaceAR(e);
                return cc.v2(o.x - cc.winSize.width / 2, o.y - cc.winSize.height / 2);
            }),
            (t.vectorsToDegress = function (t) {
                var e = cc.v2(0, 1),
                    o = t.signAngle(e);
                return -cc.misc.radiansToDegrees(o);
            }),
            (t.makeAngle = function (t, e, o) {
                var n = cc.v2(t.x - o.x, t.y - o.y);
                return (-cc.v2(e.x - o.x, e.y - o.y).signAngle(n) / Math.PI) * 180;
            }),
            (t.makeDistance = function (t, e) {
                var o = Math.abs(t.x - e.x),
                    n = Math.abs(t.y - e.y);
                return Math.sqrt(Math.pow(o, 2) + Math.pow(n, 2));
            }),
            (t.getRanNodeIndex = function (e, o) {
                for (var n = [], i = 0; i < o; i++) n.push(i);
                for (var r = [], s = t.getRanNumber(e, o), a = 0; a < s; a++) {
                    var c = Math.floor(Math.random() * n.length);
                    c != n.length && r.push(n[c]), n.splice(c, 1);
                }
                return r;
            }),
            (t.getRanNumber = function (t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t);
            }),
            (t.getMathArrInLimitArr_csryw = function (t, e) {
                for (var o = [], n = 0; n < e; n++)
                    if (t.length <= 0);
                    else {
                        var i = Math.floor(Math.random() * t.length);
                        o.push(t[i]), t.splice(i, 1);
                    }
                return {returnArr: o, limitArr: t};
            }),
            (t.addLinmFeed = function (t) {
                var e = "";
                if (t.length <= 14) e = t;
                else if (0 == t.indexOf("......")) {
                    var o = t.substring(5, t.length),
                        n = function (t) {
                            var o = t.length;
                            if (o > 14) {
                                e += t.substring(0, 13) + "\n";
                                var i = t.substring(13, o);
                                n(i);
                            } else e = "......" + (e += t);
                        };
                    n(o);
                } else {
                    var i = function (t) {
                        var o = t.length;
                        if (o > 14) {
                            e += t.substring(0, 13) + "\n";
                            var n = t.substring(13, o);
                            i(n);
                        } else e += t;
                    };
                    i(t);
                }
                return e;
            }),
            (t.isTouching = !1),
            t
        );
    })();
o.default = i;
