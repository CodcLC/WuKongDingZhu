var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.requestData = void 0);
var n = t("NetConfig"),
    i = t("User"),
    r = t("AesTools"),
    s = t("AppConfig"),
    a = t("LogUtils"),
    c = function () {
        (this.meth_csryw = "post"),
            (this.url_csryw = ""),
            (this.onSuccess_csryw = null),
            (this.onFail_csryw = null),
            (this.data_csryw = {});
    };
o.requestData = c;
var l = (function () {
    function t() {}
    return (
        (t.sendHttpUrl_csryw = function (t, e, o, n, i) {
            var r = i || {},
                s = new XMLHttpRequest();
            if (
                ((s.onerror = function (t) {
                    a.LogUtils.networkError_csryw("网络请求异常" + t), n("网络请求异常");
                }),
                (s.ontimeout = function (t) {
                    a.LogUtils.networkError_csryw("网络超时" + t), n("网络超时");
                }),
                (s.onreadystatechange = function () {
                    var t = s.readyState,
                        e = s.status;
                    if (4 === t)
                        if (e >= 200 && e < 300) {
                            var i = s.responseText;
                            a.LogUtils.networkLog_csryw("接收数据：----------------------"),
                                a.LogUtils.networkLog_csryw("接收内容:" + i);
                            var r = JSON.parse(i);
                            o(r);
                        } else {
                            var c = s.statusText;
                            a.LogUtils.networkError_csryw("接收数据异常：----------------------status " + e),
                                a.LogUtils.networkLog_csryw("接收内容:" + c),
                                n(c);
                        }
                }),
                s.open(t.meth_csryw, t.url_csryw, !0),
                r)
            )
                for (var c in r) s.setRequestHeader(c, r[c]);
            a.LogUtils.networkLog_csryw("发送数据：----------------------"),
                a.LogUtils.networkLog_csryw(t.url_csryw + "  " + t.meth_csryw),
                a.LogUtils.networkLog_csryw(e),
                a.LogUtils.networkLog_csryw(JSON.stringify(i)),
                a.LogUtils.networkLog_csryw("----------------------"),
                s.send(e);
        }),
        (t.request_csryw = function (t) {
            t.url_csryw.indexOf("https://") > -1 || t.url_csryw.indexOf("http://") > -1
                ? (t.url_csryw = t.url_csryw)
                : (t.url_csryw = n.default.serverUrl_csryw + t.url_csryw);
            var e = t.onFail_csryw,
                o = "time=" + String(Date.now()),
                c = {"Content-Type": "application/json"};
            (c.state = s.default.state_csryw),
                (c.gameid = s.default.gameid_csryw),
                (c.sign = r.default.encrypt_csryw(o)),
                i.default.token_csryw && (c.token = i.default.token_csryw);
            var l = null;
            t.data_csryw && (l = JSON.stringify(t.data_csryw)),
                this.sendHttpUrl_csryw(
                    t,
                    l,
                    function (e) {
                        a.LogUtils.networkLog_csryw(e, "http Success"),
                            t.onSuccess_csryw && t.onSuccess_csryw(e),
                            (t.onSuccess_csryw = null),
                            (t = null);
                    },
                    function (o) {
                        a.LogUtils.networkLog_csryw(o, "http fail"),
                            e && e(o),
                            t && (t.onFail_csryw = null),
                            (e = null),
                            (t = null);
                    },
                    c
                );
        }),
        (t.getServerTime_csryw = function (e, o) {
            var i = new c();
            (i.url_csryw = n.default.Get_ServerTime_csryw),
                (i.onSuccess_csryw = e),
                (i.onFail_csryw = o),
                t.request_csryw(i);
        }),
        (t.login_csryw = function (e, o) {
            var i = new c();
            (i.url_csryw = n.default.Login_csryw), (i.onSuccess_csryw = e), (i.onFail_csryw = o), t.request_csryw(i);
        }),
        (t.saveGameData_csryw = function (e, o, i) {
            var r = new c();
            (r.url_csryw = n.default.SaveGameData_csryw),
                (r.data_csryw.gameData = e),
                (r.onSuccess_csryw = o),
                (r.onFail_csryw = i),
                t.request_csryw(r);
        }),
        (t.getGameData_csryw = function (e, o) {
            var i = new c();
            (i.url_csryw = n.default.GetUser_csryw), (i.onSuccess_csryw = e), (i.onFail_csryw = o), t.request_csryw(i);
        }),
        (t.GetIpBlock_csryw = function (t, e) {
            if (-1 != s.default.gameid_csryw) {
                console.error("启动新版本的屏蔽系统");
                var o = {},
                    n = new XMLHttpRequest();
                if (
                    ((n.timeout = 15e3),
                    (n.onerror = function (t) {
                        a.LogUtils.networkError_csryw("网络请求异常" + t), e("网络请求异常");
                    }),
                    (n.ontimeout = function (t) {
                        a.LogUtils.networkError_csryw("网络超时" + t), e("网络超时");
                    }),
                    (n.onreadystatechange = function () {
                        var e = n.readyState,
                            o = n.status;
                        if (4 === e) {
                            var i = {code: 1};
                            if (o >= 200 && o < 300) {
                                var r = n.responseText;
                                a.LogUtils.networkLog_csryw("接收数据：----------------------"),
                                    a.LogUtils.networkLog_csryw("接收内容:" + r);
                                var s = JSON.parse(r);
                                s && 0 == s.isBlackIp
                                    ? ((i.code = 0), console.error("新版本的屏蔽系统  不屏蔽"))
                                    : console.error("新版本的屏蔽系统  ", r),
                                    t(i);
                            } else {
                                var c = n.statusText;
                                a.LogUtils.networkError_csryw("接收数据异常：----------------------status " + o),
                                    a.LogUtils.networkLog_csryw("接收内容:" + c),
                                    t(i);
                            }
                        }
                    }),
                    n.open("POST", "https://wxxyx.renyouwangluo.cn/renyou_other_template/ipLogin", !0),
                    o["Content-Type"] || (o["Content-Type"] = "application/json"),
                    o)
                )
                    for (var i in o) n.setRequestHeader(i, o[i]);
                var r = {gameId: s.default.gameid_csryw},
                    c = JSON.stringify(r);
                n.send(c);
            }
        }),
        (t.reportExport_csryw = function (e, o, i, r) {
            var s = new c();
            (s.url_csryw = n.default.reportExport_csryw),
                (s.data_csryw.wbappid = e),
                (s.data_csryw.game_name = o),
                (s.onSuccess_csryw = i),
                (s.onFail_csryw = r),
                t.request_csryw(s);
        }),
        (t.reportImport_csryw = function (e, o, i, r) {
            var s = new c();
            (s.url_csryw = n.default.reportImport_csryw),
                (s.data_csryw.wbappid = e),
                (s.data_csryw.channel = o),
                (s.onSuccess_csryw = i),
                (s.onFail_csryw = r),
                t.request_csryw(s);
        }),
        (t.Getuserip_csryw = function (e, o) {
            var i = new c();
            (i.url_csryw = n.default.getuserip_csryw),
                (i.onSuccess_csryw = e),
                (i.onFail_csryw = o),
                t.request_csryw(i);
        }),
        (t.SignIn_csryw = function (e, o) {
            var i = new c();
            (i.url_csryw = n.default.signin_csryw),
                (i.onSuccess_csryw = e),
                (i.onFail_csryw = o),
                (i.data_csryw.type = 1),
                t.request_csryw(i);
        }),
        (t.GetSignIn_csryw = function (e, o) {
            var i = new c();
            (i.url_csryw = n.default.signin_csryw),
                (i.onSuccess_csryw = e),
                (i.onFail_csryw = o),
                (i.data_csryw.type = 0),
                t.request_csryw(i);
        }),
        (t.reportTTLaunchChannel_csryw = function (e, o, i, r, s) {
            var a = new c();
            (a.url_csryw = n.default.ttReportLaunchChannel_csryw),
                (a.onSuccess_csryw = r),
                (a.onFail_csryw = s),
                (a.data_csryw.ak = e),
                (a.data_csryw.bid = i),
                (a.data_csryw.cd = o),
                t.request_csryw(a);
        }),
        (t.userScanCode_csryw = function (e, o, i) {
            var r = new c();
            (r.url_csryw = n.default.userScanCode_csryw),
                (r.onSuccess_csryw = o),
                (r.onFail_csryw = i),
                (r.data_csryw.code = e.code),
                (r.data_csryw.state = e.state),
                (r.data_csryw.type = e.type),
                (r.data_csryw.scan = e.scan),
                t.request_csryw(r);
        }),
        t
    );
})();
o.default = l;
