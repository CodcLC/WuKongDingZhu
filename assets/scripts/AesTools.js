var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", { value: !0 });
var n = t("aes"),
    i = (function() {
        function t() {}
        return (
            (t.encrypt_csryw = function(e) {
                var o = n.enc.Utf8.parse(t.KEY_csryw),
                    i = n.enc.Utf8.parse(t.IV_csryw);
                return n.AES.encrypt(e, o, { iv: i, mode: n.mode.CBC, padding: n.pad.Pkcs7 }).toString();
            }),
            (t.decrypt_csryw = function(e) {
                var o = n.enc.Utf8.parse(t.KEY_csryw),
                    i = n.enc.Utf8.parse(t.IV_csryw);
                return n.AES.decrypt(e, o, { iv: i, padding: n.pad.Pkcs7 }).toString(n.enc.Utf8);
            }),
            (t.KEY_csryw = "b#63fFJ6AvkK3YT*"),
            (t.IV_csryw = "J$f4DU%sNL73M&Go"),
            t
        );
    })();
o.default = i;