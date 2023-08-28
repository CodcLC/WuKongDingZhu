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
    c = t("ResMgr"),
    l = t("ConfigMgr"),
    d = t("DataMgr"),
    u = t("BaseViewS"),
    h = cc._decorator,
    f = h.ccclass,
    p = h.property,
    _ = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.img = null),
                (e.hint_lab = null),
                (e.video_lab = null),
                (e.imgsstr = {55: "hgxy_gqxz_37", 49: "hgxy_gqxz_38", 43: "hgxy_gqxz_39", 74: "hgxy_gqxz_82"}),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.SetHeroId = function (t, e, o) {
                var n = this;
                (this.callback = e),
                    (this.caller = o),
                    (this.hero_id = t),
                    (this.hero_data = l.ConfigMgr.card_config.get(t)),
                    c.default.loadBundleSpriteFrame(
                        "subResGame",
                        "Textures/Home/" + this.imgsstr[t],
                        function (t) {
                            n.img.spriteFrame = t;
                        },
                        this
                    ),
                    (this.hint_lab.string = "观看视频解锁" + this.hero_data.name),
                    (this.video_lab.string = "解锁（" + d.DataMgr.GetHeroVideoCount(t) + "/3）");
            }),
            (e.prototype.OnVideo = function () {
                var t = this;
                a.default.showRewardedVideoAd_csryw(
                    "解锁人物" + this.hero_data.name,
                    function (e) {
                        e &&
                            (d.DataMgr.AddSeeHeroVideoCount(t.hero_id),
                            d.DataMgr.GetHeroVideoCount(t.hero_id) >= 3 &&
                                (d.DataMgr.AddHero(t.hero_id, 3),
                                s.default.openToast("新英雄" + t.hero_data.name + "已解锁"),
                                t.OnClose()),
                            (t.video_lab.string = "解锁（" + d.DataMgr.GetHeroVideoCount(t.hero_id) + "/3）"));
                    },
                    function () {}
                );
            }),
            (e.prototype.onDestroy = function () {
                this.callback && this.callback.call(this.caller);
            }),
            r([p(cc.Sprite)], e.prototype, "img", void 0),
            r([p(cc.Label)], e.prototype, "hint_lab", void 0),
            r([p(cc.Label)], e.prototype, "video_lab", void 0),
            r([f], e)
        );
    })(u.default);
o.default = _;
