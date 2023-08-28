var t = require;
var e = module;
var o = exports;
var n,
    i =
        (this && this.__extends) ||
        ((n = function (t, e) {
            return (n =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
        }),
        function (t, e) {
            function o() {
                this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
        }),
    r =
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
Object.defineProperty(o, "__esModule", {value: !0});
var s = t("DataMgr"),
    a = cc._decorator,
    c = a.ccclass,
    l = a.property,
    d = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.juanzhou_sp = null),
                (e.ShowNode = null),
                (e.labs = []),
                (e.pro = null),
                (e.red_hitn = null),
                (e.hint_lab = null),
                (e.boss_t = null),
                (e.name_bg = null),
                (e.title_lab = null),
                (e.now_start_day = -999),
                (e.level_names = [
                    "",
                    "蛇盘山",
                    "白虎岭",
                    "火焰山",
                    "女儿国",
                    "祭赛国界",
                    "荆棘岭界",
                    "乱石山地",
                    "鬼火石窟",
                    "七绝大森林",
                    "朱紫国界",
                    "盘丝洞",
                    "盘丝悬崖",
                    "盘丝山地",
                    "狮驼岭边界",
                    "狮驼岭"
                ]),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.start = function () {
                this.title_lab.string = this.level_names[s.DataMgr.user_gamedata.select_level];
            }),
            (e.prototype.ShowDay = function (t, e) {
                var o = this;
                if (((this.node.opacity = 255), (this.node.active = !0), this.now_start_day + 5 < t + 1)) {
                    var n = 5 * Math.floor(t / 5) + 1;
                    this.labs[5].string = "第" + e + "天";
                    for (var i = 0; i < 5; i++) this.labs[i].string = "第" + (n + i) + "天";
                    (this.now_start_day = n),
                        6 == this.now_start_day ||
                        16 == this.now_start_day ||
                        26 == this.now_start_day ||
                        36 == this.now_start_day
                            ? (this.boss_t.active = !0)
                            : (this.boss_t.active = !1);
                }
                (this.hint_lab.string = "第" + t + "天"),
                    (this.pro.progress = (t - this.now_start_day + 1) / 5),
                    (this.red_hitn.x = this.labs[t - this.now_start_day].node.x),
                    (this.ShowNode.opacity = 0),
                    this.juanzhou_sp.setAnimation(0, "play1", !1),
                    cc.tween(this.ShowNode).delay(0.6).to(0.3, {opacity: 255}).delay(3).start(),
                    cc
                        .tween(this.node)
                        .delay(4.2)
                        .to(0.3, {opacity: 0})
                        .call(function () {
                            o.node.active = !1;
                        })
                        .start(),
                    (this.name_bg.opacity = 0),
                    cc.tween(this.name_bg).delay(0.6).to(0.3, {opacity: 255}).delay(3).start();
            }),
            r([l(sp.Skeleton)], e.prototype, "juanzhou_sp", void 0),
            r([l(cc.Node)], e.prototype, "ShowNode", void 0),
            r([l(cc.Label)], e.prototype, "labs", void 0),
            r([l(cc.ProgressBar)], e.prototype, "pro", void 0),
            r([l(cc.Node)], e.prototype, "red_hitn", void 0),
            r([l(cc.Label)], e.prototype, "hint_lab", void 0),
            r([l(cc.Node)], e.prototype, "boss_t", void 0),
            r([l(cc.Node)], e.prototype, "name_bg", void 0),
            r([l(cc.Label)], e.prototype, "title_lab", void 0),
            r([c], e)
        );
    })(cc.Component);
o.default = d;
