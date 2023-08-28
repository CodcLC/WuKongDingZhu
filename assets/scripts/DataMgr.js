var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.VideoGamedata = o.MyUserGameData = o.DataMgr = void 0);
var n = t("EventEnum"),
    i = t("EventMgr"),
    r = t("BuffMgr"),
    s = t("ChatDataMgr"),
    a = t("ConfigMgr"),
    c = t("DataSaveMgr"),
    l = t("GuideMgr"),
    d = (function () {
        function t() {}
        return (
            (t.Load = function () {
                (this.select_indexs = c.DataSaveMgr.Get("select_indexs", [0, 1, 7, 13, 19])),
                    (this.hero_video = c.DataSaveMgr.Get("hero_video", {})),
                    (this.hero_lv = c.DataSaveMgr.Get("hero_lv", {
                        1: 2,
                        7: 2,
                        13: 2,
                        19: 2,
                        25: 2,
                        31: 2,
                        37: 2,
                        43: 2,
                        49: 2,
                        55: 2,
                        61: 2,
                        67: 2,
                        74: 2
                    })),
                    (this.have_indexs = c.DataSaveMgr.Get("have_indexs", [1, 7, 13, 19])),
                    (this.win_extra_lvs = c.DataSaveMgr.Get("win_extra_lvs", [])),
                    (this.money = c.DataSaveMgr.Get("money", 1e3)),
                    (this.user_gamedata = c.DataSaveMgr.Get("MyUserGameData", {
                        select_level: 1,
                        unlock_max_level: 1,
                        max_win_count: 0,
                        get_voucher: []
                    })),
                    (this.swk_five_count = c.DataSaveMgr.Get("swk_five_count", 0)),
                    this.AddVoucher(11);
            }),
            (t.SetMaxWinCount = function (e) {
                e > t.user_gamedata.max_win_count && ((this.user_gamedata.max_win_count = e), this.SaveUserGameData());
            }),
            (t.AddSeeHeroVideoCount = function (t) {
                this.hero_video[t] || (this.hero_video[t] = 0),
                    this.hero_video[t]++,
                    c.DataSaveMgr.Save("hero_video", JSON.stringify(this.hero_video));
            }),
            (t.GetHeroVideoCount = function (t) {
                return this.hero_video[t] || (this.hero_video[t] = 0), this.hero_video[t];
            }),
            (t.AddHero = function (t, e) {
                if ((void 0 === e && (e = 2), -1 == this.have_indexs.indexOf(t))) {
                    this.have_indexs.push(t),
                        this.SetHeroLv(t, e),
                        c.DataSaveMgr.Save("have_indexs", JSON.stringify(this.have_indexs));
                    for (var o = 0; o < s.ChatDataMgr.hero_unlock_ids.length; o++) {
                        var n = a.ConfigMgr.chatEvent_config.get(s.ChatDataMgr.hero_unlock_ids[o]);
                        n.numb == t && s.ChatDataMgr.UnlockChat(n.id);
                    }
                    return !0;
                }
                return !1;
            }),
            (t.AddWinExtra = function (t) {
                return (
                    -1 == this.win_extra_lvs.indexOf(t) &&
                    (this.win_extra_lvs.push(t),
                    c.DataSaveMgr.Save("win_extra_lvs", JSON.stringify(this.win_extra_lvs)),
                    !0)
                );
            }),
            (t.GetWinExtra = function (t) {
                return -1 != this.win_extra_lvs.indexOf(t);
            }),
            (t.SetHeroLv = function (t, e) {
                (this.hero_lv[t] = e), c.DataSaveMgr.Save("hero_lv", JSON.stringify(this.hero_lv));
            }),
            (t.GetHeroLv = function (t) {
                return this.hero_lv[t];
            }),
            (t.GetHeroAniShowLv = function (t) {
                var e = this.hero_lv[t];
                return 2 == e ? 1 : 3 == e ? 3 : 4 == e ? 5 : void 0;
            }),
            (t.SetUnlockMaxLevel = function (t) {
                (this.user_gamedata.unlock_max_level = t),
                    (this.user_gamedata.max_win_count = 0),
                    this.SaveUserGameData();
            }),
            (t.AddVoucher = function (t) {
                -1 == this.user_gamedata.get_voucher.indexOf(t) &&
                    (this.user_gamedata.get_voucher.push(t),
                    this.SaveUserGameData(),
                    console.log("获得通关文牒========", t),
                    i.default.emitEvent_csryw(n.ryw_Event.AddVoucher, t));
            }),
            (t.CheckIsGetVoucher = function () {
                return -1 != this.user_gamedata.get_voucher.indexOf(this.user_gamedata.unlock_max_level);
            }),
            (t.CheckLevelHaveVoucher = function (t) {
                return -1 != this.user_gamedata.get_voucher.indexOf(t);
            }),
            (t.SaveSelectIndexs = function () {
                c.DataSaveMgr.Save("select_indexs", JSON.stringify(this.select_indexs));
            }),
            (t.SaveUserGameData = function () {
                c.DataSaveMgr.Save("MyUserGameData", JSON.stringify(this.user_gamedata));
            }),
            (t.OnLevelStartInit = function () {
                (this.mask_opacity = 155),
                    (this.is_revive = !1),
                    (this.step = 15),
                    (this.lv = 1),
                    (this.hp = 1e3),
                    (this.base_max_hp = 1e3),
                    (this.append_max_hp = 0),
                    (this.RetainCount = 6),
                    (this.video_gamedata = a.ConfigMgr.base_config.video_gamedata),
                    (this.current_get_gold = 0),
                    r.BuffMgr.InitAllBuff(),
                    r.BuffMgr.ReSetBuffs(),
                    l.GuideMgr.in_guide && (this.step = 3);
            }),
            (t.AddCurrentGold = function (t) {
                this.current_get_gold += t;
            }),
            (t.GetCurrentGold = function () {
                return this.current_get_gold;
            }),
            (t.GetMaxHp = function () {
                return this.base_max_hp + this.append_max_hp;
            }),
            (t.AddAppedMaxHp = function (t) {
                (this.append_max_hp += t),
                    r.BuffMgr.apend_hp_add_attack && (r.BuffMgr.apend_hp_attack = this.append_max_hp / 1e3);
            }),
            (t.AddHp = function (t) {
                var e = t + this.hp,
                    o = this.GetMaxHp();
                this.hp = e > o ? o : e;
            }),
            (t.SubHp = function (t) {
                var e = this.hp - t;
                this.hp = e < 0 ? 0 : e;
            }),
            (t.SubStep = function (e) {
                0 != t.step && ((t.step -= e), i.default.emitEvent_csryw(n.ryw_Event.ChangeStep));
            }),
            (t.AddStep = function (e) {
                (t.step += e), i.default.emitEvent_csryw(n.ryw_Event.ChangeStep);
            }),
            (t.getMoney = function () {
                return t.money;
            }),
            (t.addMoney = function (e) {
                e = Math.ceil(e);
                var o = t.money;
                (t.money += e),
                    c.DataSaveMgr.Save("money", t.money),
                    i.default.emitEvent_csryw(n.ryw_Event.ryw_Game_OnUserMoneyChange_csryw, {curr: t.money, last: o});
            }),
            (t.subMoney = function (e) {
                e = Math.ceil(e);
                var o = t.money;
                (t.money -= e),
                    t.money < 0 && (t.money = 0),
                    c.DataSaveMgr.Save("money", t.money),
                    i.default.emitEvent_csryw(n.ryw_Event.ryw_Game_OnUserMoneyChange_csryw, {curr: t.money, last: o});
            }),
            (t.AddSwkFiveCount = function () {
                this.swk_five_count++, c.DataSaveMgr.Save("swk_five_count", this.swk_five_count);
            }),
            (t.money = 0),
            (t.hero_lv = {}),
            (t.hero_video = {}),
            (t.img_index = {
                swk: 1,
                ts: 7,
                zbj: 13,
                shs: 19,
                zn: 25,
                blm: 31,
                hhe: 37,
                bsz: 43,
                zxxz: 49,
                ce: 55,
                bgj: 61,
                zzj: 67,
                nmw: 74
            }),
            (t.extra_lv = 0),
            (t.mask_opacity = 155),
            (t.GameIsRecord = !1),
            (t.GameRecordTime = 0),
            (t.GameRecordTimeDt = 0),
            (t.is_revive = !1),
            (t.swk_five_count = 0),
            t
        );
    })();
o.DataMgr = d;
o.MyUserGameData = function () {};
o.VideoGamedata = function () {};
