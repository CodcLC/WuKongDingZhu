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
    a = t("SoundMgr"),
    c = t("VibrateMgr"),
    l = t("User"),
    d = t("AppPlatform"),
    u = t("DialogUIBase"),
    h = cc._decorator,
    f = h.ccclass,
    p = h.property,
    _ = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.EventEnumView_csryw = {}),
                (e.soundCloseNode = null),
                (e.vibratCloseNode = null),
                (e.music_opened = null),
                (e.music_closed = null),
                (e.sound_closed = null),
                (e.sound_opened = null),
                (e.vibrat_closed = null),
                (e.vibrat_opened = null),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.initView_csryw = function () {
                var e = this;
                t.prototype.initView_csryw.call(this);
                var o = this.childNode("butSound", this.showNode),
                    n = this.childNode("butMusic", this.showNode),
                    i = this.childNode("butVibrat", this.showNode);
                (this.soundCloseNode = this.childNode("close", o)),
                    (this.vibratCloseNode = this.childNode("close", i)),
                    this.updateShowSound(),
                    this.updateShowMusic(),
                    this.updateShowVibrat(),
                    this.onClick(
                        o,
                        function () {
                            a.default.seteffEnabled_csryw(!a.default.iseffEnabled_csryw()), e.updateShowSound();
                        },
                        this
                    ),
                    this.onClick(
                        n,
                        function () {
                            a.default.setSoundEnabled_csryw(!a.default.isSoundEnabled_csryw()), e.updateShowMusic();
                        },
                        this
                    ),
                    this.onClick(
                        i,
                        function () {
                            (c.default.isEnable_csryw = !c.default.isEnable_csryw), e.updateShowVibrat();
                        },
                        this
                    ),
                    this.onClick(
                        this.childNode("butClose", this.showNode),
                        function () {
                            e.closeDialog();
                        },
                        this
                    );
            }),
            (e.prototype.updateShowSound = function () {
                a.default.iseffEnabled_csryw()
                    ? ((this.sound_opened.active = !0), (this.sound_closed.active = !1))
                    : ((this.sound_closed.active = !0), (this.sound_opened.active = !1));
            }),
            (e.prototype.updateShowMusic = function () {
                a.default.isSoundEnabled_csryw()
                    ? ((this.music_opened.active = !0), (this.music_closed.active = !1))
                    : ((this.music_closed.active = !0), (this.music_opened.active = !1));
            }),
            (e.prototype.updateShowVibrat = function () {
                c.default.isEnable_csryw
                    ? ((this.vibrat_opened.active = !0), (this.vibrat_closed.active = !1))
                    : ((this.vibrat_closed.active = !0), (this.vibrat_opened.active = !1));
            }),
            (e.prototype.CopyOpenid = function () {
                l.default.getGameOpenid() &&
                    d.default.is_TT_GAME_csryw() &&
                    window.tt.setClipboardData({
                        data: l.default.getGameOpenid(),
                        success: function () {
                            s.default.openToast("复制成功");
                        },
                        fail: function () {
                            s.default.openToast("复制失败");
                        }
                    });
            }),
            r([p(cc.Node)], e.prototype, "music_opened", void 0),
            r([p(cc.Node)], e.prototype, "music_closed", void 0),
            r([p(cc.Node)], e.prototype, "sound_closed", void 0),
            r([p(cc.Node)], e.prototype, "sound_opened", void 0),
            r([p(cc.Node)], e.prototype, "vibrat_closed", void 0),
            r([p(cc.Node)], e.prototype, "vibrat_opened", void 0),
            r([f], e)
        );
    })(u.default);
o.default = _;
