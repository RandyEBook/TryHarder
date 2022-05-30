var apiurl="https://api.changenow.io/v1/",
apiurl_v2="https://api.changenow.io/v2/";
function checkRecipientAddress(){jQuery('.step-one input#recipientAddress').trigger('blur')}
function cra(){setTimeout(function(){checkRecipientAddress()},300);}
!function (e) {
    var t = {};
    function n(r) {if (t[r]) return t[r].exports;var a = t[r] = {i: r,l: !1,exports: {}};return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports}
    n.m = e, n.c = t, n.d = function (e, t, r) {n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0,get: r})},
    n.r = function (e) {"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})},
    n.t = function (e, t) {if (1 & t && (e = n(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, "default", {enumerable: !0,value: e}), 2 & t && "string" != typeof e) for (var a in e) n.d(r, a, function (t) {return e[t]}.bind(null, a));return r},
    n.n = function (e) {var t = e && e.__esModule ? function () {return e.default} : function () {return e};return n.d(t, "a", t), t},
    n.o = function (e, t) {return Object.prototype.hasOwnProperty.call(e, t)},
    n.p = "/", n(n.s = 311)
}([function (e, t, n) {
    (function (e) {
        e.exports = function () {
            "use strict";
            var t, r;
            function a() {return t.apply(null, arguments)}
            function s(e) {return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)}
            function i(e) {return null != e && "[object Object]" === Object.prototype.toString.call(e)}
            function o(e) {return void 0 === e}
            function u(e) {return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)}
            function d(e) {return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)}
            function l(e, t) {var n, r = [];for (n = 0; n < e.length; ++n) r.push(t(e[n], n));return r}
            function _(e, t) {return Object.prototype.hasOwnProperty.call(e, t)}
            function c(e, t) {for (var n in t) _(t, n) && (e[n] = t[n]);return _(t, "toString") && (e.toString = t.toString), _(t, "valueOf") && (e.valueOf = t.valueOf), e}
            function m(e, t, n, r) {return Et(e, t, n, r, !0).utc()}
            function f(e) {return null == e._pf && (e._pf = {empty: !1,unusedTokens: [],unusedInput: [],overflow: -2,charsLeftOver: 0,nullInput: !1,invalidMonth: null,invalidFormat: !1,userInvalidated: !1,iso: !1,parsedDateParts: [],meridiem: null,rfc2822: !1,weekdayMismatch: !1}), e._pf}

            function h(e) {if (null == e._isValid) {var t = f(e),n = r.call(t.parsedDateParts, function (e) {return null != e}),a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;e._isValid = a}return e._isValid}

            function p(e) {var t = m(NaN);return null != e ? c(f(t), e) : f(t).userInvalidated = !0, t}
            r = Array.prototype.some ? Array.prototype.some : function (e) {for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++)if (r in t && e.call(this, t[r], r, t)) return !0;return !1};
            var y = a.momentProperties = [];

            function M(e, t) {var n, r, a;if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = f(t)), o(t._locale) || (e._locale = t._locale), y.length > 0)for (n = 0; n < y.length; n++) o(a = t[r = y[n]]) || (e[r] = a);return e}
            var L = !1;

            function g(e) {M(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === L && (L = !0, a.updateOffset(this), L = !1)}

            function Y(e) {return e instanceof g || null != e && null != e._isAMomentObject}

            function v(e) {return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)}

            function k(e) {var t = +e,n = 0;return 0 !== t && isFinite(t) && (n = v(t)), n}

            function w(e, t, n) {var r, a = Math.min(e.length, t.length),s = Math.abs(e.length - t.length),i = 0;for (r = 0; r < a; r++)(n && e[r] !== t[r] || !n && k(e[r]) !== k(t[r])) && i++;return i + s}

            function b(e) {!1 === a.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)}

            function D(e, t) {
                var n = !0;
                return c(function () {
                    if (null != a.deprecationHandler && a.deprecationHandler(null, e), n) {
                        for (var r, s = [], i = 0; i < arguments.length; i++) {
                            if (r = "", "object" == typeof arguments[i]) {
                                for (var o in r += "\n[" + i + "] ", arguments[0]) r += o + ": " + arguments[0][o] + ", ";
                                r = r.slice(0, -2)
                            } else r = arguments[i];
                            s.push(r)
                        }
                        b(e + "\nArguments: " + Array.prototype.slice.call(s).join("") + "\n" + (new Error).stack), n = !1
                    }
                    return t.apply(this, arguments)
                }, t)
            }
            var T, S = {};

            function x(e, t) {null != a.deprecationHandler && a.deprecationHandler(e, t), S[e] || (b(t), S[e] = !0)}

            function H(e) {return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)}

            function A(e, t) {var n, r = c({}, e);for (n in t) _(t, n) && (i(e[n]) && i(t[n]) ? (r[n] = {}, c(r[n], e[n]), c(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);for (n in e) _(e, n) && !_(t, n) && i(e[n]) && (r[n] = c({}, r[n]));return r}

            function j(e) {null != e && this.set(e)}a.suppressDeprecationWarnings = !1, a.deprecationHandler = null, T = Object.keys ? Object.keys : function (e) {var t, n = [];for (t in e) _(e, t) && n.push(t);return n};
            var E = {};

            function P(e, t) {var n = e.toLowerCase();E[n] = E[n + "s"] = E[t] = e}

            function O(e) {return "string" == typeof e ? E[e] || E[e.toLowerCase()] : void 0}

            function F(e) {var t, n, r = {};for (n in e) _(e, n) && (t = O(n)) && (r[t] = e[n]);return r}
            var R = {};

            function C(e, t) {R[e] = t}

            function W(e, t, n) {var r = "" + Math.abs(e),a = t - r.length;return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r}
            var I = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,N = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,U = {},B = {};

            function z(e, t, n, r) {var a = r;"string" == typeof r && (a = function () {return this[r]()}), e && (B[e] = a), t && (B[t[0]] = function () {return W(a.apply(this, arguments), t[1], t[2])}), n && (B[n] = function () {return this.localeData().ordinal(a.apply(this, arguments), e)})}

            function $(e, t) {
                return e.isValid() ? (t = J(t, e.localeData()), U[t] = U[t] || function (e) {
                    var t, n, r, a = e.match(I);
                    for (t = 0, n = a.length; t < n; t++) B[a[t]] ? a[t] = B[a[t]] : a[t] = (r = a[t]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
                    return function (t) {var r, s = "";for (r = 0; r < n; r++) s += H(a[r]) ? a[r].call(t, e) : a[r];return s}
                }(t), U[t](e)) : e.localeData().invalidDate()
            }

            function J(e, t) {
                var n = 5;
                function r(e) {return t.longDateFormat(e) || e}
                for (N.lastIndex = 0; n >= 0 && N.test(e);) e = e.replace(N, r), N.lastIndex = 0, n -= 1;
                return e
            }
            var G = /\d/,
                q = /\d\d/,
                Z = /\d{3}/,
                V = /\d{4}/,
                K = /[+-]?\d{6}/,
                X = /\d\d?/,
                Q = /\d\d\d\d?/,
                ee = /\d\d\d\d\d\d?/,
                te = /\d{1,3}/,
                ne = /\d{1,4}/,
                re = /[+-]?\d{1,6}/,
                ae = /\d+/,
                se = /[+-]?\d+/,
                ie = /Z|[+-]\d\d:?\d\d/gi,
                oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
                ue = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                de = {};

            function le(e, t, n) {de[e] = H(t) ? t : function (e, r) {return e && n ? n : t}}

            function _e(e, t) {
                return _(de, e) ? de[e](t._strict, t._locale) : new RegExp(ce(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, r, a) {
                    return t || n || r || a
                })))
            }

            function ce(e) {return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")}
            var me = {};

            function fe(e, t) {var n, r = t;for ("string" == typeof e && (e = [e]), u(t) && (r = function (e, n) {n[t] = k(e)}), n = 0; n < e.length; n++) me[e[n]] = r}

            function he(e, t) {fe(e, function (e, n, r, a) {r._w = r._w || {}, t(e, r._w, r, a)})}

            function pe(e, t, n) {null != t && _(me, e) && me[e](t, n._a, n, e)}
            var ye = 0,Me = 1,Le = 2,ge = 3,Ye = 4,ve = 5,ke = 6,we = 7,be = 8;

            function De(e) {return Te(e) ? 366 : 365}

            function Te(e) {return e % 4 == 0 && e % 100 != 0 || e % 400 == 0}
            z("Y", 0, 0, function () {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e
            }), z(0, ["YY", 2], 0, function () {
                return this.year() % 100
            }), z(0, ["YYYY", 4], 0, "year"), z(0, ["YYYYY", 5], 0, "year"), z(0, ["YYYYYY", 6, !0], 0, "year"), P("year", "y"), C("year", 1), le("Y", se), le("YY", X, q), le("YYYY", ne, V), le("YYYYY", re, K), le("YYYYYY", re, K), fe(["YYYYY", "YYYYYY"], ye), fe("YYYY", function (e, t) {
                t[ye] = 2 === e.length ? a.parseTwoDigitYear(e) : k(e)
            }), fe("YY", function (e, t) {
                t[ye] = a.parseTwoDigitYear(e)
            }), fe("Y", function (e, t) {
                t[ye] = parseInt(e, 10)
            }), a.parseTwoDigitYear = function (e) {
                return k(e) + (k(e) > 68 ? 1900 : 2e3)
            };
            var Se, xe = He("FullYear", !0);

            function He(e, t) {return function (n) {return null != n ? (je(this, e, n), a.updateOffset(this, t), this) : Ae(this, e)}}

            function Ae(e, t) {return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN}

            function je(e, t, n) {e.isValid() && !isNaN(n) && ("FullYear" === t && Te(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Ee(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))}

            function Ee(e, t) {if (isNaN(e) || isNaN(t)) return NaN;var n, r = (t % (n = 12) + n) % n;return e += (t - r) / 12, 1 === r ? Te(e) ? 29 : 28 : 31 - r % 7 % 2}
            Se = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {var t;for (t = 0; t < this.length; ++t)if (this[t] === e) return t;return -1
            }, z("M", ["MM", 2], "Mo", function () {
                return this.month() + 1
            }), z("MMM", 0, 0, function (e) {
                return this.localeData().monthsShort(this, e)
            }), z("MMMM", 0, 0, function (e) {
                return this.localeData().months(this, e)
            }), P("month", "M"), C("month", 8), le("M", X), le("MM", X, q), le("MMM", function (e, t) {
                return t.monthsShortRegex(e)
            }), le("MMMM", function (e, t) {
                return t.monthsRegex(e)
            }), fe(["M", "MM"], function (e, t) {
                t[Me] = k(e) - 1
            }), fe(["MMM", "MMMM"], function (e, t, n, r) {
                var a = n._locale.monthsParse(e, r, n._strict);
                null != a ? t[Me] = a : f(n).invalidMonth = e
            });
            var Pe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                Oe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Fe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

            function Re(e, t, n) {
                var r, a, s, i = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) s = m([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
                return n ? "MMM" === t ? -1 !== (a = Se.call(this._shortMonthsParse, i)) ? a : null : -1 !== (a = Se.call(this._longMonthsParse, i)) ? a : null : "MMM" === t ? -1 !== (a = Se.call(this._shortMonthsParse, i)) ? a : -1 !== (a = Se.call(this._longMonthsParse, i)) ? a : null : -1 !== (a = Se.call(this._longMonthsParse, i)) ? a : -1 !== (a = Se.call(this._shortMonthsParse, i)) ? a : null
            }

            function Ce(e, t) {
                var n;
                if (!e.isValid()) return e;
                if ("string" == typeof t)
                    if (/^\d+$/.test(t)) t = k(t);
                    else if (!u(t = e.localeData().monthsParse(t))) return e;
                return n = Math.min(e.date(), Ee(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
            }

            function We(e) {return null != e ? (Ce(this, e), a.updateOffset(this, !0), this) : Ae(this, "Month")}
            var Ie = ue,Ne = ue;

            function Ue() {
                function e(e, t) {return t.length - e.length}
                var t, n, r = [],a = [],s = [];
                for (t = 0; t < 12; t++) n = m([2e3, t]), r.push(this.monthsShort(n, "")), a.push(this.months(n, "")), s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
                for (r.sort(e), a.sort(e), s.sort(e), t = 0; t < 12; t++) r[t] = ce(r[t]), a[t] = ce(a[t]);
                for (t = 0; t < 24; t++) s[t] = ce(s[t]);
                this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
            }

            function Be(e, t, n, r, a, s, i) {var o;return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, r, a, s, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, r, a, s, i), o}

            function ze(e) {
                var t;
                if (e < 100 && e >= 0) {
                    var n = Array.prototype.slice.call(arguments);
                    n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
                } else t = new Date(Date.UTC.apply(null, arguments));
                return t
            }

            function $e(e, t, n) {
                var r = 7 + t - n;
                return -(7 + ze(e, 0, r).getUTCDay() - t) % 7 + r - 1
            }

            function Je(e, t, n, r, a) {
                var s, i, o = 1 + 7 * (t - 1) + (7 + n - r) % 7 + $e(e, r, a);
                return o <= 0 ? i = De(s = e - 1) + o : o > De(e) ? (s = e + 1, i = o - De(e)) : (s = e, i = o), {
                    year: s,
                    dayOfYear: i
                }
            }

            function Ge(e, t, n) {
                var r, a, s = $e(e.year(), t, n),
                    i = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
                return i < 1 ? r = i + qe(a = e.year() - 1, t, n) : i > qe(e.year(), t, n) ? (r = i - qe(e.year(), t, n), a = e.year() + 1) : (a = e.year(), r = i), {
                    week: r,
                    year: a
                }
            }

            function qe(e, t, n) {
                var r = $e(e, t, n),a = $e(e + 1, t, n);
                return (De(e) - r + a) / 7
            }

            function Ze(e, t) {return e.slice(t, 7).concat(e.slice(0, t))}
            z("w", ["ww", 2], "wo", "week"), z("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), C("week", 5), C("isoWeek", 5), le("w", X), le("ww", X, q), le("W", X), le("WW", X, q), he(["w", "ww", "W", "WW"], function (e, t, n, r) {
                t[r.substr(0, 1)] = k(e)
            }), z("d", 0, "do", "day"), z("dd", 0, 0, function (e) {
                return this.localeData().weekdaysMin(this, e)
            }), z("ddd", 0, 0, function (e) {
                return this.localeData().weekdaysShort(this, e)
            }), z("dddd", 0, 0, function (e) {
                return this.localeData().weekdays(this, e)
            }), z("e", 0, 0, "weekday"), z("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"), C("day", 11), C("weekday", 11), C("isoWeekday", 11), le("d", X), le("e", X), le("E", X), le("dd", function (e, t) {
                return t.weekdaysMinRegex(e)
            }), le("ddd", function (e, t) {
                return t.weekdaysShortRegex(e)
            }), le("dddd", function (e, t) {
                return t.weekdaysRegex(e)
            }), he(["dd", "ddd", "dddd"], function (e, t, n, r) {
                var a = n._locale.weekdaysParse(e, r, n._strict);
                null != a ? t.d = a : f(n).invalidWeekday = e
            }), he(["d", "e", "E"], function (e, t, n, r) {
                t[r] = k(e)
            });
            var Ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Ke = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

            function Qe(e, t, n) {
                var r, a, s, i = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) s = m([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(s, "").toLocaleLowerCase();
                return n ? "dddd" === t ? -1 !== (a = Se.call(this._weekdaysParse, i)) ? a : null : "ddd" === t ? -1 !== (a = Se.call(this._shortWeekdaysParse, i)) ? a : null : -1 !== (a = Se.call(this._minWeekdaysParse, i)) ? a : null : "dddd" === t ? -1 !== (a = Se.call(this._weekdaysParse, i)) ? a : -1 !== (a = Se.call(this._shortWeekdaysParse, i)) ? a : -1 !== (a = Se.call(this._minWeekdaysParse, i)) ? a : null : "ddd" === t ? -1 !== (a = Se.call(this._shortWeekdaysParse, i)) ? a : -1 !== (a = Se.call(this._weekdaysParse, i)) ? a : -1 !== (a = Se.call(this._minWeekdaysParse, i)) ? a : null : -1 !== (a = Se.call(this._minWeekdaysParse, i)) ? a : -1 !== (a = Se.call(this._weekdaysParse, i)) ? a : -1 !== (a = Se.call(this._shortWeekdaysParse, i)) ? a : null
            }
            var et = ue,tt = ue,nt = ue;

            function rt() {
                function e(e, t) {return t.length - e.length}
                var t, n, r, a, s, i = [],o = [],u = [],d = [];
                for (t = 0; t < 7; t++) n = m([2e3, 1]).day(t), r = this.weekdaysMin(n, ""), a = this.weekdaysShort(n, ""), s = this.weekdays(n, ""), i.push(r), o.push(a), u.push(s), d.push(r), d.push(a), d.push(s);
                for (i.sort(e), o.sort(e), u.sort(e), d.sort(e), t = 0; t < 7; t++) o[t] = ce(o[t]), u[t] = ce(u[t]), d[t] = ce(d[t]);
                this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
            }

            function at() {return this.hours() % 12 || 12}

            function st(e, t) {z(e, 0, 0, function () {return this.localeData().meridiem(this.hours(), this.minutes(), t)})}

            function it(e, t) {return t._meridiemParse}
            z("H", ["HH", 2], 0, "hour"), z("h", ["hh", 2], 0, at), z("k", ["kk", 2], 0, function () {
                return this.hours() || 24
            }), z("hmm", 0, 0, function () {
                return "" + at.apply(this) + W(this.minutes(), 2)
            }), z("hmmss", 0, 0, function () {
                return "" + at.apply(this) + W(this.minutes(), 2) + W(this.seconds(), 2)
            }), z("Hmm", 0, 0, function () {
                return "" + this.hours() + W(this.minutes(), 2)
            }), z("Hmmss", 0, 0, function () {
                return "" + this.hours() + W(this.minutes(), 2) + W(this.seconds(), 2)
            }), st("a", !0), st("A", !1), P("hour", "h"), C("hour", 13), le("a", it), le("A", it), le("H", X), le("h", X), le("k", X), le("HH", X, q), le("hh", X, q), le("kk", X, q), le("hmm", Q), le("hmmss", ee), le("Hmm", Q), le("Hmmss", ee), fe(["H", "HH"], ge), fe(["k", "kk"], function (e, t, n) {
                var r = k(e);
                t[ge] = 24 === r ? 0 : r
            }), fe(["a", "A"], function (e, t, n) {
                n._isPm = n._locale.isPM(e), n._meridiem = e
            }), fe(["h", "hh"], function (e, t, n) {
                t[ge] = k(e), f(n).bigHour = !0
            }), fe("hmm", function (e, t, n) {
                var r = e.length - 2;
                t[ge] = k(e.substr(0, r)), t[Ye] = k(e.substr(r)), f(n).bigHour = !0
            }), fe("hmmss", function (e, t, n) {
                var r = e.length - 4,
                    a = e.length - 2;
                t[ge] = k(e.substr(0, r)), t[Ye] = k(e.substr(r, 2)), t[ve] = k(e.substr(a)), f(n).bigHour = !0
            }), fe("Hmm", function (e, t, n) {
                var r = e.length - 2;
                t[ge] = k(e.substr(0, r)), t[Ye] = k(e.substr(r))
            }), fe("Hmmss", function (e, t, n) {
                var r = e.length - 4,
                    a = e.length - 2;
                t[ge] = k(e.substr(0, r)), t[Ye] = k(e.substr(r, 2)), t[ve] = k(e.substr(a))
            });
            var ot, ut = He("Hours", !0),
                dt = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    months: Oe,
                    monthsShort: Fe,
                    week: {
                        dow: 0,
                        doy: 6
                    },
                    weekdays: Ve,
                    weekdaysMin: Xe,
                    weekdaysShort: Ke,
                    meridiemParse: /[ap]\.?m?\.?/i
                },
                lt = {},
                _t = {};

            function ct(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function mt(t) {
                var r = null;
                if (!lt[t] && void 0 !== e && e && e.exports) try {
                    r = ot._abbr, n(224)("./" + t), ft(r)
                } catch (e) {}
                return lt[t]
            }

            function ft(e, t) {
                var n;
                return e && ((n = o(t) ? pt(e) : ht(e, t)) ? ot = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), ot._abbr
            }

            function ht(e, t) {
                if (null !== t) {
                    var n, r = dt;
                    if (t.abbr = e, null != lt[e]) x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = lt[e]._config;
                    else if (null != t.parentLocale)
                        if (null != lt[t.parentLocale]) r = lt[t.parentLocale]._config;
                        else {
                            if (null == (n = mt(t.parentLocale))) return _t[t.parentLocale] || (_t[t.parentLocale] = []), _t[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            r = n._config
                        } return lt[e] = new j(A(r, t)), _t[e] && _t[e].forEach(function (e) {
                        ht(e.name, e.config)
                    }), ft(e), lt[e]
                }
                return delete lt[e], null
            }

            function pt(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return ot;
                if (!s(e)) {
                    if (t = mt(e)) return t;
                    e = [e]
                }
                return function (e) {
                    for (var t, n, r, a, s = 0; s < e.length;) {
                        for (t = (a = ct(e[s]).split("-")).length, n = (n = ct(e[s + 1])) ? n.split("-") : null; t > 0;) {
                            if (r = mt(a.slice(0, t).join("-"))) return r;
                            if (n && n.length >= t && w(a, n, !0) >= t - 1) break;
                            t--
                        }
                        s++
                    }
                    return ot
                }(e)
            }

            function yt(e) {
                var t, n = e._a;
                return n && -2 === f(e).overflow && (t = n[Me] < 0 || n[Me] > 11 ? Me : n[Le] < 1 || n[Le] > Ee(n[ye], n[Me]) ? Le : n[ge] < 0 || n[ge] > 24 || 24 === n[ge] && (0 !== n[Ye] || 0 !== n[ve] || 0 !== n[ke]) ? ge : n[Ye] < 0 || n[Ye] > 59 ? Ye : n[ve] < 0 || n[ve] > 59 ? ve : n[ke] < 0 || n[ke] > 999 ? ke : -1, f(e)._overflowDayOfYear && (t < ye || t > Le) && (t = Le), f(e)._overflowWeeks && -1 === t && (t = we), f(e)._overflowWeekday && -1 === t && (t = be), f(e).overflow = t), e
            }

            function Mt(e, t, n) {
                return null != e ? e : null != t ? t : n
            }

            function Lt(e) {
                var t, n, r, s, i, o = [];
                if (!e._d) {
                    for (r = function (e) {
                            var t = new Date(a.now());
                            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                        }(e), e._w && null == e._a[Le] && null == e._a[Me] && function (e) {
                            var t, n, r, a, s, i, o, u;
                            if (null != (t = e._w).GG || null != t.W || null != t.E) s = 1, i = 4, n = Mt(t.GG, e._a[ye], Ge(Pt(), 1, 4).year), r = Mt(t.W, 1), ((a = Mt(t.E, 1)) < 1 || a > 7) && (u = !0);
                            else {
                                s = e._locale._week.dow, i = e._locale._week.doy;
                                var d = Ge(Pt(), s, i);
                                n = Mt(t.gg, e._a[ye], d.year), r = Mt(t.w, d.week), null != t.d ? ((a = t.d) < 0 || a > 6) && (u = !0) : null != t.e ? (a = t.e + s, (t.e < 0 || t.e > 6) && (u = !0)) : a = s
                            }
                            r < 1 || r > qe(n, s, i) ? f(e)._overflowWeeks = !0 : null != u ? f(e)._overflowWeekday = !0 : (o = Je(n, r, a, s, i), e._a[ye] = o.year, e._dayOfYear = o.dayOfYear)
                        }(e), null != e._dayOfYear && (i = Mt(e._a[ye], r[ye]), (e._dayOfYear > De(i) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), n = ze(i, 0, e._dayOfYear), e._a[Me] = n.getUTCMonth(), e._a[Le] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = r[t];
                    for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[ge] && 0 === e._a[Ye] && 0 === e._a[ve] && 0 === e._a[ke] && (e._nextDay = !0, e._a[ge] = 0), e._d = (e._useUTC ? ze : Be).apply(null, o), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ge] = 24), e._w && void 0 !== e._w.d && e._w.d !== s && (f(e).weekdayMismatch = !0)
                }
            }
            var gt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                Yt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                vt = /Z|[+-]\d\d(?::?\d\d)?/,
                kt = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                wt = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                bt = /^\/?Date\((\-?\d+)/i;

            function Dt(e) {
                var t, n, r, a, s, i, o = e._i,
                    u = gt.exec(o) || Yt.exec(o);
                if (u) {
                    for (f(e).iso = !0, t = 0, n = kt.length; t < n; t++)
                        if (kt[t][1].exec(u[1])) {
                            a = kt[t][0], r = !1 !== kt[t][2];
                            break
                        } if (null == a) return void(e._isValid = !1);
                    if (u[3]) {
                        for (t = 0, n = wt.length; t < n; t++)
                            if (wt[t][1].exec(u[3])) {
                                s = (u[2] || " ") + wt[t][0];
                                break
                            } if (null == s) return void(e._isValid = !1)
                    }
                    if (!r && null != s) return void(e._isValid = !1);
                    if (u[4]) {
                        if (!vt.exec(u[4])) return void(e._isValid = !1);
                        i = "Z"
                    }
                    e._f = a + (s || "") + (i || ""), At(e)
                } else e._isValid = !1
            }
            var Tt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

            function St(e) {
                var t = parseInt(e, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
            }
            var xt = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };

            function Ht(e) {
                var t, n, r, a, s, i, o, u = Tt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (u) {
                    var d = (t = u[4], n = u[3], r = u[2], a = u[5], s = u[6], i = u[7], o = [St(t), Fe.indexOf(n), parseInt(r, 10), parseInt(a, 10), parseInt(s, 10)], i && o.push(parseInt(i, 10)), o);
                    if (! function (e, t, n) {
                            return !e || Ke.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (f(n).weekdayMismatch = !0, n._isValid = !1, !1)
                        }(u[1], d, e)) return;
                    e._a = d, e._tzm = function (e, t, n) {
                        if (e) return xt[e];
                        if (t) return 0;
                        var r = parseInt(n, 10),
                            a = r % 100;
                        return (r - a) / 100 * 60 + a
                    }(u[8], u[9], u[10]), e._d = ze.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0
                } else e._isValid = !1
            }

            function At(e) {
                if (e._f !== a.ISO_8601)
                    if (e._f !== a.RFC_2822) {
                        e._a = [], f(e).empty = !0;
                        var t, n, r, s, i, o = "" + e._i,
                            u = o.length,
                            d = 0;
                        for (r = J(e._f, e._locale).match(I) || [], t = 0; t < r.length; t++) s = r[t], (n = (o.match(_e(s, e)) || [])[0]) && ((i = o.substr(0, o.indexOf(n))).length > 0 && f(e).unusedInput.push(i), o = o.slice(o.indexOf(n) + n.length), d += n.length), B[s] ? (n ? f(e).empty = !1 : f(e).unusedTokens.push(s), pe(s, n, e)) : e._strict && !n && f(e).unusedTokens.push(s);
                        f(e).charsLeftOver = u - d, o.length > 0 && f(e).unusedInput.push(o), e._a[ge] <= 12 && !0 === f(e).bigHour && e._a[ge] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[ge] = function (e, t, n) {
                            var r;
                            return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t
                        }(e._locale, e._a[ge], e._meridiem), Lt(e), yt(e)
                    } else Ht(e);
                else Dt(e)
            }

            function jt(e) {
                var t = e._i,
                    n = e._f;
                return e._locale = e._locale || pt(e._l), null === t || void 0 === n && "" === t ? p({
                    nullInput: !0
                }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), Y(t) ? new g(yt(t)) : (d(t) ? e._d = t : s(n) ? function (e) {
                    var t, n, r, a, s;
                    if (0 === e._f.length) return f(e).invalidFormat = !0, void(e._d = new Date(NaN));
                    for (a = 0; a < e._f.length; a++) s = 0, t = M({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[a], At(t), h(t) && (s += f(t).charsLeftOver, s += 10 * f(t).unusedTokens.length, f(t).score = s, (null == r || s < r) && (r = s, n = t));
                    c(e, n || t)
                }(e) : n ? At(e) : function (e) {
                    var t = e._i;
                    o(t) ? e._d = new Date(a.now()) : d(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function (e) {
                        var t = bt.exec(e._i);
                        null === t ? (Dt(e), !1 === e._isValid && (delete e._isValid, Ht(e), !1 === e._isValid && (delete e._isValid, a.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                    }(e) : s(t) ? (e._a = l(t.slice(0), function (e) {
                        return parseInt(e, 10)
                    }), Lt(e)) : i(t) ? function (e) {
                        if (!e._d) {
                            var t = F(e._i);
                            e._a = l([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                                return e && parseInt(e, 10)
                            }), Lt(e)
                        }
                    }(e) : u(t) ? e._d = new Date(t) : a.createFromInputFallback(e)
                }(e), h(e) || (e._d = null), e))
            }

            function Et(e, t, n, r, a) {
                var o, u = {};
                return !0 !== n && !1 !== n || (r = n, n = void 0), (i(e) && function (e) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                    var t;
                    for (t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }(e) || s(e) && 0 === e.length) && (e = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = a, u._l = n, u._i = e, u._f = t, u._strict = r, (o = new g(yt(jt(u))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
            }

            function Pt(e, t, n, r) {
                return Et(e, t, n, r, !1)
            }
            a.createFromInputFallback = D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }), a.ISO_8601 = function () {}, a.RFC_2822 = function () {};
            var Ot = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                    var e = Pt.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e < this ? this : e : p()
                }),
                Ft = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                    var e = Pt.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : p()
                });

            function Rt(e, t) {
                var n, r;
                if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return Pt();
                for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
                return n
            }
            var Ct = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function Wt(e) {
                var t = F(e),
                    n = t.year || 0,
                    r = t.quarter || 0,
                    a = t.month || 0,
                    s = t.week || t.isoWeek || 0,
                    i = t.day || 0,
                    o = t.hour || 0,
                    u = t.minute || 0,
                    d = t.second || 0,
                    l = t.millisecond || 0;
                this._isValid = function (e) {
                    for (var t in e)
                        if (-1 === Se.call(Ct, t) || null != e[t] && isNaN(e[t])) return !1;
                    for (var n = !1, r = 0; r < Ct.length; ++r)
                        if (e[Ct[r]]) {
                            if (n) return !1;
                            parseFloat(e[Ct[r]]) !== k(e[Ct[r]]) && (n = !0)
                        } return !0
                }(t), this._milliseconds = +l + 1e3 * d + 6e4 * u + 1e3 * o * 60 * 60, this._days = +i + 7 * s, this._months = +a + 3 * r + 12 * n, this._data = {}, this._locale = pt(), this._bubble()
            }

            function It(e) {
                return e instanceof Wt
            }

            function Nt(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }

            function Ut(e, t) {
                z(e, 0, 0, function () {
                    var e = this.utcOffset(),
                        n = "+";
                    return e < 0 && (e = -e, n = "-"), n + W(~~(e / 60), 2) + t + W(~~e % 60, 2)
                })
            }
            Ut("Z", ":"), Ut("ZZ", ""), le("Z", oe), le("ZZ", oe), fe(["Z", "ZZ"], function (e, t, n) {
                n._useUTC = !0, n._tzm = zt(oe, e)
            });
            var Bt = /([\+\-]|\d\d)/gi;

            function zt(e, t) {
                var n = (t || "").match(e);
                if (null === n) return null;
                var r = ((n[n.length - 1] || []) + "").match(Bt) || ["-", 0, 0],
                    a = 60 * r[1] + k(r[2]);
                return 0 === a ? 0 : "+" === r[0] ? a : -a
            }

            function $t(e, t) {
                var n, r;
                return t._isUTC ? (n = t.clone(), r = (Y(e) || d(e) ? e.valueOf() : Pt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), a.updateOffset(n, !1), n) : Pt(e).local()
            }

            function Jt(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
            }

            function Gt() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }
            a.updateOffset = function () {};
            var qt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Zt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function Vt(e, t) {
                var n, r, a, s, i, o, d = e,
                    l = null;
                return It(e) ? d = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : u(e) ? (d = {}, t ? d[t] = e : d.milliseconds = e) : (l = qt.exec(e)) ? (n = "-" === l[1] ? -1 : 1, d = {
                    y: 0,
                    d: k(l[Le]) * n,
                    h: k(l[ge]) * n,
                    m: k(l[Ye]) * n,
                    s: k(l[ve]) * n,
                    ms: k(Nt(1e3 * l[ke])) * n
                }) : (l = Zt.exec(e)) ? (n = "-" === l[1] ? -1 : 1, d = {
                    y: Kt(l[2], n),
                    M: Kt(l[3], n),
                    w: Kt(l[4], n),
                    d: Kt(l[5], n),
                    h: Kt(l[6], n),
                    m: Kt(l[7], n),
                    s: Kt(l[8], n)
                }) : null == d ? d = {} : "object" == typeof d && ("from" in d || "to" in d) && (s = Pt(d.from), i = Pt(d.to), a = s.isValid() && i.isValid() ? (i = $t(i, s), s.isBefore(i) ? o = Xt(s, i) : ((o = Xt(i, s)).milliseconds = -o.milliseconds, o.months = -o.months), o) : {
                    milliseconds: 0,
                    months: 0
                }, (d = {}).ms = a.milliseconds, d.M = a.months), r = new Wt(d), It(e) && _(e, "_locale") && (r._locale = e._locale), r
            }

            function Kt(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }

            function Xt(e, t) {
                var n = {};
                return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
            }

            function Qt(e, t) {
                return function (n, r) {
                    var a;
                    return null === r || isNaN(+r) || (x(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = n, n = r, r = a), en(this, Vt(n = "string" == typeof n ? +n : n, r), e), this
                }
            }

            function en(e, t, n, r) {
                var s = t._milliseconds,
                    i = Nt(t._days),
                    o = Nt(t._months);
                e.isValid() && (r = null == r || r, o && Ce(e, Ae(e, "Month") + o * n), i && je(e, "Date", Ae(e, "Date") + i * n), s && e._d.setTime(e._d.valueOf() + s * n), r && a.updateOffset(e, i || o))
            }
            Vt.fn = Wt.prototype, Vt.invalid = function () {
                return Vt(NaN)
            };
            var tn = Qt(1, "add"),
                nn = Qt(-1, "subtract");

            function rn(e, t) {
                var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                    r = e.clone().add(n, "months");
                return -(n + (t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(n + 1, "months") - r))) || 0
            }

            function an(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (null != (t = pt(e)) && (this._locale = t), this)
            }
            a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var sn = D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            });

            function on() {
                return this._locale
            }
            var un = 1e3,
                dn = 60 * un,
                ln = 60 * dn,
                _n = 3506328 * ln;

            function cn(e, t) {
                return (e % t + t) % t
            }

            function mn(e, t, n) {
                return e < 100 && e >= 0 ? new Date(e + 400, t, n) - _n : new Date(e, t, n).valueOf()
            }

            function fn(e, t, n) {
                return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - _n : Date.UTC(e, t, n)
            }

            function hn(e, t) {
                z(0, [e, e.length], 0, t)
            }

            function pn(e, t, n, r, a) {
                var s;
                return null == e ? Ge(this, r, a).year : (t > (s = qe(e, r, a)) && (t = s), yn.call(this, e, t, n, r, a))
            }

            function yn(e, t, n, r, a) {
                var s = Je(e, t, n, r, a),
                    i = ze(s.year, 0, s.dayOfYear);
                return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
            }
            z(0, ["gg", 2], 0, function () {
                return this.weekYear() % 100
            }), z(0, ["GG", 2], 0, function () {
                return this.isoWeekYear() % 100
            }), hn("gggg", "weekYear"), hn("ggggg", "weekYear"), hn("GGGG", "isoWeekYear"), hn("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), C("weekYear", 1), C("isoWeekYear", 1), le("G", se), le("g", se), le("GG", X, q), le("gg", X, q), le("GGGG", ne, V), le("gggg", ne, V), le("GGGGG", re, K), le("ggggg", re, K), he(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
                t[r.substr(0, 2)] = k(e)
            }), he(["gg", "GG"], function (e, t, n, r) {
                t[r] = a.parseTwoDigitYear(e)
            }), z("Q", 0, "Qo", "quarter"), P("quarter", "Q"), C("quarter", 7), le("Q", G), fe("Q", function (e, t) {
                t[Me] = 3 * (k(e) - 1)
            }), z("D", ["DD", 2], "Do", "date"), P("date", "D"), C("date", 9), le("D", X), le("DD", X, q), le("Do", function (e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            }), fe(["D", "DD"], Le), fe("Do", function (e, t) {
                t[Le] = k(e.match(X)[0])
            });
            var Mn = He("Date", !0);
            z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), C("dayOfYear", 4), le("DDD", te), le("DDDD", Z), fe(["DDD", "DDDD"], function (e, t, n) {
                n._dayOfYear = k(e)
            }), z("m", ["mm", 2], 0, "minute"), P("minute", "m"), C("minute", 14), le("m", X), le("mm", X, q), fe(["m", "mm"], Ye);
            var Ln = He("Minutes", !1);
            z("s", ["ss", 2], 0, "second"), P("second", "s"), C("second", 15), le("s", X), le("ss", X, q), fe(["s", "ss"], ve);
            var gn, Yn = He("Seconds", !1);
            for (z("S", 0, 0, function () {
                    return ~~(this.millisecond() / 100)
                }), z(0, ["SS", 2], 0, function () {
                    return ~~(this.millisecond() / 10)
                }), z(0, ["SSS", 3], 0, "millisecond"), z(0, ["SSSS", 4], 0, function () {
                    return 10 * this.millisecond()
                }), z(0, ["SSSSS", 5], 0, function () {
                    return 100 * this.millisecond()
                }), z(0, ["SSSSSS", 6], 0, function () {
                    return 1e3 * this.millisecond()
                }), z(0, ["SSSSSSS", 7], 0, function () {
                    return 1e4 * this.millisecond()
                }), z(0, ["SSSSSSSS", 8], 0, function () {
                    return 1e5 * this.millisecond()
                }), z(0, ["SSSSSSSSS", 9], 0, function () {
                    return 1e6 * this.millisecond()
                }), P("millisecond", "ms"), C("millisecond", 16), le("S", te, G), le("SS", te, q), le("SSS", te, Z), gn = "SSSS"; gn.length <= 9; gn += "S") le(gn, ae);

            function vn(e, t) {
                t[ke] = k(1e3 * ("0." + e))
            }
            for (gn = "S"; gn.length <= 9; gn += "S") fe(gn, vn);
            var kn = He("Milliseconds", !1);
            z("z", 0, 0, "zoneAbbr"), z("zz", 0, 0, "zoneName");
            var wn = g.prototype;

            function bn(e) {
                return e
            }
            wn.add = tn, wn.calendar = function (e, t) {
                var n = e || Pt(),
                    r = $t(n, this).startOf("day"),
                    s = a.calendarFormat(this, r) || "sameElse",
                    i = t && (H(t[s]) ? t[s].call(this, n) : t[s]);
                return this.format(i || this.localeData().calendar(s, this, Pt(n)))
            }, wn.clone = function () {
                return new g(this)
            }, wn.diff = function (e, t, n) {
                var r, a, s;
                if (!this.isValid()) return NaN;
                if (!(r = $t(e, this)).isValid()) return NaN;
                switch (a = 6e4 * (r.utcOffset() - this.utcOffset()), t = O(t)) {
                    case "year":
                        s = rn(this, r) / 12;
                        break;
                    case "month":
                        s = rn(this, r);
                        break;
                    case "quarter":
                        s = rn(this, r) / 3;
                        break;
                    case "second":
                        s = (this - r) / 1e3;
                        break;
                    case "minute":
                        s = (this - r) / 6e4;
                        break;
                    case "hour":
                        s = (this - r) / 36e5;
                        break;
                    case "day":
                        s = (this - r - a) / 864e5;
                        break;
                    case "week":
                        s = (this - r - a) / 6048e5;
                        break;
                    default:
                        s = this - r
                }
                return n ? s : v(s)
            }, wn.endOf = function (e) {
                var t;
                if (void 0 === (e = O(e)) || "millisecond" === e || !this.isValid()) return this;
                var n = this._isUTC ? fn : mn;
                switch (e) {
                    case "year":
                        t = n(this.year() + 1, 0, 1) - 1;
                        break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case "month":
                        t = n(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case "hour":
                        t = this._d.valueOf(), t += ln - cn(t + (this._isUTC ? 0 : this.utcOffset() * dn), ln) - 1;
                        break;
                    case "minute":
                        t = this._d.valueOf(), t += dn - cn(t, dn) - 1;
                        break;
                    case "second":
                        t = this._d.valueOf(), t += un - cn(t, un) - 1
                }
                return this._d.setTime(t), a.updateOffset(this, !0), this
            }, wn.format = function (e) {
                e || (e = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
                var t = $(this, e);
                return this.localeData().postformat(t)
            }, wn.from = function (e, t) {
                return this.isValid() && (Y(e) && e.isValid() || Pt(e).isValid()) ? Vt({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, wn.fromNow = function (e) {
                return this.from(Pt(), e)
            }, wn.to = function (e, t) {
                return this.isValid() && (Y(e) && e.isValid() || Pt(e).isValid()) ? Vt({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, wn.toNow = function (e) {
                return this.to(Pt(), e)
            }, wn.get = function (e) {
                return H(this[e = O(e)]) ? this[e]() : this
            }, wn.invalidAt = function () {
                return f(this).overflow
            }, wn.isAfter = function (e, t) {
                var n = Y(e) ? e : Pt(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = O(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
            }, wn.isBefore = function (e, t) {
                var n = Y(e) ? e : Pt(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = O(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
            }, wn.isBetween = function (e, t, n, r) {
                var a = Y(e) ? e : Pt(e),
                    s = Y(t) ? t : Pt(t);
                return !!(this.isValid() && a.isValid() && s.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(a, n) : !this.isBefore(a, n)) && (")" === r[1] ? this.isBefore(s, n) : !this.isAfter(s, n))
            }, wn.isSame = function (e, t) {
                var n, r = Y(e) ? e : Pt(e);
                return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = O(t) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
            }, wn.isSameOrAfter = function (e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }, wn.isSameOrBefore = function (e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }, wn.isValid = function () {
                return h(this)
            }, wn.lang = sn, wn.locale = an, wn.localeData = on, wn.max = Ft, wn.min = Ot, wn.parsingFlags = function () {
                return c({}, f(this))
            }, wn.set = function (e, t) {
                if ("object" == typeof e)
                    for (var n = function (e) {
                            var t = [];
                            for (var n in e) t.push({
                                unit: n,
                                priority: R[n]
                            });
                            return t.sort(function (e, t) {
                                return e.priority - t.priority
                            }), t
                        }(e = F(e)), r = 0; r < n.length; r++) this[n[r].unit](e[n[r].unit]);
                else if (H(this[e = O(e)])) return this[e](t);
                return this
            }, wn.startOf = function (e) {
                var t;
                if (void 0 === (e = O(e)) || "millisecond" === e || !this.isValid()) return this;
                var n = this._isUTC ? fn : mn;
                switch (e) {
                    case "year":
                        t = n(this.year(), 0, 1);
                        break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case "month":
                        t = n(this.year(), this.month(), 1);
                        break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date());
                        break;
                    case "hour":
                        t = this._d.valueOf(), t -= cn(t + (this._isUTC ? 0 : this.utcOffset() * dn), ln);
                        break;
                    case "minute":
                        t = this._d.valueOf(), t -= cn(t, dn);
                        break;
                    case "second":
                        t = this._d.valueOf(), t -= cn(t, un)
                }
                return this._d.setTime(t), a.updateOffset(this, !0), this
            }, wn.subtract = nn, wn.toArray = function () {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }, wn.toObject = function () {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }, wn.toDate = function () {
                return new Date(this.valueOf())
            }, wn.toISOString = function (e) {
                if (!this.isValid()) return null;
                var t = !0 !== e,
                    n = t ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? $(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : H(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", $(n, "Z")) : $(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, wn.inspect = function () {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e = "moment",
                    t = "";
                this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                var n = "[" + e + '("]',
                    r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    a = t + '[")]';
                return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + a)
            }, wn.toJSON = function () {
                return this.isValid() ? this.toISOString() : null
            }, wn.toString = function () {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, wn.unix = function () {
                return Math.floor(this.valueOf() / 1e3)
            }, wn.valueOf = function () {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, wn.creationData = function () {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }, wn.year = xe, wn.isLeapYear = function () {
                return Te(this.year())
            }, wn.weekYear = function (e) {
                return pn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, wn.isoWeekYear = function (e) {
                return pn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, wn.quarter = wn.quarters = function (e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }, wn.month = We, wn.daysInMonth = function () {
                return Ee(this.year(), this.month())
            }, wn.week = wn.weeks = function (e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }, wn.isoWeek = wn.isoWeeks = function (e) {
                var t = Ge(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }, wn.weeksInYear = function () {
                var e = this.localeData()._week;
                return qe(this.year(), e.dow, e.doy)
            }, wn.isoWeeksInYear = function () {
                return qe(this.year(), 1, 4)
            }, wn.date = Mn, wn.day = wn.days = function (e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = function (e, t) {
                    return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                }(e, this.localeData()), this.add(e - t, "d")) : t
            }, wn.weekday = function (e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }, wn.isoWeekday = function (e) {
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    var t = function (e, t) {
                        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                    }(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7)
                }
                return this.day() || 7
            }, wn.dayOfYear = function (e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }, wn.hour = wn.hours = ut, wn.minute = wn.minutes = Ln, wn.second = wn.seconds = Yn, wn.millisecond = wn.milliseconds = kn, wn.utcOffset = function (e, t, n) {
                var r, s = this._offset || 0;
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    if ("string" == typeof e) {
                        if (null === (e = zt(oe, e))) return this
                    } else Math.abs(e) < 16 && !n && (e *= 60);
                    return !this._isUTC && t && (r = Jt(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), s !== e && (!t || this._changeInProgress ? en(this, Vt(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? s : Jt(this)
            }, wn.utc = function (e) {
                return this.utcOffset(0, e)
            }, wn.local = function (e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Jt(this), "m")), this
            }, wn.parseZone = function () {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var e = zt(ie, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }, wn.hasAlignedHourOffset = function (e) {
                return !!this.isValid() && (e = e ? Pt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
            }, wn.isDST = function () {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, wn.isLocal = function () {
                return !!this.isValid() && !this._isUTC
            }, wn.isUtcOffset = function () {
                return !!this.isValid() && this._isUTC
            }, wn.isUtc = Gt, wn.isUTC = Gt, wn.zoneAbbr = function () {
                return this._isUTC ? "UTC" : ""
            }, wn.zoneName = function () {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, wn.dates = D("dates accessor is deprecated. Use date instead.", Mn), wn.months = D("months accessor is deprecated. Use month instead", We), wn.years = D("years accessor is deprecated. Use year instead", xe), wn.zone = D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            }), wn.isDSTShifted = D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if (M(e, this), (e = jt(e))._a) {
                    var t = e._isUTC ? m(e._a) : Pt(e._a);
                    this._isDSTShifted = this.isValid() && w(e._a, t.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            });
            var Dn = j.prototype;

            function Tn(e, t, n, r) {
                var a = pt(),
                    s = m().set(r, t);
                return a[n](s, e)
            }

            function Sn(e, t, n) {
                if (u(e) && (t = e, e = void 0), e = e || "", null != t) return Tn(e, t, n, "month");
                var r, a = [];
                for (r = 0; r < 12; r++) a[r] = Tn(e, r, n, "month");
                return a
            }

            function xn(e, t, n, r) {
                "boolean" == typeof e ? (u(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, u(t) && (n = t, t = void 0), t = t || "");
                var a, s = pt(),
                    i = e ? s._week.dow : 0;
                if (null != n) return Tn(t, (n + i) % 7, r, "day");
                var o = [];
                for (a = 0; a < 7; a++) o[a] = Tn(t, (a + i) % 7, r, "day");
                return o
            }
            Dn.calendar = function (e, t, n) {
                var r = this._calendar[e] || this._calendar.sameElse;
                return H(r) ? r.call(t, n) : r
            }, Dn.longDateFormat = function (e) {
                var t = this._longDateFormat[e],
                    n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
                    return e.slice(1)
                }), this._longDateFormat[e])
            }, Dn.invalidDate = function () {
                return this._invalidDate
            }, Dn.ordinal = function (e) {
                return this._ordinal.replace("%d", e)
            }, Dn.preparse = bn, Dn.postformat = bn, Dn.relativeTime = function (e, t, n, r) {
                var a = this._relativeTime[n];
                return H(a) ? a(e, t, n, r) : a.replace(/%d/i, e)
            }, Dn.pastFuture = function (e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return H(n) ? n(t) : n.replace(/%s/i, t)
            }, Dn.set = function (e) {
                var t, n;
                for (n in e) H(t = e[n]) ? this[n] = t : this["_" + n] = t;
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, Dn.months = function (e, t) {
                return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Pe).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone
            }, Dn.monthsShort = function (e, t) {
                return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Pe.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }, Dn.monthsParse = function (e, t, n) {
                var r, a, s;
                if (this._monthsParseExact) return Re.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
                    if (a = m([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (s = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
                    if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
                    if (!n && this._monthsParse[r].test(e)) return r
                }
            }, Dn.monthsRegex = function (e) {
                return this._monthsParseExact ? (_(this, "_monthsRegex") || Ue.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (_(this, "_monthsRegex") || (this._monthsRegex = Ne), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }, Dn.monthsShortRegex = function (e) {
                return this._monthsParseExact ? (_(this, "_monthsRegex") || Ue.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (_(this, "_monthsShortRegex") || (this._monthsShortRegex = Ie), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, Dn.week = function (e) {
                return Ge(e, this._week.dow, this._week.doy).week
            }, Dn.firstDayOfYear = function () {
                return this._week.doy
            }, Dn.firstDayOfWeek = function () {
                return this._week.dow
            }, Dn.weekdays = function (e, t) {
                var n = s(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                return !0 === e ? Ze(n, this._week.dow) : e ? n[e.day()] : n
            }, Dn.weekdaysMin = function (e) {
                return !0 === e ? Ze(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }, Dn.weekdaysShort = function (e) {
                return !0 === e ? Ze(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }, Dn.weekdaysParse = function (e, t, n) {
                var r, a, s;
                if (this._weekdaysParseExact) return Qe.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
                    if (a = m([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (s = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
                    if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
                    if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
                    if (!n && this._weekdaysParse[r].test(e)) return r
                }
            }, Dn.weekdaysRegex = function (e) {
                return this._weekdaysParseExact ? (_(this, "_weekdaysRegex") || rt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (_(this, "_weekdaysRegex") || (this._weekdaysRegex = et), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, Dn.weekdaysShortRegex = function (e) {
                return this._weekdaysParseExact ? (_(this, "_weekdaysRegex") || rt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (_(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = tt), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, Dn.weekdaysMinRegex = function (e) {
                return this._weekdaysParseExact ? (_(this, "_weekdaysRegex") || rt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (_(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = nt), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, Dn.isPM = function (e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }, Dn.meridiem = function (e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }, ft("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (e) {
                    var t = e % 10;
                    return e + (1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            }), a.lang = D("moment.lang is deprecated. Use moment.locale instead.", ft), a.langData = D("moment.langData is deprecated. Use moment.localeData instead.", pt);
            var Hn = Math.abs;

            function An(e, t, n, r) {
                var a = Vt(t, n);
                return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble()
            }

            function jn(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }

            function En(e) {
                return 4800 * e / 146097
            }

            function Pn(e) {
                return 146097 * e / 4800
            }

            function On(e) {
                return function () {
                    return this.as(e)
                }
            }
            var Fn = On("ms"),
                Rn = On("s"),
                Cn = On("m"),
                Wn = On("h"),
                In = On("d"),
                Nn = On("w"),
                Un = On("M"),
                Bn = On("Q"),
                zn = On("y");

            function $n(e) {
                return function () {
                    return this.isValid() ? this._data[e] : NaN
                }
            }
            var Jn = $n("milliseconds"),
                Gn = $n("seconds"),
                qn = $n("minutes"),
                Zn = $n("hours"),
                Vn = $n("days"),
                Kn = $n("months"),
                Xn = $n("years"),
                Qn = Math.round,
                er = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                };

            function tr(e, t, n, r, a) {
                return a.relativeTime(t || 1, !!n, e, r)
            }
            var nr = Math.abs;

            function rr(e) {
                return (e > 0) - (e < 0) || +e
            }

            function ar() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, t, n = nr(this._milliseconds) / 1e3,
                    r = nr(this._days),
                    a = nr(this._months);
                e = v(n / 60), t = v(e / 60), n %= 60, e %= 60;
                var s = v(a / 12),
                    i = a %= 12,
                    o = r,
                    u = t,
                    d = e,
                    l = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                    _ = this.asSeconds();
                if (!_) return "P0D";
                var c = _ < 0 ? "-" : "",
                    m = rr(this._months) !== rr(_) ? "-" : "",
                    f = rr(this._days) !== rr(_) ? "-" : "",
                    h = rr(this._milliseconds) !== rr(_) ? "-" : "";
                return c + "P" + (s ? m + s + "Y" : "") + (i ? m + i + "M" : "") + (o ? f + o + "D" : "") + (u || d || l ? "T" : "") + (u ? h + u + "H" : "") + (d ? h + d + "M" : "") + (l ? h + l + "S" : "")
            }
            var sr = Wt.prototype;
            return sr.isValid = function () {
                return this._isValid
            }, sr.abs = function () {
                var e = this._data;
                return this._milliseconds = Hn(this._milliseconds), this._days = Hn(this._days), this._months = Hn(this._months), e.milliseconds = Hn(e.milliseconds), e.seconds = Hn(e.seconds), e.minutes = Hn(e.minutes), e.hours = Hn(e.hours), e.months = Hn(e.months), e.years = Hn(e.years), this
            }, sr.add = function (e, t) {
                return An(this, e, t, 1)
            }, sr.subtract = function (e, t) {
                return An(this, e, t, -1)
            }, sr.as = function (e) {
                if (!this.isValid()) return NaN;
                var t, n, r = this._milliseconds;
                if ("month" === (e = O(e)) || "quarter" === e || "year" === e) switch (t = this._days + r / 864e5, n = this._months + En(t), e) {
                    case "month":
                        return n;
                    case "quarter":
                        return n / 3;
                    case "year":
                        return n / 12
                } else switch (t = this._days + Math.round(Pn(this._months)), e) {
                    case "week":
                        return t / 7 + r / 6048e5;
                    case "day":
                        return t + r / 864e5;
                    case "hour":
                        return 24 * t + r / 36e5;
                    case "minute":
                        return 1440 * t + r / 6e4;
                    case "second":
                        return 86400 * t + r / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + r;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }, sr.asMilliseconds = Fn, sr.asSeconds = Rn, sr.asMinutes = Cn, sr.asHours = Wn, sr.asDays = In, sr.asWeeks = Nn, sr.asMonths = Un, sr.asQuarters = Bn, sr.asYears = zn, sr.valueOf = function () {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
            }, sr._bubble = function () {
                var e, t, n, r, a, s = this._milliseconds,
                    i = this._days,
                    o = this._months,
                    u = this._data;
                return s >= 0 && i >= 0 && o >= 0 || s <= 0 && i <= 0 && o <= 0 || (s += 864e5 * jn(Pn(o) + i), i = 0, o = 0), u.milliseconds = s % 1e3, e = v(s / 1e3), u.seconds = e % 60, t = v(e / 60), u.minutes = t % 60, n = v(t / 60), u.hours = n % 24, i += v(n / 24), a = v(En(i)), o += a, i -= jn(Pn(a)), r = v(o / 12), o %= 12, u.days = i, u.months = o, u.years = r, this
            }, sr.clone = function () {
                return Vt(this)
            }, sr.get = function (e) {
                return e = O(e), this.isValid() ? this[e + "s"]() : NaN
            }, sr.milliseconds = Jn, sr.seconds = Gn, sr.minutes = qn, sr.hours = Zn, sr.days = Vn, sr.weeks = function () {
                return v(this.days() / 7)
            }, sr.months = Kn, sr.years = Xn, sr.humanize = function (e) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t = this.localeData(),
                    n = function (e, t, n) {
                        var r = Vt(e).abs(),
                            a = Qn(r.as("s")),
                            s = Qn(r.as("m")),
                            i = Qn(r.as("h")),
                            o = Qn(r.as("d")),
                            u = Qn(r.as("M")),
                            d = Qn(r.as("y")),
                            l = a <= er.ss && ["s", a] || a < er.s && ["ss", a] || s <= 1 && ["m"] || s < er.m && ["mm", s] || i <= 1 && ["h"] || i < er.h && ["hh", i] || o <= 1 && ["d"] || o < er.d && ["dd", o] || u <= 1 && ["M"] || u < er.M && ["MM", u] || d <= 1 && ["y"] || ["yy", d];
                        return l[2] = t, l[3] = +e > 0, l[4] = n, tr.apply(null, l)
                    }(this, !e, t);
                return e && (n = t.pastFuture(+this, n)), t.postformat(n)
            }, sr.toISOString = ar, sr.toString = ar, sr.toJSON = ar, sr.locale = an, sr.localeData = on, sr.toIsoString = D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ar), sr.lang = sn, z("X", 0, 0, "unix"), z("x", 0, 0, "valueOf"), le("x", se), le("X", /[+-]?\d+(\.\d{1,3})?/), fe("X", function (e, t, n) {
                n._d = new Date(1e3 * parseFloat(e, 10))
            }), fe("x", function (e, t, n) {
                n._d = new Date(k(e))
            }), a.version = "2.24.0", t = Pt, a.fn = wn, a.min = function () {
                return Rt("isBefore", [].slice.call(arguments, 0))
            }, a.max = function () {
                return Rt("isAfter", [].slice.call(arguments, 0))
            }, a.now = function () {
                return Date.now ? Date.now() : +new Date
            }, a.utc = m, a.unix = function (e) {
                return Pt(1e3 * e)
            }, a.months = function (e, t) {
                return Sn(e, t, "months")
            }, a.isDate = d, a.locale = ft, a.invalid = p, a.duration = Vt, a.isMoment = Y, a.weekdays = function (e, t, n) {
                return xn(e, t, n, "weekdays")
            }, a.parseZone = function () {
                return Pt.apply(null, arguments).parseZone()
            }, a.localeData = pt, a.isDuration = It, a.monthsShort = function (e, t) {
                return Sn(e, t, "monthsShort")
            }, a.weekdaysMin = function (e, t, n) {
                return xn(e, t, n, "weekdaysMin")
            }, a.defineLocale = ht, a.updateLocale = function (e, t) {
                if (null != t) {
                    var n, r, a = dt;
                    null != (r = mt(e)) && (a = r._config), t = A(a, t), (n = new j(t)).parentLocale = lt[e], lt[e] = n, ft(e)
                } else null != lt[e] && (null != lt[e].parentLocale ? lt[e] = lt[e].parentLocale : null != lt[e] && delete lt[e]);
                return lt[e]
            }, a.locales = function () {
                return T(lt)
            }, a.weekdaysShort = function (e, t, n) {
                return xn(e, t, n, "weekdaysShort")
            }, a.normalizeUnits = O, a.relativeTimeRounding = function (e) {
                return void 0 === e ? Qn : "function" == typeof e && (Qn = e, !0)
            }, a.relativeTimeThreshold = function (e, t) {
                return void 0 !== er[e] && (void 0 === t ? er[e] : (er[e] = t, "s" === e && (er.ss = t - 1), !0))
            }, a.calendarFormat = function (e, t) {
                var n = e.diff(t, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }, a.prototype = wn, a.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            }, a
        }()
    }).call(this, n(223)(e))
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        if (!("string" == typeof e || e instanceof String)) {
            var t;
            throw t = null === e ? "null" : "object" === (t = r(e)) && e.constructor && e.constructor.hasOwnProperty("name") ? e.constructor.name : "a ".concat(t), new TypeError("Expected string but received ".concat(t, "."))
        }
    }, e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    e.exports = n(27)
}, function (e, t) {
    function n(e, t, n, r, a, s, i) {
        try {
            var o = e[s](i),
                u = o.value
        } catch (e) {
            return void n(e)
        }
        o.done ? t(u) : Promise.resolve(u).then(r, a)
    }
    e.exports = function (e) {
        return function () {
            var t = this,
                r = arguments;
            return new Promise(function (a, s) {
                var i = e.apply(t, r);

                function o(e) {
                    n(i, a, s, o, u, "next", e)
                }

                function u(e) {
                    n(i, a, s, o, u, "throw", e)
                }
                o(void 0)
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(12),
        a = n(37),
        s = Object.prototype.toString;

    function i(e) {
        return "[object Array]" === s.call(e)
    }

    function o(e) {
        return null !== e && "object" == typeof e
    }

    function u(e) {
        return "[object Function]" === s.call(e)
    }

    function d(e, t) {
        if (null != e)
            if ("object" != typeof e && (e = [e]), i(e))
                for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
    }
    e.exports = {
        isArray: i,
        isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === s.call(e)
        },
        isBuffer: a,
        isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function (e) {
            return "string" == typeof e
        },
        isNumber: function (e) {
            return "number" == typeof e
        },
        isObject: o,
        isUndefined: function (e) {
            return void 0 === e
        },
        isDate: function (e) {
            return "[object Date]" === s.call(e)
        },
        isFile: function (e) {
            return "[object File]" === s.call(e)
        },
        isBlob: function (e) {
            return "[object Blob]" === s.call(e)
        },
        isFunction: u,
        isStream: function (e) {
            return o(e) && u(e.pipe)
        },
        isURLSearchParams: function (e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: d,
        merge: function e() {
            var t = {};

            function n(n, r) {
                "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
            }
            for (var r = 0, a = arguments.length; r < a; r++) d(arguments[r], n);
            return t
        },
        deepMerge: function e() {
            var t = {};

            function n(n, r) {
                "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = "object" == typeof n ? e({}, n) : n
            }
            for (var r = 0, a = arguments.length; r < a; r++) d(arguments[r], n);
            return t
        },
        extend: function (e, t, n) {
            return d(t, function (t, a) {
                e[a] = n && "function" == typeof t ? r(t, n) : t
            }), e
        },
        trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (e, t, n) {
    var r = n(28),
        a = n(29),
        s = n(30);
    e.exports = function (e) {
        return r(e) || a(e) || s()
    }
}, function (e, t) {
    var n, r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
    t.getSymbolSize = function (e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
        return 4 * e + 17
    }, t.getSymbolTotalCodewords = function (e) {
        return r[e]
    }, t.getBCHDigit = function (e) {
        for (var t = 0; 0 !== e;) t++, e >>>= 1;
        return t
    }, t.setToSJISFunction = function (e) {
        if ("function" != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
        n = e
    }, t.isKanjiModeEnabled = function () {
        return void 0 !== n
    }, t.toSJIS = function (e) {
        return n(e)
    }
}, function (e, t, n) {
    var r = n(55),
        a = n(56);
    t.NUMERIC = {
        id: "Numeric",
        bit: 1,
        ccBits: [10, 12, 14]
    }, t.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 2,
        ccBits: [9, 11, 13]
    }, t.BYTE = {
        id: "Byte",
        bit: 4,
        ccBits: [8, 16, 16]
    }, t.KANJI = {
        id: "Kanji",
        bit: 8,
        ccBits: [8, 10, 12]
    }, t.MIXED = {
        bit: -1
    }, t.getCharCountIndicator = function (e, t) {
        if (!e.ccBits) throw new Error("Invalid mode: " + e);
        if (!r.isValid(t)) throw new Error("Invalid version: " + t);
        return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
    }, t.getBestModeForData = function (e) {
        return a.testNumeric(e) ? t.NUMERIC : a.testAlphanumeric(e) ? t.ALPHANUMERIC : a.testKanji(e) ? t.KANJI : t.BYTE
    }, t.toString = function (e) {
        if (e && e.id) return e.id;
        throw new Error("Invalid mode")
    }, t.isValid = function (e) {
        return e && e.bit && e.ccBits
    }, t.from = function (e, n) {
        if (t.isValid(e)) return e;
        try {
            return function (e) {
                if ("string" != typeof e) throw new Error("Param is not a string");
                switch (e.toLowerCase()) {
                    case "numeric":
                        return t.NUMERIC;
                    case "alphanumeric":
                        return t.ALPHANUMERIC;
                    case "kanji":
                        return t.KANJI;
                    case "byte":
                        return t.BYTE;
                    default:
                        throw new Error("Unknown mode: " + e)
                }
            }(e)
        } catch (e) {
            return n
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        for (var n in t) void 0 === e[n] && (e[n] = t[n]);
        return e
    }, e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    var r = n(31);
    s.TYPED_ARRAY_SUPPORT = function () {
        try {
            var e = new Uint8Array(1);
            return e.__proto__ = {
                __proto__: Uint8Array.prototype,
                foo: function () {
                    return 42
                }
            }, 42 === e.foo()
        } catch (e) {
            return !1
        }
    }();
    var a = s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

    function s(e, t, n) {
        return s.TYPED_ARRAY_SUPPORT || this instanceof s ? "number" == typeof e ? u(this, e) : function (e, t, n, r) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function (e, t, n, r) {
                if (n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                var a;
                a = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
                s.TYPED_ARRAY_SUPPORT ? a.__proto__ = s.prototype : a = d(e, a);
                return a
            }(e, t, n, r);
            if ("string" == typeof t) return function (e, t) {
                var n = 0 | _(t),
                    r = o(e, n),
                    a = r.write(t);
                a !== n && (r = r.slice(0, a));
                return r
            }(e, t);
            return function (e, t) {
                if (s.isBuffer(t)) {
                    var n = 0 | i(t.length),
                        r = o(e, n);
                    return 0 === r.length ? r : (t.copy(r, 0, 0, n), r)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (a = t.length) != a ? o(e, 0) : d(e, t);
                    if ("Buffer" === t.type && Array.isArray(t.data)) return d(e, t.data)
                }
                var a;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }(this, e, t, n) : new s(e, t, n)
    }

    function i(e) {
        if (e >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
        return 0 | e
    }

    function o(e, t) {
        var n;
        return s.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(t)).__proto__ = s.prototype : (null === (n = e) && (n = new s(t)), n.length = t), n
    }

    function u(e, t) {
        var n = o(e, t < 0 ? 0 : 0 | i(t));
        if (!s.TYPED_ARRAY_SUPPORT)
            for (var r = 0; r < t; ++r) n[r] = 0;
        return n
    }

    function d(e, t) {
        for (var n = t.length < 0 ? 0 : 0 | i(t.length), r = o(e, n), a = 0; a < n; a += 1) r[a] = 255 & t[a];
        return r
    }

    function l(e, t) {
        var n;
        t = t || 1 / 0;
        for (var r = e.length, a = null, s = [], i = 0; i < r; ++i) {
            if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
                if (!a) {
                    if (n > 56319) {
                        (t -= 3) > -1 && s.push(239, 191, 189);
                        continue
                    }
                    if (i + 1 === r) {
                        (t -= 3) > -1 && s.push(239, 191, 189);
                        continue
                    }
                    a = n;
                    continue
                }
                if (n < 56320) {
                    (t -= 3) > -1 && s.push(239, 191, 189), a = n;
                    continue
                }
                n = 65536 + (a - 55296 << 10 | n - 56320)
            } else a && (t -= 3) > -1 && s.push(239, 191, 189);
            if (a = null, n < 128) {
                if ((t -= 1) < 0) break;
                s.push(n)
            } else if (n < 2048) {
                if ((t -= 2) < 0) break;
                s.push(n >> 6 | 192, 63 & n | 128)
            } else if (n < 65536) {
                if ((t -= 3) < 0) break;
                s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
            } else {
                if (!(n < 1114112)) throw new Error("Invalid code point");
                if ((t -= 4) < 0) break;
                s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
            }
        }
        return s
    }

    function _(e) {
        return s.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : l(e).length)
    }
    s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
        value: null,
        configurable: !0,
        enumerable: !1,
        writable: !1
    })), s.prototype.write = function (e, t, n) {
        void 0 === t ? (n = this.length, t = 0) : void 0 === n && "string" == typeof t ? (n = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(n) ? n |= 0 : n = void 0);
        var r = this.length - t;
        if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        return function (e, t, n, r) {
            return function (e, t, n, r) {
                for (var a = 0; a < r && !(a + n >= t.length || a >= e.length); ++a) t[a + n] = e[a];
                return a
            }(l(t, e.length - n), e, n, r)
        }(this, e, t, n)
    }, s.prototype.slice = function (e, t) {
        var n, r = this.length;
        if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), s.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = s.prototype;
        else {
            var a = t - e;
            n = new s(a, void 0);
            for (var i = 0; i < a; ++i) n[i] = this[i + e]
        }
        return n
    }, s.prototype.copy = function (e, t, n, r) {
        if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
        if (0 === e.length || 0 === this.length) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
        if (r < 0) throw new RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
        var a, i = r - n;
        if (this === e && n < t && t < r)
            for (a = i - 1; a >= 0; --a) e[a + t] = this[a + n];
        else if (i < 1e3 || !s.TYPED_ARRAY_SUPPORT)
            for (a = 0; a < i; ++a) e[a + t] = this[a + n];
        else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
        return i
    }, s.prototype.fill = function (e, t, n) {
        if ("string" == typeof e) {
            if ("string" == typeof t ? (t = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 === e.length) {
                var r = e.charCodeAt(0);
                r < 256 && (e = r)
            }
        } else "number" == typeof e && (e &= 255);
        if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
        if (n <= t) return this;
        var a;
        if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
            for (a = t; a < n; ++a) this[a] = e;
        else {
            var i = s.isBuffer(e) ? e : new s(e),
                o = i.length;
            for (a = 0; a < n - t; ++a) this[a + t] = i[a % o]
        }
        return this
    }, s.concat = function (e, t) {
        if (!r(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return o(null, 0);
        var n;
        if (void 0 === t)
            for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
        var a = u(null, t),
            i = 0;
        for (n = 0; n < e.length; ++n) {
            var d = e[n];
            if (!s.isBuffer(d)) throw new TypeError('"list" argument must be an Array of Buffers');
            d.copy(a, i), i += d.length
        }
        return a
    }, s.byteLength = _, s.prototype._isBuffer = !0, s.isBuffer = function (e) {
        return !(null == e || !e._isBuffer)
    }, e.exports = s
}, function (e, t, n) {
    var r = n(227),
        a = n(228),
        s = n(232).keccak256,
        i = n(233);

    function o(e) {
        var t = Math.round(e).toString(16);
        return 1 === t.length && (t = "0" + t), t
    }
    e.exports = {
        toHex: function (e) {
            for (var t = "", n = 0; n < e.length; n++) t += o(e[n]);
            return t
        },
        sha256: function (e) {
            var t = new r("SHA-256", "HEX");
            return t.update(e), t.getHash("HEX")
        },
        sha256Checksum: function (e) {
            return this.sha256(this.sha256(e)).substr(0, 8)
        },
        blake256: function (e) {
            return (new a).update(e, "hex").digest("hex")
        },
        blake256Checksum: function (e) {
            return this.blake256(this.blake256(e)).substr(0, 8)
        },
        blake2b: function (e, t) {
            return new i(t).update(function (e) {
                for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                return new Uint8Array(t)
            }(e)).digest("hex")
        },
        keccak256: function (e) {
            return s(e)
        },
        keccak256Checksum: function (e) {
            return s(e).toString().substr(0, 8)
        }
    }
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return function () {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4);

    function a(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function (e, t, n) {
        if (!t) return e;
        var s;
        if (n) s = n(t);
        else if (r.isURLSearchParams(t)) s = t.toString();
        else {
            var i = [];
            r.forEach(t, function (e, t) {
                null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function (e) {
                    r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), i.push(a(t) + "=" + a(e))
                }))
            }), s = i.join("&")
        }
        if (s) {
            var o = e.indexOf("#"); - 1 !== o && (e = e.slice(0, o)), e += (-1 === e.indexOf("?") ? "?" : "&") + s
        }
        return e
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return !(!e || !e.__CANCEL__)
    }
}, function (e, t, n) {
    "use strict";
    (function (t) {
        var r = n(4),
            a = n(42),
            s = {"Content-Type": "application/x-www-form-urlencoded"};

        function i(e, t) {
            !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var o, u = {
            adapter: (void 0 !== t && "[object process]" === Object.prototype.toString.call(t) ? o = n(16) : "undefined" != typeof XMLHttpRequest && (o = n(16)), o),
            transformRequest: [function (e, t) {
                return a(t, "Accept"), a(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
            }],
            transformResponse: [function (e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {}
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function (e) {
                return e >= 200 && e < 300
            }
        };
        u.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, r.forEach(["delete", "get", "head"], function (e) {
            u.headers[e] = {}
        }), r.forEach(["post", "put", "patch"], function (e) {
            u.headers[e] = r.merge(s)
        }), e.exports = u
    }).call(this, n(20))
}, function (e, t, n) {
    "use strict";
    var r = n(4),a = n(43),s = n(13),i = n(45),o = n(46),u = n(17);
    e.exports = function (e) {
        return new Promise(function (t, d) {
            var l = e.data,
                _ = e.headers;
            r.isFormData(l) && delete _["Content-Type"];
            var c = new XMLHttpRequest;
            if (e.auth) {
                var m = e.auth.username || "",
                    f = e.auth.password || "";
                _.Authorization = "Basic " + btoa(m + ":" + f)
            }
            if (c.open(e.method.toUpperCase(), s(e.url, e.params, e.paramsSerializer), !0), c.timeout = e.timeout, c.onreadystatechange = function () {
                    if (c && 4 === c.readyState && (0 !== c.status || c.responseURL && 0 === c.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in c ? i(c.getAllResponseHeaders()) : null,
                            r = {
                                data: e.responseType && "text" !== e.responseType ? c.response : c.responseText,
                                status: c.status,
                                statusText: c.statusText,
                                headers: n,
                                config: e,
                                request: c
                            };
                        a(t, d, r), c = null
                    }
                }, c.onabort = function () {
                    c && (d(u("Request aborted", e, "ECONNABORTED", c)), c = null)
                }, c.onerror = function () {
                    d(u("Network Error", e, null, c)), c = null
                }, c.ontimeout = function () {
                    d(u("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", c)), c = null
                }, r.isStandardBrowserEnv()) {
                var h = n(47),
                    p = (e.withCredentials || o(e.url)) && e.xsrfCookieName ? h.read(e.xsrfCookieName) : void 0;
                p && (_[e.xsrfHeaderName] = p)
            }
            if ("setRequestHeader" in c && r.forEach(_, function (e, t) {
                    void 0 === l && "content-type" === t.toLowerCase() ? delete _[t] : c.setRequestHeader(t, e)
                }), e.withCredentials && (c.withCredentials = !0), e.responseType) try {
                c.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && c.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && c.upload && c.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
                c && (c.abort(), d(e), c = null)
            }), void 0 === l && (l = null), c.send(l)
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(44);e.exports = function (e, t, n, a, s) {var i = new Error(e);return r(i, t, n, a, s)}
}, function (e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function (e, t) {
        t = t || {};var n = {};
        return r.forEach(["url", "method", "params", "data"], function (e) {void 0 !== t[e] && (n[e] = t[e])
        }), r.forEach(["headers", "auth", "proxy"], function (a) {
            r.isObject(t[a]) ? n[a] = r.deepMerge(e[a], t[a]) : void 0 !== t[a] ? n[a] = t[a] : r.isObject(e[a]) ? n[a] = r.deepMerge(e[a]) : void 0 !== e[a] && (n[a] = e[a])
        }), r.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], function (r) {void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])}), n
    }
}, function (e, t, n) {
    "use strict";
    function r(e) {this.message = e}
    r.prototype.toString = function () {return "Cancel" + (this.message ? ": " + this.message : "")}, r.prototype.__CANCEL__ = !0, e.exports = r
}, function (e, t) {
    var n, r, a = e.exports = {};
    function s() {throw new Error("setTimeout has not been defined")}
    function i() {throw new Error("clearTimeout has not been defined")}
    function o(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {return n(e, 0)} catch (t) {
            try {return n.call(null, e, 0)
            } catch (t) {return n.call(this, e, 0)}
        }
    }! function () {
        try {n = "function" == typeof setTimeout ? setTimeout : s
        } catch (e) {n = s}
        try {r = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {r = i}
    }();
    var u, d = [],l = !1,_ = -1;
    function c() {l && u && (l = !1, u.length ? d = u.concat(d) : _ = -1, d.length && m())    }
    function m() {
        if (!l) {
            var e = o(c);
            l = !0;
            for (var t = d.length; t;) {
                for (u = d, d = []; ++_ < t;) u && u[_].run();
                _ = -1, t = d.length
            }
            u = null, l = !1,
                function (e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function f(e, t) {this.fun = e, this.array = t}

    function h() {}
    a.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        d.push(new f(e, t)), 1 !== d.length || l || o(m)
    }, f.prototype.run = function () {this.fun.apply(null, this.array)
    }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = h, a.addListener = h, a.once = h, a.off = h, a.removeListener = h, a.removeAllListeners = h, a.emit = h, a.prependListener = h, a.prependOnceListener = h, a.listeners = function (e) {return []
    }, a.binding = function (e) {throw new Error("process.binding is not supported")
    }, a.cwd = function () {return "/"
    }, a.chdir = function (e) {throw new Error("process.chdir is not supported")
    }, a.umask = function () {return 0
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0
    }), t.default = function e(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        (0, a.default)(t);
        n = String(n);
        if (!n) return e(t, 4) || e(t, 6);
        if ("4" === n) return !!s.test(t) && t.split(".").sort(function (e, t) {return e - t})[3] <= 255;
        if ("6" === n) {
            var r = t.split(":"),o = !1,u = e(r[r.length - 1], 4),d = u ? 7 : 8;
            if (r.length > d) return !1;
            if ("::" === t) return !0;
            "::" === t.substr(0, 2) ? (r.shift(), r.shift(), o = !0) : "::" === t.substr(t.length - 2) && (r.pop(), r.pop(), o = !0);
            for (var l = 0; l < r.length; ++l)
                if ("" === r[l] && l > 0 && l < r.length - 1) {if (o) return !1;o = !0
                } else if (u && l === r.length - 1);
            else if (!i.test(r[l])) return !1;
            return o ? r.length >= 1 : r.length === d
        }
        return !1
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {default: r};
    var s = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
        i = /^[0-9A-F]{1,4}$/i;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0
    }), t.commaDecimal = t.dotDecimal = t.arabicLocales = t.englishLocales = t.decimal = t.alphanumeric = t.alpha = void 0;
    var r = {
        "en-US": /^[A-Z]+$/i,
        "bg-BG": /^[А-Я]+$/i,
        "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
        "da-DK": /^[A-ZÆØÅ]+$/i,
        "de-DE": /^[A-ZÄÖÜß]+$/i,
        "el-GR": /^[Α-ω]+$/i,
        "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
        "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
        "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
        "nb-NO": /^[A-ZÆØÅ]+$/i,
        "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
        "nn-NO": /^[A-ZÆØÅ]+$/i,
        "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
        "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
        "pt-PT": /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
        "ru-RU": /^[А-ЯЁ]+$/i,
        "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
        "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
        "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
        "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
        "sv-SE": /^[A-ZÅÄÖ]+$/i,
        "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
        "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
        "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
        ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
    };
    t.alpha = r;
    var a = {
        "en-US": /^[0-9A-Z]+$/i,
        "bg-BG": /^[0-9А-Я]+$/i,
        "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
        "da-DK": /^[0-9A-ZÆØÅ]+$/i,
        "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
        "el-GR": /^[0-9Α-ω]+$/i,
        "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
        "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
        "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
        "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
        "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
        "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
        "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
        "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
        "pt-PT": /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
        "ru-RU": /^[0-9А-ЯЁ]+$/i,
        "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
        "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
        "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
        "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
        "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
        "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
        "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
        "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
        ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
    };
    t.alphanumeric = a;
    var s = {"en-US": ".",ar: "٫"};
    t.decimal = s;
    var i = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
    t.englishLocales = i;
    for (var o, u = 0; u < i.length; u++) r[o = "en-".concat(i[u])] = r["en-US"], a[o] = a["en-US"], s[o] = s["en-US"];
    var d = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
    t.arabicLocales = d;
    for (var l, _ = 0; _ < d.length; _++) r[l = "ar-".concat(d[_])] = r.ar, a[l] = a.ar, s[l] = s.ar;
    var c = ["ar-EG", "ar-LB", "ar-LY"];
    t.dotDecimal = c;
    var m = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "es-ES", "fr-FR", "it-IT", "ku-IQ", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-PL", "pt-PT", "ru-RU", "sl-SI", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA"];
    t.commaDecimal = m;
    for (var f = 0; f < c.length; f++) s[c[f]] = s["en-US"];
    for (var h = 0; h < m.length; h++) s[m[h]] = ",";
    r["pt-BR"] = r["pt-PT"], a["pt-BR"] = a["pt-PT"], s["pt-BR"] = s["pt-PT"], r["pl-Pl"] = r["pl-PL"], a["pl-Pl"] = a["pl-PL"], s["pl-Pl"] = s["pl-PL"]
}, function (e, t, n) {
    e.exports = n(36)
}, function (e, t, n) {
    "use strict";
    function r() {var e = document.querySelector('meta[name="API_KEY"]');return e && e.getAttribute("content") || !1}
    n.d(t, "a", function () {return r})
}, function (e, t) {e.exports = function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}
}, function (e, t) {
    function n(e, t) {for (var n = 0; n < t.length; n++) {var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)}}
    e.exports = function (e, t, r) {return t && n(e.prototype, t), r && n(e, r), e}
}, function (e, t, n) {
    var r = function (e) {
        "use strict";
        var t, n = Object.prototype,
            r = n.hasOwnProperty,
            a = "function" == typeof Symbol ? Symbol : {},
            s = a.iterator || "@@iterator",
            i = a.asyncIterator || "@@asyncIterator",
            o = a.toStringTag || "@@toStringTag";

        function u(e, t, n, r) {
            var a = t && t.prototype instanceof h ? t : h,s = Object.create(a.prototype),i = new T(r || []);
            return s._invoke = function (e, t, n) {
                var r = l;
                return function (a, s) {
                    if (r === c) throw new Error("Generator is already running");
                    if (r === m) {if ("throw" === a) throw s;return x()}
                    for (n.method = a, n.arg = s;;) {
                        var i = n.delegate;
                        if (i) {var o = w(i, n);if (o) {if (o === f) continue;return o}}
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (r === l) throw r = m, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = c;
                        var u = d(e, t, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? m : _, u.arg === f) continue;
                            return {value: u.arg,done: n.done}
                        }
                        "throw" === u.type && (r = m, n.method = "throw", n.arg = u.arg)
                    }
                }
            }(e, n, i), s
        }

        function d(e, t, n) {
            try {return {type: "normal",arg: e.call(t, n)}
            } catch (e) {return {type: "throw",arg: e}}
        }
        e.wrap = u;
        var l = "suspendedStart",_ = "suspendedYield",c = "executing",m = "completed",f = {};
        function h() {}
        function p() {}
        function y() {}
        var M = {};
        M[s] = function () {return this};
        var L = Object.getPrototypeOf,g = L && L(L(S([])));
        g && g !== n && r.call(g, s) && (M = g);
        var Y = y.prototype = h.prototype = Object.create(M);
        function v(e) {["next", "throw", "return"].forEach(function (t) {e[t] = function (e) {return this._invoke(t, e)}})}
        function k(e) {
            var t;
            this._invoke = function (n, a) {
                function s() {
                    return new Promise(function (t, s) {
                        ! function t(n, a, s, i) {
                            var o = d(e[n], e, a);
                            if ("throw" !== o.type) {
                                var u = o.arg,
                                    l = u.value;
                                return l && "object" == typeof l && r.call(l, "__await") ? Promise.resolve(l.__await).then(function (e) {
                                    t("next", e, s, i)
                                }, function (e) {
                                    t("throw", e, s, i)
                                }) : Promise.resolve(l).then(function (e) {
                                    u.value = e, s(u)
                                }, function (e) {
                                    return t("throw", e, s, i)
                                })
                            }
                            i(o.arg)
                        }(n, a, t, s)
                    })
                }
                return t = t ? t.then(s, s) : s()
            }
        }

        function w(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
                if (n.delegate = null, "throw" === n.method) {
                    if (e.iterator.return && (n.method = "return", n.arg = t, w(e, n), "throw" === n.method)) return f;
                    n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return f
            }
            var a = d(r, e.iterator, n.arg);
            if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, f;
            var s = a.arg;
            return s ? s.done ? (n[e.resultName] = s.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, f) : s : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, f)
        }

        function b(e) {
            var t = {tryLoc: e[0]};
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function D(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function T(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(b, this), this.reset(!0)
        }

        function S(e) {
            if (e) {
                var n = e[s];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var a = -1,
                        i = function n() {
                            for (; ++a < e.length;)
                                if (r.call(e, a)) return n.value = e[a], n.done = !1, n;
                            return n.value = t, n.done = !0, n
                        };
                    return i.next = i
                }
            }
            return {
                next: x
            }
        }

        function x() {return {value: t,done: !0}}
        return p.prototype = Y.constructor = y, y.constructor = p, y[o] = p.displayName = "GeneratorFunction", e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
        }, e.mark = function (e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, o in e || (e[o] = "GeneratorFunction")), e.prototype = Object.create(Y), e
        }, e.awrap = function (e) {return {__await: e}
        }, v(k.prototype), k.prototype[i] = function () {return this
        }, e.AsyncIterator = k, e.async = function (t, n, r, a) {
            var s = new k(u(t, n, r, a));
            return e.isGeneratorFunction(n) ? s : s.next().then(function (e) {return e.done ? e.value : s.next()})
        }, v(Y), Y[o] = "Generator", Y[s] = function () {return this
        }, Y.toString = function () {return "[object Generator]"
        }, e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return t.reverse(),
                function n() {
                    for (; t.length;) {
                        var r = t.pop();
                        if (r in e) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, e.values = S, T.prototype = {
            constructor: T,
            reset: function (e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(D), !e)
                    for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
            },
            stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;

                function a(r, a) {
                    return o.type = "throw", o.arg = e, n.next = r, a && (n.method = "next", n.arg = t), !!a
                }
                for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                    var i = this.tryEntries[s],
                        o = i.completion;
                    if ("root" === i.tryLoc) return a("end");
                    if (i.tryLoc <= this.prev) {
                        var u = r.call(i, "catchLoc"),
                            d = r.call(i, "finallyLoc");
                        if (u && d) {
                            if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                        } else if (u) {
                            if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                        } else {
                            if (!d) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var a = this.tryEntries[n];
                    if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                        var s = a;
                        break
                    }
                }
                s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                var i = s ? s.completion : {};
                return i.type = e, i.arg = t, s ? (this.method = "next", this.next = s.finallyLoc, f) : this.complete(i)
            },
            complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
            },
            finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), D(n), f
                }
            },
            catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var a = r.arg;
                            D(n)
                        }
                        return a
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function (e, n, r) {
                return this.delegate = {
                    iterator: S(e),
                    resultName: n,
                    nextLoc: r
                }, "next" === this.method && (this.arg = t), f
            }
        }, e
    }(e.exports);
    try {regeneratorRuntime = r} catch (e) {Function("r", "regeneratorRuntime = r")(r)}
}, function (e, t) {e.exports = function (e) {if (Array.isArray(e)) {for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];return n}}
}, function (e, t) {e.exports = function (e) {if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)}
}, function (e, t) {e.exports = function () {throw new TypeError("Invalid attempt to spread non-iterable instance")}
}, function (e, t) {var n = {}.toString;e.exports = Array.isArray || function (e) {return "[object Array]" == n.call(e)}
}, function (e, t) {
    t.L = {bit: 1
    }, t.M = {bit: 0
    }, t.Q = {bit: 3
    }, t.H = {bit: 2
    }, t.isValid = function (e) {
        return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
    }, t.from = function (e, n) {
        if (t.isValid(e)) return e;
        try {
            return function (e) {
                if ("string" != typeof e) throw new Error("Param is not a string");
                switch (e.toLowerCase()) {
                    case "l":
                    case "low":
                        return t.L;
                    case "m":
                    case "medium":
                        return t.M;
                    case "q":
                    case "quartile":
                        return t.Q;
                    case "h":
                    case "high":
                        return t.H;
                    default:
                        throw new Error("Unknown EC Level: " + e)
                }
            }(e)
        } catch (e) {
            return n
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0
    }), t.default = function (e) {return (0, a.default)(e), e = Date.parse(e), isNaN(e) ? null : new Date(e)};
    var r, a = (r = n(1)) && r.__esModule ? r : {default: r};
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        (0, r.default)(e), (t = (0, a.default)(t, i)).allow_trailing_dot && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1));
        for (var n = e.split("."), s = 0; s < n.length; s++)
            if (n[s].length > 63) return !1;
        if (t.require_tld) {
            var o = n.pop();
            if (!n.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(o)) return !1;
            if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(o)) return !1
        }
        for (var u, d = 0; d < n.length; d++) {
            if (u = n[d], t.allow_underscores && (u = u.replace(/_/g, "")), !/^[a-z\u00a1-\uffff0-9-]+$/i.test(u)) return !1;
            if (/[\uff01-\uff5e]/.test(u)) return !1;
            if ("-" === u[0] || "-" === u[u.length - 1]) return !1
        }
        return !0
    };
    var r = s(n(1)),a = s(n(8));
    function s(e) {return e && e.__esModule ? e : {default: e}}
    var i = {
        require_tld: !0,
        allow_underscores: !1,
        allow_trailing_dot: !1
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = function (e, t) {
        return e.some(function (e) {
            return t === e
        })
    };
    t.default = r, e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    var r = n(4),a = n(12),s = n(38),i = n(18);

    function o(e) {
        var t = new s(e),n = a(s.prototype.request, t);
        return r.extend(n, s.prototype, t), r.extend(n, t), n
    }
    var u = o(n(15));
    u.Axios = s, u.create = function (e) {
        return o(i(u.defaults, e))
    }, u.Cancel = n(19), u.CancelToken = n(50), u.isCancel = n(14), u.all = function (e) {
        return Promise.all(e)
    }, u.spread = n(51), e.exports = u, e.exports.default = u
}, function (e, t) {
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function (e) {return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)}
}, function (e, t, n) {
    "use strict";
    var r = n(4),a = n(13),s = n(39),i = n(40),o = n(18);

    function u(e) {
        this.defaults = e, this.interceptors = {
            request: new s,
            response: new s
        }
    }
    u.prototype.request = function (e) {
        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = o(this.defaults, e)).method = e.method ? e.method.toLowerCase() : "get";
        var t = [i, void 0],n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function (e) {
                t.unshift(e.fulfilled, e.rejected)
            }), this.interceptors.response.forEach(function (e) {
                t.push(e.fulfilled, e.rejected)
            }); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, u.prototype.getUri = function (e) {
        return e = o(this.defaults, e), a(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    }, r.forEach(["delete", "get", "head", "options"], function (e) {
        u.prototype[e] = function (t, n) {return this.request(r.merge(n || {}, {method: e,url: t}))}
    }), r.forEach(["post", "put", "patch"], function (e) {
        u.prototype[e] = function (t, n, a) {return this.request(r.merge(a || {}, {method: e,url: t,data: n}))}
    }), e.exports = u
}, function (e, t, n) {
    "use strict";
    var r = n(4);
    function a() {this.handlers = []}
    a.prototype.use = function (e, t) {return this.handlers.push({fulfilled: e,rejected: t}), this.handlers.length - 1
    }, a.prototype.eject = function (e) {this.handlers[e] && (this.handlers[e] = null)
    }, a.prototype.forEach = function (e) {r.forEach(this.handlers, function (t) {null !== t && e(t)})
    }, e.exports = a
}, function (e, t, n) {
    "use strict";
    var r = n(4),a = n(41),s = n(14),i = n(15),o = n(48),u = n(49);
    function d(e) {e.cancelToken && e.cancelToken.throwIfRequested()}
    e.exports = function (e) {
        return d(e), e.baseURL && !o(e.url) && (e.url = u(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = a(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
            delete e.headers[t]
        }), (e.adapter || i.adapter)(e).then(function (t) {
            return d(e), t.data = a(t.data, t.headers, e.transformResponse), t
        }, function (t) {
            return s(t) || (d(e), t && t.response && (t.response.data = a(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function (e, t, n) {
        return r.forEach(n, function (n) {
            e = n(e, t)
        }), e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function (e, t) {
        r.forEach(e, function (n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(17);
    e.exports = function (e, t, n) {
        var a = n.config.validateStatus;
        !a || a(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n))
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, a) {
        return e.config = t, n && (e.code = n), e.request = r, e.response = a, e.isAxiosError = !0, e.toJSON = function () {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }, e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4),
        a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function (e) {
        var t, n, s, i = {};
        return e ? (r.forEach(e.split("\n"), function (e) {
            if (s = e.indexOf(":"), t = r.trim(e.substr(0, s)).toLowerCase(), n = r.trim(e.substr(s + 1)), t) {
                if (i[t] && a.indexOf(t) >= 0) return;
                i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n
            }
        }), i) : i
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = r.isStandardBrowserEnv() ? function () {
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");

        function a(e) {
            var r = e;
            return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }
        return e = a(window.location.href),
            function (t) {
                var n = r.isString(t) ? a(t) : t;
                return n.protocol === e.protocol && n.host === e.host
            }
    }() : function () {
        return !0
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = r.isStandardBrowserEnv() ? {
        write: function (e, t, n, a, s, i) {
            var o = [];
            o.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), r.isString(a) && o.push("path=" + a), r.isString(s) && o.push("domain=" + s), !0 === i && o.push("secure"), document.cookie = o.join("; ")
        },
        read: function (e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove: function (e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function () {},
        read: function () {
            return null
        },
        remove: function () {}
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(19);

    function a(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
            t = e
        });
        var n = this;
        e(function (e) {
            n.reason || (n.reason = new r(e), t(n.reason))
        })
    }
    a.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, a.source = function () {
        var e;
        return {
            token: new a(function (t) {
                e = t
            }),
            cancel: e
        }
    }, e.exports = a
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return function (t) {
            return e.apply(null, t)
        }
    }
}, function (e, t, n) {
    "use strict"
}, function (e, t, n) {
    var r = n(244);
    e.exports = function (e) {
        var t, n = "",
            a = {
                bnbmainnet: {
                    tiker: "bnb",
                    sub: "mainnet"
                },
                usdterc20: {
                    tiker: "usdt",
                    sub: "erc20"
                }
            };
        return n = n + "<div" + r.attr("class", r.classes([`exchange-select-wrapper select-wrapper-${e.type}`], [!0]), !1, !0) + '></div><div class="exchange-select"><div class="search-icon"></div><input class="exchange-select--search" type="text" autocomplete="off"><div class="exchange-list-container">', e.currencies && e.currencies.length ? (n = n + "<ul" + r.attr("class", r.classes([`exchange-list exchange-list-${e.type}`], [!0]), !1, !0) + ">", function () {
            var s = e.currencies;
            if ("number" == typeof s.length)
                for (var i = 0, o = s.length; i < o; i++) {
                    var u = s[i];
                    n = n + '<li onclick="cra()" class="exchange-list-item"' + r.attr("data-coin", `${u.ticker}`, !0, !0) + r.attr("data-name", `${u.name}`, !0, !0) + '><img class="currency-image" type="image/svg+xml"' + r.attr("src", `${u.image}`, !0, !0) + ' data-image="coin">', n = (n = a[u.ticker] ? n + '<span class="currency-ticker">' + r.escape(null == (t = a[u.ticker].tiker) ? "" : t) + "<sup>" + r.escape(null == (t = a[u.ticker].sub) ? "" : t) + "</sup></span>" : n + '<span class="currency-ticker">' + r.escape(null == (t = u.ticker) ? "" : t) + "</span>") + '<span class="currency-name">' + r.escape(null == (t = u.name) ? "" : t) + "</span></li>"
                } else {
                    o = 0;
                    for (var i in s) {
                        o++;
                        u = s[i];
                        n = n + '<li onclick="cra()" class="exchange-list-item"' + r.attr("data-coin", `${u.ticker}`, !0, !0) + r.attr("data-name", `${u.name}`, !0, !0) + '><img class="currency-image" type="image/svg+xml"' + r.attr("src", `${u.image}`, !0, !0) + ' data-image="coin">', n = (n = a[u.ticker] ? n + '<span class="currency-ticker">' + r.escape(null == (t = a[u.ticker].tiker) ? "" : t) + "<sup>" + r.escape(null == (t = a[u.ticker].sub) ? "" : t) + "</sup></span>" : n + '<span class="currency-ticker">' + r.escape(null == (t = u.ticker) ? "" : t) + "</span>") + '<span class="currency-name">' + r.escape(null == (t = u.name) ? "" : t) + "</span></li>"
                    }
                }
        }.call(this), n += '<li class="no-coincides novisible">Currency not found</li></ul>') : n += '<div class="empty-list">Currency not found</div>', n += "</div></div>"
    }
}, function (e, t, n) {
    var r = n(32),
        a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
        s = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
    t.getBlocksCount = function (e, t) {
        switch (t) {
            case r.L:
                return a[4 * (e - 1) + 0];
            case r.M:
                return a[4 * (e - 1) + 1];
            case r.Q:
                return a[4 * (e - 1) + 2];
            case r.H:
                return a[4 * (e - 1) + 3];
            default:
                return
        }
    }, t.getTotalCodewordsCount = function (e, t) {
        switch (t) {
            case r.L:
                return s[4 * (e - 1) + 0];
            case r.M:
                return s[4 * (e - 1) + 1];
            case r.Q:
                return s[4 * (e - 1) + 2];
            case r.H:
                return s[4 * (e - 1) + 3];
            default:
                return
        }
    }
}, function (e, t) {
    t.isValid = function (e) {
        return !isNaN(e) && e >= 1 && e <= 40
    }
}, function (e, t) {
    var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
    t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(r, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
    var a = new RegExp("^" + n + "$"),
        s = new RegExp("^[0-9]+$"),
        i = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    t.testKanji = function (e) {
        return a.test(e)
    }, t.testNumeric = function (e) {
        return s.test(e)
    }, t.testAlphanumeric = function (e) {
        return i.test(e)
    }
}, function (e, t) {
    function n(e) {
        if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw new Error("Color should be defined as hex string");
        var t = e.slice().replace("#", "").split("");
        if (t.length < 3 || 5 === t.length || t.length > 8) throw new Error("Invalid hex color: " + e);
        3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map(function (e) {
            return [e, e]
        }))), 6 === t.length && t.push("F", "F");
        var n = parseInt(t.join(""), 16);
        return {
            r: n >> 24 & 255,
            g: n >> 16 & 255,
            b: n >> 8 & 255,
            a: 255 & n,
            hex: "#" + t.slice(0, 6).join("")
        }
    }
    t.getOptions = function (e) {
        e || (e = {}), e.color || (e.color = {});
        var t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
            r = e.width && e.width >= 21 ? e.width : void 0,
            a = e.scale || 4;
        return {
            width: r,
            scale: r ? 4 : a,
            margin: t,
            color: {
                dark: n(e.color.dark || "#000000ff"),
                light: n(e.color.light || "#ffffffff")
            },
            type: e.type,
            rendererOpts: e.rendererOpts || {}
        }
    }, t.getScale = function (e, t) {
        return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
    }, t.getImageWidth = function (e, n) {
        var r = t.getScale(e, n);
        return Math.floor((e + 2 * n.margin) * r)
    }, t.qrToImageData = function (e, n, r) {
        for (var a = n.modules.size, s = n.modules.data, i = t.getScale(a, r), o = Math.floor((a + 2 * r.margin) * i), u = r.margin * i, d = [r.color.light, r.color.dark], l = 0; l < o; l++)
            for (var _ = 0; _ < o; _++) {
                var c = 4 * (l * o + _),
                    m = r.color.light;
                if (l >= u && _ >= u && l < o - u && _ < o - u) m = d[s[Math.floor((l - u) / i) * a + Math.floor((_ - u) / i)] ? 1 : 0];
                e[c++] = m.r, e[c++] = m.g, e[c++] = m.b, e[c] = m.a
            }
    }
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function (e) {return /^nm$/i.test(e)},
            meridiem: function (e, t, n) {return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"},
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {1: "١",2: "٢",3: "٣",4: "٤",5: "٥",6: "٦",7: "٧",8: "٨",9: "٩",0: "٠"},
            n = {"١": "1","٢": "2","٣": "3","٤": "4","٥": "5","٦": "6","٧": "7","٨": "8","٩": "9","٠": "0"},
            r = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            a = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            s = function (e) {
                return function (t, n, s, i) {
                    var o = r(t),
                        u = a[e][r(t)];
                    return 2 === o && (u = u[n ? 0 : 1]), u.replace(/%d/i, t)
                }
            },
            i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar", {
            months: i,
            monthsShort: i,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: s("s"),
                ss: s("s"),
                m: s("m"),
                mm: s("m"),
                h: s("h"),
                hh: s("h"),
                d: s("d"),
                dd: s("d"),
                M: s("M"),
                MM: s("M"),
                y: s("y"),
                yy: s("y")
            },
            preparse: function (e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("ar-dz", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 0,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("ar-kw", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 0,
                doy: 12
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {1: "1",2: "2",3: "3",4: "4",5: "5",6: "6",7: "7",8: "8",9: "9",0: "0"},
            n = function (e) {return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5},
            r = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            a = function (e) {return function (t, a, s, i) {var o = n(t),u = r[e][n(t)];return 2 === o && (u = u[a ? 0 : 1]), u.replace(/%d/i, t)}},
            s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar-ly", {
            months: s,
            monthsShort: s,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {return "م" === e},
            meridiem: function (e, t, n) {return e < 12 ? "ص" : "م"},
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {future: "بعد %s",past: "منذ %s",s: a("s"),ss: a("s"),m: a("m"),mm: a("m"),h: a("h"),hh: a("h"),d: a("d"),dd: a("d"),M: a("M"),MM: a("M"),y: a("y"),yy: a("y")},
            preparse: function (e) {return e.replace(/،/g, ",")},
            postformat: function (e) {return e.replace(/\d/g, function (e) {return t[e]}).replace(/,/g, "،")},
            week: {dow: 6,doy: 12}
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 6,doy: 12}
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {1: "١",2: "٢",3: "٣",4: "٤",5: "٥",6: "٦",7: "٧",8: "٨",9: "٩",0: "٠"},
            n = {"١": "1","٢": "2","٣": "3","٤": "4","٥": "5","٦": "6","٧": "7","٨": "8","٩": "9","٠": "0"};
        e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function (e) {return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {return n[e]}).replace(/،/g, ",")},
            postformat: function (e) {return e.replace(/\d/g, function (e) {return t[e]}).replace(/,/g, "،")},
            week: {dow: 0,doy: 6}
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 1,doy: 4}})
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        };
        e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "birneçə saniyə",
                ss: "%d saniyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function (e) {
                return /^(gündüz|axşam)$/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function (e) {
                if (0 === e) return e + "-ıncı";
                var n = e % 10;
                return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n) {
            var r, a;
            return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + (r = +e, a = {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            } [n].split("_"), r % 10 == 1 && r % 100 != 11 ? a[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? a[1] : a[2])
        }
        e.defineLocale("be", {
            months: {
                format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
                format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function () {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "дзень",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function (e) {
                return /^(дня|вечара)$/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function (e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                    case "D":
                        return e + "-га";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[В изминалата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
            weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
            },
            calendar: {
                sameDay: "[Bi lɛrɛ] LT",
                nextDay: "[Sini lɛrɛ] LT",
                nextWeek: "dddd [don lɛrɛ] LT",
                lastDay: "[Kunu lɛrɛ] LT",
                lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s kɔnɔ",
                past: "a bɛ %s bɔ",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "lɛrɛ kelen",
                hh: "lɛrɛ %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                0: "০"
            },
            n = {
                "১": "1",
                "২": "2",
                "৩": "3",
                "৪": "4",
                "৫": "5",
                "৬": "6",
                "৭": "7",
                "৮": "8",
                "৯": "9",
                "০": "0"
            };
        e.defineLocale("bn", {
            months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                ss: "%d সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function (e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
                1: "༡",
                2: "༢",
                3: "༣",
                4: "༤",
                5: "༥",
                6: "༦",
                7: "༧",
                8: "༨",
                9: "༩",
                0: "༠"
            },
            n = {
                "༡": "1",
                "༢": "2",
                "༣": "3",
                "༤": "4",
                "༥": "5",
                "༦": "6",
                "༧": "7",
                "༨": "8",
                "༩": "9",
                "༠": "0"
            };
        e.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                ss: "%d སྐར་ཆ།",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function (e) {
                return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n) {
            return e + " " + function (e, t) {
                return 2 === t ? function (e) {
                    var t = {
                        m: "v",
                        b: "v",
                        d: "z"
                    };
                    return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
                }(e) : e
            }({
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            } [n], e)
        }
        e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: function (e) {
                    switch (function e(t) {
                        return t > 9 ? e(t % 10) : t
                    }(e)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return e + " bloaz";
                        default:
                            return e + " vloaz"
                    }
                }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function (e) {
                return e + (1 === e ? "añ" : "vet")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n) {
            var r = e + " ";
            switch (n) {
                case "ss":
                    return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return r += 1 === e ? "dan" : "dana";
                case "MM":
                    return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function () {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function () {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function () {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (e, t) {
                var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return "w" !== t && "W" !== t || (n = "a"), e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
            r = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
            a = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

        function s(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }

        function i(e, t, n, r) {
            var a = e + " ";
            switch (n) {
                case "s":
                    return t || r ? "pár sekund" : "pár sekundami";
                case "ss":
                    return t || r ? a + (s(e) ? "sekundy" : "sekund") : a + "sekundami";
                case "m":
                    return t ? "minuta" : r ? "minutu" : "minutou";
                case "mm":
                    return t || r ? a + (s(e) ? "minuty" : "minut") : a + "minutami";
                case "h":
                    return t ? "hodina" : r ? "hodinu" : "hodinou";
                case "hh":
                    return t || r ? a + (s(e) ? "hodiny" : "hodin") : a + "hodinami";
                case "d":
                    return t || r ? "den" : "dnem";
                case "dd":
                    return t || r ? a + (s(e) ? "dny" : "dní") : a + "dny";
                case "M":
                    return t || r ? "měsíc" : "měsícem";
                case "MM":
                    return t || r ? a + (s(e) ? "měsíce" : "měsíců") : a + "měsíci";
                case "y":
                    return t || r ? "rok" : "rokem";
                case "yy":
                    return t || r ? a + (s(e) ? "roky" : "let") : a + "lety"
            }
        }
        e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zítra v] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },
                lastDay: "[včera v] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: i,
                ss: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: i,
                dd: i,
                M: i,
                MM: i,
                y: i,
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                ss: "%d ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function (e) {
                var t = "";
                return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "på dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }
        e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }
        e.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }
        e.defineLocale("de-ch", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
            n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
        e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function (e) {
                return "މފ" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "މކ" : "މފ"
            },
            calendar: {
                sameDay: "[މިއަދު] LT",
                nextDay: "[މާދަމާ] LT",
                nextWeek: "dddd LT",
                lastDay: "[އިއްޔެ] LT",
                lastWeek: "[ފާއިތުވި] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ތެރޭގައި %s",
                past: "ކުރިން %s",
                s: "ސިކުންތުކޮޅެއް",
                ss: "d% ސިކުންތު",
                m: "މިނިޓެއް",
                mm: "މިނިޓު %d",
                h: "ގަޑިއިރެއް",
                hh: "ގަޑިއިރު %d",
                d: "ދުވަހެއް",
                dd: "ދުވަސް %d",
                M: "މަހެއް",
                MM: "މަސް %d",
                y: "އަހަރެއް",
                yy: "އަހަރު %d"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 7,
                doy: 12
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function (e, t) {
                return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
            },
            isPM: function (e) {
                return "μ" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function (e, t) {
                var n, r = this._calendarEl[e],
                    a = t && t.hours();
                return ((n = r) instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (r = r.apply(t)), r.replace("{}", a % 12 == 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                ss: "%d δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            dayOfMonthOrdinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("en-SG", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("en-il", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-a de] MMMM, YYYY",
                LLL: "D[-a de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function (e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "antaŭ %s",
                s: "sekundoj",
                ss: "%d sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? a[n][2] ? a[n][2] : a[n][1] : r ? a[n][0] : a[n][1]
        }
        e.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d päeva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
                1: "۱",
                2: "۲",
                3: "۳",
                4: "۴",
                5: "۵",
                6: "۶",
                7: "۷",
                8: "۸",
                9: "۹",
                0: "۰"
            },
            n = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            };
        e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function (e) {
                return /بعد از ظهر/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چند ثانیه",
                ss: "ثانیه d%",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/[۰-۹]/g, function (e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];

        function r(e, r, a, s) {
            var i = "";
            switch (a) {
                case "s":
                    return s ? "muutaman sekunnin" : "muutama sekunti";
                case "ss":
                    return s ? "sekunnin" : "sekuntia";
                case "m":
                    return s ? "minuutin" : "minuutti";
                case "mm":
                    i = s ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return s ? "tunnin" : "tunti";
                case "hh":
                    i = s ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return s ? "päivän" : "päivä";
                case "dd":
                    i = s ? "päivän" : "päivää";
                    break;
                case "M":
                    return s ? "kuukauden" : "kuukausi";
                case "MM":
                    i = s ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return s ? "vuoden" : "vuosi";
                case "yy":
                    i = s ? "vuoden" : "vuotta"
            }
            return i = function (e, r) {
                return e < 10 ? r ? n[e] : t[e] : e
            }(e, s) + " " + i
        }
        e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                ss: "%d sekundir",
                m: "ein minuttur",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaður",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function (e, t) {
                switch (t) {
                    case "D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
                switch (t) {
                    default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                }
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
                switch (t) {
                    default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function (e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("ga", {
            months: ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Méitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deaireadh Fómhair", "Samhain", "Nollaig"],
            monthsShort: ["Eaná", "Feab", "Márt", "Aibr", "Beal", "Méit", "Iúil", "Lúna", "Meán", "Deai", "Samh", "Noll"],
            monthsParseExact: !0,
            weekdays: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Satharn"],
            weekdaysShort: ["Dom", "Lua", "Mái", "Céa", "Déa", "hAo", "Sat"],
            weekdaysMin: ["Do", "Lu", "Má", "Ce", "Dé", "hA", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Inniu ag] LT",
                nextDay: "[Amárach ag] LT",
                nextWeek: "dddd [ag] LT",
                lastDay: "[Inné aig] LT",
                lastWeek: "dddd [seo caite] [ag] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i %s",
                past: "%s ó shin",
                s: "cúpla soicind",
                ss: "%d soicind",
                m: "nóiméad",
                mm: "%d nóiméad",
                h: "uair an chloig",
                hh: "%d uair an chloig",
                d: "lá",
                dd: "%d lá",
                M: "mí",
                MM: "%d mí",
                y: "bliain",
                yy: "%d bliain"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("gd", {
            months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
            monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
            monthsParseExact: !0,
            weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-màireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dè aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mìos",
                MM: "%d mìosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextDay: function () {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                lastDay: function () {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                },
                lastWeek: function () {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                s: ["thodde secondanim", "thodde second"],
                ss: [e + " secondanim", e + " second"],
                m: ["eka mintan", "ek minute"],
                mm: [e + " mintanim", e + " mintam"],
                h: ["eka voran", "ek vor"],
                hh: [e + " voranim", e + " voram"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disanim", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineanim", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsanim", e + " vorsam"]
            };
            return t ? a[n][0] : a[n][1]
        }
        e.defineLocale("gom-latn", {
            months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Ieta to] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fatlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function (e, t) {
                switch (t) {
                    case "D":
                        return e + "er";
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                    case "w":
                    case "W":
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            },
            meridiemParse: /rati|sokalli|donparam|sanje/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
                1: "૧",
                2: "૨",
                3: "૩",
                4: "૪",
                5: "૫",
                6: "૬",
                7: "૭",
                8: "૮",
                9: "૯",
                0: "૦"
            },
            n = {
                "૧": "1",
                "૨": "2",
                "૩": "3",
                "૪": "4",
                "૫": "5",
                "૬": "6",
                "૭": "7",
                "૮": "8",
                "૯": "9",
                "૦": "0"
            };
        e.defineLocale("gu", {
            months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
            monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
            monthsParseExact: !0,
            weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            longDateFormat: {
                LT: "A h:mm વાગ્યે",
                LTS: "A h:mm:ss વાગ્યે",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
            },
            calendar: {
                sameDay: "[આજ] LT",
                nextDay: "[કાલે] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ગઇકાલે] LT",
                lastWeek: "[પાછલા] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s મા",
                past: "%s પેહલા",
                s: "અમુક પળો",
                ss: "%d સેકંડ",
                m: "એક મિનિટ",
                mm: "%d મિનિટ",
                h: "એક કલાક",
                hh: "%d કલાક",
                d: "એક દિવસ",
                dd: "%d દિવસ",
                M: "એક મહિનો",
                MM: "%d મહિનો",
                y: "એક વર્ષ",
                yy: "%d વર્ષ"
            },
            preparse: function (e) {
                return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                ss: "%d שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function (e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function (e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function (e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function (e) {
                    return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function (e) {
                return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        e.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                ss: "%d सेकंड",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n) {
            var r = e + " ";
            switch (n) {
                case "ss":
                    return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return r += 1 === e ? "dan" : "dana";
                case "MM":
                    return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("hr", {
            months: {
                format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

        function n(e, t, n, r) {
            var a = e;
            switch (n) {
                case "s":
                    return r || t ? "néhány másodperc" : "néhány másodperce";
                case "ss":
                    return a + (r || t) ? " másodperc" : " másodperce";
                case "m":
                    return "egy" + (r || t ? " perc" : " perce");
                case "mm":
                    return a + (r || t ? " perc" : " perce");
                case "h":
                    return "egy" + (r || t ? " óra" : " órája");
                case "hh":
                    return a + (r || t ? " óra" : " órája");
                case "d":
                    return "egy" + (r || t ? " nap" : " napja");
                case "dd":
                    return a + (r || t ? " nap" : " napja");
                case "M":
                    return "egy" + (r || t ? " hónap" : " hónapja");
                case "MM":
                    return a + (r || t ? " hónap" : " hónapja");
                case "y":
                    return "egy" + (r || t ? " év" : " éve");
                case "yy":
                    return a + (r || t ? " év" : " éve")
            }
            return ""
        }

        function r(e) {
            return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
        }
        e.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function (e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function (e, t, n) {
                return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function () {
                    return r.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function () {
                    return r.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("hy-am", {
            months: {
                format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT",
                nextDay: "[վաղը] LT",
                lastDay: "[երեկ] LT",
                nextWeek: function () {
                    return "dddd [օրը ժամը] LT"
                },
                lastWeek: function () {
                    return "[անցած] dddd [օրը ժամը] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                ss: "%d վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function (e) {
                return /^(ցերեկվա|երեկոյան)$/.test(e)
            },
            meridiem: function (e) {
                return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function (e, t) {
                switch (t) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === e ? e + "-ին" : e + "-րդ";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e) {
            return e % 100 == 11 || e % 10 != 1
        }

        function n(e, n, r, a) {
            var s = e + " ";
            switch (r) {
                case "s":
                    return n || a ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case "ss":
                    return t(e) ? s + (n || a ? "sekúndur" : "sekúndum") : s + "sekúnda";
                case "m":
                    return n ? "mínúta" : "mínútu";
                case "mm":
                    return t(e) ? s + (n || a ? "mínútur" : "mínútum") : n ? s + "mínúta" : s + "mínútu";
                case "hh":
                    return t(e) ? s + (n || a ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
                case "d":
                    return n ? "dagur" : a ? "dag" : "degi";
                case "dd":
                    return t(e) ? n ? s + "dagar" : s + (a ? "daga" : "dögum") : n ? s + "dagur" : s + (a ? "dag" : "degi");
                case "M":
                    return n ? "mánuður" : a ? "mánuð" : "mánuði";
                case "MM":
                    return t(e) ? n ? s + "mánuðir" : s + (a ? "mánuði" : "mánuðum") : n ? s + "mánuður" : s + (a ? "mánuð" : "mánuði");
                case "y":
                    return n || a ? "ár" : "ári";
                case "yy":
                    return t(e) ? s + (n || a ? "ár" : "árum") : s + (n || a ? "ár" : "ári")
            }
        }
        e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("it-ch", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("ja", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日 dddd HH:mm",
                l: "YYYY/MM/DD",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日(ddd) HH:mm"
            },
            meridiemParse: /午前|午後/i,
            isPM: function (e) {
                return "午後" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: function (e) {
                    return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT"
                },
                lastDay: "[昨日] LT",
                lastWeek: function (e) {
                    return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT"
                },
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function (e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                ss: "%d秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("ka", {
            months: {
                standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
                standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                },
                past: function (e) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
                },
                s: "რამდენიმე წამი",
                ss: "%d წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function (e) {
                return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
        };
        e.defineLocale("kk", {
            months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгін сағат] LT",
                nextDay: "[Ертең сағат] LT",
                nextWeek: "dddd [сағат] LT",
                lastDay: "[Кеше сағат] LT",
                lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ішінде",
                past: "%s бұрын",
                s: "бірнеше секунд",
                ss: "%d секунд",
                m: "бір минут",
                mm: "%d минут",
                h: "бір сағат",
                hh: "%d сағат",
                d: "бір күн",
                dd: "%d күн",
                M: "бір ай",
                MM: "%d ай",
                y: "бір жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function (e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
                1: "១",
                2: "២",
                3: "៣",
                4: "៤",
                5: "៥",
                6: "៦",
                7: "៧",
                8: "៨",
                9: "៩",
                0: "០"
            },
            n = {
                "១": "1",
                "២": "2",
                "៣": "3",
                "៤": "4",
                "៥": "5",
                "៦": "6",
                "៧": "7",
                "៨": "8",
                "៩": "9",
                "០": "0"
            };
        e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ព្រឹក|ល្ងាច/,
            isPM: function (e) {
                return "ល្ងាច" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ព្រឹក" : "ល្ងាច"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                ss: "%d វិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            dayOfMonthOrdinalParse: /ទី\d{1,2}/,
            ordinal: "ទី%d",
            preparse: function (e) {
                return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
                1: "೧",
                2: "೨",
                3: "೩",
                4: "೪",
                5: "೫",
                6: "೬",
                7: "೭",
                8: "೮",
                9: "೯",
                0: "೦"
            },
            n = {
                "೧": "1",
                "೨": "2",
                "೩": "3",
                "೪": "4",
                "೫": "5",
                "೬": "6",
                "೭": "7",
                "೮": "8",
                "೯": "9",
                "೦": "0"
            };
        e.defineLocale("kn", {
            months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
            monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
            monthsParseExact: !0,
            weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[ಇಂದು] LT",
                nextDay: "[ನಾಳೆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ನಿನ್ನೆ] LT",
                lastWeek: "[ಕೊನೆಯ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ನಂತರ",
                past: "%s ಹಿಂದೆ",
                s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                ss: "%d ಸೆಕೆಂಡುಗಳು",
                m: "ಒಂದು ನಿಮಿಷ",
                mm: "%d ನಿಮಿಷ",
                h: "ಒಂದು ಗಂಟೆ",
                hh: "%d ಗಂಟೆ",
                d: "ಒಂದು ದಿನ",
                dd: "%d ದಿನ",
                M: "ಒಂದು ತಿಂಗಳು",
                MM: "%d ತಿಂಗಳು",
                y: "ಒಂದು ವರ್ಷ",
                yy: "%d ವರ್ಷ"
            },
            preparse: function (e) {
                return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function (e) {
                return e + "ನೇ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h:mm",
                LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                l: "YYYY.MM.DD.",
                ll: "YYYY년 MMMM D일",
                lll: "YYYY년 MMMM D일 A h:mm",
                llll: "YYYY년 MMMM D일 dddd A h:mm"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "1분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function (e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "일";
                    case "M":
                        return e + "월";
                    case "w":
                    case "W":
                        return e + "주";
                    default:
                        return e
                }
            },
            meridiemParse: /오전|오후/,
            isPM: function (e) {
                return "오후" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "오전" : "오후"
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            },
            r = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
        e.defineLocale("ku", {
            months: r,
            monthsShort: r,
            weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
            weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ئێواره‌|به‌یانی/,
            isPM: function (e) {
                return /ئێواره‌/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "به‌یانی" : "ئێواره‌"
            },
            calendar: {
                sameDay: "[ئه‌مرۆ كاتژمێر] LT",
                nextDay: "[به‌یانی كاتژمێر] LT",
                nextWeek: "dddd [كاتژمێر] LT",
                lastDay: "[دوێنێ كاتژمێر] LT",
                lastWeek: "dddd [كاتژمێر] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "له‌ %s",
                past: "%s",
                s: "چه‌ند چركه‌یه‌ك",
                ss: "چركه‌ %d",
                m: "یه‌ك خوله‌ك",
                mm: "%d خوله‌ك",
                h: "یه‌ك كاتژمێر",
                hh: "%d كاتژمێر",
                d: "یه‌ك ڕۆژ",
                dd: "%d ڕۆژ",
                M: "یه‌ك مانگ",
                MM: "%d مانگ",
                y: "یه‌ك ساڵ",
                yy: "%d ساڵ"
            },
            preparse: function (e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
        };
        e.defineLocale("ky", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгүн саат] LT",
                nextDay: "[Эртең саат] LT",
                nextWeek: "dddd [саат] LT",
                lastDay: "[Кечээ саат] LT",
                lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ичинде",
                past: "%s мурун",
                s: "бирнече секунд",
                ss: "%d секунд",
                m: "бир мүнөт",
                mm: "%d мүнөт",
                h: "бир саат",
                hh: "%d саат",
                d: "бир күн",
                dd: "%d күн",
                M: "бир ай",
                MM: "%d ай",
                y: "бир жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function (e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? a[n][0] : a[n][1]
        }

        function n(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10;
                return n(0 === t ? e / 10 : t)
            }
            if (e < 1e4) {
                for (; e >= 10;) e /= 10;
                return n(e)
            }
            return n(e /= 1e3)
        }
        e.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: function (e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                },
                past: function (e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                },
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d Méint",
                y: t,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function (e) {
                return "ຕອນແລງ" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                ss: "%d ວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function (e) {
                return "ທີ່" + e
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
            ss: "sekundė_sekundžių_sekundes",
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        };

        function n(e, t, n, r) {
            return t ? a(n)[0] : r ? a(n)[1] : a(n)[2]
        }

        function r(e) {
            return e % 10 == 0 || e > 10 && e < 20
        }

        function a(e) {
            return t[e].split("_")
        }

        function s(e, t, s, i) {
            var o = e + " ";
            return 1 === e ? o + n(0, t, s[0], i) : t ? o + (r(e) ? a(s)[1] : a(s)[0]) : i ? o + a(s)[1] : o + (r(e) ? a(s)[1] : a(s)[2])
        }
        e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: function (e, t, n, r) {
                    return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes"
                },
                ss: s,
                m: n,
                mm: s,
                h: n,
                hh: s,
                d: n,
                dd: s,
                M: n,
                MM: s,
                y: n,
                yy: s
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function (e) {
                return e + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
            ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };

        function n(e, t, n) {
            return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
        }

        function r(e, r, a) {
            return e + " " + n(t[a], e, r)
        }

        function a(e, r, a) {
            return n(t[a], e, r)
        }
        e.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s",
                past: "pirms %s",
                s: function (e, t) {
                    return t ? "dažas sekundes" : "dažām sekundēm"
                },
                ss: r,
                m: a,
                mm: r,
                h: a,
                hh: r,
                d: a,
                dd: r,
                M: a,
                MM: r,
                y: a,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function (e, n, r) {
                var a = t.words[r];
                return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        };
        e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function () {
                    return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("mi", {
            months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hēkona ruarua",
                ss: "%d hēkona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "после %s",
                past: "пред %s",
                s: "неколку секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеци",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            monthsParseExact: !0,
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                ss: "%d സെക്കൻഡ്",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n, r) {
            switch (n) {
                case "s":
                    return t ? "хэдхэн секунд" : "хэдхэн секундын";
                case "ss":
                    return e + (t ? " секунд" : " секундын");
                case "m":
                case "mm":
                    return e + (t ? " минут" : " минутын");
                case "h":
                case "hh":
                    return e + (t ? " цаг" : " цагийн");
                case "d":
                case "dd":
                    return e + (t ? " өдөр" : " өдрийн");
                case "M":
                case "MM":
                    return e + (t ? " сар" : " сарын");
                case "y":
                case "yy":
                    return e + (t ? " жил" : " жилийн");
                default:
                    return e
            }
        }
        e.defineLocale("mn", {
            months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
            monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
            monthsParseExact: !0,
            weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
            weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
            weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY оны MMMMын D",
                LLL: "YYYY оны MMMMын D HH:mm",
                LLLL: "dddd, YYYY оны MMMMын D HH:mm"
            },
            meridiemParse: /ҮӨ|ҮХ/i,
            isPM: function (e) {
                return "ҮХ" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ҮӨ" : "ҮХ"
            },
            calendar: {
                sameDay: "[Өнөөдөр] LT",
                nextDay: "[Маргааш] LT",
                nextWeek: "[Ирэх] dddd LT",
                lastDay: "[Өчигдөр] LT",
                lastWeek: "[Өнгөрсөн] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s дараа",
                past: "%s өмнө",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
            ordinal: function (e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + " өдөр";
                    default:
                        return e
                }
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };

        function r(e, t, n, r) {
            var a = "";
            if (t) switch (n) {
                case "s":
                    a = "काही सेकंद";
                    break;
                case "ss":
                    a = "%d सेकंद";
                    break;
                case "m":
                    a = "एक मिनिट";
                    break;
                case "mm":
                    a = "%d मिनिटे";
                    break;
                case "h":
                    a = "एक तास";
                    break;
                case "hh":
                    a = "%d तास";
                    break;
                case "d":
                    a = "एक दिवस";
                    break;
                case "dd":
                    a = "%d दिवस";
                    break;
                case "M":
                    a = "एक महिना";
                    break;
                case "MM":
                    a = "%d महिने";
                    break;
                case "y":
                    a = "एक वर्ष";
                    break;
                case "yy":
                    a = "%d वर्षे"
            } else switch (n) {
                case "s":
                    a = "काही सेकंदां";
                    break;
                case "ss":
                    a = "%d सेकंदां";
                    break;
                case "m":
                    a = "एका मिनिटा";
                    break;
                case "mm":
                    a = "%d मिनिटां";
                    break;
                case "h":
                    a = "एका तासा";
                    break;
                case "hh":
                    a = "%d तासां";
                    break;
                case "d":
                    a = "एका दिवसा";
                    break;
                case "dd":
                    a = "%d दिवसां";
                    break;
                case "M":
                    a = "एका महिन्या";
                    break;
                case "MM":
                    a = "%d महिन्यां";
                    break;
                case "y":
                    a = "एका वर्षा";
                    break;
                case "yy":
                    a = "%d वर्षां"
            }
            return a.replace(/%d/i, e)
        }
        e.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमध्ये",
                past: "%sपूर्वी",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
            weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
            weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
            weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[Għada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-bieraħ fil-]LT",
                lastWeek: "dddd [li għadda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "f’ %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "siegħa",
                hh: "%d siegħat",
                d: "ġurnata",
                dd: "%d ġranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
                1: "၁",
                2: "၂",
                3: "၃",
                4: "၄",
                5: "၅",
                6: "၆",
                7: "၇",
                8: "၈",
                9: "၉",
                0: "၀"
            },
            n = {
                "၁": "1",
                "၂": "2",
                "၃": "3",
                "၄": "4",
                "၅": "5",
                "၆": "6",
                "၇": "7",
                "၈": "8",
                "၉": "9",
                "၀": "0"
            };
        e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                ss: "%d စက္ကန့်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function (e) {
                return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            monthsParseExact: !0,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोलि] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडि",
                s: "केही क्षण",
                ss: "%d सेकेण्ड",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            a = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            a = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
                1: "੧",
                2: "੨",
                3: "੩",
                4: "੪",
                5: "੫",
                6: "੬",
                7: "੭",
                8: "੮",
                9: "੯",
                0: "੦"
            },
            n = {
                "੧": "1",
                "੨": "2",
                "੩": "3",
                "੪": "4",
                "੫": "5",
                "੬": "6",
                "੭": "7",
                "੮": "8",
                "੯": "9",
                "੦": "0"
            };
        e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
                LT: "A h:mm ਵਜੇ",
                LTS: "A h:mm:ss ਵਜੇ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
                sameDay: "[ਅਜ] LT",
                nextDay: "[ਕਲ] LT",
                nextWeek: "[ਅਗਲਾ] dddd, LT",
                lastDay: "[ਕਲ] LT",
                lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ਵਿੱਚ",
                past: "%s ਪਿਛਲੇ",
                s: "ਕੁਝ ਸਕਿੰਟ",
                ss: "%d ਸਕਿੰਟ",
                m: "ਇਕ ਮਿੰਟ",
                mm: "%d ਮਿੰਟ",
                h: "ਇੱਕ ਘੰਟਾ",
                hh: "%d ਘੰਟੇ",
                d: "ਇੱਕ ਦਿਨ",
                dd: "%d ਦਿਨ",
                M: "ਇੱਕ ਮਹੀਨਾ",
                MM: "%d ਮਹੀਨੇ",
                y: "ਇੱਕ ਸਾਲ",
                yy: "%d ਸਾਲ"
            },
            preparse: function (e) {
                return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

        function r(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }

        function a(e, t, n) {
            var a = e + " ";
            switch (n) {
                case "ss":
                    return a + (r(e) ? "sekundy" : "sekund");
                case "m":
                    return t ? "minuta" : "minutę";
                case "mm":
                    return a + (r(e) ? "minuty" : "minut");
                case "h":
                    return t ? "godzina" : "godzinę";
                case "hh":
                    return a + (r(e) ? "godziny" : "godzin");
                case "MM":
                    return a + (r(e) ? "miesiące" : "miesięcy");
                case "yy":
                    return a + (r(e) ? "lata" : "lat")
            }
        }
        e.defineLocale("pl", {
            months: function (e, r) {
                return e ? "" === r ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W niedzielę o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W środę o] LT";
                        case 6:
                            return "[W sobotę o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                },
                lastDay: "[Wczoraj o] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: a,
                y: "rok",
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("pt", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("pt-br", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n) {
            var r = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            } [n]
        }
        e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                ss: t,
                m: "un minut",
                mm: t,
                h: "o oră",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lună",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n) {
            var r, a;
            return "m" === n ? t ? "минута" : "минуту" : e + " " + (r = +e, a = {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            } [n].split("_"), r % 10 == 1 && r % 100 != 11 ? a[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? a[1] : a[2])
        }
        var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
        e.defineLocale("ru", {
            months: {
                format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
                format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
            },
            weekdays: {
                standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., H:mm",
                LLLL: "dddd, D MMMM YYYY г., H:mm"
            },
            calendar: {
                sameDay: "[Сегодня, в] LT",
                nextDay: "[Завтра, в] LT",
                lastDay: "[Вчера, в] LT",
                nextWeek: function (e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd, [в] LT"
                    }
                },
                lastWeek: function (e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd, [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                ss: t,
                m: t,
                mm: t,
                h: "час",
                hh: t,
                d: "день",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function (e) {
                return /^(дня|вечера)$/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function (e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    case "w":
                    case "W":
                        return e + "-я";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
            n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
                return "شام" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[اڄ] LT",
                nextDay: "[سڀاڻي] LT",
                nextWeek: "dddd [اڳين هفتي تي] LT",
                lastDay: "[ڪالهه] LT",
                lastWeek: "[گزريل هفتي] dddd [تي] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s پوء",
                past: "%s اڳ",
                s: "چند سيڪنڊ",
                ss: "%d سيڪنڊ",
                m: "هڪ منٽ",
                mm: "%d منٽ",
                h: "هڪ ڪلاڪ",
                hh: "%d ڪلاڪ",
                d: "هڪ ڏينهن",
                dd: "%d ڏينهن",
                M: "هڪ مهينو",
                MM: "%d مهينا",
                y: "هڪ سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("se", {
            months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                ss: "තත්පර %d",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
            ordinal: function (e) {
                return e + " වැනි"
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function (e) {
                return "ප.ව." === e || "පස් වරු" === e
            },
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
            n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

        function r(e) {
            return e > 1 && e < 5
        }

        function a(e, t, n, a) {
            var s = e + " ";
            switch (n) {
                case "s":
                    return t || a ? "pár sekúnd" : "pár sekundami";
                case "ss":
                    return t || a ? s + (r(e) ? "sekundy" : "sekúnd") : s + "sekundami";
                case "m":
                    return t ? "minúta" : a ? "minútu" : "minútou";
                case "mm":
                    return t || a ? s + (r(e) ? "minúty" : "minút") : s + "minútami";
                case "h":
                    return t ? "hodina" : a ? "hodinu" : "hodinou";
                case "hh":
                    return t || a ? s + (r(e) ? "hodiny" : "hodín") : s + "hodinami";
                case "d":
                    return t || a ? "deň" : "dňom";
                case "dd":
                    return t || a ? s + (r(e) ? "dni" : "dní") : s + "dňami";
                case "M":
                    return t || a ? "mesiac" : "mesiacom";
                case "MM":
                    return t || a ? s + (r(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
                case "y":
                    return t || a ? "rok" : "rokom";
                case "yy":
                    return t || a ? s + (r(e) ? "roky" : "rokov") : s + "rokmi"
            }
        }
        e.defineLocale("sk", {
            months: t,
            monthsShort: n,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                },
                lastDay: "[včera o] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n, r) {
            var a = e + " ";
            switch (n) {
                case "s":
                    return t || r ? "nekaj sekund" : "nekaj sekundami";
                case "ss":
                    return a += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || r ? "sekundi" : "sekundah" : e < 5 ? t || r ? "sekunde" : "sekundah" : "sekund";
                case "m":
                    return t ? "ena minuta" : "eno minuto";
                case "mm":
                    return a += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || r ? "minuti" : "minutama" : e < 5 ? t || r ? "minute" : "minutami" : t || r ? "minut" : "minutami";
                case "h":
                    return t ? "ena ura" : "eno uro";
                case "hh":
                    return a += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || r ? "uri" : "urama" : e < 5 ? t || r ? "ure" : "urami" : t || r ? "ur" : "urami";
                case "d":
                    return t || r ? "en dan" : "enim dnem";
                case "dd":
                    return a += 1 === e ? t || r ? "dan" : "dnem" : 2 === e ? t || r ? "dni" : "dnevoma" : t || r ? "dni" : "dnevi";
                case "M":
                    return t || r ? "en mesec" : "enim mesecem";
                case "MM":
                    return a += 1 === e ? t || r ? "mesec" : "mesecem" : 2 === e ? t || r ? "meseca" : "mesecema" : e < 5 ? t || r ? "mesece" : "meseci" : t || r ? "mesecev" : "meseci";
                case "y":
                    return t || r ? "eno leto" : "enim letom";
                case "yy":
                    return a += 1 === e ? t || r ? "leto" : "letom" : 2 === e ? t || r ? "leti" : "letoma" : e < 5 ? t || r ? "leta" : "leti" : t || r ? "let" : "leti"
            }
        }
        e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[včeraj ob] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function (e) {
                return "M" === e.charAt(0)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function (e, n, r) {
                var a = t.words[r];
                return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        };
        e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function () {
                    return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
            words: {
                ss: ["секунда", "секунде", "секунди"],
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            },
            correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function (e, n, r) {
                var a = t.words[r];
                return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        };
        e.defineLocale("sr-cyrl", {
            months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
            monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: !0,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT",
                nextDay: "[сутра у] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                    }
                },
                lastDay: "[јуче у] LT",
                lastWeek: function () {
                    return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "дан",
                dd: t.translate,
                M: "месец",
                MM: t.translate,
                y: "годину",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function (e, t, n) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
                1: "௧",
                2: "௨",
                3: "௩",
                4: "௪",
                5: "௫",
                6: "௬",
                7: "௭",
                8: "௮",
                9: "௯",
                0: "௦"
            },
            n = {
                "௧": "1",
                "௨": "2",
                "௩": "3",
                "௪": "4",
                "௫": "5",
                "௬": "6",
                "௭": "7",
                "௮": "8",
                "௯": "9",
                "௦": "0"
            };
        e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                ss: "%d விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function (e) {
                return e + "வது"
            },
            preparse: function (e) {
                return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function (e, t, n) {
                return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
            },
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            monthsParseExact: !0,
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                ss: "%d సెకన్లు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            dayOfMonthOrdinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "minutu balun",
                ss: "minutu %d",
                m: "minutu ida",
                mm: "minutu %d",
                h: "oras ida",
                hh: "oras %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
            0: "-ум",
            1: "-ум",
            2: "-юм",
            3: "-юм",
            4: "-ум",
            5: "-ум",
            6: "-ум",
            7: "-ум",
            8: "-ум",
            9: "-ум",
            10: "-ум",
            12: "-ум",
            13: "-ум",
            20: "-ум",
            30: "-юм",
            40: "-ум",
            50: "-ум",
            60: "-ум",
            70: "-ум",
            80: "-ум",
            90: "-ум",
            100: "-ум"
        };
        e.defineLocale("tg", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
            weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
            weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Имрӯз соати] LT",
                nextDay: "[Пагоҳ соати] LT",
                lastDay: "[Дирӯз соати] LT",
                nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "баъди %s",
                past: "%s пеш",
                s: "якчанд сония",
                m: "як дақиқа",
                mm: "%d дақиқа",
                h: "як соат",
                hh: "%d соат",
                d: "як рӯз",
                dd: "%d рӯз",
                M: "як моҳ",
                MM: "%d моҳ",
                y: "як сол",
                yy: "%d сол"
            },
            meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
            ordinal: function (e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function (e) {
                return "หลังเที่ยง" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                ss: "%d วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

        function n(e, n, r, a) {
            var s = function (e) {
                var n = Math.floor(e % 1e3 / 100),
                    r = Math.floor(e % 100 / 10),
                    a = e % 10,
                    s = "";
                return n > 0 && (s += t[n] + "vatlh"), r > 0 && (s += ("" !== s ? " " : "") + t[r] + "maH"), a > 0 && (s += ("" !== s ? " " : "") + t[a]), "" === s ? "pagh" : s
            }(e);
            switch (r) {
                case "ss":
                    return s + " lup";
                case "mm":
                    return s + " tup";
                case "hh":
                    return s + " rep";
                case "dd":
                    return s + " jaj";
                case "MM":
                    return s + " jar";
                case "yy":
                    return s + " DIS"
            }
        }
        e.defineLocale("tlh", {
            months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
            monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
                },
                past: function (e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
                },
                s: "puS lup",
                ss: n,
                m: "wa’ tup",
                mm: n,
                h: "wa’ rep",
                hh: n,
                d: "wa’ jaj",
                dd: n,
                M: "wa’ jar",
                MM: n,
                y: "wa’ DIS",
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinal: function (e, n) {
                switch (n) {
                    case "d":
                    case "D":
                    case "Do":
                    case "DD":
                        return e;
                    default:
                        if (0 === e) return e + "'ıncı";
                        var r = e % 10;
                        return e + (t[r] || t[e % 100 - r] || t[e >= 100 ? 100 : null])
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [e + " míuts", e + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [e + " þoras", e + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return r ? a[n][0] : t ? a[n][0] : a[n][1]
        }
        e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function (e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                ss: "%d ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("ug-cn", {
            months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
            monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
            weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
            weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
            },
            meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function (e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "يېرىم كېچە" : r < 900 ? "سەھەر" : r < 1130 ? "چۈشتىن بۇرۇن" : r < 1230 ? "چۈش" : r < 1800 ? "چۈشتىن كېيىن" : "كەچ"
            },
            calendar: {
                sameDay: "[بۈگۈن سائەت] LT",
                nextDay: "[ئەتە سائەت] LT",
                nextWeek: "[كېلەركى] dddd [سائەت] LT",
                lastDay: "[تۆنۈگۈن] LT",
                lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s كېيىن",
                past: "%s بۇرۇن",
                s: "نەچچە سېكونت",
                ss: "%d سېكونت",
                m: "بىر مىنۇت",
                mm: "%d مىنۇت",
                h: "بىر سائەت",
                hh: "%d سائەت",
                d: "بىر كۈن",
                dd: "%d كۈن",
                M: "بىر ئاي",
                MM: "%d ئاي",
                y: "بىر يىل",
                yy: "%d يىل"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
            ordinal: function (e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "-كۈنى";
                    case "w":
                    case "W":
                        return e + "-ھەپتە";
                    default:
                        return e
                }
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";

        function t(e, t, n) {
            var r, a;
            return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + (r = +e, a = {
                ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: t ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            } [n].split("_"), r % 10 == 1 && r % 100 != 11 ? a[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? a[1] : a[2])
        }

        function n(e) {
            return function () {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }
        e.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: function (e, t) {
                var n = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                return !0 === e ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
            },
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: n("[Сьогодні "),
                nextDay: n("[Завтра "),
                lastDay: n("[Вчора "),
                nextWeek: n("[У] dddd ["),
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return n("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return n("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                ss: t,
                m: t,
                mm: t,
                h: "годину",
                hh: t,
                d: "день",
                dd: t,
                M: "місяць",
                MM: t,
                y: "рік",
                yy: t
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function (e) {
                return /^(дня|вечора)$/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
            ordinal: function (e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
            n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
                return "شام" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[آج بوقت] LT",
                nextDay: "[کل بوقت] LT",
                nextWeek: "dddd [بوقت] LT",
                lastDay: "[گذشتہ روز بوقت] LT",
                lastWeek: "[گذشتہ] dddd [بوقت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s بعد",
                past: "%s قبل",
                s: "چند سیکنڈ",
                ss: "%d سیکنڈ",
                m: "ایک منٹ",
                mm: "%d منٹ",
                h: "ایک گھنٹہ",
                hh: "%d گھنٹے",
                d: "ایک دن",
                dd: "%d دن",
                M: "ایک ماہ",
                MM: "%d ماہ",
                y: "ایک سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                ss: "%d фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: !0,
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function (e) {
                return /^ch$/i.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                ss: "%d giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("x-pseudo", {
            months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
            monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
            monthsParseExact: !0,
            weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                ss: "%d s~écóñ~ds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("yo", {
            months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
            monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Ònì ni] LT",
                nextDay: "[Ọ̀la ni] LT",
                nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                lastDay: "[Àna ni] LT",
                lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ní %s",
                past: "%s kọjá",
                s: "ìsẹjú aayá die",
                ss: "aayá %d",
                m: "ìsẹjú kan",
                mm: "ìsẹjú %d",
                h: "wákati kan",
                hh: "wákati %d",
                d: "ọjọ́ kan",
                dd: "ọjọ́ %d",
                M: "osù kan",
                MM: "osù %d",
                y: "ọdún kan",
                yy: "ọdún %d"
            },
            dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah点mm分",
                LLLL: "YYYY年M月D日ddddAh点mm分",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function (e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function (e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "周";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                ss: "%d 秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("zh-hk", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(n(0))
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天] LT",
                nextDay: "[明天] LT",
                nextWeek: "[下]dddd LT",
                lastDay: "[昨天] LT",
                lastWeek: "[上]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(n(0))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var r = n(229),a = n(230),s = n(231);

        function i() {return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823}

        function o(e, t) {
            if (i() < t) throw new RangeError("Invalid typed array length");
            return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e
        }

        function u(e, t, n) {
            if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, n);
            if ("number" == typeof e) {
                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                return _(this, e)
            }
            return d(this, e, t, n)
        }

        function d(e, t, n, r) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) {
                if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
                u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = c(e, t);
                return e
            }(e, t, n, r) : "string" == typeof t ? function (e, t, n) {
                "string" == typeof n && "" !== n || (n = "utf8");
                if (!u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | f(t, n),
                    a = (e = o(e, r)).write(t, n);
                a !== r && (e = e.slice(0, a));
                return e
            }(e, t, n) : function (e, t) {
                if (u.isBuffer(t)) {
                    var n = 0 | m(t.length);
                    return 0 === (e = o(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? o(e, 0) : c(e, t);
                    if ("Buffer" === t.type && s(t.data)) return c(e, t.data)
                }
                var r;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }

        function l(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative')
        }

        function _(e, t) {
            if (l(t), e = o(e, t < 0 ? 0 : 0 | m(t)), !u.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < t; ++n) e[n] = 0;
            return e
        }

        function c(e, t) {
            var n = t.length < 0 ? 0 : 0 | m(t.length);
            e = o(e, n);
            for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
            return e
        }

        function m(e) {
            if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
            return 0 | e
        }

        function f(e, t) {
            if (u.isBuffer(e)) return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var n = e.length;
            if (0 === n) return 0;
            for (var r = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return N(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return U(e).length;
                default:
                    if (r) return N(e).length;
                    t = ("" + t).toLowerCase(), r = !0
            }
        }

        function h(e, t, n) {
            var r = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
            if ((n >>>= 0) <= (t >>>= 0)) return "";
            for (e || (e = "utf8");;) switch (e) {
                case "hex":
                    return H(this, t, n);
                case "utf8":
                case "utf-8":
                    return D(this, t, n);
                case "ascii":
                    return S(this, t, n);
                case "latin1":
                case "binary":
                    return x(this, t, n);
                case "base64":
                    return b(this, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return A(this, t, n);
                default:
                    if (r) throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), r = !0
            }
        }

        function p(e, t, n) {
            var r = e[t];
            e[t] = e[n], e[n] = r
        }

        function y(e, t, n, r, a) {
            if (0 === e.length) return -1;
            if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = a ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                if (a) return -1;
                n = e.length - 1
            } else if (n < 0) {
                if (!a) return -1;
                n = 0
            }
            if ("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t)) return 0 === t.length ? -1 : M(e, t, n, r, a);
            if ("number" == typeof t) return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : M(e, [t], n, r, a);
            throw new TypeError("val must be string, number or Buffer")
        }

        function M(e, t, n, r, a) {
            var s, i = 1,
                o = e.length,
                u = t.length;
            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (e.length < 2 || t.length < 2) return -1;
                i = 2, o /= 2, u /= 2, n /= 2
            }

            function d(e, t) {
                return 1 === i ? e[t] : e.readUInt16BE(t * i)
            }
            if (a) {
                var l = -1;
                for (s = n; s < o; s++)
                    if (d(e, s) === d(t, -1 === l ? 0 : s - l)) {
                        if (-1 === l && (l = s), s - l + 1 === u) return l * i
                    } else -1 !== l && (s -= s - l), l = -1
            } else
                for (n + u > o && (n = o - u), s = n; s >= 0; s--) {
                    for (var _ = !0, c = 0; c < u; c++)
                        if (d(e, s + c) !== d(t, c)) {
                            _ = !1;
                            break
                        } if (_) return s
                }
            return -1
        }

        function L(e, t, n, r) {
            n = Number(n) || 0;
            var a = e.length - n;
            r ? (r = Number(r)) > a && (r = a) : r = a;
            var s = t.length;
            if (s % 2 != 0) throw new TypeError("Invalid hex string");
            r > s / 2 && (r = s / 2);
            for (var i = 0; i < r; ++i) {
                var o = parseInt(t.substr(2 * i, 2), 16);
                if (isNaN(o)) return i;
                e[n + i] = o
            }
            return i
        }

        function g(e, t, n, r) {
            return B(N(t, e.length - n), e, n, r)
        }

        function Y(e, t, n, r) {
            return B(function (e) {
                for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t
            }(t), e, n, r)
        }

        function v(e, t, n, r) {
            return Y(e, t, n, r)
        }

        function k(e, t, n, r) {
            return B(U(t), e, n, r)
        }

        function w(e, t, n, r) {
            return B(function (e, t) {
                for (var n, r, a, s = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) n = e.charCodeAt(i), r = n >> 8, a = n % 256, s.push(a), s.push(r);
                return s
            }(t, e.length - n), e, n, r)
        }

        function b(e, t, n) {
            return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
        }

        function D(e, t, n) {
            n = Math.min(e.length, n);
            for (var r = [], a = t; a < n;) {
                var s, i, o, u, d = e[a],
                    l = null,
                    _ = d > 239 ? 4 : d > 223 ? 3 : d > 191 ? 2 : 1;
                if (a + _ <= n) switch (_) {
                    case 1:
                        d < 128 && (l = d);
                        break;
                    case 2:
                        128 == (192 & (s = e[a + 1])) && (u = (31 & d) << 6 | 63 & s) > 127 && (l = u);
                        break;
                    case 3:
                        s = e[a + 1], i = e[a + 2], 128 == (192 & s) && 128 == (192 & i) && (u = (15 & d) << 12 | (63 & s) << 6 | 63 & i) > 2047 && (u < 55296 || u > 57343) && (l = u);
                        break;
                    case 4:
                        s = e[a + 1], i = e[a + 2], o = e[a + 3], 128 == (192 & s) && 128 == (192 & i) && 128 == (192 & o) && (u = (15 & d) << 18 | (63 & s) << 12 | (63 & i) << 6 | 63 & o) > 65535 && u < 1114112 && (l = u)
                }
                null === l ? (l = 65533, _ = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), a += _
            }
            return function (e) {
                var t = e.length;
                if (t <= T) return String.fromCharCode.apply(String, e);
                var n = "",
                    r = 0;
                for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += T));
                return n
            }(r)
        }
        t.Buffer = u, t.SlowBuffer = function (e) {
            +e != e && (e = 0);
            return u.alloc(+e)
        }, t.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function () {
                        return 42
                    }
                }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(), t.kMaxLength = i(), u.poolSize = 8192, u._augment = function (e) {
            return e.__proto__ = u.prototype, e
        }, u.from = function (e, t, n) {
            return d(null, e, t, n)
        }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
            value: null,
            configurable: !0
        })), u.alloc = function (e, t, n) {
            return function (e, t, n, r) {
                return l(t), t <= 0 ? o(e, t) : void 0 !== n ? "string" == typeof r ? o(e, t).fill(n, r) : o(e, t).fill(n) : o(e, t)
            }(null, e, t, n)
        }, u.allocUnsafe = function (e) {
            return _(null, e)
        }, u.allocUnsafeSlow = function (e) {
            return _(null, e)
        }, u.isBuffer = function (e) {
            return !(null == e || !e._isBuffer)
        }, u.compare = function (e, t) {
            if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (var n = e.length, r = t.length, a = 0, s = Math.min(n, r); a < s; ++a)
                if (e[a] !== t[a]) {
                    n = e[a], r = t[a];
                    break
                } return n < r ? -1 : r < n ? 1 : 0
        }, u.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, u.concat = function (e, t) {
            if (!s(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return u.alloc(0);
            var n;
            if (void 0 === t)
                for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var r = u.allocUnsafe(t),
                a = 0;
            for (n = 0; n < e.length; ++n) {
                var i = e[n];
                if (!u.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                i.copy(r, a), a += i.length
            }
            return r
        }, u.byteLength = f, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
            var e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) p(this, t, t + 1);
            return this
        }, u.prototype.swap32 = function () {
            var e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
            return this
        }, u.prototype.swap64 = function () {
            var e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
            return this
        }, u.prototype.toString = function () {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? D(this, 0, e) : h.apply(this, arguments)
        }, u.prototype.equals = function (e) {
            if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === u.compare(this, e)
        }, u.prototype.inspect = function () {
            var e = "",
                n = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
        }, u.prototype.compare = function (e, t, n, r, a) {
            if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === a && (a = this.length), t < 0 || n > e.length || r < 0 || a > this.length) throw new RangeError("out of range index");
            if (r >= a && t >= n) return 0;
            if (r >= a) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            for (var s = (a >>>= 0) - (r >>>= 0), i = (n >>>= 0) - (t >>>= 0), o = Math.min(s, i), d = this.slice(r, a), l = e.slice(t, n), _ = 0; _ < o; ++_)
                if (d[_] !== l[_]) {
                    s = d[_], i = l[_];
                    break
                } return s < i ? -1 : i < s ? 1 : 0
        }, u.prototype.includes = function (e, t, n) {
            return -1 !== this.indexOf(e, t, n)
        }, u.prototype.indexOf = function (e, t, n) {
            return y(this, e, t, n, !0)
        }, u.prototype.lastIndexOf = function (e, t, n) {
            return y(this, e, t, n, !1)
        }, u.prototype.write = function (e, t, n, r) {
            if (void 0 === t) r = "utf8", n = this.length, t = 0;
            else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
            else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
            }
            var a = this.length - t;
            if ((void 0 === n || n > a) && (n = a), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var s = !1;;) switch (r) {
                case "hex":
                    return L(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return g(this, e, t, n);
                case "ascii":
                    return Y(this, e, t, n);
                case "latin1":
                case "binary":
                    return v(this, e, t, n);
                case "base64":
                    return k(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return w(this, e, t, n);
                default:
                    if (s) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), s = !0
            }
        }, u.prototype.toJSON = function () {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var T = 4096;

        function S(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var a = t; a < n; ++a) r += String.fromCharCode(127 & e[a]);
            return r
        }

        function x(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var a = t; a < n; ++a) r += String.fromCharCode(e[a]);
            return r
        }

        function H(e, t, n) {
            var r = e.length;
            (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
            for (var a = "", s = t; s < n; ++s) a += I(e[s]);
            return a
        }

        function A(e, t, n) {
            for (var r = e.slice(t, n), a = "", s = 0; s < r.length; s += 2) a += String.fromCharCode(r[s] + 256 * r[s + 1]);
            return a
        }

        function j(e, t, n) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function E(e, t, n, r, a, s) {
            if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > a || t < s) throw new RangeError('"value" argument is out of bounds');
            if (n + r > e.length) throw new RangeError("Index out of range")
        }

        function P(e, t, n, r) {
            t < 0 && (t = 65535 + t + 1);
            for (var a = 0, s = Math.min(e.length - n, 2); a < s; ++a) e[n + a] = (t & 255 << 8 * (r ? a : 1 - a)) >>> 8 * (r ? a : 1 - a)
        }

        function O(e, t, n, r) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var a = 0, s = Math.min(e.length - n, 4); a < s; ++a) e[n + a] = t >>> 8 * (r ? a : 3 - a) & 255
        }

        function F(e, t, n, r, a, s) {
            if (n + r > e.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function R(e, t, n, r, s) {
            return s || F(e, 0, n, 4), a.write(e, t, n, r, 23, 4), n + 4
        }

        function C(e, t, n, r, s) {
            return s || F(e, 0, n, 8), a.write(e, t, n, r, 52, 8), n + 8
        }
        u.prototype.slice = function (e, t) {
            var n, r = this.length;
            if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = u.prototype;
            else {
                var a = t - e;
                n = new u(a, void 0);
                for (var s = 0; s < a; ++s) n[s] = this[s + e]
            }
            return n
        }, u.prototype.readUIntLE = function (e, t, n) {
            e |= 0, t |= 0, n || j(e, t, this.length);
            for (var r = this[e], a = 1, s = 0; ++s < t && (a *= 256);) r += this[e + s] * a;
            return r
        }, u.prototype.readUIntBE = function (e, t, n) {
            e |= 0, t |= 0, n || j(e, t, this.length);
            for (var r = this[e + --t], a = 1; t > 0 && (a *= 256);) r += this[e + --t] * a;
            return r
        }, u.prototype.readUInt8 = function (e, t) {
            return t || j(e, 1, this.length), this[e]
        }, u.prototype.readUInt16LE = function (e, t) {
            return t || j(e, 2, this.length), this[e] | this[e + 1] << 8
        }, u.prototype.readUInt16BE = function (e, t) {
            return t || j(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, u.prototype.readUInt32LE = function (e, t) {
            return t || j(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, u.prototype.readUInt32BE = function (e, t) {
            return t || j(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, u.prototype.readIntLE = function (e, t, n) {
            e |= 0, t |= 0, n || j(e, t, this.length);
            for (var r = this[e], a = 1, s = 0; ++s < t && (a *= 256);) r += this[e + s] * a;
            return r >= (a *= 128) && (r -= Math.pow(2, 8 * t)), r
        }, u.prototype.readIntBE = function (e, t, n) {
            e |= 0, t |= 0, n || j(e, t, this.length);
            for (var r = t, a = 1, s = this[e + --r]; r > 0 && (a *= 256);) s += this[e + --r] * a;
            return s >= (a *= 128) && (s -= Math.pow(2, 8 * t)), s
        }, u.prototype.readInt8 = function (e, t) {
            return t || j(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, u.prototype.readInt16LE = function (e, t) {
            t || j(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, u.prototype.readInt16BE = function (e, t) {
            t || j(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, u.prototype.readInt32LE = function (e, t) {
            return t || j(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, u.prototype.readInt32BE = function (e, t) {
            return t || j(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, u.prototype.readFloatLE = function (e, t) {
            return t || j(e, 4, this.length), a.read(this, e, !0, 23, 4)
        }, u.prototype.readFloatBE = function (e, t) {
            return t || j(e, 4, this.length), a.read(this, e, !1, 23, 4)
        }, u.prototype.readDoubleLE = function (e, t) {
            return t || j(e, 8, this.length), a.read(this, e, !0, 52, 8)
        }, u.prototype.readDoubleBE = function (e, t) {
            return t || j(e, 8, this.length), a.read(this, e, !1, 52, 8)
        }, u.prototype.writeUIntLE = function (e, t, n, r) {
            (e = +e, t |= 0, n |= 0, r) || E(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var a = 1,
                s = 0;
            for (this[t] = 255 & e; ++s < n && (a *= 256);) this[t + s] = e / a & 255;
            return t + n
        }, u.prototype.writeUIntBE = function (e, t, n, r) {
            (e = +e, t |= 0, n |= 0, r) || E(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var a = n - 1,
                s = 1;
            for (this[t + a] = 255 & e; --a >= 0 && (s *= 256);) this[t + a] = e / s & 255;
            return t + n
        }, u.prototype.writeUInt8 = function (e, t, n) {
            return e = +e, t |= 0, n || E(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
        }, u.prototype.writeUInt16LE = function (e, t, n) {
            return e = +e, t |= 0, n || E(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : P(this, e, t, !0), t + 2
        }, u.prototype.writeUInt16BE = function (e, t, n) {
            return e = +e, t |= 0, n || E(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : P(this, e, t, !1), t + 2
        }, u.prototype.writeUInt32LE = function (e, t, n) {
            return e = +e, t |= 0, n || E(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : O(this, e, t, !0), t + 4
        }, u.prototype.writeUInt32BE = function (e, t, n) {
            return e = +e, t |= 0, n || E(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : O(this, e, t, !1), t + 4
        }, u.prototype.writeIntLE = function (e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var a = Math.pow(2, 8 * n - 1);
                E(this, e, t, n, a - 1, -a)
            }
            var s = 0,
                i = 1,
                o = 0;
            for (this[t] = 255 & e; ++s < n && (i *= 256);) e < 0 && 0 === o && 0 !== this[t + s - 1] && (o = 1), this[t + s] = (e / i >> 0) - o & 255;
            return t + n
        }, u.prototype.writeIntBE = function (e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var a = Math.pow(2, 8 * n - 1);
                E(this, e, t, n, a - 1, -a)
            }
            var s = n - 1,
                i = 1,
                o = 0;
            for (this[t + s] = 255 & e; --s >= 0 && (i *= 256);) e < 0 && 0 === o && 0 !== this[t + s + 1] && (o = 1), this[t + s] = (e / i >> 0) - o & 255;
            return t + n
        }, u.prototype.writeInt8 = function (e, t, n) {
            return e = +e, t |= 0, n || E(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, u.prototype.writeInt16LE = function (e, t, n) {
            return e = +e, t |= 0, n || E(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : P(this, e, t, !0), t + 2
        }, u.prototype.writeInt16BE = function (e, t, n) {
            return e = +e, t |= 0, n || E(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : P(this, e, t, !1), t + 2
        }, u.prototype.writeInt32LE = function (e, t, n) {
            return e = +e, t |= 0, n || E(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : O(this, e, t, !0), t + 4
        }, u.prototype.writeInt32BE = function (e, t, n) {
            return e = +e, t |= 0, n || E(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : O(this, e, t, !1), t + 4
        }, u.prototype.writeFloatLE = function (e, t, n) {
            return R(this, e, t, !0, n)
        }, u.prototype.writeFloatBE = function (e, t, n) {
            return R(this, e, t, !1, n)
        }, u.prototype.writeDoubleLE = function (e, t, n) {
            return C(this, e, t, !0, n)
        }, u.prototype.writeDoubleBE = function (e, t, n) {
            return C(this, e, t, !1, n)
        }, u.prototype.copy = function (e, t, n, r) {
            if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
            var a, s = r - n;
            if (this === e && n < t && t < r)
                for (a = s - 1; a >= 0; --a) e[a + t] = this[a + n];
            else if (s < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                for (a = 0; a < s; ++a) e[a + t] = this[a + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + s), t);
            return s
        }, u.prototype.fill = function (e, t, n, r) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                    var a = e.charCodeAt(0);
                    a < 256 && (e = a)
                }
                if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
            if (n <= t) return this;
            var s;
            if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                for (s = t; s < n; ++s) this[s] = e;
            else {
                var i = u.isBuffer(e) ? e : N(new u(e, r).toString()),
                    o = i.length;
                for (s = 0; s < n - t; ++s) this[s + t] = i[s % o]
            }
            return this
        };
        var W = /[^+\/0-9A-Za-z-_]/g;

        function I(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }

        function N(e, t) {
            var n;
            t = t || 1 / 0;
            for (var r = e.length, a = null, s = [], i = 0; i < r; ++i) {
                if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
                    if (!a) {
                        if (n > 56319) {
                            (t -= 3) > -1 && s.push(239, 191, 189);
                            continue
                        }
                        if (i + 1 === r) {
                            (t -= 3) > -1 && s.push(239, 191, 189);
                            continue
                        }
                        a = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && s.push(239, 191, 189), a = n;
                        continue
                    }
                    n = 65536 + (a - 55296 << 10 | n - 56320)
                } else a && (t -= 3) > -1 && s.push(239, 191, 189);
                if (a = null, n < 128) {
                    if ((t -= 1) < 0) break;
                    s.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    s.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return s
        }

        function U(e) {
            return r.toByteArray(function (e) {
                if ((e = function (e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }(e).replace(W, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }(e))
        }

        function B(e, t, n, r) {
            for (var a = 0; a < r && !(a + n >= t.length || a >= e.length); ++a) t[a + n] = e[a];
            return a
        }
    }).call(this, n(11))
}, function (e, t, n) {
    "use strict";
    var r = n(234).Buffer;
    e.exports = function (e) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        var t = new Uint8Array(256);
        t.fill(255);
        for (var n = 0; n < e.length; n++) {
            var a = e.charAt(n),
                s = a.charCodeAt(0);
            if (255 !== t[s]) throw new TypeError(a + " is ambiguous");
            t[s] = n
        }
        var i = e.length,
            o = e.charAt(0),
            u = Math.log(i) / Math.log(256),
            d = Math.log(256) / Math.log(i);

        function l(e) {
            if ("string" != typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return r.alloc(0);
            var n = 0;
            if (" " !== e[n]) {
                for (var a = 0, s = 0; e[n] === o;) a++, n++;
                for (var d = (e.length - n) * u + 1 >>> 0, l = new Uint8Array(d); e[n];) {
                    var _ = t[e.charCodeAt(n)];
                    if (255 === _) return;
                    for (var c = 0, m = d - 1;
                        (0 !== _ || c < s) && -1 !== m; m--, c++) _ += i * l[m] >>> 0, l[m] = _ % 256 >>> 0, _ = _ / 256 >>> 0;
                    if (0 !== _) throw new Error("Non-zero carry");
                    s = c, n++
                }
                if (" " !== e[n]) {
                    for (var f = d - s; f !== d && 0 === l[f];) f++;
                    var h = r.allocUnsafe(a + (d - f));
                    h.fill(0, 0, a);
                    for (var p = a; f !== d;) h[p++] = l[f++];
                    return h
                }
            }
        }
        return {
            encode: function (t) {
                if (!r.isBuffer(t)) throw new TypeError("Expected Buffer");
                if (0 === t.length) return "";
                for (var n = 0, a = 0, s = 0, u = t.length; s !== u && 0 === t[s];) s++, n++;
                for (var l = (u - s) * d + 1 >>> 0, _ = new Uint8Array(l); s !== u;) {
                    for (var c = t[s], m = 0, f = l - 1;
                        (0 !== c || m < a) && -1 !== f; f--, m++) c += 256 * _[f] >>> 0, _[f] = c % i >>> 0, c = c / i >>> 0;
                    if (0 !== c) throw new Error("Non-zero carry");
                    a = m, s++
                }
                for (var h = l - a; h !== l && 0 === _[h];) h++;
                for (var p = o.repeat(n); h < l; ++h) p += e.charAt(_[h]);
                return p
            },
            decodeUnsafe: l,
            decode: function (e) {
                var t = l(e);
                if (t) return t;
                throw new Error("Non-base" + i + " character")
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), parseFloat(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        "object" === r(e) && null !== e ? e = "function" == typeof e.toString ? e.toString() : "[object Object]" : (null == e || isNaN(e) && !e.length) && (e = "");
        return String(e)
    }, e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        var n, r;
        (0, a.default)(e), "object" === s(t) ? (n = t.min || 0, r = t.max) : (n = arguments[1], r = arguments[2]);
        var i = encodeURI(e).split(/%..|./).length - 1;
        return i >= n && (void 0 === r || i <= r)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };

    function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        (0, a.default)(e);
        var n = (t = t || {}).hasOwnProperty("allow_leading_zeroes") && !t.allow_leading_zeroes ? s : i,
            r = !t.hasOwnProperty("min") || e >= t.min,
            o = !t.hasOwnProperty("max") || e <= t.max,
            u = !t.hasOwnProperty("lt") || e < t.lt,
            d = !t.hasOwnProperty("gt") || e > t.gt;
        return n.test(e) && r && o && u && d
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^(?:[-+]?(?:0|[1-9][0-9]*))$/,
        i = /^[-+]?[0-9]+$/;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), s.test(e)
    }, t.fullWidth = void 0;
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
    t.fullWidth = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), s.test(e)
    }, t.halfWidth = void 0;
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
    t.halfWidth = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), s.test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^[0-9A-F]+$/i;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        (0, a.default)(e);
        var n = t ? new RegExp("^[".concat(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+"), "g") : /^\s+/g;
        return e.replace(n, "")
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        (0, a.default)(e);
        var n = t ? new RegExp("[".concat(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"), "g") : /\s+$/g;
        return e.replace(n, "")
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        return (0, a.default)(e), e.replace(new RegExp("[".concat(t, "]+"), "g"), "")
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    var r = n(203),a = n(204),s = n(221),i = n(222);

    function o(e, t, n, s, i) {
        var o = [].slice.call(arguments, 1),
            u = o.length,
            d = "function" == typeof o[u - 1];
        if (!d && !r()) throw new Error("Callback required as last argument");
        if (!d) {
            if (u < 1) throw new Error("Too few arguments provided");
            return 1 === u ? (n = t, t = s = void 0) : 2 !== u || t.getContext || (s = n, n = t, t = void 0), new Promise(function (r, i) {
                try {
                    var o = a.create(n, s);
                    r(e(o, t, s))
                } catch (e) {
                    i(e)
                }
            })
        }
        if (u < 2) throw new Error("Too few arguments provided");
        2 === u ? (i = n, n = t, t = s = void 0) : 3 === u && (t.getContext && void 0 === i ? (i = s, s = void 0) : (i = s, s = n, n = t, t = void 0));
        try {
            var l = a.create(n, s);
            i(null, e(l, t, s))
        } catch (e) {
            i(e)
        }
    }
    t.create = a.create, t.toCanvas = o.bind(null, s.render), t.toDataURL = o.bind(null, s.renderToDataURL), t.toString = o.bind(null, function (e, t, n) {
        return i.render(e, n)
    })
}, function (e, t, n) {
    var r = n(225);
    e.exports = {
        validate: function (e, t, n) {
            var a = r.getByNameOrSymbol(t || "bitcoin");
            if (a.validator) return a.validator.isValidAddress(e, a, n);
            throw new Error("Missing validator for currency: " + t)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = ke(n(33)),a = ke(n(187)),s = ke(n(246)),i = ke(n(247)),o = ke(n(248)),u = ke(n(249)),d = ke(n(250)),l = ke(n(251)),_ = ke(n(252)),c = ke(n(253)),m = ke(n(21)),f = ke(n(254)),h = ke(n(34)),p = ke(n(255)),y = ve(n(256)),M = ve(n(257)),L = ke(n(258)),g = ke(n(259)),Y = ke(n(260)),v = ke(n(261)),k = ke(n(262)),w = ke(n(191)),b = ke(n(192)),D = ke(n(263)),T = ke(n(264)),S = ke(n(265)),x = ke(n(190)),H = ve(n(266)),A = ke(n(267)),j = ke(n(193)),E = ke(n(268)),P = ke(n(269)),O = ke(n(270)),F = ke(n(271)),R = ke(n(272)),C = ke(n(273)),W = ke(n(274)),I = ke(n(275)),N = ke(n(276)),U = ke(n(189)),B = ke(n(277)),z = ke(n(278)),$ = ke(n(279)),J = ke(n(280)),G = ke(n(281)),q = ke(n(282)),Z = ke(n(283)),V = ke(n(284)),K = ke(n(285)),X = ke(n(286)),Q = ve(n(287)),ee = ke(n(288)),te = ke(n(289)),ne = ke(n(290)),re = ke(n(291)),ae = ke(n(292)),se = ke(n(293)),ie = ke(n(294)),oe = ke(n(295)),ue = ke(n(296)),de = ke(n(297)),le = ke(n(298)),_e = ve(n(299)),ce = ke(n(194)),me = ke(n(195)),fe = ke(n(300)),he = ke(n(301)),pe = ke(n(302)),ye = ke(n(303)),Me = ke(n(304)),Le = ke(n(196)),ge = ke(n(305)),Ye = ke(n(306));

    function ve(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                } return t.default = e, t
    }

    function ke(e) {return e && e.__esModule ? e : {default: e}}
    var we = {
        version: "11.1.0",
        toDate: r.default,
        toFloat: a.default,
        toInt: s.default,
        toBoolean: i.default,
        equals: o.default,
        contains: u.default,
        matches: d.default,
        isEmail: l.default,
        isURL: _.default,
        isMACAddress: c.default,
        isIP: m.default,
        isIPRange: f.default,
        isFQDN: h.default,
        isBoolean: p.default,
        isAlpha: y.default,
        isAlphaLocales: y.locales,
        isAlphanumeric: M.default,
        isAlphanumericLocales: M.locales,
        isNumeric: L.default,
        isPort: g.default,
        isLowercase: Y.default,
        isUppercase: v.default,
        isAscii: k.default,
        isFullWidth: w.default,
        isHalfWidth: b.default,
        isVariableWidth: D.default,
        isMultibyte: T.default,
        isSurrogatePair: S.default,
        isInt: x.default,
        isFloat: H.default,
        isFloatLocales: H.locales,
        isDecimal: A.default,
        isHexadecimal: j.default,
        isDivisibleBy: E.default,
        isHexColor: P.default,
        isISRC: O.default,
        isMD5: F.default,
        isHash: R.default,
        isJWT: C.default,
        isJSON: W.default,
        isEmpty: I.default,
        isLength: N.default,
        isByteLength: U.default,
        isUUID: B.default,
        isMongoId: z.default,
        isAfter: $.default,
        isBefore: J.default,
        isIn: G.default,
        isCreditCard: q.default,
        isIdentityCard: Z.default,
        isISIN: V.default,
        isISBN: K.default,
        isISSN: X.default,
        isMobilePhone: Q.default,
        isMobilePhoneLocales: Q.locales,
        isPostalCode: _e.default,
        isPostalCodeLocales: _e.locales,
        isCurrency: ee.default,
        isISO8601: te.default,
        isRFC3339: ne.default,
        isISO31661Alpha2: re.default,
        isISO31661Alpha3: ae.default,
        isBase32: se.default,
        isBase64: ie.default,
        isDataURI: oe.default,
        isMagnetURI: ue.default,
        isMimeType: de.default,
        isLatLong: le.default,
        ltrim: ce.default,
        rtrim: me.default,
        trim: fe.default,
        escape: he.default,
        unescape: pe.default,
        stripLow: ye.default,
        whitelist: Me.default,
        blacklist: Le.default,
        isWhitelisted: ge.default,
        normalizeEmail: Ye.default,
        toString: toString
    };
    t.default = we, e.exports = t.default, e.exports.default = t.default
}, function (e, t) {
    e.exports = function (e, t, n) {
        return t in e ? Object.defineProperty(e, t, {value: n,enumerable: !0,configurable: !0,writable: !0}) : e[t] = n, e
    }
}, function (e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(t) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? e.exports = r = function (e) {
            return n(e)
        } : e.exports = r = function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e)
        }, r(t)
    }
    e.exports = r
}, , function (e, t) {
    e.exports = function () {
        return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
    }
}, function (e, t, n) {
    var r = n(9),a = n(6),s = n(32),i = n(205),o = n(206),u = n(207),d = n(208),l = n(209),_ = n(54),c = n(210),m = n(213),f = n(214),h = n(7),p = n(215),y = n(31);

    function M(e, t, n) {
        var r, a, s = e.size,
            i = f.getEncodedBits(t, n);
        for (r = 0; r < 15; r++) a = 1 == (i >> r & 1), r < 6 ? e.set(r, 8, a, !0) : r < 8 ? e.set(r + 1, 8, a, !0) : e.set(s - 15 + r, 8, a, !0), r < 8 ? e.set(8, s - r - 1, a, !0) : r < 9 ? e.set(8, 15 - r - 1 + 1, a, !0) : e.set(8, 15 - r - 1, a, !0);
        e.set(s - 8, 8, 1, !0)
    }

    function L(e, t, n) {
        var s = new i;
        n.forEach(function (t) {
            s.put(t.mode.bit, 4), s.put(t.getLength(), h.getCharCountIndicator(t.mode, e)), t.write(s)
        });
        var o = 8 * (a.getSymbolTotalCodewords(e) - _.getTotalCodewordsCount(e, t));
        for (s.getLengthInBits() + 4 <= o && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(0);
        for (var u = (o - s.getLengthInBits()) / 8, d = 0; d < u; d++) s.put(d % 2 ? 17 : 236, 8);
        return function (e, t, n) {
            for (var s = a.getSymbolTotalCodewords(t), i = _.getTotalCodewordsCount(t, n), o = s - i, u = _.getBlocksCount(t, n), d = u - s % u, l = Math.floor(s / u), m = Math.floor(o / u), f = m + 1, h = l - m, p = new c(h), y = 0, M = new Array(u), L = new Array(u), g = 0, Y = new r(e.buffer), v = 0; v < u; v++) {
                var k = v < d ? m : f;
                M[v] = Y.slice(y, y + k), L[v] = p.encode(M[v]), y += k, g = Math.max(g, k)
            }
            var w, b, D = new r(s),
                T = 0;
            for (w = 0; w < g; w++)
                for (b = 0; b < u; b++) w < M[b].length && (D[T++] = M[b][w]);
            for (w = 0; w < h; w++)
                for (b = 0; b < u; b++) D[T++] = L[b][w];
            return D
        }(s, e, t)
    }

    function g(e, t, n, r) {
        var s;
        if (y(e)) s = p.fromArray(e);
        else {
            if ("string" != typeof e) throw new Error("Invalid data");
            var i = t;
            if (!i) {
                var _ = p.rawSplit(e);
                i = m.getBestVersionForData(_, n)
            }
            s = p.fromString(e, i || 40)
        }
        var c = m.getBestVersionForData(s, n);
        if (!c) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (t) {
            if (t < c) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + c + ".\n")
        } else t = c;
        var f = L(t, n, s),
            h = a.getSymbolSize(t),
            g = new o(h);
        return function (e, t) {
                for (var n = e.size, r = d.getPositions(t), a = 0; a < r.length; a++)
                    for (var s = r[a][0], i = r[a][1], o = -1; o <= 7; o++)
                        if (!(s + o <= -1 || n <= s + o))
                            for (var u = -1; u <= 7; u++) i + u <= -1 || n <= i + u || (o >= 0 && o <= 6 && (0 === u || 6 === u) || u >= 0 && u <= 6 && (0 === o || 6 === o) || o >= 2 && o <= 4 && u >= 2 && u <= 4 ? e.set(s + o, i + u, !0, !0) : e.set(s + o, i + u, !1, !0))
            }(g, t),
            function (e) {
                for (var t = e.size, n = 8; n < t - 8; n++) {
                    var r = n % 2 == 0;
                    e.set(n, 6, r, !0), e.set(6, n, r, !0)
                }
            }(g),
            function (e, t) {
                for (var n = u.getPositions(t), r = 0; r < n.length; r++)
                    for (var a = n[r][0], s = n[r][1], i = -2; i <= 2; i++)
                        for (var o = -2; o <= 2; o++) - 2 === i || 2 === i || -2 === o || 2 === o || 0 === i && 0 === o ? e.set(a + i, s + o, !0, !0) : e.set(a + i, s + o, !1, !0)
            }(g, t), M(g, n, 0), t >= 7 && function (e, t) {
                for (var n, r, a, s = e.size, i = m.getEncodedBits(t), o = 0; o < 18; o++) n = Math.floor(o / 3), r = o % 3 + s - 8 - 3, a = 1 == (i >> o & 1), e.set(n, r, a, !0), e.set(r, n, a, !0)
            }(g, t),
            function (e, t) {
                for (var n = e.size, r = -1, a = n - 1, s = 7, i = 0, o = n - 1; o > 0; o -= 2)
                    for (6 === o && o--;;) {
                        for (var u = 0; u < 2; u++)
                            if (!e.isReserved(a, o - u)) {
                                var d = !1;
                                i < t.length && (d = 1 == (t[i] >>> s & 1)), e.set(a, o - u, d), -1 === --s && (i++, s = 7)
                            } if ((a += r) < 0 || n <= a) {
                            a -= r, r = -r;
                            break
                        }
                    }
            }(g, f), isNaN(r) && (r = l.getBestMask(g, M.bind(null, g, n))), l.applyMask(r, g), M(g, n, r), {
                modules: g,
                version: t,
                errorCorrectionLevel: n,
                maskPattern: r,
                segments: s
            }
    }
    t.create = function (e, t) {
        if (void 0 === e || "" === e) throw new Error("No input text");
        var n, r, i = s.M;
        return void 0 !== t && (i = s.from(t.errorCorrectionLevel, s.M), n = m.from(t.version), r = l.from(t.maskPattern), t.toSJISFunc && a.setToSJISFunction(t.toSJISFunc)), g(e, n, i, r)
    }
}, function (e, t) {
    function n() {
        this.buffer = [], this.length = 0
    }
    n.prototype = {
        get: function (e) {
            var t = Math.floor(e / 8);
            return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
        },
        put: function (e, t) {
            for (var n = 0; n < t; n++) this.putBit(1 == (e >>> t - n - 1 & 1))
        },
        getLengthInBits: function () {
            return this.length
        },
        putBit: function (e) {
            var t = Math.floor(this.length / 8);
            this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
        }
    }, e.exports = n
}, function (e, t, n) {
    var r = n(9);

    function a(e) {
        if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = e, this.data = new r(e * e), this.data.fill(0), this.reservedBit = new r(e * e), this.reservedBit.fill(0)
    }
    a.prototype.set = function (e, t, n, r) {
        var a = e * this.size + t;
        this.data[a] = n, r && (this.reservedBit[a] = !0)
    }, a.prototype.get = function (e, t) {
        return this.data[e * this.size + t]
    }, a.prototype.xor = function (e, t, n) {
        this.data[e * this.size + t] ^= n
    }, a.prototype.isReserved = function (e, t) {
        return this.reservedBit[e * this.size + t]
    }, e.exports = a
}, function (e, t, n) {
    var r = n(6).getSymbolSize;
    t.getRowColCoords = function (e) {
        if (1 === e) return [];
        for (var t = Math.floor(e / 7) + 2, n = r(e), a = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)), s = [n - 7], i = 1; i < t - 1; i++) s[i] = s[i - 1] - a;
        return s.push(6), s.reverse()
    }, t.getPositions = function (e) {
        for (var n = [], r = t.getRowColCoords(e), a = r.length, s = 0; s < a; s++)
            for (var i = 0; i < a; i++) 0 === s && 0 === i || 0 === s && i === a - 1 || s === a - 1 && 0 === i || n.push([r[s], r[i]]);
        return n
    }
}, function (e, t, n) {
    var r = n(6).getSymbolSize;
    t.getPositions = function (e) {
        var t = r(e);
        return [[0, 0],[t - 7, 0],[0, t - 7]]
    }
}, function (e, t) {
    t.Patterns = {PATTERN000: 0,PATTERN001: 1,PATTERN010: 2,PATTERN011: 3,PATTERN100: 4,PATTERN101: 5,PATTERN110: 6,PATTERN111: 7};
    var n = 3,r = 3,a = 40,s = 10;

    function i(e, n, r) {
        switch (e) {
            case t.Patterns.PATTERN000:
                return (n + r) % 2 == 0;
            case t.Patterns.PATTERN001:
                return n % 2 == 0;
            case t.Patterns.PATTERN010:
                return r % 3 == 0;
            case t.Patterns.PATTERN011:
                return (n + r) % 3 == 0;
            case t.Patterns.PATTERN100:
                return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
            case t.Patterns.PATTERN101:
                return n * r % 2 + n * r % 3 == 0;
            case t.Patterns.PATTERN110:
                return (n * r % 2 + n * r % 3) % 2 == 0;
            case t.Patterns.PATTERN111:
                return (n * r % 3 + (n + r) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + e)
        }
    }
    t.isValid = function (e) {
        return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
    }, t.from = function (e) {
        return t.isValid(e) ? parseInt(e, 10) : void 0
    }, t.getPenaltyN1 = function (e) {
        for (var t = e.size, r = 0, a = 0, s = 0, i = null, o = null, u = 0; u < t; u++) {
            a = s = 0, i = o = null;
            for (var d = 0; d < t; d++) {
                var l = e.get(u, d);
                l === i ? a++ : (a >= 5 && (r += n + (a - 5)), i = l, a = 1), (l = e.get(d, u)) === o ? s++ : (s >= 5 && (r += n + (s - 5)), o = l, s = 1)
            }
            a >= 5 && (r += n + (a - 5)), s >= 5 && (r += n + (s - 5))
        }
        return r
    }, t.getPenaltyN2 = function (e) {
        for (var t = e.size, n = 0, a = 0; a < t - 1; a++)
            for (var s = 0; s < t - 1; s++) {
                var i = e.get(a, s) + e.get(a, s + 1) + e.get(a + 1, s) + e.get(a + 1, s + 1);
                4 !== i && 0 !== i || n++
            }
        return n * r
    }, t.getPenaltyN3 = function (e) {
        for (var t = e.size, n = 0, r = 0, s = 0, i = 0; i < t; i++) {
            r = s = 0;
            for (var o = 0; o < t; o++) r = r << 1 & 2047 | e.get(i, o), o >= 10 && (1488 === r || 93 === r) && n++, s = s << 1 & 2047 | e.get(o, i), o >= 10 && (1488 === s || 93 === s) && n++
        }
        return n * a
    }, t.getPenaltyN4 = function (e) {
        for (var t = 0, n = e.data.length, r = 0; r < n; r++) t += e.data[r];
        return Math.abs(Math.ceil(100 * t / n / 5) - 10) * s
    }, t.applyMask = function (e, t) {
        for (var n = t.size, r = 0; r < n; r++)
            for (var a = 0; a < n; a++) t.isReserved(a, r) || t.xor(a, r, i(e, a, r))
    }, t.getBestMask = function (e, n) {
        for (var r = Object.keys(t.Patterns).length, a = 0, s = 1 / 0, i = 0; i < r; i++) {
            n(i), t.applyMask(i, e);
            var o = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
            t.applyMask(i, e), o < s && (s = o, a = i)
        }
        return a
    }
}, function (e, t, n) {
    var r = n(9),a = n(211);

    function s(e) {
        this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
    }
    s.prototype.initialize = function (e) {
        this.degree = e, this.genPoly = a.generateECPolynomial(this.degree)
    }, s.prototype.encode = function (e) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        var t = new r(this.degree);
        t.fill(0);
        var n = r.concat([e, t], e.length + this.degree),
            s = a.mod(n, this.genPoly),
            i = this.degree - s.length;
        if (i > 0) {
            var o = new r(this.degree);
            return o.fill(0), s.copy(o, i), o
        }
        return s
    }, e.exports = s
}, function (e, t, n) {
    var r = n(9),
        a = n(212);
    t.mul = function (e, t) {
        var n = new r(e.length + t.length - 1);
        n.fill(0);
        for (var s = 0; s < e.length; s++)
            for (var i = 0; i < t.length; i++) n[s + i] ^= a.mul(e[s], t[i]);
        return n
    }, t.mod = function (e, t) {
        for (var n = new r(e); n.length - t.length >= 0;) {
            for (var s = n[0], i = 0; i < t.length; i++) n[i] ^= a.mul(t[i], s);
            for (var o = 0; o < n.length && 0 === n[o];) o++;
            n = n.slice(o)
        }
        return n
    }, t.generateECPolynomial = function (e) {
        for (var n = new r([1]), s = 0; s < e; s++) n = t.mul(n, [1, a.exp(s)]);
        return n
    }
}, function (e, t, n) {
    var r, a, s = n(9);
    s.alloc ? (r = s.alloc(512), a = s.alloc(256)) : (r = new s(512), a = new s(256)),
        function () {
            for (var e = 1, t = 0; t < 255; t++) r[t] = e, a[e] = t, 256 & (e <<= 1) && (e ^= 285);
            for (t = 255; t < 512; t++) r[t] = r[t - 255]
        }(), t.log = function (e) {
            if (e < 1) throw new Error("log(" + e + ")");
            return a[e]
        }, t.exp = function (e) {
            return r[e]
        }, t.mul = function (e, t) {
            return 0 === e || 0 === t ? 0 : r[a[e] + a[t]]
        }
}, function (e, t, n) {
    var r = n(6),a = n(54),s = n(32),i = n(7),o = n(55),u = n(31),d = r.getBCHDigit(7973);

    function l(e, t) {
        return i.getCharCountIndicator(e, t) + 4
    }

    function _(e, t) {
        var n = 0;
        return e.forEach(function (e) {var r = l(e.mode, t);n += r + e.getBitsLength()}), n
    }
    t.from = function (e, t) {
        return o.isValid(e) ? parseInt(e, 10) : t
    }, t.getCapacity = function (e, t, n) {
        if (!o.isValid(e)) throw new Error("Invalid QR Code version");
        void 0 === n && (n = i.BYTE);
        var s = 8 * (r.getSymbolTotalCodewords(e) - a.getTotalCodewordsCount(e, t));
        if (n === i.MIXED) return s;
        var u = s - l(n, e);
        switch (n) {
            case i.NUMERIC:return Math.floor(u / 10 * 3);
            case i.ALPHANUMERIC:return Math.floor(u / 11 * 2);
            case i.KANJI:return Math.floor(u / 13);
            case i.BYTE:
            default:return Math.floor(u / 8)
        }
    }, t.getBestVersionForData = function (e, n) {
        var r, a = s.from(n, s.M);
        if (u(e)) {
            if (e.length > 1) return function (e, n) {
                for (var r = 1; r <= 40; r++) {
                    if (_(e, r) <= t.getCapacity(r, n, i.MIXED)) return r
                }
            }(e, a);
            if (0 === e.length) return 1;
            r = e[0]
        } else r = e;
        return function (e, n, r) {
            for (var a = 1; a <= 40; a++)
                if (n <= t.getCapacity(a, r, e)) return a
        }(r.mode, r.getLength(), a)
    }, t.getEncodedBits = function (e) {
        if (!o.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
        for (var t = e << 12; r.getBCHDigit(t) - d >= 0;) t ^= 7973 << r.getBCHDigit(t) - d;
        return e << 12 | t
    }
}, function (e, t, n) {
    var r = n(6),a = r.getBCHDigit(1335);
    t.getEncodedBits = function (e, t) {
        for (var n = e.bit << 3 | t, s = n << 10; r.getBCHDigit(s) - a >= 0;) s ^= 1335 << r.getBCHDigit(s) - a;
        return 21522 ^ (n << 10 | s)
    }
}, function (e, t, n) {
    var r = n(7),a = n(216),s = n(217),i = n(218),o = n(219),u = n(56),d = n(6),l = n(220);
    function _(e) {return unescape(encodeURIComponent(e)).length}
    function c(e, t, n) {
        for (var r, a = []; null !== (r = e.exec(n));) a.push({
            data: r[0],
            index: r.index,
            mode: t,
            length: r[0].length
        });
        return a
    }

    function m(e) {
        var t, n, a = c(u.NUMERIC, r.NUMERIC, e),
            s = c(u.ALPHANUMERIC, r.ALPHANUMERIC, e);
        return d.isKanjiModeEnabled() ? (t = c(u.BYTE, r.BYTE, e), n = c(u.KANJI, r.KANJI, e)) : (t = c(u.BYTE_KANJI, r.BYTE, e), n = []), a.concat(s, t, n).sort(function (e, t) {
            return e.index - t.index
        }).map(function (e) {
            return {data: e.data,mode: e.mode,length: e.length}
        })
    }

    function f(e, t) {
        switch (t) {
            case r.NUMERIC:return a.getBitsLength(e);
            case r.ALPHANUMERIC:return s.getBitsLength(e);
            case r.KANJI:return o.getBitsLength(e);
            case r.BYTE:return i.getBitsLength(e)
        }
    }

    function h(e, t) {
        var n, u = r.getBestModeForData(e);
        if ((n = r.from(t, u)) !== r.BYTE && n.bit < u.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(u));
        switch (n !== r.KANJI || d.isKanjiModeEnabled() || (n = r.BYTE), n) {
            case r.NUMERIC:return new a(e);
            case r.ALPHANUMERIC:return new s(e);
            case r.KANJI:return new o(e);
            case r.BYTE:return new i(e)
        }
    }
    t.fromArray = function (e) {
        return e.reduce(function (e, t) {
            return "string" == typeof t ? e.push(h(t, null)) : t.data && e.push(h(t.data, t.mode)), e
        }, [])
    }, t.fromString = function (e, n) {
        for (var a = function (e, t) {
                for (var n = {}, a = {
                        start: {}
                    }, s = ["start"], i = 0; i < e.length; i++) {
                    for (var o = e[i], u = [], d = 0; d < o.length; d++) {
                        var l = o[d],_ = "" + i + d;
                        u.push(_), n[_] = {node: l,lastCount: 0
                        }, a[_] = {};
                        for (var c = 0; c < s.length; c++) {
                            var m = s[c];
                            n[m] && n[m].node.mode === l.mode ? (a[m][_] = f(n[m].lastCount + l.length, l.mode) - f(n[m].lastCount, l.mode), n[m].lastCount += l.length) : (n[m] && (n[m].lastCount = l.length), a[m][_] = f(l.length, l.mode) + 4 + r.getCharCountIndicator(l.mode, t))
                        }
                    }
                    s = u
                }
                for (c = 0; c < s.length; c++) a[s[c]].end = 0;
                return {map: a,table: n}
            }(function (e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var a = e[n];
                    switch (a.mode) {
                        case r.NUMERIC:t.push([a, {data: a.data,mode: r.ALPHANUMERIC,length: a.length}, {data: a.data,mode: r.BYTE,length: a.length}]);break;
                        case r.ALPHANUMERIC:t.push([a, {data: a.data,mode: r.BYTE,length: a.length}]);break;
                        case r.KANJI:t.push([a, {data: a.data,mode: r.BYTE,length: _(a.data)}]);break;
                        case r.BYTE:t.push([{data: a.data,mode: r.BYTE,length: _(a.data)}])
                    }
                }
                return t
            }(m(e, d.isKanjiModeEnabled())), n), s = l.find_path(a.map, "start", "end"), i = [], o = 1; o < s.length - 1; o++) i.push(a.table[s[o]].node);
        return t.fromArray(function (e) {
            return e.reduce(function (e, t) {
                var n = e.length - 1 >= 0 ? e[e.length - 1] : null;
                return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
            }, [])
        }(i))
    }, t.rawSplit = function (e) {return t.fromArray(m(e, d.isKanjiModeEnabled()))}
}, function (e, t, n) {
    var r = n(7);
    function a(e) {this.mode = r.NUMERIC, this.data = e.toString()}
    a.getBitsLength = function (e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
    }, a.prototype.getLength = function () {
        return this.data.length
    }, a.prototype.getBitsLength = function () {
        return a.getBitsLength(this.data.length)
    }, a.prototype.write = function (e) {
        var t, n, r;
        for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), r = parseInt(n, 10), e.put(r, 10);
        var a = this.data.length - t;
        a > 0 && (n = this.data.substr(t), r = parseInt(n, 10), e.put(r, 3 * a + 1))
    }, e.exports = a
}, function (e, t, n) {
    var r = n(7),
        a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

    function s(e) {this.mode = r.ALPHANUMERIC, this.data = e}
    s.getBitsLength = function (e) {
        return 11 * Math.floor(e / 2) + e % 2 * 6
    }, s.prototype.getLength = function () {
        return this.data.length
    }, s.prototype.getBitsLength = function () {
        return s.getBitsLength(this.data.length)
    }, s.prototype.write = function (e) {
        var t;
        for (t = 0; t + 2 <= this.data.length; t += 2) {
            var n = 45 * a.indexOf(this.data[t]);
            n += a.indexOf(this.data[t + 1]), e.put(n, 11)
        }
        this.data.length % 2 && e.put(a.indexOf(this.data[t]), 6)
    }, e.exports = s
}, function (e, t, n) {
    var r = n(9),a = n(7);
    function s(e) {this.mode = a.BYTE, this.data = new r(e)}
    s.getBitsLength = function (e) {
        return 8 * e
    }, s.prototype.getLength = function () {
        return this.data.length
    }, s.prototype.getBitsLength = function () {
        return s.getBitsLength(this.data.length)
    }, s.prototype.write = function (e) {
        for (var t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
    }, e.exports = s
}, function (e, t, n) {
    var r = n(7),a = n(6);
    function s(e) {this.mode = r.KANJI, this.data = e}
    s.getBitsLength = function (e) {
        return 13 * e
    }, s.prototype.getLength = function () {
        return this.data.length
    }, s.prototype.getBitsLength = function () {
        return s.getBitsLength(this.data.length)
    }, s.prototype.write = function (e) {
        var t;
        for (t = 0; t < this.data.length; t++) {
            var n = a.toSJIS(this.data[t]);
            if (n >= 33088 && n <= 40956) n -= 33088;
            else {
                if (!(n >= 57408 && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                n -= 49472
            }
            n = 192 * (n >>> 8 & 255) + (255 & n), e.put(n, 13)
        }
    }, e.exports = s
}, function (e, t, n) {
    "use strict";
    var r = {
        single_source_shortest_paths: function (e, t, n) {
            var a = {},
                s = {};
            s[t] = 0;
            var i, o, u, d, l, _, c, m = r.PriorityQueue.make();
            for (m.push(t, 0); !m.empty();)
                for (u in o = (i = m.pop()).value, d = i.cost, l = e[o] || {}) l.hasOwnProperty(u) && (_ = d + l[u], c = s[u], (void 0 === s[u] || c > _) && (s[u] = _, m.push(u, _), a[u] = o));
            if (void 0 !== n && void 0 === s[n]) {
                var f = ["Could not find a path from ", t, " to ", n, "."].join("");
                throw new Error(f)
            }
            return a
        },
        extract_shortest_path_from_predecessor_list: function (e, t) {
            for (var n = [], r = t; r;) n.push(r), e[r], r = e[r];
            return n.reverse(), n
        },
        find_path: function (e, t, n) {
            var a = r.single_source_shortest_paths(e, t, n);
            return r.extract_shortest_path_from_predecessor_list(a, n)
        },
        PriorityQueue: {
            make: function (e) {var t, n = r.PriorityQueue,a = {};for (t in e = e || {}, n) n.hasOwnProperty(t) && (a[t] = n[t]);return a.queue = [], a.sorter = e.sorter || n.default_sorter, a},
            default_sorter: function (e, t) {return e.cost - t.cost},
            push: function (e, t) {var n = {value: e,cost: t};this.queue.push(n), this.queue.sort(this.sorter)},
            pop: function () {return this.queue.shift()},
            empty: function () {return 0 === this.queue.length}
        }
    };
    e.exports = r
}, function (e, t, n) {
    var r = n(57);
    t.render = function (e, t, n) {
        var a = n,s = t;
        void 0 !== a || t && t.getContext || (a = t, t = void 0), t || (s = function () {
            try {return document.createElement("canvas")
            } catch (e) {throw new Error("You need to specify a canvas element")}
        }()), a = r.getOptions(a);
        var i = r.getImageWidth(e.modules.size, a),
            o = s.getContext("2d"),
            u = o.createImageData(i, i);
        return r.qrToImageData(u.data, e, a),
            function (e, t, n) {
                e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px"
            }(o, s, i), o.putImageData(u, 0, 0), s
    }, t.renderToDataURL = function (e, n, r) {
        var a = r;
        void 0 !== a || n && n.getContext || (a = n, n = void 0), a || (a = {});
        var s = t.render(e, n, a),
            i = a.type || "image/png",
            o = a.rendererOpts || {};
        return s.toDataURL(i, o.quality)
    }
}, function (e, t, n) {
    var r = n(57);

    function a(e, t) {var n = e.a / 255,r = t + '="' + e.hex + '"';return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r}

    function s(e, t, n) {var r = e + t;return void 0 !== n && (r += " " + n), r}
    t.render = function (e, t, n) {
        var i = r.getOptions(t),
            o = e.modules.size,
            u = e.modules.data,
            d = o + 2 * i.margin,
            l = i.color.light.a ? "<path " + a(i.color.light, "fill") + ' d="M0 0h' + d + "v" + d + 'H0z"/>' : "",
            _ = "<path " + a(i.color.dark, "stroke") + ' d="' + function (e, t, n) {
                for (var r = "", a = 0, i = !1, o = 0, u = 0; u < e.length; u++) {
                    var d = Math.floor(u % t),l = Math.floor(u / t);
                    d || i || (i = !0), e[u] ? (o++, u > 0 && d > 0 && e[u - 1] || (r += i ? s("M", d + n, .5 + l + n) : s("m", a, 0), a = 0, i = !1), d + 1 < t && e[u + 1] || (r += s("h", o), o = 0)) : a++
                }
                return r
            }(u, o, i.margin) + '"/>',
            c = 'viewBox="0 0 ' + d + " " + d + '"',
            m = '<svg xmlns="http://www.w3.org/2000/svg" ' + (i.width ? 'width="' + i.width + '" height="' + i.width + '" ' : "") + c + ' shape-rendering="crispEdges">' + l + _ + "</svg>\n";
        return "function" == typeof n && n(null, m), m
    }
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {return e.l}
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {return e.i}
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t, n) {
    var r={"./af":58,"./af.js":58,"./ar":59,"./ar-dz":60,"./ar-dz.js":60,"./ar-kw":61,"./ar-kw.js":61,"./ar-ly":62,"./ar-ly.js":62,"./ar-ma":63,"./ar-ma.js":63,"./ar-sa":64,"./ar-sa.js":64,"./ar-tn":65,"./ar-tn.js":65,"./ar.js":59,"./az":66,"./az.js":66,"./be":67,"./be.js":67,"./bg":68,"./bg.js":68,"./bm":69,"./bm.js":69,"./bn":70,"./bn.js":70,"./bo":71,"./bo.js":71,"./br":72,"./br.js":72,"./bs":73,"./bs.js":73,"./ca":74,"./ca.js":74,"./cs":75,"./cs.js":75,"./cv":76,"./cv.js":76,"./cy":77,"./cy.js":77,"./da":78,"./da.js":78,"./de":79,"./de-at":80,"./de-at.js":80,"./de-ch":81,"./de-ch.js":81,"./de.js":79,"./dv":82,"./dv.js":82,"./el":83,"./el.js":83,"./en-SG":84,"./en-SG.js":84,"./en-au":85,"./en-au.js":85,"./en-ca":86,"./en-ca.js":86,"./en-gb":87,"./en-gb.js":87,"./en-ie":88,"./en-ie.js":88,"./en-il":89,"./en-il.js":89,"./en-nz":90,"./en-nz.js":90,"./eo":91,"./eo.js":91,"./es":92,"./es-do":93,"./es-do.js":93,"./es-us":94,"./es-us.js":94,"./es.js":92,"./et":95,"./et.js":95,"./eu":96,"./eu.js":96,"./fa":97,"./fa.js":97,"./fi":98,"./fi.js":98,"./fo":99,"./fo.js":99,"./fr":100,"./fr-ca":101,"./fr-ca.js":101,"./fr-ch":102,"./fr-ch.js":102,"./fr.js":100,"./fy":103,"./fy.js":103,"./ga":104,"./ga.js":104,"./gd":105,"./gd.js":105,"./gl":106,"./gl.js":106,"./gom-latn":107,"./gom-latn.js":107,"./gu":108,"./gu.js":108,"./he":109,"./he.js":109,"./hi":110,"./hi.js":110,"./hr":111,"./hr.js":111,"./hu":112,"./hu.js":112,"./hy-am":113,"./hy-am.js":113,"./id":114,"./id.js":114,"./is":115,"./is.js":115,"./it":116,"./it-ch":117,"./it-ch.js":117,"./it.js":116,"./ja":118,"./ja.js":118,"./jv":119,"./jv.js":119,"./ka":120,"./ka.js":120,"./kk":121,"./kk.js":121,"./km":122,"./km.js":122,"./kn":123,"./kn.js":123,"./ko":124,"./ko.js":124,"./ku":125,"./ku.js":125,"./ky":126,"./ky.js":126,"./lb":127,"./lb.js":127,"./lo":128,"./lo.js":128,"./lt":129,"./lt.js":129,"./lv":130,"./lv.js":130,"./me":131,"./me.js":131,"./mi":132,"./mi.js":132,"./mk":133,"./mk.js":133,"./ml":134,"./ml.js":134,"./mn":135,"./mn.js":135,"./mr":136,"./mr.js":136,"./ms":137,"./ms-my":138,"./ms-my.js":138,"./ms.js":137,"./mt":139,"./mt.js":139,"./my":140,"./my.js":140,"./nb":141,"./nb.js":141,"./ne":142,"./ne.js":142,"./nl":143,"./nl-be":144,"./nl-be.js":144,"./nl.js":143,"./nn":145,"./nn.js":145,"./pa-in":146,"./pa-in.js":146,"./pl":147,"./pl.js":147,"./pt":148,"./pt-br":149,"./pt-br.js":149,"./pt.js":148,"./ro":150,"./ro.js":150,"./ru":151,"./ru.js":151,"./sd":152,"./sd.js":152,"./se":153,"./se.js":153,"./si":154,"./si.js":154,"./sk":155,"./sk.js":155,"./sl":156,"./sl.js":156,"./sq":157,"./sq.js":157,"./sr":158,"./sr-cyrl":159,"./sr-cyrl.js":159,"./sr.js":158,"./ss":160,"./ss.js":160,"./sv":161,"./sv.js":161,"./sw":162,"./sw.js":162,"./ta":163,"./ta.js":163,"./te":164,"./te.js":164,"./tet":165,"./tet.js":165,"./tg":166,"./tg.js":166,"./th":167,"./th.js":167,"./tl-ph":168,"./tl-ph.js":168,"./tlh":169,"./tlh.js":169,"./tr":170,"./tr.js":170,"./tzl":171,"./tzl.js":171,"./tzm":172,"./tzm-latn":173,"./tzm-latn.js":173,"./tzm.js":172,"./ug-cn":174,"./ug-cn.js":174,"./uk":175,"./uk.js":175,"./ur":176,"./ur.js":176,"./uz":177,"./uz-latn":178,"./uz-latn.js":178,"./uz.js":177,"./vi":179,"./vi.js":179,"./x-pseudo":180,"./x-pseudo.js":180,"./yo":181,"./yo.js":181,"./zh-cn":182,"./zh-cn.js":182,"./zh-hk":183,"./zh-hk.js":183,"./zh-tw":184,"./zh-tw.js":184};

    function a(e) {var t = s(e);return n(t)}

    function s(e) {
        if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
    }
    a.keys = function () {
        return Object.keys(r)
    }, a.resolve = s, e.exports = a, a.id = 224
}, function (e, t, n) {
    var r = n(226),
        a = n(235),
        s = n(236),
        i = n(240),
        o = n(243),
        u = [{name: "bitcoin",symbol: "btc",addressTypes: {prod: ["00", "05"],testnet: ["6f", "c4"]},validator: s
        }, {name: "bitcoincash",symbol: "bch",addressTypes: {prod: ["00", "05"],testnet: ["6f", "c4"]},validator: s
        }, {name: "eos",symbol: "eos",
            validator: function(require,module,exports) {
                function isValidEOSAddress (address, currency, networkType) {
                    var regex = /^[a-z0-9]+$/g
                    if (address.search(regex) !== -1 && address.length === 12) {return true}
                    return false
                }
            }
        }, {name: "litecoin",symbol: "ltc",addressTypes: {prod: ["30", "05", "32"],testnet: ["6f", "c4", "3a"]},validator: s
        }, {name: "peercoin",symbol: "ppc",addressTypes: {prod: ["37", "75"],testnet: ["6f", "c4"]},validator: s
        }, {name: "dogecoin",symbol: "doge",addressTypes: {prod: ["1e", "16"],testnet: ["71", "c4"]},validator: s
        }, {name: "beavercoin",symbol: "bvc",addressTypes: {prod: ["19", "05"],testnet: ["6f", "c4"]},validator: s
        }, {name: "freicoin",symbol: "frc",addressTypes: {prod: ["00", "05"],testnet: ["6f", "c4"]},validator: s
        }, {name: "protoshares",symbol: "pts",addressTypes: {prod: ["38", "05"],testnet: ["6f", "c4"]},validator: s
        }, {name: "megacoin",symbol: "mec",addressTypes: {prod: ["32", "05"],testnet: ["6f", "c4"]},validator: s
        }, {name: "primecoin",symbol: "xpm",addressTypes: {prod: ["17", "53"],testnet: ["6f", "c4"]},validator: s
        }, {name: "auroracoin",symbol: "aur",addressTypes: {prod: ["17", "05"],testnet: ["6f", "c4"]},validator: s
        }, {name: "namecoin",symbol: "nmc",addressTypes: {prod: ["34"],testnet: []},validator: s
        }, {name: "biocoin",symbol: "bio",addressTypes: {prod: ["19", "14"],testnet: ["6f", "c4"]},validator: s
        }, {name: "garlicoin",symbol: "grlc",addressTypes: {prod: ["26", "05"],testnet: ["6f", "c4"]},validator: s
        }, {name: "vertcoin",symbol: "vtc",addressTypes: {prod: ["0x", "47"],testnet: ["6f", "c4"]},segwitHrp: "vtc",validator: s
        }, {name: "bitcoingold",symbol: "btg",addressTypes: {prod: ["26", "17"],testnet: ["6f", "c4"]},validator: s
        }, {name: "komodo",symbol: "kmd",addressTypes: {prod: ["3c", "55"],testnet: ["0", "5"]},validator: s
        }, {name: "bitcoinz",symbol: "btcz",expectedLength: 26,addressTypes: {prod: ["1cb8", "1cbd"],testnet: ["1d25", "1cba"]},validator: s
        }, {name: "bitcoinprivate",symbol: "btcp",expectedLength: 26,addressTypes: {prod: ["1325", "13af"],testnet: ["1957", "19e0"]},validator: s
        }, {name: "hush",symbol: "hush",expectedLength: 26,addressTypes: {prod: ["1cb8", "1cbd"],testnet: ["1d25", "1cba"]},validator: s
        }, {name: "snowgem",symbol: "sng",expectedLength: 26,addressTypes: {prod: ["1c28", "1c2d"],testnet: ["1d25", "1cba"]},validator: s
        }, {name: "zcash",symbol: "zec",expectedLength: 26,addressTypes: {prod: ["1cb8", "1cbd"],testnet: ["1d25", "1cba"]},validator: s
        }, {name: "zclassic",symbol: "zcl",expectedLength: 26,addressTypes: {prod: ["1cb8", "1cbd"],testnet: ["1d25", "1cba"]},validator: s
        }, {name: "zencash",symbol: "zen",expectedLength: 26,addressTypes: {prod: ["2089", "2096"],testnet: ["2092", "2098"]},validator: s
        }, {name: "votecoin",symbol: "vot",expectedLength: 26,addressTypes: {prod: ["1cb8", "1cbd"],testnet: ["1d25", "1cba"]},validator: s
        }, {name: "decred",symbol: "dcr",addressTypes: {prod: ["073f", "071a"],testnet: ["0f21", "0efc"]},hashFunction: "blake256",expectedLength: 26,validator: s
        }, {name: "digibyte",symbol: "dgb",addressTypes: {prod: ["1e"],testnet: []},validator: s
        }, {name: "ethereum",symbol: "eth",validator: a
        }, {name: "etherzero",symbol: "etz",validator: a
        }, {name: "ethereumclassic",symbol: "etc",validator: a
        }, {name: "callisto",symbol: "clo",validator: a
        }, {name: "ripple",symbol: "xrp",validator: r
        }, {name: "dash",symbol: "dash",addressTypes: {prod: ["4c", "10"],testnet: ["8c", "13"]},validator: s
        }, {name: "neo",symbol: "neo",addressTypes: {prod: ["17"],testnet: []},validator: s
        }, {name: "neogas",symbol: "gas",addressTypes: {prod: ["17"],testnet: []},validator: s
        }, {name: "qtum",symbol: "qtum",addressTypes: {prod: ["3a", "32"],testnet: ["78", "6e"]},validator: s
        }, {name: "bankex",symbol: "bkx",validator: a
        }, {name: "monero",symbol: "xmr",addressTypes: {prod: ["18"],testnet: ["53"]},iAddressTypes: {prod: ["19"],testnet: ["54"]},validator: i
        }, {name: "nano",symbol: "nano",validator: o
        }, {name: "raiblocks",symbol: "xrb",validator: o}];
    e.exports = {
        getByNameOrSymbol: function (e) {
            for (var t = e.toLowerCase(), n = 0; n < u.length; n++) {
                var r = u[n];
                if (r.name === t || r.symbol === t) return r
            }
            return null
        }
    }
}, function (e, t, n) {
    var r = n(10),
        a = "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz",
        s = n(186)(a),
        i = new RegExp("^r[" + a + "]{27,35}$");
    e.exports = {
        isValidAddress: function (e) {
            return !!i.test(e) && this.verifyChecksum(e)
        },
        verifyChecksum: function (e) {
            var t = s.decode(e);
            return r.sha256Checksum(r.toHex(t.slice(0, -4))) === r.toHex(t.slice(-4))
        }
    }
}, function (e, t, n) {
    "use strict";
    var r;
    ! function (a) {
        function s(e, t, n) {
            var r, a, s, i, m, f, h, p, y, M = 0,
                L = [],
                g = 0,
                Y = !1,
                v = [],
                b = [],
                D = !1;
            if (r = (n = n || {}).encoding || "UTF8", (y = n.numRounds || 1) !== parseInt(y, 10) || 1 > y) throw Error("numRounds must a integer >= 1");
            if (0 !== e.lastIndexOf("SHA-", 0)) throw Error("Chosen SHA variant is not supported");
            if (f = function (t, n) {
                    return w(t, n, e)
                }, h = function (t, n, r, a) {
                    var s, i;
                    if ("SHA-224" !== e && "SHA-256" !== e) throw Error("Unexpected error in SHA-2 implementation");
                    for (s = 15 + (n + 65 >>> 9 << 4), i = 16; t.length <= s;) t.push(0);
                    for (t[n >>> 5] |= 128 << 24 - n % 32, n += r, t[s] = 4294967295 & n, t[s - 1] = n / 4294967296 | 0, r = t.length, n = 0; n < r; n += i) a = w(t.slice(n, n + i), a, e);
                    if ("SHA-224" === e) t = [a[0], a[1], a[2], a[3], a[4], a[5], a[6]];
                    else {
                        if ("SHA-256" !== e) throw Error("Unexpected error in SHA-2 implementation");
                        t = a
                    }
                    return t
                }, p = function (e) {
                    return e.slice()
                }, "SHA-224" === e) m = 512, i = 224;
            else {
                if ("SHA-256" !== e) throw Error("Chosen SHA variant is not supported");
                m = 512, i = 256
            }
            s = c(t, r), a = k(e), this.setHMACKey = function (t, n, s) {
                var i;
                if (!0 === Y) throw Error("HMAC key already set");
                if (!0 === D) throw Error("Cannot set HMAC key after calling update");
                if (t = (n = c(n, r = (s || {}).encoding || "UTF8")(t)).binLen, n = n.value, s = (i = m >>> 3) / 4 - 1, i < t / 8) {
                    for (n = h(n, t, 0, k(e)); n.length <= s;) n.push(0);
                    n[s] &= 4294967040
                } else if (i > t / 8) {
                    for (; n.length <= s;) n.push(0);
                    n[s] &= 4294967040
                }
                for (t = 0; t <= s; t += 1) v[t] = 909522486 ^ n[t], b[t] = 1549556828 ^ n[t];
                a = f(v, a), M = m, Y = !0
            }, this.update = function (e) {
                var t, n, r, i = 0,
                    o = m >>> 5;
                for (e = (t = s(e, L, g)).binLen, n = t.value, t = e >>> 5, r = 0; r < t; r += o) i + m <= e && (a = f(n.slice(r, r + o), a), i += m);
                M += i, L = n.slice(i >>> 5), g = e % m, D = !0
            }, this.getHash = function (t, n) {
                var r, s, c, m;
                if (!0 === Y) throw Error("Cannot call getHash after setting HMAC key");
                switch (c = _(n), t) {
                    case "HEX":
                        r = function (e) {
                            return o(e, i, c)
                        };
                        break;
                    case "B64":
                        r = function (e) {
                            return u(e, i, c)
                        };
                        break;
                    case "BYTES":
                        r = function (e) {
                            return d(e, i)
                        };
                        break;
                    case "ARRAYBUFFER":
                        try {
                            s = new ArrayBuffer(0)
                        } catch (e) {
                            throw Error("ARRAYBUFFER not supported by this environment")
                        }
                        r = function (e) {
                            return l(e, i)
                        };
                        break;
                    default:
                        throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER")
                }
                for (m = h(L.slice(), g, M, p(a)), s = 1; s < y; s += 1) m = h(m, i, 0, k(e));
                return r(m)
            }, this.getHMAC = function (t, n) {
                var r, s, c, y;
                if (!1 === Y) throw Error("Cannot call getHMAC without first setting HMAC key");
                switch (c = _(n), t) {
                    case "HEX":
                        r = function (e) {
                            return o(e, i, c)
                        };
                        break;
                    case "B64":
                        r = function (e) {
                            return u(e, i, c)
                        };
                        break;
                    case "BYTES":
                        r = function (e) {
                            return d(e, i)
                        };
                        break;
                    case "ARRAYBUFFER":
                        try {
                            r = new ArrayBuffer(0)
                        } catch (e) {
                            throw Error("ARRAYBUFFER not supported by this environment")
                        }
                        r = function (e) {
                            return l(e, i)
                        };
                        break;
                    default:
                        throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER")
                }
                return s = h(L.slice(), g, M, p(a)), y = f(b, k(e)), r(y = h(s, i, m, y))
            }
        }

        function i() {}

        function o(e, t, n) {
            var r, a, s = "";
            for (t /= 8, r = 0; r < t; r += 1) a = e[r >>> 2] >>> 8 * (3 + r % 4 * -1), s += "0123456789abcdef".charAt(a >>> 4 & 15) + "0123456789abcdef".charAt(15 & a);
            return n.outputUpper ? s.toUpperCase() : s
        }

        function u(e, t, n) {
            var r, a, s, i = "",
                o = t / 8;
            for (r = 0; r < o; r += 3)
                for (a = r + 1 < o ? e[r + 1 >>> 2] : 0, s = r + 2 < o ? e[r + 2 >>> 2] : 0, s = (e[r >>> 2] >>> 8 * (3 + r % 4 * -1) & 255) << 16 | (a >>> 8 * (3 + (r + 1) % 4 * -1) & 255) << 8 | s >>> 8 * (3 + (r + 2) % 4 * -1) & 255, a = 0; 4 > a; a += 1) i += 8 * r + 6 * a <= t ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(s >>> 6 * (3 - a) & 63) : n.b64Pad;
            return i
        }

        function d(e, t) {
            var n, r, a = "",
                s = t / 8;
            for (n = 0; n < s; n += 1) r = e[n >>> 2] >>> 8 * (3 + n % 4 * -1) & 255, a += String.fromCharCode(r);
            return a
        }

        function l(e, t) {
            var n, r, a = t / 8,
                s = new ArrayBuffer(a);
            for (r = new Uint8Array(s), n = 0; n < a; n += 1) r[n] = e[n >>> 2] >>> 8 * (3 + n % 4 * -1) & 255;
            return s
        }

        function _(e) {
            var t = {
                outputUpper: !1,
                b64Pad: "=",
                shakeLen: -1
            };
            if (e = e || {}, t.outputUpper = e.outputUpper || !1, !0 === e.hasOwnProperty("b64Pad") && (t.b64Pad = e.b64Pad), "boolean" != typeof t.outputUpper) throw Error("Invalid outputUpper formatting option");
            if ("string" != typeof t.b64Pad) throw Error("Invalid b64Pad formatting option");
            return t
        }

        function c(e, t) {
            var n;
            switch (t) {
                case "UTF8":
                case "UTF16BE":
                case "UTF16LE":
                    break;
                default:
                    throw Error("encoding must be UTF8, UTF16BE, or UTF16LE")
            }
            switch (e) {
                case "HEX":
                    n = function (e, t, n) {
                        var r, a, s, i, o, u = e.length;
                        if (0 != u % 2) throw Error("String of HEX type must be in byte increments");
                        for (t = t || [0], o = (n = n || 0) >>> 3, r = 0; r < u; r += 2) {
                            if (a = parseInt(e.substr(r, 2), 16), isNaN(a)) throw Error("String of HEX type contains invalid characters");
                            for (s = (i = (r >>> 1) + o) >>> 2; t.length <= s;) t.push(0);
                            t[s] |= a << 8 * (3 + i % 4 * -1)
                        }
                        return {
                            value: t,
                            binLen: 4 * u + n
                        }
                    };
                    break;
                case "TEXT":
                    n = function (e, n, r) {
                        var a, s, i, o, u, d, l, _, c = 0;
                        if (n = n || [0], u = (r = r || 0) >>> 3, "UTF8" === t)
                            for (_ = 3, i = 0; i < e.length; i += 1)
                                for (s = [], 128 > (a = e.charCodeAt(i)) ? s.push(a) : 2048 > a ? (s.push(192 | a >>> 6), s.push(128 | 63 & a)) : 55296 > a || 57344 <= a ? s.push(224 | a >>> 12, 128 | a >>> 6 & 63, 128 | 63 & a) : (i += 1, a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(i)), s.push(240 | a >>> 18, 128 | a >>> 12 & 63, 128 | a >>> 6 & 63, 128 | 63 & a)), o = 0; o < s.length; o += 1) {
                                    for (d = (l = c + u) >>> 2; n.length <= d;) n.push(0);
                                    n[d] |= s[o] << 8 * (_ + l % 4 * -1), c += 1
                                } else if ("UTF16BE" === t || "UTF16LE" === t)
                                    for (_ = 2, s = "UTF16LE" === t || "UTF16LE" !== t && !1, i = 0; i < e.length; i += 1) {
                                        for (a = e.charCodeAt(i), !0 === s && (a = (o = 255 & a) << 8 | a >>> 8), d = (l = c + u) >>> 2; n.length <= d;) n.push(0);
                                        n[d] |= a << 8 * (_ + l % 4 * -1), c += 2
                                    }
                        return {
                            value: n,
                            binLen: 8 * c + r
                        }
                    };
                    break;
                case "B64":
                    n = function (e, t, n) {
                        var r, a, s, i, o, u, d, l = 0;
                        if (-1 === e.search(/^[a-zA-Z0-9=+\/]+$/)) throw Error("Invalid character in base-64 string");
                        if (a = e.indexOf("="), e = e.replace(/\=/g, ""), -1 !== a && a < e.length) throw Error("Invalid '=' found in base-64 string");
                        for (t = t || [0], u = (n = n || 0) >>> 3, a = 0; a < e.length; a += 4) {
                            for (o = e.substr(a, 4), s = i = 0; s < o.length; s += 1) i |= (r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(o[s])) << 18 - 6 * s;
                            for (s = 0; s < o.length - 1; s += 1) {
                                for (r = (d = l + u) >>> 2; t.length <= r;) t.push(0);
                                t[r] |= (i >>> 16 - 8 * s & 255) << 8 * (3 + d % 4 * -1), l += 1
                            }
                        }
                        return {
                            value: t,
                            binLen: 8 * l + n
                        }
                    };
                    break;
                case "BYTES":
                    n = function (e, t, n) {
                        var r, a, s, i, o;
                        for (t = t || [0], s = (n = n || 0) >>> 3, a = 0; a < e.length; a += 1) r = e.charCodeAt(a), i = (o = a + s) >>> 2, t.length <= i && t.push(0), t[i] |= r << 8 * (3 + o % 4 * -1);
                        return {
                            value: t,
                            binLen: 8 * e.length + n
                        }
                    };
                    break;
                case "ARRAYBUFFER":
                    try {
                        n = new ArrayBuffer(0)
                    } catch (e) {
                        throw Error("ARRAYBUFFER not supported by this environment")
                    }
                    n = function (e, t, n) {
                        var r, a, s, i, o;
                        for (t = t || [0], a = (n = n || 0) >>> 3, o = new Uint8Array(e), r = 0; r < e.byteLength; r += 1) s = (i = r + a) >>> 2, t.length <= s && t.push(0), t[s] |= o[r] << 8 * (3 + i % 4 * -1);
                        return {
                            value: t,
                            binLen: 8 * e.byteLength + n
                        }
                    };
                    break;
                default:
                    throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER")
            }
            return n
        }

        function m(e, t) {
            return e >>> t | e << 32 - t
        }

        function f(e, t, n) {
            return e & t ^ ~e & n
        }

        function h(e, t, n) {
            return e & t ^ e & n ^ t & n
        }

        function p(e) {
            return m(e, 2) ^ m(e, 13) ^ m(e, 22)
        }

        function y(e) {
            return m(e, 6) ^ m(e, 11) ^ m(e, 25)
        }

        function M(e) {
            return m(e, 7) ^ m(e, 18) ^ e >>> 3
        }

        function L(e) {
            return m(e, 17) ^ m(e, 19) ^ e >>> 10
        }

        function g(e, t) {
            var n = (65535 & e) + (65535 & t);
            return ((e >>> 16) + (t >>> 16) + (n >>> 16) & 65535) << 16 | 65535 & n
        }

        function Y(e, t, n, r) {
            var a = (65535 & e) + (65535 & t) + (65535 & n) + (65535 & r);
            return ((e >>> 16) + (t >>> 16) + (n >>> 16) + (r >>> 16) + (a >>> 16) & 65535) << 16 | 65535 & a
        }

        function v(e, t, n, r, a) {
            var s = (65535 & e) + (65535 & t) + (65535 & n) + (65535 & r) + (65535 & a);
            return ((e >>> 16) + (t >>> 16) + (n >>> 16) + (r >>> 16) + (a >>> 16) + (s >>> 16) & 65535) << 16 | 65535 & s
        }

        function k(e) {
            var t, n = [];
            if (0 !== e.lastIndexOf("SHA-", 0)) throw Error("No SHA variants supported");
            switch (n = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428], t = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], e) {
                case "SHA-224":
                    break;
                case "SHA-256":
                    n = t;
                    break;
                case "SHA-384":
                case "SHA-512":
                    n = [new i, new i, new i, new i, new i, new i, new i, new i];
                    break;
                default:
                    throw Error("Unknown SHA variant")
            }
            return n
        }

        function w(e, t, n) {
            var r, a, s, i, o, u, d, l, _, c, m, k, w, D, T, S, x, H, A, j, E, P, O, F = [];
            if ("SHA-224" !== n && "SHA-256" !== n) throw Error("Unexpected error in SHA-2 implementation");
            for (c = 64, k = 1, P = Number, w = g, D = Y, T = v, S = M, x = L, H = p, A = y, E = h, j = f, O = b, n = t[0], r = t[1], a = t[2], s = t[3], i = t[4], o = t[5], u = t[6], d = t[7], m = 0; m < c; m += 1) 16 > m ? (_ = m * k, l = e.length <= _ ? 0 : e[_], _ = e.length <= _ + 1 ? 0 : e[_ + 1], F[m] = new P(l, _)) : F[m] = D(x(F[m - 2]), F[m - 7], S(F[m - 15]), F[m - 16]), l = T(d, A(i), j(i, o, u), O[m], F[m]), _ = w(H(n), E(n, r, a)), d = u, u = o, o = i, i = w(s, l), s = a, a = r, r = n, n = w(l, _);
            return t[0] = w(n, t[0]), t[1] = w(r, t[1]), t[2] = w(a, t[2]), t[3] = w(s, t[3]), t[4] = w(i, t[4]), t[5] = w(o, t[5]), t[6] = w(u, t[6]), t[7] = w(d, t[7]), t
        }
        var b;
        b = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], void 0 === (r = function () {
            return s
        }.call(t, n, t, e)) || (e.exports = r)
    }()
}, function (e, t, n) {
    "use strict";
    (function (t) {
        i.sigma = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3],
            [11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4],
            [7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8],
            [9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13],
            [2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9],
            [12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11],
            [13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10],
            [6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5],
            [10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3],
            [11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4],
            [7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8],
            [9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13],
            [2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9]
        ], i.u256 = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479], i.padding = new t([128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), i.prototype._length_carry = function (e) {
            for (var t = 0; t < e.length && !(e[t] < 4294967296); ++t) e[t] -= 4294967296, e[t + 1] += 1
        }, i.prototype.update = function (e, n) {
            e = new t(e, n);
            for (var r = this._block, a = 0; this._blockOffset + e.length - a >= r.length;) {
                for (var s = this._blockOffset; s < r.length;) r[s++] = e[a++];
                this._length[0] += 8 * r.length, this._length_carry(this._length), this._compress(), this._blockOffset = 0
            }
            for (; a < e.length;) r[this._blockOffset++] = e[a++];
            return this
        };
        var n = new t([1]),
            r = new t([129]);

        function a(e, t) {
            return (e << 32 - t | e >>> t) >>> 0
        }

        function s(e, t, n, r, s, o, u, d) {
            var l = i.sigma,
                _ = i.u256;
            e[r] = e[r] + ((t[l[n][d]] ^ _[l[n][d + 1]]) >>> 0) + e[s] >>> 0, e[u] = a(e[u] ^ e[r], 16), e[o] = e[o] + e[u] >>> 0, e[s] = a(e[s] ^ e[o], 12), e[r] = e[r] + ((t[l[n][d + 1]] ^ _[l[n][d]]) >>> 0) + e[s] >>> 0, e[u] = a(e[u] ^ e[r], 8), e[o] = e[o] + e[u] >>> 0, e[s] = a(e[s] ^ e[o], 7)
        }

        function i() {
            this._h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this._s = [0, 0, 0, 0], this._block = new t(64), this._blockOffset = 0, this._length = [0, 0], this._nullt = !1, this._zo = n, this._oo = r
        }
        i.prototype._compress = function () {
            var e, t = i.u256,
                n = new Array(16),
                r = new Array(16);
            for (e = 0; e < 16; ++e) r[e] = this._block.readUInt32BE(4 * e);
            for (e = 0; e < 8; ++e) n[e] = this._h[e] >>> 0;
            for (e = 8; e < 12; ++e) n[e] = (this._s[e - 8] ^ t[e - 8]) >>> 0;
            for (e = 12; e < 16; ++e) n[e] = t[e - 8];
            for (this._nullt || (n[12] = (n[12] ^ this._length[0]) >>> 0, n[13] = (n[13] ^ this._length[0]) >>> 0, n[14] = (n[14] ^ this._length[1]) >>> 0, n[15] = (n[15] ^ this._length[1]) >>> 0), e = 0; e < 14; ++e) s(n, r, e, 0, 4, 8, 12, 0), s(n, r, e, 1, 5, 9, 13, 2), s(n, r, e, 2, 6, 10, 14, 4), s(n, r, e, 3, 7, 11, 15, 6), s(n, r, e, 0, 5, 10, 15, 8), s(n, r, e, 1, 6, 11, 12, 10), s(n, r, e, 2, 7, 8, 13, 12), s(n, r, e, 3, 4, 9, 14, 14);
            for (e = 0; e < 16; ++e) this._h[e % 8] = (this._h[e % 8] ^ n[e]) >>> 0;
            for (e = 0; e < 8; ++e) this._h[e] = (this._h[e] ^ this._s[e % 4]) >>> 0
        }, i.prototype._padding = function () {
            var e = this._length[0] + 8 * this._blockOffset,
                n = this._length[1];
            e >= 4294967296 && (e -= 4294967296, n += 1);
            var r = new t(8);
            r.writeUInt32BE(n, 0), r.writeUInt32BE(e, 4), 55 === this._blockOffset ? (this._length[0] -= 8, this.update(this._oo)) : (this._blockOffset < 55 ? (0 === this._blockOffset && (this._nullt = !0), this._length[0] -= 8 * (55 - this._blockOffset), this.update(i.padding.slice(0, 55 - this._blockOffset))) : (this._length[0] -= 8 * (64 - this._blockOffset), this.update(i.padding.slice(0, 64 - this._blockOffset)), this._length[0] -= 440, this.update(i.padding.slice(1, 56)), this._nullt = !0), this.update(this._zo), this._length[0] -= 8), this._length[0] -= 64, this.update(r)
        }, i.prototype.digest = function (e) {
            this._padding();
            for (var n = new t(32), r = 0; r < 8; ++r) n.writeUInt32BE(this._h[r], 4 * r);
            return n.toString(e)
        }, e.exports = i
    }).call(this, n(185).Buffer)
}, function (e, t, n) {
    "use strict";
    t.byteLength = function (e) {
        var t = d(e),
            n = t[0],
            r = t[1];
        return 3 * (n + r) / 4 - r
    }, t.toByteArray = function (e) {
        var t, n, r = d(e),
            i = r[0],
            o = r[1],
            u = new s(function (e, t, n) {
                return 3 * (t + n) / 4 - n
            }(0, i, o)),
            l = 0,
            _ = o > 0 ? i - 4 : i;
        for (n = 0; n < _; n += 4) t = a[e.charCodeAt(n)] << 18 | a[e.charCodeAt(n + 1)] << 12 | a[e.charCodeAt(n + 2)] << 6 | a[e.charCodeAt(n + 3)], u[l++] = t >> 16 & 255, u[l++] = t >> 8 & 255, u[l++] = 255 & t;
        2 === o && (t = a[e.charCodeAt(n)] << 2 | a[e.charCodeAt(n + 1)] >> 4, u[l++] = 255 & t);
        1 === o && (t = a[e.charCodeAt(n)] << 10 | a[e.charCodeAt(n + 1)] << 4 | a[e.charCodeAt(n + 2)] >> 2, u[l++] = t >> 8 & 255, u[l++] = 255 & t);
        return u
    }, t.fromByteArray = function (e) {
        for (var t, n = e.length, a = n % 3, s = [], i = 0, o = n - a; i < o; i += 16383) s.push(l(e, i, i + 16383 > o ? o : i + 16383));
        1 === a ? (t = e[n - 1], s.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === a && (t = (e[n - 2] << 8) + e[n - 1], s.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
        return s.join("")
    };
    for (var r = [], a = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, u = i.length; o < u; ++o) r[o] = i[o], a[i.charCodeAt(o)] = o;

    function d(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("=");
        return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
    }

    function l(e, t, n) {
        for (var a, s, i = [], o = t; o < n; o += 3) a = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), i.push(r[(s = a) >> 18 & 63] + r[s >> 12 & 63] + r[s >> 6 & 63] + r[63 & s]);
        return i.join("")
    }
    a["-".charCodeAt(0)] = 62, a["_".charCodeAt(0)] = 63
}, function (e, t) {
    t.read = function (e, t, n, r, a) {
        var s, i, o = 8 * a - r - 1,
            u = (1 << o) - 1,
            d = u >> 1,
            l = -7,
            _ = n ? a - 1 : 0,
            c = n ? -1 : 1,
            m = e[t + _];
        for (_ += c, s = m & (1 << -l) - 1, m >>= -l, l += o; l > 0; s = 256 * s + e[t + _], _ += c, l -= 8);
        for (i = s & (1 << -l) - 1, s >>= -l, l += r; l > 0; i = 256 * i + e[t + _], _ += c, l -= 8);
        if (0 === s) s = 1 - d;
        else {
            if (s === u) return i ? NaN : 1 / 0 * (m ? -1 : 1);
            i += Math.pow(2, r), s -= d
        }
        return (m ? -1 : 1) * i * Math.pow(2, s - r)
    }, t.write = function (e, t, n, r, a, s) {
        var i, o, u, d = 8 * s - a - 1,
            l = (1 << d) - 1,
            _ = l >> 1,
            c = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            m = r ? 0 : s - 1,
            f = r ? 1 : -1,
            h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0, i = l) : (i = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -i)) < 1 && (i--, u *= 2), (t += i + _ >= 1 ? c / u : c * Math.pow(2, 1 - _)) * u >= 2 && (i++, u /= 2), i + _ >= l ? (o = 0, i = l) : i + _ >= 1 ? (o = (t * u - 1) * Math.pow(2, a), i += _) : (o = t * Math.pow(2, _ - 1) * Math.pow(2, a), i = 0)); a >= 8; e[n + m] = 255 & o, m += f, o /= 256, a -= 8);
        for (i = i << a | o, d += a; d > 0; e[n + m] = 255 & i, m += f, i /= 256, d -= 8);
        e[n + m - f] |= 128 * h
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function (e) {
        return "[object Array]" == n.call(e)
    }
}, function (e, t, n) {
    "use strict";
    (function (t, n) {
        /**
         * [js-sha3]{@link https://github.com/emn178/js-sha3}
         *
         * @version 0.7.0
         * @author Chen, Yi-Cyuan [emn178@gmail.com]
         * @copyright Chen, Yi-Cyuan 2015-2017
         * @license MIT
         */
        var r = "input is invalid type",
            a = "object" == typeof window,
            s = a ? window : {};
        s.JS_SHA3_NO_WINDOW && (a = !1);
        var i = !a && "object" == typeof self;
        !s.JS_SHA3_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node ? s = n : i && (s = self);
        var o = !s.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
            u = "0123456789abcdef".split(""),
            d = [4, 1024, 262144, 67108864],
            l = [0, 8, 16, 24],
            _ = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
            c = [224, 256, 384, 512],
            m = [128, 256],
            f = ["hex", "buffer", "arrayBuffer", "array", "digest"],
            h = {
                128: 168,
                256: 136
            };
        !s.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }), !o || !s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (e) {
            return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
        });
        for (var p = function (e, t, n) {
                return function (r) {
                    return new A(e, t, e).update(r)[n]()
                }
            }, y = function (e, t, n) {
                return function (r, a) {
                    return new A(e, t, a).update(r)[n]()
                }
            }, M = function (e, t, n) {
                return function (t, r, a, s) {
                    return k["cshake" + e].update(t, r, a, s)[n]()
                }
            }, L = function (e, t, n) {
                return function (t, r, a, s) {
                    return k["kmac" + e].update(t, r, a, s)[n]()
                }
            }, g = function (e, t, n, r) {
                for (var a = 0; a < f.length; ++a) {
                    var s = f[a];
                    e[s] = t(n, r, s)
                }
                return e
            }, Y = function (e, t) {
                var n = p(e, t, "hex");
                return n.create = function () {
                    return new A(e, t, e)
                }, n.update = function (e) {
                    return n.create().update(e)
                }, g(n, p, e, t)
            }, v = [{
                name: "keccak",
                padding: [1, 256, 65536, 16777216],
                bits: c,
                createMethod: Y
            }, {
                name: "sha3",
                padding: [6, 1536, 393216, 100663296],
                bits: c,
                createMethod: Y
            }, {
                name: "shake",
                padding: [31, 7936, 2031616, 520093696],
                bits: m,
                createMethod: function (e, t) {
                    var n = y(e, t, "hex");
                    return n.create = function (n) {
                        return new A(e, t, n)
                    }, n.update = function (e, t) {
                        return n.create(t).update(e)
                    }, g(n, y, e, t)
                }
            }, {
                name: "cshake",
                padding: d,
                bits: m,
                createMethod: function (e, t) {
                    var n = h[e],
                        r = M(e, 0, "hex");
                    return r.create = function (r, a, s) {
                        return a || s ? new A(e, t, r).bytepad([a, s], n) : k["shake" + e].create(r)
                    }, r.update = function (e, t, n, a) {
                        return r.create(t, n, a).update(e)
                    }, g(r, M, e, t)
                }
            }, {
                name: "kmac",
                padding: d,
                bits: m,
                createMethod: function (e, t) {
                    var n = h[e],
                        r = L(e, 0, "hex");
                    return r.create = function (r, a, s) {
                        return new j(e, t, a).bytepad(["KMAC", s], n).bytepad([r], n)
                    }, r.update = function (e, t, n, a) {
                        return r.create(e, n, a).update(t)
                    }, g(r, L, e, t)
                }
            }], k = {}, w = [], b = 0; b < v.length; ++b)
            for (var D = v[b], T = D.bits, S = 0; S < T.length; ++S) {
                var x = D.name + "_" + T[S];
                if (w.push(x), k[x] = D.createMethod(T[S], D.padding), "sha3" !== D.name) {
                    var H = D.name + T[S];
                    w.push(H), k[H] = k[x]
                }
            }

        function A(e, t, n) {
            this.blocks = [], this.s = [], this.padding = t, this.outputBits = n, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = n >> 5, this.extraBytes = (31 & n) >> 3;
            for (var r = 0; r < 50; ++r) this.s[r] = 0
        }

        function j(e, t, n) {
            A.call(this, e, t, n)
        }
        A.prototype.update = function (e) {
            if (!this.finalized) {
                var t, n = typeof e;
                if ("string" !== n) {
                    if ("object" !== n) throw r;
                    if (null === e) throw r;
                    if (o && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                    else if (!(Array.isArray(e) || o && ArrayBuffer.isView(e))) throw r;
                    t = !0
                }
                for (var a, s, i = this.blocks, u = this.byteCount, d = e.length, _ = this.blockCount, c = 0, m = this.s; c < d;) {
                    if (this.reset)
                        for (this.reset = !1, i[0] = this.block, a = 1; a < _ + 1; ++a) i[a] = 0;
                    if (t)
                        for (a = this.start; c < d && a < u; ++c) i[a >> 2] |= e[c] << l[3 & a++];
                    else
                        for (a = this.start; c < d && a < u; ++c)(s = e.charCodeAt(c)) < 128 ? i[a >> 2] |= s << l[3 & a++] : s < 2048 ? (i[a >> 2] |= (192 | s >> 6) << l[3 & a++], i[a >> 2] |= (128 | 63 & s) << l[3 & a++]) : s < 55296 || s >= 57344 ? (i[a >> 2] |= (224 | s >> 12) << l[3 & a++], i[a >> 2] |= (128 | s >> 6 & 63) << l[3 & a++], i[a >> 2] |= (128 | 63 & s) << l[3 & a++]) : (s = 65536 + ((1023 & s) << 10 | 1023 & e.charCodeAt(++c)), i[a >> 2] |= (240 | s >> 18) << l[3 & a++], i[a >> 2] |= (128 | s >> 12 & 63) << l[3 & a++], i[a >> 2] |= (128 | s >> 6 & 63) << l[3 & a++], i[a >> 2] |= (128 | 63 & s) << l[3 & a++]);
                    if (this.lastByteIndex = a, a >= u) {
                        for (this.start = a - u, this.block = i[_], a = 0; a < _; ++a) m[a] ^= i[a];
                        E(m), this.reset = !0
                    } else this.start = a
                }
                return this
            }
        }, A.prototype.encode = function (e, t) {
            var n = 255 & e,
                r = 1,
                a = [n];
            for (n = 255 & (e >>= 8); n > 0;) a.unshift(n), n = 255 & (e >>= 8), ++r;
            return t ? a.push(r) : a.unshift(r), this.update(a), a.length
        }, A.prototype.encodeString = function (e) {
            var t, n = typeof e;
            if ("string" !== n) {
                if ("object" !== n) throw r;
                if (null === e) throw r;
                if (o && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                else if (!(Array.isArray(e) || o && ArrayBuffer.isView(e))) throw r;
                t = !0
            }
            var a = 0,
                s = e.length;
            if (t) a = s;
            else
                for (var i = 0; i < e.length; ++i) {
                    var u = e.charCodeAt(i);
                    u < 128 ? a += 1 : u < 2048 ? a += 2 : u < 55296 || u >= 57344 ? a += 3 : (u = 65536 + ((1023 & u) << 10 | 1023 & e.charCodeAt(++i)), a += 4)
                }
            return a += this.encode(8 * a), this.update(e), a
        }, A.prototype.bytepad = function (e, t) {
            for (var n = this.encode(t), r = 0; r < e.length; ++r) n += this.encodeString(e[r]);
            var a = t - n % t,
                s = [];
            return s.length = a, this.update(s), this
        }, A.prototype.finalize = function () {
            if (!this.finalized) {
                this.finalized = !0;
                var e = this.blocks,
                    t = this.lastByteIndex,
                    n = this.blockCount,
                    r = this.s;
                if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
                    for (e[0] = e[n], t = 1; t < n + 1; ++t) e[t] = 0;
                for (e[n - 1] |= 2147483648, t = 0; t < n; ++t) r[t] ^= e[t];
                E(r)
            }
        }, A.prototype.toString = A.prototype.hex = function () {
            this.finalize();
            for (var e, t = this.blockCount, n = this.s, r = this.outputBlocks, a = this.extraBytes, s = 0, i = 0, o = ""; i < r;) {
                for (s = 0; s < t && i < r; ++s, ++i) e = n[s], o += u[e >> 4 & 15] + u[15 & e] + u[e >> 12 & 15] + u[e >> 8 & 15] + u[e >> 20 & 15] + u[e >> 16 & 15] + u[e >> 28 & 15] + u[e >> 24 & 15];
                i % t == 0 && (E(n), s = 0)
            }
            return a && (e = n[s], o += u[e >> 4 & 15] + u[15 & e], a > 1 && (o += u[e >> 12 & 15] + u[e >> 8 & 15]), a > 2 && (o += u[e >> 20 & 15] + u[e >> 16 & 15])), o
        }, A.prototype.arrayBuffer = function () {
            this.finalize();
            var e, t = this.blockCount,
                n = this.s,
                r = this.outputBlocks,
                a = this.extraBytes,
                s = 0,
                i = 0,
                o = this.outputBits >> 3;
            e = a ? new ArrayBuffer(r + 1 << 2) : new ArrayBuffer(o);
            for (var u = new Uint32Array(e); i < r;) {
                for (s = 0; s < t && i < r; ++s, ++i) u[i] = n[s];
                i % t == 0 && E(n)
            }
            return a && (u[s] = n[s], e = e.slice(0, o)), e
        }, A.prototype.buffer = A.prototype.arrayBuffer, A.prototype.digest = A.prototype.array = function () {
            this.finalize();
            for (var e, t, n = this.blockCount, r = this.s, a = this.outputBlocks, s = this.extraBytes, i = 0, o = 0, u = []; o < a;) {
                for (i = 0; i < n && o < a; ++i, ++o) e = o << 2, t = r[i], u[e] = 255 & t, u[e + 1] = t >> 8 & 255, u[e + 2] = t >> 16 & 255, u[e + 3] = t >> 24 & 255;
                o % n == 0 && E(r)
            }
            return s && (e = o << 2, t = r[i], u[e] = 255 & t, s > 1 && (u[e + 1] = t >> 8 & 255), s > 2 && (u[e + 2] = t >> 16 & 255)), u
        }, j.prototype = new A, j.prototype.finalize = function () {
            return this.encode(this.outputBits, !0), A.prototype.finalize.call(this)
        };
        var E = function (e) {
            var t, n, r, a, s, i, o, u, d, l, c, m, f, h, p, y, M, L, g, Y, v, k, w, b, D, T, S, x, H, A, j, E, P, O, F, R, C, W, I, N, U, B, z, $, J, G, q, Z, V, K, X, Q, ee, te, ne, re, ae, se, ie, oe, ue, de, le;
            for (r = 0; r < 48; r += 2) a = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], s = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], i = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], o = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], u = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], d = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], l = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], c = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (m = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (i << 1 | o >>> 31), n = (f = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (o << 1 | i >>> 31), e[0] ^= t, e[1] ^= n, e[10] ^= t, e[11] ^= n, e[20] ^= t, e[21] ^= n, e[30] ^= t, e[31] ^= n, e[40] ^= t, e[41] ^= n, t = a ^ (u << 1 | d >>> 31), n = s ^ (d << 1 | u >>> 31), e[2] ^= t, e[3] ^= n, e[12] ^= t, e[13] ^= n, e[22] ^= t, e[23] ^= n, e[32] ^= t, e[33] ^= n, e[42] ^= t, e[43] ^= n, t = i ^ (l << 1 | c >>> 31), n = o ^ (c << 1 | l >>> 31), e[4] ^= t, e[5] ^= n, e[14] ^= t, e[15] ^= n, e[24] ^= t, e[25] ^= n, e[34] ^= t, e[35] ^= n, e[44] ^= t, e[45] ^= n, t = u ^ (m << 1 | f >>> 31), n = d ^ (f << 1 | m >>> 31), e[6] ^= t, e[7] ^= n, e[16] ^= t, e[17] ^= n, e[26] ^= t, e[27] ^= n, e[36] ^= t, e[37] ^= n, e[46] ^= t, e[47] ^= n, t = l ^ (a << 1 | s >>> 31), n = c ^ (s << 1 | a >>> 31), e[8] ^= t, e[9] ^= n, e[18] ^= t, e[19] ^= n, e[28] ^= t, e[29] ^= n, e[38] ^= t, e[39] ^= n, e[48] ^= t, e[49] ^= n, h = e[0], p = e[1], G = e[11] << 4 | e[10] >>> 28, q = e[10] << 4 | e[11] >>> 28, x = e[20] << 3 | e[21] >>> 29, H = e[21] << 3 | e[20] >>> 29, oe = e[31] << 9 | e[30] >>> 23, ue = e[30] << 9 | e[31] >>> 23, B = e[40] << 18 | e[41] >>> 14, z = e[41] << 18 | e[40] >>> 14, O = e[2] << 1 | e[3] >>> 31, F = e[3] << 1 | e[2] >>> 31, y = e[13] << 12 | e[12] >>> 20, M = e[12] << 12 | e[13] >>> 20, Z = e[22] << 10 | e[23] >>> 22, V = e[23] << 10 | e[22] >>> 22, A = e[33] << 13 | e[32] >>> 19, j = e[32] << 13 | e[33] >>> 19, de = e[42] << 2 | e[43] >>> 30, le = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, ne = e[4] << 30 | e[5] >>> 2, R = e[14] << 6 | e[15] >>> 26, C = e[15] << 6 | e[14] >>> 26, L = e[25] << 11 | e[24] >>> 21, g = e[24] << 11 | e[25] >>> 21, K = e[34] << 15 | e[35] >>> 17, X = e[35] << 15 | e[34] >>> 17, E = e[45] << 29 | e[44] >>> 3, P = e[44] << 29 | e[45] >>> 3, b = e[6] << 28 | e[7] >>> 4, D = e[7] << 28 | e[6] >>> 4, re = e[17] << 23 | e[16] >>> 9, ae = e[16] << 23 | e[17] >>> 9, W = e[26] << 25 | e[27] >>> 7, I = e[27] << 25 | e[26] >>> 7, Y = e[36] << 21 | e[37] >>> 11, v = e[37] << 21 | e[36] >>> 11, Q = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, $ = e[8] << 27 | e[9] >>> 5, J = e[9] << 27 | e[8] >>> 5, T = e[18] << 20 | e[19] >>> 12, S = e[19] << 20 | e[18] >>> 12, se = e[29] << 7 | e[28] >>> 25, ie = e[28] << 7 | e[29] >>> 25, N = e[38] << 8 | e[39] >>> 24, U = e[39] << 8 | e[38] >>> 24, k = e[48] << 14 | e[49] >>> 18, w = e[49] << 14 | e[48] >>> 18, e[0] = h ^ ~y & L, e[1] = p ^ ~M & g, e[10] = b ^ ~T & x, e[11] = D ^ ~S & H, e[20] = O ^ ~R & W, e[21] = F ^ ~C & I, e[30] = $ ^ ~G & Z, e[31] = J ^ ~q & V, e[40] = te ^ ~re & se, e[41] = ne ^ ~ae & ie, e[2] = y ^ ~L & Y, e[3] = M ^ ~g & v, e[12] = T ^ ~x & A, e[13] = S ^ ~H & j, e[22] = R ^ ~W & N, e[23] = C ^ ~I & U, e[32] = G ^ ~Z & K, e[33] = q ^ ~V & X, e[42] = re ^ ~se & oe, e[43] = ae ^ ~ie & ue, e[4] = L ^ ~Y & k, e[5] = g ^ ~v & w, e[14] = x ^ ~A & E, e[15] = H ^ ~j & P, e[24] = W ^ ~N & B, e[25] = I ^ ~U & z, e[34] = Z ^ ~K & Q, e[35] = V ^ ~X & ee, e[44] = se ^ ~oe & de, e[45] = ie ^ ~ue & le, e[6] = Y ^ ~k & h, e[7] = v ^ ~w & p, e[16] = A ^ ~E & b, e[17] = j ^ ~P & D, e[26] = N ^ ~B & O, e[27] = U ^ ~z & F, e[36] = K ^ ~Q & $, e[37] = X ^ ~ee & J, e[46] = oe ^ ~de & te, e[47] = ue ^ ~le & ne, e[8] = k ^ ~h & y, e[9] = w ^ ~p & M, e[18] = E ^ ~b & T, e[19] = P ^ ~D & S, e[28] = B ^ ~O & R, e[29] = z ^ ~F & C, e[38] = Q ^ ~$ & G, e[39] = ee ^ ~J & q, e[48] = de ^ ~te & re, e[49] = le ^ ~ne & ae, e[0] ^= _[r], e[1] ^= _[r + 1]
        };
        e.exports = k
    }).call(this, n(20), n(11))
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = e[t] + e[n],
            a = e[t + 1] + e[n + 1];
        r >= 4294967296 && a++, e[t] = r, e[t + 1] = a
    }

    function a(e, t, n, r) {
        var a = e[t] + n;
        n < 0 && (a += 4294967296);
        var s = e[t + 1] + r;
        a >= 4294967296 && s++, e[t] = a, e[t + 1] = s
    }

    function s(e, t) {
        return e[t] ^ e[t + 1] << 8 ^ e[t + 2] << 16 ^ e[t + 3] << 24
    }

    function i(e, t, n, s, i, o) {
        var u = l[i],
            _ = l[i + 1],
            c = l[o],
            m = l[o + 1];
        r(d, e, t), a(d, e, u, _);
        var f = d[s] ^ d[e],
            h = d[s + 1] ^ d[e + 1];
        d[s] = h, d[s + 1] = f, r(d, n, s), f = d[t] ^ d[n], h = d[t + 1] ^ d[n + 1], d[t] = f >>> 24 ^ h << 8, d[t + 1] = h >>> 24 ^ f << 8, r(d, e, t), a(d, e, c, m), f = d[s] ^ d[e], h = d[s + 1] ^ d[e + 1], d[s] = f >>> 16 ^ h << 16, d[s + 1] = h >>> 16 ^ f << 16, r(d, n, s), f = d[t] ^ d[n], h = d[t + 1] ^ d[n + 1], d[t] = h >>> 31 ^ f << 1, d[t + 1] = f >>> 31 ^ h << 1
    }
    var o = new Uint32Array([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]),
        u = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3].map(function (e) {
            return 2 * e
        })),
        d = new Uint32Array(32),
        l = new Uint32Array(32);

    function _(e, t) {
        var n = 0;
        for (n = 0; n < 16; n++) d[n] = e.h[n], d[n + 16] = o[n];
        for (d[24] = d[24] ^ e.t, d[25] = d[25] ^ e.t / 4294967296, t && (d[28] = ~d[28], d[29] = ~d[29]), n = 0; n < 32; n++) l[n] = s(e.b, 4 * n);
        for (n = 0; n < 12; n++) i(0, 8, 16, 24, u[16 * n + 0], u[16 * n + 1]), i(2, 10, 18, 26, u[16 * n + 2], u[16 * n + 3]), i(4, 12, 20, 28, u[16 * n + 4], u[16 * n + 5]), i(6, 14, 22, 30, u[16 * n + 6], u[16 * n + 7]), i(0, 10, 20, 30, u[16 * n + 8], u[16 * n + 9]), i(2, 12, 22, 24, u[16 * n + 10], u[16 * n + 11]), i(4, 14, 16, 26, u[16 * n + 12], u[16 * n + 13]), i(6, 8, 18, 28, u[16 * n + 14], u[16 * n + 15]);
        for (n = 0; n < 16; n++) e.h[n] = e.h[n] ^ d[n] ^ d[n + 16]
    }
    var c = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    function m(e, t, n, r) {
        c.fill(0), this.b = new Uint8Array(128), this.h = new Uint32Array(16), this.t = 0, this.c = 0, this.outlen = e, c[0] = e, t && (c[1] = t.length), c[2] = 1, c[3] = 1, n && c.set(n, 32), r && c.set(r, 48);
        for (var a = 0; a < 16; a++) this.h[a] = o[a] ^ s(c, 4 * a);
        t && (f(this, t), this.c = 128)
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) 128 === e.c && (e.t += e.c, _(e, !1), e.c = 0), e.b[e.c++] = t[n]
    }

    function h(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16)
    }
    m.prototype.update = function (e) {
        return f(this, e), this
    }, m.prototype.digest = function (e) {
        var t = e && "binary" !== e && "hex" !== e ? e : new Uint8Array(this.outlen);
        return function (e, t) {
            e.t += e.c;
            for (; e.c < 128;) e.b[e.c++] = 0;
            _(e, !0);
            for (var n = 0; n < e.outlen; n++) t[n] = e.h[n >> 2] >> 8 * (3 & n)
        }(this, t), "hex" === e ? function (e) {
            for (var t = "", n = 0; n < e.length; n++) t += h(e[n]);
            return t
        }(t) : t
    }, m.prototype.final = m.prototype.digest, e.exports = m
}, function (e, t, n) {
    var r = n(185),
        a = r.Buffer;

    function s(e, t) {
        for (var n in e) t[n] = e[n]
    }

    function i(e, t, n) {
        return a(e, t, n)
    }
    a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? e.exports = r : (s(r, t), t.Buffer = i), s(a, i), i.from = function (e, t, n) {
        if ("number" == typeof e) throw new TypeError("Argument must not be a number");
        return a(e, t, n)
    }, i.alloc = function (e, t, n) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        var r = a(e);
        return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r
    }, i.allocUnsafe = function (e) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        return a(e)
    }, i.allocUnsafeSlow = function (e) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        return r.SlowBuffer(e)
    }
}, function (e, t, n) {
    var r = n(10);
    e.exports = {
        isValidAddress: function (e) {
            return !!/^0x[0-9a-fA-F]{40}$/.test(e) && (!(!/^0x[0-9a-f]{40}$/.test(e) && !/^0x?[0-9A-F]{40}$/.test(e)) || this.verifyChecksum(e))
        },
        verifyChecksum: function (e) {
            e = e.replace("0x", "");
            for (var t = r.keccak256(e.toLowerCase()), n = 0; n < 40; n++)
                if (parseInt(t[n], 16) > 7 && e[n].toUpperCase() !== e[n] || parseInt(t[n], 16) <= 7 && e[n].toLowerCase() !== e[n]) return !1;
            return !0
        }
    }
}, function (e, t, n) {
    var r = n(237),
        a = n(238),
        s = n(10),
        i = "prod";

    function o(e, t) {
        var n = (t = t || {}).expectedLength || 25,
            a = t.hashFunction || "sha256",
            i = function (e) {
                try {
                    return r.decode(e)
                } catch (e) {
                    return null
                }
            }(e);
        if (i) {
            var o = i.length;
            return o !== n ? null : s.toHex(i.slice(o - 4, o)) === function (e, t) {
                switch (e) {
                    case "blake256":
                        return s.blake256Checksum(t);
                    case "sha256":
                    default:
                        return s.sha256Checksum(t)
                }
            }(a, s.toHex(i.slice(0, o - 4))) ? s.toHex(i.slice(0, n - 24)) : null
        }
        return null
    }
    e.exports = {
        isValidAddress: function (e, t, n) {
            return function (e, t, n) {
                n = n || i;
                var r = o(e, t);
                return !!r && ("prod" === n || "testnet" === n ? t.addressTypes[n] : t.addressTypes.prod.concat(t.addressTypes.testnet)).indexOf(r) >= 0
            }(e, t, n) || a.isValidAddress(e, t.segwitHrp)
        }
    }
}, function (e, t) {
    for (var n = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", r = {}, a = 0; a < n.length; ++a) r[n.charAt(a)] = a;
    var s = n.length;
    e.exports = {
        decode: function (e) {
            if (0 === e.length) return [];
            var t, n, a = [0];
            for (t = 0; t < e.length; ++t) {
                var i = e[t];
                if (!(i in r)) throw new Error("Non-base58 character");
                for (n = 0; n < a.length; ++n) a[n] *= s;
                a[0] += r[i];
                var o = 0;
                for (n = 0; n < a.length; ++n) a[n] += o, o = a[n] >> 8, a[n] &= 255;
                for (; o;) a.push(255 & o), o >>= 8
            }
            for (t = 0;
                "1" === e[t] && t < e.length - 1; ++t) a.push(0);
            return a.reverse()
        }
    }
}, function (e, t, n) {
    var r = n(239);

    function a(e, t, n, r) {
        for (var a = 0, s = 0, i = [], o = (1 << n) - 1, u = 0; u < e.length; ++u) {
            var d = e[u];
            if (d < 0 || d >> t != 0) return null;
            for (a = a << t | d, s += t; s >= n;) s -= n, i.push(a >> s & o)
        }
        if (r) s > 0 && i.push(a << n - s & o);
        else if (s >= t || a << n - s & o) return null;
        return i
    }

    function s(e, t) {
        var n = r.decode(t);
        if (null === n || n.hrp !== e || n.data.length < 1 || n.data[0] > 16) return null;
        var s = a(n.data.slice(1), 5, 8, !1);
        return null === s || s.length < 2 || s.length > 40 ? null : 0 === n.data[0] && 20 !== s.length && 32 !== s.length ? null : {
            version: n.data[0],
            program: s
        }
    }

    function i(e, t, n) {
        var i = r.encode(e, [t].concat(a(n, 8, 5, !0)));
        return null === s(e, i) ? null : i
    }
    e.exports = {
        encode: i,
        decode: s,
        isValidAddress: function (e, t) {
            var n = s(t = t || "bc", e);
            return null === n && (n = s(t = "tb", e)), null !== n && i(t, n.version, n.program) === e.toLowerCase()
        }
    }
}, function (e, t) {
    var n = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
        r = [996825010, 642813549, 513874426, 1027748829, 705979059];

    function a(e) {
        for (var t = 1, n = 0; n < e.length; ++n) {
            var a = t >> 25;
            t = (33554431 & t) << 5 ^ e[n];
            for (var s = 0; s < 5; ++s) a >> s & 1 && (t ^= r[s])
        }
        return t
    }

    function s(e) {
        var t, n = [];
        for (t = 0; t < e.length; ++t) n.push(e.charCodeAt(t) >> 5);
        for (n.push(0), t = 0; t < e.length; ++t) n.push(31 & e.charCodeAt(t));
        return n
    }
    e.exports = {
        decode: function (e) {
            var t, r = !1,
                i = !1;
            for (t = 0; t < e.length; ++t) {
                if (e.charCodeAt(t) < 33 || e.charCodeAt(t) > 126) return null;
                e.charCodeAt(t) >= 97 && e.charCodeAt(t) <= 122 && (r = !0), e.charCodeAt(t) >= 65 && e.charCodeAt(t) <= 90 && (i = !0)
            }
            if (r && i) return null;
            var o = (e = e.toLowerCase()).lastIndexOf("1");
            if (o < 1 || o + 7 > e.length || e.length > 90) return null;
            var u = e.substring(0, o),
                d = [];
            for (t = o + 1; t < e.length; ++t) {
                var l = n.indexOf(e.charAt(t));
                if (-1 === l) return null;
                d.push(l)
            }
            if (! function (e, t) {
                    return 1 === a(s(e).concat(t))
                }(u, d)) return null;
            return {
                hrp: u,
                data: d.slice(0, d.length - 6)
            }
        },
        encode: function (e, t) {
            for (var r = t.concat(function (e, t) {
                    for (var n = 1 ^ a(s(e).concat(t).concat([0, 0, 0, 0, 0, 0])), r = [], i = 0; i < 6; ++i) r.push(n >> 5 * (5 - i) & 31);
                    return r
                }(e, t)), i = e + "1", o = 0; o < r.length; ++o) i += n.charAt(r[o]);
            return i
        }
    }
}, function (e, t, n) {
    var r = n(10),
        a = n(241),
        s = new RegExp("^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{95}$"),
        i = new RegExp("^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{106}$");
    e.exports = {
        isValidAddress: function (e, t, n) {
            n = n || "prod";
            var o = "standard";
            if (!s.test(e)) {
                if (!i.test(e)) return !1;
                o = "integrated"
            }
            var u = a.decode(e);
            return !!u && (!! function (e, t, n, r) {
                var a = t.addressTypes;
                switch ("integrated" == r && (a = t.iAddressTypes), n) {
                    case "prod":
                        return parseInt(e.substr(0, 2), 16) == a.prod[0];
                    case "testnet":
                        return parseInt(e.substr(0, 2), 16) == a.testnet[0];
                    case "both":
                        return parseInt(e.substr(0, 2), 16) == a.prod[0] || parseInt(e.substr(0, 2), 16) == a.testnet[0];
                    default:
                        return !1
                }
            }(u, t, n, o) && u.slice(-8) === r.keccak256Checksum(function (e) {
                if (e.length % 2 != 0) return null;
                for (var t = new Uint8Array(e.length / 2), n = 0; n < e.length / 2; ++n) t[n] = parseInt(e.slice(2 * n, 2 * n + 2), 16);
                return t
            }(u.slice(0, -8))))
        }
    }
}, function (e, t, n) {
    var r = n(242).JSBigInt,
        a = function () {
            for (var e = {}, t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", n = [], a = 0; a < t.length; a++) n.push(t.charCodeAt(a));
            var s = [0, 2, 3, 5, 6, 7, 9, 10, 11],
                i = n.length,
                o = new r(2).pow(64);
            return e.encode_block = function (e, t, a) {
                if (e.length < 1 || e.length > 11) throw "Invalid block length: " + e.length;
                for (var o = function (e) {
                        if (e.length < 1 || e.length > 8) throw "Invalid input length";
                        var t = r.ZERO,
                            n = new r(2).pow(8),
                            a = 0;
                        switch (9 - e.length) {
                            case 1:
                                t = t.add(e[a++]);
                            case 2:
                                t = t.multiply(n).add(e[a++]);
                            case 3:
                                t = t.multiply(n).add(e[a++]);
                            case 4:
                                t = t.multiply(n).add(e[a++]);
                            case 5:
                                t = t.multiply(n).add(e[a++]);
                            case 6:
                                t = t.multiply(n).add(e[a++]);
                            case 7:
                                t = t.multiply(n).add(e[a++]);
                            case 8:
                                t = t.multiply(n).add(e[a++]);
                                break;
                            default:
                                throw "Impossible condition"
                        }
                        return t
                    }(e), u = s[e.length] - 1; 1 === o.compare(0);) {
                    var d = o.divRem(i),
                        l = d[1];
                    o = d[0], t[a + u] = n[l.toJSValue()], u--
                }
                return t
            }, e.encode = function (t) {
                var r = function (e) {
                    if (e.length % 2 != 0) throw "Hex string has invalid length!";
                    for (var t = new Uint8Array(e.length / 2), n = 0; n < e.length / 2; ++n) t[n] = parseInt(e.slice(2 * n, 2 * n + 2), 16);
                    return t
                }(t);
                if (0 === r.length) return "";
                var a, i = Math.floor(r.length / 8),
                    o = r.length % 8,
                    u = 11 * i + s[o],
                    d = new Uint8Array(u);
                for (a = 0; a < u; ++a) d[a] = n[0];
                for (a = 0; a < i; a++) d = e.encode_block(r.subarray(8 * a, 8 * a + 8), d, 11 * a);
                return o > 0 && (d = e.encode_block(r.subarray(8 * i, 8 * i + o), d, 11 * i)),
                    function (e) {
                        for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                        return t.join("")
                    }(d)
            }, e.decode_block = function (e, t, a) {
                if (e.length < 1 || e.length > 11) throw "Invalid block length: " + e.length;
                var u = s.indexOf(e.length);
                if (u <= 0) throw "Invalid block size";
                for (var d = new r(0), l = new r(1), _ = e.length - 1; _ >= 0; _--) {
                    var c = n.indexOf(e[_]);
                    if (c < 0) throw "Invalid symbol";
                    var m = l.multiply(c).add(d);
                    if (1 === m.compare(o)) throw "Overflow";
                    d = m, l = l.multiply(i)
                }
                if (u < 8 && new r(2).pow(8 * u).compare(d) <= 0) throw "Overflow 2";
                return t.set(function (e, t) {
                    var n = new Uint8Array(t);
                    if (t < 1 || t > 8) throw "Invalid input length";
                    for (var a = new r(2).pow(8), s = t - 1; s >= 0; s--) n[s] = e.remainder(a).toJSValue(), e = e.divide(a);
                    return n
                }(d, u), a), t
            }, e.decode = function (t) {
                if (0 === (t = function (e) {
                        for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
                        return t
                    }(t)).length) return "";
                var n = Math.floor(t.length / 11),
                    r = t.length % 11,
                    a = s.indexOf(r);
                if (a < 0) throw "Invalid encoded length";
                for (var i = new Uint8Array(8 * n + a), o = 0; o < n; o++) i = e.decode_block(t.subarray(11 * o, 11 * o + 11), i, 8 * o);
                return r > 0 && (i = e.decode_block(t.subarray(11 * n, 11 * n + r), i, 8 * n)),
                    function (e) {
                        for (var t = [], n = 0; n < e.length; ++n) t.push(("0" + e[n].toString(16)).slice(-2));
                        return t.join("")
                    }(i)
            }, e
        }();
    e.exports = a
}, function (e, t, n) {
    ! function (e) {
        "use strict";
        var t = {};

        function n(e, r, s) {
            if (s !== t) return e instanceof n ? e : void 0 === e ? a : n.parse(e);
            for (e = e || []; e.length && !e[e.length - 1];) --e.length;
            this._d = e, this._s = e.length ? r || 1 : 0
        }
        n._construct = function (e, r) {
            return new n(e, r, t)
        };
        var r = 1e7;
        n.base = r, n.base_log10 = 7;
        var a = new n([], 0, t);
        n.ZERO = a;
        var s = new n([1], 1, t);
        n.ONE = s;
        var i = new n(s._d, -1, t);
        n.M_ONE = i, n._0 = a, n._1 = s, n.small = [a, s, new n([2], 1, t), new n([3], 1, t), new n([4], 1, t), new n([5], 1, t), new n([6], 1, t), new n([7], 1, t), new n([8], 1, t), new n([9], 1, t), new n([10], 1, t), new n([11], 1, t), new n([12], 1, t), new n([13], 1, t), new n([14], 1, t), new n([15], 1, t), new n([16], 1, t), new n([17], 1, t), new n([18], 1, t), new n([19], 1, t), new n([20], 1, t), new n([21], 1, t), new n([22], 1, t), new n([23], 1, t), new n([24], 1, t), new n([25], 1, t), new n([26], 1, t), new n([27], 1, t), new n([28], 1, t), new n([29], 1, t), new n([30], 1, t), new n([31], 1, t), new n([32], 1, t), new n([33], 1, t), new n([34], 1, t), new n([35], 1, t), new n([36], 1, t)], n.digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), n.prototype.toString = function (e) {
                if ((e = +e || 10) < 2 || e > 36) throw new Error("illegal radix " + e + ".");
                if (0 === this._s) return "0";
                if (10 === e) {
                    var t = this._s < 0 ? "-" : "";
                    t += this._d[this._d.length - 1].toString();
                    for (var r = this._d.length - 2; r >= 0; r--) {
                        for (var a = this._d[r].toString(); a.length < 7;) a = "0" + a;
                        t += a
                    }
                    return t
                }
                var s = n.digits;
                e = n.small[e];
                for (var i, o = this._s, u = this.abs(), d = []; 0 !== u._s;) {
                    var l = u.divRem(e);
                    u = l[0], i = l[1], d.push(s[i.valueOf()])
                }
                return (o < 0 ? "-" : "") + d.reverse().join("")
            }, n.radixRegex = [/^$/, /^$/, /^[01]*$/, /^[012]*$/, /^[0-3]*$/, /^[0-4]*$/, /^[0-5]*$/, /^[0-6]*$/, /^[0-7]*$/, /^[0-8]*$/, /^[0-9]*$/, /^[0-9aA]*$/, /^[0-9abAB]*$/, /^[0-9abcABC]*$/, /^[0-9a-dA-D]*$/, /^[0-9a-eA-E]*$/, /^[0-9a-fA-F]*$/, /^[0-9a-gA-G]*$/, /^[0-9a-hA-H]*$/, /^[0-9a-iA-I]*$/, /^[0-9a-jA-J]*$/, /^[0-9a-kA-K]*$/, /^[0-9a-lA-L]*$/, /^[0-9a-mA-M]*$/, /^[0-9a-nA-N]*$/, /^[0-9a-oA-O]*$/, /^[0-9a-pA-P]*$/, /^[0-9a-qA-Q]*$/, /^[0-9a-rA-R]*$/, /^[0-9a-sA-S]*$/, /^[0-9a-tA-T]*$/, /^[0-9a-uA-U]*$/, /^[0-9a-vA-V]*$/, /^[0-9a-wA-W]*$/, /^[0-9a-xA-X]*$/, /^[0-9a-yA-Y]*$/, /^[0-9a-zA-Z]*$/], n.parse = function (e, r) {
                var s;
                e = e.toString(), void 0 !== r && 10 != +r || (e = e.replace(/\s*[*xX]\s*10\s*(\^|\*\*)\s*/, "e").replace(/^([+\-])?(\d+)\.?(\d*)[eE]([+\-]?\d+)$/, function (e, t, n, r, a) {
                    var s = (a = +a) < 0,
                        i = n.length + a;
                    e = (s ? n : r).length, a = (a = Math.abs(a)) >= e ? a - e + s : 0;
                    var o = new Array(a + 1).join("0"),
                        u = n + r;
                    return (t || "") + (s ? u = o + u : u += o).substr(0, i += s ? o.length : 0) + (i < u.length ? "." + u.substr(i) : "")
                })), s = void 0 === r ? "0[xcb]" : 16 == r ? "0x" : 8 == r ? "0c" : 2 == r ? "0b" : "";
                var i = new RegExp("^([+\\-]?)(" + s + ")?([0-9a-z]*)(?:\\.\\d*)?$", "i").exec(e);
                if (i) {
                    var o = i[1] || "+",
                        u = i[2] || "",
                        d = i[3] || "";
                    if (void 0 === r) r = "0x" === u || "0X" === u ? 16 : "0c" === u || "0C" === u ? 8 : "0b" === u || "0B" === u ? 2 : 10;
                    else if (r < 2 || r > 36) throw new Error("Illegal radix " + r + ".");
                    if (r = +r, !n.radixRegex[r].test(d)) throw new Error("Bad digit for radix " + r);
                    if (0 === (d = d.replace(/^0+/, "").split("")).length) return a;
                    if (o = "-" === o ? -1 : 1, 10 == r) {
                        for (var l = []; d.length >= 7;) l.push(parseInt(d.splice(d.length - n.base_log10, n.base_log10).join(""), 10));
                        return l.push(parseInt(d.join(""), 10)), new n(l, o, t)
                    }
                    l = a;
                    r = n.small[r];
                    for (var _ = n.small, c = 0; c < d.length; c++) l = l.multiply(r).add(_[parseInt(d[c], 36)]);
                    return new n(l._d, o, t)
                }
                throw new Error("Invalid BigInteger format: " + e)
            }, n.prototype.add = function (e) {
                if (0 === this._s) return n(e);
                if (0 === (e = n(e))._s) return this;
                if (this._s !== e._s) return e = e.negate(), this.subtract(e);
                for (var a, s = this._d, i = e._d, o = s.length, u = i.length, d = new Array(Math.max(o, u) + 1), l = Math.min(o, u), _ = 0, c = 0; c < l; c++) a = s[c] + i[c] + _, d[c] = a % r, _ = a / r | 0;
                for (u > o && (s = i, o = u), c = l; _ && c < o; c++) a = s[c] + _, d[c] = a % r, _ = a / r | 0;
                for (_ && (d[c] = _); c < o; c++) d[c] = s[c];
                return new n(d, this._s, t)
            }, n.prototype.negate = function () {
                return new n(this._d, 0 | -this._s, t)
            }, n.prototype.abs = function () {
                return this._s < 0 ? this.negate() : this
            }, n.prototype.subtract = function (e) {
                if (0 === this._s) return n(e).negate();
                if (0 === (e = n(e))._s) return this;
                if (this._s !== e._s) return e = e.negate(), this.add(e);
                var s = this;
                this._s < 0 && (s = new n(e._d, 1, t), e = new n(this._d, 1, t));
                var i = s.compareAbs(e);
                if (0 === i) return a;
                if (i < 0) {
                    var o = e;
                    e = s, s = o
                }
                var u, d, l = s._d,
                    _ = e._d,
                    c = l.length,
                    m = _.length,
                    f = new Array(c),
                    h = 0;
                for (u = 0; u < m; u++)(d = l[u] - h - _[u]) < 0 ? (d += r, h = 1) : h = 0, f[u] = d;
                for (u = m; u < c; u++) {
                    if (!((d = l[u] - h) < 0)) {
                        f[u++] = d;
                        break
                    }
                    d += r, f[u] = d
                }
                for (; u < c; u++) f[u] = l[u];
                return new n(f, i, t)
            },
            function () {
                function e(e, a) {
                    for (var s = e._d, i = s.slice(), o = 0;;) {
                        var u = (s[o] || 0) + 1;
                        if (i[o] = u % r, u <= r - 1) break;
                        ++o
                    }
                    return new n(i, a, t)
                }

                function a(e, a) {
                    for (var s = e._d, i = s.slice(), o = 0;;) {
                        var u = (s[o] || 0) - 1;
                        if (!(u < 0)) {
                            i[o] = u;
                            break
                        }
                        i[o] = u + r, ++o
                    }
                    return new n(i, a, t)
                }
                n.prototype.next = function () {
                    switch (this._s) {
                        case 0:
                            return s;
                        case -1:
                            return a(this, -1);
                        default:
                            return e(this, 1)
                    }
                }, n.prototype.prev = function () {
                    switch (this._s) {
                        case 0:
                            return i;
                        case -1:
                            return e(this, -1);
                        default:
                            return a(this, 1)
                    }
                }
            }(), n.prototype.compareAbs = function (e) {
                if (this === e) return 0;
                if (!(e instanceof n)) {
                    if (!isFinite(e)) return isNaN(e) ? e : -1;
                    e = n(e)
                }
                if (0 === this._s) return 0 !== e._s ? -1 : 0;
                if (0 === e._s) return 1;
                var t = this._d.length,
                    r = e._d.length;
                if (t < r) return -1;
                if (t > r) return 1;
                for (var a = this._d, s = e._d, i = t - 1; i >= 0; i--)
                    if (a[i] !== s[i]) return a[i] < s[i] ? -1 : 1;
                return 0
            }, n.prototype.compare = function (e) {
                return this === e ? 0 : (e = n(e), 0 === this._s ? -e._s : this._s === e._s ? this.compareAbs(e) * this._s : this._s)
            }, n.prototype.isUnit = function () {
                return this === s || this === i || 1 === this._d.length && 1 === this._d[0]
            }, n.prototype.multiply = function (e) {
                if (0 === this._s) return a;
                if (0 === (e = n(e))._s) return a;
                if (this.isUnit()) return this._s < 0 ? e.negate() : e;
                if (e.isUnit()) return e._s < 0 ? this.negate() : this;
                if (this === e) return this.square();
                var s, i = this._d.length >= e._d.length,
                    o = (i ? this : e)._d,
                    u = (i ? e : this)._d,
                    d = o.length,
                    l = u.length,
                    _ = d + l,
                    c = new Array(_);
                for (s = 0; s < _; s++) c[s] = 0;
                for (s = 0; s < l; s++) {
                    for (var m, f = 0, h = u[s], p = d + s, y = s; y < p; y++) f = (m = c[y] + h * o[y - s] + f) / r | 0, c[y] = m % r | 0;
                    f && (f = (m = c[y] + f) / r | 0, c[y] = m % r)
                }
                return new n(c, this._s * e._s, t)
            }, n.prototype.multiplySingleDigit = function (e) {
                if (0 === e || 0 === this._s) return a;
                if (1 === e) return this;
                var s;
                if (1 === this._d.length) return new n((s = this._d[0] * e) >= r ? [s % r | 0, s / r | 0] : [s], 1, t);
                if (2 === e) return this.add(this);
                if (this.isUnit()) return new n([e], 1, t);
                for (var i = this._d, o = i.length, u = o + 1, d = new Array(u), l = 0; l < u; l++) d[l] = 0;
                for (var _ = 0, c = 0; c < o; c++) _ = (s = e * i[c] + _) / r | 0, d[c] = s % r | 0;
                return _ && (d[c] = _), new n(d, 1, t)
            }, n.prototype.square = function () {
                if (0 === this._s) return a;
                if (this.isUnit()) return s;
                var e, i, o, u, d = this._d,
                    l = d.length,
                    _ = new Array(l + l + 1);
                for (u = 0; u < l; u++) o = 2 * u, i = (e = d[u] * d[u]) / r | 0, _[o] = e % r, _[o + 1] = i;
                for (u = 0; u < l; u++) {
                    i = 0, o = 2 * u + 1;
                    for (var c = u + 1; c < l; c++, o++) i = (e = d[c] * d[u] * 2 + _[o] + i) / r | 0, _[o] = e % r;
                    var m = i + _[o = l + u];
                    i = m / r | 0, _[o] = m % r, _[o + 1] += i
                }
                return new n(_, 1, t)
            }, n.prototype.quotient = function (e) {
                return this.divRem(e)[0]
            }, n.prototype.divide = n.prototype.quotient, n.prototype.remainder = function (e) {
                return this.divRem(e)[1]
            }, n.prototype.divRem = function (e) {
                if (0 === (e = n(e))._s) throw new Error("Divide by zero");
                if (0 === this._s) return [a, a];
                if (1 === e._d.length) return this.divRemSmall(e._s * e._d[0]);
                switch (this.compareAbs(e)) {
                    case 0:
                        return [this._s === e._s ? s : i, a];
                    case -1:
                        return [a, this]
                }
                for (var o, u = this._s * e._s, d = e.abs(), l = this._d, _ = l.length, c = (e._d.length, []), m = new n([], 0, t); _;)
                    if (m._d.unshift(l[--_]), (m = new n(m._d, 1, t)).compareAbs(e) < 0) c.push(0);
                    else {
                        if (0 === m._s) o = 0;
                        else {
                            var f = m._d.length,
                                h = d._d.length,
                                p = m._d[f - 1] * r + m._d[f - 2],
                                y = d._d[h - 1] * r + d._d[h - 2];
                            m._d.length > d._d.length && (p = (p + 1) * r), o = Math.ceil(p / y)
                        }
                        do {
                            var M = d.multiplySingleDigit(o);
                            if (M.compareAbs(m) <= 0) break;
                            o--
                        } while (o);
                        if (c.push(o), o) {
                            var L = m.subtract(M);
                            m._d = L._d.slice()
                        }
                    } return [new n(c.reverse(), u, t), new n(m._d, this._s, t)]
            }, n.prototype.divRemSmall = function (e) {
                var s;
                if (0 === (e = +e)) throw new Error("Divide by zero");
                var i = e < 0 ? -1 : 1,
                    o = this._s * i;
                if ((e = Math.abs(e)) < 1 || e >= r) throw new Error("Argument out of range");
                if (0 === this._s) return [a, a];
                if (1 === e || -1 === e) return [1 === o ? this.abs() : new n(this._d, o, t), a];
                if (1 === this._d.length) {
                    var u = new n([this._d[0] / e | 0], 1, t);
                    return s = new n([this._d[0] % e | 0], 1, t), o < 0 && (u = u.negate()), this._s < 0 && (s = s.negate()), [u, s]
                }
                for (var d, l = this._d.slice(), _ = new Array(l.length), c = 0, m = 0, f = 0; l.length;) {
                    if ((c = c * r + l[l.length - 1]) < e) _[f++] = 0, l.pop(), m = r * m + c;
                    else m = c - e * (d = 0 === c ? 0 : c / e | 0), _[f++] = d, d ? (l.pop(), c = m) : l.pop()
                }
                return s = new n([m], 1, t), this._s < 0 && (s = s.negate()), [new n(_.reverse(), o, t), s]
            }, n.prototype.isEven = function () {
                var e = this._d;
                return 0 === this._s || 0 === e.length || e[0] % 2 == 0
            }, n.prototype.isOdd = function () {
                return !this.isEven()
            }, n.prototype.sign = function () {
                return this._s
            }, n.prototype.isPositive = function () {
                return this._s > 0
            }, n.prototype.isNegative = function () {
                return this._s < 0
            }, n.prototype.isZero = function () {
                return 0 === this._s
            }, n.prototype.exp10 = function (e) {
                if (0 === (e = +e)) return this;
                if (Math.abs(e) > Number(o)) throw new Error("exponent too large in BigInteger.exp10");
                if (0 === this._s) return a;
                if (e > 0) {
                    for (var r = new n(this._d.slice(), this._s, t); e >= 7; e -= 7) r._d.unshift(0);
                    return 0 == e ? r : (r._s = 1, r = r.multiplySingleDigit(Math.pow(10, e)), this._s < 0 ? r.negate() : r)
                }
                if (-e >= 7 * this._d.length) return a;
                r = new n(this._d.slice(), this._s, t);
                for (e = -e; e >= 7; e -= 7) r._d.shift();
                return 0 == e ? r : r.divRemSmall(Math.pow(10, e))[0]
            }, n.prototype.pow = function (e) {
                if (this.isUnit()) return this._s > 0 ? this : n(e).isOdd() ? this : this.negate();
                if (0 === (e = n(e))._s) return s;
                if (e._s < 0) {
                    if (0 === this._s) throw new Error("Divide by zero");
                    return a
                }
                if (0 === this._s) return a;
                if (e.isUnit()) return this;
                if (e.compareAbs(o) > 0) throw new Error("exponent too large in BigInteger.pow");
                for (var t = this, r = s, i = n.small[2]; e.isPositive();) {
                    if (e.isOdd() && (r = r.multiply(t), e.isUnit())) return r;
                    t = t.square(), e = e.quotient(i)
                }
                return r
            }, n.prototype.modPow = function (e, t) {
                for (var r = s, a = this; e.isPositive();) e.isOdd() && (r = r.multiply(a).remainder(t)), (e = e.quotient(n.small[2])).isPositive() && (a = a.square().remainder(t));
                return r
            }, n.prototype.log = function () {
                switch (this._s) {
                    case 0:
                        return -1 / 0;
                    case -1:
                        return NaN
                }
                var e = this._d.length;
                if (7 * e < 30) return Math.log(this.valueOf());
                var a = Math.ceil(30 / 7),
                    s = this._d.slice(e - a);
                return Math.log(new n(s, 1, t).valueOf()) + (e - a) * Math.log(r)
            }, n.prototype.valueOf = function () {
                return parseInt(this.toString(), 10)
            }, n.prototype.toJSValue = function () {
                return parseInt(this.toString(), 10)
            }, n.prototype.lowVal = function () {
                return this._d[0] || 0
            };
        var o = n(2147483647);
        n.MAX_EXP = o,
            function () {
                function e(e) {
                    return function (t) {
                        return e.call(n(t))
                    }
                }

                function t(e) {
                    return function (t, r) {
                        return e.call(n(t), n(r))
                    }
                }

                function r(e) {
                    return function (t, r, a) {
                        return e.call(n(t), n(r), n(a))
                    }
                }! function () {
                    var a, s, i = "toJSValue,isEven,isOdd,sign,isZero,isNegative,abs,isUnit,square,negate,isPositive,toString,next,prev,log".split(","),
                        o = "compare,remainder,divRem,subtract,add,quotient,divide,multiply,pow,compareAbs".split(","),
                        u = ["modPow"];
                    for (a = 0; a < i.length; a++) n[s = i[a]] = e(n.prototype[s]);
                    for (a = 0; a < o.length; a++) n[s = o[a]] = t(n.prototype[s]);
                    for (a = 0; a < u.length; a++) n[s = u[a]] = r(n.prototype[s]);
                    n.exp10 = function (e, t) {
                        return n(e).exp10(t)
                    }
                }()
            }(), e.JSBigInt = n
    }(t)
}, function (e, t, n) {
    var r = n(10),
        a = n(186)("13456789abcdefghijkmnopqrstuwxyz"),
        s = new RegExp("^(xrb|nano)_([13456789abcdefghijkmnopqrstuwxyz]{60})$");
    e.exports = {
        isValidAddress: function (e) {
            return !!s.test(e) && this.verifyChecksum(e)
        },
        verifyChecksum: function (e) {
            var t = a.decode(s.exec(e)[2]).slice(-37);
            return r.blake2b(r.toHex(t.slice(0, -5)), 5) === r.toHex(t.slice(-5).reverse())
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;

    function a(e, t) {
        return Array.isArray(e) ? function (e, t) {
            for (var n, r = "", s = "", i = Array.isArray(t), o = 0; o < e.length; o++)(n = a(e[o])) && (i && t[o] && (n = u(n)), r = r + s + n, s = " ");
            return r
        }(e, t) : e && "object" == typeof e ? function (e) {
            var t = "",
                n = "";
            for (var a in e) a && e[a] && r.call(e, a) && (t = t + n + a, n = " ");
            return t
        }(e) : e || ""
    }

    function s(e) {
        if (!e) return "";
        if ("object" == typeof e) {
            var t = "";
            for (var n in e) r.call(e, n) && (t = t + n + ":" + e[n] + ";");
            return t
        }
        return e + ""
    }

    function i(e, t, n, r) {
        if (!1 === t || null == t || !t && ("class" === e || "style" === e)) return "";
        if (!0 === t) return " " + (r ? e : e + '="' + e + '"');
        var a = typeof t;
        return "object" !== a && "function" !== a || "function" != typeof t.toJSON || (t = t.toJSON()), "string" == typeof t || (t = JSON.stringify(t), n || -1 === t.indexOf('"')) ? (n && (t = u(t)), " " + e + '="' + t + '"') : " " + e + "='" + t.replace(/'/g, "&#39;") + "'"
    }
    t.merge = function e(t, n) {
        if (1 === arguments.length) {
            for (var r = t[0], a = 1; a < t.length; a++) r = e(r, t[a]);
            return r
        }
        for (var i in n)
            if ("class" === i) {
                var o = t[i] || [];
                t[i] = (Array.isArray(o) ? o : [o]).concat(n[i] || [])
            } else if ("style" === i) {
            o = (o = s(t[i])) && ";" !== o[o.length - 1] ? o + ";" : o;
            var u = s(n[i]);
            u = u && ";" !== u[u.length - 1] ? u + ";" : u, t[i] = o + u
        } else t[i] = n[i];
        return t
    }, t.classes = a, t.style = s, t.attr = i, t.attrs = function (e, t) {
        var n = "";
        for (var o in e)
            if (r.call(e, o)) {
                var u = e[o];
                if ("class" === o) {
                    u = a(u), n = i(o, u, !1, t) + n;
                    continue
                }
                "style" === o && (u = s(u)), n += i(o, u, !1, t)
            } return n
    };
    var o = /["&<>]/;

    function u(e) {
        var t = "" + e,
            n = o.exec(t);
        if (!n) return e;
        var r, a, s, i = "";
        for (r = n.index, a = 0; r < t.length; r++) {
            switch (t.charCodeAt(r)) {
                case 34:
                    s = "&quot;";
                    break;
                case 38:
                    s = "&amp;";
                    break;
                case 60:
                    s = "&lt;";
                    break;
                case 62:
                    s = "&gt;";
                    break;
                default:
                    continue
            }
            a !== r && (i += t.substring(a, r)), a = r + 1, i += s
        }
        return a !== r ? i + t.substring(a, r) : i
    }
    t.escape = u, t.rethrow = function e(t, r, a, s) {
        if (!(t instanceof Error)) throw t;
        if (!("undefined" == typeof window && r || s)) throw t.message += " on line " + a, t;
        try {
            s = s || n(245).readFileSync(r, "utf8")
        } catch (n) {
            e(t, null, a)
        }
        var i = 3,
            o = s.split("\n"),
            u = Math.max(a - i, 0),
            d = Math.min(o.length, a + i);
        i = o.slice(u, d).map(function (e, t) {
            var n = t + u + 1;
            return (n == a ? "  > " : "    ") + n + "| " + e
        }).join("\n");
        t.path = r;
        t.message = (r || "Pug") + ":" + a + "\n" + i + "\n\n" + t.message;
        throw t
    }
}, function (e, t) {}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        return (0, a.default)(e), parseInt(e, t || 10)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        if ((0, a.default)(e), t) return "1" === e || "true" === e;
        return "0" !== e && "false" !== e && "" !== e
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        return (0, a.default)(e), e === t
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        return (0, r.default)(e), e.indexOf((0, a.default)(t)) >= 0
    };
    var r = s(n(1)),
        a = s(n(188));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t, n) {
        (0, a.default)(e), "[object RegExp]" !== Object.prototype.toString.call(t) && (t = new RegExp(t, n));
        return t.test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        if ((0, r.default)(e), (t = (0, a.default)(t, d)).require_display_name || t.allow_display_name) {
            var n = e.match(l);
            if (n) {
                var u, y = function (e, t) {
                    return function (e) {
                        if (Array.isArray(e)) return e
                    }(e) || function (e, t) {
                        var n = [],
                            r = !0,
                            a = !1,
                            s = void 0;
                        try {
                            for (var i, o = e[Symbol.iterator](); !(r = (i = o.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            a = !0, s = e
                        } finally {
                            try {
                                r || null == o.return || o.return()
                            } finally {
                                if (a) throw s
                            }
                        }
                        return n
                    }(e, t) || function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }(n, 3);
                if (u = y[1], e = y[2], u.endsWith(" ") && (u = u.substr(0, u.length - 1)), ! function (e) {
                        var t = e.match(/^"(.+)"$/i),
                            n = t ? t[1] : e;
                        if (!n.trim()) return !1;
                        if (/[\.";<>]/.test(n)) {
                            if (!t) return !1;
                            if (!(n.split('"').length === n.split('\\"').length)) return !1
                        }
                        return !0
                    }(u)) return !1
            } else if (t.require_display_name) return !1
        }
        if (!t.ignore_max_length && e.length > p) return !1;
        var M = e.split("@"),
            L = M.pop(),
            g = M.join("@"),
            Y = L.toLowerCase();
        if (t.domain_specific_validation && ("gmail.com" === Y || "googlemail.com" === Y)) {
            var v = (g = g.toLowerCase()).split("+")[0];
            if (!(0, s.default)(v.replace(".", ""), {
                    min: 6,
                    max: 30
                })) return !1;
            for (var k = v.split("."), w = 0; w < k.length; w++)
                if (!c.test(k[w])) return !1
        }
        if (!(0, s.default)(g, {
                max: 64
            }) || !(0, s.default)(L, {
                max: 254
            })) return !1;
        if (!(0, i.default)(L, {
                require_tld: t.require_tld
            })) {
            if (!t.allow_ip_domain) return !1;
            if (!(0, o.default)(L)) {
                if (!L.startsWith("[") || !L.endsWith("]")) return !1;
                var b = L.substr(1, L.length - 2);
                if (0 === b.length || !(0, o.default)(b)) return !1
            }
        }
        if ('"' === g[0]) return g = g.slice(1, g.length - 1), t.allow_utf8_local_part ? h.test(g) : m.test(g);
        for (var D = t.allow_utf8_local_part ? f : _, T = g.split("."), S = 0; S < T.length; S++)
            if (!D.test(T[S])) return !1;
        return !0
    };
    var r = u(n(1)),
        a = u(n(8)),
        s = u(n(189)),
        i = u(n(34)),
        o = u(n(21));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var d = {
            allow_display_name: !1,
            require_display_name: !1,
            allow_utf8_local_part: !0,
            require_tld: !0
        },
        l = /^([^\x00-\x1F\x7F-\x9F\cX]+)<(.+)>$/i,
        _ = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
        c = /^[a-z\d]+$/,
        m = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
        f = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
        h = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,
        p = 254;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        if ((0, r.default)(e), !e || e.length >= 2083 || /[\s<>]/.test(e)) return !1;
        if (0 === e.indexOf("mailto:")) return !1;
        var n, o, _, c, m, f, h, p;
        if (t = (0, i.default)(t, u), h = e.split("#"), e = h.shift(), h = e.split("?"), e = h.shift(), (h = e.split("://")).length > 1) {
            if (n = h.shift().toLowerCase(), t.require_valid_protocol && -1 === t.protocols.indexOf(n)) return !1
        } else {
            if (t.require_protocol) return !1;
            if ("//" === e.substr(0, 2)) {
                if (!t.allow_protocol_relative_urls) return !1;
                h[0] = e.substr(2)
            }
        }
        if ("" === (e = h.join("://"))) return !1;
        if (h = e.split("/"), "" === (e = h.shift()) && !t.require_host) return !0;
        if ((h = e.split("@")).length > 1) {
            if (t.disallow_auth) return !1;
            if ((o = h.shift()).indexOf(":") >= 0 && o.split(":").length > 2) return !1
        }
        c = h.join("@"), f = null, p = null;
        var y = c.match(d);
        y ? (_ = "", p = y[1], f = y[2] || null) : (h = c.split(":"), _ = h.shift(), h.length && (f = h.join(":")));
        if (null !== f && (m = parseInt(f, 10), !/^[0-9]+$/.test(f) || m <= 0 || m > 65535)) return !1;
        if (!((0, s.default)(_) || (0, a.default)(_, t) || p && (0, s.default)(p, 6))) return !1;
        if (_ = _ || p, t.host_whitelist && !l(_, t.host_whitelist)) return !1;
        if (t.host_blacklist && l(_, t.host_blacklist)) return !1;
        return !0
    };
    var r = o(n(1)),
        a = o(n(34)),
        s = o(n(21)),
        i = o(n(8));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = {
            protocols: ["http", "https", "ftp"],
            require_tld: !0,
            require_protocol: !1,
            require_host: !0,
            require_valid_protocol: !0,
            allow_underscores: !1,
            allow_trailing_dot: !1,
            allow_protocol_relative_urls: !1
        },
        d = /^\[([^\]]+)\](?::([0-9]+))?$/;

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            if (e === r || (a = r, "[object RegExp]" === Object.prototype.toString.call(a) && r.test(e))) return !0
        }
        var a;
        return !1
    }
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        if ((0, a.default)(e), t && t.no_colons) return i.test(e);
        return s.test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/,
        i = /^([0-9a-fA-F]){12}$/;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        (0, r.default)(e);
        var t = e.split("/");
        if (2 !== t.length) return !1;
        if (!i.test(t[1])) return !1;
        if (t[1].length > 1 && t[1].startsWith("0")) return !1;
        return (0, a.default)(t[0], 4) && t[1] <= 32 && t[1] >= 0
    };
    var r = s(n(1)),
        a = s(n(21));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = /^\d{1,2}$/;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), ["true", "false", "1", "0"].indexOf(e) >= 0
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en-US";
        if ((0, a.default)(e), t in s.alpha) return s.alpha[t].test(e);
        throw new Error("Invalid locale '".concat(t, "'"))
    }, t.locales = void 0;
    var r, a = (r = n(1)) && r.__esModule ? r : {
            default: r
        },
        s = n(22);
    var i = Object.keys(s.alpha);
    t.locales = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en-US";
        if ((0, a.default)(e), t in s.alphanumeric) return s.alphanumeric[t].test(e);
        throw new Error("Invalid locale '".concat(t, "'"))
    }, t.locales = void 0;
    var r, a = (r = n(1)) && r.__esModule ? r : {
            default: r
        },
        s = n(22);
    var i = Object.keys(s.alphanumeric);
    t.locales = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        if ((0, a.default)(e), t && t.no_symbols) return i.test(e);
        return s.test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^[+-]?([0-9]*[.])?[0-9]+$/,
        i = /^[0-9]+$/;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e, {
            min: 0,
            max: 65535
        })
    };
    var r, a = (r = n(190)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), e === e.toLowerCase()
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), e === e.toUpperCase()
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), s.test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^[\x00-\x7F]+$/;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), s.fullWidth.test(e) && i.halfWidth.test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
            default: r
        },
        s = n(191),
        i = n(192);
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), s.test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /[^\x00-\x7F]/;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), s.test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        (0, a.default)(e), t = t || {};
        var n = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(t.locale ? s.decimal[t.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
        if ("" === e || "." === e || "-" === e || "+" === e) return !1;
        var r = parseFloat(e.replace(",", "."));
        return n.test(e) && (!t.hasOwnProperty("min") || r >= t.min) && (!t.hasOwnProperty("max") || r <= t.max) && (!t.hasOwnProperty("lt") || r < t.lt) && (!t.hasOwnProperty("gt") || r > t.gt)
    }, t.locales = void 0;
    var r, a = (r = n(1)) && r.__esModule ? r : {
            default: r
        },
        s = n(22);
    var i = Object.keys(s.decimal);
    t.locales = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        if ((0, a.default)(e), (t = (0, r.default)(t, u)).locale in i.decimal) return !(0, s.default)(d, e.replace(/ /g, "")) && function (e) {
            return new RegExp("^[-+]?([0-9]+)?(\\".concat(i.decimal[e.locale], "[0-9]{").concat(e.decimal_digits, "})").concat(e.force_decimal ? "" : "?", "$"))
        }(t).test(e);
        throw new Error("Invalid locale '".concat(t.locale, "'"))
    };
    var r = o(n(8)),
        a = o(n(1)),
        s = o(n(35)),
        i = n(22);

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = {
            force_decimal: !1,
            decimal_digits: "1,",
            locale: "en-US"
        },
        d = ["", "-", "+"];
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        return (0, r.default)(e), (0, a.default)(e) % parseInt(t, 10) == 0
    };
    var r = s(n(1)),
        a = s(n(187));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), s.test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), s.test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), s.test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^[a-f0-9]{32}$/;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        return (0, a.default)(e), new RegExp("^[a-f0-9]{".concat(s[t], "}$")).test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = {
        md5: 32,
        md4: 32,
        sha1: 40,
        sha256: 64,
        sha384: 96,
        sha512: 128,
        ripemd128: 32,
        ripemd160: 40,
        tiger128: 32,
        tiger160: 40,
        tiger192: 48,
        crc32: 8,
        crc32b: 8
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), s.test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        (0, a.default)(e);
        try {
            var t = JSON.parse(e);
            return !!t && "object" === s(t)
        } catch (e) {}
        return !1
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };

    function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        return (0, r.default)(e), 0 === ((t = (0, a.default)(t, i)).ignore_whitespace ? e.trim().length : e.length)
    };
    var r = s(n(1)),
        a = s(n(8));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = {
        ignore_whitespace: !1
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        var n, r;
        (0, a.default)(e), "object" === s(t) ? (n = t.min || 0, r = t.max) : (n = arguments[1], r = arguments[2]);
        var i = e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [],
            o = e.length - i.length;
        return o >= n && (void 0 === r || o <= r)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };

    function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
        (0, a.default)(e);
        var n = s[t];
        return n && n.test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = {
        3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, r.default)(e), (0, a.default)(e) && 24 === e.length
    };
    var r = s(n(1)),
        a = s(n(193));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : String(new Date);
        (0, r.default)(e);
        var n = (0, a.default)(t),
            s = (0, a.default)(e);
        return !!(s && n && s > n)
    };
    var r = s(n(1)),
        a = s(n(33));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : String(new Date);
        (0, r.default)(e);
        var n = (0, a.default)(t),
            s = (0, a.default)(e);
        return !!(s && n && s < n)
    };
    var r = s(n(1)),a = s(n(33));

    function s(e) {return e && e.__esModule ? e : {default: e}}
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        var n;
        if ((0, r.default)(e), "[object Array]" === Object.prototype.toString.call(t)) {
            var s = [];
            for (n in t)({}).hasOwnProperty.call(t, n) && (s[n] = (0, a.default)(t[n]));
            return s.indexOf(e) >= 0
        }
        if ("object" === i(t)) return t.hasOwnProperty(e);
        if (t && "function" == typeof t.indexOf) return t.indexOf(e) >= 0;
        return !1
    };
    var r = s(n(1)),a = s(n(188));

    function s(e) {return e && e.__esModule ? e : {default: e}}

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        (0, a.default)(e);
        var t = e.replace(/[- ]+/g, "");
        if (!s.test(t)) return !1;
        for (var n, r, i, o = 0, u = t.length - 1; u >= 0; u--) n = t.substring(u, u + 1), r = parseInt(n, 10), o += i && (r *= 2) >= 10 ? r % 10 + 1 : r, i = !i;
        return !(o % 10 != 0 || !t)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {default: r};
    var s = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        if ((0, a.default)(e), t in s) return s[t](e);
        if ("any" === t) {
            for (var n in s) {
                if (s.hasOwnProperty(n)) if ((0, s[n])(e)) return !0
            }
            return !1
        }
        throw new Error("Invalid locale '".concat(t, "'"))
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {default: r};
    var s = {
        ES: function (e) {
            (0, a.default)(e);
            var t = {X: 0,Y: 1,Z: 2},
                n = e.trim().toUpperCase();
            if (!/^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(n)) return !1;
            var r = n.slice(0, -1).replace(/[X,Y,Z]/g, function (e) {
                return t[e]
            });
            return n.endsWith(["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"][r % 23])
        },
        "he-IL": function (e) {
            var t = e.trim();
            if (!/^\d{9}$/.test(t)) return !1;
            for (var n, r = t, a = 0, s = 0; s < r.length; s++) a += (n = Number(r[s]) * (s % 2 + 1)) > 9 ? n - 9 : n;
            return a % 10 == 0
        },
        "zh-TW": function (e) {
            var t = {A: 10,B: 11,C: 12,D: 13,E: 14,F: 15,G: 16,H: 17,I: 34,J: 18,K: 19,L: 20,M: 21,N: 22,O: 35,P: 23,Q: 24,R: 25,S: 26,T: 27,U: 28,V: 29,W: 32,X: 30,Y: 31,Z: 33},
                n = e.trim().toUpperCase();
            return !!/^[A-Z][0-9]{9}$/.test(n) && Array.from(n).reduce(function (e, n, r) {
                if (0 === r) {
                    var a = t[n];
                    return a % 10 * 9 + Math.floor(a / 10)
                }
                return 9 === r ? (10 - e % 10 - Number(n)) % 10 == 0 : e + Number(n) * (9 - r)
            }, 0)
        }
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        if ((0, a.default)(e), !s.test(e)) return !1;
        for (var t, n, r = e.replace(/[A-Z]/g, function (e) {
                return parseInt(e, 36)
            }), i = 0, o = !0, u = r.length - 2; u >= 0; u--) t = r.substring(u, u + 1), n = parseInt(t, 10), i += o && (n *= 2) >= 10 ? n + 1 : n, o = !o;
        return parseInt(e.substr(e.length - 1), 10) === (1e4 - i) % 10
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function e(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        (0, a.default)(t);
        n = String(n);
        if (!n) return e(t, 10) || e(t, 13);
        var r = t.replace(/[\s-]+/g, "");
        var u = 0;
        var d;
        if ("10" === n) {
            if (!s.test(r)) return !1;
            for (d = 0; d < 9; d++) u += (d + 1) * r.charAt(d);
            if ("X" === r.charAt(9) ? u += 100 : u += 10 * r.charAt(9), u % 11 == 0) return !!r
        } else if ("13" === n) {
            if (!i.test(r)) return !1;
            for (d = 0; d < 12; d++) u += o[d % 2] * r.charAt(d);
            if (r.charAt(12) - (10 - u % 10) % 10 == 0) return !!r
        }
        return !1
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^(?:[0-9]{9}X|[0-9]{10})$/,
        i = /^(?:[0-9]{13})$/,
        o = [1, 3];
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (0, a.default)(e);
        var n = s;
        if (n = t.require_hyphen ? n.replace("?", "") : n, !(n = t.case_sensitive ? new RegExp(n) : new RegExp(n, "i")).test(e)) return !1;
        for (var r = e.replace("-", "").toUpperCase(), i = 0, o = 0; o < r.length; o++) {
            var u = r[o];
            i += ("X" === u ? 10 : +u) * (8 - o)
        }
        return i % 11 == 0
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = "^\\d{4}-?\\d{3}[\\dX]$";
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t, n) {
        if ((0, a.default)(e), n && n.strictMode && !e.startsWith("+")) return !1;
        if (Array.isArray(t)) return t.some(function (t) {
            if (s.hasOwnProperty(t) && s[t].test(e)) return !0;
            return !1
        });
        if (t in s) return s[t].test(e);
        if (!t || "any" === t) {
            for (var r in s) {
                if (s.hasOwnProperty(r))
                    if (s[r].test(e)) return !0
            }
            return !1
        }
        throw new Error("Invalid locale '".concat(t, "'"))
    }, t.locales = void 0;
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = {
        "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
        "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
        "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
        "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
        "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
        "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
        "ar-KW": /^(\+?965)[569]\d{7}$/,
        "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
        "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
        "ar-TN": /^(\+?216)?[2459]\d{7}$/,
        "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
        "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
        "bn-BD": /^(\+?880|0)1[1356789][0-9]{8}$/,
        "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
        "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
        "de-DE": /^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
        "el-GR": /^(\+?30|0)?(69\d{8})$/,
        "en-AU": /^(\+?61|0)4\d{8}$/,
        "en-GB": /^(\+?44|0)7\d{9}$/,
        "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,
        "en-HK": /^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,
        "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
        "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
        "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
        "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
        "en-MU": /^(\+?230|0)?\d{8}$/,
        "en-NG": /^(\+?234|0)?[789]\d{9}$/,
        "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
        "en-PK": /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
        "en-RW": /^(\+?250|0)?[7]\d{8}$/,
        "en-SG": /^(\+65)?[89]\d{7}$/,
        "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
        "en-UG": /^(\+?256|0)?[7]\d{8}$/,
        "en-US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
        "en-ZA": /^(\+?27|0)\d{9}$/,
        "en-ZM": /^(\+?26)?09[567]\d{7}$/,
        "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
        "es-ES": /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
        "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
        "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
        "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
        "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
        "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
        "fi-FI": /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
        "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
        "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
        "fr-FR": /^(\+?33|0)[67]\d{8}$/,
        "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
        "hu-HU": /^(\+?36)(20|30|70)\d{7}$/,
        "id-ID": /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
        "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
        "ja-JP": /^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,
        "kk-KZ": /^(\+?7|8)?7\d{9}$/,
        "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
        "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
        "lt-LT": /^(\+370|8)\d{8}$/,
        "ms-MY": /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
        "nb-NO": /^(\+?47)?[49]\d{7}$/,
        "nl-BE": /^(\+?32|0)4?\d{8}$/,
        "nl-NL": /^(\+?31|0)6?\d{8}$/,
        "nn-NO": /^(\+?47)?[49]\d{7}$/,
        "pl-PL": /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
        "pt-BR": /(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,
        "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
        "ro-RO": /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
        "ru-RU": /^(\+?7|8)?9\d{9}$/,
        "sl-SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
        "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
        "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
        "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
        "th-TH": /^(\+66|66|0)\d{9}$/,
        "tr-TR": /^(\+?90|0)?5\d{9}$/,
        "uk-UA": /^(\+?38|8)?0\d{9}$/,
        "vi-VN": /^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/,
        "zh-CN": /^((\+|00)86)?1([358][0-9]|4[579]|6[67]|7[0135678]|9[189])[0-9]{8}$/,
        "zh-TW": /^(\+?886\-?|0)?9\d{8}$/
    };
    s["en-CA"] = s["en-US"], s["fr-BE"] = s["nl-BE"], s["zh-HK"] = s["en-HK"];
    var i = Object.keys(s);
    t.locales = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        return (0, a.default)(e),
            function (e) {
                var t = "\\d{".concat(e.digits_after_decimal[0], "}");
                e.digits_after_decimal.forEach(function (e, n) {
                    0 !== n && (t = "".concat(t, "|\\d{").concat(e, "}"))
                });
                var n = "(\\".concat(e.symbol.replace(/\./g, "\\."), ")").concat(e.require_symbol ? "" : "?"),
                    r = "[1-9]\\d{0,2}(\\".concat(e.thousands_separator, "\\d{3})*"),
                    a = "(".concat(["0", "[1-9]\\d*", r].join("|"), ")?"),
                    s = "(\\".concat(e.decimal_separator, "(").concat(t, "))").concat(e.require_decimal ? "" : "?"),
                    i = a + (e.allow_decimal || e.require_decimal ? s : "");
                e.allow_negatives && !e.parens_for_negatives && (e.negative_sign_after_digits ? i += "-?" : e.negative_sign_before_digits && (i = "-?" + i));
                e.allow_negative_sign_placeholder ? i = "( (?!\\-))?".concat(i) : e.allow_space_after_symbol ? i = " ?".concat(i) : e.allow_space_after_digits && (i += "( (?!$))?");
                e.symbol_after_digits ? i += n : i = n + i;
                e.allow_negatives && (e.parens_for_negatives ? i = "(\\(".concat(i, "\\)|").concat(i, ")") : e.negative_sign_before_digits || e.negative_sign_after_digits || (i = "-?" + i));
                return new RegExp("^(?!-? )(?=.*\\d)".concat(i, "$"))
            }(t = (0, r.default)(t, i)).test(e)
    };
    var r = s(n(8)),
        a = s(n(1));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = {
        symbol: "$",
        require_symbol: !1,
        allow_space_after_symbol: !1,
        symbol_after_digits: !1,
        allow_negatives: !0,
        parens_for_negatives: !1,
        negative_sign_before_digits: !1,
        negative_sign_after_digits: !1,
        allow_negative_sign_placeholder: !1,
        thousands_separator: ",",
        decimal_separator: ".",
        allow_decimal: !0,
        require_decimal: !1,
        digits_after_decimal: [2],
        allow_space_after_digits: !1
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        (0, a.default)(e);
        var n = s.test(e);
        return t && n && t.strict ? i(e) : n
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
        i = function (e) {
            var t = e.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
            if (t) {
                var n = Number(t[1]),
                    r = Number(t[2]);
                return n % 4 == 0 && n % 100 != 0 || n % 400 == 0 ? r <= 366 : r <= 365
            }
            var a = e.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number),
                s = a[1],
                i = a[2],
                o = a[3],
                u = i ? "0".concat(i).slice(-2) : i,
                d = o ? "0".concat(o).slice(-2) : o,
                l = new Date("".concat(s, "-").concat(u || "01", "-").concat(d || "01"));
            return !i || !o || l.getUTCFullYear() === s && l.getUTCMonth() + 1 === i && l.getUTCDate() === o
        };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), c.test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /([01][0-9]|2[0-3])/,
        i = /[0-5][0-9]/,
        o = new RegExp("[-+]".concat(s.source, ":").concat(i.source)),
        u = new RegExp("([zZ]|".concat(o.source, ")")),
        d = new RegExp("".concat(s.source, ":").concat(i.source, ":").concat(/([0-5][0-9]|60)/.source).concat(/(\.[0-9]+)?/.source)),
        l = new RegExp("".concat(/[0-9]{4}/.source, "-").concat(/(0[1-9]|1[0-2])/.source, "-").concat(/([12]\d|0[1-9]|3[01])/.source)),
        _ = new RegExp("".concat(d.source).concat(u.source)),
        c = new RegExp("".concat(l.source, "[ tT]").concat(_.source));
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, r.default)(e), (0, a.default)(i, e.toUpperCase())
    };
    var r = s(n(1)),
        a = s(n(35));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"];
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, r.default)(e), (0, a.default)(i, e.toUpperCase())
    };
    var r = s(n(1)),
        a = s(n(35));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = ["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COG", "COD", "COK", "CRI", "CIV", "HRV", "CUB", "CUW", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE"];
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        (0, a.default)(e);
        var t = e.length;
        if (t > 0 && t % 8 == 0 && s.test(e)) return !0;
        return !1
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^[A-Z2-7]+=*$/;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        (0, a.default)(e);
        var t = e.length;
        if (!t || t % 4 != 0 || s.test(e)) return !1;
        var n = e.indexOf("=");
        return -1 === n || n === t - 1 || n === t - 2 && "=" === e[t - 1]
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /[^A-Z0-9+\/=]/i;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        (0, a.default)(e);
        var t = e.split(",");
        if (t.length < 2) return !1;
        var n = t.shift().trim().split(";"),
            r = n.shift();
        if ("data:" !== r.substr(0, 5)) return !1;
        var u = r.substr(5);
        if ("" !== u && !s.test(u)) return !1;
        for (var d = 0; d < n.length; d++)
            if (d === n.length - 1 && "base64" === n[d].toLowerCase());
            else if (!i.test(n[d])) return !1;
        for (var l = 0; l < t.length; l++)
            if (!o.test(t[l])) return !1;
        return !0
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^[a-z]+\/[a-z0-9\-\+]+$/i,
        i = /^[a-z\-]+=[a-z0-9\-]+$/i,
        o = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), s.test(e.trim())
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), s.test(e) || i.test(e) || o.test(e)
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i,
        i = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i,
        o = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        if ((0, a.default)(e), !e.includes(",")) return !1;
        var t = e.split(",");
        return s.test(t[0]) && i.test(t[1])
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/,
        i = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        if ((0, a.default)(e), t in u) return u[t].test(e);
        if ("any" === t) {
            for (var n in u) {
                if (u.hasOwnProperty(n))
                    if (u[n].test(e)) return !0
            }
            return !1
        }
        throw new Error("Invalid locale '".concat(t, "'"))
    }, t.locales = void 0;
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    var s = /^\d{4}$/,
        i = /^\d{5}$/,
        o = /^\d{6}$/,
        u = {
            AD: /^AD\d{3}$/,
            AT: s,
            AU: s,
            BE: s,
            BG: s,
            BR: /^\d{5}-\d{3}$/,
            CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
            CH: s,
            CZ: /^\d{3}\s?\d{2}$/,
            DE: i,
            DK: s,
            DZ: i,
            EE: i,
            ES: i,
            FI: i,
            FR: /^\d{2}\s?\d{3}$/,
            GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
            GR: /^\d{3}\s?\d{2}$/,
            HR: /^([1-5]\d{4}$)/,
            HU: s,
            ID: i,
            IL: i,
            IN: o,
            IS: /^\d{3}$/,
            IT: i,
            JP: /^\d{3}\-\d{4}$/,
            KE: i,
            LI: /^(948[5-9]|949[0-7])$/,
            LT: /^LT\-\d{5}$/,
            LU: s,
            LV: /^LV\-\d{4}$/,
            MX: i,
            MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
            NL: /^\d{4}\s?[a-z]{2}$/i,
            NO: s,
            NZ: s,
            PL: /^\d{2}\-\d{3}$/,
            PR: /^00[679]\d{2}([ -]\d{4})?$/,
            PT: /^\d{4}\-\d{3}?$/,
            RO: o,
            RU: o,
            SA: i,
            SE: /^\d{3}\s?\d{2}$/,
            SI: s,
            SK: /^\d{3}\s?\d{2}$/,
            TN: s,
            TW: /^\d{3}(\d{2})?$/,
            UA: i,
            US: /^\d{5}(-\d{4})?$/,
            ZA: s,
            ZM: i
        },
        d = Object.keys(u);
    t.locales = d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        return (0, r.default)((0, a.default)(e, t), t)
    };
    var r = s(n(195)),
        a = s(n(194));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;")
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return (0, a.default)(e), e.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`")
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        (0, r.default)(e);
        var n = t ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
        return (0, a.default)(e, n)
    };
    var r = s(n(1)),
        a = s(n(196));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        return (0, a.default)(e), e.replace(new RegExp("[^".concat(t, "]+"), "g"), "")
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        (0, a.default)(e);
        for (var n = e.length - 1; n >= 0; n--)
            if (-1 === t.indexOf(e[n])) return !1;
        return !0
    };
    var r, a = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default, e.exports.default = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        t = (0, a.default)(t, s);
        var n = e.split("@"),
            r = n.pop(),
            _ = [n.join("@"), r];
        if (_[1] = _[1].toLowerCase(), "gmail.com" === _[1] || "googlemail.com" === _[1]) {
            if (t.gmail_remove_subaddress && (_[0] = _[0].split("+")[0]), t.gmail_remove_dots && (_[0] = _[0].replace(/\.+/g, l)), !_[0].length) return !1;
            (t.all_lowercase || t.gmail_lowercase) && (_[0] = _[0].toLowerCase()), _[1] = t.gmail_convert_googlemaildotcom ? "gmail.com" : _[1]
        } else if (i.indexOf(_[1]) >= 0) {
            if (t.icloud_remove_subaddress && (_[0] = _[0].split("+")[0]), !_[0].length) return !1;
            (t.all_lowercase || t.icloud_lowercase) && (_[0] = _[0].toLowerCase())
        } else if (o.indexOf(_[1]) >= 0) {
            if (t.outlookdotcom_remove_subaddress && (_[0] = _[0].split("+")[0]), !_[0].length) return !1;
            (t.all_lowercase || t.outlookdotcom_lowercase) && (_[0] = _[0].toLowerCase())
        } else if (u.indexOf(_[1]) >= 0) {
            if (t.yahoo_remove_subaddress) {
                var c = _[0].split("-");
                _[0] = c.length > 1 ? c.slice(0, -1).join("-") : c[0]
            }
            if (!_[0].length) return !1;
            (t.all_lowercase || t.yahoo_lowercase) && (_[0] = _[0].toLowerCase())
        } else d.indexOf(_[1]) >= 0 ? ((t.all_lowercase || t.yandex_lowercase) && (_[0] = _[0].toLowerCase()), _[1] = "yandex.ru") : t.all_lowercase && (_[0] = _[0].toLowerCase());
        return _.join("@")
    };
    var r, a = (r = n(8)) && r.__esModule ? r : {
        default: r
    };
    var s = {
            all_lowercase: !0,
            gmail_lowercase: !0,
            gmail_remove_dots: !0,
            gmail_remove_subaddress: !0,
            gmail_convert_googlemaildotcom: !0,
            outlookdotcom_lowercase: !0,
            outlookdotcom_remove_subaddress: !0,
            yahoo_lowercase: !0,
            yahoo_remove_subaddress: !0,
            yandex_lowercase: !0,
            icloud_lowercase: !0,
            icloud_remove_subaddress: !0
        },
        i = ["icloud.com", "me.com"],
        o = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"],
        u = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"],
        d = ["yandex.ru", "yandex.ua", "yandex.kz", "yandex.com", "yandex.by", "ya.ru"];

    function l(e) {
        return e.length > 1 ? e : ""
    }
    e.exports = t.default, e.exports.default = t.default
}, , , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(2),a = n.n(r),s = n(3),i = n.n(s),o = n(5),u = n.n(o),
        d = function (e) {return e.charAt(0).toUpperCase() + e.slice(1)};

    function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        var e2 = arguments.length > 1 ? arguments[1] || '' : '';
        var re = d(e).split("_").join(" ");
        if (e2 != '') re = [re, ', ', e2].join(' ');
        return re.replace('adress', 'address')
    }

    var _ = n(197),
        c = n.n(_),
        m = function () {
            var e = i()(a.a.mark(function e(t) {
                return a.a.wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:return e.prev = 0, e.next = 3, c.a.toDataURL(t);
                        case 3:return e.abrupt("return", e.sent);
                        case 6:throw e.prev = 6, e.t0 = e.catch(0), e.t0;
                        case 9:
                        case "end":return e.stop()
                    }
                }, e, null, [
                    [0, 6]
                ])
            }));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(),
        f = n(0),
        h = n.n(f);

    function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = document.querySelector(".send-info-status .text-info");
        if (n) {
            var r = document.createElement("span");
            r.classList.add("payment-title"), r.innerHTML = e;
            var a = document.createElement("div");
            a.classList.add("send-address"), a.innerHTML = t, n.append.apply(n, [r, a])
        }
    }

    function y() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = document.querySelector(".get-info-status .text-info");
        if (n) {
            var r = document.createElement("span");
            r.classList.add("payment-title"), r.innerHTML = e;
            var a = document.createElement("div");
            a.classList.add("get-deatils"), a.innerHTML = t, n.append.apply(n, [r, a])
        }
    }

    function M(e) {
        var t = document.querySelector(".stepper-container"),
            n = function (e) {
                return t ? e : function () {}
            };
        return {
            renderNotifyAddress: n(function () {
                var t = document.querySelectorAll(".recipientCurrency");
                u()(t).forEach(function (t) {
                    t.innerHTML = e.to.ticker.toUpperCase()
                })
            }),
            renderRefundCurrency: n(function () {
                document.querySelector(".refundCurrency").innerHTML = e.from.ticker.toUpperCase()
            }),
            renderAmountError: n(function (e) {
                var t = document.querySelector(".exchange-input.amount"),
                    n = document.querySelector(".amount > .title-error");
                if (t) {
                    var r = document.querySelector(".amount > .exchange-input-title");
                    e ? (n || (n = document.createElement("div")).classList.add("title-error"), n.textContent = e, r.style.display = "none", t.append(n)) : (n && t.removeChild(n), r.style.display = "")
                }
            }),
            renderNotifyError: n(function (e, e2) {
                document.querySelector(".step-one-notify-error").innerHTML = l(e,e2)
            }),
            renderAddressError: n(function (e) {
                document.querySelector(".recipient-address-error").innerHTML = l(e)
            }),
            renderTwoStep: n(function () {
                var t = document.querySelector(".send-details > .send-amount"),
                    n = document.querySelector(".send-details > .send-currency"),
                    r = document.querySelector(".payment-exchange-rate"),
                    a = document.querySelector(".get-details > .get-amount"),
                    s = document.querySelector(".get-details > .get-currency"),
                    i = document.querySelector(".payment-exchange-address"),
                    o = document.querySelector(".arrival-time > .time");
                t.innerHTML = e.amount, n.innerHTML = e.from.ticker;
                var u = e.conditions ? (e.conditions.estimatedAmount / e.amount).toFixed(6) : "";
                r.innerHTML = "".concat(e.from.ticker.toUpperCase(), " ≈ ").concat(u, " ").concat(e.to.ticker.toUpperCase()), a.innerHTML = " ".concat(e.conditions.estimatedAmount, " "), s.innerHTML = e.to.ticker, i.innerHTML = e.recipientAddress, o.innerHTML = e.conditions.transactionSpeedForecast
            }),
            renderThreeStep: n(function () {
                var e = i()(a.a.mark(function e(t) {
                    var n, r, s, i, o, u, d, l, _, c, f, M, L, g, Y, v, k, w, b, D, T, S, x, H, A, j, E, P, O, F, R, C, pxi, pxin;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return pxi = t.payoutExtraId, pxin = t.payoutExtraIdName, n = t.amountSend, r = t.amountReceive, s = t.fromCurrency, i = t.payinAddress, o = t.payoutAddress, u = t.toCurrency, d = t.expectedReceiveAmount, l = t.expectedSendAmount, _ = t.payinExtraId, c = t.payinExtraIdName, f = t.payinHash, M = t.payoutHash, L = t.validUntil, g = document.querySelector(".qr-code-image > img"), e.prev = 2, e.next = 5, m(i);
                            case 5:
                                Y = e.sent, g.setAttribute("src", Y), e.next = 12;
                                break;
                            case 9:
                                e.prev = 9, e.t0 = e.catch(2), g.style.display = "none";
                            case 12:
                                if (
                                    v = document.querySelector(".step-three .send-amount"),
                                    k = document.querySelector(".step-three .send-currency"),
                                    w = document.querySelector(".step-three .send-address"),
                                    b = document.querySelector(".step-three .get-rate"),
                                    D = document.querySelector(".step-three .get-currency"),
                                    T = document.querySelector(".step-three .get-address"),
                                    v.innerHTML = n || l || "",
                                    k.innerHTML = s,
                                    w.innerHTML = i,
                                    T.innerHTML = o,
                                    D.innerHTML = u,
                                    b.innerHTML = r || d || "",
                                    _ && p(c, _),
                                    f && p("input hash", f), M && y("payout hash", M), !L
                                ) {
                                    if (pxi != '') {
                                        var pext = document.querySelector(".step-three .payout-extra-id-title")
                                        var pex = document.querySelector(".step-three .payout-extra-id")
                                        pext.innerHTML = pxin || ""
                                        pex.innerHTML = pxi || ""
                                    }
                                    e.next = 49;
                                    break
                                }
                                if (S = document.querySelector(".time-info"), x = document.querySelector(".time-info > .timer"), H = document.querySelector(".time-info .send-info"), A = document.querySelector(".time-info  .timer-message"), j = function () {
                                        x.innerHTML = "00:00", H.innerHTML = "Please try to perform the exchange again.", A.innerHTML = "Your time is up!"
                                    }, E = Number(new Date(L)), P = h.a.now(), !((O = E - P) < 0)) {
                                    e.next = 40;
                                    break
                                }
                                return j(), S.style.display = "flex", e.abrupt("return");
                            case 40:
                                F = h.a.duration(O, "milliseconds"), 1e3, F = h.a.duration(F.asMilliseconds() - 1e3, "milliseconds"), R = h()(F.asMilliseconds()).format("mm:ss"), x.innerHTML = R, H.innerHTML = "".concat(n || l || "", " ").concat(s.toUpperCase()), A.innerHTML = "Time left to send:", C = setInterval(function () {
                                    if (F.asMilliseconds() - 1e3 < 0) return clearInterval(C), void j();
                                    F = h.a.duration(F.asMilliseconds() - 1e3, "milliseconds");
                                    var e = h()(F.asMilliseconds()).format("mm:ss");
                                    x.innerHTML = e
                                }, 1e3), S.style.display = "flex";
                            case 49:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [2, 9]
                    ])
                }));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }())
        }
    }
    var L = {
            waiting: "waiting",
            confirming: "confirming",
            exchanging: "exchanging",
            sending: "sending",
            finished: "finished",
            failed: "failed",
            refunded: "refunded",
            expired: "expired"
        },
        g = ["AUR", "BKX", "BVC", "BIO", "BTC", "BCH", "BTG", "BTCP", "BTCZ", "CLO", "DASH", "DCR", "DGB", "DOGE", "ETH", "ETC", "ETZ", "FRC", "GRLC", "HUSH", "KMD", "LTC", "MEC", "XMR", "NMC", "NANO", "NEO", "GAS", "PPC", "XPM", "PTS", "QTUM", "XRB", "XRP", "SNG", "VTC", "VOT", "ZEC", "ZCL", "ZEN"],
        Y = n(198),
        v = n.n(Y);

    function k(e, t) {
        return w.apply(this, arguments)
    }

    function w() {
        return (w = i()(a.a.mark(function e(t, n) {
            var r, s, o, u, d, l, _, c, m, f, h, p, y, Y, k, w, b, D, T, S, x, H, A, j, E, P, O, F, R, C, W, I, N, U;
            return a.a.wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (r = /^[A-Za-z0-9\.]+$/, o = !0, !document.querySelector(".stepper-container")) {
                            e.next = 37;
                            break
                        }
                        return u = function (e) {
                            var t = e.target.value.trim();
                            if (!r.test(t)) return e.preventDefault(), e.target.value = t.slice(0, -1), !1
                        }, d = function (e) {
                            A.classList.remove("invalid"),
                            A.classList.remove("valid"),
                            H.renderAddressError(""),
                            n.recipientAddress = String(e.target.value).trim(),
                            o = !0
                        }, l = function () {
                            var e = A.value.trim();
                            if (n.to && n.to.ticker) {
                                var t = n.to.ticker.toUpperCase();
                                if (!g.includes(t)) return;
                                // v.a.validate(e, n.to.ticker.toUpperCase()) && e ? (A.classList.remove("invalid"), o = !0, H.renderAddressError(""), A.classList.add("valid")) : (A.classList.add("invalid"),
                                // H.renderAddressError("not_a_valid_adress"), A.classList.remove("valid"), o = !1)
                            }
                        }, _ = function (e) {
                            j.classList.remove("invalid"), n.refundAddress = String(e.target.value).trim()
                        }, c = function (e) {
                            E.classList.remove("invalid"), n.paymentId = e.target.value
                        }, m = function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "succes.svg",
                                n = e.getAttribute("src").split("/");
                            n.pop(), n.push(t);
                            var r = n.join("/");
                            e.setAttribute("src", r)
                        }, f = function (e) {
                            return i()(a.a.mark(function n() {
                                var r, i, o;
                                return a.a.wrap(function (n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (r = e.id, e.status !== L.finished) {
                                                n.next = 5;
                                                break
                                            }
                                            n.t0 = e, n.next = 8;
                                            break;
                                        case 5:
                                            return n.next = 7, t.getTransactionStatus(r);
                                        case 7:
                                            n.t0 = n.sent;
                                        case 8:
                                            i = n.t0, o = i.status, n.t1 = o, n.next = n.t1 === L.confirming ? 13 : n.t1 === L.exchanging ? 15 : n.t1 === L.sending ? 18 : n.t1 === L.finished ? 21 : n.t1 === L.failed ? 27 : n.t1 === L.refunded ? 30 : 33;
                                            break;
                                        case 13:
                                            return m(O), n.abrupt("break", 34);
                                        case 15:
                                            return m(O), m(F), n.abrupt("break", 34);
                                        case 18:
                                            m(O), m(F), m(R);
                                        case 21:
                                            return m(O), m(F), m(R), document.querySelector(".exchange-finished").style.display = "block", clearInterval(s), n.abrupt("break", 34);
                                        case 27:
                                            return clearInterval(s), document.querySelector(".exchange-failed").style.display = "block", n.abrupt("break", 34);
                                        case 30:
                                            return clearInterval(s), document.querySelector(".exchange-refund").style.display = "block", n.abrupt("break", 34);
                                        case 33:
                                            return n.abrupt("break", 34);
                                        case 34:
                                        case "end":
                                            return n.stop()
                                    }
                                }, n)
                            }))
                        }, h = function (e) {
                            H.renderThreeStep(e), b.style.display = "block", k.style.display = "none", S.style.display = "flex", w.style.display = "flex", x.style.display = "block", window.scrollTo({
                                top: x.offsetTop,
                                behavior: "smooth"
                            }), f(e)(), s = setInterval(f(e), 5e3)
                        }, p = function () {
                            k.style.display = "block", window.scrollTo({
                                top: b.offsetTop,
                                behavior: "smooth"
                            }), T.style.display = "none", S.style.display = "none"
                        }, y = function () {
                            var e = document.querySelector(".step-button-one"),
                                t = document.querySelector(".step-button-two"),
                                n = document.querySelector(".step-button-back");
                            e.addEventListener("click", N), t.addEventListener("click", U), n.addEventListener("click", p)
                        }, Y = function () {
                            var e = i()(a.a.mark(function e() {
                                var n, r, s;
                                return a.a.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (C.style.display = "flex", e.prev = 1, r = new URLSearchParams(window.location.search), !(n = r.get("id"))) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 7, t.getTransactionStatus(n);
                                        case 7:
                                            s = e.sent, h(s), e.next = 12;
                                            break;
                                        case 11:
                                            b.style.display = "block";
                                        case 12:
                                            e.next = 17;
                                            break;
                                        case 14:
                                            e.prev = 14, e.t0 = e.catch(1), b.style.display = "block";
                                        case 17:
                                            return e.prev = 17, I(), W(), y(), C.style.display = "none", e.finish(17);
                                        case 23:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [1, 14, 17, 23]
                                ])
                            }));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(), k = document.querySelector(".step-one > .step-body"), w = document.querySelector(".step-one > .step-header"), b = document.querySelector(".step-one"), D = document.querySelector(".step-two"), T = document.querySelector(".step-two > .step-body"), S = document.querySelector(".step-two > .step-header"), x = document.querySelector(".step-three"), H = M(n), A = document.getElementById("recipientAddress"), j = document.getElementById("refundAddress"), E = document.getElementById("payment-id"), P = document.getElementById("confirmCheckbox"), O = document.querySelector(".stage-payment img"), F = document.querySelector(".stage-exchage img"), R = document.querySelector(".stage-sent img"), C = document.querySelector(".stepper-loader"), W = function () {
                            A.addEventListener("input", u),
                            A.addEventListener("change", d),
                            A.addEventListener("keyup", d),
                            // A.addEventListener("blur", l),
                            j.addEventListener("input", u),
                            j.addEventListener("keyup", _),
                            j.addEventListener("change", _),
                            E.addEventListener("keyup", c),
                            E.addEventListener("input", u)
                            E.addEventListener("change", u)
                        }, I = function () {
                            var e = document.querySelector(".refund-address-add"),
                                t = document.querySelector(".refund-address-remove"),
                                r = document.querySelector(".refund-notify");
                            e.addEventListener("click", function () {
                                document.querySelector(".refund-address").style.display = "block", this.style.display = "none", r.style.display = "flex", t.style.display = "block", n.refund = !0
                            }), t.addEventListener("click", function () {
                                document.querySelector(".refund-address").style.display = "none", this.style.display = "none", r.style.display = "none", e.style.display = "block", n.refund = !1
                            })
                        }, N = function (e) {
                            var t = !0, no1 = false, no2 = false;
                            for(var x of A.classList.values()){ if (x=='invalid') no1=true; }
                            var s = document.querySelector(".step-one .recipient-address .recipient-address-error").textContent;
                            if (s!='') no2 = true;
                            e.preventDefault(), n.from && n.to || (t = !1), (no1 || no2 || !n.recipientAddress || n.recipientAddress.length < 5) && (A.classList.add("invalid"), t = !1), n.from.isAnonymous && !n.refundAddress.trim().length && (j.classList.add("invalid"), t = !1), (n.hasError || n.amount <= 0 || !n.conditions) && (t = !1), l(), t && o && (H.renderTwoStep(), T.style.display = "block", S.style.display = "flex", window.scrollTo({
                                top: D.offsetTop,
                                behavior: "smooth"
                            }), k.style.display = "none")
                        }, U = function () {
                            var e = i()(a.a.mark(function e(r) {
                                var s, i, u, d, l;
                                return a.a.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (s = document.querySelector(".step-button-two"), r.preventDefault(), P.checked) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if (e.prev = 4, s.setAttribute("disabled", !0), u = {
                                                    from: n.from.ticker,
                                                    to: n.to.ticker,
                                                    address: n.recipientAddress,
                                                    amount: n.amount,
                                                    refundAddress: n.refundAddress,
                                                    extraId: n.paymentId
                                                }, !n.fixedRate) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.next = 10, t.createFixRateTransaction(u);
                                        case 10:
                                            i = e.sent, e.next = 16;
                                            break;
                                        case 13:
                                            return e.next = 15, t.createTransaction(u);
                                        case 15:
                                            i = e.sent;
                                        case 16:
                                            return n.transactionId = i.id, e.next = 19, t.getTransactionStatus(i.id);
                                        case 19:
                                            d = e.sent, window.history.pushState(null, null, "?id=".concat(i.id)), T.style.display = "none", h(d), e.next = 30;
                                            break;
                                        case 25:
                                            e.prev = 25, e.t0 = e.catch(4), p()
                                            , "not_valid_address" === (l = e.t0.response.data.error)
                                                ? (A.classList.add("invalid"), H.renderAddressError("not_a_valid_adress"), o = !1)
                                                : H.renderNotifyError(l, e.t0.response.data.message || null)
                                            , "max_amount_exceeded" === (l = e.t0.response.data.error)
                                                ? (A.classList.add("invalid"), H.renderAddressError("max_amount_exceeded"), o = !1)
                                                : H.renderNotifyError(l)
                                            ;
                                        case 30:
                                            return e.prev = 30, s.removeAttribute("disabled"), e.finish(30);
                                        case 33:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [4, 25, 30, 33]
                                ])
                            }));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }(), e.next = 37, Y();
                    case 37:
                    case "end":
                        return e.stop()
                }
            }, e)
        }))).apply(this, arguments)
    }
    var b = n(53),
        D = n.n(b);

    function T() {
        for (var e = this.value.toLowerCase(), t = document.querySelectorAll("ul.exchange-list > .exchange-list-item"), n = document.querySelectorAll(".no-coincides"), r = 0; r < t.length; r++) {
            var a = t[r].dataset.name,
                s = t[r].dataset.coin,
                i = a.toLowerCase().indexOf(e) > -1 || s.toLowerCase().indexOf(e) > -1;
            t[r].style.display = i ? "" : "none"
        }
        u()(t).every(function (e) {
            return "none" === e.style.display
        }) ? u()(n).forEach(function (e) {
            return e.classList.remove("novisible")
        }) : u()(n).forEach(function (e) {
            return e.classList.add("novisible")
        })
    }

    function S() {
        var e = document.querySelectorAll(".exchange-select--search");
        e && e.length && u()(e).forEach(function (e) {
            return e.addEventListener("keyup", T)
        })
    }
    var x = n(199),
        H = n.n(x);

    function A(e, t) {
        var n = [];
        return e.forEach(function (e) {
            n.includes(e.from) || n.push(e.from)
        }), t.filter(function (e) {
            return n.includes(e.ticker)
        })
    }

    function j(e, t) {
        return t.filter(function (t) {
            return t.from === e.ticker
        }).map(function (e) {
            return e.to
        })
    }

    function E(e, t) {
        return e.filter(function (e) {
            return t.includes(e.ticker)
        })
    }

    function P(e, t) {
        return O.apply(this, arguments)
    }

    function O() {
        return (O = i()(a.a.mark(function e(t, n) {
            var r, s, o, d, l, _, c, m, f, h, p, y, L, g, Y, v, k, w, b, T, x, P, O, F, R, C, W, I, N, U, B, z, $;
            return a.a.wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (g = function () {
                                this.style.opacity = "0"
                            }, L = function () {
                                var e = document.querySelector(".recipient-address-error");
                                e && (e.innerHTML = "")
                            }, r = "btc", s = {
                                bnbmainnet: {
                                    ticker: "bnb",
                                    sup: "mainnet"
                                },
                                usdterc20: {
                                    ticker: "usdt",
                                    sup: "erc20"
                                }
                            }, document.querySelector(".main-from")) {
                            e.next = 7;
                            break
                        }
                        return e.abrupt("return");
                    case 7:
                        return o = document.getElementById("sumInput"),
                            d = document.getElementById("fromInput"),
                            l = document.querySelector(".loader"),
                            _ = document.querySelector(".input-search-from"),
                            c = document.querySelector(".input-search-to"),
                            m = document.querySelector(".currencies-from-container"),
                            f = document.querySelector(".currencies-to-container"),
                            h = M(n),
                            d.value = n.amount,
                            p = function () {
                                var e = document.querySelector(".coin-sequence"),
                                    t = "";
                                if (n.fixedRate) {
                                    var r = n.fixedPairs.find(function (e) {
                                        return e.from === n.from.ticker && e.to === n.to.ticker
                                    });
                                    t = "Deposit from ".concat(r ? r.min.toFixed(3) : "", " to ").concat(r ? r.max.toFixed(3) : "", " ").concat(n.from.ticker.toUpperCase())
                                } else {
                                    var a, s;
                                    n.conditions && (a = Number(n.conditions.estimatedAmount / n.amount), s = isNaN(a) ? "" : isFinite(a) ? a.toFixed(6) : ""), t = "1 ".concat(n.from.ticker.toUpperCase(), " ~ ").concat(s || "-", " ").concat(n.to.ticker.toUpperCase())
                                }
                                e.innerHTML = t
                            }, y = function () {
                                var e = document.querySelector(".payment-id"),
                                    t = document.querySelector(".refund-address"),
                                    r = document.querySelector(".refund-address .required"),
                                    a = document.querySelector(".refund-buttons"),
                                    s = document.querySelector(".refund-notify"),
                                    i = document.createTextNode(" (required)");
                                if (e) {
                                    var o = n.to.hasExternalId || n.from.isAnonymous || n.to.isAnonymous;
                                    e.style.display = o ? "block" : "none", n.from.isAnonymous ? (n.refund ? a.style.display = "none" : (a.style.display = "none", t.style.display = "block", s.style.display = "flex"), r.append(i)) : (n.refund || (t.style.display = "none", s.style.display = "none"), a.style.display = "block", r.innerHTML = "")
                                }
                            }, Y = function () {
                                var e = D()({
                                    currencies: n.currenciesFrom,
                                    type: "from",
                                    location: location
                                });
                                if (m) {
                                    m.innerHTML = e;
                                    var t = m.querySelectorAll('img[data-image="coin"]');
                                    u()(t).forEach(function (e) {
                                        e.addEventListener("error", g)
                                    }), S(), W(), B()
                                }
                            }, v = function () {
                                var e = D()({
                                    currencies: n.currenciesTo,
                                    type: "to",
                                    location: location
                                });
                                if (f) {
                                    f.innerHTML = e;
                                    var t = f.querySelectorAll('img[data-image="coin"]');
                                    u()(t).forEach(function (e) {
                                        e.addEventListener("error", g)
                                    }), S(), I(), B()
                                }
                            }, k = function () {
                                var e = i()(a.a.mark(function e() {
                                    var r, s, i, u, d, _, c, m, f, y;
                                    return a.a.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (o.value = "", l.style.display = "block", r = n.from.ticker + "_" + n.to.ticker, e.prev = 3, !n.fixedRate) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return e.next = 7, t.getFixRateAmount(n.amount, r);
                                            case 7:
                                                s = e.sent, e.next = 13;
                                                break;
                                            case 10:
                                                return e.next = 12, t.exchangeAmount(n.amount, r);
                                            case 12:
                                                s = e.sent;
                                            case 13:
                                                return e.next = 15, t.getMinimalAmount(r);
                                            case 15:
                                                i = e.sent, u = i.minAmount, n.minAmount = u, n.conditions = s, o.value = s.estimatedAmount, n.minAmount > n.amount ? (d = "Minimum amount  ".concat(n.minAmount || "", " ").concat(n.from.ticker.toUpperCase()), h.renderAmountError(d), n.hasError = !0) : (h.renderAmountError(), n.hasError = !1), e.next = 36;
                                                checkEstimatedAmountShow();
                                                break;
                                            case 23:
                                                if (
                                                    e.prev = 23,
                                                    e.t0 = e.catch(3),
                                                    "out_of_range" === e.t0.response.data.error && n.fixedRate && (_ = n.fixedPairs.find(function (e) {
                                                        return e.from === n.from.ticker && e.to === n.to.ticker
                                                    }),
                                                    c = n.amount > _.max ? "Maximum amount  ".concat(_ ? _.max : "", " ").concat(n.from.ticker.toUpperCase()) : "Minimum amount  ".concat(_ ? _.min : "", " ").concat(n.from.ticker.toUpperCase()),
                                                    h.renderAmountError(c)),
                                                    "deposit_too_small" !== e.t0.response.data.error || n.fixedRate
                                                ) {
                                                    e.next = 33;
                                                    break
                                                }
                                                return e.next = 29, t.getMinimalAmount(r);
                                            case 29:
                                                m = e.sent, f = m.minAmount, y = "Minimum amount  ".concat(f || "", " ").concat(n.from.ticker.toUpperCase()), h.renderAmountError(y);
                                            case 33:
                                                o.value = "-", n.conditions = null, n.hasError = !0;
                                            case 36:
                                                return e.prev = 36, l.style.display = "none", p(), e.finish(36);
                                            case 40:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, null, [
                                        [3, 23, 36, 40]
                                    ])
                                }));
                                return function () {
                                    return e.apply(this, arguments)
                                }
                            }(), w = function () {
                                var e = i()(a.a.mark(function e() {
                                    var s, i, o, u;
                                    return a.a.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (e.prev = 0, n.allCurrencies && n.allCurrencies.length) {
                                                    e.next = 6;
                                                    break
                                                }
                                                return e.next = 4, t.getAllCurrencies();
                                            case 4:
                                                s = e.sent, n.allCurrencies = s.filter(function (e) {
                                                    return !e.isFiat
                                                });
                                            case 6:
                                                if (!n.fixedRate) {
                                                    e.next = 15;
                                                    break
                                                }
                                                if (n.fixedPairs && n.fixedPairs.length) {
                                                    e.next = 12;
                                                    break
                                                }
                                                return e.next = 10, t.getFixRateMarket();
                                            case 10:
                                                i = e.sent, n.fixedPairs = i;
                                            case 12:
                                                n.currenciesFrom = A(n.fixedPairs, n.allCurrencies), e.next = 16;
                                                break;
                                            case 15:
                                                n.currenciesFrom = n.allCurrencies;
                                            case 16:
                                                if (n.from) {
                                                    e.next = 24;
                                                    break
                                                }
                                                return o = n.currenciesFrom.find(function (e) {
                                                    return e.ticker === r
                                                }), u = o ? o.ticker : n.currenciesFrom[0].ticker, e.next = 21, t.getCurrencyInfo(u);
                                            case 21:
                                                n.from = e.sent, e.next = 30;
                                                break;
                                            case 24:
                                                if (!n.currenciesFrom.some(function (e) {
                                                        return e.ticker === n.from.ticker
                                                    })) {
                                                    e.next = 27;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 27:
                                                return e.next = 29, t.getCurrencyInfo(n.currenciesFrom[0].ticker);
                                            case 29:
                                                n.from = e.sent;
                                            case 30:
                                                e.next = 35;
                                                break;
                                            case 32:
                                                e.prev = 32, e.t0 = e.catch(0), n.hasError = !0;
                                            case 35:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, null, [
                                        [0, 32]
                                    ])
                                }));
                                return function () {
                                    return e.apply(this, arguments)
                                }
                            }(), b = function () {
                                var e = i()(a.a.mark(function e() {
                                    var r, s, i;
                                    return a.a.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (e.prev = 0, !n.from || !n.from.ticker) {
                                                    e.next = 25;
                                                    break
                                                }
                                                if (!n.fixedRate) {
                                                    e.next = 7;
                                                    break
                                                }
                                                r = j(n.from, n.fixedPairs), n.currenciesTo = E(n.allCurrencies, r), e.next = 14;
                                                break;
                                            case 7:
                                                return e.next = 9, t.getExchangeAvailableCurrencies(n.from.ticker);
                                            case 9:
                                                if (s = e.sent, (i = s.filter(function (e) {
                                                        return e.isAvailable
                                                    })).length) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 13:
                                                n.currenciesTo = i;
                                            case 14:
                                                if (!n.to) {
                                                    e.next = 22;
                                                    break
                                                }
                                                if (n.currenciesTo.some(function (e) {
                                                        return e.ticker === n.to.ticker
                                                    })) {
                                                    e.next = 20;
                                                    break
                                                }
                                                return e.next = 19, t.getCurrencyInfo(n.currenciesTo[0].ticker);
                                            case 19:
                                                n.to = e.sent;
                                            case 20:
                                                e.next = 25;
                                                break;
                                            case 22:
                                                return e.next = 24, t.getCurrencyInfo(n.currenciesTo[0].ticker);
                                            case 24:
                                                n.to = e.sent;
                                            case 25:
                                                e.next = 31;
                                                break;
                                            case 27:
                                                e.prev = 27, e.t0 = e.catch(0), console.log(e.t0), n.hasError = !0;
                                            case 31:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, null, [
                                        [0, 27]
                                    ])
                                }));
                                return function () {
                                    return e.apply(this, arguments)
                                }
                            }(), T = function () {
                                var e = i()(a.a.mark(function e() {
                                    return a.a.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, w();
                                            case 3:
                                                return e.next = 5, b();
                                            case 5:
                                                e.next = 10;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(0), n.hasError = !0;
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, null, [
                                        [0, 7]
                                    ])
                                }));
                                return function () {
                                    return e.apply(this, arguments)
                                }
                            }(), x = function () {
                                n.fixedRate ? (document.querySelector(".tooltiped-rate").style.display = "none", document.querySelector(".tooltiped-fix").style.display = "") : (document.querySelector(".tooltiped-rate").style.display = "", document.querySelector(".tooltiped-fix").style.display = "none")
                            }, P = function () {
                                var e = document.querySelectorAll(".tabs-label");

                                function t() {
                                    return r.apply(this, arguments)
                                }

                                function r() {
                                    return (r = i()(a.a.mark(function t() {
                                        return a.a.wrap(function (t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return u()(e).forEach(function (e) {
                                                        e.classList.remove("active")
                                                    }), this.dataset.exchangeRate ? (n.fixedRate = !0, document.querySelector(".tooltiped-rate").style.display = "none", document.querySelector(".tooltiped-fix").style.display = "") : (n.fixedRate = !1, document.querySelector(".tooltiped-rate").style.display = "", document.querySelector(".tooltiped-fix").style.display = "none"), this.classList.add("active"), t.next = 5, T();
                                                case 5:
                                                    Y(), v(), O(), F(), y(), k();
                                                case 11:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }, t, this)
                                    }))).apply(this, arguments)
                                }
                                u()(e).forEach(function (e) {
                                    e.addEventListener("click", t)
                                })
                            }, O = function () {
                                var e = c.querySelector(".currency-coin"),
                                    t = c.querySelector(".currency-coin-ticker");
                                if (e.setAttribute("src", n.to.image), s[n.to.ticker]) {
                                    t.textContent = s[n.to.ticker].ticker.toUpperCase();
                                    var r = document.createElement("sup");
                                    r.textContent = s[n.to.ticker].sup.toUpperCase(), t.append(r)
                                } else t.textContent = n.to.ticker.toUpperCase()
                                checkRange()
                            }, F = function () {
                                var e = _.querySelector(".currency-coin"),
                                    t = _.querySelector(".currency-coin-ticker");
                                if (e.setAttribute("src", n.from.image), s[n.from.ticker]) {
                                    t.textContent = s[n.from.ticker].ticker.toUpperCase();
                                    var r = document.createElement("sup");
                                    r.textContent = s[n.from.ticker].sup.toUpperCase(), t.append(r)
                                } else t.textContent = n.from.ticker.toUpperCase()
                                checkRange()
                            }, R = function () {
                                document.querySelector(".change-currency").addEventListener("click", function () {
                                    var e = n.to,t = n.from;
                                    n.to = t, n.from = e, L(), O(), F(), y(), h.renderRefundCurrency(), h.renderNotifyAddress(), N(), k()
                                    checkRecipientAddress()
                                })
                            }, C = function () {
                                d.addEventListener("input", function (e) {
                                    var t = e.target.value.trim();
                                    if (t && !H.a.isFloat(t)) return e.preventDefault(), e.target.value = t.slice(0, -1), !1;
                                    var r = Number(t);
                                    isNaN(r) && (r = 0);
                                    n.amount = r, k()
                                })
                            }, W = function () {
                                var e = document.querySelectorAll("ul.exchange-list-from > li"),
                                    r = function () {
                                        var e = i()(a.a.mark(function e(r) {
                                            var s, i;
                                            return a.a.wrap(function (e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (r.stopPropagation(), s = this.dataset.coin, i = n.currenciesFrom.find(function (e) {
                                                                return e.ticker === s
                                                            })) {
                                                            e.next = 5;
                                                            break
                                                        }
                                                        return e.abrupt("return");
                                                    case 5:
                                                        return m.style.display = "none", e.next = 8, t.getCurrencyInfo(i.ticker);
                                                    case 8:
                                                        return n.from = e.sent, F(), e.prev = 10, e.next = 13, b();
                                                    case 13:
                                                        return e.prev = 13, O(), v(), L(), y(), h.renderRefundCurrency(), h.renderNotifyAddress(), N(), k(), e.finish(13);
                                                    case 23:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, e, this, [
                                                [10, , 13, 23]
                                            ])
                                        }));
                                        return function (t) {
                                            return e.apply(this, arguments)
                                        }
                                    }();
                                u()(e).forEach(function (e) {
                                    e.addEventListener("click", r)
                                })
                            }, I = function () {
                                var e = document.querySelectorAll("ul.exchange-list-to > li"),
                                    r = function () {
                                        var e = i()(a.a.mark(function e(r) {
                                            var s, i;
                                            return a.a.wrap(function (e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (r.stopPropagation(), s = this.dataset.coin, i = n.currenciesTo.find(function (e) {
                                                                return e.ticker === s
                                                            })) {
                                                            e.next = 5;
                                                            break
                                                        }
                                                        return e.abrupt("return");
                                                    case 5:
                                                        return f.style.display = "none", e.prev = 6, e.next = 9, t.getCurrencyInfo(i.ticker);
                                                    case 9:
                                                        n.to = e.sent;
                                                    case 10:
                                                        return e.prev = 10, O(), L(), y(), h.renderNotifyAddress(), k(), N(), e.finish(10);
                                                    case 18:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, e, this, [
                                                [6, , 10, 18]
                                            ])
                                        }));
                                        return function (t) {
                                            return e.apply(this, arguments)
                                        }
                                    }();
                                u()(e).forEach(function (e) {
                                    e.addEventListener("click", r)
                                })
                            }, N = function () {
                                var e = document.getElementById("recipientAddress"),
                                    t = document.getElementById("refundAddress");
                                e && t && (e.classList.remove("invalid"), t.classList.remove("invalid"), t.value = "")
                            }, U = function (e) {
                                u()(e).forEach(function (e) {
                                    return e.style.display = ""
                                })
                            }, B = function () {
                                var e = document.querySelectorAll(".exchange-select-wrapper"),
                                    t = document.querySelectorAll(".currencies-container"),
                                    n = document.querySelectorAll(".exchange-select--search"),
                                    r = document.querySelectorAll("ul.exchange-list-to > li"),
                                    a = document.querySelectorAll("ul.exchange-list-from > li");
                                e && e.length && u()(e).forEach(function (e) {
                                    e.addEventListener("click", function (e) {
                                        e.stopPropagation(), e.target === this && (u()(n).forEach(function (e) {
                                            e.value = ""
                                        }), u()(t).forEach(function (e) {
                                            e.style.display = "none"
                                        }), U(r), U(a))
                                    })
                                })
                            }, z = function () {
                                _ && _.addEventListener("click", function (e) {
                                    document.querySelector(".currencies-from-container").style.display = "block", document.querySelector(".currencies-from-container input").focus()
                                })
                            }, $ = function () {
                                c && c.addEventListener("click", function (e) {
                                    document.querySelector(".currencies-to-container").style.display = "block", document.querySelector(".currencies-to-container input").focus()
                                })
                            },
                            function () {
                                var e = document.querySelectorAll(".tabs-label");
                                u()(e).forEach(function (e) {
                                    var t = e.dataset.exchangeRate;
                                    n.fixedRate ? t && e.classList.add("active") : !t && e.classList.add("active")
                                })
                            }(), x(), e.next = 42, T();
                    case 42:
                        O(), F(), h.renderNotifyAddress(), h.renderRefundCurrency(), C(), Y(), v(), z(), $(), y(), k(), P(), R();
                    case 55:
                    case "end":
                        return e.stop()
                }
            }, e)
        }))).apply(this, arguments)
    }
    var F = n(200),
        R = n.n(F),
        C = n(25),
        W = n.n(C),
        I = n(26),
        N = n.n(I),
        U = n(23),
        B = n.n(U);
    n(52);

    function z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function (t) {return Object.getOwnPropertyDescriptor(e, t).enumerable})), n.push.apply(n, r)
        }
        return n
    }

    function $(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? z(n, !0).forEach(function (t) {R()(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(n).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var J = B.a.create({baseURL:apiurl}),
        G = function () {
            function e(t) {
                var n = this;
                W()(this, e), this._clientGet = function () {
                    var e = i()(a.a.mark(function e(t) {
                        var r, s, i, o, u, d = arguments;
                        return a.a.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:return r = d.length > 1 && void 0 !== d[1] ? d[1] : "", s = d.length > 2 && void 0 !== d[2] ? d[2] : "", i = "".concat(t, "/").concat(r, "?api_key=").concat(n.apiKey, "&").concat(s), e.next = 5, J.get(i);
                                case 5:return o = e.sent, u = o.data, e.abrupt("return", u);
                                case 8:
                                case "end":return e.stop()
                            }
                        }, e)
                    }));
                    return function (t) {return e.apply(this, arguments)}
                }(), this._clientPost = function () {
                    var e = i()(a.a.mark(function e(t) {
                        var r, s, i, o, u = arguments;
                        return a.a.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:return r = u.length > 1 && void 0 !== u[1] ? u[1] : {}, s = "".concat(t, "/").concat(n.apiKey), e.next = 4, J.post(s, $({}, r));
                                case 4:return i = e.sent, o = i.data, e.abrupt("return", o);
                                case 7:
                                case "end":return e.stop()
                            }
                        }, e)
                    }));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), this.apiKey = t
            }
            var t, n, r, s, o, u, d, l, _, c, m;
            return N()(e, [{
                key: "getAllCurrencies",
                value: (m = i()(a.a.mark(function e() {
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:return e.next = 2, this._clientGet("currencies", "", "active=true");
                            case 2:return e.abrupt("return", e.sent);
                            case 3:
                            case "end":return e.stop()
                        }
                    }, e, this)
                })), function () {
                    return m.apply(this, arguments)
                })
            }, {
                key: "exchangeAmount",
                value: (c = i()(a.a.mark(function e(t, n) {
                    var r;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0: {
                                checkRange(t);
                                return r = "".concat(t, "/").concat(n), e.next = 3, this._clientGet("exchange-amount", r);
                            }
                            case 3:return e.abrupt("return", e.sent);
                            case 4:
                            case "end":return e.stop()
                        }
                    }, e, this)
                })), function (e, t) {
                    return c.apply(this, arguments)
                })
            }, {
                key: "getCurrencyInfo",
                value: (_ = i()(a.a.mark(function e(t) {
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:return e.next = 2, this._clientGet("currencies", t);
                            case 2:return e.abrupt("return", e.sent);
                            case 3:
                            case "end":return e.stop()
                        }
                    }, e, this)
                })), function (e) {
                    return _.apply(this, arguments)
                })
            }, {
                key: "getExchangeAvailableCurrencies",
                value: (l = i()(a.a.mark(function e(t) {
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:return e.next = 2, this._clientGet("currencies-to", t);
                            case 2:return e.abrupt("return", e.sent);
                            case 3:
                            case "end":return e.stop()
                        }
                    }, e, this)
                })), function (e) {
                    return l.apply(this, arguments)
                })
            }, {
                key: "getMinimalAmount",
                value: (d = i()(a.a.mark(function e(t) {
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:return e.next = 2, this._clientGet("min-amount", t);
                            case 2:return e.abrupt("return", e.sent);
                            case 3:
                            case "end":return e.stop()
                        }
                    }, e, this)
                })), function (e) {
                    return d.apply(this, arguments)
                })
            }, {
                key: "getMinimalFixrateAmount",
                value: (u = i()(a.a.mark(function e(t, n) {
                    var r;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:return r = "/".concat(t, "/").concat(n), e.next = 3, this._clientGet("exchange-amount/fixed-rate", r);
                            case 3:return e.abrupt("return", e.sent);
                            case 4:
                            case "end":return e.stop()
                        }
                    }, e, this)
                })), function (e, t) {
                    return u.apply(this, arguments)
                })
            }, {
                key: "createTransaction",
                value: (o = i()(a.a.mark(function e(t) {
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:return e.next = 2, this._clientPost("transactions", t);
                            case 2:return e.abrupt("return", e.sent);
                            case 3:
                            case "end":return e.stop()
                        }
                    }, e, this)
                })), function (e) {
                    return o.apply(this, arguments)
                })
            }, {
                key: "getFixRateMarket",
                value: (s = i()(a.a.mark(function e() {
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:return e.next = 2, this._clientGet("market-info/fixed-rate", this.apiKey);
                            case 2:return e.abrupt("return", e.sent);
                            case 3:
                            case "end":return e.stop()
                        }
                    }, e, this)
                })), function () {
                    return s.apply(this, arguments)
                })
            }, {
                key: "getFixRateAmount",
                value: (r = i()(a.a.mark(function e(t, n) {
                    var r;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:return r = "".concat(t, "/").concat(n), e.next = 3, this._clientGet("exchange-amount/fixed-rate", r);
                            case 3:return e.abrupt("return", e.sent);
                            case 4:
                            case "end":return e.stop()
                        }
                    }, e, this)
                })), function (e, t) {
                    return r.apply(this, arguments)
                })
            }, {
                key: "createFixRateTransaction",
                value: (n = i()(a.a.mark(function e(t) {
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:return e.next = 2, this._clientPost("transactions/fixed-rate", t);
                            case 2:return e.abrupt("return", e.sent);
                            case 3:
                            case "end":return e.stop()
                        }
                    }, e, this)
                })), function (e) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "getTransactionStatus",
                value: (t = i()(a.a.mark(function e(t) {
                    var n;
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:return n = "".concat(t, "/").concat(this.apiKey), e.next = 3, this._clientGet("transactions", n);
                            case 3:return e.abrupt("return", e.sent);
                            case 4:
                            case "end":return e.stop()
                        }
                    }, e, this)
                })), function (e) {
                    return t.apply(this, arguments)
                })
            }]), e
        }(),
        q = n(24),
        Z = n(201),
        V = n.n(Z),
        K = function () {
            function e() {
                return W()(this, e), "object" === V()(e.instanse) ? e.instanse : (this._from = null, this._to = null, this._amount = 1, this._fixedRate = !1, this._transactionId = "", this.isLoading = !1, this.hasError = !1, this.currenciesFrom = [], this.currenciesTo = [], this.conditions = null, this.allCurrencies = [], this.fixedPairs = [], this.refundAddress = "", this.recipientAddress = "", this.paymentId = "", this.refund = !1, this.minAmount = 0, e.instanse = this, this)
            }
            return N()(e, [{
                key: "updateStorage",
                value: function (e, t) {
                    var n = window.localStorage.getItem("changenow"),r = JSON.parse(n);
                    r[e] = t, window.localStorage.setItem("changenow", JSON.stringify(r))
                }
            }, {
                key: "init",
                value: function () {
                    var e = window.localStorage.getItem("changenow");
                    if (e) {
                        var t = JSON.parse(e),
                            n = t.from,
                            r = t.to,
                            a = t.amount,
                            s = t.fixedRate,
                            i = t.transactionId;
                        this.from = n, this.to = r, this.amount = a, this.fixedRate = s, this.transactionId = i
                    } else {
                        var o = JSON.stringify({
                            from: null,
                            to: null,
                            amount: 1,
                            fixedRate: !1,
                            transactionId: ""
                        });
                        window.localStorage.setItem("changenow", o)
                    }
                }
            }, {
                key: "from",
                get: function () {
                    return this._from
                },
                set: function (e) {
                    e && (this._from = e, this.updateStorage("from", e))
                }
            }, {
                key: "to",
                get: function () {
                    return this._to
                },
                set: function (e) {
                    e && (this._to = e, this.updateStorage("to", e))
                }
            }, {
                key: "amount",
                get: function () {
                    return this._amount
                },
                set: function (e) {
                    this._amount = e, this.updateStorage("amount", e)
                }
            }, {
                key: "fixedRate",
                get: function () {
                    return this._fixedRate
                },
                set: function (e) {
                    this._fixedRate = e, this.updateStorage("fixedRate", e)
                }
            }, {
                key: "transactionId",
                get: function () {
                    return this._transactionId
                },
                set: function (e) {
                    this._transactionId = e, this.updateStorage("transactionId", e)
                }
            }]), e
        }();
    window.addEventListener("load", i()(a.a.mark(function e() {
        var t, n, r;
        return a.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    if (t = Object(q.a)()) {
                        e.next = 3;
                        break
                    }
                    return e.abrupt("return");
                case 3:
                    n = new G(t), (r = new K).init(), P(n, r), k(n, r);
                case 9:
                case "end":
                    return e.stop()
            }
        }, e)
    })), !1)
}]);

var currRegex = {
'1st': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'aave': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'abyss': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'ada': { r: '^(([1-9A-HJ-NP-Za-km-z]{59})|([0-9A-Za-z]{100,104}))$', x: '' },
'adt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'adx': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'ae': { r: '^ak_[A-Za-z0-9]{49,52}$', x: '' },
'agi': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'aion': { r: '^(0x)[0-9A-Fa-f]{64}$', x: '' },
'akro': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'algo': { r: '^[A-Z0-9]{58}$', x: '' },
'amb': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'ant': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'appc': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'ardr': { r: '^(ARDOR-)[0-9A-Za-z]{4}(-)[0-9A-Za-z]{4}(-)[0-9A-Za-z]{4}(-)[0-9A-Za-z]{5}$', x: '' },
'ark': { r: '^(A)[A-Za-z0-9]{33}$', x: '' },
'arn': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'ast': { r: '^(0x)[0-9A-Fa-f]{40}$', x: null },
'atom': { r: '^(cosmos1)[0-9a-z]{38}$', x: '^[0-9A-Za-z\\-_]{1,120}$' },
'ava-bep2': { r: '^(bnb1)[0-9a-z]{38}$', x: '' },
'ava': { r: '^(bnb1)[0-9a-z]{38}$', x: '' },
'awc-bnb': { r: '^(bnb1)[0-9a-z]{38}$', x: '^[0-9A-Za-z\\-_]{1,120}$' },
'awc-erc20': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'bal': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'band': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'bat': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'bcc': { r: '^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$|^[0-9A-Za-z]{42,42}$', x: '' },
'bcd': { r: '^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$', x: '' },
'bch': { r: '^([13][a-km-zA-HJ-NP-Z1-9]{25,34})$|^((bitcoincash:)?(q|p)[a-z0-9]{41})$|^((BITCOINCASH:)?(Q|P)[A-Z0-9]{41})$', x: '' },
'bcn': { r: '^(2)[0-9A-za-z]{94}$', x: '^[0-9A-za-z]{64}$' },
'bcpt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'bcx': { r: '^(X)[0-9A-za-z]{33}$', x: '' },
'bdg': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'beam': { r: '^[A-Za-z0-9]{66,67}$', x: '' },
'betr': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'bkx': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'blz': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'bnb-erc20': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'bnb-mainnet': { r: '^(bnb1)[0-9a-z]{38}$', x: '^[0-9A-Za-z\\-_]{1,120}$' },
'bnb': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'bnbmainnet': { r: '^(bnb1)[0-9a-z]{38}$', x: '^[0-9A-Za-z\\-_]{1,120}$' },
'bnt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: null },
'bqx': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'brd': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'bsv': { r: '^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$', x: '' },
'btc': { r: '^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$|^(bc1)[0-9A-Za-z]{39}$', x: '' },
'btg': { r: '^[AG][a-km-zA-HJ-NP-Z1-9]{25,34}$', x: '' },
'btm': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'bts': { r: '^[a-z]{1}[a-z0-9-\\.]{2,62}$', x: '' },
'btt': { r: '^T[1-9A-HJ-NP-Za-km-z]{33}$', x: '' },
'busd': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'cdt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'celr': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'chat': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'cloak': { r: '^[C|B][A-Za-z0-9]{33}$', x: '' },
'cmt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'cnd': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'comp': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'coti': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'cro': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'ctr': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'cvc': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'dai': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'dash': { r: '^[X|7][0-9A-Za-z]{33}$', x: '' },
'data': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'dcn': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'dcr': { r: '^(Ds|Dc)[0-9A-Za-z]{33}$', x: '' },
'dct': { r: '^DCT[0-9A-Za-z]{50}$', x: '' },
'default': { r: '^[0-9A-Za-z-_]+$', x: '' },
'dent': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'dgb': { r: '(^(D|S)[0-9A-Za-z]{33,34}$|^(dgb1)[a-zA-Z0-9]{39,39}$)', x: '' },
'dgd': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'dgtx': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'dia': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'dlt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'dnt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: null },
'dock': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'doge': { r: '^D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$', x: '' },
'dot': { r: '^1[0-9a-z-A-Z]{45,50}$', x: '' },
'edg': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'edo': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'egt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'elf': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'eng': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'enj': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'eon': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'eos': { r: '^[1-5a-z\\.]{1,12}$', x: '^[0-9A-Za-z\\_,][0-9A-Za-z\\-_,]{1,120}$' },
'etc': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'etf': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'eth': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'evx': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'fet': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'fil': { r: '^[a-z0-9]{41}$|^[a-z0-9]{86}$', x: '' },
'ftt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'fuel': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'fun': { r: '^(0x)[0-9A-Fa-f]{40}$', x: null },
'gas': { r: '^(A)[A-Za-z0-9]{33}$', x: '' },
'gno': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'gnt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'go': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'grs': { r: '^(F|3)[0-9A-za-z]{33}$', x: '' },
'gt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'gto': { r: '^(bnb1)[0-9a-z]{38}$', x: '^[0-9A-Za-z\\-_]{1,120}$' },
'gup': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'gusd': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'gvt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'gxs': { r: '^[a-z]{1}[a-z0-9-.]{2,62}$', x: '' },
'hbar': { r: '^0\\.0\\.\\d{1,6}$', x: '' },
'hc': { r: '^[H][a-km-zA-HJ-NP-Z1-9]{26,35}$', x: '' },
'hcc': { r: '^(H)[A-Za-z0-9]{33}$', x: '' },
'hmq': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'hot': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'hsr': { r: '^(H)[A-Za-z0-9]{33}$', x: '' },
'ht': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'husd': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'icn': { r: '^(0x)[0-9A-Fa-f]{40}$', x: null },
'icx': { r: '^(hx)[0-9A-Fa-f]{40}$', x: '' },
'ins': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'iost': { r: '^[A-Za-z0-9_]{5,11}$', x: '^[0-9A-Za-z\\-_]{1,120}$' },
'iota': { r: '^[A-Z,9]{90}$', x: '' },
'iotx': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'jst': { r: '^T[1-9A-HJ-NP-Za-km-z]{33}$', x: '' },
'kan': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'key': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'kmd': { r: '^(R)[A-Za-z0-9]{33}$', x: '' },
'knc': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'ksm': { r: '^[C-Z][a-km-zA-HJ-NP-Z1-9]{46}$', x: '' },
'lend': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'leo': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'link': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'llt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'loom': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'lrc': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'lsk': { r: '^[0-9]{18,22}[L]$', x: '' },
'ltc': { r: '^(L|M|3)[A-Za-z0-9]{33}$|^(ltc1)[0-9A-Za-z]{39}$', x: '' },
'lun': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'luna': { r: '^(terra1)[0-9a-z]{38}$', x: '^[0-9A-Za-z-_]{1,120}$' },
'lxt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'mana': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'matic': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'mco': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'mda': { r: '^(0x)[0-9A-Fa-f]{40}$', x: null },
'mdt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'mer': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'mft': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'mith': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'mkr': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'mln': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'mod': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'mth': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'mtl': { r: '^(0x)[0-9A-Fa-f]{40}$', x: null },
'myst': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'nano': { r: '^(xrb_|nano_)[13456789abcdefghijkmnopqrstuwxyz]{60}', x: '' },
'nav': { r: '^(N)[0-9A-za-z]{33}$', x: '' },
'ncash': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'nebl': { r: '^N[A-Za-z0-9]{33}$', x: '' },
'neo': { r: '^(A)[A-Za-z0-9]{33}$', x: '' },
'nexo': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'ngc': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'nmr': { r: '^0x[a-fA-F0-9]{40}$', x: '' },
'noah': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'node': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'now-bnb': { r: '^(bnb1)[0-9a-z]{38}$', x: '^[0-9A-Za-z\\-_]{1,120}$' },
'now-erc20': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'npxs': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'nuls': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'nxs': { r: '^(2)[A-Za-z0-9]{50}$', x: '' },
'oax': { r: '^(0x)[0-9A-Fa-f]{40}$', x: null },
'ogn': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'omg': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'one': { r: '^(one1)[a-z0-9]{38}$', x: '' },
'ong': { r: '^(A)[A-Za-z0-9]{33}$', x: '' },
'ont': { r: '^(A)[A-Za-z0-9]{33}$', x: '' },
'ost': { r: '^0x[a-fA-F0-9]{40}$', x: '' },
'pax': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'pay': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'perl': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'pivx': { r: '^(D)[0-9A-za-z]{33}$', x: '' },
'pma': { r: '^0x[a-fA-F0-9]{40}$', x: '' },
'poa': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'poe': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'poly': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'powr': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'ppt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'ptoy': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'qkc': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'qlc': { r: '^(A)[A-Za-z0-9]{33}$', x: '' },
'qsp': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'qtum': { r: '^[Q|M][A-Za-z0-9]{33}$', x: '' },
'r': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'rcn': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'rdn': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'ren': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'rep': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'req': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'rfr': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'rlc': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'rpx': { r: '^(A)[A-Za-z0-9]{33}$', x: '' },
'rsr': { r: '^0x[a-fA-F0-9]{40}$', x: '' },
'rvn': { r: '^R[A-Za-z0-9]{33}$', x: '' },
'sai': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'salt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: null },
'sbtc': { r: '^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$', x: '' },
'sc': { r: '^[A-Za-z0-9]{76}$', x: '' },
'scrt': { r: '^(secret1)[0-9a-z]{38}$', x: '' },
'skin': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'sky': { r: '^[0-9A-Za-z]{26,35}$', x: '' },
'smart': { r: '^S[a-zA-Z0-9]{33}$', x: '' },
'sngls': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'snm': { r: '^(0x)[0-9A-Fa-f]{40}$', x: null },
'snt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'snx': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'soc': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'srm': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'srn': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'steem': { r: '^[a-z][a-z0-9-.]{0,14}[a-z0-9]$', x: '^[a-zA-Z0-9]{0,40}$' },
'stmx': { r: '^0x[a-fA-F0-9]{40}$', x: '' },
'storj': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'storm': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'stpt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'strat': { r: '^(S)[A-Za-z0-9]{33}$', x: '' },
'stx': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'sub': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'sun': { r: '^T[1-9A-HJ-NP-Za-km-z]{33}$', x: '' },
'sushi': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'swftc': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'swt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'sxp': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'sys': { r: '(S)[A-Za-z0-9]{32,33}|sys1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{39}', x: '' },
'tel': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'tfuel': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'theta': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'time': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'tix': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'tkn': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'tnb': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'tnt': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'trig': { r: '^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$', x: '' },
'trst': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'trx': { r: '^T[0-9A-Za-z]{33}$', x: '' },
'tusd': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'ukg': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'uni': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'up': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'usdc': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'usdt': { r: '^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$', x: '' },
'usdterc20': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'usdttrc20': { r: '^T[0-9A-Za-z]{33}$', x: '' },
'utk': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'vee': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'ven': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'vet': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'via': { r: '^(V|E)[A-Za-z0-9]{33}$', x: '' },
'vib': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'vibe': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'wabi': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'wan': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'waves': { r: '^(3P)[0-9A-Za-z]{33}$', x: '' },
'waxp': { r: '[a-z1-5.]{1,12}', x: '' },
'wbtc': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'wings': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'wpr': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'wtc': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'xaur': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'xaut': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'xchf': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'xem': { r: 'N[ABCD][A-Z2-7]{38}', x: '' },
'xlm': { r: '^G[A-D]{1}[A-Z2-7]{54}$', x: '^[0-9A-Za-z]{1,28}$' },
'xmr': { r: '^[48][a-zA-Z|\\d]{94}([a-zA-Z|\\d]{11})?$' },
'xrp': { r: '^r[1-9A-HJ-NP-Za-km-z]{25,34}$', x: '^([0-9]{1,19})$' },
'xtz': { r: '^tz1[a-zA-Z0-9]{33}$', x: '' },
'xvg': { r: '^(D)[A-Za-z0-9]{33}$', x: '' },
'xzc': { r: '^[a|Z|3|4][0-9A-za-z]{33}$', x: '' },
'yfi': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'yfii': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'yoyo': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'zap': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
'zec': { r: '^(t)[A-Za-z0-9]{34}$', x: '' },
'zen': { r: '^(z)[0-9A-za-z]{34}$', x: '' },
'zil': { r: '^zil1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38}$', x: '' },
'zrx': { r: '^(0x)[0-9A-Fa-f]{40}$', x: '' },
}

function validateAddress(curr, addr) {
    var a = curr.toLowerCase();
    if (currRegex[a]) {
        return addr.match(currRegex[a].r) ? true : false;
    }
    return true;
};

function validateExternalId(curr, addr) {
    var a = curr.toLowerCase();
    if (currRegex[a] && currRegex[a].x) {
        return addr.match(currRegex[a].x) ? true : false;
    }
    return true;
};

var $ = jQuery;

function enableNext1(yes, data){
    var $x = $('.step-body .step-button-one-wrap .semihideover');
    var $i = $('.step-one .recipient-address #recipientAddress');
    var $e = $('.step-one .recipient-address .recipient-address-error');
    if (yes) {
        $x.hide();
        $i.addClass('valid');
        $i.removeClass('incorrect');
        $e.text('');
    } else {
        $x.show();
        $i.removeClass('valid');
        $i.addClass('incorrect');
        $e.text( (data && data.message && data.message !== '') ? data.message : 'Not a valid address' );
    }
}

function enableExchange(yes){
    var $x = $('.begin-exchange-form .exchange-form-btn-wrap');
    if (yes) {
        $x.removeClass('disabled');
    } else {
        $x.addClass('disabled');
    }
}

function doValidate(addr, extra) {
    var adr = $(addr).val();
    if ($.trim(adr) == '') {
        enableNext1(true);
        return;
    }
    var ex = $('.input-address.payment-id:visible ' + extra).val();
    var cur = $(addr).parents('.recipient-address:first').find('span.recipientCurrency:first').text().trim().toLowerCase();
    validateAddressX(cur, adr, ex);
}

function validateAddressX(cur, adr, ex){
    try {
        $.ajax({ url: [
            apiurl_v2,'validate/address?currency=',cur,'&address=',adr,
            ex ? '&extraId=' : '',
            ex || ''
        ].join('') })
            .done(function(data, textStatus, x) {
                if (x && x.status == 200 && data && data.result == true) {
                    enableNext1(true);
                } else {
                    if (data && data.result == false) {
                        enableNext1(false, data);
                    } else {
                        enableNext1(validateAddress(cur, adr));
                    }
                }
            })
            .fail(function(x, textStatus, err) {
                enableNext1(validateAddress(cur, adr));
            })
    } catch (e) {
        enableNext1(validateAddress(cur, adr));
    }
}

function getValueFrom() {
    return parseFloat($('.exchange-form').find('#fromInput').val());
}

function getCurFrom() {
    return $('.exchange-form').find('.input-search-from .currency-coin-ticker').text().trim().toLowerCase();
}

function getCurTo() {
    return $('.exchange-form').find('.input-search-to .currency-coin-ticker').text().trim().toLowerCase();
}

function hideAmountError() {
    $('.exchange-form .exchange-input.amount .title-error').text('').hide();
    $('.exchange-form .exchange-input.amount .exchange-input-title').show();
}

function showAmountError(txt) {
    $('.exchange-form .exchange-input.amount .exchange-input-title').hide();
    var $e = $('.exchange-form .exchange-input.amount .title-error');
    if (!$e.length) $e = $('<div class="title-error"></div>').appendTo($('.exchange-form .exchange-input.amount'));
    $e.text(txt).show();
    enableExchange(false);
    $('.exchange-form .exchange-input.sum-get #sumInput').val('-');
}

function checkEstimatedAmountShow() {
    if ($('.exchange-form .exchange-input.amount .title-error').is(':visible')) {
        $('.exchange-form .exchange-input.sum-get #sumInput').val('-');
    }
}

var tCheckRange;

function checkRange(n) {
    clearTimeout(tCheckRange);
    tCheckRange = setTimeout(function(){ checkRange_(n) }, 500);
}

function checkRange_(n) {
    var cur1 = getCurFrom();
    var cur2 = getCurTo();
    var num = n || getValueFrom();
    if (!num || cur1 == '' || cur2 == '') return;
    hideAmountError();
    try {
        $.ajax({ url: [apiurl,'exchange-range/',cur1,'_',cur2].join('') })
            .done(function(data, textStatus, x) {
                // console.log('done',{data, textStatus, x});
                if (textStatus == "success" && data) {
                    var mn = parseFloat(data.minAmount || 0);
                    var mx = parseFloat(data.maxAmount || 0);
                    if (mn > 0 && num < mn) {
                        showAmountError(['Minimum amount', mn, cur1.toUpperCase()].join(' '));
                    } else if (mx > 0 && num > mx) {
                        showAmountError(['Maximum amount', mx, cur1.toUpperCase()].join(' '));
                    } else enableExchange(true);
                } else enableExchange(true);
            })
            .fail(function(x, textStatus, err) {
                enableExchange(true);
            })
            .always(function(z, x, c) {
                //
            })
    } catch (e) {
        enableExchange(true);
    }
}

///

jQuery(function($) {

    var tvalidate,
        q_addr = 'input#recipientAddress',
        q_extra = 'input#payment-id'

    $([q_addr, q_extra].join(',')).on('input change blur paste', function(){
        clearTimeout(tvalidate);
        tvalidate = setTimeout(function(){ doValidate(q_addr, q_extra) }, 300);
    });

});
