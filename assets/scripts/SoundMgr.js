var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = (function () {
    function t() {}
    return (
        (t.iseffEnabled_csryw = function () {
            return t.enabled_eff_csryw;
        }),
        (t.seteffEnabled_csryw = function (e) {
            (t.enabled_eff_csryw = e), t.enabled_eff_csryw || cc.audioEngine.stopAllEffects();
        }),
        (t.isSoundEnabled_csryw = function () {
            return t.enabled_csryw;
        }),
        (t.setSoundEnabled_csryw = function (e) {
            (t.enabled_csryw = e), t.enabled_csryw ? t.autoPlayMusic_csryw() : t.autoStopMusic_csryw();
        }),
        (t.playMusic_csryw = function (e, o, n) {
            if (
                (void 0 === o && (o = 0.5),
                void 0 === n && (n = "subResGame"),
                this.stopMusic_csryw(),
                (t.musicPath = e),
                t.enabled_csryw)
            ) {
                var i = t.getSoundUrl_csryw(e),
                    r = cc.assetManager.getBundle(n);
                r &&
                    r.load(i, cc.AudioClip, function (t, e) {
                        if (t) return console.log("加载AudioClip错误>:", t), null;
                        cc.audioEngine.playMusic(e, !0), cc.audioEngine.setMusicVolume(o);
                    });
            }
        }),
        (t.autoPlayMusic_csryw = function () {
            "" != t.musicPath && t.playMusic_csryw(t.musicPath);
        }),
        (t.autoStopMusic_csryw = function () {
            cc.audioEngine.stopMusic();
        }),
        (t.stopMusic_csryw = function () {
            (t.musicPath = ""), cc.audioEngine.stopMusic();
        }),
        (t.playSound_csryw = function (e, o, n) {
            if ((void 0 === o && (o = 0.5), void 0 === n && (n = "subResGame"), t.enabled_eff_csryw)) {
                var i = t.getSoundUrl_csryw(e),
                    r = cc.assetManager.getBundle(n);
                r &&
                    r.load(i, cc.AudioClip, function (t, e) {
                        if (t) return console.log("加载AudioClip错误>:", t), null;
                        cc.audioEngine.play(e, !1, o);
                    });
            }
        }),
        (t.playSound_csryw2 = function (e, o, n, i, r) {
            if ((void 0 === o && (o = 0.5), void 0 === n && (n = "subResGame"), t.enabled_eff_csryw)) {
                var s = t.getSoundUrl_csryw(e),
                    a = cc.assetManager.getBundle(n);
                a &&
                    a.load(s, cc.AudioClip, function (t, e) {
                        if (t) return console.log("加载AudioClip错误>:", t), null;
                        var n = cc.audioEngine.play(e, !0, o);
                        i.call(r, n);
                    });
            }
        }),
        (t.playSpineSound_csryw = function (e, o) {
            if (t.enabled_eff_csryw) {
                var n = t.soundSpineResPath_csryw + o;
                cc.resources.load(n, cc.AudioClip, function (t, e) {
                    t ? LogUtils.error_csryw(t) : cc.audioEngine.play(e, !1, 1);
                });
            }
        }),
        (t.getSoundUrl_csryw = function (e) {
            return t.soundResPath_csryw + e;
        }),
        (t.soundResPath_csryw = "Sound/"),
        (t.soundSpineResPath_csryw = "Spine/"),
        (t.musicPath = ""),
        (t.enabled_csryw = !0),
        (t.enabled_eff_csryw = !0),
        t
    );
})();
o.default = n;
