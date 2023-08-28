var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("ResMgr"),
    i = t("LtPageS"),
    r = t("StayBuffS"),
    s = t("DialogToast"),
    a = t("DialogUIBase"),
    c = t("ResSubMgr"),
    l = (function () {
        function t() {}
        return (
            (t.openAddPowerDialog = function (e, o) {
                o = o || cc.director.getScene().getChildByName("Canvas");
                var n = c.ResSubMgr.getPrefabBySubFrame(c.EnumSubFrameRes.DialogAddPower),
                    i = cc.instantiate(n);
                o.addChild(i, t.DIALOG_INDEX), i.getComponent(a.default).openDialog(e);
            }),
            (t.openAddPowerAllDialog = function (e, o) {
                o = o || cc.director.getScene().getChildByName("Canvas");
                var n = c.ResSubMgr.getPrefabBySubFrame(c.EnumSubFrameRes.DialogAddPowerAll),
                    i = cc.instantiate(n);
                o.addChild(i, t.DIALOG_INDEX), i.getComponent(a.default).openDialog(e);
            }),
            (t.openSettingDialog = function (e) {
                var o = cc.director.getScene().getChildByName("Canvas"),
                    n = c.ResSubMgr.getPrefabBySubFrame(c.EnumSubFrameRes.DialogSetting),
                    i = cc.instantiate(n);
                o.addChild(i, t.DIALOG_INDEX), (i.group = "ui"), i.getComponent(a.default).openDialog(e);
            }),
            (t.openToast = function (e) {
                var o = cc.director.getScene().getChildByName("Canvas"),
                    n = c.ResSubMgr.getPrefabBySubFrame(c.EnumSubFrameRes.DialogToast),
                    i = cc.instantiate(n);
                o.addChild(i, t.TOAST_INDEX), (i.group = "ui"), i.getComponent(s.default).openTip(e);
            }),
            (t.openLtPage = function (e, o) {
                void 0 === o && (o = !1);
                var n = cc.director.getScene().getChildByName("Canvas"),
                    r = cc.instantiate(c.ResSubMgr.getPrefabBySubGame(c.EnumSubGameRes.LtPage));
                n.addChild(r, t.DIALOG_INDEX), (r.group = "ui"), r.getComponent(i.default).Init(e, o);
            }),
            (t.openStayBuffPage = function (e) {
                n.default.loadBundlePrefab(
                    "subResGame",
                    "ViewPrefab/StayBuffP",
                    function (o) {
                        var n = cc.director.getScene().getChildByName("Canvas"),
                            i = cc.instantiate(o);
                        n.addChild(i, t.DIALOG_INDEX), (i.group = "ui"), i.getComponent(r.default).SetCallBack(e);
                    },
                    this
                );
            }),
            (t.DIALOG_INDEX = 10),
            (t.TOAST_INDEX = 11),
            t
        );
    })();
o.default = l;
