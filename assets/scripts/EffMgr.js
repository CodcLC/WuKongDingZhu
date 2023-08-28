var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.EffMgr = void 0);
var n = t("ResSubMgr"),
    i = t("FMMainScene"),
    r = t("GameSceneS"),
    s = (function () {
        function t() {}
        return (
            (t.GetLab = function (t) {
                return this.labs[t] && this.labs[t].length > 0
                    ? this.labs[t].pop()
                    : cc.instantiate(n.ResSubMgr.getPrefabBySubGame(t)).getComponent(cc.Label);
            }),
            (t.PutLab = function (t, e) {
                this.sps[t] || (this.sps[t] = []), this.sps[t].push(e);
            }),
            (t.ShowLab = function (t, e, o, i, s) {
                var a = this;
                void 0 === i && (i = 1), void 0 === s && (s = r.default.ins.top_eff_node);
                var c = this.GetLab(e);
                c.string = Math.ceil(o).toString();
                var l = t.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    d = s.convertToNodeSpaceAR(l);
                s.addChild(c.node), c.node.setPosition(d);
                c.node.scale *= 1.2 * i;
                var u = c.node.scale;
                n.EnumSubGameRes.white_lab,
                    cc
                        .tween(c.node)
                        .by(0.5, {y: 50})
                        .call(function () {
                            s.removeChild(c.node), a.PutLab(e, c);
                        })
                        .start(),
                    cc
                        .tween(c.node)
                        .by(0.1, {scale: 0.5 * u})
                        .by(0.1, {scale: 0.5 * -u})
                        .start();
            }),
            (t.GetSp = function (t) {
                return this.sps[t] && this.sps[t].length > 0
                    ? this.sps[t].pop()
                    : cc.instantiate(n.ResSubMgr.getPrefabBySubGame(t)).getComponent(sp.Skeleton);
            }),
            (t.PutSp = function (t, e) {
                this.sps[t] || (this.sps[t] = []), this.sps[t].push(e);
            }),
            (t.PlaySp = function (t, e, o, n) {
                var i = this;
                void 0 === n && (n = r.default.ins.buttom_eff_node);
                var s = this.GetSp(e),
                    a = t.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    c = n.convertToNodeSpaceAR(a);
                n.addChild(s.node),
                    s.node.setPosition(c),
                    s.setAnimation(0, o, !1),
                    s.setCompleteListener(function () {
                        s.setCompleteListener(null), n.removeChild(s.node), i.PutSp(e, s);
                    });
            }),
            (t.PlaySpTwo = function (t, e, o, n, i) {
                var s = this;
                void 0 === i && (i = r.default.ins.buttom_eff_node);
                var a = this.GetSp(e),
                    c = t.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    l = i.convertToNodeSpaceAR(c);
                i.addChild(a.node),
                    a.node.setPosition(l),
                    a.setAnimation(0, o, !1),
                    a.setCompleteListener(function () {
                        a.setCompleteListener(null),
                            a.setAnimation(0, n, !1),
                            a.setCompleteListener(function () {
                                a.setCompleteListener(null), i.removeChild(a.node), s.PutSp(e, a);
                            });
                    });
            }),
            (t.PlayOncesSp = function (t, e, o, n, i) {
                var r = t.node.parent,
                    s = t.node.getPosition();
                if (i) {
                    var a = t.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
                        c = i.convertToNodeSpaceAR(a);
                    (t.node.parent = i), t.node.setPosition(c);
                }
                (t.node.active = !0),
                    t.setAnimation(0, e, !1),
                    t.setCompleteListener(function () {
                        (t.node.active = !1),
                            t.setCompleteListener(null),
                            o && o.call(n),
                            i && r && ((t.node.parent = r), t.node.setPosition(s));
                    });
            }),
            (t.createFlyGold = function (t, e, o, n, s, a, c) {
                void 0 === o && (o = null),
                    void 0 === n && (n = 60),
                    void 0 === s && (s = 130),
                    void 0 === a && (a = cc.Vec2.ZERO),
                    void 0 === c && (c = cc.Vec2.ZERO),
                    i.default.ins
                        ? i.default.ins.flygod.createFlyGold(
                              t,
                              i.default.ins.money_pos,
                              i.default.ins.node,
                              e,
                              o,
                              n,
                              s,
                              a,
                              c
                          )
                        : r.default.ins &&
                          r.default.ins.flygod.createFlyGold(
                              t,
                              r.default.ins.money_pos,
                              r.default.ins.node,
                              e,
                              o,
                              n,
                              s,
                              a,
                              c
                          );
            }),
            (t.labs = {}),
            (t.sps = {}),
            t
        );
    })();
o.EffMgr = s;
