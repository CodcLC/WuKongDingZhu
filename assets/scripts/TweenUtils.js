var t = require;
var e = module;
var o = exports;
var n =
    (this && this.__decorate) ||
    function (t, e, o, n) {
        var i,
            r = arguments.length,
            s = r < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
        else
            for (var a = t.length - 1; a >= 0; a--)
                (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
        return r > 3 && s && Object.defineProperty(e, o, s), s;
    };
Object.defineProperty(o, "__esModule", {value: !0}), (o.TweenUtils = void 0);
var i = cc._decorator,
    r = i.ccclass,
    s =
        (i.property,
        (function () {
            function t() {}
            return (
                (t.prototype.start = function () {}),
                (t.bezierTo = function (t, e, o, n, i, r) {
                    return (
                        ((r = r || Object.create(null)).onUpdate = function (e, r) {
                            var s, a, c, l, d, u;
                            t.position =
                                ((c = n),
                                (l = i),
                                (d = (1 - (s = r)) * (1 - s) * (a = o).x + 2 * s * (1 - s) * c.x + s * s * l.x),
                                (u = (1 - s) * (1 - s) * a.y + 2 * s * (1 - s) * c.y + s * s * l.y),
                                cc.v3(d, u, 0));
                        }),
                        cc.tween(t).to(e, {}, r)
                    );
                }),
                n([r("TweenUtils")], t)
            );
        })());
o.TweenUtils = s;
