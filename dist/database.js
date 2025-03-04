"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var mongoose = require('mongoose');

// Store database collections as module-level variables
var db;
var collections = {
  accountsCollection: null,
  depositsCollection: null,
  liquidationsCollection: null,
  pricesCollection: null,
  metricsCollection: null
};

// Flag to track if connection is complete
var isConnected = false;
var uri = process.env.MONGO_URI;

// Connect to MongoDB
function connectToDatabase() {
  return _connectToDatabase.apply(this, arguments);
} // Function to ensure collection is available
function _connectToDatabase() {
  _connectToDatabase = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var conn;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (!isConnected) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return", true);
        case 3:
          _context.next = 5;
          return mongoose.connect(uri, {
            dbName: 'defimoniter'
          });
        case 5:
          conn = _context.sent;
          console.log("\u2705 MongoDB Connected: ".concat(conn.connection.host));
          db = conn.connection.db;

          // Initialize collections
          collections.accountsCollection = db.collection('accounts');
          collections.depositsCollection = db.collection('deposits');
          collections.liquidationsCollection = db.collection('liquidations');
          collections.pricesCollection = db.collection('prices');
          collections.metricsCollection = db.collection('metrics');

          // Create indexes for performance
          _context.next = 15;
          return collections.accountsCollection.createIndex({
            address: 1
          }, {
            unique: true
          });
        case 15:
          _context.next = 17;
          return collections.depositsCollection.createIndex({
            transactionHash: 1
          }, {
            unique: true
          });
        case 17:
          _context.next = 19;
          return collections.depositsCollection.createIndex({
            user: 1
          });
        case 19:
          _context.next = 21;
          return collections.liquidationsCollection.createIndex({
            address: 1
          });
        case 21:
          _context.next = 23;
          return collections.liquidationsCollection.createIndex({
            liquidatable: 1
          });
        case 23:
          _context.next = 25;
          return collections.pricesCollection.createIndex({
            token: 1
          });
        case 25:
          isConnected = true;
          return _context.abrupt("return", true);
        case 29:
          _context.prev = 29;
          _context.t0 = _context["catch"](0);
          console.error('Database connection error:', _context.t0);
          return _context.abrupt("return", false);
        case 33:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 29]]);
  }));
  return _connectToDatabase.apply(this, arguments);
}
function getCollection(name) {
  if (!isConnected) {
    throw new Error('Database not connected. Call connectToDatabase() first');
  }
  return collections[name];
}

