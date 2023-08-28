var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = (function () {
    function t() {
        this.nodepool = {};
    }
    return (
        (t.prototype.SetNode = function (t, e) {
            this.nodepool[t] = [e];
        }),
        (t.prototype.GetNode = function (t) {
            return this.nodepool[t]
                ? 1 == this.nodepool[t].length
                    ? cc.instantiate(this.nodepool[t][0])
                    : this.nodepool[t].pop()
                : (console.warn("未设置化节点池节点"), null);
        }),
        (t.prototype.PutNode = function (t, e) {
            if (!this.nodepool[t]) return console.warn("未设置化节点池节点"), null;
            this.nodepool[t].push(e);
        }),
        t
    );
})();
o.default = n;
