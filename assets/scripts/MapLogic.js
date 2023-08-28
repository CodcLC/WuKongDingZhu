var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.MapLogic = void 0);
var n = t("ResSubMgr"),
    i = t("Utils"),
    r = t("Item"),
    s = t("FZxxz"),
    a = t("FZzj"),
    c = t("GameSceneS"),
    l = t("SelectS"),
    d = t("BuffMgr"),
    u = t("ConfigMgr"),
    h = t("DataMgr"),
    f = t("GuideMgr"),
    p = (function () {
        function t() {
            (this.box_items = []),
                (this.items = new Array()),
                (this.fight_items = new Array()),
                (this.Pool_Items = {}),
                (this.needEliminates = []),
                (this.NeedToCheckItems = []),
                (this.row_x = 6),
                (this.col_y = 6),
                (this.width = 118.5),
                (this.height = 118.5),
                (this.eliminate_round = 0),
                (this.create_indexs = []);
        }
        return (
            (t.prototype.SerRowCol = function (t, e) {
                (this.row_x = t), (this.col_y = e);
            }),
            (t.prototype.SetInMapItem = function (t, e, o) {
                this.items[t][e] = o;
            }),
            (t.prototype.GetInMapItem = function (t, e) {
                return this.ItemIsExist(t, e) ? this.items[t][e] : (console.warn("拿取元素不存在", t, e), null);
            }),
            (t.prototype.RecoveryItem = function (t) {
                this.Pool_Items[t.GetIndex()] || (this.Pool_Items[t.GetIndex()] = []),
                    this.Pool_Items[t.GetIndex()].push(t);
            }),
            (t.prototype.GetPoolItem = function (t) {
                return this.Pool_Items[t] && this.Pool_Items[t].length > 0
                    ? this.Pool_Items[t].pop()
                    : cc.instantiate(n.ResSubMgr.getPrefabBySubGame(n.EnumSubGameRes.Item)).getComponent(r.default);
            }),
            (t.prototype.AddBoxItems = function (t) {
                -1 == this.box_items.indexOf(t) && this.box_items.push(t);
            }),
            (t.prototype.AddNeedEliminates = function (t) {
                -1 == this.needEliminates.indexOf(t) && this.needEliminates.push(t);
            }),
            (t.prototype.RemoveNeedEliminates = function (t) {
                var e = this.needEliminates.indexOf(t);
                -1 != e && this.needEliminates.splice(e, 1);
            }),
            (t.prototype.AddNeedToCheckItems = function (t) {
                -1 == this.NeedToCheckItems.indexOf(t) && this.NeedToCheckItems.push(t);
            }),
            (t.prototype.CheckInEliminates = function (t) {
                return -1 != this.needEliminates.indexOf(t);
            }),
            (t.prototype.SwapItem = function (t, e, o, n) {
                var i = this.items[t][e];
                (this.items[t][e] = this.items[o][n]), (this.items[o][n] = i);
            }),
            (t.prototype.AllItemsEnterEliminateStage = function () {
                for (var t = 0; t < this.items.length; t++)
                    for (var e = this.items[t], o = 0; o < e.length; o++) e[o].EnterEliminateStage();
            }),
            (t.prototype.GetRandomIndex = function () {
                return f.GuideMgr.in_guide
                    ? this.create_indexs[i.default.GetRandomNum(1, this.create_indexs.length - 1)]
                    : Math.random() < 0.1
                    ? 0
                    : this.create_indexs[i.default.GetRandomNum(1, this.create_indexs.length - 1)];
            }),
            (t.prototype.CreateItems = function () {
                this.create_indexs = [];
                for (var t = 0; t < h.DataMgr.select_indexs.length; t++)
                    -1 != h.DataMgr.select_indexs[t] && this.create_indexs.push(h.DataMgr.select_indexs[t]);
                var e = this.CreateNoTriplet(this.row_x, this.col_y, this.create_indexs);
                for (t = 0; t < this.row_x; t++) {
                    for (var o = new Array(), n = 0; n < this.col_y; n++) {
                        var i = e[t][n],
                            r = this.GetPoolItem(i);
                        c.default.ins.items_node.addChild(r.node), r.Init(i, t, n), o.push(r);
                    }
                    this.items.push(o);
                }
                for (t = 0; t < this.row_x; t++) {
                    for (o = new Array(), n = 0; n < this.col_y; n++) o.push(null);
                    this.fight_items.push(o);
                }
            }),
            (t.prototype.DetailXio = function (t, e, o) {
                if ((void 0 === o && (o = !0), !this.CheckInEliminates(this.GetInMapItem(t, e)))) {
                    for (
                        var n = 1, i = 1, r = !0, s = 1;
                        r &&
                        !(t + s > this.row_x) &&
                        this.ItemIsExist(t + s, e) &&
                        5 != this.GetInMapItem(t + s, e).GetStart();

                    )
                        (r = this.GetInMapItem(t, e).GetIndex() == this.GetInMapItem(t + s, e).GetIndex()) &&
                            (s++, i++);
                    for (
                        s = -1, r = !0;
                        r && !(t + s < 0) && this.ItemIsExist(t + s, e) && 5 != this.GetInMapItem(t + s, e).GetStart();

                    )
                        (r = this.GetInMapItem(t, e).GetIndex() == this.GetInMapItem(t + s, e).GetIndex()) &&
                            (s--, i++);
                    for (
                        s = 1, r = !0;
                        r &&
                        !(e + s > this.col_y) &&
                        this.ItemIsExist(t, e + s) &&
                        5 != this.GetInMapItem(t, e + s).GetStart();

                    )
                        (r = this.GetInMapItem(t, e).GetIndex() == this.GetInMapItem(t, e + s).GetIndex()) &&
                            (s++, n++);
                    for (
                        s = -1, r = !0;
                        r && !(e + s < 0) && this.ItemIsExist(t, e + s) && 5 != this.GetInMapItem(t, e + s).GetStart();

                    )
                        (r = this.GetInMapItem(t, e).GetIndex() == this.GetInMapItem(t, e + s).GetIndex()) &&
                            (s--, n++);
                    this.GetEliminate(i, n, t, e, o);
                }
            }),
            (t.prototype.GetEliminate = function (t, e, o, n, i) {
                void 0 === i && (i = !0);
                var s = !0,
                    a = 1,
                    l = [],
                    u = [],
                    f = [];
                if (e >= 3) {
                    (a = 1), (s = !0);
                    var p = this.GetInMapItem(o, n);
                    for (
                        this.AddNeedEliminates(this.GetInMapItem(o, n)), l.push(p);
                        s &&
                        !(n + a > this.col_y) &&
                        this.ItemIsExist(o, n + a) &&
                        5 != this.GetInMapItem(o, n + a).GetStart();

                    )
                        (s = this.GetInMapItem(o, n).GetIndex() == this.GetInMapItem(o, n + a).GetIndex()) &&
                            (this.AddNeedEliminates(this.GetInMapItem(o, n + a)),
                            l.push(this.GetInMapItem(o, n + a)),
                            a++);
                    for (
                        a = -1, s = !0;
                        s && !(n + a < 0) && this.ItemIsExist(o, n + a) && 5 != this.GetInMapItem(o, n + a).GetStart();

                    )
                        (s = this.GetInMapItem(o, n).GetIndex() == this.GetInMapItem(o, n + a).GetIndex()) &&
                            (this.AddNeedEliminates(this.GetInMapItem(o, n + a)),
                            l.unshift(this.GetInMapItem(o, n + a)),
                            a--);
                }
                if (t >= 3) {
                    for (
                        a = 1,
                            s = !0,
                            p = this.GetInMapItem(o, n),
                            this.AddNeedEliminates(this.GetInMapItem(o, n)),
                            f.push(p);
                        s &&
                        !(o + a > this.row_x) &&
                        this.ItemIsExist(o + a, n) &&
                        5 != this.GetInMapItem(o + a, n).GetStart();

                    )
                        (s = this.GetInMapItem(o, n).GetIndex() == this.GetInMapItem(o + a, n).GetIndex()) &&
                            (this.AddNeedEliminates(this.GetInMapItem(o + a, n)),
                            u.push(this.GetInMapItem(o + a, n)),
                            f.push(this.GetInMapItem(o + a, n)),
                            a++);
                    for (
                        a = -1, s = !0;
                        s && !(o + a < 0) && this.ItemIsExist(o + a, n) && 5 != this.GetInMapItem(o + a, n).GetStart();

                    )
                        (s = this.GetInMapItem(o, n).GetIndex() == this.GetInMapItem(o + a, n).GetIndex()) &&
                            (this.AddNeedEliminates(this.GetInMapItem(o + a, n)),
                            u.unshift(this.GetInMapItem(o + a, n)),
                            f.unshift(this.GetInMapItem(o + a, n)),
                            a--);
                }
                var _ = this.GetInMapItem(o, n);
                if (_ && 0 == _.GetIndex()) {
                    var y = function (t) {
                            1 == u.indexOf(_)
                                ? Math.random() > 0.5
                                    ? u[0].BeComeBox(t)
                                    : u[2].BeComeBox(t)
                                : u[1].BeComeBox(t);
                        },
                        g = function (t) {
                            1 == l.indexOf(_)
                                ? Math.random() > 0.5
                                    ? l[0].BeComeBox(t)
                                    : l[2].BeComeBox(t)
                                : l[1].BeComeBox(t);
                        };
                    3 == t && e < 3
                        ? _.BeComeBox(1)
                        : 4 == t && e < 3
                        ? _.BeComeBox(2)
                        : 5 == t && e < 3
                        ? _.BeComeBox(3)
                        : t < 3 && 3 == e
                        ? _.BeComeBox(1)
                        : t < 3 && 4 == e
                        ? _.BeComeBox(2)
                        : t < 3 && 5 == e
                        ? _.BeComeBox(3)
                        : 3 == t && 3 == e
                        ? (_.BeComeBox(1), _.GetIsVerticalDirection() ? y(1) : g(1))
                        : 3 == t && 4 == e
                        ? (_.BeComeBox(2), y(1))
                        : 3 == t && 5 == e
                        ? (_.BeComeBox(3), y(1))
                        : 4 == t && 3 == e
                        ? (_.BeComeBox(2), g(1))
                        : 5 == t && 3 == e
                        ? (_.BeComeBox(3), g(1))
                        : 4 == t && 4 == e
                        ? (_.BeComeBox(2), _.GetIsVerticalDirection() ? y(2) : g(2))
                        : 4 == t && 5 == e
                        ? (_.BeComeBox(3), _.GetIsVerticalDirection() ? y(2) : g(2))
                        : 5 == t && 4 == e
                        ? (_.BeComeBox(3), _.GetIsVerticalDirection() ? y(2) : g(2))
                        : 5 == t && 5 == e
                        ? (_.BeComeBox(3), _.GetIsVerticalDirection() ? y(3) : g(3))
                        : 3 == t && 6 == e
                        ? (_.BeComeBox(3), _.GetIsVerticalDirection() ? y(1) : g(1))
                        : 4 == t && 6 == e
                        ? (_.BeComeBox(3), _.GetIsVerticalDirection() ? y(2) : g(2))
                        : 5 == t && 6 == e
                        ? (_.BeComeBox(3), _.GetIsVerticalDirection() ? y(3) : g(3))
                        : 6 == t && 6 == e
                        ? (_.BeComeBox(3), _.GetIsVerticalDirection() ? y(3) : g(3))
                        : 6 == e
                        ? g(3)
                        : 6 == t && y(3);
                } else {
                    var w = function () {
                            1 == u.indexOf(_) ? (Math.random() > 0.5 ? u[0].UpLv() : u[2].UpLv()) : u[1].UpLv();
                        },
                        m = function () {
                            1 == l.indexOf(_) ? (Math.random() > 0.5 ? l[0].UpLv() : l[2].UpLv()) : l[1].UpLv();
                        },
                        v = function (t) {
                            for (var e = 1; e < t.length - 1; e++) t[e].UpLv();
                        };
                    if (
                        (3 == t && e < 3
                            ? _.direction == r.DirectionType.toroot
                                ? v(f)
                                : _.UpLv()
                            : 4 == t && e < 3
                            ? (_.UpLv(), v(u))
                            : 5 == t && e < 3
                            ? (_.UpLv(), v(u))
                            : t < 3 && 3 == e
                            ? _.direction == r.DirectionType.toroot
                                ? v(l)
                                : _.UpLv()
                            : t < 3 && 4 == e
                            ? v(l)
                            : t < 3 && 5 == e
                            ? v(l)
                            : 3 == t && 3 == e
                            ? (_.UpLv(), _.GetIsVerticalDirection() ? w() : m())
                            : 3 == t && 4 == e
                            ? (w(), v(l))
                            : 3 == t && 5 == e
                            ? (w(), v(l))
                            : 4 == t && 3 == e
                            ? (m(), _.UpLv(), v(u))
                            : 5 == t && 3 == e
                            ? (m(), _.UpLv(), v(u))
                            : 4 == t && 4 == e
                            ? (v(u), v(l))
                            : 4 == t && 5 == e
                            ? (v(u), v(l))
                            : 5 == t && 4 == e
                            ? (v(u), v(l))
                            : 5 == t && 5 == e
                            ? (v(u), v(l))
                            : 3 == t && 6 == e
                            ? (w(), v(l))
                            : 4 == t && 6 == e
                            ? (v(u), v(l))
                            : 5 == t && 6 == e
                            ? (v(u), v(l))
                            : 6 == t && 6 == e
                            ? (v(u), v(l))
                            : 6 == e
                            ? v(l)
                            : 6 == t && v(f),
                        this.eliminate_round > 0 && (t >= 3 || e >= 3))
                    ) {
                        h.DataMgr.AddStep(this.eliminate_round);
                        var b = _.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
                        c.default.ins.logic.ShowStepHint(b, this.eliminate_round);
                    }
                    (t >= 5 || e >= 5) && d.BuffMgr.GetFiveMoreUplv() && _.UpLv();
                }
            }),
            (t.prototype.Eliminate = function () {
                for (var t = this, e = this.needEliminates.length, o = 0; o < e; o++)
                    this.needEliminates[o].Eliminate();
                (this.needEliminates = []),
                    0 != e
                        ? (c.default.ins.BlockCenter(0.3),
                          this.eliminate_round++,
                          c.default.ins.scheduleOnce(function () {
                              t.Refresh();
                          }, 0.3),
                          c.default.ins.scheduleOnce(function () {
                              t.EliminatesOfRefresh();
                          }, 0.4))
                        : ((this.eliminate_round = 0),
                          this.CheckHaveBox() ||
                              (0 == h.DataMgr.step &&
                                  c.default.ins.scheduleOnce(function () {
                                      0 == t.NeedToCheckItems.length && c.default.ins.ALlEnterFightingStage();
                                  }, 0.1),
                              f.GuideMgr.in_guide &&
                                  f.GuideMgr.getInstance().gude_step < 5 &&
                                  c.default.ins.scheduleOnce(function () {
                                      f.GuideMgr.getInstance().NextStep();
                                  }, 1)));
            }),
            (t.prototype.CheckHaveBox = function () {
                var t = this;
                if (this.box_items.length > 0) {
                    var e = this.box_items.shift();
                    return 0 == e.box_lv
                        ? (console.warn("宝箱等级：：", e.box_lv), !0)
                        : (c.default.ins.BlockCenter(3),
                          e.OpenBox(function () {
                              var o = cc
                                  .instantiate(n.ResSubMgr.getPrefabBySubGame(n.EnumSubGameRes.SelectP))
                                  .getComponent(l.default);
                              c.default.ins.node.addChild(o.node),
                                  o.Init("box" + e.box_lv),
                                  t.AddNeedEliminates(e),
                                  t.Eliminate();
                          }, this),
                          !0);
                }
                return !1;
            }),
            (t.prototype.Refresh = function () {
                c.default.ins.BlockCenter(0.15);
                for (var t = 0; t < this.items.length; t++)
                    for (var e = this.items[t], o = 0, n = e.length - 1; n >= 0; n--)
                        if (null == e[n]) {
                            var i = null,
                                r = null;
                            for (r = n - 1; r >= 0; r--)
                                if (null != e[r]) {
                                    i = e[r];
                                    break;
                                }
                            if (null != i) (e[n] = i), (e[r] = null), i.ToPos(t, n, 0.15), this.AddNeedToCheckItems(i);
                            else {
                                o--;
                                var s = this.GetRandomIndex(),
                                    a = this.GetPoolItem(s);
                                c.default.ins.items_node.addChild(a.node),
                                    a.Init(s, t, o),
                                    (e[n] = a),
                                    e[n].ToPos(t, n, 0.15),
                                    e[n].EnterEliminateStage(),
                                    e[n].AddEvent(),
                                    d.BuffMgr.CheckHaveHighIndex(a.GetIndex()) && a.UpLv(!1),
                                    this.AddNeedToCheckItems(a);
                            }
                        }
            }),
            (t.prototype.EliminatesOfRefresh = function () {
                for (var t = this, e = []; 0 != this.NeedToCheckItems.length; ) {
                    var o = this.NeedToCheckItems.pop();
                    this.CheckPosHaveTriplet(o.x, o.y) && e.push(o);
                }
                0 != e.length
                    ? (c.default.ins.BlockCenter(0.5),
                      c.default.ins.scheduleOnce(function () {
                          for (; 0 != e.length; ) {
                              var o = e.pop();
                              t.DetailXio(o.x, o.y);
                          }
                          t.Eliminate();
                      }, 0.5))
                    : this.Eliminate();
            }),
            (t.prototype.CreateNoTriplet = function (t, e, o) {
                if (f.GuideMgr.in_guide) return u.ConfigMgr.base_config.guide_map;
                for (var n = new Array(), r = new Array(), s = 0; s < e; s++) {
                    for (var a = new Array(), c = 0; c < t; c++) {
                        var l = o[i.default.GetRandomNum(0, o.length - 1)];
                        for (
                            c > 1 && a[c - 1] == a[c - 2] && r.push(a[c - 1]),
                                s > 1 && n[s - 1][c] == n[s - 2][c] && r.push(n[s - 1][c]);
                            r.length > 0 && -1 != r.indexOf(l);

                        )
                            l = o[i.default.GetRandomNum(0, o.length - 1)];
                        a.push(l), r.length > 0 && r.splice(0, r.length);
                    }
                    n.push(a);
                }
                return n;
            }),
            (t.prototype.CheckPosHaveTriplet = function (t, e) {
                if (5 == this.items[t][e].GetStart()) return !1;
                for (var o = t - 2; o <= t; o++)
                    if (
                        this.ItemIsExist(o, e) &&
                        this.ItemIsExist(o + 1, e) &&
                        this.ItemIsExist(o + 2, e) &&
                        this.items[o][e].GetIndex() == this.items[o + 1][e].GetIndex() &&
                        this.items[o][e].GetIndex() == this.items[o + 2][e].GetIndex()
                    )
                        return !0;
                for (o = e - 2; o <= e; o++)
                    if (
                        this.ItemIsExist(t, o) &&
                        this.ItemIsExist(t, o + 1) &&
                        this.ItemIsExist(t, o + 2) &&
                        this.items[t][o].GetIndex() == this.items[t][o + 1].GetIndex() &&
                        this.items[t][o].GetIndex() == this.items[t][o + 2].GetIndex()
                    )
                        return !0;
                return !1;
            }),
            (t.prototype.ItemIsExist = function (t, e) {
                return !(t < 0 || t >= this.row_x || e < 0 || e >= this.col_y) && null != this.items[t][e];
            }),
            (t.prototype.GetNearInItems = function (t) {
                for (var e = this.items[0][0], o = 999999999, n = 0; n < this.items.length; n++)
                    for (var r = this.items[n], s = 0; s < r.length; s++)
                        if (r[s] && r[s] != t) {
                            var a = i.default.GetDistance(r[s].node, t.node);
                            a < o && ((o = a), (e = r[s]));
                        }
                return {min_item: e, min_distance: o};
            }),
            (t.prototype.OnRefreshAll = function () {
                for (var t = 0; t < this.items.length; t++)
                    for (var e = this.items[t], o = 0; o < e.length; o++)
                        e[o] && 0 == e[o].GetStart() && this.AddNeedEliminates(e[o]);
                this.Eliminate();
            }),
            (t.prototype.AllIndeUpLv = function (t) {
                for (var e = 0; e < this.items.length; e++)
                    for (var o = this.items[e], n = 0; n < o.length; n++)
                        o[n] && o[n].GetIndex() == t && (o[n].UpLv(), this.AddNeedToCheckItems(o[n]));
                this.EliminatesOfRefresh();
            }),
            (t.prototype.SetItemShowHint = function (t) {
                for (var e = 0; e < this.items.length; e++)
                    for (var o = this.items[e], n = 0; n < o.length; n++)
                        o[n] && o[n].GetIndex() == t && o[n].ShowHint();
            }),
            (t.prototype.SetItemHiedHint = function (t) {
                for (var e = 0; e < this.items.length; e++)
                    for (var o = this.items[e], n = 0; n < o.length; n++)
                        o[n] && o[n].GetIndex() == t && o[n].HiedHint();
            }),
            (t.prototype.AllEnteright = function () {
                for (var t = 0; t < this.items.length; t++)
                    for (var e = this.items[t], o = 0; o < e.length; o++) e[o] && e[o].EnterFightingStage();
                for (s.default.max_hjj = null, a.default.max_hjj = null, t = 0; t < c.default.ins.fights.length; t++)
                    (n = c.default.ins.fights[t]).data && n.EnterOver();
                for (t = 0; t < c.default.ins.fights.length; t++) {
                    var n;
                    (n = c.default.ins.fights[t]).data && n.EnterOver2();
                }
            }),
            (t.prototype.RandomUplv = function (t) {
                for (var e = [], o = 0; o < this.items.length; o++)
                    for (var n = this.items[o], i = 0; i < n.length; i++)
                        n[i] && n[i].GetIndex() > 0 && n[i].GetStart() < 5 && e.push(n[i]);
                for (
                    e.sort(function () {
                        return Math.random() - 0.5;
                    }),
                        o = 0;
                    o < t;
                    o++
                )
                    o < e.length && (e[o].UpLv(), this.AddNeedToCheckItems(e[o]));
                this.EliminatesOfRefresh();
            }),
            (t.prototype.AddCols = function () {
                this.col_y++;
                for (var t = 0; t < this.row_x; t++) this.items[t].push(null);
                this.Refresh();
            }),
            (t.prototype.RetainItem = function (t) {
                for (var e = this, o = {}, n = [], i = 0; i < this.items.length; i++)
                    for (var r = this.items[i], s = 0; s < r.length; s++)
                        r[s] &&
                            (this.AddNeedEliminates(r[s]),
                            0 != r[s].GetIndex() &&
                                (o[r[s].data.img] || ((o[r[s].data.img] = []), n.push(r[s].data.img)),
                                o[r[s].data.img].push(r[s])));
                for (i = 0; i < n.length; i++)
                    o[n[i]].sort(function (t, e) {
                        return e.GetStart() - t.GetStart();
                    });
                for (var a = []; t > 0; ) {
                    var l = [];
                    for (i = 0; i < n.length; i++) o[n[i]].length > 0 && l.push(o[n[i]].shift());
                    for (
                        l.sort(function (t, e) {
                            return e.GetStart() - t.GetStart();
                        }),
                            i = 0;
                        i < l.length;
                        i++
                    )
                        if (l[i].GetStart() == l[0].GetStart()) {
                            if (-1 == --t) break;
                            a.push(l[i]);
                        } else o[l[i].data.img].unshift(l[i]);
                }
                for (i = 0; i < a.length; i++) this.RemoveNeedEliminates(a[i]);
                c.default.ins.BlockCenter();
                var d = this.needEliminates.length;
                for (i = 0; i < d; i++) this.needEliminates[i].Eliminate();
                (this.needEliminates = []),
                    c.default.ins.scheduleOnce(function () {
                        for (var t = [], o = e.col_y - 1; o > 0; o--)
                            for (var n = 0; n < e.row_x; n++)
                                if (a.length > 0) {
                                    var i = a.shift();
                                    (e.items[i.x][i.y] = null), t.push(i);
                                }
                        for (o = e.col_y - 1; o > 0; o--)
                            for (n = 0; n < e.row_x; n++)
                                t.length > 0 &&
                                    ((i = t.shift()).ToPos(n, o), (e.items[n][o] = i), e.AddNeedToCheckItems(i));
                        c.default.ins.scheduleOnce(function () {
                            e.Refresh();
                        }, 1),
                            c.default.ins.scheduleOnce(function () {
                                e.EliminatesOfRefresh();
                            }, 1.15);
                    }, 1);
            }),
            (t.prototype.ShowHint = function () {
                if (
                    0 == c.default.ins.centerBlock.active &&
                    h.DataMgr.step > 0 &&
                    null == c.default.ins.touch_item &&
                    new Date().getSeconds() - c.default.ins.end_letgo_time > 5
                ) {
                    for (var t = this.CheckHaveEliminate(), e = 0; e < t.length; e++) t[e].ShowCanHcHint();
                    return !0;
                }
                return !1;
            }),
            (t.prototype.CheckHaveEliminate = function () {
                for (var t, e = [], o = [], n = this.items, i = 0; i < this.row_x; i++)
                    for (var r = 0; r < this.col_y; r++) e.push(new _(i, r));
                e.sort(function () {
                    return 0.5 - Math.random();
                });
                for (var s = 0; s < e.length; s++) {
                    if (
                        ((i = e[s].x),
                        (r = e[s].y) >= 2 &&
                            this.ItemIsExist(i, r - 1) &&
                            this.ItemIsExist(i, r - 2) &&
                            this.ItemIsExist(i, r - 3) &&
                            this.ItemIsExist(i, r) &&
                            n[i][r - 1].GetIndex() == n[i][r - 2].GetIndex())
                    ) {
                        if (
                            ((t = n[i][r - 1].GetIndex()),
                            r >= 3 && (o.push(n[i][r - 1]), this.CheckItemRound(t, i, r - 3, o) >= 2))
                        )
                            return o;
                        if ((o.push(n[i][r - 2]), this.CheckItemRound(t, i, r, o) >= 2)) return o;
                    }
                    if (
                        ((o = []),
                        i >= 2 &&
                            this.ItemIsExist(i, r) &&
                            this.ItemIsExist(i - 1, r) &&
                            this.ItemIsExist(i - 2, r) &&
                            this.ItemIsExist(i - 3, r) &&
                            n[i - 1][r].GetIndex() == n[i - 2][r].GetIndex())
                    ) {
                        if (
                            ((t = n[i - 1][r].GetIndex()),
                            i >= 3 && (o.push(n[i - 1][r]), this.CheckItemRound(t, i - 3, r, o) >= 2))
                        )
                            return o;
                        if ((o.push(n[i - 2][r]), this.CheckItemRound(t, i, r, o) >= 2)) return o;
                    }
                    if (
                        ((o = []),
                        r >= 2 &&
                            this.ItemIsExist(i, r) &&
                            this.ItemIsExist(i, r - 1) &&
                            this.ItemIsExist(i, r - 2) &&
                            n[i][r].GetIndex() == n[i][r - 2].GetIndex() &&
                            ((t = n[i][r].GetIndex()), this.CheckItemRound(t, i, r - 1, o) >= 3))
                    )
                        return o;
                    if (
                        ((o = []),
                        i >= 2 &&
                            this.ItemIsExist(i, r) &&
                            this.ItemIsExist(i - 1, r) &&
                            this.ItemIsExist(i - 2, r) &&
                            n[i][r].GetIndex() == n[i - 2][r].GetIndex() &&
                            ((t = n[i][r].GetIndex()), this.CheckItemRound(t, i - 1, r, o) >= 3))
                    )
                        return o;
                    o = [];
                }
                return o;
            }),
            (t.prototype.CheckItemRound = function (t, e, o, n) {
                var i = 0;
                return (
                    e - 1 >= 0 &&
                        this.ItemIsExist(e - 1, o) &&
                        this.items[e - 1][o].GetIndex() == t &&
                        (n.push(this.items[e - 1][o]), i++),
                    e + 1 <= 8 &&
                        this.ItemIsExist(e + 1, o) &&
                        this.items[e + 1][o].GetIndex() == t &&
                        (n.push(this.items[e + 1][o]), i++),
                    o + 1 <= 8 &&
                        this.ItemIsExist(e, o + 1) &&
                        this.items[e][o + 1].GetIndex() == t &&
                        (n.push(this.items[e][o + 1]), i++),
                    o - 1 >= 0 &&
                        this.ItemIsExist(e, o - 1) &&
                        this.items[e][o - 1].GetIndex() == t &&
                        (n.push(this.items[e][o - 1]), i++),
                    i
                );
            }),
            t
        );
    })();
o.MapLogic = p;
var _ = (function () {
    function t(t, e) {
        (this.x = t), (this.y = e);
    }
    return (
        (t.prototype.Clone = function () {
            return new t(this.x, this.y);
        }),
        t
    );
})();
