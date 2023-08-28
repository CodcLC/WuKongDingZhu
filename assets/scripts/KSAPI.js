var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("AppConfig"),
    i = (function () {
        function t() {}
        return (
            (t.init_csryw = function () {
                this.KS && this.KS.init({appId: this.App_ID});
            }),
            (t.readyGo_csryw = function () {
                this.KS && this.KS.readyGo();
            }),
            (t.login_csryw = function (t, e) {
                this.KS &&
                    this.KS.login({
                        success: function (e) {
                            console.log("登录成功" + JSON.stringify(e)), e.gameToken, e.gameUserId, t(e.gameToken);
                        },
                        fail: function (t) {
                            console.log("登录失败" + JSON.stringify(t)), e(t);
                        }
                    });
            }),
            (t.loadSubPackage_csryw = function (t, e, o, n) {
                if (!this.KS.isSupport(this.KS.Support.features.Subpackage))
                    return window.require(t + "/main.js"), void e();
                this.KS.loadSubpackage({
                    name: t,
                    success: function (t) {
                        e(t);
                    },
                    fail: function (t) {
                        console.log(t), o(t);
                    }
                }).onProgressUpdate(function (t) {
                    console.log(t), n(t);
                });
            }),
            (t.onRewardVideo_csryw = function (e) {
                console.log("激励视频奖励回调: ", JSON.stringify(e), t.isPlaySuccess),
                    t.onRewardCallBack && t.onRewardCallBack(t.isPlaySuccess);
            }),
            (t.onCloseVideo_csryw = function (e) {
                console.log("激励视频关闭回调: ", JSON.stringify(e), t.isPlaySuccess),
                    t.onCloseCallBack && t.onCloseCallBack(!1);
            }),
            (t.regRewardedVideoAdEvent_csryw = function (e) {
                e.onReward(t.onRewardVideo_csryw), e.onClose(t.onCloseVideo_csryw), (t.isRegisterVideoEvent = !0);
            }),
            (t.showRewardedVideoAd_csryw = function (e, o, n) {
                if (this.KS) {
                    (t.onCloseCallBack = e), (t.onRewardCallBack = n);
                    var i = this.KS.createRewardedVideoAd({adUnitId: t.adUnitId});
                    (t.isPlaySuccess = !1),
                        i
                            ? (t.isRegisterVideoEvent || t.regRewardedVideoAdEvent_csryw(i),
                              i.show({
                                  success: function () {
                                      console.log("激励视频播放成功"), (t.isPlaySuccess = !0);
                                  },
                                  fail: function (t) {
                                      console.log("激励视频播放失败: " + JSON.stringify(t)), o();
                                  }
                              }))
                            : (console.log("激励视频播放失败!"), o());
                } else n();
            }),
            (t.createRecord_csryw = function () {
                if (this.KS)
                    if (((this.record = this.KS.createMediaRecorder()), this.record)) {
                        var t = this;
                        this.record.onStart(function () {
                            console.log("录频开始成功");
                        }),
                            this.record.onStop(function (e) {
                                (t.recordVideoID = e.videoID), console.log("录频停止成功 " + JSON.stringify(e) + " ");
                            }),
                            this.record.onError(function (t) {
                                console.log("录频过程中发生错误 " + JSON.stringify(t) + " ");
                            }),
                            this.record.onPause(function () {
                                console.log("暂停录制成功!");
                            }),
                            this.record.onResume(function () {
                                console.log("恢复录制成功!");
                            });
                    } else console.log("该版本不支持录屏!"), (this.isCanRecord = !1);
            }),
            (t.startRecord_csryw = function () {
                this.stopRecord_csryw(),
                    this.KS &&
                        ((t.recordStartTime = new Date().getTime()),
                        null == this.record && this.createRecord_csryw(),
                        this.record && this.record.start());
            }),
            (t.stopRecord_csryw = function () {
                this.KS && this.record && ((t.recordStopTime = new Date().getTime()), this.record.stop());
            }),
            (t.pauseRecord_csryw = function () {
                this.KS && this.record && ((t.recordPauseTime = new Date().getTime()), this.record.pause());
            }),
            (t.resumeRecord_csryw = function () {
                this.KS && this.record && ((t.recordResumeTime = new Date().getTime()), this.record.resume());
            }),
            (t.shareRecord_csryw = function (t, e) {
                void 0 === t && (t = null),
                    void 0 === e && (e = null),
                    this.KS &&
                        this.record &&
                        this.record.publishVideo({
                            video: this.recordVideoID,
                            mouldId: this.adMoudleId,
                            callback: function (o) {
                                if (null != o && null != o)
                                    return console.log("分享录屏失败: " + JSON.stringify(o)), void (e && e());
                                console.log("分享录屏成功"), t && t();
                            }
                        });
            }),
            (t.onHide_csryw = function (t) {
                this.KS && this.KS.onHide(t);
            }),
            (t.onShow_csryw = function (t) {
                this.KS && this.KS.onShow(t);
            }),
            (t.getLocation_csryw = function () {
                var t = this;
                this.KS &&
                    this.KS.getLocation({
                        success: function (e) {
                            console.log("获取地理位置成功:" + JSON.stringify(e)), (t.location = e.province + e.city);
                        },
                        fail: function (t) {
                            console.log("获取地理位置失败:" + JSON.stringify(t));
                        }
                    });
            }),
            (t.showInterstitialAd = function (t) {
                if (this.KS) {
                    console.log("插屏插屏create....................");
                    var e = this.KS.createInterstitialAd({adUnitId: n.default.ks_InsAdUnitId_csryw});
                    e
                        .show()
                        .then(function () {
                            console.log("插屏广告展示成功！");
                        })
                        .catch(function (t) {
                            console.log("插屏广告显示失败：", JSON.stringify(t));
                        }),
                        e.onClose(function () {
                            console.log("插屏广告 关闭"), e.destroy(), t && t();
                        });
                }
            }),
            (t.App_ID = "ks716072342233021082"),
            (t.KS = window.kwaigame),
            (t.adUnitId = "2300003758_01"),
            (t.adMoudleId = null),
            (t.isRegisterVideoEvent = !1),
            (t.onRewardCallBack = null),
            (t.onCloseCallBack = null),
            (t.recordStartTime = 0),
            (t.recordStopTime = 0),
            (t.recordPauseTime = 0),
            (t.recordResumeTime = 0),
            (t.recordVideoID = null),
            (t.isCanRecord = !0),
            (t.location = null),
            (t.isPlaySuccess = !1),
            t
        );
    })();
o.default = i;
