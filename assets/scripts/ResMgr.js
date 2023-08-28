var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = (function () {
    function t() {}
    return (
        (t.loadBundleRes = function (t, e, o, n, i) {
            var r = cc.assetManager.getBundle(t);
            r
                ? r.load(e, i, function (t, i) {
                      t ? LogUtils.warn_csryw("加载资源异常：", e, t) : o && o.call(n, i);
                  })
                : cc.assetManager.loadBundle(t, function (t, r) {
                      r
                          ? r.load(e, i, function (t, i) {
                                t ? LogUtils.warn_csryw("加载资源异常：", e, t) : o && o.call(n, i);
                            })
                          : LogUtils.warn_csryw("加载", r, "分包出错", t);
                  });
        }),
        (t.loadBundleSpriteFrame = function (t, e, o, n) {
            this.loadBundleRes(t, e, o, n, cc.SpriteFrame);
        }),
        (t.loadBundlePrefab = function (t, e, o, n) {
            this.loadBundleRes(t, e, o, n, cc.Prefab);
        }),
        (t.loadBundleAudioClip = function (t, e, o, n) {
            this.loadBundleRes(t, e, o, n, cc.AudioClip);
        }),
        (t.loadBundleJson = function (t, e, o, n) {
            this.loadBundleRes(t, e, o, n, cc.JsonAsset);
        }),
        (t.loadBundleSpine = function (t, e, o, n) {
            this.loadBundleRes(t, e, o, n, sp.SkeletonData);
        }),
        (t.LoadBundle = function (t, e, o, n) {
            cc.assetManager.loadBundle(t, function (i, r) {
                r ? e && e.call(n, r) : (o && o.call(n, r), LogUtils.warn_csryw("加载", t, "分包出错", i));
            });
        }),
        t
    );
})();
o.default = n;
