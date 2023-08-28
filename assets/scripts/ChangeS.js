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
var s = t("EventEnum"),
    a = t("EventMgr"),
    c = t("DialogMgr"),
    l = t("ResMgr"),
    d = t("Utils"),
    u = t("ConfigMgr"),
    h = t("DataMgr"),
    f = t("InfoS"),
    p = cc._decorator,
    _ = p.ccclass,
    y = p.property,
    g = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.items = null),
                (e.item = null),
                (e.content = null),
                (e.btns = null),
                (e.info_btn = null),
                (e.put_btn = null),
                (e.down_btn = null),
                (e.kong_item = []),
                (e.loading = !1),
                (e.in_hint_ing = !1),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.onLoad = function () {
                for (var t = 1; t < h.DataMgr.select_indexs.length; t++) {
                    var e = this.items.children[t - 1];
                    this.SetItemShow(e, h.DataMgr.select_indexs[t] + 1),
                        e.on(cc.Node.EventType.TOUCH_START, this.OnStart, this),
                        (e.index = t),
                        h.DataMgr.select_indexs[t] < 0 && this.kong_item.push(e);
                }
                for (t = 0; t < h.DataMgr.have_indexs.length; t++)
                    (e = cc.instantiate(this.item)),
                        this.SetItemShow(e, h.DataMgr.have_indexs[t] + 1),
                        this.content.addChild(e),
                        e.on(cc.Node.EventType.TOUCH_START, this.OnStart, this);
            }),
            (e.prototype.OnStart = function (t) {
                var e = t.target;
                if (this.in_hint_ing && e.parent == this.items) {
                    e.id;
                    var o = this.btns.item.id;
                    (h.DataMgr.select_indexs[e.index] = this.btns.item.id - 1),
                        this.SetItemShow(e, o),
                        a.default.emitEvent_csryw(s.ryw_Event.ChangeSelectIndexs),
                        h.DataMgr.SaveSelectIndexs(),
                        this.HideHint();
                }
                this.btns.active && this.btns.item == e ? this.HideHint() : (this.HidePutHint(), this.ShowHint(e));
            }),
            (e.prototype.ShowHint = function (t) {
                if (
                    ((this.info_btn.active = !1),
                    (this.down_btn.active = !1),
                    (this.put_btn.active = !1),
                    t.parent == this.items)
                ) {
                    if (t.id <= 0) return;
                    (this.info_btn.active = !0), (this.down_btn.active = !0);
                } else
                    -1 != h.DataMgr.select_indexs.indexOf(t.id - 1)
                        ? (this.info_btn.active = !0)
                        : ((this.info_btn.active = !0), (this.put_btn.active = !0));
                console.log("显示");
                var e = t.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    o = this.btns.parent.convertToNodeSpaceAR(e);
                this.btns.setPosition(o), (this.btns.active = !0), (this.btns.item = t);
            }),
            (e.prototype.HideHint = function () {
                this.btns.active = !1;
            }),
            (e.prototype.OnScring = function () {
                if (this.btns.active) {
                    var t = this.btns.item.convertToWorldSpaceAR(cc.Vec2.ZERO),
                        e = this.btns.parent.convertToNodeSpaceAR(t);
                    this.btns.setPosition(e);
                }
            }),
            (e.prototype.OnDown = function () {
                var t = this.btns.item,
                    e = h.DataMgr.select_indexs.indexOf(t.id - 1);
                (t.index = e),
                    (h.DataMgr.select_indexs[e] = -1),
                    this.SetItemShow(t, -1),
                    this.kong_item.push(t),
                    (this.btns.active = !1),
                    a.default.emitEvent_csryw(s.ryw_Event.ChangeSelectIndexs),
                    h.DataMgr.SaveSelectIndexs();
            }),
            (e.prototype.OnPut = function () {
                if (0 != this.kong_item.length) {
                    this.btns.active = !1;
                    var t = this.kong_item.pop();
                    (h.DataMgr.select_indexs[t.index] = this.btns.item.id - 1),
                        this.SetItemShow(t, this.btns.item.id),
                        a.default.emitEvent_csryw(s.ryw_Event.ChangeSelectIndexs),
                        h.DataMgr.SaveSelectIndexs();
                } else this.ShowPutHint();
            }),
            (e.prototype.ShowPutHint = function () {
                if (!this.in_hint_ing) {
                    this.in_hint_ing = !0;
                    for (var t = 0; t < this.items.childrenCount; t++)
                        cc.tween(this.items.children[t])
                            .to(0.5, {scale: 1.1})
                            .to(0.5, {scale: 1})
                            .union()
                            .repeatForever()
                            .start();
                }
            }),
            (e.prototype.HidePutHint = function () {
                if (this.in_hint_ing) {
                    this.in_hint_ing = !1;
                    for (var t = 0; t < this.items.childrenCount; t++)
                        cc.Tween.stopAllByTarget(this.items.children[t]), (this.items.children[t].scale = 1);
                }
            }),
            (e.prototype.OnInfo = function () {
                var t = this;
                this.loading ||
                    ((this.loading = !0),
                    l.default.loadBundlePrefab(
                        "subResGame",
                        "ViewPrefab/InfoP",
                        function (e) {
                            t.loading = !1;
                            var o = cc.instantiate(e);
                            t.node.addChild(o), o.getComponent(f.default).SetId(t.btns.item.id);
                        },
                        this
                    ));
            }),
            (e.prototype.SetItemShow = function (t, e) {
                var o = t.getChildByName("img").getComponent(cc.Sprite),
                    n = t.getChildByName("lab").getComponent(cc.Label);
                if (((t.id = e), e && e > 0)) {
                    var i = u.ConfigMgr.card_config.get(e);
                    (n.string = i.name),
                        l.default.loadBundleSpriteFrame(
                            "subResGame",
                            "Textures/items/" + i.img + "_" + h.DataMgr.GetHeroAniShowLv(i.index - 1),
                            function (t) {
                                (o.spriteFrame = t), (o.node.scale = d.default.GetSizeScale(o.node, 100));
                            },
                            this
                        );
                } else (o.spriteFrame = null), (n.string = "");
            }),
            (e.prototype.OnBack = function () {
                this.node.destroy();
            }),
            (e.prototype.OnSet = function () {
                c.default.openSettingDialog(handleFM_csryw(function () {}, this));
            }),
            r([y(cc.Node)], e.prototype, "items", void 0),
            r([y(cc.Node)], e.prototype, "item", void 0),
            r([y(cc.Node)], e.prototype, "content", void 0),
            r([y(cc.Node)], e.prototype, "btns", void 0),
            r([y(cc.Node)], e.prototype, "info_btn", void 0),
            r([y(cc.Node)], e.prototype, "put_btn", void 0),
            r([y(cc.Node)], e.prototype, "down_btn", void 0),
            r([_], e)
        );
    })(cc.Component);
o.default = g;
