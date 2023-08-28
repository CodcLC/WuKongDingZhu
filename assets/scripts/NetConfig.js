var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = (function () {
    function t() {}
    return (
        (t.getUserLogin_Active = function (t) {
            return this.httpUrl_csryw + "/" + t + this.UserLogin_Active;
        }),
        (t.getVideo_Active = function (t) {
            return this.httpUrl_csryw + "/" + t + this.Video_Active;
        }),
        (t.httpUrl_csryw = "https://appcityapi.renyouwangluo.cn"),
        (t.UserLogin_Active = "hgxy/user/userLogin"),
        (t.Video_Active = "hgxy/user/userPostTime"),
        (t.serverUrl_csryw = "https://javaapi.renyouwangluo.cn"),
        (t.Login_csryw = "/api/user/login"),
        (t.SaveGameData_csryw = "/api/user/game/data/write"),
        (t.GetUser_csryw = "/api/user/game/data/read"),
        (t.IpBlock_csryw = "/api/user/ip/select"),
        (t.reportExport_csryw = "/api/share/getwaibuad"),
        (t.reportImport_csryw = "/api/share/getzjadml"),
        (t.getuserip_csryw = "/api/user/ip"),
        (t.signin_csryw = "/api/user/sign"),
        (t.Get_ServerTime_csryw = "/api/share/gettime"),
        (t.userScanCode_csryw = "/api/user/scan/code"),
        (t.ttReportLaunchChannel_csryw = "https://javareport.renyouwangluo.cn/api/data/tt/report"),
        t
    );
})();
o.default = n;
