var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.GuideMgr = void 0);
var n = t("ResMgr"),
    i = t("Item"),
    r = t("GameSceneS"),
    s = (function () {
        function t() {
            var t = this;
            (this.gude_step = 0),
                (this.click_back = null),
                (this.poss = {
                    1: {x: 0, y: -362},
                    2: {x: -55, y: -189},
                    3: {x: 60, y: 44},
                    4: {x: 235, y: -134},
                    5: {x: 0, y: -235},
                    9: {x: 0, y: -235}
                }),
                (this.strs = [
                    "",
                    "移动物品三消合成升级",
                    "四消可以合成两个高等级的单位",
                    "五消可以合成三个",
                    "合成勾玉会获得宝箱，可以进行一次三选一，选择强力buff",
                    "一次性合成勾玉越多，宝箱等级越高，最多五个勾玉合成",
                    "上方为步数，步数用完进入战斗状态，战斗状态时，只有人物形态可以攻击",
                    "旁边为当前关卡波次",
                    "击败怪物会获得经验，升级时进行一次三选一，选择强力buff",
                    "击败boss关卡后，棋盘只会保留当前等级最高的6个单位进入下一波",
                    "战斗结束后，会获得步数再次进行部署，boss波次会有预警提示"
                ]),
                (this.control_poss = {
                    1: {x: 2, y: 1, x1: 3, y1: 1},
                    2: {x: 2, y: 2, x1: 2, y1: 3},
                    3: {x: 3, y: 4, x1: 3, y1: 5},
                    4: {x: 4, y: 3, x1: 5, y1: 3}
                }),
                (this.handtype = [0, 4, 3, 5, 2, 1, 1, 1, 1, 9]),
                (this.swap_direction = {
                    "2_1": i.DirectionType.right,
                    "3_1": i.DirectionType.left,
                    "2_2": i.DirectionType.top,
                    "2_3": i.DirectionType.buttom,
                    "3_4": i.DirectionType.top,
                    "3_5": i.DirectionType.buttom,
                    "4_3": i.DirectionType.right,
                    "5_3": i.DirectionType.left
                }),
                n.default.loadBundlePrefab(
                    "subResGame",
                    "otherPrefab/guidance",
                    function (e) {
                        (t.node = cc.instantiate(e)),
                            (t.guide_node = t.node.getChildByName("guide")),
                            (t.guide_img_node = t.node.getChildByName("guide_img")),
                            (t.hint_lab = t.node
                                .getChildByName("fz")
                                .getChildByName("hgxy_gq_09")
                                .getChildByName("hint_lab")
                                .getComponent(cc.Label)),
                            (t.click_node = t.node.getChildByName("click")),
                            (t.hand = t.node.getChildByName("hand")),
                            (t.hand.opacity = 0),
                            (t.block = t.node.getChildByName("block"));
                    },
                    this
                );
        }
        return (
            (t.getInstance = function () {
                return t._instance || ((t._instance = new t()), (this.in_guide = !0)), t._instance;
            }),
            (t.prototype.ShowNode = function (e, o, n) {
                var i = this;
                if (
                    (console.log("当前显示步骤：", this.gude_step, this.strs[this.gude_step]),
                    (this.hint_lab.string = ""),
                    !t.show_guideing)
                ) {
                    if (
                        ((t.show_guideing = !0),
                        cc.director.getScene().getChildByName("Canvas").addChild(this.node, 10),
                        (this.hand.opacity = 0),
                        (this.node.opacity = 0),
                        (this.block.active = !0),
                        r.default.ins.BlockTop(20),
                        (this.guide_node.scale = 10),
                        e)
                    ) {
                        (this.guide_node.active = !1), (this.guide_img_node.active = !0);
                        var s = this.node.convertToNodeSpaceAR(e);
                        this.guide_img_node.setPosition(s),
                            (this.guide_img_node.getComponent(cc.Mask).spriteFrame = o),
                            (this.guide_img_node.width = o.getRect().width),
                            (this.guide_img_node.height = o.getRect().height),
                            (this.node.getChildByName("fz").y = 250);
                    } else (this.guide_node.active = !0), (this.guide_img_node.active = !1);
                    cc.tween(this.node)
                        .to(0.3, {opacity: 255})
                        .call(function () {
                            if (e) {
                                console.log("新手引导中~~~");
                                var t = i.node.convertToNodeSpaceAR(e);
                                i.typingAni(i.hint_lab, i.strs[i.gude_step], function () {
                                    r.default.ins.CloseBlockTop(),
                                        (i.block.active = !1),
                                        i.ShowHand(t, i.handtype[i.gude_step]),
                                        n
                                            ? ((i.click_node.active = !0),
                                              i.click_node.on(cc.Node.EventType.TOUCH_END, i.Click, i))
                                            : (i.click_node.active = !1);
                                });
                            } else
                                (i.guide_node.x = i.poss[i.gude_step].x),
                                    (i.guide_node.y = i.poss[i.gude_step].y),
                                    i.typingAni(i.hint_lab, i.strs[i.gude_step], function () {
                                        cc.tween(i.guide_node)
                                            .to(1, {scale: 1}, {easing: cc.easing.bounceInOut})
                                            .call(function () {
                                                r.default.ins.CloseBlockTop(),
                                                    (i.block.active = !1),
                                                    i.ShowHand(
                                                        new cc.Vec2(i.poss[i.gude_step].x, i.poss[i.gude_step].y),
                                                        i.handtype[i.gude_step]
                                                    ),
                                                    n
                                                        ? ((i.click_node.active = !0),
                                                          i.click_node.on(cc.Node.EventType.TOUCH_END, i.Click, i))
                                                        : (i.click_node.active = !1);
                                            })
                                            .start();
                                    });
                        })
                        .start();
                }
            }),
            (t.prototype.HideNode = function () {
                var e = this;
                (t.show_guideing = !1),
                    cc
                        .tween(this.node)
                        .to(0.3, {opacity: 0})
                        .call(function () {
                            e.click_node.off(cc.Node.EventType.TOUCH_END, e.Click, e),
                                e.node.parent.removeChild(e.node);
                        })
                        .start();
            }),
            (t.prototype.Click = function () {
                this.click_back && (this.click_back(), (this.click_back = null));
            }),
            (t.prototype.NextStep = function (t, e, o) {
                this.gude_step++, (this.click_back = o), this.ShowNode(t, e, o);
            }),
            (t.prototype.HideGuide = function () {
                this.HideNode(), cc.tween(this.hand).to(0.3, {opacity: 0}).start();
            }),
            (t.prototype.CheckControlPos = function (t, e) {
                var o = this.control_poss[this.gude_step];
                return (o.x == t && o.y == e) || (o.x1 == t && o.y1 == e);
            }),
            (t.prototype.CheckCanMoveDirection = function (t, e, o) {
                return this.swap_direction[t + "_" + e] == o;
            }),
            (t.prototype.ShowHand = function (t, e) {
                cc.Tween.stopAllByTarget(this.hand),
                    cc.tween(this.hand).to(0.5, {opacity: 255}).start(),
                    this.hand.setPosition(t),
                    1 == e
                        ? ((this.hand.y -= 100),
                          cc
                              .tween(this.hand)
                              .to(0.5, {scale: 1.05})
                              .to(0.5, {scale: 0.95})
                              .union()
                              .repeatForever()
                              .start())
                        : 2 == e
                        ? ((this.hand.x -= 50),
                          (this.hand.y -= 70),
                          cc.tween(this.hand).by(1, {x: 120}).by(1, {x: -120}).union().repeatForever().start())
                        : 3 == e
                        ? ((this.hand.y -= 130),
                          (this.hand.x += 50),
                          cc.tween(this.hand).by(1, {y: 120}).by(1, {y: -120}).union().repeatForever().start())
                        : 4 == e
                        ? ((this.hand.x += 90),
                          (this.hand.y -= 70),
                          cc.tween(this.hand).by(1, {x: -120}).by(1, {x: 120}).union().repeatForever().start())
                        : 5 == e &&
                          ((this.hand.y += 70),
                          (this.hand.x += 50),
                          cc.tween(this.hand).by(1, {y: -120}).by(1, {y: 120}).union().repeatForever().start());
            }),
            (t.prototype.typingAni = function (t, e, o) {
                var n = this,
                    i = "",
                    s = e.split(""),
                    a = s.length,
                    c = 0;
                (this.func = function () {
                    (i += s[c]), (t.string = i), ++c == a && (r.default.ins.unschedule(n.func), o && o());
                }),
                    r.default.ins.schedule(n.func, 0.1, cc.macro.REPEAT_FOREVER, 0);
            }),
            (t.in_guide = !1),
            (t.show_guideing = !1),
            (t._instance = null),
            t
        );
    })();
o.GuideMgr = s;
