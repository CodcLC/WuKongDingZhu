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
var s = t("ResMgr"),
    a = t("Utils"),
    c = t("BuffMgr"),
    l = t("ConfigMgr"),
    d = cc._decorator,
    u = d.ccclass,
    h = d.property,
    f = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.sy_spr = null),
                (e.start_btn = null),
                (e.scr = null),
                (e.content = null),
                (e.item = null),
                (e.buffNode = null),
                (e.buff_show_node = null),
                (e.guang = null),
                (e.gz_spr = null),
                (e.img = null),
                (e.select_gz = null),
                (e.des_lab = null),
                (e.show_close = null),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.SetCallBack = function (t) {
                this.callback = t;
            }),
            (e.prototype.onLoad = function () {
                for (var t = this; this.content.childrenCount < 60; )
                    for (
                        var e = function (t) {
                                var e = l.ConfigMgr.buff_config.get(c.BuffMgr.GetNowBuffs()[t]),
                                    n = cc.instantiate(o.item),
                                    i = n.getChildByName("show").getChildByName("img").getComponent(cc.Sprite);
                                s.default.loadBundleSpriteFrame(
                                    "subResGame",
                                    "Textures/Select/" + e.img,
                                    function (t) {
                                        i.spriteFrame = t;
                                    },
                                    o
                                ),
                                    1 == e.rare &&
                                        (n
                                            .getChildByName("show")
                                            .getChildByName("bg")
                                            .getComponent(cc.Sprite).spriteFrame = o.sy_spr),
                                    (n.active = !0),
                                    (n.index = c.BuffMgr.GetNowBuffs()[t]),
                                    (n.num = c.BuffMgr.now_buffs_data[t].num),
                                    o.content.addChild(n);
                            },
                            o = this,
                            n = 0;
                        n < c.BuffMgr.GetNowBuffs().length;
                        n++
                    )
                        e(n);
                this.scheduleOnce(function () {
                    t.ToIndex(5, 0);
                }, 0.1);
            }),
            (e.prototype.OnStart = function () {
                var t = this;
                this.start_btn.active = !1;
                var e,
                    o = a.default.GetRandomNum(30, this.content.childrenCount - 3),
                    n = l.ConfigMgr.buff_config.get(this.content.children[o].index).Clone();
                (n.num = this.content.children[o].num),
                    this.ToIndex(o, 8),
                    1 == n.rare && (this.select_gz.spriteFrame = this.sy_spr),
                    s.default.loadBundleSpriteFrame(
                        "subResGame",
                        "Textures/Select/" + n.img,
                        function (e) {
                            t.img.spriteFrame = e;
                        },
                        this
                    ),
                    (e = n.des),
                    -1 != n.des.indexOf("*")
                        ? (e = e.replace("*", n.num.toString()))
                        : -1 != n.des.indexOf("@")
                        ? (e = e.replace("@", n.num.toString()))
                        : (n.num = 0),
                    (this.des_lab.string = e),
                    (c.BuffMgr.staybuff = n),
                    this.scheduleOnce(function () {
                        (t.buffNode.active = !0),
                            (t.buff_show_node.scale = 0),
                            cc
                                .tween(t.buff_show_node)
                                .to(0.15, {scale: 1})
                                .call(function () {
                                    t.show_close.on(
                                        cc.Node.EventType.TOUCH_END,
                                        function () {
                                            t.node.destroy();
                                        },
                                        t
                                    );
                                })
                                .start(),
                            cc.tween(t.guang).by(6, {angle: 360}).union().repeatForever().start();
                    }, 8);
            }),
            (e.prototype.OnScring = function () {}),
            (e.prototype.ToIndex = function (t, e) {
                var o = new cc.Vec2(this.content.children[t].x - 432 + 55, 0);
                this.scr.scrollToOffset(o, e);
            }),
            (e.prototype.ShowBuffNode = function () {
                cc.tween(this.guang).to(3, {angle: 360}).repeatForever().start(), (this.buffNode.active = !0);
            }),
            (e.prototype.onDestroy = function () {
                this.callback();
            }),
            r([h(cc.SpriteFrame)], e.prototype, "sy_spr", void 0),
            r([h(cc.Node)], e.prototype, "start_btn", void 0),
            r([h(cc.ScrollView)], e.prototype, "scr", void 0),
            r([h(cc.Node)], e.prototype, "content", void 0),
            r([h(cc.Node)], e.prototype, "item", void 0),
            r([h(cc.Node)], e.prototype, "buffNode", void 0),
            r([h(cc.Node)], e.prototype, "buff_show_node", void 0),
            r([h(cc.Node)], e.prototype, "guang", void 0),
            r([h(cc.Sprite)], e.prototype, "gz_spr", void 0),
            r([h(cc.Sprite)], e.prototype, "img", void 0),
            r([h(cc.Sprite)], e.prototype, "select_gz", void 0),
            r([h(cc.Label)], e.prototype, "des_lab", void 0),
            r([h(cc.Node)], e.prototype, "show_close", void 0),
            r([u], e)
        );
    })(cc.Component);
o.default = f;
