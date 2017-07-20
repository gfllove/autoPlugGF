!
function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
        e.io = t()
    }
}(function () {
    var t;
    return function e(t, n, r) {
        function i(a, s) {
            if (!n[a]) {
                if (!t[a]) {
                    var u = "function" == typeof require && require;
                    if (!s && u) return u(a, !0);
                    if (o) return o(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND",
                    c
                }
                var l = n[a] = {
                    exports: {}
                };
                t[a][0].call(l.exports, function (e) {
                    var n = t[a][1][e];
                    return i(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
        return i
    }({
        1: [function (t, e, n) {
            e.exports = t("./lib/")
        },
        {
            "./lib/": 2
        }],
        2: [function (t, e, n) {
            e.exports = t("./socket"),
            e.exports.parser = t("engine.io-parser")
        },
        {
            "./socket": 3,
            "engine.io-parser": 19
        }],
        3: [function (t, e, n) {
            (function (n) {
                function r(t, e) {
                    if (!(this instanceof r)) return new r(t, e);
                    e = e || {},
                    t && "object" == typeof t && (e = t, t = null),
                    t ? (t = l(t), e.hostname = t.host, e.secure = "https" == t.protocol || "wss" == t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = l(e.host).host),
                    this.secure = null != e.secure ? e.secure : n.location && "https:" == location.protocol,
                    e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
                    this.agent = e.agent || !1,
                    this.hostname = e.hostname || (n.location ? location.hostname : "localhost"),
                    this.port = e.port || (n.location && location.port ? location.port : this.secure ? 443 : 80),
                    this.query = e.query || {},
                    "string" == typeof this.query && (this.query = h.decode(this.query)),
                    this.upgrade = !1 !== e.upgrade,
                    this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/",
                    this.forceJSONP = !! e.forceJSONP,
                    this.jsonp = !1 !== e.jsonp,
                    this.forceBase64 = !! e.forceBase64,
                    this.enablesXDR = !! e.enablesXDR,
                    this.timestampParam = e.timestampParam || "t",
                    this.timestampRequests = e.timestampRequests,
                    this.transports = e.transports || ["polling", "websocket"],
                    this.readyState = "",
                    this.writeBuffer = [],
                    this.policyPort = e.policyPort || 843,
                    this.rememberUpgrade = e.rememberUpgrade || !1,
                    this.binaryType = null,
                    this.onlyBinaryUpgrades = e.onlyBinaryUpgrades,
                    this.perMessageDeflate = !1 !== e.perMessageDeflate ? e.perMessageDeflate || {} : !1,
                    !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
                    this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024),
                    this.pfx = e.pfx || null,
                    this.key = e.key || null,
                    this.passphrase = e.passphrase || null,
                    this.cert = e.cert || null,
                    this.ca = e.ca || null,
                    this.ciphers = e.ciphers || null,
                    this.rejectUnauthorized = void 0 === e.rejectUnauthorized ? null : e.rejectUnauthorized;
                    var i = "object" == typeof n && n;
                    i.global === i && e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders),
                    this.open()
                }
                function i(t) {
                    var e = {};
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                }
                var o = t("./transports"),
                    a = t("component-emitter"),
                    s = t("debug")("engine.io-client:socket"),
                    u = t("indexof"),
                    c = t("engine.io-parser"),
                    l = t("parseuri"),
                    f = t("parsejson"),
                    h = t("parseqs");
                e.exports = r,
                r.priorWebsocketSuccess = !1,
                a(r.prototype),
                r.protocol = c.protocol,
                r.Socket = r,
                r.Transport = t("./transport"),
                r.transports = t("./transports"),
                r.parser = t("engine.io-parser"),
                r.prototype.createTransport = function (t) {
                        s('creating transport "%s"', t);
                        var e = i(this.query);
                        e.EIO = c.protocol,
                        e.transport = t,
                        this.id && (e.sid = this.id);
                        var n = new o[t]({
                            agent: this.agent,
                            hostname: this.hostname,
                            port: this.port,
                            secure: this.secure,
                            path: this.path,
                            query: e,
                            forceJSONP: this.forceJSONP,
                            jsonp: this.jsonp,
                            forceBase64: this.forceBase64,
                            enablesXDR: this.enablesXDR,
                            timestampRequests: this.timestampRequests,
                            timestampParam: this.timestampParam,
                            policyPort: this.policyPort,
                            socket: this,
                            pfx: this.pfx,
                            key: this.key,
                            passphrase: this.passphrase,
                            cert: this.cert,
                            ca: this.ca,
                            ciphers: this.ciphers,
                            rejectUnauthorized: this.rejectUnauthorized,
                            perMessageDeflate: this.perMessageDeflate,
                            extraHeaders: this.extraHeaders
                        });
                        return n
                    },
                r.prototype.open = function () {
                        var t;
                        if (this.rememberUpgrade && r.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket")) t = "websocket";
                        else {
                            if (0 === this.transports.length) {
                                var e = this;
                                return void setTimeout(function () {
                                    e.emit("error", "No transports available")
                                }, 0)
                            }
                            t = this.transports[0]
                        }
                        this.readyState = "opening";
                        try {
                            t = this.createTransport(t)
                        } catch (n) {
                            return this.transports.shift(),
                            void this.open()
                        }
                        t.open(),
                        this.setTransport(t)
                    },
                r.prototype.setTransport = function (t) {
                        s("setting transport %s", t.name);
                        var e = this;
                        this.transport && (s("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()),
                        this.transport = t,
                        t.on("drain", function () {
                            e.onDrain()
                        }).on("packet", function (t) {
                            e.onPacket(t)
                        }).on("error", function (t) {
                            e.onError(t)
                        }).on("close", function () {
                            e.onClose("transport close")
                        })
                    },
                r.prototype.probe = function (t) {
                        function e() {
                            if (h.onlyBinaryUpgrades) {
                                var e = !this.supportsBinary && h.transport.supportsBinary;
                                f = f || e
                            }
                            f || (s('probe transport "%s" opened', t), l.send([{
                                type: "ping",
                                data: "probe"
                            }]), l.once("packet", function (e) {
                                if (!f) if ("pong" == e.type && "probe" == e.data) {
                                    if (s('probe transport "%s" pong', t), h.upgrading = !0, h.emit("upgrading", l), !l) return;
                                    r.priorWebsocketSuccess = "websocket" == l.name,
                                    s('pausing current transport "%s"', h.transport.name),
                                    h.transport.pause(function () {
                                        f || "closed" != h.readyState && (s("changing transport and sending upgrade packet"), c(), h.setTransport(l), l.send([{
                                            type: "upgrade"
                                        }]), h.emit("upgrade", l), l = null, h.upgrading = !1, h.flush())
                                    })
                                } else {
                                    s('probe transport "%s" failed', t);
                                    var n = new Error("probe error");
                                    n.transport = l.name,
                                    h.emit("upgradeError", n)
                                }
                            }))
                        }
                        function n() {
                            f || (f = !0, c(), l.close(), l = null)
                        }
                        function i(e) {
                            var r = new Error("probe error: " + e);
                            r.transport = l.name,
                            n(),
                            s('probe transport "%s" failed because of error: %s', t, e),
                            h.emit("upgradeError", r)
                        }
                        function o() {
                            i("transport closed")
                        }
                        function a() {
                            i("socket closed")
                        }
                        function u(t) {
                            l && t.name != l.name && (s('"%s" works - aborting "%s"', t.name, l.name), n())
                        }
                        function c() {
                            l.removeListener("open", e),
                            l.removeListener("error", i),
                            l.removeListener("close", o),
                            h.removeListener("close", a),
                            h.removeListener("upgrading", u)
                        }
                        s('probing transport "%s"', t);
                        var l = this.createTransport(t, {
                            probe: 1
                        }),
                            f = !1,
                            h = this;
                        r.priorWebsocketSuccess = !1,
                        l.once("open", e),
                        l.once("error", i),
                        l.once("close", o),
                        this.once("close", a),
                        this.once("upgrading", u),
                        l.open()
                    },
                r.prototype.onOpen = function () {
                        if (s("socket open"), this.readyState = "open", r.priorWebsocketSuccess = "websocket" == this.transport.name, this.emit("open"), this.flush(), "open" == this.readyState && this.upgrade && this.transport.pause) {
                            s("starting upgrade probes");
                            for (var t = 0, e = this.upgrades.length; e > t; t++) this.probe(this.upgrades[t])
                        }
                    },
                r.prototype.onPacket = function (t) {
                        if ("opening" == this.readyState || "open" == this.readyState) switch (s('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
                        case "open":
                            this.onHandshake(f(t.data));
                            break;
                        case "pong":
                            this.setPing(),
                            this.emit("pong");
                            break;
                        case "error":
                            var e = new Error("server error");
                            e.code = t.data,
                            this.onError(e);
                            break;
                        case "message":
                            this.emit("data", t.data),
                            this.emit("message", t.data)
                        } else s('packet received with socket readyState "%s"', this.readyState)
                    },
                r.prototype.onHandshake = function (t) {
                        this.emit("handshake", t),
                        this.id = t.sid,
                        this.transport.query.sid = t.sid,
                        this.upgrades = this.filterUpgrades(t.upgrades),
                        this.pingInterval = t.pingInterval,
                        this.pingTimeout = t.pingTimeout,
                        this.onOpen(),
                        "closed" != this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
                    },
                r.prototype.onHeartbeat = function (t) {
                        clearTimeout(this.pingTimeoutTimer);
                        var e = this;
                        e.pingTimeoutTimer = setTimeout(function () {
                            "closed" != e.readyState && e.onClose("ping timeout")
                        }, t || e.pingInterval + e.pingTimeout)
                    },
                r.prototype.setPing = function () {
                        var t = this;
                        clearTimeout(t.pingIntervalTimer),
                        t.pingIntervalTimer = setTimeout(function () {
                            s("writing ping packet - expecting pong within %sms", t.pingTimeout),
                            t.ping(),
                            t.onHeartbeat(t.pingTimeout)
                        }, t.pingInterval)
                    },
                r.prototype.ping = function () {
                        var t = this;
                        this.sendPacket("ping", function () {
                            t.emit("ping")
                        })
                    },
                r.prototype.onDrain = function () {
                        this.writeBuffer.splice(0, this.prevBufferLen),
                        this.prevBufferLen = 0,
                        0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
                    },
                r.prototype.flush = function () {
                        "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (s("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
                    },
                r.prototype.write = r.prototype.send = function (t, e, n) {
                        return this.sendPacket("message", t, e, n),
                        this
                    },
                r.prototype.sendPacket = function (t, e, n, r) {
                        if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" != this.readyState && "closed" != this.readyState) {
                            n = n || {},
                            n.compress = !1 !== n.compress;
                            var i = {
                                type: t,
                                data: e,
                                options: n
                            };
                            this.emit("packetCreate", i),
                            this.writeBuffer.push(i),
                            r && this.once("flush", r),
                            this.flush()
                        }
                    },
                r.prototype.close = function () {
                        function t() {
                            r.onClose("forced close"),
                            s("socket closing - telling transport to close"),
                            r.transport.close()
                        }
                        function e() {
                            r.removeListener("upgrade", e),
                            r.removeListener("upgradeError", e),
                            t()
                        }
                        function n() {
                            r.once("upgrade", e),
                            r.once("upgradeError", e)
                        }
                        if ("opening" == this.readyState || "open" == this.readyState) {
                            this.readyState = "closing";
                            var r = this;
                            this.writeBuffer.length ? this.once("drain", function () {
                                this.upgrading ? n() : t()
                            }) : this.upgrading ? n() : t()
                        }
                        return this
                    },
                r.prototype.onError = function (t) {
                        s("socket error %j", t),
                        r.priorWebsocketSuccess = !1,
                        this.emit("error", t),
                        this.onClose("transport error", t)
                    },
                r.prototype.onClose = function (t, e) {
                        if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
                            s('socket close with reason: "%s"', t);
                            var n = this;
                            clearTimeout(this.pingIntervalTimer),
                            clearTimeout(this.pingTimeoutTimer),
                            this.transport.removeAllListeners("close"),
                            this.transport.close(),
                            this.transport.removeAllListeners(),
                            this.readyState = "closed",
                            this.id = null,
                            this.emit("close", t, e),
                            n.writeBuffer = [],
                            n.prevBufferLen = 0
                        }
                    },
                r.prototype.filterUpgrades = function (t) {
                        for (var e = [], n = 0, r = t.length; r > n; n++)~u(this.transports, t[n]) && e.push(t[n]);
                        return e
                    }
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        },
        {
            "./transport": 4,
            "./transports": 5,
            "component-emitter": 15,
            debug: 17,
            "engine.io-parser": 19,
            indexof: 23,
            parsejson: 26,
            parseqs: 27,
            parseuri: 28
        }],
        4: [function (t, e, n) {
            function r(t) {
                this.path = t.path,
                this.hostname = t.hostname,
                this.port = t.port,
                this.secure = t.secure,
                this.query = t.query,
                this.timestampParam = t.timestampParam,
                this.timestampRequests = t.timestampRequests,
                this.readyState = "",
                this.agent = t.agent || !1,
                this.socket = t.socket,
                this.enablesXDR = t.enablesXDR,
                this.pfx = t.pfx,
                this.key = t.key,
                this.passphrase = t.passphrase,
                this.cert = t.cert,
                this.ca = t.ca,
                this.ciphers = t.ciphers,
                this.rejectUnauthorized = t.rejectUnauthorized,
                this.extraHeaders = t.extraHeaders
            }
            var i = t("engine.io-parser"),
                o = t("component-emitter");
            e.exports = r,
            o(r.prototype),
            r.prototype.onError = function (t, e) {
                    var n = new Error(t);
                    return n.type = "TransportError",
                    n.description = e,
                    this.emit("error", n),
                    this
                },
            r.prototype.open = function () {
                    return ("closed" == this.readyState || "" == this.readyState) && (this.readyState = "opening", this.doOpen()),
                    this
                },
            r.prototype.close = function () {
                    return ("opening" == this.readyState || "open" == this.readyState) && (this.doClose(), this.onClose()),
                    this
                },
            r.prototype.send = function (t) {
                    if ("open" != this.readyState) throw new Error("Transport not open");
                    this.write(t)
                },
            r.prototype.onOpen = function () {
                    this.readyState = "open",
                    this.writable = !0,
                    this.emit("open")
                },
            r.prototype.onData = function (t) {
                    var e = i.decodePacket(t, this.socket.binaryType);
                    this.onPacket(e)
                },
            r.prototype.onPacket = function (t) {
                    this.emit("packet", t)
                },
            r.prototype.onClose = function () {
                    this.readyState = "closed",
                    this.emit("close")
                }
        },
        {
            "component-emitter": 15,
            "engine.io-parser": 19
        }],
        5: [function (t, e, n) {
            (function (e) {
                function r(t) {
                    var n, r = !1,
                        s = !1,
                        u = !1 !== t.jsonp;
                    if (e.location) {
                            var c = "https:" == location.protocol,
                                l = location.port;
                            l || (l = c ? 443 : 80),
                            r = t.hostname != location.hostname || l != t.port,
                            s = t.secure != c
                        }
                    if (t.xdomain = r, t.xscheme = s, n = new i(t), "open" in n && !t.forceJSONP) return new o(t);
                    if (!u) throw new Error("JSONP disabled");
                    return new a(t)
                }
                var i = t("xmlhttprequest-ssl"),
                    o = t("./polling-xhr"),
                    a = t("./polling-jsonp"),
                    s = t("./websocket");
                n.polling = r,
                n.websocket = s
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        },
        {
            "./polling-jsonp": 6,
            "./polling-xhr": 7,
            "./websocket": 9,
            "xmlhttprequest-ssl": 10
        }],
        6: [function (t, e, n) {
            (function (n) {
                function r() {}
                function i(t) {
                    o.call(this, t),
                    this.query = this.query || {},
                    s || (n.___eio || (n.___eio = []), s = n.___eio),
                    this.index = s.length;
                    var e = this;
                    s.push(function (t) {
                        e.onData(t)
                    }),
                    this.query.j = this.index,
                    n.document && n.addEventListener && n.addEventListener("beforeunload", function () {
                        e.script && (e.script.onerror = r)
                    }, !1)
                }
                var o = t("./polling"),
                    a = t("component-inherit");
                e.exports = i;
                var s, u = /\n/g,
                    c = /\\n/g;
                a(i, o),
                i.prototype.supportsBinary = !1,
                i.prototype.doClose = function () {
                        this.script && (this.script.parentNode.removeChild(this.script), this.script = null),
                        this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null),
                        o.prototype.doClose.call(this)
                    },
                i.prototype.doPoll = function () {
                        var t = this,
                            e = document.createElement("script");
                        this.script && (this.script.parentNode.removeChild(this.script), this.script = null),
                        e.async = !0,
                        e.src = this.uri(),
                        e.onerror = function (e) {
                                t.onError("jsonp poll error", e)
                            };
                        var n = document.getElementsByTagName("script")[0];
                        n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e),
                        this.script = e;
                        var r = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                        r && setTimeout(function () {
                                var t = document.createElement("iframe");
                                document.body.appendChild(t),
                                document.body.removeChild(t)
                            }, 100)
                    },
                i.prototype.doWrite = function (t, e) {
                        function n() {
                            r(),
                            e()
                        }
                        function r() {
                            if (i.iframe) try {
                                i.form.removeChild(i.iframe)
                            } catch (t) {
                                i.onError("jsonp polling iframe removal error", t)
                            }
                            try {
                                var e = '<iframe src="javascript:0" name="' + i.iframeId + '">';
                                o = document.createElement(e)
                            } catch (t) {
                                o = document.createElement("iframe"),
                                o.name = i.iframeId,
                                o.src = "javascript:0"
                            }
                            o.id = i.iframeId,
                            i.form.appendChild(o),
                            i.iframe = o
                        }
                        var i = this;
                        if (!this.form) {
                            var o, a = document.createElement("form"),
                                s = document.createElement("textarea"),
                                l = this.iframeId = "eio_iframe_" + this.index;
                            a.className = "socketio",
                            a.style.position = "absolute",
                            a.style.top = "-1000px",
                            a.style.left = "-1000px",
                            a.target = l,
                            a.method = "POST",
                            a.setAttribute("accept-charset", "utf-8"),
                            s.name = "d",
                            a.appendChild(s),
                            document.body.appendChild(a),
                            this.form = a,
                            this.area = s
                        }
                        this.form.action = this.uri(),
                        r(),
                        t = t.replace(c, "\\\n"),
                        this.area.value = t.replace(u, "\\n");
                        try {
                            this.form.submit()
                        } catch (f) {}
                        this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
                            "complete" == i.iframe.readyState && n()
                        } : this.iframe.onload = n
                    }
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        },
        {
            "./polling": 8,
            "component-inherit": 16
        }],
        7: [function (t, e, n) {
            (function (n) {
                function r() {}
                function i(t) {
                    if (u.call(this, t), n.location) {
                        var e = "https:" == location.protocol,
                            r = location.port;
                        r || (r = e ? 443 : 80),
                        this.xd = t.hostname != n.location.hostname || r != t.port,
                        this.xs = t.secure != e
                    } else this.extraHeaders = t.extraHeaders
                }
                function o(t) {
                    this.method = t.method || "GET",
                    this.uri = t.uri,
                    this.xd = !! t.xd,
                    this.xs = !! t.xs,
                    this.async = !1 !== t.async,
                    this.data = void 0 != t.data ? t.data : null,
                    this.agent = t.agent,
                    this.isBinary = t.isBinary,
                    this.supportsBinary = t.supportsBinary,
                    this.enablesXDR = t.enablesXDR,
                    this.pfx = t.pfx,
                    this.key = t.key,
                    this.passphrase = t.passphrase,
                    this.cert = t.cert,
                    this.ca = t.ca,
                    this.ciphers = t.ciphers,
                    this.rejectUnauthorized = t.rejectUnauthorized,
                    this.extraHeaders = t.extraHeaders,
                    this.create()
                }
                function a() {
                    for (var t in o.requests) o.requests.hasOwnProperty(t) && o.requests[t].abort()
                }
                var s = t("xmlhttprequest-ssl"),
                    u = t("./polling"),
                    c = t("component-emitter"),
                    l = t("component-inherit"),
                    f = t("debug")("engine.io-client:polling-xhr");
                e.exports = i,
                e.exports.Request = o,
                l(i, u),
                i.prototype.supportsBinary = !0,
                i.prototype.request = function (t) {
                        return t = t || {},
                        t.uri = this.uri(),
                        t.xd = this.xd,
                        t.xs = this.xs,
                        t.agent = this.agent || !1,
                        t.supportsBinary = this.supportsBinary,
                        t.enablesXDR = this.enablesXDR,
                        t.pfx = this.pfx,
                        t.key = this.key,
                        t.passphrase = this.passphrase,
                        t.cert = this.cert,
                        t.ca = this.ca,
                        t.ciphers = this.ciphers,
                        t.rejectUnauthorized = this.rejectUnauthorized,
                        t.extraHeaders = this.extraHeaders,
                        new o(t)
                    },
                i.prototype.doWrite = function (t, e) {
                        var n = "string" != typeof t && void 0 !== t,
                            r = this.request({
                                method: "POST",
                                data: t,
                                isBinary: n
                            }),
                            i = this;
                        r.on("success", e),
                        r.on("error", function (t) {
                                i.onError("xhr post error", t)
                            }),
                        this.sendXhr = r
                    },
                i.prototype.doPoll = function () {
                        f("xhr poll");
                        var t = this.request(),
                            e = this;
                        t.on("data", function (t) {
                                e.onData(t)
                            }),
                        t.on("error", function (t) {
                                e.onError("xhr poll error", t)
                            }),
                        this.pollXhr = t
                    },
                c(o.prototype),
                o.prototype.create = function () {
                        var t = {
                            agent: this.agent,
                            xdomain: this.xd,
                            xscheme: this.xs,
                            enablesXDR: this.enablesXDR
                        };
                        t.pfx = this.pfx,
                        t.key = this.key,
                        t.passphrase = this.passphrase,
                        t.cert = this.cert,
                        t.ca = this.ca,
                        t.ciphers = this.ciphers,
                        t.rejectUnauthorized = this.rejectUnauthorized;
                        var e = this.xhr = new s(t),
                            r = this;
                        try {
                                f("xhr open %s: %s", this.method, this.uri),
                                e.open(this.method, this.uri, this.async);
                                try {
                                    if (this.extraHeaders) {
                                        e.setDisableHeaderCheck(!0);
                                        for (var i in this.extraHeaders) this.extraHeaders.hasOwnProperty(i) && e.setRequestHeader(i, this.extraHeaders[i])
                                    }
                                } catch (a) {}
                                if (this.supportsBinary && (e.responseType = "arraybuffer"), "POST" == this.method) try {
                                    this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                                } catch (a) {}
                                "withCredentials" in e && (e.withCredentials = !0),
                                this.hasXDR() ? (e.onload = function () {
                                    r.onLoad()
                                }, e.onerror = function () {
                                    r.onError(e.responseText)
                                }) : e.onreadystatechange = function () {
                                    4 == e.readyState && (200 == e.status || 1223 == e.status ? r.onLoad() : setTimeout(function () {
                                        r.onError(e.status)
                                    }, 0))
                                },
                                f("xhr data %s", this.data),
                                e.send(this.data)
                            } catch (a) {
                                return void setTimeout(function () {
                                    r.onError(a)
                                }, 0)
                            }
                        n.document && (this.index = o.requestsCount++, o.requests[this.index] = this)
                    },
                o.prototype.onSuccess = function () {
                        this.emit("success"),
                        this.cleanup()
                    },
                o.prototype.onData = function (t) {
                        this.emit("data", t),
                        this.onSuccess()
                    },
                o.prototype.onError = function (t) {
                        this.emit("error", t),
                        this.cleanup(!0)
                    },
                o.prototype.cleanup = function (t) {
                        if ("undefined" != typeof this.xhr && null !== this.xhr) {
                            if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r, t) try {
                                this.xhr.abort()
                            } catch (e) {}
                            n.document && delete o.requests[this.index],
                            this.xhr = null
                        }
                    },
                o.prototype.onLoad = function () {
                        var t;
                        try {
                            var e;
                            try {
                                e = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                            } catch (n) {}
                            if ("application/octet-stream" === e) t = this.xhr.response;
                            else if (this.supportsBinary) try {
                                t = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                            } catch (n) {
                                for (var r = new Uint8Array(this.xhr.response), i = [], o = 0, a = r.length; a > o; o++) i.push(r[o]);
                                t = String.fromCharCode.apply(null, i)
                            } else t = this.xhr.responseText
                        } catch (n) {
                            this.onError(n)
                        }
                        null != t && this.onData(t)
                    },
                o.prototype.hasXDR = function () {
                        return "undefined" != typeof n.XDomainRequest && !this.xs && this.enablesXDR
                    },
                o.prototype.abort = function () {
                        this.cleanup()
                    },
                n.document && (o.requestsCount = 0, o.requests = {}, n.attachEvent ? n.attachEvent("onunload", a) : n.addEventListener && n.addEventListener("beforeunload", a, !1))
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        },
        {
            "./polling": 8,
            "component-emitter": 15,
            "component-inherit": 16,
            debug: 17,
            "xmlhttprequest-ssl": 10
        }],
        8: [function (t, e, n) {
            function r(t) {
                var e = t && t.forceBase64;
                (!l || e) && (this.supportsBinary = !1),
                i.call(this, t)
            }
            var i = t("../transport"),
                o = t("parseqs"),
                a = t("engine.io-parser"),
                s = t("component-inherit"),
                u = t("yeast"),
                c = t("debug")("engine.io-client:polling");
            e.exports = r;
            var l = function () {
                    var e = t("xmlhttprequest-ssl"),
                        n = new e({
                            xdomain: !1
                        });
                    return null != n.responseType
                }();
            s(r, i),
            r.prototype.name = "polling",
            r.prototype.doOpen = function () {
                    this.poll()
                },
            r.prototype.pause = function (t) {
                    function e() {
                        c("paused"),
                        n.readyState = "paused",
                        t()
                    }
                    var n = this;
                    if (this.readyState = "pausing", this.polling || !this.writable) {
                        var r = 0;
                        this.polling && (c("we are currently polling - waiting to pause"), r++, this.once("pollComplete", function () {
                            c("pre-pause polling complete"),
                            --r || e()
                        })),
                        this.writable || (c("we are currently writing - waiting to pause"), r++, this.once("drain", function () {
                            c("pre-pause writing complete"),
                            --r || e()
                        }))
                    } else e()
                },
            r.prototype.poll = function () {
                    c("polling"),
                    this.polling = !0,
                    this.doPoll(),
                    this.emit("poll")
                },
            r.prototype.onData = function (t) {
                    var e = this;
                    c("polling got data %s", t);
                    var n = function (t, n, r) {
                        return "opening" == e.readyState && e.onOpen(),
                        "close" == t.type ? (e.onClose(), !1) : void e.onPacket(t)
                    };
                    a.decodePayload(t, this.socket.binaryType, n),
                    "closed" != this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : c('ignoring poll - transport state "%s"', this.readyState))
                },
            r.prototype.doClose = function () {
                    function t() {
                        c("writing close packet"),
                        e.write([{
                            type: "close"
                        }])
                    }
                    var e = this;
                    "open" == this.readyState ? (c("transport open - closing"), t()) : (c("transport not open - deferring close"), this.once("open", t))
                },
            r.prototype.write = function (t) {
                    var e = this;
                    this.writable = !1;
                    var n = function () {
                        e.writable = !0,
                        e.emit("drain")
                    },
                        e = this;
                    a.encodePayload(t, this.supportsBinary, function (t) {
                            e.doWrite(t, n)
                        })
                },
            r.prototype.uri = function () {
                    var t = this.query || {},
                        e = this.secure ? "https" : "http",
                        n = "";
                    !1 !== this.timestampRequests && (t[this.timestampParam] = u()),
                    this.supportsBinary || t.sid || (t.b64 = 1),
                    t = o.encode(t),
                    this.port && ("https" == e && 443 != this.port || "http" == e && 80 != this.port) && (n = ":" + this.port),
                    t.length && (t = "?" + t);
                    var r = -1 !== this.hostname.indexOf(":");
                    return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
                }
        },
        {
            "../transport": 4,
            "component-inherit": 16,
            debug: 17,
            "engine.io-parser": 19,
            parseqs: 27,
            "xmlhttprequest-ssl": 10,
            yeast: 30
        }],
        9: [function (t, e, n) {
            (function (n) {
                function r(t) {
                    var e = t && t.forceBase64;
                    e && (this.supportsBinary = !1),
                    this.perMessageDeflate = t.perMessageDeflate,
                    i.call(this, t)
                }
                var i = t("../transport"),
                    o = t("engine.io-parser"),
                    a = t("parseqs"),
                    s = t("component-inherit"),
                    u = t("yeast"),
                    c = t("debug")("engine.io-client:websocket"),
                    l = n.WebSocket || n.MozWebSocket,
                    f = l;
                if (!f && "undefined" == typeof window) try {
                        f = t("ws")
                    } catch (h) {}
                e.exports = r,
                s(r, i),
                r.prototype.name = "websocket",
                r.prototype.supportsBinary = !0,
                r.prototype.doOpen = function () {
                        if (this.check()) {
                            var t = this.uri(),
                                e = void 0,
                                n = {
                                    agent: this.agent,
                                    perMessageDeflate: this.perMessageDeflate
                                };
                            n.pfx = this.pfx,
                            n.key = this.key,
                            n.passphrase = this.passphrase,
                            n.cert = this.cert,
                            n.ca = this.ca,
                            n.ciphers = this.ciphers,
                            n.rejectUnauthorized = this.rejectUnauthorized,
                            this.extraHeaders && (n.headers = this.extraHeaders),
                            this.ws = l ? new f(t) : new f(t, e, n),
                            void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                            this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer",
                            this.addEventListeners()
                        }
                    },
                r.prototype.addEventListeners = function () {
                        var t = this;
                        this.ws.onopen = function () {
                            t.onOpen()
                        },
                        this.ws.onclose = function () {
                            t.onClose()
                        },
                        this.ws.onmessage = function (e) {
                            t.onData(e.data)
                        },
                        this.ws.onerror = function (e) {
                            t.onError("websocket error", e)
                        }
                    },
                "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (r.prototype.onData = function (t) {
                        var e = this;
                        setTimeout(function () {
                            i.prototype.onData.call(e, t)
                        }, 0)
                    }),
                r.prototype.write = function (t) {
                        function e() {
                            r.emit("flush"),
                            setTimeout(function () {
                                r.writable = !0,
                                r.emit("drain")
                            }, 0)
                        }
                        var r = this;
                        this.writable = !1;
                        for (var i = t.length, a = 0, s = i; s > a; a++)!
                        function (t) {
                            o.encodePacket(t, r.supportsBinary, function (o) {
                                if (!l) {
                                    var a = {};
                                    if (t.options && (a.compress = t.options.compress), r.perMessageDeflate) {
                                        var s = "string" == typeof o ? n.Buffer.byteLength(o) : o.length;
                                        s < r.perMessageDeflate.threshold && (a.compress = !1)
                                    }
                                }
                                try {
                                    l ? r.ws.send(o) : r.ws.send(o, a)
                                } catch (u) {
                                    c("websocket closed before onclose event")
                                }--i || e()
                            })
                        }(t[a])
                    },
                r.prototype.onClose = function () {
                        i.prototype.onClose.call(this)
                    },
                r.prototype.doClose = function () {
                        "undefined" != typeof this.ws && this.ws.close()
                    },
                r.prototype.uri = function () {
                        var t = this.query || {},
                            e = this.secure ? "wss" : "ws",
                            n = "";
                        this.port && ("wss" == e && 443 != this.port || "ws" == e && 80 != this.port) && (n = ":" + this.port),
                        this.timestampRequests && (t[this.timestampParam] = u()),
                        this.supportsBinary || (t.b64 = 1),
                        t = a.encode(t),
                        t.length && (t = "?" + t);
                        var r = -1 !== this.hostname.indexOf(":");
                        return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
                    },
                r.prototype.check = function () {
                        return !(!f || "__initialize" in f && this.name === r.prototype.name)
                    }
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        },
        {
            "../transport": 4,
            "component-inherit": 16,
            debug: 17,
            "engine.io-parser": 19,
            parseqs: 27,
            ws: void 0,
            yeast: 30
        }],
        10: [function (t, e, n) {
            var r = t("has-cors");
            e.exports = function (t) {
                var e = t.xdomain,
                    n = t.xscheme,
                    i = t.enablesXDR;
                try {
                        if ("undefined" != typeof XMLHttpRequest && (!e || r)) return new XMLHttpRequest
                    } catch (o) {}
                try {
                        if ("undefined" != typeof XDomainRequest && !n && i) return new XDomainRequest
                    } catch (o) {}
                if (!e) try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (o) {}
            }
        },
        {
            "has-cors": 22
        }],
        11: [function (t, e, n) {
            function r(t, e, n) {
                function r(t, i) {
                    if (r.count <= 0) throw new Error("after called too many times");
                    --r.count,
                    t ? (o = !0, e(t), e = n) : 0 !== r.count || o || e(null, i)
                }
                var o = !1;
                return n = n || i,
                r.count = t,
                0 === t ? e() : r
            }
            function i() {}
            e.exports = r
        },
        {}],
        12: [function (t, e, n) {
            e.exports = function (t, e, n) {
                var r = t.byteLength;
                if (e = e || 0, n = n || r, t.slice) return t.slice(e, n);
                if (0 > e && (e += r), 0 > n && (n += r), n > r && (n = r), e >= r || e >= n || 0 === r) return new ArrayBuffer(0);
                for (var i = new Uint8Array(t), o = new Uint8Array(n - e), a = e, s = 0; n > a; a++, s++) o[s] = i[a];
                return o.buffer
            }
        },
        {}],
        13: [function (t, e, n) {
            /*
             * base64-arraybuffer
             * https://github.com/niklasvh/base64-arraybuffer
             * 
             * Copyright
             * (c)
             * 2012
             * Niklas
             * von
             * Hertzen
             * Licensed
             * under
             * the
             * MIT
             * license.
             */
            !
            function (t) {
                "use strict";
                n.encode = function (e) {
                    var n, r = new Uint8Array(e),
                        i = r.length,
                        o = "";
                    for (n = 0; i > n; n += 3) o += t[r[n] >> 2],
                    o += t[(3 & r[n]) << 4 | r[n + 1] >> 4],
                    o += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6],
                    o += t[63 & r[n + 2]];
                    return i % 3 === 2 ? o = o.substring(0, o.length - 1) + "=" : i % 3 === 1 && (o = o.substring(0, o.length - 2) + "=="),
                    o
                },
                n.decode = function (e) {
                    var n, r, i, o, a, s = .75 * e.length,
                        u = e.length,
                        c = 0;
                    "=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
                    var l = new ArrayBuffer(s),
                        f = new Uint8Array(l);
                    for (n = 0; u > n; n += 4) r = t.indexOf(e[n]),
                    i = t.indexOf(e[n + 1]),
                    o = t.indexOf(e[n + 2]),
                    a = t.indexOf(e[n + 3]),
                    f[c++] = r << 2 | i >> 4,
                    f[c++] = (15 & i) << 4 | o >> 2,
                    f[c++] = (3 & o) << 6 | 63 & a;
                    return l
                }
            }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
        },
        {}],
        14: [function (t, e, n) {
            (function (t) {
                function n(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (n.buffer instanceof ArrayBuffer) {
                            var r = n.buffer;
                            if (n.byteLength !== r.byteLength) {
                                var i = new Uint8Array(n.byteLength);
                                i.set(new Uint8Array(r, n.byteOffset, n.byteLength)),
                                r = i.buffer
                            }
                            t[e] = r
                        }
                    }
                }
                function r(t, e) {
                    e = e || {};
                    var r = new o;
                    n(t);
                    for (var i = 0; i < t.length; i++) r.append(t[i]);
                    return e.type ? r.getBlob(e.type) : r.getBlob()
                }
                function i(t, e) {
                    return n(t),
                    new Blob(t, e || {})
                }
                var o = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder,
                    a = function () {
                        try {
                            var t = new Blob(["hi"]);
                            return 2 === t.size
                        } catch (e) {
                            return !1
                        }
                    }(),
                    s = a &&
                function () {
                        try {
                            var t = new Blob([new Uint8Array([1, 2])]);
                            return 2 === t.size
                        } catch (e) {
                            return !1
                        }
                    }(),
                    u = o && o.prototype.append && o.prototype.getBlob;
                e.exports = function () {
                        return a ? s ? t.Blob : i : u ? r : void 0
                    }()
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        },
        {}],
        15: [function (t, e, n) {
            function r(t) {
                return t ? i(t) : void 0
            }
            function i(t) {
                for (var e in r.prototype) t[e] = r.prototype[e];
                return t
            }
            e.exports = r,
            r.prototype.on = r.prototype.addEventListener = function (t, e) {
                return this._callbacks = this._callbacks || {},
                (this._callbacks[t] = this._callbacks[t] || []).push(e),
                this
            },
            r.prototype.once = function (t, e) {
                function n() {
                    r.off(t, n),
                    e.apply(this, arguments)
                }
                var r = this;
                return this._callbacks = this._callbacks || {},
                n.fn = e,
                this.on(t, n),
                this
            },
            r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {},
                this;
                var n = this._callbacks[t];
                if (!n) return this;
                if (1 == arguments.length) return delete this._callbacks[t],
                this;
                for (var r, i = 0; i < n.length; i++) if (r = n[i], r === e || r.fn === e) {
                    n.splice(i, 1);
                    break
                }
                return this
            },
            r.prototype.emit = function (t) {
                this._callbacks = this._callbacks || {};
                var e = [].slice.call(arguments, 1),
                    n = this._callbacks[t];
                if (n) {
                        n = n.slice(0);
                        for (var r = 0, i = n.length; i > r; ++r) n[r].apply(this, e)
                    }
                return this
            },
            r.prototype.listeners = function (t) {
                return this._callbacks = this._callbacks || {},
                this._callbacks[t] || []
            },
            r.prototype.hasListeners = function (t) {
                return !!this.listeners(t).length
            }
        },
        {}],
        16: [function (t, e, n) {
            e.exports = function (t, e) {
                var n = function () {};
                n.prototype = e.prototype,
                t.prototype = new n,
                t.prototype.constructor = t
            }
        },
        {}],
        17: [function (t, e, n) {
            function r() {
                return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
            }
            function i() {
                var t = arguments,
                    e = this.useColors;
                if (t[0] = (e ? "%c" : "") + this.namespace + (e ? " %c" : " ") + t[0] + (e ? "%c " : " ") + "+" + n.humanize(this.diff), !e) return t;
                var r = "color: " + this.color;
                t = [t[0], r, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
                var i = 0,
                    o = 0;
                return t[0].replace(/%[a-z%]/g, function (t) {
                        "%%" !== t && (i++, "%c" === t && (o = i))
                    }),
                t.splice(o, 0, r),
                t
            }
            function o() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }
            function a(t) {
                try {
                    null == t ? n.storage.removeItem("debug") : n.storage.debug = t
                } catch (e) {}
            }
            function s() {
                var t;
                try {
                    t = n.storage.debug
                } catch (e) {}
                return t
            }
            function u() {
                try {
                    return window.localStorage
                } catch (t) {}
            }
            n = e.exports = t("./debug"),
            n.log = o,
            n.formatArgs = i,
            n.save = a,
            n.load = s,
            n.useColors = r,
            n.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(),
            n.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
            n.formatters.j = function (t) {
                return JSON.stringify(t)
            },
            n.enable(s())
        },
        {
            "./debug": 18
        }],
        18: [function (t, e, n) {
            function r() {
                return n.colors[l++ % n.colors.length]
            }
            function i(t) {
                function e() {}
                function i() {
                    var t = i,
                        e = +new Date,
                        o = e - (c || e);
                    t.diff = o,
                    t.prev = c,
                    t.curr = e,
                    c = e,
                    null == t.useColors && (t.useColors = n.useColors()),
                    null == t.color && t.useColors && (t.color = r());
                    var a = Array.prototype.slice.call(arguments);
                    a[0] = n.coerce(a[0]),
                    "string" != typeof a[0] && (a = ["%o"].concat(a));
                    var s = 0;
                    a[0] = a[0].replace(/%([a-z%])/g, function (e, r) {
                            if ("%%" === e) return e;
                            s++;
                            var i = n.formatters[r];
                            if ("function" == typeof i) {
                                var o = a[s];
                                e = i.call(t, o),
                                a.splice(s, 1),
                                s--
                            }
                            return e
                        }),
                    "function" == typeof n.formatArgs && (a = n.formatArgs.apply(t, a));
                    var u = i.log || n.log || console.log.bind(console);
                    u.apply(t, a)
                }
                e.enabled = !1,
                i.enabled = !0;
                var o = n.enabled(t) ? i : e;
                return o.namespace = t,
                o
            }
            function o(t) {
                n.save(t);
                for (var e = (t || "").split(/[\s,]+/), r = e.length, i = 0; r > i; i++) e[i] && (t = e[i].replace(/\*/g, ".*?"), "-" === t[0] ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$")))
            }
            function a() {
                n.enable("")
            }
            function s(t) {
                var e, r;
                for (e = 0, r = n.skips.length; r > e; e++) if (n.skips[e].test(t)) return !1;
                for (e = 0, r = n.names.length; r > e; e++) if (n.names[e].test(t)) return !0;
                return !1
            }
            function u(t) {
                return t instanceof Error ? t.stack || t.message : t
            }
            n = e.exports = i,
            n.coerce = u,
            n.disable = a,
            n.enable = o,
            n.enabled = s,
            n.humanize = t("ms"),
            n.names = [],
            n.skips = [],
            n.formatters = {};
            var c, l = 0
        },
        {
            ms: 25
        }],
        19: [function (t, e, n) {
            (function (e) {
                function r(t, e) {
                    var r = "b" + n.packets[t.type] + t.data.data;
                    return e(r)
                }
                function i(t, e, r) {
                    if (!e) return n.encodeBase64Packet(t, r);
                    var i = t.data,
                        o = new Uint8Array(i),
                        a = new Uint8Array(1 + i.byteLength);
                    a[0] = m[t.type];
                    for (var s = 0; s < o.length; s++) a[s + 1] = o[s];
                    return r(a.buffer)
                }
                function o(t, e, r) {
                    if (!e) return n.encodeBase64Packet(t, r);
                    var i = new FileReader;
                    return i.onload = function () {
                        t.data = i.result,
                        n.encodePacket(t, e, !0, r)
                    },
                    i.readAsArrayBuffer(t.data)
                }
                function a(t, e, r) {
                    if (!e) return n.encodeBase64Packet(t, r);
                    if (g) return o(t, e, r);
                    var i = new Uint8Array(1);
                    i[0] = m[t.type];
                    var a = new b([i.buffer, t.data]);
                    return r(a)
                }
                function s(t, e, n) {
                    for (var r = new Array(t.length), i = h(t.length, n), o = function (t, n, i) {
                        e(n, function (e, n) {
                            r[t] = n,
                            i(e, r)
                        })
                    }, a = 0; a < t.length; a++) o(a, t[a], i)
                }
                var u = t("./keys"),
                    c = t("has-binary"),
                    l = t("arraybuffer.slice"),
                    f = t("base64-arraybuffer"),
                    h = t("after"),
                    p = t("utf8"),
                    d = navigator.userAgent.match(/Android/i),
                    v = /PhantomJS/i.test(navigator.userAgent),
                    g = d || v;
                n.protocol = 3;
                var m = n.packets = {
                        open: 0,
                        close: 1,
                        ping: 2,
                        pong: 3,
                        message: 4,
                        upgrade: 5,
                        noop: 6
                    },
                    y = u(m),
                    $ = {
                        type: "error",
                        data: "parser error"
                    },
                    b = t("blob");
                n.encodePacket = function (t, n, o, s) {
                        "function" == typeof n && (s = n, n = !1),
                        "function" == typeof o && (s = o, o = null);
                        var u = void 0 === t.data ? void 0 : t.data.buffer || t.data;
                        if (e.ArrayBuffer && u instanceof ArrayBuffer) return i(t, n, s);
                        if (b && u instanceof e.Blob) return a(t, n, s);
                        if (u && u.base64) return r(t, s);
                        var c = m[t.type];
                        return void 0 !== t.data && (c += o ? p.encode(String(t.data)) : String(t.data)),
                        s("" + c)
                    },
                n.encodeBase64Packet = function (t, r) {
                        var i = "b" + n.packets[t.type];
                        if (b && t.data instanceof e.Blob) {
                            var o = new FileReader;
                            return o.onload = function () {
                                var t = o.result.split(",")[1];
                                r(i + t)
                            },
                            o.readAsDataURL(t.data)
                        }
                        var a;
                        try {
                            a = String.fromCharCode.apply(null, new Uint8Array(t.data))
                        } catch (s) {
                            for (var u = new Uint8Array(t.data), c = new Array(u.length), l = 0; l < u.length; l++) c[l] = u[l];
                            a = String.fromCharCode.apply(null, c)
                        }
                        return i += e.btoa(a),
                        r(i)
                    },
                n.decodePacket = function (t, e, r) {
                        if ("string" == typeof t || void 0 === t) {
                            if ("b" == t.charAt(0)) return n.decodeBase64Packet(t.substr(1), e);
                            if (r) try {
                                t = p.decode(t)
                            } catch (i) {
                                return $
                            }
                            var o = t.charAt(0);
                            return Number(o) == o && y[o] ? t.length > 1 ? {
                                type: y[o],
                                data: t.substring(1)
                            } : {
                                type: y[o]
                            } : $
                        }
                        var a = new Uint8Array(t),
                            o = a[0],
                            s = l(t, 1);
                        return b && "blob" === e && (s = new b([s])),
                        {
                                type: y[o],
                                data: s
                            }
                    },
                n.decodeBase64Packet = function (t, n) {
                        var r = y[t.charAt(0)];
                        if (!e.ArrayBuffer) return {
                            type: r,
                            data: {
                                base64: !0,
                                data: t.substr(1)
                            }
                        };
                        var i = f.decode(t.substr(1));
                        return "blob" === n && b && (i = new b([i])),
                        {
                            type: r,
                            data: i
                        }
                    },
                n.encodePayload = function (t, e, r) {
                        function i(t) {
                            return t.length + ":" + t
                        }
                        function o(t, r) {
                            n.encodePacket(t, a ? e : !1, !0, function (t) {
                                r(null, i(t))
                            })
                        }
                        "function" == typeof e && (r = e, e = null);
                        var a = c(t);
                        return e && a ? b && !g ? n.encodePayloadAsBlob(t, r) : n.encodePayloadAsArrayBuffer(t, r) : t.length ? void s(t, o, function (t, e) {
                            return r(e.join(""))
                        }) : r("0:")
                    },
                n.decodePayload = function (t, e, r) {
                        if ("string" != typeof t) return n.decodePayloadAsBinary(t, e, r);
                        "function" == typeof e && (r = e, e = null);
                        var i;
                        if ("" == t) return r($, 0, 1);
                        for (var o, a, s = "", u = 0, c = t.length; c > u; u++) {
                            var l = t.charAt(u);
                            if (":" != l) s += l;
                            else {
                                if ("" == s || s != (o = Number(s))) return r($, 0, 1);
                                if (a = t.substr(u + 1, o), s != a.length) return r($, 0, 1);
                                if (a.length) {
                                    if (i = n.decodePacket(a, e, !0), $.type == i.type && $.data == i.data) return r($, 0, 1);
                                    var f = r(i, u + o, c);
                                    if (!1 === f) return
                                }
                                u += o,
                                s = ""
                            }
                        }
                        return "" != s ? r($, 0, 1) : void 0
                    },
                n.encodePayloadAsArrayBuffer = function (t, e) {
                        function r(t, e) {
                            n.encodePacket(t, !0, !0, function (t) {
                                return e(null, t)
                            })
                        }
                        return t.length ? void s(t, r, function (t, n) {
                            var r = n.reduce(function (t, e) {
                                var n;
                                return n = "string" == typeof e ? e.length : e.byteLength,
                                t + n.toString().length + n + 2
                            }, 0),
                                i = new Uint8Array(r),
                                o = 0;
                            return n.forEach(function (t) {
                                    var e = "string" == typeof t,
                                        n = t;
                                    if (e) {
                                            for (var r = new Uint8Array(t.length), a = 0; a < t.length; a++) r[a] = t.charCodeAt(a);
                                            n = r.buffer
                                        }
                                    i[o++] = e ? 0 : 1;
                                    for (var s = n.byteLength.toString(), a = 0; a < s.length; a++) i[o++] = parseInt(s[a]);
                                    i[o++] = 255;
                                    for (var r = new Uint8Array(n), a = 0; a < r.length; a++) i[o++] = r[a]
                                }),
                            e(i.buffer)
                        }) : e(new ArrayBuffer(0))
                    },
                n.encodePayloadAsBlob = function (t, e) {
                        function r(t, e) {
                            n.encodePacket(t, !0, !0, function (t) {
                                var n = new Uint8Array(1);
                                if (n[0] = 1, "string" == typeof t) {
                                    for (var r = new Uint8Array(t.length), i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
                                    t = r.buffer,
                                    n[0] = 0
                                }
                                for (var o = t instanceof ArrayBuffer ? t.byteLength : t.size, a = o.toString(), s = new Uint8Array(a.length + 1), i = 0; i < a.length; i++) s[i] = parseInt(a[i]);
                                if (s[a.length] = 255, b) {
                                    var u = new b([n.buffer, s.buffer, t]);
                                    e(null, u)
                                }
                            })
                        }
                        s(t, r, function (t, n) {
                            return e(new b(n))
                        })
                    },
                n.decodePayloadAsBinary = function (t, e, r) {
                        "function" == typeof e && (r = e, e = null);
                        for (var i = t, o = [], a = !1; i.byteLength > 0;) {
                            for (var s = new Uint8Array(i), u = 0 === s[0], c = "", f = 1; 255 != s[f]; f++) {
                                if (c.length > 310) {
                                    a = !0;
                                    break
                                }
                                c += s[f]
                            }
                            if (a) return r($, 0, 1);
                            i = l(i, 2 + c.length),
                            c = parseInt(c);
                            var h = l(i, 0, c);
                            if (u) try {
                                h = String.fromCharCode.apply(null, new Uint8Array(h))
                            } catch (p) {
                                var d = new Uint8Array(h);
                                h = "";
                                for (var f = 0; f < d.length; f++) h += String.fromCharCode(d[f])
                            }
                            o.push(h),
                            i = l(i, c)
                        }
                        var v = o.length;
                        o.forEach(function (t, i) {
                            r(n.decodePacket(t, e, !0), i, v)
                        })
                    }
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        },
        {
            "./keys": 20,
            after: 11,
            "arraybuffer.slice": 12,
            "base64-arraybuffer": 13,
            blob: 14,
            "has-binary": 21,
            utf8: 29
        }],
        20: [function (t, e, n) {
            e.exports = Object.keys ||
            function (t) {
                var e = [],
                    n = Object.prototype.hasOwnProperty;
                for (var r in t) n.call(t, r) && e.push(r);
                return e
            }
        },
        {}],
        21: [function (t, e, n) {
            (function (n) {
                function r(t) {
                    function e(t) {
                        if (!t) return !1;
                        if (n.Buffer && n.Buffer.isBuffer(t) || n.ArrayBuffer && t instanceof ArrayBuffer || n.Blob && t instanceof Blob || n.File && t instanceof File) return !0;
                        if (i(t)) {
                            for (var r = 0; r < t.length; r++) if (e(t[r])) return !0
                        } else if (t && "object" == typeof t) {
                            t.toJSON && (t = t.toJSON());
                            for (var o in t) if (Object.prototype.hasOwnProperty.call(t, o) && e(t[o])) return !0
                        }
                        return !1
                    }
                    return e(t)
                }
                var i = t("isarray");
                e.exports = r
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        },
        {
            isarray: 24
        }],
        22: [function (t, e, n) {
            try {
                e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
            } catch (r) {
                e.exports = !1
            }
        },
        {}],
        23: [function (t, e, n) {
            var r = [].indexOf;
            e.exports = function (t, e) {
                if (r) return t.indexOf(e);
                for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;
                return -1
            }
        },
        {}],
        24: [function (t, e, n) {
            e.exports = Array.isArray ||
            function (t) {
                return "[object Array]" == Object.prototype.toString.call(t)
            }
        },
        {}],
        25: [function (t, e, n) {
            function r(t) {
                if (t = "" + t, !(t.length > 1e4)) {
                    var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                    if (e) {
                        var n = parseFloat(e[1]),
                            r = (e[2] || "ms").toLowerCase();
                        switch (r) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return n * f;
                            case "days":
                            case "day":
                            case "d":
                                return n * l;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return n * c;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return n * u;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return n * s;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return n
                            }
                    }
                }
            }
            function i(t) {
                return t >= l ? Math.round(t / l) + "d" : t >= c ? Math.round(t / c) + "h" : t >= u ? Math.round(t / u) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
            }
            function o(t) {
                return a(t, l, "day") || a(t, c, "hour") || a(t, u, "minute") || a(t, s, "second") || t + " ms"
            }
            function a(t, e, n) {
                return e > t ? void 0 : 1.5 * e > t ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
            }
            var s = 1e3,
                u = 60 * s,
                c = 60 * u,
                l = 24 * c,
                f = 365.25 * l;
            e.exports = function (t, e) {
                    return e = e || {},
                    "string" == typeof t ? r(t) : e["long"] ? o(t) : i(t)
                }
        },
        {}],
        26: [function (t, e, n) {
            (function (t) {
                /**
                 * JSON
                 * parse.
                 * 
                 * @see Based
                 *      on
                 *      jQuery#parseJSON
                 *      (MIT)
                 *      and
                 *      JSON2
                 * @api private
                 */
                var n = /^[\],:{}\s]*$/,
                    r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    i = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    o = /(?:^|:|,)(?:\s*\[)+/g,
                    a = /^\s+/,
                    s = /\s+$/;
                e.exports = function (e) {
                        return "string" == typeof e && e ? (e = e.replace(a, "").replace(s, ""), t.JSON && JSON.parse ? JSON.parse(e) : n.test(e.replace(r, "@").replace(i, "]").replace(o, "")) ? new Function("return " + e)() : void 0) : null
                    }
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        },
        {}],
        27: [function (t, e, n) {
            n.encode = function (t) {
                var e = "";
                for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                return e
            },
            n.decode = function (t) {
                for (var e = {}, n = t.split("&"), r = 0, i = n.length; i > r; r++) {
                    var o = n[r].split("=");
                    e[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
                }
                return e
            }
        },
        {}],
        28: [function (t, e, n) {
            /**
             * Parses
             * an
             * URI
             * 
             * @author Steven
             *         Levithan
             *         <stevenlevithan.com>
             *         (MIT
             *         license)
             * @api private
             */
            var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                i = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            e.exports = function (t) {
                    var e = t,
                        n = t.indexOf("["),
                        o = t.indexOf("]"); - 1 != n && -1 != o && (t = t.substring(0, n) + t.substring(n, o).replace(/:/g, ";") + t.substring(o, t.length));
                    for (var a = r.exec(t || ""), s = {}, u = 14; u--;) s[i[u]] = a[u] || "";
                    return -1 != n && -1 != o && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0),
                    s
                }
        },
        {}],
        29: [function (e, n, r) {
            (function (e) {
                !
                function (i) {
                    function o(t) {
                        for (var e, n, r = [], i = 0, o = t.length; o > i;) e = t.charCodeAt(i++),
                        e >= 55296 && 56319 >= e && o > i ? (n = t.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--)) : r.push(e);
                        return r
                    }
                    function a(t) {
                        for (var e, n = t.length, r = -1, i = ""; ++r < n;) e = t[r],
                        e > 65535 && (e -= 65536, i += b(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e),
                        i += b(e);
                        return i
                    }
                    function s(t) {
                        if (t >= 55296 && 57343 >= t) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value")
                    }
                    function u(t, e) {
                        return b(t >> e & 63 | 128)
                    }
                    function c(t) {
                        if (0 == (4294967168 & t)) return b(t);
                        var e = "";
                        return 0 == (4294965248 & t) ? e = b(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (s(t), e = b(t >> 12 & 15 | 224), e += u(t, 6)) : 0 == (4292870144 & t) && (e = b(t >> 18 & 7 | 240), e += u(t, 12), e += u(t, 6)),
                        e += b(63 & t | 128)
                    }
                    function l(t) {
                        for (var e, n = o(t), r = n.length, i = -1, a = ""; ++i < r;) e = n[i],
                        a += c(e);
                        return a
                    }
                    function f() {
                        if ($ >= y) throw Error("Invalid byte index");
                        var t = 255 & m[$];
                        if ($++, 128 == (192 & t)) return 63 & t;
                        throw Error("Invalid continuation byte")
                    }
                    function h() {
                        var t, e, n, r, i;
                        if ($ > y) throw Error("Invalid byte index");
                        if ($ == y) return !1;
                        if (t = 255 & m[$], $++, 0 == (128 & t)) return t;
                        if (192 == (224 & t)) {
                            var e = f();
                            if (i = (31 & t) << 6 | e, i >= 128) return i;
                            throw Error("Invalid continuation byte")
                        }
                        if (224 == (240 & t)) {
                            if (e = f(), n = f(), i = (15 & t) << 12 | e << 6 | n, i >= 2048) return s(i),
                            i;
                            throw Error("Invalid continuation byte")
                        }
                        if (240 == (248 & t) && (e = f(), n = f(), r = f(), i = (15 & t) << 18 | e << 12 | n << 6 | r, i >= 65536 && 1114111 >= i)) return i;
                        throw Error("Invalid UTF-8 detected")
                    }
                    function p(t) {
                        m = o(t),
                        y = m.length,
                        $ = 0;
                        for (var e, n = [];
                        (e = h()) !== !1;) n.push(e);
                        return a(n)
                    }
                    var d = "object" == typeof r && r,
                        v = "object" == typeof n && n && n.exports == d && n,
                        g = "object" == typeof e && e;
                        (g.global === g || g.window === g) && (i = g);
                    var m, y, $, b = String.fromCharCode,
                        w = {
                            version: "2.0.0",
                            encode: l,
                            decode: p
                        };
                    if ("function" == typeof t && "object" == typeof t.amd && t.amd) t(function () {
                            return w
                        });
                    else if (d && !d.nodeType) if (v) v.exports = w;
                    else {
                            var _ = {},
                                x = _.hasOwnProperty;
                            for (var k in w) x.call(w, k) && (d[k] = w[k])
                        } else i.utf8 = w
                }(this)
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        },
        {}],
        30: [function (t, e, n) {
            "use strict";

            function r(t) {
                var e = "";
                do e = s[t % u] + e,
                t = Math.floor(t / u);
                while (t > 0);
                return e
            }
            function i(t) {
                var e = 0;
                for (f = 0; f < t.length; f++) e = e * u + c[t.charAt(f)];
                return e
            }
            function o() {
                var t = r(+new Date);
                return t !== a ? (l = 0, a = t) : t + "." + r(l++)
            }
            for (var a, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), u = 64, c = {}, l = 0, f = 0; u > f; f++) c[s[f]] = f;
            o.encode = r,
            o.decode = i,
            e.exports = o
        },
        {}],
        31: [function (t, e, n) {
            function r(t, e) {
                "object" == typeof t && (e = t, t = void 0),
                e = e || {};
                var n, r = i(t),
                    o = r.source,
                    c = r.id,
                    l = r.path,
                    f = u[c] && l in u[c].nsps,
                    h = e.forceNew || e["force new connection"] || !1 === e.multiplex || f;
                return h ? (s("ignoring socket cache for %s", o), n = a(o, e)) : (u[c] || (s("new io instance for %s", o), u[c] = a(o, e)), n = u[c]),
                n.socket(r.path)
            }
            var i = t("./url"),
                o = t("socket.io-parser"),
                a = t("./manager"),
                s = t("debug")("socket.io-client");
            e.exports = n = r;
            var u = n.managers = {};
            n.protocol = o.protocol,
            n.connect = r,
            n.Manager = t("./manager"),
            n.Socket = t("./socket")
        },
        {
            "./manager": 32,
            "./socket": 34,
            "./url": 35,
            debug: 39,
            "socket.io-parser": 47
        }],
        32: [function (t, e, n) {
            function r(t, e) {
                return this instanceof r ? (t && "object" == typeof t && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new h({
                    min: this.reconnectionDelay(),
                    max: this.reconnectionDelayMax(),
                    jitter: this.randomizationFactor()
                }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [], this.encoder = new s.Encoder, this.decoder = new s.Decoder, this.autoConnect = e.autoConnect !== !1, void(this.autoConnect && this.open())) : new r(t, e)
            }
            var i = t("engine.io-client"),
                o = t("./socket"),
                a = t("component-emitter"),
                s = t("socket.io-parser"),
                u = t("./on"),
                c = t("component-bind"),
                l = t("debug")("socket.io-client:manager"),
                f = t("indexof"),
                h = t("backo2"),
                p = Object.prototype.hasOwnProperty;
            e.exports = r,
            r.prototype.emitAll = function () {
                    this.emit.apply(this, arguments);
                    for (var t in this.nsps) p.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
                },
            r.prototype.updateSocketIds = function () {
                    for (var t in this.nsps) p.call(this.nsps, t) && (this.nsps[t].id = this.engine.id)
                },
            a(r.prototype),
            r.prototype.reconnection = function (t) {
                    return arguments.length ? (this._reconnection = !! t, this) : this._reconnection
                },
            r.prototype.reconnectionAttempts = function (t) {
                    return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts
                },
            r.prototype.reconnectionDelay = function (t) {
                    return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay
                },
            r.prototype.randomizationFactor = function (t) {
                    return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor
                },
            r.prototype.reconnectionDelayMax = function (t) {
                    return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax
                },
            r.prototype.timeout = function (t) {
                    return arguments.length ? (this._timeout = t, this) : this._timeout
                },
            r.prototype.maybeReconnectOnOpen = function () {
                    !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
                },
            r.prototype.open = r.prototype.connect = function (t) {
                    if (l("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
                    l("opening %s", this.uri),
                    this.engine = i(this.uri, this.opts);
                    var e = this.engine,
                        n = this;
                    this.readyState = "opening",
                    this.skipReconnect = !1;
                    var r = u(e, "open", function () {
                            n.onopen(),
                            t && t()
                        }),
                        o = u(e, "error", function (e) {
                            if (l("connect_error"), n.cleanup(), n.readyState = "closed", n.emitAll("connect_error", e), t) {
                                var r = new Error("Connection error");
                                r.data = e,
                                t(r)
                            } else n.maybeReconnectOnOpen()
                        });
                    if (!1 !== this._timeout) {
                            var a = this._timeout;
                            l("connect attempt will timeout after %d", a);
                            var s = setTimeout(function () {
                                l("connect attempt timed out after %d", a),
                                r.destroy(),
                                e.close(),
                                e.emit("error", "timeout"),
                                n.emitAll("connect_timeout", a)
                            }, a);
                            this.subs.push({
                                destroy: function () {
                                    clearTimeout(s)
                                }
                            })
                        }
                    return this.subs.push(r),
                    this.subs.push(o),
                    this
                },
            r.prototype.onopen = function () {
                    l("open"),
                    this.cleanup(),
                    this.readyState = "open",
                    this.emit("open");
                    var t = this.engine;
                    this.subs.push(u(t, "data", c(this, "ondata"))),
                    this.subs.push(u(t, "ping", c(this, "onping"))),
                    this.subs.push(u(t, "pong", c(this, "onpong"))),
                    this.subs.push(u(t, "error", c(this, "onerror"))),
                    this.subs.push(u(t, "close", c(this, "onclose"))),
                    this.subs.push(u(this.decoder, "decoded", c(this, "ondecoded")))
                },
            r.prototype.onping = function () {
                    this.lastPing = new Date,
                    this.emitAll("ping")
                },
            r.prototype.onpong = function () {
                    this.emitAll("pong", new Date - this.lastPing)
                },
            r.prototype.ondata = function (t) {
                    this.decoder.add(t)
                },
            r.prototype.ondecoded = function (t) {
                    this.emit("packet", t)
                },
            r.prototype.onerror = function (t) {
                    l("error", t),
                    this.emitAll("error", t)
                },
            r.prototype.socket = function (t) {
                    function e() {~f(r.connecting, n) || r.connecting.push(n)
                    }
                    var n = this.nsps[t];
                    if (!n) {
                        n = new o(this, t),
                        this.nsps[t] = n;
                        var r = this;
                        n.on("connecting", e),
                        n.on("connect", function () {
                            n.id = r.engine.id
                        }),
                        this.autoConnect && e()
                    }
                    return n
                },
            r.prototype.destroy = function (t) {
                    var e = f(this.connecting, t);~e && this.connecting.splice(e, 1),
                    this.connecting.length || this.close()
                },
            r.prototype.packet = function (t) {
                    l("writing packet %j", t);
                    var e = this;
                    e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function (n) {
                        for (var r = 0; r < n.length; r++) e.engine.write(n[r], t.options);
                        e.encoding = !1,
                        e.processPacketQueue()
                    }))
                },
            r.prototype.processPacketQueue = function () {
                    if (this.packetBuffer.length > 0 && !this.encoding) {
                        var t = this.packetBuffer.shift();
                        this.packet(t)
                    }
                },
            r.prototype.cleanup = function () {
                    l("cleanup");
                    for (var t; t = this.subs.shift();) t.destroy();
                    this.packetBuffer = [],
                    this.encoding = !1,
                    this.lastPing = null,
                    this.decoder.destroy()
                },
            r.prototype.close = r.prototype.disconnect = function () {
                    l("disconnect"),
                    this.skipReconnect = !0,
                    this.reconnecting = !1,
                    "opening" == this.readyState && this.cleanup(),
                    this.backoff.reset(),
                    this.readyState = "closed",
                    this.engine && this.engine.close()
                },
            r.prototype.onclose = function (t) {
                    l("onclose"),
                    this.cleanup(),
                    this.backoff.reset(),
                    this.readyState = "closed",
                    this.emit("close", t),
                    this._reconnection && !this.skipReconnect && this.reconnect()
                },
            r.prototype.reconnect = function () {
                    if (this.reconnecting || this.skipReconnect) return this;
                    var t = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts) l("reconnect failed"),
                    this.backoff.reset(),
                    this.emitAll("reconnect_failed"),
                    this.reconnecting = !1;
                    else {
                        var e = this.backoff.duration();
                        l("will wait %dms before reconnect attempt", e),
                        this.reconnecting = !0;
                        var n = setTimeout(function () {
                            t.skipReconnect || (l("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function (e) {
                                e ? (l("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (l("reconnect success"), t.onreconnect())
                            }))
                        }, e);
                        this.subs.push({
                            destroy: function () {
                                clearTimeout(n)
                            }
                        })
                    }
                },
            r.prototype.onreconnect = function () {
                    var t = this.backoff.attempts;
                    this.reconnecting = !1,
                    this.backoff.reset(),
                    this.updateSocketIds(),
                    this.emitAll("reconnect", t)
                }
        },
        {
            "./on": 33,
            "./socket": 34,
            backo2: 36,
            "component-bind": 37,
            "component-emitter": 38,
            debug: 39,
            "engine.io-client": 1,
            indexof: 42,
            "socket.io-parser": 47
        }],
        33: [function (t, e, n) {
            function r(t, e, n) {
                return t.on(e, n),
                {
                    destroy: function () {
                        t.removeListener(e, n)
                    }
                }
            }
            e.exports = r
        },
        {}],
        34: [function (t, e, n) {
            function r(t, e) {
                this.io = t,
                this.nsp = e,
                this.json = this,
                this.ids = 0,
                this.acks = {},
                this.receiveBuffer = [],
                this.sendBuffer = [],
                this.connected = !1,
                this.disconnected = !0,
                this.io.autoConnect && this.open()
            }
            var i = t("socket.io-parser"),
                o = t("component-emitter"),
                a = t("to-array"),
                s = t("./on"),
                u = t("component-bind"),
                c = t("debug")("socket.io-client:socket"),
                l = t("has-binary");
            e.exports = n = r;
            var f = {
                    connect: 1,
                    connect_error: 1,
                    connect_timeout: 1,
                    connecting: 1,
                    disconnect: 1,
                    error: 1,
                    reconnect: 1,
                    reconnect_attempt: 1,
                    reconnect_failed: 1,
                    reconnect_error: 1,
                    reconnecting: 1,
                    ping: 1,
                    pong: 1
                },
                h = o.prototype.emit;
            o(r.prototype),
            r.prototype.subEvents = function () {
                    if (!this.subs) {
                        var t = this.io;
                        this.subs = [s(t, "open", u(this, "onopen")), s(t, "packet", u(this, "onpacket")), s(t, "close", u(this, "onclose"))]
                    }
                },
            r.prototype.open = r.prototype.connect = function () {
                    return this.connected ? this : (this.subEvents(), this.io.open(), "open" == this.io.readyState && this.onopen(), this.emit("connecting"), this)
                },
            r.prototype.send = function () {
                    var t = a(arguments);
                    return t.unshift("message"),
                    this.emit.apply(this, t),
                    this
                },
            r.prototype.emit = function (t) {
                    if (f.hasOwnProperty(t)) return h.apply(this, arguments),
                    this;
                    var e = a(arguments),
                        n = i.EVENT;
                    l(e) && (n = i.BINARY_EVENT);
                    var r = {
                            type: n,
                            data: e
                        };
                    return r.options = {},
                    r.options.compress = !this.flags || !1 !== this.flags.compress,
                    "function" == typeof e[e.length - 1] && (c("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), r.id = this.ids++),
                    this.connected ? this.packet(r) : this.sendBuffer.push(r),
                    delete this.flags,
                    this
                },
            r.prototype.packet = function (t) {
                    t.nsp = this.nsp,
                    this.io.packet(t)
                },
            r.prototype.onopen = function () {
                    c("transport is open - connecting"),
                    "/" != this.nsp && this.packet({
                        type: i.CONNECT
                    })
                },
            r.prototype.onclose = function (t) {
                    c("close (%s)", t),
                    this.connected = !1,
                    this.disconnected = !0,
                    delete this.id,
                    this.emit("disconnect", t)
                },
            r.prototype.onpacket = function (t) {
                    if (t.nsp == this.nsp) switch (t.type) {
                    case i.CONNECT:
                        this.onconnect();
                        break;
                    case i.EVENT:
                        this.onevent(t);
                        break;
                    case i.BINARY_EVENT:
                        this.onevent(t);
                        break;
                    case i.ACK:
                        this.onack(t);
                        break;
                    case i.BINARY_ACK:
                        this.onack(t);
                        break;
                    case i.DISCONNECT:
                        this.ondisconnect();
                        break;
                    case i.ERROR:
                        this.emit("error", t.data)
                    }
                },
            r.prototype.onevent = function (t) {
                    var e = t.data || [];
                    c("emitting event %j", e),
                    null != t.id && (c("attaching ack callback to event"), e.push(this.ack(t.id))),
                    this.connected ? h.apply(this, e) : this.receiveBuffer.push(e)
                },
            r.prototype.ack = function (t) {
                    var e = this,
                        n = !1;
                    return function () {
                            if (!n) {
                                n = !0;
                                var r = a(arguments);
                                c("sending ack %j", r);
                                var o = l(r) ? i.BINARY_ACK : i.ACK;
                                e.packet({
                                    type: o,
                                    id: t,
                                    data: r
                                })
                            }
                        }
                },
            r.prototype.onack = function (t) {
                    var e = this.acks[t.id];
                    "function" == typeof e ? (c("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : c("bad ack %s", t.id)
                },
            r.prototype.onconnect = function () {
                    this.connected = !0,
                    this.disconnected = !1,
                    this.emit("connect"),
                    this.emitBuffered()
                },
            r.prototype.emitBuffered = function () {
                    var t;
                    for (t = 0; t < this.receiveBuffer.length; t++) h.apply(this, this.receiveBuffer[t]);
                    for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
                    this.sendBuffer = []
                },
            r.prototype.ondisconnect = function () {
                    c("server disconnect (%s)", this.nsp),
                    this.destroy(),
                    this.onclose("io server disconnect")
                },
            r.prototype.destroy = function () {
                    if (this.subs) {
                        for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
                        this.subs = null
                    }
                    this.io.destroy(this)
                },
            r.prototype.close = r.prototype.disconnect = function () {
                    return this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({
                        type: i.DISCONNECT
                    })),
                    this.destroy(),
                    this.connected && this.onclose("io client disconnect"),
                    this
                },
            r.prototype.compress = function (t) {
                    return this.flags = this.flags || {},
                    this.flags.compress = t,
                    this
                }
        },
        {
            "./on": 33,
            "component-bind": 37,
            "component-emitter": 38,
            debug: 39,
            "has-binary": 41,
            "socket.io-parser": 47,
            "to-array": 51
        }],
        35: [function (t, e, n) {
            (function (n) {
                function r(t, e) {
                    var r = t,
                        e = e || n.location;
                    null == t && (t = e.protocol + "//" + e.host),
                    "string" == typeof t && ("/" == t.charAt(0) && (t = "/" == t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t), t = "undefined" != typeof e ? e.protocol + "//" + t : "https://" + t), o("parse %s", t), r = i(t)),
                    r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
                    r.path = r.path || "/";
                    var a = -1 !== r.host.indexOf(":"),
                        s = a ? "[" + r.host + "]" : r.host;
                    return r.id = r.protocol + "://" + s + ":" + r.port,
                    r.href = r.protocol + "://" + s + (e && e.port == r.port ? "" : ":" + r.port),
                    r
                }
                var i = t("parseuri"),
                    o = t("debug")("socket.io-client:url");
                e.exports = r
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        },
        {
            debug: 39,
            parseuri: 45
        }],
        36: [function (t, e, n) {
            function r(t) {
                t = t || {},
                this.ms = t.min || 100,
                this.max = t.max || 1e4,
                this.factor = t.factor || 2,
                this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
                this.attempts = 0
            }
            e.exports = r,
            r.prototype.duration = function () {
                var t = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var e = Math.random(),
                        n = Math.floor(e * this.jitter * t);
                    t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
                }
                return 0 | Math.min(t, this.max)
            },
            r.prototype.reset = function () {
                this.attempts = 0
            },
            r.prototype.setMin = function (t) {
                this.ms = t
            },
            r.prototype.setMax = function (t) {
                this.max = t
            },
            r.prototype.setJitter = function (t) {
                this.jitter = t
            }
        },
        {}],
        37: [function (t, e, n) {
            var r = [].slice;
            e.exports = function (t, e) {
                if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
                var n = r.call(arguments, 2);
                return function () {
                    return e.apply(t, n.concat(r.call(arguments)))
                }
            }
        },
        {}],
        38: [function (t, e, n) {
            function r(t) {
                return t ? i(t) : void 0
            }
            function i(t) {
                for (var e in r.prototype) t[e] = r.prototype[e];
                return t
            }
            e.exports = r,
            r.prototype.on = r.prototype.addEventListener = function (t, e) {
                return this._callbacks = this._callbacks || {},
                (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
                this
            },
            r.prototype.once = function (t, e) {
                function n() {
                    this.off(t, n),
                    e.apply(this, arguments)
                }
                return n.fn = e,
                this.on(t, n),
                this
            },
            r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {},
                this;
                var n = this._callbacks["$" + t];
                if (!n) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + t],
                this;
                for (var r, i = 0; i < n.length; i++) if (r = n[i], r === e || r.fn === e) {
                    n.splice(i, 1);
                    break
                }
                return this
            },
            r.prototype.emit = function (t) {
                this._callbacks = this._callbacks || {};
                var e = [].slice.call(arguments, 1),
                    n = this._callbacks["$" + t];
                if (n) {
                        n = n.slice(0);
                        for (var r = 0, i = n.length; i > r; ++r) n[r].apply(this, e)
                    }
                return this
            },
            r.prototype.listeners = function (t) {
                return this._callbacks = this._callbacks || {},
                this._callbacks["$" + t] || []
            },
            r.prototype.hasListeners = function (t) {
                return !!this.listeners(t).length
            }
        },
        {}],
        39: [function (t, e, n) {
            arguments[4][17][0].apply(n, arguments)
        },
        {
            "./debug": 40,
            dup: 17
        }],
        40: [function (t, e, n) {
            arguments[4][18][0].apply(n, arguments)
        },
        {
            dup: 18,
            ms: 44
        }],
        41: [function (t, e, n) {
            (function (n) {
                function r(t) {
                    function e(t) {
                        if (!t) return !1;
                        if (n.Buffer && n.Buffer.isBuffer && n.Buffer.isBuffer(t) || n.ArrayBuffer && t instanceof ArrayBuffer || n.Blob && t instanceof Blob || n.File && t instanceof File) return !0;
                        if (i(t)) {
                            for (var r = 0; r < t.length; r++) if (e(t[r])) return !0
                        } else if (t && "object" == typeof t) {
                            t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON());
                            for (var o in t) if (Object.prototype.hasOwnProperty.call(t, o) && e(t[o])) return !0
                        }
                        return !1
                    }
                    return e(t)
                }
                var i = t("isarray");
                e.exports = r
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        },
        {
            isarray: 43
        }],
        42: [function (t, e, n) {
            arguments[4][23][0].apply(n, arguments)
        },
        {
            dup: 23
        }],
        43: [function (t, e, n) {
            arguments[4][24][0].apply(n, arguments)
        },
        {
            dup: 24
        }],
        44: [function (t, e, n) {
            arguments[4][25][0].apply(n, arguments)
        },
        {
            dup: 25
        }],
        45: [function (t, e, n) {
            arguments[4][28][0].apply(n, arguments)
        },
        {
            dup: 28
        }],
        46: [function (t, e, n) {
            (function (e) {
                var r = t("isarray"),
                    i = t("./is-buffer");
                n.deconstructPacket = function (t) {
                        function e(t) {
                            if (!t) return t;
                            if (i(t)) {
                                var o = {
                                    _placeholder: !0,
                                    num: n.length
                                };
                                return n.push(t),
                                o
                            }
                            if (r(t)) {
                                for (var a = new Array(t.length), s = 0; s < t.length; s++) a[s] = e(t[s]);
                                return a
                            }
                            if ("object" == typeof t && !(t instanceof Date)) {
                                var a = {};
                                for (var u in t) a[u] = e(t[u]);
                                return a
                            }
                            return t
                        }
                        var n = [],
                            o = t.data,
                            a = t;
                        return a.data = e(o),
                        a.attachments = n.length,
                        {
                                packet: a,
                                buffers: n
                            }
                    },
                n.reconstructPacket = function (t, e) {
                        function n(t) {
                            if (t && t._placeholder) {
                                var i = e[t.num];
                                return i
                            }
                            if (r(t)) {
                                for (var o = 0; o < t.length; o++) t[o] = n(t[o]);
                                return t
                            }
                            if (t && "object" == typeof t) {
                                for (var a in t) t[a] = n(t[a]);
                                return t
                            }
                            return t
                        }
                        return t.data = n(t.data),
                        t.attachments = void 0,
                        t
                    },
                n.removeBlobs = function (t, n) {
                        function o(t, u, c) {
                            if (!t) return t;
                            if (e.Blob && t instanceof Blob || e.File && t instanceof File) {
                                a++;
                                var l = new FileReader;
                                l.onload = function () {
                                    c ? c[u] = this.result : s = this.result,
                                    --a || n(s)
                                },
                                l.readAsArrayBuffer(t)
                            } else if (r(t)) for (var f = 0; f < t.length; f++) o(t[f], f, t);
                            else if (t && "object" == typeof t && !i(t)) for (var h in t) o(t[h], h, t)
                        }
                        var a = 0,
                            s = t;
                        o(s),
                        a || n(s)
                    }
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        },
        {
            "./is-buffer": 48,
            isarray: 43
        }],
        47: [function (t, e, n) {
            function r() {}
            function i(t) {
                var e = "",
                    r = !1;
                return e += t.type,
                (n.BINARY_EVENT == t.type || n.BINARY_ACK == t.type) && (e += t.attachments, e += "-"),
                t.nsp && "/" != t.nsp && (r = !0, e += t.nsp),
                null != t.id && (r && (e += ",", r = !1), e += t.id),
                null != t.data && (r && (e += ","), e += f.stringify(t.data)),
                l("encoded %j as %s", t, e),
                e
            }
            function o(t, e) {
                function n(t) {
                    var n = p.deconstructPacket(t),
                        r = i(n.packet),
                        o = n.buffers;
                    o.unshift(r),
                    e(o)
                }
                p.removeBlobs(t, n)
            }
            function a() {
                this.reconstructor = null
            }
            function s(t) {
                var e = {},
                    r = 0;
                if (e.type = Number(t.charAt(0)), null == n.types[e.type]) return c();
                if (n.BINARY_EVENT == e.type || n.BINARY_ACK == e.type) {
                        for (var i = "";
                        "-" != t.charAt(++r) && (i += t.charAt(r), r != t.length););
                        if (i != Number(i) || "-" != t.charAt(r)) throw new Error("Illegal attachments");
                        e.attachments = Number(i)
                    }
                if ("/" == t.charAt(r + 1)) for (e.nsp = ""; ++r;) {
                        var o = t.charAt(r);
                        if ("," == o) break;
                        if (e.nsp += o, r == t.length) break
                    } else e.nsp = "/";
                var a = t.charAt(r + 1);
                if ("" !== a && Number(a) == a) {
                        for (e.id = ""; ++r;) {
                            var o = t.charAt(r);
                            if (null == o || Number(o) != o) {
                                --r;
                                break
                            }
                            if (e.id += t.charAt(r), r == t.length) break
                        }
                        e.id = Number(e.id)
                    }
                if (t.charAt(++r)) try {
                        e.data = f.parse(t.substr(r))
                    } catch (s) {
                        return c()
                    }
                return l("decoded %s as %j", t, e),
                e
            }
            function u(t) {
                this.reconPack = t,
                this.buffers = []
            }
            function c(t) {
                return {
                    type: n.ERROR,
                    data: "parser error"
                }
            }
            var l = t("debug")("socket.io-parser"),
                f = t("json3"),
                h = (t("isarray"), t("component-emitter")),
                p = t("./binary"),
                d = t("./is-buffer");
            n.protocol = 4,
            n.types = ["CONNECT", "DISCONNECT", "EVENT", "BINARY_EVENT", "ACK", "BINARY_ACK", "ERROR"],
            n.CONNECT = 0,
            n.DISCONNECT = 1,
            n.EVENT = 2,
            n.ACK = 3,
            n.ERROR = 4,
            n.BINARY_EVENT = 5,
            n.BINARY_ACK = 6,
            n.Encoder = r,
            n.Decoder = a,
            r.prototype.encode = function (t, e) {
                    if (l("encoding packet %j", t), n.BINARY_EVENT == t.type || n.BINARY_ACK == t.type) o(t, e);
                    else {
                        var r = i(t);
                        e([r])
                    }
                },
            h(a.prototype),
            a.prototype.add = function (t) {
                    var e;
                    if ("string" == typeof t) e = s(t),
                    n.BINARY_EVENT == e.type || n.BINARY_ACK == e.type ? (this.reconstructor = new u(e), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", e)) : this.emit("decoded", e);
                    else {
                        if (!d(t) && !t.base64) throw new Error("Unknown type: " + t);
                        if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                        e = this.reconstructor.takeBinaryData(t),
                        e && (this.reconstructor = null, this.emit("decoded", e))
                    }
                },
            a.prototype.destroy = function () {
                    this.reconstructor && this.reconstructor.finishedReconstruction()
                },
            u.prototype.takeBinaryData = function (t) {
                    if (this.buffers.push(t), this.buffers.length == this.reconPack.attachments) {
                        var e = p.reconstructPacket(this.reconPack, this.buffers);
                        return this.finishedReconstruction(),
                        e
                    }
                    return null
                },
            u.prototype.finishedReconstruction = function () {
                    this.reconPack = null,
                    this.buffers = []
                }
        },
        {
            "./binary": 46,
            "./is-buffer": 48,
            "component-emitter": 49,
            debug: 39,
            isarray: 43,
            json3: 50
        }],
        48: [function (t, e, n) {
            (function (t) {
                function n(e) {
                    return t.Buffer && t.Buffer.isBuffer(e) || t.ArrayBuffer && e instanceof ArrayBuffer
                }
                e.exports = n
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        },
        {}],
        49: [function (t, e, n) {
            arguments[4][15][0].apply(n, arguments)
        },
        {
            dup: 15
        }],
        50: [function (e, n, r) {
            (function (e) {
                (function () {
                    function i(t, e) {
                        function n(t) {
                            if (n[t] !== g) return n[t];
                            var i;
                            if ("bug-string-char-index" == t) i = "a" != "a" [0];
                            else if ("json" == t) i = n("json-stringify") && n("json-parse");
                            else {
                                var a, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                if ("json-stringify" == t) {
                                    var u = e.stringify,
                                        l = "function" == typeof u && $;
                                    if (l) {
                                            (a = function () {
                                                return 1
                                            }).toJSON = a;
                                            try {
                                                l = "0" === u(0) && "0" === u(new r) && '""' == u(new o) && u(y) === g && u(g) === g && u() === g && "1" === u(a) && "[1]" == u([a]) && "[null]" == u([g]) && "null" == u(null) && "[null,null,null]" == u([g, y, null]) && u({
                                                    a: [a, !0, !1, null, "\x00\b\n\f\r	"]
                                                }) == s && "1" === u(null, a) && "[\n 1,\n 2\n]" == u([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == u(new c(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == u(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == u(new c(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == u(new c(-1))
                                            } catch (f) {
                                                l = !1
                                            }
                                        }
                                    i = l
                                }
                                if ("json-parse" == t) {
                                    var h = e.parse;
                                    if ("function" == typeof h) try {
                                        if (0 === h("0") && !h(!1)) {
                                            a = h(s);
                                            var p = 5 == a.a.length && 1 === a.a[0];
                                            if (p) {
                                                try {
                                                    p = !h('"	"')
                                                } catch (f) {}
                                                if (p) try {
                                                    p = 1 !== h("01")
                                                } catch (f) {}
                                                if (p) try {
                                                    p = 1 !== h("1.")
                                                } catch (f) {}
                                            }
                                        }
                                    } catch (f) {
                                        p = !1
                                    }
                                    i = p
                                }
                            }
                            return n[t] = !! i
                        }
                        t || (t = u.Object()),
                        e || (e = u.Object());
                        var r = t.Number || u.Number,
                            o = t.String || u.String,
                            s = t.Object || u.Object,
                            c = t.Date || u.Date,
                            l = t.SyntaxError || u.SyntaxError,
                            f = t.TypeError || u.TypeError,
                            h = t.Math || u.Math,
                            p = t.JSON || u.JSON;
                        "object" == typeof p && p && (e.stringify = p.stringify, e.parse = p.parse);
                        var d, v, g, m = s.prototype,
                            y = m.toString,
                            $ = new c(-0xc782b5b800cec);
                        try {
                                $ = -109252 == $.getUTCFullYear() && 0 === $.getUTCMonth() && 1 === $.getUTCDate() && 10 == $.getUTCHours() && 37 == $.getUTCMinutes() && 6 == $.getUTCSeconds() && 708 == $.getUTCMilliseconds()
                            } catch (b) {}
                        if (!n("json")) {
                                var w = "[object Function]",
                                    _ = "[object Date]",
                                    x = "[object Number]",
                                    k = "[object String]",
                                    C = "[object Array]",
                                    S = "[object Boolean]",
                                    A = n("bug-string-char-index");
                                if (!$) var E = h.floor,
                                    O = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                    T = function (t, e) {
                                        return O[e] + 365 * (t - 1970) + E((t - 1969 + (e = +(e > 1))) / 4) - E((t - 1901 + e) / 100) + E((t - 1601 + e) / 400)
                                    };
                                if ((d = m.hasOwnProperty) || (d = function (t) {
                                        var e, n = {};
                                        return (n.__proto__ = null, n.__proto__ = {
                                            toString: 1
                                        }, n).toString != y ? d = function (t) {
                                            var e = this.__proto__,
                                                n = t in (this.__proto__ = null, this);
                                            return this.__proto__ = e,
                                            n
                                        } : (e = n.constructor, d = function (t) {
                                            var n = (this.constructor || e).prototype;
                                            return t in this && !(t in n && this[t] === n[t])
                                        }),
                                        n = null,
                                        d.call(this, t)
                                    }), v = function (t, e) {
                                        var n, r, i, o = 0;
                                        (n = function () {
                                            this.valueOf = 0
                                        }).prototype.valueOf = 0,
                                        r = new n;
                                        for (i in r) d.call(r, i) && o++;
                                        return n = r = null,
                                        o ? v = 2 == o ?
                                        function (t, e) {
                                            var n, r = {},
                                                i = y.call(t) == w;
                                            for (n in t) i && "prototype" == n || d.call(r, n) || !(r[n] = 1) || !d.call(t, n) || e(n)
                                        } : function (t, e) {
                                            var n, r, i = y.call(t) == w;
                                            for (n in t) i && "prototype" == n || !d.call(t, n) || (r = "constructor" === n) || e(n);
                                            (r || d.call(t, n = "constructor")) && e(n)
                                        } : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], v = function (t, e) {
                                            var n, i, o = y.call(t) == w,
                                                s = !o && "function" != typeof t.constructor && a[typeof t.hasOwnProperty] && t.hasOwnProperty || d;
                                            for (n in t) o && "prototype" == n || !s.call(t, n) || e(n);
                                            for (i = r.length; n = r[--i]; s.call(t, n) && e(n));
                                        }),
                                        v(t, e)
                                    }, !n("json-stringify")) {
                                        var j = {
                                            92: "\\\\",
                                            34: '\\"',
                                            8: "\\b",
                                            12: "\\f",
                                            10: "\\n",
                                            13: "\\r",
                                            9: "\\t"
                                        },
                                            P = "000000",
                                            R = function (t, e) {
                                                return (P + (e || 0)).slice(-t)
                                            },
                                            D = "\\u00",
                                            I = function (t) {
                                                for (var e = '"', n = 0, r = t.length, i = !A || r > 10, o = i && (A ? t.split("") : t); r > n; n++) {
                                                    var a = t.charCodeAt(n);
                                                    switch (a) {
                                                    case 8:
                                                    case 9:
                                                    case 10:
                                                    case 12:
                                                    case 13:
                                                    case 34:
                                                    case 92:
                                                        e += j[a];
                                                        break;
                                                    default:
                                                        if (32 > a) {
                                                            e += D + R(2, a.toString(16));
                                                            break
                                                        }
                                                        e += i ? o[n] : t.charAt(n)
                                                    }
                                                }
                                                return e + '"'
                                            },
                                            M = function (t, e, n, r, i, o, a) {
                                                var s, u, c, l, h, p, m, $, b, w, A, O, j, P, D, N;
                                                try {
                                                    s = e[t]
                                                } catch (U) {}
                                                if ("object" == typeof s && s) if (u = y.call(s), u != _ || d.call(s, "toJSON"))"function" == typeof s.toJSON && (u != x && u != k && u != C || d.call(s, "toJSON")) && (s = s.toJSON(t));
                                                else if (s > -1 / 0 && 1 / 0 > s) {
                                                    if (T) {
                                                        for (h = E(s / 864e5), c = E(h / 365.2425) + 1970 - 1; T(c + 1, 0) <= h; c++);
                                                        for (l = E((h - T(c, 0)) / 30.42); T(c, l + 1) <= h; l++);
                                                        h = 1 + h - T(c, l),
                                                        p = (s % 864e5 + 864e5) % 864e5,
                                                        m = E(p / 36e5) % 24,
                                                        $ = E(p / 6e4) % 60,
                                                        b = E(p / 1e3) % 60,
                                                        w = p % 1e3
                                                    } else c = s.getUTCFullYear(),
                                                    l = s.getUTCMonth(),
                                                    h = s.getUTCDate(),
                                                    m = s.getUTCHours(),
                                                    $ = s.getUTCMinutes(),
                                                    b = s.getUTCSeconds(),
                                                    w = s.getUTCMilliseconds();
                                                    s = (0 >= c || c >= 1e4 ? (0 > c ? "-" : "+") + R(6, 0 > c ? -c : c) : R(4, c)) + "-" + R(2, l + 1) + "-" + R(2, h) + "T" + R(2, m) + ":" + R(2, $) + ":" + R(2, b) + "." + R(3, w) + "Z"
                                                } else s = null;
                                                if (n && (s = n.call(e, t, s)), null === s) return "null";
                                                if (u = y.call(s), u == S) return "" + s;
                                                if (u == x) return s > -1 / 0 && 1 / 0 > s ? "" + s : "null";
                                                if (u == k) return I("" + s);
                                                if ("object" == typeof s) {
                                                    for (P = a.length; P--;) if (a[P] === s) throw f();
                                                    if (a.push(s), A = [], D = o, o += i, u == C) {
                                                        for (j = 0, P = s.length; P > j; j++) O = M(j, s, n, r, i, o, a),
                                                        A.push(O === g ? "null" : O);
                                                        N = A.length ? i ? "[\n" + o + A.join(",\n" + o) + "\n" + D + "]" : "[" + A.join(",") + "]" : "[]"
                                                    } else v(r || s, function (t) {
                                                        var e = M(t, s, n, r, i, o, a);
                                                        e !== g && A.push(I(t) + ":" + (i ? " " : "") + e)
                                                    }),
                                                    N = A.length ? i ? "{\n" + o + A.join(",\n" + o) + "\n" + D + "}" : "{" + A.join(",") + "}" : "{}";
                                                    return a.pop(),
                                                    N
                                                }
                                            };
                                        e.stringify = function (t, e, n) {
                                                var r, i, o, s;
                                                if (a[typeof e] && e) if ((s = y.call(e)) == w) i = e;
                                                else if (s == C) {
                                                    o = {};
                                                    for (var u, c = 0, l = e.length; l > c; u = e[c++], s = y.call(u), (s == k || s == x) && (o[u] = 1));
                                                }
                                                if (n) if ((s = y.call(n)) == x) {
                                                    if ((n -= n % 1) > 0) for (r = "", n > 10 && (n = 10); r.length < n; r += " ");
                                                } else s == k && (r = n.length <= 10 ? n : n.slice(0, 10));
                                                return M("", (u = {}, u[""] = t, u), i, o, r, "", [])
                                            }
                                    }
                                if (!n("json-parse")) {
                                        var N, U, q = o.fromCharCode,
                                            B = {
                                                92: "\\",
                                                34: '"',
                                                47: "/",
                                                98: "\b",
                                                116: "	",
                                                110: "\n",
                                                102: "\f",
                                                114: "\r"
                                            },
                                            F = function () {
                                                throw N = U = null,
                                                l()
                                            },
                                            L = function () {
                                                for (var t, e, n, r, i, o = U, a = o.length; a > N;) switch (i = o.charCodeAt(N)) {
                                                case 9:
                                                case 10:
                                                case 13:
                                                case 32:
                                                    N++;
                                                    break;
                                                case 123:
                                                case 125:
                                                case 91:
                                                case 93:
                                                case 58:
                                                case 44:
                                                    return t = A ? o.charAt(N) : o[N],
                                                    N++,
                                                    t;
                                                case 34:
                                                    for (t = "@", N++; a > N;) if (i = o.charCodeAt(N), 32 > i) F();
                                                    else if (92 == i) switch (i = o.charCodeAt(++N)) {
                                                    case 92:
                                                    case 34:
                                                    case 47:
                                                    case 98:
                                                    case 116:
                                                    case 110:
                                                    case 102:
                                                    case 114:
                                                        t += B[i],
                                                        N++;
                                                        break;
                                                    case 117:
                                                        for (e = ++N, n = N + 4; n > N; N++) i = o.charCodeAt(N),
                                                        i >= 48 && 57 >= i || i >= 97 && 102 >= i || i >= 65 && 70 >= i || F();
                                                        t += q("0x" + o.slice(e, N));
                                                        break;
                                                    default:
                                                        F()
                                                    } else {
                                                        if (34 == i) break;
                                                        for (i = o.charCodeAt(N), e = N; i >= 32 && 92 != i && 34 != i;) i = o.charCodeAt(++N);
                                                        t += o.slice(e, N)
                                                    }
                                                    if (34 == o.charCodeAt(N)) return N++,
                                                    t;
                                                    F();
                                                default:
                                                    if (e = N, 45 == i && (r = !0, i = o.charCodeAt(++N)), i >= 48 && 57 >= i) {
                                                        for (48 == i && (i = o.charCodeAt(N + 1), i >= 48 && 57 >= i) && F(), r = !1; a > N && (i = o.charCodeAt(N), i >= 48 && 57 >= i); N++);
                                                        if (46 == o.charCodeAt(N)) {
                                                            for (n = ++N; a > n && (i = o.charCodeAt(n), i >= 48 && 57 >= i); n++);
                                                            n == N && F(),
                                                            N = n
                                                        }
                                                        if (i = o.charCodeAt(N), 101 == i || 69 == i) {
                                                            for (i = o.charCodeAt(++N), (43 == i || 45 == i) && N++, n = N; a > n && (i = o.charCodeAt(n), i >= 48 && 57 >= i); n++);
                                                            n == N && F(),
                                                            N = n
                                                        }
                                                        return +o.slice(e, N)
                                                    }
                                                    if (r && F(), "true" == o.slice(N, N + 4)) return N += 4,
                                                    !0;
                                                    if ("false" == o.slice(N, N + 5)) return N += 5,
                                                    !1;
                                                    if ("null" == o.slice(N, N + 4)) return N += 4,
                                                    null;
                                                    F()
                                                }
                                                return "$"
                                            },
                                            H = function (t) {
                                                var e, n;
                                                if ("$" == t && F(), "string" == typeof t) {
                                                    if ("@" == (A ? t.charAt(0) : t[0])) return t.slice(1);
                                                    if ("[" == t) {
                                                        for (e = []; t = L(), "]" != t; n || (n = !0)) n && ("," == t ? (t = L(), "]" == t && F()) : F()),
                                                        "," == t && F(),
                                                        e.push(H(t));
                                                        return e
                                                    }
                                                    if ("{" == t) {
                                                        for (e = {}; t = L(), "}" != t; n || (n = !0)) n && ("," == t ? (t = L(), "}" == t && F()) : F()),
                                                        ("," == t || "string" != typeof t || "@" != (A ? t.charAt(0) : t[0]) || ":" != L()) && F(),
                                                        e[t.slice(1)] = H(L());
                                                        return e
                                                    }
                                                    F()
                                                }
                                                return t
                                            },
                                            V = function (t, e, n) {
                                                var r = z(t, e, n);
                                                r === g ? delete t[e] : t[e] = r
                                            },
                                            z = function (t, e, n) {
                                                var r, i = t[e];
                                                if ("object" == typeof i && i) if (y.call(i) == C) for (r = i.length; r--;) V(i, r, n);
                                                else v(i, function (t) {
                                                    V(i, t, n)
                                                });
                                                return n.call(t, e, i)
                                            };
                                        e.parse = function (t, e) {
                                                var n, r;
                                                return N = 0,
                                                U = "" + t,
                                                n = H(L()),
                                                "$" != L() && F(),
                                                N = U = null,
                                                e && y.call(e) == w ? z((r = {}, r[""] = n, r), "", e) : n
                                            }
                                    }
                            }
                        return e.runInContext = i,
                        e
                    }
                    var o = "function" == typeof t && t.amd,
                        a = {
                            "function": !0,
                            object: !0
                        },
                        s = a[typeof r] && r && !r.nodeType && r,
                        u = a[typeof window] && window || this,
                        c = s && a[typeof n] && n && !n.nodeType && "object" == typeof e && e;
                    if (!c || c.global !== c && c.window !== c && c.self !== c || (u = c), s && !o) i(u, s);
                    else {
                            var l = u.JSON,
                                f = u.JSON3,
                                h = !1,
                                p = i(u, u.JSON3 = {
                                    noConflict: function () {
                                        return h || (h = !0, u.JSON = l, u.JSON3 = f, l = f = null),
                                        p
                                    }
                                });
                            u.JSON = {
                                    parse: p.parse,
                                    stringify: p.stringify
                                }
                        }
                    o && t(function () {
                            return p
                        })
                }).call(this)
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        },
        {}],
        51: [function (t, e, n) {
            function r(t, e) {
                var n = [];
                e = e || 0;
                for (var r = e || 0; r < t.length; r++) n[r - e] = t[r];
                return n
            }
            e.exports = r
        },
        {}]
    }, {}, [31])(31)
}),


function () {
    function t(t) {
        for (var e = [], n = 0; n < t.length; n += 4) e.push(t[n] << 24 | t[n + 1] << 16 | t[n + 2] << 8 | t[n + 3]);
        return e
    }
    var e, n = this,
        r = (n.mymodule, null),
        i = null;
    if ("undefined" == typeof Buffer) {
            r = function (t) {
                if ("number" == typeof t) {
                    for (var e = [], n = 0; t > n; n++) e.push(0);
                    return e
                }
                for (var n = 0; n < t.length; n++) if (t[n] < 0 || t[n] >= 256 || "number" != typeof t[n]) throw new Error("invalid byte at index " + n + "(" + t[n] + ")");
                return t.slice(0)
            },
            Array.prototype.copy = function (t, e, n, r) {
                null == e && (e = 0),
                null == n && (n = 0),
                null == r && (r = this.length);
                for (var i = n; r > i; i++) t[e++] = this[i]
            },
            i = function (t, e) {
                if (null == e || "utf8" == e.toLowerCase().replace(/ |-/g, "")) {
                    var n = [],
                        r = 0;
                    for (t = encodeURI(t); r < t.length;) {
                            var i = t.charCodeAt(r++);
                            37 === i ? (n.push(parseInt(t.substr(r, 2), 16)), r += 2) : n.push(i)
                        }
                    return n
                }
                if ("hex" == e.toLowerCase()) {
                    for (var n = [], r = 0; r < t.length; r += 2) n.push(parseInt(t.substr(r, 2), 16));
                    return n
                }
                return null
            };
            var o = "0123456789abcdef";
            e = function (t, e) {
                if (null == e || "utf8" == e.toLowerCase().replace(/ |-/g, "")) {
                    for (var n = [], r = 0; r < t.length;) {
                        var i = t[r];
                        128 > i ? (n.push(String.fromCharCode(i)), r++) : i > 191 && 224 > i ? (n.push(String.fromCharCode((31 & i) << 6 | 63 & t[r + 1])), r += 2) : (n.push(String.fromCharCode((15 & i) << 12 | (63 & t[r + 1]) << 6 | 63 & t[r + 2])), r += 3)
                    }
                    return n.join("")
                }
                if ("hex" == e.toLowerCase()) {
                    for (var n = [], r = 0; r < t.length; r++) {
                        var a = t[r];
                        n.push(o[(240 & a) >> 4] + o[15 & a])
                    }
                    return n.join("")
                }
                return n
            }
        } else r = function (t) {
            return new Buffer(t)
        },
    i = function (t, e) {
            return new Buffer(t, e)
        },
    e = function (t, e) {
            return new Buffer(t).toString(e)
        };
    var a = {
            16: 10,
            24: 12,
            32: 14
        },
        s = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
        u = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
        c = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
        l = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
        f = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
        h = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
        p = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
        d = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
        v = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
        g = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
        m = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
        y = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
        $ = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
        b = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
        w = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925],
        _ = function (t) {
            this.key = r(t),
            this._prepare()
        };
    _.prototype._prepare = function () {
            var e = a[this.key.length];
            if (null === e) throw new Error("invalid key size (must be length 16, 24 or 32)");
            this._Ke = [],
            this._Kd = [];
            for (var n = 0; e >= n; n++) this._Ke.push([0, 0, 0, 0]),
            this._Kd.push([0, 0, 0, 0]);
            for (var r, i = 4 * (e + 1), o = this.key.length / 4, c = t(this.key), n = 0; o > n; n++) r = n >> 2,
            this._Ke[r][n % 4] = c[n],
            this._Kd[e - r][n % 4] = c[n];
            for (var l, f = 0, h = o; i > h;) {
                if (l = c[o - 1], c[0] ^= u[l >> 16 & 255] << 24 ^ u[l >> 8 & 255] << 16 ^ u[255 & l] << 8 ^ u[l >> 24 & 255] ^ s[f] << 24, f += 1, 8 != o) for (var n = 1; o > n; n++) c[n] ^= c[n - 1];
                else {
                    for (var n = 1; o / 2 > n; n++) c[n] ^= c[n - 1];
                    l = c[o / 2 - 1],
                    c[o / 2] ^= u[255 & l] ^ u[l >> 8 & 255] << 8 ^ u[l >> 16 & 255] << 16 ^ u[l >> 24 & 255] << 24;
                    for (var n = o / 2 + 1; o > n; n++) c[n] ^= c[n - 1]
                }
                for (var p, d, n = 0; o > n && i > h;) p = h >> 2,
                d = h % 4,
                this._Ke[p][d] = c[n],
                this._Kd[e - p][d] = c[n++],
                h++
            }
            for (var p = 1; e > p; p++) for (var d = 0; 4 > d; d++) l = this._Kd[p][d],
            this._Kd[p][d] = y[l >> 24 & 255] ^ $[l >> 16 & 255] ^ b[l >> 8 & 255] ^ w[255 & l]
        },
    _.prototype.encrypt = function (e) {
            if (16 != e.length) return new Error("plaintext must be a block of size 16");
            for (var n = this._Ke.length - 1, i = [0, 0, 0, 0], o = t(e), a = 0; 4 > a; a++) o[a] ^= this._Ke[0][a];
            for (var s = 1; n > s; s++) {
                for (var a = 0; 4 > a; a++) i[a] = l[o[a] >> 24 & 255] ^ f[o[(a + 1) % 4] >> 16 & 255] ^ h[o[(a + 2) % 4] >> 8 & 255] ^ p[255 & o[(a + 3) % 4]] ^ this._Ke[s][a];
                o = i.slice(0)
            }
            for (var c, d = r(16), a = 0; 4 > a; a++) c = this._Ke[n][a],
            d[4 * a] = 255 & (u[o[a] >> 24 & 255] ^ c >> 24),
            d[4 * a + 1] = 255 & (u[o[(a + 1) % 4] >> 16 & 255] ^ c >> 16),
            d[4 * a + 2] = 255 & (u[o[(a + 2) % 4] >> 8 & 255] ^ c >> 8),
            d[4 * a + 3] = 255 & (u[255 & o[(a + 3) % 4]] ^ c);
            return d
        },
    _.prototype.decrypt = function (e) {
            if (16 != e.length) return new Error("ciphertext must be a block of size 16");
            for (var n = this._Kd.length - 1, i = [0, 0, 0, 0], o = t(e), a = 0; 4 > a; a++) o[a] ^= this._Kd[0][a];
            for (var s = 1; n > s; s++) {
                for (var a = 0; 4 > a; a++) i[a] = d[o[a] >> 24 & 255] ^ v[o[(a + 3) % 4] >> 16 & 255] ^ g[o[(a + 2) % 4] >> 8 & 255] ^ m[255 & o[(a + 1) % 4]] ^ this._Kd[s][a];
                o = i.slice(0)
            }
            for (var u, l = r(16), a = 0; 4 > a; a++) u = this._Kd[n][a],
            l[4 * a] = 255 & (c[o[a] >> 24 & 255] ^ u >> 24),
            l[4 * a + 1] = 255 & (c[o[(a + 3) % 4] >> 16 & 255] ^ u >> 16),
            l[4 * a + 2] = 255 & (c[o[(a + 2) % 4] >> 8 & 255] ^ u >> 8),
            l[4 * a + 3] = 255 & (c[255 & o[(a + 1) % 4]] ^ u);
            return l
        };
    var x = function (t) {
            this.description = "Electronic Code Block",
            this.name = "ecb",
            this._aes = new _(t)
        };
    x.prototype.encrypt = function (t) {
            return this._aes.encrypt(t)
        },
    x.prototype.decrypt = function (t, e) {
            return this._aes.decrypt(t)
        };
    var k = function (t, e) {
            if (this.description = "Cipher Block Chaining", this.name = "cbc", null === e) e = r([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            else if (16 != e.length) return new Error("initialation vector iv must be of length 16");
            this._lastCipherblock = r(e),
            this._aes = new _(t)
        };
    k.prototype.encrypt = function (t) {
            if (16 != t.length) return new Error("plaintext must be a block of size 16");
            for (var e = r(t), n = 0; 16 > n; n++) e[n] ^= this._lastCipherblock[n];
            return this._lastCipherblock = this._aes.encrypt(e),
            this._lastCipherblock
        },
    k.prototype.decrypt = function (t) {
            if (16 != t.length) return new Error("ciphertext must be a block of size 16");
            for (var e = this._aes.decrypt(t), n = 0; 16 > n; n++) e[n] ^= this._lastCipherblock[n];
            return t.copy(this._lastCipherblock),
            e
        };
    var C = function (t, e, n) {
            if (this.description = "Cipher Feedback", this.name = "cfb", null === e) e = r([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            else if (16 != e.length) return new Error("initialation vector iv must be of length 16");
            n || (n = 1),
            this.segmentSize = n,
            this._shiftRegister = r(e),
            this._aes = new _(t)
        };
    C.prototype.encrypt = function (t) {
            if (t.length % this.segmentSize != 0) return new Error("plaintext must be a block of size module segmentSize (" + this.segmentSize + ")");
            for (var e, n = r(t), i = 0; i < n.length; i += this.segmentSize) {
                e = this._aes.encrypt(this._shiftRegister);
                for (var o = 0; o < this.segmentSize; o++) n[i + o] ^= e[o];
                this._shiftRegister.copy(this._shiftRegister, 0, this.segmentSize),
                n.copy(this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize)
            }
            return n
        },
    C.prototype.decrypt = function (t) {
            if (t.length % this.segmentSize != 0) return new Error("ciphertext must be a block of size module segmentSize (" + this.segmentSize + ")");
            for (var e, n = r(t), i = 0; i < n.length; i += this.segmentSize) {
                e = this._aes.encrypt(this._shiftRegister);
                for (var o = 0; o < this.segmentSize; o++) n[i + o] ^= e[o];
                this._shiftRegister.copy(this._shiftRegister, 0, this.segmentSize),
                t.copy(this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize)
            }
            return n
        };
    var S = function (t, e) {
            if (this.description = "Output Feedback", this.name = "ofb", null === e) e = r([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            else if (16 != e.length) return new Error("initialation vector iv must be of length 16");
            this._lastPrecipher = r(e),
            this._lastPrecipherIndex = 16,
            this._aes = new _(t)
        };
    S.prototype.encrypt = function (t) {
            for (var e = r(t), n = 0; n < e.length; n++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0),
            e[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
            return e
        },
    S.prototype.decrypt = S.prototype.encrypt;
    var A = function (t) {
            (null === t || void 0 === t) && (t = 1),
            "number" == typeof t ? (this._counter = r([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), this.setValue(t)) : this.setBytes(t)
        };
    A.prototype.setValue = function (t) {
            if ("number" != typeof t) throw new Error("value must be a number");
            for (var e = 15; e >= 0; --e) this._counter[e] = t % 256,
            t >>= 8
        },
    A.prototype.setBytes = function (t) {
            if (16 != t.length) throw new Error("invalid counter bytes size (must be 16)");
            this._counter = r(t)
        },
    A.prototype.increment = function () {
            for (var t = 15; t >= 0; t--) {
                if (255 !== this._counter[t]) {
                    this._counter[t]++;
                    break
                }
                this._counter[t] = 0
            }
        };
    var E = function (t, e) {
            this.description = "Counter",
            this.name = "ctr",
            null === e && (e = new A),
            this._counter = e,
            this._remainingCounter = null,
            this._remainingCounterIndex = 16,
            this._aes = new _(t)
        };
    E.prototype.encrypt = function (t) {
            for (var e = r(t), n = 0; n < e.length; n++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()),
            e[n] ^= this._remainingCounter[this._remainingCounterIndex++];
            return e
        },
    E.prototype.decrypt = E.prototype.encrypt;
    var O = {
            ecb: x,
            cbc: k,
            cfb: C,
            ofb: S,
            ctr: E
        },
        T = {
            AES: _,
            Counter: A,
            ModeOfOperation: O,
            util: {
                convertBytesToString: e,
                convertStringToBytes: i
            }
        };
    "undefined" != typeof exports ? (exports.AES = _, exports.Counter = A, exports.ModeOfOperation = O, exports.util = {
            convertBytesToString: e,
            convertStringToBytes: i
        }) : n.aesjs = T
}.call(this),


function t(e, n, r) {
    function i(a, s) {
        if (!n[a]) {
            if (!e[a]) {
                var u = "function" == typeof require && require;
                if (!s && u) return u(a, !0);
                if (o) return o(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            var l = n[a] = {
                exports: {}
            };
            e[a][0].call(l.exports, function (t) {
                var n = e[a][1][t];
                return i(n ? n : t)
            }, l, l.exports, t, e, n, r)
        }
        return n[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
    return i
}({
    1: [function (t, e, n) {
        e.exports = t("./src/client")
    },
    {
        "./src/client": 3
    }],
    2: [function (t, e, n) {
        "use strict";

        function r(t, e, n) {
            this.fn = t,
            this.context = e,
            this.once = n || !1
        }
        function i() {}
        var o = Object.prototype.hasOwnProperty,
            a = "function" != typeof Object.create ? "~" : !1;
        i.prototype._events = void 0,
        i.prototype.eventNames = function () {
                var t, e = this._events,
                    n = [];
                if (!e) return n;
                for (t in e) o.call(e, t) && n.push(a ? t.slice(1) : t);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
            },
        i.prototype.listeners = function (t, e) {
                var n = a ? a + t : t,
                    r = this._events && this._events[n];
                if (e) return !!r;
                if (!r) return [];
                if (r.fn) return [r.fn];
                for (var i = 0, o = r.length, s = new Array(o); o > i; i++) s[i] = r[i].fn;
                return s
            },
        i.prototype.emit = function (t, e, n, r, i, o) {
                var s = a ? a + t : t;
                if (!this._events || !this._events[s]) return !1;
                var u, c, l = this._events[s],
                    f = arguments.length;
                if ("function" == typeof l.fn) {
                        switch (l.once && this.removeListener(t, l.fn, void 0, !0), f) {
                        case 1:
                            return l.fn.call(l.context),
                            !0;
                        case 2:
                            return l.fn.call(l.context, e),
                            !0;
                        case 3:
                            return l.fn.call(l.context, e, n),
                            !0;
                        case 4:
                            return l.fn.call(l.context, e, n, r),
                            !0;
                        case 5:
                            return l.fn.call(l.context, e, n, r, i),
                            !0;
                        case 6:
                            return l.fn.call(l.context, e, n, r, i, o),
                            !0
                        }
                        for (c = 1, u = new Array(f - 1); f > c; c++) u[c - 1] = arguments[c];
                        l.fn.apply(l.context, u)
                    } else {
                        var h, p = l.length;
                        for (c = 0; p > c; c++) switch (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), f) {
                        case 1:
                            l[c].fn.call(l[c].context);
                            break;
                        case 2:
                            l[c].fn.call(l[c].context, e);
                            break;
                        case 3:
                            l[c].fn.call(l[c].context, e, n);
                            break;
                        default:
                            if (!u) for (h = 1, u = new Array(f - 1); f > h; h++) u[h - 1] = arguments[h];
                            l[c].fn.apply(l[c].context, u)
                        }
                    }
                return !0
            },
        i.prototype.on = function (t, e, n) {
                var i = new r(e, n || this),
                    o = a ? a + t : t;
                return this._events || (this._events = a ? {} : Object.create(null)),
                this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], i] : this._events[o].push(i) : this._events[o] = i,
                this
            },
        i.prototype.once = function (t, e, n) {
                var i = new r(e, n || this, !0),
                    o = a ? a + t : t;
                return this._events || (this._events = a ? {} : Object.create(null)),
                this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], i] : this._events[o].push(i) : this._events[o] = i,
                this
            },
        i.prototype.removeListener = function (t, e, n, r) {
                var i = a ? a + t : t;
                if (!this._events || !this._events[i]) return this;
                var o = this._events[i],
                    s = [];
                if (e) if (o.fn)(o.fn !== e || r && !o.once || n && o.context !== n) && s.push(o);
                else for (var u = 0, c = o.length; c > u; u++)(o[u].fn !== e || r && !o[u].once || n && o[u].context !== n) && s.push(o[u]);
                return s.length ? this._events[i] = 1 === s.length ? s[0] : s : delete this._events[i],
                this
            },
        i.prototype.removeAllListeners = function (t) {
                return this._events ? (t ? delete this._events[a ? a + t : t] : this._events = a ? {} : Object.create(null), this) : this
            },
        i.prototype.off = i.prototype.removeListener,
        i.prototype.addListener = i.prototype.on,
        i.prototype.setMaxListeners = function () {
                return this
            },
        i.prefixed = a,
        "undefined" != typeof e && (e.exports = i)
    },
    {}],
    3: [function (t, e, n) {
        function r(t, e) {
            var n = {
                data: {
                    event: "error",
                    error: "timeout"
                }
            };
            e.emit(h.RESPONSE, n, t.data),
            t.reject(n)
        }
        function i(t) {
            var e = t.socket,
                n = t._autoRegisteringAfterReconnect ? t._reconnectQ.shift() : t._queue.shift();
            if (!n) return "break";
            var r = n.data,
                i = "addRegId" === r.data.event,
                o = i ? r : l.toSecureData(r);
            t.emit(h.REQUEST, r),
            e.emit("request", o, function (e) {
                    e = l.fromSecureData(e),
                    t.emit(h.RESPONSE, e, r),
                    e && e.data && "success" === e.data.event ? n.resolve(e) : n.reject(e)
                })
        }
        var o = t("eventemitter3"),
            a = t("./util"),
            s = t("./queue"),
            u = t("./network").detectNetworkStatus,
            c = t("./constant"),
            l = t("./encrypt"),
            f = null,
            h = c.EVENT,
            p = !0,
            d = e.exports = function (t) {
                if ("undefined" == typeof io) throw new Error("Socket.io is needed");
                this._regData = null,
                this._queue = (new s).setTimeout(t.timeout),
                this._autoRegisteringAfterReconnect = !1,
                this._reconnectQ = (new s).setTimeout(t.timeout),
                this._isConnecting = !1,
                this._address = t.address,
                this._connect(this._address);
                var e = this;
                u(function () {
                    p = !0,
                    e._flushBuffer()
                }, function () {
                    p = !1
                })
            };
        "undefined" != typeof window && (window.ParrotSDK = d),
        a.assign(d.prototype, o.prototype),
        a.assign(d.prototype, c),
        d.usePromise = a.setPromise,
        d.setFindServerCallback = function (t) {
                f = t
            },
        d.prototype.clear = function () {
                this._disconnect(),
                this._regData = null,
                this._queue.clear()
            },
        d.prototype.addRegId = function (t, e) {
                this.socket || this._connect(this._address),
                this._regData = t;
                var n = (t && t.data ? t.data : t) || {};
                return n.secure && l.requireEncrypt(n.appId, n.secureKey),
                this._sendOutRequest({
                    ver: 2,
                    data: a.assign({}, n, {
                        event: "addRegId"
                    })
                }, e)
            },
        ["setRegInfo", "getRegInfo", "getRecentContacts", "setPrivateData", "getPrivateData", "send", "query", "pushAck", "addGroup", "getGroupInfo", "updateGroupInfo", "addGroupMembers", "removeGroupMembers", "leaveGroup", "removeContacts", "typingNotificationTick"].forEach(function (t) {
                d.prototype[t] = function (e) {
                    var n = (e && e.data ? e.data : e) || {};
                    return this._sendOutRequest({
                        data: a.assign({}, n, {
                            event: t
                        })
                    })
                }
            }),
        d.prototype._sendOutRequest = function (t, e) {
                var n = this[e ? "_reconnectQ" : "_queue"].push(t, r, this);
                return this.socket && this.socket.connected && this._flushBuffer(),
                n.promise
            },
        d.prototype._connect = function (t) {
                function e(t) {
                    n.socket = io.connect(t, {
                        reconnection: !0,
                        forceNew: !0
                    }),
                    n._listenEvents(),
                    n._isConnecting = !1,
                    n.emit(h.SOCKET_CREATED, n.socket)
                }
                var n = this;
                if (this._disconnect(), this._isConnecting) return this;
                if (this._isConnecting = !0, t) e(t);
                else {
                    if ("function" != typeof f) throw new Error('No "address" found');
                    f().then(function (t) {
                        e(t)
                    }, function (t) {
                        throw n._isConnecting = !1,
                        new Error("findServerCallback fail", t)
                    })
                }
                return this
            },
        d.prototype._disconnect = function () {
                this.socket && (this.socket.disconnect(), this.socket.off(), this.socket = null, this.emit(h.SOCKET_DESTROYED))
            },
        d.prototype._listenEvents = function () {
                var t = this.socket,
                    e = this,
                    n = 0;
                t.on("notification", function (t) {
                        t = l.fromSecureData(t);
                        try {
                            switch (t.data.event) {
                            case "push":
                                e.emit(h.PUSH, t);
                                break;
                            case "clean":
                                e.emit(h.CLEAN, t);
                                break;
                            default:
                                e.emit(h.ERROR, t)
                            }
                        } catch (n) {
                            e.emit(h.ERROR, n)
                        }
                    }),
                t.on("connect", function () {
                        e._flushBuffer()
                    }),
                t.on("reconnect", function (t) {
                        e._autoRegisteringAfterReconnect = !0,
                        e._regData ? e.addRegId(e._regData, !0).then(function () {
                            e._flushBuffer(),
                            e.emit(h.RE_REGISTER),
                            e._autoRegisteringAfterReconnect = !1
                        }, function (t) {
                            e._autoRegisteringAfterReconnect = !1
                        }) : e._autoRegisteringAfterReconnect = !1
                    }),
                t.on("reconnect_error", function () {
                        ++n > 3 && e._connect(e._address)
                    })
            },
        d.prototype._flushBuffer = function () {
                for (;
                "break" !== i(this););
            }
    },
    {
        "./constant": 4,
        "./encrypt": 5,
        "./network": 6,
        "./queue": 7,
        "./util": 8,
        eventemitter3: 2
    }],
    4: [function (t, e, n) {
        e.exports = {
            EVENT: {
                SOCKET_CREATED: "parrotSDK.event.socketCreated",
                SOCKET_DESTROYED: "parrotSDK.event.socketDestroyed",
                DEBUG: "parrotSDK.event.debug",
                ERROR: "parrotSDK.event.error",
                PUSH: "parrotSDK.event.push",
                CLEAN: "parrotSDK.event.clean",
                RE_REGISTER: "parrotSDK.event.reRegister",
                REQUEST: "parrotSDK.event.request",
                RESPONSE: "parrotSDK.event.response"
            }
        }
    },
    {}],
    5: [function (t, e, n) {
        e.exports = {
            secureKey: null,
            appId: null,
            requireEncrypt: function (t, e) {
                if ("string" != typeof t) throw new Error("AppId must be string");
                if ("string" != typeof e) throw new Error("Secure key must be string");
                if (16 != e.length && 24 != e.length && 32 != e.length) throw new Error("Secure key must has either 16, 24 or 32 characters");
                return this.appId = t,
                this.secureKey = e,
                this
            },
            toSecureData: function (t) {
                if (!this.secureKey || !this.appId) return t;
                if (void 0 === t || null === t) return t;
                var e = JSON.stringify(t),
                    n = aesjs.util.convertStringToBytes(e),
                    r = aesjs.util.convertStringToBytes(this.secureKey),
                    i = new aesjs.ModeOfOperation.ctr(r, new aesjs.Counter(this.appId.length));
                return i.encrypt(n)
            },
            fromSecureData: function (t) {
                if (!this.secureKey || !this.appId) return t;
                if (void 0 === t || null === t) return t;
                var e = aesjs.util.convertStringToBytes(this.secureKey),
                    n = new aesjs.ModeOfOperation.ctr(e, new aesjs.Counter(this.appId.length)),
                    r = n.decrypt(t),
                    i = aesjs.util.convertBytesToString(r);
                return JSON.parse(i)
            }
        }
    },
    {}],
    6: [function (t, e, n) {
        function r(t, e) {
            window.addEventListener ? (window.addEventListener("online", t, !1), window.addEventListener("offline", e, !1)) : (document.body.ononline = t, document.body.onoffline = e)
        }
        e.exports = {
            detectNetworkStatus: r
        }
    },
    {}],
    7: [function (t, e, n) {
        function r(t, e, n, r) {
            this.data = t,
            this.defer = o.getPromise().defer(),
            this.promise = this.defer.promise,
            this.handled = !1,
            this.client = r,
            this.setTimeoutCallback(e, n, this.client)
        }
        function i() {
            this.waitingQ = [],
            this.sendingQ = [],
            this.timeout = 3e4
        }
        var o = t("./util");
        r.prototype.resolve = function (t) {
            this._finish("resolve", t)
        },
        r.prototype.reject = function (t) {
            this._finish("reject", t)
        },
        r.prototype.setTimeoutCallback = function (t, e, n) {
            if ("function" != typeof t) throw new Error("Param cb must be a function.");
            var r = this;
            this.timeoutId = setTimeout(function () {
                t(r, n)
            }, e)
        },
        r.prototype._finish = function (t, e) {
            this.handled || (clearTimeout(this.timeoutId), this.defer[t](e), this.data = null, this.handled = !0)
        },
        i.prototype.setTimeout = function (t) {
            return "number" == typeof t && (this.timeout = 1e3 * t),
            this
        },
        i.prototype.push = function (t, e, n) {
            var i = new r(t, e, this.timeout, n);
            return this.waitingQ.push(i),
            this._clearHandled(),
            i
        },
        i.prototype.shift = function () {
            for (var t, e = this.waitingQ, n = this.sendingQ; t = e.shift();) {
                if (!t.handled) {
                    n.push(t);
                    break
                }
                t = null
            }
            return t
        },
        i.prototype.resend = function () {
            return this._clearHandled(),
            this.waitingQ = this.sendingQ.concat(this.waitingQ),
            this.sendingQ = [],
            this
        },
        i.prototype.clear = function () {
            this.waitingQ = [],
            this.sendingQ = []
        },
        i.prototype._clearHandled = function () {
            for (var t = this.sendingQ, e = t.length - 1; e >= 0;) t[e].handled && t.splice(e, 1),
            e--;
            return this
        },
        e.exports = i
    },
    {
        "./util": 8
    }],
    8: [function (t, e, n) {
        var r = "undefined" == typeof Promise ? null : Promise,
            i = n.isObject = function (t) {
                var e = typeof t;
                return "function" === e || "object" === e && !! t
            };
        n.assign = function (t) {
                if (!i(t)) return t;
                if ("function" == typeof Object.assign) return Object.assign.apply(null, arguments);
                var e, n, r, o;
                for (r = 1, o = arguments.length; o > r; r++) {
                    e = arguments[r];
                    for (n in e) if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
                        var a = Object.getOwnPropertyDescriptor(e, n);
                        Object.defineProperty(t, n, a)
                    } else t[n] = e[n]
                }
                return t
            },
        n.timeoutCallback = function (t, e) {
                if ("function" != typeof t) throw new Error("Param callback must be a function.");
                ("number" != typeof e || 0 > e) && (e = 3e4);
                var n = !1,
                    r = setTimeout(function () {
                        n || (n = !0, t(new Error("timeout")))
                    }, e);
                return function () {
                        n || (n = !0, clearTimeout(r), t.apply(this, arguments))
                    }
            },
        n.setPromise = function (t) {
                r = t
            },
        n.getPromise = function () {
                return r
            }
    },
    {}]
}, {}, [1]),
/**
 * @license AngularJS
 *          v1.2.28
 *          (c)
 *          2010-2014
 *          Google,
 *          Inc.
 *          http://angularjs.org
 *          License:
 *          MIT
 */

function (t, e, n) {
    "use strict";

    function r(t) {
        return function () {
            var e, n, r = arguments[0],
                i = "[" + (t ? t + ":" : "") + r + "] ",
                o = arguments[1],
                a = arguments,
                s = function (t) {
                    return "function" == typeof t ? t.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof t ? "undefined" : "string" != typeof t ? JSON.stringify(t) : t
                };
            for (e = i + o.replace(/\{\d+\}/g, function (t) {
                    var e, n = +t.slice(1, -1);
                    return n + 2 < a.length ? (e = a[n + 2], "function" == typeof e ? e.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? L(e) : e) : t
                }), e = e + "\nhttp://errors.angularjs.org/1.2.28/" + (t ? t + "/" : "") + r, n = 2; n < arguments.length; n++) e = e + (2 == n ? "?" : "&") + "p" + (n - 2) + "=" + encodeURIComponent(s(arguments[n]));
            return new Error(e)
        }
    }
    function i(t) {
        if (null == t || C(t)) return !1;
        var e = t.length;
        return 1 === t.nodeType && e ? !0 : b(t) || jn(t) || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function o(t, e, n) {
        var r;
        if (t) if (x(t)) for (r in t)"prototype" == r || "length" == r || "name" == r || t.hasOwnProperty && !t.hasOwnProperty(r) || e.call(n, t[r], r);
        else if (jn(t) || i(t)) for (r = 0; r < t.length; r++) e.call(n, t[r], r);
        else if (t.forEach && t.forEach !== o) t.forEach(e, n);
        else for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r);
        return t
    }
    function a(t) {
        var e = [];
        for (var n in t) t.hasOwnProperty(n) && e.push(n);
        return e.sort()
    }
    function s(t, e, n) {
        for (var r = a(t), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]);
        return r
    }
    function u(t) {
        return function (e, n) {
            t(n, e)
        }
    }
    function c() {
        for (var t, e = Tn.length; e;) {
            if (e--, t = Tn[e].charCodeAt(0), 57 == t) return Tn[e] = "A",
            Tn.join("");
            if (90 != t) return Tn[e] = String.fromCharCode(t + 1),
            Tn.join("");
            Tn[e] = "0"
        }
        return Tn.unshift("0"),
        Tn.join("")
    }
    function l(t, e) {
        e ? t.$$hashKey = e : delete t.$$hashKey
    }
    function f(t) {
        var e = t.$$hashKey;
        return o(arguments, function (e) {
            e !== t && o(e, function (e, n) {
                t[n] = e
            })
        }),
        l(t, e),
        t
    }
    function h(t) {
        return parseInt(t, 10)
    }
    function p(t, e) {
        return f(new(f(function () {}, {
            prototype: t
        })), e)
    }
    function d() {}
    function v(t) {
        return t
    }
    function g(t) {
        return function () {
            return t
        }
    }
    function m(t) {
        return "undefined" == typeof t
    }
    function y(t) {
        return "undefined" != typeof t
    }
    function $(t) {
        return null != t && "object" == typeof t
    }
    function b(t) {
        return "string" == typeof t
    }
    function w(t) {
        return "number" == typeof t
    }
    function _(t) {
        return "[object Date]" === An.call(t)
    }
    function x(t) {
        return "function" == typeof t
    }
    function k(t) {
        return "[object RegExp]" === An.call(t)
    }
    function C(t) {
        return t && t.document && t.location && t.alert && t.setInterval
    }
    function S(t) {
        return t && t.$evalAsync && t.$watch
    }
    function A(t) {
        return "[object File]" === An.call(t)
    }
    function E(t) {
        return "[object Blob]" === An.call(t)
    }
    function O(t) {
        return t && x(t.then)
    }
    function T(t) {
        return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
    }
    function j(t, e, n) {
        var r = [];
        return o(t, function (t, i, o) {
            r.push(e.call(n, t, i, o))
        }),
        r
    }
    function P(t, e) {
        return -1 != R(t, e)
    }
    function R(t, e) {
        if (t.indexOf) return t.indexOf(e);
        for (var n = 0; n < t.length; n++) if (e === t[n]) return n;
        return -1
    }
    function D(t, e) {
        var n = R(t, e);
        return n >= 0 && t.splice(n, 1),
        e
    }
    function I(t, e, n, r) {
        if (C(t) || S(t)) throw En("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (e) {
            if (t === e) throw En("cpi", "Can't copy! Source and destination are identical.");
            if (n = n || [], r = r || [], $(t)) {
                var i = R(n, t);
                if (-1 !== i) return r[i];
                n.push(t),
                r.push(e)
            }
            var a;
            if (jn(t)) {
                e.length = 0;
                for (var s = 0; s < t.length; s++) a = I(t[s], null, n, r),
                $(t[s]) && (n.push(t[s]), r.push(a)),
                e.push(a)
            } else {
                var u = e.$$hashKey;
                jn(e) ? e.length = 0 : o(e, function (t, n) {
                    delete e[n]
                });
                for (var c in t) a = I(t[c], null, n, r),
                $(t[c]) && (n.push(t[c]), r.push(a)),
                e[c] = a;
                l(e, u)
            }
        } else e = t,
        t && (jn(t) ? e = I(t, [], n, r) : _(t) ? e = new Date(t.getTime()) : k(t) ? (e = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex) : $(t) && (e = I(t, {}, n, r)));
        return e
    }
    function M(t, e) {
        if (jn(t)) {
            e = e || [];
            for (var n = 0; n < t.length; n++) e[n] = t[n]
        } else if ($(t)) {
            e = e || {};
            for (var r in t)!gn.call(t, r) || "$" === r.charAt(0) && "$" === r.charAt(1) || (e[r] = t[r])
        }
        return e || t
    }
    function N(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t !== t && e !== e) return !0;
        var r, i, o, a = typeof t,
            s = typeof e;
        if (a == s && "object" == a) {
                if (!jn(t)) {
                    if (_(t)) return _(e) ? isNaN(t.getTime()) && isNaN(e.getTime()) || t.getTime() === e.getTime() : !1;
                    if (k(t) && k(e)) return t.toString() == e.toString();
                    if (S(t) || S(e) || C(t) || C(e) || jn(e)) return !1;
                    o = {};
                    for (i in t) if ("$" !== i.charAt(0) && !x(t[i])) {
                        if (!N(t[i], e[i])) return !1;
                        o[i] = !0
                    }
                    for (i in e) if (!o.hasOwnProperty(i) && "$" !== i.charAt(0) && e[i] !== n && !x(e[i])) return !1;
                    return !0
                }
                if (!jn(e)) return !1;
                if ((r = t.length) == e.length) {
                    for (i = 0; r > i; i++) if (!N(t[i], e[i])) return !1;
                    return !0
                }
            }
        return !1
    }
    function U(t, e, n) {
        return t.concat(Cn.call(e, n))
    }
    function q(t, e) {
        return Cn.call(t, e || 0)
    }
    function B(t, e) {
        var n = arguments.length > 2 ? q(arguments, 2) : [];
        return !x(e) || e instanceof RegExp ? e : n.length ?
        function () {
            return arguments.length ? e.apply(t, n.concat(Cn.call(arguments, 0))) : e.apply(t, n)
        } : function () {
            return arguments.length ? e.apply(t, arguments) : e.call(t)
        }
    }
    function F(t, r) {
        var i = r;
        return "string" == typeof t && "$" === t.charAt(0) ? i = n : C(r) ? i = "$WINDOW" : r && e === r ? i = "$DOCUMENT" : S(r) && (i = "$SCOPE"),
        i
    }
    function L(t, e) {
        return "undefined" == typeof t ? n : JSON.stringify(t, F, e ? "  " : null)
    }
    function H(t) {
        return b(t) ? JSON.parse(t) : t
    }
    function V(t) {
        if ("function" == typeof t) t = !0;
        else if (t && 0 !== t.length) {
            var e = vn("" + t);
            t = !("f" == e || "0" == e || "false" == e || "no" == e || "n" == e || "[]" == e)
        } else t = !1;
        return t
    }
    function z(t) {
        t = wn(t).clone();
        try {
            t.empty()
        } catch (e) {}
        var n = 3,
            r = wn("<div>").append(t).html();
        try {
                return t[0].nodeType === n ? vn(r) : r.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (t, e) {
                    return "<" + vn(e)
                })
            } catch (e) {
                return vn(r)
            }
    }
    function W(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {}
    }
    function K(t) {
        var e, n, r = {};
        return o((t || "").split("&"), function (t) {
            if (t && (e = t.replace(/\+/g, "%20").split("="), n = W(e[0]), y(n))) {
                var i = y(e[1]) ? W(e[1]) : !0;
                gn.call(r, n) ? jn(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i
            }
        }),
        r
    }
    function J(t) {
        var e = [];
        return o(t, function (t, n) {
            jn(t) ? o(t, function (t) {
                e.push(Q(n, !0) + (t === !0 ? "" : "=" + Q(t, !0)))
            }) : e.push(Q(n, !0) + (t === !0 ? "" : "=" + Q(t, !0)))
        }),
        e.length ? e.join("&") : ""
    }
    function X(t) {
        return Q(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }
    function Q(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, e ? "%20" : "+")
    }
    function Y(t, n) {
        function r(t) {
            t && s.push(t)
        }
        var i, a, s = [t],
            u = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
            c = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        o(u, function (n) {
                u[n] = !0,
                r(e.getElementById(n)),
                n = n.replace(":", "\\:"),
                t.querySelectorAll && (o(t.querySelectorAll("." + n), r), o(t.querySelectorAll("." + n + "\\:"), r), o(t.querySelectorAll("[" + n + "]"), r))
            }),
        o(s, function (t) {
                if (!i) {
                    var e = " " + t.className + " ",
                        n = c.exec(e);
                    n ? (i = t, a = (n[2] || "").replace(/\s+/g, ",")) : o(t.attributes, function (e) {
                            !i && u[e.name] && (i = t, a = e.value)
                        })
                }
            }),
        i && n(i, a ? [a] : [])
    }
    function G(n, r) {
        var i = function () {
            if (n = wn(n), n.injector()) {
                var t = n[0] === e ? "document" : z(n);
                throw En("btstrpd", "App Already Bootstrapped with this Element '{0}'", t.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            r = r || [],
            r.unshift(["$provide", function (t) {
                t.value("$rootElement", n)
            }]),
            r.unshift("ng");
            var i = Rt(r);
            return i.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function (t, e, n, r, i) {
                t.$apply(function () {
                    e.data("$injector", r),
                    n(e)(t)
                })
            }]),
            i
        },
            a = /^NG_DEFER_BOOTSTRAP!/;
        return t && !a.test(t.name) ? i() : (t.name = t.name.replace(a, ""), void(On.resumeBootstrap = function (t) {
                o(t, function (t) {
                    r.push(t)
                }),
                i()
            }))
    }
    function Z(t, e) {
        return e = e || "_",
        t.replace(Dn, function (t, n) {
            return (n ? e : "") + t.toLowerCase()
        })
    }
    function tt() {
        _n = t.jQuery,
        _n && _n.fn.on ? (wn = _n, f(_n.fn, {
            scope: Jn.scope,
            isolateScope: Jn.isolateScope,
            controller: Jn.controller,
            injector: Jn.injector,
            inheritedData: Jn.inheritedData
        }), lt("remove", !0, !0, !1), lt("empty", !1, !1, !1), lt("html", !1, !1, !0)) : wn = dt,
        On.element = wn
    }
    function et(t, e, n) {
        if (!t) throw En("areq", "Argument '{0}' is {1}", e || "?", n || "required");
        return t
    }
    function nt(t, e, n) {
        return n && jn(t) && (t = t[t.length - 1]),
        et(x(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)),
        t
    }
    function rt(t, e) {
        if ("hasOwnProperty" === t) throw En("badname", "hasOwnProperty is not a valid {0} name", e)
    }
    function it(t, e, n) {
        if (!e) return t;
        for (var r, i = e.split("."), o = t, a = i.length, s = 0; a > s; s++) r = i[s],
        t && (t = (o = t)[r]);
        return !n && x(t) ? B(o, t) : t
    }
    function ot(t) {
        var e = t[0],
            n = t[t.length - 1];
        if (e === n) return wn(e);
        var r = e,
            i = [r];
        do {
                if (r = r.nextSibling, !r) break;
                i.push(r)
            } while (r !== n);
        return wn(i)
    }
    function at(t) {
        function e(t, e, n) {
            return t[e] || (t[e] = n())
        }
        var n = r("$injector"),
            i = r("ng"),
            o = e(t, "angular", Object);
        return o.$$minErr = o.$$minErr || r,
        e(o, "module", function () {
                var t = {};
                return function (r, o, a) {
                    var s = function (t, e) {
                        if ("hasOwnProperty" === t) throw i("badname", "hasOwnProperty is not a valid {0} name", e)
                    };
                    return s(r, "module"),
                    o && t.hasOwnProperty(r) && (t[r] = null),
                    e(t, r, function () {
                        function t(t, n, r) {
                            return function () {
                                return e[r || "push"]([t, n, arguments]),
                                u
                            }
                        }
                        if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                        var e = [],
                            i = [],
                            s = t("$injector", "invoke"),
                            u = {
                                _invokeQueue: e,
                                _runBlocks: i,
                                requires: o,
                                name: r,
                                provider: t("$provide", "provider"),
                                factory: t("$provide", "factory"),
                                service: t("$provide", "service"),
                                value: t("$provide", "value"),
                                constant: t("$provide", "constant", "unshift"),
                                animation: t("$animateProvider", "register"),
                                filter: t("$filterProvider", "register"),
                                controller: t("$controllerProvider", "register"),
                                directive: t("$compileProvider", "directive"),
                                config: s,
                                run: function (t) {
                                    return i.push(t),
                                    this
                                }
                            };
                        return a && s(a),
                        u
                    })
                }
            })
    }
    function st(e) {
        f(e, {
            bootstrap: G,
            copy: I,
            extend: f,
            equals: N,
            element: wn,
            forEach: o,
            injector: Rt,
            noop: d,
            bind: B,
            toJson: L,
            fromJson: H,
            identity: v,
            isUndefined: m,
            isDefined: y,
            isString: b,
            isFunction: x,
            isObject: $,
            isNumber: w,
            isElement: T,
            isArray: jn,
            version: In,
            isDate: _,
            lowercase: vn,
            uppercase: mn,
            callbacks: {
                counter: 0
            },
            $$minErr: r,
            $$csp: Rn
        }),
        xn = at(t);
        try {
            xn("ngLocale")
        } catch (n) {
            xn("ngLocale", []).provider("$locale", ne)
        }
        xn("ng", ["ngLocale"], ["$provide", function (t) {
            t.provider({
                $$sanitizeUri: Te
            }),
            t.provider("$compile", Bt).directive({
                a: Pr,
                input: Hr,
                textarea: Hr,
                form: Mr,
                script: Ci,
                select: Ei,
                style: Ti,
                option: Oi,
                ngBind: ei,
                ngBindHtml: ri,
                ngBindTemplate: ni,
                ngClass: ii,
                ngClassEven: ai,
                ngClassOdd: oi,
                ngCloak: si,
                ngController: ui,
                ngForm: Nr,
                ngHide: $i,
                ngIf: fi,
                ngInclude: hi,
                ngInit: di,
                ngNonBindable: vi,
                ngPluralize: gi,
                ngRepeat: mi,
                ngShow: yi,
                ngStyle: bi,
                ngSwitch: wi,
                ngSwitchWhen: _i,
                ngSwitchDefault: xi,
                ngOptions: Ai,
                ngTransclude: ki,
                ngModel: Xr,
                ngList: Gr,
                ngChange: Qr,
                required: Yr,
                ngRequired: Yr,
                ngValue: ti
            }).directive({
                ngInclude: pi
            }).directive(Rr).directive(ci),
            t.provider({
                $anchorScroll: Dt,
                $animate: rr,
                $browser: Nt,
                $cacheFactory: Ut,
                $controller: Ht,
                $document: Vt,
                $exceptionHandler: zt,
                $filter: Fe,
                $interpolate: te,
                $interval: ee,
                $http: Qt,
                $httpBackend: Gt,
                $location: ve,
                $log: ge,
                $parse: Ce,
                $rootScope: Oe,
                $q: Se,
                $sce: Ie,
                $sceDelegate: De,
                $sniffer: Me,
                $templateCache: qt,
                $timeout: Ne,
                $window: Be,
                $$rAF: Ee,
                $$asyncCallback: It
            })
        }])
    }
    function ut() {
        return ++Nn
    }
    function ct(t) {
        return t.replace(Bn, function (t, e, n, r) {
            return r ? n.toUpperCase() : n
        }).replace(Fn, "Moz$1")
    }
    function lt(t, e, n, r) {
        function i(t) {
            var i, a, s, u, c, l, f, h = n && t ? [this.filter(t)] : [this],
                p = e;
            if (!r || null != t) for (; h.length;) for (i = h.shift(), a = 0, s = i.length; s > a; a++) for (u = wn(i[a]), p ? u.triggerHandler("$destroy") : p = !p, c = 0, l = (f = u.children()).length; l > c; c++) h.push(_n(f[c]));
            return o.apply(this, arguments)
        }
        var o = _n.fn[t];
        o = o.$original || o,
        i.$original = o,
        _n.fn[t] = i
    }
    function ft(t) {
        return !Vn.test(t)
    }
    function ht(t, e) {
        var n, r, i, o, a, s, u = e.createDocumentFragment(),
            c = [];
        if (ft(t)) c.push(e.createTextNode(t));
        else {
                for (n = u.appendChild(e.createElement("div")), r = (zn.exec(t) || ["", ""])[1].toLowerCase(), i = Kn[r] || Kn._default, n.innerHTML = "<div>&#160;</div>" + i[1] + t.replace(Wn, "<$1></$2>") + i[2], n.removeChild(n.firstChild), o = i[0]; o--;) n = n.lastChild;
                for (a = 0, s = n.childNodes.length; s > a; ++a) c.push(n.childNodes[a]);
                n = u.firstChild,
                n.textContent = ""
            }
        return u.textContent = "",
        u.innerHTML = "",
        c
    }
    function pt(t, n) {
        n = n || e;
        var r;
        return (r = Hn.exec(t)) ? [n.createElement(r[1])] : ht(t, n)
    }
    function dt(t) {
        if (t instanceof dt) return t;
        if (b(t) && (t = Pn(t)), !(this instanceof dt)) {
            if (b(t) && "<" != t.charAt(0)) throw Ln("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new dt(t)
        }
        if (b(t)) {
            kt(this, pt(t));
            var n = wn(e.createDocumentFragment());
            n.append(this)
        } else kt(this, t)
    }
    function vt(t) {
        return t.cloneNode(!0)
    }
    function gt(t) {
        yt(t);
        for (var e = 0, n = t.childNodes || []; e < n.length; e++) gt(n[e])
    }
    function mt(t, e, n, r) {
        if (y(r)) throw Ln("offargs", "jqLite#off() does not support the `selector` argument");
        var i = $t(t, "events"),
            a = $t(t, "handle");
        a && (m(e) ? o(i, function (e, n) {
                qn(t, n, e),
                delete i[n]
            }) : o(e.split(" "), function (e) {
                m(n) ? (qn(t, e, i[e]), delete i[e]) : D(i[e] || [], n)
            }))
    }
    function yt(t, e) {
        var r = t.ng339,
            i = Mn[r];
        if (i) {
                if (e) return void delete Mn[r].data[e];
                i.handle && (i.events.$destroy && i.handle({}, "$destroy"), mt(t)),
                delete Mn[r],
                t.ng339 = n
            }
    }
    function $t(t, e, n) {
        var r = t.ng339,
            i = Mn[r || -1];
        return y(n) ? (i || (t.ng339 = r = ut(), i = Mn[r] = {}), void(i[e] = n)) : i && i[e]
    }
    function bt(t, e, n) {
        var r = $t(t, "data"),
            i = y(n),
            o = !i && y(e),
            a = o && !$(e);
        if (r || a || $t(t, "data", r = {}), i) r[e] = n;
        else {
                if (!o) return r;
                if (a) return r && r[e];
                f(r, e)
            }
    }
    function wt(t, e) {
        return t.getAttribute ? (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1 : !1
    }
    function _t(t, e) {
        e && t.setAttribute && o(e.split(" "), function (e) {
            t.setAttribute("class", Pn((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Pn(e) + " ", " ")))
        })
    }
    function xt(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            o(e.split(" "), function (t) {
                t = Pn(t),
                -1 === n.indexOf(" " + t + " ") && (n += t + " ")
            }),
            t.setAttribute("class", Pn(n))
        }
    }
    function kt(t, e) {
        if (e) {
            e = e.nodeName || !y(e.length) || C(e) ? [e] : e;
            for (var n = 0; n < e.length; n++) t.push(e[n])
        }
    }
    function Ct(t, e) {
        return St(t, "$" + (e || "ngController") + "Controller")
    }
    function St(t, e, r) {
        9 == t.nodeType && (t = t.documentElement);
        for (var i = jn(e) ? e : [e]; t;) {
            for (var o = 0, a = i.length; a > o; o++) if ((r = wn.data(t, i[o])) !== n) return r;
            t = t.parentNode || 11 === t.nodeType && t.host
        }
    }
    function At(t) {
        for (var e = 0, n = t.childNodes; e < n.length; e++) gt(n[e]);
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }
    function Et(t, e) {
        var n = Xn[e.toLowerCase()];
        return n && Qn[t.nodeName] && n
    }
    function Ot(t, n) {
        var r = function (r, i) {
            if (r.preventDefault || (r.preventDefault = function () {
                r.returnValue = !1
            }), r.stopPropagation || (r.stopPropagation = function () {
                r.cancelBubble = !0
            }), r.target || (r.target = r.srcElement || e), m(r.defaultPrevented)) {
                var a = r.preventDefault;
                r.preventDefault = function () {
                    r.defaultPrevented = !0,
                    a.call(r)
                },
                r.defaultPrevented = !1
            }
            r.isDefaultPrevented = function () {
                return r.defaultPrevented || r.returnValue === !1
            };
            var s = M(n[i || r.type] || []);
            o(s, function (e) {
                e.call(t, r)
            }),
            8 >= bn ? (r.preventDefault = null, r.stopPropagation = null, r.isDefaultPrevented = null) : (delete r.preventDefault, delete r.stopPropagation, delete r.isDefaultPrevented)
        };
        return r.elem = t,
        r
    }
    function Tt(t, e) {
        var r, i = typeof t;
        return "function" == i || "object" == i && null !== t ? "function" == typeof(r = t.$$hashKey) ? r = t.$$hashKey() : r === n && (r = t.$$hashKey = (e || c)()) : r = t,
        i + ":" + r
    }
    function jt(t, e) {
        if (e) {
            var n = 0;
            this.nextUid = function () {
                return ++n
            }
        }
        o(t, this.put, this)
    }
    function Pt(t) {
        var e, n, r, i;
        return "function" == typeof t ? (e = t.$inject) || (e = [], t.length && (n = t.toString().replace(tr, ""), r = n.match(Yn), o(r[1].split(Gn), function (t) {
            t.replace(Zn, function (t, n, r) {
                e.push(r)
            })
        })), t.$inject = e) : jn(t) ? (i = t.length - 1, nt(t[i], "fn"), e = t.slice(0, i)) : nt(t, "fn", !0),
        e
    }
    function Rt(t) {
        function e(t) {
            return function (e, n) {
                return $(e) ? void o(e, u(t)) : t(e, n)
            }
        }
        function n(t, e) {
            if (rt(t, "service"), (x(e) || jn(e)) && (e = w.instantiate(e)), !e.$get) throw er("pget", "Provider '{0}' must define $get factory method.", t);
            return y[t + p] = e
        }
        function r(t, e) {
            return n(t, {
                $get: e
            })
        }
        function i(t, e) {
            return r(t, ["$injector", function (t) {
                return t.instantiate(e)
            }])
        }
        function a(t, e) {
            return r(t, g(e))
        }
        function s(t, e) {
            rt(t, "constant"),
            y[t] = e,
            _[t] = e
        }
        function c(t, e) {
            var n = w.get(t + p),
                r = n.$get;
            n.$get = function () {
                    var t = k.invoke(r, n);
                    return k.invoke(e, null, {
                        $delegate: t
                    })
                }
        }
        function l(t) {
            var e, n, r, i, a = [];
            return o(t, function (t) {
                if (!m.get(t)) {
                    m.put(t, !0);
                    try {
                        if (b(t)) for (e = xn(t), a = a.concat(l(e.requires)).concat(e._runBlocks), n = e._invokeQueue, r = 0, i = n.length; i > r; r++) {
                            var o = n[r],
                                s = w.get(o[0]);
                            s[o[1]].apply(s, o[2])
                        } else x(t) ? a.push(w.invoke(t)) : jn(t) ? a.push(w.invoke(t)) : nt(t, "module")
                    } catch (u) {
                        throw jn(t) && (t = t[t.length - 1]),
                        u.message && u.stack && -1 == u.stack.indexOf(u.message) && (u = u.message + "\n" + u.stack),
                        er("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, u.stack || u.message || u)
                    }
                }
            }),
            a
        }
        function f(t, e) {
            function n(n) {
                if (t.hasOwnProperty(n)) {
                    if (t[n] === h) throw er("cdep", "Circular dependency found: {0}", n + " <- " + v.join(" <- "));
                    return t[n]
                }
                try {
                    return v.unshift(n),
                    t[n] = h,
                    t[n] = e(n)
                } catch (r) {
                    throw t[n] === h && delete t[n],
                    r
                } finally {
                    v.shift()
                }
            }
            function r(t, e, r) {
                var i, o, a, s = [],
                    u = Pt(t);
                for (o = 0, i = u.length; i > o; o++) {
                        if (a = u[o], "string" != typeof a) throw er("itkn", "Incorrect injection token! Expected service name as string, got {0}", a);
                        s.push(r && r.hasOwnProperty(a) ? r[a] : n(a))
                    }
                return jn(t) && (t = t[i]),
                t.apply(e, s)
            }
            function i(t, e) {
                var n, i, o = function () {};
                return o.prototype = (jn(t) ? t[t.length - 1] : t).prototype,
                n = new o,
                i = r(t, n, e),
                $(i) || x(i) ? i : n
            }
            return {
                invoke: r,
                instantiate: i,
                get: n,
                annotate: Pt,
                has: function (e) {
                    return y.hasOwnProperty(e + p) || t.hasOwnProperty(e)
                }
            }
        }
        var h = {},
            p = "Provider",
            v = [],
            m = new jt([], !0),
            y = {
                $provide: {
                    provider: e(n),
                    factory: e(r),
                    service: e(i),
                    value: e(a),
                    constant: e(s),
                    decorator: c
                }
            },
            w = y.$injector = f(y, function () {
                throw er("unpr", "Unknown provider: {0}", v.join(" <- "))
            }),
            _ = {},
            k = _.$injector = f(_, function (t) {
                var e = w.get(t + p);
                return k.invoke(e.$get, e)
            });
        return o(l(t), function (t) {
                k.invoke(t || d)
            }),
        k
    }
    function Dt() {
        var t = !0;
        this.disableAutoScrolling = function () {
            t = !1
        },
        this.$get = ["$window", "$location", "$rootScope", function (e, n, r) {
            function i(t) {
                var e = null;
                return o(t, function (t) {
                    e || "a" !== vn(t.nodeName) || (e = t)
                }),
                e
            }
            function a() {
                var t, r = n.hash();
                r ? (t = s.getElementById(r)) ? t.scrollIntoView() : (t = i(s.getElementsByName(r))) ? t.scrollIntoView() : "top" === r && e.scrollTo(0, 0) : e.scrollTo(0, 0)
            }
            var s = e.document;
            return t && r.$watch(function () {
                return n.hash()
            }, function () {
                r.$evalAsync(a)
            }),
            a
        }]
    }
    function It() {
        this.$get = ["$$rAF", "$timeout", function (t, e) {
            return t.supported ?
            function (e) {
                return t(e)
            } : function (t) {
                return e(t, 0, !1)
            }
        }]
    }
    function Mt(t, e, r, i) {
        function a(t) {
            try {
                t.apply(null, q(arguments, 1))
            } finally {
                if (y--, 0 === y) for (; $.length;) try {
                    $.pop()()
                } catch (e) {
                    r.error(e)
                }
            }
        }
        function s(t, e) {
            !
            function n() {
                o(_, function (t) {
                    t()
                }),
                w = e(n, t)
            }()
        }
        function u() {
            x != c.url() && (x = c.url(), o(S, function (t) {
                t(c.url())
            }))
        }
        var c = this,
            l = e[0],
            f = t.location,
            h = t.history,
            p = t.setTimeout,
            v = t.clearTimeout,
            g = {};
        c.isMock = !1;
        var y = 0,
            $ = [];
        c.$$completeOutstandingRequest = a,
        c.$$incOutstandingRequestCount = function () {
                y++
            },
        c.notifyWhenNoOutstandingRequests = function (t) {
                o(_, function (t) {
                    t()
                }),
                0 === y ? t() : $.push(t)
            };
        var w, _ = [];
        c.addPollFn = function (t) {
                return m(w) && s(100, p),
                _.push(t),
                t
            };
        var x = f.href,
            k = e.find("base"),
            C = null;
        c.url = function (e, n) {
                if (f !== t.location && (f = t.location), h !== t.history && (h = t.history), e) {
                    if (x == e) return;
                    var r = x && se(x) === se(e);
                    return x = e,
                    !r && i.history ? n ? h.replaceState(null, "", e) : (h.pushState(null, "", e), k.attr("href", k.attr("href"))) : (r || (C = e), n ? f.replace(e) : f.href = e),
                    c
                }
                return C || f.href.replace(/%27/g, "'")
            };
        var S = [],
            A = !1;
        c.onUrlChange = function (e) {
                return A || (i.history && wn(t).on("popstate", u), i.hashchange ? wn(t).on("hashchange", u) : c.addPollFn(u), A = !0),
                S.push(e),
                e
            },
        c.$$checkUrlChange = u,
        c.baseHref = function () {
                var t = k.attr("href");
                return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
            };
        var E = {},
            O = "",
            T = c.baseHref();
        c.cookies = function (t, e) {
                var i, o, a, s, u;
                if (!t) {
                    if (l.cookie !== O) for (O = l.cookie, o = O.split("; "), E = {}, s = 0; s < o.length; s++) a = o[s],
                    u = a.indexOf("="),
                    u > 0 && (t = unescape(a.substring(0, u)), E[t] === n && (E[t] = unescape(a.substring(u + 1))));
                    return E
                }
                e === n ? l.cookie = escape(t) + "=;path=" + T + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : b(e) && (i = (l.cookie = escape(t) + "=" + escape(e) + ";path=" + T).length + 1, i > 4096 && r.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"))
            },
        c.defer = function (t, e) {
                var n;
                return y++,
                n = p(function () {
                    delete g[n],
                    a(t)
                }, e || 0),
                g[n] = !0,
                n
            },
        c.defer.cancel = function (t) {
                return g[t] ? (delete g[t], v(t), a(d), !0) : !1
            }
    }
    function Nt() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (t, e, n, r) {
            return new Mt(t, r, e, n)
        }]
    }
    function Ut() {
        this.$get = function () {
            function t(t, n) {
                function i(t) {
                    t != h && (p ? p == t && (p = t.n) : p = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
                }
                function o(t, e) {
                    t != e && (t && (t.p = e), e && (e.n = t))
                }
                if (t in e) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
                var a = 0,
                    s = f({}, n, {
                        id: t
                    }),
                    u = {},
                    c = n && n.capacity || Number.MAX_VALUE,
                    l = {},
                    h = null,
                    p = null;
                return e[t] = {
                        put: function (t, e) {
                            if (c < Number.MAX_VALUE) {
                                var n = l[t] || (l[t] = {
                                    key: t
                                });
                                i(n)
                            }
                            if (!m(e)) return t in u || a++,
                            u[t] = e,
                            a > c && this.remove(p.key),
                            e
                        },
                        get: function (t) {
                            if (c < Number.MAX_VALUE) {
                                var e = l[t];
                                if (!e) return;
                                i(e)
                            }
                            return u[t]
                        },
                        remove: function (t) {
                            if (c < Number.MAX_VALUE) {
                                var e = l[t];
                                if (!e) return;
                                e == h && (h = e.p),
                                e == p && (p = e.n),
                                o(e.n, e.p),
                                delete l[t]
                            }
                            delete u[t],
                            a--
                        },
                        removeAll: function () {
                            u = {},
                            a = 0,
                            l = {},
                            h = p = null
                        },
                        destroy: function () {
                            u = null,
                            s = null,
                            l = null,
                            delete e[t]
                        },
                        info: function () {
                            return f({}, s, {
                                size: a
                            })
                        }
                    }
            }
            var e = {};
            return t.info = function () {
                var t = {};
                return o(e, function (e, n) {
                    t[n] = e.info()
                }),
                t
            },
            t.get = function (t) {
                return e[t]
            },
            t
        }
    }
    function qt() {
        this.$get = ["$cacheFactory", function (t) {
            return t("templates")
        }]
    }
    function Bt(t, r) {
        var i = {},
            a = "Directive",
            s = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
            c = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
            l = /^(on[a-z]+|formaction)$/;
        this.directive = function h(e, n) {
                return rt(e, "directive"),
                b(e) ? (et(n, "directiveFactory"), i.hasOwnProperty(e) || (i[e] = [], t.factory(e + a, ["$injector", "$exceptionHandler", function (t, n) {
                    var r = [];
                    return o(i[e], function (i, o) {
                        try {
                            var a = t.invoke(i);
                            x(a) ? a = {
                                compile: g(a)
                            } : !a.compile && a.link && (a.compile = g(a.link)),
                            a.priority = a.priority || 0,
                            a.index = o,
                            a.name = a.name || e,
                            a.require = a.require || a.controller && a.name,
                            a.restrict = a.restrict || "A",
                            r.push(a)
                        } catch (s) {
                            n(s)
                        }
                    }),
                    r
                }])), i[e].push(n)) : o(e, u(h)),
                this
            },
        this.aHrefSanitizationWhitelist = function (t) {
                return y(t) ? (r.aHrefSanitizationWhitelist(t), this) : r.aHrefSanitizationWhitelist()
            },
        this.imgSrcSanitizationWhitelist = function (t) {
                return y(t) ? (r.imgSrcSanitizationWhitelist(t), this) : r.imgSrcSanitizationWhitelist()
            },
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (t, r, u, h, d, g, m, y, w, _, k, C) {
                function S(t, e, n, r, i) {
                    t instanceof wn || (t = wn(t)),
                    o(t, function (e, n) {
                        3 == e.nodeType && e.nodeValue.match(/\S+/) && (t[n] = e = wn(e).wrap("<span></span>").parent()[0])
                    });
                    var a = E(t, e, t, n, r, i);
                    return A(t, "ng-scope"),


                    function (e, n, r, i) {
                        et(e, "scope");
                        var s = n ? Jn.clone.call(t) : t;
                        o(r, function (t, e) {
                            s.data("$" + e + "Controller", t)
                        });
                        for (var u = 0, c = s.length; c > u; u++) {
                            var l = s[u],
                                f = l.nodeType;
                                (1 === f || 9 === f) && s.eq(u).data("$scope", e)
                        }
                        return n && n(s, e),
                        a && a(e, s, s, i),
                        s
                    }
                }
                function A(t, e) {
                    try {
                        t.addClass(e)
                    } catch (n) {}
                }
                function E(t, e, r, i, o, a) {
                    function s(t, r, i, o) {
                        var a, s, u, c, l, f, h, p, v = r.length,
                            g = new Array(v);
                        for (l = 0; v > l; l++) g[l] = r[l];
                        for (l = 0, h = 0, f = d.length; f > l; h++) u = g[h],
                        a = d[l++],
                        s = d[l++],
                        a ? (a.scope ? (c = t.$new(), wn.data(u, "$scope", c)) : c = t, p = a.transcludeOnThisElement ? O(t, a.transclude, o) : !a.templateOnThisElement && o ? o : !o && e ? O(t, e) : null, a(s, c, u, i, p)) : s && s(t, u.childNodes, n, o)
                    }
                    for (var u, c, l, f, h, p, d = [], v = 0; v < t.length; v++) u = new X,
                    c = T(t[v], [], u, 0 === v ? i : n, o),
                    l = c.length ? R(c, t[v], u, e, r, null, [], [], a) : null,
                    l && l.scope && A(u.$$element, "ng-scope"),
                    h = l && l.terminal || !(f = t[v].childNodes) || !f.length ? null : E(f, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : e),
                    d.push(l, h),
                    p = p || l || h,
                    a = null;
                    return p ? s : null
                }
                function O(t, e, n) {
                    var r = function (r, i, o) {
                        var a = !1;
                        r || (r = t.$new(), r.$$transcluded = !0, a = !0);
                        var s = e(r, i, o, n);
                        return a && s.on("$destroy", function () {
                            r.$destroy()
                        }),
                        s
                    };
                    return r
                }
                function T(t, e, n, r, i) {
                    var o, a, u = t.nodeType,
                        l = n.$attr;
                    switch (u) {
                        case 1:
                            I(e, Ft(kn(t).toLowerCase()), "E", r, i);
                            for (var f, h, p, d, v, g, m = t.attributes, y = 0, $ = m && m.length; $ > y; y++) {
                                var w = !1,
                                    _ = !1;
                                if (f = m[y], !bn || bn >= 8 || f.specified) {
                                        h = f.name,
                                        v = Pn(f.value),
                                        d = Ft(h),
                                        (g = tt.test(d)) && (h = Z(d.substr(6), "-"));
                                        var x = d.replace(/(Start|End)$/, "");
                                        d === x + "Start" && (w = h, _ = h.substr(0, h.length - 5) + "end", h = h.substr(0, h.length - 6)),
                                        p = Ft(h.toLowerCase()),
                                        l[p] = h,
                                        (g || !n.hasOwnProperty(p)) && (n[p] = v, Et(t, p) && (n[p] = !0)),
                                        W(t, e, v, p),
                                        I(e, p, "A", r, i, w, _)
                                    }
                            }
                            if (a = t.className, b(a) && "" !== a) for (; o = c.exec(a);) p = Ft(o[2]),
                            I(e, p, "C", r, i) && (n[p] = Pn(o[3])),
                            a = a.substr(o.index + o[0].length);
                            break;
                        case 3:
                            H(e, t.nodeValue);
                            break;
                        case 8:
                            try {
                                o = s.exec(t.nodeValue),
                                o && (p = Ft(o[1]), I(e, p, "M", r, i) && (n[p] = Pn(o[2])))
                            } catch (k) {}
                        }
                    return e.sort(F),
                    e
                }
                function j(t, e, n) {
                    var r = [],
                        i = 0;
                    if (e && t.hasAttribute && t.hasAttribute(e)) {
                            do {
                                if (!t) throw ir("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, n);
                                1 == t.nodeType && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
                            } while (i > 0)
                        } else r.push(t);
                    return wn(r)
                }
                function P(t, e, n) {
                    return function (r, i, o, a, s) {
                        return i = j(i[0], e, n),
                        t(r, i, o, a, s)
                    }
                }
                function R(t, i, a, s, c, l, f, h, p) {
                    function d(t, e, n, r) {
                        t && (n && (t = P(t, n, r)), t.require = _.require, t.directiveName = k, (F === _ || _.$$isolateScope) && (t = J(t, {
                            isolateScope: !0
                        })), f.push(t)),
                        e && (n && (e = P(e, n, r)), e.require = _.require, e.directiveName = k, (F === _ || _.$$isolateScope) && (e = J(e, {
                            isolateScope: !0
                        })), h.push(e))
                    }
                    function v(t, e, n, r) {
                        var i, a = "data",
                            s = !1;
                        if (b(e)) {
                                for (;
                                "^" == (i = e.charAt(0)) || "?" == i;) e = e.substr(1),
                                "^" == i && (a = "inheritedData"),
                                s = s || "?" == i;
                                if (i = null, r && "data" === a && (i = r[e]), i = i || n[a]("$" + e + "Controller"), !i && !s) throw ir("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", e, t);
                                return i
                            }
                        return jn(e) && (i = [], o(e, function (e) {
                                i.push(v(t, e, n, r))
                            })),
                        i
                    }
                    function y(t, e, s, c, l) {
                        function p(t, e) {
                            var r;
                            return arguments.length < 2 && (e = t, t = n),
                            Y && (r = C),
                            l(t, e, r)
                        }
                        var d, y, $, b, w, _, x, k, C = {};
                        if (d = i === s ? a : M(a, new X(wn(s), a.$attr)), y = d.$$element, F) {
                            var S = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                            x = e.$new(!0),
                            !H || H !== F && H !== F.$$originalDirective ? y.data("$isolateScopeNoTemplate", x) : y.data("$isolateScope", x),
                            A(y, "ng-isolate-scope"),
                            o(F.scope, function (t, n) {
                                var i, o, a, s, u = t.match(S) || [],
                                    c = u[3] || n,
                                    l = "?" == u[2],
                                    f = u[1];
                                switch (x.$$isolateBindings[n] = f + c, f) {
                                    case "@":
                                        d.$observe(c, function (t) {
                                            x[n] = t
                                        }),
                                        d.$$observers[c].$$scope = e,
                                        d[c] && (x[n] = r(d[c])(e));
                                        break;
                                    case "=":
                                        if (l && !d[c]) return;
                                        o = g(d[c]),
                                        s = o.literal ? N : function (t, e) {
                                            return t === e || t !== t && e !== e
                                        },
                                        a = o.assign ||
                                        function () {
                                            throw i = x[n] = o(e),
                                            ir("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", d[c], F.name)
                                        },
                                        i = x[n] = o(e),
                                        x.$watch(function () {
                                            var t = o(e);
                                            return s(t, x[n]) || (s(t, i) ? a(e, t = x[n]) : x[n] = t),
                                            i = t
                                        }, null, o.literal);
                                        break;
                                    case "&":
                                        o = g(d[c]),
                                        x[n] = function (t) {
                                            return o(e, t)
                                        };
                                        break;
                                    default:
                                        throw ir("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", F.name, n, t)
                                    }
                            })
                        }
                        for (k = l && p, I && o(I, function (t) {
                            var n, r = {
                                $scope: t === F || t.$$isolateScope ? x : e,
                                $element: y,
                                $attrs: d,
                                $transclude: k
                            };
                            _ = t.controller,
                            "@" == _ && (_ = d[t.name]),
                            n = m(_, r),
                            C[t.name] = n,
                            Y || y.data("$" + t.name + "Controller", n),
                            t.controllerAs && (r.$scope[t.controllerAs] = n)
                        }), $ = 0, b = f.length; b > $; $++) try {
                            w = f[$],
                            w(w.isolateScope ? x : e, y, d, w.require && v(w.directiveName, w.require, y, C), k)
                        } catch (E) {
                            u(E, z(y))
                        }
                        var O = e;
                        for (F && (F.template || null === F.templateUrl) && (O = x), t && t(O, s.childNodes, n, l), $ = h.length - 1; $ >= 0; $--) try {
                            w = h[$],
                            w(w.isolateScope ? x : e, y, d, w.require && v(w.directiveName, w.require, y, C), k)
                        } catch (E) {
                            u(E, z(y))
                        }
                    }
                    p = p || {};
                    for (var w, _, k, C, E, O, R = -Number.MAX_VALUE, I = p.controllerDirectives, F = p.newIsolateScopeDirective, H = p.templateDirective, V = p.nonTlbTranscludeDirective, W = !1, Q = !1, Y = p.hasElementTranscludeDirective, Z = a.$$element = wn(i), tt = l, et = s, nt = 0, rt = t.length; rt > nt; nt++) {
                        _ = t[nt];
                        var it = _.$$start,
                            ot = _.$$end;
                        if (it && (Z = j(i, it, ot)), C = n, R > _.priority) break;
                        if ((O = _.scope) && (w = w || _, _.templateUrl || (L("new/isolated scope", F, _, Z), $(O) && (F = _))), k = _.name, !_.templateUrl && _.controller && (O = _.controller, I = I || {}, L("'" + k + "' controller", I[k], _, Z), I[k] = _), (O = _.transclude) && (W = !0, _.$$tlb || (L("transclusion", V, _, Z), V = _), "element" == O ? (Y = !0, R = _.priority, C = Z, Z = a.$$element = wn(e.createComment(" " + k + ": " + a[k] + " ")), i = Z[0], K(c, q(C), i), et = S(C, s, R, tt && tt.name, {
                                nonTlbTranscludeDirective: V
                            })) : (C = wn(vt(i)).contents(), Z.empty(), et = S(C, s))), _.template) if (Q = !0, L("template", H, _, Z), H = _, O = x(_.template) ? _.template(Z, a) : _.template, O = G(O), _.replace) {
                                if (tt = _, C = ft(O) ? [] : wn(Pn(O)), i = C[0], 1 != C.length || 1 !== i.nodeType) throw ir("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", k, "");
                                K(c, Z, i);
                                var at = {
                                    $attr: {}
                                },
                                    st = T(i, [], at),
                                    ut = t.splice(nt + 1, t.length - (nt + 1));
                                F && D(st),
                                t = t.concat(st).concat(ut),
                                U(a, at),
                                rt = t.length
                            } else Z.html(O);
                        if (_.templateUrl) Q = !0,
                        L("template", H, _, Z),
                        H = _,
                        _.replace && (tt = _),
                        y = B(t.splice(nt, t.length - nt), Z, a, c, W && et, f, h, {
                                controllerDirectives: I,
                                newIsolateScopeDirective: F,
                                templateDirective: H,
                                nonTlbTranscludeDirective: V
                            }),
                        rt = t.length;
                        else if (_.compile) try {
                                E = _.compile(Z, a, et),
                                x(E) ? d(null, E, it, ot) : E && d(E.pre, E.post, it, ot)
                            } catch (ct) {
                                u(ct, z(Z))
                            }
                        _.terminal && (y.terminal = !0, R = Math.max(R, _.priority))
                    }
                    return y.scope = w && w.scope === !0,
                    y.transcludeOnThisElement = W,
                    y.templateOnThisElement = Q,
                    y.transclude = et,
                    p.hasElementTranscludeDirective = Y,
                    y
                }
                function D(t) {
                    for (var e = 0, n = t.length; n > e; e++) t[e] = p(t[e], {
                        $$isolateScope: !0
                    })
                }
                function I(e, r, o, s, c, l, f) {
                    if (r === c) return null;
                    var h = null;
                    if (i.hasOwnProperty(r)) for (var d, v = t.get(r + a), g = 0, m = v.length; m > g; g++) try {
                        d = v[g],
                        (s === n || s > d.priority) && -1 != d.restrict.indexOf(o) && (l && (d = p(d, {
                            $$start: l,
                            $$end: f
                        })), e.push(d), h = d)
                    } catch (y) {
                        u(y)
                    }
                    return h
                }
                function U(t, e) {
                    var n = e.$attr,
                        r = t.$attr,
                        i = t.$$element;
                    o(t, function (r, i) {
                            "$" != i.charAt(0) && (e[i] && e[i] !== r && (r += ("style" === i ? ";" : " ") + e[i]), t.$set(i, r, !0, n[i]))
                        }),
                    o(e, function (e, o) {
                            "class" == o ? (A(i, e), t["class"] = (t["class"] ? t["class"] + " " : "") + e) : "style" == o ? (i.attr("style", i.attr("style") + ";" + e), t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, r[o] = n[o])
                        })
                }
                function B(t, e, n, r, i, a, s, u) {
                    var c, l, p = [],
                        v = e[0],
                        g = t.shift(),
                        m = f({}, g, {
                            templateUrl: null,
                            transclude: null,
                            replace: null,
                            $$originalDirective: g
                        }),
                        y = x(g.templateUrl) ? g.templateUrl(e, n) : g.templateUrl;
                    return e.empty(),
                    h.get(_.getTrustedResourceUrl(y), {
                            cache: d
                        }).success(function (f) {
                            var h, d, b, w;
                            if (f = G(f), g.replace) {
                                if (b = ft(f) ? [] : wn(Pn(f)), h = b[0], 1 != b.length || 1 !== h.nodeType) throw ir("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g.name, y);
                                d = {
                                    $attr: {}
                                },
                                K(r, e, h);
                                var _ = T(h, [], d);
                                $(g.scope) && D(_),
                                t = _.concat(t),
                                U(n, d)
                            } else h = v,
                            e.html(f);
                            for (t.unshift(m), c = R(t, h, n, i, e, g, a, s, u), o(r, function (t, n) {
                                t == h && (r[n] = e[0])
                            }), l = E(e[0].childNodes, i); p.length;) {
                                var x = p.shift(),
                                    k = p.shift(),
                                    C = p.shift(),
                                    S = p.shift(),
                                    j = e[0];
                                if (k !== v) {
                                        var P = k.className;
                                        u.hasElementTranscludeDirective && g.replace || (j = vt(h)),
                                        K(C, wn(k), j),
                                        A(wn(j), P)
                                    }
                                w = c.transcludeOnThisElement ? O(x, c.transclude, S) : S,
                                c(l, x, j, r, w)
                            }
                            p = null
                        }).error(function (t, e, n, r) {
                            throw ir("tpload", "Failed to load template: {0}", r.url)
                        }),


                    function (t, e, n, r, i) {
                            var o = i;
                            p ? (p.push(e), p.push(n), p.push(r), p.push(o)) : (c.transcludeOnThisElement && (o = O(e, c.transclude, i)), c(l, e, n, r, o))
                        }
                }
                function F(t, e) {
                    var n = e.priority - t.priority;
                    return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
                }
                function L(t, e, n, r) {
                    if (e) throw ir("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", e.name, n.name, t, z(r))
                }
                function H(t, e) {
                    var n = r(e, !0);
                    n && t.push({
                        priority: 0,
                        compile: function (t) {
                            var e = t.parent(),
                                r = e.length;
                            return r && A(t.parent(), "ng-binding"),


                            function (t, e) {
                                    var i = e.parent(),
                                        o = i.data("$binding") || [];
                                    o.push(n),
                                    i.data("$binding", o),
                                    r || A(i, "ng-binding"),
                                    t.$watch(n, function (t) {
                                            e[0].nodeValue = t
                                        })
                                }
                        }
                    })
                }
                function V(t, e) {
                    if ("srcdoc" == e) return _.HTML;
                    var n = kn(t);
                    return "xlinkHref" == e || "FORM" == n && "action" == e || "IMG" != n && ("src" == e || "ngSrc" == e) ? _.RESOURCE_URL : void 0
                }
                function W(t, e, n, i) {
                    var o = r(n, !0);
                    if (o) {
                        if ("multiple" === i && "SELECT" === kn(t)) throw ir("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", z(t));
                        e.push({
                            priority: 100,
                            compile: function () {
                                return {
                                    pre: function (e, n, a) {
                                        var s = a.$$observers || (a.$$observers = {});
                                        if (l.test(i)) throw ir("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                        o = r(a[i], !0, V(t, i)),
                                        o && (a[i] = o(e), (s[i] || (s[i] = [])).$$inter = !0, (a.$$observers && a.$$observers[i].$$scope || e).$watch(o, function (t, e) {
                                            "class" === i && t != e ? a.$updateClass(t, e) : a.$set(i, t)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }
                function K(t, n, r) {
                    var i, o, a = n[0],
                        s = n.length,
                        u = a.parentNode;
                    if (t) for (i = 0, o = t.length; o > i; i++) if (t[i] == a) {
                            t[i++] = r;
                            for (var c = i, l = c + s - 1, f = t.length; f > c; c++, l++) f > l ? t[c] = t[l] : delete t[c];
                            t.length -= s - 1;
                            break
                        }
                    u && u.replaceChild(r, a);
                    var h = e.createDocumentFragment();
                    h.appendChild(a),
                    r[wn.expando] = a[wn.expando];
                    for (var p = 1, d = n.length; d > p; p++) {
                            var v = n[p];
                            wn(v).remove(),
                            h.appendChild(v),
                            delete n[p]
                        }
                    n[0] = r,
                    n.length = 1
                }
                function J(t, e) {
                    return f(function () {
                        return t.apply(null, arguments)
                    }, t, e)
                }
                var X = function (t, e) {
                    this.$$element = t,
                    this.$attr = e || {}
                };
                X.prototype = {
                    $normalize: Ft,
                    $addClass: function (t) {
                        t && t.length > 0 && k.addClass(this.$$element, t)
                    },
                    $removeClass: function (t) {
                        t && t.length > 0 && k.removeClass(this.$$element, t)
                    },
                    $updateClass: function (t, e) {
                        var n = Lt(t, e),
                            r = Lt(e, t);
                        0 === n.length ? k.removeClass(this.$$element, r) : 0 === r.length ? k.addClass(this.$$element, n) : k.setClass(this.$$element, n, r)
                    },
                    $set: function (t, e, r, i) {
                        var a, s = Et(this.$$element[0], t);
                        s && (this.$$element.prop(t, e), i = s),
                        this[t] = e,
                        i ? this.$attr[t] = i : (i = this.$attr[t], i || (this.$attr[t] = i = Z(t, "-"))),
                        a = kn(this.$$element),
                        ("A" === a && "href" === t || "IMG" === a && "src" === t) && (this[t] = e = C(e, "src" === t)),
                        r !== !1 && (null === e || e === n ? this.$$element.removeAttr(i) : this.$$element.attr(i, e));
                        var c = this.$$observers;
                        c && o(c[t], function (t) {
                            try {
                                t(e)
                            } catch (n) {
                                u(n)
                            }
                        })
                    },
                    $observe: function (t, e) {
                        var n = this,
                            r = n.$$observers || (n.$$observers = {}),
                            i = r[t] || (r[t] = []);
                        return i.push(e),
                        y.$evalAsync(function () {
                                i.$$inter || e(n[t])
                            }),
                        e
                    }
                };
                var Q = r.startSymbol(),
                    Y = r.endSymbol(),
                    G = "{{" == Q || "}}" == Y ? v : function (t) {
                        return t.replace(/\{\{/g, Q).replace(/}}/g, Y)
                    },
                    tt = /^ngAttr[A-Z]/;
                return S
            }]
    }
    function Ft(t) {
        return ct(t.replace(or, ""))
    }
    function Lt(t, e) {
        var n = "",
            r = t.split(/\s+/),
            i = e.split(/\s+/);
        t: for (var o = 0; o < r.length; o++) {
                for (var a = r[o], s = 0; s < i.length; s++) if (a == i[s]) continue t;
                n += (n.length > 0 ? " " : "") + a
            }
        return n
    }
    function Ht() {
        var t = {},
            e = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (e, n) {
                rt(e, "controller"),
                $(e) ? f(t, e) : t[e] = n
            },
        this.$get = ["$injector", "$window", function (n, i) {
                return function (o, a) {
                    var s, u, c, l;
                    if (b(o) && (u = o.match(e), c = u[1], l = u[3], o = t.hasOwnProperty(c) ? t[c] : it(a.$scope, c, !0) || it(i, c, !0), nt(o, c, !0)), s = n.instantiate(o, a), l) {
                        if (!a || "object" != typeof a.$scope) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", c || o.name, l);
                        a.$scope[l] = s
                    }
                    return s
                }
            }]
    }
    function Vt() {
        this.$get = ["$window", function (t) {
            return wn(t.document)
        }]
    }
    function zt() {
        this.$get = ["$log", function (t) {
            return function (e, n) {
                t.error.apply(t, arguments)
            }
        }]
    }
    function Wt(t) {
        var e, n, r, i = {};
        return t ? (o(t.split("\n"), function (t) {
            r = t.indexOf(":"),
            e = vn(Pn(t.substr(0, r))),
            n = Pn(t.substr(r + 1)),
            e && (i[e] = i[e] ? i[e] + ", " + n : n)
        }), i) : i
    }
    function Kt(t) {
        var e = $(t) ? t : n;
        return function (n) {
            return e || (e = Wt(t)),
            n ? e[vn(n)] || null : e
        }
    }
    function Jt(t, e, n) {
        return x(n) ? n(t, e) : (o(n, function (n) {
            t = n(t, e)
        }), t)
    }
    function Xt(t) {
        return t >= 200 && 300 > t
    }
    function Qt() {
        var t = /^\s*(\[|\{[^\{])/,
            e = /[\}\]]\s*$/,
            r = /^\)\]\}',?\n/,
            i = {
                "Content-Type": "application/json;charset=utf-8"
            },
            a = this.defaults = {
                transformResponse: [function (n) {
                    return b(n) && (n = n.replace(r, ""), t.test(n) && e.test(n) && (n = H(n))),
                    n
                }],
                transformRequest: [function (t) {
                    return !$(t) || A(t) || E(t) ? t : L(t)
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: M(i),
                    put: M(i),
                    patch: M(i)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            },
            u = this.interceptors = [],
            c = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (t, e, r, i, l, h) {
                function p(t) {
                    function e(t) {
                        var e = f({}, t, {
                            data: Jt(t.data, t.headers, i.transformResponse)
                        });
                        return Xt(t.status) ? e : l.reject(e)
                    }
                    function r(t) {
                        function e(t) {
                            var e;
                            o(t, function (n, r) {
                                x(n) && (e = n(), null != e ? t[r] = e : delete t[r])
                            })
                        }
                        var n, r, i, s = a.headers,
                            u = f({}, t.headers);
                        s = f({}, s.common, s[vn(t.method)]);
                        t: for (n in s) {
                                r = vn(n);
                                for (i in u) if (vn(i) === r) continue t;
                                u[n] = s[n]
                            }
                        return e(u),
                        u
                    }
                    var i = {
                        method: "get",
                        transformRequest: a.transformRequest,
                        transformResponse: a.transformResponse
                    },
                        s = r(t);
                    f(i, t),
                    i.headers = s,
                    i.method = mn(i.method);
                    var u = function (t) {
                            s = t.headers;
                            var n = Jt(t.data, Kt(s), t.transformRequest);
                            return m(n) && o(s, function (t, e) {
                                "content-type" === vn(e) && delete s[e]
                            }),
                            m(t.withCredentials) && !m(a.withCredentials) && (t.withCredentials = a.withCredentials),
                            g(t, n, s).then(e, e)
                        },
                        c = [u, n],
                        h = l.when(i);
                    for (o(C, function (t) {
                            (t.request || t.requestError) && c.unshift(t.request, t.requestError),
                            (t.response || t.responseError) && c.push(t.response, t.responseError)
                        }); c.length;) {
                            var p = c.shift(),
                                d = c.shift();
                            h = h.then(p, d)
                        }
                    return h.success = function (t) {
                            return h.then(function (e) {
                                t(e.data, e.status, e.headers, i)
                            }),
                            h
                        },
                    h.error = function (t) {
                            return h.then(null, function (e) {
                                t(e.data, e.status, e.headers, i)
                            }),
                            h
                        },
                    h
                }
                function d(t) {
                    o(arguments, function (t) {
                        p[t] = function (e, n) {
                            return p(f(n || {}, {
                                method: t,
                                url: e
                            }))
                        }
                    })
                }
                function v(t) {
                    o(arguments, function (t) {
                        p[t] = function (e, n, r) {
                            return p(f(r || {}, {
                                method: t,
                                url: e,
                                data: n
                            }))
                        }
                    })
                }
                function g(r, o, s) {
                    function u(t, e, n, r) {
                        h && (Xt(t) ? h.put(b, [t, e, Wt(n), r]) : h.remove(b)),
                        c(e, t, n, r),
                        i.$$phase || i.$apply()
                    }
                    function c(t, e, n, i) {
                        e = Math.max(e, 0),
                        (Xt(e) ? v.resolve : v.reject)({
                            data: t,
                            status: e,
                            headers: Kt(n),
                            config: r,
                            statusText: i
                        })
                    }
                    function f() {
                        var t = R(p.pendingRequests, r); - 1 !== t && p.pendingRequests.splice(t, 1)
                    }
                    var h, d, v = l.defer(),
                        g = v.promise,
                        b = w(r.url, r.params);
                    if (p.pendingRequests.push(r), g.then(f, f), !r.cache && !a.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || (h = $(r.cache) ? r.cache : $(a.cache) ? a.cache : k), h) if (d = h.get(b), y(d)) {
                            if (O(d)) return d.then(f, f),
                            d;
                            jn(d) ? c(d[1], d[0], M(d[2]), d[3]) : c(d, 200, {}, "OK")
                        } else h.put(b, g);
                    if (m(d)) {
                            var _ = qe(r.url) ? e.cookies()[r.xsrfCookieName || a.xsrfCookieName] : n;
                            _ && (s[r.xsrfHeaderName || a.xsrfHeaderName] = _),
                            t(r.method, b, o, u, s, r.timeout, r.withCredentials, r.responseType)
                        }
                    return g
                }
                function w(t, e) {
                    if (!e) return t;
                    var n = [];
                    return s(e, function (t, e) {
                        null === t || m(t) || (jn(t) || (t = [t]), o(t, function (t) {
                            $(t) && (t = _(t) ? t.toISOString() : L(t)),
                            n.push(Q(e) + "=" + Q(t))
                        }))
                    }),
                    n.length > 0 && (t += (-1 == t.indexOf("?") ? "?" : "&") + n.join("&")),
                    t
                }
                var k = r("$http"),
                    C = [];
                return o(u, function (t) {
                        C.unshift(b(t) ? h.get(t) : h.invoke(t))
                    }),
                o(c, function (t, e) {
                        var n = b(t) ? h.get(t) : h.invoke(t);
                        C.splice(e, 0, {
                            response: function (t) {
                                return n(l.when(t))
                            },
                            responseError: function (t) {
                                return n(l.reject(t))
                            }
                        })
                    }),
                p.pendingRequests = [],
                d("get", "delete", "head", "jsonp"),
                v("post", "put", "patch"),
                p.defaults = a,
                p
            }]
    }
    function Yt(e) {
        if (8 >= bn && (!e.match(/^(get|post|head|put|delete|options)$/i) || !t.XMLHttpRequest)) return new t.ActiveXObject("Microsoft.XMLHTTP");
        if (t.XMLHttpRequest) return new t.XMLHttpRequest;
        throw r("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.")
    }
    function Gt() {
        this.$get = ["$browser", "$window", "$document", function (t, e, n) {
            return Zt(t, Yt, t.defer, e.angular.callbacks, n[0])
        }]
    }
    function Zt(t, e, n, r, i) {
        function a(t, e, n) {
            var o = i.createElement("script"),
                a = null;
            return o.type = "text/javascript",
            o.src = t,
            o.async = !0,
            a = function (t) {
                    qn(o, "load", a),
                    qn(o, "error", a),
                    i.body.removeChild(o),
                    o = null;
                    var s = -1,
                        u = "unknown";
                    t && ("load" !== t.type || r[e].called || (t = {
                            type: "error"
                        }), u = t.type, s = "error" === t.type ? 404 : 200),
                    n && n(s, u)
                },
            Un(o, "load", a),
            Un(o, "error", a),
            8 >= bn && (o.onreadystatechange = function () {
                    b(o.readyState) && /loaded|complete/.test(o.readyState) && (o.onreadystatechange = null, a({
                        type: "load"
                    }))
                }),
            i.body.appendChild(o),
            a
        }
        var s = -1;
        return function (i, u, c, l, f, h, p, v) {
            function g() {
                $ = s,
                w && w(),
                _ && _.abort()
            }
            function m(e, r, i, o, a) {
                k && n.cancel(k),
                w = _ = null,
                0 === r && (r = i ? 200 : "file" == Ue(u).protocol ? 404 : 0),
                r = 1223 === r ? 204 : r,
                a = a || "",
                e(r, i, o, a),
                t.$$completeOutstandingRequest(d)
            }
            var $;
            if (t.$$incOutstandingRequestCount(), u = u || t.url(), "jsonp" == vn(i)) {
                var b = "_" + (r.counter++).toString(36);
                r[b] = function (t) {
                    r[b].data = t,
                    r[b].called = !0
                };
                var w = a(u.replace("JSON_CALLBACK", "angular.callbacks." + b), b, function (t, e) {
                    m(l, t, r[b].data, "", e),
                    r[b] = d
                })
            } else {
                var _ = e(i);
                if (_.open(i, u, !0), o(f, function (t, e) {
                    y(t) && _.setRequestHeader(e, t)
                }), _.onreadystatechange = function () {
                    if (_ && 4 == _.readyState) {
                        var t = null,
                            e = null,
                            n = "";
                        $ !== s && (t = _.getAllResponseHeaders(), e = "response" in _ ? _.response : _.responseText),
                        $ === s && 10 > bn || (n = _.statusText),
                        m(l, $ || _.status, e, t, n)
                    }
                }, p && (_.withCredentials = !0), v) try {
                    _.responseType = v
                } catch (x) {
                    if ("json" !== v) throw x
                }
                _.send(c || null)
            }
            if (h > 0) var k = n(g, h);
            else O(h) && h.then(g)
        }
    }
    function te() {
        var t = "{{",
            e = "}}";
        this.startSymbol = function (e) {
                return e ? (t = e, this) : t
            },
        this.endSymbol = function (t) {
                return t ? (e = t, this) : e
            },
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, i) {
                function o(o, u, c) {
                    for (var l, f, h, p, d = 0, v = [], g = o.length, m = !1, y = []; g > d;) - 1 != (l = o.indexOf(t, d)) && -1 != (f = o.indexOf(e, l + a)) ? (d != l && v.push(o.substring(d, l)), v.push(h = n(p = o.substring(l + a, f))), h.exp = p, d = f + s, m = !0) : (d != g && v.push(o.substring(d)), d = g);
                    if ((g = v.length) || (v.push(""), g = 1), c && v.length > 1) throw ar("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", o);
                    return !u || m ? (y.length = g, h = function (t) {
                        try {
                            for (var e, n = 0, a = g; a > n; n++) {
                                if ("function" == typeof(e = v[n])) if (e = e(t), e = c ? i.getTrusted(c, e) : i.valueOf(e), null == e) e = "";
                                else switch (typeof e) {
                                case "string":
                                    break;
                                case "number":
                                    e = "" + e;
                                    break;
                                default:
                                    e = L(e)
                                }
                                y[n] = e
                            }
                            return y.join("")
                        } catch (s) {
                            var u = ar("interr", "Can't interpolate: {0}\n{1}", o, s.toString());
                            r(u)
                        }
                    }, h.exp = o, h.parts = v, h) : void 0
                }
                var a = t.length,
                    s = e.length;
                return o.startSymbol = function () {
                        return t
                    },
                o.endSymbol = function () {
                        return e
                    },
                o
            }]
    }
    function ee() {
        this.$get = ["$rootScope", "$window", "$q", function (t, e, n) {
            function r(r, o, a, s) {
                var u = e.setInterval,
                    c = e.clearInterval,
                    l = n.defer(),
                    f = l.promise,
                    h = 0,
                    p = y(s) && !s;
                return a = y(a) ? a : 0,
                f.then(null, null, r),
                f.$$intervalId = u(function () {
                        l.notify(h++),
                        a > 0 && h >= a && (l.resolve(h), c(f.$$intervalId), delete i[f.$$intervalId]),
                        p || t.$apply()
                    }, o),
                i[f.$$intervalId] = l,
                f
            }
            var i = {};
            return r.cancel = function (t) {
                return t && t.$$intervalId in i ? (i[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete i[t.$$intervalId], !0) : !1
            },
            r
        }]
    }
    function ne() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    },
                    {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function (t) {
                    return 1 === t ? "one" : "other"
                }
            }
        }
    }
    function re(t) {
        for (var e = t.split("/"), n = e.length; n--;) e[n] = X(e[n]);
        return e.join("/")
    }
    function ie(t, e, n) {
        var r = Ue(t, n);
        e.$$protocol = r.protocol,
        e.$$host = r.hostname,
        e.$$port = h(r.port) || ur[r.protocol] || null
    }
    function oe(t, e, n) {
        var r = "/" !== t.charAt(0);
        r && (t = "/" + t);
        var i = Ue(t, n);
        e.$$path = decodeURIComponent(r && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname),
        e.$$search = K(i.search),
        e.$$hash = decodeURIComponent(i.hash),
        e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
    }
    function ae(t, e) {
        return 0 === e.indexOf(t) ? e.substr(t.length) : void 0
    }
    function se(t) {
        var e = t.indexOf("#");
        return -1 == e ? t : t.substr(0, e)
    }
    function ue(t) {
        return t.substr(0, se(t).lastIndexOf("/") + 1)
    }
    function ce(t) {
        return t.substring(0, t.indexOf("/", t.indexOf("//") + 2))
    }
    function le(t, e) {
        this.$$html5 = !0,
        e = e || "";
        var r = ue(t);
        ie(t, this, t),
        this.$$parse = function (e) {
            var n = ae(r, e);
            if (!b(n)) throw cr("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, r);
            oe(n, this, t),
            this.$$path || (this.$$path = "/"),
            this.$$compose()
        },
        this.$$compose = function () {
            var t = J(this.$$search),
                e = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = re(this.$$path) + (t ? "?" + t : "") + e,
            this.$$absUrl = r + this.$$url.substr(1)
        },
        this.$$parseLinkUrl = function (i, o) {
            var a, s, u;
            return (a = ae(t, i)) !== n ? (s = a, u = (a = ae(e, a)) !== n ? r + (ae("/", a) || a) : t + s) : (a = ae(r, i)) !== n ? u = r + a : r == i + "/" && (u = r),
            u && this.$$parse(u),
            !! u
        }
    }
    function fe(t, e) {
        var n = ue(t);
        ie(t, this, t),
        this.$$parse = function (r) {
            function i(t, e, n) {
                var r, i = /^\/[A-Z]:(\/.*)/;
                return 0 === e.indexOf(n) && (e = e.replace(n, "")),
                i.exec(e) ? t : (r = i.exec(t), r ? r[1] : t)
            }
            var o = ae(t, r) || ae(n, r),
                a = "#" == o.charAt(0) ? ae(e, o) : this.$$html5 ? o : "";
            if (!b(a)) throw cr("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', r, e);
            oe(a, this, t),
            this.$$path = i(this.$$path, a, t),
            this.$$compose()
        },
        this.$$compose = function () {
            var n = J(this.$$search),
                r = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = re(this.$$path) + (n ? "?" + n : "") + r,
            this.$$absUrl = t + (this.$$url ? e + this.$$url : "")
        },
        this.$$parseLinkUrl = function (e, n) {
            return se(t) == se(e) ? (this.$$parse(e), !0) : !1
        }
    }
    function he(t, e) {
        this.$$html5 = !0,
        fe.apply(this, arguments);
        var n = ue(t);
        this.$$parseLinkUrl = function (r, i) {
            var o, a;
            return t == se(r) ? o = r : (a = ae(n, r)) ? o = t + e + a : n === r + "/" && (o = n),
            o && this.$$parse(o),
            !! o
        },
        this.$$compose = function () {
            var n = J(this.$$search),
                r = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = re(this.$$path) + (n ? "?" + n : "") + r,
            this.$$absUrl = t + e + this.$$url
        }
    }
    function pe(t) {
        return function () {
            return this[t]
        }
    }
    function de(t, e) {
        return function (n) {
            return m(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
        }
    }
    function ve() {
        var e = "",
            n = !1;
        this.hashPrefix = function (t) {
                return y(t) ? (e = t, this) : e
            },
        this.html5Mode = function (t) {
                return y(t) ? (n = t, this) : n
            },
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (r, i, o, a) {
                function s(t) {
                    r.$broadcast("$locationChangeSuccess", u.absUrl(), t)
                }
                var u, c, l, f = i.baseHref(),
                    h = i.url();
                n ? (l = ce(h) + (f || "/"), c = o.history ? le : he) : (l = se(h), c = fe),
                u = new c(l, "#" + e),
                u.$$parseLinkUrl(h, h);
                var p = /^\s*(javascript|mailto):/i;
                a.on("click", function (e) {
                        if (!e.ctrlKey && !e.metaKey && 2 != e.which) {
                            for (var n = wn(e.target);
                            "a" !== vn(n[0].nodeName);) if (n[0] === a[0] || !(n = n.parent())[0]) return;
                            var o = n.prop("href"),
                                s = n.attr("href") || n.attr("xlink:href");
                            $(o) && "[object SVGAnimatedString]" === o.toString() && (o = Ue(o.animVal).href),
                            p.test(o) || !o || n.attr("target") || e.isDefaultPrevented() || u.$$parseLinkUrl(o, s) && (e.preventDefault(), u.absUrl() != i.url() && (r.$apply(), t.angular["ff-684208-preventDefault"] = !0))
                        }
                    }),
                u.absUrl() != h && i.url(u.absUrl(), !0),
                i.onUrlChange(function (t) {
                        u.absUrl() != t && (r.$evalAsync(function () {
                            var e = u.absUrl();
                            u.$$parse(t),
                            r.$broadcast("$locationChangeStart", t, e).defaultPrevented ? (u.$$parse(e), i.url(e)) : s(e)
                        }), r.$$phase || r.$digest())
                    });
                var d = 0;
                return r.$watch(function () {
                        var t = i.url(),
                            e = u.$$replace;
                        return d && t == u.absUrl() || (d++, r.$evalAsync(function () {
                                r.$broadcast("$locationChangeStart", u.absUrl(), t).defaultPrevented ? u.$$parse(t) : (i.url(u.absUrl(), e), s(t))
                            })),
                        u.$$replace = !1,
                        d
                    }),
                u
            }]
    }
    function ge() {
        var t = !0,
            e = this;
        this.debugEnabled = function (e) {
                return y(e) ? (t = e, this) : t
            },
        this.$get = ["$window", function (n) {
                function r(t) {
                    return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)),
                    t
                }
                function i(t) {
                    var e = n.console || {},
                        i = e[t] || e.log || d,
                        a = !1;
                    try {
                            a = !! i.apply
                        } catch (s) {}
                    return a ?
                    function () {
                            var t = [];
                            return o(arguments, function (e) {
                                t.push(r(e))
                            }),
                            i.apply(e, t)
                        } : function (t, e) {
                            i(t, null == e ? "" : e)
                        }
                }
                return {
                    log: i("log"),
                    info: i("info"),
                    warn: i("warn"),
                    error: i("error"),
                    debug: function () {
                        var n = i("debug");
                        return function () {
                            t && n.apply(e, arguments)
                        }
                    }()
                }
            }]
    }
    function me(t, e) {
        if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t) throw fr("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", e);
        return t
    }
    function ye(t, e) {
        if (t) {
            if (t.constructor === t) throw fr("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
            if (t.document && t.location && t.alert && t.setInterval) throw fr("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", e);
            if (t.children && (t.nodeName || t.prop && t.attr && t.find)) throw fr("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", e);
            if (t === Object) throw fr("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", e)
        }
        return t
    }
    function $e(t, e) {
        if (t) {
            if (t.constructor === t) throw fr("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
            if (t === pr || t === dr || vr && t === vr) throw fr("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", e)
        }
    }
    function be(t, e, r, i, o) {
        ye(t, i),
        o = o || {};
        for (var a, s = e.split("."), u = 0; s.length > 1; u++) {
            a = me(s.shift(), i);
            var c = ye(t[a], i);
            c || (c = {}, t[a] = c),
            t = c,
            t.then && o.unwrapPromises && (lr(i), "$$v" in t || !
            function (t) {
                t.then(function (e) {
                    t.$$v = e
                })
            }(t), t.$$v === n && (t.$$v = {}), t = t.$$v)
        }
        return a = me(s.shift(), i),
        ye(t[a], i),
        t[a] = r,
        r
    }
    function we(t) {
        return "constructor" == t
    }
    function _e(t, e, r, i, o, a, s) {
        me(t, a),
        me(e, a),
        me(r, a),
        me(i, a),
        me(o, a);
        var u = function (t) {
            return ye(t, a)
        },
            c = s.expensiveChecks,
            l = c || we(t) ? u : v,
            f = c || we(e) ? u : v,
            h = c || we(r) ? u : v,
            p = c || we(i) ? u : v,
            d = c || we(o) ? u : v;
        return s.unwrapPromises ?
        function (s, u) {
                var c, v = u && u.hasOwnProperty(t) ? u : s;
                return null == v ? v : (v = l(v[t]), v && v.then && (lr(a), "$$v" in v || (c = v, c.$$v = n, c.then(function (t) {
                    c.$$v = l(t)
                })), v = l(v.$$v)), e ? null == v ? n : (v = f(v[e]), v && v.then && (lr(a), "$$v" in v || (c = v, c.$$v = n, c.then(function (t) {
                    c.$$v = f(t)
                })), v = f(v.$$v)), r ? null == v ? n : (v = h(v[r]), v && v.then && (lr(a), "$$v" in v || (c = v, c.$$v = n, c.then(function (t) {
                    c.$$v = h(t)
                })), v = h(v.$$v)), i ? null == v ? n : (v = p(v[i]), v && v.then && (lr(a), "$$v" in v || (c = v, c.$$v = n, c.then(function (t) {
                    c.$$v = p(t)
                })), v = p(v.$$v)), o ? null == v ? n : (v = d(v[o]), v && v.then && (lr(a), "$$v" in v || (c = v, c.$$v = n, c.then(function (t) {
                    c.$$v = d(t)
                })), v = d(v.$$v)), v) : v) : v) : v) : v)
            } : function (a, s) {
                var u = s && s.hasOwnProperty(t) ? s : a;
                return null == u ? u : (u = l(u[t]), e ? null == u ? n : (u = f(u[e]), r ? null == u ? n : (u = h(u[r]), i ? null == u ? n : (u = p(u[i]), o ? null == u ? n : u = d(u[o]) : u) : u) : u) : u)
            }
    }
    function xe(t, e) {
        return function (n, r) {
            return t(n, r, lr, ye, e)
        }
    }
    function ke(t, e, r) {
        var i = e.expensiveChecks,
            a = i ? wr : br;
        if (a.hasOwnProperty(t)) return a[t];
        var s, u = t.split("."),
            c = u.length;
        if (e.csp) s = 6 > c ? _e(u[0], u[1], u[2], u[3], u[4], r, e) : function (t, i) {
                var o, a = 0;
                do o = _e(u[a++], u[a++], u[a++], u[a++], u[a++], r, e)(t, i),
                i = n,
                t = o;
                while (c > a);
                return o
            };
        else {
                var l = "var p;\n";
                i && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");
                var f = i;
                o(u, function (t, n) {
                    me(t, r);
                    var o = (n ? "s" : '((l&&l.hasOwnProperty("' + t + '"))?l:s)') + '["' + t + '"]',
                        a = i || we(t);
                    a && (o = "eso(" + o + ", fe)", f = !0),
                    l += "if(s == null) return undefined;\ns=" + o + ";\n",
                    e.unwrapPromises && (l += 'if (s && s.then) {\n pw("' + r.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=' + (a ? "eso(v)" : "v") + ";});\n}\n s=" + (a ? "eso(s.$$v)" : "s.$$v") + "\n}\n")
                }),
                l += "return s;";
                var h = new Function("s", "l", "pw", "eso", "fe", l);
                h.toString = g(l),
                (f || e.unwrapPromises) && (h = xe(h, r)),
                s = h
            }
        return "hasOwnProperty" !== t && (a[t] = s),
        s
    }
    function Ce() {
        var t = {},
            e = {},
            n = {
                csp: !1,
                unwrapPromises: !1,
                logPromiseWarnings: !0,
                expensiveChecks: !1
            };
        this.unwrapPromises = function (t) {
                return y(t) ? (n.unwrapPromises = !! t, this) : n.unwrapPromises
            },
        this.logPromiseWarnings = function (t) {
                return y(t) ? (n.logPromiseWarnings = t, this) : n.logPromiseWarnings
            },
        this.$get = ["$filter", "$sniffer", "$log", function (r, i, o) {
                n.csp = i.csp;
                var a = {
                    csp: n.csp,
                    unwrapPromises: n.unwrapPromises,
                    logPromiseWarnings: n.logPromiseWarnings,
                    expensiveChecks: !0
                };
                return lr = function (t) {
                    n.logPromiseWarnings && !hr.hasOwnProperty(t) && (hr[t] = !0, o.warn("[$parse] Promise found in the expression `" + t + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
                },


                function (i, o) {
                    var s;
                    switch (typeof i) {
                    case "string":
                        var u = o ? e : t;
                        if (u.hasOwnProperty(i)) return u[i];
                        var c = o ? a : n,
                            l = new yr(c),
                            f = new $r(l, r, c);
                        return s = f.parse(i),
                        "hasOwnProperty" !== i && (u[i] = s),
                        s;
                    case "function":
                        return i;
                    default:
                        return d
                    }
                }
            }]
    }
    function Se() {
        this.$get = ["$rootScope", "$exceptionHandler", function (t, e) {
            return Ae(function (e) {
                t.$evalAsync(e)
            }, e)
        }]
    }
    function Ae(t, e) {
        function r(t) {
            return t
        }
        function i(t) {
            return c(t)
        }
        function a(t) {
            var e = s(),
                n = 0,
                r = jn(t) ? [] : {};
            return o(t, function (t, i) {
                    n++,
                    u(t).then(function (t) {
                        r.hasOwnProperty(i) || (r[i] = t, --n || e.resolve(r))
                    }, function (t) {
                        r.hasOwnProperty(i) || e.reject(t)
                    })
                }),
            0 === n && e.resolve(r),
            e.promise
        }
        var s = function () {
            var o, a, c = [];
            return a = {
                resolve: function (e) {
                    if (c) {
                        var r = c;
                        c = n,
                        o = u(e),
                        r.length && t(function () {
                            for (var t, e = 0, n = r.length; n > e; e++) t = r[e],
                            o.then(t[0], t[1], t[2])
                        })
                    }
                },
                reject: function (t) {
                    a.resolve(l(t))
                },
                notify: function (e) {
                    if (c) {
                        var n = c;
                        c.length && t(function () {
                            for (var t, r = 0, i = n.length; i > r; r++) t = n[r],
                            t[2](e)
                        })
                    }
                },
                promise: {
                    then: function (t, n, a) {
                        var u = s(),
                            l = function (n) {
                                try {
                                    u.resolve((x(t) ? t : r)(n))
                                } catch (i) {
                                    u.reject(i),
                                    e(i)
                                }
                            },
                            f = function (t) {
                                try {
                                    u.resolve((x(n) ? n : i)(t))
                                } catch (r) {
                                    u.reject(r),
                                    e(r)
                                }
                            },
                            h = function (t) {
                                try {
                                    u.notify((x(a) ? a : r)(t))
                                } catch (n) {
                                    e(n)
                                }
                            };
                        return c ? c.push([l, f, h]) : o.then(l, f, h),
                        u.promise
                    },
                    "catch": function (t) {
                        return this.then(null, t)
                    },
                    "finally": function (t) {
                        function e(t, e) {
                            var n = s();
                            return e ? n.resolve(t) : n.reject(t),
                            n.promise
                        }
                        function n(n, i) {
                            var o = null;
                            try {
                                o = (t || r)()
                            } catch (a) {
                                return e(a, !1)
                            }
                            return O(o) ? o.then(function () {
                                return e(n, i)
                            }, function (t) {
                                return e(t, !1)
                            }) : e(n, i)
                        }
                        return this.then(function (t) {
                            return n(t, !0)
                        }, function (t) {
                            return n(t, !1)
                        })
                    }
                }
            }
        },
            u = function (e) {
                return O(e) ? e : {
                    then: function (n) {
                        var r = s();
                        return t(function () {
                            r.resolve(n(e))
                        }),
                        r.promise
                    }
                }
            },
            c = function (t) {
                var e = s();
                return e.reject(t),
                e.promise
            },
            l = function (n) {
                return {
                    then: function (r, o) {
                        var a = s();
                        return t(function () {
                            try {
                                a.resolve((x(o) ? o : i)(n))
                            } catch (t) {
                                a.reject(t),
                                e(t)
                            }
                        }),
                        a.promise
                    }
                }
            },
            f = function (n, o, a, l) {
                var f, h = s(),
                    p = function (t) {
                        try {
                            return (x(o) ? o : r)(t)
                        } catch (n) {
                            return e(n),
                            c(n)
                        }
                    },
                    d = function (t) {
                        try {
                            return (x(a) ? a : i)(t)
                        } catch (n) {
                            return e(n),
                            c(n)
                        }
                    },
                    v = function (t) {
                        try {
                            return (x(l) ? l : r)(t)
                        } catch (n) {
                            e(n)
                        }
                    };
                return t(function () {
                        u(n).then(function (t) {
                            f || (f = !0, h.resolve(u(t).then(p, d, v)))
                        }, function (t) {
                            f || (f = !0, h.resolve(d(t)))
                        }, function (t) {
                            f || h.notify(v(t))
                        })
                    }),
                h.promise
            };
        return {
                defer: s,
                reject: c,
                when: f,
                all: a
            }
    }
    function Ee() {
        this.$get = ["$window", "$timeout", function (t, e) {
            var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame,
                r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
                i = !! n,
                o = i ?
            function (t) {
                    var e = n(t);
                    return function () {
                        r(e)
                    }
                } : function (t) {
                    var n = e(t, 16.66, !1);
                    return function () {
                        e.cancel(n)
                    }
                };
            return o.supported = i,
            o
        }]
    }
    function Oe() {
        var t = 10,
            e = r("$rootScope"),
            n = null;
        this.digestTtl = function (e) {
                return arguments.length && (t = e),
                t
            },
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (r, a, s, u) {
                function l() {
                    this.$id = c(),
                    this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null,
                    this["this"] = this.$root = this,
                    this.$$destroyed = !1,
                    this.$$asyncQueue = [],
                    this.$$postDigestQueue = [],
                    this.$$listeners = {},
                    this.$$listenerCount = {},
                    this.$$isolateBindings = {}
                }
                function f(t) {
                    if (m.$$phase) throw e("inprog", "{0} already in progress", m.$$phase);
                    m.$$phase = t
                }
                function h() {
                    m.$$phase = null
                }
                function p(t, e) {
                    var n = s(t);
                    return nt(n, e),
                    n
                }
                function v(t, e, n) {
                    do t.$$listenerCount[n] -= e,
                    0 === t.$$listenerCount[n] && delete t.$$listenerCount[n];
                    while (t = t.$parent)
                }
                function g() {}
                l.prototype = {
                    constructor: l,
                    $new: function (t) {
                        var e;
                        return t ? (e = new l, e.$root = this.$root, e.$$asyncQueue = this.$$asyncQueue, e.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function () {
                            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null,
                            this.$$listeners = {},
                            this.$$listenerCount = {},
                            this.$id = c(),
                            this.$$childScopeClass = null
                        }, this.$$childScopeClass.prototype = this), e = new this.$$childScopeClass),
                        e["this"] = e,
                        e.$parent = this,
                        e.$$prevSibling = this.$$childTail,
                        this.$$childHead ? (this.$$childTail.$$nextSibling = e, this.$$childTail = e) : this.$$childHead = this.$$childTail = e,
                        e
                    },
                    $watch: function (t, e, r) {
                        var i = this,
                            o = p(t, "watch"),
                            a = i.$$watchers,
                            s = {
                                fn: e,
                                last: g,
                                get: o,
                                exp: t,
                                eq: !! r
                            };
                        if (n = null, !x(e)) {
                                var u = p(e || d, "listener");
                                s.fn = function (t, e, n) {
                                    u(n)
                                }
                            }
                        if ("string" == typeof t && o.constant) {
                                var c = s.fn;
                                s.fn = function (t, e, n) {
                                    c.call(this, t, e, n),
                                    D(a, s)
                                }
                            }
                        return a || (a = i.$$watchers = []),
                        a.unshift(s),


                        function () {
                                D(a, s),
                                n = null
                            }
                    },
                    $watchCollection: function (t, e) {
                        function n() {
                            o = h(c);
                            var t, e, n;
                            if ($(o)) if (i(o)) {
                                a !== p && (a = p, g = a.length = 0, f++),
                                t = o.length,
                                g !== t && (f++, a.length = g = t);
                                for (var r = 0; t > r; r++) n = a[r] !== a[r] && o[r] !== o[r],
                                n || a[r] === o[r] || (f++, a[r] = o[r])
                            } else {
                                a !== d && (a = d = {}, g = 0, f++),
                                t = 0;
                                for (e in o) o.hasOwnProperty(e) && (t++, a.hasOwnProperty(e) ? (n = a[e] !== a[e] && o[e] !== o[e], n || a[e] === o[e] || (f++, a[e] = o[e])) : (g++, a[e] = o[e], f++));
                                if (g > t) {
                                    f++;
                                    for (e in a) a.hasOwnProperty(e) && !o.hasOwnProperty(e) && (g--, delete a[e])
                                }
                            } else a !== o && (a = o, f++);
                            return f
                        }
                        function r() {
                            if (v ? (v = !1, e(o, o, c)) : e(o, u, c), l) if ($(o)) if (i(o)) {
                                u = new Array(o.length);
                                for (var t = 0; t < o.length; t++) u[t] = o[t]
                            } else {
                                u = {};
                                for (var n in o) gn.call(o, n) && (u[n] = o[n])
                            } else u = o
                        }
                        var o, a, u, c = this,
                            l = e.length > 1,
                            f = 0,
                            h = s(t),
                            p = [],
                            d = {},
                            v = !0,
                            g = 0;
                        return this.$watch(n, r)
                    },
                    $digest: function () {
                        var r, i, o, s, c, l, p, d, v, m, y, $ = this.$$asyncQueue,
                            b = this.$$postDigestQueue,
                            w = t,
                            _ = this,
                            k = [];
                        f("$digest"),
                        u.$$checkUrlChange(),
                        n = null;
                        do {
                                for (l = !1, d = _; $.length;) {
                                    try {
                                        y = $.shift(),
                                        y.scope.$eval(y.expression)
                                    } catch (C) {
                                        h(),
                                        a(C)
                                    }
                                    n = null
                                }
                                t: do {
                                    if (s = d.$$watchers) for (c = s.length; c--;) try {
                                        if (r = s[c]) if ((i = r.get(d)) === (o = r.last) || (r.eq ? N(i, o) : "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o))) {
                                            if (r === n) {
                                                l = !1;
                                                break t
                                            }
                                        } else l = !0,
                                        n = r,
                                        r.last = r.eq ? I(i, null) : i,
                                        r.fn(i, o === g ? i : o, d),
                                        5 > w && (v = 4 - w, k[v] || (k[v] = []), m = x(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, m += "; newVal: " + L(i) + "; oldVal: " + L(o), k[v].push(m))
                                    } catch (C) {
                                        h(),
                                        a(C)
                                    }
                                    if (!(p = d.$$childHead || d !== _ && d.$$nextSibling)) for (; d !== _ && !(p = d.$$nextSibling);) d = d.$parent
                                } while (d = p);
                                if ((l || $.length) && !w--) throw h(), e("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, L(k))
                            } while (l || $.length);
                        for (h(); b.length;) try {
                                b.shift()()
                            } catch (C) {
                                a(C)
                            }
                    },
                    $destroy: function () {
                        if (!this.$$destroyed) {
                            var t = this.$parent;
                            this.$broadcast("$destroy"),
                            this.$$destroyed = !0,
                            this !== m && (o(this.$$listenerCount, B(null, v, this)), t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = d, this.$on = this.$watch = function () {
                                return d
                            })
                        }
                    },
                    $eval: function (t, e) {
                        return s(t)(this, e)
                    },
                    $evalAsync: function (t) {
                        m.$$phase || m.$$asyncQueue.length || u.defer(function () {
                            m.$$asyncQueue.length && m.$digest()
                        }),
                        this.$$asyncQueue.push({
                            scope: this,
                            expression: t
                        })
                    },
                    $$postDigest: function (t) {
                        this.$$postDigestQueue.push(t)
                    },
                    $apply: function (t) {
                        try {
                            return f("$apply"),
                            this.$eval(t)
                        } catch (e) {
                            a(e)
                        } finally {
                            h();
                            try {
                                m.$digest()
                            } catch (e) {
                                throw a(e),
                                e
                            }
                        }
                    },
                    $on: function (t, e) {
                        var n = this.$$listeners[t];
                        n || (this.$$listeners[t] = n = []),
                        n.push(e);
                        var r = this;
                        do r.$$listenerCount[t] || (r.$$listenerCount[t] = 0),
                        r.$$listenerCount[t]++;
                        while (r = r.$parent);
                        var i = this;
                        return function () {
                            var r = R(n, e); - 1 !== r && (n[r] = null, v(i, 1, t))
                        }
                    },
                    $emit: function (t, e) {
                        var n, r, i, o = [],
                            s = this,
                            u = !1,
                            c = {
                                name: t,
                                targetScope: s,
                                stopPropagation: function () {
                                    u = !0
                                },
                                preventDefault: function () {
                                    c.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            l = U([c], arguments, 1);
                        do {
                                for (n = s.$$listeners[t] || o, c.currentScope = s, r = 0, i = n.length; i > r; r++) if (n[r]) try {
                                    n[r].apply(null, l)
                                } catch (f) {
                                    a(f)
                                } else n.splice(r, 1), r--, i--;
                                if (u) return c;
                                s = s.$parent
                            } while (s);
                        return c
                    },
                    $broadcast: function (t, e) {
                        for (var n, r, i, o = this, s = o, u = o, c = {
                            name: t,
                            targetScope: o,
                            preventDefault: function () {
                                c.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        }, l = U([c], arguments, 1); s = u;) {
                            for (c.currentScope = s, n = s.$$listeners[t] || [], r = 0, i = n.length; i > r; r++) if (n[r]) try {
                                n[r].apply(null, l)
                            } catch (f) {
                                a(f)
                            } else n.splice(r, 1),
                            r--,
                            i--;
                            if (!(u = s.$$listenerCount[t] && s.$$childHead || s !== o && s.$$nextSibling)) for (; s !== o && !(u = s.$$nextSibling);) s = s.$parent
                        }
                        return c
                    }
                };
                var m = new l;
                return m
            }]
    }
    function Te() {
        var t = /^\s*(https?|ftp|mailto|tel|file):/,
            e = /^\s*((https?|ftp|file):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (e) {
                return y(e) ? (t = e, this) : t
            },
        this.imgSrcSanitizationWhitelist = function (t) {
                return y(t) ? (e = t, this) : e
            },
        this.$get = function () {
                return function (n, r) {
                    var i, o = r ? e : t;
                    return bn && !(bn >= 8) || (i = Ue(n).href, "" === i || i.match(o)) ? n : "unsafe:" + i
                }
            }
    }
    function je(t) {
        return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }
    function Pe(t) {
        if ("self" === t) return t;
        if (b(t)) {
            if (t.indexOf("***") > -1) throw _r("iwcard", "Illegal sequence *** in string matcher.  String: {0}", t);
            return t = je(t).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"),
            new RegExp("^" + t + "$")
        }
        if (k(t)) return new RegExp("^" + t.source + "$");
        throw _r("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }
    function Re(t) {
        var e = [];
        return y(t) && o(t, function (t) {
            e.push(Pe(t))
        }),
        e
    }
    function De() {
        this.SCE_CONTEXTS = xr;
        var t = ["self"],
            e = [];
        this.resourceUrlWhitelist = function (e) {
                return arguments.length && (t = Re(e)),
                t
            },
        this.resourceUrlBlacklist = function (t) {
                return arguments.length && (e = Re(t)),
                e
            },
        this.$get = ["$injector", function (r) {
                function i(t, e) {
                    return "self" === t ? qe(e) : !! t.exec(e.href)
                }
                function o(n) {
                    var r, o, a = Ue(n.toString()),
                        s = !1;
                    for (r = 0, o = t.length; o > r; r++) if (i(t[r], a)) {
                            s = !0;
                            break
                        }
                    if (s) for (r = 0, o = e.length; o > r; r++) if (i(e[r], a)) {
                            s = !1;
                            break
                        }
                    return s
                }
                function a(t) {
                    var e = function (t) {
                        this.$$unwrapTrustedValue = function () {
                            return t
                        }
                    };
                    return t && (e.prototype = new t),
                    e.prototype.valueOf = function () {
                        return this.$$unwrapTrustedValue()
                    },
                    e.prototype.toString = function () {
                        return this.$$unwrapTrustedValue().toString()
                    },
                    e
                }
                function s(t, e) {
                    var r = h.hasOwnProperty(t) ? h[t] : null;
                    if (!r) throw _r("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", t, e);
                    if (null === e || e === n || "" === e) return e;
                    if ("string" != typeof e) throw _r("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", t);
                    return new r(e)
                }
                function u(t) {
                    return t instanceof f ? t.$$unwrapTrustedValue() : t
                }
                function c(t, e) {
                    if (null === e || e === n || "" === e) return e;
                    var r = h.hasOwnProperty(t) ? h[t] : null;
                    if (r && e instanceof r) return e.$$unwrapTrustedValue();
                    if (t === xr.RESOURCE_URL) {
                        if (o(e)) return e;
                        throw _r("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", e.toString())
                    }
                    if (t === xr.HTML) return l(e);
                    throw _r("unsafe", "Attempting to use an unsafe value in a safe context.")
                }
                var l = function (t) {
                    throw _r("unsafe", "Attempting to use an unsafe value in a safe context.")
                };
                r.has("$sanitize") && (l = r.get("$sanitize"));
                var f = a(),
                    h = {};
                return h[xr.HTML] = a(f),
                h[xr.CSS] = a(f),
                h[xr.URL] = a(f),
                h[xr.JS] = a(f),
                h[xr.RESOURCE_URL] = a(h[xr.URL]),
                {
                        trustAs: s,
                        getTrusted: c,
                        valueOf: u
                    }
            }]
    }
    function Ie() {
        var t = !0;
        this.enabled = function (e) {
            return arguments.length && (t = !! e),
            t
        },
        this.$get = ["$parse", "$sniffer", "$sceDelegate", function (e, n, r) {
            if (t && n.msie && n.msieDocumentMode < 8) throw _r("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var i = M(xr);
            i.isEnabled = function () {
                return t
            },
            i.trustAs = r.trustAs,
            i.getTrusted = r.getTrusted,
            i.valueOf = r.valueOf,
            t || (i.trustAs = i.getTrusted = function (t, e) {
                return e
            }, i.valueOf = v),
            i.parseAs = function (t, n) {
                var r = e(n);
                return r.literal && r.constant ? r : function (e, n) {
                    return i.getTrusted(t, r(e, n))
                }
            };
            var a = i.parseAs,
                s = i.getTrusted,
                u = i.trustAs;
            return o(xr, function (t, e) {
                    var n = vn(e);
                    i[ct("parse_as_" + n)] = function (e) {
                        return a(t, e)
                    },
                    i[ct("get_trusted_" + n)] = function (e) {
                        return s(t, e)
                    },
                    i[ct("trust_as_" + n)] = function (e) {
                        return u(t, e)
                    }
                }),
            i
        }]
    }
    function Me() {
        this.$get = ["$window", "$document", function (t, e) {
            var n, r, i = {},
                o = h((/android (\d+)/.exec(vn((t.navigator || {}).userAgent)) || [])[1]),
                a = /Boxee/i.test((t.navigator || {}).userAgent),
                s = e[0] || {},
                u = s.documentMode,
                c = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                l = s.body && s.body.style,
                f = !1,
                p = !1;
            if (l) {
                    for (var d in l) if (r = c.exec(d)) {
                        n = r[0],
                        n = n.substr(0, 1).toUpperCase() + n.substr(1);
                        break
                    }
                    n || (n = "WebkitOpacity" in l && "webkit"),
                    f = !! ("transition" in l || n + "Transition" in l),
                    p = !! ("animation" in l || n + "Animation" in l),
                    !o || f && p || (f = b(s.body.style.webkitTransition), p = b(s.body.style.webkitAnimation))
                }
            return {
                    history: !(!t.history || !t.history.pushState || 4 > o || a),
                    hashchange: "onhashchange" in t && (!u || u > 7),
                    hasEvent: function (t) {
                        if ("input" == t && 9 == bn) return !1;
                        if (m(i[t])) {
                            var e = s.createElement("div");
                            i[t] = "on" + t in e
                        }
                        return i[t]
                    },
                    csp: Rn(),
                    vendorPrefix: n,
                    transitions: f,
                    animations: p,
                    android: o,
                    msie: bn,
                    msieDocumentMode: u
                }
        }]
    }
    function Ne() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (t, e, n, r) {
            function i(i, a, s) {
                var u, c = n.defer(),
                    l = c.promise,
                    f = y(s) && !s;
                return u = e.defer(function () {
                        try {
                            c.resolve(i())
                        } catch (e) {
                            c.reject(e),
                            r(e)
                        } finally {
                            delete o[l.$$timeoutId]
                        }
                        f || t.$apply()
                    }, a),
                l.$$timeoutId = u,
                o[u] = c,
                l
            }
            var o = {};
            return i.cancel = function (t) {
                return t && t.$$timeoutId in o ? (o[t.$$timeoutId].reject("canceled"), delete o[t.$$timeoutId], e.defer.cancel(t.$$timeoutId)) : !1
            },
            i
        }]
    }
    function Ue(t, e) {
        var n = t;
        return bn && (kr.setAttribute("href", n), n = kr.href),
        kr.setAttribute("href", n),
        {
            href: kr.href,
            protocol: kr.protocol ? kr.protocol.replace(/:$/, "") : "",
            host: kr.host,
            search: kr.search ? kr.search.replace(/^\?/, "") : "",
            hash: kr.hash ? kr.hash.replace(/^#/, "") : "",
            hostname: kr.hostname,
            port: kr.port,
            pathname: "/" === kr.pathname.charAt(0) ? kr.pathname : "/" + kr.pathname
        }
    }
    function qe(t) {
        var e = b(t) ? Ue(t) : t;
        return e.protocol === Cr.protocol && e.host === Cr.host
    }
    function Be() {
        this.$get = g(t)
    }
    function Fe(t) {
        function e(r, i) {
            if ($(r)) {
                var a = {};
                return o(r, function (t, n) {
                    a[n] = e(n, t)
                }),
                a
            }
            return t.factory(r + n, i)
        }
        var n = "Filter";
        this.register = e,
        this.$get = ["$injector", function (t) {
            return function (e) {
                return t.get(e + n)
            }
        }],
        e("currency", He),
        e("date", Ye),
        e("filter", Le),
        e("json", Ge),
        e("limitTo", Ze),
        e("lowercase", Tr),
        e("number", Ve),
        e("orderBy", tn),
        e("uppercase", jr)
    }
    function Le() {
        return function (t, e, n) {
            if (!jn(t)) return t;
            var r = typeof n,
                i = [];
            i.check = function (t) {
                    for (var e = 0; e < i.length; e++) if (!i[e](t)) return !1;
                    return !0
                },
            "function" !== r && (n = "boolean" === r && n ?
                function (t, e) {
                    return On.equals(t, e)
                } : function (t, e) {
                    if (t && e && "object" == typeof t && "object" == typeof e) {
                        for (var r in t) if ("$" !== r.charAt(0) && gn.call(t, r) && n(t[r], e[r])) return !0;
                        return !1
                    }
                    return e = ("" + e).toLowerCase(),
                    ("" + t).toLowerCase().indexOf(e) > -1
                });
            var o = function (t, e) {
                    if ("string" == typeof e && "!" === e.charAt(0)) return !o(t, e.substr(1));
                    switch (typeof t) {
                    case "boolean":
                    case "number":
                    case "string":
                        return n(t, e);
                    case "object":
                        switch (typeof e) {
                        case "object":
                            return n(t, e);
                        default:
                            for (var r in t) if ("$" !== r.charAt(0) && o(t[r], e)) return !0
                        }
                        return !1;
                    case "array":
                        for (var i = 0; i < t.length; i++) if (o(t[i], e)) return !0;
                        return !1;
                    default:
                        return !1
                    }
                };
            switch (typeof e) {
                case "boolean":
                case "number":
                case "string":
                    e = {
                        $: e
                    };
                case "object":
                    for (var a in e)!
                    function (t) {
                        "undefined" != typeof e[t] && i.push(function (n) {
                            return o("$" == t ? n : n && n[t], e[t])
                        })
                    }(a);
                    break;
                case "function":
                    i.push(e);
                    break;
                default:
                    return t
                }
            for (var s = [], u = 0; u < t.length; u++) {
                    var c = t[u];
                    i.check(c) && s.push(c)
                }
            return s
        }
    }
    function He(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n) {
            return m(n) && (n = e.CURRENCY_SYM),
            ze(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
        }
    }
    function Ve(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n) {
            return ze(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
        }
    }
    function ze(t, e, n, r, i) {
        if (null == t || !isFinite(t) || $(t)) return "";
        var o = 0 > t;
        t = Math.abs(t);
        var a = t + "",
            s = "",
            u = [],
            c = !1;
        if (-1 !== a.indexOf("e")) {
                var l = a.match(/([\d\.]+)e(-?)(\d+)/);
                l && "-" == l[2] && l[3] > i + 1 ? (a = "0", t = 0) : (s = a, c = !0)
            }
        if (c) i > 0 && t > -1 && 1 > t && (s = t.toFixed(i));
        else {
                var f = (a.split(Sr)[1] || "").length;
                m(i) && (i = Math.min(Math.max(e.minFrac, f), e.maxFrac)),
                t = +(Math.round(+(t.toString() + "e" + i)).toString() + "e" + -i),
                0 === t && (o = !1);
                var h = ("" + t).split(Sr),
                    p = h[0];
                h = h[1] || "";
                var d, v = 0,
                    g = e.lgSize,
                    y = e.gSize;
                if (p.length >= g + y) for (v = p.length - g, d = 0; v > d; d++)(v - d) % y === 0 && 0 !== d && (s += n),
                s += p.charAt(d);
                for (d = v; d < p.length; d++)(p.length - d) % g === 0 && 0 !== d && (s += n),
                s += p.charAt(d);
                for (; h.length < i;) h += "0";
                i && "0" !== i && (s += r + h.substr(0, i))
            }
        return u.push(o ? e.negPre : e.posPre),
        u.push(s),
        u.push(o ? e.negSuf : e.posSuf),
        u.join("")
    }
    function We(t, e, n) {
        var r = "";
        for (0 > t && (r = "-", t = -t), t = "" + t; t.length < e;) t = "0" + t;
        return n && (t = t.substr(t.length - e)),
        r + t
    }
    function Ke(t, e, n, r) {
        return n = n || 0,


        function (i) {
            var o = i["get" + t]();
            return (n > 0 || o > -n) && (o += n),
            0 === o && -12 == n && (o = 12),
            We(o, e, r)
        }
    }
    function Je(t, e) {
        return function (n, r) {
            var i = n["get" + t](),
                o = mn(e ? "SHORT" + t : t);
            return r[o][i]
        }
    }
    function Xe(t) {
        var e = -1 * t.getTimezoneOffset(),
            n = e >= 0 ? "+" : "";
        return n += We(Math[e > 0 ? "floor" : "ceil"](e / 60), 2) + We(Math.abs(e % 60), 2)
    }
    function Qe(t, e) {
        return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
    }
    function Ye(t) {
        function e(t) {
            var e;
            if (e = t.match(n)) {
                var r = new Date(0),
                    i = 0,
                    o = 0,
                    a = e[8] ? r.setUTCFullYear : r.setFullYear,
                    s = e[8] ? r.setUTCHours : r.setHours;
                e[9] && (i = h(e[9] + e[10]), o = h(e[9] + e[11])),
                a.call(r, h(e[1]), h(e[2]) - 1, h(e[3]));
                var u = h(e[4] || 0) - i,
                    c = h(e[5] || 0) - o,
                    l = h(e[6] || 0),
                    f = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
                return s.call(r, u, c, l, f),
                r
            }
            return t
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (n, r) {
            var i, a, s = "",
                u = [];
            if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, b(n) && (n = Or.test(n) ? h(n) : e(n)), w(n) && (n = new Date(n)), !_(n)) return n;
            for (; r;) a = Er.exec(r),
            a ? (u = U(u, a, 1), r = u.pop()) : (u.push(r), r = null);
            return o(u, function (e) {
                    i = Ar[e],
                    s += i ? i(n, t.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                }),
            s
        }
    }
    function Ge() {
        return function (t) {
            return L(t, !0)
        }
    }
    function Ze() {
        return function (t, e) {
            if (!jn(t) && !b(t)) return t;
            if (e = Math.abs(Number(e)) === 1 / 0 ? Number(e) : h(e), b(t)) return e ? e >= 0 ? t.slice(0, e) : t.slice(e, t.length) : "";
            var n, r, i = [];
            for (e > t.length ? e = t.length : e < -t.length && (e = -t.length), e > 0 ? (n = 0, r = e) : (n = t.length + e, r = t.length); r > n; n++) i.push(t[n]);
            return i
        }
    }
    function tn(t) {
        return function (e, n, r) {
            function o(t, e) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r](t, e);
                    if (0 !== i) return i
                }
                return 0
            }
            function a(t, e) {
                return V(e) ?
                function (e, n) {
                    return t(n, e)
                } : t
            }
            function s(t, e) {
                var n = typeof t,
                    r = typeof e;
                return n == r ? (_(t) && _(e) && (t = t.valueOf(), e = e.valueOf()), "string" == n && (t = t.toLowerCase(), e = e.toLowerCase()), t === e ? 0 : e > t ? -1 : 1) : r > n ? -1 : 1
            }
            return i(e) ? (n = jn(n) ? n : [n], 0 === n.length && (n = ["+"]), n = j(n, function (e) {
                var n = !1,
                    r = e || v;
                if (b(e)) {
                        if (("+" == e.charAt(0) || "-" == e.charAt(0)) && (n = "-" == e.charAt(0), e = e.substring(1)), "" === e) return a(function (t, e) {
                            return s(t, e)
                        }, n);
                        if (r = t(e), r.constant) {
                            var i = r();
                            return a(function (t, e) {
                                return s(t[i], e[i])
                            }, n)
                        }
                    }
                return a(function (t, e) {
                        return s(r(t), r(e))
                    }, n)
            }), Cn.call(e).sort(a(o, r))) : e
        }
    }
    function en(t) {
        return x(t) && (t = {
            link: t
        }),
        t.restrict = t.restrict || "AC",
        g(t)
    }
    function nn(t, e, n, r) {
        function i(e, n) {
            n = n ? "-" + Z(n, "-") : "",
            r.setClass(t, (e ? Vr : zr) + n, (e ? zr : Vr) + n)
        }
        var a = this,
            s = t.parent().controller("form") || Dr,
            u = 0,
            c = a.$error = {},
            l = [];
        a.$name = e.name || e.ngForm,
        a.$dirty = !1,
        a.$pristine = !0,
        a.$valid = !0,
        a.$invalid = !1,
        s.$addControl(a),
        t.addClass(Wr),
        i(!0),
        a.$addControl = function (t) {
                rt(t.$name, "input"),
                l.push(t),
                t.$name && (a[t.$name] = t)
            },
        a.$removeControl = function (t) {
                t.$name && a[t.$name] === t && delete a[t.$name],
                o(c, function (e, n) {
                    a.$setValidity(n, !0, t)
                }),
                D(l, t)
            },
        a.$setValidity = function (t, e, n) {
                var r = c[t];
                if (e) r && (D(r, n), r.length || (u--, u || (i(e), a.$valid = !0, a.$invalid = !1), c[t] = !1, i(!0, t), s.$setValidity(t, !0, a)));
                else {
                    if (u || i(e), r) {
                        if (P(r, n)) return
                    } else c[t] = r = [],
                    u++,
                    i(!1, t),
                    s.$setValidity(t, !1, a);
                    r.push(n),
                    a.$valid = !1,
                    a.$invalid = !0
                }
            },
        a.$setDirty = function () {
                r.removeClass(t, Wr),
                r.addClass(t, Kr),
                a.$dirty = !0,
                a.$pristine = !1,
                s.$setDirty()
            },
        a.$setPristine = function () {
                r.removeClass(t, Kr),
                r.addClass(t, Wr),
                a.$dirty = !1,
                a.$pristine = !0,
                o(l, function (t) {
                    t.$setPristine()
                })
            }
    }
    function rn(t, e, r, i) {
        return t.$setValidity(e, r),
        r ? i : n
    }
    function on(t, e) {
        var n, r;
        if (e) for (n = 0; n < e.length; ++n) if (r = e[n], t[r]) return !0;
        return !1
    }
    function an(t, e, n, r, i) {
        if ($(i)) {
            t.$$hasNativeValidators = !0;
            var o = function (o) {
                return t.$error[e] || on(i, r) || !on(i, n) ? o : void t.$setValidity(e, !1)
            };
            t.$parsers.push(o)
        }
    }
    function sn(t, e, n, i, o, a) {
        var s = e.prop(dn),
            u = e[0].placeholder,
            c = {},
            l = vn(e[0].type);
        if (i.$$validityState = s, !o.android) {
                var f = !1;
                e.on("compositionstart", function (t) {
                    f = !0
                }),
                e.on("compositionend", function () {
                    f = !1,
                    p()
                })
            }
        var p = function (r) {
                if (!f) {
                    var o = e.val();
                    if (bn && "input" === (r || c).type && e[0].placeholder !== u) return void(u = e[0].placeholder);
                    "password" !== l && V(n.ngTrim || "T") && (o = Pn(o));
                    var a = s && i.$$hasNativeValidators;
                    (i.$viewValue !== o || "" === o && a) && (t.$root.$$phase ? i.$setViewValue(o) : t.$apply(function () {
                        i.$setViewValue(o)
                    }))
                }
            };
        if (o.hasEvent("input")) e.on("input", p);
        else {
                var d, v = function () {
                    d || (d = a.defer(function () {
                        p(),
                        d = null
                    }))
                };
                e.on("keydown", function (t) {
                    var e = t.keyCode;
                    91 === e || e > 15 && 19 > e || e >= 37 && 40 >= e || v()
                }),
                o.hasEvent("paste") && e.on("paste cut", v)
            }
        e.on("change", p),
        i.$render = function () {
                e.val(i.$isEmpty(i.$viewValue) ? "" : i.$viewValue)
            };
        var g, m, y = n.ngPattern;
        if (y) {
                var $ = function (t, e) {
                    return rn(i, "pattern", i.$isEmpty(e) || t.test(e), e)
                };
                m = y.match(/^\/(.*)\/([gim]*)$/),
                m ? (y = new RegExp(m[1], m[2]), g = function (t) {
                    return $(y, t)
                }) : g = function (n) {
                    var i = t.$eval(y);
                    if (!i || !i.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", y, i, z(e));
                    return $(i, n)
                },
                i.$formatters.push(g),
                i.$parsers.push(g)
            }
        if (n.ngMinlength) {
                var b = h(n.ngMinlength),
                    w = function (t) {
                        return rn(i, "minlength", i.$isEmpty(t) || t.length >= b, t)
                    };
                i.$parsers.push(w),
                i.$formatters.push(w)
            }
        if (n.ngMaxlength) {
                var _ = h(n.ngMaxlength),
                    x = function (t) {
                        return rn(i, "maxlength", i.$isEmpty(t) || t.length <= _, t)
                    };
                i.$parsers.push(x),
                i.$formatters.push(x)
            }
    }
    function un(t, e, r, i, o, a) {
        if (sn(t, e, r, i, o, a), i.$parsers.push(function (t) {
            var e = i.$isEmpty(t);
            return e || Br.test(t) ? (i.$setValidity("number", !0), "" === t ? null : e ? t : parseFloat(t)) : (i.$setValidity("number", !1), n)
        }), an(i, "number", Lr, null, i.$$validityState), i.$formatters.push(function (t) {
            return i.$isEmpty(t) ? "" : "" + t
        }), r.min) {
            var s = function (t) {
                var e = parseFloat(r.min);
                return rn(i, "min", i.$isEmpty(t) || t >= e, t)
            };
            i.$parsers.push(s),
            i.$formatters.push(s)
        }
        if (r.max) {
            var u = function (t) {
                var e = parseFloat(r.max);
                return rn(i, "max", i.$isEmpty(t) || e >= t, t)
            };
            i.$parsers.push(u),
            i.$formatters.push(u)
        }
        i.$formatters.push(function (t) {
            return rn(i, "number", i.$isEmpty(t) || w(t), t)
        })
    }
    function cn(t, e, n, r, i, o) {
        sn(t, e, n, r, i, o);
        var a = function (t) {
            return rn(r, "url", r.$isEmpty(t) || Ur.test(t), t)
        };
        r.$formatters.push(a),
        r.$parsers.push(a)
    }
    function ln(t, e, n, r, i, o) {
        sn(t, e, n, r, i, o);
        var a = function (t) {
            return rn(r, "email", r.$isEmpty(t) || qr.test(t), t)
        };
        r.$formatters.push(a),
        r.$parsers.push(a)
    }
    function fn(t, e, n, r) {
        m(n.name) && e.attr("name", c()),
        e.on("click", function () {
            e[0].checked && t.$apply(function () {
                r.$setViewValue(n.value)
            })
        }),
        r.$render = function () {
            var t = n.value;
            e[0].checked = t == r.$viewValue
        },
        n.$observe("value", r.$render)
    }
    function hn(t, e, n, r) {
        var i = n.ngTrueValue,
            o = n.ngFalseValue;
        b(i) || (i = !0),
        b(o) || (o = !1),
        e.on("click", function () {
                t.$apply(function () {
                    r.$setViewValue(e[0].checked)
                })
            }),
        r.$render = function () {
                e[0].checked = r.$viewValue
            },
        r.$isEmpty = function (t) {
                return t !== i
            },
        r.$formatters.push(function (t) {
                return t === i
            }),
        r.$parsers.push(function (t) {
                return t ? i : o
            })
    }
    function pn(t, e) {
        return t = "ngClass" + t,
        ["$animate", function (n) {
            function r(t, e) {
                var n = [];
                t: for (var r = 0; r < t.length; r++) {
                    for (var i = t[r], o = 0; o < e.length; o++) if (i == e[o]) continue t;
                    n.push(i)
                }
                return n
            }
            function i(t) {
                if (jn(t)) return t;
                if (b(t)) return t.split(" ");
                if ($(t)) {
                    var e = [];
                    return o(t, function (t, n) {
                        t && (e = e.concat(n.split(" ")))
                    }),
                    e
                }
                return t
            }
            return {
                restrict: "AC",
                link: function (a, s, u) {
                    function c(t) {
                        var e = f(t, 1);
                        u.$addClass(e)
                    }
                    function l(t) {
                        var e = f(t, -1);
                        u.$removeClass(e)
                    }
                    function f(t, e) {
                        var n = s.data("$classCounts") || {},
                            r = [];
                        return o(t, function (t) {
                                (e > 0 || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(e > 0) && r.push(t))
                            }),
                        s.data("$classCounts", n),
                        r.join(" ")
                    }
                    function h(t, e) {
                        var i = r(e, t),
                            o = r(t, e);
                        o = f(o, -1),
                        i = f(i, 1),
                        0 === i.length ? n.removeClass(s, o) : 0 === o.length ? n.addClass(s, i) : n.setClass(s, i, o)
                    }
                    function p(t) {
                        if (e === !0 || a.$index % 2 === e) {
                            var n = i(t || []);
                            if (d) {
                                if (!N(t, d)) {
                                    var r = i(d);
                                    h(r, n)
                                }
                            } else c(n)
                        }
                        d = M(t)
                    }
                    var d;
                    a.$watch(u[t], p, !0),
                    u.$observe("class", function (e) {
                        p(a.$eval(u[t]))
                    }),
                    "ngClass" !== t && a.$watch("$index", function (n, r) {
                        var o = 1 & n;
                        if (o !== (1 & r)) {
                            var s = i(a.$eval(u[t]));
                            o === e ? c(s) : l(s)
                        }
                    })
                }
            }
        }]
    }
    var dn = "validity",
        vn = function (t) {
            return b(t) ? t.toLowerCase() : t
        },
        gn = Object.prototype.hasOwnProperty,
        mn = function (t) {
            return b(t) ? t.toUpperCase() : t
        },
        yn = function (t) {
            return b(t) ? t.replace(/[A-Z]/g, function (t) {
                return String.fromCharCode(32 | t.charCodeAt(0))
            }) : t
        },
        $n = function (t) {
            return b(t) ? t.replace(/[a-z]/g, function (t) {
                return String.fromCharCode(-33 & t.charCodeAt(0))
            }) : t
        };
    "i" !== "I".toLowerCase() && (vn = yn, mn = $n);
    var bn, wn, _n, xn, kn, Cn = [].slice,
        Sn = [].push,
        An = Object.prototype.toString,
        En = r("ng"),
        On = t.angular || (t.angular = {}),
        Tn = ["0", "0", "0"];
    bn = h((/msie (\d+)/.exec(vn(navigator.userAgent)) || [])[1]),
    isNaN(bn) && (bn = h((/trident\/.*; rv:(\d+)/.exec(vn(navigator.userAgent)) || [])[1])),
    d.$inject = [],
    v.$inject = [];
    var jn = function () {
            return x(Array.isArray) ? Array.isArray : function (t) {
                return "[object Array]" === An.call(t)
            }
        }(),
        Pn = function () {
            return String.prototype.trim ?
            function (t) {
                return b(t) ? t.trim() : t
            } : function (t) {
                return b(t) ? t.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : t
            }
        }();
    kn = 9 > bn ?
    function (t) {
            return t = t.nodeName ? t : t[0],
            t.scopeName && "HTML" != t.scopeName ? mn(t.scopeName + ":" + t.nodeName) : t.nodeName
        } : function (t) {
            return t.nodeName ? t.nodeName : t[0].nodeName
        };
    var Rn = function () {
            if (y(Rn.isActive_)) return Rn.isActive_;
            var t = !(!e.querySelector("[ng-csp]") && !e.querySelector("[data-ng-csp]"));
            if (!t) try {
                new Function("")
            } catch (n) {
                t = !0
            }
            return Rn.isActive_ = t
        },
        Dn = /[A-Z]/g,
        In = {
            full: "1.2.28",
            major: 1,
            minor: 2,
            dot: 28,
            codeName: "finnish-disembarkation"
        };
    dt.expando = "ng339";
    var Mn = dt.cache = {},
        Nn = 1,
        Un = t.document.addEventListener ?
    function (t, e, n) {
            t.addEventListener(e, n, !1)
        } : function (t, e, n) {
            t.attachEvent("on" + e, n)
        },
        qn = t.document.removeEventListener ?
    function (t, e, n) {
            t.removeEventListener(e, n, !1)
        } : function (t, e, n) {
            t.detachEvent("on" + e, n)
        },
        Bn = (dt._data = function (t) {
            return this.cache[t[this.expando]] || {}
        }, /([\:\-\_]+(.))/g),
        Fn = /^moz([A-Z])/,
        Ln = r("jqLite"),
        Hn = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Vn = /<|&#?\w+;/,
        zn = /<([\w:]+)/,
        Wn = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Kn = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Kn.optgroup = Kn.option,
    Kn.tbody = Kn.tfoot = Kn.colgroup = Kn.caption = Kn.thead,
    Kn.th = Kn.td;
    var Jn = dt.prototype = {
            ready: function (n) {
                function r() {
                    i || (i = !0, n())
                }
                var i = !1;
                "complete" === e.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), dt(t).on("load", r))
            },
            toString: function () {
                var t = [];
                return o(this, function (e) {
                    t.push("" + e)
                }),
                "[" + t.join(", ") + "]"
            },
            eq: function (t) {
                return wn(t >= 0 ? this[t] : this[this.length + t])
            },
            length: 0,
            push: Sn,
            sort: [].sort,
            splice: [].splice
        },
        Xn = {};
    o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (t) {
            Xn[vn(t)] = t
        });
    var Qn = {};
    o("input,select,option,textarea,button,form,details".split(","), function (t) {
            Qn[mn(t)] = !0
        }),
    o({
            data: bt,
            removeData: yt
        }, function (t, e) {
            dt[e] = t
        }),
    o({
            data: bt,
            inheritedData: St,
            scope: function (t) {
                return wn.data(t, "$scope") || St(t.parentNode || t, ["$isolateScope", "$scope"])
            },
            isolateScope: function (t) {
                return wn.data(t, "$isolateScope") || wn.data(t, "$isolateScopeNoTemplate")
            },
            controller: Ct,
            injector: function (t) {
                return St(t, "$injector")
            },
            removeAttr: function (t, e) {
                t.removeAttribute(e)
            },
            hasClass: wt,
            css: function (t, e, r) {
                if (e = ct(e), !y(r)) {
                    var i;
                    return 8 >= bn && (i = t.currentStyle && t.currentStyle[e], "" === i && (i = "auto")),
                    i = i || t.style[e],
                    8 >= bn && (i = "" === i ? n : i),
                    i
                }
                t.style[e] = r
            },
            attr: function (t, e, r) {
                var i = vn(e);
                if (Xn[i]) {
                    if (!y(r)) return t[e] || (t.attributes.getNamedItem(e) || d).specified ? i : n;
                    r ? (t[e] = !0, t.setAttribute(e, i)) : (t[e] = !1, t.removeAttribute(i))
                } else if (y(r)) t.setAttribute(e, r);
                else if (t.getAttribute) {
                    var o = t.getAttribute(e, 2);
                    return null === o ? n : o
                }
            },
            prop: function (t, e, n) {
                return y(n) ? void(t[e] = n) : t[e]
            },
            text: function () {
                function t(t, n) {
                    var r = e[t.nodeType];
                    return m(n) ? r ? t[r] : "" : void(t[r] = n)
                }
                var e = [];
                return 9 > bn ? (e[1] = "innerText", e[3] = "nodeValue") : e[1] = e[3] = "textContent",
                t.$dv = "",
                t
            }(),
            val: function (t, e) {
                if (m(e)) {
                    if ("SELECT" === kn(t) && t.multiple) {
                        var n = [];
                        return o(t.options, function (t) {
                            t.selected && n.push(t.value || t.text)
                        }),
                        0 === n.length ? null : n
                    }
                    return t.value
                }
                t.value = e
            },
            html: function (t, e) {
                if (m(e)) return t.innerHTML;
                for (var n = 0, r = t.childNodes; n < r.length; n++) gt(r[n]);
                t.innerHTML = e
            },
            empty: At
        }, function (t, e) {
            dt.prototype[e] = function (e, r) {
                var i, o, a = this.length;
                if (t !== At && (2 == t.length && t !== wt && t !== Ct ? e : r) === n) {
                    if ($(e)) {
                        for (i = 0; a > i; i++) if (t === bt) t(this[i], e);
                        else for (o in e) t(this[i], o, e[o]);
                        return this
                    }
                    for (var s = t.$dv, u = s === n ? Math.min(a, 1) : a, c = 0; u > c; c++) {
                        var l = t(this[c], e, r);
                        s = s ? s + l : l
                    }
                    return s
                }
                for (i = 0; a > i; i++) t(this[i], e, r);
                return this
            }
        }),
    o({
            removeData: yt,
            dealoc: gt,
            on: function ji(t, n, r, i) {
                if (y(i)) throw Ln("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                var a = $t(t, "events"),
                    s = $t(t, "handle");
                a || $t(t, "events", a = {}),
                s || $t(t, "handle", s = Ot(t, a)),
                o(n.split(" "), function (n) {
                        var i = a[n];
                        if (!i) {
                            if ("mouseenter" == n || "mouseleave" == n) {
                                var o = e.body.contains || e.body.compareDocumentPosition ?
                                function (t, e) {
                                    var n = 9 === t.nodeType ? t.documentElement : t,
                                        r = e && e.parentNode;
                                    return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                                } : function (t, e) {
                                    if (e) for (; e = e.parentNode;) if (e === t) return !0;
                                    return !1
                                };
                                a[n] = [];
                                var u = {
                                    mouseleave: "mouseout",
                                    mouseenter: "mouseover"
                                };
                                ji(t, u[n], function (t) {
                                    var e = this,
                                        r = t.relatedTarget;
                                        (!r || r !== e && !o(e, r)) && s(t, n)
                                })
                            } else Un(t, n, s),
                            a[n] = [];
                            i = a[n]
                        }
                        i.push(r)
                    })
            },
            off: mt,
            one: function (t, e, n) {
                t = wn(t),
                t.on(e, function r() {
                    t.off(e, n),
                    t.off(e, r)
                }),
                t.on(e, n)
            },
            replaceWith: function (t, e) {
                var n, r = t.parentNode;
                gt(t),
                o(new dt(e), function (e) {
                    n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t),
                    n = e
                })
            },
            children: function (t) {
                var e = [];
                return o(t.childNodes, function (t) {
                    1 === t.nodeType && e.push(t)
                }),
                e
            },
            contents: function (t) {
                return t.contentDocument || t.childNodes || []
            },
            append: function (t, e) {
                o(new dt(e), function (e) {
                    (1 === t.nodeType || 11 === t.nodeType) && t.appendChild(e)
                })
            },
            prepend: function (t, e) {
                if (1 === t.nodeType) {
                    var n = t.firstChild;
                    o(new dt(e), function (e) {
                        t.insertBefore(e, n)
                    })
                }
            },
            wrap: function (t, e) {
                e = wn(e)[0];
                var n = t.parentNode;
                n && n.replaceChild(e, t),
                e.appendChild(t)
            },
            remove: function (t) {
                gt(t);
                var e = t.parentNode;
                e && e.removeChild(t)
            },
            after: function (t, e) {
                var n = t,
                    r = t.parentNode;
                o(new dt(e), function (t) {
                        r.insertBefore(t, n.nextSibling),
                        n = t
                    })
            },
            addClass: xt,
            removeClass: _t,
            toggleClass: function (t, e, n) {
                e && o(e.split(" "), function (e) {
                    var r = n;
                    m(r) && (r = !wt(t, e)),
                    (r ? xt : _t)(t, e)
                })
            },
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            next: function (t) {
                if (t.nextElementSibling) return t.nextElementSibling;
                for (var e = t.nextSibling; null != e && 1 !== e.nodeType;) e = e.nextSibling;
                return e
            },
            find: function (t, e) {
                return t.getElementsByTagName ? t.getElementsByTagName(e) : []
            },
            clone: vt,
            triggerHandler: function (t, e, n) {
                var r, i, a, s = e.type || e,
                    u = ($t(t, "events") || {})[s];
                u && (r = {
                        preventDefault: function () {
                            this.defaultPrevented = !0
                        },
                        isDefaultPrevented: function () {
                            return this.defaultPrevented === !0
                        },
                        stopPropagation: d,
                        type: s,
                        target: t
                    }, e.type && (r = f(r, e)), i = M(u), a = n ? [r].concat(n) : [r], o(i, function (e) {
                        e.apply(t, a)
                    }))
            }
        }, function (t, e) {
            dt.prototype[e] = function (e, n, r) {
                for (var i, o = 0; o < this.length; o++) m(i) ? (i = t(this[o], e, n, r), y(i) && (i = wn(i))) : kt(i, t(this[o], e, n, r));
                return y(i) ? i : this
            },
            dt.prototype.bind = dt.prototype.on,
            dt.prototype.unbind = dt.prototype.off
        }),
    jt.prototype = {
            put: function (t, e) {
                this[Tt(t, this.nextUid)] = e
            },
            get: function (t) {
                return this[Tt(t, this.nextUid)]
            },
            remove: function (t) {
                var e = this[t = Tt(t, this.nextUid)];
                return delete this[t],
                e
            }
        };
    var Yn = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        Gn = /,/,
        Zn = /^\s*(_?)(\S+?)\1\s*$/,
        tr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        er = r("$injector"),
        nr = r("$animate"),
        rr = ["$provide", function (t) {
            this.$$selectors = {},
            this.register = function (e, n) {
                var r = e + "-animation";
                if (e && "." != e.charAt(0)) throw nr("notcsel", "Expecting class selector starting with '.' got '{0}'.", e);
                this.$$selectors[e.substr(1)] = r,
                t.factory(r, n)
            },
            this.classNameFilter = function (t) {
                return 1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null),
                this.$$classNameFilter
            },
            this.$get = ["$timeout", "$$asyncCallback", function (t, e) {
                function n(t) {
                    t && e(t)
                }
                return {
                    enter: function (t, e, r, i) {
                        r ? r.after(t) : (e && e[0] || (e = r.parent()), e.append(t)),
                        n(i)
                    },
                    leave: function (t, e) {
                        t.remove(),
                        n(e)
                    },
                    move: function (t, e, n, r) {
                        this.enter(t, e, n, r)
                    },
                    addClass: function (t, e, r) {
                        e = b(e) ? e : jn(e) ? e.join(" ") : "",
                        o(t, function (t) {
                            xt(t, e)
                        }),
                        n(r)
                    },
                    removeClass: function (t, e, r) {
                        e = b(e) ? e : jn(e) ? e.join(" ") : "",
                        o(t, function (t) {
                            _t(t, e)
                        }),
                        n(r)
                    },
                    setClass: function (t, e, r, i) {
                        o(t, function (t) {
                            xt(t, e),
                            _t(t, r)
                        }),
                        n(i)
                    },
                    enabled: d
                }
            }]
        }],
        ir = r("$compile");
    Bt.$inject = ["$provide", "$$sanitizeUriProvider"];
    var or = /^(x[\:\-_]|data[\:\-_])/i,
        ar = r("$interpolate"),
        sr = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        ur = {
            http: 80,
            https: 443,
            ftp: 21
        },
        cr = r("$location");
    he.prototype = fe.prototype = le.prototype = {
            $$html5: !1,
            $$replace: !1,
            absUrl: pe("$$absUrl"),
            url: function (t) {
                if (m(t)) return this.$$url;
                var e = sr.exec(t);
                return e[1] && this.path(decodeURIComponent(e[1])),
                (e[2] || e[1]) && this.search(e[3] || ""),
                this.hash(e[5] || ""),
                this
            },
            protocol: pe("$$protocol"),
            host: pe("$$host"),
            port: pe("$$port"),
            path: de("$$path", function (t) {
                return t = null !== t ? t.toString() : "",
                "/" == t.charAt(0) ? t : "/" + t
            }),
            search: function (t, e) {
                switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (b(t) || w(t)) t = t.toString(),
                    this.$$search = K(t);
                    else {
                        if (!$(t)) throw cr("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                        o(t, function (e, n) {
                            null == e && delete t[n]
                        }),
                        this.$$search = t
                    }
                    break;
                default:
                    m(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
                }
                return this.$$compose(),
                this
            },
            hash: de("$$hash", function (t) {
                return null !== t ? t.toString() : ""
            }),
            replace: function () {
                return this.$$replace = !0,
                this
            }
        };
    var lr, fr = r("$parse"),
        hr = {},
        pr = Function.prototype.call,
        dr = Function.prototype.apply,
        vr = Function.prototype.bind,
        gr = {
            "null": function () {
                return null
            },
            "true": function () {
                return !0
            },
            "false": function () {
                return !1
            },
            undefined: d,
            "+": function (t, e, r, i) {
                return r = r(t, e),
                i = i(t, e),
                y(r) ? y(i) ? r + i : r : y(i) ? i : n
            },
            "-": function (t, e, n, r) {
                return n = n(t, e),
                r = r(t, e),
                (y(n) ? n : 0) - (y(r) ? r : 0)
            },
            "*": function (t, e, n, r) {
                return n(t, e) * r(t, e)
            },
            "/": function (t, e, n, r) {
                return n(t, e) / r(t, e)
            },
            "%": function (t, e, n, r) {
                return n(t, e) % r(t, e)
            },
            "^": function (t, e, n, r) {
                return n(t, e) ^ r(t, e)
            },
            "=": d,
            "===": function (t, e, n, r) {
                return n(t, e) === r(t, e)
            },
            "!==": function (t, e, n, r) {
                return n(t, e) !== r(t, e)
            },
            "==": function (t, e, n, r) {
                return n(t, e) == r(t, e)
            },
            "!=": function (t, e, n, r) {
                return n(t, e) != r(t, e)
            },
            "<": function (t, e, n, r) {
                return n(t, e) < r(t, e)
            },
            ">": function (t, e, n, r) {
                return n(t, e) > r(t, e)
            },
            "<=": function (t, e, n, r) {
                return n(t, e) <= r(t, e)
            },
            ">=": function (t, e, n, r) {
                return n(t, e) >= r(t, e)
            },
            "&&": function (t, e, n, r) {
                return n(t, e) && r(t, e)
            },
            "||": function (t, e, n, r) {
                return n(t, e) || r(t, e)
            },
            "&": function (t, e, n, r) {
                return n(t, e) & r(t, e)
            },
            "|": function (t, e, n, r) {
                return r(t, e)(t, e, n(t, e))
            },
            "!": function (t, e, n) {
                return !n(t, e)
            }
        },
        mr = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "   ",
            v: "",
            "'": "'",
            '"': '"'
        },
        yr = function (t) {
            this.options = t
        };
    yr.prototype = {
            constructor: yr,
            lex: function (t) {
                for (this.text = t, this.index = 0, this.ch = n, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
                    if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
                    else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                    else if (this.isIdent(this.ch)) this.readIdent();
                    else if (this.is("(){}[].,;:?")) this.tokens.push({
                        index: this.index,
                        text: this.ch
                    }),
                    this.index++;
                    else {
                        if (this.isWhitespace(this.ch)) {
                            this.index++;
                            continue
                        }
                        var e = this.ch + this.peek(),
                            r = e + this.peek(2),
                            i = gr[this.ch],
                            o = gr[e],
                            a = gr[r];
                        a ? (this.tokens.push({
                                index: this.index,
                                text: r,
                                fn: a
                            }), this.index += 3) : o ? (this.tokens.push({
                                index: this.index,
                                text: e,
                                fn: o
                            }), this.index += 2) : i ? (this.tokens.push({
                                index: this.index,
                                text: this.ch,
                                fn: i
                            }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                    }
                    this.lastCh = this.ch
                }
                return this.tokens
            },
            is: function (t) {
                return -1 !== t.indexOf(this.ch)
            },
            was: function (t) {
                return -1 !== t.indexOf(this.lastCh)
            },
            peek: function (t) {
                var e = t || 1;
                return this.index + e < this.text.length ? this.text.charAt(this.index + e) : !1
            },
            isNumber: function (t) {
                return t >= "0" && "9" >= t
            },
            isWhitespace: function (t) {
                return " " === t || "\r" === t || "   " === t || "\n" === t || "" === t || " " === t
            },
            isIdent: function (t) {
                return t >= "a" && "z" >= t || t >= "A" && "Z" >= t || "_" === t || "$" === t
            },
            isExpOperator: function (t) {
                return "-" === t || "+" === t || this.isNumber(t)
            },
            throwError: function (t, e, n) {
                n = n || this.index;
                var r = y(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n;
                throw fr("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, r, this.text)
            },
            readNumber: function () {
                for (var t = "", e = this.index; this.index < this.text.length;) {
                    var n = vn(this.text.charAt(this.index));
                    if ("." == n || this.isNumber(n)) t += n;
                    else {
                        var r = this.peek();
                        if ("e" == n && this.isExpOperator(r)) t += n;
                        else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == t.charAt(t.length - 1)) t += n;
                        else {
                            if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != t.charAt(t.length - 1)) break;
                            this.throwError("Invalid exponent")
                        }
                    }
                    this.index++
                }
                t = 1 * t,
                this.tokens.push({
                    index: e,
                    text: t,
                    literal: !0,
                    constant: !0,
                    fn: function () {
                        return t
                    }
                })
            },
            readIdent: function () {
                for (var t, e, n, r, i = this, o = "", a = this.index; this.index < this.text.length && (r = this.text.charAt(this.index), "." === r || this.isIdent(r) || this.isNumber(r));)"." === r && (t = this.index),
                o += r,
                this.index++;
                if (t) for (e = this.index; e < this.text.length;) {
                    if (r = this.text.charAt(e), "(" === r) {
                        n = o.substr(t - a + 1),
                        o = o.substr(0, t - a),
                        this.index = e;
                        break
                    }
                    if (!this.isWhitespace(r)) break;
                    e++
                }
                var s = {
                    index: a,
                    text: o
                };
                if (gr.hasOwnProperty(o)) s.fn = gr[o],
                s.literal = !0,
                s.constant = !0;
                else {
                    var u = ke(o, this.options, this.text);
                    s.fn = f(function (t, e) {
                        return u(t, e)
                    }, {
                        assign: function (t, e) {
                            return be(t, o, e, i.text, i.options)
                        }
                    })
                }
                this.tokens.push(s),
                n && (this.tokens.push({
                    index: t,
                    text: "."
                }), this.tokens.push({
                    index: t + 1,
                    text: n
                }))
            },
            readString: function (t) {
                var e = this.index;
                this.index++;
                for (var n = "", r = t, i = !1; this.index < this.text.length;) {
                    var o = this.text.charAt(this.index);
                    if (r += o, i) {
                        if ("u" === o) {
                            var a = this.text.substring(this.index + 1, this.index + 5);
                            a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"),
                            this.index += 4,
                            n += String.fromCharCode(parseInt(a, 16))
                        } else {
                            var s = mr[o];
                            n += s || o
                        }
                        i = !1
                    } else if ("\\" === o) i = !0;
                    else {
                        if (o === t) return this.index++,
                        void this.tokens.push({
                            index: e,
                            text: r,
                            string: n,
                            literal: !0,
                            constant: !0,
                            fn: function () {
                                return n
                            }
                        });
                        n += o
                    }
                    this.index++
                }
                this.throwError("Unterminated quote", e)
            }
        };
    var $r = function (t, e, n) {
            this.lexer = t,
            this.$filter = e,
            this.options = n
        };
    $r.ZERO = f(function () {
            return 0
        }, {
            constant: !0
        }),
    $r.prototype = {
            constructor: $r,
            parse: function (t) {
                this.text = t,
                this.tokens = this.lexer.lex(t);
                var e = this.statements();
                return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]),
                e.literal = !! e.literal,
                e.constant = !! e.constant,
                e
            },
            primary: function () {
                var t;
                if (this.expect("(")) t = this.filterChain(),
                this.consume(")");
                else if (this.expect("[")) t = this.arrayDeclaration();
                else if (this.expect("{")) t = this.object();
                else {
                    var e = this.expect();
                    t = e.fn,
                    t || this.throwError("not a primary expression", e),
                    t.literal = !! e.literal,
                    t.constant = !! e.constant
                }
                for (var n, r; n = this.expect("(", "[", ".");)"(" === n.text ? (t = this.functionCall(t, r), r = null) : "[" === n.text ? (r = t, t = this.objectIndex(t)) : "." === n.text ? (r = t, t = this.fieldAccess(t)) : this.throwError("IMPOSSIBLE");
                return t
            },
            throwError: function (t, e) {
                throw fr("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
            },
            peekToken: function () {
                if (0 === this.tokens.length) throw fr("ueoe", "Unexpected end of expression: {0}", this.text);
                return this.tokens[0]
            },
            peek: function (t, e, n, r) {
                if (this.tokens.length > 0) {
                    var i = this.tokens[0],
                        o = i.text;
                    if (o === t || o === e || o === n || o === r || !t && !e && !n && !r) return i
                }
                return !1
            },
            expect: function (t, e, n, r) {
                var i = this.peek(t, e, n, r);
                return i ? (this.tokens.shift(), i) : !1
            },
            consume: function (t) {
                this.expect(t) || this.throwError("is unexpected, expecting [" + t + "]", this.peek())
            },
            unaryFn: function (t, e) {
                return f(function (n, r) {
                    return t(n, r, e)
                }, {
                    constant: e.constant
                })
            },
            ternaryFn: function (t, e, n) {
                return f(function (r, i) {
                    return t(r, i) ? e(r, i) : n(r, i)
                }, {
                    constant: t.constant && e.constant && n.constant
                })
            },
            binaryFn: function (t, e, n) {
                return f(function (r, i) {
                    return e(r, i, t, n)
                }, {
                    constant: t.constant && n.constant
                })
            },
            statements: function () {
                for (var t = [];;) if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && t.push(this.filterChain()), !this.expect(";")) return 1 === t.length ? t[0] : function (e, n) {
                    for (var r, i = 0; i < t.length; i++) {
                        var o = t[i];
                        o && (r = o(e, n))
                    }
                    return r
                }
            },
            filterChain: function () {
                for (var t, e = this.expression();;) {
                    if (!(t = this.expect("|"))) return e;
                    e = this.binaryFn(e, t.fn, this.filter())
                }
            },
            filter: function () {
                for (var t = this.expect(), e = this.$filter(t.text), n = [];;) {
                    if (!(t = this.expect(":"))) {
                        var r = function (t, r, i) {
                            for (var o = [i], a = 0; a < n.length; a++) o.push(n[a](t, r));
                            return e.apply(t, o)
                        };
                        return function () {
                            return r
                        }
                    }
                    n.push(this.expression())
                }
            },
            expression: function () {
                return this.assignment()
            },
            assignment: function () {
                var t, e, n = this.ternary();
                return (e = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, e.index) + "] can not be assigned to", e), t = this.ternary(), function (e, r) {
                    return n.assign(e, t(e, r), r)
                }) : n
            },
            ternary: function () {
                var t, e, n = this.logicalOR();
                return (e = this.expect("?")) ? (t = this.assignment(), (e = this.expect(":")) ? this.ternaryFn(n, t, this.assignment()) : void this.throwError("expected :", e)) : n
            },
            logicalOR: function () {
                for (var t, e = this.logicalAND();;) {
                    if (!(t = this.expect("||"))) return e;
                    e = this.binaryFn(e, t.fn, this.logicalAND())
                }
            },
            logicalAND: function () {
                var t, e = this.equality();
                return (t = this.expect("&&")) && (e = this.binaryFn(e, t.fn, this.logicalAND())),
                e
            },
            equality: function () {
                var t, e = this.relational();
                return (t = this.expect("==", "!=", "===", "!==")) && (e = this.binaryFn(e, t.fn, this.equality())),
                e
            },
            relational: function () {
                var t, e = this.additive();
                return (t = this.expect("<", ">", "<=", ">=")) && (e = this.binaryFn(e, t.fn, this.relational())),
                e
            },
            additive: function () {
                for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = this.binaryFn(e, t.fn, this.multiplicative());
                return e
            },
            multiplicative: function () {
                for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = this.binaryFn(e, t.fn, this.unary());
                return e
            },
            unary: function () {
                var t;
                return this.expect("+") ? this.primary() : (t = this.expect("-")) ? this.binaryFn($r.ZERO, t.fn, this.unary()) : (t = this.expect("!")) ? this.unaryFn(t.fn, this.unary()) : this.primary()
            },
            fieldAccess: function (t) {
                var e = this,
                    n = this.expect().text,
                    r = ke(n, this.options, this.text);
                return f(function (e, n, i) {
                        return r(i || t(e, n))
                    }, {
                        assign: function (r, i, o) {
                            var a = t(r, o);
                            return a || t.assign(r, a = {}),
                            be(a, n, i, e.text, e.options)
                        }
                    })
            },
            objectIndex: function (t) {
                var e = this,
                    r = this.expression();
                return this.consume("]"),
                f(function (i, o) {
                        var a, s, u = t(i, o),
                            c = r(i, o);
                        return me(c, e.text),
                        u ? (a = ye(u[c], e.text), a && a.then && e.options.unwrapPromises && (s = a, "$$v" in a || (s.$$v = n, s.then(function (t) {
                                s.$$v = t
                            })), a = a.$$v), a) : n
                    }, {
                        assign: function (n, i, o) {
                            var a = me(r(n, o), e.text),
                                s = ye(t(n, o), e.text);
                            return s || t.assign(n, s = {}),
                            s[a] = i
                        }
                    })
            },
            functionCall: function (t, e) {
                var n = [];
                if (")" !== this.peekToken().text) do n.push(this.expression());
                while (this.expect(","));
                this.consume(")");
                var r = this;
                return function (i, o) {
                    for (var a = [], s = e ? e(i, o) : i, u = 0; u < n.length; u++) a.push(ye(n[u](i, o), r.text));
                    var c = t(i, o, s) || d;
                    ye(s, r.text),
                    $e(c, r.text);
                    var l = c.apply ? c.apply(s, a) : c(a[0], a[1], a[2], a[3], a[4]);
                    return ye(l, r.text)
                }
            },
            arrayDeclaration: function () {
                var t = [],
                    e = !0;
                if ("]" !== this.peekToken().text) do {
                        if (this.peek("]")) break;
                        var n = this.expression();
                        t.push(n), n.constant || (e = !1)
                    } while (this.expect(","));
                return this.consume("]"),
                f(function (e, n) {
                        for (var r = [], i = 0; i < t.length; i++) r.push(t[i](e, n));
                        return r
                    }, {
                        literal: !0,
                        constant: e
                    })
            },
            object: function () {
                var t = [],
                    e = !0;
                if ("}" !== this.peekToken().text) do {
                        if (this.peek("}")) break;
                        var n = this.expect(),
                            r = n.string || n.text;
                        this.consume(":");
                        var i = this.expression();
                        t.push({
                                key: r,
                                value: i
                            }), i.constant || (e = !1)
                    } while (this.expect(","));
                return this.consume("}"),
                f(function (e, n) {
                        for (var r = {}, i = 0; i < t.length; i++) {
                            var o = t[i];
                            r[o.key] = o.value(e, n)
                        }
                        return r
                    }, {
                        literal: !0,
                        constant: e
                    })
            }
        };
    var br = {},
        wr = {},
        _r = r("$sce"),
        xr = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        kr = e.createElement("a"),
        Cr = Ue(t.location.href, !0);
    Fe.$inject = ["$provide"],
    He.$inject = ["$locale"],
    Ve.$inject = ["$locale"];
    var Sr = ".",
        Ar = {
            yyyy: Ke("FullYear", 4),
            yy: Ke("FullYear", 2, 0, !0),
            y: Ke("FullYear", 1),
            MMMM: Je("Month"),
            MMM: Je("Month", !0),
            MM: Ke("Month", 2, 1),
            M: Ke("Month", 1, 1),
            dd: Ke("Date", 2),
            d: Ke("Date", 1),
            HH: Ke("Hours", 2),
            H: Ke("Hours", 1),
            hh: Ke("Hours", 2, -12),
            h: Ke("Hours", 1, -12),
            mm: Ke("Minutes", 2),
            m: Ke("Minutes", 1),
            ss: Ke("Seconds", 2),
            s: Ke("Seconds", 1),
            sss: Ke("Milliseconds", 3),
            EEEE: Je("Day"),
            EEE: Je("Day", !0),
            a: Qe,
            Z: Xe
        },
        Er = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
        Or = /^\-?\d+$/;
    Ye.$inject = ["$locale"];
    var Tr = g(vn),
        jr = g(mn);
    tn.$inject = ["$parse"];
    var Pr = g({
            restrict: "E",
            compile: function (t, n) {
                return 8 >= bn && (n.href || n.name || n.$set("href", ""), t.append(e.createComment("IE fix"))),
                n.href || n.xlinkHref || n.name ? void 0 : function (t, e) {
                    var n = "[object SVGAnimatedString]" === An.call(e.prop("href")) ? "xlink:href" : "href";
                    e.on("click", function (t) {
                        e.attr(n) || t.preventDefault()
                    })
                }
            }
        }),
        Rr = {};
    o(Xn, function (t, e) {
            if ("multiple" != t) {
                var n = Ft("ng-" + e);
                Rr[n] = function () {
                    return {
                        priority: 100,
                        link: function (t, r, i) {
                            t.$watch(i[n], function (t) {
                                i.$set(e, !! t)
                            })
                        }
                    }
                }
            }
        }),
    o(["src", "srcset", "href"], function (t) {
            var e = Ft("ng-" + t);
            Rr[e] = function () {
                return {
                    priority: 99,
                    link: function (n, r, i) {
                        var o = t,
                            a = t;
                        "href" === t && "[object SVGAnimatedString]" === An.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null),
                        i.$observe(e, function (e) {
                                return e ? (i.$set(a, e), void(bn && o && r.prop(o, i[a]))) : void("href" === t && i.$set(a, null))
                            })
                    }
                }
            }
        });
    var Dr = {
            $addControl: d,
            $removeControl: d,
            $setValidity: d,
            $setDirty: d,
            $setPristine: d
        };
    nn.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var Ir = function (t) {
            return ["$timeout", function (e) {
                var r = {
                    name: "form",
                    restrict: t ? "EAC" : "E",
                    controller: nn,
                    compile: function () {
                        return {
                            pre: function (t, r, i, o) {
                                if (!i.action) {
                                    var a = function (t) {
                                        t.preventDefault ? t.preventDefault() : t.returnValue = !1
                                    };
                                    Un(r[0], "submit", a),
                                    r.on("$destroy", function () {
                                        e(function () {
                                            qn(r[0], "submit", a)
                                        }, 0, !1)
                                    })
                                }
                                var s = r.parent().controller("form"),
                                    u = i.name || i.ngForm;
                                u && be(t, u, o, u),
                                s && r.on("$destroy", function () {
                                        s.$removeControl(o),
                                        u && be(t, u, n, u),
                                        f(o, Dr)
                                    })
                            }
                        }
                    }
                };
                return r
            }]
        },
        Mr = Ir(),
        Nr = Ir(!0),
        Ur = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        qr = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        Br = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        Fr = {
            text: sn,
            number: un,
            url: cn,
            email: ln,
            radio: fn,
            checkbox: hn,
            hidden: d,
            button: d,
            submit: d,
            reset: d,
            file: d
        },
        Lr = ["badInput"],
        Hr = ["$browser", "$sniffer", function (t, e) {
            return {
                restrict: "E",
                require: "?ngModel",
                link: function (n, r, i, o) {
                    o && (Fr[vn(i.type)] || Fr.text)(n, r, i, o, e, t)
                }
            }
        }],
        Vr = "ng-valid",
        zr = "ng-invalid",
        Wr = "ng-pristine",
        Kr = "ng-dirty",
        Jr = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function (t, e, n, i, a, s) {
            function u(t, e) {
                e = e ? "-" + Z(e, "-") : "",
                s.removeClass(i, (t ? zr : Vr) + e),
                s.addClass(i, (t ? Vr : zr) + e)
            }
            this.$viewValue = Number.NaN,
            this.$modelValue = Number.NaN,
            this.$parsers = [],
            this.$formatters = [],
            this.$viewChangeListeners = [],
            this.$pristine = !0,
            this.$dirty = !1,
            this.$valid = !0,
            this.$invalid = !1,
            this.$name = n.name;
            var c = a(n.ngModel),
                l = c.assign;
            if (!l) throw r("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", n.ngModel, z(i));
            this.$render = d,
            this.$isEmpty = function (t) {
                    return m(t) || "" === t || null === t || t !== t
                };
            var f = i.inheritedData("$formController") || Dr,
                h = 0,
                p = this.$error = {};
            i.addClass(Wr),
            u(!0),
            this.$setValidity = function (t, e) {
                    p[t] !== !e && (e ? (p[t] && h--, h || (u(!0), this.$valid = !0, this.$invalid = !1)) : (u(!1), this.$invalid = !0, this.$valid = !1, h++), p[t] = !e, u(e, t), f.$setValidity(t, e, this))
                },
            this.$setPristine = function () {
                    this.$dirty = !1,
                    this.$pristine = !0,
                    s.removeClass(i, Kr),
                    s.addClass(i, Wr)
                },
            this.$setViewValue = function (n) {
                    this.$viewValue = n,
                    this.$pristine && (this.$dirty = !0, this.$pristine = !1, s.removeClass(i, Wr), s.addClass(i, Kr), f.$setDirty()),
                    o(this.$parsers, function (t) {
                        n = t(n)
                    }),
                    this.$modelValue !== n && (this.$modelValue = n, l(t, n), o(this.$viewChangeListeners, function (t) {
                        try {
                            t()
                        } catch (n) {
                            e(n)
                        }
                    }))
                };
            var v = this;
            t.$watch(function () {
                    var e = c(t);
                    if (v.$modelValue !== e) {
                        var n = v.$formatters,
                            r = n.length;
                        for (v.$modelValue = e; r--;) e = n[r](e);
                        v.$viewValue !== e && (v.$viewValue = e, v.$render())
                    }
                    return e
                })
        }],
        Xr = function () {
            return {
                require: ["ngModel", "^?form"],
                controller: Jr,
                link: function (t, e, n, r) {
                    var i = r[0],
                        o = r[1] || Dr;
                    o.$addControl(i),
                    t.$on("$destroy", function () {
                            o.$removeControl(i)
                        })
                }
            }
        },
        Qr = g({
            require: "ngModel",
            link: function (t, e, n, r) {
                r.$viewChangeListeners.push(function () {
                    t.$eval(n.ngChange)
                })
            }
        }),
        Yr = function () {
            return {
                require: "?ngModel",
                link: function (t, e, n, r) {
                    if (r) {
                        n.required = !0;
                        var i = function (t) {
                            return n.required && r.$isEmpty(t) ? void r.$setValidity("required", !1) : (r.$setValidity("required", !0), t)
                        };
                        r.$formatters.push(i),
                        r.$parsers.unshift(i),
                        n.$observe("required", function () {
                            i(r.$viewValue)
                        })
                    }
                }
            }
        },
        Gr = function () {
            return {
                require: "ngModel",
                link: function (t, e, r, i) {
                    var a = /\/(.*)\//.exec(r.ngList),
                        s = a && new RegExp(a[1]) || r.ngList || ",",
                        u = function (t) {
                            if (!m(t)) {
                                var e = [];
                                return t && o(t.split(s), function (t) {
                                    t && e.push(Pn(t))
                                }),
                                e
                            }
                        };
                    i.$parsers.push(u),
                    i.$formatters.push(function (t) {
                            return jn(t) ? t.join(", ") : n
                        }),
                    i.$isEmpty = function (t) {
                            return !t || !t.length
                        }
                }
            }
        },
        Zr = /^(true|false|\d+)$/,
        ti = function () {
            return {
                priority: 100,
                compile: function (t, e) {
                    return Zr.test(e.ngValue) ?
                    function (t, e, n) {
                        n.$set("value", t.$eval(n.ngValue))
                    } : function (t, e, n) {
                        t.$watch(n.ngValue, function (t) {
                            n.$set("value", t)
                        })
                    }
                }
            }
        },
        ei = en({
            compile: function (t) {
                return t.addClass("ng-binding"),


                function (t, e, r) {
                    e.data("$binding", r.ngBind),
                    t.$watch(r.ngBind, function (t) {
                        e.text(t == n ? "" : t)
                    })
                }
            }
        }),
        ni = ["$interpolate", function (t) {
            return function (e, n, r) {
                var i = t(n.attr(r.$attr.ngBindTemplate));
                n.addClass("ng-binding").data("$binding", i),
                r.$observe("ngBindTemplate", function (t) {
                    n.text(t)
                })
            }
        }],
        ri = ["$sce", "$parse", function (t, e) {
            return {
                compile: function (n) {
                    return n.addClass("ng-binding"),


                    function (n, r, i) {
                        function o() {
                            return (a(n) || "").toString()
                        }
                        r.data("$binding", i.ngBindHtml);
                        var a = e(i.ngBindHtml);
                        n.$watch(o, function (e) {
                            r.html(t.getTrustedHtml(a(n)) || "")
                        })
                    }
                }
            }
        }],
        ii = pn("", !0),
        oi = pn("Odd", 0),
        ai = pn("Even", 1),
        si = en({
            compile: function (t, e) {
                e.$set("ngCloak", n),
                t.removeClass("ng-cloak")
            }
        }),
        ui = [function () {
            return {
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        ci = {},
        li = {
            blur: !0,
            focus: !0
        };
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (t) {
            var e = Ft("ng-" + t);
            ci[e] = ["$parse", "$rootScope", function (n, r) {
                return {
                    compile: function (i, o) {
                        var a = n(o[e], !0);
                        return function (e, n) {
                            n.on(t, function (n) {
                                var i = function () {
                                    a(e, {
                                        $event: n
                                    })
                                };
                                li[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i)
                            })
                        }
                    }
                }
            }]
        });
    var fi = ["$animate", function (t) {
            return {
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (n, r, i, o, a) {
                    var s, u, c;
                    n.$watch(i.ngIf, function (o) {
                        V(o) ? u || (u = n.$new(), a(u, function (n) {
                            n[n.length++] = e.createComment(" end ngIf: " + i.ngIf + " "),
                            s = {
                                clone: n
                            },
                            t.enter(n, r.parent(), r)
                        })) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), s && (c = ot(s.clone), t.leave(c, function () {
                            c = null
                        }), s = null))
                    })
                }
            }
        }],
        hi = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function (t, e, n, r, i) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: On.noop,
                compile: function (o, a) {
                    var s = a.ngInclude || a.src,
                        u = a.onload || "",
                        c = a.autoscroll;
                    return function (o, a, l, f, h) {
                            var p, d, v, g = 0,
                                m = function () {
                                    d && (d.remove(), d = null),
                                    p && (p.$destroy(), p = null),
                                    v && (r.leave(v, function () {
                                        d = null
                                    }), d = v, v = null)
                                };
                            o.$watch(i.parseAsResourceUrl(s), function (i) {
                                    var s = function () {
                                        !y(c) || c && !o.$eval(c) || n()
                                    },
                                        l = ++g;
                                    i ? (t.get(i, {
                                            cache: e
                                        }).success(function (t) {
                                            if (l === g) {
                                                var e = o.$new();
                                                f.template = t;
                                                var n = h(e, function (t) {
                                                    m(),
                                                    r.enter(t, null, a, s)
                                                });
                                                p = e,
                                                v = n,
                                                p.$emit("$includeContentLoaded"),
                                                o.$eval(u)
                                            }
                                        }).error(function () {
                                            l === g && m()
                                        }), o.$emit("$includeContentRequested")) : (m(), f.template = null)
                                })
                        }
                }
            }
        }],
        pi = ["$compile", function (t) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function (e, n, r, i) {
                    n.html(i.template),
                    t(n.contents())(e)
                }
            }
        }],
        di = en({
            priority: 450,
            compile: function () {
                return {
                    pre: function (t, e, n) {
                        t.$eval(n.ngInit)
                    }
                }
            }
        }),
        vi = en({
            terminal: !0,
            priority: 1e3
        }),
        gi = ["$locale", "$interpolate", function (t, e) {
            var n = /{}/g;
            return {
                restrict: "EA",
                link: function (r, i, a) {
                    var s = a.count,
                        u = a.$attr.when && i.attr(a.$attr.when),
                        c = a.offset || 0,
                        l = r.$eval(u) || {},
                        f = {},
                        h = e.startSymbol(),
                        p = e.endSymbol(),
                        d = /^when(Minus)?(.+)$/;
                    o(a, function (t, e) {
                            d.test(e) && (l[vn(e.replace("when", "").replace("Minus", "-"))] = i.attr(a.$attr[e]))
                        }),
                    o(l, function (t, r) {
                            f[r] = e(t.replace(n, h + s + "-" + c + p))
                        }),
                    r.$watch(function () {
                            var e = parseFloat(r.$eval(s));
                            return isNaN(e) ? "" : (e in l || (e = t.pluralCat(e - c)), f[e](r, i, !0))
                        }, function (t) {
                            i.text(t)
                        })
                }
            }
        }],
        mi = ["$parse", "$animate", function (t, n) {
            function a(t) {
                return t.clone[0]
            }
            function s(t) {
                return t.clone[t.clone.length - 1]
            }
            var u = "$$NG_REMOVED",
                c = r("ngRepeat");
            return {
                    transclude: "element",
                    priority: 1e3,
                    terminal: !0,
                    $$tlb: !0,
                    link: function (r, l, f, h, p) {
                        var d, v, g, m, y, $, b, w, _, x = f.ngRepeat,
                            k = x.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                            C = {
                                $id: Tt
                            };
                        if (!k) throw c("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", x);
                        if ($ = k[1], b = k[2], d = k[3], d ? (v = t(d), g = function (t, e, n) {
                                return _ && (C[_] = t),
                                C[w] = e,
                                C.$index = n,
                                v(r, C)
                            }) : (m = function (t, e) {
                                return Tt(e)
                            }, y = function (t) {
                                return t
                            }), k = $.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !k) throw c("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", $);
                        w = k[3] || k[1],
                        _ = k[2];
                        var S = {};
                        r.$watchCollection(b, function (t) {
                                var f, h, d, v, $, b, k, C, A, E, O, T, j = l[0],
                                    P = {},
                                    R = [];
                                if (i(t)) E = t,
                                A = g || m;
                                else {
                                        A = g || y,
                                        E = [];
                                        for (b in t) t.hasOwnProperty(b) && "$" != b.charAt(0) && E.push(b);
                                        E.sort()
                                    }
                                for (v = E.length, h = R.length = E.length, f = 0; h > f; f++) if (b = t === E ? f : E[f], k = t[b], C = A(b, k, f), rt(C, "`track by` id"), S.hasOwnProperty(C)) O = S[C],
                                delete S[C],
                                P[C] = O,
                                R[f] = O;
                                else {
                                        if (P.hasOwnProperty(C)) throw o(R, function (t) {
                                            t && t.scope && (S[t.id] = t)
                                        }),
                                        c("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", x, C, L(k));
                                        R[f] = {
                                            id: C
                                        },
                                        P[C] = !1
                                    }
                                for (b in S) S.hasOwnProperty(b) && (O = S[b], T = ot(O.clone), n.leave(T), o(T, function (t) {
                                        t[u] = !0
                                    }), O.scope.$destroy());
                                for (f = 0, h = E.length; h > f; f++) {
                                        if (b = t === E ? f : E[f], k = t[b], O = R[f], R[f - 1] && (j = s(R[f - 1])), O.scope) {
                                            $ = O.scope,
                                            d = j;
                                            do d = d.nextSibling;
                                            while (d && d[u]);
                                            a(O) != d && n.move(ot(O.clone), null, wn(j)),
                                            j = s(O)
                                        } else $ = r.$new();
                                        $[w] = k,
                                        _ && ($[_] = b),
                                        $.$index = f,
                                        $.$first = 0 === f,
                                        $.$last = f === v - 1,
                                        $.$middle = !($.$first || $.$last),
                                        $.$odd = !($.$even = 0 === (1 & f)),
                                        O.scope || p($, function (t) {
                                            t[t.length++] = e.createComment(" end ngRepeat: " + x + " "),
                                            n.enter(t, null, wn(j)),
                                            j = t,
                                            O.scope = $,
                                            O.clone = t,
                                            P[O.id] = O
                                        })
                                    }
                                S = P
                            })
                    }
                }
        }],
        yi = ["$animate", function (t) {
            return function (e, n, r) {
                e.$watch(r.ngShow, function (e) {
                    t[V(e) ? "removeClass" : "addClass"](n, "ng-hide")
                })
            }
        }],
        $i = ["$animate", function (t) {
            return function (e, n, r) {
                e.$watch(r.ngHide, function (e) {
                    t[V(e) ? "addClass" : "removeClass"](n, "ng-hide")
                })
            }
        }],
        bi = en(function (t, e, n) {
            t.$watch(n.ngStyle, function (t, n) {
                n && t !== n && o(n, function (t, n) {
                    e.css(n, "")
                }),
                t && e.css(t)
            }, !0)
        }),
        wi = ["$animate", function (t) {
            return {
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope", function () {
                    this.cases = {}
                }],
                link: function (e, n, r, i) {
                    var a = r.ngSwitch || r.on,
                        s = [],
                        u = [],
                        c = [],
                        l = [];
                    e.$watch(a, function (n) {
                            var a, f;
                            for (a = 0, f = c.length; f > a; ++a) c[a].remove();
                            for (c.length = 0, a = 0, f = l.length; f > a; ++a) {
                                var h = u[a];
                                l[a].$destroy(),
                                c[a] = h,
                                t.leave(h, function () {
                                    c.splice(a, 1)
                                })
                            }
                            u.length = 0,
                            l.length = 0,
                            (s = i.cases["!" + n] || i.cases["?"]) && (e.$eval(r.change), o(s, function (n) {
                                var r = e.$new();
                                l.push(r),
                                n.transclude(r, function (e) {
                                    var r = n.element;
                                    u.push(e),
                                    t.enter(e, r.parent(), r)
                                })
                            }))
                        })
                }
            }
        }],
        _i = en({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function (t, e, n, r, i) {
                r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [],
                r.cases["!" + n.ngSwitchWhen].push({
                    transclude: i,
                    element: e
                })
            }
        }),
        xi = en({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function (t, e, n, r, i) {
                r.cases["?"] = r.cases["?"] || [],
                r.cases["?"].push({
                    transclude: i,
                    element: e
                })
            }
        }),
        ki = en({
            link: function (t, e, n, i, o) {
                if (!o) throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", z(e));
                o(function (t) {
                    e.empty(),
                    e.append(t)
                })
            }
        }),
        Ci = ["$templateCache", function (t) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function (e, n) {
                    if ("text/ng-template" == n.type) {
                        var r = n.id,
                            i = e[0].text;
                        t.put(r, i)
                    }
                }
            }
        }],
        Si = r("ngOptions"),
        Ai = g({
            terminal: !0
        }),
        Ei = ["$compile", "$parse", function (t, r) {
            var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                s = {
                    $setViewValue: d
                };
            return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: ["$element", "$scope", "$attrs", function (t, e, n) {
                        var r, i, o = this,
                            a = {},
                            u = s;
                        o.databound = n.ngModel,
                        o.init = function (t, e, n) {
                                u = t,
                                r = e,
                                i = n
                            },
                        o.addOption = function (e) {
                                rt(e, '"option value"'),
                                a[e] = !0,
                                u.$viewValue == e && (t.val(e), i.parent() && i.remove())
                            },
                        o.removeOption = function (t) {
                                this.hasOption(t) && (delete a[t], u.$viewValue == t && this.renderUnknownOption(t))
                            },
                        o.renderUnknownOption = function (e) {
                                var n = "? " + Tt(e) + " ?";
                                i.val(n),
                                t.prepend(i),
                                t.val(n),
                                i.prop("selected", !0)
                            },
                        o.hasOption = function (t) {
                                return a.hasOwnProperty(t)
                            },
                        e.$on("$destroy", function () {
                                o.renderUnknownOption = d
                            })
                    }],
                    link: function (s, u, c, l) {
                        function f(t, e, n, r) {
                            n.$render = function () {
                                var t = n.$viewValue;
                                r.hasOption(t) ? (k.parent() && k.remove(), e.val(t), "" === t && d.prop("selected", !0)) : m(t) && d ? e.val("") : r.renderUnknownOption(t)
                            },
                            e.on("change", function () {
                                t.$apply(function () {
                                    k.parent() && k.remove(),
                                    n.$setViewValue(e.val())
                                })
                            })
                        }
                        function h(t, e, n) {
                            var r;
                            n.$render = function () {
                                var t = new jt(n.$viewValue);
                                o(e.find("option"), function (e) {
                                    e.selected = y(t.get(e.value))
                                })
                            },
                            t.$watch(function () {
                                N(r, n.$viewValue) || (r = M(n.$viewValue), n.$render())
                            }),
                            e.on("change", function () {
                                t.$apply(function () {
                                    var t = [];
                                    o(e.find("option"), function (e) {
                                        e.selected && t.push(e.value)
                                    }),
                                    n.$setViewValue(t)
                                })
                            })
                        }
                        function p(e, o, s) {
                            function u() {
                                var t = !1;
                                if ($) {
                                    var n = s.$modelValue;
                                    if (C && jn(n)) {
                                        t = new jt([]);
                                        for (var r = {}, i = 0; i < n.length; i++) r[h] = n[i],
                                        t.put(C(e, r), n[i])
                                    } else t = new jt(n)
                                }
                                return t
                            }
                            function c() {
                                var t, n, r, i, c, l, b, k, A, E, O, T, j, P, R, D = {
                                    "": []
                                },
                                    I = [""],
                                    M = s.$modelValue,
                                    N = m(e) || [],
                                    U = p ? a(N) : N,
                                    q = {},
                                    B = u();
                                for (O = 0; A = U.length, A > O; O++) {
                                        if (b = O, p) {
                                            if (b = U[O], "$" === b.charAt(0)) continue;
                                            q[p] = b
                                        }
                                        if (q[h] = N[b], t = d(e, q) || "", (n = D[t]) || (n = D[t] = [], I.push(t)), $) T = y(B.remove(C ? C(e, q) : g(e, q)));
                                        else {
                                            if (C) {
                                                var F = {};
                                                F[h] = M,
                                                T = C(e, F) === C(e, q)
                                            } else T = M === g(e, q);
                                            B = B || T
                                        }
                                        R = f(e, q),
                                        R = y(R) ? R : "",
                                        n.push({
                                            id: C ? C(e, q) : p ? U[O] : O,
                                            label: R,
                                            selected: T
                                        })
                                    }
                                for ($ || (w || null === M ? D[""].unshift({
                                        id: "",
                                        label: "",
                                        selected: !B
                                    }) : B || D[""].unshift({
                                        id: "?",
                                        label: "",
                                        selected: !0
                                    })), E = 0, k = I.length; k > E; E++) {
                                        for (t = I[E], n = D[t], S.length <= E ? (i = {
                                            element: x.clone().attr("label", t),
                                            label: n.label
                                        }, c = [i], S.push(c), o.append(i.element)) : (c = S[E], i = c[0], i.label != t && i.element.attr("label", i.label = t)), j = null, O = 0, A = n.length; A > O; O++) r = n[O],
                                        (l = c[O + 1]) ? (j = l.element, l.label !== r.label && (j.text(l.label = r.label), j.prop("label", l.label)), l.id !== r.id && j.val(l.id = r.id), j[0].selected !== r.selected && (j.prop("selected", l.selected = r.selected), bn && j.prop("selected", l.selected))) : ("" === r.id && w ? P = w : (P = _.clone()).val(r.id).prop("selected", r.selected).attr("selected", r.selected).prop("label", r.label).text(r.label), c.push(l = {
                                            element: P,
                                            label: r.label,
                                            id: r.id,
                                            selected: r.selected
                                        }), v.addOption(r.label, P), j ? j.after(P) : i.element.append(P), j = P);
                                        for (O++; c.length > O;) r = c.pop(),
                                        v.removeOption(r.label),
                                        r.element.remove()
                                    }
                                for (; S.length > E;) S.pop()[0].element.remove()
                            }
                            var l;
                            if (!(l = b.match(i))) throw Si("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", b, z(o));
                            var f = r(l[2] || l[1]),
                                h = l[4] || l[6],
                                p = l[5],
                                d = r(l[3] || ""),
                                g = r(l[2] ? l[1] : h),
                                m = r(l[7]),
                                k = l[8],
                                C = k ? r(l[8]) : null,
                                S = [
                                    [{
                                        element: o,
                                        label: ""
                                    }]
                            ];
                            w && (t(w)(e), w.removeClass("ng-scope"), w.remove()),
                            o.empty(),
                            o.on("change", function () {
                                    e.$apply(function () {
                                        var t, r, i, a, u, l, f, d, v, y = m(e) || [],
                                            b = {};
                                        if ($) {
                                                for (i = [], l = 0, d = S.length; d > l; l++) for (t = S[l], u = 1, f = t.length; f > u; u++) if ((a = t[u].element)[0].selected) {
                                                    if (r = a.val(), p && (b[p] = r), C) for (v = 0; v < y.length && (b[h] = y[v], C(e, b) != r); v++);
                                                    else b[h] = y[r];
                                                    i.push(g(e, b))
                                                }
                                            } else if (r = o.val(), "?" == r) i = n;
                                        else if ("" === r) i = null;
                                        else if (C) {
                                                for (v = 0; v < y.length; v++) if (b[h] = y[v], C(e, b) == r) {
                                                    i = g(e, b);
                                                    break
                                                }
                                            } else b[h] = y[r],
                                        p && (b[p] = r),
                                        i = g(e, b);
                                        s.$setViewValue(i),
                                        c()
                                    })
                                }),
                            s.$render = c,
                            e.$watchCollection(m, c),
                            e.$watchCollection(function () {
                                    var t = {},
                                        n = m(e);
                                    if (n) {
                                            for (var r = new Array(n.length), i = 0, o = n.length; o > i; i++) t[h] = n[i],
                                            r[i] = f(e, t);
                                            return r
                                        }
                                }, c),
                            $ && e.$watchCollection(function () {
                                    return s.$modelValue
                                }, c)
                        }
                        if (l[1]) {
                            for (var d, v = l[0], g = l[1], $ = c.multiple, b = c.ngOptions, w = !1, _ = wn(e.createElement("option")), x = wn(e.createElement("optgroup")), k = _.clone(), C = 0, S = u.children(), A = S.length; A > C; C++) if ("" === S[C].value) {
                                d = w = S.eq(C);
                                break
                            }
                            v.init(g, w, k),
                            $ && (g.$isEmpty = function (t) {
                                return !t || 0 === t.length
                            }),
                            b ? p(s, u, g) : $ ? h(s, u, g) : f(s, u, g, v)
                        }
                    }
                }
        }],
        Oi = ["$interpolate", function (t) {
            var e = {
                addOption: d,
                removeOption: d
            };
            return {
                restrict: "E",
                priority: 100,
                compile: function (n, r) {
                    if (m(r.value)) {
                        var i = t(n.text(), !0);
                        i || r.$set("value", n.text())
                    }
                    return function (t, n, r) {
                        var o = "$selectController",
                            a = n.parent(),
                            s = a.data(o) || a.parent().data(o);
                        s && s.databound ? n.prop("selected", !1) : s = e,
                        i ? t.$watch(i, function (t, e) {
                                r.$set("value", t),
                                t !== e && s.removeOption(e),
                                s.addOption(t)
                            }) : s.addOption(r.value),
                        n.on("$destroy", function () {
                                s.removeOption(r.value)
                            })
                    }
                }
            }
        }],
        Ti = g({
            restrict: "E",
            terminal: !0
        });
    return t.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (tt(), st(On), void wn(e).ready(function () {
            Y(e, G)
        }))
}(window, document),
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'),
/**
 * An
 * Angular
 * module
 * that
 * gives
 * you
 * access
 * to
 * the
 * browsers
 * local
 * storage
 * 
 * @version v0.2.2 -
 *          2015-05-29
 * @link https://github.com/grevory/angular-local-storage
 * @author grevory
 *         <greg@gregpike.ca>
 * @license MIT
 *          License,
 *          http://www.opensource.org/licenses/MIT
 */

function (t, e, n) {
    "use strict";
    var r = e.isDefined,
        i = e.isUndefined,
        o = e.isNumber,
        a = e.isObject,
        s = e.isArray,
        u = e.extend,
        c = e.toJson,
        l = e.module("LocalStorageModule", []);
    l.provider("localStorageService", function () {
            this.prefix = "ls",
            this.storageType = "localStorage",
            this.cookie = {
                expiry: 30,
                path: "/"
            },
            this.notify = {
                setItem: !0,
                removeItem: !1
            },
            this.setPrefix = function (t) {
                return this.prefix = t,
                this
            },
            this.setStorageType = function (t) {
                return this.storageType = t,
                this
            },
            this.setStorageCookie = function (t, e) {
                return this.cookie.expiry = t,
                this.cookie.path = e,
                this
            },
            this.setStorageCookieDomain = function (t) {
                return this.cookie.domain = t,
                this
            },
            this.setNotify = function (t, e) {
                return this.notify = {
                    setItem: t,
                    removeItem: e
                },
                this
            },
            this.$get = ["$rootScope", "$window", "$document", "$parse", function (t, e, n, l) {
                var f, h = this,
                    p = h.prefix,
                    d = h.cookie,
                    v = h.notify,
                    g = h.storageType;
                n ? n[0] && (n = n[0]) : n = document,
                "." !== p.substr(-1) && (p = p ? p + "." : "");
                var m = function (t) {
                        return p + t
                    },
                    y = function () {
                        try {
                            var n = g in e && null !== e[g],
                                r = m("__" + Math.round(1e7 * Math.random()));
                            return n && (f = e[g], f.setItem(r, ""), f.removeItem(r)),
                            n
                        } catch (i) {
                            return g = "cookie",
                            t.$broadcast("LocalStorageModule.notification.error", i.message),
                            !1
                        }
                    }(),
                    $ = function (e, n) {
                        if (n = i(n) ? null : c(n), !y || "cookie" === h.storageType) return y || t.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"),
                        v.setItem && t.$broadcast("LocalStorageModule.notification.setitem", {
                            key: e,
                            newvalue: n,
                            storageType: "cookie"
                        }),
                        C(e, n);
                        try {
                            f && f.setItem(m(e), n),
                            v.setItem && t.$broadcast("LocalStorageModule.notification.setitem", {
                                key: e,
                                newvalue: n,
                                storageType: h.storageType
                            })
                        } catch (r) {
                            return t.$broadcast("LocalStorageModule.notification.error", r.message),
                            C(e, n)
                        }
                        return !0
                    },
                    b = function (e) {
                        if (!y || "cookie" === h.storageType) return y || t.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"),
                        S(e);
                        var n = f ? f.getItem(m(e)) : null;
                        if (!n || "null" === n) return null;
                        try {
                            return JSON.parse(n)
                        } catch (r) {
                            return n
                        }
                    },
                    w = function () {
                        var e, n;
                        for (e = 0; e < arguments.length; e++) if (n = arguments[e], y && "cookie" !== h.storageType) try {
                            f.removeItem(m(n)),
                            v.removeItem && t.$broadcast("LocalStorageModule.notification.removeitem", {
                                key: n,
                                storageType: h.storageType
                            })
                        } catch (r) {
                            t.$broadcast("LocalStorageModule.notification.error", r.message),
                            A(n)
                        } else y || t.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"),
                        v.removeItem && t.$broadcast("LocalStorageModule.notification.removeitem", {
                            key: n,
                            storageType: "cookie"
                        }),
                        A(n)
                    },
                    _ = function () {
                        if (!y) return t.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"),
                        !1;
                        var e = p.length,
                            n = [];
                        for (var r in f) if (r.substr(0, e) === p) try {
                                n.push(r.substr(e))
                            } catch (i) {
                                return t.$broadcast("LocalStorageModule.notification.error", i.Description),
                                []
                            }
                        return n
                    },
                    x = function (e) {
                        var n = p ? new RegExp("^" + p) : new RegExp,
                            r = e ? new RegExp(e) : new RegExp;
                        if (!y || "cookie" === h.storageType) return y || t.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"),
                        E();
                        var i = p.length;
                        for (var o in f) if (n.test(o) && r.test(o.substr(i))) try {
                                w(o.substr(i))
                            } catch (a) {
                                return t.$broadcast("LocalStorageModule.notification.error", a.message),
                                E()
                            }
                        return !0
                    },
                    k = function () {
                        try {
                            return e.navigator.cookieEnabled || "cookie" in n && (n.cookie.length > 0 || (n.cookie = "test").indexOf.call(n.cookie, "test") > -1)
                        } catch (r) {
                            return t.$broadcast("LocalStorageModule.notification.error", r.message),
                            !1
                        }
                    }(),
                    C = function (e, r, u) {
                        if (i(r)) return !1;
                        if ((s(r) || a(r)) && (r = c(r)), !k) return t.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"),
                        !1;
                        try {
                            var l = "",
                                f = new Date,
                                h = "";
                            if (null === r ? (f.setTime(f.getTime() + -864e5), l = "; expires=" + f.toGMTString(), r = "") : o(u) && 0 !== u ? (f.setTime(f.getTime() + 24 * u * 60 * 60 * 1e3), l = "; expires=" + f.toGMTString()) : 0 !== d.expiry && (f.setTime(f.getTime() + 24 * d.expiry * 60 * 60 * 1e3), l = "; expires=" + f.toGMTString()), e) {
                                    var p = "; path=" + d.path;
                                    d.domain && (h = "; domain=" + d.domain),
                                    n.cookie = m(e) + "=" + encodeURIComponent(r) + l + p + h
                                }
                        } catch (v) {
                            return t.$broadcast("LocalStorageModule.notification.error", v.message),
                            !1
                        }
                        return !0
                    },
                    S = function (e) {
                        if (!k) return t.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"),
                        !1;
                        for (var r = n.cookie && n.cookie.split(";") || [], i = 0; i < r.length; i++) {
                            for (var o = r[i];
                            " " === o.charAt(0);) o = o.substring(1, o.length);
                            if (0 === o.indexOf(m(e) + "=")) {
                                var a = decodeURIComponent(o.substring(p.length + e.length + 1, o.length));
                                try {
                                    return JSON.parse(a)
                                } catch (s) {
                                    return a
                                }
                            }
                        }
                        return null
                    },
                    A = function (t) {
                        C(t, null)
                    },
                    E = function () {
                        for (var t = null, e = p.length, r = n.cookie.split(";"), i = 0; i < r.length; i++) {
                            for (t = r[i];
                            " " === t.charAt(0);) t = t.substring(1, t.length);
                            var o = t.substring(e, t.indexOf("="));
                            A(o)
                        }
                    },
                    O = function () {
                        return g
                    },
                    T = function (t, e, n, i) {
                        i = i || e;
                        var o = b(i);
                        return null === o && r(n) ? o = n : a(o) && a(n) && (o = u(n, o)),
                        l(e).assign(t, o),
                        t.$watch(e, function (t) {
                            $(i, t)
                        }, a(t[e]))
                    },
                    j = function () {
                        for (var t = 0, n = e[g], r = 0; r < n.length; r++) 0 === n.key(r).indexOf(p) && t++;
                        return t
                    };
                return {
                        isSupported: y,
                        getStorageType: O,
                        set: $,
                        add: $,
                        get: b,
                        keys: _,
                        remove: w,
                        clearAll: x,
                        bind: T,
                        deriveKey: m,
                        length: j,
                        cookie: {
                            isSupported: k,
                            set: C,
                            add: C,
                            get: S,
                            remove: A,
                            clearAll: E
                        }
                    }
            }]
        })
}(window, window.angular),
/**
 * @license AngularJS
 *          v1.2.28
 *          (c)
 *          2010-2014
 *          Google,
 *          Inc.
 *          http://angularjs.org
 *          License:
 *          MIT
 */

function (t, e, n) {
    "use strict";
    e.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function () {
        var t = "$$ngAnimateChildren";
        return function (n, r, i) {
            var o = i.ngAnimateChildren;
            e.isString(o) && 0 === o.length ? r.data(t, !0) : n.$watch(o, function (e) {
                r.data(t, !! e)
            })
        }
    }).factory("$$animateReflow", ["$$rAF", "$document", function (t, e) {
        var n = e[0].body;
        return function (e) {
            return t(function () {
                n.offsetWidth + 1;
                e()
            })
        }
    }]).config(["$provide", "$animateProvider", function (r, i) {
        function o(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (n.nodeType == h) return n
            }
        }
        function a(t) {
            return t && e.element(t)
        }
        function s(t) {
            return e.element(o(t))
        }
        function u(t, e) {
            return o(t) == o(e)
        }
        var c = e.noop,
            l = e.forEach,
            f = i.$$selectors,
            h = 1,
            p = "$$ngAnimateState",
            d = "$$ngAnimateChildren",
            v = "ng-animate",
            g = {
                running: !0
            };
        r.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", function (t, n, r, h, m, y, $) {
                function b(t) {
                    var e = t.data(p) || {};
                    e.running = !0,
                    t.data(p, e)
                }
                function w(t) {
                    if (t) {
                        var e = [],
                            i = {},
                            o = t.substr(1).split(".");
                            (r.transitions || r.animations) && e.push(n.get(f[""]));
                        for (var a = 0; a < o.length; a++) {
                                var s = o[a],
                                    u = f[s];
                                u && !i[s] && (e.push(n.get(u)), i[s] = !0)
                            }
                        return e
                    }
                }
                function _(t, n, r) {
                    function i(t, e) {
                        var n = t[e],
                            r = t["before" + e.charAt(0).toUpperCase() + e.substr(1)];
                        return n || r ? ("leave" == e && (r = n, n = null), b.push({
                                event: e,
                                fn: n
                            }), m.push({
                                event: e,
                                fn: r
                            }), !0) : void 0
                    }
                    function o(e, n, i) {
                        function o(t) {
                            if (n) {
                                if ((n[t] || c)(), ++f < a.length) return;
                                n = null
                            }
                            i()
                        }
                        var a = [];
                        l(e, function (t) {
                            t.fn && a.push(t)
                        });
                        var f = 0;
                        l(a, function (e, i) {
                            var a = function () {
                                o(i)
                            };
                            switch (e.event) {
                            case "setClass":
                                n.push(e.fn(t, s, u, a));
                                break;
                            case "addClass":
                                n.push(e.fn(t, s || r, a));
                                break;
                            case "removeClass":
                                n.push(e.fn(t, u || r, a));
                                break;
                            default:
                                n.push(e.fn(t, a))
                            }
                        }),
                        n && 0 === n.length && i()
                    }
                    var a = t[0];
                    if (a) {
                        var s, u, f = "setClass" == n,
                            h = f || "addClass" == n || "removeClass" == n;
                        e.isArray(r) && (s = r[0], u = r[1], r = s + " " + u);
                        var p = t.attr("class"),
                            d = p + " " + r;
                        if (O(d)) {
                                var v = c,
                                    g = [],
                                    m = [],
                                    y = c,
                                    $ = [],
                                    b = [],
                                    _ = (" " + d).replace(/\s+/g, ".");
                                return l(w(_), function (t) {
                                        var e = i(t, n);
                                        !e && f && (i(t, "addClass"), i(t, "removeClass"))
                                    }),
                                {
                                        node: a,
                                        event: n,
                                        className: r,
                                        isClassBased: h,
                                        isSetClassOperation: f,
                                        before: function (t) {
                                            v = t,
                                            o(m, g, function () {
                                                v = c,
                                                t()
                                            })
                                        },
                                        after: function (t) {
                                            y = t,
                                            o(b, $, function () {
                                                y = c,
                                                t()
                                            })
                                        },
                                        cancel: function () {
                                            g && (l(g, function (t) {
                                                (t || c)(!0)
                                            }), v(!0)),
                                            $ && (l($, function (t) {
                                                (t || c)(!0)
                                            }), y(!0))
                                        }
                                    }
                            }
                    }
                }
                function x(t, n, r, i, o, a, s) {
                    function u(e) {
                        var i = "$animate:" + e;
                        $ && $[i] && $[i].length > 0 && m(function () {
                            r.triggerHandler(i, {
                                event: t,
                                className: n
                            })
                        })
                    }
                    function c() {
                        u("before")
                    }
                    function f() {
                        u("after")
                    }
                    function h() {
                        u("close"),
                        s && m(function () {
                            s()
                        })
                    }
                    function d() {
                        d.hasBeenRun || (d.hasBeenRun = !0, a())
                    }
                    function g() {
                        if (!g.hasBeenRun) {
                            g.hasBeenRun = !0;
                            var e = r.data(p);
                            e && (y && y.isClassBased ? C(r, n) : (m(function () {
                                var e = r.data(p) || {};
                                R == e.index && C(r, n, t)
                            }), r.data(p, e))),
                            h()
                        }
                    }
                    var y = _(r, t, n);
                    if (!y) return d(),
                    c(),
                    f(),
                    void g();
                    n = y.className;
                    var $ = e.element._data(y.node);
                    $ = $ && $.events,
                    i || (i = o ? o.parent() : r.parent());
                    var b, w = r.data(p) || {},
                        x = w.active || {},
                        k = w.totalActive || 0,
                        E = w.last;
                    if (y.isClassBased && (b = w.running || w.disabled || E && !E.isClassBased), b || S(r, i)) return d(),
                    c(),
                    f(),
                    void g();
                    var O = !1;
                    if (k > 0) {
                            var T = [];
                            if (y.isClassBased) {
                                if ("setClass" == E.event) T.push(E),
                                C(r, n);
                                else if (x[n]) {
                                    var j = x[n];
                                    j.event == t ? O = !0 : (T.push(j), C(r, n))
                                }
                            } else if ("leave" == t && x["ng-leave"]) O = !0;
                            else {
                                for (var P in x) T.push(x[P]),
                                C(r, P);
                                x = {},
                                k = 0
                            }
                            T.length > 0 && l(T, function (t) {
                                t.cancel()
                            })
                        }
                    if (!y.isClassBased || y.isSetClassOperation || O || (O = "addClass" == t == r.hasClass(n)), O) return d(),
                    c(),
                    f(),
                    void h();
                    "leave" == t && r.one("$destroy", function (t) {
                            var n = e.element(this),
                                r = n.data(p);
                            if (r) {
                                    var i = r.active["ng-leave"];
                                    i && (i.cancel(), C(n, "ng-leave"))
                                }
                        }),
                    r.addClass(v);
                    var R = A++;
                    k++,
                    x[n] = y,
                    r.data(p, {
                            last: y,
                            active: x,
                            index: R,
                            totalActive: k
                        }),
                    c(),
                    y.before(function (e) {
                            var i = r.data(p);
                            e = e || !i || !i.active[n] || y.isClassBased && i.active[n].event != t,
                            d(),
                            e === !0 ? g() : (f(), y.after(g))
                        })
                }
                function k(t) {
                    var n = o(t);
                    if (n) {
                        var r = e.isFunction(n.getElementsByClassName) ? n.getElementsByClassName(v) : n.querySelectorAll("." + v);
                        l(r, function (t) {
                            t = e.element(t);
                            var n = t.data(p);
                            n && n.active && l(n.active, function (t) {
                                t.cancel()
                            })
                        })
                    }
                }
                function C(t, e) {
                    if (u(t, h)) g.disabled || (g.running = !1, g.structural = !1);
                    else if (e) {
                        var n = t.data(p) || {},
                            r = e === !0;
                        !r && n.active && n.active[e] && (n.totalActive--, delete n.active[e]),
                        (r || !n.totalActive) && (t.removeClass(v), t.removeData(p))
                    }
                }
                function S(t, n) {
                    if (g.disabled) return !0;
                    if (u(t, h)) return g.running;
                    var r, i, o;
                    do {
                        if (0 === n.length) break;
                        var a = u(n, h),
                            s = a ? g : n.data(p) || {};
                        if (s.disabled) return !0;
                        if (a && (o = !0), r !== !1) {
                                var c = n.data(d);
                                e.isDefined(c) && (r = c)
                            }
                        i = i || s.running || s.last && !s.last.isClassBased
                    } while (n = n.parent());
                    return !o || !r && i
                }
                var A = 0;
                h.data(p, g),
                y.$$postDigest(function () {
                    y.$$postDigest(function () {
                        g.running = !1
                    })
                });
                var E = i.classNameFilter(),
                    O = E ?
                function (t) {
                        return E.test(t)
                    } : function () {
                        return !0
                    };
                return {
                        enter: function (n, r, i, o) {
                            n = e.element(n),
                            r = a(r),
                            i = a(i),
                            b(n),
                            t.enter(n, r, i),
                            y.$$postDigest(function () {
                                n = s(n),
                                x("enter", "ng-enter", n, r, i, c, o)
                            })
                        },
                        leave: function (n, r) {
                            n = e.element(n),
                            k(n),
                            b(n),
                            y.$$postDigest(function () {
                                x("leave", "ng-leave", s(n), null, null, function () {
                                    t.leave(n)
                                }, r)
                            })
                        },
                        move: function (n, r, i, o) {
                            n = e.element(n),
                            r = a(r),
                            i = a(i),
                            k(n),
                            b(n),
                            t.move(n, r, i),
                            y.$$postDigest(function () {
                                n = s(n),
                                x("move", "ng-move", n, r, i, c, o)
                            })
                        },
                        addClass: function (n, r, i) {
                            n = e.element(n),
                            n = s(n),
                            x("addClass", r, n, null, null, function () {
                                t.addClass(n, r)
                            }, i)
                        },
                        removeClass: function (n, r, i) {
                            n = e.element(n),
                            n = s(n),
                            x("removeClass", r, n, null, null, function () {
                                t.removeClass(n, r)
                            }, i)
                        },
                        setClass: function (n, r, i, o) {
                            n = e.element(n),
                            n = s(n),
                            x("setClass", [r, i], n, null, null, function () {
                                t.setClass(n, r, i)
                            }, o)
                        },
                        enabled: function (t, e) {
                            switch (arguments.length) {
                            case 2:
                                if (t) C(e);
                                else {
                                    var n = e.data(p) || {};
                                    n.disabled = !0,
                                    e.data(p, n)
                                }
                                break;
                            case 1:
                                g.disabled = !t;
                                break;
                            default:
                                t = !g.disabled
                            }
                            return !!t
                        }
                    }
            }]),
        i.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function (r, i, a, s) {
                function u() {
                    M || (M = s(function () {
                        X = [],
                        M = null,
                        K = {}
                    }))
                }
                function f(t, e) {
                    M && M(),
                    X.push(e),
                    M = s(function () {
                        l(X, function (t) {
                            t()
                        }),
                        X = [],
                        M = null,
                        K = {}
                    })
                }
                function p(t, n) {
                    var r = o(t);
                    t = e.element(r),
                    G.push(t);
                    var i = Date.now() + n;
                    Y >= i || (a.cancel(Q), Y = i, Q = a(function () {
                        d(G),
                        G = []
                    }, n, !1))
                }
                function d(t) {
                    l(t, function (t) {
                        var e = t.data(L);
                        e && (e.closeAnimationFn || c)()
                    })
                }
                function v(t, e) {
                    var n = e ? K[e] : null;
                    if (!n) {
                        var i, o, a, s, u = 0,
                            c = 0,
                            f = 0,
                            p = 0;
                        l(t, function (t) {
                                if (t.nodeType == h) {
                                    var e = r.getComputedStyle(t) || {};
                                    a = e[j + N],
                                    u = Math.max(g(a), u),
                                    s = e[j + U],
                                    i = e[j + q],
                                    c = Math.max(g(i), c),
                                    o = e[R + q],
                                    p = Math.max(g(o), p);
                                    var n = g(e[R + N]);
                                    n > 0 && (n *= parseInt(e[R + B], 10) || 1),
                                    f = Math.max(n, f)
                                }
                            }),
                        n = {
                                total: 0,
                                transitionPropertyStyle: s,
                                transitionDurationStyle: a,
                                transitionDelayStyle: i,
                                transitionDelay: c,
                                transitionDuration: u,
                                animationDelayStyle: o,
                                animationDelay: p,
                                animationDuration: f
                            },
                        e && (K[e] = n)
                    }
                    return n
                }
                function g(t) {
                    var n = 0,
                        r = e.isString(t) ? t.split(/\s*,\s*/) : [];
                    return l(r, function (t) {
                            n = Math.max(parseFloat(t) || 0, n)
                        }),
                    n
                }
                function m(t) {
                    var e = t.parent(),
                        n = e.data(F);
                    return n || (e.data(F, ++J), n = J),
                    n + "-" + o(t).getAttribute("class")
                }
                function y(t, e, n, r) {
                    var i = m(e),
                        o = i + " " + n,
                        a = K[o] ? ++K[o].total : 0,
                        s = {};
                    if (a > 0) {
                            var u = n + "-stagger",
                                l = i + " " + u,
                                f = !K[l];
                            f && e.addClass(u),
                            s = v(e, l),
                            f && e.removeClass(u)
                        }
                    r = r ||
                    function (t) {
                            return t()
                        },
                    e.addClass(n);
                    var h = e.data(L) || {},
                        p = r(function () {
                            return v(e, o)
                        }),
                        d = p.transitionDuration,
                        g = p.animationDuration;
                    if (0 === d && 0 === g) return e.removeClass(n),
                    !1;
                    e.data(L, {
                            running: h.running || 0,
                            itemIndex: a,
                            stagger: s,
                            timings: p,
                            closeAnimationFn: c
                        });
                    var y = h.running > 0 || "setClass" == t;
                    return d > 0 && b(e, n, y),
                    g > 0 && s.animationDelay > 0 && 0 === s.animationDuration && w(e),
                    !0
                }
                function $(t) {
                    return "ng-enter" == t || "ng-move" == t || "ng-leave" == t
                }
                function b(t, e, n) {
                    $(e) || !n ? o(t).style[j + U] = "none" : t.addClass(H)
                }
                function w(t) {
                    o(t).style[R] = "none 0s"
                }
                function _(t, e) {
                    var n = j + U,
                        r = o(t);
                    r.style[n] && r.style[n].length > 0 && (r.style[n] = ""),
                    t.removeClass(H)
                }
                function x(t) {
                    var e = R,
                        n = o(t);
                    n.style[e] && n.style[e].length > 0 && (n.style[e] = "")
                }
                function k(t, e, n, r) {
                    function i(t) {
                        e.off($, a),
                        e.removeClass(c),
                        O(e, n);
                        var r = o(e);
                        for (var i in w) r.style.removeProperty(w[i])
                    }
                    function a(t) {
                        t.stopPropagation();
                        var e = t.originalEvent || t,
                            n = e.$manualTimeStamp || e.timeStamp || Date.now(),
                            i = parseFloat(e.elapsedTime.toFixed(V));
                        Math.max(n - y, 0) >= m && i >= v && r()
                    }
                    var s = o(e),
                        u = e.data(L);
                    if (-1 == s.getAttribute("class").indexOf(n) || !u) return void r();
                    var c = "";
                    l(n.split(" "), function (t, e) {
                            c += (e > 0 ? " " : "") + t + "-active"
                        });
                    var f = u.stagger,
                        h = u.timings,
                        d = u.itemIndex,
                        v = Math.max(h.transitionDuration, h.animationDuration),
                        g = Math.max(h.transitionDelay, h.animationDelay),
                        m = g * W,
                        y = Date.now(),
                        $ = D + " " + P,
                        b = "",
                        w = [];
                    if (h.transitionDuration > 0) {
                            var _ = h.transitionPropertyStyle; - 1 == _.indexOf("all") && (b += I + "transition-property: " + _ + ";", b += I + "transition-duration: " + h.transitionDurationStyle + ";", w.push(I + "transition-property"), w.push(I + "transition-duration"))
                        }
                    if (d > 0) {
                            if (f.transitionDelay > 0 && 0 === f.transitionDuration) {
                                var x = h.transitionDelayStyle;
                                b += I + "transition-delay: " + C(x, f.transitionDelay, d) + "; ",
                                w.push(I + "transition-delay")
                            }
                            f.animationDelay > 0 && 0 === f.animationDuration && (b += I + "animation-delay: " + C(h.animationDelayStyle, f.animationDelay, d) + "; ", w.push(I + "animation-delay"))
                        }
                    if (w.length > 0) {
                            var k = s.getAttribute("style") || "";
                            s.setAttribute("style", k + "; " + b)
                        }
                    e.on($, a),
                    e.addClass(c),
                    u.closeAnimationFn = function () {
                            i(),
                            r()
                        };
                    var S = d * (Math.max(f.animationDelay, f.transitionDelay) || 0),
                        A = (g + v) * z,
                        E = (S + A) * W;
                    return u.running++,
                    p(e, E),
                    i
                }
                function C(t, e, n) {
                    var r = "";
                    return l(t.split(","), function (t, i) {
                        r += (i > 0 ? "," : "") + (n * e + parseInt(t, 10)) + "s"
                    }),
                    r
                }
                function S(t, e, n, r) {
                    return y(t, e, n, r) ?
                    function (t) {
                        t && O(e, n)
                    } : void 0
                }
                function A(t, e, n, r) {
                    return e.data(L) ? k(t, e, n, r) : (O(e, n), void r())
                }
                function E(t, e, n, r) {
                    var i = S(t, e, n);
                    if (!i) return u(),
                    void r();
                    var o = i;
                    return f(e, function () {
                        _(e, n),
                        x(e),
                        o = A(t, e, n, r)
                    }),


                    function (t) {
                        (o || c)(t)
                    }
                }
                function O(t, e) {
                    t.removeClass(e);
                    var n = t.data(L);
                    n && (n.running && n.running--, n.running && 0 !== n.running || t.removeData(L))
                }
                function T(t, n) {
                    var r = "";
                    return t = e.isArray(t) ? t : t.split(/\s+/),
                    l(t, function (t, e) {
                        t && t.length > 0 && (r += (e > 0 ? " " : "") + t + n)
                    }),
                    r
                }
                var j, P, R, D, I = "";
                t.ontransitionend === n && t.onwebkittransitionend !== n ? (I = "-webkit-", j = "WebkitTransition", P = "webkitTransitionEnd transitionend") : (j = "transition", P = "transitionend"),
                t.onanimationend === n && t.onwebkitanimationend !== n ? (I = "-webkit-", R = "WebkitAnimation", D = "webkitAnimationEnd animationend") : (R = "animation", D = "animationend");
                var M, N = "Duration",
                    U = "Property",
                    q = "Delay",
                    B = "IterationCount",
                    F = "$$ngAnimateKey",
                    L = "$$ngAnimateCSS3Data",
                    H = "ng-animate-block-transitions",
                    V = 3,
                    z = 1.5,
                    W = 1e3,
                    K = {},
                    J = 0,
                    X = [],
                    Q = null,
                    Y = 0,
                    G = [];
                return {
                        enter: function (t, e) {
                            return E("enter", t, "ng-enter", e)
                        },
                        leave: function (t, e) {
                            return E("leave", t, "ng-leave", e)
                        },
                        move: function (t, e) {
                            return E("move", t, "ng-move", e)
                        },
                        beforeSetClass: function (t, e, n, r) {
                            var i = T(n, "-remove") + " " + T(e, "-add"),
                                o = S("setClass", t, i, function (r) {
                                    var i = t.attr("class");
                                    t.removeClass(n),
                                    t.addClass(e);
                                    var o = r();
                                    return t.attr("class", i),
                                    o
                                });
                            return o ? (f(t, function () {
                                    _(t, i),
                                    x(t),
                                    r()
                                }), o) : (u(), void r())
                        },
                        beforeAddClass: function (t, e, n) {
                            var r = S("addClass", t, T(e, "-add"), function (n) {
                                t.addClass(e);
                                var r = n();
                                return t.removeClass(e),
                                r
                            });
                            return r ? (f(t, function () {
                                _(t, e),
                                x(t),
                                n()
                            }), r) : (u(), void n())
                        },
                        setClass: function (t, e, n, r) {
                            n = T(n, "-remove"),
                            e = T(e, "-add");
                            var i = n + " " + e;
                            return A("setClass", t, i, r)
                        },
                        addClass: function (t, e, n) {
                            return A("addClass", t, T(e, "-add"), n)
                        },
                        beforeRemoveClass: function (t, e, n) {
                            var r = S("removeClass", t, T(e, "-remove"), function (n) {
                                var r = t.attr("class");
                                t.removeClass(e);
                                var i = n();
                                return t.attr("class", r),
                                i
                            });
                            return r ? (f(t, function () {
                                _(t, e),
                                x(t),
                                n()
                            }), r) : void n()
                        },
                        removeClass: function (t, e, n) {
                            return A("removeClass", t, T(e, "-remove"), n)
                        }
                    }
            }])
    }])
}(window, window.angular),
/**
 * @license AngularJS
 *          v1.2.28
 *          (c)
 *          2010-2014
 *          Google,
 *          Inc.
 *          http://angularjs.org
 *          License:
 *          MIT
 */

function (t, e, n) {
    "use strict";
    /*
     * HTML Parser By Misko Hevery
     * (misko@hevery.com) based on: HTML Parser By
     * John Resig (ejohn.org) Original code by Erik
     * Arvidsson, Mozilla Public License
     * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js //
     * Use like so: htmlParser(htmlString, { start:
     * function(tag, attrs, unary) {}, end:
     * function(tag) {}, chars: function(text) {},
     * comment: function(text) {} });
     * 
     */

    function r() {
        this.$get = ["$$sanitizeUri", function (t) {
            return function (e) {
                var n = [];
                return a(e, c(n, function (e, n) {
                    return !/^unsafe/.test(t(e, n))
                })),
                n.join("")
            }
        }]
    }
    function i(t) {
        var n = [],
            r = c(n, e.noop);
        return r.chars(t),
        n.join("")
    }
    function o(t) {
        var e, n = {},
            r = t.split(",");
        for (e = 0; e < r.length; e++) n[r[e]] = !0;
        return n
    }
    function a(t, n) {
        function r(t, r, o, a) {
            if (r = e.lowercase(r), C[r]) for (; $.last() && S[$.last()];) i("", $.last());
            k[r] && $.last() == r && i("", r),
            a = w[r] || !! a,
            a || $.push(r);
            var u = {};
            o.replace(p, function (t, e, n, r, i) {
                var o = n || r || i || "";
                u[e] = s(o)
            }),
            n.start && n.start(r, u, a)
        }
        function i(t, r) {
            var i, o = 0;
            if (r = e.lowercase(r)) for (o = $.length - 1; o >= 0 && $[o] != r; o--);
            if (o >= 0) {
                for (i = $.length - 1; i >= o; i--) n.end && n.end($[i]);
                $.length = o
            }
        }
        "string" != typeof t && (t = null === t || "undefined" == typeof t ? "" : "" + t);
        var o, a, u, c, $ = [],
            b = t;
        for ($.last = function () {
                return $[$.length - 1]
            }; t;) {
                if (c = "", a = !0, $.last() && A[$.last()] ? (t = t.replace(new RegExp("(.*)<\\s*\\/\\s*" + $.last() + "[^>]*>", "i"), function (t, e) {
                    return e = e.replace(g, "$1").replace(y, "$1"),
                    n.chars && n.chars(s(e)),
                    ""
                }), i("", $.last())) : (0 === t.indexOf("<!--") ? (o = t.indexOf("--", 4), o >= 0 && t.lastIndexOf("-->", o) === o && (n.comment && n.comment(t.substring(4, o)), t = t.substring(o + 3), a = !1)) : m.test(t) ? (u = t.match(m), u && (t = t.replace(u[0], ""), a = !1)) : v.test(t) ? (u = t.match(h), u && (t = t.substring(u[0].length), u[0].replace(h, i), a = !1)) : d.test(t) && (u = t.match(f), u ? (u[4] && (t = t.substring(u[0].length), u[0].replace(f, r)), a = !1) : (c += "<", t = t.substring(1))), a && (o = t.indexOf("<"), c += 0 > o ? t : t.substring(0, o), t = 0 > o ? "" : t.substring(o), n.chars && n.chars(s(c)))), t == b) throw l("badparse", "The sanitizer was unable to parse the following block of html: {0}", t);
                b = t
            }
        i()
    }
    function s(t) {
        if (!t) return "";
        var e = P.exec(t),
            n = e[1],
            r = e[3],
            i = e[2];
        return i && (j.innerHTML = i.replace(/</g, "&lt;"), i = "textContent" in j ? j.textContent : j.innerText),
        n + i + r
    }
    function u(t) {
        return t.replace(/&/g, "&amp;").replace($, function (t) {
            var e = t.charCodeAt(0),
                n = t.charCodeAt(1);
            return "&#" + (1024 * (e - 55296) + (n - 56320) + 65536) + ";"
        }).replace(b, function (t) {
            return "&#" + t.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function c(t, n) {
        var r = !1,
            i = e.bind(t, t.push);
        return {
                start: function (t, o, a) {
                    t = e.lowercase(t),
                    !r && A[t] && (r = t),
                    r || E[t] !== !0 || (i("<"), i(t), e.forEach(o, function (r, o) {
                        var a = e.lowercase(o),
                            s = "img" === t && "src" === a || "background" === a;
                        T[a] !== !0 || O[a] === !0 && !n(r, s) || (i(" "), i(o), i('="'), i(u(r)), i('"'))
                    }), i(a ? "/>" : ">"))
                },
                end: function (t) {
                    t = e.lowercase(t),
                    r || E[t] !== !0 || (i("</"), i(t), i(">")),
                    t == r && (r = !1)
                },
                chars: function (t) {
                    r || i(u(t))
                }
            }
    }
    var l = e.$$minErr("$sanitize"),
        f = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
        h = /^<\/\s*([\w:-]+)[^>]*>/,
        p = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
        d = /^</,
        v = /^<\//,
        g = /<!--(.*?)-->/g,
        m = /<!DOCTYPE([^>]*?)>/i,
        y = /<!\[CDATA\[(.*?)]]>/g,
        $ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        b = /([^\#-~| |!])/g,
        w = o("area,br,col,hr,img,wbr"),
        _ = o("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        x = o("rp,rt"),
        k = e.extend({}, x, _),
        C = e.extend({}, _, o("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
        S = e.extend({}, x, o("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
        A = o("script,style"),
        E = e.extend({}, w, C, S, k),
        O = o("background,cite,href,longdesc,src,usemap"),
        T = e.extend({}, O, o("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),
        j = document.createElement("pre"),
        P = /^(\s*)([\s\S]*?)(\s*)$/;
    e.module("ngSanitize", []).provider("$sanitize", r),
    e.module("ngSanitize").filter("linky", ["$sanitize", function (t) {
            var n = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,
                r = /^mailto:/;
            return function (o, a) {
                    function s(t) {
                        t && p.push(i(t))
                    }
                    function u(t, n) {
                        p.push("<a "),
                        e.isDefined(a) && (p.push('target="'), p.push(a), p.push('" ')),
                        p.push('href="', t.replace('"', "&quot;"), '">'),
                        s(n),
                        p.push("</a>")
                    }
                    if (!o) return o;
                    for (var c, l, f, h = o, p = []; c = h.match(n);) l = c[0],
                    c[2] == c[3] && (l = "mailto:" + l),
                    f = c.index,
                    s(h.substr(0, f)),
                    u(l, c[0].replace(r, "")),
                    h = h.substring(f + c[0].length);
                    return s(h),
                    t(p.join(""))
                }
        }])
}(window, window.angular),
/**
 * State-based
 * routing
 * for
 * AngularJS
 * 
 * @version v0.2.15
 * @link http://angular-ui.github.com/
 * @license MIT
 *          License,
 *          http://www.opensource.org/licenses/MIT
 */
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),


function (t, e, n) {
    "use strict";

    function r(t, e) {
        return q(new(q(function () {}, {
            prototype: t
        })), e)
    }
    function i(t) {
        return U(arguments, function (e) {
            e !== t && U(e, function (e, n) {
                t.hasOwnProperty(n) || (t[n] = e)
            })
        }),
        t
    }
    function o(t, e) {
        var n = [];
        for (var r in t.path) {
            if (t.path[r] !== e.path[r]) break;
            n.push(t.path[r])
        }
        return n
    }
    function a(t) {
        if (Object.keys) return Object.keys(t);
        var e = [];
        return U(t, function (t, n) {
            e.push(n)
        }),
        e
    }
    function s(t, e) {
        if (Array.prototype.indexOf) return t.indexOf(e, Number(arguments[2]) || 0);
        var n = t.length >>> 0,
            r = Number(arguments[2]) || 0;
        for (r = 0 > r ? Math.ceil(r) : Math.floor(r), 0 > r && (r += n); n > r; r++) if (r in t && t[r] === e) return r;
        return -1
    }
    function u(t, e, n, r) {
        var i, u = o(n, r),
            c = {},
            l = [];
        for (var f in u) if (u[f].params && (i = a(u[f].params), i.length)) for (var h in i) s(l, i[h]) >= 0 || (l.push(i[h]), c[i[h]] = t[i[h]]);
        return q({}, c, e)
    }
    function c(t, e, n) {
        if (!n) {
            n = [];
            for (var r in t) n.push(r)
        }
        for (var i = 0; i < n.length; i++) {
            var o = n[i];
            if (t[o] != e[o]) return !1
        }
        return !0
    }
    function l(t, e) {
        var n = {};
        return U(t, function (t) {
            n[t] = e[t]
        }),
        n
    }
    function f(t) {
        var e = {},
            n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        return U(n, function (n) {
                n in t && (e[n] = t[n])
            }),
        e
    }
    function h(t) {
        var e = {},
            n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        for (var r in t) - 1 == s(n, r) && (e[r] = t[r]);
        return e
    }
    function p(t, e) {
        var n = N(t),
            r = n ? [] : {};
        return U(t, function (t, i) {
                e(t, i) && (r[n ? r.length : i] = t)
            }),
        r
    }
    function d(t, e) {
        var n = N(t) ? [] : {};
        return U(t, function (t, r) {
            n[r] = e(t, r)
        }),
        n
    }
    function v(t, e) {
        var r = 1,
            o = 2,
            u = {},
            c = [],
            l = u,
            f = q(t.when(u), {
                $$promises: u,
                $$values: u
            });
        this.study = function (u) {
                function p(t, n) {
                    if (y[n] !== o) {
                        if (m.push(n), y[n] === r) throw m.splice(0, s(m, n)),
                        new Error("Cyclic dependency: " + m.join(" -> "));
                        if (y[n] = r, I(t)) g.push(n, [function () {
                            return e.get(t)
                        }], c);
                        else {
                            var i = e.annotate(t);
                            U(i, function (t) {
                                t !== n && u.hasOwnProperty(t) && p(u[t], t)
                            }),
                            g.push(n, t, i)
                        }
                        m.pop(),
                        y[n] = o
                    }
                }
                function d(t) {
                    return M(t) && t.then && t.$$promises
                }
                if (!M(u)) throw new Error("'invocables' must be an object");
                var v = a(u || {}),
                    g = [],
                    m = [],
                    y = {};
                return U(u, p),
                u = m = y = null,


                function (r, o, a) {
                        function s() {
                            --b || (w || i($, o.$$values), m.$$values = $, m.$$promises = m.$$promises || !0, delete m.$$inheritedValues, p.resolve($))
                        }
                        function u(t) {
                            m.$$failure = t,
                            p.reject(t)
                        }
                        function c(n, i, o) {
                            function c(t) {
                                f.reject(t),
                                u(t)
                            }
                            function l() {
                                if (!R(m.$$failure)) try {
                                    f.resolve(e.invoke(i, a, $)),
                                    f.promise.then(function (t) {
                                        $[n] = t,
                                        s()
                                    }, c)
                                } catch (t) {
                                    c(t)
                                }
                            }
                            var f = t.defer(),
                                h = 0;
                            U(o, function (t) {
                                    y.hasOwnProperty(t) && !r.hasOwnProperty(t) && (h++, y[t].then(function (e) {
                                        $[t] = e,
                                        --h || l()
                                    }, c))
                                }),
                            h || l(),
                            y[n] = f.promise
                        }
                        if (d(r) && a === n && (a = o, o = r, r = null), r) {
                            if (!M(r)) throw new Error("'locals' must be an object")
                        } else r = l;
                        if (o) {
                            if (!d(o)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                        } else o = f;
                        var p = t.defer(),
                            m = p.promise,
                            y = m.$$promises = {},
                            $ = q({}, r),
                            b = 1 + g.length / 3,
                            w = !1;
                        if (R(o.$$failure)) return u(o.$$failure),
                        m;
                        o.$$inheritedValues && i($, h(o.$$inheritedValues, v)),
                        q(y, o.$$promises),
                        o.$$values ? (w = i($, h(o.$$values, v)), m.$$inheritedValues = h(o.$$values, v), s()) : (o.$$inheritedValues && (m.$$inheritedValues = h(o.$$inheritedValues, v)), o.then(s, u));
                        for (var _ = 0, x = g.length; x > _; _ += 3) r.hasOwnProperty(g[_]) ? s() : c(g[_], g[_ + 1], g[_ + 2]);
                        return m
                    }
            },
        this.resolve = function (t, e, n, r) {
                return this.study(t)(e, n, r)
            }
    }
    function g(t, e, n) {
        this.fromConfig = function (t, e, n) {
            return R(t.template) ? this.fromString(t.template, e) : R(t.templateUrl) ? this.fromUrl(t.templateUrl, e) : R(t.templateProvider) ? this.fromProvider(t.templateProvider, e, n) : null
        },
        this.fromString = function (t, e) {
            return D(t) ? t(e) : t
        },
        this.fromUrl = function (n, r) {
            return D(n) && (n = n(r)),
            null == n ? null : t.get(n, {
                cache: e,
                headers: {
                    Accept: "text/html"
                }
            }).then(function (t) {
                return t.data
            })
        },
        this.fromProvider = function (t, e, r) {
            return n.invoke(t, null, r || {
                params: e
            })
        }
    }
    function m(t, e, i) {
        function o(e, n, r, i) {
            if (g.push(e), d[e]) return d[e];
            if (!/^\w+(-+\w+)*(?:\[\])?$/.test(e)) throw new Error("Invalid parameter name '" + e + "' in pattern '" + t + "'");
            if (v[e]) throw new Error("Duplicate parameter name '" + e + "' in pattern '" + t + "'");
            return v[e] = new F.Param(e, n, r, i),
            v[e]
        }
        function a(t, e, n, r) {
            var i = ["", ""],
                o = t.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!e) return o;
            switch (n) {
                case !1:
                    i = ["(", ")" + (r ? "?" : "")];
                    break;
                case !0:
                    i = ["?(", ")?"];
                    break;
                default:
                    i = ["(" + n + "|", ")?"]
                }
            return o + i[0] + e + i[1]
        }
        function s(i, o) {
            var a, s, u, c, l;
            return a = i[2] || i[3],
            l = e.params[a],
            u = t.substring(h, i.index),
            s = o ? i[4] : i[4] || ("*" == i[1] ? ".*" : null),
            c = F.type(s || "string") || r(F.type("string"), {
                pattern: new RegExp(s, e.caseInsensitive ? "i" : n)
            }),
            {
                id: a,
                regexp: s,
                segment: u,
                type: c,
                cfg: l
            }
        }
        e = q({
            params: {}
        }, M(e) ? e : {});
        var u, c = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
            l = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
            f = "^",
            h = 0,
            p = this.segments = [],
            d = i ? i.params : {},
            v = this.params = i ? i.params.$$new() : new F.ParamSet,
            g = [];
        this.source = t;
        for (var m, y, $;
            (u = c.exec(t)) && (m = s(u, !1), !(m.segment.indexOf("?") >= 0));) y = o(m.id, m.type, m.cfg, "path"),
        f += a(m.segment, y.type.pattern.source, y.squash, y.isOptional),
        p.push(m.segment),
        h = c.lastIndex;
        $ = t.substring(h);
        var b = $.indexOf("?");
        if (b >= 0) {
                var w = this.sourceSearch = $.substring(b);
                if ($ = $.substring(0, b), this.sourcePath = t.substring(0, h + b), w.length > 0) for (h = 0; u = l.exec(w);) m = s(u, !0),
                y = o(m.id, m.type, m.cfg, "search"),
                h = c.lastIndex
            } else this.sourcePath = t,
        this.sourceSearch = "";
        f += a($) + (e.strict === !1 ? "/?" : "") + "$",
        p.push($),
        this.regexp = new RegExp(f, e.caseInsensitive ? "i" : n),
        this.prefix = p[0],
        this.$$paramNames = g
    }
    function y(t) {
        q(this, t)
    }
    function $() {
        function t(t) {
            return null != t ? t.toString().replace(/\//g, "%2F") : t
        }
        function i(t) {
            return null != t ? t.toString().replace(/%2F/g, "/") : t
        }
        function o() {
            return {
                strict: v,
                caseInsensitive: h
            }
        }
        function u(t) {
            return D(t) || N(t) && D(t[t.length - 1])
        }
        function c() {
            for (; _.length;) {
                var t = _.shift();
                if (t.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                e.extend(b[t.name], f.invoke(t.def))
            }
        }
        function l(t) {
            q(this, t || {})
        }
        F = this;
        var f, h = !1,
            v = !0,
            g = !1,
            b = {},
            w = !0,
            _ = [],
            x = {
                string: {
                    encode: t,
                    decode: i,
                    is: function (t) {
                        return null == t || !R(t) || "string" == typeof t
                    },
                    pattern: /[^/]*/
                },
                "int": {
                    encode: t,
                    decode: function (t) {
                        return parseInt(t, 10)
                    },
                    is: function (t) {
                        return R(t) && this.decode(t.toString()) === t
                    },
                    pattern: /\d+/
                },
                bool: {
                    encode: function (t) {
                        return t ? 1 : 0
                    },
                    decode: function (t) {
                        return 0 !== parseInt(t, 10)
                    },
                    is: function (t) {
                        return t === !0 || t === !1
                    },
                    pattern: /0|1/
                },
                date: {
                    encode: function (t) {
                        return this.is(t) ? [t.getFullYear(), ("0" + (t.getMonth() + 1)).slice(-2), ("0" + t.getDate()).slice(-2)].join("-") : n
                    },
                    decode: function (t) {
                        if (this.is(t)) return t;
                        var e = this.capture.exec(t);
                        return e ? new Date(e[1], e[2] - 1, e[3]) : n
                    },
                    is: function (t) {
                        return t instanceof Date && !isNaN(t.valueOf())
                    },
                    equals: function (t, e) {
                        return this.is(t) && this.is(e) && t.toISOString() === e.toISOString()
                    },
                    pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                    capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                },
                json: {
                    encode: e.toJson,
                    decode: e.fromJson,
                    is: e.isObject,
                    equals: e.equals,
                    pattern: /[^/]*/
                },
                any: {
                    encode: e.identity,
                    decode: e.identity,
                    equals: e.equals,
                    pattern: /.*/
                }
            };
        $.$$getDefaultValue = function (t) {
                if (!u(t.value)) return t.value;
                if (!f) throw new Error("Injectable functions cannot be called at configuration time");
                return f.invoke(t.value)
            },
        this.caseInsensitive = function (t) {
                return R(t) && (h = t),
                h
            },
        this.strictMode = function (t) {
                return R(t) && (v = t),
                v
            },
        this.defaultSquashPolicy = function (t) {
                if (!R(t)) return g;
                if (t !== !0 && t !== !1 && !I(t)) throw new Error("Invalid squash policy: " + t + ". Valid policies: false, true, arbitrary-string");
                return g = t,
                t
            },
        this.compile = function (t, e) {
                return new m(t, q(o(), e))
            },
        this.isMatcher = function (t) {
                if (!M(t)) return !1;
                var e = !0;
                return U(m.prototype, function (n, r) {
                    D(n) && (e = e && R(t[r]) && D(t[r]))
                }),
                e
            },
        this.type = function (t, e, n) {
                if (!R(e)) return b[t];
                if (b.hasOwnProperty(t)) throw new Error("A type named '" + t + "' has already been defined.");
                return b[t] = new y(q({
                    name: t
                }, e)),
                n && (_.push({
                    name: t,
                    def: n
                }), w || c()),
                this
            },
        U(x, function (t, e) {
                b[e] = new y(q({
                    name: e
                }, t))
            }),
        b = r(b, {}),
        this.$get = ["$injector", function (t) {
                return f = t,
                w = !1,
                c(),
                U(x, function (t, e) {
                    b[e] || (b[e] = new y(t))
                }),
                this
            }],
        this.Param = function (t, e, r, i) {
                function o(t) {
                    var e = M(t) ? a(t) : [],
                        n = -1 === s(e, "value") && -1 === s(e, "type") && -1 === s(e, "squash") && -1 === s(e, "array");
                    return n && (t = {
                            value: t
                        }),
                    t.$$fn = u(t.value) ? t.value : function () {
                            return t.value
                        },
                    t
                }
                function c(e, n, r) {
                    if (e.type && n) throw new Error("Param '" + t + "' has two type configurations.");
                    return n ? n : e.type ? e.type instanceof y ? e.type : new y(e.type) : "config" === r ? b.any : b.string
                }
                function l() {
                    var e = {
                        array: "search" === i ? "auto" : !1
                    },
                        n = t.match(/\[\]$/) ? {
                            array: !0
                        } : {};
                    return q(e, n, r).array
                }
                function h(t, e) {
                    var n = t.squash;
                    if (!e || n === !1) return !1;
                    if (!R(n) || null == n) return g;
                    if (n === !0 || I(n)) return n;
                    throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
                }
                function v(t, e, r, i) {
                    var o, a, u = [{
                        from: "",
                        to: r || e ? n : ""
                    },
                    {
                        from: null,
                        to: r || e ? n : ""
                    }];
                    return o = N(t.replace) ? t.replace : [],
                    I(i) && o.push({
                        from: i,
                        to: n
                    }),
                    a = d(o, function (t) {
                        return t.from
                    }),
                    p(u, function (t) {
                        return -1 === s(a, t.from)
                    }).concat(o)
                }
                function m() {
                    if (!f) throw new Error("Injectable functions cannot be called at configuration time");
                    var t = f.invoke(r.$$fn);
                    if (null !== t && t !== n && !_.type.is(t)) throw new Error("Default value (" + t + ") for parameter '" + _.id + "' is not an instance of Type (" + _.type.name + ")");
                    return t
                }
                function $(t) {
                    function e(t) {
                        return function (e) {
                            return e.from === t
                        }
                    }
                    function n(t) {
                        var n = d(p(_.replace, e(t)), function (t) {
                            return t.to
                        });
                        return n.length ? n[0] : t
                    }
                    return t = n(t),
                    R(t) ? _.type.$normalize(t) : m()
                }
                function w() {
                    return "{Param:" + t + " " + e + " squash: '" + C + "' optional: " + k + "}"
                }
                var _ = this;
                r = o(r),
                e = c(r, e, i);
                var x = l();
                e = x ? e.$asArray(x, "search" === i) : e,
                "string" !== e.name || x || "path" !== i || r.value !== n || (r.value = "");
                var k = r.value !== n,
                    C = h(r, k),
                    S = v(r, x, k, C);
                q(this, {
                        id: t,
                        type: e,
                        location: i,
                        array: x,
                        squash: C,
                        replace: S,
                        isOptional: k,
                        value: $,
                        dynamic: n,
                        config: r,
                        toString: w
                    })
            },
        l.prototype = {
                $$new: function () {
                    return r(this, q(new l, {
                        $$parent: this
                    }))
                },
                $$keys: function () {
                    for (var t = [], e = [], n = this, r = a(l.prototype); n;) e.push(n),
                    n = n.$$parent;
                    return e.reverse(),
                    U(e, function (e) {
                        U(a(e), function (e) {
                            -1 === s(t, e) && -1 === s(r, e) && t.push(e)
                        })
                    }),
                    t
                },
                $$values: function (t) {
                    var e = {},
                        n = this;
                    return U(n.$$keys(), function (r) {
                            e[r] = n[r].value(t && t[r])
                        }),
                    e
                },
                $$equals: function (t, e) {
                    var n = !0,
                        r = this;
                    return U(r.$$keys(), function (i) {
                            var o = t && t[i],
                                a = e && e[i];
                            r[i].type.equals(o, a) || (n = !1)
                        }),
                    n
                },
                $$validates: function (t) {
                    var r, i, o, a, s, u = this.$$keys();
                    for (r = 0; r < u.length && (i = this[u[r]], o = t[u[r]], o !== n && null !== o || !i.isOptional); r++) {
                        if (a = i.type.$normalize(o), !i.type.is(a)) return !1;
                        if (s = i.type.encode(a), e.isString(s) && !i.type.pattern.exec(s)) return !1
                    }
                    return !0
                },
                $$parent: n
            },
        this.ParamSet = l
    }
    function b(t, r) {
        function i(t) {
            var e = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(t.source);
            return null != e ? e[1].replace(/\\(.)/g, "$1") : ""
        }
        function o(t, e) {
            return t.replace(/\$(\$|\d{1,2})/, function (t, n) {
                return e["$" === n ? 0 : Number(n)]
            })
        }
        function a(t, e, n) {
            if (!n) return !1;
            var r = t.invoke(e, e, {
                $match: n
            });
            return R(r) ? r : !0
        }
        function s(r, i, o, a) {
            function s(t, e, n) {
                return "/" === v ? t : e ? v.slice(0, -1) + t : n ? v.slice(1) + t : t
            }
            function h(t) {
                function e(t) {
                    var e = t(o, r);
                    return e ? (I(e) && r.replace().url(e), !0) : !1
                }
                if (!t || !t.defaultPrevented) {
                    {
                        d && r.url() === d
                    }
                    d = n;
                    var i, a = c.length;
                    for (i = 0; a > i; i++) if (e(c[i])) return;
                    l && e(l)
                }
            }
            function p() {
                return u = u || i.$on("$locationChangeSuccess", h)
            }
            var d, v = a.baseHref(),
                g = r.url();
            return f || p(),
            {
                    sync: function () {
                        h()
                    },
                    listen: function () {
                        return p()
                    },
                    update: function (t) {
                        return t ? void(g = r.url()) : void(r.url() !== g && (r.url(g), r.replace()))
                    },
                    push: function (t, e, i) {
                        var o = t.format(e || {});
                        null !== o && e && e["#"] && (o += "#" + e["#"]),
                        r.url(o),
                        d = i && i.$$avoidResync ? r.url() : n,
                        i && i.replace && r.replace()
                    },
                    href: function (n, i, o) {
                        if (!n.validates(i)) return null;
                        var a = t.html5Mode();
                        e.isObject(a) && (a = a.enabled);
                        var u = n.format(i);
                        if (o = o || {}, a || null === u || (u = "#" + t.hashPrefix() + u), null !== u && i && i["#"] && (u += "#" + i["#"]), u = s(u, a, o.absolute), !o.absolute || !u) return u;
                        var c = !a && u ? "/" : "",
                            l = r.port();
                        return l = 80 === l || 443 === l ? "" : ":" + l,
                        [r.protocol(), "://", r.host(), l, c, u].join("")
                    }
                }
        }
        var u, c = [],
            l = null,
            f = !1;
        this.rule = function (t) {
                if (!D(t)) throw new Error("'rule' must be a function");
                return c.push(t),
                this
            },
        this.otherwise = function (t) {
                if (I(t)) {
                    var e = t;
                    t = function () {
                        return e
                    }
                } else if (!D(t)) throw new Error("'rule' must be a function");
                return l = t,
                this
            },
        this.when = function (t, e) {
                var n, s = I(e);
                if (I(t) && (t = r.compile(t)), !s && !D(e) && !N(e)) throw new Error("invalid 'handler' in when()");
                var u = {
                    matcher: function (t, e) {
                        return s && (n = r.compile(e), e = ["$match", function (t) {
                            return n.format(t)
                        }]),
                        q(function (n, r) {
                            return a(n, e, t.exec(r.path(), r.search()))
                        }, {
                            prefix: I(t.prefix) ? t.prefix : ""
                        })
                    },
                    regex: function (t, e) {
                        if (t.global || t.sticky) throw new Error("when() RegExp must not be global or sticky");
                        return s && (n = e, e = ["$match", function (t) {
                            return o(n, t)
                        }]),
                        q(function (n, r) {
                            return a(n, e, t.exec(r.path()))
                        }, {
                            prefix: i(t)
                        })
                    }
                },
                    c = {
                        matcher: r.isMatcher(t),
                        regex: t instanceof RegExp
                    };
                for (var l in c) if (c[l]) return this.rule(u[l](t, e));
                throw new Error("invalid 'what' in when()")
            },
        this.deferIntercept = function (t) {
                t === n && (t = !0),
                f = t
            },
        this.$get = s,
        s.$inject = ["$location", "$rootScope", "$injector", "$browser"]
    }
    function w(t, i) {
        function o(t) {
            return 0 === t.indexOf(".") || 0 === t.indexOf("^")
        }
        function h(t, e) {
            if (!t) return n;
            var r = I(t),
                i = r ? t : t.name,
                a = o(i);
            if (a) {
                    if (!e) throw new Error("No reference point given for path '" + i + "'");
                    e = h(e);
                    for (var s = i.split("."), u = 0, c = s.length, l = e; c > u; u++) if ("" !== s[u] || 0 !== u) {
                        if ("^" !== s[u]) break;
                        if (!l.parent) throw new Error("Path '" + i + "' not valid for state '" + e.name + "'");
                        l = l.parent
                    } else l = e;
                    s = s.slice(u).join("."),
                    i = l.name + (l.name && s ? "." : "") + s
                }
            var f = C[i];
            return !f || !r && (r || f !== t && f.self !== t) ? n : f
        }
        function p(t, e) {
            S[t] || (S[t] = []),
            S[t].push(e)
        }
        function v(t) {
            for (var e = S[t] || []; e.length;) g(e.shift())
        }
        function g(e) {
            e = r(e, {
                self: e,
                resolve: e.resolve || {},
                toString: function () {
                    return this.name
                }
            });
            var n = e.name;
            if (!I(n) || n.indexOf("@") >= 0) throw new Error("State must have a valid name");
            if (C.hasOwnProperty(n)) throw new Error("State '" + n + "'' is already defined");
            var i = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : I(e.parent) ? e.parent : M(e.parent) && I(e.parent.name) ? e.parent.name : "";
            if (i && !C[i]) return p(i, e.self);
            for (var o in E) D(E[o]) && (e[o] = E[o](e, E.$delegates[o]));
            return C[n] = e,
            !e[A] && e.url && t.when(e.url, ["$match", "$stateParams", function (t, n) {
                k.$current.navigable == e && c(t, n) || k.transitionTo(e, t, {
                    inherit: !0,
                    location: !1
                })
            }]),
            v(n),
            e
        }
        function m(t) {
            return t.indexOf("*") > -1
        }
        function y(t) {
            for (var e = t.split("."), n = k.$current.name.split("."), r = 0, i = e.length; i > r; r++)"*" === e[r] && (n[r] = "*");
            return "**" === e[0] && (n = n.slice(s(n, e[1])), n.unshift("**")),
            "**" === e[e.length - 1] && (n.splice(s(n, e[e.length - 2]) + 1, Number.MAX_VALUE), n.push("**")),
            e.length != n.length ? !1 : n.join("") === e.join("")
        }
        function $(t, e) {
            return I(t) && !R(e) ? E[t] : D(e) && I(t) ? (E[t] && !E.$delegates[t] && (E.$delegates[t] = E[t]), E[t] = e, this) : this
        }
        function b(t, e) {
            return M(t) ? e = t : e.name = t,
            g(e),
            this
        }
        function w(t, i, o, s, f, p, v, g, $) {
            function b(e, n, r, o) {
                var a = t.$broadcast("$stateNotFound", e, n, r);
                if (a.defaultPrevented) return v.update(),
                O;
                if (!a.retry) return null;
                if (o.$retry) return v.update(),
                T;
                var s = k.transition = i.when(a.retry);
                return s.then(function () {
                    return s !== k.transition ? S : (e.options.$retry = !0, k.transitionTo(e.to, e.toParams, e.options))
                }, function () {
                    return O
                }),
                v.update(),
                s
            }
            function w(t, n, r, a, u, c) {
                function h() {
                    var n = [];
                    return U(t.views, function (r, i) {
                        var a = r.resolve && r.resolve !== t.resolve ? r.resolve : {};
                        a.$template = [function () {
                            return o.load(i, {
                                view: r,
                                locals: u.globals,
                                params: p,
                                notify: c.notify
                            }) || ""
                        }],
                        n.push(f.resolve(a, u.globals, u.resolve, t).then(function (n) {
                            if (D(r.controllerProvider) || N(r.controllerProvider)) {
                                var o = e.extend({}, a, u.globals);
                                n.$$controller = s.invoke(r.controllerProvider, null, o)
                            } else n.$$controller = r.controller;
                            n.$$state = t,
                            n.$$controllerAs = r.controllerAs,
                            u[i] = n
                        }))
                    }),
                    i.all(n).then(function () {
                        return u.globals
                    })
                }
                var p = r ? n : l(t.params.$$keys(), n),
                    d = {
                        $stateParams: p
                    };
                u.resolve = f.resolve(t.resolve, d, u.resolve, t);
                var v = [u.resolve.then(function (t) {
                        u.globals = t
                    })];
                return a && v.push(a),
                i.all(v).then(h).then(function (t) {
                        return u
                    })
            }
            var S = i.reject(new Error("transition superseded")),
                E = i.reject(new Error("transition prevented")),
                O = i.reject(new Error("transition aborted")),
                T = i.reject(new Error("transition failed"));
            return x.locals = {
                    resolve: null,
                    globals: {
                        $stateParams: {}
                    }
                },
            k = {
                    params: {},
                    current: x.self,
                    $current: x,
                    transition: null
                },
            k.reload = function (t) {
                    return k.transitionTo(k.current, p, {
                        reload: t || !0,
                        inherit: !1,
                        notify: !0
                    })
                },
            k.go = function (t, e, n) {
                    return k.transitionTo(t, e, q({
                        inherit: !0,
                        relative: k.$current
                    }, n))
                },
            k.transitionTo = function (e, n, o) {
                    n = n || {},
                    o = q({
                        location: !0,
                        inherit: !1,
                        relative: null,
                        notify: !0,
                        reload: !1,
                        $retry: !1
                    }, o || {});
                    var a, c = k.$current,
                        f = k.params,
                        d = c.path,
                        g = h(e, o.relative),
                        m = n["#"];
                    if (!R(g)) {
                            var y = {
                                to: e,
                                toParams: n,
                                options: o
                            },
                                $ = b(y, c.self, f, o);
                            if ($) return $;
                            if (e = y.to, n = y.toParams, o = y.options, g = h(e, o.relative), !R(g)) {
                                    if (!o.relative) throw new Error("No such state '" + e + "'");
                                    throw new Error("Could not resolve '" + e + "' from state '" + o.relative + "'")
                                }
                        }
                    if (g[A]) throw new Error("Cannot transition to abstract state '" + e + "'");
                    if (o.inherit && (n = u(p, n || {}, k.$current, g)), !g.params.$$validates(n)) return T;
                    n = g.params.$$values(n),
                    e = g;
                    var C = e.path,
                        O = 0,
                        j = C[O],
                        P = x.locals,
                        D = [];
                    if (o.reload) {
                            if (I(o.reload) || M(o.reload)) {
                                if (M(o.reload) && !o.reload.name) throw new Error("Invalid reload state object");
                                var N = o.reload === !0 ? d[0] : h(o.reload);
                                if (o.reload && !N) throw new Error("No such reload state '" + (I(o.reload) ? o.reload : o.reload.name) + "'");
                                for (; j && j === d[O] && j !== N;) P = D[O] = j.locals,
                                O++,
                                j = C[O]
                            }
                        } else for (; j && j === d[O] && j.ownParams.$$equals(n, f);) P = D[O] = j.locals,
                    O++,
                    j = C[O];
                    if (_(e, n, c, f, P, o)) return m && (n["#"] = m),
                    k.params = n,
                    B(k.params, p),
                    o.location && e.navigable && e.navigable.url && (v.push(e.navigable.url, n, {
                            $$avoidResync: !0,
                            replace: "replace" === o.location
                        }), v.update(!0)),
                    k.transition = null,
                    i.when(k.current);
                    if (n = l(e.params.$$keys(), n || {}), o.notify && t.$broadcast("$stateChangeStart", e.self, n, c.self, f).defaultPrevented) return t.$broadcast("$stateChangeCancel", e.self, n, c.self, f),
                    v.update(),
                    E;
                    for (var U = i.when(P), F = O; F < C.length; F++, j = C[F]) P = D[F] = r(P),
                    U = w(j, n, j === e, U, P, o);
                    var L = k.transition = U.then(function () {
                            var r, i, a;
                            if (k.transition !== L) return S;
                            for (r = d.length - 1; r >= O; r--) a = d[r],
                            a.self.onExit && s.invoke(a.self.onExit, a.self, a.locals.globals),
                            a.locals = null;
                            for (r = O; r < C.length; r++) i = C[r],
                            i.locals = D[r],
                            i.self.onEnter && s.invoke(i.self.onEnter, i.self, i.locals.globals);
                            return m && (n["#"] = m),
                            k.transition !== L ? S : (k.$current = e, k.current = e.self, k.params = n, B(k.params, p), k.transition = null, o.location && e.navigable && v.push(e.navigable.url, e.navigable.locals.globals.$stateParams, {
                                $$avoidResync: !0,
                                replace: "replace" === o.location
                            }), o.notify && t.$broadcast("$stateChangeSuccess", e.self, n, c.self, f), v.update(!0), k.current)
                        }, function (r) {
                            return k.transition !== L ? S : (k.transition = null, a = t.$broadcast("$stateChangeError", e.self, n, c.self, f, r), a.defaultPrevented || v.update(), i.reject(r))
                        });
                    return L
                },
            k.is = function (t, e, r) {
                    r = q({
                        relative: k.$current
                    }, r || {});
                    var i = h(t, r.relative);
                    return R(i) ? k.$current !== i ? !1 : e ? c(i.params.$$values(e), p) : !0 : n
                },
            k.includes = function (t, e, r) {
                    if (r = q({
                        relative: k.$current
                    }, r || {}), I(t) && m(t)) {
                        if (!y(t)) return !1;
                        t = k.$current.name
                    }
                    var i = h(t, r.relative);
                    return R(i) ? R(k.$current.includes[i.name]) ? e ? c(i.params.$$values(e), p, a(e)) : !0 : !1 : n
                },
            k.href = function (t, e, r) {
                    r = q({
                        lossy: !0,
                        inherit: !0,
                        absolute: !1,
                        relative: k.$current
                    }, r || {});
                    var i = h(t, r.relative);
                    if (!R(i)) return null;
                    r.inherit && (e = u(p, e || {}, k.$current, i));
                    var o = i && r.lossy ? i.navigable : i;
                    return o && o.url !== n && null !== o.url ? v.href(o.url, l(i.params.$$keys().concat("#"), e || {}), {
                        absolute: r.absolute
                    }) : null
                },
            k.get = function (t, e) {
                    if (0 === arguments.length) return d(a(C), function (t) {
                        return C[t].self
                    });
                    var n = h(t, e || k.$current);
                    return n && n.self ? n.self : null
                },
            k
        }
        function _(t, e, n, r, i, o) {
            function a(t, e, n) {
                function r(e) {
                    return "search" != t.params[e].location
                }
                var i = t.params.$$keys().filter(r),
                    o = f.apply({}, [t.params].concat(i)),
                    a = new F.ParamSet(o);
                return a.$$equals(e, n)
            }
            return !o.reload && t === n && (i === n.locals || t.self.reloadOnSearch === !1 && a(n, r, e)) ? !0 : void 0
        }
        var x, k, C = {},
            S = {},
            A = "abstract",
            E = {
                parent: function (t) {
                    if (R(t.parent) && t.parent) return h(t.parent);
                    var e = /^(.+)\.[^.]+$/.exec(t.name);
                    return e ? h(e[1]) : x
                },
                data: function (t) {
                    return t.parent && t.parent.data && (t.data = t.self.data = q({}, t.parent.data, t.data)),
                    t.data
                },
                url: function (t) {
                    var e = t.url,
                        n = {
                            params: t.params || {}
                        };
                    if (I(e)) return "^" == e.charAt(0) ? i.compile(e.substring(1), n) : (t.parent.navigable || x).url.concat(e, n);
                    if (!e || i.isMatcher(e)) return e;
                    throw new Error("Invalid url '" + e + "' in state '" + t + "'")
                },
                navigable: function (t) {
                    return t.url ? t : t.parent ? t.parent.navigable : null
                },
                ownParams: function (t) {
                    var e = t.url && t.url.params || new F.ParamSet;
                    return U(t.params || {}, function (t, n) {
                        e[n] || (e[n] = new F.Param(n, null, t, "config"))
                    }),
                    e
                },
                params: function (t) {
                    return t.parent && t.parent.params ? q(t.parent.params.$$new(), t.ownParams) : new F.ParamSet
                },
                views: function (t) {
                    var e = {};
                    return U(R(t.views) ? t.views : {
                        "": t
                    }, function (n, r) {
                        r.indexOf("@") < 0 && (r += "@" + t.parent.name),
                        e[r] = n
                    }),
                    e
                },
                path: function (t) {
                    return t.parent ? t.parent.path.concat(t) : []
                },
                includes: function (t) {
                    var e = t.parent ? q({}, t.parent.includes) : {};
                    return e[t.name] = !0,
                    e
                },
                $delegates: {}
            };
        x = g({
                name: "",
                url: "^",
                views: null,
                "abstract": !0
            }),
        x.navigable = null,
        this.decorator = $,
        this.state = b,
        this.$get = w,
        w.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
    }
    function _() {
        function t(t, e) {
            return {
                load: function (n, r) {
                    var i, o = {
                        template: null,
                        controller: null,
                        view: null,
                        locals: null,
                        notify: !0,
                        async: !0,
                        params: {}
                    };
                    return r = q(o, r),
                    r.view && (i = e.fromConfig(r.view, r.params, r.locals)),
                    i && r.notify && t.$broadcast("$viewContentLoading", r),
                    i
                }
            }
        }
        this.$get = t,
        t.$inject = ["$rootScope", "$templateFactory"]
    }
    function x() {
        var t = !1;
        this.useAnchorScroll = function () {
            t = !0
        },
        this.$get = ["$anchorScroll", "$timeout", function (e, n) {
            return t ? e : function (t) {
                return n(function () {
                    t[0].scrollIntoView()
                }, 0, !1)
            }
        }]
    }
    function k(t, n, r, i) {
        function o() {
            return n.has ?
            function (t) {
                return n.has(t) ? n.get(t) : null
            } : function (t) {
                try {
                    return n.get(t)
                } catch (e) {
                    return null
                }
            }
        }
        function a(t, e) {
            var n = function () {
                return {
                    enter: function (t, e, n) {
                        e.after(t),
                        n()
                    },
                    leave: function (t, e) {
                        t.remove(),
                        e()
                    }
                }
            };
            if (c) return {
                enter: function (t, e, n) {
                    var r = c.enter(t, null, e, n);
                    r && r.then && r.then(n)
                },
                leave: function (t, e) {
                    var n = c.leave(t, e);
                    n && n.then && n.then(e)
                }
            };
            if (u) {
                var r = u && u(e, t);
                return {
                    enter: function (t, e, n) {
                        r.enter(t, null, e),
                        n()
                    },
                    leave: function (t, e) {
                        r.leave(t),
                        e()
                    }
                }
            }
            return n()
        }
        var s = o(),
            u = s("$animator"),
            c = s("$animate"),
            l = {
                restrict: "ECA",
                terminal: !0,
                priority: 400,
                transclude: "element",
                compile: function (n, o, s) {
                    return function (n, o, u) {
                        function c() {
                            f && (f.remove(), f = null),
                            p && (p.$destroy(), p = null),
                            h && (m.leave(h, function () {
                                f = null
                            }), f = h, h = null)
                        }
                        function l(a) {
                            var l, f = S(n, u, o, i),
                                y = f && t.$current && t.$current.locals[f];
                            if (a || y !== d) {
                                    l = n.$new(),
                                    d = t.$current.locals[f];
                                    var $ = s(l, function (t) {
                                        m.enter(t, o, function () {
                                            p && p.$emit("$viewContentAnimationEnded"),
                                            (e.isDefined(g) && !g || n.$eval(g)) && r(t)
                                        }),
                                        c()
                                    });
                                    h = $,
                                    p = l,
                                    p.$emit("$viewContentLoaded"),
                                    p.$eval(v)
                                }
                        }
                        var f, h, p, d, v = u.onload || "",
                            g = u.autoscroll,
                            m = a(u, n);
                        n.$on("$stateChangeSuccess", function () {
                                l(!1)
                            }),
                        n.$on("$viewContentLoading", function () {
                                l(!1)
                            }),
                        l(!0)
                    }
                }
            };
        return l
    }
    function C(t, e, n, r) {
        return {
            restrict: "ECA",
            priority: -400,
            compile: function (i) {
                var o = i.html();
                return function (i, a, s) {
                    var u = n.$current,
                        c = S(i, s, a, r),
                        l = u && u.locals[c];
                    if (l) {
                            a.data("$uiView", {
                                name: c,
                                state: l.$$state
                            }),
                            a.html(l.$template ? l.$template : o);
                            var f = t(a.contents());
                            if (l.$$controller) {
                                l.$scope = i,
                                l.$element = a;
                                var h = e(l.$$controller, l);
                                l.$$controllerAs && (i[l.$$controllerAs] = h),
                                a.data("$ngControllerController", h),
                                a.children().data("$ngControllerController", h)
                            }
                            f(i)
                        }
                }
            }
        }
    }
    function S(t, e, n, r) {
        var i = r(e.uiView || e.name || "")(t),
            o = n.inheritedData("$uiView");
        return i.indexOf("@") >= 0 ? i : i + "@" + (o ? o.state.name : "")
    }
    function A(t, e) {
        var n, r = t.match(/^\s*({[^}]*})\s*$/);
        if (r && (t = e + "(" + r[1] + ")"), n = t.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !n || 4 !== n.length) throw new Error("Invalid state ref '" + t + "'");
        return {
            state: n[1],
            paramExpr: n[3] || null
        }
    }
    function E(t) {
        var e = t.parent().inheritedData("$uiView");
        return e && e.state && e.state.name ? e.state : void 0
    }
    function O(t, n) {
        var r = ["location", "inherit", "reload", "absolute"];
        return {
            restrict: "A",
            require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
            link: function (i, o, a, s) {
                var u = A(a.uiSref, t.current.name),
                    c = null,
                    l = E(o) || t.$current,
                    f = "[object SVGAnimatedString]" === Object.prototype.toString.call(o.prop("href")) ? "xlink:href" : "href",
                    h = null,
                    p = "A" === o.prop("tagName").toUpperCase(),
                    d = "FORM" === o[0].nodeName,
                    v = d ? "action" : f,
                    g = !0,
                    m = {
                        relative: l,
                        inherit: !0
                    },
                    y = i.$eval(a.uiSrefOpts) || {};
                e.forEach(r, function (t) {
                        t in y && (m[t] = y[t])
                    });
                var $ = function (n) {
                        if (n && (c = e.copy(n)), g) {
                            h = t.href(u.state, c, m);
                            var r = s[1] || s[0];
                            return r && r.$$addStateInfo(u.state, c),
                            null === h ? (g = !1, !1) : void a.$set(v, h)
                        }
                    };
                u.paramExpr && (i.$watch(u.paramExpr, function (t, e) {
                        t !== c && $(t)
                    }, !0), c = e.copy(i.$eval(u.paramExpr))),
                $(),
                d || o.bind("click", function (e) {
                        var r = e.which || e.button;
                        if (!(r > 1 || e.ctrlKey || e.metaKey || e.shiftKey || o.attr("target"))) {
                            var i = n(function () {
                                t.go(u.state, c, m)
                            });
                            e.preventDefault();
                            var a = p && !h ? 1 : 0;
                            e.preventDefault = function () {
                                a-- <= 0 && n.cancel(i)
                            }
                        }
                    })
            }
        }
    }
    function T(t, e, n) {
        return {
            restrict: "A",
            controller: ["$scope", "$element", "$attrs", function (e, r, i) {
                function o() {
                    a() ? r.addClass(u) : r.removeClass(u)
                }
                function a() {
                    for (var t = 0; t < c.length; t++) if (s(c[t].state, c[t].params)) return !0;
                    return !1
                }
                function s(e, n) {
                    return "undefined" != typeof i.uiSrefActiveEq ? t.is(e.name, n) : t.includes(e.name, n)
                }
                var u, c = [];
                u = n(i.uiSrefActiveEq || i.uiSrefActive || "", !1)(e),
                this.$$addStateInfo = function (e, n) {
                    var i = t.get(e, E(r));
                    c.push({
                        state: i || {
                            name: e
                        },
                        params: n
                    }),
                    o()
                },
                e.$on("$stateChangeSuccess", o)
            }]
        }
    }
    function j(t) {
        var e = function (e) {
            return t.is(e)
        };
        return e.$stateful = !0,
        e
    }
    function P(t) {
        var e = function (e) {
            return t.includes(e)
        };
        return e.$stateful = !0,
        e
    }
    var R = e.isDefined,
        D = e.isFunction,
        I = e.isString,
        M = e.isObject,
        N = e.isArray,
        U = e.forEach,
        q = e.extend,
        B = e.copy;
    e.module("ui.router.util", ["ng"]),
    e.module("ui.router.router", ["ui.router.util"]),
    e.module("ui.router.state", ["ui.router.router", "ui.router.util"]),
    e.module("ui.router", ["ui.router.state"]),
    e.module("ui.router.compat", ["ui.router"]),
    v.$inject = ["$q", "$injector"],
    e.module("ui.router.util").service("$resolve", v),
    g.$inject = ["$http", "$templateCache", "$injector"],
    e.module("ui.router.util").service("$templateFactory", g);
    var F;
    m.prototype.concat = function (t, e) {
            var n = {
                caseInsensitive: F.caseInsensitive(),
                strict: F.strictMode(),
                squash: F.defaultSquashPolicy()
            };
            return new m(this.sourcePath + t + this.sourceSearch, q(n, e), this)
        },
    m.prototype.toString = function () {
            return this.source
        },
    m.prototype.exec = function (t, e) {
            function n(t) {
                function e(t) {
                    return t.split("").reverse().join("")
                }
                function n(t) {
                    return t.replace(/\\-/g, "-")
                }
                var r = e(t).split(/-(?!\\)/),
                    i = d(r, e);
                return d(i, n).reverse()
            }
            var r = this.regexp.exec(t);
            if (!r) return null;
            e = e || {};
            var i, o, a, s = this.parameters(),
                u = s.length,
                c = this.segments.length - 1,
                l = {};
            if (c !== r.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
            for (i = 0; c > i; i++) {
                    a = s[i];
                    var f = this.params[a],
                        h = r[i + 1];
                    for (o = 0; o < f.replace; o++) f.replace[o].from === h && (h = f.replace[o].to);
                    h && f.array === !0 && (h = n(h)),
                    l[a] = f.value(h)
                }
            for (; u > i; i++) a = s[i],
            l[a] = this.params[a].value(e[a]);
            return l
        },
    m.prototype.parameters = function (t) {
            return R(t) ? this.params[t] || null : this.$$paramNames
        },
    m.prototype.validates = function (t) {
            return this.params.$$validates(t)
        },
    m.prototype.format = function (t) {
            function e(t) {
                return encodeURIComponent(t).replace(/-/g, function (t) {
                    return "%5C%" + t.charCodeAt(0).toString(16).toUpperCase()
                })
            }
            t = t || {};
            var n = this.segments,
                r = this.parameters(),
                i = this.params;
            if (!this.validates(t)) return null;
            var o, a = !1,
                s = n.length - 1,
                u = r.length,
                c = n[0];
            for (o = 0; u > o; o++) {
                    var l = s > o,
                        f = r[o],
                        h = i[f],
                        p = h.value(t[f]),
                        v = h.isOptional && h.type.equals(h.value(), p),
                        g = v ? h.squash : !1,
                        m = h.type.encode(p);
                    if (l) {
                            var y = n[o + 1];
                            if (g === !1) null != m && (c += N(m) ? d(m, e).join("-") : encodeURIComponent(m)),
                            c += y;
                            else if (g === !0) {
                                var $ = c.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                                c += y.match($)[1]
                            } else I(g) && (c += g + y)
                        } else {
                            if (null == m || v && g !== !1) continue;
                            N(m) || (m = [m]),
                            m = d(m, encodeURIComponent).join("&" + f + "="),
                            c += (a ? "&" : "?") + (f + "=" + m),
                            a = !0
                        }
                }
            return c
        },
    y.prototype.is = function (t, e) {
            return !0
        },
    y.prototype.encode = function (t, e) {
            return t
        },
    y.prototype.decode = function (t, e) {
            return t
        },
    y.prototype.equals = function (t, e) {
            return t == e
        },
    y.prototype.$subPattern = function () {
            var t = this.pattern.toString();
            return t.substr(1, t.length - 2)
        },
    y.prototype.pattern = /.*/,
    y.prototype.toString = function () {
            return "{Type:" + this.name + "}"
        },
    y.prototype.$normalize = function (t) {
            return this.is(t) ? t : this.decode(t)
        },
    y.prototype.$asArray = function (t, e) {
            function r(t, e) {
                function r(t, e) {
                    return function () {
                        return t[e].apply(t, arguments)
                    }
                }
                function i(t) {
                    return N(t) ? t : R(t) ? [t] : []
                }
                function o(t) {
                    switch (t.length) {
                    case 0:
                        return n;
                    case 1:
                        return "auto" === e ? t[0] : t;
                    default:
                        return t
                    }
                }
                function a(t) {
                    return !t
                }
                function s(t, e) {
                    return function (n) {
                        n = i(n);
                        var r = d(n, t);
                        return e === !0 ? 0 === p(r, a).length : o(r)
                    }
                }
                function u(t) {
                    return function (e, n) {
                        var r = i(e),
                            o = i(n);
                        if (r.length !== o.length) return !1;
                        for (var a = 0; a < r.length; a++) if (!t(r[a], o[a])) return !1;
                        return !0
                    }
                }
                this.encode = s(r(t, "encode")),
                this.decode = s(r(t, "decode")),
                this.is = s(r(t, "is"), !0),
                this.equals = u(r(t, "equals")),
                this.pattern = t.pattern,
                this.$normalize = s(r(t, "$normalize")),
                this.name = t.name,
                this.$arrayMode = e
            }
            if (!t) return this;
            if ("auto" === t && !e) throw new Error("'auto' array mode is for query parameters only");
            return new r(this, t)
        },
    e.module("ui.router.util").provider("$urlMatcherFactory", $),
    e.module("ui.router.util").run(["$urlMatcherFactory", function (t) {}]),
    b.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"],
    e.module("ui.router.router").provider("$urlRouter", b),
    w.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"],
    e.module("ui.router.state").value("$stateParams", {}).provider("$state", w),
    _.$inject = [],
    e.module("ui.router.state").provider("$view", _),
    e.module("ui.router.state").provider("$uiViewScroll", x),
    k.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"],
    C.$inject = ["$compile", "$controller", "$state", "$interpolate"],
    e.module("ui.router.state").directive("uiView", k),
    e.module("ui.router.state").directive("uiView", C),
    O.$inject = ["$state", "$timeout"],
    T.$inject = ["$state", "$stateParams", "$interpolate"],
    e.module("ui.router.state").directive("uiSref", O).directive("uiSrefActive", T).directive("uiSrefActiveEq", T),
    j.$inject = ["$state"],
    P.$inject = ["$state"],
    e.module("ui.router.state").filter("isState", j).filter("includedByState", P)
}(window, window.angular),


function () {
    function t(t, e) {
        if (t !== e) {
            var n = null === t,
                r = t === _,
                i = t === t,
                o = null === e,
                a = e === _,
                s = e === e;
            if (t > e && !o || !i || n && !a && s || r && s) return 1;
            if (e > t && !n || !s || o && !r && i || a && i) return -1
        }
        return 0
    }
    function e(t, e, n) {
        for (var r = t.length, i = n ? r : -1; n ? i-- : ++i < r;) if (e(t[i], i, t)) return i;
        return -1
    }
    function n(t, e, n) {
        if (e !== e) return p(t, n);
        for (var r = n - 1, i = t.length; ++r < i;) if (t[r] === e) return r;
        return -1
    }
    function r(t) {
        return "function" == typeof t || !1
    }
    function i(t) {
        return null == t ? "" : t + ""
    }
    function o(t, e) {
        for (var n = -1, r = t.length; ++n < r && e.indexOf(t.charAt(n)) > -1;);
        return n
    }
    function a(t, e) {
        for (var n = t.length; n-- && e.indexOf(t.charAt(n)) > -1;);
        return n
    }
    function s(e, n) {
        return t(e.criteria, n.criteria) || e.index - n.index
    }
    function u(e, n, r) {
        for (var i = -1, o = e.criteria, a = n.criteria, s = o.length, u = r.length; ++i < s;) {
            var c = t(o[i], a[i]);
            if (c) {
                if (i >= u) return c;
                var l = r[i];
                return c * ("asc" === l || l === !0 ? 1 : -1)
            }
        }
        return e.index - n.index
    }
    function c(t) {
        return Ft[t]
    }
    function l(t) {
        return Lt[t]
    }
    function f(t, e, n) {
        return e ? t = zt[t] : n && (t = Wt[t]),
        "\\" + t
    }
    function h(t) {
        return "\\" + Wt[t]
    }
    function p(t, e, n) {
        for (var r = t.length, i = e + (n ? 0 : -1); n ? i-- : ++i < r;) {
            var o = t[i];
            if (o !== o) return i
        }
        return -1
    }
    function d(t) {
        return !!t && "object" == typeof t
    }
    function v(t) {
        return 160 >= t && t >= 9 && 13 >= t || 32 == t || 160 == t || 5760 == t || 6158 == t || t >= 8192 && (8202 >= t || 8232 == t || 8233 == t || 8239 == t || 8287 == t || 12288 == t || 65279 == t)
    }
    function g(t, e) {
        for (var n = -1, r = t.length, i = -1, o = []; ++n < r;) t[n] === e && (t[n] = F, o[++i] = n);
        return o
    }
    function m(t, e) {
        for (var n, r = -1, i = t.length, o = -1, a = []; ++r < i;) {
            var s = t[r],
                u = e ? e(s, r, t) : s;
            r && n === u || (n = u, a[++o] = s)
        }
        return a
    }
    function y(t) {
        for (var e = -1, n = t.length; ++e < n && v(t.charCodeAt(e)););
        return e
    }
    function $(t) {
        for (var e = t.length; e-- && v(t.charCodeAt(e)););
        return e
    }
    function b(t) {
        return Ht[t]
    }
    function w(v) {
        function J(t) {
            if (d(t) && !Os(t) && !(t instanceof Ft)) {
                if (t instanceof tt) return t;
                if (ea.call(t, "__chain__") && ea.call(t, "__wrapped__")) return pr(t)
            }
            return new tt(t)
        }
        function G() {}
        function tt(t, e, n) {
            this.__wrapped__ = t,
            this.__actions__ = n || [],
            this.__chain__ = !! e
        }
        function Ft(t) {
            this.__wrapped__ = t,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = Ea,
            this.__views__ = []
        }
        function Lt() {
            var t = new Ft(this.__wrapped__);
            return t.__actions__ = ne(this.__actions__),
            t.__dir__ = this.__dir__,
            t.__filtered__ = this.__filtered__,
            t.__iteratees__ = ne(this.__iteratees__),
            t.__takeCount__ = this.__takeCount__,
            t.__views__ = ne(this.__views__),
            t
        }
        function Ht() {
            if (this.__filtered__) {
                var t = new Ft(this);
                t.__dir__ = -1,
                t.__filtered__ = !0
            } else t = this.clone(),
            t.__dir__ *= -1;
            return t
        }
        function Vt() {
            var t = this.__wrapped__.value(),
                e = this.__dir__,
                n = Os(t),
                r = 0 > e,
                i = n ? t.length : 0,
                o = Wn(0, i, this.__views__),
                a = o.start,
                s = o.end,
                u = s - a,
                c = r ? s : a - 1,
                l = this.__iteratees__,
                f = l.length,
                h = 0,
                p = xa(u, this.__takeCount__);
            if (!n || N > i || i == u && p == u) return nn(t, this.__actions__);
            var d = [];
            t: for (; u-- && p > h;) {
                    c += e;
                    for (var v = -1, g = t[c]; ++v < f;) {
                        var m = l[v],
                            y = m.iteratee,
                            $ = m.type,
                            b = y(g);
                        if ($ == q) g = b;
                        else if (!b) {
                                if ($ == U) continue t;
                                break t
                            }
                    }
                    d[h++] = g
                }
            return d
        }
        function zt() {
            this.__data__ = {}
        }
        function Wt(t) {
            return this.has(t) && delete this.__data__[t]
        }
        function Kt(t) {
            return "__proto__" == t ? _ : this.__data__[t]
        }
        function Jt(t) {
            return "__proto__" != t && ea.call(this.__data__, t)
        }
        function Xt(t, e) {
            return "__proto__" != t && (this.__data__[t] = e),
            this
        }
        function Qt(t) {
            var e = t ? t.length : 0;
            for (this.data = {
                hash: ma(null),
                set: new fa
            }; e--;) this.push(t[e])
        }
        function Yt(t, e) {
            var n = t.data,
                r = "string" == typeof e || Di(e) ? n.set.has(e) : n.hash[e];
            return r ? 0 : -1
        }
        function Gt(t) {
            var e = this.data;
            "string" == typeof t || Di(t) ? e.set.add(t) : e.hash[t] = !0
        }
        function ee(t, e) {
            for (var n = -1, r = t.length, i = -1, o = e.length, a = Fo(r + o); ++n < r;) a[n] = t[n];
            for (; ++i < o;) a[n++] = e[i];
            return a
        }
        function ne(t, e) {
            var n = -1,
                r = t.length;
            for (e || (e = Fo(r)); ++n < r;) e[n] = t[n];
            return e
        }
        function re(t, e) {
            for (var n = -1, r = t.length; ++n < r && e(t[n], n, t) !== !1;);
            return t
        }
        function ie(t, e) {
            for (var n = t.length; n-- && e(t[n], n, t) !== !1;);
            return t
        }
        function oe(t, e) {
            for (var n = -1, r = t.length; ++n < r;) if (!e(t[n], n, t)) return !1;
            return !0
        }
        function ae(t, e, n, r) {
            for (var i = -1, o = t.length, a = r, s = a; ++i < o;) {
                var u = t[i],
                    c = +e(u);
                n(c, a) && (a = c, s = u)
            }
            return s
        }
        function se(t, e) {
            for (var n = -1, r = t.length, i = -1, o = []; ++n < r;) {
                var a = t[n];
                e(a, n, t) && (o[++i] = a)
            }
            return o
        }
        function ue(t, e) {
            for (var n = -1, r = t.length, i = Fo(r); ++n < r;) i[n] = e(t[n], n, t);
            return i
        }
        function ce(t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
            return t
        }
        function le(t, e, n, r) {
            var i = -1,
                o = t.length;
            for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
            return n
        }
        function fe(t, e, n, r) {
            var i = t.length;
            for (r && i && (n = t[--i]); i--;) n = e(n, t[i], i, t);
            return n
        }
        function he(t, e) {
            for (var n = -1, r = t.length; ++n < r;) if (e(t[n], n, t)) return !0;
            return !1
        }
        function pe(t, e) {
            for (var n = t.length, r = 0; n--;) r += +e(t[n]) || 0;
            return r
        }
        function de(t, e) {
            return t === _ ? e : t
        }
        function ve(t, e, n, r) {
            return t !== _ && ea.call(r, n) ? t : e
        }
        function ge(t, e, n) {
            for (var r = -1, i = Bs(e), o = i.length; ++r < o;) {
                var a = i[r],
                    s = t[a],
                    u = n(s, e[a], a, t, e);
                    (u === u ? u === s : s !== s) && (s !== _ || a in t) || (t[a] = u)
            }
            return t
        }
        function me(t, e) {
            return null == e ? t : $e(e, Bs(e), t)
        }
        function ye(t, e) {
            for (var n = -1, r = null == t, i = !r && Yn(t), o = i ? t.length : 0, a = e.length, s = Fo(a); ++n < a;) {
                var u = e[n];
                s[n] = i ? Gn(u, o) ? t[u] : _ : r ? _ : t[u]
            }
            return s
        }
        function $e(t, e, n) {
            n || (n = {});
            for (var r = -1, i = e.length; ++r < i;) {
                var o = e[r];
                n[o] = t[o]
            }
            return n
        }
        function be(t, e, n) {
            var r = typeof t;
            return "function" == r ? e === _ ? t : an(t, e, n) : null == t ? Eo : "object" == r ? qe(t) : e === _ ? Do(t) : Be(t, e)
        }
        function we(t, e, n, r, i, o, a) {
            var s;
            if (n && (s = i ? n(t, r, i) : n(t)), s !== _) return s;
            if (!Di(t)) return t;
            var u = Os(t);
            if (u) {
                if (s = Kn(t), !e) return ne(t, s)
            } else {
                var c = ra.call(t),
                    l = c == K;
                if (c != Q && c != L && (!l || i)) return Bt[c] ? Xn(t, c, e) : i ? t : {};
                if (s = Jn(l ? {} : t), !e) return me(s, t)
            }
            o || (o = []),
            a || (a = []);
            for (var f = o.length; f--;) if (o[f] == t) return a[f];
            return o.push(t),
            a.push(s),
            (u ? re : je)(t, function (r, i) {
                s[i] = we(r, e, n, i, t, o, a)
            }),
            s
        }
        function _e(t, e, n) {
            if ("function" != typeof t) throw new Qo(B);
            return ha(function () {
                t.apply(_, n)
            }, e)
        }
        function xe(t, e) {
            var r = t ? t.length : 0,
                i = [];
            if (!r) return i;
            var o = -1,
                a = Hn(),
                s = a === n,
                u = s && e.length >= N ? vn(e) : null,
                c = e.length;
            u && (a = Yt, s = !1, e = u);
            t: for (; ++o < r;) {
                    var l = t[o];
                    if (s && l === l) {
                        for (var f = c; f--;) if (e[f] === l) continue t;
                        i.push(l)
                    } else a(e, l, 0) < 0 && i.push(l)
                }
            return i
        }
        function ke(t, e) {
            var n = !0;
            return Ma(t, function (t, r, i) {
                return n = !! e(t, r, i)
            }),
            n
        }
        function Ce(t, e, n, r) {
            var i = r,
                o = i;
            return Ma(t, function (t, a, s) {
                    var u = +e(t, a, s);
                    (n(u, i) || u === r && u === o) && (i = u, o = t)
                }),
            o
        }
        function Se(t, e, n, r) {
            var i = t.length;
            for (n = null == n ? 0 : +n || 0, 0 > n && (n = -n > i ? 0 : i + n), r = r === _ || r > i ? i : +r || 0, 0 > r && (r += i), i = n > r ? 0 : r >>> 0, n >>>= 0; i > n;) t[n++] = e;
            return t
        }
        function Ae(t, e) {
            var n = [];
            return Ma(t, function (t, r, i) {
                e(t, r, i) && n.push(t)
            }),
            n
        }
        function Ee(t, e, n, r) {
            var i;
            return n(t, function (t, n, o) {
                return e(t, n, o) ? (i = r ? n : t, !1) : void 0
            }),
            i
        }
        function Oe(t, e, n, r) {
            r || (r = []);
            for (var i = -1, o = t.length; ++i < o;) {
                var a = t[i];
                d(a) && Yn(a) && (n || Os(a) || Ci(a)) ? e ? Oe(a, e, n, r) : ce(r, a) : n || (r[r.length] = a)
            }
            return r
        }
        function Te(t, e) {
            return Ua(t, e, to)
        }
        function je(t, e) {
            return Ua(t, e, Bs)
        }
        function Pe(t, e) {
            return qa(t, e, Bs)
        }
        function Re(t, e) {
            for (var n = -1, r = e.length, i = -1, o = []; ++n < r;) {
                var a = e[n];
                Ri(t[a]) && (o[++i] = a)
            }
            return o
        }
        function De(t, e, n) {
            if (null != t) {
                n !== _ && n in fr(t) && (e = [n]);
                for (var r = 0, i = e.length; null != t && i > r;) t = t[e[r++]];
                return r && r == i ? t : _
            }
        }
        function Ie(t, e, n, r, i, o) {
            return t === e ? !0 : null == t || null == e || !Di(t) && !d(e) ? t !== t && e !== e : Me(t, e, Ie, n, r, i, o)
        }
        function Me(t, e, n, r, i, o, a) {
            var s = Os(t),
                u = Os(e),
                c = H,
                l = H;
            s || (c = ra.call(t), c == L ? c = Q : c != Q && (s = Hi(t))),
            u || (l = ra.call(e), l == L ? l = Q : l != Q && (u = Hi(e)));
            var f = c == Q,
                h = l == Q,
                p = c == l;
            if (p && !s && !f) return qn(t, e, c);
            if (!i) {
                    var d = f && ea.call(t, "__wrapped__"),
                        v = h && ea.call(e, "__wrapped__");
                    if (d || v) return n(d ? t.value() : t, v ? e.value() : e, r, i, o, a)
                }
            if (!p) return !1;
            o || (o = []),
            a || (a = []);
            for (var g = o.length; g--;) if (o[g] == t) return a[g] == e;
            o.push(t),
            a.push(e);
            var m = (s ? Un : Bn)(t, e, n, r, i, o, a);
            return o.pop(),
            a.pop(),
            m
        }
        function Ne(t, e, n) {
            var r = e.length,
                i = r,
                o = !n;
            if (null == t) return !i;
            for (t = fr(t); r--;) {
                    var a = e[r];
                    if (o && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
                }
            for (; ++r < i;) {
                    a = e[r];
                    var s = a[0],
                        u = t[s],
                        c = a[1];
                    if (o && a[2]) {
                            if (u === _ && !(s in t)) return !1
                        } else {
                            var l = n ? n(u, c, s) : _;
                            if (!(l === _ ? Ie(c, u, n, !0) : l)) return !1
                        }
                }
            return !0
        }
        function Ue(t, e) {
            var n = -1,
                r = Yn(t) ? Fo(t.length) : [];
            return Ma(t, function (t, i, o) {
                    r[++n] = e(t, i, o)
                }),
            r
        }
        function qe(t) {
            var e = Vn(t);
            if (1 == e.length && e[0][2]) {
                var n = e[0][0],
                    r = e[0][1];
                return function (t) {
                        return null == t ? !1 : t[n] === r && (r !== _ || n in fr(t))
                    }
            }
            return function (t) {
                return Ne(t, e)
            }
        }
        function Be(t, e) {
            var n = Os(t),
                r = tr(t) && rr(e),
                i = t + "";
            return t = hr(t),


            function (o) {
                    if (null == o) return !1;
                    var a = i;
                    if (o = fr(o), !(!n && r || a in o)) {
                        if (o = 1 == t.length ? o : De(o, Je(t, 0, -1)), null == o) return !1;
                        a = Sr(t),
                        o = fr(o)
                    }
                    return o[a] === e ? e !== _ || a in o : Ie(e, o[a], _, !0)
                }
        }
        function Fe(t, e, n, r, i) {
            if (!Di(t)) return t;
            var o = Yn(e) && (Os(e) || Hi(e)),
                a = o ? _ : Bs(e);
            return re(a || e, function (s, u) {
                    if (a && (u = s, s = e[u]), d(s)) r || (r = []),
                    i || (i = []),
                    Le(t, e, u, Fe, n, r, i);
                    else {
                        var c = t[u],
                            l = n ? n(c, s, u, t, e) : _,
                            f = l === _;
                        f && (l = s),
                        l === _ && (!o || u in t) || !f && (l === l ? l === c : c !== c) || (t[u] = l)
                    }
                }),
            t
        }
        function Le(t, e, n, r, i, o, a) {
            for (var s = o.length, u = e[n]; s--;) if (o[s] == u) return void(t[n] = a[s]);
            var c = t[n],
                l = i ? i(c, u, n, t, e) : _,
                f = l === _;
            f && (l = u, Yn(u) && (Os(u) || Hi(u)) ? l = Os(c) ? c : Yn(c) ? ne(c) : [] : Bi(u) || Ci(u) ? l = Ci(c) ? Ji(c) : Bi(c) ? c : {} : f = !1),
            o.push(u),
            a.push(l),
            f ? t[n] = r(l, u, i, o, a) : (l === l ? l !== c : c === c) && (t[n] = l)
        }
        function He(t) {
            return function (e) {
                return null == e ? _ : e[t]
            }
        }
        function Ve(t) {
            var e = t + "";
            return t = hr(t),


            function (n) {
                return De(n, t, e)
            }
        }
        function ze(t, e) {
            for (var n = t ? e.length : 0; n--;) {
                var r = e[n];
                if (r != i && Gn(r)) {
                    var i = r;
                    pa.call(t, r, 1)
                }
            }
            return t
        }
        function We(t, e) {
            return t + ya(Sa() * (e - t + 1))
        }
        function Ke(t, e, n, r, i) {
            return i(t, function (t, i, o) {
                n = r ? (r = !1, t) : e(n, t, i, o)
            }),
            n
        }
        function Je(t, e, n) {
            var r = -1,
                i = t.length;
            e = null == e ? 0 : +e || 0,
            0 > e && (e = -e > i ? 0 : i + e),
            n = n === _ || n > i ? i : +n || 0,
            0 > n && (n += i),
            i = e > n ? 0 : n - e >>> 0,
            e >>>= 0;
            for (var o = Fo(i); ++r < i;) o[r] = t[r + e];
            return o
        }
        function Xe(t, e) {
            var n;
            return Ma(t, function (t, r, i) {
                return n = e(t, r, i),
                !n
            }),
            !! n
        }
        function Qe(t, e) {
            var n = t.length;
            for (t.sort(e); n--;) t[n] = t[n].value;
            return t
        }
        function Ye(t, e, n) {
            var r = Fn(),
                i = -1;
            e = ue(e, function (t) {
                    return r(t)
                });
            var o = Ue(t, function (t) {
                    var n = ue(e, function (e) {
                        return e(t)
                    });
                    return {
                        criteria: n,
                        index: ++i,
                        value: t
                    }
                });
            return Qe(o, function (t, e) {
                    return u(t, e, n)
                })
        }
        function Ge(t, e) {
            var n = 0;
            return Ma(t, function (t, r, i) {
                n += +e(t, r, i) || 0
            }),
            n
        }
        function Ze(t, e) {
            var r = -1,
                i = Hn(),
                o = t.length,
                a = i === n,
                s = a && o >= N,
                u = s ? vn() : null,
                c = [];
            u ? (i = Yt, a = !1) : (s = !1, u = e ? [] : c);
            t: for (; ++r < o;) {
                    var l = t[r],
                        f = e ? e(l, r, t) : l;
                    if (a && l === l) {
                            for (var h = u.length; h--;) if (u[h] === f) continue t;
                            e && u.push(f),
                            c.push(l)
                        } else i(u, f, 0) < 0 && ((e || s) && u.push(f), c.push(l))
                }
            return c
        }
        function tn(t, e) {
            for (var n = -1, r = e.length, i = Fo(r); ++n < r;) i[n] = t[e[n]];
            return i
        }
        function en(t, e, n, r) {
            for (var i = t.length, o = r ? i : -1;
            (r ? o-- : ++o < i) && e(t[o], o, t););
            return n ? Je(t, r ? 0 : o, r ? o + 1 : i) : Je(t, r ? o + 1 : 0, r ? i : o)
        }
        function nn(t, e) {
            var n = t;
            n instanceof Ft && (n = n.value());
            for (var r = -1, i = e.length; ++r < i;) {
                var o = e[r];
                n = o.func.apply(o.thisArg, ce([n], o.args))
            }
            return n
        }
        function rn(t, e, n) {
            var r = 0,
                i = t ? t.length : r;
            if ("number" == typeof e && e === e && ja >= i) {
                    for (; i > r;) {
                        var o = r + i >>> 1,
                            a = t[o];
                            (n ? e >= a : e > a) && null !== a ? r = o + 1 : i = o
                    }
                    return i
                }
            return on(t, e, Eo, n)
        }
        function on(t, e, n, r) {
            e = n(e);
            for (var i = 0, o = t ? t.length : 0, a = e !== e, s = null === e, u = e === _; o > i;) {
                var c = ya((i + o) / 2),
                    l = n(t[c]),
                    f = l !== _,
                    h = l === l;
                if (a) var p = h || r;
                else p = s ? h && f && (r || null != l) : u ? h && (r || f) : null == l ? !1 : r ? e >= l : e > l;
                p ? i = c + 1 : o = c
            }
            return xa(o, Ta)
        }
        function an(t, e, n) {
            if ("function" != typeof t) return Eo;
            if (e === _) return t;
            switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 3:
                return function (n, r, i) {
                    return t.call(e, n, r, i)
                };
            case 4:
                return function (n, r, i, o) {
                    return t.call(e, n, r, i, o)
                };
            case 5:
                return function (n, r, i, o, a) {
                    return t.call(e, n, r, i, o, a)
                }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
        function sn(t) {
            var e = new aa(t.byteLength),
                n = new da(e);
            return n.set(new da(t)),
            e
        }
        function un(t, e, n) {
            for (var r = n.length, i = -1, o = _a(t.length - r, 0), a = -1, s = e.length, u = Fo(s + o); ++a < s;) u[a] = e[a];
            for (; ++i < r;) u[n[i]] = t[i];
            for (; o--;) u[a++] = t[i++];
            return u
        }
        function cn(t, e, n) {
            for (var r = -1, i = n.length, o = -1, a = _a(t.length - i, 0), s = -1, u = e.length, c = Fo(a + u); ++o < a;) c[o] = t[o];
            for (var l = o; ++s < u;) c[l + s] = e[s];
            for (; ++r < i;) c[l + n[r]] = t[o++];
            return c
        }
        function ln(t, e) {
            return function (n, r, i) {
                var o = e ? e() : {};
                if (r = Fn(r, i, 3), Os(n)) for (var a = -1, s = n.length; ++a < s;) {
                    var u = n[a];
                    t(o, u, r(u, a, n), n)
                } else Ma(n, function (e, n, i) {
                    t(o, e, r(e, n, i), i)
                });
                return o
            }
        }
        function fn(t) {
            return mi(function (e, n) {
                var r = -1,
                    i = null == e ? 0 : n.length,
                    o = i > 2 ? n[i - 2] : _,
                    a = i > 2 ? n[2] : _,
                    s = i > 1 ? n[i - 1] : _;
                for ("function" == typeof o ? (o = an(o, s, 5), i -= 2) : (o = "function" == typeof s ? s : _, i -= o ? 1 : 0), a && Zn(n[0], n[1], a) && (o = 3 > i ? _ : o, i = 1); ++r < i;) {
                        var u = n[r];
                        u && t(e, u, o)
                    }
                return e
            })
        }
        function hn(t, e) {
            return function (n, r) {
                var i = n ? La(n) : 0;
                if (!nr(i)) return t(n, r);
                for (var o = e ? i : -1, a = fr(n);
                (e ? o-- : ++o < i) && r(a[o], o, a) !== !1;);
                return n
            }
        }
        function pn(t) {
            return function (e, n, r) {
                for (var i = fr(e), o = r(e), a = o.length, s = t ? a : -1; t ? s-- : ++s < a;) {
                    var u = o[s];
                    if (n(i[u], u, i) === !1) break
                }
                return e
            }
        }
        function dn(t, e) {
            function n() {
                var i = this && this !== Zt && this instanceof n ? r : t;
                return i.apply(e, arguments)
            }
            var r = mn(t);
            return n
        }
        function vn(t) {
            return ma && fa ? new Qt(t) : null
        }
        function gn(t) {
            return function (e) {
                for (var n = -1, r = Co(lo(e)), i = r.length, o = ""; ++n < i;) o = t(o, r[n], n);
                return o
            }
        }
        function mn(t) {
            return function () {
                var e = arguments;
                switch (e.length) {
                case 0:
                    return new t;
                case 1:
                    return new t(e[0]);
                case 2:
                    return new t(e[0], e[1]);
                case 3:
                    return new t(e[0], e[1], e[2]);
                case 4:
                    return new t(e[0], e[1], e[2], e[3]);
                case 5:
                    return new t(e[0], e[1], e[2], e[3], e[4]);
                case 6:
                    return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                case 7:
                    return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                }
                var n = Ia(t.prototype),
                    r = t.apply(n, e);
                return Di(r) ? r : n
            }
        }
        function yn(t) {
            function e(n, r, i) {
                i && Zn(n, r, i) && (r = _);
                var o = Nn(n, t, _, _, _, _, _, r);
                return o.placeholder = e.placeholder,
                o
            }
            return e
        }
        function $n(t, e) {
            return mi(function (n) {
                var r = n[0];
                return null == r ? r : (n.push(e), t.apply(_, n))
            })
        }
        function bn(t, e) {
            return function (n, r, i) {
                if (i && Zn(n, r, i) && (r = _), r = Fn(r, i, 3), 1 == r.length) {
                    n = Os(n) ? n : lr(n);
                    var o = ae(n, r, t, e);
                    if (!n.length || o !== e) return o
                }
                return Ce(n, r, t, e)
            }
        }
        function wn(t, n) {
            return function (r, i, o) {
                if (i = Fn(i, o, 3), Os(r)) {
                    var a = e(r, i, n);
                    return a > -1 ? r[a] : _
                }
                return Ee(r, i, t)
            }
        }
        function _n(t) {
            return function (n, r, i) {
                return n && n.length ? (r = Fn(r, i, 3), e(n, r, t)) : -1
            }
        }
        function xn(t) {
            return function (e, n, r) {
                return n = Fn(n, r, 3),
                Ee(e, n, t, !0)
            }
        }
        function kn(t) {
            return function () {
                for (var e, n = arguments.length, r = t ? n : -1, i = 0, o = Fo(n); t ? r-- : ++r < n;) {
                    var a = o[i++] = arguments[r];
                    if ("function" != typeof a) throw new Qo(B);
                    !e && tt.prototype.thru && "wrapper" == Ln(a) && (e = new tt([], !0))
                }
                for (r = e ? -1 : n; ++r < n;) {
                    a = o[r];
                    var s = Ln(a),
                        u = "wrapper" == s ? Fa(a) : _;
                    e = u && er(u[0]) && u[1] == (j | A | O | P) && !u[4].length && 1 == u[9] ? e[Ln(u[0])].apply(e, u[3]) : 1 == a.length && er(a) ? e[s]() : e.thru(a)
                }
                return function () {
                    var t = arguments,
                        r = t[0];
                    if (e && 1 == t.length && Os(r) && r.length >= N) return e.plant(r).value();
                    for (var i = 0, a = n ? o[i].apply(this, t) : r; ++i < n;) a = o[i].call(this, a);
                    return a
                }
            }
        }
        function Cn(t, e) {
            return function (n, r, i) {
                return "function" == typeof r && i === _ && Os(n) ? t(n, r) : e(n, an(r, i, 3))
            }
        }
        function Sn(t) {
            return function (e, n, r) {
                return ("function" != typeof n || r !== _) && (n = an(n, r, 3)),
                t(e, n, to)
            }
        }
        function An(t) {
            return function (e, n, r) {
                return ("function" != typeof n || r !== _) && (n = an(n, r, 3)),
                t(e, n)
            }
        }
        function En(t) {
            return function (e, n, r) {
                var i = {};
                return n = Fn(n, r, 3),
                je(e, function (e, r, o) {
                    var a = n(e, r, o);
                    r = t ? a : r,
                    e = t ? e : a,
                    i[r] = e
                }),
                i
            }
        }
        function On(t) {
            return function (e, n, r) {
                return e = i(e),
                (t ? e : "") + Rn(e, n, r) + (t ? "" : e)
            }
        }
        function Tn(t) {
            var e = mi(function (n, r) {
                var i = g(r, e.placeholder);
                return Nn(n, t, _, r, i)
            });
            return e
        }
        function jn(t, e) {
            return function (n, r, i, o) {
                var a = arguments.length < 3;
                return "function" == typeof r && o === _ && Os(n) ? t(n, r, i, a) : Ke(n, Fn(r, o, 4), i, a, e)
            }
        }
        function Pn(t, e, n, r, i, o, a, s, u, c) {
            function l() {
                for (var $ = arguments.length, b = $, w = Fo($); b--;) w[b] = arguments[b];
                if (r && (w = un(w, r, i)), o && (w = cn(w, o, a)), d || m) {
                    var x = l.placeholder,
                        S = g(w, x);
                    if ($ -= S.length, c > $) {
                            var A = s ? ne(s) : _,
                                E = _a(c - $, 0),
                                j = d ? S : _,
                                P = d ? _ : S,
                                R = d ? w : _,
                                D = d ? _ : w;
                            e |= d ? O : T,
                            e &= ~ (d ? T : O),
                            v || (e &= ~ (k | C));
                            var I = [t, e, n, R, j, D, P, A, u, E],
                                M = Pn.apply(_, I);
                            return er(t) && Ha(M, I),
                            M.placeholder = x,
                            M
                        }
                }
                var N = h ? n : this,
                    U = p ? N[t] : t;
                return s && (w = ur(w, s)),
                f && u < w.length && (w.length = u),
                this && this !== Zt && this instanceof l && (U = y || mn(t)),
                U.apply(N, w)
            }
            var f = e & j,
                h = e & k,
                p = e & C,
                d = e & A,
                v = e & S,
                m = e & E,
                y = p ? _ : mn(t);
            return l
        }
        function Rn(t, e, n) {
            var r = t.length;
            if (e = +e, r >= e || !ba(e)) return "";
            var i = e - r;
            return n = null == n ? " " : n + "",
            mo(n, ga(i / n.length)).slice(0, i)
        }
        function Dn(t, e, n, r) {
            function i() {
                for (var e = -1, s = arguments.length, u = -1, c = r.length, l = Fo(c + s); ++u < c;) l[u] = r[u];
                for (; s--;) l[u++] = arguments[++e];
                var f = this && this !== Zt && this instanceof i ? a : t;
                return f.apply(o ? n : this, l)
            }
            var o = e & k,
                a = mn(t);
            return i
        }
        function In(t) {
            var e = zo[t];
            return function (t, n) {
                return n = n === _ ? 0 : +n || 0,
                n ? (n = ca(10, n), e(t * n) / n) : e(t)
            }
        }
        function Mn(t) {
            return function (e, n, r, i) {
                var o = Fn(r);
                return null == r && o === be ? rn(e, n, t) : on(e, n, o(r, i, 1), t)
            }
        }
        function Nn(t, e, n, r, i, o, a, s) {
            var u = e & C;
            if (!u && "function" != typeof t) throw new Qo(B);
            var c = r ? r.length : 0;
            if (c || (e &= ~ (O | T), r = i = _), c -= i ? i.length : 0, e & T) {
                var l = r,
                    f = i;
                r = i = _
            }
            var h = u ? _ : Fa(t),
                p = [t, e, n, r, i, l, f, o, a, s];
            if (h && (ir(p, h), e = p[1], s = p[9]), p[9] = null == s ? u ? 0 : t.length : _a(s - c, 0) || 0, e == k) var d = dn(p[0], p[2]);
            else d = e != O && e != (k | O) || p[4].length ? Pn.apply(_, p) : Dn.apply(_, p);
            var v = h ? Ba : Ha;
            return v(d, p)
        }
        function Un(t, e, n, r, i, o, a) {
            var s = -1,
                u = t.length,
                c = e.length;
            if (u != c && !(i && c > u)) return !1;
            for (; ++s < u;) {
                    var l = t[s],
                        f = e[s],
                        h = r ? r(i ? f : l, i ? l : f, s) : _;
                    if (h !== _) {
                            if (h) continue;
                            return !1
                        }
                    if (i) {
                            if (!he(e, function (t) {
                                return l === t || n(l, t, r, i, o, a)
                            })) return !1
                        } else if (l !== f && !n(l, f, r, i, o, a)) return !1
                }
            return !0
        }
        function qn(t, e, n) {
            switch (n) {
            case V:
            case z:
                return +t == +e;
            case W:
                return t.name == e.name && t.message == e.message;
            case X:
                return t != +t ? e != +e : t == +e;
            case Y:
            case Z:
                return t == e + ""
            }
            return !1
        }
        function Bn(t, e, n, r, i, o, a) {
            var s = Bs(t),
                u = s.length,
                c = Bs(e),
                l = c.length;
            if (u != l && !i) return !1;
            for (var f = u; f--;) {
                    var h = s[f];
                    if (!(i ? h in e : ea.call(e, h))) return !1
                }
            for (var p = i; ++f < u;) {
                    h = s[f];
                    var d = t[h],
                        v = e[h],
                        g = r ? r(i ? v : d, i ? d : v, h) : _;
                    if (!(g === _ ? n(d, v, r, i, o, a) : g)) return !1;
                    p || (p = "constructor" == h)
                }
            if (!p) {
                    var m = t.constructor,
                        y = e.constructor;
                    if (m != y && "constructor" in t && "constructor" in e && !("function" == typeof m && m instanceof m && "function" == typeof y && y instanceof y)) return !1
                }
            return !0
        }
        function Fn(t, e, n) {
            var r = J.callback || So;
            return r = r === So ? be : r,
            n ? r(t, e, n) : r
        }
        function Ln(t) {
            for (var e = t.name + "", n = Da[e], r = n ? n.length : 0; r--;) {
                var i = n[r],
                    o = i.func;
                if (null == o || o == t) return i.name
            }
            return e
        }
        function Hn(t, e, r) {
            var i = J.indexOf || kr;
            return i = i === kr ? n : i,
            t ? i(t, e, r) : i
        }
        function Vn(t) {
            for (var e = eo(t), n = e.length; n--;) e[n][2] = rr(e[n][1]);
            return e
        }
        function zn(t, e) {
            var n = null == t ? _ : t[e];
            return Ni(n) ? n : _
        }
        function Wn(t, e, n) {
            for (var r = -1, i = n.length; ++r < i;) {
                var o = n[r],
                    a = o.size;
                switch (o.type) {
                    case "drop":
                        t += a;
                        break;
                    case "dropRight":
                        e -= a;
                        break;
                    case "take":
                        e = xa(e, t + a);
                        break;
                    case "takeRight":
                        t = _a(t, e - a)
                    }
            }
            return {
                start: t,
                end: e
            }
        }
        function Kn(t) {
            var e = t.length,
                n = new t.constructor(e);
            return e && "string" == typeof t[0] && ea.call(t, "index") && (n.index = t.index, n.input = t.input),
            n
        }
        function Jn(t) {
            var e = t.constructor;
            return "function" == typeof e && e instanceof e || (e = Ko),
            new e
        }
        function Xn(t, e, n) {
            var r = t.constructor;
            switch (e) {
            case et:
                return sn(t);
            case V:
            case z:
                return new r(+t);
            case nt:
            case rt:
            case it:
            case ot:
            case at:
            case st:
            case ut:
            case ct:
            case lt:
                var i = t.buffer;
                return new r(n ? sn(i) : i, t.byteOffset, t.length);
            case X:
            case Z:
                return new r(t);
            case Y:
                var o = new r(t.source, Ot.exec(t));
                o.lastIndex = t.lastIndex
            }
            return o
        }
        function Qn(t, e, n) {
            null == t || tr(e, t) || (e = hr(e), t = 1 == e.length ? t : De(t, Je(e, 0, -1)), e = Sr(e));
            var r = null == t ? t : t[e];
            return null == r ? _ : r.apply(t, n)
        }
        function Yn(t) {
            return null != t && nr(La(t))
        }
        function Gn(t, e) {
            return t = "number" == typeof t || Pt.test(t) ? +t : -1,
            e = null == e ? Pa : e,
            t > -1 && t % 1 == 0 && e > t
        }
        function Zn(t, e, n) {
            if (!Di(n)) return !1;
            var r = typeof e;
            if ("number" == r ? Yn(n) && Gn(e, n.length) : "string" == r && e in n) {
                var i = n[e];
                return t === t ? t === i : i !== i
            }
            return !1
        }
        function tr(t, e) {
            var n = typeof t;
            if ("string" == n && _t.test(t) || "number" == n) return !0;
            if (Os(t)) return !1;
            var r = !wt.test(t);
            return r || null != e && t in fr(e)
        }
        function er(t) {
            var e = Ln(t),
                n = J[e];
            if ("function" != typeof n || !(e in Ft.prototype)) return !1;
            if (t === n) return !0;
            var r = Fa(n);
            return !!r && t === r[0]
        }
        function nr(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && Pa >= t
        }
        function rr(t) {
            return t === t && !Di(t)
        }
        function ir(t, e) {
            var n = t[1],
                r = e[1],
                i = n | r,
                o = j > i,
                a = r == j && n == A || r == j && n == P && t[7].length <= e[8] || r == (j | P) && n == A;
            if (!o && !a) return t;
            r & k && (t[2] = e[2], i |= n & k ? 0 : S);
            var s = e[3];
            if (s) {
                    var u = t[3];
                    t[3] = u ? un(u, s, e[4]) : ne(s),
                    t[4] = u ? g(t[3], F) : ne(e[4])
                }
            return s = e[5],
            s && (u = t[5], t[5] = u ? cn(u, s, e[6]) : ne(s), t[6] = u ? g(t[5], F) : ne(e[6])),
            s = e[7],
            s && (t[7] = ne(s)),
            r & j && (t[8] = null == t[8] ? e[8] : xa(t[8], e[8])),
            null == t[9] && (t[9] = e[9]),
            t[0] = e[0],
            t[1] = i,
            t
        }
        function or(t, e) {
            return t === _ ? e : Ts(t, e, or)
        }
        function ar(t, e) {
            t = fr(t);
            for (var n = -1, r = e.length, i = {}; ++n < r;) {
                var o = e[n];
                o in t && (i[o] = t[o])
            }
            return i
        }
        function sr(t, e) {
            var n = {};
            return Te(t, function (t, r, i) {
                e(t, r, i) && (n[r] = t)
            }),
            n
        }
        function ur(t, e) {
            for (var n = t.length, r = xa(e.length, n), i = ne(t); r--;) {
                var o = e[r];
                t[r] = Gn(o, n) ? i[o] : _
            }
            return t
        }
        function cr(t) {
            for (var e = to(t), n = e.length, r = n && t.length, i = !! r && nr(r) && (Os(t) || Ci(t)), o = -1, a = []; ++o < n;) {
                var s = e[o];
                (i && Gn(s, r) || ea.call(t, s)) && a.push(s)
            }
            return a
        }
        function lr(t) {
            return null == t ? [] : Yn(t) ? Di(t) ? t : Ko(t) : oo(t)
        }
        function fr(t) {
            return Di(t) ? t : Ko(t)
        }
        function hr(t) {
            if (Os(t)) return t;
            var e = [];
            return i(t).replace(xt, function (t, n, r, i) {
                e.push(r ? i.replace(At, "$1") : n || t)
            }),
            e
        }
        function pr(t) {
            return t instanceof Ft ? t.clone() : new tt(t.__wrapped__, t.__chain__, ne(t.__actions__))
        }
        function dr(t, e, n) {
            e = (n ? Zn(t, e, n) : null == e) ? 1 : _a(ya(e) || 1, 1);
            for (var r = 0, i = t ? t.length : 0, o = -1, a = Fo(ga(i / e)); i > r;) a[++o] = Je(t, r, r += e);
            return a
        }
        function vr(t) {
            for (var e = -1, n = t ? t.length : 0, r = -1, i = []; ++e < n;) {
                var o = t[e];
                o && (i[++r] = o)
            }
            return i
        }
        function gr(t, e, n) {
            var r = t ? t.length : 0;
            return r ? ((n ? Zn(t, e, n) : null == e) && (e = 1), Je(t, 0 > e ? 0 : e)) : []
        }
        function mr(t, e, n) {
            var r = t ? t.length : 0;
            return r ? ((n ? Zn(t, e, n) : null == e) && (e = 1), e = r - (+e || 0), Je(t, 0, 0 > e ? 0 : e)) : []
        }
        function yr(t, e, n) {
            return t && t.length ? en(t, Fn(e, n, 3), !0, !0) : []
        }
        function $r(t, e, n) {
            return t && t.length ? en(t, Fn(e, n, 3), !0) : []
        }
        function br(t, e, n, r) {
            var i = t ? t.length : 0;
            return i ? (n && "number" != typeof n && Zn(t, e, n) && (n = 0, r = i), Se(t, e, n, r)) : []
        }
        function wr(t) {
            return t ? t[0] : _
        }
        function _r(t, e, n) {
            var r = t ? t.length : 0;
            return n && Zn(t, e, n) && (e = !1),
            r ? Oe(t, e) : []
        }
        function xr(t) {
            var e = t ? t.length : 0;
            return e ? Oe(t, !0) : []
        }
        function kr(t, e, r) {
            var i = t ? t.length : 0;
            if (!i) return -1;
            if ("number" == typeof r) r = 0 > r ? _a(i + r, 0) : r;
            else if (r) {
                var o = rn(t, e);
                return i > o && (e === e ? e === t[o] : t[o] !== t[o]) ? o : -1
            }
            return n(t, e, r || 0)
        }
        function Cr(t) {
            return mr(t, 1)
        }
        function Sr(t) {
            var e = t ? t.length : 0;
            return e ? t[e - 1] : _
        }
        function Ar(t, e, n) {
            var r = t ? t.length : 0;
            if (!r) return -1;
            var i = r;
            if ("number" == typeof n) i = (0 > n ? _a(r + n, 0) : xa(n || 0, r - 1)) + 1;
            else if (n) {
                i = rn(t, e, !0) - 1;
                var o = t[i];
                return (e === e ? e === o : o !== o) ? i : -1
            }
            if (e !== e) return p(t, i, !0);
            for (; i--;) if (t[i] === e) return i;
            return -1
        }
        function Er() {
            var t = arguments,
                e = t[0];
            if (!e || !e.length) return e;
            for (var n = 0, r = Hn(), i = t.length; ++n < i;) for (var o = 0, a = t[n];
                (o = r(e, a, o)) > -1;) pa.call(e, o, 1);
            return e
        }
        function Or(t, e, n) {
            var r = [];
            if (!t || !t.length) return r;
            var i = -1,
                o = [],
                a = t.length;
            for (e = Fn(e, n, 3); ++i < a;) {
                    var s = t[i];
                    e(s, i, t) && (r.push(s), o.push(i))
                }
            return ze(t, o),
            r
        }
        function Tr(t) {
            return gr(t, 1)
        }
        function jr(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (n && "number" != typeof n && Zn(t, e, n) && (e = 0, n = r), Je(t, e, n)) : []
        }
        function Pr(t, e, n) {
            var r = t ? t.length : 0;
            return r ? ((n ? Zn(t, e, n) : null == e) && (e = 1), Je(t, 0, 0 > e ? 0 : e)) : []
        }
        function Rr(t, e, n) {
            var r = t ? t.length : 0;
            return r ? ((n ? Zn(t, e, n) : null == e) && (e = 1), e = r - (+e || 0), Je(t, 0 > e ? 0 : e)) : []
        }
        function Dr(t, e, n) {
            return t && t.length ? en(t, Fn(e, n, 3), !1, !0) : []
        }
        function Ir(t, e, n) {
            return t && t.length ? en(t, Fn(e, n, 3)) : []
        }
        function Mr(t, e, r, i) {
            var o = t ? t.length : 0;
            if (!o) return [];
            null != e && "boolean" != typeof e && (i = r, r = Zn(t, e, i) ? _ : e, e = !1);
            var a = Fn();
            return (null != r || a !== be) && (r = a(r, i, 3)),
            e && Hn() === n ? m(t, r) : Ze(t, r)
        }
        function Nr(t) {
            if (!t || !t.length) return [];
            var e = -1,
                n = 0;
            t = se(t, function (t) {
                    return Yn(t) ? (n = _a(t.length, n), !0) : void 0
                });
            for (var r = Fo(n); ++e < n;) r[e] = ue(t, He(e));
            return r
        }
        function Ur(t, e, n) {
            var r = t ? t.length : 0;
            if (!r) return [];
            var i = Nr(t);
            return null == e ? i : (e = an(e, n, 4), ue(i, function (t) {
                return le(t, e, _, !0)
            }))
        }
        function qr() {
            for (var t = -1, e = arguments.length; ++t < e;) {
                var n = arguments[t];
                if (Yn(n)) var r = r ? ce(xe(r, n), xe(n, r)) : n
            }
            return r ? Ze(r) : []
        }
        function Br(t, e) {
            var n = -1,
                r = t ? t.length : 0,
                i = {};
            for (!r || e || Os(t[0]) || (e = []); ++n < r;) {
                    var o = t[n];
                    e ? i[o] = e[n] : o && (i[o[0]] = o[1])
                }
            return i
        }
        function Fr(t) {
            var e = J(t);
            return e.__chain__ = !0,
            e
        }
        function Lr(t, e, n) {
            return e.call(n, t),
            t
        }
        function Hr(t, e, n) {
            return e.call(n, t)
        }
        function Vr() {
            return Fr(this)
        }
        function zr() {
            return new tt(this.value(), this.__chain__)
        }
        function Wr(t) {
            for (var e, n = this; n instanceof G;) {
                var r = pr(n);
                e ? i.__wrapped__ = r : e = r;
                var i = r;
                n = n.__wrapped__
            }
            return i.__wrapped__ = t,
            e
        }
        function Kr() {
            var t = this.__wrapped__,
                e = function (t) {
                    return t.reverse()
                };
            if (t instanceof Ft) {
                    var n = t;
                    return this.__actions__.length && (n = new Ft(this)),
                    n = n.reverse(),
                    n.__actions__.push({
                        func: Hr,
                        args: [e],
                        thisArg: _
                    }),
                    new tt(n, this.__chain__)
                }
            return this.thru(e)
        }
        function Jr() {
            return this.value() + ""
        }
        function Xr() {
            return nn(this.__wrapped__, this.__actions__)
        }
        function Qr(t, e, n) {
            var r = Os(t) ? oe : ke;
            return n && Zn(t, e, n) && (e = _),
            ("function" != typeof e || n !== _) && (e = Fn(e, n, 3)),
            r(t, e)
        }
        function Yr(t, e, n) {
            var r = Os(t) ? se : Ae;
            return e = Fn(e, n, 3),
            r(t, e)
        }
        function Gr(t, e) {
            return is(t, qe(e))
        }
        function Zr(t, e, n, r) {
            var i = t ? La(t) : 0;
            return nr(i) || (t = oo(t), i = t.length),
            n = "number" != typeof n || r && Zn(e, n, r) ? 0 : 0 > n ? _a(i + n, 0) : n || 0,
            "string" == typeof t || !Os(t) && Li(t) ? i >= n && t.indexOf(e, n) > -1 : !! i && Hn(t, e, n) > -1
        }
        function ti(t, e, n) {
            var r = Os(t) ? ue : Ue;
            return e = Fn(e, n, 3),
            r(t, e)
        }
        function ei(t, e) {
            return ti(t, Do(e))
        }
        function ni(t, e, n) {
            var r = Os(t) ? se : Ae;
            return e = Fn(e, n, 3),
            r(t, function (t, n, r) {
                return !e(t, n, r)
            })
        }
        function ri(t, e, n) {
            if (n ? Zn(t, e, n) : null == e) {
                t = lr(t);
                var r = t.length;
                return r > 0 ? t[We(0, r - 1)] : _
            }
            var i = -1,
                o = Ki(t),
                r = o.length,
                a = r - 1;
            for (e = xa(0 > e ? 0 : +e || 0, r); ++i < e;) {
                    var s = We(i, a),
                        u = o[s];
                    o[s] = o[i],
                    o[i] = u
                }
            return o.length = e,
            o
        }
        function ii(t) {
            return ri(t, Ea)
        }
        function oi(t) {
            var e = t ? La(t) : 0;
            return nr(e) ? e : Bs(t).length
        }
        function ai(t, e, n) {
            var r = Os(t) ? he : Xe;
            return n && Zn(t, e, n) && (e = _),
            ("function" != typeof e || n !== _) && (e = Fn(e, n, 3)),
            r(t, e)
        }
        function si(t, e, n) {
            if (null == t) return [];
            n && Zn(t, e, n) && (e = _);
            var r = -1;
            e = Fn(e, n, 3);
            var i = Ue(t, function (t, n, i) {
                return {
                    criteria: e(t, n, i),
                    index: ++r,
                    value: t
                }
            });
            return Qe(i, s)
        }
        function ui(t, e, n, r) {
            return null == t ? [] : (r && Zn(e, n, r) && (n = _), Os(e) || (e = null == e ? [] : [e]), Os(n) || (n = null == n ? [] : [n]), Ye(t, e, n))
        }
        function ci(t, e) {
            return Yr(t, qe(e))
        }
        function li(t, e) {
            if ("function" != typeof e) {
                if ("function" != typeof t) throw new Qo(B);
                var n = t;
                t = e,
                e = n
            }
            return t = ba(t = +t) ? t : 0,


            function () {
                return --t < 1 ? e.apply(this, arguments) : void 0
            }
        }
        function fi(t, e, n) {
            return n && Zn(t, e, n) && (e = _),
            e = t && null == e ? t.length : _a(+e || 0, 0),
            Nn(t, j, _, _, _, _, e)
        }
        function hi(t, e) {
            var n;
            if ("function" != typeof e) {
                if ("function" != typeof t) throw new Qo(B);
                var r = t;
                t = e,
                e = r
            }
            return function () {
                return --t > 0 && (n = e.apply(this, arguments)),
                1 >= t && (e = _),
                n
            }
        }
        function pi(t, e, n) {
            function r() {
                p && sa(p),
                c && sa(c),
                v = 0,
                c = p = d = _
            }
            function i(e, n) {
                n && sa(n),
                c = p = d = _,
                e && (v = vs(), l = t.apply(h, u), p || c || (u = h = _))
            }
            function o() {
                var t = e - (vs() - f);
                0 >= t || t > e ? i(d, c) : p = ha(o, t)
            }
            function a() {
                i(m, p)
            }
            function s() {
                if (u = arguments, f = vs(), h = this, d = m && (p || !y), g === !1) var n = y && !p;
                else {
                    c || y || (v = f);
                    var r = g - (f - v),
                        i = 0 >= r || r > g;
                    i ? (c && (c = sa(c)), v = f, l = t.apply(h, u)) : c || (c = ha(a, r))
                }
                return i && p ? p = sa(p) : p || e === g || (p = ha(o, e)),
                n && (i = !0, l = t.apply(h, u)),
                !i || p || c || (u = h = _),
                l
            }
            var u, c, l, f, h, p, d, v = 0,
                g = !1,
                m = !0;
            if ("function" != typeof t) throw new Qo(B);
            if (e = 0 > e ? 0 : +e || 0, n === !0) {
                    var y = !0;
                    m = !1
                } else Di(n) && (y = !! n.leading, g = "maxWait" in n && _a(+n.maxWait || 0, e), m = "trailing" in n ? !! n.trailing : m);
            return s.cancel = r,
            s
        }
        function di(t, e) {
            if ("function" != typeof t || e && "function" != typeof e) throw new Qo(B);
            var n = function () {
                var r = arguments,
                    i = e ? e.apply(this, r) : r[0],
                    o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = t.apply(this, r);
                return n.cache = o.set(i, a),
                a
            };
            return n.cache = new di.Cache,
            n
        }
        function vi(t) {
            if ("function" != typeof t) throw new Qo(B);
            return function () {
                return !t.apply(this, arguments)
            }
        }
        function gi(t) {
            return hi(2, t)
        }
        function mi(t, e) {
            if ("function" != typeof t) throw new Qo(B);
            return e = _a(e === _ ? t.length - 1 : +e || 0, 0),


            function () {
                for (var n = arguments, r = -1, i = _a(n.length - e, 0), o = Fo(i); ++r < i;) o[r] = n[e + r];
                switch (e) {
                case 0:
                    return t.call(this, o);
                case 1:
                    return t.call(this, n[0], o);
                case 2:
                    return t.call(this, n[0], n[1], o)
                }
                var a = Fo(e + 1);
                for (r = -1; ++r < e;) a[r] = n[r];
                return a[e] = o,
                t.apply(this, a)
            }
        }
        function yi(t) {
            if ("function" != typeof t) throw new Qo(B);
            return function (e) {
                return t.apply(this, e)
            }
        }
        function $i(t, e, n) {
            var r = !0,
                i = !0;
            if ("function" != typeof t) throw new Qo(B);
            return n === !1 ? r = !1 : Di(n) && (r = "leading" in n ? !! n.leading : r, i = "trailing" in n ? !! n.trailing : i),
            pi(t, e, {
                    leading: r,
                    maxWait: +e,
                    trailing: i
                })
        }
        function bi(t, e) {
            return e = null == e ? Eo : e,
            Nn(e, O, _, [t], [])
        }
        function wi(t, e, n, r) {
            return e && "boolean" != typeof e && Zn(t, e, n) ? e = !1 : "function" == typeof e && (r = n, n = e, e = !1),
            "function" == typeof n ? we(t, e, an(n, r, 3)) : we(t, e)
        }
        function _i(t, e, n) {
            return "function" == typeof e ? we(t, !0, an(e, n, 3)) : we(t, !0)
        }
        function xi(t, e) {
            return t > e
        }
        function ki(t, e) {
            return t >= e
        }
        function Ci(t) {
            return d(t) && Yn(t) && ea.call(t, "callee") && !la.call(t, "callee")
        }
        function Si(t) {
            return t === !0 || t === !1 || d(t) && ra.call(t) == V
        }
        function Ai(t) {
            return d(t) && ra.call(t) == z
        }
        function Ei(t) {
            return !!t && 1 === t.nodeType && d(t) && !Bi(t)
        }
        function Oi(t) {
            return null == t ? !0 : Yn(t) && (Os(t) || Li(t) || Ci(t) || d(t) && Ri(t.splice)) ? !t.length : !Bs(t).length
        }
        function Ti(t, e, n, r) {
            n = "function" == typeof n ? an(n, r, 3) : _;
            var i = n ? n(t, e) : _;
            return i === _ ? Ie(t, e, n) : !! i
        }
        function ji(t) {
            return d(t) && "string" == typeof t.message && ra.call(t) == W
        }
        function Pi(t) {
            return "number" == typeof t && ba(t)
        }
        function Ri(t) {
            return Di(t) && ra.call(t) == K
        }
        function Di(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }
        function Ii(t, e, n, r) {
            return n = "function" == typeof n ? an(n, r, 3) : _,
            Ne(t, Vn(e), n)
        }
        function Mi(t) {
            return qi(t) && t != +t
        }
        function Ni(t) {
            return null == t ? !1 : Ri(t) ? oa.test(ta.call(t)) : d(t) && jt.test(t)
        }
        function Ui(t) {
            return null === t
        }
        function qi(t) {
            return "number" == typeof t || d(t) && ra.call(t) == X
        }
        function Bi(t) {
            var e;
            if (!d(t) || ra.call(t) != Q || Ci(t) || !ea.call(t, "constructor") && (e = t.constructor, "function" == typeof e && !(e instanceof e))) return !1;
            var n;
            return Te(t, function (t, e) {
                n = e
            }),
            n === _ || ea.call(t, n)
        }
        function Fi(t) {
            return Di(t) && ra.call(t) == Y
        }
        function Li(t) {
            return "string" == typeof t || d(t) && ra.call(t) == Z
        }
        function Hi(t) {
            return d(t) && nr(t.length) && !! qt[ra.call(t)]
        }
        function Vi(t) {
            return t === _
        }
        function zi(t, e) {
            return e > t
        }
        function Wi(t, e) {
            return e >= t
        }
        function Ki(t) {
            var e = t ? La(t) : 0;
            return nr(e) ? e ? ne(t) : [] : oo(t)
        }
        function Ji(t) {
            return $e(t, to(t))
        }
        function Xi(t, e, n) {
            var r = Ia(t);
            return n && Zn(t, e, n) && (e = _),
            e ? me(r, e) : r
        }
        function Qi(t) {
            return Re(t, to(t))
        }
        function Yi(t, e, n) {
            var r = null == t ? _ : De(t, hr(e), e + "");
            return r === _ ? n : r
        }
        function Gi(t, e) {
            if (null == t) return !1;
            var n = ea.call(t, e);
            if (!n && !tr(e)) {
                if (e = hr(e), t = 1 == e.length ? t : De(t, Je(e, 0, -1)), null == t) return !1;
                e = Sr(e),
                n = ea.call(t, e)
            }
            return n || nr(t.length) && Gn(e, t.length) && (Os(t) || Ci(t))
        }
        function Zi(t, e, n) {
            n && Zn(t, e, n) && (e = _);
            for (var r = -1, i = Bs(t), o = i.length, a = {}; ++r < o;) {
                var s = i[r],
                    u = t[s];
                e ? ea.call(a, u) ? a[u].push(s) : a[u] = [s] : a[u] = s
            }
            return a
        }
        function to(t) {
            if (null == t) return [];
            Di(t) || (t = Ko(t));
            var e = t.length;
            e = e && nr(e) && (Os(t) || Ci(t)) && e || 0;
            for (var n = t.constructor, r = -1, i = "function" == typeof n && n.prototype === t, o = Fo(e), a = e > 0; ++r < e;) o[r] = r + "";
            for (var s in t) a && Gn(s, e) || "constructor" == s && (i || !ea.call(t, s)) || o.push(s);
            return o
        }
        function eo(t) {
            t = fr(t);
            for (var e = -1, n = Bs(t), r = n.length, i = Fo(r); ++e < r;) {
                var o = n[e];
                i[e] = [o, t[o]]
            }
            return i
        }
        function no(t, e, n) {
            var r = null == t ? _ : t[e];
            return r === _ && (null == t || tr(e, t) || (e = hr(e), t = 1 == e.length ? t : De(t, Je(e, 0, -1)), r = null == t ? _ : t[Sr(e)]), r = r === _ ? n : r),
            Ri(r) ? r.call(t) : r
        }
        function ro(t, e, n) {
            if (null == t) return t;
            var r = e + "";
            e = null != t[r] || tr(e, t) ? [r] : hr(e);
            for (var i = -1, o = e.length, a = o - 1, s = t; null != s && ++i < o;) {
                var u = e[i];
                Di(s) && (i == a ? s[u] = n : null == s[u] && (s[u] = Gn(e[i + 1]) ? [] : {})),
                s = s[u]
            }
            return t
        }
        function io(t, e, n, r) {
            var i = Os(t) || Hi(t);
            if (e = Fn(e, r, 4), null == n) if (i || Di(t)) {
                var o = t.constructor;
                n = i ? Os(t) ? new o : [] : Ia(Ri(o) ? o.prototype : _)
            } else n = {};
            return (i ? re : je)(t, function (t, r, i) {
                return e(n, t, r, i)
            }),
            n
        }
        function oo(t) {
            return tn(t, Bs(t))
        }
        function ao(t) {
            return tn(t, to(t))
        }
        function so(t, e, n) {
            return e = +e || 0,
            n === _ ? (n = e, e = 0) : n = +n || 0,
            t >= xa(e, n) && t < _a(e, n)
        }
        function uo(t, e, n) {
            n && Zn(t, e, n) && (e = n = _);
            var r = null == t,
                i = null == e;
            if (null == n && (i && "boolean" == typeof t ? (n = t, t = 1) : "boolean" == typeof e && (n = e, i = !0)), r && i && (e = 1, i = !1), t = +t || 0, i ? (e = t, t = 0) : e = +e || 0, n || t % 1 || e % 1) {
                    var o = Sa();
                    return xa(t + o * (e - t + ua("1e-" + ((o + "").length - 1))), e)
                }
            return We(t, e)
        }
        function co(t) {
            return t = i(t),
            t && t.charAt(0).toUpperCase() + t.slice(1)
        }
        function lo(t) {
            return t = i(t),
            t && t.replace(Rt, c).replace(St, "")
        }
        function fo(t, e, n) {
            t = i(t),
            e += "";
            var r = t.length;
            return n = n === _ ? r : xa(0 > n ? 0 : +n || 0, r),
            n -= e.length,
            n >= 0 && t.indexOf(e, n) == n
        }
        function ho(t) {
            return t = i(t),
            t && mt.test(t) ? t.replace(vt, l) : t
        }
        function po(t) {
            return t = i(t),
            t && Ct.test(t) ? t.replace(kt, f) : t || "(?:)"
        }
        function vo(t, e, n) {
            t = i(t),
            e = +e;
            var r = t.length;
            if (r >= e || !ba(e)) return t;
            var o = (e - r) / 2,
                a = ya(o),
                s = ga(o);
            return n = Rn("", s, n),
            n.slice(0, a) + t + n
        }
        function go(t, e, n) {
            return (n ? Zn(t, e, n) : null == e) ? e = 0 : e && (e = +e),
            t = bo(t),
            Ca(t, e || (Tt.test(t) ? 16 : 10))
        }
        function mo(t, e) {
            var n = "";
            if (t = i(t), e = +e, 1 > e || !t || !ba(e)) return n;
            do e % 2 && (n += t),
            e = ya(e / 2),
            t += t;
            while (e);
            return n
        }
        function yo(t, e, n) {
            return t = i(t),
            n = null == n ? 0 : xa(0 > n ? 0 : +n || 0, t.length),
            t.lastIndexOf(e, n) == n
        }
        function $o(t, e, n) {
            var r = J.templateSettings;
            n && Zn(t, e, n) && (e = n = _),
            t = i(t),
            e = ge(me({}, n || e), r, ve);
            var o, a, s = ge(me({}, e.imports), r.imports, ve),
                u = Bs(s),
                c = tn(s, u),
                l = 0,
                f = e.interpolate || Dt,
                p = "__p += '",
                d = Jo((e.escape || Dt).source + "|" + f.source + "|" + (f === bt ? Et : Dt).source + "|" + (e.evaluate || Dt).source + "|$", "g"),
                v = "//# sourceURL=" + ("sourceURL" in e ? e.sourceURL : "lodash.templateSources[" + ++Ut + "]") + "\n";
            t.replace(d, function (e, n, r, i, s, u) {
                    return r || (r = i),
                    p += t.slice(l, u).replace(It, h),
                    n && (o = !0, p += "' +\n__e(" + n + ") +\n'"),
                    s && (a = !0, p += "';\n" + s + ";\n__p += '"),
                    r && (p += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                    l = u + e.length,
                    e
                }),
            p += "';\n";
            var g = e.variable;
            g || (p = "with (obj) {\n" + p + "\n}\n"),
            p = (a ? p.replace(ft, "") : p).replace(ht, "$1").replace(pt, "$1;"),
            p = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
            var m = Ys(function () {
                    return Vo(u, v + "return " + p).apply(_, c);

                });
            if (m.source = p, ji(m)) throw m;
            return m
        }
        function bo(t, e, n) {
            var r = t;
            return (t = i(t)) ? (n ? Zn(r, e, n) : null == e) ? t.slice(y(t), $(t) + 1) : (e += "", t.slice(o(t, e), a(t, e) + 1)) : t
        }
        function wo(t, e, n) {
            var r = t;
            return t = i(t),
            t ? t.slice((n ? Zn(r, e, n) : null == e) ? y(t) : o(t, e + "")) : t
        }
        function _o(t, e, n) {
            var r = t;
            return t = i(t),
            t ? (n ? Zn(r, e, n) : null == e) ? t.slice(0, $(t) + 1) : t.slice(0, a(t, e + "") + 1) : t
        }
        function xo(t, e, n) {
            n && Zn(t, e, n) && (e = _);
            var r = R,
                o = D;
            if (null != e) if (Di(e)) {
                    var a = "separator" in e ? e.separator : a;
                    r = "length" in e ? +e.length || 0 : r,
                    o = "omission" in e ? i(e.omission) : o
                } else r = +e || 0;
            if (t = i(t), r >= t.length) return t;
            var s = r - o.length;
            if (1 > s) return o;
            var u = t.slice(0, s);
            if (null == a) return u + o;
            if (Fi(a)) {
                    if (t.slice(s).search(a)) {
                        var c, l, f = t.slice(0, s);
                        for (a.global || (a = Jo(a.source, (Ot.exec(a) || "") + "g")), a.lastIndex = 0; c = a.exec(f);) l = c.index;
                        u = u.slice(0, null == l ? s : l)
                    }
                } else if (t.indexOf(a, s) != s) {
                    var h = u.lastIndexOf(a);
                    h > -1 && (u = u.slice(0, h))
                }
            return u + o
        }
        function ko(t) {
            return t = i(t),
            t && gt.test(t) ? t.replace(dt, b) : t
        }
        function Co(t, e, n) {
            return n && Zn(t, e, n) && (e = _),
            t = i(t),
            t.match(e || Mt) || []
        }
        function So(t, e, n) {
            return n && Zn(t, e, n) && (e = _),
            d(t) ? Oo(t) : be(t, e)
        }
        function Ao(t) {
            return function () {
                return t
            }
        }
        function Eo(t) {
            return t
        }
        function Oo(t) {
            return qe(we(t, !0))
        }
        function To(t, e) {
            return Be(t, we(e, !0))
        }
        function jo(t, e, n) {
            if (null == n) {
                var r = Di(e),
                    i = r ? Bs(e) : _,
                    o = i && i.length ? Re(e, i) : _;
                    (o ? o.length : r) || (o = !1, n = e, e = t, t = this)
            }
            o || (o = Re(e, Bs(e)));
            var a = !0,
                s = -1,
                u = Ri(t),
                c = o.length;
            n === !1 ? a = !1 : Di(n) && "chain" in n && (a = n.chain);
            for (; ++s < c;) {
                    var l = o[s],
                        f = e[l];
                    t[l] = f,
                    u && (t.prototype[l] = function (e) {
                            return function () {
                                var n = this.__chain__;
                                if (a || n) {
                                    var r = t(this.__wrapped__),
                                        i = r.__actions__ = ne(this.__actions__);
                                    return i.push({
                                            func: e,
                                            args: arguments,
                                            thisArg: t
                                        }),
                                    r.__chain__ = n,
                                    r
                                }
                                return e.apply(t, ce([this.value()], arguments))
                            }
                        }(f))
                }
            return t
        }
        function Po() {
            return Zt._ = ia,
            this
        }
        function Ro() {}
        function Do(t) {
            return tr(t) ? He(t) : Ve(t)
        }
        function Io(t) {
            return function (e) {
                return De(t, hr(e), e + "")
            }
        }
        function Mo(t, e, n) {
            n && Zn(t, e, n) && (e = n = _),
            t = +t || 0,
            n = null == n ? 1 : +n || 0,
            null == e ? (e = t, t = 0) : e = +e || 0;
            for (var r = -1, i = _a(ga((e - t) / (n || 1)), 0), o = Fo(i); ++r < i;) o[r] = t,
            t += n;
            return o
        }
        function No(t, e, n) {
            if (t = ya(t), 1 > t || !ba(t)) return [];
            var r = -1,
                i = Fo(xa(t, Oa));
            for (e = an(e, n, 1); ++r < t;) Oa > r ? i[r] = e(r) : e(r);
            return i
        }
        function Uo(t) {
            var e = ++na;
            return i(t) + e
        }
        function qo(t, e) {
            return (+t || 0) + (+e || 0)
        }
        function Bo(t, e, n) {
            return n && Zn(t, e, n) && (e = _),
            e = Fn(e, n, 3),
            1 == e.length ? pe(Os(t) ? t : lr(t), e) : Ge(t, e)
        }
        v = v ? te.defaults(Zt.Object(), v, te.pick(Zt, Nt)) : Zt; {
            var Fo = v.Array,
                Lo = v.Date,
                Ho = v.Error,
                Vo = v.Function,
                zo = v.Math,
                Wo = v.Number,
                Ko = v.Object,
                Jo = v.RegExp,
                Xo = v.String,
                Qo = v.TypeError,
                Yo = Fo.prototype,
                Go = Ko.prototype,
                Zo = Xo.prototype,
                ta = Vo.prototype.toString,
                ea = Go.hasOwnProperty,
                na = 0,
                ra = Go.toString,
                ia = Zt._,
                oa = Jo("^" + ta.call(ea).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                aa = v.ArrayBuffer,
                sa = v.clearTimeout,
                ua = v.parseFloat,
                ca = zo.pow,
                la = Go.propertyIsEnumerable,
                fa = zn(v, "Set"),
                ha = v.setTimeout,
                pa = Yo.splice,
                da = v.Uint8Array,
                va = zn(v, "WeakMap"),
                ga = zo.ceil,
                ma = zn(Ko, "create"),
                ya = zo.floor,
                $a = zn(Fo, "isArray"),
                ba = v.isFinite,
                wa = zn(Ko, "keys"),
                _a = zo.max,
                xa = zo.min,
                ka = zn(Lo, "now"),
                Ca = v.parseInt,
                Sa = zo.random,
                Aa = Wo.NEGATIVE_INFINITY,
                Ea = Wo.POSITIVE_INFINITY,
                Oa = 4294967295,
                Ta = Oa - 1,
                ja = Oa >>> 1,
                Pa = 9007199254740991,
                Ra = va && new va,
                Da = {};
            J.support = {}
        }
        J.templateSettings = {
            escape: yt,
            evaluate: $t,
            interpolate: bt,
            variable: "",
            imports: {
                _: J
            }
        };
        var Ia = function () {
            function t() {}
            return function (e) {
                if (Di(e)) {
                    t.prototype = e;
                    var n = new t;
                    t.prototype = _
                }
                return n || {}
            }
        }(),
            Ma = hn(je),
            Na = hn(Pe, !0),
            Ua = pn(),
            qa = pn(!0),
            Ba = Ra ?
        function (t, e) {
                return Ra.set(t, e),
                t
            } : Eo,
            Fa = Ra ?
        function (t) {
                return Ra.get(t)
            } : Ro,
            La = He("length"),
            Ha = function () {
                var t = 0,
                    e = 0;
                return function (n, r) {
                        var i = vs(),
                            o = M - (i - e);
                        if (e = i, o > 0) {
                                if (++t >= I) return n
                            } else t = 0;
                        return Ba(n, r)
                    }
            }(),
            Va = mi(function (t, e) {
                return d(t) && Yn(t) ? xe(t, Oe(e, !1, !0)) : []
            }),
            za = _n(),
            Wa = _n(!0),
            Ka = mi(function (t) {
                for (var e = t.length, r = e, i = Fo(f), o = Hn(), a = o === n, s = []; r--;) {
                    var u = t[r] = Yn(u = t[r]) ? u : [];
                    i[r] = a && u.length >= 120 ? vn(r && u) : null
                }
                var c = t[0],
                    l = -1,
                    f = c ? c.length : 0,
                    h = i[0];
                t: for (; ++l < f;) if (u = c[l], (h ? Yt(h, u) : o(s, u, 0)) < 0) {
                        for (var r = e; --r;) {
                            var p = i[r];
                            if ((p ? Yt(p, u) : o(t[r], u, 0)) < 0) continue t
                        }
                        h && h.push(u),
                        s.push(u)
                    }
                return s
            }),
            Ja = mi(function (e, n) {
                n = Oe(n);
                var r = ye(e, n);
                return ze(e, n.sort(t)),
                r
            }),
            Xa = Mn(),
            Qa = Mn(!0),
            Ya = mi(function (t) {
                return Ze(Oe(t, !1, !0))
            }),
            Ga = mi(function (t, e) {
                return Yn(t) ? xe(t, e) : []
            }),
            Za = mi(Nr),
            ts = mi(function (t) {
                var e = t.length,
                    n = e > 2 ? t[e - 2] : _,
                    r = e > 1 ? t[e - 1] : _;
                return e > 2 && "function" == typeof n ? e -= 2 : (n = e > 1 && "function" == typeof r ? (--e, r) : _, r = _),
                t.length = e,
                Ur(t, n, r)
            }),
            es = mi(function (t) {
                return t = Oe(t),
                this.thru(function (e) {
                    return ee(Os(e) ? e : [fr(e)], t)
                })
            }),
            ns = mi(function (t, e) {
                return ye(t, Oe(e))
            }),
            rs = ln(function (t, e, n) {
                ea.call(t, n) ? ++t[n] : t[n] = 1
            }),
            is = wn(Ma),
            os = wn(Na, !0),
            as = Cn(re, Ma),
            ss = Cn(ie, Na),
            us = ln(function (t, e, n) {
                ea.call(t, n) ? t[n].push(e) : t[n] = [e]
            }),
            cs = ln(function (t, e, n) {
                t[n] = e
            }),
            ls = mi(function (t, e, n) {
                var r = -1,
                    i = "function" == typeof e,
                    o = tr(e),
                    a = Yn(t) ? Fo(t.length) : [];
                return Ma(t, function (t) {
                        var s = i ? e : o && null != t ? t[e] : _;
                        a[++r] = s ? s.apply(t, n) : Qn(t, e, n)
                    }),
                a
            }),
            fs = ln(function (t, e, n) {
                t[n ? 0 : 1].push(e)
            }, function () {
                return [[], []]
            }),
            hs = jn(le, Ma),
            ps = jn(fe, Na),
            ds = mi(function (t, e) {
                if (null == t) return [];
                var n = e[2];
                return n && Zn(e[0], e[1], n) && (e.length = 1),
                Ye(t, Oe(e), [])
            }),
            vs = ka ||
        function () {
                return (new Lo).getTime()
            },
            gs = mi(function (t, e, n) {
                var r = k;
                if (n.length) {
                    var i = g(n, gs.placeholder);
                    r |= O
                }
                return Nn(t, r, e, n, i)
            }),
            ms = mi(function (t, e) {
                e = e.length ? Oe(e) : Qi(t);
                for (var n = -1, r = e.length; ++n < r;) {
                    var i = e[n];
                    t[i] = Nn(t[i], k, t)
                }
                return t
            }),
            ys = mi(function (t, e, n) {
                var r = k | C;
                if (n.length) {
                    var i = g(n, ys.placeholder);
                    r |= O
                }
                return Nn(e, r, t, n, i)
            }),
            $s = yn(A),
            bs = yn(E),
            ws = mi(function (t, e) {
                return _e(t, 1, e)
            }),
            _s = mi(function (t, e, n) {
                return _e(t, e, n)
            }),
            xs = kn(),
            ks = kn(!0),
            Cs = mi(function (t, e) {
                if (e = Oe(e), "function" != typeof t || !oe(e, r)) throw new Qo(B);
                var n = e.length;
                return mi(function (r) {
                    for (var i = xa(r.length, n); i--;) r[i] = e[i](r[i]);
                    return t.apply(this, r)
                })
            }),
            Ss = Tn(O),
            As = Tn(T),
            Es = mi(function (t, e) {
                return Nn(t, P, _, _, _, Oe(e))
            }),
            Os = $a ||
        function (t) {
                return d(t) && nr(t.length) && ra.call(t) == H
            },
            Ts = fn(Fe),
            js = fn(function (t, e, n) {
                return n ? ge(t, e, n) : me(t, e)
            }),
            Ps = $n(js, de),
            Rs = $n(Ts, or),
            Ds = xn(je),
            Is = xn(Pe),
            Ms = Sn(Ua),
            Ns = Sn(qa),
            Us = An(je),
            qs = An(Pe),
            Bs = wa ?
        function (t) {
                var e = null == t ? _ : t.constructor;
                return "function" == typeof e && e.prototype === t || "function" != typeof t && Yn(t) ? cr(t) : Di(t) ? wa(t) : []
            } : cr,
            Fs = En(!0),
            Ls = En(),
            Hs = mi(function (t, e) {
                if (null == t) return {};
                if ("function" != typeof e[0]) {
                    var e = ue(Oe(e), Xo);
                    return ar(t, xe(to(t), e))
                }
                var n = an(e[0], e[1], 3);
                return sr(t, function (t, e, r) {
                    return !n(t, e, r)
                })
            }),
            Vs = mi(function (t, e) {
                return null == t ? {} : "function" == typeof e[0] ? sr(t, an(e[0], e[1], 3)) : ar(t, Oe(e))
            }),
            zs = gn(function (t, e, n) {
                return e = e.toLowerCase(),
                t + (n ? e.charAt(0).toUpperCase() + e.slice(1) : e)
            }),
            Ws = gn(function (t, e, n) {
                return t + (n ? "-" : "") + e.toLowerCase()
            }),
            Ks = On(),
            Js = On(!0),
            Xs = gn(function (t, e, n) {
                return t + (n ? "_" : "") + e.toLowerCase()
            }),
            Qs = gn(function (t, e, n) {
                return t + (n ? " " : "") + (e.charAt(0).toUpperCase() + e.slice(1))
            }),
            Ys = mi(function (t, e) {
                try {
                    return t.apply(_, e)
                } catch (n) {
                    return ji(n) ? n : new Ho(n)
                }
            }),
            Gs = mi(function (t, e) {
                return function (n) {
                    return Qn(n, t, e)
                }
            }),
            Zs = mi(function (t, e) {
                return function (n) {
                    return Qn(t, n, e)
                }
            }),
            tu = In("ceil"),
            eu = In("floor"),
            nu = bn(xi, Aa),
            ru = bn(zi, Ea),
            iu = In("round");
        return J.prototype = G.prototype,
        tt.prototype = Ia(G.prototype),
        tt.prototype.constructor = tt,
        Ft.prototype = Ia(G.prototype),
        Ft.prototype.constructor = Ft,
        zt.prototype["delete"] = Wt,
        zt.prototype.get = Kt,
        zt.prototype.has = Jt,
        zt.prototype.set = Xt,
        Qt.prototype.push = Gt,
        di.Cache = zt,
        J.after = li,
        J.ary = fi,
        J.assign = js,
        J.at = ns,
        J.before = hi,
        J.bind = gs,
        J.bindAll = ms,
        J.bindKey = ys,
        J.callback = So,
        J.chain = Fr,
        J.chunk = dr,
        J.compact = vr,
        J.constant = Ao,
        J.countBy = rs,
        J.create = Xi,
        J.curry = $s,
        J.curryRight = bs,
        J.debounce = pi,
        J.defaults = Ps,
        J.defaultsDeep = Rs,
        J.defer = ws,
        J.delay = _s,
        J.difference = Va,
        J.drop = gr,
        J.dropRight = mr,
        J.dropRightWhile = yr,
        J.dropWhile = $r,
        J.fill = br,
        J.filter = Yr,
        J.flatten = _r,
        J.flattenDeep = xr,
        J.flow = xs,
        J.flowRight = ks,
        J.forEach = as,
        J.forEachRight = ss,
        J.forIn = Ms,
        J.forInRight = Ns,
        J.forOwn = Us,
        J.forOwnRight = qs,
        J.functions = Qi,
        J.groupBy = us,
        J.indexBy = cs,
        J.initial = Cr,
        J.intersection = Ka,
        J.invert = Zi,
        J.invoke = ls,
        J.keys = Bs,
        J.keysIn = to,
        J.map = ti,
        J.mapKeys = Fs,
        J.mapValues = Ls,
        J.matches = Oo,
        J.matchesProperty = To,
        J.memoize = di,
        J.merge = Ts,
        J.method = Gs,
        J.methodOf = Zs,
        J.mixin = jo,
        J.modArgs = Cs,
        J.negate = vi,
        J.omit = Hs,
        J.once = gi,
        J.pairs = eo,
        J.partial = Ss,
        J.partialRight = As,
        J.partition = fs,
        J.pick = Vs,
        J.pluck = ei,
        J.property = Do,
        J.propertyOf = Io,
        J.pull = Er,
        J.pullAt = Ja,
        J.range = Mo,
        J.rearg = Es,
        J.reject = ni,
        J.remove = Or,
        J.rest = Tr,
        J.restParam = mi,
        J.set = ro,
        J.shuffle = ii,
        J.slice = jr,
        J.sortBy = si,
        J.sortByAll = ds,
        J.sortByOrder = ui,
        J.spread = yi,
        J.take = Pr,
        J.takeRight = Rr,
        J.takeRightWhile = Dr,
        J.takeWhile = Ir,
        J.tap = Lr,
        J.throttle = $i,
        J.thru = Hr,
        J.times = No,
        J.toArray = Ki,
        J.toPlainObject = Ji,
        J.transform = io,
        J.union = Ya,
        J.uniq = Mr,
        J.unzip = Nr,
        J.unzipWith = Ur,
        J.values = oo,
        J.valuesIn = ao,
        J.where = ci,
        J.without = Ga,
        J.wrap = bi,
        J.xor = qr,
        J.zip = Za,
        J.zipObject = Br,
        J.zipWith = ts,
        J.backflow = ks,
        J.collect = ti,
        J.compose = ks,
        J.each = as,
        J.eachRight = ss,
        J.extend = js,
        J.iteratee = So,
        J.methods = Qi,
        J.object = Br,
        J.select = Yr,
        J.tail = Tr,
        J.unique = Mr,
        jo(J, J),
        J.add = qo,
        J.attempt = Ys,
        J.camelCase = zs,
        J.capitalize = co,
        J.ceil = tu,
        J.clone = wi,
        J.cloneDeep = _i,
        J.deburr = lo,
        J.endsWith = fo,
        J.escape = ho,
        J.escapeRegExp = po,
        J.every = Qr,
        J.find = is,
        J.findIndex = za,
        J.findKey = Ds,
        J.findLast = os,
        J.findLastIndex = Wa,
        J.findLastKey = Is,
        J.findWhere = Gr,
        J.first = wr,
        J.floor = eu,
        J.get = Yi,
        J.gt = xi,
        J.gte = ki,
        J.has = Gi,
        J.identity = Eo,
        J.includes = Zr,
        J.indexOf = kr,
        J.inRange = so,
        J.isArguments = Ci,
        J.isArray = Os,
        J.isBoolean = Si,
        J.isDate = Ai,
        J.isElement = Ei,
        J.isEmpty = Oi,
        J.isEqual = Ti,
        J.isError = ji,
        J.isFinite = Pi,
        J.isFunction = Ri,
        J.isMatch = Ii,
        J.isNaN = Mi,
        J.isNative = Ni,
        J.isNull = Ui,
        J.isNumber = qi,
        J.isObject = Di,
        J.isPlainObject = Bi,
        J.isRegExp = Fi,
        J.isString = Li,
        J.isTypedArray = Hi,
        J.isUndefined = Vi,
        J.kebabCase = Ws,
        J.last = Sr,
        J.lastIndexOf = Ar,
        J.lt = zi,
        J.lte = Wi,
        J.max = nu,
        J.min = ru,
        J.noConflict = Po,
        J.noop = Ro,
        J.now = vs,
        J.pad = vo,
        J.padLeft = Ks,
        J.padRight = Js,
        J.parseInt = go,
        J.random = uo,
        J.reduce = hs,
        J.reduceRight = ps,
        J.repeat = mo,
        J.result = no,
        J.round = iu,
        J.runInContext = w,
        J.size = oi,
        J.snakeCase = Xs,
        J.some = ai,
        J.sortedIndex = Xa,
        J.sortedLastIndex = Qa,
        J.startCase = Qs,
        J.startsWith = yo,
        J.sum = Bo,
        J.template = $o,
        J.trim = bo,
        J.trimLeft = wo,
        J.trimRight = _o,
        J.trunc = xo,
        J.unescape = ko,
        J.uniqueId = Uo,
        J.words = Co,
        J.all = Qr,
        J.any = ai,
        J.contains = Zr,
        J.eq = Ti,
        J.detect = is,
        J.foldl = hs,
        J.foldr = ps,
        J.head = wr,
        J.include = Zr,
        J.inject = hs,
        jo(J, function () {
                var t = {};
                return je(J, function (e, n) {
                    J.prototype[n] || (t[n] = e)
                }),
                t
            }(), !1),
        J.sample = ri,
        J.prototype.sample = function (t) {
                return this.__chain__ || null != t ? this.thru(function (e) {
                    return ri(e, t)
                }) : ri(this.value())
            },
        J.VERSION = x,
        re(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
                J[t].placeholder = J
            }),
        re(["drop", "take"], function (t, e) {
                Ft.prototype[t] = function (n) {
                    var r = this.__filtered__;
                    if (r && !e) return new Ft(this);
                    n = null == n ? 1 : _a(ya(n) || 0, 0);
                    var i = this.clone();
                    return r ? i.__takeCount__ = xa(i.__takeCount__, n) : i.__views__.push({
                        size: n,
                        type: t + (i.__dir__ < 0 ? "Right" : "")
                    }),
                    i
                },
                Ft.prototype[t + "Right"] = function (e) {
                    return this.reverse()[t](e).reverse()
                }
            }),
        re(["filter", "map", "takeWhile"], function (t, e) {
                var n = e + 1,
                    r = n != q;
                Ft.prototype[t] = function (t, e) {
                        var i = this.clone();
                        return i.__iteratees__.push({
                            iteratee: Fn(t, e, 1),
                            type: n
                        }),
                        i.__filtered__ = i.__filtered__ || r,
                        i
                    }
            }),
        re(["first", "last"], function (t, e) {
                var n = "take" + (e ? "Right" : "");
                Ft.prototype[t] = function () {
                    return this[n](1).value()[0]
                }
            }),
        re(["initial", "rest"], function (t, e) {
                var n = "drop" + (e ? "" : "Right");
                Ft.prototype[t] = function () {
                    return this.__filtered__ ? new Ft(this) : this[n](1)
                }
            }),
        re(["pluck", "where"], function (t, e) {
                var n = e ? "filter" : "map",
                    r = e ? qe : Do;
                Ft.prototype[t] = function (t) {
                        return this[n](r(t))
                    }
            }),
        Ft.prototype.compact = function () {
                return this.filter(Eo)
            },
        Ft.prototype.reject = function (t, e) {
                return t = Fn(t, e, 1),
                this.filter(function (e) {
                    return !t(e)
                })
            },
        Ft.prototype.slice = function (t, e) {
                t = null == t ? 0 : +t || 0;
                var n = this;
                return n.__filtered__ && (t > 0 || 0 > e) ? new Ft(n) : (0 > t ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== _ && (e = +e || 0, n = 0 > e ? n.dropRight(-e) : n.take(e - t)), n)
            },
        Ft.prototype.takeRightWhile = function (t, e) {
                return this.reverse().takeWhile(t, e).reverse()
            },
        Ft.prototype.toArray = function () {
                return this.take(Ea)
            },
        je(Ft.prototype, function (t, e) {
                var n = /^(?:filter|map|reject)|While$/.test(e),
                    r = /^(?:first|last)$/.test(e),
                    i = J[r ? "take" + ("last" == e ? "Right" : "") : e];
                i && (J.prototype[e] = function () {
                        var e = r ? [1] : arguments,
                            o = this.__chain__,
                            a = this.__wrapped__,
                            s = !! this.__actions__.length,
                            u = a instanceof Ft,
                            c = e[0],
                            l = u || Os(a);
                        l && n && "function" == typeof c && 1 != c.length && (u = l = !1);
                        var f = function (t) {
                                return r && o ? i(t, 1)[0] : i.apply(_, ce([t], e))
                            },
                            h = {
                                func: Hr,
                                args: [f],
                                thisArg: _
                            },
                            p = u && !s;
                        if (r && !o) return p ? (a = a.clone(), a.__actions__.push(h), t.call(a)) : i.call(_, this.value())[0];
                        if (!r && l) {
                                a = p ? a : new Ft(this);
                                var d = t.apply(a, e);
                                return d.__actions__.push(h),
                                new tt(d, o)
                            }
                        return this.thru(f)
                    })
            }),
        re(["join", "pop", "push", "replace", "shift", "sort", "splice", "split", "unshift"], function (t) {
                var e = (/^(?:replace|split)$/.test(t) ? Zo : Yo)[t],
                    n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                    r = /^(?:join|pop|replace|shift)$/.test(t);
                J.prototype[t] = function () {
                        var t = arguments;
                        return r && !this.__chain__ ? e.apply(this.value(), t) : this[n](function (n) {
                            return e.apply(n, t)
                        })
                    }
            }),
        je(Ft.prototype, function (t, e) {
                var n = J[e];
                if (n) {
                    var r = n.name + "",
                        i = Da[r] || (Da[r] = []);
                    i.push({
                            name: e,
                            func: n
                        })
                }
            }),
        Da[Pn(_, C).name] = [{
                name: "wrapper",
                func: _
            }],
        Ft.prototype.clone = Lt,
        Ft.prototype.reverse = Ht,
        Ft.prototype.value = Vt,
        J.prototype.chain = Vr,
        J.prototype.commit = zr,
        J.prototype.concat = es,
        J.prototype.plant = Wr,
        J.prototype.reverse = Kr,
        J.prototype.toString = Jr,
        J.prototype.run = J.prototype.toJSON = J.prototype.valueOf = J.prototype.value = Xr,
        J.prototype.collect = J.prototype.map,
        J.prototype.head = J.prototype.first,
        J.prototype.select = J.prototype.filter,
        J.prototype.tail = J.prototype.rest,
        J
    }
    var _, x = "3.10.1",
        k = 1,
        C = 2,
        S = 4,
        A = 8,
        E = 16,
        O = 32,
        T = 64,
        j = 128,
        P = 256,
        R = 30,
        D = "...",
        I = 150,
        M = 16,
        N = 200,
        U = 1,
        q = 2,
        B = "Expected a function",
        F = "__lodash_placeholder__",
        L = "[object Arguments]",
        H = "[object Array]",
        V = "[object Boolean]",
        z = "[object Date]",
        W = "[object Error]",
        K = "[object Function]",
        J = "[object Map]",
        X = "[object Number]",
        Q = "[object Object]",
        Y = "[object RegExp]",
        G = "[object Set]",
        Z = "[object String]",
        tt = "[object WeakMap]",
        et = "[object ArrayBuffer]",
        nt = "[object Float32Array]",
        rt = "[object Float64Array]",
        it = "[object Int8Array]",
        ot = "[object Int16Array]",
        at = "[object Int32Array]",
        st = "[object Uint8Array]",
        ut = "[object Uint8ClampedArray]",
        ct = "[object Uint16Array]",
        lt = "[object Uint32Array]",
        ft = /\b__p \+= '';/g,
        ht = /\b(__p \+=) '' \+/g,
        pt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        dt = /&(?:amp|lt|gt|quot|#39|#96);/g,
        vt = /[&<>"'`]/g,
        gt = RegExp(dt.source),
        mt = RegExp(vt.source),
        yt = /<%-([\s\S]+?)%>/g,
        $t = /<%([\s\S]+?)%>/g,
        bt = /<%=([\s\S]+?)%>/g,
        wt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
        _t = /^\w*$/,
        xt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
        kt = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
        Ct = RegExp(kt.source),
        St = /[\u0300-\u036f\ufe20-\ufe23]/g,
        At = /\\(\\)?/g,
        Et = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        Ot = /\w*$/,
        Tt = /^0[xX]/,
        jt = /^\[object .+?Constructor\]$/,
        Pt = /^\d+$/,
        Rt = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
        Dt = /($^)/,
        It = /['\n\r\u2028\u2029\\]/g,
        Mt = function () {
            var t = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                e = "[a-z\\xdf-\\xf6\\xf8-\\xff]+";
            return RegExp(t + "+(?=" + t + e + ")|" + t + "?" + e + "|" + t + "+|[0-9]+", "g")
        }(),
        Nt = ["Array", "ArrayBuffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Math", "Number", "Object", "RegExp", "Set", "String", "_", "clearTimeout", "isFinite", "parseFloat", "parseInt", "setTimeout", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap"],
        Ut = -1,
        qt = {};
    qt[nt] = qt[rt] = qt[it] = qt[ot] = qt[at] = qt[st] = qt[ut] = qt[ct] = qt[lt] = !0,
    qt[L] = qt[H] = qt[et] = qt[V] = qt[z] = qt[W] = qt[K] = qt[J] = qt[X] = qt[Q] = qt[Y] = qt[G] = qt[Z] = qt[tt] = !1;
    var Bt = {};
    Bt[L] = Bt[H] = Bt[et] = Bt[V] = Bt[z] = Bt[nt] = Bt[rt] = Bt[it] = Bt[ot] = Bt[at] = Bt[X] = Bt[Q] = Bt[Y] = Bt[Z] = Bt[st] = Bt[ut] = Bt[ct] = Bt[lt] = !0,
    Bt[W] = Bt[K] = Bt[J] = Bt[G] = Bt[tt] = !1;
    var Ft = {
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ã": "A",
            "Ä": "A",
            "Å": "A",
            "à": "a",
            "á": "a",
            "â": "a",
            "ã": "a",
            "ä": "a",
            "å": "a",
            "Ç": "C",
            "ç": "c",
            "Ð": "D",
            "ð": "d",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ë": "E",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ë": "e",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ï": "I",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ï": "i",
            "Ñ": "N",
            "ñ": "n",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Õ": "O",
            "Ö": "O",
            "Ø": "O",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "õ": "o",
            "ö": "o",
            "ø": "o",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ü": "U",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ü": "u",
            "Ý": "Y",
            "ý": "y",
            "ÿ": "y",
            "Æ": "Ae",
            "æ": "ae",
            "Þ": "Th",
            "þ": "th",
            "ß": "ss"
        },
        Lt = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#96;"
        },
        Ht = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#96;": "`"
        },
        Vt = {
            "function": !0,
            object: !0
        },
        zt = {
            0: "x30",
            1: "x31",
            2: "x32",
            3: "x33",
            4: "x34",
            5: "x35",
            6: "x36",
            7: "x37",
            8: "x38",
            9: "x39",
            A: "x41",
            B: "x42",
            C: "x43",
            D: "x44",
            E: "x45",
            F: "x46",
            a: "x61",
            b: "x62",
            c: "x63",
            d: "x64",
            e: "x65",
            f: "x66",
            n: "x6e",
            r: "x72",
            t: "x74",
            u: "x75",
            v: "x76",
            x: "x78"
        },
        Wt = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        Kt = Vt[typeof exports] && exports && !exports.nodeType && exports,
        Jt = Vt[typeof module] && module && !module.nodeType && module,
        Xt = Kt && Jt && "object" == typeof global && global && global.Object && global,
        Qt = Vt[typeof self] && self && self.Object && self,
        Yt = Vt[typeof window] && window && window.Object && window,
        Gt = Jt && Jt.exports === Kt && Kt,
        Zt = Xt || Yt !== (this && this.window) && Yt || Qt || this,
        te = w();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (Zt._ = te, define(function () {
            return te
        })) : Kt && Jt ? Gt ? (Jt.exports = te)._ = te : Kt._ = te : Zt._ = te
}.call(this),


function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports["angular-file-upload"] = e() : t["angular-file-upload"] = e()
}(this, function () {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(i.exports, i, i.exports, e),
            i.loaded = !0,
            i.exports
        }
        var n = {};
        return e.m = t,
        e.c = n,
        e.p = "",
        e(0)
    }([function (t, e, n) {
        "use strict";
        var r = function (t) {
            return t && t.__esModule ? t["default"] : t
        },
            i = r(n(1)),
            o = r(n(2)),
            a = r(n(3)),
            s = r(n(4)),
            u = r(n(5)),
            c = r(n(6)),
            l = r(n(7)),
            f = r(n(8)),
            h = r(n(9)),
            p = r(n(10)),
            d = r(n(11)),
            v = r(n(12));
        angular.module(i.name, []).value("fileUploaderOptions", o).factory("FileUploader", a).factory("FileLikeObject", s).factory("FileItem", u).factory("FileDirective", c).factory("FileSelect", l).factory("FileDrop", f).factory("FileOver", h).directive("nvFileSelect", p).directive("nvFileDrop", d).directive("nvFileOver", v).run(["FileUploader", "FileLikeObject", "FileItem", "FileDirective", "FileSelect", "FileDrop", "FileOver", function (t, e, n, r, i, o, a) {
                t.FileLikeObject = e,
                t.FileItem = n,
                t.FileDirective = r,
                t.FileSelect = i,
                t.FileDrop = o,
                t.FileOver = a
            }])
    },


    function (t, e) {
        t.exports = {
            name: "angularFileUpload"
        }
    },


    function (t, e) {
        "use strict";
        t.exports = {
            url: "/",
            alias: "file",
            headers: {},
            queue: [],
            progress: 0,
            autoUpload: !1,
            removeAfterUpload: !1,
            method: "POST",
            filters: [],
            formData: [],
            queueLimit: Number.MAX_VALUE,
            withCredentials: !1
        }
    },


    function (t, e, n) {
        "use strict";
        var r = function (t) {
            return t && t.__esModule ? t["default"] : t
        },
            i = function () {
                function t(t, e) {
                    for (var n in e) {
                        var r = e[n];
                        r.configurable = !0,
                        r.value && (r.writable = !0)
                    }
                    Object.defineProperties(t, e)
                }
                return function (e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
                }
            }(),
            o = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            },
            a = (r(n(1)), angular.copy),
            s = angular.extend,
            u = angular.forEach,
            c = angular.isObject,
            l = angular.isNumber,
            f = angular.isDefined,
            h = angular.isArray,
            p = angular.element;
        t.exports = function (t, e, n, r, d, v) {
                var g = r.File,
                    m = r.FormData,
                    y = function () {
                        function r(e) {
                            o(this, r);
                            var n = a(t);
                            s(this, n, e, {
                                isUploading: !1,
                                _nextIndex: 0,
                                _failFilterIndex: -1,
                                _directives: {
                                    select: [],
                                    drop: [],
                                    over: []
                                }
                            }),
                            this.filters.unshift({
                                name: "queueLimit",
                                fn: this._queueLimitFilter
                            }),
                            this.filters.unshift({
                                name: "folder",
                                fn: this._folderFilter
                            })
                        }
                        return i(r, {
                            addToQueue: {
                                value: function (t, e, n) {
                                    var r = this,
                                        i = this.isArrayLikeObject(t) ? t : [t],
                                        o = this._getFilters(n),
                                        a = this.queue.length,
                                        s = [];
                                    u(i, function (t) {
                                            var n = new d(t);
                                            if (r._isValidFile(n, o, e)) {
                                                var i = new v(r, t, e);
                                                s.push(i),
                                                r.queue.push(i),
                                                r._onAfterAddingFile(i)
                                            } else {
                                                var a = o[r._failFilterIndex];
                                                r._onWhenAddingFileFailed(n, a, e)
                                            }
                                        }),
                                    this.queue.length !== a && (this._onAfterAddingAll(s), this.progress = this._getTotalProgress()),
                                    this._render(),
                                    this.autoUpload && this.uploadAll()
                                }
                            },
                            removeFromQueue: {
                                value: function (t) {
                                    var e = this.getIndexOfItem(t),
                                        n = this.queue[e];
                                    n.isUploading && n.cancel(),
                                    this.queue.splice(e, 1),
                                    n._destroy(),
                                    this.progress = this._getTotalProgress()
                                }
                            },
                            clearQueue: {
                                value: function () {
                                    for (; this.queue.length;) this.queue[0].remove();
                                    this.progress = 0
                                }
                            },
                            uploadItem: {
                                value: function (t) {
                                    var e = this.getIndexOfItem(t),
                                        n = this.queue[e],
                                        r = this.isHTML5 ? "_xhrTransport" : "_iframeTransport";
                                    n._prepareToUploading(),
                                    this.isUploading || (this.isUploading = !0, this[r](n))
                                }
                            },
                            cancelItem: {
                                value: function (t) {
                                    var e = this.getIndexOfItem(t),
                                        n = this.queue[e],
                                        r = this.isHTML5 ? "_xhr" : "_form";
                                    n && n.isUploading && n[r].abort()
                                }
                            },
                            uploadAll: {
                                value: function () {
                                    var t = this.getNotUploadedItems().filter(function (t) {
                                        return !t.isUploading
                                    });
                                    t.length && (u(t, function (t) {
                                        return t._prepareToUploading()
                                    }), t[0].upload())
                                }
                            },
                            cancelAll: {
                                value: function () {
                                    var t = this.getNotUploadedItems();
                                    u(t, function (t) {
                                        return t.cancel()
                                    })
                                }
                            },
                            isFile: {
                                value: function (t) {
                                    return this.constructor.isFile(t)
                                }
                            },
                            isFileLikeObject: {
                                value: function (t) {
                                    return this.constructor.isFileLikeObject(t)
                                }
                            },
                            isArrayLikeObject: {
                                value: function (t) {
                                    return this.constructor.isArrayLikeObject(t)
                                }
                            },
                            getIndexOfItem: {
                                value: function (t) {
                                    return l(t) ? t : this.queue.indexOf(t)
                                }
                            },
                            getNotUploadedItems: {
                                value: function () {
                                    return this.queue.filter(function (t) {
                                        return !t.isUploaded
                                    })
                                }
                            },
                            getReadyItems: {
                                value: function () {
                                    return this.queue.filter(function (t) {
                                        return t.isReady && !t.isUploading
                                    }).sort(function (t, e) {
                                        return t.index - e.index
                                    })
                                }
                            },
                            destroy: {
                                value: function () {
                                    var t = this;
                                    u(this._directives, function (e) {
                                        u(t._directives[e], function (t) {
                                            t.destroy()
                                        })
                                    })
                                }
                            },
                            onAfterAddingAll: {
                                value: function (t) {}
                            },
                            onAfterAddingFile: {
                                value: function (t) {}
                            },
                            onWhenAddingFileFailed: {
                                value: function (t, e, n) {}
                            },
                            onBeforeUploadItem: {
                                value: function (t) {}
                            },
                            onProgressItem: {
                                value: function (t, e) {}
                            },
                            onProgressAll: {
                                value: function (t) {}
                            },
                            onSuccessItem: {
                                value: function (t, e, n, r) {}
                            },
                            onErrorItem: {
                                value: function (t, e, n, r) {}
                            },
                            onCancelItem: {
                                value: function (t, e, n, r) {}
                            },
                            onCompleteItem: {
                                value: function (t, e, n, r) {}
                            },
                            onCompleteAll: {
                                value: function () {}
                            },
                            _getTotalProgress: {
                                value: function (t) {
                                    if (this.removeAfterUpload) return t || 0;
                                    var e = this.getNotUploadedItems().length,
                                        n = e ? this.queue.length - e : this.queue.length,
                                        r = 100 / this.queue.length,
                                        i = (t || 0) * r / 100;
                                    return Math.round(n * r + i)
                                }
                            },
                            _getFilters: {
                                value: function (t) {
                                    if (!t) return this.filters;
                                    if (h(t)) return t;
                                    var e = t.match(/[^\s,]+/g);
                                    return this.filters.filter(function (t) {
                                        return -1 !== e.indexOf(t.name)
                                    })
                                }
                            },
                            _render: {
                                value: function () {
                                    e.$$phase || e.$apply()
                                }
                            },
                            _folderFilter: {
                                value: function (t) {
                                    return !(!t.size && !t.type)
                                }
                            },
                            _queueLimitFilter: {
                                value: function () {
                                    return this.queue.length < this.queueLimit
                                }
                            },
                            _isValidFile: {
                                value: function (t, e, n) {
                                    var r = this;
                                    return this._failFilterIndex = -1,
                                    e.length ? e.every(function (e) {
                                        return r._failFilterIndex++,
                                        e.fn.call(r, t, n)
                                    }) : !0
                                }
                            },
                            _isSuccessCode: {
                                value: function (t) {
                                    return t >= 200 && 300 > t || 304 === t
                                }
                            },
                            _transformResponse: {
                                value: function (t, e) {
                                    var r = this._headersGetter(e);
                                    return u(n.defaults.transformResponse, function (e) {
                                        t = e(t, r)
                                    }),
                                    t
                                }
                            },
                            _parseHeaders: {
                                value: function (t) {
                                    var e, n, r, i = {};
                                    return t ? (u(t.split("\n"), function (t) {
                                        r = t.indexOf(":"),
                                        e = t.slice(0, r).trim().toLowerCase(),
                                        n = t.slice(r + 1).trim(),
                                        e && (i[e] = i[e] ? i[e] + ", " + n : n)
                                    }), i) : i
                                }
                            },
                            _headersGetter: {
                                value: function (t) {
                                    return function (e) {
                                        return e ? t[e.toLowerCase()] || null : t
                                    }
                                }
                            },
                            _xhrTransport: {
                                value: function (t) {
                                    var e = this,
                                        n = t._xhr = new XMLHttpRequest,
                                        r = new m;
                                    if (this._onBeforeUploadItem(t), u(t.formData, function (t) {
                                            u(t, function (t, e) {
                                                r.append(e, t)
                                            })
                                        }), "number" != typeof t._file.size) throw new TypeError("The file specified is no longer valid");
                                    r.append(t.alias, t._file, t.file.name),
                                    n.upload.onprogress = function (n) {
                                            var r = Math.round(n.lengthComputable ? 100 * n.loaded / n.total : 0);
                                            e._onProgressItem(t, r)
                                        },
                                    n.onload = function () {
                                            var r = e._parseHeaders(n.getAllResponseHeaders()),
                                                i = e._transformResponse(n.response, r),
                                                o = e._isSuccessCode(n.status) ? "Success" : "Error",
                                                a = "_on" + o + "Item";
                                            e[a](t, i, n.status, r),
                                            e._onCompleteItem(t, i, n.status, r)
                                        },
                                    n.onerror = function () {
                                            var r = e._parseHeaders(n.getAllResponseHeaders()),
                                                i = e._transformResponse(n.response, r);
                                            e._onErrorItem(t, i, n.status, r),
                                            e._onCompleteItem(t, i, n.status, r)
                                        },
                                    n.onabort = function () {
                                            var r = e._parseHeaders(n.getAllResponseHeaders()),
                                                i = e._transformResponse(n.response, r);
                                            e._onCancelItem(t, i, n.status, r),
                                            e._onCompleteItem(t, i, n.status, r)
                                        },
                                    n.open(t.method, t.url, !0),
                                    n.withCredentials = t.withCredentials,
                                    u(t.headers, function (t, e) {
                                            n.setRequestHeader(e, t)
                                        }),
                                    n.send(r),
                                    this._render()
                                }
                            },
                            _iframeTransport: {
                                value: function (t) {
                                    var e = this,
                                        n = p('<form style="display: none;" />'),
                                        r = p('<iframe name="iframeTransport' + Date.now() + '">'),
                                        i = t._input;
                                    t._form && t._form.replaceWith(i),
                                    t._form = n,
                                    this._onBeforeUploadItem(t),
                                    i.prop("name", t.alias),
                                    u(t.formData, function (t) {
                                            u(t, function (t, e) {
                                                var r = p('<input type="hidden" name="' + e + '" />');
                                                r.val(t),
                                                n.append(r)
                                            })
                                        }),
                                    n.prop({
                                            action: t.url,
                                            method: "POST",
                                            target: r.prop("name"),
                                            enctype: "multipart/form-data",
                                            encoding: "multipart/form-data"
                                        }),
                                    r.bind("load", function () {
                                            var n = "",
                                                i = 200;
                                            try {
                                                    n = r[0].contentDocument.body.innerHTML
                                                } catch (o) {
                                                    i = 500
                                                }
                                            var a = {
                                                    response: n,
                                                    status: i,
                                                    dummy: !0
                                                },
                                                s = {},
                                                u = e._transformResponse(a.response, s);
                                            e._onSuccessItem(t, u, a.status, s),
                                            e._onCompleteItem(t, u, a.status, s)
                                        }),
                                    n.abort = function () {
                                            var o, a = {
                                                status: 0,
                                                dummy: !0
                                            },
                                                s = {};
                                            r.unbind("load").prop("src", "javascript:false;"),
                                            n.replaceWith(i),
                                            e._onCancelItem(t, o, a.status, s),
                                            e._onCompleteItem(t, o, a.status, s)
                                        },
                                    i.after(n),
                                    n.append(i).append(r),
                                    n[0].submit(),
                                    this._render()
                                }
                            },
                            _onWhenAddingFileFailed: {
                                value: function (t, e, n) {
                                    this.onWhenAddingFileFailed(t, e, n)
                                }
                            },
                            _onAfterAddingFile: {
                                value: function (t) {
                                    this.onAfterAddingFile(t)
                                }
                            },
                            _onAfterAddingAll: {
                                value: function (t) {
                                    this.onAfterAddingAll(t)
                                }
                            },
                            _onBeforeUploadItem: {
                                value: function (t) {
                                    t._onBeforeUpload(),
                                    this.onBeforeUploadItem(t)
                                }
                            },
                            _onProgressItem: {
                                value: function (t, e) {
                                    var n = this._getTotalProgress(e);
                                    this.progress = n,
                                    t._onProgress(e),
                                    this.onProgressItem(t, e),
                                    this.onProgressAll(n),
                                    this._render()
                                }
                            },
                            _onSuccessItem: {
                                value: function (t, e, n, r) {
                                    t._onSuccess(e, n, r),
                                    this.onSuccessItem(t, e, n, r)
                                }
                            },
                            _onErrorItem: {
                                value: function (t, e, n, r) {
                                    t._onError(e, n, r),
                                    this.onErrorItem(t, e, n, r)
                                }
                            },
                            _onCancelItem: {
                                value: function (t, e, n, r) {
                                    t._onCancel(e, n, r),
                                    this.onCancelItem(t, e, n, r)
                                }
                            },
                            _onCompleteItem: {
                                value: function (t, e, n, r) {
                                    t._onComplete(e, n, r),
                                    this.onCompleteItem(t, e, n, r);
                                    var i = this.getReadyItems()[0];
                                    return this.isUploading = !1,
                                    f(i) ? void i.upload() : (this.onCompleteAll(), this.progress = this._getTotalProgress(), void this._render())
                                }
                            }
                        }, {
                            isFile: {
                                value: function (t) {
                                    return g && t instanceof g
                                }
                            },
                            isFileLikeObject: {
                                value: function (t) {
                                    return t instanceof d
                                }
                            },
                            isArrayLikeObject: {
                                value: function (t) {
                                    return c(t) && "length" in t
                                }
                            },
                            inherit: {
                                value: function (t, e) {
                                    t.prototype = Object.create(e.prototype),
                                    t.prototype.constructor = t,
                                    t.super_ = e
                                }
                            }
                        }),
                        r
                    }();
                return y.prototype.isHTML5 = !(!g || !m),
                y.isHTML5 = y.prototype.isHTML5,
                y
            },
        t.exports.$inject = ["fileUploaderOptions", "$rootScope", "$http", "$window", "FileLikeObject", "FileItem"]
    },


    function (t, e, n) {
        "use strict";
        var r = function (t) {
            return t && t.__esModule ? t["default"] : t
        },
            i = function () {
                function t(t, e) {
                    for (var n in e) {
                        var r = e[n];
                        r.configurable = !0,
                        r.value && (r.writable = !0)
                    }
                    Object.defineProperties(t, e)
                }
                return function (e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
                }
            }(),
            o = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            },
            a = (r(n(1)), angular.copy),
            s = angular.isElement,
            u = angular.isString;
        t.exports = function () {
                var t = function () {
                    function t(e) {
                        o(this, t);
                        var n = s(e),
                            r = n ? e.value : e,
                            i = u(r) ? "FakePath" : "Object",
                            a = "_createFrom" + i;
                        this[a](r)
                    }
                    return i(t, {
                        _createFromFakePath: {
                            value: function (t) {
                                this.lastModifiedDate = null,
                                this.size = null,
                                this.type = "like/" + t.slice(t.lastIndexOf(".") + 1).toLowerCase(),
                                this.name = t.slice(t.lastIndexOf("/") + t.lastIndexOf("\\") + 2)
                            }
                        },
                        _createFromObject: {
                            value: function (t) {
                                this.lastModifiedDate = a(t.lastModifiedDate),
                                this.size = t.size,
                                this.type = t.type,
                                this.name = t.name
                            }
                        }
                    }),
                    t
                }();
                return t
            },
        t.exports.$inject = []
    },


    function (t, e, n) {
        "use strict";
        var r = function (t) {
            return t && t.__esModule ? t["default"] : t
        },
            i = function () {
                function t(t, e) {
                    for (var n in e) {
                        var r = e[n];
                        r.configurable = !0,
                        r.value && (r.writable = !0)
                    }
                    Object.defineProperties(t, e)
                }
                return function (e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
                }
            }(),
            o = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            },
            a = (r(n(1)), angular.copy),
            s = angular.extend,
            u = angular.element,
            c = angular.isElement;
        t.exports = function (t, e) {
                var n = function () {
                    function n(t, r, i) {
                        o(this, n);
                        var l = c(r),
                            f = l ? u(r) : null,
                            h = l ? null : r;
                        s(this, {
                                url: t.url,
                                alias: t.alias,
                                headers: a(t.headers),
                                formData: a(t.formData),
                                removeAfterUpload: t.removeAfterUpload,
                                withCredentials: t.withCredentials,
                                method: t.method
                            }, i, {
                                uploader: t,
                                file: new e(r),
                                isReady: !1,
                                isUploading: !1,
                                isUploaded: !1,
                                isSuccess: !1,
                                isCancel: !1,
                                isError: !1,
                                progress: 0,
                                index: null,
                                _file: h,
                                _input: f
                            }),
                        f && this._replaceNode(f)
                    }
                    return i(n, {
                        upload: {
                            value: function () {
                                try {
                                    this.uploader.uploadItem(this)
                                } catch (t) {
                                    this.uploader._onCompleteItem(this, "", 0, []),
                                    this.uploader._onErrorItem(this, "", 0, [])
                                }
                            }
                        },
                        cancel: {
                            value: function () {
                                this.uploader.cancelItem(this)
                            }
                        },
                        remove: {
                            value: function () {
                                this.uploader.removeFromQueue(this)
                            }
                        },
                        onBeforeUpload: {
                            value: function () {}
                        },
                        onProgress: {
                            value: function (t) {}
                        },
                        onSuccess: {
                            value: function (t, e, n) {}
                        },
                        onError: {
                            value: function (t, e, n) {}
                        },
                        onCancel: {
                            value: function (t, e, n) {}
                        },
                        onComplete: {
                            value: function (t, e, n) {}
                        },
                        _onBeforeUpload: {
                            value: function () {
                                this.isReady = !0,
                                this.isUploading = !0,
                                this.isUploaded = !1,
                                this.isSuccess = !1,
                                this.isCancel = !1,
                                this.isError = !1,
                                this.progress = 0,
                                this.onBeforeUpload()
                            }
                        },
                        _onProgress: {
                            value: function (t) {
                                this.progress = t,
                                this.onProgress(t)
                            }
                        },
                        _onSuccess: {
                            value: function (t, e, n) {
                                this.isReady = !1,
                                this.isUploading = !1,
                                this.isUploaded = !0,
                                this.isSuccess = !0,
                                this.isCancel = !1,
                                this.isError = !1,
                                this.progress = 100,
                                this.index = null,
                                this.onSuccess(t, e, n)
                            }
                        },
                        _onError: {
                            value: function (t, e, n) {
                                this.isReady = !1,
                                this.isUploading = !1,
                                this.isUploaded = !0,
                                this.isSuccess = !1,
                                this.isCancel = !1,
                                this.isError = !0,
                                this.progress = 0,
                                this.index = null,
                                this.onError(t, e, n)
                            }
                        },
                        _onCancel: {
                            value: function (t, e, n) {
                                this.isReady = !1,
                                this.isUploading = !1,
                                this.isUploaded = !1,
                                this.isSuccess = !1,
                                this.isCancel = !0,
                                this.isError = !1,
                                this.progress = 0,
                                this.index = null,
                                this.onCancel(t, e, n)
                            }
                        },
                        _onComplete: {
                            value: function (t, e, n) {
                                this.onComplete(t, e, n),
                                this.removeAfterUpload && this.remove()
                            }
                        },
                        _destroy: {
                            value: function () {
                                this._input && this._input.remove(),
                                this._form && this._form.remove(),
                                delete this._form,
                                delete this._input
                            }
                        },
                        _prepareToUploading: {
                            value: function () {
                                this.index = this.index || ++this.uploader._nextIndex,
                                this.isReady = !0
                            }
                        },
                        _replaceNode: {
                            value: function (e) {
                                var n = t(e.clone())(e.scope());
                                n.prop("value", null),
                                e.css("display", "none"),
                                e.after(n)
                            }
                        }
                    }),
                    n
                }();
                return n
            },
        t.exports.$inject = ["$compile", "FileLikeObject"]
    },


    function (t, e, n) {
        "use strict";
        var r = function (t) {
            return t && t.__esModule ? t["default"] : t
        },
            i = function () {
                function t(t, e) {
                    for (var n in e) {
                        var r = e[n];
                        r.configurable = !0,
                        r.value && (r.writable = !0)
                    }
                    Object.defineProperties(t, e)
                }
                return function (e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
                }
            }(),
            o = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            },
            a = (r(n(1)), angular.extend);
        t.exports = function () {
                var t = function () {
                    function t(e) {
                        o(this, t),
                        a(this, e),
                        this.uploader._directives[this.prop].push(this),
                        this._saveLinks(),
                        this.bind()
                    }
                    return i(t, {
                        bind: {
                            value: function () {
                                for (var t in this.events) {
                                    var e = this.events[t];
                                    this.element.bind(t, this[e])
                                }
                            }
                        },
                        unbind: {
                            value: function () {
                                for (var t in this.events) this.element.unbind(t, this.events[t])
                            }
                        },
                        destroy: {
                            value: function () {
                                var t = this.uploader._directives[this.prop].indexOf(this);
                                this.uploader._directives[this.prop].splice(t, 1),
                                this.unbind()
                            }
                        },
                        _saveLinks: {
                            value: function () {
                                for (var t in this.events) {
                                    var e = this.events[t];
                                    this[e] = this[e].bind(this)
                                }
                            }
                        }
                    }),
                    t
                }();
                return t.prototype.events = {},
                t
            },
        t.exports.$inject = []
    },


    function (t, e, n) {
        "use strict";
        var r = function (t) {
            return t && t.__esModule ? t["default"] : t
        },
            i = function () {
                function t(t, e) {
                    for (var n in e) {
                        var r = e[n];
                        r.configurable = !0,
                        r.value && (r.writable = !0)
                    }
                    Object.defineProperties(t, e)
                }
                return function (e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
                }
            }(),
            o = function c(t, e, n) {
                var r = Object.getOwnPropertyDescriptor(t, e);
                if (void 0 === r) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : c(i, e, n)
                }
                if ("value" in r && r.writable) return r.value;
                var o = r.get;
                return void 0 === o ? void 0 : o.call(n)
            },
            a = function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (t.__proto__ = e)
            },
            s = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            },
            u = (r(n(1)), angular.extend);
        t.exports = function (t) {
                var e = function (t) {
                    function e(t) {
                        s(this, e);
                        var n = u(t, {
                            events: {
                                $destroy: "destroy",
                                change: "onChange"
                            },
                            prop: "select"
                        });
                        o(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, n),
                        this.uploader.isHTML5 || this.element.removeAttr("multiple"),
                        this.element.prop("value", null)
                    }
                    return a(e, t),
                    i(e, {
                        getOptions: {
                            value: function () {}
                        },
                        getFilters: {
                            value: function () {}
                        },
                        isEmptyAfterSelection: {
                            value: function () {
                                return !!this.element.attr("multiple")
                            }
                        },
                        onChange: {
                            value: function () {
                                var t = this.uploader.isHTML5 ? this.element[0].files : this.element[0],
                                    e = this.getOptions(),
                                    n = this.getFilters();
                                this.uploader.isHTML5 || this.destroy(),
                                this.uploader.addToQueue(t, e, n),
                                this.isEmptyAfterSelection() && (this.element.prop("value", null), this.element.replaceWith(this.element = this.element.clone(!0)))
                            }
                        }
                    }),
                    e
                }(t);
                return e
            },
        t.exports.$inject = ["FileDirective"]
    },


    function (t, e, n) {
        "use strict";
        var r = function (t) {
            return t && t.__esModule ? t["default"] : t
        },
            i = function () {
                function t(t, e) {
                    for (var n in e) {
                        var r = e[n];
                        r.configurable = !0,
                        r.value && (r.writable = !0)
                    }
                    Object.defineProperties(t, e)
                }
                return function (e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
                }
            }(),
            o = function l(t, e, n) {
                var r = Object.getOwnPropertyDescriptor(t, e);
                if (void 0 === r) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : l(i, e, n)
                }
                if ("value" in r && r.writable) return r.value;
                var o = r.get;
                return void 0 === o ? void 0 : o.call(n)
            },
            a = function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (t.__proto__ = e)
            },
            s = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            },
            u = (r(n(1)), angular.extend),
            c = angular.forEach;
        t.exports = function (t) {
                var e = function (t) {
                    function e(t) {
                        s(this, e);
                        var n = u(t, {
                            events: {
                                $destroy: "destroy",
                                drop: "onDrop",
                                dragover: "onDragOver",
                                dragleave: "onDragLeave"
                            },
                            prop: "drop"
                        });
                        o(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, n)
                    }
                    return a(e, t),
                    i(e, {
                        getOptions: {
                            value: function () {}
                        },
                        getFilters: {
                            value: function () {}
                        },
                        onDrop: {
                            value: function (t) {
                                var e = this._getTransfer(t);
                                if (e) {
                                    var n = this.getOptions(),
                                        r = this.getFilters();
                                    this._preventAndStop(t),
                                    c(this.uploader._directives.over, this._removeOverClass, this),
                                    this.uploader.addToQueue(e.files, n, r)
                                }
                            }
                        },
                        onDragOver: {
                            value: function (t) {
                                var e = this._getTransfer(t);
                                this._haveFiles(e.types) && (e.dropEffect = "copy", this._preventAndStop(t), c(this.uploader._directives.over, this._addOverClass, this))
                            }
                        },
                        onDragLeave: {
                            value: function (t) {
                                t.currentTarget !== this.element[0] && (this._preventAndStop(t), c(this.uploader._directives.over, this._removeOverClass, this))
                            }
                        },
                        _getTransfer: {
                            value: function (t) {
                                return t.dataTransfer ? t.dataTransfer : t.originalEvent.dataTransfer
                            }
                        },
                        _preventAndStop: {
                            value: function (t) {
                                t.preventDefault(),
                                t.stopPropagation()
                            }
                        },
                        _haveFiles: {
                            value: function (t) {
                                return t ? t.indexOf ? -1 !== t.indexOf("Files") : t.contains ? t.contains("Files") : !1 : !1
                            }
                        },
                        _addOverClass: {
                            value: function (t) {
                                t.addOverClass()
                            }
                        },
                        _removeOverClass: {
                            value: function (t) {
                                t.removeOverClass()
                            }
                        }
                    }),
                    e
                }(t);
                return e
            },
        t.exports.$inject = ["FileDirective"]
    },


    function (t, e, n) {
        "use strict";
        var r = function (t) {
            return t && t.__esModule ? t["default"] : t
        },
            i = function () {
                function t(t, e) {
                    for (var n in e) {
                        var r = e[n];
                        r.configurable = !0,
                        r.value && (r.writable = !0)
                    }
                    Object.defineProperties(t, e)
                }
                return function (e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
                }
            }(),
            o = function c(t, e, n) {
                var r = Object.getOwnPropertyDescriptor(t, e);
                if (void 0 === r) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : c(i, e, n)
                }
                if ("value" in r && r.writable) return r.value;
                var o = r.get;
                return void 0 === o ? void 0 : o.call(n)
            },
            a = function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (t.__proto__ = e)
            },
            s = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            },
            u = (r(n(1)), angular.extend);
        t.exports = function (t) {
                var e = function (t) {
                    function e(t) {
                        s(this, e);
                        var n = u(t, {
                            events: {
                                $destroy: "destroy"
                            },
                            prop: "over",
                            overClass: "nv-file-over"
                        });
                        o(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, n)
                    }
                    return a(e, t),
                    i(e, {
                        addOverClass: {
                            value: function () {
                                this.element.addClass(this.getOverClass())
                            }
                        },
                        removeOverClass: {
                            value: function () {
                                this.element.removeClass(this.getOverClass())
                            }
                        },
                        getOverClass: {
                            value: function () {
                                return this.overClass
                            }
                        }
                    }),
                    e
                }(t);
                return e
            },
        t.exports.$inject = ["FileDirective"]
    },


    function (t, e, n) {
        "use strict"; {
            var r = function (t) {
                return t && t.__esModule ? t["default"] : t
            };
            r(n(1))
        }
        t.exports = function (t, e, n) {
            return {
                link: function (r, i, o) {
                    var a = r.$eval(o.uploader);
                    if (!(a instanceof e)) throw new TypeError('"Uploader" must be an instance of FileUploader');
                    var s = new n({
                        uploader: a,
                        element: i
                    });
                    s.getOptions = t(o.options).bind(s, r),
                    s.getFilters = function () {
                        return o.filters
                    }
                }
            }
        },
        t.exports.$inject = ["$parse", "FileUploader", "FileSelect"]
    },


    function (t, e, n) {
        "use strict"; {
            var r = function (t) {
                return t && t.__esModule ? t["default"] : t
            };
            r(n(1))
        }
        t.exports = function (t, e, n) {
            return {
                link: function (r, i, o) {
                    var a = r.$eval(o.uploader);
                    if (!(a instanceof e)) throw new TypeError('"Uploader" must be an instance of FileUploader');
                    if (a.isHTML5) {
                        var s = new n({
                            uploader: a,
                            element: i
                        });
                        s.getOptions = t(o.options).bind(s, r),
                        s.getFilters = function () {
                            return o.filters
                        }
                    }
                }
            }
        },
        t.exports.$inject = ["$parse", "FileUploader", "FileDrop"]
    },


    function (t, e, n) {
        "use strict"; {
            var r = function (t) {
                return t && t.__esModule ? t["default"] : t
            };
            r(n(1))
        }
        t.exports = function (t, e) {
            return {
                link: function (n, r, i) {
                    var o = n.$eval(i.uploader);
                    if (!(o instanceof t)) throw new TypeError('"Uploader" must be an instance of FileUploader');
                    var a = new e({
                        uploader: o,
                        element: r
                    });
                    a.getOverClass = function () {
                        return i.overClass || a.overClass
                    }
                }
            }
        },
        t.exports.$inject = ["FileUploader", "FileOver"]
    }])
}),
!
function e(t, n, r) {
    function i(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var u = "function" == typeof require && require;
                if (!s && u) return u(a, !0);
                if (o) return o(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            var l = n[a] = {
                exports: {}
            };
            t[a][0].call(l.exports, function (e) {
                var n = t[a][1][e];
                return i(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
    return i
}({
    1: [function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.CrossMessage = void 0;
        var i = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n),
                r && t(e, r),
                e
            }
        }(),
            o = t("./utils"),
            a = o.eventListener(),
            s = a.addEventListener,
            u = a.removeEventListener,
            c = 0,
            l = "__request-",
            f = "__response-",
            h = new RegExp("^(\\d+)" + l + "(.*)"),
            p = new RegExp("^(\\d+)" + f + "(.*)"),
            d = "resolved",
            v = "rejected",
            g = "function" == typeof Promise,
            m = !1,
            y = n.CrossMessage = function () {
                function t() {
                    var e = this,
                        n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    if (r(this, t), !o.getPromise()) throw new Error('No "Promise" feature available in browser, must specify another promise lib');
                    if (!n.otherWindow) throw new Error('Must specify "otherWindow" to communicate with');
                    n = o.assign({
                            thisWindow: window,
                            domain: "*",
                            knownWindowOnly: !0
                        }, n);
                    var i = this._thisWin = n.thisWindow,
                        a = this._otherWin = n.otherWindow,
                        u = !! n.knownWindowOnly;
                    this._domain = n.domain,
                    this._callbacks = {},
                    this._promises = {},
                    s(i, "message", this._listener = function (t) {
                            if (!u || a === t.source) {
                                e._domain || (e._domain = t.origin || t.originalEvent.origin);
                                var n = t.data,
                                    r = void 0,
                                    i = void 0;
                                n.$type && ((r = n.$type.match(h)) ? e._handleReq(t, n, r[1], r[2]) : (i = n.$type.match(p)) && e._handleResp(t, n, i[1], i[2]))
                            }
                        })
                }
                return i(t, null, [{
                    key: "usePromise",
                    value: function (t) {
                        o.setPromise(t),
                        g = "function" == typeof t,
                        m = "function" == typeof t.defer
                    }
                }]),
                i(t, [{
                    key: "post",
                    value: function (t, e) {
                        var n = this,
                            r = o.getPromise(),
                            i = function (r, i) {
                                ++c,
                                n._otherWin.postMessage({
                                    $type: "" + c + l + t,
                                    $data: e
                                }, n._domain),
                                n._promises["" + c + t] = {
                                    resolve: r,
                                    reject: i
                                }
                            };
                        if (g) return new r(function (t, e) {
                                i(t, e)
                            });
                        if (m) {
                                var a = r.defer();
                                return i(a.resolve, a.reject),
                                a.promise
                            }
                        throw new Error("Unknown promise.")
                    }
                },
                {
                    key: "on",
                    value: function (t, e) {
                        this._callbacks[t] = e
                    }
                },
                {
                    key: "off",
                    value: function (t) {
                        t ? delete this._callbacks[t] : this._callbacks = {}
                    }
                },
                {
                    key: "clear",
                    value: function () {
                        u(this._thisWin, "message", this._listener)
                    }
                },
                {
                    key: "_handleReq",
                    value: function (t, e, n, r) {
                        var i = this._callbacks[r];
                        if ("function" == typeof i) {
                            var a = i(e.$data),
                                s = "" + n + f + r,
                                u = t.source,
                                c = this._domain;
                            if (o.isPromise(a)) return void a.then(function (t) {
                                    u.postMessage({
                                        $type: s,
                                        $data: {
                                            status: d,
                                            message: t
                                        }
                                    }, c)
                                }, function (t) {
                                    u.postMessage({
                                        $type: s,
                                        $data: {
                                            status: v,
                                            message: t
                                        }
                                    }, c)
                                });
                            if ("boolean" == typeof a) a = {
                                    status: a ? d : v,
                                    message: a
                                };
                            else {
                                    var l = a.status;
                                    a = "string" == typeof l ? a : {
                                        status: d,
                                        message: a
                                    }
                                }
                            u.postMessage({
                                    $type: s,
                                    $data: a
                                }, c)
                        }
                    }
                },
                {
                    key: "_handleResp",
                    value: function (t, e, n, r) {
                        var i = e.$data,
                            o = i.status.toLowerCase() === d ? "resolve" : "reject",
                            a = "" + n + r;
                        this._promises[a] && (this._promises[a][o](i.message), delete this._promises[a])
                    }
                }]),
                t
            }();
        "undefined" != typeof window && (window.CrossMessage = y)
    },
    {
        "./utils": 2
    }],
    2: [function (t, e, n) {
        "use strict";

        function r(t) {
            var e = "undefined" == typeof t ? "undefined" : c(t);
            return "function" === e || "object" === e && !! t
        }
        function i(t) {
            if (!r(t)) return t;
            if ("function" == typeof Object.assign) return Object.assign.apply(null, arguments);
            var e, n, i, o;
            for (i = 1, o = arguments.length; o > i; i++) {
                e = arguments[i];
                for (n in e) if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
                    var a = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(t, n, a)
                } else t[n] = e[n]
            }
            return t
        }
        function o(t) {
            return r(t) && "function" == typeof t.then
        }
        function a(t) {
            l = t
        }
        function s() {
            return l
        }
        function u() {
            var t = !! window.document.addEventListener;
            return {
                addEventListener: t ?
                function (t, e, n) {
                    t.addEventListener(e, n, !1)
                } : function (t, e, n) {
                    t.attachEvent("on" + e, n)
                },
                removeEventListener: t ?
                function (t, e, n) {
                    t.removeEventListener(e, n, !1)
                } : function (t, e, n) {
                    t.detachEvent("on" + e, n)
                }
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
        };
        n.isObject = r,
        n.assign = i,
        n.isPromise = o,
        n.setPromise = a,
        n.getPromise = s,
        n.eventListener = u;
        var l = "undefined" == typeof Promise ? null : Promise
    },
    {}]
}, {}, [1]);