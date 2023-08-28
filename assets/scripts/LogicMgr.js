var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("DialogMgr"),
    i = t("ResSubMgr"),
    r = t("GameSceneS"),
    s = t("StepHintS"),
    a = t("ConfigMgr"),
    c = t("DataMgr"),
    l = (function () {
        function t() {
            (this.stepHintPool = []), (this.fight_damage = {});
        }
        return (
            (t.prototype.ShowStepHint = function (t, e) {
                var o = r.default.ins.buttom_eff_node.convertToNodeSpaceAR(t),
                    n = this.GetStepHint();
                r.default.ins.buttom_eff_node.addChild(n.node), n.node.setPosition(o), n.Show(e);
            }),
            (t.prototype.GetStepHint = function () {
                return this.stepHintPool.length > 0
                    ? this.stepHintPool.pop()
                    : cc
                          .instantiate(i.ResSubMgr.getPrefabBySubGame(i.EnumSubGameRes.stepHintP))
                          .getComponent(s.default);
            }),
            (t.prototype.RecycleStepHint = function (t) {
                r.default.ins.buttom_eff_node.removeChild(t.node), this.stepHintPool.push(t);
            }),
            (t.prototype.AddFightDamage = function (t, e) {
                this.fight_damage[t] += e;
            }),
            (t.prototype.ClearFightDamage = function () {
                this.fight_damage = {};
            }),
            (t.prototype.GetAllDamage = function () {
                for (var t = 0, e = 1; e < c.DataMgr.select_indexs.length; e++) {
                    var o = c.DataMgr.select_indexs[e];
                    (t += this.GetIndexDamage(o)), console.log("伤害：", t);
                }
                return console.log("总伤害：", t), t;
            }),
            (t.prototype.GetIndexDamage = function (t) {
                for (var e = 0, o = 1; o <= 5; o++) {
                    var n = t + o;
                    this.fight_damage[n] && (e += this.fight_damage[n]);
                }
                return Math.ceil(e);
            }),
            (t.prototype.StopAllEnmeys = function () {
                for (var t = 0; t < r.default.ins.enemys.length; t++) r.default.ins.enemys[t].Pause();
            }),
            (t.prototype.AllEnmeysDie = function () {
                for (var t = 0; t < r.default.ins.enemys.length; t++) r.default.ins.enemys[t].Die(!0), t--;
            }),
            (t.prototype.ResumeAllEnmeys = function () {
                for (var t = 0; t < r.default.ins.enemys.length; t++) r.default.ins.enemys[t].Resume();
            }),
            (t.prototype.PauseAllFights = function () {
                for (var t = 0; t < r.default.ins.fights.length; t++) r.default.ins.fights[t].Pause();
            }),
            (t.prototype.ResumeAllFights = function () {
                for (var t = 0; t < r.default.ins.fights.length; t++) r.default.ins.fights[t].Resume();
            }),
            (t.prototype.TryUnlockBsz = function () {
                if (-1 == c.DataMgr.have_indexs.indexOf(43)) {
                    for (var t = 0; t <= 5; t++) {
                        var e = r.default.ins.map_logic.items[t][3],
                            o = r.default.ins.map_logic.items[t][2];
                        if (
                            (e.data && e.data.img != a.img.ts && 0 != e.GetStart()) ||
                            (o.data && o.data.img != a.img.ts && 0 != o.GetStart())
                        )
                            return;
                    }
                    c.DataMgr.AddHero(43, 3), n.default.openToast("新英雄白素贞已解锁！！！");
                }
            }),
            t
        );
    })();
o.default = l;
