var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.HeroData =
        o.ChatData =
        o.ChatLibraryData =
        o.ChatEventData =
        o.ChatTaskData =
        o.BuffData =
        o.EnmeyLevelConfig =
        o.EnemyGroup =
        o.EnemyData =
        o.BaseConfig =
        o.CardData =
        o.ConfigMgr =
        o.img =
        void 0),
    (function(t) {
        (t.swk = "swk"),
        (t.shs = "shs"),
        (t.ts = "ts"),
        (t.zbj = "zbj"),
        (t.zn = "zn"),
        (t.blm = "blm"),
        (t.hhe = "hhe"),
        (t.bsz = "bsz"),
        (t.zxxz = "zxxz"),
        (t.ce = "ce"),
        (t.zzj = "zzj"),
        (t.bgj = "bgj"),
        (t.nmw = "nmw");
    })(o.img || (o.img = {}));
var n = t("ResSubMgr"),
    i = t("EnemyBase"),
    r = t("FBgj"),
    s = t("FBlm"),
    a = t("FBsz"),
    c = t("FCe"),
    l = t("FHhe"),
    d = t("FNmw"),
    u = t("FShs"),
    h = t("FSwk"),
    f = t("FTs"),
    p = t("FZbj"),
    _ = t("FZn"),
    y = t("FZxxz"),
    g = t("FZzj"),
    w = t("ChatDataMgr"),
    m = t("DataMgr"),
    v = (function() {
        function t() {}
        return (
            (t.IsBrowser = function() {
                return cc.sys.isBrowser;
            }),
            (t.Load = function() {
                var t = this;
                this.LoadJsonMap(this.basePath, "CardData.json", this.card_config),
                    this.LoadJsonMap(this.basePath, "BuffData.json", this.buff_config),
                    this.LoadJsonMap(this.basePath, "EnemyData.json", this.enemy_config),
                    this.LoadJsonMap(this.basePath, "EnemyGroup.json", this.enemyGroup_config),
                    this.LoadJson(
                        this.basePath,
                        "BaseConfig.json",
                        function(e) {
                            t.base_config = e;
                        },
                        this
                    ),
                    this.LoadJson(
                        this.basePath,
                        "EnmeyLevelConfig.json",
                        function(e) {
                            t.enmeyLevel_config = e;
                        },
                        this
                    ),
                    this.LoadJson(
                        "https://oss.renyouwangluo.cn/hgxy2/json/",
                        "DrConfig.json",
                        function(e) {
                            t.dr_openids = e;
                        },
                        this
                    ),
                    this.LoadJson(
                        this.basePath,
                        "ChatLibraryConfig.json",
                        function(e) {
                            for (var o in e)
                                for (var n in e[o]) t.chatLibrary_config.set(Number(n), e[o][n]);
                        },
                        this
                    ),
                    this.LoadJson(
                        this.basePath,
                        "ChatTaskConfig.json",
                        function(e) {
                            for (var o = 0; o < e.length; o++) t.chatTask_config.set(e[o].taskId, e[o]);
                        },
                        this
                    ),
                    this.LoadJson(
                        this.basePath,
                        "ChatEventConfig.json",
                        function(e) {
                            for (var o = 0; o < e.length; o++) t.chatEvent_config.set(e[o].id, e[o]);
                        },
                        this
                    ),
                    this.LoadJson(
                        this.basePath,
                        "ChatHeroConfig.json",
                        function(e) {
                            for (var o = 0; o < e.length; o++) t.chathero_config.set(e[o].heroId, e[o]);
                        },
                        this
                    );
            }),
            (t.LoadOver = function() {
                var e = this;
                this.card_config.forEach(function(t) {
                        t.baseBuffIndexs ?
                            (t.baseBuffIndexs = e.StringToNumbers(t.baseBuffIndexs)) :
                            (t.baseBuffIndexs = []),
                            t.skillBuffIndexs ?
                            (t.skillBuffIndexs = e.StringToNumbers(t.skillBuffIndexs)) :
                            (t.skillBuffIndexs = []);
                    }),
                    this.enemy_config.forEach(function(t) {
                        t.die_create_enmey ?
                            (t.die_create_enmey = e.StringToNumbers(t.die_create_enmey)) :
                            (t.die_create_enmey = []),
                            t.skills ? (t.skills = e.StringToNumbers(t.skills)) : (t.skills = []);
                    }),
                    (this.buff_config = this.GetBuffConfigClone()),
                    w.ChatDataMgr.Load(),
                    30 == m.DataMgr.user_gamedata.max_win_count &&
                    m.DataMgr.user_gamedata.unlock_max_level < t.enmeyLevel_config.levels_len &&
                    m.DataMgr.SetUnlockMaxLevel(m.DataMgr.user_gamedata.unlock_max_level + 1);
            }),
            (t.IsDr = function() {
                return this.is_dr;
            }),
            (t.LoadJson = function(t, e, o, n) {
                var i = this;
                this.use_remote && (this.use_remote || this.chat_use_romote || -1 == e.indexOf("Chat")) ?
                    cc.assetManager.loadRemote(t + e, function(t, r) {
                        var s = r.json;
                        s && o.call(n, s),
                            LogUtils.log_csryw("=========" + e.replace(".json", "") + "=======", s),
                            i.load_count--,
                            0 == i.load_count && i.LoadOver();
                    }) :
                    this.LoadJsonByResources(t, e, o, n);
            }),
            (t.LoadJsonByResources = function(t, e, o, n) {
                var i = this;
                cc.resources.load("json/" + e.replace(".json", ""), cc.JsonAsset, function(t, r) {
                    var s = r.json;
                    s && o.call(n, s),
                        LogUtils.log_csryw("=========" + e.replace(".json", "") + "=======", s),
                        i.load_count--,
                        0 == i.load_count && i.LoadOver();
                });
            }),
            (t.LoadJsonMap = function(t, e, o) {
                var n = this;
                this.use_remote ?
                    cc.assetManager.loadRemote(t + e, function(t, i) {
                        var r = i.json;
                        if (r)
                            for (var s in r) o.set(r[s].index, r[s]);
                        LogUtils.log_csryw("=========" + e.replace(".json", "") + "=======", o),
                            n.load_count--,
                            0 == n.load_count && n.LoadOver();
                    }) :
                    this.LoadJsonMapByResources(t, e, o);
            }),
            (t.LoadJsonMapByResources = function(t, e, o) {
                var n = this;
                cc.resources.load("json/" + e.replace(".json", ""), cc.JsonAsset, function(t, i) {
                    var r = i.json;
                    if (r)
                        for (var s in r) o.set(r[s].index, r[s]);
                    LogUtils.log_csryw("=========" + e.replace(".json", "") + "=======", o),
                        n.load_count--,
                        0 == n.load_count && n.LoadOver();
                });
            }),
            (t.StringToNumbers = function(t) {
                var e = [],
                    o = (t = t.toString()).split("=");
                if ("" != o[0])
                    for (var n = 0; n < o.length; n++) e.push(Number(o[n]));
                return e;
            }),
            (t.GetBuffConfigClone = function() {
                var t = new Map();
                return (
                    this.buff_config.forEach(function(e, o) {
                        var n = new b(
                            e.index,
                            e.des,
                            e.only,
                            e.rare,
                            e.belong,
                            e.img,
                            0,
                            e.min,
                            e.max,
                            e.weight,
                            e.hero
                        );
                        t.set(o, n);
                    }),
                    t
                );
            }),
            (t.GetEnemyLevelConfigClone = function(e, o) {
                for (
                    var n = new Array(), i = t.enmeyLevel_config.levels["l_" + e].rounds["r_" + o].enemys, r = 0; r < i.length; r++
                ) {
                    var s = new Array();
                    n.push(s);
                    for (var a = 0; a < i[r].length; a++) s.push(i[r][a]);
                }
                return n;
            }),
            (t.GetGuideEnemyLevelConfigClone = function(e) {
                for (
                    var o = new Array(), n = t.base_config.guide_lv.rounds["r_" + e].enemys, i = 0; i < n.length; i++
                ) {
                    var r = new Array();
                    o.push(r);
                    for (var s = 0; s < n[i].length; s++) r.push(n[i][s]);
                }
                return o;
            }),
            (t.GetLevelHaveBoss = function(e, o) {
                var n = t.enmeyLevel_config.levels["l_" + e].rounds["r_" + o].boss;
                return n && 1 == n;
            }),
            (t.is_dr = !1),
            (t.use_remote = !1),
            (t.chat_use_romote = !1),
            (t.basePath = "https://oss.renyouwangluo.cn/hgxy/json/"),
            (t.load_count = 11),
            (t.card_config = new Map()),
            (t.enemy_config = new Map()),
            (t.enemyGroup_config = new Map()),
            (t.buff_config = new Map()),
            (t.chatEvent_config = new Map()),
            (t.chatLibrary_config = new Map()),
            (t.chatTask_config = new Map()),
            (t.chathero_config = new Map()),
            (t.EnemyInfo = {
                slm: { prefab: n.EnumSubGameRes.e_slm, scrS: i.default },
                goutr: { prefab: n.EnumSubGameRes.e_goutr, scrS: i.default },
                youl: { prefab: n.EnumSubGameRes.e_youl, scrS: i.default },
                het: { prefab: n.EnumSubGameRes.e_het, scrS: i.default },
                gebul: { prefab: n.EnumSubGameRes.e_gebul, scrS: i.default },
                bianfu: { prefab: n.EnumSubGameRes.e_bianfu, scrS: i.default },
                brm: { prefab: n.EnumSubGameRes.e_brm, scrS: i.default },
                munaiyi: { prefab: n.EnumSubGameRes.e_munaiyi, scrS: i.default },
                ntr: { prefab: n.EnumSubGameRes.e_ntr, scrS: i.default },
                sanyao: { prefab: n.EnumSubGameRes.e_sanyao, scrS: i.default },
                shijiu: { prefab: n.EnumSubGameRes.e_shijiu, scrS: i.default },
                xem: { prefab: n.EnumSubGameRes.e_xem, scrS: i.default },
                xxg: { prefab: n.EnumSubGameRes.e_xxg, scrS: i.default },
                e_b_brm: { prefab: n.EnumSubGameRes.e_b_brm, scrS: i.default },
                e_b_bianfu: { prefab: n.EnumSubGameRes.e_b_bianfu, scrS: i.default },
                e_b_gebul_duyan: { prefab: n.EnumSubGameRes.e_b_gebul_duyan, scrS: i.default },
                e_b_gebul_dage: { prefab: n.EnumSubGameRes.e_b_gebul_dage, scrS: i.default },
                e_b_gebul_jishi: { prefab: n.EnumSubGameRes.e_b_gebul_jishi, scrS: i.default },
                e_b_goutr: { prefab: n.EnumSubGameRes.e_b_goutr, scrS: i.default },
                e_b_munaiyi: { prefab: n.EnumSubGameRes.e_b_munaiyi, scrS: i.default },
                e_b_nrt: { prefab: n.EnumSubGameRes.e_b_nrt, scrS: i.default },
                e_b_nrt_hgt: { prefab: n.EnumSubGameRes.e_b_nrt_hgt, scrS: i.default },
                e_b_shijiu_bing: { prefab: n.EnumSubGameRes.e_b_shijiu_bing, scrS: i.default },
                e_b_shijiu_huo: { prefab: n.EnumSubGameRes.e_b_shijiu_huo, scrS: i.default },
                e_b_slm_dian: { prefab: n.EnumSubGameRes.e_b_slm_dian, scrS: i.default },
                e_b_slm_huo: { prefab: n.EnumSubGameRes.e_b_slm_huo, scrS: i.default },
                e_b_slm_lv: { prefab: n.EnumSubGameRes.e_b_slm_lv, scrS: i.default },
                e_b_slm_xue: { prefab: n.EnumSubGameRes.e_b_slm_xue, scrS: i.default },
                e_b_xxg: { prefab: n.EnumSubGameRes.e_b_xxg, scrS: i.default },
                e_b_youl: { prefab: n.EnumSubGameRes.e_b_youl, scrS: i.default },
                e_b_dem: { prefab: n.EnumSubGameRes.e_b_dem, scrS: i.default },
                e_b_dtg: { prefab: n.EnumSubGameRes.e_b_dtg, scrS: i.default },
                e_b_dts: { prefab: n.EnumSubGameRes.e_b_dts, scrS: i.default },
                e_b_mog: { prefab: n.EnumSubGameRes.e_b_mog, scrS: i.default },
                e_b_tsgz: { prefab: n.EnumSubGameRes.e_b_tsgz, scrS: i.default },
                e_b_xr: { prefab: n.EnumSubGameRes.e_b_xr, scrS: i.default },
                e_b_ytr: { prefab: n.EnumSubGameRes.e_b_ytr, scrS: i.default }
            }),
            (t.CardInfo = {
                swk: { prefab: n.EnumSubGameRes.f_swk, scrS: h.default, sp_name: "sunwukong2" },
                shs: { prefab: n.EnumSubGameRes.f_shs, scrS: u.default, sp_name: "shaseng2" },
                ts: { prefab: n.EnumSubGameRes.f_ts, scrS: f.default, sp_name: "tangsen2" },
                zbj: { prefab: n.EnumSubGameRes.f_zbj, scrS: p.default, sp_name: "zhubajie2" },
                zn: { prefab: n.EnumSubGameRes.f_zn, scrS: _.default, sp_name: "zhinv2" },
                blm: { prefab: n.EnumSubGameRes.f_blm, scrS: s.default, sp_name: "bailongma2" },
                hhe: { prefab: n.EnumSubGameRes.f_hhe, scrS: l.default, sp_name: "honghaier2" },
                bsz: { prefab: n.EnumSubGameRes.f_bsz, scrS: a.default, sp_name: "baisuzhen2" },
                zxxz: { prefab: n.EnumSubGameRes.f_zxxz, scrS: y.default, sp_name: "zixia2" },
                ce: { prefab: n.EnumSubGameRes.f_ce, scrS: c.default, sp_name: "change2" },
                zzj: { prefab: n.EnumSubGameRes.f_zzj, scrS: g.default, sp_name: "zhizhujin_2" },
                bgj: { prefab: n.EnumSubGameRes.f_bgj, scrS: r.default, sp_name: "baigujin_2" },
                nmw: { prefab: n.EnumSubGameRes.f_nmw, scrS: d.default, sp_name: "niumowang_2" }
            }),
            t
        );
    })();
o.ConfigMgr = v;
o.CardData = function() {};
o.BaseConfig = function() {};
o.EnemyData = function() {};
o.EnemyGroup = function() {};
o.EnmeyLevelConfig = function() {};
var b = (function() {
    function t(t, e, o, n, i, r, s, a, c, l, d) {
        (this.index = t),
        (this.des = e),
        (this.only = o),
        (this.rare = n),
        (this.belong = i),
        (this.img = r),
        (this.num = s),
        (this.min = a),
        (this.max = c),
        (this.weight = l),
        (this.hero = d);
    }
    return (
        (t.prototype.Clone = function() {
            return new t(
                this.index,
                this.des,
                this.only,
                this.rare,
                this.belong,
                this.img,
                this.num,
                this.min,
                this.max,
                this.weight,
                this.hero
            );
        }),
        t
    );
})();
o.BuffData = b;
o.ChatTaskData = function() {};
o.ChatEventData = function() {};
o.ChatLibraryData = function() {};
o.ChatData = function() {};
o.HeroData = function() {};