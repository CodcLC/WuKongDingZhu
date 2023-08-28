var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.UserGameData = void 0);
var n = t("EventMgr"),
    i = t("EventEnum"),
    r = t("PhysicalPowerMgr"),
    s = function () {
        (this.physicalData = {}), (this.levelNum = 1), (this.moneyNum = 0);
    };
o.UserGameData = s;
var a = (function () {
    function t() {}
    return (
        (t.setGameCode = function (e) {
            t.code_csryw = e;
        }),
        (t.setGameOpenid = function (e) {
            return (t.openId_csryw = e);
        }),
        (t.getGameOpenid = function () {
            return t.openId_csryw;
        }),
        (t.getGameCode = function () {
            return t.code_csryw;
        }),
        Object.defineProperty(t, "isLogin_csryw", {
            get: function () {
                return "" != t.code_csryw || "" != t.token_csryw;
            },
            enumerable: !1,
            configurable: !0
        }),
        (t.getSaveData_csryw = function () {
            return (t._gameData_csryw.physicalData = r.default.getData()), JSON.stringify(t._gameData_csryw);
        }),
        (t.testInitUser_csryw = function () {
            (t._gameData_csryw.levelNum = 1), (t._gameData_csryw.moneyNum = 1e3);
        }),
        (t.initiUser_csryw = function (e) {
            console.log("*****************************  User initUser  **************************************  "),
                console.log(e),
                e &&
                    0 != e &&
                    ((t._gameData_csryw.levelNum = t.verify(e.levelNum, 0)),
                    (t._gameData_csryw.moneyNum = t.verify(e.moneyNum, 0)),
                    r.default.initData(t.verify(e.physicalData, {})));
        }),
        (t.setLeveNum_csryw = function (e) {
            t._gameData_csryw.levelNum = e;
        }),
        (t.getLeveNum_csryw = function () {
            return t._gameData_csryw.levelNum;
        }),
        (t.addMoney_csryw = function (e) {
            e = Math.ceil(e);
            var o = t._gameData_csryw.moneyNum;
            (t._gameData_csryw.moneyNum += e),
                n.default.emitEvent_csryw(i.ryw_Event.ryw_Game_OnUserMoneyChange_csryw, {
                    curr: t._gameData_csryw.moneyNum,
                    last: o
                });
        }),
        (t.subMoney_csryw = function (e) {
            e = Math.ceil(e);
            var o = t._gameData_csryw.moneyNum;
            (t._gameData_csryw.moneyNum -= e),
                t._gameData_csryw.moneyNum < 0 && (t._gameData_csryw.moneyNum = 0),
                n.default.emitEvent_csryw(i.ryw_Event.ryw_Game_OnUserMoneyChange_csryw, {
                    curr: t._gameData_csryw.moneyNum,
                    last: o
                });
        }),
        (t.getMoney_csryw = function () {
            return t._gameData_csryw.moneyNum;
        }),
        (t.verify = function (t, e) {
            return void 0 !== t ? t : e;
        }),
        (t.code_csryw = ""),
        (t.openId_csryw = ""),
        (t.token_csryw = null),
        (t.nickName_csryw = ""),
        (t.gender_csryw = 0),
        (t._gameData_csryw = new s()),
        t
    );
})();
o.default = a;
