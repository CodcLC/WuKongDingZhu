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
var s = cc._decorator,
    a = s.ccclass,
    c = s.property,
    l = s.menu,
    d = (s.disallowMultiple, s.executionOrder, s.requireComponent, s.executeInEditMode),
    u = s.playOnFocus,
    h = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e._isEditorPlay_csryw = !0), (e._isEditoAttach_csryw = !1), e;
        }
        return (
            i(e, t),
            Object.defineProperty(e.prototype, "isEditorPlay", {
                get: function () {
                    return this._isEditorPlay_csryw;
                },
                set: function (t) {
                    (this._isEditorPlay_csryw = t), this._isEditorPlay_csryw;
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "isEditorAttach", {
                get: function () {
                    return this._isEditoAttach_csryw;
                },
                set: function (t) {
                    (this._isEditoAttach_csryw = t),
                        this._isEditoAttach_csryw && this.attachUtil.generateAllAttachedNodes();
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.update = function (e) {
                t.prototype.update.call(this, e);
            }),
            (e.prototype.dumpSpineInfo_csryw = function () {
                var t = this._skeleton.data,
                    e = t.animations,
                    o = t.events,
                    n = t.skins;
                console.group("spine : 节点 " + this.name + " ,动画 <" + this._N$skeletonData._name + " >");
                for (var i = "[", r = 0; r < e.length; r++) 0 != r && (i += ","), (i += a = e[r].name);
                i += "]";
                var s = "[";
                for (r = 0; r < o.length; r++) {
                    var a = o[r].name,
                        c = o[r].stringValue;
                    "" == c && (c = '""'), 0 != r && (s += ","), (s = s + a + ":" + c);
                }
                s += "]";
                var l = "[";
                for (r = 0; r < n.length; r++) 0 != r && (l += ","), (l += a = n[r].name);
                (l += "]"),
                    console.log(
                        "%c 动作集合： %c " + i + " ",
                        "background: #35495E;padding: 1px;border-radius: 2px 0 0 2px;color: #fff;",
                        "background: #409EFF;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;"
                    ),
                    console.log(
                        "%c 事件集合： %c " + s + " ",
                        "background: #35495E;padding: 1px;border-radius: 2px 0 0 2px;color: #fff;",
                        "background: #409EFF;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;"
                    ),
                    console.log(
                        "%c 皮肤集合： %c " + l + " ",
                        "background: #35495E;padding: 1px;border-radius: 2px 0 0 2px;color: #fff;",
                        "background: #409EFF;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;"
                    ),
                    console.groupEnd();
            }),
            r([c()], e.prototype, "_isEditorPlay_csryw", void 0),
            r(
                [
                    c({
                        tooltip:
                            "编辑器中自动播放动作\n勾选状态，在选中节点时，帧率60，否则只有必要时才重绘\n非勾选，不自动播放",
                        type: cc.Boolean
                    })
                ],
                e.prototype,
                "isEditorPlay",
                null
            ),
            r([c()], e.prototype, "_isEditoAttach_csryw", void 0),
            r(
                [
                    c({
                        tooltip: "编辑器中生成挂点\n勾选状态，生成挂点 ATTACHED_NODE_TREE\n非勾选，不做操作",
                        type: cc.Boolean
                    })
                ],
                e.prototype,
                "isEditorAttach",
                null
            ),
            r([a, d, u, l("FM组件/扩展/FMSkeletonExtend")], e)
        );
    })(sp.Skeleton);
o.default = h;
