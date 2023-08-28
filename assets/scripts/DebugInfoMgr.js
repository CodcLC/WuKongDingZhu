var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("AppConfig"),
    i = t("AppSwitchConfig"),
    r = t("EventEnum"),
    s = t("EventMgr"),
    a = t("HttpUnit"),
    c = t("AppPlatform"),
    l = t("DateUtils"),
    d = t("Utilit"),
    u = t("WudianMgr"),
    h = (function () {
        function t() {}
        return (
            (t.setDebug_csryw = function () {
                var t = this;
                if (1 == i.default.getInstance_csryw().getAppSwitchData_csryw().debuginfo_csryw) {
                    (this.isOpenDebug_csryw = !0),
                        s.default.onEvent_csryw(
                            r.ryw_Event.ryw_App_OnUpdateIpBlockState_csryw,
                            function () {
                                (t.isNetIpBlockState_csryw = !0),
                                    t.debugPanel_csryw.active && (t.updateFrameInfo_csryw(), t.updateItem_csryw());
                            },
                            this
                        ),
                        s.default.onEvent_csryw(
                            r.ryw_Event.ryw_PlatformLoginState_csryw,
                            function (e) {
                                e.state;
                                var o = e.info;
                                t.addDebugInfo_csryw(o);
                            },
                            this
                        ),
                        s.default.onEvent_csryw(
                            r.ryw_Event.ryw_NetLoginState_csryw,
                            function (e) {
                                e.state;
                                var o = e.info;
                                t.addDebugInfo_csryw(o);
                            },
                            this
                        ),
                        s.default.onEvent_csryw(
                            r.ryw_Event.ryw_NetUserDataState_csryw,
                            function (e) {
                                e.state;
                                var o = e.info;
                                t.addDebugInfo_csryw(o);
                            },
                            this
                        ),
                        s.default.onEvent_csryw(
                            r.ryw_Event.ryw_Umeng_csryw,
                            function (e) {
                                var o = e.event;
                                t.debugUmengInfoList_csryw[o]
                                    ? (t.debugUmengInfoList_csryw[o] = t.debugUmengInfoList_csryw[o] + 1)
                                    : (t.debugUmengInfoList_csryw[o] = 1),
                                    t.updateItem_csryw();
                            },
                            this
                        );
                    var e = cc.view.getVisibleSize();
                    cc.view.getFrameSize(),
                        console.log("启动了debug展示"),
                        (this.debugNode_csryw = new cc.Node()),
                        cc.game.addPersistRootNode(this.debugNode_csryw),
                        (this.debugNode_csryw.width = e.width),
                        (this.debugNode_csryw.height = e.height),
                        (this.debugNode_csryw.anchorX = 0),
                        (this.debugNode_csryw.anchorY = 0),
                        (this.debugNode_csryw.x = 0),
                        (this.debugNode_csryw.y = 0);
                    var o = cc.size(180, 120),
                        n = this.createNode_csryw(this.debugNode_csryw, cc.v2(0, e.height - o.height), cc.Color.WHITE);
                    n.setContentSize(o),
                        n.on(cc.Node.EventType.TOUCH_START, function () {}, this),
                        (n._touchListener.onTouchBegan = function (e) {
                            var i = n.convertToNodeSpaceAR(e.getLocation());
                            if (!(i.x < 0 || i.y < 0 || i.x > o.width || i.y > o.height)) {
                                if (t.isOpenStartClick_csryw)
                                    t.debugPanel_csryw.active ||
                                        (t.updateFrameInfo_csryw(),
                                        t.updateItem_csryw(),
                                        (t.debugPanel_csryw.active = !0));
                                else {
                                    var r = l.DateUtils.getNowTime_csryw();
                                    r - t.clickTime_csryw <= 500
                                        ? ((t.touchClickSum_csryw = t.touchClickSum_csryw + 1),
                                          t.touchClickSum_csryw > 10 && (t.isOpenStartClick_csryw = !0))
                                        : (t.touchClickSum_csryw = 0),
                                        (t.clickTime_csryw = r);
                                }
                                return !0;
                            }
                        }),
                        n._touchListener.setSwallowTouches(!1);
                    var c = cc.size(0.98 * e.width, 0.7 * e.height);
                    (this.debugPanel_csryw = this.createNode_csryw(
                        this.debugNode_csryw,
                        cc.v2((e.width - c.width) / 2, (e.height - c.height) / 2),
                        cc.Color.WHITE,
                        c
                    )),
                        (this.debugPanel_csryw.active = !1),
                        this.debugPanel_csryw.addComponent(cc.Button);
                    var d = this.createNode_csryw(this.debugPanel_csryw, cc.v2(0, 0), cc.Color.GRAY, c);
                    (this.scrollview_csryw = d.addComponent(cc.ScrollView)),
                        (this.scrollview_csryw.horizontal = !1),
                        (this.scrollview_csryw.vertical = !0),
                        (this.scrollview_csryw.inertia = !0),
                        (this.scrollview_csryw.brake = 0.75);
                    var u = this.createNode_csryw(d, cc.v2(0, 0), cc.Color.WHITE);
                    u.setContentSize(c),
                        u.addComponent(cc.Mask),
                        (u.anchorY = 1),
                        (u.y = c.height),
                        (this.content_csryw = this.createNode_csryw(u, cc.v2(0, 0), cc.Color.GRAY, c)),
                        (this.content_csryw.anchorY = 1),
                        (this.scrollview_csryw.content = this.content_csryw),
                        this.createButton_csryw(
                            this.debugPanel_csryw,
                            cc.v2(0, c.height),
                            "关闭",
                            cc.color(255, 180, 180),
                            cc.Color.RED,
                            cc.size(100, 70),
                            function () {
                                t.debugPanel_csryw.active = !1;
                            }
                        ),
                        this.createButton_csryw(
                            this.debugPanel_csryw,
                            cc.v2(c.width - 170, c.height),
                            "清理缓存",
                            cc.color(255, 180, 180),
                            cc.Color.RED,
                            cc.size(170, 70),
                            function () {
                                a.default.saveGameData_csryw(
                                    "{}",
                                    function (t) {
                                        1 == t.code ? console.log("存档成功") : console.log("存档失败");
                                    },
                                    function () {
                                        console.log("存档失败");
                                    }
                                ),
                                    t.showToast_csryw("清理用户数据，并提交！请重启");
                            }
                        );
                    var h = cc.size(0.9 * c.width, 100);
                    (this.showInfoNode_csryw = this.createNode_csryw(
                        this.debugNode_csryw,
                        cc.v2(e.width / 2, e.height / 2),
                        cc.color(175, 100, 170),
                        h
                    )),
                        (this.showInfoNode_csryw.anchorX = 0.5),
                        (this.showInfoNode_csryw.anchorY = 0.5),
                        (this.showInfoLabel_csryw = this.createLabel_csryw(
                            this.showInfoNode_csryw,
                            cc.v2(0, 0),
                            "",
                            cc.Color.RED
                        ).getComponent(cc.Label)),
                        (this.showInfoLabel_csryw.node.anchorX = 0.5),
                        (this.showInfoLabel_csryw.node.anchorY = 0.5),
                        (this.showInfoNode_csryw.active = !1);
                }
            }),
            (t.addDebugInfo_csryw = function (t) {
                this.isOpenDebug_csryw && this.debugInfoList_csryw.push(t);
            }),
            (t.updateFrameInfo_csryw = function () {
                var t = this;
                (this.debugFrameInfoList_csryw = []),
                    (function () {
                        var e,
                            o = d.default.checkVersions_csryw();
                        e = c.default.is_TT_GAME_csryw()
                            ? "ttcfg:<" +
                              i.default.getInstance_csryw().getAppSwitchData_csryw().ttcfg_csryw.ttversions_csryw +
                              ">"
                            : c.default.is_OPPO_GAME_csryw()
                            ? "oppocfg:<" +
                              i.default.getInstance_csryw().getAppSwitchData_csryw().oppocfg_csryw.oppoversions_csryw +
                              ">"
                            : c.default.is_QQ_PLAY_csryw()
                            ? "qqcfg:<" +
                              i.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.qqversions_csryw +
                              ">"
                            : c.default.is_WECHAT_GAME_csryw()
                            ? "vivocfg:<" +
                              i.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.vivoversions_csryw +
                              ">"
                            : "version:<" + i.default.getInstance_csryw().getAppSwitchData_csryw().version_csryw + ">";
                        var r = "游戏名字:[" + n.default.GameName_csryw + "],gameid:[" + n.default.gameid_csryw + "]\n";
                        (r =
                            (r = r + n.default.ResServer_csryw + "\n") +
                            "本地版本号:[" +
                            n.default.Versions_csryw +
                            "]\n远端版本号:[" +
                            e +
                            "]\n版本比较结果:" +
                            (o ? "true" : "false")),
                            t.debugFrameInfoList_csryw.push(r);
                    })(),
                    (function () {
                        var e = 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wudian_csryw,
                            o = i.default.getInstance_csryw().getAppSwitchData_csryw().wudianTimeAvaliable_csryw,
                            n = u.default.ryw_GetIpBlocked_csryw(),
                            r = c.default.getLaunchOptionsSync_csryw().scene;
                        c.default.is_TT_GAME_csryw() && ((e = !0), (o = !0));
                        for (
                            var s = !0,
                                a = i.default.getInstance_csryw().getAppSwitchData_csryw().wudianSceneList_csryw,
                                l = 0;
                            l < a.length;
                            l++
                        )
                            r == a[l] && (s = !1);
                        var d = e && s && n && o,
                            h =
                                "ip屏蔽接口调用:" +
                                (t.isNetIpBlockState_csryw ? "成功" : "失败") +
                                "\n误点最终结果：[" +
                                (d ? "有" : "没有") +
                                "]\n当前场景值:[" +
                                r +
                                "]\nip没有屏蔽:[" +
                                (n ? "是" : "不是") +
                                "]\n场景没有屏蔽:[" +
                                (s ? "是" : "不是") +
                                "]\n误点开关:[" +
                                (e ? "打开" : "关闭") +
                                "],\n时间开关:[" +
                                (o ? "打开" : "关闭") +
                                "]";
                        t.debugFrameInfoList_csryw.push(h);
                    })();
            }),
            (t.showToast_csryw = function (t) {
                var e = this;
                cc.Tween.stopAllByTarget(this.showInfoNode_csryw),
                    (this.showInfoLabel_csryw.string = t),
                    (this.showInfoNode_csryw.active = !0),
                    (this.showInfoNode_csryw.opacity = 0),
                    (this.showInfoNode_csryw.scale = 0.75),
                    cc
                        .tween(this.showInfoNode_csryw)
                        .to(0.25, {opacity: 255, scale: 1}, {easing: "backOut"})
                        .delay(2)
                        .call(function () {
                            e.showInfoNode_csryw.active = !1;
                        })
                        .start();
            }),
            (t.updateItem_csryw = function () {
                for (var t = [], e = 0; e < this.debugFrameInfoList_csryw.length; e++) {
                    var o = this.debugFrameInfoList_csryw[e];
                    t.push(o);
                }
                var n = "友盟统计开始：\n";
                for (var i in this.debugUmengInfoList_csryw)
                    Object.prototype.hasOwnProperty.call(this.debugUmengInfoList_csryw, i) &&
                        (n = "事件：" + n + i + ",次数: " + this.debugUmengInfoList_csryw[i] + "\n");
                for (n += "友盟统计结束!", t.push(n), e = 0; e < this.debugInfoList_csryw.length; e++)
                    (o = this.debugInfoList_csryw[e]), t.push(o);
                var r = t.length - this.debugLabelList_csryw.length;
                if (r > 0)
                    for (e = 0; e < r; e++)
                        ((c = this.createLabel_csryw(this.content_csryw, cc.v2(0, 0), "", cc.Color.BLACK).getComponent(
                            cc.Label
                        )).node.width = this.content_csryw.width),
                            (c.overflow = cc.Label.Overflow.RESIZE_HEIGHT),
                            (c.horizontalAlign = cc.Label.HorizontalAlign.LEFT),
                            (c.node.anchorY = 1),
                            this.debugLabelList_csryw.push(c);
                for (e = 0; e < this.debugLabelList_csryw.length; e++)
                    (o = this.debugLabelList_csryw[e]).node.active = !1;
                var s = 0,
                    a = !1;
                for (e = 0; e < t.length; e++) {
                    var c;
                    (o = t[e]),
                        ((c = this.debugLabelList_csryw[e]).string = o),
                        (c.node.y = -s),
                        (c.node.active = !0),
                        c._forceUpdateRenderData(),
                        (s = s + c.node.height + 5),
                        a
                            ? ((a = !1), (c.node.color = cc.color(0, 0, 0)))
                            : ((a = !0), (c.node.color = cc.color(122, 22, 22)));
                }
                this.content_csryw.height = s;
            }),
            (t.createLabel_csryw = function (t, e, o, n) {
                var i = this.createNode_csryw(t, e, n),
                    r = i.addComponent(cc.Label);
                return (r.fontSize = 30), (r.lineHeight = 32), (r.string = o), i;
            }),
            (t.createNode_csryw = function (t, e, o, n) {
                var i = new cc.Node();
                return (
                    n &&
                        (i.setContentSize(n),
                        (i.addComponent(cc.Sprite).spriteFrame = this.createSpriteFrame_csryw(n))),
                    (i.color = o),
                    t.addChild(i),
                    (i.x = e.x),
                    (i.y = e.y),
                    (i.anchorX = 0),
                    (i.anchorY = 0),
                    i
                );
            }),
            (t.createButton_csryw = function (t, e, o, n, i, r, s) {
                var a = this.createNode_csryw(t, e, n, r);
                return (
                    a.addComponent(cc.Button),
                    (a.color = n),
                    s && a.on("click", s, this),
                    this.createLabel_csryw(t, e, o, i),
                    a
                );
            }),
            (t.createSpriteFrame_csryw = function (t) {
                for (
                    var e = new cc.Texture2D(),
                        o = new cc.SpriteFrame(),
                        n = t.width * t.height * 4,
                        i = new Uint8Array(n),
                        r = 0;
                    r < n;
                    r += 4
                )
                    (i[r] = 255), (i[r + 1] = 255), (i[r + 2] = 255), (i[r + 3] = 255);
                return (
                    e.initWithData(i, cc.Texture2D.PixelFormat.RGBA8888, t.width, t.height),
                    o.setTexture(e),
                    o.setRect(cc.rect(0, 0, t.width, t.height)),
                    o
                );
            }),
            (t.debugNode_csryw = null),
            (t.debugPanel_csryw = null),
            (t.scrollview_csryw = null),
            (t.content_csryw = null),
            (t.debugInfoList_csryw = new Array()),
            (t.debugFrameInfoList_csryw = new Array()),
            (t.debugLabelList_csryw = new Array()),
            (t.debugUmengInfoList_csryw = {}),
            (t.showInfoNode_csryw = null),
            (t.showInfoLabel_csryw = null),
            (t.isOpenDebug_csryw = !1),
            (t.isOpenStartClick_csryw = !1),
            (t.touchClickSum_csryw = 0),
            (t.clickTime_csryw = 0),
            (t.isNetIpBlockState_csryw = !1),
            t
        );
    })();
o.default = h;
