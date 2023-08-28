var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("AppConfig"),
    i = t("AppPlatform"),
    r = t("AppSwitchConfig"),
    s = (function () {
        function t() {}
        return (
            (t.random_csryw = function (t) {
                return Math.floor(Math.random() * t);
            }),
            (t.convertDesignToFrameSize_csryw = function (t) {
                var e = t.convertToWorldSpace(cc.v2(0, t.height)),
                    o = t.width,
                    n = cc.view.getFrameSize(),
                    i = cc.view.getVisibleSize(),
                    r = cc.director.getScene().getChildByName("Canvas"),
                    s = 1,
                    a = 0,
                    c = 0;
                if (r) {
                    var l = r.getComponent(cc.Canvas);
                    if (l.fitWidth && l.fitHeight) {
                        var d = n.width / i.width,
                            u = n.height / i.height;
                        d < u
                            ? ((s = d), (c = i.width), (a = (n.height * i.width) / n.width))
                            : ((s = u), (a = i.height), (c = (n.width * i.height) / n.height)),
                            (a = (a - i.height) / 2),
                            (c = (c - i.width) / 2);
                    } else l.fitWidth ? (s = n.width / i.width) : l.fitHeight && (s = n.height / i.height);
                }
                var h = i.height - e.y + a,
                    f = e.x * s + c,
                    p = h * s,
                    _ = o * s,
                    y = {};
                return (y.left = f), (y.top = p), (y.width = _), y;
            }),
            (t.colorHex2Rgb_csryw = function (t) {
                var e = cc.color(75, 154, 228);
                if (6 == t.length) {
                    var o = parseInt("0x" + t.slice(0, 2)),
                        n = parseInt("0x" + t.slice(2, 4)),
                        i = parseInt("0x" + t.slice(4, 6));
                    (e.r = o), (e.g = n), (e.b = i);
                }
                return e;
            }),
            (t.checkVersions_csryw = function () {
                var t = n.default.Versions_csryw;
                return (
                    null === t ||
                    "" === t ||
                    (i.default.is_TT_GAME_csryw()
                        ? t === r.default.getInstance_csryw().getAppSwitchData_csryw().ttcfg_csryw.ttversions_csryw
                        : i.default.is_OPPO_GAME_csryw()
                        ? t === r.default.getInstance_csryw().getAppSwitchData_csryw().oppocfg_csryw.oppoversions_csryw
                        : i.default.is_QQ_PLAY_csryw()
                        ? t === r.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.qqversions_csryw
                        : i.default.is_WECHAT_GAME_csryw()
                        ? t === r.default.getInstance_csryw().getAppSwitchData_csryw().version_csryw
                        : !i.default.is_WECHAT_GAME_csryw() ||
                          t === r.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.vivoversions_csryw)
                );
            }),
            (t.ryw_OriginStageWidth_csryw = 1334),
            (t.ryw_OriginStageHeight_csryw = 750),
            (t.ryw_grayscaleMat_csryw = [
                0.3086, 0.6094, 0.082, 0, 0, 0.3086, 0.6094, 0.082, 0, 0, 0.3086, 0.6094, 0.082, 0, 0, 0, 0, 0, 1, 0
            ]),
            t
        );
    })();
o.default = s;
