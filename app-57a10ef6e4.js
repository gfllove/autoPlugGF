/** *** */
!function(e) {
	function t(i) {
		if (n[i])
			return n[i].exports;
		var s = n[i] = {
			exports : {},
			id : i,
			loaded : !1
		};
		return e[i].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
	}// webpackBootstrap
	/** *** */
	var n = {};
	return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	var s = n(1), a = (i(s), n(63)), o = (i(a), n(64)), r = (i(o), n(65)), c = (i(r), n(66)), l = i(c), u = n(67), d = i(u), p = n(68), f = i(p), g = n(70), h = i(g), v = n(71), m = i(v), y = n(72), _ = i(y), S = n(73), I = i(S), T = n(74), b = i(T), k = n(75), E = i(k), C = n(76), w = i(C), O = n(77), P = i(O), A = n(78), M = i(A), N = n(79), $ = i(N), R = n(80), D = i(R), j = n(81), x = i(j), L = n(82), U = i(L), G = n(83), F = i(G), B = n(84), q = i(B), Y = n(85), V = i(Y), H = n(86), z = i(H), K = n(87), W = i(K), Q = n(88), J = i(Q), X = n(89), Z = i(X), ee = n(91), te = i(ee), ne = n(92), ie = i(ne), se = n(93), ae = i(se), oe = n(94), re = i(oe), ce = n(95), le = i(ce), ue = n(96), de = i(ue), pe = n(97), fe = i(pe), ge = n(98), he = i(ge), ve = n(99), me = i(ve), ye = n(100), _e = i(ye), Se = n(101), Ie = i(Se), Te = n(102), be = i(Te), ke = n(103), Ee = i(ke), Ce = n(104), we = i(Ce), Oe = n(105), Pe = i(Oe), Ae = n(106), Me = i(Ae), Ne = n(107), $e = i(Ne), Re = n(108), De = i(Re), je = n(109), xe = i(je), Le = n(110), Ue = i(Le), Ge = n(111), Fe = i(Ge), Be = n(112), qe = i(Be), Ye = n(113), Ve = i(Ye), He = n(114), ze = i(He), Ke = n(115), We = i(Ke);
	angular.module(
			"clickeggs.manager.web",
			["ngAnimate", "ngSanitize", "ui.router", "LocalStorageModule",
					"clickeggs.manager", "clickeggs.manager.web.config",
					"angularFileUpload"]).factory("httpInterceptor",
			l["default"]).config(d["default"]).config(f["default"]).service(
			"statusTipService", q["default"]).service("statusConfirmService",
			V["default"]).service("screenShotService", z["default"]).service(
			"messageTemplateService", W["default"]).service(
			"chatPluginService", J["default"]).service("webMainService",
			Z["default"]).service("notificationService", te["default"])
			.service("chatToClientService", ie["default"]).service(
					"sendVirtualCallService", ae["default"]).directive(
					"userState", m["default"]).directive("userInfo",
					_["default"]).directive("chatMessage", I["default"])
			.directive("chatMessageImage", b["default"]).directive("starSpan",
					E["default"]).directive("uploadImg", w["default"])
			.directive("transferPanel", P["default"]).directive("quickComment",
					M["default"]).directive("managerGroup", $["default"])
			.directive("groupInfo", he["default"]).directive("clientInfo",
					me["default"]).directive("clientTradeInfo", _e["default"])
			.directive("accountInfo", Ie["default"]).directive(
					"restoreAccountInfo", be["default"]).directive(
					"openAccountStep", Ee["default"]).directive("optionInfo",
					we["default"]).directive("chatPluginPanel", Pe["default"])
			.directive("notification", Me["default"]).directive(
					"systemSetting", $e["default"]).directive(
					"pluginContainer", De["default"]).directive("starLevel",
					xe["default"]).directive("questionnaire", Ue["default"])
			.directive("ionRadioFix", Fe["default"]).directive("examCenter",
					qe["default"]).directive("myExam", Ve["default"])
			.directive("clientItem", ze["default"]).directive("bookingAccount",
					We["default"]).controller("LoginController", re["default"])
			.controller("MainController", le["default"]).controller(
					"OrderController", de["default"]).controller(
					"ContactController", fe["default"]).controller(
					"ChatMessageController", D["default"]).controller(
					"ChatMessageImageController", x["default"]).controller(
					"NotificationController", U["default"]).controller(
					"ClientController", F["default"]).run(h["default"])
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = n(2), a = (i(s), n(47)), o = i(a), r = n(48), c = i(r), l = n(49), u = i(l), d = n(50), p = i(d), f = n(51), g = i(f), h = n(52), v = i(h), m = n(54), y = i(m), _ = n(55), S = i(_), I = n(56), T = i(I), b = n(57), k = i(b), E = n(58), C = i(E), w = n(59), O = i(w), P = n(60), A = i(P), M = n(61), N = i(M), $ = n(62), R = i($);
	t["default"] = angular.module("clickeggs.manager", ["clickeggs.common"])
			.service("managerService", c["default"]).service(
					"accountApiService", o["default"]).service(
					"transferGroupService", u["default"]).service(
					"authorizeService", p["default"]).service("mainService",
					g["default"]).service("managerRecentContactService",
					v["default"]).service("orderService", y["default"])
			.service("quickCommentService", S["default"]).service(
					"productPromotionService", T["default"]).service(
					"openAccountService", k["default"]).service(
					"notificationPushService", C["default"]).service(
					"starLevelService", O["default"]).service(
					"accountSearchService", A["default"]).service(
					"contactListService", N["default"]).service(
					"managerSensorReportService", R["default"]), e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = n(3), a = (i(s), n(4)), o = i(a), r = n(8), c = i(r), l = n(9), u = i(l), d = n(10), p = i(d), f = n(11), g = i(f), h = n(12), v = i(h), m = n(14), y = i(m), _ = n(15), S = i(_), I = n(16), T = i(I), b = n(17), k = i(b), E = n(19), C = i(E), w = n(13), O = i(w), P = n(20), A = i(P), M = n(18), N = i(M), $ = n(21), R = i($), D = n(23), j = i(D), x = n(24), L = i(x), U = n(25), G = i(U), F = n(27), B = i(F), q = n(28), Y = i(q), V = n(29), H = i(V), z = n(30), K = i(z), W = n(32), Q = i(W), J = n(33), X = i(J), Z = n(34), ee = i(Z), te = n(35), ne = i(te), ie = n(36), se = i(ie), ae = n(37), oe = i(ae), re = n(38), ce = i(re), le = n(40), ue = i(le), de = n(41), pe = i(de), fe = n(42), ge = i(fe), he = n(43), ve = i(he), me = n(44), ye = i(me), _e = n(45), Se = i(_e), Ie = n(46), Te = i(Ie), be = angular
			.module("clickeggs.common", ["clickeggs.common.config"])
			.config(o["default"]).constant("ChannelType", c["default"])
			.constant("RatingValue", u["default"]).constant("UserRisk",
					p["default"]).constant("ServiceRegId", g["default"])
			.factory("UtilFunctions", function() {
						return N["default"]
					}).factory("Client", function() {
						return v["default"]
					}).factory("Contact", function() {
						return y["default"]
					}).factory("Group", function() {
						return S["default"]
					}).factory("Manager", function() {
						return T["default"]
					}).factory("Message", function() {
						return k["default"]
					}).factory("Order", function() {
						return C["default"]
					}).factory("User", function() {
						return O["default"]
					}).factory("api", R["default"]).factory("apiConfig",
					j["default"]).service("parrotService", H["default"])
			.service("chatUserService", K["default"]).service(
					"chatGroupService", Q["default"]).service("messageService",
					X["default"]).service("weiShopService", ee["default"])
			.service("modelFactory", A["default"]).service("debugService",
					L["default"]).service("deviceService", G["default"])
			.service("httpCacheService", Y["default"]).service("timerService",
					B["default"]).service("msgPushRegisterService",
					ne["default"])
			.service("sensorReportService", se["default"]).service(
					"newTipService", oe["default"]).service(
					"chatPluginManager", ce["default"]).service(
					"typingNotification", ue["default"]).directive(
					"replaceUrl", pe["default"]).directive("errSrc",
					ge["default"]).directive("loadImg", ve["default"])
			.directive("scrollEnd", ye["default"]).directive("newTip",
					Se["default"]).directive("clickOutside", Te["default"]);
	t["default"] = be, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	angular.module("clickeggs.common.config", []).constant("rootUrl",
			"https://key.gf.com.cn").constant("rootAWS",
			"https://key.gf.com.cn").constant("rootClickeggs",
			"https://clickeggs.gf.com.cn").constant("appId",
			"clickeggs.gf.com.cn").constant("appName", "clickeggs-dist")
			.constant("avatarUrl", "https://clickeggs.gf.com.cn").constant(
					"pnsServer", "https://chat.gf.com.cn").constant(
					"connServer", "https://conn1.gf.com.cn").constant(
					"msgPushServer", "https://push.gf.com.cn").constant(
					"uploadImgServer", "https://storage.gf.com.cn").constant(
					"storeUrl", "https://store.gf.com.cn").constant("shopUrl",
					"https://gold.gf.com.cn").constant("robotUrl",
					"https://robot.gf.com.cn").constant("dictionaryUrl",
					"https://ask.gf.com.cn").constant("examCenter",
					"http://lmsexam.gf.com.cn").constant("increaseCash",
					"https://store.gf.com.cn").constant("supportUrl",
					"https://support.gf.com.cn").constant("socketTimeout", 30)
			.constant("sensorLog", !1).constant("devMode", !1)
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = n(5), a = i(s), o = n(6), r = i(o), c = n(7), l = i(c);
	t["default"] = ["$provide", function(e) {
		"ngInject";
		e.decorator("$location", a["default"]), e.decorator("$log",
				r["default"]), e.decorator("$http", l["default"])
	}], e.exports = t["default"]
}, function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
				value : !0
			}), t["default"] = ["$delegate", function(e) {
		"ngInject";
		var t = e.search;
		return e.search = function() {
			for (var n = arguments.length, i = Array(n), s = 0; n > s; s++)
				i[s] = arguments[s];
			var a = _.trimLeft(location.search, "?");
			return 0 === i.length && _.isEmpty(t.apply(e)) && "" !== a
					&& t.apply(e, [a]), t.apply(e, i)
		}, e
	}], e.exports = t["default"]
}, function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
				value : !0
			}), t["default"] = ["$delegate", function(e) {
				"ngInject";
				var t = e.debug, n = (Array.prototype.slice, !0);
				return e.debug = function() {
					for (var i = arguments.length, s = Array(i), a = 0; i > a; a++)
						s[a] = arguments[a];
					if (n) {
						var o = (new Date).format("hh:mm:ss_S");
						t.apply(e, [o].concat(s))
					}
				}, e.setDebug = function(e) {
					n = !!e
				}, e
			}], e.exports = t["default"]
}, function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var n = function() {
		function e(e, t) {
			var n = [], i = !0, s = !1, a = void 0;
			try {
				for (var o, r = e[Symbol.iterator](); !(i = (o = r.next()).done)
						&& (n.push(o.value), !t || n.length !== t); i = !0);
			} catch (c) {
				s = !0, a = c
			} finally {
				try {
					!i && r["return"] && r["return"]()
				} finally {
					if (s)
						throw a
				}
			}
			return n
		}
		return function(t, n) {
			if (Array.isArray(t))
				return t;
			if (Symbol.iterator in Object(t))
				return e(t, n);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}
	}();
	t["default"] = ["$delegate", "deviceService", "$q", function(e, t, i) {
		"ngInject";
		var s = t.browser, a = location.host.split(":"), o = n(a, 2), r = o[0], c = o[1], l = location.protocol, u = s.msie
				&& (s.version.match(/8(\.*)/) || s.version.match(/9(\.*)/))
				&& "undefined" != typeof XDomainRequest, d = function(e, t, n) {
			var s = null;
			if ("undefined" != typeof XDomainRequest
					&& (s = new XDomainRequest, s.open(e, t)), !s)
				throw new Error("What the hell is this browser?");
			var a = i.defer();
			return s.onload = function() {
				var n = s.responseText;
				try {
					n = JSON.parse(n)
				} catch (i) {
					console.warn("JSON.parse error", i, s.responseText)
				}
				var o = {
					data : n,
					config : {
						url : t,
						method : e,
						status : 200,
						statusText : "ok"
					}
				};
				a.resolve(o)
			}, s.onerror = function() {
				var n = {
					data : "",
					config : {
						url : t,
						method : e,
						status : null,
						statusText : "fail"
					}
				};
				a.reject(n)
			}, s.onprogress = function() {
			}, s.ontimeout = function() {
			}, n
					? (n = "object" == typeof n ? JSON.stringify(n) : n, s
							.send(n))
					: s.send(), a.promise
		}, p = function(e) {
			if (_.startsWith(e, "http")) {
				var t = e.split("//"), i = n(t, 2), s = i[0], a = i[1], o = a
						.split("/")[0].split(":"), d = n(o, 2), p = d[0], f = d[1];
				return u ? "" + l + r != "" + s + p : "" + l + r + c != "" + s
						+ p + f
			}
			return !1
		}, f = function(e, t) {
			if (!t)
				return e;
			var n = e.split("?"), i = n.length > 1 ? _.reduce(_.map(n[1]
									.split("&"), function(e) {
								return e.split("=")
							}), function(e, t) {
						return e[t[0]] = t[1], e
					}, {}) : {}, s = _.reduce(_.extend(i, t),
					function(e, t, n) {
						return e += "&" + n + "=" + t
					}, "");
			return s ? n[0] + "?" + s.substring(1) : e
		}, g = u ? function(t) {
			return p(t.url) ? d(t.method, f(t.url, t.params), t.data) : e.call(
					e, t)
		} : e;
		return u
				&& _.each(["get", "head", "delete", "jsonp", "post", "put",
								"patch"], function(t) {
							g[t] = function() {
								for (var n = arguments.length, i = Array(n), s = 0; n > s; s++)
									i[s] = arguments[s];
								return p(i[0]) ? d(t, i[0], i[1]) : e[t].apply(
										e, i)
							}
						}), g
	}], e.exports = t["default"]
}, function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
				value : !0
			}), t["default"] = {
		MOBILE_IMEI : "mobile_imei",
		WECHAT : "wechat",
		WECHAT_APP : "wxxcx1",
		ETRADE : "e-trade",
		GFZQ_APP : "gfzq-app",
		LICAI_APP : "gfzq-licai",
		QRCODE : "qrcode",
		GF_HK_YTJ : "gfhkytj",
		OTHERS : "others"
	}, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
				value : !0
			}), t["default"] = {
		DEFAULT : 4,
		EXCELLENT : 3,
		SUCK : 1,
		EXCELLENT_TEXT : "满意",
		SUCK_TEXT : "不满意"
	}, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
				value : !0
			}), t["default"] = {
		0 : "未做风险测评",
		1 : "保守型",
		2 : "谨慎型",
		3 : "稳健型",
		4 : "积极型",
		5 : "进取型",
		"未做风险测评" : 0,
		"保守型" : 1,
		"谨慎型" : 2,
		"稳健型" : 3,
		"积极型" : 4,
		"进取型" : 5,
		RISK_BASE : 242
	}, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
				value : !0
			}), t["default"] = {
		GF_STOCK_WIKI : "service_provider_gf_stock_wiki"
	}, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	function s(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	function a(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError("Super expression must either be null or a function, not "
					+ typeof t);
		e.prototype = Object.create(t && t.prototype, {
					constructor : {
						value : e,
						enumerable : !1,
						writable : !0,
						configurable : !0
					}
				}), t
				&& (Object.setPrototypeOf
						? Object.setPrototypeOf(e, t)
						: e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var o = function(e, t, n) {
		for (var i = !0; i;) {
			var s = e, a = t, o = n;
			i = !1, null === s && (s = Function.prototype);
			var r = Object.getOwnPropertyDescriptor(s, a);
			if (void 0 !== r) {
				if ("value" in r)
					return r.value;
				var c = r.get;
				return void 0 === c ? void 0 : c.call(o)
			}
			var l = Object.getPrototypeOf(s);
			if (null === l)
				return void 0;
			e = l, t = a, n = o, i = !0, r = l = void 0
		}
	}, r = n(13), c = i(r), l = n(8), u = i(l), d = function(e) {
		function t(e) {
			s(this, t), o(Object.getPrototypeOf(t.prototype), "constructor",
					this).call(this, new c["default"]), _.assign(this, {
						name : "游客",
						type : c["default"].TYPE_ANONYMOUS,
						channel : u["default"].OTHERS,
						id : void 0,
						isSignContract : "no",
						token : "",
						starLevel : void 0,
						invitation : "others",
						isBlackList : "no"
					}, e)
		}
		return a(t, e), t
	}(c["default"]);
	t["default"] = d, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), s = function() {
		function e(t) {
			n(this, e), _.assign(this, {
						id : null,
						name : null,
						type : "",
						pnsId : null,
						mobile : null,
						avatar : ""
					}, t)
		}
		return i(e, [{
							key : "isManager",
							value : function() {
								return this.type === e.TYPE_JYS
							}
						}]), e
	}();
	s.TYPE_JYS = "jys", s.TYPE_IMEI = "mobile_imei", s.TYPE_MOBILE = "mobile", s.TYPE_TRADE = "trade", s.TYPE_WECHAT = "wechat", s.TYPE_PORTAL = "portal", s.TYPE_PORTAL_LOGIN = "portal_login", s.TYPE_ANONYMOUS = "anonymous", s.TYPE_OPEN_ACCOUNT = "openaccount", s.TYPE_WECHAT_APP = "wechatapp", t["default"] = s, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), s = function() {
		function e(t) {
			n(this, e), _.assign(this, {
						id : void 0,
						pnsId : "",
						name : "",
						createTime : void 0,
						type : "",
						avatar : "",
						messages : [],
						unreadMessages : [],
						unread : 0,
						groupType : void 0,
						orderId : void 0,
						orderType : void 0,
						orderState : void 0,
						orderDesc : void 0,
						starLevel : void 0,
						isBlackList : "no",
						gender : void 0
					}, t), this.avatar
					|| (this.avatar = e.getDefaultAvatar(this.type))
		}
		return i(e, [{
							key : "isGroup",
							value : function() {
								return this.type === e.TYPE_GROUP
							}
						}]), e
	}();
	s.setDefaultAvatar = function(e, t) {
		a[e] = t
	}, s.getDefaultAvatar = function(e) {
		return a[e]
	};
	var a = {};
	s.TYPE_USER = "user", s.TYPE_CLIENT = "client", s.TYPE_MANAGER = "manager", s.TYPE_GROUP = "group", s.TYPE_ORDER = "order", s.TYPE_SYSTEM = "system", s.TYPE_SERVICE = "service_provider", s.TYPE_INFORMATION = "item_type_information", s.TYPE_BOOKING = "item_type_booking", s.TYPE_RESTORE = "item_type_restore", s.TYPE_NOTICE = "item_type_notice", s.TYPE_KNOWLEDGE = "item_type_knowledge", s.TYPE_REPORT = "item_type_report", s.TYPE_ACCOUNT = "item_type_openaccount", t["default"] = s, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var i = function s(e) {
		n(this, s), _.assign(this, {
					groupId : "",
					groupName : "",
					groupType : 0,
					creator : "",
					members : [],
					groupDescription : "",
					tags : [],
					avatar : ""
				}, e), this.groupType = parseInt(this.groupType)
	};
	i.TYPE_DISCUSSION_GROUP = 0, i.TYPE_NORMAL_GROUP = 1, t["default"] = i, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	function s(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	function a(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError("Super expression must either be null or a function, not "
					+ typeof t);
		e.prototype = Object.create(t && t.prototype, {
					constructor : {
						value : e,
						enumerable : !1,
						writable : !0,
						configurable : !0
					}
				}), t
				&& (Object.setPrototypeOf
						? Object.setPrototypeOf(e, t)
						: e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var o = function(e, t, n) {
		for (var i = !0; i;) {
			var s = e, a = t, o = n;
			i = !1, null === s && (s = Function.prototype);
			var r = Object.getOwnPropertyDescriptor(s, a);
			if (void 0 !== r) {
				if ("value" in r)
					return r.value;
				var c = r.get;
				return void 0 === c ? void 0 : c.call(o)
			}
			var l = Object.getPrototypeOf(s);
			if (null === l)
				return void 0;
			e = l, t = a, n = o, i = !0, r = l = void 0
		}
	}, r = n(13), c = i(r), l = function(e) {
		function t(e) {
			s(this, t), o(Object.getPrototypeOf(t.prototype), "constructor",
					this).call(this, new c["default"]), _.assign(this, {
						token : ""
					}, e)
		}
		return a(t, e), t
	}(c["default"]);
	l.QUALIFICATION_CONSULTANT = "consultant", l.QUALIFICATION_NONE = "none", t["default"] = l, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	function s(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var a = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), o = n(18), r = n(11), c = i(r), l = function() {
		function e(t) {
			s(this, e), _.assign(this, {
						id : o.uuid("local"),
						temp : !1,
						timestamp : 0,
						type : "",
						status : e.STATUS_SENT,
						from : "",
						to : "",
						groupId : void 0,
						content : ""
					}, t)
		}
		return a(e, [{
					key : "isLocal",
					value : function() {
						var e = this.id;
						return !("string" == typeof e && 0 !== e
								.indexOf("local"))
					}
				}, {
					key : "isTemp",
					value : function() {
						return !!this.temp
					}
				}, {
					key : "isGroup",
					value : function() {
						return !!this.groupId || 0 === this.to.indexOf("group")
					}
				}, {
					key : "getText",
					value : function() {
						var t = "", n = this.content;
						switch (this.type) {
							case e.TYPE_RATING :
								t = "客户已评价：" + n.text;
								break;
							case e.TYPE_TELEPHONE :
								t = "客户电话：" + n;
								break;
							case e.TYPE_PRODUCT :
								t = ["[", n.name, "]"].join("");
								break;
							case e.TYPE_DICTIONARY :
								t = ["[", n.title, "]"].join("");
								break;
							case e.TYPE_SERVICE :
								t = this._getServiceText();
								break;
							case e.TYPE_ACCOUNT :
								t = "[邀请开户]";
								break;
							case e.TYPE_IMAGE :
								t = "[图片]";
								break;
							case e.TYPE_INVITE_RATING :
								t = "[邀请评价]";
								break;
							case e.TYPE_RECOMMEND :
								t = n.name ? "[" + n.name + "]" : ["[",
										n.title, "]"].join("");
								break;
							default :
								t = n.text || n
						}
						return t
					}
				}, {
					key : "_getServiceText",
					value : function() {
						var e = "", t = this.content;
						switch (this.from) {
							case c["default"].GF_STOCK_WIKI :
								e = t.actionDesc
						}
						return e
					}
				}, {
					key : "getThumbUrl",
					value : function() {
						var t = arguments.length <= 0
								|| void 0 === arguments[0]
								? "width"
								: arguments[0], n = arguments.length <= 1
								|| void 0 === arguments[1]
								? "240"
								: arguments[1];
						if (this.type !== e.TYPE_IMAGE)
							return "";
						var i = this.content.variations, s = null;
						return i && i.length > 0 && (s = _.find(i, function(e) {
									return e[t] === n
								})), s ? s.link : this.content.link
					}
				}]), e
	}();
	l.TYPE_TEXT = "message", l.TYPE_DICTIONARY = "dictionary", l.TYPE_SERVICE = "service_provider_article", l.TYPE_PRODUCT = "product", l.TYPE_RATING = "rating", l.TYPE_SYSTEM = "system", l.TYPE_NOTICE = "notice", l.TYPE_EXAM_CENTER = "exam", l.TYPE_ACCOUNT = "openAccount", l.TYPE_LOGIN = "invite-login", l.TYPE_INVITE_RATING = "invite-rating", l.TYPE_SMART_ANSWER = "smart-answer", l.NON_SIGNIN = "system.legality.NON_SIGNIN", l.NON_AGREEMENT = "system.legality.NON_AGREEMENT", l.DISQUALIFIED = "system.legality.DISQUALIFIED", l.GF_PORTAL_LOGIN = "system.login.GF_PORTAL", l.TYPE_AGREEMENT = "sign-agreement", l.TYPE_IMAGE = "image", l.TYPE_RECOMMEND = "recommend", l.TYPE_RISK_LEVEL = "riskLevel", l.TYPE_DEBUG = "debug", l.TYPE_PHONE = "phone", l.TYPE_TELEPHONE = "telphone", l.TYPE_TRANSFER_MARK = "__TRANSFER__", l.TYPE_TRANSFER = "transfer_text", l.STATUS_SENDING = 0, l.STATUS_SENT = 1, l.STATUS_FAIL = 2, l.STATUS_STOCK_FAIL = 3, l.STATUS_STOCK_SERVICE_FAIL = 4, l.STATUS_NO_SEND = 5, t["default"] = l, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n(e) {
		var t = /^1\d{2}[0-9|*]{4}\d{4}$/;
		return !(!e || !t.test(e))
	}
	function i(e) {
		return !(!e || !/^1\d{10}$/.test(e))
	}
	function s(e) {
		for (var t = {}, n = _.keys(e), i = 0, s = n.length; s > i; i++)
			t[_.camelCase(n[i])] = e[n[i]];
		return t
	}
	function a(e, t, n) {
		void 0 === e && (e = {}), void 0 === t && (t = []);
		var i = {}, s = e.$inject;
		if (s && t.length >= s.length)
			for (var a = 0, o = s.length; o > a; a++)
				i[s[a]] = t[a];
		return n && _.assign(n, i), i
	}
	function o(e, t) {
		if (!e || 0 === e)
			return "";
		var n, i = new Date(e), s = new Date, a = s - i, o = Math.ceil(Math
				.abs(s.getTime() - e)
				/ 1e3);
		return O >= a && s.getDate() - i.getDate() === 0 ? (n = i
				.format("hh:mm"), t
				&& (60 > o ? n = o + "秒前" : 3600 > o
						&& (n = Math.round(o / 60) + "分前"))) : n = i
				.format("MM-dd"), n
	}
	function r(e, t) {
		if (!e || 0 === e)
			return "";
		var n, i = new Date(e), s = new Date, a = s - i, o = Math.ceil(Math
				.abs(s.getTime() - e)
				/ 1e3);
		return O >= a && s.getDate() - i.getDate() === 0 ? (n = i
				.format("hh:mm"), t
				&& (60 > o ? n = o + "秒前" : 3600 > o
						&& (n = Math.round(o / 60) + "分前"))) : n = s.getDate()
				- i.getDate() === 1 ? "昨天" : i.format("MM-dd"), n
	}
	function c(e) {
		return _.isString(e) && (e = Number(e)), 10 > e ? "0" + e : e
	}
	function l(e) {
		var t = parseFloat(e) / 1e3;
		return t = null != t && "" != t ? t > 60 && 3600 > t
				? "00:"
						+ c(parseInt(t / 60))
						+ ":"
						+ c(parseInt(60
								* (parseFloat(t / 60) - parseInt(t / 60))))
				: t >= 3600 && 86400 > t ? c(parseInt(t / 3600))
						+ ":"
						+ c(parseInt(60
								* (parseFloat(t / 3600) - parseInt(t / 3600))))
						+ ":"
						+ c(parseInt(60
								* (parseFloat(60
										* (parseFloat(t / 3600) - parseInt(t
												/ 3600))) - parseInt(60
										* (parseFloat(t / 3600) - parseInt(t
												/ 3600)))))) : "00:00:"
						+ c(parseInt(t)) : "00:00:00"
	}
	function u(e, t) {
		if ("function" != typeof e)
			throw new Error("Param callback must be a function.");
		("number" != typeof t || 0 > t) && (t = 3e4);
		var n = !1, i = setTimeout(function() {
					n || (n = !0, e(new Error("timeout")))
				}, t);
		return function() {
			n || (n = !0, clearTimeout(i), e.apply(this, arguments))
		}
	}
	function d(e, t, n) {
		function i() {
			s || (s = _.slice(arguments, 0)), e.apply(n || this, s)
					? s = null
					: setTimeout(function() {
								i()
							}, t)
		}
		if ("function" != typeof e)
			throw new Error("Param callback must be a function.");
		("number" != typeof t || 0 > t) && (t = 3e3);
		var s = null;
		return i
	}
	function p() {
		var e = arguments.length <= 0 || void 0 === arguments[0]
				? ""
				: arguments[0];
		return [e, f(), f(), "-", f(), "-", f(), "-", f(), "-", f(), f(), f()]
				.join("")
	}
	function f() {
		return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
	}
	function g(e, t) {
		for (var n, i, s = -1, a = e.length, o = {}, r = []; ++s < a;)
			n = e[s], i = t ? t(n, s, e) : n, o[i] || (r.push(n), o[i] = !0);
		return r
	}
	function h(e) {
		for (var t = e.split(",")[0].split(":")[1].split(";")[0], n = atob(e
				.split(",")[1]), i = new ArrayBuffer(n.length), s = new Uint8Array(i), a = 0; a < n.length; a++)
			s[a] = n.charCodeAt(a);
		var o = window.BlobBuilder || window.WebKitBlobBuilder
				|| window.MozBlobBuilder;
		return o
				? (o = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder), o
						.append(i), o.getBlob(t))
				: o = new Blob([i], {
							type : t
						})
	}
	function v(e, t) {
		var n, i, s, a = 0;
		for (t = t ? t.toLowerCase() : "", s = "utf-16" === t || "utf16" === t
				? m
				: y, n = 0, i = e.length; i > n; n++)
			a += s(e.charCodeAt(n));
		return a
	}
	function m(e) {
		return 65535 >= e ? 2 : 4
	}
	function y(e) {
		return 127 >= e ? 1 : 2047 >= e ? 2 : 65535 >= e ? 3 : 4
	}
	function S(e, t, n, i) {
		void 0 === n && (n = -2), void 0 === i && (i = "utf-8"), i = i
				.toLowerCase(), t += 1, n += 1;
		var s, a, o, r = "utf-16" === i || "utf16" === i ? m : y, c = -1, l = 0;
		for (s = 0, a = e.length; a > s
				&& (l += r(e.charCodeAt(s)), !(-1 === c && l >= t && (c = s, -1 === n))); s++)
			if (!o && -1 !== n && l >= n) {
				o = s - 1;
				break
			}
		return e.substring(c, o)
	}
	function I(e) {
		return "string" == typeof e ? e.replace(/\B_*([A-Z])/g, "_$1") : ""
	}
	function T(e) {
		return e.replace(/_t=.+(?=&)&?/, "")
				+ (e.indexOf("?") > 0 ? "&_t=" : "?_t=") + (new Date).getTime()
	}
	function b(e) {
		return e && "function" == typeof e.then
	}
	function k(e, t, n) {
		if (!e || !t)
			return e;
		if (n = "string" == typeof n ? n : "...", e.length > t) {
			var i = t - n.length;
			return i = i > 0 ? i : 0, e.slice(0, i) + n
		}
		return e
	}
	function E(e) {
		if (!document.cookie)
			return e ? void 0 : {};
		var t = _.reduce(document.cookie.replace(/\s/g, "").split(";"),
				function(e, t) {
					var n = t.split("=");
					return e[n[0]] = n[1], e
				}, {});
		return e ? t[e] : t
	}
	function C(e) {
		return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g,
				"&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
	}
	function w(e) {
		return e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g,
				"&").replace(/&quot;/g, '"').replace(/&apos;/g, "'")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			}), t.isPhoneNumber = n, t.isPurePhoneNumber = i, t.camelCaseObject = s, t.resolveInject = a, t.getFriendlyTime = o, t.getFriendlyTime2 = r, t.millisecondToDate = l, t.timeoutCallback = u, t.retryCallback = d, t.uuid = p, t.uniqueArray = g, t.dataURIToBlob = h, t.sizeof = v, t.byteSubstring = S, t.underScoreCase = I, t.addRandomParamToUrl = T, t.isPromise = b, t.sliceStr = k, t.getCookie = E, t.htmlEscape = C, t.htmlUnescape = w;
	var O = 864e5;
	t["default"] = {
		isPhoneNumber : n,
		isPurePhoneNumber : i,
		camelCaseObject : s,
		resolveInject : a,
		getFriendlyTime : o,
		getFriendlyTime2 : r,
		millisecondToDate : l,
		timeoutCallback : u,
		retryCallback : d,
		uuid : p,
		uniqueArray : g,
		dataURIToBlob : h,
		sizeof : v,
		byteSubstring : S,
		underScoreCase : I,
		addRandomParamToUrl : T,
		isPromise : b,
		getCookie : E
	}, Date.prototype.format || (Date.prototype.format = function(e) {
		var t = {
			"M+" : this.getMonth() + 1,
			"d+" : this.getDate(),
			"h+" : this.getHours(),
			"m+" : this.getMinutes(),
			"s+" : this.getSeconds(),
			"q+" : Math.floor((this.getMonth() + 3) / 3),
			S : this.getMilliseconds()
		};
		/(y+)/.test(e)
				&& (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4
								- RegExp.$1.length)));
		for (var n in t)
			new RegExp("(" + n + ")").test(e)
					&& (e = e.replace(RegExp.$1, 1 === RegExp.$1.length
									? t[n]
									: ("00" + t[n]).substr(("" + t[n]).length)));
		return e
	}), String.prototype.toDate || (String.prototype.toDate = function() {
		return new Date(Date.parse(this.replace(/-/g, "/")))
	})
}, function(e, t) {
	"use strict";
	function n(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), s = function() {
		function e(t) {
			n(this, e), _.assign(this, {
						address : "",
						bookingDate : "",
						clientId : "",
						clientName : "",
						clientType : "",
						comeFrom : "",
						department : "",
						description : "",
						differTime : "",
						dispatchType : "",
						dispatchPersons : 0,
						failureLink : "",
						isExclusive : !1,
						khxjxf : "",
						messageId : "",
						messageType : "",
						mobile : null,
						orderId : "",
						relation : !1,
						timestamp : 0,
						qualification : "none",
						orderContent : "",
						orderState : "",
						relationText : ""
					}, t), this.relation && "yes" === this.relation
					? this.relationText = "[专属客户] "
					: this.dispatchType && "transfer" === this.dispatchType
							? this.relationText = "[转让订单] "
							: this.messageType === e.TYPE_OPEN_ACCOUNT
									? this.relationText = "[开户咨询]"
									: this.dispatchPersons = 0
		}
		return i(e, [{
					key : "isTransferOnePerson",
					value : function() {
						return "transfer" === this.dispatchType
								&& 1 === this.dispatchPersons
					}
				}]), e
	}();
	s.TYPE_OPEN_ACCOUNT = "item_type_openaccount", s.TYPE_BOOKING = "item_type_booking", s.TYPE_RESTORE = "item_type_restore", s.TYPE_INFORMATION = "item_type_information", s.TYPE_NOTICE = "item_type_notice", s.TYPE_KNOWLEDGE = "item_type_knowledge", s.TYPE_REPORT = "item_type_report", s.TYPE_OPTION = "item_type_option", t["default"] = s, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	function s(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var a = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), o = n(12), r = i(o), c = n(14), l = i(c), u = n(15), d = i(u), p = n(16), f = i(p), g = n(17), h = i(g), v = n(19), m = i(v), y = n(13), S = i(y), I = n(9), T = i(I), b = n(18), k = function() {
		function e(t) {
			"ngInject";
			s(this, e), this.avatarUrl = t
		}
		return e.$inject = ["avatarUrl"], a(e, [{
			key : "buildUserAvatar",
			value : function(e) {
				return [this.avatarUrl, "/v2/gmsimg/app/", e, "_90x90.jpg"]
						.join("")
			}
		}, {
			key : "createClient",
			value : function(e) {
				return new r["default"](e)
			}
		}, {
			key : "createContact",
			value : function(e) {
				return new l["default"](e)
			}
		}, {
			key : "createGroup",
			value : function(e) {
				return new d["default"](e)
			}
		}, {
			key : "createManager",
			value : function(e) {
				return this._setUserAvatar(new f["default"](e))
			}
		}, {
			key : "createMessage",
			value : function(e) {
				var t = new h["default"](e);
				if (t.content = this._compatibleOldFormat(t.content, t.type), t
						.isGroup())
					if (t.groupId)
						t.to = t.groupId;
					else {
						if (!t.to)
							throw new Error("Must specify groupId or to of Message");
						t.groupId = t.to
					}
				return t
			}
		}, {
			key : "createOrder",
			value : function(e) {
				return new m["default"](e)
			}
		}, {
			key : "createUser",
			value : function(e) {
				return this._setUserAvatar(new S["default"](e))
			}
		}, {
			key : "createContactFromPayload",
			value : function(e) {
				var t, n;
				if (n = e.regInfo || e.groupInfo)
					e.regInfo ? t = new l["default"]({
						id : n.uid,
						pnsId : n.regId,
						name : n.regName,
						avatar : n.iconLink || n.avatar,
						starLevel : n.starLevel,
						clientType : n.clientType,
						channel : n.channel,
						type : n.role || n.clientType || l["default"].TYPE_USER,
						gender : n.gender
					})
							: (t = new l["default"]({
										pnsId : n.groupId,
										name : n.groupName,
										avatar : n.iconLink || n.avatar,
										type : l["default"].TYPE_GROUP,
										groupType : parseInt(n.groupType)
									}), isNaN(t.groupType)
									&& (t.groupType = d["default"].TYPE_NORMAL_GROUP)), "client" === t.type
							&& (t.orderType = n.clientType === S["default"].TYPE_OPEN_ACCOUNT
									? m["default"].TYPE_OPEN_ACCOUNT
									: m["default"].TYPE_INFORMATION), e.lastMessage
							&& t.messages.push(this
									.createMessageFromPayload(e.lastMessage));
				else if (e.clientPnsId || e.orderId)
					t = new l["default"]({
						id : e.clientId,
						name : e.clientName,
						pnsId : e.messageType === m["default"].TYPE_KNOWLEDGE
								|| e.messageType === m["default"].TYPE_REPORT
								? e.orderId
								: e.clientPnsId,
						type : e.clientType === S["default"].TYPE_JYS
								? l["default"].TYPE_MANAGER
								: e.clientType === l["default"].TYPE_SYSTEM
										|| e.messageType === m["default"].TYPE_NOTICE
										? l["default"].TYPE_SYSTEM
										: e.messageType === m["default"].TYPE_INFORMATION
												|| e.messageType === m["default"].TYPE_OPEN_ACCOUNT
												? l["default"].TYPE_CLIENT
												: l["default"].TYPE_ORDER,
						clientType : e.clientType,
						createTime : e.createdAt
					}), e.clientType !== S["default"].TYPE_JYS
							&& (t.starLevel = parseInt(e.khxjxf), t.riskLevel = e.riskLevel, t.orderId = e.orderId, t.orderType = e.messageType, t.orderDesc = e.description, t.orderState = e.orderState);
				else if (e.managerPnsId)
					t = new l["default"]({
								id : e.managerId,
								name : e.managerName,
								pnsId : e.managerPnsId,
								type : l["default"].TYPE_MANAGER,
								avatar : e.avatar,
								exclusive : e.exclusive
							});
				else {
					if (!e.pnsID || !e.clientId)
						throw new Error("Cannot build contact instant, unknown payload.");
					t = new l["default"]({
								id : e.clientId,
								name : e.clientName,
								pnsId : e.pnsID,
								channel : e.channel,
								type : e.clientType === S["default"].TYPE_JYS
										? l["default"].TYPE_MANAGER
										: l["default"].TYPE_CLIENT
							})
				}
				return t.type === l["default"].TYPE_MANAGER && t.id
						? t.avatar = this.buildUserAvatar(t.id)
						: t.avatar
								|| (t.avatar = l["default"]
										.getDefaultAvatar(t.type)), t
			}
		}, {
			key : "createMessageFromPayload",
			value : function(e) {
				var t;
				if ("chat" === e.type || "groupchat" === e.type)
					return t = e.content, new h["default"]({
								id : e.id,
								content : this._compatibleOldFormat(t.message,
										t.type),
								timestamp : e.timestamp,
								type : t.type,
								from : t.from,
								to : t.to || t.groupId,
								groupId : t.groupId
							});
				if ("risk" === e.type)
					return t = e.content, new h["default"]({
								id : e.id,
								content : {
									text : t.message.text,
									type : e.type
								},
								timestamp : (new Date).getTime(),
								type : h["default"].TYPE_SYSTEM,
								from : t.from,
								to : t.to || t.groupId,
								groupId : t.groupId
							});
				if (e.content.data)
					return t = e.content.data, new h["default"]({
								id : e.id,
								content : t.message.content,
								timestamp : t.timestamp,
								type : t.type,
								from : t.from
							});
				throw new Error("Unknown message data")
			}
		}, {
			key : "_compatibleOldFormat",
			value : function(e, t) {
				var n = e;
				switch (t) {
					case h["default"].TYPE_TEXT :
					case h["default"].TYPE_SYSTEM :
						"string" == typeof e && (n = {
							text : e
						});
						break;
					case h["default"].TYPE_ACCOUNT :
						"string" == typeof e && (n = {
							url : e,
							desc : ""
						});
						break;
					case h["default"].TYPE_IMAGE :
						"string" == typeof e && (n = {
							link : e
						});
						break;
					case h["default"].TYPE_RATING :
						"string" == typeof e && (n = {
							value : T["default"][e],
							text : e
						}, console.info("Old rating handled", e, n));
						break;
					default :
						n = e
				}
				return n
			}
		}, {
			key : "createOrderFromPayload", 
			value : function(e) {
				switch (e.message_type) {
					case "restore" :  // TODO 开户流失用户
						e.message_type = m["default"].TYPE_RESTORE;
						break;
					case "booking" :
						e.message_type = m["default"].TYPE_BOOKING;
						break;
					case "information" :
						e.message_type = m["default"].TYPE_INFORMATION;
						break;
					case "notice" :
						e.message_type = m["default"].TYPE_NOTICE;
						break;
					case "openaccount" :
						e.message_type = m["default"].TYPE_OPEN_ACCOUNT
				}
				return new m["default"](b.camelCaseObject(e))
			}
		}, {
			key : "createManagerFromPayload",
			value : function(e) {
				return e = _.pick(e, function(e) {
							return null !== e && "" !== e
						}), e.erpId = e.id, e.id = e.uid, e.mobile = e.phone, e.type = S["default"].TYPE_JYS, "1" === e.tgzg
						&& (e.title = "投资顾问"), delete e.uid, delete e.phone, this
						._setUserAvatar(new f["default"](e))
			}
		}, {
			key : "createUserFromPayload",
			value : function(e) {
				return this._setUserAvatar(new S["default"]({
							id : e.clientId,
							name : e.clientName,
							type : e.clientType,
							pnsId : e.clientPnsId || e.pnsID,
							qualification : e.qualification,
							inService : e.inService,
							login_status : e.login_status
						}))
			}
		}, {
			key : "createGroupFromPayload",
			value : function(e) {
				return this.createGroup(_.assign({}, e, {
							avatar : e.iconLink
									|| l["default"]
											.getDefaultAvatar(l["default"].TYPE_GROUP)
						}))
			}
		}, {
			key : "_setUserAvatar",
			value : function(e) {
				return _.startsWith(e.avatar, "http") ? e : (e.isManager()
						&& (e.avatar = this.buildUserAvatar(e.id)), e)
			}
		}]), e
	}();
	t["default"] = k, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	function s(e, t, n, i, s, o, r) {
		"ngInject";
		function c(t) {
			var s = arguments.length <= 1 || void 0 === arguments[1]
					? {}
					: arguments[1], a = p[t];
			if (!a)
				throw new Error("No request map found, wrong name?");
			var o = ["fragments", "isResponseOK"], u = n.defer(), h = !1, v = _
					.defaultsDeep({}, _.omit(s, o), _.omit(a, o));
			"object" != typeof v.cache && v.cache && (v.cache = g);
			var m = r.request();
			return e(_.assign(v, {
						method : a.method,
						url : l(a.url, _.assign({}, a.fragments, s.fragments))
					})).then(function(e) {
				(h = "function" == typeof a.isResponseOK
						? a.isResponseOK(e)
						: d(e))
						? (r.reportHttpEvent(a, e, m), u.resolve(e))
						: (r.reportHttpEvent(a, e, m), u.reject(e));
				var n = v.cache, s = v.url;
				i.$emit(c.API_EVENT_PREFIX + t, h, e, n && !!f[s]), n
						&& (f[s] = !!n.get(s))
			}, function(e) {
				r.reportHttpEvent(a, e, m), u.reject(e), i.$emit(
						c.API_EVENT_PREFIX + t, !1, e)
			}), u.promise
		}
		function l(e, t) {
			if ("string" != typeof e)
				throw new Error("url must be a string");
			var n = e.split("?"), i = a(n, 2), s = i[0], o = i[1];
			return o || (o = ""), _.each(t, function(e, t) {
						s = s.replace("/:" + t, "/" + e)
					}), s + ("" === o ? "" : "?" + o)
		}
		function u(e) {
			return _.startsWith(e, "http://") || _.startsWith(e, "https://")
		}
		function d(e) {
			var t = e.data;
			if (void 0 !== t.status) {
				if (200 !== parseInt(t.status))
					return !1
			} else if (void 0 !== t.code) {
				if (0 !== parseInt(t.code))
					return !1
			} else if (void 0 !== t.error_no && "0" != t.error_no)
				return !1;
			return !0
		}
		var p = {}, f = {}, g = s.create("__apiCache", {
					capacity : 50
				});
		return c.API_EVENT_PREFIX = "@apiEvent.", c.init = function(e) {
			var t = arguments.length <= 1 || void 0 === arguments[1]
					? {}
					: arguments[1], n = void 0, i = void 0, s = t.root
					? t.root
					: "";
			_.each(e, function(e, t) {
				if ("string" == typeof e && (e = {
					request : e
				}), "string" != typeof e.request)
					throw new Error("No request string provided: " + t + ", "
							+ e);
				if (n = e.request.split(/\s+/), n.length < 2)
					throw new Error("Incorrect format of request: " + e.request);
				i = _.assign({}, e, {
							method : n[0].toUpperCase(),
							url : u(n[1]) ? n[1] : e.root ? e.root + n[1] : s
									+ n[1]
						}), delete i.root, delete i.request, p[t] = i
			})
		}, c.clearCache = function() {
			g.clear(["__apiCache"])
		}, c.init(o), c
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var a = function() {
		function e(e, t) {
			var n = [], i = !0, s = !1, a = void 0;
			try {
				for (var o, r = e[Symbol.iterator](); !(i = (o = r.next()).done)
						&& (n.push(o.value), !t || n.length !== t); i = !0);
			} catch (c) {
				s = !0, a = c
			} finally {
				try {
					!i && r["return"] && r["return"]()
				} finally {
					if (s)
						throw a
				}
			}
			return n
		}
		return function(t, n) {
			if (Array.isArray(t))
				return t;
			if (Symbol.iterator in Object(t))
				return e(t, n);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}
	}();
	t["default"] = s;
	{
		var o = n(22);
		i(o)
	}
	s.$inject = ["$http", "$httpBackend", "$q", "$rootScope",
			"httpCacheService", "apiConfig", "sensorReportService"], e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n(e) {
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			}), t["default"] = n, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n(e, t) {
		e = _.trimRight(e, "/"), e += "/";
		var n = /(.+)\s\//;
		return _.startsWith(location.protocol, "https")
				&& (e = e.replace(/http(s)?:/, location.protocol)), _.each(t,
				function(i, s) {
					"string" == typeof i && (i = t[s] = {
						request : i
					}), i.request = i.request.replace(n, "$1 " + e)
				}), t
	}
	e.exports = ["rootAWS", "rootClickeggs", "dictionaryUrl", "pnsServer",
			"appId", function(e, t, i, s, a) {
				"ngInject";
				return _.assign({}, n(e, {
					ping : "get /im/api/ping",
					getUserInfoByPnsId : {
						request : "get /pnsclient/client/:pnsIds"
					},
					getUserInfoByUserId : {
						request : "get /pnsclient/pnsid/:type/:userIds",
						cache : !0
					},
					getUserIdByErpId : {
						request : "get /v2/unauth/user/:erpId/userid",
						cache : !0
					},
					callFromClient : {
						request : "post /root/callFromClient",
						isResponseOK : function(e) {
							return void 0 !== e.status
									&& (200 !== parseInt(e.status) || e.data.status
											&& "000000" !== e.data.status)
									? !1
									: !0
						}
					},
					newOrder : "post /root/newOrder",
					userToken : "post /server/ws/pub/token/access_token",
					getSessionByToken : "get /server/ws/auth/user/info/default",
					getUserStatus : "post /im/api/user/getUserStatus",
					messageBroadcast : "post /parrot/api/" + a + "/broadcast",
					getAdvList : "get /external/store/adv/list",
					getPnsId : "post /root/pnsId",
					registerAnonymous : "post /im/api/register",
					getManagerInfo : {
						request : "get /im/api/user/info/:pnsId",
						cache : !0
					},
					getPersonalInfo : {
						request : "get /client/personalInfo/:khh",
						cache : !0
					},
					exclusiveManager : "get /client/exclusiveManager/:khh",
					loginPortal : "post /im/api/login",
					receiveCaptcha : "post /im/api/login/ticket",
					getSession : "get /rest/user/session",
					confirmRiskLevel : "post /risk/confirm",
					getMyExclusiveManager : "get /im/api/recentcontacts/myExclusiveManager/:clientId",
					tradeUserLogin : {
						request : "post /server/ws/pub/token/access_token/tradeUser"
					},
					tradeUserRegister : "post /im/api/trade_user_register",
					signAgreement : {
						request : "get /im/api/pnsclient/clientSignContract/:clientPnsid/:managerPnsId"
					},
					getAgreementContent : {
						request : "get /nbop/queryAgmInfo/risk",
						cache : !0
					},
					getESignatureContent : {
						request : "get /nbop/queryAgmInfo/esignature",
						cache : !0
					},
					checkESignature : "get /nbop/queryEsignature",
					applyESignature : "get /nbop/openEsignature",
					nbopSign : "get /nbop/SignAgm",
					loginAgain : "post /nbop/oa/login",
					getUser : {
						request : "post /root/getUser",
						data : {
							version : "2.0"
						}
					},
					getOrders : "post /root/getOrders",
					getRecentClients : {
						request : "get /v2/recentcontacts/myclients/:type/1/:count",
						fragments : {
							type : "all",
							count : 100
						}
					},
					setInService : {
						request : "post /v2/user/IN_SERVICE/:type"
					},
					getSignedClients : "get /v2/client/list/:pageNum/:pageSize",
					getQuickReplyList : "get /v2/quickReply/list",
					updateQuickReply : "put /v2/quickReply/update",
					addQuickReply : "post /v2/quickReply/add",
					deleteQuickReply : "delete /v2/quickReply/delete/:_id",
					grabOrder : "post /v2/order/:orderId/snatchrequest",
					getOrderDetail : {
						request : "get /v2/message/:orderId",
						cache : !0
					},
					getOrderDetailInService : {
						request : "get /v2/message/messageDetail/:orderId",
						cache : !0
					},
					canOrderTransfer : "post /v2/service/checkTransfer",
					transferOrder : "post /v2/service/transferOrder",
					findTransferTargets : {
						request : "get /v2/user/findTransferTarget"
					},
					getMgrScore : {
						request : "get /v2/user/jysMgrScore",
						data : {
							notShowTip : !0
						}
					},
					getTransferOrderMessageHistory : "get /v2/chathistory/findTodayChathistoryList/:clientPnsId_:managerPnsId",
					getPeopleList : "get /v2/contacts",
					searchPeople : "get /v2/contacts/search",
					validAccount : "get /v2/client/validAccount/:account",
					inviteOpenAccount : "post /v2/user/inviteOpenAccount/:clientPnsId",
					oauthLogin : {
						request : "post /server/ws/pub/token/access_token/ownpwd",
						params : {
							login_type : "oa",
							response_type : "token",
							client_id : "inspect",
							redirect_uri : "/ws/auth/user/login"
						}
					},
					oauthLogout : "post /v2/user/logout",
					verifyToken : "get /external/auth/verify-mgr-token",
					getCustomerInfo : {
						request : "get /im/api/pnsclient/clientInfo/:managerPnsId/:clientId"
					},
					getCustomerAssetCondition : {
						request : "post /v2/GMSFacade/102004",
						data : {
							uid : "{userId}",
							appid : "app"
						},
						cache : !0
					},
					getSignContract : "get /api/advisorcontract/clientsigncontract/:clientId",
					whetherRiskEvaluation : "get /risk/isconfirm/:clientPnsId",
					inviteRiskEvaluation : "post /risk/invite",
					toggleOrderPushSetting : "post /v2/user/:pushType/:state",
					getProducts : {
						request : "get https://store.gf.com.cn/product/search",
						params : {
							is_new : "tag_home_top_sell",
							sort : "hot"
						},
						cache : !0
					},
					getProductsByCriteria : {
						request : "get https://store.gf.com.cn/rest/index/product"
					},
					getProductDetailsById : {
						request : "get https://store.gf.com.cn/product/:_id",
						isResponseOK : function(e) {
							return void 0 !== e.status
									&& 200 !== parseInt(e.status) ? !1 : !0
						}
					},
					getSummary : {
						request : "post /v2/GMSFacade/106004",
						data : {
							uid : "{Uid}",
							busi_date : ""
						}
					},
					getUserInfo : {
						request : "post /v2/GMSFacade/101009",
						data : {
							uid : "{Uid}",
							appid : "app"
						}
					},
					inComeView : {
						request : "post /v2/GMSFacade/106006",
						data : {
							uid : "{Uid}",
							busi_date : ""
						}
					},
					orderView : {
						request : "post /v2/GMSFacade/106003",
						data : {
							uid : "{Uid}",
							busi_date : ""
						}
					},
					inComeDetail : {
						request : "post /v2/GMSFacade/106005",
						data : {
							uid : "{Uid}"
						}
					},
					orderDetail : {
						request : "post /v2/GMSFacade/106002",
						data : {
							uid : "{Uid}"
						}
					},
					ranking : {
						request : "post /v2/GMSFacade/106007",
						data : {
							uid : "{Uid}"
						}
					},
					getUserCount : {
						request : "post /v2/qrcode/user/manager",
						data : {
							uid : "{Uid}"
						}
					},
					getSmartTaskAnswer : {
						request : "get /external/zhihu/faq/replay"
					},
					smartAnswerVote : {
						request : "post /external/zhihu/faq/answer/:id/vote"
					},
					getCommonIssueCategory : {
						request : "get /external/zhihu/faq/category"
					},
					getIssueCategoryDetail : {
						request : "get /external/zhihu/faq/category/:id"
					},
					getIssueDetail : {
						request : "get /external/zhihu/faq/answer/:id"
					},
					getAdviserContract : "get /module/advisorcontract/singstatus/:clientId",
					getClientProfileInfo : "get /v2/client/profileInfo/:clientId",
					getBlackClientInfo : "get /v2/unauth/blackClient/:clientPnsId",
					getBanks : {
						request : "get /union/getBanks",
						cache : !0
					},
					getTotalsByManager : "get /union/getTotalsByManager",
					getBankStaffByManager : "get /union/getBankStaffByManager/:pageNo/:pageSize",
					getOpenAccountSuccByManager : "get /union/getOpenAccountSuccByManager/:pageNo/:pageSize",
					getRestoreOrderDetail : "get /v2/questionnaire/getRestoreOrderDetail/:orderId",
					getQuestionnaire : "get /v2/questionnaire/:orderId",
					postQuestionnaireAnswer : "post /v2/questionnaire/postQuestionnaireAnswer",
					sendMobileMsg : "post /v2/sendMobileMsg",
					getMissAccountSubmitStatus : "get /v2/questionnaire/countdown/:orderId",
					getOptionOrderDetail : "get /v2/questionnaire/getOptionOrderDetail/:orderId",
					getScore2016 : "get /v2/annual/score2016",
					getMyExamList : "get /v2/exam/exam/getNotify/:pageNum/:pageSize"
				}), n(t, {
					getlicaiAppCount : "get /api/barcode/:userId",
					getRegisterUnBindCard : "get /api/barcode/register/:userId",
					getETradeAppCount : {
						request : "get /gfbaserestful/getJysTotalnum/:managerId"
					},
					sendCallRequest : {
						request : "post /api/barcode/barCodeCall",
						data : {
							from : "manager",
							appKey : "jys"
						},
						isResponseOK : function(e) {
							return void 0 !== e.status
									&& "000000" !== e.data.status.toString()
									? !1
									: !0
						}
					},
					sendPhoneCall : "post /oacustomer/info/callBack",
					sendSmsMessage : "post /oacustomer/info/sendSms",
					jysOpenAccountInfo : {
						request : "get /oacustomer/info/openaccountcustomer"
					},
					getOpenAccountClients : "get /oacustomer/info/customers",
					getOpenAccountClientMobile : "get /oacustomer/info/customers/:clientId/mobile",
					queryServiceLog : "post /oacustomer/info/queryServiceLog",
					queryOpenAccountStep : {
						request : "get /oacustomer/info/clickeggsCustomerActionLog/:userId"
					},
					queryClientIdByUserId : "get /oacustomer/info/clientNo/:userId",
					hideCustomer : "get /oacustomer/info/hidecustomer/:id"
				}), n(i, {
					followPeoples : "post /baike/api/users/mine/followPeoples",
					unfollowPeoples : "delete /baike/api/users/mine/followPeoples",
					hasFollowPeoples : "get /baike/api/users/mine/followsUserOrNot",
					getFansCount : "get /baike/api/users/mine/fanscount/:followuid",
					getFollowPeoples : "get /baike/api/users/mine/followPeoples"
				}), n(s, {
							getServiceProvider : "get /app/api/" + a
									+ "/registers/service_provider"
						}))
			}]
}, function(module, exports) {
	"use strict";
	function _classCallCheck(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	function noop() {
	}
	Object.defineProperty(exports, "__esModule", {
				value : !0
			});
	var _createClass = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), DebugService = function() {
		function DebugService(e, t, n, i) {
			"ngInject";
			_classCallCheck(this, DebugService), this.$log = e, this.$timeout = t, this.$rootScope = n, this.$injector = i, this.msgs = [], this.options = {
				bufSize : 100
			}, this.unbinds = [], this.msgDebug = !1;
			var s = location.href.split("?")[1];
			s && s.indexOf("dbg=ineeddebug") >= 0 ? (this.msgDebug = !0, this
					.enableDebug(!0)) : this.enableDebug(this.debug)
		}
		return DebugService.$inject = ["$log", "$timeout", "$rootScope",
				"$injector"], _createClass(DebugService, [{
			key : "handleDebugInput",
			value : function handleDebugInput(input) {
				if (input && input.match(/\$.+::.+/)) {
					var handled = !0, prefix = input.split("::")[0], content = input
							.split("::")[1];
					try {
						switch (prefix) {
							case "$debug" :
								this.enableDebug("enable" === content);
								break;
							case "$msgdebug" :
								this.msgDebug = "enable" === content, this
										.enableDebug("enable" === content);
								break;
							case "$eval" :
								this._updateBuffer(eval(content));
								break;
							default :
								handled = !1
						}
					} catch (e) {
					}
					return handled
				}
			}
		}, {
			key : "config",
			value : function(e) {
				_.assign(this.options, e)
			}
		}, {
			key : "pushDebugMsg",
			value : function(e) {
				this._updateBuffer(e)
			}
		}, {
			key : "enableDebug",
			value : function(e) {
				var t = this;
				this.$log.setDebug(this.debug = !!e), this.$timeout(function() {
					t.debug
							? (t._subscribeEvents(), t._bindWindowError(), t
									._updateBuffer({
												debug : "enabled"
											}), window.$injector = t.$injector)
							: (t.msgs = [], t._unbindWindowError(), t
									._unsubscribeEvents(), window.$injector = void 0), t.$rootScope
							.$broadcast(t.EVENT_DEBUG, t.debug)
				})
			}
		}, {
			key : "_subscribeEvents",
			value : function() {
				var e = this, t = this.unbinds;
				t.length > 0 && this._unsubscribeEvents(), t
						.push(this.$rootScope.$on("parrotService.event.any",
								function(t, n, i) {
									try {
										e._updateBuffer({
													event : n,
													data : i
												})
									} catch (t) {
									}
								}))
			}
		}, {
			key : "_unsubscribeEvents",
			value : function() {
				_.each(this.unbinds, function(e) {
							e()
						}), this.unbinds = []
			}
		}, {
			key : "_updateBuffer",
			value : function(e) {
				if (this.msgDebug) {
					var t = "string" == typeof e ? e : JSON.stringify(e), n = this.msgs;
					n.length >= this.options.bufSize && n.shift(), n.push(t)
				}
			}
		}, {
			key : "_bindWindowError",
			value : function() {
				var e = this;
				window.onerror = function(t, n, i, s, a) {
					var o = s ? "\ncolumn: " + s : "";
					o += a ? "\nerror: " + a : "", e._updateBuffer("Error: "
							+ t + "\nurl: " + n + "\nline: " + i + o);
					var r = !1;
					return r
				}
			}
		}, {
			key : "_unbindWindowError",
			value : function() {
				window.onerror = null
			}
		}]), DebugService
	}();
	DebugService.prototype.EVENT_DEBUG = "debugService.debug", exports["default"] = DebugService, module.exports = exports["default"]
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	function s(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	function a(e, t, n) {
		n.isInLiCaiApp || n.isInGFHKYTJ ? n.isAndroid ? (window.parent
				.postMessage(JSON.stringify({
									action : "network"
								}), "*"), window.addEventListener("message",
				function(n) {
					if (n.source == window.parent) {
						var i = JSON.parse(n.data);
						i.data && "network" == i.action
								? "none" !== i.data.type ? e() : t()
								: "imPageHistoryBack" == i.action
										&& history.back()
					}
				}, !1)) : n.isIOS && (window.checkNetwork = function(n) {
			"none" !== n ? e() : t()
		}) : window.addEventListener
				? (window.addEventListener("online", e, !1), window
						.addEventListener("offline", t, !1))
				: (document.body.ononline = e, document.body.onoffline = t)
	}
	function o(e) {
		var t = navigator ? navigator.userAgent : "", n = p.$location.search(), i = n.channel, s = n.host;
		e.isAndroid = !/like android/i.test(t) && /android/i.test(t), e.isIOS = /(ipod|iphone|ipad)/i
				.test(t), e.isInGFApp = /appversion/i.test(t)
				|| window.JavaScriptBridge || window.getBridge
				&& window.getBridge(), e.isInWeChat = /micromessenger/i.test(t)
				|| n.weixin_no, e.isInLiCaiApp = i == p.ChannelType.LICAI_APP, e.isInGFOpen = "gfopen" === s, e.GFAppVersion = e.isInGFApp
				? t.match(/appVersion\/([\d.]+)/)[1]
				: null, e.isInGFHKYTJ = i == p.ChannelType.GF_HK_YTJ, a(
				function(t) {
					e.isOnline = !0, p.$rootScope.$broadcast(e.NETWORK_ONLINE,
							t)
				}, function(t) {
					e.isOnline = !1, p.$rootScope.$broadcast(e.NETWORK_OFFLINE,
							t)
				}, e)
	}
	function r(e, t, n) {
		var i = e.device = t.Platform.device();
		i && (i.uuid = i.uuid || navigator.userAgent), e.isIOS = t.Platform
				.isIOS(), e.isAndroid = t.Platform.isAndroid(), i.cordova
				&& (e.networkType = n.getNetwork(), e.isOnline = n.isOnline(), p.$rootScope
						.$on("$cordovaNetwork:online", function(t, n) {
									e.isOnline = !0, e.networkType = n, p.$rootScope
											.$broadcast(e.NETWORK_ONLINE)
								}), p.$rootScope.$on("$cordovaNetwork:offline",
						function(t, n) {
							e.isOnline = !1, e.networkType = n, p.$rootScope
									.$broadcast(e.NETWORK_OFFLINE)
						}))
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var c = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), l = n(18), u = n(26), d = i(u), p = null, f = function() {
		function e(t, n, i) {
			"ngInject";
			s(this, e), p = l.resolveInject(e, arguments), this.browser = new d["default"](navigator
					? navigator.userAgent
					: "").getResult(), this.device = {}, this.isAndroid = !1, this.isIOS = !1, this.isInGFApp = !1, this.isInWeChat = !1, this.isInLiCaiApp = !1, this.isInGFOpen = !1, this.isOnline = !0, this.networkType = ""
		}
		return e.$inject = ["$rootScope", "$location", "ChannelType"], c(e, [{
							key : "initialize",
							value : function(e, t) {
								e && t ? r(this, e, t) : o(this)
							}
						}, {
							key : "subscribe",
							value : function(e, t) {
								return p.$rootScope.$on(e, t)
							}
						}]), e
	}();
	f.prototype.NETWORK_ONLINE = "NETWORK_ONLINE", f.prototype.NETWORK_OFFLINE = "NETWORK_OFFLINE", t["default"] = f, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), s = function() {
		function e(t) {
			n(this, e), this.result = this.detect(t)
		}
		return i(e, [{
					key : "getResult",
					value : function() {
						return this.result
					}
				}, {
					key : "detect",
					value : function(e) {
						function t(t) {
							var n = e.match(t);
							return n && n.length > 1 && n[1] || ""
						}
						function n(t) {
							var n = e.match(t);
							return n && n.length > 1 && n[2] || ""
						}
						var i, s = t(/(ipod|iphone|ipad)/i).toLowerCase(), a = /like android/i
								.test(e), o = !a && /android/i.test(e), r = t(/edge\/(\d+(\.\d+)?)/i), c = t(/version\/(\d+(\.\d+)?)/i);
						return /opera|opr/i.test(e) ? i = {
							name : "Opera",
							opera : !0,
							version : c
									|| t(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
						} : /msie|trident/i.test(e) ? i = {
							name : "Internet Explorer",
							msie : !0,
							version : t(/(?:msie |rv:)(\d+(\.\d+)?)/i)
						} : /chrome.+? edge/i.test(e) ? i = {
							name : "Microsoft Edge",
							msedge : !0,
							version : r
						} : /chrome|crios|crmo/i.test(e) ? i = {
							name : "Chrome",
							chrome : !0,
							version : t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
						}
								: s ? (i = {
									name : "iphone" === s
											? "iPhone"
											: "ipad" === s ? "iPad" : "iPod"
								}, c && (i.version = c)) : /firefox|iceweasel/i
										.test(e) ? (i = {
									name : "Firefox",
									firefox : !0,
									version : t(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
								}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i
										.test(e)
										&& (i.firefoxos = !0))
										: i = o ? {
											name : "Android",
											version : c
										} : /phantom/i.test(e) ? {
											name : "PhantomJS",
											phantom : !0,
											version : t(/phantomjs\/(\d+(\.\d+)?)/i)
										}
												: /safari/i.test(e) ? {
													name : "Safari",
													safari : !0,
													version : c
												} : {
													name : t(/^(.*)\/(.*) /),
													version : n(/^(.*)\/(.*) /)
												}, i.msedge || !o && !i.silk
								? s && (i[s] = !0, i.ios = !0)
								: i.android = !0, i
					}
				}]), e
	}();
	t["default"] = s, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var i, s, a = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), o = function() {
		function e(t, i, s) {
			"ngInject";
			n(this, e), this.api = i, this.$q = s, this.setLocalInitialTime(), this
					.setServerInitialTime()
		}
		return e.$inject = ["devMode", "api", "$q"], a(e, [{
							key : "setLocalInitialTime",
							value : function() {
								i = s = (new Date).getTime()
							}
						}, {
							key : "setServerInitialTime",
							value : function() {
								var e = this.$q.defer();
								return this.api("ping").then(function(t) {
									var n = t.data;
									n
											? (i = new Date(n).getTime(), s = (new Date)
													.getTime(), e.resolve())
											: e.reject()
								}, function() {
									e.reject()
								}), e.promise
							}
						}, {
							key : "getTime",
							value : function() {
								return i + ((new Date).getTime() - s)
							}
						}]), e
	}();
	t["default"] = o, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), s = function() {
		function e(t) {
			"ngInject";
			n(this, e), this.$cacheFactory = t, this.existingKeys = {}
		}
		return e.$inject = ["$cacheFactory"], i(e, [{
					key : "create",
					value : function(e, t) {
						return this.existingKeys[e]
								? this.$cacheFactory.get(e)
								: (this.existingKeys[e] = !0, this
										.$cacheFactory(e, t))
					}
				}, {
					key : "get",
					value : function(e) {
						return this.$cacheFactory.get(e)
					}
				}, {
					key : "clear",
					value : function(e) {
						"string" == typeof e && (e = [e]);
						var t, n = this.$cacheFactory;
						Object.keys(e || this.existingKeys).forEach(
								function(e) {
									(t = n.get(e)) && t.removeAll()
								})
					}
				}]), e
	}();
	t["default"] = s, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	function s(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError("Super expression must either be null or a function, not "
					+ typeof t);
		e.prototype = Object.create(t && t.prototype, {
					constructor : {
						value : e,
						enumerable : !1,
						writable : !0,
						configurable : !0
					}
				}), t
				&& (Object.setPrototypeOf
						? Object.setPrototypeOf(e, t)
						: e.__proto__ = t)
	}
	function a(e) {
	}
	function o(e) {
		d.sensorReportService.reportSocketEvent(e)
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var r = Array.prototype.slice, c = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), l = function(e, t, n) {
		for (var i = !0; i;) {
			var s = e, a = t, o = n;
			i = !1, null === s && (s = Function.prototype);
			var r = Object.getOwnPropertyDescriptor(s, a);
			if (void 0 !== r) {
				if ("value" in r)
					return r.value;
				var c = r.get;
				return void 0 === c ? void 0 : c.call(o)
			}
			var l = Object.getPrototypeOf(s);
			if (null === l)
				return void 0;
			e = l, t = a, n = o, i = !0, r = l = void 0
		}
	}, u = n(18), d = null, p = "parrotService.event.", f = "parrotService.response.", g = !0, h = [], v = "", m = 0, y = "", S = !0;
	!function() {
		if ("undefined" == typeof ParrotSDK)
			throw new Error("Must include ParrotSDK via script.")
	}();
	var I = function(e) {
		function t(e, n, s, a, o, r, c, p, f) {
			"ngInject";
			i(this, t), d = u.resolveInject(t, arguments), ParrotSDK
					.usePromise(n), l(Object.getPrototypeOf(t.prototype),
					"constructor", this).call(this, {
						timeout : r,
						address : o
					}), this._sdkEvents()
		}
		return s(t, e), t.$inject = ["$log", "$q", "$http", "$rootScope",
				"connServer", "socketTimeout", "deviceService", "terminal",
				"sensorReportService"], c(t, [{
					key : "subscribe",
					value : function(e, t) {
						return d.$rootScope.$on(e, t)
					}
				}, {
					key : "generatePushText",
					value : function(e, t, n) {
						var i = t ? "(" + t + ")" : "", s = "" + e + i + ":"
								+ n, a = u.byteSubstring(s, 0, 81);
						return s.length > a.length && (a += "..."), a
					}
				}, {
					key : "_publish",
					value : function(e) {
						var t = d.$rootScope;
						t.$emit.apply(t, [].concat(r.call(arguments))), t.$emit
								.apply(t, [this.EVENT_ANY, e].concat(_.slice(
												arguments, 1)))
					}
				}, {
					key : "_sdkEvents",
					value : function() {
						var e = this, t = this.EVENT, n = d.$log;
						this.on(t.SOCKET_CREATED, function(t) {
									e._socketEvents(t)
								}), this.on(t.CLEAN, function(t) {
									n.info("Parrot SDK CLEAN", t), e._publish(
											e.EVENT_CLEAN, t)
								}), this.on(t.PUSH, function(t) {
									n.debug("Parrot SDK PUSH", t,
											t.data.messages
													&& t.data.messages.length), e
											._onPush(t.data)
								}), this.on(t.REQUEST, function(e) {
									e.requestTime = (new Date).getTime(), n
											.debug("Parrot SDK REQUEST",
													e.data.event, e)
								}), this.on(t.RESPONSE, function(t, i) {
							var s = {}, a = i.data.event, o = t.data.error, r = (new Date)
									.getTime();
							"success" === t.data.event
									? (n.debug("Parrot SDK RESPONSE", a, t, i), s.statusCode = 200, s.statusText = "OK", s.successFlag = 1)
									: (n.warn("Parrot SDK RESPONSE error", a,
											t, i), s.statusCode = 0, s.statusText = "timeout" === o
											? o
											: "parrot server error", s.successFlag = 0);
							var c = d.terminal, l = {
								terminal : c,
								socketAddress : y,
								statusCode : s.statusCode,
								statusText : s.statusText,
								timeDiff : r - i.requestTime,
								method : a
							};
							("manager_mobile" === c || "manager_web" === c)
									&& d.sensorReportService.reportSocket(l), e
									._publish("" + f + a, t, i), e
									._debugSocketResponse(t, i)
						})
					}
				}, {
					key : "_socketEvents",
					value : function(e) {
						var t = this, n = d.$log, i = function(e, i) {
							t._publish(t[e], i);
							var s = {
								terminal : d.terminal,
								socketLog : t[e]
										+ ": "
										+ ("string" == typeof i
												? i
												: void 0 === typeof i
														? "no resp"
														: JSON.stringify(i))
							};
							t[e].indexOf("reconnect") > -1 ? S && o(s) : o(s), n
									.debug("Parrot SDK " + e, i), g
									&& h.push(e
											+ ": "
											+ ("string" == typeof i ? i : JSON
													.stringify(i)))
						};
						e.on("connect", function() {
									t._socketId = e.io.engine.id, S = !0, i(
											"EVENT_CONNECT", t._socketId), m > 3
											&& a(t._regData.regId)
								}), e.on("error", function(e) {
									i("EVENT_ERROR", e)
								}), e.on("disconnect", function(e) {
									i("EVENT_DISCONNECT", e)
								}), e.on("reconnect", function() {
									i("EVENT_RECONNECT")
								}), e.on("reconnect_error", function(e) {
									i("EVENT_RECONNECT_ERROR", e), S = !1, ++m > 3
											&& a(t._regData.regId)
								}), e.on("reconnecting", function(e) {
									i("EVENT_RECONNECTING", e)
								}), e.on("reconnect_failed", function() {
									i("EVENT_RECONNECT_FAIL")
								})
					}
				}, {
					key : "_onPush",
					value : function(e) {
						var t = this;
						if (e.messages) {
							var n = d.$log, i = void 0, s = [], a = [], o = e.messages, r = [
									"TypingNotificationArrived", "chat",
									"groupchat", "joinGroup",
									"groupMembersAdded", "groupMembersRemoved",
									"groupInfoUpdated", "groupMemberLeft"];
							_.each(o, function(e) {
								e
										&& (s.push(e), _.indexOf(r, e.type) < 0
												&& (i = e.groupInfo
														? e.groupInfo.groupId
														: e.content
																&& e.content.from, a
														.push(i ? e.id + "::"
																+ i : e.id)))
							}), _.each(_.groupBy(s, "type"), function(e, i) {
								n.debug("Parrot SDK PUSH Type", i, e, e.length), t
										._publish("" + p + i, e)
							}), a.length > 0 && this._sendPushAck(a)
						}
					}
				}, {
					key : "_sendPushAck",
					value : function(e) {
						if (d.$log.debug("Parrot SDK pushAck", e), e.length > 100)
							for (var t = parseInt(e.length / 100), n = void 0, i = 0; t >= i; i++)
								n = _.slice(e, 100 * i, 100 * (i + 1)), n.length > 0
										&& this.pushAck({
													data : {
														messageIds : n
													}
												});
						else
							this.pushAck({
										data : {
											messageIds : e
										}
									})
					}
				}, {
					key : "_debugSocketResponse",
					value : function(e, t) {
						g
								&& ("success" === e.data.event
										? "setRegInfo" === t.data.event
												&& (v = t.data.uid, h
														.push("setRegInfo with uid"
																+ v))
										: "send" === t.data.event
												&& a(this._regData.regId))
					}
				}]), t
	}(ParrotSDK);
	I.prototype.EVENT_CONNECT = "parrot.socket.connect", I.prototype.EVENT_ERROR = "parrot.socket.error", I.prototype.EVENT_DISCONNECT = "parrot.socket.disconnect", I.prototype.EVENT_RECONNECT = "parrot.socket.reconnect", I.prototype.EVENT_RECONNECT_ERROR = "parrot.socket.reconnectError", I.prototype.EVENT_RECONNECT_FAIL = "parrot.socket.reconnectFail", I.prototype.EVENT_RECONNECT_ATTEMPT = "parrot.socket.reconnectAttempt", I.prototype.EVENT_RECONNECTING = "parrot.socket.reconnecting", I.prototype.EVENT_ANY = p
			+ "any", I.prototype.EVENT_CLEAN = p + "clean", I.prototype.CONST_EVENT_PREFIX = p, [
			"chat", "groupchat", "joinGroup", "leaveGroup",
			"groupMembersAdded", "groupMembersRemoved", "groupInfoUpdated",
			"groupMemberLeft", "chatNotification", "groupNotification",
			"TypingNotificationArrived"].forEach(function(e) {
				I.prototype["EVENT_" + u.underScoreCase(e).toUpperCase()] = ""
						+ p + e
			}), ["addRegId", "setRegInfo", "getRegInfo", "getRecentContacts",
			"setPrivateData", "getPrivateData", "send", "query", "pushAck",
			"addGroup", "getGroupInfo", "updateGroupInfo", "addGroupMembers",
			"removeGroupMembers", "leaveGroup", "removeContacts"].forEach(
			function(e) {
				I.prototype["RESPONSE_" + u.underScoreCase(e).toUpperCase()] = ""
						+ f + e
			}), t["default"] = I, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	function s(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	function a(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError("Super expression must either be null or a function, not "
					+ typeof t);
		e.prototype = Object.create(t && t.prototype, {
					constructor : {
						value : e,
						enumerable : !1,
						writable : !0,
						configurable : !0
					}
				}), t
				&& (Object.setPrototypeOf
						? Object.setPrototypeOf(e, t)
						: e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var o = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), r = function(e, t, n) {
		for (var i = !0; i;) {
			var s = e, a = t, o = n;
			i = !1, null === s && (s = Function.prototype);
			var r = Object.getOwnPropertyDescriptor(s, a);
			if (void 0 !== r) {
				if ("value" in r)
					return r.value;
				var c = r.get;
				return void 0 === c ? void 0 : c.call(o)
			}
			var l = Object.getPrototypeOf(s);
			if (null === l)
				return void 0;
			e = l, t = a, n = o, i = !0, r = l = void 0
		}
	}, c = n(18), l = n(31), u = i(l), d = function(e) {
		function t(e, n, i, a, o, l, u) {
			"ngInject";
			s(this, t), r(Object.getPrototypeOf(t.prototype), "constructor",
					this).call(this, n), c.resolveInject(t, arguments, this), this._cacheRegInfo = {}, this
					._restore()
		}
		return a(t, e), t.$inject = ["$log", "$rootScope", "$q", "api", "User",
				"modelFactory", "localStorageService"], o(t, [{
			key : "getUserInfo",
			value : function(e, t) {
				var n = this, i = this.$q.defer(), s = _.isArray(e), a = s
						? e
						: [e], o = [], r = [], c = this.modelFactory, l = this._cacheRegInfo;
				return t ? o = a : _.each(a, function(e) {
							l[e] || o.push(e)
						}), 0 === o.length ? i.resolve(this._getInSequence(l,
						a, !s)) : this.api("getUserInfoByPnsId", {
							fragments : {
								pnsIds : a.join(",")
							}
						}).then(function(e) {
					var t = e.data.data;
					_.isArray(t) || (t = [t]), _.each(t, function(e) {
								r.push(c.createUserFromPayload(e))
							}), n._updateUserCache(r), i.resolve(n
							._getInSequence(n._cacheRegInfo, a, !s))
				}, function(e) {
					n.$log.warn("getUserInfo fail", e), i.reject(e)
				}), i.promise
			}
		}, {
			key : "_getInSequence",
			value : function(e, t, n) {
				var i = _.map(t, function(t) {
							return e[t]
						});
				return n ? i[0] : i
			}
		}, {
			key : "_updateUserCache",
			value : function(e) {
				var t = this._cacheRegInfo;
				_.each(e, function(e) {
							t[e.pnsId] = e
						}), this._persist(), this
						._emit(this.EVENT_USER_INFO, e)
			}
		}, {
			key : "_persist",
			value : function() {
				try {
					this.localStorageService.set("chatUserCache",
							this._cacheRegInfo)
				} catch (e) {
					this.$log.warn("chatUserService._persist error", e)
				}
			}
		}, {
			key : "_restore",
			value : function() {
				var e = this;
				try {
					!function() {
						var t = e.localStorageService.get("chatUserCache")
								|| {}, n = e._cacheRegInfo, i = e.modelFactory;
						_.each(t, function(e) {
									n[e.pnsId] = i.createUser(e)
								})
					}()
				} catch (t) {
					this.$log.warn("chatUserService._restore error", t)
				}
			}
		}]), t
	}(u["default"]);
	d.prototype.EVENT_USER_INFO = "chatUser.userInfo", t["default"] = d, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = function() {
		function e(t) {
			i(this, e), this._prefix = a.uuid() + ".", this._options = {}, this.$rootScope = t
		}
		return s(e, [{
					key : "listen",
					value : function(e, t) {
						return this.$rootScope.$on(this._prefix + e, t)
					}
				}, {
					key : "setOptions",
					value : function(e) {
						_.assign(this._options, e), this._ic = this._options.itemClass
					}
				}, {
					key : "getOptions",
					value : function() {
						return this._options
					}
				}, {
					key : "_emit",
					value : function(e) {
						var t = this._prefix, n = this.$rootScope;
						n.$emit.apply(n, [t + e].concat(_.slice(arguments, 1))), n
								.$emit(t + this.EVENT_ANY)
					}
				}, {
					key : "_typeCheck",
					value : function(e) {
						return !0
					}
				}]), e
	}();
	o.prototype.EVENT_ANY = "store.any", t["default"] = o, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = null, r = function() {
		function e(t, n, s, r, c) {
			"ngInject";
			i(this, e), o = a.resolveInject(e, arguments), this._cacheGroup = {}, this
					._subscribeEvents()
		}
		return e.$inject = ["$log", "$q", "Group", "modelFactory",
				"parrotService"], s(e, [{
					key : "updateCache",
					value : function(e) {
						var t = this._cacheGroup;
						_.each(_.isArray(e) ? e : [e], function(e) {
									t[e.groupId] = e
								})
					}
				}, {
					key : "getGroupInfo",
					value : function(e) {
						var t = this, n = o.$q.defer(), i = _.isArray(e), s = i
								? e
								: [e], a = [], r = [], c = o.modelFactory, l = this._cacheGroup;
						return _.each(s, function(e) {
									l[e] || a.push(e)
								}), 0 === a.length ? n.resolve(this
								._getInSequence(l, s, !i)) : o.parrotService
								.getGroupInfo({
											groupId : s
										}).then(function(e) {
									var a = e.groupInfo;
									1 === s.length && (a = [a]), _.each(a,
											function(e) {
												var t = c
														.createGroupFromPayload(e);
												r.push(t), l[t.groupId] = t
											}), n.resolve(t._getInSequence(l,
											s, !i))
								}, function(e) {
									o.$log.warn("getUserInfo fail", e), n
											.reject(e)
								}), n.promise
					}
				}, {
					key : "_getInSequence",
					value : function(e, t, n) {
						var i = _.map(t, function(t) {
									return e[t]
								});
						return n ? i[0] : i
					}
				}, {
					key : "_subscribeEvents",
					value : function() {
						var e = this, t = o.parrotService;
						t.subscribe(t.RESPONSE_ADD_GROUP, function(t, n, i) {
									return e._updateFromSelfOperation(n, i)
								}), t.subscribe(t.RESPONSE_UPDATE_GROUP_INFO,
								function(t, n, i) {
									return e._updateFromSelfOperation(n, i)
								}), t.subscribe(t.RESPONSE_ADD_GROUP_MEMBERS,
								function(t, n, i) {
									return e._updateFromSelfOperation(n, i)
								}), t.subscribe(
								t.RESPONSE_REMOVE_GROUP_MEMBERS, function(t, n,
										i) {
									return e._updateFromSelfOperation(n, i)
								}), t.subscribe(t.RESPONSE_ADD_REG_ID,
								function(t, n, i) {
									return e
											._updateFromRecentContacts(n.data.recentContacts)
								}), t.subscribe(t.RESPONSE_GET_RECENT_CONTACTS,
								function(t, n, i) {
									return e
											._updateFromRecentContacts(n.data.recentContacts)
								}), t.subscribe(t.RESPONSE_LEAVE_GROUP,
								function(t, n, i) {
									delete e._cacheGroup[i.data.groupId]
								})
					}
				}, {
					key : "_updateFromSelfOperation",
					value : function(e, t) {
						if (o.$log
								.debug(
										"ChatGroupService update cache from parrot event",
										t.data.event), "success" === e.data.event) {
							var n = e.data.groupInfo;
							this._cacheGroup[n.groupId] = o.modelFactory
									.createGroupFromPayload(n)
						}
					}
				}, {
					key : "_updateFromRecentContacts",
					value : function(e) {
						o.$log
								.debug("ChatGroupService update cache from parrot recentContact");
						var t = this._cacheGroup, n = o.modelFactory;
						_.each(e, function(e) {
							e.groupInfo
									&& (t[e.groupInfo.groupId] = n
											.createGroupFromPayload(e.groupInfo))
						})
					}
				}]), e
	}();
	t["default"] = r, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = function() {
		function e(t, n, s, o, r, c, l, u, d) {
			"ngInject";
			i(this, e), a.resolveInject(e, arguments, this), this._user = null, this._recentContact = null, this._messageHandler = {}, this._messageDraft = {}, this
					._subscribeEvents()
		}
		return e.$inject = ["$log", "$q", "parrotService", "Message",
				"modelFactory", "chatUserService", "chatGroupService",
				"timerService", "terminal"], s(e, [{
					key : "initialize",
					value : function(e, t) {
						this._user = e, this._recentContact = t
					}
				}, {
					key : "registerMessageHandler",
					value : function(e, t, n, i) {
						var s = arguments.length <= 4
								|| void 0 === arguments[4] ? 1 : arguments[4];
						if ("string" != typeof e || "string" != typeof t)
							throw new Error("Must specify pushType and msgType");
						if ("function" != typeof n)
							throw new Error("Must specify a callback function");
						var a = this._messageHandler, o = e + "-" + t, r = a[o]
								? a[o]
								: [];
						r.push({
									ctx : i || this,
									cb : n,
									priority : s
								}), a[o] = _.sortBy(r, function(e) {
									return -e.priority
								})
					}
				}, {
					key : "unregisterMessageHandler",
					value : function(e, t, n) {
						if ("string" != typeof e || "string" != typeof t)
							throw new Error("Must specify pushType and msgType");
						var i = this._messageHandler, s = e + "-" + t, a = i[s]
								? i[s]
								: [];
						if (n) {
							for (var o = 0, r = a.length; r > o; o++)
								if (n === a[o]) {
									a.splice(o, 1);
									break
								}
						} else
							delete i[s]
					}
				}, {
					key : "getMessageDraft",
					value : function(e) {
						return e && this._messageDraft[e.pnsId] || ""
					}
				}, {
					key : "setMessageDraft",
					value : function(e, t) {
						return e && (this._messageDraft[e.pnsId] = t), this
					}
				}, {
					key : "sendMessage",
					value : function(e, t) {
						var n = arguments.length <= 2
								|| void 0 === arguments[2]
								? this.Message.TYPE_TEXT
								: arguments[2];
						this._check();
						var i = this.Message.STATUS_SENDING;
						"yes" === e.isBlackList
								&& (i = this.Message.STATUS_NO_SEND);
						var s = this.modelFactory.createMessage({
									timestamp : this.timerService.getTime(),
									status : i,
									from : this._user.pnsId,
									to : e.pnsId,
									content : t,
									type : n
								});
						return this._recentContact.addNewMessages([s], e), this
								.sendMessageObj(e, s)
					}
				}, {
					key : "sendMessageObj",
					value : function(e, t) {
						var n = this, i = this.$q.defer();
						return "yes" === e.isBlackList
								? i.resolve()
								: this.parrotService.send({
									to : e.isGroup() ? {
										groupId : e.pnsId
									} : {
										regId : e.pnsId
									},
									message : t.content,
									type : t.type,
									pushInfo : {
										displayTitle : e.name ? e.name : "金钥匙",
										displayText : this.parrotService
												.generatePushText(
														this._user.name, e
																.isGroup()
																? e.name
																: null, t
																.getText())
									}
								}).then(function(s) {
									var a = s.data;
									n._recentContact.updateMessage(e, t.id, {
												id : a.message.messageId,
												timestamp : a.message.timestamp,
												status : n.Message.STATUS_SENT
											}), i.resolve(s)
								}, function(s) {
									var a = "failure" === s.data.event
											? "service_unavailable" === s.data.reason.type
													? n.Message.STATUS_STOCK_SERVICE_FAIL
													: n.Message.STATUS_STOCK_FAIL
											: n.Message.STATUS_FAIL;
									if (n._recentContact.updateMessage(e, t.id,
											{
												status : a
											}), "failure" === s.data.event) {
										var o = s.data.reason.text;
										"forbidden" === s.data.reason.type
												? o = "发送失败，你所发“"
														+ s.data.reason.tokens
																.join("，")
														+ "”为股票敏感词，请修改后再发送"
												: "service_unavailable" === s.data.reason.type
														? o = "发送失败，无法检测聊天内容是否合规"
														: s.data.reason.tags
																.indexOf("dirty") >= 0
																&& (o = "发送失败，“"
																		+ s.data.reason.words
																				.join("，")
																		+ "”为不文明用语。请注意，否则可能受到永久关闭抢单权限的处罚。"), n._recentContact
												.addNewMessages(n.modelFactory
														.createMessage({
															type : n.Message.TYPE_SYSTEM,
															from : n._user.pnsId,
															to : e.pnsId,
															timestamp : n.timerService
																	.getTime(),
															content : {
																text : o
															}
														}), e.pnsId)
									}
									i.reject(s)
								})["catch"](function(e) {
											n.$log.error(e)
										}), i.promise
					}
				}, {
					key : "resendMessage",
					value : function(e, t) {
						if (!e
								|| !t
								|| t.status !== this.Message.STATUS_FAIL
								&& t.status !== this.Message.STATUS_STOCK_SERVICE_FAIL)
							return null;
						var n = this._recentContact.removeMessage(e, t.id);
						return n
								? this.sendMessage(e, n.content, n.type)
								: void 0
					}
				}, {
					key : "_invokeMessageCallback",
					value : function(e, t) {
						var n = this._messageHandler[t + "-" + e.type], i = void 0, s = void 0;
						if (n)
							for (var a = 0, o = n.length; o > a; a++) {
								if (i = n[a], s = i.cb.call(i.ctx, e), s === !0)
									return null;
								if (s !== !1)
									return s
							}
						return e
					}
				}, {
					key : "_subscribeEvents",
					value : function() {
						var e = this, t = this.parrotService;
						t.subscribe(t.EVENT_CHAT, function(t, n) {
									return e._onChat(n, "chat")
								}), t.subscribe(t.EVENT_GROUPCHAT, function(t,
										n) {
									return e._onChat(n, "groupchat")
								}), t.subscribe(t.EVENT_JOIN_GROUP, function(t,
										n) {
									return e._onHandleGroupPush(n, null, null,
											"add")
								}), t.subscribe(t.EVENT_LEAVE_GROUP, function(
								t, n) {
							return e
									._onHandleGroupPush(n, null, null, "remove")
						}), t.subscribe(t.EVENT_GROUP_MEMBERS_ADDED, function(
										t, n) {
									return e._onHandleGroupPush(n,
											"addedMembers", "加入了群聊")
								}), t.subscribe(t.EVENT_GROUP_MEMBERS_REMOVED,
								function(t, n) {
									return e._onHandleGroupPush(n,
											"removedMembers", "被移出群聊")
								}), t.subscribe(t.EVENT_GROUP_INFO_UPDATED,
								function(t, n) {
									return e._onHandleGroupPush(n, "by",
											"更新了群资料", "update")
								}), t.subscribe(t.EVENT_GROUP_MEMBER_LEFT,
								function(t, n) {
									return e._onHandleGroupPush(n, "member",
											"退出群聊")
								})
					}
				}, {
					key : "_onChat",
					value : function(e, t) {
						var n, i = this, s = this.modelFactory, o = [], r = [];
						_.each(e, function(e) {
									n = i._invokeMessageCallback(
											s.createMessageFromPayload(e), t), n
											&& (a.isPromise(n) ? o : r).push(n)
								}), o.length > 0 ? this.$q.all(o).then(
								function(e) {
									_.each(e, function(e) {
												r.push(e)
											}), i._recentContact
											.addNewMessages(r)
								}) : this._recentContact.addNewMessages(r);
						var c = this.parrotService;
						c._publish(c.EVENT_CHAT_NOTIFICATION, r)
					}
				}, {
					key : "_onHandleGroupPush",
					value : function(e, t, n) {
						var i = this, s = arguments.length <= 3
								|| void 0 === arguments[3]
								? null
								: arguments[3], a = this.modelFactory, o = this.chatGroupService, r = this._recentContact;
						_.each(e, function(e) {
							switch (t && n && i._addGroupTipMessage(e, e[t], n), s) {
								case "add" :
									r.addContact(a.createContactFromPayload(e)), ("manager_mobile" === i.terminal || "manager_web" === i.terminal)
											&& i.parrotService
													._sendPushAck([e.id
															+ "::"
															+ e.groupInfo.groupId]);
									break;
								case "remove" :
									r.removeContact(e.groupInfo.groupId);
									break;
								case "update" :
									r.updateContact(e.groupInfo.groupId,
											a.createContactFromPayload(e))
							}
							o
									.updateCache(a
											.createGroupFromPayload(e.groupInfo))
						})
					}
				}, {
					key : "_addGroupTipMessage",
					value : function(e, t, n) {
						var i = this, s = void 0, a = this._recentContact, o = e.groupInfo.groupId, r = e.by
								|| e.member;
						this.chatUserService.getUserInfo(t).then(function(t) {
							t = _.isArray(t) ? t : [t], s = _.pluck(t, "name");
							var c = i.modelFactory.createMessage({
										id : e.id,
										type : i.Message.TYPE_SYSTEM,
										from : r,
										to : o,
										timestamp : e.timestamp
												|| i.timerService.getTime(),
										content : {
											text : s.join("、") + n
										}
									});
							a.addNewMessages(c, o);
							var l = i.parrotService;
							l._publish(l.EVENT_GROUP_NOTIFICATION,
									e.groupInfo.groupName, c)
						})
					}
				}, {
					key : "_check",
					value : function() {
						if (!this._user || !this._recentContact)
							throw new Error("Must initialize with client or manager, and recentContactService")
					}
				}]), e
	}();
	o.prototype.MAX_TEXT_LEN = 1e4, t["default"] = o, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = function() {
		function e(t, n, s, o) {
			"ngInject";
			i(this, e), a.resolveInject(e, arguments, this)
		}
		return e.$inject = ["$log", "$q", "$http", "shopUrl"], s(e, [{
			key : "getWeiShop",
			value : function(e) {
				var t = this, n = this.$q.defer(), i = null, s = this.shopUrl
						+ "/api/store/shop/findByOa?callback=JSON_CALLBACK&oaId=";
				return this.$http.jsonp(s + e).success(function(s) {
					s && s.data && s.data.length > 0 ? i = s.data[0] : t.$log
							.debug(e + " no wei shop data"), n.resolve(i)
				}).error(function(e) {
							t.$log.warn(e), n.reject("getWeiShop error", e)
						}), n.promise
			}
		}]), e
	}();
	t["default"] = o, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = function() {
		function e(t, n, s) {
			"ngInject";
			i(this, e), a.resolveInject(e, arguments, this)
		}
		return e.$inject = ["$http", "msgPushServer", "appId"], s(e, [{
					key : "login",
					value : function(e) {
						return this.$http.post(this.msgPushServer
										+ "/api/login", {
									appId : this.appId,
									regId : e,
									type : "web",
									notShowTip : !0
								})
					}
				}, {
					key : "logout",
					value : function(e) {
						return this.$http.post(this.msgPushServer
										+ "/api/logout", {
									appId : this.appId,
									regId : e,
									notShowTip : !0
								})
					}
				}]), e
	}();
	t["default"] = o, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = "GfClickeggs_", r = 0, c = function() {
		function e(t, n, s, o, r) {
			"ngInject";
			i(this, e), a.resolveInject(e, arguments, this), this.sensorProject = s
					? "test"
					: "goldenkey", this.initTimeForRequest = {}, this
					.initialize()
		}
		return e.$inject = ["$log", "$q", "devMode", "sensorLog", "terminal"], s(
				e, [{
							key : "initialize",
							value : function() {
								var e = this;
								this._loadScript()["catch"](function() {
											e.$log
													.warn("load sensor script failure.")
										})
							}
						}, {
							key : "request",
							value : function() {
								var e = "" + ++r;
								return this.initTimeForRequest[e] = (new Date)
										.getTime(), e
							}
						}, {
							key : "sensorIdentity",
							value : function(e) {
								var t = arguments.length <= 1
										|| void 0 === arguments[1]
										? !0
										: arguments[1];
								sa.identify(e, t)
							}
						}, {
							key : "registerGlobalProperty",
							value : function(e, t) {
								var n = {};
								n[o + e] = "number" == typeof t ? t + "" : t, sa
										.register(n)
							}
						}, {
							key : "reportPV",
							value : function() {
								var e = arguments.length <= 0
										|| void 0 === arguments[0]
										? {}
										: arguments[0], t = _.assign(this
												._getUrlProps(), e);
								sa.track(o + "PageView", this._addPrefix(t))
							}
						}, {
							key : "reportShare",
							value : function(e) {
								var t = arguments.length <= 1
										|| void 0 === arguments[1]
										? {}
										: arguments[1], n = _.assign({
											shareAction : e
										}, this._getUrlProps(), t);
								sa.track(o + "Share", this._addPrefix(n))
							}
						}, {
							key : "reportEvent",
							value : function() {
								var e = arguments.length <= 0
										|| void 0 === arguments[0]
										? {}
										: arguments[0], t = _.assign(this
												._getUrlProps(), e);
								sa.track(o + "Event", this._addPrefix(t))
							}
						}, {
							key : "reportStart",
							value : function() {
								{
									var e = arguments.length <= 0
											|| void 0 === arguments[0]
											? {}
											: arguments[0];
									_.assign(this._getUrlProps(), e)
								}
							}
						}, {
							key : "reportSocket",
							value : function() {
								var e = arguments.length <= 0
										|| void 0 === arguments[0]
										? {}
										: arguments[0], t = _.assign(this
												._getUrlProps(), e);
								sa.track(o + "Socket", this._addPrefix(t))
							}
						}, {
							key : "reportSocketEvent",
							value : function() {
								var e = arguments.length <= 0
										|| void 0 === arguments[0]
										? {}
										: arguments[0], t = _.assign(this
												._getUrlProps(), e);
								sa.track(o + "SocketEvent", this._addPrefix(t))
							}
						}, {
							key : "reportHttpEvent",
							value : function(e, t, n) {
								var i = t.config.url, s = e.url, a = (new Date)
										.getTime()
										- this.initTimeForRequest[n], r = {
									terminal : this.terminal,
									urlLink : i,
									apiUrl : s,
									statusCode : t.status,
									statusText : t.statusText,
									method : t.config.method
								}, c = _.assign(this._getUrlProps(), r);
								sa.track(o + "Http", _.assign(this
														._addPrefix(c), this
														._addPrefix2({
																	rTimeDiff : a
																}))), delete this.initTimeForRequest[n]
							}
						}, {
							key : "_getUrlProps",
							value : function() {
								var e = location.origin;
								return _.startsWith(location.origin, "file")
										|| (e += location.pathname), {
									origin : e,
									hash : location.hash.replace("#", "")
											.replace(/\?.*/, "")
								}
							}
						}, {
							key : "_loadScript",
							value : function() {
								var e = this.$q.defer(), t = this
										._loadSensorScript();
								if (!t)
									throw new Error("Cannot load sensor script");
								return t.onload = function() {
									sa.clearAllRegister(), e.resolve("success")
								}, t.onerror = function() {
									e.reject("failure")
								}, e.promise
							}
						}, {
							key : "_loadSensorScript",
							value : function() {
								return function(e) {
									var t = e.sdk_url, n = e.name, i = window, s = document, a = "script", o = null, r = null;
									i.sensorsDataAnalytic201505 = n, i[n] = i[n]
											|| function(e) {
												return function() {
													(i[n]._q = i[n]._q || [])
															.push([e, arguments])
												}
											};
									for (var c = ["clearAllRegister", "track",
											"quick", "register",
											"registerPage", "registerOnce",
											"registerSession",
											"registerSessionOnce",
											"trackSignup", "trackAbtest",
											"setProfile", "setOnceProfile",
											"appendProfile",
											"incrementProfile",
											"deleteProfile", "unsetProfile",
											"identify", "login", "logout"], l = 0; l < c.length; l++)
										i[n][c[l]] = i[n].call(null, c[l]);
									return i[n]._t
											|| (o = s.createElement(a), r = s
													.getElementsByTagName(a)[0], o.async = 1, o.src = t, r.parentNode
													.insertBefore(o, r), i[n].para = e), o
								}({
									sdk_url : "https://static.sensorsdata.cn/sdk/1.7.8/sensorsdata.min.js",
									name : "sa",
									show_log : this.sensorLog,
									server_url : "https://behavior.gf.com.cn/sa?project="  //TODO behavior.gf.com.cn
											+ this.sensorProject,
									cross_subdomain : !1
								})
							}
						}, {
							key : "_addPrefix",
							value : function(e) {
								var t = {};
								return _.each(e, function(e, n) {
											t[o + n] = "number" == typeof e ? e
													+ "" : e
										}), t
							}
						}, {
							key : "_addPrefix2",
							value : function(e) {
								var t = {};
								return _.each(e, function(e, n) {
											t[o + n] = e
										}), t
							}
						}]), e
	}();
	t["default"] = c, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	function s(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	function a(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError("Super expression must either be null or a function, not "
					+ typeof t);
		e.prototype = Object.create(t && t.prototype, {
					constructor : {
						value : e,
						enumerable : !1,
						writable : !0,
						configurable : !0
					}
				}), t
				&& (Object.setPrototypeOf
						? Object.setPrototypeOf(e, t)
						: e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var o = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), r = function(e, t, n) {
		for (var i = !0; i;) {
			var s = e, a = t, o = n;
			i = !1, null === s && (s = Function.prototype);
			var r = Object.getOwnPropertyDescriptor(s, a);
			if (void 0 !== r) {
				if ("value" in r)
					return r.value;
				var c = r.get;
				return void 0 === c ? void 0 : c.call(o)
			}
			var l = Object.getPrototypeOf(s);
			if (null === l)
				return void 0;
			e = l, t = a, n = o, i = !0, r = l = void 0
		}
	}, c = n(31), l = i(c), u = [], d = function(e) {
		function t(e, n, i, a) {
			"ngInject";
			s(this, t), r(Object.getPrototypeOf(t.prototype), "constructor",
					this).call(this, n), this.ls = i, this.$log = e, this.appVersion = a, this._list = [], this._mainVersion = 1, this._lastAppVersion = "", this
					.initialize()
		}
		return a(t, e), t.$inject = ["$log", "$rootScope",
				"localStorageService", "appVersion"], o(t, [{
			key : "initialize",
			value : function() {
				this._restore(), this.appVersion !== this._lastAppVersion
						&& (++this._mainVersion, this._clearOldItems()), this
						._activateItemIfNeeded()
			}
		}, {
			key : "addItem",
			value : function(e, t) {
				var n = this.getItem(e);
				n
						? n.v !== this._mainVersion
								&& (n.v = this._mainVersion, this._persist())
						: (this._list.push({
									v : this._mainVersion,
									k : e,
									pk : t,
									hide : !1
								}), t && this._activateItem(t))
			}
		}, {
			key : "hideItem",
			value : function(e) {
				var t = this.getItem(e);
				if (t
						&& (t.hide = !0, this._emit(this.EVENT_TIP_UPDATE, t), this
								._persist(), t.pk)) {
					var n = _.filter(this._list, function(e) {
								return e.pk === t.pk
							}), i = _.every(n, function(e) {
								return e.hide
							});
					if (i) {
						var s = void 0;
						(s = this.getItem(t.pk)) && this.hideItem(s.k)
					}
				}
			}
		}, {
			key : "isItemHidden",
			value : function(e) {
				var t = this.getItem(e);
				return t ? !!t.hide : !1
			}
		}, {
			key : "getItem",
			value : function(e) {
				return _.find(this._list, function(t) {
							return t.k === e
						})
			}
		}, {
			key : "_persist",
			value : function() {
				try {
					this.ls.set("new-tip", {
								mainVersion : this._mainVersion,
								lastAppVersion : this._lastAppVersion,
								hiddenList : _.filter(this._list, function(e) {
											return e.hide
										})
							})
				} catch (e) {
					this.$log.warn("NewTipService._persist fail", e)
				}
			}
		}, {
			key : "_restore",
			value : function() {
				try {
					var e = this.ls.get("new-tip") || {};
					this._mainVersion = parseInt(e.mainVersion || 1), this._lastAppVersion = e.lastAppVersion
							|| "", this._list = e.hiddenList || []
				} catch (t) {
					this.$log.warn("NewTipService._persist _restore", t)
				}
			}
		}, {
			key : "_clearOldItems",
			value : function() {
				var e = this._mainVersion, t = _.filter(this._list,
						function(t) {
							return e - t.v <= 1
						});
				t.length !== this._list.length
						&& (this._list = t, this._persist())
			}
		}, {
			key : "_activateItemIfNeeded",
			value : function() {
				var e = this;
				_.each(u, function(t) {
							e.getItem(t.key) || e._activateItem(t.pk)
						})
			}
		}, {
			key : "_activateItem",
			value : function(e) {
				var t = this.getItem(e);
				t
						&& (t.hide = !1, this._emit(this.EVENT_TIP_UPDATE, t), t.pk
								&& this._activateItem(t.pk))
			}
		}]), t
	}(l["default"]);
	t["default"] = d, d.prototype.EVENT_TIP_UPDATE = "newTip.tip.update", e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	function s(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	function a(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError("Super expression must either be null or a function, not "
					+ typeof t);
		e.prototype = Object.create(t && t.prototype, {
					constructor : {
						value : e,
						enumerable : !1,
						writable : !0,
						configurable : !0
					}
				}), t
				&& (Object.setPrototypeOf
						? Object.setPrototypeOf(e, t)
						: e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var o = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), r = function(e, t, n) {
		for (var i = !0; i;) {
			var s = e, a = t, o = n;
			i = !1, null === s && (s = Function.prototype);
			var r = Object.getOwnPropertyDescriptor(s, a);
			if (void 0 !== r) {
				if ("value" in r)
					return r.value;
				var c = r.get;
				return void 0 === c ? void 0 : c.call(o)
			}
			var l = Object.getPrototypeOf(s);
			if (null === l)
				return void 0;
			e = l, t = a, n = o, i = !0, r = l = void 0
		}
	}, c = n(18), l = n(39), u = i(l), d = {
		visible : !0,
		isNew : !1
	}, p = function(e) {
		function t(e, n, i) {
			"ngInject";
			s(this, t), r(Object.getPrototypeOf(t.prototype), "constructor",
					this).call(this, i, null), c.resolveInject(t, arguments,
					this), this.setOptions({
						uniqueKey : "id"
					}), this._hasNew = !1
		}
		return a(t, e), t.$inject = ["$q", "$log", "$rootScope"], o(t, [{
					key : "hasNew",
					value : function() {
						return this._hasNew
					}
				}, {
					key : "registerPlugin",
					value : function(e) {
						if ("string" != typeof e.id
								|| "string" != typeof e.name)
							throw new Error('Must specify unique "id" and "name" property.');
						if ("function" != typeof e.onTap)
							throw new Error('Must specify an "onTap" function.');
						if (this.findItemsBy(this._uk, e.id).length > 0)
							throw new Error("Plugin with id " + e.id
									+ " is already exist.");
						return e.isNew === !0 && (this._hasNew = !0), this
								.addItem(_.defaults({}, e, d))
					}
				}, {
					key : "unregisterPlugin",
					value : function(e) {
						return this.removeItemsBy(this._uk, e)
					}
				}, {
					key : "unregisterAll",
					value : function() {
						this.clearItems(), this._hasNew = !1
					}
				}, {
					key : "updatePlugin",
					value : function(e, t) {
						var n = this.updateItemsBy(this._uk, e, t);
						return this._hasNew = _.filter(this._collections, {
									isNew : !0
								}).length > 0, n
					}
				}, {
					key : "toggleVisible",
					value : function() {
						for (var e = arguments.length <= 0
								|| void 0 === arguments[0] ? [] : arguments[0], t = arguments.length <= 1
								|| void 0 === arguments[1] ? !1 : arguments[1], n = 0, i = this._collections, s = i.length; s > n; n++)
							i[n].visible = e.indexOf(i[n].id) >= 0 ? t : !t, i[n].visible
									|| this.updatePlugin(i[n].id, {
												isNew : !1
											});
						this._emit(this.EVENT_ITEMS_UPDATED, this._collections,
								this.TYPE_UPDATE)
					}
				}, {
					key : "dispatchTap",
					value : function(e) {
						var t = this;
						if (!_.isEmpty(e) && "function" == typeof e.onTap) {
							var n = e.onTap.call(e.context ? e.context : e, e);
							return c.isPromise(n) || (n = this.$q.when(!!n)), n
									.then(function() {
												t._emit(t.EVENT_PLUGIN_TAPPED,
														e)
											}), n
						}
						return this.$q.reject()
					}
				}]), t
	}(u["default"]);
	p.prototype.EVENT_PLUGINS_UPDATED = u["default"].prototype.EVENT_ITEMS_UPDATED, p.prototype.EVENT_PLUGIN_TAPPED = "chatPluginManager.plugin.Tapped", t["default"] = p, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	function s(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	function a(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError("Super expression must either be null or a function, not "
					+ typeof t);
		e.prototype = Object.create(t && t.prototype, {
					constructor : {
						value : e,
						enumerable : !1,
						writable : !0,
						configurable : !0
					}
				}), t
				&& (Object.setPrototypeOf
						? Object.setPrototypeOf(e, t)
						: e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var o = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), r = function(e, t, n) {
		for (var i = !0; i;) {
			var s = e, a = t, o = n;
			i = !1, null === s && (s = Function.prototype);
			var r = Object.getOwnPropertyDescriptor(s, a);
			if (void 0 !== r) {
				if ("value" in r)
					return r.value;
				var c = r.get;
				return void 0 === c ? void 0 : c.call(o)
			}
			var l = Object.getPrototypeOf(s);
			if (null === l)
				return void 0;
			e = l, t = a, n = o, i = !0, r = l = void 0
		}
	}, c = n(31), l = i(c), u = function(e) {
		function t(e, n) {
			s(this, t), r(Object.getPrototypeOf(t.prototype), "constructor",
					this).apply(this, arguments), this._collections = [], this._activeItem = null, this.ls = n
		}
		return a(t, e), o(t, [{
			key : "setOptions",
			value : function(e) {
				r(Object.getPrototypeOf(t.prototype), "setOptions", this).call(
						this, e), this._uk = this._options.uniqueKey
			}
		}, {
			key : "getAllItems",
			value : function() {
				return this._collections
			}
		}, {
			key : "setAllItems",
			value : function(e) {
				var t = arguments.length <= 1 || void 0 === arguments[1]
						? !1
						: arguments[1], n = arguments.length <= 2
						|| void 0 === arguments[2] ? !0 : arguments[2];
				return e && e.length > 0 && this._typeCheck(e[0]) ? (t
						? this._collections = e
						: this._mergeCollections(e), this._emit(
						this.EVENT_ITEMS_UPDATED, this._collections), n
						&& this._persist(), this) : this
			}
		}, {
			key : "getActiveItem",
			value : function() {
				return this._activeItem
			}
		}, {
			key : "getActiveItemIndex",
			value : function() {
				return this._activeItem ? this
						.findItemIndexOf(this._activeItem) : -1
			}
		}, {
			key : "setActiveItem",
			value : function(e) {
				var t = null;
				if (e && this._uk) {
					var n = "string" == typeof e ? e : e[this._uk];
					t = this.findItemsBy(this._uk, n)[0]
				}
				return this._activeItem !== t
						&& (this._activeItem = t, this
								._emit(this.EVENT_ACTIVE_UPDATED)), this._activeItem
			}
		}, {
			key : "findItemsBy",
			value : function(e, t) {
				return _.filter(this._collections, function(n) {
							return n[e] === t
						})
			}
		}, {
			key : "findItemIndexBy",
			value : function(e, t) {
				var n = arguments.length <= 2 || void 0 === arguments[2]
						? !1
						: arguments[2], i = n ? _.findLastIndex : _.findIndex;
				return i.apply(_, [this._collections, function(n) {
									return n[e] === t
								}])
			}
		}, {
			key : "findItemIndexOf",
			value : function(e) {
				var t = arguments.length <= 1 || void 0 === arguments[1]
						? !1
						: arguments[1];
				this._typeCheck(e);
				var n = t ? _.findLastIndex : _.findIndex;
				return n.apply(_, [this._collections, function(t) {
									return t === e
								}])
			}
		}, {
			key : "addItem",
			value : function(e) {
				return this.insertItem(this._collections.length, e)
			}
		}, {
			key : "insertItem",
			value : function(e, t) {
				var n = arguments.length <= 2 || void 0 === arguments[2]
						? !0
						: arguments[2];
				this._typeCheck(t);
				var i = this._uk
						? this.findItemsBy(this._uk, t[this._uk])[0]
						: null;
				return i
						? (this._mergeItem(i, t), this._emit(
								this.EVENT_ITEMS_UPDATED, i, this.TYPE_UPDATE))
						: (this._collections.splice(e, 0, t), this._emit(
								this.EVENT_ITEMS_UPDATED, t, this.TYPE_ADD)), n
						&& this._persist(), i || t
			}
		}, {
			key : "removeItem",
			value : function(e) {
				var t = arguments.length <= 1 || void 0 === arguments[1]
						? !0
						: arguments[1];
				if (this._uk)
					return this.removeItemsBy(this._uk, "string" == typeof e
									? e
									: e[this._uk])[0];
				this._typeCheck(e);
				for (var n = 0, i = this._collections, s = i.length; s > n; n++)
					if (e === i[n])
						return this._emit(this.EVENT_ITEMS_UPDATED, i.splice(n,
										1)[0], this.TYPE_REMOVE), e === this._activeItem
								&& (this._activeItem = null, this
										._emit(this.EVENT_ACTIVE_UPDATED)), t
								&& this._persist(), e;
				return null
			}
		}, {
			key : "removeItemsBy",
			value : function(e, t) {
				var n = arguments.length <= 2 || void 0 === arguments[2]
						? !0
						: arguments[2], i = _.remove(this._collections,
						function(n) {
							return n[e] === t
						});
				return i.length > 0
						&& (this._emit(this.EVENT_ITEMS_UPDATED, i,
								this.TYPE_REMOVE), this._activeItem
								&& i.indexOf(this._activeItem) >= 0
								&& (this._activeItem = null, this
										._emit(this.EVENT_ACTIVE_UPDATED)), n
								&& this._persist()), i
			}
		}, {
			key : "clearItems",
			value : function() {
				this._collections = [], this._activeItem = null, this._emit(
						this.EVENT_ITEMS_UPDATED, this._collections,
						this.TYPE_REMOVE)
			}
		}, {
			key : "updateItem",
			value : function(e, t) {
				var n = arguments.length <= 2 || void 0 === arguments[2]
						? !0
						: arguments[2];
				if (this._uk && e)
					return this.updateItemsBy(this._uk, "string" == typeof e
									? e
									: e[this._uk], t)[0];
				this._typeCheck(e);
				for (var i = 0, s = this._collections, a = s.length; a > i; i++)
					if (e === s[i])
						return this._mergeItem(e, t), this._emit(
								this.EVENT_ITEMS_UPDATED, e, this.TYPE_UPDATE), n
								&& this._persist(), e;
				return null
			}
		}, {
			key : "updateItemsBy",
			value : function(e, t, n) {
				var i = this, s = arguments.length <= 3
						|| void 0 === arguments[3] ? !0 : arguments[3], a = this
						.findItemsBy(e, t);
				return a.length > 0
						&& (_.each(a, function(e) {
									i._mergeItem(e, n)
								}), this._emit(this.EVENT_ITEMS_UPDATED, a,
								this.TYPE_UPDATE), s && this._persist()), a
			}
		}, {
			key : "sortItems",
			value : function() {
				var e = arguments.length <= 0 || void 0 === arguments[0]
						? this._uk
						: arguments[0], t = arguments.length <= 1
						|| void 0 === arguments[1] ? "asc" : arguments[1], n = arguments.length <= 2
						|| void 0 === arguments[2] ? !0 : arguments[2], i = this._uk, s = i
						&& _.pluck(this._collections, i);
				this._collections = _.sortByOrder(this._collections, e, t);
				var a = i && _.pluck(this._collections, i);
				return i && s.join("") === a.join("") ? !1 : (n
						&& this._persist(), this._emit(
						this.EVENT_ITEMS_UPDATED, this._collections,
						this.TYPE_SORT), !0)
			}
		}, {
			key : "_persist",
			value : function() {
				try {
					var e = this._options.storageKey, t = this._options.max;
					if (!e)
						return;
					t = "number" == typeof t ? t : this._collections.length, this.ls
							.set(e, _.take(this._collections, t))
				} catch (n) {
					console.error("_persist fail", n)
				}
			}
		}, {
			key : "_restore",
			value : function() {
				try {
					var e = this._options.storageKey;
					if (!e)
						return;
					this._collections = this.ls.get(e) || []
				} catch (t) {
					console.error("_retore fail", t)
				}
			}
		}, {
			key : "_mergeCollections",
			value : function(e) {
				var t = this, n = this._collections;
				this._uk ? !function() {
					var i = null, s = t._uk;
					_.each(e, function(e) {
								(i = t.findItemsBy(s, e[s])[0]) ? t._mergeItem(
										i, e) : n.push(e)
							})
				}() : this._collections = n.concat(e)
			}
		}, {
			key : "_mergeItem",
			value : function(e, t) {
				e && t && _.assign(e, t)
			}
		}]), t
	}(l["default"]);
	u.prototype.EVENT_ITEMS_UPDATED = "store.coll.updated", u.prototype.EVENT_ACTIVE_UPDATED = "store.active.updated", u.prototype.TYPE_ADD = "add", u.prototype.TYPE_REMOVE = "remove", u.prototype.TYPE_UPDATE = "update", u.prototype.TYPE_SORT = "sort", t["default"] = u, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = function() {
		function e(t, n, s) {
			"ngInject";
			i(this, e), a.resolveInject(e, arguments, this)
		}
		return e.$inject = ["$log", "parrotService", "timerService"], s(e, [{
			key : "sendTypingNotificationEvent",
			value : function(e, t) {
				if (e && !e.isGroup()) {
					var n = _.last(e.messages) || {}, i = this.timerService
							.getTime();
					i - n.clientTimeStamp > 15e3
							|| t.length > 0
							&& (!this.lastSendTime || i - this.lastSendTime >= 3e3)
							&& this._sendTypingNotificationEvent(e)
				}
			}
		}, {
			key : "_sendTypingNotificationEvent",
			value : function(e) {
				var t = this;
				this.lastSendTime = this.timerService.getTime(), this.parrotService
						.typingNotificationTick({
									targetRegId : e.pnsId
								}).then(function(e) {
									t.$log.debug(
											"sendTypingNotificationEvent succ",
											e)
								}, function(e) {
									t.$log.warn(
											"sendTypingNotificationEvent fail",
											e)
								})
			}
		}]), e
	}();
	t["default"] = o, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n() {
		"ngInject";
		function e(e, t, n) {
			function i(e) {
				var t = /(?:(?:https?|file):\/\/|www\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:;,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:;,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:;,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gi;
				return e.replace(t, function(e) {
							if ("http" === e.substring(0, 4)
									|| "https" === e.substring(0, 5))
								return '<a target="' + s + '" href="' + e
										+ '">' + e + "</a>";
							var t = "http://" + e;
							return '<a target="' + s + '" href="' + t + '">'
									+ e + "</a>"
						})
			}
			var s = n.target ? n.target : "_blank", a = n.replaceUrl;
			t[0].innerHTML = i(a)
		}
		return {
			restrict : "A",
			replace : !0,
			link : e
		}
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			}), t["default"] = n, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n() {
		"ngInject";
		function e(e, t, n) {
			var i = t[0], s = void 0;
			i.tagName && "img" !== i.tagName.toLowerCase() ? e.$watch(
					function() {
						return i.style.backgroundImage
					}, function(e, t) {
						if (e && (s = e.match(/url\((.*)\)/))) {
							var a = new Image;
							a.onerror = function() {
								i.style.backgroundImage = 'url("' + n.errSrc
										+ '")'
							}, a.src = _.trim(s[1], ['"', "'"])
						}
					}) : t.bind("error", function() {
						n.src !== n.errSrc && n.$set("src", n.errSrc)
					})
		}
		return {
			restrict : "EA",
			link : e
		}
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			}), t["default"] = n, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n() {
		"ngInject";
		function e(e, t, n) {
			function i() {
				n.$set("src", e.errorSrc), a = !0, clearTimeout(o)
			}
			function s() {
				a = !1, o = setTimeout(function() {
							i()
						}, 3e3);
				var t = new Image;
				t.onload = function() {
					a || (n.$set("src", e.realSrc), clearTimeout(o))
				}, t.onerror = i, t.src = e.realSrc
			}
			if (e.loadSrc && n.$set("src", e.loadSrc), !e.realSrc)
				return void i();
			e.$watch("realSrc", function(e, t) {
						s()
					});
			var a = !1, o = 0
		}
		return {
			restrict : "EA",
			scope : {
				realSrc : "=",
				loadSrc : "=?",
				errorSrc : "=?",
				onLoad : "&",
				onFail : "&"
			},
			link : e
		}
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			}), t["default"] = n, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n() {
		function e(e, t, n) {
			var i = t[0];
			t.bind("scroll", function(t) {
						i.scrollHeight <= i.clientHeight
								|| (i.scrollTop - 3 < 0
										? e.onScrolledTop()
										: i.scrollHeight - i.scrollTop < i.clientHeight
												+ 3
												&& e.onScrolledBottom())
					}), t.bind("mousewheel", function(t) {
						i.scrollHeight <= i.clientHeight
								&& ("number" == typeof t.deltaY
										? t.deltaY < 0 ? e.onScrollUp() : e
												.onScrollDown()
										: "number" == typeof t.wheelDeltaY
												? t.wheelDeltaY > 0 ? e
														.onScrollUp() : e
														.onScrollDown()
												: "number" == typeof t.wheelDelta
														&& (t.wheelDelta > 0
																? e
																		.onScrollUp()
																: e
																		.onScrollDown()))
					})
		}
		return {
			restrict : "A",
			scope : {
				onScrolledTop : "&",
				onScrolledBottom : "&",
				onScrollUp : "&",
				onScrollDown : "&"
			},
			link : e
		}
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			}), t["default"] = n, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n(e, t) {
		"ngInject";
		function n(e, n, i) {
			function s() {
				t.hideItem(o)
			}
			var a = angular.element, o = i.tipKey;
			t.isItemHidden(i.tipKey) && a(n).addClass("ng-hide");
			var r = i.tipParentKey, c = i.tipClickItem ? a(document
					.getElementById(i.tipClickItem)) : null;
			t.addItem(o, r), c && c.on("click", s);
			var l = t.listen(t.EVENT_TIP_UPDATE, function(e, t) {
						t.k === i.tipKey
								&& a(n)[t.hide ? "addClass" : "removeClass"]("ng-hide")
					});
			e.$on("$destroy", function() {
						c && c.off("click", s), l()
					})
		}
		return {
			restrict : "A",
			scope : {
				tipKey : "=?",
				tipParentKey : "=?",
				tipClickItem : "=?"
			},
			link : n
		}
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			}), n.$inject = ["$log", "newTipService"], t["default"] = n, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n() {
		"ngInject";
		function e(e, t, n) {
			function i(t) {
				"HTML" === t.target.nodeName
						&& ("function" === r ? n.coClick() : "string" === r
								&& e.$apply(n.coClick))
			}
			var s = angular.element(document.querySelector("html"));
			s.on("click", i);
			var a = document.body.style, o = t[0].style, r = typeof n.coClick;
			e.$watch(n.coActive, function(e) {
						e
								? (a.pointerEvents = "none", o.pointerEvents = "auto")
								: a.pointerEvents = o.pointerEvents = ""
					}), e.$on("$destroy", function() {
						a.pointerEvents = "", s.off("click", i)
					})
		}
		return {
			restrict : "A",
			link : e
		}
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			}), t["default"] = n, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = null, r = function() {
		function e(t, n, s) {
			"ngInject";
			i(this, e), o = a.resolveInject(e, arguments)
		}
		return e.$inject = ["$log", "$q", "api"], s(e, [{
							key : "getSummary",
							value : function() {
								return this.accountApi("getSummary", {})
							}
						}, {
							key : "getUserInfo",
							value : function() {
								return this.accountApi("getUserInfo", {})
							}
						}, {
							key : "inComeView",
							value : function() {
								return this.accountApi("inComeView", {})
							}
						}, {
							key : "orderView",
							value : function() {
								return this.accountApi("orderView", {})
							}
						}, {
							key : "inComeDetail",
							value : function(e) {
								return this.accountApi("inComeDetail", {
											busi_mon : e
										})
							}
						}, {
							key : "ranking",
							value : function(e, t, n) {
								return this.accountApi("ranking", {
											limit : n,
											page : t,
											busi_mon : e
										})
							}
						}, {
							key : "inviteOpenAccount",
							value : function() {
								return this.accountApi("inviteOpenAccount", {})
							}
						}, {
							key : "accountApi",
							value : function(e, t) {
								var n = o.$q.defer();
								return o.api(e, {
											data : t
										}).then(function(e) {
											n.resolve(e)
										}, function(e) {
											n.reject(e)
										}), n.promise
							}
						}]), e
	}();
	t["default"] = r, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	function s(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	function a(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError("Super expression must either be null or a function, not "
					+ typeof t);
		e.prototype = Object.create(t && t.prototype, {
					constructor : {
						value : e,
						enumerable : !1,
						writable : !0,
						configurable : !0
					}
				}), t
				&& (Object.setPrototypeOf
						? Object.setPrototypeOf(e, t)
						: e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var o = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), r = function(e, t, n) {
		for (var i = !0; i;) {
			var s = e, a = t, o = n;
			i = !1, null === s && (s = Function.prototype);
			var r = Object.getOwnPropertyDescriptor(s, a);
			if (void 0 !== r) {
				if ("value" in r)
					return r.value;
				var c = r.get;
				return void 0 === c ? void 0 : c.call(o)
			}
			var l = Object.getPrototypeOf(s);
			if (null === l)
				return void 0;
			e = l, t = a, n = o, i = !0, r = l = void 0
		}
	}, c = n(18), l = n(31), u = i(l), d = function(e) {
		function t(e, n, i, a, o, l) {
			"ngInject";
			s(this, t), r(Object.getPrototypeOf(t.prototype), "constructor",
					this).call(this, i), c.resolveInject(t, arguments, this), this._manager = null, this
					._restore()
		}
		return a(t, e), t.$inject = ["$log", "$q", "$rootScope",
				"localStorageService", "modelFactory", "api"], o(t, [{
			key : "initialize",
			value : function(e) {
				var t = this, n = this.$q.defer();
				return e = _.pick(e, function(e) {
							return null != e && "" !== e
						}), this.api("getUser", {
							data : {
								uid : e.id
							}
						}).then(function(i) {
					t.setManager(_.assign(t.modelFactory
									.createManagerFromPayload(i.data.data), e)), n
							.resolve(t._manager)
				}, n.reject), n.promise
			}
		}, {
			key : "uninitialize",
			value : function() {
				this.setManager(null)
			}
		}, {
			key : "setManager",
			value : function(e) {
				this._manager = e ? this.modelFactory.createManager(e) : {}, this
						.addManagerPnsId(this._manager.pnsId), this
						._emit(this.EVENT_USER_CHANGED), this._persist()
			}
		}, {
			key : "getManager",
			value : function() {
				return this._manager
			}
		}, {
			key : "isPnsIdManager",
			value : function(e) {
				return this._mgrPnsIdList.indexOf(e) >= 0
			}
		}, {
			key : "addManagerPnsId",
			value : function(e) {
				e
						&& (this._mgrPnsIdList.push(e), this._mgrPnsIdList = _
								.unique(this._mgrPnsIdList), this._persist())
			}
		}, {
			key : "setManagerInService",
			value : function(e) {
				var t = this;
				this.api("setInService", {
							fragments : {
								type : e === !0 ? "on" : "off"
							}
						}).then(function(n) {
					n
							&& 200 === n.status
							&& (t._manager.inService = e, t
									.setManager(t._manager))
				}, function(e) {
					t.$log.warn("setInService", e)
				})
			}
		}, {
			key : "getManagerInService",
			value : function() {
				return this._manager.inService
			}
		}, {
			key : "isBCManager",
			value : function() {
				return "42" !== this._manager.yglx
						|| "22" !== this._manager.czdh
						&& "23" !== this._manager.czdh ? !1 : !0
			}
		}, {
			key : "isExamBlackUser",
			value : function() {
				return this._manager.examBlackUser ? !0 : !1
			}
		}, {
			key : "_restore",
			value : function() {
				var e = this.localStorageService;
				this._manager = this.modelFactory.createManager(e
						.get("currentManager")
						|| {}), this._mgrPnsIdList = e.get("managerPnsId")
						|| []
			}
		}, {
			key : "_persist",
			value : function() {
				var e = this.localStorageService;
				e.set("currentManager", this._manager), e.set("managerPnsId",
						this._mgrPnsIdList)
			}
		}]), t
	}(u["default"]);
	d.prototype.EVENT_USER_CHANGED = "MANAGER_EVENT_USER_CHANGED", t["default"] = d, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), s = function() {
		function e(t) {
			"ngInject";
			n(this, e), this.$rootScope = t, this.userGroups = {}, this.allUsers = {}, this.filterUserHelper = []
		}
		return e.$inject = ["$rootScope"], i(e, [{
					key : "listen",
					value : function(e, t) {
						return this.$rootScope.$on(e, t)
					}
				}, {
					key : "emit",
					value : function(e, t) {
						this.$rootScope.$emit(e, t), this.$rootScope
								.$emit(this.EVENT_ANY)
					}
				}, {
					key : "initialize",
					value : function(e) {
						this.userGroups = this._handlerTransferTargets(e), this
								._prepareHelpers(), this
								.emit(this.EVENT_GROUP_DATA_READY)
					}
				}, {
					key : "uninitialize",
					value : function() {
						this.userGroups = {}, this.allUsers = {}, this.filterUserHelper = []
					}
				}, {
					key : "toggleSelectUser",
					value : function(e) {
						e.selected = e.selected ? 0 : 1, this.emit(
								this.EVENT_USER_TOGGLED, e)
					}
				}, {
					key : "toggleSelectGroup",
					value : function(e) {
						var t = 0, n = void 0;
						e.users.forEach(function(e) {
							(e.examBlack || e.inService === !1 || "off_line" === e.status)
									&& t++
						}), n = this.getGroupSelectedCount(e) + t === e.users.length
								? 0
								: 1, e.users.forEach(function(e) {
									e.examBlack || e.inService === !1
											|| "off_line" === e.status
											|| (e.selected = n)
								}), this.emit(this.EVENT_GROUP_TOGGLED, e)
					}
				}, {
					key : "clearSelect",
					value : function() {
						var e = _.pluck(this.filterUserHelper, "selected")
								.join(","), t = _.pluck(
								_.each(this.filterUserHelper, function(e) {
											e.selected = 0
										}), "selected").join(",");
						e !== t && this.emit(this.EVENT_SELECT_CLEARED)
					}
				}, {
					key : "getBigGroups",
					value : function(e) {
						return this.userGroups[e]
					}
				}, {
					key : "getSearchResult",
					value : function(e) {
						var t, n = new RegExp(e.split("").join("|"), "g"), i = e
								.split("").length;
						return _.filter(this.filterUserHelper, function(e) {
									return t = (e.userName || "").match(n), t
											&& t.length >= i
								})
					}
				}, {
					key : "getSelectedUsers",
					value : function() {
						return _.filter(this.filterUserHelper, function(e) {
									return e.selected
								})
					}
				}, {
					key : "getGroupSelectedCount",
					value : function(e) {
						return _.reduce(e.users, function(e, t) {
									return t.selected ? ++e : e
								}, 0)
					}
				}, {
					key : "isUserBelongsToGroup",
					value : function(e, t) {
						return e.groups.indexOf(t.groupId) >= 0
					}
				}, {
					key : "_prepareHelpers",
					value : function() {
						var e, t, n, i, s = this.allUsers, a = this.filterUserHelper, o = this.userGroups;
						(o[this.BIG_GROUP_SALES] || [])
								.concat(o[this.BIG_GROUP_EXPERTS] || [])
								.forEach(function(o) {
									e = 0, i = o.groupId, t = [], o.users
											.forEach(function(o, r) {
												(o.online = "on_line" === o.status)
														&& ++e, o.selected = 0, (n = s[o.userId])
														? n.groups.indexOf(i) < 0
																&& (n.groups
																		.push(i), t
																		.push(n))
														: (o.groups = [i], t
																.push(o), s[o.userId] = o, a
																.push(o))
											}), o.users = _.unique(t, function(
													e) {
												return e.userId
											}), o.onlineCount = e
								})
					}
				}, {
					key : "_handlerTransferTargets",
					value : function(e) {
						var t, n = {
							others : "其他",
							investmentAdviser : "投资咨询"
						}, i = {};
						return e
								&& (t = _.keys(e.salesOrgi), i.experts = e.experts, i.sales = [], _
										.each(t, function(t) {
													i.sales.push({
																groupId : t,
																groupName : n[t],
																users : e.salesOrgi[t]
															})
												})), i
					}
				}]), e
	}();
	s.prototype.BIG_GROUP_SALES = "sales", s.prototype.BIG_GROUP_EXPERTS = "experts", s.prototype.EVENT_ANY = "TRANSFER_EVENT_ANY", s.prototype.EVENT_GROUP_DATA_READY = "TRANSFER_EVENT_GROUP_DATA_READY", s.prototype.EVENT_USER_TOGGLED = "TRANSFER_EVENT_USER_TOGGLED", s.prototype.EVENT_GROUP_TOGGLED = "TRANSFER_EVENT_GROUP_TOGGLED", s.prototype.EVENT_SELECT_CLEARED = "TRANSFER_EVENT_SELECT_CLEARED", t["default"] = s, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = void 0 !== typeof cordova, r = function() {
		function e(t, n, s, o, r, c) {
			"ngInject";
			i(this, e), a.resolveInject(e, arguments, this), this._authorized = !1, this._authInfo = null, this
					._restore()
		}
		return e.$inject = ["$log", "$q", "$http", "localStorageService",
				"api", "appVersion"], s(e, [{
					key : "login",
					value : function(e, t, n) {
						var i = this, s = this.$q.defer();
						return this.api("oauthLogin", {
									data : {
										user_id : e,
										password : t,
										kaptcha : n
									}
								}).then(function(e) {
									var t = e.data;
									i.setAuthInfo({
												id : t.user_id,
												token : t.access_token,
												mail : t.user_info.mail,
												title : t.user_info.title
											}), s.resolve(e)
								}, function(e) {
									i.$log.error("login error", e), s.reject(e)
								}), s.promise
					}
				}, {
					key : "logout",
					value : function(e) {
						var t = this, n = this.$q.defer();
						return e
								? (this.setAuthInfo(null), n.resolve())
								: (this.setAuthInfo(null), this.api(
										"oauthLogout", {
											headers : {
												version : this.appVersion
											}
										}).then(function(e) {
											n.resolve(e)
										}, function(e) {
											t.$log.warn("logout fail", e), n
													.reject(e)
										})), n.promise
					}
				}, {
					key : "verify",
					value : function() {
						var e = this, t = this.$q.defer(), n = this
								.getAuthInfo();
						return n && n.token ? this.api("verifyToken", {
									headers : {
										token : n.token
									}
								}).then(function(i) {
									e.setAuthInfo(n), t.resolve(i)
								}, function(e) {
									t.reject(e)
								}) : t.reject(null), t.promise
					}
				}, {
					key : "setAuthInfo",
					value : function(e) {
						if (this._authInfo = e ? e : _.omit(this._authInfo,
								"token"), this._authorized = !!this._authInfo.token, this._authorized) {
							var t = this.$http.defaults.headers.common;
							t.clickeggsToken = t.token = this._authInfo.token, t.uid = this._authInfo.id
						}
						this._persist()
					}
				}, {
					key : "getAuthInfo",
					value : function() {
						return this._authInfo
					}
				}, {
					key : "isAuthorized",
					value : function() {
						return this._authorized && this._authInfo.token
					}
				}, {
					key : "hasToken",
					value : function() {
						return !!this._authInfo.token
					}
				}, {
					key : "_restore",
					value : function() {
						var e = this.localStorageService;
						this._authInfo = e.get("currentAuth") || {}, o
								|| (this._authInfo.token = a
										.getCookie("clickeggsToken"))
					}
				}, {
					key : "_persist",
					value : function() {
						this.localStorageService.set("currentAuth", o
										? this._authInfo
										: _.omit(this._authInfo, "token"))
					}
				}]), e
	}();
	t["default"] = r, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = function() {
		function e(t, n, s, o, r, c, l, u, d, p, f, g, h, v, m, y, _, S, I) {
			"ngInject";
			i(this, e), a.resolveInject(e, arguments, this), this.appVersion = null, this.appType = null, this.isInit = !1
		}
		return e.$inject = ["$log", "$rootScope", "$state", "$q", "appId",
				"api", "parrotService", "managerService", "httpCacheService",
				"Manager", "modelFactory", "managerRecentContactService",
				"orderService", "messageService", "transferGroupService",
				"quickCommentService", "User", "deviceService",
				"starLevelService"], s(e, [{
			key : "initialize",
			value : function(e, t, n) {
				var i = this;
				this.$log.debug("MainService initialize"), this.appVersion = e, this.appType = t;
				var s = this.$q.defer();
				return this.isInit ? s.resolve() : this.managerService
						.initialize(n).then(function(e) {
							i._addParrotRegId(e).then(function() {
										i.api("getOrders", {
													data : {
														uid : e.id,
														managerPnsId : e.pnsId
													}
												})
									}), i.managerRecentContactService
									.initialize(e), i.messageService
									.initialize(e,
											i.managerRecentContactService), i.$log
									.debug("MainService initialize end"), i.isInit = !0, s
									.resolve()
						}, function(e) {
							s.reject(e)
						}), s.promise
			}
		}, {
			key : "uninitialize",
			value : function() {
				this.$log.debug("MainService uninitialize");
				var e = this.$q.defer();
				return this.orderService.uninitialize(), this.managerService
						.uninitialize(), this.quickCommentService
						.uninitialize(), this.managerRecentContactService
						.uninitialize(), this.transferGroupService
						.uninitialize(), this.starLevelService.uninitialize(), this.httpCacheService
						.clear(), this.parrotService.clear(), this.isInit = !1, this.$log
						.debug("MainService uninitialize end"), e.resolve(), e.promise
			}
		}, {
			key : "_addParrotRegId",
			value : function(e) {
				var t = this;
				return this.parrotService.addRegId({
							appId : this.appId,
							regId : e.pnsId,
							token : e.token
						}).then(function(n) {
					var i = n.data;
					t.$log.debug("connectParrotServer ok and regId added",
							e.pnsId), t.parrotService.setRegInfo({
						uid : e.id,
						source : t.appType,
						regName : e.name,
						version : t.appVersion,
						isExpert : e.isExpert || "0",
						disableRiskWarning : e.qualification === t.Manager.QUALIFICATION_CONSULTANT,
						qualification : t.Manager.QUALIFICATION_CONSULTANT,
						role : "manager",
						clientType : t.User.TYPE_JYS
					}), t.managerRecentContactService
							.syncRecentContacts(i.recentContacts)
				})
			}
		}]), e
	}();
	t["default"] = o, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	function s(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	function a(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError("Super expression must either be null or a function, not "
					+ typeof t);
		e.prototype = Object.create(t && t.prototype, {
					constructor : {
						value : e,
						enumerable : !1,
						writable : !0,
						configurable : !0
					}
				}), t
				&& (Object.setPrototypeOf
						? Object.setPrototypeOf(e, t)
						: e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var o = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), r = function(e, t, n) {
		for (var i = !0; i;) {
			var s = e, a = t, o = n;
			i = !1, null === s && (s = Function.prototype);
			var r = Object.getOwnPropertyDescriptor(s, a);
			if (void 0 !== r) {
				if ("value" in r)
					return r.value;
				var c = r.get;
				return void 0 === c ? void 0 : c.call(o)
			}
			var l = Object.getPrototypeOf(s);
			if (null === l)
				return void 0;
			e = l, t = a, n = o, i = !0, r = l = void 0
		}
	}, c = n(18), l = n(53), u = i(l), d = function(e) {
		function t(e, n, i, a, o, l, u, d, p, f, g, h) {
			"ngInject";
			s(this, t), r(Object.getPrototypeOf(t.prototype), "constructor",
					this).apply(this, arguments), c.resolveInject(t, arguments,
					this)
		}
		return a(t, e), t.$inject = ["$log", "$q", "$timeout", "$rootScope",
				"api", "parrotService", "modelFactory", "localStorageService",
				"Contact", "Message", "Order", "timerService"], o(t, [{
					key : "excludeKnowledgeOrder",
					value : function() {
						this._excludeKnowledgeOrder = !0
					}
				}, {
					key : "syncRecentContacts",
					value : function(e) {
						var n = this, i = this.modelFactory, s = this.$q
								.defer(), a = r(
								Object.getPrototypeOf(t.prototype),
								"syncRecentContacts", this).call(this, e), o = this
								.api("getRecentClients").then(function(e) {
									var t = _.map(e.data.data.list,
											function(e) {
												return i
														.createContactFromPayload(e)
											});
									n.setAllItems(n._excludeKnowledgeOrder ? _
											.filter(t, function(e) {
												return "item_type_knowledge" !== e.orderType
														&& "item_type_report" !== e.orderType
											})
											: t), n.sortContacts()
											|| n._emit(n.EVENT_ITEMS_UPDATED,
													n._collections)
								}, function(e) {
									n.$log.warn("syncRecentContacts", e)
								});
						return this.$q.all([a, o]).then(function() {
									var e = n.getAllContacts(), t = 0;
									_.each(e, function(e) {
												t += e.unread
											}), n.setTotalUnread(t), s
											.resolve()
								}, function() {
									return s.reject()
								}), s.promise
					}
				}, {
					key : "addTransferOrderHistoryMessages",
					value : function(e, t, n, i) {
						var s = this;
						e = this._sortMessages(this._filtrateMessage(e));
						var a, o, r, c = this.timerService.getTime(), l = c;
						_.forEachRight(e, function(e) {
									e.timestamp = --l, e.__transfer = !0
								}), e.unshift(new this.Message({
									id : --l,
									type : this.Message.TYPE_TRANSFER,
									from : t,
									timestamp : l,
									__transfer : !0,
									__transferStart : !0,
									content : {
										name : n,
										note : i
									}
								})), e.push(new this.Message({
									id : c,
									type : this.Message.TYPE_TRANSFER,
									from : t,
									timestamp : c,
									__transfer : !0,
									__transferEnd : !0,
									content : "以上是" + n + "与客户的聊天记录"
								})), (r = this.getContactByPnsId(t))
								&& (o = this.getAllMessagesOfContact(t), a = _
										.findIndex(o, function(e) {
													return e.timestamp > c
												}), r.messages = this._allMessages[t] = 0 > a
										? o.concat(e)
										: _.take(o, a).concat(e).concat(_
												.takeRight(o, o.length - a)), this
										._persist(), this.$timeout(function() {
											s._emit(s.EVENT_MESSAGES, r, !1)
										}, 100)), this.sortContacts()
					}
				}, {
					key : "_filtrateMessage",
					value : function(e) {
						var t = /^您好，.+为您提供服务。$|正在为您转接广发证券专家服务../, n = this.Message.TYPE_SYSTEM;
						return _.filter(e, function(e) {
									return !(e.type === n && e.content.text
											.match(t))
								})
					}
				}, {
					key : "_mergeItem",
					value : function(e, t) {
						if (e && t) {
							if (e.type === this.Contact.TYPE_ORDER
									&& e.type !== t.type)
								return;
							_.assign(e, _.pick(_.omit(t, ["messages", "unread",
															"unreadMessages"]),
											function(e) {
												return void 0 !== e
											}))
						}
					}
				}, {
					key : "addBlackClientTips",
					value : function(e) {
						var t = this.Message;
						e
								&& (this.removeBlackListClientMsg(e), "yes" === e.isBlackList
										&& this.addNewMessages(
												this.modelFactory
														.createMessage({
															timestamp : this.timerService
																	.getTime(),
															type : t.TYPE_SYSTEM,
															from : "system",
															to : e.pnsId,
															content : {
																text : "当前客户的行为异常，无需提供服务.",
																type : "BLACK_LIST_CLIENT"
															}
														}), e.pnsId))
					}
				}]), t
	}(u["default"]);
	t["default"] = d, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	function s(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	function a(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError("Super expression must either be null or a function, not "
					+ typeof t);
		e.prototype = Object.create(t && t.prototype, {
					constructor : {
						value : e,
						enumerable : !1,
						writable : !0,
						configurable : !0
					}
				}), t
				&& (Object.setPrototypeOf
						? Object.setPrototypeOf(e, t)
						: e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var o = function() {
		function e(e, t) {
			var n = [], i = !0, s = !1, a = void 0;
			try {
				for (var o, r = e[Symbol.iterator](); !(i = (o = r.next()).done)
						&& (n.push(o.value), !t || n.length !== t); i = !0);
			} catch (c) {
				s = !0, a = c
			} finally {
				try {
					!i && r["return"] && r["return"]()
				} finally {
					if (s)
						throw a
				}
			}
			return n
		}
		return function(t, n) {
			if (Array.isArray(t))
				return t;
			if (Symbol.iterator in Object(t))
				return e(t, n);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}
	}(), r = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), c = function(e, t, n) {
		for (var i = !0; i;) {
			var s = e, a = t, o = n;
			i = !1, null === s && (s = Function.prototype);
			var r = Object.getOwnPropertyDescriptor(s, a);
			if (void 0 !== r) {
				if ("value" in r)
					return r.value;
				var c = r.get;
				return void 0 === c ? void 0 : c.call(o)
			}
			var l = Object.getPrototypeOf(s);
			if (null === l)
				return void 0;
			e = l, t = a, n = o, i = !0, r = l = void 0
		}
	}, l = n(39), u = i(l), d = n(18), p = function(e) {
		function t(e, n, i, a, o, r, l, u, p, f, g, h) {
			"ngInject";
			s(this, t), c(Object.getPrototypeOf(t.prototype), "constructor",
					this).call(this, a, u), d.resolveInject(t, arguments, this), this._delContacts = [], this._DEFAUTSETTINGS = {
				top : [],
				noDisturb : []
			}, this._contactSettings = this._DEFAUTSETTINGS, this.setOptions({
						uniqueKey : "pnsId",
						itemClass : p,
						max : 100,
						messagePerPage : 20,
						maxMessage : 200
					}), this.initialize(null), this.contactSync = n.defer(), this
					._subscribeEvents()
		}
		return a(t, e), t.$inject = ["$log", "$q", "$timeout", "$rootScope",
				"api", "parrotService", "modelFactory", "localStorageService",
				"Contact", "Message", "Order", "timerService"], r(t, [{
					key : "isContactSync",
					value : function() {
						return this.contactSync.promise
					}
				}, {
					key : "initialize",
					value : function(e) {
						e
								? e.pnsId !== (this._user || {}).pnsId
										&& (this._user = e, this._restore(), this
												._emit(
														this.EVENT_ITEMS_UPDATED,
														this._collections), this
												.sortContacts())
								: (this._user = null, this._collections = [], this._activeItem = null, this._allMessages = {}, this._totalUnread = 0, this._newComerMessages = {}, this._newComerFetching = {}, this._nextMessageOffset = {}, this._noMoreHistory = {}, this
										._emit(this.EVENT_ITEMS_UPDATED,
												this._collections))
					}
				}, {
					key : "uninitialize",
					value : function() {
						this.initialize(null)
					}
				}, {
					key : "syncRecentContacts",
					value : function(e) {
						var t = this, n = this.$q.defer(), i = this.parrotService
								.getPrivateData(), s = void 0;
						return s = e ? this.$q.resolve({
									data : {
										recentContacts : e
									}
								}) : this.parrotService.getRecentContacts(), this.$q
								.all([i, s]).then(function(e) {
									var i = o(e, 2), s = i[0], a = i[1], r = s.data.privateData;
									t._contactSettings = r && r.contacts
											|| t._DEFAUTSETTINGS, t
											._handleParrotContacts(a.data.recentContacts), t
											._emit(t.EVENT_INIT_CONTACT, t
															.getAllContacts()), t.contactSync
											.resolve(), n.resolve(!0)
								}, function(e) {
									n.reject(e)
								}), n.promise
					}
				}, {
					key : "getAllContacts",
					value : function() {
						return this.getAllItems()
					}
				}, {
					key : "setAllContacts",
					value : function(e) {
						return this.setAllItems(e)
					}
				}, {
					key : "getSelectedContact",
					value : function() {
						return this.getActiveItem()
					}
				}, {
					key : "getSelectedContactIndex",
					value : function() {
						return this.getActiveItemIndex()
					}
				}, {
					key : "selectContact",
					value : function(e) {
						return this.setActiveItem(e)
					}
				}, {
					key : "getContactByPnsId",
					value : function(e) {
						var t = arguments.length <= 1
								|| void 0 === arguments[1] ? !1 : arguments[1], n = this
								.findContactsBy("pnsId", e)[0];
						return !n && t ? _.find(this._delContacts, function(t) {
									return t.pnsId === e
								}) : n
					}
				}, {
					key : "findContactsBy",
					value : function(e, t) {
						return this.findItemsBy(e, t)
					}
				}, {
					key : "findContactIndexByPnsId",
					value : function(e) {
						return this.findItemIndexBy("pnsId", e)
					}
				}, {
					key : "findContactIndexOf",
					value : function(e) {
						return this.findItemIndexOf(e)
					}
				}, {
					key : "addContact",
					value : function(e) {
						return this.addItem(e)
					}
				}, {
					key : "insertContact",
					value : function(e, t) {
						return this.insertItem(e, t)
					}
				}, {
					key : "removeContact",
					value : function(e) {
						return this.removeItem(e)
					}
				}, {
					key : "updateContact",
					value : function(e, t) {
						return this.updateItem(e, t)
					}
				}, {
					key : "sortContacts",
					value : function() {
						return this.sortItems()
					}
				}, {
					key : "setActiveItem",
					value : function(e) {
						var n = c(Object.getPrototypeOf(t.prototype),
								"setActiveItem", this).call(this, e);
						return n
								&& (this._updateUnreadMessages(n), this
										._updateUnread(), this._emit(
										this.EVENT_MESSAGES, n), this
										._persist()), n
					}
				}, {
					key : "_updateUnreadMessages",
					value : function(e) {
						var t = this, n = arguments.length <= 1
								|| void 0 === arguments[1] ? !1 : arguments[1];
						e.unread = 0, _.isEmpty(e.unreadMessages)
								|| !function() {
									!n
											&& t._concatMessages(e,
													e.unreadMessages);
									var i = (_.pluck(e.unreadMessages, "id"), void 0);
									t.parrotService._sendPushAck(_.map(
											e.unreadMessages, function(e) {
												return i = e.groupId || e.from, i
														? e.id + "::" + i
														: e.id
											})), e.unreadMessages = []
								}()
					}
				}, {
					key : "addItem",
					value : function(e) {
						return this.removeDelContact(e), this.insertItem(0, e)
					}
				}, {
					key : "removeDelContact",
					value : function(e) {
						_.remove(this._delContacts, function(t) {
									return t.pnsId === e.pnsId
								})
					}
				}, {
					key : "insertItem",
					value : function(e, t) {
						var n = arguments.length <= 2
								|| void 0 === arguments[2] ? !0 : arguments[2], i = t.pnsId, s = void 0, a = this
								.findItemsBy("pnsId", i)[0];
						if (a)
							this._mergeItem(a, t), s = a, this._emit(
									this.EVENT_ITEMS_UPDATED, a,
									this.TYPE_UPDATE);
						else {
							var r = _.partition(this._collections, function(e) {
										return !!e.isTop
									}), c = o(r, 2), l = c[0], u = c[1];
							t.isTop || t.exclusive
									? e >= l.length ? l = [t].concat(l) : l
											.splice(e, 0, t)
									: (e -= l.length, 0 >= e ? u = [t]
											.concat(u) : u.splice(e, 0, t)), s = t, this._collections = l
									.concat(u), this._emit(
									this.EVENT_ITEMS_UPDATED, s, this.TYPE_ADD)
						}
						if (a && t.orderType === this.Order.TYPE_RESTORE
								&& this.sortItems(), !a
								|| this._newComerMessages[i]) {
							s.unreadMessages = this._newComerMessages[i] || [];
							var d = _.filter(s.unreadMessages, function(e) {
								return e.content
										&& e.content.tags
										&& e.content.tags.indexOf("dirty") >= -1
							});
							s.unread = s.unreadMessages.length - d.length, this._allMessages[i] = s.messages, delete this._newComerMessages[i], this
									._persist()
						} else
							n && this._persist();
						return this._updateUnread(), s
					}
				}, {
					key : "deleteItem",
					value : function(e) {
						var t = this, n = this.$q.defer(), i = [];
						return _.isArray(e) ? _.each(e, function(e) {
									i.push(e.pnsId)
								}) : i.push("string" == typeof e ? e : e.pnsId), this.parrotService
								.removeContacts({
											regIdList : i
										}).then(function(i) {
									"success" === i.data.event
											&& t.removeItem(e), n.resolve(!0)
								}, function(e) {
									$log.debug("deleteItem", e), n.reject(e)
								}), n.promise
					}
				}, {
					key : "removeItem",
					value : function(e, t) {
						return this.removeItemsBy("pnsId", "string" == typeof e
										? e
										: e.pnsId)[0]
					}
				}, {
					key : "removeItemsBy",
					value : function(e, n) {
						var i = this, s = (arguments.length <= 2
								|| void 0 === arguments[2] ? !0 : arguments[2], c(
								Object.getPrototypeOf(t.prototype),
								"removeItemsBy", this).call(this, e, n, !1)), a = _
								.reduce(this._delContacts, function(e, t) {
											return e[t.pnsId] = t, e
										}, {});
						return s.length > 0 && (_.each(s, function(e) {
									i._updateUnreadMessages(e), a[e.pnsId]
											|| i._delContacts.push(e)
								}), this._updateUnread(), this._persist()), s
					}
				}, {
					key : "sortItems",
					value : function(e) {
						{
							var n = this, i = arguments.length <= 1
									|| void 0 === arguments[1]
									? "asc"
									: arguments[1];
							arguments.length <= 2 || void 0 === arguments[2]
									? !0
									: arguments[2]
						}
						if (e)
							return c(Object.getPrototypeOf(t.prototype),
									"sortItems", this).call(this, e, i);
						var s = function() {
							var e = void 0, t = function(t) {
								var n = _.isEmpty(t.unreadMessages)
										? t.messages
										: t.unreadMessages;
								return e = _.last(n) || {}, -(e.timestamp > 0
										? e.timestamp
										: t.createTime || t.pinToTopTime)
							}, i = _.partition(n._collections, function(e) {
										return !!e.isTop
									}), s = o(i, 2), a = s[0], r = s[1], c = _
									.pluck(n._collections, "pnsId"), l = _
									.pluck(	n._collections = _.sortBy(a, t)
													.concat(_.sortBy(r, t)),
											"pnsId");
							return c.join("") !== l.join("") ? (n._emit(
									n.EVENT_ITEMS_UPDATED, n._collections,
									n.TYPE_SORT), n._persist(), {
								v : !0
							}) : {
								v : !1
							}
						}();
						return "object" == typeof s ? s.v : void 0
					}
				}, {
					key : "markMessagesRead",
					value : function(e) {
						return e.unread = 0, this._updateUnread()
					}
				}, {
					key : "hasMoreHistoryMessages",
					value : function(e) {
						return e.messages.length < this
								.getAllMessagesOfContact(e.pnsId).length
								|| !this._noMoreHistory[e.pnsId]
					}
				}, {
					key : "loadMoreHistoryMessages",
					value : function(e) {
						var t = this, n = arguments.length <= 1
								|| void 0 === arguments[1] ? !1 : arguments[1], i = arguments.length <= 2
								|| void 0 === arguments[2] ? !0 : arguments[2], s = e.messages.length, a = this
								.getAllMessagesOfContact(e.pnsId), o = this.$q
								.defer();
						return n || s >= a.length
								? (n && delete this._nextMessageOffset[e.pnsId], this
										._getHistoryFromServer(e).then(
												function(n) {
													o.resolve(n), i
															&& t
																	._emit(
																			t.EVENT_MESSAGES,
																			e,
																			!0)
												}, function(e) {
													o.reject(e)
												}))
								: (e.messages = _.takeRight(a, s
												+ this._options.messagePerPage), i
										&& this.$timeout(function() {
													o.resolve(!0), t._emit(
															t.EVENT_MESSAGES,
															e, !0)
												})), o.promise
					}
				}, {
					key : "addNewMessages",
					value : function(e, t) {
						var n = this, i = arguments.length <= 2
								|| void 0 === arguments[2] ? !1 : arguments[2];
						if (!this._user || !this._user.pnsId)
							return void this.$log
									.warn("cannot addNewMessages without pnsId");
						if (e = this._filtrateMessage(_.isArray(e) ? e : [e]), _
								.each(e, function(e) {
											e.clientTimeStamp = n.timerService
													.getTime()
										}), t)
							return this._addNewMessages(e, t, i), void this
									._persist();
						var s = this._user.pnsId, a = _.groupBy(e, function(e) {
									return e.isGroup()
											? e.groupId
											: e.from === s ? e.to : e.from
								});
						_.each(a, function(e, t) {
									n._addNewMessages(e, t)
								}), this.sortItems(), this._updateUnread(), this
								._persist(), this._emit(
								this.EVENT_ITEMS_UPDATED, this._collections)
					}
				}, {
					key : "_concatMessages",
					value : function(e, t) {
						e.messages = _.unique(e.messages.concat(t), "id"), this._allMessages[e.pnsId] = this
								.getAllMessagesOfContact(e.pnsId).concat(t)
					}
				}, {
					key : "updateMessage",
					value : function(e, t, n) {
						return this.updateMessagesBy(e, function(e) {
									return _.filter(e, function(e) {
												return e.id === t
											})
								}, n)[0]
					}
				}, {
					key : "updateMessagesBy",
					value : function(e, t, n) {
						if ("function" != typeof t)
							throw new Error("filterFn must be a function");
						var i = "string" == typeof e, s = i ? e : e.pnsId, a = t(this._allMessages[s])
								|| [];
						return _.each(a, function(e) {
									_.assign(e, n)
								}), a.length > 0
								&& (this
										._emit(this.EVENT_MESSAGES,
												i ? this.findItemsBy(this._uk,
														s)[0] : e), this
										._persist()), a
					}
				}, {
					key : "removeMessage",
					value : function(e, t) {
						for (var n = "string" == typeof e ? this.findItemsBy(
								this._uk, e)[0] : e, i = this._allMessages[n.pnsId], s = n.messages, a = null, o = i.length
								- 1, r = s.length - 1; r >= 0; o--, r--)
							if (s[r].id === t) {
								a = i.splice(o, 1)[0], i !== s
										&& s.splice(r, 1), this._emit(
										this.EVENT_MESSAGES, n), this
										._persist();
								break
							}
						return a
					}
				}, {
					key : "removeBlackListClientMsg",
					value : function(e) {
						for (var t = "string" == typeof e ? this.findItemsBy(
								this._uk, e)[0] : e, n = this._allMessages[t.pnsId], i = t.messages, s = null, a = n.length
								- 1, o = i.length - 1; o >= 0; a--, o--)
							if ("BLACK_LIST_CLIENT" === i[o].content.type) {
								s = n.splice(a, 1)[0], n !== i
										&& i.splice(o, 1), this._emit(
										this.EVENT_MESSAGES, t), this
										._persist();
								break
							}
						return s
					}
				}, {
					key : "findMessageById",
					value : function(e, t) {
						var n = this._allMessages[e.pnsId];
						return _.find(n, function(e) {
									return e.id === t
								})[0]
					}
				}, {
					key : "setTotalUnread",
					value : function(e) {
						this._totalUnread = e
					}
				}, {
					key : "getTotalUnread",
					value : function() {
						return this._totalUnread
					}
				}, {
					key : "getAllMessagesOfContact",
					value : function(e) {
						var t = this._allMessages[e];
						return t ? t : this._allMessages[e] = []
					}
				}, {
					key : "pinToTop",
					value : function(e, t) {
						e.isTop = !!t;
						var n = this._contactSettings;
						e.isTop ? n.top.push(e.pnsId) : n.top = _.filter(n.top,
								function(t) {
									return t !== e.pnsId
								}), this.parrotService.setPrivateData({
									contacts : n
								});
						var i = void 0;
						t && (i = _.find(this._delContacts, function(t) {
									return e.pnsId === t.pnsId
								})) && this.addItem(e), e.isTop
								&& 0 === e.messages.length
								&& (e.pinToTopTime = (new Date).getTime()), this
								.sortContacts()
					}
				}, {
					key : "doNotDisturb",
					value : function(e, t) {
						e.noDisturb = !!t;
						var n = this._contactSettings;
						e.noDisturb
								? n.noDisturb.push(e.pnsId)
								: n.noDisturb = _.filter(n.noDisturb, function(
												t) {
											return t !== e.pnsId
										}), this.parrotService.setPrivateData({
									contacts : n
								}), this._updateUnread(), this._persist()
					}
				}, {
					key : "_mergeItem",
					value : function(e, t) {
						e
								&& t
								&& _
										.assign(
												e,
												_
														.pick(
																_
																		.omit(
																				t,
																				[
																						"messages",
																						"unread",
																						"unreadMessages"]),
																function(e) {
																	return void 0 !== e
																}))
					}
				}, {
					key : "_persist",
					value : function() {
						if (this._user && this._user.pnsId)
							try {
								var e = this._filtrateStorage(), t = this.localStorageService, n = this._user.pnsId;
								t.set("contact." + n, e.contacts), t.set(
										"message." + n, e.allMessages), t.set(
										"delContact." + n, this._delContacts)
							} catch (i) {
								this.$log.warn("Cannot persist contact", i)
							}
					}
				}, {
					key : "_restore",
					value : function() {
						var e = this;
						if (this._user && this._user.pnsId)
							try {
								!function() {
									var t = e.modelFactory, n = e.localStorageService, i = e._user.pnsId, s = e.Message.STATUS_SENDING, a = e.Message.STATUS_FAIL, o = n
											.get("message." + i)
											|| {}, r = n.get("contact." + i)
											|| [], c = n.get("delContact." + i)
											|| [], l = e._options.messagePerPage;
									_.each(o, function(n, i) {
										o[i] = _.map(n, function(n) {
											return t
													.createMessage(e
															._restoreOldMessage(n.status === s
																	? (n.status = a, n)
																	: n))
										})
									}), _.each(r, function(n, i) {
										n.messages = _.takeRight(o[n.pnsId], l), n.unreadMessages = [], n.unread = 0, r[i] = t
												.createContact(e
														._restoreOldContact(n))
									}), e._collections = r, e._delContacts = c, e._allMessages = o, e._activeItem
											&& e.setActiveItem(e._activeItem)
								}()
							} catch (t) {
								this.$log.warn("Cannot restore contact", t)
							}
					}
				}, {
					key : "_handleParrotContacts",
					value : function(e) {
						var t = this;
						if (_.isArray(e) && e.length > 0) {
							var n = (this.Contact.TYPE_GROUP, this.modelFactory), i = [], s = void 0, a = this._contactSettings.top, o = this._contactSettings.noDisturb, r = [], c = _
									.reduce(_.map(e, function(e) {
										return 1 === (r = _.keys(e.regInfo)).length
												&& "regId" === r[0] ? null : n
												.createContactFromPayload(e)
									}), function(e, t) {
										return t
												&& "system" !== t.pnsId
												&& (t.isTop = !!_.find(a,
														function(e) {
															return e === t.pnsId
														}), t.noDisturb = !!_
														.find(o, function(e) {
															return e === t.pnsId
														}), e[t.pnsId] = t), e
									}, {});
							_.each(this._collections, function(e) {
								(s = c[e.pnsId])
										? (delete c[e.pnsId], t
												._mergeItem(e, s), i.push(e), t
												._decideAndUpdateContactMessage(
														e, s.messages[0]))
										: (e.isTop = !!_.find(a, function(t) {
													return t === e.pnsId
												}), e.noDisturb = !!_.find(o,
												function(t) {
													return t === e.pnsId
												}), i.push(e))
							}), i = _.values(c).concat(i), this._collections = i, this
									.mergeDelContacts(), this.sortContacts()
						}
					}
				}, {
					key : "mergeDelContacts",
					value : function() {
						var e = this, t = void 0, n = _.reduce(
								this._collections, function(e, t) {
									return e[t.pnsId] = t, e
								}, {});
						_.each(this._delContacts, function(i) {
									(t = n[i.pnsId]) && e.removeContact(t)
								})
					}
				}, {
					key : "_decideAndUpdateContactMessage",
					value : function(e, t) {
						if (t) {
							var n = e.pnsId, i = this
									.getAllMessagesOfContact(n), s = _
									.findLast(i, function(e) {
												return !e.isLocal()
														&& !e.isTemp()
											});
							(0 === i.length || s && s.id !== t.id
									&& _.isEmpty(e.unreadMessages))
									&& (this._allMessages[n] = e.messages = [t], delete this._nextMessageOffset[n], delete this._noMoreHistory[n])
						}
					}
				}, {
					key : "_filtrateStorage",
					value : function() {
						var e, t = this._options, n = _.take(this._collections,
								t.max), i = this._collections.length > t.max;
						return {
							contacts : _.map(n, function(t) {
								return e = _.assign({}, t), delete e.messages, e
							}),
							allMessages : _.reduce(i
											? _.pick(this._allMessages, _
															.pluck(n, "pnsId"))
											: this._allMessages, function(e, n,
											i) {
										return e[i] = _.takeRight(n,
												t.maxMessage), e
									}, {})
						}
					}
				}, {
					key : "_filtrateMessage",
					value : function(e) {
						return e
					}
				}, {
					key : "_updateUnread",
					value : function() {
						for (var e = 0, t = this._totalUnread, n = void 0, i = this._collections, s = this._collections.length, a = this.Contact.TYPE_ORDER, o = 0; s > o; o++)
							n = i[o], n.type === a || n.noDisturb
									|| (e += n.unread);
						this._totalUnread = e;
						var r = e !== t;
						return r
								&& this._emit(this.EVENT_MESSAGES,
										this._collections), r
					}
				}, {
					key : "_addNewMessages",
					value : function(e, t) {
						if (e && e.length > 0) {
							var n = this._user.pnsId, i = "string" == typeof t
									? t
									: t.pnsId, s = this.findItemIndexBy(
									"pnsId", i), a = void 0, o = this
									._sortMessages(e), r = this
									.getSelectedContact(), c = r
									&& r.pnsId === i;
							if (s >= 0) {
								if (a = this._collections[s], o[0].from === n
										|| o[0].isLocal())
									this._concatMessages(a, o);
								else {
									a.unreadMessages = _.unique(
											a.unreadMessages.concat(o), "id");
									var l = _.filter(a.unreadMessages,
											function(e) {
												return e.content
														&& e.content.tags
														&& e.content.tags
																.indexOf("dirty") >= -1;

											});
									a.unread = a.unreadMessages.length
											- l.length, c
											&& (this._updateUnreadMessages(a,
													!0), this._concatMessages(
													a, o))
								}
								this._updateUnread(), this._move2Top(
										this._collections, s)
										&& this._emit(this.EVENT_ITEMS_UPDATED,
												this._collections,
												this.TYPE_SORT), this._emit(
										this.EVENT_MESSAGES, a)
							} else
								this._handleNewComerMessages(i, o)
						}
					}
				}, {
					key : "_move2Top",
					value : function(e, t) {
						if (0 >= t)
							return !1;
						var n = e[t], i = 0;
						return n.isTop || (i = _.findIndex(e, function(e) {
									return !e.isTop
								}), 0 > i && (i = 0), i !== t) ? (e.splice(i,
								0, e.splice(t, 1)[0]), !0) : !1
					}
				}, {
					key : "_sortMessages",
					value : function(e) {
						return e.length <= 1 ? e : e.sort(function(e, t) {
									return e.timestamp - t.timestamp
								})
					}
				}, {
					key : "_getHistoryFromServer",
					value : function(e) {
						var t = this, n = this.$q.defer();
						if (!this._user || !this._user.pnsId)
							return n.reject(), this.$log
									.warn("cannot _getHistoryFromServer without pnsId"), n.promise;
						var i = e.pnsId, s = this.$log, a = void 0, o = void 0, r = this._nextMessageOffset[i], c = this._options.messagePerPage, l = r
								? c
								: this.getAllMessagesOfContact(i).length + c;
						return this.parrotService.query({
									info : [_.assign({
												start : r || null,
												count : l
											}, e.isGroup() ? {
												groupId : i
											} : {
												regId : i
											})]
								}).then(function(e) {
							a = e.data.chatRecords, a
									&& a.length > 0
									&& (o = a[0].messages, t
											._fillHistoryMessages(o, i), t
											._recordOffset(i, a[0].end,
													o.length, l)), n.resolve(e)
						}, function(e) {
							s.debug("_getHistoryFromServer", e), n.reject(e)
						}), n.promise
					}
				}, {
					key : "_fillHistoryMessages",
					value : function(e, t) {
						var n = this.modelFactory, i = _.map(e, function(e) {
									return n.createMessageFromPayload(e)
								});
						this._addHistoryMessages(i.reverse(), t)
					}
				}, {
					key : "_recordOffset",
					value : function(e, t, n, i) {
						this._nextMessageOffset[e] = t, this._noMoreHistory[e] = i > n
					}
				}, {
					key : "_addHistoryMessages",
					value : function(e, t) {
						e = this._filtrateMessage(e);
						var n = void 0;
						e.length > 0
								&& (n = this.findItemsBy("pnsId", t)[0])
								&& (n.messages = this._allMessages[t] = this
										._sortMessages(_
												.unique(
														e
																.concat(this
																		.getAllMessagesOfContact(t)),
														"id")), this._persist())
					}
				}, {
					key : "_handleNewComerMessages",
					value : function(e, t) {
						var n = this._newComerMessages[e], i = void 0;
						return this._newComerMessages[e] = n ? n.concat(t) : t, (i = _
								.find(this._delContacts, function(t) {
											return t.pnsId === e
										}))
								? void this.addItem(i)
								: void(this._newComerFetching[e] || this
										._requestInfo(e, 3))
					}
				}, {
					key : "_requestInfo",
					value : function(e, t) {
						var n = this, i = this._newComerMessages, s = this._newComerFetching, a = _
								.startsWith(e, "group"), o = a
								? "getGroupInfo"
								: "getRegInfo";
						s[e] = !0, this.parrotService[o](a ? {
							groupId : e
						} : {
							regId : e
						}).then(function(a) {
							var o = a.data;
							o.regInfo && 1 === _.keys(o.regInfo).length
									? n._requestInfo2(e, t)
									: (n.addItem(n.modelFactory
											.createContactFromPayload(a.data)), delete i[e], delete s[e])
						}, function(i) {
							t >= 1 ? n._requestInfo(e, t - 1) : s[e] = !1, n.$log
									.warn(o + " error", i)
						})
					}
				}, {
					key : "_requestInfo2",
					value : function(e, t) {
						var n = this, i = this._newComerMessages, s = this._newComerFetching;
						s[e] = !0, this.api("getUserInfoByPnsId", {
									fragments : {
										pnsIds : e
									}
								}).then(function(t) {
							n.addItem(n.modelFactory
									.createContactFromPayload(t.data.data)), delete i[e], delete s[e]
						}, function(i) {
							t >= 1 ? n._requestInfo2(e, t - 1) : s[e] = !1, n.$log
									.warn("getUserInfoByPnsId error", i)
						})
					}
				}, {
					key : "_subscribeEvents",
					value : function() {
						var e = this, t = this.modelFactory, n = this.parrotService;
						this.$rootScope.$on(this.api.API_EVENT_PREFIX
										+ "getUserInfoByPnsId", function(n, i,
										s, a) {
									if (i && !a) {
										var o = s.data.data;
										e.$log
												.debug(
														"handle api event getUserInfoByPnsId",
														o), _.isArray(o)
												|| (o = [o]), _.each(o,
												function(n) {
													e
															.updateContact(
																	n.clientPnsId
																			|| n.pnsID,
																	t
																			.createContactFromPayload(n))
												})
									}
								}), n.subscribe(n.RESPONSE_UPDATE_GROUP_INFO,
								function(n, i, s) {
									"success" === i.data.event
											&& (e.$log
													.debug(
															"RecentContactService handle parrot event updateGroupInfo",
															i), e
													.updateContact(
															s.data.groupId,
															t
																	.createContactFromPayload(i.data)))
								})
					}
				}, {
					key : "_restoreOldContact",
					value : function(e) {
						if (e.userType) {
							var t = e.type;
							return {
								id : e.id,
								pnsId : e.pnsId,
								name : e.name,
								createTime : e.createTime,
								type : "jys" === e.userType
										? this.Contact.TYPE_MANAGER
										: "item_type_group" === t
												? this.Contact.TYPE_GROUP
												: "item_type_notice" === t
														? this.Contact.TYPE_SYSTEM
														: "item_type_information" === t
																|| "item_type_openaccount" === t
																? this.Contact.TYPE_CLIENT
																: this.Contact.TYPE_ORDER,
								groupType : null != e.groupType
										? parseInt(e.groupType)
										: void 0,
								avatar : e.avatar,
								unread : e.unread,
								orderId : e.orderId,
								orderType : e.type,
								starLevel : e.starLevel,
								riskLevel : e.riskLevel,
								mobile : e.mobile,
								exclusive : e.exclusive
							}
						}
						return e
					}
				}, {
					key : "_restoreOldMessage",
					value : function(e) {
						return _.startsWith(e.to, "group")
								&& (e.groupId = e.to), e
					}
				}]), t
	}(u["default"]);
	p.prototype.EVENT_MESSAGES = "common.recentContact.messages", p.prototype.EVENT_INIT_CONTACT = "common.recentContact.initContact", p.prototype.EVENT_CONTACTS = u["default"].prototype.EVENT_ITEMS_UPDATED, p.prototype.EVENT_SELECTED = u["default"].prototype.EVENT_ACTIVE_UPDATED, t["default"] = p, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e) {
		return e && e.__esModule ? e : {
			"default" : e
		}
	}
	function s(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	function a(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError("Super expression must either be null or a function, not "
					+ typeof t);
		e.prototype = Object.create(t && t.prototype, {
					constructor : {
						value : e,
						enumerable : !1,
						writable : !0,
						configurable : !0
					}
				}), t
				&& (Object.setPrototypeOf
						? Object.setPrototypeOf(e, t)
						: e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var o = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), r = function(e, t, n) {
		for (var i = !0; i;) {
			var s = e, a = t, o = n;
			i = !1, null === s && (s = Function.prototype);
			var r = Object.getOwnPropertyDescriptor(s, a);
			if (void 0 !== r) {
				if ("value" in r)
					return r.value;
				var c = r.get;
				return void 0 === c ? void 0 : c.call(o)
			}
			var l = Object.getPrototypeOf(s);
			if (null === l)
				return void 0;
			e = l, t = a, n = o, i = !0, r = l = void 0
		}
	}, c = n(18), l = n(39), u = i(l), d = function(e) {
		function t(e, n, i, a, o, l, u, d, p, f) {
			"ngInject";
			s(this, t), r(Object.getPrototypeOf(t.prototype), "constructor",
					this).call(this, i, null), c.resolveInject(t, arguments,
					this), this.setOptions({
						uniqueKey : "orderId",
						itemClass : d
					}), this._orderRepeatCheck = {}, this._ordersToBeDeleted = {}, this
					._subscribeOrders()
		}
		return a(t, e), t.$inject = ["$log", "$q", "$rootScope",
				"modelFactory", "managerService",
				"managerRecentContactService", "api", "Order", "Contact",
				"parrotService"], o(t, [{
					key : "initialize",
					value : function() {
					}
				}, {
					key : "uninitialize",
					value : function() {
						this._collections = [], this._activeItem = null, this._orderRepeatCheck = {}, this
								._emit(this.EVENT_ORDERS)
					}
				}, {
					key : "excludeKnowledgeOrder",
					value : function() {
						this._excludeKnowledgeOrder = !0
					}
				}, {
					key : "grabOrder",
					value : function(e) {
						var t = this, n = this.$q.defer();
						return this.api("grabOrder", {
									fragments : {
										orderId : e.orderId
									},
									data : {
										pnsOrderTime : e.pnsOrderTime,
										grabOrderTime : (new Date).getTime()
									}
								}).then(function(i) {
							t._handleGrabbedOrder(e, i, n), t
									.deleteOrderById(e.orderId)
						}, function(i) {
							(908 === parseInt(i.data.status) || 910 === parseInt(i.data.status))
									&& t.deleteOrderById(e.orderId), n
									.reject(i)
						}), n.promise
					}
				}, {
					key : "selectOrder",
					value : function(e) {
						return this.setActiveItem(e)
					}
				}, {
					key : "getAllOrders",
					value : function() {
						return this.getAllItems()
					}
				}, {
					key : "getSelectedOrder",
					value : function() {
						return this.getActiveItem()
					}
				}, {
					key : "addNewOrders",
					value : function() {
						var e = arguments.length <= 0
								|| void 0 === arguments[0] ? [] : arguments[0];
						0 !== e.length
								&& this._typeCheck(e[0])
								&& (e.length + this._collections.length > 1e3
										&& (e = _.take(e,
												1e3 - this._collections.length)), _
										.each(e, function(e) {
													e.pnsOrderTime = (new Date)
															.getTime()
												}), this._collections = e
										.concat(this._collections), this
										._emit(this.EVENT_ORDERS))
					}
				}, {
					key : "deleteOrderById",
					value : function(e) {
						return this.removeItem(e)
					}
				}, {
					key : "_handleGrabbedOrder",
					value : function(e, t, n) {
						{
							var i = this, s = this.Order, a = this.managerService
									.getManager(), o = t.data.data, r = o.origin_managerPnsId, c = o.client_pnsId, l = this.managerRecentContactService, u = e.messageType === s.TYPE_INFORMATION
									|| e.messageType === s.TYPE_OPEN_ACCOUNT
									? this.Contact.TYPE_CLIENT
									: this.Contact.TYPE_ORDER;
							l.selectContact(l.addContact(this.modelFactory
									.createContact({
										id : e.clientId,
										name : e.clientName,
										pnsId : e.messageType === s.TYPE_KNOWLEDGE
												|| e.messageType === s.TYPE_REPORT
												? e.orderId
												: c,
										type : u,
										clientType : e.clientType,
										channel : e.channelType,
										createTime : o.request_time,
										orderId : e.orderId,
										orderType : e.messageType,
										orderState : e.orderState,
										orderContent : e.data
												? e.data.orderContent
												: "",
										orderDesc : e.description,
										answerId : e.data
												? e.data.answerId
												: "",
										starLevel : e.khxjxf,
										data : e.data,
										gender : e.gender
									})))
						}
						if (r && r.length > 0 && r !== a.pnsId) {
							var d = new Date(o.request_time);
							d.setHours(0), d.setMinutes(0), d.setSeconds(0), this.parrotService
									.query({
												asRegId : r,
												info : [{
															regId : c,
															startDate : o.request_time,
															endDate : d
																	.getTime(),
															count : 100
														}]
											}).then(function(e) {
										l
												.addTransferOrderHistoryMessages(
														i
																._handleGrabTransferOrderResult(e.data.chatRecords[0].messages),
														c, o.origin_manager,
														o.question), n
												.resolve(!0)
									}, function(e) {
										i.$log.error("parrotService.query", e), n
												.reject({
															status : 179394,
															message : "获取转单历史失败"
														})
									}), this.managerService.addManagerPnsId(r)
						} else
							n.resolve(t)
					}
				}, {
					key : "_handleGrabTransferOrderResult",
					value : function(e) {
						if (e && 0 !== e.length) {
							var t = [], n = this.modelFactory;
							return e.forEach(function(e) {
								_.indexOf(["openAccount", "system"],
										e.content.type) < 0
										&& t
												.push(n
														.createMessageFromPayload(e))
							}), t
						}
					}
				}, {
					key : "_subscribeOrders",
					value : function() {
						var e = this, t = this.parrotService, n = this.modelFactory, i = this.Order;
						t.subscribe(t.CONST_EVENT_PREFIX + "newOrders",
								function(t, s) {
									var a = e._orderRepeatCheck, o = e._ordersToBeDeleted;
									_.each(s, function(t) {
										e.addNewOrders(_.reduce(t.content,
												function(t, s) {
													return a[s.order_id]
															|| (o[s.order_id]
																	? o[s.order_id] = !1
																	: (!e._excludeKnowledgeOrder || s.message_type !== i.TYPE_KNOWLEDGE
																			&& s.message_type !== i.TYPE_REPORT)
																			&& (t
																					.push(n
																							.createOrderFromPayload(s)), a[s.order_id] = !0)), t
												}, []))
									})
								}), t.subscribe(t.CONST_EVENT_PREFIX
										+ "deleteOrder", function(t, n) {
									_.each(n, function(t) {
												var n = t.content.order_id;
												e.findItemsBy("orderId", n)[0]
														? e.deleteOrderById(n)
														: e._ordersToBeDeleted[n] = !0
											})
								})
					}
				}]), t
	}(u["default"]);
	d.prototype.EVENT_ORDERS = u["default"].prototype.EVENT_ITEMS_UPDATED, d.prototype.EVENT_SELECTED = u["default"].prototype.EVENT_ACTIVE_UPDATED, t["default"] = d, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	function n(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), s = function() {
		function e(t, i, s, a, o, r) {
			"ngInject";
			n(this, e), this.$log = t, this.$q = i, this.$timeout = s, this.$rootScope = a, this.api = o, this.dataReady = !1, this.ls = r, this.MAX_LENGTH = 256, this.OP_TYPE = {
				ADD : "add",
				UPDATE : "update",
				DELETE : "delete"
			}
		}
		return e.$inject = ["$log", "$q", "$timeout", "$rootScope", "api",
				"localStorageService"], i(e, [{
					key : "listen",
					value : function(e, t) {
						return this.$rootScope.$on(e, t)
					}
				}, {
					key : "emit",
					value : function(e, t) {
						this.$rootScope.$emit(e, t), this.$rootScope
								.$emit(this.EVENT_ANY)
					}
				}, {
					key : "initialize",
					value : function(e) {
						var t = this, n = this.$q.defer();
						return this.manager = e, this.allComments = this.ls
								.get("key.comments." + e.id)
								|| [], this.allFailureComments = this.ls
								.get("key.comments.sync.failure." + e.id)
								|| [], this.api("getQuickReplyList").then(
								function(e) {
									t.merge(e.data.data), t.persist(), t.dataReady = !0, t
											.emit(t.EVENT_DATA_READY), n
											.resolve(!0)
								}, function(e) {
									n.resolve(!1), t.$log.warn(
											"getQuickReplyList", e)
								}), n.promise
					}
				}, {
					key : "uninitialize",
					value : function() {
						this.manager = null, this.once = !0, this.allComments = [], this.allFailureComments = [], this.dataReady = !1
					}
				}, {
					key : "getAllComments",
					value : function() {
						return this.allComments
					}
				}, {
					key : "merge",
					value : function(e) {
						var t = this, n = [];
						_.forEach(e, function(e) {
									n.push({
												id : e._id,
												text : e.context,
												timestamp : e.timestamp
											})
								}), _.forEach(this.allFailureComments,
								function(e) {
									switch (e.type) {
										case t.OP_TYPE.ADD :
											n.push(e.data);
											break;
										case t.OP_TYPE.UPDATE :
											_.remove(n, function(t) {
														return t.id === e.data.id
													}), n.unshift(e.data);
											break;
										case t.OP_TYPE.DELETE :
											_.remove(n, function(t) {
														return t.id === e.data.id
													})
									}
								}), this.allComments = n
					}
				}, {
					key : "insert",
					value : function(e, t, n) {
						var i = _.findIndex(e, function(e) {
									return e.id === t.id
								});
						-1 === i && (e.push({
									data : t,
									type : n
								}), this.persistFailure())
					}
				}, {
					key : "addComment",
					value : function(e) {
						var t = {
							id : e._id || "_" + _.uniqueId(),
							text : e.context,
							timestamp : e.timestamp || (new Date).getTime()
						};
						if (this.allComments.unshift(t), this.allComments.length > this.MAX_LENGTH) {
							var n = this.allComments.pop();
							this.$log
									.debug("remove the last one in the allComments "
											+ JSON.stringify(n))
						}
						return this.persist(), this.addAsync(t)
					}
				}, {
					key : "updateComment",
					value : function(e) {
						var t = _.findIndex(this.allComments, function(t) {
									return t.id === e.id
								});
						return -1 === t
								? void this.$log.debug("no such item exists "
										+ JSON.stringify(e))
								: (this.allComments[t].text = e.text, this
										.persist(), this
										.updateAsync(this.allComments[t]))
					}
				}, {
					key : "removeComment",
					value : function(e) {
						var t = _.findIndex(this.allComments, function(t) {
									return e.id === t.id
								});
						return -1 === t
								? void this.$log.warn("no such item exists "
										+ JSON.stringify(e))
								: (this.allComments.splice(t, 1), this
										.persist(), void this.removeAsync(e))
					}
				}, {
					key : "moveTopComment",
					value : function(e) {
						var t = null, n = _.findIndex(this.allComments,
								function(t) {
									return e.id === t.id
								});
						return -1 === n
								? void this.$log.warn("no such item exists "
										+ JSON.stringify(e))
								: (t = this.allComments[n], t.timestamp = (new Date)
										.getTime(), this.allComments.splice(n,
										1), this.allComments.unshift(t), this
										.persist(), void this.updateAsync(e))
					}
				}, {
					key : "addAsync",
					value : function(e) {
						var t = this, n = this.$q.defer();
						return this.api("addQuickReply", {
									data : {
										_id : e.id,
										context : e.text,
										timestamp : e.timestamp
									}
								}).then(function(i) {
							var s = i.data.data;
							e.id = s._id, e.text = s.context, t.persist(), n
									.resolve(i)
						}, function(i) {
							t.$log.warn("addQuickReply", i), t.insert(
									t.allFailureComments, e, t.OP_TYPE.ADD), n
									.reject(i)
						}), n.promise
					}
				}, {
					key : "removeAsync",
					value : function(e) {
						var t = this;
						this.api("deleteQuickReply", {
									fragments : {
										_id : e.id
									}
								}).then(function(e) {
								}, function(n) {
									t.$log.warn("deleteQuickReply", n), t
											.insert(t.allFailureComments, e,
													t.OP_TYPE.DELETE)
								})
					}
				}, {
					key : "updateAsync",
					value : function(e) {
						var t = this, n = this.$q.defer();
						return this.api("updateQuickReply", {
									data : {
										_id : e.id,
										context : e.text,
										timestamp : e.timestamp
									}
								}).then(function(e) {
									n.resolve(e)
								}, function(i) {
									t.$log.warn("updateQuickReply", i), t
											.insert(t.allFailureComments, e,
													t.OP_TYPE.UPDATE), n
											.reject(i)
								}), n.promise
					}
				}, {
					key : "persist",
					value : function() {
						this.ls.set("key.comments." + this.manager.id,
								this.allComments)
					}
				}, {
					key : "persistFailure",
					value : function() {
						this.ls.set("key.comments.sync.failure."
										+ this.manager.id,
								this.allFailureComments)
					}
				}, {
					key : "syncUp",
					value : function() {
						for (var e = this.allFailureComments.length; e > 0;) {
							var t = this.allFailureComments.shift(), n = t.data, i = t.type;
							i === this.OP_TYPE.ADD
									? this.addAsync(n)
									: i === this.OP_TYPE.DELETE
											? this.removeAsync(n)
											: i === this.OP_TYPE.UPDATE
													&& this.updateAsync(n), this
									.persistFailure(), e--
						}
					}
				}]), e
	}();
	s.prototype.EVENT_DATA_READY = "COMMENT_EVENT_DATA_READY", t["default"] = s, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = null, r = "https://store.gf.com.cn/mobile/", c = function() {
		function e(t, n, s, r, c) {
			"ngInject";
			i(this, e), o = a.resolveInject(e, arguments)
		}
		return e.$inject = ["$log", "$q", "api", "messageService", "Message"], s(
				e, [{
					key : "getProducts",
					value : function() {
						var e = this, t = o.$q.defer();
						return o.api("getProducts").then(function(e) {
									t.resolve(_.groupBy(e.data.items,
											"product_type"))
								}, function(e) {
									t.reject(e)
								})["finally"](function() {
									return e.showLoading = !1
								}), t.promise
					}
				}, {
					key : "searchProducts",
					value : function(e) {
						var t = o.$q.defer();
						return o.api("getProductsByCriteria", {
									params : {
										i : e
									}
								}).then(function(e) {
									var n = e.data, i = {}, s = void 0;
									_.each(n, function(e, t) {
												s = i[t] = [], _.each(e,
														function(e) {
															s.push({
																		title : e[0],
																		id : e[1]
																	})
														})
											}), t.resolve(i)
								}, function(e) {
									o.$log
											.warn("getProductsByCriteria fail",
													e), t.reject(e)
								}), t.promise
					}
				}, {
					key : "getProductDetail",
					value : function(e) {
						return o.api("getProductDetailsById", {
									fragments : {
										_id : e
									}
								})
					}
				}, {
					key : "recommendProduct",
					value : function(e, t, n) {
						var i = t.product_type, s = t.id, a = "product";
						"money" === i && (i = "asset"), "fund" === i
								&& (a = "detail"), o.messageService
								.sendMessage(e, {
											name : t.title,
											id : t.id,
											erpId : n,
											type : i,
											url : "" + r + i + "/" + a + "/"
													+ s + "?erpId=" + n
										}, o.Message.TYPE_PRODUCT)
					}
				}]), e
	}();
	t["default"] = c, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = function() {
		function e(t, n, s, o, r, c, l) {
			"ngInject";
			i(this, e), a.resolveInject(e, arguments, this), this.ls = o, this
					.setClientTab(0);
			var u = {
				sms : "发送短信",
				login : "验证码成功",
				"new" : "新建申请",
				place : "选择营业部",
				idcard : "上传身份证",
				account : "选择开通账户",
				bank : "设置三方存管银行",
				video : "录制视频",
				sign : "签署协议",
				risk : "风险测评",
				clean : "清除申请记录",
				returnvisit : "回访问卷",
				fromSource : "扫二维码",
				altered : "推荐人已变更",
				openSuccess : "开户成功"
			};
			this.commitAccountMap = {
				commit : "提交申请",
				commit_sms : "发送短信",
				commit_login : "验证码成功",
				edit : "修改资料",
				snatch1 : "一审中",
				"snatch1.5" : "电话回访中",
				snatch2 : "二审中",
				reject1 : "一审驳回",
				"reject1.5" : "电话回访失败",
				reject2 : "二审驳回",
				pass1 : "一审通过",
				"pass1.5" : "电话回访成功",
				pass2 : "二审通过",
				wait_snatch3 : "待跑批，电话回访中",
				wait_connectfail : "待跑批，电话回访联系失败",
				wait_reject3 : "待跑批，电话回访驳回",
				wait_pass3 : "待跑批，电话回访通过",
				wait_snatch4 : "待跑批，电话回访录音审核中",
				wait_reject4 : "待跑批，电话回访录音审核驳回",
				wait_pass4 : "待跑批，电话回访录音审核通过",
				wait_hsipccweb_pass4 : "待跑批，呼叫中心回访通过",
				progress_snatch3 : "跑批中，电话回访中",
				progress_connectfail : "跑批中，电话回访联系失败",
				progress_reject3 : "跑批中，电话回访驳回",
				progress_pass3 : "跑批中，电话回访通过",
				progress_snatch4 : "跑批中，电话回访录音审核中",
				progress_reject4 : "跑批中，电话回访录音审核驳回",
				progress_pass4 : "跑批中，电话回访录音审核通过",
				progress_hsipccweb_pass4 : "跑批中，呼叫中心回访通过",
				notactive_hsipccweb_pass4 : "账户已开通但未激活，呼叫中心回访通过",
				notactive_snatch3 : "账户已开通但未激活，电话回访中",
				notactive_connectfail : "账户已开通但未激活，电话回访联系失败",
				notactive_reject3 : "账户已开通但未激活，电话回访驳回",
				notactive_pass3 : "账户已开通但未激活，电话回访通过",
				notactive_snatch4 : "账户已开通但未激活，电话回访录音审核中",
				notactive_reject4 : "账户已开通但未激活，电话回访录音审核驳回",
				notactive_pass4 : "账户已开通但未激活，电话回访录音审核通过",
				fail_snatch3 : "跑批失败，电话回访中",
				fail_connectfail : "跑批失败，电话回访联系失败",
				fail_reject3 : "跑批失败，电话回访驳回",
				fail_pass3 : "跑批失败，电话回访通过",
				fail_snatch4 : "跑批失败，电话回访录音审核中",
				fail_reject4 : "跑批失败，电话回访录音审核驳回",
				fail_pass4 : "跑批失败，电话回访录音审核通过",
				fail_hsipccweb_snatch4 : "跑批失败，呼叫中心回访通过"
			}, this.openAccountStepMap = _.assign({}, u, this.commitAccountMap), this.typeMap = {
				OPENING : "openingAccount",
				LEAVING : "missingAccount",
				COMMIT : "commitAccount",
				SUCCESS : "openedAccount"
			}, this.jysAccountInfo = {}, this.jysOpenAccountInfo = [], this.jysOpenedAccountInfo = [], this.originalOpenAccountInfo = [], this.avatarBgColor = [
					"#ffa64c", "#21d0a1", "#f77d72", "#47bbeb"], this.mockData = [
					{
						_id : "58bf5f79e8493024d8831095",
						userId : null,
						mobile : "17112341347",
						name : "灰太狼3",
						source : "normal",
						recommendNo : "15278",
						beginTime : "2017-03-08 09:28:00",
						currentStep : "idcard",
						subStep : null,
						reason : null
					}, {
						_id : "5768a33e8c8b5bfd430a20ed",
						userId : null,
						mobile : "13722361461",
						name : "啦啦",
						source : "normal",
						recommendNo : "11383",
						beginTime : "2017-03-02 07:50:00",
						currentStep : "fromSource",
						subStep : null,
						reason : '{"video": ["lalaal"], "hello": ["yayaya", "haoba shit"]}'
					}, {
						_id : "574e81ea8c8b5bfd4309a322",
						userId : null,
						mobile : "15422361461",
						name : null,
						source : "normal",
						recommendNo : "11383",
						beginTime : "2017-03-02 10:30:42",
						currentStep : "fromSource",
						subStep : "审核中",
						reason : null
					}, {
						_id : "574e81ea8c8b5bfd4309a333",
						userId : null,
						mobile : "18422361461",
						name : "哈哈哈",
						source : "normal",
						recommendNo : "11383",
						beginTime : "2017-03-02 10:17:42",
						currentStep : "fromSource",
						subStep : null,
						reason : null
					}]
		}
		return e.$inject = ["$log", "$rootScope", "$q", "localStorageService",
				"api", "timerService", "managerService"], s(e, [{
					key : "listen",
					value : function(e, t) {
						return this.$rootScope.$on(e, t)
					}
				}, {
					key : "emit",
					value : function(e, t) {
						this.$rootScope.$emit(e, t), this.$rootScope
								.$emit(this.EVENT_ANY)
					}
				}, {
					key : "uninitialize",
					value : function() {
						this.jysAccountInfo = {}, this.jysOpenAccountInfo = [], this.jysOpenedAccountInfo = [], this.originalOpenAccountInfo = []
					}
				}, {
					key : "setClientTab",
					value : function(e) {
						this.clientTab = e
					}
				}, {
					key : "getClientTab",
					value : function() {
						return this.clientTab
					}
				}, {
					key : "getCurrentUserId",
					value : function() {
						return this.userId
					}
				}, {
					key : "setCurrentUserId",
					value : function(e) {
						this.userId = e
					}
				}, {
					key : "setCurrentAccountInfo",
					value : function(e) {
						e
								? (e.tabType
										&& "openSuccess" !== e.currentStep
										&& (e = this.fundAccountInfoById(e._id)), this._currentInfo = e)
								: this._currentInfo = null
					}
				}, {
					key : "getCurrentAccountInfo",
					value : function() {
						return this._currentInfo
					}
				}, {
					key : "getJysOpenAccountInfo",
					value : function(e) {
						var t = this, n = this.$q.defer();
						return this.managerId = e, _
								.isEmpty(this.jysAccountInfo[this.typeMap.SUCCESS])
								&& (this.jysAccountInfo = this
										._restore(this.managerId)), this.api(
								"jysOpenAccountInfo", {
									params : {
										filter : JSON.stringify({
													currentStep : {
														$ne : "openSuccess"
													}
												})
									}
								}).then(function(e) {
							t.$log.debug("jysOpenAccountInfo resp", e);
							var i = e.data.data;
							t.originalOpenAccountInfo = i, t
									._updateAccountInfo(t.originalOpenAccountInfo), n
									.resolve(t.jysOpenAccountInfo)
						}, function(e) {
							t.$log.debug("jysOpenAccountInfo error", e), n
									.reject(e)
						}), n.promise
					}
				}, {
					key : "getJysOpenedAccountInfo",
					value : function(e, t, n) {
						var i = this, s = this.$q.defer();
						return 1 === t && (this.jysOpenedAccountInfo = []), this
								.api("jysOpenAccountInfo", {
											params : {
												filter : {
													currentStep : "openSuccess"
												},
												page : t,
												size : n
											}
										}).then(function(t) {
									i.$log.debug(
											"getJysOpenedAccountInfo resp", t);
									var n = t.data.data;
									_
											.isEmpty(i.jysAccountInfo[i.typeMap.SUCCESS])
											&& (i.jysAccountInfo = i
													._restore(i.managerId)), i.jysAccountInfo[i.typeMap.SUCCESS] = i.jysAccountInfo[i.typeMap.SUCCESS]
											|| [], _.forEach(n, function(e) {
										i
												.openAccountPropertyCheck(e,
														"SUCCESS"), i
												.fundOpenedAccountInfoById(e._id)
												|| i.jysOpenedAccountInfo
														.push(e)
									}), _
											.forEach(
													i.jysAccountInfo[i.typeMap.SUCCESS],
													function(e) {
														i
																.fundOpenedAccountInfoById(e._id)
																|| i.jysOpenedAccountInfo
																		.push(e)
													}), i.jysAccountInfo[i.typeMap.SUCCESS] = i.jysOpenedAccountInfo, i
											._save(e, i.jysAccountInfo), s
											.resolve(n)
								}, function(e) {
									i.$log.debug(
											"getJysOpenedAccountInfo error", e), s
											.reject(e)
								}), s.promise
					}
				}, {
					key : "removeItem",
					value : function(e, t) {
						var n = this;
						this.api("hideCustomer", {
									fragments : {
										id : e._id
									}
								}).then(function(i) {
							"200" !== i.data.status
									|| _.isEmpty(n.jysAccountInfo[t])
									|| (n.jysAccountInfo[t].splice(_.findIndex(
													n.jysAccountInfo[t],
													function(t) {
														return t._id === e._id
													}), 1), n._save(
											n.managerId, n.jysAccountInfo))
						}, function(e) {
							n.$log.debug("hideCustomer fail", e)
						})
					}
				}, {
					key : "checkNewStatus",
					value : function(e, t) {
						var n = this._restore(this.managerId);
						_.forEach(n[t], function(t) {
							e._id === t._id
									&& (t.showRedDot || (e.showRedDot = !1), t.avatarBgColor
											&& (e.avatarBgColor = t.avatarBgColor))
						})
					}
				}, {
					key : "openAccountTabHandle",
					value : function(e) {
						var t = this, n = _.groupBy(e, function(e) {
							if (e.beginTime || (e.beginTime = ""), "openSuccess" === e.currentStep)
								return "others";
							if (t.commitAccountMap[e.currentStep])
								return t.openAccountPropertyCheck(e, "COMMIT"), t.typeMap.COMMIT;
							var n = e.beginTime.toDate().getTime(), i = t.timerService
									.getTime(), s = (i - n) / 36e5, a = e.beginTime
									.toDate().getDate(), o = new Date(t.timerService
									.getTime()).getDate();
							return .5 >= s && "altered" !== e.currentStep
									? (t.openAccountPropertyCheck(e, "OPENING"), t.typeMap.OPENING)
									: (s > .5 && 24 > s || "altered" === e.currentStep
											&& 24 > s)
											&& o === a
											? (t.openAccountPropertyCheck(e,
													"LEAVING"), t.typeMap.LEAVING)
											: "others"
						});
						return n
					}
				}, {
					key : "openAccountPropertyCheck",
					value : function(e, t) {
						e.tabType = this.typeMap[t], this.setAvatarBgColor(e), e.showRedDot = !0, this
								.checkNewStatus(e, this.typeMap[t])
					}
				}, {
					key : "resetRedDot",
					value : function(e) {
						_.forEach(this.jysAccountInfo, function(t) {
									_.forEach(t, function(t) {
												e._id === t._id
														&& (t.showRedDot = !1)
											})
								}), this._save(this.managerId,
								this.jysAccountInfo)
					}
				}, {
					key : "getTotalRedDot",
					value : function() {
						var e = this.managerService.getManager();
						this.managerId = e ? e.erpId : "";
						var t = this._restore(this.managerId), n = {}, i = 0, s = 0;
						return _.isEmpty(t) || _.forEach(t, function(e, t) {
							_.forEach(e, function(e) {
								e.showRedDot
										&& (_.indexOf(["openingAccount",
														"missingAccount",
														"commitAccount"], t) > -1
												? i++
												: "openedAccount" === t && s++)
							})
						}), n.openingTabNum = i, n.openedTabNum = s, n
					}
				}, {
					key : "setAvatarBgColor",
					value : function(e) {
						e.avatarBgColor = this.avatarBgColor[_.random(0, 3)]
					}
				}, {
					key : "accountInfoSort",
					value : function() {
						var e = this;
						_.forEach(this.jysOpenAccountInfo, function(t, n) {
									e.jysOpenAccountInfo[n] = _.sortBy(t,
											function(t) {
												var i = t.beginTime.toDate()
														.getTime();
												return n === e.typeMap.LEAVING
														? i
														: -i
											})
								})
					}
				}, {
					key : "updateAccountInfo",
					value : function(e) {
						"openSuccess" === e.currentStep
								&& (e.showRedDot = !0, e.tabType = this.typeMap.SUCCESS, this.jysAccountInfo[this.typeMap.SUCCESS]
										.unshift(e)), this
								.fundAccountInfoById(e._id) ? _.forEach(
								this.originalOpenAccountInfo, function(t) {
									t._id === e._id && _.assign(t, e)
								}) : this.originalOpenAccountInfo.unshift(e), this
								._updateAccountInfo(this.originalOpenAccountInfo)
					}
				}, {
					key : "_updateAccountInfo",
					value : function(e) {
						var t = this;
						this.jysOpenAccountInfo = this.openAccountTabHandle(e), this
								.accountInfoSort(), _.forEach(["OPENING",
										"LEAVING", "COMMIT"], function(e) {
									t.jysAccountInfo[t.typeMap[e]] = t.jysOpenAccountInfo[t.typeMap[e]]
								}), this._save(this.managerId,
								this.jysAccountInfo)
					}
				}, {
					key : "getAccountInfo",
					value : function() {
						return this.jysAccountInfo
					}
				}, {
					key : "fundAccountInfoById",
					value : function(e) {
						var t = null;
						return _.forEach(this.originalOpenAccountInfo,
								function(n) {
									n._id === e && (t = n)
								}), t
					}
				}, {
					key : "fundOpenedAccountInfoById",
					value : function(e) {
						var t = null;
						return _.forEach(this.jysOpenedAccountInfo,
								function(n) {
									n._id === e && (t = n)
								}), t
					}
				}, {
					key : "_save",
					value : function(e, t) {
						this.ls.set("cache.jysAccountInfo." + e, t)
					}
				}, {
					key : "_restore",
					value : function(e) {
						return this.ls.get("cache.jysAccountInfo." + e) || {}
					}
				}, {
					key : "sendPhoneCall",
					value : function(e, t, n, i) {
						var s = this, a = this.$q.defer(), o = {
							id : e || "",
							managerPhone : n,
							managerId : t,
							order_id : i || ""
						};
						return this.api("sendPhoneCall", {
									data : o
								}).then(function(e) {
									var t = e.data;
									a.resolve(t)
								}, function(e) {
									s.$log.error("sendPhoneCall error", e), a
											.reject(e)
								}), a.promise
					}
				}, {
					key : "sendSmsMessage",
					value : function(e, t, n) {
						var i = this, s = this.$q.defer();
						return this.api("sendSmsMessage", {
									data : {
										id : e,
										msg : t,
										managerId : n
									}
								}).then(function(e) {
									var t = e.data;
									s.resolve(t)
								}, function(e) {
									i.$log.error("sendSmsMessage error", e), s
											.reject(e)
								}), s.promise
					}
				}, {
					key : "queryServiceLog",
					value : function(e, t) {
						var n = this, i = this.$q.defer();
						return this.api("queryServiceLog", {
									data : {
										id : e,
										managerId : t
									}
								}).then(function(e) {
									var t = e.data;
									i.resolve(t)
								}, function(e) {
									n.$log.error("queryServiceLog error", e), i
											.reject(e)
								}), i.promise
					}
				}, {
					key : "queryOpenAccountStep",
					value : function(e) {
						var t = this, n = this.$q.defer();
						return this.api("queryOpenAccountStep", {
									fragments : {
										userId : e.id
									},
									params : {
										type : e.type
									}
								}).then(function(e) {
									var t = e.data;
									n.resolve(t)
								}, function(e) {
									t.$log.error("queryOpenAccountStep error",
											e), n.reject(e)
								}), n.promise
					}
				}, {
					key : "queryClientIdByUserId",
					value : function(e) {
						var t = this, n = this.$q.defer();
						return this.api("queryClientIdByUserId", {
									fragments : {
										userId : e
									}
								}).then(function(e) {
									var t = e.data;
									n.resolve(t)
								}, function(e) {
									t.$log.error("queryClientIdByMobile error",
											e), n.reject(e)
								}), n.promise
					}
				}, {
					key : "updateOpenAccountInfo",
					value : function() {
						this.emit(this.EVENT_COMMUNICATION_RECORD)
					}
				}, {
					key : "updateCurrentStep",
					value : function() {
						this.emit(this.EVENT_CURRENT_STEP)
					}
				}]), e
	}();
	o.prototype.EVENT_COMMUNICATION_RECORD = "openAccount.record.changed", o.prototype.EVENT_CURRENT_STEP = "openAccount.currentStep.changed", t["default"] = o, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = function() {
		function e(t, n, s, o, r, c, l, u, d, p, f) {
			"ngInject";
			i(this, e), a.resolveInject(e, arguments, this), this._user = null, this._settings = {
				sound : !0,
				vibrate : !0,
				informationOrderPush : !0,
				openAccountOrderPush : !0,
				bookingOrderPush : !0,
				restoreOrderPush : !0,
				askOrderPush : !0,
				optionOrderPush : !0,
				messagePushDisabled : {}
			}
		}
		return e.$inject = ["$log", "$q", "$state", "$rootScope",
				"msgPushServer", "appId", "api", "deviceService",
				"localStorageService", "managerRecentContactService",
				"parrotService"], s(e, [{
					key : "listen",
					value : function(e, t) {
						return this.$rootScope.$on(e, t)
					}
				}, {
					key : "emit",
					value : function(e, t) {
						this.$rootScope.$emit(e, t), this.$rootScope
								.$emit(this.EVENT_ANY)
					}
				}, {
					key : "initialize",
					value : function(e, t) {
						if (!this._user) {
							this._user = e, this._restore();
							var n = this._settings;
							n.informationOrderPush = "undefined" == typeof e.informationNotify
									|| "on" === e.informationNotify, n.bookingOrderPush = "undefined" == typeof e.bookingNotify
									|| "on" === e.bookingNotify, n.openAccountOrderPush = "undefined" == typeof e.openaccountNotify
									|| "on" === e.openaccountNotify, n.restoreOrderPush = "undefined" == typeof e.restoreNotify
									|| "on" === e.restoreNotify, n.askOrderPush = "undefined" == typeof e.askNotify
									|| "on" === e.askNotify, n.optionOrderPush = "undefined" == typeof e.optionNotify
									|| "on" === e.optionNotify;
							var i = n.messagePushDisabled = {};
							_.each(t && t.groups, function(e, t) {
										i[t] = !!e.ucMessagePushDisabled
									}), this._subscribeEvents(), this
									._registerNotification(), this
									.emit(this.EVENT_DATA_READY)
						}
					}
				}, {
					key : "uninitialize",
					value : function() {
						var e = this;
						this._user = null, window.pushTool
								&& pushTool.unRegister(function(t) {
											e.$log
													.debug(
															"pushTool.unRegister ok",
															t)
										}, function(t) {
											e.$log.warn(
													"pushTool.unRegister fail",
													t)
										})
					}
				}, {
					key : "hasSoundEnabled",
					value : function() {
						return this._settings.sound
					}
				}, {
					key : "toggleSound",
					value : function(e) {
						return this._toggleSoundOrVibrate("sound", e)
					}
				}, {
					key : "hasVibrateEnabled",
					value : function() {
						return this._settings.vibrate
					}
				}, {
					key : "toggleVibrate",
					value : function(e) {
						return this._toggleSoundOrVibrate("vibrate", e)
					}
				}, {
					key : "hasBookingPushEnabled",
					value : function() {
						return this._settings.bookingOrderPush
					}
				}, {
					key : "toggleBookingPush",
					value : function(e) {
						return this._toggleOrderPush("BOOKING_NOTIFY", e,
								"bookingOrderPush")
					}
				}, {
					key : "hasInformationPushEnabled",
					value : function() {
						return this._settings.informationOrderPush
					}
				}, {
					key : "toggleInformationPush",
					value : function(e) {
						return this._toggleOrderPush("INFORMATION_NOTIFY", e,
								"informationOrderPush")
					}
				}, {
					key : "hasOpenAccountPushEnabled",
					value : function() {
						return this._settings.openAccountOrderPush
					}
				}, {
					key : "toggleOpenAccountPush",
					value : function(e) {
						return this._toggleOrderPush("OPENACCOUNT_NOTIFY", e,
								"openAccountOrderPush")
					}
				}, {
					key : "hasRestorePushEnabled",
					value : function() {
						return this._settings.restoreOrderPush
					}
				}, {
					key : "toggleRestorePush",
					value : function(e) {
						return this._toggleOrderPush("RESTORE_NOTIFY", e,
								"restoreOrderPush")
					}
				}, {
					key : "hasAskPushEnabled",
					value : function() {
						return this._settings.askOrderPush
					}
				}, {
					key : "toggleAskPush",
					value : function(e) {
						return this._toggleOrderPush("ASK_NOTIFY", e,
								"askOrderPush")
					}
				}, {
					key : "hasOptionPushEnabled",
					value : function() {
						return this._settings.optionOrderPush
					}
				}, {
					key : "toggleOptionPush",
					value : function(e) {
						return this._toggleOrderPush("OPTION_NOTIFY", e,
								"optionOrderPush")
					}
				}, {
					key : "hasChatPushEnabled",
					value : function(e) {
						return !this._settings.messagePushDisabled[e]
					}
				}, {
					key : "toggleChatPush",
					value : function(e, t) {
						var n = this.$q.defer(), i = this._settings.messagePushDisabled, s = {};
						return s[e] = {
							ucMessagePushDisabled : !(void 0 === t
									? !!i[e]
									: !!t)
						}, this.parrotService.setPrivateData({
									groups : s
								}).then(function() {
									i[e] = s[e].ucMessagePushDisabled, n
											.resolve(!i[e])
								}, function(e) {
									n.reject(e.data.error)
								}), n.promise
					}
				}, {
					key : "_toggleSoundOrVibrate",
					value : function(e, t) {
						var n = this._settings[e];
						if (this.deviceService.isAndroid && window.pushTool) {
							n = this._settings[e] = void 0 === t
									? !this._settings[e]
									: !!t;
							var i = {};
							return i[e] = n, pushTool.setting(null, null,
									this._settings.sound,
									this._settings.vibrate), this._persist(), n
						}
						return n = this._settings[e] = void 0 === t
								? !this._settings[e]
								: !!t, this._persist(), n
					}
				}, {
					key : "_toggleOrderPush",
					value : function(e, t, n) {
						var i = this, s = void 0 === t
								? !this._settings[n]
								: !!t, a = this.$q.defer();
						return this.api("toggleOrderPushSetting", {
									fragments : {
										pushType : e,
										state : s ? "on" : "off"
									}
								}).then(function(e) {
									a.resolve(i._settings[n] = s)
								}, function(e) {
									a.reject(e.data && e.data.message || "")
								}), a.promise
					}
				}, {
					key : "_registerNotification",
					value : function() {
						var e = this;
						return window.cordova
								? void(window.pushTool && !function() {
									var t = window.pushTool;

									t.init(e.msgPushServer, e.appId,
											e._user.pnsId, e._user.token), t
											.register(function(n) {
												e.$log
														.debug(
																"register push success",
																n), e.deviceService.isAndroid
														&& t
																.setting(
																		null,
																		null,
																		e._settings.sound,
																		e._settings.vibrate,
																		"金钥匙"), t
														.setCallback(
																function(t) {
																	return e
																			._onPushCallback(t)
																})
											}, function(t) {
												e.$log
														.error(
																"register push fail",
																t)
											})
								}())
								: void this.$log
										.warn("No cordova found, cannot initialize push.")
					}
				}, {
					key : "_onPushCallback",
					value : function(e) {
						try {
							var t = void 0, n = e.groupId || e.fromRegId;
							this.$state.is("tab.chat")
									&& (t = this.managerRecentContactService
											.getSelectedContact())
									&& t.pnsId === (n || n)
									|| pushTool
											.show(null, null, "金钥匙", e.alert)
						} catch (i) {
							this.$log.error("_onPushCallback error", i)
						}
					}
				}, {
					key : "_subscribeEvents",
					value : function() {
						var e = this, t = this.managerRecentContactService, n = this.parrotService;
						this.deviceService.isIOS
								&& t.listen(t.EVENT_ITEMS_UPDATED, function() {
											var e = t.getTotalUnread();
											pushTool.setBadgeOnDevice(
													function() {
													}, function() {
													}, e), pushTool
													.setBadgeToServer(
															function() {
															}, function() {
															}, e)
										}), n.subscribe(n.EVENT_RECONNECT,
								function() {
									e._registerNotification()
								})
					}
				}, {
					key : "_persist",
					value : function() {
						try {
							this.localStorageService.set("pushSetting."
											+ this._user.pnsId, {
										sound : this._settings.sound,
										vibrate : this._settings.vibrate
									})
						} catch (e) {
						}
					}
				}, {
					key : "_restore",
					value : function() {
						try {
							var e = this.localStorageService.get("pushSetting."
									+ this._user.pnsId), t = this._settings;
							e && (t.sound = e.sound, t.vibrate = e.vibrate)
						} catch (n) {
						}
					}
				}]), e
	}();
	o.prototype.EVENT_DATA_READY = "NOTIFICATION_EVENT_DATA_READY", t["default"] = o, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = null, r = function() {
		function e(t, n, s, r, c) {
			"ngInject";
			i(this, e), o = a.resolveInject(e, arguments), this._starLevelData = {}
		}
		return e.$inject = ["$log", "$q", "$rootScope", "api",
				"authorizeService"], s(e, [{
							key : "listen",
							value : function(e, t) {
								return o.$rootScope.$on(e, t)
							}
						}, {
							key : "emit",
							value : function(e, t) {
								o.$rootScope.$emit(e, t), o.$rootScope
										.$emit(this.EVENT_ANY)
							}
						}, {
							key : "initialize",
							value : function(e) {
								var t = this;
								o.api("getMgrScore").then(function(e) {
									o.$log.debug("getMgrScore", e), t
											.setStarLevelData(e.data.data), t
											.emit(t.EVENT_STATE_DATA_READY)
								}, function(e) {
									o.$log.warn("getMgrScore", e)
								})
							}
						}, {
							key : "uninitialize",
							value : function() {
								this.setStarLevelData({})
							}
						}, {
							key : "setStarLevelData",
							value : function(e) {
								this._starLevelData = e
							}
						}, {
							key : "getStarLevelData",
							value : function() {
								return this._starLevelData
							}
						}]), e
	}();
	r.prototype.EVENT_STATE_DATA_READY = "STATE_DATA_READY", t["default"] = r, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = function() {
		function e(t, n, s) {
			"ngInject";
			i(this, e), a.resolveInject(e, arguments, this), this.resetSearch()
		}
		return e.$inject = ["$log", "$q", "openAccountService"], s(e, [{
			key : "getSearchResult",
			value : function(e, t) {
				return this.resetSearch(), this.query = e, this._doSearch(t), this.searchResult
			}
		}, {
			key : "setSearchResult",
			value : function(e) {
				this.searchResult.push(e)
			}
		}, {
			key : "resetSearch",
			value : function() {
				this.searchResult = []
			}
		}, {
			key : "_doSearch",
			value : function(e) {
				var t = this;
				_.forEach(e, function(e, n) {
							switch (n) {
								case "openAccount" :
									t.doSearchInOpenAccount(t.query, e);
									break;
								case "contactLists" :
									t.doSearchInContactLists(t.query, e);
									break;
								case "bookList" :
									t.doSearchInBookListOrConsultList(t.query,
											e, "item_type_booking");
									break;
								case "consultList" :
									t.doSearchInBookListOrConsultList(t.query,
											e, "item_type_information")
							}
						})
			}
		}, {
			key : "doSearchInOpenAccount",
			value : function(e, t) {
				var n = this;
				return _.forEach(t, function(t, i) {
							var s = [];
							_.forEach(t, function(t) {
										(t.name && t.name.indexOf(e) > -1 || t.mobile
												.indexOf(e) > -1)
												&& s.push(t)
									}), n.checkSearchResultForOpenAccount(i, s)
						}), this.searchResult
			}
		}, {
			key : "doSearchInContactLists",
			value : function(e, t) {
				for (var n = [], i = 0; i < t.length; i++) {
					var s = t[i];
					for (var a in s)
						for (var o = 0; o < s[a].length; o++) {
							var r = s[a][o];
							(r.client_name.indexOf(e) > -1 || r.khxm_pinyin
									.indexOf(e) > -1)
									&& (r.clientName = r.client_name, r.clientId = r.client_id, r.clientPhone = r.client_phone, r.clientType = "trade", n
											.push(r))
						}
				}
				return this._checkSearchResult("服务客户", n), this.searchResult
			}
		}, {
			key : "doSearchInBookListOrConsultList",
			value : function(e, t, n) {
				for (var i = [], s = void 0, a = 0; a < t.length; a++) {
					var o = t[a];
					o.clientName && o.clientName.indexOf(e) > -1
							&& (o.clientPhone = o.phone_number, i.push(o))
				}
				return s = "item_type_booking" === n ? "预约客户" : "咨询客户", this
						._checkSearchResult(s, i), this.searchResult
			}
		}, {
			key : "checkSearchResultForOpenAccount",
			value : function(e, t) {
				var n = this.openAccountService;
				switch (e) {
					case n.typeMap.OPENING :
						this._checkSearchResult("正在开户客户", t);
						break;
					case n.typeMap.LEAVING :
						this._checkSearchResult("即将流失客户", t);
						break;
					case n.typeMap.COMMIT :
						this._checkSearchResult("提交审核客户", t);
						break;
					case n.typeMap.SUCCESS :
						this._checkSearchResult("开户成功客户", t)
				}
			}
		}, {
			key : "_checkSearchResult",
			value : function(e, t) {
				_.isEmpty(t) || this.setSearchResult({
							category : e,
							list : t
						})
			}
		}]), e
	}();
	t["default"] = o, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = [], r = [], c = [], l = {}, u = 1, d = function() {
		function e(t, n, s) {
			"ngInject";
			i(this, e), a.resolveInject(e, arguments, this), this.ls = n
		}
		return e.$inject = ["$log", "localStorageService", "api"], s(e, [{
			key : "initialize",
			value : function(e) {
				this.$log.debug("contactList.init()");
				var t = (new Date).getDay();
				o = this._restore(e) ? this._restore(e).contactList || [] : [], (0 === o.length || t === u)
						&& this._getContacts(e), this._loadBookingData(e), this
						._loadConsultData(e)
			}
		}, {
			key : "getContactList",
			value : function(e) {
				return this.$log.debug("getContactList()"), 0 === o.length
						? this._restore(e).contactList || []
						: o
			}
		}, {
			key : "getBookList",
			value : function(e) {
				return this.$log.debug("getBookList()"), 0 === r.length ? this
						._restore(e).bookList
						|| [] : r
			}
		}, {
			key : "getConsultList",
			value : function(e) {
				return this.$log.debug("getConsultList()"), 0 === c.length
						? this._restore(e).consultList || []
						: c
			}
		}, {
			key : "getAllList",
			value : function(e) {
				return this.$log.debug("all list get()"), l
						|| (l = this._restore(e) || {}), l
			}
		}, {
			key : "_getContacts",
			value : function(e) {
				var t = 1, n = 256;
				this._clearContacts(), this._loadContactData(e, t, n)
			}
		}, {
			key : "_loadContactData",
			value : function(e, t, n) {
				var i = this;
				this.api("getSignedClients", {
							fragments : {
								pageNum : t,
								pageSize : n
							}
						}).then(function(s) {
					if (s.data && s.data.status && "200" == s.data.status) {
						var a = s.data.data.result, r = s.data.data.total_num, c = t
								* n;
						o.push(a), r > c
								? (t++, i._loadContactData(e, t, n))
								: (l.contactList = o, i._save(e))
					}
				}, function(e) {
					i.$log.warn(e)
				})
			}
		}, {
			key : "_getRecentClients",
			value : function(e, t) {
				return this.api("getRecentClients", {
							fragments : {
								type : e || "item_type_booking",
								count : t || 100
							}
						})
			}
		}, {
			key : "_loadBookingData",
			value : function(e) {
				var t = this;
				this._getRecentClients().then(function(n) {
					n.data && n.data.status && "200" == n.data.status
							&& (r = n.data.data.list), l.bookList = r, t
							._save(e)
				}, function(e) {
					t.$log.warn(e)
				})
			}
		}, {
			key : "_loadConsultData",
			value : function(e) {
				var t = this;
				this._getRecentClients("item_type_information").then(
						function(n) {
							n.data && n.data.status && "200" == n.data.status
									&& (c = n.data.data.list), l.consultList = c, t
									._save(e)
						}, function(e) {
							t.$log.warn(e)
						})
			}
		}, {
			key : "_clearContacts",
			value : function() {
				this.$log.debug("contactList.clearContacts()"), o.splice(0,
						o.length)
			}
		}, {
			key : "_save",
			value : function(e) {
				this.ls.set("cache.contacts." + e, l)
			}
		}, {
			key : "_restore",
			value : function(e) {
				return this.ls.get("cache.contacts." + e) || {}
			}
		}]), e
	}();
	t["default"] = d, e.exports = t["default"]
}, function(e, t, n) {
	"use strict";
	function i(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
				value : !0
			});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
						&& (i.writable = !0), Object
						.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}(), a = n(18), o = function() {
		function e(t, n, s, o) {
			"ngInject";
			i(this, e), a.resolveInject(e, arguments, this)
		}
		return e.$inject = ["$log", "$q", "$timeout", "sensorReportService"], s(
				e, [{
					key : "reportPageView",
					value : function(e, t, n) {
						if (!_.isEmpty(e)) {
							var i = {
								clientId : e.id,
								clientName : e.name,
								clientRole : "总公司信息技术部" === e.yybName
										? "测试人员"
										: "none" !== e.qualification
												? "投顾"
												: "非投顾",
								terminal : t
							};
							n && (i.hash = n), this.sensorReportService
									.reportPV(i)
						}
					}
				}, {
					key : "reportPageEvent",
					value : function(e, t, n, i) {
						if (!_.isEmpty(e)) {
							var s = {
								clientId : e.id,
								clientName : e.name,
								clientRole : "总公司信息技术部" === e.yybName
										? "测试人员"
										: "none" !== e.qualification
												? "投顾"
												: "非投顾",
								buttonName : t,
								terminal : n
							};
							i && (s.hash = i), this.sensorReportService
									.reportEvent(s)
						}
					}
				}, {
					key : "reportAppStar",
					value : function(e, t) {
						var n = {
							clientId : e.id,
							clientName : e.name,
							clientRole : "总公司信息技术部" === e.yybName
									? "测试人员"
									: "none" !== e.qualification ? "投顾" : "非投顾",
							platform : t
						};
						this.sensorReportService.reportStart(n)
					}
				}]), e
	}();
	t["default"] = o, e.exports = t["default"]
}, function(e, t) {/*
					 * Binary Ajax 0.1.10 Copyright (c) 2008 Jacob Seidelin,
					 * jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
					 * Licensed under the MPL License
					 * [http://www.nihilogic.dk/licenses/mpl-license.txt]
					 */
			"use strict";
			window.BinaryFile = function(e, t, n) {
				var i = e, s = t || 0, a = 0;
				this.getRawData = function() {
					return i
				}, "string" == typeof e
						? (a = n || i.length, this.getByteAt = function(e) {
							return 255 & i.charCodeAt(e + s)
						}, this.getBytesAt = function(e, t) {
							for (var n = [], a = 0; t > a; a++)
								n[a] = 255 & i.charCodeAt(e + a + s);
							return n
						})
						: "unknown" == typeof e
								&& (a = n || IEBinary_getLength(i), this.getByteAt = function(
										e) {
									return IEBinary_getByteAt(i, e + s)
								}, this.getBytesAt = function(e, t) {
									return new VBArray(IEBinary_getBytesAt(i, e
													+ s, t)).toArray()
								}), this.getLength = function() {
					return a
				}, this.getSByteAt = function(e) {
					var t = this.getByteAt(e);
					return t > 127 ? t - 256 : t
				}, this.getShortAt = function(e, t) {
					var n = t
							? (this.getByteAt(e) << 8) + this.getByteAt(e + 1)
							: (this.getByteAt(e + 1) << 8) + this.getByteAt(e);
					return 0 > n && (n += 65536), n
				}, this.getSShortAt = function(e, t) {
					var n = this.getShortAt(e, t);
					return n > 32767 ? n - 65536 : n
				}, this.getLongAt = function(e, t) {
					var n = this.getByteAt(e), i = this.getByteAt(e + 1), s = this
							.getByteAt(e + 2), a = this.getByteAt(e + 3), o = t
							? (((n << 8) + i << 8) + s << 8) + a
							: (((a << 8) + s << 8) + i << 8) + n;
					return 0 > o && (o += 4294967296), o
				}, this.getSLongAt = function(e, t) {
					var n = this.getLongAt(e, t);
					return n > 2147483647 ? n - 4294967296 : n
				}, this.getStringAt = function(e, t) {
					for (var n = [], i = this.getBytesAt(e, t), s = 0; t > s; s++)
						n[s] = String.fromCharCode(i[s]);
					return n.join("")
				}, this.getCharAt = function(e) {
					return String.fromCharCode(this.getByteAt(e))
				}, this.toBase64 = function() {
					return window.btoa(i)
				}, this.fromBase64 = function(e) {
					i = window.atob(e)
				}
			};
			!function() {
				function e() {
					var e = null;
					return window.ActiveXObject
							? e = new ActiveXObject("Microsoft.XMLHTTP")
							: window.XMLHttpRequest && (e = new XMLHttpRequest), e
				}
				function t(t, n, i) {
					var s = e();
					s ? (n
							&& ("undefined" != typeof s.onload
									? s.onload = function() {
										"200" == s.status ? n(this) : i && i(), s = null
									}
									: s.onreadystatechange = function() {
										4 == s.readyState
												&& ("200" == s.status
														? n(this)
														: i && i(), s = null)
									}), s.open("HEAD", t, !0), s.send(null))
							: i && i()
				}
				function n(t, n, i, s, a, o) {
					var r = e();
					if (r) {
						var c = 0;
						s && !a && (c = s[0]);
						var l = 0;
						s && (l = s[1] - s[0] + 1), n
								&& ("undefined" != typeof r.onload
										? r.onload = function() {
											"200" == r.status
													|| "206" == r.status
													|| "0" == r.status
													? (r.binaryResponse = new BinaryFile(
															r.responseText, c,
															l), r.fileSize = o
															|| r
																	.getResponseHeader("Content-Length"), n(r))
													: i && i(), r = null
										}
										: r.onreadystatechange = function() {
											if (4 == r.readyState) {
												if ("200" == r.status
														|| "206" == r.status
														|| "0" == r.status) {
													var e = {
														status : r.status,
														binaryResponse : new BinaryFile(
																"unknown" == typeof r.responseBody
																		? r.responseBody
																		: r.responseText,
																c, l),
														fileSize : o
																|| r
																		.getResponseHeader("Content-Length")
													};
													n(e)
												} else
													i && i();
												r = null
											}
										}), r.open("GET", t, !0), r.overrideMimeType
								&& r
										.overrideMimeType("text/plain; charset=x-user-defined"), s
								&& a
								&& r.setRequestHeader("Range", "bytes=" + s[0]
												+ "-" + s[1]), r
								.setRequestHeader("If-Modified-Since",
										"Sat, 1 Jan 1970 00:00:00 GMT"), r
								.send(null)
					} else
						i && i()
				}
				return function(e, i, s, a) {
					a ? t(e, function(t) {
								var o, r, c = parseInt(
										t.getResponseHeader("Content-Length"),
										10), l = t
										.getResponseHeader("Accept-Ranges");
								o = a[0], a[0] < 0 && (o += c), r = o + a[1]
										- 1, n(e, i, s, [o, r], "bytes" == l, c)
							})
							: n(e, i, s)
				}
			}();
			document
					.write("<script type='text/vbscript'>\r\nFunction IEBinary_getByteAt(strBinary, iOffset)\r\n	IEBinary_getByteAt = AscB(MidB(strBinary, iOffset + 1, 1))\r\nEnd Function\r\nFunction IEBinary_getBytesAt(strBinary, iOffset, iLength)\r\n  Dim aBytes()\r\n  ReDim aBytes(iLength - 1)\r\n  For i = 0 To iLength - 1\r\n   aBytes(i) = IEBinary_getByteAt(strBinary, iOffset + i)\r\n  Next\r\n  IEBinary_getBytesAt = aBytes\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n	IEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n</script>\r\n")
		}, function(e, t) {/*
							 * Javascript EXIF Reader 0.1.6 Copyright (c) 2008
							 * Jacob Seidelin, jseidelin@nihilogic.dk,
							 * http://blog.nihilogic.dk/ Licensed under the MPL
							 * License
							 * [http://www.nihilogic.dk/licenses/mpl-license.txt]
							 */
			"use strict";
			window.EXIF = function() {
				function e(e) {
					return !!e.exifdata
				}
				function t(e, t) {
					BinaryAjax(e.src, function(i) {
								var s = n(i.binaryResponse);
								e.exifdata = s || {}, t && t.call(e)
							})
				}
				function n(e) {
					if (255 != e.getByteAt(0) || 216 != e.getByteAt(1))
						return !1;
					for (var t, n = 2, i = e.getLength(); i > n;) {
						if (255 != e.getByteAt(n))
							return d
									&& console
											.log("Not a valid marker at offset "
													+ n
													+ ", found: "
													+ e.getByteAt(n)), !1;
						if (t = e.getByteAt(n + 1), 22400 == t)
							return d && console.log("Found 0xFFE1 marker"), a(
									e, n + 4, e.getShortAt(n + 2, !0) - 2);
						if (225 == t)
							return d && console.log("Found 0xFFE1 marker"), a(
									e, n + 4, e.getShortAt(n + 2, !0) - 2);
						n += 2 + e.getShortAt(n + 2, !0)
					}
				}
				function i(e, t, n, i, a) {
					var o, r, c, l = e.getShortAt(n, a), u = {};
					for (c = 0; l > c; c++)
						o = n + 12 * c + 2, r = i[e.getShortAt(o, a)], !r
								&& d
								&& console.log("Unknown tag: "
										+ e.getShortAt(o, a)), u[r] = s(e, o,
								t, n, a);
					return u
				}
				function s(e, t, n, i, s) {
					var a, o, r, c, l, u, d = e.getShortAt(t + 2, s), p = e
							.getLongAt(t + 4, s), f = e.getLongAt(t + 8, s) + n;
					switch (d) {
						case 1 :
						case 7 :
							if (1 == p)
								return e.getByteAt(t + 8, s);
							for (a = p > 4 ? f : t + 8, o = [], c = 0; p > c; c++)
								o[c] = e.getByteAt(a + c);
							return o;
						case 2 :
							return a = p > 4 ? f : t + 8, e.getStringAt(a, p
											- 1);
						case 3 :
							if (1 == p)
								return e.getShortAt(t + 8, s);
							for (a = p > 2 ? f : t + 8, o = [], c = 0; p > c; c++)
								o[c] = e.getShortAt(a + 2 * c, s);
							return o;
						case 4 :
							if (1 == p)
								return e.getLongAt(t + 8, s);
							o = [];
							for (var c = 0; p > c; c++)
								o[c] = e.getLongAt(f + 4 * c, s);
							return o;
						case 5 :
							if (1 == p)
								return l = e.getLongAt(f, s), u = e.getLongAt(f
												+ 4, s), r = new Number(l / u), r.numerator = l, r.denominator = u, r;
							for (o = [], c = 0; p > c; c++)
								l = e.getLongAt(f + 8 * c, s), u = e.getLongAt(
										f + 4 + 8 * c, s), o[c] = new Number(l
										/ u), o[c].numerator = l, o[c].denominator = u;
							return o;
						case 9 :
							if (1 == p)
								return e.getSLongAt(t + 8, s);
							for (o = [], c = 0; p > c; c++)
								o[c] = e.getSLongAt(f + 4 * c, s);
							return o;
						case 10 :
							if (1 == p)
								return e.getSLongAt(f, s)
										/ e.getSLongAt(f + 4, s);
							for (o = [], c = 0; p > c; c++)
								o[c] = e.getSLongAt(f + 8 * c, s)
										/ e.getSLongAt(f + 4 + 8 * c, s);
							return o
					}
				}
				function a(e, t) {
					if ("Exif" != e.getStringAt(t, 4))
						return d
								&& console.log("Not valid EXIF data! "
										+ e.getStringAt(t, 4)), !1;
					var n, s, a, o, r, c = t + 6;
					if (18761 == e.getShortAt(c))
						n = !1;
					else {
						if (19789 != e.getShortAt(c))
							return d
									&& console
											.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
						n = !0
					}
					if (42 != e.getShortAt(c + 2, n))
						return d
								&& console
										.log("Not valid TIFF data! (no 0x002A)"), !1;
					if (8 != e.getLongAt(c + 4, n))
						return d
								&& console
										.log(
												"Not valid TIFF data! (First offset not 8)",
												e.getShortAt(c + 4, n)), !1;
					if (s = i(e, c, c + 8, f, n), s.ExifIFDPointer) {
						o = i(e, c, c + s.ExifIFDPointer, p, n);
						for (a in o) {
							switch (a) {
								case "LightSource" :
								case "Flash" :
								case "MeteringMode" :
								case "ExposureProgram" :
								case "SensingMethod" :
								case "SceneCaptureType" :
								case "SceneType" :
								case "CustomRendered" :
								case "WhiteBalance" :
								case "GainControl" :
								case "Contrast" :
								case "Saturation" :
								case "Sharpness" :
								case "SubjectDistanceRange" :
								case "FileSource" :
									o[a] = h[a][o[a]];
									break;
								case "ExifVersion" :
								case "FlashpixVersion" :
									o[a] = String.fromCharCode(o[a][0],
											o[a][1], o[a][2], o[a][3]);
									break;
								case "ComponentsConfiguration" :
									o[a] = h.Components[o[a][0]]
											+ h.Components[o[a][1]]
											+ h.Components[o[a][2]]
											+ h.Components[o[a][3]]
							}
							s[a] = o[a]
						}
					}
					if (s.GPSInfoIFDPointer) {
						r = i(e, c, c + s.GPSInfoIFDPointer, g, n);
						for (a in r) {
							switch (a) {
								case "GPSVersionID" :
									r[a] = r[a][0] + "." + r[a][1] + "."
											+ r[a][2] + "." + r[a][3]
							}
							s[a] = r[a]
						}
					}
					return s
				}
				function o(n, i) {
					return n.complete
							? (e(n) ? i && i.call(n) : t(n, i), !0)
							: !1
				}
				function r(t, n) {
					return e(t) ? t.exifdata[n] : void 0
				}
				function c(t) {
					if (!e(t))
						return {};
					var n, i = t.exifdata, s = {};
					for (n in i)
						i.hasOwnProperty(n) && (s[n] = i[n]);
					return s
				}
				function l(t) {
					if (!e(t))
						return "";
					var n, i = t.exifdata, s = "";
					for (n in i)
						i.hasOwnProperty(n)
								&& (s += "object" == typeof i[n]
										? i[n] instanceof Number ? n + " : "
												+ i[n] + " [" + i[n].numerator
												+ "/" + i[n].denominator
												+ "]\r\n" : n + " : ["
												+ i[n].length + " values]\r\n"
										: n + " : " + i[n] + "\r\n");
					return s
				}
				function u(e) {
					return n(e)
				}
				var d = !1, p = {
					36864 : "ExifVersion",
					40960 : "FlashpixVersion",
					40961 : "ColorSpace",
					40962 : "PixelXDimension",
					40963 : "PixelYDimension",
					37121 : "ComponentsConfiguration",
					37122 : "CompressedBitsPerPixel",
					37500 : "MakerNote",
					37510 : "UserComment",
					40964 : "RelatedSoundFile",
					36867 : "DateTimeOriginal",
					36868 : "DateTimeDigitized",
					37520 : "SubsecTime",
					37521 : "SubsecTimeOriginal",
					37522 : "SubsecTimeDigitized",
					33434 : "ExposureTime",
					33437 : "FNumber",
					34850 : "ExposureProgram",
					34852 : "SpectralSensitivity",
					34855 : "ISOSpeedRatings",
					34856 : "OECF",
					37377 : "ShutterSpeedValue",
					37378 : "ApertureValue",
					37379 : "BrightnessValue",
					37380 : "ExposureBias",
					37381 : "MaxApertureValue",
					37382 : "SubjectDistance",
					37383 : "MeteringMode",
					37384 : "LightSource",
					37385 : "Flash",
					37396 : "SubjectArea",
					37386 : "FocalLength",
					41483 : "FlashEnergy",
					41484 : "SpatialFrequencyResponse",
					41486 : "FocalPlaneXResolution",
					41487 : "FocalPlaneYResolution",
					41488 : "FocalPlaneResolutionUnit",
					41492 : "SubjectLocation",
					41493 : "ExposureIndex",
					41495 : "SensingMethod",
					41728 : "FileSource",
					41729 : "SceneType",
					41730 : "CFAPattern",
					41985 : "CustomRendered",
					41986 : "ExposureMode",
					41987 : "WhiteBalance",
					41988 : "DigitalZoomRation",
					41989 : "FocalLengthIn35mmFilm",
					41990 : "SceneCaptureType",
					41991 : "GainControl",
					41992 : "Contrast",
					41993 : "Saturation",
					41994 : "Sharpness",
					41995 : "DeviceSettingDescription",
					41996 : "SubjectDistanceRange",
					40965 : "InteroperabilityIFDPointer",
					42016 : "ImageUniqueID"
				}, f = {
					256 : "ImageWidth",
					257 : "ImageHeight",
					34665 : "ExifIFDPointer",
					34853 : "GPSInfoIFDPointer",
					40965 : "InteroperabilityIFDPointer",
					258 : "BitsPerSample",
					259 : "Compression",
					262 : "PhotometricInterpretation",
					274 : "Orientation",
					277 : "SamplesPerPixel",
					284 : "PlanarConfiguration",
					530 : "YCbCrSubSampling",
					531 : "YCbCrPositioning",
					282 : "XResolution",
					283 : "YResolution",
					296 : "ResolutionUnit",
					273 : "StripOffsets",
					278 : "RowsPerStrip",
					279 : "StripByteCounts",
					513 : "JPEGInterchangeFormat",
					514 : "JPEGInterchangeFormatLength",
					301 : "TransferFunction",
					318 : "WhitePoint",
					319 : "PrimaryChromaticities",
					529 : "YCbCrCoefficients",
					532 : "ReferenceBlackWhite",
					306 : "DateTime",
					270 : "ImageDescription",
					271 : "Make",
					272 : "Model",
					305 : "Software",
					315 : "Artist",
					33432 : "Copyright"
				}, g = {
					0 : "GPSVersionID",
					1 : "GPSLatitudeRef",
					2 : "GPSLatitude",
					3 : "GPSLongitudeRef",
					4 : "GPSLongitude",
					5 : "GPSAltitudeRef",
					6 : "GPSAltitude",
					7 : "GPSTimeStamp",
					8 : "GPSSatellites",
					9 : "GPSStatus",
					10 : "GPSMeasureMode",
					11 : "GPSDOP",
					12 : "GPSSpeedRef",
					13 : "GPSSpeed",
					14 : "GPSTrackRef",
					15 : "GPSTrack",
					16 : "GPSImgDirectionRef",
					17 : "GPSImgDirection",
					18 : "GPSMapDatum",
					19 : "GPSDestLatitudeRef",
					20 : "GPSDestLatitude",
					21 : "GPSDestLongitudeRef",
					22 : "GPSDestLongitude",
					23 : "GPSDestBearingRef",
					24 : "GPSDestBearing",
					25 : "GPSDestDistanceRef",
					26 : "GPSDestDistance",
					27 : "GPSProcessingMethod",
					28 : "GPSAreaInformation",
					29 : "GPSDateStamp",
					30 : "GPSDifferential"
				}, h = {
					ExposureProgram : {
						0 : "Not defined",
						1 : "Manual",
						2 : "Normal program",
						3 : "Aperture priority",
						4 : "Shutter priority",
						5 : "Creative program",
						6 : "Action program",
						7 : "Portrait mode",
						8 : "Landscape mode"
					},
					MeteringMode : {
						0 : "Unknown",
						1 : "Average",
						2 : "CenterWeightedAverage",
						3 : "Spot",
						4 : "MultiSpot",
						5 : "Pattern",
						6 : "Partial",
						255 : "Other"
					},
					LightSource : {
						0 : "Unknown",
						1 : "Daylight",
						2 : "Fluorescent",
						3 : "Tungsten (incandescent light)",
						4 : "Flash",
						9 : "Fine weather",
						10 : "Cloudy weather",
						11 : "Shade",
						12 : "Daylight fluorescent (D 5700 - 7100K)",
						13 : "Day white fluorescent (N 4600 - 5400K)",
						14 : "Cool white fluorescent (W 3900 - 4500K)",
						15 : "White fluorescent (WW 3200 - 3700K)",
						17 : "Standard light A",
						18 : "Standard light B",
						19 : "Standard light C",
						20 : "D55",
						21 : "D65",
						22 : "D75",
						23 : "D50",
						24 : "ISO studio tungsten",
						255 : "Other"
					},
					Flash : {
						0 : "Flash did not fire",
						1 : "Flash fired",
						5 : "Strobe return light not detected",
						7 : "Strobe return light detected",
						9 : "Flash fired, compulsory flash mode",
						13 : "Flash fired, compulsory flash mode, return light not detected",
						15 : "Flash fired, compulsory flash mode, return light detected",
						16 : "Flash did not fire, compulsory flash mode",
						24 : "Flash did not fire, auto mode",
						25 : "Flash fired, auto mode",
						29 : "Flash fired, auto mode, return light not detected",
						31 : "Flash fired, auto mode, return light detected",
						32 : "No flash function",
						65 : "Flash fired, red-eye reduction mode",
						69 : "Flash fired, red-eye reduction mode, return light not detected",
						71 : "Flash fired, red-eye reduction mode, return light detected",
						73 : "Flash fired, compulsory flash mode, red-eye reduction mode",
						77 : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
						79 : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
						89 : "Flash fired, auto mode, red-eye reduction mode",
						93 : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
						95 : "Flash fired, auto mode, return light detected, red-eye reduction mode"
					},
					SensingMethod : {
						1 : "Not defined",
						2 : "One-chip color area sensor",
						3 : "Two-chip color area sensor",
						4 : "Three-chip color area sensor",
						5 : "Color sequential area sensor",
						7 : "Trilinear sensor",
						8 : "Color sequential linear sensor"
					},
					SceneCaptureType : {
						0 : "Standard",
						1 : "Landscape",
						2 : "Portrait",
						3 : "Night scene"
					},
					SceneType : {
						1 : "Directly photographed"
					},
					CustomRendered : {
						0 : "Normal process",
						1 : "Custom process"
					},
					WhiteBalance : {
						0 : "Auto white balance",
						1 : "Manual white balance"
					},
					GainControl : {
						0 : "None",
						1 : "Low gain up",
						2 : "High gain up",
						3 : "Low gain down",
						4 : "High gain down"
					},
					Contrast : {
						0 : "Normal",
						1 : "Soft",
						2 : "Hard"
					},
					Saturation : {
						0 : "Normal",
						1 : "Low saturation",
						2 : "High saturation"
					},
					Sharpness : {
						0 : "Normal",
						1 : "Soft",
						2 : "Hard"
					},
					SubjectDistanceRange : {
						0 : "Unknown",
						1 : "Macro",
						2 : "Close view",
						3 : "Distant view"
					},
					FileSource : {
						3 : "DSC"
					},
					Components : {
						0 : "",
						1 : "Y",
						2 : "Cb",
						3 : "Cr",
						4 : "R",
						5 : "G",
						6 : "B"
					}
				};
				return {
					readFromBinaryFile : u,
					pretty : l,
					getTag : r,
					getAllTags : c,
					getData : o,
					Tags : p,
					TiffTags : f,
					GPSTags : g,
					StringValues : h
				}
			}()
		}, function(e, t) {
			"use strict";
			!function(e) {
				function t(e, t) {
					this.file = e, this.options = i.extend({}, s, t), this._defaults = s, this._name = n, this
							.init()
				}
				var n = "canvasResize", i = {
					newsize : function(e, t, n, i, s) {
						var a = s ? "h" : "";
						if (n && e > n || i && t > i) {
							var o = e / t;
							(o >= 1 || 0 === i) && n && !s
									? (e = n, t = n / o >> 0)
									: s && n / i >= o
											? (e = n, t = n / o >> 0, a = "w")
											: (e = i * o >> 0, t = i)
						}
						return {
							width : e,
							height : t,
							cropped : a
						}
					},
					dataURLtoBlob : function(e) {
						for (var t = e.split(",")[0].split(":")[1].split(";")[0], n = atob(e
								.split(",")[1]), i = new ArrayBuffer(n.length), s = new Uint8Array(i), a = 0; a < n.length; a++)
							s[a] = n.charCodeAt(a);
						var o = window.BlobBuilder || window.WebKitBlobBuilder
								|| window.MozBlobBuilder;
						return o
								? (o = new (window.BlobBuilder
										|| window.WebKitBlobBuilder || window.MozBlobBuilder), o
										.append(i), o.getBlob(t))
								: o = new Blob([i], {
											type : t
										})
					},
					detectSubsampling : function(e) {
						var t = e.width, n = e.height;
						if (t * n > 1048576) {
							var i = document.createElement("canvas");
							i.width = i.height = 1;
							var s = i.getContext("2d");
							return s.drawImage(e, -t + 1, 0), 0 === s
									.getImageData(0, 0, 1, 1).data[3]
						}
						return !1
					},
					rotate : function(e, t) {
						var n = {
							1 : {
								90 : 6,
								180 : 3,
								270 : 8
							},
							2 : {
								90 : 7,
								180 : 4,
								270 : 5
							},
							3 : {
								90 : 8,
								180 : 1,
								270 : 6
							},
							4 : {
								90 : 5,
								180 : 2,
								270 : 7
							},
							5 : {
								90 : 2,
								180 : 7,
								270 : 4
							},
							6 : {
								90 : 3,
								180 : 8,
								270 : 1
							},
							7 : {
								90 : 4,
								180 : 5,
								270 : 2
							},
							8 : {
								90 : 1,
								180 : 6,
								270 : 3
							}
						};
						return n[e][t] ? n[e][t] : e
					},
					transformCoordinate : function(e, t, n, i) {
						switch (i) {
							case 5 :
							case 6 :
							case 7 :
							case 8 :
								e.width = n, e.height = t;
								break;
							default :
								e.width = t, e.height = n
						}
						var s = e.getContext("2d");
						switch (i) {
							case 1 :
								break;
							case 2 :
								s.translate(t, 0), s.scale(-1, 1);
								break;
							case 3 :
								s.translate(t, n), s.rotate(Math.PI);
								break;
							case 4 :
								s.translate(0, n), s.scale(1, -1);
								break;
							case 5 :
								s.rotate(.5 * Math.PI), s.scale(1, -1);
								break;
							case 6 :
								s.rotate(.5 * Math.PI), s.translate(0, -n);
								break;
							case 7 :
								s.rotate(.5 * Math.PI), s.translate(t, -n), s
										.scale(-1, 1);
								break;
							case 8 :
								s.rotate(-.5 * Math.PI), s.translate(-t, 0)
						}
					},
					detectVerticalSquash : function(e, t, n) {
						var i = document.createElement("canvas");
						i.width = 1, i.height = n;
						var s = i.getContext("2d");
						s.drawImage(e, 0, 0);
						for (var a = s.getImageData(0, 0, 1, n).data, o = 0, r = n, c = n; c > o;) {
							var l = a[4 * (c - 1) + 3];
							0 === l ? r = c : o = c, c = r + o >> 1
						}
						var u = c / n;
						return 0 === u ? 1 : u
					},
					callback : function(e) {
						return e
					},
					extend : function() {
						var e = arguments[0] || {}, t = 1, n = arguments.length, s = !1;
						e.constructor === Boolean
								&& (s = e, e = arguments[1] || {}), 1 === n
								&& (e = this, t = 0);
						for (var a; n > t; t++)
							if (null !== (a = arguments[t]))
								for (var o in a)
									e !== a[o]
											&& (s && "object" == typeof a[o]
													&& e[o] ? i.extend(e[o],
													a[o]) : void 0 !== a[o]
													&& (e[o] = a[o]));
						return e
					}
				}, s = {
					width : 300,
					height : 0,
					crop : !1,
					quality : 80,
					rotate : 0,
					callback : i.callback
				};
				t.prototype = {
					init : function() {
						var e = this, t = this.file, n = new FileReader;
						n.onloadend = function(n) {
							var s = n.target.result, a = atob(s.split(",")[1]), o = new BinaryFile(
									a, 0, a.length), r = EXIF
									.readFromBinaryFile(o), c = new Image;
							c.onload = function(n) {
								var s = r.Orientation || 1;
								s = i.rotate(s, e.options.rotate);
								var a = s >= 5 && 8 >= s ? i.newsize(c.height,
										c.width, e.options.width,
										e.options.height, e.options.crop) : i
										.newsize(c.width, c.height,
												e.options.width,
												e.options.height,
												e.options.crop), o = c.width, l = c.height, u = a.width, d = a.height, p = document
										.createElement("canvas"), f = p
										.getContext("2d");
								f.save(), i.transformCoordinate(p, u, d, s), i
										.detectSubsampling(c)
										&& (o /= 2, l /= 2);
								var g = 1024, h = document
										.createElement("canvas");
								h.width = h.height = g;
								for (var v = h.getContext("2d"), m = i
										.detectVerticalSquash(c, o, l), y = 0; l > y;) {
									for (var _ = y + g > l ? l - y : g, S = 0; o > S;) {
										var I = S + g > o ? o - S : g;
										v.clearRect(0, 0, g, g), v.drawImage(c,
												-S, -y);
										var T = Math.floor(S * u / o), b = Math
												.ceil(I * u / o), k = Math
												.floor(y * d / l / m), E = Math
												.ceil(_ * d / l / m);
										f.drawImage(h, 0, 0, I, _, T, k, b, E), S += g
									}
									y += g
								}
								f.restore(), h = v = null;
								var C = document.createElement("canvas");
								C.width = "h" === a.cropped ? d : u, C.height = "w" === a.cropped
										? u
										: d;
								var w = "h" === a.cropped ? .5 * (d - u) : 0, O = "w" === a.cropped
										? .5 * (u - d)
										: 0, P = C.getContext("2d");
								if (P.drawImage(p, w, O, u, d), console.log(t,
										t.type), "image/png" === t.type)
									var A = C.toDataURL(t.type);
								else
									var A = C.toDataURL("image/jpeg", .01
													* e.options.quality);
								e.options.callback(A, C.width, C.height)
							}, c.src = s
						}, n.readAsDataURL(t)
					}
				}, e[n] = function(e, n) {
					return "string" == typeof e ? i[e](n) : void new t(e, n)
				}
			}(window)
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				"ngInject";
				function n() {
					i
							|| (i = t.get("authorizeService"), s = t
									.get("$state"), a = t.get("deviceService"), o = t
									.get("statusTipService"))
				}
				var i = void 0, s = void 0, a = void 0, o = void 0;
				return {
					request : function(e) {
						return e
					},
					requestError : function(t) {
						return e.reject(t)
					},
					response : function(e) {
						return e
					},
					responseError : function(t) {
						n();
						var r = "";
						return t.data
								&& (t.data.error_description
										&& (r = t.data.error_description), t.data.message
										&& (r = t.data.message), t.data.error_info
										&& (r = t.data.error_info)), r
								|| (400 === t.status
										? r = "账号或密码错误，请重新输入"
										: 403 === t.status
												? (r = "您太长时间没有使用此设备，为了您的账号安全请重新登录", i
														.setAuthInfo(null), s
														.go("login"))
												: 200 !== t.status
														&& (r = "("
																+ t.status
																+ ") 无法连接到服务器,请稍后尝试")), a.isOnline
								&& 0 !== t.status || (r = "世界上最遥远的距离就是木有网络"), t.config.data
								&& t.config.data.notShowTip || o.showTip({
											status : o.FAIL,
											message : r
										}), e.reject(t)
					}
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					}), n.$inject = ["$q", "$injector"], t["default"] = n, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				"ngInject";
				t.setPrefix("clickeggs.manager.web"), e.interceptors
						.push("httpInterceptor")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					}), n.$inject = ["$httpProvider",
					"localStorageServiceProvider"], t["default"] = n, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				"ngInject";
				e.state("login", {
							url : "/login",
							templateUrl : "app/login/login.html",
							controller : "LoginController",
							controllerAs : "login"
						}).state("main", {
					url : "/main",
					templateUrl : "app/main/main.html",
					controller : "MainController",
					controllerAs : "main",
					"abstract" : !0,
					resolve : {
						tokenVerified : ["$state", "appVersion",
								"authorizeService", "statusTipService",
								"webMainService", function(e, t, n, i, s) {
									return i.showTip({
												backdrop : !0,
												status : i.PROCESSING,
												message : "正在加载...",
												duration : 5e3
											}), n.verify().then(function() {
										s.initialize(t, "manager_web",
												n.getAuthInfo()).then(
												function() {
													i.hideTip()
												}, function(e) {
													i.showTip({
														message : "加载失败..."
																+ (e.data
																		&& e.data.msg
																		? e.data.msg
																		: "网络好像很不给力哦"),
														status : i.FAIL,
														backdrop : !1,
														duration : 3e3
													})
												})
									}, function() {
										e.go("login"), i.hideTip()
									})
								}]
					}
				}).state("main.order", {  //TODO 可以和订单有关
							url : "/order",
							templateUrl : "app/order/order.html",
							controller : "OrderController",
							controllerAs : "order"
						}).state("main.contact", {
							url : "/contact",
							templateUrl : "app/contact/contact.html",
							controller : "ContactController",
							controllerAs : "contact"
						}).state("main.client", {
							url : "/client",
							templateUrl : "app/client/client.html",
							controller : "ClientController",
							controllerAs : "client"
						}), t.otherwise("/main/order")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			n(69);
			i.$inject = ["$stateProvider", "$urlRouterProvider"], t["default"] = i, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e) {
				var t = /^1\d{2}[0-9|*]{4}\d{4}$/;
				return !(!e || !t.test(e))
			}
			function i(e) {
				return !(!e || !/^1\d{10}$/.test(e))
			}
			function s(e) {
				for (var t = {}, n = _.keys(e), i = 0, s = n.length; s > i; i++)
					t[_.camelCase(n[i])] = e[n[i]];
				return t
			}
			function a(e, t, n) {
				void 0 === e && (e = {}), void 0 === t && (t = []);
				var i = {}, s = e.$inject;
				if (s && t.length >= s.length)
					for (var a = 0, o = s.length; o > a; a++)
						i[s[a]] = t[a];
				return n && _.assign(n, i), i
			}
			function o(e, t) {
				if (!e || 0 === e)
					return "";
				var n, i = new Date(e), s = new Date, a = s - i, o = Math
						.ceil(Math.abs(s.getTime() - e) / 1e3);
				return O >= a && s.getDate() - i.getDate() === 0 ? (n = i
						.format("hh:mm"), t
						&& (60 > o ? n = o + "秒前" : 3600 > o
								&& (n = Math.round(o / 60) + "分前"))) : n = i
						.format("MM-dd"), n
			}
			function r(e, t) {
				if (!e || 0 === e)
					return "";
				var n, i = new Date(e), s = new Date, a = s - i, o = Math
						.ceil(Math.abs(s.getTime() - e) / 1e3);
				return O >= a && s.getDate() - i.getDate() === 0 ? (n = i
						.format("hh:mm"), t
						&& (60 > o ? n = o + "秒前" : 3600 > o
								&& (n = Math.round(o / 60) + "分前"))) : n = s
						.getDate()
						- i.getDate() === 1 ? "昨天" : i.format("MM-dd"), n
			}
			function c(e) {
				return _.isString(e) && (e = Number(e)), 10 > e ? "0" + e : e
			}
			function l(e) {
				var t = parseFloat(e) / 1e3;
				return t = null != t && "" != t
						? t > 60 && 3600 > t
								? "00:"
										+ c(parseInt(t / 60))
										+ ":"
										+ c(parseInt(60
												* (parseFloat(t / 60) - parseInt(t
														/ 60))))
								: t >= 3600 && 86400 > t
										? c(parseInt(t / 3600))
												+ ":"
												+ c(parseInt(60
														* (parseFloat(t / 3600) - parseInt(t
																/ 3600))))
												+ ":"
												+ c(parseInt(60
														* (parseFloat(60
																* (parseFloat(t
																		/ 3600) - parseInt(t
																		/ 3600))) - parseInt(60
																* (parseFloat(t
																		/ 3600) - parseInt(t
																		/ 3600))))))
										: "00:00:" + c(parseInt(t))
						: "00:00:00"
			}
			function u(e, t) {
				if ("function" != typeof e)
					throw new Error("Param callback must be a function.");
				("number" != typeof t || 0 > t) && (t = 3e4);
				var n = !1, i = setTimeout(function() {
							n || (n = !0, e(new Error("timeout")))
						}, t);
				return function() {
					n || (n = !0, clearTimeout(i), e.apply(this, arguments))
				}
			}
			function d(e, t, n) {
				function i() {
					s || (s = _.slice(arguments, 0)), e.apply(n || this, s)
							? s = null
							: setTimeout(function() {
										i()
									}, t)
				}
				if ("function" != typeof e)
					throw new Error("Param callback must be a function.");
				("number" != typeof t || 0 > t) && (t = 3e3);
				var s = null;
				return i
			}
			function p() {
				var e = arguments.length <= 0 || void 0 === arguments[0]
						? ""
						: arguments[0];
				return [e, f(), f(), "-", f(), "-", f(), "-", f(), "-", f(),
						f(), f()].join("")
			}
			function f() {
				return (65536 * (1 + Math.random()) | 0).toString(16)
						.substring(1)
			}
			function g(e, t) {
				for (var n, i, s = -1, a = e.length, o = {}, r = []; ++s < a;)
					n = e[s], i = t ? t(n, s, e) : n, o[i]
							|| (r.push(n), o[i] = !0);
				return r
			}
			function h(e) {
				for (var t = e.split(",")[0].split(":")[1].split(";")[0], n = atob(e
						.split(",")[1]), i = new ArrayBuffer(n.length), s = new Uint8Array(i), a = 0; a < n.length; a++)
					s[a] = n.charCodeAt(a);
				var o = window.BlobBuilder || window.WebKitBlobBuilder
						|| window.MozBlobBuilder;
				return o
						? (o = new (window.BlobBuilder
								|| window.WebKitBlobBuilder || window.MozBlobBuilder), o
								.append(i), o.getBlob(t))
						: o = new Blob([i], {
									type : t
								})
			}
			function v(e, t) {
				var n, i, s, a = 0;
				for (t = t ? t.toLowerCase() : "", s = "utf-16" === t
						|| "utf16" === t ? m : y, n = 0, i = e.length; i > n; n++)
					a += s(e.charCodeAt(n));
				return a
			}
			function m(e) {
				return 65535 >= e ? 2 : 4
			}
			function y(e) {
				return 127 >= e ? 1 : 2047 >= e ? 2 : 65535 >= e ? 3 : 4
			}
			function S(e, t, n, i) {
				void 0 === n && (n = -2), void 0 === i && (i = "utf-8"), i = i
						.toLowerCase(), t += 1, n += 1;
				var s, a, o, r = "utf-16" === i || "utf16" === i ? m : y, c = -1, l = 0;
				for (s = 0, a = e.length; a > s
						&& (l += r(e.charCodeAt(s)), !(-1 === c && l >= t && (c = s, -1 === n))); s++)
					if (!o && -1 !== n && l >= n) {
						o = s - 1;
						break
					}
				return e.substring(c, o)
			}
			function I(e) {
				return "string" == typeof e
						? e.replace(/\B_*([A-Z])/g, "_$1")
						: ""
			}
			function T(e) {
				return e.replace(/_t=.+(?=&)&?/, "")
						+ (e.indexOf("?") > 0 ? "&_t=" : "?_t=")
						+ (new Date).getTime()
			}
			function b(e) {
				return e && "function" == typeof e.then
			}
			function k(e, t, n) {
				if (!e || !t)
					return e;
				if (n = "string" == typeof n ? n : "...", e.length > t) {
					var i = t - n.length;
					return i = i > 0 ? i : 0, e.slice(0, i) + n
				}
				return e
			}
			function E(e) {
				if (!document.cookie)
					return e ? void 0 : {};
				var t = _.reduce(document.cookie.replace(/\s/g, "").split(";"),
						function(e, t) {
							var n = t.split("=");
							return e[n[0]] = n[1], e
						}, {});
				return e ? t[e] : t
			}
			function C(e) {
				return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(
						/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g,
						"&apos;")
			}
			function w(e) {
				return e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(
						/&amp;/g, "&").replace(/&quot;/g, '"').replace(
						/&apos;/g, "'")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					}), t.isPhoneNumber = n, t.isPurePhoneNumber = i, t.camelCaseObject = s, t.resolveInject = a, t.getFriendlyTime = o, t.getFriendlyTime2 = r, t.millisecondToDate = l, t.timeoutCallback = u, t.retryCallback = d, t.uuid = p, t.uniqueArray = g, t.dataURIToBlob = h, t.sizeof = v, t.byteSubstring = S, t.underScoreCase = I, t.addRandomParamToUrl = T, t.isPromise = b, t.sliceStr = k, t.getCookie = E, t.htmlEscape = C, t.htmlUnescape = w;
			var O = 864e5;
			t["default"] = {
				isPhoneNumber : n,
				isPurePhoneNumber : i,
				camelCaseObject : s,
				resolveInject : a,
				getFriendlyTime : o,
				getFriendlyTime2 : r,
				millisecondToDate : l,
				timeoutCallback : u,
				retryCallback : d,
				uuid : p,
				uniqueArray : g,
				dataURIToBlob : h,
				sizeof : v,
				byteSubstring : S,
				underScoreCase : I,
				addRandomParamToUrl : T,
				isPromise : b,
				getCookie : E
			}, Date.prototype.format || (Date.prototype.format = function(e) {
				var t = {
					"M+" : this.getMonth() + 1,
					"d+" : this.getDate(),
					"h+" : this.getHours(),
					"m+" : this.getMinutes(),
					"s+" : this.getSeconds(),
					"q+" : Math.floor((this.getMonth() + 3) / 3),
					S : this.getMilliseconds()
				};
				/(y+)/.test(e)
						&& (e = e.replace(RegExp.$1, (this.getFullYear() + "")
										.substr(4 - RegExp.$1.length)));
				for (var n in t)
					new RegExp("(" + n + ")").test(e)
							&& (e = e
									.replace(
											RegExp.$1,
											1 === RegExp.$1.length
													? t[n]
													: ("00" + t[n])
															.substr(("" + t[n]).length)));
				return e
			}), String.prototype.toDate
					|| (String.prototype.toDate = function() {
						return new Date(Date.parse(this.replace(/-/g, "/")))
					})
		}, function(e, t, n) {
			"use strict";
			function i(e, t, n, i, s, a, o, r, c, l, u, d, p) {
				"ngInject";
				i.initialize(), t.$on("$stateChangeStart", function(e, t, n, i,
								s) {
						}), t.$on("$locationChangeSuccess", function() {
					var e = arguments[2].split("#")[1], t = e
							? e.split("?")[0]
							: "", n = arguments[1].split("#")[1], i = n ? n
							.split("?")[0] : "";
					if ("/login" !== i || "/login" !== t) {
						if ("/login" !== i) {
							var s = l.getManager();
							s.pnsId && u.reportPageView(s, "manager_web")
						}
						d.isInitialized().then(function(e) {
							"/login" === t
									&& (u.reportPageView(e, "manager_web", t), u
											.reportPageView(e, "manager_web",
													"/main/order"), u
											.reportPageEvent(e, "登录",
													"manager_web", t))
						})
					}
				}), t.$on("$stateChangeError", function(e, t, i, s, a, o) {
							n.go("login")
						}), p.bind("click", function(e) {
							var t = e.target, n = l.getManager(), i = void 0;
							angular.element(t).hasClass("monitor-event")
									&& (i = t.getAttribute("monitorName"), u
											.reportPageEvent(n, i,
													"manager_web"))
						})
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			n(69);
			i.$inject = ["$log", "$rootScope", "$state", "deviceService",
					"authorizeService", "devMode", "api", "debugService",
					"$timeout", "managerService", "managerSensorReportService",
					"webMainService", "$document"], t["default"] = i, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function s() {
				"ngInject";
				function e(e, t, n, i) {
					e.userState = i, e.isShowStateMenu = !1, e.showStateMenu = function(
							t) {
						e.$apply(function() {
									e.isShowStateMenu = t
								})
					};
					var s = angular.element;
					s(document).bind("click", function() {
								e.showStateMenu(!1)
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/main/user-state.html",
					replace : !0,
					scope : {
						showStarLevel : "="
					},
					controller : r,
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var a = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), o = n(69), r = function() {
				function e(t, n, s, a, r, c, l, u, d, p) {
					"ngInject";
					i(this, e), o.resolveInject(e, arguments, this), this.isNew = !1, this.manager = this.managerService
							.getManager(), this.inService = this.manager.inService, this.stateData = this.starLevelService
							.getStarLevelData(), this.formatLevel = {
						"零星级" : "暂无数据",
						"一星级" : 1,
						"二星级" : 2,
						"三星级" : 3,
						"四星级" : 4,
						"五星级" : 5
					}, this._subscribeEvents()
				}
				return e.$inject = ["$scope", "$rootScope", "$timeout",
						"UtilFunctions", "localStorageService",
						"managerService", "starLevelService", "api",
						"statusConfirmService", "managerSensorReportService"], a(
						e, [{
							key : "goMyStarLevel",
							value : function() {
								this.$scope.showStarLevel = !0, this.$scope.isShowStateMenu = !1
							}
						}, {
							key : "onState",
							value : function() {
								var e = this;
								this.$timeout(function() {
									return e.$scope.isShowStateMenu = !e.$scope.isShowStateMenu
								})
							}
						}, {
							key : "setOnline",
							value : function() {
								this.$scope.isShowStateMenu = !1, this.managerSensorReportService
										.reportPageEvent(this.manager, "上线服务",
												"manager_web"), this.managerService
										.setManagerInService(!0)
							}
						}, {
							key : "setOffline",
							value : function() {
								var e = this;
								return this.$scope.isShowStateMenu = !1, this.managerSensorReportService
										.reportPageEvent(this.manager, "暂停服务",
												"manager_web"), this.localStorageService
										.get("clickeggs.notRemind."
												+ this.manager.pnsId)
										? void this.managerService
												.setManagerInService(!1)
										: void this.statusConfirmService
												.showConfirm({
													message : "设置暂停服务后，你将不能收到新订单，但可继续服务老客户。",
													okBtn : "确定",
													showNotRemind : !0,
													backdrop : !0,
													onSetNotRemind : function() {
														e.localStorageService
																.set(
																		"clickeggs.notRemind."
																				+ e.manager.pnsId,
																		1)
													},
													onOk : function() {
														e.managerService
																.setManagerInService(!1)
													}
												})
							}
						}, {
							key : "isNumber",
							value : function(e) {
								return _.isNumber(e)
							}
						}, {
							key : "_subscribeEvents",
							value : function() {
								var e = this, t = [], n = this.managerService, i = this.starLevelService;
								t.push(n.listen(n.EVENT_USER_CHANGED,
										function() {
											e.$timeout(function() {
												e.manager = n.getManager(), e.inService = e.manager.inService
											})
										})), t.push(i.listen(
										i.EVENT_STATE_DATA_READY, function() {
											e.stateData = i.getStarLevelData(), e.isNew = e.stateData.is_new, e.newRankLevel = e.formatLevel[e.stateData.rankLevel]
										})), this.$scope.$on("$destroy",
										function() {
											return t.forEach(function(e) {
														return e()
													})
										})
							}
						}]), e
			}();
			t["default"] = s, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function s() {
				"ngInject";
				function e(e, t, n, i) {
					e.userInfo = i, e.isShowSettingMenu = !1, e.showSettingMenu = function(
							t) {
						e.$apply(function() {
									e.isShowSettingMenu = t
								})
					}, e.clickLogout = function() {
						e.onClickLogout && e.onClickLogout()
					};
					var s = angular.element, a = void 0, o = void 0;
					a = s(_.find(t.find("li"), function(e) {
								return s(e).hasClass("setting-menu")
							})), o = s(_.find(t.find("li"), function(e) {
								return s(e).hasClass("logout-menu")
							})), a.bind("click", function(t) {
						t.stopPropagation(), e.$apply(function() {
									e.showSetting = !0, e.isShowSettingMenu = !1
								})
					}), o.bind("click", function(t) {
								t.stopPropagation(), e.clickLogout()
							}), s(document).bind("click", function() {
								e.showSettingMenu(!1)
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/main/user-info.html",
					replace : !0,
					scope : {
						onClickLogout : "&",
						showSetting : "="
					},
					controller : r,
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var a = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), o = n(69), r = function() {
				function e(t, n, s, a, r, c) {
					"ngInject";
					i(this, e), o.resolveInject(e, arguments, this), this.manager = this.managerService
							.getManager(), this._subscribeEvents()
				}
				return e.$inject = ["$scope", "$rootScope", "$timeout",
						"UtilFunctions", "localStorageService",
						"managerService"], a(e, [{
					key : "onSetting",
					value : function() {
						var e = this;
						this.$timeout(function() {
							return e.$scope.isShowSettingMenu = !e.$scope.isShowSettingMenu
						}), this.localStorageService.set(
								"clickeggs.showSettingTip."
										+ this.manager.pnsId, 1)
					}
				}, {
					key : "_subscribeEvents",
					value : function() {
						var e = this, t = [], n = this.managerService;
						t.push(n.listen(n.EVENT_USER_CHANGED, function() {
									return e.manager = n.getManager()
								})), this.$scope.$on("$destroy", function() {
									return t.forEach(function(e) {
												return e()
											})
								})
					}
				}]), e
			}();
			t["default"] = s, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n() {
				"ngInject";
				function e(e, t, n, i) {
					e.vm = i
				}
				return {
					restrict : "EA",
					templateUrl : "app/components/chat-message/chat-message.html",
					replace : !0,
					scope : {
						message : "=",
						user : "=",
						messages : "=",
						messageIndex : "=",
						resendMessage : "&",
						doEvaluation : "&",
						goNoticeDetail : "&"
					},
					controller : "ChatMessageController",
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					}), t["default"] = n, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e) {
				"ngInject";
				function t(t, n, i, s) {
					function a() {
						t.$apply(function() {
									l = !1, s.showLoading = !1, s.showFail = !0
								})
					}
					t.vm = s;
					var o = angular.element, r = n[0].children[0].children[0], c = n[0].children[1], l = (o(c)
							.find("img")[0], !0), u = e(function() {
								a()
							}, 6e4);
					o(r).on("load", function() {
								e.cancel(u), l && t.$apply(function() {
											s.showLoading = !1, s.showThumbnail = !0
										})
							}), o(r).on("error", function() {
								e.cancel(u), a()
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/components/chat-message/chat-message-image.html",
					scope : !0,
					replace : !0,
					controller : "ChatMessageImageController",
					link : t
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					}), n.$inject = ["$timeout"], t["default"] = n, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n() {
				"ngInject";
				return {
					restrict : "EA",
					template : "<div></div>",
					replace : !0,
					scope : {
						starCount : "=?"
					},
					link : function(e, t, n) {
						for (var i = [], s = e.starCount, a = 0; s > a; a++)
							i.push('<i class="star"></i>');
						t.replaceWith(0 === i.length ? null : angular.element(i
								.join("")))
					}
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					}), t["default"] = n, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function i(e) {
				"ngInject";
				return {
					restrict : "EA",
					template : '<a href="javascript:;"><input class="file-input" id="file-input" type="file" title="发送图片" nv-file-select="" uploader="uploader" /></a>',
					replace : !0,
					scope : {
						clickSend : "&"
					},
					controller : o,
					link : function(e, t, n, i) {
						t.bind("change", function(e) {
									e.stopPropagation(), i.uploadImg()
								})
					}
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}();
			i.$inject = ["$timeout"];
			var a = null, o = function() {
				function e(t, i, s, o, r, c, l, u, d) {
					"ngInject";
					n(this, e), a = r.resolveInject(e, arguments);
					var p = "/app/api/files", f = d + p;
					this.manager = o.getManager(), t.uploader = new u({
								url : f + "?applicationName=" + c,
								formData : [{
											ownerId : this.manager.pnsId,
											width : 240
										}]
							}), t.uploader.filters.push({
								name : "imageFilter",
								fn : function(e, t) {
									var n = "|"
											+ e.type.slice(e.type
													.lastIndexOf("/")
													+ 1) + "|";
									return -1 !== "|jpg|png|jpeg|".indexOf(n)
											? !0
											: (l.showTip({
														status : l.FAIL,
														message : "不支持该图片格式"
													}), !1)
								}
							})
				}
				return e.$inject = ["$scope", "$rootScope", "$timeout",
						"managerService", "UtilFunctions", "appName",
						"statusTipService", "FileUploader", "uploadImgServer"], s(
						e, [{
							key : "uploadImg",
							value : function() {
								var e = a.$scope.uploader, t = a.statusTipService;
								0 !== e.queue.length && (t.showTip({
											status : t.PROCESSING,
											message : "正在发送, 请稍后",
											duration : 3e4
										}), canvasResize(e.queue[0]._file, {
									width : 1e3,
									height : 0,
									crop : !1,
									quality : 80,
									callback : function(n, i, s) {
										var o = a.UtilFunctions
												.dataURIToBlob(n);
										return 0 === o.size
												? void t.showTip({
															status : t.FAIL,
															message : "压缩图片失败, 请重新选择"
														})
												: (e.queue[0]._file = o, e.queue[0]
														.upload(), e.queue = [], e.onSuccessItem = function(
														e, n, i, s) {
													t.hideTip();
													var o = n.image;
													a.$scope.clickSend({
														msgObj : {
															name : n.name,
															type : n.type,
															size : n.size,
															width : o
																	&& o.width,
															height : o
																	&& o.height,
															link : n.link,
															variations : o
																	&& o.variations
														}
													})
												}, void(e.onErrorItem = function(
														e, n, i, s) {
													t.showTip({
																status : t.FAIL,
																message : "发送失败, 请重新选择"
															})
												}))
									}
								}), document.getElementById("file-input").value = "")
							}
						}]), e
			}();
			t["default"] = i, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function i() {
				"ngInject";
				function e(e, t, n, i) {
					e.transfer = i;
					var s = function(e) {
						e.stopPropagation()
					}, o = function() {
						i.show && e.$apply(function() {
									a.transferGroupService.isShow = i.show = !1
								})
					};
					t.bind("click", s);
					var r = angular.element;
					r(document).bind("click", o), e.$on("$destroy", function() {
								t.unbind("click", s), r(document).unbind(
										"click", o)
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/components/transfer-panel/transfer-panel.html",
					replace : !0,
					scope : {},
					controller : o,
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = null, o = function() {
				function e(t, i, s, o, r, c, l, u, d) {
					"ngInject";
					n(this, e), a = c.resolveInject(e, arguments), this.bigGroupSales = [], this.bigGroupExperts = [], this.avatarUrl = l, this.dataReady = !1, this.show = !1, this
							._resetUI(), this.listenToGroup()
				}
				return e.$inject = ["$scope", "$rootScope", "$timeout",
						"transferGroupService", "managerRecentContactService",
						"UtilFunctions", "avatarUrl", "chatPluginService",
						"chatPluginManager"], s(e, [{
					key : "listenToGroup",
					value : function() {
						{
							var e = this, t = [], n = a.$scope, i = a.managerRecentContactService, s = a.transferGroupService;
							a.chatPluginManager
						}
						t.push(s.listen(s.EVENT_GROUP_DATA_READY, function() {
							e.dataReady = !0, e.show = s.isShow = !0, e.bigGroupSales = s
									.getBigGroups(a.transferGroupService.BIG_GROUP_SALES), e.bigGroupExperts = s
									.getBigGroups(a.transferGroupService.BIG_GROUP_EXPERTS)
						})), t.push(s.listen(s.EVENT_ANY, function() {
									e.onToggleSelect()
								})), t.push(i.listen(i.EVENT_SELECTED,
								function() {
									e._resetUI()
								})), n.$on("$destroy", function() {
									t.forEach(function(e) {
												e()
											})
								})
					}
				}, {
					key : "doSearch",
					value : function() {
						var e = this.searchText.trim();
						"" !== e
								&& (this.searchResult = a.transferGroupService
										.getSearchResult(e))
					}
				}, {
					key : "clearSearch",
					value : function() {
						this.searchText = ""
					}
				}, {
					key : "onToggleSelect",
					value : function() {
						this.selectedUsers = a.transferGroupService
								.getSelectedUsers()
					}
				}, {
					key : "onClickUser",
					value : function(e) {
						a.transferGroupService.toggleSelectUser(e)
					}
				}, {
					key : "onClickSelectDone",
					value : function() {
						this.showSelectContent = !1
					}
				}, {
					key : "onBackToSelect",
					value : function() {
						this.showSelectContent = !0
					}
				}, {
					key : "onDoTransfer",
					value : function() {
						var e = this.transferText.trim();
						a.chatPluginService.onDoTransfer
								&& (a.chatPluginService.onDoTransfer({
											text : e,
											userIds : _
													.pluck(
															a.transferGroupService
																	.getSelectedUsers(),
															"userId").join(",")
										}), this.transferText = "", this
										._resetUI())
					}
				}, {
					key : "_resetUI",
					value : function() {
						a.transferGroupService.isShow = this.show = !1, this.dataReady = !1, this.showTab = 0, this.showSelectContent = !0, this.searchText = "", this.searchResult = [], this.selectedUsers = [], this.transferText = ""
					}
				}]), e
			}();
			t["default"] = i, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function i() {
				"ngInject";
				function e(e, t, n, i) {
					e.comment = i;
					var s = function(e) {
						e.stopPropagation()
					}, a = function() {
						i.show && e.$apply(function() {
									i._showPanel(!1)
								})
					};
					t.bind("click", s);
					var o = angular.element;
					o(document).bind("click", a), e.$on("$destroy", function() {
								t.unbind("click", s), o(document).unbind(
										"click", a)
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/components/quick-comment/quick-comment.html",
					replace : !0,
					scope : {
						inputText : "=",
						messageTag : "="
					},
					controller : o,
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = null, o = function() {
				function e(t, i, s, o, r, c, l, u, d, p) {
					"ngInject";
					n(this, e), a = r.resolveInject(e, arguments), this
							._showPanel(!1), this.addCommentText = "", this.dataReady = c.dataReady, this
							.subscribeEvents()
				}
				return e.$inject = ["$scope", "$rootScope", "$timeout",
						"managerRecentContactService", "UtilFunctions",
						"quickCommentService", "statusTipService",
						"statusConfirmService", "deviceService",
						"chatPluginManager"], s(e, [{
					key : "subscribeEvents",
					value : function() {
						{
							var e = this, t = [], n = a.managerRecentContactService, i = a.quickCommentService;
							a.chatPluginManager
						}
						t.push(n.listen(n.EVENT_SELECTED, function() {
									e._resetUI()
								})), t.push(i.listen(i.EVENT_DATA_READY,
								function() {
									e.quickComments = i.getAllComments(), a.statusTipService
											.hideTip(), e.dataReady = !0, e
											._showPanel(!e.show), e.isShowCommentList = !0
								})), a.$scope.$on("$destroy", function() {
									t.forEach(function(e) {
												e()
											})
								})
					}
				}, {
					key : "onSelectComment",
					value : function(e) {
						a.$scope.inputText += e.text, a.$scope.messageTag = "tag_quick_comment", this
								._showPanel(!1), document
								.getElementById("my-chattextarea").focus()
					}
				}, {
					key : "showAddComment",
					value : function() {
						this.isShowCommentList = !1
					}
				}, {
					key : "hideAddComment",
					value : function() {
						this.isShowCommentList = !0
					}
				}, {
					key : "addComment",
					value : function() {
						var e = a.statusTipService, t = this.addCommentText;
						if ("" === t)
							return void e.showTip({
										status : e.FAIL,
										message : "常用语内容不能为空"
									});
						if (t.length > 500)
							return void e.showTip({
										status : e.FAIL,
										message : "常用语字数不能超过500"
									});
						var n = {
							context : t
						};
						a.quickCommentService.addComment(n), this.addCommentText = "", this.isShowCommentList = !0
					}
				}, {
					key : "showDeleteConfirm",
					value : function(e, t) {
						var n = this, i = "您确定删除此常用语吗?", s = "确定";
						t.stopPropagation(), a.statusConfirmService
								.showConfirm({
									message : i,
									okBtn : s,
									backdrop : !0,
									onOk : function() {
										n.deleteComment(e)
									},
									onCancel : function() {
										a.$timeout(function() {
											n._showPanel(!0), n.isShowCommentList = !0
										})
									}
								})
					}
				}, {
					key : "deleteComment",
					value : function(e) {
						var t = this;
						a.quickCommentService.removeComment(e), a.$timeout(
								function() {
									t._showPanel(!0), t.isShowCommentList = !0
								})
					}
				}, {
					key : "moveTopComment",
					value : function(e, t) {
						var n = this;
						t.stopPropagation(), a.quickCommentService
								.moveTopComment(e), a.$timeout(function() {
									n._showPanel(!0), n.isShowCommentList = !0
								})
					}
				}, {
					key : "_showPanel",
					value : function(e) {
						a.quickCommentService.isShow = this.show = e
					}
				}, {
					key : "_resetUI",
					value : function() {
						this.isShowCommentList = !0
					}
				}]), e
			}();
			t["default"] = i, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function i() {
				"ngInject";
				function e(e, t, n, i) {
					e.mgrGroup = i
				}
				return {
					restrict : "EA",
					templateUrl : "app/components/transfer-panel/manager-group.html",
					replace : !0,
					scope : {
						group : "="
					},
					controller : o,
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = null, o = function() {
				function e(t, i, s, o, r, c, l) {
					"ngInject";
					n(this, e), a = r.resolveInject(e, arguments), this.group = t.group, this.isExpanded = !1, this.selectedCount = 0, this.avatarUrl = c, this.examBlackLimit = !0, this.offlineLimit = !0, this
							.listenToEvents()
				}
				return e.$inject = ["$scope", "$rootScope",
						"transferGroupService", "managerRecentContactService",
						"UtilFunctions", "avatarUrl", "statusTipService"], s(e,
						[{
							key : "listenToEvents",
							value : function() {
								{
									var e = this, t = [], n = a.$scope, i = a.managerRecentContactService, s = a.transferGroupService;
									a.statusTipService
								}
								t.push(s.listen(s.EVENT_USER_TOGGLED, function(
												t, n) {
											s.isUserBelongsToGroup(n, e.group)
													&& (n.selected
															? ++e.selectedCount
															: --e.selectedCount)
										})), t.push(s.listen(
										s.EVENT_GROUP_TOGGLED, function(t, n) {
											e.selectedCount = s
													.getGroupSelectedCount(e.group)
										})), t.push(i.listen(i.EVENT_SELECTED,
										function() {
											e.selectedCount = 0, e.isExpanded = !1
										})), t.push(s.listen(
										s.EVENT_SELECT_CLEARED, function() {
											e.selectedCount = 0, e.isExpanded = !1
										})), n.$on("$destroy", function() {
											t.forEach(function(e) {
														e()
													})
										})
							}
						}, {
							key : "onClickExpand",
							value : function() {
								this.isExpanded = !this.isExpanded
							}
						}, {
							key : "onClickUser",
							value : function(e) {
								var t = a.statusTipService;
								return this.examBlackLimit && e.examBlack
										? void t.showTip({
													status : t.ALERT,
													message : "该服务人员未按时通过考试，不可给Ta转单",
													duration : 3e3
												})
										: e.inService === !1
												|| "off_line" === e.status
												? void t.showTip({
													status : t.ALERT,
													message : "该经理已暂停服务，请转单给其他经理",
													duration : 3e3
												})
												: void a.transferGroupService
														.toggleSelectUser(e)
							}
						}, {
							key : "onClickGroup",
							value : function() {
								a.transferGroupService
										.toggleSelectGroup(this.group)
							}
						}]), e
			}();
			t["default"] = i, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = n(69), o = 6e5, r = function() {
				function e(t, n, s, o, r, c, l, u, d, p, f, g, h, v) {
					"ngInject";
					i(this, e), a.resolveInject(e, arguments, this), this.Message = o, this.isMe = n.message.from === n.user.pnsId, this.manager = s
							.getManager(), this.liClass = "", this.fromName = "", this.isManager = n.message
							.isGroup() ? this.isMe : s
							.isPnsIdManager(n.message.from), this.showTimespan = !1, this.headImgUrl = "", this.isSystemLike = [
							o.TYPE_SYSTEM, o.TYPE_RATING, o.NON_SIGNIN,
							o.NON_AGREEMENT, o.GF_PORTAL_LOGIN]
							.indexOf(n.message.type) >= 0, this.defaultAvatarUrl = this.isManager
							? "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/user-defaultimg_8180df553a.png"
							: "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/client-default_42bec44ee3.png";
					var m = n.message.getText();
					m
							&& "string" == typeof m
							&& (this.displayText = m.split("\n").join("<br/>"), this.displayText = u
									.trustAsHtml(this.displayText)), this.ProductType = {
						fund : {
							imgSrc : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/icon_fund_026e6ba6f4.png",
							desc : "基金产品"
						},
						asset : {
							imgSrc : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/icon_financing_cbde974b62.png",
							desc : "理财产品"
						},
						service : {
							imgSrc : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/icon_service_b8bb49dde2.png",
							desc : "服务产品"
						}
					}, this.contact = l.getSelectedContact(), this
							._handleMessage(), this._handleStyles()
				}
				return e.$inject = ["$log", "$scope", "managerService",
						"Message", "Contact", "chatUserService",
						"managerRecentContactService", "$sce",
						"chatPluginService", "chatPluginManager",
						"modelFactory", "parrotService",
						"managerSensorReportService", "devMode"], s(e, [{
					key : "resendMessage",
					value : function(e) {
						(e.status === this.Message.STATUS_FAIL || e.status === this.Message.STATUS_STOCK_SERVICE_FAIL)
								&& this.$scope.resendMessage({
											message : e
										})
					}
				}, {
					key : "doEvaluation",
					value : function() {
						this.$scope.doEvaluation()
					}
				}, {
					key : "doInvite",
					value : function(e) {
						e === this.Message.NON_SIGNIN
								? this.chatPluginService.onInviteLogin()
								: e === this.Message.NON_AGREEMENT
										&& this.chatPluginService
												.onSignRiskAgreement()
					}
				}, {
					key : "doClickHandle",
					value : function(e) {
						var t = e.type, n = this.Message, i = (this.parrotService, e.content.pnsClient);
						if (this.doInvite(t), t === n.GF_PORTAL_LOGIN) {
							var s = this.managerRecentContactService, a = s
									.getContactByPnsId(i.pnsID);
							s.selectContact(a ? a : s
									.addContact(this.modelFactory
											.createContactFromPayload(i)))
						}
					}
				}, {
					key : "showNoticeDetail",
					value : function(e) {
						var t = "公告：" + e.content.title;
						this.managerSensorReportService.reportPageEvent(
								this.manager, t, "manager_web"), this.$scope
								.goNoticeDetail({
											msg : e
										})
					}
				}, {
					key : "getLimitStr",
					value : function(e, t) {
						if (e && e.length <= t)
							return e;
						var n = /<img.*?(?:>|\/>)/gi, i = /<[^>]+>/g;
						e = e.replace(n, "[图片]").replace(i, "");
						var s = e.slice(0, t) + "...";
						return s
					}
				}, {
					key : "isNotDirty",
					value : function(e) {
						return e.content.tags
								&& e.content.tags.indexOf("dirty") >= 0
								? !1
								: !0
					}
				}, {
					key : "getUrl",
					value : function(e) {
						var t = e.content.url;
						return _.isObject(t) && (t = t.webUrl), e.content.type === this.Message.TYPE_DICTIONARY
								&& (t += -1 === t.search(/\?/)
										? "?from=jys_web"
										: "&from=jys_web"), t
					}
				}, {
					key : "_handleMessage",
					value : function() {
						var e = this, t = this.$scope, n = t.message, i = this.Message, s = n.type;
						n.isGroup()
								&& this.chatUserService.getUserInfo(n.from)
										.then(function(t) {
											t
													&& (e.notInService = t.inService === !1
															|| "off_line" === t.login_status, e.fromName = t.name, e.headImgUrl = t.avatar, t
															.isManager()
															|| (e.headImgUrl = "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/client-default_42bec44ee3.png"), e.notInService
															&& t.isManager()
															&& (e.liClass += " notInService"))
										}), [i.NON_SIGNIN, i.NON_AGREEMENT,
								i.GF_PORTAL_LOGIN].indexOf(s) >= 0
								&& (n.linkText = this.contact.isGroup()
										? n.linkText
										: this._handleHtmlText(s), n.msgType = "html"), s === i.TYPE_TEXT
								&& (n.content.text = n.content.text.replace(
										/(\\n\\r)|(\\r\\n)|(\\n)|(<br \/>)/g,
										"<br />")), s === i.TYPE_ACCOUNT
								&& (this.openAccountTitledesc = "31001" === this.manager.department
										? "广发证券（香港）预约开户"
										: "邀请开户"), this.liClass = [i.TYPE_TEXT,
								i.TYPE_DICTIONARY, i.TYPE_RECOMMEND,
								i.TYPE_IMAGE].indexOf(s) >= 0 ? this.isManager
								? "manager-chatli"
								: "client-chatli" : [i.TYPE_PRODUCT,
								i.TYPE_ACCOUNT, i.TYPE_INVITE_RATING]
								.indexOf(s) >= 0
								? "manager-chatli"
								: s === i.TYPE_TRANSFER
										? "transfer-chatli"
										: "time-chatli", this.fromName = t.user.name, this.headImgUrl = this.contact.type === this.Contact.TYPE_SYSTEM
								? this.isMe
										? t.user.avatar
										: "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/system_9b7e9a5dcc.png"
								: this.isMe
										? t.user.avatar
										: "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/client-default_42bec44ee3.png", s === i.TYPE_DICTIONARY
								&& n.content.url && (n.type = i.TYPE_RECOMMEND);
						var a = t.messages[t.messageIndex - 1];
						this.showTimespan = 0 === t.messageIndex || a
								&& n.timestamp - a.timestamp > o
					}
				}, {
					key : "_handleEvaluationText",
					value : function(e) {
						if (!e)
							return "";
						var t = /@#(.*?)#@/gi, n = "<a class='system-link'>", i = "</a>", s = e
								.replace(t, function(e) {
											return e.replace(/@#/, n).replace(
													/#@$/, i)
										});
						return this.$sce.trustAsHtml(s)
					}
				}, {
					key : "_handleHtmlText",
					value : function(e) {
						var t = "", n = this.Message;
						return e === n.NON_SIGNIN
								? t = "<br />点此 邀请客户登录>>"
								: e === n.NON_AGREEMENT
										? t = "<br />点此 邀请客户签署风险揭示书>>"
										: e === n.GF_PORTAL_LOGIN
												&& (t = "点此前往>>"), this.$sce
								.trustAsHtml(t)
					}
				}, {
					key : "_handleStyles",
					value : function() {
						var e = this.$scope.message;
						this.outerClass = e.type === this.Message.TYPE_TRANSFER
								? "transfer-chatli-in"
								: [this.Message.TYPE_SYSTEM,
										this.Message.TYPE_RATING,
										this.Message.TYPE_TELEPHONE]
										.indexOf(e.type) >= 0
										? "time-chatli"
										: {
											arrow : !e.isGroup(),
											"arrow-group" : e.isGroup()
										}, this.chatImg = this.isManager
								? this.manager.inService
										&& "on_line" === this.manager.login_status
										? "manager-chatimg inService"
										: "manager-chatimg"
								: "client-chatimg", this.chatName = !this.isManager
								|| this.manager.inService
								&& "on_line" === this.manager.login_status
								? ""
								: "notInService", this.chatMsg = this.isManager
								? "manager-chatliin"
								: "client-chatliin", this.isSystemMsg = [
								this.Message.TYPE_TEXT,
								this.Message.TYPE_RATING,
								this.Message.TYPE_SYSTEM].indexOf(e.type) >= 0
								? !0
								: !1, this.showMsg = [this.Message.TYPE_SYSTEM,
								this.Message.TYPE_RATING,
								this.Message.TYPE_TELEPHONE,
								this.Message.TYPE_TRANSFER,
								this.Message.NON_SIGNIN,
								this.Message.NON_AGREEMENT,
								this.Message.DISQUALIFIED,
								this.Message.GF_PORTAL_LOGIN].indexOf(e.type) < 0
								? !0
								: !1
					}
				}, {
					key : "onTapRecommendMessage",
					value : function(e, t) {
						var n = this.chatPluginManager;
						t.content.type === this.Message.TYPE_DICTIONARY
								&& (e.preventDefault(), n._emit(
										n.EVENT_PLUGIN_TAPPED, {
											id : "gf.key.plugin.chat.dictionary",
											message : t,
											type : "tapRecommendMessage"
										}))
					}
				}]), e
			}();
			t["default"] = r, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e) {
				return e && e.__esModule ? e : {
					"default" : e
				}
			}
			function s(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function a(e, t) {
				if ("function" != typeof t && null !== t)
					throw new TypeError("Super expression must either be null or a function, not "
							+ typeof t);
				e.prototype = Object.create(t && t.prototype, {
							constructor : {
								value : e,
								enumerable : !1,
								writable : !0,
								configurable : !0
							}
						}), t
						&& (Object.setPrototypeOf
								? Object.setPrototypeOf(e, t)
								: e.__proto__ = t)
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var o = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), r = function(e, t, n) {
				for (var i = !0; i;) {
					var s = e, a = t, o = n;
					r = l = c = void 0, i = !1, null === s
							&& (s = Function.prototype);
					var r = Object.getOwnPropertyDescriptor(s, a);
					if (void 0 !== r) {
						if ("value" in r)
							return r.value;
						var c = r.get;
						return void 0 === c ? void 0 : c.call(o)
					}
					var l = Object.getPrototypeOf(s);
					if (null === l)
						return void 0;
					e = l, t = a, n = o, i = !0
				}
			}, c = n(69), l = n(80), u = i(l), d = function(e) {
				function t(e, n, i, a, o, l, u, d, p, f, g, h, v, m) {
					"ngInject";
					s(this, t), r(Object.getPrototypeOf(t.prototype),
							"constructor", this).apply(this, arguments), c
							.resolveInject(t, arguments, this), this.showLoading = !0, this.showFail = !1, this.showThumbnail = !1;
					var y = n.message.getThumbUrl(), _ = m
							? "http://clickeggsdev-10081362.file.myqcloud.com"
							: "http://clickeggsdist-10081362.file.myqcloud.com";
					this.realLink = y.replace(
							"https://s3.cn-north-1.amazonaws.com.cn", _), this.previewImageSrc = n.message.content.link
							.replace("https://s3.cn-north-1.amazonaws.com.cn",
									_), this.bigImageShow = !1
				}
				return a(t, e), t.$inject = ["$log", "$scope",
						"managerService", "Message", "Contact",
						"chatUserService", "managerRecentContactService",
						"$sce", "chatPluginService", "chatPluginManager",
						"modelFactory", "parrotService",
						"managerSensorReportService", "devMode"], o(t, [{
					key : "showPreviewModal",
					value : function() {
						var e = new Image;
						e.src = this.$scope.message.content.link;
						var t = document.documentElement.clientWidth;
						this.clientHeight = document.documentElement.clientHeight;
						var n = document.documentElement.clientHeight;
						this.bgMask = {
							height : n + "px",
							"line-height" : n + "px"
						}, this.imgContent = {
							height : n + "px",
							"overflow-y" : "scroll"
						};
						var i = this;
						e.onload = function() {
							i.zoomImageWidth = this.width > t ? {
								width : "100%"
							} : {
								width : i.originImageWidth + "px"
							}
						}, document.body.style.overflowY = "hidden", this.bigImageShow = !0
					}
				}, {
					key : "closePreviewModal",
					value : function() {
						document.body.style.overflowY = "scroll", this.bigImageShow = !1
					}
				}]), t
			}(u["default"]);
			t["default"] = d, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = n(69), o = function() {
				function e(t, n, s, o, r, c, l, u) {
					"ngInject";
					i(this, e), a.resolveInject(e, arguments, this), this.pushRepeatHolder = {}, this.isFocus = !0, this
							.checkWindowTabFocus(), this._subscribeEvents()
				}
				return e.$inject = ["$log", "$scope", "$timeout",
						"parrotService", "notificationService",
						"chatUserService", "managerRecentContactService",
						"notificationPushService"], s(e, [{
							key : "checkWindowTabFocus",
							value : function() {
								var e = this;
								window.onbeforeunload = function() {
									e.notificationService.clearNotification()
								}
							}
						}, {
							key : "_subscribeEvents",
							value : function() {
								var e = this, t = this.parrotService, n = this.managerRecentContactService, i = this.notificationPushService, s = [];
								s.push(i.listen(i.EVENT_DATA_READY, function() {
											e.checked = {
												sound : i.hasSoundEnabled(),
												vibrate : i.hasVibrateEnabled()
											}
										})), s.push(t.subscribe(
										t.EVENT_CHAT_NOTIFICATION, function(n,
												i) {
											_.each(i, function(n) {
												if (n && n.content) {
													if (e.pushRepeatHolder[n.id])
														return;
													e.pushRepeatHolder[n.id] = !0, e.chatUserService
															.getUserInfo(n.from)
															.then(function(i) {
																n.groupId
																		? t
																				.getGroupInfo(
																						{
																							groupId : n.groupId
																						})
																				.then(
																						function(
																								t) {
																							var s = t.data.groupInfo.groupName;
																							e
																									._createNotification(
																											i.name
																													+ "("
																													+ s
																													+ ")",
																											n
																													.getText())
																						},
																						function(
																								t) {
																							e.$log
																									.debug("getGroupInfo fail"
																											+ JSON
																													.stringify(t))
																						})
																		: n.content.tags
																				&& n.content.tags
																						.indexOf("dirty") >= 0
																				|| e
																						._createNotification(
																								i.name,
																								n
																										.getText())
															})
												}
											})
										})), s.push(t.subscribe(
										t.EVENT_GROUP_NOTIFICATION, function(t,
												n, i) {
											e.pushRepeatHolder[i.id]
													|| (e.pushRepeatHolder[i.id] = !0, e
															._createNotification(
																	n,
																	i.content.text))
										})), s.push(t.subscribe(
										t.EVENT_LEAVE_GROUP, function(t, n) {
											e._showLeaveGroupTip(n)
										})), s.push(t.subscribe(
										t.EVENT_JOIN_GROUP, function(t, n) {
											e._showJoinGroupTip(n)
										})), s.push(n.listen(n.EVENT_ANY,
										function() {
											e.$timeout(function() {
														e.showUnread()
													})
										})), s.push(t.subscribe(
										t.CONST_EVENT_PREFIX
												+ "openaccount-restore-noti",
										function(t, n) {
											_.each(n, function(t) {
												e.chatUserService
														.getUserInfo(t.content.pnsId)
														.then(function(n) {
															var i = n.id
																	|| n.name;
															"recommend_no_change" === t.content.type
																	? e
																			._createNotification(
																					"金钥匙",
																					i
																							+ "客户已填写推荐人，将由推荐人继续服务；本单如满足开户流失挽回绩效条件，仍可获得奖励")
																	: "reject" === t.content.type
																			&& e
																					._createNotification(
																							"金钥匙",
																							i
																									+ "客户的开户审核被驳回，请查看具体原因并联系指导客户继续完成开户。")
														})
											})
										})), s.push(t.subscribe(
										t.CONST_EVENT_PREFIX
												+ "openaccount-manage-popup",
										function(t, n) {
											_.each(n, function(t) {
														e._createNotification(
																"金钥匙",
																t.content)
													})
										})), this.$scope.$on("$destroy",
										function() {
											s.forEach(function(e) {
														e()
													})
										})
							}
						}, {
							key : "showUnread",
							value : function() {
								var e = this.managerRecentContactService, t = e
										.getTotalUnread();
								document.title = t ? "金钥匙(" + t + ")" : "金钥匙"
							}
						}, {
							key : "_playAudioMedia",
							value : function() {
								var e = document
										.getElementById("notification-media");
								e.play()
							}
						}, {
							key : "_showJoinGroupTip",
							value : function(e) {
								var t = this, n = [];
								_.each(e, function(e) {
									t.pushRepeatHolder[e.id]
											|| (t.pushRepeatHolder[e.id] = !0, n
													.push(e.groupInfo.groupName), t
													._createNotification(
															n.join("、"),
															"您已被邀请加入群"
																	+ n
																			.join("、")))
								})
							}
						}, {
							key : "_showLeaveGroupTip",
							value : function(e) {
								var t = this, n = [];
								_.each(e, function(e) {
									t.pushRepeatHolder[e.id]
											|| (t.pushRepeatHolder[e.id] = !0, n
													.push(e.groupInfo.groupName), t
													._createNotification(
															n.join("、"),
															"您已被移出群: "
																	+ n
																			.join("、")))
								})
							}
						}, {
							key : "_createNotification",
							value : function(e, t) {
								document.hasFocus()
										|| (this.notificationPushService
												.hasVibrateEnabled()
												&& this.notificationService
														.createNotification(e,
																t), this.notificationPushService
												.hasSoundEnabled()
												&& this._playAudioMedia())
							}
						}]), e
			}();
			t["default"] = o, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = n(69), o = void 0, r = void 0, c = void 0, l = function() {
				function e(t, n, s, o, r, c, l, u, d, p, f, g, h, v, m, y, _) {
					"ngInject";
					i(this, e), a.resolveInject(e, arguments, this), this.oas = c, this.manager = l
							.getManager(), this.managerId = this.manager
							? this.manager.erpId
							: "", this.showLoading = !1, this.searchCencle = !1, this.openArrow = {
						openingAccount : !0,
						missingAccount : !0,
						commitAccount : !0
					}, this.query = "", this.currentTab = this.oas
							.getClientTab(), this.oas
							.setCurrentAccountInfo(null), this.selectedClient = this.oas
							.getCurrentAccountInfo(), this.accountInfoList = {}, this.jysOpenedAccountInfo = [], this.hasOpenedAccountInfo = !0, this.pageNum = 1, this.pageSize = 10, this.timer = null, this
							.resetContainerRightStatus(), this
							.getOpenAccountInfo(), this.loadOpenedAccountInfo(), this
							.getOriginSearchData(), this._subscribeEvents()
				}
				return e.$inject = ["$log", "$rootScope", "$scope", "$state",
						"$timeout", "openAccountService", "managerService",
						"$interval", "api", "timerService",
						"contactListService", "accountSearchService",
						"statusTipService", "deviceService", "parrotService",
						"$q", "Contact"], s(e, [{
					key : "resetContainerRightStatus",
					value : function() {
						this.showClientTradeInfo = !1, this.showAccountInfo = !1, this.showOpenAccountStep = !1, this.showClientInfo = !1, this.showBookingClient = !1
					}
				}, {
					key : "getOpenAccountInfo",
					value : function() {
						var e = this, t = this.$q.defer();
						return this.oas.getJysOpenAccountInfo(this.managerId)
								.then(function(n) {
									e.$log.debug("getJysOpenAccountInfo resp",
											n), e.accountInfoList = n, e
											.checkMissingMinutes(), e.$log
											.debug("this.accountInfoList",
													e.accountInfoList), t
											.resolve(!0)
								}, function(n) {
									e.$log.debug("getJysOpenAccountInfo error",
											n), t.reject(!1)
								}), t.promise
					}
				}, {
					key : "loadOpenedAccountInfo",
					value : function(e) {
						var t = this, n = e ? 1 : this.pageNum;
						this._showLoading(), this.oas.getJysOpenedAccountInfo(
								this.managerId, n, this.pageSize).then(
								function(n) {
									t._hideLoading(), e || t.pageNum++, (_
											.isEmpty(n) || n.length < t.pageSize)
											&& (t.hasOpenedAccountInfo = !1), t.accountInfoList = t.oas
											.getAccountInfo(), t.jysOpenedAccountInfo = t.accountInfoList[t.oas.typeMap.SUCCESS], t.$log
											.debug(
													"getJysOpenedAccountInfo this.jysOpenedAccountInfo",
													t.jysOpenedAccountInfo)
								}, function(e) {
									t._hideLoading(), t.$log.warn(
											"getJysOpenedAccountInfo fail", e)
								})
					}
				}, {
					key : "loadMoreForOpenedAccountInfo",
					value : function() {
						this.$log.debug("loadMoreForOpenedAccountInfo in.",
								this.pageNum), !this.showLoading
								&& this.hasOpenedAccountInfo
								&& this.loadOpenedAccountInfo()
					}
				}, {
					key : "getOpeningTabNum",
					value : function() {
						var e = this.oas.getTotalRedDot(), t = e.openingTabNum;
						return t
					}
				}, {
					key : "getOpenedTabNum",
					value : function() {
						var e = this.oas.getTotalRedDot(), t = e.openedTabNum;
						return t
					}
				}, {
					key : "getOriginSearchData",
					value : function() {
						var e = this.manager ? this.manager.id : "";
						o = this.contactListService.getContactList(e), r = this.contactListService
								.getBookList(e), c = this.contactListService
								.getConsultList(e)
					}
				}, {
					key : "doSearch",
					value : function() {
						if (this.$log.debug("doSearch query", this.query), this.noResult = !1, this.searchClients = [], this.accountInfoList = this.oas
								.getAccountInfo(), "" === this.query)
							return this.showclientSearchResult = !1, void(this.noResult = !0);
						var e = {
							openAccount : this.accountInfoList,
							contactLists : o,
							bookList : r,
							consultList : c
						};
						this.searchClients = this.accountSearchService
								.getSearchResult(this.query, e), 0 === this.searchClients.length
								&& (this.noResult = !0)
					}
				}, {
					key : "toggleSearchIcon",
					value : function() {
						if (this.searchCencle)
							this.query = "", this.searchClients = [];
						else {
							var e = document.getElementById("searchInput");
							e.focus()
						}
						this.searchCencle = !this.searchCencle
					}
				}, {
					key : "onInputFocus",
					value : function() {
						this.searchCencle = !0
					}
				}, {
					key : "toggleArrow",
					value : function(e) {
						this.openArrow[e] = !this.openArrow[e]
					}
				}, {
					key : "setCurrentTab",
					value : function(e) {
						this.resetContainerRightStatus(), this.oas
								.setCurrentAccountInfo(null), this.oas
								.setClientTab(e), this.currentTab = e, 0 === e
								? this.getOpenAccountInfo()
								: 1 === e && this.showOpenedTab()
					}
				}, {
					key : "showOpenedTab",
					value : function() {
						var e = !0;
						this.loadOpenedAccountInfo(e)
					}
				}, {
					key : "showSearchResult",
					value : function() {
						return this.query.length > 0
					}
				}, {
					key : "getArrowStatus",
					value : function(e) {
						return this.accountInfoList ? this.openArrow[e]
								&& this.accountInfoList[e]
								&& this.accountInfoList[e].length : !1
					}
				}, {
					key : "checkMissingMinutes",
					value : function() {
						var e = this;
						_.forEach(this.accountInfoList.missingAccount,
								function(t) {
									e._checkMissingMinutes(t)
								}), this.sortMissingAccount(), this.timer
								&& this.$interval.cancel(this.timer), this.timer = this
								.$interval(function() {
											_
													.forEach(
															e.accountInfoList.missingAccount,
															function(t) {
																e
																		._checkMissingMinutes(t)
															}), e
													.sortMissingAccount()
										}, 1e3)
					}
				}, {
					key : "sortMissingAccount",
					value : function() {
						var e = this, t = _.groupBy(
								this.accountInfoList.missingAccount,
								function(t) {
									return t.missingMinutes <= 0
											|| "altered" === t.currentStep
											? (t.showRedDot
													&& e.oas.resetRedDot(t), "missed")
											: "missing"
								});
						t.missing = t.missing || [], t.missed
								&& (this.accountInfoList.missingAccount = t.missing
										.concat(t.missed))
					}
				}, {
					key : "_checkMissingMinutes",
					value : function(e) {
						var t = e.beginTime.toDate().getTime(), n = this.timerService
								.getTime(), i = t + 126e5;
						e.missingMinutes = i - n, this.selectedClient = this.oas
								.getCurrentAccountInfo(), (e.missingMinutes <= 0 || "altered" === e.currentStep)
								&& this.selectedClient
								&& e._id === this.selectedClient._id
								&& this.resetContainerRightStatus()
					}
				}, {
					key : "_subscribeEvents",
					value : function() {
						var e = this, t = [], n = this.deviceService, i = this.parrotService;
						t.push(n.subscribe(n.NETWORK_ONLINE, function() {
							e.$log.debug("NETWORK_ONLINE openAccount update"), e
									.getOpenAccountInfo()
						})), t.push(i.subscribe(i.CONST_EVENT_PREFIX
										+ "openaccount-manage-noti", function(
										t, n) {
									_.each(n, function(t) {
												e.oas
														.updateAccountInfo(t.content)
											}), e.$timeout(function() {
										e.accountInfoList = e.oas
												.getAccountInfo(), e
												.checkMissingMinutes(), e.$log
												.debug(
														"openaccount-manage-noti accountInfoList",
														e.accountInfoList)
									})
								})), t.push(this.oas.listen(
								this.oas.EVENT_CURRENT_STEP, function() {
									e.updateSelectedClient()
								})), this.$scope.$on("$destroy", function() {
							t.forEach(function(e) {
										return e()
									}), e.oas.setCurrentAccountInfo(null), e.oas
									.uninitialize()
						})
					}
				}, {
					key : "updateSelectedClient",
					value : function() {
						var e = this;
						this.getOpenAccountInfo().then(function(t) {
							t
									&& (e.oas
											.setCurrentAccountInfo(e.selectedClient), e.selectedClient = e.oas
											.getCurrentAccountInfo())
						})
					}
				}, {
					key : "goAccountDetail",
					value : function(e) {
						var t = this;
						if (!(e.missingMinutes <= 0 || "altered" === e.currentStep))
							if (this.resetContainerRightStatus(), this.oas
									.resetRedDot(e), this.oas
									.setCurrentAccountInfo(e), this.selectedClient = this.oas
									.getCurrentAccountInfo(), e.tabType) {
								if (e.tabType == this.oas.typeMap.SUCCESS)
									return this.$timeout(function() {
										t.accountInfoList = t.oas
												.getAccountInfo(), t.jysOpenedAccountInfo = t.accountInfoList[t.oas.typeMap.SUCCESS]
									}), void this.showClientTradeInfoDetail();
								this.updateSelectedClient(), this
										.showAccountInfoDetail()
							} else
								this.goClientDetail(e)
					}
				}, {
					key : "showAccountInfoDetail",
					value : function() {
						this.showAccountInfo = !0
					}
				}, {
					key : "showClientTradeInfoDetail",
					value : function() {
						this.showClientTradeInfo = !0
					}
				}, {
					key : "goClientDetail",
					value : function(e) {
						"trade" === e.clientType
								? this.showClientTradeInfo = !0
								: e.messageType === this.Contact.TYPE_INFORMATION
										? this.showClientInfo = !0
										: e.messageType === this.Contact.TYPE_BOOKING
												&& (this.showBookingClient = !0)
					}
				}, {
					key : "_showLoading",
					value : function(e) {
						this.showLoading = !0, this.statusTipService.showTip({
									status : this.statusTipService.PROCESSING,
									message : e || "正在加载..."
								})
					}
				}, {
					key : "_hideLoading",
					value : function() {
						this.showLoading = !1, this.statusTipService.hideTip()
					}
				}]), e
			}();
			t["default"] = l, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), s = "ALERT", a = "PROCESSING", o = "SUCCESS", r = "FAIL", c = {
				ALERT : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/tips/fail_4e81df7f66.png",
				PROCESSING : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/tips/loading_47f6e3a972.png",
				SUCCESS : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/tips/suc_deb52b6198.png",
				FAIL : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/tips/fail_4e81df7f66.png"
			}, l = [
					'<div id="status-tip">',
					'<div class="back-drop hide"></div>',
					'<div class="modal mymodal hide">',
					'<div class="modal-dialog text-center font16"><img src=""/><span class="modal-dialog-tips"></span></div>',
					"</div>", "</div>"].join(""), u = function() {
				function e() {
					"ngInject";
					n(this, e);
					var t = angular.element, i = t(l);
					document.body.appendChild(i[0]), this.timeout = -1, this.$backdrop = t(_
							.find(i.find("div"), function(e) {
										return t(e).hasClass("back-drop")
									})), this.$modal = t(_.find(i.find("div"),
							function(e) {
								return t(e).hasClass("modal")
							})), this.$img = i.find("img"), this.$span = i
							.find("span")
				}
				return i(e, [{
					key : "showTip",
					value : function(e) {
						e.duration = e.duration || 2e3, clearTimeout(this.timeout);
						var t = c[e.status];
						e.backdrop
								? this.$backdrop.removeClass("hide")
								: this.$backdrop.addClass("hide"), this.$modal
								.removeClass("hide"), this.$img.attr("src", t), this.$span
								.html(e.message), e.duration > 0
								&& this.setHideTimeout(e.duration)
					}
				}, {
					key : "hideTip",
					value : function() {
						this.$modal.addClass("hide"), this.$backdrop
								.addClass("hide")
					}
				}, {
					key : "setHideTimeout",
					value : function(e) {
						var t = this;
						this.timeout = setTimeout(function() {
									t.hideTip()
								}, e)
					}
				}]), e
			}();
			u.prototype.PROCESSING = a, u.prototype.SUCCESS = o, u.prototype.FAIL = r, u.prototype.ALERT = s, t["default"] = u, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), s = '<div id="status-confirm">\n        <div class="back-drop hide"></div>\n        <div class="modal myconfirm hide" ng-class="{\'special\': special}">\n            <div class="modal-dialog text-center font16">\n                <span class="close" ng-click="onCancel($event)"></span>\n                <p class="message" ng-class="{tl: showNotRemind}"></p>\n                <p class="not-remind hide">\n                    <label>\n                        <input type="checkbox" ng-model="checkboxValue" ng-true-value="true" ng-false-value="false" />不再提示\n                    </label>\n                </p>\n                <div ng-class="{\'border-top\': special}">\n                    <button class="cancel" ng-hide="singleOk" ng-click="onCancel($event)"></button>\n                    <button class="ok" ng-click="onOk($event)"></button>\n                </div>\n            </div>\n        </div>\n    </div>', a = function() {
				function e(t, i, a) {
					"ngInject";
					var o = this;
					n(this, e), this.$timeout = a;
					var r = angular.element, c = i.$new(), l = r(s);
					t(l)(c), document.body.appendChild(l[0]), this.scope = c, c.checkboxValue = "false", c.onOk = function(
							e) {
						e.stopPropagation(), o.hideConfirm(), o.options.onOk
								&& o.options.onOk(), "true" === c.checkboxValue
								&& o.options.onSetNotRemind
								&& o.options.onSetNotRemind()
					}, c.onCancel = function(e) {
						e.stopPropagation(), o.hideConfirm(), o.options.onCancel
								&& o.options.onCancel()
					}, this.$backdrop = r(_.find(l.find("div"), function(e) {
								return r(e).hasClass("back-drop")
							})), this.$modal = r(_.find(l.find("div"),
							function(e) {
								return r(e).hasClass("modal")
							})), this.$remindP = r(_.find(l.find("p"),
							function(e) {
								return r(e).hasClass("not-remind")
							})), this.$p = r(_.find(l.find("p"), function(e) {
								return r(e).hasClass("message")
							})), this.$button = l.find("button"), this.options = {}
				}
				return e.$inject = ["$compile", "$rootScope", "$timeout"], i(e,
						[{
							key : "showConfirm",
							value : function(e) {
								var t = this;
								this.$p[0].innerHTML = e.message, this.$button[0].innerHTML = e.cancelBtn
										|| "取消", this.$button[1].innerHTML = e.okBtn
										|| "确定", this.scope.singleOk = e.singleOk, this.scope.showNotRemind = e.showNotRemind, this.scope.special = e.special, this.options.onOk = e.onOk, this.options.onCancel = e.onCancel, this.options.onSetNotRemind = e.onSetNotRemind, this
										.$timeout(function() {
											e.backdrop
													? t.$backdrop
															.removeClass("hide")
													: t.$backdrop
															.addClass("hide"), e.showNotRemind
													? t.$remindP
															.removeClass("hide")
													: t.$remindP
															.addClass("hide"), t.$modal
													.removeClass("hide")
										})
							}
						}, {
							key : "hideConfirm",
							value : function() {
								this.$modal.addClass("hide"), this.$backdrop
										.addClass("hide")
							}
						}]), e
			}();
			t["default"] = a, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];

						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), s = [
					'<div id="screen-shot">',
					'<div class="back-drop hide"></div>',
					'<div class="modal myshot hide">',
					'<div class="modal-dialog text-center font16">',
					'<h2 class="title">发送图片',
					'<span class="close" ng-click="onCancel($event)"></span>',
					"</h2>",
					'<div id="shot-wrap" class="shot-wrap"></div>',
					'<p class="error-tips hide"></p>',
					'<div class="button-wrap">',
					'<button class="cancel" ng-hide="singleOk" ng-click="onCancel($event)">取消</button>',
					'<button class="ok" ng-click="onOk($event)">发送</button>',
					"</div>", "</div>", "</div>", "</div>"].join(""), a = function() {
				function e(t, i, a) {
					"ngInject";
					var o = this;
					n(this, e), this.$timeout = a;
					var r = angular.element, c = i.$new(), l = r(s);
					t(l)(c), document.body.appendChild(l[0]), this.scope = c, c.onOk = function(
							e) {
						e.stopPropagation(), o.hideShot(), o.options.onOk
								&& o.options.onOk()
					}, c.onCancel = function(e) {
						e.stopPropagation(), o.hideShot(), o.options.onCancel
								&& o.options.onCancel()
					}, this.$backdrop = r(_.find(l.find("div"), function(e) {
								return r(e).hasClass("back-drop")
							})), this.$modal = r(_.find(l.find("div"),
							function(e) {
								return r(e).hasClass("modal")
							})), this.$p = l.find("p"), this.$button = l
							.find("button"), this.options = {}
				}
				return e.$inject = ["$compile", "$rootScope", "$timeout"], i(e,
						[{
							key : "showShot",
							value : function(e) {
								var t = this;
								e.message
										&& (this.$p.removeClass("hide"), this.$p
												.text(e.message), this.$button
												.eq(1).addClass("disabled")), this.options.message = e.message, this.options.onOk = e.onOk, this.options.onCancel = e.onCancel, this
										.$timeout(function() {
											t.$backdrop.removeClass("hide"), t.$modal
													.removeClass("hide")
										})
							}
						}, {
							key : "hideShot",
							value : function() {
								var e = document.getElementById("shot-wrap");
								e.innerHTML = "", this.$modal.addClass("hide"), this.$backdrop
										.addClass("hide")
							}
						}]), e
			}();
			t["default"] = a, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), s = [
					"尊敬的客户，感谢您选择在广发证券开户，为方便您顺利完成开户过程，我们将安排专属客户经理为您服务，请留意接听广发证券官方号码95575或020-95575来电。",
					"尊敬的客户，我们关注到您尚未完成广发证券账户开户，为方便您顺利完成开户，我们将安排专属客户经理协助您进一步操作，请留意接听广发证券官方号码95575或020-95575来电。",
					"尊敬的客户，我们关注到您在广发证券的开户尚未顺利完成，将安排客户经理进一步协助，请留意接听广发证券官方号码95575或020-95575来电。",
					"尊敬的客户，我们关注到您在广发证券的开户未能顺利完成，将安排客户经理进一步协助，请留意接听广发证券官方号码95575或020-95575来电。"], a = [
					'<div id="message-template">',
					'<div class="back-drop hide"></div>',
					'<div class="modal template hide">',
					'<div class="modal-dialog text-center font16">',
					'<ul class="message">',
					'<li ng-repeat="msg in messages" ng-class="{cur: msg === selectedMessage}" ng-click="onSelectMessage(msg)">{{msg}}</li>',
					"</ul>",
					"<div>",
					'<button class="ok" ng-click="onOk()">发送</button>',
					'<button class="cancel" ng-click="onCancel($event)">取消</button>',
					"</div>", "</div>", "</div>", "</div>"].join(""), o = function() {
				function e(t, i, o, r, c, l) {
					"ngInject";
					var u = this;
					n(this, e), this.$timeout = o;
					var d = i.$new();
					d.selectedMessage = null, d.messages = s;
					var p = angular.element, f = p(a), g = l;
					t(f)(d), document.body.appendChild(f[0]), d.onOk = function() {
						if (!d.selectedMessage)
							return void g.showTip({
										status : g.ALERT,
										message : "请选择短信内容",
										duration : 3e3
									});
						g.showTip({
									status : g.PROCESSING,
									message : "发送中...",
									duration : 3e3
								});
						var e = r.getManager();
						c.sendSmsMessage(c.getCurrentUserId(),
								d.selectedMessage, e.erpId).then(function() {
									g.showTip({
												status : g.SUCCESS,
												message : "发送成功",
												duration : 3e3
											}), c.updateOpenAccountInfo(), d
											.onCancel()
								}, function(e) {
									g.showTip({
												status : g.FAIL,
												message : "发送失败,"
														+ e.data.message,
												duration : 3e3
											}), d.onCancel()
								})
					}, d.onCancel = function() {
						u.hideTemplate()
					}, d.onSelectMessage = function(e) {
						d.selectedMessage = e
					}, this.$backdrop = p(_.find(f.find("div"), function(e) {
								return p(e).hasClass("back-drop")
							})), this.$modal = p(_.find(f.find("div"),
							function(e) {
								return p(e).hasClass("modal")
							}))
				}
				return e.$inject = ["$compile", "$rootScope", "$timeout",
						"managerService", "openAccountService",
						"statusTipService"], i(e, [{
							key : "showTemplate",
							value : function() {
								var e = this;
								this.$timeout(function() {
											e.$backdrop.removeClass("hide"), e.$modal
													.removeClass("hide")
										})
							}
						}, {
							key : "hideTemplate",
							value : function() {
								this.$modal.addClass("hide"), this.$backdrop
										.addClass("hide")
							}
						}]), e
			}();
			t["default"] = o, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					var n = [], i = !0, s = !1, a = void 0;
					try {
						for (var o, r = e[Symbol.iterator](); !(i = (o = r
								.next()).done)
								&& (n.push(o.value), !t || n.length !== t); i = !0);
					} catch (c) {
						s = !0, a = c
					} finally {
						try {
							!i && r["return"] && r["return"]()
						} finally {
							if (s)
								throw a
						}
					}
					return n
				}
				return function(t, n) {
					if (Array.isArray(t))
						return t;
					if (Symbol.iterator in Object(t))
						return e(t, n);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}
			}(), a = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), o = n(69), r = [{
				id : "gf.key.plugin.chat.quickReply",
				name : "常用语",
				iconClass : "comments",
				iconImage : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/mes-hover_3bcbddd9f0.png",
				iconHoverClass : "comments-hover"
			}, {
				id : "gf.key.plugin.chat.orderTransfer",
				name : "订单转让",
				iconClass : "remes",
				iconImage : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/re-hover_054f882d21.png",
				iconHoverClass : "remes-hover"
			}, {
				id : "gf.key.plugin.chat.inviteLogin",
				name : "证券账户登录",
				iconClass : "invite-login",
				iconImage : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/invite-login_b686b81253.png"
			}, {
				id : "gf.key.plugin.chat.inviteOpenAccount",
				name : "邀请开户",
				iconClass : "open",
				iconImage : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/openAccount_5c80844540.png"
			}, {
				id : "gf.key.plugin.chat.riskAgreement",
				name : "风险揭示书签署",
				iconClass : "risk-agreement",
				iconImage : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/risk-agreement_98034a7f00.png"
			}, {
				id : "gf.key.plugin.chat.dictionary",
				name : "知识库",
				iconClass : "dictionary"
			}, {
				id : "gf.key.plugin.chat.businessService",
				name : "业务办理",
				iconClass : "business",
				iconImage : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/business-service.png"
			}, {
				id : "gf.key.plugin.chat.investmentAdviserSign",
				name : "投顾服务",
				iconClass : "icon-invest-adviser-sign",
				iconImage : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/investment-adviser.png"
			}, {
				id : "gf.key.plugin.chat.GFAppRecommend",
				name : "易淘金推荐",
				iconClass : "icon-gfzq-app",
				iconImage : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/gfzq-app_a15c5d97a7.png"
			}, {
				id : "gf.key.plugin.chat.robot",
				name : "贝塔牛",
				iconClass : "icon-robot",
				iconImage : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/robot_a7e6dad3cf.png"
			}, {
				id : "gf.key.plugin.chat.inviteRating",
				name : "邀请评价",
				iconClass : "invite-rating",
				iconImage : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/invite-rating_f1294b75c9.png"
			}, {
				id : "gf.key.plugin.chat.licaiApp",
				name : "广发理财",
				iconClass : "licai-app",
				iconImage : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/licai-app_649359f02a.png"
			}, {
				id : "gf.key.plugin.chat.uploadImg",
				name : "发送图片",
				iconClass : "upload-img",
				iconImage : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/upload-img-hover_32046cdd1c.png"
			}, {
				id : "gf.key.plugin.chat.increaseCash",
				name : "现金增利",
				iconClass : "increase-cash",
				iconImage : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/increase-cash_9935a36837.png"
			}, {
				id : "gf.key.plugin.chat.weiShop",
				name : "网店推荐",
				iconClass : "wei-shop",
				iconImage : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/wei-shop_7f93d6dee0.png"
			}], c = ["gf.key.plugin.chat.orderTransfer",
					"gf.key.plugin.chat.inviteOpenAccount",
					"gf.key.plugin.chat.inviteLogin",
					"gf.key.plugin.chat.riskAgreement",
					"gf.key.plugin.chat.dictionary",
					"gf.key.plugin.chat.inviteRating"], l = ["gf.key.plugin.chat.inviteOpenAccount"], u = ["gf.key.plugin.chat.investmentAdviserSign"], d = ["gf.key.plugin.chat.weiShop"], p = [
					"gf.key.plugin.chat.quickReply",
					"gf.key.plugin.chat.orderTransfer",
					"gf.key.plugin.chat.inviteLogin",
					"gf.key.plugin.chat.riskAgreement",
					"gf.key.plugin.chat.uploadImg"], f = function() {
				function e(t, n, s, a, c, l, u, d, p, f, g, h, v, m, y, _, S,
						I, T, b, k, E, C, w, O, P, A, M) {
					"ngInject";
					i(this, e), o.resolveInject(e, arguments, this), this.ls = m, this._plugins = r, this.weiShopUrl = null, this.isSignRiskAgreement = {}, this
							._subscribeEvents(), this._restore()
				}
				return e.$inject = ["$log", "$rootScope", "$q", "api",
						"Contact", "Message", "User", "chatPluginManager",
						"managerService", "statusTipService",
						"managerRecentContactService", "messageService",
						"chatUserService", "localStorageService",
						"transferGroupService", "statusConfirmService",
						"quickCommentService", "dictionaryPluginUrl", "Order",
						"shopUrl", "$http", "rootUrl", "parrotService",
						"storeUrl", "robotUrl", "ChannelType", "increaseCash",
						"weiShopService"], a(e, [{
					key : "initialize",
					value : function() {
						var e = this;
						this._getWeiShop(), _.each(this._plugins, function(t) {
							t.context = e, t.onTap = e.onPluginItemTap, e.chatPluginManager
									.registerPlugin(t)
						})
					}
				}, {
					key : "uninitialize",
					value : function() {
						this.weiShopUrl = null, this.chatPluginManager
								.unregisterAll()
					}
				}, {
					key : "onPluginItemTap",
					value : function(e) {
						var t = this, n = this.managerRecentContactService
								.getSelectedContact();
						if (!n)
							return !1;
						if (e.isNew === !0
								&& (this.chatPluginManager.updatePlugin(e.id, {
											isNew : !1
										}), _.each(this._plugins, function(t) {
											return t.id === e.id
													? (t.isNew = !1, !1)
													: void 0
										}), this._persist()), -1 === p
								.indexOf(e.id)) {
							var i = function() {
								var i = t.$q.defer(), s = t.statusTipService;
								return t.parrotService.getRegInfo({
											regId : n.pnsId
										}).then(function(s) {
									var a = s.data.regInfo;
									a.clientType === t.User.TYPE_WECHAT_APP
											|| a.channel === t.ChannelType.WECHAT_APP
											? (t._showTipForWeChatAppUser(e.id,
													n), i.reject())
											: (t._handleClick(e.id), i
													.resolve())
								})["catch"](function(e) {
											s.showTip({
														status : s.FAIL,
														message : "获取客户信息失败"
													}), i.reject()
										}), {
									v : i.promise
								}
							}();
							if ("object" == typeof i)
								return i.v
						} else
							this._handleClick(e.id)
					}
				}, {
					key : "_showTipForWeChatAppUser",
					value : function(e, t) {
						var n = {
							"gf.key.plugin.chat.inviteRating" : "该客户来自微信小程序，暂不支持发送邀请评价"
						}, i = "该客户来自微信小程序，暂无法发送链接，请您直接回复客户的问题。", s = n[e] || i, a = this.statusTipService;
						a.showTip({
									status : a.ALERT,
									message : s
								})
					}
				}, {
					key : "_handleClick",
					value : function(e) {
						switch (e) {
							case "gf.key.plugin.chat.orderTransfer" :
								this._onClickTransfer();
								break;
							case "gf.key.plugin.chat.inviteOpenAccount" :
								this._onDoOpenAccount();
								break;
							case "gf.key.plugin.chat.quickReply" :
								this._onClickQuickComment();
								break;
							case "gf.key.plugin.chat.uploadImg" :
								break;
							case "gf.key.plugin.chat.riskAgreement" :
								this.onSignRiskAgreement();
								break;
							case "gf.key.plugin.chat.inviteLogin" :
								this.onInviteLogin();
								break;
							case "gf.key.plugin.chat.inviteRating" :
								this.onInviteRating();
								break;
							case "gf.key.plugin.chat.licaiApp" :
								this.onLicaiApp();
								break;
							case "gf.key.plugin.chat.investmentAdviserSign" :
								this._onInvestmentAdviserSign();
								break;
							case "gf.key.plugin.chat.GFAppRecommend" :
								this._onGFAppRecommend();
								break;
							case "gf.key.plugin.chat.robot" :
								this._onRobot();
								break;
							case "gf.key.plugin.chat.increaseCash" :
								this._onIncreaseCash();
								break;
							case "gf.key.plugin.chat.weiShop" :
								this._onWeiShop()
						}
					}
				}, {
					key : "_subscribeEvents",
					value : function() {
						var e = this, t = this.managerRecentContactService, n = this.chatPluginManager;
						t.listen(t.EVENT_SELECTED, function() {
							var i = t.getSelectedContact(), s = e.managerService
									.getManager(), a = [];
							if (i) {
								if (i.type === e.Contact.TYPE_GROUP)
									return a = "1" !== s.tgzg
											|| 1 === i.groupType
											? c.concat(u)
											: c, e.weiShopUrl
											|| (a = a.concat(d)), void n
											.toggleVisible(a, !1);
								"1" !== s.tgzg && (a = a.concat(u)), i.orderType === e.Order.TYPE_OPEN_ACCOUNT
										&& (a = a.concat(l)), e.weiShopUrl
										|| (a = a.concat(d)), n.toggleVisible(
										a, !1)
							}
						})
					}
				}, {
					key : "_persist",
					value : function() {
						try {
							var e = this.managerService.getManager(), t = _
									.reduce(this._plugins, function(e, t) {
												return e[t.id] = _.pick(t,
														"isNew"), e
											}, {});
							this.ls.set("chat.plugin." + e.pnsId, t)
						} catch (n) {
							this.$log
									.warn("chatPluginManager _persist fail", n)
						}
					}
				}, {
					key : "_restore",
					value : function() {
						try {
							var e = this.managerService.getManager(), t = this.ls
									.get("chat.plugin." + e.pnsId);
							t && _.each(this._plugins, function(e) {
										_.assign(e, t[e.id])
									})
						} catch (n) {
							this.$log
									.warn("chatPluginManager _restore fail", n)
						}
					}
				}, {
					key : "_onClickTransfer",
					value : function() {
						var e = this;
						if (!this.transferGroupService.isShow) {
							var t = this.statusTipService, n = this.api, i = this.$q;
							this.selectedContact = this.managerRecentContactService
									.getSelectedContact(), t.showTip({
										status : t.PROCESSING,
										message : "正在获取转单信息..."
									}), i
									.all([n("canOrderTransfer", {
												data : {
													client_id : this.selectedContact.id
												}
											}), n("findTransferTargets")])
									.then(function(n) {
										var i = s(n, 2), a = i[0], o = i[1], r = a.data.data, c = r.flag;
										0 === c
												? (t.hideTip(), e.transferGroupService
														.uninitialize(), e.transferGroupService
														.initialize(o.data.data))
												: t.showTip({
													status : t.FAIL,
													message : 1 === c
															? "同个客户一天内只能转单一次"
															: 2 === c
																	? "客户被转单2次已经晕了"
																	: "订单转让中，请及时留意转让结果"
												})
									}, function(t) {
										e.$log.warn("onClickTransfer", t)
									})
						}
					}
				}, {
					key : "onDoTransfer",
					value : function(e) {
						var t = this, n = this.selectedContact;
						this.chatUserService.getUserInfo(n.pnsId).then(
								function(i) {
									t.api("transferOrder", {
										data : {
											clientPnsId : n.pnsId,
											client_id : n.id,
											client_type : i.type,
											managerPnsId : t.managerService
													.getManager().pnsId,
											question : e.text,
											request_type : n.orderType,
											target : e.userIds
										}
									}).then(function() {
												t.transferGroupService
														.clearSelect()
											}, function(e) {
												t.$log.warn("onDoTransfer", e)
											})
								}, function(e) {
									t.$log.warn("getUserInfo", e)
								})
					}
				}, {
					key : "_onDoOpenAccount",
					value : function() {
						var e = this, t = this.managerRecentContactService
								.getSelectedContact(), n = this.managerService
								.getManager(), i = n.recommendQuanlified, s = "您将向客户发送开户邀请，客户开户成功后，将自动关联您的开发关系。", a = "您尚未考取证券从业资格证，客户开户成功后，无法关联您的开发关系。", o = "true" == i
								? s
								: a, r = "true" == i ? "确定" : "继续邀请";
						this.statusConfirmService.showConfirm({
							message : o,
							okBtn : r,
							backdrop : !0,
							onOk : function() {
								t.isGroup() ? e._getClientByGroupId(t.pnsId)
										.then(function(t) {
													e
															._inviteOpenAccount(t.pnsId)
												}, function() {
													e.utils
															.showTips("邀请开户失败, 请重试")
												})
										: e._inviteOpenAccount(t.pnsId)
							}
						})
					}
				}, {
					key : "_inviteOpenAccount",
					value : function(e) {
						var t = this, n = this.managerService.getManager(), i = this.managerRecentContactService
								.getSelectedContact(), s = void 0, a = void 0;
						"31001" === n.department
								? (a = "广发证券（香港）预约开户", s = "广发证券（香港）" + n.name
										+ "诚邀您在线预约开户，快捷方便。")
								: (a = "邀请开户", s = "广发证券" + n.name
										+ "诚邀您使用手机掌上开户，方便快捷~"), this.api(
								"inviteOpenAccount", {
									fragments : {
										clientPnsId : e
									}
								}).then(function(e) {
									t.messageService.sendMessage(i, {
												title : a,
												desc : s,
												url : e.data.data.url
											}, t.Message.TYPE_ACCOUNT)
								}, function(e) {
									t.$log.warn("onDoOpenAccount", e)
								})
					}
				}, {
					key : "onInviteLogin",
					value : function() {
						var e = this, t = this.managerRecentContactService
								.getSelectedContact(), n = this.managerService
								.getManager();
						t.id && 12 === t.id.length ? this.api(
								"getCustomerInfo", {
									fragments : {
										managerPnsId : n.pnsId,
										clientId : t.id
									}
								}).then(function(n) {
							e.$log.debug(n);
							var i = n.data.data;
							return _.isEmpty(i)
									? void e._doInviteLogin(t)
									: void e.statusConfirmService.showConfirm({
												message : "该客户已登录",
												okBtn : "确定",
												backdrop : !0,
												singleOk : !0
											})
						}, function(t) {
							e.$log.debug("getCustomerInfo fail"
									+ JSON.stringify(t))
						}) : this._doInviteLogin(t)
					}
				}, {
					key : "_doInviteLogin",
					value : function(e) {
						var t = this;
						this.statusConfirmService.showConfirm({
							message : "您将向客户发出登录邀请，请指导客户完成。",
							okBtn : "确定",
							backdrop : !0,
							onOk : function() {
								t.api("inviteOpenAccount", {
											fragments : {
												clientPnsId : e.pnsId
											}
										}).then(function(n) {
									t.messageService.sendMessage(e, {
										type : "invite-login",
										icon : "https://cdn.gf.com.cn/clickeggs/common/assets/icon/invite-login-60x60.png",
										name : "证券账户登录",
										desc : "尊敬的客户，按监管要求，需要您登录广发证券账户后，才能接受投资咨询相关服务。",
										registerUrl : n.data.data.url
									}, t.Message.TYPE_RECOMMEND)
								}, function(e) {
									t.$log.warn("inviteOpenAccount", e)
								})
							}
						})
					}
				}, {
					key : "onInviteRating",
					value : function() {
						var e = this.managerRecentContactService
								.getSelectedContact();
						this.messageService.sendMessage(e, {
							name : "服务评价",
							desc : "尊敬的客户，邀请您对我的服务进行评价",
							icon : "https://cdn.gf.com.cn/clickeggs/common/assets/icon/invite-rating-60x60.png"
						}, this.Message.TYPE_INVITE_RATING)
					}
				}, {
					key : "onLicaiApp",
					value : function() {
						var e = this, t = this.managerService.getManager(), n = this.managerRecentContactService
								.getSelectedContact(), i = "https://store.gf.com.cn/portal/financingapp", s = "https://store.gf.com.cn/app-invest-web/?_gfsrc=branch___&rcmderid="
								+ t.erpId + "#/webend-promotion";
						this.statusConfirmService.showConfirm({
							message : "您将向客户推荐下载广发理财APP，请指导客户完成安装",
							okBtn : "确定",
							backdrop : !0,
							onOk : function() {
								e.messageService.sendMessage(n, {
									type : "licai-app",
									name : "广发理财",
									desc : "收益加速，快人一步",
									icon : "https://cdn.gf.com.cn/clickeggs/common/assets/icon/licai-app-60x60.png",
									url : {
										webUrl : i,
										mobileUrl : s
									}
								}, e.Message.TYPE_RECOMMEND)
							}
						})
					}
				}, {
					key : "onSignRiskAgreement",
					value : function() {
						var e = this, t = this.managerRecentContactService
								.getSelectedContact(), n = this.managerService
								.getManager(), i = "您将向客户发出《广发证券有问必答投资咨询服务风险揭示书》的签署邀请，请指导客户完成。", s = "确定";
						return "yes" === this.isSignRiskAgreement[t.pnsId]
								? void this.statusConfirmService.showConfirm({
											message : " 客户已签署风险协议",
											okBtn : s,
											backdrop : !0,
											singleOk : !0
										})
								: void this.api("getCustomerInfo", {
											fragments : {
												managerPnsId : n.pnsId,
												clientId : t.id
											}
										}).then(function(n) {
									e.$log.debug(n);
									var a = n.data.data;
									return _.isEmpty(a)
											? void e.statusConfirmService
													.showConfirm({
														message : "该客户未登录，请先发邀请登录，客户登录时可同时签署协议",
														okBtn : s,
														backdrop : !0,
														singleOk : !0
													})
											: "yes" === a.isSignContract
													? (e.statusConfirmService
															.showConfirm({
																message : " 客户已签署风险协议",
																okBtn : s,
																backdrop : !0,
																singleOk : !0
															}), void(e.isSignRiskAgreement[t.pnsId] = "yes"))
													: void e.statusConfirmService
															.showConfirm({
																message : i,
																okBtn : s,
																backdrop : !0,
																onOk : function() {
																	e.messageService
																			.sendMessage(
																					t,
																					{
																						type : "sign-agreement",
																						icon : "https://cdn.gf.com.cn/clickeggs/common/assets/icon/risk-agreement-60x60.png",
																						name : "风险揭示书签署",
																						desc : "尊敬的客户，按监管要求，需要您阅读并签署《风险揭示书》后，才能接受投资咨询相关服务。"
																					},
																					e.Message.TYPE_RECOMMEND)
																}
															})
								}, function(t) {
									e.$log.debug("getCustomerInfo fail"
											+ JSON.stringify(t))
								})
					}
				}, {
					key : "_onClickQuickComment",
					value : function() {
						if (!this.quickCommentService.isShow) {
							var e = this.managerService.getManager(), t = this.statusTipService;
							t.showTip({
										status : t.PROCESSING,
										message : "正在获取常用语..."
									}), this.quickCommentService.initialize(e)
						}
					}
				}, {
					key : "_onInvestmentAdviserSign",
					value : function() {
						var e = this, t = this.managerService.getManager();
						this.shopId = null, this.weiShopService
								.getWeiShop(t.id).then(function(t) {
									t
											? (e.shopId = t.id, e
													._beforeSendInvestmentAdviser())
											: e.statusConfirmService
													.showConfirm({
														message : "你还没有淘店铺，不能发送投顾服务",
														okBtn : "确定",
														backdrop : !0,
														singleOk : !0
													})
								})
					}
				}, {
					key : "_beforeSendInvestmentAdviser",
					value : function() {
						var e = this, t = this.managerRecentContactService
								.getSelectedContact(), n = t.id;
						t.isGroup() ? this._getClientByGroupId(t.pnsId).then(
								function(t) {
									e._checkIsTradeUser(t.id)
								}, function(t) {
									e.$log.debug("getUserInfo fail"
											+ JSON.stringify(t))
								}) : this._checkIsTradeUser(n)
					}
				}, {
					key : "_checkIsTradeUser",
					value : function(e) {
						var t = this, n = this.managerService.getManager();
						e && 12 === e.length ? this.api("getCustomerInfo", {
									fragments : {
										managerPnsId : n.pnsId,
										clientId : e
									}
								}).then(function(n) {
							var i = n.data.data;
							_.isEmpty(i)
									? t
											._sendInvestmentAdviserService("no-trade-login")
									: t._checkIsSignContract(e)
						}, function() {
							t.$log.warn("获取客户信息失败...")
						})
								: this
										._sendInvestmentAdviserService("no-trade-login")
					}
				}, {
					key : "_checkIsSignContract",
					value : function(e) {
						var t = this;
						this.$log.debug("该客户已经登录交易账户"), this.api(
								"getAdviserContract", {
									fragments : {
										clientId : e
									}
								}).then(function(e) {
							t
									._sendInvestmentAdviserService(e.data.data.isSignContract
											? "signed-contract"
											: "no-sign-contract")
						}, function() {
							t.$log.warn("获取客户是否签署投顾协议失败...")
						})
					}
				}, {
					key : "_sendInvestmentAdviserService",
					value : function(e) {
						var t = this, n = this.managerService.getManager(), i = this.managerRecentContactService
								.getSelectedContact(), s = this.shopId, a = this.rootUrl
								+ "/im/desktop/?channel=gfweidian", o = this.rootUrl
								+ "/im/mobile/?channel=gfweidian&addmanager="
								+ n.id, r = this.shopUrl
								+ "/#/invest-advertise/" + s
								+ "?from=jys&redirectUrl=", c = {
							"no-trade-login" : "您将向客户推荐投顾服务，当前客户未签署投顾协议，请引导客户完成签约",
							"no-sign-contract" : "您将向客户推荐投顾服务，当前客户未签署投顾协议，请引导客户完成签约",
							"signed-contract" : "您将向客户推荐投顾服务，当前客户已签署投顾协议，请引导客户查询相关信息"
						};
						return "no-trade-login" === e
								? void this.statusConfirmService.showConfirm({
											message : "该客户未登录，请先发邀请登录",
											okBtn : "确定",
											backdrop : !0,
											singleOk : !0
										})
								: void this.statusConfirmService.showConfirm({
									message : c[e],
									okBtn : "确定",
									backdrop : !0,
									onOk : function() {
										t.messageService.sendMessage(i, {
											type : "adviser-service",
											name : "投顾服务",
											desc : n.name
													+ "邀请您签署投顾服务，签署后可获得一对一投顾咨询服务",
											icon : "https://cdn.gf.com.cn/clickeggs/common/assets/icon/investment-adviser-60x60.png",
											url : {
												webUrl : "" + r
														+ encodeURIComponent(a),
												mobileUrl : "" + r
														+ encodeURIComponent(o)
											}
										}, t.Message.TYPE_RECOMMEND)
									}
								})
					}
				}, {
					key : "_onGFAppRecommend",
					value : function() {
						var e = this, t = this.managerService.getManager(), n = this.managerRecentContactService
								.getSelectedContact();
						this.statusConfirmService.showConfirm({
							message : "您将向客户推荐下载易淘金APP，请指导客户完成安装后，进入易淘金APP使用有问必答。",
							okBtn : "确定",
							backdrop : !0,
							onOk : function() {
								e.messageService.sendMessage(n, {
									type : "gfzq-app",
									icon : "https://cdn.gf.com.cn/clickeggs/common/assets/icon/gfzq-app120.png",
									name : "广发证券易淘金",
									desc : "顾问式投资理财app，理财更专业",
									url : e.storeUrl
											+ "/mobile/other/ytjapp?userid="
											+ t.erpId
								}, e.Message.TYPE_RECOMMEND)
							}
						})
					}
				}, {
					key : "_onRobot",
					value : function() {
						var e = this, t = this.managerService.getManager(), n = this.managerRecentContactService
								.getSelectedContact();
						this.statusConfirmService.showConfirm({
							message : "您将向客户推荐贝塔牛，请指引客户操作。",
							okBtn : "确定",
							backdrop : !0,
							onOk : function() {
								e.messageService.sendMessage(n, {
									type : "robot",
									icon : "https://cdn.gf.com.cn/clickeggs/common/assets/icon/robot-60x60.png",
									name : "贝塔牛",
									desc : "广发机器人投顾，大数据荐股，兼顾仓位及择时",
									url : e.robotUrl
											+ "/#/handler?channelParam=link_user_"
											+ t.erpId + "_jys&channel=jys"
								}, e.Message.TYPE_RECOMMEND)
							}
						})
					}
				}, {
					key : "_onIncreaseCash",
					value : function() {
						var e = this, t = this.managerRecentContactService
								.getSelectedContact();
						this.statusConfirmService.showConfirm({
							message : "是否发送现金增利？",
							okBtn : "确定",
							backdrop : !0,
							onOk : function() {
								e.messageService.sendMessage(t, {
									type : "increase-cash",
									name : "现金增利",
									desc : "投资时刻不断，收益分秒必争",
									icon : "https://cdn.gf.com.cn/clickeggs/common/assets/icon/increase-cash-120x120.png",
									url : e.increaseCash
											+ "/mobile/cash/increasecash?from=jys"
								}, e.Message.TYPE_RECOMMEND)
							}
						})
					}
				}, {
					key : "_onWeiShop",
					value : function() {
						var e = this, t = this.managerRecentContactService
								.getSelectedContact();
						this.statusConfirmService.showConfirm({
							message : "是否发送网店推荐？",
							okBtn : "确定",
							backdrop : !0,
							onOk : function() {
								e.messageService.sendMessage(t, {
									type : "adviser-service",
									name : "网店推荐",
									desc : "热点资讯、精选组合、人气产品，每日新鲜速递……",
									icon : "https://cdn.gf.com.cn/clickeggs/common/assets/icon/wei-shop-60x60.png",
									url : e.weiShopUrl
								}, e.Message.TYPE_RECOMMEND)
							}
						})
					}
				}, {
					key : "_getWeiShop",
					value : function() {
						var e = this, t = this.managerService.getManager();
						this.weiShopService.getWeiShop(t.id).then(function(t) {
							t
									&& (e.weiShopUrl = e.shopUrl + "/#/shop/"
											+ t.id + "?from=bida")
						})
					}
				}, {
					key : "_getClientByGroupId",
					value : function(e) {
						var t = this, n = this.$q.defer(), i = null;
						return this.parrotService.getGroupInfo({
									groupId : e
								}).then(function(e) {
							var s = e.data, a = s.groupInfo.members;
							t.chatUserService.getUserInfo(a).then(function(e) {
								e.forEach(function(e) {
											_.isObject(e) && "jys" !== e.type
													&& (i = e)
										}), n.resolve(i)
							}, function(e) {
								t.$log.debug("getUserInfo fail"
										+ JSON.stringify(e)), n.reject(e)
							})
						}, function(e) {
							t.$log.debug("getGroupInfo fail"
									+ JSON.stringify(e)), n.reject(e)
						}), n.promise
					}
				}]), e
			}();
			t["default"] = f, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e) {
				return e && e.__esModule ? e : {
					"default" : e
				}
			}
			function s(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function a(e, t) {
				if ("function" != typeof t && null !== t)
					throw new TypeError("Super expression must either be null or a function, not "
							+ typeof t);
				e.prototype = Object.create(t && t.prototype, {
							constructor : {
								value : e,
								enumerable : !1,
								writable : !0,
								configurable : !0
							}
						}), t
						&& (Object.setPrototypeOf
								? Object.setPrototypeOf(e, t)
								: e.__proto__ = t)
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var o = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), r = function(e, t, n) {
				for (var i = !0; i;) {
					var s = e, a = t, o = n;
					r = l = c = void 0, i = !1, null === s
							&& (s = Function.prototype);
					var r = Object.getOwnPropertyDescriptor(s, a);
					if (void 0 !== r) {
						if ("value" in r)
							return r.value;
						var c = r.get;
						return void 0 === c ? void 0 : c.call(o)
					}
					var l = Object.getPrototypeOf(s);
					if (null === l)
						return void 0;
					e = l, t = a, n = o, i = !0
				}
			}, c = n(69), l = n(90), u = i(l), d = function(e) {
				function t(e, n, i, a, o, l, u, d, p, f, g, h, v, m, y, _, S,
						I, T, b, k) {
					"ngInject";
					s(this, t), r(Object.getPrototypeOf(t.prototype),
							"constructor", this).apply(this, arguments), c
							.resolveInject(t, arguments, this), this.initDefer = a
							.defer()
				}
				return a(t, e), t.$inject = ["$log", "$rootScope", "$state",
						"$q", "appId", "api", "parrotService",
						"managerService", "httpCacheService", "Manager",
						"modelFactory", "managerRecentContactService",
						"orderService", "messageService",
						"transferGroupService", "quickCommentService", "User",
						"deviceService", "starLevelService",
						"chatPluginService", "notificationPushService"], o(t, [
						{
							key : "initialize",
							value : function(e, n, i) {
								var s = this, a = this.$q.defer();
								return this.isInit ? a.resolve() : r(
										Object.getPrototypeOf(t.prototype),
										"initialize", this).call(this, e, n, i)
										.then(function() {
											var e = s.managerService
													.getManager();
											s.chatPluginService.initialize(), s.starLevelService
													.initialize(e), s
													._initSystemSetting(e), s.initDefer
													.resolve(e), a.resolve()
										}, function(e) {
											return a.reject(e)
										}), a.promise
							}
						}, {
							key : "isInitialized",
							value : function() {
								return this.initDefer.promise
							}
						}, {
							key : "uninitialize",
							value : function(e) {
								return this.initDefer = this.$q.defer(), this.chatPluginService
										.uninitialize(), e
										|| this.notificationPushService
												.uninitialize(), r(
										Object.getPrototypeOf(t.prototype),
										"uninitialize", this).call(this)
							}
						}, {
							key : "_initSystemSetting",
							value : function(e) {
								var t = this;
								this.parrotService.getPrivateData().then(
										function(n) {
											t.notificationPushService
													.initialize(e,
															n.data.privateData)
										}, function(e) {
											return t.$log
													.warn(
															"What a crap, cannot getPrivateData.",
															e)
										})
							}
						}]), t
			}(u["default"]);
			t["default"] = d, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = n(18), o = function() {
				function e(t, n, s, o, r, c, l, u, d, p, f, g, h, v, m, y, _,
						S, I) {
					"ngInject";
					i(this, e), a.resolveInject(e, arguments, this), this.appVersion = null, this.appType = null, this.isInit = !1
				}
				return e.$inject = ["$log", "$rootScope", "$state", "$q",
						"appId", "api", "parrotService", "managerService",
						"httpCacheService", "Manager", "modelFactory",
						"managerRecentContactService", "orderService",
						"messageService", "transferGroupService",
						"quickCommentService", "User", "deviceService",
						"starLevelService"], s(e, [{
					key : "initialize",
					value : function(e, t, n) {
						var i = this;
						this.$log.debug("MainService initialize"), this.appVersion = e, this.appType = t;
						var s = this.$q.defer();
						return this.isInit ? s.resolve() : this.managerService
								.initialize(n).then(function(e) {
									i._addParrotRegId(e).then(function() {
												i.api("getOrders", {
															data : {
																uid : e.id,
																managerPnsId : e.pnsId
															}
														})
											}), i.managerRecentContactService
											.initialize(e), i.messageService
											.initialize(
													e,
													i.managerRecentContactService), i.$log
											.debug("MainService initialize end"), i.isInit = !0, s
											.resolve()
								}, function(e) {
									s.reject(e)
								}), s.promise
					}
				}, {
					key : "uninitialize",
					value : function() {
						this.$log.debug("MainService uninitialize");
						var e = this.$q.defer();
						return this.orderService.uninitialize(), this.managerService
								.uninitialize(), this.quickCommentService
								.uninitialize(), this.managerRecentContactService
								.uninitialize(), this.transferGroupService
								.uninitialize(), this.starLevelService
								.uninitialize(), this.httpCacheService.clear(), this.parrotService
								.clear(), this.isInit = !1, this.$log
								.debug("MainService uninitialize end"), e
								.resolve(), e.promise
					}
				}, {
					key : "_addParrotRegId",
					value : function(e) {
						var t = this;
						return this.parrotService.addRegId({
									appId : this.appId,
									regId : e.pnsId,
									token : e.token
								}).then(function(n) {
							var i = n.data;
							t.$log.debug(
									"connectParrotServer ok and regId added",
									e.pnsId), t.parrotService.setRegInfo({
								uid : e.id,
								source : t.appType,
								regName : e.name,
								version : t.appVersion,
								isExpert : e.isExpert || "0",
								disableRiskWarning : e.qualification === t.Manager.QUALIFICATION_CONSULTANT,
								qualification : t.Manager.QUALIFICATION_CONSULTANT,
								role : "manager",
								clientType : t.User.TYPE_JYS
							}), t.managerRecentContactService
									.syncRecentContacts(i.recentContacts)
						})
					}
				}]), e
			}();
			t["default"] = o, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = n(69), o = function() {
				function e(t, n, s) {
					"ngInject";
					i(this, e), a.resolveInject(e, arguments, this), this.currentNotification = [], this.config = {
						total : 3,
						title : "金钥匙",
						icon : "https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/notification_8293d81725.png",
						charLength : 37
					}
				}
				return e.$inject = ["$log", "$rootScope", "$state"], s(e, [{
					key : "spawnNotification",
					value : function(e, t) {
						var n = null;
						return window.Notification ? n = new Notification(e, {
									icon : this.config.icon,
									body : this.msgSlice(t)
								}) : window.webkitNotifications
								&& (n = window.webkitNotifications
										.createNotification(this.config.icon,
												e, this.msgSlice(t)), n.show()), n
					}
				}, {
					key : "msgSlice",
					value : function(e) {
						for (var t = e.length, n = "", i = 0, s = 0; t > s; s++)
							if (i += e.charCodeAt(s) <= 128 ? 1 : 2, i >= this.config.charLength) {
								n = e.slice(0, s), t - 1 > s && (n += "…");
								break
							}
						return n || e
					}
				}, {
					key : "isSupported",
					value : function() {
						var e = !1;
						try {
							e = !(!window.Notification && !window.webkitNotifications)
						} catch (t) {
							this.$log.debug(
									"NotificationService.isSupport error: ", t)
						}
						return e
					}
				}, {
					key : "clearNotification",
					value : function() {
						for (; this.currentNotification.length;)
							this.currentNotification.shift().close()
					}
				}, {
					key : "createNotification",
					value : function(e, t) {
						var n = this;
						if (!this.isSupported())
							return void this.$log
									.debug("This browser does not support desktop notification");
						if (this.permissionLevel() === this.PERMISSION_DENIED
								|| this.permissionLevel() === this.PERMISSION_DEFAULT)
							return void this.requestPermission(function() {
										n.$log.debug(
												"Get the user permission!!", n
														.permissionLevel())
									});
						this.currentNotification.length >= this.config.total
								&& this.currentNotification.shift().close();
						var i = null, s = null;
						return e = e || this.config.title, this
								.permissionLevel() === this.PERMISSION_GRANTED
								&& (_.isString(t) ? i = this.spawnNotification(
										e, t) : _.isObject(t)
										&& (i = this.spawnNotification(e,
												t.title)), s = this
										.closeNotification(i), this.currentNotification
										.push(s)), i.onclick = function() {
							window.focus(), _.each(n.currentNotification,
									function(e) {
										e.close()
									})
						}, i
					}
				}, {
					key : "permissionLevel",
					value : function() {
						var e = this.PERMISSION_DEFAULT;
						return Notification && Notification.permissionLevel
								? e = Notification.permissionLevel()
								: Notification && Notification.permission
										? e = Notification.permission
										: webkitNotifications
												&& webkitNotifications.checkPermission
												&& (e = webkitNotifications
														.checkPermission()), e
					}
				}, {
					key : "requestPermission",
					value : function(e) {
						var t = _.isFunction(e) ? e : angular.noop;
						Notification.requestPermission
								? Notification.requestPermission(t)
								: webkitNotifications.checkPermission
										&& webkitNotifications
												.requestPermission(t)
					}
				}, {
					key : "closeNotification",
					value : function(e) {
						return {
							close : function() {
								e.close ? e.close() : e.cancel()
							}
						}
					}
				}]), e
			}();
			o.prototype.PERMISSION_DEFAULT = "default", o.prototype.PERMISSION_GRANTED = "granted", o.prototype.PERMISSION_DENIED = "denied", t["default"] = o, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = n(69), o = function() {
				function e(t, n, s, o, r, c, l, u, d, p, f, g) {
					"ngInject";
					i(this, e), a.resolveInject(e, arguments, this)
				}
				return e.$inject = ["$log", "$rootScope", "$q", "api", "User",
						"modelFactory", "$state",
						"managerRecentContactService", "statusTipService",
						"openAccountService", "Contact", "messageService"], s(
						e, [{
							key : "chatToClient",
							value : function(e, t) {
								var n = this;
								this._currentInfo = e;
								var i = this.managerRecentContactService, s = void 0;
								this.selectedClient = this.openAccountService
										.getCurrentAccountInfo(), this.statusTipService
										.showTip({
											status : this.statusTipService.PROCESSING,
											message : "正在加载..."
										}), this.$q.when(!0).then(function() {
									return n.selectedClient
											&& n._currentInfo.clientId
											? n._currentInfo.clientId
											: n
													.api(
															"getOpenAccountClientMobile",
															{
																fragments : {
																	clientId : n._currentInfo._id
																}
															})
								}).then(function(e) {
									var t = void 0, i = void 0;
									return n.selectedClient
											&& n.selectedClient.tabType === n.openAccountService.typeMap.SUCCESS
											|| "trade" === n.selectedClient.clientType
											? (t = e, i = n.User.TYPE_TRADE)
											: (t = e.data.data, i = n.User.TYPE_OPEN_ACCOUNT), n
											.api("getPnsId", {
														data : {
															channelType : "others",
															client_type : i,
															client_id : t
														}
													})
								}).then(function(e) {
									var a = e.data.data.pnsID;
									if (s = i.getContactByPnsId(a))
										throw i.updateContact(s, {
											name : n._currentInfo.name
													|| e.data.data.clientName,
											clientType : e.data.data.clientType,
											id : e.data.data.clientId,
											type : n.Contact.TYPE_CLIENT
										}), t
												&& n.messageService
														.sendMessage(s, {
																	text : t
																}), i
												.selectContact(s), n.$state
												.go("main.contact"), new Error("you-got-shit");
									return n.api("getUserInfoByPnsId", {
												fragments : {
													pnsIds : e.data.data.pnsID
												}
											})
								}).then(function(e) {
									var a = e.data.data;
									if (!a || !a.clientPnsId)
										throw new Error("没有此联系人");
									n._currentInfo.name
											&& (a.clientName = n._currentInfo.name, a.type = n.Contact.TYPE_CLIENT), s = i
											.addContact(n.modelFactory
													.createContactFromPayload(a)), t
											&& n.messageService.sendMessage(s,
													{
														text : t
													}), i.selectContact(s), n.$state
											.go("main.contact")
								})["catch"](function(e) {
									if ("you-got-shit" !== e.message) {
										var t = e.data && e.data.message
												? e.data.message
												: "";
										n.$log.warn("chatToClient", e), n.statusTipService
												.showTip({
													status : n.statusTipService.ALERT,
													message : "联系失败, 请稍后再试 "
															+ t
												}, 2e3)
									}
								})["finally"](function() {
											return n.statusTipService.hideTip()
										})
							}
						}]), e
			}();
			t["default"] = o, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = n(69), o = function() {
				function e(t, n, s, o, r, c, l, u, d) {
					"ngInject";
					i(this, e), a.resolveInject(e, arguments, this)
				}
				return e.$inject = ["$log", "$rootScope", "$q", "api",
						"$state", "managerService", "statusTipService",
						"statusConfirmService", "$timeout"], s(e, [{
					key : "sendCall",
					value : function(e) {
						var t = this, n = this.$q.defer(), i = this.managerService
								.getManager(), s = i.mobile
								+ " 请确认您的电话号码无误，系统将给您和客户连接通话。如号码变动，请到ERP系统修改（隔天生效）。", a = "确定", o = this.statusTipService;
						return this.statusConfirmService.showConfirm({
									message : s,
									okBtn : a,
									backdrop : !0,
									onOk : function() {
										o.showTip({
													status : o.PROCESSING,
													message : "电话请求中...",
													duration : 2e4
												}), t.tipsTimeout = t.$timeout(
												function() {
													o.showTip({
																status : o.FAIL,
																message : "电话请求超时,请重试"
															})
												}, 2e4), t._doCall(e,
												(new Date).getTime()).then(
												function(e) {
													n.resolve(e)
												}, function(e) {
													n.reject(e)
												})
									}
								}), n.promise
					}
				}, {
					key : "_doCall",
					value : function(e, t) {
						var n = this, i = this.$q.defer(), s = this.managerService
								.getManager(), a = {
							manager_id : s.id,
							manager_pnsid : s.pnsId,
							order_type : e.orderType || "item_type_information",
							client_pnsid : e.clientPnsId || "",
							client_id : e.clientId
						};
						return e._id && (a.info_id = e._id), e.orderId
								&& (a.order_id = e.orderId), this.api(
								"callFromClient", {
									data : a
								}).then(function(e) {
							n._handleCallResult("电话请求成功，请留意接听020-95575的电话回拨。",
									t), i.resolve(e)
						}, function(e) {
							n.$log.warn("_sendPhoneNumber", e);
							var s = e.data.message || "电话拨打失败，请重新拨打。";
							n._handleCallResult(s, t), i.reject(e)
						}), i.promise
					}
				}, {
					key : "_handleCallResult",
					value : function(e, t) {
						var n = (new Date).getTime(), i = this.statusTipService;
						i.hideTip(), new Date(n - t).getSeconds() < 20
								&& (this.$timeout.cancel(this.tipsTimeout), this.statusConfirmService
										.showConfirm({
													message : e,
													okBtn : "确定",
													singleOk : !0,
													backdrop : !0
												}))
					}
				}]), e
			}();
			t["default"] = o, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = n(69), o = function() {
				function e(t, n, s, o, r, c) {
					"ngInject";
					i(this, e), a.resolveInject(e, arguments, this);
					var l = r.getAuthInfo();
					this.username = l ? l.id : "", this.password = "", this.captcha = "", this.checkAgree = !0, this.tipUsername = "", this.tipPassword = "", this.tipCaptcha = "", this.showQrCode = !1, this.captchaUrl = c
							+ "/kaptcha.jpg", this.refreshCaptcha()
				}
				return e.$inject = ["$log", "$scope", "$state",
						"UtilFunctions", "authorizeService", "rootUrl"], s(e, [
						{
							key : "focusInput",
							value : function(e) {
								this[e] = ""
							}
						}, {
							key : "clearInput",
							value : function(e) {
								this[e] = ""
							}
						}, {
							key : "inputKeyDown",
							value : function(e) {
								e && 13 === e.keyCode && this.userLogin()
							}
						}, {
							key : "refreshCaptcha",
							value : function() {
								this.captcha = "", this.captchaUrl = a
										.addRandomParamToUrl(this.captchaUrl)
							}
						}, {
							key : "userLogin",
							value : function() {
								var e = this;
								return "" === this.username
										? void(this.tipUsername = "* 请输入账号")
										: "" === this.password
												? void(this.tipPassword = "* 请输入密码")
												: "" === this.captcha
														? void(this.tipCaptcha = "* 请输入验证码")
														: void this.authorizeService
																.login(
																		this.username
																				.toLowerCase(),
																		this.password,
																		this.captcha)
																.then(
																		function() {
																			e.$state
																					.go("main.order")
																		},
																		function(
																				t) {
																			e
																					.refreshCaptcha();
																			var n = t.data
																					&& t.data.error_description
																					? t.data.error_description
																					: "登录失败, 请重试";
																			e.tipCaptcha = n
																		})
							}
						}]), e
			}();
			t["default"] = o, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = n(69), o = null, r = function() {
				function e(t, n, s, r, c, l, u, d, p, f, g, h, v, m, y, _, S,
						I, T, b, k, E, C, w) {
					"ngInject";
					i(this, e), o = a.resolveInject(e, arguments), this.$state = s, this.manager = f
							.getManager()
							|| {}, this.showSetting = !1, this.showStarLevel = !1, this.showGuide = !1, this.totalUnread = m
							.getTotalUnread();
					var O = this.manager ? this.manager.id : "";
					C.initialize(O), this.hideMyExam(), this.firstLogin = !1, this
							._subscribeEvents()
				}
				return e.$inject = ["$rootScope", "$scope", "$state", "$q",
						"$log", "$timeout", "$http", "authorizeService",
						"webMainService", "managerService", "messageService",
						"appVersion", "parrotService",
						"managerRecentContactService", "statusTipService",
						"examCenter", "localStorageService", "deviceService",
						"quickCommentService", "msgPushRegisterService",
						"statusConfirmService", "starLevelService",
						"contactListService", "openAccountService"], s(e, [{
					key : "_subscribeEvents",
					value : function() {
						var e = this, t = o.parrotService, n = o.managerRecentContactService, i = o.starLevelService, s = [];
						s.push(o.managerService.listen(
								o.managerService.EVENT_USER_CHANGED,
								function() {
									return e._onManagerUpdated()
								})), s.push(n.listen(n.EVENT_ANY, function() {
									o.$timeout(function() {
												e.totalUnread = n
														.getTotalUnread()
											})
								})), s.push(t.subscribe(t.EVENT_CLEAN,
								function() {   // TODO 可能和抢订单相关
									e.onUserLogout(!0)
								})), t.subscribe(t.CONST_EVENT_PREFIX
										+ "orderUpdate", function(e, t) {
									var i = void 0;
									_.each(t, function(e) {
										i = e.content.orderId, n.updateContact(
												i, {
													orderState : e.content.orderState,
													type : "order"
												})
									})
								}), s.push(o.deviceService.subscribe(
								o.deviceService.NETWORK_ONLINE, function() {
									o.quickCommentService.syncUp()
								})), s.push(t.subscribe(t.EVENT_JOIN_GROUP,
								function(t, n) {
									e._showJoinGroupTip(n)
								})), s.push(t.subscribe(t.EVENT_LEAVE_GROUP,
								function(t, n) {
									e._showLeaveGroupTip(n)
								})), s.push(i.listen(i.EVENT_STATE_DATA_READY,
								function() {
									e.stateData = i.getStarLevelData(), e.firstLogin = e.stateData.firstlogin
								})), o.$scope.$on("$destroy", function() {
									s.forEach(function(e) {
												e()
											})
								})
					}
				}, {
					key : "_onManagerUpdated",
					value : function() {
						this.manager = o.managerService.getManager(), this.manager.pnsId
								&& o.msgPushRegisterService
										.login(this.manager.pnsId).then(
												function() {
												}, function(e) {
													o.$log
															.warn(
																	"msgPushRegisterService login fail",
																	e)
												})
					}
				}, {
					key : "_showJoinGroupTip",
					value : function(e) {
						var t = [], n = o.statusTipService;
						_.each(e, function(e) {
									t.push(e.groupInfo.groupName)
								}), n.showTip({
									status : n.ALERT,
									message : "您已被邀请加入群" + t.join("、")
								})
					}
				}, {
					key : "_showLeaveGroupTip",
					value : function(e) {
						var t = [];
						_.each(e, function(e) {
									t.push(e.groupInfo.groupName)
								}), alert("您已被移出群: " + t.join("、"))
					}
				}, {
					key : "goStarLevelGuide",
					value : function() {
						var e = this;
						o.$timeout(function() {
							e.firstLogin = !1, e.showStarLevel = !0, e.showGuide = !0
						})
					}
				}, {
					key : "closeWelcome",
					value : function() {
						this.firstLogin = !1
					}
				}, {
					key : "onUserLogout",
					value : function(e) {
						var t = o.statusTipService, n = !1;
						e
								|| (t.showTip({
											backdrop : !0,
											status : o.statusTipService.PROCESSING,
											message : "正在注销...",
											duration : 0
										}), this.manager.pnsId
										&& o.msgPushRegisterService
												.logout(this.manager.pnsId)
												.then(function() {
														}, function(e) {
															o.$log
																	.warn(
																			"msgPushRegisterService logout fail",
																			e)
														})), o.openAccountService
								.uninitialize(), o.authorizeService.logout(e), o.webMainService
								.uninitialize(e).then(function() {
											t.hideTip(), n = !0, o.$state
													.go("login")
										}), e
								&& (alert("您的账号在别的设备登录，导致您无法接收订单和推送消息，建议重新登录"), !n
										&& t.showTip({
											backdrop : !0,
											status : o.statusTipService.PROCESSING,
											message : "正在注销...",
											duration : 0
										}))
					}
				}, {
					key : "getOpenAccountRedDot",
					value : function() {
						var e = o.openAccountService.getTotalRedDot(), t = e.openingTabNum
								+ e.openedTabNum;
						return t
					}
				}, {
					key : "hideMyExam",
					value : function() {
						o.$rootScope.showMyExam = !1
					}
				}]), e
			}();
			t["default"] = r, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = n(69), o = null, r = function() {
				function e(t, n, s, r, c, l, u, d, p, f, g, h, v) {
					"ngInject";
					i(this, e), o = a.resolveInject(e, arguments), this.Order = l, this.allOrders = u
							.getAllOrders(), this.selectedOrder = u
							.getSelectedOrder(), this.manager = p.getManager(), this.isBCManager = p
							.isBCManager(), this.isExamBlack = p
							.isExamBlackUser(), this.inService = this.manager.inService, this.examCenter = h
							+ "/?clickeggsToken=" + v.getAuthInfo().token, this.showOptionGuide = !1, this
							.listenToOrder(), f.selectContact(null)
				}
				return e.$inject = ["$log", "$rootScope", "$scope", "$state",
						"$timeout", "Order", "orderService",
						"statusTipService", "managerService",
						"managerRecentContactService", "$sce", "examCenter",
						"authorizeService"], s(e, [{
					key : "listenToOrder",
					value : function() {
						var e = this, t = [], n = o.$scope, i = o.orderService, s = o.managerService;
						t.push(i.listen(i.EVENT_SELECTED, function() {
									e.selectedOrder = i.getSelectedOrder()
								})), t.push(i.listen(i.EVENT_ORDERS,
								function() {
									o.$timeout(function() {
												e.allOrders = i.getAllOrders()
											})
								})), t.push(s.listen(s.EVENT_USER_CHANGED,
								function() {
									o.$timeout(function() {
										e.isBCManager = s.isBCManager(), e.isExamBlack = s
												.isExamBlackUser(), e.inService = s
												.getManagerInService()
									})
								})), n.$on("$destroy", function() {
									t.forEach(function(e) {
												e()
											})
								})
					}
				}, {
					key : "onSelectOrder",
					value : function(e) {
						o.$rootScope.showMyExam
								&& (o.$rootScope.showMyExam = !1), this.showOptionGuide = !1, o.orderService
								.selectOrder(e), 1 === e.dispatchPersons
								&& this.onGrabOrder(e), "ask" === e.clientType
								&& o.$timeout(function() {
									var e = document
											.getElementById("order-detail-scroll");
									e.scrollTop = 0
								})
					}
				}, {
					key : "onGrabOrder",
					value : function(e) {
						var t = o.statusTipService, n = o.orderService;
						t.showTip({
									backdrop : !0,
									status : t.PROCESSING,
									message : "正在抢单...",
									duration : 3e3
								}), n.grabOrder(e).then(function() {
									t.showTip({
												status : t.SUCCESS,
												message : "抢单成功"
											}), o.$state.go("main.contact")
								}, function(e) {
									if (0 != e.status) {
										var n = e.data.message, i = 908 == e.data.status
												? '<span class="grab-failure">'
														+ n
														+ '</span><br/><span class="time-tips">抢单时间'
														+ e.data.data
														+ "秒</span>"
												: n;
										t.showTip({
													status : t.FAIL,
													message : n
															? i
															: e.statusText
												})
									}
								})
					}
				}, {
					key : "getOrderHeadImg",
					value : function(e) {
						var t = "", n = this.Order;
						switch (e.messageType) {
							case n.TYPE_BOOKING :
							case n.TYPE_RESTORE :
								t = "chat-booking";
								break;
							case n.TYPE_KNOWLEDGE :
							case n.TYPE_REPORT :
								t = "chat-ask";
								break;
							case n.TYPE_OPEN_ACCOUNT :
								t = "chat-open-account";
								break;
							case n.TYPE_OPTION :
								t = "chat-option"
						}
						return t
					}
				}, {
					key : "showOrderContent",
					value : function(e) {
						return e = this.htmldDecode(e), o.$sce.trustAsHtml(e)
					}
				}, {
					key : "htmldDecode",
					value : function(e) {
						var t = "";
						return 0 == e.length ? t : t = e.replace(/&amp;/g, "&")
								.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
								.replace(/&nbsp;/g, " ").replace(/&#39;/g, "'")
								.replace(/&quot;/g, '"').replace(/<br>/g, "\n")
					}
				}, {
					key : "goExamCenter",
					value : function() {
						o.$rootScope.showMyExam = !0
					}
				}]), e
			}();
			t["default"] = r, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function s(e, t) {
				var n = this;
				n.source = t, n.ruid = e, this.size = t.size || 0, this.type = t.type
						|| "application/octet-stream", this.uid = t.uid
						|| this.uid
			}
			function a(e, t) {
				var n = void 0, i = /\.([^.]+)$/;
				n = i.exec(t.name) ? RegExp.$1.toLowerCase() : "", this.name = t.name
						|| "screen-shot", this.size = t.size || 0, this.uid = t.uid, this.ext = n, this.lastModifiedDate = t.lastModifiedDate
						|| (new Date).toLocaleString(), this.type = t.type
						|| "application/octet-stream", s.apply(this, arguments)
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var o = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), r = n(69), c = 13, l = function() {
				function e(t, n, s, a, o, c, l, u, d, p, f, g, h, v, m, y, _,
						S, I, T, b, k, E, C, w, O, P, A, M, N, $, R, D, j, x, L) {
					"ngInject";
					var U = this;
					i(this, e), r.resolveInject(e, arguments, this), this.allContacts = p
							.getAllContacts(), this.selectedContact = p
							.getSelectedContact(), this.orderDetail = {}, this.manager = l
							.getManager(), this.inputMessage = "", this.charsLeft = this.charsMax = E.MAX_TEXT_LEN, this.tipsTimeout = null, this.showGroupInfo = !1, this.showClientInfo = !1, this.showAccountInfo = !1, this.showOpenAccountStep = !1, this.showQuestionnaire = !1, this.showOptionQuestionnaire = !1, this.showNoticeDetail = !1, this.bigImageShow = !1, this.showPluginContainer = !1, this.showClientTradeInfo = !1, this.clientInfo = {}, this.headerClass = "", this.showHeaderArrow = !1, this.showMoreTitle = !1, this.$chatList = document
							.getElementById("chat-list-scroll"), this.$chatRoom = document
							.getElementById("chat-room-scroll"), this.lastScrollHeight = 0, this.messageTag = "", this.isCloseAccount = !1, this.examCenterIcon = P
							+ "/wis18/?clickeggsToken=" + O.getAuthInfo().token, this
							.listenToContacts(), this.chatRoomScrollToBottom(), this
							.onSelectedContactUpdated(), this
							._showHeaderClientInfo(this.selectedContact), window
							.addEventListener("message", function(e) {
										U.handlePostMsg(e)
									}, !1), this.groupClientPnsId = "", this.selectedContact
							&& this.handleBlackClientTips(), this
							.setCountDownTime()
				}
				return e.$inject = ["$log", "$q", "$rootScope", "$scope",
						"$timeout", "Message", "managerService",
						"modelFactory", "dictionaryPluginUrl",
						"managerRecentContactService", "api", "Contact",
						"Order", "quickCommentService", "chatPluginManager",
						"transferGroupService", "timerService",
						"statusTipService", "statusConfirmService",
						"parrotService", "$sce", "chatUserService",
						"messageService", "debugService", "businessPluginUrl",
						"authorizeService", "examCenter", "screenShotService",
						"FileUploader", "FileItem", "appName",
						"uploadImgServer", "$interval", "typingNotification",
						"sendVirtualCallService", "$compile"], o(e, [{
					key : "listenToContacts",
					value : function() {
						var e = this, t = [], n = this.managerRecentContactService, i = this.parrotService, s = this.chatPluginManager, a = this.managerService, o = this.$scope;
						t.push(i.subscribe(i.EVENT_CHAT, function(t, n) {
									return e._onChat(n)
								})), t.push(s.listen(s.EVENT_PLUGIN_TAPPED,
								function(t, n) {
									if (_.isEmpty(n) || (e.showMoreTitle = !1), "gf.key.plugin.chat.businessService" === n.id)
										e.showPluginContainer = !e.showPluginContainer, e.pluginUrl = e.businessPluginUrl
												+ "?managerErpId="
												+ e.managerService.getManager().erpId;
									else if ("gf.key.plugin.chat.dictionary" === n.id) {
										if (e.showPluginContainer = !e.showPluginContainer, "tapRecommendMessage" === n.type) {
											var i = n.message.content.url;
											return i += -1 === i.search(/\?/)
													? "?from=jys_web"
													: "&from=jys_web", void(e.pluginUrl = i)
										}
										e.pluginUrl = e.dictionaryPluginUrl
												+ "/api/site/cookie?from=jys_web&token="
												+ e.authorizeService
														.getAuthInfo().token
												+ "&time="
												+ (new Date).getTime()
									}
								})), t.push(n.listen(n.EVENT_INIT_CONTACT,
								function() {
									e.onContactsUpdated()
								})), t.push(n.listen(n.EVENT_CONTACTS,
								function(t, n, i) {
									e.onContactsUpdated(i)
								})), t.push(n.listen(n.EVENT_MESSAGES,
								function(t, n, i) {
									e.onContactMessageUpdated(n, i)
								})), t.push(n.listen(n.EVENT_SELECTED,
								function() {
									e.onSelectedContactUpdated(), e
											.chatRoomScrollToBottom(), e
											._showHeaderClientInfo(e.selectedContact), e
											.handleBlackClientTips()
								})), t.push(a.listen(a.EVENT_USER_CHANGED,
								function() {
									return e.manager = a.getManager()
								})), t.push(i.subscribe(i.CONST_EVENT_PREFIX
										+ "openaccount-restore-noti", function(
										t, n) {
									e._openAccountRestoreNotify(n)
								})), t.push(i.subscribe(
								i.EVENT_TYPING_NOTIFICATION_ARRIVED, function(
										t, n) {
									e.selectedContact && _.each(n, function(t) {
										t.sourceRegId === e.selectedContact.pnsId
												&& (e.setContactName("对方正在输入"), e.notifyTime
														&& e.$timeout
																.cancel(e.notifyTime), e.notifyTime = e
														.$timeout(function() {
															e
																	.setContactName(e.selectedContact.name)
														}, 3500))
									})
								})), o.$on("$destroy", function() {
									e.setDraftMessage(), t.forEach(function(e) {
												return e()
											}), e.cancelCountDownTime()
								})
					}
				}, {
					key : "setContactName",
					value : function(e) {
						var t = this;
						this.$timeout(function() {
									t.contactName = e
								})
					}
				}, {
					key : "getContactName",
					value : function() {
						return this.contactName || this.selectedContact
								&& this.selectedContact.name
					}
				}, {
					key : "_openAccountRestoreNotify",
					value : function(e) {
						var t = this, n = this.managerRecentContactService;
						_.each(e, function(e) {
							var i = e.content.pnsId, s = n.getContactByPnsId(i);
							i
									&& (n.addNewMessages(t.modelFactory
													.createMessage({
																from : "",
																to : i,
																timestamp : (new Date)
																		.getTime()
															}), i), "recommend_no_change" === e.content.type
											&& (n.updateContact(s, {
														grabOrderTime : null,
														type : s.type
													}), t.setCountDownTime()))
						})
					}
				}, {
					key : "getContactStyle",
					value : function(e) {
						return e.isGroup() && e.avatar ? {
							background : "url(" + e.avatar + ") no-repeat",
							"background-size" : "100%"
						} : {}
					}
				}, {
					key : "onContactsUpdated",
					value : function(e) {
						var t = this.managerRecentContactService
								.getSelectedContact();
						this.allContacts = this.managerRecentContactService
								.getAllContacts(), this
								.onSelectedContactUpdated(), t
								&& t.orderType !== this.Order.TYPE_KNOWLEDGE
								&& t.orderType !== this.Order.TYPE_REPORT
								&& "add" === e && this.chatListScrollToTop(), this
								.setCountDownTime()
					}
				}, {
					key : "onContactMessageUpdated",
					value : function(e, t) {
						var n = this;
						return t ? void this.$timeout(function() {
									n.$chatRoom.scrollTop = n.$chatRoom.scrollHeight
											- n.lastScrollHeight - 50
								}, 100)
								: void(e === this.selectedContact && this
										.$timeout(function() {
													n.chatRoomScrollToBottom()
												}, 100))
					}
				}, {
					key : "onSelectedContactUpdated",
					value : function() {
						var e = this, t = this.messageService, n = this.selectedContact, i = this.selectedContact = this.managerRecentContactService
								.getSelectedContact();
						n !== i && this.transferGroupService.clearSelect(), i
								&& (n
										&& t.setMessageDraft(n,
												this.inputMessage), this.inputMessage = t
										.getMessageDraft(i), this.contactName = this.selectedContact.name, i.type !== this.Contact.TYPE_ORDER
										? this.orderDetail = null
										: (i.orderType === this.Contact.TYPE_KNOWLEDGE || "item_type_report" === i.orderType)
												&& this.api("getOrderDetail", {
															fragments : {
																orderId : i.orderId
															}
														}).then(function(t) {
													var n = t.data.data;
													n.timestamp = n.timestamp
															? n.timestamp
																	.toDate()
															: 0, e.orderDetail = e.modelFactory
															.createOrderFromPayload(n)
												}, function(t) {
													e.$log
															.debug(
																	"getOrderDetail error",
																	t), e.orderDetail = null
												}))
					}
				}, {
					key : "onSelectContact",
					value : function(e) {
						if (this.$rootScope.showMyExam
								&& (this.$rootScope.showMyExam = !1), !this.selectedContact
								|| !e || e.pnsId !== this.selectedContact.pnsId) {
							void 0 !== e.groupType
									&& (e.groupType = parseInt(e.groupType));
							var t = this.managerRecentContactService;
							return t.selectContact(e), e.messages.length <= 1
									&& t
											.hasMoreHistoryMessages(this.selectedContact)
									&& t
											.loadMoreHistoryMessages(this.selectedContact), this
									.chatRoomScrollToBottom(), this.showGroupInfo = this.showClientInfo = this.showAccountInfo = this.showOpenAccountStep = this.showQuestionnaire = this.showClientTradeInfo = !1, this.showNoticeDetail = !1, this.showMoreTitle = !1, this.showOptionQuestionnaire = !1, this.isCloseAccount = !1, e.type === this.Contact.TYPE_SYSTEM
									? void(this.showHeaderArrow = !1)
									: void 0
						}
					}
				}, {
					key : "handleBlackClientTips",
					value : function() {
						var e = this;
						if (this.selectedContact) {
							var t = 0 === this.selectedContact.groupType
									? this.groupClientPnsId
									: this.selectedContact.pnsId;
							t && this.api("getBlackClientInfo", {
										fragments : {
											clientPnsId : t
										}
									}).then(function(t) {
								e.$log.debug("getBlackClientInfo succ", t);
								var n = _.isEmpty(t.data.data) ? "no" : "yes";
								e.managerRecentContactService.updateContact(
										e.selectedContact, {
											isBlackList : n
										}), e.selectedContact = e.managerRecentContactService
										.getSelectedContact(), e.managerRecentContactService
										.addBlackClientTips(e.selectedContact)
							}, function(t) {
								e.$log.warn("getBlackClientInfo fail", t)
							})
						}
					}
				}, {
					key : "isShowContactDetail",
					value : function() {
						var e = this.selectedContact, t = this.Contact, n = void 0;
						if (e)
							return this.monitorName = e.orderType === t.TYPE_ACCOUNT
									? "开户咨询客户资料"
									: e.isGroup() ? 0 === e.groupType
											? "讨论组资料"
											: "群资料" : "普通咨询客户资料", n = e
									.isGroup()
									|| e.orderType === t.TYPE_ACCOUNT
									|| !e.isGroup() && e.type !== t.TYPE_SYSTEM
					}
				}, {
					key : "goContactDetail",
					value : function() {
						var e = this, t = this.contact, n = this.Contact, i = this.managerService
								.getManager();
						t.type === n.TYPE_CLIENT || t.type === n.TYPE_USER
								? t.id && 12 === t.id.length ? this.api(
										"getCustomerInfo", {
											fragments : {
												managerPnsId : i.pnsId,
												clientId : t.id
											}
										}).then(function(t) {
									var n = t.data.data;
									_.isEmpty(n)
											? e.showClientInfo = !0
											: (n.isBlackList = e.contact.isBlackList, e.showClientTradeInfo = !0, e.tradeInfo = n)
								}, function() {
									e.$log.warn("获取客户信息失败...")
								})
										: this._goContactDetail(t)
								: t.type === n.TYPE_ACCOUNT
										? this.showAccountInfo = !0
										: t.type === n.TYPE_GROUP
												&& (this.showGroupInfo = !0)
					}
				}, {
					key : "_goContactDetail",
					value : function(e) {
						var t = this.Order;
						e.orderType === t.TYPE_OPEN_ACCOUNT
								? this.showAccountInfo = !0
								: this.showClientInfo = !0
					}
				}, {
					key : "onTextInput",
					value : function() {
						var e = this.inputMessage.length, t = this.messageService.MAX_TEXT_LEN;
						this.charsLeft = t - e, this.typingNotification
								.sendTypingNotificationEvent(
										this.selectedContact, this.inputMessage)
					}
				}, {
					key : "onKeyDownInput",
					value : function(e) {
						e.keyCode !== c || e.metaKey || e.ctrlKey || e.altKey
								|| e.shiftKey
								|| (e.preventDefault(), this.onClickSend())
					}
				}, {
					key : "onClickSend",
					value : function(e, t) {
						var n = this, i = this.messageService;
						if (e)
							this.$timeout(function() {
								i.sendMessage(n.pasteContact
												|| n.selectedContact, t,
										n.Message.TYPE_IMAGE), n.pasteContact = ""
							});
						else {
							var s = this.inputMessage.trim();
							if ("" === s || s.length > i.MAX_TEXT_LEN
									|| !this.selectedContact)
								return;
							this.debugService
									.handleDebugInput(this.inputMessage)
									|| (this.messageTag ? (i.sendMessage(
											this.selectedContact, {
												text : this.inputMessage,
												tag : this.messageTag
											}), this.messageTag = "") : i
											.sendMessage(this.selectedContact,
													{
														text : this.inputMessage
													})), i.setMessageDraft(
									this.selectedContact,
									this.inputMessage = ""), this.charsLeft = this.charsMax
						}
					}
				}, {
					key : "onPasteInput",
					value : function(e) {
						var t = e.originalEvent || e, n = t.clipboardData.items[0], i = "rt_1avvojjv41jgc12ma135efaoufq1", s = n
								.getAsFile(), o = new a(i, s), r = this.statusTipService;
						this.pasteContact = this.selectedContact, this
								.makeThumb(o, function(e, t) {
									if (e)
										return void r.showTip({
													status : r.FAIL,
													message : "不能预览"
												});
									var n = $('<img src="' + t + '">'), i = document
											.getElementById("my-chattextarea");
									i.empty().append(n)
								})
					}
				}, {
					key : "makeThumb",
					value : function(e, t) {
						var n = void 0, i = this;
						return e.type.match(/^image/)
								? (n = new Image, n.src = this
										.createObjectURL(e.source), void(n.onload = function() {
									i.screenShotService.showShot({
												message : e.size >= 1048576
														? "不能发送，图片不能超过1M"
														: "",
												onOk : function() {
													i.doUpload(e.source)
												}
											}), document
											.getElementById("shot-wrap")
											.appendChild(n)
								}))
								: void t(!0)
					}
				}, {
					key : "doUpload",
					value : function(e) {
						var t = this, n = this.statusTipService, i = new this.FileUploader(
								{
									url : this.uploadImgServer
											+ "/app/api/files?applicationName="
											+ this.appName,
									formData : [{
												ownerId : this.manager.pnsId,
												width : 240
											}]
								}), s = new this.FileItem(i, e);
						s.file.name = "screen-shot." + e.type.split("/")[1], i.queue
								.push(s), i.queue[0].upload(), i.queue = [], i.onSuccessItem = function(
								e, n, i, s) {
							var a = n.image;
							t.onClickSend("image", {
										name : n.name,
										type : n.type,
										size : n.size,
										width : a && a.width,
										height : a && a.height,
										link : n.link,
										variations : a && a.variations
									})
						}, i.onErrorItem = function(e, t, i, s) {
							n.showTip({
										status : n.FAIL,
										message : "发送失败, 请重新发送"
									})
						}
					}
				}, {
					key : "createObjectURL",
					value : function() {
						return this.urlAPI = window.createObjectURL && window
								|| window.URL && URL.revokeObjectURL && URL
								|| window.webkitURL, this.urlAPI
								? this.urlAPI.createObjectURL.apply(
										this.urlAPI, arguments)
								: void 0
					}
				}, {
					key : "goNoticeDetail",
					value : function(e) {
						var t = this;
						e
								&& (this.noticeMsg = e, this.showNoticeDetail = !0, this.bigImageShow = !1, this
										.$timeout(function() {
													t
															.formatContent(e.content.content)
												}))
					}
				}, {
					key : "hideNoticeDetail",
					value : function() {
						this.showNoticeDetail = !1
					}
				}, {
					key : "onChatRoomScrollTop",
					value : function() {
						var e = this;
						if (!this.__queryInProgress) {
							var t = this.managerRecentContactService;
							t.hasMoreHistoryMessages(this.selectedContact)
									&& (this.lastScrollHeight = this.$chatRoom.scrollHeight, this.__queryInProgress = !0, t
											.loadMoreHistoryMessages(this.selectedContact)["finally"](
											function() {
												e.__queryInProgress = !1
											}))
						}
					}
				}, {
					key : "chatRoomScrollToBottom",
					value : function() {
						if (this.selectedContact
								&& this.Contact.TYPE_ORDER !== this.selectedContact.type) {
							var e = this.$chatRoom;
							this.$timeout(function() {
										e.scrollTop = e.scrollHeight
									})
						}
					}
				}, {
					key : "chatListScrollToTop",
					value : function() {
						var e = this.$chatList;
						this.$timeout(function() {
									e.scrollTop = 0
								})
					}
				}, {
					key : "hasMoreHistoryMessages",
					value : function() {
						return !(!this.selectedContact || !this.managerRecentContactService
								.hasMoreHistoryMessages(this.selectedContact))
					}
				}, {
					key : "getDisplayTime",
					value : function(e) {
						var t = _.isEmpty(e.unreadMessages)
								? e.messages
								: e.unreadMessages, n = _.last(t) || {}, i = n.timestamp > 0
								? n.timestamp
								: e.createTime || 0;
						return r.getFriendlyTime(i, !0)
					}
				}, {
					key : "getDisplayText",
					value : function(e) {
						var t, n = this.Order, i = this.Message, s = [
								i.NON_SIGNIN, i.NON_AGREEMENT], a = i.TYPE_SYSTEM;
						if (t = this.messageService.getMessageDraft(e))
							return '<img src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/icon-draft_a692e3f0c6.png" /> '
									+ t;
						if (e.orderType === n.TYPE_BOOKING)
							return "预约开户";
						if (e.orderType === n.TYPE_OPTION)
							return "期权预约开户";
						if (e.orderType === n.TYPE_RESTORE) {
							var o = e.countDownTime
									? '<span class="count-down-time">['
											+ e.countDownTime
											+ "]</span>开户流失客户"
									: "开户流失客户";
							return o
						}
						if (e.orderType === n.TYPE_KNOWLEDGE
								|| e.orderType === n.TYPE_REPORT)
							return e.orderDesc;
						var r = /^您好，.+为您提供服务。$|正在为您转接广发证券专家服务..|^合规提示：/, c = _
								.isEmpty(e.unreadMessages)
								? e.messages
								: e.unreadMessages, l = _.findLast(c, function(
										e) {
									return !(_.indexOf(s, e.type) >= 0 || e.type === a
											&& e.content.text.match(r))
								})
								|| {};
						return void 0 === l.content
								? ""
								: e.type === this.Contact.TYPE_SYSTEM
										|| e.type === this.Contact.TYPE_USER
										? l.content.title
										: l.content.tags
												&& l.content.tags
														.indexOf("dirty") >= -1
												? "客户发送的消息包含不文明用语，请避免受客户情绪影响"
												: l.getText()
					}
				}, {
					key : "setCountDownTime",
					value : function() {
						var e = this;
						this.cancelCountDownTime(), this.timer = this
								.$interval(function() {
									_.each(e.allContacts, function(t) {
										if (t.orderType === e.Order.TYPE_RESTORE)
											if (t.grabOrderTime) {
												var n = t.grabOrderTime
														.toDate().getTime(), i = e.timerService
														.getTime(), s = n
														+ 864e5, a = s - i, o = "00:00:00";
												a > 0
														&& (o = r
																.millisecondToDate(a)), t.countDownTime = o
											} else
												t.countDownTime = "00:00:00"
									})
								}, 1e3)
					}
				}, {
					key : "cancelCountDownTime",
					value : function() {
						this.timer && this.$interval.cancel(this.timer)
					}
				}, {
					key : "formatContent",
					value : function(e) {
						var t = this;
						e && !function() {
							var n = /<img.*?(?:>|\/>)/gi, i = /src=[\'\"]?([^\'\"]*)[\'\"]?/i, s = e
									.replace(n, function(e) {
												var t = e.match(i), n = e
														.replace(
																/<img/,
																"<img ng-click=\"contact.showBigPic('"
																		+ t[1]
																		+ "')\"");
												return n
											}), a = "<div>" + s + "</div>";
							e = t.$compile(a)(t.$scope), angular
									.element(document
											.getElementById("html-notice-content"))
									.append(e)
						}()
					}
				}, {
					key : "showBigPic",
					value : function(e) {
						this.$log.debug("showBigPic image", e);
						var t = new Image;
						t.src = e;
						var n = document.documentElement.clientWidth;
						this.clientHeight = document.documentElement.clientHeight;
						var i = document.documentElement.clientHeight;
						this.bgMask = {
							height : i + "px",
							"line-height" : i + "px"
						}, this.imgContent = {
							height : i + "px",
							"overflow-y" : "scroll"
						};
						var s = this;
						t.onload = function() {
							s.zoomImageWidth = this.width > n ? {
								width : "100%"
							} : {
								width : s.originImageWidth + "px"
							}
						}, document.body.style.overflowY = "hidden", this.bigImageShow = !0, this.previewImageSrc = e
					}
				}, {
					key : "closePreviewModal",
					value : function() {
						document.body.style.overflowY = "scroll", this.bigImageShow = !1
					}
				}, {
					key : "setDraftMessage",
					value : function() {
						var e = this.managerRecentContactService
								.getSelectedContact();
						this.messageService.setMessageDraft(e,
								this.inputMessage)
					}
				}, {
					key : "getShowChatInterface",
					value : function() {
						var e = this.managerRecentContactService
								.getSelectedContact();
						return !e || this.Contact.TYPE_ORDER === e.type
								|| this.showGroupInfo || this.showClientInfo
								|| this.showAccountInfo
								|| this.showOpenAccountStep
								|| this.showPluginContainer
								|| this.showClientTradeInfo
								|| this.showQuestionnaire ? !1 : !0
					}
				}, {
					key : "sendVirtualCall",
					value : function() {
						var e = this, t = t = this.selectedContact, n = {
							orderType : t.orderType,
							clientPnsId : t.pnsId
						};
						this.sendVirtualCallService.sendCall(n).then(
								function(t) {
									e.$log.debug("sendVirtualCall succ", t)
								}, function(t) {
									e.$log.warn("sendVirtualCall fail", t)
								})
					}
				}, {
					key : "resendMessage",
					value : function(e) {
						this.messageService.resendMessage(this.selectedContact,
								e)
					}
				}, {
					key : "handlePostMsg",
					value : function(e) {
						if (e.origin === this.dictionaryPluginUrl) {
							var t = window.keyPlugin && window.keyPlugin.window, n = e.data;
							"object" == typeof n && n.action
									&& "audit" === n.type
									&& this.statusConfirmService.showConfirm({
										message : n.dialog.msg,
										singleOk : n.dialog.singleOk,
										backdrop : n.dialog.backdrop || !0,
										onOk : function() {
											t
													&& (delete n.dialog, n.flag = 1, t
															.postMessage(n, "*"))
										},
										onCancel : function() {
											t
													&& (delete n.dialog, n.flag = 0, t
															.postMessage(n, "*"))
										}
									})
						}
					}
				}, {
					key : "getPluginUrl",
					value : function(e) {
						if (e && e.url && e.answerId) {
							var t = e.messageType === this.Order.TYPE_REPORT
									? 1
									: 0;
							return this.$sce
									.trustAsResourceUrl(this.dictionaryPluginUrl
											+ "/#/answers/audit/"
											+ e.answerId
											+ "?report=" + t)
						}
					}
				}, {
					key : "getChatHeadImg",
					value : function(e) {
						var t = "", n = this.Order, i = this.Contact;
						switch (e.orderType) {
							case n.TYPE_BOOKING :
							case n.TYPE_RESTORE :
								t = "chat-booking";
								break;
							case i.TYPE_SYSTEM :
								t = "chat-system";
								break;
							case n.TYPE_KNOWLEDGE :
							case n.TYPE_REPORT :
								t = "chat-ask";
								break;
							case n.TYPE_OPEN_ACCOUNT :
								t = "chat-open-account";
								break;
							case n.TYPE_OPTION :
								t = "chat-option"
						}
						return e.isGroup() && (t = "chat-group"), e.type === this.Contact.TYPE_SYSTEM
								&& (t = "10000000" === e.id
										? "chat-exam"
										: "chat-system"), t
					}
				}, {
					key : "toggleArrow",
					value : function() {
						this.headerClass = "arrow-up" === this.headerClass
								? "arrow-down"
								: "arrow-up"
					}
				}, {
					key : "getExamCenterUrl",
					value : function(e) {
						if (e.content.data) {
							var t = e.content.data.sId;
							return this.examCenter
									+ "/wis18/customerjsp/gfzq/usermain/main/paper.builduserpapercurr.flow?sid="
									+ t
						}
					}
				}, {
					key : "_onChat",
					value : function(e) {
						var t = this, n = this.managerRecentContactService, i = (this.parrotService, this.managerRecentContactService
								.getSelectedContact()), s = this.Message, a = void 0;
						_.each(e, function(e) {
							e = e.content, i && e.from === i.pnsId
									&& e.type === s.TYPE_SYSTEM
									&& -1 !== e.message.text.search("成功签署风险协议")
									&& t._showHeaderClientInfo(i), e.type === s.GF_PORTAL_LOGIN
									&& (a = n
											.getContactByPnsId(e.message.pnsClient.pnsID))
									&& n
											.updateContact(
													a,
													t.modelFactory
															.createContactFromPayload(e.message.pnsClient))
						})
					}
				}, {
					key : "_showHeaderClientInfo",
					value : function(e) {
						e && e.orderType !== this.Order.TYPE_KNOWLEDGE
								&& e.orderType !== this.Order.TYPE_REPORT
								&& this._getClientInfo()
					}
				}, {
					key : "_sendPhoneNumber",
					value : function(e) {
						var t = this, n = this.selectedContact, i = this.statusTipService;
						this.api("callFromClient", {
									data : {
										order_type : n.orderType,
										manager_id : this.manager.id,
										client_pnsid : n.pnsId || "",
										manager_pnsid : this.manager.pnsId
									}
								}).then(function(n) {
							var s = n.data, a = (new Date).getTime(), o = new Date(a
									- e).getSeconds();
							if (i.hideTip(), 20 > o) {
								t.$timeout.cancel(t.tipsTimeout);
								var r = "电话请求成功，请留意接听020-95575的电话回拨。", c = "确定";
								"000000" !== s.status && (r = s.message), t.statusConfirmService
										.showConfirm({
													message : r,
													okBtn : c,
													singleOk : !0,
													backdrop : !0
												})
							}
						}, function(e) {
							t.$log.warn("_sendPhoneNumber", e)
						})
					}
				}, {
					key : "_getClientInfo",
					value : function() {
						var e = this;
						this.contact = this.managerRecentContactService
								.getSelectedContact(), this.contact.isGroup()
								? this.parrotService.getGroupInfo({
											groupId : this.contact.pnsId
										}).then(function(t) {
											var n = t.data, i = n.groupInfo.members;
											e._getMembers(i)
										}, function(t) {
											e.$log.debug("getGroupInfo fail"
													+ JSON.stringify(t))
										})
								: (this.headerClass = "arrow-up", this.showHeaderArrow = !0, this
										._getClientProfileInfo(this.contact.id))
					}
				}, {
					key : "_getMembers",
					value : function(e) {
						var t = this, n = void 0;
						this.chatUserService.getUserInfo(e).then(function(e) {
							e.forEach(function(e) {
								_.isObject(e)
										&& "jys" !== e.type
										&& (n = e.id, t.groupClientPnsId = e.pnsId, t
												.handleBlackClientTips()), n
										? (t.headerClass = "arrow-up", t.showHeaderArrow = !0, t
												._getClientProfileInfo(n))
										: t.showHeaderArrow = !1
							})
						}, function(e) {
							t.$log
									.debug("getUserInfo fail"
											+ JSON.stringify(e))
						})
					}
				}, {
					key : "_getClientProfileInfo",
					value : function(e) {
						var t = this;
						this.api("getClientProfileInfo", {
									fragments : {
										clientId : e
									}
								}).then(function(n) {
							t.$log.debug("getClientProfileInfo succ", n);
							var i = n.data.data;
							return i
									? (t.isCloseAccount = "销户" === i.custStatus
											? !0
											: !1, void(t.isCloseAccount || t
											._getCustomerInfo(e)))
									: void t._getCustomerInfo(e)
						}, function(n) {
							t._getCustomerInfo(e)
						})
					}
				}, {
					key : "_getCustomerInfo",
					value : function(e) {
						var t = this, n = this.managerService.getManager();
						this.showClientInfoTips = !1;
						var i = {};
						this.clientInfoById = {}, this.contact = this.managerRecentContactService
								.getSelectedContact(), this.api(
								"getCustomerInfo", {
									fragments : {
										managerPnsId : n.pnsId,
										clientId : e
									}
								}).then(function(e) {
							t.$log.debug(e);
							var n = e.data.data, s = "signed-icon", a = "not-signed-icon", o = "已签署《广发证券有问必答投资咨询服务风险揭示书》", r = "未签署《广发证券有问必答投资咨询服务风险揭示书》";
							t.showClientInfoTips = !0, _.isEmpty(n)
									? (i.loginMsg = "未登录客户", i.loginIcon = i.signIcon = a, i.signMsg = r)
									: (i.loginMsg = "已登录客户", i.loginIcon = s, "yes" === n.isSignContract
											? (i.signMsg = o, i.signIcon = s)
											: (i.signMsg = r, i.signIcon = a)), t.clientInfoById[t.contact.pnsId] = i, t
									._getCustomerInfoById()
						}, function(e) {
							t.showClientInfoTips = !0;
							var n = "获取客户信息失败，请刷新页面重试或点击客户资料页查看";
							i.loginMsg = i.signMsg = n, i.loginIcon = i.signIcon = "not-signed-icon", t.$log
									.debug("getCustomerInfo fail"
											+ JSON.stringify(e)), t.clientInfoById[t.contact.pnsId] = i, t
									._getCustomerInfoById()
						})
					}
				}, {
					key : "_getCustomerInfoById",
					value : function() {
						this.contact = this.managerRecentContactService
								.getSelectedContact(), this.clientInfo = this.clientInfoById[this.contact.pnsId]
					}
				}]), e
			}();
			t["default"] = l, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function i() {
				"ngInject";
				function e(e, t, n, i) {
					e.$watch("showGroupInfo", function(t, n) {
								t && e.groupId
										? i.onGoGroupInfo()
										: i.curTab = 1
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/contact/group-info.html",
					replace : !0,
					scope : {
						showGroupInfo : "=",
						groupId : "="
					},
					controller : o,
					controllerAs : "group",
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = null, o = function() {
				function e(t, i, s, o, r, c, l, u, d) {
					"ngInject";
					n(this, e), a = u.resolveInject(e, arguments), this.curTab = 1, this.groupInfo = {}, this.groupOwnImg = "", this.groupOwnName = ""
				}
				return e.$inject = ["$log", "$scope", "$rootScope", "$http",
						"$timeout", "chatUserService", "parrotService",
						"UtilFunctions", "avatarUrl"], s(e, [{
					key : "onGoGroupInfo",
					value : function() {
						var e = this;
						a.parrotService.getGroupInfo({
									groupId : a.$scope.groupId
								}).then(function(t) {
							var n = t.data;
							a.$scope.showGroupInfo = !0, e.groupInfo = n.groupInfo, e.groupInfo.groupType
									&& (e.groupInfo.groupType = parseInt(e.groupInfo.groupType));
							var i = n.groupInfo.members;
							e.getMembers(i)
						}, function(e) {
							a.$log.debug("getGroupInfo fail"
									+ JSON.stringify(e))
						})
					}
				}, {
					key : "getMembers",
					value : function(e) {
						var t = this;
						a.chatUserService.getUserInfo(e).then(function(e) {
							t.clientMembers = [], t.groupInfo.members = e, t.groupInfo.members
									.forEach(function(e) {
										_.isObject(e)
												&& (t.groupInfo.creator == e.pnsId
														&& (t.groupOwnImg = t
																.getHeadImgUrl(e.id), t.groupOwnName = e.name), t.clientMembers
														.push({
															id : e.id,
															pnsId : e.pnsId,
															type : e.type,
															memberName : e.name.length > 10
																	? e.name
																			.slice(
																					0,
																					8)
																			+ "..."
																	: e.name,
															memberImg : "jys" === e.type
																	? t
																			.getHeadImgUrl(e.id)
																	: "",
															mobile : e.mobile,
															qualification : e.qualification
														}))
									})
						}, function(e) {
							a.$log
									.debug("getUserInfo fail"
											+ JSON.stringify(e))
						})
					}
				}, {
					key : "getHeadImgUrl",
					value : function(e) {
						return a.avatarUrl + "/gmsimg/app/" + e
								+ "_236x236.jpg"
					}
				}, {
					key : "onLeaveGroupInfo",
					value : function() {
						a.$scope.showGroupInfo = !1, this.curTab = 1
					}
				}]), e
			}();
			t["default"] = i, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function i() {
				"ngInject";
				function e(e, t, n, i) {
					e.$watch("showClientInfo", function(t, n) {
								t && e.contact && i.onGetClientInfo()
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/contact/client-info.html",
					replace : !0,
					scope : {
						showClientInfo : "=",
						contact : "=",
						sendCall : "&"
					},
					controller : o,
					controllerAs : "client",
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = null, o = function() {
				function e(t, i, s, o, r, c, l, u, d, p, f, g) {
					"ngInject";
					n(this, e), a = l.resolveInject(e, arguments), this.customer = {}, this.signContractClass = "", this.signContractMsg = "", this.signRiskAgreementClass = ""
				}
				return e.$inject = ["$log", "$scope", "$rootScope", "$http",
						"$timeout", "chatUserService", "UtilFunctions",
						"managerRecentContactService", "api",
						"statusTipService", "managerService",
						"sendVirtualCallService"], s(e, [{
					key : "onGetClientInfo",
					value : function() {
						var e = this, t = "", n = a.statusTipService, i = a.managerService
								.getManager(), s = "未签署广发证券有问必答投资咨询服务风险揭示书", o = "已签署广发证券有问必答投资咨询服务风险揭示书";
						n.showTip({
									status : n.PROCESSING,
									message : "正在获取客户信息...",
									duration : 5e3
								}), this.customer = {}, this.contact = a.$scope.contact, a
								.api("getCustomerInfo", {
									fragments : {
										managerPnsId : i.pnsId,
										clientId : this.contact.id
												|| this.contact.clientId
									}
								}).then(function(i) {
									a.$log.debug(i);
									var r = i.data.data;
									if (_.isEmpty(r))
										n.hideTip(), e.signContractClass = "unkonwn-icon", e.signContractMsg = "未登录客户无法获知是否签署投顾协议", e.signRiskAgreementClass = "not-signed-icon", e.customer.isSignContract = s, e.customer.name = "游客", e.customer.stars = "无", e.customer.risk_level = "无", e.customer.org_name = "无", e.customer.serv_name = "无", e.customer.client_id = "", e.customer.isCall = !1, e.customer.totalAsset = "", e.customer.banlance = "", e.customer.stockValue = "", e.customer.profit = "", e.customer["yield"] = "";
									else {
										var c = e._getCustomerStarStr(+r.stars);
										t = r.flag, e.customer.name = "yes" === t
												? r.clientName
												: r.clientName2, e.customer.stars = c
												|| "无", e.customer.risk_level = r.riskLevel
												|| "无", e.customer.org_name = r.orgName
												|| "无", e.customer.serv_name = r.managerName
												|| "无", e.customer.client_id = r.clientId
												|| "无", e.customer.isCall = "yes" === r.isCallOk
												? !0
												: !1, e.customer.isSignContract = "yes" === r.isSignContract
												? o
												: s, e.signRiskAgreementClass = "yes" === r.isSignContract
												? "signed-icon"
												: "not-signed-icon", a.api(
												"getSignContract", {
													fragments : {
														clientId : r.clientId
													}
												}).then(function(t) {
													n.hideTip();
													var i = t.data;
													e._getSignContractMsg(i)
												}, function(e) {
													a.$log
															.debug("getSignContract fail"
																	+ JSON
																			.stringify(e))
												}), a.api(
												"getCustomerAssetCondition", {
													data : {
														khh : e.contact.id,
														type : t
													}
												}).then(function(n) {
													e._getAssetCondition(n, t)
												}, function(e) {
													a.$log
															.debug("getCustomerAssetCondition fail"
																	+ JSON
																			.stringify(e))
												})
									}
								}, function(t) {
									n.hideTip(), e.signContractClass = e.signRiskAgreementClass = "not-signed-icon", e.signContractMsg = e.customer.isSignContract = "获取客户信息失败，请刷新页面重试", a.$log
											.debug("getCustomerInfo fail"
													+ JSON.stringify(t))
								})
					}
				}, {
					key : "_getCustomerStarStr",
					value : function(e) {
						var t = "";
						if (e > 0)
							for (var n = 0; e > n; n++)
								t += '<i class="star"></i>';
						else
							t += "无";
						return t
					}
				}, {
					key : "_getSignContractMsg",
					value : function(e) {
						if ("0" === e.code)
							if (e.data.isSignContract === !0) {
								var t = e.data.deadLine.toString();
								this.signContractClass = "signed-icon", this.signContractMsg = "已签署投顾协议，有效期至"
										+ t.slice(0, 4)
										+ "年"
										+ t.slice(4, 6)
										+ "月" + t.slice(6, 8) + "日"
							} else
								this.signContractClass = "not-signed-icon", this.signContractMsg = "未签署投顾协议"
					}
				}, {
					key : "_getAssetCondition",
					value : function(e, t) {
						if (e.data.error_no && "0" == e.data.error_no
								&& e.data.response_body
								&& e.data.response_body.rows
								&& e.data.response_body.rows.length > 0) {
							var n, i = e.data.response_body.rows[0];
							n = "" == i.total_asset ? "--" : i.total_asset, _
									.isNaN(+n)
									|| (n = Number(n).toFixed(3)), this.customer.totalAsset = n, this.showMoreInfo = !0, "yes" === t
									? (this.customer.banlance = "" == i.banlance
											? "--"
											: i.banlance, this.customer.stockValue = "" == i.stock_value
											? "--"
											: i.stock_value, this.customer.profit = "" == i.profit
											? "--"
											: i.profit, this.customer["yield"] = "" == i["yield"]
											? "--"
											: i["yield"])
									: (this.customer.banlance = "", this.customer.stockValue = "", this.customer.profit = "", this.customer["yield"] = "")
						} else
							"yes" !== t
									&& (this.customer.totalAsset = "--", this.customer.banlance = "", this.customer.stockValue = "", this.customer.profit = "", this.customer["yield"] = "")
					}
				}, {
					key : "onLeaveClientInfo",
					value : function() {
						a.$scope.showClientInfo = !1
					}
				}, {
					key : "sendVirtualCall",
					value : function() {
						var e = this, t = this.contact, n = {
							orderType : t.orderType,
							clientPnsId : t.pnsId
						};
						this.sendVirtualCallService.sendCall(n).then(
								function(t) {
									e.$log.debug("sendVirtualCall succ", t)
								}, function(t) {
									e.$log.warn("sendVirtualCall fail", t)
								})
					}
				}]), e
			}();
			t["default"] = i, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function i() {
				"ngInject";
				function e(e, t, n, i) {
					e.$watch("tradeInfo", function(e, t) {
								e && i.initData()
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/contact/client-trade-info.html",
					replace : !0,
					scope : {
						tradeInfo : "=",
						showClientTradeInfo : "=",
						sendCall : "&"
					},
					controller : a,
					controllerAs : "clientTradeInfo",
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = function() {
				function e(t, i, s, a, o, r, c, l, u, d, p, f, g, h) {
					"ngInject";
					n(this, e), a.resolveInject(e, arguments, this), this
							.initData()
				}
				return e.$inject = ["$log", "$scope", "$timeout",
						"UtilFunctions", "api", "statusTipService",
						"openAccountService", "statusConfirmService",
						"managerService", "chatToClientService",
						"managerRecentContactService",
						"sendVirtualCallService", "messageService",
						"managerSensorReportService"], s(e, [{
					key : "initData",
					value : function() {
						var e = this.statusTipService;
						return this.selectedClient = this.openAccountService
								.getCurrentAccountInfo(), this.contactInfo = this.$scope.tradeInfo, this.tradeInfo = {}, this.manager = this.managerService
								.getManager(), this.contactInfo.clientId
								? (this.clientId = this.contactInfo.clientId, this.legalitySignContractFlag = "yes" === this.contactInfo.isSignContract
										? "已签署："
										: "未签署：", e.showTip({
											status : e.PROCESSING,
											message : "数据加载中..."
										}), this.onGetClientTradeInfo(), this.signContractFlag = "未签署：", void(this.signContractMsg = "《投顾协议》"))
								: (this.$log.error("Must specify clientId!"), void(this.tradeInfo = null))
					}
				}, {
					key : "onGetClientTradeInfo",
					value : function() {
						var e = this;
						this.api("getClientProfileInfo", {
									fragments : {
										clientId : this.clientId
									}
								}).then(function(t) {
							e.$log.debug("getClientProfileInfo succ", t);
							var n = t.data.data;
							e.statusTipService.hideTip(), e.tradeInfo = n, e.tradeInfo.shAmount = parseInt(n.shAmount), e.tradeInfo.szAmount = parseInt(n.szAmount), _
									.isEmpty(n)
									|| (e.getSignContract(), e
											.getLegalitySignContractFlag())
						}, function(t) {
							e.statusTipService.hideTip(), e.tradeInfo = null, e.$log
									.debug("getClientProfileInfo error", t)
						})
					}
				}, {
					key : "getSignContract",
					value : function() {
						var e = this;
						this.api("getSignContract", {
									fragments : {
										clientId : this.clientId
									}
								}).then(function(t) {
							e.$log.debug("getSignContract succ", n);
							var n = t.data;
							if ("0" === n.code && n.data.isSignContract === !0) {
								var i = n.data.deadLine.toString();
								e.signContractFlag = "已签署：", e.signContractMsg = "《投顾协议》,有效期至"
										+ i.slice(0, 4)
										+ "年"
										+ i.slice(4, 6)
										+ "月" + i.slice(6, 8) + "日"
							}
						}, function(t) {
							e.statusTipService.showTip({
										status : e.statusTipService.ALERT,
										message : "客户不存在[getSignContract]"
									}), e.$log.error("getSignContract fail"
									+ JSON.stringify(t))
						})
					}
				}, {
					key : "getLegalitySignContractFlag",
					value : function() {
						var e = this;
						this.selectedClient && this.selectedClient
								&& this.api("getCustomerInfo", {
											fragments : {
												managerPnsId : this.manager.pnsId,
												clientId : this.selectedClient.clientId
											}
										}).then(function(t) {
									var n = t.data.data;
									e.legalitySignContractFlag = "yes" === n.isSignContract
											? "已签署："
											: "未签署："
								}, function() {
									e.$log.warn("获取客户信息失败...")
								})
					}
				}, {
					key : "infoContentHandle",
					value : function(e) {
						var t = "";
						return t = "1" === e
								? "已开通"
								: '<span class="brownish-red">未开通</span>'
					}
				}, {
					key : "onLeaveClientInfo",
					value : function() {
						this.$scope.showClientTradeInfo = !1, this.openAccountService
								.setCurrentAccountInfo(null)
					}
				}, {
					key : "sendVirtualCall",
					value : function() {
						var e = this, t = this.managerRecentContactService
								.getSelectedContact(), n = this.selectedClient, i = n
								? n
								: t, s = {
							orderType : i.orderType,
							clientPnsId : i.pnsId || i.clientPnsId,
							clientId : i.clientId,
							_id : i._id
						};
						this.sendVirtualCallService.sendCall(s).then(
								function(t) {
									e.$log.debug("sendVirtualCall succ", t)
								}, function(t) {
									e.$log.warn("sendVirtualCall fail", t)
								})
					}
				}, {
					key : "showAssetInfo",
					value : function() {
						this.managerSensorReportService.reportPageEvent(
								this.manager, "资产信息说明", "manager_web"), this.statusConfirmService
								.showConfirm({
									message : '<p><span class="l">总资产：</span><span class="r">所有账户的资产</span></p>\n                    <p><span class="l">证券资产：</span><span class="r">交易账户的资产</span></p>\n                    <p><span class="l">持仓市值：</span><span class="r">交易账户的持仓市值（不计现金余额）</span></p>\n                    <p class="special"><span class="l">可营销资产：</span><span class="r">沪深新股申购总额度*10 - 证券资产</span></p>',
									okBtn : "我知道了",
									singleOk : !0,
									special : !0,
									backdrop : !0
								})
					}
				}, {
					key : "sendSalesDeptInfo",
					value : function() {
						var e = this;
						this.managerSensorReportService.reportPageEvent(
								this.manager, "发送营业部信息", "manager_web"), this.statusConfirmService
								.showConfirm({
											message : "是否发送给客户",
											backdrop : !0,
											onOk : function() {
												e.chatToClient(!0)
											}
										})
					}
				}, {
					key : "chatToClient",
					value : function(e) {
						var t = "开户营业部：" + this.tradeInfo.orgName
								+ "<br />\n                        营业部电话："
								+ this.tradeInfo.orgTel
								+ "<br />\n                        营业部地址："
								+ this.tradeInfo.orgAddr
								+ "\n                    ";
						if (this.selectedClient) {
							if (e)
								return void this.chatToClientService
										.chatToClient(this.contactInfo, t);
							this.chatToClientService
									.chatToClient(this.contactInfo)
						} else {
							var n = this.managerRecentContactService
									.getSelectedContact();
							this.onLeaveClientInfo(), e
									&& this.messageService.sendMessage(n, {
												text : t
											})
						}
					}
				}]), e
			}();
			t["default"] = i, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function i() {
				"ngInject";
				function e(e, t, n, i) {
					e.$watch("contactInfo", function(e, t) {
								e && i.onGetAccountInfo()
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/contact/account-info.html",
					replace : !0,
					scope : {
						mobileNo : "=",
						showAccountInfo : "=",
						showOpenAccountStep : "=",
						tradeInfo : "=",
						contactInfo : "="
					},
					controller : a,
					controllerAs : "account",
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = function() {
				function e(t, i, s, a, o, r, c, l, u, d, p, f, g, h) {
					"ngInject";
					n(this, e), a.resolveInject(e, arguments, this), this
							.listenToCommunicationRecord()
				}
				return e.$inject = ["$log", "$scope", "$timeout",
						"UtilFunctions", "openAccountService", "api",
						"statusTipService", "messageTemplateService",
						"managerService", "statusConfirmService",
						"managerRecentContactService", "chatToClientService",
						"timerService", "parrotService"], s(e, [{
					key : "listenToCommunicationRecord",
					value : function() {
						var e = this, t = [], n = this.$scope, i = this.openAccountService, s = this.parrotService;
						t.push(i.listen(i.EVENT_COMMUNICATION_RECORD,
								function() {
									e.onGetAccountInfo()
								})), t.push(s.subscribe(s.CONST_EVENT_PREFIX
										+ "openaccount-manage-noti", function(
										t, n) {
									_.each(n, function(t) {
										t.content._id === e.accountInfo._id
												&& e.$timeout(function() {
													e.accountInfo.currentStep = t.content.currentStep, e.accountInfo.name = t.content.name
												})
									})
								})), t.push(i.listen(i.EVENT_CURRENT_STEP,
								function() {
									e.onGetAccountInfo()
								})), n.$on("$destroy", function() {
									return t.forEach(function(e) {
												return e()
											})
								})
					}
				}, {
					key : "onGetAccountInfo",
					value : function() {
						var e = this, t = this.statusTipService;
						t.showTip({
									status : t.PROCESSING,
									message : "正在获取客户信息...",
									duration : 5e3
								});
						var n = this.openAccountService.getCurrentAccountInfo(), i = this.managerRecentContactService, s = void 0;
						this.$scope.mobileNo ? this.api(
								"getOpenAccountClients", {
									params : {
										filter : {
											mobile : this.$scope.mobileNo
										}
									}
								}).then(function(n) {
							if (t.hideTip(), !n.data.data || !n.data.data[0])
								throw new Error("Data is empty");
							e._getServiceLog(e.accountInfo = n.data.data[0]), e.openAccountService
									.setCurrentUserId(e.accountInfo._id), e.accountInfo.name
									&& (s = i.findContactsBy("id",
											e.$scope.mobileNo)[0])
									&& i.updateContact(s, {
												name : e.accountInfo.name
											})
						}, function(n) {
							t.showTip({
										status : t.FAIL,
										message : "获取客户信息失败,请稍后再试...",
										duration : 3e3
									}), e.$log.warn("onGetAccountInfo", n)
						})
								: n
										&& (t.hideTip(), this.accountInfo = n, this.openAccountService
												.setCurrentUserId(this.accountInfo._id), this
												._getServiceLog())
					}
				}, {
					key : "openAccountStep",
					value : function() {
						this.$scope.showOpenAccountStep = !0, this.$scope.showAccountInfo = !1, this.openAccountService
								.updateCurrentStep()
					}
				}, {
					key : "openTemplate",
					value : function() {
						this.messageTemplateService.showTemplate()
					}
				}, {
					key : "onLeaveAccountInfo",
					value : function() {
						this.$scope.showAccountInfo = !1, this.openAccountService
								.setCurrentAccountInfo(null)
					}
				}, {
					key : "getStepText",
					value : function() {
						return this.accountInfo
								&& this.openAccountService.openAccountStepMap[this.accountInfo.currentStep]
					}
				}, {
					key : "sendPhoneCall",
					value : function() {
						var e = this, t = this.managerService.getManager(), n = t.mobile
								+ " 请确认您的电话号码无误，系统将给您和客户连接通话。如号码变动，请到ERP系统修改（隔天生效）。", i = "确定", s = this.statusTipService;
						this.statusConfirmService.showConfirm({
									message : n,
									okBtn : i,
									backdrop : !0,
									onOk : function() {
										s.showTip({
													status : s.PROCESSING,
													message : "电话请求中...",
													duration : 2e4
												}), e.tipsTimeout = e.$timeout(
												function() {
													s.showTip({
																status : s.FAIL,
																message : "电话请求超时,请重试"
															})
												}, 2e4), e._doCall((new Date)
												.getTime())
									}
								})
					}
				}, {
					key : "_getServiceLog",
					value : function() {
						var e = this, t = this.managerService.getManager(), n = this.accountInfo, i = this.statusTipService;
						n.currentStepDesc = n.tabType === this.openAccountService.typeMap.COMMIT
								? "当前审核状态"
								: "当前开户状态", this.openAccountService
								.queryServiceLog(n._id, t.erpId).then(
										function(t) {
											e.callLogs = t.data.telphone, e.smsLogs = t.data.sms, i
													.hideTip()
										}, function(e) {
											i.showTip({
														status : i.FAIL,
														message : "获取客户信息失败,请稍后再试...",
														duration : 3e3
													})
										})
					}
				}, {
					key : "_doCall",
					value : function(e) {
						var t = this, n = this.managerService.getManager();
						this.openAccountService.sendPhoneCall(
								this.accountInfo._id, n.erpId, n.mobile).then(
								function(n) {
									var i = {
										time : (new Date)
												.format("yyyy-MM-dd hh:mm:ss")
									};
									t.callLogs.unshift(i), t.openAccountService
											.updateOpenAccountInfo(), t
											._handleCallResult(
													"电话请求成功，请留意接听020-95575的电话回拨。",
													e)
								}, function(n) {
									var i = n.data.message || "电话拨打失败，请重新拨打。";
									t._handleCallResult(i, e)
								})
					}
				}, {
					key : "_handleCallResult",
					value : function(e, t) {
						var n = (new Date).getTime(), i = this.statusTipService;
						i.hideTip(), new Date(n - t).getSeconds() < 20
								&& (this.$timeout.cancel(this.tipsTimeout), this.statusConfirmService
										.showConfirm({
													message : e,
													okBtn : "确定",
													singleOk : !0,
													backdrop : !0
												}))
					}
				}, {
					key : "chatToClient",
					value : function() {
						this.$scope.mobileNo
								? this.onLeaveAccountInfo()
								: this.chatToClientService
										.chatToClient(this.accountInfo)
					}
				}, {
					key : "getRejectReasonText",
					value : function() {
						var e = this.accountInfo;
						if (e.reason) {
							var t = "";
							return _.forEach(JSON.parse(e.reason), function(e) {
										t += e.join(";") + ";"
									}), t.substring(0, t.length - 1)
						}
					}
				}, {
					key : "getCountDownTime",
					value : function(e) {
						var t = e.beginTime.toDate().getTime(), n = this.timerService
								.getTime(), i = t + 126e5;
						return this.UtilFunctions.millisecondToDate(i - n)
					}
				}]), e
			}();
			t["default"] = i, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function i() {
				"ngInject";
				function e(e, t, n, i) {
					e.vm = i, e.$watch("contactInfo", function(e, t) {
								e && i.initialize()
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/contact/restore-account-info.html",
					replace : !0,
					scope : {
						contactInfo : "=",
						showOpenAccountStep : "=",
						showQuestionnaire : "="
					},
					controller : a,
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = function() {
				function e(t, i, s, a, o, r, c, l, u, d, p, f, g, h, v, m, y) {
					"ngInject";
					n(this, e), a.resolveInject(e, arguments, this), this
							.initialize()
				}
				return e.$inject = ["$log", "$scope", "$timeout",
						"UtilFunctions", "openAccountService", "api",
						"statusTipService", "messageTemplateService",
						"managerService", "statusConfirmService",
						"managerRecentContactService", "localStorageService",
						"$interval", "timerService", "$rootScope",
						"parrotService", "sendVirtualCallService"], s(e, [{
					key : "initialize",
					value : function() {
						this.missAccountSubmitStatus = !0, this.countDownTime = "00:00:00", this
								.getRestoreOrderDetail(), this
								._subscribeEvents()
					}
				}, {
					key : "_subscribeEvents",
					value : function() {
						var e = this, t = [], n = this.parrotService;
						t.push(n.subscribe(n.CONST_EVENT_PREFIX
										+ "openaccount-restore-noti", function(
										t, n) {
									_.each(n, function(t) {
										"recommend_no_change" === t.content.type
												? e.contact.pnsId === t.content.pnsId
														&& e.$timeout(
																function() {
																	e.countDownTime = "00:00:00", e.accountInfo.cancelled = !0, e
																			._cancelInterval()
																})
												: "reject" === t.content.type
														&& (e.accountInfo.reason = t.content.reason)
									})
								})), this.$scope.$on("$destroy", function() {
									e._cancelInterval()
								})
					}
				}, {
					key : "getRestoreOrderDetail",
					value : function() {
						var e = this, t = this.statusTipService, n = this.contact = this.managerRecentContactService
								.getSelectedContact();
						t.showTip({
									status : t.PROCESSING,
									message : "正在获取开户流失客户信息...",
									duration : 5e3
								}), this.api("getRestoreOrderDetail", {
									fragments : {
										orderId : n.orderId
									}
								}).then(function(i) {
							e.$log.debug("getRestoreOrderDetail succ", i), t
									.hideTip();
							var s = i.data.data;
							return e.accountInfo = s, e.accountInfo.name = n.name, e.accountInfo.currentStepDesc = "当前开户状态", e.accountInfo.orderId = n.orderId, e.accountInfo.isQuestionnaire = !0, e.managerRecentContactService
									.updateContact(n, {
												grabOrderTime : s.cancelled
														? null
														: s.managerTime,
												type : n.type
											}), s.cancelled
									? void(e.countDownTime = "00:00:00")
									: (e.countDown(), e
											.getMissAccountSubmitStatus(n.orderId), e
											._cancelInterval(), void(e.timer = e
											.$interval(function() {
												e.countDown(), e
														.getMissAccountSubmitStatus(n.orderId)
											}, 1e3)))
						}, function(n) {
							t.showTip({
										status : t.FAIL,
										message : "获取客户信息失败,请稍后再试...",
										duration : 3e3
									}), e.$log.warn("getRestoreOrderDetail", n)
						})
					}
				}, {
					key : "openAccountStep",
					value : function() {
						this.$scope.showQuestionnaire = !1, this.$scope.showOpenAccountStep = !0, this.openAccountService
								.setCurrentUserId(this.contact.orderId)
					}
				}, {
					key : "getStepText",
					value : function() {
						return this.accountInfo
								&& this.openAccountService.openAccountStepMap[this.accountInfo.currAction]
					}
				}, {
					key : "getRejectReasonText",
					value : function() {
						var e = this.accountInfo;
						if (e.reason) {
							var t = "";
							return _.forEach(JSON.parse(e.reason), function(e) {
										t += e.join(";") + ";"
									}), t.substring(0, t.length - 1)
						}
					}
				}, {
					key : "sendPhoneCall",
					value : function() {
						var e = this;
						if (!this.missAccountSubmitStatus) {
							var t = this.contact, n = {
								orderType : t.orderType,
								clientPnsId : t.pnsId,
								orderId : t && t.orderId
							};
							this.sendVirtualCallService.sendCall(n).then(
									function(t) {
										e.$log.debug("sendVirtualCall succ", t);
										var n = (new Date)
												.format("yyyy-MM-dd hh:mm:ss");
										e.accountInfo.callMeTime.unshift(n)
									}, function(t) {
										e.$log.warn("sendVirtualCall fail", t)
									})
						}
					}
				}, {
					key : "_doCall",
					value : function(e) {
						var t = this, n = this.contact, i = (this.statusTipService, this.managerService
								.getManager());
						this.api("callFromClient", {
									data : {
										order_type : n.orderType,
										manager_id : i.id,
										client_pnsid : n.pnsId || "",
										manager_pnsid : i.pnsId,
										order_id : n && n.orderId
									}
								}).then(function(n) {
							var i = (new Date).format("yyyy-MM-dd hh:mm:ss");
							t.accountInfo.callMeTime.unshift(i), t
									._handleCallResult(
											"电话请求成功，请留意接听020-95575的电话回拨。", e)
						}, function(n) {
							t.$log.warn("_sendPhoneNumber", n);
							var i = n.data.message || "电话拨打失败，请重新拨打。";
							t._handleCallResult(i, e)
						})
					}
				}, {
					key : "_handleCallResult",
					value : function(e, t) {
						var n = (new Date).getTime(), i = this.statusTipService;
						i.hideTip(), new Date(n - t).getSeconds() < 20
								&& (this.$timeout.cancel(this.tipsTimeout), this.statusConfirmService
										.showConfirm({
													message : e,
													okBtn : "确定",
													singleOk : !0,
													backdrop : !0
												}))
					}
				}, {
					key : "sendMobileMsg",
					value : function() {
						var e = this;
						if (!this.missAccountSubmitStatus) {
							var t = "【广发证券】尊敬的客户：我们留意到您进入广发证券开户流程，但尚未完成开户。为协助您顺利开立账户，我司将安排专人与您联系，来电号码为95575，请留意接听。";
							this.statusConfirmService.showConfirm({
										message : t,
										okBtn : "确定发送",
										backdrop : !0,
										onOk : function() {
											e._sendMobileMsg(t)
										}
									})
						}
					}
				}, {
					key : "_sendMobileMsg",
					value : function(e) {
						var t = this, n = {
							msg : e,
							clientPnsId : this.contact.pnsId,
							orderId : this.contact.orderId
						}, i = this.statusTipService;
						i.showTip({
									status : i.PROCESSING,
									message : "短信发送中...",
									duration : 2e4
								}), this.api("sendMobileMsg", {
									data : n
								}).then(function(e) {
							t.accountInfo.sendMsgTime
									.unshift(e.data.data.sendTime), i.showTip({
										status : i.SUCCESS,
										message : "短信发送成功",
										duration : 2e3
									})
						}, function(e) {
							t.$log.warn("_sendMobileMsg fail", e), i.showTip({
										status : i.FAIL,
										message : "短信发送失败，" + e.data.message,
										duration : 2e3
									})
						})
					}
				}, {
					key : "goToQuestionnaire",
					value : function() {
						this.missAccountSubmitStatus
								|| (this.$scope.showOpenAccountStep = !1, this.$scope.showQuestionnaire = !0)
					}
				}, {
					key : "getBtnText",
					value : function() {
						var e = this, t = this.localStorageService
								.get("questionnaireData")
								|| [], n = !1;
						return t.length > 0 && _.each(t, function(t) {
									t.order_id === e.contact.orderId
											&& (n = !0)
								}), this.accountInfo
								&& (n || this.accountInfo.questStartTime)
								? "修改问卷"
								: "填写问卷"
					}
				}, {
					key : "getMissAccountSubmitStatus",
					value : function(e) {
						var t = this, n = this._checkCountDownTime();
						0 >= n ? this.api("getMissAccountSubmitStatus", {
									fragments : {
										orderId : e
									}
								}).then(function(e) {
							t.$log.debug("getMissAccountSubmitStatus succ", e), t.missAccountSubmitStatus = e.data.data === !1
									? !0
									: !1
						}, function(e) {
							t.$log.debug("getMissAccountSubmitStatus fail", e)
						})
								: this.missAccountSubmitStatus = !1
					}
				}, {
					key : "countDown",
					value : function() {
						var e = this._checkCountDownTime();
						return 0 >= e
								? void(this.countDownTime = "00:00:00")
								: void(this.countDownTime = this.UtilFunctions
										.millisecondToDate(e))
					}
				}, {
					key : "_checkCountDownTime",
					value : function() {
						var e = this.accountInfo.managerTime.toDate().getTime(), t = this.timerService
								.getTime(), n = e + 864e5, i = n - t;
						return 0 >= i && this._cancelInterval(), i
					}
				}, {
					key : "_cancelInterval",
					value : function() {
						this.timer && this.$interval.cancel(this.timer)
					}
				}]), e
			}();
			t["default"] = i, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function i() {
				"ngInject";
				function e(e, t, n, i) {
					e.$watch("showOpenAccountStep", function(e, t) {
								e && i.onGetStepInfo()
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/contact/open-account-step.html",
					replace : !0,
					scope : {
						showAccountInfo : "=",
						showOpenAccountStep : "="
					},
					controller : a,
					controllerAs : "openStep",
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = function() {
				function e(t, i, s, a, o, r, c, l, u) {
					"ngInject";
					n(this, e), a.resolveInject(e, arguments, this), this
							._subscribeEvents()
				}
				return e.$inject = ["$log", "$scope", "$rootScope",
						"UtilFunctions", "openAccountService",
						"statusTipService", "Order",
						"managerRecentContactService", "parrotService"], s(e, [
						{
							key : "onGetStepInfo",
							value : function() {
								var e = this, t = this.contact = this.managerRecentContactService
										.getSelectedContact()
										|| {}, n = this.openAccountService
										.getCurrentAccountInfo(), i = {
									id : this.openAccountService
											.getCurrentUserId(),
									type : "id"
								};
								n || t.orderType !== this.Order.TYPE_RESTORE
										|| (i.type = "orderId"), this.openAccountService
										.queryOpenAccountStep(i).then(
												function(t) {
													var n = t.data;
													if (!n || 0 === n.length)
														return void e.utils
																.showTips(
																		"当前步骤为空,请稍后再试",
																		3e3);
													for (var i = [], s = 0; s < n.length; s++) {
														var a = {}, o = n[s];
														e.openAccountService.openAccountStepMap[o.action]
																&& (0 === s
																		? a.isFirst = !0
																		: s === n.length
																				- 1
																				&& (a.isLast = !0), a.stepDesc = e.openAccountService.openAccountStepMap[o.action], a.actionTime = o.actionTime, o.auditor
																		&& (a.auditor = o.auditor), i
																		.push(a))
													}
													if (1 === n.length) {
														var r = i[0];
														r.isLastCurrent = !0, r.isFirst = !1, r.isLast = !1
													}
													e.stepsFlow = i
												}, function(t) {
													e.statusTipService.showTip(
															{
																status : e.statusTipService.FAIL,
																message : "获取当前步骤失败,请稍后再试",
																duration : 3e3
															})
												})
							}
						}, {
							key : "onLeaveOpenAccountStep",
							value : function() {
								this.$scope.showOpenAccountStep = !1, this.contact.orderType !== this.Order.TYPE_RESTORE
										&& (this.$scope.showAccountInfo = !0)
							}
						}, {
							key : "_subscribeEvents",
							value : function() {
								var e = this, t = [], n = this.parrotService;
								t.push(n.subscribe(n.CONST_EVENT_PREFIX
												+ "openaccount-manage-noti",
										function(t, n) {
											_.each(n, function(t) {
												t.content._id === e.accountInfo._id
														&& e.onGetStepInfo()
											})
										})), this.$scope.$on("$destroy",
										function() {
											return t.forEach(function(e) {
														return e()
													})
										})
							}
						}]), e
			}();
			t["default"] = i, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function i() {
				"ngInject";
				function e(e, t, n, i) {
					e.vm = i, e.$watch("contactInfo", function(e, t) {
								e && i.initialize()
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/contact/option-info.html",
					replace : !0,
					scope : {
						contactInfo : "=",
						showOptionQuestionnaire : "="
					},
					controller : a,
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = function() {
				function e(t, i, s, a, o, r, c, l, u, d, p, f, g, h, v, m, y) {
					"ngInject";
					n(this, e), a.resolveInject(e, arguments, this), this
							.initialize()
				}
				return e.$inject = ["$log", "$scope", "$timeout",
						"UtilFunctions", "openAccountService", "api",
						"statusTipService", "messageTemplateService",
						"managerService", "statusConfirmService",
						"managerRecentContactService", "localStorageService",
						"$interval", "timerService", "$rootScope",
						"parrotService", "sendVirtualCallService"], s(e, [{
							key : "initialize",
							value : function() {
								this.getOptionOrderDetail()
							}
						}, {
							key : "getOptionOrderDetail",
							value : function() {
								var e = this, t = this.statusTipService, n = this.contact = this.managerRecentContactService
										.getSelectedContact();
								t.showTip({
											status : t.PROCESSING,
											message : "正在获取期权预约开户客户信息...",
											duration : 5e3
										}), this.api("getOptionOrderDetail", {
											fragments : {
												orderId : n.orderId
											}
										}).then(function(i) {
									e.$log
											.debug("getOptionOrderDetail succ",
													i), t.hideTip();
									var s = i.data.data;
									e.accountInfo = s, e.accountInfo.name = n.name, e.accountInfo.orderId = n.orderId, e.managerRecentContactService
											.updateContact(n, {
														grabOrderTime : s.managerTime,
														type : n.type
													})
								}, function(n) {
									t.showTip({
												status : t.FAIL,
												message : "获取客户信息失败,请稍后再试...",
												duration : 3e3
											}), e.$log.warn(
											"getOptionOrderDetail", n)
								})
							}
						}, {
							key : "sendPhoneCall",
							value : function() {
								var e = this, t = this.contact, n = {
									orderType : t.orderType,
									clientPnsId : t.pnsId,
									orderId : t && t.orderId
								};
								this.sendVirtualCallService.sendCall(n).then(
										function(t) {
											e.$log.debug(
													"sendVirtualCall succ", t);
											var n = (new Date)
													.format("yyyy-MM-dd hh:mm:ss");
											e.accountInfo.callMeTime.unshift(n)
										}, function(t) {
											e.$log.warn("sendVirtualCall fail",
													t)
										})
							}
						}, {
							key : "_doCall",
							value : function(e) {
								var t = this, n = this.contact, i = this.managerService
										.getManager();
								this.api("callFromClient", {
											data : {
												order_type : n.orderType,
												manager_id : i.id,
												client_pnsid : n.pnsId || "",
												manager_pnsid : i.pnsId,
												order_id : n && n.orderId
											}
										}).then(function(n) {
									var i = (new Date)
											.format("yyyy-MM-dd hh:mm:ss");
									t.accountInfo.callMeTime.unshift(i), t
											._handleCallResult(
													"电话请求成功，请留意接听020-95575的电话回拨。",
													e)
								}, function(n) {
									t.$log.warn("_sendPhoneNumber", n);
									var i = n.data.message || "电话拨打失败，请重新拨打。";
									t._handleCallResult(i, e)
								})
							}
						}, {
							key : "_handleCallResult",
							value : function(e, t) {
								var n = (new Date).getTime(), i = this.statusTipService;
								i.hideTip(), new Date(n - t).getSeconds() < 20
										&& (this.$timeout
												.cancel(this.tipsTimeout), this.statusConfirmService
												.showConfirm({
															message : e,
															okBtn : "确定",
															singleOk : !0,
															backdrop : !0
														}))
							}
						}, {
							key : "goToQuestionnaire",
							value : function() {
								this.$scope.showOptionQuestionnaire = !0
							}
						}, {
							key : "getBtnText",
							value : function() {
								return this.accountInfo
										&& this.accountInfo.questStartTime
										? "修改问卷"
										: "填写问卷"
							}
						}]), e
			}();
			t["default"] = i, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function s() {
				function e(e, t, n, i) {
					e.vm = i
				}
				return {
					restrict : "E",
					templateUrl : "app/components/plugins/chat-plugin-panel.html",
					replace : !0,
					scope : {
						clickSend : "&",
						blackList : "=",
						showMoreTitle : "="
					},
					controller : c,
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var a = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), o = n(69), r = null, c = function() {
				function e(t, n, s, a, c, l) {
					"ngInject";
					i(this, e), r = o.resolveInject(e, arguments), this.$scope = t, this.plugins = [], this
							._subscribeEvents(), this._rearrangePluginObject()
				}
				return e.$inject = ["$scope", "$timeout", "chatPluginManager",
						"statusTipService", "managerService",
						"managerSensorReportService"], a(e, [{
							key : "onTapPlugin",
							value : function(e, t) {
								var n = r.managerService.getManager();
								r.managerSensorReportService.reportPageEvent(n,
										e.name, "manager_web"), r.chatPluginManager
										.dispatchTap(e)
							}
						}, {
							key : "parentClickSend",
							value : function(e, t) {
								r.$scope.clickSend({
											type : e,
											msgObj : t
										})
							}
						}, {
							key : "toggleMore",
							value : function() {
								r.$scope.showMoreTitle = !r.$scope.showMoreTitle
							}
						}, {
							key : "contactHasNew",
							value : function() {
								return r.chatPluginManager.hasNew()
							}
						}, {
							key : "_rearrangePluginObject",
							value : function() {
								this.plugins = _.reduce(r.chatPluginManager
												.findItemsBy("visible", !0),
										function(e, t, n) {
											var i = n >= 11 ? 1 : 0;
											return (e[i] ? e[i] : e[i] = [])
													.push(t), e
										}, [])
							}
						}, {
							key : "_subscribeEvents",
							value : function() {
								var e = this, t = [], n = r.chatPluginManager;
								t.push(n.listen(n.EVENT_PLUGINS_UPDATED,
										function() {
											e._rearrangePluginObject()
										})), this.$scope.$on("$destroy",
										function() {
											t.forEach(function(e) {
														return e()
													})
										})
							}
						}]), e
			}();
			t["default"] = s, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e) {
				"ngInject";
				function t(e, t, n, i) {
					e.vm = i
				}
				return {
					restrict : "EA",
					template : '<audio id="notification-media" src="https://cdn.gf.com.cn/clickeggs/common/assets/icon/notification.mp3"></audio>',
					replace : !0,
					scope : {},
					controller : "NotificationController",
					link : t
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					}), n.$inject = ["$timeout"], t["default"] = n, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function i() {
				"ngInject";
				function e(e, t, n, i) {
					e.setting = i
				}
				return {
					restrict : "EA",
					templateUrl : "app/components/system-setting/system-setting.html",
					replace : !0,
					scope : {
						showSetting : "="
					},
					controller : o,
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = null, o = function() {
				function e(t, i, s, o, r, c, l, u) {
					"ngInject";
					n(this, e), a = r.resolveInject(e, arguments), this.showOrderSwitch = !0, this.isBCManager = u
							.isBCManager(), this.subscribeEvents()
				}
				return e.$inject = ["$scope", "$rootScope", "$timeout",
						"managerRecentContactService", "UtilFunctions",
						"notificationPushService", "statusTipService",
						"managerService"], s(e, [{
					key : "subscribeEvents",
					value : function() {
						var e = this, t = [], n = a.notificationPushService, i = a.managerService;
						t.push(n.listen(n.EVENT_DATA_READY, function() {
							e.checked = {
								sound : n.hasSoundEnabled(),
								vibrate : n.hasVibrateEnabled(),
								informationPush : n.hasInformationPushEnabled(),
								openAccountPush : n.hasOpenAccountPushEnabled(),
								restorePush : n.hasRestorePushEnabled(),
								bookingPush : n.hasBookingPushEnabled(),
								askPush : n.hasAskPushEnabled(),
								optionPush : n.hasOptionPushEnabled()
							}
						})), t.push(i.listen(i.EVENT_USER_CHANGED, function() {
									e.isBCManager = i.isBCManager()
								})), a.$scope.$on("$destroy", function() {
									t.forEach(function(e) {
												e()
											})
								})
					}
				}, {
					key : "toggleMenu",
					value : function(e) {
						this.showOrderSwitch = 1 === e ? !0 : !1
					}
				}, {
					key : "toggleSound",
					value : function() {
						this.checked.sound = a.notificationPushService
								.toggleSound()
					}
				}, {
					key : "toggleVibrate",
					value : function() {
						this.checked.vibrate = a.notificationPushService
								.toggleVibrate()
					}
				}, {
					key : "toggleInformationPush",
					value : function() {
						var e = this, t = a.statusTipService;
						t.showTip({
									status : t.PROCESSING,
									message : "设置中..."
								}), a.notificationPushService
								.toggleInformationPush().then(function(n) {
									a.$timeout(function() {
												return e.checked.informationPush = n
											}), t.showTip({
												status : t.SUCCESS,
												message : "设置成功"
											})
								}, function(e) {
									t.showTip({
												status : t.FAIL,
												message : "设置失败 " + e
											})
								})
					}
				}, {
					key : "toggleOpenAccountPush",
					value : function() {
						var e = this, t = a.statusTipService;
						t.showTip({
									status : t.PROCESSING,
									message : "设置中..."
								}), a.notificationPushService
								.toggleOpenAccountPush().then(function(n) {
									a.$timeout(function() {
												return e.checked.openAccountPush = n
											}), t.showTip({
												status : t.SUCCESS,
												message : "设置成功"
											})
								}, function(e) {
									t.showTip({
												status : t.FAIL,
												message : "设置失败 " + e
											})
								})
					}
				}, {
					key : "toggleBookingPush",
					value : function() {
						var e = this, t = a.statusTipService;
						t.showTip({
									status : t.PROCESSING,
									message : "设置中..."
								}), a.notificationPushService
								.toggleBookingPush().then(function(n) {
									a.$timeout(function() {
												return e.checked.bookingPush = n
											}), t.showTip({
												status : t.SUCCESS,
												message : "设置成功"
											})
								}, function(e) {
									t.showTip({
												status : t.FAIL,
												message : "设置失败 " + e
											})
								})
					}
				}, {
					key : "toggleRestorePush",
					value : function() {
						var e = this, t = a.statusTipService;
						t.showTip({
									status : t.PROCESSING,
									message : "设置中..."
								}), a.notificationPushService
								.toggleRestorePush().then(function(n) {
									a.$timeout(function() {
												return e.checked.restorePush = n
											}), t.showTip({
												status : t.SUCCESS,
												message : "设置成功"
											})
								}, function(e) {
									t.showTip({
												status : t.FAIL,
												message : "设置失败 " + e
											})
								})
					}
				}, {
					key : "toggleAskPush",
					value : function() {
						var e = this, t = a.statusTipService;
						t.showTip({
									status : t.PROCESSING,
									message : "设置中..."
								}), a.notificationPushService.toggleAskPush()
								.then(function(n) {
											a.$timeout(function() {
														return e.checked.askPush = n
													}), t.showTip({
														status : t.SUCCESS,
														message : "设置成功"
													})
										}, function(e) {
											t.showTip({
														status : t.FAIL,
														message : "设置失败 " + e
													})
										})
					}
				}, {
					key : "toggleOptionPush",
					value : function() {
						var e = this, t = a.statusTipService;
						t.showTip({
									status : t.PROCESSING,
									message : "设置中..."
								}), a.notificationPushService
								.toggleOptionPush().then(function(n) {
											a.$timeout(function() {
														return e.checked.optionPush = n
													}), t.showTip({
														status : t.SUCCESS,
														message : "设置成功"
													})
										}, function(e) {
											t.showTip({
														status : t.FAIL,
														message : "设置失败 " + e
													})
										})
					}
				}, {
					key : "close",
					value : function() {
						a.$scope.showSetting = !1
					}
				}]), e
			}();
			t["default"] = i, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function s() {
				"ngInject";
				function e(e, t, n, i) {
				}
				return {
					restrict : "EA",
					templateUrl : "app/key-plugins/plugin-container.html",
					replace : !0,
					scope : {
						showPlugin : "=",
						url : "="
					},
					controller : r,
					controllerAs : "plugin",
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var a = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), o = n(69), r = function() {
				function e(t, n, s, a, r, c, l, u, d, p, f, g, h, v) {
					"ngInject";
					var m = this;
					i(this, e), o.resolveInject(e, arguments, this), g.showTip(
							{
								status : g.PROCESSING,
								message : "正在加载...",
								duration : 1e4
							}), h.verify().then(function() {
								m.init()
							}, function(e) {
								e && 0 === e.status || p.go("login")
							})
				}
				return e.$inject = ["$log", "$rootScope", "$scope", "$sce",
						"$q", "messageService", "Message", "managerService",
						"deviceService", "$state",
						"managerRecentContactService", "statusTipService",
						"authorizeService", "api"], a(e, [{
					key : "init",
					value : function() {
						var e = this, t = this.$scope.url;
						this.pluginName = "", this.frameUrl = this.$sce
								.trustAsResourceUrl(t);
						var n = this._frame = document
								.getElementsByName("pluginContainer")[0];
						this._crossMessage = new CrossMessage({
									otherWindow : n.contentWindow
								}), n.addEventListener("load", function() {
									e.statusTipService.hideTip(), e.$scope
											.$apply(function() {
														e.frameLoaded = !0
													})
								}), this.frameLoaded = !1, this
								._subscribeEvents()
					}
				}, {
					key : "goBack",
					value : function() {
						var e = this;
						this.deviceService.isOnline && this.frameLoaded
								? this._crossMessage.post(
										"plugin.event.navigate", "back").then(
										function() {
											e.$scope.showPlugin = !1
										}, function() {
											e.isShowClose = !0
										})
								: this.$scope.showPlugin = !1
					}
				}, {
					key : "close",
					value : function() {
						this.$scope.showPlugin = !1
					}
				}, {
					key : "rightButtonClick",
					value : function() {
						var e = this._crossMessage;
						e.post("plugin.event.sendMessage")
					}
				}, {
					key : "_subscribeEvents",
					value : function() {
						var e = this;
						this._subscribeFrameMessages();
						var t = this.managerRecentContactService, n = [];
						n.push(t.listen(t.EVENT_SELECTED, function() {
									e.$scope.showPlugin = !1
								})), this.$scope.$on("$destroy", function() {
									e._crossMessage.clear(), n.forEach(
											function(e) {
												e()
											})
								})
					}
				}, {
					key : "_subscribeFrameMessages",
					value : function() {
						var e = this, t = this._crossMessage, n = this.$scope, i = this.messageService, s = this.Message, a = this.managerRecentContactService;
						t.on("plugin.request.setTitle", function(t) {
									return n.$apply(function() {
												return e.pluginName = t
											})
								}), t.on("plugin.request.toggleUIFeature",
								function(t) {
									return n.$apply(function() {
												e.isShowRightBtn = !!t.sendMessage
											}), !0
								}), t.on("plugin.request.sendMessage",
								function(t) {
									var n = a.getSelectedContact(), o = t.content, r = t.type
											|| s.TYPE_RECOMMEND;
									if (!n)
										return void e.$q
												.reject("No contact selected");
									if (!o)
										return void e.$q
												.reject("message.content is not specified");
									if ("dictionary" === t.type
											&& o.url
											&& (o.url += -1 === o.url
													.search(/\?/)
													? "?from=jys_web"
													: "&from=jys_web", _
													.assign(o, {
														content : t.content.content
																.replace(
																		/<\/?[^>]*>/g,
																		""),
														type : "dictionary",
														icon : "https://cdn.gf.com.cn/clickeggs/common/assets/icon/dictionary-60x60.png"
													}), o.needLogin)) {
										var c = function() {
											var t = e.$q.defer();
											return e.api("getCustomerInfo", {
												fragments : {
													managerPnsId : e.managerService
															.getManager().pnsId,
													clientId : n.id
												}
											}).then(function(e) {
												var s = e.data.data;
												_.isEmpty(s)
														|| "yes" !== s.isSignContract
														? t.reject()
														: (i.sendMessage(n, o,
																r), t.resolve())
											}), {
												v : t.promise
											}
										}();
										if ("object" == typeof c)
											return c.v
									}
									return i.sendMessage(n, o, r), !0
								}), t.on("plugin.request.close", function() {
									return e.$scope.showPlugin = !1, !0
								})
					}
				}]), e
			}();
			t["default"] = s, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function i() {
				"ngInject";
				function e(e, t, n, i) {
					e.starLevel = i, e.$watch("showStarLevel", function(e, t) {
								e && i.onGetStarLevel()
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/components/star-level/star-level.html",
					replace : !0,
					scope : {
						showStarLevel : "=",
						showGuide : "="
					},
					controller : a,
					controllerAs : "starLevel",
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = function() {
				function e(t, i, s, a, o) {
					"ngInject";
					n(this, e), a.resolveInject(e, arguments, this)
				}
				return e.$inject = ["$log", "$scope", "$rootScope",
						"UtilFunctions", "starLevelService"], s(e, [{
					key : "onGetStarLevel",
					value : function() {
						if (this.stateData = this.starLevelService
								.getStarLevelData(), !this.stateData.rank)
							return void(this.formatStateData = {
								newRank : "暂无数据",
								newScoreDiff : "无变化",
								newRankDiff : "无变化",
								newLevelDiff : "无变化",
								newRankLevel : this.stateData.is_new
										? 3
										: "暂无数据",
								newTotalScore : "暂无数据"
							});
						var e = this.stateData.rank, t = this.stateData.scoreDiff, n = this.stateData.rankDiff, i = this.stateData.levelDiff, s = this.stateData.rankLevel, a = {
							"零星级" : "暂无数据",
							"一星级" : 1,
							"二星级" : 2,
							"三星级" : 3,
							"四星级" : 4,
							"五星级" : 5
						};
						this.formatStateData = {
							newRank : "NULL" === e ? "暂无数据" : e,
							newScoreDiff : "0" === t ? "无变化" : null === t
									? "无变化"
									: +t,
							newRankDiff : "0" === n ? "无变化" : null === n
									? "无变化"
									: +n,
							newLevelDiff : "0" === i ? "无变化" : null === i
									? "无变化"
									: Math.abs(i),
							newRankLevel : this.stateData.is_new ? 3 : a[s],
							newTotalScore : this.stateData.totalScore
						}
					}
				}, {
					key : "isNumber",
					value : function(e) {
						return _.isNumber(e)
					}
				}, {
					key : "absFilter",
					value : function(e) {
						return this.isNumber(e) ? Math.abs(+e) : e
					}
				}, {
					key : "onLeaveStarLevel",
					value : function() {
						this.$scope.showGuide = !1, this.$scope.showStarLevel = !1
					}
				}, {
					key : "goStarLevelGuide",
					value : function() {
						this.$scope.showGuide = !0
					}
				}, {
					key : "goStarLevel",
					value : function() {
						this.$scope.showGuide = !1
					}
				}]), e
			}();
			t["default"] = i, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function i() {
				"ngInject";
				function e(e, t, n, i) {
					e.vm = i, e.$watch("contactInfo", function(e, t) {
								e && i.init()
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/questionnaire/questionnaire.html",
					replace : !0,
					scope : {
						type : "=",
						contactInfo : "=",
						showQuestionnaire : "="
					},
					controller : a,
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = function() {
				function e(t, i, s, a, o, r, c, l, u, d, p, f) {
					"ngInject";
					n(this, e), a.resolveInject(e, arguments, this)
				}
				return e.$inject = ["$log", "$scope", "$rootScope",
						"UtilFunctions", "managerService", "statusTipService",
						"Order", "api", "managerRecentContactService",
						"$timeout", "localStorageService",
						"statusConfirmService"], s(e, [{
					key : "init",
					value : function() {
						this.answers = [], this.manager = this.managerService
								.getManager(), this.contact = this.managerRecentContactService
								.getSelectedContact(), this.canPost = !1, this.isValidAccount = !0, this
								.getQuestionnaire()
					}
				}, {
					key : "getQuestionnaire",
					value : function() {
						var e = this;
						this.api("getQuestionnaire", {
									fragments : {
										orderId : this.contact.orderId
									}
								}).then(function(t) {
							var n = t.data.data.questionnaire;
							e.$log.debug("getQuestionnaire succ", t), e.questions = n.questions, e.version = n.version, e.serverAnswers = t.data.data.answer, e.answers = e.serverAnswers
									? e.serverAnswers.answers
									: [], e.showAccount(0, e.questions[0])
						}, function(t) {
							e.$log.warn("getQuestionnaire error", t), e.statusTipService
									.showTip({
												status : e.statusTipService.ALERT,
												message : t.data.message,
												duration : 1e3
											}), e.$timeout(function() {
										e.$scope.showQuestionnaire = !1
									}, 1e3)
						})
					}
				}, {
					key : "answerQuestion",
					value : function(e, t, n, i) {
						i
								&& (this.answers[t] = {
									question_id : n.qid,
									selected_index : e,
									text : "date" === n.type ? i : null
								}, _.filter(this.answers, "question_id").length === this.questions.length
										&& (this.canPost = !0), 1 === t
										&& (this.textTips = "text" === i.type
												? "请在答案选项的输入框中输入文字！"
												: null))
					}
				}, {
					key : "textAnswerHandle",
					value : function(e, t) {
						this.$log.debug("textAnswerHandle answer", t), this.answers[e].text = t.answerText, t.answerText
								&& (this.textTips = null)
					}
				}, {
					key : "doSubmit",
					value : function() {
						var e = this, t = {
							manager_id : this.manager.id,
							order_id : this.contact.orderId,
							questionnaire_version : this.version,
							answers : this.answers
						};
						if (this.$log.debug("doSubmit data", t), ("optionQuestionnaireData" !== this.$scope.type || this.isValidAccount)
								&& !this.showDateTips && this.canPost) {
							if (this.textTips)
								return void this.statusTipService.showTip({
											status : this.statusTipService.FAIL,
											message : this.textTips,
											duration : 1500
										});
							this.statusTipService.showTip({
										status : this.statusTipService.PROCESSING,
										message : "正在提交...",
										duration : 3e3
									}), this.api("postQuestionnaireAnswer", {
										data : t
									}).then(function(t) {
								e.$log.debug("doSubmit data succ", t), e.statusTipService
										.showTip({
											status : e.statusTipService.SUCCESS,
											message : "问卷提交成功",
											duration : 2e3
										}), e.$timeout(function() {
											e.$scope.showQuestionnaire = !1
										}, 2e3)
							}, function(t) {
								e.$log.warn("doSubmit data fail", t), e.statusTipService
										.showTip({
													status : e.statusTipService.FAIL,
													message : "问卷提交失败",
													duration : 1500
												})
							})
						}
					}
				}, {
					key : "showAccount",
					value : function(e, t) {
						12 === this.contact.id.length && "A股账户" === t.text
								? (this.showAccount = !0, this.questions[e].questions[1].answerText = this.contact.id, this
										.answerQuestion(1, e,
												this.questions[e],
												this.questions[e].questions[1]), this
										.textAnswerHandle(e,
												this.questions[e].questions[1]))
								: this.showAccount = !1
					}
				}, {
					key : "verifyValidDate",
					value : function() {
						var e = document.getElementById("datePicker"), t = e.value, n = new RegExp("^(?:(?!0000)[0-9]{4}(?:(?:0[1-9]|1[0-2])(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$");
						n.test(t)
								? (this.showDateTips = !1, this.answerQuestion(
										null, 4, this.questions[4], t))
								: this.showDateTips = !0
					}
				}, {
					key : "onLeaveQuestionnaire",
					value : function() {
						var e = this;
						this.statusConfirmService.showConfirm({
									message : "请至少提交一次问卷，无填写问卷记录将无绩效。",
									okBtn : "去意已决",
									cancelBtn : "继续填写",
									backdrop : !0,
									onOk : function() {
										e.$scope.showQuestionnaire = !1
									}
								})
					}
				}]), e
			}();
			t["default"] = i, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t, n) {
				"ngInject";
				return {
					restrict : "E",
					scope : {
						serverAnswers : "=",
						question : "=",
						answer : "=",
						questionId : "=",
						answerId : "=",
						type : "=",
						isValidAccount : "=",
						textAnswerHandle : "&"
					},
					template : '\n            <label class="item-radio" ng-click="answerQuestion()">\n                <input type="radio" name="radio-group">\n                <div class="radio-content">\n                    <div class="item-content disable-pointer-events">{{answer.text}}</div>\n                    <textarea ng-if="answer.type === \'text\' && showTextInput" ng-model="answerText" \n                    ng-keyup="getAnswerText()" ng-blur="verifyValidAccount()" class="answer-textarea" placeholder="{{placeholder}}"></textarea>\n                    <i class="radio-icon"></i>\n                    <p id="error-tips" class="error-tips" ng-show="showErrorTips && !isValidAccount">{{errorTips}}</p>\n                </div>\n            </label>\n        ',
					link : function(i, s, a) {
						i.showTextInput = !1, i.errorTips = "所输入A股账号不正确", i.placeholder = "questionnaireData" === i.type
								? "请填写问题备注"
								: "请填写客户A股账号";
						var o = i.serverAnswers || [];
						_.each(o.answers, function(e) {
							e.question_id === i.questionId + 1
									&& e.selected_index === i.answerId
									? (s.find("i")[0].className = "radio-icon checked", "text" === i.answer.type
											&& (i.showTextInput = !0, n(
													function() {
														s.find("textarea")[0].value = e.text
													})))
									: null === e.selected_index
											&& n(function() {
												document
														.getElementById("datePicker").value = e.text
											})
						}), i.answerQuestion = function() {
							for (var e = angular.element(s[0].parentNode)
									.find("i"), t = angular
									.element(s[0].parentNode).find("textarea"), a = 0, o = e.length; o > a; a++)
								e[a].className = "radio-icon";
							for (var r = 0, c = t.length; c > r; r++)
								t[r] !== s.find("textarea")[0]
										&& (t[r].value = ""), t[r].style.height = "30px";
							if (s.find("i")[0].className = "radio-icon checked", i.showTextInput = !0, "A股账户" === i.question.text) {
								if (s.parent().find("ion-radio-fix")[0] === s[0])
									return void n(function() {
										i.showErrorTips = !1, i.isValidAccount = !0
									});
								i.verifyValidAccount()
							}
						}, i.getAnswerText = function() {
							var t = s.find("textarea")[0].value;
							return "A股账户" === i.question.text
									? (t = t.replace(/[^\d]/g, "").slice(0, 12), void(s
											.find("textarea")[0].value = t))
									: (t.length > 200
											&& (s.find("textarea")[0].value = t
													.substring(0, 200), e
													.showTip({
														status : e.ALERT,
														message : "问题备注不能超过200字！",
														duration : 1500
													})), i.answer.answerText = t, i
											.textAnswerHandle(), void(s
											.find("textarea")[0].style.height = s
											.find("textarea")[0].scrollHeight
											+ "px"))
						}, i.verifyValidAccount = function() {
							"A股账户" === i.question.text && n(function() {
								var e = s.find("textarea")[0].value;
								return "" === e
										? (i.errorTips = "A股账号不能为空", i.showErrorTips = !0, void(i.isValidAccount = !1))
										: void(12 === e.length ? t(
												"validAccount", {
													fragments : {
														account : e
													}
												}).then(function() {
											i.isValidAccount = !0, i.answer.answerText = e, i
													.textAnswerHandle(), s
													.find("textarea")[0].style.height = s
													.find("textarea")[0].scrollHeight
													+ "px"
										}, function() {
											i.errorTips = "所输入A股账号不正确", i.showErrorTips = !0, i.isValidAccount = !1
										})
												: (i.errorTips = "所输入A股账号不正确", i.showErrorTips = !0, i.isValidAccount = !1))
							})
						}
					}
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					}), n.$inject = ["statusTipService", "api", "$timeout"], t["default"] = n, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function s(e, t) {
				"ngInject";
				function n(n, i, s, a) {
					n.vm = a, n.isShowExamCenterMenu = !1, n.showExamCenterMenu = function(
							e) {
						n.$apply(function() {
									n.isShowExamCenterMenu = e
								})
					};
					var o = angular.element, r = void 0;
					r = o(_.find(i.find("li"), function(e) {
								return o(e).hasClass("my-exam-menu")
							})), r.bind("click", function(i) {
						i.stopPropagation(), n.$apply(function() {
									e.showMyExam = !0, n.isShowExamCenterMenu = !1, t
											.selectContact(null)
								})
					}), o(document).bind("click", function() {
								n.showExamCenterMenu(!1)
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/components/exam-center/exam-center.html",
					replace : !0,
					scope : {},
					controller : r,
					link : n
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var a = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), o = n(69);
			s.$inject = ["$rootScope", "managerRecentContactService"];
			var r = function() {
				function e(t, n, s, a, r, c, l) {
					"ngInject";
					i(this, e), o.resolveInject(e, arguments, this), this.examCenter = a
							+ "/?clickeggsToken=" + r.getAuthInfo().token
				}
				return e.$inject = ["$scope", "$rootScope", "$timeout",
						"examCenter", "authorizeService",
						"managerRecentContactService", "orderService"], a(e, [{
					key : "onExamCenter",
					value : function() {
						var e = this;
						this.$timeout(function() {
							return e.$scope.isShowExamCenterMenu = !e.$scope.isShowExamCenterMenu
						})
					}
				}]), e
			}();
			t["default"] = s, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function s() {
				"ngInject";
				function e(e, t, n, i) {
					e.vm = i
				}
				return {
					restrict : "EA",
					templateUrl : "app/components/exam-center/my-exam.html",
					replace : !0,
					scope : {},
					controller : r,
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var a = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), o = n(69), r = function() {
				function e(t, n, s, a, r, c, l, u, d) {
					"ngInject";
					i(this, e), o.resolveInject(e, arguments, this), this.pageNum = 1, this.pageSize = 10, this.myExamList = [], this.showLoading = !0, this.hasExamList = !0;
					var p = r + "/wis18/?clickeggsToken="
							+ c.getAuthInfo().token;
					this.examCenterIcon = p, this.getMyExamList()
				}
				return e.$inject = ["$scope", "$log", "$rootScope", "$timeout",
						"examCenter", "authorizeService", "api", "$http",
						"statusTipService"], a(e, [{
					key : "getMyExamList",
					value : function() {
						var e = this;
						this.showLoading = !0;
						var t = this.statusTipService;
						t.showTip({
									status : t.PROCESSING,
									message : "加载中...",
									duration : 5e3
								}), this.api("getMyExamList", {
									fragments : {
										pageNum : this.pageNum,
										pageSize : this.pageSize
									}
								}).then(function(n) {
							t.hideTip();
							var i = n.data.data;
							return e.showLoading = !1, e.pageNum++, _
									.isEmpty(i)
									? (e.hasExamList = !1, void(e.myExamList = _
											.isEmpty(e.myExamList)
											? !1
											: e.myExamList))
									: (e.myExamList = e.myExamList.concat(i), void e.$log
											.debug("getMyExamList succ", n,
													e.myExamList))
						}, function(n) {
							t.hideTip(), e.$log.warn("getMyExamList fail", n), e.showLoading = !1
						})
					}
				}, {
					key : "loadMoreMyExamList",
					value : function() {
						!this.showLoading
								&& this.hasExamList
								&& (this.$log.debug("loading more"), this
										.getMyExamList())
					}
				}, {
					key : "goExamPage",
					value : function(e) {
						if (e.S_SID) {
							var t = e.S_SID, n = this.examCenter
									+ "/wis18/customerjsp/gfzq/usermain/main/paper.builduserpapercurr.flow?sid="
									+ t;
							this.$log.debug("goExamPage url", n), window.open(
									n, "_blank")
						}
					}
				}]), e
			}();
			t["default"] = s, e.exports = t["default"]
		}, function(e, t, n) {
			"use strict";
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function s() {
				"ngInject";
				function e(e, t, n, i) {
					e.vm = i
				}
				return {
					restrict : "EA",
					templateUrl : "app/client/client-item.html",
					replace : !0,
					scope : {
						info : "=",
						show : "=",
						showDeleteIcon : "="
					},
					controller : r,
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var a = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), o = n(69), r = function() {
				function e(t, n, s, a, r, c) {
					"ngInject";
					i(this, e), o.resolveInject(e, arguments, this), this.$scope = n, this
							.setAvatarStyle(n.info), this.accountInfo = n.info
				}
				return e.$inject = ["$log", "$scope", "$timeout",
						"openAccountService", "UtilFunctions",
						"statusConfirmService"], a(e, [{
					key : "checkMissedAccount",
					value : function(e) {
						return e.missingMinutes <= 0
								|| "altered" === e.currentStep
					}
				}, {
					key : "getMissedAccountCountDown",
					value : function(e) {
						return this.UtilFunctions.millisecondToDate(e)
					}
				}, {
					key : "doOpenAccountStepMap",
					value : function(e) {
						return this.openAccountService.openAccountStepMap[e]
					}
				}, {
					key : "getClientNameOrPhone",
					value : function(e) {
						return e.name ? e.name : e.mobile
								? e.mobile
								: e.clientName
					}
				}, {
					key : "getSurname",
					value : function(e) {
						return e.substring(0, 1)
					}
				}, {
					key : "removeCommitAccountItem",
					value : function(e, t) {
						var n = this;
						t.stopPropagation(), this.statusConfirmService
								.showConfirm({
									message : "请确认该客户无法再跟进开户，删除后如果客户开户状态有更新会重新出现在列表。",
									backdrop : !0,
									onOk : function() {
										n.openAccountService.removeItem(e,
												"commitAccount")
									}
								})
					}
				}, {
					key : "setAvatarStyle",
					value : function(e) {
						var t = ["#ffa64c", "#21d0a1", "#f77d72", "#47bbeb"];
						this.avatarStyle = {
							background : e.avatarBgColor || t[_.random(0, 3)]
						}
					}
				}, {
					key : "isSelectClient",
					value : function() {
						var e = this.openAccountService.getCurrentAccountInfo(), t = !1;
						return e
								&& this.accountInfo
								&& (this.accountInfo._id
										&& this.accountInfo._id === e._id || this.accountInfo.clientPnsId
										&& this.accountInfo.clientPnsId === e.clientPnsId)
								&& (t = !0), t
					}
				}]), e
			}();
			t["default"] = s, e.exports = t["default"]
		}, function(e, t) {
			"use strict";
			function n(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
			}
			function i() {
				"ngInject";
				function e(e, t, n, i) {
					e.vm = i, e.$watch("clientName", function(e, t) {
								e && i.initialize()
							})
				}
				return {
					restrict : "EA",
					templateUrl : "app/contact/booking-account.html",
					replace : !0,
					scope : {
						clientName : "=",
						showBookingClient : "="
					},
					controller : a,
					link : e
				}
			}
			Object.defineProperty(t, "__esModule", {
						value : !0
					});
			var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i
								&& (i.writable = !0), Object.defineProperty(e,
								i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(), a = function() {
				function e(t, i, s, a, o, r, c, l, u) {
					"ngInject";
					n(this, e), a.resolveInject(e, arguments, this)
				}
				return e.$inject = ["$log", "$scope", "$timeout",
						"UtilFunctions", "api", "managerRecentContactService",
						"openAccountService", "modelFactory",
						"sendVirtualCallService"], s(e, [{
					key : "initialize",
					value : function() {
						var e = this;
						this.selectContact = this.managerRecentContactService
								.getSelectedContact(), this.selectedClient = this.openAccountService
								.getCurrentAccountInfo();
						var t = this.selectedClient
								? this.selectedClient.orderId
								: this.selectContact.orderId;
						this.api("getOrderDetail", {
									fragments : {
										orderId : t
									}
								}).then(function(t) {
							e.$log.debug("getOrderDetail succ", t);
							var n = t.data.data;
							n.timestamp = n.timestamp
									? n.timestamp.toDate()
									: 0, e.orderDetail = e.modelFactory
									.createOrderFromPayload(n)
						}, function(t) {
							e.$log.debug("getOrderDetail error", t), e.orderDetail = null
						})
					}
				}, {
					key : "sendVirtualCall",
					value : function() {
						var e = this, t = this.selectedClient
								|| this.selectContact, n = {
							orderType : t.orderType || t.messageType,
							clientPnsId : t.pnsId || t.clientPnsId
						};
						this.sendVirtualCallService.sendCall(n).then(
								function(t) {
									e.$log.debug("sendVirtualCall succ", t)
								}, function(t) {
									e.$log.warn("sendVirtualCall fail", t)
								})
					}
				}]), e
			}();
			t["default"] = i, e.exports = t["default"]
		}]), angular.module("clickeggs.manager.web.config", []).constant(
		"appVersion", "1.2.59").constant("dictionaryPluginUrl",
		"https://ask.gf.com.cn").constant("businessPluginUrl",
		"https://store.gf.com.cn/mobile/hall/jys").constant("terminal",
		"manager_web").constant("buildTime", "2017-07-10 18:39:31").constant(
		"reportMid", "10031002"), angular.module("clickeggs.manager.web").run([
		"$templateCache", function(e) {
			e
					.put(
							"app/client/client-item.html",
							'<div ng-show="show" class="client-item" ng-class="{\'selected\': vm.isSelectClient()}"><div class="client-info-item" ng-class="{\'lost\': vm.checkMissedAccount(info)}"><div class="dot-mark"><span ng-if="info.showRedDot && !vm.checkMissedAccount(info)" class="red-dot"></span></div><div ng-style="vm.avatarStyle" class="client-avatar"><img ng-if="!info.name" src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/client/person-icon_15215fc5cb.png"> <span ng-if="info.name">{{vm.getSurname(info.name)}}</span><div class="lost-mask" ng-if="vm.checkMissedAccount(info)"></div></div><div class="right-inner-text"><div class="info-detail" ng-class="{\'no-tab-type\': !info.tabType}"><div class="phone">{{vm.getClientNameOrPhone(info)}}</div><div ng-if="info.tabType && info.tabType !== \'openedAccount\'" class="status-step">{{vm.doOpenAccountStepMap(info.currentStep)}}</div><div ng-if="info.tabType === \'openedAccount\'" class="status-step">{{info.successTime}}</div></div><div ng-if="info.tabType === \'missingAccount\'"><div ng-if="vm.checkMissedAccount(info)" class="missing-status">已流失</div><div ng-if="!vm.checkMissedAccount(info)" class="missing-status">{{vm.getMissedAccountCountDown(info.missingMinutes)}}</div></div><img ng-if="showDeleteIcon" ng-click="vm.removeCommitAccountItem(info, $event)" class="icon-del" name="del" src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/client/icon-del_117c26a958.png"></div></div></div>'), e
					.put(
							"app/client/client.html",
							'<div class="tabs-content03"><div class="container-center clients"><div class="search-box" ng-class="{\'do-search\': client.showSearchResult()}"><div class="form-area"><input id="searchInput" class="search-input" type="text" ng-model="client.query" ng-focus="client.onInputFocus()" ng-change="client.doSearch()" placeholder="输入客户姓名或手机号码"> <i ng-click="client.toggleSearchIcon()" class="search-btn" ng-class="{\'search-cancel\': client.searchCencle}"></i></div></div><div class="client-tabs" ng-show="!client.showSearchResult()"><div class="tab" ng-class="{\'on-selecting\': client.currentTab === 0}" ng-click="client.setCurrentTab(0);">开户中客户 <span ng-if="client.getOpeningTabNum() > 0" class="red-dot"></span></div><div class="tab" ng-class="{\'on-selecting\': client.currentTab === 1}" ng-click="client.setCurrentTab(1);">开户成功客户 <span ng-if="client.getOpenedTabNum() > 0" class="red-dot opened"></span></div></div><div class="underline"></div><div class="client-contact"><div id="opening-account" ng-if="client.currentTab === 0"><div class="tab-open-account"><div class="tab-title"><div class="click-block" ng-click="client.toggleArrow(\'openingAccount\')"><div class="arrow-icon" ng-class="{\'opening\': client.getArrowStatus(\'openingAccount\')}"></div><div class="tab-title-name">正在开户客户</div></div><div class="tab-title-count">{{client.accountInfoList.openingAccount.length || \'暂无\'}}</div></div><client-item show="client.getArrowStatus(\'openingAccount\')" info="accountInfo" ng-repeat="accountInfo in client.accountInfoList.openingAccount" ng-click="client.goAccountDetail(accountInfo)"></client-item></div><div class="tab-open-account"><div class="tab-title"><div class="click-block" ng-click="client.toggleArrow(\'missingAccount\')"><div class="arrow-icon" ng-class="{\'opening\': client.getArrowStatus(\'missingAccount\')}"></div><div class="tab-title-name missing">即将流失客户</div></div><div class="tab-title-count">{{client.accountInfoList.missingAccount.length - client.lastDayMissedAccountCount || \'暂无\'}}</div></div><client-item show="client.getArrowStatus(\'missingAccount\')" info="accountInfo" ng-repeat="accountInfo in client.accountInfoList.missingAccount" ng-click="client.goAccountDetail(accountInfo)"></client-item></div><div class="tab-open-account"><div class="tab-title"><div class="click-block" ng-click="client.toggleArrow(\'commitAccount\')"><div class="arrow-icon" ng-class="{\'opening\': client.getArrowStatus(\'commitAccount\')}"></div><div class="tab-title-name commited">提交审核客户</div></div><div class="tab-title-count">{{client.accountInfoList.commitAccount.length || \'暂无\'}}</div></div><client-item show="client.getArrowStatus(\'commitAccount\')" show-delete-icon="true" info="accountInfo" ng-repeat="accountInfo in client.accountInfoList.commitAccount" ng-click="client.goAccountDetail(accountInfo)"></client-item></div></div><div id="opened-account" ng-if="client.currentTab === 1"><div class="tab-open-account" scroll-end="" on-scrolled-bottom="client.loadMoreForOpenedAccountInfo()" on-scroll-down="client.loadMoreForOpenedAccountInfo()" ng-if="client.jysOpenedAccountInfo.length > 0"><client-item show="accountInfo" info="accountInfo" ng-repeat="accountInfo in client.jysOpenedAccountInfo" ng-click="client.goAccountDetail(accountInfo)"></client-item></div><div ng-if="!client.jysOpenedAccountInfo || client.jysOpenedAccountInfo.length === 0" class="tab-open-account-none"><div class="no-client-icon"></div><div class="no-result-tips">该分类下目前没有联系人</div></div></div><div class="search-no-result" ng-if="client.noResult && client.showSearchResult()"><div class="no-result-icon"></div><div class="no-result-tips">你输入的关键词暂无搜索结果</div></div><div class="search-result" ng-if="client.searchClients"><div class="search-mask"></div><div class="contact-block"><div ng-repeat="searchData in client.searchClients" id="{{searchData.category}}"><div class="tab-title">{{searchData.category}}</div><client-item show="accountInfo" info="accountInfo" ng-repeat="accountInfo in searchData.list" ng-click="client.goAccountDetail(accountInfo)"></client-item></div></div></div></div></div><div class="container-right client-container-right" ng-if="!showMyExam"><div class="no-client-select">未选择客户</div><div ng-if="client.showClientInfo"><client-info show-client-info="client.showClientInfo" contact="client.selectedClient"></client-info></div><div ng-if="client.showClientTradeInfo"><client-trade-info show-client-trade-info="client.showClientTradeInfo" trade-info="client.selectedClient"></client-trade-info></div><div ng-if="client.showAccountInfo"><account-info contact-info="client.selectedClient" show-account-info="client.showAccountInfo" show-open-account-step="client.showOpenAccountStep"></account-info></div><div ng-if="client.showOpenAccountStep"><open-account-step show-account-info="client.showAccountInfo" show-open-account-step="client.showOpenAccountStep"></open-account-step></div><div ng-if="client.showBookingClient"><booking-account show-booking-account="client.showBookingClient" client-name="client.selectedClient.clientName"></booking-account></div></div><div ng-if="showMyExam" class="container-right notice"><my-exam></my-exam></div></div>'), e
					.put(
							"app/contact/account-info.html",
							'<div class="basic-info"><div class="header"><h3 class="dclient-name">{{account.accountInfo.name || account.accountInfo.mobile}}</h3><span class="close" ng-click="account.onLeaveAccountInfo()"></span></div><div class="grace-content grace-content-restore-account"><ul class="grace-contentul bt0 bb0"><li class="row-fluid"><div class="span3 pull-left">当前开户状态：</div><div class="span9 col-md-offset-4 pull-left link monitor-event" monitorname="当前开户状态" ng-click="account.openAccountStep()">{{account.getStepText()}}</div><div ng-if="account.accountInfo.missingMinutes" class="count-down">{{account.getCountDownTime(account.accountInfo)}}</div></li><li ng-if="account.accountInfo.reason" class="row-fluid"><div class="span3 pull-left">驳回原因：</div><div class="span9 col-md-offset-4 pull-left">{{account.getRejectReasonText()}}</div></li><li class="row-fluid auto-height"><div class="span3 pull-left">开户渠道：</div><div class="span9 col-md-offset-4 pull-left">{{account.accountInfo.source || \'自来\'}}</div></li></ul><h4 class="">服务纪录</h4><div class="record-wrap"><ul class="grace-contentul record bt0 bb0"><li class="row-fluid" ng-repeat="service in account.smsLogs" ng-if="account.smsLogs.length > 0"><div class="pull-left">短信记录：</div><div class="span9 col-md-offset-4 pull-left"><p>{{service.sendTime}}</p><p class="describe">{{service.content}}</p></div></li><li class="row-fluid" ng-if="account.smsLogs.length === 0"><div class="pull-left">短信记录：</div><div class="span9 col-md-offset-4 pull-left"><p>无</p></div></li></ul><div class="service-log-gap"></div><ul class="grace-contentul record bt0 bb0"><li class="row-fluid phone-item" ng-repeat="service in account.callLogs" ng-if="account.callLogs.length > 0"><div class="pull-left">电话记录：</div><div class="span9 col-md-offset-4 pull-left"><p>{{service.time}}</p></div></li><li class="row-fluid phone-item" ng-if="account.callLogs.length === 0"><div class="pull-left">电话记录：</div><div class="span9 col-md-offset-4 pull-left"><p>无</p></div></li></ul></div></div><div ng-if="!contactInfo.isBlackList || contactInfo.isBlackList === \'no\'" class="grace-footer account-footer text-center"><p class="bt1"><button class="btn2 btn-middle monitor-event" monitorname="免费通话" ng-click="account.sendPhoneCall()">免费通话</button> <button class="btn2 btn-middle monitor-event" monitorname="发短信" ng-click="account.openTemplate()">发短信</button> <button class="btn2 btn-middle chat-bida monitor-event" monitorname="必答联系" ng-click="account.chatToClient()">必答联系</button></p></div></div>'), e
					.put(
							"app/contact/booking-account.html",
							'<div class="booking-detail booking-account-info"><div class="grace-header"><span class="grace-headerl"><img src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/client-default_42bec44ee3.png"></span><div class="grace-headerr"><h3 class="client-username marginT15">{{clientName}}</h3></div></div><div class="grace-content"><ul class="grace-contentul grace-contentul-nobot"><li class="row-fluid"><div class="span3 pull-left">预约开户时间：</div><div class="span9 col-md-offset-4 pull-left">{{vm.orderDetail.bookingDate}}</div></li><li class="row-fluid"><div class="span3 pull-left">上门服务地址：</div><div class="span9 col-md-offset-4 pull-left">{{vm.orderDetail.address}}</div></li></ul><ul class="grace-contentul"><li class="row-fluid"><div class="span3 pull-left">服务类型：</div><div class="span9 col-md-offset-4 pull-left orange-color">{{vm.orderDetail.description}}</div></li><li class="row-fluid"><div class="span3 pull-left">渠道：</div><div class="span9 col-md-offset-4 pull-left">{{vm.orderDetail.comeFrom}}</div></li><li class="row-fluid"><div class="span3 pull-left">客户所在地：</div><div class="span9 col-md-offset-4 pull-left"></div></li><li class="row-fluid"><div class="span3 pull-left">所属营业部：</div><div class="span9 col-md-offset-4 pull-left">{{vm.orderDetail.department}}</div></li><li class="row-fluid"><div class="span3 pull-left">时间：</div><div class="span9 col-md-offset-4 pull-left">{{vm.orderDetail.timestamp | date: \'yyyy-MM-dd HH:mm:ss\'}}</div></li></ul></div><div class="grace-footer text-center"><p class="gray-color marginT15 word-nowrap">提示：请联系客户协助开户，此订单在该客户开户成功并审核完毕后1个工作日自动结算奖励。</p><button class="btn btn-large btn-danger btn-block monitor-event" monitorname="免费通话" ng-click="vm.sendVirtualCall()">免费通话</button></div></div>'), e
					.put(
							"app/contact/client-info.html",
							'<div class="basic-info"><div class="header"><h3 class="dclient-name">{{client.customer.name}}</h3><span class="close" ng-click="client.onLeaveClientInfo()"></span></div><div class="grace-content"><div class="grace-tips"><p class="bb1"><span class="tips-icon" ng-class="client.signContractClass"></span><span ng-bind-html="client.signContractMsg"></span></p><p><span class="tips-icon" ng-class="client.signRiskAgreementClass"></span><span>{{client.customer.isSignContract}}</span></p></div><ul class="grace-contentul bt0"><li class="row-fluid"><div class="span3 pull-left">客户星级：</div><div class="span9 col-md-offset-4 pull-left" ng-bind-html="client.customer.stars"></div></li><li class="row-fluid"><div class="span3 pull-left">风险偏好：</div><div class="span9 col-md-offset-4 pull-left orange-color">{{client.customer.risk_level}}</div></li><li class="row-fluid"><div class="span3 pull-left">所属营业部：</div><div class="span9 col-md-offset-4 pull-left">{{client.customer.org_name}}</div></li><li class="row-fluid"><div class="span3 pull-left">客户经理：</div><div class="span9 col-md-offset-4 pull-left">{{client.customer.serv_name}}</div></li><li class="row-fluid" ng-if="client.customer.client_id !== \'\'"><div class="span3 pull-left">客户编号：</div><div class="span9 col-md-offset-4 pull-left">{{client.customer.client_id}}</div></li></ul><div class="property-info"><div class="no-info" ng-if="client.customer.totalAsset === \'\'"></div><ul class="" ng-hide="!client.customer.totalAsset"><li class="property-item" ng-show="client.customer.totalAsset !== \'\'"><span class="total-assets"></span><div class="item-content"><p>总资产(元)</p><p class="assets">{{client.customer.totalAsset}}</p></div></li><li class="property-item" ng-show="client.customer.banlance !== \'\'"><span class="available-assets"></span><div class="item-content"><p>可用资产(元)</p><p class="assets">{{client.customer.banlance}}</p></div></li><li class="property-item" ng-show="client.customer.stockValue !== \'\'"><span class="available-cap"></span><div class="item-content"><p>可用市值(元)</p><p class="assets">{{client.customer.stockValue}}</p></div></li><li class="property-item" ng-show="client.customer.profit !== \'\'"><span class="profit-loss"></span><div class="item-content"><p>本年总盈亏(元)</p><p class="assets">{{client.customer.profit}}</p></div></li><li class="property-item" ng-show="client.customer.yield !== \'\'"><span class="yield"></span><div class="item-content"><p>本年收益率(元)</p><p class="assets">{{client.customer.yield}}</p></div></li></ul></div></div><div class="grace-footer text-center"><p class="bt1"><button class="btn btn-large btn-danger btn-block monitor-event" monitorname="免费通话" ng-disabled="!client.customer.isCall" ng-click="client.sendVirtualCall()">免费通话</button></p></div></div>'), e
					.put(
							"app/contact/client-trade-info.html",
							'<div class="basic-info trade-basic-info"><div class="header"><h3 class="dclient-name"><span ng-if="clientTradeInfo.tradeInfo.custStatus !== \'销户\'">{{clientTradeInfo.tradeInfo.clientName || clientTradeInfo.contactInfo.name}}</span> <span ng-if="clientTradeInfo.tradeInfo.custStatus === \'销户\'">销户客户</span></h3><span class="close" ng-click="clientTradeInfo.onLeaveClientInfo()"></span></div><div class="grace-content trade-info-grace-content" ng-if="clientTradeInfo.tradeInfo && clientTradeInfo.tradeInfo.custStatus !== \'销户\'"><div class="basic-trade-info"><div class="classify-item">基本信息</div><div class="classify-content"><div class="info-item"><div class="name-info">客户星级：</div><div class="star-wrap"><star-span star-count="clientTradeInfo.contactInfo.stars"></star-span></div></div><div class="info-item"><div class="name-info">客户编号：</div><div class="name-content">{{clientTradeInfo.tradeInfo.clientNum}}</div></div><div class="info-item"><div class="name-info">风险等级：</div><div class="name-content">{{clientTradeInfo.tradeInfo.riskGrade || \'-\'}}</div></div><div class="info-item"><div class="name-info">咨询渠道：</div><div class="name-content">{{clientTradeInfo.tradeInfo.channelName}}</div></div><div class="info-item"><div class="name-info">{{clientTradeInfo.signContractFlag}}</div><div class="name-content">{{clientTradeInfo.signContractMsg}}</div></div><div class="info-item"><div class="name-info">{{clientTradeInfo.legalitySignContractFlag}}</div><div class="name-content">《广发证券有问必答投资咨询服务风险揭示书》</div></div></div></div><div class="basic-trade-info"><div class="classify-item">资产信息 <span class="classify-item-tips" ng-click="clientTradeInfo.showAssetInfo()"><img src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/icon-info_4ea370c017.png"> 资产信息说明</span></div><div class="classify-content"><div class="info-item"><div class="name-info">总资产：</div><div class="name-content inner-color">{{clientTradeInfo.tradeInfo.totalAsset}}</div></div><div class="info-item"><div class="name-info">证券资产：</div><div class="name-content">{{clientTradeInfo.tradeInfo.cbsAsset}}</div></div><div class="info-item"><div class="name-info">持仓市值：</div><div class="name-content">{{clientTradeInfo.tradeInfo.positMarket}}</div></div><div class="info-item"><div class="name-info">可营销资产：</div><div class="name-content"><span>{{clientTradeInfo.tradeInfo.marketAsset}}</span><span class="inner-span">预估</span></div></div></div></div><div class="basic-trade-info"><div class="classify-item">业务权限</div><div class="classify-content"><div class="info-item"><div class="name-info">创业板：</div><div class="name-content" ng-bind-html="clientTradeInfo.infoContentHandle(clientTradeInfo.tradeInfo.ifSboard)"></div></div><div class="info-item"><div class="name-info">港股通：</div><div class="name-content" ng-bind-html="clientTradeInfo.infoContentHandle(clientTradeInfo.tradeInfo.ifGanggt)"></div></div><div class="info-item"><div class="name-info">新三板：</div><div class="name-content" ng-bind-html="clientTradeInfo.infoContentHandle(clientTradeInfo.tradeInfo.ifNewThree)"></div></div><div class="info-item"><div class="name-info">简约通：</div><div class="name-content" ng-bind-html="clientTradeInfo.infoContentHandle(clientTradeInfo.tradeInfo.ifJianyt)"></div></div><div class="info-item"><div class="name-info">沪市新股：</div><div class="name-content">可申购 {{clientTradeInfo.tradeInfo.shAmount}} 股</div></div><div class="info-item"><div class="name-info">深市新股：</div><div class="name-content">可申购 {{clientTradeInfo.tradeInfo.szAmount}} 股</div></div></div></div><div class="basic-trade-info"><div class="classify-item">开户信息<span class="classify-item-tips" ng-click="clientTradeInfo.sendSalesDeptInfo()">发送营业部信息</span></div><div class="classify-content"><div class="info-item"><div class="name-info">信用账户：</div><div class="name-content" ng-bind-html="clientTradeInfo.infoContentHandle(clientTradeInfo.tradeInfo.creditFlag)"></div></div><div class="info-item"><div class="name-info font13">股票期权账户：</div><div class="name-content" ng-bind-html="clientTradeInfo.infoContentHandle(clientTradeInfo.tradeInfo.ifOption)"></div></div><div class="info-item"><div class="name-info">开户日期：</div><div class="name-content">{{clientTradeInfo.tradeInfo.accountOpenDate}}</div></div><div class="info-item"><div class="name-info">客户经理：</div><div class="name-content">{{clientTradeInfo.tradeInfo.clientManager || \'-\'}}</div></div><div class="info-item"><div class="name-info">开户营业部：</div><div class="name-content">{{clientTradeInfo.tradeInfo.orgName}}</div></div><div class="info-item"><div class="name-info">营业部电话：</div><div class="name-content">{{clientTradeInfo.tradeInfo.orgTel}}</div></div><div class="info-item"><div class="name-info">营业部地址：</div><div class="name-content">{{clientTradeInfo.tradeInfo.orgAddr}}</div></div></div></div></div><div class="close-account" ng-if="clientTradeInfo.tradeInfo.custStatus === \'销户\'"></div><div class="no-trade-data" ng-if="!clientTradeInfo.tradeInfo"><span class="tips-text">客户资料在开户成功T+2日可查询，目前可使用"免费通话"功能联系客户。</span></div><div ng-if="(!clientTradeInfo.contactInfo.isBlackList || clientTradeInfo.contactInfo.isBlackList === \'no\') && clientTradeInfo.tradeInfo.custStatus !== \'销户\'" class="grace-footer account-footer text-center"><p class="bt1"><button class="btn2 btn-middle monitor-event" monitorname="免费通话" ng-click="clientTradeInfo.sendVirtualCall()">免费通话</button> <button ng-if="clientTradeInfo.tradeInfo" class="btn2 btn-middle chat-bida monitor-event" monitorname="必答联系" ng-click="clientTradeInfo.chatToClient()">必答联系</button></p></div></div>'), e
					.put(
							"app/contact/contact.html",
							'<div class="tabs-content02"><div id="chat-list-scroll" class="container-center"><div class="no-chat" ng-if="contact.allContacts.length === 0"></div><ul class="chat-lists" ng-if="contact.allContacts.length !== 0"><li ng-class="{selected: c === contact.selectedContact}" ng-repeat="c in contact.allContacts" ng-click="contact.onSelectContact(c)"><i class="chat-type" ng-class="contact.getChatHeadImg(c)" ng-style="contact.getContactStyle(c)"></i><p class="client-mes"><span class="client-name">{{c.name}}</span> <span class="star-wrap"><star-span star-count="c.starLevel"></star-span></span> <span class="chat-time">{{contact.getDisplayTime(c)}}</span></p><p class="client-text" ng-bind-html="contact.getDisplayText(c)"></p><span class="unread-mes" ng-if="c.unread > 0">{{c.unread}}</span> <span class="state" ng-if="c.orderState === \'create\'">待审核</span></li></ul></div><div class="container-right" ng-if="contact.selectedContact === null && !showMyExam"><div ng-class="{\'chat-no\': contact.allContacts.length === 0, \'chat-noselect\': contact.allContacts.length !== 0}"></div></div><div class="container-right" ng-class="{\'notice\': contact.selectedContact.type === contact.Contact.TYPE_SYSTEM}" ng-show="contact.getShowChatInterface() && !contact.showNoticeDetail && !showMyExam"><div class="header"><h3 class="dclient-name" ng-click="contact.toggleArrow()">{{contact.getContactName()}} <span class="arrow-icon" ng-class="contact.headerClass" ng-if="contact.showHeaderArrow && !contact.isCloseAccount"></span></h3><span class="group-info monitor-event" monitorname="{{contact.monitorName}}" ng-if="contact.isShowContactDetail()" ng-click="contact.goContactDetail()"></span></div><div ng-class="{\'info-tips\': !contact.isCloseAccount, \'close-account-tips\': contact.isCloseAccount}" ng-if="(contact.headerClass === \'arrow-up\' && contact.showHeaderArrow) || contact.isCloseAccount"><div ng-if="!contact.isCloseAccount"><p ng-show="contact.showClientInfoTips" class="bb1"><span class="tips-icon" ng-class="contact.clientInfo.loginIcon"></span><span>{{contact.clientInfo.loginMsg}}</span></p><p ng-show="contact.showClientInfoTips"><span class="tips-icon" ng-class="contact.clientInfo.signIcon"></span><span>{{contact.clientInfo.signMsg}}</span></p></div><div ng-if="contact.isCloseAccount"><p><span class="tips-icon">!</span><span>该客户已销户！</span></p></div></div><div id="chat-room-scroll" class="scroll-content" ng-class="{\'marginB25\': contact.selectedContact.type === contact.Contact.TYPE_SYSTEM}" scroll-end="" on-scrolled-top="contact.onChatRoomScrollTop()" on-scroll-up="contact.onChatRoomScrollTop()"><div class="rating_context" ng-if="contact.hasMoreHistoryMessages() === false && contact.selectedContact.type !== contact.Contact.TYPE_SYSTEM"><div class="centerSystem_content"><span>没有更多聊天内容了(⊙o⊙)…</span></div></div><ul class="messages"><chat-message user="contact.manager" message="message" messages="contact.selectedContact.messages" do-evaluation="contact.onDoRiskEvaluation()" message-index="$index" resend-message="contact.resendMessage(message)" ng-repeat="message in contact.selectedContact.messages" go-notice-detail="contact.goNoticeDetail(msg)"></chat-message></ul></div><div class="footer" ng-class="{\'showMoreTitle\': contact.showMoreTitle}" ng-if="contact.selectedContact.type !== contact.Contact.TYPE_SYSTEM"><chat-plugin-panel black-list="contact.selectedContact.isBlackList" show-more-title="contact.showMoreTitle" click-send="contact.onClickSend(type, msgObj)"></chat-plugin-panel><textarea id="my-chattextarea" class="my-chattextarea" ng-model="contact.inputMessage" ng-change="contact.onTextInput()" ng-paste="contact.onPasteInput($event)" ng-keydown="contact.onKeyDownInput($event)"></textarea><div class="footer-bottom"><span class="pull-left"><span class="orange-color">[Enter发送]</span> <span ng-if="contact.charsLeft >= 0">您还可以输入<span ng-bind="contact.charsLeft"></span>个字符</span> <span ng-if="contact.charsLeft < 0">发送消息内容超过{{contact.charsMax}}字符，请分条发送</span></span> <span class="pull-right"><button class="btn btn-danger dropdown-toggle" ng-class="{\'btn-sending\': contact.messageSending}" ng-click="contact.onClickSend()" ng-disabled="contact.charsLeft < 0">发送</button></span></div></div><transfer-panel></transfer-panel><quick-comment input-text="contact.inputMessage" message-tag="contact.messageTag"></quick-comment></div><div class="container-right" ng-if="contact.showNoticeDetail && !showMyExam"><div class="flex-tmb"><div class="header"><h3 class="dclient-name back-bg" ng-click="contact.hideNoticeDetail()">{{contact.selectedContact.name}}</h3></div><div id="order-detail-scroll" class="grace-content"><h4 class="grace-title marginT20"><p>{{contact.noticeMsg.content.title}}</p></h4><p class="release-time"><span ng-if="contact.noticeMsg.type !== \'exam\'">发布时间:</span> <span>{{contact.noticeMsg.timestamp | date: \'yyyy-MM-dd HH:mm\'}}</span></p><div class="content" id="html-notice-content"></div><div ng-show="contact.bigImageShow" ng-click="contact.closePreviewModal()"><div class="imgBgMask" ng-style="contact.bgMask"><div style="" ng-style="contact.imgContent"><img id="bigImage" ng-src="{{contact.previewImageSrc}}" alt="" title="温馨提醒：图片过大时请右键选择图片另存为本地再查看！" ng-style="contact.zoomImageWidth"></div></div></div><div ng-if="contact.noticeMsg.type === \'exam\' && contact.noticeMsg.content.data" class="grace-footer text-center"><img class="exam-center-img" ng-src="{{contact.examCenterIcon}}"><p class="bt1"><a class="btn btn-large btn-danger btn-block" target="_blank" ng-href="{{contact.getExamCenterUrl(contact.noticeMsg)}}">前往考试</a></p></div></div></div></div><div class="container-right" ng-if="contact.selectedContact.orderType === contact.Order.TYPE_BOOKING && !showMyExam"><booking-account client-name="contact.selectedContact.name"></booking-account></div><div class="container-right" ng-if="contact.selectedContact.orderType === contact.Order.TYPE_RESTORE && !contact.showOpenAccountStep && !contact.showQuestionnaire"><restore-account-info contact-info="contact.selectedContact" show-questionnaire="contact.showQuestionnaire" show-open-account-step="contact.showOpenAccountStep"></restore-account-info></div><div class="container-right" ng-if="contact.selectedContact.orderType === contact.Order.TYPE_KNOWLEDGE || contact.selectedContact.orderType === contact.Order.TYPE_REPORT"><div class="flex-tmb minH700"><div class="header"><h3 class="dclient-name">{{contact.orderDetail.clientName}}</h3></div><div class="grace-content p0"><iframe ng-src="{{contact.getPluginUrl(contact.orderDetail)}}" name="keyPlugin" class="plugin-frame" frameborder="0"></iframe></div></div></div><div class="container-right" ng-if="contact.showPluginContainer"><plugin-container show-plugin="contact.showPluginContainer" url="contact.pluginUrl"></plugin-container></div><div class="container-right" ng-if="contact.showGroupInfo"><group-info show-group-info="contact.showGroupInfo" group-id="contact.selectedContact.pnsId"></group-info></div><div class="container-right" ng-if="contact.showClientInfo"><client-info show-client-info="contact.showClientInfo" contact="contact.selectedContact"></client-info></div><div class="container-right" ng-if="contact.showAccountInfo"><account-info contact-info="contact.selectedContact" show-account-info="contact.showAccountInfo" show-open-account-step="contact.showOpenAccountStep" mobile-no="contact.selectedContact.id"></account-info></div><div class="container-right" ng-if="contact.showOpenAccountStep"><open-account-step show-account-info="contact.showAccountInfo" show-open-account-step="contact.showOpenAccountStep"></open-account-step></div><div class="container-right" ng-if="contact.showClientTradeInfo"><client-trade-info show-client-trade-info="contact.showClientTradeInfo" trade-info="contact.tradeInfo"></client-trade-info></div><div class="container-right" ng-if="contact.showQuestionnaire"><questionnaire type="\'questionnaireData\'" show-questionnaire="contact.showQuestionnaire" contact-info="contact.selectedContact"></questionnaire></div><div class="container-right" ng-if="contact.selectedContact.orderType === contact.Order.TYPE_OPTION && !contact.showOptionQuestionnaire"><option-info contact-info="contact.selectedContact" show-option-questionnaire="contact.showOptionQuestionnaire"></option-info></div><div class="container-right" ng-if="contact.showOptionQuestionnaire"><questionnaire type="\'optionQuestionnaireData\'" show-questionnaire="contact.showOptionQuestionnaire" contact-info="contact.selectedContact"></questionnaire></div><div class="container-right notice" ng-if="showMyExam"><my-exam></my-exam></div></div>'), e
					.put(
							"app/contact/group-info.html",
							'<div class="basic-info"><div class="header"><h3 class="dclient-name">{{group.groupInfo.groupName}}</h3><span class="close" ng-click="group.onLeaveGroupInfo()"></span></div><div class="group-info-icon"><span class="manager-chatimg"><img class="head-img" src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/group_5faad69fab.png" err-src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/group_5faad69fab.png" ng-src="{{group.groupInfo.iconLink}}"></span> <span class="group-name">{{group.groupInfo.groupName}}</span></div><div class="group-info-tabs"><ul class=""><li class="tabs-item"><span ng-class="{cur: group.curTab === 1}" ng-click="group.curTab = 1">基本资料</span><div class="item-content" ng-show="group.curTab === 1"><ul class="grace-contentul"><li class="row-fluid"><div class="span3 pull-left">群主：</div><div class="span9 col-md-offset-4 pull-left"><span class="manager-chatimg"><img err-src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/user-defaultimg_8180df553a.png" ng-src="{{group.groupOwnImg}}"></span> <span>{{group.groupOwnName}}</span></div></li><li class="row-fluid"><div class="span3 pull-left">创建时间：</div><div class="span9 col-md-offset-4 pull-left">{{group.groupInfo.timestamp | date: \'yyyy-MM-dd\'}}</div></li><li class="row-fluid"><div class="span3 pull-left">群介绍：</div><div class="span9 col-md-offset-4 pull-left">{{group.groupInfo.groupDescription}}</div></li><li class="row-fluid"><div class="span3 pull-left">提示：</div><div class="span9 col-md-offset-4 pull-left">群相关的操作请在金钥匙APP上完成</div></li></ul></div></li><li class="tabs-item"><span ng-class="{cur: group.curTab === 2}" ng-click="group.curTab = 2">群成员</span><div class="item-content" ng-show="group.curTab === 2"><h4>群成员:<span>{{group.groupInfo.members.length}}</span>人</h4><div class="member-wrap"><ul class="group-members" id="group-members"><li ng-repeat="member in group.clientMembers"><span class="manager-chatimg"><img ng-if="member.type === \'jys\'" err-src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/user-defaultimg_8180df553a.png" ng-src="{{member.memberImg}}"> <img ng-if="member.type !== \'jys\'" src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/client-default_42bec44ee3.png" err-src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/client-default_42bec44ee3.png" ng-src="{{member.memberImg}}"></span> <span class="member-name">{{member.memberName}}</span> <span class="client-type" ng-if="member.qualification === \'consultant\'">投顾</span> <span class="client-type" ng-if="member.type !== \'jys\'">客户</span></li></ul></div></div></li></ul></div></div>'), e
					.put(
							"app/contact/open-account-step.html",
							'<div class="basic-info"><div class="header"><h3 class="dclient-name">开户步骤流</h3><span class="close" ng-click="openStep.onLeaveOpenAccountStep()"></span></div><div class="grace-content max-height"><ul class="step-list"><li class="row-fluid" ng-repeat="step in openStep.stepsFlow"><div class="step" ng-class="{\'verify\': step.auditor,\'cur\': step.isFirst, \'single-cur\': step.isLastCurrent, \'last-step\': step.isLast}"><div class="inner"><span>{{step.stepDesc}}</span> <span class="describe">{{step.actionTime}}</span><div ng-if="step.auditor" class="verify-info"><div class="auditor-item auditor-name"><div class="auditor-item-left">审核人员</div><div class="auditor-item-right">{{step.auditor.name}}</div></div><div class="auditor-item erp-id"><div class="auditor-item-left">工号</div><div class="auditor-item-right">{{step.auditor.erp_id}}</div></div><div class="auditor-item user-phone"><div class="auditor-item-left">联系电话</div><div class="auditor-item-right">{{step.auditor.mobile}}</div></div></div></div></div></li></ul></div></div>'), e
					.put(
							"app/contact/option-info.html",
							'<div class="basic-info"><div class="basic-info" ng-if="!vm.showOptionGuide"><div class="header"><h3 class="dclient-name">{{vm.accountInfo.name}}</h3></div><div class="grace-content grace-content-restore-account"><ul class="grace-contentul record bt0 bb0"><li class="row-fluid"><div class="span4 pull-left">抢单时间：</div><div class="span8 col-md-offset-4 pull-left"><p>{{vm.accountInfo.managerTime}}</p></div></li><li class="row-fluid"><div class="span4 pull-left">订单类型：</div><div class="span8 col-md-offset-4 pull-left"><p class="orange-color">{{vm.accountInfo.requestType}}</p></div></li><li class="row-fluid"><div class="span4 pull-left">预约时间：</div><div class="span8 col-md-offset-4 pull-left"><p>{{vm.accountInfo.optionTime}}</p></div></li><li class="row-fluid"><div class="span4 pull-left">客户所属营业部：</div><div class="span8 col-md-offset-4 pull-left"><p>{{vm.accountInfo.clientYyb}}</p></div></li><li class="row-fluid"><div class="span4 pull-left">期权预约开户营业部：</div><div class="span8 col-md-offset-4 pull-left"><p>{{vm.accountInfo.optionYyb}}</p></div></li></ul><h4 class="">服务纪录</h4><div class="record-wrap"><ul class="grace-contentul record bt0"><li class="row-fluid"><div class="span4 pull-left">电话记录：</div><div class="span8 col-md-offset-4 pull-left float-right" ng-repeat="service in vm.accountInfo.callMeTime" ng-if="vm.accountInfo.callMeTime.length > 0"><p>{{service}}</p></div><div ng-if="vm.accountInfo.callMeTime.length === 0" class="span8 col-md-offset-4 pull-left"><p>无</p></div></li><li class="row-fluid"><div class="span4 pull-left">填写问卷：</div><div class="span8 col-md-offset-4 pull-left"><p>{{vm.accountInfo.questStartTime || "无"}}</p></div></li><li class="row-fluid"><div class="span4 pull-left">修改问卷：</div><div class="span8 col-md-offset-4 pull-left float-right" ng-repeat="service in vm.accountInfo.questUpdateTime" ng-if="vm.accountInfo.questUpdateTime.length > 0"><p>{{service}}</p></div><div ng-if="vm.accountInfo.questUpdateTime.length === 0" class="span8 col-md-offset-4 pull-left"><p>无</p></div></li></ul></div><div class="restore-tips"><p class="link" ng-click="vm.showOptionGuide = true"><img src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/icon-info_4ea370c017.png"> 期权开户操作说明</p></div></div><div ng-if="!vm.accountInfo.cancelled" class="grace-footer vm-footer text-center" ng-class="{\'grace-footer-gray\': vm.missAccountSubmitStatus}"><p class="bt1"><button class="btn2 btn-middle" ng-click="vm.sendPhoneCall()">免费通话</button> <button class="btn2 btn-middle questionnaire" ng-click="vm.goToQuestionnaire()">{{vm.getBtnText()}}</button></p></div></div><div class="flex-tmb" ng-if="vm.showOptionGuide"><div class="header"><h3 class="dclient-name">期权开户操作说明</h3><span class="close" ng-click="vm.showOptionGuide = false"></span></div><div id="" class="grace-content guide-content"><p>个人投资者预约开立股票期权账户，需和客户确认并协助完成以下要求：</p><p>（1）客户开户时在我司托管净资产不低于50万人民币，含两融账户净资产。</p><p>（2）客户指定交易在证券公司6个月以上并具备融资融券业务参与资格或者金融期货交易经历；或者在期货公司开户6个月以上并具有金融期货交易经历。（两者二选一符合条件即可）。</p><p>（3）确认客户是否通过交易所期权知识测试，如未通过，可前来营业部现场进行考试或参加交易所统一组织的期权知识水平测试。</p><p>（4）确认客户是否完成期权模拟交易，如未完成，可以协助客户先开立期权仿真账户，并指导客户进行模拟交易，完成相应的模拟交易后，可取得交易所认可的模拟交易经历证明。</p><p>（5）确认客户的风险承受能力在稳健型以上。</p><p>如客户已在其他券商开立期权账户，则只需满足条件1和5。具体详情可以参考<a href="https://cdn.gf.com.cn/clickeggs/common/assets/docs/广发证券股票期权业务操作指引手册（2016年12月编制）.docx" target="_self">《广发证券股票期权业务操作指引手册》</a>。</p></div></div></div>'), e
					.put(
							"app/contact/restore-account-info.html",
							'<div class="basic-info"><div class="header"><h3 class="dclient-name">{{vm.accountInfo.name}}</h3></div><div class="grace-content grace-content-restore-account"><ul class="grace-contentul bt0 bb0"><li class="row-fluid"><div class="span3 pull-left">当前开户状态：</div><div class="span9 col-md-offset-4 pull-left link monitor-event" monitorname="当前开户状态" ng-click="vm.openAccountStep()">{{vm.getStepText()}}</div><div class="count-down">{{vm.countDownTime}}</div></li><li class="reject-item-wrap" ng-if="vm.accountInfo.reason"><div class="detail-item">驳回原因</div><div class="reject-desc">{{vm.getRejectReasonText()}}</div></li></ul><h4 class="">订单信息</h4><div class="record-wrap"><ul class="grace-contentul record bt0 bb0"><li class="row-fluid"><div class="span3 pull-left">抢单时间：</div><div class="span9 col-md-offset-4 pull-left"><p>{{vm.accountInfo.managerTime}}</p></div></li><li class="row-fluid"><div class="span3 pull-left">流失时间：</div><div class="span9 col-md-offset-4 pull-left"><p>{{vm.accountInfo.requestTime}}</p></div></li><li class="row-fluid"><div class="span3 pull-left">开户营业部：</div><div class="span9 col-md-offset-4 pull-left"><p>{{vm.accountInfo.department}}</p></div></li><li class="row-fluid"><div class="span3 pull-left">流失环节：</div><div class="span9 col-md-offset-4 pull-left"><p>{{vm.accountInfo.failureLink}}</p></div></li></ul></div><h4 class="">服务纪录</h4><div class="record-wrap"><ul class="grace-contentul record bt0 bb0"><li class="row-fluid"><div class="span3 pull-left">电话记录：</div><div class="span9 col-md-offset-4 pull-left float-right" ng-repeat="service in vm.accountInfo.callMeTime" ng-if="vm.accountInfo.callMeTime.length > 0"><p>{{service}}</p></div><div ng-if="vm.accountInfo.callMeTime.length === 0" class="span9 col-md-offset-4 pull-left"><p>无</p></div></li><li class="row-fluid"><div class="span3 pull-left">短信记录：</div><div class="span9 col-md-offset-4 pull-left float-right" ng-repeat="service in vm.accountInfo.sendMsgTime" ng-if="vm.accountInfo.sendMsgTime.length > 0"><p>{{service}}</p></div><div ng-if="vm.accountInfo.sendMsgTime.length === 0" class="span9 col-md-offset-4 pull-left"><p>无</p></div></li><li class="row-fluid"><div class="span3 pull-left">填写问卷：</div><div class="span9 col-md-offset-4 pull-left"><p>{{vm.accountInfo.questStartTime || "无"}}</p></div></li><li class="row-fluid"><div class="span3 pull-left">修改问卷：</div><div class="span9 col-md-offset-4 pull-left float-right" ng-repeat="service in vm.accountInfo.questUpdateTime" ng-if="vm.accountInfo.questUpdateTime.length > 0"><p>{{service}}</p></div><div ng-if="vm.accountInfo.questUpdateTime.length === 0" class="span9 col-md-offset-4 pull-left"><p>无</p></div></li></ul></div><div class="client-info-tips"><ul><li class="li-item">抢到单后，需要在24个小时内对客户进行电话联系，帮助客户完成开户；</li><li class="li-item">电话联系客户后，回到金钥匙填写电话回访问卷；</li><li class="li-item">成功挽回客户并且满足绩效条件后，可获得20元奖励。</li></ul></div></div><div ng-if="!vm.accountInfo.cancelled" class="grace-footer vm-footer text-center" ng-class="{\'grace-footer-gray\': vm.missAccountSubmitStatus}"><p class="bt1"><button class="btn2 btn-middle monitor-event" monitorname="免费通话" ng-click="vm.sendPhoneCall()">免费通话</button> <button class="btn2 btn-middle monitor-event" monitorname="发短信" ng-click="vm.sendMobileMsg()">发短信</button> <button class="btn2 btn-middle questionnaire monitor-event" monitorname="{{vm.getBtnText()}}" ng-click="vm.goToQuestionnaire()">{{vm.getBtnText()}}</button></p></div><div ng-if="vm.accountInfo.cancelled" class="grace-footer vm-footer text-center cancelled"><p class="alter-tips">客户已填写推荐人，将由推荐人继续服务，本单如满足开户流失挽回绩效条件，<span class="font-bold">仍可获得奖励</span>。</p></div></div>'), e
					.put(
							"app/key-plugins/plugin-container.html",
							'<div class="flex-tmb minH700"><div class="header"><div class="goback"><img ng-click="plugin.goBack()" src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/back-arrow_c38d51bf96.png"> <span ng-click="plugin.goBack()">返回</span> <span ng-click="plugin.close()" ng-if="plugin.isShowClose" style="margin-left: 12px">关闭</span></div><h3 class="dclient-name">{{plugin.pluginName}}</h3><div ng-if="plugin.isShowRightBtn" class="right-button" ng-click="plugin.rightButtonClick()"><span>发送</span></div></div><div class="grace-content p0"><iframe ng-src="{{plugin.frameUrl}}" name="pluginContainer" class="plugin-frame" frameborder="0"></iframe></div></div>'), e
					.put(
							"app/login/login.html",
							'<div class="login-wrap"><div class="login-header"><div class="login-headerin"><img src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/login/logo_04c6b34a7c.png"></div></div><div class="login-content"><div class="login-contentin"><div class="loginbox"><div class="loginboxin"><div class="login-relativebox"><input type="text" placeholder="请输入OA账号" class="my-input username" ng-model="login.username" ng-focus="login.focusInput(\'tipUsername\')"> <i class="clearbtn clear-username" ng-show="!!login.username" ng-click="login.clearInput(\'username\')"></i></div><p class="tips red-color" ng-show="!!login.tipUsername">{{login.tipUsername}}</p><div class="login-relativebox"><input type="password" placeholder="请输入密码" class="my-input" ng-model="login.password" ng-focus="login.focusInput(\'tipPassword\')"> <i class="clearbtn" ng-show="!!login.password" ng-click="login.clearInput(\'password\')"></i></div><p class="tips red-color" ng-show="!!login.tipPassword">{{login.tipPassword}}</p><div class="login-relativebox"><input type="text" placeholder="请输入验证码" class="my-input captcha" ng-model="login.captcha" ng-focus="login.focusInput(\'tipCaptcha\')" ng-keydown="login.inputKeyDown($event)"> <i class="clearbtn" ng-show="!!login.captcha" ng-click="login.clearInput(\'captcha\')"></i> <img class="captcha-img" ng-src="{{login.captchaUrl}}" ng-click="login.refreshCaptcha()"></div><p class="tips red-color" ng-show="!!login.tipCaptcha">{{login.tipCaptcha}}</p><p class="my-checkboxs"><input type="checkbox" ng-model="login.checkAgree" class="my-checkbox"> <span class="my-checkboxspan">我已阅读并同意<a target="_blank" href="agreement.html">《移动展业保密协议》</a></span></p><button class="btn btn-danger btn-block my-inputlogin" ng-class="{disabled: !login.checkAgree}" ng-disabled="!login.checkAgree" ng-click="login.userLogin()">登录</button></div><div class="mobile-qrcode" ng-mouseenter="login.showQrCode = true"><img src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/login/qrcode_66419acdb3.jpg"> <span class="mobiletxt"><span class="font16">扫描二维码</span><br>下载金钥匙手机版</span></div><span class="big-qrcode" ng-show="login.showQrCode" ng-mouseleave="login.showQrCode = false"><img src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/login/big-ewm_40d5437374.png"></span></div></div></div><div class="login-footer"><div class="login-footerin"><h4>金钥匙网页版</h4>© 广发证券股份有限公司 版权所有 1991 - 2016</div></div></div>'), e
					.put(
							"app/main/main.html",
							'<div class="container"><div class="container-left"><user-state show-star-level="main.showStarLevel"></user-state><a href="#/main/order" ng-click="main.hideMyExam()" class="icon icon-order" ng-class="{\'icon-current\': main.$state.is(\'main.order\')}">抢单</a> <a href="#/main/contact" ng-click="main.hideMyExam()" class="icon icon-chat" ng-class="{\'icon-current\': main.$state.is(\'main.contact\')}">聊天<span class="unread-mes" ng-show="main.totalUnread !== 0">{{main.totalUnread}}</span></a> <a href="#/main/client" ng-click="main.hideMyExam()" id="client-tab" class="icon icon-client" ng-class="{\'icon-current\': main.$state.is(\'main.client\')}">客户<p new-tip="" tip-key="main.client" tip-click-item="client-tab" class="little_tip new-client">NEW</p><p ng-if="main.getOpenAccountRedDot()" class="account-red-dot"></p></a><exam-center></exam-center><user-info show-setting="main.showSetting" on-click-logout="main.onUserLogout()"></user-info></div><div ui-view="" class="tabs-contents"></div><notification></notification><system-setting show-setting="main.showSetting"></system-setting><star-level show-star-level="main.showStarLevel" show-guide="main.showGuide"></star-level><div class="welcome-page" ng-if="main.firstLogin"><div class="welcome-bg"><div class="button-wrap"><button ng-click="main.goStarLevelGuide()">查看星级计算方法</button> <button ng-click="main.closeWelcome()">我知道了</button></div></div><div class="back-drop"></div></div></div>'), e
					.put(
							"app/main/user-info.html",
							'<span class="setting"><span><span class="setting-btn" ng-click="userInfo.onSetting()"><img src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/setting_4e31b1d723.png"></span><div class="setting-list" ng-show="isShowSettingMenu"><span class="arrow-bg"></span><ul><li class="setting-menu"><a href="javascript:"><img src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/setting-icon_0910501774.png"><span>系统设置</span></a></li><li class="logout-menu"><a href="javascript:"><img src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/off_5cddc3e4f1.png"><span>退 出</span></a></li></ul></div></span></span>'), e
					.put(
							"app/main/user-state.html",
							'<div class="manager-info" ng-class="{\'off-line\': !userState.inService}"><img class="myimg" src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/user-defaultimg_8180df553a.png" err-src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/user-defaultimg_8180df553a.png" ng-src="{{userState.manager.avatar}}" ng-click="userState.onState(true)"> <img class="offline-mark" src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/offline-mark_722504b0b0.png"> <span class="user-name">{{userState.manager.name}}</span><div class="user-state" ng-show="isShowStateMenu"><span class="arrow-bg"></span><ul><li class="my-star-level"><h4>服务状态</h4><div class="new-man black-color" ng-click="userState.setOnline()"><span class="online">上线服务</span></div><div class="new-man black-color" ng-click="userState.setOffline()"><span class="offline">暂停服务</span></div></li><li class="my-star-level"><h4>我的星级</h4><div class="new-man" ng-if="userState.isNew" ng-click="userState.goMyStarLevel()"><span class="new-span">新人保护</span></div><span class="user-star" ng-if="!userState.isNew" ng-click="userState.goMyStarLevel()"><span ng-if="!userState.isNumber(userState.newRankLevel)">暂无星级</span><star-span ng-if="userState.isNumber(userState.newRankLevel)" star-count="userState.newRankLevel"></star-span></span></li></ul></div></div>'), e
					.put(
							"app/order/order.html",
							'<div class="tabs-content01"><div class="container-center"><div ng-class="{\'no-order\': !order.isBCManager, \'exam-black\': order.isExamBlack, \'no-order-BC\': order.isBCManager, \'offline\': !order.inService}" ng-show="order.allOrders.length === 0 || !order.inService"><a class="go-exam-center" ng-if="order.isExamBlack" ng-click="order.goExamCenter()" title="我的考试" target="_blank">我的考试</a></div><ul class="chat-lists" ng-show="order.allOrders.length !== 0 && order.inService"><li class="" ng-class="{selected: oneOrder === order.selectedOrder}" ng-repeat="oneOrder in order.allOrders" ng-click="order.onSelectOrder(oneOrder)"><i class="chat-type" ng-class="order.getOrderHeadImg(oneOrder)"></i><p class="client-mes"><span class="client-name">{{oneOrder.clientName}}</span> <span class="star-wrap"><star-span star-count="oneOrder.khxjxf"></star-span></span><span class="chat-time" ng-show="oneOrder.isTransferOnePerson()">{{oneOrder.differTime}}</span></p><p class="client-text"><span class="orange-color" ng-show="!!oneOrder.relationText">{{oneOrder.relationText}}</span> {{oneOrder.description.length > 12 ? (oneOrder.description.substr(0, 12) + \'...\') : oneOrder.description}}</p><button class="btn-chat btn-small btn-danger" ng-show="!oneOrder.isTransferOnePerson()" ng-click="order.onGrabOrder(oneOrder)">抢</button><span class="unread-mes" ng-show="oneOrder.isTransferOnePerson()">{{oneOrder.dispatchPersons}}</span></li></ul></div><div class="container-right" ng-if="!showMyExam"><div class="order-no" ng-show="order.allOrders.length !== 0 && order.selectedOrder === null"></div><div class="order-null" ng-show="order.allOrders.length === 0"></div><div class="order-detail" ng-class="{\'option-detail\': order.selectedOrder.messageType === order.Order.TYPE_OPTION, \'booking-detail\': order.selectedOrder.messageType === order.Order.TYPE_BOOKING || order.selectedOrder.messageType === order.Order.TYPE_RESTORE}" ng-show="order.selectedOrder !== null && order.selectedOrder.messageType !== order.Order.TYPE_KNOWLEDGE && order.selectedOrder.messageType !== order.Order.TYPE_REPORT && !order.showOptionGuide"><div class="grace-header"><span class="grace-headerl"><img src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/client-default_42bec44ee3.png"></span><div class="grace-headerr"><h3 class="client-username marginT15">{{order.selectedOrder.clientName}}</h3><span class="">{{order.selectedOrder.description}}</span></div></div><div class="grace-content"><ul class="grace-contentul grace-contentul-nobot" ng-show="order.selectedOrder.messageType === order.Order.TYPE_BOOKING"><li class="row-fluid"><div class="span3 pull-left">预约开户时间：</div><div class="span9 col-md-offset-4 pull-left">{{order.selectedOrder.bookingDate}}</div></li><li class="row-fluid"><div class="span3 pull-left">上门服务地址：</div><div class="span9 col-md-offset-4 pull-left">{{order.selectedOrder.address}}</div></li></ul><ul class="grace-contentul" ng-show="order.selectedOrder.messageType === order.Order.TYPE_INFORMATION"><li class="row-fluid"><div class="span3 pull-left">服务类型：</div><div class="span9 col-md-offset-4 pull-left orange-color">咨询问答</div></li><li class="row-fluid"><div class="span3 pull-left">客户编号：</div><div class="span9 col-md-offset-4 pull-left">{{order.selectedOrder.clientId}}</div></li><li class="row-fluid"><div class="span3 pull-left">渠道：</div><div class="span9 col-md-offset-4 pull-left">{{order.selectedOrder.comeFrom}}</div></li><li class="row-fluid"><div class="span3 pull-left">客户所在地：</div><div class="span9 col-md-offset-4 pull-left">{{order.selectedOrder.location}}</div></li><li class="row-fluid"><div class="span3 pull-left">所属营业部：</div><div class="span9 col-md-offset-4 pull-left">{{order.selectedOrder.department}}</div></li><li class="row-fluid"><div class="span3 pull-left">时间：</div><div class="span9 col-md-offset-4 pull-left">{{order.selectedOrder.timestamp | date: \'yyyy-MM-dd HH:mm:ss\'}}</div></li></ul><ul class="grace-contentul" ng-show="order.selectedOrder.messageType === order.Order.TYPE_OPEN_ACCOUNT"><li class="row-fluid"><div class="span3 pull-left">服务类型：</div><div class="span9 col-md-offset-4 pull-left orange-color">开户咨询</div></li><li class="row-fluid"><div class="span3 pull-left">渠道：</div><div class="span9 col-md-offset-4 pull-left">{{order.selectedOrder.comeFrom}}</div></li><li class="row-fluid"><div class="span3 pull-left">客户所在地：</div><div class="span9 col-md-offset-4 pull-left">{{order.selectedOrder.location}}</div></li><li class="row-fluid"><div class="span3 pull-left">所属营业部：</div><div class="span9 col-md-offset-4 pull-left">{{order.selectedOrder.department}}</div></li><li class="row-fluid"><div class="span3 pull-left">时间：</div><div class="span9 col-md-offset-4 pull-left">{{order.selectedOrder.timestamp | date: \'yyyy-MM-dd HH:mm:ss\'}}</div></li></ul><div ng-show="order.selectedOrder.messageType === order.Order.TYPE_RESTORE"><ul class="grace-contentul"><li class="row-fluid"><div class="span3 pull-left">开户时间：</div><div class="span9 col-md-offset-4 pull-left orange-color">{{order.selectedOrder.timestamp | date: \'yyyy-MM-dd HH:mm:ss\'}}</div></li><li class="row-fluid"><div class="span3 pull-left">开户营业部：</div><div class="span9 col-md-offset-4 pull-left">{{order.selectedOrder.department}}</div></li><li class="row-fluid"><div class="span3 pull-left">流失环节：</div><div class="span9 col-md-offset-4 pull-left">{{order.selectedOrder.failureLink}}</div></li></ul><div class="restore-tips"><p>温馨提示：</p><p>1.抢到单后，需要在24个小时内对客户进行电话联系，帮助客户完成开户；</p><p>2.电话联系客户后，回到金钥匙填写电话回访问卷；</p><p>3.成功挽回客户并且满足绩效条件后，可获得20元奖励。</p></div></div><div ng-show="order.selectedOrder.messageType === order.Order.TYPE_OPTION"><ul class="grace-contentul"><li class="row-fluid"><div class="span3 pull-left">订单类型：</div><div class="span9 col-md-offset-4 orange-color">{{order.selectedOrder.description}}</div></li><li class="row-fluid"><div class="span3 pull-left">预约时间：</div><div class="span9 col-md-offset-4">{{order.selectedOrder.data.optionDate}}</div></li><li class="row-fluid"><div class="span3 pull-left">客户所属营业部：</div><div class="span9 col-md-offset-4">{{order.selectedOrder.data.clientYyb}}</div></li><li class="row-fluid"><div class="span3 pull-left">期权预约开户营业部：</div><div class="span9 col-md-offset-4">{{order.selectedOrder.data.optionYyb}}</div></li></ul><div class="restore-tips"><p class="link" ng-click="order.showOptionGuide = true"><img src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/icon-info_4ea370c017.png"> 期权开户操作说明</p></div></div></div><div class="grace-footer text-center"><button class="btn btn-large btn-danger btn-block" ng-click="order.onGrabOrder(order.selectedOrder)">抢单</button></div></div><div class="flex-tmb" ng-if="order.selectedOrder.messageType === order.Order.TYPE_KNOWLEDGE || order.selectedOrder.messageType === order.Order.TYPE_REPORT"><div class="header"><h3 class="dclient-name">{{order.selectedOrder.clientName}}</h3></div><div id="order-detail-scroll" class="grace-content"><div class="reason marginT15" ng-if="order.selectedOrder.messageType === order.Order.TYPE_REPORT"><h3 class="text-center reason-header">举报原因</h3><div class="content" ng-bind-html="order.selectedOrder.data.reportReason"></div></div><h4 class="grace-title marginT20"><p>{{order.selectedOrder.description}}</p></h4><p class="creater"><span ng-if="order.selectedOrder.messageType === order.Order.TYPE_KNOWLEDGE">答案创建者:</span> <span ng-if="order.selectedOrder.messageType === order.Order.TYPE_REPORT">举报者:</span> <span ng-if="order.selectedOrder.data.qualification !== \'consultant\'">非</span>投顾</p><div class="content" ng-bind-html="order.showOrderContent(order.selectedOrder.data.orderContent)"></div></div><div class="grace-footer text-center"><p class="bt1"><button class="btn btn-large btn-danger btn-block" ng-click="order.onGrabOrder(order.selectedOrder)">抢单</button></p></div></div><div class="flex-tmb" ng-if="order.showOptionGuide"><div class="header"><h3 class="dclient-name">期权开户操作说明</h3><span class="close" ng-click="order.showOptionGuide = false"></span></div><div id="" class="grace-content guide-content"><p>个人投资者预约开立股票期权账户，需和客户确认并协助完成以下要求：</p><p>（1）客户开户时在我司托管净资产不低于50万人民币，含两融账户净资产。</p><p>（2）客户指定交易在证券公司6个月以上并具备融资融券业务参与资格或者金融期货交易经历；或者在期货公司开户6个月以上并具有金融期货交易经历。（两者二选一符合条件即可）。</p><p>（3）确认客户是否通过交易所期权知识测试，如未通过，可前来营业部现场进行考试或参加交易所统一组织的期权知识水平测试。</p><p>（4）确认客户是否完成期权模拟交易，如未完成，可以协助客户先开立期权仿真账户，并指导客户进行模拟交易，完成相应的模拟交易后，可取得交易所认可的模拟交易经历证明。</p><p>（5）确认客户的风险承受能力在稳健型以上。</p><p>如客户已在其他券商开立期权账户，则只需满足条件1和5。具体详情可以参考<a href="https://cdn.gf.com.cn/clickeggs/common/assets/docs/广发证券股票期权业务操作指引手册（2016年12月编制）.docx" target="_self">《广发证券股票期权业务操作指引手册》</a>。</p></div></div></div><div ng-if="showMyExam" class="container-right notice"><my-exam></my-exam></div></div>'), e
					.put(
							"app/questionnaire/questionnaire.html",
							'<div class="basic-info questionnaire"><div class="header"><h3 class="dclient-name">问卷调查</h3><span class="close" ng-click="vm.onLeaveQuestionnaire()"></span></div><div class="grace-content max-height questionnaire-content"><div ng-repeat="question in vm.questions" class="questionnaire-list"><div id="list-title-{{$index}}" class="list-title">{{question.text}}</div><div id="list-content-{{$index}}" ng-if="!(vm.showAccount && $index === 0)" class="list-content"><ion-radio-fix class="ion-radio-fix" ng-repeat="answer in question.questions" type="type" server-answers="vm.serverAnswers" question="question" answer="answer" question-id="$parent.$index" answer-id="$index" text-answer-handle="vm.textAnswerHandle($parent.$index,answer)" ng-click="vm.answerQuestion($index,$parent.$index,question,answer)" is-valid-account="vm.isValidAccount"></ion-radio-fix></div><p class="account" ng-if="vm.showAccount && $index === 0">{{vm.contact.id}}</p><input id="datePicker" ng-if="question.type === \'date\'" type="text" placeholder="格式：20150513" ng-keyup="vm.verifyValidDate()"><p id="date-tips" class="error-tips" ng-show="question.type === \'date\' && vm.showDateTips">请填写正确时间，如：20150513</p></div></div><div class="grace-footer text-center"><p class="bt1"><button class="questionnaire-btn btn-middle" ng-class="{\'can-post\': vm.canPost && vm.isValidAccount && !vm.showDateTips}" ng-click="vm.doSubmit()">确认提交</button></p></div></div>'), e
					.put(
							"app/components/chat-message/chat-message-image.html",
							'<div><div class="context context-images"><img ng-show="vm.showThumbnail" ng-src="{{vm.realLink}}" ng-click="vm.showPreviewModal()"><div ng-show="vm.showLoading" class="imgLoading"><img src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/spinning-circles_e51b31123a.svg" width="50" class="loadingSvg"></div><img ng-show="vm.showFail" class="load-fail" src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/loading-fail_f7750564d1.png"></div><div ng-show="vm.bigImageShow" ng-click="vm.closePreviewModal()"><div class="imgBgMask" ng-style="vm.bgMask"><div style="" ng-style="vm.imgContent"><img id="bigImage" ng-src="{{vm.previewImageSrc}}" alt="" title="温馨提醒：图片过大时请右键选择图片另存为本地再查看！" ng-style="vm.zoomImageWidth"></div></div></div></div>'), e
					.put(
							"app/components/chat-message/chat-message.html",
							'<li ng-class="vm.liClass" ng-if="vm.isNotDirty(message)"><div class="time-chatli" ng-show="vm.showTimespan">{{message.timestamp | date: \'MM-dd HH:mm\'}}</div><div ng-class="vm.outerClass" ng-if="message.type !== vm.Message.TYPE_NOTICE && message.type !== vm.Message.TYPE_EXAM_CENTER"><span ng-class="vm.chatImg" ng-if="vm.showMsg"><img ng-src="{{vm.headImgUrl}}" err-src="{{vm.defaultAvatarUrl}}"></span><div ng-class="{\'group-msg\': message.isGroup()}"><p ng-if="message.isGroup() && !vm.isSystemLike" ng-class="vm.chatName">{{vm.fromName}}</p><div ng-class="vm.chatMsg" ng-if="vm.showMsg"><span ng-if="vm.isSystemMsg" ng-bind-html="vm.displayText"></span><div ng-if="vm.Message.TYPE_DICTIONARY === message.type"><p class="dictionaryTitle">{{message.content.title}}</p><p ng-bind-html="message.content.content"></p></div><div ng-if="message.type === vm.Message.TYPE_PRODUCT"><img class="product-icon" ng-src="{{vm.ProductType[message.content.type].imgSrc}}"> <a target="_blank" class="product-link" href="" ng-href="{{message.content.url}}"><span>{{vm.ProductType[message.content.type].desc}}</span><br>{{message.content.name}}</a></div><div ng-if="message.type === vm.Message.TYPE_ACCOUNT"><img class="invite-link-img" src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/openAccount_5c80844540.png"><div class="overflow-h"><a target="_blank" href="" ng-href="{{message.content.url}}"><span class="recommend-title" ng-bind-html="vm.openAccountTitledesc"></span> <span class="recommend-content">{{message.content.desc}}</span></a></div></div><chat-message-image ng-if="message.type === vm.Message.TYPE_IMAGE"></chat-message-image><div ng-if="vm.Message.TYPE_RECOMMEND === message.type"><img class="invite-link-img" ng-src="{{message.content.icon}}"><div class="overflow-h"><a target="_blank" href="" ng-click="vm.onTapRecommendMessage($event, message)" ng-href="{{vm.getUrl(message)}}"><span class="recommend-title">{{message.content.name || message.content.title}}</span> <span ng-bind-html="message.content.desc || message.content.content" class="recommend-content"></span></a></div></div><div ng-if="vm.Message.TYPE_INVITE_RATING === message.type"><img class="invite-link-img" ng-src="{{message.content.icon}}"><div class="overflow-h"><span class="recommend-title">{{message.content.name}}</span> <span class="recommend-content">{{message.content.desc}}</span></div></div><div class="msg-tips-icon msg-loading" ng-class="{\'marginT20\': message.isGroup()}" ng-show="message.status === vm.Message.STATUS_SENDING"></div><div class="msg-resend" ng-show="message.status === vm.Message.STATUS_FAIL || message.status === vm.Message.STATUS_STOCK_SERVICE_FAIL" ng-click="vm.resendMessage(message)"><span class="resend-icon">!</span></div><div class="msg-tips-icon msg-stock-fail" ng-class="{\'marginT20\': message.isGroup()}" ng-show="message.status === vm.Message.STATUS_STOCK_FAIL"></div><div class="msg-tips-icon msg-no-send" ng-class="{\'marginT20\': message.isGroup()}" ng-show="message.status === vm.Message.STATUS_NO_SEND"></div></div><div ng-if="message.type === vm.Message.TYPE_TRANSFER"><span ng-if="message.__transferStart">{{message.content.name}}给您转单。附言：{{message.content.note}}</span> <span ng-if="message.__transferEnd">{{message.content}}</span></div><div ng-if="vm.isSystemLike" ng-hide="message.hide"><div class="system-message" ng-if="message.msgType !== \'html\'" ng-bind-html="vm.displayText"></div><div class="system-message" ng-if="message.msgType === \'html\'">{{vm.displayText}} <span class="system-link" ng-click="vm.doClickHandle(message)" ng-bind-html="message.linkText"></span></div></div></div></div><div class="notice-wrap" ng-if="message.type === vm.Message.TYPE_NOTICE || message.type === vm.Message.TYPE_EXAM_CENTER" ng-click="vm.showNoticeDetail(message)"><div class="notice-content"><h4>{{message.content.title}}</h4><p class="notice-summary" ng-bind-html="vm.getLimitStr(message.content.content, 73)"></p></div><p class="details">查看详情</p></div><div class="clear"></div></li>'), e
					.put(
							"app/components/exam-center/exam-center.html",
							'<span class="exam-center-area"><a id="exam-center" ng-click="vm.onExamCenter()" title="考试中心"><span class="exam-center"><img src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/exam-center_4efa5a4401.png"></span></a><div class="exam-center-list" ng-show="isShowExamCenterMenu"><span class="arrow-bg"></span><ul><li class="my-exam-menu"><a href="javascript:"><span>我的考试</span></a></li><li class="my-exercise-menu"><a ng-href="{{vm.examCenter}}" target="_blank"><span>我的练习</span></a></li><li class="my-score-menu"><a ng-href="{{vm.examCenter}}" target="_blank"><span>考试成绩查询</span></a></li></ul></div></span>'), e
					.put(
							"app/components/exam-center/my-exam.html",
							'<div class="basic-info my-exam" ng-click="vm.showNoticeDetail(message)"><div class="header"><h3 class="dclient-name ng-binding" ng-click="contact.toggleArrow()">我的考试</h3></div><div ng-if="vm.myExamList" class="my-exam-wrap" scroll-end="" on-scrolled-bottom="vm.loadMoreMyExamList()" on-scroll-down="vm.loadMoreMyExamList()"><div ng-click="vm.goExamPage(item)" ng-repeat="item in vm.myExamList"><div class="exam-item-wrap"><div class="exam-title">{{item.P_NAME}}</div><div class="exam-content"><p class="exam-time">时间：{{item.G_START}}至{{item.G_END}}</p><p class="status">状态：{{item.UPASS}} 次数{{item.COUNT_TRY}}/{{item.P_TRYS}}</p></div><div class="details">开始考试</div></div></div><div ng-if="!vm.hasExamList" class="no-more-date">没有更多考试了</div></div><div class="my-exam-wrap no-data" ng-if="!vm.myExamList"><div class="no-data-tips">还没有相关的考试呢</div></div><img class="exam-center-img" ng-src="{{vm.examCenterIcon}}"></div>'), e
					.put(
							"app/components/plugins/chat-plugin-panel.html",
							'<div class="footer-title"><div class="item-wrap2" ng-class="{\'showMoreTitle\': showMoreTitle}"><span ng-show="blackList === \'no\'" ng-repeat="item in vm.plugins[1]" class="{{item.iconClass}}" ng-click="vm.onTapPlugin(item, $event)" title="{{item.name}}"><upload-img ng-if="item.iconClass === \'upload-img\'" click-send="vm.parentClickSend(\'image\', msgObj)"></upload-img><span class="new" ng-if="item.isNew">new</span></span></div><div class="item-wrap1"><span ng-show="blackList === \'no\'" ng-repeat="item in vm.plugins[0]" class="{{item.iconClass}}" ng-click="vm.onTapPlugin(item, $event)" title="{{item.name}}"><upload-img ng-if="item.iconClass === \'upload-img\'" click-send="vm.parentClickSend(\'image\', msgObj)"></upload-img><span class="new" ng-if="item.isNew">new</span></span> <span ng-if="vm.plugins[1].length > 0 && blackList === \'no\'" class="icon-more" ng-click="vm.toggleMore()" title="查看更多"><i ng-if="vm.contactHasNew()" class="little_tip"></i></span></div></div>'), e
					.put(
							"app/components/quick-comment/quick-comment.html",
							'<div class="comment-model" ng-show="comment.show"><div class="modal-dialog"><div class="modal-content"><div class="modal-body" ng-show="comment.isShowCommentList"><div class="modal-header">我的常用语 <span class="add-item" ng-click="comment.showAddComment()">+</span></div><div class="comment-wrap"><ul><li class="comment-item" ng-repeat="item in comment.quickComments" ng-click="comment.onSelectComment(item)">{{item.text}}<div class="panel"><span class="move-top" ng-click="comment.moveTopComment(item, $event)"></span> <span class="delete" ng-click="comment.showDeleteConfirm(item, $event)"></span></div></li></ul><div class="no-comment" ng-if="comment.quickComments.length === 0"></div></div></div><div class="modal-body" ng-show="!comment.isShowCommentList"><div class="modal-header">添加常用语</div><div class="content-wrap"><textarea placeholder="请输入常用语" ng-model="comment.addCommentText"></textarea><p class="text-right"><button class="cancel" ng-click="comment.hideAddComment()">取消</button> <button ng-click="comment.addComment()">保存</button></p></div></div></div></div></div>'), e
					.put(
							"app/components/star-level/star-level.html",
							'<div ng-if="showStarLevel"><div class="star-level"><h3 class="title" ng-class="{\'bb1\': showGuide}"><span class="back" ng-if="showGuide" ng-click="starLevel.goStarLevel()">返回</span> <span ng-if="!showGuide">我的星级</span> <span ng-if="showGuide">金钥匙服务人员星级常见问题</span> <span class="close" ng-click="starLevel.onLeaveStarLevel()"></span></h3><div class="content" ng-if="!showGuide"><ul><li><h4 class="my-level">我的星级</h4><div class="content-list"><div class="left">今日 <span ng-if="!starLevel.isNumber(starLevel.formatStateData.newRankLevel)">暂无数据</span> <span class="star-wrap"><star-span ng-if="starLevel.isNumber(starLevel.formatStateData.newRankLevel)" star-count="starLevel.formatStateData.newRankLevel"></star-span></span></div><div class="right">相比昨日 <span ng-if="!starLevel.isNumber(starLevel.formatStateData.newLevelDiff)">{{starLevel.formatStateData.newLevelDiff}}</span> <strong ng-if="starLevel.isNumber(starLevel.formatStateData.newLevelDiff) && +starLevel.stateData.levelDiff > 0">新增</strong> <strong ng-if="starLevel.isNumber(starLevel.formatStateData.newLevelDiff) && +starLevel.stateData.levelDiff < 0">减少</strong> <span class="star-wrap"><star-span ng-if="starLevel.isNumber(starLevel.formatStateData.newLevelDiff)" star-count="starLevel.formatStateData.newLevelDiff"></star-span></span></div></div></li><li><h4 class="my-rating">我的排名</h4><div class="content-list"><div class="left">今日<span>{{starLevel.formatStateData.newRank}}</span></div><div class="right">相比昨日 <span><i class="level-icon" ng-if="starLevel.isNumber(starLevel.formatStateData.newRankDiff)" ng-class="{\'up\': starLevel.formatStateData.newRankDiff > 0, \'down\': starLevel.formatStateData.newRankDiff < 0}"></i> {{starLevel.absFilter(starLevel.formatStateData.newRankDiff)}}</span></div></div></li><li><h4 class="my-score">我的评分</h4><div class="content-list"><div class="left">今日<span>{{starLevel.formatStateData.newTotalScore}}</span></div><div class="right">相比昨日 <span><i class="level-icon" ng-if="starLevel.isNumber(starLevel.formatStateData.newScoreDiff)" ng-class="{\'up\': starLevel.formatStateData.newScoreDiff > 0, \'down\': starLevel.formatStateData.newScoreDiff < 0}"></i> {{starLevel.absFilter(starLevel.formatStateData.newScoreDiff)}}</span></div></div></li></ul><p>● 点击查看<span ng-click="starLevel.goStarLevelGuide()">《金钥匙服务人员星级常见问题》</span></p></div><div class="content" ng-if="showGuide"><div class="guide-content"><h5><span>●</span>“我的星级”是如何计算的？</h5><p>答：每天按服务人员的评分进行排名，然后根据排名给予对应的星级，对应关系如下表所示：</p><table><thead><tr><td>排名</td><td>星级</td></tr></thead><tbody><tr><td>前10%</td><td>五星</td></tr><tr><td>10%-30%</td><td>四星</td></tr><tr><td>30%-80%</td><td>三星</td></tr><tr><td>80%-95%</td><td>二星</td></tr><tr><td>95%-100%</td><td>一星</td></tr></tbody></table><h5><span>●</span>为什么我没有排名和星级？</h5><p>答：为使排名结果更加合理有效，设置了参加排名的门槛条件：最近180天服务的有效订单至少为6单。不满足上述条件的服务人员（处于新人保护期的除外），暂时不能参加排名，也没有星级。</p><h5><span>●</span>“我的评分”是如何计算的？</h5><p>答：“我的评分”主要是根据订单满意度评分、订单响应时间评分、订单量评分等3个因素加权计算得出的，分别说明如下。</p><p>订单满意度评分，是考察2015年1月1日至T-1日的全部有效订单，根据评价计算得出，满意、未评价、不满意3种评价的得分依次降低；</p><p>订单响应时间评分，是考察2015年1月1日至T-1日的全部订单，根据订单响应时间计算得出，响应时间越短，得分越高；</p><p>订单量，是考察最近180天的有效订单，根据有效订单数量计算得出，数量越大，得分越高。</p><p>此外，“我的评分”还会根据订单不满意评价修正、合规和服务质量审查等因素进行调整。</p><h5><span>●</span>什么是“新人保护期”？</h5><p>答：从首次登录金钥匙之日起的30天，为“新人保护期”。处于新人保护期的服务人员，正常计算评分，但不受排名门槛条件的限制，默认为三星级，新人保护期结束后将正常计算星级。</p><h5><span>●</span>客户能看到我的星级、排名、评分么？</h5><p>答：服务人员的星级、排名、评分均不对客户展示。</p><h5><span>●</span>星级、排名、评分多久更新一次？</h5><p>答：每天更新一次，T日的星级、排名、评分，是使用截至T-1日的数据计算得出。</p></div></div></div><div class="back-drop"></div></div>'), e
					.put(
							"app/components/system-setting/system-setting.html",
							'<div ng-if="showSetting"><div class="system-setting"><h3 class="setting-title">系统设置<span class="close" ng-click="setting.close()"></span></h3><div class="setting-wrap"><div class="setting-left"><ul><li ng-if="!setting.isBCManager" ng-click="setting.toggleMenu(1)" ng-class="{\'cur\': setting.showOrderSwitch}">订单开关</li><li ng-click="setting.toggleMenu(2)" ng-class="{\'cur\': !setting.showOrderSwitch || setting.isBCManager}">桌面通知</li></ul></div><div class="setting-right"><div class="order-switch" ng-if="setting.showOrderSwitch && !setting.isBCManager"><h4>订单类型</h4><ul><li>普通咨询订单<span class="ipt-btn" ng-class="{\'cur\': setting.checked.informationPush}" ng-click="setting.toggleInformationPush()"></span></li><li>开户咨询订单<span class="ipt-btn" ng-class="{\'cur\': setting.checked.openAccountPush}" ng-click="setting.toggleOpenAccountPush()"></span></li><li>预约开户订单<span class="ipt-btn" ng-class="{\'cur\': setting.checked.bookingPush}" ng-click="setting.toggleBookingPush()"></span></li><li>开户流失订单<span class="ipt-btn" ng-class="{\'cur\': setting.checked.restorePush}" ng-click="setting.toggleRestorePush()"></span></li><li>知识库审核订单<span class="ipt-btn" ng-class="{\'cur\': setting.checked.askPush}" ng-click="setting.toggleAskPush()"></span></li><li>期权预约开户订单<span class="ipt-btn" ng-class="{\'cur\': setting.checked.optionPush}" ng-click="setting.toggleOptionPush()"></span></li></ul><p>提示:关闭后,将收不到该类型订单,但不影响客户聊天消息发送</p></div><div class="desktop-notice" ng-if="!setting.showOrderSwitch || setting.isBCManager"><ul><li class="bb0">桌面通知<span class="ipt-btn" ng-class="{\'cur\': setting.checked.vibrate}" ng-click="setting.toggleVibrate()"></span></li></ul><ul><li>声音<span class="ipt-btn" ng-class="{\'cur\': setting.checked.sound}" ng-click="setting.toggleSound()"></span></li></ul></div></div></div></div><div class="back-drop"></div></div>'), e
					.put(
							"app/components/transfer-panel/manager-group.html",
							'<li><div class="sort-title"><span class="arrow-tab" ng-class="{\'arrow-tabcur\': mgrGroup.isExpanded}" ng-click="mgrGroup.onClickExpand()"><span>{{group.groupName}}</span> <span class="orange-color">{{mgrGroup.selectedCount + \'/\' + group.onlineCount + \'/\' + group.users.length}}</span></span> <span class="all-choose" ng-class="{chosen: mgrGroup.selectedCount === group.onlineCount && group.onlineCount !== 0}" ng-show="group.users.length > 0" ng-click="mgrGroup.onClickGroup()">全选</span></div><div class="sort-li" ng-show="mgrGroup.isExpanded"><div class="row-fluid"><span class="span6 sort-liperson" ng-repeat="user in group.users" ng-click="mgrGroup.onClickUser(user)" ng-class="{\'person-selected\': user.selected, \'off-line\': !user.online || !user.inService || (user.examBlack && mgrGroup.examBlackLimit)}"><img err-src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/user-defaultimg_8180df553a.png" ng-src="{{mgrGroup.isExpanded ? [mgrGroup.avatarUrl, \'/gmsimg/app/\', user.userId, \'_48x48.jpg\'].join(\'\') : \'\'}}"> <span>{{user.userName}}</span></span></div></div></li>'), e
					.put(
							"app/components/transfer-panel/transfer-panel.html",
							'<div class="tansfer-modal" ng-show="transfer.show"><div class="modal-dialog"><div class="modal-content"><div class="modal-body" ng-show="transfer.showSelectContent"><div class="modal-body-left"><div class="mymodal-header"><span class="tabs-transfer" ng-class="{\'tabs-current\': transfer.showTab === 0}" ng-click="transfer.showTab = 0">同营业组</span> <span class="tabs-transfer" ng-class="{\'tabs-current\': transfer.showTab === 1}" ng-click="transfer.showTab = 1">专家组</span> <span class="search-box"><input type="search" class="search-input" placeholder="请输入姓名" ng-model="transfer.searchText" ng-change="transfer.doSearch()"> <i class="clearbtn" ng-click="transfer.clearSearch()"></i></span></div><div class="mymodal-list myscroll-bar" ng-show="transfer.searchText === \'\' && transfer.showTab === 0"><ul class="my-tansferpersons force-overflow"><manager-group group="group" ng-repeat="group in transfer.bigGroupSales"></manager-group></ul></div><div class="mymodal-list myscroll-bar" ng-show="transfer.searchText === \'\' && transfer.showTab === 1"><ul class="my-tansferpersons force-overflow"><manager-group group="group" ng-repeat="group in transfer.bigGroupExperts"></manager-group></ul></div><div class="mymodal-list myscroll-bar result-box" ng-show="transfer.searchText !== \'\'"><div><p class="result-title">关于“<span>{{transfer.searchText}}</span>”相关搜索结果</p><div class="result-body"><div class="text-center noresult" ng-show="transfer.searchResult.length === 0"><br><img src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/tansfer/notansfer_9503d87985.png"></div><div class="text-center hasresult" ng-show="transfer.searchResult.length !== 0"><div class="sort-li"><div class="row-fluid"><span class="span6 sort-liperson" ng-repeat="user in transfer.searchResult" ng-click="transfer.onClickUser(user)" ng-class="{\'person-selected\': user.selected, \'off-line\': !user.online || !user.inService}"><img err-src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/user-defaultimg_8180df553a.png" ng-src="{{[transfer.avatarUrl, \'/gmsimg/app/\', user.userId, \'_48x48.jpg\'].join(\'\')}}"> <span>{{user.userName}}</span></span></div></div></div></div></div></div></div><div class="modal-body-right"><div class="modal-body-right-no" ng-show="transfer.selectedUsers.length === 0"></div><div class="modal-body-right-in" ng-show="transfer.selectedUsers.length > 0"><p class="right-title text-center">已选择转单对象</p><div class="rightsort-li sort-li myscroll-bar"><div class="row-fluid force-overflow"><span class="span11 sort-liperson" ng-repeat="user in transfer.selectedUsers" ng-class="{\'off-line\': !user.online}"><img err-src="https://cdn.gfzq.cn/jys_client/manager_web/assets/images/chat/user-defaultimg_8180df553a.png" ng-src="{{[transfer.avatarUrl, \'/gmsimg/app/\', user.userId, \'_48x48.jpg\'].join(\'\')}}"> <span>{{user.userName}}</span> <i class="delete-btn" ng-click="transfer.onClickUser(user)"></i></span></div></div><div class="confirm-btn"><button ng-click="transfer.onClickSelectDone()">确定</button></div></div></div></div><div class="modal-body transfer-inputbox" ng-show="!transfer.showSelectContent"><div class="mymodal-header text-center">转让订单</div><div class="transfer-inputs"><textarea class="transfer-input" placeholder="请简要描述问题" ng-model="transfer.transferText"></textarea><div class="text-right"><button class="btn btn-blue" ng-click="transfer.onDoTransfer()">转让</button> <button class="btn btn-chat" ng-click="transfer.onBackToSelect()">返回</button></div></div></div></div></div></div>');

		}]);