// Database operations
function saveDepositEvent(_x) {
  return _saveDepositEvent.apply(this, arguments);
}
function _saveDepositEvent() {
  _saveDepositEvent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(depositEvent) {
    var depositsCollection, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          depositsCollection = getCollection('depositsCollection');
          _context2.next = 4;
          return depositsCollection.updateOne({
            transactionHash: depositEvent.transactionHash
          }, {
            $set: depositEvent
          }, {
            upsert: true
          });
        case 4:
          result = _context2.sent;
          if (result.upsertedCount > 0) {
            console.log("New deposit event recorded: ".concat(depositEvent.transactionHash));
          } else {
            console.log("Deposit event already processed: ".concat(depositEvent.transactionHash));
          }
          return _context2.abrupt("return", true);
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.error('Error saving deposit event:', _context2.t0);
          return _context2.abrupt("return", false);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return _saveDepositEvent.apply(this, arguments);
}
function saveAccount(_x2) {
  return _saveAccount.apply(this, arguments);
}
function _saveAccount() {
  _saveAccount = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(address) {
    var accountsCollection;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          accountsCollection = getCollection('accountsCollection');
          _context3.next = 4;
          return accountsCollection.updateOne({
            address: address
          }, {
            $set: {
              address: address,
              lastUpdated: new Date()
            }
          }, {
            upsert: true
          });
        case 4:
          return _context3.abrupt("return", true);
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error('Error saving account:', _context3.t0);
          return _context3.abrupt("return", false);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _saveAccount.apply(this, arguments);
}
function saveLiquidationOpportunities(_x3) {
  return _saveLiquidationOpportunities.apply(this, arguments);
}
function _saveLiquidationOpportunities() {
  _saveLiquidationOpportunities = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(opportunities) {
    var liquidationsCollection, bulkOps;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          if (!(opportunities.length === 0)) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", true);
        case 3:
          liquidationsCollection = getCollection('liquidationsCollection'); // Use bulk operations for efficiency
          bulkOps = opportunities.map(function (opportunity) {
            return {
              updateOne: {
                filter: {
                  address: opportunity.address
                },
                update: {
                  $set: _objectSpread(_objectSpread({}, opportunity), {}, {
                    lastUpdated: new Date()
                  })
                },
                upsert: true
              }
            };
          });
          _context4.next = 7;
          return liquidationsCollection.bulkWrite(bulkOps);
        case 7:
          return _context4.abrupt("return", true);
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error('Error saving liquidation opportunities:', _context4.t0);
          return _context4.abrupt("return", false);
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return _saveLiquidationOpportunities.apply(this, arguments);
}
function savePriceFeedUpdates(_x4) {
  return _savePriceFeedUpdates.apply(this, arguments);
}
function _savePriceFeedUpdates() {
  _savePriceFeedUpdates = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(priceFeeds) {
    var pricesCollection, bulkOps;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          if (!(priceFeeds.length === 0)) {
            _context5.next = 3;
            break;
          }
          return _context5.abrupt("return", true);
        case 3:
          pricesCollection = getCollection('pricesCollection');
          bulkOps = priceFeeds.map(function (feed) {
            return {
              updateOne: {
                filter: {
                  token: feed.token
                },
                update: {
                  $set: _objectSpread(_objectSpread({}, feed), {}, {
                    lastUpdated: new Date()
                  })
                },
                upsert: true
              }
            };
          });
          _context5.next = 7;
          return pricesCollection.bulkWrite(bulkOps);
        case 7:
          return _context5.abrupt("return", true);
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          console.error('Error saving price feeds:', _context5.t0);
          return _context5.abrupt("return", false);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return _savePriceFeedUpdates.apply(this, arguments);
}
function saveProtocolMetrics(_x5) {
  return _saveProtocolMetrics.apply(this, arguments);
}
function _saveProtocolMetrics() {
  _saveProtocolMetrics = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(metrics) {
    var metricsCollection;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          metricsCollection = getCollection('metricsCollection');
          _context6.next = 4;
          return metricsCollection.insertOne(_objectSpread(_objectSpread({}, metrics), {}, {
            timestamp: new Date()
          }));
        case 4:
          return _context6.abrupt("return", true);
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.error('Error saving protocol metrics:', _context6.t0);
          return _context6.abrupt("return", false);
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return _saveProtocolMetrics.apply(this, arguments);
}
function getAccounts() {
  return _getAccounts.apply(this, arguments);
}
function _getAccounts() {
  _getAccounts = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var accountsCollection, accounts;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          accountsCollection = getCollection('accountsCollection');
          _context7.next = 4;
          return accountsCollection.find({}).toArray();
        case 4:
          accounts = _context7.sent;
          return _context7.abrupt("return", accounts.map(function (doc) {
            return doc.address;
          }));
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error('Error fetching accounts:', _context7.t0);
          return _context7.abrupt("return", []);
        case 12:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return _getAccounts.apply(this, arguments);
}
function getDepositEvents() {
  return _getDepositEvents.apply(this, arguments);
}
function _getDepositEvents() {
  _getDepositEvents = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var depositsCollection;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          depositsCollection = getCollection('depositsCollection');
          _context8.next = 4;
          return depositsCollection.find({}).sort({
            blockNumber: -1
          }).toArray();
        case 4:
          return _context8.abrupt("return", _context8.sent);
        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          console.error('Error fetching deposit events:', _context8.t0);
          return _context8.abrupt("return", []);
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return _getDepositEvents.apply(this, arguments);
}
function getLiquidationOpportunities() {
  return _getLiquidationOpportunities.apply(this, arguments);
}
function _getLiquidationOpportunities() {
  _getLiquidationOpportunities = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    var liquidationsCollection;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          liquidationsCollection = getCollection('liquidationsCollection');
          _context9.next = 4;
          return liquidationsCollection.find({
            liquidatable: true
          }).toArray();
        case 4:
          return _context9.abrupt("return", _context9.sent);
        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          console.error('Error fetching liquidation opportunities:', _context9.t0);
          return _context9.abrupt("return", []);
        case 11:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 7]]);
  }));
  return _getLiquidationOpportunities.apply(this, arguments);
}
function getPriceFeedUpdates() {
  return _getPriceFeedUpdates.apply(this, arguments);
}
function _getPriceFeedUpdates() {
  _getPriceFeedUpdates = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var pricesCollection;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          pricesCollection = getCollection('pricesCollection');
          _context10.next = 4;
          return pricesCollection.find({}).toArray();
        case 4:
          return _context10.abrupt("return", _context10.sent);
        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          console.error('Error fetching price feeds:', _context10.t0);
          return _context10.abrupt("return", []);
        case 11:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 7]]);
  }));
  return _getPriceFeedUpdates.apply(this, arguments);
}
function getLatestProtocolMetrics() {
  return _getLatestProtocolMetrics.apply(this, arguments);
} // Helper function to directly access collections for blockchain.js
function _getLatestProtocolMetrics() {
  _getLatestProtocolMetrics = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    var metricsCollection;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          metricsCollection = getCollection('metricsCollection');
          _context11.next = 4;
          return metricsCollection.findOne({}, {
            sort: {
              timestamp: -1
            }
          });
        case 4:
          return _context11.abrupt("return", _context11.sent);
        case 7:
          _context11.prev = 7;
          _context11.t0 = _context11["catch"](0);
          console.error('Error fetching protocol metrics:', _context11.t0);
          return _context11.abrupt("return", []);
        case 11:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 7]]);
  }));
  return _getLatestProtocolMetrics.apply(this, arguments);
}
function getDepositCollection() {
  return getCollection('depositsCollection');
}
function getMetricsCollection() {
  return getCollection('metricsCollection');
}
function getLiquidationsCollection() {
  return getCollection('liquidationsCollection');
}
function getAccountsCollection() {
  return getCollection('accountsCollection'); // or simply return accountsCollection if already defined
}
;
module.exports = {
  connectToDatabase: connectToDatabase,
  saveDepositEvent: saveDepositEvent,
  saveAccount: saveAccount,
  saveLiquidationOpportunities: saveLiquidationOpportunities,
  savePriceFeedUpdates: savePriceFeedUpdates,
  saveProtocolMetrics: saveProtocolMetrics,
  getAccounts: getAccounts,
  getDepositEvents: getDepositEvents,
  getLiquidationOpportunities: getLiquidationOpportunities,
  getPriceFeedUpdates: getPriceFeedUpdates,
  getLatestProtocolMetrics: getLatestProtocolMetrics,
  // Function to access collections directly
  getDepositCollection: getDepositCollection,
  getMetricsCollection: getMetricsCollection,
  getLiquidationsCollection: getLiquidationsCollection,
  getAccountsCollection: getAccountsCollection
};