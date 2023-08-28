var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = (function () {
    function t() {}
    return (
        (t.removeAllRemote_csryw = function () {
            for (var t in this.remoteArrayTexture_csryw) this.remoteArrayTexture_csryw[t].decRef();
            this.remoteArrayTexture_csryw = {};
        }),
        (t.loadRemote_csryw = function (t, e) {
            var o = this;
            this.remoteArrayTexture_csryw[t]
                ? callFM_csryw(e, null, this.remoteArrayTexture_csryw[t])
                : cc.assetManager.loadRemote(t, function (n, i) {
                      n
                          ? callFM_csryw(e, n, null)
                          : (o.remoteArrayTexture_csryw[t] ||
                                ((o.remoteArrayTexture_csryw[t] = i), o.remoteArrayTexture_csryw[t].addRef()),
                            callFM_csryw(e, null, o.remoteArrayTexture_csryw[t]));
                  });
        }),
        (t.remoteArrayTexture_csryw = {}),
        t
    );
})();
o.default = n;
