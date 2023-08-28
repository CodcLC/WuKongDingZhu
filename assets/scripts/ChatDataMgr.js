var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.happeningData = o.ChatDataMgr = void 0);
var n = t("EventEnum"),
    i = t("EventMgr"),
    r = t("SoundMgr"),
    s = t("ConfigMgr"),
    a = t("DataMgr"),
    c = t("DataSaveMgr"),
    l = (function () {
        function t() {}
        return (
            (t.getHeadIamge = function () {
                return this.headImgIndex;
            }),
            (t.GetTaskLookVideo = function (t) {
                return -1 != this.all_look_video_taskids.indexOf(t);
            }),
            (t.SetTaskLookVideo = function (t) {
                this.GetTaskLookVideo(t)
                    ? console.warn("重复保存任务看视频")
                    : (this.all_look_video_taskids.push(t),
                      c.DataSaveMgr.Save("all_look_video_taskids", JSON.stringify(this.all_look_video_taskids)));
            }),
            (t.Load = function () {
                var t = this;
                (this.all_look_video_taskids = c.DataSaveMgr.Get("all_look_video_taskids", [])),
                    (this.try_unlock_ids = c.DataSaveMgr.Get("try_unlock_ids", [])),
                    (this.all_chat_ids = c.DataSaveMgr.Get("all_chat_ids", [])),
                    (this.need_unlock_ids = c.DataSaveMgr.Get("need_unlock_ids", []));
                for (var e = 0; e < this.all_chat_ids.length; e++)
                    this.happening_datas.push(
                        c.DataSaveMgr.Get("happening_datas_" + this.all_chat_ids[e], new d(this.all_chat_ids[e], [], 0))
                    );
                s.ConfigMgr.chatEvent_config.forEach(function (e) {
                    1 == e.type
                        ? t.level_start_unlock_ids.push(e.id)
                        : 2 == e.type
                        ? t.level_end_unlock_ids.push(e.id)
                        : 3 == e.type && t.hero_unlock_ids.push(e.id);
                }),
                    this.SetEndAndMustOver(),
                    this.SetNeetIdAutoOver();
            }),
            (t.AutoChatAll = function () {
                var t = this;
                s.ConfigMgr.chatEvent_config.forEach(function (e) {
                    var o = t.GetHappeningById(e.id);
                    o || (t.UnlockChat(e.id), (o = t.GetHappeningById(e.id))), -1 != o.index && t.SetChatOverDetail(o);
                });
            }),
            (t.AddTryChat = function (t) {
                -1 == this.try_unlock_ids.indexOf(t) &&
                    (this.try_unlock_ids.push(t),
                    c.DataSaveMgr.Save("try_unlock_ids", JSON.stringify(this.try_unlock_ids)));
            }),
            (t.RemoveTryChat = function (t) {
                var e = this.try_unlock_ids.indexOf(t);
                -1 != e &&
                    (this.try_unlock_ids.splice(e, 1),
                    c.DataSaveMgr.Save("try_unlock_ids", JSON.stringify(this.try_unlock_ids)));
            }),
            (t.TryAgain = function () {
                for (var t = 0; t < this.try_unlock_ids.length; t++) this.UnlockChat(this.try_unlock_ids[t]);
            }),
            (t.AddNeedUnlockIds = function (t) {
                -1 == this.need_unlock_ids.indexOf(t) &&
                    (this.need_unlock_ids.push(t),
                    c.DataSaveMgr.Save("need_unlock_ids", JSON.stringify(this.need_unlock_ids)));
            }),
            (t.SetNeetIdAutoOver = function () {
                for (var t = 0; t < this.need_unlock_ids.length; t++) {
                    var e = this.need_unlock_ids[t],
                        o = this.GetHappeningById(e);
                    o || (this.AddNewHappenings(e, 0), (o = this.GetHappeningById(e))), this.SetChatOver(o);
                }
                (this.need_unlock_ids = []),
                    c.DataSaveMgr.Save("need_unlock_ids", JSON.stringify(this.need_unlock_ids));
            }),
            (t.SetEndAndMustOver = function () {
                for (var t = 0; t < this.happening_datas.length; t++) {
                    var e = this.happening_datas[t];
                    this.SetChatOver(e);
                }
            }),
            (t.SetChatOver = function (t) {
                var e = s.ConfigMgr.chatEvent_config.get(t.id);
                -1 == t.index ||
                    (-1 == this.level_end_unlock_ids.indexOf(t.id) &&
                        -1 == this.level_end_unlock_ids_inall.indexOf(t.id)) ||
                    1 != e.must ||
                    this.SetChatOverDetail(t);
            }),
            (t.SetChatOverDetail = function (e) {
                for (var o = s.ConfigMgr.chatLibrary_config.get(e.id), n = 0; n < o.value.length; n++)
                    if (-1 == e.oldindexs.indexOf(o.value[n].id)) {
                        e.oldindexs.push(o.value[n].id);
                        var i = o.value[n],
                            r = s.ConfigMgr.chatTask_config.get(i.task);
                        if (r)
                            if (2 == r.taskType) t.UnlockChat(r.chatid, !0);
                            else if (3 == r.taskType) a.DataMgr.AddVoucher(r.buyid);
                            else if (4 == r.taskType)
                                for (var l = s.ConfigMgr.StringToNumbers(r.buyid.toString()), d = 0; d < l.length; d++)
                                    a.DataMgr.SetHeroLv(l[d], r.numb);
                            else 6 == r.taskType && a.DataMgr.AddHero(r.buyid, r.numb);
                    }
                (e.index = -1), c.DataSaveMgr.Save("happening_datas_" + e.id, JSON.stringify(e));
            }),
            (t.StartLevelUnlock = function (t) {
                for (var e = -1, o = 0; o < this.level_start_unlock_ids.length; o++) {
                    var n = s.ConfigMgr.chatEvent_config.get(this.level_start_unlock_ids[o]);
                    if (n.numb == t && 1 == n.type) {
                        var i = this.GetHappeningById(n.id);
                        i
                            ? 1 == s.ConfigMgr.chatEvent_config.get(n.id).must && -1 != i.index && (e = n.id)
                            : this.UnlockChat(n.id) && (e = n.id);
                        var r = s.ConfigMgr.chatEvent_config.get(e),
                            a = this.GetHappeningById(e),
                            c = this.GetHappeningById(e + 1);
                        r &&
                            c &&
                            a &&
                            1 == r.type &&
                            0 != c.index &&
                            (console.error("开始强制聊天未聊~~~自动聊完"), this.SetChatOverDetail(a), (e = -1));
                    }
                }
                return e;
            }),
            (t.EndLevelUnlock = function (t) {
                for (var e = -1, o = 0; o < this.level_end_unlock_ids.length; o++) {
                    var n = s.ConfigMgr.chatEvent_config.get(this.level_end_unlock_ids[o]);
                    if (n.numb == t) {
                        var i = this.level_end_unlock_ids.splice(o, 1);
                        this.level_end_unlock_ids_inall.push(i[0]), o--, this.UnlockChat(n.id) && (e = n.id);
                    }
                }
                return console.log("关卡解锁", e), e;
            }),
            (t.AddEndNeedChat = function (t) {
                for (var e = 0; e < this.level_end_unlock_ids.length; e++) {
                    var o = s.ConfigMgr.chatEvent_config.get(this.level_end_unlock_ids[e]);
                    o.numb == t &&
                        (this.level_end_unlock_ids_inall.push(this.level_end_unlock_ids[e]),
                        this.AddNeedUnlockIds(o.id));
                }
            }),
            (t.GetHappeningById = function (t) {
                for (var e = 0; e < this.happening_datas.length; e++)
                    if (this.happening_datas[e].id == t) return this.happening_datas[e];
                return null;
            }),
            (t.GetHappenings = function () {
                return this.happening_datas;
            }),
            (t.UnlockChat = function (t, e) {
                void 0 === e && (e = !1), console.log("尝试解锁对话id:", t);
                var o = s.ConfigMgr.chatEvent_config.get(t);
                return 0 == o.event_id || this.CheckChatOver(o.event_id)
                    ? -1 != this.all_chat_ids.indexOf(t)
                        ? (console.warn("已经解锁过", t, "事件了"), !1)
                        : (this.RemoveTryChat(t),
                          this.SetHappenings(t, 0),
                          e || r.default.playSound_csryw("xiaoxi"),
                          1 == o.must)
                    : (console.log(t + " 事件的前置事件未解锁：", o.event_id), this.AddTryChat(t), !1);
            }),
            (t.SetHappenings = function (t, e) {
                for (var o = 0; o < this.happening_datas.length; o++)
                    if (t == this.happening_datas[o].id)
                        return (
                            -1 != e &&
                                -1 == this.happening_datas[o].oldindexs.indexOf(e) &&
                                (0 == e
                                    ? (this.happening_datas[o].oldindexs = [])
                                    : this.happening_datas[o].oldindexs.push(e)),
                            (this.happening_datas[o].index = e),
                            -1 == e && (i.default.emitEvent_csryw(n.ryw_Event.HappeningsChange), this.TryAgain()),
                            void c.DataSaveMgr.Save("happening_datas_" + t, JSON.stringify(this.happening_datas[o]))
                        );
                this.AddNewHappenings(t, e);
            }),
            (t.AddNewHappenings = function (t, e) {
                var o = new d(t, [], e);
                this.happening_datas.push(o),
                    c.DataSaveMgr.Save("happening_datas_" + t, JSON.stringify(o)),
                    this.all_chat_ids.push(t),
                    c.DataSaveMgr.Save("all_chat_ids", JSON.stringify(this.all_chat_ids)),
                    i.default.emitEvent_csryw(n.ryw_Event.HappeningsChange);
            }),
            (t.GetChatHeroid = function (t) {
                return s.ConfigMgr.chatLibrary_config.get(t).heroId;
            }),
            (t.GetChatHappeningByHeroid = function (t) {
                for (var e = [], o = 0; o < this.happening_datas.length; o++)
                    t == this.GetChatHeroid(this.happening_datas[o].id) && e.push(this.happening_datas[o]);
                return e;
            }),
            (t.GetHaveRed = function () {
                for (var t = 0; t < this.happening_datas.length; t++)
                    if (-1 != this.happening_datas[t].index) return !0;
                return !1;
            }),
            (t.CheckChatOver = function (t) {
                for (var e = 0; e < this.happening_datas.length; e++)
                    if (t == this.happening_datas[e].id) return -1 == this.happening_datas[e].index;
                return !1;
            }),
            (t.headImgIndex = 0),
            (t.all_look_video_taskids = []),
            (t.happening_datas = []),
            (t.all_chat_ids = []),
            (t.try_unlock_ids = []),
            (t.need_unlock_ids = []),
            (t.level_start_unlock_ids = []),
            (t.hero_unlock_ids = []),
            (t.level_end_unlock_ids = []),
            (t.level_end_unlock_ids_inall = []),
            t
        );
    })();
o.ChatDataMgr = l;
var d = function (t, e, o) {
    (this.id = t), (this.oldindexs = e), (this.index = o);
};
o.happeningData = d;
