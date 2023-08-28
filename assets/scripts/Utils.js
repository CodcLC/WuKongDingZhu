var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("ResMgr"),
    i = (function () {
        function t() {}
        return (
            (t.GetDistance = function (t, e) {
                var o = t.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    n = e.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    i = o.x - n.x,
                    r = o.y - n.y;
                return i * i + r * r;
            }),
            (t.GetMinDistanceNode = function (t, e, o) {
                return this.GetDistance(t, e) < this.GetDistance(t, o) ? e : o;
            }),
            (t.NodeSetNewParent = function (t, e) {
                var o = t.convertToWorldSpaceAR(cc.Vec2.ZERO);
                t.setParent(e);
                var n = e.convertToNodeSpaceAR(o);
                (t.x = n.x), (t.y = n.y);
            }),
            (t.ShowLoading = function () {
                cc.sys.platform == cc.sys.BYTEDANCE_GAME &&
                    window.tt.showLoading({
                        title: "加载中，请稍后...",
                        success: function (t) {
                            console.log(t);
                        },
                        fail: function (t) {
                            console.log("showLoading调用失败", t);
                        }
                    });
            }),
            (t.HideLoading = function () {
                cc.sys.platform == cc.sys.BYTEDANCE_GAME &&
                    window.tt.hideLoading({
                        noConflict: !0,
                        success: function (t) {
                            console.log(t);
                        },
                        fail: function (t) {
                            console.log("hideLoading 调用失败", t);
                        }
                    });
            }),
            (t.GetRandomNum = function (t, e) {
                return Math.floor(Math.random() * (e - t + 1)) + t;
            }),
            (t.InitPhysics = function () {
                (cc.director.getPhysicsManager().enabled = !0), (cc.director.getCollisionManager().enabled = !0);
            }),
            (t.NodeLookatNode = function (t, e) {
                var o = e.convertToWorldSpaceAR(cc.Vec2.ZERO);
                this.NodeLookatWordPos(t, o);
            }),
            (t.NodeLookatWordPos = function (t, e) {
                var o = t.parent.convertToNodeSpaceAR(e),
                    n = o.x - t.x,
                    i = o.y - t.y,
                    r = (180 * Math.atan2(i, n)) / Math.PI;
                t.angle = r - 90;
            }),
            (t.Fade = function (t, e, o, n, i) {
                (n.opacity = t),
                    i
                        ? cc.tween(n).to(o, {opacity: e}, {easing: cc.easing.cubicIn}).call(i).start()
                        : cc.tween(n).to(o, {opacity: e}, {easing: cc.easing.cubicIn}).start();
            }),
            (t.PopInOrOut = function (t, e, o, n, i) {
                var r;
                void 0 === o && (o = 0.5),
                    1 == t
                        ? ((r = i || cc.easing.backOut),
                          (e.scale = 0),
                          cc.tween(e).to(o, {scale: 1}, {easing: r}).call(n).start())
                        : ((r = i || cc.easing.backIn), cc.tween(e).to(o, {scale: 0}, {easing: r}).call(n).start());
            }),
            (t.SetSpPlayOverDestroy = function (t, e) {
                void 0 === e && (e = "play");
                var o = t.getComponent(sp.Skeleton);
                o.setAnimation(0, e, !1),
                    o.setCompleteListener(function () {
                        o.setCompleteListener(null), t.destroy();
                    });
            }),
            (t.verifyInputIsNumber = function (t) {
                var e = parseInt(t);
                return isNaN(e) ? null : e;
            }),
            (t.SetImgRemote = function (t, e) {
                var o = "https://oss.renyouwangluo.cn/hgxy/img/" + e + ".png";
                cc.assetManager.loadRemote(o, {ext: ".png"}, function (e, o) {
                    var n = new cc.SpriteFrame(o);
                    t.spriteFrame = n;
                });
            }),
            (t.GetSizeScale = function (t, e) {
                var o = t.width,
                    n = t.height;
                return o > n ? e / o : e / n;
            }),
            (t.GetNodeInNodePos = function (t, e) {
                var o = t.convertToWorldSpaceAR(cc.Vec2.ZERO);
                return e.convertToNodeSpaceAR(o);
            }),
            (t.CreateSpriteNode = function (t) {
                var e = new cc.Node();
                return (
                    n.default.loadBundleSpriteFrame(
                        "subResGame",
                        t,
                        function (t) {
                            e.addComponent(cc.Sprite).spriteFrame = t;
                        },
                        this
                    ),
                    e
                );
            }),
            t
        );
    })();
o.default = i;
