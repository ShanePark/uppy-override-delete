"use strict";
(() => {
    var x0 = Object.create;
    var Fa = Object.defineProperty;
    var F0 = Object.getOwnPropertyDescriptor;
    var E0 = Object.getOwnPropertyNames;
    var O0 = Object.getPrototypeOf,
        R0 = Object.prototype.hasOwnProperty;
    var n = (i, e) => Fa(i, "name", {
        value: e,
        configurable: !0
    });
    var He = (i, e) => () => (e || i((e = {
            exports: {}
        }).exports, e), e.exports),
        yo = (i, e) => {
            for (var t in e) Fa(i, t, {
                get: e[t],
                enumerable: !0
            })
        },
        C0 = (i, e, t, r) => {
            if (e && typeof e == "object" || typeof e == "function")
                for (let s of E0(e)) !R0.call(i, s) && s !== t && Fa(i, s, {
                    get: () => e[s],
                    enumerable: !(r = F0(e, s)) || r.enumerable
                });
            return i
        };
    var oe = (i, e, t) => (t = i != null ? x0(O0(i)) : {}, C0(e || !i || !i.__esModule ? Fa(t, "default", {
        value: i,
        enumerable: !0
    }) : t, i));
    var hu = He((Bx, Qd) => {
        Qd.exports = n(function() {
            var e = {},
                t = e._fns = {};
            e.emit = n(function(a, l, h, c, d, f, y) {
                var w = r(a);
                w.length && s(a, w, [l, h, c, d, f, y])
            }, "emit"), e.on = n(function(a, l) {
                t[a] || (t[a] = []), t[a].push(l)
            }, "on"), e.once = n(function(a, l) {
                function h() {
                    l.apply(this, arguments), e.off(a, h)
                }
                n(h, "one"), this.on(a, h)
            }, "once"), e.off = n(function(a, l) {
                var h = [];
                if (a && l) {
                    var c = this._fns[a],
                        d = 0,
                        f = c ? c.length : 0;
                    for (d; d < f; d++) c[d] !== l && h.push(c[d])
                }
                h.length ? this._fns[a] = h : delete this._fns[a]
            }, "off");

            function r(o) {
                var a = t[o] ? t[o] : [],
                    l = o.indexOf(":"),
                    h = l === -1 ? [o] : [o.substring(0, l), o.substring(l + 1)],
                    c = Object.keys(t),
                    d = 0,
                    f = c.length;
                for (d; d < f; d++) {
                    var y = c[d];
                    if (y === "*" && (a = a.concat(t[y])), h.length === 2 && h[0] === y) {
                        a = a.concat(t[y]);
                        break
                    }
                }
                return a
            }
            n(r, "getListeners");

            function s(o, a, l) {
                var h = 0,
                    c = a.length;
                for (h; h < c && a[h]; h++) a[h].event = o, a[h].apply(a[h], l)
            }
            return n(s, "emitAll"), e
        }, "createNamespaceEmitter")
    });
    var bo = He((zx, ip) => {
        var tp = "Expected a function",
            Zd = NaN,
            N0 = "[object Symbol]",
            B0 = /^\s+|\s+$/g,
            I0 = /^[-+]0x[0-9a-f]+$/i,
            L0 = /^0b[01]+$/i,
            M0 = /^0o[0-7]+$/i,
            z0 = parseInt,
            j0 = typeof global == "object" && global && global.Object === Object && global,
            H0 = typeof self == "object" && self && self.Object === Object && self,
            $0 = j0 || H0 || Function("return this")(),
            q0 = Object.prototype,
            V0 = q0.toString,
            W0 = Math.max,
            K0 = Math.min,
            cu = n(function() {
                return $0.Date.now()
            }, "now");

        function G0(i, e, t) {
            var r, s, o, a, l, h, c = 0,
                d = !1,
                f = !1,
                y = !0;
            if (typeof i != "function") throw new TypeError(tp);
            e = ep(e) || 0, Ea(t) && (d = !!t.leading, f = "maxWait" in t, o = f ? W0(ep(t.maxWait) || 0, e) : o, y = "trailing" in t ? !!t.trailing : y);

            function w(k) {
                var B = r,
                    z = s;
                return r = s = void 0, c = k, a = i.apply(z, B), a
            }
            n(w, "invokeFunc");

            function S(k) {
                return c = k, l = setTimeout(F, e), d ? w(k) : a
            }
            n(S, "leadingEdge");

            function R(k) {
                var B = k - h,
                    z = k - c,
                    G = e - B;
                return f ? K0(G, o - z) : G
            }
            n(R, "remainingWait");

            function x(k) {
                var B = k - h,
                    z = k - c;
                return h === void 0 || B >= e || B < 0 || f && z >= o
            }
            n(x, "shouldInvoke");

            function F() {
                var k = cu();
                if (x(k)) return N(k);
                l = setTimeout(F, R(k))
            }
            n(F, "timerExpired");

            function N(k) {
                return l = void 0, y && r ? w(k) : (r = s = void 0, a)
            }
            n(N, "trailingEdge");

            function H() {
                l !== void 0 && clearTimeout(l), c = 0, r = h = s = l = void 0
            }
            n(H, "cancel");

            function q() {
                return l === void 0 ? a : N(cu())
            }
            n(q, "flush");

            function K() {
                var k = cu(),
                    B = x(k);
                if (r = arguments, s = this, h = k, B) {
                    if (l === void 0) return S(h);
                    if (f) return l = setTimeout(F, e), w(h)
                }
                return l === void 0 && (l = setTimeout(F, e)), a
            }
            return n(K, "debounced"), K.cancel = H, K.flush = q, K
        }
        n(G0, "debounce");

        function X0(i, e, t) {
            var r = !0,
                s = !0;
            if (typeof i != "function") throw new TypeError(tp);
            return Ea(t) && (r = "leading" in t ? !!t.leading : r, s = "trailing" in t ? !!t.trailing : s), G0(i, e, {
                leading: r,
                maxWait: e,
                trailing: s
            })
        }
        n(X0, "throttle");

        function Ea(i) {
            var e = typeof i;
            return !!i && (e == "object" || e == "function")
        }
        n(Ea, "isObject");

        function Y0(i) {
            return !!i && typeof i == "object"
        }
        n(Y0, "isObjectLike");

        function J0(i) {
            return typeof i == "symbol" || Y0(i) && V0.call(i) == N0
        }
        n(J0, "isSymbol");

        function ep(i) {
            if (typeof i == "number") return i;
            if (J0(i)) return Zd;
            if (Ea(i)) {
                var e = typeof i.valueOf == "function" ? i.valueOf() : i;
                i = Ea(e) ? e + "" : e
            }
            if (typeof i != "string") return i === 0 ? i : +i;
            i = i.replace(B0, "");
            var t = L0.test(i);
            return t || M0.test(i) ? z0(i.slice(2), t ? 2 : 8) : I0.test(i) ? Zd : +i
        }
        n(ep, "toNumber");
        ip.exports = X0
    });
    var Ca = He((a3, np) => {
        np.exports = n(function(e) {
            if (typeof e != "number" || isNaN(e)) throw new TypeError(`Expected a number, got ${typeof e}`);
            let t = e < 0,
                r = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
            if (t && (e = -e), e < 1) return `${(t?"-":"")+e} B`;
            let s = Math.min(Math.floor(Math.log(e) / Math.log(1024)), r.length - 1);
            e = Number(e / Math.pow(1024, s));
            let o = r[s];
            return e >= 10 || e % 1 === 0 ? `${(t?"-":"")+e.toFixed(0)} ${o}` : `${(t?"-":"")+e.toFixed(1)} ${o}`
        }, "prettierBytes")
    });
    var up = He((u3, lp) => {
        "use strict";

        function ap(i, e) {
            this.text = i = i || "", this.hasWild = ~i.indexOf("*"), this.separator = e, this.parts = i.split(e)
        }
        n(ap, "WildcardMatcher");
        ap.prototype.match = function(i) {
            var e = !0,
                t = this.parts,
                r, s = t.length,
                o;
            if (typeof i == "string" || i instanceof String)
                if (!this.hasWild && this.text != i) e = !1;
                else {
                    for (o = (i || "").split(this.separator), r = 0; e && r < s; r++) t[r] !== "*" && (r < o.length ? e = t[r] === o[r] : e = !1);
                    e = e && o
                }
            else if (typeof i.splice == "function")
                for (e = [], r = i.length; r--;) this.match(i[r]) && (e[e.length] = i[r]);
            else if (typeof i == "object") {
                e = {};
                for (var a in i) this.match(a) && (e[a] = i[a])
            }
            return e
        };
        lp.exports = function(i, e, t) {
            var r = new ap(i, t || /[\/\.]/);
            return typeof e < "u" ? r.match(e) : r
        }
    });
    var cp = He((c3, hp) => {
        var ib = up(),
            rb = /[\/\+\.]/;
        hp.exports = function(i, e) {
            function t(r) {
                var s = ib(r, i, rb);
                return s && s.length >= 2
            }
            return n(t, "test"), e ? t(e.split(";")[0]) : t
        }
    });
    var Tt = He((z5, za) => {
        (function() {
            "use strict";
            var i = {}.hasOwnProperty;

            function e() {
                for (var t = [], r = 0; r < arguments.length; r++) {
                    var s = arguments[r];
                    if (!!s) {
                        var o = typeof s;
                        if (o === "string" || o === "number") t.push(s);
                        else if (Array.isArray(s)) {
                            if (s.length) {
                                var a = e.apply(null, s);
                                a && t.push(a)
                            }
                        } else if (o === "object")
                            if (s.toString === Object.prototype.toString)
                                for (var l in s) i.call(s, l) && s[l] && t.push(l);
                            else t.push(s.toString())
                    }
                }
                return t.join(" ")
            }
            n(e, "classNames"), typeof za < "u" && za.exports ? (e.default = e, za.exports = e) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
                return e
            }) : window.classNames = e
        })()
    });
    var Wf = He((tR, Vf) => {
        var W1 = "Expected a function",
            $f = NaN,
            K1 = "[object Symbol]",
            G1 = /^\s+|\s+$/g,
            X1 = /^[-+]0x[0-9a-f]+$/i,
            Y1 = /^0b[01]+$/i,
            J1 = /^0o[0-7]+$/i,
            Q1 = parseInt,
            Z1 = typeof global == "object" && global && global.Object === Object && global,
            ew = typeof self == "object" && self && self.Object === Object && self,
            tw = Z1 || ew || Function("return this")(),
            iw = Object.prototype,
            rw = iw.toString,
            sw = Math.max,
            ow = Math.min,
            Zu = n(function() {
                return tw.Date.now()
            }, "now");

        function nw(i, e, t) {
            var r, s, o, a, l, h, c = 0,
                d = !1,
                f = !1,
                y = !0;
            if (typeof i != "function") throw new TypeError(W1);
            e = qf(e) || 0, eh(t) && (d = !!t.leading, f = "maxWait" in t, o = f ? sw(qf(t.maxWait) || 0, e) : o, y = "trailing" in t ? !!t.trailing : y);

            function w(k) {
                var B = r,
                    z = s;
                return r = s = void 0, c = k, a = i.apply(z, B), a
            }
            n(w, "invokeFunc");

            function S(k) {
                return c = k, l = setTimeout(F, e), d ? w(k) : a
            }
            n(S, "leadingEdge");

            function R(k) {
                var B = k - h,
                    z = k - c,
                    G = e - B;
                return f ? ow(G, o - z) : G
            }
            n(R, "remainingWait");

            function x(k) {
                var B = k - h,
                    z = k - c;
                return h === void 0 || B >= e || B < 0 || f && z >= o
            }
            n(x, "shouldInvoke");

            function F() {
                var k = Zu();
                if (x(k)) return N(k);
                l = setTimeout(F, R(k))
            }
            n(F, "timerExpired");

            function N(k) {
                return l = void 0, y && r ? w(k) : (r = s = void 0, a)
            }
            n(N, "trailingEdge");

            function H() {
                l !== void 0 && clearTimeout(l), c = 0, r = h = s = l = void 0
            }
            n(H, "cancel");

            function q() {
                return l === void 0 ? a : N(Zu())
            }
            n(q, "flush");

            function K() {
                var k = Zu(),
                    B = x(k);
                if (r = arguments, s = this, h = k, B) {
                    if (l === void 0) return S(h);
                    if (f) return l = setTimeout(F, e), w(h)
                }
                return l === void 0 && (l = setTimeout(F, e)), a
            }
            return n(K, "debounced"), K.cancel = H, K.flush = q, K
        }
        n(nw, "debounce");

        function eh(i) {
            var e = typeof i;
            return !!i && (e == "object" || e == "function")
        }
        n(eh, "isObject");

        function aw(i) {
            return !!i && typeof i == "object"
        }
        n(aw, "isObjectLike");

        function lw(i) {
            return typeof i == "symbol" || aw(i) && rw.call(i) == K1
        }
        n(lw, "isSymbol");

        function qf(i) {
            if (typeof i == "number") return i;
            if (lw(i)) return $f;
            if (eh(i)) {
                var e = typeof i.valueOf == "function" ? i.valueOf() : i;
                i = eh(e) ? e + "" : e
            }
            if (typeof i != "string") return i === 0 ? i : +i;
            i = i.replace(G1, "");
            var t = Y1.test(i);
            return t || J1.test(i) ? Q1(i.slice(2), t ? 2 : 8) : X1.test(i) ? $f : +i
        }
        n(qf, "toNumber");
        Vf.exports = nw
    });
    var Xf = He((uR, Gf) => {
        Gf.exports = n(function(e, t) {
            if (e === t) return !0;
            for (var r in e)
                if (!(r in t)) return !1;
            for (var r in t)
                if (e[r] !== t[r]) return !1;
            return !0
        }, "isShallowEqual")
    });
    var Qf = He((TR, Jf) => {
        Jf.exports = n(function(e) {
            if (typeof e != "number" || isNaN(e)) throw new TypeError("Expected a number, got " + typeof e);
            var t = e < 0,
                r = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
            if (t && (e = -e), e < 1) return (t ? "-" : "") + e + " B";
            var s = Math.min(Math.floor(Math.log(e) / Math.log(1024)), r.length - 1);
            e = Number(e / Math.pow(1024, s));
            var o = r[s];
            return e >= 10 || e % 1 === 0 ? (t ? "-" : "") + e.toFixed(0) + " " + o : (t ? "-" : "") + e.toFixed(1) + " " + o
        }, "prettierBytes")
    });
    var xm = He((bh, wh) => {
        (function(i, e) {
            typeof bh == "object" && typeof wh < "u" ? wh.exports = e() : typeof define == "function" && define.amd ? define(e) : (i = i || self, i.Cropper = e())
        })(bh, function() {
            "use strict";

            function i(v) {
                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? i = n(function(p) {
                    return typeof p
                }, "_typeof") : i = n(function(p) {
                    return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p
                }, "_typeof"), i(v)
            }
            n(i, "_typeof");

            function e(v, p) {
                if (!(v instanceof p)) throw new TypeError("Cannot call a class as a function")
            }
            n(e, "_classCallCheck");

            function t(v, p) {
                for (var g = 0; g < p.length; g++) {
                    var m = p[g];
                    m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(v, m.key, m)
                }
            }
            n(t, "_defineProperties");

            function r(v, p, g) {
                return p && t(v.prototype, p), g && t(v, g), v
            }
            n(r, "_createClass");

            function s(v, p, g) {
                return p in v ? Object.defineProperty(v, p, {
                    value: g,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : v[p] = g, v
            }
            n(s, "_defineProperty");

            function o(v, p) {
                var g = Object.keys(v);
                if (Object.getOwnPropertySymbols) {
                    var m = Object.getOwnPropertySymbols(v);
                    p && (m = m.filter(function(_) {
                        return Object.getOwnPropertyDescriptor(v, _).enumerable
                    })), g.push.apply(g, m)
                }
                return g
            }
            n(o, "ownKeys");

            function a(v) {
                for (var p = 1; p < arguments.length; p++) {
                    var g = arguments[p] != null ? arguments[p] : {};
                    p % 2 ? o(Object(g), !0).forEach(function(m) {
                        s(v, m, g[m])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(g)) : o(Object(g)).forEach(function(m) {
                        Object.defineProperty(v, m, Object.getOwnPropertyDescriptor(g, m))
                    })
                }
                return v
            }
            n(a, "_objectSpread2");

            function l(v) {
                return h(v) || c(v) || d(v) || y()
            }
            n(l, "_toConsumableArray");

            function h(v) {
                if (Array.isArray(v)) return f(v)
            }
            n(h, "_arrayWithoutHoles");

            function c(v) {
                if (typeof Symbol < "u" && Symbol.iterator in Object(v)) return Array.from(v)
            }
            n(c, "_iterableToArray");

            function d(v, p) {
                if (!!v) {
                    if (typeof v == "string") return f(v, p);
                    var g = Object.prototype.toString.call(v).slice(8, -1);
                    if (g === "Object" && v.constructor && (g = v.constructor.name), g === "Map" || g === "Set") return Array.from(v);
                    if (g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)) return f(v, p)
                }
            }
            n(d, "_unsupportedIterableToArray");

            function f(v, p) {
                (p == null || p > v.length) && (p = v.length);
                for (var g = 0, m = new Array(p); g < p; g++) m[g] = v[g];
                return m
            }
            n(f, "_arrayLikeToArray");

            function y() {
                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
            }
            n(y, "_nonIterableSpread");
            var w = typeof window < "u" && typeof window.document < "u",
                S = w ? window : {},
                R = w && S.document.documentElement ? "ontouchstart" in S.document.documentElement : !1,
                x = w ? "PointerEvent" in S : !1,
                F = "cropper",
                N = "all",
                H = "crop",
                q = "move",
                K = "zoom",
                k = "e",
                B = "w",
                z = "s",
                G = "n",
                Nt = "ne",
                Kt = "nw",
                Gt = "se",
                Xt = "sw",
                ir = "".concat(F, "-crop"),
                Fr = "".concat(F, "-disabled"),
                xe = "".concat(F, "-hidden"),
                Si = "".concat(F, "-hide"),
                ks = "".concat(F, "-invisible"),
                Yt = "".concat(F, "-modal"),
                Er = "".concat(F, "-move"),
                _i = "".concat(F, "Action"),
                rr = "".concat(F, "Preview"),
                Pi = "crop",
                Or = "move",
                Rr = "none",
                xi = "crop",
                xt = "cropend",
                As = "cropmove",
                Us = "cropstart",
                fo = "dblclick",
                _a = R ? "touchstart" : "mousedown",
                Rd = R ? "touchmove" : "mousemove",
                iu = R ? "touchend touchcancel" : "mouseup",
                Cd = x ? "pointerdown" : _a,
                Td = x ? "pointermove" : Rd,
                kd = x ? "pointerup pointercancel" : iu,
                Ad = "ready",
                Ud = "resize",
                Dd = "wheel",
                ru = "zoom",
                Nd = "image/jpeg",
                Vv = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
                Wv = /^data:/,
                Kv = /^data:image\/jpeg;base64,/,
                Gv = /^img|canvas$/i,
                Bd = {
                    viewMode: 0,
                    dragMode: Pi,
                    initialAspectRatio: NaN,
                    aspectRatio: NaN,
                    data: null,
                    preview: "",
                    responsive: !0,
                    restore: !0,
                    checkCrossOrigin: !0,
                    checkOrientation: !0,
                    modal: !0,
                    guides: !0,
                    center: !0,
                    highlight: !0,
                    background: !0,
                    autoCrop: !0,
                    autoCropArea: .8,
                    movable: !0,
                    rotatable: !0,
                    scalable: !0,
                    zoomable: !0,
                    zoomOnTouch: !0,
                    zoomOnWheel: !0,
                    wheelZoomRatio: .1,
                    cropBoxMovable: !0,
                    cropBoxResizable: !0,
                    toggleDragModeOnDblclick: !0,
                    minCanvasWidth: 0,
                    minCanvasHeight: 0,
                    minCropBoxWidth: 0,
                    minCropBoxHeight: 0,
                    minContainerWidth: 200,
                    minContainerHeight: 100,
                    ready: null,
                    cropstart: null,
                    cropmove: null,
                    cropend: null,
                    crop: null,
                    zoom: null
                },
                Xv = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
                Yv = Number.isNaN || S.isNaN;

            function Q(v) {
                return typeof v == "number" && !Yv(v)
            }
            n(Q, "isNumber");
            var Id = n(function(p) {
                return p > 0 && p < 1 / 0
            }, "isPositiveNumber");

            function su(v) {
                return typeof v > "u"
            }
            n(su, "isUndefined");

            function Cr(v) {
                return i(v) === "object" && v !== null
            }
            n(Cr, "isObject");
            var Jv = Object.prototype.hasOwnProperty;

            function Ds(v) {
                if (!Cr(v)) return !1;
                try {
                    var p = v.constructor,
                        g = p.prototype;
                    return p && g && Jv.call(g, "isPrototypeOf")
                } catch {
                    return !1
                }
            }
            n(Ds, "isPlainObject");

            function rt(v) {
                return typeof v == "function"
            }
            n(rt, "isFunction");
            var Qv = Array.prototype.slice;

            function Ld(v) {
                return Array.from ? Array.from(v) : Qv.call(v)
            }
            n(Ld, "toArray");

            function ve(v, p) {
                return v && rt(p) && (Array.isArray(v) || Q(v.length) ? Ld(v).forEach(function(g, m) {
                    p.call(v, g, m, v)
                }) : Cr(v) && Object.keys(v).forEach(function(g) {
                    p.call(v, v[g], g, v)
                })), v
            }
            n(ve, "forEach");
            var ce = Object.assign || n(function(p) {
                    for (var g = arguments.length, m = new Array(g > 1 ? g - 1 : 0), _ = 1; _ < g; _++) m[_ - 1] = arguments[_];
                    return Cr(p) && m.length > 0 && m.forEach(function(b) {
                        Cr(b) && Object.keys(b).forEach(function(P) {
                            p[P] = b[P]
                        })
                    }), p
                }, "assign"),
                Zv = /\.\d*(?:0|9){12}\d*$/;

            function Ns(v) {
                var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
                return Zv.test(v) ? Math.round(v * p) / p : v
            }
            n(Ns, "normalizeDecimalNumber");
            var e0 = /^width|height|left|top|marginLeft|marginTop$/;

            function sr(v, p) {
                var g = v.style;
                ve(p, function(m, _) {
                    e0.test(_) && Q(m) && (m = "".concat(m, "px")), g[_] = m
                })
            }
            n(sr, "setStyle");

            function t0(v, p) {
                return v.classList ? v.classList.contains(p) : v.className.indexOf(p) > -1
            }
            n(t0, "hasClass");

            function Te(v, p) {
                if (!!p) {
                    if (Q(v.length)) {
                        ve(v, function(m) {
                            Te(m, p)
                        });
                        return
                    }
                    if (v.classList) {
                        v.classList.add(p);
                        return
                    }
                    var g = v.className.trim();
                    g ? g.indexOf(p) < 0 && (v.className = "".concat(g, " ").concat(p)) : v.className = p
                }
            }
            n(Te, "addClass");

            function Jt(v, p) {
                if (!!p) {
                    if (Q(v.length)) {
                        ve(v, function(g) {
                            Jt(g, p)
                        });
                        return
                    }
                    if (v.classList) {
                        v.classList.remove(p);
                        return
                    }
                    v.className.indexOf(p) >= 0 && (v.className = v.className.replace(p, ""))
                }
            }
            n(Jt, "removeClass");

            function Bs(v, p, g) {
                if (!!p) {
                    if (Q(v.length)) {
                        ve(v, function(m) {
                            Bs(m, p, g)
                        });
                        return
                    }
                    g ? Te(v, p) : Jt(v, p)
                }
            }
            n(Bs, "toggleClass");
            var i0 = /([a-z\d])([A-Z])/g;

            function ou(v) {
                return v.replace(i0, "$1-$2").toLowerCase()
            }
            n(ou, "toParamCase");

            function nu(v, p) {
                return Cr(v[p]) ? v[p] : v.dataset ? v.dataset[p] : v.getAttribute("data-".concat(ou(p)))
            }
            n(nu, "getData");

            function mo(v, p, g) {
                Cr(g) ? v[p] = g : v.dataset ? v.dataset[p] = g : v.setAttribute("data-".concat(ou(p)), g)
            }
            n(mo, "setData");

            function r0(v, p) {
                if (Cr(v[p])) try {
                    delete v[p]
                } catch {
                    v[p] = void 0
                } else if (v.dataset) try {
                    delete v.dataset[p]
                } catch {
                    v.dataset[p] = void 0
                } else v.removeAttribute("data-".concat(ou(p)))
            }
            n(r0, "removeData");
            var Md = /\s\s*/,
                zd = function() {
                    var v = !1;
                    if (w) {
                        var p = !1,
                            g = n(function() {}, "listener"),
                            m = Object.defineProperty({}, "once", {
                                get: n(function() {
                                    return v = !0, p
                                }, "get"),
                                set: n(function(b) {
                                    p = b
                                }, "set")
                            });
                        S.addEventListener("test", g, m), S.removeEventListener("test", g, m)
                    }
                    return v
                }();

            function Bt(v, p, g) {
                var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
                    _ = g;
                p.trim().split(Md).forEach(function(b) {
                    if (!zd) {
                        var P = v.listeners;
                        P && P[b] && P[b][g] && (_ = P[b][g], delete P[b][g], Object.keys(P[b]).length === 0 && delete P[b], Object.keys(P).length === 0 && delete v.listeners)
                    }
                    v.removeEventListener(b, _, m)
                })
            }
            n(Bt, "removeListener");

            function Ft(v, p, g) {
                var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
                    _ = g;
                p.trim().split(Md).forEach(function(b) {
                    if (m.once && !zd) {
                        var P = v.listeners,
                            E = P === void 0 ? {} : P;
                        _ = n(function() {
                            delete E[b][g], v.removeEventListener(b, _, m);
                            for (var T = arguments.length, C = new Array(T), O = 0; O < T; O++) C[O] = arguments[O];
                            g.apply(v, C)
                        }, "handler"), E[b] || (E[b] = {}), E[b][g] && v.removeEventListener(b, E[b][g], m), E[b][g] = _, v.listeners = E
                    }
                    v.addEventListener(b, _, m)
                })
            }
            n(Ft, "addListener");

            function Is(v, p, g) {
                var m;
                return rt(Event) && rt(CustomEvent) ? m = new CustomEvent(p, {
                    detail: g,
                    bubbles: !0,
                    cancelable: !0
                }) : (m = document.createEvent("CustomEvent"), m.initCustomEvent(p, !0, !0, g)), v.dispatchEvent(m)
            }
            n(Is, "dispatchEvent");

            function jd(v) {
                var p = v.getBoundingClientRect();
                return {
                    left: p.left + (window.pageXOffset - document.documentElement.clientLeft),
                    top: p.top + (window.pageYOffset - document.documentElement.clientTop)
                }
            }
            n(jd, "getOffset");
            var au = S.location,
                s0 = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;

            function Hd(v) {
                var p = v.match(s0);
                return p !== null && (p[1] !== au.protocol || p[2] !== au.hostname || p[3] !== au.port)
            }
            n(Hd, "isCrossOriginURL");

            function $d(v) {
                var p = "timestamp=".concat(new Date().getTime());
                return v + (v.indexOf("?") === -1 ? "?" : "&") + p
            }
            n($d, "addTimestamp");

            function go(v) {
                var p = v.rotate,
                    g = v.scaleX,
                    m = v.scaleY,
                    _ = v.translateX,
                    b = v.translateY,
                    P = [];
                Q(_) && _ !== 0 && P.push("translateX(".concat(_, "px)")), Q(b) && b !== 0 && P.push("translateY(".concat(b, "px)")), Q(p) && p !== 0 && P.push("rotate(".concat(p, "deg)")), Q(g) && g !== 1 && P.push("scaleX(".concat(g, ")")), Q(m) && m !== 1 && P.push("scaleY(".concat(m, ")"));
                var E = P.length ? P.join(" ") : "none";
                return {
                    WebkitTransform: E,
                    msTransform: E,
                    transform: E
                }
            }
            n(go, "getTransforms");

            function o0(v) {
                var p = a({}, v),
                    g = [];
                return ve(v, function(m, _) {
                    delete p[_], ve(p, function(b) {
                        var P = Math.abs(m.startX - b.startX),
                            E = Math.abs(m.startY - b.startY),
                            U = Math.abs(m.endX - b.endX),
                            T = Math.abs(m.endY - b.endY),
                            C = Math.sqrt(P * P + E * E),
                            O = Math.sqrt(U * U + T * T),
                            A = (O - C) / C;
                        g.push(A)
                    })
                }), g.sort(function(m, _) {
                    return Math.abs(m) < Math.abs(_)
                }), g[0]
            }
            n(o0, "getMaxZoomRatio");

            function Pa(v, p) {
                var g = v.pageX,
                    m = v.pageY,
                    _ = {
                        endX: g,
                        endY: m
                    };
                return p ? _ : a({
                    startX: g,
                    startY: m
                }, _)
            }
            n(Pa, "getPointer");

            function n0(v) {
                var p = 0,
                    g = 0,
                    m = 0;
                return ve(v, function(_) {
                    var b = _.startX,
                        P = _.startY;
                    p += b, g += P, m += 1
                }), p /= m, g /= m, {
                    pageX: p,
                    pageY: g
                }
            }
            n(n0, "getPointersCenter");

            function or(v) {
                var p = v.aspectRatio,
                    g = v.height,
                    m = v.width,
                    _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain",
                    b = Id(m),
                    P = Id(g);
                if (b && P) {
                    var E = g * p;
                    _ === "contain" && E > m || _ === "cover" && E < m ? g = m / p : m = g * p
                } else b ? g = m / p : P && (m = g * p);
                return {
                    width: m,
                    height: g
                }
            }
            n(or, "getAdjustedSizes");

            function a0(v) {
                var p = v.width,
                    g = v.height,
                    m = v.degree;
                if (m = Math.abs(m) % 180, m === 90) return {
                    width: g,
                    height: p
                };
                var _ = m % 90 * Math.PI / 180,
                    b = Math.sin(_),
                    P = Math.cos(_),
                    E = p * P + g * b,
                    U = p * b + g * P;
                return m > 90 ? {
                    width: U,
                    height: E
                } : {
                    width: E,
                    height: U
                }
            }
            n(a0, "getRotatedSizes");

            function l0(v, p, g, m) {
                var _ = p.aspectRatio,
                    b = p.naturalWidth,
                    P = p.naturalHeight,
                    E = p.rotate,
                    U = E === void 0 ? 0 : E,
                    T = p.scaleX,
                    C = T === void 0 ? 1 : T,
                    O = p.scaleY,
                    A = O === void 0 ? 1 : O,
                    te = g.aspectRatio,
                    Z = g.naturalWidth,
                    de = g.naturalHeight,
                    re = m.fillColor,
                    Fe = re === void 0 ? "transparent" : re,
                    ke = m.imageSmoothingEnabled,
                    be = ke === void 0 ? !0 : ke,
                    Fi = m.imageSmoothingQuality,
                    dt = Fi === void 0 ? "low" : Fi,
                    D = m.maxWidth,
                    se = D === void 0 ? 1 / 0 : D,
                    Ee = m.maxHeight,
                    Et = Ee === void 0 ? 1 / 0 : Ee,
                    Ei = m.minWidth,
                    Tr = Ei === void 0 ? 0 : Ei,
                    kr = m.minHeight,
                    nr = kr === void 0 ? 0 : kr,
                    Qt = document.createElement("canvas"),
                    st = Qt.getContext("2d"),
                    Ar = or({
                        aspectRatio: te,
                        width: se,
                        height: Et
                    }),
                    xa = or({
                        aspectRatio: te,
                        width: Tr,
                        height: nr
                    }, "cover"),
                    lu = Math.min(Ar.width, Math.max(xa.width, Z)),
                    uu = Math.min(Ar.height, Math.max(xa.height, de)),
                    Wd = or({
                        aspectRatio: _,
                        width: se,
                        height: Et
                    }),
                    Kd = or({
                        aspectRatio: _,
                        width: Tr,
                        height: nr
                    }, "cover"),
                    Gd = Math.min(Wd.width, Math.max(Kd.width, b)),
                    Xd = Math.min(Wd.height, Math.max(Kd.height, P)),
                    _0 = [-Gd / 2, -Xd / 2, Gd, Xd];
                return Qt.width = Ns(lu), Qt.height = Ns(uu), st.fillStyle = Fe, st.fillRect(0, 0, lu, uu), st.save(), st.translate(lu / 2, uu / 2), st.rotate(U * Math.PI / 180), st.scale(C, A), st.imageSmoothingEnabled = be, st.imageSmoothingQuality = dt, st.drawImage.apply(st, [v].concat(l(_0.map(function(P0) {
                    return Math.floor(Ns(P0))
                })))), st.restore(), Qt
            }
            n(l0, "getSourceCanvas");
            var qd = String.fromCharCode;

            function u0(v, p, g) {
                var m = "";
                g += p;
                for (var _ = p; _ < g; _ += 1) m += qd(v.getUint8(_));
                return m
            }
            n(u0, "getStringFromCharCode");
            var h0 = /^data:.*,/;

            function c0(v) {
                var p = v.replace(h0, ""),
                    g = atob(p),
                    m = new ArrayBuffer(g.length),
                    _ = new Uint8Array(m);
                return ve(_, function(b, P) {
                    _[P] = g.charCodeAt(P)
                }), m
            }
            n(c0, "dataURLToArrayBuffer");

            function d0(v, p) {
                for (var g = [], m = 8192, _ = new Uint8Array(v); _.length > 0;) g.push(qd.apply(null, Ld(_.subarray(0, m)))), _ = _.subarray(m);
                return "data:".concat(p, ";base64,").concat(btoa(g.join("")))
            }
            n(d0, "arrayBufferToDataURL");

            function p0(v) {
                var p = new DataView(v),
                    g;
                try {
                    var m, _, b;
                    if (p.getUint8(0) === 255 && p.getUint8(1) === 216)
                        for (var P = p.byteLength, E = 2; E + 1 < P;) {
                            if (p.getUint8(E) === 255 && p.getUint8(E + 1) === 225) {
                                _ = E;
                                break
                            }
                            E += 1
                        }
                    if (_) {
                        var U = _ + 4,
                            T = _ + 10;
                        if (u0(p, U, 4) === "Exif") {
                            var C = p.getUint16(T);
                            if (m = C === 18761, (m || C === 19789) && p.getUint16(T + 2, m) === 42) {
                                var O = p.getUint32(T + 4, m);
                                O >= 8 && (b = T + O)
                            }
                        }
                    }
                    if (b) {
                        var A = p.getUint16(b, m),
                            te, Z;
                        for (Z = 0; Z < A; Z += 1)
                            if (te = b + Z * 12 + 2, p.getUint16(te, m) === 274) {
                                te += 8, g = p.getUint16(te, m), p.setUint16(te, 1, m);
                                break
                            }
                    }
                } catch {
                    g = 1
                }
                return g
            }
            n(p0, "resetAndGetOrientation");

            function f0(v) {
                var p = 0,
                    g = 1,
                    m = 1;
                switch (v) {
                    case 2:
                        g = -1;
                        break;
                    case 3:
                        p = -180;
                        break;
                    case 4:
                        m = -1;
                        break;
                    case 5:
                        p = 90, m = -1;
                        break;
                    case 6:
                        p = 90;
                        break;
                    case 7:
                        p = 90, g = -1;
                        break;
                    case 8:
                        p = -90;
                        break
                }
                return {
                    rotate: p,
                    scaleX: g,
                    scaleY: m
                }
            }
            n(f0, "parseOrientation");
            var m0 = {
                    render: n(function() {
                        this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox()
                    }, "render"),
                    initContainer: n(function() {
                        var p = this.element,
                            g = this.options,
                            m = this.container,
                            _ = this.cropper;
                        Te(_, xe), Jt(p, xe);
                        var b = {
                            width: Math.max(m.offsetWidth, Number(g.minContainerWidth) || 200),
                            height: Math.max(m.offsetHeight, Number(g.minContainerHeight) || 100)
                        };
                        this.containerData = b, sr(_, {
                            width: b.width,
                            height: b.height
                        }), Te(p, xe), Jt(_, xe)
                    }, "initContainer"),
                    initCanvas: n(function() {
                        var p = this.containerData,
                            g = this.imageData,
                            m = this.options.viewMode,
                            _ = Math.abs(g.rotate) % 180 === 90,
                            b = _ ? g.naturalHeight : g.naturalWidth,
                            P = _ ? g.naturalWidth : g.naturalHeight,
                            E = b / P,
                            U = p.width,
                            T = p.height;
                        p.height * E > p.width ? m === 3 ? U = p.height * E : T = p.width / E : m === 3 ? T = p.width / E : U = p.height * E;
                        var C = {
                            aspectRatio: E,
                            naturalWidth: b,
                            naturalHeight: P,
                            width: U,
                            height: T
                        };
                        C.left = (p.width - U) / 2, C.top = (p.height - T) / 2, C.oldLeft = C.left, C.oldTop = C.top, this.canvasData = C, this.limited = m === 1 || m === 2, this.limitCanvas(!0, !0), this.initialImageData = ce({}, g), this.initialCanvasData = ce({}, C)
                    }, "initCanvas"),
                    limitCanvas: n(function(p, g) {
                        var m = this.options,
                            _ = this.containerData,
                            b = this.canvasData,
                            P = this.cropBoxData,
                            E = m.viewMode,
                            U = b.aspectRatio,
                            T = this.cropped && P;
                        if (p) {
                            var C = Number(m.minCanvasWidth) || 0,
                                O = Number(m.minCanvasHeight) || 0;
                            E > 1 ? (C = Math.max(C, _.width), O = Math.max(O, _.height), E === 3 && (O * U > C ? C = O * U : O = C / U)) : E > 0 && (C ? C = Math.max(C, T ? P.width : 0) : O ? O = Math.max(O, T ? P.height : 0) : T && (C = P.width, O = P.height, O * U > C ? C = O * U : O = C / U));
                            var A = or({
                                aspectRatio: U,
                                width: C,
                                height: O
                            });
                            C = A.width, O = A.height, b.minWidth = C, b.minHeight = O, b.maxWidth = 1 / 0, b.maxHeight = 1 / 0
                        }
                        if (g)
                            if (E > (T ? 0 : 1)) {
                                var te = _.width - b.width,
                                    Z = _.height - b.height;
                                b.minLeft = Math.min(0, te), b.minTop = Math.min(0, Z), b.maxLeft = Math.max(0, te), b.maxTop = Math.max(0, Z), T && this.limited && (b.minLeft = Math.min(P.left, P.left + (P.width - b.width)), b.minTop = Math.min(P.top, P.top + (P.height - b.height)), b.maxLeft = P.left, b.maxTop = P.top, E === 2 && (b.width >= _.width && (b.minLeft = Math.min(0, te), b.maxLeft = Math.max(0, te)), b.height >= _.height && (b.minTop = Math.min(0, Z), b.maxTop = Math.max(0, Z))))
                            } else b.minLeft = -b.width, b.minTop = -b.height, b.maxLeft = _.width, b.maxTop = _.height
                    }, "limitCanvas"),
                    renderCanvas: n(function(p, g) {
                        var m = this.canvasData,
                            _ = this.imageData;
                        if (g) {
                            var b = a0({
                                    width: _.naturalWidth * Math.abs(_.scaleX || 1),
                                    height: _.naturalHeight * Math.abs(_.scaleY || 1),
                                    degree: _.rotate || 0
                                }),
                                P = b.width,
                                E = b.height,
                                U = m.width * (P / m.naturalWidth),
                                T = m.height * (E / m.naturalHeight);
                            m.left -= (U - m.width) / 2, m.top -= (T - m.height) / 2, m.width = U, m.height = T, m.aspectRatio = P / E, m.naturalWidth = P, m.naturalHeight = E, this.limitCanvas(!0, !1)
                        }(m.width > m.maxWidth || m.width < m.minWidth) && (m.left = m.oldLeft), (m.height > m.maxHeight || m.height < m.minHeight) && (m.top = m.oldTop), m.width = Math.min(Math.max(m.width, m.minWidth), m.maxWidth), m.height = Math.min(Math.max(m.height, m.minHeight), m.maxHeight), this.limitCanvas(!1, !0), m.left = Math.min(Math.max(m.left, m.minLeft), m.maxLeft), m.top = Math.min(Math.max(m.top, m.minTop), m.maxTop), m.oldLeft = m.left, m.oldTop = m.top, sr(this.canvas, ce({
                            width: m.width,
                            height: m.height
                        }, go({
                            translateX: m.left,
                            translateY: m.top
                        }))), this.renderImage(p), this.cropped && this.limited && this.limitCropBox(!0, !0)
                    }, "renderCanvas"),
                    renderImage: n(function(p) {
                        var g = this.canvasData,
                            m = this.imageData,
                            _ = m.naturalWidth * (g.width / g.naturalWidth),
                            b = m.naturalHeight * (g.height / g.naturalHeight);
                        ce(m, {
                            width: _,
                            height: b,
                            left: (g.width - _) / 2,
                            top: (g.height - b) / 2
                        }), sr(this.image, ce({
                            width: m.width,
                            height: m.height
                        }, go(ce({
                            translateX: m.left,
                            translateY: m.top
                        }, m)))), p && this.output()
                    }, "renderImage"),
                    initCropBox: n(function() {
                        var p = this.options,
                            g = this.canvasData,
                            m = p.aspectRatio || p.initialAspectRatio,
                            _ = Number(p.autoCropArea) || .8,
                            b = {
                                width: g.width,
                                height: g.height
                            };
                        m && (g.height * m > g.width ? b.height = b.width / m : b.width = b.height * m), this.cropBoxData = b, this.limitCropBox(!0, !0), b.width = Math.min(Math.max(b.width, b.minWidth), b.maxWidth), b.height = Math.min(Math.max(b.height, b.minHeight), b.maxHeight), b.width = Math.max(b.minWidth, b.width * _), b.height = Math.max(b.minHeight, b.height * _), b.left = g.left + (g.width - b.width) / 2, b.top = g.top + (g.height - b.height) / 2, b.oldLeft = b.left, b.oldTop = b.top, this.initialCropBoxData = ce({}, b)
                    }, "initCropBox"),
                    limitCropBox: n(function(p, g) {
                        var m = this.options,
                            _ = this.containerData,
                            b = this.canvasData,
                            P = this.cropBoxData,
                            E = this.limited,
                            U = m.aspectRatio;
                        if (p) {
                            var T = Number(m.minCropBoxWidth) || 0,
                                C = Number(m.minCropBoxHeight) || 0,
                                O = E ? Math.min(_.width, b.width, b.width + b.left, _.width - b.left) : _.width,
                                A = E ? Math.min(_.height, b.height, b.height + b.top, _.height - b.top) : _.height;
                            T = Math.min(T, _.width), C = Math.min(C, _.height), U && (T && C ? C * U > T ? C = T / U : T = C * U : T ? C = T / U : C && (T = C * U), A * U > O ? A = O / U : O = A * U), P.minWidth = Math.min(T, O), P.minHeight = Math.min(C, A), P.maxWidth = O, P.maxHeight = A
                        }
                        g && (E ? (P.minLeft = Math.max(0, b.left), P.minTop = Math.max(0, b.top), P.maxLeft = Math.min(_.width, b.left + b.width) - P.width, P.maxTop = Math.min(_.height, b.top + b.height) - P.height) : (P.minLeft = 0, P.minTop = 0, P.maxLeft = _.width - P.width, P.maxTop = _.height - P.height))
                    }, "limitCropBox"),
                    renderCropBox: n(function() {
                        var p = this.options,
                            g = this.containerData,
                            m = this.cropBoxData;
                        (m.width > m.maxWidth || m.width < m.minWidth) && (m.left = m.oldLeft), (m.height > m.maxHeight || m.height < m.minHeight) && (m.top = m.oldTop), m.width = Math.min(Math.max(m.width, m.minWidth), m.maxWidth), m.height = Math.min(Math.max(m.height, m.minHeight), m.maxHeight), this.limitCropBox(!1, !0), m.left = Math.min(Math.max(m.left, m.minLeft), m.maxLeft), m.top = Math.min(Math.max(m.top, m.minTop), m.maxTop), m.oldLeft = m.left, m.oldTop = m.top, p.movable && p.cropBoxMovable && mo(this.face, _i, m.width >= g.width && m.height >= g.height ? q : N), sr(this.cropBox, ce({
                            width: m.width,
                            height: m.height
                        }, go({
                            translateX: m.left,
                            translateY: m.top
                        }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output()
                    }, "renderCropBox"),
                    output: n(function() {
                        this.preview(), Is(this.element, xi, this.getData())
                    }, "output")
                },
                g0 = {
                    initPreview: n(function() {
                        var p = this.element,
                            g = this.crossOrigin,
                            m = this.options.preview,
                            _ = g ? this.crossOriginUrl : this.url,
                            b = p.alt || "The image to preview",
                            P = document.createElement("img");
                        if (g && (P.crossOrigin = g), P.src = _, P.alt = b, this.viewBox.appendChild(P), this.viewBoxImage = P, !!m) {
                            var E = m;
                            typeof m == "string" ? E = p.ownerDocument.querySelectorAll(m) : m.querySelector && (E = [m]), this.previews = E, ve(E, function(U) {
                                var T = document.createElement("img");
                                mo(U, rr, {
                                    width: U.offsetWidth,
                                    height: U.offsetHeight,
                                    html: U.innerHTML
                                }), g && (T.crossOrigin = g), T.src = _, T.alt = b, T.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', U.innerHTML = "", U.appendChild(T)
                            })
                        }
                    }, "initPreview"),
                    resetPreview: n(function() {
                        ve(this.previews, function(p) {
                            var g = nu(p, rr);
                            sr(p, {
                                width: g.width,
                                height: g.height
                            }), p.innerHTML = g.html, r0(p, rr)
                        })
                    }, "resetPreview"),
                    preview: n(function() {
                        var p = this.imageData,
                            g = this.canvasData,
                            m = this.cropBoxData,
                            _ = m.width,
                            b = m.height,
                            P = p.width,
                            E = p.height,
                            U = m.left - g.left - p.left,
                            T = m.top - g.top - p.top;
                        !this.cropped || this.disabled || (sr(this.viewBoxImage, ce({
                            width: P,
                            height: E
                        }, go(ce({
                            translateX: -U,
                            translateY: -T
                        }, p)))), ve(this.previews, function(C) {
                            var O = nu(C, rr),
                                A = O.width,
                                te = O.height,
                                Z = A,
                                de = te,
                                re = 1;
                            _ && (re = A / _, de = b * re), b && de > te && (re = te / b, Z = _ * re, de = te), sr(C, {
                                width: Z,
                                height: de
                            }), sr(C.getElementsByTagName("img")[0], ce({
                                width: P * re,
                                height: E * re
                            }, go(ce({
                                translateX: -U * re,
                                translateY: -T * re
                            }, p))))
                        }))
                    }, "preview")
                },
                y0 = {
                    bind: n(function() {
                        var p = this.element,
                            g = this.options,
                            m = this.cropper;
                        rt(g.cropstart) && Ft(p, Us, g.cropstart), rt(g.cropmove) && Ft(p, As, g.cropmove), rt(g.cropend) && Ft(p, xt, g.cropend), rt(g.crop) && Ft(p, xi, g.crop), rt(g.zoom) && Ft(p, ru, g.zoom), Ft(m, Cd, this.onCropStart = this.cropStart.bind(this)), g.zoomable && g.zoomOnWheel && Ft(m, Dd, this.onWheel = this.wheel.bind(this), {
                            passive: !1,
                            capture: !0
                        }), g.toggleDragModeOnDblclick && Ft(m, fo, this.onDblclick = this.dblclick.bind(this)), Ft(p.ownerDocument, Td, this.onCropMove = this.cropMove.bind(this)), Ft(p.ownerDocument, kd, this.onCropEnd = this.cropEnd.bind(this)), g.responsive && Ft(window, Ud, this.onResize = this.resize.bind(this))
                    }, "bind"),
                    unbind: n(function() {
                        var p = this.element,
                            g = this.options,
                            m = this.cropper;
                        rt(g.cropstart) && Bt(p, Us, g.cropstart), rt(g.cropmove) && Bt(p, As, g.cropmove), rt(g.cropend) && Bt(p, xt, g.cropend), rt(g.crop) && Bt(p, xi, g.crop), rt(g.zoom) && Bt(p, ru, g.zoom), Bt(m, Cd, this.onCropStart), g.zoomable && g.zoomOnWheel && Bt(m, Dd, this.onWheel, {
                            passive: !1,
                            capture: !0
                        }), g.toggleDragModeOnDblclick && Bt(m, fo, this.onDblclick), Bt(p.ownerDocument, Td, this.onCropMove), Bt(p.ownerDocument, kd, this.onCropEnd), g.responsive && Bt(window, Ud, this.onResize)
                    }, "unbind")
                },
                v0 = {
                    resize: n(function() {
                        if (!this.disabled) {
                            var p = this.options,
                                g = this.container,
                                m = this.containerData,
                                _ = g.offsetWidth / m.width;
                            if (_ !== 1 || g.offsetHeight !== m.height) {
                                var b, P;
                                p.restore && (b = this.getCanvasData(), P = this.getCropBoxData()), this.render(), p.restore && (this.setCanvasData(ve(b, function(E, U) {
                                    b[U] = E * _
                                })), this.setCropBoxData(ve(P, function(E, U) {
                                    P[U] = E * _
                                })))
                            }
                        }
                    }, "resize"),
                    dblclick: n(function() {
                        this.disabled || this.options.dragMode === Rr || this.setDragMode(t0(this.dragBox, ir) ? Or : Pi)
                    }, "dblclick"),
                    wheel: n(function(p) {
                        var g = this,
                            m = Number(this.options.wheelZoomRatio) || .1,
                            _ = 1;
                        this.disabled || (p.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
                            g.wheeling = !1
                        }, 50), p.deltaY ? _ = p.deltaY > 0 ? 1 : -1 : p.wheelDelta ? _ = -p.wheelDelta / 120 : p.detail && (_ = p.detail > 0 ? 1 : -1), this.zoom(-_ * m, p)))
                    }, "wheel"),
                    cropStart: n(function(p) {
                        var g = p.buttons,
                            m = p.button;
                        if (!(this.disabled || (p.type === "mousedown" || p.type === "pointerdown" && p.pointerType === "mouse") && (Q(g) && g !== 1 || Q(m) && m !== 0 || p.ctrlKey))) {
                            var _ = this.options,
                                b = this.pointers,
                                P;
                            p.changedTouches ? ve(p.changedTouches, function(E) {
                                b[E.identifier] = Pa(E)
                            }) : b[p.pointerId || 0] = Pa(p), Object.keys(b).length > 1 && _.zoomable && _.zoomOnTouch ? P = K : P = nu(p.target, _i), !!Vv.test(P) && Is(this.element, Us, {
                                originalEvent: p,
                                action: P
                            }) !== !1 && (p.preventDefault(), this.action = P, this.cropping = !1, P === H && (this.cropping = !0, Te(this.dragBox, Yt)))
                        }
                    }, "cropStart"),
                    cropMove: n(function(p) {
                        var g = this.action;
                        if (!(this.disabled || !g)) {
                            var m = this.pointers;
                            p.preventDefault(), Is(this.element, As, {
                                originalEvent: p,
                                action: g
                            }) !== !1 && (p.changedTouches ? ve(p.changedTouches, function(_) {
                                ce(m[_.identifier] || {}, Pa(_, !0))
                            }) : ce(m[p.pointerId || 0] || {}, Pa(p, !0)), this.change(p))
                        }
                    }, "cropMove"),
                    cropEnd: n(function(p) {
                        if (!this.disabled) {
                            var g = this.action,
                                m = this.pointers;
                            p.changedTouches ? ve(p.changedTouches, function(_) {
                                delete m[_.identifier]
                            }) : delete m[p.pointerId || 0], g && (p.preventDefault(), Object.keys(m).length || (this.action = ""), this.cropping && (this.cropping = !1, Bs(this.dragBox, Yt, this.cropped && this.options.modal)), Is(this.element, xt, {
                                originalEvent: p,
                                action: g
                            }))
                        }
                    }, "cropEnd")
                },
                b0 = {
                    change: n(function(p) {
                        var g = this.options,
                            m = this.canvasData,
                            _ = this.containerData,
                            b = this.cropBoxData,
                            P = this.pointers,
                            E = this.action,
                            U = g.aspectRatio,
                            T = b.left,
                            C = b.top,
                            O = b.width,
                            A = b.height,
                            te = T + O,
                            Z = C + A,
                            de = 0,
                            re = 0,
                            Fe = _.width,
                            ke = _.height,
                            be = !0,
                            Fi;
                        !U && p.shiftKey && (U = O && A ? O / A : 1), this.limited && (de = b.minLeft, re = b.minTop, Fe = de + Math.min(_.width, m.width, m.left + m.width), ke = re + Math.min(_.height, m.height, m.top + m.height));
                        var dt = P[Object.keys(P)[0]],
                            D = {
                                x: dt.endX - dt.startX,
                                y: dt.endY - dt.startY
                            },
                            se = n(function(Et) {
                                switch (Et) {
                                    case k:
                                        te + D.x > Fe && (D.x = Fe - te);
                                        break;
                                    case B:
                                        T + D.x < de && (D.x = de - T);
                                        break;
                                    case G:
                                        C + D.y < re && (D.y = re - C);
                                        break;
                                    case z:
                                        Z + D.y > ke && (D.y = ke - Z);
                                        break
                                }
                            }, "check");
                        switch (E) {
                            case N:
                                T += D.x, C += D.y;
                                break;
                            case k:
                                if (D.x >= 0 && (te >= Fe || U && (C <= re || Z >= ke))) {
                                    be = !1;
                                    break
                                }
                                se(k), O += D.x, O < 0 && (E = B, O = -O, T -= O), U && (A = O / U, C += (b.height - A) / 2);
                                break;
                            case G:
                                if (D.y <= 0 && (C <= re || U && (T <= de || te >= Fe))) {
                                    be = !1;
                                    break
                                }
                                se(G), A -= D.y, C += D.y, A < 0 && (E = z, A = -A, C -= A), U && (O = A * U, T += (b.width - O) / 2);
                                break;
                            case B:
                                if (D.x <= 0 && (T <= de || U && (C <= re || Z >= ke))) {
                                    be = !1;
                                    break
                                }
                                se(B), O -= D.x, T += D.x, O < 0 && (E = k, O = -O, T -= O), U && (A = O / U, C += (b.height - A) / 2);
                                break;
                            case z:
                                if (D.y >= 0 && (Z >= ke || U && (T <= de || te >= Fe))) {
                                    be = !1;
                                    break
                                }
                                se(z), A += D.y, A < 0 && (E = G, A = -A, C -= A), U && (O = A * U, T += (b.width - O) / 2);
                                break;
                            case Nt:
                                if (U) {
                                    if (D.y <= 0 && (C <= re || te >= Fe)) {
                                        be = !1;
                                        break
                                    }
                                    se(G), A -= D.y, C += D.y, O = A * U
                                } else se(G), se(k), D.x >= 0 ? te < Fe ? O += D.x : D.y <= 0 && C <= re && (be = !1) : O += D.x, D.y <= 0 ? C > re && (A -= D.y, C += D.y) : (A -= D.y, C += D.y);
                                O < 0 && A < 0 ? (E = Xt, A = -A, O = -O, C -= A, T -= O) : O < 0 ? (E = Kt, O = -O, T -= O) : A < 0 && (E = Gt, A = -A, C -= A);
                                break;
                            case Kt:
                                if (U) {
                                    if (D.y <= 0 && (C <= re || T <= de)) {
                                        be = !1;
                                        break
                                    }
                                    se(G), A -= D.y, C += D.y, O = A * U, T += b.width - O
                                } else se(G), se(B), D.x <= 0 ? T > de ? (O -= D.x, T += D.x) : D.y <= 0 && C <= re && (be = !1) : (O -= D.x, T += D.x), D.y <= 0 ? C > re && (A -= D.y, C += D.y) : (A -= D.y, C += D.y);
                                O < 0 && A < 0 ? (E = Gt, A = -A, O = -O, C -= A, T -= O) : O < 0 ? (E = Nt, O = -O, T -= O) : A < 0 && (E = Xt, A = -A, C -= A);
                                break;
                            case Xt:
                                if (U) {
                                    if (D.x <= 0 && (T <= de || Z >= ke)) {
                                        be = !1;
                                        break
                                    }
                                    se(B), O -= D.x, T += D.x, A = O / U
                                } else se(z), se(B), D.x <= 0 ? T > de ? (O -= D.x, T += D.x) : D.y >= 0 && Z >= ke && (be = !1) : (O -= D.x, T += D.x), D.y >= 0 ? Z < ke && (A += D.y) : A += D.y;
                                O < 0 && A < 0 ? (E = Nt, A = -A, O = -O, C -= A, T -= O) : O < 0 ? (E = Gt, O = -O, T -= O) : A < 0 && (E = Kt, A = -A, C -= A);
                                break;
                            case Gt:
                                if (U) {
                                    if (D.x >= 0 && (te >= Fe || Z >= ke)) {
                                        be = !1;
                                        break
                                    }
                                    se(k), O += D.x, A = O / U
                                } else se(z), se(k), D.x >= 0 ? te < Fe ? O += D.x : D.y >= 0 && Z >= ke && (be = !1) : O += D.x, D.y >= 0 ? Z < ke && (A += D.y) : A += D.y;
                                O < 0 && A < 0 ? (E = Kt, A = -A, O = -O, C -= A, T -= O) : O < 0 ? (E = Xt, O = -O, T -= O) : A < 0 && (E = Nt, A = -A, C -= A);
                                break;
                            case q:
                                this.move(D.x, D.y), be = !1;
                                break;
                            case K:
                                this.zoom(o0(P), p), be = !1;
                                break;
                            case H:
                                if (!D.x || !D.y) {
                                    be = !1;
                                    break
                                }
                                Fi = jd(this.cropper), T = dt.startX - Fi.left, C = dt.startY - Fi.top, O = b.minWidth, A = b.minHeight, D.x > 0 ? E = D.y > 0 ? Gt : Nt : D.x < 0 && (T -= O, E = D.y > 0 ? Xt : Kt), D.y < 0 && (C -= A), this.cropped || (Jt(this.cropBox, xe), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
                                break
                        }
                        be && (b.width = O, b.height = A, b.left = T, b.top = C, this.action = E, this.renderCropBox()), ve(P, function(Ee) {
                            Ee.startX = Ee.endX, Ee.startY = Ee.endY
                        })
                    }, "change")
                },
                w0 = {
                    crop: n(function() {
                        return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && Te(this.dragBox, Yt), Jt(this.cropBox, xe), this.setCropBoxData(this.initialCropBoxData)), this
                    }, "crop"),
                    reset: n(function() {
                        return this.ready && !this.disabled && (this.imageData = ce({}, this.initialImageData), this.canvasData = ce({}, this.initialCanvasData), this.cropBoxData = ce({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this
                    }, "reset"),
                    clear: n(function() {
                        return this.cropped && !this.disabled && (ce(this.cropBoxData, {
                            left: 0,
                            top: 0,
                            width: 0,
                            height: 0
                        }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Jt(this.dragBox, Yt), Te(this.cropBox, xe)), this
                    }, "clear"),
                    replace: n(function(p) {
                        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                        return !this.disabled && p && (this.isImg && (this.element.src = p), g ? (this.url = p, this.image.src = p, this.ready && (this.viewBoxImage.src = p, ve(this.previews, function(m) {
                            m.getElementsByTagName("img")[0].src = p
                        }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(p))), this
                    }, "replace"),
                    enable: n(function() {
                        return this.ready && this.disabled && (this.disabled = !1, Jt(this.cropper, Fr)), this
                    }, "enable"),
                    disable: n(function() {
                        return this.ready && !this.disabled && (this.disabled = !0, Te(this.cropper, Fr)), this
                    }, "disable"),
                    destroy: n(function() {
                        var p = this.element;
                        return p[F] ? (p[F] = void 0, this.isImg && this.replaced && (p.src = this.originalUrl), this.uncreate(), this) : this
                    }, "destroy"),
                    move: n(function(p) {
                        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p,
                            m = this.canvasData,
                            _ = m.left,
                            b = m.top;
                        return this.moveTo(su(p) ? p : _ + Number(p), su(g) ? g : b + Number(g))
                    }, "move"),
                    moveTo: n(function(p) {
                        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p,
                            m = this.canvasData,
                            _ = !1;
                        return p = Number(p), g = Number(g), this.ready && !this.disabled && this.options.movable && (Q(p) && (m.left = p, _ = !0), Q(g) && (m.top = g, _ = !0), _ && this.renderCanvas(!0)), this
                    }, "moveTo"),
                    zoom: n(function(p, g) {
                        var m = this.canvasData;
                        return p = Number(p), p < 0 ? p = 1 / (1 - p) : p = 1 + p, this.zoomTo(m.width * p / m.naturalWidth, null, g)
                    }, "zoom"),
                    zoomTo: n(function(p, g, m) {
                        var _ = this.options,
                            b = this.canvasData,
                            P = b.width,
                            E = b.height,
                            U = b.naturalWidth,
                            T = b.naturalHeight;
                        if (p = Number(p), p >= 0 && this.ready && !this.disabled && _.zoomable) {
                            var C = U * p,
                                O = T * p;
                            if (Is(this.element, ru, {
                                ratio: p,
                                oldRatio: P / U,
                                originalEvent: m
                            }) === !1) return this;
                            if (m) {
                                var A = this.pointers,
                                    te = jd(this.cropper),
                                    Z = A && Object.keys(A).length ? n0(A) : {
                                        pageX: m.pageX,
                                        pageY: m.pageY
                                    };
                                b.left -= (C - P) * ((Z.pageX - te.left - b.left) / P), b.top -= (O - E) * ((Z.pageY - te.top - b.top) / E)
                            } else Ds(g) && Q(g.x) && Q(g.y) ? (b.left -= (C - P) * ((g.x - b.left) / P), b.top -= (O - E) * ((g.y - b.top) / E)) : (b.left -= (C - P) / 2, b.top -= (O - E) / 2);
                            b.width = C, b.height = O, this.renderCanvas(!0)
                        }
                        return this
                    }, "zoomTo"),
                    rotate: n(function(p) {
                        return this.rotateTo((this.imageData.rotate || 0) + Number(p))
                    }, "rotate"),
                    rotateTo: n(function(p) {
                        return p = Number(p), Q(p) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = p % 360, this.renderCanvas(!0, !0)), this
                    }, "rotateTo"),
                    scaleX: n(function(p) {
                        var g = this.imageData.scaleY;
                        return this.scale(p, Q(g) ? g : 1)
                    }, "scaleX"),
                    scaleY: n(function(p) {
                        var g = this.imageData.scaleX;
                        return this.scale(Q(g) ? g : 1, p)
                    }, "scaleY"),
                    scale: n(function(p) {
                        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p,
                            m = this.imageData,
                            _ = !1;
                        return p = Number(p), g = Number(g), this.ready && !this.disabled && this.options.scalable && (Q(p) && (m.scaleX = p, _ = !0), Q(g) && (m.scaleY = g, _ = !0), _ && this.renderCanvas(!0, !0)), this
                    }, "scale"),
                    getData: n(function() {
                        var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
                            g = this.options,
                            m = this.imageData,
                            _ = this.canvasData,
                            b = this.cropBoxData,
                            P;
                        if (this.ready && this.cropped) {
                            P = {
                                x: b.left - _.left,
                                y: b.top - _.top,
                                width: b.width,
                                height: b.height
                            };
                            var E = m.width / m.naturalWidth;
                            if (ve(P, function(C, O) {
                                P[O] = C / E
                            }), p) {
                                var U = Math.round(P.y + P.height),
                                    T = Math.round(P.x + P.width);
                                P.x = Math.round(P.x), P.y = Math.round(P.y), P.width = T - P.x, P.height = U - P.y
                            }
                        } else P = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                        return g.rotatable && (P.rotate = m.rotate || 0), g.scalable && (P.scaleX = m.scaleX || 1, P.scaleY = m.scaleY || 1), P
                    }, "getData"),
                    setData: n(function(p) {
                        var g = this.options,
                            m = this.imageData,
                            _ = this.canvasData,
                            b = {};
                        if (this.ready && !this.disabled && Ds(p)) {
                            var P = !1;
                            g.rotatable && Q(p.rotate) && p.rotate !== m.rotate && (m.rotate = p.rotate, P = !0), g.scalable && (Q(p.scaleX) && p.scaleX !== m.scaleX && (m.scaleX = p.scaleX, P = !0), Q(p.scaleY) && p.scaleY !== m.scaleY && (m.scaleY = p.scaleY, P = !0)), P && this.renderCanvas(!0, !0);
                            var E = m.width / m.naturalWidth;
                            Q(p.x) && (b.left = p.x * E + _.left), Q(p.y) && (b.top = p.y * E + _.top), Q(p.width) && (b.width = p.width * E), Q(p.height) && (b.height = p.height * E), this.setCropBoxData(b)
                        }
                        return this
                    }, "setData"),
                    getContainerData: n(function() {
                        return this.ready ? ce({}, this.containerData) : {}
                    }, "getContainerData"),
                    getImageData: n(function() {
                        return this.sized ? ce({}, this.imageData) : {}
                    }, "getImageData"),
                    getCanvasData: n(function() {
                        var p = this.canvasData,
                            g = {};
                        return this.ready && ve(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(m) {
                            g[m] = p[m]
                        }), g
                    }, "getCanvasData"),
                    setCanvasData: n(function(p) {
                        var g = this.canvasData,
                            m = g.aspectRatio;
                        return this.ready && !this.disabled && Ds(p) && (Q(p.left) && (g.left = p.left), Q(p.top) && (g.top = p.top), Q(p.width) ? (g.width = p.width, g.height = p.width / m) : Q(p.height) && (g.height = p.height, g.width = p.height * m), this.renderCanvas(!0)), this
                    }, "setCanvasData"),
                    getCropBoxData: n(function() {
                        var p = this.cropBoxData,
                            g;
                        return this.ready && this.cropped && (g = {
                            left: p.left,
                            top: p.top,
                            width: p.width,
                            height: p.height
                        }), g || {}
                    }, "getCropBoxData"),
                    setCropBoxData: n(function(p) {
                        var g = this.cropBoxData,
                            m = this.options.aspectRatio,
                            _, b;
                        return this.ready && this.cropped && !this.disabled && Ds(p) && (Q(p.left) && (g.left = p.left), Q(p.top) && (g.top = p.top), Q(p.width) && p.width !== g.width && (_ = !0, g.width = p.width), Q(p.height) && p.height !== g.height && (b = !0, g.height = p.height), m && (_ ? g.height = g.width / m : b && (g.width = g.height * m)), this.renderCropBox()), this
                    }, "setCropBoxData"),
                    getCroppedCanvas: n(function() {
                        var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        if (!this.ready || !window.HTMLCanvasElement) return null;
                        var g = this.canvasData,
                            m = l0(this.image, this.imageData, g, p);
                        if (!this.cropped) return m;
                        var _ = this.getData(),
                            b = _.x,
                            P = _.y,
                            E = _.width,
                            U = _.height,
                            T = m.width / Math.floor(g.naturalWidth);
                        T !== 1 && (b *= T, P *= T, E *= T, U *= T);
                        var C = E / U,
                            O = or({
                                aspectRatio: C,
                                width: p.maxWidth || 1 / 0,
                                height: p.maxHeight || 1 / 0
                            }),
                            A = or({
                                aspectRatio: C,
                                width: p.minWidth || 0,
                                height: p.minHeight || 0
                            }, "cover"),
                            te = or({
                                aspectRatio: C,
                                width: p.width || (T !== 1 ? m.width : E),
                                height: p.height || (T !== 1 ? m.height : U)
                            }),
                            Z = te.width,
                            de = te.height;
                        Z = Math.min(O.width, Math.max(A.width, Z)), de = Math.min(O.height, Math.max(A.height, de));
                        var re = document.createElement("canvas"),
                            Fe = re.getContext("2d");
                        re.width = Ns(Z), re.height = Ns(de), Fe.fillStyle = p.fillColor || "transparent", Fe.fillRect(0, 0, Z, de);
                        var ke = p.imageSmoothingEnabled,
                            be = ke === void 0 ? !0 : ke,
                            Fi = p.imageSmoothingQuality;
                        Fe.imageSmoothingEnabled = be, Fi && (Fe.imageSmoothingQuality = Fi);
                        var dt = m.width,
                            D = m.height,
                            se = b,
                            Ee = P,
                            Et, Ei, Tr, kr, nr, Qt;
                        se <= -E || se > dt ? (se = 0, Et = 0, Tr = 0, nr = 0) : se <= 0 ? (Tr = -se, se = 0, Et = Math.min(dt, E + se), nr = Et) : se <= dt && (Tr = 0, Et = Math.min(E, dt - se), nr = Et), Et <= 0 || Ee <= -U || Ee > D ? (Ee = 0, Ei = 0, kr = 0, Qt = 0) : Ee <= 0 ? (kr = -Ee, Ee = 0, Ei = Math.min(D, U + Ee), Qt = Ei) : Ee <= D && (kr = 0, Ei = Math.min(U, D - Ee), Qt = Ei);
                        var st = [se, Ee, Et, Ei];
                        if (nr > 0 && Qt > 0) {
                            var Ar = Z / E;
                            st.push(Tr * Ar, kr * Ar, nr * Ar, Qt * Ar)
                        }
                        return Fe.drawImage.apply(Fe, [m].concat(l(st.map(function(xa) {
                            return Math.floor(Ns(xa))
                        })))), re
                    }, "getCroppedCanvas"),
                    setAspectRatio: n(function(p) {
                        var g = this.options;
                        return !this.disabled && !su(p) && (g.aspectRatio = Math.max(0, p) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this
                    }, "setAspectRatio"),
                    setDragMode: n(function(p) {
                        var g = this.options,
                            m = this.dragBox,
                            _ = this.face;
                        if (this.ready && !this.disabled) {
                            var b = p === Pi,
                                P = g.movable && p === Or;
                            p = b || P ? p : Rr, g.dragMode = p, mo(m, _i, p), Bs(m, ir, b), Bs(m, Er, P), g.cropBoxMovable || (mo(_, _i, p), Bs(_, ir, b), Bs(_, Er, P))
                        }
                        return this
                    }, "setDragMode")
                },
                S0 = S.Cropper,
                Vd = function() {
                    function v(p) {
                        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        if (e(this, v), !p || !Gv.test(p.tagName)) throw new Error("The first argument is required and must be an <img> or <canvas> element.");
                        this.element = p, this.options = ce({}, Bd, Ds(g) && g), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init()
                    }
                    return n(v, "Cropper"), r(v, [{
                        key: "init",
                        value: n(function() {
                            var g = this.element,
                                m = g.tagName.toLowerCase(),
                                _;
                            if (!g[F]) {
                                if (g[F] = this, m === "img") {
                                    if (this.isImg = !0, _ = g.getAttribute("src") || "", this.originalUrl = _, !_) return;
                                    _ = g.src
                                } else m === "canvas" && window.HTMLCanvasElement && (_ = g.toDataURL());
                                this.load(_)
                            }
                        }, "init")
                    }, {
                        key: "load",
                        value: n(function(g) {
                            var m = this;
                            if (!!g) {
                                this.url = g, this.imageData = {};
                                var _ = this.element,
                                    b = this.options;
                                if (!b.rotatable && !b.scalable && (b.checkOrientation = !1), !b.checkOrientation || !window.ArrayBuffer) {
                                    this.clone();
                                    return
                                }
                                if (Wv.test(g)) {
                                    Kv.test(g) ? this.read(c0(g)) : this.clone();
                                    return
                                }
                                var P = new XMLHttpRequest,
                                    E = this.clone.bind(this);
                                this.reloading = !0, this.xhr = P, P.onabort = E, P.onerror = E, P.ontimeout = E, P.onprogress = function() {
                                    P.getResponseHeader("content-type") !== Nd && P.abort()
                                }, P.onload = function() {
                                    m.read(P.response)
                                }, P.onloadend = function() {
                                    m.reloading = !1, m.xhr = null
                                }, b.checkCrossOrigin && Hd(g) && _.crossOrigin && (g = $d(g)), P.open("GET", g), P.responseType = "arraybuffer", P.withCredentials = _.crossOrigin === "use-credentials", P.send()
                            }
                        }, "load")
                    }, {
                        key: "read",
                        value: n(function(g) {
                            var m = this.options,
                                _ = this.imageData,
                                b = p0(g),
                                P = 0,
                                E = 1,
                                U = 1;
                            if (b > 1) {
                                this.url = d0(g, Nd);
                                var T = f0(b);
                                P = T.rotate, E = T.scaleX, U = T.scaleY
                            }
                            m.rotatable && (_.rotate = P), m.scalable && (_.scaleX = E, _.scaleY = U), this.clone()
                        }, "read")
                    }, {
                        key: "clone",
                        value: n(function() {
                            var g = this.element,
                                m = this.url,
                                _ = g.crossOrigin,
                                b = m;
                            this.options.checkCrossOrigin && Hd(m) && (_ || (_ = "anonymous"), b = $d(m)), this.crossOrigin = _, this.crossOriginUrl = b;
                            var P = document.createElement("img");
                            _ && (P.crossOrigin = _), P.src = b || m, P.alt = g.alt || "The image to crop", this.image = P, P.onload = this.start.bind(this), P.onerror = this.stop.bind(this), Te(P, Si), g.parentNode.insertBefore(P, g.nextSibling)
                        }, "clone")
                    }, {
                        key: "start",
                        value: n(function() {
                            var g = this,
                                m = this.image;
                            m.onload = null, m.onerror = null, this.sizing = !0;
                            var _ = S.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(S.navigator.userAgent),
                                b = n(function(T, C) {
                                    ce(g.imageData, {
                                        naturalWidth: T,
                                        naturalHeight: C,
                                        aspectRatio: T / C
                                    }), g.sizing = !1, g.sized = !0, g.build()
                                }, "done");
                            if (m.naturalWidth && !_) {
                                b(m.naturalWidth, m.naturalHeight);
                                return
                            }
                            var P = document.createElement("img"),
                                E = document.body || document.documentElement;
                            this.sizingImage = P, P.onload = function() {
                                b(P.width, P.height), _ || E.removeChild(P)
                            }, P.src = m.src, _ || (P.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", E.appendChild(P))
                        }, "start")
                    }, {
                        key: "stop",
                        value: n(function() {
                            var g = this.image;
                            g.onload = null, g.onerror = null, g.parentNode.removeChild(g), this.image = null
                        }, "stop")
                    }, {
                        key: "build",
                        value: n(function() {
                            if (!(!this.sized || this.ready)) {
                                var g = this.element,
                                    m = this.options,
                                    _ = this.image,
                                    b = g.parentNode,
                                    P = document.createElement("div");
                                P.innerHTML = Xv;
                                var E = P.querySelector(".".concat(F, "-container")),
                                    U = E.querySelector(".".concat(F, "-canvas")),
                                    T = E.querySelector(".".concat(F, "-drag-box")),
                                    C = E.querySelector(".".concat(F, "-crop-box")),
                                    O = C.querySelector(".".concat(F, "-face"));
                                this.container = b, this.cropper = E, this.canvas = U, this.dragBox = T, this.cropBox = C, this.viewBox = E.querySelector(".".concat(F, "-view-box")), this.face = O, U.appendChild(_), Te(g, xe), b.insertBefore(E, g.nextSibling), this.isImg || Jt(_, Si), this.initPreview(), this.bind(), m.initialAspectRatio = Math.max(0, m.initialAspectRatio) || NaN, m.aspectRatio = Math.max(0, m.aspectRatio) || NaN, m.viewMode = Math.max(0, Math.min(3, Math.round(m.viewMode))) || 0, Te(C, xe), m.guides || Te(C.getElementsByClassName("".concat(F, "-dashed")), xe), m.center || Te(C.getElementsByClassName("".concat(F, "-center")), xe), m.background && Te(E, "".concat(F, "-bg")), m.highlight || Te(O, ks), m.cropBoxMovable && (Te(O, Er), mo(O, _i, N)), m.cropBoxResizable || (Te(C.getElementsByClassName("".concat(F, "-line")), xe), Te(C.getElementsByClassName("".concat(F, "-point")), xe)), this.render(), this.ready = !0, this.setDragMode(m.dragMode), m.autoCrop && this.crop(), this.setData(m.data), rt(m.ready) && Ft(g, Ad, m.ready, {
                                    once: !0
                                }), Is(g, Ad)
                            }
                        }, "build")
                    }, {
                        key: "unbuild",
                        value: n(function() {
                            !this.ready || (this.ready = !1, this.unbind(), this.resetPreview(), this.cropper.parentNode.removeChild(this.cropper), Jt(this.element, xe))
                        }, "unbuild")
                    }, {
                        key: "uncreate",
                        value: n(function() {
                            this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop()
                        }, "uncreate")
                    }], [{
                        key: "noConflict",
                        value: n(function() {
                            return window.Cropper = S0, v
                        }, "noConflict")
                    }, {
                        key: "setDefaults",
                        value: n(function(g) {
                            ce(Bd, Ds(g) && g)
                        }, "setDefaults")
                    }]), v
                }();
            return ce(Vd.prototype, m0, g0, y0, v0, b0, w0), Vd
        })
    });
    var sg = He((BA, vl) => {
        "use strict";
        vl.exports = Gh;
        vl.exports.isMobile = Gh;
        vl.exports.default = Gh;
        var E2 = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
            O2 = /CrOS/,
            R2 = /android|ipad|playbook|silk/i;

        function Gh(i) {
            i || (i = {});
            let e = i.ua;
            if (!e && typeof navigator < "u" && (e = navigator.userAgent), e && e.headers && typeof e.headers["user-agent"] == "string" && (e = e.headers["user-agent"]), typeof e != "string") return !1;
            let t = E2.test(e) && !O2.test(e) || !!i.tablet && R2.test(e);
            return !t && i.tablet && i.featureDetect && navigator && navigator.maxTouchPoints > 1 && e.indexOf("Macintosh") !== -1 && e.indexOf("Safari") !== -1 && (t = !0), t
        }
        n(Gh, "isMobile")
    });
    var $g = He((zU, Hg) => {
        "use strict";
        Hg.exports = n(function(e, t) {
            if (t = t.split(":")[0], e = +e, !e) return !1;
            switch (t) {
                case "http":
                case "ws":
                    return e !== 80;
                case "https":
                case "wss":
                    return e !== 443;
                case "ftp":
                    return e !== 21;
                case "gopher":
                    return e !== 70;
                case "file":
                    return !1
            }
            return e !== 0
        }, "required")
    });
    var Wg = He(xc => {
        "use strict";
        var NS = Object.prototype.hasOwnProperty,
            BS;

        function qg(i) {
            try {
                return decodeURIComponent(i.replace(/\+/g, " "))
            } catch {
                return null
            }
        }
        n(qg, "decode");

        function Vg(i) {
            try {
                return encodeURIComponent(i)
            } catch {
                return null
            }
        }
        n(Vg, "encode");

        function IS(i) {
            for (var e = /([^=?#&]+)=?([^&]*)/g, t = {}, r; r = e.exec(i);) {
                var s = qg(r[1]),
                    o = qg(r[2]);
                s === null || o === null || s in t || (t[s] = o)
            }
            return t
        }
        n(IS, "querystring");

        function LS(i, e) {
            e = e || "";
            var t = [],
                r, s;
            typeof e != "string" && (e = "?");
            for (s in i)
                if (NS.call(i, s)) {
                    if (r = i[s], !r && (r === null || r === BS || isNaN(r)) && (r = ""), s = Vg(s), r = Vg(r), s === null || r === null) continue;
                    t.push(s + "=" + r)
                }
            return t.length ? e + t.join("&") : ""
        }
        n(LS, "querystringify");
        xc.stringify = LS;
        xc.parse = IS
    });
    var ey = He((qU, Zg) => {
        "use strict";
        var Gg = $g(),
            Cl = Wg(),
            MS = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
            Xg = /[\n\r\t]/g,
            zS = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            Yg = /:\d+$/,
            jS = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            HS = /^[a-zA-Z]:/;

        function Ec(i) {
            return (i || "").toString().replace(MS, "")
        }
        n(Ec, "trimLeft");
        var Fc = [
                ["#", "hash"],
                ["?", "query"], n(function(e, t) {
                    return vi(t.protocol) ? e.replace(/\\/g, "/") : e
                }, "sanitize"), ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d*)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            Kg = {
                hash: 1,
                query: 1
            };

        function Jg(i) {
            var e;
            typeof window < "u" ? e = window : typeof global < "u" ? e = global : typeof self < "u" ? e = self : e = {};
            var t = e.location || {};
            i = i || t;
            var r = {},
                s = typeof i,
                o;
            if (i.protocol === "blob:") r = new bi(unescape(i.pathname), {});
            else if (s === "string") {
                r = new bi(i, {});
                for (o in Kg) delete r[o]
            } else if (s === "object") {
                for (o in i) o in Kg || (r[o] = i[o]);
                r.slashes === void 0 && (r.slashes = zS.test(i.href))
            }
            return r
        }
        n(Jg, "lolcation");

        function vi(i) {
            return i === "file:" || i === "ftp:" || i === "http:" || i === "https:" || i === "ws:" || i === "wss:"
        }
        n(vi, "isSpecial");

        function Qg(i, e) {
            i = Ec(i), i = i.replace(Xg, ""), e = e || {};
            var t = jS.exec(i),
                r = t[1] ? t[1].toLowerCase() : "",
                s = !!t[2],
                o = !!t[3],
                a = 0,
                l;
            return s ? o ? (l = t[2] + t[3] + t[4], a = t[2].length + t[3].length) : (l = t[2] + t[4], a = t[2].length) : o ? (l = t[3] + t[4], a = t[3].length) : l = t[4], r === "file:" ? a >= 2 && (l = l.slice(2)) : vi(r) ? l = t[4] : r ? s && (l = l.slice(2)) : a >= 2 && vi(e.protocol) && (l = t[4]), {
                protocol: r,
                slashes: s || vi(r),
                slashesCount: a,
                rest: l
            }
        }
        n(Qg, "extractProtocol");

        function $S(i, e) {
            if (i === "") return e;
            for (var t = (e || "/").split("/").slice(0, -1).concat(i.split("/")), r = t.length, s = t[r - 1], o = !1, a = 0; r--;) t[r] === "." ? t.splice(r, 1) : t[r] === ".." ? (t.splice(r, 1), a++) : a && (r === 0 && (o = !0), t.splice(r, 1), a--);
            return o && t.unshift(""), (s === "." || s === "..") && t.push(""), t.join("/")
        }
        n($S, "resolve");

        function bi(i, e, t) {
            if (i = Ec(i), i = i.replace(Xg, ""), !(this instanceof bi)) return new bi(i, e, t);
            var r, s, o, a, l, h, c = Fc.slice(),
                d = typeof e,
                f = this,
                y = 0;
            for (d !== "object" && d !== "string" && (t = e, e = null), t && typeof t != "function" && (t = Cl.parse), e = Jg(e), s = Qg(i || "", e), r = !s.protocol && !s.slashes, f.slashes = s.slashes || r && e.slashes, f.protocol = s.protocol || e.protocol || "", i = s.rest, (s.protocol === "file:" && (s.slashesCount !== 2 || HS.test(i)) || !s.slashes && (s.protocol || s.slashesCount < 2 || !vi(f.protocol))) && (c[3] = [/(.*)/, "pathname"]); y < c.length; y++) {
                if (a = c[y], typeof a == "function") {
                    i = a(i, f);
                    continue
                }
                o = a[0], h = a[1], o !== o ? f[h] = i : typeof o == "string" ? (l = o === "@" ? i.lastIndexOf(o) : i.indexOf(o), ~l && (typeof a[2] == "number" ? (f[h] = i.slice(0, l), i = i.slice(l + a[2])) : (f[h] = i.slice(l), i = i.slice(0, l)))) : (l = o.exec(i)) && (f[h] = l[1], i = i.slice(0, l.index)), f[h] = f[h] || r && a[3] && e[h] || "", a[4] && (f[h] = f[h].toLowerCase())
            }
            t && (f.query = t(f.query)), r && e.slashes && f.pathname.charAt(0) !== "/" && (f.pathname !== "" || e.pathname !== "") && (f.pathname = $S(f.pathname, e.pathname)), f.pathname.charAt(0) !== "/" && vi(f.protocol) && (f.pathname = "/" + f.pathname), Gg(f.port, f.protocol) || (f.host = f.hostname, f.port = ""), f.username = f.password = "", f.auth && (l = f.auth.indexOf(":"), ~l ? (f.username = f.auth.slice(0, l), f.username = encodeURIComponent(decodeURIComponent(f.username)), f.password = f.auth.slice(l + 1), f.password = encodeURIComponent(decodeURIComponent(f.password))) : f.username = encodeURIComponent(decodeURIComponent(f.auth)), f.auth = f.password ? f.username + ":" + f.password : f.username), f.origin = f.protocol !== "file:" && vi(f.protocol) && f.host ? f.protocol + "//" + f.host : "null", f.href = f.toString()
        }
        n(bi, "Url");

        function qS(i, e, t) {
            var r = this;
            switch (i) {
                case "query":
                    typeof e == "string" && e.length && (e = (t || Cl.parse)(e)), r[i] = e;
                    break;
                case "port":
                    r[i] = e, Gg(e, r.protocol) ? e && (r.host = r.hostname + ":" + e) : (r.host = r.hostname, r[i] = "");
                    break;
                case "hostname":
                    r[i] = e, r.port && (e += ":" + r.port), r.host = e;
                    break;
                case "host":
                    r[i] = e, Yg.test(e) ? (e = e.split(":"), r.port = e.pop(), r.hostname = e.join(":")) : (r.hostname = e, r.port = "");
                    break;
                case "protocol":
                    r.protocol = e.toLowerCase(), r.slashes = !t;
                    break;
                case "pathname":
                case "hash":
                    if (e) {
                        var s = i === "pathname" ? "/" : "#";
                        r[i] = e.charAt(0) !== s ? s + e : e
                    } else r[i] = e;
                    break;
                case "username":
                case "password":
                    r[i] = encodeURIComponent(e);
                    break;
                case "auth":
                    var o = e.indexOf(":");
                    ~o ? (r.username = e.slice(0, o), r.username = encodeURIComponent(decodeURIComponent(r.username)), r.password = e.slice(o + 1), r.password = encodeURIComponent(decodeURIComponent(r.password))) : r.username = encodeURIComponent(decodeURIComponent(e))
            }
            for (var a = 0; a < Fc.length; a++) {
                var l = Fc[a];
                l[4] && (r[l[1]] = r[l[1]].toLowerCase())
            }
            return r.auth = r.password ? r.username + ":" + r.password : r.username, r.origin = r.protocol !== "file:" && vi(r.protocol) && r.host ? r.protocol + "//" + r.host : "null", r.href = r.toString(), r
        }
        n(qS, "set");

        function VS(i) {
            (!i || typeof i != "function") && (i = Cl.stringify);
            var e, t = this,
                r = t.host,
                s = t.protocol;
            s && s.charAt(s.length - 1) !== ":" && (s += ":");
            var o = s + (t.protocol && t.slashes || vi(t.protocol) ? "//" : "");
            return t.username ? (o += t.username, t.password && (o += ":" + t.password), o += "@") : t.password ? (o += ":" + t.password, o += "@") : t.protocol !== "file:" && vi(t.protocol) && !r && t.pathname !== "/" && (o += "@"), (r[r.length - 1] === ":" || Yg.test(t.hostname) && !t.port) && (r += ":"), o += r + t.pathname, e = typeof t.query == "object" ? i(t.query) : t.query, e && (o += e.charAt(0) !== "?" ? "?" + e : e), t.hash && (o += t.hash), o
        }
        n(VS, "toString");
        bi.prototype = {
            set: qS,
            toString: VS
        };
        bi.extractProtocol = Qg;
        bi.location = Jg;
        bi.trimLeft = Ec;
        bi.qs = Cl;
        Zg.exports = bi
    });
    var qc = He((a9, $c) => {
        typeof $c < "u" && ($c.exports = bt);

        function bt(i) {
            if (i) return j_(i)
        }
        n(bt, "Emitter");

        function j_(i) {
            for (var e in bt.prototype) i[e] = bt.prototype[e];
            return i
        }
        n(j_, "mixin");
        bt.prototype.on = bt.prototype.addEventListener = function(i, e) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + i] = this._callbacks["$" + i] || []).push(e), this
        };
        bt.prototype.once = function(i, e) {
            function t() {
                this.off(i, t), e.apply(this, arguments)
            }
            return n(t, "on"), t.fn = e, this.on(i, t), this
        };
        bt.prototype.off = bt.prototype.removeListener = bt.prototype.removeAllListeners = bt.prototype.removeEventListener = function(i, e) {
            if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
            var t = this._callbacks["$" + i];
            if (!t) return this;
            if (arguments.length == 1) return delete this._callbacks["$" + i], this;
            for (var r, s = 0; s < t.length; s++)
                if (r = t[s], r === e || r.fn === e) {
                    t.splice(s, 1);
                    break
                }
            return t.length === 0 && delete this._callbacks["$" + i], this
        };
        bt.prototype.emit = function(i) {
            this._callbacks = this._callbacks || {};
            for (var e = new Array(arguments.length - 1), t = this._callbacks["$" + i], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            if (t) {
                t = t.slice(0);
                for (var r = 0, s = t.length; r < s; ++r) t[r].apply(this, e)
            }
            return this
        };
        bt.prototype.listeners = function(i) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + i] || []
        };
        bt.prototype.hasListeners = function(i) {
            return !!this.listeners(i).length
        }
    });
    var Ov = He((eI, Ev) => {
        "use strict";

        function bv(i, e) {
            var t = Object.keys(i);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(i);
                e && (r = r.filter(function(s) {
                    return Object.getOwnPropertyDescriptor(i, s).enumerable
                })), t.push.apply(t, r)
            }
            return t
        }
        n(bv, "ownKeys");

        function Yl(i) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e] != null ? arguments[e] : {};
                e % 2 ? bv(Object(t), !0).forEach(function(r) {
                    GP(i, r, t[r])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : bv(Object(t)).forEach(function(r) {
                    Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r))
                })
            }
            return i
        }
        n(Yl, "_objectSpread2");

        function WP(i, e) {
            if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        n(WP, "_classCallCheck");

        function wv(i, e) {
            for (var t = 0; t < e.length; t++) {
                var r = e[t];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r)
            }
        }
        n(wv, "_defineProperties");

        function KP(i, e, t) {
            return e && wv(i.prototype, e), t && wv(i, t), i
        }
        n(KP, "_createClass");

        function GP(i, e, t) {
            return e in i ? Object.defineProperty(i, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : i[e] = t, i
        }
        n(GP, "_defineProperty");

        function Jl() {
            return Jl = Object.assign || function(i) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = arguments[e];
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r])
                }
                return i
            }, Jl.apply(this, arguments)
        }
        n(Jl, "_extends");
        var xv = {
            exports: {}
        };
        (function(i) {
            typeof window > "u" || function(e) {
                var t = e.HTMLCanvasElement && e.HTMLCanvasElement.prototype,
                    r = e.Blob && function() {
                        try {
                            return Boolean(new Blob)
                        } catch {
                            return !1
                        }
                    }(),
                    s = r && e.Uint8Array && function() {
                        try {
                            return new Blob([new Uint8Array(100)]).size === 100
                        } catch {
                            return !1
                        }
                    }(),
                    o = e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || e.MSBlobBuilder,
                    a = /^data:((.*?)(;charset=.*?)?)(;base64)?,/,
                    l = (r || o) && e.atob && e.ArrayBuffer && e.Uint8Array && function(h) {
                        var c, d, f, y, w, S, R, x, F;
                        if (c = h.match(a), !c) throw new Error("invalid data URI");
                        for (d = c[2] ? c[1] : "text/plain" + (c[3] || ";charset=US-ASCII"), f = !!c[4], y = h.slice(c[0].length), f ? w = atob(y) : w = decodeURIComponent(y), S = new ArrayBuffer(w.length), R = new Uint8Array(S), x = 0; x < w.length; x += 1) R[x] = w.charCodeAt(x);
                        return r ? new Blob([s ? R : S], {
                            type: d
                        }) : (F = new o, F.append(S), F.getBlob(d))
                    };
                e.HTMLCanvasElement && !t.toBlob && (t.mozGetAsFile ? t.toBlob = function(h, c, d) {
                    var f = this;
                    setTimeout(function() {
                        d && t.toDataURL && l ? h(l(f.toDataURL(c, d))) : h(f.mozGetAsFile("blob", c))
                    })
                } : t.toDataURL && l && (t.msToBlob ? t.toBlob = function(h, c, d) {
                    var f = this;
                    setTimeout(function() {
                        (c && c !== "image/png" || d) && t.toDataURL && l ? h(l(f.toDataURL(c, d))) : h(f.msToBlob(c))
                    })
                } : t.toBlob = function(h, c, d) {
                    var f = this;
                    setTimeout(function() {
                        h(l(f.toDataURL(c, d)))
                    })
                })), i.exports ? i.exports = l : e.dataURLtoBlob = l
            }(window)
        })(xv);
        var XP = xv.exports,
            YP = n(function(e) {
                return typeof Blob > "u" ? !1 : e instanceof Blob || Object.prototype.toString.call(e) === "[object Blob]"
            }, "isBlob"),
            Sv = {
                strict: !0,
                checkOrientation: !0,
                maxWidth: 1 / 0,
                maxHeight: 1 / 0,
                minWidth: 0,
                minHeight: 0,
                width: void 0,
                height: void 0,
                resize: "none",
                quality: .8,
                mimeType: "auto",
                convertTypes: ["image/png"],
                convertSize: 5e6,
                beforeDraw: null,
                drew: null,
                success: null,
                error: null
            },
            JP = typeof window < "u" && typeof window.document < "u",
            xr = JP ? window : {},
            Ql = n(function(e) {
                return e > 0 && e < 1 / 0
            }, "isPositiveNumber"),
            QP = Array.prototype.slice;

        function ZP(i) {
            return Array.from ? Array.from(i) : QP.call(i)
        }
        n(ZP, "toArray");
        var ex = /^image\/.+$/;

        function Fd(i) {
            return ex.test(i)
        }
        n(Fd, "isImageType");

        function tx(i) {
            var e = Fd(i) ? i.substr(6) : "";
            return e === "jpeg" && (e = "jpg"), ".".concat(e)
        }
        n(tx, "imageTypeToExtension");
        var Fv = String.fromCharCode;

        function ix(i, e, t) {
            var r = "",
                s;
            for (t += e, s = e; s < t; s += 1) r += Fv(i.getUint8(s));
            return r
        }
        n(ix, "getStringFromCharCode");
        var rx = xr.btoa;

        function sx(i, e) {
            for (var t = [], r = 8192, s = new Uint8Array(i); s.length > 0;) t.push(Fv.apply(null, ZP(s.subarray(0, r)))), s = s.subarray(r);
            return "data:".concat(e, ";base64,").concat(rx(t.join("")))
        }
        n(sx, "arrayBufferToDataURL");

        function ox(i) {
            var e = new DataView(i),
                t;
            try {
                var r, s, o;
                if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
                    for (var a = e.byteLength, l = 2; l + 1 < a;) {
                        if (e.getUint8(l) === 255 && e.getUint8(l + 1) === 225) {
                            s = l;
                            break
                        }
                        l += 1
                    }
                if (s) {
                    var h = s + 4,
                        c = s + 10;
                    if (ix(e, h, 4) === "Exif") {
                        var d = e.getUint16(c);
                        if (r = d === 18761, (r || d === 19789) && e.getUint16(c + 2, r) === 42) {
                            var f = e.getUint32(c + 4, r);
                            f >= 8 && (o = c + f)
                        }
                    }
                }
                if (o) {
                    var y = e.getUint16(o, r),
                        w, S;
                    for (S = 0; S < y; S += 1)
                        if (w = o + S * 12 + 2, e.getUint16(w, r) === 274) {
                            w += 8, t = e.getUint16(w, r), e.setUint16(w, 1, r);
                            break
                        }
                }
            } catch {
                t = 1
            }
            return t
        }
        n(ox, "resetAndGetOrientation");

        function nx(i) {
            var e = 0,
                t = 1,
                r = 1;
            switch (i) {
                case 2:
                    t = -1;
                    break;
                case 3:
                    e = -180;
                    break;
                case 4:
                    r = -1;
                    break;
                case 5:
                    e = 90, r = -1;
                    break;
                case 6:
                    e = 90;
                    break;
                case 7:
                    e = 90, t = -1;
                    break;
                case 8:
                    e = -90;
                    break
            }
            return {
                rotate: e,
                scaleX: t,
                scaleY: r
            }
        }
        n(nx, "parseOrientation");
        var ax = /\.\d*(?:0|9){12}\d*$/;

        function _v(i) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
            return ax.test(i) ? Math.round(i * e) / e : i
        }
        n(_v, "normalizeDecimalNumber");

        function ba(i) {
            var e = i.aspectRatio,
                t = i.height,
                r = i.width,
                s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none",
                o = Ql(r),
                a = Ql(t);
            if (o && a) {
                var l = t * e;
                (s === "contain" || s === "none") && l > r || s === "cover" && l < r ? t = r / e : r = t * e
            } else o ? t = r / e : a && (r = t * e);
            return {
                width: r,
                height: t
            }
        }
        n(ba, "getAdjustedSizes");
        var lx = xr.ArrayBuffer,
            Pv = xr.FileReader,
            Es = xr.URL || xr.webkitURL,
            ux = /\.\w+$/,
            hx = xr.Compressor,
            cx = function() {
                function i(e, t) {
                    WP(this, i), this.file = e, this.image = new Image, this.options = Yl(Yl({}, Sv), t), this.aborted = !1, this.result = null, this.init()
                }
                return n(i, "Compressor"), KP(i, [{
                    key: "init",
                    value: n(function() {
                        var t = this,
                            r = this.file,
                            s = this.options;
                        if (!YP(r)) {
                            this.fail(new Error("The first argument must be a File or Blob object."));
                            return
                        }
                        var o = r.type;
                        if (!Fd(o)) {
                            this.fail(new Error("The first argument must be an image File or Blob object."));
                            return
                        }
                        if (!Es || !Pv) {
                            this.fail(new Error("The current browser does not support image compression."));
                            return
                        }
                        if (lx || (s.checkOrientation = !1), Es && !s.checkOrientation) this.load({
                            url: Es.createObjectURL(r)
                        });
                        else {
                            var a = new Pv,
                                l = s.checkOrientation && o === "image/jpeg";
                            this.reader = a, a.onload = function(h) {
                                var c = h.target,
                                    d = c.result,
                                    f = {};
                                if (l) {
                                    var y = ox(d);
                                    y > 1 || !Es ? (f.url = sx(d, o), y > 1 && Jl(f, nx(y))) : f.url = Es.createObjectURL(r)
                                } else f.url = d;
                                t.load(f)
                            }, a.onabort = function() {
                                t.fail(new Error("Aborted to read the image with FileReader."))
                            }, a.onerror = function() {
                                t.fail(new Error("Failed to read the image with FileReader."))
                            }, a.onloadend = function() {
                                t.reader = null
                            }, l ? a.readAsArrayBuffer(r) : a.readAsDataURL(r)
                        }
                    }, "init")
                }, {
                    key: "load",
                    value: n(function(t) {
                        var r = this,
                            s = this.file,
                            o = this.image;
                        o.onload = function() {
                            r.draw(Yl(Yl({}, t), {}, {
                                naturalWidth: o.naturalWidth,
                                naturalHeight: o.naturalHeight
                            }))
                        }, o.onabort = function() {
                            r.fail(new Error("Aborted to load the image."))
                        }, o.onerror = function() {
                            r.fail(new Error("Failed to load the image."))
                        }, xr.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(xr.navigator.userAgent) && (o.crossOrigin = "anonymous"), o.alt = s.name, o.src = t.url
                    }, "load")
                }, {
                    key: "draw",
                    value: n(function(t) {
                        var r = this,
                            s = t.naturalWidth,
                            o = t.naturalHeight,
                            a = t.rotate,
                            l = a === void 0 ? 0 : a,
                            h = t.scaleX,
                            c = h === void 0 ? 1 : h,
                            d = t.scaleY,
                            f = d === void 0 ? 1 : d,
                            y = this.file,
                            w = this.image,
                            S = this.options,
                            R = document.createElement("canvas"),
                            x = R.getContext("2d"),
                            F = Math.abs(l) % 180 === 90,
                            N = (S.resize === "contain" || S.resize === "cover") && Ql(S.width) && Ql(S.height),
                            H = Math.max(S.maxWidth, 0) || 1 / 0,
                            q = Math.max(S.maxHeight, 0) || 1 / 0,
                            K = Math.max(S.minWidth, 0) || 0,
                            k = Math.max(S.minHeight, 0) || 0,
                            B = s / o,
                            z = S.width,
                            G = S.height;
                        if (F) {
                            var Nt = [q, H];
                            H = Nt[0], q = Nt[1];
                            var Kt = [k, K];
                            K = Kt[0], k = Kt[1];
                            var Gt = [G, z];
                            z = Gt[0], G = Gt[1]
                        }
                        N && (B = z / G);
                        var Xt = ba({
                            aspectRatio: B,
                            width: H,
                            height: q
                        }, "contain");
                        H = Xt.width, q = Xt.height;
                        var ir = ba({
                            aspectRatio: B,
                            width: K,
                            height: k
                        }, "cover");
                        if (K = ir.width, k = ir.height, N) {
                            var Fr = ba({
                                aspectRatio: B,
                                width: z,
                                height: G
                            }, S.resize);
                            z = Fr.width, G = Fr.height
                        } else {
                            var xe = ba({
                                    aspectRatio: B,
                                    width: z,
                                    height: G
                                }),
                                Si = xe.width;
                            z = Si === void 0 ? s : Si;
                            var ks = xe.height;
                            G = ks === void 0 ? o : ks
                        }
                        z = Math.floor(_v(Math.min(Math.max(z, K), H))), G = Math.floor(_v(Math.min(Math.max(G, k), q)));
                        var Yt = -z / 2,
                            Er = -G / 2,
                            _i = z,
                            rr = G,
                            Pi = [];
                        if (N) {
                            var Or = 0,
                                Rr = 0,
                                xi = s,
                                xt = o,
                                As = ba({
                                    aspectRatio: B,
                                    width: s,
                                    height: o
                                }, {
                                    contain: "cover",
                                    cover: "contain"
                                }[S.resize]);
                            xi = As.width, xt = As.height, Or = (s - xi) / 2, Rr = (o - xt) / 2, Pi.push(Or, Rr, xi, xt)
                        }
                        if (Pi.push(Yt, Er, _i, rr), F) {
                            var Us = [G, z];
                            z = Us[0], G = Us[1]
                        }
                        R.width = z, R.height = G, Fd(S.mimeType) || (S.mimeType = y.type);
                        var fo = "transparent";
                        if (y.size > S.convertSize && S.convertTypes.indexOf(S.mimeType) >= 0 && (S.mimeType = "image/jpeg"), S.mimeType === "image/jpeg" && (fo = "#fff"), x.fillStyle = fo, x.fillRect(0, 0, z, G), S.beforeDraw && S.beforeDraw.call(this, x, R), !this.aborted && (x.save(), x.translate(z / 2, G / 2), x.rotate(l * Math.PI / 180), x.scale(c, f), x.drawImage.apply(x, [w].concat(Pi)), x.restore(), S.drew && S.drew.call(this, x, R), !this.aborted)) {
                            var _a = n(function(iu) {
                                r.aborted || r.done({
                                    naturalWidth: s,
                                    naturalHeight: o,
                                    result: iu
                                })
                            }, "done");
                            R.toBlob ? R.toBlob(_a, S.mimeType, S.quality) : _a(XP(R.toDataURL(S.mimeType, S.quality)))
                        }
                    }, "draw")
                }, {
                    key: "done",
                    value: n(function(t) {
                        var r = t.naturalWidth,
                            s = t.naturalHeight,
                            o = t.result,
                            a = this.file,
                            l = this.image,
                            h = this.options;
                        if (Es && !h.checkOrientation && Es.revokeObjectURL(l.src), o)
                            if (h.strict && o.size > a.size && h.mimeType === a.type && !(h.width > r || h.height > s || h.minWidth > r || h.minHeight > s || h.maxWidth < r || h.maxHeight < s)) o = a;
                            else {
                                var c = new Date;
                                o.lastModified = c.getTime(), o.lastModifiedDate = c, o.name = a.name, o.name && o.type !== a.type && (o.name = o.name.replace(ux, tx(o.type)))
                            }
                        else o = a;
                        this.result = o, h.success && h.success.call(this, o)
                    }, "done")
                }, {
                    key: "fail",
                    value: n(function(t) {
                        var r = this.options;
                        if (r.error) r.error.call(this, t);
                        else throw t
                    }, "fail")
                }, {
                    key: "abort",
                    value: n(function() {
                        this.aborted || (this.aborted = !0, this.reader ? this.reader.abort() : this.image.complete ? this.fail(new Error("The compression process has been aborted.")) : (this.image.onload = null, this.image.onabort()))
                    }, "abort")
                }], [{
                    key: "noConflict",
                    value: n(function() {
                        return window.Compressor = hx, i
                    }, "noConflict")
                }, {
                    key: "setDefaults",
                    value: n(function(t) {
                        Jl(Sv, t)
                    }, "setDefaults")
                }]), i
            }();
        Ev.exports = cx
    });
    var Od = {};
    yo(Od, {
        Audio: () => yr,
        AwsS3: () => us,
        AwsS3Multipart: () => Yi,
        Box: () => hi,
        Compressor: () => po,
        Core: () => Ox,
        Dashboard: () => ai,
        DefaultStore: () => Ra,
        DragDrop: () => li,
        DropTarget: () => Wr,
        Dropbox: () => ci,
        Facebook: () => di,
        FileInput: () => fr,
        Form: () => Os,
        GoldenRetriever: () => Cs,
        GoogleDrive: () => pi,
        ImageEditor: () => mr,
        Informer: () => si,
        Instagram: () => fi,
        OneDrive: () => mi,
        ProgressBar: () => gr,
        ReduxDevTools: () => Ts,
        ReduxStore: () => tf,
        RemoteSources: () => Yr,
        ScreenCapture: () => vr,
        StatusBar: () => ri,
        ThumbnailGenerator: () => Li,
        Transloadit: () => Dt,
        Tus: () => wi,
        Unsplash: () => gi,
        Uppy: () => ka,
        Url: () => jt,
        Webcam: () => br,
        XHRUpload: () => Fs,
        Zoom: () => yi,
        debugLogger: () => xo,
        locales: () => Cx,
        server: () => xu,
        views: () => Rx
    });

    function qe(i, e) {
        return Object.prototype.hasOwnProperty.call(i, e)
    }
    n(qe, "has");

    function Yd(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(Yd, "_classPrivateFieldLooseBase");
    var T0 = 0;

    function k0(i) {
        return "__private_" + T0++ + "_" + i
    }
    n(k0, "_classPrivateFieldLooseKey");

    function A0(i, e, t) {
        let r = [];
        return i.forEach(s => typeof s != "string" ? r.push(s) : e[Symbol.split](s).forEach((o, a, l) => {
            o !== "" && r.push(o), a < l.length - 1 && r.push(t)
        })), r
    }
    n(A0, "insertReplacement");

    function Jd(i, e) {
        let t = /\$/g,
            r = "$$$$",
            s = [i];
        if (e == null) return s;
        for (let o of Object.keys(e))
            if (o !== "_") {
                let a = e[o];
                typeof a == "string" && (a = t[Symbol.replace](a, r)), s = A0(s, new RegExp(`%\\{${o}\\}`, "g"), a)
            }
        return s
    }
    n(Jd, "interpolate");
    var vo = k0("apply"),
        ar = class {
            constructor(e) {
                Object.defineProperty(this, vo, {
                    value: U0
                }), this.locale = {
                    strings: {},
                    pluralize(t) {
                        return t === 1 ? 0 : 1
                    }
                }, Array.isArray(e) ? e.forEach(Yd(this, vo)[vo], this) : Yd(this, vo)[vo](e)
            }
            translate(e, t) {
                return this.translateArray(e, t).join("")
            }
            translateArray(e, t) {
                if (!qe(this.locale.strings, e)) throw new Error(`missing string: ${e}`);
                let r = this.locale.strings[e];
                if (typeof r == "object") {
                    if (t && typeof t.smart_count < "u") {
                        let o = this.locale.pluralize(t.smart_count);
                        return Jd(r[o], t)
                    }
                    throw new Error("Attempted to use a string with plural forms, but no value was given for %{smart_count}")
                }
                return Jd(r, t)
            }
        };
    n(ar, "Translator");

    function U0(i) {
        if (!(i != null && i.strings)) return;
        let e = this.locale;
        this.locale = { ...e,
            strings: { ...e.strings,
                ...i.strings
            }
        }, this.locale.pluralize = i.pluralize || e.pluralize
    }
    n(U0, "_apply2");
    var yp = oe(hu(), 1);
    var D0 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
    var Ot = n((i = 21) => {
        let e = "",
            t = i;
        for (; t--;) e += D0[Math.random() * 64 | 0];
        return e
    }, "nanoid");
    var vp = oe(bo(), 1);

    function Oa(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(Oa, "_classPrivateFieldLooseBase");
    var Q0 = 0;

    function rp(i) {
        return "__private_" + Q0++ + "_" + i
    }
    n(rp, "_classPrivateFieldLooseKey");
    var Z0 = {
            version: "3.0.2"
        },
        Ur = rp("callbacks"),
        du = rp("publish"),
        wo = class {
            constructor() {
                Object.defineProperty(this, du, {
                    value: eb
                }), Object.defineProperty(this, Ur, {
                    writable: !0,
                    value: new Set
                }), this.state = {}
            }
            getState() {
                return this.state
            }
            setState(e) {
                let t = { ...this.state
                    },
                    r = { ...this.state,
                        ...e
                    };
                this.state = r, Oa(this, du)[du](t, r, e)
            }
            subscribe(e) {
                return Oa(this, Ur)[Ur].add(e), () => {
                    Oa(this, Ur)[Ur].delete(e)
                }
            }
        };
    n(wo, "DefaultStore");

    function eb() {
        for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++) e[t] = arguments[t];
        Oa(this, Ur)[Ur].forEach(r => {
            r(...e)
        })
    }
    n(eb, "_publish2");
    wo.VERSION = Z0.version;
    var Ra = wo;

    function Oi(i) {
        let e = i.lastIndexOf(".");
        return e === -1 || e === i.length - 1 ? {
            name: i,
            extension: void 0
        } : {
            name: i.slice(0, e),
            extension: i.slice(e + 1)
        }
    }
    n(Oi, "getFileNameAndExtension");
    var So = {
        md: "text/markdown",
        markdown: "text/markdown",
        mp4: "video/mp4",
        mp3: "audio/mp3",
        svg: "image/svg+xml",
        jpg: "image/jpeg",
        png: "image/png",
        webp: "image/webp",
        gif: "image/gif",
        heic: "image/heic",
        heif: "image/heif",
        yaml: "text/yaml",
        yml: "text/yaml",
        csv: "text/csv",
        tsv: "text/tab-separated-values",
        tab: "text/tab-separated-values",
        avi: "video/x-msvideo",
        mks: "video/x-matroska",
        mkv: "video/x-matroska",
        mov: "video/quicktime",
        dicom: "application/dicom",
        doc: "application/msword",
        docm: "application/vnd.ms-word.document.macroenabled.12",
        docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        dot: "application/msword",
        dotm: "application/vnd.ms-word.template.macroenabled.12",
        dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
        xla: "application/vnd.ms-excel",
        xlam: "application/vnd.ms-excel.addin.macroenabled.12",
        xlc: "application/vnd.ms-excel",
        xlf: "application/x-xliff+xml",
        xlm: "application/vnd.ms-excel",
        xls: "application/vnd.ms-excel",
        xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12",
        xlsm: "application/vnd.ms-excel.sheet.macroenabled.12",
        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        xlt: "application/vnd.ms-excel",
        xltm: "application/vnd.ms-excel.template.macroenabled.12",
        xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
        xlw: "application/vnd.ms-excel",
        txt: "text/plain",
        text: "text/plain",
        conf: "text/plain",
        log: "text/plain",
        pdf: "application/pdf",
        zip: "application/zip",
        "7z": "application/x-7z-compressed",
        rar: "application/x-rar-compressed",
        tar: "application/x-tar",
        gz: "application/gzip",
        dmg: "application/x-apple-diskimage"
    };

    function _o(i) {
        var e;
        if (i.type) return i.type;
        let t = i.name ? (e = Oi(i.name).extension) == null ? void 0 : e.toLowerCase() : null;
        return t && t in So ? So[t] : "application/octet-stream"
    }
    n(_o, "getFileType");

    function tb(i) {
        return i.charCodeAt(0).toString(32)
    }
    n(tb, "encodeCharacter");

    function sp(i) {
        let e = "";
        return i.replace(/[^A-Z0-9]/ig, t => (e += `-${tb(t)}`, "/")) + e
    }
    n(sp, "encodeFilename");

    function Po(i) {
        let e = "uppy";
        return typeof i.name == "string" && (e += `-${sp(i.name.toLowerCase())}`), i.type !== void 0 && (e += `-${i.type}`), i.meta && typeof i.meta.relativePath == "string" && (e += `-${sp(i.meta.relativePath.toLowerCase())}`), i.data.size !== void 0 && (e += `-${i.data.size}`), i.data.lastModified !== void 0 && (e += `-${i.data.lastModified}`), e
    }
    n(Po, "generateFileID");

    function pu(i) {
        if (i == null && typeof navigator < "u" && (i = navigator.userAgent), !i) return !0;
        let e = /Edge\/(\d+\.\d+)/.exec(i);
        if (!e) return !0;
        let t = e[1],
            [r, s] = t.split(".");
        return r = parseInt(r, 10), s = parseInt(s, 10), r < 15 || r === 15 && s < 15063 || r > 18 || r === 18 && s >= 18218
    }
    n(pu, "supportsUploadProgress");

    function fu(i, e) {
        return e.name ? e.name : i.split("/")[0] === "image" ? `${i.split("/")[0]}.${i.split("/")[1]}` : "noname"
    }
    n(fu, "getFileName");

    function mu(i) {
        return i < 10 ? `0${i}` : i.toString()
    }
    n(mu, "pad");

    function Ls() {
        let i = new Date,
            e = mu(i.getHours()),
            t = mu(i.getMinutes()),
            r = mu(i.getSeconds());
        return `${e}:${t}:${r}`
    }
    n(Ls, "getTimeStamp");
    var op = {
            debug: () => {},
            warn: () => {},
            error: function() {
                for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++) e[t] = arguments[t];
                return console.error(`[Uppy] [${Ls()}]`, ...e)
            }
        },
        xo = {
            debug: function() {
                for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++) e[t] = arguments[t];
                return console.debug(`[Uppy] [${Ls()}]`, ...e)
            },
            warn: function() {
                for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++) e[t] = arguments[t];
                return console.warn(`[Uppy] [${Ls()}]`, ...e)
            },
            error: function() {
                for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++) e[t] = arguments[t];
                return console.error(`[Uppy] [${Ls()}]`, ...e)
            }
        };
    var Ta = oe(Ca(), 1),
        dp = oe(cp(), 1);
    var pp = {
            maxFileSize: null,
            minFileSize: null,
            maxTotalFileSize: null,
            maxNumberOfFiles: null,
            minNumberOfFiles: null,
            allowedFileTypes: null,
            requiredMetaFields: []
        },
        Ve = class extends Error {
            constructor() {
                super(...arguments), this.isRestriction = !0
            }
        };
    n(Ve, "RestrictionError");
    var Fo = class {
        constructor(e, t) {
            this.i18n = t, this.getOpts = () => {
                let r = e();
                if (r.restrictions.allowedFileTypes != null && !Array.isArray(r.restrictions.allowedFileTypes)) throw new TypeError("`restrictions.allowedFileTypes` must be an array");
                return r
            }
        }
        validate(e, t) {
            let {
                maxFileSize: r,
                minFileSize: s,
                maxTotalFileSize: o,
                maxNumberOfFiles: a,
                allowedFileTypes: l
            } = this.getOpts().restrictions;
            if (a && t.filter(c => !c.isGhost).length + 1 > a) throw new Ve(`${this.i18n("youCanOnlyUploadX",{smart_count:a})}`);
            if (l && !l.some(c => c.includes("/") ? e.type ? (0, dp.default)(e.type.replace(/;.*?$/, ""), c) : !1 : c[0] === "." && e.extension ? e.extension.toLowerCase() === c.slice(1).toLowerCase() : !1)) {
                let c = l.join(", ");
                throw new Ve(this.i18n("youCanOnlyUploadFileTypes", {
                    types: c
                }))
            }
            if (o && e.size != null && t.reduce((c, d) => c + d.size, e.size) > o) throw new Ve(this.i18n("exceedsSize", {
                size: (0, Ta.default)(o),
                file: e.name
            }));
            if (r && e.size != null && e.size > r) throw new Ve(this.i18n("exceedsSize", {
                size: (0, Ta.default)(r),
                file: e.name
            }));
            if (s && e.size != null && e.size < s) throw new Ve(this.i18n("inferiorSize", {
                size: (0, Ta.default)(s)
            }))
        }
        validateMinNumberOfFiles(e) {
            let {
                minNumberOfFiles: t
            } = this.getOpts().restrictions;
            if (Object.keys(e).length < t) throw new Ve(this.i18n("youHaveToAtLeastSelectX", {
                smart_count: t
            }))
        }
        getMissingRequiredMetaFields(e) {
            let t = new Ve(this.i18n("missingRequiredMetaFieldOnFile", {
                    fileName: e.name
                })),
                {
                    requiredMetaFields: r
                } = this.getOpts().restrictions,
                s = [];
            for (let o of r)(!Object.hasOwn(e.meta, o) || e.meta[o] === "") && s.push(o);
            return {
                missingFields: s,
                error: t
            }
        }
    };
    n(Fo, "Restricter");
    var fp = {
        strings: {
            addBulkFilesFailed: {
                0: "Failed to add %{smart_count} file due to an internal error",
                1: "Failed to add %{smart_count} files due to internal errors"
            },
            youCanOnlyUploadX: {
                0: "You can only upload %{smart_count} file",
                1: "You can only upload %{smart_count} files"
            },
            youHaveToAtLeastSelectX: {
                0: "You have to select at least %{smart_count} file",
                1: "You have to select at least %{smart_count} files"
            },
            exceedsSize: "%{file} exceeds maximum allowed size of %{size}",
            missingRequiredMetaField: "Missing required meta fields",
            missingRequiredMetaFieldOnFile: "Missing required meta fields in %{fileName}",
            inferiorSize: "This file is smaller than the allowed size of %{size}",
            youCanOnlyUploadFileTypes: "You can only upload: %{types}",
            noMoreFilesAllowed: "Cannot add more files",
            noDuplicates: "Cannot add the duplicate file '%{fileName}', it already exists",
            companionError: "Connection with Companion failed",
            authAborted: "Authentication aborted",
            companionUnauthorizeHint: "To unauthorize to your %{provider} account, please go to %{url}",
            failedToUpload: "Failed to upload %{file}",
            noInternetConnection: "No Internet connection",
            connectedToInternet: "Connected to the Internet",
            noFilesFound: "You have no files or folders here",
            selectX: {
                0: "Select %{smart_count}",
                1: "Select %{smart_count}"
            },
            allFilesFromFolderNamed: "All files from folder %{name}",
            openFolderNamed: "Open folder %{name}",
            cancel: "Cancel",
            logOut: "Log out",
            filter: "Filter",
            resetFilter: "Reset filter",
            loading: "Loading...",
            authenticateWithTitle: "Please authenticate with %{pluginName} to select files",
            authenticateWith: "Connect to %{pluginName}",
            signInWithGoogle: "Sign in with Google",
            searchImages: "Search for images",
            enterTextToSearch: "Enter text to search for images",
            search: "Search",
            emptyFolderAdded: "No files were added from empty folder",
            folderAlreadyAdded: 'The folder "%{folder}" was already added',
            folderAdded: {
                0: "Added %{smart_count} file from %{folder}",
                1: "Added %{smart_count} files from %{folder}"
            }
        }
    };
    var mp, gp;

    function L(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(L, "_classPrivateFieldLooseBase");
    var sb = 0;

    function Oe(i) {
        return "__private_" + sb++ + "_" + i
    }
    n(Oe, "_classPrivateFieldLooseKey");
    var ob = {
            version: "3.0.6"
        },
        De = Oe("plugins"),
        It = Oe("restricter"),
        Eo = Oe("storeUnsubscribe"),
        Ri = Oe("emitter"),
        Dr = Oe("preProcessors"),
        Nr = Oe("uploaders"),
        ki = Oe("postProcessors"),
        pt = Oe("informAndEmit"),
        ko = Oe("checkRequiredMetaFieldsOnFile"),
        gu = Oe("checkRequiredMetaFields"),
        Oo = Oe("assertNewUploadAllowed"),
        Ro = Oe("checkAndCreateFileStateObject"),
        Co = Oe("startIfAutoProceed"),
        yu = Oe("addListeners"),
        Lt = Oe("updateOnlineStatus"),
        Ci = Oe("createUpload"),
        vu = Oe("getUpload"),
        Br = Oe("removeUpload"),
        Ti = Oe("runUpload");
    mp = Symbol.for("uppy test: getPlugins");
    gp = Symbol.for("uppy test: createUpload");
    var To = class {
        constructor(e) {
            Object.defineProperty(this, Ti, {
                value: gb
            }), Object.defineProperty(this, Br, {
                value: mb
            }), Object.defineProperty(this, vu, {
                value: fb
            }), Object.defineProperty(this, Ci, {
                value: pb
            }), Object.defineProperty(this, yu, {
                value: db
            }), Object.defineProperty(this, Co, {
                value: cb
            }), Object.defineProperty(this, Ro, {
                value: hb
            }), Object.defineProperty(this, Oo, {
                value: ub
            }), Object.defineProperty(this, gu, {
                value: lb
            }), Object.defineProperty(this, ko, {
                value: ab
            }), Object.defineProperty(this, pt, {
                value: nb
            }), Object.defineProperty(this, De, {
                writable: !0,
                value: Object.create(null)
            }), Object.defineProperty(this, It, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, Eo, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, Ri, {
                writable: !0,
                value: (0, yp.default)()
            }), Object.defineProperty(this, Dr, {
                writable: !0,
                value: new Set
            }), Object.defineProperty(this, Nr, {
                writable: !0,
                value: new Set
            }), Object.defineProperty(this, ki, {
                writable: !0,
                value: new Set
            }), Object.defineProperty(this, Lt, {
                writable: !0,
                value: this.updateOnlineStatus.bind(this)
            }), this.defaultLocale = fp;
            let t = {
                id: "uppy",
                autoProceed: !1,
                allowMultipleUploadBatches: !0,
                debug: !1,
                restrictions: pp,
                meta: {},
                onBeforeFileAdded: r => r,
                onBeforeUpload: r => r,
                store: new Ra,
                logger: op,
                infoTimeout: 5e3
            };
            this.opts = { ...t,
                ...e,
                restrictions: { ...t.restrictions,
                    ...e && e.restrictions
                }
            }, e && e.logger && e.debug ? this.log("You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.", "warning") : e && e.debug && (this.opts.logger = xo), this.log(`Using Core v${this.constructor.VERSION}`), this.i18nInit(), this.calculateProgress = (0, vp.default)(this.calculateProgress.bind(this), 500, {
                leading: !0,
                trailing: !0
            }), this.store = this.opts.store, this.setState({
                plugins: {},
                files: {},
                currentUploads: {},
                allowNewUpload: !0,
                capabilities: {
                    uploadProgress: pu(),
                    individualCancellation: !0,
                    resumableUploads: !1
                },
                totalProgress: 0,
                meta: { ...this.opts.meta
                },
                info: [],
                recoveredState: null
            }), L(this, It)[It] = new Fo(() => this.opts, this.i18n), L(this, Eo)[Eo] = this.store.subscribe((r, s, o) => {
                this.emit("state-update", r, s, o), this.updateAll(s)
            }), this.opts.debug && typeof window < "u" && (window[this.opts.id] = this), L(this, yu)[yu]()
        }
        emit(e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) r[s - 1] = arguments[s];
            L(this, Ri)[Ri].emit(e, ...r)
        }
        on(e, t) {
            return L(this, Ri)[Ri].on(e, t), this
        }
        once(e, t) {
            return L(this, Ri)[Ri].once(e, t), this
        }
        off(e, t) {
            return L(this, Ri)[Ri].off(e, t), this
        }
        updateAll(e) {
            this.iteratePlugins(t => {
                t.update(e)
            })
        }
        setState(e) {
            this.store.setState(e)
        }
        getState() {
            return this.store.getState()
        }
        setFileState(e, t) {
            if (!this.getState().files[e]) throw new Error(`Can\u2019t set state for ${e} (the file could have been removed)`);
            this.setState({
                files: { ...this.getState().files,
                    [e]: { ...this.getState().files[e],
                        ...t
                    }
                }
            })
        }
        i18nInit() {
            let e = new ar([this.defaultLocale, this.opts.locale]);
            this.i18n = e.translate.bind(e), this.i18nArray = e.translateArray.bind(e), this.locale = e.locale
        }
        setOptions(e) {
            this.opts = { ...this.opts,
                ...e,
                restrictions: { ...this.opts.restrictions,
                    ...e && e.restrictions
                }
            }, e.meta && this.setMeta(e.meta), this.i18nInit(), e.locale && this.iteratePlugins(t => {
                t.setOptions()
            }), this.setState()
        }
        resetProgress() {
            let e = {
                    percentage: 0,
                    bytesUploaded: 0,
                    uploadComplete: !1,
                    uploadStarted: null
                },
                t = { ...this.getState().files
                },
                r = {};
            Object.keys(t).forEach(s => {
                let o = { ...t[s]
                };
                o.progress = { ...o.progress,
                    ...e
                }, r[s] = o
            }), this.setState({
                files: r,
                totalProgress: 0
            }), this.emit("reset-progress")
        }
        addPreProcessor(e) {
            L(this, Dr)[Dr].add(e)
        }
        removePreProcessor(e) {
            return L(this, Dr)[Dr].delete(e)
        }
        addPostProcessor(e) {
            L(this, ki)[ki].add(e)
        }
        removePostProcessor(e) {
            return L(this, ki)[ki].delete(e)
        }
        addUploader(e) {
            L(this, Nr)[Nr].add(e)
        }
        removeUploader(e) {
            return L(this, Nr)[Nr].delete(e)
        }
        setMeta(e) {
            let t = { ...this.getState().meta,
                    ...e
                },
                r = { ...this.getState().files
                };
            Object.keys(r).forEach(s => {
                r[s] = { ...r[s],
                    meta: { ...r[s].meta,
                        ...e
                    }
                }
            }), this.log("Adding metadata:"), this.log(e), this.setState({
                meta: t,
                files: r
            })
        }
        setFileMeta(e, t) {
            let r = { ...this.getState().files
            };
            if (!r[e]) {
                this.log("Was trying to set metadata for a file that has been removed: ", e);
                return
            }
            let s = { ...r[e].meta,
                ...t
            };
            r[e] = { ...r[e],
                meta: s
            }, this.setState({
                files: r
            })
        }
        getFile(e) {
            return this.getState().files[e]
        }
        getFiles() {
            let {
                files: e
            } = this.getState();
            return Object.values(e)
        }
        getObjectOfFilesPerState() {
            let {
                files: e,
                totalProgress: t,
                error: r
            } = this.getState(), s = Object.values(e), o = s.filter(S => {
                let {
                    progress: R
                } = S;
                return !R.uploadComplete && R.uploadStarted
            }), a = s.filter(S => !S.progress.uploadStarted), l = s.filter(S => S.progress.uploadStarted || S.progress.preprocess || S.progress.postprocess), h = s.filter(S => S.progress.uploadStarted), c = s.filter(S => S.isPaused), d = s.filter(S => S.progress.uploadComplete), f = s.filter(S => S.error), y = o.filter(S => !S.isPaused), w = s.filter(S => S.progress.preprocess || S.progress.postprocess);
            return {
                newFiles: a,
                startedFiles: l,
                uploadStartedFiles: h,
                pausedFiles: c,
                completeFiles: d,
                erroredFiles: f,
                inProgressFiles: o,
                inProgressNotPausedFiles: y,
                processingFiles: w,
                isUploadStarted: h.length > 0,
                isAllComplete: t === 100 && d.length === s.length && w.length === 0,
                isAllErrored: !!r && f.length === s.length,
                isAllPaused: o.length !== 0 && c.length === o.length,
                isUploadInProgress: o.length > 0,
                isSomeGhost: s.some(S => S.isGhost)
            }
        }
        validateRestrictions(e, t) {
            t === void 0 && (t = this.getFiles());
            try {
                L(this, It)[It].validate(e, t)
            } catch (r) {
                return r
            }
            return null
        }
        checkIfFileAlreadyExists(e) {
            let {
                files: t
            } = this.getState();
            return !!(t[e] && !t[e].isGhost)
        }
        addFile(e) {
            L(this, Oo)[Oo](e);
            let {
                files: t
            } = this.getState(), r = L(this, Ro)[Ro](t, e);
            return t[r.id] && t[r.id].isGhost && (r = { ...t[r.id],
                data: e.data,
                isGhost: !1
            }, this.log(`Replaced the blob in the restored ghost file: ${r.name}, ${r.id}`)), this.setState({
                files: { ...t,
                    [r.id]: r
                }
            }), this.emit("file-added", r), this.emit("files-added", [r]), this.log(`Added file: ${r.name}, ${r.id}, mime type: ${r.type}`), L(this, Co)[Co](), r.id
        }
        addFiles(e) {
            L(this, Oo)[Oo]();
            let t = { ...this.getState().files
                },
                r = [],
                s = [];
            for (let o = 0; o < e.length; o++) try {
                let a = L(this, Ro)[Ro](t, e[o]);
                t[a.id] && t[a.id].isGhost && (a = { ...t[a.id],
                    data: e[o].data,
                    isGhost: !1
                }, this.log(`Replaced blob in a ghost file: ${a.name}, ${a.id}`)), t[a.id] = a, r.push(a)
            } catch (a) {
                a.isRestriction || s.push(a)
            }
            if (this.setState({
                files: t
            }), r.forEach(o => {
                this.emit("file-added", o)
            }), this.emit("files-added", r), r.length > 5 ? this.log(`Added batch of ${r.length} files`) : Object.keys(r).forEach(o => {
                this.log(`Added file: ${r[o].name}
 id: ${r[o].id}
 type: ${r[o].type}`)
            }), r.length > 0 && L(this, Co)[Co](), s.length > 0) {
                let o = `Multiple errors occurred while adding files:
`;
                if (s.forEach(a => {
                    o += `
 * ${a.message}`
                }), this.info({
                    message: this.i18n("addBulkFilesFailed", {
                        smart_count: s.length
                    }),
                    details: o
                }, "error", this.opts.infoTimeout), typeof AggregateError == "function") throw new AggregateError(s, o); {
                    let a = new Error(o);
                    throw a.errors = s, a
                }
            }
        }
        removeFiles(e, t) {
            let {
                files: r,
                currentUploads: s
            } = this.getState(), o = { ...r
            }, a = { ...s
            }, l = Object.create(null);
            e.forEach(f => {
                r[f] && (l[f] = r[f], delete o[f])
            });

            function h(f) {
                return l[f] === void 0
            }
            n(h, "fileIsNotRemoved"), Object.keys(a).forEach(f => {
                let y = s[f].fileIDs.filter(h);
                if (y.length === 0) {
                    delete a[f];
                    return
                }
                let {
                    capabilities: w
                } = this.getState();
                if (y.length !== s[f].fileIDs.length && !w.individualCancellation) throw new Error("individualCancellation is disabled");
                a[f] = { ...s[f],
                    fileIDs: y
                }
            });
            let c = {
                currentUploads: a,
                files: o
            };
            Object.keys(o).length === 0 && (c.allowNewUpload = !0, c.error = null, c.recoveredState = null), this.setState(c), this.calculateTotalProgress();
            let d = Object.keys(l);
            d.forEach(f => {
                this.emit("file-removed", l[f], t)
            }), d.length > 5 ? this.log(`Removed ${d.length} files`) : this.log(`Removed files: ${d.join(", ")}`)
        }
        removeFile(e, t) {
            t === void 0 && (t = null), this.removeFiles([e], t)
        }
        pauseResume(e) {
            if (!this.getState().capabilities.resumableUploads || this.getFile(e).uploadComplete) return;
            let r = !(this.getFile(e).isPaused || !1);
            return this.setFileState(e, {
                isPaused: r
            }), this.emit("upload-pause", e, r), r
        }
        pauseAll() {
            let e = { ...this.getState().files
            };
            Object.keys(e).filter(r => !e[r].progress.uploadComplete && e[r].progress.uploadStarted).forEach(r => {
                let s = { ...e[r],
                    isPaused: !0
                };
                e[r] = s
            }), this.setState({
                files: e
            }), this.emit("pause-all")
        }
        resumeAll() {
            let e = { ...this.getState().files
            };
            Object.keys(e).filter(r => !e[r].progress.uploadComplete && e[r].progress.uploadStarted).forEach(r => {
                let s = { ...e[r],
                    isPaused: !1,
                    error: null
                };
                e[r] = s
            }), this.setState({
                files: e
            }), this.emit("resume-all")
        }
        retryAll() {
            let e = { ...this.getState().files
                },
                t = Object.keys(e).filter(s => e[s].error);
            if (t.forEach(s => {
                let o = { ...e[s],
                    isPaused: !1,
                    error: null
                };
                e[s] = o
            }), this.setState({
                files: e,
                error: null
            }), this.emit("retry-all", t), t.length === 0) return Promise.resolve({
                successful: [],
                failed: []
            });
            let r = L(this, Ci)[Ci](t, {
                forceAllowNewUpload: !0
            });
            return L(this, Ti)[Ti](r)
        }
        cancelAll(e) {
            let {
                reason: t = "user"
            } = e === void 0 ? {} : e;
            if (this.emit("cancel-all", {
                reason: t
            }), t === "user") {
                let {
                    files: r
                } = this.getState(), s = Object.keys(r);
                s.length && this.removeFiles(s, "cancel-all"), this.setState({
                    totalProgress: 0,
                    error: null,
                    recoveredState: null
                })
            }
        }
        retryUpload(e) {
            this.setFileState(e, {
                error: null,
                isPaused: !1
            }), this.emit("upload-retry", e);
            let t = L(this, Ci)[Ci]([e], {
                forceAllowNewUpload: !0
            });
            return L(this, Ti)[Ti](t)
        }
        logout() {
            this.iteratePlugins(e => {
                e.provider && e.provider.logout && e.provider.logout()
            })
        }
        calculateProgress(e, t) {
            if (e == null || !this.getFile(e.id)) {
                this.log(`Not setting progress for a file that has been removed: ${e?.id}`);
                return
            }
            let r = Number.isFinite(t.bytesTotal) && t.bytesTotal > 0;
            this.setFileState(e.id, {
                progress: { ...this.getFile(e.id).progress,
                    bytesUploaded: t.bytesUploaded,
                    bytesTotal: t.bytesTotal,
                    percentage: r ? Math.round(t.bytesUploaded / t.bytesTotal * 100) : 0
                }
            }), this.calculateTotalProgress()
        }
        calculateTotalProgress() {
            let t = this.getFiles().filter(c => c.progress.uploadStarted || c.progress.preprocess || c.progress.postprocess);
            if (t.length === 0) {
                this.emit("progress", 0), this.setState({
                    totalProgress: 0
                });
                return
            }
            let r = t.filter(c => c.progress.bytesTotal != null),
                s = t.filter(c => c.progress.bytesTotal == null);
            if (r.length === 0) {
                let c = t.length * 100,
                    d = s.reduce((y, w) => y + w.progress.percentage, 0),
                    f = Math.round(d / c * 100);
                this.setState({
                    totalProgress: f
                });
                return
            }
            let o = r.reduce((c, d) => c + d.progress.bytesTotal, 0),
                a = o / r.length;
            o += a * s.length;
            let l = 0;
            r.forEach(c => {
                l += c.progress.bytesUploaded
            }), s.forEach(c => {
                l += a * (c.progress.percentage || 0) / 100
            });
            let h = o === 0 ? 0 : Math.round(l / o * 100);
            h > 100 && (h = 100), this.setState({
                totalProgress: h
            }), this.emit("progress", h)
        }
        updateOnlineStatus() {
            (typeof window.navigator.onLine < "u" ? window.navigator.onLine : !0) ? (this.emit("is-online"), this.wasOffline && (this.emit("back-online"), this.info(this.i18n("connectedToInternet"), "success", 3e3), this.wasOffline = !1)) : (this.emit("is-offline"), this.info(this.i18n("noInternetConnection"), "error", 0), this.wasOffline = !0)
        }
        getID() {
            return this.opts.id
        }
        use(e, t) {
            if (typeof e != "function") {
                let a = `Expected a plugin class, but got ${e===null?"null":typeof e}. Please verify that the plugin was imported and spelled correctly.`;
                throw new TypeError(a)
            }
            let r = new e(this, t),
                s = r.id;
            if (!s) throw new Error("Your plugin must have an id");
            if (!r.type) throw new Error("Your plugin must have a type");
            let o = this.getPlugin(s);
            if (o) {
                let a = `Already found a plugin named '${o.id}'. Tried to use: '${s}'.
Uppy plugins must have unique \`id\` options. See https://uppy.io/docs/plugins/#id.`;
                throw new Error(a)
            }
            return e.VERSION && this.log(`Using ${s} v${e.VERSION}`), r.type in L(this, De)[De] ? L(this, De)[De][r.type].push(r) : L(this, De)[De][r.type] = [r], r.install(), this
        }
        getPlugin(e) {
            for (let t of Object.values(L(this, De)[De])) {
                let r = t.find(s => s.id === e);
                if (r != null) return r
            }
        }[mp](e) {
            return L(this, De)[De][e]
        }
        iteratePlugins(e) {
            Object.values(L(this, De)[De]).flat(1).forEach(e)
        }
        removePlugin(e) {
            this.log(`Removing plugin ${e.id}`), this.emit("plugin-remove", e), e.uninstall && e.uninstall();
            let t = L(this, De)[De][e.type],
                r = t.findIndex(a => a.id === e.id);
            r !== -1 && t.splice(r, 1);
            let o = {
                plugins: { ...this.getState().plugins,
                    [e.id]: void 0
                }
            };
            this.setState(o)
        }
        close(e) {
            let {
                reason: t
            } = e === void 0 ? {} : e;
            this.log(`Closing Uppy instance ${this.opts.id}: removing all files and uninstalling plugins`), this.cancelAll({
                reason: t
            }), L(this, Eo)[Eo](), this.iteratePlugins(r => {
                this.removePlugin(r)
            }), typeof window < "u" && window.removeEventListener && (window.removeEventListener("online", L(this, Lt)[Lt]), window.removeEventListener("offline", L(this, Lt)[Lt]))
        }
        hideInfo() {
            let {
                info: e
            } = this.getState();
            this.setState({
                info: e.slice(1)
            }), this.emit("info-hidden")
        }
        info(e, t, r) {
            t === void 0 && (t = "info"), r === void 0 && (r = 3e3);
            let s = typeof e == "object";
            this.setState({
                info: [...this.getState().info, {
                    type: t,
                    message: s ? e.message : e,
                    details: s ? e.details : null
                }]
            }), setTimeout(() => this.hideInfo(), r), this.emit("info-visible")
        }
        log(e, t) {
            let {
                logger: r
            } = this.opts;
            switch (t) {
                case "error":
                    r.error(e);
                    break;
                case "warning":
                    r.warn(e);
                    break;
                default:
                    r.debug(e);
                    break
            }
        }
        restore(e) {
            return this.log(`Core: attempting to restore upload "${e}"`), this.getState().currentUploads[e] ? L(this, Ti)[Ti](e) : (L(this, Br)[Br](e), Promise.reject(new Error("Nonexistent upload")))
        }[gp]() {
            return L(this, Ci)[Ci](...arguments)
        }
        addResultData(e, t) {
            if (!L(this, vu)[vu](e)) {
                this.log(`Not setting result for an upload that has been removed: ${e}`);
                return
            }
            let {
                currentUploads: r
            } = this.getState(), s = { ...r[e],
                result: { ...r[e].result,
                    ...t
                }
            };
            this.setState({
                currentUploads: { ...r,
                    [e]: s
                }
            })
        }
        upload() {
            var e;
            (e = L(this, De)[De].uploader) != null && e.length || this.log("No uploader type plugins are used", "warning");
            let {
                files: t
            } = this.getState(), r = this.opts.onBeforeUpload(t);
            return r === !1 ? Promise.reject(new Error("Not starting the upload because onBeforeUpload returned false")) : (r && typeof r == "object" && (t = r, this.setState({
                files: t
            })), Promise.resolve().then(() => L(this, It)[It].validateMinNumberOfFiles(t)).catch(s => {
                throw L(this, pt)[pt](s), s
            }).then(() => {
                if (!L(this, gu)[gu](t)) throw new Ve(this.i18n("missingRequiredMetaField"))
            }).catch(s => {
                throw s
            }).then(() => {
                let {
                    currentUploads: s
                } = this.getState(), o = Object.values(s).flatMap(h => h.fileIDs), a = [];
                Object.keys(t).forEach(h => {
                    let c = this.getFile(h);
                    !c.progress.uploadStarted && o.indexOf(h) === -1 && a.push(c.id)
                });
                let l = L(this, Ci)[Ci](a);
                return L(this, Ti)[Ti](l)
            }).catch(s => {
                throw this.emit("error", s), this.log(s, "error"), s
            }))
        }
    };
    n(To, "Uppy");

    function nb(i, e) {
        let {
            message: t,
            details: r = ""
        } = i;
        i.isRestriction ? this.emit("restriction-failed", e, i) : this.emit("error", i), this.info({
            message: t,
            details: r
        }, "error", this.opts.infoTimeout), this.log(i, "warning")
    }
    n(nb, "_informAndEmit2");

    function ab(i) {
        let {
            missingFields: e,
            error: t
        } = L(this, It)[It].getMissingRequiredMetaFields(i);
        return e.length > 0 ? (this.setFileState(i.id, {
            missingRequiredMetaFields: e
        }), this.log(t.message), this.emit("restriction-failed", i, t), !1) : !0
    }
    n(ab, "_checkRequiredMetaFieldsOnFile2");

    function lb(i) {
        let e = !0;
        for (let t of Object.values(i)) L(this, ko)[ko](t) || (e = !1);
        return e
    }
    n(lb, "_checkRequiredMetaFields2");

    function ub(i) {
        let {
            allowNewUpload: e
        } = this.getState();
        if (e === !1) {
            let t = new Ve(this.i18n("noMoreFilesAllowed"));
            throw L(this, pt)[pt](t, i), t
        }
    }
    n(ub, "_assertNewUploadAllowed2");

    function hb(i, e) {
        e instanceof File && (e = {
            name: e.name,
            type: e.type,
            size: e.size,
            data: e
        });
        let t = _o(e),
            r = fu(t, e),
            s = Oi(r).extension,
            o = Boolean(e.isRemote),
            a = Po({ ...e,
                type: t
            });
        if (this.checkIfFileAlreadyExists(a)) {
            let f = new Ve(this.i18n("noDuplicates", {
                fileName: r
            }));
            throw L(this, pt)[pt](f, e), f
        }
        let l = e.meta || {};
        l.name = r, l.type = t;
        let h = Number.isFinite(e.data.size) ? e.data.size : null,
            c = {
                source: e.source || "",
                id: a,
                name: r,
                extension: s || "",
                meta: { ...this.getState().meta,
                    ...l
                },
                type: t,
                data: e.data,
                progress: {
                    percentage: 0,
                    bytesUploaded: 0,
                    bytesTotal: h,
                    uploadComplete: !1,
                    uploadStarted: null
                },
                size: h,
                isRemote: o,
                remote: e.remote || "",
                preview: e.preview
            },
            d = this.opts.onBeforeFileAdded(c, i);
        if (d === !1) {
            let f = new Ve("Cannot add the file because onBeforeFileAdded returned false.");
            throw this.emit("restriction-failed", e, f), f
        } else typeof d == "object" && d !== null && (c = d);
        try {
            let f = Object.keys(i).map(y => i[y]);
            L(this, It)[It].validate(c, f)
        } catch (f) {
            throw L(this, pt)[pt](f, c), f
        }
        return c
    }
    n(hb, "_checkAndCreateFileStateObject2");

    function cb() {
        this.opts.autoProceed && !this.scheduledAutoProceed && (this.scheduledAutoProceed = setTimeout(() => {
            this.scheduledAutoProceed = null, this.upload().catch(i => {
                i.isRestriction || this.log(i.stack || i.message || i)
            })
        }, 4))
    }
    n(cb, "_startIfAutoProceed2");

    function db() {
        let i = n((t, r, s) => {
            let o = t.message || "Unknown error";
            t.details && (o += ` ${t.details}`), this.setState({
                error: o
            }), r != null && r.id in this.getState().files && this.setFileState(r.id, {
                error: o,
                response: s
            })
        }, "errorHandler");
        this.on("error", i), this.on("upload-error", (t, r, s) => {
            if (i(r, t, s), typeof r == "object" && r.message) {
                let o = new Error(r.message);
                o.details = r.message, r.details && (o.details += ` ${r.details}`), o.message = this.i18n("failedToUpload", {
                    file: t ?.name
                }), L(this, pt)[pt](o)
            } else L(this, pt)[pt](r)
        });
        let e;
        this.on("upload-stalled", (t, r) => {
            let {
                message: s
            } = t, o = r.map(a => a.meta.name).join(", ");
            e || (this.info({
                message: s,
                details: o
            }, "warning", this.opts.infoTimeout), e = setTimeout(() => {
                e = null
            }, this.opts.infoTimeout)), this.log(`${s} ${o}`.trim(), "warning")
        }), this.on("upload", () => {
            this.setState({
                error: null
            })
        }), this.on("upload-started", t => {
            if (t == null || !this.getFile(t.id)) {
                this.log(`Not setting progress for a file that has been removed: ${t?.id}`);
                return
            }
            this.setFileState(t.id, {
                progress: {
                    uploadStarted: Date.now(),
                    uploadComplete: !1,
                    percentage: 0,
                    bytesUploaded: 0,
                    bytesTotal: t.size
                }
            })
        }), this.on("upload-progress", this.calculateProgress), this.on("upload-success", (t, r) => {
            if (t == null || !this.getFile(t.id)) {
                this.log(`Not setting progress for a file that has been removed: ${t?.id}`);
                return
            }
            let s = this.getFile(t.id).progress;
            this.setFileState(t.id, {
                progress: { ...s,
                    postprocess: L(this, ki)[ki].size > 0 ? {
                        mode: "indeterminate"
                    } : null,
                    uploadComplete: !0,
                    percentage: 100,
                    bytesUploaded: s.bytesTotal
                },
                response: r,
                uploadURL: r.uploadURL,
                isPaused: !1
            }), t.size == null && this.setFileState(t.id, {
                size: r.bytesUploaded || s.bytesTotal
            }), this.calculateTotalProgress()
        }), this.on("preprocess-progress", (t, r) => {
            if (t == null || !this.getFile(t.id)) {
                this.log(`Not setting progress for a file that has been removed: ${t?.id}`);
                return
            }
            this.setFileState(t.id, {
                progress: { ...this.getFile(t.id).progress,
                    preprocess: r
                }
            })
        }), this.on("preprocess-complete", t => {
            if (t == null || !this.getFile(t.id)) {
                this.log(`Not setting progress for a file that has been removed: ${t?.id}`);
                return
            }
            let r = { ...this.getState().files
            };
            r[t.id] = { ...r[t.id],
                progress: { ...r[t.id].progress
                }
            }, delete r[t.id].progress.preprocess, this.setState({
                files: r
            })
        }), this.on("postprocess-progress", (t, r) => {
            if (t == null || !this.getFile(t.id)) {
                this.log(`Not setting progress for a file that has been removed: ${t?.id}`);
                return
            }
            this.setFileState(t.id, {
                progress: { ...this.getState().files[t.id].progress,
                    postprocess: r
                }
            })
        }), this.on("postprocess-complete", t => {
            if (t == null || !this.getFile(t.id)) {
                this.log(`Not setting progress for a file that has been removed: ${t?.id}`);
                return
            }
            let r = { ...this.getState().files
            };
            r[t.id] = { ...r[t.id],
                progress: { ...r[t.id].progress
                }
            }, delete r[t.id].progress.postprocess, this.setState({
                files: r
            })
        }), this.on("restored", () => {
            this.calculateTotalProgress()
        }), this.on("dashboard:file-edit-complete", t => {
            t && L(this, ko)[ko](t)
        }), typeof window < "u" && window.addEventListener && (window.addEventListener("online", L(this, Lt)[Lt]), window.addEventListener("offline", L(this, Lt)[Lt]), setTimeout(L(this, Lt)[Lt], 3e3))
    }
    n(db, "_addListeners2");

    function pb(i, e) {
        e === void 0 && (e = {});
        let {
            forceAllowNewUpload: t = !1
        } = e, {
            allowNewUpload: r,
            currentUploads: s
        } = this.getState();
        if (!r && !t) throw new Error("Cannot create a new upload: already uploading.");
        let o = Ot();
        return this.emit("upload", {
            id: o,
            fileIDs: i
        }), this.setState({
            allowNewUpload: this.opts.allowMultipleUploadBatches !== !1 && this.opts.allowMultipleUploads !== !1,
            currentUploads: { ...s,
                [o]: {
                    fileIDs: i,
                    step: 0,
                    result: {}
                }
            }
        }), o
    }
    n(pb, "_createUpload2");

    function fb(i) {
        let {
            currentUploads: e
        } = this.getState();
        return e[i]
    }
    n(fb, "_getUpload2");

    function mb(i) {
        let e = { ...this.getState().currentUploads
        };
        delete e[i], this.setState({
            currentUploads: e
        })
    }
    n(mb, "_removeUpload2");
    async function gb(i) {
        let {
            currentUploads: e
        } = this.getState(), t = e[i], r = t.step || 0, s = [...L(this, Dr)[Dr], ...L(this, Nr)[Nr], ...L(this, ki)[ki]];
        try {
            for (let a = r; a < s.length && t; a++) {
                let l = s[a],
                    h = { ...t,
                        step: a
                    };
                this.setState({
                    currentUploads: { ...e,
                        [i]: h
                    }
                }), await l(h.fileIDs, i), e = this.getState().currentUploads, t = e[i]
            }
        } catch (a) {
            throw L(this, Br)[Br](i), a
        }
        if (t) {
            t.fileIDs.forEach(c => {
                let d = this.getFile(c);
                d && d.progress.postprocess && this.emit("postprocess-complete", d)
            });
            let a = t.fileIDs.map(c => this.getFile(c)),
                l = a.filter(c => !c.error),
                h = a.filter(c => c.error);
            await this.addResultData(i, {
                successful: l,
                failed: h,
                uploadID: i
            }), e = this.getState().currentUploads, t = e[i]
        }
        let o;
        return t && (o = t.result, this.emit("complete", o), L(this, Br)[Br](i)), o == null && this.log(`Not setting result for an upload that has been removed: ${i}`), o
    }
    n(gb, "_runUpload2");
    To.VERSION = ob.version;
    var ka = To;
    var Do, W, xp, yb, Ao, bp, vb, Aa = {},
        Fp = [],
        bb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function Ai(i, e) {
        for (var t in e) i[t] = e[t];
        return i
    }
    n(Ai, "s");

    function Ep(i) {
        var e = i.parentNode;
        e && e.removeChild(i)
    }
    n(Ep, "a");

    function u(i, e, t) {
        var r, s, o, a = {};
        for (o in e) o == "key" ? r = e[o] : o == "ref" ? s = e[o] : a[o] = e[o];
        if (arguments.length > 2 && (a.children = arguments.length > 3 ? Do.call(arguments, 2) : t), typeof i == "function" && i.defaultProps != null)
            for (o in i.defaultProps) a[o] === void 0 && (a[o] = i.defaultProps[o]);
        return Uo(i, a, r, s, null)
    }
    n(u, "h");

    function Uo(i, e, t, r, s) {
        var o = {
            type: i,
            props: e,
            key: t,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: s ?? ++xp
        };
        return s == null && W.vnode != null && W.vnode(o), o
    }
    n(Uo, "v");

    function Op() {
        return {
            current: null
        }
    }
    n(Op, "y");

    function Rt(i) {
        return i.children
    }
    n(Rt, "p");

    function ie(i, e) {
        this.props = i, this.context = e
    }
    n(ie, "d");

    function Ms(i, e) {
        if (e == null) return i.__ ? Ms(i.__, i.__.__k.indexOf(i) + 1) : null;
        for (var t; e < i.__k.length; e++)
            if ((t = i.__k[e]) != null && t.__e != null) return t.__e;
        return typeof i.type == "function" ? Ms(i) : null
    }
    n(Ms, "_");

    function Rp(i) {
        var e, t;
        if ((i = i.__) != null && i.__c != null) {
            for (i.__e = i.__c.base = null, e = 0; e < i.__k.length; e++)
                if ((t = i.__k[e]) != null && t.__e != null) {
                    i.__e = i.__c.base = t.__e;
                    break
                }
            return Rp(i)
        }
    }
    n(Rp, "k");

    function wp(i) {
        (!i.__d && (i.__d = !0) && Ao.push(i) && !Ua.__r++ || bp !== W.debounceRendering) && ((bp = W.debounceRendering) || setTimeout)(Ua)
    }
    n(wp, "b");

    function Ua() {
        for (var i; Ua.__r = Ao.length;) i = Ao.sort(function(e, t) {
            return e.__v.__b - t.__v.__b
        }), Ao = [], i.some(function(e) {
            var t, r, s, o, a, l;
            e.__d && (a = (o = (t = e).__v).__e, (l = t.__P) && (r = [], (s = Ai({}, o)).__v = o.__v + 1, bu(l, o, s, t.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a ?? Ms(o), o.__h), Ap(r, o), o.__e != a && Rp(o)))
        })
    }
    n(Ua, "g");

    function Cp(i, e, t, r, s, o, a, l, h, c) {
        var d, f, y, w, S, R, x, F = r && r.__k || Fp,
            N = F.length;
        for (t.__k = [], d = 0; d < e.length; d++)
            if ((w = t.__k[d] = (w = e[d]) == null || typeof w == "boolean" ? null : typeof w == "string" || typeof w == "number" || typeof w == "bigint" ? Uo(null, w, null, null, w) : Array.isArray(w) ? Uo(Rt, {
                children: w
            }, null, null, null) : w.__b > 0 ? Uo(w.type, w.props, w.key, null, w.__v) : w) != null) {
                if (w.__ = t, w.__b = t.__b + 1, (y = F[d]) === null || y && w.key == y.key && w.type === y.type) F[d] = void 0;
                else
                    for (f = 0; f < N; f++) {
                        if ((y = F[f]) && w.key == y.key && w.type === y.type) {
                            F[f] = void 0;
                            break
                        }
                        y = null
                    }
                bu(i, w, y = y || Aa, s, o, a, l, h, c), S = w.__e, (f = w.ref) && y.ref != f && (x || (x = []), y.ref && x.push(y.ref, null, w), x.push(f, w.__c || S, w)), S != null ? (R == null && (R = S), typeof w.type == "function" && w.__k === y.__k ? w.__d = h = Tp(w, h, i) : h = kp(i, w, y, F, S, h), typeof t.type == "function" && (t.__d = h)) : h && y.__e == h && h.parentNode != i && (h = Ms(y))
            }
        for (t.__e = R, d = N; d--;) F[d] != null && (typeof t.type == "function" && F[d].__e != null && F[d].__e == t.__d && (t.__d = Ms(r, d + 1)), Dp(F[d], F[d]));
        if (x)
            for (d = 0; d < x.length; d++) Up(x[d], x[++d], x[++d])
    }
    n(Cp, "w");

    function Tp(i, e, t) {
        for (var r, s = i.__k, o = 0; s && o < s.length; o++)(r = s[o]) && (r.__ = i, e = typeof r.type == "function" ? Tp(r, e, t) : kp(t, r, r, s, r.__e, e));
        return e
    }
    n(Tp, "m");

    function Ct(i, e) {
        return e = e || [], i == null || typeof i == "boolean" || (Array.isArray(i) ? i.some(function(t) {
            Ct(t, e)
        }) : e.push(i)), e
    }
    n(Ct, "x");

    function kp(i, e, t, r, s, o) {
        var a, l, h;
        if (e.__d !== void 0) a = e.__d, e.__d = void 0;
        else if (t == null || s != o || s.parentNode == null) e: if (o == null || o.parentNode !== i) i.appendChild(s), a = null;
        else {
            for (l = o, h = 0;
                 (l = l.nextSibling) && h < r.length; h += 2)
                if (l == s) break e;
            i.insertBefore(s, o), a = o
        }
        return a !== void 0 ? a : s.nextSibling
    }
    n(kp, "A");

    function wb(i, e, t, r, s) {
        var o;
        for (o in t) o === "children" || o === "key" || o in e || Da(i, o, null, t[o], r);
        for (o in e) s && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || Da(i, o, e[o], t[o], r)
    }
    n(wb, "C");

    function Sp(i, e, t) {
        e[0] === "-" ? i.setProperty(e, t) : i[e] = t == null ? "" : typeof t != "number" || bb.test(e) ? t : t + "px"
    }
    n(Sp, "$");

    function Da(i, e, t, r, s) {
        var o;
        e: if (e === "style")
            if (typeof t == "string") i.style.cssText = t;
            else {
                if (typeof r == "string" && (i.style.cssText = r = ""), r)
                    for (e in r) t && e in t || Sp(i.style, e, "");
                if (t)
                    for (e in t) r && t[e] === r[e] || Sp(i.style, e, t[e])
            }
        else if (e[0] === "o" && e[1] === "n") o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in i ? e.toLowerCase().slice(2) : e.slice(2), i.l || (i.l = {}), i.l[e + o] = t, t ? r || i.addEventListener(e, o ? Pp : _p, o) : i.removeEventListener(e, o ? Pp : _p, o);
        else if (e !== "dangerouslySetInnerHTML") {
            if (s) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in i) try {
                i[e] = t ?? "";
                break e
            } catch {}
            typeof t == "function" || (t != null && (t !== !1 || e[0] === "a" && e[1] === "r") ? i.setAttribute(e, t) : i.removeAttribute(e))
        }
    }
    n(Da, "H");

    function _p(i) {
        this.l[i.type + !1](W.event ? W.event(i) : i)
    }
    n(_p, "I");

    function Pp(i) {
        this.l[i.type + !0](W.event ? W.event(i) : i)
    }
    n(Pp, "T");

    function bu(i, e, t, r, s, o, a, l, h) {
        var c, d, f, y, w, S, R, x, F, N, H, q, K, k = e.type;
        if (e.constructor !== void 0) return null;
        t.__h != null && (h = t.__h, l = e.__e = t.__e, e.__h = null, o = [l]), (c = W.__b) && c(e);
        try {
            e: if (typeof k == "function") {
                if (x = e.props, F = (c = k.contextType) && r[c.__c], N = c ? F ? F.props.value : c.__ : r, t.__c ? R = (d = e.__c = t.__c).__ = d.__E : ("prototype" in k && k.prototype.render ? e.__c = d = new k(x, N) : (e.__c = d = new ie(x, N), d.constructor = k, d.render = _b), F && F.sub(d), d.props = x, d.state || (d.state = {}), d.context = N, d.__n = r, f = d.__d = !0, d.__h = []), d.__s == null && (d.__s = d.state), k.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = Ai({}, d.__s)), Ai(d.__s, k.getDerivedStateFromProps(x, d.__s))), y = d.props, w = d.state, f) k.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), d.componentDidMount != null && d.__h.push(d.componentDidMount);
                else {
                    if (k.getDerivedStateFromProps == null && x !== y && d.componentWillReceiveProps != null && d.componentWillReceiveProps(x, N), !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(x, d.__s, N) === !1 || e.__v === t.__v) {
                        d.props = x, d.state = d.__s, e.__v !== t.__v && (d.__d = !1), d.__v = e, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(B) {
                            B && (B.__ = e)
                        }), d.__h.length && a.push(d);
                        break e
                    }
                    d.componentWillUpdate != null && d.componentWillUpdate(x, d.__s, N), d.componentDidUpdate != null && d.__h.push(function() {
                        d.componentDidUpdate(y, w, S)
                    })
                }
                if (d.context = N, d.props = x, d.__v = e, d.__P = i, H = W.__r, q = 0, "prototype" in k && k.prototype.render) d.state = d.__s, d.__d = !1, H && H(e), c = d.render(d.props, d.state, d.context);
                else
                    do d.__d = !1, H && H(e), c = d.render(d.props, d.state, d.context), d.state = d.__s; while (d.__d && ++q < 25);
                d.state = d.__s, d.getChildContext != null && (r = Ai(Ai({}, r), d.getChildContext())), f || d.getSnapshotBeforeUpdate == null || (S = d.getSnapshotBeforeUpdate(y, w)), K = c != null && c.type === Rt && c.key == null ? c.props.children : c, Cp(i, Array.isArray(K) ? K : [K], e, t, r, s, o, a, l, h), d.base = e.__e, e.__h = null, d.__h.length && a.push(d), R && (d.__E = d.__ = null), d.__e = !1
            } else o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = Sb(t.__e, e, t, r, s, o, a, h);
            (c = W.diffed) && c(e)
        }
        catch (B) {
            e.__v = null, (h || o != null) && (e.__e = l, e.__h = !!h, o[o.indexOf(l)] = null), W.__e(B, e, t)
        }
    }
    n(bu, "j");

    function Ap(i, e) {
        W.__c && W.__c(e, i), i.some(function(t) {
            try {
                i = t.__h, t.__h = [], i.some(function(r) {
                    r.call(t)
                })
            } catch (r) {
                W.__e(r, t.__v)
            }
        })
    }
    n(Ap, "z");

    function Sb(i, e, t, r, s, o, a, l) {
        var h, c, d, f = t.props,
            y = e.props,
            w = e.type,
            S = 0;
        if (w === "svg" && (s = !0), o != null) {
            for (; S < o.length; S++)
                if ((h = o[S]) && "setAttribute" in h == !!w && (w ? h.localName === w : h.nodeType === 3)) {
                    i = h, o[S] = null;
                    break
                }
        }
        if (i == null) {
            if (w === null) return document.createTextNode(y);
            i = s ? document.createElementNS("http://www.w3.org/2000/svg", w) : document.createElement(w, y.is && y), o = null, l = !1
        }
        if (w === null) f === y || l && i.data === y || (i.data = y);
        else {
            if (o = o && Do.call(i.childNodes), c = (f = t.props || Aa).dangerouslySetInnerHTML, d = y.dangerouslySetInnerHTML, !l) {
                if (o != null)
                    for (f = {}, S = 0; S < i.attributes.length; S++) f[i.attributes[S].name] = i.attributes[S].value;
                (d || c) && (d && (c && d.__html == c.__html || d.__html === i.innerHTML) || (i.innerHTML = d && d.__html || ""))
            }
            if (wb(i, y, f, s, l), d) e.__k = [];
            else if (S = e.props.children, Cp(i, Array.isArray(S) ? S : [S], e, t, r, s && w !== "foreignObject", o, a, o ? o[0] : t.__k && Ms(t, 0), l), o != null)
                for (S = o.length; S--;) o[S] != null && Ep(o[S]);
            l || ("value" in y && (S = y.value) !== void 0 && (S !== i.value || w === "progress" && !S || w === "option" && S !== f.value) && Da(i, "value", S, f.value, !1), "checked" in y && (S = y.checked) !== void 0 && S !== i.checked && Da(i, "checked", S, f.checked, !1))
        }
        return i
    }
    n(Sb, "L");

    function Up(i, e, t) {
        try {
            typeof i == "function" ? i(e) : i.current = e
        } catch (r) {
            W.__e(r, t)
        }
    }
    n(Up, "M");

    function Dp(i, e, t) {
        var r, s;
        if (W.unmount && W.unmount(i), (r = i.ref) && (r.current && r.current !== i.__e || Up(r, null, e)), (r = i.__c) != null) {
            if (r.componentWillUnmount) try {
                r.componentWillUnmount()
            } catch (o) {
                W.__e(o, e)
            }
            r.base = r.__P = null
        }
        if (r = i.__k)
            for (s = 0; s < r.length; s++) r[s] && Dp(r[s], e, typeof i.type != "function");
        t || i.__e == null || Ep(i.__e), i.__e = i.__d = void 0
    }
    n(Dp, "N");

    function _b(i, e, t) {
        return this.constructor(i, t)
    }
    n(_b, "O");

    function wu(i, e, t) {
        var r, s, o;
        W.__ && W.__(i, e), s = (r = typeof t == "function") ? null : t && t.__k || e.__k, o = [], bu(e, i = (!r && t || e).__k = u(Rt, null, [i]), s || Aa, Aa, e.ownerSVGElement !== void 0, !r && t ? [t] : s ? null : e.firstChild ? Do.call(e.childNodes) : null, o, !r && t ? t : s ? s.__e : e.firstChild, r), Ap(o, i)
    }
    n(wu, "P");

    function Na(i, e, t) {
        var r, s, o, a = Ai({}, i.props);
        for (o in e) o == "key" ? r = e[o] : o == "ref" ? s = e[o] : a[o] = e[o];
        return arguments.length > 2 && (a.children = arguments.length > 3 ? Do.call(arguments, 2) : t), Uo(i.type, a, r || i.key, s || i.ref, null)
    }
    n(Na, "q");
    Do = Fp.slice, W = {
        __e: function(i, e, t, r) {
            for (var s, o, a; e = e.__;)
                if ((s = e.__c) && !s.__) try {
                    if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(i)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(i, r || {}), a = s.__d), a) return s.__E = s
                } catch (l) {
                    i = l
                }
            throw i
        }
    }, xp = 0, yb = n(function(i) {
        return i != null && i.constructor === void 0
    }, "i"), ie.prototype.setState = function(i, e) {
        var t;
        t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ai({}, this.state), typeof i == "function" && (i = i(Ai({}, t), this.props)), i && Ai(t, i), i != null && this.__v && (e && this.__h.push(e), wp(this))
    }, ie.prototype.forceUpdate = function(i) {
        this.__v && (this.__e = !0, i && this.__h.push(i), wp(this))
    }, ie.prototype.render = Rt, Ao = [], Ua.__r = 0, vb = 0;

    function No(i) {
        return i ?.nodeType === Node.ELEMENT_NODE
    }
    n(No, "isDOMElement");

    function Bo(i, e) {
        return e === void 0 && (e = document), typeof i == "string" ? e.querySelector(i) : No(i) ? i : null
    }
    n(Bo, "findDOMElement");

    function Pb(i) {
        for (var e; i && !i.dir;) i = i.parentNode;
        return (e = i) == null ? void 0 : e.dir
    }
    n(Pb, "getTextDirection");
    var Ba = Pb;
    var ae = class {
        constructor(e, t) {
            t === void 0 && (t = {}), this.uppy = e, this.opts = t
        }
        getPluginState() {
            let {
                plugins: e
            } = this.uppy.getState();
            return e[this.id] || {}
        }
        setPluginState(e) {
            let {
                plugins: t
            } = this.uppy.getState();
            this.uppy.setState({
                plugins: { ...t,
                    [this.id]: { ...t[this.id],
                        ...e
                    }
                }
            })
        }
        setOptions(e) {
            this.opts = { ...this.opts,
                ...e
            }, this.setPluginState(), this.i18nInit()
        }
        i18nInit() {
            let e = new ar([this.defaultLocale, this.uppy.locale, this.opts.locale]);
            this.i18n = e.translate.bind(e), this.i18nArray = e.translateArray.bind(e), this.setPluginState()
        }
        addTarget() {
            throw new Error("Extend the addTarget method to add your plugin to another plugin's target")
        }
        install() {}
        uninstall() {}
        render() {
            throw new Error("Extend the render method to add your plugin to a DOM element")
        }
        update() {}
        afterUpdate() {}
    };
    n(ae, "BasePlugin");

    function Np(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(Np, "_classPrivateFieldLooseBase");
    var xb = 0;

    function Fb(i) {
        return "__private_" + xb++ + "_" + i
    }
    n(Fb, "_classPrivateFieldLooseKey");

    function Eb(i) {
        let e = null,
            t = null;
        return function() {
            for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++) s[o] = arguments[o];
            return t = s, e || (e = Promise.resolve().then(() => (e = null, i(...t)))), e
        }
    }
    n(Eb, "debounce");
    var Io = Fb("updateUI"),
        zs = class extends ae {
            constructor() {
                super(...arguments), Object.defineProperty(this, Io, {
                    writable: !0,
                    value: void 0
                })
            }
            getTargetPlugin(e) {
                let t;
                if (typeof e == "object" && e instanceof zs) t = e;
                else if (typeof e == "function") {
                    let r = e;
                    this.uppy.iteratePlugins(s => {
                        s instanceof r && (t = s)
                    })
                }
                return t
            }
            mount(e, t) {
                let r = t.id,
                    s = Bo(e);
                if (s) {
                    this.isTargetDOMEl = !0;
                    let l = document.createElement("div");
                    return l.classList.add("uppy-Root"), Np(this, Io)[Io] = Eb(h => {
                        !this.uppy.getPlugin(this.id) || (wu(this.render(h), l), this.afterUpdate())
                    }), this.uppy.log(`Installing ${r} to a DOM element '${e}'`), this.opts.replaceTargetContent && (s.innerHTML = ""), wu(this.render(this.uppy.getState()), l), this.el = l, s.appendChild(l), l.dir = this.opts.direction || Ba(l) || "ltr", this.onMount(), this.el
                }
                let o = this.getTargetPlugin(e);
                if (o) return this.uppy.log(`Installing ${r} to ${o.id}`), this.parent = o, this.el = o.addTarget(t), this.onMount(), this.el;
                this.uppy.log(`Not installing ${r}`);
                let a = `Invalid target option given to ${r}.`;
                throw typeof e == "function" ? a += " The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly." : a += "If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.", new Error(a)
            }
            update(e) {
                if (this.el != null) {
                    var t, r;
                    (t = (r = Np(this, Io))[Io]) == null || t.call(r, e)
                }
            }
            unmount() {
                if (this.isTargetDOMEl) {
                    var e;
                    (e = this.el) == null || e.remove()
                }
                this.onUnmount()
            }
            onMount() {}
            onUnmount() {}
        };
    n(zs, "UIPlugin");
    var V = zs;
    var xu = {};
    yo(xu, {
        Provider: () => Y,
        RequestClient: () => le,
        SearchProvider: () => lr,
        Socket: () => ot
    });
    var Ia = class extends Error {
        constructor(e, t) {
            t === void 0 && (t = null), super("This looks like a network error, the endpoint might be blocked by an internet provider or a firewall."), this.cause = e, this.isNetworkError = !0, this.request = t
        }
    };
    n(Ia, "NetworkError");
    var Mt = Ia;

    function Ir() {
        return fetch(...arguments).catch(i => {
            throw i.name === "AbortError" ? i : new Mt(i)
        })
    }
    n(Ir, "fetchWithNetworkError");
    var La = class extends Error {
        constructor(e, t) {
            t === void 0 && (t = {}), super(e), this.cause = t.cause, this.cause && qe(this.cause, "isNetworkError") && (this.isNetworkError = this.cause.isNetworkError)
        }
    };
    n(La, "ErrorWithCause");
    var Zt = La;
    var Ma = class extends Error {
        constructor() {
            super("Authorization required"), this.name = "AuthError", this.isAuthError = !0
        }
    };
    n(Ma, "AuthError");
    var Bp = Ma;
    var Ip;

    function ei(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(ei, "_classPrivateFieldLooseBase");
    var Ob = 0;

    function Su(i) {
        return "__private_" + Ob++ + "_" + i
    }
    n(Su, "_classPrivateFieldLooseKey");
    var Rb = {
        version: "3.1.1"
    };

    function Cb(i) {
        return i.replace(/\/$/, "")
    }
    n(Cb, "stripSlash");
    async function Tb(i) {
        if (i.status === 401) throw new Bp;
        let e = i.json();
        if (i.ok) return e;
        let t = `Failed request with status: ${i.status}. ${i.statusText}`;
        try {
            let r = await e;
            t = r.message ? `${t} message: ${r.message}` : t, t = r.requestId ? `${t} request-Id: ${r.requestId}` : t
        } catch {}
        throw new Error(t)
    }
    n(Tb, "handleJSONResponse");
    var Lo = new Map,
        Ui = Su("companionHeaders"),
        Mr = Su("getUrl"),
        Lr = Su("request");
    Ip = Symbol.for("uppy test: getCompanionHeaders");
    var le = class {
        constructor(e, t) {
            Object.defineProperty(this, Lr, {
                value: Ab
            }), Object.defineProperty(this, Mr, {
                value: kb
            }), Object.defineProperty(this, Ui, {
                writable: !0,
                value: void 0
            }), this.uppy = e, this.opts = t, this.onReceiveResponse = this.onReceiveResponse.bind(this), ei(this, Ui)[Ui] = t ?.companionHeaders
        }
        setCompanionHeaders(e) {
            ei(this, Ui)[Ui] = e
        }[Ip]() {
            return ei(this, Ui)[Ui]
        }
        get hostname() {
            let {
                companion: e
            } = this.uppy.getState(), t = this.opts.companionUrl;
            return Cb(e && e[t] ? e[t] : t)
        }
        async headers() {
            return { ...{
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Uppy-Versions": `@uppy/companion-client=${le.VERSION}`
                },
                ...ei(this, Ui)[Ui]
            }
        }
        onReceiveResponse(e) {
            let {
                headers: t
            } = e, s = this.uppy.getState().companion || {}, o = this.opts.companionUrl;
            t.has("i-am") && t.get("i-am") !== s[o] && this.uppy.setState({
                companion: { ...s,
                    [o]: t.get("i-am")
                }
            })
        }
        async preflight(e) {
            let t = Lo.get(this.hostname);
            if (t != null) return t;
            let r = ["accept", "content-type", "uppy-auth-token"],
                s = (async () => {
                    try {
                        let a = (await fetch(ei(this, Mr)[Mr](e), {
                            method: "OPTIONS"
                        })).headers.get("access-control-allow-headers");
                        if (a == null || a === "*") return Lo.set(this.hostname, r), r;
                        this.uppy.log(`[CompanionClient] adding allowed preflight headers to companion cache: ${this.hostname} ${a}`);
                        let l = a.split(",").map(h => h.trim().toLowerCase());
                        return Lo.set(this.hostname, l), l
                    } catch (o) {
                        return this.uppy.log(`[CompanionClient] unable to make preflight request ${o}`, "warning"), Lo.delete(this.hostname), r
                    }
                })();
            return Lo.set(this.hostname, s), s
        }
        async preflightAndHeaders(e) {
            let [t, r] = await Promise.all([this.preflight(e), this.headers()]);
            return Object.fromEntries(Object.entries(r).filter(s => {
                let [o] = s;
                return t.includes(o.toLowerCase()) ? !0 : (this.uppy.log(`[CompanionClient] excluding disallowed header ${o}`), !1)
            }))
        }
        async get(e, t) {
            return t === void 0 && (t = void 0), typeof t == "boolean" && (t = {
                skipPostResponse: t
            }), ei(this, Lr)[Lr]({ ...t,
                path: e
            })
        }
        async post(e, t, r) {
            return r === void 0 && (r = void 0), typeof r == "boolean" && (r = {
                skipPostResponse: r
            }), ei(this, Lr)[Lr]({ ...r,
                path: e,
                method: "POST",
                data: t
            })
        }
        async delete(e, t, r) {
            return t === void 0 && (t = void 0), typeof r == "boolean" && (r = {
                skipPostResponse: r
            }), ei(this, Lr)[Lr]({ ...r,
                path: e,
                method: "DELETE",
                data: t
            })
        }
    };
    n(le, "RequestClient");

    function kb(i) {
        return /^(https?:|)\/\//.test(i) ? i : `${this.hostname}/${i}`
    }
    n(kb, "_getUrl2");
    async function Ab(i) {
        let {
            path: e,
            method: t = "GET",
            data: r,
            skipPostResponse: s,
            signal: o
        } = i;
        try {
            let a = await this.preflightAndHeaders(e),
                l = await Ir(ei(this, Mr)[Mr](e), {
                    method: t,
                    signal: o,
                    headers: a,
                    credentials: this.opts.companionCookiesRule || "same-origin",
                    body: r ? JSON.stringify(r) : null
                });
            return s || this.onReceiveResponse(l), Tb(l)
        } catch (a) {
            throw a != null && a.isAuthError ? a : new Zt(`Could not ${t} ${ei(this,Mr)[Mr](e)}`, {
                cause: a
            })
        }
    }
    n(Ab, "_request2");
    le.VERSION = Rb.version;
    var _u = {};
    yo(_u, {
        getItem: () => Db,
        removeItem: () => Nb,
        setItem: () => Ub
    });

    function Ub(i, e) {
        return new Promise(t => {
            localStorage.setItem(i, e), t()
        })
    }
    n(Ub, "setItem");

    function Db(i) {
        return Promise.resolve(localStorage.getItem(i))
    }
    n(Db, "getItem");

    function Nb(i) {
        return new Promise(e => {
            localStorage.removeItem(i), e()
        })
    }
    n(Nb, "removeItem");
    var Bb = n(i => i.split("-").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), "getName"),
        Y = class extends le {
            constructor(e, t) {
                super(e, t), this.provider = t.provider, this.id = this.provider, this.name = this.opts.name || Bb(this.id), this.pluginId = this.opts.pluginId, this.tokenKey = `companion-${this.pluginId}-auth-token`, this.companionKeysParams = this.opts.companionKeysParams, this.preAuthToken = null
            }
            async headers() {
                let [e, t] = await Promise.all([super.headers(), this.getAuthToken()]), r = {};
                return t && (r["uppy-auth-token"] = t), this.companionKeysParams && (r["uppy-credentials-params"] = btoa(JSON.stringify({
                    params: this.companionKeysParams
                }))), { ...e,
                    ...r
                }
            }
            onReceiveResponse(e) {
                super.onReceiveResponse(e);
                let t = this.uppy.getPlugin(this.pluginId),
                    s = t.getPluginState().authenticated ? e.status !== 401 : e.status < 400;
                return t.setPluginState({
                    authenticated: s
                }), e
            }
            setAuthToken(e) {
                return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, e)
            }
            getAuthToken() {
                return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey)
            }
            async ensurePreAuth() {
                if (this.companionKeysParams && !this.preAuthToken && (await this.fetchPreAuthToken(), !this.preAuthToken)) throw new Error("Could not load authentication data required for third-party login. Please try again later.")
            }
            authUrl(e) {
                e === void 0 && (e = {});
                let t = new URLSearchParams(e);
                return this.preAuthToken && t.set("uppyPreAuthToken", this.preAuthToken), `${this.hostname}/${this.id}/connect?${t}`
            }
            fileUrl(e) {
                return `${this.hostname}/${this.id}/get/${e}`
            }
            async fetchPreAuthToken() {
                if (!!this.companionKeysParams) try {
                    let e = await this.post(`${this.id}/preauth/`, {
                        params: this.companionKeysParams
                    });
                    this.preAuthToken = e.token
                } catch (e) {
                    this.uppy.log(`[CompanionClient] unable to fetch preAuthToken ${e}`, "warning")
                }
            }
            list(e) {
                return this.get(`${this.id}/list/${e||""}`)
            }
            logout() {
                return this.get(`${this.id}/logout`).then(e => Promise.all([e, this.uppy.getPlugin(this.pluginId).storage.removeItem(this.tokenKey)])).then(e => {
                    let [t] = e;
                    return t
                })
            }
            static initPlugin(e, t, r) {
                if (e.type = "acquirer", e.files = [], r && (e.opts = { ...r,
                    ...t
                }), t.serverUrl || t.serverPattern) throw new Error("`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`");
                if (t.companionAllowedHosts) {
                    let s = t.companionAllowedHosts;
                    if (typeof s != "string" && !Array.isArray(s) && !(s instanceof RegExp)) throw new TypeError(`${e.id}: the option "companionAllowedHosts" must be one of string, Array, RegExp`);
                    e.opts.companionAllowedHosts = s
                } else /^(?!https?:\/\/).*$/i.test(t.companionUrl) ? e.opts.companionAllowedHosts = `https://${t.companionUrl.replace(/^\/\//,"")}` : e.opts.companionAllowedHosts = new URL(t.companionUrl).origin;
                e.storage = e.opts.storage || _u
            }
        };
    n(Y, "Provider");
    var Ib = n(i => i.split("-").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), "getName"),
        lr = class extends le {
            constructor(e, t) {
                super(e, t), this.provider = t.provider, this.id = this.provider, this.name = this.opts.name || Ib(this.id), this.pluginId = this.opts.pluginId
            }
            fileUrl(e) {
                return `${this.hostname}/search/${this.id}/get/${e}`
            }
            search(e, t) {
                return this.get(`search/${this.id}/list?q=${encodeURIComponent(e)}${t?`&${t}`:""}`)
            }
        };
    n(lr, "SearchProvider");
    var zp = oe(hu(), 1);
    var Lp, Mp;

    function we(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(we, "_classPrivateFieldLooseBase");
    var Lb = 0;

    function Mo(i) {
        return "__private_" + Lb++ + "_" + i
    }
    n(Mo, "_classPrivateFieldLooseKey");
    var Di = Mo("queued"),
        zr = Mo("emitter"),
        zt = Mo("isOpen"),
        We = Mo("socket"),
        Pu = Mo("handleMessage");
    Lp = Symbol.for("uppy test: getSocket");
    Mp = Symbol.for("uppy test: getQueued");
    var ot = class {
        constructor(e) {
            Object.defineProperty(this, Di, {
                writable: !0,
                value: []
            }), Object.defineProperty(this, zr, {
                writable: !0,
                value: (0, zp.default)()
            }), Object.defineProperty(this, zt, {
                writable: !0,
                value: !1
            }), Object.defineProperty(this, We, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, Pu, {
                writable: !0,
                value: t => {
                    try {
                        let r = JSON.parse(t.data);
                        this.emit(r.action, r.payload)
                    } catch (r) {
                        console.log(r)
                    }
                }
            }), this.opts = e, (!e || e.autoOpen !== !1) && this.open()
        }
        get isOpen() {
            return we(this, zt)[zt]
        }[Lp]() {
            return we(this, We)[We]
        }[Mp]() {
            return we(this, Di)[Di]
        }
        open() {
            we(this, We)[We] = new WebSocket(this.opts.target), we(this, We)[We].onopen = () => {
                for (we(this, zt)[zt] = !0; we(this, Di)[Di].length > 0 && we(this, zt)[zt];) {
                    let e = we(this, Di)[Di].shift();
                    this.send(e.action, e.payload)
                }
            }, we(this, We)[We].onclose = () => {
                we(this, zt)[zt] = !1
            }, we(this, We)[We].onmessage = we(this, Pu)[Pu]
        }
        close() {
            var e;
            (e = we(this, We)[We]) == null || e.close()
        }
        send(e, t) {
            if (!we(this, zt)[zt]) {
                we(this, Di)[Di].push({
                    action: e,
                    payload: t
                });
                return
            }
            we(this, We)[We].send(JSON.stringify({
                action: e,
                payload: t
            }))
        }
        on(e, t) {
            we(this, zr)[zr].on(e, t)
        }
        emit(e, t) {
            we(this, zr)[zr].emit(e, t)
        }
        once(e, t) {
            we(this, zr)[zr].once(e, t)
        }
    };
    n(ot, "UppySocket");
    var Ru = {};
    yo(Ru, {
        ProviderViews: () => pe,
        SearchProviderViews: () => ti
    });

    function Mb() {
        return u("svg", {
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            xmlns: "http://www.w3.org/2000/svg"
        }, u("g", {
            fill: "none",
            "fill-rule": "evenodd"
        }, u("circle", {
            fill: "#FFF",
            cx: "13",
            cy: "13",
            r: "13"
        }), u("path", {
            d: "M21.64 13.205c0-.639-.057-1.252-.164-1.841H13v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z",
            fill: "#4285F4",
            "fill-rule": "nonzero"
        }), u("path", {
            d: "M13 22c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H4.957v2.332A8.997 8.997 0 0013 22z",
            fill: "#34A853",
            "fill-rule": "nonzero"
        }), u("path", {
            d: "M7.964 14.71A5.41 5.41 0 017.682 13c0-.593.102-1.17.282-1.71V8.958H4.957A8.996 8.996 0 004 13c0 1.452.348 2.827.957 4.042l3.007-2.332z",
            fill: "#FBBC05",
            "fill-rule": "nonzero"
        }), u("path", {
            d: "M13 7.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C17.463 4.891 15.426 4 13 4a8.997 8.997 0 00-8.043 4.958l3.007 2.332C8.672 9.163 10.656 7.58 13 7.58z",
            fill: "#EA4335",
            "fill-rule": "nonzero"
        }), u("path", {
            d: "M4 4h18v18H4z"
        })))
    }
    n(Mb, "GoogleIcon");

    function zb(i) {
        let {
            pluginName: e,
            pluginIcon: t,
            i18nArray: r,
            handleAuth: s
        } = i, o = e === "Google Drive", a = u("span", {
            className: "uppy-Provider-authTitleName"
        }, e, u("br", null));
        return u("div", {
            className: "uppy-Provider-auth"
        }, u("div", {
            className: "uppy-Provider-authIcon"
        }, t()), u("div", {
            className: "uppy-Provider-authTitle"
        }, r("authenticateWithTitle", {
            pluginName: a
        })), o ? u("button", {
            type: "button",
            className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Provider-authBtn uppy-Provider-btn-google",
            onClick: s,
            "data-uppy-super-focusable": !0
        }, u(Mb, null), r("signInWithGoogle")) : u("button", {
            type: "button",
            className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Provider-authBtn",
            onClick: s,
            "data-uppy-super-focusable": !0
        }, r("authenticateWith", {
            pluginName: e
        })))
    }
    n(zb, "AuthView");
    var jp = zb;
    var Hp = n(i => {
        let {
            i18n: e,
            logout: t,
            username: r
        } = i;
        return [u("span", {
            className: "uppy-ProviderBrowser-user",
            key: "username"
        }, r), u("button", {
            type: "button",
            onClick: t,
            className: "uppy-u-reset uppy-c-btn uppy-ProviderBrowser-userLogout",
            key: "logout"
        }, e("logOut"))]
    }, "default");
    var jb = n(i => {
            let {
                getFolder: e,
                title: t,
                isLast: r
            } = i;
            return u(Rt, null, u("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn",
                onClick: e
            }, t), r ? "" : " / ")
        }, "Breadcrumb"),
        $p = n(i => {
            let {
                getFolder: e,
                title: t,
                breadcrumbsIcon: r,
                directories: s
            } = i;
            return u("div", {
                className: "uppy-Provider-breadcrumbs"
            }, u("div", {
                className: "uppy-Provider-breadcrumbsIcon"
            }, r), s.map((o, a) => u(jb, {
                key: o.id,
                getFolder: () => e(o.id),
                title: a === 0 ? t : o.title,
                isLast: a + 1 === s.length
            })))
        }, "default");
    var qp = n(i => {
        let e = [];
        return i.showBreadcrumbs && e.push($p({
            getFolder: i.getFolder,
            directories: i.directories,
            breadcrumbsIcon: i.pluginIcon && i.pluginIcon(),
            title: i.title
        })), e.push(Hp({
            logout: i.logout,
            username: i.username,
            i18n: i.i18n
        })), e
    }, "default");
    var Ou = oe(Tt(), 1);

    function zo(i) {
        return { ...i,
            type: i.mimeType,
            extension: i.name ? Oi(i.name).extension : null
        }
    }
    n(zo, "remoteFileObjToLocal");
    var js = class extends ie {
        constructor(e) {
            super(e), this.preventEnterPress = this.preventEnterPress.bind(this)
        }
        preventEnterPress(e) {
            e.keyCode === 13 && (e.stopPropagation(), e.preventDefault())
        }
        render() {
            let {
                i18n: e,
                filterInput: t,
                filterQuery: r
            } = this.props;
            return u("div", {
                className: "uppy-ProviderBrowser-filter"
            }, u("input", {
                className: "uppy-u-reset uppy-ProviderBrowser-filterInput",
                type: "text",
                placeholder: e("filter"),
                "aria-label": e("filter"),
                onKeyUp: this.preventEnterPress,
                onKeyDown: this.preventEnterPress,
                onKeyPress: this.preventEnterPress,
                onInput: s => r(s),
                value: t
            }), u("svg", {
                "aria-hidden": "true",
                focusable: "false",
                className: "uppy-c-icon uppy-ProviderBrowser-filterIcon",
                width: "12",
                height: "12",
                viewBox: "0 0 12 12"
            }, u("path", {
                d: "M8.638 7.99l3.172 3.172a.492.492 0 1 1-.697.697L7.91 8.656a4.977 4.977 0 0 1-2.983.983C2.206 9.639 0 7.481 0 4.819 0 2.158 2.206 0 4.927 0c2.721 0 4.927 2.158 4.927 4.82a4.74 4.74 0 0 1-1.216 3.17zm-3.71.685c2.176 0 3.94-1.726 3.94-3.856 0-2.129-1.764-3.855-3.94-3.855C2.75.964.984 2.69.984 4.819c0 2.13 1.765 3.856 3.942 3.856z"
            })), t && u("button", {
                className: "uppy-u-reset uppy-ProviderBrowser-filterClose",
                type: "button",
                "aria-label": e("resetFilter"),
                title: e("resetFilter"),
                onClick: r
            }, u("svg", {
                "aria-hidden": "true",
                focusable: "false",
                className: "uppy-c-icon",
                viewBox: "0 0 19 19"
            }, u("path", {
                d: "M17.318 17.232L9.94 9.854 9.586 9.5l-.354.354-7.378 7.378h.707l-.62-.62v.706L9.318 9.94l.354-.354-.354-.354L1.94 1.854v.707l.62-.62h-.706l7.378 7.378.354.354.354-.354 7.378-7.378h-.707l.622.62v-.706L9.854 9.232l-.354.354.354.354 7.378 7.378.708-.707-7.38-7.378v.708l7.38-7.38.353-.353-.353-.353-.622-.622-.353-.353-.354.352-7.378 7.38h.708L2.56 1.23 2.208.88l-.353.353-.622.62-.353.355.352.353 7.38 7.38v-.708l-7.38 7.38-.353.353.352.353.622.622.353.353.354-.353 7.38-7.38h-.708l7.38 7.38z"
            }))))
        }
    };
    n(js, "Filter");
    var Vp = n(i => {
        let {
            cancel: e,
            done: t,
            i18n: r,
            selected: s
        } = i;
        return u("div", {
            className: "uppy-ProviderBrowser-footer"
        }, u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary",
            onClick: t,
            type: "button"
        }, r("selectX", {
            smart_count: s
        })), u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-c-btn-link",
            onClick: e,
            type: "button"
        }, r("cancel")))
    }, "default");
    var Gp = oe(Tt(), 1);

    function Hb() {
        return u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: 11,
            height: 14.5,
            viewBox: "0 0 44 58"
        }, u("path", {
            d: "M27.437.517a1 1 0 0 0-.094.03H4.25C2.037.548.217 2.368.217 4.58v48.405c0 2.212 1.82 4.03 4.03 4.03H39.03c2.21 0 4.03-1.818 4.03-4.03V15.61a1 1 0 0 0-.03-.28 1 1 0 0 0 0-.093 1 1 0 0 0-.03-.032 1 1 0 0 0 0-.03 1 1 0 0 0-.032-.063 1 1 0 0 0-.03-.063 1 1 0 0 0-.032 0 1 1 0 0 0-.03-.063 1 1 0 0 0-.032-.03 1 1 0 0 0-.03-.063 1 1 0 0 0-.063-.062l-14.593-14a1 1 0 0 0-.062-.062A1 1 0 0 0 28 .708a1 1 0 0 0-.374-.157 1 1 0 0 0-.156 0 1 1 0 0 0-.03-.03l-.003-.003zM4.25 2.547h22.218v9.97c0 2.21 1.82 4.03 4.03 4.03h10.564v36.438a2.02 2.02 0 0 1-2.032 2.032H4.25c-1.13 0-2.032-.9-2.032-2.032V4.58c0-1.13.902-2.032 2.03-2.032zm24.218 1.345l10.375 9.937.75.718H30.5c-1.13 0-2.032-.9-2.032-2.03V3.89z"
        }))
    }
    n(Hb, "FileIcon");

    function $b() {
        return u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            style: {
                minWidth: 16,
                marginRight: 3
            },
            viewBox: "0 0 276.157 276.157"
        }, u("path", {
            d: "M273.08 101.378c-3.3-4.65-8.86-7.32-15.254-7.32h-24.34V67.59c0-10.2-8.3-18.5-18.5-18.5h-85.322c-3.63 0-9.295-2.875-11.436-5.805l-6.386-8.735c-4.982-6.814-15.104-11.954-23.546-11.954H58.73c-9.292 0-18.638 6.608-21.737 15.372l-2.033 5.752c-.958 2.71-4.72 5.37-7.596 5.37H18.5C8.3 49.09 0 57.39 0 67.59v167.07c0 .886.16 1.73.443 2.52.152 3.306 1.18 6.424 3.053 9.064 3.3 4.652 8.86 7.32 15.255 7.32h188.487c11.395 0 23.27-8.425 27.035-19.18l40.677-116.188c2.11-6.035 1.43-12.164-1.87-16.816zM18.5 64.088h8.864c9.295 0 18.64-6.607 21.738-15.37l2.032-5.75c.96-2.712 4.722-5.373 7.597-5.373h29.565c3.63 0 9.295 2.876 11.437 5.806l6.386 8.735c4.982 6.815 15.104 11.954 23.546 11.954h85.322c1.898 0 3.5 1.602 3.5 3.5v26.47H69.34c-11.395 0-23.27 8.423-27.035 19.178L15 191.23V67.59c0-1.898 1.603-3.5 3.5-3.5zm242.29 49.15l-40.676 116.188c-1.674 4.78-7.812 9.135-12.877 9.135H18.75c-1.447 0-2.576-.372-3.02-.997-.442-.625-.422-1.814.057-3.18l40.677-116.19c1.674-4.78 7.812-9.134 12.877-9.134h188.487c1.448 0 2.577.372 3.02.997.443.625.423 1.814-.056 3.18z"
        }))
    }
    n($b, "FolderIcon");

    function qb() {
        return u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            style: {
                width: 16,
                marginRight: 4
            },
            viewBox: "0 0 58 58"
        }, u("path", {
            d: "M36.537 28.156l-11-7a1.005 1.005 0 0 0-1.02-.033C24.2 21.3 24 21.635 24 22v14a1 1 0 0 0 1.537.844l11-7a1.002 1.002 0 0 0 0-1.688zM26 34.18V23.82L34.137 29 26 34.18z"
        }), u("path", {
            d: "M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM10 28H2v-9h8v9zm-8 2h8v9H2v-9zm10 10V8h34v42H12V40zm44-12h-8v-9h8v9zm-8 2h8v9h-8v-9zm8-22v9h-8V8h8zM2 8h8v9H2V8zm0 42v-9h8v9H2zm54 0h-8v-9h8v9z"
        }))
    }
    n(qb, "VideoIcon");
    var Wp = n(i => {
        let {
            itemIconString: e
        } = i;
        if (e !== null) switch (e) {
            case "file":
                return u(Hb, null);
            case "folder":
                return u($b, null);
            case "video":
                return u(qb, null);
            default:
            {
                let {
                    alt: t
                } = i;
                return u("img", {
                    src: e,
                    alt: t
                })
            }
        }
    }, "default");

    function Vb(i) {
        let {
            className: e,
            isDisabled: t,
            restrictionError: r,
            isChecked: s,
            title: o,
            itemIconEl: a,
            showTitles: l,
            toggleCheckbox: h,
            recordShiftKeyPress: c,
            id: d,
            children: f
        } = i;
        return u("li", {
            className: e,
            title: t ? r ?.message : null
    }, u("input", {
            type: "checkbox",
            className: `uppy-u-reset uppy-ProviderBrowserItem-checkbox ${s?"uppy-ProviderBrowserItem-checkbox--is-checked":""} uppy-ProviderBrowserItem-checkbox--grid`,
            onChange: h,
            onKeyDown: c,
            name: "listitem",
            id: d,
            checked: s,
            disabled: t,
            "data-uppy-super-focusable": !0
        }), u("label", {
            htmlFor: d,
            "aria-label": o,
            className: "uppy-u-reset uppy-ProviderBrowserItem-inner"
        }, u("span", {
            className: "uppy-ProviderBrowserItem-inner-relative"
        }, a, l && o, f)))
    }
    n(Vb, "GridListItem");
    var Fu = Vb;

    function Wb(i) {
        let {
            className: e,
            isDisabled: t,
            restrictionError: r,
            isCheckboxDisabled: s,
            isChecked: o,
            toggleCheckbox: a,
            recordShiftKeyPress: l,
            type: h,
            id: c,
            itemIconEl: d,
            title: f,
            handleFolderClick: y,
            showTitles: w,
            i18n: S
        } = i;
        return u("li", {
            className: e,
            title: t ? r ?.message : null
    }, s ? null : u("input", {
            type: "checkbox",
            className: `uppy-u-reset uppy-ProviderBrowserItem-checkbox ${o?"uppy-ProviderBrowserItem-checkbox--is-checked":""}`,
            onChange: a,
            onKeyDown: l,
            name: "listitem",
            id: c,
            checked: o,
            "aria-label": h === "file" ? null : S("allFilesFromFolderNamed", {
                name: f
            }),
            disabled: t,
            "data-uppy-super-focusable": !0
        }), h === "file" ? u("label", {
            htmlFor: c,
            className: "uppy-u-reset uppy-ProviderBrowserItem-inner"
        }, u("div", {
            className: "uppy-ProviderBrowserItem-iconWrap"
        }, d), w && f) : u("button", {
            type: "button",
            className: "uppy-u-reset uppy-c-btn uppy-ProviderBrowserItem-inner",
            onClick: y,
            "aria-label": S("openFolderNamed", {
                name: f
            })
        }, u("div", {
            className: "uppy-ProviderBrowserItem-iconWrap"
        }, d), w && u("span", null, f)))
    }
    n(Wb, "ListItem");
    var Kp = Wb;

    function jo() {
        return jo = Object.assign ? Object.assign.bind() : function(i) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r])
            }
            return i
        }, jo.apply(this, arguments)
    }
    n(jo, "_extends");
    var Eu = n(i => {
        let {
            author: e,
            getItemIcon: t,
            isChecked: r,
            isDisabled: s,
            viewType: o
        } = i, a = t(), l = (0, Gp.default)("uppy-ProviderBrowserItem", {
            "uppy-ProviderBrowserItem--selected": r
        }, {
            "uppy-ProviderBrowserItem--disabled": s
        }, {
            "uppy-ProviderBrowserItem--noPreview": a === "video"
        }), h = u(Wp, {
            itemIconString: a
        });
        switch (o) {
            case "grid":
                return u(Fu, jo({}, i, {
                    className: l,
                    itemIconEl: h
                }));
            case "list":
                return u(Kp, jo({}, i, {
                    className: l,
                    itemIconEl: h
                }));
            case "unsplash":
                return u(Fu, jo({}, i, {
                    className: l,
                    itemIconEl: h
                }), u("a", {
                    href: `${e.url}?utm_source=Companion&utm_medium=referral`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "uppy-ProviderBrowserItem-author"
                }, e.name));
            default:
                throw new Error(`There is no such type ${o}`)
        }
    }, "default");
    var Kb = "shared-with-me";

    function Gb(i) {
        let {
            currentSelection: e,
            folders: t,
            files: r,
            uppyFiles: s,
            viewType: o,
            headerComponent: a,
            showBreadcrumbs: l,
            isChecked: h,
            toggleCheckbox: c,
            recordShiftKeyPress: d,
            handleScroll: f,
            showTitles: y,
            i18n: w,
            validateRestrictions: S,
            showFilter: R,
            filterQuery: x,
            filterInput: F,
            getNextFolder: N,
            cancel: H,
            done: q,
            columns: K
        } = i, k = e.length;
        return u("div", {
            className: (0, Ou.default)("uppy-ProviderBrowser", `uppy-ProviderBrowser-viewType--${o}`)
        }, u("div", {
            className: "uppy-ProviderBrowser-header"
        }, u("div", {
            className: (0, Ou.default)("uppy-ProviderBrowser-headerBar", !l && "uppy-ProviderBrowser-headerBar--simple")
        }, a)), R && u(js, {
            i18n: w,
            filterQuery: x,
            filterInput: F
        }), (() => !t.length && !r.length ? u("div", {
            className: "uppy-Provider-empty"
        }, w("noFilesFound")) : u("div", {
            className: "uppy-ProviderBrowser-body"
        }, u("ul", {
            className: "uppy-ProviderBrowser-list",
            onScroll: f,
            role: "listbox",
            tabIndex: "-1"
        }, t.map(B => {
            var z;
            return Eu({
                columns: K,
                showTitles: y,
                viewType: o,
                i18n: w,
                id: B.id,
                title: B.name,
                getItemIcon: () => B.icon,
                isChecked: h(B),
                toggleCheckbox: G => c(G, B),
                recordShiftKeyPress: d,
                type: "folder",
                isDisabled: (z = h(B)) == null ? void 0 : z.loading,
                isCheckboxDisabled: B.id === Kb,
                handleFolderClick: () => N(B)
            })
        }), r.map(B => {
            let z = S(zo(B), [...s, ...e]);
            return Eu({
                id: B.id,
                title: B.name,
                author: B.author,
                getItemIcon: () => B.icon,
                isChecked: h(B),
                toggleCheckbox: G => c(G, B),
                recordShiftKeyPress: d,
                columns: K,
                showTitles: y,
                viewType: o,
                i18n: w,
                type: "file",
                isDisabled: z && !h(B),
                restrictionError: z
            })
        }))))(), k > 0 && u(Vp, {
            selected: k,
            done: q,
            cancel: H,
            i18n: w
        }))
    }
    n(Gb, "Browser");
    var ja = Gb;
    var Ha = n(i => {
        let {
            i18n: e
        } = i;
        return u("div", {
            className: "uppy-Provider-loading"
        }, u("span", null, e("loading")))
    }, "default");
    var kt = class extends ie {
        componentWillUnmount() {
            let {
                onUnmount: e
            } = this.props;
            e()
        }
        render() {
            let {
                children: e
            } = this.props;
            return Ct(e)[0]
        }
    };
    n(kt, "CloseWrapper");

    function Hs(i) {
        return i ? /^[^/]+\/(jpe?g|gif|png|svg|svg\+xml|bmp|webp|avif)$/.test(i) : !1
    }
    n(Hs, "isPreviewSupported");
    var $s = class {
        constructor(e) {
            this.plugin = e, this.filterItems = this.filterItems.bind(this), this.toggleCheckbox = this.toggleCheckbox.bind(this), this.recordShiftKeyPress = this.recordShiftKeyPress.bind(this), this.isChecked = this.isChecked.bind(this), this.loaderWrapper = this.loaderWrapper.bind(this)
        }
        filterItems(e) {
            let t = this.plugin.getPluginState();
            return !t.filterInput || t.filterInput === "" ? e : e.filter(r => r.name.toLowerCase().indexOf(t.filterInput.toLowerCase()) !== -1)
        }
        recordShiftKeyPress(e) {
            this.isShiftKeyPressed = e.shiftKey
        }
        toggleCheckbox(e, t) {
            e.stopPropagation(), e.preventDefault(), e.currentTarget.focus();
            let {
                folders: r,
                files: s
            } = this.plugin.getPluginState(), o = this.filterItems(r.concat(s));
            if (this.lastCheckbox && this.isShiftKeyPressed) {
                let l = o.indexOf(this.lastCheckbox),
                    h = o.indexOf(t),
                    c = l < h ? o.slice(l, h + 1) : o.slice(h, l + 1),
                    d = [];
                for (let f of c) {
                    let {
                        uppy: y
                    } = this.plugin, w = y.validateRestrictions(zo(f), [...y.getFiles(), ...d]);
                    w ? y.info({
                        message: w.message
                    }, "error", y.opts.infoTimeout) : d.push(f)
                }
                this.plugin.setPluginState({
                    currentSelection: d
                });
                return
            }
            this.lastCheckbox = t;
            let {
                currentSelection: a
            } = this.plugin.getPluginState();
            this.isChecked(t) ? this.plugin.setPluginState({
                currentSelection: a.filter(l => l.id !== t.id)
            }) : this.plugin.setPluginState({
                currentSelection: a.concat([t])
            })
        }
        isChecked(e) {
            let {
                currentSelection: t
            } = this.plugin.getPluginState();
            return t.some(r => r.id === e.id)
        }
        loaderWrapper(e, t, r) {
            e.then(s => {
                this.plugin.setPluginState({
                    loading: !1
                }), t(s)
            }).catch(s => {
                this.plugin.setPluginState({
                    loading: !1
                }), r(s)
            }), this.plugin.setPluginState({
                loading: !0
            })
        }
    };
    n($s, "SharedHandler");
    var ur = class {
        constructor(e, t) {
            this.plugin = e, this.provider = t.provider, this.sharedHandler = new $s(e), this.isHandlingScroll = !1, this.preFirstRender = this.preFirstRender.bind(this), this.handleError = this.handleError.bind(this), this.addFile = this.addFile.bind(this), this.clearSelection = this.clearSelection.bind(this), this.cancelPicking = this.cancelPicking.bind(this)
        }
        providerFileToId(e) {
            return Po({
                data: e,
                name: e.name || e.id,
                type: e.mimetype
            })
        }
        preFirstRender() {
            this.plugin.setPluginState({
                didFirstRender: !0
            }), this.plugin.onFirstRender()
        }
        shouldHandleScroll(e) {
            let {
                scrollHeight: t,
                scrollTop: r,
                offsetHeight: s
            } = e.target;
            return t - (r + s) < 50 && !this.isHandlingScroll
        }
        clearSelection() {
            this.plugin.setPluginState({
                currentSelection: [],
                filterInput: ""
            })
        }
        cancelPicking() {
            this.clearSelection();
            let e = this.plugin.uppy.getPlugin("Dashboard");
            e && e.hideAllPanels()
        }
        handleError(e) {
            let {
                uppy: t
            } = this.plugin, r = t.i18n("companionError");
            t.log(e.toString()), !e.isAuthError && t.info({
                message: r,
                details: e.toString()
            }, "error", 5e3)
        }
        addFile(e) {
            let t = {
                    id: this.providerFileToId(e),
                    source: this.plugin.id,
                    data: e,
                    name: e.name || e.id,
                    type: e.mimeType,
                    isRemote: !0,
                    meta: {},
                    body: {
                        fileId: e.id
                    },
                    remote: {
                        companionUrl: this.plugin.opts.companionUrl,
                        url: `${this.provider.fileUrl(e.requestPath)}`,
                        body: {
                            fileId: e.id
                        },
                        providerOptions: this.provider.opts,
                        providerName: this.provider.name
                    }
                },
                r = _o(t);
            r && Hs(r) && (t.preview = e.thumbnail), e.author && (e.author.name != null && (t.meta.authorName = String(e.author.name)), e.author.url && (t.meta.authorUrl = e.author.url)), this.plugin.uppy.log("Adding remote file");
            try {
                return this.plugin.uppy.addFile(t), !0
            } catch (s) {
                return s.isRestriction || this.plugin.uppy.log(s), !1
            }
        }
    };
    n(ur, "View");

    function Xp(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(Xp, "_classPrivateFieldLooseBase");
    var Xb = 0;

    function Yb(i) {
        return "__private_" + Xb++ + "_" + i
    }
    n(Yb, "_classPrivateFieldLooseKey");
    var Jb = {
        version: "3.0.2"
    };

    function Qb() {
        return location.origin
    }
    n(Qb, "getOrigin");

    function Yp(i) {
        if (typeof i == "string") return new RegExp(`^${i}$`);
        if (i instanceof RegExp) return i
    }
    n(Yp, "getRegex");

    function Zb(i, e) {
        return (Array.isArray(e) ? e.map(Yp) : [Yp(e)]).some(r => r ?.test(i) || r ?.test(`${i}/`))
    }
    n(Zb, "isOriginAllowed");
    var Ho = Yb("updateFilesAndFolders"),
        pe = class extends ur {
            constructor(e, t) {
                super(e, t), Object.defineProperty(this, Ho, {
                    value: e1
                });
                let r = {
                    viewType: "list",
                    showTitles: !0,
                    showFilter: !0,
                    showBreadcrumbs: !0
                };
                this.opts = { ...r,
                    ...t
                }, this.filterQuery = this.filterQuery.bind(this), this.getFolder = this.getFolder.bind(this), this.getNextFolder = this.getNextFolder.bind(this), this.logout = this.logout.bind(this), this.handleAuth = this.handleAuth.bind(this), this.handleScroll = this.handleScroll.bind(this), this.listAllFiles = this.listAllFiles.bind(this), this.donePicking = this.donePicking.bind(this), this.render = this.render.bind(this), this.plugin.setPluginState({
                    authenticated: !1,
                    files: [],
                    folders: [],
                    directories: [],
                    filterInput: "",
                    isSearchVisible: !1,
                    currentSelection: []
                })
            }
            tearDown() {}
            getFolder(e, t) {
                return this.sharedHandler.loaderWrapper(this.provider.list(e), r => {
                    let s = [],
                        o = [],
                        a, l = this.plugin.getPluginState(),
                        h = l.directories.findIndex(c => e === c.id);
                    h !== -1 ? a = l.directories.slice(0, h + 1) : a = l.directories.concat([{
                        id: e,
                        title: t
                    }]), this.username = r.username || this.username, Xp(this, Ho)[Ho](r, o, s), this.plugin.setPluginState({
                        directories: a,
                        filterInput: ""
                    })
                }, this.handleError)
            }
            getNextFolder(e) {
                this.getFolder(e.requestPath, e.name), this.lastCheckbox = void 0
            }
            logout() {
                this.provider.logout().then(e => {
                    if (e.ok) {
                        if (!e.revoked) {
                            let r = this.plugin.uppy.i18n("companionUnauthorizeHint", {
                                provider: this.plugin.title,
                                url: e.manual_revoke_url
                            });
                            this.plugin.uppy.info(r, "info", 7e3)
                        }
                        let t = {
                            authenticated: !1,
                            files: [],
                            folders: [],
                            directories: [],
                            filterInput: ""
                        };
                        this.plugin.setPluginState(t)
                    }
                }).catch(this.handleError)
            }
            filterQuery(e) {
                let t = this.plugin.getPluginState();
                this.plugin.setPluginState({ ...t,
                    filterInput: e ? e.target.value : ""
                })
            }
            addFolder(e) {
                let t = this.providerFileToId(e),
                    r = { ...this.plugin.getPluginState().selectedFolders
                    };
                if (!(t in r && r[t].loading)) return r[t] = {
                    loading: !0,
                    files: []
                }, this.plugin.setPluginState({
                    selectedFolders: { ...r
                    }
                }), this.listAllFiles(e.requestPath).then(s => {
                    let o = 0;
                    s.forEach(h => {
                        let c = this.providerFileToId(h);
                        this.plugin.uppy.checkIfFileAlreadyExists(c) || o++
                    }), o > 0 && s.forEach(h => this.addFile(h));
                    let a = s.map(this.providerFileToId);
                    r[t] = {
                        loading: !1,
                        files: a
                    }, this.plugin.setPluginState({
                        selectedFolders: r,
                        filterInput: ""
                    });
                    let l;
                    o === 0 ? l = this.plugin.uppy.i18n("folderAlreadyAdded", {
                        folder: e.name
                    }) : s.length ? l = this.plugin.uppy.i18n("folderAdded", {
                        smart_count: o,
                        folder: e.name
                    }) : l = this.plugin.uppy.i18n("emptyFolderAdded"), this.plugin.uppy.info(l)
                }).catch(s => {
                    let o = { ...this.plugin.getPluginState().selectedFolders
                    };
                    delete o[t], this.plugin.setPluginState({
                        selectedFolders: o
                    }), this.handleError(s)
                })
            }
            async handleAuth() {
                await this.provider.ensurePreAuth();
                let e = btoa(JSON.stringify({
                        origin: Qb()
                    })),
                    t = `@uppy/provider-views=${pe.VERSION}`,
                    r = this.provider.authUrl({
                        state: e,
                        uppyVersions: t
                    }),
                    s = window.open(r, "_blank"),
                    o = n(a => {
                        if (a.source !== s) {
                            this.plugin.uppy.log("rejecting event from unknown source");
                            return
                        }(!Zb(a.origin, this.plugin.opts.companionAllowedHosts) || a.source !== s) && this.plugin.uppy.log(`rejecting event from ${a.origin} vs allowed pattern ${this.plugin.opts.companionAllowedHosts}`);
                        let l = typeof a.data == "string" ? JSON.parse(a.data) : a.data;
                        if (l.error) {
                            this.plugin.uppy.log("auth aborted", "warning");
                            let {
                                uppy: h
                            } = this.plugin, c = h.i18n("authAborted");
                            h.info({
                                message: c
                            }, "warning", 5e3);
                            return
                        }
                        if (!l.token) {
                            this.plugin.uppy.log("did not receive token from auth window", "error");
                            return
                        }
                        s.close(), window.removeEventListener("message", o), this.provider.setAuthToken(l.token), this.preFirstRender()
                    }, "handleToken");
                window.addEventListener("message", o)
            }
            async handleScroll(e) {
                let t = this.nextPagePath || null;
                if (this.shouldHandleScroll(e) && t) {
                    this.isHandlingScroll = !0;
                    try {
                        let r = await this.provider.list(t),
                            {
                                files: s,
                                folders: o
                            } = this.plugin.getPluginState();
                        Xp(this, Ho)[Ho](r, s, o)
                    } catch (r) {
                        this.handleError(r)
                    } finally {
                        this.isHandlingScroll = !1
                    }
                }
            }
            async listAllFiles(e, t) {
                t === void 0 && (t = null), t = t || [];
                let r = await this.provider.list(e);
                r.items.forEach(o => {
                    o.isFolder ? this.addFolder(o) : t.push(o)
                });
                let s = r.nextPagePath;
                return s ? this.listAllFiles(s, t) : t
            }
            donePicking() {
                let {
                    currentSelection: e
                } = this.plugin.getPluginState(), t = e.map(r => r.isFolder ? this.addFolder(r) : this.addFile(r));
                this.sharedHandler.loaderWrapper(Promise.all(t), () => {
                    this.clearSelection()
                }, () => {})
            }
            render(e, t) {
                var r = this;
                t === void 0 && (t = {});
                let {
                    authenticated: s,
                    didFirstRender: o
                } = this.plugin.getPluginState();
                o || this.preFirstRender();
                let a = { ...this.opts,
                        ...t
                    },
                    {
                        files: l,
                        folders: h,
                        filterInput: c,
                        loading: d,
                        currentSelection: f
                    } = this.plugin.getPluginState(),
                    {
                        isChecked: y,
                        toggleCheckbox: w,
                        recordShiftKeyPress: S,
                        filterItems: R
                    } = this.sharedHandler,
                    x = c !== "",
                    F = {
                        showBreadcrumbs: a.showBreadcrumbs,
                        getFolder: this.getFolder,
                        directories: this.plugin.getPluginState().directories,
                        pluginIcon: this.plugin.icon,
                        title: this.plugin.title,
                        logout: this.logout,
                        username: this.username,
                        i18n: this.plugin.uppy.i18n
                    },
                    N = {
                        isChecked: y,
                        toggleCheckbox: w,
                        recordShiftKeyPress: S,
                        currentSelection: f,
                        files: x ? R(l) : l,
                        folders: x ? R(h) : h,
                        username: this.username,
                        getNextFolder: this.getNextFolder,
                        getFolder: this.getFolder,
                        filterItems: this.sharedHandler.filterItems,
                        filterQuery: this.filterQuery,
                        logout: this.logout,
                        handleScroll: this.handleScroll,
                        listAllFiles: this.listAllFiles,
                        done: this.donePicking,
                        cancel: this.cancelPicking,
                        headerComponent: qp(F),
                        title: this.plugin.title,
                        viewType: a.viewType,
                        showTitles: a.showTitles,
                        showFilter: a.showFilter,
                        showBreadcrumbs: a.showBreadcrumbs,
                        pluginIcon: this.plugin.icon,
                        i18n: this.plugin.uppy.i18n,
                        uppyFiles: this.plugin.uppy.getFiles(),
                        validateRestrictions: function() {
                            return r.plugin.uppy.validateRestrictions(...arguments)
                        }
                    };
                return d ? u(kt, {
                    onUnmount: this.clearSelection
                }, u(Ha, {
                    i18n: this.plugin.uppy.i18n
                })) : s ? u(kt, {
                    onUnmount: this.clearSelection
                }, u(ja, N)) : u(kt, {
                    onUnmount: this.clearSelection
                }, u(jp, {
                    pluginName: this.plugin.title,
                    pluginIcon: this.plugin.icon,
                    handleAuth: this.handleAuth,
                    i18n: this.plugin.uppy.i18n,
                    i18nArray: this.plugin.uppy.i18nArray
                }))
            }
        };
    n(pe, "ProviderView");

    function e1(i, e, t) {
        this.nextPagePath = i.nextPagePath, i.items.forEach(r => {
            r.isFolder ? t.push(r) : e.push(r)
        }), this.plugin.setPluginState({
            folders: t,
            files: e
        })
    }
    n(e1, "_updateFilesAndFolders2");
    pe.VERSION = Jb.version;
    var Jp = n(i => {
        let {
            i18n: e,
            search: t
        } = i, r, s = n(() => {
            r.value && t(r.value)
        }, "validateAndSearch"), o = n(a => {
            a.keyCode === 13 && s()
        }, "handleKeyPress");
        return u("div", {
            className: "uppy-SearchProvider"
        }, u("input", {
            className: "uppy-u-reset uppy-c-textInput uppy-SearchProvider-input",
            type: "search",
            "aria-label": e("enterTextToSearch"),
            placeholder: e("enterTextToSearch"),
            onKeyUp: o,
            ref: a => {
                r = a
            },
            "data-uppy-super-focusable": !0
        }), u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-SearchProvider-searchButton",
            type: "button",
            onClick: s
        }, e("searchImages")))
    }, "default");
    var t1 = 13,
        Qp = n(i => {
            let {
                searchTerm: e,
                i18n: t,
                search: r
            } = i, s = n(o => {
                o.keyCode === t1 && (o.stopPropagation(), o.preventDefault(), r(o.target.value))
            }, "handleKeyPress");
            return u("div", {
                class: "uppy-ProviderBrowser-search"
            }, u("input", {
                class: "uppy-u-reset uppy-ProviderBrowser-searchInput",
                type: "text",
                placeholder: t("search"),
                "aria-label": t("search"),
                value: e,
                onKeyUp: s,
                "data-uppy-super-focusable": !0
            }), u("svg", {
                "aria-hidden": "true",
                focusable: "false",
                class: "uppy-c-icon uppy-ProviderBrowser-searchIcon",
                width: "12",
                height: "12",
                viewBox: "0 0 12 12"
            }, u("path", {
                d: "M8.638 7.99l3.172 3.172a.492.492 0 1 1-.697.697L7.91 8.656a4.977 4.977 0 0 1-2.983.983C2.206 9.639 0 7.481 0 4.819 0 2.158 2.206 0 4.927 0c2.721 0 4.927 2.158 4.927 4.82a4.74 4.74 0 0 1-1.216 3.17zm-3.71.685c2.176 0 3.94-1.726 3.94-3.856 0-2.129-1.764-3.855-3.94-3.855C2.75.964.984 2.69.984 4.819c0 2.13 1.765 3.856 3.942 3.856z"
            })))
        }, "default");

    function Zp(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(Zp, "_classPrivateFieldLooseBase");
    var i1 = 0;

    function r1(i) {
        return "__private_" + i1++ + "_" + i
    }
    n(r1, "_classPrivateFieldLooseKey");
    var s1 = {
            version: "3.0.2"
        },
        $o = r1("updateFilesAndInputMode"),
        ti = class extends ur {
            constructor(e, t) {
                super(e, t), Object.defineProperty(this, $o, {
                    value: o1
                });
                let r = {
                    viewType: "grid",
                    showTitles: !1,
                    showFilter: !1,
                    showBreadcrumbs: !1
                };
                this.opts = { ...r,
                    ...t
                }, this.search = this.search.bind(this), this.triggerSearchInput = this.triggerSearchInput.bind(this), this.addFile = this.addFile.bind(this), this.handleScroll = this.handleScroll.bind(this), this.donePicking = this.donePicking.bind(this), this.render = this.render.bind(this), this.plugin.setPluginState({
                    isInputMode: !0,
                    files: [],
                    folders: [],
                    directories: [],
                    filterInput: "",
                    currentSelection: [],
                    searchTerm: null
                })
            }
            tearDown() {}
            clearSelection() {
                this.plugin.setPluginState({
                    currentSelection: [],
                    isInputMode: !0,
                    files: [],
                    searchTerm: null
                })
            }
            search(e) {
                let {
                    searchTerm: t
                } = this.plugin.getPluginState();
                if (!(e && e === t)) return this.sharedHandler.loaderWrapper(this.provider.search(e), r => {
                    Zp(this, $o)[$o](r, [])
                }, this.handleError)
            }
            triggerSearchInput() {
                this.plugin.setPluginState({
                    isInputMode: !0
                })
            }
            async handleScroll(e) {
                let t = this.nextPageQuery || null;
                if (this.shouldHandleScroll(e) && t) {
                    this.isHandlingScroll = !0;
                    try {
                        let {
                            files: r,
                            searchTerm: s
                        } = this.plugin.getPluginState(), o = await this.provider.search(s, t);
                        Zp(this, $o)[$o](o, r)
                    } catch (r) {
                        this.handleError(r)
                    } finally {
                        this.isHandlingScroll = !1
                    }
                }
            }
            donePicking() {
                let {
                    currentSelection: e
                } = this.plugin.getPluginState(), t = e.map(r => this.addFile(r));
                this.sharedHandler.loaderWrapper(Promise.all(t), () => {
                    this.clearSelection()
                }, () => {})
            }
            render(e, t) {
                var r = this;
                t === void 0 && (t = {});
                let {
                    didFirstRender: s,
                    isInputMode: o,
                    searchTerm: a
                } = this.plugin.getPluginState();
                s || this.preFirstRender();
                let l = { ...this.opts,
                        ...t
                    },
                    {
                        files: h,
                        folders: c,
                        filterInput: d,
                        loading: f,
                        currentSelection: y
                    } = this.plugin.getPluginState(),
                    {
                        isChecked: w,
                        toggleCheckbox: S,
                        filterItems: R
                    } = this.sharedHandler,
                    x = d !== "",
                    F = {
                        isChecked: w,
                        toggleCheckbox: S,
                        currentSelection: y,
                        files: x ? R(h) : h,
                        folders: x ? R(c) : c,
                        handleScroll: this.handleScroll,
                        done: this.donePicking,
                        cancel: this.cancelPicking,
                        headerComponent: Qp({
                            search: this.search,
                            i18n: this.plugin.uppy.i18n,
                            searchTerm: a
                        }),
                        title: this.plugin.title,
                        viewType: l.viewType,
                        showTitles: l.showTitles,
                        showFilter: l.showFilter,
                        showBreadcrumbs: l.showBreadcrumbs,
                        pluginIcon: this.plugin.icon,
                        i18n: this.plugin.uppy.i18n,
                        uppyFiles: this.plugin.uppy.getFiles(),
                        validateRestrictions: function() {
                            return r.plugin.uppy.validateRestrictions(...arguments)
                        }
                    };
                return f ? u(kt, {
                    onUnmount: this.clearSelection
                }, u(Ha, {
                    i18n: this.plugin.uppy.i18n
                })) : o ? u(kt, {
                    onUnmount: this.clearSelection
                }, u(Jp, {
                    search: this.search,
                    i18n: this.plugin.uppy.i18n
                })) : u(kt, {
                    onUnmount: this.clearSelection
                }, u(ja, F))
            }
        };
    n(ti, "SearchProviderView");

    function o1(i, e) {
        this.nextPageQuery = i.nextPageQuery, i.items.forEach(t => {
            e.push(t)
        }), this.plugin.setPluginState({
            isInputMode: !1,
            files: e,
            searchTerm: i.searchedFor
        })
    }
    n(o1, "_updateFilesAndInputMode2");
    ti.VERSION = s1.version;
    var ef;

    function ii(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(ii, "_classPrivateFieldLooseBase");
    var n1 = 0;

    function Cu(i) {
        return "__private_" + n1++ + "_" + i
    }
    n(Cu, "_classPrivateFieldLooseKey");
    var a1 = {
            version: "3.0.2"
        },
        l1 = "uppy/STATE_UPDATE",
        u1 = n(i => e => e.uppy[i], "defaultSelector");

    function h1(i, e) {
        let t = Object.keys(e),
            r = {};
        return t.forEach(s => {
            i[s] !== e[s] && (r[s] = e[s])
        }), r
    }
    n(h1, "getPatch");
    var Ni = Cu("id"),
        qo = Cu("selector"),
        Bi = Cu("store");
    ef = Symbol.for("uppy test: get id");
    var Vo = class {
        constructor(e) {
            Object.defineProperty(this, Ni, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, qo, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, Bi, {
                writable: !0,
                value: void 0
            }), ii(this, Bi)[Bi] = e.store, ii(this, Ni)[Ni] = e.id || Ot(), ii(this, qo)[qo] = e.selector || u1(ii(this, Ni)[Ni]), this.setState({})
        }
        setState(e) {
            ii(this, Bi)[Bi].dispatch({
                type: l1,
                id: ii(this, Ni)[Ni],
                payload: e
            })
        }
        getState() {
            return ii(this, qo)[qo](ii(this, Bi)[Bi].getState())
        }
        subscribe(e) {
            let t = this.getState();
            return ii(this, Bi)[Bi].subscribe(() => {
                let r = this.getState();
                if (t !== r) {
                    let s = h1(t, r);
                    e(t, r, s), t = r
                }
            })
        }[ef]() {
            return ii(this, Ni)[Ni]
        }
    };
    n(Vo, "ReduxStore");
    Vo.VERSION = a1.version;
    var tf = Vo;

    function Tu(i) {
        if (!i.bytesUploaded) return 0;
        let e = Date.now() - i.uploadStarted;
        return i.bytesUploaded / (e / 1e3)
    }
    n(Tu, "getSpeed");

    function ku(i) {
        return i.bytesTotal - i.bytesUploaded
    }
    n(ku, "getBytesRemaining");
    var Ke = {
        STATE_ERROR: "error",
        STATE_WAITING: "waiting",
        STATE_PREPROCESSING: "preprocessing",
        STATE_UPLOADING: "uploading",
        STATE_POSTPROCESSING: "postprocessing",
        STATE_COMPLETE: "complete"
    };
    var Lu = oe(Tt(), 1);

    function Wo(i) {
        let e = [],
            t, r;
        for (let {
            progress: o
        } of Object.values(i)) {
            let {
                preprocess: a,
                postprocess: l
            } = o;
            r == null && (a || l) && ({
                mode: t,
                message: r
            } = a || l), a ?.mode === "determinate" && e.push(a.value), l ?.mode === "determinate" && e.push(l.value)
        }
        let s = e.reduce((o, a) => o + a / e.length, 0);
        return {
            mode: t,
            message: r,
            value: s
        }
    }
    n(Wo, "calculateProcessingProgress");
    var Nu = oe(Tt(), 1),
        sf = oe(bo(), 1),
        Du = oe(Ca(), 1);

    function Au(i) {
        let e = Math.floor(i / 3600) % 24,
            t = Math.floor(i / 60) % 60,
            r = Math.floor(i % 60);
        return {
            hours: e,
            minutes: t,
            seconds: r
        }
    }
    n(Au, "secondsToTime");

    function Uu(i) {
        let e = Au(i),
            t = e.hours === 0 ? "" : `${e.hours}h`,
            r = e.minutes === 0 ? "" : `${e.hours===0?e.minutes:` ${e.minutes.toString(10).padStart(2,"0")}`}m`,
            s = e.hours !== 0 ? "" : `${e.minutes===0?e.seconds:` ${e.seconds.toString(10).padStart(2,"0")}`}s`;
        return `${t}${r}${s}`
    }
    n(Uu, "prettyETA");
    var c1 = "\xB7",
        rf = n(() => ` ${c1} `, "renderDot");

    function of (i) {
        let {
            newFiles: e,
            isUploadStarted: t,
            recoveredState: r,
            i18n: s,
            uploadState: o,
            isSomeGhost: a,
            startUpload: l
        } = i, h = (0, Nu.default)("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--upload", {
            "uppy-c-btn-primary": o === Ke.STATE_WAITING
        }, {
            "uppy-StatusBar-actionBtn--disabled": a
        }), c = e && t && !r ? s("uploadXNewFiles", {
            smart_count: e
        }) : s("uploadXFiles", {
            smart_count: e
        });
        return u("button", {
            type: "button",
            className: h,
            "aria-label": s("uploadXFiles", {
                smart_count: e
            }),
            onClick: l,
            disabled: a,
            "data-uppy-super-focusable": !0
        }, c)
    }
    n( of , "UploadBtn");

    function nf(i) {
        let {
            i18n: e,
            uppy: t
        } = i;
        return u("button", {
            type: "button",
            className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry",
            "aria-label": e("retryUpload"),
            onClick: () => t.retryAll(),
            "data-uppy-super-focusable": !0
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "8",
            height: "10",
            viewBox: "0 0 8 10"
        }, u("path", {
            d: "M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z"
        })), e("retry"))
    }
    n(nf, "RetryBtn");

    function af(i) {
        let {
            i18n: e,
            uppy: t
        } = i;
        return u("button", {
            type: "button",
            className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
            title: e("cancel"),
            "aria-label": e("cancel"),
            onClick: () => t.cancelAll(),
            "data-cy": "cancel",
            "data-uppy-super-focusable": !0
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16"
        }, u("g", {
            fill: "none",
            fillRule: "evenodd"
        }, u("circle", {
            fill: "#888",
            cx: "8",
            cy: "8",
            r: "8"
        }), u("path", {
            fill: "#FFF",
            d: "M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z"
        }))))
    }
    n(af, "CancelBtn");

    function lf(i) {
        let {
            isAllPaused: e,
            i18n: t,
            isAllComplete: r,
            resumableUploads: s,
            uppy: o
        } = i, a = t(e ? "resume" : "pause");

        function l() {
            return r ? null : s ? e ? o.resumeAll() : o.pauseAll() : o.cancelAll()
        }
        return n(l, "togglePauseResume"), u("button", {
            title: a,
            "aria-label": a,
            className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
            type: "button",
            onClick: l,
            "data-uppy-super-focusable": !0
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16"
        }, u("g", {
            fill: "none",
            fillRule: "evenodd"
        }, u("circle", {
            fill: "#888",
            cx: "8",
            cy: "8",
            r: "8"
        }), u("path", {
            fill: "#FFF",
            d: e ? "M6 4.25L11.5 8 6 11.75z" : "M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z"
        }))))
    }
    n(lf, "PauseResumeButton");

    function uf(i) {
        let {
            i18n: e,
            doneButtonHandler: t
        } = i;
        return u("button", {
            type: "button",
            className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--done",
            onClick: t,
            "data-uppy-super-focusable": !0
        }, e("done"))
    }
    n(uf, "DoneBtn");

    function hf() {
        return u("svg", {
            className: "uppy-StatusBar-spinner",
            "aria-hidden": "true",
            focusable: "false",
            width: "14",
            height: "14"
        }, u("path", {
            d: "M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0",
            fillRule: "evenodd"
        }))
    }
    n(hf, "LoadingSpinner");

    function cf(i) {
        let {
            progress: e
        } = i, {
            value: t,
            mode: r,
            message: s
        } = e, o = Math.round(t * 100), a = "\xB7";
        return u("div", {
            className: "uppy-StatusBar-content"
        }, u(hf, null), r === "determinate" ? `${o}% ${a} ` : "", s)
    }
    n(cf, "ProgressBarProcessing");

    function d1(i) {
        let {
            numUploads: e,
            complete: t,
            totalUploadedSize: r,
            totalSize: s,
            totalETA: o,
            i18n: a
        } = i, l = e > 1;
        return u("div", {
            className: "uppy-StatusBar-statusSecondary"
        }, l && a("filesUploadedOfTotal", {
            complete: t,
            smart_count: e
        }), u("span", {
            className: "uppy-StatusBar-additionalInfo"
        }, l && rf(), a("dataUploadedOfTotal", {
            complete: (0, Du.default)(r),
            total: (0, Du.default)(s)
        }), rf(), a("xTimeLeft", {
            time: Uu(o)
        })))
    }
    n(d1, "ProgressDetails");

    function df(i) {
        let {
            i18n: e,
            complete: t,
            numUploads: r
        } = i;
        return u("div", {
            className: "uppy-StatusBar-statusSecondary"
        }, e("filesUploadedOfTotal", {
            complete: t,
            smart_count: r
        }))
    }
    n(df, "FileUploadCount");

    function p1(i) {
        let {
            i18n: e,
            newFiles: t,
            startUpload: r
        } = i, s = (0, Nu.default)("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--uploadNewlyAdded");
        return u("div", {
            className: "uppy-StatusBar-statusSecondary"
        }, u("div", {
            className: "uppy-StatusBar-statusSecondaryHint"
        }, e("xMoreFilesAdded", {
            smart_count: t
        })), u("button", {
            type: "button",
            className: s,
            "aria-label": e("uploadXFiles", {
                smart_count: t
            }),
            onClick: r
        }, e("upload")))
    }
    n(p1, "UploadNewlyAddedFiles");
    var f1 = (0, sf.default)(d1, 500, {
        leading: !0,
        trailing: !0
    });

    function pf(i) {
        let {
            i18n: e,
            supportsUploadProgress: t,
            totalProgress: r,
            showProgressDetails: s,
            isUploadStarted: o,
            isAllComplete: a,
            isAllPaused: l,
            newFiles: h,
            numUploads: c,
            complete: d,
            totalUploadedSize: f,
            totalSize: y,
            totalETA: w,
            startUpload: S
        } = i, R = h && o;
        if (!o || a) return null;
        let x = e(l ? "paused" : "uploading");

        function F() {
            return !l && !R && s ? t ? u(f1, {
                numUploads: c,
                complete: d,
                totalUploadedSize: f,
                totalSize: y,
                totalETA: w,
                i18n: e
            }) : u(df, {
                i18n: e,
                complete: d,
                numUploads: c
            }) : null
        }
        return n(F, "renderProgressDetails"), u("div", {
            className: "uppy-StatusBar-content",
            "aria-label": x,
            title: x
        }, l ? null : u(hf, null), u("div", {
            className: "uppy-StatusBar-status"
        }, u("div", {
            className: "uppy-StatusBar-statusPrimary"
        }, t ? `${x}: ${r}%` : x), F(), R ? u(p1, {
            i18n: e,
            newFiles: h,
            startUpload: S
        }) : null))
    }
    n(pf, "ProgressBarUploading");

    function ff(i) {
        let {
            i18n: e
        } = i;
        return u("div", {
            className: "uppy-StatusBar-content",
            role: "status",
            title: e("complete")
        }, u("div", {
            className: "uppy-StatusBar-status"
        }, u("div", {
            className: "uppy-StatusBar-statusPrimary"
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-StatusBar-statusIndicator uppy-c-icon",
            width: "15",
            height: "11",
            viewBox: "0 0 15 11"
        }, u("path", {
            d: "M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z"
        })), e("complete"))))
    }
    n(ff, "ProgressBarComplete");

    function mf(i) {
        let {
            error: e,
            i18n: t,
            complete: r,
            numUploads: s
        } = i;

        function o() {
            let a = `${t("uploadFailed")} 

 ${e}`;
            alert(a)
        }
        return n(o, "displayErrorAlert"), u("div", {
            className: "uppy-StatusBar-content",
            title: t("uploadFailed")
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-StatusBar-statusIndicator uppy-c-icon",
            width: "11",
            height: "11",
            viewBox: "0 0 11 11"
        }, u("path", {
            d: "M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z"
        })), u("div", {
            className: "uppy-StatusBar-status"
        }, u("div", {
            className: "uppy-StatusBar-statusPrimary"
        }, t("uploadFailed"), u("button", {
            className: "uppy-u-reset uppy-StatusBar-details",
            "aria-label": t("showErrorDetails"),
            "data-microtip-position": "top-right",
            "data-microtip-size": "medium",
            onClick: o,
            type: "button"
        }, "?")), u(df, {
            i18n: t,
            complete: r,
            numUploads: s
        })))
    }
    n(mf, "ProgressBarError");
    var {
        STATE_ERROR: gf,
        STATE_WAITING: yf,
        STATE_PREPROCESSING: Bu,
        STATE_UPLOADING: $a,
        STATE_POSTPROCESSING: Iu,
        STATE_COMPLETE: qa
    } = Ke;

    function Mu(i) {
        let {
            newFiles: e,
            allowNewUpload: t,
            isUploadInProgress: r,
            isAllPaused: s,
            resumableUploads: o,
            error: a,
            hideUploadButton: l,
            hidePauseResumeButton: h,
            hideCancelButton: c,
            hideRetryButton: d,
            recoveredState: f,
            uploadState: y,
            totalProgress: w,
            files: S,
            supportsUploadProgress: R,
            hideAfterFinish: x,
            isSomeGhost: F,
            doneButtonHandler: N,
            isUploadStarted: H,
            i18n: q,
            startUpload: K,
            uppy: k,
            isAllComplete: B,
            showProgressDetails: z,
            numUploads: G,
            complete: Nt,
            totalSize: Kt,
            totalETA: Gt,
            totalUploadedSize: Xt
        } = i;

        function ir() {
            switch (y) {
                case Iu:
                case Bu:
                {
                    let xt = Wo(S);
                    return xt.mode === "determinate" ? xt.value * 100 : w
                }
                case gf:
                    return null;
                case $a:
                    return R ? w : null;
                default:
                    return w
            }
        }
        n(ir, "getProgressValue");

        function Fr() {
            switch (y) {
                case Iu:
                case Bu:
                {
                    let {
                        mode: xt
                    } = Wo(S);
                    return xt === "indeterminate"
                }
                case $a:
                    return !R;
                default:
                    return !1
            }
        }
        n(Fr, "getIsIndeterminate");

        function xe() {
            if (f) return !1;
            switch (y) {
                case yf:
                    return l || e === 0;
                case qa:
                    return x;
                default:
                    return !1
            }
        }
        n(xe, "getIsHidden");
        let Si = ir(),
            ks = xe(),
            Yt = Si ?? 100,
            Er = !a && e && !r && !s && t && !l,
            _i = !c && y !== yf && y !== qa,
            rr = o && !h && y === $a,
            Pi = a && !B && !d,
            Or = N && y === qa,
            Rr = (0, Lu.default)("uppy-StatusBar-progress", {
                "is-indeterminate": Fr()
            }),
            xi = (0, Lu.default)("uppy-StatusBar", `is-${y}`, {
                "has-ghosts": F
            });
        return u("div", {
            className: xi,
            "aria-hidden": ks
        }, u("div", {
            className: Rr,
            style: {
                width: `${Yt}%`
            },
            role: "progressbar",
            "aria-label": `${Yt}%`,
            "aria-valuetext": `${Yt}%`,
            "aria-valuemin": "0",
            "aria-valuemax": "100",
            "aria-valuenow": Si
        }), (() => {
            switch (y) {
                case Bu:
                case Iu:
                    return u(cf, {
                        progress: Wo(S)
                    });
                case qa:
                    return u(ff, {
                        i18n: q
                    });
                case gf:
                    return u(mf, {
                        error: a,
                        i18n: q,
                        numUploads: G,
                        complete: Nt
                    });
                case $a:
                    return u(pf, {
                        i18n: q,
                        supportsUploadProgress: R,
                        totalProgress: w,
                        showProgressDetails: z,
                        isUploadStarted: H,
                        isAllComplete: B,
                        isAllPaused: s,
                        newFiles: e,
                        numUploads: G,
                        complete: Nt,
                        totalUploadedSize: Xt,
                        totalSize: Kt,
                        totalETA: Gt,
                        startUpload: K
                    });
                default:
                    return null
            }
        })(), u("div", {
            className: "uppy-StatusBar-actions"
        }, f || Er ? u( of , {
            newFiles: e,
            isUploadStarted: H,
            recoveredState: f,
            i18n: q,
            isSomeGhost: F,
            startUpload: K,
            uploadState: y
        }) : null, Pi ? u(nf, {
            i18n: q,
            uppy: k
        }) : null, rr ? u(lf, {
            isAllPaused: s,
            i18n: q,
            isAllComplete: B,
            resumableUploads: o,
            uppy: k
        }) : null, _i ? u(af, {
            i18n: q,
            uppy: k
        }) : null, Or ? u(uf, {
            i18n: q,
            doneButtonHandler: N
        }) : null))
    }
    n(Mu, "StatusBar");
    var vf = {
        strings: {
            uploading: "Uploading",
            complete: "Complete",
            uploadFailed: "Upload failed",
            paused: "Paused",
            retry: "Retry",
            cancel: "Cancel",
            pause: "Pause",
            resume: "Resume",
            done: "Done",
            filesUploadedOfTotal: {
                0: "%{complete} of %{smart_count} file uploaded",
                1: "%{complete} of %{smart_count} files uploaded"
            },
            dataUploadedOfTotal: "%{complete} of %{total}",
            xTimeLeft: "%{time} left",
            uploadXFiles: {
                0: "Upload %{smart_count} file",
                1: "Upload %{smart_count} files"
            },
            uploadXNewFiles: {
                0: "Upload +%{smart_count} file",
                1: "Upload +%{smart_count} files"
            },
            upload: "Upload",
            retryUpload: "Retry upload",
            xMoreFilesAdded: {
                0: "%{smart_count} more file added",
                1: "%{smart_count} more files added"
            },
            showErrorDetails: "Show error details"
        }
    };
    var m1 = {
        version: "3.0.1"
    };

    function g1(i) {
        let e = 0;
        return i.forEach(t => {
            e += Tu(t.progress)
        }), e
    }
    n(g1, "getTotalSpeed");

    function y1(i) {
        let e = g1(i);
        if (e === 0) return 0;
        let t = i.reduce((r, s) => r + ku(s.progress), 0);
        return Math.round(t / e * 10) / 10
    }
    n(y1, "getTotalETA");

    function v1(i, e, t, r) {
        if (i && !e) return Ke.STATE_ERROR;
        if (e) return Ke.STATE_COMPLETE;
        if (t) return Ke.STATE_WAITING;
        let s = Ke.STATE_WAITING,
            o = Object.keys(r);
        for (let a = 0; a < o.length; a++) {
            let {
                progress: l
            } = r[o[a]];
            if (l.uploadStarted && !l.uploadComplete) return Ke.STATE_UPLOADING;
            l.preprocess && s !== Ke.STATE_UPLOADING && (s = Ke.STATE_PREPROCESSING), l.postprocess && s !== Ke.STATE_UPLOADING && s !== Ke.STATE_PREPROCESSING && (s = Ke.STATE_POSTPROCESSING)
        }
        return s
    }
    n(v1, "getUploadingState");
    var ri = class extends V {
        constructor(e, t) {
            super(e, t), this.startUpload = () => {
                let {
                    recoveredState: s
                } = this.uppy.getState();
                if (s) {
                    this.uppy.emit("restore-confirmed");
                    return
                }
                return this.uppy.upload().catch(() => {})
            }, this.id = this.opts.id || "StatusBar", this.title = "StatusBar", this.type = "progressindicator", this.defaultLocale = vf;
            let r = {
                target: "body",
                hideUploadButton: !1,
                hideRetryButton: !1,
                hidePauseResumeButton: !1,
                hideCancelButton: !1,
                showProgressDetails: !1,
                hideAfterFinish: !0,
                doneButtonHandler: null
            };
            this.opts = { ...r,
                ...t
            }, this.i18nInit(), this.render = this.render.bind(this), this.install = this.install.bind(this)
        }
        render(e) {
            let {
                capabilities: t,
                files: r,
                allowNewUpload: s,
                totalProgress: o,
                error: a,
                recoveredState: l
            } = e, {
                newFiles: h,
                startedFiles: c,
                completeFiles: d,
                inProgressNotPausedFiles: f,
                isUploadStarted: y,
                isAllComplete: w,
                isAllErrored: S,
                isAllPaused: R,
                isUploadInProgress: x,
                isSomeGhost: F
            } = this.uppy.getObjectOfFilesPerState(), N = l ? Object.values(r) : h, H = y1(f), q = !!t.resumableUploads, K = t.uploadProgress !== !1, k = 0, B = 0;
            return c.forEach(z => {
                k += z.progress.bytesTotal || 0, B += z.progress.bytesUploaded || 0
            }), Mu({
                error: a,
                uploadState: v1(a, w, l, e.files || {}),
                allowNewUpload: s,
                totalProgress: o,
                totalSize: k,
                totalUploadedSize: B,
                isAllComplete: !1,
                isAllPaused: R,
                isAllErrored: S,
                isUploadStarted: y,
                isUploadInProgress: x,
                isSomeGhost: F,
                recoveredState: l,
                complete: d.length,
                newFiles: N.length,
                numUploads: c.length,
                totalETA: H,
                files: r,
                i18n: this.i18n,
                uppy: this.uppy,
                startUpload: this.startUpload,
                doneButtonHandler: this.opts.doneButtonHandler,
                resumableUploads: q,
                supportsUploadProgress: K,
                showProgressDetails: this.opts.showProgressDetails,
                hideUploadButton: this.opts.hideUploadButton,
                hideRetryButton: this.opts.hideRetryButton,
                hidePauseResumeButton: this.opts.hidePauseResumeButton,
                hideCancelButton: this.opts.hideCancelButton,
                hideAfterFinish: this.opts.hideAfterFinish,
                isTargetDOMEl: this.isTargetDOMEl
            })
        }
        onMount() {
            let e = this.el;
            Ba(e) || (e.dir = "ltr")
        }
        install() {
            let {
                target: e
            } = this.opts;
            e && this.mount(e, this)
        }
        uninstall() {
            this.unmount()
        }
    };
    n(ri, "StatusBar");
    ri.VERSION = m1.version;
    var bf = 300,
        qs = class extends ie {
            constructor() {
                super(...arguments), this.ref = Op()
            }
            componentWillEnter(e) {
                this.ref.current.style.opacity = "1", this.ref.current.style.transform = "none", setTimeout(e, bf)
            }
            componentWillLeave(e) {
                this.ref.current.style.opacity = "0", this.ref.current.style.transform = "translateY(350%)", setTimeout(e, bf)
            }
            render() {
                let {
                    children: e
                } = this.props;
                return u("div", {
                    className: "uppy-Informer-animated",
                    ref: this.ref
                }, e)
            }
        };
    n(qs, "FadeIn");

    function b1(i, e) {
        return Object.assign(i, e)
    }
    n(b1, "assign");

    function w1(i, e) {
        var t;
        return (t = i ?.key) != null ? t : e
    }
    n(w1, "getKey");

    function S1(i, e) {
        let t = i._ptgLinkedRefs || (i._ptgLinkedRefs = {});
        return t[e] || (t[e] = r => {
            i.refs[e] = r
        })
    }
    n(S1, "linkRef");

    function Ko(i) {
        let e = {};
        for (let t = 0; t < i.length; t++)
            if (i[t] != null) {
                let r = w1(i[t], t.toString(36));
                e[r] = i[t]
            }
        return e
    }
    n(Ko, "getChildMapping");

    function _1(i, e) {
        i = i || {}, e = e || {};
        let t = n(a => e.hasOwnProperty(a) ? e[a] : i[a], "getValueForKey"),
            r = {},
            s = [];
        for (let a in i) e.hasOwnProperty(a) ? s.length && (r[a] = s, s = []) : s.push(a);
        let o = {};
        for (let a in e) {
            if (r.hasOwnProperty(a))
                for (let l = 0; l < r[a].length; l++) {
                    let h = r[a][l];
                    o[r[a][l]] = t(h)
                }
            o[a] = t(a)
        }
        for (let a = 0; a < s.length; a++) o[s[a]] = t(s[a]);
        return o
    }
    n(_1, "mergeChildMappings");
    var P1 = n(i => i, "identity"),
        Go = class extends ie {
            constructor(e, t) {
                super(e, t), this.refs = {}, this.state = {
                    children: Ko(Ct(Ct(this.props.children)) || [])
                }, this.performAppear = this.performAppear.bind(this), this.performEnter = this.performEnter.bind(this), this.performLeave = this.performLeave.bind(this)
            }
            componentWillMount() {
                this.currentlyTransitioningKeys = {}, this.keysToAbortLeave = [], this.keysToEnter = [], this.keysToLeave = []
            }
            componentDidMount() {
                let e = this.state.children;
                for (let t in e) e[t] && this.performAppear(t)
            }
            componentWillReceiveProps(e) {
                let t = Ko(Ct(e.children) || []),
                    r = this.state.children;
                this.setState(o => ({
                    children: _1(o.children, t)
                }));
                let s;
                for (s in t)
                    if (t.hasOwnProperty(s)) {
                        let o = r && r.hasOwnProperty(s);
                        t[s] && o && this.currentlyTransitioningKeys[s] ? (this.keysToEnter.push(s), this.keysToAbortLeave.push(s)) : t[s] && !o && !this.currentlyTransitioningKeys[s] && this.keysToEnter.push(s)
                    }
                for (s in r)
                    if (r.hasOwnProperty(s)) {
                        let o = t && t.hasOwnProperty(s);
                        r[s] && !o && !this.currentlyTransitioningKeys[s] && this.keysToLeave.push(s)
                    }
            }
            componentDidUpdate() {
                let {
                    keysToEnter: e
                } = this;
                this.keysToEnter = [], e.forEach(this.performEnter);
                let {
                    keysToLeave: t
                } = this;
                this.keysToLeave = [], t.forEach(this.performLeave)
            }
            _finishAbort(e) {
                let t = this.keysToAbortLeave.indexOf(e);
                t !== -1 && this.keysToAbortLeave.splice(t, 1)
            }
            performAppear(e) {
                this.currentlyTransitioningKeys[e] = !0;
                let t = this.refs[e];
                t.componentWillAppear ? t.componentWillAppear(this._handleDoneAppearing.bind(this, e)) : this._handleDoneAppearing(e)
            }
            _handleDoneAppearing(e) {
                let t = this.refs[e];
                t.componentDidAppear && t.componentDidAppear(), delete this.currentlyTransitioningKeys[e], this._finishAbort(e);
                let r = Ko(Ct(this.props.children) || []);
                (!r || !r.hasOwnProperty(e)) && this.performLeave(e)
            }
            performEnter(e) {
                this.currentlyTransitioningKeys[e] = !0;
                let t = this.refs[e];
                t.componentWillEnter ? t.componentWillEnter(this._handleDoneEntering.bind(this, e)) : this._handleDoneEntering(e)
            }
            _handleDoneEntering(e) {
                let t = this.refs[e];
                t.componentDidEnter && t.componentDidEnter(), delete this.currentlyTransitioningKeys[e], this._finishAbort(e);
                let r = Ko(Ct(this.props.children) || []);
                (!r || !r.hasOwnProperty(e)) && this.performLeave(e)
            }
            performLeave(e) {
                if (this.keysToAbortLeave.indexOf(e) !== -1) return;
                this.currentlyTransitioningKeys[e] = !0;
                let r = this.refs[e];
                r.componentWillLeave ? r.componentWillLeave(this._handleDoneLeaving.bind(this, e)) : this._handleDoneLeaving(e)
            }
            _handleDoneLeaving(e) {
                if (this.keysToAbortLeave.indexOf(e) !== -1) return;
                let r = this.refs[e];
                r.componentDidLeave && r.componentDidLeave(), delete this.currentlyTransitioningKeys[e];
                let s = Ko(Ct(this.props.children) || []);
                if (s && s.hasOwnProperty(e)) this.performEnter(e);
                else {
                    let o = b1({}, this.state.children);
                    delete o[e], this.setState({
                        children: o
                    })
                }
            }
            render(e, t) {
                let {
                    childFactory: r,
                    transitionLeave: s,
                    transitionName: o,
                    transitionAppear: a,
                    transitionEnter: l,
                    transitionLeaveTimeout: h,
                    transitionEnterTimeout: c,
                    transitionAppearTimeout: d,
                    component: f,
                    ...y
                } = e, {
                    children: w
                } = t, S = Object.entries(w).map(R => {
                    let [x, F] = R;
                    if (!F) return;
                    let N = S1(this, x);
                    return Na(r(F), {
                        ref: N,
                        key: x
                    })
                }).filter(Boolean);
                return u(f, y, S)
            }
        };
    n(Go, "TransitionGroup");
    Go.defaultProps = {
        component: "span",
        childFactory: P1
    };
    var wf = Go;
    var x1 = {
            version: "3.0.1"
        },
        si = class extends V {
            constructor(e, t) {
                super(e, t), this.render = s => u("div", {
                    className: "uppy uppy-Informer"
                }, u(wf, null, s.info.map(o => u(qs, {
                    key: o.message
                }, u("p", {
                    role: "alert"
                }, o.message, " ", o.details && u("span", {
                    "aria-label": o.details,
                    "data-microtip-position": "top-left",
                    "data-microtip-size": "medium",
                    role: "tooltip",
                    onClick: () => alert(`${o.message} 

 ${o.details}`)
                }, "?")))))), this.type = "progressindicator", this.id = this.opts.id || "Informer", this.title = "Informer";
                let r = {};
                this.opts = { ...r,
                    ...t
                }
            }
            install() {
                let {
                    target: e
                } = this.opts;
                e && this.mount(e, this)
            }
        };
    n(si, "Informer");
    si.VERSION = x1.version;
    var F1 = /^data:([^/]+\/[^,;]+(?:[^,]*?))(;base64)?,([\s\S]*)$/;

    function zu(i, e, t) {
        var r, s;
        let o = F1.exec(i),
            a = (r = (s = e.mimeType) != null ? s : o ?.[1]) != null ? r : "plain/text",
            l;
        if (o[2] != null) {
            let h = atob(decodeURIComponent(o[3])),
                c = new Uint8Array(h.length);
            for (let d = 0; d < h.length; d++) c[d] = h.charCodeAt(d);
            l = [c]
        } else l = [decodeURIComponent(o[3])];
        return t ? new File(l, e.name || "", {
            type: a
        }) : new Blob(l, {
            type: a
        })
    }
    n(zu, "dataURItoBlob");

    function Va(i) {
        return i.startsWith("blob:")
    }
    n(Va, "isObjectURL");

    function ne(i, e, t) {
        return e in i ? Object.defineProperty(i, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[e] = t, i
    }
    n(ne, "e");
    var Cf = typeof self < "u" ? self : global,
        Zo = typeof navigator < "u",
        E1 = Zo && typeof HTMLImageElement > "u",
        Sf = !(typeof global > "u" || typeof process > "u" || !process.versions || !process.versions.node),
        Tf = Cf.Buffer,
        kf = !!Tf,
        O1 = n(i => i !== void 0, "h");

    function Af(i) {
        return i === void 0 || (i instanceof Map ? i.size === 0 : Object.values(i).filter(O1).length === 0)
    }
    n(Af, "f");

    function Ae(i) {
        let e = new Error(i);
        throw delete e.stack, e
    }
    n(Ae, "l");

    function _f(i) {
        let e = function(t) {
            let r = 0;
            return t.ifd0.enabled && (r += 1024), t.exif.enabled && (r += 2048), t.makerNote && (r += 2048), t.userComment && (r += 1024), t.gps.enabled && (r += 512), t.interop.enabled && (r += 100), t.ifd1.enabled && (r += 1024), r + 2048
        }(i);
        return i.jfif.enabled && (e += 50), i.xmp.enabled && (e += 2e4), i.iptc.enabled && (e += 14e3), i.icc.enabled && (e += 6e3), e
    }
    n(_f, "o");
    var ju = n(i => String.fromCharCode.apply(null, i), "u"),
        Pf = typeof TextDecoder < "u" ? new TextDecoder("utf-8") : void 0,
        nt = class {
            static from(e, t) {
                return e instanceof this && e.le === t ? e : new nt(e, void 0, void 0, t)
            }
            constructor(e, t = 0, r, s) {
                if (typeof s == "boolean" && (this.le = s), Array.isArray(e) && (e = new Uint8Array(e)), e === 0) this.byteOffset = 0, this.byteLength = 0;
                else if (e instanceof ArrayBuffer) {
                    r === void 0 && (r = e.byteLength - t);
                    let o = new DataView(e, t, r);
                    this._swapDataView(o)
                } else if (e instanceof Uint8Array || e instanceof DataView || e instanceof nt) {
                    r === void 0 && (r = e.byteLength - t), (t += e.byteOffset) + r > e.byteOffset + e.byteLength && Ae("Creating view outside of available memory in ArrayBuffer");
                    let o = new DataView(e.buffer, t, r);
                    this._swapDataView(o)
                } else if (typeof e == "number") {
                    let o = new DataView(new ArrayBuffer(e));
                    this._swapDataView(o)
                } else Ae("Invalid input argument for BufferView: " + e)
            }
            _swapArrayBuffer(e) {
                this._swapDataView(new DataView(e))
            }
            _swapBuffer(e) {
                this._swapDataView(new DataView(e.buffer, e.byteOffset, e.byteLength))
            }
            _swapDataView(e) {
                this.dataView = e, this.buffer = e.buffer, this.byteOffset = e.byteOffset, this.byteLength = e.byteLength
            }
            _lengthToEnd(e) {
                return this.byteLength - e
            }
            set(e, t, r = nt) {
                return e instanceof DataView || e instanceof nt ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e instanceof ArrayBuffer && (e = new Uint8Array(e)), e instanceof Uint8Array || Ae("BufferView.set(): Invalid data argument."), this.toUint8().set(e, t), new r(this, t, e.byteLength)
            }
            subarray(e, t) {
                return t = t || this._lengthToEnd(e), new nt(this, e, t)
            }
            toUint8() {
                return new Uint8Array(this.buffer, this.byteOffset, this.byteLength)
            }
            getUint8Array(e, t) {
                return new Uint8Array(this.buffer, this.byteOffset + e, t)
            }
            getString(e = 0, t = this.byteLength) {
                return s = this.getUint8Array(e, t), Pf ? Pf.decode(s) : kf ? Buffer.from(s).toString("utf8") : decodeURIComponent(escape(ju(s)));
                var s
            }
            getLatin1String(e = 0, t = this.byteLength) {
                let r = this.getUint8Array(e, t);
                return ju(r)
            }
            getUnicodeString(e = 0, t = this.byteLength) {
                let r = [];
                for (let s = 0; s < t && e + s < this.byteLength; s += 2) r.push(this.getUint16(e + s));
                return ju(r)
            }
            getInt8(e) {
                return this.dataView.getInt8(e)
            }
            getUint8(e) {
                return this.dataView.getUint8(e)
            }
            getInt16(e, t = this.le) {
                return this.dataView.getInt16(e, t)
            }
            getInt32(e, t = this.le) {
                return this.dataView.getInt32(e, t)
            }
            getUint16(e, t = this.le) {
                return this.dataView.getUint16(e, t)
            }
            getUint32(e, t = this.le) {
                return this.dataView.getUint32(e, t)
            }
            getFloat32(e, t = this.le) {
                return this.dataView.getFloat32(e, t)
            }
            getFloat64(e, t = this.le) {
                return this.dataView.getFloat64(e, t)
            }
            getFloat(e, t = this.le) {
                return this.dataView.getFloat32(e, t)
            }
            getDouble(e, t = this.le) {
                return this.dataView.getFloat64(e, t)
            }
            getUintBytes(e, t, r) {
                switch (t) {
                    case 1:
                        return this.getUint8(e, r);
                    case 2:
                        return this.getUint16(e, r);
                    case 4:
                        return this.getUint32(e, r);
                    case 8:
                        return this.getUint64 && this.getUint64(e, r)
                }
            }
            getUint(e, t, r) {
                switch (t) {
                    case 8:
                        return this.getUint8(e, r);
                    case 16:
                        return this.getUint16(e, r);
                    case 32:
                        return this.getUint32(e, r);
                    case 64:
                        return this.getUint64 && this.getUint64(e, r)
                }
            }
            toString(e) {
                return this.dataView.toString(e, this.constructor.name)
            }
            ensureChunk() {}
        };
    n(nt, "c");

    function $u(i, e) {
        Ae(`${i} '${e}' was not loaded, try using full build of exifr.`)
    }
    n($u, "p");
    var Xs = class extends Map {
        constructor(e) {
            super(), this.kind = e
        }
        get(e, t) {
            return this.has(e) || $u(this.kind, e), t && (e in t || function(r, s) {
                Ae(`Unknown ${r} '${s}'.`)
            }(this.kind, e), t[e].enabled || $u(this.kind, e)), super.get(e)
        }
        keyList() {
            return Array.from(this.keys())
        }
    };
    n(Xs, "g");
    var Za = new Xs("file parser"),
        ft = new Xs("segment parser"),
        rn = new Xs("file reader"),
        R1 = Cf.fetch;

    function xf(i, e) {
        return (t = i).startsWith("data:") || t.length > 1e4 ? Vu(i, e, "base64") : Sf && i.includes("://") ? qu(i, e, "url", Ja) : Sf ? Vu(i, e, "fs") : Zo ? qu(i, e, "url", Ja) : void Ae("Invalid input argument");
        var t
    }
    n(xf, "k");
    async function qu(i, e, t, r) {
        return rn.has(t) ? Vu(i, e, t) : r ? async function(s, o) {
            let a = await o(s);
            return new nt(a)
        }(i, r) : void Ae(`Parser ${t} is not loaded`)
    }
    n(qu, "O");
    async function Vu(i, e, t) {
        let r = new(rn.get(t))(i, e);
        return await r.read(), r
    }
    n(Vu, "v");
    var Ja = n(i => R1(i).then(e => e.arrayBuffer()), "S"),
        en = n(i => new Promise((e, t) => {
            let r = new FileReader;
            r.onloadend = () => e(r.result || new ArrayBuffer), r.onerror = t, r.readAsArrayBuffer(i)
        }), "A"),
        Wa = class extends Map {
            get tagKeys() {
                return this.allKeys || (this.allKeys = Array.from(this.keys())), this.allKeys
            }
            get tagValues() {
                return this.allValues || (this.allValues = Array.from(this.values())), this.allValues
            }
        };
    n(Wa, "U");

    function Uf(i, e, t) {
        let r = new Wa;
        for (let [s, o] of t) r.set(s, o);
        if (Array.isArray(e))
            for (let s of e) i.set(s, r);
        else i.set(e, r);
        return r
    }
    n(Uf, "x");

    function Df(i, e, t) {
        let r, s = i.get(e);
        for (r of t) s.set(r[0], r[1])
    }
    n(Df, "C");
    var sn = new Map,
        Wu = new Map,
        Ku = new Map,
        Vs = ["chunked", "firstChunkSize", "firstChunkSizeNode", "firstChunkSizeBrowser", "chunkSize", "chunkLimit"],
        el = ["jfif", "xmp", "icc", "iptc", "ihdr"],
        tn = ["tiff", ...el],
        Se = ["ifd0", "ifd1", "exif", "gps", "interop"],
        Ws = [...tn, ...Se],
        Ks = ["makerNote", "userComment"],
        tl = ["translateKeys", "translateValues", "reviveValues", "multiSegment"],
        Gs = [...tl, "sanitize", "mergeOutput", "silentErrors"],
        Jo = class {
            get translate() {
                return this.translateKeys || this.translateValues || this.reviveValues
            }
        };
    n(Jo, "_");
    var hr = class extends Jo {
        get needed() {
            return this.enabled || this.deps.size > 0
        }
        constructor(e, t, r, s) {
            if (super(), ne(this, "enabled", !1), ne(this, "skip", new Set), ne(this, "pick", new Set), ne(this, "deps", new Set), ne(this, "translateKeys", !1), ne(this, "translateValues", !1), ne(this, "reviveValues", !1), this.key = e, this.enabled = t, this.parse = this.enabled, this.applyInheritables(s), this.canBeFiltered = Se.includes(e), this.canBeFiltered && (this.dict = sn.get(e)), r !== void 0)
                if (Array.isArray(r)) this.parse = this.enabled = !0, this.canBeFiltered && r.length > 0 && this.translateTagSet(r, this.pick);
                else if (typeof r == "object") {
                    if (this.enabled = !0, this.parse = r.parse !== !1, this.canBeFiltered) {
                        let {
                            pick: o,
                            skip: a
                        } = r;
                        o && o.length > 0 && this.translateTagSet(o, this.pick), a && a.length > 0 && this.translateTagSet(a, this.skip)
                    }
                    this.applyInheritables(r)
                } else r === !0 || r === !1 ? this.parse = this.enabled = r : Ae(`Invalid options argument: ${r}`)
        }
        applyInheritables(e) {
            let t, r;
            for (t of tl) r = e[t], r !== void 0 && (this[t] = r)
        }
        translateTagSet(e, t) {
            if (this.dict) {
                let r, s, {
                    tagKeys: o,
                    tagValues: a
                } = this.dict;
                for (r of e) typeof r == "string" ? (s = a.indexOf(r), s === -1 && (s = o.indexOf(Number(r))), s !== -1 && t.add(Number(o[s]))) : t.add(r)
            } else
                for (let r of e) t.add(r)
        }
        finalizeFilters() {
            !this.enabled && this.deps.size > 0 ? (this.enabled = !0, Qa(this.pick, this.deps)) : this.enabled && this.pick.size > 0 && Qa(this.pick, this.deps)
        }
    };
    n(hr, "D");
    var Ge = {
            jfif: !1,
            tiff: !0,
            xmp: !1,
            icc: !1,
            iptc: !1,
            ifd0: !0,
            ifd1: !1,
            exif: !0,
            gps: !0,
            interop: !1,
            ihdr: void 0,
            makerNote: !1,
            userComment: !1,
            multiSegment: !1,
            skip: [],
            pick: [],
            translateKeys: !0,
            translateValues: !0,
            reviveValues: !0,
            sanitize: !0,
            mergeOutput: !0,
            silentErrors: !0,
            chunked: !0,
            firstChunkSize: void 0,
            firstChunkSizeNode: 512,
            firstChunkSizeBrowser: 65536,
            chunkSize: 65536,
            chunkLimit: 5
        },
        Ff = new Map,
        cr = class extends Jo {
            static useCached(e) {
                let t = Ff.get(e);
                return t !== void 0 || (t = new this(e), Ff.set(e, t)), t
            }
            constructor(e) {
                super(), e === !0 ? this.setupFromTrue() : e === void 0 ? this.setupFromUndefined() : Array.isArray(e) ? this.setupFromArray(e) : typeof e == "object" ? this.setupFromObject(e) : Ae(`Invalid options argument ${e}`), this.firstChunkSize === void 0 && (this.firstChunkSize = Zo ? this.firstChunkSizeBrowser : this.firstChunkSizeNode), this.mergeOutput && (this.ifd1.enabled = !1), this.filterNestedSegmentTags(), this.traverseTiffDependencyTree(), this.checkLoadedPlugins()
            }
            setupFromUndefined() {
                let e;
                for (e of Vs) this[e] = Ge[e];
                for (e of Gs) this[e] = Ge[e];
                for (e of Ks) this[e] = Ge[e];
                for (e of Ws) this[e] = new hr(e, Ge[e], void 0, this)
            }
            setupFromTrue() {
                let e;
                for (e of Vs) this[e] = Ge[e];
                for (e of Gs) this[e] = Ge[e];
                for (e of Ks) this[e] = !0;
                for (e of Ws) this[e] = new hr(e, !0, void 0, this)
            }
            setupFromArray(e) {
                let t;
                for (t of Vs) this[t] = Ge[t];
                for (t of Gs) this[t] = Ge[t];
                for (t of Ks) this[t] = Ge[t];
                for (t of Ws) this[t] = new hr(t, !1, void 0, this);
                this.setupGlobalFilters(e, void 0, Se)
            }
            setupFromObject(e) {
                let t;
                for (t of (Se.ifd0 = Se.ifd0 || Se.image, Se.ifd1 = Se.ifd1 || Se.thumbnail, Object.assign(this, e), Vs)) this[t] = Hu(e[t], Ge[t]);
                for (t of Gs) this[t] = Hu(e[t], Ge[t]);
                for (t of Ks) this[t] = Hu(e[t], Ge[t]);
                for (t of tn) this[t] = new hr(t, Ge[t], e[t], this);
                for (t of Se) this[t] = new hr(t, Ge[t], e[t], this.tiff);
                this.setupGlobalFilters(e.pick, e.skip, Se, Ws), e.tiff === !0 ? this.batchEnableWithBool(Se, !0) : e.tiff === !1 ? this.batchEnableWithUserValue(Se, e) : Array.isArray(e.tiff) ? this.setupGlobalFilters(e.tiff, void 0, Se) : typeof e.tiff == "object" && this.setupGlobalFilters(e.tiff.pick, e.tiff.skip, Se)
            }
            batchEnableWithBool(e, t) {
                for (let r of e) this[r].enabled = t
            }
            batchEnableWithUserValue(e, t) {
                for (let r of e) {
                    let s = t[r];
                    this[r].enabled = s !== !1 && s !== void 0
                }
            }
            setupGlobalFilters(e, t, r, s = r) {
                if (e && e.length) {
                    for (let a of s) this[a].enabled = !1;
                    let o = Ef(e, r);
                    for (let [a, l] of o) Qa(this[a].pick, l), this[a].enabled = !0
                } else if (t && t.length) {
                    let o = Ef(t, r);
                    for (let [a, l] of o) Qa(this[a].skip, l)
                }
            }
            filterNestedSegmentTags() {
                let {
                    ifd0: e,
                    exif: t,
                    xmp: r,
                    iptc: s,
                    icc: o
                } = this;
                this.makerNote ? t.deps.add(37500) : t.skip.add(37500), this.userComment ? t.deps.add(37510) : t.skip.add(37510), r.enabled || e.skip.add(700), s.enabled || e.skip.add(33723), o.enabled || e.skip.add(34675)
            }
            traverseTiffDependencyTree() {
                let {
                    ifd0: e,
                    exif: t,
                    gps: r,
                    interop: s
                } = this;
                s.needed && (t.deps.add(40965), e.deps.add(40965)), t.needed && e.deps.add(34665), r.needed && e.deps.add(34853), this.tiff.enabled = Se.some(o => this[o].enabled === !0) || this.makerNote || this.userComment;
                for (let o of Se) this[o].finalizeFilters()
            }
            get onlyTiff() {
                return !el.map(e => this[e].enabled).some(e => e === !0) && this.tiff.enabled
            }
            checkLoadedPlugins() {
                for (let e of tn) this[e].enabled && !ft.has(e) && $u("segment parser", e)
            }
        };
    n(cr, "R");

    function Ef(i, e) {
        let t, r, s, o, a = [];
        for (s of e) {
            for (o of (t = sn.get(s), r = [], t))(i.includes(o[0]) || i.includes(o[1])) && r.push(o[0]);
            r.length && a.push([s, r])
        }
        return a
    }
    n(Ef, "K");

    function Hu(i, e) {
        return i !== void 0 ? i : e !== void 0 ? e : void 0
    }
    n(Hu, "W");

    function Qa(i, e) {
        for (let t of e) i.add(t)
    }
    n(Qa, "X");
    ne(cr, "default", Ge);
    var jr = class {
        constructor(e) {
            ne(this, "parsers", {}), ne(this, "output", {}), ne(this, "errors", []), ne(this, "pushToErrors", t => this.errors.push(t)), this.options = cr.useCached(e)
        }
        async read(e) {
            this.file = await
                function(t, r) {
                    return typeof t == "string" ? xf(t, r) : Zo && !E1 && t instanceof HTMLImageElement ? xf(t.src, r) : t instanceof Uint8Array || t instanceof ArrayBuffer || t instanceof DataView ? new nt(t) : Zo && t instanceof Blob ? qu(t, r, "blob", en) : void Ae("Invalid input argument")
                }(e, this.options)
        }
        setup() {
            if (this.fileParser) return;
            let {
                file: e
            } = this, t = e.getUint16(0);
            for (let [r, s] of Za)
                if (s.canHandle(e, t)) return this.fileParser = new s(this.options, this.file, this.parsers), e[r] = !0;
            this.file.close && this.file.close(), Ae("Unknown file format")
        }
        async parse() {
            let {
                output: e,
                errors: t
            } = this;
            return this.setup(), this.options.silentErrors ? (await this.executeParsers().catch(this.pushToErrors), t.push(...this.fileParser.errors)) : await this.executeParsers(), this.file.close && this.file.close(), this.options.silentErrors && t.length > 0 && (e.errors = t), Af(r = e) ? void 0 : r;
            var r
        }
        async executeParsers() {
            let {
                output: e
            } = this;
            await this.fileParser.parse();
            let t = Object.values(this.parsers).map(async r => {
                let s = await r.parse();
                r.assignToOutput(e, s)
            });
            this.options.silentErrors && (t = t.map(r => r.catch(this.pushToErrors))), await Promise.all(t)
        }
        async extractThumbnail() {
            this.setup();
            let {
                options: e,
                file: t
            } = this, r = ft.get("tiff", e);
            var s;
            if (t.tiff ? s = {
                start: 0,
                type: "tiff"
            } : t.jpeg && (s = await this.fileParser.getOrFindSegment("tiff")), s === void 0) return;
            let o = await this.fileParser.ensureSegmentChunk(s),
                a = this.parsers.tiff = new r(o, e, t),
                l = await a.extractThumbnail();
            return t.close && t.close(), l
        }
    };
    n(jr, "H");
    async function Nf(i, e) {
        let t = new jr(e);
        return await t.read(i), t.parse()
    }
    n(Nf, "Y");
    var C1 = Object.freeze({
            __proto__: null,
            parse: Nf,
            Exifr: jr,
            fileParsers: Za,
            segmentParsers: ft,
            fileReaders: rn,
            tagKeys: sn,
            tagValues: Wu,
            tagRevivers: Ku,
            createDictionary: Uf,
            extendDictionary: Df,
            fetchUrlAsArrayBuffer: Ja,
            readBlobAsArrayBuffer: en,
            chunkedProps: Vs,
            otherSegments: el,
            segments: tn,
            tiffBlocks: Se,
            segmentsAndBlocks: Ws,
            tiffExtractables: Ks,
            inheritables: tl,
            allFormatters: Gs,
            Options: cr
        }),
        Ii = class {
            static findPosition(e, t) {
                let r = e.getUint16(t + 2) + 2,
                    s = typeof this.headerLength == "function" ? this.headerLength(e, t, r) : this.headerLength,
                    o = t + s,
                    a = r - s;
                return {
                    offset: t,
                    length: r,
                    headerLength: s,
                    start: o,
                    size: a,
                    end: o + a
                }
            }
            static parse(e, t = {}) {
                return new this(e, new cr({
                    [this.type]: t
                }), e).parse()
            }
            normalizeInput(e) {
                return e instanceof nt ? e : new nt(e)
            }
            constructor(e, t = {}, r) {
                ne(this, "errors", []), ne(this, "raw", new Map), ne(this, "handleError", s => {
                    if (!this.options.silentErrors) throw s;
                    this.errors.push(s.message)
                }), this.chunk = this.normalizeInput(e), this.file = r, this.type = this.constructor.type, this.globalOptions = this.options = t, this.localOptions = t[this.type], this.canTranslate = this.localOptions && this.localOptions.translate
            }
            translate() {
                this.canTranslate && (this.translated = this.translateBlock(this.raw, this.type))
            }
            get output() {
                return this.translated ? this.translated : this.raw ? Object.fromEntries(this.raw) : void 0
            }
            translateBlock(e, t) {
                let r = Ku.get(t),
                    s = Wu.get(t),
                    o = sn.get(t),
                    a = this.options[t],
                    l = a.reviveValues && !!r,
                    h = a.translateValues && !!s,
                    c = a.translateKeys && !!o,
                    d = {};
                for (let [f, y] of e) l && r.has(f) ? y = r.get(f)(y) : h && s.has(f) && (y = this.translateValue(y, s.get(f))), c && o.has(f) && (f = o.get(f) || f), d[f] = y;
                return d
            }
            translateValue(e, t) {
                return t[e] || t.DEFAULT || e
            }
            assignToOutput(e, t) {
                this.assignObjectToOutput(e, this.constructor.type, t)
            }
            assignObjectToOutput(e, t, r) {
                if (this.globalOptions.mergeOutput) return Object.assign(e, r);
                e[t] ? Object.assign(e[t], r) : e[t] = r
            }
        };
    n(Ii, "J");
    ne(Ii, "headerLength", 4), ne(Ii, "type", void 0), ne(Ii, "multiSegment", !1), ne(Ii, "canHandle", () => !1);

    function T1(i) {
        return i === 192 || i === 194 || i === 196 || i === 219 || i === 221 || i === 218 || i === 254
    }
    n(T1, "q");

    function k1(i) {
        return i >= 224 && i <= 239
    }
    n(k1, "Q");

    function A1(i, e, t) {
        for (let [r, s] of ft)
            if (s.canHandle(i, e, t)) return r
    }
    n(A1, "Z");
    var Qo = class extends class {
        constructor(e, t, r) {
            ne(this, "errors", []), ne(this, "ensureSegmentChunk", async s => {
                let o = s.start,
                    a = s.size || 65536;
                if (this.file.chunked)
                    if (this.file.available(o, a)) s.chunk = this.file.subarray(o, a);
                    else try {
                        s.chunk = await this.file.readChunk(o, a)
                    } catch (l) {
                        Ae(`Couldn't read segment: ${JSON.stringify(s)}. ${l.message}`)
                    } else this.file.byteLength > o + a ? s.chunk = this.file.subarray(o, a) : s.size === void 0 ? s.chunk = this.file.subarray(o) : Ae("Segment unreachable: " + JSON.stringify(s));
                return s.chunk
            }), this.extendOptions && this.extendOptions(e), this.options = e, this.file = t, this.parsers = r
        }
        injectSegment(e, t) {
            this.options[e].enabled && this.createParser(e, t)
        }
        createParser(e, t) {
            let r = new(ft.get(e))(t, this.options, this.file);
            return this.parsers[e] = r
        }
        createParsers(e) {
            for (let t of e) {
                let {
                    type: r,
                    chunk: s
                } = t, o = this.options[r];
                if (o && o.enabled) {
                    let a = this.parsers[r];
                    a && a.append || a || this.createParser(r, s)
                }
            }
        }
        async readSegments(e) {
            let t = e.map(this.ensureSegmentChunk);
            await Promise.all(t)
        }
    } {
        constructor(...e) {
            super(...e), ne(this, "appSegments", []), ne(this, "jpegSegments", []), ne(this, "unknownSegments", [])
        }
        static canHandle(e, t) {
            return t === 65496
        }
        async parse() {
            await this.findAppSegments(), await this.readSegments(this.appSegments), this.mergeMultiSegments(), this.createParsers(this.mergedAppSegments || this.appSegments)
        }
        setupSegmentFinderArgs(e) {
            e === !0 ? (this.findAll = !0, this.wanted = new Set(ft.keyList())) : (e = e === void 0 ? ft.keyList().filter(t => this.options[t].enabled) : e.filter(t => this.options[t].enabled && ft.has(t)), this.findAll = !1, this.remaining = new Set(e), this.wanted = new Set(e)), this.unfinishedMultiSegment = !1
        }
        async findAppSegments(e = 0, t) {
            this.setupSegmentFinderArgs(t);
            let {
                file: r,
                findAll: s,
                wanted: o,
                remaining: a
            } = this;
            if (!s && this.file.chunked && (s = Array.from(o).some(l => {
                let h = ft.get(l),
                    c = this.options[l];
                return h.multiSegment && c.multiSegment
            }), s && await this.file.readWhole()), e = this.findAppSegmentsInRange(e, r.byteLength), !this.options.onlyTiff && r.chunked) {
                let l = !1;
                for (; a.size > 0 && !l && (r.canReadNextChunk || this.unfinishedMultiSegment);) {
                    let {
                        nextChunkOffset: h
                    } = r, c = this.appSegments.some(d => !this.file.available(d.offset || d.start, d.length || d.size));
                    if (l = e > h && !c ? !await r.readNextChunk(e) : !await r.readNextChunk(h), (e = this.findAppSegmentsInRange(e, r.byteLength)) === void 0) return
                }
            }
        }
        findAppSegmentsInRange(e, t) {
            t -= 2;
            let r, s, o, a, l, h, {
                file: c,
                findAll: d,
                wanted: f,
                remaining: y,
                options: w
            } = this;
            for (; e < t; e++)
                if (c.getUint8(e) === 255) {
                    if (r = c.getUint8(e + 1), k1(r)) {
                        if (s = c.getUint16(e + 2), o = A1(c, e, s), o && f.has(o) && (a = ft.get(o), l = a.findPosition(c, e), h = w[o], l.type = o, this.appSegments.push(l), !d && (a.multiSegment && h.multiSegment ? (this.unfinishedMultiSegment = l.chunkNumber < l.chunkCount, this.unfinishedMultiSegment || y.delete(o)) : y.delete(o), y.size === 0))) break;
                        w.recordUnknownSegments && (l = Ii.findPosition(c, e), l.marker = r, this.unknownSegments.push(l)), e += s + 1
                    } else if (T1(r)) {
                        if (s = c.getUint16(e + 2), r === 218 && w.stopAfterSos !== !1) return;
                        w.recordJpegSegments && this.jpegSegments.push({
                            offset: e,
                            length: s,
                            marker: r
                        }), e += s + 1
                    }
                }
            return e
        }
        mergeMultiSegments() {
            if (!this.appSegments.some(t => t.multiSegment)) return;
            let e = function(t, r) {
                let s, o, a, l = new Map;
                for (let h = 0; h < t.length; h++) s = t[h], o = s[r], l.has(o) ? a = l.get(o) : l.set(o, a = []), a.push(s);
                return Array.from(l)
            }(this.appSegments, "type");
            this.mergedAppSegments = e.map(([t, r]) => {
                let s = ft.get(t, this.options);
                return s.handleMultiSegments ? {
                    type: t,
                    chunk: s.handleMultiSegments(r)
                } : r[0]
            })
        }
        getSegment(e) {
            return this.appSegments.find(t => t.type === e)
        }
        async getOrFindSegment(e) {
            let t = this.getSegment(e);
            return t === void 0 && (await this.findAppSegments(0, [e]), t = this.getSegment(e)), t
        }
    };
    n(Qo, "ee");
    ne(Qo, "type", "jpeg"), Za.set("jpeg", Qo);
    var U1 = [void 0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 4],
        Ka = class extends Ii {
            parseHeader() {
                var e = this.chunk.getUint16();
                e === 18761 ? this.le = !0 : e === 19789 && (this.le = !1), this.chunk.le = this.le, this.headerParsed = !0
            }
            parseTags(e, t, r = new Map) {
                let {
                    pick: s,
                    skip: o
                } = this.options[t];
                s = new Set(s);
                let a = s.size > 0,
                    l = o.size === 0,
                    h = this.chunk.getUint16(e);
                e += 2;
                for (let c = 0; c < h; c++) {
                    let d = this.chunk.getUint16(e);
                    if (a) {
                        if (s.has(d) && (r.set(d, this.parseTag(e, d, t)), s.delete(d), s.size === 0)) break
                    } else !l && o.has(d) || r.set(d, this.parseTag(e, d, t));
                    e += 12
                }
                return r
            }
            parseTag(e, t, r) {
                let {
                    chunk: s
                } = this, o = s.getUint16(e + 2), a = s.getUint32(e + 4), l = U1[o];
                if (l * a <= 4 ? e += 8 : e = s.getUint32(e + 8), (o < 1 || o > 13) && Ae(`Invalid TIFF value type. block: ${r.toUpperCase()}, tag: ${t.toString(16)}, type: ${o}, offset ${e}`), e > s.byteLength && Ae(`Invalid TIFF value offset. block: ${r.toUpperCase()}, tag: ${t.toString(16)}, type: ${o}, offset ${e} is outside of chunk size ${s.byteLength}`), o === 1) return s.getUint8Array(e, a);
                if (o === 2) return (h = function(c) {
                    for (; c.endsWith("\0");) c = c.slice(0, -1);
                    return c
                }(h = s.getString(e, a)).trim()) === "" ? void 0 : h;
                var h;
                if (o === 7) return s.getUint8Array(e, a);
                if (a === 1) return this.parseTagValue(o, e); {
                    let c = new(function(f) {
                            switch (f) {
                                case 1:
                                    return Uint8Array;
                                case 3:
                                    return Uint16Array;
                                case 4:
                                    return Uint32Array;
                                case 5:
                                    return Array;
                                case 6:
                                    return Int8Array;
                                case 8:
                                    return Int16Array;
                                case 9:
                                    return Int32Array;
                                case 10:
                                    return Array;
                                case 11:
                                    return Float32Array;
                                case 12:
                                    return Float64Array;
                                default:
                                    return Array
                            }
                        }(o))(a),
                        d = l;
                    for (let f = 0; f < a; f++) c[f] = this.parseTagValue(o, e), e += d;
                    return c
                }
            }
            parseTagValue(e, t) {
                let {
                    chunk: r
                } = this;
                switch (e) {
                    case 1:
                        return r.getUint8(t);
                    case 3:
                        return r.getUint16(t);
                    case 4:
                        return r.getUint32(t);
                    case 5:
                        return r.getUint32(t) / r.getUint32(t + 4);
                    case 6:
                        return r.getInt8(t);
                    case 8:
                        return r.getInt16(t);
                    case 9:
                        return r.getInt32(t);
                    case 10:
                        return r.getInt32(t) / r.getInt32(t + 4);
                    case 11:
                        return r.getFloat(t);
                    case 12:
                        return r.getDouble(t);
                    case 13:
                        return r.getUint32(t);
                    default:
                        Ae(`Invalid tiff type ${e}`)
                }
            }
        };
    n(Ka, "se");
    var Ys = class extends Ka {
        static canHandle(e, t) {
            return e.getUint8(t + 1) === 225 && e.getUint32(t + 4) === 1165519206 && e.getUint16(t + 8) === 0
        }
        async parse() {
            this.parseHeader();
            let {
                options: e
            } = this;
            return e.ifd0.enabled && await this.parseIfd0Block(), e.exif.enabled && await this.safeParse("parseExifBlock"), e.gps.enabled && await this.safeParse("parseGpsBlock"), e.interop.enabled && await this.safeParse("parseInteropBlock"), e.ifd1.enabled && await this.safeParse("parseThumbnailBlock"), this.createOutput()
        }
        safeParse(e) {
            let t = this[e]();
            return t.catch !== void 0 && (t = t.catch(this.handleError)), t
        }
        findIfd0Offset() {
            this.ifd0Offset === void 0 && (this.ifd0Offset = this.chunk.getUint32(4))
        }
        findIfd1Offset() {
            if (this.ifd1Offset === void 0) {
                this.findIfd0Offset();
                let e = this.chunk.getUint16(this.ifd0Offset),
                    t = this.ifd0Offset + 2 + 12 * e;
                this.ifd1Offset = this.chunk.getUint32(t)
            }
        }
        parseBlock(e, t) {
            let r = new Map;
            return this[t] = r, this.parseTags(e, t, r), r
        }
        async parseIfd0Block() {
            if (this.ifd0) return;
            let {
                file: e
            } = this;
            this.findIfd0Offset(), this.ifd0Offset < 8 && Ae("Malformed EXIF data"), !e.chunked && this.ifd0Offset > e.byteLength && Ae(`IFD0 offset points to outside of file.
this.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e.byteLength}`), e.tiff && await e.ensureChunk(this.ifd0Offset, _f(this.options));
            let t = this.parseBlock(this.ifd0Offset, "ifd0");
            return t.size !== 0 ? (this.exifOffset = t.get(34665), this.interopOffset = t.get(40965), this.gpsOffset = t.get(34853), this.xmp = t.get(700), this.iptc = t.get(33723), this.icc = t.get(34675), this.options.sanitize && (t.delete(34665), t.delete(40965), t.delete(34853), t.delete(700), t.delete(33723), t.delete(34675)), t) : void 0
        }
        async parseExifBlock() {
            if (this.exif || (this.ifd0 || await this.parseIfd0Block(), this.exifOffset === void 0)) return;
            this.file.tiff && await this.file.ensureChunk(this.exifOffset, _f(this.options));
            let e = this.parseBlock(this.exifOffset, "exif");
            return this.interopOffset || (this.interopOffset = e.get(40965)), this.makerNote = e.get(37500), this.userComment = e.get(37510), this.options.sanitize && (e.delete(40965), e.delete(37500), e.delete(37510)), this.unpack(e, 41728), this.unpack(e, 41729), e
        }
        unpack(e, t) {
            let r = e.get(t);
            r && r.length === 1 && e.set(t, r[0])
        }
        async parseGpsBlock() {
            if (this.gps || (this.ifd0 || await this.parseIfd0Block(), this.gpsOffset === void 0)) return;
            let e = this.parseBlock(this.gpsOffset, "gps");
            return e && e.has(2) && e.has(4) && (e.set("latitude", Of(...e.get(2), e.get(1))), e.set("longitude", Of(...e.get(4), e.get(3)))), e
        }
        async parseInteropBlock() {
            if (!this.interop && (this.ifd0 || await this.parseIfd0Block(), this.interopOffset !== void 0 || this.exif || await this.parseExifBlock(), this.interopOffset !== void 0)) return this.parseBlock(this.interopOffset, "interop")
        }
        async parseThumbnailBlock(e = !1) {
            if (!this.ifd1 && !this.ifd1Parsed && (!this.options.mergeOutput || e)) return this.findIfd1Offset(), this.ifd1Offset > 0 && (this.parseBlock(this.ifd1Offset, "ifd1"), this.ifd1Parsed = !0), this.ifd1
        }
        async extractThumbnail() {
            if (this.headerParsed || this.parseHeader(), this.ifd1Parsed || await this.parseThumbnailBlock(!0), this.ifd1 === void 0) return;
            let e = this.ifd1.get(513),
                t = this.ifd1.get(514);
            return this.chunk.getUint8Array(e, t)
        }
        get image() {
            return this.ifd0
        }
        get thumbnail() {
            return this.ifd1
        }
        createOutput() {
            let e, t, r, s = {};
            for (t of Se)
                if (e = this[t], !Af(e))
                    if (r = this.canTranslate ? this.translateBlock(e, t) : Object.fromEntries(e), this.options.mergeOutput) {
                        if (t === "ifd1") continue;
                        Object.assign(s, r)
                    } else s[t] = r;
            return this.makerNote && (s.makerNote = this.makerNote), this.userComment && (s.userComment = this.userComment), s
        }
        assignToOutput(e, t) {
            if (this.globalOptions.mergeOutput) Object.assign(e, t);
            else
                for (let [r, s] of Object.entries(t)) this.assignObjectToOutput(e, r, s)
        }
    };
    n(Ys, "ie");

    function Of(i, e, t, r) {
        var s = i + e / 60 + t / 3600;
        return r !== "S" && r !== "W" || (s *= -1), s
    }
    n(Of, "ne");
    ne(Ys, "type", "tiff"), ne(Ys, "headerLength", 10), ft.set("tiff", Ys);
    var fO = Object.freeze({
            __proto__: null,
            default: C1,
            Exifr: jr,
            fileParsers: Za,
            segmentParsers: ft,
            fileReaders: rn,
            tagKeys: sn,
            tagValues: Wu,
            tagRevivers: Ku,
            createDictionary: Uf,
            extendDictionary: Df,
            fetchUrlAsArrayBuffer: Ja,
            readBlobAsArrayBuffer: en,
            chunkedProps: Vs,
            otherSegments: el,
            segments: tn,
            tiffBlocks: Se,
            segmentsAndBlocks: Ws,
            tiffExtractables: Ks,
            inheritables: tl,
            allFormatters: Gs,
            Options: cr,
            parse: Nf
        }),
        Gu = {
            ifd0: !1,
            ifd1: !1,
            exif: !1,
            gps: !1,
            interop: !1,
            sanitize: !1,
            reviveValues: !0,
            translateKeys: !1,
            translateValues: !1,
            mergeOutput: !1
        },
        mO = Object.assign({}, Gu, {
            firstChunkSize: 4e4,
            gps: [1, 2, 3, 4]
        });
    var gO = Object.assign({}, Gu, {
        tiff: !1,
        ifd1: !0,
        mergeOutput: !1
    });
    var D1 = Object.assign({}, Gu, {
        firstChunkSize: 4e4,
        ifd0: [274]
    });
    async function N1(i) {
        let e = new jr(D1);
        await e.read(i);
        let t = await e.parse();
        if (t && t.ifd0) return t.ifd0[274]
    }
    n(N1, "ce");
    var B1 = Object.freeze({
            1: {
                dimensionSwapped: !1,
                scaleX: 1,
                scaleY: 1,
                deg: 0,
                rad: 0
            },
            2: {
                dimensionSwapped: !1,
                scaleX: -1,
                scaleY: 1,
                deg: 0,
                rad: 0
            },
            3: {
                dimensionSwapped: !1,
                scaleX: 1,
                scaleY: 1,
                deg: 180,
                rad: 180 * Math.PI / 180
            },
            4: {
                dimensionSwapped: !1,
                scaleX: -1,
                scaleY: 1,
                deg: 180,
                rad: 180 * Math.PI / 180
            },
            5: {
                dimensionSwapped: !0,
                scaleX: 1,
                scaleY: -1,
                deg: 90,
                rad: 90 * Math.PI / 180
            },
            6: {
                dimensionSwapped: !0,
                scaleX: 1,
                scaleY: 1,
                deg: 90,
                rad: 90 * Math.PI / 180
            },
            7: {
                dimensionSwapped: !0,
                scaleX: 1,
                scaleY: -1,
                deg: 270,
                rad: 270 * Math.PI / 180
            },
            8: {
                dimensionSwapped: !0,
                scaleX: 1,
                scaleY: 1,
                deg: 270,
                rad: 270 * Math.PI / 180
            }
        }),
        Xo = !0,
        Yo = !0;
    if (typeof navigator == "object") {
        let i = navigator.userAgent;
        if (i.includes("iPad") || i.includes("iPhone")) {
            let e = i.match(/OS (\d+)_(\d+)/);
            if (e) {
                let [, t, r] = e;
                Xo = Number(t) + .1 * Number(r) < 13.4, Yo = !1
            }
        } else if (i.includes("OS X 10")) {
            let [, e] = i.match(/OS X 10[_.](\d+)/);
            Xo = Yo = Number(e) < 15
        }
        if (i.includes("Chrome/")) {
            let [, e] = i.match(/Chrome\/(\d+)/);
            Xo = Yo = Number(e) < 81
        } else if (i.includes("Firefox/")) {
            let [, e] = i.match(/Firefox\/(\d+)/);
            Xo = Yo = Number(e) < 77
        }
    }
    async function Bf(i) {
        let e = await N1(i);
        return Object.assign({
            canvas: Xo,
            css: Yo
        }, B1[e])
    }
    n(Bf, "ye");
    var Ga = class extends nt {
        constructor(...e) {
            super(...e), ne(this, "ranges", new Xa), this.byteLength !== 0 && this.ranges.add(0, this.byteLength)
        }
        _tryExtend(e, t, r) {
            if (e === 0 && this.byteLength === 0 && r) {
                let s = new DataView(r.buffer || r, r.byteOffset, r.byteLength);
                this._swapDataView(s)
            } else {
                let s = e + t;
                if (s > this.byteLength) {
                    let {
                        dataView: o
                    } = this._extend(s);
                    this._swapDataView(o)
                }
            }
        }
        _extend(e) {
            let t;
            t = kf ? Tf.allocUnsafe(e) : new Uint8Array(e);
            let r = new DataView(t.buffer, t.byteOffset, t.byteLength);
            return t.set(new Uint8Array(this.buffer, this.byteOffset, this.byteLength), 0), {
                uintView: t,
                dataView: r
            }
        }
        subarray(e, t, r = !1) {
            return t = t || this._lengthToEnd(e), r && this._tryExtend(e, t), this.ranges.add(e, t), super.subarray(e, t)
        }
        set(e, t, r = !1) {
            r && this._tryExtend(t, e.byteLength, e);
            let s = super.set(e, t);
            return this.ranges.add(t, s.byteLength), s
        }
        async ensureChunk(e, t) {
            this.chunked && (this.ranges.available(e, t) || await this.readChunk(e, t))
        }
        available(e, t) {
            return this.ranges.available(e, t)
        }
    };
    n(Ga, "be");
    var Xa = class {
        constructor() {
            ne(this, "list", [])
        }
        get length() {
            return this.list.length
        }
        add(e, t, r = 0) {
            let s = e + t,
                o = this.list.filter(a => Rf(e, a.offset, s) || Rf(e, a.end, s));
            if (o.length > 0) {
                e = Math.min(e, ...o.map(l => l.offset)), s = Math.max(s, ...o.map(l => l.end)), t = s - e;
                let a = o.shift();
                a.offset = e, a.length = t, a.end = s, this.list = this.list.filter(l => !o.includes(l))
            } else this.list.push({
                offset: e,
                length: t,
                end: s
            })
        }
        available(e, t) {
            let r = e + t;
            return this.list.some(s => s.offset <= e && r <= s.end)
        }
    };
    n(Xa, "we");

    function Rf(i, e, t) {
        return i <= e && e <= t
    }
    n(Rf, "ke");
    var Ya = class extends Ga {
        constructor(e, t) {
            super(0), ne(this, "chunksRead", 0), this.input = e, this.options = t
        }
        async readWhole() {
            this.chunked = !1, await this.readChunk(this.nextChunkOffset)
        }
        async readChunked() {
            this.chunked = !0, await this.readChunk(0, this.options.firstChunkSize)
        }
        async readNextChunk(e = this.nextChunkOffset) {
            if (this.fullyRead) return this.chunksRead++, !1;
            let t = this.options.chunkSize,
                r = await this.readChunk(e, t);
            return !!r && r.byteLength === t
        }
        async readChunk(e, t) {
            if (this.chunksRead++, (t = this.safeWrapAddress(e, t)) !== 0) return this._readChunk(e, t)
        }
        safeWrapAddress(e, t) {
            return this.size !== void 0 && e + t > this.size ? Math.max(0, this.size - e) : t
        }
        get nextChunkOffset() {
            if (this.ranges.list.length !== 0) return this.ranges.list[0].length
        }
        get canReadNextChunk() {
            return this.chunksRead < this.options.chunkLimit
        }
        get fullyRead() {
            return this.size !== void 0 && this.nextChunkOffset === this.size
        }
        read() {
            return this.options.chunked ? this.readChunked() : this.readWhole()
        }
        close() {}
    };
    n(Ya, "Oe");
    rn.set("blob", class extends Ya {
        async readWhole() {
            this.chunked = !1;
            let i = await en(this.input);
            this._swapArrayBuffer(i)
        }
        readChunked() {
            return this.chunked = !0, this.size = this.input.size, super.readChunked()
        }
        async _readChunk(i, e) {
            let t = e ? i + e : void 0,
                r = this.input.slice(i, t),
                s = await en(r);
            return this.set(s, i, !0)
        }
    });
    var If = {
        strings: {
            generatingThumbnails: "Generating thumbnails..."
        }
    };
    var I1 = {
        version: "3.0.2"
    };

    function L1(i, e, t) {
        try {
            i.getContext("2d").getImageData(0, 0, 1, 1)
        } catch (r) {
            if (r.code === 18) return Promise.reject(new Error("cannot read image, probably an svg with external resources"))
        }
        return i.toBlob ? new Promise(r => {
            i.toBlob(r, e, t)
        }).then(r => {
            if (r === null) throw new Error("cannot read image, probably an svg with external resources");
            return r
        }) : Promise.resolve().then(() => zu(i.toDataURL(e, t), {})).then(r => {
            if (r === null) throw new Error("could not extract blob, probably an old browser");
            return r
        })
    }
    n(L1, "canvasToBlob");

    function M1(i, e) {
        let t = i.width,
            r = i.height;
        (e.deg === 90 || e.deg === 270) && (t = i.height, r = i.width);
        let s = document.createElement("canvas");
        s.width = t, s.height = r;
        let o = s.getContext("2d");
        return o.translate(t / 2, r / 2), e.canvas && (o.rotate(e.rad), o.scale(e.scaleX, e.scaleY)), o.drawImage(i, -i.width / 2, -i.height / 2, i.width, i.height), s
    }
    n(M1, "rotateImage");

    function z1(i) {
        let e = i.width / i.height,
            t = 5e6,
            r = 4096,
            s = Math.floor(Math.sqrt(t * e)),
            o = Math.floor(t / Math.sqrt(t * e));
        if (s > r && (s = r, o = Math.round(s / e)), o > r && (o = r, s = Math.round(e * o)), i.width > s) {
            let a = document.createElement("canvas");
            return a.width = s, a.height = o, a.getContext("2d").drawImage(i, 0, 0, s, o), a
        }
        return i
    }
    n(z1, "protect");
    var Li = class extends V {
        constructor(e, t) {
            super(e, t), this.onFileAdded = s => {
                !s.preview && s.data && Hs(s.type) && !s.isRemote && this.addToQueue(s.id)
            }, this.onCancelRequest = s => {
                let o = this.queue.indexOf(s.id);
                o !== -1 && this.queue.splice(o, 1)
            }, this.onFileRemoved = s => {
                let o = this.queue.indexOf(s.id);
                o !== -1 && this.queue.splice(o, 1), s.preview && Va(s.preview) && URL.revokeObjectURL(s.preview)
            }, this.onRestored = () => {
                this.uppy.getFiles().filter(o => o.isRestored).forEach(o => {
                    (!o.preview || Va(o.preview)) && this.addToQueue(o.id)
                })
            }, this.onAllFilesRemoved = () => {
                this.queue = []
            }, this.waitUntilAllProcessed = s => {
                s.forEach(a => {
                    let l = this.uppy.getFile(a);
                    this.uppy.emit("preprocess-progress", l, {
                        mode: "indeterminate",
                        message: this.i18n("generatingThumbnails")
                    })
                });
                let o = n(() => {
                    s.forEach(a => {
                        let l = this.uppy.getFile(a);
                        this.uppy.emit("preprocess-complete", l)
                    })
                }, "emitPreprocessCompleteForAll");
                return new Promise(a => {
                    this.queueProcessing ? this.uppy.once("thumbnail:all-generated", () => {
                        o(), a()
                    }) : (o(), a())
                })
            }, this.type = "modifier", this.id = this.opts.id || "ThumbnailGenerator", this.title = "Thumbnail Generator", this.queue = [], this.queueProcessing = !1, this.defaultThumbnailDimension = 200, this.thumbnailType = this.opts.thumbnailType || "image/jpeg", this.defaultLocale = If;
            let r = {
                thumbnailWidth: null,
                thumbnailHeight: null,
                waitForThumbnailsBeforeUpload: !1,
                lazy: !1
            };
            if (this.opts = { ...r,
                ...t
            }, this.i18nInit(), this.opts.lazy && this.opts.waitForThumbnailsBeforeUpload) throw new Error("ThumbnailGenerator: The `lazy` and `waitForThumbnailsBeforeUpload` options are mutually exclusive. Please ensure at most one of them is set to `true`.")
        }
        createThumbnail(e, t, r) {
            let s = URL.createObjectURL(e.data),
                o = new Promise((l, h) => {
                    let c = new Image;
                    c.src = s, c.addEventListener("load", () => {
                        URL.revokeObjectURL(s), l(c)
                    }), c.addEventListener("error", d => {
                        URL.revokeObjectURL(s), h(d.error || new Error("Could not create thumbnail"))
                    })
                }),
                a = Bf(e.data).catch(() => 1);
            return Promise.all([o, a]).then(l => {
                let [h, c] = l, d = this.getProportionalDimensions(h, t, r, c.deg), f = M1(h, c), y = this.resizeImage(f, d.width, d.height);
                return L1(y, this.thumbnailType, 80)
            }).then(l => URL.createObjectURL(l))
        }
        getProportionalDimensions(e, t, r, s) {
            let o = e.width / e.height;
            return (s === 90 || s === 270) && (o = e.height / e.width), t != null ? {
                width: t,
                height: Math.round(t / o)
            } : r != null ? {
                width: Math.round(r * o),
                height: r
            } : {
                width: this.defaultThumbnailDimension,
                height: Math.round(this.defaultThumbnailDimension / o)
            }
        }
        resizeImage(e, t, r) {
            let s = z1(e),
                o = Math.ceil(Math.log2(s.width / t));
            o < 1 && (o = 1);
            let a = t * 2 ** (o - 1),
                l = r * 2 ** (o - 1),
                h = 2;
            for (; o--;) {
                let c = document.createElement("canvas");
                c.width = a, c.height = l, c.getContext("2d").drawImage(s, 0, 0, a, l), s = c, a = Math.round(a / h), l = Math.round(l / h)
            }
            return s
        }
        setPreviewURL(e, t) {
            this.uppy.setFileState(e, {
                preview: t
            })
        }
        addToQueue(e) {
            this.queue.push(e), this.queueProcessing === !1 && this.processQueue()
        }
        processQueue() {
            if (this.queueProcessing = !0, this.queue.length > 0) {
                let e = this.uppy.getFile(this.queue.shift());
                return e ? this.requestThumbnail(e).catch(() => {}).then(() => this.processQueue()) : (this.uppy.log("[ThumbnailGenerator] file was removed before a thumbnail could be generated, but not removed from the queue. This is probably a bug", "error"), Promise.resolve())
            }
            return this.queueProcessing = !1, this.uppy.log("[ThumbnailGenerator] Emptied thumbnail queue"), this.uppy.emit("thumbnail:all-generated"), Promise.resolve()
        }
        requestThumbnail(e) {
            return Hs(e.type) && !e.isRemote ? this.createThumbnail(e, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then(t => {
                this.setPreviewURL(e.id, t), this.uppy.log(`[ThumbnailGenerator] Generated thumbnail for ${e.id}`), this.uppy.emit("thumbnail:generated", this.uppy.getFile(e.id), t)
            }).catch(t => {
                this.uppy.log(`[ThumbnailGenerator] Failed thumbnail for ${e.id}:`, "warning"), this.uppy.log(t, "warning"), this.uppy.emit("thumbnail:error", this.uppy.getFile(e.id), t)
            }) : Promise.resolve()
        }
        install() {
            this.uppy.on("file-removed", this.onFileRemoved), this.uppy.on("cancel-all", this.onAllFilesRemoved), this.opts.lazy ? (this.uppy.on("thumbnail:request", this.onFileAdded), this.uppy.on("thumbnail:cancel", this.onCancelRequest)) : (this.uppy.on("file-added", this.onFileAdded), this.uppy.on("restored", this.onRestored)), this.opts.waitForThumbnailsBeforeUpload && this.uppy.addPreProcessor(this.waitUntilAllProcessed)
        }
        uninstall() {
            this.uppy.off("file-removed", this.onFileRemoved), this.uppy.off("cancel-all", this.onAllFilesRemoved), this.opts.lazy ? (this.uppy.off("thumbnail:request", this.onFileAdded), this.uppy.off("thumbnail:cancel", this.onCancelRequest)) : (this.uppy.off("file-added", this.onFileAdded), this.uppy.off("restored", this.onRestored)), this.opts.waitForThumbnailsBeforeUpload && this.uppy.removePreProcessor(this.waitUntilAllProcessed)
        }
    };
    n(Li, "ThumbnailGenerator");
    Li.VERSION = I1.version;

    function il(i) {
        if (typeof i == "string") {
            let e = document.querySelectorAll(i);
            return e.length === 0 ? null : Array.from(e)
        }
        return typeof i == "object" && No(i) ? [i] : null
    }
    n(il, "findAllDOMElements");
    var _e = Array.from;

    function rl(i, e, t, r) {
        let {
            onSuccess: s
        } = r;
        i.readEntries(o => {
            let a = [...e, ...o];
            o.length ? queueMicrotask(() => {
                rl(i, a, t, {
                    onSuccess: s
                })
            }) : s(a)
        }, o => {
            t(o), s(e)
        })
    }
    n(rl, "getFilesAndDirectoriesFromDirectory");

    function Lf(i, e) {
        return i == null ? i : {
            kind: i.isFile ? "file" : i.isDirectory ? "directory" : void 0,
            name: i.name,
            getFile() {
                return new Promise((t, r) => i.file(t, r))
            },
            async * values() {
                let t = i.createReader();
                yield* await new Promise(s => {
                    rl(t, [], e, {
                        onSuccess: o => s(o.map(a => Lf(a, e)))
                    })
                })
            }
        }
    }
    n(Lf, "getAsFileSystemHandleFromEntry");
    async function* Mf(i, e, t) {
        if (t === void 0 && (t = void 0), i.kind === "file") {
            let r = await i.getFile();
            r !== null ? (r.relativePath = e ? `${e}/${i.name}` : null, yield r) : t != null && (yield t)
        } else if (i.kind === "directory")
            for await (let r of i.values()) yield* Mf(r, `${e}/${i.name}`);
        else t != null && (yield t)
    }
    n(Mf, "createPromiseToAddFileOrParseDirectory");
    async function* Xu(i, e) {
        let entries = await Promise.all(Array.from(i.items, async item => {
            let lastResortFile = item.getAsFile();
            let entry;
            if (window.isSecureContext && item.getAsFileSystemHandle != null) entry = await item.getAsFileSystemHandle()
            entry ??= getAsFileSystemHandleFromEntry(item.webkitGetAsEntry(), logDropError)
            return {lastResortFile: lastResortFile, entry: entry}
        }));
        for (let {
            lastResortFile: r,
            entry: s
        } of entries)
            if (s != null) try {
                yield* Mf(s, "", r)
            } catch (o) {
                r != null ? yield r: e(o)
            } else r != null && (yield r)
    }
    n(Xu, "getFilesFromDataTransfer");

    function Yu(i) {
        let e = _e(i.files);
        return Promise.resolve(e)
    }
    n(Yu, "fallbackApi");
    async function Hr(i, e) {
        let {
            logDropError: t = n(() => {}, "logDropError")
        } = e === void 0 ? {} : e;
        try {
            let r = [];
            for await (let s of Xu(i, t)) r.push(s);
            return r
        } catch {
            return Yu(i)
        }
    }
    n(Hr, "getDroppedFiles");
    var zf = Number.isNaN || n(function(e) {
        return typeof e == "number" && e !== e
    }, "ponyfill");

    function j1(i, e) {
        return !!(i === e || zf(i) && zf(e))
    }
    n(j1, "isEqual");

    function H1(i, e) {
        if (i.length !== e.length) return !1;
        for (var t = 0; t < i.length; t++)
            if (!j1(i[t], e[t])) return !1;
        return !0
    }
    n(H1, "areInputsEqual");

    function Ju(i, e) {
        e === void 0 && (e = H1);
        var t = null;

        function r() {
            for (var s = [], o = 0; o < arguments.length; o++) s[o] = arguments[o];
            if (t && t.lastThis === this && e(s, t.lastArgs)) return t.lastResult;
            var a = i.apply(this, s);
            return t = {
                lastResult: a,
                lastArgs: s,
                lastThis: this
            }, a
        }
        return n(r, "memoized"), r.clear = n(function() {
            t = null
        }, "clear"), r
    }
    n(Ju, "memoizeOne");
    var sl = ['a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', "input:not([disabled]):not([inert]):not([aria-hidden])", "select:not([disabled]):not([inert]):not([aria-hidden])", "textarea:not([disabled]):not([inert]):not([aria-hidden])", "button:not([disabled]):not([inert]):not([aria-hidden])", 'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'object:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])'];

    function on(i, e) {
        if (e) {
            let t = i.querySelector(`[data-uppy-paneltype="${e}"]`);
            if (t) return t
        }
        return i
    }
    n(on, "getActiveOverlayEl");

    function jf(i, e) {
        let t = e[0];
        t && (t.focus(), i.preventDefault())
    }
    n(jf, "focusOnFirstNode");

    function $1(i, e) {
        let t = e[e.length - 1];
        t && (t.focus(), i.preventDefault())
    }
    n($1, "focusOnLastNode");

    function q1(i) {
        return i.contains(document.activeElement)
    }
    n(q1, "isFocusInOverlay");

    function Qu(i, e, t) {
        let r = on(t, e),
            s = _e(r.querySelectorAll(sl)),
            o = s.indexOf(document.activeElement);
        q1(r) ? i.shiftKey && o === 0 ? $1(i, s) : !i.shiftKey && o === s.length - 1 && jf(i, s) : jf(i, s)
    }
    n(Qu, "trapFocus");

    function Hf(i, e, t) {
        e === null || Qu(i, e, t)
    }
    n(Hf, "forInline");
    var Kf = oe(Wf(), 1);

    function th() {
        let i = !1;
        return (0, Kf.default)(n((t, r) => {
            let s = on(t, r),
                o = s.contains(document.activeElement);
            if (o && i) return;
            let a = s.querySelector("[data-uppy-super-focusable]");
            if (!(o && !a))
                if (a) a.focus({
                    preventScroll: !0
                }), i = !0;
                else {
                    let l = s.querySelector(sl);
                    l ?.focus({
                        preventScroll: !0
                    }), i = !1
                }
        }, "superFocus"), 260)
    }
    n(th, "createSuperFocus");
    var vm = oe(Tt(), 1);

    function nn() {
        let i = document.body;
        return !(!("draggable" in i) || !("ondragstart" in i && "ondrop" in i) || !("FormData" in window) || !("FileReader" in window))
    }
    n(nn, "isDragDropSupported");
    var em = oe(Tt(), 1),
        tm = oe(Xf(), 1);

    function uw() {
        return u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            width: "25",
            height: "25",
            viewBox: "0 0 25 25"
        }, u("g", {
            fill: "#686DE0",
            fillRule: "evenodd"
        }, u("path", {
            d: "M5 7v10h15V7H5zm0-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",
            fillRule: "nonzero"
        }), u("path", {
            d: "M6.35 17.172l4.994-5.026a.5.5 0 0 1 .707 0l2.16 2.16 3.505-3.505a.5.5 0 0 1 .707 0l2.336 2.31-.707.72-1.983-1.97-3.505 3.505a.5.5 0 0 1-.707 0l-2.16-2.159-3.938 3.939-1.409.026z",
            fillRule: "nonzero"
        }), u("circle", {
            cx: "7.5",
            cy: "9.5",
            r: "1.5"
        })))
    }
    n(uw, "iconImage");

    function hw() {
        return u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "25",
            height: "25",
            viewBox: "0 0 25 25"
        }, u("path", {
            d: "M9.5 18.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V7.25a.5.5 0 0 1 .379-.485l9-2.25A.5.5 0 0 1 18.5 5v11.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V8.67l-8 2v7.97zm8-11v-2l-8 2v2l8-2zM7 19.64c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1zm9-2c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1z",
            fill: "#049BCF",
            fillRule: "nonzero"
        }))
    }
    n(hw, "iconAudio");

    function cw() {
        return u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "25",
            height: "25",
            viewBox: "0 0 25 25"
        }, u("path", {
            d: "M16 11.834l4.486-2.691A1 1 0 0 1 22 10v6a1 1 0 0 1-1.514.857L16 14.167V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.834zM15 9H5v8h10V9zm1 4l5 3v-6l-5 3z",
            fill: "#19AF67",
            fillRule: "nonzero"
        }))
    }
    n(cw, "iconVideo");

    function dw() {
        return u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "25",
            height: "25",
            viewBox: "0 0 25 25"
        }, u("path", {
            d: "M9.766 8.295c-.691-1.843-.539-3.401.747-3.726 1.643-.414 2.505.938 2.39 3.299-.039.79-.194 1.662-.537 3.148.324.49.66.967 1.055 1.51.17.231.382.488.629.757 1.866-.128 3.653.114 4.918.655 1.487.635 2.192 1.685 1.614 2.84-.566 1.133-1.839 1.084-3.416.249-1.141-.604-2.457-1.634-3.51-2.707a13.467 13.467 0 0 0-2.238.426c-1.392 4.051-4.534 6.453-5.707 4.572-.986-1.58 1.38-4.206 4.914-5.375.097-.322.185-.656.264-1.001.08-.353.306-1.31.407-1.737-.678-1.059-1.2-2.031-1.53-2.91zm2.098 4.87c-.033.144-.068.287-.104.427l.033-.01-.012.038a14.065 14.065 0 0 1 1.02-.197l-.032-.033.052-.004a7.902 7.902 0 0 1-.208-.271c-.197-.27-.38-.526-.555-.775l-.006.028-.002-.003c-.076.323-.148.632-.186.8zm5.77 2.978c1.143.605 1.832.632 2.054.187.26-.519-.087-1.034-1.113-1.473-.911-.39-2.175-.608-3.55-.608.845.766 1.787 1.459 2.609 1.894zM6.559 18.789c.14.223.693.16 1.425-.413.827-.648 1.61-1.747 2.208-3.206-2.563 1.064-4.102 2.867-3.633 3.62zm5.345-10.97c.088-1.793-.351-2.48-1.146-2.28-.473.119-.564 1.05-.056 2.405.213.566.52 1.188.908 1.859.18-.858.268-1.453.294-1.984z",
            fill: "#E2514A",
            fillRule: "nonzero"
        }))
    }
    n(dw, "iconPDF");

    function pw() {
        return u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            width: "25",
            height: "25",
            viewBox: "0 0 25 25"
        }, u("path", {
            d: "M10.45 2.05h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V2.55a.5.5 0 0 1 .5-.5zm2.05 1.024h1.05a.5.5 0 0 1 .5.5V3.6a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5v-.001zM10.45 0h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 3.074h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 1.024h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm-2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-1.656 3.074l-.82 5.946c.52.302 1.174.458 1.976.458.803 0 1.455-.156 1.975-.458l-.82-5.946h-2.311zm0-1.025h2.312c.512 0 .946.378 1.015.885l.82 5.946c.056.412-.142.817-.501 1.026-.686.398-1.515.597-2.49.597-.974 0-1.804-.199-2.49-.597a1.025 1.025 0 0 1-.5-1.026l.819-5.946c.07-.507.503-.885 1.015-.885zm.545 6.6a.5.5 0 0 1-.397-.561l.143-.999a.5.5 0 0 1 .495-.429h.74a.5.5 0 0 1 .495.43l.143.998a.5.5 0 0 1-.397.561c-.404.08-.819.08-1.222 0z",
            fill: "#00C469",
            fillRule: "nonzero"
        }))
    }
    n(pw, "iconArchive");

    function fw() {
        return u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "25",
            height: "25",
            viewBox: "0 0 25 25"
        }, u("g", {
            fill: "#A7AFB7",
            fillRule: "nonzero"
        }, u("path", {
            d: "M5.5 22a.5.5 0 0 1-.5-.5v-18a.5.5 0 0 1 .5-.5h10.719a.5.5 0 0 1 .367.16l3.281 3.556a.5.5 0 0 1 .133.339V21.5a.5.5 0 0 1-.5.5h-14zm.5-1h13V7.25L16 4H6v17z"
        }), u("path", {
            d: "M15 4v3a1 1 0 0 0 1 1h3V7h-3V4h-1z"
        })))
    }
    n(fw, "iconFile");

    function mw() {
        return u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "25",
            height: "25",
            viewBox: "0 0 25 25"
        }, u("path", {
            d: "M4.5 7h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z",
            fill: "#5A5E69",
            fillRule: "nonzero"
        }))
    }
    n(mw, "iconText");

    function $r(i) {
        let e = {
            color: "#838999",
            icon: fw()
        };
        if (!i) return e;
        let t = i.split("/")[0],
            r = i.split("/")[1];
        return t === "text" ? {
            color: "#5a5e69",
            icon: mw()
        } : t === "image" ? {
            color: "#686de0",
            icon: uw()
        } : t === "audio" ? {
            color: "#068dbb",
            icon: hw()
        } : t === "video" ? {
            color: "#19af67",
            icon: cw()
        } : t === "application" && r === "pdf" ? {
            color: "#e25149",
            icon: dw()
        } : t === "application" && ["zip", "x-7z-compressed", "x-rar-compressed", "x-tar", "x-gzip", "x-apple-diskimage"].indexOf(r) !== -1 ? {
            color: "#00C469",
            icon: pw()
        } : e
    }
    n($r, "getIconByMime");

    function an(i) {
        let {
            file: e
        } = i;
        if (e.preview) return u("img", {
            className: "uppy-Dashboard-Item-previewImg",
            alt: e.name,
            src: e.preview
        });
        let {
            color: t,
            icon: r
        } = $r(e.type);
        return u("div", {
            className: "uppy-Dashboard-Item-previewIconWrap"
        }, u("span", {
            className: "uppy-Dashboard-Item-previewIcon",
            style: {
                color: t
            }
        }, r), u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-Dashboard-Item-previewIconBg",
            width: "58",
            height: "76",
            viewBox: "0 0 58 76"
        }, u("rect", {
            fill: "#FFF",
            width: "58",
            height: "76",
            rx: "3",
            fillRule: "evenodd"
        })))
    }
    n(an, "FilePreview");
    var gw = n((i, e) => (typeof e == "function" ? e() : e).filter(s => s.id === i)[0].name, "metaFieldIdToName");

    function ln(i) {
        let {
            file: e,
            toggleFileCard: t,
            i18n: r,
            metaFields: s
        } = i, {
            missingRequiredMetaFields: o
        } = e;
        if (!(o != null && o.length)) return null;
        let a = o.map(l => gw(l, s)).join(", ");
        return u("div", {
            className: "uppy-Dashboard-Item-errorMessage"
        }, r("missingRequiredMetaFields", {
            smart_count: o.length,
            fields: a
        }), " ", u("button", {
            type: "button",
            class: "uppy-u-reset uppy-Dashboard-Item-errorMessageBtn",
            onClick: () => t(!0, e.id)
        }, r("editFile")))
    }
    n(ln, "renderMissingMetaFieldsError");

    function ih(i) {
        return u("div", {
            className: "uppy-Dashboard-Item-previewInnerWrap",
            style: {
                backgroundColor: $r(i.file.type).color
            }
        }, i.showLinkToFileUploadResult && i.file.uploadURL && u("a", {
            className: "uppy-Dashboard-Item-previewLink",
            href: i.file.uploadURL,
            rel: "noreferrer noopener",
            target: "_blank",
            "aria-label": i.file.meta.name
        }, u("span", {
            hidden: !0
        }, i.file.meta.name)), u(an, {
            file: i.file
        }), u(ln, {
            file: i.file,
            i18n: i.i18n,
            toggleFileCard: i.toggleFileCard,
            metaFields: i.metaFields
        }))
    }
    n(ih, "FilePreviewAndLink");

    function yw(i) {
        if (!i.isUploaded) {
            if (i.error && !i.hideRetryButton) {
                i.uppy.retryUpload(i.file.id);
                return
            }
            i.resumableUploads && !i.hidePauseResumeButton ? i.uppy.pauseResume(i.file.id) : i.individualCancellation && !i.hideCancelButton && i.uppy.removeFile(i.file.id)
        }
    }
    n(yw, "onPauseResumeCancelRetry");

    function Yf(i) {
        return i.isUploaded ? i.i18n("uploadComplete") : i.error ? i.i18n("retryUpload") : i.resumableUploads ? i.file.isPaused ? i.i18n("resumeUpload") : i.i18n("pauseUpload") : i.individualCancellation ? i.i18n("cancelUpload") : ""
    }
    n(Yf, "progressIndicatorTitle");

    function rh(i) {
        return u("div", {
            className: "uppy-Dashboard-Item-progress"
        }, u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-progressIndicator",
            type: "button",
            "aria-label": Yf(i),
            title: Yf(i),
            onClick: () => yw(i)
        }, i.children))
    }
    n(rh, "ProgressIndicatorButton");

    function ol(i) {
        let {
            children: e
        } = i;
        return u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            width: "70",
            height: "70",
            viewBox: "0 0 36 36",
            className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--circle"
        }, e)
    }
    n(ol, "ProgressCircleContainer");

    function sh(i) {
        let {
            progress: e
        } = i, t = 2 * Math.PI * 15;
        return u("g", null, u("circle", {
            className: "uppy-Dashboard-Item-progressIcon--bg",
            r: "15",
            cx: "18",
            cy: "18",
            "stroke-width": "2",
            fill: "none"
        }), u("circle", {
            className: "uppy-Dashboard-Item-progressIcon--progress",
            r: "15",
            cx: "18",
            cy: "18",
            transform: "rotate(-90, 18, 18)",
            fill: "none",
            "stroke-width": "2",
            "stroke-dasharray": t,
            "stroke-dashoffset": t - t / 100 * e
        }))
    }
    n(sh, "ProgressCircle");

    function oh(i) {
        if (!i.file.progress.uploadStarted) return null;
        if (i.isUploaded) return u("div", {
            className: "uppy-Dashboard-Item-progress"
        }, u("div", {
            className: "uppy-Dashboard-Item-progressIndicator"
        }, u(ol, null, u("circle", {
            r: "15",
            cx: "18",
            cy: "18",
            fill: "#1bb240"
        }), u("polygon", {
            className: "uppy-Dashboard-Item-progressIcon--check",
            transform: "translate(2, 3)",
            points: "14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634"
        }))));
        if (!i.recoveredState) return i.error && !i.hideRetryButton ? u(rh, i, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--retry",
            width: "28",
            height: "31",
            viewBox: "0 0 16 19"
        }, u("path", {
            d: "M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z"
        }), u("path", {
            d: "M7.9 3H10v2H7.9z"
        }), u("path", {
            d: "M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z"
        }), u("path", {
            d: "M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z"
        }))) : i.resumableUploads && !i.hidePauseResumeButton ? u(rh, i, u(ol, null, u(sh, {
            progress: i.file.progress.percentage
        }), i.file.isPaused ? u("polygon", {
            className: "uppy-Dashboard-Item-progressIcon--play",
            transform: "translate(3, 3)",
            points: "12 20 12 10 20 15"
        }) : u("g", {
            className: "uppy-Dashboard-Item-progressIcon--pause",
            transform: "translate(14.5, 13)"
        }, u("rect", {
            x: "0",
            y: "0",
            width: "2",
            height: "10",
            rx: "0"
        }), u("rect", {
            x: "5",
            y: "0",
            width: "2",
            height: "10",
            rx: "0"
        })))) : !i.resumableUploads && i.individualCancellation && !i.hideCancelButton ? u(rh, i, u(ol, null, u(sh, {
            progress: i.file.progress.percentage
        }), u("polygon", {
            className: "cancel",
            transform: "translate(2, 2)",
            points: "19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12"
        }))) : u("div", {
            className: "uppy-Dashboard-Item-progress"
        }, u("div", {
            className: "uppy-Dashboard-Item-progressIndicator"
        }, u(ol, null, u(sh, {
            progress: i.file.progress.percentage
        }))))
    }
    n(oh, "FileProgress");
    var Zf = oe(Qf(), 1);
    var nh = "...";

    function nl(i, e) {
        if (e === 0) return "";
        if (i.length <= e) return i;
        if (e <= nh.length + 1) return `${i.slice(0,e-1)}\u2026`;
        let t = e - nh.length,
            r = Math.ceil(t / 2),
            s = Math.floor(t / 2);
        return i.slice(0, r) + nh + i.slice(-s)
    }
    n(nl, "truncateString");
    var vw = n(i => {
            let {
                author: e,
                name: t
            } = i.file.meta;

            function r() {
                return i.singleFile ? 200 : i.containerWidth <= 352 ? 35 : i.containerWidth <= 576 ? 60 : e ? 20 : 30
            }
            return n(r, "getMaxNameLength"), u("div", {
                className: "uppy-Dashboard-Item-name",
                title: t
            }, nl(t, r()))
        }, "renderFileName"),
        bw = n(i => {
            let {
                author: e
            } = i.file.meta, {
                providerName: t
            } = i.file.remote, r = "\xB7";
            return e ? u("div", {
                className: "uppy-Dashboard-Item-author"
            }, u("a", {
                href: `${e.url}?utm_source=Companion&utm_medium=referral`,
                target: "_blank",
                rel: "noopener noreferrer"
            }, nl(e.name, 13)), t ? u(Rt, null, ` ${r} `, t, ` ${r} `) : null) : null
        }, "renderAuthor"),
        ww = n(i => i.file.size && u("div", {
            className: "uppy-Dashboard-Item-statusSize"
        }, (0, Zf.default)(i.file.size)), "renderFileSize"),
        Sw = n(i => i.file.isGhost && u("span", null, " \u2022 ", u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-reSelect",
            type: "button",
            onClick: i.toggleAddFilesPanel
        }, i.i18n("reSelect"))), "ReSelectButton"),
        _w = n(i => {
            let {
                file: e,
                onClick: t
            } = i;
            return e.error ? u("button", {
                className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-errorDetails",
                "aria-label": e.error,
                "data-microtip-position": "bottom",
                "data-microtip-size": "medium",
                onClick: t,
                type: "button"
            }, "?") : null
        }, "ErrorButton");

    function ah(i) {
        let {
            file: e
        } = i;
        return u("div", {
            className: "uppy-Dashboard-Item-fileInfo",
            "data-uppy-file-source": e.source
        }, u("div", {
            className: "uppy-Dashboard-Item-fileName"
        }, vw(i), u(_w, {
            file: i.file,
            onClick: () => alert(i.file.error)
        })), u("div", {
            className: "uppy-Dashboard-Item-status"
        }, bw(i), ww(i), Sw(i)), u(ln, {
            file: i.file,
            i18n: i.i18n,
            toggleFileCard: i.toggleFileCard,
            metaFields: i.metaFields
        }))
    }
    n(ah, "FileInfo");

    function lh(i, e) {
        return e === void 0 && (e = "Copy the URL below"), new Promise(t => {
            let r = document.createElement("textarea");
            r.setAttribute("style", {
                position: "fixed",
                top: 0,
                left: 0,
                width: "2em",
                height: "2em",
                padding: 0,
                border: "none",
                outline: "none",
                boxShadow: "none",
                background: "transparent"
            }), r.value = i, document.body.appendChild(r), r.select();
            let s = n(() => {
                document.body.removeChild(r), window.prompt(e, i), t()
            }, "magicCopyFailed");
            try {
                return document.execCommand("copy") ? (document.body.removeChild(r), t()) : s("copy command unavailable")
            } catch (o) {
                return document.body.removeChild(r), s(o)
            }
        })
    }
    n(lh, "copyToClipboard");

    function Pw(i) {
        let {
            file: e,
            uploadInProgressOrComplete: t,
            metaFields: r,
            canEditFile: s,
            i18n: o,
            onClick: a
        } = i;
        return !t && r && r.length > 0 || !t && s(e) ? u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-action uppy-Dashboard-Item-action--edit",
            type: "button",
            "aria-label": o("editFileWithFilename", {
                file: e.meta.name
            }),
            title: o("editFileWithFilename", {
                file: e.meta.name
            }),
            onClick: () => a()
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "14",
            height: "14",
            viewBox: "0 0 14 14"
        }, u("g", {
            fillRule: "evenodd"
        }, u("path", {
            d: "M1.5 10.793h2.793A1 1 0 0 0 5 10.5L11.5 4a1 1 0 0 0 0-1.414L9.707.793a1 1 0 0 0-1.414 0l-6.5 6.5A1 1 0 0 0 1.5 8v2.793zm1-1V8L9 1.5l1.793 1.793-6.5 6.5H2.5z",
            fillRule: "nonzero"
        }), u("rect", {
            x: "1",
            y: "12.293",
            width: "11",
            height: "1",
            rx: ".5"
        }), u("path", {
            fillRule: "nonzero",
            d: "M6.793 2.5L9.5 5.207l.707-.707L7.5 1.793z"
        })))) : null
    }
    n(Pw, "EditButton");

    function xw(i) {
        let {
            i18n: e,
            onClick: t,
            file: r
        } = i;
        return u("button", {
            className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--remove",
            type: "button",
            "aria-label": e("removeFile", {
                file: r.meta.name
            }),
            title: e("removeFile", {
                file: r.meta.name
            }),
            onClick: () => t()
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18"
        }, u("path", {
            d: "M9 0C4.034 0 0 4.034 0 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9z"
        }), u("path", {
            fill: "#FFF",
            d: "M13 12.222l-.778.778L9 9.778 5.778 13 5 12.222 8.222 9 5 5.778 5.778 5 9 8.222 12.222 5l.778.778L9.778 9z"
        })))
    }
    n(xw, "RemoveButton");
    var Fw = n((i, e) => {
        lh(e.file.uploadURL, e.i18n("copyLinkToClipboardFallback")).then(() => {
            e.uppy.log("Link copied to clipboard."), e.uppy.info(e.i18n("copyLinkToClipboardSuccess"), "info", 3e3)
        }).catch(e.uppy.log).then(() => i.target.focus({
            preventScroll: !0
        }))
    }, "copyLinkToClipboard");

    function Ew(i) {
        let {
            i18n: e
        } = i;
        return u("button", {
            className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--copyLink",
            type: "button",
            "aria-label": e("copyLink"),
            title: e("copyLink"),
            onClick: t => Fw(t, i)
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "14",
            height: "14",
            viewBox: "0 0 14 12"
        }, u("path", {
            d: "M7.94 7.703a2.613 2.613 0 0 1-.626 2.681l-.852.851a2.597 2.597 0 0 1-1.849.766A2.616 2.616 0 0 1 2.764 7.54l.852-.852a2.596 2.596 0 0 1 2.69-.625L5.267 7.099a1.44 1.44 0 0 0-.833.407l-.852.851a1.458 1.458 0 0 0 1.03 2.486c.39 0 .755-.152 1.03-.426l.852-.852c.231-.231.363-.522.406-.824l1.04-1.038zm4.295-5.937A2.596 2.596 0 0 0 10.387 1c-.698 0-1.355.272-1.849.766l-.852.851a2.614 2.614 0 0 0-.624 2.688l1.036-1.036c.041-.304.173-.6.407-.833l.852-.852c.275-.275.64-.426 1.03-.426a1.458 1.458 0 0 1 1.03 2.486l-.852.851a1.442 1.442 0 0 1-.824.406l-1.04 1.04a2.596 2.596 0 0 0 2.683-.628l.851-.85a2.616 2.616 0 0 0 0-3.697zm-6.88 6.883a.577.577 0 0 0 .82 0l3.474-3.474a.579.579 0 1 0-.819-.82L5.355 7.83a.579.579 0 0 0 0 .819z"
        })))
    }
    n(Ew, "CopyLinkButton");

    function uh(i) {
        let {
            uppy: e,
            file: t,
            uploadInProgressOrComplete: r,
            canEditFile: s,
            metaFields: o,
            showLinkToFileUploadResult: a,
            showRemoveButton: l,
            i18n: h,
            toggleFileCard: c,
            openFileEditor: d
        } = i;
        return u("div", {
            className: "uppy-Dashboard-Item-actionWrapper"
        }, u(Pw, {
            i18n: h,
            file: t,
            uploadInProgressOrComplete: r,
            canEditFile: s,
            metaFields: o,
            onClick: n(() => {
                o && o.length > 0 ? c(!0, t.id) : d(t)
            }, "editAction")
        }), a && t.uploadURL ? u(Ew, {
            file: t,
            uppy: e,
            i18n: h
        }) : null, l ? u(xw, {
            i18n: h,
            file: t,
            uppy: e,
            onClick: () => i.uppy.removeFile(t.id, "removed-by-user")
        }) : null)
    }
    n(uh, "Buttons");
    var Js = class extends ie {
        componentDidMount() {
            let {
                file: e
            } = this.props;
            e.preview || this.props.handleRequestThumbnail(e)
        }
        shouldComponentUpdate(e) {
            return !(0, tm.default)(this.props, e)
        }
        componentDidUpdate() {
            let {
                file: e
            } = this.props;
            e.preview || this.props.handleRequestThumbnail(e)
        }
        componentWillUnmount() {
            let {
                file: e
            } = this.props;
            e.preview || this.props.handleCancelThumbnail(e)
        }
        render() {
            let {
                file: e
            } = this.props, t = e.progress.preprocess || e.progress.postprocess, r = e.progress.uploadComplete && !t && !e.error, s = e.progress.uploadStarted || t, o = e.progress.uploadStarted && !e.progress.uploadComplete || t, a = e.error || !1, {
                isGhost: l
            } = e, h = (this.props.individualCancellation || !o) && !r;
            r && this.props.showRemoveButtonAfterComplete && (h = !0);
            let c = (0, em.default)({
                "uppy-Dashboard-Item": !0,
                "is-inprogress": o && !this.props.recoveredState,
                "is-processing": t,
                "is-complete": r,
                "is-error": !!a,
                "is-resumable": this.props.resumableUploads,
                "is-noIndividualCancellation": !this.props.individualCancellation,
                "is-ghost": l
            });
            return u("div", {
                className: c,
                id: `uppy_${e.id}`,
                role: this.props.role
            }, u("div", {
                className: "uppy-Dashboard-Item-preview"
            }, u(ih, {
                file: e,
                showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
                i18n: this.props.i18n,
                toggleFileCard: this.props.toggleFileCard,
                metaFields: this.props.metaFields
            }), u(oh, {
                uppy: this.props.uppy,
                file: e,
                error: a,
                isUploaded: r,
                hideRetryButton: this.props.hideRetryButton,
                hideCancelButton: this.props.hideCancelButton,
                hidePauseResumeButton: this.props.hidePauseResumeButton,
                recoveredState: this.props.recoveredState,
                showRemoveButtonAfterComplete: this.props.showRemoveButtonAfterComplete,
                resumableUploads: this.props.resumableUploads,
                individualCancellation: this.props.individualCancellation,
                i18n: this.props.i18n
            })), u("div", {
                className: "uppy-Dashboard-Item-fileInfoAndButtons"
            }, u(ah, {
                file: e,
                id: this.props.id,
                acquirers: this.props.acquirers,
                containerWidth: this.props.containerWidth,
                i18n: this.props.i18n,
                toggleAddFilesPanel: this.props.toggleAddFilesPanel,
                toggleFileCard: this.props.toggleFileCard,
                metaFields: this.props.metaFields,
                singleFile: this.props.singleFile
            }), u(uh, {
                file: e,
                metaFields: this.props.metaFields,
                showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
                showRemoveButton: h,
                canEditFile: this.props.canEditFile,
                uploadInProgressOrComplete: s,
                toggleFileCard: this.props.toggleFileCard,
                openFileEditor: this.props.openFileEditor,
                uppy: this.props.uppy,
                i18n: this.props.i18n
            })))
        }
    };
    n(Js, "FileItem");

    function hh() {
        return hh = Object.assign ? Object.assign.bind() : function(i) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r])
            }
            return i
        }, hh.apply(this, arguments)
    }
    n(hh, "_extends");
    var Ow = {
            position: "relative",
            width: "100%",
            minHeight: "100%"
        },
        Rw = {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            overflow: "visible"
        },
        al = class extends ie {
            constructor(e) {
                super(e), this.handleScroll = () => {
                    this.setState({
                        offset: this.base.scrollTop
                    })
                }, this.handleResize = () => {
                    this.resize()
                }, this.focusElement = null, this.state = {
                    offset: 0,
                    height: 0
                }
            }
            componentDidMount() {
                this.resize(), window.addEventListener("resize", this.handleResize)
            }
            componentWillUpdate() {
                this.base.contains(document.activeElement) && (this.focusElement = document.activeElement)
            }
            componentDidUpdate() {
                this.focusElement && this.focusElement.parentNode && document.activeElement !== this.focusElement && this.focusElement.focus(), this.focusElement = null, this.resize()
            }
            componentWillUnmount() {
                window.removeEventListener("resize", this.handleResize)
            }
            resize() {
                let {
                    height: e
                } = this.state;
                e !== this.base.offsetHeight && this.setState({
                    height: this.base.offsetHeight
                })
            }
            render(e) {
                let {
                    data: t,
                    rowHeight: r,
                    renderRow: s,
                    overscanCount: o = 10,
                    ...a
                } = e, {
                    offset: l,
                    height: h
                } = this.state, c = Math.floor(l / r), d = Math.floor(h / r);
                o && (c = Math.max(0, c - c % o), d += o);
                let f = c + d + 4,
                    y = t.slice(c, f),
                    w = { ...Ow,
                        height: t.length * r
                    },
                    S = { ...Rw,
                        top: c * r
                    };
                return u("div", hh({
                    onScroll: this.handleScroll
                }, a), u("div", {
                    role: "presentation",
                    style: w
                }, u("div", {
                    role: "presentation",
                    style: S
                }, y.map(s))))
            }
        };
    n(al, "VirtualList");
    var im = al;

    function ch() {
        return ch = Object.assign ? Object.assign.bind() : function(i) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r])
            }
            return i
        }, ch.apply(this, arguments)
    }
    n(ch, "_extends");

    function Cw(i, e) {
        let t = [],
            r = [];
        return i.forEach(s => {
            r.length < e ? r.push(s) : (t.push(r), r = [s])
        }), r.length && t.push(r), t
    }
    n(Cw, "chunks");
    var rm = n(i => {
        let e = i.itemsPerRow === 1 ? 71 : 200,
            t = {
                id: i.id,
                error: i.error,
                i18n: i.i18n,
                uppy: i.uppy,
                acquirers: i.acquirers,
                resumableUploads: i.resumableUploads,
                individualCancellation: i.individualCancellation,
                hideRetryButton: i.hideRetryButton,
                hidePauseResumeButton: i.hidePauseResumeButton,
                hideCancelButton: i.hideCancelButton,
                showLinkToFileUploadResult: i.showLinkToFileUploadResult,
                showRemoveButtonAfterComplete: i.showRemoveButtonAfterComplete,
                isWide: i.isWide,
                metaFields: i.metaFields,
                recoveredState: i.recoveredState,
                singleFile: i.singleFile,
                toggleFileCard: i.toggleFileCard,
                handleRequestThumbnail: i.handleRequestThumbnail,
                handleCancelThumbnail: i.handleCancelThumbnail
            },
            r = n((l, h) => i.files[h].isGhost - i.files[l].isGhost, "sortByGhostComesFirst"),
            s = Object.keys(i.files);
        i.recoveredState && s.sort(r);
        let o = Cw(s, i.itemsPerRow),
            a = n(l => u("div", {
                class: "uppy-Dashboard-filesInner",
                role: "presentation",
                key: l[0]
            }, l.map(h => u(Js, ch({
                key: h,
                uppy: i.uppy
            }, t, {
                role: "listitem",
                openFileEditor: i.openFileEditor,
                canEditFile: i.canEditFile,
                toggleAddFilesPanel: i.toggleAddFilesPanel,
                file: i.files[h]
            })))), "renderRow");
        return i.singleFile ? u("div", {
            class: "uppy-Dashboard-files"
        }, a(o[0])) : u(im, {
            class: "uppy-Dashboard-files",
            role: "list",
            data: o,
            renderRow: a,
            rowHeight: e
        })
    }, "default");
    var sm;
    sm = Symbol.for("uppy test: disable unused locale key warning");
    var ll = class extends ie {
        constructor() {
            super(...arguments), this.triggerFileInputClick = () => {
                this.fileInput.click()
            }, this.triggerFolderInputClick = () => {
                this.folderInput.click()
            }, this.triggerVideoCameraInputClick = () => {
                this.mobileVideoFileInput.click()
            }, this.triggerPhotoCameraInputClick = () => {
                this.mobilePhotoFileInput.click()
            }, this.onFileInputChange = e => {
                this.props.handleInputChange(e), e.target.value = null
            }, this.renderHiddenInput = (e, t) => u("input", {
                className: "uppy-Dashboard-input",
                hidden: !0,
                "aria-hidden": "true",
                tabIndex: -1,
                webkitdirectory: e,
                type: "file",
                name: "files[]",
                multiple: this.props.maxNumberOfFiles !== 1,
                onChange: this.onFileInputChange,
                accept: this.props.allowedFileTypes,
                ref: t
            }), this.renderHiddenCameraInput = (e, t, r) => {
                let o = {
                    photo: "image/*",
                    video: "video/*"
                }[e];
                return u("input", {
                    className: "uppy-Dashboard-input",
                    hidden: !0,
                    "aria-hidden": "true",
                    tabIndex: -1,
                    type: "file",
                    name: `camera-${e}`,
                    onChange: this.onFileInputChange,
                    capture: t,
                    accept: o,
                    ref: r
                })
            }, this.renderMyDeviceAcquirer = () => u("div", {
                className: "uppy-DashboardTab",
                role: "presentation",
                "data-uppy-acquirer-id": "MyDevice"
            }, u("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
                role: "tab",
                tabIndex: 0,
                "data-uppy-super-focusable": !0,
                onClick: this.triggerFileInputClick
            }, u("svg", {
                "aria-hidden": "true",
                focusable: "false",
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            }, u("g", {
                fill: "none",
                fillRule: "evenodd"
            }, u("rect", {
                className: "uppy-ProviderIconBg",
                width: "32",
                height: "32",
                rx: "16",
                fill: "#2275D7"
            }), u("path", {
                d: "M21.973 21.152H9.863l-1.108-5.087h14.464l-1.246 5.087zM9.935 11.37h3.958l.886 1.444a.673.673 0 0 0 .585.316h6.506v1.37H9.935v-3.13zm14.898 3.44a.793.793 0 0 0-.616-.31h-.978v-2.126c0-.379-.275-.613-.653-.613H15.75l-.886-1.445a.673.673 0 0 0-.585-.316H9.232c-.378 0-.667.209-.667.587V14.5h-.782a.793.793 0 0 0-.61.303.795.795 0 0 0-.155.663l1.45 6.633c.078.36.396.618.764.618h13.354c.36 0 .674-.246.76-.595l1.631-6.636a.795.795 0 0 0-.144-.675z",
                fill: "#FFF"
            }))), u("div", {
                className: "uppy-DashboardTab-name"
            }, this.props.i18n("myDevice")))), this.renderPhotoCamera = () => u("div", {
                className: "uppy-DashboardTab",
                role: "presentation",
                "data-uppy-acquirer-id": "MobilePhotoCamera"
            }, u("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
                role: "tab",
                tabIndex: 0,
                "data-uppy-super-focusable": !0,
                onClick: this.triggerPhotoCameraInputClick
            }, u("svg", {
                "aria-hidden": "true",
                focusable: "false",
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            }, u("g", {
                fill: "none",
                fillRule: "evenodd"
            }, u("rect", {
                className: "uppy-ProviderIconBg",
                fill: "#03BFEF",
                width: "32",
                height: "32",
                rx: "16"
            }), u("path", {
                d: "M22 11c1.133 0 2 .867 2 2v7.333c0 1.134-.867 2-2 2H10c-1.133 0-2-.866-2-2V13c0-1.133.867-2 2-2h2.333l1.134-1.733C13.6 9.133 13.8 9 14 9h4c.2 0 .4.133.533.267L19.667 11H22zm-6 1.533a3.764 3.764 0 0 0-3.8 3.8c0 2.129 1.672 3.801 3.8 3.801s3.8-1.672 3.8-3.8c0-2.13-1.672-3.801-3.8-3.801zm0 6.261c-1.395 0-2.46-1.066-2.46-2.46 0-1.395 1.065-2.461 2.46-2.461s2.46 1.066 2.46 2.46c0 1.395-1.065 2.461-2.46 2.461z",
                fill: "#FFF",
                fillRule: "nonzero"
            }))), u("div", {
                className: "uppy-DashboardTab-name"
            }, this.props.i18n("takePictureBtn")))), this.renderVideoCamera = () => u("div", {
                className: "uppy-DashboardTab",
                role: "presentation",
                "data-uppy-acquirer-id": "MobileVideoCamera"
            }, u("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
                role: "tab",
                tabIndex: 0,
                "data-uppy-super-focusable": !0,
                onClick: this.triggerVideoCameraInputClick
            }, u("svg", {
                "aria-hidden": "true",
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            }, u("rect", {
                fill: "#1abc9c",
                width: "32",
                height: "32",
                rx: "16"
            }), u("path", {
                fill: "#FFF",
                fillRule: "nonzero",
                d: "m21.254 14.277 2.941-2.588c.797-.313 1.243.818 1.09 1.554-.01 2.094.02 4.189-.017 6.282-.126.915-1.145 1.08-1.58.34l-2.434-2.142c-.192.287-.504 1.305-.738.468-.104-1.293-.028-2.596-.05-3.894.047-.312.381.823.426 1.069.063-.384.206-.744.362-1.09zm-12.939-3.73c3.858.013 7.717-.025 11.574.02.912.129 1.492 1.237 1.351 2.217-.019 2.412.04 4.83-.03 7.239-.17 1.025-1.166 1.59-2.029 1.429-3.705-.012-7.41.025-11.114-.019-.913-.129-1.492-1.237-1.352-2.217.018-2.404-.036-4.813.029-7.214.136-.82.83-1.473 1.571-1.454z "
            })), u("div", {
                className: "uppy-DashboardTab-name"
            }, this.props.i18n("recordVideoBtn")))), this.renderBrowseButton = (e, t) => {
                let r = this.props.acquirers.length;
                return u("button", {
                    type: "button",
                    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-browse",
                    onClick: t,
                    "data-uppy-super-focusable": r === 0
                }, e)
            }, this.renderDropPasteBrowseTagline = e => {
                let t = this.renderBrowseButton(this.props.i18n("browseFiles"), this.triggerFileInputClick),
                    r = this.renderBrowseButton(this.props.i18n("browseFolders"), this.triggerFolderInputClick),
                    s = this.props.fileManagerSelectionType,
                    o = s.charAt(0).toUpperCase() + s.slice(1);
                return u("div", {
                    class: "uppy-Dashboard-AddFiles-title"
                }, this.props.disableLocalFiles ? this.props.i18n("importFiles") : e > 0 ? this.props.i18nArray(`dropPasteImport${o}`, {
                    browseFiles: t,
                    browseFolders: r,
                    browse: t
                }) : this.props.i18nArray(`dropPaste${o}`, {
                    browseFiles: t,
                    browseFolders: r,
                    browse: t
                }))
            }, this.renderAcquirer = e => u("div", {
                className: "uppy-DashboardTab",
                role: "presentation",
                "data-uppy-acquirer-id": e.id
            }, u("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
                role: "tab",
                tabIndex: 0,
                "data-cy": e.id,
                "aria-controls": `uppy-DashboardContent-panel--${e.id}`,
                "aria-selected": this.props.activePickerPanel.id === e.id,
                "data-uppy-super-focusable": !0,
                onClick: () => this.props.showPanel(e.id)
            }, e.icon(), u("div", {
                className: "uppy-DashboardTab-name"
            }, e.name))), this.renderAcquirers = e => {
                let t = [...e],
                    r = t.splice(e.length - 2, e.length);
                return u(Rt, null, t.map(s => this.renderAcquirer(s)), u("span", {
                    role: "presentation",
                    style: {
                        "white-space": "nowrap"
                    }
                }, r.map(s => this.renderAcquirer(s))))
            }, this.renderSourcesList = (e, t) => {
                let {
                    showNativePhotoCameraButton: r,
                    showNativeVideoCameraButton: s
                } = this.props, o = [], a = "myDevice";
                t || (o.push({
                    key: a,
                    elements: this.renderMyDeviceAcquirer()
                }), r && o.push({
                    key: "nativePhotoCameraButton",
                    elements: this.renderPhotoCamera()
                }), s && o.push({
                    key: "nativePhotoCameraButton",
                    elements: this.renderVideoCamera()
                })), o.push(...e.map(f => ({
                    key: f.id,
                    elements: this.renderAcquirer(f)
                }))), o.length === 1 && o[0].key === a && (o = []);
                let h = [...o],
                    c = h.splice(o.length - 2, o.length),
                    d = n(f => f.map(y => {
                        let {
                            key: w,
                            elements: S
                        } = y;
                        return u(Rt, {
                            key: w
                        }, S)
                    }), "renderList");
                return u(Rt, null, this.renderDropPasteBrowseTagline(o.length), u("div", {
                    className: "uppy-Dashboard-AddFiles-list",
                    role: "tablist"
                }, d(h), u("span", {
                    role: "presentation",
                    style: {
                        "white-space": "nowrap"
                    }
                }, d(c))))
            }
        }[sm]() {
            this.props.i18nArray("dropPasteBoth"), this.props.i18nArray("dropPasteFiles"), this.props.i18nArray("dropPasteFolders"), this.props.i18nArray("dropPasteImportBoth"), this.props.i18nArray("dropPasteImportFiles"), this.props.i18nArray("dropPasteImportFolders")
        }
        renderPoweredByUppy() {
            let {
                i18nArray: e
            } = this.props, t = u("span", null, u("svg", {
                "aria-hidden": "true",
                focusable: "false",
                className: "uppy-c-icon uppy-Dashboard-poweredByIcon",
                width: "11",
                height: "11",
                viewBox: "0 0 11 11"
            }, u("path", {
                d: "M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z",
                fillRule: "evenodd"
            })), u("span", {
                className: "uppy-Dashboard-poweredByUppy"
            }, "Uppy")), r = e("poweredBy", {
                uppy: t
            });
            return u("a", {
                tabIndex: "-1",
                href: "https://uppy.io",
                rel: "noreferrer noopener",
                target: "_blank",
                className: "uppy-Dashboard-poweredBy"
            }, r)
        }
        render() {
            let {
                showNativePhotoCameraButton: e,
                showNativeVideoCameraButton: t,
                nativeCameraFacingMode: r
            } = this.props;
            return u("div", {
                className: "uppy-Dashboard-AddFiles"
            }, this.renderHiddenInput(!1, s => {
                this.fileInput = s
            }), this.renderHiddenInput(!0, s => {
                this.folderInput = s
            }), e && this.renderHiddenCameraInput("photo", r, s => {
                this.mobilePhotoFileInput = s
            }), t && this.renderHiddenCameraInput("video", r, s => {
                this.mobileVideoFileInput = s
            }), this.renderSourcesList(this.props.acquirers, this.props.disableLocalFiles), u("div", {
                className: "uppy-Dashboard-AddFiles-info"
            }, this.props.note && u("div", {
                className: "uppy-Dashboard-note"
            }, this.props.note), this.props.proudlyDisplayPoweredByUppy && this.renderPoweredByUppy(this.props)))
        }
    };
    n(ll, "AddFiles");
    var ul = ll;
    var om = oe(Tt(), 1);
    var Tw = n(i => u("div", {
            className: (0, om.default)("uppy-Dashboard-AddFilesPanel", i.className),
            "data-uppy-panelType": "AddFiles",
            "aria-hidden": i.showAddFilesPanel
        }, u("div", {
            className: "uppy-DashboardContent-bar"
        }, u("div", {
            className: "uppy-DashboardContent-title",
            role: "heading",
            "aria-level": "1"
        }, i.i18n("addingMoreFiles")), u("button", {
            className: "uppy-DashboardContent-back",
            type: "button",
            onClick: () => i.toggleAddFilesPanel(!1)
        }, i.i18n("back"))), u(ul, i)), "AddFilesPanel"),
        nm = Tw;
    var am = oe(Tt(), 1);

    function kw(i) {
        let {
            tagName: e
        } = i.target;
        if (e === "INPUT" || e === "TEXTAREA") {
            i.stopPropagation();
            return
        }
        i.preventDefault(), i.stopPropagation()
    }
    n(kw, "ignoreEvent");
    var oi = kw;

    function Aw(i) {
        let {
            activePickerPanel: e,
            className: t,
            hideAllPanels: r,
            i18n: s,
            state: o,
            uppy: a
        } = i;
        return u("div", {
            className: (0, am.default)("uppy-DashboardContent-panel", t),
            role: "tabpanel",
            "data-uppy-panelType": "PickerPanel",
            id: `uppy-DashboardContent-panel--${e.id}`,
            onDragOver: oi,
            onDragLeave: oi,
            onDrop: oi,
            onPaste: oi
        }, u("div", {
            className: "uppy-DashboardContent-bar"
        }, u("div", {
            className: "uppy-DashboardContent-title",
            role: "heading",
            "aria-level": "1"
        }, s("importFrom", {
            name: e.name
        })), u("button", {
            className: "uppy-DashboardContent-back",
            type: "button",
            onClick: r
        }, s("cancel"))), u("div", {
            className: "uppy-DashboardContent-panelBody"
        }, a.getPlugin(e.id).render(o)))
    }
    n(Aw, "PickerPanelContent");
    var lm = Aw;
    var um = oe(Tt(), 1);

    function Uw(i) {
        let e = i.files[i.fileCardFor];
        return u("div", {
            className: (0, um.default)("uppy-DashboardContent-panel", i.className),
            role: "tabpanel",
            "data-uppy-panelType": "FileEditor",
            id: "uppy-DashboardContent-panel--editor"
        }, u("div", {
            className: "uppy-DashboardContent-bar"
        }, u("div", {
            className: "uppy-DashboardContent-title",
            role: "heading",
            "aria-level": "1"
        }, i.i18nArray("editing", {
            file: u("span", {
                className: "uppy-DashboardContent-titleFile"
            }, e.meta ? e.meta.name : e.name)
        })), u("button", {
            className: "uppy-DashboardContent-back",
            type: "button",
            onClick: i.hideAllPanels
        }, i.i18n("cancel")), u("button", {
            className: "uppy-DashboardContent-save",
            type: "button",
            onClick: i.saveFileEditor
        }, i.i18n("save"))), u("div", {
            className: "uppy-DashboardContent-panelBody"
        }, i.editors.map(t => i.uppy.getPlugin(t.id).render(i.state))))
    }
    n(Uw, "EditorPanel");
    var hm = Uw;
    var ni = {
        STATE_ERROR: "error",
        STATE_WAITING: "waiting",
        STATE_PREPROCESSING: "preprocessing",
        STATE_UPLOADING: "uploading",
        STATE_POSTPROCESSING: "postprocessing",
        STATE_COMPLETE: "complete",
        STATE_PAUSED: "paused"
    };

    function Dw(i, e, t, r) {
        if (r === void 0 && (r = {}), i) return ni.STATE_ERROR;
        if (e) return ni.STATE_COMPLETE;
        if (t) return ni.STATE_PAUSED;
        let s = ni.STATE_WAITING,
            o = Object.keys(r);
        for (let a = 0; a < o.length; a++) {
            let {
                progress: l
            } = r[o[a]];
            if (l.uploadStarted && !l.uploadComplete) return ni.STATE_UPLOADING;
            l.preprocess && s !== ni.STATE_UPLOADING && (s = ni.STATE_PREPROCESSING), l.postprocess && s !== ni.STATE_UPLOADING && s !== ni.STATE_PREPROCESSING && (s = ni.STATE_POSTPROCESSING)
        }
        return s
    }
    n(Dw, "getUploadingState");

    function Nw(i) {
        let {
            files: e,
            i18n: t,
            isAllComplete: r,
            isAllErrored: s,
            isAllPaused: o,
            inProgressNotPausedFiles: a,
            newFiles: l,
            processingFiles: h
        } = i;
        switch (Dw(s, r, o, e)) {
            case "uploading":
                return t("uploadingXFiles", {
                    smart_count: a.length
                });
            case "preprocessing":
            case "postprocessing":
                return t("processingXFiles", {
                    smart_count: h.length
                });
            case "paused":
                return t("uploadPaused");
            case "waiting":
                return t("xFilesSelected", {
                    smart_count: l.length
                });
            case "complete":
                return t("uploadComplete");
            default:
        }
    }
    n(Nw, "UploadStatus");

    function Bw(i) {
        let {
            i18n: e,
            isAllComplete: t,
            hideCancelButton: r,
            maxNumberOfFiles: s,
            toggleAddFilesPanel: o,
            uppy: a
        } = i, {
            allowNewUpload: l
        } = i;
        return l && s && (l = i.totalFileCount < i.maxNumberOfFiles), u("div", {
            className: "uppy-DashboardContent-bar"
        }, !t && !r ? u("button", {
            className: "uppy-DashboardContent-back",
            type: "button",
            onClick: () => a.cancelAll()
        }, e("cancel")) : u("div", null), u("div", {
            className: "uppy-DashboardContent-title",
            role: "heading",
            "aria-level": "1"
        }, u(Nw, i)), l ? u("button", {
            className: "uppy-DashboardContent-addMore",
            type: "button",
            "aria-label": e("addMoreFiles"),
            title: e("addMoreFiles"),
            onClick: () => o(!0)
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "15",
            height: "15",
            viewBox: "0 0 15 15"
        }, u("path", {
            d: "M8 6.5h6a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8h-6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h6v-6A.5.5 0 0 1 7 0h.5a.5.5 0 0 1 .5.5v6z"
        })), u("span", {
            className: "uppy-DashboardContent-addMoreCaption"
        }, e("addMore"))) : u("div", null))
    }
    n(Bw, "PanelTopBar");
    var cm = Bw;
    var dm = oe(Tt(), 1);
    var hl = class extends ie {
        constructor(e) {
            super(e), this.form = document.createElement("form"), this.updateMeta = (o, a) => {
                this.setState(l => {
                    let {
                        formState: h
                    } = l;
                    return {
                        formState: { ...h,
                            [a]: o
                        }
                    }
                })
            }, this.handleSave = o => {
                o.preventDefault();
                let a = this.props.fileCardFor;
                this.props.saveFileCard(this.state.formState, a)
            }, this.handleCancel = () => {
                let o = this.props.files[this.props.fileCardFor];
                this.props.uppy.emit("file-editor:cancel", o), this.props.toggleFileCard(!1)
            }, this.saveOnEnter = o => {
                if (o.keyCode === 13) {
                    o.stopPropagation(), o.preventDefault();
                    let a = this.props.files[this.props.fileCardFor];
                    this.props.saveFileCard(this.state.formState, a.id)
                }
            }, this.renderMetaFields = () => {
                let o = this.getMetaFields() || [],
                    a = {
                        text: "uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input"
                    };
                return o.map(l => {
                    let h = `uppy-Dashboard-FileCard-input-${l.id}`,
                        c = this.props.requiredMetaFields.includes(l.id);
                    return u("fieldset", {
                        key: l.id,
                        className: "uppy-Dashboard-FileCard-fieldset"
                    }, u("label", {
                        className: "uppy-Dashboard-FileCard-label",
                        htmlFor: h
                    }, l.name), l.render !== void 0 ? l.render({
                        value: this.state.formState[l.id],
                        onChange: d => this.updateMeta(d, l.id),
                        fieldCSSClasses: a,
                        required: c,
                        form: this.form.id
                    }, u) : u("input", {
                        className: a.text,
                        id: h,
                        form: this.form.id,
                        type: l.type || "text",
                        required: c,
                        value: this.state.formState[l.id],
                        placeholder: l.placeholder,
                        onKeyUp: "form" in HTMLInputElement.prototype ? void 0 : this.saveOnEnter,
                        onKeyDown: "form" in HTMLInputElement.prototype ? void 0 : this.saveOnEnter,
                        onKeyPress: "form" in HTMLInputElement.prototype ? void 0 : this.saveOnEnter,
                        onInput: d => this.updateMeta(d.target.value, l.id),
                        "data-uppy-super-focusable": !0
                    }))
                })
            };
            let t = this.props.files[this.props.fileCardFor],
                r = this.getMetaFields() || [],
                s = {};
            r.forEach(o => {
                s[o.id] = t.meta[o.id] || ""
            }), this.state = {
                formState: s
            }, this.form.id = Ot()
        }
        componentWillMount() {
            this.form.addEventListener("submit", this.handleSave), document.body.appendChild(this.form)
        }
        componentWillUnmount() {
            this.form.removeEventListener("submit", this.handleSave), document.body.removeChild(this.form)
        }
        getMetaFields() {
            return typeof this.props.metaFields == "function" ? this.props.metaFields(this.props.files[this.props.fileCardFor]) : this.props.metaFields
        }
        render() {
            let e = this.props.files[this.props.fileCardFor],
                t = this.props.canEditFile(e);
            return u("div", {
                className: (0, dm.default)("uppy-Dashboard-FileCard", this.props.className),
                "data-uppy-panelType": "FileCard",
                onDragOver: oi,
                onDragLeave: oi,
                onDrop: oi,
                onPaste: oi
            }, u("div", {
                className: "uppy-DashboardContent-bar"
            }, u("div", {
                className: "uppy-DashboardContent-title",
                role: "heading",
                "aria-level": "1"
            }, this.props.i18nArray("editing", {
                file: u("span", {
                    className: "uppy-DashboardContent-titleFile"
                }, e.meta ? e.meta.name : e.name)
            })), u("button", {
                className: "uppy-DashboardContent-back",
                type: "button",
                form: this.form.id,
                title: this.props.i18n("finishEditingFile"),
                onClick: this.handleCancel
            }, this.props.i18n("cancel"))), u("div", {
                className: "uppy-Dashboard-FileCard-inner"
            }, u("div", {
                className: "uppy-Dashboard-FileCard-preview",
                style: {
                    backgroundColor: $r(e.type).color
                }
            }, u(an, {
                file: e
            }), t && u("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn uppy-Dashboard-FileCard-edit",
                onClick: r => {
                    this.handleSave(r), this.props.openFileEditor(e)
                },
                form: this.form.id
            }, this.props.i18n("editFile"))), u("div", {
                className: "uppy-Dashboard-FileCard-info"
            }, this.renderMetaFields()), u("div", {
                className: "uppy-Dashboard-FileCard-actions"
            }, u("button", {
                className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-FileCard-actionsBtn",
                type: "form" in HTMLButtonElement.prototype ? "submit" : "button",
                onClick: "form" in HTMLButtonElement.prototype ? void 0 : this.handleSave,
                form: this.form.id
            }, this.props.i18n("saveChanges")), u("button", {
                className: "uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-FileCard-actionsBtn",
                type: "button",
                onClick: this.handleCancel,
                form: this.form.id
            }, this.props.i18n("cancel")))))
        }
    };
    n(hl, "FileCard");
    var pm = hl;
    var mm = oe(Tt(), 1);
    var Qs = "uppy-transition-slideDownUp",
        fm = 250,
        cl = class extends ie {
            constructor(e) {
                super(e), this.state = {
                    cachedChildren: null,
                    className: ""
                }
            }
            componentWillUpdate(e) {
                let {
                    cachedChildren: t
                } = this.state, r = Ct(e.children)[0];
                if (t === r) return null;
                let s = {
                    cachedChildren: r
                };
                r && !t && (s.className = `${Qs}-enter`, cancelAnimationFrame(this.animationFrame), clearTimeout(this.leaveTimeout), this.leaveTimeout = void 0, this.animationFrame = requestAnimationFrame(() => {
                    this.setState({
                        className: `${Qs}-enter ${Qs}-enter-active`
                    }), this.enterTimeout = setTimeout(() => {
                        this.setState({
                            className: ""
                        })
                    }, fm)
                })), t && !r && this.leaveTimeout === void 0 && (s.cachedChildren = t, s.className = `${Qs}-leave`, cancelAnimationFrame(this.animationFrame), clearTimeout(this.enterTimeout), this.enterTimeout = void 0, this.animationFrame = requestAnimationFrame(() => {
                    this.setState({
                        className: `${Qs}-leave ${Qs}-leave-active`
                    }), this.leaveTimeout = setTimeout(() => {
                        this.setState({
                            cachedChildren: null,
                            className: ""
                        })
                    }, fm)
                })), this.setState(s)
            }
            render() {
                let {
                    cachedChildren: e,
                    className: t
                } = this.state;
                return e ? Na(e, {
                    className: (0, mm.default)(t, e.props.className)
                }) : null
            }
        };
    n(cl, "Slide");
    var un = cl;

    function dr() {
        return dr = Object.assign ? Object.assign.bind() : function(i) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r])
            }
            return i
        }, dr.apply(this, arguments)
    }
    n(dr, "_extends");
    var gm = 900,
        ym = 700,
        dh = 576,
        Iw = 400;

    function ph(i) {
        let e = i.totalFileCount === 0,
            t = i.totalFileCount === 1,
            r = i.containerWidth > dh,
            s = (0, vm.default)({
                "uppy-Dashboard": !0,
                "uppy-Dashboard--isDisabled": i.disabled,
                "uppy-Dashboard--animateOpenClose": i.animateOpenClose,
                "uppy-Dashboard--isClosing": i.isClosing,
                "uppy-Dashboard--isDraggingOver": i.isDraggingOver,
                "uppy-Dashboard--modal": !i.inline,
                "uppy-size--md": i.containerWidth > dh,
                "uppy-size--lg": i.containerWidth > ym,
                "uppy-size--xl": i.containerWidth > gm,
                "uppy-size--height-md": i.containerHeight > Iw,
                "uppy-Dashboard--isAddFilesPanelVisible": i.showAddFilesPanel,
                "uppy-Dashboard--isInnerWrapVisible": i.areInsidesReadyToBeVisible,
                "uppy-Dashboard--singleFile": t
            }),
            o = 1;
        i.containerWidth > gm ? o = 5 : i.containerWidth > ym ? o = 4 : i.containerWidth > dh && (o = 3);
        let a = i.showSelectedFiles && !e,
            l = i.recoveredState ? Object.keys(i.recoveredState.files).length : null,
            h = i.files ? Object.keys(i.files).filter(f => i.files[f].isGhost).length : null,
            c = n(() => h > 0 ? i.i18n("recoveredXFiles", {
                smart_count: h
            }) : i.i18n("recoveredAllFiles"), "renderRestoredText");
        return u("div", {
            className: s,
            "data-uppy-theme": i.theme,
            "data-uppy-num-acquirers": i.acquirers.length,
            "data-uppy-drag-drop-supported": !i.disableLocalFiles && nn(),
            "aria-hidden": i.inline ? "false" : i.isHidden,
            "aria-disabled": i.disabled,
            "aria-label": i.inline ? i.i18n("dashboardTitle") : i.i18n("dashboardWindowTitle"),
            onPaste: i.handlePaste,
            onDragOver: i.handleDragOver,
            onDragLeave: i.handleDragLeave,
            onDrop: i.handleDrop
        }, u("div", {
            "aria-hidden": "true",
            className: "uppy-Dashboard-overlay",
            tabIndex: -1,
            onClick: i.handleClickOutside
        }), u("div", {
            className: "uppy-Dashboard-inner",
            "aria-modal": !i.inline && "true",
            role: !i.inline && "dialog",
            style: {
                width: i.inline && i.width ? i.width : "",
                height: i.inline && i.height ? i.height : ""
            }
        }, i.inline ? null : u("button", {
            className: "uppy-u-reset uppy-Dashboard-close",
            type: "button",
            "aria-label": i.i18n("closeModal"),
            title: i.i18n("closeModal"),
            onClick: i.closeModal
        }, u("span", {
            "aria-hidden": "true"
        }, "\xD7")), u("div", {
            className: "uppy-Dashboard-innerWrap"
        }, u("div", {
            className: "uppy-Dashboard-dropFilesHereHint"
        }, i.i18n("dropHint")), a && u(cm, i), l && u("div", {
            className: "uppy-Dashboard-serviceMsg"
        }, u("svg", {
            className: "uppy-Dashboard-serviceMsg-icon",
            "aria-hidden": "true",
            focusable: "false",
            width: "21",
            height: "16",
            viewBox: "0 0 24 19"
        }, u("g", {
            transform: "translate(0 -1)",
            fill: "none",
            fillRule: "evenodd"
        }, u("path", {
            d: "M12.857 1.43l10.234 17.056A1 1 0 0122.234 20H1.766a1 1 0 01-.857-1.514L11.143 1.429a1 1 0 011.714 0z",
            fill: "#FFD300"
        }), u("path", {
            fill: "#000",
            d: "M11 6h2l-.3 8h-1.4z"
        }), u("circle", {
            fill: "#000",
            cx: "12",
            cy: "17",
            r: "1"
        }))), u("strong", {
            className: "uppy-Dashboard-serviceMsg-title"
        }, i.i18n("sessionRestored")), u("div", {
            className: "uppy-Dashboard-serviceMsg-text"
        }, c())), a ? u(rm, dr({}, i, {
            singleFile: t,
            itemsPerRow: o
        })) : u(ul, dr({}, i, {
            isSizeMD: r
        })), u(un, null, i.showAddFilesPanel ? u(nm, dr({
            key: "AddFiles"
        }, i, {
            isSizeMD: r
        })) : null), u(un, null, i.fileCardFor ? u(pm, dr({
            key: "FileCard"
        }, i)) : null), u(un, null, i.activePickerPanel ? u(lm, dr({
            key: "Picker"
        }, i)) : null), u(un, null, i.showFileEditor ? u(hm, dr({
            key: "Editor"
        }, i)) : null), u("div", {
            className: "uppy-Dashboard-progressindicators"
        }, i.progressindicators.map(f => i.uppy.getPlugin(f.id).render(i.state))))))
    }
    n(ph, "Dashboard");
    var bm = {
        strings: {
            closeModal: "Close Modal",
            addMoreFiles: "Add more files",
            addingMoreFiles: "Adding more files",
            importFrom: "Import from %{name}",
            dashboardWindowTitle: "Uppy Dashboard Window (Press escape to close)",
            dashboardTitle: "Uppy Dashboard",
            copyLinkToClipboardSuccess: "Link copied to clipboard.",
            copyLinkToClipboardFallback: "Copy the URL below",
            copyLink: "Copy link",
            back: "Back",
            removeFile: "Remove file",
            editFile: "Edit file",
            editing: "Editing %{file}",
            finishEditingFile: "Finish editing file",
            saveChanges: "Save changes",
            myDevice: "My Device",
            dropHint: "Drop your files here",
            uploadComplete: "Upload complete",
            uploadPaused: "Upload paused",
            resumeUpload: "Resume upload",
            pauseUpload: "Pause upload",
            retryUpload: "Retry upload",
            cancelUpload: "Cancel upload",
            xFilesSelected: {
                0: "%{smart_count} file selected",
                1: "%{smart_count} files selected"
            },
            uploadingXFiles: {
                0: "Uploading %{smart_count} file",
                1: "Uploading %{smart_count} files"
            },
            processingXFiles: {
                0: "Processing %{smart_count} file",
                1: "Processing %{smart_count} files"
            },
            poweredBy: "Powered by %{uppy}",
            addMore: "Add more",
            editFileWithFilename: "Edit file %{file}",
            save: "Save",
            cancel: "Cancel",
            dropPasteFiles: "Drop files here or %{browseFiles}",
            dropPasteFolders: "Drop files here or %{browseFolders}",
            dropPasteBoth: "Drop files here, %{browseFiles} or %{browseFolders}",
            dropPasteImportFiles: "Drop files here, %{browseFiles} or import from:",
            dropPasteImportFolders: "Drop files here, %{browseFolders} or import from:",
            dropPasteImportBoth: "Drop files here, %{browseFiles}, %{browseFolders} or import from:",
            importFiles: "Import files from:",
            browseFiles: "browse files",
            browseFolders: "browse folders",
            recoveredXFiles: {
                0: "We could not fully recover 1 file. Please re-select it and resume the upload.",
                1: "We could not fully recover %{smart_count} files. Please re-select them and resume the upload."
            },
            recoveredAllFiles: "We restored all files. You can now resume the upload.",
            sessionRestored: "Session restored",
            reSelect: "Re-select",
            missingRequiredMetaFields: {
                0: "Missing required meta field: %{fields}.",
                1: "Missing required meta fields: %{fields}."
            },
            takePictureBtn: "Take Picture",
            recordVideoBtn: "Record Video"
        }
    };

    function Re(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(Re, "_classPrivateFieldLooseBase");
    var Lw = 0;

    function pr(i) {
        return "__private_" + Lw++ + "_" + i
    }
    n(pr, "_classPrivateFieldLooseKey");
    var Mw = {
            version: "3.2.2"
        },
        fh = Ju.default || Ju,
        wm = 9,
        zw = 27;

    function Sm() {
        let i = {};
        return i.promise = new Promise((e, t) => {
            i.resolve = e, i.reject = t
        }), i
    }
    n(Sm, "createPromise");

    function jw() {
        return u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            width: "30",
            height: "30",
            viewBox: "0 0 30 30"
        }, u("path", {
            d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z"
        }))
    }
    n(jw, "defaultPickerIcon");
    var qr = pr("disabledNodes"),
        Mi = pr("generateLargeThumbnailIfSingleFile"),
        hn = pr("openFileEditorWhenFilesAdded"),
        Vr = pr("attachRenderFunctionToTarget"),
        mh = pr("isTargetSupported"),
        gh = pr("getAcquirers"),
        yh = pr("getProgressIndicators"),
        zi = pr("getEditors"),
        ai = class extends V {
            constructor(e, t) {
                var r;
                super(e, t), r = this, Object.defineProperty(this, qr, {
                    writable: !0,
                    value: null
                }), this.removeTarget = o => {
                    let l = this.getPluginState().targets.filter(h => h.id !== o.id);
                    this.setPluginState({
                        targets: l
                    })
                }, this.addTarget = o => {
                    let a = o.id || o.constructor.name,
                        l = o.title || a,
                        h = o.type;
                    if (h !== "acquirer" && h !== "progressindicator" && h !== "editor") {
                        let y = "Dashboard: can only be targeted by plugins of types: acquirer, progressindicator, editor";
                        this.uppy.log(y, "error");
                        return
                    }
                    let c = {
                            id: a,
                            name: l,
                            type: h
                        },
                        f = this.getPluginState().targets.slice();
                    return f.push(c), this.setPluginState({
                        targets: f
                    }), this.el
                }, this.hideAllPanels = () => {
                    let o = this.getPluginState(),
                        a = {
                            activePickerPanel: !1,
                            showAddFilesPanel: !1,
                            activeOverlayType: null,
                            fileCardFor: null,
                            showFileEditor: !1
                        };
                    o.activePickerPanel === a.activePickerPanel && o.showAddFilesPanel === a.showAddFilesPanel && o.showFileEditor === a.showFileEditor && o.activeOverlayType === a.activeOverlayType || this.setPluginState(a)
                }, this.showPanel = o => {
                    let {
                        targets: a
                    } = this.getPluginState(), l = a.filter(h => h.type === "acquirer" && h.id === o)[0];
                    this.setPluginState({
                        activePickerPanel: l,
                        activeOverlayType: "PickerPanel"
                    }), this.uppy.emit("dashboard:show-panel", o)
                }, this.canEditFile = o => {
                    let {
                        targets: a
                    } = this.getPluginState();
                    return Re(this, zi)[zi](a).some(h => this.uppy.getPlugin(h.id).canEditFile(o))
                }, this.openFileEditor = o => {
                    let {
                        targets: a
                    } = this.getPluginState(), l = Re(this, zi)[zi](a);
                    this.setPluginState({
                        showFileEditor: !0,
                        fileCardFor: o.id || null,
                        activeOverlayType: "FileEditor"
                    }), l.forEach(h => {
                        this.uppy.getPlugin(h.id).selectFile(o)
                    })
                }, this.saveFileEditor = () => {
                    let {
                        targets: o
                    } = this.getPluginState();
                    Re(this, zi)[zi](o).forEach(l => {
                        this.uppy.getPlugin(l.id).save()
                    }), this.hideAllPanels()
                }, this.openModal = () => {
                    let {
                        promise: o,
                        resolve: a
                    } = Sm();
                    if (this.savedScrollPosition = window.pageYOffset, this.savedActiveElement = document.activeElement, this.opts.disablePageScrollWhenModalOpen && document.body.classList.add("uppy-Dashboard-isFixed"), this.opts.animateOpenClose && this.getPluginState().isClosing) {
                        let l = n(() => {
                            this.setPluginState({
                                isHidden: !1
                            }), this.el.removeEventListener("animationend", l, !1), a()
                        }, "handler");
                        this.el.addEventListener("animationend", l, !1)
                    } else this.setPluginState({
                        isHidden: !1
                    }), a();
                    return this.opts.browserBackButtonClose && this.updateBrowserHistory(), document.addEventListener("keydown", this.handleKeyDownInModal), this.uppy.emit("dashboard:modal-open"), o
                }, this.closeModal = function(o) {
                    o === void 0 && (o = {});
                    let {
                        manualClose: a = !0
                    } = o, {
                        isHidden: l,
                        isClosing: h
                    } = r.getPluginState();
                    if (l || h) return;
                    let {
                        promise: c,
                        resolve: d
                    } = Sm();
                    if (r.opts.disablePageScrollWhenModalOpen && document.body.classList.remove("uppy-Dashboard-isFixed"), r.opts.animateOpenClose) {
                        r.setPluginState({
                            isClosing: !0
                        });
                        let y = n(() => {
                            r.setPluginState({
                                isHidden: !0,
                                isClosing: !1
                            }), r.superFocus.cancel(), r.savedActiveElement.focus(), r.el.removeEventListener("animationend", y, !1), d()
                        }, "handler");
                        r.el.addEventListener("animationend", y, !1)
                    } else r.setPluginState({
                        isHidden: !0
                    }), r.superFocus.cancel(), r.savedActiveElement.focus(), d();
                    if (document.removeEventListener("keydown", r.handleKeyDownInModal), a && r.opts.browserBackButtonClose) {
                        var f;
                        (f = history.state) != null && f[r.modalName] && history.back()
                    }
                    return r.uppy.emit("dashboard:modal-closed"), c
                }, this.isModalOpen = () => !this.getPluginState().isHidden || !1, this.requestCloseModal = () => this.opts.onRequestCloseModal ? this.opts.onRequestCloseModal() : this.closeModal(), this.setDarkModeCapability = o => {
                    let {
                        capabilities: a
                    } = this.uppy.getState();
                    this.uppy.setState({
                        capabilities: { ...a,
                            darkMode: o
                        }
                    })
                }, this.handleSystemDarkModeChange = o => {
                    let a = o.matches;
                    this.uppy.log(`[Dashboard] Dark mode is ${a?"on":"off"}`), this.setDarkModeCapability(a)
                }, this.toggleFileCard = (o, a) => {
                    let l = this.uppy.getFile(a);
                    o ? this.uppy.emit("dashboard:file-edit-start", l) : this.uppy.emit("dashboard:file-edit-complete", l), this.setPluginState({
                        fileCardFor: o ? a : null,
                        activeOverlayType: o ? "FileCard" : null
                    })
                }, this.toggleAddFilesPanel = o => {
                    this.setPluginState({
                        showAddFilesPanel: o,
                        activeOverlayType: o ? "AddFiles" : null
                    })
                }, this.addFiles = o => {
                    let a = o.map(l => ({
                        source: this.id,
                        name: l.name,
                        type: l.type,
                        data: l,
                        meta: {
                            relativePath: l.relativePath || l.webkitRelativePath || null
                        }
                    }));
                    try {
                        this.uppy.addFiles(a)
                    } catch (l) {
                        this.uppy.log(l)
                    }
                }, this.startListeningToResize = () => {
                    this.resizeObserver = new ResizeObserver(o => {
                        let a = o[0],
                            {
                                width: l,
                                height: h
                            } = a.contentRect;
                        this.setPluginState({
                            containerWidth: l,
                            containerHeight: h,
                            areInsidesReadyToBeVisible: !0
                        })
                    }), this.resizeObserver.observe(this.el.querySelector(".uppy-Dashboard-inner")), this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(() => {
                        let o = this.getPluginState(),
                            a = !this.opts.inline && o.isHidden;
                        !o.areInsidesReadyToBeVisible && !a && (this.uppy.log("[Dashboard] resize event didn\u2019t fire on time: defaulted to mobile layout", "warning"), this.setPluginState({
                            areInsidesReadyToBeVisible: !0
                        }))
                    }, 1e3)
                }, this.stopListeningToResize = () => {
                    this.resizeObserver.disconnect(), clearTimeout(this.makeDashboardInsidesVisibleAnywayTimeout)
                }, this.recordIfFocusedOnUppyRecently = o => {
                    this.el.contains(o.target) ? this.ifFocusedOnUppyRecently = !0 : (this.ifFocusedOnUppyRecently = !1, this.superFocus.cancel())
                }, this.disableInteractiveElements = o => {
                    var a;
                    let l = ["a[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", '[role="button"]:not([disabled])'],
                        h = (a = Re(this, qr)[qr]) != null ? a : _e(this.el.querySelectorAll(l)).filter(c => !c.classList.contains("uppy-Dashboard-close"));
                    for (let c of h) c.tagName === "A" ? c.setAttribute("aria-disabled", o) : c.disabled = o;
                    o ? Re(this, qr)[qr] = h : Re(this, qr)[qr] = null, this.dashboardIsDisabled = o
                }, this.updateBrowserHistory = () => {
                    var o;
                    (o = history.state) != null && o[this.modalName] || history.pushState({ ...history.state,
                        [this.modalName]: !0
                    }, ""), window.addEventListener("popstate", this.handlePopState, !1)
                }, this.handlePopState = o => {
                    var a;
                    this.isModalOpen() && (!o.state || !o.state[this.modalName]) && this.closeModal({
                        manualClose: !1
                    }), !this.isModalOpen() && (a = o.state) != null && a[this.modalName] && history.back()
                }, this.handleKeyDownInModal = o => {
                    o.keyCode === zw && this.requestCloseModal(o), o.keyCode === wm && Qu(o, this.getPluginState().activeOverlayType, this.el)
                }, this.handleClickOutside = () => {
                    this.opts.closeModalOnClickOutside && this.requestCloseModal()
                }, this.handlePaste = o => {
                    this.uppy.iteratePlugins(l => {
                        l.type === "acquirer" && (l.handleRootPaste == null || l.handleRootPaste(o))
                    });
                    let a = _e(o.clipboardData.files);
                    a.length > 0 && (this.uppy.log("[Dashboard] Files pasted"), this.addFiles(a))
                }, this.handleInputChange = o => {
                    o.preventDefault();
                    let a = _e(o.target.files);
                    a.length > 0 && (this.uppy.log("[Dashboard] Files selected through input"), this.addFiles(a))
                }, this.handleDragOver = o => {
                    var a, l;
                    o.preventDefault(), o.stopPropagation();
                    let h = n(() => {
                            let y = !0;
                            return this.uppy.iteratePlugins(w => {
                                w.canHandleRootDrop != null && w.canHandleRootDrop(o) && (y = !0)
                            }), y
                        }, "canSomePluginHandleRootDrop"),
                        c = n(() => {
                            let {
                                types: y
                            } = o.dataTransfer;
                            return y.some(w => w === "Files")
                        }, "doesEventHaveFiles"),
                        d = h(o),
                        f = c(o);
                    if (!d && !f || this.opts.disabled || this.opts.disableLocalFiles && (f || !d) || !this.uppy.getState().allowNewUpload) {
                        o.dataTransfer.dropEffect = "none", clearTimeout(this.removeDragOverClassTimeout);
                        return
                    }
                    o.dataTransfer.dropEffect = "copy", clearTimeout(this.removeDragOverClassTimeout), this.setPluginState({
                        isDraggingOver: !0
                    }), (a = (l = this.opts).onDragOver) == null || a.call(l, o)
                }, this.handleDragLeave = o => {
                    var a, l;
                    o.preventDefault(), o.stopPropagation(), clearTimeout(this.removeDragOverClassTimeout), this.removeDragOverClassTimeout = setTimeout(() => {
                        this.setPluginState({
                            isDraggingOver: !1
                        })
                    }, 50), (a = (l = this.opts).onDragLeave) == null || a.call(l, o)
                }, this.handleDrop = async o => {
                    var a, l;
                    o.preventDefault(), o.stopPropagation(), clearTimeout(this.removeDragOverClassTimeout), this.setPluginState({
                        isDraggingOver: !1
                    }), this.uppy.iteratePlugins(f => {
                        f.type === "acquirer" && (f.handleRootDrop == null || f.handleRootDrop(o))
                    });
                    let h = !1,
                        c = n(f => {
                            this.uppy.log(f, "error"), h || (this.uppy.info(f.message, "error"), h = !0)
                        }, "logDropError"),
                        d = await Hr(o.dataTransfer, {
                            logDropError: c
                        });
                    d.length > 0 && (this.uppy.log("[Dashboard] Files dropped"), this.addFiles(d)), (a = (l = this.opts).onDrop) == null || a.call(l, o)
                }, this.handleRequestThumbnail = o => {
                    this.opts.waitForThumbnailsBeforeUpload || this.uppy.emit("thumbnail:request", o)
                }, this.handleCancelThumbnail = o => {
                    this.opts.waitForThumbnailsBeforeUpload || this.uppy.emit("thumbnail:cancel", o)
                }, this.handleKeyDownInInline = o => {
                    o.keyCode === wm && Hf(o, this.getPluginState().activeOverlayType, this.el)
                }, this.handlePasteOnBody = o => {
                    this.el.contains(document.activeElement) && this.handlePaste(o)
                }, this.handleComplete = o => {
                    let {
                        failed: a
                    } = o;
                    this.opts.closeAfterFinish && a.length === 0 && this.requestCloseModal()
                }, this.handleCancelRestore = () => {
                    this.uppy.emit("restore-canceled")
                }, Object.defineProperty(this, Mi, {
                    writable: !0,
                    value: () => {
                        if (this.opts.disableThumbnailGenerator) return;
                        let o = 600,
                            a = this.uppy.getFiles();
                        if (a.length === 1) {
                            let l = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
                            l ?.setOptions({
                                thumbnailWidth: o
                            });
                            let h = { ...a[0],
                                preview: void 0
                            };
                            l.requestThumbnail(h).then(() => {
                                l ?.setOptions({
                                    thumbnailWidth: this.opts.thumbnailWidth
                                })
                            })
                        }
                    }
                }), Object.defineProperty(this, hn, {
                    writable: !0,
                    value: o => {
                        let a = o[0];
                        this.canEditFile(a) && this.openFileEditor(a)
                    }
                }), this.initEvents = () => {
                    if (this.opts.trigger && !this.opts.inline) {
                        let o = il(this.opts.trigger);
                        o ? o.forEach(a => a.addEventListener("click", this.openModal)) : this.uppy.log("Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options, unless you are planning to call `dashboard.openModal()` method yourself", "warning")
                    }
                    this.startListeningToResize(), document.addEventListener("paste", this.handlePasteOnBody), this.uppy.on("plugin-remove", this.removeTarget), this.uppy.on("file-added", this.hideAllPanels), this.uppy.on("dashboard:modal-closed", this.hideAllPanels), this.uppy.on("file-editor:complete", this.hideAllPanels), this.uppy.on("complete", this.handleComplete), this.uppy.on("files-added", Re(this, Mi)[Mi]), this.uppy.on("file-removed", Re(this, Mi)[Mi]), document.addEventListener("focus", this.recordIfFocusedOnUppyRecently, !0), document.addEventListener("click", this.recordIfFocusedOnUppyRecently, !0), this.opts.inline && this.el.addEventListener("keydown", this.handleKeyDownInInline), this.opts.autoOpenFileEditor && this.uppy.on("files-added", Re(this, hn)[hn])
                }, this.removeEvents = () => {
                    let o = il(this.opts.trigger);
                    !this.opts.inline && o && o.forEach(a => a.removeEventListener("click", this.openModal)), this.stopListeningToResize(), document.removeEventListener("paste", this.handlePasteOnBody), window.removeEventListener("popstate", this.handlePopState, !1), this.uppy.off("plugin-remove", this.removeTarget), this.uppy.off("file-added", this.hideAllPanels), this.uppy.off("dashboard:modal-closed", this.hideAllPanels), this.uppy.off("file-editor:complete", this.hideAllPanels), this.uppy.off("complete", this.handleComplete), this.uppy.off("files-added", Re(this, Mi)[Mi]), this.uppy.off("file-removed", Re(this, Mi)[Mi]), document.removeEventListener("focus", this.recordIfFocusedOnUppyRecently), document.removeEventListener("click", this.recordIfFocusedOnUppyRecently), this.opts.inline && this.el.removeEventListener("keydown", this.handleKeyDownInInline), this.opts.autoOpenFileEditor && this.uppy.off("files-added", Re(this, hn)[hn])
                }, this.superFocusOnEachUpdate = () => {
                    let o = this.el.contains(document.activeElement),
                        a = document.activeElement === document.body || document.activeElement === null,
                        l = this.uppy.getState().info.length === 0,
                        h = !this.opts.inline;
                    l && (h || o || a && this.ifFocusedOnUppyRecently) ? this.superFocus(this.el, this.getPluginState().activeOverlayType) : this.superFocus.cancel()
                }, this.afterUpdate = () => {
                    if (this.opts.disabled && !this.dashboardIsDisabled) {
                        this.disableInteractiveElements(!0);
                        return
                    }!this.opts.disabled && this.dashboardIsDisabled && this.disableInteractiveElements(!1), this.superFocusOnEachUpdate()
                }, this.saveFileCard = (o, a) => {
                    this.uppy.setFileMeta(a, o), this.toggleFileCard(!1, a)
                }, Object.defineProperty(this, Vr, {
                    writable: !0,
                    value: o => {
                        let a = this.uppy.getPlugin(o.id);
                        return { ...o,
                            icon: a.icon || this.opts.defaultPickerIcon,
                            render: a.render
                        }
                    }
                }), Object.defineProperty(this, mh, {
                    writable: !0,
                    value: o => {
                        let a = this.uppy.getPlugin(o.id);
                        return typeof a.isSupported != "function" ? !0 : a.isSupported()
                    }
                }), Object.defineProperty(this, gh, {
                    writable: !0,
                    value: fh(o => o.filter(a => a.type === "acquirer" && Re(this, mh)[mh](a)).map(Re(this, Vr)[Vr]))
                }), Object.defineProperty(this, yh, {
                    writable: !0,
                    value: fh(o => o.filter(a => a.type === "progressindicator").map(Re(this, Vr)[Vr]))
                }), Object.defineProperty(this, zi, {
                    writable: !0,
                    value: fh(o => o.filter(a => a.type === "editor").map(Re(this, Vr)[Vr]))
                }), this.render = o => {
                    let a = this.getPluginState(),
                        {
                            files: l,
                            capabilities: h,
                            allowNewUpload: c
                        } = o,
                        {
                            newFiles: d,
                            uploadStartedFiles: f,
                            completeFiles: y,
                            erroredFiles: w,
                            inProgressFiles: S,
                            inProgressNotPausedFiles: R,
                            processingFiles: x,
                            isUploadStarted: F,
                            isAllComplete: N,
                            isAllErrored: H,
                            isAllPaused: q
                        } = this.uppy.getObjectOfFilesPerState(),
                        K = Re(this, gh)[gh](a.targets),
                        k = Re(this, yh)[yh](a.targets),
                        B = Re(this, zi)[zi](a.targets),
                        z;
                    return this.opts.theme === "auto" ? z = h.darkMode ? "dark" : "light" : z = this.opts.theme, ["files", "folders", "both"].indexOf(this.opts.fileManagerSelectionType) < 0 && (this.opts.fileManagerSelectionType = "files", console.warn(`Unsupported option for "fileManagerSelectionType". Using default of "${this.opts.fileManagerSelectionType}".`)), ph({
                        state: o,
                        isHidden: a.isHidden,
                        files: l,
                        newFiles: d,
                        uploadStartedFiles: f,
                        completeFiles: y,
                        erroredFiles: w,
                        inProgressFiles: S,
                        inProgressNotPausedFiles: R,
                        processingFiles: x,
                        isUploadStarted: F,
                        isAllComplete: N,
                        isAllErrored: H,
                        isAllPaused: q,
                        totalFileCount: Object.keys(l).length,
                        totalProgress: o.totalProgress,
                        allowNewUpload: c,
                        acquirers: K,
                        theme: z,
                        disabled: this.opts.disabled,
                        disableLocalFiles: this.opts.disableLocalFiles,
                        direction: this.opts.direction,
                        activePickerPanel: a.activePickerPanel,
                        showFileEditor: a.showFileEditor,
                        saveFileEditor: this.saveFileEditor,
                        disableInteractiveElements: this.disableInteractiveElements,
                        animateOpenClose: this.opts.animateOpenClose,
                        isClosing: a.isClosing,
                        progressindicators: k,
                        editors: B,
                        autoProceed: this.uppy.opts.autoProceed,
                        id: this.id,
                        closeModal: this.requestCloseModal,
                        handleClickOutside: this.handleClickOutside,
                        handleInputChange: this.handleInputChange,
                        handlePaste: this.handlePaste,
                        inline: this.opts.inline,
                        showPanel: this.showPanel,
                        hideAllPanels: this.hideAllPanels,
                        i18n: this.i18n,
                        i18nArray: this.i18nArray,
                        uppy: this.uppy,
                        note: this.opts.note,
                        recoveredState: o.recoveredState,
                        metaFields: a.metaFields,
                        resumableUploads: h.resumableUploads || !1,
                        individualCancellation: h.individualCancellation,
                        isMobileDevice: h.isMobileDevice,
                        fileCardFor: a.fileCardFor,
                        toggleFileCard: this.toggleFileCard,
                        toggleAddFilesPanel: this.toggleAddFilesPanel,
                        showAddFilesPanel: a.showAddFilesPanel,
                        saveFileCard: this.saveFileCard,
                        openFileEditor: this.openFileEditor,
                        canEditFile: this.canEditFile,
                        width: this.opts.width,
                        height: this.opts.height,
                        showLinkToFileUploadResult: this.opts.showLinkToFileUploadResult,
                        fileManagerSelectionType: this.opts.fileManagerSelectionType,
                        proudlyDisplayPoweredByUppy: this.opts.proudlyDisplayPoweredByUppy,
                        hideCancelButton: this.opts.hideCancelButton,
                        hideRetryButton: this.opts.hideRetryButton,
                        hidePauseResumeButton: this.opts.hidePauseResumeButton,
                        showRemoveButtonAfterComplete: this.opts.showRemoveButtonAfterComplete,
                        containerWidth: a.containerWidth,
                        containerHeight: a.containerHeight,
                        areInsidesReadyToBeVisible: a.areInsidesReadyToBeVisible,
                        isTargetDOMEl: this.isTargetDOMEl,
                        parentElement: this.el,
                        allowedFileTypes: this.uppy.opts.restrictions.allowedFileTypes,
                        maxNumberOfFiles: this.uppy.opts.restrictions.maxNumberOfFiles,
                        requiredMetaFields: this.uppy.opts.restrictions.requiredMetaFields,
                        showSelectedFiles: this.opts.showSelectedFiles,
                        showNativePhotoCameraButton: this.opts.showNativePhotoCameraButton,
                        showNativeVideoCameraButton: this.opts.showNativeVideoCameraButton,
                        nativeCameraFacingMode: this.opts.nativeCameraFacingMode,
                        handleCancelRestore: this.handleCancelRestore,
                        handleRequestThumbnail: this.handleRequestThumbnail,
                        handleCancelThumbnail: this.handleCancelThumbnail,
                        isDraggingOver: a.isDraggingOver,
                        handleDragOver: this.handleDragOver,
                        handleDragLeave: this.handleDragLeave,
                        handleDrop: this.handleDrop
                    })
                }, this.discoverProviderPlugins = () => {
                    this.uppy.iteratePlugins(o => {
                        o && !o.target && o.opts && o.opts.target === this.constructor && this.addTarget(o)
                    })
                }, this.install = () => {
                    this.setPluginState({
                        isHidden: !0,
                        fileCardFor: null,
                        activeOverlayType: null,
                        showAddFilesPanel: !1,
                        activePickerPanel: !1,
                        showFileEditor: !1,
                        metaFields: this.opts.metaFields,
                        targets: [],
                        areInsidesReadyToBeVisible: !1,
                        isDraggingOver: !1
                    });
                    let {
                        inline: o,
                        closeAfterFinish: a
                    } = this.opts;
                    if (o && a) throw new Error("[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.");
                    let {
                        allowMultipleUploads: l,
                        allowMultipleUploadBatches: h
                    } = this.uppy.opts;
                    (l || h) && a && this.uppy.log("[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploadBatches` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true", "warning");
                    let {
                        target: c
                    } = this.opts;
                    c && this.mount(c, this), (this.opts.plugins || []).forEach(y => {
                        let w = this.uppy.getPlugin(y);
                        w && w.mount(this, w)
                    }), this.opts.disableStatusBar || this.uppy.use(ri, {
                        id: `${this.id}:StatusBar`,
                        target: this,
                        hideUploadButton: this.opts.hideUploadButton,
                        hideRetryButton: this.opts.hideRetryButton,
                        hidePauseResumeButton: this.opts.hidePauseResumeButton,
                        hideCancelButton: this.opts.hideCancelButton,
                        showProgressDetails: this.opts.showProgressDetails,
                        hideAfterFinish: this.opts.hideProgressAfterFinish,
                        locale: this.opts.locale,
                        doneButtonHandler: this.opts.doneButtonHandler
                    }), this.opts.disableInformer || this.uppy.use(si, {
                        id: `${this.id}:Informer`,
                        target: this
                    }), this.opts.disableThumbnailGenerator || this.uppy.use(Li, {
                        id: `${this.id}:ThumbnailGenerator`,
                        thumbnailWidth: this.opts.thumbnailWidth,
                        thumbnailHeight: this.opts.thumbnailHeight,
                        thumbnailType: this.opts.thumbnailType,
                        waitForThumbnailsBeforeUpload: this.opts.waitForThumbnailsBeforeUpload,
                        lazy: !this.opts.waitForThumbnailsBeforeUpload
                    }), this.darkModeMediaQuery = typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
                    let f = this.darkModeMediaQuery ? this.darkModeMediaQuery.matches : !1;
                    this.uppy.log(`[Dashboard] Dark mode is ${f?"on":"off"}`), this.setDarkModeCapability(f), this.opts.theme === "auto" && this.darkModeMediaQuery.addListener(this.handleSystemDarkModeChange), this.discoverProviderPlugins(), this.initEvents()
                }, this.uninstall = () => {
                    if (!this.opts.disableInformer) {
                        let a = this.uppy.getPlugin(`${this.id}:Informer`);
                        a && this.uppy.removePlugin(a)
                    }
                    if (!this.opts.disableStatusBar) {
                        let a = this.uppy.getPlugin(`${this.id}:StatusBar`);
                        a && this.uppy.removePlugin(a)
                    }
                    if (!this.opts.disableThumbnailGenerator) {
                        let a = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
                        a && this.uppy.removePlugin(a)
                    }(this.opts.plugins || []).forEach(a => {
                        let l = this.uppy.getPlugin(a);
                        l && l.unmount()
                    }), this.opts.theme === "auto" && this.darkModeMediaQuery.removeListener(this.handleSystemDarkModeChange), this.unmount(), this.removeEvents()
                }, this.id = this.opts.id || "Dashboard", this.title = "Dashboard", this.type = "orchestrator", this.modalName = `uppy-Dashboard-${Ot()}`, this.defaultLocale = bm;
                let s = {
                    target: "body",
                    metaFields: [],
                    trigger: null,
                    inline: !1,
                    width: 750,
                    height: 550,
                    thumbnailWidth: 280,
                    thumbnailType: "image/jpeg",
                    waitForThumbnailsBeforeUpload: !1,
                    defaultPickerIcon: jw,
                    showLinkToFileUploadResult: !1,
                    showProgressDetails: !1,
                    hideUploadButton: !1,
                    hideCancelButton: !1,
                    hideRetryButton: !1,
                    hidePauseResumeButton: !1,
                    hideProgressAfterFinish: !1,
                    doneButtonHandler: () => {
                        this.uppy.cancelAll(), this.requestCloseModal()
                    },
                    note: null,
                    closeModalOnClickOutside: !1,
                    closeAfterFinish: !1,
                    disableStatusBar: !1,
                    disableInformer: !1,
                    disableThumbnailGenerator: !1,
                    disablePageScrollWhenModalOpen: !0,
                    animateOpenClose: !0,
                    fileManagerSelectionType: "files",
                    proudlyDisplayPoweredByUppy: !0,
                    onRequestCloseModal: () => this.closeModal(),
                    showSelectedFiles: !0,
                    showRemoveButtonAfterComplete: !1,
                    browserBackButtonClose: !1,
                    showNativePhotoCameraButton: !1,
                    showNativeVideoCameraButton: !1,
                    theme: "light",
                    autoOpenFileEditor: !1,
                    disabled: !1,
                    disableLocalFiles: !1
                };
                this.opts = { ...s,
                    ...t
                }, this.i18nInit(), this.superFocus = th(), this.ifFocusedOnUppyRecently = !1, this.makeDashboardInsidesVisibleAnywayTimeout = null, this.removeDragOverClassTimeout = null
            }
        };
    n(ai, "Dashboard");
    ai.VERSION = Mw.version;
    var _m = {
        strings: {
            dropHereOr: "Drop here or %{browse}",
            browse: "browse"
        }
    };
    var Hw = {
            version: "3.0.1"
        },
        li = class extends V {
            constructor(e, t) {
                super(e, t), this.handleDrop = async s => {
                    var o, a;
                    s.preventDefault(), s.stopPropagation(), clearTimeout(this.removeDragOverClassTimeout), this.setPluginState({
                        isDraggingOver: !1
                    });
                    let l = n(c => {
                            this.uppy.log(c, "error")
                        }, "logDropError"),
                        h = await Hr(s.dataTransfer, {
                            logDropError: l
                        });
                    h.length > 0 && (this.uppy.log("[DragDrop] Files dropped"), this.addFiles(h)), (o = (a = this.opts).onDrop) == null || o.call(a, s)
                }, this.type = "acquirer", this.id = this.opts.id || "DragDrop", this.title = "Drag & Drop", this.defaultLocale = _m;
                let r = {
                    target: null,
                    inputName: "files[]",
                    width: "100%",
                    height: "100%",
                    note: null
                };
                this.opts = { ...r,
                    ...t
                }, this.i18nInit(), this.isDragDropSupported = nn(), this.removeDragOverClassTimeout = null, this.onInputChange = this.onInputChange.bind(this), this.handleDragOver = this.handleDragOver.bind(this), this.handleDragLeave = this.handleDragLeave.bind(this), this.handleDrop = this.handleDrop.bind(this), this.addFiles = this.addFiles.bind(this), this.render = this.render.bind(this)
            }
            addFiles(e) {
                let t = e.map(r => ({
                    source: this.id,
                    name: r.name,
                    type: r.type,
                    data: r,
                    meta: {
                        relativePath: r.relativePath || null
                    }
                }));
                try {
                    this.uppy.addFiles(t)
                } catch (r) {
                    this.uppy.log(r)
                }
            }
            onInputChange(e) {
                let t = _e(e.target.files);
                t.length > 0 && (this.uppy.log("[DragDrop] Files selected through input"), this.addFiles(t)), e.target.value = null
            }
            handleDragOver(e) {
                var t, r;
                e.preventDefault(), e.stopPropagation();
                let {
                    types: s
                } = e.dataTransfer, o = s.some(l => l === "Files"), {
                    allowNewUpload: a
                } = this.uppy.getState();
                if (!o || !a) {
                    e.dataTransfer.dropEffect = "none", clearTimeout(this.removeDragOverClassTimeout);
                    return
                }
                e.dataTransfer.dropEffect = "copy", clearTimeout(this.removeDragOverClassTimeout), this.setPluginState({
                    isDraggingOver: !0
                }), (t = (r = this.opts).onDragOver) == null || t.call(r, e)
            }
            handleDragLeave(e) {
                var t, r;
                e.preventDefault(), e.stopPropagation(), clearTimeout(this.removeDragOverClassTimeout), this.removeDragOverClassTimeout = setTimeout(() => {
                    this.setPluginState({
                        isDraggingOver: !1
                    })
                }, 50), (t = (r = this.opts).onDragLeave) == null || t.call(r, e)
            }
            renderHiddenFileInput() {
                let {
                    restrictions: e
                } = this.uppy.opts;
                return u("input", {
                    className: "uppy-DragDrop-input",
                    type: "file",
                    hidden: !0,
                    ref: t => {
                        this.fileInputRef = t
                    },
                    name: this.opts.inputName,
                    multiple: e.maxNumberOfFiles !== 1,
                    accept: e.allowedFileTypes,
                    onChange: this.onInputChange
                })
            }
            static renderArrowSvg() {
                return u("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    className: "uppy-c-icon uppy-DragDrop-arrow",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16"
                }, u("path", {
                    d: "M11 10V0H5v10H2l6 6 6-6h-3zm0 0",
                    fillRule: "evenodd"
                }))
            }
            renderLabel() {
                return u("div", {
                    className: "uppy-DragDrop-label"
                }, this.i18nArray("dropHereOr", {
                    browse: u("span", {
                        className: "uppy-DragDrop-browse"
                    }, this.i18n("browse"))
                }))
            }
            renderNote() {
                return u("span", {
                    className: "uppy-DragDrop-note"
                }, this.opts.note)
            }
            render() {
                let e = `uppy-u-reset
      uppy-DragDrop-container
      ${this.isDragDropSupported?"uppy-DragDrop--isDragDropSupported":""}
      ${this.getPluginState().isDraggingOver?"uppy-DragDrop--isDraggingOver":""}
    `,
                    t = {
                        width: this.opts.width,
                        height: this.opts.height
                    };
                return u("button", {
                    type: "button",
                    className: e,
                    style: t,
                    onClick: () => this.fileInputRef.click(),
                    onDragOver: this.handleDragOver,
                    onDragLeave: this.handleDragLeave,
                    onDrop: this.handleDrop
                }, this.renderHiddenFileInput(), u("div", {
                    className: "uppy-DragDrop-inner"
                }, li.renderArrowSvg(), this.renderLabel(), this.renderNote()))
            }
            install() {
                let {
                    target: e
                } = this.opts;
                this.setPluginState({
                    isDraggingOver: !1
                }), e && this.mount(e, this)
            }
            uninstall() {
                this.unmount()
            }
        };
    n(li, "DragDrop");
    li.VERSION = Hw.version;
    var $w = {
        version: "2.0.1"
    };

    function vh(i) {
        var e, t;
        return (e = (t = i.dataTransfer.types) == null ? void 0 : t.some(r => r === "Files")) != null ? e : !1
    }
    n(vh, "isFileTransfer");
    var Wr = class extends ae {
        constructor(e, t) {
            super(e, t), this.addFiles = s => {
                let o = s.map(a => ({
                    source: this.id,
                    name: a.name,
                    type: a.type,
                    data: a,
                    meta: {
                        relativePath: a.relativePath || null
                    }
                }));
                try {
                    this.uppy.addFiles(o)
                } catch (a) {
                    this.uppy.log(a)
                }
            }, this.handleDrop = async s => {
                var o, a;
                if (!vh(s)) return;
                s.preventDefault(), s.stopPropagation(), clearTimeout(this.removeDragOverClassTimeout), s.currentTarget.classList.remove("uppy-is-drag-over"), this.setPluginState({
                    isDraggingOver: !1
                }), this.uppy.iteratePlugins(d => {
                    d.type === "acquirer" && (d.handleRootDrop == null || d.handleRootDrop(s))
                });
                let l = !1,
                    h = n(d => {
                        this.uppy.log(d, "error"), l || (this.uppy.info(d.message, "error"), l = !0)
                    }, "logDropError"),
                    c = await Hr(s.dataTransfer, {
                        logDropError: h
                    });
                c.length > 0 && (this.uppy.log("[DropTarget] Files were dropped"), this.addFiles(c)), (o = (a = this.opts).onDrop) == null || o.call(a, s)
            }, this.handleDragOver = s => {
                var o, a;
                !vh(s) || (s.preventDefault(), s.stopPropagation(), s.dataTransfer.dropEffect = "copy", clearTimeout(this.removeDragOverClassTimeout), s.currentTarget.classList.add("uppy-is-drag-over"), this.setPluginState({
                    isDraggingOver: !0
                }), (o = (a = this.opts).onDragOver) == null || o.call(a, s))
            }, this.handleDragLeave = s => {
                var o, a;
                if (!vh(s)) return;
                s.preventDefault(), s.stopPropagation();
                let {
                    currentTarget: l
                } = s;
                clearTimeout(this.removeDragOverClassTimeout), this.removeDragOverClassTimeout = setTimeout(() => {
                    l.classList.remove("uppy-is-drag-over"), this.setPluginState({
                        isDraggingOver: !1
                    })
                }, 50), (o = (a = this.opts).onDragLeave) == null || o.call(a, s)
            }, this.addListeners = () => {
                let {
                    target: s
                } = this.opts;
                if (s instanceof Element ? this.nodes = [s] : typeof s == "string" && (this.nodes = _e(document.querySelectorAll(s))), !this.nodes && !this.nodes.length > 0) throw new Error(`"${s}" does not match any HTML elements`);
                this.nodes.forEach(o => {
                    o.addEventListener("dragover", this.handleDragOver, !1), o.addEventListener("dragleave", this.handleDragLeave, !1), o.addEventListener("drop", this.handleDrop, !1)
                })
            }, this.removeListeners = () => {
                this.nodes && this.nodes.forEach(s => {
                    s.removeEventListener("dragover", this.handleDragOver, !1), s.removeEventListener("dragleave", this.handleDragLeave, !1), s.removeEventListener("drop", this.handleDrop, !1)
                })
            }, this.type = "acquirer", this.id = this.opts.id || "DropTarget", this.title = "Drop Target";
            let r = {
                target: null
            };
            this.opts = { ...r,
                ...t
            }, this.removeDragOverClassTimeout = null
        }
        install() {
            this.setPluginState({
                isDraggingOver: !1
            }), this.addListeners()
        }
        uninstall() {
            this.removeListeners()
        }
    };
    n(Wr, "DropTarget");
    Wr.VERSION = $w.version;
    var Pm = {
        strings: {
            chooseFiles: "Choose files"
        }
    };
    var qw = {
            version: "3.0.1"
        },
        fr = class extends V {
            constructor(e, t) {
                super(e, t), this.id = this.opts.id || "FileInput", this.title = "File Input", this.type = "acquirer", this.defaultLocale = Pm;
                let r = {
                    target: null,
                    pretty: !0,
                    inputName: "files[]"
                };
                this.opts = { ...r,
                    ...t
                }, this.i18nInit(), this.render = this.render.bind(this), this.handleInputChange = this.handleInputChange.bind(this), this.handleClick = this.handleClick.bind(this)
            }
            addFiles(e) {
                let t = e.map(r => ({
                    source: this.id,
                    name: r.name,
                    type: r.type,
                    data: r
                }));
                try {
                    this.uppy.addFiles(t)
                } catch (r) {
                    this.uppy.log(r)
                }
            }
            handleInputChange(e) {
                this.uppy.log("[FileInput] Something selected through input...");
                let t = _e(e.target.files);
                this.addFiles(t), e.target.value = null
            }
            handleClick() {
                this.input.click()
            }
            render() {
                let e = {
                        width: "0.1px",
                        height: "0.1px",
                        opacity: 0,
                        overflow: "hidden",
                        position: "absolute",
                        zIndex: -1
                    },
                    {
                        restrictions: t
                    } = this.uppy.opts,
                    r = t.allowedFileTypes ? t.allowedFileTypes.join(",") : null;
                return u("div", {
                    className: "uppy-FileInput-container"
                }, u("input", {
                    className: "uppy-FileInput-input",
                    style: this.opts.pretty && e,
                    type: "file",
                    name: this.opts.inputName,
                    onChange: this.handleInputChange,
                    multiple: t.maxNumberOfFiles !== 1,
                    accept: r,
                    ref: s => {
                        this.input = s
                    }
                }), this.opts.pretty && u("button", {
                    className: "uppy-FileInput-btn",
                    type: "button",
                    onClick: this.handleClick
                }, this.i18n("chooseFiles")))
            }
            install() {
                let {
                    target: e
                } = this.opts;
                e && this.mount(e, this)
            }
            uninstall() {
                this.unmount()
            }
        };
    n(fr, "FileInput");
    fr.VERSION = qw.version;
    var Fm = oe(xm(), 1);
    var Zs = class extends ie {
        constructor(e) {
            super(e), this.granularRotateOnChange = t => {
                let {
                    rotationAngle: r,
                    rotationDelta: s
                } = this.state, o = Number(t.target.value) - s;
                if (cancelAnimationFrame(this.granularRotateOnInputNextFrame), o !== 0) {
                    let a = r + o;
                    this.granularRotateOnInputNextFrame = requestAnimationFrame(() => {
                        this.cropper.rotateTo(a)
                    })
                }
            }, this.state = {
                rotationAngle: 0,
                rotationDelta: 0
            }
        }
        componentDidMount() {
            let {
                opts: e,
                storeCropperInstance: t
            } = this.props;
            this.cropper = new Fm.default(this.imgElement, e.cropperOptions), t(this.cropper), e.actions.granularRotate && this.imgElement.addEventListener("crop", r => {
                let s = r.detail.rotate;
                this.setState({
                    rotationAngle: s,
                    rotationDelta: (s + 405) % 90 - 45
                })
            })
        }
        componentWillUnmount() {
            this.cropper.destroy()
        }
        renderGranularRotate() {
            let {
                i18n: e
            } = this.props, {
                rotationDelta: t,
                rotationAngle: r
            } = this.state;
            return u("label", {
                "data-microtip-position": "top",
                role: "tooltip",
                "aria-label": `${r}\xBA`,
                className: "uppy-ImageCropper-rangeWrapper uppy-u-reset"
            }, u("input", {
                className: "uppy-ImageCropper-range uppy-u-reset",
                type: "range",
                onInput: this.granularRotateOnChange,
                onChange: this.granularRotateOnChange,
                value: t,
                min: "-45",
                max: "44",
                "aria-label": e("rotate")
            }))
        }
        renderRevert() {
            let {
                i18n: e
            } = this.props;
            return u("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn",
                "aria-label": e("revert"),
                "data-microtip-position": "top",
                onClick: () => {
                    this.cropper.reset(), this.cropper.setAspectRatio(0)
                }
            }, u("svg", {
                "aria-hidden": "true",
                className: "uppy-c-icon",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, u("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }), u("path", {
                d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
            })))
        }
        renderRotate() {
            let {
                i18n: e
            } = this.props;
            return u("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn",
                onClick: () => this.cropper.rotate(-90),
                "aria-label": e("rotate"),
                "data-microtip-position": "top"
            }, u("svg", {
                "aria-hidden": "true",
                className: "uppy-c-icon",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, u("path", {
                d: "M0 0h24v24H0V0zm0 0h24v24H0V0z",
                fill: "none"
            }), u("path", {
                d: "M14 10a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2h8zm0 1.75H6a.25.25 0 00-.243.193L5.75 12v7a.25.25 0 00.193.243L6 19.25h8a.25.25 0 00.243-.193L14.25 19v-7a.25.25 0 00-.193-.243L14 11.75zM12 .76V4c2.3 0 4.61.88 6.36 2.64a8.95 8.95 0 012.634 6.025L21 13a1 1 0 01-1.993.117L19 13h-.003a6.979 6.979 0 00-2.047-4.95 6.97 6.97 0 00-4.652-2.044L12 6v3.24L7.76 5 12 .76z"
            })))
        }
        renderFlip() {
            let {
                i18n: e
            } = this.props;
            return u("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn",
                "aria-label": e("flipHorizontal"),
                "data-microtip-position": "top",
                onClick: () => this.cropper.scaleX(-this.cropper.getData().scaleX || -1)
            }, u("svg", {
                "aria-hidden": "true",
                className: "uppy-c-icon",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, u("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }), u("path", {
                d: "M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z"
            })))
        }
        renderZoomIn() {
            let {
                i18n: e
            } = this.props;
            return u("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn",
                "aria-label": e("zoomIn"),
                "data-microtip-position": "top",
                onClick: () => this.cropper.zoom(.1)
            }, u("svg", {
                "aria-hidden": "true",
                className: "uppy-c-icon",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24"
            }, u("path", {
                d: "M0 0h24v24H0V0z",
                fill: "none"
            }), u("path", {
                d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            }), u("path", {
                d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"
            })))
        }
        renderZoomOut() {
            let {
                i18n: e
            } = this.props;
            return u("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn",
                "aria-label": e("zoomOut"),
                "data-microtip-position": "top",
                onClick: () => this.cropper.zoom(-.1)
            }, u("svg", {
                "aria-hidden": "true",
                className: "uppy-c-icon",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, u("path", {
                d: "M0 0h24v24H0V0z",
                fill: "none"
            }), u("path", {
                d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"
            })))
        }
        renderCropSquare() {
            let {
                i18n: e
            } = this.props;
            return u("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn",
                "aria-label": e("aspectRatioSquare"),
                "data-microtip-position": "top",
                onClick: () => this.cropper.setAspectRatio(1)
            }, u("svg", {
                "aria-hidden": "true",
                className: "uppy-c-icon",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, u("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }), u("path", {
                d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
            })))
        }
        renderCropWidescreen() {
            let {
                i18n: e
            } = this.props;
            return u("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn",
                "aria-label": e("aspectRatioLandscape"),
                "data-microtip-position": "top",
                onClick: () => this.cropper.setAspectRatio(16 / 9)
            }, u("svg", {
                "aria-hidden": "true",
                className: "uppy-c-icon",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, u("path", {
                d: "M 19,4.9999992 V 17.000001 H 4.9999998 V 6.9999992 H 19 m 0,-2 H 4.9999998 c -1.0999999,0 -1.9999999,0.9000001 -1.9999999,2 V 17.000001 c 0,1.1 0.9,2 1.9999999,2 H 19 c 1.1,0 2,-0.9 2,-2 V 6.9999992 c 0,-1.0999999 -0.9,-2 -2,-2 z"
            }), u("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
            })))
        }
        renderCropWidescreenVertical() {
            let {
                i18n: e
            } = this.props;
            return u("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn",
                "aria-label": e("aspectRatioPortrait"),
                "data-microtip-position": "top",
                onClick: () => this.cropper.setAspectRatio(9 / 16)
            }, u("svg", {
                "aria-hidden": "true",
                className: "uppy-c-icon",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, u("path", {
                d: "M 19.000001,19 H 6.999999 V 5 h 10.000002 v 14 m 2,0 V 5 c 0,-1.0999999 -0.9,-1.9999999 -2,-1.9999999 H 6.999999 c -1.1,0 -2,0.9 -2,1.9999999 v 14 c 0,1.1 0.9,2 2,2 h 10.000002 c 1.1,0 2,-0.9 2,-2 z"
            }), u("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            })))
        }
        render() {
            let {
                currentImage: e,
                opts: t
            } = this.props, {
                actions: r
            } = t, s = URL.createObjectURL(e.data);
            return u("div", {
                className: "uppy-ImageCropper"
            }, u("div", {
                className: "uppy-ImageCropper-container"
            }, u("img", {
                className: "uppy-ImageCropper-image",
                alt: e.name,
                src: s,
                ref: o => {
                    this.imgElement = o
                }
            })), u("div", {
                className: "uppy-ImageCropper-controls"
            }, r.revert && this.renderRevert(), r.rotate && this.renderRotate(), r.granularRotate && this.renderGranularRotate(), r.flip && this.renderFlip(), r.zoomIn && this.renderZoomIn(), r.zoomOut && this.renderZoomOut(), r.cropSquare && this.renderCropSquare(), r.cropWidescreen && this.renderCropWidescreen(), r.cropWidescreenVertical && this.renderCropWidescreenVertical()))
        }
    };
    n(Zs, "Editor");
    var Em = {
        strings: {
            revert: "Revert",
            rotate: "Rotate",
            zoomIn: "Zoom in",
            zoomOut: "Zoom out",
            flipHorizontal: "Flip horizontal",
            aspectRatioSquare: "Crop square",
            aspectRatioLandscape: "Crop landscape (16:9)",
            aspectRatioPortrait: "Crop portrait (9:16)"
        }
    };
    var Vw = {
            version: "2.1.0"
        },
        mr = class extends V {
            constructor(e, t) {
                super(e, t), this.save = () => {
                    let a = n(h => {
                            let {
                                currentImage: c
                            } = this.getPluginState();
                            this.uppy.setFileState(c.id, {
                                data: h,
                                size: h.size,
                                preview: null
                            });
                            let d = this.uppy.getFile(c.id);
                            this.uppy.emit("thumbnail:request", d), this.setPluginState({
                                currentImage: d
                            }), this.uppy.emit("file-editor:complete", d)
                        }, "saveBlobCallback"),
                        {
                            currentImage: l
                        } = this.getPluginState();
                    this.cropper.getCroppedCanvas(this.opts.cropperOptions.croppedCanvasOptions).toBlob(a, l.type, this.opts.quality)
                }, this.storeCropperInstance = a => {
                    this.cropper = a
                }, this.selectFile = a => {
                    this.uppy.emit("file-editor:start", a), this.setPluginState({
                        currentImage: a
                    })
                }, this.id = this.opts.id || "ImageEditor", this.title = "Image Editor", this.type = "editor", this.defaultLocale = Em;
                let r = {
                        viewMode: 1,
                        background: !1,
                        autoCropArea: 1,
                        responsive: !0,
                        croppedCanvasOptions: {}
                    },
                    s = {
                        revert: !0,
                        rotate: !0,
                        granularRotate: !0,
                        flip: !0,
                        zoomIn: !0,
                        zoomOut: !0,
                        cropSquare: !0,
                        cropWidescreen: !0,
                        cropWidescreenVertical: !0
                    },
                    o = {
                        quality: .8
                    };
                this.opts = { ...o,
                    ...t,
                    actions: { ...s,
                        ...t.actions
                    },
                    cropperOptions: { ...r,
                        ...t.cropperOptions
                    }
                }, this.i18nInit()
            }
            canEditFile(e) {
                if (!e.type || e.isRemote) return !1;
                let t = e.type.split("/")[1];
                return !!/^(jpe?g|gif|png|bmp|webp)$/.test(t)
            }
            install() {
                this.setPluginState({
                    currentImage: null
                });
                let {
                    target: e
                } = this.opts;
                e && this.mount(e, this)
            }
            uninstall() {
                let {
                    currentImage: e
                } = this.getPluginState();
                if (e) {
                    let t = this.uppy.getFile(e.id);
                    this.uppy.emit("file-editor:cancel", t)
                }
                this.unmount()
            }
            render() {
                let {
                    currentImage: e
                } = this.getPluginState();
                return e === null || e.isRemote ? null : u(Zs, {
                    currentImage: e,
                    storeCropperInstance: this.storeCropperInstance,
                    save: this.save,
                    opts: this.opts,
                    i18n: this.i18n
                })
            }
        };
    n(mr, "ImageEditor");
    mr.VERSION = Vw.version;
    var Ww = {
            version: "3.0.1"
        },
        gr = class extends V {
            constructor(e, t) {
                super(e, t), this.id = this.opts.id || "ProgressBar", this.title = "Progress Bar", this.type = "progressindicator";
                let r = {
                    target: "body",
                    fixed: !1,
                    hideAfterFinish: !0
                };
                this.opts = { ...r,
                    ...t
                }, this.render = this.render.bind(this)
            }
            render(e) {
                let t = e.totalProgress || 0,
                    r = (t === 0 || t === 100) && this.opts.hideAfterFinish;
                return u("div", {
                    className: "uppy uppy-ProgressBar",
                    style: {
                        position: this.opts.fixed ? "fixed" : "initial"
                    },
                    "aria-hidden": r
                }, u("div", {
                    className: "uppy-ProgressBar-inner",
                    style: {
                        width: `${t}%`
                    }
                }), u("div", {
                    className: "uppy-ProgressBar-percentage"
                }, t))
            }
            install() {
                let {
                    target: e
                } = this.opts;
                e && this.mount(e, this)
            }
            uninstall() {
                this.unmount()
            }
        };
    n(gr, "ProgressBar");
    gr.VERSION = Ww.version;
    var Kw = {
        "audio/mp3": "mp3",
        "audio/mp4": "mp4",
        "audio/ogg": "ogg",
        "audio/webm": "webm",
        "image/gif": "gif",
        "image/heic": "heic",
        "image/heif": "heif",
        "image/jpeg": "jpg",
        "image/png": "png",
        "image/svg+xml": "svg",
        "video/mp4": "mp4",
        "video/ogg": "ogv",
        "video/quicktime": "mov",
        "video/webm": "webm",
        "video/x-matroska": "mkv",
        "video/x-msvideo": "avi"
    };

    function ui(i) {
        return [i] = i.split(";", 1), Kw[i] || null
    }
    n(ui, "getFileTypeExtension");

    function Sh() {
        var i;
        return typeof MediaRecorder == "function" && typeof((i = MediaRecorder.prototype) == null ? void 0 : i.start) == "function"
    }
    n(Sh, "supportsMediaRecorder");
    var Fh, at, _h, Om, Ph = 0,
        Dm = [],
        dl = [],
        Rm = W.__b,
        Cm = W.__r,
        Tm = W.diffed,
        km = W.__c,
        Am = W.unmount;

    function Nm(i, e) {
        W.__h && W.__h(at, i, Ph || e), Ph = 0;
        var t = at.__H || (at.__H = {
            __: [],
            __h: []
        });
        return i >= t.__.length && t.__.push({
            __V: dl
        }), t.__[i]
    }
    n(Nm, "p");

    function Eh(i, e) {
        var t = Nm(Fh++, 3);
        !W.__s && Bm(t.__H, e) && (t.__ = i, t.u = e, at.__H.__h.push(t))
    }
    n(Eh, "_");

    function Oh(i) {
        return Ph = 5, Gw(function() {
            return {
                current: i
            }
        }, [])
    }
    n(Oh, "s");

    function Gw(i, e) {
        var t = Nm(Fh++, 7);
        return Bm(t.__H, e) ? (t.__V = i(), t.u = e, t.__h = i, t.__V) : t.__
    }
    n(Gw, "F");

    function Xw() {
        for (var i; i = Dm.shift();)
            if (i.__P) try {
                i.__H.__h.forEach(pl), i.__H.__h.forEach(xh), i.__H.__h = []
            } catch (e) {
                i.__H.__h = [], W.__e(e, i.__v)
            }
    }
    n(Xw, "b");
    W.__b = function(i) {
        at = null, Rm && Rm(i)
    }, W.__r = function(i) {
        Cm && Cm(i), Fh = 0;
        var e = (at = i.__c).__H;
        e && (_h === at ? (e.__h = [], at.__h = [], e.__.forEach(function(t) {
            t.__V = dl, t.u = void 0
        })) : (e.__h.forEach(pl), e.__h.forEach(xh), e.__h = [])), _h = at
    }, W.diffed = function(i) {
        Tm && Tm(i);
        var e = i.__c;
        e && e.__H && (e.__H.__h.length && (Dm.push(e) !== 1 && Om === W.requestAnimationFrame || ((Om = W.requestAnimationFrame) || function(t) {
            var r, s = n(function() {
                    clearTimeout(o), Um && cancelAnimationFrame(r), setTimeout(t)
                }, "u"),
                o = setTimeout(s, 100);
            Um && (r = requestAnimationFrame(s))
        })(Xw)), e.__H.__.forEach(function(t) {
            t.u && (t.__H = t.u), t.__V !== dl && (t.__ = t.__V), t.u = void 0, t.__V = dl
        })), _h = at = null
    }, W.__c = function(i, e) {
        e.some(function(t) {
            try {
                t.__h.forEach(pl), t.__h = t.__h.filter(function(r) {
                    return !r.__ || xh(r)
                })
            } catch (r) {
                e.some(function(s) {
                    s.__h && (s.__h = [])
                }), e = [], W.__e(r, t.__v)
            }
        }), km && km(i, e)
    }, W.unmount = function(i) {
        Am && Am(i);
        var e, t = i.__c;
        t && t.__H && (t.__H.__.forEach(function(r) {
            try {
                pl(r)
            } catch (s) {
                e = s
            }
        }), e && W.__e(e, t.__v))
    };
    var Um = typeof requestAnimationFrame == "function";

    function pl(i) {
        var e = at,
            t = i.__c;
        typeof t == "function" && (i.__c = void 0, t()), at = e
    }
    n(pl, "j");

    function xh(i) {
        var e = at;
        i.__c = i.__(), at = e
    }
    n(xh, "k");

    function Bm(i, e) {
        return !i || i.length !== e.length || e.some(function(t, r) {
            return t !== i[r]
        })
    }
    n(Bm, "w");

    function Rh(i) {
        let {
            recording: e,
            onStartRecording: t,
            onStopRecording: r,
            i18n: s
        } = i;
        return e ? u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-Audio-button",
            type: "button",
            title: s("stopAudioRecording"),
            "aria-label": s("stopAudioRecording"),
            onClick: r,
            "data-uppy-super-focusable": !0
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "100",
            height: "100",
            viewBox: "0 0 100 100"
        }, u("rect", {
            x: "15",
            y: "15",
            width: "70",
            height: "70"
        }))) : u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-Audio-button",
            type: "button",
            title: s("startAudioRecording"),
            "aria-label": s("startAudioRecording"),
            onClick: t,
            "data-uppy-super-focusable": !0
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "14px",
            height: "20px",
            viewBox: "0 0 14 20"
        }, u("path", {
            d: "M7 14c2.21 0 4-1.71 4-3.818V3.818C11 1.71 9.21 0 7 0S3 1.71 3 3.818v6.364C3 12.29 4.79 14 7 14zm6.364-7h-.637a.643.643 0 0 0-.636.65V9.6c0 3.039-2.565 5.477-5.6 5.175-2.645-.264-4.582-2.692-4.582-5.407V7.65c0-.36-.285-.65-.636-.65H.636A.643.643 0 0 0 0 7.65v1.631c0 3.642 2.544 6.888 6.045 7.382v1.387H3.818a.643.643 0 0 0-.636.65v.65c0 .36.285.65.636.65h6.364c.351 0 .636-.29.636-.65v-.65c0-.36-.285-.65-.636-.65H7.955v-1.372C11.363 16.2 14 13.212 14 9.6V7.65c0-.36-.285-.65-.636-.65z",
            fill: "#FFF",
            "fill-rule": "nonzero"
        })))
    }
    n(Rh, "RecordButton");

    function Ch(i) {
        return `${Math.floor(i/60)}:${String(i%60).padStart(2,0)}`
    }
    n(Ch, "formatSeconds");

    function Th(i) {
        let {
            recordingLengthSeconds: e,
            i18n: t
        } = i, r = Ch(e);
        return u("span", {
            "aria-label": t("recordingLength", {
                recording_length: r
            })
        }, r)
    }
    n(Th, "RecordingLength");
    var Im = n(i => {
        let {
            currentDeviceId: e,
            audioSources: t,
            onChangeSource: r
        } = i;
        return u("div", {
            className: "uppy-Audio-videoSource"
        }, u("select", {
            className: "uppy-u-reset uppy-Audio-audioSource-select",
            onChange: s => {
                r(s.target.value)
            }
        }, t.map(s => u("option", {
            key: s.deviceId,
            value: s.deviceId,
            selected: s.deviceId === e
        }, s.label))))
    }, "default");

    function Yw(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(Yw, "_classPrivateFieldLooseBase");
    var Jw = 0;

    function Qw(i) {
        return "__private_" + Jw++ + "_" + i
    }
    n(Qw, "_classPrivateFieldLooseKey");

    function Lm(i) {
        return typeof i == "function"
    }
    n(Lm, "isFunction");

    function cn(i) {
        return Lm(i) ? i() : i
    }
    n(cn, "result");
    var kh = Qw("draw"),
        eo = class {
            constructor(e, t) {
                t === void 0 && (t = {}), Object.defineProperty(this, kh, {
                    writable: !0,
                    value: () => this.draw()
                });
                let r = t.canvas || {},
                    s = t.canvasContext || {};
                this.analyser = null, this.bufferLength = 0, this.dataArray = [], this.canvas = e, this.width = cn(r.width) || this.canvas.width, this.height = cn(r.height) || this.canvas.height, this.canvas.width = this.width, this.canvas.height = this.height, this.canvasContext = this.canvas.getContext("2d"), this.canvasContext.fillStyle = cn(s.fillStyle) || "rgb(255, 255, 255)", this.canvasContext.strokeStyle = cn(s.strokeStyle) || "rgb(0, 0, 0)", this.canvasContext.lineWidth = cn(s.lineWidth) || 1, this.onDrawFrame = Lm(t.onDrawFrame) ? t.onDrawFrame : () => {}
            }
            addSource(e) {
                this.streamSource = e, this.audioContext = this.streamSource.context, this.analyser = this.audioContext.createAnalyser(), this.analyser.fftSize = 2048, this.bufferLength = this.analyser.frequencyBinCount, this.source = this.audioContext.createBufferSource(), this.dataArray = new Uint8Array(this.bufferLength), this.analyser.getByteTimeDomainData(this.dataArray), this.streamSource.connect(this.analyser)
            }
            draw() {
                let {
                    analyser: e,
                    dataArray: t,
                    bufferLength: r
                } = this, s = this.canvasContext, o = this.width, a = this.height;
                e && e.getByteTimeDomainData(t), s.fillRect(0, 0, o, a), s.beginPath();
                let l = o * 1 / r,
                    h = 0;
                r || s.moveTo(0, this.height / 2);
                for (let c = 0; c < r; c++) {
                    let f = t[c] / 128 * (a / 2);
                    c === 0 ? s.moveTo(h, f) : s.lineTo(h, f), h += l
                }
                s.lineTo(o, a / 2), s.stroke(), this.onDrawFrame(this), requestAnimationFrame(Yw(this, kh)[kh])
            }
        };
    n(eo, "AudioOscilloscope");

    function Zw(i) {
        let {
            onSubmit: e,
            i18n: t
        } = i;
        return u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-Audio-button uppy-Audio-button--submit",
            type: "button",
            title: t("submitRecordedFile"),
            "aria-label": t("submitRecordedFile"),
            onClick: e,
            "data-uppy-super-focusable": !0
        }, u("svg", {
            width: "12",
            height: "9",
            viewBox: "0 0 12 9",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon"
        }, u("path", {
            fill: "#fff",
            fillRule: "nonzero",
            d: "M10.66 0L12 1.31 4.136 9 0 4.956l1.34-1.31L4.136 6.38z"
        })))
    }
    n(Zw, "SubmitButton");
    var Mm = Zw;

    function e2(i) {
        let {
            onDiscard: e,
            i18n: t
        } = i;
        return u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-Audio-button",
            type: "button",
            title: t("discardRecordedFile"),
            "aria-label": t("discardRecordedFile"),
            onClick: e,
            "data-uppy-super-focusable": !0
        }, u("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 13 13",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            className: "uppy-c-icon"
        }, u("g", {
            fill: "#FFF",
            fillRule: "evenodd"
        }, u("path", {
            d: "M.496 11.367L11.103.76l1.414 1.414L1.911 12.781z"
        }), u("path", {
            d: "M11.104 12.782L.497 2.175 1.911.76l10.607 10.606z"
        }))))
    }
    n(e2, "DiscardButton");
    var zm = e2;

    function Ah(i) {
        let {
            stream: e,
            recordedAudio: t,
            onStop: r,
            recording: s,
            supportsRecording: o,
            audioSources: a,
            showAudioSourceDropdown: l,
            onSubmit: h,
            i18n: c,
            onStartRecording: d,
            onStopRecording: f,
            onDiscardRecordedAudio: y,
            recordingLengthSeconds: w
        } = i, S = Oh(null), R = Oh(null);
        Eh(() => () => {
            R.current = null, r()
        }, [r]), Eh(() => {
            if (!t && (R.current = new eo(S.current, {
                canvas: {
                    width: 600,
                    height: 600
                },
                canvasContext: {
                    lineWidth: 2,
                    fillStyle: "rgb(0,0,0)",
                    strokeStyle: "green"
                }
            }), R.current.draw(), e)) {
                let q = new AudioContext().createMediaStreamSource(e);
                R.current.addSource(q)
            }
        }, [t, e]);
        let x = t != null,
            F = !x && o,
            N = l && !x && a && a.length > 1;
        return u("div", {
            className: "uppy-Audio-container"
        }, u("div", {
            className: "uppy-Audio-audioContainer"
        }, x ? u("audio", {
            className: "uppy-Audio-player",
            controls: !0,
            src: t
        }) : u("canvas", {
            ref: S,
            className: "uppy-Audio-canvas"
        })), u("div", {
            className: "uppy-Audio-footer"
        }, u("div", {
            className: "uppy-Audio-audioSourceContainer"
        }, N ? Im(i) : null), u("div", {
            className: "uppy-Audio-buttonContainer"
        }, F && u(Rh, {
            recording: s,
            onStartRecording: d,
            onStopRecording: f,
            i18n: c
        }), x && u(Mm, {
            onSubmit: h,
            i18n: c
        }), x && u(zm, {
            onDiscard: y,
            i18n: c
        })), u("div", {
            className: "uppy-Audio-recordingLength"
        }, !x && u(Th, {
            recordingLengthSeconds: w,
            i18n: c
        }))))
    }
    n(Ah, "RecordingScreen");
    var jm = n(i => {
        let {
            icon: e,
            hasAudio: t,
            i18n: r
        } = i;
        return u("div", {
            className: "uppy-Audio-permissons"
        }, u("div", {
            className: "uppy-Audio-permissonsIcon"
        }, e()), u("h1", {
            className: "uppy-Audio-title"
        }, r(t ? "allowAudioAccessTitle" : "noAudioTitle")), u("p", null, r(t ? "allowAudioAccessDescription" : "noAudioDescription")))
    }, "default");
    var Hm = {
        strings: {
            pluginNameAudio: "Audio",
            startAudioRecording: "Begin audio recording",
            stopAudioRecording: "Stop audio recording",
            allowAudioAccessTitle: "Please allow access to your microphone",
            allowAudioAccessDescription: "In order to record audio, please allow microphone access for this site.",
            noAudioTitle: "Microphone Not Available",
            noAudioDescription: "In order to record audio, please connect a microphone or another audio input device",
            recordingStoppedMaxSize: "Recording stopped because the file size is about to exceed the limit",
            recordingLength: "Recording length %{recording_length}",
            submitRecordedFile: "Submit recorded file",
            discardRecordedFile: "Discard recorded file"
        }
    };

    function Mh() {
        return Mh = Object.assign ? Object.assign.bind() : function(i) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r])
            }
            return i
        }, Mh.apply(this, arguments)
    }
    n(Mh, "_extends");

    function I(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(I, "_classPrivateFieldLooseBase");
    var t2 = 0;

    function Ie(i) {
        return "__private_" + t2++ + "_" + i
    }
    n(Ie, "_classPrivateFieldLooseKey");
    var i2 = {
            version: "1.0.4"
        },
        Ne = Ie("stream"),
        ji = Ie("audioActive"),
        me = Ie("recordingChunks"),
        fe = Ie("recorder"),
        Hi = Ie("capturedMediaFile"),
        Be = Ie("mediaDevices"),
        dn = Ie("supportsUserMedia"),
        Uh = Ie("hasAudioCheck"),
        Kr = Ie("start"),
        Dh = Ie("startRecording"),
        pn = Ie("stopRecording"),
        Nh = Ie("discardRecordedAudio"),
        Bh = Ie("submit"),
        $i = Ie("stop"),
        Ih = Ie("getAudio"),
        Lh = Ie("changeSource"),
        Gr = Ie("updateSources"),
        yr = class extends V {
            constructor(e, t) {
                var r;
                super(e, t), r = this, Object.defineProperty(this, Ih, {
                    value: s2
                }), Object.defineProperty(this, Uh, {
                    value: r2
                }), Object.defineProperty(this, Ne, {
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, ji, {
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, me, {
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, fe, {
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, Hi, {
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, Be, {
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, dn, {
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, Kr, {
                    writable: !0,
                    value: function(s) {
                        if (s === void 0 && (s = null), !I(r, dn)[dn]) return Promise.reject(new Error("Microphone access not supported"));
                        I(r, ji)[ji] = !0, I(r, Uh)[Uh]().then(o => (r.setPluginState({
                            hasAudio: o
                        }), I(r, Be)[Be].getUserMedia({
                            audio: !0
                        }).then(a => {
                            I(r, Ne)[Ne] = a;
                            let l = null,
                                h = a.getAudioTracks();
                            !s || !s.deviceId ? l = h[0].getSettings().deviceId : h.forEach(c => {
                                c.getSettings().deviceId === s.deviceId && (l = c.getSettings().deviceId)
                            }), I(r, Gr)[Gr](), r.setPluginState({
                                currentDeviceId: l,
                                audioReady: !0
                            })
                        }).catch(a => {
                            r.setPluginState({
                                audioReady: !1,
                                cameraError: a
                            }), r.uppy.info(a.message, "error")
                        })))
                    }
                }), Object.defineProperty(this, Dh, {
                    writable: !0,
                    value: () => {
                        I(this, fe)[fe] = new MediaRecorder(I(this, Ne)[Ne]), I(this, me)[me] = [];
                        let s = !1;
                        I(this, fe)[fe].addEventListener("dataavailable", o => {
                            I(this, me)[me].push(o.data);
                            let {
                                restrictions: a
                            } = this.uppy.opts;
                            if (I(this, me)[me].length > 1 && a.maxFileSize != null && !s) {
                                let l = I(this, me)[me].reduce((f, y) => f + y.size, 0),
                                    c = (l - I(this, me)[me][0].size) / (I(this, me)[me].length - 1) * 3,
                                    d = Math.max(0, a.maxFileSize - c);
                                l > d && (s = !0, this.uppy.info(this.i18n("recordingStoppedMaxSize"), "warning", 4e3), I(this, pn)[pn]())
                            }
                        }), I(this, fe)[fe].start(500), this.recordingLengthTimer = setInterval(() => {
                            let o = this.getPluginState().recordingLengthSeconds;
                            this.setPluginState({
                                recordingLengthSeconds: o + 1
                            })
                        }, 1e3), this.setPluginState({
                            isRecording: !0
                        })
                    }
                }), Object.defineProperty(this, pn, {
                    writable: !0,
                    value: () => new Promise(o => {
                        I(this, fe)[fe].addEventListener("stop", () => {
                            o()
                        }), I(this, fe)[fe].stop(), clearInterval(this.recordingLengthTimer), this.setPluginState({
                            recordingLengthSeconds: 0
                        })
                    }).then(() => (this.setPluginState({
                        isRecording: !1
                    }), I(this, Ih)[Ih]())).then(o => {
                        try {
                            I(this, Hi)[Hi] = o, this.setPluginState({
                                recordedAudio: URL.createObjectURL(o.data)
                            })
                        } catch (a) {
                            a.isRestriction || this.uppy.log(a)
                        }
                    }).then(() => {
                        I(this, me)[me] = null, I(this, fe)[fe] = null
                    }, o => {
                        throw I(this, me)[me] = null, I(this, fe)[fe] = null, o
                    })
                }), Object.defineProperty(this, Nh, {
                    writable: !0,
                    value: () => {
                        this.setPluginState({
                            recordedAudio: null
                        }), I(this, Hi)[Hi] = null
                    }
                }), Object.defineProperty(this, Bh, {
                    writable: !0,
                    value: () => {
                        try {
                            I(this, Hi)[Hi] && this.uppy.addFile(I(this, Hi)[Hi])
                        } catch (s) {
                            s.isRestriction || this.uppy.log(s, "warning")
                        }
                    }
                }), Object.defineProperty(this, $i, {
                    writable: !0,
                    value: async () => {
                        I(this, Ne)[Ne] && I(this, Ne)[Ne].getAudioTracks().forEach(o => o.stop()), I(this, fe)[fe] && await new Promise(s => {
                            I(this, fe)[fe].addEventListener("stop", s, {
                                once: !0
                            }), I(this, fe)[fe].stop(), clearInterval(this.recordingLengthTimer)
                        }), I(this, me)[me] = null, I(this, fe)[fe] = null, I(this, ji)[ji] = !1, I(this, Ne)[Ne] = null, this.setPluginState({
                            recordedAudio: null,
                            isRecording: !1,
                            recordingLengthSeconds: 0
                        })
                    }
                }), Object.defineProperty(this, Lh, {
                    writable: !0,
                    value: s => {
                        I(this, $i)[$i](), I(this, Kr)[Kr]({
                            deviceId: s
                        })
                    }
                }), Object.defineProperty(this, Gr, {
                    writable: !0,
                    value: () => {
                        I(this, Be)[Be].enumerateDevices().then(s => {
                            this.setPluginState({
                                audioSources: s.filter(o => o.kind === "audioinput")
                            })
                        })
                    }
                }), I(this, Be)[Be] = navigator.mediaDevices, I(this, dn)[dn] = I(this, Be)[Be] != null, this.id = this.opts.id || "Audio", this.type = "acquirer", this.icon = () => u("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    width: "32px",
                    height: "32px",
                    viewBox: "0 0 32 32"
                }, u("g", {
                    fill: "none",
                    "fill-rule": "evenodd"
                }, u("rect", {
                    fill: "#9B59B6",
                    width: "32",
                    height: "32",
                    rx: "16"
                }), u("path", {
                    d: "M16 20c-2.21 0-4-1.71-4-3.818V9.818C12 7.71 13.79 6 16 6s4 1.71 4 3.818v6.364C20 18.29 18.21 20 16 20zm-6.364-7h.637c.351 0 .636.29.636.65v1.95c0 3.039 2.565 5.477 5.6 5.175 2.645-.264 4.582-2.692 4.582-5.407V13.65c0-.36.285-.65.636-.65h.637c.351 0 .636.29.636.65v1.631c0 3.642-2.544 6.888-6.045 7.382v1.387h2.227c.351 0 .636.29.636.65v.65c0 .36-.285.65-.636.65h-6.364a.643.643 0 0 1-.636-.65v-.65c0-.36.285-.65.636-.65h2.227v-1.372C11.637 22.2 9 19.212 9 15.6v-1.95c0-.36.285-.65.636-.65z",
                    fill: "#FFF",
                    "fill-rule": "nonzero"
                }))), this.defaultLocale = Hm, this.opts = { ...t
                }, this.i18nInit(), this.title = this.i18n("pluginNameAudio"), this.setPluginState({
                    hasAudio: !1,
                    audioReady: !1,
                    cameraError: null,
                    recordingLengthSeconds: 0,
                    audioSources: [],
                    currentDeviceId: null
                })
            }
            render() {
                I(this, ji)[ji] || I(this, Kr)[Kr]();
                let e = this.getPluginState();
                return !e.audioReady || !e.hasAudio ? u(jm, {
                    icon: this.icon,
                    i18n: this.i18n,
                    hasAudio: e.hasAudio
                }) : u(Ah, Mh({}, e, {
                    audioActive: I(this, ji)[ji],
                    onChangeSource: I(this, Lh)[Lh],
                    onStartRecording: I(this, Dh)[Dh],
                    onStopRecording: I(this, pn)[pn],
                    onDiscardRecordedAudio: I(this, Nh)[Nh],
                    onSubmit: I(this, Bh)[Bh],
                    onStop: I(this, $i)[$i],
                    i18n: this.i18n,
                    showAudioSourceDropdown: this.opts.showAudioSourceDropdown,
                    supportsRecording: Sh(),
                    recording: e.isRecording,
                    stream: I(this, Ne)[Ne]
                }))
            }
            install() {
                this.setPluginState({
                    audioReady: !1,
                    recordingLengthSeconds: 0
                });
                let {
                    target: e
                } = this.opts;
                e && this.mount(e, this), I(this, Be)[Be] && (I(this, Gr)[Gr](), I(this, Be)[Be].ondevicechange = () => {
                    if (I(this, Gr)[Gr](), I(this, Ne)[Ne]) {
                        let t = !0,
                            {
                                audioSources: r,
                                currentDeviceId: s
                            } = this.getPluginState();
                        r.forEach(o => {
                            s === o.deviceId && (t = !1)
                        }), t && (I(this, $i)[$i](), I(this, Kr)[Kr]())
                    }
                })
            }
            uninstall() {
                I(this, Ne)[Ne] && I(this, $i)[$i](), this.unmount()
            }
        };
    n(yr, "Audio");

    function r2() {
        return I(this, Be)[Be] ? I(this, Be)[Be].enumerateDevices().then(i => i.some(e => e.kind === "audioinput")) : Promise.resolve(!1)
    }
    n(r2, "_hasAudioCheck2");

    function s2() {
        let i = I(this, me)[me].find(o => {
                var a;
                return ((a = o.type) == null ? void 0 : a.length) > 0
            }).type,
            e = ui(i);
        if (!e) return Promise.reject(new Error(`Could not retrieve recording: Unsupported media type "${i}"`));
        let t = `audio-${Date.now()}.${e}`,
            r = new Blob(I(this, me)[me], {
                type: i
            }),
            s = {
                source: this.id,
                name: t,
                data: new Blob([r], {
                    type: i
                }),
                type: i
            };
        return Promise.resolve(s)
    }
    n(s2, "_getAudio2");
    yr.VERSION = i2.version;
    var $m = {
        strings: {
            pluginNameBox: "Box"
        }
    };
    var o2 = {
            version: "2.0.1"
        },
        hi = class extends V {
            constructor(e, t) {
                super(e, t), this.id = this.opts.id || "Box", Y.initPlugin(this, t), this.title = this.opts.title || "Box", this.icon = () => u("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32"
                }, u("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, u("rect", {
                    className: "uppy-ProviderIconBg",
                    fill: "#0061D5",
                    width: "32",
                    height: "32",
                    rx: "16"
                }), u("g", {
                    fill: "#fff",
                    fillRule: "nonzero"
                }, u("path", {
                    d: "m16.4 13.5c-1.6 0-3 0.9-3.7 2.2-0.7-1.3-2.1-2.2-3.7-2.2-1 0-1.8 0.3-2.5 0.8v-3.6c-0.1-0.3-0.5-0.7-1-0.7s-0.8 0.4-0.8 0.8v7c0 2.3 1.9 4.2 4.2 4.2 1.6 0 3-0.9 3.7-2.2 0.7 1.3 2.1 2.2 3.7 2.2 2.3 0 4.2-1.9 4.2-4.2 0.1-2.4-1.8-4.3-4.1-4.3m-7.5 6.8c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5m7.5 0c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5"
                }), u("path", {
                    d: "m27.2 20.6l-2.3-2.8 2.3-2.8c0.3-0.4 0.2-0.9-0.2-1.2s-1-0.2-1.3 0.2l-2 2.4-2-2.4c-0.3-0.4-0.9-0.4-1.3-0.2-0.4 0.3-0.5 0.8-0.2 1.2l2.3 2.8-2.3 2.8c-0.3 0.4-0.2 0.9 0.2 1.2s1 0.2 1.3-0.2l2-2.4 2 2.4c0.3 0.4 0.9 0.4 1.3 0.2 0.4-0.3 0.4-0.8 0.2-1.2"
                })))), this.provider = new Y(e, {
                    companionUrl: this.opts.companionUrl,
                    companionHeaders: this.opts.companionHeaders,
                    companionKeysParams: this.opts.companionKeysParams,
                    companionCookiesRule: this.opts.companionCookiesRule,
                    provider: "box",
                    pluginId: this.id
                }), this.defaultLocale = $m, this.i18nInit(), this.title = this.i18n("pluginNameBox"), this.onFirstRender = this.onFirstRender.bind(this), this.render = this.render.bind(this)
            }
            install() {
                this.view = new pe(this, {
                    provider: this.provider
                });
                let {
                    target: e
                } = this.opts;
                e && this.mount(e, this)
            }
            uninstall() {
                this.view.tearDown(), this.unmount()
            }
            onFirstRender() {
                return this.view.getFolder()
            }
            render(e) {
                return this.view.render(e)
            }
        };
    n(hi, "Box");
    hi.VERSION = o2.version;
    var qm = {
        strings: {
            pluginNameDropbox: "Dropbox"
        }
    };
    var n2 = {
            version: "3.0.1"
        },
        ci = class extends V {
            constructor(e, t) {
                super(e, t), this.id = this.opts.id || "Dropbox", Y.initPlugin(this, t), this.title = this.opts.title || "Dropbox", this.icon = () => u("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32"
                }, u("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, u("rect", {
                    className: "uppy-ProviderIconBg",
                    fill: "#0D2481",
                    width: "32",
                    height: "32",
                    rx: "16"
                }), u("path", {
                    d: "M11 8l5 3.185-5 3.186-5-3.186L11 8zm10 0l5 3.185-5 3.186-5-3.186L21 8zM6 17.556l5-3.185 5 3.185-5 3.186-5-3.186zm15-3.185l5 3.185-5 3.186-5-3.186 5-3.185zm-10 7.432l5-3.185 5 3.185-5 3.186-5-3.186z",
                    fill: "#FFF",
                    fillRule: "nonzero"
                }))), this.provider = new Y(e, {
                    companionUrl: this.opts.companionUrl,
                    companionHeaders: this.opts.companionHeaders,
                    companionKeysParams: this.opts.companionKeysParams,
                    companionCookiesRule: this.opts.companionCookiesRule,
                    provider: "dropbox",
                    pluginId: this.id
                }), this.defaultLocale = qm, this.i18nInit(), this.title = this.i18n("pluginNameDropbox"), this.onFirstRender = this.onFirstRender.bind(this), this.render = this.render.bind(this)
            }
            install() {
                this.view = new pe(this, {
                    provider: this.provider
                });
                let {
                    target: e
                } = this.opts;
                e && this.mount(e, this)
            }
            uninstall() {
                this.view.tearDown(), this.unmount()
            }
            onFirstRender() {
                return Promise.all([this.provider.fetchPreAuthToken(), this.view.getFolder()])
            }
            render(e) {
                return this.view.render(e)
            }
        };
    n(ci, "Dropbox");
    ci.VERSION = n2.version;
    var Vm = {
        strings: {
            pluginNameFacebook: "Facebook"
        }
    };
    var a2 = {
            version: "3.0.1"
        },
        di = class extends V {
            constructor(e, t) {
                super(e, t), this.id = this.opts.id || "Facebook", Y.initPlugin(this, t), this.title = this.opts.title || "Facebook", this.icon = () => u("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32"
                }, u("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, u("rect", {
                    className: "uppy-ProviderIconBg",
                    width: "32",
                    height: "32",
                    rx: "16",
                    fill: "#3C5A99"
                }), u("path", {
                    d: "M17.842 26v-8.667h2.653l.398-3.377h-3.051v-2.157c0-.978.248-1.644 1.527-1.644H21V7.132A19.914 19.914 0 0 0 18.623 7c-2.352 0-3.963 1.574-3.963 4.465v2.49H12v3.378h2.66V26h3.182z",
                    fill: "#FFF",
                    fillRule: "nonzero"
                }))), this.provider = new Y(e, {
                    companionUrl: this.opts.companionUrl,
                    companionHeaders: this.opts.companionHeaders,
                    companionKeysParams: this.opts.companionKeysParams,
                    companionCookiesRule: this.opts.companionCookiesRule,
                    provider: "facebook",
                    pluginId: this.id
                }), this.defaultLocale = Vm, this.i18nInit(), this.title = this.i18n("pluginNameFacebook"), this.onFirstRender = this.onFirstRender.bind(this), this.render = this.render.bind(this)
            }
            install() {
                this.view = new pe(this, {
                    provider: this.provider
                });
                let {
                    target: e
                } = this.opts;
                e && this.mount(e, this)
            }
            uninstall() {
                this.view.tearDown(), this.unmount()
            }
            onFirstRender() {
                return Promise.all([this.provider.fetchPreAuthToken(), this.view.getFolder()])
            }
            render(e) {
                let t = {};
                return this.getPluginState().files.length && !this.getPluginState().folders.length && (t.viewType = "grid", t.showFilter = !1, t.showTitles = !1), this.view.render(e, t)
            }
        };
    n(di, "Facebook");
    di.VERSION = a2.version;
    var to = class extends pe {
        toggleCheckbox(e, t) {
            e.stopPropagation(), e.preventDefault(), t.custom.isSharedDrive || super.toggleCheckbox(e, t)
        }
    };
    n(to, "DriveProviderViews");
    var Wm = {
        strings: {
            pluginNameGoogleDrive: "Google Drive"
        }
    };
    var l2 = {
            version: "3.0.1"
        },
        pi = class extends V {
            constructor(e, t) {
                super(e, t), this.id = this.opts.id || "GoogleDrive", this.title = this.opts.title || "Google Drive", Y.initPlugin(this, t), this.title = this.opts.title || "Google Drive", this.icon = () => u("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32"
                }, u("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, u("rect", {
                    className: "uppy-ProviderIconBg",
                    fill: "#4285F4",
                    width: "32",
                    height: "32",
                    rx: "16"
                }), u("path", {
                    d: "M25.216 17.736L19.043 7h-6.086l6.175 10.736h6.084zm-11.275.896L10.9 24h11.723l3.04-5.368H13.942zm-1.789-10.29l-5.816 10.29L9.38 24l5.905-10.29-3.132-5.369z",
                    fill: "#FFF"
                }))), this.provider = new Y(e, {
                    companionUrl: this.opts.companionUrl,
                    companionHeaders: this.opts.companionHeaders,
                    companionKeysParams: this.opts.companionKeysParams,
                    companionCookiesRule: this.opts.companionCookiesRule,
                    provider: "drive",
                    pluginId: this.id
                }), this.defaultLocale = Wm, this.i18nInit(), this.title = this.i18n("pluginNameGoogleDrive"), this.onFirstRender = this.onFirstRender.bind(this), this.render = this.render.bind(this)
            }
            install() {
                this.view = new to(this, {
                    provider: this.provider
                });
                let {
                    target: e
                } = this.opts;
                e && this.mount(e, this)
            }
            uninstall() {
                this.view.tearDown(), this.unmount()
            }
            onFirstRender() {
                return Promise.all([this.provider.fetchPreAuthToken(), this.view.getFolder("root", "/")])
            }
            render(e) {
                return this.view.render(e)
            }
        };
    n(pi, "GoogleDrive");
    pi.VERSION = l2.version;
    var Km = {
        strings: {
            pluginNameInstagram: "Instagram"
        }
    };
    var u2 = {
            version: "3.0.1"
        },
        fi = class extends V {
            constructor(e, t) {
                super(e, t), this.id = this.opts.id || "Instagram", Y.initPlugin(this, t), this.icon = () => u("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32"
                }, u("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, u("rect", {
                    className: "uppy-ProviderIconBg",
                    fill: "#E1306C",
                    width: "32",
                    height: "32",
                    rx: "16"
                }), u("path", {
                    d: "M16 8.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.392.144.745.374 1.036.673.299.29.529.644.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.671a2.98 2.98 0 0 1-1.708 1.708c-.317.123-.794.27-1.671.31-.95.043-1.234.053-3.637.053s-2.688-.01-3.637-.053c-.877-.04-1.354-.187-1.671-.31a2.788 2.788 0 0 1-1.035-.673 2.788 2.788 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.949-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.144-.392.374-.745.673-1.036.29-.299.644-.529 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052zM16 7c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.419-.6.225-1.145.58-1.594 1.038-.458.45-.813.993-1.039 1.594-.222.572-.374 1.226-.418 2.184C7.01 13.25 7 13.556 7 16s.01 2.75.054 3.71c.044.959.196 1.613.419 2.185.226.6.58 1.145 1.038 1.594.45.458.993.813 1.594 1.038.572.223 1.227.375 2.184.419.96.044 1.267.054 3.711.054s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.602 4.602 0 0 0 2.632-2.632c.223-.572.375-1.226.419-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 23.49 8.51a4.412 4.412 0 0 0-1.594-1.039c-.572-.222-1.226-.374-2.184-.418C18.75 7.01 18.444 7 16 7zm0 4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 7.421a2.921 2.921 0 1 1 0-5.842 2.921 2.921 0 0 1 0 5.842zm4.875-6.671a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25z",
                    fill: "#FFF"
                }))), this.defaultLocale = Km, this.i18nInit(), this.title = this.i18n("pluginNameInstagram"), this.provider = new Y(e, {
                    companionUrl: this.opts.companionUrl,
                    companionHeaders: this.opts.companionHeaders,
                    companionKeysParams: this.opts.companionKeysParams,
                    companionCookiesRule: this.opts.companionCookiesRule,
                    provider: "instagram",
                    pluginId: this.id
                }), this.onFirstRender = this.onFirstRender.bind(this), this.render = this.render.bind(this)
            }
            install() {
                this.view = new pe(this, {
                    provider: this.provider,
                    viewType: "grid",
                    showTitles: !1,
                    showFilter: !1,
                    showBreadcrumbs: !1
                });
                let {
                    target: e
                } = this.opts;
                e && this.mount(e, this)
            }
            uninstall() {
                this.view.tearDown(), this.unmount()
            }
            onFirstRender() {
                return Promise.all([this.provider.fetchPreAuthToken(), this.view.getFolder("recent")])
            }
            render(e) {
                return this.view.render(e)
            }
        };
    n(fi, "Instagram");
    fi.VERSION = u2.version;
    var Gm = {
        strings: {
            pluginNameOneDrive: "OneDrive"
        }
    };
    var h2 = {
            version: "3.0.1"
        },
        mi = class extends V {
            constructor(e, t) {
                super(e, t), this.id = this.opts.id || "OneDrive", Y.initPlugin(this, t), this.title = this.opts.title || "OneDrive", this.icon = () => u("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32"
                }, u("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, u("rect", {
                    className: "uppy-ProviderIconBg",
                    width: "32",
                    height: "32",
                    rx: "16",
                    fill: "#0262C0"
                }), u("g", {
                    fill: "#FFF",
                    fillRule: "nonzero"
                }, u("path", {
                    d: "M24.157 22s1.492-.205 1.79-1.655a2.624 2.624 0 0 0 .03-.878c-.22-1.64-1.988-2.01-1.988-2.01s.307-1.765-1.312-2.69c-1.62-.925-3.1 0-3.1 0S18.711 13 16.366 13c-3.016 0-3.519 3.448-3.519 3.448S10 16.618 10 19.14c0 2.523 2.597 2.86 2.597 2.86h11.56z"
                }), u("path", {
                    d: "M9.421 19.246c0-2.197 1.606-3.159 2.871-3.472.44-1.477 1.654-3.439 4.135-3.439H16.445c1.721 0 2.79.823 3.368 1.476a3.99 3.99 0 0 1 1.147-.171h.01l.03.002C21.017 13.5 20.691 10 16.757 10c-2.69 0-3.639 2.345-3.639 2.345s-1.95-1.482-3.955.567c-1.028 1.052-.79 2.669-.79 2.669S6 15.824 6 18.412C6 20.757 8.452 21 8.452 21h1.372a3.77 3.77 0 0 1-.403-1.754z"
                })))), this.provider = new Y(e, {
                    companionUrl: this.opts.companionUrl,
                    companionHeaders: this.opts.companionHeaders,
                    companionCookiesRule: this.opts.companionCookiesRule,
                    provider: "onedrive",
                    pluginId: this.id
                }), this.defaultLocale = Gm, this.i18nInit(), this.title = this.i18n("pluginNameOneDrive"), this.onFirstRender = this.onFirstRender.bind(this), this.render = this.render.bind(this)
            }
            install() {
                this.view = new pe(this, {
                    provider: this.provider
                });
                let {
                    target: e
                } = this.opts;
                e && this.mount(e, this)
            }
            uninstall() {
                this.view.tearDown(), this.unmount()
            }
            onFirstRender() {
                return Promise.all([this.provider.fetchPreAuthToken(), this.view.getFolder()])
            }
            render(e) {
                return this.view.render(e)
            }
        };
    n(mi, "OneDrive");
    mi.VERSION = h2.version;
    var c2 = {
            version: "3.0.1"
        },
        gi = class extends V {
            constructor(e, t) {
                if (super(e, t), this.id = this.opts.id || "Unsplash", this.title = this.opts.title || "Unsplash", Y.initPlugin(this, t, {}), this.icon = () => u("svg", {
                    viewBox: "0 0 32 32",
                    height: "32",
                    width: "32",
                    "aria-hidden": "true"
                }, u("path", {
                    d: "M46.575 10.883v-9h12v9zm12 5h10v18h-32v-18h10v9h12z",
                    fill: "#fff"
                }), u("rect", {
                    className: "uppy-ProviderIconBg",
                    width: "32",
                    height: "32",
                    rx: "16"
                }), u("path", {
                    d: "M13 12.5V8h6v4.5zm6 2.5h5v9H8v-9h5v4.5h6z",
                    fill: "#fff"
                })), !this.opts.companionUrl) throw new Error("Companion hostname is required, please consult https://uppy.io/docs/companion");
                this.hostname = this.opts.companionUrl, this.provider = new lr(e, {
                    companionUrl: this.opts.companionUrl,
                    companionHeaders: this.opts.companionHeaders,
                    companionCookiesRule: this.opts.companionCookiesRule,
                    provider: "unsplash",
                    pluginId: this.id
                })
            }
            install() {
                this.view = new ti(this, {
                    provider: this.provider,
                    viewType: "unsplash"
                });
                let {
                    target: e
                } = this.opts;
                e && this.mount(e, this)
            }
            onFirstRender() {}
            render(e) {
                return this.view.render(e)
            }
            uninstall() {
                this.unmount()
            }
        };
    n(gi, "Unsplash");
    gi.VERSION = c2.version;

    function zh(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(zh, "_classPrivateFieldLooseBase");
    var d2 = 0;

    function Xm(i) {
        return "__private_" + d2++ + "_" + i
    }
    n(Xm, "_classPrivateFieldLooseKey");
    var jh = Xm("handleKeyPress"),
        fn = Xm("handleSubmit"),
        fl = class extends ie {
            constructor() {
                super(...arguments), Object.defineProperty(this, jh, {
                    writable: !0,
                    value: e => {
                        e.keyCode === 13 && zh(this, fn)[fn]()
                    }
                }), Object.defineProperty(this, fn, {
                    writable: !0,
                    value: () => {
                        let {
                            addFile: e
                        } = this.props, t = this.input.value.trim();
                        e(t)
                    }
                })
            }
            componentDidMount() {
                this.input.value = ""
            }
            render() {
                let {
                    i18n: e
                } = this.props;
                return u("div", {
                    className: "uppy-Url"
                }, u("input", {
                    className: "uppy-u-reset uppy-c-textInput uppy-Url-input",
                    type: "text",
                    "aria-label": e("enterUrlToImport"),
                    placeholder: e("enterUrlToImport"),
                    onKeyUp: zh(this, jh)[jh],
                    ref: t => {
                        this.input = t
                    },
                    "data-uppy-super-focusable": !0
                }), u("button", {
                    className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Url-importButton",
                    type: "button",
                    onClick: zh(this, fn)[fn]
                }, e("import")))
            }
        };
    n(fl, "UrlUI");
    var Ym = fl;

    function ml(i, e, t) {
        let r = _e(i.items),
            s;
        switch (e) {
            case "paste":
            {
                if (r.some(a => a.kind === "file")) return;s = r.filter(a => a.kind === "string" && a.type === "text/plain");
                break
            }
            case "drop":
            {
                s = r.filter(o => o.kind === "string" && o.type === "text/uri-list");
                break
            }
            default:
                throw new Error(`isDropOrPaste must be either 'drop' or 'paste', but it's ${e}`)
        }
        s.forEach(o => {
            o.getAsString(a => t(a))
        })
    }
    n(ml, "forEachDroppedOrPastedUrl");
    var Jm = {
        strings: {
            import: "Import",
            enterUrlToImport: "Enter URL to import a file",
            failedToFetch: "Companion failed to fetch this URL, please make sure it\u2019s correct",
            enterCorrectUrl: "Incorrect URL: Please make sure you are entering a direct link to a file"
        }
    };
    var p2 = {
        version: "3.1.0"
    };

    function f2() {
        return u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            width: "32",
            height: "32",
            viewBox: "0 0 32 32"
        }, u("g", {
            fill: "none",
            fillRule: "evenodd"
        }, u("rect", {
            className: "uppy-ProviderIconBg",
            fill: "#FF753E",
            width: "32",
            height: "32",
            rx: "16"
        }), u("path", {
            d: "M22.788 15.389l-2.199 2.19a3.184 3.184 0 0 1-.513.437c-.806.584-1.686.876-2.638.876a4.378 4.378 0 0 1-3.519-1.752c-.22-.292-.146-.802.147-1.021.293-.22.806-.146 1.026.146.953 1.313 2.785 1.532 4.105.583a.571.571 0 0 0 .293-.292l2.199-2.189c1.1-1.167 1.1-2.992-.073-4.086a2.976 2.976 0 0 0-4.105 0l-1.246 1.24a.71.71 0 0 1-1.026 0 .703.703 0 0 1 0-1.022l1.246-1.24a4.305 4.305 0 0 1 6.083 0c1.833 1.605 1.906 4.451.22 6.13zm-7.183 5.035l-1.246 1.24a2.976 2.976 0 0 1-4.105 0c-1.172-1.094-1.172-2.991-.073-4.086l2.2-2.19.292-.291c.66-.438 1.393-.657 2.2-.584.805.146 1.465.51 1.905 1.168.22.292.733.365 1.026.146.293-.22.367-.73.147-1.022-.733-.949-1.76-1.532-2.859-1.678-1.1-.22-2.272.073-3.225.802l-.44.438-2.199 2.19c-1.686 1.75-1.612 4.524.074 6.202.88.803 1.979 1.241 3.078 1.241 1.1 0 2.199-.438 3.079-1.24l1.246-1.241a.703.703 0 0 0 0-1.022c-.294-.292-.807-.365-1.1-.073z",
            fill: "#FFF",
            fillRule: "nonzero"
        })))
    }
    n(f2, "UrlIcon");

    function m2(i) {
        let e = /^[a-z0-9]+:\/\//,
            t = "http://";
        return e.test(i) ? i : t + i
    }
    n(m2, "addProtocolToURL");

    function g2(i) {
        return _e(i.dataTransfer.items).filter(r => r.kind === "string" && r.type === "text/uri-list").length > 0
    }
    n(g2, "canHandleRootDrop");

    function y2(i) {
        if (!i) return !1;
        let e = i.match(/^([a-z0-9]+):\/\//)[1];
        return !(e !== "http" && e !== "https")
    }
    n(y2, "checkIfCorrectURL");

    function v2(i) {
        let {
            pathname: e
        } = new URL(i);
        return e.substring(e.lastIndexOf("/") + 1)
    }
    n(v2, "getFileNameFromUrl");
    var jt = class extends V {
        constructor(e, t) {
            super(e, t), this.id = this.opts.id || "Url", this.title = this.opts.title || "Link", this.type = "acquirer", this.icon = () => u(f2, null), this.defaultLocale = Jm;
            let r = {};
            if (this.opts = { ...r,
                ...t
            }, this.i18nInit(), this.hostname = this.opts.companionUrl, !this.hostname) throw new Error("Companion hostname is required, please consult https://uppy.io/docs/companion");
            this.getMeta = this.getMeta.bind(this), this.addFile = this.addFile.bind(this), this.handleRootDrop = this.handleRootDrop.bind(this), this.handleRootPaste = this.handleRootPaste.bind(this), this.client = new le(e, {
                companionUrl: this.opts.companionUrl,
                companionHeaders: this.opts.companionHeaders,
                companionCookiesRule: this.opts.companionCookiesRule
            })
        }
        getMeta(e) {
            return this.client.post("url/meta", {
                url: e
            }).then(t => {
                if (t.error) throw this.uppy.log("[URL] Error:"), this.uppy.log(t.error), new Error("Failed to fetch the file");
                return t
            })
        }
        async addFile(e, t) {
            t === void 0 && (t = void 0);
            let r = m2(e);
            if (!y2(r)) {
                this.uppy.log(`[URL] Incorrect URL entered: ${r}`), this.uppy.info(this.i18n("enterCorrectUrl"), "error", 4e3);
                return
            }
            try {
                let s = await this.getMeta(r),
                    o = {
                        meta: t,
                        source: this.id,
                        name: v2(r),
                        type: s.type,
                        data: {
                            size: s.size
                        },
                        isRemote: !0,
                        body: {
                            url: r
                        },
                        remote: {
                            companionUrl: this.opts.companionUrl,
                            url: `${this.hostname}/url/get`,
                            body: {
                                fileId: r,
                                url: r
                            },
                            providerOptions: this.client.opts
                        }
                    };
                this.uppy.log("[Url] Adding remote file");
                try {
                    return this.uppy.addFile(o)
                } catch (a) {
                    return a.isRestriction || this.uppy.log(a), a
                }
            } catch (s) {
                return this.uppy.log(s), this.uppy.info({
                    message: this.i18n("failedToFetch"),
                    details: s
                }, "error", 4e3), s
            }
        }
        handleRootDrop(e) {
            ml(e.dataTransfer, "drop", t => {
                this.uppy.log(`[URL] Adding file from dropped url: ${t}`), this.addFile(t)
            })
        }
        handleRootPaste(e) {
            ml(e.clipboardData, "paste", t => {
                this.uppy.log(`[URL] Adding file from pasted url: ${t}`), this.addFile(t)
            })
        }
        render() {
            return u(Ym, {
                i18n: this.i18n,
                addFile: this.addFile
            })
        }
        install() {
            let {
                target: e
            } = this.opts;
            e && this.mount(e, this)
        }
        uninstall() {
            this.unmount()
        }
    };
    n(jt, "Url");
    jt.VERSION = p2.version;
    jt.prototype.canHandleRootDrop = g2;
    var Qm = {
        strings: {
            pluginNameZoom: "Zoom"
        }
    };
    var b2 = {
            version: "2.0.1"
        },
        yi = class extends V {
            constructor(e, t) {
                super(e, t), this.id = this.opts.id || "Zoom", Y.initPlugin(this, t), this.title = this.opts.title || "Zoom", this.icon = () => u("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32"
                }, u("rect", {
                    className: "uppy-ProviderIconBg",
                    width: "32",
                    height: "32",
                    rx: "16",
                    fill: "#0E71EB"
                }), u("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, u("path", {
                    fill: "#fff",
                    d: "M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z",
                    style: {
                        transform: "translate(-5px, -5px) scale(0.9)"
                    }
                }), u("polygon", {
                    fill: "#fff",
                    points: "37,31 31,27 31,21 37,17",
                    style: {
                        transform: "translate(-5px, -5px) scale(0.9)"
                    }
                }))), this.provider = new Y(e, {
                    companionUrl: this.opts.companionUrl,
                    companionHeaders: this.opts.companionHeaders,
                    companionKeysParams: this.opts.companionKeysParams,
                    companionCookiesRule: this.opts.companionCookiesRule,
                    provider: "zoom",
                    pluginId: this.id
                }), this.defaultLocale = Qm, this.i18nInit(), this.title = this.i18n("pluginNameZoom"), this.onFirstRender = this.onFirstRender.bind(this), this.render = this.render.bind(this)
            }
            install() {
                this.view = new pe(this, {
                    provider: this.provider
                });
                let {
                    target: e
                } = this.opts;
                e && this.mount(e, this)
            }
            uninstall() {
                this.view.tearDown(), this.unmount()
            }
            onFirstRender() {
                return Promise.all([this.provider.fetchPreAuthToken(), this.view.getFolder()])
            }
            render(e) {
                return this.view.render(e)
            }
        };
    n(yi, "Zoom");
    yi.VERSION = b2.version;

    function Hh(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(Hh, "_classPrivateFieldLooseBase");
    var w2 = 0;

    function S2(i) {
        return "__private_" + w2++ + "_" + i
    }
    n(S2, "_classPrivateFieldLooseKey");
    var _2 = {
            version: "1.0.2"
        },
        $h = {
            __proto__: null,
            Box: hi,
            Dropbox: ci,
            Facebook: di,
            GoogleDrive: pi,
            Instagram: fi,
            OneDrive: mi,
            Unsplash: gi,
            Url: jt,
            Zoom: yi
        },
        Xr = S2("installedPlugins"),
        Yr = class extends ae {
            constructor(e, t) {
                super(e, t), Object.defineProperty(this, Xr, {
                    writable: !0,
                    value: new Set
                }), this.id = this.opts.id || "RemoteSources", this.type = "acquirer";
                let r = {
                    sources: Object.keys($h),
                    target: ai
                };
                if (this.opts = { ...r,
                    ...t
                }, this.opts.companionUrl == null) throw new Error("Please specify companionUrl for RemoteSources to work, see https://uppy.io/docs/remote-sources#companionUrl")
            }
            setOptions(e) {
                this.uninstall(), super.setOptions(e), this.install()
            }
            install() {
                this.opts.sources.forEach(e => {
                    let t = { ...this.opts,
                            sources: void 0
                        },
                        r = $h[e];
                    if (r == null) {
                        let s = Object.keys($h),
                            o = new Intl.ListFormat("en", {
                                style: "long",
                                type: "disjunction"
                            });
                        throw new Error(`Invalid plugin: "${e}" is not one of: ${o.format(s)}.`)
                    }
                    this.uppy.use(r, t), Hh(this, Xr)[Xr].add(this.uppy.getPlugin(e))
                })
            }
            uninstall() {
                for (let e of Hh(this, Xr)[Xr]) this.uppy.removePlugin(e);
                Hh(this, Xr)[Xr].clear()
            }
        };
    n(Yr, "RemoteSources");
    Yr.VERSION = _2.version;
    var Zm = n(() => u("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
    }, u("g", {
        fill: "none",
        fillRule: "evenodd"
    }, u("rect", {
        className: "uppy-ProviderIconBg",
        fill: "#2C3E50",
        width: "32",
        height: "32",
        rx: "16"
    }), u("path", {
        d: "M24.182 9H7.818C6.81 9 6 9.742 6 10.667v10c0 .916.81 1.666 1.818 1.666h4.546V24h7.272v-1.667h4.546c1 0 1.809-.75 1.809-1.666l.009-10C26 9.742 25.182 9 24.182 9zM24 21H8V11h16v10z",
        fill: "#FFF",
        fillRule: "nonzero"
    }), u("circle", {
        fill: "#FFF",
        cx: "16",
        cy: "16",
        r: "2"
    }))), "default");

    function qh(i) {
        let {
            recording: e,
            onStartRecording: t,
            onStopRecording: r,
            i18n: s
        } = i;
        return e ? u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-ScreenCapture-button uppy-ScreenCapture-button--video uppy-ScreenCapture-button--stop-rec",
            type: "button",
            title: s("stopCapturing"),
            "aria-label": s("stopCapturing"),
            onClick: r,
            "data-uppy-super-focusable": !0
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "100",
            height: "100",
            viewBox: "0 0 100 100"
        }, u("rect", {
            x: "15",
            y: "15",
            width: "70",
            height: "70"
        }))) : u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-ScreenCapture-button uppy-ScreenCapture-button--video",
            type: "button",
            title: s("startCapturing"),
            "aria-label": s("startCapturing"),
            onClick: t,
            "data-uppy-super-focusable": !0
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "100",
            height: "100",
            viewBox: "0 0 100 100"
        }, u("circle", {
            cx: "50",
            cy: "50",
            r: "40"
        })))
    }
    n(qh, "RecordButton");

    function Vh(i) {
        let {
            recording: e,
            recordedVideo: t,
            onSubmit: r,
            i18n: s
        } = i;
        return t && !e ? u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-ScreenCapture-button uppy-ScreenCapture-button--submit",
            type: "button",
            title: s("submitRecordedFile"),
            "aria-label": s("submitRecordedFile"),
            onClick: r,
            "data-uppy-super-focusable": !0
        }, u("svg", {
            width: "12",
            height: "9",
            viewBox: "0 0 12 9",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon"
        }, u("path", {
            fill: "#fff",
            fillRule: "nonzero",
            d: "M10.66 0L12 1.31 4.136 9 0 4.956l1.34-1.31L4.136 6.38z"
        }))) : null
    }
    n(Vh, "SubmitButton");
    var gl = class extends ie {
        constructor(e) {
            super(e), this.state = {
                elapsedTime: 0
            }, this.wrapperStyle = {
                width: "100%",
                height: "100%",
                display: "flex"
            }, this.overlayStyle = {
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "black",
                opacity: .7
            }, this.infoContainerStyle = {
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "auto",
                marginBottom: "auto",
                zIndex: 1,
                color: "white"
            }, this.infotextStyle = {
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "1rem",
                fontSize: "1.5rem"
            }, this.timeStyle = {
                display: "block",
                fontWeight: "bold",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "3rem",
                fontFamily: "Courier New"
            }
        }
        startTimer() {
            this.timerTick(), this.timerRunning = !0
        }
        resetTimer() {
            clearTimeout(this.timer), this.setState({
                elapsedTime: 0
            }), this.timerRunning = !1
        }
        timerTick() {
            this.timer = setTimeout(() => {
                this.setState(e => ({
                    elapsedTime: e.elapsedTime + 1
                })), this.timerTick()
            }, 1e3)
        }
        fmtMSS(e) {
            return (e - (e %= 60)) / 60 + (e > 9 ? ":" : ":0") + e
        }
        render() {
            let {
                recording: e,
                i18n: t
            } = { ...this.props
            }, {
                elapsedTime: r
            } = this.state, s = this.fmtMSS(r);
            return e && !this.timerRunning && this.startTimer(), !e && this.timerRunning && this.resetTimer(), e ? u("div", {
                style: this.wrapperStyle
            }, u("div", {
                style: this.overlayStyle
            }), u("div", {
                style: this.infoContainerStyle
            }, u("div", {
                style: this.infotextStyle
            }, t("recording")), u("div", {
                style: this.timeStyle
            }, s))) : null
        }
    };
    n(gl, "StopWatch");
    var eg = gl;
    var tg = n(i => {
        let {
            streamActive: e,
            i18n: t
        } = i;
        return e ? u("div", {
            title: t("streamActive"),
            "aria-label": t("streamActive"),
            className: "uppy-ScreenCapture-icon--stream uppy-ScreenCapture-icon--streamActive"
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
        }, u("path", {
            d: "M0 0h24v24H0z",
            opacity: ".1",
            fill: "none"
        }), u("path", {
            d: "M0 0h24v24H0z",
            fill: "none"
        }), u("path", {
            d: "M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
        }))) : u("div", {
            title: t("streamPassive"),
            "aria-label": t("streamPassive"),
            className: "uppy-ScreenCapture-icon--stream"
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
        }, u("path", {
            d: "M0 0h24v24H0z",
            opacity: ".1",
            fill: "none"
        }), u("path", {
            d: "M0 0h24v24H0z",
            fill: "none"
        }), u("path", {
            d: "M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z"
        })))
    }, "default");

    function Wh() {
        return Wh = Object.assign ? Object.assign.bind() : function(i) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r])
            }
            return i
        }, Wh.apply(this, arguments)
    }
    n(Wh, "_extends");
    var yl = class extends ie {
        componentWillUnmount() {
            let {
                onStop: e
            } = this.props;
            e()
        }
        render() {
            let {
                recording: e,
                stream: t,
                recordedVideo: r
            } = this.props, s = {
                playsinline: !0
            };
            return (e || !r && !e) && (s.muted = !0, s.autoplay = !0, s.srcObject = t), r && !e && (s.muted = !1, s.controls = !0, s.src = r, this.videoElement && (this.videoElement.srcObject = void 0)), u("div", {
                className: "uppy uppy-ScreenCapture-container"
            }, u("div", {
                className: "uppy-ScreenCapture-videoContainer"
            }, u(tg, this.props), u("video", Wh({
                ref: o => {
                    this.videoElement = o
                },
                className: "uppy-ScreenCapture-video"
            }, s)), u(eg, this.props)), u("div", {
                className: "uppy-ScreenCapture-buttonContainer"
            }, u(qh, this.props), u(Vh, this.props)))
        }
    };
    n(yl, "RecorderScreen");
    var ig = yl;
    var rg = {
        strings: {
            startCapturing: "Begin screen capturing",
            stopCapturing: "Stop screen capturing",
            submitRecordedFile: "Submit recorded file",
            streamActive: "Stream active",
            streamPassive: "Stream passive",
            micDisabled: "Microphone access denied by user",
            recording: "Recording"
        }
    };

    function Kh() {
        return Kh = Object.assign ? Object.assign.bind() : function(i) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r])
            }
            return i
        }, Kh.apply(this, arguments)
    }
    n(Kh, "_extends");
    var P2 = {
        version: "3.0.2"
    };

    function x2() {
        var i;
        return window.MediaRecorder && ((i = navigator.mediaDevices) == null ? void 0 : i.getDisplayMedia)
    }
    n(x2, "isScreenRecordingSupported");

    function F2() {
        return window.MediaRecorder && navigator.mediaDevices
    }
    n(F2, "getMediaDevices");
    var vr = class extends V {
        constructor(e, t) {
            super(e, t), this.mediaDevices = F2(), this.protocol = location.protocol === "https:" ? "https" : "http", this.id = this.opts.id || "ScreenCapture", this.title = this.opts.title || "Screencast", this.type = "acquirer", this.icon = Zm, this.defaultLocale = rg;
            let r = {
                displayMediaConstraints: {
                    video: {
                        width: 1280,
                        height: 720,
                        frameRate: {
                            ideal: 3,
                            max: 5
                        },
                        cursor: "motion",
                        displaySurface: "monitor"
                    }
                },
                userMediaConstraints: {
                    audio: !0
                },
                preferredVideoMimeType: "video/webm"
            };
            this.opts = { ...r,
                ...t
            }, this.i18nInit(), this.install = this.install.bind(this), this.setPluginState = this.setPluginState.bind(this), this.render = this.render.bind(this), this.start = this.start.bind(this), this.stop = this.stop.bind(this), this.startRecording = this.startRecording.bind(this), this.stopRecording = this.stopRecording.bind(this), this.submit = this.submit.bind(this), this.streamInterrupted = this.streamInactivated.bind(this), this.captureActive = !1, this.capturedMediaFile = null
        }
        install() {
            if (!x2()) return this.uppy.log("Screen recorder access is not supported", "warning"), null;
            this.setPluginState({
                streamActive: !1,
                audioStreamActive: !1
            });
            let {
                target: e
            } = this.opts;
            e && this.mount(e, this)
        }
        uninstall() {
            this.videoStream && this.stop(), this.unmount()
        }
        start() {
            return this.mediaDevices ? (this.captureActive = !0, this.selectAudioStreamSource(), this.selectVideoStreamSource().then(e => {
                e === !1 && this.parent && this.parent.hideAllPanels && (this.parent.hideAllPanels(), this.captureActive = !1)
            })) : Promise.reject(new Error("Screen recorder access not supported"))
        }
        selectVideoStreamSource() {
            return this.videoStream ? new Promise(e => e(this.videoStream)) : this.mediaDevices.getDisplayMedia(this.opts.displayMediaConstraints).then(e => (this.videoStream = e, this.videoStream.addEventListener("inactive", () => {
                this.streamInactivated()
            }), this.setPluginState({
                streamActive: !0
            }), e)).catch(e => (this.setPluginState({
                screenRecError: e
            }), this.userDenied = !0, setTimeout(() => {
                this.userDenied = !1
            }, 1e3), !1))
        }
        selectAudioStreamSource() {
            return this.audioStream ? new Promise(e => e(this.audioStream)) : this.mediaDevices.getUserMedia(this.opts.userMediaConstraints).then(e => (this.audioStream = e, this.setPluginState({
                audioStreamActive: !0
            }), e)).catch(e => (e.name === "NotAllowedError" && (this.uppy.info(this.i18n("micDisabled"), "error", 5e3), this.uppy.log(this.i18n("micDisabled"), "warning")), !1))
        }
        startRecording() {
            let e = {};
            this.capturedMediaFile = null, this.recordingChunks = [];
            let {
                preferredVideoMimeType: t
            } = this.opts;
            this.selectVideoStreamSource().then(r => {
                t && MediaRecorder.isTypeSupported(t) && ui(t) && (e.mimeType = t);
                let s = [r.getVideoTracks()[0]];
                this.audioStream && s.push(this.audioStream.getAudioTracks()[0]), this.outputStream = new MediaStream(s), this.recorder = new MediaRecorder(this.outputStream, e), this.recorder.addEventListener("dataavailable", o => {
                    this.recordingChunks.push(o.data)
                }), this.recorder.start(), this.setPluginState({
                    recording: !0
                })
            }).catch(r => {
                this.uppy.log(r, "error")
            })
        }
        streamInactivated() {
            let {
                recordedVideo: e,
                recording: t
            } = { ...this.getPluginState()
            };
            !e && !t ? this.parent && this.parent.hideAllPanels && this.parent.hideAllPanels() : t && (this.uppy.log("Capture stream inactive \u2014 stop recording"), this.stopRecording()), this.videoStream = null, this.audioStream = null, this.setPluginState({
                streamActive: !1,
                audioStreamActive: !1
            })
        }
        stopRecording() {
            return new Promise(t => {
                this.recorder.addEventListener("stop", () => {
                    t()
                }), this.recorder.stop()
            }).then(() => (this.setPluginState({
                recording: !1
            }), this.getVideo())).then(t => {
                this.capturedMediaFile = t, this.setPluginState({
                    recordedVideo: URL.createObjectURL(t.data)
                })
            }).then(() => {
                this.recordingChunks = null, this.recorder = null
            }, t => {
                throw this.recordingChunks = null, this.recorder = null, t
            })
        }
        submit() {
            try {
                this.capturedMediaFile && this.uppy.addFile(this.capturedMediaFile)
            } catch (e) {
                e.isRestriction || this.uppy.log(e, "warning")
            }
        }
        stop() {
            this.videoStream && (this.videoStream.getVideoTracks().forEach(e => {
                e.stop()
            }), this.videoStream.getAudioTracks().forEach(e => {
                e.stop()
            }), this.videoStream = null), this.audioStream && (this.audioStream.getAudioTracks().forEach(e => {
                e.stop()
            }), this.audioStream.getVideoTracks().forEach(e => {
                e.stop()
            }), this.audioStream = null), this.outputStream && (this.outputStream.getAudioTracks().forEach(e => {
                e.stop()
            }), this.outputStream.getVideoTracks().forEach(e => {
                e.stop()
            }), this.outputStream = null), this.setPluginState({
                recordedVideo: null
            }), this.captureActive = !1
        }
        getVideo() {
            let e = this.recordingChunks[0].type,
                t = ui(e);
            if (!t) return Promise.reject(new Error(`Could not retrieve recording: Unsupported media type "${e}"`));
            let r = `screencap-${Date.now()}.${t}`,
                s = new Blob(this.recordingChunks, {
                    type: e
                }),
                o = {
                    source: this.id,
                    name: r,
                    data: new Blob([s], {
                        type: e
                    }),
                    type: e
                };
            return Promise.resolve(o)
        }
        render() {
            let e = this.getPluginState();
            return !e.streamActive && !this.captureActive && !this.userDenied && this.start(), u(ig, Kh({}, e, {
                onStartRecording: this.startRecording,
                onStopRecording: this.stopRecording,
                onStop: this.stop,
                onSubmit: this.submit,
                i18n: this.i18n,
                stream: this.videoStream
            }))
        }
    };
    n(vr, "ScreenCapture");
    vr.VERSION = P2.version;
    var pg = oe(sg(), 1);

    function Xh(i, e, t) {
        return new Promise(r => {
            i.toBlob(r, e, t)
        })
    }
    n(Xh, "canvasToBlob");

    function Yh() {
        return typeof MediaRecorder == "function" && !!MediaRecorder.prototype && typeof MediaRecorder.prototype.start == "function"
    }
    n(Yh, "supportsMediaRecorder");
    var bl = n(() => u("svg", {
        "aria-hidden": "true",
        focusable: "false",
        fill: "#0097DC",
        width: "66",
        height: "55",
        viewBox: "0 0 66 55"
    }, u("path", {
        d: "M57.3 8.433c4.59 0 8.1 3.51 8.1 8.1v29.7c0 4.59-3.51 8.1-8.1 8.1H8.7c-4.59 0-8.1-3.51-8.1-8.1v-29.7c0-4.59 3.51-8.1 8.1-8.1h9.45l4.59-7.02c.54-.54 1.35-1.08 2.16-1.08h16.2c.81 0 1.62.54 2.16 1.08l4.59 7.02h9.45zM33 14.64c-8.62 0-15.393 6.773-15.393 15.393 0 8.62 6.773 15.393 15.393 15.393 8.62 0 15.393-6.773 15.393-15.393 0-8.62-6.773-15.393-15.393-15.393zM33 40c-5.648 0-9.966-4.319-9.966-9.967 0-5.647 4.318-9.966 9.966-9.966s9.966 4.319 9.966 9.966C42.966 35.681 38.648 40 33 40z",
        fillRule: "evenodd"
    })), "default");
    var og = n(i => {
        let {
            onSnapshot: e,
            i18n: t
        } = i;
        return u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-Webcam-button uppy-Webcam-button--picture",
            type: "button",
            title: t("takePicture"),
            "aria-label": t("takePicture"),
            onClick: e,
            "data-uppy-super-focusable": !0
        }, bl())
    }, "default");

    function Jh(i) {
        let {
            recording: e,
            onStartRecording: t,
            onStopRecording: r,
            i18n: s
        } = i;
        return e ? u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-Webcam-button",
            type: "button",
            title: s("stopRecording"),
            "aria-label": s("stopRecording"),
            onClick: r,
            "data-uppy-super-focusable": !0
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "100",
            height: "100",
            viewBox: "0 0 100 100"
        }, u("rect", {
            x: "15",
            y: "15",
            width: "70",
            height: "70"
        }))) : u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-Webcam-button",
            type: "button",
            title: s("startRecording"),
            "aria-label": s("startRecording"),
            onClick: t,
            "data-uppy-super-focusable": !0
        }, u("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: "100",
            height: "100",
            viewBox: "0 0 100 100"
        }, u("circle", {
            cx: "50",
            cy: "50",
            r: "40"
        })))
    }
    n(Jh, "RecordButton");

    function Qh(i) {
        return `${Math.floor(i/60)}:${String(i%60).padStart(2,0)}`
    }
    n(Qh, "formatSeconds");

    function Zh(i) {
        let {
            recordingLengthSeconds: e,
            i18n: t
        } = i, r = Qh(e);
        return u("span", {
            "aria-label": t("recordingLength", {
                recording_length: r
            })
        }, r)
    }
    n(Zh, "RecordingLength");
    var ng = n(i => {
        let {
            currentDeviceId: e,
            videoSources: t,
            onChangeVideoSource: r
        } = i;
        return u("div", {
            className: "uppy-Webcam-videoSource"
        }, u("select", {
            className: "uppy-u-reset uppy-Webcam-videoSource-select",
            onChange: s => {
                r(s.target.value)
            }
        }, t.map(s => u("option", {
            key: s.deviceId,
            value: s.deviceId,
            selected: s.deviceId === e
        }, s.label))))
    }, "default");

    function C2(i) {
        let {
            onSubmit: e,
            i18n: t
        } = i;
        return u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-Webcam-button uppy-Webcam-button--submit",
            type: "button",
            title: t("submitRecordedFile"),
            "aria-label": t("submitRecordedFile"),
            onClick: e,
            "data-uppy-super-focusable": !0
        }, u("svg", {
            width: "12",
            height: "9",
            viewBox: "0 0 12 9",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon"
        }, u("path", {
            fill: "#fff",
            fillRule: "nonzero",
            d: "M10.66 0L12 1.31 4.136 9 0 4.956l1.34-1.31L4.136 6.38z"
        })))
    }
    n(C2, "SubmitButton");
    var ag = C2;

    function T2(i) {
        let {
            onDiscard: e,
            i18n: t
        } = i;
        return u("button", {
            className: "uppy-u-reset uppy-c-btn uppy-Webcam-button uppy-Webcam-button--discard",
            type: "button",
            title: t("discardRecordedFile"),
            "aria-label": t("discardRecordedFile"),
            onClick: e,
            "data-uppy-super-focusable": !0
        }, u("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 13 13",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon"
        }, u("g", {
            fill: "#FFF",
            fillRule: "evenodd"
        }, u("path", {
            d: "M.496 11.367L11.103.76l1.414 1.414L1.911 12.781z"
        }), u("path", {
            d: "M11.104 12.782L.497 2.175 1.911.76l10.607 10.606z"
        }))))
    }
    n(T2, "DiscardButton");
    var lg = T2;

    function ec() {
        return ec = Object.assign ? Object.assign.bind() : function(i) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r])
            }
            return i
        }, ec.apply(this, arguments)
    }
    n(ec, "_extends");

    function wl(i, e) {
        return i.includes(e)
    }
    n(wl, "isModeAvailable");
    var Sl = class extends ie {
        componentDidMount() {
            let {
                onFocus: e
            } = this.props;
            e()
        }
        componentWillUnmount() {
            let {
                onStop: e
            } = this.props;
            e()
        }
        render() {
            let {
                src: e,
                recordedVideo: t,
                recording: r,
                modes: s,
                supportsRecording: o,
                videoSources: a,
                showVideoSourceDropdown: l,
                showRecordingLength: h,
                onSubmit: c,
                i18n: d,
                mirror: f,
                onSnapshot: y,
                onStartRecording: w,
                onStopRecording: S,
                onDiscardRecordedVideo: R,
                recordingLengthSeconds: x
            } = this.props, F = !!t, N = !F && o && (wl(s, "video-only") || wl(s, "audio-only") || wl(s, "video-audio")), H = !F && wl(s, "picture"), q = o && h && !F, K = l && a && a.length > 1, k = {
                playsinline: !0
            };
            return t ? (k.muted = !1, k.controls = !0, k.src = t, this.videoElement && (this.videoElement.srcObject = void 0)) : (k.muted = !0, k.autoplay = !0, k.srcObject = e), u("div", {
                className: "uppy uppy-Webcam-container"
            }, u("div", {
                className: "uppy-Webcam-videoContainer"
            }, u("video", ec({
                ref: B => this.videoElement = B,
                className: `uppy-Webcam-video  ${f?"uppy-Webcam-video--mirrored":""}`
            }, k))), u("div", {
                className: "uppy-Webcam-footer"
            }, u("div", {
                className: "uppy-Webcam-videoSourceContainer"
            }, K ? ng(this.props) : null), u("div", {
                className: "uppy-Webcam-buttonContainer"
            }, H && u(og, {
                onSnapshot: y,
                i18n: d
            }), N && u(Jh, {
                recording: r,
                onStartRecording: w,
                onStopRecording: S,
                i18n: d
            }), F && u(ag, {
                onSubmit: c,
                i18n: d
            }), F && u(lg, {
                onDiscard: R,
                i18n: d
            })), u("div", {
                className: "uppy-Webcam-recordingLength"
            }, q && u(Zh, {
                recordingLengthSeconds: x,
                i18n: d
            }))))
        }
    };
    n(Sl, "CameraScreen");
    var ug = Sl;
    var hg = n(i => {
        let {
            icon: e,
            i18n: t,
            hasCamera: r
        } = i;
        return u("div", {
            className: "uppy-Webcam-permissons"
        }, u("div", {
            className: "uppy-Webcam-permissonsIcon"
        }, e()), u("h1", {
            className: "uppy-Webcam-title"
        }, t(r ? "allowAccessTitle" : "noCameraTitle")), u("p", null, t(r ? "allowAccessDescription" : "noCameraDescription")))
    }, "default");
    var cg = {
        strings: {
            pluginNameCamera: "Camera",
            noCameraTitle: "Camera Not Available",
            noCameraDescription: "In order to take pictures or record video, please connect a camera device",
            recordingStoppedMaxSize: "Recording stopped because the file size is about to exceed the limit",
            submitRecordedFile: "Submit recorded file",
            discardRecordedFile: "Discard recorded file",
            smile: "Smile!",
            takePicture: "Take a picture",
            startRecording: "Begin video recording",
            stopRecording: "Stop video recording",
            recordingLength: "Recording length %{recording_length}",
            allowAccessTitle: "Please allow access to your camera",
            allowAccessDescription: "In order to take pictures or record video with your camera, please allow camera access for this site."
        }
    };

    function ic() {
        return ic = Object.assign ? Object.assign.bind() : function(i) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r])
            }
            return i
        }, ic.apply(this, arguments)
    }
    n(ic, "_extends");

    function mn(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(mn, "_classPrivateFieldLooseBase");
    var k2 = 0;

    function A2(i) {
        return "__private_" + k2++ + "_" + i
    }
    n(A2, "_classPrivateFieldLooseKey");
    var U2 = {
        version: "3.2.1"
    };

    function dg(i) {
        return i[0] === "." ? So[i.slice(1)] : i
    }
    n(dg, "toMimeType");

    function D2(i) {
        return /^video\/[^*]+$/.test(i)
    }
    n(D2, "isVideoMimeType");

    function N2(i) {
        return /^image\/[^*]+$/.test(i)
    }
    n(N2, "isImageMimeType");

    function B2() {
        return navigator.mediaDevices
    }
    n(B2, "getMediaDevices");

    function tc(i, e) {
        return i.includes(e)
    }
    n(tc, "isModeAvailable");
    var Ht = A2("enableMirror"),
        br = class extends V {
            constructor(e, t) {
                super(e, t), Object.defineProperty(this, Ht, {
                    writable: !0,
                    value: void 0
                }), this.mediaDevices = B2(), this.supportsUserMedia = !!this.mediaDevices, this.protocol = location.protocol.match(/https/i) ? "https" : "http", this.id = this.opts.id || "Webcam", this.type = "acquirer", this.capturedMediaFile = null, this.icon = () => u("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32"
                }, u("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, u("rect", {
                    className: "uppy-ProviderIconBg",
                    fill: "#03BFEF",
                    width: "32",
                    height: "32",
                    rx: "16"
                }), u("path", {
                    d: "M22 11c1.133 0 2 .867 2 2v7.333c0 1.134-.867 2-2 2H10c-1.133 0-2-.866-2-2V13c0-1.133.867-2 2-2h2.333l1.134-1.733C13.6 9.133 13.8 9 14 9h4c.2 0 .4.133.533.267L19.667 11H22zm-6 1.533a3.764 3.764 0 0 0-3.8 3.8c0 2.129 1.672 3.801 3.8 3.801s3.8-1.672 3.8-3.8c0-2.13-1.672-3.801-3.8-3.801zm0 6.261c-1.395 0-2.46-1.066-2.46-2.46 0-1.395 1.065-2.461 2.46-2.461s2.46 1.066 2.46 2.46c0 1.395-1.065 2.461-2.46 2.461z",
                    fill: "#FFF",
                    fillRule: "nonzero"
                }))), this.defaultLocale = cg;
                let r = {
                    onBeforeSnapshot: () => Promise.resolve(),
                    countdown: !1,
                    modes: ["video-audio", "video-only", "audio-only", "picture"],
                    mirror: !0,
                    showVideoSourceDropdown: !1,
                    facingMode: "user",
                    videoConstraints: void 0,
                    preferredImageMimeType: null,
                    preferredVideoMimeType: null,
                    showRecordingLength: !1,
                    mobileNativeCamera: (0, pg.default)({
                        tablet: !0
                    })
                };
                this.opts = { ...r,
                    ...t
                }, this.i18nInit(), this.title = this.i18n("pluginNameCamera"), mn(this, Ht)[Ht] = this.opts.mirror, this.install = this.install.bind(this), this.setPluginState = this.setPluginState.bind(this), this.render = this.render.bind(this), this.start = this.start.bind(this), this.stop = this.stop.bind(this), this.takeSnapshot = this.takeSnapshot.bind(this), this.startRecording = this.startRecording.bind(this), this.stopRecording = this.stopRecording.bind(this), this.discardRecordedVideo = this.discardRecordedVideo.bind(this), this.submit = this.submit.bind(this), this.oneTwoThreeSmile = this.oneTwoThreeSmile.bind(this), this.focus = this.focus.bind(this), this.changeVideoSource = this.changeVideoSource.bind(this), this.webcamActive = !1, this.opts.countdown && (this.opts.onBeforeSnapshot = this.oneTwoThreeSmile), this.setPluginState({
                    hasCamera: !1,
                    cameraReady: !1,
                    cameraError: null,
                    recordingLengthSeconds: 0,
                    videoSources: [],
                    currentDeviceId: null
                })
            }
            setOptions(e) {
                super.setOptions({ ...e,
                    videoConstraints: { ...this.opts.videoConstraints,
                        ...e ?.videoConstraints
                    }
                })
            }
            hasCameraCheck() {
                return this.mediaDevices ? this.mediaDevices.enumerateDevices().then(e => e.some(t => t.kind === "videoinput")) : Promise.resolve(!1)
            }
            isAudioOnly() {
                return this.opts.modes.length === 1 && this.opts.modes[0] === "audio-only"
            }
            getConstraints(e) {
                e === void 0 && (e = null);
                let t = this.opts.modes.indexOf("video-audio") !== -1 || this.opts.modes.indexOf("audio-only") !== -1,
                    r = !this.isAudioOnly() && (this.opts.modes.indexOf("video-audio") !== -1 || this.opts.modes.indexOf("video-only") !== -1 || this.opts.modes.indexOf("picture") !== -1),
                    s = { ...this.opts.videoConstraints || {
                            facingMode: this.opts.facingMode
                        },
                        ...e ? {
                            deviceId: e,
                            facingMode: null
                        } : {}
                    };
                return {
                    audio: t,
                    video: r ? s : !1
                }
            }
            start(e) {
                if (e === void 0 && (e = null), !this.supportsUserMedia) return Promise.reject(new Error("Webcam access not supported"));
                this.webcamActive = !0, this.opts.mirror && (mn(this, Ht)[Ht] = !0);
                let t = this.getConstraints(e && e.deviceId ? e.deviceId : null);
                this.hasCameraCheck().then(r => (this.setPluginState({
                    hasCamera: r
                }), this.mediaDevices.getUserMedia(t).then(s => {
                    this.stream = s;
                    let o = null,
                        a = this.isAudioOnly() ? s.getAudioTracks() : s.getVideoTracks();
                    !e || !e.deviceId ? o = a[0].getSettings().deviceId : a.forEach(l => {
                        l.getSettings().deviceId === e.deviceId && (o = l.getSettings().deviceId)
                    }), this.updateVideoSources(), this.setPluginState({
                        currentDeviceId: o,
                        cameraReady: !0
                    })
                }).catch(s => {
                    this.setPluginState({
                        cameraReady: !1,
                        cameraError: s
                    }), this.uppy.info(s.message, "error")
                })))
            }
            getMediaRecorderOptions() {
                let e = {};
                if (MediaRecorder.isTypeSupported) {
                    let {
                        restrictions: t
                    } = this.uppy.opts, r = [];
                    this.opts.preferredVideoMimeType ? r = [this.opts.preferredVideoMimeType] : t.allowedFileTypes && (r = t.allowedFileTypes.map(dg).filter(D2));
                    let s = n(a => MediaRecorder.isTypeSupported(a) && ui(a), "filterSupportedTypes"),
                        o = r.filter(s);
                    o.length > 0 && (e.mimeType = o[0])
                }
                return e
            }
            startRecording() {
                this.recorder = new MediaRecorder(this.stream, this.getMediaRecorderOptions()), this.recordingChunks = [];
                let e = !1;
                this.recorder.addEventListener("dataavailable", t => {
                    this.recordingChunks.push(t.data);
                    let {
                        restrictions: r
                    } = this.uppy.opts;
                    if (this.recordingChunks.length > 1 && r.maxFileSize != null && !e) {
                        let s = this.recordingChunks.reduce((h, c) => h + c.size, 0),
                            a = (s - this.recordingChunks[0].size) / (this.recordingChunks.length - 1) * 3,
                            l = Math.max(0, r.maxFileSize - a);
                        s > l && (e = !0, this.uppy.info(this.i18n("recordingStoppedMaxSize"), "warning", 4e3), this.stopRecording())
                    }
                }), this.recorder.start(500), this.opts.showRecordingLength && (this.recordingLengthTimer = setInterval(() => {
                    let t = this.getPluginState().recordingLengthSeconds;
                    this.setPluginState({
                        recordingLengthSeconds: t + 1
                    })
                }, 1e3)), this.setPluginState({
                    isRecording: !0
                })
            }
            stopRecording() {
                return new Promise(t => {
                    this.recorder.addEventListener("stop", () => {
                        t()
                    }), this.recorder.stop(), this.opts.showRecordingLength && (clearInterval(this.recordingLengthTimer), this.setPluginState({
                        recordingLengthSeconds: 0
                    }))
                }).then(() => (this.setPluginState({
                    isRecording: !1
                }), this.getVideo())).then(t => {
                    try {
                        this.capturedMediaFile = t, this.setPluginState({
                            recordedVideo: URL.createObjectURL(t.data)
                        }), mn(this, Ht)[Ht] = !1
                    } catch (r) {
                        r.isRestriction || this.uppy.log(r)
                    }
                }).then(() => {
                    this.recordingChunks = null, this.recorder = null
                }, t => {
                    throw this.recordingChunks = null, this.recorder = null, t
                })
            }
            discardRecordedVideo() {
                this.setPluginState({
                    recordedVideo: null
                }), this.opts.mirror && (mn(this, Ht)[Ht] = !0), this.capturedMediaFile = null
            }
            submit() {
                try {
                    this.capturedMediaFile && this.uppy.addFile(this.capturedMediaFile)
                } catch (e) {
                    e.isRestriction || this.uppy.log(e, "error")
                }
            }
            async stop() {
                if (this.stream) {
                    let e = this.stream.getAudioTracks(),
                        t = this.stream.getVideoTracks();
                    e.concat(t).forEach(r => r.stop())
                }
                this.recorder && await new Promise(e => {
                    this.recorder.addEventListener("stop", e, {
                        once: !0
                    }), this.recorder.stop(), this.opts.showRecordingLength && clearInterval(this.recordingLengthTimer)
                }), this.recordingChunks = null, this.recorder = null, this.webcamActive = !1, this.stream = null, this.setPluginState({
                    recordedVideo: null,
                    isRecording: !1,
                    recordingLengthSeconds: 0
                })
            }
            getVideoElement() {
                return this.el.querySelector(".uppy-Webcam-video")
            }
            oneTwoThreeSmile() {
                return new Promise((e, t) => {
                    let r = this.opts.countdown,
                        s = setInterval(() => {
                            if (!this.webcamActive) return clearInterval(s), this.captureInProgress = !1, t(new Error("Webcam is not active"));
                            r > 0 ? (this.uppy.info(`${r}...`, "warning", 800), r--) : (clearInterval(s), this.uppy.info(this.i18n("smile"), "success", 1500), setTimeout(() => e(), 1500))
                        }, 1e3)
                })
            }
            takeSnapshot() {
                this.captureInProgress || (this.captureInProgress = !0, this.opts.onBeforeSnapshot().catch(e => {
                    let t = typeof e == "object" ? e.message : e;
                    return this.uppy.info(t, "error", 5e3), Promise.reject(new Error(`onBeforeSnapshot: ${t}`))
                }).then(() => this.getImage()).then(e => {
                    this.captureInProgress = !1;
                    try {
                        this.uppy.addFile(e)
                    } catch (t) {
                        t.isRestriction || this.uppy.log(t)
                    }
                }, e => {
                    throw this.captureInProgress = !1, e
                }))
            }
            getImage() {
                let e = this.getVideoElement();
                if (!e) return Promise.reject(new Error("No video element found, likely due to the Webcam tab being closed."));
                let t = e.videoWidth,
                    r = e.videoHeight,
                    s = document.createElement("canvas");
                s.width = t, s.height = r, s.getContext("2d").drawImage(e, 0, 0);
                let {
                    restrictions: a
                } = this.uppy.opts, l = [];
                this.opts.preferredImageMimeType ? l = [this.opts.preferredImageMimeType] : a.allowedFileTypes && (l = a.allowedFileTypes.map(dg).filter(N2));
                let h = l[0] || "image/jpeg",
                    c = ui(h) || "jpg",
                    d = `cam-${Date.now()}.${c}`;
                return Xh(s, h).then(f => ({
                    source: this.id,
                    name: d,
                    data: new Blob([f], {
                        type: h
                    }),
                    type: h
                }))
            }
            getVideo() {
                let e = this.recordingChunks.find(a => {
                        var l;
                        return ((l = a.type) == null ? void 0 : l.length) > 0
                    }).type,
                    t = ui(e);
                if (!t) return Promise.reject(new Error(`Could not retrieve recording: Unsupported media type "${e}"`));
                let r = `webcam-${Date.now()}.${t}`,
                    s = new Blob(this.recordingChunks, {
                        type: e
                    }),
                    o = {
                        source: this.id,
                        name: r,
                        data: new Blob([s], {
                            type: e
                        }),
                        type: e
                    };
                return Promise.resolve(o)
            }
            focus() {
                !this.opts.countdown || setTimeout(() => {
                    this.uppy.info(this.i18n("smile"), "success", 1500)
                }, 1e3)
            }
            changeVideoSource(e) {
                this.stop(), this.start({
                    deviceId: e
                })
            }
            updateVideoSources() {
                this.mediaDevices.enumerateDevices().then(e => {
                    this.setPluginState({
                        videoSources: e.filter(t => t.kind === "videoinput")
                    })
                })
            }
            render() {
                this.webcamActive || this.start();
                let e = this.getPluginState();
                return !e.cameraReady || !e.hasCamera ? u(hg, {
                    icon: bl,
                    i18n: this.i18n,
                    hasCamera: e.hasCamera
                }) : u(ug, ic({}, e, {
                    onChangeVideoSource: this.changeVideoSource,
                    onSnapshot: this.takeSnapshot,
                    onStartRecording: this.startRecording,
                    onStopRecording: this.stopRecording,
                    onDiscardRecordedVideo: this.discardRecordedVideo,
                    onSubmit: this.submit,
                    onFocus: this.focus,
                    onStop: this.stop,
                    i18n: this.i18n,
                    modes: this.opts.modes,
                    showRecordingLength: this.opts.showRecordingLength,
                    showVideoSourceDropdown: this.opts.showVideoSourceDropdown,
                    supportsRecording: Yh(),
                    recording: e.isRecording,
                    mirror: mn(this, Ht)[Ht],
                    src: this.stream
                }))
            }
            install() {
                let {
                    mobileNativeCamera: e,
                    modes: t,
                    facingMode: r,
                    videoConstraints: s
                } = this.opts, {
                    target: o
                } = this.opts;
                if (e && o) {
                    var a;
                    (a = this.getTargetPlugin(o)) == null || a.setOptions({
                        showNativeVideoCameraButton: tc(t, "video-only") || tc(t, "video-audio"),
                        showNativePhotoCameraButton: tc(t, "picture"),
                        nativeCameraFacingMode: s ?.facingMode || r
                    });
                    return
                }
                this.setPluginState({
                    cameraReady: !1,
                    recordingLengthSeconds: 0
                }), o && this.mount(o, this), this.mediaDevices && (this.updateVideoSources(), this.mediaDevices.ondevicechange = () => {
                    if (this.updateVideoSources(), this.stream) {
                        let l = !0,
                            {
                                videoSources: h,
                                currentDeviceId: c
                            } = this.getPluginState();
                        h.forEach(d => {
                            c === d.deviceId && (l = !1)
                        }), l && (this.stop(), this.start())
                    }
                })
            }
            uninstall() {
                this.stop(), this.unmount()
            }
            onUnmount() {
                this.stop()
            }
        };
    n(br, "Webcam");
    br.VERSION = U2.version;

    function j(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(j, "_classPrivateFieldLooseBase");
    var I2 = 0;

    function lt(i) {
        return "__private_" + I2++ + "_" + i
    }
    n(lt, "_classPrivateFieldLooseKey");

    function L2(i) {
        return new Error("Cancelled", {
            cause: i
        })
    }
    n(L2, "createCancelError");

    function M2(i) {
        if (i != null) {
            let e = n(() => this.abort(i.reason), "abortPromise");
            i.addEventListener("abort", e, {
                once: !0
            });
            let t = n(() => {
                i.removeEventListener("abort", e)
            }, "removeAbortListener");
            this.then(t, t)
        }
        return this
    }
    n(M2, "abortOn");
    var gt = lt("activeRequests"),
        Ye = lt("queuedHandlers"),
        mt = lt("paused"),
        Jr = lt("pauseTimer"),
        Xe = lt("downLimit"),
        Qr = lt("upperLimit"),
        qi = lt("rateLimitingTimer"),
        gn = lt("call"),
        Vi = lt("queueNext"),
        oc = lt("next"),
        rc = lt("queue"),
        nc = lt("dequeue"),
        sc = lt("resume"),
        Zr = lt("increaseLimit"),
        Je = class {
            constructor(e) {
                Object.defineProperty(this, nc, {
                    value: q2
                }), Object.defineProperty(this, rc, {
                    value: $2
                }), Object.defineProperty(this, oc, {
                    value: H2
                }), Object.defineProperty(this, Vi, {
                    value: j2
                }), Object.defineProperty(this, gn, {
                    value: z2
                }), Object.defineProperty(this, gt, {
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, Ye, {
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, mt, {
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, Jr, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Xe, {
                    writable: !0,
                    value: 1
                }), Object.defineProperty(this, Qr, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, qi, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, sc, {
                    writable: !0,
                    value: () => this.resume()
                }), Object.defineProperty(this, Zr, {
                    writable: !0,
                    value: () => {
                        if (j(this, mt)[mt]) {
                            j(this, qi)[qi] = setTimeout(j(this, Zr)[Zr], 0);
                            return
                        }
                        j(this, Xe)[Xe] = this.limit, this.limit = Math.ceil((j(this, Qr)[Qr] + j(this, Xe)[Xe]) / 2);
                        for (let t = j(this, Xe)[Xe]; t <= this.limit; t++) j(this, Vi)[Vi]();
                        j(this, Qr)[Qr] - j(this, Xe)[Xe] > 3 ? j(this, qi)[qi] = setTimeout(j(this, Zr)[Zr], 2e3) : j(this, Xe)[Xe] = Math.floor(j(this, Xe)[Xe] / 2)
                    }
                }), typeof e != "number" || e === 0 ? this.limit = 1 / 0 : this.limit = e
            }
            run(e, t) {
                return !j(this, mt)[mt] && j(this, gt)[gt] < this.limit ? j(this, gn)[gn](e) : j(this, rc)[rc](e, t)
            }
            wrapPromiseFunction(e, t) {
                var r = this;
                return function() {
                    for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++) o[a] = arguments[a];
                    let l, h = new Promise((c, d) => {
                        l = r.run(() => {
                            let f, y;
                            try {
                                y = Promise.resolve(e(...o))
                            } catch (w) {
                                y = Promise.reject(w)
                            }
                            return y.then(w => {
                                f ? d(f) : (l.done(), c(w))
                            }, w => {
                                f ? d(f) : (l.done(), d(w))
                            }), w => {
                                f = L2(w)
                            }
                        }, t)
                    });
                    return h.abort = c => {
                        l.abort(c)
                    }, h.abortOn = M2, h
                }
            }
            resume() {
                j(this, mt)[mt] = !1, clearTimeout(j(this, Jr)[Jr]);
                for (let e = 0; e < this.limit; e++) j(this, Vi)[Vi]()
            }
            pause(e) {
                e === void 0 && (e = null), j(this, mt)[mt] = !0, clearTimeout(j(this, Jr)[Jr]), e != null && (j(this, Jr)[Jr] = setTimeout(j(this, sc)[sc], e))
            }
            rateLimit(e) {
                clearTimeout(j(this, qi)[qi]), this.pause(e), this.limit > 1 && Number.isFinite(this.limit) && (j(this, Qr)[Qr] = this.limit - 1, this.limit = j(this, Xe)[Xe], j(this, qi)[qi] = setTimeout(j(this, Zr)[Zr], e))
            }
            get isPaused() {
                return j(this, mt)[mt]
            }
        };
    n(Je, "RateLimitedQueue");

    function z2(i) {
        j(this, gt)[gt] += 1;
        let e = !1,
            t;
        try {
            t = i()
        } catch (r) {
            throw j(this, gt)[gt] -= 1, r
        }
        return {
            abort: r => {
                e || (e = !0, j(this, gt)[gt] -= 1, t(r), j(this, Vi)[Vi]())
            },
            done: () => {
                e || (e = !0, j(this, gt)[gt] -= 1, j(this, Vi)[Vi]())
            }
        }
    }
    n(z2, "_call2");

    function j2() {
        queueMicrotask(() => j(this, oc)[oc]())
    }
    n(j2, "_queueNext2");

    function H2() {
        if (j(this, mt)[mt] || j(this, gt)[gt] >= this.limit || j(this, Ye)[Ye].length === 0) return;
        let i = j(this, Ye)[Ye].shift(),
            e = j(this, gn)[gn](i.fn);
        i.abort = e.abort, i.done = e.done
    }
    n(H2, "_next2");

    function $2(i, e) {
        e === void 0 && (e = {});
        let t = {
                fn: i,
                priority: e.priority || 0,
                abort: () => {
                    j(this, nc)[nc](t)
                },
                done: () => {
                    throw new Error("Cannot mark a queued request as done: this indicates a bug")
                }
            },
            r = j(this, Ye)[Ye].findIndex(s => t.priority > s.priority);
        return r === -1 ? j(this, Ye)[Ye].push(t) : j(this, Ye)[Ye].splice(r, 0, t), t
    }
    n($2, "_queue2");

    function q2(i) {
        let e = j(this, Ye)[Ye].indexOf(i);
        e !== -1 && j(this, Ye)[Ye].splice(e, 1)
    }
    n(q2, "_dequeue2");
    var wr = Symbol("__queue");
    var fg = oe(bo(), 1);

    function V2(i, e, t) {
        let {
            progress: r,
            bytesUploaded: s,
            bytesTotal: o
        } = e;
        r && (i.uppy.log(`Upload progress: ${r}`), i.uppy.emit("upload-progress", t, {
            uploader: i,
            bytesUploaded: s,
            bytesTotal: o
        }))
    }
    n(V2, "emitSocketProgress");
    var Sr = (0, fg.default)(V2, 300, {
        leading: !0,
        trailing: !0
    });

    function Wi(i) {
        let t = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(i)[1];
        return `${/^http:\/\//i.test(i)?"ws":"wss"}://${t}`
    }
    n(Wi, "getSocketHost");

    function yn(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(yn, "_classPrivateFieldLooseBase");
    var W2 = 0;

    function mg(i) {
        return "__private_" + W2++ + "_" + i
    }
    n(mg, "_classPrivateFieldLooseKey");
    var es = mg("emitter"),
        vn = mg("events"),
        $e = class {
            constructor(e) {
                Object.defineProperty(this, es, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, vn, {
                    writable: !0,
                    value: []
                }), yn(this, es)[es] = e
            }
            on(e, t) {
                return yn(this, vn)[vn].push([e, t]), yn(this, es)[es].on(e, t)
            }
            remove() {
                for (let [e, t] of yn(this, vn)[vn].splice(0)) yn(this, es)[es].off(e, t)
            }
        };
    n($e, "EventTracker");

    function At(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(At, "_classPrivateFieldLooseBase");
    var K2 = 0;

    function Pl(i) {
        return "__private_" + K2++ + "_" + i
    }
    n(Pl, "_classPrivateFieldLooseKey");
    var Ki = Pl("aliveTimer"),
        ts = Pl("isDone"),
        bn = Pl("onTimedOut"),
        is = Pl("timeout"),
        _l = class {
            constructor(e, t) {
                Object.defineProperty(this, Ki, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, ts, {
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, bn, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, is, {
                    writable: !0,
                    value: void 0
                }), At(this, is)[is] = e, At(this, bn)[bn] = t
            }
            progress() {
                At(this, ts)[ts] || At(this, is)[is] > 0 && (clearTimeout(At(this, Ki)[Ki]), At(this, Ki)[Ki] = setTimeout(At(this, bn)[bn], At(this, is)[is]))
            }
            done() {
                At(this, ts)[ts] || (clearTimeout(At(this, Ki)[Ki]), At(this, Ki)[Ki] = null, At(this, ts)[ts] = !0)
            }
        };
    n(_l, "ProgressTimeout");
    var wn = _l;

    function G2(i) {
        return i ? i.readyState !== 0 && i.readyState !== 4 || i.status === 0 : !1
    }
    n(G2, "isNetworkError");
    var rs = G2;

    function ut(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(ut, "_classPrivateFieldLooseBase");
    var X2 = 0;

    function as(i) {
        return "__private_" + X2++ + "_" + i
    }
    n(as, "_classPrivateFieldLooseKey");

    function gg(i, e) {
        if (rs(i)) return new Mt(e, i);
        let t = new Zt("Upload error", {
            cause: e
        });
        return t.request = i, t
    }
    n(gg, "buildResponseError");

    function Y2(i) {
        return i.data.slice(0, i.data.size, i.meta.type)
    }
    n(Y2, "setTypeInBlob");

    function J2(i, e, t) {
        (Array.isArray(t.allowedMetaFields) ? t.allowedMetaFields : Object.keys(e)).forEach(s => {
            i.append(s, e[s])
        })
    }
    n(J2, "addMetadata");

    function Q2(i, e) {
        let t = new FormData;
        J2(t, i.meta, e);
        let r = Y2(i);
        return i.name ? t.append(e.fieldName, r, i.meta.name) : t.append(e.fieldName, r), t
    }
    n(Q2, "createFormDataUpload");
    var Z2 = n(i => i.data, "createBareUpload"),
        Sn = as("queueRequestSocketToken"),
        ss = as("getOptions"),
        os = as("addEventHandlerForFile"),
        ns = as("addEventHandlerIfFileStillExists"),
        ac = as("uploadLocalFile"),
        lc = as("requestSocketToken"),
        uc = as("uploadRemoteFile"),
        io = class {
            constructor(e, t) {
                Object.defineProperty(this, uc, {
                    value: sS
                }), Object.defineProperty(this, ac, {
                    value: rS
                }), Object.defineProperty(this, ns, {
                    value: iS
                }), Object.defineProperty(this, os, {
                    value: tS
                }), Object.defineProperty(this, ss, {
                    value: eS
                }), Object.defineProperty(this, Sn, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, lc, {
                    writable: !0,
                    value: async r => {
                        let s = ut(this, ss)[ss](r),
                            o = r.remote.providerOptions.provider ? Y : le,
                            a = new o(this.uppy, r.remote.providerOptions),
                            l = Array.isArray(s.allowedMetaFields) ? s.allowedMetaFields : Object.keys(r.meta);
                        return r.tus && Object.assign(s, r.tus), (await a.post(r.remote.url, { ...r.remote.body,
                            protocol: "multipart",
                            endpoint: s.endpoint,
                            size: r.data.size,
                            fieldname: s.fieldName,
                            metadata: Object.fromEntries(l.map(c => [c, r.meta[c]])),
                            httpMethod: s.method,
                            useFormData: s.formData,
                            headers: s.headers
                        })).token
                    }
                }), this.uppy = e, this.opts = {
                    validateStatus(r) {
                        return r >= 200 && r < 300
                    },
                    ...t
                }, this.requests = t[wr], this.uploaderEvents = Object.create(null), this.i18n = t.i18n, ut(this, Sn)[Sn] = this.requests.wrapPromiseFunction(ut(this, lc)[lc], {
                    priority: -1
                })
            }
            uploadFile(e, t, r) {
                let s = this.uppy.getFile(e);
                if (s.error) throw new Error(s.error);
                return s.isRemote ? ut(this, uc)[uc](s, t, r) : ut(this, ac)[ac](s, t, r)
            }
            connectToServerSocket(e) {
                return new Promise((t, r) => {
                    let s = ut(this, ss)[ss](e),
                        o = e.serverToken,
                        a = Wi(e.remote.companionUrl),
                        l, h = n(() => {
                            l == null && (l = new ot({
                                target: `${a}/api/${o}`
                            }), l.on("progress", f => Sr(this, f, e)), l.on("success", f => {
                                let y = s.getResponseData(f.response.responseText, f.response),
                                    w = y[s.responseUrlFieldName],
                                    S = {
                                        status: f.response.status,
                                        body: y,
                                        uploadURL: w,
                                        bytesUploaded: f.bytesUploaded
                                    };
                                return this.uppy.emit("upload-success", e, S), c.done(), l.close(), this.uploaderEvents[e.id] && (this.uploaderEvents[e.id].remove(), this.uploaderEvents[e.id] = null), t()
                            }), l.on("error", f => {
                                let y = f.response,
                                    w = y ? s.getResponseError(y.responseText, y) : new Zt(f.error.message, {
                                        cause: f.error
                                    });
                                this.uppy.emit("upload-error", e, w), c.done(), this.uploaderEvents[e.id] && (this.uploaderEvents[e.id].remove(), this.uploaderEvents[e.id] = null), r(w)
                            }))
                        }, "createSocket");
                    this.uploaderEvents[e.id] = new $e(this.uppy);
                    let c = this.requests.run(() => {
                        if (e.isPaused) {
                            var f;
                            (f = l) == null || f.send("pause", {})
                        } else h();
                        return () => l.close()
                    });
                    ut(this, os)[os]("file-removed", e.id, () => {
                        var f;
                        (f = l) == null || f.send("cancel", {}), c.abort(), t(`upload ${e.id} was removed`)
                    }), ut(this, ns)[ns]("cancel-all", e.id, function(f) {
                        let {
                            reason: y
                        } = f === void 0 ? {} : f;
                        if (y === "user") {
                            var w;
                            (w = l) == null || w.send("cancel", {}), c.abort()
                        }
                        t(`upload ${e.id} was canceled`)
                    });
                    let d = n(() => {
                        l == null ? c.abort() : (l.send("pause", {}), c.done()), c = this.requests.run(() => (e.isPaused || (l == null ? h() : l.send("resume", {})), () => l.close()))
                    }, "onRetryRequest");
                    ut(this, os)[os]("upload-retry", e.id, d), ut(this, ns)[ns]("retry-all", e.id, d)
                }).catch(t => (this.uppy.emit("upload-error", e, t), Promise.reject(t)))
            }
        };
    n(io, "MiniXHRUpload");

    function eS(i) {
        var e;
        let {
            uppy: t
        } = this, r = t.getState().xhrUpload;
        return { ...this.opts,
            ...r || {},
            ...i.xhrUpload || {},
            headers: { ...this.opts.headers,
                ...r ?.headers,
                ...(e = i.xhrUpload) == null ? void 0 : e.headers
            }
        }
    }
    n(eS, "_getOptions2");

    function tS(i, e, t) {
        this.uploaderEvents[e].on(i, r => {
            var s;
            let o = (s = r ?.id) != null ? s : r;
            e === o && t()
        })
    }
    n(tS, "_addEventHandlerForFile2");

    function iS(i, e, t) {
        var r = this;
        this.uploaderEvents[e].on(i, function() {
            r.uppy.getFile(e) && t(...arguments)
        })
    }
    n(iS, "_addEventHandlerIfFileStillExists2");

    function rS(i, e, t) {
        let r = ut(this, ss)[ss](i);
        return this.uppy.log(`uploading ${e} of ${t}`), new Promise((s, o) => {
            let a = r.formData ? Q2(i, r) : Z2(i, r),
                l = new XMLHttpRequest;
            this.uploaderEvents[i.id] = new $e(this.uppy);
            let h = new wn(r.timeout, () => {
                    l.abort(), d.done();
                    let f = new Error(this.i18n("timedOut", {
                        seconds: Math.ceil(r.timeout / 1e3)
                    }));
                    this.uppy.emit("upload-error", i, f), o(f)
                }),
                c = Ot();
            l.upload.addEventListener("loadstart", () => {
                this.uppy.log(`[AwsS3/XHRUpload] ${c} started`)
            }), l.upload.addEventListener("progress", f => {
                this.uppy.log(`[AwsS3/XHRUpload] ${c} progress: ${f.loaded} / ${f.total}`), h.progress(), f.lengthComputable && this.uppy.emit("upload-progress", i, {
                    uploader: this,
                    bytesUploaded: f.loaded,
                    bytesTotal: f.total
                })
            }), l.addEventListener("load", f => {
                if (this.uppy.log(`[AwsS3/XHRUpload] ${c} finished`), h.done(), d.done(), this.uploaderEvents[i.id] && (this.uploaderEvents[i.id].remove(), this.uploaderEvents[i.id] = null), r.validateStatus(f.target.status, l.responseText, l)) {
                    let R = r.getResponseData(l.responseText, l),
                        x = R[r.responseUrlFieldName],
                        F = {
                            status: f.target.status,
                            body: R,
                            uploadURL: x
                        };
                    return this.uppy.emit("upload-success", i, F), x && this.uppy.log(`Download ${i.name} from ${x}`), s(i)
                }
                let y = r.getResponseData(l.responseText, l),
                    w = gg(l, r.getResponseError(l.responseText, l)),
                    S = {
                        status: f.target.status,
                        body: y
                    };
                return this.uppy.emit("upload-error", i, w, S), o(w)
            }), l.addEventListener("error", () => {
                this.uppy.log(`[AwsS3/XHRUpload] ${c} errored`), h.done(), d.done(), this.uploaderEvents[i.id] && (this.uploaderEvents[i.id].remove(), this.uploaderEvents[i.id] = null);
                let f = gg(l, r.getResponseError(l.responseText, l));
                return this.uppy.emit("upload-error", i, f), o(f)
            }), l.open(r.method.toUpperCase(), r.endpoint, !0), l.withCredentials = Boolean(r.withCredentials), r.responseType !== "" && (l.responseType = r.responseType), Object.keys(r.headers).forEach(f => {
                l.setRequestHeader(f, r.headers[f])
            });
            let d = this.requests.run(() => (l.send(a), () => {
                h.done(), l.abort()
            }), {
                priority: 1
            });
            ut(this, os)[os]("file-removed", i.id, () => {
                d.abort(), o(new Error("File removed"))
            }), ut(this, ns)[ns]("cancel-all", i.id, function(f) {
                let {
                    reason: y
                } = f === void 0 ? {} : f;
                y === "user" && d.abort(), o(new Error("Upload cancelled"))
            })
        })
    }
    n(rS, "_uploadLocalFile2");
    async function sS(i) {
        try {
            if (i.serverToken) return this.connectToServerSocket(i);
            let e = await ut(this, Sn)[Sn](i);
            return this.uppy.getState().files[i.id] ? (this.uppy.setFileState(i.id, {
                serverToken: e
            }), this.connectToServerSocket(this.uppy.getFile(i.id))) : void 0
        } catch (e) {
            throw this.uppy.emit("upload-error", i, e), e
        }
    }
    n(sS, "_uploadRemoteFile2");

    function oS(i) {
        return i.replace(/;.*$/, "")
    }
    n(oS, "removeMimeParameters");

    function nS(i, e) {
        let t = e.headers ? e.headers["content-type"] : e.getResponseHeader("Content-Type");
        if (typeof t == "string") {
            let r = oS(t).toLowerCase();
            if (r === "application/xml" || r === "text/xml" || r === "text/html" && /^<\?xml /.test(i)) return !0
        }
        return !1
    }
    n(nS, "isXml");
    var hc = nS;
    var yg = {
        strings: {
            timedOut: "Upload stalled for %{seconds} seconds, aborting."
        }
    };
    var bg;

    function Qe(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(Qe, "_classPrivateFieldLooseBase");
    var aS = 0;

    function En(i) {
        return "__private_" + aS++ + "_" + i
    }
    n(En, "_classPrivateFieldLooseKey");
    var lS = {
        version: "3.0.5"
    };

    function uS(i, e) {
        return !i && !e.startsWith("https://") && !e.startsWith("http://") && (e = `https://${e}`), new URL(e, i || void 0).toString()
    }
    n(uS, "resolveUrl");

    function Fn(i, e) {
        let t = i.indexOf(`<${e}>`),
            r = i.indexOf(`</${e}>`, t);
        return t !== -1 && r !== -1 ? i.slice(t + e.length + 2, r) : ""
    }
    n(Fn, "getXmlValue");

    function hS(i) {
        if (i && i.error) {
            let e = new Error(i.message);
            throw Object.assign(e, i.error), e
        }
        return i
    }
    n(hS, "assertServerError");

    function cS(i, e) {
        if (!(e != null && typeof e.url == "string" && (typeof e.fields == "object" || e.fields == null))) throw new TypeError(`AwsS3: got incorrect result from 'getUploadParameters()' for file '${i.name}', expected an object '{ url, method, fields, headers }' but got '${JSON.stringify(e)}' instead.
See https://uppy.io/docs/aws-s3/#getUploadParameters-file for more on the expected format.`);
        if (!(e.method == null || /^p(u|os)t$/i.test(e.method))) throw new TypeError(`AwsS3: got incorrect method from 'getUploadParameters()' for file '${i.name}', expected  'put' or 'post' but got '${e.method}' instead.
See https://uppy.io/docs/aws-s3/#getUploadParameters-file for more on the expected format.`)
    }
    n(cS, "validateParameters");

    function dS(i, e) {
        if (!hc(i, e)) return;
        let t = Fn(i, "Message");
        return new Error(t)
    }
    n(dS, "defaultGetResponseError");
    var vg = !1,
        yt = En("client"),
        ls = En("requests"),
        _n = En("uploader"),
        Pn = En("handleUpload"),
        xn = En("setCompanionHeaders");
    bg = Symbol.for("uppy test: getClient");
    var us = class extends ae {
        constructor(e, t) {
            super(e, t), Object.defineProperty(this, yt, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, ls, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, _n, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, Pn, {
                writable: !0,
                value: s => {
                    let o = Object.create(null);

                    function a(c) {
                        var d;
                        let {
                            id: f
                        } = c;
                        (d = o[f]) == null || d.abort()
                    }
                    n(a, "onremove"), this.uppy.on("file-removed", a), s.forEach(c => {
                        let d = this.uppy.getFile(c);
                        this.uppy.emit("upload-started", d)
                    });
                    let l = Qe(this, ls)[ls].wrapPromiseFunction(c => this.opts.getUploadParameters(c)),
                        h = s.length;
                    return Promise.allSettled(s.map((c, d) => (o[c] = l(this.uppy.getFile(c)), o[c].then(f => {
                        delete o[c];
                        let y = this.uppy.getFile(c);
                        cS(y, f);
                        let {
                            method: w = "post",
                            url: S,
                            fields: R,
                            headers: x
                        } = f, F = {
                            method: w,
                            formData: w.toLowerCase() === "post",
                            endpoint: S,
                            allowedMetaFields: R ? Object.keys(R) : []
                        };
                        return x && (F.headers = x), this.uppy.setFileState(y.id, {
                            meta: { ...y.meta,
                                ...R
                            },
                            xhrUpload: F
                        }), Qe(this, _n)[_n].uploadFile(y.id, d, h)
                    }).catch(f => {
                        delete o[c];
                        let y = this.uppy.getFile(c);
                        return this.uppy.emit("upload-error", y, f), Promise.reject(f)
                    })))).finally(() => {
                        this.uppy.off("file-removed", a)
                    })
                }
            }), Object.defineProperty(this, xn, {
                writable: !0,
                value: () => (Qe(this, yt)[yt].setCompanionHeaders(this.opts.companionHeaders), Promise.resolve())
            }), this.type = "uploader", this.id = this.opts.id || "AwsS3", this.title = "AWS S3", this.defaultLocale = yg;
            let r = {
                timeout: 30 * 1e3,
                limit: 0,
                allowedMetaFields: [],
                getUploadParameters: this.getUploadParameters.bind(this),
                companionHeaders: {}
            };
            if (this.opts = { ...r,
                ...t
            }, t ?.allowedMetaFields === void 0 && "metaFields" in this.opts) throw new Error("The `metaFields` option has been renamed to `allowedMetaFields`.");
            this.i18nInit(), Qe(this, yt)[yt] = new le(e, t), Qe(this, ls)[ls] = new Je(this.opts.limit)
        }[bg]() {
            return Qe(this, yt)[yt]
        }
        get client() {
            return Qe(this, yt)[yt]
        }
        set client(e) {
            Qe(this, yt)[yt] = e
        }
        getUploadParameters(e) {
            if (!this.opts.companionUrl) throw new Error("Expected a `companionUrl` option containing a Companion address.");
            let t = e.meta.name,
                {
                    type: r
                } = e.meta,
                s = Object.fromEntries(this.opts.allowedMetaFields.filter(a => e.meta[a] != null).map(a => [`metadata[${a}]`, e.meta[a].toString()])),
                o = new URLSearchParams({
                    filename: t,
                    type: r,
                    ...s
                });
            return Qe(this, yt)[yt].get(`s3/params?${o}`).then(hS)
        }
        install() {
            let {
                uppy: e
            } = this;
            e.addPreProcessor(Qe(this, xn)[xn]), e.addUploader(Qe(this, Pn)[Pn]);

            function t(s, o) {
                let a = this;
                return hc(s, o) ? {
                    location: uS(o.responseURL, Fn(s, "Location")),
                    bucket: Fn(s, "Bucket"),
                    key: Fn(s, "Key"),
                    etag: Fn(s, "ETag")
                } : a.method.toUpperCase() === "POST" ? (vg || (e.log("[AwsS3] No response data found, make sure to set the success_action_status AWS SDK option to 201. See https://uppy.io/docs/aws-s3/#POST-Uploads", "warning"), vg = !0), {
                    location: null
                }) : o.responseURL ? {
                    location: o.responseURL.replace(/\?.*$/, "")
                } : {
                    location: null
                }
            }
            n(t, "defaultGetResponseData");
            let r = {
                fieldName: "file",
                responseUrlFieldName: "location",
                timeout: this.opts.timeout,
                [wr]: Qe(this, ls)[ls],
                responseType: "text",
                getResponseData: this.opts.getResponseData || t,
                getResponseError: dS
            };
            r.i18n = this.i18n, Qe(this, _n)[_n] = new io(e, r)
        }
        uninstall() {
            this.uppy.removePreProcessor(Qe(this, xn)[xn]), this.uppy.removeUploader(Qe(this, Pn)[Pn])
        }
    };
    n(us, "AwsS3");
    us.VERSION = lS.version;
    var {
        AbortController: xl
    } = globalThis, {
        AbortSignal: _U
    } = globalThis, cc = n(function(i, e) {
        i === void 0 && (i = "Aborted");
        let t = new DOMException(i, "AbortError");
        return e != null && qe(e, "cause") && Object.defineProperty(t, "cause", {
            __proto__: null,
            configurable: !0,
            writable: !0,
            value: e.cause
        }), t
    }, "createAbortError");

    function M(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(M, "_classPrivateFieldLooseBase");
    var pS = 0;

    function et(i) {
        return "__private_" + pS++ + "_" + i
    }
    n(et, "_classPrivateFieldLooseKey");
    var fS = 1024 * 1024,
        wg = {
            getChunkSize(i) {
                return Math.ceil(i.size / 1e4)
            },
            onProgress() {},
            onPartComplete() {},
            onSuccess() {},
            onError(i) {
                throw i
            }
        };

    function mS(i) {
        if (typeof i == "string") return parseInt(i, 10);
        if (typeof i == "number") return i;
        throw new TypeError("Expected a number")
    }
    n(mS, "ensureInt");
    var dc = Symbol("pausing upload, not an actual error"),
        Le = et("abortController"),
        Ze = et("chunks"),
        vt = et("chunkState"),
        Ce = et("data"),
        Gi = et("file"),
        hs = et("uploadPromise"),
        On = et("onError"),
        cs = et("onSuccess"),
        Tn = et("onReject"),
        pc = et("initChunks"),
        fc = et("createUpload"),
        mc = et("resumeUpload"),
        Rn = et("onPartProgress"),
        Cn = et("onPartComplete"),
        gc = et("abortUpload"),
        Fl = class {
            constructor(e, t) {
                var r, s;
                Object.defineProperty(this, gc, {
                    value: bS
                }), Object.defineProperty(this, mc, {
                    value: vS
                }), Object.defineProperty(this, fc, {
                    value: yS
                }), Object.defineProperty(this, pc, {
                    value: gS
                }), Object.defineProperty(this, Le, {
                    writable: !0,
                    value: new xl
                }), Object.defineProperty(this, Ze, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, vt, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Ce, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Gi, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, hs, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, On, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, cs, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Tn, {
                    writable: !0,
                    value: o => o ?.cause === dc ? null : M(this, On)[On](o)
                }), Object.defineProperty(this, Rn, {
                    writable: !0,
                    value: o => a => {
                        if (!a.lengthComputable) return;
                        let l = a.loaded;
                        M(this, vt)[vt][o].uploaded = mS(l);
                        let h = M(this, vt)[vt].reduce((c, d) => c + d.uploaded, 0);
                        this.options.onProgress(h, M(this, Ce)[Ce].size)
                    }
                }), Object.defineProperty(this, Cn, {
                    writable: !0,
                    value: o => a => {
                        M(this, Ze)[Ze][o] = null, M(this, vt)[vt][o].etag = a, M(this, vt)[vt][o].done = !0;
                        let l = {
                            PartNumber: o + 1,
                            ETag: a
                        };
                        this.options.onPartComplete(l)
                    }
                }), this.options = { ...wg,
                    ...t
                }, (s = (r = this.options).getChunkSize) != null || (r.getChunkSize = wg.getChunkSize), M(this, Ce)[Ce] = e, M(this, Gi)[Gi] = t.file, M(this, cs)[cs] = this.options.onSuccess, M(this, On)[On] = this.options.onError, M(this, pc)[pc]()
            }
            start() {
                M(this, hs)[hs] ? (M(this, Le)[Le].signal.aborted || M(this, Le)[Le].abort(dc), M(this, Le)[Le] = new xl, M(this, mc)[mc]()) : M(this, fc)[fc]()
            }
            pause() {
                M(this, Le)[Le].abort(dc), M(this, Le)[Le] = new xl
            }
            abort(e) {
                var t;
                e === void 0 && (e = void 0), (t = e) != null && t.really ? M(this, gc)[gc]() : this.pause()
            }
            get chunkState() {
                return M(this, vt)[vt]
            }
        };
    n(Fl, "MultipartUploader");

    function gS() {
        let i = this.options.getChunkSize(M(this, Ce)[Ce]),
            e = M(this, Ce)[Ce].size,
            t = Math.max(5 * fS, Math.ceil(e / 1e4)),
            r = Math.max(i, t);
        if (M(this, Ce)[Ce].size === 0) M(this, Ze)[Ze] = [M(this, Ce)[Ce]], M(this, Ce)[Ce].onProgress = M(this, Rn)[Rn](0), M(this, Ce)[Ce].onComplete = M(this, Cn)[Cn](0);
        else {
            let s = Math.ceil(e / r);
            M(this, Ze)[Ze] = Array(s);
            let o = 0;
            for (let a = 0; a < e; a += r) {
                let l = Math.min(e, a + r),
                    h = M(this, Ce)[Ce].slice(a, l);
                h.onProgress = M(this, Rn)[Rn](o), h.onComplete = M(this, Cn)[Cn](o), M(this, Ze)[Ze][o++] = h
            }
        }
        M(this, vt)[vt] = M(this, Ze)[Ze].map(() => ({
            uploaded: 0
        }))
    }
    n(gS, "_initChunks2");

    function yS() {
        M(this, hs)[hs] = this.options.companionComm.uploadFile(M(this, Gi)[Gi], M(this, Ze)[Ze], M(this, Le)[Le].signal).then(M(this, cs)[cs], M(this, Tn)[Tn])
    }
    n(yS, "_createUpload2");

    function vS() {
        M(this, hs)[hs] = this.options.companionComm.resumeUploadFile(M(this, Gi)[Gi], M(this, Ze)[Ze], M(this, Le)[Le].signal).then(M(this, cs)[cs], M(this, Tn)[Tn])
    }
    n(vS, "_resumeUpload2");

    function bS() {
        M(this, Le)[Le].abort(), this.options.companionComm.abortFileUpload(M(this, Gi)[Gi]).catch(i => this.options.log(i))
    }
    n(bS, "_abortUpload2");
    var Sg = Fl;
    var _g;

    function $(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n($, "_classPrivateFieldLooseBase");
    var wS = 0;

    function Ue(i) {
        return "__private_" + wS++ + "_" + i
    }
    n(Ue, "_classPrivateFieldLooseKey");
    var SS = {
        version: "3.1.2"
    };

    function kn(i) {
        if (i && i.error) {
            let e = new Error(i.message);
            throw Object.assign(e, i.error), e
        }
        return i
    }
    n(kn, "assertServerError");

    function tt(i) {
        if (i != null && i.aborted) throw cc("The operation was aborted", {
            cause: i.reason
        })
    }
    n(tt, "throwIfAborted");
    var An = Ue("abortMultipartUpload"),
        $t = Ue("cache"),
        Un = Ue("createMultipartUpload"),
        Dn = Ue("fetchSignature"),
        Nn = Ue("listParts"),
        fs = Ue("previousRetryDelay"),
        ms = Ue("requests"),
        Xi = Ue("retryDelayIterator"),
        ds = Ue("sendCompletionRequest"),
        Bn = Ue("setS3MultipartState"),
        In = Ue("uploadPartBytes"),
        yc = Ue("shouldRetry"),
        El = class {
            constructor(e, t, r) {
                Object.defineProperty(this, yc, {
                    value: _S
                }), Object.defineProperty(this, An, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, $t, {
                    writable: !0,
                    value: new WeakMap
                }), Object.defineProperty(this, Un, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Dn, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Nn, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, fs, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, ms, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Xi, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, ds, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Bn, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, In, {
                    writable: !0,
                    value: void 0
                }), $(this, ms)[ms] = e, $(this, Bn)[Bn] = r, this.setOptions(t)
            }
            setOptions(e) {
                let t = $(this, ms)[ms];
                if ("abortMultipartUpload" in e && ($(this, An)[An] = t.wrapPromiseFunction(e.abortMultipartUpload)), "createMultipartUpload" in e && ($(this, Un)[Un] = t.wrapPromiseFunction(e.createMultipartUpload, {
                    priority: -1
                })), "signPart" in e && ($(this, Dn)[Dn] = t.wrapPromiseFunction(e.signPart)), "listParts" in e && ($(this, Nn)[Nn] = t.wrapPromiseFunction(e.listParts)), "completeMultipartUpload" in e && ($(this, ds)[ds] = t.wrapPromiseFunction(e.completeMultipartUpload)), "retryDelays" in e) {
                    var r;
                    $(this, Xi)[Xi] = (r = e.retryDelays) == null ? void 0 : r.values()
                }
                "uploadPartBytes" in e && ($(this, In)[In] = t.wrapPromiseFunction(e.uploadPartBytes, {
                    priority: 1 / 0
                }))
            }
            async getUploadId(e, t) {
                let r = $(this, $t)[$t].get(e.data);
                if (r != null) return r;
                let s = $(this, Un)[Un](e, t),
                    o = n(() => {
                        s.abort(t.reason), $(this, $t)[$t].delete(e.data)
                    }, "abortPromise");
                return t.addEventListener("abort", o, {
                    once: !0
                }), $(this, $t)[$t].set(e.data, s), s.then(async a => {
                    t.removeEventListener("abort", o), $(this, Bn)[Bn](e, a), $(this, $t)[$t].set(e.data, a)
                }, () => {
                    t.removeEventListener("abort", o)
                }), s
            }
            async abortFileUpload(e) {
                let t = $(this, $t)[$t].get(e.data);
                t != null && await $(this, An)[An](e, await t)
            }
            async uploadFile(e, t, r) {
                tt(r);
                let {
                    uploadId: s,
                    key: o
                } = await this.getUploadId(e, r);
                tt(r);
                let a = await Promise.all(t.map((l, h) => this.uploadChunk(e, h + 1, l, r)));
                return tt(r), $(this, ds)[ds](e, {
                    key: o,
                    uploadId: s,
                    parts: a,
                    signal: r
                }).abortOn(r)
            }
            async resumeUploadFile(e, t, r) {
                tt(r);
                let {
                    uploadId: s,
                    key: o
                } = await this.getUploadId(e, r);
                tt(r);
                let a = await $(this, Nn)[Nn](e, {
                    uploadId: s,
                    key: o,
                    signal: r
                }).abortOn(r);
                tt(r);
                let l = await Promise.all(t.map((h, c) => {
                    let d = c + 1,
                        f = a.find(y => {
                            let {
                                PartNumber: w
                            } = y;
                            return w === d
                        });
                    return f == null ? this.uploadChunk(e, d, h, r) : {
                        PartNumber: d,
                        ETag: f.ETag
                    }
                }));
                return tt(r), $(this, ds)[ds](e, {
                    key: o,
                    uploadId: s,
                    parts: l,
                    signal: r
                }).abortOn(r)
            }
            async uploadChunk(e, t, r, s) {
                tt(s);
                let {
                    uploadId: o,
                    key: a
                } = await this.getUploadId(e, s);
                for (tt(s);;) {
                    let l = await $(this, Dn)[Dn](e, {
                        uploadId: o,
                        key: a,
                        partNumber: t,
                        body: r,
                        signal: s
                    }).abortOn(s);
                    tt(s);
                    try {
                        return {
                            PartNumber: t,
                            ...await $(this, In)[In](l, r, s).abortOn(s)
                        }
                    } catch (h) {
                        if (!await $(this, yc)[yc](h)) throw h
                    }
                }
            }
        };
    n(El, "HTTPCommunicationQueue");
    async function _S(i) {
        var e;
        let t = $(this, ms)[ms],
            r = i == null || (e = i.source) == null ? void 0 : e.status;
        if (r == null) return !1;
        if (r === 403 && i.message === "Request has expired") {
            if (!t.isPaused) {
                if (t.limit === 1 || $(this, fs)[fs] == null) {
                    var s;
                    let l = (s = $(this, Xi)[Xi]) == null ? void 0 : s.next();
                    if (l == null || l.done) return !1;
                    $(this, fs)[fs] = l.value
                }
                t.rateLimit(0), await new Promise(l => setTimeout(l, $(this, fs)[fs]))
            }
        } else if (r === 429) {
            if (!t.isPaused) {
                var o;
                let l = (o = $(this, Xi)[Xi]) == null ? void 0 : o.next();
                if (l == null || l.done) return !1;
                t.rateLimit(l.value)
            }
        } else {
            if (r > 400 && r < 500 && r !== 409) return !1;
            if (typeof navigator < "u" && navigator.onLine === !1) t.isPaused || (t.pause(), window.addEventListener("online", () => {
                t.resume()
            }, {
                once: !0
            }));
            else {
                var a;
                let l = (a = $(this, Xi)[Xi]) == null ? void 0 : a.next();
                if (l == null || l.done) return !1;
                await new Promise(h => setTimeout(h, l.value))
            }
        }
        return !0
    }
    n(_S, "_shouldRetry2");
    var Ln = Ue("queueRequestSocketToken"),
        ps = Ue("companionCommunicationQueue"),
        Me = Ue("client"),
        vc = Ue("setS3MultipartState"),
        bc = Ue("requestSocketToken"),
        Mn = Ue("setCompanionHeaders");
    _g = Symbol.for("uppy test: getClient");
    var Yi = class extends ae {
        constructor(e, t) {
            var r;
            super(e, t), Object.defineProperty(this, Ln, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, ps, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, Me, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, vc, {
                writable: !0,
                value: (o, a) => {
                    let {
                        key: l,
                        uploadId: h
                    } = a, c = this.uppy.getFile(o.id);
                    this.uppy.setFileState(o.id, {
                        s3Multipart: { ...c.s3Multipart,
                            key: l,
                            uploadId: h
                        }
                    })
                }
            }), Object.defineProperty(this, bc, {
                writable: !0,
                value: async o => {
                    let a = o.remote.providerOptions.provider ? Y : le,
                        l = new a(this.uppy, o.remote.providerOptions),
                        h = { ...this.opts
                        };
                    if (o.tus && Object.assign(h, o.tus), o.remote.url == null) throw new Error("Cannot connect to an undefined URL");
                    return (await l.post(o.remote.url, { ...o.remote.body,
                        protocol: "s3-multipart",
                        size: o.data.size,
                        metadata: o.meta
                    })).token
                }
            }), Object.defineProperty(this, Mn, {
                writable: !0,
                value: () => {
                    $(this, Me)[Me].setCompanionHeaders(this.opts.companionHeaders)
                }
            }), this.type = "uploader", this.id = this.opts.id || "AwsS3Multipart", this.title = "AWS S3 Multipart", $(this, Me)[Me] = new le(e, t);
            let s = {
                allowedMetaFields: null,
                limit: 6,
                retryDelays: [0, 1e3, 3e3, 5e3],
                createMultipartUpload: this.createMultipartUpload.bind(this),
                listParts: this.listParts.bind(this),
                abortMultipartUpload: this.abortMultipartUpload.bind(this),
                completeMultipartUpload: this.completeMultipartUpload.bind(this),
                signPart: this.signPart.bind(this),
                uploadPartBytes: Yi.uploadPartBytes,
                companionHeaders: {}
            };
            this.opts = { ...s,
                ...t
            }, t ?.prepareUploadParts != null && t.signPart == null && (this.opts.signPart = async (o, a) => {
                let {
                    uploadId: l,
                    key: h,
                    partNumber: c,
                    body: d,
                    signal: f
                } = a, {
                    presignedUrls: y,
                    headers: w
                } = await t.prepareUploadParts(o, {
                    uploadId: l,
                    key: h,
                    parts: [{
                        number: c,
                        chunk: d
                    }],
                    signal: f
                });
                return {
                    url: y ?.[c],
                    headers: w ?.[c]
                }
            }), this.upload = this.upload.bind(this), this.requests = (r = this.opts.rateLimitedQueue) != null ? r : new Je(this.opts.limit), $(this, ps)[ps] = new El(this.requests, this.opts, $(this, vc)[vc]), this.uploaders = Object.create(null), this.uploaderEvents = Object.create(null), this.uploaderSockets = Object.create(null), $(this, Ln)[Ln] = this.requests.wrapPromiseFunction($(this, bc)[bc], {
                priority: -1
            })
        }[_g]() {
            return $(this, Me)[Me]
        }
        setOptions(e) {
            return $(this, ps)[ps].setOptions(e), super.setOptions(e)
        }
        resetUploaderReferences(e, t) {
            t === void 0 && (t = {}), this.uploaders[e] && (this.uploaders[e].abort({
                really: t.abort || !1
            }), this.uploaders[e] = null), this.uploaderEvents[e] && (this.uploaderEvents[e].remove(), this.uploaderEvents[e] = null), this.uploaderSockets[e] && (this.uploaderSockets[e].close(), this.uploaderSockets[e] = null)
        }
        assertHost(e) {
            if (!this.opts.companionUrl) throw new Error(`Expected a \`companionUrl\` option containing a Companion address, or if you are not using Companion, a custom \`${e}\` implementation.`)
        }
        createMultipartUpload(e, t) {
            var r;
            this.assertHost("createMultipartUpload"), tt(t);
            let s = e.meta ? Object.fromEntries(((r = this.opts.allowedMetaFields) != null ? r : Object.keys(e.meta)).filter(o => e.meta[o] != null).map(o => [o, String(e.meta[o])])) : {};
            return $(this, Me)[Me].post("s3/multipart", {
                filename: e.name,
                type: e.type,
                metadata: s
            }, {
                signal: t
            }).then(kn)
        }
        listParts(e, t, r) {
            let {
                key: s,
                uploadId: o
            } = t;
            this.assertHost("listParts"), tt(r);
            let a = encodeURIComponent(s);
            return $(this, Me)[Me].get(`s3/multipart/${o}?key=${a}`, {
                signal: r
            }).then(kn)
        }
        completeMultipartUpload(e, t, r) {
            let {
                key: s,
                uploadId: o,
                parts: a
            } = t;
            this.assertHost("completeMultipartUpload"), tt(r);
            let l = encodeURIComponent(s),
                h = encodeURIComponent(o);
            return $(this, Me)[Me].post(`s3/multipart/${h}/complete?key=${l}`, {
                parts: a
            }, {
                signal: r
            }).then(kn)
        }
        signPart(e, t) {
            let {
                uploadId: r,
                key: s,
                partNumber: o,
                signal: a
            } = t;
            if (this.assertHost("signPart"), tt(a), r == null || s == null || o == null) throw new Error("Cannot sign without a key, an uploadId, and a partNumber");
            let l = encodeURIComponent(s);
            return $(this, Me)[Me].get(`s3/multipart/${r}/${o}?key=${l}`, {
                signal: a
            }).then(kn)
        }
        abortMultipartUpload(e, t, r) {
            let {
                key: s,
                uploadId: o
            } = t;
            this.assertHost("abortMultipartUpload");
            let a = encodeURIComponent(s),
                l = encodeURIComponent(o);
            return $(this, Me)[Me].delete(`s3/multipart/${l}?key=${a}`, void 0, {
                signal: r
            }).then(kn)
        }
        static async uploadPartBytes(e, t, r) {
            let {
                url: s,
                expires: o,
                headers: a
            } = e;
            if (tt(r), s == null) throw new Error("Cannot upload to an undefined URL");
            return new Promise((l, h) => {
                let c = new XMLHttpRequest;
                c.open("PUT", s, !0), a && Object.keys(a).forEach(y => {
                    c.setRequestHeader(y, a[y])
                }), c.responseType = "text", typeof o == "number" && (c.timeout = o * 1e3);

                function d() {
                    c.abort()
                }
                n(d, "onabort");

                function f() {
                    r.removeEventListener("abort", d)
                }
                n(f, "cleanup"), r.addEventListener("abort", d), c.upload.addEventListener("progress", t.onProgress), c.addEventListener("abort", () => {
                    f(), h(cc())
                }), c.addEventListener("timeout", () => {
                    f();
                    let y = new Error("Request has expired");
                    y.source = {
                        status: 403
                    }, h(y)
                }), c.addEventListener("load", y => {
                    if (f(), y.target.status === 403 && y.target.responseText.includes("<Message>Request has expired</Message>")) {
                        let S = new Error("Request has expired");
                        S.source = y.target, h(S);
                        return
                    }
                    if (y.target.status < 200 || y.target.status >= 300) {
                        let S = new Error("Non 2xx");
                        S.source = y.target, h(S);
                        return
                    }
                    t.onProgress == null || t.onProgress(t.size);
                    let w = y.target.getResponseHeader("ETag");
                    if (w === null) {
                        h(new Error("AwsS3/Multipart: Could not read the ETag header. This likely means CORS is not configured correctly on the S3 Bucket. See https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions."));
                        return
                    }
                    t.onComplete == null || t.onComplete(w), l({
                        ETag: w
                    })
                }), c.addEventListener("error", y => {
                    f();
                    let w = new Error("Unknown error");
                    w.source = y.target, h(w)
                }), c.send(t)
            })
        }
        uploadFile(e) {
            var t = this;
            return new Promise((r, s) => {
                let o = n((d, f) => {
                        this.uppy.emit("upload-progress", e, {
                            uploader: this,
                            bytesUploaded: d,
                            bytesTotal: f
                        })
                    }, "onProgress"),
                    a = n(d => {
                        this.uppy.log(d), this.uppy.emit("upload-error", e, d), this.resetUploaderReferences(e.id), s(d)
                    }, "onError"),
                    l = n(d => {
                        let f = c,
                            y = {
                                body: { ...d
                                },
                                uploadURL: d.location
                            };
                        this.resetUploaderReferences(e.id);
                        let w = this.uppy.getFile(e.id);
                        this.uppy.emit("upload-success", w || e, y), d.location && this.uppy.log(`Download ${e.name} from ${d.location}`), r(f)
                    }, "onSuccess"),
                    h = n(d => {
                        let f = this.uppy.getFile(e.id);
                        !f || this.uppy.emit("s3-multipart:part-uploaded", f, d)
                    }, "onPartComplete"),
                    c = new Sg(e.data, {
                        companionComm: $(this, ps)[ps],
                        log: function() {
                            return t.uppy.log(...arguments)
                        },
                        getChunkSize: this.opts.getChunkSize ? this.opts.getChunkSize.bind(this) : null,
                        onProgress: o,
                        onError: a,
                        onSuccess: l,
                        onPartComplete: h,
                        file: e,
                        ...e.s3Multipart
                    });
                this.uploaders[e.id] = c, this.uploaderEvents[e.id] = new $e(this.uppy), this.onFileRemove(e.id, d => {
                    c.abort(), this.resetUploaderReferences(e.id, {
                        abort: !0
                    }), r(`upload ${d.id} was removed`)
                }), this.onCancelAll(e.id, function(d) {
                    let {
                        reason: f
                    } = d === void 0 ? {} : d;
                    f === "user" && (c.abort(), t.resetUploaderReferences(e.id, {
                        abort: !0
                    })), r(`upload ${e.id} was canceled`)
                }), this.onFilePause(e.id, d => {
                    d ? c.pause() : c.start()
                }), this.onPauseAll(e.id, () => {
                    c.pause()
                }), this.onResumeAll(e.id, () => {
                    c.start()
                }), (!e.progress.uploadStarted || !e.isRestored) && (c.start(), this.uppy.emit("upload-started", e))
            })
        }
        async uploadRemote(e) {
            this.resetUploaderReferences(e.id), (!e.progress.uploadStarted || !e.isRestored) && this.uppy.emit("upload-started", e);
            try {
                if (e.serverToken) return this.connectToServerSocket(e);
                let t = await $(this, Ln)[Ln](e);
                return this.uppy.setFileState(e.id, {
                    serverToken: t
                }), this.connectToServerSocket(this.uppy.getFile(e.id))
            } catch (t) {
                throw this.uppy.emit("upload-error", e, t), t
            }
        }
        async connectToServerSocket(e) {
            var t = this;
            return new Promise((r, s) => {
                let o, a = e.serverToken,
                    l = Wi(e.remote.companionUrl),
                    h = new ot({
                        target: `${l}/api/${a}`
                    });
                this.uploaderSockets[e.id] = h, this.uploaderEvents[e.id] = new $e(this.uppy), this.onFileRemove(e.id, () => {
                    o.abort(), h.send("cancel", {}), this.resetUploaderReferences(e.id, {
                        abort: !0
                    }), r(`upload ${e.id} was removed`)
                }), this.onFilePause(e.id, c => {
                    c ? (o.abort(), h.send("pause", {})) : (o.abort(), o = this.requests.run(() => (h.send("resume", {}), () => {})))
                }), this.onPauseAll(e.id, () => {
                    o.abort(), h.send("pause", {})
                }), this.onCancelAll(e.id, function(c) {
                    let {
                        reason: d
                    } = c === void 0 ? {} : c;
                    d === "user" && (o.abort(), h.send("cancel", {}), t.resetUploaderReferences(e.id)), r(`upload ${e.id} was canceled`)
                }), this.onResumeAll(e.id, () => {
                    o.abort(), e.error && h.send("pause", {}), o = this.requests.run(() => {
                        h.send("resume", {})
                    })
                }), this.onRetry(e.id, () => {
                    h.isOpen && (h.send("pause", {}), h.send("resume", {}))
                }), this.onRetryAll(e.id, () => {
                    h.isOpen && (h.send("pause", {}), h.send("resume", {}))
                }), h.on("progress", c => Sr(this, c, e)), h.on("error", c => {
                    this.uppy.emit("upload-error", e, new Error(c.error)), this.resetUploaderReferences(e.id), o.done(), s(new Error(c.error))
                }), h.on("success", c => {
                    let d = {
                        uploadURL: c.url
                    };
                    this.uppy.emit("upload-success", e, d), this.resetUploaderReferences(e.id), o.done(), r()
                }), o = this.requests.run(() => (e.isPaused && h.send("pause", {}), () => {}))
            })
        }
        async upload(e) {
            if (e.length === 0) return;
            let t = e.map(r => {
                let s = this.uppy.getFile(r);
                return s.isRemote ? this.uploadRemote(s) : this.uploadFile(s)
            });
            return Promise.all(t)
        }
        onFileRemove(e, t) {
            this.uploaderEvents[e].on("file-removed", r => {
                e === r.id && t(r.id)
            })
        }
        onFilePause(e, t) {
            this.uploaderEvents[e].on("upload-pause", (r, s) => {
                e === r && t(s)
            })
        }
        onRetry(e, t) {
            this.uploaderEvents[e].on("upload-retry", r => {
                e === r && t()
            })
        }
        onRetryAll(e, t) {
            this.uploaderEvents[e].on("retry-all", () => {
                !this.uppy.getFile(e) || t()
            })
        }
        onPauseAll(e, t) {
            this.uploaderEvents[e].on("pause-all", () => {
                !this.uppy.getFile(e) || t()
            })
        }
        onCancelAll(e, t) {
            var r = this;
            this.uploaderEvents[e].on("cancel-all", function() {
                !r.uppy.getFile(e) || t(...arguments)
            })
        }
        onResumeAll(e, t) {
            this.uploaderEvents[e].on("resume-all", () => {
                !this.uppy.getFile(e) || t()
            })
        }
        install() {
            let {
                capabilities: e
            } = this.uppy.getState();
            this.uppy.setState({
                capabilities: { ...e,
                    resumableUploads: !0
                }
            }), this.uppy.addPreProcessor($(this, Mn)[Mn]), this.uppy.addUploader(this.upload)
        }
        uninstall() {
            let {
                capabilities: e
            } = this.uppy.getState();
            this.uppy.setState({
                capabilities: { ...e,
                    resumableUploads: !1
                }
            }), this.uppy.removePreProcessor($(this, Mn)[Mn]), this.uppy.removeUploader(this.upload)
        }
    };
    n(Yi, "AwsS3Multipart");
    Yi.VERSION = SS.version;
    var Rg = "3.7.2",
        PS = Rg,
        xS = typeof atob == "function",
        FS = typeof btoa == "function",
        so = typeof Buffer == "function",
        Pg = typeof TextDecoder == "function" ? new TextDecoder : void 0,
        xg = typeof TextEncoder == "function" ? new TextEncoder : void 0,
        ES = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        zn = Array.prototype.slice.call(ES),
        Ol = (i => {
            let e = {};
            return i.forEach((t, r) => e[t] = r), e
        })(zn),
        OS = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
        ze = String.fromCharCode.bind(String),
        Fg = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : (i, e = t => t) => new Uint8Array(Array.prototype.slice.call(i, 0).map(e)),
        Cg = n(i => i.replace(/=/g, "").replace(/[+\/]/g, e => e == "+" ? "-" : "_"), "_mkUriSafe"),
        Tg = n(i => i.replace(/[^A-Za-z0-9\+\/]/g, ""), "_tidyB64"),
        kg = n(i => {
            let e, t, r, s, o = "",
                a = i.length % 3;
            for (let l = 0; l < i.length;) {
                if ((t = i.charCodeAt(l++)) > 255 || (r = i.charCodeAt(l++)) > 255 || (s = i.charCodeAt(l++)) > 255) throw new TypeError("invalid character found");
                e = t << 16 | r << 8 | s, o += zn[e >> 18 & 63] + zn[e >> 12 & 63] + zn[e >> 6 & 63] + zn[e & 63]
            }
            return a ? o.slice(0, a - 3) + "===".substring(a) : o
        }, "btoaPolyfill"),
        _c = FS ? i => btoa(i) : so ? i => Buffer.from(i, "binary").toString("base64") : kg,
        wc = so ? i => Buffer.from(i).toString("base64") : i => {
            let t = [];
            for (let r = 0, s = i.length; r < s; r += 4096) t.push(ze.apply(null, i.subarray(r, r + 4096)));
            return _c(t.join(""))
        },
        Rl = n((i, e = !1) => e ? Cg(wc(i)) : wc(i), "fromUint8Array"),
        RS = n(i => {
            if (i.length < 2) {
                var e = i.charCodeAt(0);
                return e < 128 ? i : e < 2048 ? ze(192 | e >>> 6) + ze(128 | e & 63) : ze(224 | e >>> 12 & 15) + ze(128 | e >>> 6 & 63) + ze(128 | e & 63)
            } else {
                var e = 65536 + (i.charCodeAt(0) - 55296) * 1024 + (i.charCodeAt(1) - 56320);
                return ze(240 | e >>> 18 & 7) + ze(128 | e >>> 12 & 63) + ze(128 | e >>> 6 & 63) + ze(128 | e & 63)
            }
        }, "cb_utob"),
        CS = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
        Ag = n(i => i.replace(CS, RS), "utob"),
        Eg = so ? i => Buffer.from(i, "utf8").toString("base64") : xg ? i => wc(xg.encode(i)) : i => _c(Ag(i)),
        ro = n((i, e = !1) => e ? Cg(Eg(i)) : Eg(i), "encode"),
        Og = n(i => ro(i, !0), "encodeURI"),
        TS = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
        kS = n(i => {
            switch (i.length) {
                case 4:
                    var e = (7 & i.charCodeAt(0)) << 18 | (63 & i.charCodeAt(1)) << 12 | (63 & i.charCodeAt(2)) << 6 | 63 & i.charCodeAt(3),
                        t = e - 65536;
                    return ze((t >>> 10) + 55296) + ze((t & 1023) + 56320);
                case 3:
                    return ze((15 & i.charCodeAt(0)) << 12 | (63 & i.charCodeAt(1)) << 6 | 63 & i.charCodeAt(2));
                default:
                    return ze((31 & i.charCodeAt(0)) << 6 | 63 & i.charCodeAt(1))
            }
        }, "cb_btou"),
        Ug = n(i => i.replace(TS, kS), "btou"),
        Dg = n(i => {
            if (i = i.replace(/\s+/g, ""), !OS.test(i)) throw new TypeError("malformed base64.");
            i += "==".slice(2 - (i.length & 3));
            let e, t = "",
                r, s;
            for (let o = 0; o < i.length;) e = Ol[i.charAt(o++)] << 18 | Ol[i.charAt(o++)] << 12 | (r = Ol[i.charAt(o++)]) << 6 | (s = Ol[i.charAt(o++)]), t += r === 64 ? ze(e >> 16 & 255) : s === 64 ? ze(e >> 16 & 255, e >> 8 & 255) : ze(e >> 16 & 255, e >> 8 & 255, e & 255);
            return t
        }, "atobPolyfill"),
        Pc = xS ? i => atob(Tg(i)) : so ? i => Buffer.from(i, "base64").toString("binary") : Dg,
        Ng = so ? i => Fg(Buffer.from(i, "base64")) : i => Fg(Pc(i), e => e.charCodeAt(0)),
        Bg = n(i => Ng(Ig(i)), "toUint8Array"),
        AS = so ? i => Buffer.from(i, "base64").toString("utf8") : Pg ? i => Pg.decode(Ng(i)) : i => Ug(Pc(i)),
        Ig = n(i => Tg(i.replace(/[-_]/g, e => e == "-" ? "+" : "/")), "_unURI"),
        Sc = n(i => AS(Ig(i)), "decode"),
        US = n(i => {
            if (typeof i != "string") return !1;
            let e = i.replace(/\s+/g, "").replace(/={0,2}$/, "");
            return !/[^\s0-9a-zA-Z\+/]/.test(e) || !/[^\s0-9a-zA-Z\-_]/.test(e)
        }, "isValid"),
        Lg = n(i => ({
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }), "_noEnum"),
        Mg = n(function() {
            let i = n((e, t) => Object.defineProperty(String.prototype, e, Lg(t)), "_add");
            i("fromBase64", function() {
                return Sc(this)
            }), i("toBase64", function(e) {
                return ro(this, e)
            }), i("toBase64URI", function() {
                return ro(this, !0)
            }), i("toBase64URL", function() {
                return ro(this, !0)
            }), i("toUint8Array", function() {
                return Bg(this)
            })
        }, "extendString"),
        zg = n(function() {
            let i = n((e, t) => Object.defineProperty(Uint8Array.prototype, e, Lg(t)), "_add");
            i("toBase64", function(e) {
                return Rl(this, e)
            }), i("toBase64URI", function() {
                return Rl(this, !0)
            }), i("toBase64URL", function() {
                return Rl(this, !0)
            })
        }, "extendUint8Array"),
        DS = n(() => {
            Mg(), zg()
        }, "extendBuiltins"),
        jg = {
            version: Rg,
            VERSION: PS,
            atob: Pc,
            atobPolyfill: Dg,
            btoa: _c,
            btoaPolyfill: kg,
            fromBase64: Sc,
            toBase64: ro,
            encode: ro,
            encodeURI: Og,
            encodeURL: Og,
            utob: Ag,
            btou: Ug,
            decode: Sc,
            isValid: US,
            fromUint8Array: Rl,
            toUint8Array: Bg,
            extendString: Mg,
            extendUint8Array: zg,
            extendBuiltins: DS
        };
    var dy = oe(ey());

    function Oc(i) {
        return Oc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, Oc(i)
    }
    n(Oc, "_typeof");

    function ty(i, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r)
        }
    }
    n(ty, "_defineProperties");

    function WS(i, e, t) {
        return e && ty(i.prototype, e), t && ty(i, t), Object.defineProperty(i, "prototype", {
            writable: !1
        }), i
    }
    n(WS, "_createClass");

    function KS(i, e) {
        if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    n(KS, "_classCallCheck");

    function GS(i, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
        i.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: i,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(i, "prototype", {
            writable: !1
        }), e && jn(i, e)
    }
    n(GS, "_inherits");

    function XS(i) {
        var e = iy();
        return n(function() {
            var r = Hn(i),
                s;
            if (e) {
                var o = Hn(this).constructor;
                s = Reflect.construct(r, arguments, o)
            } else s = r.apply(this, arguments);
            return YS(this, s)
        }, "_createSuperInternal")
    }
    n(XS, "_createSuper");

    function YS(i, e) {
        if (e && (Oc(e) === "object" || typeof e == "function")) return e;
        if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return JS(i)
    }
    n(YS, "_possibleConstructorReturn");

    function JS(i) {
        if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return i
    }
    n(JS, "_assertThisInitialized");

    function Rc(i) {
        var e = typeof Map == "function" ? new Map : void 0;
        return Rc = n(function(r) {
            if (r === null || !QS(r)) return r;
            if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
            if (typeof e < "u") {
                if (e.has(r)) return e.get(r);
                e.set(r, s)
            }

            function s() {
                return Tl(r, arguments, Hn(this).constructor)
            }
            return n(s, "Wrapper"), s.prototype = Object.create(r.prototype, {
                constructor: {
                    value: s,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), jn(s, r)
        }, "_wrapNativeSuper"), Rc(i)
    }
    n(Rc, "_wrapNativeSuper");

    function Tl(i, e, t) {
        return iy() ? Tl = Reflect.construct.bind() : Tl = n(function(s, o, a) {
            var l = [null];
            l.push.apply(l, o);
            var h = Function.bind.apply(s, l),
                c = new h;
            return a && jn(c, a.prototype), c
        }, "_construct"), Tl.apply(null, arguments)
    }
    n(Tl, "_construct");

    function iy() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }
    n(iy, "_isNativeReflectConstruct");

    function QS(i) {
        return Function.toString.call(i).indexOf("[native code]") !== -1
    }
    n(QS, "_isNativeFunction");

    function jn(i, e) {
        return jn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : n(function(r, s) {
            return r.__proto__ = s, r
        }, "_setPrototypeOf"), jn(i, e)
    }
    n(jn, "_setPrototypeOf");

    function Hn(i) {
        return Hn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : n(function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, "_getPrototypeOf"), Hn(i)
    }
    n(Hn, "_getPrototypeOf");
    var ZS = function(i) {
            GS(t, i);
            var e = XS(t);

            function t(r) {
                var s, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
                    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
                    l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                if (KS(this, t), s = e.call(this, r), s.originalRequest = a, s.originalResponse = l, s.causingError = o, o != null && (r += ", caused by ".concat(o.toString())), a != null) {
                    var h = a.getHeader("X-Request-ID") || "n/a",
                        c = a.getMethod(),
                        d = a.getURL(),
                        f = l ? l.getStatus() : "n/a",
                        y = l ? l.getBody() || "" : "n/a";
                    r += ", originated from request (method: ".concat(c, ", url: ").concat(d, ", response code: ").concat(f, ", response text: ").concat(y, ", request id: ").concat(h, ")")
                }
                return s.message = r, s
            }
            return n(t, "DetailedError"), WS(t)
        }(Rc(Error)),
        oo = ZS;
    var e_ = !1;

    function _r(i) {
        !e_ || console.log(i)
    }
    n(_r, "log");

    function Cc() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(i) {
            var e = Math.random() * 16 | 0,
                t = i === "x" ? e : e & 3 | 8;
            return t.toString(16)
        })
    }
    n(Cc, "uuid");

    function cy(i, e) {
        return s_(i) || r_(i, e) || i_(i, e) || t_()
    }
    n(cy, "_slicedToArray");

    function t_() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    n(t_, "_nonIterableRest");

    function i_(i, e) {
        if (!!i) {
            if (typeof i == "string") return ry(i, e);
            var t = Object.prototype.toString.call(i).slice(8, -1);
            if (t === "Object" && i.constructor && (t = i.constructor.name), t === "Map" || t === "Set") return Array.from(i);
            if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ry(i, e)
        }
    }
    n(i_, "_unsupportedIterableToArray");

    function ry(i, e) {
        (e == null || e > i.length) && (e = i.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = i[t];
        return r
    }
    n(ry, "_arrayLikeToArray");

    function r_(i, e) {
        var t = i == null ? null : typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
        if (t != null) {
            var r = [],
                s = !0,
                o = !1,
                a, l;
            try {
                for (t = t.call(i); !(s = (a = t.next()).done) && (r.push(a.value), !(e && r.length === e)); s = !0);
            } catch (h) {
                o = !0, l = h
            } finally {
                try {
                    !s && t.return != null && t.return()
                } finally {
                    if (o) throw l
                }
            }
            return r
        }
    }
    n(r_, "_iterableToArrayLimit");

    function s_(i) {
        if (Array.isArray(i)) return i
    }
    n(s_, "_arrayWithHoles");

    function sy(i, e) {
        var t = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(i);
            e && (r = r.filter(function(s) {
                return Object.getOwnPropertyDescriptor(i, s).enumerable
            })), t.push.apply(t, r)
        }
        return t
    }
    n(sy, "ownKeys");

    function no(i) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e] != null ? arguments[e] : {};
            e % 2 ? sy(Object(t), !0).forEach(function(r) {
                o_(i, r, t[r])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : sy(Object(t)).forEach(function(r) {
                Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r))
            })
        }
        return i
    }
    n(no, "_objectSpread");

    function o_(i, e, t) {
        return e in i ? Object.defineProperty(i, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[e] = t, i
    }
    n(o_, "_defineProperty");

    function n_(i, e) {
        if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    n(n_, "_classCallCheck");

    function oy(i, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r)
        }
    }
    n(oy, "_defineProperties");

    function a_(i, e, t) {
        return e && oy(i.prototype, e), t && oy(i, t), Object.defineProperty(i, "prototype", {
            writable: !1
        }), i
    }
    n(a_, "_createClass");
    var l_ = {
            endpoint: null,
            uploadUrl: null,
            metadata: {},
            fingerprint: null,
            uploadSize: null,
            onProgress: null,
            onChunkComplete: null,
            onSuccess: null,
            onError: null,
            _onUploadUrlAvailable: null,
            overridePatchMethod: !1,
            overrideDeleteMethod: !1,
            headers: {},
            addRequestId: !1,
            onBeforeRequest: null,
            onAfterResponse: null,
            onShouldRetry: null,
            chunkSize: 1 / 0,
            retryDelays: [0, 1e3, 3e3, 5e3],
            parallelUploads: 1,
            parallelUploadBoundaries: null,
            storeFingerprintForResuming: !0,
            removeFingerprintOnSuccess: !1,
            uploadLengthDeferred: !1,
            uploadDataDuringCreation: !1,
            urlStorage: null,
            fileReader: null,
            httpStack: null
        },
        py = function() {
            function i(e, t) {
                n_(this, i), "resume" in t && console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."), this.options = t, this.options.chunkSize = Number(this.options.chunkSize), this._urlStorage = this.options.urlStorage, this.file = e, this.url = null, this._req = null, this._fingerprint = null, this._urlStorageKey = null, this._offset = null, this._aborted = !1, this._size = null, this._source = null, this._retryAttempt = 0, this._retryTimeout = null, this._offsetBeforeRetry = 0, this._parallelUploads = null, this._parallelUploadUrls = null
            }
            return n(i, "BaseUpload"), a_(i, [{
                key: "findPreviousUploads",
                value: n(function() {
                    var t = this;
                    return this.options.fingerprint(this.file, this.options).then(function(r) {
                        return t._urlStorage.findUploadsByFingerprint(r)
                    })
                }, "findPreviousUploads")
            }, {
                key: "resumeFromPreviousUpload",
                value: n(function(t) {
                    this.url = t.uploadUrl || null, this._parallelUploadUrls = t.parallelUploadUrls || null, this._urlStorageKey = t.urlStorageKey
                }, "resumeFromPreviousUpload")
            }, {
                key: "start",
                value: n(function() {
                    var t = this,
                        r = this.file;
                    if (!r) {
                        this._emitError(new Error("tus: no file or stream to upload provided"));
                        return
                    }
                    if (!this.options.endpoint && !this.options.uploadUrl && !this.url) {
                        this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));
                        return
                    }
                    var s = this.options.retryDelays;
                    if (s != null && Object.prototype.toString.call(s) !== "[object Array]") {
                        this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));
                        return
                    }
                    if (this.options.parallelUploads > 1)
                        for (var o = 0, a = ["uploadUrl", "uploadSize", "uploadLengthDeferred"]; o < a.length; o++) {
                            var l = a[o];
                            if (this.options[l]) {
                                this._emitError(new Error("tus: cannot use the ".concat(l, " option when parallelUploads is enabled")));
                                return
                            }
                        }
                    if (this.options.parallelUploadBoundaries) {
                        if (this.options.parallelUploads <= 1) {
                            this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));
                            return
                        }
                        if (this.options.parallelUploads !== this.options.parallelUploadBoundaries.length) {
                            this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));
                            return
                        }
                    }
                    this.options.fingerprint(r, this.options).then(function(h) {
                        return h == null ? _r("No fingerprint was calculated meaning that the upload cannot be stored in the URL storage.") : _r("Calculated fingerprint: ".concat(h)), t._fingerprint = h, t._source ? t._source : t.options.fileReader.openFile(r, t.options.chunkSize)
                    }).then(function(h) {
                        if (t._source = h, t.options.uploadLengthDeferred) t._size = null;
                        else if (t.options.uploadSize != null) {
                            if (t._size = Number(t.options.uploadSize), Number.isNaN(t._size)) {
                                t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));
                                return
                            }
                        } else if (t._size = t._source.size, t._size == null) {
                            t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));
                            return
                        }
                        t.options.parallelUploads > 1 || t._parallelUploadUrls != null ? t._startParallelUpload() : t._startSingleUpload()
                    }).catch(function(h) {
                        t._emitError(h)
                    })
                }, "start")
            }, {
                key: "_startParallelUpload",
                value: n(function() {
                    var t, r = this,
                        s = this._size,
                        o = 0;
                    this._parallelUploads = [];
                    var a = this._parallelUploadUrls != null ? this._parallelUploadUrls.length : this.options.parallelUploads,
                        l = (t = this.options.parallelUploadBoundaries) !== null && t !== void 0 ? t : h_(this._source.size, a);
                    this._parallelUploadUrls && l.forEach(function(d, f) {
                        d.uploadUrl = r._parallelUploadUrls[f] || null
                    }), this._parallelUploadUrls = new Array(l.length);
                    var h = l.map(function(d, f) {
                            var y = 0;
                            return r._source.slice(d.start, d.end).then(function(w) {
                                var S = w.value;
                                return new Promise(function(R, x) {
                                    var F = no(no({}, r.options), {}, {
                                            uploadUrl: d.uploadUrl || null,
                                            storeFingerprintForResuming: !1,
                                            removeFingerprintOnSuccess: !1,
                                            parallelUploads: 1,
                                            parallelUploadBoundaries: null,
                                            metadata: {},
                                            headers: no(no({}, r.options.headers), {}, {
                                                "Upload-Concat": "partial"
                                            }),
                                            onSuccess: R,
                                            onError: x,
                                            onProgress: n(function(q) {
                                                o = o - y + q, y = q, r._emitProgress(o, s)
                                            }, "onProgress"),
                                            _onUploadUrlAvailable: n(function() {
                                                r._parallelUploadUrls[f] = N.url, r._parallelUploadUrls.filter(function(q) {
                                                    return Boolean(q)
                                                }).length === l.length && r._saveUploadInUrlStorage()
                                            }, "_onUploadUrlAvailable")
                                        }),
                                        N = new i(S, F);
                                    N.start(), r._parallelUploads.push(N)
                                })
                            })
                        }),
                        c;
                    Promise.all(h).then(function() {
                        c = r._openRequest("POST", r.options.endpoint), c.setHeader("Upload-Concat", "final;".concat(r._parallelUploadUrls.join(" ")));
                        var d = ny(r.options.metadata);
                        return d !== "" && c.setHeader("Upload-Metadata", d), r._sendRequest(c, null)
                    }).then(function(d) {
                        if (!ao(d.getStatus(), 200)) {
                            r._emitHttpError(c, d, "tus: unexpected response while creating upload");
                            return
                        }
                        var f = d.getHeader("Location");
                        if (f == null) {
                            r._emitHttpError(c, d, "tus: invalid or missing Location header");
                            return
                        }
                        r.url = hy(r.options.endpoint, f), _r("Created upload at ".concat(r.url)), r._emitSuccess()
                    }).catch(function(d) {
                        r._emitError(d)
                    })
                }, "_startParallelUpload")
            }, {
                key: "_startSingleUpload",
                value: n(function() {
                    if (this._aborted = !1, this.url != null) {
                        _r("Resuming upload from previous URL: ".concat(this.url)), this._resumeUpload();
                        return
                    }
                    if (this.options.uploadUrl != null) {
                        _r("Resuming upload from provided URL: ".concat(this.options.uploadUrl)), this.url = this.options.uploadUrl, this._resumeUpload();
                        return
                    }
                    _r("Creating a new upload"), this._createUpload()
                }, "_startSingleUpload")
            }, {
                key: "abort",
                value: n(function(t) {
                    var r = this;
                    return this._parallelUploads != null && this._parallelUploads.forEach(function(s) {
                        s.abort(t)
                    }), this._req !== null && this._req.abort(), this._aborted = !0, this._retryTimeout != null && (clearTimeout(this._retryTimeout), this._retryTimeout = null), !t || this.url == null ? Promise.resolve() : i.terminate(this.url, this.options).then(function() {
                        return r._removeFromUrlStorage()
                    })
                }, "abort")
            }, {
                key: "_emitHttpError",
                value: n(function(t, r, s, o) {
                    this._emitError(new oo(s, o, t, r))
                }, "_emitHttpError")
            }, {
                key: "_emitError",
                value: n(function(t) {
                    var r = this;
                    if (!this._aborted) {
                        if (this.options.retryDelays != null) {
                            var s = this._offset != null && this._offset > this._offsetBeforeRetry;
                            if (s && (this._retryAttempt = 0), uy(t, this._retryAttempt, this.options)) {
                                var o = this.options.retryDelays[this._retryAttempt++];
                                this._offsetBeforeRetry = this._offset, this._retryTimeout = setTimeout(function() {
                                    r.start()
                                }, o);
                                return
                            }
                        }
                        if (typeof this.options.onError == "function") this.options.onError(t);
                        else throw t
                    }
                }, "_emitError")
            }, {
                key: "_emitSuccess",
                value: n(function() {
                    this.options.removeFingerprintOnSuccess && this._removeFromUrlStorage(), typeof this.options.onSuccess == "function" && this.options.onSuccess()
                }, "_emitSuccess")
            }, {
                key: "_emitProgress",
                value: n(function(t, r) {
                    typeof this.options.onProgress == "function" && this.options.onProgress(t, r)
                }, "_emitProgress")
            }, {
                key: "_emitChunkComplete",
                value: n(function(t, r, s) {
                    typeof this.options.onChunkComplete == "function" && this.options.onChunkComplete(t, r, s)
                }, "_emitChunkComplete")
            }, {
                key: "_createUpload",
                value: n(function() {
                    var t = this;
                    if (!this.options.endpoint) {
                        this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));
                        return
                    }
                    var r = this._openRequest("POST", this.options.endpoint);
                    this.options.uploadLengthDeferred ? r.setHeader("Upload-Defer-Length", 1) : r.setHeader("Upload-Length", this._size);
                    var s = ny(this.options.metadata);
                    s !== "" && r.setHeader("Upload-Metadata", s);
                    var o;
                    this.options.uploadDataDuringCreation && !this.options.uploadLengthDeferred ? (this._offset = 0, o = this._addChunkToRequest(r)) : o = this._sendRequest(r, null), o.then(function(a) {
                        if (!ao(a.getStatus(), 200)) {
                            t._emitHttpError(r, a, "tus: unexpected response while creating upload");
                            return
                        }
                        var l = a.getHeader("Location");
                        if (l == null) {
                            t._emitHttpError(r, a, "tus: invalid or missing Location header");
                            return
                        }
                        if (t.url = hy(t.options.endpoint, l), _r("Created upload at ".concat(t.url)), typeof t.options._onUploadUrlAvailable == "function" && t.options._onUploadUrlAvailable(), t._size === 0) {
                            t._emitSuccess(), t._source.close();
                            return
                        }
                        t._saveUploadInUrlStorage().then(function() {
                            t.options.uploadDataDuringCreation ? t._handleUploadResponse(r, a) : (t._offset = 0, t._performUpload())
                        })
                    }).catch(function(a) {
                        t._emitHttpError(r, null, "tus: failed to create upload", a)
                    })
                }, "_createUpload")
            }, {
                key: "_resumeUpload",
                value: n(function() {
                    var t = this,
                        r = this._openRequest("HEAD", this.url),
                        s = this._sendRequest(r, null);
                    s.then(function(o) {
                        var a = o.getStatus();
                        if (!ao(a, 200)) {
                            if (a === 423) {
                                t._emitHttpError(r, o, "tus: upload is currently locked; retry later");
                                return
                            }
                            if (ao(a, 400) && t._removeFromUrlStorage(), !t.options.endpoint) {
                                t._emitHttpError(r, o, "tus: unable to resume upload (new upload cannot be created without an endpoint)");
                                return
                            }
                            t.url = null, t._createUpload();
                            return
                        }
                        var l = parseInt(o.getHeader("Upload-Offset"), 10);
                        if (Number.isNaN(l)) {
                            t._emitHttpError(r, o, "tus: invalid or missing offset value");
                            return
                        }
                        var h = parseInt(o.getHeader("Upload-Length"), 10);
                        if (Number.isNaN(h) && !t.options.uploadLengthDeferred) {
                            t._emitHttpError(r, o, "tus: invalid or missing length value");
                            return
                        }
                        typeof t.options._onUploadUrlAvailable == "function" && t.options._onUploadUrlAvailable(), t._saveUploadInUrlStorage().then(function() {
                            if (l === h) {
                                t._emitProgress(h, h), t._emitSuccess();
                                return
                            }
                            t._offset = l, t._performUpload()
                        })
                    }).catch(function(o) {
                        t._emitHttpError(r, null, "tus: failed to resume upload", o)
                    })
                }, "_resumeUpload")
            }, {
                key: "_performUpload",
                value: n(function() {
                    var t = this;
                    if (!this._aborted) {
                        var r;
                        this.options.overridePatchMethod ? (r = this._openRequest("POST", this.url), r.setHeader("X-HTTP-Method-Override", "PATCH")) : r = this._openRequest("PATCH", this.url), r.setHeader("Upload-Offset", this._offset);
                        var s = this._addChunkToRequest(r);
                        s.then(function(o) {
                            if (!ao(o.getStatus(), 200)) {
                                t._emitHttpError(r, o, "tus: unexpected response while uploading chunk");
                                return
                            }
                            t._handleUploadResponse(r, o)
                        }).catch(function(o) {
                            t._aborted || t._emitHttpError(r, null, "tus: failed to upload chunk at offset ".concat(t._offset), o)
                        })
                    }
                }, "_performUpload")
            }, {
                key: "_addChunkToRequest",
                value: n(function(t) {
                    var r = this,
                        s = this._offset,
                        o = this._offset + this.options.chunkSize;
                    return t.setProgressHandler(function(a) {
                        r._emitProgress(s + a, r._size)
                    }), t.setHeader("Content-Type", "application/offset+octet-stream"), (o === 1 / 0 || o > this._size) && !this.options.uploadLengthDeferred && (o = this._size), this._source.slice(s, o).then(function(a) {
                        var l = a.value,
                            h = a.done;
                        return r.options.uploadLengthDeferred && h && (r._size = r._offset + (l && l.size ? l.size : 0), t.setHeader("Upload-Length", r._size)), l === null ? r._sendRequest(t) : (r._emitProgress(r._offset, r._size), r._sendRequest(t, l))
                    })
                }, "_addChunkToRequest")
            }, {
                key: "_handleUploadResponse",
                value: n(function(t, r) {
                    var s = parseInt(r.getHeader("Upload-Offset"), 10);
                    if (Number.isNaN(s)) {
                        this._emitHttpError(t, r, "tus: invalid or missing offset value");
                        return
                    }
                    if (this._emitProgress(s, this._size), this._emitChunkComplete(s - this._offset, s, this._size), this._offset = s, s === this._size) {
                        this._emitSuccess(), this._source.close();
                        return
                    }
                    this._performUpload()
                }, "_handleUploadResponse")
            }, {
                key: "_openRequest",
                value: n(function(t, r) {
                    var s = openRequest(t, r, this.options);
                    return this._req = s, s
                }, "_openRequest")
            }, {
                key: "_removeFromUrlStorage",
                value: n(function() {
                    var t = this;
                    !this._urlStorageKey || (this._urlStorage.removeUpload(this._urlStorageKey).catch(function(r) {
                        t._emitError(r)
                    }), this._urlStorageKey = null)
                }, "_removeFromUrlStorage")
            }, {
                key: "_saveUploadInUrlStorage",
                value: n(function() {
                    var t = this;
                    if (!this.options.storeFingerprintForResuming || !this._fingerprint || this._urlStorageKey !== null) return Promise.resolve();
                    var r = {
                        size: this._size,
                        metadata: this.options.metadata,
                        creationTime: new Date().toString()
                    };
                    return this._parallelUploads ? r.parallelUploadUrls = this._parallelUploadUrls : r.uploadUrl = this.url, this._urlStorage.addUpload(this._fingerprint, r).then(function(s) {
                        t._urlStorageKey = s
                    })
                }, "_saveUploadInUrlStorage")
            }, {
                key: "_sendRequest",
                value: n(function(t) {
                    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                    return ly(t, r, this.options)
                }, "_sendRequest")
            }], [{
                key: "terminate",
                value: n(function(t) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    var req;
                    if (options.overrideDeleteMethod) {
                        req = openRequest("POST", t, options);
                        req.setHeader("X-HTTP-Method-Override", "DELETE");
                    } else {
                        req = openRequest("DELETE", t, options);
                    }

                    return ly(req, null, options).then(function(o) {
                        if (o.getStatus() !== 204) throw new oo("tus: unexpected response while terminating upload", null, req, o)
                    }).catch(function(o) {
                        if (o instanceof oo || (o = new oo("tus: failed to terminate upload", o, req, null)), !uy(o, 0, options)) throw o;
                        var a = options.retryDelays[0],
                            l = options.retryDelays.slice(1),
                            h = no(no({}, options), {}, {
                                retryDelays: l
                            });
                        return new Promise(function(c) {
                            return setTimeout(c, a)
                        }).then(function() {
                            return i.terminate(t, h)
                        })
                    })
                }, "terminate")
            }]), i
        }();

    function ny(i) {
        return Object.entries(i).map(function(e) {
            var t = cy(e, 2),
                r = t[0],
                s = t[1];
            return "".concat(r, " ").concat(jg.encode(String(s)))
        }).join(",")
    }
    n(ny, "encodeMetadata");

    function ao(i, e) {
        return i >= e && i < e + 100
    }
    n(ao, "inStatusCategory");

    function openRequest(i, e, t) {
        var r = t.httpStack.createRequest(i, e);
        r.setHeader("Tus-Resumable", "1.0.0");
        var s = t.headers || {};
        if (Object.entries(s).forEach(function(a) {
            var l = cy(a, 2),
                h = l[0],
                c = l[1];
            r.setHeader(h, c)
        }), t.addRequestId) {
            var o = Cc();
            r.setHeader("X-Request-ID", o)
        }
        return r
    }
    n(openRequest, "openRequest");

    function ly(i, e, t) {
        var r = typeof t.onBeforeRequest == "function" ? Promise.resolve(t.onBeforeRequest(i)) : Promise.resolve();
        return r.then(function() {
            return i.send(e).then(function(s) {
                var o = typeof t.onAfterResponse == "function" ? Promise.resolve(t.onAfterResponse(i, s)) : Promise.resolve();
                return o.then(function() {
                    return s
                })
            })
        })
    }
    n(ly, "sendRequest");

    function u_() {
        var i = !0;
        return typeof window < "u" && "navigator" in window && window.navigator.onLine === !1 && (i = !1), i
    }
    n(u_, "isOnline");

    function uy(i, e, t) {
        if (t.retryDelays == null || e >= t.retryDelays.length || i.originalRequest == null) return !1;
        if (t && typeof t.onShouldRetry == "function") return t.onShouldRetry(i, e, t);
        var r = i.originalResponse ? i.originalResponse.getStatus() : 0;
        return (!ao(r, 400) || r === 409 || r === 423) && u_()
    }
    n(uy, "shouldRetry");

    function hy(i, e) {
        return new dy.default(e, i).toString()
    }
    n(hy, "resolveUrl");

    function h_(i, e) {
        for (var t = Math.floor(i / e), r = [], s = 0; s < e; s++) r.push({
            start: t * s,
            end: t * (s + 1)
        });
        return r[e - 1].end = i, r
    }
    n(h_, "splitSizeIntoParts");
    py.defaultOptions = l_;
    var kl = py;

    function c_(i, e) {
        if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    n(c_, "_classCallCheck");

    function fy(i, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r)
        }
    }
    n(fy, "_defineProperties");

    function d_(i, e, t) {
        return e && fy(i.prototype, e), t && fy(i, t), Object.defineProperty(i, "prototype", {
            writable: !1
        }), i
    }
    n(d_, "_createClass");
    var my = function() {
        function i() {
            c_(this, i)
        }
        return n(i, "NoopUrlStorage"), d_(i, [{
            key: "listAllUploads",
            value: n(function() {
                return Promise.resolve([])
            }, "listAllUploads")
        }, {
            key: "findUploadsByFingerprint",
            value: n(function(t) {
                return Promise.resolve([])
            }, "findUploadsByFingerprint")
        }, {
            key: "removeUpload",
            value: n(function(t) {
                return Promise.resolve()
            }, "removeUpload")
        }, {
            key: "addUpload",
            value: n(function(t, r) {
                return Promise.resolve(null)
            }, "addUpload")
        }]), i
    }();

    function p_(i, e) {
        if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    n(p_, "_classCallCheck");

    function gy(i, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r)
        }
    }
    n(gy, "_defineProperties");

    function f_(i, e, t) {
        return e && gy(i.prototype, e), t && gy(i, t), Object.defineProperty(i, "prototype", {
            writable: !1
        }), i
    }
    n(f_, "_createClass");
    var kc = !1;
    try {
        kc = "localStorage" in window, Tc = "tusSupport", localStorage.setItem(Tc, localStorage.getItem(Tc))
    } catch (i) {
        if (i.code === i.SECURITY_ERR || i.code === i.QUOTA_EXCEEDED_ERR) kc = !1;
        else throw i
    }
    var Tc, yy = kc,
        vy = function() {
            function i() {
                p_(this, i)
            }
            return n(i, "WebStorageUrlStorage"), f_(i, [{
                key: "findAllUploads",
                value: n(function() {
                    var t = this._findEntries("tus::");
                    return Promise.resolve(t)
                }, "findAllUploads")
            }, {
                key: "findUploadsByFingerprint",
                value: n(function(t) {
                    var r = this._findEntries("tus::".concat(t, "::"));
                    return Promise.resolve(r)
                }, "findUploadsByFingerprint")
            }, {
                key: "removeUpload",
                value: n(function(t) {
                    return localStorage.removeItem(t), Promise.resolve()
                }, "removeUpload")
            }, {
                key: "addUpload",
                value: n(function(t, r) {
                    var s = Math.round(Math.random() * 1e12),
                        o = "tus::".concat(t, "::").concat(s);
                    return localStorage.setItem(o, JSON.stringify(r)), Promise.resolve(o)
                }, "addUpload")
            }, {
                key: "_findEntries",
                value: n(function(t) {
                    for (var r = [], s = 0; s < localStorage.length; s++) {
                        var o = localStorage.key(s);
                        if (o.indexOf(t) === 0) try {
                            var a = JSON.parse(localStorage.getItem(o));
                            a.urlStorageKey = o, r.push(a)
                        } catch {}
                    }
                    return r
                }, "_findEntries")
            }]), i
        }();

    function Ac(i, e) {
        if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    n(Ac, "_classCallCheck");

    function by(i, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r)
        }
    }
    n(by, "_defineProperties");

    function Uc(i, e, t) {
        return e && by(i.prototype, e), t && by(i, t), Object.defineProperty(i, "prototype", {
            writable: !1
        }), i
    }
    n(Uc, "_createClass");
    var wy = function() {
        function i() {
            Ac(this, i)
        }
        return n(i, "XHRHttpStack"), Uc(i, [{
            key: "createRequest",
            value: n(function(t, r) {
                return new m_(t, r)
            }, "createRequest")
        }, {
            key: "getName",
            value: n(function() {
                return "XHRHttpStack"
            }, "getName")
        }]), i
    }();
    var m_ = function() {
            function i(e, t) {
                Ac(this, i), this._xhr = new XMLHttpRequest, this._xhr.open(e, t, !0), this._method = e, this._url = t, this._headers = {}
            }
            return n(i, "Request"), Uc(i, [{
                key: "getMethod",
                value: n(function() {
                    return this._method
                }, "getMethod")
            }, {
                key: "getURL",
                value: n(function() {
                    return this._url
                }, "getURL")
            }, {
                key: "setHeader",
                value: n(function(t, r) {
                    this._xhr.setRequestHeader(t, r), this._headers[t] = r
                }, "setHeader")
            }, {
                key: "getHeader",
                value: n(function(t) {
                    return this._headers[t]
                }, "getHeader")
            }, {
                key: "setProgressHandler",
                value: n(function(t) {
                    "upload" in this._xhr && (this._xhr.upload.onprogress = function(r) {
                        !r.lengthComputable || t(r.loaded)
                    })
                }, "setProgressHandler")
            }, {
                key: "send",
                value: n(function() {
                    var t = this,
                        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                    return new Promise(function(s, o) {
                        t._xhr.onload = function() {
                            s(new g_(t._xhr))
                        }, t._xhr.onerror = function(a) {
                            o(a)
                        }, t._xhr.send(r)
                    })
                }, "send")
            }, {
                key: "abort",
                value: n(function() {
                    return this._xhr.abort(), Promise.resolve()
                }, "abort")
            }, {
                key: "getUnderlyingObject",
                value: n(function() {
                    return this._xhr
                }, "getUnderlyingObject")
            }]), i
        }(),
        g_ = function() {
            function i(e) {
                Ac(this, i), this._xhr = e
            }
            return n(i, "Response"), Uc(i, [{
                key: "getStatus",
                value: n(function() {
                    return this._xhr.status
                }, "getStatus")
            }, {
                key: "getHeader",
                value: n(function(t) {
                    return this._xhr.getResponseHeader(t)
                }, "getHeader")
            }, {
                key: "getBody",
                value: n(function() {
                    return this._xhr.responseText
                }, "getBody")
            }, {
                key: "getUnderlyingObject",
                value: n(function() {
                    return this._xhr
                }, "getUnderlyingObject")
            }]), i
        }();
    var y_ = n(function() {
            return typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative"
        }, "isReactNative"),
        Al = y_;

    function Dc(i) {
        return new Promise(function(e, t) {
            var r = new XMLHttpRequest;
            r.responseType = "blob", r.onload = function() {
                var s = r.response;
                e(s)
            }, r.onerror = function(s) {
                t(s)
            }, r.open("GET", i), r.send()
        })
    }
    n(Dc, "uriToBlob");
    var v_ = n(function() {
            return typeof window < "u" && (typeof window.PhoneGap < "u" || typeof window.Cordova < "u" || typeof window.cordova < "u")
        }, "isCordova"),
        Sy = v_;

    function Nc(i) {
        return new Promise(function(e, t) {
            var r = new FileReader;
            r.onload = function() {
                var s = new Uint8Array(r.result);
                e({
                    value: s
                })
            }, r.onerror = function(s) {
                t(s)
            }, r.readAsArrayBuffer(i)
        })
    }
    n(Nc, "readAsByteArray");

    function b_(i, e) {
        if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    n(b_, "_classCallCheck");

    function _y(i, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r)
        }
    }
    n(_y, "_defineProperties");

    function w_(i, e, t) {
        return e && _y(i.prototype, e), t && _y(i, t), Object.defineProperty(i, "prototype", {
            writable: !1
        }), i
    }
    n(w_, "_createClass");
    var Bc = function() {
        function i(e) {
            b_(this, i), this._file = e, this.size = e.size
        }
        return n(i, "FileSource"), w_(i, [{
            key: "slice",
            value: n(function(t, r) {
                if (Sy()) return Nc(this._file.slice(t, r));
                var s = this._file.slice(t, r);
                return Promise.resolve({
                    value: s
                })
            }, "slice")
        }, {
            key: "close",
            value: n(function() {}, "close")
        }]), i
    }();

    function S_(i, e) {
        if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    n(S_, "_classCallCheck");

    function Py(i, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r)
        }
    }
    n(Py, "_defineProperties");

    function __(i, e, t) {
        return e && Py(i.prototype, e), t && Py(i, t), Object.defineProperty(i, "prototype", {
            writable: !1
        }), i
    }
    n(__, "_createClass");

    function xy(i) {
        return i === void 0 ? 0 : i.size !== void 0 ? i.size : i.length
    }
    n(xy, "len");

    function P_(i, e) {
        if (i.concat) return i.concat(e);
        if (i instanceof Blob) return new Blob([i, e], {
            type: i.type
        });
        if (i.set) {
            var t = new i.constructor(i.length + e.length);
            return t.set(i), t.set(e, i.length), t
        }
        throw new Error("Unknown data type")
    }
    n(P_, "concat");
    var Fy = function() {
        function i(e) {
            S_(this, i), this._buffer = void 0, this._bufferOffset = 0, this._reader = e, this._done = !1
        }
        return n(i, "StreamSource"), __(i, [{
            key: "slice",
            value: n(function(t, r) {
                return t < this._bufferOffset ? Promise.reject(new Error("Requested data is before the reader's current offset")) : this._readUntilEnoughDataOrDone(t, r)
            }, "slice")
        }, {
            key: "_readUntilEnoughDataOrDone",
            value: n(function(t, r) {
                var s = this,
                    o = r <= this._bufferOffset + xy(this._buffer);
                if (this._done || o) {
                    var a = this._getDataFromBuffer(t, r),
                        l = a == null ? this._done : !1;
                    return Promise.resolve({
                        value: a,
                        done: l
                    })
                }
                return this._reader.read().then(function(h) {
                    var c = h.value,
                        d = h.done;
                    return d ? s._done = !0 : s._buffer === void 0 ? s._buffer = c : s._buffer = P_(s._buffer, c), s._readUntilEnoughDataOrDone(t, r)
                })
            }, "_readUntilEnoughDataOrDone")
        }, {
            key: "_getDataFromBuffer",
            value: n(function(t, r) {
                t > this._bufferOffset && (this._buffer = this._buffer.slice(t - this._bufferOffset), this._bufferOffset = t);
                var s = xy(this._buffer) === 0;
                return this._done && s ? null : this._buffer.slice(0, r - t)
            }, "_getDataFromBuffer")
        }, {
            key: "close",
            value: n(function() {
                this._reader.cancel && this._reader.cancel()
            }, "close")
        }]), i
    }();

    function x_(i, e) {
        if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    n(x_, "_classCallCheck");

    function Ey(i, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r)
        }
    }
    n(Ey, "_defineProperties");

    function F_(i, e, t) {
        return e && Ey(i.prototype, e), t && Ey(i, t), Object.defineProperty(i, "prototype", {
            writable: !1
        }), i
    }
    n(F_, "_createClass");
    var Oy = function() {
        function i() {
            x_(this, i)
        }
        return n(i, "FileReader"), F_(i, [{
            key: "openFile",
            value: n(function(t, r) {
                return Al() && t && typeof t.uri < "u" ? Dc(t.uri).then(function(s) {
                    return new Bc(s)
                }).catch(function(s) {
                    throw new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(s))
                }) : typeof t.slice == "function" && typeof t.size < "u" ? Promise.resolve(new Bc(t)) : typeof t.read == "function" ? (r = Number(r), Number.isFinite(r) ? Promise.resolve(new Fy(t, r)) : Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option"))) : Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment"))
            }, "openFile")
        }]), i
    }();

    function Ic(i, e) {
        return Al() ? Promise.resolve(E_(i, e)) : Promise.resolve(["tus-br", i.name, i.type, i.size, i.lastModified, e.endpoint].join("-"))
    }
    n(Ic, "fingerprint");

    function E_(i, e) {
        var t = i.exif ? O_(JSON.stringify(i.exif)) : "noexif";
        return ["tus-rn", i.name || "noname", i.size || "nosize", t, e.endpoint].join("/")
    }
    n(E_, "reactNativeFingerprint");

    function O_(i) {
        var e = 0;
        if (i.length === 0) return e;
        for (var t = 0; t < i.length; t++) {
            var r = i.charCodeAt(t);
            e = (e << 5) - e + r, e &= e
        }
        return e
    }
    n(O_, "hashCode");

    function Lc(i) {
        return Lc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, Lc(i)
    }
    n(Lc, "_typeof");

    function R_(i, e) {
        if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    n(R_, "_classCallCheck");

    function Ry(i, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r)
        }
    }
    n(Ry, "_defineProperties");

    function C_(i, e, t) {
        return e && Ry(i.prototype, e), t && Ry(i, t), Object.defineProperty(i, "prototype", {
            writable: !1
        }), i
    }
    n(C_, "_createClass");

    function T_(i, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
        i.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: i,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(i, "prototype", {
            writable: !1
        }), e && Mc(i, e)
    }
    n(T_, "_inherits");

    function Mc(i, e) {
        return Mc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : n(function(r, s) {
            return r.__proto__ = s, r
        }, "_setPrototypeOf"), Mc(i, e)
    }
    n(Mc, "_setPrototypeOf");

    function k_(i) {
        var e = D_();
        return n(function() {
            var r = Ul(i),
                s;
            if (e) {
                var o = Ul(this).constructor;
                s = Reflect.construct(r, arguments, o)
            } else s = r.apply(this, arguments);
            return A_(this, s)
        }, "_createSuperInternal")
    }
    n(k_, "_createSuper");

    function A_(i, e) {
        if (e && (Lc(e) === "object" || typeof e == "function")) return e;
        if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return U_(i)
    }
    n(A_, "_possibleConstructorReturn");

    function U_(i) {
        if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return i
    }
    n(U_, "_assertThisInitialized");

    function D_() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }
    n(D_, "_isNativeReflectConstruct");

    function Ul(i) {
        return Ul = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : n(function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, "_getPrototypeOf"), Ul(i)
    }
    n(Ul, "_getPrototypeOf");

    function Cy(i, e) {
        var t = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(i);
            e && (r = r.filter(function(s) {
                return Object.getOwnPropertyDescriptor(i, s).enumerable
            })), t.push.apply(t, r)
        }
        return t
    }
    n(Cy, "ownKeys");

    function lo(i) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e] != null ? arguments[e] : {};
            e % 2 ? Cy(Object(t), !0).forEach(function(r) {
                N_(i, r, t[r])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Cy(Object(t)).forEach(function(r) {
                Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r))
            })
        }
        return i
    }
    n(lo, "_objectSpread");

    function N_(i, e, t) {
        return e in i ? Object.defineProperty(i, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[e] = t, i
    }
    n(N_, "_defineProperty");
    var Dl = lo(lo({}, kl.defaultOptions), {}, {
            httpStack: new wy,
            fileReader: new Oy,
            urlStorage: yy ? new vy : new my,
            fingerprint: Ic
        }),
        ky = function(i) {
            T_(t, i);
            var e = k_(t);

            function t() {
                var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
                    s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return R_(this, t), s = lo(lo({}, Dl), s), e.call(this, r, s)
            }
            return n(t, "Upload"), C_(t, null, [{
                key: "terminate",
                value: n(function(s, o, a) {
                    return o = lo(lo({}, Dl), o), kl.terminate(s, o, a)
                }, "terminate")
            }]), t
        }(kl),
        Ay = window,
        B_ = Ay.XMLHttpRequest,
        Ty = Ay.Blob,
        HD = B_ && Ty && typeof Ty.prototype.slice == "function";

    function $n(i) {
        let e = [],
            t = [];

        function r(a) {
            e.push(a)
        }
        n(r, "resolved");

        function s(a) {
            t.push(a)
        }
        return n(s, "rejected"), Promise.all(i.map(a => a.then(r, s))).then(() => ({
            successful: e,
            failed: t
        }))
    }
    n($n, "settle");

    function I_() {
        return typeof window < "u" && (typeof window.PhoneGap < "u" || typeof window.Cordova < "u" || typeof window.cordova < "u")
    }
    n(I_, "isCordova");

    function L_() {
        return typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative"
    }
    n(L_, "isReactNative");

    function zc(i) {
        return (e, t) => {
            if (I_() || L_()) return Dl.fingerprint(e, t);
            let r = ["tus", i.id, t.endpoint].join("-");
            return Promise.resolve(r)
        }
    }
    n(zc, "getFingerprint");

    function qn(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(qn, "_classPrivateFieldLooseBase");
    var M_ = 0;

    function Hc(i) {
        return "__private_" + M_++ + "_" + i
    }
    n(Hc, "_classPrivateFieldLooseKey");
    var z_ = {
            version: "3.0.5"
        },
        Dy = {
            endpoint: "",
            uploadUrl: null,
            metadata: {},
            uploadSize: null,
            onProgress: null,
            onChunkComplete: null,
            onSuccess: null,
            onError: null,
            overridePatchMethod: !1,
            overrideDeleteMethod: !1,
            headers: {},
            addRequestId: !1,
            chunkSize: 1 / 0,
            retryDelays: [100, 1e3, 3e3, 5e3],
            parallelUploads: 1,
            removeFingerprintOnSuccess: !1,
            uploadLengthDeferred: !1,
            uploadDataDuringCreation: !1
        },
        Vn = Hc("retryDelayIterator"),
        Wn = Hc("queueRequestSocketToken"),
        jc = Hc("requestSocketToken"),
        wi = class extends ae {
            constructor(e, t) {
                var r, s;
                super(e, t), Object.defineProperty(this, Vn, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Wn, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, jc, {
                    writable: !0,
                    value: async a => {
                        let l = a.remote.providerOptions.provider ? Y : le,
                            h = new l(this.uppy, a.remote.providerOptions),
                            c = { ...this.opts
                            };
                        return a.tus && Object.assign(c, a.tus), (await h.post(a.remote.url, { ...a.remote.body,
                            endpoint: c.endpoint,
                            uploadUrl: c.uploadUrl,
                            protocol: "tus",
                            size: a.data.size,
                            headers: c.headers,
                            metadata: a.meta
                        })).token
                    }
                }), this.type = "uploader", this.id = this.opts.id || "Tus", this.title = "Tus";
                let o = {
                    useFastRemoteRetry: !0,
                    limit: 20,
                    retryDelays: Dy.retryDelays,
                    withCredentials: !1
                };
                if (this.opts = { ...o,
                    ...t
                }, t ?.allowedMetaFields === void 0 && "metaFields" in this.opts) throw new Error("The `metaFields` option has been renamed to `allowedMetaFields`.");
                if ("autoRetry" in t) throw new Error("The `autoRetry` option was deprecated and has been removed.");
                this.requests = (r = this.opts.rateLimitedQueue) != null ? r : new Je(this.opts.limit), qn(this, Vn)[Vn] = (s = this.opts.retryDelays) == null ? void 0 : s.values(), this.uploaders = Object.create(null), this.uploaderEvents = Object.create(null), this.uploaderSockets = Object.create(null), this.handleResetProgress = this.handleResetProgress.bind(this), this.handleUpload = this.handleUpload.bind(this), qn(this, Wn)[Wn] = this.requests.wrapPromiseFunction(qn(this, jc)[jc], {
                    priority: -1
                })
            }
            handleResetProgress() {
                let e = { ...this.uppy.getState().files
                };
                Object.keys(e).forEach(t => {
                    if (e[t].tus && e[t].tus.uploadUrl) {
                        let r = { ...e[t].tus
                        };
                        delete r.uploadUrl, e[t] = { ...e[t],
                            tus: r
                        }
                    }
                }), this.uppy.setState({
                    files: e
                })
            }
            resetUploaderReferences(e, t) {
                if (t === void 0 && (t = {}), this.uploaders[e]) {
                    let r = this.uploaders[e];
                    r.abort(), t.abort && r.abort(!0), this.uploaders[e] = null
                }
                this.uploaderEvents[e] && (this.uploaderEvents[e].remove(), this.uploaderEvents[e] = null), this.uploaderSockets[e] && (this.uploaderSockets[e].close(), this.uploaderSockets[e] = null)
            }
            upload(e) {
                var t = this;
                return this.resetUploaderReferences(e.id), new Promise((r, s) => {
                    let o, a, l;
                    this.uppy.emit("upload-started", e);
                    let h = { ...this.opts,
                        ...e.tus || {}
                    };
                    typeof h.headers == "function" && (h.headers = h.headers(e));
                    let c = { ...Dy,
                        ...h
                    };
                    c.fingerprint = zc(e), c.onBeforeRequest = S => {
                        let R = S.getUnderlyingObject();
                        R.withCredentials = !!h.withCredentials;
                        let x;
                        if (typeof h.onBeforeRequest == "function" && (x = h.onBeforeRequest(S, e)), qe(o, "shouldBeRequeued")) {
                            if (!o.shouldBeRequeued) return Promise.reject();
                            let F, N = new Promise(H => {
                                F = H
                            });
                            return o = this.requests.run(() => (e.isPaused && o.abort(), F(), () => {})), Promise.all([N, x])
                        }
                        return x
                    }, c.onError = S => {
                        var R;
                        this.uppy.log(S);
                        let x = S.originalRequest ? S.originalRequest.getUnderlyingObject() : null;
                        rs(x) && (S = new Mt(S, x)), this.resetUploaderReferences(e.id), (R = o) == null || R.abort(), this.uppy.emit("upload-error", e, S), s(S)
                    }, c.onProgress = (S, R) => {
                        this.onReceiveUploadUrl(e, l.url), this.uppy.emit("upload-progress", e, {
                            uploader: this,
                            bytesUploaded: S,
                            bytesTotal: R
                        })
                    }, c.onSuccess = () => {
                        let S = {
                            uploadURL: l.url
                        };
                        this.resetUploaderReferences(e.id), o.done(), this.uppy.emit("upload-success", e, S), l.url && this.uppy.log(`Download ${l.file.name} from ${l.url}`), r(l)
                    };
                    let d = n(S => {
                        var R;
                        let x = S == null || (R = S.originalResponse) == null ? void 0 : R.getStatus();
                        if (x === 429) {
                            if (!this.requests.isPaused) {
                                var F;
                                let N = (F = qn(this, Vn)[Vn]) == null ? void 0 : F.next();
                                if (N == null || N.done) return !1;
                                this.requests.rateLimit(N.value)
                            }
                        } else {
                            if (x > 400 && x < 500 && x !== 409) return !1;
                            typeof navigator < "u" && navigator.onLine === !1 && (this.requests.isPaused || (this.requests.pause(), window.addEventListener("online", () => {
                                this.requests.resume()
                            }, {
                                once: !0
                            })))
                        }
                        return o.abort(), o = {
                            shouldBeRequeued: !0,
                            abort() {
                                this.shouldBeRequeued = !1
                            },
                            done() {
                                throw new Error("Cannot mark a queued request as done: this indicates a bug")
                            },
                            fn() {
                                throw new Error("Cannot run a queued request: this indicates a bug")
                            }
                        }, !0
                    }, "defaultOnShouldRetry");
                    h.onShouldRetry != null ? c.onShouldRetry = function() {
                        for (var S = arguments.length, R = new Array(S), x = 0; x < S; x++) R[x] = arguments[x];
                        return h.onShouldRetry(...R, d)
                    } : c.onShouldRetry = d;
                    let f = n((S, R, x) => {
                            qe(S, R) && !qe(S, x) && (S[x] = S[R])
                        }, "copyProp"),
                        y = {};
                    (Array.isArray(h.allowedMetaFields) ? h.allowedMetaFields : Object.keys(e.meta)).forEach(S => {
                        y[S] = e.meta[S]
                    }), f(y, "type", "filetype"), f(y, "name", "filename"), c.metadata = y, l = new ky(e.data, c), this.uploaders[e.id] = l, this.uploaderEvents[e.id] = new $e(this.uppy), a = n(() => (e.isPaused || l.start(), () => {}), "qRequest"), l.findPreviousUploads().then(S => {
                        let R = S[0];
                        R && (this.uppy.log(`[Tus] Resuming upload of ${e.id} started at ${R.creationTime}`), l.resumeFromPreviousUpload(R))
                    }), o = this.requests.run(a), this.onFileRemove(e.id, S => {
                        o.abort(), this.resetUploaderReferences(e.id, {
                            abort: !!l.url
                        }), r(`upload ${S} was removed`)
                    }), this.onPause(e.id, S => {
                        o.abort(), S ? l.abort() : o = this.requests.run(a)
                    }), this.onPauseAll(e.id, () => {
                        o.abort(), l.abort()
                    }), this.onCancelAll(e.id, function(S) {
                        let {
                            reason: R
                        } = S === void 0 ? {} : S;
                        R === "user" && (o.abort(), t.resetUploaderReferences(e.id, {
                            abort: !!l.url
                        })), r(`upload ${e.id} was canceled`)
                    }), this.onResumeAll(e.id, () => {
                        o.abort(), e.error && l.abort(), o = this.requests.run(a)
                    })
                }).catch(r => {
                    throw this.uppy.emit("upload-error", e, r), r
                })
            }
            async uploadRemote(e) {
                this.resetUploaderReferences(e.id), (!e.progress.uploadStarted || !e.isRestored) && this.uppy.emit("upload-started", e);
                try {
                    if (e.serverToken) return this.connectToServerSocket(e);
                    let t = await qn(this, Wn)[Wn](e);
                    return this.uppy.getState().files[e.id] ? (this.uppy.setFileState(e.id, {
                        serverToken: t
                    }), this.connectToServerSocket(this.uppy.getFile(e.id))) : void 0
                } catch (t) {
                    throw this.uppy.emit("upload-error", e, t), t
                }
            }
            connectToServerSocket(e) {
                var t = this;
                return new Promise((r, s) => {
                    let o = e.serverToken,
                        a = Wi(e.remote.companionUrl),
                        l = new ot({
                            target: `${a}/api/${o}`
                        });
                    this.uploaderSockets[e.id] = l, this.uploaderEvents[e.id] = new $e(this.uppy);
                    let h;
                    this.onFileRemove(e.id, () => {
                        h.abort(), l.send("cancel", {}), this.resetUploaderReferences(e.id), r(`upload ${e.id} was removed`)
                    }), this.onPause(e.id, c => {
                        c ? (h.abort(), l.send("pause", {})) : (h.abort(), h = this.requests.run(() => (l.send("resume", {}), () => {})))
                    }), this.onPauseAll(e.id, () => {
                        h.abort(), l.send("pause", {})
                    }), this.onCancelAll(e.id, function(c) {
                        let {
                            reason: d
                        } = c === void 0 ? {} : c;
                        d === "user" && (h.abort(), l.send("cancel", {}), t.resetUploaderReferences(e.id)), r(`upload ${e.id} was canceled`)
                    }), this.onResumeAll(e.id, () => {
                        h.abort(), e.error && l.send("pause", {}), h = this.requests.run(() => (l.send("resume", {}), () => {}))
                    }), this.onRetry(e.id, () => {
                        l.isOpen && (l.send("pause", {}), l.send("resume", {}))
                    }), this.onRetryAll(e.id, () => {
                        l.isOpen && (l.send("pause", {}), l.send("resume", {}))
                    }), l.on("progress", c => Sr(this, c, e)), l.on("error", c => {
                        let {
                            message: d
                        } = c.error, f = Object.assign(new Error(d), {
                            cause: c.error
                        });
                        this.opts.useFastRemoteRetry ? l.close() : (this.resetUploaderReferences(e.id), this.uppy.setFileState(e.id, {
                            serverToken: null
                        })), this.uppy.emit("upload-error", e, f), h.done(), s(f)
                    }), l.on("success", c => {
                        let d = {
                            uploadURL: c.url
                        };
                        this.uppy.emit("upload-success", e, d), this.resetUploaderReferences(e.id), h.done(), r()
                    }), h = this.requests.run(() => (e.isPaused && l.send("pause", {}), () => {}))
                })
            }
            onReceiveUploadUrl(e, t) {
                let r = this.uppy.getFile(e.id);
                !r || (!r.tus || r.tus.uploadUrl !== t) && (this.uppy.log("[Tus] Storing upload url"), this.uppy.setFileState(r.id, {
                    tus: { ...r.tus,
                        uploadUrl: t
                    }
                }))
            }
            onFileRemove(e, t) {
                this.uploaderEvents[e].on("file-removed", r => {
                    e === r.id && t(r.id)
                })
            }
            onPause(e, t) {
                this.uploaderEvents[e].on("upload-pause", (r, s) => {
                    e === r && t(s)
                })
            }
            onRetry(e, t) {
                this.uploaderEvents[e].on("upload-retry", r => {
                    e === r && t()
                })
            }
            onRetryAll(e, t) {
                this.uploaderEvents[e].on("retry-all", () => {
                    !this.uppy.getFile(e) || t()
                })
            }
            onPauseAll(e, t) {
                this.uploaderEvents[e].on("pause-all", () => {
                    !this.uppy.getFile(e) || t()
                })
            }
            onCancelAll(e, t) {
                var r = this;
                this.uploaderEvents[e].on("cancel-all", function() {
                    !r.uppy.getFile(e) || t(...arguments)
                })
            }
            onResumeAll(e, t) {
                this.uploaderEvents[e].on("resume-all", () => {
                    !this.uppy.getFile(e) || t()
                })
            }
            uploadFiles(e) {
                let t = e.map((r, s) => {
                    let o = s + 1,
                        a = e.length;
                    return "error" in r && r.error ? Promise.reject(new Error(r.error)) : r.isRemote ? ((!r.progress.uploadStarted || !r.isRestored) && this.uppy.emit("upload-started", r), this.uploadRemote(r, o, a)) : ((!r.progress.uploadStarted || !r.isRestored) && this.uppy.emit("upload-started", r), this.upload(r, o, a))
                });
                return $n(t)
            }
            handleUpload(e) {
                if (e.length === 0) return this.uppy.log("[Tus] No files to upload"), Promise.resolve();
                this.opts.limit === 0 && this.uppy.log("[Tus] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/tus/#limit-0", "warning"), this.uppy.log("[Tus] Uploading...");
                let t = e.map(r => this.uppy.getFile(r));
                return this.uploadFiles(t).then(() => null)
            }
            install() {
                this.uppy.setState({
                    capabilities: { ...this.uppy.getState().capabilities,
                        resumableUploads: !0
                    }
                }), this.uppy.addUploader(this.handleUpload), this.uppy.on("reset-progress", this.handleResetProgress)
            }
            uninstall() {
                this.uppy.setState({
                    capabilities: { ...this.uppy.getState().capabilities,
                        resumableUploads: !1
                    }
                }), this.uppy.removeUploader(this.handleUpload)
            }
        };
    n(wi, "Tus");
    wi.VERSION = z_.version;
    var av = oe(qc(), 1);
    var qt = Object.create(null);
    qt.open = "0";
    qt.close = "1";
    qt.ping = "2";
    qt.pong = "3";
    qt.message = "4";
    qt.upgrade = "5";
    qt.noop = "6";
    var Kn = Object.create(null);
    Object.keys(qt).forEach(i => {
        Kn[qt[i]] = i
    });
    var Ny = {
        type: "error",
        data: "parser error"
    };
    var H_ = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
        $_ = typeof ArrayBuffer == "function",
        q_ = n(i => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(i) : i && i.buffer instanceof ArrayBuffer, "isView"),
        V_ = n(({
                    type: i,
                    data: e
                }, t, r) => H_ && e instanceof Blob ? t ? r(e) : By(e, r) : $_ && (e instanceof ArrayBuffer || q_(e)) ? t ? r(e) : By(new Blob([e]), r) : r(qt[i] + (e || "")), "encodePacket"),
        By = n((i, e) => {
            let t = new FileReader;
            return t.onload = function() {
                let r = t.result.split(",")[1];
                e("b" + r)
            }, t.readAsDataURL(i)
        }, "encodeBlobAsBase64"),
        Nl = V_;
    var Iy = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Gn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
    for (let i = 0; i < Iy.length; i++) Gn[Iy.charCodeAt(i)] = i;
    var Ly = n(i => {
        let e = i.length * .75,
            t = i.length,
            r, s = 0,
            o, a, l, h;
        i[i.length - 1] === "=" && (e--, i[i.length - 2] === "=" && e--);
        let c = new ArrayBuffer(e),
            d = new Uint8Array(c);
        for (r = 0; r < t; r += 4) o = Gn[i.charCodeAt(r)], a = Gn[i.charCodeAt(r + 1)], l = Gn[i.charCodeAt(r + 2)], h = Gn[i.charCodeAt(r + 3)], d[s++] = o << 2 | a >> 4, d[s++] = (a & 15) << 4 | l >> 2, d[s++] = (l & 3) << 6 | h & 63;
        return c
    }, "decode");
    var W_ = typeof ArrayBuffer == "function",
        K_ = n((i, e) => {
            if (typeof i != "string") return {
                type: "message",
                data: My(i, e)
            };
            let t = i.charAt(0);
            return t === "b" ? {
                type: "message",
                data: G_(i.substring(1), e)
            } : Kn[t] ? i.length > 1 ? {
                type: Kn[t],
                data: i.substring(1)
            } : {
                type: Kn[t]
            } : Ny
        }, "decodePacket"),
        G_ = n((i, e) => {
            if (W_) {
                let t = Ly(i);
                return My(t, e)
            } else return {
                base64: !0,
                data: i
            }
        }, "decodeBase64Packet"),
        My = n((i, e) => {
            switch (e) {
                case "blob":
                    return i instanceof ArrayBuffer ? new Blob([i]) : i;
                case "arraybuffer":
                default:
                    return i
            }
        }, "mapBinary"),
        Bl = K_;
    var zy = String.fromCharCode(30),
        jy = n((i, e) => {
            let t = i.length,
                r = new Array(t),
                s = 0;
            i.forEach((o, a) => {
                Nl(o, !1, l => {
                    r[a] = l, ++s === t && e(r.join(zy))
                })
            })
        }, "encodePayload"),
        Hy = n((i, e) => {
            let t = i.split(zy),
                r = [];
            for (let s = 0; s < t.length; s++) {
                let o = Bl(t[s], e);
                if (r.push(o), o.type === "error") break
            }
            return r
        }, "decodePayload"),
        Vc = 4;

    function ue(i) {
        if (i) return X_(i)
    }
    n(ue, "Emitter");

    function X_(i) {
        for (var e in ue.prototype) i[e] = ue.prototype[e];
        return i
    }
    n(X_, "mixin");
    ue.prototype.on = ue.prototype.addEventListener = function(i, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + i] = this._callbacks["$" + i] || []).push(e), this
    };
    ue.prototype.once = function(i, e) {
        function t() {
            this.off(i, t), e.apply(this, arguments)
        }
        return n(t, "on"), t.fn = e, this.on(i, t), this
    };
    ue.prototype.off = ue.prototype.removeListener = ue.prototype.removeAllListeners = ue.prototype.removeEventListener = function(i, e) {
        if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
        var t = this._callbacks["$" + i];
        if (!t) return this;
        if (arguments.length == 1) return delete this._callbacks["$" + i], this;
        for (var r, s = 0; s < t.length; s++)
            if (r = t[s], r === e || r.fn === e) {
                t.splice(s, 1);
                break
            }
        return t.length === 0 && delete this._callbacks["$" + i], this
    };
    ue.prototype.emit = function(i) {
        this._callbacks = this._callbacks || {};
        for (var e = new Array(arguments.length - 1), t = this._callbacks["$" + i], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        if (t) {
            t = t.slice(0);
            for (var r = 0, s = t.length; r < s; ++r) t[r].apply(this, e)
        }
        return this
    };
    ue.prototype.emitReserved = ue.prototype.emit;
    ue.prototype.listeners = function(i) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + i] || []
    };
    ue.prototype.hasListeners = function(i) {
        return !!this.listeners(i).length
    };
    var Ut = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();

    function Il(i, ...e) {
        return e.reduce((t, r) => (i.hasOwnProperty(r) && (t[r] = i[r]), t), {})
    }
    n(Il, "pick");
    var Y_ = setTimeout,
        J_ = clearTimeout;

    function Ji(i, e) {
        e.useNativeTimers ? (i.setTimeoutFn = Y_.bind(Ut), i.clearTimeoutFn = J_.bind(Ut)) : (i.setTimeoutFn = setTimeout.bind(Ut), i.clearTimeoutFn = clearTimeout.bind(Ut))
    }
    n(Ji, "installTimerFunctions");
    var Q_ = 1.33;

    function $y(i) {
        return typeof i == "string" ? Z_(i) : Math.ceil((i.byteLength || i.size) * Q_)
    }
    n($y, "byteLength");

    function Z_(i) {
        let e = 0,
            t = 0;
        for (let r = 0, s = i.length; r < s; r++) e = i.charCodeAt(r), e < 128 ? t += 1 : e < 2048 ? t += 2 : e < 55296 || e >= 57344 ? t += 3 : (r++, t += 4);
        return t
    }
    n(Z_, "utf8Length");
    var Ll = class extends Error {
        constructor(e, t, r) {
            super(e), this.description = t, this.context = r, this.type = "TransportError"
        }
    };
    n(Ll, "TransportError");
    var Pr = class extends ue {
        constructor(e) {
            super(), this.writable = !1, Ji(this, e), this.opts = e, this.query = e.query, this.readyState = "", this.socket = e.socket
        }
        onError(e, t, r) {
            return super.emitReserved("error", new Ll(e, t, r)), this
        }
        open() {
            return (this.readyState === "closed" || this.readyState === "") && (this.readyState = "opening", this.doOpen()), this
        }
        close() {
            return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
        }
        send(e) {
            this.readyState === "open" && this.write(e)
        }
        onOpen() {
            this.readyState = "open", this.writable = !0, super.emitReserved("open")
        }
        onData(e) {
            let t = Bl(e, this.socket.binaryType);
            this.onPacket(t)
        }
        onPacket(e) {
            super.emitReserved("packet", e)
        }
        onClose(e) {
            this.readyState = "closed", super.emitReserved("close", e)
        }
    };
    n(Pr, "Transport");
    var Ky = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
        Wc = 64,
        eP = {},
        qy = 0,
        Ml = 0,
        Vy;

    function Wy(i) {
        let e = "";
        do e = Ky[i % Wc] + e, i = Math.floor(i / Wc); while (i > 0);
        return e
    }
    n(Wy, "encode");

    function zl() {
        let i = Wy(+new Date);
        return i !== Vy ? (qy = 0, Vy = i) : i + "." + Wy(qy++)
    }
    n(zl, "yeast");
    for (; Ml < Wc; Ml++) eP[Ky[Ml]] = Ml;

    function jl(i) {
        let e = "";
        for (let t in i) i.hasOwnProperty(t) && (e.length && (e += "&"), e += encodeURIComponent(t) + "=" + encodeURIComponent(i[t]));
        return e
    }
    n(jl, "encode");

    function Gy(i) {
        let e = {},
            t = i.split("&");
        for (let r = 0, s = t.length; r < s; r++) {
            let o = t[r].split("=");
            e[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
        }
        return e
    }
    n(Gy, "decode");
    var Xy = !1;
    try {
        Xy = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
    } catch {}
    var Yy = Xy;

    function Kc(i) {
        let e = i.xdomain;
        try {
            if (typeof XMLHttpRequest < "u" && (!e || Yy)) return new XMLHttpRequest
        } catch {}
        if (!e) try {
            return new Ut[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
    }
    n(Kc, "XHR");

    function tP() {}
    n(tP, "empty");
    var iP = function() {
            return new Kc({
                xdomain: !1
            }).responseType != null
        }(),
        Xn = class extends Pr {
            constructor(e) {
                if (super(e), this.polling = !1, typeof location < "u") {
                    let r = location.protocol === "https:",
                        s = location.port;
                    s || (s = r ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || s !== e.port, this.xs = e.secure !== r
                }
                let t = e && e.forceBase64;
                this.supportsBinary = iP && !t
            }
            get name() {
                return "polling"
            }
            doOpen() {
                this.poll()
            }
            pause(e) {
                this.readyState = "pausing";
                let t = n(() => {
                    this.readyState = "paused", e()
                }, "pause");
                if (this.polling || !this.writable) {
                    let r = 0;
                    this.polling && (r++, this.once("pollComplete", function() {
                        --r || t()
                    })), this.writable || (r++, this.once("drain", function() {
                        --r || t()
                    }))
                } else t()
            }
            poll() {
                this.polling = !0, this.doPoll(), this.emitReserved("poll")
            }
            onData(e) {
                let t = n(r => {
                    if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close") return this.onClose({
                        description: "transport closed by the server"
                    }), !1;
                    this.onPacket(r)
                }, "callback");
                Hy(e, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll())
            }
            doClose() {
                let e = n(() => {
                    this.write([{
                        type: "close"
                    }])
                }, "close");
                this.readyState === "open" ? e() : this.once("open", e)
            }
            write(e) {
                this.writable = !1, jy(e, t => {
                    this.doWrite(t, () => {
                        this.writable = !0, this.emitReserved("drain")
                    })
                })
            }
            uri() {
                let e = this.query || {},
                    t = this.opts.secure ? "https" : "http",
                    r = "";
                this.opts.timestampRequests !== !1 && (e[this.opts.timestampParam] = zl()), !this.supportsBinary && !e.sid && (e.b64 = 1), this.opts.port && (t === "https" && Number(this.opts.port) !== 443 || t === "http" && Number(this.opts.port) !== 80) && (r = ":" + this.opts.port);
                let s = jl(e),
                    o = this.opts.hostname.indexOf(":") !== -1;
                return t + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + (s.length ? "?" + s : "")
            }
            request(e = {}) {
                return Object.assign(e, {
                    xd: this.xd,
                    xs: this.xs
                }, this.opts), new wt(this.uri(), e)
            }
            doWrite(e, t) {
                let r = this.request({
                    method: "POST",
                    data: e
                });
                r.on("success", t), r.on("error", (s, o) => {
                    this.onError("xhr post error", s, o)
                })
            }
            doPoll() {
                let e = this.request();
                e.on("data", this.onData.bind(this)), e.on("error", (t, r) => {
                    this.onError("xhr poll error", t, r)
                }), this.pollXhr = e
            }
        };
    n(Xn, "Polling");
    var wt = class extends ue {
        constructor(e, t) {
            super(), Ji(this, t), this.opts = t, this.method = t.method || "GET", this.uri = e, this.async = t.async !== !1, this.data = t.data !== void 0 ? t.data : null, this.create()
        }
        create() {
            let e = Il(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
            e.xdomain = !!this.opts.xd, e.xscheme = !!this.opts.xs;
            let t = this.xhr = new Kc(e);
            try {
                t.open(this.method, this.uri, this.async);
                try {
                    if (this.opts.extraHeaders) {
                        t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
                        for (let r in this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(r) && t.setRequestHeader(r, this.opts.extraHeaders[r])
                    }
                } catch {}
                if (this.method === "POST") try {
                    t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
                try {
                    t.setRequestHeader("Accept", "*/*")
                } catch {}
                "withCredentials" in t && (t.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (t.timeout = this.opts.requestTimeout), t.onreadystatechange = () => {
                    t.readyState === 4 && (t.status === 200 || t.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
                        this.onError(typeof t.status == "number" ? t.status : 0)
                    }, 0))
                }, t.send(this.data)
            } catch (r) {
                this.setTimeoutFn(() => {
                    this.onError(r)
                }, 0);
                return
            }
            typeof document < "u" && (this.index = wt.requestsCount++, wt.requests[this.index] = this)
        }
        onError(e) {
            this.emitReserved("error", e, this.xhr), this.cleanup(!0)
        }
        cleanup(e) {
            if (!(typeof this.xhr > "u" || this.xhr === null)) {
                if (this.xhr.onreadystatechange = tP, e) try {
                    this.xhr.abort()
                } catch {}
                typeof document < "u" && delete wt.requests[this.index], this.xhr = null
            }
        }
        onLoad() {
            let e = this.xhr.responseText;
            e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this.cleanup())
        }
        abort() {
            this.cleanup()
        }
    };
    n(wt, "Request");
    wt.requestsCount = 0;
    wt.requests = {};
    if (typeof document < "u") {
        if (typeof attachEvent == "function") attachEvent("onunload", Jy);
        else if (typeof addEventListener == "function") {
            let i = "onpagehide" in Ut ? "pagehide" : "unload";
            addEventListener(i, Jy, !1)
        }
    }

    function Jy() {
        for (let i in wt.requests) wt.requests.hasOwnProperty(i) && wt.requests[i].abort()
    }
    n(Jy, "unloadHandler");
    var Qy = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, t) => t(e, 0))(),
        Yn = Ut.WebSocket || Ut.MozWebSocket,
        Hl = !0,
        Zy = "arraybuffer";
    var ev = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative",
        Jn = class extends Pr {
            constructor(e) {
                super(e), this.supportsBinary = !e.forceBase64
            }
            get name() {
                return "websocket"
            }
            doOpen() {
                if (!this.check()) return;
                let e = this.uri(),
                    t = this.opts.protocols,
                    r = ev ? {} : Il(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
                try {
                    this.ws = Hl && !ev ? t ? new Yn(e, t) : new Yn(e) : new Yn(e, t, r)
                } catch (s) {
                    return this.emitReserved("error", s)
                }
                this.ws.binaryType = this.socket.binaryType || Zy, this.addEventListeners()
            }
            addEventListeners() {
                this.ws.onopen = () => {
                    this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
                }, this.ws.onclose = e => this.onClose({
                    description: "websocket connection closed",
                    context: e
                }), this.ws.onmessage = e => this.onData(e.data), this.ws.onerror = e => this.onError("websocket error", e)
            }
            write(e) {
                this.writable = !1;
                for (let t = 0; t < e.length; t++) {
                    let r = e[t],
                        s = t === e.length - 1;
                    Nl(r, this.supportsBinary, o => {
                        let a = {};
                        Hl || (r.options && (a.compress = r.options.compress), this.opts.perMessageDeflate && (typeof o == "string" ? Buffer.byteLength(o) : o.length) < this.opts.perMessageDeflate.threshold && (a.compress = !1));
                        try {
                            Hl ? this.ws.send(o) : this.ws.send(o, a)
                        } catch {}
                        s && Qy(() => {
                            this.writable = !0, this.emitReserved("drain")
                        }, this.setTimeoutFn)
                    })
                }
            }
            doClose() {
                typeof this.ws < "u" && (this.ws.close(), this.ws = null)
            }
            uri() {
                let e = this.query || {},
                    t = this.opts.secure ? "wss" : "ws",
                    r = "";
                this.opts.port && (t === "wss" && Number(this.opts.port) !== 443 || t === "ws" && Number(this.opts.port) !== 80) && (r = ":" + this.opts.port), this.opts.timestampRequests && (e[this.opts.timestampParam] = zl()), this.supportsBinary || (e.b64 = 1);
                let s = jl(e),
                    o = this.opts.hostname.indexOf(":") !== -1;
                return t + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + (s.length ? "?" + s : "")
            }
            check() {
                return !!Yn
            }
        };
    n(Jn, "WS");
    var Gc = {
        websocket: Jn,
        polling: Xn
    };
    var rP = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        sP = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

    function uo(i) {
        let e = i,
            t = i.indexOf("["),
            r = i.indexOf("]");
        t != -1 && r != -1 && (i = i.substring(0, t) + i.substring(t, r).replace(/:/g, ";") + i.substring(r, i.length));
        let s = rP.exec(i || ""),
            o = {},
            a = 14;
        for (; a--;) o[sP[a]] = s[a] || "";
        return t != -1 && r != -1 && (o.source = e, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = oP(o, o.path), o.queryKey = nP(o, o.query), o
    }
    n(uo, "parse");

    function oP(i, e) {
        let t = /\/{2,9}/g,
            r = e.replace(t, "/").split("/");
        return (e.substr(0, 1) == "/" || e.length === 0) && r.splice(0, 1), e.substr(e.length - 1, 1) == "/" && r.splice(r.length - 1, 1), r
    }
    n(oP, "pathNames");

    function nP(i, e) {
        let t = {};
        return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, s, o) {
            s && (t[s] = o)
        }), t
    }
    n(nP, "queryKey");
    var ht = class extends ue {
        constructor(e, t = {}) {
            super(), e && typeof e == "object" && (t = e, e = null), e ? (e = uo(e), t.hostname = e.host, t.secure = e.protocol === "https" || e.protocol === "wss", t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = uo(t.host).host), Ji(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = t.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                rejectUnauthorized: !0,
                perMessageDeflate: {
                    threshold: 1024
                },
                transportOptions: {},
                closeOnBeforeunload: !0
            }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + "/", typeof this.opts.query == "string" && (this.opts.query = Gy(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && addEventListener("beforeunload", () => {
                this.transport && (this.transport.removeAllListeners(), this.transport.close())
            }, !1), this.hostname !== "localhost" && (this.offlineEventListener = () => {
                this.onClose("transport close", {
                    description: "network connection lost"
                })
            }, addEventListener("offline", this.offlineEventListener, !1))), this.open()
        }
        createTransport(e) {
            let t = Object.assign({}, this.opts.query);
            t.EIO = Vc, t.transport = e, this.id && (t.sid = this.id);
            let r = Object.assign({}, this.opts.transportOptions[e], this.opts, {
                query: t,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port
            });
            return new Gc[e](r)
        }
        open() {
            let e;
            if (this.opts.rememberUpgrade && ht.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) e = "websocket";
            else if (this.transports.length === 0) {
                this.setTimeoutFn(() => {
                    this.emitReserved("error", "No transports available")
                }, 0);
                return
            } else e = this.transports[0];
            this.readyState = "opening";
            try {
                e = this.createTransport(e)
            } catch {
                this.transports.shift(), this.open();
                return
            }
            e.open(), this.setTransport(e)
        }
        setTransport(e) {
            this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", t => this.onClose("transport close", t))
        }
        probe(e) {
            let t = this.createTransport(e),
                r = !1;
            ht.priorWebsocketSuccess = !1;
            let s = n(() => {
                r || (t.send([{
                    type: "ping",
                    data: "probe"
                }]), t.once("packet", f => {
                    if (!r)
                        if (f.type === "pong" && f.data === "probe") {
                            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t) return;
                            ht.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
                                r || this.readyState !== "closed" && (d(), this.setTransport(t), t.send([{
                                    type: "upgrade"
                                }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush())
                            })
                        } else {
                            let y = new Error("probe error");
                            y.transport = t.name, this.emitReserved("upgradeError", y)
                        }
                }))
            }, "onTransportOpen");

            function o() {
                r || (r = !0, d(), t.close(), t = null)
            }
            n(o, "freezeTransport");
            let a = n(f => {
                let y = new Error("probe error: " + f);
                y.transport = t.name, o(), this.emitReserved("upgradeError", y)
            }, "onerror");

            function l() {
                a("transport closed")
            }
            n(l, "onTransportClose");

            function h() {
                a("socket closed")
            }
            n(h, "onclose");

            function c(f) {
                t && f.name !== t.name && o()
            }
            n(c, "onupgrade");
            let d = n(() => {
                t.removeListener("open", s), t.removeListener("error", a), t.removeListener("close", l), this.off("close", h), this.off("upgrading", c)
            }, "cleanup");
            t.once("open", s), t.once("error", a), t.once("close", l), this.once("close", h), this.once("upgrading", c), t.open()
        }
        onOpen() {
            if (this.readyState = "open", ht.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade && this.transport.pause) {
                let e = 0,
                    t = this.upgrades.length;
                for (; e < t; e++) this.probe(this.upgrades[e])
            }
        }
        onPacket(e) {
            if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
                case "open":
                    this.onHandshake(JSON.parse(e.data));
                    break;
                case "ping":
                    this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
                    break;
                case "error":
                    let t = new Error("server error");
                    t.code = e.data, this.onError(t);
                    break;
                case "message":
                    this.emitReserved("data", e.data), this.emitReserved("message", e.data);
                    break
            }
        }
        onHandshake(e) {
            this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout()
        }
        resetPingTimeout() {
            this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
                this.onClose("ping timeout")
            }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
        }
        onDrain() {
            this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
        }
        flush() {
            if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                let e = this.getWritablePackets();
                this.transport.send(e), this.prevBufferLen = e.length, this.emitReserved("flush")
            }
        }
        getWritablePackets() {
            if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
            let t = 1;
            for (let r = 0; r < this.writeBuffer.length; r++) {
                let s = this.writeBuffer[r].data;
                if (s && (t += $y(s)), r > 0 && t > this.maxPayload) return this.writeBuffer.slice(0, r);
                t += 2
            }
            return this.writeBuffer
        }
        write(e, t, r) {
            return this.sendPacket("message", e, t, r), this
        }
        send(e, t, r) {
            return this.sendPacket("message", e, t, r), this
        }
        sendPacket(e, t, r, s) {
            if (typeof t == "function" && (s = t, t = void 0), typeof r == "function" && (s = r, r = null), this.readyState === "closing" || this.readyState === "closed") return;
            r = r || {}, r.compress = r.compress !== !1;
            let o = {
                type: e,
                data: t,
                options: r
            };
            this.emitReserved("packetCreate", o), this.writeBuffer.push(o), s && this.once("flush", s), this.flush()
        }
        close() {
            let e = n(() => {
                    this.onClose("forced close"), this.transport.close()
                }, "close"),
                t = n(() => {
                    this.off("upgrade", t), this.off("upgradeError", t), e()
                }, "cleanupAndClose"),
                r = n(() => {
                    this.once("upgrade", t), this.once("upgradeError", t)
                }, "waitForUpgrade");
            return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
                this.upgrading ? r() : e()
            }) : this.upgrading ? r() : e()), this
        }
        onError(e) {
            ht.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e)
        }
        onClose(e, t) {
            (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && removeEventListener("offline", this.offlineEventListener, !1), this.readyState = "closed", this.id = null, this.emitReserved("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0)
        }
        filterUpgrades(e) {
            let t = [],
                r = 0,
                s = e.length;
            for (; r < s; r++) ~this.transports.indexOf(e[r]) && t.push(e[r]);
            return t
        }
    };
    n(ht, "Socket");
    ht.protocol = Vc;
    var PN = ht.protocol;

    function tv(i, e = "", t) {
        let r = i;
        t = t || typeof location < "u" && location, i == null && (i = t.protocol + "//" + t.host), typeof i == "string" && (i.charAt(0) === "/" && (i.charAt(1) === "/" ? i = t.protocol + i : i = t.host + i), /^(https?|wss?):\/\//.test(i) || (typeof t < "u" ? i = t.protocol + "//" + i : i = "https://" + i), r = uo(i)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
        let o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
        return r.id = r.protocol + "://" + o + ":" + r.port + e, r.href = r.protocol + "://" + o + (t && t.port === r.port ? "" : ":" + r.port), r
    }
    n(tv, "url");
    var Jc = {};
    yo(Jc, {
        Decoder: () => ho,
        Encoder: () => $l,
        PacketType: () => ee,
        protocol: () => ov
    });
    var aP = typeof ArrayBuffer == "function",
        lP = n(i => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(i) : i.buffer instanceof ArrayBuffer, "isView"),
        iv = Object.prototype.toString,
        uP = typeof Blob == "function" || typeof Blob < "u" && iv.call(Blob) === "[object BlobConstructor]",
        hP = typeof File == "function" || typeof File < "u" && iv.call(File) === "[object FileConstructor]";

    function Zn(i) {
        return aP && (i instanceof ArrayBuffer || lP(i)) || uP && i instanceof Blob || hP && i instanceof File
    }
    n(Zn, "isBinary");

    function Qn(i, e) {
        if (!i || typeof i != "object") return !1;
        if (Array.isArray(i)) {
            for (let t = 0, r = i.length; t < r; t++)
                if (Qn(i[t])) return !0;
            return !1
        }
        if (Zn(i)) return !0;
        if (i.toJSON && typeof i.toJSON == "function" && arguments.length === 1) return Qn(i.toJSON(), !0);
        for (let t in i)
            if (Object.prototype.hasOwnProperty.call(i, t) && Qn(i[t])) return !0;
        return !1
    }
    n(Qn, "hasBinary");

    function rv(i) {
        let e = [],
            t = i.data,
            r = i;
        return r.data = Xc(t, e), r.attachments = e.length, {
            packet: r,
            buffers: e
        }
    }
    n(rv, "deconstructPacket");

    function Xc(i, e) {
        if (!i) return i;
        if (Zn(i)) {
            let t = {
                _placeholder: !0,
                num: e.length
            };
            return e.push(i), t
        } else if (Array.isArray(i)) {
            let t = new Array(i.length);
            for (let r = 0; r < i.length; r++) t[r] = Xc(i[r], e);
            return t
        } else if (typeof i == "object" && !(i instanceof Date)) {
            let t = {};
            for (let r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = Xc(i[r], e));
            return t
        }
        return i
    }
    n(Xc, "_deconstructPacket");

    function sv(i, e) {
        return i.data = Yc(i.data, e), i.attachments = void 0, i
    }
    n(sv, "reconstructPacket");

    function Yc(i, e) {
        if (!i) return i;
        if (i && i._placeholder === !0) {
            if (typeof i.num == "number" && i.num >= 0 && i.num < e.length) return e[i.num];
            throw new Error("illegal attachments")
        } else if (Array.isArray(i))
            for (let t = 0; t < i.length; t++) i[t] = Yc(i[t], e);
        else if (typeof i == "object")
            for (let t in i) Object.prototype.hasOwnProperty.call(i, t) && (i[t] = Yc(i[t], e));
        return i
    }
    n(Yc, "_reconstructPacket");
    var ov = 5,
        ee;
    (function(i) {
        i[i.CONNECT = 0] = "CONNECT", i[i.DISCONNECT = 1] = "DISCONNECT", i[i.EVENT = 2] = "EVENT", i[i.ACK = 3] = "ACK", i[i.CONNECT_ERROR = 4] = "CONNECT_ERROR", i[i.BINARY_EVENT = 5] = "BINARY_EVENT", i[i.BINARY_ACK = 6] = "BINARY_ACK"
    })(ee || (ee = {}));
    var $l = class {
        constructor(e) {
            this.replacer = e
        }
        encode(e) {
            return (e.type === ee.EVENT || e.type === ee.ACK) && Qn(e) ? (e.type = e.type === ee.EVENT ? ee.BINARY_EVENT : ee.BINARY_ACK, this.encodeAsBinary(e)) : [this.encodeAsString(e)]
        }
        encodeAsString(e) {
            let t = "" + e.type;
            return (e.type === ee.BINARY_EVENT || e.type === ee.BINARY_ACK) && (t += e.attachments + "-"), e.nsp && e.nsp !== "/" && (t += e.nsp + ","), e.id != null && (t += e.id), e.data != null && (t += JSON.stringify(e.data, this.replacer)), t
        }
        encodeAsBinary(e) {
            let t = rv(e),
                r = this.encodeAsString(t.packet),
                s = t.buffers;
            return s.unshift(r), s
        }
    };
    n($l, "Encoder");
    var ho = class extends ue {
        constructor(e) {
            super(), this.reviver = e
        }
        add(e) {
            let t;
            if (typeof e == "string") {
                if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
                t = this.decodeString(e), t.type === ee.BINARY_EVENT || t.type === ee.BINARY_ACK ? (this.reconstructor = new ql(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t)
            } else if (Zn(e) || e.base64)
                if (this.reconstructor) t = this.reconstructor.takeBinaryData(e), t && (this.reconstructor = null, super.emitReserved("decoded", t));
                else throw new Error("got binary data when not reconstructing a packet");
            else throw new Error("Unknown type: " + e)
        }
        decodeString(e) {
            let t = 0,
                r = {
                    type: Number(e.charAt(0))
                };
            if (ee[r.type] === void 0) throw new Error("unknown packet type " + r.type);
            if (r.type === ee.BINARY_EVENT || r.type === ee.BINARY_ACK) {
                let o = t + 1;
                for (; e.charAt(++t) !== "-" && t != e.length;);
                let a = e.substring(o, t);
                if (a != Number(a) || e.charAt(t) !== "-") throw new Error("Illegal attachments");
                r.attachments = Number(a)
            }
            if (e.charAt(t + 1) === "/") {
                let o = t + 1;
                for (; ++t && !(e.charAt(t) === "," || t === e.length););
                r.nsp = e.substring(o, t)
            } else r.nsp = "/";
            let s = e.charAt(t + 1);
            if (s !== "" && Number(s) == s) {
                let o = t + 1;
                for (; ++t;) {
                    let a = e.charAt(t);
                    if (a == null || Number(a) != a) {
                        --t;
                        break
                    }
                    if (t === e.length) break
                }
                r.id = Number(e.substring(o, t + 1))
            }
            if (e.charAt(++t)) {
                let o = this.tryParse(e.substr(t));
                if (ho.isPayloadValid(r.type, o)) r.data = o;
                else throw new Error("invalid payload")
            }
            return r
        }
        tryParse(e) {
            try {
                return JSON.parse(e, this.reviver)
            } catch {
                return !1
            }
        }
        static isPayloadValid(e, t) {
            switch (e) {
                case ee.CONNECT:
                    return typeof t == "object";
                case ee.DISCONNECT:
                    return t === void 0;
                case ee.CONNECT_ERROR:
                    return typeof t == "string" || typeof t == "object";
                case ee.EVENT:
                case ee.BINARY_EVENT:
                    return Array.isArray(t) && t.length > 0;
                case ee.ACK:
                case ee.BINARY_ACK:
                    return Array.isArray(t)
            }
        }
        destroy() {
            this.reconstructor && this.reconstructor.finishedReconstruction()
        }
    };
    n(ho, "Decoder");
    var ql = class {
        constructor(e) {
            this.packet = e, this.buffers = [], this.reconPack = e
        }
        takeBinaryData(e) {
            if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
                let t = sv(this.reconPack, this.buffers);
                return this.finishedReconstruction(), t
            }
            return null
        }
        finishedReconstruction() {
            this.reconPack = null, this.buffers = []
        }
    };
    n(ql, "BinaryReconstructor");

    function St(i, e, t) {
        return i.on(e, t), n(function() {
            i.off(e, t)
        }, "subDestroy")
    }
    n(St, "on");
    var cP = Object.freeze({
            connect: 1,
            connect_error: 1,
            disconnect: 1,
            disconnecting: 1,
            newListener: 1,
            removeListener: 1
        }),
        gs = class extends ue {
            constructor(e, t, r) {
                super(), this.connected = !1, this.receiveBuffer = [], this.sendBuffer = [], this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, r && r.auth && (this.auth = r.auth), this.io._autoConnect && this.open()
            }
            get disconnected() {
                return !this.connected
            }
            subEvents() {
                if (this.subs) return;
                let e = this.io;
                this.subs = [St(e, "open", this.onopen.bind(this)), St(e, "packet", this.onpacket.bind(this)), St(e, "error", this.onerror.bind(this)), St(e, "close", this.onclose.bind(this))]
            }
            get active() {
                return !!this.subs
            }
            connect() {
                return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this)
            }
            open() {
                return this.connect()
            }
            send(...e) {
                return e.unshift("message"), this.emit.apply(this, e), this
            }
            emit(e, ...t) {
                if (cP.hasOwnProperty(e)) throw new Error('"' + e + '" is a reserved event name');
                t.unshift(e);
                let r = {
                    type: ee.EVENT,
                    data: t
                };
                if (r.options = {}, r.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
                    let a = this.ids++,
                        l = t.pop();
                    this._registerAckCallback(a, l), r.id = a
                }
                let s = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                return this.flags.volatile && (!s || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(r), this.packet(r)) : this.sendBuffer.push(r)), this.flags = {}, this
            }
            _registerAckCallback(e, t) {
                let r = this.flags.timeout;
                if (r === void 0) {
                    this.acks[e] = t;
                    return
                }
                let s = this.io.setTimeoutFn(() => {
                    delete this.acks[e];
                    for (let o = 0; o < this.sendBuffer.length; o++) this.sendBuffer[o].id === e && this.sendBuffer.splice(o, 1);
                    t.call(this, new Error("operation has timed out"))
                }, r);
                this.acks[e] = (...o) => {
                    this.io.clearTimeoutFn(s), t.apply(this, [null, ...o])
                }
            }
            packet(e) {
                e.nsp = this.nsp, this.io._packet(e)
            }
            onopen() {
                typeof this.auth == "function" ? this.auth(e => {
                    this.packet({
                        type: ee.CONNECT,
                        data: e
                    })
                }) : this.packet({
                    type: ee.CONNECT,
                    data: this.auth
                })
            }
            onerror(e) {
                this.connected || this.emitReserved("connect_error", e)
            }
            onclose(e, t) {
                this.connected = !1, delete this.id, this.emitReserved("disconnect", e, t)
            }
            onpacket(e) {
                if (e.nsp === this.nsp) switch (e.type) {
                    case ee.CONNECT:
                        if (e.data && e.data.sid) {
                            let s = e.data.sid;
                            this.onconnect(s)
                        } else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                        break;
                    case ee.EVENT:
                    case ee.BINARY_EVENT:
                        this.onevent(e);
                        break;
                    case ee.ACK:
                    case ee.BINARY_ACK:
                        this.onack(e);
                        break;
                    case ee.DISCONNECT:
                        this.ondisconnect();
                        break;
                    case ee.CONNECT_ERROR:
                        this.destroy();
                        let r = new Error(e.data.message);
                        r.data = e.data.data, this.emitReserved("connect_error", r);
                        break
                }
            }
            onevent(e) {
                let t = e.data || [];
                e.id != null && t.push(this.ack(e.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t))
            }
            emitEvent(e) {
                if (this._anyListeners && this._anyListeners.length) {
                    let t = this._anyListeners.slice();
                    for (let r of t) r.apply(this, e)
                }
                super.emit.apply(this, e)
            }
            ack(e) {
                let t = this,
                    r = !1;
                return function(...s) {
                    r || (r = !0, t.packet({
                        type: ee.ACK,
                        id: e,
                        data: s
                    }))
                }
            }
            onack(e) {
                let t = this.acks[e.id];
                typeof t == "function" && (t.apply(this, e.data), delete this.acks[e.id])
            }
            onconnect(e) {
                this.id = e, this.connected = !0, this.emitBuffered(), this.emitReserved("connect")
            }
            emitBuffered() {
                this.receiveBuffer.forEach(e => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach(e => {
                    this.notifyOutgoingListeners(e), this.packet(e)
                }), this.sendBuffer = []
            }
            ondisconnect() {
                this.destroy(), this.onclose("io server disconnect")
            }
            destroy() {
                this.subs && (this.subs.forEach(e => e()), this.subs = void 0), this.io._destroy(this)
            }
            disconnect() {
                return this.connected && this.packet({
                    type: ee.DISCONNECT
                }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
            }
            close() {
                return this.disconnect()
            }
            compress(e) {
                return this.flags.compress = e, this
            }
            get volatile() {
                return this.flags.volatile = !0, this
            }
            timeout(e) {
                return this.flags.timeout = e, this
            }
            onAny(e) {
                return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this
            }
            prependAny(e) {
                return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this
            }
            offAny(e) {
                if (!this._anyListeners) return this;
                if (e) {
                    let t = this._anyListeners;
                    for (let r = 0; r < t.length; r++)
                        if (e === t[r]) return t.splice(r, 1), this
                } else this._anyListeners = [];
                return this
            }
            listenersAny() {
                return this._anyListeners || []
            }
            onAnyOutgoing(e) {
                return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this
            }
            prependAnyOutgoing(e) {
                return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this
            }
            offAnyOutgoing(e) {
                if (!this._anyOutgoingListeners) return this;
                if (e) {
                    let t = this._anyOutgoingListeners;
                    for (let r = 0; r < t.length; r++)
                        if (e === t[r]) return t.splice(r, 1), this
                } else this._anyOutgoingListeners = [];
                return this
            }
            listenersAnyOutgoing() {
                return this._anyOutgoingListeners || []
            }
            notifyOutgoingListeners(e) {
                if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
                    let t = this._anyOutgoingListeners.slice();
                    for (let r of t) r.apply(this, e.data)
                }
            }
        };
    n(gs, "Socket");

    function ys(i) {
        i = i || {}, this.ms = i.min || 100, this.max = i.max || 1e4, this.factor = i.factor || 2, this.jitter = i.jitter > 0 && i.jitter <= 1 ? i.jitter : 0, this.attempts = 0
    }
    n(ys, "Backoff");
    ys.prototype.duration = function() {
        var i = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var e = Math.random(),
                t = Math.floor(e * this.jitter * i);
            i = (Math.floor(e * 10) & 1) == 0 ? i - t : i + t
        }
        return Math.min(i, this.max) | 0
    };
    ys.prototype.reset = function() {
        this.attempts = 0
    };
    ys.prototype.setMin = function(i) {
        this.ms = i
    };
    ys.prototype.setMax = function(i) {
        this.max = i
    };
    ys.prototype.setJitter = function(i) {
        this.jitter = i
    };
    var vs = class extends ue {
        constructor(e, t) {
            var r;
            super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, Ji(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((r = t.randomizationFactor) !== null && r !== void 0 ? r : .5), this.backoff = new ys({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor()
            }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
            let s = t.parser || Jc;
            this.encoder = new s.Encoder, this.decoder = new s.Decoder, this._autoConnect = t.autoConnect !== !1, this._autoConnect && this.open()
        }
        reconnection(e) {
            return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
        }
        reconnectionAttempts(e) {
            return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this)
        }
        reconnectionDelay(e) {
            var t;
            return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (t = this.backoff) === null || t === void 0 || t.setMin(e), this)
        }
        randomizationFactor(e) {
            var t;
            return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (t = this.backoff) === null || t === void 0 || t.setJitter(e), this)
        }
        reconnectionDelayMax(e) {
            var t;
            return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (t = this.backoff) === null || t === void 0 || t.setMax(e), this)
        }
        timeout(e) {
            return arguments.length ? (this._timeout = e, this) : this._timeout
        }
        maybeReconnectOnOpen() {
            !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
        }
        open(e) {
            if (~this._readyState.indexOf("open")) return this;
            this.engine = new ht(this.uri, this.opts);
            let t = this.engine,
                r = this;
            this._readyState = "opening", this.skipReconnect = !1;
            let s = St(t, "open", function() {
                    r.onopen(), e && e()
                }),
                o = St(t, "error", a => {
                    r.cleanup(), r._readyState = "closed", this.emitReserved("error", a), e ? e(a) : r.maybeReconnectOnOpen()
                });
            if (this._timeout !== !1) {
                let a = this._timeout;
                a === 0 && s();
                let l = this.setTimeoutFn(() => {
                    s(), t.close(), t.emit("error", new Error("timeout"))
                }, a);
                this.opts.autoUnref && l.unref(), this.subs.push(n(function() {
                    clearTimeout(l)
                }, "subDestroy"))
            }
            return this.subs.push(s), this.subs.push(o), this
        }
        connect(e) {
            return this.open(e)
        }
        onopen() {
            this.cleanup(), this._readyState = "open", this.emitReserved("open");
            let e = this.engine;
            this.subs.push(St(e, "ping", this.onping.bind(this)), St(e, "data", this.ondata.bind(this)), St(e, "error", this.onerror.bind(this)), St(e, "close", this.onclose.bind(this)), St(this.decoder, "decoded", this.ondecoded.bind(this)))
        }
        onping() {
            this.emitReserved("ping")
        }
        ondata(e) {
            this.decoder.add(e)
        }
        ondecoded(e) {
            this.emitReserved("packet", e)
        }
        onerror(e) {
            this.emitReserved("error", e)
        }
        socket(e, t) {
            let r = this.nsps[e];
            return r || (r = new gs(this, e, t), this.nsps[e] = r), r
        }
        _destroy(e) {
            let t = Object.keys(this.nsps);
            for (let r of t)
                if (this.nsps[r].active) return;
            this._close()
        }
        _packet(e) {
            let t = this.encoder.encode(e);
            for (let r = 0; r < t.length; r++) this.engine.write(t[r], e.options)
        }
        cleanup() {
            this.subs.forEach(e => e()), this.subs.length = 0, this.decoder.destroy()
        }
        _close() {
            this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close()
        }
        disconnect() {
            return this._close()
        }
        onclose(e, t) {
            this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, t), this._reconnection && !this.skipReconnect && this.reconnect()
        }
        reconnect() {
            if (this._reconnecting || this.skipReconnect) return this;
            let e = this;
            if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
            else {
                let t = this.backoff.duration();
                this._reconnecting = !0;
                let r = this.setTimeoutFn(() => {
                    e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open(s => {
                        s ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", s)) : e.onreconnect()
                    }))
                }, t);
                this.opts.autoUnref && r.unref(), this.subs.push(n(function() {
                    clearTimeout(r)
                }, "subDestroy"))
            }
        }
        onreconnect() {
            let e = this.backoff.attempts;
            this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e)
        }
    };
    n(vs, "Manager");
    var ea = {};

    function ta(i, e) {
        typeof i == "object" && (e = i, i = void 0), e = e || {};
        let t = tv(i, e.path || "/socket.io"),
            r = t.source,
            s = t.id,
            o = t.path,
            a = ea[s] && o in ea[s].nsps,
            l = e.forceNew || e["force new connection"] || e.multiplex === !1 || a,
            h;
        return l ? h = new vs(r, e) : (ea[s] || (ea[s] = new vs(r, e)), h = ea[s]), t.query && !e.query && (e.query = t.queryKey), h.socket(t.path, e)
    }
    n(ta, "lookup");
    Object.assign(ta, {
        Manager: vs,
        Socket: gs,
        io: ta,
        connect: ta
    });

    function Qc(i) {
        let e = /^\w+:\/\//.exec(i),
            t = 0;
        e && (t = e[0].length + 1);
        let r = i.indexOf("/", t);
        return r === -1 ? {
            origin: i,
            pathname: "/"
        } : {
            origin: i.slice(0, r),
            pathname: i.slice(r)
        }
    }
    n(Qc, "parseUrl");

    function Pe(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(Pe, "_classPrivateFieldLooseBase");
    var dP = 0;

    function er(i) {
        return "__private_" + dP++ + "_" + i
    }
    n(er, "_classPrivateFieldLooseKey");
    var pP = "ASSEMBLY_UPLOADING",
        id = "ASSEMBLY_EXECUTING",
        rd = "ASSEMBLY_COMPLETED",
        nv = [pP, id, rd];

    function Vl(i, e) {
        return nv.indexOf(i) >= nv.indexOf(e)
    }
    n(Vl, "isStatus");
    var ws = er("rateLimitedQueue"),
        ia = er("fetchWithNetworkError"),
        bs = er("previousFetchStatusStillPending"),
        sd = er("onFinished"),
        Zc = er("connectSocket"),
        Qi = er("onError"),
        ed = er("beginPolling"),
        Zi = er("fetchStatus"),
        td = er("diffStatus"),
        Wl = class extends av.default {
            constructor(e, t) {
                super(), Object.defineProperty(this, td, {
                    value: bP
                }), Object.defineProperty(this, Zi, {
                    value: vP
                }), Object.defineProperty(this, ed, {
                    value: yP
                }), Object.defineProperty(this, Qi, {
                    value: gP
                }), Object.defineProperty(this, Zc, {
                    value: mP
                }), Object.defineProperty(this, sd, {
                    value: fP
                }), Object.defineProperty(this, ws, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, ia, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, bs, {
                    writable: !0,
                    value: !1
                }), this.status = e, this.socket = null, this.pollInterval = null, this.closed = !1, Pe(this, ws)[ws] = t, Pe(this, ia)[ia] = t.wrapPromiseFunction(Ir)
            }
            connect() {
                Pe(this, Zc)[Zc](), Pe(this, ed)[ed]()
            }
            update() {
                return Pe(this, Zi)[Zi]({
                    diff: !0
                })
            }
            updateStatus(e) {
                Pe(this, td)[td](this.status, e), this.status = e
            }
            close() {
                this.closed = !0, this.socket && (this.socket.disconnect(), this.socket = null), clearInterval(this.pollInterval), this.pollInterval = null
            }
        };
    n(Wl, "TransloaditAssembly");

    function fP() {
        this.emit("finished"), this.close()
    }
    n(fP, "_onFinished2");

    function mP() {
        let i = Qc(this.status.websocket_url),
            e = ta(i.origin, {
                transports: ["websocket"],
                path: i.pathname
            });
        e.on("connect", () => {
            e.emit("assembly_connect", {
                id: this.status.assembly_id
            }), this.emit("connect")
        }), e.on("connect_error", () => {
            e.disconnect(), this.socket = null
        }), e.on("assembly_finished", () => {
            Pe(this, sd)[sd]()
        }), e.on("assembly_upload_finished", t => {
            this.emit("upload", t), this.status.uploads.push(t)
        }), e.on("assembly_uploading_finished", () => {
            this.emit("executing")
        }), e.on("assembly_upload_meta_data_extracted", () => {
            this.emit("metadata"), Pe(this, Zi)[Zi]({
                diff: !1
            })
        }), e.on("assembly_result_finished", (t, r) => {
            this.emit("result", t, r), this.status.results[t] || (this.status.results[t] = []), this.status.results[t].push(r)
        }), e.on("assembly_error", t => {
            Pe(this, Qi)[Qi](t), Pe(this, Zi)[Zi]({
                diff: !1
            })
        }), this.socket = e
    }
    n(mP, "_connectSocket2");

    function gP(i) {
        this.emit("error", Object.assign(new Error(i.message), i)), this.close()
    }
    n(gP, "_onError2");

    function yP() {
        this.pollInterval = setInterval(() => {
            (!this.socket || !this.socket.connected) && Pe(this, Zi)[Zi]()
        }, 2e3)
    }
    n(yP, "_beginPolling2");
    async function vP(i) {
        let {
            diff: e = !0
        } = i === void 0 ? {} : i;
        if (!(this.closed || Pe(this, ws)[ws].isPaused || Pe(this, bs)[bs])) try {
            Pe(this, bs)[bs] = !0;
            let t = await Pe(this, ia)[ia](this.status.assembly_ssl_url);
            if (Pe(this, bs)[bs] = !1, this.closed) return;
            if (t.status === 429) {
                Pe(this, ws)[ws].rateLimit(2e3);
                return
            }
            if (!t.ok) {
                Pe(this, Qi)[Qi](new Mt(t.statusText));
                return
            }
            let r = await t.json();
            if (this.closed) return;
            this.emit("status", r), e ? this.updateStatus(r) : this.status = r
        } catch (t) {
            Pe(this, Qi)[Qi](t)
        }
    }
    n(vP, "_fetchStatus2");

    function bP(i, e) {
        let t = i.ok,
            r = e.ok;
        if (e.error && !i.error) return Pe(this, Qi)[Qi](e);
        let s = Vl(r, id) && !Vl(t, id);
        s && this.emit("executing"), Object.keys(e.uploads).filter(o => !qe(i.uploads, o)).forEach(o => {
            this.emit("upload", e.uploads[o])
        }), s && this.emit("metadata"), Object.keys(e.results).forEach(o => {
            let a = e.results[o],
                l = i.results[o];
            a.filter(h => !l || !l.some(c => c.id === h.id)).forEach(h => {
                this.emit("result", o, h)
            })
        }), Vl(r, rd) && !Vl(t, rd) && this.emit("finished")
    }
    n(bP, "_diffStatus2");
    var od = Wl;

    function ge(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(ge, "_classPrivateFieldLooseBase");
    var wP = 0;

    function Kl(i) {
        return "__private_" + wP++ + "_" + i
    }
    n(Kl, "_classPrivateFieldLooseKey");
    var lv = "/assemblies",
        it = Kl("headers"),
        ra = Kl("fetchWithNetworkError"),
        je = Kl("fetchJSON"),
        _t = Kl("reportError"),
        co = class {
            constructor(e) {
                e === void 0 && (e = {}), Object.defineProperty(this, je, {
                    value: SP
                }), Object.defineProperty(this, it, {
                    writable: !0,
                    value: {}
                }), Object.defineProperty(this, ra, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, _t, {
                    writable: !0,
                    value: (t, r) => {
                        if (this.opts.errorReporting === !1) throw t;
                        let s = {
                            type: r.type
                        };
                        throw r.assembly && (s.assembly = r.assembly.assembly_id, s.instance = r.assembly.instance), r.url && (s.endpoint = r.url), this.submitError(t, s).catch(() => {}), t
                    }
                }), this.opts = e, this.opts.client != null && (ge(this, it)[it]["Transloadit-Client"] = this.opts.client), ge(this, ra)[ra] = this.opts.rateLimitedQueue.wrapPromiseFunction(Ir)
            }
            createAssembly(e) {
                let {
                    params: t,
                    fields: r,
                    signature: s,
                    expectedFiles: o
                } = e, a = new FormData;
                a.append("params", typeof t == "string" ? t : JSON.stringify(t)), s && a.append("signature", s), Object.keys(r).forEach(h => {
                    a.append(h, r[h])
                }), a.append("num_expected_upload_files", o);
                let l = new URL(lv, `${this.opts.service}`).href;
                return ge(this, je)[je](l, {
                    method: "post",
                    headers: ge(this, it)[it],
                    body: a
                }).catch(h => ge(this, _t)[_t](h, {
                    url: l,
                    type: "API_ERROR"
                }))
            }
            reserveFile(e, t) {
                let r = encodeURIComponent(t.size),
                    s = `${e.assembly_ssl_url}/reserve_file?size=${r}`;
                return ge(this, je)[je](s, {
                    method: "post",
                    headers: ge(this, it)[it]
                }).catch(o => ge(this, _t)[_t](o, {
                    assembly: e,
                    file: t,
                    url: s,
                    type: "API_ERROR"
                }))
            }
            addFile(e, t) {
                if (!t.uploadURL) return Promise.reject(new Error("File does not have an `uploadURL`."));
                let r = encodeURIComponent(t.size),
                    s = encodeURIComponent(t.uploadURL),
                    o = encodeURIComponent(t.name),
                    l = `size=${r}&filename=${o}&fieldname=file&s3Url=${s}`,
                    h = `${e.assembly_ssl_url}/add_file?${l}`;
                return ge(this, je)[je](h, {
                    method: "post",
                    headers: ge(this, it)[it]
                }).catch(c => ge(this, _t)[_t](c, {
                    assembly: e,
                    file: t,
                    url: h,
                    type: "API_ERROR"
                }))
            }
            updateNumberOfFilesInAssembly(e, t) {
                let r = new URL(e.assembly_ssl_url);
                r.pathname = "/update_assemblies";
                let s = JSON.stringify({
                    assembly_updates: [{
                        assembly_id: e.assembly_id,
                        num_expected_upload_files: t
                    }]
                });
                return ge(this, je)[je](r, {
                    method: "post",
                    headers: ge(this, it)[it],
                    body: s
                }).catch(o => ge(this, _t)[_t](o, {
                    url: r,
                    type: "API_ERROR"
                }))
            }
            cancelAssembly(e) {
                let t = e.assembly_ssl_url;
                return ge(this, je)[je](t, {
                    method: "delete",
                    headers: ge(this, it)[it]
                }).catch(r => ge(this, _t)[_t](r, {
                    url: t,
                    type: "API_ERROR"
                }))
            }
            getAssemblyStatus(e) {
                return ge(this, je)[je](e, {
                    headers: ge(this, it)[it]
                }).catch(t => ge(this, _t)[_t](t, {
                    url: e,
                    type: "STATUS_ERROR"
                }))
            }
            submitError(e, t) {
                let {
                    endpoint: r,
                    instance: s,
                    assembly: o
                } = t === void 0 ? {} : t, a = e.details ? `${e.message} (${e.details})` : e.message;
                return ge(this, je)[je]("https://transloaditstatus.com/client_error", {
                    method: "post",
                    body: JSON.stringify({
                        endpoint: r,
                        instance: s,
                        assembly_id: o,
                        agent: typeof navigator < "u" ? navigator.userAgent : "",
                        client: this.opts.client,
                        error: a
                    })
                })
            }
        };
    n(co, "Client");

    function SP() {
        for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++) e[t] = arguments[t];
        return ge(this, ra)[ra](...e).then(r => {
            if (r.status === 429) return this.opts.rateLimitedQueue.rateLimit(2e3), ge(this, je)[je](...e);
            if (!r.ok) {
                let s = new Error(r.statusText);
                return s.statusCode = r.status, `${e[0]}`.endsWith(lv) ? r.json().then(o => {
                    if (!o.error) throw s;
                    let a = new Error(o.error);
                    throw a.details = o.message, a.assembly = o, o.assembly_id && (a.details += ` Assembly ID: ${o.assembly_id}`), a
                }, o => {
                    throw o.cause = s, o
                }) : Promise.reject(s)
            }
            return r.json()
        })
    }
    n(SP, "_fetchJSON2");

    function nd(i) {
        if (i == null) throw new Error("Transloadit: The `params` option is required.");
        if (typeof i == "string") try {
            i = JSON.parse(i)
        } catch (e) {
            throw new Zt("Transloadit: The `params` option is a malformed JSON string.", {
                cause: e
            })
        }
        if (!i.auth || !i.auth.key) throw new Error("Transloadit: The `params.auth.key` option is required. You can find your Transloadit API key at https://transloadit.com/c/template-credentials")
    }
    n(nd, "validateParams");

    function _P(i) {
        let e = Object.create(null);
        for (let {
            fileIDs: t,
            options: r
        } of i.filter(Boolean)) {
            let s = JSON.stringify(r);
            s in e ? e[s].fileIDArrays.push(t) : e[s] = {
                options: r,
                fileIDArrays: [t]
            }
        }
        return Object.values(e).map(t => {
            let {
                options: r,
                fileIDArrays: s
            } = t;
            return {
                options: r,
                fileIDs: s.flat(1)
            }
        })
    }
    n(_P, "dedupe");
    async function uv(i, e) {
        let t = typeof e.assemblyOptions == "function" ? await e.assemblyOptions(i, e) : e.assemblyOptions;
        return nd(t.params), t
    }
    n(uv, "getAssemblyOptions");

    function PP(i, e) {
        let {
            fields: t
        } = e;
        return t == null ? {} : Array.isArray(t) ? Object.fromEntries(t.map(r => [r, i.meta[r]])) : t
    }
    n(PP, "getFields");
    var Gl = class {
        constructor(e, t) {
            this.files = e, this.opts = t
        }
        async build() {
            let e = this.opts;
            if (this.files.length > 0) return Promise.all(this.files.map(async t => {
                if (t == null) return;
                let r = await uv(t, e);
                if (t != null) return r.fields = PP(t, r), {
                    fileIDs: [t.id],
                    options: r
                }
            })).then(_P);
            if (e.alwaysRunAssembly) {
                let t = await uv(null, e);
                return [{
                    fileIDs: this.files.map(r => r.id),
                    options: t
                }]
            }
            return []
        }
    };
    n(Gl, "AssemblyOptions");
    var hv = Gl;
    var cv = oe(qc(), 1);

    function X(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(X, "_classPrivateFieldLooseBase");
    var xP = 0;

    function Pt(i) {
        return "__private_" + xP++ + "_" + i
    }
    n(Pt, "_classPrivateFieldLooseKey");
    var sa = Pt("assemblyIDs"),
        ad = Pt("reject"),
        _s = Pt("remaining"),
        oa = Pt("resolve"),
        he = Pt("uppy"),
        tr = Pt("watching"),
        na = Pt("onAssemblyComplete"),
        aa = Pt("onAssemblyCancel"),
        Ps = Pt("onAssemblyError"),
        la = Pt("onImportError"),
        Ss = Pt("checkAllComplete"),
        ud = Pt("removeListeners"),
        ld = Pt("addListeners"),
        Xl = class extends cv.default {
            constructor(e, t) {
                super(), Object.defineProperty(this, ld, {
                    value: RP
                }), Object.defineProperty(this, ud, {
                    value: OP
                }), Object.defineProperty(this, Ss, {
                    value: EP
                }), Object.defineProperty(this, tr, {
                    value: FP
                }), Object.defineProperty(this, sa, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, ad, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, _s, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, oa, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, he, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, na, {
                    writable: !0,
                    value: r => {
                        !X(this, tr)[tr](r.assembly_id) || (X(this, he)[he].log(`[Transloadit] AssemblyWatcher: Got Assembly finish ${r.assembly_id}`), this.emit("assembly-complete", r.assembly_id), X(this, Ss)[Ss]())
                    }
                }), Object.defineProperty(this, aa, {
                    writable: !0,
                    value: r => {
                        !X(this, tr)[tr](r.assembly_id) || X(this, Ss)[Ss]()
                    }
                }), Object.defineProperty(this, Ps, {
                    writable: !0,
                    value: (r, s) => {
                        !X(this, tr)[tr](r.assembly_id) || (X(this, he)[he].log(`[Transloadit] AssemblyWatcher: Got Assembly error ${r.assembly_id}`), X(this, he)[he].log(s), this.emit("assembly-error", r.assembly_id, s), X(this, Ss)[Ss]())
                    }
                }), Object.defineProperty(this, la, {
                    writable: !0,
                    value: (r, s, o) => {
                        !X(this, tr)[tr](r.assembly_id) || X(this, Ps)[Ps](r, o)
                    }
                }), X(this, he)[he] = e, X(this, sa)[sa] = t, X(this, _s)[_s] = t.length, this.promise = new Promise((r, s) => {
                    X(this, oa)[oa] = r, X(this, ad)[ad] = s
                }), X(this, ld)[ld]()
            }
        };
    n(Xl, "TransloaditAssemblyWatcher");

    function FP(i) {
        return X(this, sa)[sa].indexOf(i) !== -1
    }
    n(FP, "_watching2");

    function EP() {
        X(this, _s)[_s] -= 1, X(this, _s)[_s] === 0 && (X(this, ud)[ud](), X(this, oa)[oa]())
    }
    n(EP, "_checkAllComplete2");

    function OP() {
        X(this, he)[he].off("transloadit:complete", X(this, na)[na]), X(this, he)[he].off("transloadit:assembly-cancel", X(this, aa)[aa]), X(this, he)[he].off("transloadit:assembly-error", X(this, Ps)[Ps]), X(this, he)[he].off("transloadit:import-error", X(this, la)[la])
    }
    n(OP, "_removeListeners2");

    function RP() {
        X(this, he)[he].on("transloadit:complete", X(this, na)[na]), X(this, he)[he].on("transloadit:assembly-cancel", X(this, aa)[aa]), X(this, he)[he].on("transloadit:assembly-error", X(this, Ps)[Ps]), X(this, he)[he].on("transloadit:import-error", X(this, la)[la])
    }
    n(RP, "_addListeners2");
    var dv = Xl;
    var pv = {
        strings: {
            creatingAssembly: "Preparing upload...",
            creatingAssemblyFailed: "Transloadit: Could not create Assembly",
            encoding: "Encoding..."
        }
    };

    function J(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(J, "_classPrivateFieldLooseBase");
    var CP = 0;

    function ye(i) {
        return "__private_" + CP++ + "_" + i
    }
    n(ye, "_classPrivateFieldLooseKey");
    var TP = {
            version: "3.1.1"
        },
        fv = n(i => e => {
            let t = new Zt("Failed to send error to the client", {
                cause: e
            });
            console.error(t, i)
        }, "sendErrorToConsole"),
        Sd = "https://api2.transloadit.com/companion",
        _d = /\.transloadit\.com$/,
        kP = /https?:\/\/api2(?:-\w+)?\.transloadit\.com\/companion/,
        Vt = ye("rateLimitedQueue"),
        hd = ye("getClientVersion"),
        vd = ye("attachAssemblyMetadata"),
        cd = ye("createAssembly"),
        ua = ye("createAssemblyWatcher"),
        dd = ye("shouldWaitAfterUpload"),
        pd = ye("reserveFiles"),
        ha = ye("onFileUploadURLAvailable"),
        ga = ye("findFile"),
        bd = ye("onFileUploadComplete"),
        wd = ye("onResult"),
        ma = ye("onAssemblyFinished"),
        ya = ye("cancelAssembly"),
        fd = ye("onCancelAll"),
        md = ye("getPersistentData"),
        gd = ye("onRestored"),
        ca = ye("connectAssembly"),
        da = ye("prepareUpload"),
        xs = ye("afterUpload"),
        pa = ye("closeAssemblyIfExists"),
        fa = ye("onError"),
        yd = ye("onTusError"),
        Dt = class extends ae {
            constructor(e, t) {
                var r, s, o, a;
                super(e, t), r = this, Object.defineProperty(this, ca, {
                    value: $P
                }), Object.defineProperty(this, ya, {
                    value: HP
                }), Object.defineProperty(this, ma, {
                    value: jP
                }), Object.defineProperty(this, wd, {
                    value: zP
                }), Object.defineProperty(this, bd, {
                    value: MP
                }), Object.defineProperty(this, ga, {
                    value: LP
                }), Object.defineProperty(this, pd, {
                    value: IP
                }), Object.defineProperty(this, dd, {
                    value: BP
                }), Object.defineProperty(this, ua, {
                    value: NP
                }), Object.defineProperty(this, cd, {
                    value: DP
                }), Object.defineProperty(this, vd, {
                    value: UP
                }), Object.defineProperty(this, hd, {
                    value: AP
                }), Object.defineProperty(this, Vt, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, ha, {
                    writable: !0,
                    value: h => {
                        var c;
                        let d = this.uppy.getFile(h.id);
                        if (!(d != null && (c = d.transloadit) != null && c.assembly)) return;
                        let {
                            assemblies: f
                        } = this.getPluginState(), y = f[d.transloadit.assembly];
                        this.client.addFile(y, d).catch(w => {
                            this.uppy.log(w), this.uppy.emit("transloadit:import-error", y, d.id, w)
                        })
                    }
                }), Object.defineProperty(this, fd, {
                    writable: !0,
                    value: async function(h) {
                        let {
                            reason: c
                        } = h === void 0 ? {} : h;
                        try {
                            if (c !== "user") return;
                            let {
                                uploadsAssemblies: d
                            } = r.getPluginState(), y = Object.values(d).flat(1).map(w => r.getAssembly(w));
                            await Promise.all(y.map(w => J(r, ya)[ya](w)))
                        } catch (d) {
                            r.uppy.log(d)
                        }
                    }
                }), Object.defineProperty(this, md, {
                    writable: !0,
                    value: h => {
                        let {
                            assemblies: c,
                            uploadsAssemblies: d
                        } = this.getPluginState();
                        h({
                            [this.id]: {
                                assemblies: c,
                                uploadsAssemblies: d
                            }
                        })
                    }
                }), Object.defineProperty(this, gd, {
                    writable: !0,
                    value: h => {
                        let c = h && h[this.id] ? h[this.id] : {},
                            d = c.assemblies || {},
                            f = c.uploadsAssemblies || {};
                        if (Object.keys(f).length === 0) return;
                        let y = n(R => {
                                let x = {},
                                    F = [];
                                for (let [N, H] of Object.entries(R)) {
                                    H.uploads.forEach(K => {
                                        let k = J(this, ga)[ga](K);
                                        x[K.id] = {
                                            id: k.id,
                                            assembly: N,
                                            uploadedFile: K
                                        }
                                    });
                                    let q = this.getPluginState();
                                    Object.keys(H.results).forEach(K => {
                                        for (let k of H.results[K]) {
                                            let B = q.files[k.original_id];
                                            k.localId = B ? B.id : null, F.push({
                                                id: k.id,
                                                result: k,
                                                stepName: K,
                                                assembly: N
                                            })
                                        }
                                    })
                                }
                                this.setPluginState({
                                    assemblies: R,
                                    files: x,
                                    results: F,
                                    uploadsAssemblies: f
                                })
                            }, "restoreState"),
                            w = n(() => {
                                let {
                                    assemblies: R,
                                    uploadsAssemblies: x
                                } = this.getPluginState();
                                Object.keys(x).forEach(N => {
                                    let H = x[N];
                                    J(this, ua)[ua](H, N)
                                }), Object.keys(R).forEach(N => {
                                    let H = new od(R[N], J(this, Vt)[Vt]);
                                    J(this, ca)[ca](H)
                                })
                            }, "restoreAssemblies"),
                            S = n(() => {
                                let {
                                    assemblies: R
                                } = this.getPluginState();
                                return Promise.all(Object.keys(R).map(x => this.activeAssemblies[x].update()))
                            }, "updateAssemblies");
                        this.restored = Promise.resolve().then(() => (y(d), w(), S())), this.restored.then(() => {
                            this.restored = null
                        })
                    }
                }), Object.defineProperty(this, da, {
                    writable: !0,
                    value: (h, c) => {
                        let f = h.map(R => this.uppy.getFile(R)).filter(R => R.error ? !1 : (this.uppy.emit("preprocess-progress", R, {
                                mode: "indeterminate",
                                message: this.i18n("creatingAssembly")
                            }), !0)),
                            y = n(async R => {
                                let {
                                    fileIDs: x,
                                    options: F
                                } = R;
                                try {
                                    let N = await J(this, cd)[cd](x, c, F);
                                    return this.opts.importFromUploadURLs && await J(this, pd)[pd](N, x), x.forEach(H => {
                                        let q = this.uppy.getFile(H);
                                        this.uppy.emit("preprocess-complete", q)
                                    }), N
                                } catch (N) {
                                    throw x.forEach(H => {
                                        let q = this.uppy.getFile(H);
                                        this.uppy.emit("preprocess-complete", q), this.uppy.emit("upload-error", q, N)
                                    }), N
                                }
                            }, "createAssembly"),
                            {
                                uploadsAssemblies: w
                            } = this.getPluginState();
                        return this.setPluginState({
                            uploadsAssemblies: { ...w,
                                [c]: []
                            }
                        }), new hv(f, this.opts).build().then(R => Promise.all(R.map(y))).then(R => {
                            let x = R.filter(Boolean),
                                F = x.map(N => N.status.assembly_id);
                            return J(this, ua)[ua](F, c), Promise.all(x.map(N => J(this, ca)[ca](N)))
                        }).catch(R => {
                            throw f.forEach(x => {
                                this.uppy.emit("preprocess-complete", x), this.uppy.emit("upload-error", x, R)
                            }), R
                        })
                    }
                }), Object.defineProperty(this, xs, {
                    writable: !0,
                    value: (h, c) => {
                        let d = h.map(F => this.uppy.getFile(F)),
                            f = d.filter(F => !F.error).map(F => F.id),
                            y = this.getPluginState();
                        if (this.restored) return this.restored.then(() => J(this, xs)[xs](f, c));
                        let w = y.uploadsAssemblies[c],
                            S = n(() => {
                                w.forEach(F => {
                                    this.activeAssemblies[F].close(), delete this.activeAssemblies[F]
                                })
                            }, "closeSocketConnections");
                        if (!J(this, dd)[dd]()) {
                            S();
                            let F = w.map(N => this.getAssembly(N));
                            return this.uppy.addResultData(c, {
                                transloadit: F
                            }), Promise.resolve()
                        }
                        return w.length === 0 ? (this.uppy.addResultData(c, {
                            transloadit: []
                        }), Promise.resolve()) : (d.filter(F => !qe(this.completedFiles, F.id)).forEach(F => {
                            this.uppy.emit("postprocess-progress", F, {
                                mode: "indeterminate",
                                message: this.i18n("encoding")
                            })
                        }), this.assemblyWatchers[c].promise.then(() => {
                            S();
                            let F = w.map(H => this.getAssembly(H)),
                                N = { ...this.getPluginState().uploadsAssemblies
                                };
                            delete N[c], this.setPluginState({
                                uploadsAssemblies: N
                            }), this.uppy.addResultData(c, {
                                transloadit: F
                            })
                        }))
                    }
                }), Object.defineProperty(this, pa, {
                    writable: !0,
                    value: h => {
                        var c;
                        (c = this.activeAssemblies[h]) == null || c.close()
                    }
                }), Object.defineProperty(this, fa, {
                    writable: !0,
                    value: function(h, c) {
                        h === void 0 && (h = null);
                        let f = r.getPluginState().uploadsAssemblies[c];
                        f ?.forEach(J(r, pa)[pa]), r.client.submitError(h).catch(fv(h))
                    }
                }), Object.defineProperty(this, yd, {
                    writable: !0,
                    value: (h, c) => {
                        var d, f;
                        if (J(this, pa)[pa](h == null || (d = h.transloadit) == null ? void 0 : d.assembly), c != null && (f = c.message) != null && f.startsWith("tus: ")) {
                            var y, w;
                            let S = (y = c.originalRequest) == null || (w = y.getUnderlyingObject()) == null ? void 0 : w.responseURL;
                            this.client.submitError(c, {
                                endpoint: S,
                                type: "TUS_ERROR"
                            }).catch(fv(c))
                        }
                    }
                }), this.type = "uploader", this.id = this.opts.id || "Transloadit", this.title = "Transloadit", this.defaultLocale = pv;
                let l = {
                    service: "https://api2.transloadit.com",
                    errorReporting: !0,
                    waitForEncoding: !1,
                    waitForMetadata: !1,
                    alwaysRunAssembly: !1,
                    importFromUploadURLs: !1,
                    signature: null,
                    params: null,
                    fields: null,
                    getAssemblyOptions: null,
                    limit: 20,
                    retryDelays: [7e3, 1e4, 15e3, 2e4]
                };
                this.opts = { ...l,
                    ...t
                }, (o = (s = this.opts).assemblyOptions) != null || (s.assemblyOptions = (a = this.opts.getAssemblyOptions) != null ? a : {
                    params: this.opts.params,
                    signature: this.opts.signature,
                    fields: this.opts.fields
                }), t ?.params != null && t.getAssemblyOptions == null && t.assemblyOptions == null && nd(this.opts.assemblyOptions.params), J(this, Vt)[Vt] = new Je(this.opts.limit), this.i18nInit(), this.client = new co({
                    service: this.opts.service,
                    client: J(this, hd)[hd](),
                    errorReporting: this.opts.errorReporting,
                    rateLimitedQueue: J(this, Vt)[Vt]
                }), this.activeAssemblies = {}, this.assemblyWatchers = {}, this.completedFiles = Object.create(null)
            }
            install() {
                this.uppy.addPreProcessor(J(this, da)[da]), this.uppy.addPostProcessor(J(this, xs)[xs]), this.uppy.on("error", J(this, fa)[fa]), this.uppy.on("cancel-all", J(this, fd)[fd]), this.uppy.on("upload-error", J(this, yd)[yd]), this.opts.importFromUploadURLs ? this.uppy.on("upload-success", J(this, ha)[ha]) : this.uppy.use(wi, {
                    storeFingerprintForResuming: !1,
                    useFastRemoteRetry: !1,
                    allowedMetaFields: ["assembly_url", "filename", "fieldname"],
                    limit: this.opts.limit,
                    rateLimitedQueue: J(this, Vt)[Vt],
                    retryDelays: this.opts.retryDelays
                }), this.uppy.on("restore:get-data", J(this, md)[md]), this.uppy.on("restored", J(this, gd)[gd]), this.setPluginState({
                    assemblies: {},
                    uploadsAssemblies: {},
                    files: {},
                    results: []
                });
                let {
                    capabilities: e
                } = this.uppy.getState();
                this.uppy.setState({
                    capabilities: { ...e,
                        individualCancellation: !1
                    }
                })
            }
            uninstall() {
                this.uppy.removePreProcessor(J(this, da)[da]), this.uppy.removePostProcessor(J(this, xs)[xs]), this.uppy.off("error", J(this, fa)[fa]), this.opts.importFromUploadURLs && this.uppy.off("upload-success", J(this, ha)[ha]);
                let {
                    capabilities: e
                } = this.uppy.getState();
                this.uppy.setState({
                    capabilities: { ...e,
                        individualCancellation: !0
                    }
                })
            }
            getAssembly(e) {
                let {
                    assemblies: t
                } = this.getPluginState();
                return t[e]
            }
            getAssemblyFiles(e) {
                return this.uppy.getFiles().filter(t => {
                    var r;
                    return (t == null || (r = t.transloadit) == null ? void 0 : r.assembly) === e
                })
            }
        };
    n(Dt, "Transloadit");

    function AP() {
        let i = [`uppy-core:${this.uppy.constructor.VERSION}`, `uppy-transloadit:${this.constructor.VERSION}`, `uppy-tus:${wi.VERSION}`],
            e = n((t, r) => {
                let s = this.uppy.getPlugin(t);
                s && i.push(`${r}:${s.constructor.VERSION}`)
            }, "addPluginVersion");
        return this.opts.importFromUploadURLs && (e("XHRUpload", "uppy-xhr-upload"), e("AwsS3", "uppy-aws-s3"), e("AwsS3Multipart", "uppy-aws-s3-multipart")), e("Dropbox", "uppy-dropbox"), e("Box", "uppy-box"), e("Facebook", "uppy-facebook"), e("GoogleDrive", "uppy-google-drive"), e("Instagram", "uppy-instagram"), e("OneDrive", "uppy-onedrive"), e("Zoom", "uppy-zoom"), e("Url", "uppy-url"), i.join(",")
    }
    n(AP, "_getClientVersion2");

    function UP(i, e) {
        let t = { ...i.meta,
                assembly_url: e.assembly_url,
                filename: i.name,
                fieldname: "file"
            },
            r = { ...i.tus,
                endpoint: e.tus_url,
                addRequestId: !0
            },
            {
                remote: s
            } = i;
        if (i.remote && kP.test(i.remote.companionUrl)) {
            let a = e.companion_url.replace(/\/$/, ""),
                l = i.remote.url.replace(i.remote.companionUrl, "").replace(/^\//, "");
            s = { ...i.remote,
                companionUrl: a,
                url: `${a}/${l}`
            }
        }
        let o = { ...i,
            transloadit: {
                assembly: e.assembly_id
            }
        };
        return this.opts.importFromUploadURLs || Object.assign(o, {
            meta: t,
            tus: r,
            remote: s
        }), o
    }
    n(UP, "_attachAssemblyMetadata2");

    function DP(i, e, t) {
        return this.uppy.log("[Transloadit] Create Assembly"), this.client.createAssembly({
            params: t.params,
            fields: t.fields,
            expectedFiles: i.length,
            signature: t.signature
        }).then(async r => {
            let s = this.uppy.getFiles().filter(y => {
                let {
                    id: w
                } = y;
                return i.includes(w)
            });
            if (s.length !== i.length) {
                if (s.length === 0) return await this.client.cancelAssembly(r), null;
                await this.client.updateNumberOfFilesInAssembly(r, s.length)
            }
            let o = new od(r, J(this, Vt)[Vt]),
                {
                    status: a
                } = o,
                l = a.assembly_id,
                {
                    assemblies: h,
                    uploadsAssemblies: c
                } = this.getPluginState();
            this.setPluginState({
                assemblies: { ...h,
                    [l]: a
                },
                uploadsAssemblies: { ...c,
                    [e]: [...c[e], l]
                }
            });
            let d = {};
            s.forEach(y => {
                d[y.id] = J(this, vd)[vd](y, a)
            }), this.uppy.setState({
                files: { ...this.uppy.getState().files,
                    ...d
                }
            });
            let f = n((y, w) => {
                if (w === "cancel-all") o.close(), this.uppy.off(f);
                else if (y.id in d) {
                    delete d[y.id];
                    let S = Object.keys(d).length;
                    S === 0 ? (o.close(), J(this, ya)[ya](r).catch(() => {}), this.uppy.off(f)) : this.client.updateNumberOfFilesInAssembly(r, S).catch(() => {})
                }
            }, "fileRemovedHandler");
            return this.uppy.on("file-removed", f), this.uppy.emit("transloadit:assembly-created", a, i), this.uppy.log(`[Transloadit] Created Assembly ${l}`), o
        }).catch(r => {
            let s = new Zt(`${this.i18n("creatingAssemblyFailed")}: ${r.message}`, {
                cause: r
            });
            throw "details" in r && (s.details = r.details), "assembly" in r && (s.assembly = r.assembly), s
        })
    }
    n(DP, "_createAssembly2");

    function NP(i, e) {
        let t = new dv(this.uppy, i);
        t.on("assembly-complete", r => {
            this.getAssemblyFiles(r).forEach(o => {
                this.completedFiles[o.id] = !0, this.uppy.emit("postprocess-complete", o)
            })
        }), t.on("assembly-error", (r, s) => {
            this.getAssemblyFiles(r).forEach(a => {
                this.uppy.emit("upload-error", a, s), this.uppy.emit("postprocess-complete", a)
            })
        }), this.assemblyWatchers[e] = t
    }
    n(NP, "_createAssemblyWatcher2");

    function BP() {
        return this.opts.waitForEncoding || this.opts.waitForMetadata
    }
    n(BP, "_shouldWaitAfterUpload2");

    function IP(i, e) {
        return Promise.all(e.map(t => {
            let r = this.uppy.getFile(t);
            return this.client.reserveFile(i.status, r)
        }))
    }
    n(IP, "_reserveFiles2");

    function LP(i) {
        let e = this.uppy.getFiles();
        for (let t = 0; t < e.length; t++) {
            let r = e[t];
            if (r.uploadURL === i.tus_upload_url || r.tus && r.tus.uploadUrl === i.tus_upload_url || !i.is_tus_file && r.name === i.name && r.size === i.size) return r
        }
    }
    n(LP, "_findFile2");

    function MP(i, e) {
        let t = this.getPluginState(),
            r = J(this, ga)[ga](e);
        if (!r) {
            this.uppy.log("[Transloadit] Couldn\u2019t file the file, it was likely removed in the process");
            return
        }
        this.setPluginState({
            files: { ...t.files,
                [e.id]: {
                    assembly: i,
                    id: r.id,
                    uploadedFile: e
                }
            }
        }), this.uppy.emit("transloadit:upload", e, this.getAssembly(i))
    }
    n(MP, "_onFileUploadComplete2");

    function zP(i, e, t) {
        let r = this.getPluginState(),
            s = r.files[t.original_id];
        t.localId = s ? s.id : null;
        let o = {
            result: t,
            stepName: e,
            id: t.id,
            assembly: i
        };
        this.setPluginState({
            results: [...r.results, o]
        }), this.uppy.emit("transloadit:result", e, t, this.getAssembly(i))
    }
    n(zP, "_onResult2");

    function jP(i) {
        let e = i.assembly_ssl_url;
        this.client.getAssemblyStatus(e).then(t => {
            let r = t.assembly_id,
                s = this.getPluginState();
            this.setPluginState({
                assemblies: { ...s.assemblies,
                    [r]: t
                }
            }), this.uppy.emit("transloadit:complete", t)
        })
    }
    n(jP, "_onAssemblyFinished2");
    async function HP(i) {
        await this.client.cancelAssembly(i), this.uppy.emit("transloadit:assembly-cancelled", i)
    }
    n(HP, "_cancelAssembly2");

    function $P(i) {
        let {
            status: e
        } = i, t = e.assembly_id;
        return this.activeAssemblies[t] = i, i.on("status", r => {
            let {
                assemblies: s
            } = this.getPluginState();
            this.setPluginState({
                assemblies: { ...s,
                    [t]: r
                }
            })
        }), i.on("upload", r => {
            J(this, bd)[bd](t, r)
        }), i.on("error", r => {
            r.assembly = i.status, this.uppy.emit("transloadit:assembly-error", i.status, r)
        }), i.on("executing", () => {
            this.uppy.emit("transloadit:assembly-executing", i.status)
        }), this.opts.waitForEncoding && i.on("result", (r, s) => {
            J(this, wd)[wd](t, r, s)
        }), this.opts.waitForEncoding ? i.on("finished", () => {
            J(this, ma)[ma](i.status)
        }) : this.opts.waitForMetadata && i.on("metadata", () => {
            J(this, ma)[ma](i.status)
        }), i.ok === "ASSEMBLY_COMPLETE" || i.connect(), i
    }
    n($P, "_connectAssembly2");
    Dt.VERSION = TP.version;
    Dt.COMPANION = Sd;
    Dt.COMPANION_PATTERN = _d;
    var mv = {
        strings: {
            uploadStalled: "Upload has not made any progress for %{seconds} seconds. You may want to retry it."
        }
    };

    function Pd(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(Pd, "_classPrivateFieldLooseBase");
    var qP = 0;

    function vv(i) {
        return "__private_" + qP++ + "_" + i
    }
    n(vv, "_classPrivateFieldLooseKey");
    var VP = {
        version: "3.1.0"
    };

    function gv(i, e) {
        let t = e;
        return t || (t = new Error("Upload error")), typeof t == "string" && (t = new Error(t)), t instanceof Error || (t = Object.assign(new Error("Upload error"), {
            data: t
        })), rs(i) ? (t = new Mt(t, i), t) : (t.request = i, t)
    }
    n(gv, "buildResponseError");

    function yv(i) {
        return i.data.slice(0, i.data.size, i.meta.type)
    }
    n(yv, "setTypeInBlob");
    var va = vv("queueRequestSocketToken"),
        xd = vv("requestSocketToken"),
        Fs = class extends ae {
            constructor(e, t) {
                super(e, t), Object.defineProperty(this, va, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, xd, {
                    writable: !0,
                    value: async s => {
                        let o = this.getOptions(s),
                            a = s.remote.providerOptions.provider ? Y : le,
                            l = new a(this.uppy, s.remote.providerOptions),
                            h = Array.isArray(o.allowedMetaFields) ? o.allowedMetaFields : Object.keys(s.meta);
                        return (await l.post(s.remote.url, { ...s.remote.body,
                            protocol: "multipart",
                            endpoint: o.endpoint,
                            size: s.data.size,
                            fieldname: o.fieldName,
                            metadata: Object.fromEntries(h.map(d => [d, s.meta[d]])),
                            httpMethod: o.method,
                            useFormData: o.formData,
                            headers: o.headers
                        })).token
                    }
                }), this.type = "uploader", this.id = this.opts.id || "XHRUpload", this.title = "XHRUpload", this.defaultLocale = mv;
                let r = {
                    formData: !0,
                    fieldName: t.bundle ? "files[]" : "file",
                    method: "post",
                    allowedMetaFields: null,
                    responseUrlFieldName: "url",
                    bundle: !1,
                    headers: {},
                    timeout: 30 * 1e3,
                    limit: 5,
                    withCredentials: !1,
                    responseType: "",
                    getResponseData(s) {
                        let o = {};
                        try {
                            o = JSON.parse(s)
                        } catch (a) {
                            e.log(a)
                        }
                        return o
                    },
                    getResponseError(s, o) {
                        let a = new Error("Upload error");
                        return rs(o) && (a = new Mt(a, o)), a
                    },
                    validateStatus(s) {
                        return s >= 200 && s < 300
                    }
                };
                if (this.opts = { ...r,
                    ...t
                }, this.i18nInit(), this.handleUpload = this.handleUpload.bind(this), wr in this.opts ? this.requests = this.opts[wr] : this.requests = new Je(this.opts.limit), this.opts.bundle && !this.opts.formData) throw new Error("`opts.formData` must be true when `opts.bundle` is enabled.");
                if (t ?.allowedMetaFields === void 0 && "metaFields" in this.opts) throw new Error("The `metaFields` option has been renamed to `allowedMetaFields`.");
                this.uploaderEvents = Object.create(null), Pd(this, va)[va] = this.requests.wrapPromiseFunction(Pd(this, xd)[xd], {
                    priority: -1
                })
            }
            getOptions(e) {
                let t = this.uppy.getState().xhrUpload,
                    {
                        headers: r
                    } = this.opts,
                    s = { ...this.opts,
                        ...t || {},
                        ...e.xhrUpload || {},
                        headers: {}
                    };
                return typeof r == "function" ? s.headers = r(e) : Object.assign(s.headers, this.opts.headers), t && Object.assign(s.headers, t.headers), e.xhrUpload && Object.assign(s.headers, e.xhrUpload.headers), s
            }
            addMetadata(e, t, r) {
                (Array.isArray(r.allowedMetaFields) ? r.allowedMetaFields : Object.keys(t)).forEach(o => {
                    e.append(o, t[o])
                })
            }
            createFormDataUpload(e, t) {
                let r = new FormData;
                this.addMetadata(r, e.meta, t);
                let s = yv(e);
                return e.name ? r.append(t.fieldName, s, e.meta.name) : r.append(t.fieldName, s), r
            }
            createBundledUpload(e, t) {
                let r = new FormData,
                    {
                        meta: s
                    } = this.uppy.getState();
                return this.addMetadata(r, s, t), e.forEach(o => {
                    let a = this.getOptions(o),
                        l = yv(o);
                    o.name ? r.append(a.fieldName, l, o.name) : r.append(a.fieldName, l)
                }), r
            }
            upload(e, t, r) {
                let s = this.getOptions(e);
                return this.uppy.log(`uploading ${t} of ${r}`), new Promise((o, a) => {
                    this.uppy.emit("upload-started", e);
                    let l = s.formData ? this.createFormDataUpload(e, s) : e.data,
                        h = new XMLHttpRequest;
                    this.uploaderEvents[e.id] = new $e(this.uppy);
                    let c, d = new wn(s.timeout, () => {
                            let y = new Error(this.i18n("uploadStalled", {
                                seconds: Math.ceil(s.timeout / 1e3)
                            }));
                            this.uppy.emit("upload-stalled", y, [e])
                        }),
                        f = Ot();
                    h.upload.addEventListener("loadstart", () => {
                        this.uppy.log(`[XHRUpload] ${f} started`)
                    }), h.upload.addEventListener("progress", y => {
                        this.uppy.log(`[XHRUpload] ${f} progress: ${y.loaded} / ${y.total}`), d.progress(), y.lengthComputable && this.uppy.emit("upload-progress", e, {
                            uploader: this,
                            bytesUploaded: y.loaded,
                            bytesTotal: y.total
                        })
                    }), h.addEventListener("load", () => {
                        if (this.uppy.log(`[XHRUpload] ${f} finished`), d.done(), c.done(), this.uploaderEvents[e.id] && (this.uploaderEvents[e.id].remove(), this.uploaderEvents[e.id] = null), s.validateStatus(h.status, h.responseText, h)) {
                            let R = s.getResponseData(h.responseText, h),
                                x = R[s.responseUrlFieldName],
                                F = {
                                    status: h.status,
                                    body: R,
                                    uploadURL: x
                                };
                            return this.uppy.emit("upload-success", e, F), x && this.uppy.log(`Download ${e.name} from ${x}`), o(e)
                        }
                        let y = s.getResponseData(h.responseText, h),
                            w = gv(h, s.getResponseError(h.responseText, h)),
                            S = {
                                status: h.status,
                                body: y
                            };
                        return this.uppy.emit("upload-error", e, w, S), a(w)
                    }), h.addEventListener("error", () => {
                        this.uppy.log(`[XHRUpload] ${f} errored`), d.done(), c.done(), this.uploaderEvents[e.id] && (this.uploaderEvents[e.id].remove(), this.uploaderEvents[e.id] = null);
                        let y = gv(h, s.getResponseError(h.responseText, h));
                        return this.uppy.emit("upload-error", e, y), a(y)
                    }), h.open(s.method.toUpperCase(), s.endpoint, !0), h.withCredentials = s.withCredentials, s.responseType !== "" && (h.responseType = s.responseType), c = this.requests.run(() => {
                        this.uppy.emit("upload-started", e);
                        let y = this.getOptions(e);
                        return Object.keys(y.headers).forEach(w => {
                            h.setRequestHeader(w, y.headers[w])
                        }), h.send(l), () => {
                            d.done(), h.abort()
                        }
                    }), this.onFileRemove(e.id, () => {
                        c.abort(), a(new Error("File removed"))
                    }), this.onCancelAll(e.id, y => {
                        let {
                            reason: w
                        } = y;
                        w === "user" && c.abort(), a(new Error("Upload cancelled"))
                    })
                })
            }
            async uploadRemote(e) {
                try {
                    if (this.uppy.emit("upload-started", e), e.serverToken) return this.connectToServerSocket(e);
                    let t = await Pd(this, va)[va](e);
                    return this.uppy.getState().files[e.id] ? (this.uppy.setFileState(e.id, {
                        serverToken: t
                    }), this.connectToServerSocket(this.uppy.getFile(e.id))) : void 0
                } catch (t) {
                    throw this.uppy.emit("upload-error", e, t), t
                }
            }
            connectToServerSocket(e) {
                return new Promise((t, r) => {
                    let s = this.getOptions(e),
                        o = e.serverToken,
                        a = Wi(e.remote.companionUrl),
                        l, h = n(() => {
                            l == null && (l = new ot({
                                target: `${a}/api/${o}`
                            }), l.on("progress", f => Sr(this, f, e)), l.on("success", f => {
                                let y = s.getResponseData(f.response.responseText, f.response),
                                    w = y[s.responseUrlFieldName],
                                    S = {
                                        status: f.response.status,
                                        body: y,
                                        uploadURL: w
                                    };
                                return this.uppy.emit("upload-success", e, S), c.done(), l.close(), this.uploaderEvents[e.id] && (this.uploaderEvents[e.id].remove(), this.uploaderEvents[e.id] = null), t()
                            }), l.on("error", f => {
                                let y = f.response,
                                    w = y ? s.getResponseError(y.responseText, y) : Object.assign(new Error(f.error.message), {
                                        cause: f.error
                                    });
                                this.uppy.emit("upload-error", e, w), c.done(), this.uploaderEvents[e.id] && (this.uploaderEvents[e.id].remove(), this.uploaderEvents[e.id] = null), r(w)
                            }))
                        }, "createSocket");
                    this.uploaderEvents[e.id] = new $e(this.uppy);
                    let c = this.requests.run(() => {
                        if (e.isPaused) {
                            var f;
                            (f = l) == null || f.send("pause", {})
                        } else h();
                        return () => l.close()
                    });
                    this.onFileRemove(e.id, () => {
                        var f;
                        (f = l) == null || f.send("cancel", {}), c.abort(), t(`upload ${e.id} was removed`)
                    }), this.onCancelAll(e.id, function(f) {
                        let {
                            reason: y
                        } = f === void 0 ? {} : f;
                        if (y === "user") {
                            var w;
                            (w = l) == null || w.send("cancel", {}), c.abort()
                        }
                        t(`upload ${e.id} was canceled`)
                    });
                    let d = n(() => {
                        l == null ? c.abort() : (l.send("pause", {}), c.done()), c = this.requests.run(() => (e.isPaused || (l == null ? h() : l.send("resume", {})), () => l.close()))
                    }, "onRetryRequest");
                    this.onRetry(e.id, d), this.onRetryAll(e.id, d)
                }).catch(t => (this.uppy.emit("upload-error", e, t), Promise.reject(t)))
            }
            uploadBundle(e) {
                return new Promise((t, r) => {
                    let {
                        endpoint: s
                    } = this.opts, {
                        method: o
                    } = this.opts, a = this.uppy.getState().xhrUpload, l = this.createBundledUpload(e, { ...this.opts,
                        ...a || {}
                    }), h = new XMLHttpRequest, c = n(f => {
                        e.forEach(y => {
                            this.uppy.emit("upload-error", y, f)
                        })
                    }, "emitError"), d = new wn(this.opts.timeout, () => {
                        let f = new Error(this.i18n("uploadStalled", {
                            seconds: Math.ceil(this.opts.timeout / 1e3)
                        }));
                        this.uppy.emit("upload-stalled", f, e)
                    });
                    h.upload.addEventListener("loadstart", () => {
                        this.uppy.log("[XHRUpload] started uploading bundle"), d.progress()
                    }), h.upload.addEventListener("progress", f => {
                        d.progress(), f.lengthComputable && e.forEach(y => {
                            this.uppy.emit("upload-progress", y, {
                                uploader: this,
                                bytesUploaded: f.loaded / f.total * y.size,
                                bytesTotal: y.size
                            })
                        })
                    }), h.addEventListener("load", f => {
                        if (d.done(), this.opts.validateStatus(f.target.status, h.responseText, h)) {
                            let w = this.opts.getResponseData(h.responseText, h),
                                S = {
                                    status: f.target.status,
                                    body: w
                                };
                            return e.forEach(R => {
                                this.uppy.emit("upload-success", R, S)
                            }), t()
                        }
                        let y = this.opts.getResponseError(h.responseText, h) || new Error("Upload error");
                        return y.request = h, c(y), r(y)
                    }), h.addEventListener("error", () => {
                        d.done();
                        let f = this.opts.getResponseError(h.responseText, h) || new Error("Upload error");
                        return c(f), r(f)
                    }), this.uppy.on("cancel-all", function(f) {
                        let {
                            reason: y
                        } = f === void 0 ? {} : f;
                        y === "user" && (d.done(), h.abort())
                    }), h.open(o.toUpperCase(), s, !0), h.withCredentials = this.opts.withCredentials, this.opts.responseType !== "" && (h.responseType = this.opts.responseType), Object.keys(this.opts.headers).forEach(f => {
                        h.setRequestHeader(f, this.opts.headers[f])
                    }), h.send(l), e.forEach(f => {
                        this.uppy.emit("upload-started", f)
                    })
                })
            }
            uploadFiles(e) {
                let t = e.map((r, s) => {
                    let o = parseInt(s, 10) + 1,
                        a = e.length;
                    return r.error ? Promise.reject(new Error(r.error)) : r.isRemote ? this.uploadRemote(r, o, a) : this.upload(r, o, a)
                });
                return $n(t)
            }
            onFileRemove(e, t) {
                this.uploaderEvents[e].on("file-removed", r => {
                    e === r.id && t(r.id)
                })
            }
            onRetry(e, t) {
                this.uploaderEvents[e].on("upload-retry", r => {
                    e === r && t()
                })
            }
            onRetryAll(e, t) {
                this.uploaderEvents[e].on("retry-all", () => {
                    !this.uppy.getFile(e) || t()
                })
            }
            onCancelAll(e, t) {
                var r = this;
                this.uploaderEvents[e].on("cancel-all", function() {
                    !r.uppy.getFile(e) || t(...arguments)
                })
            }
            handleUpload(e) {
                if (e.length === 0) return this.uppy.log("[XHRUpload] No files to upload!"), Promise.resolve();
                this.opts.limit === 0 && !this.opts[wr] && this.uppy.log("[XHRUpload] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/xhr-upload/#limit-0", "warning"), this.uppy.log("[XHRUpload] Uploading...");
                let t = e.map(r => this.uppy.getFile(r));
                if (this.opts.bundle) {
                    if (t.some(s => s.isRemote)) throw new Error("Can\u2019t upload remote files when the `bundle: true` option is set");
                    if (typeof this.opts.headers == "function") throw new TypeError("`headers` may not be a function when the `bundle: true` option is set");
                    return this.uploadBundle(t)
                }
                return this.uploadFiles(t).then(() => null)
            }
            install() {
                if (this.opts.bundle) {
                    let {
                        capabilities: e
                    } = this.uppy.getState();
                    this.uppy.setState({
                        capabilities: { ...e,
                            individualCancellation: !1
                        }
                    })
                }
                this.uppy.addUploader(this.handleUpload)
            }
            uninstall() {
                if (this.opts.bundle) {
                    let {
                        capabilities: e
                    } = this.uppy.getState();
                    this.uppy.setState({
                        capabilities: { ...e,
                            individualCancellation: !0
                        }
                    })
                }
                this.uppy.removeUploader(this.handleUpload)
            }
        };
    n(Fs, "XHRUpload");
    Fs.VERSION = VP.version;
    var Ed = oe(Ca(), 1),
        Tv = oe(Ov(), 1);
    var Rv = {
        strings: {
            compressingImages: "Compressing images...",
            compressedX: "Saved %{size} by compressing images"
        }
    };

    function Cv(i, e) {
        if (!Object.prototype.hasOwnProperty.call(i, e)) throw new TypeError("attempted to use private field on non-instance");
        return i
    }
    n(Cv, "_classPrivateFieldLooseBase");
    var dx = 0;

    function px(i) {
        return "__private_" + dx++ + "_" + i
    }
    n(px, "_classPrivateFieldLooseKey");
    var wa = px("RateLimitedQueue"),
        po = class extends ae {
            constructor(e, t) {
                super(e, t), Object.defineProperty(this, wa, {
                    writable: !0,
                    value: void 0
                }), this.id = this.opts.id || "Compressor", this.type = "modifier", this.defaultLocale = Rv;
                let r = {
                    quality: .6,
                    limit: 10
                };
                this.opts = { ...r,
                    ...t
                }, Cv(this, wa)[wa] = new Je(this.opts.limit), this.i18nInit(), this.prepareUpload = this.prepareUpload.bind(this), this.compress = this.compress.bind(this)
            }
            compress(e) {
                return new Promise((t, r) => {
                    new Tv.default(e, { ...this.opts,
                        success: t,
                        error: r
                    })
                })
            }
            async prepareUpload(e) {
                let t = 0,
                    r = [],
                    s = Cv(this, wa)[wa].wrapPromiseFunction(async a => {
                        try {
                            let l = await this.compress(a.data),
                                h = a.data.size - l.size;
                            this.uppy.log(`[Image Compressor] Image ${a.id} compressed by ${(0,Ed.default)(h)}`), t += h;
                            let {
                                name: c,
                                type: d,
                                size: f
                            } = l, y = c && Oi(c).extension;
                            this.uppy.setFileState(a.id, { ...c && {
                                    name: c
                                },
                                ...y && {
                                    extension: y
                                },
                                ...d && {
                                    type: d
                                },
                                ...f && {
                                    size: f
                                },
                                data: l
                            }), this.uppy.setFileMeta(a.id, {
                                type: d
                            }), r.push(a)
                        } catch (l) {
                            this.uppy.log(`[Image Compressor] Failed to compress ${a.id}:`, "warning"), this.uppy.log(l, "warning")
                        }
                    }),
                    o = e.map(a => {
                        let l = this.uppy.getFile(a);
                        return this.uppy.emit("preprocess-progress", l, {
                            mode: "indeterminate",
                            message: this.i18n("compressingImages")
                        }), l.isRemote || (l.data.type || (l.data = l.data.slice(0, l.data.size, l.type)), !l.type.startsWith("image/")) ? Promise.resolve() : s(l)
                    });
                await Promise.all(o), this.uppy.emit("compressor:complete", r), t > 1024 && this.uppy.info(this.i18n("compressedX", {
                    size: (0, Ed.default)(t)
                }), "info");
                for (let a of e) {
                    let l = this.uppy.getFile(a);
                    this.uppy.emit("preprocess-complete", l)
                }
            }
            install() {
                this.uppy.addPreProcessor(this.prepareUpload)
            }
            uninstall() {
                this.uppy.removePreProcessor(this.prepareUpload)
            }
        };
    n(po, "Compressor");

    function Zl() {
        return Zl = Object.assign || function(i) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r])
            }
            return i
        }, Zl.apply(this, arguments)
    }
    n(Zl, "_extends");
    var fx = {
            "[object HTMLCollection]": !0,
            "[object NodeList]": !0,
            "[object RadioNodeList]": !0
        },
        mx = {
            button: !0,
            fieldset: !0,
            reset: !0,
            submit: !0
        },
        gx = {
            checkbox: !0,
            radio: !0
        },
        yx = /^\s+|\s+$/g,
        vx = Array.prototype.slice,
        kv = Object.prototype.toString;

    function eu(i, e) {
        if (!i) throw new Error("A form is required by getFormData, was given form=" + i);
        e = Zl({
            includeDisabled: !1,
            trim: !1
        }, e);
        for (var t = {}, r, s = [], o = {}, a = 0, l = i.elements.length; a < l; a++) {
            var h = i.elements[a];
            mx[h.type] || h.disabled && !e.includeDisabled || (r = h.name || h.id, r && !o[r] && (s.push(r), o[r] = !0))
        }
        for (var c = 0, d = s.length; c < d; c++) {
            r = s[c];
            var f = Uv(i, r, e);
            f != null && (t[r] = f)
        }
        return t
    }
    n(eu, "getFormData");

    function Uv(i, e, t) {
        if (!i) throw new Error("A form is required by getFieldData, was given form=" + i);
        if (!e && kv.call(e) !== "[object String]") throw new Error("A field name is required by getFieldData, was given fieldName=" + e);
        t = Zl({
            includeDisabled: !1,
            trim: !1
        }, t);
        var r = i.elements[e];
        if (!r || r.disabled && !t.includeDisabled) return null;
        if (!fx[kv.call(r)]) return Av(r, t.trim);
        for (var s = [], o = !0, a = 0, l = r.length; a < l; a++)
            if (!(r[a].disabled && !t.includeDisabled)) {
                o && r[a].type !== "radio" && (o = !1);
                var h = Av(r[a], t.trim);
                h != null && (s = s.concat(h))
            }
        return o && s.length === 1 ? s[0] : s.length > 0 ? s : null
    }
    n(Uv, "getFieldData");

    function Av(i, e) {
        var t = null,
            r = i.type;
        if (r === "select-one") return i.options.length && (t = i.options[i.selectedIndex].value), t;
        if (r === "select-multiple") {
            t = [];
            for (var s = 0, o = i.options.length; s < o; s++) i.options[s].selected && t.push(i.options[s].value);
            return t.length === 0 && (t = null), t
        }
        return r === "file" && "files" in i ? (i.multiple ? (t = vx.call(i.files), t.length === 0 && (t = null)) : t = i.files[0], t) : (gx[r] ? i.checked && (r === "checkbox" && !i.hasAttribute("value") ? t = !0 : t = i.value) : t = e ? i.value.replace(yx, "") : i.value, t)
    }
    n(Av, "getFormElementValue");
    eu.getFieldData = Uv;
    var bx = {
            version: "3.0.1"
        },
        Os = class extends ae {
            constructor(e, t) {
                super(e, t), this.type = "acquirer", this.id = this.opts.id || "Form", this.title = "Form";
                let r = {
                    target: null,
                    resultName: "uppyResult",
                    getMetaFromForm: !0,
                    addResultToForm: !0,
                    submitOnSuccess: !1,
                    triggerUploadOnSubmit: !1
                };
                this.opts = { ...r,
                    ...t
                }, this.handleFormSubmit = this.handleFormSubmit.bind(this), this.handleUploadStart = this.handleUploadStart.bind(this), this.handleSuccess = this.handleSuccess.bind(this), this.addResultToForm = this.addResultToForm.bind(this), this.getMetaFromForm = this.getMetaFromForm.bind(this)
            }
            handleUploadStart() {
                this.opts.getMetaFromForm && this.getMetaFromForm()
            }
            handleSuccess(e) {
                this.opts.addResultToForm && this.addResultToForm(e), this.opts.submitOnSuccess && this.form.submit()
            }
            handleFormSubmit(e) {
                if (this.opts.triggerUploadOnSubmit) {
                    e.preventDefault();
                    let t = _e(e.target.elements),
                        r = [];
                    t.forEach(s => {
                        (s.tagName === "BUTTON" || s.tagName === "INPUT" && s.type === "submit") && !s.disabled && (s.disabled = !0, r.push(s))
                    }), this.uppy.upload().then(() => {
                        r.forEach(s => {
                            s.disabled = !1
                        })
                    }, s => (r.forEach(o => {
                        o.disabled = !1
                    }), Promise.reject(s))).catch(s => {
                        this.uppy.log(s.stack || s.message || s)
                    })
                }
            }
            addResultToForm(e) {
                this.uppy.log("[Form] Adding result to the original form:"), this.uppy.log(e);
                let t = this.form.querySelector(`[name="${this.opts.resultName}"]`);
                if (t) {
                    let r;
                    try {
                        r = JSON.parse(t.value)
                    } catch {}
                    Array.isArray(r) || (r = []), r.push(e), t.value = JSON.stringify(r);
                    return
                }
                t = document.createElement("input"), t.name = this.opts.resultName, t.type = "hidden", t.value = JSON.stringify([e]), this.form.appendChild(t)
            }
            getMetaFromForm() {
                let e = eu(this.form);
                delete e[this.opts.resultName], this.uppy.setMeta(e)
            }
            install() {
                if (this.form = Bo(this.opts.target), !this.form || this.form.nodeName !== "FORM") {
                    this.uppy.log("Form plugin requires a <form> target element passed in options to operate, none was found", "error");
                    return
                }
                this.form.addEventListener("submit", this.handleFormSubmit), this.uppy.on("upload", this.handleUploadStart), this.uppy.on("complete", this.handleSuccess)
            }
            uninstall() {
                this.form.removeEventListener("submit", this.handleFormSubmit), this.uppy.off("upload", this.handleUploadStart), this.uppy.off("complete", this.handleSuccess)
            }
        };
    n(Os, "Form");
    Os.VERSION = bx.version;
    var qv = oe(bo(), 1);
    var Dv = typeof navigator < "u" && "serviceWorker" in navigator;

    function wx() {
        return new Promise((i, e) => {
            Dv ? navigator.serviceWorker.controller ? i() : navigator.serviceWorker.addEventListener("controllerchange", () => {
                i()
            }) : e(new Error("Unsupported"))
        })
    }
    n(wx, "waitForServiceWorker");
    var Sa = class {
        constructor(e) {
            this.ready = wx(), this.name = e.storeName
        }
        list() {
            let e = {},
                t = new Promise((s, o) => {
                    e.resolve = s, e.reject = o
                }),
                r = n(s => {
                    if (s.data.store === this.name) switch (s.data.type) {
                        case "uppy/ALL_FILES":
                            e.resolve(s.data.files), navigator.serviceWorker.removeEventListener("message", r);
                            break;
                        default:
                            e.reject()
                    }
                }, "onMessage");
            return this.ready.then(() => {
                navigator.serviceWorker.addEventListener("message", r), navigator.serviceWorker.controller.postMessage({
                    type: "uppy/GET_FILES",
                    store: this.name
                })
            }), t
        }
        put(e) {
            return this.ready.then(() => {
                navigator.serviceWorker.controller.postMessage({
                    type: "uppy/ADD_FILE",
                    store: this.name,
                    file: e
                })
            })
        }
        delete(e) {
            return this.ready.then(() => {
                navigator.serviceWorker.controller.postMessage({
                    type: "uppy/REMOVE_FILE",
                    store: this.name,
                    fileID: e
                })
            })
        }
    };
    n(Sa, "ServiceWorkerStore");
    Sa.isSupported = Dv;
    var Nv = Sa;
    var Mv = typeof window < "u" && (window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB),
        Sx = !!Mv,
        Bv = "uppy-blobs",
        ct = "files",
        zv = 24 * 60 * 60 * 1e3,
        _x = 3;

    function Px(i) {
        let e = i.openCursor();
        e.onsuccess = t => {
            let r = t.target.result;
            if (!r) return;
            let s = r.value;
            s.expires = Date.now() + zv, r.update(s)
        }
    }
    n(Px, "migrateExpiration");

    function Iv(i) {
        let e = Mv.open(i, _x);
        return new Promise((t, r) => {
            e.onupgradeneeded = s => {
                let o = s.target.result,
                    {
                        transaction: a
                    } = s.currentTarget;
                if (s.oldVersion < 2 && o.createObjectStore(ct, {
                    keyPath: "id"
                }).createIndex("store", "store", {
                    unique: !1
                }), s.oldVersion < 3) {
                    let l = a.objectStore(ct);
                    l.createIndex("expires", "expires", {
                        unique: !1
                    }), Px(l)
                }
                a.oncomplete = () => {
                    t(o)
                }
            }, e.onsuccess = s => {
                t(s.target.result)
            }, e.onerror = r
        })
    }
    n(Iv, "connect");

    function tu(i) {
        return new Promise((e, t) => {
            i.onsuccess = r => {
                e(r.target.result)
            }, i.onerror = t
        })
    }
    n(tu, "waitForRequest");
    var Lv = !1,
        Rs = class {
            constructor(e) {
                this.opts = {
                    dbName: Bv,
                    storeName: "default",
                    expires: zv,
                    maxFileSize: 10 * 1024 * 1024,
                    maxTotalSize: 300 * 1024 * 1024,
                    ...e
                }, this.name = this.opts.storeName;
                let t = n(() => Iv(this.opts.dbName), "createConnection");
                Lv ? this.ready = t() : (Lv = !0, this.ready = Rs.cleanup().then(t, t))
            }
            key(e) {
                return `${this.name}!${e}`
            }
            list() {
                return this.ready.then(e => {
                    let s = e.transaction([ct], "readonly").objectStore(ct).index("store").getAll(IDBKeyRange.only(this.name));
                    return tu(s)
                }).then(e => {
                    let t = {};
                    return e.forEach(r => {
                        t[r.fileID] = r.data
                    }), t
                })
            }
            get(e) {
                return this.ready.then(t => {
                    let s = t.transaction([ct], "readonly").objectStore(ct).get(this.key(e));
                    return tu(s)
                }).then(t => ({
                    id: t.data.fileID,
                    data: t.data.data
                }))
            }
            getSize() {
                return this.ready.then(e => {
                    let s = e.transaction([ct], "readonly").objectStore(ct).index("store").openCursor(IDBKeyRange.only(this.name));
                    return new Promise((o, a) => {
                        let l = 0;
                        s.onsuccess = h => {
                            let c = h.target.result;
                            c ? (l += c.value.data.size, c.continue()) : o(l)
                        }, s.onerror = () => {
                            a(new Error("Could not retrieve stored blobs size"))
                        }
                    })
                })
            }
            put(e) {
                return e.data.size > this.opts.maxFileSize ? Promise.reject(new Error("File is too big to store.")) : this.getSize().then(t => t > this.opts.maxTotalSize ? Promise.reject(new Error("No space left")) : this.ready).then(t => {
                    let s = t.transaction([ct], "readwrite").objectStore(ct).add({
                        id: this.key(e.id),
                        fileID: e.id,
                        store: this.name,
                        expires: Date.now() + this.opts.expires,
                        data: e.data
                    });
                    return tu(s)
                })
            }
            delete(e) {
                return this.ready.then(t => {
                    let s = t.transaction([ct], "readwrite").objectStore(ct).delete(this.key(e));
                    return tu(s)
                })
            }
            static cleanup() {
                return Iv(Bv).then(e => {
                    let s = e.transaction([ct], "readwrite").objectStore(ct).index("expires").openCursor(IDBKeyRange.upperBound(Date.now()));
                    return new Promise((o, a) => {
                        s.onsuccess = l => {
                            let h = l.target.result;
                            h ? (h.delete(), h.continue()) : o(e)
                        }, s.onerror = a
                    })
                }).then(e => {
                    e.close()
                })
            }
        };
    n(Rs, "IndexedDBStore");
    Rs.isSupported = Sx;
    var jv = Rs;

    function xx() {
        let i = [];
        for (let e = 0; e < localStorage.length; e++) {
            let t = localStorage.key(e);
            /^uppyState:/.test(t) && i.push(t.slice(10))
        }
        return i
    }
    n(xx, "findUppyInstances");

    function Hv(i) {
        try {
            return JSON.parse(i)
        } catch {
            return null
        }
    }
    n(Hv, "maybeParse");
    var $v = !1,
        Wt = class {
            constructor(e) {
                this.opts = {
                    expires: 24 * 60 * 60 * 1e3,
                    ...e
                }, this.name = `uppyState:${e.storeName}`, $v || ($v = !0, Wt.cleanup())
            }
            load() {
                let e = localStorage.getItem(this.name);
                if (!e) return null;
                let t = Hv(e);
                return t ? t.metadata ? t.metadata : (this.save(t), t) : null
            }
            save(e) {
                let t = Date.now() + this.opts.expires,
                    r = JSON.stringify({
                        metadata: e,
                        expires: t
                    });
                localStorage.setItem(this.name, r)
            }
            static cleanup(e) {
                if (e) {
                    localStorage.removeItem(`uppyState:${e}`);
                    return
                }
                let t = xx(),
                    r = Date.now();
                t.forEach(s => {
                    let o = localStorage.getItem(`uppyState:${s}`);
                    if (!o) return;
                    let a = Hv(o);
                    !a || a.expires && a.expires < r && localStorage.removeItem(`uppyState:${s}`)
                })
            }
        };
    n(Wt, "MetaDataStore");
    var Fx = {
            version: "3.0.2"
        },
        Cs = class extends ae {
            constructor(e, t) {
                super(e, t), this.addBlobToStores = s => {
                    s.isRemote || (this.ServiceWorkerStore && this.ServiceWorkerStore.put(s).catch(o => {
                        this.uppy.log("[GoldenRetriever] Could not store file", "warning"), this.uppy.log(o)
                    }), this.IndexedDBStore.put(s).catch(o => {
                        this.uppy.log("[GoldenRetriever] Could not store file", "warning"), this.uppy.log(o)
                    }))
                }, this.removeBlobFromStores = s => {
                    this.ServiceWorkerStore && this.ServiceWorkerStore.delete(s.id).catch(o => {
                        this.uppy.log("[GoldenRetriever] Failed to remove file", "warning"), this.uppy.log(o)
                    }), this.IndexedDBStore.delete(s.id).catch(o => {
                        this.uppy.log("[GoldenRetriever] Failed to remove file", "warning"), this.uppy.log(o)
                    })
                }, this.replaceBlobInStores = s => {
                    this.removeBlobFromStores(s), this.addBlobToStores(s)
                }, this.handleRestoreConfirmed = () => {
                    this.uppy.log("[GoldenRetriever] Restore confirmed, proceeding...");
                    let {
                        currentUploads: s
                    } = this.uppy.getState();
                    s && (this.uppy.resumeAll(), Object.keys(s).forEach(o => {
                        this.uppy.restore(o, s[o])
                    })), this.uppy.setState({
                        recoveredState: null
                    })
                }, this.abortRestore = () => {
                    this.uppy.log("[GoldenRetriever] Aborting restore...");
                    let s = Object.keys(this.uppy.getState().files);
                    this.deleteBlobs(s).then(() => {
                        this.uppy.log(`[GoldenRetriever] Removed ${s.length} files`)
                    }).catch(o => {
                        this.uppy.log(`[GoldenRetriever] Could not remove ${s.length} files`, "warning"), this.uppy.log(o)
                    }), this.uppy.cancelAll(), this.uppy.setState({
                        recoveredState: null
                    }), Wt.cleanup(this.uppy.opts.id)
                }, this.handleComplete = s => {
                    let {
                        successful: o
                    } = s, a = o.map(l => l.id);
                    this.deleteBlobs(a).then(() => {
                        this.uppy.log(`[GoldenRetriever] Removed ${o.length} files that finished uploading`)
                    }).catch(l => {
                        this.uppy.log(`[GoldenRetriever] Could not remove ${o.length} files that finished uploading`, "warning"), this.uppy.log(l)
                    }), this.uppy.setState({
                        recoveredState: null
                    }), Wt.cleanup(this.uppy.opts.id)
                }, this.restoreBlobs = () => {
                    this.uppy.getFiles().length > 0 ? Promise.all([this.loadFileBlobsFromServiceWorker(), this.loadFileBlobsFromIndexedDB()]).then(s => {
                        let o = { ...s[0],
                            ...s[1]
                        };
                        this.onBlobsLoaded(o)
                    }) : this.uppy.log("[GoldenRetriever] No files need to be loaded, only restoring processing state...")
                }, this.type = "debugger", this.id = this.opts.id || "GoldenRetriever", this.title = "Golden Retriever";
                let r = {
                    expires: 24 * 60 * 60 * 1e3,
                    serviceWorker: !1
                };
                this.opts = { ...r,
                    ...t
                }, this.MetaDataStore = new Wt({
                    expires: this.opts.expires,
                    storeName: e.getID()
                }), this.ServiceWorkerStore = null, this.opts.serviceWorker && (this.ServiceWorkerStore = new Nv({
                    storeName: e.getID()
                })), this.IndexedDBStore = new jv({
                    expires: this.opts.expires,
                    ...this.opts.indexedDB || {},
                    storeName: e.getID()
                }), this.saveFilesStateToLocalStorage = (0, qv.default)(this.saveFilesStateToLocalStorage.bind(this), 500, {
                    leading: !0,
                    trailing: !0
                }), this.restoreState = this.restoreState.bind(this), this.loadFileBlobsFromServiceWorker = this.loadFileBlobsFromServiceWorker.bind(this), this.loadFileBlobsFromIndexedDB = this.loadFileBlobsFromIndexedDB.bind(this), this.onBlobsLoaded = this.onBlobsLoaded.bind(this)
            }
            restoreState() {
                let e = this.MetaDataStore.load();
                e && (this.uppy.log("[GoldenRetriever] Recovered some state from Local Storage"), this.uppy.setState({
                    currentUploads: e.currentUploads || {},
                    files: e.files || {},
                    recoveredState: e
                }), this.savedPluginData = e.pluginData)
            }
            getWaitingFiles() {
                let e = {};
                return this.uppy.getFiles().forEach(t => {
                    (!t.progress || !t.progress.uploadStarted) && (e[t.id] = t)
                }), e
            }
            getUploadingFiles() {
                let e = {},
                    {
                        currentUploads: t
                    } = this.uppy.getState();
                return t && Object.keys(t).forEach(s => {
                    t[s].fileIDs.forEach(a => {
                        e[a] = this.uppy.getFile(a)
                    })
                }), e
            }
            saveFilesStateToLocalStorage() {
                let e = { ...this.getWaitingFiles(),
                    ...this.getUploadingFiles()
                };
                if (Object.keys(e).length === 0) {
                    this.uppy.getState().recoveredState !== null && this.uppy.setState({
                        recoveredState: null
                    }), Wt.cleanup(this.uppy.opts.id);
                    return
                }
                let t = {};
                Object.keys(e).forEach(o => {
                    e[o].isRemote ? t[o] = { ...e[o],
                        isRestored: !0
                    } : t[o] = { ...e[o],
                        isRestored: !0,
                        data: null,
                        preview: null
                    }
                });
                let r = {};
                this.uppy.emit("restore:get-data", o => {
                    Object.assign(r, o)
                });
                let {
                    currentUploads: s
                } = this.uppy.getState();
                this.MetaDataStore.save({
                    currentUploads: s,
                    files: t,
                    pluginData: r
                })
            }
            loadFileBlobsFromServiceWorker() {
                return this.ServiceWorkerStore ? this.ServiceWorkerStore.list().then(e => {
                    let t = Object.keys(e).length;
                    return t > 0 ? (this.uppy.log(`[GoldenRetriever] Successfully recovered ${t} blobs from Service Worker!`), e) : (this.uppy.log("[GoldenRetriever] No blobs found in Service Worker, trying IndexedDB now..."), {})
                }).catch(e => (this.uppy.log("[GoldenRetriever] Failed to recover blobs from Service Worker", "warning"), this.uppy.log(e), {})) : Promise.resolve({})
            }
            loadFileBlobsFromIndexedDB() {
                return this.IndexedDBStore.list().then(e => {
                    let t = Object.keys(e).length;
                    return t > 0 ? (this.uppy.log(`[GoldenRetriever] Successfully recovered ${t} blobs from IndexedDB!`), e) : (this.uppy.log("[GoldenRetriever] No blobs found in IndexedDB"), {})
                }).catch(e => (this.uppy.log("[GoldenRetriever] Failed to recover blobs from IndexedDB", "warning"), this.uppy.log(e), {}))
            }
            onBlobsLoaded(e) {
                let t = [],
                    r = { ...this.uppy.getState().files
                    };
                Object.keys(e).forEach(s => {
                    let o = this.uppy.getFile(s);
                    if (!o) {
                        t.push(s);
                        return
                    }
                    let l = {
                        data: e[s],
                        isRestored: !0,
                        isGhost: !1
                    };
                    r[s] = { ...o,
                        ...l
                    }
                }), Object.keys(r).forEach(s => {
                    r[s].data === null && (r[s] = { ...r[s],
                        isGhost: !0
                    })
                }), this.uppy.setState({
                    files: r
                }), this.uppy.emit("restored", this.savedPluginData), t.length && this.deleteBlobs(t).then(() => {
                    this.uppy.log(`[GoldenRetriever] Cleaned up ${t.length} old files`)
                }).catch(s => {
                    this.uppy.log(`[GoldenRetriever] Could not clean up ${t.length} old files`, "warning"), this.uppy.log(s)
                })
            }
            deleteBlobs(e) {
                let t = [];
                return e.forEach(r => {
                    this.ServiceWorkerStore && t.push(this.ServiceWorkerStore.delete(r)), this.IndexedDBStore && t.push(this.IndexedDBStore.delete(r))
                }), Promise.all(t)
            }
            install() {
                this.restoreState(), this.restoreBlobs(), this.uppy.on("file-added", this.addBlobToStores), this.uppy.on("file-editor:complete", this.replaceBlobInStores), this.uppy.on("file-removed", this.removeBlobFromStores), this.uppy.on("state-update", this.saveFilesStateToLocalStorage), this.uppy.on("restore-confirmed", this.handleRestoreConfirmed), this.uppy.on("restore-canceled", this.abortRestore), this.uppy.on("complete", this.handleComplete)
            }
            uninstall() {
                this.uppy.off("file-added", this.addBlobToStores), this.uppy.off("file-editor:complete", this.replaceBlobInStores), this.uppy.off("file-removed", this.removeBlobFromStores), this.uppy.off("state-update", this.saveFilesStateToLocalStorage), this.uppy.off("restore-confirmed", this.handleRestoreConfirmed), this.uppy.off("restore-canceled", this.abortRestore), this.uppy.off("complete", this.handleComplete)
            }
        };
    n(Cs, "GoldenRetriever");
    Cs.VERSION = Fx.version;
    var Ex = {
            version: "3.0.1"
        },
        Ts = class extends V {
            constructor(e, t) {
                super(e, t), this.type = "debugger", this.id = this.opts.id || "ReduxDevTools", this.title = "Redux DevTools";
                let r = {};
                this.opts = { ...r,
                    ...t
                }, this.handleStateChange = this.handleStateChange.bind(this), this.initDevTools = this.initDevTools.bind(this)
            }
            handleStateChange(e, t) {
                this.devTools.send("UPPY_STATE_UPDATE", t)
            }
            initDevTools() {
                this.devTools = window.devToolsExtension.connect(), this.devToolsUnsubscribe = this.devTools.subscribe(e => {
                    if (e.type === "DISPATCH") switch (e.payload.type) {
                        case "RESET":
                            this.uppy.cancelAll();
                            return;
                        case "IMPORT_STATE":
                        {
                            let {
                                computedStates: t
                            } = e.payload.nextLiftedState;this.uppy.store.state = { ...this.uppy.getState(),
                            ...t[t.length - 1].state
                        },
                            this.uppy.updateAll(this.uppy.getState());
                            return
                        }
                        case "JUMP_TO_STATE":
                        case "JUMP_TO_ACTION":
                            this.uppy.store.state = { ...this.uppy.getState(),
                                ...JSON.parse(e.state)
                            }, this.uppy.updateAll(this.uppy.getState());
                            break;
                        default:
                    }
                })
            }
            install() {
                this.withDevTools = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__, this.withDevTools && (this.initDevTools(), this.uppy.on("state-update", this.handleStateChange))
            }
            uninstall() {
                this.withDevTools && (this.devToolsUnsubscribe(), this.uppy.off("state-update", this.handleStateUpdate))
            }
        };
    n(Ts, "ReduxDevTools");
    Ts.VERSION = Ex.version;

    function Ox() {
        throw new Error("Core has been renamed to Uppy")
    }
    n(Ox, "Core");
    var Rx = {
        ProviderView: Ru
    };
    Dt.COMPANION_URL = Sd;
    Dt.COMPANION_ALLOWED_HOSTS = _d;
    var Cx = {};
    globalThis.Uppy = Od;
})();
//# sourceMappingURL=uppy.min.js.map
