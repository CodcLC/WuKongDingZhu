var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("FMInterface"),
    i = (function () {
        function t() {}
        return (
            (t.loadBundleByName_csryw = function (t, e) {
                cc.assetManager.loadBundle(t, function (t, o) {
                    n.callFM_csryw(e, t, o);
                });
            }),
            (t.getBundle_csryw = function (t) {
                return cc.assetManager.getBundle(t);
            }),
            (t.removeBundle_csryw = function (t, e) {
                void 0 === e && (e = !0);
                var o = this.getBundle_csryw(t);
                o && e && o.releaseAll(), cc.assetManager.removeBundle(o);
            }),
            (t.runScene_csryw = function (t, e, o) {
                void 0 === o && (o = null);
                var i = this.getBundle_csryw(t);
                i
                    ? i.loadScene(e, function (t, e) {
                          o && n.callFM_csryw(o), cc.director.runScene(e);
                      })
                    : this.loadBundleByName_csryw(
                          t,
                          n.handleFM_csryw(function (t, i) {
                              i.loadScene(e, function (t, e) {
                                  o && n.callFM_csryw(o), cc.director.runScene(e);
                              });
                          }, this)
                      );
            }),
            t
        );
    })();
o.default = i;
