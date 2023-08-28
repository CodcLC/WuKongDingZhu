var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("AppPlatform"),
    i = t("AppSwitchConfig"),
    r = t("AppConfig"),
    s = (function () {
        function t() {}
        return (
            Object.defineProperty(t, "BannerInstance_csryw", {
                get: function () {
                    return this._banner_csryw;
                },
                enumerable: !1,
                configurable: !0
            }),
            (t.Login_csryw = function (t, e) {
                window.qg.getSystemInfoSync().platformVersionCode >= 1053
                    ? (console.log("vivo 开始登陆 >= 1053"),
                      window.qg.login().then(
                          function (o) {
                              if (o.data.token) {
                                  var n = o.data.token;
                                  t(n, !0), console.log("vivo 登陆成功,获取到 token : " + n);
                              } else console.log("登录失败 res.data.token 为 null"), e();
                          },
                          function (t) {
                              console.log("登录失败" + JSON.stringify(t)), e();
                          }
                      ))
                    : (console.log("vivo 开始登陆 < 1053"),
                      window.qg.authorize({
                          type: "token",
                          success: function (o) {
                              window.qg.getProfile({
                                  token: o.accessToken,
                                  success: function (e) {
                                      console.log("openid获取成功", e.openid), t(e.openid, !1);
                                  },
                                  fail: function (t, o) {
                                      console.log("获取openid失败 : " + o), e();
                                  }
                              });
                          },
                          fail: function (t, o) {
                              console.log("登录失败" + o), e();
                          }
                      }));
            }),
            (t.showDialog_csryw = function (t, e, o, n, i, r) {
                window.qg.showDialog({
                    title: t,
                    message: e,
                    buttons: o,
                    success: function () {
                        console.log("handling callback"), n();
                    },
                    cancel: function () {
                        console.log("handling cancel"), i();
                    },
                    fail: function (t, e) {
                        console.log("handling fail, code = " + e), r();
                    }
                });
            }),
            (t.createRewardedVideoAd_csryw = function () {
                n.default.is_VIVO_GAME_csryw() &&
                    ((t.rewardedAd_csryw = window.qg.createRewardedVideoAd({posId: t.adUnitId_csryw, style: {}})),
                    t.rewardedAd_csryw.onError(function (t) {
                        switch (t.errCode) {
                            case -3:
                                console.log("激励广告加载失败---调用太频繁", JSON.stringify(t));
                                break;
                            case -4:
                                console.log("激励广告加载失败--- 一分钟内不能重复加载", JSON.stringify(t));
                                break;
                            case 30008:
                                break;
                            default:
                                console.log("激励广告展示失败"), console.log(JSON.stringify(t));
                        }
                    }),
                    t.rewardedAd_csryw.onLoad(function () {
                        var e = t.rewardedAd_csryw.show();
                        e &&
                            e
                                .then(function () {
                                    console.log("激励广告展示成功");
                                })
                                .catch(function (e) {
                                    console.log("激励广告展示失败" + JSON.stringify(e)), t.onFailed();
                                });
                    }),
                    t.rewardedAd_csryw.onClose(function (e) {
                        e && e.isEnded
                            ? (console.log("正常播放结束，可以下发游戏奖励"), t.onAdClose(!0))
                            : (console.log("播放中途退出，不下发游戏奖励"), t.onAdClose(!1));
                    }));
            }),
            (t.showRewardedVideoAd_csryw = function (e, o) {
                if (n.default.is_VIVO_GAME_csryw()) {
                    if (
                        ((t.onAdClose = e),
                        (t.onFailed = o),
                        console.log(
                            "---------------------------------- VIVOAPI.rewardedAd:",
                            t.rewardedAd_csryw + ",VIVOAPI.rewardedAdNum:",
                            t.rewardedAdNum_csryw
                        ),
                        0 == t.rewardedAdNum_csryw)
                    )
                        t.createRewardedVideoAd_csryw();
                    else {
                        var i = t.rewardedAd_csryw.load();
                        i &&
                            i.catch(function (t) {
                                console.log("激励广告load失败" + JSON.stringify(t)), o();
                            });
                    }
                    (t.rewardedAdNum_csryw = 1), console.log("近来showRewardedVideoAd");
                }
            }),
            (t.showBannerAd_csryw = function () {
                if (n.default.is_VIVO_GAME_csryw()) {
                    console.log("===========bannerAd showBanerAd");
                    var e = window.qg.getSystemInfoSync();
                    e.screenWidth,
                        e.screenHeight,
                        (this.mBannerAd_csryw = window.qg.createBannerAd({posId: t.bannerAdUnitId_csryw, style: {}}));
                    var o = this.mBannerAd_csryw.show();
                    o &&
                        o
                            .then(function () {
                                console.log("banner广告展示成功");
                            })
                            .catch(function (t) {
                                switch (t.code) {
                                    case 30003:
                                        console.log(
                                            "新用户7天内不能曝光Banner，请将手机时间调整为7天后，退出游戏重新进入"
                                        );
                                        break;
                                    case 30009:
                                        console.log("10秒内调用广告次数超过1次，10秒后再调用");
                                        break;
                                    case 30002:
                                        console.log("加载广告失败，重新加载广告");
                                        break;
                                    default:
                                        console.log("banner广告展示失败"), console.log(JSON.stringify(t));
                                }
                            }),
                        this.mBannerAd_csryw.onError(function (t) {
                            console.log("Banner广告加载失败111:" + JSON.stringify(t));
                        });
                }
            }),
            (t.hideBannerAd_csryw = function () {
                this.mBannerAd_csryw
                    ? (console.log("===========bannerAd 隐藏"),
                      this.mBannerAd_csryw.hide(),
                      this.mBannerAd_csryw.destroy(),
                      (this.mBannerAd_csryw = null))
                    : console.log("===========bannerAd 为空");
            }),
            (t.navigateToMiniProgram_csryw = function (t, e, o, i, s) {
                n.default.is_VIVO_GAME_csryw() &&
                    (console.log("vivo 跳转游戏： " + t),
                    window.qg.navigateToMiniGame({
                        pkgName: t,
                        path: e,
                        extraData: {from: r.default.AppID_csryw},
                        envVersion: "release",
                        success: function (t) {
                            o && o(t);
                        },
                        fail: function (t) {
                            i && i(t);
                        },
                        complete: function (t) {
                            s && s(t);
                        }
                    }));
            }),
            (t.showInterstitialAd_csryw = function (e, o) {
                if (n.default.is_VIVO_GAME_csryw()) {
                    var i = window.qg.createInterstitialAd({posId: t.InsAdUnitId_csryw});
                    i.onLoad(function () {
                        console.log("插屏广告加载完成");
                    }),
                        i.onClose(function () {
                            e && e();
                        }),
                        i.onError(function (t) {
                            console.log("插屏广告拉取失败", JSON.stringify(t)), o && o();
                        }),
                        i
                            .show()
                            .then(function () {
                                console.log("插屏广告显示成功");
                            })
                            .catch(function () {
                                o && o();
                            });
                } else e && e();
            }),
            (t.getLaunchOptionsSync_csryw = function () {
                return {};
            }),
            (t.share_csryw = function (t) {
                n.default.is_VIVO_GAME_csryw() &&
                    window.qg.share({
                        success: function () {
                            null != t && t(!0), window.qg.showToast({message: "分享成功"});
                        },
                        fail: function () {
                            window.qg.showToast({message: "分享失败"});
                        },
                        cancel: function () {
                            window.qg.showToast({message: "分享失败"});
                        },
                        complete: function () {}
                    });
            }),
            (t.createDesktopIcon_csryw = function (t, e) {
                n.default.is_VIVO_GAME_csryw()
                    ? window.qg.hasShortcutInstalled({
                          success: function (o) {
                              0 == o
                                  ? window.qg.installShortcut({
                                        success: function () {
                                            t && t();
                                        },
                                        fail: function (t) {
                                            for (var o in (e && e(), console.log("创建桌面图标失败！！！！", t), t))
                                                console.log(o, t);
                                        },
                                        complete: function () {}
                                    })
                                  : (console.log("桌面图标已存在！！！！"), e && e());
                          },
                          fail: function (t) {
                              for (var o in (e && e(), console.log("判断桌面图标是否存在失败！！！", t), t))
                                  console.log(o, t);
                          },
                          complete: function () {}
                      })
                    : e && e();
            }),
            (t.tryShowNativeAd_csryw = function () {
                var t = i.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.yuanshengSwitch_csryw,
                    e = i.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.vivoversions_csryw;
                return 1 == t && e == r.default.Versions_csryw;
            }),
            (t.tryPopCreateDestopIcon_csryw = function (e, o) {
                n.default.is_VIVO_GAME_csryw() &&
                1 == i.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.addToDesktop_csryw
                    ? t.createDesktopIcon_csryw(e, o)
                    : null != o && o();
            }),
            (t.tryShowInsAd_csryw = function (e, o) {
                1 == i.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.chapingSwitch_csryw &&
                100 * Math.random() <=
                    i.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.chaping_csryw
                    ? t.showInterstitialAd_csryw(
                          function () {
                              e && e();
                          },
                          function () {
                              o && o();
                          }
                      )
                    : o && o();
            }),
            (t.LoadCahcedNativeAd_csryw = function () {}),
            (t.hasShortcutInstalled_csryw = function (t, e) {
                window.qg.hasShortcutInstalled({
                    success: function (e) {
                        0 == e
                            ? (console.log("桌面图标不存在！！！！"), t && t(!1))
                            : (console.log("桌面图标已存在！！！！"), t && t(!0));
                    },
                    fail: function (t) {
                        for (var o in (e && e(), console.log("判断桌面图标是否存在失败！！！", t), t))
                            console.log(o, t);
                    },
                    complete: function () {}
                });
            }),
            (t.adUnitId_csryw = ""),
            (t.bannerAdUnitId_csryw = ""),
            (t.nativeAdId_csryw = ""),
            (t.InsAdUnitId_csryw = ""),
            (t.rewardedAd_csryw = null),
            (t.rewardedAdNum_csryw = 0),
            (t._banner_csryw = null),
            (t.mBannerAd_csryw = null),
            (t._cachedNativeAd_csryw = null),
            (t._cachedAdItem_csryw = null),
            (t._cachedimgUrl_csryw = null),
            (t._tryLoadCount_csryw = 5),
            t
        );
    })();
o.default = s;
