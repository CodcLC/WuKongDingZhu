var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("User"),
    i = t("LogUtils"),
    r = t("AppConfig"),
    s = t("DataMgr"),
    a = t("FMMainScene"),
    c = t("GuideMgr"),
    l = t("ResMgr"),
    d = t("GameSceneS"),
    u = t("Utils"),
    h = (function () {
        function t() {
            (this.isFirstLoadAD = !1), (this.isWinner = !1), (this.loading = !1);
        }
        return (
            (t.getInstance_csryw = function () {
                return t._instance_csryw;
            }),
            (t.prototype.preloadScene_csryw = function () {
                i.LogUtils.warn_csryw("GameMgr.getInstance().preloadScene_csryw这里可以加载需要预加载的场景");
            }),
            (t.prototype.onLoadToWorldScene_csryw = function (t, e, o) {
                void 0 === t && (t = !1),
                    void 0 === o && (o = !1),
                    cc.director.loadScene("FMMainScene", function () {
                        console.log("跳转游戏场景 FMMainScene"),
                            t
                                ? o
                                    ? a.default.ins.OnStart(!0, o, e)
                                    : (a.default.ins.OnStart(!0, o, e), e && e())
                                : e && e();
                    });
            }),
            (t.prototype.onLoadToGameScene_csryw = function (t) {
                if (((s.DataMgr.user_gamedata.select_level = t), this.loading)) console.log("已经是加载状态");
                else {
                    u.default.ShowLoading(), (this.loading = !0);
                    var e = this;
                    s.DataMgr.OnLevelStartInit();
                    var o = "bg" + s.DataMgr.user_gamedata.select_level;
                    c.GuideMgr.in_guide && (o = "bg0"),
                        l.default.loadBundleSpriteFrame(
                            "subResGame",
                            "Textures/bg/" + o,
                            function (t) {
                                (d.default.bg_frame = t),
                                    cc.director.loadScene("GameScene", function () {
                                        u.default.HideLoading(),
                                            (e.loading = !1),
                                            console.log("跳转游戏场景 GameScene");
                                    });
                            },
                            this
                        );
                }
            }),
            (t.prototype.saveGameData_csryw = function () {
                cc.sys.localStorage.setItem("data" + r.default.AppID_csryw, n.default.getSaveData_csryw());
            }),
            (t._instance_csryw = new t()),
            t
        );
    })();
o.default = h;
