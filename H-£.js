var bsagpt = (function (e) {
    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var o = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
        (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var o in e)
                    r.d(
                        n,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return n;
        }),
        (r.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 0))
    );
})([
    function (e, t) {
        (window.googletag = window.googletag || {}), (googletag.cmd = googletag.cmd || []);
        var r = document.createElement("script");
        (r.async = !0), (r.type = "text/javascript"), (r.src = "//www.googletagservices.com/tag/js/gpt.js"), r.setAttribute("dropped-by", "bsaoptimize"), document.getElementsByTagName("head")[0].appendChild(r);
    },
]);
/* prebid.js v3.6.0
Updated : 2020-08-04 */
!(function (u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function (e, t, n) {
        for (var r, i, o, a = 0, c = []; a < e.length; a++) (i = e[a]), d[i] && c.push(d[i][0]), (d[i] = 0);
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length; ) c.shift()();
        if (n) for (a = 0; a < n.length; a++) o = f((f.s = n[a]));
        return o;
    };
    var n = {},
        d = { 256: 0 };
    function f(e) {
        if (n[e]) return n[e].exports;
        var t = (n[e] = { i: e, l: !1, exports: {} });
        return u[e].call(t.exports, t, t.exports, f), (t.l = !0), t.exports;
    }
    (f.m = u),
        (f.c = n),
        (f.d = function (e, t, n) {
            f.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n });
        }),
        (f.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return f.d(t, "a", t), t;
        }),
        (f.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (f.p = ""),
        (f.oe = function (e) {
            throw (console.error(e), e);
        }),
        f((f.s = 647));
})({
    0: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            n.d(t, "internal", function () {
                return _;
            }),
            n.d(t, "bind", function () {
                return U;
            }),
            (t.replaceTokenInString = function (i, e, o) {
                return (
                    ee(e, function (e, t) {
                        e = void 0 === e ? "" : e;
                        var n = o + t.toUpperCase() + o,
                            r = new RegExp(n, "g");
                        i = i.replace(r, e);
                    }),
                    i
                );
            }),
            (t.getUniqueIdentifierStr = N),
            (t.generateUUID = function e(t) {
                return t ? (t ^ (k() >> (t / 4))).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
            }),
            (t.getBidIdParameter = function (e, t) {
                if (t && t[e]) return t[e];
                return "";
            }),
            (t.tryAppendQueryString = function (e, t, n) {
                if (n) return (e += t + "=" + encodeURIComponent(n) + "&");
                return e;
            }),
            (t.parseQueryStringParameters = function (e) {
                var t = "";
                for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
                return t;
            }),
            (t.transformAdServerTargetingObj = function (t) {
                return t && 0 < Object.getOwnPropertyNames(t).length
                    ? de(t)
                          .map(function (e) {
                              return "".concat(e, "=").concat(encodeURIComponent(fe(t, e)));
                          })
                          .join("&")
                    : "";
            }),
            (t.getAdUnitSizes = function (e) {
                if (!e) return;
                var t = [];
                if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                    var n = e.mediaTypes.banner.sizes;
                    Array.isArray(n[0]) ? (t = n) : t.push(n);
                } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? (t = e.sizes) : t.push(e.sizes));
                return t;
            }),
            (t.parseSizesInput = function (e) {
                var t = [];
                if ("string" == typeof e) {
                    var n = e.split(","),
                        r = /^(\d)+x(\d)+$/i;
                    if (n) for (var i in n) ne(n, i) && n[i].match(r) && t.push(n[i]);
                } else if ("object" === b(e)) {
                    var o = e.length;
                    if (0 < o)
                        if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(x(e));
                        else for (var a = 0; a < o; a++) t.push(x(e[a]));
                }
                return t;
            }),
            (t.parseGPTSingleSizeArray = x),
            (t.parseGPTSingleSizeArrayToRtbSize = function (e) {
                if (P(e)) return { w: e[0], h: e[1] };
            }),
            (t.getWindowTop = M),
            (t.getWindowSelf = q),
            (t.getWindowLocation = G),
            (t.logMessage = W),
            (t.logInfo = L),
            (t.logWarn = F),
            (t.logError = z),
            (t.hasConsoleLogger = function () {
                return I;
            }),
            (t.debugTurnedOn = H),
            (t.createInvisibleIframe = function () {
                var e = document.createElement("iframe");
                return (
                    (e.id = N()),
                    (e.height = 0),
                    (e.width = 0),
                    (e.border = "0px"),
                    (e.hspace = "0"),
                    (e.vspace = "0"),
                    (e.marginWidth = "0"),
                    (e.marginHeight = "0"),
                    (e.style.border = "0"),
                    (e.scrolling = "no"),
                    (e.frameBorder = "0"),
                    (e.src = "about:blank"),
                    (e.style.display = "none"),
                    e
                );
            }),
            (t.getParameterByName = function (e) {
                var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
                return null !== t ? decodeURIComponent(t[1].replace(/\+/g, " ")) : "";
            }),
            (t.hasValidBidRequest = function (e, n, t) {
                var r = !1;
                function i(e, t) {
                    t === n[o] && (r = !0);
                }
                for (var o = 0; o < n.length; o++) if (((r = !1), ee(e, i), !r)) return z("Params are missing for bid request. One of these required paramaters are missing: " + n, t), !1;
                return !0;
            }),
            (t.addEventHandler = function (e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n);
            }),
            (t.isA = K),
            (t.isFn = J),
            (t.isStr = Y),
            (t.isArray = Q),
            (t.isNumber = $),
            (t.isPlainObject = X),
            (t.isBoolean = function (e) {
                return K(e, E);
            }),
            (t.isEmpty = Z),
            (t.isEmptyStr = function (e) {
                return Y(e) && (!e || 0 === e.length);
            }),
            (t._each = ee),
            (t.contains = function (e, t) {
                if (Z(e)) return !1;
                if (J(e.indexOf)) return -1 !== e.indexOf(t);
                var n = e.length;
                for (; n--; ) if (e[n] === t) return !0;
                return !1;
            }),
            n.d(t, "indexOf", function () {
                return te;
            }),
            (t._map = function (n, r) {
                if (Z(n)) return [];
                if (J(n.map)) return n.map(r);
                var i = [];
                return (
                    ee(n, function (e, t) {
                        i.push(r(e, t, n));
                    }),
                    i
                );
            }),
            (t.hasOwn = ne),
            (t.insertElement = re),
            (t.triggerPixel = ie),
            (t.callBurl = function (e) {
                var t = e.source,
                    n = e.burl;
                t === y.S2S.SRC && n && _.triggerPixel(n);
            }),
            (t.insertHtmlIntoIframe = function (e) {
                if (!e) return;
                var t = document.createElement("iframe");
                (t.id = N()),
                    (t.width = 0),
                    (t.height = 0),
                    (t.hspace = "0"),
                    (t.vspace = "0"),
                    (t.marginWidth = "0"),
                    (t.marginHeight = "0"),
                    (t.style.display = "none"),
                    (t.style.height = "0px"),
                    (t.style.width = "0px"),
                    (t.scrolling = "no"),
                    (t.frameBorder = "0"),
                    (t.allowtransparency = "true"),
                    _.insertElement(t, document, "body"),
                    t.contentWindow.document.open(),
                    t.contentWindow.document.write(e),
                    t.contentWindow.document.close();
            }),
            (t.insertUserSyncIframe = oe),
            (t.createTrackPixelHtml = function (e) {
                if (!e) return "";
                var t = encodeURI(e),
                    n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
                return (n += '<img src="' + t + '"></div>');
            }),
            (t.createTrackPixelIframeHtml = ae),
            (t.getIframeDocument = function (e) {
                if (!e) return;
                var t;
                try {
                    t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument;
                } catch (e) {
                    _.logError("Cannot get iframe document", e);
                }
                return t;
            }),
            (t.getValueString = ce),
            (t.uniques = ue),
            (t.flatten = se),
            (t.getBidRequest = function (n, e) {
                return n
                    ? (e.some(function (e) {
                          var t = c()(e.bids, function (t) {
                              return ["bidId", "adId", "bid_id"].some(function (e) {
                                  return t[e] === n;
                              });
                          });
                          return t && (r = t), t;
                      }),
                      r)
                    : void 0;
                var r;
            }),
            (t.getKeys = de),
            (t.getValue = fe),
            (t.getKeyByValue = function (e, t) {
                for (var n in e) if (e.hasOwnProperty(n) && e[n] === t) return n;
            }),
            (t.getBidderCodes = function () {
                return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits)
                    .map(function (e) {
                        return e.bids
                            .map(function (e) {
                                return e.bidder;
                            })
                            .reduce(se, []);
                    })
                    .reduce(se)
                    .filter(ue);
            }),
            (t.isGptPubadsDefined = function () {
                if (window.googletag && J(window.googletag.pubads) && J(window.googletag.pubads().getSlots)) return !0;
            }),
            n.d(t, "getHighestCpm", function () {
                return le;
            }),
            n.d(t, "getOldestHighestCpmBid", function () {
                return pe;
            }),
            n.d(t, "getLatestHighestCpmBid", function () {
                return ge;
            }),
            (t.shuffle = function (e) {
                var t = e.length;
                for (; 0 < t; ) {
                    var n = Math.floor(Math.random() * t),
                        r = e[--t];
                    (e[t] = e[n]), (e[n] = r);
                }
                return e;
            }),
            (t.adUnitsFilter = function (e, t) {
                return s()(e, t && t.adUnitCode);
            }),
            (t.isSrcdocSupported = function (e) {
                return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent);
            }),
            (t.deepClone = ye),
            (t.inIframe = function () {
                try {
                    return _.getWindowSelf() !== _.getWindowTop();
                } catch (e) {
                    return !0;
                }
            }),
            (t.isSafariBrowser = function () {
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            }),
            (t.replaceAuctionPrice = function (e, t) {
                if (!e) return;
                return e.replace(/\$\{AUCTION_PRICE\}/g, t);
            }),
            (t.timestamp = function () {
                return new Date().getTime();
            }),
            (t.checkCookieSupport = ve),
            (t.cookiesAreEnabled = function () {
                if (_.checkCookieSupport()) return !0;
                return (window.document.cookie = "prebid.cookieTest"), -1 != window.document.cookie.indexOf("prebid.cookieTest");
            }),
            (t.getCookie = function (e) {
                var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
                return t ? decodeURIComponent(t[2]) : null;
            }),
            (t.setCookie = function (e, t, n, r) {
                document.cookie = ""
                    .concat(e, "=")
                    .concat(encodeURIComponent(t))
                    .concat("" !== n ? "; expires=".concat(n) : "", "; path=/")
                    .concat(r ? "; SameSite=".concat(r) : "");
            }),
            (t.localStorageIsEnabled = function () {
                try {
                    return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest");
                } catch (e) {
                    return !1;
                }
            }),
            (t.delayExecution = function (e, t) {
                if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
                var n = 0;
                return function () {
                    ++n === t && e.apply(this, arguments);
                };
            }),
            (t.groupBy = function (e, n) {
                return e.reduce(function (e, t) {
                    return (e[t[n]] = e[t[n]] || []).push(t), e;
                }, {});
            }),
            (t.createContentToExecuteExtScriptInFriendlyFrame = function (e) {
                return e
                    ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;</script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'.concat(
                          e,
                          '"></script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>'
                      )
                    : "";
            }),
            (t.getDefinedParams = function (n, e) {
                return e
                    .filter(function (e) {
                        return n[e];
                    })
                    .reduce(function (e, t) {
                        return g(
                            e,
                            (function (e, t, n) {
                                t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n);
                                return e;
                            })({}, t, n[t])
                        );
                    }, {});
            }),
            (t.isValidMediaTypes = function (e) {
                var t = ["banner", "native", "video"];
                if (
                    !Object.keys(e).every(function (e) {
                        return s()(t, e);
                    })
                )
                    return !1;
                if (e.video && e.video.context) return s()(["instream", "outstream", "adpod"], e.video.context);
                return !0;
            }),
            (t.getBidderRequest = function (e, t, n) {
                return (
                    c()(e, function (e) {
                        return (
                            0 <
                            e.bids.filter(function (e) {
                                return e.bidder === t && e.adUnitCode === n;
                            }).length
                        );
                    }) || { start: null, auctionId: null }
                );
            }),
            (t.getUserConfiguredParams = function (e, t, n) {
                return e
                    .filter(function (e) {
                        return e.code === t;
                    })
                    .map(function (e) {
                        return e.bids;
                    })
                    .reduce(se, [])
                    .filter(function (e) {
                        return e.bidder === n;
                    })
                    .map(function (e) {
                        return e.params || {};
                    });
            }),
            (t.getOrigin = function () {
                return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
            }),
            (t.getDNT = function () {
                return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack;
            }),
            (t.isAdUnitCodeMatchingSlot = function (t) {
                return function (e) {
                    return he(t, e);
                };
            }),
            (t.isSlotMatchingAdUnitCode = function (t) {
                return function (e) {
                    return he(e, t);
                };
            }),
            (t.unsupportedBidderMessage = function (e, t) {
                var n = Object.keys(e.mediaTypes || { banner: "banner" }).join(", ");
                return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ");
            }),
            (t.deletePropertyFromObject = function (e, t) {
                var n = g({}, e);
                return delete n[t], n;
            }),
            (t.isInteger = me),
            (t.convertCamelToUnderscore = function (e) {
                return e
                    .replace(/(?:^|\.?)([A-Z])/g, function (e, t) {
                        return "_" + t.toLowerCase();
                    })
                    .replace(/^_/, "");
            }),
            (t.cleanObj = function (n) {
                return Object.keys(n).reduce(function (e, t) {
                    return void 0 !== n[t] && (e[t] = n[t]), e;
                }, {});
            }),
            (t.pick = function (a, c) {
                return "object" === b(a)
                    ? c.reduce(function (e, t, n) {
                          if ("function" == typeof t) return e;
                          var r = t,
                              i = t.match(/^(.+?)\sas\s(.+?)$/i);
                          i && ((t = i[1]), (r = i[2]));
                          var o = a[t];
                          return "function" == typeof c[n + 1] && (o = c[n + 1](o, e)), void 0 !== o && (e[r] = o), e;
                      }, {})
                    : {};
            }),
            (t.transformBidderParamKeywords = function (e) {
                var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                    i = [];
                return (
                    ee(e, function (e, t) {
                        if (Q(e)) {
                            var n = [];
                            ee(e, function (e) {
                                (!(e = ce(r + "." + t, e)) && "" !== e) || n.push(e);
                            }),
                                (e = n);
                        } else {
                            if (!Y((e = ce(r + "." + t, e)))) return;
                            e = [e];
                        }
                        i.push({ key: t, value: e });
                    }),
                    i
                );
            }),
            (t.convertTypes = function (r, i) {
                return (
                    Object.keys(r).forEach(function (e) {
                        var t, n;
                        i[e] && (J(r[e]) ? (i[e] = r[e](i[e])) : (i[e] = ((t = r[e]), (n = i[e]), "string" === t ? n && n.toString() : "number" === t ? Number(n) : n)), isNaN(i[e]) && delete i.key);
                    }),
                    i
                );
            }),
            (t.setDataInLocalStorage = function (e, t) {
                Se() && window.localStorage.setItem(e, t);
            }),
            (t.getDataFromLocalStorage = function (e) {
                if (Se()) return window.localStorage.getItem(e);
            }),
            (t.removeDataFromLocalStorage = function (e) {
                Se() && window.localStorage.removeItem(e);
            }),
            (t.hasLocalStorage = Se),
            (t.isArrayOfNums = function (e, t) {
                return (
                    Q(e) &&
                    (!t || e.length === t) &&
                    e.every(function (e) {
                        return me(e);
                    })
                );
            }),
            (t.fill = function (e, t) {
                for (var n = [], r = 0; r < t; r++) {
                    var i = X(e) ? ye(e) : e;
                    n.push(i);
                }
                return n;
            }),
            (t.chunk = function (e, t) {
                for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
                    var i = r * t,
                        o = i + t;
                    n.push(e.slice(i, o));
                }
                return n;
            }),
            (t.getMinValueFromArray = function (e) {
                return Math.min.apply(Math, l(e));
            }),
            (t.getMaxValueFromArray = function (e) {
                return Math.max.apply(Math, l(e));
            }),
            (t.compareOn = function (n) {
                return function (e, t) {
                    return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0;
                };
            });
        var r = n(3),
            i = n(115),
            o = n.n(i),
            a = n(12),
            c = n.n(a),
            u = n(11),
            s = n.n(u),
            d = n(116);
        n.d(t, "deepAccess", function () {
            return d.a;
        });
        var f = n(117);
        function l(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return p(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t);
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function p(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function g() {
            return (g =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        function b(e) {
            return (b =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        n.d(t, "deepSetValue", function () {
            return f.a;
        });
        var y = n(5),
            v = "Array",
            h = "String",
            m = "Function",
            S = "Number",
            A = "Object",
            E = "Boolean",
            T = Object.prototype.toString,
            O = Boolean(window.console),
            I = Boolean(O && window.console.log),
            C = Boolean(O && window.console.info),
            w = Boolean(O && window.console.warn),
            j = Boolean(O && window.console.error),
            _ = {
                checkCookieSupport: ve,
                createTrackPixelIframeHtml: ae,
                getWindowSelf: q,
                getWindowTop: M,
                getWindowLocation: G,
                insertUserSyncIframe: oe,
                insertElement: re,
                isFn: J,
                triggerPixel: ie,
                logError: z,
                logWarn: F,
                logMessage: W,
                logInfo: L,
            },
            B = {},
            U =
                function (e, t) {
                    return t;
                }.bind(null, 1, B)() === B
                    ? Function.prototype.bind
                    : function (e) {
                          var t = this,
                              n = Array.prototype.slice.call(arguments, 1);
                          return function () {
                              return t.apply(e, n.concat(Array.prototype.slice.call(arguments)));
                          };
                      };
        var R,
            D =
                ((R = 0),
                function () {
                    return ++R;
                });
        function N() {
            return D() + Math.random().toString(16).substr(2);
        }
        function k() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random();
        }
        function x(e) {
            if (P(e)) return e[0] + "x" + e[1];
        }
        function P(e) {
            return Q(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
        }
        function M() {
            return window.top;
        }
        function q() {
            return window.self;
        }
        function G() {
            return window.location;
        }
        function W() {
            H() && I && console.log.apply(console, V(arguments, "MESSAGE:"));
        }
        function L() {
            H() && C && console.info.apply(console, V(arguments, "INFO:"));
        }
        function F() {
            H() && w && console.warn.apply(console, V(arguments, "WARNING:"));
        }
        function z() {
            H() && j && console.error.apply(console, V(arguments, "ERROR:"));
        }
        function V(e, t) {
            return (e = [].slice.call(e)), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e;
        }
        function H() {
            return !!r.b.getConfig("debug");
        }
        function K(e, t) {
            return T.call(e) === "[object " + t + "]";
        }
        function J(e) {
            return K(e, m);
        }
        function Y(e) {
            return K(e, h);
        }
        function Q(e) {
            return K(e, v);
        }
        function $(e) {
            return K(e, S);
        }
        function X(e) {
            return K(e, A);
        }
        function Z(e) {
            if (!e) return !0;
            if (Q(e) || Y(e)) return !(0 < e.length);
            for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
            return !0;
        }
        function ee(e, t) {
            if (!Z(e)) {
                if (J(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (0 < r) for (; n < r; n++) t(e[n], n, e);
                else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
            }
        }
        var te = (function () {
            if (Array.prototype.indexOf) return Array.prototype.indexOf;
        })();
        function ne(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
        }
        function re(e, t, n, r) {
            var i;
            (t = t || document), (i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head"));
            try {
                if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                    i = i[0];
                    var o = r ? null : i.firstChild;
                    return i.insertBefore(e, o);
                }
            } catch (e) {}
        }
        function ie(e, t) {
            var n = new Image();
            t && _.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), (n.src = e);
        }
        function oe(e, t) {
            var n = _.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && _.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), _.insertElement(i, document, "html", !0);
        }
        function ae(e) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e
                ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)),
                  (t = t && 'sandbox="'.concat(t, '"')),
                  "<iframe "
                      .concat(t, ' id="')
                      .concat(
                          N(),
                          '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="'
                      )
                      .concat(e, '">\n    </iframe>'))
                : "";
        }
        function ce(e, t, n) {
            return null == t ? n : Y(t) ? t : $(t) ? t.toString() : void _.logWarn("Unsuported type for param: " + e + " required type: String");
        }
        function ue(e, t, n) {
            return n.indexOf(e) === t;
        }
        function se(e, t) {
            return e.concat(t);
        }
        function de(e) {
            return Object.keys(e);
        }
        function fe(e, t) {
            return e[t];
        }
        var le = be("timeToRespond", function (e, t) {
                return t < e;
            }),
            pe = be("responseTimestamp", function (e, t) {
                return t < e;
            }),
            ge = be("responseTimestamp", function (e, t) {
                return e < t;
            });
        function be(n, r) {
            return function (e, t) {
                return e.cpm === t.cpm ? (r(e[n], t[n]) ? t : e) : e.cpm < t.cpm ? t : e;
            };
        }
        function ye(e) {
            return o()(e);
        }
        function ve() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0;
        }
        var he = function (e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t;
        };
        function me(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
        }
        function Se() {
            try {
                return !!window.localStorage;
            } catch (e) {
                z("Local storage api disabled");
            }
        }
    },
    1: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.registerBidder = function (t) {
                var n = Array.isArray(t.supportedMediaTypes) ? { supportedMediaTypes: t.supportedMediaTypes } : void 0;
                function r(e) {
                    var t = C(e);
                    a.default.registerBidAdapter(t, e.code, n);
                }
                r(t),
                    Array.isArray(t.aliases) &&
                        t.aliases.forEach(function (e) {
                            (a.default.aliasRegistry[e] = t.code), r(T({}, t, { code: e }));
                        });
            }),
            (t.newBidder = C),
            (t.preloadBidderMappingFile = w),
            (t.getIabSubCategory = function (t, e) {
                var n = a.default.getBidAdapter(t);
                if (n.getSpec().getMappingFileInfo) {
                    var r = n.getSpec().getMappingFileInfo(),
                        i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
                        o = Object(m.getDataFromLocalStorage)(i);
                    if (o) {
                        try {
                            o = JSON.parse(o);
                        } catch (e) {
                            Object(m.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"));
                        }
                        return o.mapping[e] ? o.mapping[e] : null;
                    }
                }
            }),
            (t.isValid = j);
        var r = n(75),
            a = n(7),
            o = n(3),
            y = n(23),
            c = n(33),
            u = n(27),
            s = n(34),
            i = n(5),
            v = n.n(i),
            d = n(8),
            h = n.n(d),
            f = n(11),
            l = n.n(f),
            p = n(4),
            m = n(0),
            g = n(2),
            b = n(13);
        function S(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == c.return || c.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t);
                })(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function A(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function E(e) {
            return (E =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function T() {
            return (T =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var O = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
            I = 1;
        function C(p) {
            return T(new r.a(p.code), {
                getSpec: function () {
                    return Object.freeze(p);
                },
                registerSyncs: g,
                callBids: function (o, a, e, n, c, r) {
                    if (Array.isArray(o.bids)) {
                        var u = {},
                            s = [],
                            t = o.bids.filter(b);
                        if (0 !== t.length) {
                            var d = {};
                            t.forEach(function (e) {
                                (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode);
                            });
                            var i = p.buildRequests(t, o);
                            if (i && 0 !== i.length) {
                                Array.isArray(i) || (i = [i]);
                                var f = Object(m.delayExecution)(r(l), i.length);
                                i.forEach(function (i) {
                                    switch (i.method) {
                                        case "GET":
                                            n(
                                                "".concat(i.url).concat(
                                                    (function (e) {
                                                        if (e) return "?".concat("object" === E(e) ? Object(m.parseQueryStringParameters)(e) : e);
                                                        return "";
                                                    })(i.data)
                                                ),
                                                { success: r(e), error: t },
                                                void 0,
                                                T({ method: "GET", withCredentials: !0 }, i.options)
                                            );
                                            break;
                                        case "POST":
                                            n(i.url, { success: r(e), error: t }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), T({ method: "POST", contentType: "text/plain", withCredentials: !0 }, i.options));
                                            break;
                                        default:
                                            Object(m.logWarn)("Skipping invalid request from ".concat(p.code, ". Request type ").concat(i.type, " must be GET or POST")), f();
                                    }
                                    function e(e, t) {
                                        c(p.code);
                                        try {
                                            e = JSON.parse(e);
                                        } catch (e) {}
                                        var n;
                                        (e = { body: e, headers: { get: t.getResponseHeader.bind(t) } }), s.push(e);
                                        try {
                                            n = p.interpretResponse(e, i);
                                        } catch (e) {
                                            return Object(m.logError)("Bidder ".concat(p.code, " failed to interpret the server's response. Continuing without bids"), null, e), void f();
                                        }
                                        function r(e) {
                                            var t,
                                                n,
                                                r = d[e.requestId];
                                            if (r) {
                                                (e.originalCpm = e.cpm), (e.originalCurrency = e.currency);
                                                var i = T(Object(y.a)(v.a.STATUS.GOOD, r), e);
                                                (t = r.adUnitCode), (n = i), (u[t] = !0), j(t, n, [o]) && a(t, n);
                                            } else Object(m.logWarn)("Bidder ".concat(p.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."));
                                        }
                                        n && (Object(m.isArray)(n) ? n.forEach(r) : r(n)), f(n);
                                    }
                                    function t(e) {
                                        c(p.code), Object(m.logError)("Server call for ".concat(p.code, " failed: ").concat(e, ". Continuing without bids.")), f();
                                    }
                                });
                            } else l();
                        } else l();
                    }
                    function l() {
                        e(), h.a.emit(v.a.EVENTS.BIDDER_DONE, o), g(s, o.gdprConsent, o.uspConsent);
                    }
                },
            });
            function g(e, t, n) {
                if (p.getUserSyncs && !a.default.aliasRegistry[p.code]) {
                    var r = o.b.getConfig("userSync.filterSettings"),
                        i = p.getUserSyncs({ iframeEnabled: !(!r || (!r.iframe && !r.all)), pixelEnabled: !(!r || (!r.image && !r.all)) }, e, t, n);
                    i &&
                        (Array.isArray(i) || (i = [i]),
                        i.forEach(function (e) {
                            c.a.registerSync(e.type, p.code, e.url);
                        }));
                }
            }
            function b(e) {
                return !!p.isBidRequestValid(e) || (Object(m.logWarn)("Invalid bid sent to bidder ".concat(p.code, ": ").concat(JSON.stringify(e))), !1);
            }
        }
        function w(e, t) {
            if (!o.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
            t
                .filter(function (e) {
                    return Object(m.deepAccess)(e, "mediaTypes.video.context") === g.a;
                })
                .map(function (e) {
                    return e.bids.map(function (e) {
                        return e.bidder;
                    });
                })
                .reduce(m.flatten, [])
                .filter(m.uniques)
                .forEach(function (n) {
                    var e = a.default.getBidAdapter(n);
                    if (e.getSpec().getMappingFileInfo) {
                        var t = e.getSpec().getMappingFileInfo(),
                            r = t.refreshInDays ? t.refreshInDays : I,
                            i = t.localStorageKey ? t.localStorageKey : e.getSpec().code,
                            o = Object(m.getDataFromLocalStorage)(i);
                        (!o || Object(m.timestamp)() < o.lastUpdated + 24 * r * 60 * 60 * 1e3) &&
                            Object(p.a)(t.url, {
                                success: function (e) {
                                    try {
                                        e = JSON.parse(e);
                                        var t = { lastUpdated: Object(m.timestamp)(), mapping: e.mapping };
                                        Object(m.setDataInLocalStorage)(i, JSON.stringify(t));
                                    } catch (e) {
                                        Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"));
                                    }
                                },
                                error: function () {
                                    Object(m.logError)("Failed to load ".concat(n, " bidder translation file"));
                                },
                            });
                    }
                }),
                e.call(this, t);
        }
        function j(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e);
            }
            return e
                ? t
                    ? ((i = Object.keys(t)),
                      O.every(function (e) {
                          return l()(i, e) && !l()([void 0, null], t[e]);
                      })
                          ? "native" !== t.mediaType || Object(u.f)(t, n)
                              ? "video" !== t.mediaType || Object(s.d)(t, n)
                                  ? !(
                                        "banner" === t.mediaType &&
                                        !(function (e, t, n) {
                                            if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return (t.width = parseInt(t.width, 10)), (t.height = parseInt(t.height, 10)), 1;
                                            var r = Object(m.getBidderRequest)(n, t.bidderCode, e),
                                                i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                                                o = Object(m.parseSizesInput)(i);
                                            if (1 === o.length) {
                                                var a = S(o[0].split("x"), 2),
                                                    c = a[0],
                                                    u = a[1];
                                                return (t.width = parseInt(c, 10)), (t.height = parseInt(u, 10)), 1;
                                            }
                                        })(e, t, n)
                                    ) || (Object(m.logError)(r("Banner bids require a width and height")), !1)
                                  : (Object(m.logError)(r("Video bid does not have required vastUrl or renderer property")), !1)
                              : (Object(m.logError)(r("Native bid missing some required properties.")), !1)
                          : (Object(m.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1))
                    : (Object(m.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1)
                : (Object(m.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i;
        }
        Object(b.a)("checkAdUnitSetup").before(w);
    },
    10: function (e, t, n) {
        "use strict";
        (t.a = i),
            (t.c = function (e) {
                return !(!e || !e.url);
            }),
            (t.b = function (e, t) {
                e.render(t);
            });
        var f = n(28),
            l = n(0),
            r = n(12),
            p = n.n(r),
            g = "outstream";
        function i(e) {
            var t,
                n,
                r,
                i = this,
                o = e.url,
                a = e.config,
                c = e.id,
                u = e.callback,
                s = e.loaded,
                d = e.adUnitCode;
            (this.url = o),
                (this.config = a),
                (this.handlers = {}),
                (this.id = c),
                (this.loaded = s),
                (this.cmd = []),
                (this.push = function (e) {
                    "function" == typeof e ? (i.loaded ? e.call() : i.cmd.push(e)) : l.logError("Commands given to Renderer.push must be wrapped in a function");
                }),
                (this.callback =
                    u ||
                    function () {
                        (i.loaded = !0), i.process();
                    }),
                (t = d),
                (n = pbjs.adUnits),
                (r = p()(n, function (e) {
                    return e.code === t;
                })) &&
                r.renderer &&
                r.renderer.url &&
                r.renderer.render
                    ? l.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(d))
                    : Object(f.a)(o, g, this.callback);
        }
        (i.install = function (e) {
            return new i({ url: e.url, config: e.config, id: e.id, callback: e.callback, loaded: e.loaded, adUnitCode: e.adUnitCode });
        }),
            (i.prototype.getConfig = function () {
                return this.config;
            }),
            (i.prototype.setRender = function (e) {
                this.render = e;
            }),
            (i.prototype.setEventHandlers = function (e) {
                this.handlers = e;
            }),
            (i.prototype.handleVideoEvent = function (e) {
                var t = e.id,
                    n = e.eventName;
                "function" == typeof this.handlers[n] && this.handlers[n](), l.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n));
            }),
            (i.prototype.process = function () {
                for (; 0 < this.cmd.length; )
                    try {
                        this.cmd.shift().call();
                    } catch (e) {
                        l.logError("Error processing Renderer command: ", e);
                    }
            });
    },
    100: function (e, t, n) {
        "use strict";
        var r = n(40),
            i = n(65),
            o = n(31),
            a = n(49);
        (e.exports = n(50)(
            Array,
            "Array",
            function (e, t) {
                (this._t = a(e)), (this._i = 0), (this._k = t);
            },
            function () {
                var e = this._t,
                    t = this._k,
                    n = this._i++;
                return !e || n >= e.length ? ((this._t = void 0), i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
            },
            "values"
        )),
            (o.Arguments = o.Array),
            r("keys"),
            r("values"),
            r("entries");
    },
    101: function (e, t, n) {
        "use strict";
        var r = n(102),
            i = n(73);
        e.exports = n(104)(
            "Set",
            function (t) {
                return function (e) {
                    return t(this, 0 < arguments.length ? e : void 0);
                };
            },
            {
                add: function (e) {
                    return r.def(i(this, "Set"), (e = 0 === e ? 0 : e), e);
                },
            },
            r
        );
    },
    102: function (e, t, n) {
        "use strict";
        function a(e, t) {
            var n,
                r = g(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n) if (n.k == t) return n;
        }
        var c = n(19).f,
            u = n(63),
            s = n(66),
            d = n(26),
            f = n(67),
            l = n(41),
            r = n(50),
            i = n(65),
            o = n(103),
            p = n(22),
            g = n(72).fastKey,
            b = n(73),
            y = p ? "_s" : "size";
        e.exports = {
            getConstructor: function (e, o, n, r) {
                var i = e(function (e, t) {
                    f(e, i, o, "_i"), (e._t = o), (e._i = u(null)), (e._f = void 0), (e._l = void 0), (e[y] = 0), null != t && l(t, n, e[r], e);
                });
                return (
                    s(i.prototype, {
                        clear: function () {
                            for (var e = b(this, o), t = e._i, n = e._f; n; n = n.n) (n.r = !0), n.p && (n.p = n.p.n = void 0), delete t[n.i];
                            (e._f = e._l = void 0), (e[y] = 0);
                        },
                        delete: function (e) {
                            var t = b(this, o),
                                n = a(t, e);
                            if (n) {
                                var r = n.n,
                                    i = n.p;
                                delete t._i[n.i], (n.r = !0), i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[y]--;
                            }
                            return !!n;
                        },
                        forEach: function (e, t) {
                            b(this, o);
                            for (var n, r = d(e, 1 < arguments.length ? t : void 0, 3); (n = n ? n.n : this._f); ) for (r(n.v, n.k, this); n && n.r; ) n = n.p;
                        },
                        has: function (e) {
                            return !!a(b(this, o), e);
                        },
                    }),
                    p &&
                        c(i.prototype, "size", {
                            get: function () {
                                return b(this, o)[y];
                            },
                        }),
                    i
                );
            },
            def: function (e, t, n) {
                var r,
                    i,
                    o = a(e, t);
                return o ? (o.v = n) : ((e._l = o = { i: (i = g(t, !0)), k: t, v: n, p: (r = e._l), n: void 0, r: !1 }), e._f || (e._f = o), r && (r.n = o), e[y]++, "F" !== i && (e._i[i] = o)), e;
            },
            getEntry: a,
            setStrong: function (e, n, t) {
                r(
                    e,
                    n,
                    function (e, t) {
                        (this._t = b(e, n)), (this._k = t), (this._l = void 0);
                    },
                    function () {
                        for (var e = this, t = e._k, n = e._l; n && n.r; ) n = n.p;
                        return e._t && (e._l = n = n ? n.n : e._t._f) ? i(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : ((e._t = void 0), i(1));
                    },
                    t ? "entries" : "values",
                    !t,
                    !0
                ),
                    o(n);
            },
        };
    },
    103: function (e, t, n) {
        "use strict";
        var r = n(18),
            i = n(16),
            o = n(19),
            a = n(22),
            c = n(14)("species");
        e.exports = function (e) {
            var t = "function" == typeof i[e] ? i[e] : r[e];
            a &&
                t &&
                !t[c] &&
                o.f(t, c, {
                    configurable: !0,
                    get: function () {
                        return this;
                    },
                });
        };
    },
    104: function (e, t, n) {
        "use strict";
        var f = n(18),
            l = n(15),
            p = n(72),
            g = n(36),
            b = n(21),
            y = n(66),
            v = n(41),
            h = n(67),
            m = n(17),
            S = n(52),
            A = n(19).f,
            E = n(45)(0),
            T = n(22);
        e.exports = function (n, e, t, r, i, o) {
            var a = f[n],
                c = a,
                u = i ? "set" : "add",
                s = c && c.prototype,
                d = {};
            return (
                T &&
                "function" == typeof c &&
                (o ||
                    (s.forEach &&
                        !g(function () {
                            new c().entries().next();
                        })))
                    ? ((c = e(function (e, t) {
                          h(e, c, n, "_c"), (e._c = new a()), null != t && v(t, i, e[u], e);
                      })),
                      E("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function (r) {
                          var i = "add" == r || "set" == r;
                          r in s &&
                              (!o || "clear" != r) &&
                              b(c.prototype, r, function (e, t) {
                                  if ((h(this, c, r), !i && o && !m(e))) return "get" == r && void 0;
                                  var n = this._c[r](0 === e ? 0 : e, t);
                                  return i ? this : n;
                              });
                      }),
                      o ||
                          A(c.prototype, "size", {
                              get: function () {
                                  return this._c.size;
                              },
                          }))
                    : ((c = r.getConstructor(e, n, i, u)), y(c.prototype, t), (p.NEED = !0)),
                S(c, n),
                (d[n] = c),
                l(l.G + l.W + l.F, d),
                o || r.setStrong(c, n, i),
                c
            );
        };
    },
    105: function (e, t, n) {
        var r = n(15);
        r(r.P + r.R, "Set", { toJSON: n(106)("Set") });
    },
    106: function (e, t, n) {
        var r = n(71),
            i = n(107);
        e.exports = function (e) {
            return function () {
                if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
                return i(this);
            };
        };
    },
    107: function (e, t, n) {
        var r = n(41);
        e.exports = function (e, t) {
            var n = [];
            return r(e, !1, n.push, n, t), n;
        };
    },
    108: function (e, t, n) {
        n(109)("Set");
    },
    109: function (e, t, n) {
        "use strict";
        var r = n(15);
        e.exports = function (e) {
            r(r.S, e, {
                of: function () {
                    for (var e = arguments.length, t = new Array(e); e--; ) t[e] = arguments[e];
                    return new this(t);
                },
            });
        };
    },
    11: function (e, t, n) {
        n(88), (e.exports = n(16).Array.includes);
    },
    110: function (e, t, n) {
        n(111)("Set");
    },
    111: function (e, t, n) {
        "use strict";
        var r = n(15),
            u = n(55),
            s = n(26),
            d = n(41);
        e.exports = function (e) {
            r(r.S, e, {
                from: function (e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        c = t;
                    return (
                        u(this),
                        (r = void 0 !== c) && u(c),
                        null == e
                            ? new this()
                            : ((i = []),
                              r
                                  ? ((o = 0),
                                    (a = s(c, n, 2)),
                                    d(e, !1, function (e) {
                                        i.push(a(e, o++));
                                    }))
                                  : d(e, !1, i.push, i),
                              new this(i))
                    );
                },
            });
        };
    },
    112: function (e, t, n) {
        "use strict";
        var g = n(26),
            r = n(15),
            b = n(46),
            y = n(68),
            v = n(69),
            h = n(39),
            m = n(113),
            S = n(70);
        r(
            r.S +
                r.F *
                    !n(114)(function (e) {
                        Array.from(e);
                    }),
            "Array",
            {
                from: function (e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        c = b(e),
                        u = "function" == typeof this ? this : Array,
                        s = arguments.length,
                        d = 1 < s ? t : void 0,
                        f = void 0 !== d,
                        l = 0,
                        p = S(c);
                    if ((f && (d = g(d, 2 < s ? n : void 0, 2)), null == p || (u == Array && v(p)))) for (i = new u((r = h(c.length))); l < r; l++) m(i, l, f ? d(c[l], l) : c[l]);
                    else for (a = p.call(c), i = new u(); !(o = a.next()).done; l++) m(i, l, f ? y(a, d, [o.value, l], !0) : o.value);
                    return (i.length = l), i;
                },
            }
        );
    },
    113: function (e, t, n) {
        "use strict";
        var r = n(19),
            i = n(44);
        e.exports = function (e, t, n) {
            t in e ? r.f(e, t, i(0, n)) : (e[t] = n);
        };
    },
    114: function (e, t, n) {
        var o = n(14)("iterator"),
            a = !1;
        try {
            var r = [7][o]();
            (r.return = function () {
                a = !0;
            }),
                Array.from(r, function () {
                    throw 2;
                });
        } catch (e) {}
        e.exports = function (e, t) {
            if (!t && !a) return !1;
            var n = !1;
            try {
                var r = [7],
                    i = r[o]();
                (i.next = function () {
                    return { done: (n = !0) };
                }),
                    (r[o] = function () {
                        return i;
                    }),
                    e(r);
            } catch (e) {}
            return n;
        };
    },
    115: function (e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i;
            }
            return n;
        };
    },
    116: function (e, t, n) {
        "use strict";
        t.a = function (e, t, n, r, i) {
            for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
            return e === i ? n : e;
        };
    },
    117: function (e, t, n) {
        "use strict";
        t.a = function (e, t, n) {
            t.split && (t = t.split("."));
            for (var r, i = 0, o = t.length, a = e; i < o; ++i) (r = a[t[i]]), (a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf(".") && -1 < +t[i + 1] ? [] : {});
        };
    },
    118: function (e, t) {
        (h.SYNC = 1), (h.ASYNC = 2), (h.QUEUE = 4);
        var g = "fun-hooks";
        var n = Object.freeze({ useProxy: !0, ready: 0 }),
            b = new WeakMap(),
            r =
                "2,1,0" ===
                [1]
                    .reduce(function (e, t, n) {
                        return [e, t, n];
                    }, 2)
                    .toString()
                    ? Array.prototype.reduce
                    : function (e, t) {
                          var n,
                              r = Object(this),
                              i = r.length >>> 0,
                              o = 0;
                          if (t) n = t;
                          else {
                              for (; o < i && !(o in r); ) o++;
                              n = r[o++];
                          }
                          for (; o < i; ) o in r && (n = e(n, r[o], o, r)), o++;
                          return n;
                      };
        function y(e, t) {
            return Array.prototype.slice.call(e, t);
        }
        var v =
            Object.assign ||
            function (e) {
                return r.call(
                    y(arguments, 1),
                    function (t, n) {
                        return (
                            n &&
                                Object.keys(n).forEach(function (e) {
                                    t[e] = n[e];
                                }),
                            t
                        );
                    },
                    e
                );
            };
        function h(u) {
            var s,
                e = {},
                d = [];
            function t(e, t) {
                return "function" == typeof e
                    ? f.call(null, "sync", e, t)
                    : "string" == typeof e && "function" == typeof t
                    ? f.apply(null, arguments)
                    : "object" == typeof e
                    ? function (o, e, a) {
                          var t = !0;
                          void 0 === e && ((e = Object.getOwnPropertyNames(o)), (t = !1));
                          var c = {},
                              n = ["constructor"];
                          for (
                              ;
                              (e = e.filter(function (e) {
                                  return !("function" != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/));
                              })).forEach(function (e) {
                                  var t = e.split(":"),
                                      n = t[0],
                                      r = t[1] || "sync";
                                  if (!c[n]) {
                                      var i = o[n];
                                      c[n] = o[n] = f(r, i, a ? [a, n] : void 0);
                                  }
                              }),
                                  (o = Object.getPrototypeOf(o)),
                                  t && o;

                          );
                          return c;
                      }.apply(null, arguments)
                    : void 0;
            }
            function l(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return r.call(
                    a,
                    function (t, n, e) {
                        var r = t[n],
                            i = !1;
                        return (
                            r ||
                            (e === a.length - 1
                                ? (s ||
                                      d.push(function () {
                                          i || console.warn(g + ": referenced '" + o + "' but it was never created");
                                      }),
                                  (t[n] = p(function (e) {
                                      (t[n] = e), (i = !0);
                                  })))
                                : (t[n] = {}))
                        );
                    },
                    e
                );
            }
            function p(r) {
                var o = [],
                    a = [],
                    c = function () {},
                    e = {
                        before: function (e, t) {
                            return n.call(this, o, "before", e, t);
                        },
                        after: function (e, t) {
                            return n.call(this, a, "after", e, t);
                        },
                        getHooks: function (n) {
                            var e = o.concat(a);
                            return (
                                "object" == typeof n &&
                                    (e = e.filter(function (t) {
                                        return Object.keys(n).every(function (e) {
                                            return t[e] === n[e];
                                        });
                                    })),
                                v(e, {
                                    remove: function () {
                                        return (
                                            e.forEach(function (e) {
                                                e.remove();
                                            }),
                                            this
                                        );
                                    },
                                })
                            );
                        },
                        removeAll: function () {
                            return this.getHooks().remove();
                        },
                    },
                    t = {
                        install: function (e, t, n) {
                            (this.type = e), (c = n)(o, a), r && r(t);
                        },
                    };
                return b.set(e.after, t), e;
                function n(t, e, n, r) {
                    var i = {
                        hook: n,
                        type: e,
                        priority: r || 10,
                        remove: function () {
                            var e = t.indexOf(i);
                            -1 !== e && (t.splice(e, 1), c(o, a));
                        },
                    };
                    return (
                        t.push(i),
                        t.sort(function (e, t) {
                            return t.priority - e.priority;
                        }),
                        c(o, a),
                        this
                    );
                }
            }
            function f(f, e, t) {
                var n = e.after && b.get(e.after);
                if (n) {
                    if (n.type !== f) throw g + ": recreated hookable with different type";
                    return e;
                }
                var r,
                    i,
                    o = t ? l(t) : p(),
                    a = {
                        get: function (e, t) {
                            return o[t] || Reflect.get.apply(Reflect, arguments);
                        },
                    };
                return (
                    s || d.push(c),
                    u.useProxy && "function" == typeof Proxy && Proxy.revocable
                        ? (i = new Proxy(e, a))
                        : v(
                              (i = function () {
                                  return a.apply ? a.apply(e, this, y(arguments)) : e.apply(this, arguments);
                              }),
                              o
                          ),
                    b.get(i.after).install(f, i, function (e, t) {
                        var s,
                            d = [];
                        r =
                            e.length || t.length
                                ? (e.forEach(n),
                                  (s = d.push(void 0) - 1),
                                  t.forEach(n),
                                  function (n, r, e) {
                                      var i,
                                          o = 0,
                                          a = "async" === f && "function" == typeof e[e.length - 1] && e.pop();
                                      function c(e) {
                                          "sync" === f ? (i = e) : a && a.apply(null, arguments);
                                      }
                                      function u(e) {
                                          if (d[o]) {
                                              var t = y(arguments);
                                              return (u.bail = c), t.unshift(u), d[o++].apply(r, t);
                                          }
                                          "sync" === f ? (i = e) : a && a.apply(null, arguments);
                                      }
                                      return (
                                          (d[s] = function () {
                                              var e = y(arguments, 1);
                                              "async" === f && a && (delete u.bail, e.push(u));
                                              var t = n.apply(r, e);
                                              "sync" === f && u(t);
                                          }),
                                          u.apply(null, e),
                                          i
                                      );
                                  })
                                : void 0;
                        function n(e) {
                            d.push(e.hook);
                        }
                        c();
                    }),
                    i
                );
                function c() {
                    !s && ("sync" !== f || u.ready & h.SYNC) && ("async" !== f || u.ready & h.ASYNC)
                        ? "sync" !== f && u.ready & h.QUEUE
                            ? (a.apply = function () {
                                  var e = arguments;
                                  d.push(function () {
                                      i.apply(e[1], e[2]);
                                  });
                              })
                            : (a.apply = function () {
                                  throw g + ": hooked function not ready";
                              })
                        : (a.apply = r);
                }
            }
            return (
                (u = v({}, n, u)).ready
                    ? (t.ready = function () {
                          (s = !0),
                              (function (e) {
                                  for (var t; (t = e.shift()); ) t();
                              })(d);
                      })
                    : (s = !0),
                (t.get = l),
                t
            );
        }
        e.exports = h;
    },
    12: function (e, t, n) {
        n(82), (e.exports = n(16).Array.find);
    },
    13: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return a;
        }),
            n.d(t, "a", function () {
                return c;
            }),
            (t.d = function (e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
                0 === e.getHooks({ hook: t }).length && e.before(t, n);
            }),
            (t.c = function (e, n) {
                a(
                    "async",
                    function (e) {
                        e.forEach(function (e) {
                            return n.apply(
                                void 0,
                                (function (e) {
                                    if (Array.isArray(e)) return o(e);
                                })((t = e)) ||
                                    (function (e) {
                                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                                    })(t) ||
                                    (function (e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return o(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            return (
                                                "Object" === n && e.constructor && (n = e.constructor.name),
                                                "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                                            );
                                        }
                                    })(t) ||
                                    (function () {
                                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                    })()
                            );
                            var t;
                        });
                    },
                    e
                )([]);
            }),
            (t.e = function (e) {
                for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                c(e).before(function (e, t) {
                    t.push(n), e(t);
                });
            });
        var r = n(118),
            i = n.n(r);
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var a = i()({ ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE }),
            c = a.get;
    },
    14: function (e, t, n) {
        var r = n(58)("wks"),
            i = n(48),
            o = n(18).Symbol,
            a = "function" == typeof o;
        (e.exports = function (e) {
            return r[e] || (r[e] = (a && o[e]) || (a ? o : i)("Symbol." + e));
        }).store = r;
    },
    15: function (e, t, n) {
        var b = n(18),
            y = n(16),
            v = n(26),
            h = n(21),
            m = n(30),
            S = "prototype",
            A = function (e, t, n) {
                var r,
                    i,
                    o,
                    a = e & A.F,
                    c = e & A.G,
                    u = e & A.S,
                    s = e & A.P,
                    d = e & A.B,
                    f = e & A.W,
                    l = c ? y : y[t] || (y[t] = {}),
                    p = l[S],
                    g = c ? b : u ? b[t] : (b[t] || {})[S];
                for (r in (c && (n = t), n))
                    ((i = !a && g && void 0 !== g[r]) && m(l, r)) ||
                        ((o = i ? g[r] : n[r]),
                        (l[r] =
                            c && "function" != typeof g[r]
                                ? n[r]
                                : d && i
                                ? v(o, b)
                                : f && g[r] == o
                                ? (function (r) {
                                      function e(e, t, n) {
                                          if (this instanceof r) {
                                              switch (arguments.length) {
                                                  case 0:
                                                      return new r();
                                                  case 1:
                                                      return new r(e);
                                                  case 2:
                                                      return new r(e, t);
                                              }
                                              return new r(e, t, n);
                                          }
                                          return r.apply(this, arguments);
                                      }
                                      return (e[S] = r[S]), e;
                                  })(o)
                                : s && "function" == typeof o
                                ? v(Function.call, o)
                                : o),
                        s && (((l.virtual || (l.virtual = {}))[r] = o), e & A.R && p && !p[r] && h(p, r, o)));
            };
        (A.F = 1), (A.G = 2), (A.S = 4), (A.P = 8), (A.B = 16), (A.W = 32), (A.U = 64), (A.R = 128), (e.exports = A);
    },
    16: function (e, t) {
        var n = (e.exports = { version: "2.6.11" });
        "number" == typeof __e && (__e = n);
    },
    162: function (e, t, n) {
        "use strict";
        var r = n(15),
            i = n(45)(6),
            o = "findIndex",
            a = !0;
        o in [] &&
            Array(1)[o](function () {
                a = !1;
            }),
            r(r.P + r.F * a, "Array", {
                findIndex: function (e, t) {
                    return i(this, e, 1 < arguments.length ? t : void 0);
                },
            }),
            n(40)(o);
    },
    165: function (e, t, n) {
        "use strict";
        t.a = function () {
            window.addEventListener("message", a, !1);
        };
        var r = n(8),
            b = n.n(r),
            y = n(27),
            i = n(5),
            v = (n.n(i), n(0)),
            h = n(24),
            o = n(12),
            m = n.n(o),
            S = n(10),
            A = i.EVENTS.BID_WON;
        function a(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                c,
                u,
                s,
                d,
                f = e.message ? "message" : "data",
                l = {};
            try {
                l = JSON.parse(e[f]);
            } catch (e) {
                return;
            }
            if (l && l.adId) {
                var p = m()(h.a.getBidsReceived(), function (e) {
                    return e.adId === l.adId;
                });
                if (
                    (p &&
                        "Prebid Request" === l.message &&
                        ((t = p),
                        (n = l.adServerDomain),
                        (r = e.source),
                        (i = t.adId),
                        (o = t.ad),
                        (a = t.adUrl),
                        (c = t.width),
                        (u = t.height),
                        (s = t.renderer),
                        (d = t.cpm),
                        Object(S.c)(s)
                            ? Object(S.b)(s, t)
                            : i &&
                              ((function (e) {
                                  var i = e.adUnitCode,
                                      r = e.width,
                                      o = e.height;
                                  function a(e) {
                                      var t,
                                          n =
                                              ((t = i),
                                              window.googletag
                                                  ? (function (e) {
                                                        return m()(window.googletag.pubads().getSlots().filter(Object(v.isSlotMatchingAdUnitCode)(e)), function (e) {
                                                            return e;
                                                        }).getSlotElementId();
                                                    })(t)
                                                  : window.apntag
                                                  ? (function (e) {
                                                        var t = window.apntag.getTag(e);
                                                        return t && t.targetId;
                                                    })(t)
                                                  : t),
                                          r = document.getElementById(n);
                                      return r && r.querySelector(e);
                                  }
                                  ["div", "iframe"].forEach(function (e) {
                                      var t = a(e + ':not([style*="display: none"])');
                                      if (t) {
                                          var n = t.style;
                                          (n.width = r + "px"), (n.height = o + "px");
                                      } else Object(v.logWarn)("Unable to locate matching page element for adUnitCode ".concat(i, ".  Can't resize it to ad's dimensions.  Please review setup."));
                                  });
                              })(t),
                              r.postMessage(JSON.stringify({ message: "Prebid Response", ad: Object(v.replaceAuctionPrice)(o, d), adUrl: Object(v.replaceAuctionPrice)(a, d), adId: i, width: c, height: u }), n)),
                        h.a.addWinningBid(p),
                        b.a.emit(A, p)),
                    p && "Prebid Native" === l.message)
                ) {
                    if ("assetRequest" === l.action) {
                        var g = Object(y.c)(l, p);
                        return void e.source.postMessage(JSON.stringify(g), e.origin);
                    }
                    if ("click" === Object(y.b)(l, p)) return;
                    h.a.addWinningBid(p), b.a.emit(A, p);
                }
            }
        }
    },
    166: function (e, t, n) {
        "use strict";
        t.a = function (e) {
            var t;
            try {
                (e = e || window.sessionStorage), (t = JSON.parse(e.getItem(u)));
            } catch (e) {}
            t && p(t, !0);
        };
        var r,
            i,
            o = n(3),
            a = n(0),
            c = n(42),
            u = "pbjs:debugging";
        function s(e) {
            Object(a.logMessage)("DEBUG: " + e);
        }
        function d(e) {
            Object(a.logWarn)("DEBUG: " + e);
        }
        function f(e) {
            (r = function (e, t, n) {
                if (b(this.bidders, n.bidderCode)) return void d("bidder '".concat(n.bidderCode, "' excluded from auction by bidder overrides"));
                Array.isArray(this.bids) &&
                    this.bids.forEach(function (e) {
                        g(e, n.bidderCode, t) || y(e, n, "bidder");
                    });
                e(t, n);
            }.bind(e)),
                c.c.before(r, 5),
                (i = function (e, t) {
                    var r = this,
                        n = t.filter(function (e) {
                            return !b(r.bidders, e.bidderCode) || (d("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")), !1);
                        });
                    Array.isArray(r.bidRequests) &&
                        n.forEach(function (n) {
                            r.bidRequests.forEach(function (t) {
                                n.bids.forEach(function (e) {
                                    g(t, n.bidderCode, e.adUnitCode) || y(t, e, "bidRequest");
                                });
                            });
                        });
                    e(n);
                }.bind(e)),
                c.e.before(i, 5);
        }
        function l() {
            c.c.getHooks({ hook: r }).remove(), c.e.getHooks({ hook: i }).remove();
        }
        function p(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            o.b.setConfig({ debug: !0 }), l(), f(e), s("bidder overrides enabled".concat(n ? " from session" : ""));
        }
        function g(e, t, n) {
            return (e.bidder && e.bidder !== t) || !(!e.adUnitCode || e.adUnitCode === n);
        }
        function b(e, t) {
            return Array.isArray(e) && -1 === e.indexOf(t);
        }
        function y(n, e, r) {
            return Object.keys(n)
                .filter(function (e) {
                    return -1 === ["adUnitCode", "bidder"].indexOf(e);
                })
                .reduce(function (e, t) {
                    return s("bidder overrides changed '".concat(e.adUnitCode, "/").concat(e.bidderCode, "' ").concat(r, ".").concat(t, " from '").concat(e[t], "' to '").concat(n[t], "'")), (e[t] = n[t]), e;
                }, e);
        }
        function v(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e));
                } catch (e) {}
                p(e);
            } else {
                l(), s("bidder overrides disabled");
                try {
                    window.sessionStorage.removeItem(u);
                } catch (e) {}
            }
        }
        o.b.getConfig("debugging", function (e) {
            return v(e.debugging);
        });
    },
    17: function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    18: function (e, t) {
        var n = (e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
        "number" == typeof __g && (__g = n);
    },
    19: function (e, t, n) {
        var r = n(29),
            i = n(83),
            o = n(84),
            a = Object.defineProperty;
        t.f = n(22)
            ? Object.defineProperty
            : function (e, t, n) {
                  if ((r(e), (t = o(t, !0)), r(n), i))
                      try {
                          return a(e, t, n);
                      } catch (e) {}
                  if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                  return "value" in n && (e[t] = n.value), e;
              };
    },
    2: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return r;
        }),
            n.d(t, "d", function () {
                return i;
            }),
            n.d(t, "b", function () {
                return o;
            }),
            n.d(t, "a", function () {
                return a;
            });
        var r = "native",
            i = "video",
            o = "banner",
            a = "adpod";
    },
    20: function (e, t, n) {
        "use strict";
        (t.a = function () {
            return window.pbjs;
        }),
            (window.pbjs = window.pbjs || {}),
            (window.pbjs.cmd = window.pbjs.cmd || []),
            (window.pbjs.que = window.pbjs.que || []),
            (window._pbjsGlobals = window._pbjsGlobals || []),
            window._pbjsGlobals.push("pbjs");
    },
    21: function (e, t, n) {
        var r = n(19),
            i = n(44);
        e.exports = n(22)
            ? function (e, t, n) {
                  return r.f(e, t, i(1, n));
              }
            : function (e, t, n) {
                  return (e[t] = n), e;
              };
    },
    22: function (e, t, n) {
        e.exports = !n(36)(function () {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    23: function (e, t, n) {
        "use strict";
        t.a = function (e, t) {
            return new r(e, t);
        };
        var i = n(0);
        function r(e, t) {
            var n = (t && t.src) || "client",
                r = e || 0;
            (this.bidderCode = (t && t.bidder) || ""),
                (this.width = 0),
                (this.height = 0),
                (this.statusMessage = (function () {
                    switch (r) {
                        case 0:
                            return "Pending";
                        case 1:
                            return "Bid available";
                        case 2:
                            return "Bid returned empty or error response";
                        case 3:
                            return "Bid timed out";
                    }
                })()),
                (this.adId = i.getUniqueIdentifierStr()),
                (this.requestId = t && t.bidId),
                (this.mediaType = "banner"),
                (this.source = n),
                (this.getStatusCode = function () {
                    return r;
                }),
                (this.getSize = function () {
                    return this.width + "x" + this.height;
                });
        }
    },
    24: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return u;
        });
        var r = n(0),
            s = n(42),
            i = n(12),
            o = n.n(i),
            a = n(5);
        var d,
            c,
            u =
                ((d = []),
                ((c = {}).addWinningBid = function (t) {
                    var e = o()(d, function (e) {
                        return e.getAuctionId() === t.auctionId;
                    });
                    e ? ((t.status = a.BID_STATUS.RENDERED), e.addWinningBid(t)) : Object(r.logWarn)("Auction not found when adding winning bid");
                }),
                (c.getAllWinningBids = function () {
                    return d
                        .map(function (e) {
                            return e.getWinningBids();
                        })
                        .reduce(r.flatten, []);
                }),
                (c.getBidsRequested = function () {
                    return d
                        .map(function (e) {
                            return e.getBidRequests();
                        })
                        .reduce(r.flatten, []);
                }),
                (c.getNoBids = function () {
                    return d
                        .map(function (e) {
                            return e.getNoBids();
                        })
                        .reduce(r.flatten, []);
                }),
                (c.getBidsReceived = function () {
                    return d
                        .map(function (e) {
                            if (e.getAuctionStatus() === s.a) return e.getBidsReceived();
                        })
                        .reduce(r.flatten, [])
                        .filter(function (e) {
                            return e;
                        });
                }),
                (c.getAdUnits = function () {
                    return d
                        .map(function (e) {
                            return e.getAdUnits();
                        })
                        .reduce(r.flatten, []);
                }),
                (c.getAdUnitCodes = function () {
                    return d
                        .map(function (e) {
                            return e.getAdUnitCodes();
                        })
                        .reduce(r.flatten, [])
                        .filter(r.uniques);
                }),
                (c.createAuction = function (e) {
                    var t,
                        n = e.adUnits,
                        r = e.adUnitCodes,
                        i = e.callback,
                        o = e.cbTimeout,
                        a = e.labels,
                        c = e.auctionId,
                        u = Object(s.k)({ adUnits: n, adUnitCodes: r, callback: i, cbTimeout: o, labels: a, auctionId: c });
                    return (t = u), d.push(t), u;
                }),
                (c.findBidByAdId = function (t) {
                    return o()(
                        d
                            .map(function (e) {
                                return e.getBidsReceived();
                            })
                            .reduce(r.flatten, []),
                        function (e) {
                            return e.adId === t;
                        }
                    );
                }),
                (c.getStandardBidderAdServerTargeting = function () {
                    return Object(s.j)()[a.JSON_MAPPING.ADSERVER_TARGETING];
                }),
                (c.setStatusForBids = function (e, t) {
                    var n = c.findBidByAdId(e);
                    if ((n && (n.status = t), n && t === a.BID_STATUS.BID_TARGETING_SET)) {
                        var r = o()(d, function (e) {
                            return e.getAuctionId() === n.auctionId;
                        });
                        r && r.setBidTargeting(n);
                    }
                }),
                (c.getLastAuctionId = function () {
                    return d.length && d[d.length - 1].getAuctionId();
                }),
                c);
    },
    257: function (e, t, n) {
        n(258), (e.exports = n(16).String.includes);
    },
    258: function (e, t, n) {
        "use strict";
        var r = n(15),
            i = n(259),
            o = "includes";
        r(r.P + r.F * n(261)(o), "String", {
            includes: function (e, t) {
                return !!~i(this, e, o).indexOf(e, 1 < arguments.length ? t : void 0);
            },
        });
    },
    259: function (e, t, n) {
        var r = n(260),
            i = n(38);
        e.exports = function (e, t, n) {
            if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(i(e));
        };
    },
    26: function (e, t, n) {
        var o = n(55);
        e.exports = function (r, i, e) {
            if ((o(r), void 0 === i)) return r;
            switch (e) {
                case 1:
                    return function (e) {
                        return r.call(i, e);
                    };
                case 2:
                    return function (e, t) {
                        return r.call(i, e, t);
                    };
                case 3:
                    return function (e, t, n) {
                        return r.call(i, e, t, n);
                    };
            }
            return function () {
                return r.apply(i, arguments);
            };
        };
    },
    260: function (e, t, n) {
        var r = n(17),
            i = n(37),
            o = n(14)("match");
        e.exports = function (e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
        };
    },
    261: function (e, t, n) {
        var r = n(14)("match");
        e.exports = function (t) {
            var n = /./;
            try {
                "/./"[t](n);
            } catch (e) {
                try {
                    return (n[r] = !1), !"/./"[t](n);
                } catch (e) {}
            }
            return !0;
        };
    },
    27: function (e, t, n) {
        "use strict";
        n.d(t, "e", function () {
            return o;
        }),
            n.d(t, "a", function () {
                return s;
            }),
            (t.g = function (e) {
                if (
                    e &&
                    e.type &&
                    (function (e) {
                        return (e && c()(Object.keys(d), e)) || (Object(a.logError)("".concat(e, " nativeParam is not supported")), !1);
                    })(e.type)
                )
                    return d[e.type];
                return e;
            }),
            (t.f = function (t, e) {
                var n = Object(a.getBidRequest)(t.requestId, e);
                if (!n) return !1;
                if (!Object(a.deepAccess)(t, "native.clickUrl")) return !1;
                if (Object(a.deepAccess)(t, "native.image") && (!Object(a.deepAccess)(t, "native.image.height") || !Object(a.deepAccess)(t, "native.image.width"))) return !1;
                if (Object(a.deepAccess)(t, "native.icon") && (!Object(a.deepAccess)(t, "native.icon.height") || !Object(a.deepAccess)(t, "native.icon.width"))) return !1;
                var r = n.nativeParams;
                if (!r) return !0;
                var i = Object.keys(r).filter(function (e) {
                        return r[e].required;
                    }),
                    o = Object.keys(t.native).filter(function (e) {
                        return t.native[e];
                    });
                return i.every(function (e) {
                    return c()(o, e);
                });
            }),
            (t.b = function (e, t) {
                var n;
                "click" === e.action ? (n = t.native && t.native.clickTrackers) : ((n = t.native && t.native.impressionTrackers), t.native && t.native.javascriptTrackers && Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
                return (n || []).forEach(a.triggerPixel), e.action;
            }),
            (t.d = function (r, i) {
                var o = {};
                return (
                    Object.keys(r.native).forEach(function (e) {
                        var t = u.NATIVE_KEYS[e],
                            n = f(r.native[e]);
                        Object(a.deepAccess)(i, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId));
                        t && n && (o[t] = n);
                    }),
                    o
                );
            }),
            (t.c = function (e, r) {
                var i = { message: "assetResponse", adId: e.adId, assets: [] };
                return (
                    e.assets.forEach(function (e) {
                        var t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e),
                            n = f(r.native[t]);
                        i.assets.push({ key: t, value: n });
                    }),
                    i
                );
            });
        var a = n(0),
            r = n(11),
            c = n.n(r);
        function i(e) {
            return (i =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        var u = n(5),
            o = [],
            s = Object.keys(u.NATIVE_KEYS).map(function (e) {
                return u.NATIVE_KEYS[e];
            }),
            d = { image: { image: { required: !0 }, title: { required: !0 }, sponsoredBy: { required: !0 }, clickUrl: { required: !0 }, body: { required: !1 }, icon: { required: !1 } } };
        function f(e) {
            return "object" === i(e) && e.url ? e.url : e;
        }
    },
    28: function (e, t, n) {
        "use strict";
        t.a = function (r, e, t) {
            if (!e || !r) return void o.logError("cannot load external script without url and moduleCode");
            if (!i()(c, e)) return void o.logError("".concat(e, " not whitelisted for loading external JavaScript"));
            if (a[r]) return t && "function" == typeof t && (a[r].loaded ? t() : a[r].callbacks.push(t)), a[r].tag;
            (a[r] = { loaded: !1, tag: null, callbacks: [] }), t && "function" == typeof t && a[r].callbacks.push(t);
            return (
                o.logWarn("module ".concat(e, " is loading external JavaScript")),
                (function (e, t) {
                    var n = document.createElement("script");
                    (n.type = "text/javascript"),
                        (n.async = !0),
                        (a[r].tag = n).readyState
                            ? (n.onreadystatechange = function () {
                                  ("loaded" !== n.readyState && "complete" !== n.readyState) || ((n.onreadystatechange = null), t());
                              })
                            : (n.onload = function () {
                                  t();
                              });
                    return (n.src = e), o.insertElement(n), n;
                })(r, function () {
                    a[r].loaded = !0;
                    try {
                        for (var e = 0; e < a[r].callbacks.length; e++) a[r].callbacks[e]();
                    } catch (e) {
                        o.logError("Error executing callback", "adloader.js:loadExternalScript", e);
                    }
                })
            );
        };
        var r = n(11),
            i = n.n(r),
            o = n(0),
            a = {},
            c = ["criteo", "outstream", "adagio", "browsi"];
    },
    29: function (e, t, n) {
        var r = n(17);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    },
    3: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return v;
        }),
            n.d(t, "b", function () {
                return C;
            });
        var r = n(43),
            i = n(12),
            a = n.n(i),
            o = n(11),
            c = n.n(o),
            u = n(61),
            s = n.n(u),
            d = n(9);
        function f() {
            return (f =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var l = n(74),
            p = n(0),
            g = n(5),
            b = "TRUE" === (Object(d.d)(window.location.search)[g.DEBUG_MODE] || "").toUpperCase(),
            y = window.location.origin,
            v = "random",
            h = {};
        (h[v] = !0), (h.fixed = !0);
        var m = v,
            S = { LOW: "low", MEDIUM: "medium", HIGH: "high", AUTO: "auto", DENSE: "dense", CUSTOM: "custom" };
        var A,
            E,
            T,
            O,
            I,
            C =
                ((O = []),
                (I = null),
                w(),
                {
                    getConfig: function () {
                        if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                            var e = arguments.length <= 0 ? void 0 : arguments[0];
                            return e ? p.deepAccess(j(), e) : j();
                        }
                        return function (e, t) {
                            var n = t;
                            if (("string" != typeof e && ((n = e), (e = "*")), "function" == typeof n)) {
                                var r = { topic: e, callback: n };
                                return (
                                    O.push(r),
                                    function () {
                                        O.splice(O.indexOf(r), 1);
                                    }
                                );
                            }
                            p.logError("listener must be a function");
                        }.apply(void 0, arguments);
                    },
                    setConfig: function (n) {
                        if (p.isPlainObject(n)) {
                            var e = Object.keys(n),
                                r = {};
                            e.forEach(function (e) {
                                var t = n[e];
                                p.isPlainObject(A[e]) && p.isPlainObject(t) && (t = f({}, A[e], t)), (r[e] = E[e] = t);
                            }),
                                _(r);
                        } else p.logError("setConfig options must be an object");
                    },
                    setDefaults: function (e) {
                        p.isPlainObject(A) ? (f(A, e), f(E, e)) : p.logError("defaults must be an object");
                    },
                    resetConfig: w,
                    runWithBidder: B,
                    callbackWithBidder: function (o) {
                        return function (i) {
                            return function () {
                                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                return B(o, (e = p.bind).call.apply(e, [i, this].concat(n)));
                            };
                        };
                    },
                    setBidderConfig: function (r) {
                        try {
                            !(function (e) {
                                if (!p.isPlainObject(e)) throw "setBidderConfig bidder options must be an object";
                                if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                                if (!p.isPlainObject(e.config)) throw "setBidderConfig bidder options must contain a config object";
                            })(r),
                                r.bidders.forEach(function (n) {
                                    T[n] || (T[n] = {}),
                                        Object.keys(r.config).forEach(function (e) {
                                            var t = r.config[e];
                                            p.isPlainObject(t) ? (T[n][e] = f({}, T[n][e] || {}, t)) : (T[n][e] = t);
                                        });
                                });
                        } catch (e) {
                            p.logError(e);
                        }
                    },
                    getBidderConfig: function () {
                        return T;
                    },
                });
        function w() {
            A = {};
            var n = {
                _debug: b,
                get debug() {
                    return this._debug;
                },
                set debug(e) {
                    this._debug = e;
                },
                _bidderTimeout: 3e3,
                get bidderTimeout() {
                    return this._bidderTimeout;
                },
                set bidderTimeout(e) {
                    this._bidderTimeout = e;
                },
                _publisherDomain: y,
                get publisherDomain() {
                    return this._publisherDomain;
                },
                set publisherDomain(e) {
                    this._publisherDomain = e;
                },
                _priceGranularity: S.MEDIUM,
                set priceGranularity(e) {
                    o(e) &&
                        ("string" == typeof e ? (this._priceGranularity = i(e) ? e : S.MEDIUM) : p.isPlainObject(e) && ((this._customPriceBucket = e), (this._priceGranularity = S.CUSTOM), p.logMessage("Using custom price granularity")));
                },
                get priceGranularity() {
                    return this._priceGranularity;
                },
                _customPriceBucket: {},
                get customPriceBucket() {
                    return this._customPriceBucket;
                },
                _mediaTypePriceGranularity: {},
                get mediaTypePriceGranularity() {
                    return this._mediaTypePriceGranularity;
                },
                set mediaTypePriceGranularity(n) {
                    var r = this;
                    this._mediaTypePriceGranularity = Object.keys(n).reduce(function (e, t) {
                        return (
                            o(n[t])
                                ? "string" == typeof n
                                    ? (e[t] = i(n[t]) ? n[t] : r._priceGranularity)
                                    : p.isPlainObject(n) && ((e[t] = n[t]), p.logMessage("Using custom price granularity for ".concat(t)))
                                : p.logWarn("Invalid price granularity for media type: ".concat(t)),
                            e
                        );
                    }, {});
                },
                _sendAllBids: !0,
                get enableSendAllBids() {
                    return this._sendAllBids;
                },
                set enableSendAllBids(e) {
                    this._sendAllBids = e;
                },
                _useBidCache: !1,
                get useBidCache() {
                    return this._useBidCache;
                },
                set useBidCache(e) {
                    this._useBidCache = e;
                },
                _bidderSequence: m,
                get bidderSequence() {
                    return this._bidderSequence;
                },
                set bidderSequence(e) {
                    h[e] ? (this._bidderSequence = e) : p.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."));
                },
                _timeoutBuffer: 400,
                get timeoutBuffer() {
                    return this._timeoutBuffer;
                },
                set timeoutBuffer(e) {
                    this._timeoutBuffer = e;
                },
                _disableAjaxTimeout: !1,
                get disableAjaxTimeout() {
                    return this._disableAjaxTimeout;
                },
                set disableAjaxTimeout(e) {
                    this._disableAjaxTimeout = e;
                },
            };
            function i(t) {
                return a()(Object.keys(S), function (e) {
                    return t === S[e];
                });
            }
            function o(e) {
                if (e) {
                    if ("string" == typeof e) i(e) || p.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                    else if (p.isPlainObject(e) && !Object(r.b)(e)) return void p.logError("Invalid custom price value passed to `setPriceGranularity()`");
                    return 1;
                }
                p.logError("Prebid Error: no value passed to `setPriceGranularity()`");
            }
            E &&
                _(
                    Object.keys(E).reduce(function (e, t) {
                        return E[t] !== n[t] && (e[t] = n[t] || {}), e;
                    }, {})
                ),
                (E = n),
                (T = {});
        }
        function j() {
            if (I && T && p.isPlainObject(T[I])) {
                var n = T[I],
                    e = new s.a(Object.keys(E).concat(Object.keys(n)));
                return l(e).reduce(function (e, t) {
                    return void 0 === n[t] ? (e[t] = E[t]) : void 0 !== E[t] && p.isPlainObject(n[t]) ? (e[t] = f({}, E[t], n[t])) : (e[t] = n[t]), e;
                }, {});
            }
            return f({}, E);
        }
        function _(i) {
            var t = Object.keys(i);
            O.filter(function (e) {
                return c()(t, e.topic);
            }).forEach(function (e) {
                var t, n, r;
                e.callback(((t = {}), (n = e.topic), (r = i[e.topic]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r), t));
            }),
                O.filter(function (e) {
                    return "*" === e.topic;
                }).forEach(function (e) {
                    return e.callback(i);
                });
        }
        function B(e, t) {
            I = e;
            try {
                return t();
            } finally {
                I = null;
            }
        }
    },
    30: function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t);
        };
    },
    31: function (e, t) {
        e.exports = {};
    },
    32: function (e, t, n) {
        "use strict";
        (t.a = r),
            n.d(t, "b", function () {
                return i;
            });
        var c = n(0);
        function u() {
            return (u =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        function r(i) {
            function o() {
                var e = (function () {
                        var t,
                            n = [];
                        do {
                            try {
                                t = t ? t.parent : i;
                                try {
                                    var e = t == i.top,
                                        r = { referrer: t.document.referrer || null, location: t.location.href || null, isTop: e };
                                    e && (r = u(r, { canonicalUrl: a(t.document) })), n.push(r);
                                } catch (e) {
                                    n.push({ referrer: null, location: null, isTop: t == i.top }), Object(c.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                                }
                            } catch (e) {
                                return n.push({ referrer: null, location: null, isTop: !1 }), n;
                            }
                        } while (t != i.top);
                        return n;
                    })(),
                    t = (function () {
                        try {
                            if (!i.location.ancestorOrigins) return;
                            return i.location.ancestorOrigins;
                        } catch (e) {}
                    })();
                if (t) for (var n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
                return e;
            }
            function a(e) {
                try {
                    var t = e.querySelector("link[rel='canonical']");
                    if (null !== t) return t.href;
                } catch (e) {}
                return null;
            }
            return function () {
                try {
                    var e,
                        t = o(),
                        n = t.length - 1,
                        r = null !== t[n].location || (0 < n && null !== t[n - 1].referrer),
                        i = (function (e) {
                            var t,
                                n = [],
                                r = null,
                                i = null,
                                o = null,
                                a = null,
                                c = null;
                            for (t = e.length - 1; 0 <= t; t--) {
                                try {
                                    r = e[t].location;
                                } catch (e) {}
                                if (r) n.push(r), (c = c || r);
                                else if (0 !== t) {
                                    i = e[t - 1];
                                    try {
                                        (o = i.referrer), (a = i.ancestor);
                                    } catch (e) {}
                                    o ? (n.push(o), (c = c || o)) : a ? (n.push(a), (c = c || a)) : n.push(null);
                                } else n.push(null);
                            }
                            return { stack: n, detectedRefererUrl: c };
                        })(t);
                    return t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl), { referer: i.detectedRefererUrl, reachedTop: r, numIframes: n, stack: i.stack, canonicalUrl: e };
                } catch (e) {}
            };
        }
        var i = r(window);
    },
    33: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return h;
        });
        var a = n(0),
            r = n(3),
            i = n(11),
            o = n.n(i);
        function c(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == c.return || c.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t);
                })(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function u(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function s() {
            return (s =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        r.b.setDefaults({ userSync: { syncEnabled: !0, filterSettings: { image: { bidders: "*", filter: "include" } }, syncsPerBidder: 5, syncDelay: 3e3, auctionDelay: 0 } });
        var d,
            f,
            l,
            p,
            g,
            b,
            y,
            v = !a.isSafariBrowser() && a.cookiesAreEnabled(),
            h =
                ((d = { config: r.b.getConfig("userSync"), browserSupportsCookies: v }),
                (f = {}),
                (l = m()),
                (p = new Set()),
                (b = { image: !0, iframe: !(g = {}) }),
                (y = d.config),
                r.b.getConfig("userSync", function (e) {
                    y = s(y, e.userSync);
                }),
                (f.registerSync = function (e, t, n) {
                    return p.has(t)
                        ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call'))
                        : y.syncEnabled && a.isArray(l[e])
                        ? t
                            ? 0 !== y.syncsPerBidder && Number(g[t]) >= y.syncsPerBidder
                                ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"'))
                                : f.canBidderRegisterSync(e, t)
                                ? (l[e].push([t, n]), (r = g)[(i = t)] ? (r[i] += 1) : (r[i] = 1), void (g = r))
                                : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.'))
                            : a.logWarn("Bidder is required for registering sync")
                        : a.logWarn('User sync type "'.concat(e, '" not supported'));
                    var r, i;
                }),
                (f.syncUsers = function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (e) return setTimeout(S, Number(e));
                    S();
                }),
                (f.triggerUserSyncs = function () {
                    y.enableOverride && f.syncUsers();
                }),
                (f.canBidderRegisterSync = function (e, t) {
                    return !y.filterSettings || !E(e, t);
                }),
                f);
        function m() {
            return { image: [], iframe: [] };
        }
        function S() {
            if (y.syncEnabled && d.browserSupportsCookies) {
                try {
                    !(function () {
                        if (!b.image) return;
                        A(l.image, function (e) {
                            var t = c(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), a.triggerPixel(r);
                        });
                    })(),
                        (function () {
                            if (!b.iframe) return;
                            A(l.iframe, function (e) {
                                var t = c(e, 2),
                                    n = t[0],
                                    r = t[1];
                                a.logMessage("Invoking iframe user sync for bidder: ".concat(n)), a.insertUserSyncIframe(r);
                            });
                        })();
                } catch (e) {
                    return a.logError("Error firing user syncs", e);
                }
                l = m();
            }
        }
        function A(e, t) {
            a.shuffle(e).forEach(function (e) {
                t(e), p.add(e[0]);
            });
        }
        function E(e, t) {
            var n = y.filterSettings;
            if (
                (function (e, t) {
                    if (e.all && e[t])
                        return void a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'));
                    var n = e.all ? e.all : e[t],
                        r = e.all ? "all" : t;
                    if (!n) return;
                    var i = n.filter,
                        o = n.bidders;
                    if (i && "include" !== i && "exclude" !== i) return void a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'."));
                    return (
                        "*" === o ||
                        (Array.isArray(o) &&
                            0 < o.length &&
                            o.every(function (e) {
                                return a.isStr(e) && "*" !== e;
                            })) ||
                        (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                    );
                })(n, e)
            ) {
                b[e] = !0;
                var r = n.all ? n.all : n[e],
                    i = "*" === r.bidders ? [t] : r.bidders;
                return {
                    include: function (e, t) {
                        return !o()(e, t);
                    },
                    exclude: function (e, t) {
                        return o()(e, t);
                    },
                }[r.filter || "include"](i, t);
            }
        }
    },
    34: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return c;
        }),
            n.d(t, "a", function () {
                return u;
            }),
            (t.d = function (e, t) {
                var n = Object(o.getBidRequest)(e.requestId, t),
                    r = n && Object(o.deepAccess)(n, "mediaTypes.video"),
                    i = r && Object(o.deepAccess)(r, "context");
                return s(e, n, r, i);
            }),
            n.d(t, "c", function () {
                return s;
            });
        n(7);
        var o = n(0),
            i = n(3),
            r = n(11),
            a = (n.n(r), n(13)),
            c = "outstream",
            u = "instream";
        var s = Object(a.b)(
            "sync",
            function (e, t, n, r) {
                return !t || (n && r !== c)
                    ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl
                        ? !(!e.vastUrl && !e.vastXml)
                        : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),
                          !1)
                    : r !== c || !(!e.renderer && !t.renderer);
            },
            "checkVideoBidSetup"
        );
    },
    35: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return p;
        });
        var v = n(0),
            h = n(3),
            m = n(27),
            r = n(24),
            i = n(76),
            o = n(2),
            a = n(11),
            S = n.n(a);
        function A() {
            return (A =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        function E(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        function T(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return c(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var u = n(0),
            O = n(5),
            I = [],
            C = Object.keys(O.TARGETING_KEYS).map(function (e) {
                return O.TARGETING_KEYS[e];
            }),
            s = function (e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(v.timestamp)();
            },
            d = function (e) {
                return e && ((e.status && !S()([O.BID_STATUS.RENDERED], e.status)) || !e.status);
            };
        function w(e, r, t) {
            var i = 2 < arguments.length && void 0 !== t ? t : 0,
                o = [],
                a = Object(v.groupBy)(e, "adUnitCode");
            return (
                Object.keys(a).forEach(function (e) {
                    var t = [],
                        n = Object(v.groupBy)(a[e], "bidderCode");
                    Object.keys(n).forEach(function (e) {
                        return t.push(n[e].reduce(r));
                    }),
                        0 < i
                            ? (t.sort(function (e, t) {
                                  return t.cpm - e.cpm;
                              }),
                              o.push.apply(o, T(t.slice(0, i))))
                            : o.push.apply(o, t);
                }),
                o
            );
        }
        function j(e, t) {
            return void 0 !== e.adUnitTargeting.hb_deal && void 0 === t.adUnitTargeting.hb_deal ? -1 : void 0 === e.adUnitTargeting.hb_deal && void 0 !== t.adUnitTargeting.hb_deal ? 1 : t.adUnitTargeting.hb_pb - e.adUnitTargeting.hb_pb;
        }
        var f,
            _,
            l,
            p =
                ((f = r.a),
                (l = {}),
                ((_ = {}).setLatestAuctionForAdUnit = function (e, t) {
                    l[e] = t;
                }),
                (_.resetPresetTargeting = function (e) {
                    if (Object(v.isGptPubadsDefined)()) {
                        var t = U(e),
                            r = f.getAdUnits().filter(function (e) {
                                return S()(t, e.code);
                            });
                        window.googletag
                            .pubads()
                            .getSlots()
                            .forEach(function (n) {
                                I.forEach(function (t) {
                                    r.forEach(function (e) {
                                        (e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId()) || n.setTargeting(t, null);
                                    });
                                });
                            });
                    }
                }),
                (_.resetPresetTargetingAST = function (e) {
                    U(e).forEach(function (e) {
                        var t = window.apntag.getTag(e);
                        if (t && t.keywords) {
                            var n = Object.keys(t.keywords),
                                r = {};
                            n.forEach(function (e) {
                                S()(I, e.toLowerCase()) || (r[e] = t.keywords[e]);
                            }),
                                window.apntag.modifyTag(e, { keywords: r });
                        }
                    });
                }),
                (_.getAllTargeting = function (e) {
                    var n,
                        t,
                        r,
                        i,
                        o,
                        a,
                        c,
                        u,
                        s,
                        d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : R(),
                        f = U(e),
                        l =
                            ((a = f),
                            (c = d),
                            (u = _.getWinningBids(a, c)),
                            (s = D()),
                            (u = u.map(function (o) {
                                return E(
                                    {},
                                    o.adUnitCode,
                                    Object.keys(o.adserverTargeting)
                                        .filter(function (e) {
                                            return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === s.indexOf(e);
                                        })
                                        .reduce(function (e, t) {
                                            var n = [o.adserverTargeting[t]],
                                                r = E({}, t.substring(0, 20), n);
                                            if (t !== O.TARGETING_KEYS.DEAL) return [].concat(T(e), [r]);
                                            var i = E({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                                            return [].concat(T(e), [r, i]);
                                        }, [])
                                );
                            }))
                                .concat(
                                    ((o = f),
                                    d
                                        .filter(function (e) {
                                            return S()(o, e.adUnitCode);
                                        })
                                        .map(function (e) {
                                            return A({}, e);
                                        })
                                        .reduce(N, [])
                                        .map(k)
                                        .filter(function (e) {
                                            return e;
                                        }))
                                )
                                .concat(
                                    h.b.getConfig("enableSendAllBids")
                                        ? ((n = f),
                                          (t = d),
                                          (r = C.concat(m.a)),
                                          (i = h.b.getConfig("sendBidsControl.bidLimit")),
                                          w(t, v.getHighestCpm, i)
                                              .map(function (t) {
                                                  if (B(t, n))
                                                      return E(
                                                          {},
                                                          t.adUnitCode,
                                                          x(
                                                              t,
                                                              r.filter(function (e) {
                                                                  return void 0 !== t.adserverTargeting[e];
                                                              })
                                                          )
                                                      );
                                              })
                                              .filter(function (e) {
                                                  return e;
                                              }))
                                        : (function (e, t) {
                                              if (!0 !== h.b.getConfig("targetingControls.alwaysIncludeDeals")) return [];
                                              var n = C.concat(m.a);
                                              return w(t, v.getHighestCpm)
                                                  .map(function (t) {
                                                      if (t.dealId && B(t, e))
                                                          return E(
                                                              {},
                                                              t.adUnitCode,
                                                              x(
                                                                  t,
                                                                  n.filter(function (e) {
                                                                      return void 0 !== t.adserverTargeting[e];
                                                                  })
                                                              )
                                                          );
                                                  })
                                                  .filter(function (e) {
                                                      return e;
                                                  });
                                          })(f, d)
                                ));
                    l.map(function (t) {
                        Object.keys(t).map(function (e) {
                            t[e].map(function (e) {
                                -1 === I.indexOf(Object.keys(e)[0]) && (I = Object.keys(e).concat(I));
                            });
                        });
                    }),
                        (l = l
                            .map(function (e) {
                                return E(
                                    {},
                                    Object.keys(e)[0],
                                    e[Object.keys(e)[0]]
                                        .map(function (e) {
                                            return E({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "));
                                        })
                                        .reduce(function (e, t) {
                                            return A(t, e);
                                        }, {})
                                );
                            })
                            .reduce(function (e, t) {
                                var n = Object.keys(t)[0];
                                return (e[n] = A({}, e[n], t[n])), e;
                            }, {}));
                    var p,
                        g,
                        b,
                        y = h.b.getConfig("targetingControls.auctionKeyMaxChars");
                    return (
                        y &&
                            (Object(v.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(y, " characters.  Running checks on auction keys...")),
                            (p = l),
                            (g = y),
                            (b = Object(v.deepClone)(p)),
                            (l = Object.keys(b)
                                .map(function (e) {
                                    return { adUnitCode: e, adUnitTargeting: b[e] };
                                })
                                .sort(j)
                                .reduce(function (e, t, n, r) {
                                    var i,
                                        o =
                                            ((i = t.adUnitTargeting),
                                            Object.keys(i).reduce(function (e, t) {
                                                return e + "".concat(t, "%3d").concat(encodeURIComponent(i[t]), "%26");
                                            }, ""));
                                    n + 1 === r.length && (o = o.slice(0, -3));
                                    var a = t.adUnitCode,
                                        c = o.length;
                                    return (
                                        c <= g
                                            ? ((g -= c), Object(v.logInfo)("AdUnit '".concat(a, "' auction keys comprised of ").concat(c, " characters.  Deducted from running threshold; new limit is ").concat(g), b[a]), (e[a] = b[a]))
                                            : Object(v.logWarn)(
                                                  "The following keys for adUnitCode '"
                                                      .concat(a, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ")
                                                      .concat(c, ", the current allotted amount was ")
                                                      .concat(g, ".\n"),
                                                  b[a]
                                              ),
                                        n + 1 === r.length &&
                                            0 === Object.keys(e).length &&
                                            Object(v.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),
                                        e
                                    );
                                }, {}))),
                        f.forEach(function (e) {
                            l[e] || (l[e] = {});
                        }),
                        l
                    );
                }),
                (_.setTargetingForGPT = function (i, e) {
                    window.googletag
                        .pubads()
                        .getSlots()
                        .forEach(function (r) {
                            Object.keys(i)
                                .filter((e || Object(v.isAdUnitCodeMatchingSlot))(r))
                                .forEach(function (n) {
                                    return Object.keys(i[n]).forEach(function (t) {
                                        var e = i[n][t].split(",");
                                        (e = 1 < e.length ? [e] : e)
                                            .map(function (e) {
                                                return u.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), e;
                                            })
                                            .forEach(function (e) {
                                                r.setTargeting(t, e);
                                            });
                                    });
                                });
                        });
                }),
                (_.getWinningBids = function (e) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : R(),
                        t = U(e);
                    return n
                        .filter(function (e) {
                            return S()(t, e.adUnitCode);
                        })
                        .filter(function (e) {
                            return 0 < e.cpm;
                        })
                        .map(function (e) {
                            return e.adUnitCode;
                        })
                        .filter(v.uniques)
                        .map(function (t) {
                            return n
                                .filter(function (e) {
                                    return e.adUnitCode === t ? e : null;
                                })
                                .reduce(v.getHighestCpm);
                        });
                }),
                (_.setTargetingForAst = function (e) {
                    var r = _.getAllTargeting(e);
                    try {
                        _.resetPresetTargetingAST(e);
                    } catch (e) {
                        u.logError("unable to reset targeting for AST" + e);
                    }
                    Object.keys(r).forEach(function (n) {
                        return Object.keys(r[n]).forEach(function (e) {
                            if ((u.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), u.isStr(r[n][e]) || u.isArray(r[n][e]))) {
                                var t = {};
                                e.search(/pt[0-9]/) < 0 ? (t[e.toUpperCase()] = r[n][e]) : (t[e] = r[n][e]), window.apntag.setKeywords(n, t, { overrideKeyValue: !0 });
                            }
                        });
                    });
                }),
                (_.isApntagDefined = function () {
                    if (window.apntag && u.isFn(window.apntag.setKeywords)) return !0;
                }),
                _);
        function B(e, t) {
            return e.adserverTargeting && t && ((u.isArray(t) && S()(t, e.adUnitCode)) || ("string" == typeof t && e.adUnitCode === t));
        }
        function U(e) {
            return "string" == typeof e ? [e] : u.isArray(e) ? e : f.getAdUnitCodes() || [];
        }
        function R() {
            var e = f.getBidsReceived();
            return (
                h.b.getConfig("useBidCache") ||
                    (e = e.filter(function (e) {
                        return l[e.adUnitCode] === e.auctionId;
                    })),
                w(
                    (e = e
                        .filter(function (e) {
                            return Object(v.deepAccess)(e, "video.context") !== o.a;
                        })
                        .filter(function (e) {
                            return "banner" !== e.mediaType || Object(i.c)([e.width, e.height]);
                        })
                        .filter(d)
                        .filter(s)),
                    v.getOldestHighestCpmBid
                )
            );
        }
        function D() {
            return f
                .getStandardBidderAdServerTargeting()
                .map(function (e) {
                    return e.key;
                })
                .concat(C)
                .filter(v.uniques);
        }
        function N(r, i, e, t) {
            return (
                Object.keys(i.adserverTargeting)
                    .filter(g())
                    .forEach(function (e) {
                        var t, n;
                        r.length &&
                            r
                                .filter(
                                    ((n = e),
                                    function (e) {
                                        return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n];
                                    })
                                )
                                .forEach(
                                    ((t = e),
                                    function (e) {
                                        u.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]),
                                            (e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(v.uniques)),
                                            delete i.adserverTargeting[t];
                                    })
                                );
                    }),
                r.push(i),
                r
            );
        }
        function g() {
            var t = D().concat(m.a);
            return function (e) {
                return -1 === t.indexOf(e);
            };
        }
        function k(t) {
            return E(
                {},
                t.adUnitCode,
                Object.keys(t.adserverTargeting)
                    .filter(g())
                    .map(function (e) {
                        return E({}, e.substring(0, 20), [t.adserverTargeting[e]]);
                    })
            );
        }
        function x(t, e) {
            return e.map(function (e) {
                return E({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]]);
            });
        }
    },
    36: function (e, t) {
        e.exports = function (e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    363: function (e, t, n) {
        n(364), (e.exports = n(16).Number.isInteger);
    },
    364: function (e, t, n) {
        var r = n(15);
        r(r.S, "Number", { isInteger: n(365) });
    },
    365: function (e, t, n) {
        var r = n(17),
            i = Math.floor;
        e.exports = function (e) {
            return !r(e) && isFinite(e) && i(e) === e;
        };
    },
    37: function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1);
        };
    },
    38: function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    },
    39: function (e, t, n) {
        var r = n(47),
            i = Math.min;
        e.exports = function (e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0;
        };
    },
    4: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r;
        }),
            (t.b = i);
        var l = n(9),
            p = n(3);
        function g() {
            return (g =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        function b(e) {
            return (b =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        var y = n(0),
            v = 4,
            r = i();
        function i() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                d = e.request,
                f = e.done;
            return function (e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i,
                        o = r.method || (n ? "POST" : "GET"),
                        a = document.createElement("a");
                    a.href = e;
                    var c =
                        "object" === b(t) && null !== t
                            ? t
                            : {
                                  success: function () {
                                      y.logMessage("xhr success");
                                  },
                                  error: function (e) {
                                      y.logError("xhr error", null, e);
                                  },
                              };
                    if (
                        ("function" == typeof t && (c.success = t),
                        ((i = new window.XMLHttpRequest()).onreadystatechange = function () {
                            if (i.readyState === v) {
                                "function" == typeof f && f(a.origin);
                                var e = i.status;
                                (200 <= e && e < 300) || 304 === e ? c.success(i.responseText, i) : c.error(i.statusText, i);
                            }
                        }),
                        p.b.getConfig("disableAjaxTimeout") ||
                            (i.ontimeout = function () {
                                y.logError("  xhr timeout after ", i.timeout, "ms");
                            }),
                        "GET" === o && n)
                    ) {
                        var u = Object(l.c)(e, r);
                        g(u.search, n), (e = Object(l.a)(u));
                    }
                    i.open(o, e, !0),
                        p.b.getConfig("disableAjaxTimeout") || (i.timeout = s),
                        r.withCredentials && (i.withCredentials = !0),
                        y._each(r.customHeaders, function (e, t) {
                            i.setRequestHeader(t, e);
                        }),
                        r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                        i.setRequestHeader("Content-Type", r.contentType || "text/plain"),
                        "function" == typeof d && d(a.origin),
                        "POST" === o && n ? i.send(n) : i.send();
                } catch (e) {
                    y.logError("xhr construction", e);
                }
            };
        }
    },
    40: function (e, t) {
        e.exports = function () {};
    },
    41: function (e, t, n) {
        var l = n(26),
            p = n(68),
            g = n(69),
            b = n(29),
            y = n(39),
            v = n(70),
            h = {},
            m = {};
        ((t = e.exports = function (e, t, n, r, i) {
            var o,
                a,
                c,
                u,
                s = i
                    ? function () {
                          return e;
                      }
                    : v(e),
                d = l(n, r, t ? 2 : 1),
                f = 0;
            if ("function" != typeof s) throw TypeError(e + " is not iterable!");
            if (g(s)) {
                for (o = y(e.length); f < o; f++) if ((u = t ? d(b((a = e[f]))[0], a[1]) : d(e[f])) === h || u === m) return u;
            } else for (c = s.call(e); !(a = c.next()).done; ) if ((u = p(c, d, a.value, t)) === h || u === m) return u;
        }).BREAK = h),
            (t.RETURN = m);
    },
    42: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return W;
        }),
            n.d(t, "a", function () {
                return L;
            }),
            (t.k = function (e) {
                var t,
                    n,
                    b,
                    y,
                    o = e.adUnits,
                    r = e.adUnitCodes,
                    i = e.callback,
                    a = e.cbTimeout,
                    c = e.labels,
                    u = e.auctionId,
                    v = o,
                    s = c,
                    d = r,
                    h = [],
                    f = [],
                    l = [],
                    p = u || x.generateUUID(),
                    g = i,
                    m = a,
                    S = [],
                    A = new Set();
                function E() {
                    return { auctionId: p, timestamp: t, auctionEnd: n, auctionStatus: b, adUnits: v, adUnitCodes: d, labels: s, bidderRequests: h, noBids: l, bidsReceived: f, winningBids: S, timeout: m };
                }
                function T(r, e) {
                    if ((e && clearTimeout(y), void 0 === n)) {
                        var i = [];
                        r &&
                            (x.logMessage("Auction ".concat(p, " timedOut")),
                            (t = A),
                            (i = h
                                .map(function (e) {
                                    return (e.bids || []).filter(function (e) {
                                        return !t.has(e.bidder);
                                    });
                                })
                                .reduce(w.flatten, [])
                                .map(function (e) {
                                    return { bidId: e.bidId, bidder: e.bidder, adUnitCode: e.adUnitCode, auctionId: e.auctionId };
                                })).length && M.emit(q.EVENTS.BID_TIMEOUT, i)),
                            (b = L),
                            (n = Date.now()),
                            M.emit(q.EVENTS.AUCTION_END, E()),
                            Y(d, function () {
                                try {
                                    if (null != g) {
                                        var e = d,
                                            t = f.filter(x.bind.call(w.adUnitsFilter, this, e)).reduce(Z, {});
                                        g.apply(pbjs, [t, r, p]), (g = null);
                                    }
                                } catch (e) {
                                    x.logError("Error executing bidsBackHandler", null, e);
                                } finally {
                                    i.length && P.callTimedOutBidders(o, i, m);
                                    var n = B.b.getConfig("userSync") || {};
                                    n.enableOverride || k(n.syncDelay);
                                }
                            });
                    }
                    var t;
                }
                function O() {
                    x.logInfo("Bids Received for Auction with id: ".concat(p), f), (b = L), T(!1, !0);
                }
                function I(e) {
                    A.add(e);
                }
                function C(d) {
                    var f = this;
                    d.forEach(function (e) {
                        var t;
                        (t = e), (h = h.concat(t));
                    });
                    var l = {},
                        e = {
                            bidRequests: d,
                            run: function () {
                                var e, t;
                                (e = T.bind(null, !0)), (t = setTimeout(e, m)), (y = t), (b = W), M.emit(q.EVENTS.AUCTION_INIT, E());
                                var n,
                                    r,
                                    i,
                                    o,
                                    a,
                                    c,
                                    u =
                                        ((n = O),
                                        (r = f),
                                        (i = 0),
                                        (o = !1),
                                        (a = new Set()),
                                        (c = {}),
                                        {
                                            addBidResponse: function (e, t) {
                                                (c[t.requestId] = !0), i++;
                                                var n = (function (e) {
                                                    var t = e.adUnitCode,
                                                        n = e.bid,
                                                        r = e.bidderRequest,
                                                        i = e.auctionId,
                                                        o = r.start,
                                                        a = N({}, n, { auctionId: i, responseTimestamp: Object(w.timestamp)(), requestTimestamp: o, cpm: parseFloat(n.cpm) || 0, bidder: n.bidderCode, adUnitCode: t });
                                                    (a.timeToRespond = a.responseTimestamp - a.requestTimestamp), M.emit(q.EVENTS.BID_ADJUSTMENT, a);
                                                    var c =
                                                            r.bids &&
                                                            U()(r.bids, function (e) {
                                                                return e.adUnitCode == t;
                                                            }),
                                                        u = c && c.renderer;
                                                    u && u.url && ((a.renderer = _.a.install({ url: u.url })), a.renderer.setRender(u.render));
                                                    var s = X(n.mediaType, c, B.b.getConfig("mediaTypePriceGranularity")),
                                                        d = Object(j.a)(a.cpm, "object" === D(s) ? s : B.b.getConfig("customPriceBucket"), B.b.getConfig("currency.granularityMultiplier"));
                                                    return (a.pbLg = d.low), (a.pbMg = d.med), (a.pbHg = d.high), (a.pbAg = d.auto), (a.pbDg = d.dense), (a.pbCg = d.custom), a;
                                                })({ adUnitCode: e, bid: t, bidderRequest: this, auctionId: r.getAuctionId() });
                                                "video" === n.mediaType
                                                    ? (function (e, t, n, r) {
                                                          var i = !0,
                                                              o = Object(w.getBidRequest)(t.requestId, [n]),
                                                              a = o && Object(w.deepAccess)(o, "mediaTypes.video"),
                                                              c = a && Object(w.deepAccess)(a, "context");
                                                          B.b.getConfig("cache.url") &&
                                                              c !== R.b &&
                                                              (t.videoCacheKey ? t.vastUrl || (x.logError("videoCacheKey specified but not required vastUrl for video bid"), (i = !1)) : ((i = !1), $(e, t, r, o))),
                                                              i && (Q(e, t), r());
                                                      })(r, n, this, s)
                                                    : (Q(r, n), s());
                                            },
                                            adapterDone: function () {
                                                a.add(this),
                                                    (o = r.getBidRequests().every(function (e) {
                                                        return a.has(e);
                                                    })),
                                                    this.bids.forEach(function (e) {
                                                        c[e.bidId] || (r.addNoBid(e), M.emit(q.EVENTS.NO_BID, e));
                                                    }),
                                                    o && 0 === i && n();
                                            },
                                        });
                                function s() {
                                    i--, o && 0 === i && n();
                                }
                                P.callBids(
                                    v,
                                    d,
                                    function () {
                                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                        K.apply({ dispatch: u.addBidResponse, bidderRequest: this }, t);
                                    },
                                    u.adapterDone,
                                    {
                                        request: function (e, t) {
                                            g(z, t), g(l, e), V[e] || (V[e] = { SRA: !0, origin: t }), 1 < l[e] && (V[e].SRA = !1);
                                        },
                                        done: function (e) {
                                            z[e]--, H[0] && p(H[0]) && H.shift();
                                        },
                                    },
                                    m,
                                    I
                                );
                            },
                        };
                    function p(e) {
                        var r = !0,
                            i = B.b.getConfig("maxRequestsPerOrigin") || F;
                        return (
                            e.bidRequests.some(function (e) {
                                var t = 1,
                                    n = void 0 !== e.src && e.src === q.S2S.SRC ? "s2s" : e.bidderCode;
                                return V[n] && (!1 === V[n].SRA && (t = Math.min(e.bids.length, i)), z[V[n].origin] + t > i && (r = !1)), !r;
                            }),
                            r && e.run(),
                            r
                        );
                    }
                    function g(e, t) {
                        void 0 === e[t] ? (e[t] = 1) : e[t]++;
                    }
                    p(e) || (x.logWarn("queueing auction due to limited endpoint capacity"), H.push(e));
                }
                return {
                    addBidReceived: function (e) {
                        f = f.concat(e);
                    },
                    addNoBid: function (e) {
                        l = l.concat(e);
                    },
                    executeCallback: T,
                    callBids: function () {
                        (b = G), (t = Date.now());
                        var e = P.makeBidRequests(v, t, p, m, s);
                        x.logInfo("Bids Requested for Auction with id: ".concat(p), e), e.length < 1 ? (x.logWarn("No valid bid requests returned for auction"), O()) : J.call({ dispatch: C, context: this }, e);
                    },
                    addWinningBid: function (e) {
                        (S = S.concat(e)), P.callBidWonBidder(e.bidder, e, o);
                    },
                    setBidTargeting: function (e) {
                        P.callSetTargetingBidder(e.bidder, e);
                    },
                    getWinningBids: function () {
                        return S;
                    },
                    getTimeout: function () {
                        return m;
                    },
                    getAuctionId: function () {
                        return p;
                    },
                    getAuctionStatus: function () {
                        return b;
                    },
                    getAdUnits: function () {
                        return v;
                    },
                    getAdUnitCodes: function () {
                        return d;
                    },
                    getBidRequests: function () {
                        return h;
                    },
                    getBidsReceived: function () {
                        return f;
                    },
                    getNoBids: function () {
                        return l;
                    },
                };
            }),
            n.d(t, "c", function () {
                return K;
            }),
            n.d(t, "e", function () {
                return J;
            }),
            (t.g = d),
            (t.d = Q),
            n.d(t, "f", function () {
                return $;
            }),
            n.d(t, "i", function () {
                return f;
            }),
            n.d(t, "h", function () {
                return l;
            }),
            (t.j = p);
        var w = n(0),
            s = n(9),
            j = n(43),
            a = n(27),
            o = n(78),
            _ = n(10),
            B = n(3),
            r = n(33),
            i = n(13),
            c = n(12),
            U = n.n(c),
            R = n(34),
            u = n(2);
        function D(e) {
            return (D =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function N() {
            return (N =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var k = r.a.syncUsers,
            x = n(0),
            P = n(7).default,
            M = n(8),
            q = n(5),
            G = "started",
            W = "inProgress",
            L = "completed";
        M.on(q.EVENTS.BID_ADJUSTMENT, function (e) {
            !(function (e) {
                var t,
                    n = e.bidderCode,
                    r = e.cpm;
                if (
                    pbjs.bidderSettings &&
                    (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment
                        ? (t = pbjs.bidderSettings[n].bidCpmAdjustment)
                        : pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD] &&
                          "function" == typeof pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment &&
                          (t = pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),
                    t)
                )
                    try {
                        r = t(e.cpm, N({}, e));
                    } catch (e) {
                        x.logError("Error during bid adjustment", "bidmanager.js", e);
                    }
                0 <= r && (e.cpm = r);
            })(e);
        });
        var F = 4,
            z = {},
            V = {},
            H = [];
        var K = Object(i.b)(
                "async",
                function (e, t) {
                    this.dispatch.call(this.bidderRequest, e, t);
                },
                "addBidResponse"
            ),
            J = Object(i.b)(
                "sync",
                function (e) {
                    this.dispatch.call(this.context, e);
                },
                "addBidderRequests"
            ),
            Y = Object(i.b)(
                "async",
                function (e, t) {
                    t && t();
                },
                "bidsBackCallback"
            );
        function d(e, t) {
            t.timeToRespond > e.getTimeout() + B.b.getConfig("timeoutBuffer") && e.executeCallback(!0);
        }
        function Q(e, t) {
            var n = e.getBidRequests(),
                r = U()(n, function (e) {
                    return e.bidderCode === t.bidderCode;
                });
            !(function (t, e) {
                var n;
                if (t.bidderCode && (0 < t.cpm || t.dealId)) {
                    var r = U()(e.bids, function (e) {
                        return e.adUnitCode === t.adUnitCode;
                    });
                    n = (function (e, t, n) {
                        if (!t) return {};
                        var r = {},
                            i = pbjs.bidderSettings;
                        if (i) {
                            var o = p(t.mediaType, e, n);
                            g(r, o, t), e && i[e] && i[e][q.JSON_MAPPING.ADSERVER_TARGETING] && (g(r, i[e], t), (t.sendStandardTargeting = i[e].sendStandardTargeting));
                        }
                        t.native && (r = N({}, r, Object(a.d)(t, n)));
                        return r;
                    })(t.bidderCode, t, r);
                }
                t.adserverTargeting = N(t.adserverTargeting || {}, n);
            })(t, r),
                M.emit(q.EVENTS.BID_RESPONSE, t),
                e.addBidReceived(t),
                d(e, t);
        }
        var $ = Object(i.b)(
            "async",
            function (n, r, i, e) {
                Object(o.b)([r], function (e, t) {
                    e
                        ? (x.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), d(n, r))
                        : "" === t[0].uuid
                        ? (x.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), d(n, r))
                        : ((r.videoCacheKey = t[0].uuid), r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), Q(n, r), i());
                });
            },
            "callPrebidCache"
        );
        function X(e, t, n) {
            if (e && n) {
                if (e === u.d) {
                    var r = Object(w.deepAccess)(t, "mediaTypes.".concat(u.d, ".context"), "instream");
                    if (n["".concat(u.d, "-").concat(r)]) return n["".concat(u.d, "-").concat(r)];
                }
                return n[e];
            }
        }
        var f = function (e, t) {
                var n = X(e, t, B.b.getConfig("mediaTypePriceGranularity"));
                return "string" == typeof e && n ? ("string" == typeof n ? n : "custom") : B.b.getConfig("priceGranularity");
            },
            l = function (t) {
                return function (e) {
                    return t === q.GRANULARITY_OPTIONS.AUTO
                        ? e.pbAg
                        : t === q.GRANULARITY_OPTIONS.DENSE
                        ? e.pbDg
                        : t === q.GRANULARITY_OPTIONS.LOW
                        ? e.pbLg
                        : t === q.GRANULARITY_OPTIONS.MEDIUM
                        ? e.pbMg
                        : t === q.GRANULARITY_OPTIONS.HIGH
                        ? e.pbHg
                        : t === q.GRANULARITY_OPTIONS.CUSTOM
                        ? e.pbCg
                        : void 0;
                };
            };
        function p(e, t, n) {
            function r(e, t) {
                return {
                    key: e,
                    val:
                        "function" == typeof t
                            ? function (e) {
                                  return t(e);
                              }
                            : function (e) {
                                  return Object(w.getValue)(e, t);
                              },
                };
            }
            var i = q.TARGETING_KEYS,
                o = f(e, n),
                a = pbjs.bidderSettings;
            if (
                (a[q.JSON_MAPPING.BD_SETTING_STANDARD] || (a[q.JSON_MAPPING.BD_SETTING_STANDARD] = {}),
                a[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING] ||
                    (a[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING] = [
                        r(i.BIDDER, "bidderCode"),
                        r(i.AD_ID, "adId"),
                        r(i.PRICE_BUCKET, l(o)),
                        r(i.SIZE, "size"),
                        r(i.DEAL, "dealId"),
                        r(i.SOURCE, "source"),
                        r(i.FORMAT, "mediaType"),
                    ]),
                "video" === e)
            ) {
                var c = a[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING];
                if (
                    ([i.UUID, i.CACHE_ID].forEach(function (t) {
                        void 0 ===
                            U()(c, function (e) {
                                return e.key === t;
                            }) && c.push(r(t, "videoCacheKey"));
                    }),
                    B.b.getConfig("cache.url") && (!t || !1 !== x.deepAccess(a, "".concat(t, ".sendStandardTargeting"))))
                ) {
                    var u = Object(s.c)(B.b.getConfig("cache.url"));
                    void 0 ===
                        U()(c, function (e) {
                            return e.key === i.CACHE_HOST;
                        }) &&
                        c.push(
                            r(i.CACHE_HOST, function (e) {
                                return x.deepAccess(e, "adserverTargeting.".concat(i.CACHE_HOST)) ? e.adserverTargeting[i.CACHE_HOST] : u.hostname;
                            })
                        );
                }
            }
            return a[q.JSON_MAPPING.BD_SETTING_STANDARD];
        }
        function g(r, i, o) {
            var e = i[q.JSON_MAPPING.ADSERVER_TARGETING];
            return (
                (o.size = o.getSize()),
                x._each(e, function (e) {
                    var t = e.key,
                        n = e.val;
                    if ((r[t] && x.logWarn("The key: " + t + " is getting ovewritten"), x.isFn(n)))
                        try {
                            n = n(o);
                        } catch (e) {
                            x.logError("bidmanager", "ERROR", e);
                        }
                    ((void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== q.TARGETING_KEYS.DEAL) || (!x.isEmptyStr(n) && null != n) ? (r[t] = n) : x.logInfo("suppressing empty key '" + t + "' from adserver targeting");
                }),
                r
            );
        }
        function Z(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = { bids: [] }), e[t.adUnitCode].bids.push(t), e;
        }
    },
    43: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return d;
        }),
            n.d(t, "b", function () {
                return h;
            });
        var r = n(12),
            y = n.n(r),
            i = n(0),
            v = 2,
            o = { buckets: [{ max: 5, increment: 0.5 }] },
            a = { buckets: [{ max: 20, increment: 0.1 }] },
            c = { buckets: [{ max: 20, increment: 0.01 }] },
            u = {
                buckets: [
                    { max: 3, increment: 0.01 },
                    { max: 8, increment: 0.05 },
                    { max: 20, increment: 0.5 },
                ],
            },
            s = {
                buckets: [
                    { max: 5, increment: 0.05 },
                    { max: 10, increment: 0.1 },
                    { max: 20, increment: 0.5 },
                ],
            };
        function d(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                r = parseFloat(e);
            return (
                isNaN(r) && (r = ""),
                { low: "" === r ? "" : f(e, o, n), med: "" === r ? "" : f(e, a, n), high: "" === r ? "" : f(e, c, n), auto: "" === r ? "" : f(e, s, n), dense: "" === r ? "" : f(e, u, n), custom: "" === r ? "" : f(e, t, n) }
            );
        }
        function f(n, e, r) {
            var i = "";
            if (!h(e)) return i;
            var t,
                o,
                a,
                c,
                u,
                s,
                d,
                f,
                l,
                p = e.buckets.reduce(
                    function (e, t) {
                        return e.max > t.max ? e : t;
                    },
                    { max: 0 }
                ),
                g = 0,
                b = y()(e.buckets, function (e) {
                    if (n > p.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = v), (i = (e.max * r).toFixed(t));
                    } else {
                        if (n <= e.max * r && g * r <= n) return (e.min = g), e;
                        g = e.max;
                    }
                });
            return (
                b &&
                    ((t = n),
                    (a = r),
                    (c = void 0 !== (o = b).precision ? o.precision : v),
                    (u = o.increment * a),
                    (s = o.min * a),
                    (d = Math.pow(10, c + 2)),
                    (f = (t * d - s * d) / (u * d)),
                    (l = Math.floor(f) * u + s),
                    (i = (l = Number(l.toFixed(10))).toFixed(c))),
                i
            );
        }
        function h(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return (
                e.buckets.forEach(function (e) {
                    (e.max && e.increment) || (t = !1);
                }),
                t
            );
        }
    },
    44: function (e, t) {
        e.exports = function (e, t) {
            return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
    },
    45: function (e, t, n) {
        var m = n(26),
            S = n(57),
            A = n(46),
            E = n(39),
            r = n(85);
        e.exports = function (f, e) {
            var l = 1 == f,
                p = 2 == f,
                g = 3 == f,
                b = 4 == f,
                y = 6 == f,
                v = 5 == f || y,
                h = e || r;
            return function (e, t, n) {
                for (var r, i, o = A(e), a = S(o), c = m(t, n, 3), u = E(a.length), s = 0, d = l ? h(e, u) : p ? h(e, 0) : void 0; s < u; s++)
                    if ((v || s in a) && ((i = c((r = a[s]), s, o)), f))
                        if (l) d[s] = i;
                        else if (i)
                            switch (f) {
                                case 3:
                                    return !0;
                                case 5:
                                    return r;
                                case 6:
                                    return s;
                                case 2:
                                    d.push(r);
                            }
                        else if (b) return !1;
                return y ? -1 : g || b ? b : d;
            };
        };
    },
    46: function (e, t, n) {
        var r = n(38);
        e.exports = function (e) {
            return Object(r(e));
        };
    },
    47: function (e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function (e) {
            return isNaN((e = +e)) ? 0 : (0 < e ? r : n)(e);
        };
    },
    48: function (e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36));
        };
    },
    49: function (e, t, n) {
        var r = n(57),
            i = n(38);
        e.exports = function (e) {
            return r(i(e));
        };
    },
    5: function (e, t) {
        e.exports = {
            JSON_MAPPING: { PL_CODE: "code", PL_SIZE: "sizes", PL_BIDS: "bids", BD_BIDDER: "bidder", BD_ID: "paramsd", BD_PL_ID: "placementId", ADSERVER_TARGETING: "adserverTargeting", BD_SETTING_STANDARD: "standard" },
            DEBUG_MODE: "pbjs_debug",
            STATUS: { GOOD: 1, NO_BID: 2 },
            CB: { TYPE: { ALL_BIDS_BACK: "allRequestedBidsBack", AD_UNIT_BIDS_BACK: "adUnitBidsBack", BID_WON: "bidWon", REQUEST_BIDS: "requestBids" } },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                NO_BID: "noBid",
                BID_WON: "bidWon",
                BIDDER_DONE: "bidderDone",
                SET_TARGETING: "setTargeting",
                BEFORE_REQUEST_BIDS: "beforeRequestBids",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed",
            },
            AD_RENDER_FAILED_REASON: { PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt", NO_AD: "noAd", EXCEPTION: "exception", CANNOT_FIND_AD: "cannotFindAd", MISSING_DOC_OR_ADID: "missingDocOrAdid" },
            EVENT_ID_PATHS: { bidWon: "adUnitCode" },
            GRANULARITY_OPTIONS: { LOW: "low", MEDIUM: "medium", HIGH: "high", AUTO: "auto", DENSE: "dense", CUSTOM: "custom" },
            TARGETING_KEYS: { BIDDER: "hb_bidder", AD_ID: "hb_adid", PRICE_BUCKET: "hb_pb", SIZE: "hb_size", DEAL: "hb_deal", SOURCE: "hb_source", FORMAT: "hb_format", UUID: "hb_uuid", CACHE_ID: "hb_cache_id", CACHE_HOST: "hb_cache_host" },
            NATIVE_KEYS: {
                title: "hb_native_title",
                body: "hb_native_body",
                body2: "hb_native_body2",
                privacyLink: "hb_native_privacy",
                privacyIcon: "hb_native_privicon",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                displayUrl: "hb_native_displayurl",
                cta: "hb_native_cta",
                rating: "hb_native_rating",
                address: "hb_native_address",
                downloads: "hb_native_downloads",
                likes: "hb_native_likes",
                phone: "hb_native_phone",
                price: "hb_native_price",
                salePrice: "hb_native_saleprice",
            },
            S2S: { SRC: "s2s", DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction", SYNCED_BIDDERS_KEY: "pbjsSyncs" },
            BID_STATUS: { BID_TARGETING_SET: "targetingSet", RENDERED: "rendered" },
            SUBMODULES_THAT_ALWAYS_REFRESH_ID: { parrableId: !0 },
        };
    },
    50: function (e, t, n) {
        "use strict";
        function m() {
            return this;
        }
        var S = n(59),
            A = n(15),
            E = n(92),
            T = n(21),
            O = n(31),
            I = n(93),
            C = n(52),
            w = n(98),
            j = n(14)("iterator"),
            _ = !([].keys && "next" in [].keys()),
            B = "values";
        e.exports = function (e, t, n, r, i, o, a) {
            I(n, t, r);
            function c(e) {
                if (!_ && e in g) return g[e];
                switch (e) {
                    case "keys":
                    case B:
                        return function () {
                            return new n(this, e);
                        };
                }
                return function () {
                    return new n(this, e);
                };
            }
            var u,
                s,
                d,
                f = t + " Iterator",
                l = i == B,
                p = !1,
                g = e.prototype,
                b = g[j] || g["@@iterator"] || (i && g[i]),
                y = b || c(i),
                v = i ? (l ? c("entries") : y) : void 0,
                h = ("Array" == t && g.entries) || b;
            if (
                (h && (d = w(h.call(new e()))) !== Object.prototype && d.next && (C(d, f, !0), S || "function" == typeof d[j] || T(d, j, m)),
                l &&
                    b &&
                    b.name !== B &&
                    ((p = !0),
                    (y = function () {
                        return b.call(this);
                    })),
                (S && !a) || (!_ && !p && g[j]) || T(g, j, y),
                (O[t] = y),
                (O[f] = m),
                i)
            )
                if (((u = { values: l ? y : c(B), keys: o ? y : c("keys"), entries: v }), a)) for (s in u) s in g || E(g, s, u[s]);
                else A(A.P + A.F * (_ || p), t, u);
            return u;
        };
    },
    51: function (e, t, n) {
        var r = n(58)("keys"),
            i = n(48);
        e.exports = function (e) {
            return r[e] || (r[e] = i(e));
        };
    },
    52: function (e, t, n) {
        var r = n(19).f,
            i = n(30),
            o = n(14)("toStringTag");
        e.exports = function (e, t, n) {
            e && !i((e = n ? e : e.prototype), o) && r(e, o, { configurable: !0, value: t });
        };
    },
    53: function (e, t, n) {
        n(162), (e.exports = n(16).Array.findIndex);
    },
    54: function (e, t, n) {
        "use strict";
        t.a = function (t, n) {
            (o.adServers = o.adServers || {}),
                (o.adServers[t] = o.adServers[t] || {}),
                Object.keys(n).forEach(function (e) {
                    o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : (o.adServers[t][e] = n[e]);
                });
        };
        var r = n(20),
            i = n(0),
            o = Object(r.a)();
    },
    55: function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e;
        };
    },
    56: function (e, t, n) {
        var r = n(17),
            i = n(18).document,
            o = r(i) && r(i.createElement);
        e.exports = function (e) {
            return o ? i.createElement(e) : {};
        };
    },
    57: function (e, t, n) {
        var r = n(37);
        e.exports = Object("z").propertyIsEnumerable(0)
            ? Object
            : function (e) {
                  return "String" == r(e) ? e.split("") : Object(e);
              };
    },
    58: function (e, t, n) {
        var r = n(16),
            i = n(18),
            o = "__core-js_shared__",
            a = i[o] || (i[o] = {});
        (e.exports = function (e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {});
        })("versions", []).push({ version: r.version, mode: n(59) ? "pure" : "global", copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)" });
    },
    59: function (e, t) {
        e.exports = !0;
    },
    60: function (e, t, n) {
        var u = n(49),
            s = n(39),
            d = n(89);
        e.exports = function (c) {
            return function (e, t, n) {
                var r,
                    i = u(e),
                    o = s(i.length),
                    a = d(n, o);
                if (c && t != t) {
                    for (; a < o; ) if ((r = i[a++]) != r) return !0;
                } else for (; a < o; a++) if ((c || a in i) && i[a] === t) return c || a || 0;
                return !c && -1;
            };
        };
    },
    61: function (e, t, n) {
        n(90), n(62), n(99), n(101), n(105), n(108), n(110), (e.exports = n(16).Set);
    },
    62: function (e, t, n) {
        "use strict";
        var r = n(91)(!0);
        n(50)(
            String,
            "String",
            function (e) {
                (this._t = String(e)), (this._i = 0);
            },
            function () {
                var e,
                    t = this._t,
                    n = this._i;
                return n >= t.length ? { value: void 0, done: !0 } : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
            }
        );
    },
    63: function (e, t, r) {
        function i() {}
        var o = r(29),
            a = r(94),
            c = r(64),
            u = r(51)("IE_PROTO"),
            s = "prototype",
            d = function () {
                var e,
                    t = r(56)("iframe"),
                    n = c.length;
                for (t.style.display = "none", r(97).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object</script>"), e.close(), d = e.F; n--; ) delete d[s][c[n]];
                return d();
            };
        e.exports =
            Object.create ||
            function (e, t) {
                var n;
                return null !== e ? ((i[s] = o(e)), (n = new i()), (i[s] = null), (n[u] = e)) : (n = d()), void 0 === t ? n : a(n, t);
            };
    },
    64: function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    },
    647: function (e, t, n) {
        e.exports = n(79);
    },
    65: function (e, t) {
        e.exports = function (e, t) {
            return { value: t, done: !!e };
        };
    },
    66: function (e, t, n) {
        var i = n(21);
        e.exports = function (e, t, n) {
            for (var r in t) n && e[r] ? (e[r] = t[r]) : i(e, r, t[r]);
            return e;
        };
    },
    67: function (e, t) {
        e.exports = function (e, t, n, r) {
            if (!(e instanceof t) || (void 0 !== r && r in e)) throw TypeError(n + ": incorrect invocation!");
            return e;
        };
    },
    68: function (e, t, n) {
        var o = n(29);
        e.exports = function (t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n);
            } catch (e) {
                var i = t.return;
                throw (void 0 !== i && o(i.call(t)), e);
            }
        };
    },
    69: function (e, t, n) {
        var r = n(31),
            i = n(14)("iterator"),
            o = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (r.Array === e || o[i] === e);
        };
    },
    7: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            n.d(t, "gdprDataHandler", function () {
                return D;
            }),
            n.d(t, "uspDataHandler", function () {
                return N;
            }),
            (t.setS2STestingModule = function (e) {
                C = e;
            });
        var A = n(0),
            p = n(76),
            g = n(27),
            d = n(1),
            h = n(4),
            E = n(3),
            r = n(13),
            i = n(11),
            T = n.n(i),
            o = n(12),
            O = n.n(o),
            b = n(77),
            I = n(32);
        function m(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == c.return || c.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
                })(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function y() {
            return (y =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var C,
            w = n(0),
            j = n(5),
            _ = n(8),
            f = {},
            B = (f.bidderRegistry = {}),
            l = (f.aliasRegistry = {}),
            U = {};
        E.b.getConfig("s2sConfig", function (e) {
            U = e.s2sConfig;
        });
        var c = {};
        function R(e) {
            var i = e.bidderCode,
                s = e.auctionId,
                d = e.bidderRequestId,
                t = e.adUnits,
                f = e.labels,
                l = e.src;
            return t
                .reduce(function (e, c) {
                    var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes),
                        n = t.active,
                        u = t.mediaTypes,
                        r = t.filterResults;
                    return (
                        n ? r && w.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : w.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')),
                        n &&
                            e.push(
                                c.bids
                                    .filter(function (e) {
                                        return e.bidder === i;
                                    })
                                    .reduce(function (e, t) {
                                        var n = c.nativeParams || w.deepAccess(c, "mediaTypes.native");
                                        n && (t = y({}, t, { nativeParams: Object(g.g)(n) })), (t = y({}, t, Object(A.getDefinedParams)(c, ["fpd", "mediaType", "renderer", "storedAuctionResponse"])));
                                        var r = Object(p.b)(Object(p.a)(t, f), u),
                                            i = r.active,
                                            o = r.mediaTypes,
                                            a = r.filterResults;
                                        return (
                                            i
                                                ? a && w.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after)
                                                : w.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')),
                                            w.isValidMediaTypes(o) ? (t = y({}, t, { mediaTypes: o })) : w.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)),
                                            i &&
                                                e.push(
                                                    y({}, t, {
                                                        adUnitCode: c.code,
                                                        transactionId: c.transactionId,
                                                        sizes: w.deepAccess(o, "banner.sizes") || w.deepAccess(o, "video.playerSize") || [],
                                                        bidId: t.bid_id || w.getUniqueIdentifierStr(),
                                                        bidderRequestId: d,
                                                        auctionId: s,
                                                        src: l,
                                                        bidRequestsCount: b.a.getRequestsCounter(c.code),
                                                        bidderRequestsCount: b.a.getBidderRequestsCounter(c.code, t.bidder),
                                                        bidderWinsCount: b.a.getBidderWinsCounter(c.code, t.bidder),
                                                    })
                                                ),
                                            e
                                        );
                                    }, [])
                            ),
                        e
                    );
                }, [])
                .reduce(A.flatten, [])
                .filter(function (e) {
                    return "" !== e;
                });
        }
        var D = {
                consentData: null,
                setConsentData: function (e) {
                    D.consentData = e;
                },
                getConsentData: function () {
                    return D.consentData;
                },
            },
            N = {
                consentData: null,
                setConsentData: function (e) {
                    N.consentData = e;
                },
                getConsentData: function () {
                    return N.consentData;
                },
            };
        function k() {
            return U && U.enabled && U.testing && C;
        }
        function u(t, n, e) {
            try {
                var r = B[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (w.logInfo("Invoking ".concat(t, ".").concat(n)), E.b.runWithBidder(t, A.bind.call(r[n], r, e)));
            } catch (e) {
                w.logWarn("Error calling ".concat(n, " of ").concat(t));
            }
        }
        (f.makeBidRequests = Object(r.b)(
            "sync",
            function (e, i, o, a, c) {
                _.emit(j.EVENTS.BEFORE_REQUEST_BIDS, e);
                var u = [],
                    t = Object(A.getBidderCodes)(e);
                E.b.getConfig("bidderSequence") === E.a && (t = Object(A.shuffle)(t));
                var n,
                    r,
                    s,
                    d,
                    f = Object(I.b)(),
                    l = t,
                    p = [];
                if (U.enabled) {
                    if (k()) {
                        var g = C.getSourceBidderMap(e);
                        p = g[C.CLIENT];
                    }
                    var b = U.bidders;
                    l = t.filter(function (e) {
                        return !T()(b, e) || T()(p, e);
                    });
                    Boolean(k() && U.testServerOnly) &&
                        ((d = e),
                        Boolean(
                            O()(d, function (e) {
                                return O()(e.bids, function (e) {
                                    return (e.bidSource || (U.bidderControl && U.bidderControl[e.bidder])) && e.finalSource === C.SERVER;
                                });
                            })
                        )) &&
                        (l.length = 0);
                    var y =
                            ((n = e),
                            (r = U.bidders),
                            (s = w.deepClone(n)).forEach(function (e) {
                                e.bids = e.bids
                                    .filter(function (e) {
                                        return T()(r, e.bidder) && (!k() || e.finalSource !== C.CLIENT);
                                    })
                                    .map(function (e) {
                                        return (e.bid_id = w.getUniqueIdentifierStr()), e;
                                    });
                            }),
                            (s = s.filter(function (e) {
                                return 0 !== e.bids.length;
                            }))),
                        v = w.generateUUID();
                    b.forEach(function (e) {
                        var t = w.getUniqueIdentifierStr(),
                            n = {
                                bidderCode: e,
                                auctionId: o,
                                bidderRequestId: t,
                                tid: v,
                                bids: R({ bidderCode: e, auctionId: o, bidderRequestId: t, adUnits: w.deepClone(y), labels: c, src: j.S2S.SRC }),
                                auctionStart: i,
                                timeout: U.timeout,
                                src: j.S2S.SRC,
                                refererInfo: f,
                            };
                        0 !== n.bids.length && u.push(n);
                    }),
                        y.forEach(function (e) {
                            var t = e.bids.filter(function (t) {
                                return O()(u, function (e) {
                                    return O()(e.bids, function (e) {
                                        return e.bidId === t.bid_id;
                                    });
                                });
                            });
                            e.bids = t;
                        }),
                        u.forEach(function (e) {
                            e.adUnitsS2SCopy = y.filter(function (e) {
                                return 0 < e.bids.length;
                            });
                        });
                }
                var h,
                    m,
                    S =
                        ((h = e),
                        (m = w.deepClone(h)).forEach(function (e) {
                            e.bids = e.bids.filter(function (e) {
                                return !k() || e.finalSource !== C.SERVER;
                            });
                        }),
                        (m = m.filter(function (e) {
                            return 0 !== e.bids.length;
                        })));
                return (
                    l.forEach(function (e) {
                        var t = w.getUniqueIdentifierStr(),
                            n = {
                                bidderCode: e,
                                auctionId: o,
                                bidderRequestId: t,
                                bids: R({ bidderCode: e, auctionId: o, bidderRequestId: t, adUnits: w.deepClone(S), labels: c, src: "client" }),
                                auctionStart: i,
                                timeout: a,
                                refererInfo: f,
                            },
                            r = B[e];
                        r || w.logError("Trying to make a request for bidder that does not exist: ".concat(e)), r && n.bids && 0 !== n.bids.length && u.push(n);
                    }),
                    D.getConsentData() &&
                        u.forEach(function (e) {
                            e.gdprConsent = D.getConsentData();
                        }),
                    N.getConsentData() &&
                        u.forEach(function (e) {
                            e.uspConsent = N.getConsentData();
                        }),
                    u
                );
            },
            "makeBidRequests"
        )),
            (f.callBids = function (e, t, r, i, o, a, c) {
                if (t.length) {
                    var n = m(
                            t.reduce(
                                function (e, t) {
                                    return e[Number(void 0 !== t.src && t.src === j.S2S.SRC)].push(t), e;
                                },
                                [[], []]
                            ),
                            2
                        ),
                        u = n[0],
                        s = n[1];
                    if (s.length) {
                        var d = Object(h.b)(a, o ? { request: o.request.bind(null, "s2s"), done: o.done } : void 0),
                            f = U.bidders,
                            l = B[U.adapter],
                            p = s[0].tid,
                            g = s[0].adUnitsS2SCopy;
                        if (l) {
                            var b = { tid: p, ad_units: g };
                            if (b.ad_units.length) {
                                var y = s.map(function (e) {
                                        return (e.start = Object(A.timestamp)()), i.bind(e);
                                    }),
                                    v = b.ad_units.reduce(function (e, t) {
                                        return e.concat(
                                            (t.bids || []).reduce(function (e, t) {
                                                return e.concat(t.bidder);
                                            }, [])
                                        );
                                    }, []);
                                w.logMessage(
                                    "CALLING S2S HEADER BIDDERS ==== ".concat(
                                        f
                                            .filter(function (e) {
                                                return T()(v, e);
                                            })
                                            .join(",")
                                    )
                                ),
                                    s.forEach(function (e) {
                                        _.emit(j.EVENTS.BID_REQUESTED, e);
                                    }),
                                    l.callBids(
                                        b,
                                        s,
                                        function (e, t) {
                                            var n = Object(A.getBidderRequest)(s, t.bidderCode, e);
                                            n && r.call(n, e, t);
                                        },
                                        function () {
                                            return y.forEach(function (e) {
                                                return e();
                                            });
                                        },
                                        d
                                    );
                            }
                        } else w.logError("missing " + U.adapter);
                    }
                    u.forEach(function (e) {
                        e.start = Object(A.timestamp)();
                        var t = B[e.bidderCode];
                        w.logMessage("CALLING BIDDER ======= ".concat(e.bidderCode)), _.emit(j.EVENTS.BID_REQUESTED, e);
                        var n = Object(h.b)(a, o ? { request: o.request.bind(null, e.bidderCode), done: o.done } : void 0);
                        E.b.runWithBidder(e.bidderCode, A.bind.call(t.callBids, t, e, r.bind(e), i.bind(e), n, c, E.b.callbackWithBidder(e.bidderCode)));
                    });
                } else w.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
            }),
            (f.videoAdapters = []),
            (f.registerBidAdapter = function (e, t) {
                var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                    r = void 0 === n ? [] : n;
                e && t
                    ? "function" == typeof e.callBids
                        ? ((B[t] = e), T()(r, "video") && f.videoAdapters.push(t), T()(r, "native") && g.e.push(t))
                        : w.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function")
                    : w.logError("bidAdaptor or bidderCode not specified");
            }),
            (f.aliasBidAdapter = function (t, e) {
                var n, r;
                if (void 0 === B[e]) {
                    var i = B[t];
                    if (void 0 === i) {
                        var o = E.b.getConfig("s2sConfig"),
                            a = o && o.bidders;
                        a && T()(a, e) ? (l[e] = t) : w.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter");
                    } else
                        try {
                            var c,
                                u = ((n = t), (r = []), T()(f.videoAdapters, n) && r.push("video"), T()(g.e, n) && r.push("native"), r);
                            if (i.constructor.prototype != Object.prototype) (c = new i.constructor()).setBidderCode(e);
                            else {
                                var s = i.getSpec();
                                (c = Object(d.newBidder)(y({}, s, { code: e }))), (l[e] = t);
                            }
                            f.registerBidAdapter(c, e, { supportedMediaTypes: u });
                        } catch (e) {
                            w.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter");
                        }
                } else w.logMessage('alias name "' + e + '" has been already specified.');
            }),
            (f.registerAnalyticsAdapter = function (e) {
                var t = e.adapter,
                    n = e.code;
                t && n
                    ? "function" == typeof t.enableAnalytics
                        ? ((t.code = n), (c[n] = t))
                        : w.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function'))
                    : w.logError("Prebid Error: analyticsAdapter or analyticsCode not specified");
            }),
            (f.enableAnalytics = function (e) {
                w.isArray(e) || (e = [e]),
                    w._each(e, function (e) {
                        var t = c[e.provider];
                        t ? t.enableAnalytics(e) : w.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."));
                    });
            }),
            (f.getBidAdapter = function (e) {
                return B[e];
            }),
            (f.callTimedOutBidders = function (t, n, r) {
                (n = n.map(function (e) {
                    return (e.params = w.getUserConfiguredParams(t, e.adUnitCode, e.bidder)), (e.timeout = r), e;
                })),
                    (n = w.groupBy(n, "bidder")),
                    Object.keys(n).forEach(function (e) {
                        u(e, "onTimeout", n[e]);
                    });
            }),
            (f.callBidWonBidder = function (e, t, n) {
                (t.params = w.getUserConfiguredParams(n, t.adUnitCode, t.bidder)), b.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), u(e, "onBidWon", t);
            }),
            (f.callSetTargetingBidder = function (e, t) {
                u(e, "onSetTargeting", t);
            }),
            (t.default = f);
    },
    70: function (e, t, n) {
        var r = n(71),
            i = n(14)("iterator"),
            o = n(31);
        e.exports = n(16).getIteratorMethod = function (e) {
            if (null != e) return e[i] || e["@@iterator"] || o[r(e)];
        };
    },
    71: function (e, t, n) {
        var i = n(37),
            o = n(14)("toStringTag"),
            a =
                "Arguments" ==
                i(
                    (function () {
                        return arguments;
                    })()
                );
        e.exports = function (e) {
            var t, n, r;
            return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (n = (function (e, t) {
                      try {
                          return e[t];
                      } catch (e) {}
                  })((t = Object(e)), o))
                ? n
                : a
                ? i(t)
                : "Object" == (r = i(t)) && "function" == typeof t.callee
                ? "Arguments"
                : r;
        };
    },
    72: function (e, t, n) {
        function r(e) {
            c(e, i, { value: { i: "O" + ++u, w: {} } });
        }
        var i = n(48)("meta"),
            o = n(17),
            a = n(30),
            c = n(19).f,
            u = 0,
            s =
                Object.isExtensible ||
                function () {
                    return !0;
                },
            d = !n(36)(function () {
                return s(Object.preventExtensions({}));
            }),
            f = (e.exports = {
                KEY: i,
                NEED: !1,
                fastKey: function (e, t) {
                    if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!a(e, i)) {
                        if (!s(e)) return "F";
                        if (!t) return "E";
                        r(e);
                    }
                    return e[i].i;
                },
                getWeak: function (e, t) {
                    if (!a(e, i)) {
                        if (!s(e)) return !0;
                        if (!t) return !1;
                        r(e);
                    }
                    return e[i].w;
                },
                onFreeze: function (e) {
                    return d && f.NEED && s(e) && !a(e, i) && r(e), e;
                },
            });
    },
    73: function (e, t, n) {
        var r = n(17);
        e.exports = function (e, t) {
            if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e;
        };
    },
    74: function (e, t, n) {
        n(62), n(112), (e.exports = n(16).Array.from);
    },
    75: function (e, t, n) {
        "use strict";
        t.a = function (e) {
            var t = e;
            return {
                callBids: function () {},
                setBidderCode: function (e) {
                    t = e;
                },
                getBidderCode: function () {
                    return t;
                },
            };
        };
    },
    76: function (e, t, n) {
        "use strict";
        (t.a = function (e, t) {
            if (e.labelAll) return { labelAll: !0, labels: e.labelAll, activeLabels: t };
            return { labelAll: !1, labels: e.labelAny, activeLabels: t };
        }),
            (t.c = function (e) {
                var t = y(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
                return !t.shouldFilter || !!t.sizesSupported[e];
            }),
            (t.b = function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.labels,
                    n = void 0 === t ? [] : t,
                    r = e.labelAll,
                    i = void 0 !== r && r,
                    o = e.activeLabels,
                    a = void 0 === o ? [] : o,
                    c = 1 < arguments.length ? arguments[1] : void 0,
                    u = 2 < arguments.length ? arguments[2] : void 0,
                    s = y(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
                c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? { banner: { sizes: u } } : {};
                var d = Object(p.deepAccess)(c, "banner.sizes");
                s.shouldFilter &&
                    d &&
                    (c.banner.sizes = d.filter(function (e) {
                        return s.sizesSupported[e];
                    }));
                var f = Object.keys(c),
                    l = {
                        active:
                            f.every(function (e) {
                                return "banner" !== e;
                            }) ||
                            (f.some(function (e) {
                                return "banner" === e;
                            }) &&
                                0 < Object(p.deepAccess)(c, "banner.sizes.length") &&
                                (0 === n.length ||
                                    (!i &&
                                        (n.some(function (e) {
                                            return s.labels[e];
                                        }) ||
                                            n.some(function (e) {
                                                return g()(a, e);
                                            }))) ||
                                    (i &&
                                        n.reduce(function (e, t) {
                                            return e ? s.labels[t] || g()(a, t) : e;
                                        }, !0)))),
                        mediaTypes: c,
                    };
                d && d.length !== c.banner.sizes.length && (l.filterResults = { before: d, after: c.banner.sizes });
                return l;
            });
        var r = n(3),
            p = n(0),
            i = n(11),
            g = n.n(i);
        function o(e) {
            return (o =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        var b = [];
        function y(e) {
            return e.reduce(
                function (n, r) {
                    if ("object" === o(r) && "string" == typeof r.mediaQuery) {
                        var t = !1;
                        if ("" === r.mediaQuery) t = !0;
                        else
                            try {
                                t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches;
                            } catch (e) {
                                Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), (t = matchMedia(r.mediaQuery).matches);
                            }
                        t &&
                            (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0),
                            ["labels", "sizesSupported"].forEach(function (t) {
                                return (r[t] || []).forEach(function (e) {
                                    return (n[t][e] = !0);
                                });
                            }));
                    } else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                    return n;
                },
                { labels: {}, sizesSupported: {}, shouldFilter: !1 }
            );
        }
        r.b.getConfig("sizeConfig", function (e) {
            return (t = e.sizeConfig), void (b = t);
            var t;
        });
    },
    77: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o;
        });
        var r = n(0),
            c = {};
        function i(e, t, n) {
            var r,
                i,
                o,
                a = ((i = n), (o = c[(r = e)] = c[r] || { bidders: {} }), i ? (o.bidders[i] = o.bidders[i] || {}) : o);
            return (a[t] = (a[t] || 0) + 1), a[t];
        }
        var o = {
            incrementRequestsCounter: function (e) {
                return i(e, "requestsCounter");
            },
            incrementBidderRequestsCounter: function (e, t) {
                return i(e, "requestsCounter", t);
            },
            incrementBidderWinsCounter: function (e, t) {
                return i(e, "winsCounter", t);
            },
            getRequestsCounter: function (e) {
                return Object(r.deepAccess)(c, "".concat(e, ".requestsCounter")) || 0;
            },
            getBidderRequestsCounter: function (e, t) {
                return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".requestsCounter")) || 0;
            },
            getBidderWinsCounter: function (e, t) {
                return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".winsCounter")) || 0;
            },
        };
    },
    78: function (e, t, n) {
        "use strict";
        (t.b = function (e, t) {
            var n = { puts: e.map(i) };
            Object(r.a)(
                o.b.getConfig("cache.url"),
                (function (n) {
                    return {
                        success: function (e) {
                            var t;
                            try {
                                t = JSON.parse(e).responses;
                            } catch (e) {
                                return void n(e, []);
                            }
                            t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), []);
                        },
                        error: function (e, t) {
                            n(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), []);
                        },
                    };
                })(t),
                JSON.stringify(n),
                { contentType: "text/plain", withCredentials: !0 }
            );
        }),
            (t.a = function (e) {
                return "".concat(o.b.getConfig("cache.url"), "?uuid=").concat(e);
            });
        var r = n(4),
            o = n(3);
        function i(e) {
            var t,
                n,
                r,
                i = {
                    type: "xml",
                    value: e.vastXml
                        ? e.vastXml
                        : ((t = e.vastUrl),
                          (n = e.vastImpUrl),
                          (r = n ? "<![CDATA[".concat(n, "]]>") : ""),
                          '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['
                              .concat(t, "]]></VASTAdTagURI>\n        <Impression>")
                              .concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
                    ttlseconds: Number(e.ttl),
                };
            return o.b.getConfig("cache.vasttrack") && ((i.bidder = e.bidder), (i.bidid = e.requestId)), "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (i.key = e.customCacheKey), i;
        }
    },
    79: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            n.d(t, "checkAdUnitSetup", function () {
                return q;
            });
        var r = n(20),
            i = n(0),
            o = n(165),
            a = n(33),
            d = n(3),
            v = n(24),
            f = n(35),
            c = n(13),
            u = n(166),
            s = n(11),
            l = n.n(s),
            p = n(77),
            h = n(10),
            g = n(23);
        function b(e) {
            return (b =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function y() {
            return (y =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var m = Object(r.a)(),
            S = n(5),
            A = n(0),
            E = n(7).default,
            T = n(8),
            O = a.a.triggerUserSyncs,
            I = S.EVENTS,
            C = I.ADD_AD_UNITS,
            w = I.BID_WON,
            j = I.REQUEST_BIDS,
            _ = I.SET_TARGETING,
            B = I.AD_RENDER_FAILED,
            U = S.AD_RENDER_FAILED_REASON,
            R = U.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            D = U.NO_AD,
            N = U.EXCEPTION,
            k = U.CANNOT_FIND_AD,
            x = U.MISSING_DOC_OR_ADID,
            P = {
                bidWon: function (e) {
                    var t = v.a
                        .getBidsRequested()
                        .map(function (e) {
                            return e.bids.map(function (e) {
                                return e.adUnitCode;
                            });
                        })
                        .reduce(i.flatten)
                        .filter(i.uniques);
                    return !!A.contains(t, e) || void A.logError('The "' + e + '" placement is not defined.');
                },
            };
        function M(e, t, n) {
            e.defaultView && e.defaultView.frameElement && ((e.defaultView.frameElement.width = t), (e.defaultView.frameElement.height = n));
        }
        Object(u.a)(), (m.bidderSettings = m.bidderSettings || {}), (m.libLoaded = !0), (m.version = "v3.6.0"), A.logInfo("Prebid.js v3.6.0 loaded"), (m.adUnits = m.adUnits || []), (m.triggerUserSyncs = O);
        var q = Object(c.b)(
            "sync",
            function (e) {
                function c(e, t) {
                    var n = [];
                    return (
                        A.isArray(e) &&
                            (t ? e.length === t : 0 < e.length) &&
                            (e.every(function (e) {
                                return Object(i.isArrayOfNums)(e, 2);
                            })
                                ? (n = e)
                                : Object(i.isArrayOfNums)(e, 2) && n.push(e)),
                        n
                    );
                }
                return e.filter(function (e) {
                    var t = e.mediaTypes;
                    if (!t || 0 === Object.keys(t).length)
                        return A.logError("Detected adUnit.code '".concat(e.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed.")), !1;
                    if (t.banner) {
                        var n = c(t.banner.sizes);
                        0 < n.length
                            ? ((t.banner.sizes = n), (e.sizes = n))
                            : (A.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."),
                              delete e.mediaTypes.banner);
                    }
                    if (t.video) {
                        var r = t.video;
                        if (r.playerSize) {
                            var i = "number" == typeof r.playerSize[0] ? 2 : 1,
                                o = c(r.playerSize, i);
                            0 < o.length
                                ? (e.sizes = r.playerSize = o)
                                : (A.logError(
                                      "Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."
                                  ),
                                  delete e.mediaTypes.video.playerSize);
                        }
                    }
                    if (t.native) {
                        var a = t.native;
                        a.image &&
                            a.image.sizes &&
                            !Array.isArray(a.image.sizes) &&
                            (A.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes),
                            a.image &&
                                a.image.aspect_ratios &&
                                !Array.isArray(a.image.aspect_ratios) &&
                                (A.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),
                                delete e.mediaTypes.native.image.aspect_ratios),
                            a.icon &&
                                a.icon.sizes &&
                                !Array.isArray(a.icon.sizes) &&
                                (A.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes);
                    }
                    return !0;
                });
            },
            "checkAdUnitSetup"
        );
        function G(e) {
            var n = v.a[e]().filter(A.bind.call(i.adUnitsFilter, this, v.a.getAdUnitCodes())),
                r = v.a.getLastAuctionId();
            return n
                .map(function (e) {
                    return e.adUnitCode;
                })
                .filter(i.uniques)
                .map(function (t) {
                    return n.filter(function (e) {
                        return e.auctionId === r && e.adUnitCode === t;
                    });
                })
                .filter(function (e) {
                    return e && e[0] && e[0].adUnitCode;
                })
                .map(function (e) {
                    return (t = {}), (n = e[0].adUnitCode), (r = { bids: e }), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r), t;
                    var t, n, r;
                })
                .reduce(function (e, t) {
                    return y(e, t);
                }, {});
        }
        function W(e) {
            var t = e.reason,
                n = e.message,
                r = e.bid,
                i = e.id,
                o = { reason: t, message: n };
            r && (o.bid = r), i && (o.adId = i), A.logError(n), T.emit(B, o);
        }
        function L(e) {
            e.forEach(function (e) {
                if (void 0 === e.called)
                    try {
                        e.call(), (e.called = !0);
                    } catch (e) {
                        A.logError("Error processing command :", "prebid.js", e);
                    }
            });
        }
        (m.getAdserverTargetingForAdUnitCodeStr = function (e) {
            if ((A.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e)) {
                var t = m.getAdserverTargetingForAdUnitCode(e);
                return A.transformAdServerTargetingObj(t);
            }
            A.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode");
        }),
            (m.getAdserverTargetingForAdUnitCode = function (e) {
                return m.getAdserverTargeting(e)[e];
            }),
            (m.getAdserverTargeting = function (e) {
                return A.logInfo("Invoking pbjs.getAdserverTargeting", arguments), f.a.getAllTargeting(e);
            }),
            (m.getNoBids = function () {
                return A.logInfo("Invoking pbjs.getNoBids", arguments), G("getNoBids");
            }),
            (m.getBidResponses = function () {
                return A.logInfo("Invoking pbjs.getBidResponses", arguments), G("getBidsReceived");
            }),
            (m.getBidResponsesForAdUnitCode = function (t) {
                return {
                    bids: v.a.getBidsReceived().filter(function (e) {
                        return e.adUnitCode === t;
                    }),
                };
            }),
            (m.setTargetingForGPTAsync = function (e, t) {
                if ((A.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(i.isGptPubadsDefined)())) {
                    var n = f.a.getAllTargeting(e);
                    f.a.resetPresetTargeting(e),
                        f.a.setTargetingForGPT(n, t),
                        Object.keys(n).forEach(function (t) {
                            Object.keys(n[t]).forEach(function (e) {
                                "hb_adid" === e && v.a.setStatusForBids(n[t][e], S.BID_STATUS.BID_TARGETING_SET);
                            });
                        }),
                        T.emit(_, n);
                } else A.logError("window.googletag is not defined on the page");
            }),
            (m.setTargetingForAst = function (e) {
                A.logInfo("Invoking pbjs.setTargetingForAn", arguments), f.a.isApntagDefined() ? (f.a.setTargetingForAst(e), T.emit(_, f.a.getAllTargeting())) : A.logError("window.apntag is not defined on the page");
            }),
            (m.renderAd = function (e, t) {
                if ((A.logInfo("Invoking pbjs.renderAd", arguments), A.logMessage("Calling renderAd with adId :" + t), e && t))
                    try {
                        var n = v.a.findBidByAdId(t);
                        if (n) {
                            (n.ad = A.replaceAuctionPrice(n.ad, n.cpm)), (n.adUrl = A.replaceAuctionPrice(n.adUrl, n.cpm)), v.a.addWinningBid(n), T.emit(w, n);
                            var r = n.height,
                                i = n.width,
                                o = n.ad,
                                a = n.mediaType,
                                c = n.adUrl,
                                u = n.renderer,
                                s = document.createComment("Creative ".concat(n.creativeId, " served by ").concat(n.bidder, " Prebid.js Header Bidding"));
                            if ((A.insertElement(s, e, "body"), Object(h.c)(u))) Object(h.b)(u, n);
                            else if ((e === document && !A.inIframe()) || "video" === a) {
                                var d = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.");
                                W({ reason: R, message: d, bid: n, id: t });
                            } else if (o) {
                                if (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/")) {
                                    var f = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1];
                                    f && parseInt(f, 10) < 67 && e.open("text/html", "replace");
                                }
                                e.write(o), e.close(), M(e, i, r), A.callBurl(n);
                            } else if (c) {
                                var l = A.createInvisibleIframe();
                                (l.height = r), (l.width = i), (l.style.display = "inline"), (l.style.overflow = "hidden"), (l.src = c), A.insertElement(l, e, "body"), M(e, i, r), A.callBurl(n);
                            } else {
                                var p = "Error trying to write ad. No ad for bid response id: ".concat(t);
                                W({ reason: D, message: p, bid: n, id: t });
                            }
                        } else {
                            var g = "Error trying to write ad. Cannot find ad by given id : ".concat(t);
                            W({ reason: k, message: g, id: t });
                        }
                    } catch (e) {
                        var b = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                        W({ reason: N, message: b, id: t });
                    }
                else {
                    var y = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                    W({ reason: x, message: y, id: t });
                }
            }),
            (m.removeAdUnit = function (e) {
                (A.logInfo("Invoking pbjs.removeAdUnit", arguments), e)
                    ? (A.isArray(e) ? e : [e]).forEach(function (e) {
                          for (var t = m.adUnits.length - 1; 0 <= t; t--) m.adUnits[t].code === e && m.adUnits.splice(t, 1);
                      })
                    : (m.adUnits = []);
            }),
            (m.requestBids = Object(c.b)("async", function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.bidsBackHandler,
                    n = e.timeout,
                    r = e.adUnits,
                    i = e.adUnitCodes,
                    o = e.labels,
                    a = e.auctionId;
                T.emit(j);
                var c = n || d.b.getConfig("bidderTimeout");
                if (
                    ((r = r || m.adUnits),
                    A.logInfo("Invoking pbjs.requestBids", arguments),
                    i && i.length
                        ? (r = r.filter(function (e) {
                              return l()(i, e.code);
                          }))
                        : (i =
                              r &&
                              r.map(function (e) {
                                  return e.code;
                              })),
                    (r = q(r)).forEach(function (i) {
                        var o = Object.keys(i.mediaTypes || { banner: "banner" }),
                            e = i.bids.map(function (e) {
                                return e.bidder;
                            }),
                            a = E.bidderRegistry,
                            t = d.b.getConfig("s2sConfig"),
                            n = t && t.bidders,
                            r = n
                                ? e.filter(function (e) {
                                      return !l()(n, e);
                                  })
                                : e;
                        (i.transactionId = A.generateUUID()),
                            r.forEach(function (t) {
                                var e = a[t],
                                    n = e && e.getSpec && e.getSpec(),
                                    r = (n && n.supportedMediaTypes) || ["banner"];
                                o.some(function (e) {
                                    return l()(r, e);
                                })
                                    ? p.a.incrementBidderRequestsCounter(i.code, t)
                                    : (A.logWarn(A.unsupportedBidderMessage(i, t)),
                                      (i.bids = i.bids.filter(function (e) {
                                          return e.bidder !== t;
                                      })));
                            }),
                            p.a.incrementRequestsCounter(i.code);
                    }),
                    r && 0 !== r.length)
                ) {
                    var u = v.a.createAuction({ adUnits: r, adUnitCodes: i, callback: t, cbTimeout: c, labels: o, auctionId: a }),
                        s = r.length;
                    return (
                        15 < s && A.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r),
                        i.forEach(function (e) {
                            return f.a.setLatestAuctionForAdUnit(e, u.getAuctionId());
                        }),
                        u.callBids(),
                        u
                    );
                }
                if ((A.logMessage("No adUnits configured. No bids requested."), "function" == typeof t))
                    try {
                        t();
                    } catch (e) {
                        A.logError("Error executing bidsBackHandler", null, e);
                    }
            })),
            (m.addAdUnits = function (e) {
                A.logInfo("Invoking pbjs.addAdUnits", arguments), A.isArray(e) ? m.adUnits.push.apply(m.adUnits, e) : "object" === b(e) && m.adUnits.push(e), T.emit(C);
            }),
            (m.onEvent = function (e, t, n) {
                A.logInfo("Invoking pbjs.onEvent", arguments),
                    A.isFn(t)
                        ? !n || P[e].call(null, n)
                            ? T.on(e, t, n)
                            : A.logError('The id provided is not valid for event "' + e + '" and no handler was set.')
                        : A.logError('The event handler provided is not a function and was not set on event "' + e + '".');
            }),
            (m.offEvent = function (e, t, n) {
                A.logInfo("Invoking pbjs.offEvent", arguments), (n && !P[e].call(null, n)) || T.off(e, t, n);
            }),
            (m.registerBidAdapter = function (e, t) {
                A.logInfo("Invoking pbjs.registerBidAdapter", arguments);
                try {
                    E.registerBidAdapter(e(), t);
                } catch (e) {
                    A.logError("Error registering bidder adapter : " + e.message);
                }
            }),
            (m.registerAnalyticsAdapter = function (e) {
                A.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
                try {
                    E.registerAnalyticsAdapter(e);
                } catch (e) {
                    A.logError("Error registering analytics adapter : " + e.message);
                }
            }),
            (m.createBid = function (e) {
                return A.logInfo("Invoking pbjs.createBid", arguments), Object(g.a)(e);
            }),
            (m.enableAnalytics = function (e) {
                e && !A.isEmpty(e) ? (A.logInfo("Invoking pbjs.enableAnalytics for: ", e), E.enableAnalytics(e)) : A.logError("pbjs.enableAnalytics should be called with option {}");
            }),
            (m.aliasBidder = function (e, t) {
                A.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? E.aliasBidAdapter(e, t) : A.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder");
            }),
            (m.getAllWinningBids = function () {
                return v.a.getAllWinningBids();
            }),
            (m.getAllPrebidWinningBids = function () {
                return v.a.getBidsReceived().filter(function (e) {
                    return e.status === S.BID_STATUS.BID_TARGETING_SET;
                });
            }),
            (m.getHighestCpmBids = function (e) {
                return f.a.getWinningBids(e);
            }),
            (m.markWinningBidAsUsed = function (t) {
                var e = [];
                t.adUnitCode && t.adId
                    ? (e = v.a.getBidsReceived().filter(function (e) {
                          return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
                      }))
                    : t.adUnitCode
                    ? (e = f.a.getWinningBids(t.adUnitCode))
                    : t.adId
                    ? (e = v.a.getBidsReceived().filter(function (e) {
                          return e.adId === t.adId;
                      }))
                    : A.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."),
                    0 < e.length && (e[0].status = S.BID_STATUS.RENDERED);
            }),
            (m.getConfig = d.b.getConfig),
            (m.setConfig = d.b.setConfig),
            (m.setBidderConfig = d.b.setBidderConfig),
            m.que.push(function () {
                return Object(o.a)();
            }),
            (m.cmd.push = function (e) {
                if ("function" == typeof e)
                    try {
                        e.call();
                    } catch (e) {
                        A.logError("Error processing command :", e.message, e.stack);
                    }
                else A.logError("Commands written into pbjs.cmd.push must be wrapped in a function");
            }),
            (m.que.push = m.cmd.push),
            (m.processQueue = function () {
                c.b.ready(), L(m.que), L(m.cmd);
            }),
            (t.default = m);
    },
    8: function (e, t, n) {
        function r() {
            return (r =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var c,
            i,
            u = n(0),
            o = n(5),
            a = Array.prototype.slice,
            s = Array.prototype.push,
            d = u._map(o.EVENTS, function (e) {
                return e;
            }),
            f = o.EVENT_ID_PATHS,
            l = [];
        e.exports =
            ((c = {}),
            ((i = {}).on = function (e, t, n) {
                if (((i = e), u.contains(d, i))) {
                    var r = c[e] || { que: [] };
                    n ? ((r[n] = r[n] || { que: [] }), r[n].que.push(t)) : r.que.push(t), (c[e] = r);
                } else u.logError("Wrong event name : " + e + " Valid event names :" + d);
                var i;
            }),
            (i.emit = function (e) {
                !(function (e, t) {
                    u.logMessage("Emitting event for: " + e);
                    var n = t[0] || {},
                        r = n[f[e]],
                        i = c[e] || { que: [] },
                        o = u._map(i, function (e, t) {
                            return t;
                        }),
                        a = [];
                    l.push({ eventType: e, args: n, id: r }),
                        r && u.contains(o, r) && s.apply(a, i[r].que),
                        s.apply(a, i.que),
                        u._each(a, function (e) {
                            if (e)
                                try {
                                    e.apply(null, t);
                                } catch (e) {
                                    u.logError("Error executing handler:", "events.js", e);
                                }
                        });
                })(e, a.call(arguments, 1));
            }),
            (i.off = function (e, n, r) {
                var i = c[e];
                u.isEmpty(i) ||
                    (u.isEmpty(i.que) && u.isEmpty(i[r])) ||
                    (r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que))) ||
                    (r
                        ? u._each(i[r].que, function (e) {
                              var t = i[r].que;
                              e === n && t.splice(u.indexOf.call(t, e), 1);
                          })
                        : u._each(i.que, function (e) {
                              var t = i.que;
                              e === n && t.splice(u.indexOf.call(t, e), 1);
                          }),
                    (c[e] = i));
            }),
            (i.get = function () {
                return c;
            }),
            (i.getEvents = function () {
                var n = [];
                return (
                    u._each(l, function (e) {
                        var t = r({}, e);
                        n.push(t);
                    }),
                    n
                );
            }),
            i);
    },
    82: function (e, t, n) {
        "use strict";
        var r = n(15),
            i = n(45)(5),
            o = "find",
            a = !0;
        o in [] &&
            Array(1)[o](function () {
                a = !1;
            }),
            r(r.P + r.F * a, "Array", {
                find: function (e, t) {
                    return i(this, e, 1 < arguments.length ? t : void 0);
                },
            }),
            n(40)(o);
    },
    83: function (e, t, n) {
        e.exports =
            !n(22) &&
            !n(36)(function () {
                return (
                    7 !=
                    Object.defineProperty(n(56)("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    84: function (e, t, n) {
        var i = n(17);
        e.exports = function (e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !i((r = n.call(e)))) return r;
            if ("function" == typeof (n = e.valueOf) && !i((r = n.call(e)))) return r;
            if (!t && "function" == typeof (n = e.toString) && !i((r = n.call(e)))) return r;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    85: function (e, t, n) {
        var r = n(86);
        e.exports = function (e, t) {
            return new (r(e))(t);
        };
    },
    86: function (e, t, n) {
        var r = n(17),
            i = n(87),
            o = n(14)("species");
        e.exports = function (e) {
            var t;
            return i(e) && ("function" != typeof (t = e.constructor) || (t !== Array && !i(t.prototype)) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t;
        };
    },
    87: function (e, t, n) {
        var r = n(37);
        e.exports =
            Array.isArray ||
            function (e) {
                return "Array" == r(e);
            };
    },
    88: function (e, t, n) {
        "use strict";
        var r = n(15),
            i = n(60)(!0);
        r(r.P, "Array", {
            includes: function (e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0);
            },
        }),
            n(40)("includes");
    },
    89: function (e, t, n) {
        var r = n(47),
            i = Math.max,
            o = Math.min;
        e.exports = function (e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t);
        };
    },
    9: function (e, t, n) {
        "use strict";
        function o(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == c.return || c.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t);
                })(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function i(e) {
            return e
                ? e
                      .replace(/^\?/, "")
                      .split("&")
                      .reduce(function (e, t) {
                          var n = o(t.split("="), 2),
                              r = n[0],
                              i = n[1];
                          return /\[\]$/.test(r) ? ((e[(r = r.replace("[]", ""))] = e[r] || []), e[r].push(i)) : (e[r] = i || ""), e;
                      }, {})
                : {};
        }
        function a(e) {
            return Object.keys(e)
                .map(function (t) {
                    return Array.isArray(e[t])
                        ? e[t]
                              .map(function (e) {
                                  return "".concat(t, "[]=").concat(e);
                              })
                              .join("&")
                        : "".concat(t, "=").concat(e[t]);
                })
                .join("&");
        }
        (t.d = i),
            (t.b = a),
            (t.c = function (e, t) {
                var n = document.createElement("a");
                t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? (n.href = e) : (n.href = decodeURIComponent(e));
                var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
                return {
                    href: n.href,
                    protocol: (n.protocol || "").replace(/:$/, ""),
                    hostname: n.hostname,
                    port: +n.port,
                    pathname: n.pathname.replace(/^(?!\/)/, "/"),
                    search: r ? n.search : i(n.search || ""),
                    hash: (n.hash || "").replace(/^#/, ""),
                    host: n.host || window.location.host,
                };
            }),
            (t.a = function (e) {
                return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(a(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "");
            });
    },
    90: function (e, t) {},
    91: function (e, t, n) {
        var u = n(47),
            s = n(38);
        e.exports = function (c) {
            return function (e, t) {
                var n,
                    r,
                    i = String(s(e)),
                    o = u(t),
                    a = i.length;
                return o < 0 || a <= o
                    ? c
                        ? ""
                        : void 0
                    : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r
                    ? c
                        ? i.charAt(o)
                        : n
                    : c
                    ? i.slice(o, o + 2)
                    : r - 56320 + ((n - 55296) << 10) + 65536;
            };
        };
    },
    92: function (e, t, n) {
        e.exports = n(21);
    },
    93: function (e, t, n) {
        "use strict";
        var r = n(63),
            i = n(44),
            o = n(52),
            a = {};
        n(21)(a, n(14)("iterator"), function () {
            return this;
        }),
            (e.exports = function (e, t, n) {
                (e.prototype = r(a, { next: i(1, n) })), o(e, t + " Iterator");
            });
    },
    94: function (e, t, n) {
        var a = n(19),
            c = n(29),
            u = n(95);
        e.exports = n(22)
            ? Object.defineProperties
            : function (e, t) {
                  c(e);
                  for (var n, r = u(t), i = r.length, o = 0; o < i; ) a.f(e, (n = r[o++]), t[n]);
                  return e;
              };
    },
    95: function (e, t, n) {
        var r = n(96),
            i = n(64);
        e.exports =
            Object.keys ||
            function (e) {
                return r(e, i);
            };
    },
    96: function (e, t, n) {
        var a = n(30),
            c = n(49),
            u = n(60)(!1),
            s = n(51)("IE_PROTO");
        e.exports = function (e, t) {
            var n,
                r = c(e),
                i = 0,
                o = [];
            for (n in r) n != s && a(r, n) && o.push(n);
            for (; t.length > i; ) a(r, (n = t[i++])) && (~u(o, n) || o.push(n));
            return o;
        };
    },
    97: function (e, t, n) {
        var r = n(18).document;
        e.exports = r && r.documentElement;
    },
    98: function (e, t, n) {
        var r = n(30),
            i = n(46),
            o = n(51)("IE_PROTO"),
            a = Object.prototype;
        e.exports =
            Object.getPrototypeOf ||
            function (e) {
                return (e = i(e)), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null;
            };
    },
    99: function (e, t, n) {
        n(100);
        for (
            var r = n(18),
                i = n(21),
                o = n(31),
                a = n(14)("toStringTag"),
                c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
                    ","
                ),
                u = 0;
            u < c.length;
            u++
        ) {
            var s = c[u],
                d = r[s],
                f = d && d.prototype;
            f && !f[a] && i(f, a, s), (o[s] = o.Array);
        }
    },
});
pbjsChunk(
    [225],
    {
        201: function (e, r, t) {
            e.exports = t(202);
        },
        202: function (e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", { value: !0 }),
                t.d(r, "spec", function () {
                    return m;
                });
            var f = t(10),
                _ = t(0),
                k = t(3),
                v = t(1),
                y = t(2),
                c = t(24),
                a = t(12),
                I = t.n(a),
                n = t(11),
                x = t.n(n),
                g = t(34);
            function i(e) {
                return (i =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            function b() {
                return (b =
                    Object.assign ||
                    function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = arguments[r];
                            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function A(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return s(e);
                    })(e) ||
                    (function (e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                    })(e) ||
                    (function (e, r) {
                        if (!e) return;
                        if ("string" == typeof e) return s(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(t);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return s(e, r);
                    })(e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function s(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
                return a;
            }
            var C = "appnexus",
                S = "https://ib.adnxs.com/ut/v3/prebid",
                u = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"],
                w = ["age", "externalUid", "segments", "gender", "dnt", "language"],
                T = ["geo", "device_id"],
                E = ["enabled", "dongle", "member_id", "debug_timeout"],
                p = {
                    body: "description",
                    body2: "desc2",
                    cta: "ctatext",
                    image: { serverName: "main_image", requiredParams: { required: !0 } },
                    icon: { serverName: "icon", requiredParams: { required: !0 } },
                    sponsoredBy: "sponsored_by",
                    privacyLink: "privacy_link",
                    salePrice: "saleprice",
                    displayUrl: "displayurl",
                },
                o = "<script",
                d = /\/\/cdn\.adnxs\.com\/v/,
                l = "trk.js",
                m = {
                    code: C,
                    aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm", "adasta"],
                    supportedMediaTypes: [y.b, y.d, y.c],
                    isBidRequestValid: function (e) {
                        return !!(e.params.placementId || (e.params.member && e.params.invCode));
                    },
                    buildRequests: function (e, r) {
                        var a = e.map(j),
                            t = I()(e, N),
                            n = {};
                        !0 === k.b.getConfig("coppa") && (n = { coppa: !0 }),
                            t &&
                                Object.keys(t.params.user)
                                    .filter(function (e) {
                                        return x()(w, e);
                                    })
                                    .forEach(function (e) {
                                        return (n[e] = t.params.user[e]);
                                    });
                        var i,
                            s = I()(e, q);
                        s &&
                            s.params &&
                            s.params.app &&
                            ((i = {}),
                            Object.keys(s.params.app)
                                .filter(function (e) {
                                    return x()(T, e);
                                })
                                .forEach(function (e) {
                                    return (i[e] = s.params.app[e]);
                                }));
                        var o,
                            d = I()(e, M);
                        d && d.params && s.params.app && s.params.app.id && (o = { appid: d.params.app.id });
                        var c = {},
                            u = {},
                            p = _.getCookie("apn_prebid_debug") || null;
                        if (p)
                            try {
                                c = JSON.parse(p);
                            } catch (e) {
                                _.logError("AppNexus Debug Auction Cookie Error:\n\n" + e);
                            }
                        else {
                            var l = I()(e, z);
                            l && l.debug && (c = l.debug);
                        }
                        c &&
                            c.enabled &&
                            Object.keys(c)
                                .filter(function (e) {
                                    return x()(E, e);
                                })
                                .forEach(function (e) {
                                    u[e] = c[e];
                                });
                        var m = I()(e, U),
                            f = m ? parseInt(m.params.member, 10) : 0,
                            v = e[0].schain,
                            y = { tags: A(a), user: n, sdk: { source: "pbjs", version: "3.6.0" }, schain: v };
                        if (
                            (0 < f && (y.member_id = f),
                            s && (y.device = i),
                            d && (y.app = o),
                            k.b.getConfig("adpod.brandCategoryExclusion") && (y.brand_category_uniqueness = !0),
                            u.enabled && ((y.debug = u), _.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(u, null, 4))),
                            r && r.gdprConsent && (y.gdpr_consent = { consent_string: r.gdprConsent.consentString, consent_required: r.gdprConsent.gdprApplies }),
                            r && r.uspConsent && (y.us_privacy = r.uspConsent),
                            r && r.refererInfo)
                        ) {
                            var g = {
                                rd_ref: encodeURIComponent(r.refererInfo.referer),
                                rd_top: r.refererInfo.reachedTop,
                                rd_ifs: r.refererInfo.numIframes,
                                rd_stk: r.refererInfo.stack
                                    .map(function (e) {
                                        return encodeURIComponent(e);
                                    })
                                    .join(","),
                            };
                            y.referrer_detection = g;
                        }
                        I()(e, B) &&
                            e.filter(B).forEach(function (r) {
                                var e = (function (e, r) {
                                        var t = r.mediaTypes.video,
                                            a = t.durationRangeSec,
                                            n = t.requireExactDuration,
                                            i = (function (e) {
                                                var r = e.adPodDurationSec,
                                                    t = e.durationRangeSec,
                                                    a = e.requireExactDuration,
                                                    n = _.getMinValueFromArray(t),
                                                    i = Math.floor(r / n);
                                                return a ? Math.max(i, t.length) : i;
                                            })(r.mediaTypes.video),
                                            s = _.getMaxValueFromArray(a),
                                            o = e.filter(function (e) {
                                                return e.uuid === r.bidId;
                                            }),
                                            d = _.fill.apply(_, A(o).concat([i]));
                                        if (n) {
                                            var c = Math.ceil(i / a.length),
                                                u = _.chunk(d, c);
                                            a.forEach(function (r, e) {
                                                u[e].map(function (e) {
                                                    D(e, "minduration", r), D(e, "maxduration", r);
                                                });
                                            });
                                        } else
                                            d.map(function (e) {
                                                return D(e, "maxduration", s);
                                            });
                                        return d;
                                    })(a, r),
                                    t = y.tags.filter(function (e) {
                                        return e.uuid !== r.bidId;
                                    });
                                y.tags = [].concat(A(t), A(e));
                            });
                        var b = _.deepAccess(e[0], "userId.criteortus.".concat(C, ".userid"));
                        if (b) {
                            var h = [];
                            h.push({ provider: "criteo", user_id: b }), (y.tpuids = h);
                        }
                        return (function (e, t) {
                            var a = [];
                            if (15 < e.tags.length) {
                                var n = _.deepClone(e);
                                _.chunk(e.tags, 15).forEach(function (e) {
                                    n.tags = e;
                                    var r = JSON.stringify(n);
                                    a.push({ method: "POST", url: S, data: r, bidderRequest: t });
                                });
                            } else {
                                var r = JSON.stringify(e);
                                a = { method: "POST", url: S, data: r, bidderRequest: t };
                            }
                            return a;
                        })(y, r);
                    },
                    interpretResponse: function (e, r) {
                        var i = this,
                            s = r.bidderRequest;
                        e = e.body;
                        var o = [];
                        if (!e || e.error) {
                            var t = "in response for ".concat(s.bidderCode, " adapter");
                            return e && e.error && (t += ": ".concat(e.error)), _.logError(t), o;
                        }
                        if (
                            (e.tags &&
                                e.tags.forEach(function (e) {
                                    var r,
                                        t,
                                        a =
                                            (r = e) &&
                                            r.ads &&
                                            r.ads.length &&
                                            I()(r.ads, function (e) {
                                                return e.rtb;
                                            });
                                    if (a && 0 !== a.cpm && x()(i.supportedMediaTypes, a.ad_type)) {
                                        var n = (function (r, e, t) {
                                            var a = _.getBidRequest(r.uuid, [t]),
                                                n = {
                                                    requestId: r.uuid,
                                                    cpm: e.cpm,
                                                    creativeId: e.creative_id,
                                                    dealId: e.deal_id,
                                                    currency: "USD",
                                                    netRevenue: !0,
                                                    ttl: 300,
                                                    adUnitCode: a.adUnitCode,
                                                    appnexus: { buyerMemberId: e.buyer_member_id, dealPriority: e.deal_priority, dealCode: e.deal_code },
                                                };
                                            e.advertiser_id && (n.meta = b({}, n.meta, { advertiserId: e.advertiser_id }));
                                            if (e.rtb.video) {
                                                switch ((b(n, { width: e.rtb.video.player_width, height: e.rtb.video.player_height, vastImpUrl: e.notify_url, ttl: 3600 }), _.deepAccess(a, "mediaTypes.video.context"))) {
                                                    case y.a:
                                                        var i = Object(v.getIabSubCategory)(a.bidder, e.brand_category_id);
                                                        n.meta = b({}, n.meta, { iabSubCatId: i });
                                                        var s = e.rtb.dealPriority;
                                                        (n.video = { context: y.a, durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3), dealTier: s }), (n.vastUrl = e.rtb.video.asset_url);
                                                        break;
                                                    case g.b:
                                                        if (((n.adResponse = r), (n.adResponse.ad = n.adResponse.ads[0]), (n.adResponse.ad.video = n.adResponse.ad.rtb.video), (n.vastXml = e.rtb.video.content), e.renderer_url)) {
                                                            var o = I()(t.bids, function (e) {
                                                                    return e.bidId === r.uuid;
                                                                }),
                                                                d = _.deepAccess(o, "renderer.options");
                                                            n.renderer = (function (e, r) {
                                                                var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                                    a = f.a.install({ id: r.renderer_id, url: r.renderer_url, config: t, loaded: !1, adUnitCode: e });
                                                                try {
                                                                    a.setRender(V);
                                                                } catch (e) {
                                                                    _.logWarn("Prebid Error calling setRender on renderer", e);
                                                                }
                                                                return (
                                                                    a.setEventHandlers({
                                                                        impression: function () {
                                                                            return _.logMessage("AppNexus outstream video impression event");
                                                                        },
                                                                        loaded: function () {
                                                                            return _.logMessage("AppNexus outstream video loaded event");
                                                                        },
                                                                        ended: function () {
                                                                            _.logMessage("AppNexus outstream renderer video event"), (document.querySelector("#".concat(e)).style.display = "none");
                                                                        },
                                                                    }),
                                                                    a
                                                                );
                                                            })(n.adUnitCode, e, d);
                                                        }
                                                        break;
                                                    case g.a:
                                                        n.vastUrl = e.notify_url + "&redir=" + encodeURIComponent(e.rtb.video.asset_url);
                                                }
                                            } else if (e.rtb[y.c]) {
                                                var c = e.rtb[y.c],
                                                    u = e.viewability.config.replace("src=", "data-src="),
                                                    p = c.javascript_trackers;
                                                null == p ? (p = u) : _.isStr(p) ? (p = [p, u]) : p.push(u),
                                                    (n[y.c] = {
                                                        title: c.title,
                                                        body: c.desc,
                                                        body2: c.desc2,
                                                        cta: c.ctatext,
                                                        rating: c.rating,
                                                        sponsoredBy: c.sponsored,
                                                        privacyLink: c.privacy_link,
                                                        address: c.address,
                                                        downloads: c.downloads,
                                                        likes: c.likes,
                                                        phone: c.phone,
                                                        price: c.price,
                                                        salePrice: c.saleprice,
                                                        clickUrl: c.link.url,
                                                        displayUrl: c.displayurl,
                                                        clickTrackers: c.link.click_trackers,
                                                        impressionTrackers: c.impression_trackers,
                                                        javascriptTrackers: p,
                                                    }),
                                                    c.main_img && (n.native.image = { url: c.main_img.url, height: c.main_img.height, width: c.main_img.width }),
                                                    c.icon && (n.native.icon = { url: c.icon.url, height: c.icon.height, width: c.icon.width });
                                            } else {
                                                b(n, { width: e.rtb.banner.width, height: e.rtb.banner.height, ad: e.rtb.banner.content });
                                                try {
                                                    var l = e.rtb.trackers[0].impression_urls[0],
                                                        m = _.createTrackPixelHtml(l);
                                                    n.ad += m;
                                                } catch (e) {
                                                    _.logError("Error appending tracking pixel", e);
                                                }
                                            }
                                            return n;
                                        })(e, a, s);
                                        (n.mediaType = (t = a.ad_type) === y.d ? y.d : t === y.c ? y.c : y.b), o.push(n);
                                    }
                                }),
                            e.debug && e.debug.debug_info)
                        ) {
                            var a = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                            (a = a
                                .replace(/(<td>|<th>)/gm, "\t")
                                .replace(/(<\/td>|<\/th>)/gm, "\n")
                                .replace(/^<br>/gm, "")
                                .replace(/(<br>\n|<br>)/gm, "\n")
                                .replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n")
                                .replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n")
                                .replace(/(<([^>]+)>)/gim, "")),
                                _.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"),
                                _.logMessage(a);
                        }
                        return o;
                    },
                    getMappingFileInfo: function () {
                        return { url: "https://acdn.adnxs.com/prebid/appnexus-mapping/mappings.json", refreshInDays: 7 };
                    },
                    getUserSyncs: function (e) {
                        if (e.iframeEnabled) return [{ type: "iframe", url: "https://acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html" }];
                    },
                    transformBidParams: function (t, e) {
                        return (
                            (t = _.convertTypes({ member: "string", invCode: "string", placementId: "number", keywords: _.transformBidderParamKeywords }, t)),
                            e &&
                                ((t.use_pmt_rule = "boolean" == typeof t.usePaymentRule && t.usePaymentRule),
                                t.usePaymentRule && delete t.usePaymentRule,
                                h(t.keywords) && t.keywords.forEach(R),
                                Object.keys(t).forEach(function (e) {
                                    var r = _.convertCamelToUnderscore(e);
                                    r !== e && ((t[r] = t[e]), delete t[e]);
                                })),
                            t
                        );
                    },
                    onBidWon: function (e) {
                        e.native &&
                            (function (e) {
                                var r = (function (e) {
                                    var r;
                                    if (_.isStr(e) && O(e)) r = e;
                                    else if (_.isArray(e))
                                        for (var t = 0; t < e.length; t++) {
                                            var a = e[t];
                                            O(a) && (r = a);
                                        }
                                    return r;
                                })(e.native.javascriptTrackers);
                                if (r)
                                    for (
                                        var t = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode,
                                            a = (function (e) {
                                                var r = e.indexOf('src="') + 5,
                                                    t = e.indexOf('"', r);
                                                return e.substring(r, t);
                                            })(r),
                                            n = a.replace("dom_id=%native_dom_id%", t),
                                            i = document.getElementsByTagName("iframe"),
                                            s = !1,
                                            o = 0;
                                        o < i.length && !s;
                                        o++
                                    ) {
                                        var d = i[o];
                                        try {
                                            var c = d.contentDocument || d.contentWindow.document;
                                            if (c)
                                                for (var u = c.getElementsByTagName("script"), p = 0; p < u.length && !s; p++) {
                                                    var l = u[p];
                                                    l.getAttribute("data-src") == a && (l.setAttribute("src", n), l.setAttribute("data-src", ""), l.removeAttribute && l.removeAttribute("data-src"), (s = !0));
                                                }
                                        } catch (e) {
                                            if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e;
                                        }
                                    }
                            })(e);
                    },
                };
            function h(e) {
                return _.isArray(e) && 0 < e.length;
            }
            function R(e) {
                h(e.value) && "" === e.value[0] && delete e.value;
            }
            function O(e) {
                var r = e.match(d),
                    t = null != r && 1 <= r.length,
                    a = e.match(l),
                    n = null != a && 1 <= a.length;
                return e.startsWith(o) && n && t;
            }
            function j(r) {
                var n,
                    i,
                    t = {};
                if (
                    ((t.sizes = P(r.sizes)),
                    (t.primary_size = t.sizes[0]),
                    (t.ad_types = []),
                    (t.uuid = r.bidId),
                    r.params.placementId ? (t.id = parseInt(r.params.placementId, 10)) : (t.code = r.params.invCode),
                    (t.allow_smaller_sizes = r.params.allowSmallerSizes || !1),
                    (t.use_pmt_rule = r.params.usePaymentRule || !1),
                    (t.prebid = !0),
                    (t.disable_psa = !0),
                    r.params.reserve && (t.reserve = r.params.reserve),
                    r.params.position && (t.position = { above: 1, below: 2 }[r.params.position] || 0),
                    r.params.trafficSourceCode && (t.traffic_source_code = r.params.trafficSourceCode),
                    r.params.privateSizes && (t.private_sizes = P(r.params.privateSizes)),
                    r.params.supplyType && (t.supply_type = r.params.supplyType),
                    r.params.pubClick && (t.pubclick = r.params.pubClick),
                    r.params.extInvCode && (t.ext_inv_code = r.params.extInvCode),
                    r.params.externalImpId && (t.external_imp_id = r.params.externalImpId),
                    !_.isEmpty(r.params.keywords))
                ) {
                    var e = _.transformBidderParamKeywords(r.params.keywords);
                    0 < e.length && e.forEach(R), (t.keywords = e);
                }
                if ((r.mediaType === y.c || _.deepAccess(r, "mediaTypes.".concat(y.c))) && (t.ad_types.push(y.c), 0 === t.sizes.length && (t.sizes = P([1, 1])), r.nativeParams)) {
                    var a =
                        ((n = r.nativeParams),
                        (i = {}),
                        Object.keys(n).forEach(function (e) {
                            var r = (p[e] && p[e].serverName) || p[e] || e,
                                t = p[e] && p[e].requiredParams;
                            if (((i[r] = b({}, t, n[e])), (r === p.image.serverName || r === p.icon.serverName) && i[r].sizes)) {
                                var a = i[r].sizes;
                                (_.isArrayOfNums(a) ||
                                    (_.isArray(a) &&
                                        0 < a.length &&
                                        a.every(function (e) {
                                            return _.isArrayOfNums(e);
                                        }))) &&
                                    (i[r].sizes = P(i[r].sizes));
                            }
                            r === p.privacyLink && (i.privacy_supported = !0);
                        }),
                        i);
                    t[y.c] = { layouts: [a] };
                }
                var s = _.deepAccess(r, "mediaTypes.".concat(y.d)),
                    o = _.deepAccess(r, "mediaTypes.video.context");
                (r.mediaType !== y.d && !s) || t.ad_types.push(y.d),
                    (r.mediaType === y.d || (s && "outstream" !== o)) && (t.require_asset_url = !0),
                    r.params.video &&
                        ((t.video = {}),
                        Object.keys(r.params.video)
                            .filter(function (e) {
                                return x()(u, e);
                            })
                            .forEach(function (e) {
                                return (t.video[e] = r.params.video[e]);
                            })),
                    r.renderer && (t.video = b({}, t.video, { custom_renderer_present: !0 }));
                var d = I()(c.a.getAdUnits(), function (e) {
                    return r.transactionId === e.transactionId;
                });
                return d && d.mediaTypes && d.mediaTypes.banner && t.ad_types.push(y.b), 0 === t.ad_types.length && delete t.ad_types, t;
            }
            function P(e) {
                var r = [],
                    t = {};
                if (_.isArray(e) && 2 === e.length && !_.isArray(e[0])) (t.width = parseInt(e[0], 10)), (t.height = parseInt(e[1], 10)), r.push(t);
                else if ("object" === i(e))
                    for (var a = 0; a < e.length; a++) {
                        var n = e[a];
                        ((t = {}).width = parseInt(n[0], 10)), (t.height = parseInt(n[1], 10)), r.push(t);
                    }
                return r;
            }
            function N(e) {
                return !!e.params.user;
            }
            function U(e) {
                return !!parseInt(e.params.member, 10);
            }
            function q(e) {
                if (e.params) return !!e.params.app;
            }
            function M(e) {
                return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
            }
            function z(e) {
                return !!e.debug;
            }
            function B(e) {
                return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === y.a;
            }
            function D(e, r, t) {
                _.isEmpty(e.video) && (e.video = {}), (e.video[r] = t);
            }
            function V(e) {
                e.renderer.push(function () {
                    window.ANOutstreamVideo.renderAd(
                        { tagId: e.adResponse.tag_id, sizes: [e.getSize().split("x")], targetId: e.adUnitCode, uuid: e.adResponse.uuid, adResponse: e.adResponse, rendererOptions: e.renderer.getConfig() },
                        function (e, r, t) {
                            e.renderer.handleVideoEvent({ id: r, eventName: t });
                        }.bind(null, e)
                    );
                });
            }
            Object(v.registerBidder)(m);
        },
    },
    [201]
);
pbjsChunk(
    [210],
    {
        231: function (n, t, e) {
            n.exports = e(232);
        },
        232: function (n, t, e) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                e.d(t, "spec", function () {
                    return c;
                });
            var a = e(1),
                r = e(2);
            function i(n, t) {
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a);
                }
            }
            function f() {
                return (f =
                    Object.assign ||
                    function (n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
                        }
                        return n;
                    }).apply(this, arguments);
            }
            function u(n, t) {
                return (
                    (function (n) {
                        if (Array.isArray(n)) return n;
                    })(n) ||
                    (function (n, t) {
                        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(n))) return;
                        var e = [],
                            a = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var o, c = n[Symbol.iterator](); !(a = (o = c.next()).done) && (e.push(o.value), !t || e.length !== t); a = !0);
                        } catch (n) {
                            (r = !0), (i = n);
                        } finally {
                            try {
                                a || null == c.return || c.return();
                            } finally {
                                if (r) throw i;
                            }
                        }
                        return e;
                    })(n, t) ||
                    (function (n, t) {
                        if (!n) return;
                        if ("string" == typeof n) return o(n, t);
                        var e = Object.prototype.toString.call(n).slice(8, -1);
                        "Object" === e && n.constructor && (e = n.constructor.name);
                        if ("Map" === e || "Set" === e) return Array.from(e);
                        if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return o(n, t);
                    })(n, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function o(n, t) {
                (null == t || t > n.length) && (t = n.length);
                for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
                return a;
            }
            var m = "buysellads",
                v = { currency: "USD", netRevenue: !1, ttl: 360 },
                c = {
                    code: m,
                    aliases: ["bsa"],
                    supportedMediaTypes: [r.b],
                    isBidRequestValid: function (n) {
                        var t = n.params,
                            e = t.size,
                            a = t.zoneKey;
                        return "string" == typeof e && e.match(/^\d+x\d+$/) && "string" == typeof a;
                    },
                    buildRequests: function (n) {
                        var d = (window.optimize || {}).environment;
                        return n
                            .map(function (n) {
                                var t,
                                    e,
                                    a = n.bidId,
                                    r = n.params,
                                    i = r.size,
                                    o = r.zoneKey,
                                    c = u(i.split("x").map(Number), 2),
                                    s = c[0],
                                    l = c[1],
                                    p =
                                        ((e = d),
                                        { local: "https://srv.localbsa.dev/bid/".concat((t = o), ".json"), dev: "https://srv.buysellads.com/bid/".concat(t, ".json"), prod: "https://srv.buysellads.com/bid/".concat(t, ".json") }[e] || null);
                                return p
                                    ? { data: { bidId: a, height: l, ignore: !0, width: s, zoneKey: o }, method: "GET", url: p, options: { withCredentials: !1 } }
                                    : (console.warn("BuySellAds - Request environment `".concat(String(d), "` not found; skipping bid...")), null);
                            })
                            .filter(Boolean);
                    },
                    interpretResponse: function (n, t) {
                        var e = n.body,
                            a = t.data,
                            r = a.bidId,
                            i = a.width,
                            o = a.height,
                            c = a.zoneKey,
                            s = (function (n) {
                                var t = n.bidCpm,
                                    e = n.country,
                                    a = n.region,
                                    r = (Object.keys(n), y(g, a)),
                                    i = n[r];
                                if (i) return parseFloat(i);
                                var o = y(b, e),
                                    c = n[o];
                                if (c) return parseFloat(c);
                                return parseFloat(t) || null;
                            })(e);
                        if (!s) return console.warn("BuySellAds - Bid CPM not found for specified zone key: ".concat(c, "; skipping bid...")), [];
                        var l,
                            p,
                            d,
                            u =
                                ((l = e.rendering),
                                !["carbon", "custom", "default"].find(function (n) {
                                    return n === l;
                                }) && l
                                    ? null
                                    : l || "default");
                        return u
                            ? [
                                  f(
                                      {
                                          ad:
                                              ((d = (p = { format: u, zoneKey: c }).zoneKey),
                                              [
                                                  "\x3c!--Zone ".concat(d, " served by ").concat(m, " Prebid.js Header Bidding--\x3e"),
                                                  (function (n) {
                                                      var t = n.format;
                                                      return n.zoneKey, "custom" === t ? '<div class="native-js"></div>' : "default" === t ? '<div id="'.concat(t, '_fromoptimize"></div>') : "";
                                                  })(p),
                                                  '<script id="_bsa_bid_'.concat(d, '">'),
                                                  "(function() {",
                                                  (function (n) {
                                                      var t = n.format,
                                                          e = x.getFor(t);
                                                      return "\nvar style = document.createElement('style');\nstyle.innerHTML = '".concat(e, "';\ndocument.getElementsByTagName('head')[0].appendChild(style);\n\t").trim();
                                                  })(p),
                                                  (function (n) {
                                                      var t = n.format,
                                                          e = n.zoneKey;
                                                      if ("carbon" === t)
                                                          return "\nvar existingCarbonScript = document.getElementById('_carbonads_js');\nif (!existingCarbonScript) {\n\tvar creativeScript = document.getElementById('_bsa_bid_"
                                                              .concat(
                                                                  e,
                                                                  "');\n\tvar script = document.createElement('script');\n\tscript.async = true;\n\tscript.type = 'text/javascript';\n\tscript.src = '//cdn.carbonads.com/carbon.js?serve="
                                                              )
                                                              .concat(
                                                                  e,
                                                                  "&placement=fromoptimize';\n\tscript.id = '_carbonads_js';\n\tcreativeScript.parentNode.appendChild(script);\n} else {\n\tvar currentCarbonQueryParams = existingCarbonScript.src\n\t\t.split('?')\n\t\t.pop()\n\t\t.split('&')\n\t\t.reduce(function(params, keyValueString) {\n\t\t\tvar keyValuePair = keyValueString.split('=');\n\t\t\tparams[keyValuePair[0]] = keyValuePair[1];\n\t\t\treturn params;\n\t\t}, {});\n\tvar currentServe = currentCarbonQueryParams.serve;\n\tconsole.warn('BuySellAds - Already serving Carbon ad for zone key ' + currentServe + '; rendering blank creative for zone key "
                                                              )
                                                              .concat(e, "');\n}\n\t\t")
                                                              .trim();
                                                      var a = (function (n) {
                                                          var t = n.format,
                                                              e = n.zoneKey;
                                                          if ("carbon" === t) return "";
                                                          var a = {
                                                              default: ', { target: "#default_fromoptimize", align: "horizontal" }',
                                                              custom: (function () {
                                                                  var n = '\'\n\t\t\t\t\t<a href="##link##" class="native-banner" style="background: linear-gradient(-30deg, ##backgroundColor##E5, ##backgroundColor##E5 45%, ##backgroundColor## 45%) #fff;">\n\t\t\t\t\t\t<div class="native-main">\n\t\t\t\t\t\t\t<img class="native-img" img src="##logo##">\n\t\t\t\t\t\t\t<div class="native-details" style="color: ##textColor##">\n\t\t\t\t\t\t\t\t<span class="native-company">Sponsored by ##company##</span>\n\t\t\t\t\t\t\t\t<span class="native-desc">##description##</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span class="native-cta" style="color: ##ctaTextColor##; background-color: ##ctaBackgroundColor##;">##callToAction##</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t\''.replace(
                                                                      /\n\s*/g,
                                                                      ""
                                                                  );
                                                                  return ", { target: '.native-js', template: ".concat(n, " }");
                                                              })(),
                                                          };
                                                          return "window._bsa.init('"
                                                              .concat(t, "', '")
                                                              .concat(e, "', 'placement:fromoptimize'")
                                                              .concat(a[t] || "", ");");
                                                      })(n);
                                                      return "\nif (typeof window._bsa === 'undefined') {\n\tvar creativeScript = document.getElementById('_bsa_bid_"
                                                          .concat(e, "');\n\tvar script = document.createElement('script');\n\tscript.onload = function() {\n\t\t")
                                                          .concat(
                                                              a,
                                                              "\n\t};\n\tscript.type = 'text/javascript';\n\tscript.src = '//m.servedby-buysellads.com/monetization.js';\n\tcreativeScript.parentNode.appendChild(script);\n} else {\n\t"
                                                          )
                                                          .concat(a, "\n}\n\t\t")
                                                          .trim();
                                                  })(p),
                                                  "})()",
                                                  "</script>",
                                              ]
                                                  .filter(Boolean)
                                                  .join("\n")),
                                          cpm: s,
                                          creativeId: c,
                                          width: i,
                                          height: o,
                                          requestId: r,
                                      },
                                      v
                                  ),
                              ]
                            : (console.warn("BuySellAds - Invalid zone format for specified zone key: ".concat(c, " (allowed: Carbon, Custom Integration, or Default (Image + Text)); skipping bid...")), []);
                    },
                };
            Object(a.registerBidder)(c);
            var b = "1",
                g = "2";
            function y(n, t) {
                return "bidCpmByGeo.".concat(n, ":").concat(t);
            }
            var x = (function () {
                function n() {
                    !(function (n, t) {
                        if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, n);
                }
                var t, e, a;
                return (
                    (t = n),
                    (a = [
                        {
                            key: "getFor",
                            value: function (n) {
                                return this[n] && this[n]();
                            },
                        },
                        {
                            key: "default",
                            value: function () {
                                return "";
                            },
                        },
                        {
                            key: "custom",
                            value: function () {
                                return '\n.native-js {\n\tposition: relative;\n\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n}\n\n.native-banner {\n\tdisplay: flex;\n\tpadding: 20px 20px;\n\ttext-decoration: none;\n\tflex-flow: row nowrap;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.native-banner .native-img {\n\tmargin-right: 20px;\n\tmax-height: 50px;\n\tline-height: 0;\n}\n\n.native-banner .native-main {\n\tdisplay: flex;\n\tmax-width: 1024px;\n\tmargin: 0 auto;\n\tflex-grow: 1;\n\tflex-flow: row nowrap;\n\talign-items: center;\n}\n\n.native-banner .native-details {\n\tdisplay: flex;\n\tmargin-right: 20px;\n\tflex-flow: column nowrap;\n}\n\n.native-banner .native-company {\n\tmargin-bottom: 4px;\n\ttext-transform: uppercase;\n\tletter-spacing: 2px;\n\tfont-size: 10px;\n\tline-height: 1;\n}\n\n.native-banner .native-desc {\n\tletter-spacing: 1px;\n\tfont-weight: 300;\n\tline-height: 1.4;\n}\n\n.native-banner .native-cta {\n\tpadding: 10px 16px;\n\tborder-radius: 3px;\n\tbox-shadow: 0 6px 13px 0 hsla(0, 0%, 0%, .15);\n\ttext-transform: uppercase;\n\twhite-space: nowrap;\n\tletter-spacing: 1px;\n\tline-height: 1;\n\tfont-weight: 400;\n\tfont-size: 12px;\n\ttransition: all .3s ease-in-out;\n\ttransform: translateY(-1px);\n}\n\n.native-banner .native-cta:hover {\n\tbox-shadow: none;\n\ttransform: translateY(1px);\n}\n\n.native-source {\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tpadding: 5px;\n\tborder-top: 0;\n\tborder-top-left-radius: 3px;\n\tbackground: repeating-linear-gradient(-45deg, transparent, transparent 5px, hsla(0, 0%, 0%, .025) 5px, hsla(0, 0%, 0%, .025) 10px) hsla(203, 11%, 95%, .4);\n\tcolor: #111;\n\ttext-decoration: none;\n\ttext-transform: uppercase;\n\tletter-spacing: .5px;\n\tfont-weight: 600;\n\tfont-size: 7px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 759px) {\n\t.native-banner,\n\t.native-banner .native-main {\n\t\tflex-flow: column nowrap;\n\t}\n\n\t.native-banner .native-img,\n\t.native-banner .native-details {\n\t\tmargin: 0;\n\t}\n\n\t.native-banner .native-img {\n\t\tdisplay: none;\n\t}\n\n\t.native-banner .native-company {\n\t\tletter-spacing: 1px;\n\t}\n\n\t.native-banner .native-details {\n\t\ttext-align:  left;\n\t\tfont-size: 14px;\n\t}\n\n\t.native-banner .native-cta {\n\t\tdisplay: none;\n\t}\n}\n\t\t'
                                    .trim()
                                    .split("\n")
                                    .map(function (n) {
                                        return n.trim();
                                    })
                                    .join("");
                            },
                        },
                        {
                            key: "carbon",
                            value: function () {
                                return '\n#carbonads {\n\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,\n\tCantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;\n}\n\n#carbonads {\n\tdisplay: flex;\n\tmax-width: 330px;\n\tbackground-color: hsl(0, 0%, 98%);\n\tbox-shadow: 0 1px 4px 1px hsla(0, 0%, 0%, .1);\n}\n\n#carbonads a {\n\tcolor: inherit;\n\ttext-decoration: none;\n}\n\n#carbonads a:hover {\n\tcolor: inherit;\n}\n\n#carbonads span {\n\tposition: relative;\n\tdisplay: block;\n\toverflow: hidden;\n}\n\n#carbonads .carbon-wrap {\n\tdisplay: flex;\n}\n\n.carbon-img {\n\tdisplay: block;\n\tmargin: 0;\n\tline-height: 1;\n}\n\n.carbon-img img {\n\tdisplay: block;\n}\n\n.carbon-text {\n\tfont-size: 13px;\n\tpadding: 10px;\n\tline-height: 1.5;\n\ttext-align: left;\n}\n\n.carbon-poweredby {\n\tdisplay: block;\n\tpadding: 8px 10px;\n\tbackground: repeating-linear-gradient(-45deg, transparent, transparent 5px, hsla(0, 0%, 0%, .025) 5px, hsla(0, 0%, 0%, .025) 10px) hsla(203, 11%, 95%, .4);\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tletter-spacing: .5px;\n\tfont-weight: 600;\n\tfont-size: 9px;\n\tline-height: 1;\n}\n\t\t'
                                    .trim()
                                    .split("\n")
                                    .map(function (n) {
                                        return n.trim();
                                    })
                                    .join("");
                            },
                        },
                    ]),
                    (e = null) && i(t.prototype, e),
                    a && i(t, a),
                    n
                );
            })();
        },
    },
    [231]
);
pbjsChunk(
    [201],
    {
        249: function (e, r, t) {
            e.exports = t(250);
        },
        250: function (e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", { value: !0 }),
                t.d(r, "spec", function () {
                    return n;
                });
            var d = t(0),
                h = t(3),
                i = t(1),
                n = {
                    code: "coinzilla",
                    aliases: ["czlla"],
                    isBidRequestValid: function (e) {
                        return !!e.params.placementId;
                    },
                    buildRequests: function (e, n) {
                        return 0 === e.length
                            ? []
                            : e.map(function (e) {
                                  var r = d.parseSizesInput(e.params.size || e.sizes)[0],
                                      t = r.split("x")[0],
                                      i = r.split("x")[1];
                                  return { method: "POST", url: "https://request.czilladx.com/serve/request.php", data: { placementId: e.params.placementId, width: t, height: i, bidId: e.bidId, referer: n.refererInfo.referer } };
                              });
                    },
                    interpretResponse: function (e, r) {
                        var t = [],
                            i = e.body,
                            n = i.creativeId || 0,
                            d = i.width || 0,
                            a = i.height || 0,
                            s = i.cpm || 0;
                        if (0 !== d && 0 !== a && 0 !== s && 0 !== n) {
                            var u = i.dealid || "",
                                c = i.currency || "EUR",
                                p = void 0 === i.netRevenue || i.netRevenue,
                                l = r.data.referer,
                                o = { requestId: i.requestId, cpm: s, width: i.width, height: i.height, creativeId: n, dealId: u, currency: c, netRevenue: p, ttl: h.b.getConfig("_bidderTimeout"), referrer: l, ad: i.ad };
                            t.push(o);
                        }
                        return t;
                    },
                };
            Object(i.registerBidder)(n);
        },
    },
    [249]
);
pbjsChunk(
    [196],
    {
        264: function (e, r, n) {
            e.exports = n(265);
        },
        265: function (e, r, n) {
            "use strict";
            Object.defineProperty(r, "__esModule", { value: !0 }),
                n.d(r, "spec", function () {
                    return s;
                });
            var c = n(0),
                t = n(1);
            function i() {
                return (i =
                    Object.assign ||
                    function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var n = arguments[r];
                            for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            var a = 0,
                d = "consumable",
                s = {
                    code: "consumable",
                    isBidRequestValid: function (e) {
                        return !!(e.params.networkId && e.params.siteId && e.params.unitId && e.params.unitName);
                    },
                    buildRequests: function (e, r) {
                        var n = { method: "POST", url: "", data: "", bidRequest: [] };
                        if (e.length < 1) return n;
                        (a = e[0].params.siteId), (d = e[0].bidder);
                        var s = i({ placements: [], time: Date.now(), url: r.refererInfo.referer, referrer: document.referrer, source: [{ name: "prebidjs", version: "3.6.0" }] }, e[0].params);
                        return (
                            r && r.gdprConsent && (s.gdpr = { consent: r.gdprConsent.consentString, applies: "boolean" != typeof r.gdprConsent.gdprApplies || r.gdprConsent.gdprApplies }),
                            r && r.uspConsent && (s.ccpa = r.uspConsent),
                            e.map(function (e) {
                                var n,
                                    r = (e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes) || e.sizes || [],
                                    t = i(
                                        {
                                            divName: e.bidId,
                                            adTypes:
                                                e.adTypes ||
                                                ((n = []),
                                                r.forEach(function (e) {
                                                    var r = p.indexOf(e[0] + "x" + e[1]);
                                                    0 <= r && n.push(r);
                                                }),
                                                n),
                                        },
                                        e.params
                                    );
                                t.networkId && t.siteId && t.unitId && t.unitName && s.placements.push(t);
                            }),
                            (n.data = JSON.stringify(s)),
                            (n.bidRequest = e),
                            (n.bidderRequest = r),
                            (n.url = "https://e.serverbid.com/api/v2"),
                            n
                        );
                    },
                    interpretResponse: function (e, r) {
                        var n,
                            t,
                            s,
                            i,
                            a,
                            d = [];
                        (t = r.bidRequest), (e = (e || {}).body);
                        for (var p = 0; p < t.length; p++)
                            if (((n = {}), (s = (i = t[p]).bidId), e)) {
                                var u = e.decisions && e.decisions[s],
                                    o = u && u.pricing && u.pricing.clearPrice;
                                u &&
                                    o &&
                                    ((n.requestId = s),
                                    (n.cpm = o),
                                    (n.width = u.width),
                                    (n.height = u.height),
                                    (n.unitId = i.params.unitId),
                                    (n.unitName = i.params.unitName),
                                    (n.ad = ((a = u), n.unitId, n.unitName, a.contents && a.contents[0] && a.contents[0].body + c.createTrackPixelHtml(a.impressionUrl))),
                                    (n.currency = "USD"),
                                    (n.creativeId = u.adId),
                                    (n.ttl = 30),
                                    (n.netRevenue = !0),
                                    (n.referrer = r.bidderRequest.refererInfo.referer),
                                    d.push(n));
                            }
                        return d;
                    },
                    getUserSyncs: function (e, r) {
                        return e.iframeEnabled
                            ? [{ type: "iframe", url: "https://sync.serverbid.com/ss/" + a + ".html" }]
                            : e.pixelEnabled && 0 < r.length
                            ? r[0].body.pixels
                            : void c.logWarn(d + ": Please enable iframe based user syncing.");
                    },
                },
                p = [
                    null,
                    "120x90",
                    "120x90",
                    "468x60",
                    "728x90",
                    "300x250",
                    "160x600",
                    "120x600",
                    "300x100",
                    "180x150",
                    "336x280",
                    "240x400",
                    "234x60",
                    "88x31",
                    "120x60",
                    "120x240",
                    "125x125",
                    "220x250",
                    "250x250",
                    "250x90",
                    "0x0",
                    "200x90",
                    "300x50",
                    "320x50",
                    "320x480",
                    "185x185",
                    "620x45",
                    "300x125",
                    "800x250",
                ];
            (p[77] = "970x90"),
                (p[123] = "970x250"),
                (p[43] = "300x600"),
                (p[286] = "970x66"),
                (p[3230] = "970x280"),
                (p[429] = "486x60"),
                (p[374] = "700x500"),
                (p[934] = "300x1050"),
                (p[1578] = "320x100"),
                (p[331] = "320x250"),
                (p[3301] = "320x267"),
                (p[2730] = "728x250"),
                Object(t.registerBidder)(s);
        },
    },
    [264]
);
pbjsChunk(
    [0],
    {
        272: function (t, e, r) {
            t.exports = r(273);
        },
        273: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                r.d(e, "ADAPTER_VERSION", function () {
                    return m;
                }),
                r.d(e, "PROFILE_ID_PUBLISHERTAG", function () {
                    return y;
                }),
                r.d(e, "spec", function () {
                    return n;
                }),
                (e.tryGetCriteoFastBid = A);
            var a = r(28),
                o = r(1),
                d = r(3),
                h = r(2),
                p = r(9),
                f = r(0),
                i = r(12),
                l = r.n(i),
                u = r(274);
            r.n(u);
            function c() {
                return (c =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = arguments[e];
                            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                        }
                        return t;
                    }).apply(this, arguments);
            }
            var m = 26,
                v = "criteo",
                y = 185,
                b = 65537,
                g = "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",
                n = {
                    code: v,
                    supportedMediaTypes: [h.b, h.d, h.c],
                    isBidRequestValid: function (t) {
                        return (
                            !(!t || !t.params || (!t.params.zoneId && !t.params.networkId)) &&
                            !(
                                S(t) &&
                                !(function (e) {
                                    var r = !0;
                                    if (
                                        (["mimes", "playerSize", "maxduration", "protocols", "api"].forEach(function (t) {
                                            void 0 === f.deepAccess(e, "mediaTypes.video." + t) && ((r = !1), f.logError("Criteo Bid Adapter: mediaTypes.video." + t + " is required"));
                                        }),
                                        ["skip", "placement", "playbackmethod"].forEach(function (t) {
                                            void 0 === f.deepAccess(e, "params.video." + t) && ((r = !1), f.logError("Criteo Bid Adapter: params.video." + t + " is required"));
                                        }),
                                        r)
                                    ) {
                                        if ("instream" == e.mediaTypes.video.context && 1 === e.params.video.placement) return 1;
                                        if ("outstream" == e.mediaTypes.video.context && 1 !== e.params.video.placement) return 1;
                                    }
                                    return;
                                })(t)
                            )
                        );
                    },
                    buildRequests: function (t, e) {
                        var r, o;
                        if (
                            (c(e, { ceh: d.b.getConfig("criteo.ceh") }),
                            T() ||
                                ((window.Criteo = window.Criteo || {}),
                                (window.Criteo.usePrebidEvents = !1),
                                A(),
                                setTimeout(function () {
                                    Object(a.a)("https://static.criteo.net/js/ld/publishertag.prebid.js", v);
                                }, e.timeout)),
                            T())
                        ) {
                            var i = new Criteo.PubTag.Adapters.Prebid(y, m, t, e, "3.6.0"),
                                n = d.b.getConfig("enableSendAllBids");
                            i.setEnableSendAllBids && "function" == typeof i.setEnableSendAllBids && "boolean" == typeof n && i.setEnableSendAllBids(n), (r = i.buildCdbUrl()), (o = i.buildCdbRequest());
                        } else {
                            var s = (function (t, e) {
                                var r = "";
                                e && e.refererInfo && (r = e.refererInfo.referer);
                                var o = Object(p.c)(r).search,
                                    i = { url: r, debug: "1" === o.pbt_debug, noLog: "1" === o.pbt_nolog, amp: !1 };
                                return (
                                    t.forEach(function (t) {
                                        "amp" === t.params.integrationMode && (i.amp = !0);
                                    }),
                                    i
                                );
                            })(t, e);
                            (r = (function (t) {
                                var e = "https://bidder.criteo.com/cdb";
                                (e += "?profileId=207"), (e += "&av=" + String(m)), (e += "&wv=" + encodeURIComponent("3.6.0")), (e += "&cb=" + String(Math.floor(99999999999 * Math.random()))), t.amp && (e += "&im=1");
                                t.debug && (e += "&debug=1");
                                t.noLog && (e += "&nolog=1");
                                return e;
                            })(s)),
                                (o = (function (t, e, r) {
                                    var n,
                                        o = {
                                            publisher: { url: t.url },
                                            slots: e.map(function (t) {
                                                n = t.params.networkId || n;
                                                var e,
                                                    r,
                                                    o = { impid: t.adUnitCode, transactionid: t.transactionId, auctionId: t.auctionId, sizes: ((e = t), C(f.deepAccess(e, "mediaTypes.banner.sizes") || e.sizes)) };
                                                if (
                                                    (t.params.zoneId && (o.zoneid = t.params.zoneId),
                                                    t.params.publisherSubId && (o.publishersubid = t.params.publisherSubId),
                                                    (t.params.nativeCallback || f.deepAccess(t, "mediaTypes.".concat(h.c))) && (o.native = !0),
                                                    S(t))
                                                ) {
                                                    var i = {
                                                        playersizes: ((r = t), C(f.deepAccess(r, "mediaTypes.video.playerSize"))),
                                                        mimes: t.mediaTypes.video.mimes,
                                                        protocols: t.mediaTypes.video.protocols,
                                                        maxduration: t.mediaTypes.video.maxduration,
                                                        api: t.mediaTypes.video.api,
                                                    };
                                                    (i.skip = t.params.video.skip),
                                                        (i.placement = t.params.video.placement),
                                                        (i.minduration = t.params.video.minduration),
                                                        (i.playbackmethod = t.params.video.playbackmethod),
                                                        (i.startdelay = t.params.video.startdelay),
                                                        (o.video = i);
                                                }
                                                return o;
                                            }),
                                        };
                                    n && (o.publisher.networkid = n);
                                    (o.user = {}), r && r.ceh && (o.user.ceh = r.ceh);
                                    r &&
                                        r.gdprConsent &&
                                        ((o.gdprConsent = {}),
                                        void 0 !== r.gdprConsent.gdprApplies && (o.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies),
                                        r.gdprConsent.vendorData &&
                                            r.gdprConsent.vendorData.vendorConsents &&
                                            void 0 !== r.gdprConsent.vendorData.vendorConsents[(91).toString(10)] &&
                                            (o.gdprConsent.consentGiven = !!r.gdprConsent.vendorData.vendorConsents[(91).toString(10)]),
                                        void 0 !== r.gdprConsent.consentString && (o.gdprConsent.consentData = r.gdprConsent.consentString));
                                    r && r.uspConsent && (o.user.uspIab = r.uspConsent);
                                    return o;
                                })(s, t, e));
                        }
                        if (o) return { method: "POST", url: r, data: o, bidRequests: t };
                    },
                    interpretResponse: function (t, u) {
                        var e = t.body || t;
                        if (T()) {
                            var r = Criteo.PubTag.Adapters.Prebid.GetAdapter(u);
                            if (r) return r.interpretResponse(e, u);
                        }
                        var c = [];
                        return (
                            e &&
                                e.slots &&
                                f.isArray(e.slots) &&
                                e.slots.forEach(function (e) {
                                    var t,
                                        r,
                                        o,
                                        i,
                                        n,
                                        s = l()(u.bidRequests, function (t) {
                                            return t.adUnitCode === e.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === e.zoneid);
                                        }),
                                        a = s.bidId,
                                        p = {
                                            requestId: a,
                                            adId: e.bidId || f.getUniqueIdentifierStr(),
                                            cpm: e.cpm,
                                            currency: e.currency,
                                            netRevenue: !0,
                                            ttl: e.ttl || 60,
                                            creativeId: a,
                                            width: e.width,
                                            height: e.height,
                                            dealId: e.dealCode,
                                        };
                                    if (e.native)
                                        if (s.params.nativeCallback)
                                            p.ad =
                                                ((r = a),
                                                (o = e.native),
                                                (i = s.params.nativeCallback),
                                                (n = "criteo_prebid_native_slots"),
                                                (window[n] = window[n] || {}),
                                                (window[n][r] = { callback: i, payload: o }),
                                                '\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'
                                                    .concat(n, ';\n  if(!slots){continue;}\n  var responseSlot = slots["')
                                                    .concat(r, '"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n</script>'));
                                        else {
                                            if (!0 === d.b.getConfig("enableSendAllBids")) return;
                                            (p.native = {
                                                title: (t = e.native).products[0].title,
                                                body: t.products[0].description,
                                                sponsoredBy: t.advertiser.description,
                                                icon: t.advertiser.logo,
                                                image: t.products[0].image,
                                                clickUrl: t.products[0].click_url,
                                                privacyLink: t.privacy.optout_click_url,
                                                privacyIcon: t.privacy.optout_image_url,
                                                cta: t.products[0].call_to_action,
                                                price: t.products[0].price,
                                                impressionTrackers: t.impression_pixels.map(function (t) {
                                                    return t.url;
                                                }),
                                            }),
                                                (p.mediaType = h.c);
                                        }
                                    else e.video ? ((p.vastUrl = e.displayurl), (p.mediaType = h.d)) : (p.ad = e.creative);
                                    c.push(p);
                                }),
                            c
                        );
                    },
                    onTimeout: function (t) {
                        T() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout();
                    },
                    onBidWon: function (t) {
                        T() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t);
                    },
                    onSetTargeting: function (t) {
                        T() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t);
                    },
                };
            function T() {
                return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid;
            }
            function s(t) {
                return t[0] + "x" + t[1];
            }
            function C(t) {
                return Array.isArray(t[0])
                    ? t.map(function (t) {
                          return s(t);
                      })
                    : [s(t)];
            }
            function S(t) {
                return void 0 !== f.deepAccess(t, "params.video") && void 0 !== f.deepAccess(t, "mediaTypes.video");
            }
            function A() {
                try {
                    var t = "criteo_fast_bid",
                        e = "// Hash: ",
                        r = localStorage.getItem(t);
                    if (null !== r) {
                        var o = r.indexOf("\n"),
                            i = r.substr(0, o).trim();
                        if (i.substr(0, e.length) !== e) f.logWarn("No hash found in FastBid"), localStorage.removeItem(t);
                        else {
                            var n = i.substr(e.length),
                                s = r.substr(o + 1);
                            if (Object(u.verify)(s, n, g, b)) {
                                f.logInfo("Using Criteo FastBid");
                                var a = document.createElement("script");
                                (a.type = "text/javascript"), (a.text = s), f.insertElement(a);
                            } else f.logWarn("Invalid Criteo FastBid found"), localStorage.removeItem(t);
                        }
                    }
                } catch (t) {}
            }
            Object(o.registerBidder)(n);
        },
        274: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var a = r(275),
                p = r(276);
            e.verify = function (t, e, r, o) {
                var i = new a.BigInteger(a.b64toHex(e)),
                    n = new a.BigInteger(a.b64toHex(r)),
                    s = i.modPowInt(o, n);
                return a.removeExtraSymbols(s.toHexString()) === p.Sha256.hash(t);
            };
        },
        275: function (t, e, r) {
            "use strict";
            var o;
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i =
                ((g.prototype.toHexString = function () {
                    if (this.s < 0) return "-" + this.negate().toHexString();
                    var t,
                        e = !1,
                        r = "",
                        o = this.t,
                        i = this.DB - ((o * this.DB) % 4);
                    if (0 < o--)
                        for (i < this.DB && 0 < (t = this[o] >> i) && ((e = !0), (r = c(t))); 0 <= o; )
                            i < 4 ? ((t = (this[o] & ((1 << i) - 1)) << (4 - i)), (t |= this[--o] >> (i += this.DB - 4))) : ((t = (this[o] >> (i -= 4)) & 15), i <= 0 && ((i += this.DB), --o)), 0 < t && (e = !0), e && (r += c(t));
                    return e ? r : "0";
                }),
                (g.prototype.fromHexString = function (t) {
                    if (null !== t) {
                        (this.t = 0), (this.s = 0);
                        for (var e = t.length, r = !1, o = 0; 0 <= --e; ) {
                            var i = p(t, e);
                            i < 0
                                ? "-" == t.charAt(e) && (r = !0)
                                : ((r = !1),
                                  0 == o ? (this[this.t++] = i) : o + 4 > this.DB ? ((this[this.t - 1] |= (i & ((1 << (this.DB - o)) - 1)) << o), (this[this.t++] = i >> (this.DB - o))) : (this[this.t - 1] |= i << o),
                                  (o += 4) >= this.DB && (o -= this.DB));
                        }
                        this.clamp(), r && g.ZERO.subTo(this, this);
                    }
                }),
                (g.prototype.negate = function () {
                    var t = T();
                    return g.ZERO.subTo(this, t), t;
                }),
                (g.prototype.abs = function () {
                    return this.s < 0 ? this.negate() : this;
                }),
                (g.prototype.mod = function (t) {
                    var e = T();
                    return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(g.ZERO) && t.subTo(e, e), e;
                }),
                (g.prototype.copyTo = function (t) {
                    for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
                    (t.t = this.t), (t.s = this.s);
                }),
                (g.prototype.lShiftTo = function (t, e) {
                    for (var r = t % this.DB, o = this.DB - r, i = (1 << o) - 1, n = Math.floor(t / this.DB), s = (this.s << r) & this.DM, a = this.t - 1; 0 <= a; --a) (e[a + n + 1] = (this[a] >> o) | s), (s = (this[a] & i) << r);
                    for (a = n - 1; 0 <= a; --a) e[a] = 0;
                    (e[n] = s), (e.t = this.t + n + 1), (e.s = this.s), e.clamp();
                }),
                (g.prototype.invDigit = function () {
                    if (this.t < 1) return 0;
                    var t = this[0];
                    if (0 == (1 & t)) return 0;
                    var e = 3 & t;
                    return 0 < (e = ((e = ((e = ((e = (e * (2 - (15 & t) * e)) & 15) * (2 - (255 & t) * e)) & 255) * (2 - (((65535 & t) * e) & 65535))) & 65535) * (2 - ((t * e) % this.DV))) % this.DV) ? this.DV - e : -e;
                }),
                (g.prototype.dlShiftTo = function (t, e) {
                    var r;
                    for (r = this.t - 1; 0 <= r; --r) e[r + t] = this[r];
                    for (r = t - 1; 0 <= r; --r) e[r] = 0;
                    (e.t = this.t + t), (e.s = this.s);
                }),
                (g.prototype.squareTo = function (t) {
                    for (var e = this.abs(), r = (t.t = 2 * e.t); 0 <= --r; ) t[r] = 0;
                    for (r = 0; r < e.t - 1; ++r) {
                        var o = e.am(r, e[r], t, 2 * r, 0, 1);
                        (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, o, e.t - r - 1)) >= e.DV && ((t[r + e.t] -= e.DV), (t[r + e.t + 1] = 1));
                    }
                    0 < t.t && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), (t.s = 0), t.clamp();
                }),
                (g.prototype.multiplyTo = function (t, e) {
                    var r = this.abs(),
                        o = t.abs(),
                        i = r.t;
                    for (e.t = i + o.t; 0 <= --i; ) e[i] = 0;
                    for (i = 0; i < o.t; ++i) e[i + r.t] = r.am(0, o[i], e, i, 0, r.t);
                    (e.s = 0), e.clamp(), this.s != t.s && g.ZERO.subTo(e, e);
                }),
                (g.prototype.divRemTo = function (t, e, r) {
                    var o = t.abs();
                    if (!(o.t <= 0)) {
                        var i = this.abs();
                        if (i.t < o.t) return null != e && e.fromHexString("0"), void (null != r && this.copyTo(r));
                        null == r && (r = T());
                        var n = T(),
                            s = this.s,
                            a = t.s,
                            p = this.DB - C(o[o.t - 1]);
                        0 < p ? (o.lShiftTo(p, n), i.lShiftTo(p, r)) : (o.copyTo(n), i.copyTo(r));
                        var u = n.t,
                            c = n[u - 1];
                        if (0 != c) {
                            var d = c * (1 << this.F1) + (1 < u ? n[u - 2] >> this.F2 : 0),
                                h = this.FV / d,
                                f = (1 << this.F1) / d,
                                l = 1 << this.F2,
                                m = r.t,
                                v = m - u,
                                y = null == e ? T() : e;
                            for (n.dlShiftTo(v, y), 0 <= r.compareTo(y) && ((r[r.t++] = 1), r.subTo(y, r)), g.ONE.dlShiftTo(u, y), y.subTo(n, n); n.t < u; ) n[n.t++] = 0;
                            for (; 0 <= --v; ) {
                                var b = r[--m] == c ? this.DM : Math.floor(r[m] * h + (r[m - 1] + l) * f);
                                if ((r[m] += n.am(0, b, r, v, 0, u)) < b) for (n.dlShiftTo(v, y), r.subTo(y, r); r[m] < --b; ) r.subTo(y, r);
                            }
                            null != e && (r.drShiftTo(u, e), s != a && g.ZERO.subTo(e, e)), (r.t = u), r.clamp(), 0 < p && r.rShiftTo(p, r), s < 0 && g.ZERO.subTo(r, r);
                        }
                    }
                }),
                (g.prototype.rShiftTo = function (t, e) {
                    e.s = this.s;
                    var r = Math.floor(t / this.DB);
                    if (r >= this.t) e.t = 0;
                    else {
                        var o = t % this.DB,
                            i = this.DB - o,
                            n = (1 << o) - 1;
                        e[0] = this[r] >> o;
                        for (var s = r + 1; s < this.t; ++s) (e[s - r - 1] |= (this[s] & n) << i), (e[s - r] = this[s] >> o);
                        0 < o && (e[this.t - r - 1] |= (this.s & n) << i), (e.t = this.t - r), e.clamp();
                    }
                }),
                (g.prototype.drShiftTo = function (t, e) {
                    for (var r = t; r < this.t; ++r) e[r - t] = this[r];
                    (e.t = Math.max(this.t - t, 0)), (e.s = this.s);
                }),
                (g.prototype.subTo = function (t, e) {
                    for (var r = 0, o = 0, i = Math.min(t.t, this.t); r < i; ) (o += this[r] - t[r]), (e[r++] = o & this.DM), (o >>= this.DB);
                    if (t.t < this.t) {
                        for (o -= t.s; r < this.t; ) (o += this[r]), (e[r++] = o & this.DM), (o >>= this.DB);
                        o += this.s;
                    } else {
                        for (o += this.s; r < t.t; ) (o -= t[r]), (e[r++] = o & this.DM), (o >>= this.DB);
                        o -= t.s;
                    }
                    (e.s = o < 0 ? -1 : 0), o < -1 ? (e[r++] = this.DV + o) : 0 < o && (e[r++] = o), (e.t = r), e.clamp();
                }),
                (g.prototype.clamp = function () {
                    for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t; ) --this.t;
                }),
                (g.prototype.modPowInt = function (t, e) {
                    var r;
                    return (r = new (t < 256 || e.isEven() ? d : f)(e)), this.exp(t, r);
                }),
                (g.prototype.exp = function (t, e) {
                    if (4294967295 < t || t < 1) return g.ONE;
                    var r = T(),
                        o = T(),
                        i = e.convert(this),
                        n = C(t) - 1;
                    for (i.copyTo(r); 0 <= --n; )
                        if ((e.sqrTo(r, o), 0 < (t & (1 << n)))) e.mulTo(o, i, r);
                        else {
                            var s = r;
                            (r = o), (o = s);
                        }
                    return e.revert(r);
                }),
                (g.prototype.isEven = function () {
                    return 0 == (0 < this.t ? 1 & this[0] : this.s);
                }),
                (g.prototype.compareTo = function (t) {
                    var e = this.s - t.s;
                    if (0 != e) return e;
                    var r = this.t;
                    if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
                    for (; 0 <= --r; ) if (0 != (e = this[r] - t[r])) return e;
                    return 0;
                }),
                (g.prototype.am1 = function (t, e, r, o, i, n) {
                    for (; 0 <= --n; ) {
                        var s = e * this[t++] + r[o] + i;
                        (i = Math.floor(s / 67108864)), (r[o++] = 67108863 & s);
                    }
                    return i;
                }),
                (g.prototype.am2 = function (t, e, r, o, i, n) {
                    for (var s = 32767 & e, a = e >> 15; 0 <= --n; ) {
                        var p = 32767 & this[t],
                            u = this[t++] >> 15,
                            c = a * p + u * s;
                        (i = ((p = s * p + ((32767 & c) << 15) + r[o] + (1073741823 & i)) >>> 30) + (c >>> 15) + a * u + (i >>> 30)), (r[o++] = 1073741823 & p);
                    }
                    return i;
                }),
                (g.prototype.am3 = function (t, e, r, o, i, n) {
                    for (var s = 16383 & e, a = e >> 14; 0 <= --n; ) {
                        var p = 16383 & this[t],
                            u = this[t++] >> 14,
                            c = a * p + u * s;
                        (i = ((p = s * p + ((16383 & c) << 14) + r[o] + i) >> 28) + (c >> 14) + a * u), (r[o++] = 268435455 & p);
                    }
                    return i;
                }),
                g);
            function g(t) {
                null !== t && this.fromHexString(t);
            }
            function T() {
                return new i(null);
            }
            function C(t) {
                var e,
                    r = 1;
                return 0 != (e = t >>> 16) && ((t = e), (r += 16)), 0 != (e = t >> 8) && ((t = e), (r += 8)), 0 != (e = t >> 4) && ((t = e), (r += 4)), 0 != (e = t >> 2) && ((t = e), (r += 2)), 0 != (e = t >> 1) && ((t = e), (r += 1)), r;
            }
            (e.BigInteger = i), (e.nbi = T), (e.nbits = C);
            var n,
                s,
                a = [];
            for (n = "0".charCodeAt(0), s = 0; s <= 9; ++s) a[n++] = s;
            for (n = "a".charCodeAt(0), s = 10; s < 36; ++s) a[n++] = s;
            for (n = "A".charCodeAt(0), s = 10; s < 36; ++s) a[n++] = s;
            function p(t, e) {
                var r = a[t.charCodeAt(e)];
                return null == r ? -1 : r;
            }
            e.intAt = p;
            var u = "0123456789abcdefghijklmnopqrstuvwxyz";
            function c(t) {
                return u.charAt(t);
            }
            e.int2char = c;
            (e.b64toHex = function (t) {
                var e,
                    r = "",
                    o = 0,
                    i = 0;
                for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
                    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(e));
                    n < 0 ||
                        (o =
                            0 == o
                                ? ((r += c(n >> 2)), (i = 3 & n), 1)
                                : 1 == o
                                ? ((r += c((i << 2) | (n >> 4))), (i = 15 & n), 2)
                                : 2 == o
                                ? ((r += c(i)), (r += c(n >> 2)), (i = 3 & n), 3)
                                : ((r += c((i << 2) | (n >> 4))), (r += c(15 & n)), 0));
                }
                return 1 == o && (r += c(i << 2)), r;
            }),
                (e.removeExtraSymbols = function (t) {
                    return t.replace(/^1f+00/, "").replace("3031300d060960864801650304020105000420", "");
                });
            var d =
                ((h.prototype.convert = function (t) {
                    return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t;
                }),
                (h.prototype.revert = function (t) {
                    return t;
                }),
                (h.prototype.reduce = function (t) {
                    t.divRemTo(this.m, null, t);
                }),
                (h.prototype.mulTo = function (t, e, r) {
                    t.multiplyTo(e, r), this.reduce(r);
                }),
                (h.prototype.sqrTo = function (t, e) {
                    t.squareTo(e), this.reduce(e);
                }),
                h);
            function h(t) {
                this.m = t;
            }
            var f =
                ((l.prototype.convert = function (t) {
                    var e = T();
                    return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(i.ZERO) && this.m.subTo(e, e), e;
                }),
                (l.prototype.revert = function (t) {
                    var e = T();
                    return t.copyTo(e), this.reduce(e), e;
                }),
                (l.prototype.reduce = function (t) {
                    for (; t.t <= this.mt2; ) t[t.t++] = 0;
                    for (var e = 0; e < this.m.t; ++e) {
                        var r = 32767 & t[e],
                            o = (r * this.mpl + (((r * this.mph + (t[e] >> 15) * this.mpl) & this.um) << 15)) & t.DM;
                        for (t[(r = e + this.m.t)] += this.m.am(0, o, t, e, 0, this.m.t); t[r] >= t.DV; ) (t[r] -= t.DV), t[++r]++;
                    }
                    t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t);
                }),
                (l.prototype.mulTo = function (t, e, r) {
                    t.multiplyTo(e, r), this.reduce(r);
                }),
                (l.prototype.sqrTo = function (t, e) {
                    t.squareTo(e), this.reduce(e);
                }),
                l);
            function l(t) {
                (this.m = t), (this.mp = t.invDigit()), (this.mpl = 32767 & this.mp), (this.mph = this.mp >> 15), (this.um = (1 << (t.DB - 15)) - 1), (this.mt2 = 2 * t.t);
            }
            function m(t) {
                var e = T();
                return e.fromHexString(t.toString()), e;
            }
            (e.nbv = m),
                (i.ZERO = m(0)),
                (i.ONE = m(1)),
                (o = "Microsoft Internet Explorer" == navigator.appName ? ((i.prototype.am = i.prototype.am2), 30) : "Netscape" != navigator.appName ? ((i.prototype.am = i.prototype.am1), 26) : ((i.prototype.am = i.prototype.am3), 28)),
                (i.prototype.DB = o),
                (i.prototype.DM = (1 << o) - 1),
                (i.prototype.DV = 1 << o);
            (i.prototype.FV = Math.pow(2, 52)), (i.prototype.F1 = 52 - o), (i.prototype.F2 = 2 * o - 52);
        },
        276: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o =
                ((A.hash = function (t) {
                    t = A.utf8Encode(t || "");
                    for (
                        var e = [
                                1116352408,
                                1899447441,
                                3049323471,
                                3921009573,
                                961987163,
                                1508970993,
                                2453635748,
                                2870763221,
                                3624381080,
                                310598401,
                                607225278,
                                1426881987,
                                1925078388,
                                2162078206,
                                2614888103,
                                3248222580,
                                3835390401,
                                4022224774,
                                264347078,
                                604807628,
                                770255983,
                                1249150122,
                                1555081692,
                                1996064986,
                                2554220882,
                                2821834349,
                                2952996808,
                                3210313671,
                                3336571891,
                                3584528711,
                                113926993,
                                338241895,
                                666307205,
                                773529912,
                                1294757372,
                                1396182291,
                                1695183700,
                                1986661051,
                                2177026350,
                                2456956037,
                                2730485921,
                                2820302411,
                                3259730800,
                                3345764771,
                                3516065817,
                                3600352804,
                                4094571909,
                                275423344,
                                430227734,
                                506948616,
                                659060556,
                                883997877,
                                958139571,
                                1322822218,
                                1537002063,
                                1747873779,
                                1955562222,
                                2024104815,
                                2227730452,
                                2361852424,
                                2428436474,
                                2756734187,
                                3204031479,
                                3329325298,
                            ],
                            r = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
                            o = (t += String.fromCharCode(128)).length / 4 + 2,
                            i = Math.ceil(o / 16),
                            n = new Array(i),
                            s = 0;
                        s < i;
                        s++
                    ) {
                        n[s] = new Array(16);
                        for (var a = 0; a < 16; a++) n[s][a] = (t.charCodeAt(64 * s + 4 * a) << 24) | (t.charCodeAt(64 * s + 4 * a + 1) << 16) | (t.charCodeAt(64 * s + 4 * a + 2) << 8) | (t.charCodeAt(64 * s + 4 * a + 3) << 0);
                    }
                    var p = (8 * (t.length - 1)) / Math.pow(2, 32),
                        u = (8 * (t.length - 1)) >>> 0;
                    for (n[i - 1][14] = Math.floor(p), n[i - 1][15] = u, s = 0; s < i; s++) {
                        for (var c = new Array(64), d = 0; d < 16; d++) c[d] = n[s][d];
                        for (d = 16; d < 64; d++) c[d] = (A.q1(c[d - 2]) + c[d - 7] + A.q0(c[d - 15]) + c[d - 16]) >>> 0;
                        var h = r[0],
                            f = r[1],
                            l = r[2],
                            m = r[3],
                            v = r[4],
                            y = r[5],
                            b = r[6],
                            g = r[7];
                        for (d = 0; d < 64; d++) {
                            var T = g + A.z1(v) + A.Ch(v, y, b) + e[d] + c[d],
                                C = A.z0(h) + A.Maj(h, f, l);
                            (g = b), (b = y), (y = v), (v = (m + T) >>> 0), (m = l), (l = f), (f = h), (h = (T + C) >>> 0);
                        }
                        (r[0] = (r[0] + h) >>> 0), (r[1] = (r[1] + f) >>> 0), (r[2] = (r[2] + l) >>> 0), (r[3] = (r[3] + m) >>> 0), (r[4] = (r[4] + v) >>> 0), (r[5] = (r[5] + y) >>> 0), (r[6] = (r[6] + b) >>> 0), (r[7] = (r[7] + g) >>> 0);
                    }
                    var S = new Array(r.length);
                    for (g = 0; g < r.length; g++) S[g] = ("00000000" + r[g].toString(16)).slice(-8);
                    return S.join("");
                }),
                (A.utf8Encode = function (e) {
                    try {
                        return new TextEncoder().encode(e).reduce(function (t, e) {
                            return t + String.fromCharCode(e);
                        }, "");
                    } catch (t) {
                        return unescape(encodeURIComponent(e));
                    }
                }),
                (A.ROTR = function (t, e) {
                    return (e >>> t) | (e << (32 - t));
                }),
                (A.z0 = function (t) {
                    return A.ROTR(2, t) ^ A.ROTR(13, t) ^ A.ROTR(22, t);
                }),
                (A.z1 = function (t) {
                    return A.ROTR(6, t) ^ A.ROTR(11, t) ^ A.ROTR(25, t);
                }),
                (A.q0 = function (t) {
                    return A.ROTR(7, t) ^ A.ROTR(18, t) ^ (t >>> 3);
                }),
                (A.q1 = function (t) {
                    return A.ROTR(17, t) ^ A.ROTR(19, t) ^ (t >>> 10);
                }),
                (A.Ch = function (t, e, r) {
                    return (t & e) ^ (~t & r);
                }),
                (A.Maj = function (t, e, r) {
                    return (t & e) ^ (t & r) ^ (e & r);
                }),
                A);
            function A() {}
            e.Sha256 = o;
        },
    },
    [272]
);
pbjsChunk(
    [127],
    {
        428: function (e, n, t) {
            e.exports = t(429);
        },
        429: function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }),
                t.d(n, "spec", function () {
                    return r;
                });
            var d = t(0),
                i = t(1),
                u = t(2);
            function a(e, n) {
                d.logInfo("-NoBid- " + e, n);
            }
            function s(e, n) {
                function t(e, n) {
                    var t =
                        (function (e, n) {
                            for (var t = 0; t < n.length; t++) if (n[t].d === e) return n[t];
                            return !1;
                        })(e.div, n) || {};
                    return (
                        e.account && (t.s = e.account),
                        e.sizes && (t.z = e.sizes),
                        e.div && (t.d = e.div),
                        e.targeting ? (t.g = e.targeting) : (t.g = {}),
                        e.companion && (t.c = e.companion),
                        e.div &&
                            (function (e, n, t) {
                                for (var i = e.length - 1; 0 <= i; i--) {
                                    var o = e[i];
                                    o[n] && o[n] === t && e.splice(i, 1);
                                }
                            })(n, "d", e.div),
                        e.sizeMapping && (t.sm = e.sizeMapping),
                        e.siteId && (t.sid = e.siteId),
                        e.rtb && (t.rtb = e.rtb),
                        n.push(t),
                        n
                    );
                }
                if (void 0 !== window.nobid.refreshLimit && window.nobid.refreshLimit < window.nobid.refreshCount) return !1;
                for (var i, o, r, d, a, s, u, c, p, g, b, f, l, w, m, v, h = [], R = 0, y = [], T = 0; T < e.length; T++) {
                    var I = e[T],
                        q = I.adUnitCode;
                    h.push(q);
                    var C = I.sizes;
                    (R = void 0 !== I.params.siteId && I.params.siteId ? I.params.siteId : R) && I.params && I.params.tags ? t({ div: q, sizes: C, rtb: I.params.tags, siteId: R }, y) : R && t({ div: q, sizes: C, siteId: R }, y);
                }
                return (
                    !!R &&
                    ((i = h),
                    (o = y),
                    ((v = {}).sid = R),
                    (v.l =
                        ((d = ""),
                        (d = (r = n) && r.refererInfo && r.refererInfo.referer ? r.refererInfo.referer : window.context && window.context.location && window.context.location.href ? window.context.location.href : document.location.href),
                        encodeURIComponent(d.replace(/\%/g, "")))),
                    (v.tt = encodeURIComponent(document.title)),
                    (v.tt = v.tt.replace(/'|;|quot;|39;|&amp;|&|#|\r\n|\r|\n|\t|\f|\%0A|\"|\%22|\%5C|\%23|\%26|\%26|\%09/gm, "")),
                    (v.a = (function (e, n) {
                        var t = [];
                        if (e && e.length) {
                            if (n) {
                                var i = [];
                                e instanceof Array ? (i = e) : i.push(e);
                                for (var o = 0, r = n.length; o < r; o++) {
                                    var d = n[o];
                                    d && d.d && -1 < i.indexOf(d.d) && t.push(d);
                                }
                            }
                        } else t = n;
                        return t;
                    })(i, o || [])),
                    (v.t =
                        ((a = new Date()),
                        (s = a.getDate()),
                        (u = a.getFullYear()),
                        (c = a.getMonth() + 1),
                        (p = a.getHours()),
                        (g = a.getMinutes()),
                        (b = a.getSeconds()),
                        u + "-" + z(c) + "-" + z(s) + " " + z(p) + ":" + z(g) + ":" + z(b))),
                    (v.tz = Math.round(new Date().getTimezoneOffset())),
                    (v.r = (function () {
                        try {
                            var e = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                                n = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                            return "".concat(e, "x").concat(n);
                        } catch (e) {
                            console.error(e);
                        }
                    })()),
                    (v.lang = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage),
                    (v.ref = document.referrer),
                    (v.gdpr = ((l = {}), (f = n) && f.gdprConsent && (l = { consentString: f.gdprConsent.consentString, consentRequired: "boolean" == typeof f.gdprConsent.gdprApplies && f.gdprConsent.gdprApplies }), l)),
                    (v.usp = ((m = ""), (w = n) && w.uspConsent && (m = w.uspConsent), m)),
                    v)
                );
                function z(e) {
                    return e <= 9 ? "0" + e : "" + e;
                }
            }
            function o(e, n) {
                function t(e, n) {
                    for (var t = 0; t < n.length; t++) if (n[t].adUnitCode == e) return n[t];
                    return !1;
                }
                var i;
                (i = e) && void 0 !== i.rlimit && (window.nobid.refreshLimit = i.rlimit);
                for (var o = [], r = 0; e.bids && r < e.bids.length; r++) {
                    var d = e.bids[r];
                    if (!(d.bdrid < 100) && n && n.bidderRequest && n.bidderRequest.bids) {
                        var a = t((window.nobid.bidResponses["" + d.id] = d).divid, n.bidderRequest.bids);
                        if (a) {
                            var s = {
                                requestId: a.bidId,
                                cpm: +(d.price ? d.price : d.bucket ? d.bucket : 0),
                                width: d.size.w,
                                height: d.size.h,
                                creativeId: d.creativeid || "",
                                dealId: d.dealid || "",
                                currency: "USD",
                                netRevenue: !0,
                                ttl: 300,
                                ad: d.adm,
                                mediaType: u.b,
                            };
                            o.push(s);
                        }
                    }
                }
                return o;
            }
            (window.nobidVersion = "1.2.0"),
                (window.nobid = window.nobid || {}),
                (window.nobid.bidResponses = window.nobid.bidResponses || {}),
                (window.nobid.timeoutTotal = 0),
                (window.nobid.bidWonTotal = 0),
                (window.nobid.refreshCount = 0),
                (window.nobid.renderTag = function (e, n, t) {
                    a("nobid.renderTag()", n);
                    var i = window.nobid.bidResponses["" + n];
                    if (i && i.adm2) {
                        a("nobid.renderTag() found tag", n);
                        var o = i.adm2;
                        return e.write(o), void e.close();
                    }
                    a("nobid.renderTag() tag NOT FOUND *ERROR*", n);
                });
            var r = {
                code: "nobid",
                supportedMediaTypes: [u.b],
                isBidRequestValid: function (e) {
                    return a("isBidRequestValid", e), !!e.params.siteId;
                },
                buildRequests: function (e, n) {
                    if ((a("buildRequests", e), !e || e.length <= 0)) a("Empty validBidRequests");
                    else {
                        var t = s(e, n);
                        if (t) {
                            window.nobid.refreshCount++;
                            var i,
                                o,
                                r = JSON.stringify(t).replace(/'|&|#/g, "");
                            return {
                                method: "POST",
                                url:
                                    ((i = "https://ads.servenobid.com/"),
                                    (o = "function" == typeof d.getParameterByName && d.getParameterByName("nobid-env"))
                                        ? "beta" == o
                                            ? (i = "https://beta.servenobid.com/")
                                            : "dev" == o
                                            ? (i = "//localhost:8282/")
                                            : "qa" == o && (i = "https://qa-ads.nobid.com/")
                                        : (i = "https://ads.servenobid.com/"),
                                    i + "adreq?cb=" + Math.floor(11e3 * Math.random())),
                                data: r,
                                bidderRequest: n,
                            };
                        }
                    }
                },
                interpretResponse: function (e, n) {
                    return a("interpretResponse", e), a("interpretResponse", n), o(e.body, n);
                },
                getUserSyncs: function (e, n, t, i) {
                    if (e.iframeEnabled) {
                        var o = "";
                        return (
                            t &&
                                "string" == typeof t.consentString &&
                                ("boolean" == typeof t.gdprApplies ? (o += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString)) : (o += "?gdpr_consent=".concat(t.consentString))),
                            i && (0 < o.length ? (o += "&") : (o += "?"), (o += "usp_consent=" + i)),
                            [{ type: "iframe", url: "https://public.servenobid.com/sync.html" + o }]
                        );
                    }
                    return d.logWarn("-NoBid- Please enable iframe based user sync.", e), [];
                },
                onTimeout: function (e) {
                    return window.nobid.timeoutTotal++, a("Timeout total: " + window.nobid.timeoutTotal, e), window.nobid.timeoutTotal;
                },
                onBidWon: function (e) {
                    return window.nobid.bidWonTotal++, a("BidWon total: " + window.nobid.bidWonTotal, e), window.nobid.bidWonTotal;
                },
            };
            Object(i.registerBidder)(r);
        },
    },
    [428]
);
pbjsChunk(
    [123],
    {
        438: function (e, t, n) {
            e.exports = n(439);
        },
        439: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                n.d(t, "spec", function () {
                    return h;
                });
            var c = n(3),
                r = n(1),
                d = n(0),
                s = n(2),
                o = n(9);
            function u(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                        var n = [],
                            r = !0,
                            a = !1,
                            i = void 0;
                        try {
                            for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            (a = !0), (i = e);
                        } finally {
                            try {
                                r || null == o.return || o.return();
                            } finally {
                                if (a) throw i;
                            }
                        }
                        return n;
                    })(e, t) ||
                    (function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return a(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
                    })(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            var i = [s.b, s.d],
                p = "hb_pb",
                m = "3.0.1",
                l = { idl_env: "lre", pubcid: "pubcid", tdid: "ttduuid" },
                h = {
                    code: "openx",
                    supportedMediaTypes: i,
                    isBidRequestValid: function (e) {
                        var t = e.params.delDomain || e.params.platform;
                        return d.deepAccess(e, "mediaTypes.banner") && t ? !(!e.params.unit || !e.params.size) : !(!e.params.unit || !t);
                    },
                    buildRequests: function (e, r) {
                        if (0 === e.length) return [];
                        var a = [],
                            t = u(
                                e.reduce(
                                    function (e, t) {
                                        var n;
                                        return (n = t), (d.deepAccess(n, "mediaTypes.video") && !d.deepAccess(n, "mediaTypes.banner")) || n.mediaType === s.d ? e[0].push(t) : e[1].push(t), e;
                                    },
                                    [[], []]
                                ),
                                2
                            ),
                            n = t[0],
                            i = t[1];
                        return (
                            0 < i.length &&
                                a.push(
                                    (function (e, t) {
                                        var r = [],
                                            a = !1,
                                            n = f(e, t),
                                            i = d._map(e, function (e) {
                                                return e.params.unit;
                                            });
                                        (n.aus = d
                                            ._map(e, function (e) {
                                                return d.parseSizesInput(e.params.size).join(",");
                                            })
                                            .join("|")),
                                            (n.divIds = d
                                                ._map(e, function (e) {
                                                    return encodeURIComponent(e.adUnitCode);
                                                })
                                                .join(",")),
                                            i.some(function (e) {
                                                return e;
                                            }) && (n.auid = i.join(","));
                                        e.some(function (e) {
                                            return e.params.doNotTrack;
                                        }) && (n.ns = 1);
                                        (!0 !== c.b.getConfig("coppa") &&
                                            !e.some(function (e) {
                                                return e.params.coppa;
                                            })) ||
                                            (n.tfcd = 1);
                                        e.forEach(function (t) {
                                            if (t.params.customParams) {
                                                var e = d._map(Object.keys(t.params.customParams), function (e) {
                                                        return (function (e, t) {
                                                            var n = t[e];
                                                            d.isArray(n) && (n = n.join(","));
                                                            return (e.toLowerCase() + "=" + n.toLowerCase()).replace("+", ".").replace("/", "_");
                                                        })(e, t.params.customParams);
                                                    }),
                                                    n = window.btoa(e.join("&"));
                                                (a = !0), r.push(n);
                                            } else r.push("");
                                        }),
                                            a && (n.tps = r.join(","));
                                        var s = [],
                                            o = !1;
                                        e.forEach(function (e) {
                                            e.params.customFloor ? (s.push((Math.round(100 * e.params.customFloor) / 100) * 1e3), (o = !0)) : s.push(0);
                                        }),
                                            o && (n.aumfs = s.join(","));
                                        return { method: "GET", url: n.ph ? "https://u.openx.net/w/1.0/arj" : "https://".concat(e[0].params.delDomain, "/w/1.0/arj"), data: n, payload: { bids: e, startTime: new Date() } };
                                    })(i, r)
                                ),
                            0 < n.length &&
                                n.forEach(function (e) {
                                    var t, n;
                                    a.push({
                                        method: "GET",
                                        url: (n = (function (e, t) {
                                            var n,
                                                r,
                                                a = f([e], t),
                                                i = d.deepAccess(e, "params.video") || {},
                                                s = d.deepAccess(e, "mediaTypes.video.context"),
                                                o = d.deepAccess(e, "mediaTypes.video.playerSize");
                                            d.isArray(e.sizes) && 2 === e.sizes.length && !d.isArray(e.sizes[0])
                                                ? ((n = parseInt(e.sizes[0], 10)), (r = parseInt(e.sizes[1], 10)))
                                                : d.isArray(e.sizes) && d.isArray(e.sizes[0]) && 2 === e.sizes[0].length
                                                ? ((n = parseInt(e.sizes[0][0], 10)), (r = parseInt(e.sizes[0][1], 10)))
                                                : d.isArray(o) && 2 === o.length && ((n = parseInt(o[0], 10)), (r = parseInt(o[1], 10)));
                                            Object.keys(i).forEach(function (e) {
                                                "openrtb" === e ? ((i[e].w = n || i[e].w), (i[e].v = r || i[e].v), (a[e] = JSON.stringify(i[e]))) : e in a || "url" === e || (a[e] = i[e]);
                                            }),
                                                (a.auid = e.params.unit),
                                                (a.vwd = n || i.vwd),
                                                (a.vht = r || i.vht),
                                                "outstream" === s && (a.vos = "101");
                                            i.mimes && (a.vmimes = i.mimes);
                                            return a;
                                        })((t = e), r)).ph
                                            ? "https://u.openx.net/v/1.0/avjp"
                                            : "https://".concat(t.params.delDomain, "/v/1.0/avjp"),
                                        data: n,
                                        payload: { bid: t, startTime: new Date() },
                                    });
                                }),
                            a
                        );
                    },
                    interpretResponse: function (e, t) {
                        var n = e.body;
                        return ((/avjp$/.test(t.url) ? s.d : s.b) === s.d
                            ? function (e, t) {
                                  var n = t.bid,
                                      r = (t.startTime, []);
                                  if (void 0 !== e && "" !== e.vastUrl && "" !== e.pub_rev) {
                                      var a = Object(o.c)(e.vastUrl).search || {},
                                          i = {};
                                      (i.requestId = n.bidId),
                                          (i.ttl = 300),
                                          (i.netRevenue = !0),
                                          (i.currency = e.currency),
                                          (i.cpm = Number(e.pub_rev) / 1e3),
                                          (i.width = e.width),
                                          (i.height = e.height),
                                          (i.creativeId = e.adid),
                                          (i.vastUrl = e.vastUrl),
                                          (i.mediaType = s.d),
                                          (e.ph = a.ph),
                                          (e.colo = a.colo),
                                          (e.ts = a.ts),
                                          r.push(i);
                                  }
                                  return r;
                              }
                            : function (e, t) {
                                  for (var n = t.bids, r = (t.startTime, e.ads.ad), a = [], i = 0; i < r.length; i++) {
                                      var s = r[i],
                                          o = parseInt(s.idx, 10),
                                          c = {};
                                      if (((c.requestId = n[o].bidId), s.pub_rev)) {
                                          c.cpm = Number(s.pub_rev) / 1e3;
                                          var d = s.creative[0];
                                          d && ((c.width = d.width), (c.height = d.height)),
                                              (c.creativeId = d.id),
                                              (c.ad = s.html),
                                              s.deal_id && (c.dealId = s.deal_id),
                                              (c.ttl = 300),
                                              (c.netRevenue = !0),
                                              (c.currency = s.currency),
                                              s.tbd && (c.tbd = s.tbd),
                                              (c.ts = s.ts),
                                              (c.meta = {}),
                                              s.brand_id && (c.meta.brandId = s.brand_id),
                                              s.adv_id && (c.meta.dspid = s.adv_id),
                                              a.push(c);
                                      }
                                  }
                                  return a;
                              })(n, t.payload);
                    },
                    getUserSyncs: function (e, t, n, r) {
                        if (e.iframeEnabled || e.pixelEnabled)
                            return [
                                {
                                    type: e.iframeEnabled ? "iframe" : "image",
                                    url:
                                        d.deepAccess(t, "0.body.ads.pixels") ||
                                        d.deepAccess(t, "0.body.pixels") ||
                                        (function (e, t) {
                                            var n = [];
                                            e && (n.push("gdpr=" + (e.gdprApplies ? 1 : 0)), n.push("gdpr_consent=" + encodeURIComponent(e.consentString || "")));
                                            t && n.push("us_privacy=" + encodeURIComponent(t));
                                            return "".concat("https://u.openx.net/w/1.0/pd").concat(0 < n.length ? "?" + n.join("&") : "");
                                        })(n, r),
                                },
                            ];
                    },
                    transformBidParams: function (e) {
                        return d.convertTypes({ unit: "string", customFloor: "number" }, e);
                    },
                };
            function f(e, t) {
                var n,
                    r,
                    a,
                    i,
                    s = d.inIframe();
                if (
                    ((n = {
                        ju: c.b.getConfig("pageUrl") || t.refererInfo.referer,
                        ch: document.charSet || document.characterSet,
                        res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
                        ifr: s,
                        tz: new Date().getTimezoneOffset(),
                        tws: (function (e) {
                            var t,
                                n,
                                r,
                                a = window,
                                i = document,
                                s = i.documentElement;
                            if (e) {
                                try {
                                    (a = window.top), (i = window.top.document);
                                } catch (e) {
                                    return;
                                }
                                (s = i.documentElement), (r = i.body), (t = a.innerWidth || s.clientWidth || r.clientWidth), (n = a.innerHeight || s.clientHeight || r.clientHeight);
                            } else (s = i.documentElement), (t = a.innerWidth || s.clientWidth), (n = a.innerHeight || s.clientHeight);
                            return "".concat(t, "x").concat(n);
                        })(s),
                        be: 1,
                        bc: e[0].params.bc || "".concat(p, "_").concat(m),
                        dddid: d
                            ._map(e, function (e) {
                                return e.transactionId;
                            })
                            .join(","),
                        nocache: new Date().getTime(),
                    }),
                    e[0].params.platform && (n.ph = e[0].params.platform),
                    t.gdprConsent)
                ) {
                    var o = t.gdprConsent;
                    void 0 !== o.consentString && (n.gdpr_consent = o.consentString), void 0 !== o.gdprApplies && (n.gdpr = o.gdprApplies ? 1 : 0), "iab" === c.b.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1);
                }
                return (
                    t && t.uspConsent && (n.us_privacy = t.uspConsent),
                    d.deepAccess(e[0], "crumbs.pubcid") && d.deepSetValue(e[0], "userId.pubcid", d.deepAccess(e[0], "crumbs.pubcid")),
                    (r = n),
                    (a = e[0].userId),
                    d._each(a, function (e, t) {
                        l.hasOwnProperty(t) && (r[l[t]] = e);
                    }),
                    (n = r),
                    e[0].schain &&
                        (n.schain =
                            ((i = e[0].schain),
                            ""
                                .concat(i.ver, ",")
                                .concat(i.complete, "!")
                                .concat(
                                    (function (e) {
                                        var n = ["asi", "sid", "hp", "rid", "name", "domain"];
                                        return e
                                            .map(function (t) {
                                                return n
                                                    .map(function (e) {
                                                        return t[e] || "";
                                                    })
                                                    .join(",");
                                            })
                                            .join("!");
                                    })(i.nodes)
                                ))),
                    n
                );
            }
            Object(r.registerBidder)(h);
        },
    },
    [438]
);
pbjsChunk(
    [93],
    {
        517: function (e, r, t) {
            e.exports = t(518);
        },
        518: function (e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", { value: !0 }),
                t.d(r, "FASTLANE_ENDPOINT", function () {
                    return o;
                }),
                t.d(r, "VIDEO_ENDPOINT", function () {
                    return s;
                }),
                t.d(r, "SYNC_ENDPOINT", function () {
                    return a;
                }),
                t.d(r, "spec", function () {
                    return g;
                }),
                (r.hasVideoMediaType = I),
                (r.masSizeOrdering = S),
                (r.determineRubiconVideoSizeId = j),
                (r.getPriceGranularity = C),
                (r.hasValidVideoParams = k),
                (r.hasValidSupplyChainParams = T),
                (r.encodeParam = R),
                (r.resetUserSync = function () {
                    w = !1;
                });
            var p = t(0),
                i = t(1),
                l = t(3),
                u = t(2);
            function m() {
                return (m =
                    Object.assign ||
                    function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = arguments[r];
                            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function f(e, r) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, r) {
                        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                        var t = [],
                            i = !0,
                            n = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); i = !0);
                        } catch (e) {
                            (n = !0), (o = e);
                        } finally {
                            try {
                                i || null == s.return || s.return();
                            } finally {
                                if (n) throw o;
                            }
                        }
                        return t;
                    })(e, r) ||
                    (function (e, r) {
                        if (!e) return;
                        if ("string" == typeof e) return n(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(t);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return n(e, r);
                    })(e, r) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function n(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
                return i;
            }
            function c(e, r, t) {
                return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[r] = t), e;
            }
            function v(e) {
                return (v =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            var o = "https://fastlane.rubiconproject.com/a/api/fastlane.json",
                s = "https://prebid-server.rubiconproject.com/openrtb2/auction",
                a = "https://eus.rubiconproject.com/usync.html",
                d = { FASTLANE: { id: "dt.id", keyv: "dt.keyv", pref: "dt.pref" }, PREBID_SERVER: { id: "id", keyv: "keyv" } },
                b = {
                    1: "468x60",
                    2: "728x90",
                    5: "120x90",
                    8: "120x600",
                    9: "160x600",
                    10: "300x600",
                    13: "200x200",
                    14: "250x250",
                    15: "300x250",
                    16: "336x280",
                    17: "240x400",
                    19: "300x100",
                    31: "980x120",
                    32: "250x360",
                    33: "180x500",
                    35: "980x150",
                    37: "468x400",
                    38: "930x180",
                    39: "750x100",
                    40: "750x200",
                    41: "750x300",
                    42: "2x4",
                    43: "320x50",
                    44: "300x50",
                    48: "300x300",
                    53: "1024x768",
                    54: "300x1050",
                    55: "970x90",
                    57: "970x250",
                    58: "1000x90",
                    59: "320x80",
                    60: "320x150",
                    61: "1000x1000",
                    64: "580x500",
                    65: "640x480",
                    66: "930x600",
                    67: "320x480",
                    68: "1800x1000",
                    72: "320x320",
                    73: "320x160",
                    78: "980x240",
                    79: "980x300",
                    80: "980x400",
                    83: "480x300",
                    94: "970x310",
                    96: "970x210",
                    101: "480x320",
                    102: "768x1024",
                    103: "480x280",
                    105: "250x800",
                    108: "320x240",
                    113: "1000x300",
                    117: "320x100",
                    125: "800x250",
                    126: "200x600",
                    144: "980x600",
                    145: "980x150",
                    152: "1000x250",
                    156: "640x320",
                    159: "320x250",
                    179: "250x600",
                    195: "600x300",
                    198: "640x360",
                    199: "640x200",
                    213: "1030x590",
                    214: "980x360",
                    221: "1x1",
                    229: "320x180",
                    232: "580x400",
                    234: "6x6",
                    251: "2x2",
                    257: "400x600",
                    264: "970x1000",
                    265: "1920x1080",
                    278: "320x500",
                    288: "640x380",
                };
            p._each(b, function (e, r) {
                return (b[e] = r);
            });
            var g = {
                code: "rubicon",
                supportedMediaTypes: [u.b, u.d],
                isBidRequestValid: function (e) {
                    if ("object" !== v(e.params)) return !1;
                    for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++)
                        if (((e.params[t[r]] = parseInt(e.params[t[r]])), isNaN(e.params[t[r]]))) return p.logError("Rubicon: wrong format of accountId or siteId or zoneId."), !1;
                    var i = A(e, !0);
                    return !!i && ("video" !== i || k(e));
                },
                buildRequests: function (e, a) {
                    var r = [],
                        t = e
                            .filter(function (e) {
                                return "video" === A(e);
                            })
                            .map(function (e) {
                                e.startTime = new Date().getTime();
                                var r = {
                                    id: e.transactionId,
                                    test: l.b.getConfig("debug") ? 1 : 0,
                                    cur: ["USD"],
                                    source: { tid: e.transactionId },
                                    tmax: l.b.getConfig("TTL") || 1e3,
                                    imp: [{ exp: 300, id: e.adUnitCode, secure: 1, ext: c({}, e.bidder, e.params), video: p.deepAccess(e, "mediaTypes.video") || {} }],
                                    ext: { prebid: { cache: { vastxml: { returnCreative: !1 } }, targeting: { includewinners: !0, includebidderkeys: !1, pricegranularity: C(l.b) } } },
                                };
                                "rubicon" !== e.bidder && (r.ext.prebid.aliases = c({}, e.bidder, "rubicon"));
                                var t = parseFloat(p.deepAccess(e, "params.floor"));
                                isNaN(t) || (r.imp[0].bidfloor = t),
                                    (r.imp[0].ext[e.bidder].video.size_id = j(e)),
                                    (function (r, t, e) {
                                        if (!r) return;
                                        "object" === v(l.b.getConfig("app")) ? (r.app = l.b.getConfig("app")) : (r.site = { page: h(t, e) });
                                        "object" === v(l.b.getConfig("device")) && (r.device = l.b.getConfig("device"));
                                        t.params.video.language &&
                                            ["site", "device"].forEach(function (e) {
                                                r[e] && (r[e].content = m({ language: t.params.video.language }, r[e].content));
                                            });
                                    })(r, e, a),
                                    (function (e, r) {
                                        "object" === v(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                                        "object" === v(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                                        "object" === v(e.imp[0].video) && void 0 === e.imp[0].video.pos && ("atf" === r.params.position ? (e.imp[0].video.pos = 1) : "btf" === r.params.position && (e.imp[0].video.pos = 3));
                                        var t = x(r, "video");
                                        (e.imp[0].video.w = t[0]), (e.imp[0].video.h = t[1]);
                                    })(r, e);
                                var i,
                                    n = y(e, "PREBID_SERVER");
                                n && p.deepSetValue(r, "user.ext.digitrust", n),
                                    a.gdprConsent &&
                                        ("boolean" == typeof a.gdprConsent.gdprApplies && (i = a.gdprConsent.gdprApplies ? 1 : 0), p.deepSetValue(r, "regs.ext.gdpr", i), p.deepSetValue(r, "user.ext.consent", a.gdprConsent.consentString));
                                a.uspConsent && p.deepSetValue(r, "regs.ext.us_privacy", a.uspConsent),
                                    e.userId &&
                                        "object" === v(e.userId) &&
                                        (e.userId.tdid || e.userId.pubcid || e.userId.lipb) &&
                                        (p.deepSetValue(r, "user.ext.eids", []),
                                        e.userId.tdid && r.user.ext.eids.push({ source: "adserver.org", uids: [{ id: e.userId.tdid, ext: { rtiPartner: "TDID" } }] }),
                                        e.userId.pubcid && r.user.ext.eids.push({ source: "pubcommon", uids: [{ id: e.userId.pubcid }] }),
                                        e.userId.lipb &&
                                            e.userId.lipb.lipbid &&
                                            (r.user.ext.eids.push({ source: "liveintent.com", uids: [{ id: e.userId.lipb.lipbid }] }),
                                            (r.user.ext.tpid = { source: "liveintent.com", uid: e.userId.lipb.lipbid }),
                                            Array.isArray(e.userId.lipb.segments) && e.userId.lipb.segments.length && p.deepSetValue(r, "rp.target.LIseg", e.userId.lipb.segments))),
                                    !0 === l.b.getConfig("coppa") && p.deepSetValue(r, "regs.coppa", 1),
                                    e.schain && T(e.schain) && p.deepSetValue(r, "source.ext.schain", e.schain);
                                var o = p.deepAccess(e, "fpd.context.pbAdSlot");
                                return (
                                    "string" == typeof o && o && p.deepSetValue(r.imp[0].ext, "context.data.adslot", o),
                                    e.storedAuctionResponse && p.deepSetValue(r.imp[0], "ext.prebid.storedauctionresponse.id", e.storedAuctionResponse.toString()),
                                    { method: "POST", url: s, data: r, bidRequest: e }
                                );
                            });
                    if (!0 !== l.b.getConfig("rubicon.singleRequest"))
                        r = t.concat(
                            e
                                .filter(function (e) {
                                    return "banner" === A(e);
                                })
                                .map(function (e) {
                                    var i = g.createSlotParams(e, a);
                                    return {
                                        method: "GET",
                                        url: o,
                                        data:
                                            g.getOrderedParams(i).reduce(function (e, r) {
                                                var t = i[r];
                                                return (p.isStr(t) && "" !== t) || p.isNumber(t) ? "".concat(e).concat(R(r, t), "&") : e;
                                            }, "") + "slots=1&rand=".concat(Math.random()),
                                        bidRequest: e,
                                    };
                                })
                        );
                    else {
                        var n = e
                            .filter(function (e) {
                                return "banner" === A(e);
                            })
                            .reduce(function (e, r) {
                                return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e;
                            }, {});
                        r = t.concat(
                            Object.keys(n).reduce(function (r, e) {
                                var t, i;
                                return (
                                    (t = n[e]),
                                    (i = 10),
                                    t
                                        .map(function (e, r) {
                                            return r % i == 0 ? t.slice(r, r + i) : null;
                                        })
                                        .filter(function (e) {
                                            return e;
                                        })
                                        .forEach(function (e) {
                                            var i = g.combineSlotUrlParams(
                                                e.map(function (e) {
                                                    return g.createSlotParams(e, a);
                                                })
                                            );
                                            r.push({
                                                method: "GET",
                                                url: o,
                                                data:
                                                    g.getOrderedParams(i).reduce(function (e, r) {
                                                        var t = i[r];
                                                        return (p.isStr(t) && "" !== t) || p.isNumber(t) ? "".concat(e).concat(R(r, t), "&") : e;
                                                    }, "") + "slots=".concat(e.length, "&rand=").concat(Math.random()),
                                                bidRequest: e,
                                            });
                                        }),
                                    r
                                );
                            }, [])
                        );
                    }
                    return r;
                },
                getOrderedParams: function (e) {
                    var r = /^tg_v/,
                        t = /^tg_i/,
                        i = [
                            "account_id",
                            "site_id",
                            "zone_id",
                            "size_id",
                            "alt_size_ids",
                            "p_pos",
                            "gdpr",
                            "gdpr_consent",
                            "us_privacy",
                            "rp_schain",
                            "tpid_tdid",
                            "tpid_liveintent.com",
                            "tg_v.LIseg",
                            "dt.id",
                            "dt.keyv",
                            "dt.pref",
                            "rf",
                            "p_geo.latitude",
                            "p_geo.longitude",
                            "kw",
                        ]
                            .concat(
                                Object.keys(e).filter(function (e) {
                                    return r.test(e);
                                })
                            )
                            .concat(
                                Object.keys(e).filter(function (e) {
                                    return t.test(e);
                                })
                            )
                            .concat(["tk_flint", "x_source.tid", "x_source.pchain", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                    return i.concat(
                        Object.keys(e).filter(function (e) {
                            return -1 === i.indexOf(e);
                        })
                    );
                },
                combineSlotUrlParams: function (n) {
                    if (1 === n.length) return n[0];
                    var i = n.reduce(function (r, t, i) {
                            return (
                                Object.keys(t).forEach(function (e) {
                                    r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e]);
                                }),
                                r
                            );
                        }, {}),
                        o = new RegExp("^([^;]*)(;\\1)+$");
                    return (
                        Object.keys(i).forEach(function (e) {
                            var r = i[e].join(";"),
                                t = r.match(o);
                            i[e] = t ? t[1] : r;
                        }),
                        i
                    );
                },
                createSlotParams: function (e, r) {
                    e.startTime = new Date().getTime();
                    var t = e.params,
                        i = x(e, "banner"),
                        n = f(t.latLong || [], 2),
                        o = n[0],
                        a = n[1],
                        s = l.b.getConfig("rubicon.int_type"),
                        c = {
                            account_id: t.accountId,
                            site_id: t.siteId,
                            zone_id: t.zoneId,
                            size_id: i[0],
                            alt_size_ids: i.slice(1).join(",") || void 0,
                            rp_floor: 0.01 < (t.floor = parseFloat(t.floor)) ? t.floor : 0.01,
                            rp_secure: "1",
                            tk_flint: "".concat(s || "pbjs_lite", "_v3.6.0"),
                            "x_source.tid": e.transactionId,
                            "x_source.pchain": t.pchain,
                            p_screen_res: [window.screen.width, window.screen.height].join("x"),
                            kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                            tk_user_key: t.userId,
                            "p_geo.latitude": isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
                            "p_geo.longitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                            "tg_fl.eid": e.code,
                            rf: h(e, r),
                        };
                    (c.p_pos = "atf" === t.position || "btf" === t.position ? t.position : ""),
                        e.userId &&
                            (e.userId.tdid && (c.tpid_tdid = e.userId.tdid),
                            e.userId.lipb &&
                                e.userId.lipb.lipbid &&
                                ((c["tpid_liveintent.com"] = e.userId.lipb.lipbid), Array.isArray(e.userId.lipb.segments) && e.userId.lipb.segments.length && (c["tg_v.LIseg"] = e.userId.lipb.segments.join(",")))),
                        r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (c.gdpr = Number(r.gdprConsent.gdprApplies)), (c.gdpr_consent = r.gdprConsent.consentString)),
                        r.uspConsent && (c.us_privacy = encodeURIComponent(r.uspConsent)),
                        null !== t.visitor &&
                            "object" === v(t.visitor) &&
                            Object.keys(t.visitor).forEach(function (e) {
                                null != t.visitor[e] && (c["tg_v.".concat(e)] = t.visitor[e].toString());
                            }),
                        null !== t.inventory &&
                            "object" === v(t.inventory) &&
                            Object.keys(t.inventory).forEach(function (e) {
                                null != t.inventory[e] && (c["tg_i.".concat(e)] = t.inventory[e].toString());
                            });
                    var d = p.deepAccess(e, "fpd.context.pbAdSlot");
                    "string" == typeof d && d && (c["tg_i.dfp_ad_unit_code"] = d.replace(/^\/+/, ""));
                    var u = y(e, "FASTLANE");
                    return m(c, u), !0 === l.b.getConfig("coppa") && (c.coppa = 1), e.schain && T(e.schain) && (c.rp_schain = g.serializeSupplyChain(e.schain)), c;
                },
                serializeSupplyChain: function (e) {
                    if (!T(e)) return "";
                    var r = e.ver,
                        t = e.complete,
                        i = e.nodes;
                    return "".concat(r, ",").concat(t, "!").concat(g.serializeSupplyChainNodes(i));
                },
                serializeSupplyChainNodes: function (e) {
                    var t = ["asi", "sid", "hp", "rid", "name", "domain"];
                    return e
                        .map(function (r) {
                            return t
                                .map(function (e) {
                                    return encodeURIComponent(r[e] || "");
                                })
                                .join(",");
                        })
                        .join("!");
                },
                interpretResponse: function (c, e) {
                    var d = e.bidRequest;
                    if (!(c = c.body) || "object" !== v(c)) return [];
                    if (c.seatbid) {
                        var r = p.deepAccess(c, "ext.errors.rubicon");
                        Array.isArray(r) && 0 < r.length && p.logWarn("Rubicon: Error in video response");
                        var o = [];
                        return (
                            c.seatbid.forEach(function (n) {
                                (n.bid || []).forEach(function (e) {
                                    var r = {
                                        requestId: d.bidId,
                                        currency: c.cur || "USD",
                                        creativeId: e.crid,
                                        cpm: e.price || 0,
                                        bidderCode: n.seat,
                                        ttl: 300,
                                        netRevenue: !1 !== l.b.getConfig("rubicon.netRevenue"),
                                        width: e.w || p.deepAccess(d, "mediaTypes.video.w") || p.deepAccess(d, "params.video.playerWidth"),
                                        height: e.h || p.deepAccess(d, "mediaTypes.video.h") || p.deepAccess(d, "params.video.playerHeight"),
                                    };
                                    e.id && (r.seatBidId = e.id), e.dealid && (r.dealId = e.dealid);
                                    var t = p.deepAccess(c, "ext.responsetimemillis.rubicon");
                                    if ((d && t && (d.serverResponseTimeMs = t), p.deepAccess(e, "ext.prebid.type") === u.d)) {
                                        r.mediaType = u.d;
                                        var i = p.deepAccess(e, "ext.prebid.targeting");
                                        i && "object" === v(i) && (r.adserverTargeting = i),
                                            e.ext.prebid.cache && "object" === v(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url
                                                ? ((r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId), (r.vastUrl = e.ext.prebid.cache.vastXml.url))
                                                : i && i.hb_uuid && i.hb_cache_host && i.hb_cache_path && ((r.videoCacheKey = i.hb_uuid), (r.vastUrl = "https://".concat(i.hb_cache_host).concat(i.hb_cache_path, "?uuid=").concat(i.hb_uuid))),
                                            e.adm && (r.vastXml = e.adm),
                                            e.nurl && (r.vastUrl = e.nurl),
                                            !r.vastUrl && e.nurl && (r.vastUrl = e.nurl);
                                    } else p.logWarn("Rubicon: video response received non-video media type");
                                    o.push(r);
                                });
                            }),
                            o
                        );
                    }
                    var t = c.ads;
                    return (
                        "object" !== v(d) || Array.isArray(d) || "video" !== A(d) || "object" !== v(t) || (t = t[d.adUnitCode]),
                        !Array.isArray(t) || t.length < 1
                            ? []
                            : t
                                  .reduce(function (e, r, t) {
                                      if ("ok" !== r.status) return e;
                                      var i,
                                          n,
                                          o = Array.isArray(d) ? d[t] : d;
                                      if (o && "object" === v(o)) {
                                          var a = {
                                              requestId: o.bidId,
                                              currency: "USD",
                                              creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
                                              cpm: r.cpm || 0,
                                              dealId: r.deal,
                                              ttl: 300,
                                              netRevenue: !1 !== l.b.getConfig("rubicon.netRevenue"),
                                              rubicon: { advertiserId: r.advertiser, networkId: r.network },
                                              meta: { advertiserId: r.advertiser, networkId: r.network },
                                          };
                                          if ((r.creative_type && (a.mediaType = r.creative_type), r.creative_type === u.d))
                                              (a.width = o.params.video.playerWidth), (a.height = o.params.video.playerHeight), (a.vastUrl = r.creative_depot_url), (a.impression_id = r.impression_id), (a.videoCacheKey = r.impression_id);
                                          else {
                                              a.ad =
                                                  ((i = r.script),
                                                  (n = r.impression_id),
                                                  "<html>\n<head><script type='text/javascript'>inDapIF=true;</script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='"
                                                      .concat(n, "'>\n<script type='text/javascript'>")
                                                      .concat(i, "</script>\n</div>\n</body>\n</html>"));
                                              var s = f(
                                                  b[r.size_id].split("x").map(function (e) {
                                                      return Number(e);
                                                  }),
                                                  2
                                              );
                                              (a.width = s[0]), (a.height = s[1]);
                                          }
                                          (a.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(
                                              function (e, r) {
                                                  return (e[r.key] = r.values[0]), e;
                                              },
                                              { rpfl_elemid: o.adUnitCode }
                                          )),
                                              e.push(a);
                                      } else p.logError("Rubicon: bidRequest undefined at index position:".concat(t), d, c);
                                      return e;
                                  }, [])
                                  .sort(function (e, r) {
                                      return (r.cpm || 0) - (e.cpm || 0);
                                  })
                    );
                },
                getUserSyncs: function (e, r, t, i) {
                    if (!w && e.iframeEnabled) {
                        var n = "";
                        return (
                            t &&
                                "string" == typeof t.consentString &&
                                ("boolean" == typeof t.gdprApplies ? (n += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString)) : (n += "?gdpr_consent=".concat(t.consentString))),
                            i && (n += "".concat(n ? "&" : "?", "us_privacy=").concat(encodeURIComponent(i))),
                            (w = !0),
                            { type: "iframe", url: a + n }
                        );
                    }
                },
                transformBidParams: function (e) {
                    return p.convertTypes({ accountId: "number", siteId: "number", zoneId: "number" }, e);
                },
            };
            function y(e, r) {
                var t,
                    i = 0 < arguments.length && void 0 !== e ? e : {},
                    n = 1 < arguments.length ? r : void 0;
                if (!n || !d[n]) return null;
                var o = d[n];
                var a = (function () {
                    var e = p.deepAccess(i, "userId.digitrustid.data");
                    if (e) return e;
                    var r = window.DigiTrust && (l.b.getConfig("digiTrustId") || window.DigiTrust.getUser({ member: "T9QSFKPDN9" }));
                    return (r && r.success && r.identity) || null;
                })();
                if (!a || (a.privacy && a.privacy.optout)) return null;
                var s = (c((t = {}), o.id, a.id), c(t, o.keyv, a.keyv), t);
                return o.pref && (s[o.pref] = 0), s;
            }
            function h(e, r) {
                var t = l.b.getConfig("pageUrl");
                return (t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer), e.params.secure ? t.replace(/^http:/i, "https:") : t;
            }
            function x(e, r) {
                var t = e.params;
                if ("video" === r) {
                    var i = [];
                    return (
                        t.video && t.video.playerWidth && t.video.playerHeight
                            ? (i = [t.video.playerWidth, t.video.playerHeight])
                            : Array.isArray(p.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length
                            ? (i = e.mediaTypes.video.playerSize[0])
                            : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]),
                        i
                    );
                }
                var n = [];
                return (
                    Array.isArray(t.sizes)
                        ? (n = t.sizes)
                        : void 0 !== p.deepAccess(e, "mediaTypes.banner.sizes")
                        ? (n = _(e.mediaTypes.banner.sizes))
                        : Array.isArray(e.sizes) && 0 < e.sizes.length
                        ? (n = _(e.sizes))
                        : p.logWarn("Rubicon: no sizes are setup or found"),
                    S(n)
                );
            }
            function _(e) {
                return p.parseSizesInput(e).reduce(function (e, r) {
                    var t = parseInt(b[r], 10);
                    return t && e.push(t), e;
                }, []);
            }
            function I(e) {
                return "object" === v(p.deepAccess(e, "params.video")) && void 0 !== p.deepAccess(e, "mediaTypes.".concat(u.d));
            }
            function A(e, r) {
                var t = 1 < arguments.length && void 0 !== r && r;
                return I(e)
                    ? -1 === ["outstream", "instream"].indexOf(p.deepAccess(e, "mediaTypes.".concat(u.d, ".context")))
                        ? void (t && p.logError("Rubicon: mediaTypes.video.context must be outstream or instream"))
                        : x(e, "video").length < 2
                        ? void (t && p.logError("Rubicon: could not determine the playerSize of the video"))
                        : (t && p.logMessage("Rubicon: making video request for adUnit", e.adUnitCode), "video")
                    : 0 === x(e, "banner").length
                    ? void (t && p.logError("Rubicon: could not determine the sizes for banner request"))
                    : (t && p.logMessage("Rubicon: making banner request for adUnit", e.adUnitCode), "banner");
            }
            function S(e) {
                var n = [15, 2, 9];
                return e.sort(function (e, r) {
                    var t = n.indexOf(e),
                        i = n.indexOf(r);
                    return -1 < t || -1 < i ? (-1 === t ? 1 : -1 === i ? -1 : t - i) : e - r;
                });
            }
            function j(e) {
                var r = parseInt(p.deepAccess(e, "params.video.size_id"));
                return isNaN(r) ? ("outstream" === p.deepAccess(e, "mediaTypes.".concat(u.d, ".context")) ? 203 : 201) : r;
            }
            function C(e) {
                return {
                    ranges: {
                        low: [{ max: 5, increment: 0.5 }],
                        medium: [{ max: 20, increment: 0.1 }],
                        high: [{ max: 20, increment: 0.01 }],
                        auto: [
                            { max: 5, increment: 0.05 },
                            { min: 5, max: 10, increment: 0.1 },
                            { min: 10, max: 20, increment: 0.5 },
                        ],
                        dense: [
                            { max: 3, increment: 0.01 },
                            { min: 3, max: 8, increment: 0.05 },
                            { min: 8, max: 20, increment: 0.5 },
                        ],
                        custom: e.getConfig("customPriceBucket") && e.getConfig("customPriceBucket").buckets,
                    }[e.getConfig("priceGranularity")],
                };
            }
            function k(r) {
                var t = !0,
                    e = Object.prototype.toString.call([]),
                    i = Object.prototype.toString.call(0),
                    n = { mimes: e, protocols: e, maxduration: i, linearity: i, api: e };
                return (
                    Object.keys(n).forEach(function (e) {
                        Object.prototype.toString.call(p.deepAccess(r, "mediaTypes.video." + e)) !== n[e] && ((t = !1), p.logError("Rubicon: mediaTypes.video." + e + " is required and must be of type: " + n[e]));
                    }),
                    t
                );
            }
            function T(e) {
                var r = !1,
                    t = ["asi", "sid", "hp"];
                return (
                    e.nodes &&
                        ((r = e.nodes.reduce(function (e, r) {
                            return e
                                ? t.every(function (e) {
                                      return r[e];
                                  })
                                : e;
                        }, !0)) ||
                            p.logError("Rubicon: required schain params missing")),
                    r
                );
            }
            function R(e, r) {
                return "rp_schain" === e ? "rp_schain=".concat(r) : "".concat(e, "=").concat(encodeURIComponent(r));
            }
            var w = !1;
            Object(i.registerBidder)(g);
        },
    },
    [517]
);
pbjsChunk(
    [86],
    {
        535: function (e, t, n) {
            e.exports = n(536);
        },
        536: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                n.d(t, "sharethroughInternal", function () {
                    return s;
                }),
                n.d(t, "sharethroughAdapterSpec", function () {
                    return o;
                });
            var r = n(1),
                i = "sharethrough",
                a = [1, 1],
                s = {
                    b64EncodeUnicode: c,
                    handleIframe: function () {
                        var e = !1;
                        if (!window.lockedInFrame) {
                            var t = document.createElement("script");
                            (t.src = "https://native.sharethrough.com/assets/sfp-set-targeting.js"), (t.type = "text/javascript");
                            try {
                                window.document.getElementsByTagName("body")[0].appendChild(t), (e = !0);
                            } catch (e) {
                                console.error(e);
                            }
                        }
                        if (!(e ? window.top.STR && window.top.STR.Tag : window.STR && window.STR.Tag)) {
                            var n = document.createElement("script");
                            (n.src = "https://native.sharethrough.com/assets/sfp.js"), (n.type = "text/javascript");
                            try {
                                e ? window.top.document.getElementsByTagName("body")[0].appendChild(n) : window.document.getElementsByTagName("body")[0].appendChild(n);
                            } catch (e) {
                                console.error(e);
                            }
                        }
                    },
                    isLockedInFrame: function () {
                        window.lockedInFrame = !1;
                        try {
                            window.lockedInFrame = !window.top.document;
                        } catch (e) {
                            window.lockedInFrame = e instanceof DOMException;
                        }
                    },
                    getProtocol: function () {
                        return document.location.protocol;
                    },
                },
                o = {
                    code: i,
                    isBidRequestValid: function (e) {
                        return !!e.params.pkey && e.bidder === i;
                    },
                    buildRequests: function (e, r) {
                        return e.map(function (e) {
                            var t = {
                                    placement_key: e.params.pkey,
                                    bidId: e.bidId,
                                    consent_required: !1,
                                    instant_play_capable: (function () {
                                        var e = navigator.userAgent;
                                        if (!e) return !1;
                                        var t = /Android/i.test(e),
                                            n = /iPhone|iPad|iPod/i.test(e),
                                            r = parseInt((/Chrome\/([0-9]+)/.exec(e) || [0, 0])[1]),
                                            i = parseInt((/CriOS\/([0-9]+)/.exec(e) || [0, 0])[1]),
                                            o = parseInt((/Version\/([0-9]+)/.exec(e) || [0, 0])[1]);
                                        return !!((t && 53 <= r) || (n && (10 <= o || 53 <= i)) || (!t && !n));
                                    })(),
                                    hbSource: "prebid",
                                    hbVersion: "3.6.0",
                                    strVersion: "3.2.0",
                                },
                                n = s.getProtocol().indexOf("http") < 0;
                            return (
                                (t.secure = n || -1 < s.getProtocol().indexOf("https")),
                                r && r.gdprConsent && r.gdprConsent.consentString && (t.consent_string = r.gdprConsent.consentString),
                                r && r.gdprConsent && (t.consent_required = !!r.gdprConsent.gdprApplies),
                                r && r.uspConsent && (t.us_privacy = r.uspConsent),
                                e.userId && e.userId.tdid && (t.ttduid = e.userId.tdid),
                                e.schain && (t.schain = JSON.stringify(e.schain)),
                                e.bidfloor && (t.bidfloor = parseFloat(e.bidfloor)),
                                { method: "GET", url: "https://btlr.sharethrough.com/WYu2BXv1/v1", data: t, strData: { skipIframeBusting: e.params.iframe, iframeSize: e.params.iframeSize, sizes: e.sizes } }
                            );
                        });
                    },
                    interpretResponse: function (e, t) {
                        var n = e.body;
                        if (!n || !n.creatives || !n.creatives.length) return [];
                        var r = n.creatives[0],
                            i = a;
                        function o(e) {
                            return e[0] * e[1];
                        }
                        return (
                            (t.strData.iframeSize || t.strData.sizes.length) &&
                                (i = t.strData.iframeSize
                                    ? t.strData.iframeSize
                                    : t.strData.sizes.reduce(function (e, t) {
                                          return o(t) > o(e) ? t : e;
                                      })),
                            [
                                {
                                    requestId: t.data.bidId,
                                    width: i[0],
                                    height: i[1],
                                    cpm: r.cpm,
                                    creativeId: r.creative.creative_key,
                                    dealId: r.creative.deal_id,
                                    currency: "USD",
                                    netRevenue: !0,
                                    ttl: 360,
                                    ad: (function (e, t) {
                                        var n = "str_response_".concat(t.data.bidId),
                                            r = '\n    <div data-str-native-key="'
                                                .concat(t.data.placement_key, '" data-stx-response-name="')
                                                .concat(n, '">\n    </div>\n    <script>var ')
                                                .concat(n, ' = "')
                                                .concat(c(JSON.stringify(e)), '"</script>\n  ');
                                        t.strData.skipIframeBusting
                                            ? (r += '<script src="//native.sharethrough.com/assets/sfp.js"></script>')
                                            : (r += "\n      <script>\n        (".concat(s.isLockedInFrame.toString(), ")()\n      </script>\n      <script>\n        (").concat(s.handleIframe.toString(), ")()\n      </script>"));
                                        return r;
                                    })(n, t),
                                },
                            ]
                        );
                    },
                    getUserSyncs: function (e, t, n, r) {
                        var i = r ? "&us_privacy=".concat(r) : "",
                            o = [];
                        return (
                            e.pixelEnabled &&
                                0 < t.length &&
                                t[0].body &&
                                t[0].body.cookieSyncUrls &&
                                t[0].body.cookieSyncUrls.forEach(function (e) {
                                    o.push({ type: "image", url: e + i });
                                }),
                            o
                        );
                    },
                    onTimeout: function () {},
                    onBidWon: function () {},
                    onSetTargeting: function () {},
                };
            function c(e) {
                return btoa(
                    encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
                        return String.fromCharCode("0x" + t);
                    })
                );
            }
            Object(r.registerBidder)(o);
        },
    },
    [535]
);
pbjsChunk(
    [76],
    {
        563: function (e, r, t) {
            e.exports = t(564);
        },
        564: function (e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", { value: !0 }),
                t.d(r, "spec", function () {
                    return i;
                });
            var c = t(0),
                u = t(9),
                n = t(1),
                a = t(2),
                i = {
                    code: "sovrn",
                    supportedMediaTypes: [a.b],
                    isBidRequestValid: function (e) {
                        return !(!e.params.tagid || isNaN(parseFloat(e.params.tagid)) || !isFinite(e.params.tagid));
                    },
                    buildRequests: function (e, r) {
                        try {
                            var i,
                                a,
                                s,
                                d = [];
                            c._each(e, function (e) {
                                if (!s) {
                                    var r = c.deepAccess(e, "userId.digitrustid.data");
                                    !r || (r.privacy && r.privacy.optout) || (s = { id: r.id, keyv: r.keyv });
                                }
                                e.schain && (a = a || e.schain), (i = i || c.getBidIdParameter("iv", e.params));
                                var t = (e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes) || e.sizes,
                                    n = (t = (t = c.isArray(t) && c.isArray(t[0]) ? t : [t]).filter(function (e) {
                                        return c.isArray(e);
                                    })).map(function (e) {
                                        return { w: parseInt(e[0], 10), h: parseInt(e[1], 10) };
                                    });
                                d.push({ id: e.bidId, banner: { format: n, w: 1, h: 1 }, tagid: String(c.getBidIdParameter("tagid", e.params)), bidfloor: c.getBidIdParameter("bidfloor", e.params) });
                            });
                            var t = r.refererInfo.referer,
                                n = Object(u.c)(t).hostname,
                                o = { id: c.getUniqueIdentifierStr(), imp: d, site: { page: t, domain: n } };
                            a && (o.source = { ext: { schain: a } }),
                                r.gdprConsent && (c.deepSetValue(o, "regs.ext.gdpr", +r.gdprConsent.gdprApplies), c.deepSetValue(o, "user.ext.consent", r.gdprConsent.consentString)),
                                r.uspConsent && c.deepSetValue(o, "regs.ext.us_privacy", r.uspConsent),
                                s && c.deepSetValue(o, "user.ext.digitrust", { id: s.id, keyv: s.keyv });
                            var p = "https://ap.lijit.com/rtb/bid?src=prebid_prebid_3.6.0";
                            return i && (p += "&iv=".concat(i)), { method: "POST", url: p, data: JSON.stringify(o), options: { contentType: "text/plain" } };
                        } catch (e) {
                            console.log("error in build:"), console.log(e);
                        }
                    },
                    interpretResponse: function (e) {
                        var r = e.body,
                            t = r.id,
                            n = r.seatbid;
                        try {
                            var i = [];
                            return (
                                t &&
                                    n &&
                                    0 < n.length &&
                                    n[0].bid &&
                                    0 < n[0].bid.length &&
                                    n[0].bid.map(function (e) {
                                        i.push({
                                            requestId: e.impid,
                                            cpm: parseFloat(e.price),
                                            width: parseInt(e.w),
                                            height: parseInt(e.h),
                                            creativeId: e.crid || e.id,
                                            dealId: e.dealid || null,
                                            currency: "USD",
                                            netRevenue: !0,
                                            mediaType: a.b,
                                            ad: decodeURIComponent("".concat(e.adm, '<img src="').concat(e.nurl, '">')),
                                            ttl: 60,
                                        });
                                    }),
                                i
                            );
                        } catch (e) {
                            console.log("error in interpret:"), console.log(e);
                        }
                    },
                    getUserSyncs: function (e, r, t, n) {
                        try {
                            var i = [];
                            if (r && 0 !== r.length) {
                                if (e.iframeEnabled) {
                                    var a = r
                                            .filter(function (e) {
                                                return c.deepAccess(e, "body.ext.iid");
                                            })
                                            .map(function (e) {
                                                return e.body.ext.iid;
                                            }),
                                        s = [];
                                    t && t.gdprApplies && "string" == typeof t.consentString && s.push(["gdpr_consent", t.consentString]),
                                        n && s.push(["us_privacy", n]),
                                        a[0] &&
                                            (s.push(["informer", a[0]]),
                                            i.push({
                                                type: "iframe",
                                                url:
                                                    "https://ap.lijit.com/beacon?" +
                                                    s
                                                        .map(function (e) {
                                                            return e.join("=");
                                                        })
                                                        .join("&"),
                                            }));
                                }
                                e.pixelEnabled &&
                                    r
                                        .filter(function (e) {
                                            return c.deepAccess(e, "body.ext.sync.pixels");
                                        })
                                        .reduce(function (e, r) {
                                            return e.concat(r.body.ext.sync.pixels);
                                        }, [])
                                        .map(function (e) {
                                            return e.url;
                                        })
                                        .forEach(function (e) {
                                            return i.push({ type: "image", url: e });
                                        });
                            }
                            return i;
                        } catch (e) {
                            return [];
                        }
                    },
                };
            Object(n.registerBidder)(i);
        },
    },
    [563]
);
pbjsChunk(
    [62],
    {
        593: function (r, e, t) {
            r.exports = t(594);
        },
        594: function (r, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                t.d(e, "tripleliftAdapterSpec", function () {
                    return c;
                });
            var n = t(2),
                i = t(1),
                o = t(0);
            function u(r) {
                return (
                    (function (r) {
                        if (Array.isArray(r)) return d(r);
                    })(r) ||
                    (function (r) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(r)) return Array.from(r);
                    })(r) ||
                    (function (r, e) {
                        if (!r) return;
                        if ("string" == typeof r) return d(r, e);
                        var t = Object.prototype.toString.call(r).slice(8, -1);
                        "Object" === t && r.constructor && (t = r.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(t);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return d(r, e);
                    })(r) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function d(r, e) {
                (null == e || e > r.length) && (e = r.length);
                for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
                return n;
            }
            var p = !0,
                a = null,
                c = {
                    code: "triplelift",
                    supportedMediaTypes: [n.b],
                    isBidRequestValid: function (r) {
                        return void 0 !== r.params.inventoryCode;
                    },
                    buildRequests: function (r, e) {
                        var t = "https://tlx.3lift.com/header/auction?",
                            n = (function (r) {
                                var e = {},
                                    t = r[0].schain;
                                e.imp = r.map(function (r, e) {
                                    return {
                                        id: e,
                                        tagid: r.params.inventoryCode,
                                        floor: r.params.floor,
                                        banner: {
                                            format: r.sizes.filter(f).map(function (r) {
                                                return { w: r[0], h: r[1] };
                                            }),
                                        },
                                    };
                                });
                                var n = [].concat(
                                    u(
                                        (function (r) {
                                            return s(r, "tdid", "adserver.org", "TDID");
                                        })(r)
                                    ),
                                    u(
                                        (function (r) {
                                            return s(r, "idl_env", "liveramp.com", "idl");
                                        })(r)
                                    ),
                                    u(
                                        (function (r) {
                                            return s(r, "criteoId", "criteo.com", "criteoId");
                                        })(r)
                                    )
                                );
                                0 < n.length && (e.user = { ext: { eids: n } });
                                t && (e.ext = { schain: t });
                                return e;
                            })(r);
                        if (((t = o.tryAppendQueryString(t, "lib", "prebid")), (t = o.tryAppendQueryString(t, "v", "3.6.0")), e && e.refererInfo)) {
                            var i = e.refererInfo.referer;
                            t = o.tryAppendQueryString(t, "referrer", i);
                        }
                        return (
                            e && e.timeout && (t = o.tryAppendQueryString(t, "tmax", e.timeout)),
                            e &&
                                e.gdprConsent &&
                                (void 0 !== e.gdprConsent.gdprApplies && ((p = e.gdprConsent.gdprApplies), (t = o.tryAppendQueryString(t, "gdpr", p.toString()))),
                                void 0 !== e.gdprConsent.consentString && ((a = e.gdprConsent.consentString), (t = o.tryAppendQueryString(t, "cmp_cs", a)))),
                            e && e.uspConsent && (t = o.tryAppendQueryString(t, "us_privacy", e.uspConsent)),
                            t.lastIndexOf("&") === t.length - 1 && (t = t.substring(0, t.length - 1)),
                            o.logMessage("tlCall request built: " + t),
                            { method: "POST", url: t, data: n, bidderRequest: e }
                        );
                    },
                    interpretResponse: function (r, e) {
                        var t = e.bidderRequest;
                        return (r.body.bids || []).map(function (r) {
                            return (function (r, e) {
                                var t = {},
                                    n = e.width || 1,
                                    i = e.height || 1,
                                    u = e.deal_id || "",
                                    o = e.crid || "";
                                0 != e.cpm && e.ad && (t = { requestId: r.bids[e.imp_id].bidId, cpm: e.cpm, width: n, height: i, netRevenue: !0, ad: e.ad, creativeId: o, dealId: u, currency: "USD", ttl: 33 });
                                return t;
                            })(t, r);
                        });
                    },
                    getUserSyncs: function (r, e, t, n) {
                        var i = (function (r) {
                            if (!r) return;
                            if (r.iframeEnabled) return "iframe";
                            if (r.pixelEnabled) return "image";
                        })(r);
                        if (i) {
                            var u = "https://eb2.3lift.com/sync?";
                            return (
                                "image" === i && ((u = o.tryAppendQueryString(u, "px", 1)), (u = o.tryAppendQueryString(u, "src", "prebid"))),
                                null !== a && ((u = o.tryAppendQueryString(u, "gdpr", p)), (u = o.tryAppendQueryString(u, "cmp_cs", a))),
                                n && (u = o.tryAppendQueryString(u, "us_privacy", n)),
                                [{ type: i, url: u }]
                            );
                        }
                    },
                };
            function s(r, e, t, n) {
                return r
                    .map(
                        ((o = e),
                        function (r) {
                            return r && r.userId && r.userId[o];
                        })
                    )
                    .filter(function (r) {
                        return !!r;
                    })
                    .map(
                        ((i = t),
                        (u = n),
                        function (r) {
                            return { source: i, uids: [{ id: r, ext: { rtiPartner: u } }] };
                        })
                    );
                var i, u, o;
            }
            function f(r) {
                return 2 === r.length && "number" == typeof r[0] && "number" == typeof r[1];
            }
            Object(i.registerBidder)(c);
        },
    },
    [593]
);
pbjs.processQueue();
var bsaheaderbid = (function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var i = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
        (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var i in e)
                    n.d(
                        r,
                        i,
                        function (t) {
                            return e[t];
                        }.bind(null, i)
                    );
            return r;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 132))
    );
})([
    function (e, t, n) {
        var r = n(3),
            i = n(26),
            o = n(22),
            a = n(12),
            u = n(24),
            c = function (e, t, n) {
                var s,
                    l,
                    f,
                    d,
                    p = e & c.F,
                    h = e & c.G,
                    v = e & c.S,
                    y = e & c.P,
                    b = e & c.B,
                    m = h ? r : v ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
                    g = h ? i : i[t] || (i[t] = {}),
                    w = g.prototype || (g.prototype = {});
                for (s in (h && (n = t), n))
                    (f = ((l = !p && m && void 0 !== m[s]) ? m : n)[s]), (d = b && l ? u(f, r) : y && "function" == typeof f ? u(Function.call, f) : f), m && a(m, s, f, e & c.U), g[s] != f && o(g, s, d), y && w[s] != f && (w[s] = f);
            };
        (r.core = i), (c.F = 1), (c.G = 2), (c.S = 4), (c.P = 8), (c.B = 16), (c.W = 32), (c.U = 64), (c.R = 128), (e.exports = c);
    },
    function (e, t, n) {
        var r = n(0);
        r(r.S + r.F * !n(5), "Object", { defineProperty: n(7).f });
    },
    function (e, t, n) {
        var r = n(46)("wks"),
            i = n(37),
            o = n(3).Symbol,
            a = "function" == typeof o;
        (e.exports = function (e) {
            return r[e] || (r[e] = (a && o[e]) || (a ? o : i)("Symbol." + e));
        }).store = r;
    },
    function (e, t) {
        var n = (e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
        "number" == typeof __g && (__g = n);
    },
    function (e, t, n) {
        var r = n(8);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    },
    function (e, t, n) {
        e.exports = !n(6)(function () {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    function (e, t) {
        e.exports = function (e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    function (e, t, n) {
        var r = n(4),
            i = n(79),
            o = n(47),
            a = Object.defineProperty;
        t.f = n(5)
            ? Object.defineProperty
            : function (e, t, n) {
                  if ((r(e), (t = o(t, !0)), r(n), i))
                      try {
                          return a(e, t, n);
                      } catch (e) {}
                  if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                  return "value" in n && (e[t] = n.value), e;
              };
    },
    function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    function (e, t, n) {
        for (
            var r = n(20),
                i = n(29),
                o = n(12),
                a = n(3),
                u = n(22),
                c = n(39),
                s = n(2),
                l = s("iterator"),
                f = s("toStringTag"),
                d = c.Array,
                p = {
                    CSSRuleList: !0,
                    CSSStyleDeclaration: !1,
                    CSSValueList: !1,
                    ClientRectList: !1,
                    DOMRectList: !1,
                    DOMStringList: !1,
                    DOMTokenList: !0,
                    DataTransferItemList: !1,
                    FileList: !1,
                    HTMLAllCollection: !1,
                    HTMLCollection: !1,
                    HTMLFormElement: !1,
                    HTMLSelectElement: !1,
                    MediaList: !0,
                    MimeTypeArray: !1,
                    NamedNodeMap: !1,
                    NodeList: !0,
                    PaintRequestList: !1,
                    Plugin: !1,
                    PluginArray: !1,
                    SVGLengthList: !1,
                    SVGNumberList: !1,
                    SVGPathSegList: !1,
                    SVGPointList: !1,
                    SVGStringList: !1,
                    SVGTransformList: !1,
                    SourceBufferList: !1,
                    StyleSheetList: !0,
                    TextTrackCueList: !1,
                    TextTrackList: !1,
                    TouchList: !1,
                },
                h = i(p),
                v = 0;
            v < h.length;
            v++
        ) {
            var y,
                b = h[v],
                m = p[b],
                g = a[b],
                w = g && g.prototype;
            if (w && (w[l] || u(w, l, d), w[f] || u(w, f, b), (c[b] = d), m)) for (y in r) w[y] || o(w, y, r[y], !0);
        }
    },
    function (e, t, n) {
        var r = n(7).f,
            i = Function.prototype,
            o = /^\s*function ([^ (]*)/;
        "name" in i ||
            (n(5) &&
                r(i, "name", {
                    configurable: !0,
                    get: function () {
                        try {
                            return ("" + this).match(o)[1];
                        } catch (e) {
                            return "";
                        }
                    },
                }));
    },
    function (e, t, n) {
        "use strict";
        var r = n(90)(!0);
        n(55)(
            String,
            "String",
            function (e) {
                (this._t = String(e)), (this._i = 0);
            },
            function () {
                var e,
                    t = this._t,
                    n = this._i;
                return n >= t.length ? { value: void 0, done: !0 } : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
            }
        );
    },
    function (e, t, n) {
        var r = n(3),
            i = n(22),
            o = n(23),
            a = n(37)("src"),
            u = n(102),
            c = ("" + u).split("toString");
        (n(26).inspectSource = function (e) {
            return u.call(e);
        }),
            (e.exports = function (e, t, n, u) {
                var s = "function" == typeof n;
                s && (o(n, "name") || i(n, "name", t)), e[t] !== n && (s && (o(n, a) || i(n, a, e[t] ? "" + e[t] : c.join(String(t)))), e === r ? (e[t] = n) : u ? (e[t] ? (e[t] = n) : i(e, t, n)) : (delete e[t], i(e, t, n)));
            })(Function.prototype, "toString", function () {
                return ("function" == typeof this && this[a]) || u.call(this);
            });
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            i = n(32)(0),
            o = n(33)([].forEach, !0);
        r(r.P + r.F * !o, "Array", {
            forEach: function (e) {
                return i(this, e, arguments[1]);
            },
        });
    },
    function (e, t, n) {
        "use strict";
        var r = n(24),
            i = n(0),
            o = n(25),
            a = n(83),
            u = n(84),
            c = n(30),
            s = n(110),
            l = n(85);
        i(
            i.S +
                i.F *
                    !n(62)(function (e) {
                        Array.from(e);
                    }),
            "Array",
            {
                from: function (e) {
                    var t,
                        n,
                        i,
                        f,
                        d = o(e),
                        p = "function" == typeof this ? this : Array,
                        h = arguments.length,
                        v = h > 1 ? arguments[1] : void 0,
                        y = void 0 !== v,
                        b = 0,
                        m = l(d);
                    if ((y && (v = r(v, h > 2 ? arguments[2] : void 0, 2)), null == m || (p == Array && u(m)))) for (n = new p((t = c(d.length))); t > b; b++) s(n, b, y ? v(d[b], b) : d[b]);
                    else for (f = m.call(d), n = new p(); !(i = f.next()).done; b++) s(n, b, y ? a(f, v, [i.value, b], !0) : i.value);
                    return (n.length = b), n;
                },
            }
        );
    },
    function (e, t, n) {
        n(86)("asyncIterator");
    },
    function (e, t, n) {
        "use strict";
        var r = n(3),
            i = n(23),
            o = n(5),
            a = n(0),
            u = n(12),
            c = n(63).KEY,
            s = n(6),
            l = n(46),
            f = n(41),
            d = n(37),
            p = n(2),
            h = n(87),
            v = n(86),
            y = n(111),
            b = n(59),
            m = n(4),
            g = n(8),
            w = n(25),
            A = n(27),
            S = n(47),
            _ = n(38),
            I = n(48),
            x = n(112),
            k = n(66),
            P = n(64),
            O = n(7),
            E = n(29),
            j = k.f,
            T = O.f,
            R = x.f,
            z = r.Symbol,
            M = r.JSON,
            C = M && M.stringify,
            N = p("_hidden"),
            L = p("toPrimitive"),
            B = {}.propertyIsEnumerable,
            F = l("symbol-registry"),
            V = l("symbols"),
            D = l("op-symbols"),
            U = Object.prototype,
            G = "function" == typeof z && !!P.f,
            H = r.QObject,
            q = !H || !H.prototype || !H.prototype.findChild,
            $ =
                o &&
                s(function () {
                    return (
                        7 !=
                        I(
                            T({}, "a", {
                                get: function () {
                                    return T(this, "a", { value: 7 }).a;
                                },
                            })
                        ).a
                    );
                })
                    ? function (e, t, n) {
                          var r = j(U, t);
                          r && delete U[t], T(e, t, n), r && e !== U && T(U, t, r);
                      }
                    : T,
            W = function (e) {
                var t = (V[e] = I(z.prototype));
                return (t._k = e), t;
            },
            Q =
                G && "symbol" == typeof z.iterator
                    ? function (e) {
                          return "symbol" == typeof e;
                      }
                    : function (e) {
                          return e instanceof z;
                      },
            K = function (e, t, n) {
                return (
                    e === U && K(D, t, n),
                    m(e),
                    (t = S(t, !0)),
                    m(n),
                    i(V, t) ? (n.enumerable ? (i(e, N) && e[N][t] && (e[N][t] = !1), (n = I(n, { enumerable: _(0, !1) }))) : (i(e, N) || T(e, N, _(1, {})), (e[N][t] = !0)), $(e, t, n)) : T(e, t, n)
                );
            },
            J = function (e, t) {
                m(e);
                for (var n, r = y((t = A(t))), i = 0, o = r.length; o > i; ) K(e, (n = r[i++]), t[n]);
                return e;
            },
            Y = function (e) {
                var t = B.call(this, (e = S(e, !0)));
                return !(this === U && i(V, e) && !i(D, e)) && (!(t || !i(this, e) || !i(V, e) || (i(this, N) && this[N][e])) || t);
            },
            Z = function (e, t) {
                if (((e = A(e)), (t = S(t, !0)), e !== U || !i(V, t) || i(D, t))) {
                    var n = j(e, t);
                    return !n || !i(V, t) || (i(e, N) && e[N][t]) || (n.enumerable = !0), n;
                }
            },
            X = function (e) {
                for (var t, n = R(A(e)), r = [], o = 0; n.length > o; ) i(V, (t = n[o++])) || t == N || t == c || r.push(t);
                return r;
            },
            ee = function (e) {
                for (var t, n = e === U, r = R(n ? D : A(e)), o = [], a = 0; r.length > a; ) !i(V, (t = r[a++])) || (n && !i(U, t)) || o.push(V[t]);
                return o;
            };
        G ||
            (u(
                (z = function () {
                    if (this instanceof z) throw TypeError("Symbol is not a constructor!");
                    var e = d(arguments.length > 0 ? arguments[0] : void 0),
                        t = function (n) {
                            this === U && t.call(D, n), i(this, N) && i(this[N], e) && (this[N][e] = !1), $(this, e, _(1, n));
                        };
                    return o && q && $(U, e, { configurable: !0, set: t }), W(e);
                }).prototype,
                "toString",
                function () {
                    return this._k;
                }
            ),
            (k.f = Z),
            (O.f = K),
            (n(65).f = x.f = X),
            (n(42).f = Y),
            (P.f = ee),
            o && !n(36) && u(U, "propertyIsEnumerable", Y, !0),
            (h.f = function (e) {
                return W(p(e));
            })),
            a(a.G + a.W + a.F * !G, { Symbol: z });
        for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne; ) p(te[ne++]);
        for (var re = E(p.store), ie = 0; re.length > ie; ) v(re[ie++]);
        a(a.S + a.F * !G, "Symbol", {
            for: function (e) {
                return i(F, (e += "")) ? F[e] : (F[e] = z(e));
            },
            keyFor: function (e) {
                if (!Q(e)) throw TypeError(e + " is not a symbol!");
                for (var t in F) if (F[t] === e) return t;
            },
            useSetter: function () {
                q = !0;
            },
            useSimple: function () {
                q = !1;
            },
        }),
            a(a.S + a.F * !G, "Object", {
                create: function (e, t) {
                    return void 0 === t ? I(e) : J(I(e), t);
                },
                defineProperty: K,
                defineProperties: J,
                getOwnPropertyDescriptor: Z,
                getOwnPropertyNames: X,
                getOwnPropertySymbols: ee,
            });
        var oe = s(function () {
            P.f(1);
        });
        a(a.S + a.F * oe, "Object", {
            getOwnPropertySymbols: function (e) {
                return P.f(w(e));
            },
        }),
            M &&
                a(
                    a.S +
                        a.F *
                            (!G ||
                                s(function () {
                                    var e = z();
                                    return "[null]" != C([e]) || "{}" != C({ a: e }) || "{}" != C(Object(e));
                                })),
                    "JSON",
                    {
                        stringify: function (e) {
                            for (var t, n, r = [e], i = 1; arguments.length > i; ) r.push(arguments[i++]);
                            if (((n = t = r[1]), (g(t) || void 0 !== e) && !Q(e)))
                                return (
                                    b(t) ||
                                        (t = function (e, t) {
                                            if (("function" == typeof n && (t = n.call(this, e, t)), !Q(t))) return t;
                                        }),
                                    (r[1] = t),
                                    C.apply(M, r)
                                );
                        },
                    }
                ),
            z.prototype[L] || n(22)(z.prototype, L, z.prototype.valueOf),
            f(z, "Symbol"),
            f(Math, "Math", !0),
            f(r.JSON, "JSON", !0);
    },
    function (e, t, n) {
        var r = n(0);
        r(r.S, "Array", { isArray: n(59) });
    },
    function (e, t, n) {
        "use strict";
        n(117);
        var r = n(4),
            i = n(69),
            o = n(5),
            a = /./.toString,
            u = function (e) {
                n(12)(RegExp.prototype, "toString", e, !0);
            };
        n(6)(function () {
            return "/a/b" != a.call({ source: "a", flags: "b" });
        })
            ? u(function () {
                  var e = r(this);
                  return "/".concat(e.source, "/", "flags" in e ? e.flags : !o && e instanceof RegExp ? i.call(e) : void 0);
              })
            : "toString" != a.name &&
              u(function () {
                  return a.call(this);
              });
    },
    function (e, t, n) {
        var r = Date.prototype,
            i = r.toString,
            o = r.getTime;
        new Date(NaN) + "" != "Invalid Date" &&
            n(12)(r, "toString", function () {
                var e = o.call(this);
                return e == e ? i.call(this) : "Invalid Date";
            });
    },
    function (e, t, n) {
        "use strict";
        var r = n(45),
            i = n(80),
            o = n(39),
            a = n(27);
        (e.exports = n(55)(
            Array,
            "Array",
            function (e, t) {
                (this._t = a(e)), (this._i = 0), (this._k = t);
            },
            function () {
                var e = this._t,
                    t = this._k,
                    n = this._i++;
                return !e || n >= e.length ? ((this._t = void 0), i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
            },
            "values"
        )),
            (o.Arguments = o.Array),
            r("keys"),
            r("values"),
            r("entries");
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            i = n(32)(1);
        r(r.P + r.F * !n(33)([].map, !0), "Array", {
            map: function (e) {
                return i(this, e, arguments[1]);
            },
        });
    },
    function (e, t, n) {
        var r = n(7),
            i = n(38);
        e.exports = n(5)
            ? function (e, t, n) {
                  return r.f(e, t, i(1, n));
              }
            : function (e, t, n) {
                  return (e[t] = n), e;
              };
    },
    function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t);
        };
    },
    function (e, t, n) {
        var r = n(40);
        e.exports = function (e, t, n) {
            if ((r(e), void 0 === t)) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n);
                    };
                case 2:
                    return function (n, r) {
                        return e.call(t, n, r);
                    };
                case 3:
                    return function (n, r, i) {
                        return e.call(t, n, r, i);
                    };
            }
            return function () {
                return e.apply(t, arguments);
            };
        };
    },
    function (e, t, n) {
        var r = n(31);
        e.exports = function (e) {
            return Object(r(e));
        };
    },
    function (e, t) {
        var n = (e.exports = { version: "2.6.11" });
        "number" == typeof __e && (__e = n);
    },
    function (e, t, n) {
        var r = n(54),
            i = n(31);
        e.exports = function (e) {
            return r(i(e));
        };
    },
    function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1);
        };
    },
    function (e, t, n) {
        var r = n(81),
            i = n(58);
        e.exports =
            Object.keys ||
            function (e) {
                return r(e, i);
            };
    },
    function (e, t, n) {
        var r = n(49),
            i = Math.min;
        e.exports = function (e) {
            return e > 0 ? i(r(e), 9007199254740991) : 0;
        };
    },
    function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    },
    function (e, t, n) {
        var r = n(24),
            i = n(54),
            o = n(25),
            a = n(30),
            u = n(107);
        e.exports = function (e, t) {
            var n = 1 == e,
                c = 2 == e,
                s = 3 == e,
                l = 4 == e,
                f = 6 == e,
                d = 5 == e || f,
                p = t || u;
            return function (t, u, h) {
                for (var v, y, b = o(t), m = i(b), g = r(u, h, 3), w = a(m.length), A = 0, S = n ? p(t, w) : c ? p(t, 0) : void 0; w > A; A++)
                    if ((d || A in m) && ((y = g((v = m[A]), A, b)), e))
                        if (n) S[A] = y;
                        else if (y)
                            switch (e) {
                                case 3:
                                    return !0;
                                case 5:
                                    return v;
                                case 6:
                                    return A;
                                case 2:
                                    S.push(v);
                            }
                        else if (l) return !1;
                return f ? -1 : s || l ? l : S;
            };
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(6);
        e.exports = function (e, t) {
            return (
                !!e &&
                r(function () {
                    t ? e.call(null, function () {}, 1) : e.call(null);
                })
            );
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(88),
            i = n(4),
            o = n(89),
            a = n(67),
            u = n(30),
            c = n(50),
            s = n(68),
            l = n(6),
            f = Math.min,
            d = [].push,
            p = "length",
            h = !l(function () {
                RegExp(4294967295, "y");
            });
        n(51)("split", 2, function (e, t, n, l) {
            var v;
            return (
                (v =
                    "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p] || 2 != "ab".split(/(?:ab)*/)[p] || 4 != ".".split(/(.?)(.?)/)[p] || ".".split(/()()/)[p] > 1 || "".split(/.?/)[p]
                        ? function (e, t) {
                              var i = String(this);
                              if (void 0 === e && 0 === t) return [];
                              if (!r(e)) return n.call(i, e, t);
                              for (
                                  var o,
                                      a,
                                      u,
                                      c = [],
                                      l = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
                                      f = 0,
                                      h = void 0 === t ? 4294967295 : t >>> 0,
                                      v = new RegExp(e.source, l + "g");
                                  (o = s.call(v, i)) && !((a = v.lastIndex) > f && (c.push(i.slice(f, o.index)), o[p] > 1 && o.index < i[p] && d.apply(c, o.slice(1)), (u = o[0][p]), (f = a), c[p] >= h));

                              )
                                  v.lastIndex === o.index && v.lastIndex++;
                              return f === i[p] ? (!u && v.test("")) || c.push("") : c.push(i.slice(f)), c[p] > h ? c.slice(0, h) : c;
                          }
                        : "0".split(void 0, 0)[p]
                        ? function (e, t) {
                              return void 0 === e && 0 === t ? [] : n.call(this, e, t);
                          }
                        : n),
                [
                    function (n, r) {
                        var i = e(this),
                            o = null == n ? void 0 : n[t];
                        return void 0 !== o ? o.call(n, i, r) : v.call(String(i), n, r);
                    },
                    function (e, t) {
                        var r = l(v, e, this, t, v !== n);
                        if (r.done) return r.value;
                        var s = i(e),
                            d = String(this),
                            p = o(s, RegExp),
                            y = s.unicode,
                            b = (s.ignoreCase ? "i" : "") + (s.multiline ? "m" : "") + (s.unicode ? "u" : "") + (h ? "y" : "g"),
                            m = new p(h ? s : "^(?:" + s.source + ")", b),
                            g = void 0 === t ? 4294967295 : t >>> 0;
                        if (0 === g) return [];
                        if (0 === d.length) return null === c(m, d) ? [d] : [];
                        for (var w = 0, A = 0, S = []; A < d.length; ) {
                            m.lastIndex = h ? A : 0;
                            var _,
                                I = c(m, h ? d : d.slice(A));
                            if (null === I || (_ = f(u(m.lastIndex + (h ? 0 : A)), d.length)) === w) A = a(d, A, y);
                            else {
                                if ((S.push(d.slice(w, A)), S.length === g)) return S;
                                for (var x = 1; x <= I.length - 1; x++) if ((S.push(I[x]), S.length === g)) return S;
                                A = w = _;
                            }
                        }
                        return S.push(d.slice(w)), S;
                    },
                ]
            );
        });
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            i = n(32)(2);
        r(r.P + r.F * !n(33)([].filter, !0), "Array", {
            filter: function (e) {
                return i(this, e, arguments[1]);
            },
        });
    },
    function (e, t) {
        e.exports = !1;
    },
    function (e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36));
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
    },
    function (e, t) {
        e.exports = {};
    },
    function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e;
        };
    },
    function (e, t, n) {
        var r = n(7).f,
            i = n(23),
            o = n(2)("toStringTag");
        e.exports = function (e, t, n) {
            e && !i((e = n ? e : e.prototype), o) && r(e, o, { configurable: !0, value: t });
        };
    },
    function (e, t) {
        t.f = {}.propertyIsEnumerable;
    },
    function (e, t, n) {
        "use strict";
        var r = n(4),
            i = n(121),
            o = n(50);
        n(51)("search", 1, function (e, t, n, a) {
            return [
                function (n) {
                    var r = e(this),
                        i = null == n ? void 0 : n[t];
                    return void 0 !== i ? i.call(n, r) : new RegExp(n)[t](String(r));
                },
                function (e) {
                    var t = a(n, e, this);
                    if (t.done) return t.value;
                    var u = r(e),
                        c = String(this),
                        s = u.lastIndex;
                    i(s, 0) || (u.lastIndex = 0);
                    var l = o(u, c);
                    return i(u.lastIndex, s) || (u.lastIndex = s), null === l ? -1 : l.index;
                },
            ];
        });
    },
    function (e, t, n) {
        "use strict";
        var r,
            i,
            o,
            a,
            u = n(36),
            c = n(3),
            s = n(24),
            l = n(61),
            f = n(0),
            d = n(8),
            p = n(40),
            h = n(73),
            v = n(74),
            y = n(89),
            b = n(99).set,
            m = n(127)(),
            g = n(100),
            w = n(128),
            A = n(129),
            S = n(130),
            _ = c.TypeError,
            I = c.process,
            x = I && I.versions,
            k = (x && x.v8) || "",
            P = c.Promise,
            O = "process" == l(I),
            E = function () {},
            j = (i = g.f),
            T = !!(function () {
                try {
                    var e = P.resolve(1),
                        t = ((e.constructor = {})[n(2)("species")] = function (e) {
                            e(E, E);
                        });
                    return (O || "function" == typeof PromiseRejectionEvent) && e.then(E) instanceof t && 0 !== k.indexOf("6.6") && -1 === A.indexOf("Chrome/66");
                } catch (e) {}
            })(),
            R = function (e) {
                var t;
                return !(!d(e) || "function" != typeof (t = e.then)) && t;
            },
            z = function (e, t) {
                if (!e._n) {
                    e._n = !0;
                    var n = e._c;
                    m(function () {
                        for (
                            var r = e._v,
                                i = 1 == e._s,
                                o = 0,
                                a = function (t) {
                                    var n,
                                        o,
                                        a,
                                        u = i ? t.ok : t.fail,
                                        c = t.resolve,
                                        s = t.reject,
                                        l = t.domain;
                                    try {
                                        u
                                            ? (i || (2 == e._h && N(e), (e._h = 1)),
                                              !0 === u ? (n = r) : (l && l.enter(), (n = u(r)), l && (l.exit(), (a = !0))),
                                              n === t.promise ? s(_("Promise-chain cycle")) : (o = R(n)) ? o.call(n, c, s) : c(n))
                                            : s(r);
                                    } catch (e) {
                                        l && !a && l.exit(), s(e);
                                    }
                                };
                            n.length > o;

                        )
                            a(n[o++]);
                        (e._c = []), (e._n = !1), t && !e._h && M(e);
                    });
                }
            },
            M = function (e) {
                b.call(c, function () {
                    var t,
                        n,
                        r,
                        i = e._v,
                        o = C(e);
                    if (
                        (o &&
                            ((t = w(function () {
                                O ? I.emit("unhandledRejection", i, e) : (n = c.onunhandledrejection) ? n({ promise: e, reason: i }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", i);
                            })),
                            (e._h = O || C(e) ? 2 : 1)),
                        (e._a = void 0),
                        o && t.e)
                    )
                        throw t.v;
                });
            },
            C = function (e) {
                return 1 !== e._h && 0 === (e._a || e._c).length;
            },
            N = function (e) {
                b.call(c, function () {
                    var t;
                    O ? I.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({ promise: e, reason: e._v });
                });
            },
            L = function (e) {
                var t = this;
                t._d || ((t._d = !0), ((t = t._w || t)._v = e), (t._s = 2), t._a || (t._a = t._c.slice()), z(t, !0));
            },
            B = function (e) {
                var t,
                    n = this;
                if (!n._d) {
                    (n._d = !0), (n = n._w || n);
                    try {
                        if (n === e) throw _("Promise can't be resolved itself");
                        (t = R(e))
                            ? m(function () {
                                  var r = { _w: n, _d: !1 };
                                  try {
                                      t.call(e, s(B, r, 1), s(L, r, 1));
                                  } catch (e) {
                                      L.call(r, e);
                                  }
                              })
                            : ((n._v = e), (n._s = 1), z(n, !1));
                    } catch (e) {
                        L.call({ _w: n, _d: !1 }, e);
                    }
                }
            };
        T ||
            ((P = function (e) {
                h(this, P, "Promise", "_h"), p(e), r.call(this);
                try {
                    e(s(B, this, 1), s(L, this, 1));
                } catch (e) {
                    L.call(this, e);
                }
            }),
            ((r = function (e) {
                (this._c = []), (this._a = void 0), (this._s = 0), (this._d = !1), (this._v = void 0), (this._h = 0), (this._n = !1);
            }).prototype = n(72)(P.prototype, {
                then: function (e, t) {
                    var n = j(y(this, P));
                    return (n.ok = "function" != typeof e || e), (n.fail = "function" == typeof t && t), (n.domain = O ? I.domain : void 0), this._c.push(n), this._a && this._a.push(n), this._s && z(this, !1), n.promise;
                },
                catch: function (e) {
                    return this.then(void 0, e);
                },
            })),
            (o = function () {
                var e = new r();
                (this.promise = e), (this.resolve = s(B, e, 1)), (this.reject = s(L, e, 1));
            }),
            (g.f = j = function (e) {
                return e === P || e === a ? new o(e) : i(e);
            })),
            f(f.G + f.W + f.F * !T, { Promise: P }),
            n(41)(P, "Promise"),
            n(95)("Promise"),
            (a = n(26).Promise),
            f(f.S + f.F * !T, "Promise", {
                reject: function (e) {
                    var t = j(this);
                    return (0, t.reject)(e), t.promise;
                },
            }),
            f(f.S + f.F * (u || !T), "Promise", {
                resolve: function (e) {
                    return S(u && this === a ? P : this, e);
                },
            }),
            f(
                f.S +
                    f.F *
                        !(
                            T &&
                            n(62)(function (e) {
                                P.all(e).catch(E);
                            })
                        ),
                "Promise",
                {
                    all: function (e) {
                        var t = this,
                            n = j(t),
                            r = n.resolve,
                            i = n.reject,
                            o = w(function () {
                                var n = [],
                                    o = 0,
                                    a = 1;
                                v(e, !1, function (e) {
                                    var u = o++,
                                        c = !1;
                                    n.push(void 0),
                                        a++,
                                        t.resolve(e).then(function (e) {
                                            c || ((c = !0), (n[u] = e), --a || r(n));
                                        }, i);
                                }),
                                    --a || r(n);
                            });
                        return o.e && i(o.v), n.promise;
                    },
                    race: function (e) {
                        var t = this,
                            n = j(t),
                            r = n.reject,
                            i = w(function () {
                                v(e, !1, function (e) {
                                    t.resolve(e).then(n.resolve, r);
                                });
                            });
                        return i.e && r(i.v), n.promise;
                    },
                }
            );
    },
    function (e, t, n) {
        var r = n(2)("unscopables"),
            i = Array.prototype;
        null == i[r] && n(22)(i, r, {}),
            (e.exports = function (e) {
                i[r][e] = !0;
            });
    },
    function (e, t, n) {
        var r = n(26),
            i = n(3),
            o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (e.exports = function (e, t) {
            return o[e] || (o[e] = void 0 !== t ? t : {});
        })("versions", []).push({ version: r.version, mode: n(36) ? "pure" : "global", copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)" });
    },
    function (e, t, n) {
        var r = n(8);
        e.exports = function (e, t) {
            if (!r(e)) return e;
            var n, i;
            if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e)))) return i;
            if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e)))) return i;
            if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e)))) return i;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (e, t, n) {
        var r = n(4),
            i = n(104),
            o = n(58),
            a = n(57)("IE_PROTO"),
            u = function () {},
            c = function () {
                var e,
                    t = n(53)("iframe"),
                    r = o.length;
                for (t.style.display = "none", n(82).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object</script>"), e.close(), c = e.F; r--; ) delete c.prototype[o[r]];
                return c();
            };
        e.exports =
            Object.create ||
            function (e, t) {
                var n;
                return null !== e ? ((u.prototype = r(e)), (n = new u()), (u.prototype = null), (n[a] = e)) : (n = c()), void 0 === t ? n : i(n, t);
            };
    },
    function (e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function (e) {
            return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(61),
            i = RegExp.prototype.exec;
        e.exports = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var o = n.call(e, t);
                if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return o;
            }
            if ("RegExp" !== r(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return i.call(e, t);
        };
    },
    function (e, t, n) {
        "use strict";
        n(113);
        var r = n(12),
            i = n(22),
            o = n(6),
            a = n(31),
            u = n(2),
            c = n(68),
            s = u("species"),
            l = !o(function () {
                var e = /./;
                return (
                    (e.exec = function () {
                        var e = [];
                        return (e.groups = { a: "7" }), e;
                    }),
                    "7" !== "".replace(e, "$<a>")
                );
            }),
            f = (function () {
                var e = /(?:)/,
                    t = e.exec;
                e.exec = function () {
                    return t.apply(this, arguments);
                };
                var n = "ab".split(e);
                return 2 === n.length && "a" === n[0] && "b" === n[1];
            })();
        e.exports = function (e, t, n) {
            var d = u(e),
                p = !o(function () {
                    var t = {};
                    return (
                        (t[d] = function () {
                            return 7;
                        }),
                        7 != ""[e](t)
                    );
                }),
                h = p
                    ? !o(function () {
                          var t = !1,
                              n = /a/;
                          return (
                              (n.exec = function () {
                                  return (t = !0), null;
                              }),
                              "split" === e &&
                                  ((n.constructor = {}),
                                  (n.constructor[s] = function () {
                                      return n;
                                  })),
                              n[d](""),
                              !t
                          );
                      })
                    : void 0;
            if (!p || !h || ("replace" === e && !l) || ("split" === e && !f)) {
                var v = /./[d],
                    y = n(a, d, ""[e], function (e, t, n, r, i) {
                        return t.exec === c ? (p && !i ? { done: !0, value: v.call(t, n, r) } : { done: !0, value: e.call(n, t, r) }) : { done: !1 };
                    }),
                    b = y[0],
                    m = y[1];
                r(String.prototype, e, b),
                    i(
                        RegExp.prototype,
                        d,
                        2 == t
                            ? function (e, t) {
                                  return m.call(e, this, t);
                              }
                            : function (e) {
                                  return m.call(e, this);
                              }
                    );
            }
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            i = n(56)(!1),
            o = [].indexOf,
            a = !!o && 1 / [1].indexOf(1, -0) < 0;
        r(r.P + r.F * (a || !n(33)(o)), "Array", {
            indexOf: function (e) {
                return a ? o.apply(this, arguments) || 0 : i(this, e, arguments[1]);
            },
        });
    },
    function (e, t, n) {
        var r = n(8),
            i = n(3).document,
            o = r(i) && r(i.createElement);
        e.exports = function (e) {
            return o ? i.createElement(e) : {};
        };
    },
    function (e, t, n) {
        var r = n(28);
        e.exports = Object("z").propertyIsEnumerable(0)
            ? Object
            : function (e) {
                  return "String" == r(e) ? e.split("") : Object(e);
              };
    },
    function (e, t, n) {
        "use strict";
        var r = n(36),
            i = n(0),
            o = n(12),
            a = n(22),
            u = n(39),
            c = n(103),
            s = n(41),
            l = n(106),
            f = n(2)("iterator"),
            d = !([].keys && "next" in [].keys()),
            p = function () {
                return this;
            };
        e.exports = function (e, t, n, h, v, y, b) {
            c(n, t, h);
            var m,
                g,
                w,
                A = function (e) {
                    if (!d && e in x) return x[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, e);
                            };
                    }
                    return function () {
                        return new n(this, e);
                    };
                },
                S = t + " Iterator",
                _ = "values" == v,
                I = !1,
                x = e.prototype,
                k = x[f] || x["@@iterator"] || (v && x[v]),
                P = k || A(v),
                O = v ? (_ ? A("entries") : P) : void 0,
                E = ("Array" == t && x.entries) || k;
            if (
                (E && (w = l(E.call(new e()))) !== Object.prototype && w.next && (s(w, S, !0), r || "function" == typeof w[f] || a(w, f, p)),
                _ &&
                    k &&
                    "values" !== k.name &&
                    ((I = !0),
                    (P = function () {
                        return k.call(this);
                    })),
                (r && !b) || (!d && !I && x[f]) || a(x, f, P),
                (u[t] = P),
                (u[S] = p),
                v)
            )
                if (((m = { values: _ ? P : A("values"), keys: y ? P : A("keys"), entries: O }), b)) for (g in m) g in x || o(x, g, m[g]);
                else i(i.P + i.F * (d || I), t, m);
            return m;
        };
    },
    function (e, t, n) {
        var r = n(27),
            i = n(30),
            o = n(105);
        e.exports = function (e) {
            return function (t, n, a) {
                var u,
                    c = r(t),
                    s = i(c.length),
                    l = o(a, s);
                if (e && n != n) {
                    for (; s > l; ) if ((u = c[l++]) != u) return !0;
                } else for (; s > l; l++) if ((e || l in c) && c[l] === n) return e || l || 0;
                return !e && -1;
            };
        };
    },
    function (e, t, n) {
        var r = n(46)("keys"),
            i = n(37);
        e.exports = function (e) {
            return r[e] || (r[e] = i(e));
        };
    },
    function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    },
    function (e, t, n) {
        var r = n(28);
        e.exports =
            Array.isArray ||
            function (e) {
                return "Array" == r(e);
            };
    },
    function (e, t, n) {
        var r = n(25),
            i = n(29);
        n(109)("keys", function () {
            return function (e) {
                return i(r(e));
            };
        });
    },
    function (e, t, n) {
        var r = n(28),
            i = n(2)("toStringTag"),
            o =
                "Arguments" ==
                r(
                    (function () {
                        return arguments;
                    })()
                );
        e.exports = function (e) {
            var t, n, a;
            return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (n = (function (e, t) {
                      try {
                          return e[t];
                      } catch (e) {}
                  })((t = Object(e)), i))
                ? n
                : o
                ? r(t)
                : "Object" == (a = r(t)) && "function" == typeof t.callee
                ? "Arguments"
                : a;
        };
    },
    function (e, t, n) {
        var r = n(2)("iterator"),
            i = !1;
        try {
            var o = [7][r]();
            (o.return = function () {
                i = !0;
            }),
                Array.from(o, function () {
                    throw 2;
                });
        } catch (e) {}
        e.exports = function (e, t) {
            if (!t && !i) return !1;
            var n = !1;
            try {
                var o = [7],
                    a = o[r]();
                (a.next = function () {
                    return { done: (n = !0) };
                }),
                    (o[r] = function () {
                        return a;
                    }),
                    e(o);
            } catch (e) {}
            return n;
        };
    },
    function (e, t, n) {
        var r = n(37)("meta"),
            i = n(8),
            o = n(23),
            a = n(7).f,
            u = 0,
            c =
                Object.isExtensible ||
                function () {
                    return !0;
                },
            s = !n(6)(function () {
                return c(Object.preventExtensions({}));
            }),
            l = function (e) {
                a(e, r, { value: { i: "O" + ++u, w: {} } });
            },
            f = (e.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function (e, t) {
                    if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!o(e, r)) {
                        if (!c(e)) return "F";
                        if (!t) return "E";
                        l(e);
                    }
                    return e[r].i;
                },
                getWeak: function (e, t) {
                    if (!o(e, r)) {
                        if (!c(e)) return !0;
                        if (!t) return !1;
                        l(e);
                    }
                    return e[r].w;
                },
                onFreeze: function (e) {
                    return s && f.NEED && c(e) && !o(e, r) && l(e), e;
                },
            });
    },
    function (e, t) {
        t.f = Object.getOwnPropertySymbols;
    },
    function (e, t, n) {
        var r = n(81),
            i = n(58).concat("length", "prototype");
        t.f =
            Object.getOwnPropertyNames ||
            function (e) {
                return r(e, i);
            };
    },
    function (e, t, n) {
        var r = n(42),
            i = n(38),
            o = n(27),
            a = n(47),
            u = n(23),
            c = n(79),
            s = Object.getOwnPropertyDescriptor;
        t.f = n(5)
            ? s
            : function (e, t) {
                  if (((e = o(e)), (t = a(t, !0)), c))
                      try {
                          return s(e, t);
                      } catch (e) {}
                  if (u(e, t)) return i(!r.f.call(e, t), e[t]);
              };
    },
    function (e, t, n) {
        "use strict";
        var r = n(90)(!0);
        e.exports = function (e, t, n) {
            return t + (n ? r(e, t).length : 1);
        };
    },
    function (e, t, n) {
        "use strict";
        var r,
            i,
            o = n(69),
            a = RegExp.prototype.exec,
            u = String.prototype.replace,
            c = a,
            s = ((r = /a/), (i = /b*/g), a.call(r, "a"), a.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
            l = void 0 !== /()??/.exec("")[1];
        (s || l) &&
            (c = function (e) {
                var t,
                    n,
                    r,
                    i,
                    c = this;
                return (
                    l && (n = new RegExp("^" + c.source + "$(?!\\s)", o.call(c))),
                    s && (t = c.lastIndex),
                    (r = a.call(c, e)),
                    s && r && (c.lastIndex = c.global ? r.index + r[0].length : t),
                    l &&
                        r &&
                        r.length > 1 &&
                        u.call(r[0], n, function () {
                            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0);
                        }),
                    r
                );
            }),
            (e.exports = c);
    },
    function (e, t, n) {
        "use strict";
        var r = n(4);
        e.exports = function () {
            var e = r(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(3),
            i = n(23),
            o = n(28),
            a = n(91),
            u = n(47),
            c = n(6),
            s = n(65).f,
            l = n(66).f,
            f = n(7).f,
            d = n(92).trim,
            p = r.Number,
            h = p,
            v = p.prototype,
            y = "Number" == o(n(48)(v)),
            b = "trim" in String.prototype,
            m = function (e) {
                var t = u(e, !1);
                if ("string" == typeof t && t.length > 2) {
                    var n,
                        r,
                        i,
                        o = (t = b ? t.trim() : d(t, 3)).charCodeAt(0);
                    if (43 === o || 45 === o) {
                        if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN;
                    } else if (48 === o) {
                        switch (t.charCodeAt(1)) {
                            case 66:
                            case 98:
                                (r = 2), (i = 49);
                                break;
                            case 79:
                            case 111:
                                (r = 8), (i = 55);
                                break;
                            default:
                                return +t;
                        }
                        for (var a, c = t.slice(2), s = 0, l = c.length; s < l; s++) if ((a = c.charCodeAt(s)) < 48 || a > i) return NaN;
                        return parseInt(c, r);
                    }
                }
                return +t;
            };
        if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
            p = function (e) {
                var t = arguments.length < 1 ? 0 : e,
                    n = this;
                return n instanceof p &&
                    (y
                        ? c(function () {
                              v.valueOf.call(n);
                          })
                        : "Number" != o(n))
                    ? a(new h(m(t)), n, p)
                    : m(t);
            };
            for (
                var g, w = n(5) ? s(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), A = 0;
                w.length > A;
                A++
            )
                i(h, (g = w[A])) && !i(p, g) && f(p, g, l(h, g));
            (p.prototype = v), (v.constructor = p), n(12)(r, "Number", p);
        }
    },
    function (e, t, n) {
        var r = n(0);
        r(r.S + r.F, "Object", { assign: n(118) });
    },
    function (e, t, n) {
        var r = n(12);
        e.exports = function (e, t, n) {
            for (var i in t) r(e, i, t[i], n);
            return e;
        };
    },
    function (e, t) {
        e.exports = function (e, t, n, r) {
            if (!(e instanceof t) || (void 0 !== r && r in e)) throw TypeError(n + ": incorrect invocation!");
            return e;
        };
    },
    function (e, t, n) {
        var r = n(24),
            i = n(83),
            o = n(84),
            a = n(4),
            u = n(30),
            c = n(85),
            s = {},
            l = {};
        ((t = e.exports = function (e, t, n, f, d) {
            var p,
                h,
                v,
                y,
                b = d
                    ? function () {
                          return e;
                      }
                    : c(e),
                m = r(n, f, t ? 2 : 1),
                g = 0;
            if ("function" != typeof b) throw TypeError(e + " is not iterable!");
            if (o(b)) {
                for (p = u(e.length); p > g; g++) if ((y = t ? m(a((h = e[g]))[0], h[1]) : m(e[g])) === s || y === l) return y;
            } else for (v = b.call(e); !(h = v.next()).done; ) if ((y = i(v, m, h.value, t)) === s || y === l) return y;
        }).BREAK = s),
            (t.RETURN = l);
    },
    function (e, t, n) {
        var r = n(8);
        e.exports = function (e, t) {
            if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e;
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(94),
            i = n(75);
        e.exports = n(96)(
            "Map",
            function (e) {
                return function () {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            },
            {
                get: function (e) {
                    var t = r.getEntry(i(this, "Map"), e);
                    return t && t.v;
                },
                set: function (e, t) {
                    return r.def(i(this, "Map"), 0 === e ? 0 : e, t);
                },
            },
            r,
            !0
        );
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            i = n(40),
            o = n(25),
            a = n(6),
            u = [].sort,
            c = [1, 2, 3];
        r(
            r.P +
                r.F *
                    (a(function () {
                        c.sort(void 0);
                    }) ||
                        !a(function () {
                            c.sort(null);
                        }) ||
                        !n(33)(u)),
            "Array",
            {
                sort: function (e) {
                    return void 0 === e ? u.call(o(this)) : u.call(o(this), i(e));
                },
            }
        );
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            i = n(32)(5),
            o = !0;
        "find" in [] &&
            Array(1).find(function () {
                o = !1;
            }),
            r(r.P + r.F * o, "Array", {
                find: function (e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
                },
            }),
            n(45)("find");
    },
    function (e, t, n) {
        e.exports =
            !n(5) &&
            !n(6)(function () {
                return (
                    7 !=
                    Object.defineProperty(n(53)("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (e, t) {
        e.exports = function (e, t) {
            return { value: t, done: !!e };
        };
    },
    function (e, t, n) {
        var r = n(23),
            i = n(27),
            o = n(56)(!1),
            a = n(57)("IE_PROTO");
        e.exports = function (e, t) {
            var n,
                u = i(e),
                c = 0,
                s = [];
            for (n in u) n != a && r(u, n) && s.push(n);
            for (; t.length > c; ) r(u, (n = t[c++])) && (~o(s, n) || s.push(n));
            return s;
        };
    },
    function (e, t, n) {
        var r = n(3).document;
        e.exports = r && r.documentElement;
    },
    function (e, t, n) {
        var r = n(4);
        e.exports = function (e, t, n, i) {
            try {
                return i ? t(r(n)[0], n[1]) : t(n);
            } catch (t) {
                var o = e.return;
                throw (void 0 !== o && r(o.call(e)), t);
            }
        };
    },
    function (e, t, n) {
        var r = n(39),
            i = n(2)("iterator"),
            o = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (r.Array === e || o[i] === e);
        };
    },
    function (e, t, n) {
        var r = n(61),
            i = n(2)("iterator"),
            o = n(39);
        e.exports = n(26).getIteratorMethod = function (e) {
            if (null != e) return e[i] || e["@@iterator"] || o[r(e)];
        };
    },
    function (e, t, n) {
        var r = n(3),
            i = n(26),
            o = n(36),
            a = n(87),
            u = n(7).f;
        e.exports = function (e) {
            var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
            "_" == e.charAt(0) || e in t || u(t, e, { value: a.f(e) });
        };
    },
    function (e, t, n) {
        t.f = n(2);
    },
    function (e, t, n) {
        var r = n(8),
            i = n(28),
            o = n(2)("match");
        e.exports = function (e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
        };
    },
    function (e, t, n) {
        var r = n(4),
            i = n(40),
            o = n(2)("species");
        e.exports = function (e, t) {
            var n,
                a = r(e).constructor;
            return void 0 === a || null == (n = r(a)[o]) ? t : i(n);
        };
    },
    function (e, t, n) {
        var r = n(49),
            i = n(31);
        e.exports = function (e) {
            return function (t, n) {
                var o,
                    a,
                    u = String(i(t)),
                    c = r(n),
                    s = u.length;
                return c < 0 || c >= s
                    ? e
                        ? ""
                        : void 0
                    : (o = u.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === s || (a = u.charCodeAt(c + 1)) < 56320 || a > 57343
                    ? e
                        ? u.charAt(c)
                        : o
                    : e
                    ? u.slice(c, c + 2)
                    : a - 56320 + ((o - 55296) << 10) + 65536;
            };
        };
    },
    function (e, t, n) {
        var r = n(8),
            i = n(114).set;
        e.exports = function (e, t, n) {
            var o,
                a = t.constructor;
            return a !== n && "function" == typeof a && (o = a.prototype) !== n.prototype && r(o) && i && i(e, o), e;
        };
    },
    function (e, t, n) {
        var r = n(0),
            i = n(31),
            o = n(6),
            a = n(115),
            u = "[" + a + "]",
            c = RegExp("^" + u + u + "*"),
            s = RegExp(u + u + "*$"),
            l = function (e, t, n) {
                var i = {},
                    u = o(function () {
                        return !!a[e]() || "â€‹Â…" != "â€‹Â…"[e]();
                    }),
                    c = (i[e] = u ? t(f) : a[e]);
                n && (i[n] = c), r(r.P + r.F * u, "String", i);
            },
            f = (l.trim = function (e, t) {
                return (e = String(i(e))), 1 & t && (e = e.replace(c, "")), 2 & t && (e = e.replace(s, "")), e;
            });
        e.exports = l;
    },
    function (e, t, n) {
        var r = n(0),
            i = n(119)(!0);
        r(r.S, "Object", {
            entries: function (e) {
                return i(e);
            },
        });
    },
    function (e, t, n) {
        "use strict";
        var r = n(7).f,
            i = n(48),
            o = n(72),
            a = n(24),
            u = n(73),
            c = n(74),
            s = n(55),
            l = n(80),
            f = n(95),
            d = n(5),
            p = n(63).fastKey,
            h = n(75),
            v = d ? "_s" : "size",
            y = function (e, t) {
                var n,
                    r = p(t);
                if ("F" !== r) return e._i[r];
                for (n = e._f; n; n = n.n) if (n.k == t) return n;
            };
        e.exports = {
            getConstructor: function (e, t, n, s) {
                var l = e(function (e, r) {
                    u(e, l, t, "_i"), (e._t = t), (e._i = i(null)), (e._f = void 0), (e._l = void 0), (e[v] = 0), null != r && c(r, n, e[s], e);
                });
                return (
                    o(l.prototype, {
                        clear: function () {
                            for (var e = h(this, t), n = e._i, r = e._f; r; r = r.n) (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
                            (e._f = e._l = void 0), (e[v] = 0);
                        },
                        delete: function (e) {
                            var n = h(this, t),
                                r = y(n, e);
                            if (r) {
                                var i = r.n,
                                    o = r.p;
                                delete n._i[r.i], (r.r = !0), o && (o.n = i), i && (i.p = o), n._f == r && (n._f = i), n._l == r && (n._l = o), n[v]--;
                            }
                            return !!r;
                        },
                        forEach: function (e) {
                            h(this, t);
                            for (var n, r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); (n = n ? n.n : this._f); ) for (r(n.v, n.k, this); n && n.r; ) n = n.p;
                        },
                        has: function (e) {
                            return !!y(h(this, t), e);
                        },
                    }),
                    d &&
                        r(l.prototype, "size", {
                            get: function () {
                                return h(this, t)[v];
                            },
                        }),
                    l
                );
            },
            def: function (e, t, n) {
                var r,
                    i,
                    o = y(e, t);
                return o ? (o.v = n) : ((e._l = o = { i: (i = p(t, !0)), k: t, v: n, p: (r = e._l), n: void 0, r: !1 }), e._f || (e._f = o), r && (r.n = o), e[v]++, "F" !== i && (e._i[i] = o)), e;
            },
            getEntry: y,
            setStrong: function (e, t, n) {
                s(
                    e,
                    t,
                    function (e, n) {
                        (this._t = h(e, t)), (this._k = n), (this._l = void 0);
                    },
                    function () {
                        for (var e = this._k, t = this._l; t && t.r; ) t = t.p;
                        return this._t && (this._l = t = t ? t.n : this._t._f) ? l(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : ((this._t = void 0), l(1));
                    },
                    n ? "entries" : "values",
                    !n,
                    !0
                ),
                    f(t);
            },
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(3),
            i = n(7),
            o = n(5),
            a = n(2)("species");
        e.exports = function (e) {
            var t = r[e];
            o &&
                t &&
                !t[a] &&
                i.f(t, a, {
                    configurable: !0,
                    get: function () {
                        return this;
                    },
                });
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(3),
            i = n(0),
            o = n(12),
            a = n(72),
            u = n(63),
            c = n(74),
            s = n(73),
            l = n(8),
            f = n(6),
            d = n(62),
            p = n(41),
            h = n(91);
        e.exports = function (e, t, n, v, y, b) {
            var m = r[e],
                g = m,
                w = y ? "set" : "add",
                A = g && g.prototype,
                S = {},
                _ = function (e) {
                    var t = A[e];
                    o(
                        A,
                        e,
                        "delete" == e || "has" == e
                            ? function (e) {
                                  return !(b && !l(e)) && t.call(this, 0 === e ? 0 : e);
                              }
                            : "get" == e
                            ? function (e) {
                                  return b && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                              }
                            : "add" == e
                            ? function (e) {
                                  return t.call(this, 0 === e ? 0 : e), this;
                              }
                            : function (e, n) {
                                  return t.call(this, 0 === e ? 0 : e, n), this;
                              }
                    );
                };
            if (
                "function" == typeof g &&
                (b ||
                    (A.forEach &&
                        !f(function () {
                            new g().entries().next();
                        })))
            ) {
                var I = new g(),
                    x = I[w](b ? {} : -0, 1) != I,
                    k = f(function () {
                        I.has(1);
                    }),
                    P = d(function (e) {
                        new g(e);
                    }),
                    O =
                        !b &&
                        f(function () {
                            for (var e = new g(), t = 5; t--; ) e[w](t, t);
                            return !e.has(-0);
                        });
                P ||
                    (((g = t(function (t, n) {
                        s(t, g, e);
                        var r = h(new m(), t, g);
                        return null != n && c(n, y, r[w], r), r;
                    })).prototype = A),
                    (A.constructor = g)),
                    (k || O) && (_("delete"), _("has"), y && _("get")),
                    (O || x) && _(w),
                    b && A.clear && delete A.clear;
            } else (g = v.getConstructor(t, e, y, w)), a(g.prototype, n), (u.NEED = !0);
            return p(g, e), (S[e] = g), i(i.G + i.W + i.F * (g != m), S), b || v.setStrong(g, e, y), g;
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            i = n(32)(6),
            o = "findIndex",
            a = !0;
        o in [] &&
            Array(1)[o](function () {
                a = !1;
            }),
            r(r.P + r.F * a, "Array", {
                findIndex: function (e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
                },
            }),
            n(45)(o);
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            i = n(32)(3);
        r(r.P + r.F * !n(33)([].some, !0), "Array", {
            some: function (e) {
                return i(this, e, arguments[1]);
            },
        });
    },
    function (e, t, n) {
        var r,
            i,
            o,
            a = n(24),
            u = n(126),
            c = n(82),
            s = n(53),
            l = n(3),
            f = l.process,
            d = l.setImmediate,
            p = l.clearImmediate,
            h = l.MessageChannel,
            v = l.Dispatch,
            y = 0,
            b = {},
            m = function () {
                var e = +this;
                if (b.hasOwnProperty(e)) {
                    var t = b[e];
                    delete b[e], t();
                }
            },
            g = function (e) {
                m.call(e.data);
            };
        (d && p) ||
            ((d = function (e) {
                for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
                return (
                    (b[++y] = function () {
                        u("function" == typeof e ? e : Function(e), t);
                    }),
                    r(y),
                    y
                );
            }),
            (p = function (e) {
                delete b[e];
            }),
            "process" == n(28)(f)
                ? (r = function (e) {
                      f.nextTick(a(m, e, 1));
                  })
                : v && v.now
                ? (r = function (e) {
                      v.now(a(m, e, 1));
                  })
                : h
                ? ((o = (i = new h()).port2), (i.port1.onmessage = g), (r = a(o.postMessage, o, 1)))
                : l.addEventListener && "function" == typeof postMessage && !l.importScripts
                ? ((r = function (e) {
                      l.postMessage(e + "", "*");
                  }),
                  l.addEventListener("message", g, !1))
                : (r =
                      "onreadystatechange" in s("script")
                          ? function (e) {
                                c.appendChild(s("script")).onreadystatechange = function () {
                                    c.removeChild(this), m.call(e);
                                };
                            }
                          : function (e) {
                                setTimeout(a(m, e, 1), 0);
                            })),
            (e.exports = { set: d, clear: p });
    },
    function (e, t, n) {
        "use strict";
        var r = n(40);
        function i(e) {
            var t, n;
            (this.promise = new e(function (e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                (t = e), (n = r);
            })),
                (this.resolve = r(t)),
                (this.reject = r(n));
        }
        e.exports.f = function (e) {
            return new i(e);
        };
    },
    function (e, t, n) {
        "use strict";
        n(92)("trim", function (e) {
            return function () {
                return e(this, 3);
            };
        });
    },
    function (e, t, n) {
        e.exports = n(46)("native-function-to-string", Function.toString);
    },
    function (e, t, n) {
        "use strict";
        var r = n(48),
            i = n(38),
            o = n(41),
            a = {};
        n(22)(a, n(2)("iterator"), function () {
            return this;
        }),
            (e.exports = function (e, t, n) {
                (e.prototype = r(a, { next: i(1, n) })), o(e, t + " Iterator");
            });
    },
    function (e, t, n) {
        var r = n(7),
            i = n(4),
            o = n(29);
        e.exports = n(5)
            ? Object.defineProperties
            : function (e, t) {
                  i(e);
                  for (var n, a = o(t), u = a.length, c = 0; u > c; ) r.f(e, (n = a[c++]), t[n]);
                  return e;
              };
    },
    function (e, t, n) {
        var r = n(49),
            i = Math.max,
            o = Math.min;
        e.exports = function (e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t);
        };
    },
    function (e, t, n) {
        var r = n(23),
            i = n(25),
            o = n(57)("IE_PROTO"),
            a = Object.prototype;
        e.exports =
            Object.getPrototypeOf ||
            function (e) {
                return (e = i(e)), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null;
            };
    },
    function (e, t, n) {
        var r = n(108);
        e.exports = function (e, t) {
            return new (r(e))(t);
        };
    },
    function (e, t, n) {
        var r = n(8),
            i = n(59),
            o = n(2)("species");
        e.exports = function (e) {
            var t;
            return i(e) && ("function" != typeof (t = e.constructor) || (t !== Array && !i(t.prototype)) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t;
        };
    },
    function (e, t, n) {
        var r = n(0),
            i = n(26),
            o = n(6);
        e.exports = function (e, t) {
            var n = (i.Object || {})[e] || Object[e],
                a = {};
            (a[e] = t(n)),
                r(
                    r.S +
                        r.F *
                            o(function () {
                                n(1);
                            }),
                    "Object",
                    a
                );
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(7),
            i = n(38);
        e.exports = function (e, t, n) {
            t in e ? r.f(e, t, i(0, n)) : (e[t] = n);
        };
    },
    function (e, t, n) {
        var r = n(29),
            i = n(64),
            o = n(42);
        e.exports = function (e) {
            var t = r(e),
                n = i.f;
            if (n) for (var a, u = n(e), c = o.f, s = 0; u.length > s; ) c.call(e, (a = u[s++])) && t.push(a);
            return t;
        };
    },
    function (e, t, n) {
        var r = n(27),
            i = n(65).f,
            o = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function (e) {
            return a && "[object Window]" == o.call(e)
                ? (function (e) {
                      try {
                          return i(e);
                      } catch (e) {
                          return a.slice();
                      }
                  })(e)
                : i(r(e));
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(68);
        n(0)({ target: "RegExp", proto: !0, forced: r !== /./.exec }, { exec: r });
    },
    function (e, t, n) {
        var r = n(8),
            i = n(4),
            o = function (e, t) {
                if ((i(e), !r(t) && null !== t)) throw TypeError(t + ": can't set as prototype!");
            };
        e.exports = {
            set:
                Object.setPrototypeOf ||
                ("__proto__" in {}
                    ? (function (e, t, r) {
                          try {
                              (r = n(24)(Function.call, n(66).f(Object.prototype, "__proto__").set, 2))(e, []), (t = !(e instanceof Array));
                          } catch (e) {
                              t = !0;
                          }
                          return function (e, n) {
                              return o(e, n), t ? (e.__proto__ = n) : r(e, n), e;
                          };
                      })({}, !1)
                    : void 0),
            check: o,
        };
    },
    function (e, t) {
        e.exports = "\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff";
    },
    function (e, t, n) {
        "use strict";
        var r = n(4),
            i = n(30),
            o = n(67),
            a = n(50);
        n(51)("match", 1, function (e, t, n, u) {
            return [
                function (n) {
                    var r = e(this),
                        i = null == n ? void 0 : n[t];
                    return void 0 !== i ? i.call(n, r) : new RegExp(n)[t](String(r));
                },
                function (e) {
                    var t = u(n, e, this);
                    if (t.done) return t.value;
                    var c = r(e),
                        s = String(this);
                    if (!c.global) return a(c, s);
                    var l = c.unicode;
                    c.lastIndex = 0;
                    for (var f, d = [], p = 0; null !== (f = a(c, s)); ) {
                        var h = String(f[0]);
                        (d[p] = h), "" === h && (c.lastIndex = o(s, i(c.lastIndex), l)), p++;
                    }
                    return 0 === p ? null : d;
                },
            ];
        });
    },
    function (e, t, n) {
        n(5) && "g" != /./g.flags && n(7).f(RegExp.prototype, "flags", { configurable: !0, get: n(69) });
    },
    function (e, t, n) {
        "use strict";
        var r = n(5),
            i = n(29),
            o = n(64),
            a = n(42),
            u = n(25),
            c = n(54),
            s = Object.assign;
        e.exports =
            !s ||
            n(6)(function () {
                var e = {},
                    t = {},
                    n = Symbol(),
                    r = "abcdefghijklmnopqrst";
                return (
                    (e[n] = 7),
                    r.split("").forEach(function (e) {
                        t[e] = e;
                    }),
                    7 != s({}, e)[n] || Object.keys(s({}, t)).join("") != r
                );
            })
                ? function (e, t) {
                      for (var n = u(e), s = arguments.length, l = 1, f = o.f, d = a.f; s > l; )
                          for (var p, h = c(arguments[l++]), v = f ? i(h).concat(f(h)) : i(h), y = v.length, b = 0; y > b; ) (p = v[b++]), (r && !d.call(h, p)) || (n[p] = h[p]);
                      return n;
                  }
                : s;
    },
    function (e, t, n) {
        var r = n(5),
            i = n(29),
            o = n(27),
            a = n(42).f;
        e.exports = function (e) {
            return function (t) {
                for (var n, u = o(t), c = i(u), s = c.length, l = 0, f = []; s > l; ) (n = c[l++]), (r && !a.call(u, n)) || f.push(e ? [n, u[n]] : u[n]);
                return f;
            };
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(94),
            i = n(75);
        e.exports = n(96)(
            "Set",
            function (e) {
                return function () {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            },
            {
                add: function (e) {
                    return r.def(i(this, "Set"), (e = 0 === e ? 0 : e), e);
                },
            },
            r
        );
    },
    function (e, t) {
        e.exports =
            Object.is ||
            function (e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
            };
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            i = n(56)(!0);
        r(r.P, "Array", {
            includes: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
        }),
            n(45)("includes");
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            i = n(124);
        r(r.P + r.F * n(125)("includes"), "String", {
            includes: function (e) {
                return !!~i(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0);
            },
        });
    },
    function (e, t, n) {
        var r = n(88),
            i = n(31);
        e.exports = function (e, t, n) {
            if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(i(e));
        };
    },
    function (e, t, n) {
        var r = n(2)("match");
        e.exports = function (e) {
            var t = /./;
            try {
                "/./"[e](t);
            } catch (n) {
                try {
                    return (t[r] = !1), !"/./"[e](t);
                } catch (e) {}
            }
            return !0;
        };
    },
    function (e, t) {
        e.exports = function (e, t, n) {
            var r = void 0 === n;
            switch (t.length) {
                case 0:
                    return r ? e() : e.call(n);
                case 1:
                    return r ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
            }
            return e.apply(n, t);
        };
    },
    function (e, t, n) {
        var r = n(3),
            i = n(99).set,
            o = r.MutationObserver || r.WebKitMutationObserver,
            a = r.process,
            u = r.Promise,
            c = "process" == n(28)(a);
        e.exports = function () {
            var e,
                t,
                n,
                s = function () {
                    var r, i;
                    for (c && (r = a.domain) && r.exit(); e; ) {
                        (i = e.fn), (e = e.next);
                        try {
                            i();
                        } catch (r) {
                            throw (e ? n() : (t = void 0), r);
                        }
                    }
                    (t = void 0), r && r.enter();
                };
            if (c)
                n = function () {
                    a.nextTick(s);
                };
            else if (!o || (r.navigator && r.navigator.standalone))
                if (u && u.resolve) {
                    var l = u.resolve(void 0);
                    n = function () {
                        l.then(s);
                    };
                } else
                    n = function () {
                        i.call(r, s);
                    };
            else {
                var f = !0,
                    d = document.createTextNode("");
                new o(s).observe(d, { characterData: !0 }),
                    (n = function () {
                        d.data = f = !f;
                    });
            }
            return function (r) {
                var i = { fn: r, next: void 0 };
                t && (t.next = i), e || ((e = i), n()), (t = i);
            };
        };
    },
    function (e, t) {
        e.exports = function (e) {
            try {
                return { e: !1, v: e() };
            } catch (e) {
                return { e: !0, v: e };
            }
        };
    },
    function (e, t, n) {
        var r = n(3).navigator;
        e.exports = (r && r.userAgent) || "";
    },
    function (e, t, n) {
        var r = n(4),
            i = n(8),
            o = n(100);
        e.exports = function (e, t) {
            if ((r(e), i(t) && t.constructor === e)) return t;
            var n = o.f(e);
            return (0, n.resolve)(t), n.promise;
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(4),
            i = n(25),
            o = n(30),
            a = n(49),
            u = n(67),
            c = n(50),
            s = Math.max,
            l = Math.min,
            f = Math.floor,
            d = /\$([$&`']|\d\d?|<[^>]*>)/g,
            p = /\$([$&`']|\d\d?)/g;
        n(51)("replace", 2, function (e, t, n, h) {
            return [
                function (r, i) {
                    var o = e(this),
                        a = null == r ? void 0 : r[t];
                    return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i);
                },
                function (e, t) {
                    var i = h(n, e, this, t);
                    if (i.done) return i.value;
                    var f = r(e),
                        d = String(this),
                        p = "function" == typeof t;
                    p || (t = String(t));
                    var y = f.global;
                    if (y) {
                        var b = f.unicode;
                        f.lastIndex = 0;
                    }
                    for (var m = []; ; ) {
                        var g = c(f, d);
                        if (null === g) break;
                        if ((m.push(g), !y)) break;
                        "" === String(g[0]) && (f.lastIndex = u(d, o(f.lastIndex), b));
                    }
                    for (var w, A = "", S = 0, _ = 0; _ < m.length; _++) {
                        g = m[_];
                        for (var I = String(g[0]), x = s(l(a(g.index), d.length), 0), k = [], P = 1; P < g.length; P++) k.push(void 0 === (w = g[P]) ? w : String(w));
                        var O = g.groups;
                        if (p) {
                            var E = [I].concat(k, x, d);
                            void 0 !== O && E.push(O);
                            var j = String(t.apply(void 0, E));
                        } else j = v(I, d, x, k, O, t);
                        x >= S && ((A += d.slice(S, x) + j), (S = x + I.length));
                    }
                    return A + d.slice(S);
                },
            ];
            function v(e, t, r, o, a, u) {
                var c = r + e.length,
                    s = o.length,
                    l = p;
                return (
                    void 0 !== a && ((a = i(a)), (l = d)),
                    n.call(u, l, function (n, i) {
                        var u;
                        switch (i.charAt(0)) {
                            case "$":
                                return "$";
                            case "&":
                                return e;
                            case "`":
                                return t.slice(0, r);
                            case "'":
                                return t.slice(c);
                            case "<":
                                u = a[i.slice(1, -1)];
                                break;
                            default:
                                var l = +i;
                                if (0 === l) return n;
                                if (l > s) {
                                    var d = f(l / 10);
                                    return 0 === d ? n : d <= s ? (void 0 === o[d - 1] ? i.charAt(1) : o[d - 1] + i.charAt(1)) : n;
                                }
                                u = o[l - 1];
                        }
                        return void 0 === u ? "" : u;
                    })
                );
            }
        });
    },
    function (e, t, n) {
        "use strict";
        n.r(t);
        var r = {};
        n.r(r),
            n.d(r, "dfpNetworkId", function () {
                return P;
            });
        n(9), n(13), n(60), n(14), n(10), n(15), n(16), n(1), n(34), n(70), n(116), n(17), n(18), n(19), n(71), n(93), n(35), n(120), n(20), n(11), n(76), n(43), n(52);
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var o = (function () {
            function e(t) {
                var n = t.disablePush,
                    r = t.disableRefresh,
                    i = t.name,
                    o = t.params;
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.disablePush = n),
                    (this.disableRefresh = r),
                    (this.name = i),
                    (this.params = o);
            }
            var t, n, r;
            return (
                (t = e),
                (r = [
                    {
                        key: "fromConfig",
                        value: function (e) {
                            return new this({ disablePush: e.disable_push, disableRefresh: e.disable_refresh, name: e.name, params: e.params });
                        },
                    },
                    {
                        key: "getSizeSpecificBidders",
                        value: function () {
                            return ["buysellads", "coinzilla", "openx", "sovrn"];
                        },
                    },
                ]),
                (n = [
                    {
                        key: "forPrebid",
                        value: function () {
                            return { bidder: this.name, params: this.params };
                        },
                    },
                    {
                        key: "isValidByRefreshStatus",
                        value: function (e) {
                            return (e && !this.disableRefresh) || (!e && !this.disablePush);
                        },
                    },
                ]) && i(t.prototype, n),
                r && i(t, r),
                e
            );
        })();
        n(21), n(97), n(98), n(77);
        function a(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == u.return || u.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                u(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function u(e, t) {
            if (e) {
                if ("string" == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0;
            }
        }
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var l = (function () {
            function e() {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e);
            }
            var t, n, r;
            return (
                (t = e),
                (r = [
                    {
                        key: "get",
                        value: function (e) {
                            var t,
                                n = (function (e) {
                                    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                        if (Array.isArray(e) || (e = u(e))) {
                                            var t = 0,
                                                n = function () {};
                                            return {
                                                s: n,
                                                n: function () {
                                                    return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
                                                },
                                                e: function (e) {
                                                    throw e;
                                                },
                                                f: n,
                                            };
                                        }
                                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                    }
                                    var r,
                                        i,
                                        o = !0,
                                        a = !1;
                                    return {
                                        s: function () {
                                            r = e[Symbol.iterator]();
                                        },
                                        n: function () {
                                            var e = r.next();
                                            return (o = e.done), e;
                                        },
                                        e: function (e) {
                                            (a = !0), (i = e);
                                        },
                                        f: function () {
                                            try {
                                                o || null == r.return || r.return();
                                            } finally {
                                                if (a) throw i;
                                            }
                                        },
                                    };
                                })(document.cookie.split(";"));
                            try {
                                for (n.s(); !(t = n.n()).done; ) {
                                    var r = a(t.value.split("="), 2),
                                        i = r[0],
                                        o = r[1];
                                    if (i === e) return o;
                                }
                            } catch (e) {
                                n.e(e);
                            } finally {
                                n.f();
                            }
                            return "";
                        },
                    },
                    {
                        key: "set",
                        value: function (e, t, n) {
                            var r = new Date();
                            r.setTime(r.getTime() + n), r.toUTCString(), (document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(r, "; path=/"));
                        },
                    },
                ]),
                (n = null) && s(t.prototype, n),
                r && s(t, r),
                e
            );
        })();
        function f(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var d,
            p,
            h,
            v,
            y,
            b,
            m = document.hidden || !0,
            g =
                ((d = "DOMContentLoaded"),
                (p = []),
                (h = document),
                (v = h && h.documentElement.doScroll),
                (y = h && (v ? /^loaded|^c/ : /^loaded|^i|^c/).test(h.readyState)),
                (b = void 0),
                !y &&
                    h &&
                    h.addEventListener(
                        d,
                        (b = function () {
                            for (h.removeEventListener(d, b), y = !0; (b = p.shift()); ) b();
                        })
                    ),
                function (e) {
                    return y ? setTimeout(e, 0) : p.push(e);
                }),
            w = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e);
                }
                var t, n, r;
                return (
                    (t = e),
                    (r = [
                        {
                            key: "Visible",
                            value: function () {
                                return m;
                            },
                        },
                        {
                            key: "Ready",
                            value: function (e) {
                                g(e);
                            },
                        },
                        {
                            key: "addExtraCss",
                            value: function (e) {
                                var t = document.createElement("style");
                                (t.innerHTML = e), document.getElementsByTagName("head")[0].appendChild(t);
                            },
                        },
                    ]),
                    (n = null) && f(t.prototype, n),
                    r && f(t, r),
                    e
                );
            })();
        document.addEventListener(
            "visibilitychange",
            function () {
                m = !document.hidden;
            },
            !1
        );
        var A = w;
        function S(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var _ = (function () {
            function e() {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e);
            }
            var t, n, r;
            return (
                (t = e),
                (r = [
                    {
                        key: "GetSize",
                        value: function () {
                            return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight];
                        },
                    },
                ]),
                (n = null) && S(t.prototype, n),
                r && S(t, r),
                e
            );
        })();
        n(122), n(123);
        function I(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var x,
            k = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e);
                }
                var t, n, r;
                return (
                    (t = e),
                    (r = [
                        {
                            key: "Unique",
                            value: function (e) {
                                return e.filter(function (e, t, n) {
                                    return n.indexOf(e) == t;
                                });
                            },
                        },
                        {
                            key: "Intersect",
                            value: function (e, t) {
                                return e.filter(function (e) {
                                    return t.includes(e);
                                });
                            },
                        },
                    ]),
                    (n = null) && I(t.prototype, n),
                    r && I(t, r),
                    e
                );
            })(),
            P = 8691100;
        n(78), n(44), n(101);
        function O(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == u.return || u.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                j(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function E(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return T(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                j(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function j(e, t) {
            if (e) {
                if ("string" == typeof e) return T(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e, t) : void 0;
            }
        }
        function T(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function R(e) {
            return (R =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function z(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function M(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        function C(e, t, n) {
            return t && M(e.prototype, t), n && M(e, n), e;
        }
        var N,
            L,
            B,
            F = !1,
            V = (function () {
                function e() {
                    z(this, e);
                }
                return (
                    C(e, null, [
                        {
                            key: "init",
                            value: function (e) {
                                this._initMessageHandler(e), e.setParentViewportSize(this._getOriginalParentViewportSize());
                            },
                        },
                        {
                            key: "isIn",
                            value: function () {
                                return window.location.search.indexOf("acceptable_ad_iframe") > 0;
                            },
                        },
                        {
                            key: "postAdSizeChangedMessage",
                            value: function (e, t) {
                                var n = Array.isArray(t) ? { type: "setSize", payload: { placementId: e, size: t } } : { type: "hide", payload: { placementId: e } };
                                window.parent.postMessage(n, "*");
                            },
                        },
                        {
                            key: "postIframeLoadedMessage",
                            value: function (e) {
                                window.parent.postMessage({ type: "iframeLoaded", payload: { placementId: e } }, "*");
                            },
                        },
                        {
                            key: "_getOriginalParentViewportSize",
                            value: function () {
                                var e = new URLSearchParams(window.location.search).get("original_parent_viewport_size");
                                return e && e.split("x").map(Number);
                            },
                        },
                        {
                            key: "_initMessageHandler",
                            value: function (e) {
                                window.addEventListener("message", function (t) {
                                    var n = t.data;
                                    if ("object" === R(n) && n.hasOwnProperty("type"))
                                        if ("push" === n.type) {
                                            var r,
                                                i = n.customTargetingArray,
                                                o = n.isViewable;
                                            (E(e.getPlacements()).pop().pop().viewable = o), (r = e.customTargeting).push.apply(r, E(i)), e.pushAll();
                                        } else if ("refresh" === n.type) {
                                            var a,
                                                u = n.customTargetingArray,
                                                c = n.isViewable;
                                            (E(e.getPlacements()).pop().pop().viewable = c), (a = e.customTargeting).push.apply(a, E(u)), e.refreshAll();
                                        } else if ("object" === R(n.payload) && "setParentViewportSize" === n.type) {
                                            var s = n.payload.size;
                                            Array.isArray(s) &&
                                                s.length >= 2 &&
                                                s.slice(0, 2).every(function (e) {
                                                    return !isNaN(parseFloat(e)) && isFinite(e);
                                                }) &&
                                                e.setParentViewportSize(s.slice(0, 2).map(Number));
                                        }
                                });
                            },
                        },
                    ]),
                    e
                );
            })(),
            D = (function () {
                function e() {
                    z(this, e);
                }
                return (
                    C(e, null, [
                        {
                            key: "init",
                            value: function (e) {
                                var t = this;
                                e.placements.forEach(function (n, r) {
                                    var i = n.acceptable,
                                        o = document.querySelector("[id=".concat(r, "]"));
                                    o && (i ? (o.classList.add("bsa-zone_acceptable", "hidden_acceptable"), (o.dataset.delegatedAcceptableAd = ""), t._initIframe(e, o)) : ((o.style.display = "none"), (o.dataset.explicitlyHidden = "")));
                                });
                                var n = document.createElement("style");
                                (n.innerHTML = '\n.bsa-zone_acceptable:not(.hidden_acceptable):after {\n\ttext-align: center;\n\tcontent: "~ advertisement ~";\n\tfont-size: 9px;\n\tfont-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;\n\tletter-spacing: .5px;\n\tdisplay: block;\n\tpadding: 5px 0;\n\ttext-transform: uppercase;\n\tcolor: #6a6a6a;\n}\n\n.bsa-zone_acceptable.hidden_acceptable {\n\tvisibility: hidden;\n}\n'
                                    .trim()
                                    .split("\n")
                                    .map(function (e) {
                                        return e.trim();
                                    })
                                    .join("")),
                                    document.getElementsByTagName("head")[0].appendChild(n),
                                    this._initSetParentViewportSizeMessager(e);
                            },
                        },
                        {
                            key: "postAdLoadMessages",
                            value: function (e, t, n) {
                                var r = this,
                                    i = t ? "refresh" : "push",
                                    o = n.getTargetingArray();
                                e.forEach(function (e) {
                                    var t = O(e, 2),
                                        n = t[0],
                                        a = t[1],
                                        u = { type: i, customTargetingArray: o, isViewable: a.viewable };
                                    r._postMessageToIframeById(n, u);
                                });
                            },
                        },
                        {
                            key: "_postSetParentViewportSizeMessages",
                            value: function (e, t) {
                                var n = this,
                                    r = { type: "setParentViewportSize", payload: { size: t } };
                                e.forEach(function (e) {
                                    return n._postMessageToIframeById(e, r);
                                });
                            },
                        },
                        {
                            key: "_postMessageToIframeById",
                            value: function (e, t) {
                                this._onIframeLoad(document.querySelector("[id=".concat(e, "] > iframe")), e).then(function (e) {
                                    return e.postMessage(t, x);
                                });
                            },
                        },
                        {
                            key: "_onIframeLoad",
                            value: function (e, t) {
                                var n = this;
                                return new Promise(function (r) {
                                    var i = e.contentWindow;
                                    !(function e() {
                                        n._loadedIframes.has(t) ? r(i) : setTimeout(e, 100);
                                    })();
                                });
                            },
                        },
                        {
                            key: "_initSetParentViewportSizeMessager",
                            value: function (e) {
                                var t = this;
                                setInterval(function () {
                                    var n = E(e.placements.keys()).filter(function (e) {
                                        var t = document.querySelector("[id=".concat(e, "]"));
                                        return t && !("explicitlyHidden" in t.dataset) && "delegatedAcceptableAd" in t.dataset;
                                    });
                                    t._postSetParentViewportSizeMessages(n, _.GetSize());
                                }, 1e3);
                            },
                        },
                        {
                            key: "_initIframe",
                            value: function (e, t) {
                                var n = document.createElement("iframe");
                                (n.onload = function () {
                                    return V.postIframeLoadedMessage(r);
                                }),
                                    (n.width = 1),
                                    (n.height = 1),
                                    (n.frameBorder = "0"),
                                    (n.scrolling = "no");
                                var r = t.id,
                                    i = new URLSearchParams();
                                i.set("acceptable_ad_iframe", ""),
                                    i.set("original_parent_viewport_size", _.GetSize().join("x")),
                                    i.set("account", e.publisher),
                                    i.set("adunit", r),
                                    e.debug && i.set("bsadebug", ""),
                                    (n.src = "".concat(x, "/acceptable.html?").concat(i.toString())),
                                    t.appendChild(n),
                                    this._initMessageHandler(t, n, r);
                            },
                        },
                        {
                            key: "_initMessageHandler",
                            value: function (e, t, n) {
                                var r = this;
                                window.addEventListener("message", function (i) {
                                    var o = i.data;
                                    if ("object" === R(o) && o.hasOwnProperty("payload") && "object" === R(o.payload) && o.payload.hasOwnProperty("placementId") && o.payload.placementId === n) {
                                        var a = o.type,
                                            u = o.payload;
                                        if ("setSize" === a) {
                                            var c = u.size;
                                            if (
                                                !Array.isArray(c) ||
                                                c.length < 2 ||
                                                !c.slice(0, 2).every(function (e) {
                                                    return !isNaN(parseFloat(e)) && isFinite(e);
                                                })
                                            )
                                                throw new Error("Invalid message from acceptable ad iframe: payload.size must be an array of at least 2 numbers. Given: " + ("object" === R(c) ? JSON.stringify(c) : "" + c));
                                            var s = O(c.slice(0, 2).map(Number), 2),
                                                l = s[0],
                                                f = s[1];
                                            (t.width = l), (t.height = f), (e.style.width = "".concat(l, "px")), e.classList.remove("hidden_acceptable");
                                        } else "hide" === a ? e.classList.add("hidden_acceptable") : "iframeLoaded" === a && r._loadedIframes.set(n, t);
                                    }
                                });
                            },
                        },
                    ]),
                    e
                );
            })();
        (N = D), (L = "_loadedIframes"), (B = new Map()), L in N ? Object.defineProperty(N, L, { value: B, enumerable: !0, configurable: !0, writable: !0 }) : (N[L] = B);
        var U = (function () {
            function e() {
                z(this, e);
            }
            return (
                C(e, null, [
                    {
                        key: "setAcceptableOrigin",
                        value: function (e) {
                            F || ((x = e), (F = !0));
                        },
                    },
                ]),
                e
            );
        })();
        function G(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var H = window.location.search.indexOf("bsadebug") > 0 || !1,
            q = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e);
                }
                var t, n, r;
                return (
                    (t = e),
                    (r = [
                        {
                            key: "enable",
                            value: function () {
                                H = !0;
                            },
                        },
                        {
                            key: "log",
                            value: function () {
                                if (H) {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    t.unshift("%c BSAOptimize/Headerbid", "background: red; color: white; display: block"), console.log.apply(console, t);
                                }
                            },
                        },
                        {
                            key: "table",
                            value: function () {
                                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                if (H)
                                    if ((e.log(), console.table)) console.table.apply(console, n);
                                    else for (var i = 0; i < arguments.length; i++) e.log(arguments[i]);
                            },
                        },
                    ]),
                    (n = null) && G(t.prototype, n),
                    r && G(t, r),
                    e
                );
            })();
        function $(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var W = 5e3,
            Q = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e);
                }
                var t, n, r;
                return (
                    (t = e),
                    (r = [
                        {
                            key: "SetTimeout",
                            value: function (e) {
                                W = e;
                            },
                        },
                        {
                            key: "GPT",
                            value: function (e) {
                                return new Promise(function (t, n) {
                                    window.googletag.cmd.push(function () {
                                        e && e(window.googletag), t();
                                    });
                                });
                            },
                        },
                        {
                            key: "Prebid",
                            value: function (e) {
                                var t = new Promise(function (t, n) {
                                    window.pbjs.cmd.push(function () {
                                        e && e(window.pbjs), t();
                                    });
                                });
                                return Promise.race([t, le.Deadline(W)]);
                            },
                        },
                        {
                            key: "APS",
                            value: function (e) {
                                return new Promise(function (t, n) {
                                    e && e(window.apstag), t();
                                });
                            },
                        },
                    ]),
                    (n = null) && $(t.prototype, n),
                    r && $(t, r),
                    e
                );
            })();
        function K(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return J(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return J(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return J(e, t);
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function J(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function Y(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var Z = (function () {
            function e(t) {
                var n = t.getPlacements;
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this._enabled = !1),
                    (this._getPlacements = n);
            }
            var t, n, r;
            return (
                (t = e),
                (n = [
                    {
                        key: "enable",
                        value: function () {
                            this._enabled || ((this._enabled = !0), q.enable(), this._setupGPTDebugging(), this._setupPrebidDebugging());
                        },
                    },
                    {
                        key: "logPrebidBidData",
                        value: function () {
                            var e = this;
                            Q.Prebid(function (t) {
                                var n = t.getBidResponses(),
                                    r = t.getNoBids(),
                                    i = t.getAllWinningBids(),
                                    o = e._getPlacements(),
                                    a = [];
                                Object.keys(n).forEach(function (e) {
                                    var t = n[e],
                                        r = o.get(e);
                                    t &&
                                        t.bids.forEach(function (e) {
                                            a.push({
                                                bid: e,
                                                adUnitName: void 0 !== r ? r.getName() : void 0,
                                                adId: e.adId,
                                                bidder: e.bidder,
                                                time: e.timeToRespond,
                                                cpm: e.cpm,
                                                message: e.statusMessage,
                                                ad: e.ad,
                                                rendered: !!i.find(function (t) {
                                                    return t.adId == e.adId;
                                                }),
                                            });
                                        });
                                }),
                                    Object.keys(r).forEach(function (e) {
                                        var t = r[e],
                                            n = o.get(e);
                                        t &&
                                            t.bids.forEach(function (e) {
                                                a.push({ message: "no bid", adUnitName: void 0 !== n ? n.getName() : void 0, adId: e.bidId, bidder: e.bidder });
                                            });
                                    }),
                                    a.length ? q.table(a) : q.log("No bid data!");
                            });
                        },
                    },
                    {
                        key: "_setupGPTDebugging",
                        value: function () {
                            Q.GPT(function (e) {
                                new URLSearchParams(window.location.search).has("no_gpt_console") || V.isIn() || e.openConsole();
                            });
                        },
                    },
                    {
                        key: "_setupPrebidDebugging",
                        value: function () {
                            var e = new URLSearchParams(window.location.search),
                                t = {
                                    debugging: { enabled: !0 },
                                    userSync: { filterSettings: { iframe: { bidders: "*", filter: "include" }, image: { bidders: "*", filter: "include" } }, syncEnabled: !0, iframeEnabled: !0, syncsPerBidder: 8, syncDelay: 3e3 },
                                };
                            if (e.get("cpm")) {
                                var n = e.get("cpm");
                                (t.debugging.bids = [{ cpm: n }]), q.log("setting forced Prebid CPM", n);
                            }
                            this._setPrebidConfig(t), this._addPrebidEventListeners();
                        },
                    },
                    {
                        key: "_setPrebidConfig",
                        value: function (e) {
                            Q.Prebid(function (t) {
                                return t.setConfig(e);
                            });
                        },
                    },
                    {
                        key: "_addPrebidEventListeners",
                        value: function () {
                            var e = this;
                            this._addPrebidEventLogger("requestBids", "(Prebid) requestBids fired"),
                                this._addPrebidEventLogger("bidWon", "(Prebid) bidder won", function (t) {
                                    return e._prebidAdUnitInfoMapper(t);
                                }),
                                this._addPrebidEventLogger("bidResponse", "(Prebid) bidder responded", function (t) {
                                    return e._prebidAdUnitInfoMapper(t);
                                }),
                                this._addPrebidEventLogger("bidTimeout", "(Prebid) bidder timed out", function (t) {
                                    return e._prebidAdUnitInfoMapper(t);
                                }),
                                this._addPrebidEventLogger("bidRequested", "(Prebid) bids requested", function (t) {
                                    return e._prebidBidderInfoMapper(t);
                                });
                        },
                    },
                    {
                        key: "_addPrebidEventLogger",
                        value: function (e, t) {
                            var n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : function (e) {
                                          return [e];
                                      };
                            Q.Prebid(function (r) {
                                return r.onEvent(e, function (e) {
                                    return q.log.apply(q, ["".concat(t, ":")].concat(K(n(e))));
                                });
                            });
                        },
                    },
                    {
                        key: "_prebidAdUnitInfoMapper",
                        value: function (e) {
                            var t = Object.assign({}, e),
                                n = this._getPlacements(),
                                r = e.adUnitCode,
                                i = n.get(r);
                            return void 0 !== i && (t.adUnitName = i.getName()), [t.adUnitName, t];
                        },
                    },
                    {
                        key: "_prebidBidderInfoMapper",
                        value: function (e) {
                            var t = Object.assign({}, e),
                                n = this._getPlacements();
                            return (
                                t.bids.forEach(function (e) {
                                    var t = e.adUnitCode,
                                        r = n.get(t);
                                    void 0 !== r && (e.adUnitName = r.getName());
                                }),
                                [
                                    t.bids.map(function (e) {
                                        return e.adUnitName;
                                    }),
                                    t,
                                ]
                            );
                        },
                    },
                ]) && Y(t.prototype, n),
                r && Y(t, r),
                e
            );
        })();
        function X(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == u.return || u.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ee(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ee(e, t);
                })(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function ee(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function te(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var ne = (function () {
            function e() {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e);
            }
            var t, n, r;
            return (
                (t = e),
                (r = [
                    {
                        key: "destroySlotsByPlacement",
                        value: function (e, t, n, r) {
                            var i = this,
                                o = [];
                            if (
                                (t.forEach(function (e, t) {
                                    e.slot && (r || i._shouldDestroyAssociatedSlot(e, n.has(t))) && o.push(e);
                                }),
                                o.length)
                            ) {
                                var a = o.map(function (e) {
                                    return e.name;
                                });
                                q.log("destroying slots for", a);
                                var u = o.map(function (e) {
                                    return e.slot;
                                });
                                e.destroySlots(u),
                                    o.forEach(function (e) {
                                        e.slot = void 0;
                                    });
                            }
                        },
                    },
                    {
                        key: "setAdLoadTargetingByPlacement",
                        value: function (e, t) {
                            t ? (e.refreshCount += 1) : (e.refreshCount = 0), e.slot.clearTargeting("optimize_refresh_int"), e.slot.setTargeting("optimize_refresh_int", e.refreshCount.toString());
                        },
                    },
                    {
                        key: "setRefreshTargeting",
                        value: function (e, t) {
                            var n = e.pubads();
                            n.clearTargeting("optimize_refreshed"), n.setTargeting("optimize_refreshed", t.toString()), n.clearTargeting("bsas2srefreshed"), n.setTargeting("bsas2srefreshed", t.toString());
                        },
                    },
                    {
                        key: "setViewabilityTargeting",
                        value: function (e) {
                            e.slot.clearTargeting("optimize_inview"), e.slot.setTargeting("optimize_inview", e.viewable.toString());
                        },
                    },
                    {
                        key: "setup",
                        value: function (e, t) {
                            var n = e.pubads();
                            n.enableSingleRequest(), n.disableInitialLoad(), t || n.collapseEmptyDivs(), e.enableServices();
                        },
                    },
                    {
                        key: "_shouldDestroyAssociatedSlot",
                        value: function (e, t) {
                            var n = e.currentSizes,
                                r = e.previousSizes;
                            return (
                                t &&
                                (n.length !== r.length ||
                                    n.find(function (e, t) {
                                        var n = X(e, 2),
                                            i = n[0],
                                            o = n[1],
                                            a = X(r[t], 2),
                                            u = a[0],
                                            c = a[1];
                                        return i !== u || o !== c;
                                    }))
                            );
                        },
                    },
                ]),
                (n = null) && te(t.prototype, n),
                r && te(t, r),
                e
            );
        })();
        function re(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == u.return || u.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ie(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ie(e, t);
                })(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function ie(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function oe(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var ae = (function () {
            function e() {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e);
            }
            var t, n, r;
            return (
                (t = e),
                (r = [
                    {
                        key: "SizeMaps",
                        value: function (e) {
                            var t = [];
                            return (
                                e.forEach(function (e) {
                                    var n = e.acceptable,
                                        r = e.sizeMap;
                                    if (r)
                                        if (n) {
                                            var i = e.getSizesForAmazonAndPrebid();
                                            t["0x0"] = k.Unique((t["0x0"] || []).concat(i));
                                        } else
                                            r.forEach(function (e) {
                                                var n = re(e, 2),
                                                    r = n[0],
                                                    i = n[1],
                                                    o = r.join("x"),
                                                    a = Ie.filterSizesForAmazonAndPrebid(i);
                                                t[o] = k.Unique((t[o] || []).concat(a));
                                            });
                                }),
                                t
                            );
                        },
                    },
                    {
                        key: "SizeConfig",
                        value: function (t) {
                            var n,
                                r = e.SizeMaps(t);
                            return Object.entries(r)
                                .sort(function (e, t) {
                                    var n = re(e, 1)[0],
                                        r = re(t, 1)[0];
                                    if (n === r) return 0;
                                    var i = re(n.split("x").map(Number), 2),
                                        o = i[0],
                                        a = i[1],
                                        u = re(r.split("x").map(Number), 2);
                                    return o * a < u[0] * u[1] ? 1 : -1;
                                })
                                .map(function (e) {
                                    var t = re(e, 2),
                                        r = t[0],
                                        i = t[1],
                                        o = re(r.split("x").map(Number), 2),
                                        a = o[0],
                                        u = o[1],
                                        c = "(min-width: ".concat(a, "px)");
                                    return (c += 0 == a && void 0 !== n ? " and (max-width: ".concat(n - 1, "px)") : " and (min-height: ".concat(u, "px)")), (n = a), { mediaQuery: c, sizesSupported: i, labels: [r] };
                                });
                        },
                    },
                    {
                        key: "NotRejectable",
                        value: function (e) {
                            return !e.sizeMap.some(function (e) {
                                var t = re(e, 2);
                                return (
                                    t[0],
                                    t[1].some(function (e) {
                                        var t = re(e, 2),
                                            n = t[0],
                                            r = t[1];
                                        return 1 == n && 1 == r;
                                    })
                                );
                            });
                        },
                    },
                ]),
                (n = null) && oe(t.prototype, n),
                r && oe(t, r),
                e
            );
        })();
        function ue(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var ce = (function () {
            function e() {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e);
            }
            var t, n, r;
            return (
                (t = e),
                (r = [
                    {
                        key: "Round",
                        value: function (e, t) {
                            return (Math.floor(e * t) / t).toFixed(2);
                        },
                    },
                ]),
                (n = null) && ue(t.prototype, n),
                r && ue(t, r),
                e
            );
        })();
        function se(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var le = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e);
                }
                var t, n, r;
                return (
                    (t = e),
                    (r = [
                        {
                            key: "Deadline",
                            value: function (e) {
                                return new Promise(function (t, n) {
                                    var r = setTimeout(function () {
                                        clearTimeout(r), n("timeout after ".concat(e, "ms"));
                                    }, e);
                                });
                            },
                        },
                    ]),
                    (n = null) && se(t.prototype, n),
                    r && se(t, r),
                    e
                );
            })(),
            fe = ["BSAOPTIMIZE_TARGETING", "BSAOPTIMIZE_targeting", "BSAS2S_TARGETING", "BSAS2S_targeting", "BSA_TARGETING", "bsa_targeting"];
        function de(e) {
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (e = ve(e))) {
                    var t = 0,
                        n = function () {};
                    return {
                        s: n,
                        n: function () {
                            return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
                        },
                        e: function (e) {
                            throw e;
                        },
                        f: n,
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var r,
                i,
                o = !0,
                a = !1;
            return {
                s: function () {
                    r = e[Symbol.iterator]();
                },
                n: function () {
                    var e = r.next();
                    return (o = e.done), e;
                },
                e: function (e) {
                    (a = !0), (i = e);
                },
                f: function () {
                    try {
                        o || null == r.return || r.return();
                    } finally {
                        if (a) throw i;
                    }
                },
            };
        }
        function pe(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == u.return || u.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                ve(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function he(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return ye(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                ve(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function ve(e, t) {
            if (e) {
                if ("string" == typeof e) return ye(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ye(e, t) : void 0;
            }
        }
        function ye(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function be(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        function me(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        var ge = (function () {
            function e() {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e);
            }
            var t, n, r;
            return (
                (t = e),
                (r = [
                    {
                        key: "setupChecker",
                        value: function (e) {
                            var t = this;
                            if ((this._mergeIntoTrackedPlacements(e), !this._hasSetupChecker)) {
                                var n = function () {
                                    var e = he(t._trackedPlacements).map(function (e) {
                                        var n = pe(e, 2),
                                            r = n[0],
                                            i = n[1];
                                        return t._isViewable(r).then(function (e) {
                                            return [i, e];
                                        });
                                    });
                                    Promise.all(e).then(function (e) {
                                        var n = e
                                            .filter(function (e) {
                                                var t = pe(e, 2);
                                                return t[0], t[1];
                                            })
                                            .map(function (e) {
                                                return pe(e, 1)[0].getName();
                                            })
                                            .sort();
                                        (n.length >= t._currentViewablePlacementNames.length
                                            ? n.map(function (e, n) {
                                                  return [e, t._currentViewablePlacementNames[n]];
                                              })
                                            : t._currentViewablePlacementNames.map(function (e, t) {
                                                  return [e, n[t]];
                                              })
                                        ).find(function (e) {
                                            var t = pe(e, 2);
                                            return t[0] !== t[1];
                                        }) &&
                                            (e.forEach(function (e) {
                                                var t = pe(e, 2),
                                                    n = t[0],
                                                    r = t[1];
                                                n.viewable = r;
                                            }),
                                            q.log("placements in view have changed", n),
                                            (t._currentViewablePlacementNames = n));
                                    });
                                };
                                n(), setInterval(n, 2e3), (this._hasSetupChecker = !0);
                            }
                        },
                    },
                    {
                        key: "_mergeIntoTrackedPlacements",
                        value: function (e) {
                            var t,
                                n,
                                r = de(e);
                            try {
                                for (r.s(); !(n = r.n()).done; ) {
                                    var i = pe(n.value, 2),
                                        o = i[0],
                                        a = i[1];
                                    t = !1;
                                    var u,
                                        c = de(this._trackedPlacements);
                                    try {
                                        for (c.s(); !(u = c.n()).done; )
                                            if (o === pe(u.value, 1)[0]) {
                                                t = !0;
                                                break;
                                            }
                                    } catch (e) {
                                        c.e(e);
                                    } finally {
                                        c.f();
                                    }
                                    t || this._trackedPlacements.set(o, a);
                                }
                            } catch (e) {
                                r.e(e);
                            } finally {
                                r.f();
                            }
                        },
                    },
                    {
                        key: "_isViewable",
                        value: function (e) {
                            var t = this;
                            return new Promise(function (n) {
                                var r = document.getElementById(e);
                                if (r) {
                                    var i = t._getViewableRatio(r);
                                    setTimeout(function () {
                                        var e = t._getViewableRatio(r);
                                        n(i >= 0.5 && e >= 0.5);
                                    }, 1e3);
                                } else n(!1);
                            });
                        },
                    },
                    {
                        key: "_getViewableRatio",
                        value: function (e) {
                            var t = e.getBoundingClientRect(),
                                n = t.bottom,
                                r = t.height,
                                i = t.left,
                                o = t.right,
                                a = t.top,
                                u = r * t.width;
                            if (0 === u) return 0;
                            var c = pe(_.GetSize(), 2),
                                s = c[0],
                                l = c[1];
                            return ((a < 0 ? Math.min(l, n) : n > l ? Math.max(l - a, 0) : n - a) * (i < 0 ? Math.min(s, o) : o > s ? Math.max(s - i, 0) : o - i)) / u;
                        },
                    },
                ]),
                (n = null) && be(t.prototype, n),
                r && be(t, r),
                e
            );
        })();
        function we(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        function Ae(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == u.return || u.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Se(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Se(e, t);
                })(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function Se(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function _e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        me(ge, "_hasSetupChecker", !1), me(ge, "_trackedPlacements", new Map()), me(ge, "_currentViewablePlacementNames", []);
        var Ie = (function () {
            function e(t) {
                var n = t.acceptable,
                    r = t.cloneNumber,
                    i = t.disableRefresh,
                    o = t.name,
                    a = t.originalBidders,
                    u = t.sizeMap;
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.acceptable = n),
                    (this.cloneNumber = r),
                    (this.disableRefresh = i),
                    (this.name = o),
                    (this.originalBidders = a || []),
                    (this.refreshCount = 0),
                    (this.sizeMap = u || []),
                    (this.viewable = !1);
            }
            var t, n, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "fromConfig",
                        value: function (e, t) {
                            if (t) {
                                var n = e.acceptable_config;
                                n && Object.getOwnPropertyNames(n).length > 0
                                    ? (e = (function (e) {
                                          for (var t = 1; t < arguments.length; t++) {
                                              var n = null != arguments[t] ? Object(arguments[t]) : {},
                                                  r = Object.keys(n);
                                              "function" == typeof Object.getOwnPropertySymbols &&
                                                  (r = r.concat(
                                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                      })
                                                  )),
                                                  r.forEach(function (t) {
                                                      we(e, t, n[t]);
                                                  });
                                          }
                                          return e;
                                      })({}, e, { acceptable: !0, bidders: n.bidders, disable_refresh: n.disable_refresh, sizemap: n.sizemap }))
                                    : (e.acceptable = !1);
                            }
                            var r = e,
                                i = r.acceptable,
                                a = void 0 !== i && i,
                                u = r.bidders,
                                c = r.disable_refresh,
                                s = r.name,
                                l = r.sizemap;
                            return new this({
                                acceptable: a,
                                disableRefresh: c,
                                name: s,
                                originalBidders: (u || []).map(function (e) {
                                    return o.fromConfig(e);
                                }),
                                sizeMap: l,
                            });
                        },
                    },
                    {
                        key: "filterSizesForAmazonAndPrebid",
                        value: function (e) {
                            return e.filter(function (e) {
                                return "fluid" !== e;
                            });
                        },
                    },
                ]),
                (n = [
                    {
                        key: "adjustForViewport",
                        value: function (e, t) {
                            var n,
                                r,
                                i = Ae(e, 2),
                                a = i[0],
                                u = i[1];
                            if (
                                (this.sizeMap.forEach(function (e) {
                                    var t = Ae(e, 2),
                                        i = t[0],
                                        o = t[1],
                                        c = Ae(i, 2),
                                        s = c[0],
                                        l = c[1];
                                    a >= s && u >= l && (!r || (r.width <= s && r.height <= l)) && ((n = o), (r = { width: s, height: l }));
                                }),
                                (this.previousSizes = this.currentSizes || []),
                                (this.currentSizes = n || []),
                                (this.currentBidders = (this.originalBidders || []).filter(function (e) {
                                    return e.isValidByRefreshStatus(t);
                                })),
                                r)
                            ) {
                                var c = o.getSizeSpecificBidders();
                                this.currentBidders = this.currentBidders
                                    .sort(function (e, t) {
                                        if (
                                            e.name != t.name ||
                                            !c.some(function (t) {
                                                return e.name == t;
                                            })
                                        )
                                            return e.name > t.name ? 1 : e.name == t.name ? 0 : -1;
                                        var n = Ae(e.params.size.split("x"), 2),
                                            r = n[0],
                                            i = n[1],
                                            o = Ae(t.params.size.split("x"), 2),
                                            a = o[0],
                                            u = o[1];
                                        return r > a && i > u ? 1 : r == a && i == u ? 0 : -1;
                                    })
                                    .filter(function (e) {
                                        var t = e.name,
                                            r = e.params;
                                        if (
                                            !c.some(function (e) {
                                                return t == e;
                                            })
                                        )
                                            return !0;
                                        var i = Ae(r.size.split("x"), 2),
                                            o = i[0],
                                            a = i[1];
                                        return (
                                            n.findIndex(function (e) {
                                                var t = Ae(e, 2),
                                                    n = t[0],
                                                    r = t[1];
                                                return n == o && r == a;
                                            }) > -1
                                        );
                                    });
                            }
                            return this;
                        },
                    },
                    {
                        key: "forAmazon",
                        value: function () {
                            return { slotID: this.slot.getSlotElementId(), sizes: this.getSizesForAmazonAndPrebid(), slotName: this.getSlotName() };
                        },
                    },
                    {
                        key: "forPrebid",
                        value: function () {
                            return {
                                code: this.slot.getSlotElementId(),
                                mediaTypes: { banner: { sizes: this.getSizesForAmazonAndPrebid() } },
                                bids: this.currentBidders.map(function (e) {
                                    return e.forPrebid();
                                }),
                            };
                        },
                    },
                    {
                        key: "getName",
                        value: function () {
                            return ""
                                .concat(this.name)
                                .concat(this.acceptable ? "_acceptable" : "")
                                .concat(void 0 !== this.cloneNumber ? " (Clone ".concat(this.cloneNumber, ")") : "");
                        },
                    },
                    {
                        key: "getSizesForAmazonAndPrebid",
                        value: function () {
                            return this.constructor.filterSizesForAmazonAndPrebid(this.currentSizes);
                        },
                    },
                    {
                        key: "getSlotName",
                        value: function () {
                            return "/"
                                .concat(r.dfpNetworkId, "/")
                                .concat(this.name)
                                .concat(this.acceptable ? "_acceptable" : "");
                        },
                    },
                    {
                        key: "shouldRefresh",
                        value: function (e) {
                            return this.disableRefresh
                                ? { shouldRefresh: !1, reason: "".concat(this.getName(), " has had its refresh disabled") }
                                : e > 0 && this.refreshCount >= e
                                ? { shouldRefresh: !1, reason: "".concat(this.getName(), " has reached its refresh limit (").concat(e, ")") }
                                : { shouldRefresh: !0 };
                        },
                    },
                    {
                        key: "clone",
                        value: function (t) {
                            return new e(Object.assign({}, this, { cloneNumber: t }));
                        },
                    },
                ]) && _e(t.prototype, n),
                i && _e(t, i),
                e
            );
        })();
        function xe(e) {
            return (xe =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function ke(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == u.return || u.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                Oe(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function Pe(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return Ee(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                Oe(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function Oe(e, t) {
            if (e) {
                if ("string" == typeof e) return Ee(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ee(e, t) : void 0;
            }
        }
        function Ee(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function je(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function Te(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var Re = (function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                je(this, e), (this.targetingArray = []), this._merge(t);
            }
            var t, n, r;
            return (
                (t = e),
                (n = [
                    {
                        key: "clone",
                        value: function () {
                            return new e(
                                this.targetingArray.map(function (e) {
                                    var t = e.key,
                                        n = e.value;
                                    return { key: t, value: Array.isArray(n) ? Pe(n) : n };
                                })
                            );
                        },
                    },
                    {
                        key: "getTargetingArray",
                        value: function () {
                            return this.targetingArray;
                        },
                    },
                    {
                        key: "push",
                        value: function () {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._merge(t);
                        },
                    },
                    {
                        key: "_merge",
                        value: function (e) {
                            var t = this;
                            this._normalizeTargetingArray(e).forEach(function (e) {
                                return t._setTargeting(e);
                            });
                        },
                    },
                    {
                        key: "_normalizeTargetingArray",
                        value: function (e) {
                            var t = this;
                            return e.map(function (e) {
                                return t._normalizeTargetFormat(e);
                            });
                        },
                    },
                    {
                        key: "_normalizeTargetFormat",
                        value: function (e) {
                            if (Array.isArray(e)) {
                                var t = ke(e, 2);
                                return { key: t[0], value: t[1] };
                            }
                            if ("object" === xe(e) && e.hasOwnProperty("key") && e.hasOwnProperty("value")) return { key: e.key, value: e.value };
                            console.warn("Optimize: Invalid target format (acceptable: [key, value] / { key, value }); skipping", e);
                        },
                    },
                    {
                        key: "_setTargeting",
                        value: function (e) {
                            var t = e.key,
                                n = e.value,
                                r = t.toString(),
                                i = this.targetingArray.findIndex(function (e) {
                                    var t = e.key;
                                    return r === t;
                                }),
                                o = Array.isArray(n)
                                    ? n.map(function (e) {
                                          return e.toString();
                                      })
                                    : n.toString();
                            i >= 0 ? (this.targetingArray[i].value = o) : this.targetingArray.push({ key: r, value: o });
                        },
                    },
                ]) && Te(t.prototype, n),
                r && Te(t, r),
                e
            );
        })();
        function ze(e) {
            var t = e.cpm;
            return t >= 100 ? "100.00" : t >= 50 ? ce.Round(t, 4) : t >= 20 ? ce.Round(t, 20) : ce.Round(t, 100);
        }
        n(131);
        function Me(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var Ce = (function () {
            function e() {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e);
            }
            var t, n, r;
            return (
                (t = e),
                (r = [
                    {
                        key: "detect",
                        value: function (e, t) {
                            var n = !1,
                                r = 2,
                                i = !1,
                                o = !1;
                            if ("function" == typeof t) {
                                e += "?ch=*&rn=*";
                                var a = 11 * Math.random(),
                                    u = new Image();
                                (u.onload = s),
                                    (u.onerror = function () {
                                        (i = !0), s();
                                    }),
                                    (u.src = e.replace(/\*/, 1).replace(/\*/, a));
                                var c = new Image();
                                (c.onload = s),
                                    (c.onerror = function () {
                                        (o = !0), s();
                                    }),
                                    (c.src = e.replace(/\*/, 2).replace(/\*/, a)),
                                    (function e(t, i) {
                                        0 == r || i > 1e3
                                            ? t(0 == r && n)
                                            : setTimeout(function () {
                                                  return e(t, 2 * i);
                                              }, 2 * i);
                                    })(t, 250);
                            }
                            function s() {
                                --r || (n = !i && o);
                            }
                        },
                    },
                ]),
                (n = null) && Me(t.prototype, n),
                r && Me(t, r),
                e
            );
        })();
        function Ne(e, t) {
            "leaderboard" === e &&
                (function (e) {
                    var t = "bsa_fixed-leaderboard-".concat(e, "_hide");
                    if ("true" !== l.get(t)) {
                        var n = document.createElement("div");
                        (n.className = "bsa_fixed-leaderboard"), (n.style.display = "none");
                        var r = document.createElement("div");
                        (r.id = "bsa-zone_".concat(e, "_123456")), (r.style.display = "none"), n.appendChild(r);
                        var i = setInterval(function () {
                                r.innerHTML.length && "" === r.style.display ? (n.style.display = "") : (n.style.display = "none");
                            }, 1e3),
                            o = document.createElement("a");
                        (o.href = "#"),
                            (o.innerHTML = "x"),
                            o.addEventListener("click", function (e) {
                                e.preventDefault(), clearInterval(i), l.set(t, "true", 864e5), (n.style.display = "none"), (r.dataset.explicitlyHidden = "");
                            }),
                            n.appendChild(o),
                            document.getElementsByTagName("body")[0].appendChild(n);
                        var a = document.createElement("style");
                        (a.innerHTML = "\n.bsa_fixed-leaderboard {\n\tposition: fixed;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 100px;\n\twidth: 100%;\n\tbackground: rgba(0,0,0,.8);\n\tz-index: 9999;\n\tpadding: 5px 0;\n}\n.bsa_fixed-leaderboard > a {\n\tdisplay: block;\n\tposition: absolute;\n\tright: 5px;\n\ttop: 5px;\n\tbackground: rgba(255, 255, 255, .4);\n\tcolor: #000;\n\tborder-radius: 20px;\n\tpadding: 2px 8px 4px;\n\tfont-family: Arial;\n\tfont-size: 14px;\n\ttext-decoration: none;\n}\n"
                            .trim()
                            .split("\n")
                            .map(function (e) {
                                return e.trim();
                            })
                            .join("")),
                            document.getElementsByTagName("head")[0].appendChild(a);
                    }
                })(t);
        }
        function Le(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == u.return || u.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                Fe(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function Be(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return Ve(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                Fe(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function Fe(e, t) {
            if (e) {
                if ("string" == typeof e) return Ve(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ve(e, t) : void 0;
            }
        }
        function Ve(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function De(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        function Ue(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        var Ge = (function () {
            function e(t) {
                var n = t.aps,
                    r = t.baseTargeting,
                    i = t.customTargeting,
                    o = t.gpt,
                    a = t.isInAcceptableAdIframe,
                    u = t.isRefresh,
                    c = t.placements,
                    s = t.pbjs,
                    l = t.timeout;
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.aps = n),
                    (this.auctionRun = !1),
                    (this.baseTargeting = r),
                    (this.customTargeting = i),
                    (this.gpt = o),
                    (this.isInAcceptableAdIframe = a),
                    (this.isRefresh = u),
                    (this.pbjs = s),
                    (this.placements = c),
                    (this.timeout = l);
            }
            var t, n, r;
            return (
                (t = e),
                (r = [
                    {
                        key: "resizeAcceptableAdIframe",
                        value: function (e, t) {
                            this.shouldBlockAcceptableAdIframeResize || "fluid" === t || (Array.isArray(t) && 1 === t[0] && 1 === t[1]) || (V.postAdSizeChangedMessage(e, t), (this.shouldBlockAcceptableAdIframeResize = !0));
                        },
                    },
                ]),
                (n = [
                    {
                        key: "shouldGetBids",
                        value: function (e) {
                            return ae.NotRejectable(e);
                        },
                    },
                    {
                        key: "getBiddablePlacementsArray",
                        value: function () {
                            var e = this;
                            return Be(this.placements.values()).filter(function (t) {
                                return e.shouldGetBids(t);
                            });
                        },
                    },
                    {
                        key: "loadZone",
                        value: function (e) {
                            if (!this.placements.has(e)) return q.log("unknown placement ID: ".concat(e)), !1;
                            var t = this.placements.get(e);
                            if (t.slot) return q.log("(gpt) already loaded: ".concat(e)), ne.setAdLoadTargetingByPlacement(t, this.isRefresh), ne.setViewabilityTargeting(t), !1;
                            var n = t.getSlotName(),
                                r = t.sizeMap,
                                i = t.currentSizes,
                                o = this.gpt.defineSlot(n, i, e);
                            if (o) {
                                (t.slot = o), ne.setAdLoadTargetingByPlacement(t, this.isRefresh), ne.setViewabilityTargeting(t);
                                var a = this.gpt.sizeMapping(e);
                                r.forEach(function (e) {
                                    a.addSize(e[0], e[1]);
                                }),
                                    q.log("(gpt) adding sizes to ".concat(e), r, a.build()),
                                    o.defineSizeMapping(a.build());
                                var u = this.gpt.pubads();
                                return (
                                    this.baseTargeting.getTargetingArray().forEach(function (e) {
                                        var t = e.key,
                                            n = e.value;
                                        return u.setTargeting(t, n);
                                    }),
                                    o.addService(u),
                                    this.gpt.display(e),
                                    !0
                                );
                            }
                            q.log("(gpt) failed to create slot(".concat(n, "): ").concat(e));
                        },
                    },
                    {
                        key: "setCustomTargeting",
                        value: function () {
                            var e = this,
                                t = [];
                            fe.forEach(function (e) {
                                return (t = t.concat(window[e]));
                            }),
                                (t = t.concat(
                                    this.customTargeting.getTargetingArray().map(function (e) {
                                        return [e.key, e.value];
                                    })
                                )),
                                q.log("got custom targeting:", t),
                                t.forEach(function (t) {
                                    return e.gpt.pubads().setTargeting(t[0], t[1]);
                                });
                        },
                    },
                    {
                        key: "init",
                        value: function () {
                            var t = this;
                            this.setCustomTargeting(),
                                this.pbjs.setConfig({
                                    sizeConfig: ae.SizeConfig(this.placements),
                                    sendAllBids: !0,
                                    userSync: { filterSettings: { iframe: { bidders: "*", filter: "include" }, image: { bidders: "*", filter: "include" } }, syncEnabled: !0, syncsPerBidder: 8, syncDelay: 3e3 },
                                }),
                                (this.pbjs.bidderSettings = {
                                    standard: {
                                        adserverTargeting: [
                                            { key: "_pl", val: ze },
                                            {
                                                key: "_bd",
                                                val: function () {
                                                    return "bid";
                                                },
                                            },
                                            {
                                                key: "hb_bidder",
                                                val: function (e) {
                                                    return e.bidderCode;
                                                },
                                            },
                                            {
                                                key: "hb_adid",
                                                val: function (e) {
                                                    return e.adId;
                                                },
                                            },
                                            { key: "hb_pb", val: ze },
                                            {
                                                key: "hb_size",
                                                val: function (e) {
                                                    return e.size;
                                                },
                                            },
                                        ],
                                    },
                                }),
                                this.placements.forEach(function (e, n) {
                                    return t.loadZone(n);
                                });
                            var n = new URLSearchParams(window.location.search);
                            if (this.isInAcceptableAdIframe && n.has("adunit") && !this.constructor.hasRegisteredIframeListeners) {
                                var r = n.get("adunit");
                                this.gpt.pubads().addEventListener("slotRenderEnded", function (t) {
                                    var n = t.slot.getSlotElementId();
                                    n === r && e.resizeAcceptableAdIframe(n, t.size);
                                }),
                                    this.pbjs.onEvent("bidWon", function (t) {
                                        var n = t.adUnitCode,
                                            i = t.width,
                                            o = t.height;
                                        n === r && e.resizeAcceptableAdIframe(n, [i, o]);
                                    }),
                                    (this.constructor.hasRegisteredIframeListeners = !0);
                            } else this.isInAcceptableAdIframe && (this.constructor.shouldBlockAcceptableAdIframeResize = !1);
                        },
                    },
                    {
                        key: "run",
                        value: function () {
                            var e = this;
                            if ((this.init(), this.auctionRun)) return Promise.resolve();
                            var t = [],
                                n = this.getBiddablePlacementsArray();
                            return (
                                t.push(
                                    new Promise(function (t) {
                                        (e.pbjs.adUnits = []),
                                            e.pbjs.addAdUnits(
                                                n.map(function (e) {
                                                    return e.forPrebid();
                                                })
                                            ),
                                            e.pbjs.requestBids({
                                                bidsBackHandler: function () {
                                                    t();
                                                },
                                                timeout: e.timeout,
                                            });
                                    })
                                ),
                                this.aps &&
                                    t.push(
                                        new Promise(function (t) {
                                            e.aps.fetchBids(
                                                {
                                                    slots: n.map(function (e) {
                                                        return e.forAmazon();
                                                    }),
                                                },
                                                function (e) {
                                                    t();
                                                }
                                            );
                                        })
                                    ),
                                Promise.race([Promise.all(t), le.Deadline(this.timeout)])
                                    .then(function () {
                                        e.sendBids();
                                    })
                                    .catch(function (t) {
                                        q.log("failed to get bids: ".concat(t, "; sending request to DFP anyway")), e.sendBids();
                                    })
                            );
                        },
                    },
                    {
                        key: "sendBids",
                        value: function () {
                            if (!this.auctionRun) {
                                this.auctionRun = !0;
                                var e = Be(this.placements).map(function (e) {
                                    var t = Le(e, 2);
                                    return t[0], t[1].slot;
                                });
                                this.aps && this.aps.setDisplayBids(), this.pbjs.setTargetingForGPTAsync(), this.gpt.pubads().refresh(e);
                            }
                        },
                    },
                ]) && De(t.prototype, n),
                r && De(t, r),
                e
            );
        })();
        Ue(Ge, "hasRegisteredIframeListeners", !1), Ue(Ge, "shouldBlockAcceptableAdIframeResize", !1);
        var He = Ge;
        function qe(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        function $e(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return Ke(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                Qe(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function We(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == u.return || u.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                Qe(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function Qe(e, t) {
            if (e) {
                if ("string" == typeof e) return Ke(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ke(e, t) : void 0;
            }
        }
        function Ke(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function Je(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function Ye(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var Ze = window.location.search.indexOf("bsadebug") > 0 || !1,
            Xe = (function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.queue,
                        r = void 0 === n ? [] : n;
                    Je(this, e),
                        (this.auctionIsRunning = !1),
                        (this.auctionQueue = []),
                        (this.customTargeting = new Re()),
                        (this.disableInitialLoad = !1),
                        (this.disableOutsideAdblockRecovery = !1),
                        (this.isInitialized = !1),
                        (this.isInAcceptableAdIframe = V.isIn()),
                        (this.placements = new Map()),
                        (this.queue = r),
                        (this.refreshInterval = 0),
                        (this.refreshIntervalIds = new Map()),
                        (this.refreshRules = { countLimit: 0, respectViewability: !1 }),
                        (this.shouldLoadAcceptableAds = !1);
                }
                var t, n, r;
                return (
                    (t = e),
                    (n = [
                        {
                            key: "setPublisher",
                            value: function (e) {
                                this.publisher = e;
                            },
                        },
                        {
                            key: "setAudience",
                            value: function (e) {
                                this.audience = e;
                            },
                        },
                        {
                            key: "setApproved",
                            value: function (e) {
                                this.approved = new Set(e);
                            },
                        },
                        {
                            key: "setDisableInitialLoad",
                            value: function (e) {
                                this.disableInitialLoad = e;
                            },
                        },
                        {
                            key: "setDisableOutsideAdblockRecovery",
                            value: function (e) {
                                this.disableOutsideAdblockRecovery = e;
                            },
                        },
                        {
                            key: "setEnvironment",
                            value: function (e) {
                                this.environment = e;
                            },
                        },
                        {
                            key: "setLastUpdated",
                            value: function (e) {
                                this.lastUpdated = new Date(e);
                            },
                        },
                        {
                            key: "setPlacements",
                            value: function (e) {
                                var t,
                                    n = this,
                                    r = (function (e) {
                                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                            if (Array.isArray(e) || (e = Qe(e))) {
                                                var t = 0,
                                                    n = function () {};
                                                return {
                                                    s: n,
                                                    n: function () {
                                                        return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
                                                    },
                                                    e: function (e) {
                                                        throw e;
                                                    },
                                                    f: n,
                                                };
                                            }
                                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                        }
                                        var r,
                                            i,
                                            o = !0,
                                            a = !1;
                                        return {
                                            s: function () {
                                                r = e[Symbol.iterator]();
                                            },
                                            n: function () {
                                                var e = r.next();
                                                return (o = e.done), e;
                                            },
                                            e: function (e) {
                                                (a = !0), (i = e);
                                            },
                                            f: function () {
                                                try {
                                                    o || null == r.return || r.return();
                                                } finally {
                                                    if (a) throw i;
                                                }
                                            },
                                        };
                                    })(
                                        new Map(
                                            Object.entries(e).filter(function (e) {
                                                var t = We(e, 2),
                                                    r = t[0];
                                                return t[1], !n.isInAcceptableAdIframe || r === new URLSearchParams(window.location.search).get("adunit");
                                            })
                                        )
                                    );
                                try {
                                    for (r.s(); !(t = r.n()).done; ) {
                                        var i = We(t.value, 2),
                                            o = i[0],
                                            a = i[1],
                                            u = Ie.fromConfig(a, this.shouldLoadAcceptableAds);
                                        this.placements.set(o, u);
                                    }
                                } catch (e) {
                                    r.e(e);
                                } finally {
                                    r.f();
                                }
                            },
                        },
                        {
                            key: "setShouldLoadAcceptableAds",
                            value: function (e) {
                                this.shouldLoadAcceptableAds = e;
                            },
                        },
                        {
                            key: "setRefreshInterval",
                            value: function (e) {
                                this.isInAcceptableAdIframe || (this.refreshInterval = e);
                            },
                        },
                        {
                            key: "setRefreshRules",
                            value: function (e) {
                                this.refreshRules = Object.assign({}, this.refreshRules, e);
                            },
                        },
                        {
                            key: "setParentViewportSize",
                            value: function (e) {
                                this.isInAcceptableAdIframe && (this.parentViewportSize = e);
                            },
                        },
                        {
                            key: "getPlacements",
                            value: function () {
                                return this.placements;
                            },
                        },
                        {
                            key: "getViewportSize",
                            value: function () {
                                return this.isInAcceptableAdIframe ? this.parentViewportSize : _.GetSize();
                            },
                        },
                        {
                            key: "init",
                            value: function (e) {
                                var t = this,
                                    n = e.acceptable_origin,
                                    r = e.approved,
                                    i = e.audience,
                                    o = e.disable_gpt_collapse_empty_divs,
                                    a = e.disable_initial_load,
                                    u = e.disable_outside_adblock_recovery,
                                    c = e.enable_adsense,
                                    s = e.environment,
                                    l = e.extra_css,
                                    f = e.fixed_leaderboard_ad_unit_id,
                                    d = e.last_updated,
                                    p = e.placements,
                                    h = e.publisher,
                                    v = e.refresh_interval,
                                    y = e.refresh_rules,
                                    b = e.usesABP;
                                if (Ze) {
                                    var m = new URLSearchParams(window.location.search);
                                    this.setShouldLoadAcceptableAds(b || m.has("force_acceptable")), this.enableDebugging();
                                } else this.setShouldLoadAcceptableAds(b);
                                return (
                                    this.setApproved(this.shouldLoadAcceptableAds ? [] : r),
                                    this.setAudience(i),
                                    this.setDisableInitialLoad(a || this.isInAcceptableAdIframe),
                                    this.setDisableOutsideAdblockRecovery(u),
                                    this.setEnvironment(s),
                                    this.setLastUpdated(d),
                                    this.setPlacements(p),
                                    this.setPublisher(h),
                                    this.setRefreshInterval(v),
                                    this.setRefreshRules(y),
                                    (this.baseTargeting = new Re([
                                        ["optimize", "true"],
                                        ["optimize_amp", "false"],
                                        ["optimize_debug", (void 0 !== this.debug).toString()],
                                        ["optimize_env", s],
                                        ["optimize_pub", h],
                                        ["optimize_audience", i],
                                        ["optimize_acceptable", this.shouldLoadAcceptableAds.toString()],
                                        ["bsas2s", "true"],
                                        ["bsas2spub", h],
                                        ["bsas2saudience", i],
                                        ["bsas2sacceptable", this.shouldLoadAcceptableAds.toString()],
                                    ])),
                                    this.shouldLoadAcceptableAds && (U.setAcceptableOrigin(n), this.isInAcceptableAdIframe ? V.init(this) : D.init(this)),
                                    c && this.enableAdsenseCode(),
                                    this.isInAcceptableAdIframe || (ge.setupChecker(this.placements), l && A.addExtraCss(l), f && this.shouldInitiateAuction() && this.shouldRunAuction() && this.enableFixedAd("leaderboard", f)),
                                    Q.GPT(function (e) {
                                        return ne.setup(e, o);
                                    })
                                        .then(function () {
                                            return Q.Prebid();
                                        })
                                        .then(function () {
                                            t.queue.forEach(function (e) {
                                                return e();
                                            }),
                                                (t.queue = {
                                                    push: function () {
                                                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                                        return t.forEach(function (e) {
                                                            return e();
                                                        });
                                                    },
                                                }),
                                                (t.isInitialized = !0);
                                        })
                                );
                            },
                        },
                        {
                            key: "shouldInitiateAuction",
                            value: function () {
                                return !this.disableOutsideAdblockRecovery || (this.disableOutsideAdblockRecovery && this.shouldLoadAcceptableAds);
                            },
                        },
                        {
                            key: "shouldRunAuction",
                            value: function () {
                                return !this.shouldLoadAcceptableAds || this.isInAcceptableAdIframe;
                            },
                        },
                        {
                            key: "shouldBeAuctioned",
                            value: function (e, t) {
                                var n = this.placements.get(e);
                                if (!n) return q.log("unknown placement ID: ".concat(e)), !1;
                                if (t) {
                                    var r = n.shouldRefresh(this.refreshRules.countLimit),
                                        i = r.shouldRefresh,
                                        o = r.reason;
                                    if (!i) return q.log("".concat(o, ", skipping refresh")), !1;
                                }
                                var a = this.getViewportSize();
                                if ((n.adjustForViewport(a, t), 0 === n.currentSizes.length)) return !1;
                                var u = document.querySelector("[id=".concat(e, "]"));
                                return u && !("explicitlyHidden" in u.dataset) && ((this.shouldRunAuction() && !("delegatedAcceptableAd" in u.dataset)) || "delegatedAcceptableAd" in u.dataset);
                            },
                        },
                        {
                            key: "pushToAuctionQueue",
                            value: function (e, t) {
                                var n = this,
                                    r = this.customTargeting.clone();
                                if (!this.isInAcceptableAdIframe || this.auctionIsRunning || this.auctionQueue.length) {
                                    var i = this.auctionQueue.length,
                                        o = i - 1;
                                    if (i && this.auctionQueue[o].isRefresh === t) {
                                        var a = this.auctionQueue[o].placements;
                                        e.forEach(function (e, t) {
                                            a.has(t) || a.set(t, e);
                                        });
                                    } else this.auctionQueue.push({ customTargeting: r, isRefresh: t, placements: e });
                                    this.initiateAuctionInterval && clearInterval(this.initiateAuctionInterval),
                                        (this.initiateAuctionInterval = setInterval(function () {
                                            if (!n.auctionIsRunning && n.auctionQueue.length) {
                                                var e = n.auctionQueue.shift(),
                                                    t = e.customTargeting,
                                                    r = e.isRefresh,
                                                    i = e.placements;
                                                n.initiateAuction(i, r, t);
                                            } else n.auctionQueue.length || clearInterval(n.initiateAuctionInterval);
                                        }, 1e3));
                                } else this.initiateAuction(e, t, r);
                            },
                        },
                        {
                            key: "setupAutomaticRefreshInterval",
                            value: function (e) {
                                var t = this;
                                if (this.placements.get(e)) {
                                    if (this.refreshInterval > 0 && !this.refreshIntervalIds.has(e)) {
                                        var n = setInterval(function () {
                                            !t.refreshRules.respectViewability || A.Visible() ? (q.log("refreshing ad for ".concat(e)), t.refresh(e)) : q.log("document not visible currently, skipping refresh for ".concat(e));
                                        }, 1e3 * this.refreshInterval);
                                        this.refreshIntervalIds.set(e, n);
                                    }
                                } else q.log("unknown placement ID: ".concat(e));
                            },
                        },
                        {
                            key: "stopAutomaticRefresh",
                            value: function (e) {
                                var t = this;
                                if (e)
                                    if (Array.isArray(e))
                                        e.forEach(function (e) {
                                            return t.stopAutomaticRefresh(e);
                                        });
                                    else {
                                        var n = e;
                                        this.placements.get(n)
                                            ? this.refreshIntervalIds.has(n) && (clearInterval(this.refreshIntervalIds.get(n)), this.refreshIntervalIds.delete(n), q.log("stopping automatic refresh for ".concat(n)))
                                            : q.log("unknown placement ID: ".concat(n));
                                    }
                                else
                                    this.placements.forEach(function (e, n) {
                                        return t.stopAutomaticRefresh(n);
                                    });
                            },
                        },
                        {
                            key: "refresh",
                            value: function (e) {
                                var t = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    r = n.canBypassViewability,
                                    i = void 0 !== r && r,
                                    o = n.refresh,
                                    a = void 0 === o || o;
                                Array.isArray(e) || (e = [e]);
                                var u = new Map();
                                e.forEach(function (e) {
                                    var n = e.match(/bsa-zone_([0-9]+-[0-9]+)_123456_([0-9]+)/);
                                    if (n) {
                                        var r = We(n, 3),
                                            o = (r[1], r[2]),
                                            c = e.slice(0, -(o.length + 1));
                                        t.placements.has(e) || t.clone(c, e);
                                    }
                                    var s = t.placements.get(e);
                                    if (s)
                                        if (i || !t.refreshRules.respectViewability || s.viewable || !a) u.set(e, s);
                                        else {
                                            var l = "".concat(s.getName(), " was not viewable, skipping refresh");
                                            q.log(l);
                                        }
                                    else q.log("unknown placement ID: ".concat(e));
                                }),
                                    u.size && this.pushToAuctionQueue(u, a);
                            },
                        },
                        {
                            key: "refreshAll",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = e.canBypassViewability,
                                    n = void 0 !== t && t,
                                    r = e.refresh,
                                    i = void 0 === r || r;
                                this.refresh($e(this.placements.keys()), { canBypassViewability: n, refresh: i });
                            },
                        },
                        {
                            key: "push",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = t.canBypassViewability,
                                    r = void 0 === n || n;
                                this.refresh(e, { canBypassViewability: r, refresh: !1 });
                            },
                        },
                        {
                            key: "pushAll",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = e.canBypassViewability,
                                    n = void 0 === t || t;
                                this.refreshAll({ canBypassViewability: n, refresh: !1 });
                            },
                        },
                        {
                            key: "clone",
                            value: function (e, t) {
                                if (this.placements.has(e)) {
                                    var n = Number(t.split("_").pop()),
                                        r = this.placements.get(e).clone(n);
                                    return this.placements.set(t, r), this.setupAutomaticRefreshInterval(t), r;
                                }
                                q.log("unknown placement ID: ".concat(e));
                            },
                        },
                        {
                            key: "runAuction",
                            value: function (e, t, n, r, i, o) {
                                var a = this,
                                    u = new Map(
                                        $e(e).filter(function (e) {
                                            var n = We(e, 1)[0];
                                            return a.shouldBeAuctioned(n, t);
                                        })
                                    );
                                if (0 !== u.size) {
                                    ne.setRefreshTargeting(i, t), ne.destroySlotsByPlacement(i, e, u, !t), this.approved;
                                    var c = this.baseTargeting,
                                        s = this.isInAcceptableAdIframe,
                                        l = new He({ aps: r, baseTargeting: c, customTargeting: n, gpt: i, isInAcceptableAdIframe: s, isRefresh: t, placements: u, pbjs: o, timeout: 1500 });
                                    (this.auctionIsRunning = !0),
                                        l.run().then(function () {
                                            setTimeout(function () {
                                                a.auctionIsRunning = !1;
                                            }, 1500);
                                        });
                                } else q.log("skipping auction due to lack of auctionable placements");
                            },
                        },
                        {
                            key: "delegateAuctions",
                            value: function (e, t, n) {
                                var r = this,
                                    i = $e(e).filter(function (e) {
                                        var n = We(e, 1)[0];
                                        return r.shouldBeAuctioned(n, t);
                                    });
                                D.postAdLoadMessages(i, t, n);
                            },
                        },
                        {
                            key: "initiateAuction",
                            value: function (e) {
                                var t = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Re();
                                this.shouldInitiateAuction() &&
                                    (Q.SetTimeout(1500),
                                    A.Ready(function () {
                                        t.isInAcceptableAdIframe || ge.setupChecker(e),
                                            t.shouldRunAuction()
                                                ? Q.GPT(function (i) {
                                                      Q.Prebid(function (o) {
                                                          t.approved.has("amazon")
                                                              ? Q.APS(function (a) {
                                                                    t.runAuction(e, n, r, a, i, o);
                                                                })
                                                              : t.runAuction(e, n, r, void 0, i, o);
                                                      });
                                                  })
                                                : t.delegateAuctions(e, n, r);
                                    }));
                            },
                        },
                        {
                            key: "run",
                            value: function () {
                                var e = this;
                                this.disableInitialLoad || this.initiateAuction(this.placements, !1, this.customTargeting),
                                    this.isInAcceptableAdIframe ||
                                        this.placements.forEach(function (t, n) {
                                            return e.setupAutomaticRefreshInterval(n);
                                        });
                            },
                        },
                        {
                            key: "exec",
                            value: function (e) {
                                var t,
                                    n = this,
                                    r = function (t) {
                                        return n
                                            .init(
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? Object(arguments[t]) : {},
                                                            r = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                })
                                                            )),
                                                            r.forEach(function (t) {
                                                                qe(e, t, n[t]);
                                                            });
                                                    }
                                                    return e;
                                                })({}, e, { usesABP: t })
                                            )
                                            .then(function () {
                                                return n.run();
                                            });
                                    };
                                this.isInAcceptableAdIframe ? r(!0) : ((t = r), Ce.detect("https://cdn4.buysellads.net/acceptable.gif", t));
                            },
                        },
                        {
                            key: "enableDebugging",
                            value: function () {
                                var e = this;
                                this.debug ||
                                    ((this.debug = new Z({
                                        getPlacements: function () {
                                            return e.getPlacements();
                                        },
                                    })),
                                    this.debug.enable());
                            },
                        },
                        {
                            key: "enableAdsenseCode",
                            value: function () {
                                var e;
                                ((e = document.createElement("script")).async = !0),
                                    (e.dataset.adClient = "ca-pub-3450182435784385"),
                                    (e.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"),
                                    document.getElementsByTagName("head")[0].appendChild(e);
                            },
                        },
                        {
                            key: "enableFixedAd",
                            value: function (e, t) {
                                A.Ready(function () {
                                    return Ne(e, t);
                                });
                            },
                        },
                    ]) && Ye(t.prototype, n),
                    r && Ye(t, r),
                    e
                );
            })();
        n.d(t, "module", function () {
            return Xe;
        }),
            fe.forEach(function (e) {
                return (window[e] = window[e] || []);
            }),
            (window.optimize = new Xe(window.optimize)),
            (window.bsas2s = window.optimize);
    },
]);
(function () {
    window.optimize.exec({
        acceptable_origin: "https://acceptable.buysellads.net",
        approved: [],
        audience: "tech",
        disable_gpt_collapse_empty_divs: false,
        disable_initial_load: false,
        disable_outside_adblock_recovery: false,
        enable_adsense: false,
        environment: "prod",
        extra_css: "",
        fixed_leaderboard_ad_unit_id: null,
        last_updated: "2020-08-04T21:16:20.562+00:00",
        placements: {
            "bsa-zone_1588428247729-0_123456": {
                id: "bsa-zone_1588428247729-0_123456",
                name: "TechieDelight_S2S_Leaderboard_ROS_ATF",
                disable_refresh: false,
                sizemap: [
                    [
                        [0, 0],
                        [
                            [320, 100],
                            [320, 50],
                        ],
                    ],
                    [[1180, 0], [[728, 90]]],
                ],
                bidders: [
                    { name: "appnexus", params: { placementId: "17448785", member: "8394" }, disable_push: false, disable_refresh: false },
                    { name: "rubicon", params: { accountId: "18812", siteId: "294306", zoneId: "1482426" }, disable_push: false, disable_refresh: false },
                    { name: "nobid", params: { siteId: "21701499510" }, disable_push: false, disable_refresh: false },
                    { name: "sharethrough", params: { pkey: "JqUHoKPsjy1YCzo9GoVXUCX6" }, disable_push: false, disable_refresh: true },
                    { name: "criteo", params: { networkId: "10359" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "320x100", tagid: "753291" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "320x50", tagid: "753293" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "728x90", tagid: "753289" }, disable_push: false, disable_refresh: false },
                ],
                is_fixed_ad: false,
                acceptable_config: null,
            },
            "bsa-zone_1588688874806-1_123456": {
                id: "bsa-zone_1588688874806-1_123456",
                name: "TechieDelight_S2S_Sidebar_ROS_ATF",
                disable_refresh: false,
                sizemap: [
                    [
                        [0, 0],
                        [
                            [300, 250],
                            [320, 50],
                            [320, 100],
                        ],
                    ],
                    [[765, 0], [[300, 250]]],
                ],
                bidders: [
                    { name: "appnexus", params: { placementId: "17448785", member: "8394" }, disable_push: false, disable_refresh: false },
                    { name: "rubicon", params: { accountId: "18812", siteId: "294306", zoneId: "1482426" }, disable_push: false, disable_refresh: false },
                    { name: "nobid", params: { siteId: "21701499510" }, disable_push: false, disable_refresh: false },
                    { name: "sharethrough", params: { pkey: "e7xpPF8i52X2n4jD3tAh4aNE" }, disable_push: false, disable_refresh: true },
                    { name: "criteo", params: { networkId: "10359" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "300x250", tagid: "753304" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "320x100", tagid: "753308" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "320x50", tagid: "753306" }, disable_push: false, disable_refresh: false },
                ],
                is_fixed_ad: false,
                acceptable_config: {
                    id: "bsa-zone_1588688874806-7_123456",
                    name: "TechieDelight_S2S_Sidebar_ROS_ATF_acceptable",
                    disable_refresh: true,
                    sizemap: [
                        [[0, 0], []],
                        [[765, 0], [[300, 250]]],
                    ],
                    bidders: [{ name: "appnexus", params: { placementId: "17862251", member: "8394" }, disable_push: false, disable_refresh: true }],
                },
            },
            "bsa-zone_1588688874806-0_123456": {
                id: "bsa-zone_1588688874806-0_123456",
                name: "TechieDelight_S2S_Sidebar_ROS_BTF",
                disable_refresh: false,
                sizemap: [
                    [
                        [0, 0],
                        [
                            [300, 250],
                            [320, 50],
                            [320, 100],
                        ],
                    ],
                    [[765, 0], [[300, 250]]],
                ],
                bidders: [
                    { name: "appnexus", params: { placementId: "17448785", member: "8394" }, disable_push: false, disable_refresh: false },
                    { name: "rubicon", params: { accountId: "18812", siteId: "294306", zoneId: "1482428" }, disable_push: false, disable_refresh: false },
                    { name: "nobid", params: { siteId: "21701499510" }, disable_push: false, disable_refresh: false },
                    { name: "sharethrough", params: { pkey: "vPBBfbxxN1UVsR66TFkpSuq4" }, disable_push: false, disable_refresh: true },
                    { name: "criteo", params: { networkId: "10359" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "300x250", tagid: "753310" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "320x100", tagid: "753314" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "320x50", tagid: "753312" }, disable_push: false, disable_refresh: false },
                ],
                is_fixed_ad: false,
                acceptable_config: {
                    id: "bsa-zone_1583102345202-0_123456",
                    name: "TechieDelight_S2S_Sidebar_ROS_BTF_acceptable",
                    disable_refresh: true,
                    sizemap: [
                        [[0, 0], []],
                        [[765, 0], [[300, 250]]],
                    ],
                    bidders: [{ name: "appnexus", params: { placementId: "17862251", member: "8394" }, disable_push: false, disable_refresh: true }],
                },
            },
            "bsa-zone_1583102345202-0_123456": {
                id: "bsa-zone_1583102345202-0_123456",
                name: "TechieDelight_S2S_Leaderboard_ROS_BTF",
                disable_refresh: false,
                sizemap: [
                    [
                        [0, 0],
                        [
                            [320, 100],
                            [320, 50],
                            [300, 250],
                        ],
                    ],
                    [[770, 0], [[728, 90]]],
                ],
                bidders: [
                    { name: "appnexus", params: { placementId: "17448785", member: "8394" }, disable_push: false, disable_refresh: false },
                    { name: "rubicon", params: { accountId: "18812", siteId: "294306", zoneId: "1482428" }, disable_push: false, disable_refresh: false },
                    { name: "nobid", params: { siteId: "21701499510" }, disable_push: false, disable_refresh: false },
                    { name: "sharethrough", params: { pkey: "Qumo2Kgqj2yBkkKcfT4yZSD2" }, disable_push: false, disable_refresh: true },
                    { name: "criteo", params: { networkId: "10359" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "300x250", tagid: "753298" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "320x100", tagid: "753302" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "320x50", tagid: "753300" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "728x90", tagid: "753295" }, disable_push: false, disable_refresh: false },
                ],
                is_fixed_ad: false,
                acceptable_config: null,
            },
            "bsa-zone_1584214370799-0_123456": {
                id: "bsa-zone_1584214370799-0_123456",
                name: "TechieDelight_S2S_Sidebar_ROS_4",
                disable_refresh: false,
                sizemap: [
                    [
                        [0, 0],
                        [
                            [300, 250],
                            [320, 50],
                            [320, 100],
                        ],
                    ],
                    [
                        [765, 0],
                        [
                            [300, 250],
                            [300, 600],
                        ],
                    ],
                ],
                bidders: [
                    { name: "appnexus", params: { placementId: "17448785", member: "8394" }, disable_push: false, disable_refresh: false },
                    { name: "rubicon", params: { accountId: "18812", siteId: "294306", zoneId: "1482428" }, disable_push: false, disable_refresh: false },
                    { name: "nobid", params: { siteId: "21701499510" }, disable_push: false, disable_refresh: false },
                    { name: "criteo", params: { networkId: "10359" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "300x250", tagid: "753322" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "300x600", tagid: "753324" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "320x100", tagid: "753328" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "320x50", tagid: "753326" }, disable_push: false, disable_refresh: false },
                ],
                is_fixed_ad: false,
                acceptable_config: {
                    id: "bsa-zone_1584214370799-0_123456",
                    name: "TechieDelight_S2S_Sidebar_ROS_4_acceptable",
                    disable_refresh: true,
                    sizemap: [
                        [
                            [0, 0],
                            [
                                [320, 50],
                                [300, 250],
                            ],
                        ],
                        [[765, 0], [[300, 250]]],
                    ],
                    bidders: [{ name: "appnexus", params: { placementId: "17862251", member: "8394" }, disable_push: false, disable_refresh: true }],
                },
            },
            "bsa-zone_1588428247729-0_123456": {
                id: "bsa-zone_1588428247729-0_123456",
                name: "TechieDelight_S2S_Sidebar_ROS_3",
                disable_refresh: false,
                sizemap: [
                    [
                        [0, 0],
                        [
                            [320, 50],
                            [320, 100],
                            [300, 250],
                        ],
                    ],
                    [[765, 0], [[300, 250]]],
                ],
                bidders: [
                    { name: "appnexus", params: { placementId: "17448785", member: "8394" }, disable_push: false, disable_refresh: false },
                    { name: "rubicon", params: { accountId: "18812", siteId: "294306", zoneId: "1482428" }, disable_push: false, disable_refresh: false },
                    { name: "nobid", params: { siteId: "21701499510" }, disable_push: false, disable_refresh: false },
                    { name: "criteo", params: { networkId: "10359" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "300x250", tagid: "753316" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "320x100", tagid: "753318" }, disable_push: false, disable_refresh: false },
                    { name: "sovrn", params: { size: "320x50", tagid: "753320" }, disable_push: false, disable_refresh: false },
                ],
                is_fixed_ad: false,
                acceptable_config: {
                    id: "bsa-zone_1588428247729-0_123456",
                    name: "TechieDelight_S2S_Sidebar_ROS_3_acceptable",
                    disable_refresh: true,
                    sizemap: [
                        [[0, 0], []],
                        [[765, 0], [[300, 250]]],
                    ],
                    bidders: [{ name: "appnexus", params: { placementId: "17862251", member: "8394" }, disable_push: false, disable_refresh: true }],
                },
            },
        },
        publisher: "techiedelight",
        refresh_interval: 180,
        refresh_rules: { countLimit: 200, respectViewability: true },
    });
})();
