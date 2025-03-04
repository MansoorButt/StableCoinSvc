"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require('./database'),
  depositsCollection = _require.depositsCollection,
  accountsCollection = _require.accountsCollection,
  liquidationsCollection = _require.liquidationsCollection,
  getAccounts = _require.getAccounts,
  getPriceFeedUpdates = _require.getPriceFeedUpdates,
  saveProtocolMetrics = _require.saveProtocolMetrics,
  getAccountsCollection = _require.getAccountsCollection;

// Set up API endpoints
var setupApi = function setupApi(app, provider, contract) {
  var _require2 = require('./database'),
    getLiquidationsCollection = _require2.getLiquidationsCollection;
  var _require3 = require('./database'),
    getDepositCollection = _require3.getDepositCollection;
  var _require4 = require('./database'),
    getAccounts = _require4.getAccounts,
    saveProtocolMetrics = _require4.saveProtocolMetrics,
    getAccountsCollection = _require4.getAccountsCollection;

  // Get all deposit events
  app.get('/api/events', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
      var page, limit, skip, _depositsCollection, events, total;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            page = parseInt(req.query.page) || 1;
            limit = parseInt(req.query.limit) || 50;
            skip = (page - 1) * limit;
            _depositsCollection = getDepositCollection();
            if (_depositsCollection) {
              _context.next = 7;
              break;
            }
            throw new Error("Deposits collection not initialized");
          case 7:
            _context.next = 9;
            return _depositsCollection.find({}).sort({
              blockNumber: -1
            }).skip(skip).limit(limit).toArray();
          case 9:
            events = _context.sent;
            _context.next = 12;
            return _depositsCollection.countDocuments();
          case 12:
            total = _context.sent;
            res.json({
              events: events,
              pagination: {
                total: total,
                page: page,
                pages: Math.ceil(total / limit)
              }
            });
            _context.next = 20;
            break;
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.error("Error fetching events:", _context.t0);
            res.status(500).json({
              error: "Failed to fetch events"
            });
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 16]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  // Get all accounts we're tracking
  app.get('/api/accounts', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
      var accounts;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return getAccounts();
          case 3:
            accounts = _context2.sent;
            res.json(accounts);
            _context2.next = 11;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error("Error fetching accounts:", _context2.t0);
            res.status(500).json({
              error: "Failed to fetch accounts"
            });
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());

  // Get account details by address
  app.get('/api/accounts/:address', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
      var address, healthData, deposits;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            address = req.params.address; // Get account health data
            _context3.next = 4;
            return liquidationsCollection.findOne({
              address: address
            });
          case 4:
            healthData = _context3.sent;
            _context3.next = 7;
            return depositsCollection.find({
              user: address
            }).sort({
              blockNumber: -1
            }).toArray();
          case 7:
            deposits = _context3.sent;
            res.json({
              address: address,
              healthData: healthData || {
                healthFactorFormatted: "N/A",
                liquidatable: false
              },
              deposits: deposits
            });
            _context3.next = 15;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.error("Error fetching account details:", _context3.t0);
            res.status(500).json({
              error: "Failed to fetch account details"
            });
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 11]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());

  // Get liquidation opportunities
  app.get('/api/liquidations', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
      var _liquidationsCollection, opportunities;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _liquidationsCollection = getLiquidationsCollection();
            if (_liquidationsCollection) {
              _context4.next = 4;
              break;
            }
            throw new Error("Liquidations collection not initialized");
          case 4:
            _context4.next = 6;
            return _liquidationsCollection.find({
              liquidatable: true
            }).sort({
              healthFactorFormatted: 1
            }).toArray();
          case 6:
            opportunities = _context4.sent;
            res.json(opportunities);
            _context4.next = 14;
            break;
          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            console.error("Error fetching liquidation opportunities:", _context4.t0);
            res.status(500).json({
              error: "Failed to fetch liquidation opportunities"
            });
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 10]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());

  // Get price feed updates
  app.get('/api/prices', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
      var prices;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return getPriceFeedUpdates();
          case 3:
            prices = _context5.sent;
            res.json(prices);
            _context5.next = 11;
            break;
          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.error("Error fetching prices:", _context5.t0);
            res.status(500).json({
              error: "Failed to fetch prices"
            });
          case 11:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 7]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());

  // Get protocol metrics
  app.get('/api/metrics', /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
      var _yield$contract$getPr, _yield$contract$getPr2, totalDscMinted, totalCollateralValueInUsd, collateralizationRatio, accountsColl, liquidationsColl, metrics;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return contract.getProtocolMetrics();
          case 3:
            _yield$contract$getPr = _context6.sent;
            _yield$contract$getPr2 = _slicedToArray(_yield$contract$getPr, 3);
            totalDscMinted = _yield$contract$getPr2[0];
            totalCollateralValueInUsd = _yield$contract$getPr2[1];
            collateralizationRatio = _yield$contract$getPr2[2];
            // Use getters to access the collections
            accountsColl = getAccountsCollection();
            liquidationsColl = getLiquidationsCollection();
            if (!(!accountsColl || !liquidationsColl)) {
              _context6.next = 12;
              break;
            }
            throw new Error("Database collections are not initialized");
          case 12:
            _context6.t0 = totalDscMinted.toString();
            _context6.t1 = totalCollateralValueInUsd.toString();
            _context6.t2 = collateralizationRatio.toString();
            _context6.next = 17;
            return accountsColl.countDocuments();
          case 17:
            _context6.t3 = _context6.sent;
            _context6.next = 20;
            return liquidationsColl.countDocuments({
              liquidatable: true
            });
          case 20:
            _context6.t4 = _context6.sent;
            _context6.t5 = new Date();
            metrics = {
              totalDscMinted: _context6.t0,
              totalCollateralValueInUsd: _context6.t1,
              collateralizationRatio: _context6.t2,
              accounts: _context6.t3,
              liquidationOpportunities: _context6.t4,
              timestamp: _context6.t5
            };
            _context6.next = 25;
            return saveProtocolMetrics(metrics);
          case 25:
            res.json(metrics);
            _context6.next = 32;
            break;
          case 28:
            _context6.prev = 28;
            _context6.t6 = _context6["catch"](0);
            console.error("Error getting protocol metrics:", _context6.t6);
            res.status(500).json({
              error: "Failed to fetch protocol metrics"
            });
          case 32:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 28]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());

  // Add historical metrics endpoint
  app.get('/api/metrics/history', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
      var period, _require5, metricsCollection, timeFilter, metrics;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            period = req.query.period || 'day'; // 'day', 'week', 'month'
            _require5 = require('./database'), metricsCollection = _require5.metricsCollection;
            timeFilter = new Date();
            if (period === 'day') {
              timeFilter.setDate(timeFilter.getDate() - 1);
            } else if (period === 'week') {
              timeFilter.setDate(timeFilter.getDate() - 7);
            } else if (period === 'month') {
              timeFilter.setMonth(timeFilter.getMonth() - 1);
            }
            _context7.next = 7;
            return metricsCollection.find({
              timestamp: {
                $gte: timeFilter
              },
              type: {
                $ne: 'constants'
              } // Exclude constants records
            }).sort({
              timestamp: 1
            }).toArray();
          case 7:
            metrics = _context7.sent;
            res.json(metrics);
            _context7.next = 15;
            break;
          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](0);
            console.error("Error fetching metrics history:", _context7.t0);
            res.status(500).json({
              error: "Failed to fetch metrics history"
            });
          case 15:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 11]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());

  // Add analytical endpoints
  app.get('/api/analytics/deposits', /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
      var pipeline, depositStats;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            pipeline = [{
              $group: {
                _id: "$user",
                totalDeposits: {
                  $sum: 1
                },
                totalAmount: {
                  $sum: {
                    $toDouble: "$amount"
                  }
                },
                firstDeposit: {
                  $min: "$timestamp"
                },
                lastDeposit: {
                  $max: "$timestamp"
                }
              }
            }, {
              $sort: {
                totalAmount: -1
              }
            }];
            _context8.next = 4;
            return depositsCollection.aggregate(pipeline).toArray();
          case 4:
            depositStats = _context8.sent;
            res.json(depositStats);
            _context8.next = 12;
            break;
          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);
            console.error("Error getting deposit analytics:", _context8.t0);
            res.status(500).json({
              error: "Failed to fetch deposit analytics"
            });
          case 12:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 8]]);
    }));
    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());

  // Add historical liquidation risk endpoint
  app.get('/api/analytics/risk-history/:address', /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
      var address, healthHistory;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            address = req.params.address; // Get historical health factors for this address
            _context9.next = 4;
            return liquidationsCollection.find({
              address: address
            }, {
              projection: {
                address: 1,
                healthFactorFormatted: 1,
                timestamp: 1
              }
            }).sort({
              timestamp: 1
            }).toArray();
          case 4:
            healthHistory = _context9.sent;
            res.json(healthHistory);
            _context9.next = 12;
            break;
          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](0);
            console.error("Error getting risk history:", _context9.t0);
            res.status(500).json({
              error: "Failed to fetch risk history"
            });
          case 12:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 8]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());

  // Execute liquidation (this would be a client-side operation in production)
  app.post('/api/liquidate', /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
      var _req$body, userAddress, tokenAddress, debtToCover;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _req$body = req.body, userAddress = _req$body.userAddress, tokenAddress = _req$body.tokenAddress, debtToCover = _req$body.debtToCover;
            if (!(!userAddress || !tokenAddress || !debtToCover)) {
              _context10.next = 3;
              break;
            }
            return _context10.abrupt("return", res.status(400).json({
              error: "Missing required parameters"
            }));
          case 3:
            try {
              res.json({
                success: true,
                message: "Liquidation transaction prepared",
                data: {
                  to: process.env.SC_ENGINE_ADDRESS,
                  method: "liquidate",
                  params: [tokenAddress, userAddress, debtToCover]
                }
              });
            } catch (error) {
              console.error("Error preparing liquidation:", error);
              res.status(500).json({
                error: "Failed to prepare liquidation"
              });
            }
          case 4:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }());
};
module.exports = {
  setupApi: setupApi
};