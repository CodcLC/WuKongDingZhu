var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.BuffNum = o.BuffMgr = void 0);
var n = t("EventEnum"),
    i = t("EventMgr"),
    r = t("DialogMgr"),
    s = t("Utils"),
    a = t("GameSceneS"),
    c = t("ConfigMgr"),
    l = t("DataMgr"),
    d = t("GuideMgr"),
    u = (function () {
        function t() {}
        return (
            (t.GetNowAllBuffs = function () {
                return this.now_all_buffs;
            }),
            (t.GetNowBuffs = function () {
                return this.now_buffs;
            }),
            (t.CheckHaveBuff = function (t) {
                return -1 != this.now_buffs.indexOf(t);
            }),
            (t.ReSetBuffs = function () {
                (this.apend_hp_add_attack = !1),
                    (this.now_buffs = []),
                    (this.now_buffs_data = []),
                    this.now_all_buffs.clear(),
                    (this.attack = 0),
                    (this.attack_speed = 0),
                    (this.experience_factor = 0),
                    (this.can_tilted = !1),
                    (this.five_more_uplv = !1),
                    (this.high_indexs = []),
                    (this.enmey_append_speed_factor = 0);
            }),
            (t.GetAttackBuff = function () {
                return this.attack + this.apend_hp_attack;
            }),
            (t.AddAttackBuff = function (t) {
                this.attack = this.floatAdd(this.attack, t);
            }),
            (t.GetAttackSpeedBuff = function () {
                return this.attack_speed;
            }),
            (t.AddAttackSpeedBuff = function (t) {
                this.attack_speed = this.floatAdd(this.attack_speed, t);
            }),
            (t.floatAdd = function (t, e) {
                var o, n, i;
                try {
                    o = t.toString().split(".")[1].length;
                } catch (r) {
                    o = 0;
                }
                try {
                    n = e.toString().split(".")[1].length;
                } catch (r) {
                    n = 0;
                }
                return (t * (i = Math.pow(10, Math.max(o, n))) + e * i) / i;
            }),
            (t.GetEnmeyAppendSpeedFactor = function () {
                return this.enmey_append_speed_factor;
            }),
            (t.AddEnmeyAppendSpeedFactor = function (t) {
                this.enmey_append_speed_factor = this.floatAdd(this.enmey_append_speed_factor, t);
            }),
            (t.SetApendHpAddAttack = function () {
                this.apend_hp_add_attack = !0;
            }),
            (t.GetExperienceFactorBuff = function () {
                return this.experience_factor;
            }),
            (t.AddExperienceFactorBuff = function (t) {
                this.experience_factor = this.floatAdd(this.experience_factor, t);
            }),
            (t.GetAddStep = function () {
                return c.ConfigMgr.base_config.base_add_step;
            }),
            (t.GetFiveMoreUplv = function () {
                return this.five_more_uplv;
            }),
            (t.CheckHaveHighIndex = function (t) {
                return -1 != this.high_indexs.indexOf(t);
            }),
            (t.AddHighIndexs = function (t) {
                this.high_indexs.push(t);
            }),
            (t.GetCanMoveAny = function () {
                return this.can_move_any_cout > 0;
            }),
            (t.SubCanMoveAny = function () {
                this.can_move_any_cout--;
            }),
            (t.AddCanMoveAny = function () {
                this.can_move_any_cout++;
            }),
            (t.AddBuff = function (t) {
                var e;
                console.log("添加buff:", t.des), (e = t.des);
                var o = t.num,
                    s = t.index;
                -1 != e.indexOf("*")
                    ? (e = e.replace("*", o.toString()))
                    : -1 != e.indexOf("@") && (e = e.replace("@", o.toString()));
                var c = e;
                switch (s) {
                    case 1:
                        this.AddAttackBuff(o / 100), (c = "全局已增加" + Math.floor(100 * this.attack) + "%攻击力");
                        break;
                    case 2:
                        this.AddAttackSpeedBuff(o / 100),
                            (c = "全局已增加" + Math.floor(100 * this.attack_speed) + "%攻速");
                        break;
                    case 3:
                        this.AddExperienceFactorBuff(0.05),
                            (c = "击杀敌人获得经验提升" + Math.floor(100 * this.experience_factor) + "%");
                        break;
                    case 4:
                        a.default.ins.AddHp(200);
                        break;
                    case 5:
                        a.default.ins.AddMaxHp(200), (c = "血量上限已提高" + l.DataMgr.append_max_hp);
                        break;
                    case 6:
                    case 7:
                        console.log("增加步数:::::::：", o), a.default.ins.AddStep(o);
                        break;
                    case 8:
                        this.can_tilted = !0;
                        break;
                    case 9:
                        a.default.ins.OnAddCols();
                        break;
                    case 10:
                        this.AddEnmeyAppendSpeedFactor(0.15);
                        break;
                    case 11:
                        this.AddAttackBuff(o / 100), (c = "全局已增加" + Math.floor(100 * this.attack) + "%攻击力");
                        break;
                    case 12:
                        this.AddAttackSpeedBuff(o / 100),
                            (c = "全局已增加" + Math.floor(100 * this.attack_speed) + "%攻速");
                        break;
                    case 13:
                        this.SetApendHpAddAttack();
                        break;
                    case 14:
                        this.five_more_uplv = !0;
                        break;
                    case 15:
                        break;
                    case 16:
                        l.DataMgr.RetainCount++;
                        break;
                    case 17:
                        console.log("增加步数:::::::：", o), a.default.ins.AddStep(o);
                        break;
                    case 54:
                        break;
                    case 60:
                        a.default.ins.map_logic.AllIndeUpLv(1);
                        break;
                    case 61:
                        a.default.ins.map_logic.AllIndeUpLv(7);
                        break;
                    case 62:
                        a.default.ins.map_logic.AllIndeUpLv(13);
                        break;
                    case 63:
                        a.default.ins.map_logic.AllIndeUpLv(19);
                        break;
                    case 64:
                        a.default.ins.map_logic.AllIndeUpLv(37);
                        break;
                    case 65:
                        a.default.ins.map_logic.AllIndeUpLv(31);
                        break;
                    case 66:
                        a.default.ins.map_logic.AllIndeUpLv(25);
                        break;
                    case 96:
                        a.default.ins.map_logic.AllIndeUpLv(43);
                        break;
                    case 97:
                        a.default.ins.map_logic.AllIndeUpLv(49);
                        break;
                    case 98:
                        a.default.ins.map_logic.AllIndeUpLv(55);
                        break;
                    case 112:
                        a.default.ins.map_logic.AllIndeUpLv(61);
                        break;
                    case 113:
                        a.default.ins.map_logic.AllIndeUpLv(67);
                        break;
                    case 121:
                        a.default.ins.map_logic.AllIndeUpLv(74);
                        break;
                    case 69:
                        this.AddHighIndexs(1), a.default.ins.map_logic.AllIndeUpLv(1);
                        break;
                    case 70:
                        this.AddHighIndexs(7), a.default.ins.map_logic.AllIndeUpLv(7);
                        break;
                    case 71:
                        this.AddHighIndexs(13), a.default.ins.map_logic.AllIndeUpLv(13);
                        break;
                    case 72:
                        this.AddHighIndexs(19), a.default.ins.map_logic.AllIndeUpLv(19);
                        break;
                    case 73:
                        this.AddHighIndexs(37), a.default.ins.map_logic.AllIndeUpLv(37);
                        break;
                    case 74:
                        this.AddHighIndexs(31), a.default.ins.map_logic.AllIndeUpLv(31);
                        break;
                    case 77:
                        this.AddHighIndexs(25), a.default.ins.map_logic.AllIndeUpLv(25);
                        break;
                    case 99:
                        this.AddHighIndexs(43), a.default.ins.map_logic.AllIndeUpLv(43);
                        break;
                    case 100:
                        this.AddHighIndexs(49), a.default.ins.map_logic.AllIndeUpLv(49);
                        break;
                    case 101:
                        this.AddHighIndexs(55), a.default.ins.map_logic.AllIndeUpLv(55);
                        break;
                    case 114:
                        this.AddHighIndexs(61), a.default.ins.map_logic.AllIndeUpLv(61);
                        break;
                    case 115:
                        this.AddHighIndexs(67), a.default.ins.map_logic.AllIndeUpLv(67);
                        break;
                    case 122:
                        this.AddHighIndexs(74), a.default.ins.map_logic.AllIndeUpLv(74);
                        break;
                    case 78:
                        a.default.ins.map_logic.RandomUplv(2);
                        break;
                    case 79:
                        a.default.ins.map_logic.RandomUplv(3);
                        break;
                    case 80:
                        a.default.ins.map_logic.RandomUplv(5);
                }
                this.now_buffs.push(t.index), this.now_buffs_data.push(t);
                var d = this.now_all_buffs.get(s);
                if (d) d.push(new h(s, o));
                else {
                    var u = [new h(s, o)];
                    this.now_all_buffs.set(s, u);
                }
                i.default.emitEvent_csryw(n.ryw_Event.AddBuff, {index: s, num: o}), "" != c && r.default.openToast(c);
            }),
            (t.InitAllBuff = function () {
                var t = this;
                this.allbaseBuffIndexs = [];
                for (var e = 0; e < l.DataMgr.select_indexs.length; e++) {
                    var o = c.ConfigMgr.card_config.get(l.DataMgr.select_indexs[e]);
                    if (o) {
                        for (var n = 0; n < o.baseBuffIndexs.length; n++)
                            -1 == this.allbaseBuffIndexs.indexOf(o.baseBuffIndexs[n]) &&
                                this.allbaseBuffIndexs.push(o.baseBuffIndexs[n]);
                        if (o.skillBuffIndexs) {
                            for (var i = [], r = 0; r < o.skillBuffIndexs.length; r++) i.push(o.skillBuffIndexs[r]);
                            this.wait_unlock_skill_buffs.set(o.img, i);
                        }
                    }
                }
                (this.boss_zs_xy = []),
                    (this.boss_zs_pt = []),
                    (this.box_zs_xy = []),
                    (this.box_zs_pt = []),
                    (this.uplv_zs_xy = []),
                    (this.uplv_zs_pt = []),
                    (this.base_xy = []),
                    (this.base_pt = []),
                    (this.hero_xy = []),
                    (this.hero_pt = []),
                    c.ConfigMgr.GetBuffConfigClone().forEach(function (e) {
                        (e.hero && -1 == l.DataMgr.select_indexs.indexOf(e.hero)) || t.PutBuffIn(e);
                    }),
                    this.RefreshUplvBuff(),
                    (this.other_pt = this.base_pt.concat(this.hero_pt)),
                    (this.other_xy = this.base_xy.concat(this.hero_xy));
            }),
            (t.PutBuffIn = function (t, e) {
                if ((void 0 === e && (e = !1), !e || (4 != t.belong && 5 != t.belong)))
                    switch (t.belong) {
                        case 1:
                            1 == t.rare ? this.boss_zs_xy.push(t) : this.boss_zs_pt.push(t);
                            break;
                        case 2:
                            1 == t.rare ? this.box_zs_xy.push(t) : this.box_zs_pt.push(t);
                            break;
                        case 3:
                            break;
                        case 4:
                            1 == t.rare ? this.base_xy.push(t) : this.base_pt.push(t);
                            break;
                        case 5:
                            this.PushHeroBuff(t);
                    }
                else 1 == t.rare ? this.other_xy.push(t) : this.other_pt.push(t);
            }),
            (t.PushHeroBuff = function (t) {
                -1 != this.allbaseBuffIndexs.indexOf(t.index) &&
                    (1 == t.rare ? this.hero_xy.push(t) : this.hero_pt.push(t));
            }),
            (t.RefreshUplvBuff = function () {
                for (var t = 0; t < l.DataMgr.select_indexs.length; t++) {
                    var e = c.ConfigMgr.card_config.get(l.DataMgr.select_indexs[t]);
                    if (e) {
                        var o = this.wait_unlock_skill_buffs.get(e.img),
                            n = l.DataMgr.GetHeroLv(e.index);
                        if (o && o.length > 0 && 5 - o.length <= n) {
                            var i = c.ConfigMgr.buff_config.get(o[0]).Clone();
                            (i.belongimg = e.img),
                                1 == i.rare
                                    ? this.CheckHave(i, this.uplv_zs_xy) || this.uplv_zs_xy.push(i)
                                    : this.CheckHave(i, this.uplv_zs_pt) || this.uplv_zs_pt.push(i);
                        }
                    }
                }
            }),
            (t.CheckHave = function (t, e) {
                for (var o = 0; o < e.length; o++)
                    if (t.index == e[o].index) return console.log("已经有了", t.index), !0;
                return !1;
            }),
            (t.SelectBuff = function (t) {
                for (var e = 0; e < t.length; e++) {
                    var o = t[e];
                    this.AddBuff(o),
                        3 == o.belong
                            ? (o.belongimg &&
                                  (this.wait_unlock_skill_buffs.get(o.belongimg).shift(), (o.belongimg = null)),
                              -1 != o.only
                                  ? (o.only--,
                                    0 != o.only && (1 == o.rare ? this.uplv_zs_xy.push(o) : this.uplv_zs_pt.push(o)))
                                  : 1 == o.rare
                                  ? this.uplv_zs_xy.push(o)
                                  : this.uplv_zs_pt.push(o))
                            : -1 != o.only
                            ? (o.only--, 0 != o.only && this.PutBuffIn(o, !0))
                            : this.PutBuffIn(o, !0);
                }
                this.RefreshUplvBuff();
            }),
            (t.CancelBuff = function (t) {
                for (var e = 0; e < t.length; e++) {
                    var o = t[e];
                    3 == o.belong
                        ? 1 == o.rare
                            ? this.CheckHave(o, this.uplv_zs_xy) || this.uplv_zs_xy.push(o)
                            : this.CheckHave(o, this.uplv_zs_pt) || this.uplv_zs_pt.push(o)
                        : this.PutBuffIn(o, !0);
                }
            }),
            (t.GetBossIndexs = function () {
                var t = [];
                for (this.boss_zs_xy.length > 0 && t.push(this.GetRadomByArr(this.boss_zs_xy)); t.length < 3; ) {
                    var e = this.GetOtherbuff();
                    if (!e) break;
                    t.push(e);
                }
                return t;
            }),
            (t.GetBoxIndexs = function (t) {
                if (d.GuideMgr.in_guide) {
                    var e = c.ConfigMgr.GetBuffConfigClone(),
                        o = [];
                    return o.push(e.get(60)), o.push(e.get(1)), o.push(e.get(2)), o;
                }
                var n = 0;
                1 == t
                    ? (n = s.default.GetRandomNum(0, 1))
                    : 2 == t
                    ? (n = s.default.GetRandomNum(1, 2))
                    : 3 == t && (n = s.default.GetRandomNum(2, 3));
                var i = [],
                    r = 0;
                2 == t ? (r = 0.3) : 3 == t && (r = 0.6);
                for (var a = 0; a < n; a++) (l = this.GetBoxBuff(r)) && i.push(l);
                for (; i.length < 3; ) {
                    var l;
                    if (!(l = this.GetOtherbuff(r))) break;
                    i.push(l);
                }
                return i;
            }),
            (t.GetUpLvIndexs = function () {
                var t = [];
                console.log("抽奖池-升级池:", this.uplv_zs_xy, this.uplv_zs_pt);
                var e = Math.random();
                for (
                    console.log("抽稀有的概率", e, c.ConfigMgr.base_config.xy_pro, this.uplv_zs_xy.length),
                        e < c.ConfigMgr.base_config.xy_pro && this.uplv_zs_xy.length > 0
                            ? t.push(this.GetRadomByArr(this.uplv_zs_xy))
                            : this.uplv_zs_pt.length > 0 && t.push(this.GetRadomByArr(this.uplv_zs_pt));
                    t.length < 3;

                ) {
                    var o = this.GetOtherbuff();
                    if (!o) break;
                    t.push(o);
                }
                return t;
            }),
            (t.GetBoxBuff = function (t) {
                void 0 === t && (t = 0);
                var e = Math.random();
                return (
                    console.log("抽稀有的概率", e, c.ConfigMgr.base_config.xy_pro + t, this.box_zs_xy.length),
                    e < c.ConfigMgr.base_config.xy_pro + t && this.box_zs_xy.length > 0
                        ? this.GetRadomByArr(this.box_zs_xy)
                        : this.box_zs_pt.length > 0
                        ? this.GetRadomByArr(this.box_zs_pt)
                        : null
                );
            }),
            (t.GetOtherbuff = function (t) {
                void 0 === t && (t = 0);
                var e = Math.random();
                return (
                    console.log("抽稀有的概率", e, c.ConfigMgr.base_config.xy_pro + t, this.other_xy.length),
                    e < c.ConfigMgr.base_config.xy_pro + t && this.other_xy.length > 0
                        ? this.GetRadomByArr(this.other_xy)
                        : this.other_pt.length > 0
                        ? this.GetRadomByArr(this.other_pt)
                        : null
                );
            }),
            (t.GetRadomByArr = function (t) {
                if (t.length > 0) {
                    for (var e = [], o = 0; o < t.length; o++) for (var n = 0; n < t[o].weight; n++) e.push(o);
                    e.sort(function () {
                        return Math.random() - 0.5;
                    });
                    var i = e.pop();
                    return t.splice(i, 1)[0];
                }
                return null;
            }),
            (t.staybuff = null),
            (t.now_buffs = []),
            (t.now_buffs_data = []),
            (t.now_all_buffs = new Map()),
            (t.boss_zs_xy = []),
            (t.boss_zs_pt = []),
            (t.box_zs_xy = []),
            (t.box_zs_pt = []),
            (t.uplv_zs_xy = []),
            (t.uplv_zs_pt = []),
            (t.base_xy = []),
            (t.base_pt = []),
            (t.hero_xy = []),
            (t.hero_pt = []),
            (t.other_xy = []),
            (t.other_pt = []),
            (t.attack = 0),
            (t.attack_speed = 0),
            (t.enmey_append_speed_factor = 0),
            (t.apend_hp_add_attack = !1),
            (t.apend_hp_attack = 0),
            (t.experience_factor = 0),
            (t.can_tilted = !1),
            (t.five_more_uplv = !1),
            (t.high_indexs = []),
            (t.can_move_any_cout = 0),
            (t.allbaseBuffIndexs = []),
            (t.wait_unlock_skill_buffs = new Map()),
            t
        );
    })();
o.BuffMgr = u;
var h = function (t, e) {
    (this.index = t), (this.num = e);
};
o.BuffNum = h;
