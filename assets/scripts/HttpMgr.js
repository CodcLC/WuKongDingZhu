var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("NetConfig"),
    i = (function () {
        function t() {}
        return (
            (t.Post = function (t, e, o, i) {
                var r = new XMLHttpRequest();
                r.open("POST", n.default.serverUrl_csryw + t, !0),
                    r.setRequestHeader("Content-type", "application/json"),
                    r.send(JSON.stringify(e)),
                    (r.onreadystatechange = function () {
                        if (4 == r.readyState && 200 == r.status) {
                            var t = r.responseText;
                            o && o.call(i, t);
                        }
                    });
            }),
            t
        );
    })();
o.default = i;
