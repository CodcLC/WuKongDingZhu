var t = require;
var e = module;
var o = exports;
var n =
    (this && this.__decorate) ||
    function (t, e, o, n) {
        var i,
            r = arguments.length,
            s = r < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
        else
            for (var a = t.length - 1; a >= 0; a--)
                (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
        return r > 3 && s && Object.defineProperty(e, o, s), s;
    };
Object.defineProperty(o, "__esModule", {value: !0});
var i = t("AppConfig"),
    r = t("HttpUnit"),
    s = t("NetConfig"),
    a = t("User"),
    c = t("AppPlatform"),
    l = cc._decorator,
    d = l.ccclass,
    u =
        (l.property,
        (function () {
            function t() {}
            var e;
            return (
                (e = t),
                (t.getInstance = function () {
                    return null == this._inst && (this._inst = new e()), this._inst;
                }),
                (t.prototype.UserLoginActive = function (t, e, o, n, i) {
                    if (c.default.is_TT_GAME_csryw()) {
                        var l = "456";
                        a.default.getGameCode().length > 0 && ((l = a.default.getGameCode()), console.log(l));
                        var d = {
                            code: l,
                            city: t,
                            userName: e,
                            type: "1",
                            portrait: o,
                            oaid: c.default.getLaunchOptionsSync_csryw().query.oaid,
                            promotionid: c.default.getLaunchOptionsSync_csryw().query.promotionid,
                            callback: c.default.getLaunchOptionsSync_csryw().query.callback,
                            ad_type: c.default.getLaunchOptionsSync_csryw().query.ad_type,
                            adid: c.default.getLaunchOptionsSync_csryw().query.adid,
                            aid: c.default.getLaunchOptionsSync_csryw().query.aid,
                            clickid: c.default.getLaunchOptionsSync_csryw().query.clickid,
                            creativeid: c.default.getLaunchOptionsSync_csryw().query.creativeid,
                            creativetype: c.default.getLaunchOptionsSync_csryw().creativetype,
                            mpversion: c.default.getLaunchOptionsSync_csryw().query.mpversion
                        };
                        console.log("ly++++data:", d);
                        var u = new r.requestData();
                        null == n &&
                            (n = function (t) {
                                a.default.setGameOpenid(t.user.openid);
                            }),
                            null == i &&
                                (i = function (t) {
                                    console.log("UserLoginActive onFail== ", t);
                                }),
                            (u.onSuccess_csryw = n),
                            (u.onFail_csryw = i),
                            (u.url_csryw = s.default.getUserLogin_Active(""));
                        var h = JSON.stringify(d);
                        r.default.sendHttpUrl_csryw(u, h, n, i, {"Content-Type": "application/x-www-form-urlencoded"});
                    }
                }),
                (t.prototype.Video_Active = function (t, e) {
                    if (
                        c.default.is_TT_GAME_csryw() &&
                        a.default.getGameOpenid() &&
                        "" != a.default.getGameOpenid() &&
                        null != a.default.getGameOpenid()
                    ) {
                        var o = new r.requestData(),
                            n = {openid: a.default.getGameOpenid(), mp_id: i.default.TT_APP_ID_csryw};
                        console.log("openid2", a.default.getGameOpenid()),
                            null == t &&
                                (t = function (t) {
                                    console.log("Video_Active onSuccess== ", t);
                                }),
                            null == e &&
                                (e = function (t) {
                                    console.log("Video_Active onFail== ", t);
                                }),
                            (o.onSuccess_csryw = t),
                            (o.onFail_csryw = e),
                            (o.url_csryw = s.default.getVideo_Active(""));
                        var l = JSON.stringify(n);
                        r.default.sendHttpUrl_csryw(o, l, t, e, {"Content-Type": "application/x-www-form-urlencoded"});
                    }
                }),
                (e = n([d], t))
            );
        })());
o.default = u;
