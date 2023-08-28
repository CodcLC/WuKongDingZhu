var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("AppPlatform"),
    i = (function () {
        function t() {}
        return (
            (t.vibrateShort_csryw = function () {
                if (t.isEnable_csryw) {
                    var e = "";
                    n.default.is_TT_GAME_csryw()
                        ? (e = "tt")
                        : n.default.is_WECHAT_GAME_csryw()
                        ? (e = "wx")
                        : n.default.is_OPPO_GAME_csryw() || n.default.is_VIVO_GAME_csryw()
                        ? (e = "qg")
                        : n.default.is_QQ_PLAY_csryw() && (e = "qq"),
                        "" != e && window[e].vibrateShort();
                }
            }),
            (t.vibrateLong_csryw = function () {
                if (t.isEnable_csryw) {
                    var e = "";
                    n.default.is_TT_GAME_csryw()
                        ? (e = "tt")
                        : n.default.is_WECHAT_GAME_csryw()
                        ? (e = "wx")
                        : n.default.is_OPPO_GAME_csryw() || n.default.is_VIVO_GAME_csryw()
                        ? (e = "qg")
                        : n.default.is_QQ_PLAY_csryw() && (e = "qq"),
                        "" != e && window[e].vibrateLong();
                }
            }),
            (t.vibrate_csryw = function (e) {
                if (t.isEnable_csryw) {
                    var o = 0,
                        i = e / 15,
                        r = null;
                    (r = function (e) {
                        setTimeout(function () {
                            t.vibrateShort_csryw(), ++o <= i && r(e);
                        }, e);
                    }),
                        n.default.is_TT_GAME_csryw()
                            ? ((i = e / 15), r(16))
                            : n.default.is_WECHAT_GAME_csryw()
                            ? ((i = e / 15), r(16))
                            : n.default.is_OPPO_GAME_csryw()
                            ? ((i = e / 20), r(21))
                            : n.default.is_QQ_PLAY_csryw() && ((i = e / 20), r(21));
                }
            }),
            (t.isEnable_csryw = !0),
            t
        );
    })();
o.default = i;
