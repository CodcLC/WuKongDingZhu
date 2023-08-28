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
var s = t("GameMgr"),
    a = t("SoundMgr"),
    c = t("TTAPI"),
    l = t("ResMgr"),
    d = t("Utils"),
    u = t("GameSceneS"),
    h = t("ConfigMgr"),
    f = t("DataMgr"),
    p = t("EffMgr"),
    _ = t("GuideMgr"),
    y = t("BaseViewS"),
    g = cc._decorator,
    w = g.ccclass,
    m = g.property,
    v = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.count_lab = null),
                (e.money_lab = null),
                (e.damage_lab = null),
                (e.getMoneyNode = null),
                (e.items = null),
                (e.center = null),
                (e.jiesuan_tx = null),
                (e.is_go_home = !1),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.onLoad = function () {
                _.GuideMgr.in_guide ||
                    (f.DataMgr.user_gamedata.select_level == f.DataMgr.user_gamedata.unlock_max_level &&
                        f.DataMgr.SetMaxWinCount(u.default.ins.round)),
                    (this.center.opacity = 0);
                var t = u.default.ins.logic.GetAllDamage();
                (this.damage_lab.string = t.toString()),
                    (this.count_lab.string = u.default.ins.round.toString()),
                    (this.money_lab.string = f.DataMgr.GetCurrentGold().toString()),
                    this.InitItems(t),
                    this.PlayBgEff(),
                    cc.tween(this.center).to(0.1, {opacity: 255}).start();
            }),
            (e.prototype.PlayBgEff = function () {
                var t = this;
                this.jiesuan_tx.setAnimation(0, "play1", !1),
                    this.jiesuan_tx.setCompleteListener(function () {
                        t.jiesuan_tx.setCompleteListener(null), t.jiesuan_tx.setAnimation(0, "play2", !0);
                    });
            }),
            (e.prototype.InitItems = function (t) {
                for (
                    var e = function (e) {
                            var n = o.items.children[e],
                                i = u.default.ins.map_logic.create_indexs[e + 1],
                                r = u.default.ins.logic.GetIndexDamage(i),
                                s = h.ConfigMgr.card_config.get(i + 1);
                            l.default.loadBundleSpriteFrame(
                                "subResGame",
                                "Textures/items/" + s.img + "_" + s.start,
                                function (t) {
                                    var e = n.getChildByName("img");
                                    (e.getComponent(cc.Sprite).spriteFrame = t),
                                        (e.scale = d.default.GetSizeScale(e, 50));
                                },
                                o
                            );
                            var a = r > 1e3 ? Math.floor(r / 1e3) + "k" : r + "";
                            (n.getChildByName("lab").getComponent(cc.Label).string = a),
                                (n.getChildByName("pro").getComponent(cc.ProgressBar).progress = 0 == t ? 0 : r / t);
                        },
                        o = this,
                        n = 0;
                    n < u.default.ins.map_logic.create_indexs.length - 1;
                    n++
                )
                    e(n);
            }),
            (e.prototype.OnVideo = function () {
                var t = this,
                    e = this;
                c.default.showRewardedVideoAd_csryw(
                    "双倍金币",
                    function (o) {
                        o &&
                            (a.default.playSound_csryw("god"),
                            p.EffMgr.createFlyGold(t.getMoneyNode, 30, function () {
                                f.DataMgr.addMoney(2 * f.DataMgr.GetCurrentGold()), e.OnClose();
                            }));
                    },
                    function () {}
                );
            }),
            (e.prototype.OnSure = function () {
                var t = this;
                0 == f.DataMgr.GetCurrentGold()
                    ? t.OnClose()
                    : (a.default.playSound_csryw("god"),
                      p.EffMgr.createFlyGold(this.getMoneyNode, 15, function () {
                          f.DataMgr.addMoney(f.DataMgr.GetCurrentGold()), t.OnClose();
                      }));
            }),
            (e.prototype.OnShare = function () {
                u.default.ins.OnShare();
            }),
            (e.prototype.OnGoHome = function () {
                f.DataMgr.addMoney(f.DataMgr.GetCurrentGold()),
                    (this.is_go_home = !0),
                    s.default.getInstance_csryw().onLoadToWorldScene_csryw(!0);
            }),
            r([m(cc.Label)], e.prototype, "count_lab", void 0),
            r([m(cc.Label)], e.prototype, "money_lab", void 0),
            r([m(cc.Label)], e.prototype, "damage_lab", void 0),
            r([m(cc.Node)], e.prototype, "getMoneyNode", void 0),
            r([m(cc.Node)], e.prototype, "items", void 0),
            r([m(cc.Node)], e.prototype, "center", void 0),
            r([m(sp.Skeleton)], e.prototype, "jiesuan_tx", void 0),
            r([w], e)
        );
    })(y.default);
o.default = v;
