var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = (function () {
    function t() {}
    return (
        (t.createPrefab_csryw = function (t, e, o) {
            var n = cc.instantiate(t);
            return o ? o.addChild(n) : cc.director.getScene().getChildByName("Canvas").addChild(n), n.getComponent(e);
        }),
        t
    );
})();
o.default = n;
