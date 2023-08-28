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
    a = t("GameMgr"),
    c = t("SoundMgr"),
    l = t("BuffMgr"),
    d = t("ChatDataMgr"),
    u = t("DataMgr"),
    h = t("GuideMgr"),
    f = t("FightBaseS"),
    p = cc._decorator,
    _ = p.ccclass,
    y =
        (p.property,
        (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
                i(e, t),
                (e.prototype.start = function () {
                    c.default.playSound_csryw("shibai");
                }),
                (e.prototype.onDestroy = function () {
                    if (!this.is_go_home)
                        if (l.BuffMgr.GetNowBuffs().length > 5 && !h.GuideMgr.in_guide)
                            s.default.openStayBuffPage(function () {
                                a.default
                                    .getInstance_csryw()
                                    .onLoadToGameScene_csryw(u.DataMgr.user_gamedata.select_level);
                            });
                        else if (
                            (a.default
                                .getInstance_csryw()
                                .onLoadToGameScene_csryw(u.DataMgr.user_gamedata.select_level),
                            h.GuideMgr.in_guide)
                        ) {
                            var t = d.ChatDataMgr.EndLevelUnlock(-1);
                            -1 != t && s.default.openLtPage(t);
                        }
                }),
                r([_], e)
            );
        })(f.default));
o.default = y;
