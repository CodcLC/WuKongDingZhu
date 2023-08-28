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
    u = t("ConfigMgr"),
    h = t("DataMgr"),
    f = t("GuideMgr"),
    p = t("FightBaseS"),
    _ = cc._decorator,
    y = _.ccclass,
    g =
        (_.property,
        (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
                i(e, t),
                (e.prototype.start = function () {
                    c.default.playSound_csryw("shengli"),
                        -3 != h.DataMgr.extra_lv &&
                            (d.ChatDataMgr.AddEndNeedChat(h.DataMgr.user_gamedata.select_level),
                            !f.GuideMgr.in_guide &&
                                h.DataMgr.user_gamedata.select_level == h.DataMgr.user_gamedata.unlock_max_level &&
                                h.DataMgr.user_gamedata.unlock_max_level < u.ConfigMgr.enmeyLevel_config.levels_len &&
                                h.DataMgr.SetUnlockMaxLevel(h.DataMgr.user_gamedata.unlock_max_level + 1));
                }),
                (e.prototype.onDestroy = function () {
                    -3 != h.DataMgr.extra_lv
                        ? l.BuffMgr.GetNowBuffs().length > 5 && !f.GuideMgr.in_guide
                            ? s.default.openStayBuffPage(function () {
                                  a.default.getInstance_csryw().onLoadToWorldScene_csryw(!0, function () {
                                      var t = d.ChatDataMgr.EndLevelUnlock(h.DataMgr.user_gamedata.select_level);
                                      -1 != t && s.default.openLtPage(t);
                                  });
                              })
                            : a.default.getInstance_csryw().onLoadToWorldScene_csryw(!0, function () {
                                  var t;
                                  f.GuideMgr.in_guide
                                      ? (console.log("胜利2222解锁：：", h.DataMgr.user_gamedata.select_level),
                                        -1 != (t = d.ChatDataMgr.EndLevelUnlock(-1)) && s.default.openLtPage(t))
                                      : (console.log("胜利解锁：：", h.DataMgr.user_gamedata.select_level),
                                        -1 !=
                                            (t = d.ChatDataMgr.EndLevelUnlock(h.DataMgr.user_gamedata.select_level)) &&
                                            s.default.openLtPage(t));
                              })
                        : a.default.getInstance_csryw().onLoadToWorldScene_csryw(!0, function () {
                              s.default.openLtPage(1062, !0), h.DataMgr.AddWinExtra(-3);
                          });
                }),
                r([y], e)
            );
        })(p.default));
o.default = g;
