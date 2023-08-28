var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.cocosWxcfg =
        o.BDCfg =
        o.VVcfg =
        o.TT2Cfg =
        o.TTCfg =
        o.QQCfg =
        o.OPPOCfg =
        o.WXCfg =
        o.Quickgamecfg =
        o.AppSwitchData =
        void 0);
var n = t("AppConfig"),
    i = t("LogUtils"),
    r = t("FMInterface"),
    s = (function() {
        function t() {
            (this.version_csryw = ""),
            (this.banner_csryw = 0),
            (this.wudian_csryw = 0),
            (this.debuginfo_csryw = 0),
            (this.isNetWorkGame_csryw = 1),
            (this.wudianAvailableTime_csryw = {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
                11: 0,
                12: 0,
                13: 0,
                14: 0,
                15: 0,
                16: 0,
                17: 0,
                18: 0,
                19: 0,
                20: 0,
                21: 0,
                22: 0,
                23: 0
            }),
            (this.homePageExportTimeControl_csryw = {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
                11: 0,
                12: 0,
                13: 0,
                14: 0,
                15: 0,
                16: 0,
                17: 0,
                18: 0,
                19: 0,
                20: 0,
                21: 0,
                22: 0,
                23: 0
            }),
            (this.mailiang_csryw = 1),
            (this.mailianglist_csryw = new Array()),
            (this.mailiangSceneList_csryw = new Array()),
            (this.wxWuDianBanners_csryw = new Array()),
            (this.recreateBannerIDList_csryw = new Array()),
            (this.bannerRecreateTime_csryw = 5),
            (this.kuangdianjiange_csryw = 0),
            (this.btnMoveTimer_csryw = 1),
            (this.bannerMoveTimer_csryw = 0.5),
            (this.bannerFreshTimer_csryw = 200),
            (this.bannerCreateFailNum_csryw = 3),
            (this.bannerTodayBannerMax_csryw = 10),
            (this.adSwitch_csryw = 1),
            (this.wudianSceneList_csryw = new Array()),
            (this.continueBtnDelayTime_csryw = 2),
            (this.bannerShowTime_csryw = 30),
            (this.fakeBtn_csryw = 0),
            (this.popAd_csryw = 0),
            (this.continueBanner_csryw = 0),
            (this.continueBannerShowTime_csryw = 2),
            (this.continueBannerHideTime_csryw = 2),
            (this.oppocfg_csryw = new l()),
            (this.qqcfg_csryw = new d()),
            (this.ttcfg_csryw = new u()),
            (this.vivocfg_csryw = new f()),
            (this.wxcfg_csryw = new c()),
            (this.tt2cfg_csryw = new h()),
            (this.cocosWxcfg_csryw = new _()),
            (this.bdcfg_csryw = new p()),
            (this.quickgamecfg_csryw = new a());
        }
        return (
            Object.defineProperty(t.prototype, "wudianTimeAvaliable_csryw", {
                get: function() {
                    return 1 == this.wudianAvailableTime_csryw[new Date().getHours()];
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "homePageExportIsOpen_csryw", {
                get: function() {
                    return 1 == Number(this.homePageExportTimeControl_csryw["" + new Date().getHours()]);
                },
                enumerable: !1,
                configurable: !0
            }),
            t
        );
    })();
o.AppSwitchData = s;
var a = function() {
    (this.autoExport = 0),
    (this.bigExportColor = "416e8d"),
    (this.bigExportColor_g = "416e8d"),
    (this.bigExportBannerType = 100),
    (this.bigExportShowBannerTime = 1),
    (this.bigExportHideBannerTime = 2),
    (this.hotplayBannerType = 100),
    (this.hotplayShowBannerTime = 1),
    (this.hotplayHideBannerTime = 2),
    (this.recommendBannerType = 100),
    (this.recommendShowBannerTime = 1),
    (this.recommendButMoveTime = 0.2),
    (this.endBannerType = 100),
    (this.endShowBannerTime = 1),
    (this.endButMoveTime = 0.2),
    (this.crazyShowBanner = [3, 10]),
    (this.playButVideo = 0),
    (this.crazyBannerHideTime = 0);
};
o.Quickgamecfg = a;
var c = function() {
    (this.kuangdian_csryw = 1),
    (this.kuangdianBanner_csryw = 0),
    (this.kuangdianLevelSpcacing_csryw = 0),
    (this.ForceSkip_csryw = 0),
    (this.SlideSkip_csryw = 0),
    (this.tc_ForceSkip_csryw = 0),
    (this.tc_SlideSkip_csryw = 0),
    (this.phb_ForceSkip_csryw = 0),
    (this.phb_SlideSkip_csryw = 0),
    (this.tc_continueBanner_csryw = 0),
    (this.MainPop_csryw = 0),
    (this.hyrw_ForceSkip_csryw = 0),
    (this.hyrw_SlideSkip_csryw = 0),
    (this.hyrw_continueBanner_csryw = 0),
    (this.handShow_csryw = 1),
    (this.firstOpen_csryw = 0),
    (this.startVideo_csryw = 0),
    (this.mainBackBtn_csryw = 1),
    (this.mainMoreBtn_csryw = 1),
    (this.mainItemBtn_csryw = 1),
    (this.mainExportShow_csryw = 0),
    (this.isJumpHotPlay_csryw = 0),
    (this.moreGameShowLevel_csryw = 0),
    (this.setUserScan_csryw = 0);
};
o.WXCfg = c;
var l = function() {
    (this.yuansheng_csryw = 100),
    (this.yuanshengSwitch_csryw = 1),
    (this.addToDesktop_csryw = 0),
    (this.oppoversions_csryw = ""),
    (this.btnShowTimer_csryw = 0),
    (this.indexAdSwitch_csryw = 0),
    (this.endAdSwitch_csryw = 0),
    (this.yuansheng2_csryw = 100),
    (this.yuanshengSwitch2_csryw = 1);
};
o.OPPOCfg = l;
var d = function() {
    (this.kuangdianBanner_csryw = 0),
    (this.kuangdianBox_csryw = 0),
    (this.box_csryw = 0),
    (this.weiyi_csryw = 0),
    (this.qqversions_csryw = "");
};
o.QQCfg = d;
var u = function() {
    (this.moreGameSwitch_csryw = 0),
    (this.kuangdianBanner_csryw = 0),
    (this.luping_csryw = 0),
    (this.ttversions_csryw = "");
};
o.TTCfg = u;
var h = function() {
    (this.startSwitch_csryw = 0),
    (this.signInSwitch_csryw = 0),
    (this.getSwitch_csryw = 0),
    (this.useSwitch_csryw = 0),
    (this.reliveSwitch_csryw = 0),
    (this.screenCapSwitch_csryw = 0),
    (this.boxSwitch_csryw = 0);
};
o.TT2Cfg = h;
var f = function() {
    (this.yuanshengSwitch_csryw = 1),
    (this.yuansheng_csryw = 100),
    (this.yuanshengSwitch2_csryw = 1),
    (this.yuansheng2_csryw = 100),
    (this.chapingSwitch_csryw = 1),
    (this.chaping_csryw = 100),
    (this.addToDesktop_csryw = 1),
    (this.vivoversions_csryw = ""),
    (this.btnShowTimer_csryw = 1);
};
o.VVcfg = f;
var p = function() {
    (this.version_csryw = ""), (this.signInSwitch_csryw = 0), (this.taskVideo_csryw = 1), (this.btnDelayTime_csryw = 0);
};
o.BDCfg = p;
var _ = function() {
    (this.loopAd = {
        rollWayLeftUp_csryw: 0,
        rollWaitNum_csryw: 1,
        rollWaitTime_csryw: 1,
        roolSpeed_csryw: 3,
        bgColor_csryw: "62d5ff"
    }),
    (this.skinTrial = {
        videoIcon_csryw: 0,
        wudian_csryw: 0,
        timeClick_csryw: 0,
        butMoveTime_csryw: 0,
        bannerShowTime_csryw: 0,
        bannerHideTime_csryw: 0,
        butDelayShowTime_csryw: 0,
        rollWayLeftUp_csryw: 1,
        rollWaitNum_csryw: 1,
        rollWaitTime_csryw: 1,
        roolSpeed_csryw: 3
    }),
    (this.revival = {
        videoIcon_csryw: 0,
        wudian_csryw: 0,
        timeClick_csryw: 0,
        butMoveTime_csryw: 0,
        bannerShowTime_csryw: 0,
        bannerHideTime_csryw: 0,
        butDelayShowTime_csryw: 0,
        rollWayLeftUp_csryw: 1,
        rollWaitNum_csryw: 1,
        rollWaitTime_csryw: 1,
        roolSpeed_csryw: 3
    }),
    (this.moreGoodGame = {
        bgColor_csryw: "3485fb",
        maskColor_csryw: "",
        mouseEventIsUp_csryw: 0,
        cancelIntercept_csryw: 1,
        wudian_csryw: 0,
        timeClick_csryw: 0,
        butMoveTime_csryw: 0,
        bannerShowTime_csryw: 0,
        bannerHideTime_csryw: 0,
        butDelayShowTime_csryw: 0,
        rollWayLeftUp_csryw: 1,
        rollWaitNum_csryw: 1,
        rollWaitTime_csryw: 1,
        roolSpeed_csryw: 3
    }),
    (this.bigLoopAd = {
        bgColor_csryw: "3485fb",
        maskColor_csryw: "",
        wudian_csryw: 0,
        timeClick_csryw: 0,
        butMoveTime_csryw: 0,
        bannerShowTime_csryw: 0,
        bannerHideTime_csryw: 0,
        butDelayShowTime_csryw: 0,
        rollWayLeftUp_csryw: 1,
        rollWaitNum_csryw: 1,
        rollWaitTime_csryw: 1,
        roolSpeed_csryw: 3
    }),
    (this.settlePage = {
        bgColor_csryw: "3485fb",
        maskColor_csryw: "",
        wudian_csryw: 0,
        timeClick_csryw: 0,
        butMoveTime_csryw: 0,
        bannerShowTime_csryw: 0,
        bannerHideTime_csryw: 0,
        butDelayShowTime_csryw: 0,
        rollWayLeftUp_csryw: 1,
        rollWaitNum_csryw: 1,
        rollWaitTime_csryw: 1,
        roolSpeed_csryw: 3
    }),
    (this.moreGoodGame2 = {
        bgColor_csryw: "3485fb",
        maskColor_csryw: "",
        butDelayShowTime_csryw: 0,
        rollWayLeftUp_csryw: 1,
        rollWaitNum_csryw: 1,
        rollWaitTime_csryw: 1,
        roolSpeed_csryw: 3
    });
};
o.cocosWxcfg = _;
var y = (function() {
    function t() {
        this._data_csryw = new Array();
    }
    return (
        (t.getInstance_csryw = function() {
            return t._instance_csryw;
        }),
        (t.prototype.loadUrlConfig_csryw = function(t, e) {
            var o = this;
            if ("" == n.default.ResServer_csryw)
                return (
                    i.LogUtils.warn_csryw("没有找到合适的AppswitchConfig 路径"),
                    this._data_csryw.push(new s()),
                    void(t && r.callFM_csryw(t))
                );
            // var a = n.default.ResServer_csryw + "/json/appswitch.json?" + new Date().getTime();
            cc.resources.load("json/appswitch", function(n, c) {
                if ((cc.assetManager.cacheManager && cc.assetManager.cacheManager.removeCache(a), n))
                    return i.LogUtils.error_csryw(n), o._data_csryw.push(new s()), void(e && r.callFM_csryw(e));
                o._data_csryw.length = 0;
                var l = c.json;
                if ((i.LogUtils.log_csryw("下载 appswitch.json>>>"), i.LogUtils.log_csryw(c), l))
                    for (var d = 0; d < l.length; ++d) {
                        var u = l[d],
                            h = new s();
                        (h.version_csryw = String(u.version)),
                        (h.banner_csryw = Number(u.banner)),
                        (h.wudian_csryw = Number(u.wudian)),
                        (h.debuginfo_csryw = Number(u.debuginfo)),
                        (h.isNetWorkGame_csryw = Number(u.netWorkgame)),
                        (h.wudianAvailableTime_csryw = Object(u.wudianTime)),
                        (h.homePageExportTimeControl_csryw = Object(u.homePageExportTimeControl));
                        var f = u.wxwudianbanners;
                        if (null != f)
                            for (var p = 0; p < f.length; ++p) {
                                var _ = String(f[p]);
                                h.wxWuDianBanners_csryw.push(_);
                            }
                        var y = u.recreateBannerIDList;
                        if (null != y)
                            for (p = 0; p < y.length; ++p)(_ = String(y[p])), h.recreateBannerIDList_csryw.push(_);
                        (h.bannerRecreateTime_csryw =
                            null != u.bannerRecreateTime ? Number(u.bannerRecreateTime) : h.bannerRecreateTime_csryw),
                        (h.kuangdianjiange_csryw =
                            null != u.kuangdianjiange ? Number(u.kuangdianjiange) : h.kuangdianjiange_csryw),
                        (h.btnMoveTimer_csryw = Number(u.btnMoveTimer)),
                        (h.bannerMoveTimer_csryw = Number(u.bannerMoveTimer)),
                        (h.bannerCreateFailNum_csryw = Number(u.createFailNum)),
                        (h.bannerFreshTimer_csryw = Number(u.bannerFreshTimer)),
                        (h.bannerTodayBannerMax_csryw = Number(u.todayBannerMax)),
                        (h.adSwitch_csryw = Number(u.adSwitch));
                        var g = u.wudianSceneList;
                        if (null != g)
                            for (p = 0; p < g.length; ++p) {
                                var w = Number(g[p]);
                                h.wudianSceneList_csryw.push(w);
                            }
                        if (
                            ((h.continueBtnDelayTime_csryw = Number(u.continueBtnDelayTime)),
                                (h.bannerShowTime_csryw = Number(u.bannerShowTime)),
                                (h.fakeBtn_csryw = null != u.fakeBtn ? Number(u.fakeBtn) : h.fakeBtn_csryw),
                                (h.popAd_csryw = null != u.popAd ? Number(u.popAd) : h.popAd_csryw),
                                (h.continueBanner_csryw =
                                    null != u.continueBanner ? Number(u.continueBanner) : h.continueBanner_csryw),
                                (h.continueBannerShowTime_csryw =
                                    null != u.continueBannerShowTime ?
                                    Number(u.continueBannerShowTime) :
                                    h.continueBannerShowTime_csryw),
                                (h.continueBannerHideTime_csryw =
                                    null != u.continueBannerHideTime ?
                                    Number(u.continueBannerHideTime) :
                                    h.continueBannerHideTime_csryw),
                                null != u.oppocfg)
                        ) {
                            var m = u.oppocfg;
                            (h.oppocfg_csryw.yuansheng_csryw = Number(m.yuansheng)),
                            (h.oppocfg_csryw.yuanshengSwitch_csryw = Number(m.yuanshengSwitch)),
                            (h.oppocfg_csryw.addToDesktop_csryw = Number(m.addToDesktop)),
                            (h.oppocfg_csryw.oppoversions_csryw = String(m.oppoversions)),
                            (h.oppocfg_csryw.btnShowTimer_csryw = Number(m.btnShowTimer)),
                            (h.oppocfg_csryw.indexAdSwitch_csryw = Number(m.indexAdSwitch)),
                            (h.oppocfg_csryw.endAdSwitch_csryw = Number(m.endAdSwitch)),
                            (h.oppocfg_csryw.yuansheng2_csryw =
                                null != m.yuansheng2 ? Number(m.yuansheng2) : h.oppocfg_csryw.yuansheng2_csryw),
                            (h.oppocfg_csryw.yuanshengSwitch2_csryw =
                                null != m.yuanshengSwitch2 ?
                                Number(m.yuanshengSwitch2) :
                                h.oppocfg_csryw.yuanshengSwitch2_csryw);
                        }
                        if (
                            (null != u.qqcfg &&
                                ((m = u.qqcfg),
                                    (h.qqcfg_csryw.kuangdianBanner_csryw = Number(m.kuangdianBanner)),
                                    (h.qqcfg_csryw.kuangdianBox_csryw = Number(m.kuangdianBox)),
                                    (h.qqcfg_csryw.box_csryw = Number(m.box)),
                                    (h.qqcfg_csryw.weiyi_csryw = Number(m.weiyi)),
                                    (h.qqcfg_csryw.qqversions_csryw = String(m.qqversions))),
                                null != u.ttcfg &&
                                ((m = u.ttcfg),
                                    (h.ttcfg_csryw.moreGameSwitch_csryw = Number(m.moreGameSwitch)),
                                    (h.ttcfg_csryw.kuangdianBanner_csryw = Number(m.kuangdianBanner)),
                                    (h.ttcfg_csryw.luping_csryw = Number(m.luping)),
                                    (h.ttcfg_csryw.ttversions_csryw = String(m.ttversions))),
                                null != u.tt2cfg &&
                                ((m = u.tt2cfg),
                                    (h.tt2cfg_csryw.startSwitch_csryw = Number(m.startSwitch)),
                                    (h.tt2cfg_csryw.signInSwitch_csryw = Number(m.signInSwitch)),
                                    (h.tt2cfg_csryw.getSwitch_csryw = Number(m.getSwitch)),
                                    (h.tt2cfg_csryw.useSwitch_csryw = Number(m.useSwitch)),
                                    (h.tt2cfg_csryw.reliveSwitch_csryw = Number(m.reliveSwitch)),
                                    (h.tt2cfg_csryw.screenCapSwitch_csryw = Number(m.screenCapSwitch)),
                                    (h.tt2cfg_csryw.boxSwitch_csryw = Number(m.boxSwitch))),
                                null != u.vivocfg &&
                                ((m = u.vivocfg),
                                    (h.vivocfg_csryw.yuanshengSwitch_csryw = Number(m.yuanshengSwitch)),
                                    (h.vivocfg_csryw.yuansheng_csryw = Number(m.yuansheng)),
                                    (h.vivocfg_csryw.yuanshengSwitch2_csryw = Number(m.yuanshengSwitch2)),
                                    (h.vivocfg_csryw.yuansheng2_csryw = Number(m.yuansheng2)),
                                    (h.vivocfg_csryw.chapingSwitch_csryw = Number(m.chapingSwitch)),
                                    (h.vivocfg_csryw.chaping_csryw = Number(m.chaping)),
                                    (h.vivocfg_csryw.addToDesktop_csryw = Number(m.addToDesktop)),
                                    (h.vivocfg_csryw.vivoversions_csryw = String(m.vivoversions)),
                                    (h.vivocfg_csryw.btnShowTimer_csryw = Number(m.btnShowTimer))),
                                null != u.wxcfg &&
                                ((m = u.wxcfg),
                                    (h.wxcfg_csryw.kuangdian_csryw = Number(m.kuangdian)),
                                    (h.wxcfg_csryw.kuangdianBanner_csryw = Number(m.kuangdianBanner)),
                                    (h.wxcfg_csryw.kuangdianLevelSpcacing_csryw = Number(m.kuangdianLevelSpcacing)),
                                    (h.wxcfg_csryw.ForceSkip_csryw = Number(m.ForceSkip)),
                                    (h.wxcfg_csryw.SlideSkip_csryw = Number(m.SlideSkip)),
                                    (h.wxcfg_csryw.tc_ForceSkip_csryw = Number(m.tc_ForceSkip)),
                                    (h.wxcfg_csryw.tc_SlideSkip_csryw = Number(m.tc_SlideSkip)),
                                    (h.wxcfg_csryw.phb_ForceSkip_csryw = Number(m.phb_ForceSkip)),
                                    (h.wxcfg_csryw.phb_SlideSkip_csryw = Number(m.phb_SlideSkip)),
                                    (h.wxcfg_csryw.tc_continueBanner_csryw = Number(m.tc_continueBanner)),
                                    (h.wxcfg_csryw.MainPop_csryw = Number(m.MainPop)),
                                    (h.wxcfg_csryw.hyrw_ForceSkip_csryw = Number(m.hyrw_ForceSkip)),
                                    (h.wxcfg_csryw.hyrw_SlideSkip_csryw = Number(m.hyrw_SlideSkip)),
                                    (h.wxcfg_csryw.hyrw_continueBanner_csryw = Number(m.hyrw_continueBanner)),
                                    (h.wxcfg_csryw.handShow_csryw = Number(m.handShow)),
                                    (h.wxcfg_csryw.firstOpen_csryw = Number(m.firstOpen)),
                                    (h.wxcfg_csryw.startVideo_csryw = Number(m.startVideo)),
                                    (h.wxcfg_csryw.mainBackBtn_csryw = Number(m.mainBackBtn)),
                                    (h.wxcfg_csryw.mainMoreBtn_csryw = Number(m.mainMoreBtn)),
                                    (h.wxcfg_csryw.mainItemBtn_csryw = Number(m.mainItemBtn)),
                                    (h.wxcfg_csryw.mainExportShow_csryw = Number(m.mainExportShow)),
                                    (h.wxcfg_csryw.isJumpHotPlay_csryw = Number(m.isJumpHotPlay)),
                                    (h.wxcfg_csryw.moreGameShowLevel_csryw = Number(m.moreGameShowLevel)),
                                    (h.wxcfg_csryw.setUserScan_csryw = Number(m.setUserScan))),
                                null != u.bdcfg &&
                                ((m = u.bdcfg),
                                    (h.bdcfg_csryw.btnDelayTime_csryw = Number(m.btnDelayTime)),
                                    (h.bdcfg_csryw.signInSwitch_csryw = Number(m.signInSwitch)),
                                    (h.bdcfg_csryw.taskVideo_csryw = Number(m.taskVideo)),
                                    (h.bdcfg_csryw.version_csryw = String(m.version))),
                                null != u.cocosWxConfig)
                        ) {
                            var v = (m = u.cocosWxConfig).loopAd,
                                b = m.skinTrial,
                                S = m.revival,
                                M = m.moreGoodGame,
                                k = m.bigLoopAd,
                                A = m.settlePage,
                                C = m.moreGoodGame2;
                            for (var O in h.cocosWxcfg_csryw.loopAd)
                                Object.prototype.hasOwnProperty.call(h.cocosWxcfg_csryw.loopAd, O) &&
                                (h.cocosWxcfg_csryw.loopAd[O] =
                                    "bgColor" == O ?
                                    null != v[O] ?
                                    String(v[O]) :
                                    h.cocosWxcfg_csryw.loopAd[O] :
                                    null != v[O] ?
                                    Number(v[O]) :
                                    h.cocosWxcfg_csryw.loopAd[O]);
                            for (var O in h.cocosWxcfg_csryw.skinTrial)
                                Object.prototype.hasOwnProperty.call(h.cocosWxcfg_csryw.skinTrial, O) &&
                                (h.cocosWxcfg_csryw.skinTrial[O] =
                                    null != b[O] ? Number(b[O]) : h.cocosWxcfg_csryw.skinTrial[O]);
                            for (var O in h.cocosWxcfg_csryw.revival)
                                Object.prototype.hasOwnProperty.call(h.cocosWxcfg_csryw.revival, O) &&
                                (h.cocosWxcfg_csryw.revival[O] =
                                    null != S[O] ? Number(S[O]) : h.cocosWxcfg_csryw.revival[O]);
                            for (var O in h.cocosWxcfg_csryw.moreGoodGame)
                                Object.prototype.hasOwnProperty.call(h.cocosWxcfg_csryw.moreGoodGame, O) &&
                                (h.cocosWxcfg_csryw.moreGoodGame[O] =
                                    "bgColor" == O || "maskColor" == O ?
                                    null != M[O] ?
                                    String(M[O]) :
                                    h.cocosWxcfg_csryw.moreGoodGame[O] :
                                    null != M[O] ?
                                    Number(M[O]) :
                                    h.cocosWxcfg_csryw.moreGoodGame[O]);
                            for (var O in h.cocosWxcfg_csryw.bigLoopAd)
                                Object.prototype.hasOwnProperty.call(h.cocosWxcfg_csryw.bigLoopAd, O) &&
                                (h.cocosWxcfg_csryw.bigLoopAd[O] =
                                    "bgColor" == O || "maskColor" == O ?
                                    null != k[O] ?
                                    String(k[O]) :
                                    h.cocosWxcfg_csryw.bigLoopAd[O] :
                                    null != k[O] ?
                                    Number(k[O]) :
                                    h.cocosWxcfg_csryw.bigLoopAd[O]);
                            for (var O in h.cocosWxcfg_csryw.settlePage)
                                Object.prototype.hasOwnProperty.call(h.cocosWxcfg_csryw.settlePage, O) &&
                                (h.cocosWxcfg_csryw.settlePage[O] =
                                    "bgColor" == O || "maskColor" == O ?
                                    null != A[O] ?
                                    String(A[O]) :
                                    h.cocosWxcfg_csryw.settlePage[O] :
                                    null != A[O] ?
                                    Number(A[O]) :
                                    h.cocosWxcfg_csryw.settlePage[O]);
                            for (var O in h.cocosWxcfg_csryw.moreGoodGame2)
                                Object.prototype.hasOwnProperty.call(h.cocosWxcfg_csryw.moreGoodGame2, O) &&
                                (h.cocosWxcfg_csryw.moreGoodGame2[O] =
                                    "bgColor" == O || "maskColor" == O ?
                                    null != C[O] ?
                                    String(C[O]) :
                                    h.cocosWxcfg_csryw.moreGoodGame2[O] :
                                    null != C[O] ?
                                    Number(C[O]) :
                                    h.cocosWxcfg_csryw.moreGoodGame2[O]);
                        }
                        if (null != u.quickgamecfg) {
                            (m = u.quickgamecfg),
                            (h.quickgamecfg_csryw.autoExport = Number(m.autoExport)),
                            (h.quickgamecfg_csryw.bigExportColor = m.bigExportColor),
                            (h.quickgamecfg_csryw.bigExportColor_g = m.bigExportColor_g),
                            (h.quickgamecfg_csryw.bigExportBannerType = Number(m.bigExportBannerType)),
                            (h.quickgamecfg_csryw.bigExportShowBannerTime = Number(m.bigExportShowBannerTime)),
                            (h.quickgamecfg_csryw.bigExportHideBannerTime = Number(m.bigExportHideBannerTime)),
                            (h.quickgamecfg_csryw.hotplayBannerType = Number(m.hotplayBannerType)),
                            (h.quickgamecfg_csryw.hotplayShowBannerTime = Number(m.hotplayShowBannerTime)),
                            (h.quickgamecfg_csryw.hotplayHideBannerTime = Number(m.hotplayHideBannerTime)),
                            (h.quickgamecfg_csryw.recommendBannerType = Number(m.recommendBannerType)),
                            (h.quickgamecfg_csryw.recommendShowBannerTime = Number(m.recommendShowBannerTime)),
                            (h.quickgamecfg_csryw.recommendButMoveTime = Number(m.recommendButMoveTime)),
                            (h.quickgamecfg_csryw.endBannerType = Number(m.endBannerType)),
                            (h.quickgamecfg_csryw.endShowBannerTime = Number(m.endShowBannerTime)),
                            (h.quickgamecfg_csryw.endButMoveTime = Number(m.endButMoveTime)),
                            (h.quickgamecfg_csryw.playButVideo =
                                null == m.playButVideo ? 0 : Number(m.playButVideo)),
                            (h.quickgamecfg_csryw.crazyBannerHideTime =
                                null == m.crazyBannerHideTime ? 0 : Number(m.crazyBannerHideTime));
                            var x = m.crazyShowBanner;
                            if (x) {
                                var P = x.split(",");
                                (h.quickgamecfg_csryw.crazyShowBanner[0] = Number(P[0])),
                                (h.quickgamecfg_csryw.crazyShowBanner[1] = Number(P[1]));
                            }
                        }
                        o._data_csryw.push(h);
                    }
                else o._data_csryw.push(new s());
                t && r.callFM_csryw(t);
            });
        }),
        (t.prototype.getAppSwitchData_csryw = function() {
            return this._data_csryw[0];
        }),
        (t._instance_csryw = new t()),
        t
    );
})();
o.default = y;