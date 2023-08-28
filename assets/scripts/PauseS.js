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
var s = t("SoundMgr"),
    a = t("VibrateMgr"),
    c = t("ResMgr"),
    l = t("Utils"),
    d = t("GameSceneS"),
    u = t("BuffMgr"),
    h = t("BaseViewS"),
    f = cc._decorator,
    p = f.ccclass,
    _ = f.property,
    y = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.content = null),
                (e.music_opened = null),
                (e.music_closed = null),
                (e.sound_closed = null),
                (e.sound_opened = null),
                (e.vibrat_closed = null),
                (e.vibrat_opened = null),
                (e.item = null),
                (e.desHint = null),
                (e.des_lab = null),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.onLoad = function () {
                this.updateShowSound(), this.updateShowMusic(), this.updateShowVibrat();
                for (var t = u.BuffMgr.GetNowBuffs(), e = 0; e < t.length; e++) this.AddItem(e);
            }),
            (e.prototype.AddItem = function (t) {
                var e,
                    o = u.BuffMgr.now_buffs_data[t],
                    n = cc.instantiate(this.item);
                (e = o.des),
                    -1 != o.des.indexOf("*")
                        ? (e = e.replace("*", o.num.toString()))
                        : -1 != o.des.indexOf("@")
                        ? (e = e.replace("@", o.num.toString()))
                        : (o.num = 0),
                    (n.des = e),
                    c.default.loadBundleSpriteFrame(
                        "subResGame",
                        "Textures/Select/" + o.img,
                        function (t) {
                            var e = n.getChildByName("img");
                            (e.getComponent(cc.Sprite).spriteFrame = t), (e.scale = l.default.GetSizeScale(e, 72));
                        },
                        this
                    ),
                    this.content.addChild(n),
                    n.on(cc.Node.EventType.TOUCH_START, this.OnStart, this),
                    n.on(cc.Node.EventType.TOUCH_END, this.OnEnd, this),
                    n.on(cc.Node.EventType.TOUCH_CANCEL, this.OnEnd, this);
            }),
            (e.prototype.OnStart = function (t) {
                var e = t.target;
                this.ShowHint(e);
            }),
            (e.prototype.OnEnd = function (t) {
                var e = t.target;
                this.desHint.item == e && this.HideHint();
            }),
            (e.prototype.ShowHint = function (t) {
                var e = t.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    o = this.desHint.parent.convertToNodeSpaceAR(e);
                (o.y += 60),
                    this.desHint.setPosition(o),
                    (this.des_lab.string = t.des),
                    (this.desHint.active = !0),
                    (this.desHint.item = t);
            }),
            (e.prototype.HideHint = function () {
                this.desHint.active = !1;
            }),
            (e.prototype.OnOpen = function () {
                console.log("暂停游戏~~~~~~~~~"), d.default.ins.PauseGame();
            }),
            (e.prototype.OnGoon = function () {
                d.default.ins.ResumeGame(), this.OnClose();
            }),
            (e.prototype.OnExit = function () {
                this.node.destroy(), d.default.ins.ResumeGame(), d.default.ins.Surrender();
            }),
            (e.prototype.onDestroy = function () {
                d.default.ins.ResumeGame();
            }),
            (e.prototype.OnSound = function () {
                s.default.seteffEnabled_csryw(!s.default.iseffEnabled_csryw()), this.updateShowSound();
            }),
            (e.prototype.OnMusic = function () {
                s.default.setSoundEnabled_csryw(!s.default.isSoundEnabled_csryw()), this.updateShowMusic();
            }),
            (e.prototype.OnVibrat = function () {
                (a.default.isEnable_csryw = !a.default.isEnable_csryw), this.updateShowVibrat();
            }),
            (e.prototype.updateShowSound = function () {
                s.default.iseffEnabled_csryw()
                    ? ((this.sound_opened.active = !0), (this.sound_closed.active = !1))
                    : ((this.sound_closed.active = !0), (this.sound_opened.active = !1));
            }),
            (e.prototype.updateShowMusic = function () {
                s.default.isSoundEnabled_csryw()
                    ? ((this.music_opened.active = !0), (this.music_closed.active = !1))
                    : ((this.music_closed.active = !0), (this.music_opened.active = !1));
            }),
            (e.prototype.updateShowVibrat = function () {
                a.default.isEnable_csryw
                    ? ((this.vibrat_opened.active = !0), (this.vibrat_closed.active = !1))
                    : ((this.vibrat_closed.active = !0), (this.vibrat_opened.active = !1));
            }),
            r([_(cc.Node)], e.prototype, "content", void 0),
            r([_(cc.Node)], e.prototype, "music_opened", void 0),
            r([_(cc.Node)], e.prototype, "music_closed", void 0),
            r([_(cc.Node)], e.prototype, "sound_closed", void 0),
            r([_(cc.Node)], e.prototype, "sound_opened", void 0),
            r([_(cc.Node)], e.prototype, "vibrat_closed", void 0),
            r([_(cc.Node)], e.prototype, "vibrat_opened", void 0),
            r([_(cc.Node)], e.prototype, "item", void 0),
            r([_(cc.Node)], e.prototype, "desHint", void 0),
            r([_(cc.Label)], e.prototype, "des_lab", void 0),
            r([p], e)
        );
    })(h.default);
o.default = y;
