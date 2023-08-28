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
var s = t("DialogMgr"),
    a = t("TTAPI"),
    c = t("CommonMethod"),
    l = t("ChatDataMgr"),
    d = t("ConfigMgr"),
    u = t("DataMgr"),
    h = t("EffMgr"),
    f = cc._decorator,
    p = f.ccclass,
    _ = f.property,
    y = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.imageSpr = null), (e.btnVideo = null), (e.taskInfo = null), e;
        }
        return (
            i(e, t),
            (e.prototype.initOtherHb = function (t, e, o) {
                void 0 === o && (o = !1), (this.taskInfo = e);
                var n = d.ConfigMgr.chathero_config.get(t.attribute),
                    i = "Textures/headImg/" + n.tx_img;
                if (
                    (c.default.getSpriteFrameFromBundle("subResGame", i, this.imageSpr),
                    cc.tween(this.node).to(0.1, {scale: 1}).start(),
                    (this.taskInfo = e),
                    (this.btnVideo.active = !l.ChatDataMgr.GetTaskLookVideo(e.taskId)),
                    o)
                ) {
                    var r = this.node.getChildByName("headImg").getChildByName("name");
                    (r.getComponent(cc.Label).string = n.name), (r.active = !0);
                }
            }),
            (e.prototype.clickBtnVideo = function () {
                a.default.showRewardedVideoAd_csryw(
                    "看视频发红包",
                    this.adComplete.bind(this),
                    this.adfailure.bind(this)
                );
            }),
            (e.prototype.adComplete = function (t) {
                t ? this.watchVideoSucc() : this.adfailure();
            }),
            (e.prototype.watchVideoSucc = function () {
                var t = this;
                h.EffMgr.createFlyGold(this.btnVideo, Math.floor(this.taskInfo.numb / 50), function () {
                    u.DataMgr.addMoney(t.taskInfo.numb);
                }),
                    l.ChatDataMgr.SetTaskLookVideo(this.taskInfo.taskId),
                    (this.btnVideo.active = !1);
            }),
            (e.prototype.adfailure = function () {
                s.default.openToast("广告提前关闭，无法获得奖励");
            }),
            r([_({displayName: "照片", type: cc.Sprite})], e.prototype, "imageSpr", void 0),
            r([_({displayName: "视频按钮", type: cc.Node})], e.prototype, "btnVideo", void 0),
            r([p], e)
        );
    })(cc.Component);
o.default = y;
