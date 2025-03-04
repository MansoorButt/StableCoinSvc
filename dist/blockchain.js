"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var ethers = require("ethers");
var abi = require("./abi.json");
var _require = require('./database'),
  saveDepositEvent = _require.saveDepositEvent,
  saveAccount = _require.saveAccount,
  saveLiquidationOpportunities = _require.saveLiquidationOpportunities,
  savePriceFeedUpdates = _require.savePriceFeedUpdates,
  getAccounts = _require.getAccounts,
  saveProtocolMetrics = _require.saveProtocolMetrics,
  connectToDatabase = _require.connectToDatabase,
  accountsCollection = _require.accountsCollection,
  depositsCollection = _require.depositsCollection,
  liquidationsCollection = _require.liquidationsCollection,
  pricesCollection = _require.pricesCollection,
  metricsCollection = _require.metricsCollection;

// Initialize blockchain connection
var setupProvider = function setupProvider() {
  return new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
};

// Create contract instance
var setupContract = function setupContract(provider) {
  var SC_ENGINE_ADDRESS = process.env.SC_ENGINE_ADDRESS || '0x28083fa0d374a254d107da7db026cd8c3bd97b28';
  return new ethers.Contract(SC_ENGINE_ADDRESS, abi, provider);
};

// Get event signature helper
var getEventSignature = function getEventSignature(eventName, abi) {
  var eventAbi = abi.find(function (entry) {
    return entry.name === eventName;
  });
  var type = eventAbi.inputs.map(function (input) {
    return input.type;
  });
  return "".concat(eventName, "(").concat(type.join(","), ")");
};

// Track all deposit events
var trackDepositEvents = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(provider, contract) {
    var eventSignature, depositsCollection, latestProcessedEvent, fromBlock, filter, logs, contractInterface, _iterator, _step, log, decodedLog, event;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          eventSignature = getEventSignature('CollateralDeposited', abi); // Use the helper function to get the collection
          depositsCollection = require('./database').getDepositCollection(); // Get the latest block we've processed
          _context.next = 4;
          return depositsCollection.findOne({}, {
            sort: {
              blockNumber: -1
            }
          });
        case 4:
          latestProcessedEvent = _context.sent;
          fromBlock = latestProcessedEvent ? latestProcessedEvent.blockNumber + 1 : 7754587;
          filter = {
            address: contract.address,
            topics: [ethers.utils.id(eventSignature)],
            fromBlock: fromBlock,
            toBlock: 'latest'
          };
          _context.next = 9;
          return provider.getLogs(filter);
        case 9:
          logs = _context.sent;
          contractInterface = new ethers.utils.Interface(abi);
          _iterator = _createForOfIteratorHelper(logs);
          _context.prev = 12;
          _iterator.s();
        case 14:
          if ((_step = _iterator.n()).done) {
            _context.next = 24;
            break;
          }
          log = _step.value;
          decodedLog = contractInterface.decodeEventLog('CollateralDeposited', log.data, log.topics);
          event = {
            blockNumber: log.blockNumber,
            transactionHash: log.transactionHash,
            user: decodedLog.user,
            amount: decodedLog.amount.toString(),
            token: decodedLog.token,
            timestamp: new Date().toISOString() // In production, get actual block timestamp
          }; // Save to database
          _context.next = 20;
          return saveDepositEvent(event);
        case 20:
          _context.next = 22;
          return saveAccount(decodedLog.user);
        case 22:
          _context.next = 14;
          break;
        case 24:
          _context.next = 29;
          break;
        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](12);
          _iterator.e(_context.t0);
        case 29:
          _context.prev = 29;
          _iterator.f();
          return _context.finish(29);
        case 32:
          console.log("Tracked and saved ".concat(logs.length, " new deposit events"));
        case 33:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[12, 26, 29, 32]]);
  }));
  return function trackDepositEvents(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Get contract constants
var getContractConstants = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(contract) {
    var liquidationThreshold, minHealthFactor, _metricsCollection;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return contract.getLiquidationThreshold();
        case 3:
          liquidationThreshold = _context2.sent.toString();
          _context2.next = 6;
          return contract.getMinHealthFactor();
        case 6:
          minHealthFactor = _context2.sent.toString();
          // Use the helper function to get the collection
          _metricsCollection = require('./database').getMetricsCollection(); // Save these to metrics collection for reference
          _context2.next = 10;
          return _metricsCollection.updateOne({
            type: 'constants'
          }, {
            $set: {
              liquidationThreshold: liquidationThreshold,
              minHealthFactor: minHealthFactor,
              lastUpdated: new Date()
            }
          }, {
            upsert: true
          });
        case 10:
          console.log("Contract constants: Liquidation Threshold: ".concat(liquidationThreshold, ", Min Health Factor: ").concat(ethers.utils.formatEther(minHealthFactor)));
          _context2.next = 16;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          console.error("Error getting contract constants:", _context2.t0);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return function getContractConstants(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

// Get token price in USD
var getTokenPrice = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(contract, tokenAddress) {
    var oneTokenUnit, valueInUsd;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          // We'll get the price of 1 token unit in USD
          oneTokenUnit = ethers.utils.parseEther("1");
          _context3.next = 4;
          return contract.getUsdValue(tokenAddress, oneTokenUnit);
        case 4:
          valueInUsd = _context3.sent;
          return _context3.abrupt("return", {
            token: tokenAddress,
            priceInUsd: valueInUsd.toString(),
            timestamp: new Date().toISOString()
          });
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error("Error getting token price for ".concat(tokenAddress, ":"), _context3.t0);
          return _context3.abrupt("return", null);
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function getTokenPrice(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

// Track price feed updates for all collateral tokens
var trackPriceFeeds = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(contract) {
    var collateralTokens, priceFeedUpdates, _iterator2, _step2, token, priceData;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return contract.getCollateralTokens();
        case 3:
          collateralTokens = _context4.sent;
          priceFeedUpdates = [];
          _iterator2 = _createForOfIteratorHelper(collateralTokens);
          _context4.prev = 6;
          _iterator2.s();
        case 8:
          if ((_step2 = _iterator2.n()).done) {
            _context4.next = 16;
            break;
          }
          token = _step2.value;
          _context4.next = 12;
          return getTokenPrice(contract, token);
        case 12:
          priceData = _context4.sent;
          if (priceData) {
            priceFeedUpdates.push(priceData);
          }
        case 14:
          _context4.next = 8;
          break;
        case 16:
          _context4.next = 21;
          break;
        case 18:
          _context4.prev = 18;
          _context4.t0 = _context4["catch"](6);
          _iterator2.e(_context4.t0);
        case 21:
          _context4.prev = 21;
          _iterator2.f();
          return _context4.finish(21);
        case 24:
          _context4.next = 26;
          return savePriceFeedUpdates(priceFeedUpdates);
        case 26:
          console.log("Tracked prices for ".concat(priceFeedUpdates.length, " tokens"));
          return _context4.abrupt("return", priceFeedUpdates);
        case 30:
          _context4.prev = 30;
          _context4.t1 = _context4["catch"](0);
          console.error("Error tracking price feeds:", _context4.t1);
          return _context4.abrupt("return", []);
        case 34:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 30], [6, 18, 21, 24]]);
  }));
  return function trackPriceFeeds(_x6) {
    return _ref4.apply(this, arguments);
  };
}();

// Calculate liquidation profit potential
var calculateLiquidationProfit = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(contract, account, collateralToken) {
    var _yield$contract$_getA, _yield$contract$_getA2, dscMinted, collateralValueInUsd, collateralBalance, bonus, minHealthFactor, newDebt, calculatedDebtToCover, maxLiquidatable, tokenAmountFromDebtCovered, bonusAmount, totalCollateralToReceive, profitInUsd;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return contract._getAccountInformation(account);
        case 3:
          _yield$contract$_getA = _context5.sent;
          _yield$contract$_getA2 = _slicedToArray(_yield$contract$_getA, 2);
          dscMinted = _yield$contract$_getA2[0];
          collateralValueInUsd = _yield$contract$_getA2[1];
          if (!dscMinted.isZero()) {
            _context5.next = 9;
            break;
          }
          return _context5.abrupt("return", {
            profitEstimate: "0",
            profitableToLiquidate: false
          });
        case 9:
          _context5.next = 11;
          return contract.getCollateralBalanceofUser(account, collateralToken);
        case 11:
          collateralBalance = _context5.sent;
          if (!collateralBalance.isZero()) {
            _context5.next = 14;
            break;
          }
          return _context5.abrupt("return", {
            profitEstimate: "0",
            profitableToLiquidate: false
          });
        case 14:
          _context5.next = 16;
          return contract.getLiquidationBonus();
        case 16:
          bonus = _context5.sent;
          _context5.next = 19;
          return contract.getMinHealthFactor();
        case 19:
          minHealthFactor = _context5.sent;
          // Calculate target debt needed to achieve minHealthFactor:
          // newDebt = collateralValueInUsd / minHealthFactor
          newDebt = collateralValueInUsd.div(minHealthFactor); // careful: use proper BigNumber arithmetic
          // Calculate debt to cover:
          calculatedDebtToCover = dscMinted.sub(newDebt); // Optionally, cap the liquidation to a fraction (e.g., 50%) of the debt:
          maxLiquidatable = dscMinted.div(2); // 50%
          if (calculatedDebtToCover.gt(maxLiquidatable)) {
            calculatedDebtToCover = maxLiquidatable;
          }

          // If calculated debt to cover is not positive, liquidation is not profitable
          if (!calculatedDebtToCover.lte(0)) {
            _context5.next = 26;
            break;
          }
          return _context5.abrupt("return", {
            profitEstimate: "0",
            profitableToLiquidate: false
          });
        case 26:
          _context5.next = 28;
          return contract.getTokenAmountFromUsd(collateralToken, calculatedDebtToCover);
        case 28:
          tokenAmountFromDebtCovered = _context5.sent;
          // Calculate bonus collateral amount
          bonusAmount = tokenAmountFromDebtCovered.mul(bonus).div(100);
          totalCollateralToReceive = tokenAmountFromDebtCovered.add(bonusAmount); // Calculate profit in USD (this is based on the bonus collateral)
          _context5.next = 33;
          return contract.getUsdValue(collateralToken, bonusAmount);
        case 33:
          profitInUsd = _context5.sent;
          return _context5.abrupt("return", {
            debtToCover: calculatedDebtToCover.toString(),
            collateralToReceive: totalCollateralToReceive.toString(),
            profitEstimate: profitInUsd.toString(),
            profitableToLiquidate: profitInUsd.gt(0)
          });
        case 37:
          _context5.prev = 37;
          _context5.t0 = _context5["catch"](0);
          console.error("Error calculating liquidation profit for ".concat(account, ":"), _context5.t0);
          return _context5.abrupt("return", {
            profitEstimate: "0",
            profitableToLiquidate: false
          });
        case 41:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 37]]);
  }));
  return function calculateLiquidationProfit(_x7, _x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();

// Check health factors for all users we're tracking
var checkHealthFactors = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(contract) {
    var liquidationOpportunities, collateralTokens, HEALTH_FACTOR_THRESHOLD, liquidationsCollection, accounts, _iterator3, _step3, account, healthFactor, _yield$contract$_getA3, _yield$contract$_getA4, dscMinted, collateralValueInUsd, healthFactorFormatted, minHealthFactorFormatted, accountData, _iterator4, _step4, token, profitDetails;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          liquidationOpportunities = [];
          _context6.next = 3;
          return contract.getCollateralTokens();
        case 3:
          collateralTokens = _context6.sent;
          _context6.next = 6;
          return contract.getMinHealthFactor();
        case 6:
          HEALTH_FACTOR_THRESHOLD = _context6.sent;
          // Get the liquidations collection
          liquidationsCollection = require('./database').getLiquidationsCollection(); // Get all accounts from database
          _context6.next = 10;
          return getAccounts();
        case 10:
          accounts = _context6.sent;
          _iterator3 = _createForOfIteratorHelper(accounts);
          _context6.prev = 12;
          _iterator3.s();
        case 14:
          if ((_step3 = _iterator3.n()).done) {
            _context6.next = 60;
            break;
          }
          account = _step3.value;
          _context6.prev = 16;
          _context6.next = 19;
          return contract.getHealthFactor(account);
        case 19:
          healthFactor = _context6.sent;
          _context6.next = 22;
          return contract._getAccountInformation(account);
        case 22:
          _yield$contract$_getA3 = _context6.sent;
          _yield$contract$_getA4 = _slicedToArray(_yield$contract$_getA3, 2);
          dscMinted = _yield$contract$_getA4[0];
          collateralValueInUsd = _yield$contract$_getA4[1];
          healthFactorFormatted = ethers.utils.formatEther(healthFactor);
          minHealthFactorFormatted = ethers.utils.formatEther(HEALTH_FACTOR_THRESHOLD); // Base account data
          accountData = {
            address: account,
            healthFactor: healthFactor.toString(),
            healthFactorFormatted: healthFactorFormatted,
            collateralValueInUsd: collateralValueInUsd.toString(),
            dscMinted: dscMinted.toString(),
            liquidatable: healthFactor.lt(HEALTH_FACTOR_THRESHOLD) && dscMinted.gt(0),
            lastUpdated: new Date().toISOString(),
            liquidationDetails: []
          }; // If user can be liquidated, calculate profit potential for each token
          if (!accountData.liquidatable) {
            _context6.next = 50;
            break;
          }
          _iterator4 = _createForOfIteratorHelper(collateralTokens);
          _context6.prev = 31;
          _iterator4.s();
        case 33:
          if ((_step4 = _iterator4.n()).done) {
            _context6.next = 41;
            break;
          }
          token = _step4.value;
          _context6.next = 37;
          return calculateLiquidationProfit(contract, account, token);
        case 37:
          profitDetails = _context6.sent;
          if (profitDetails.profitableToLiquidate) {
            accountData.liquidationDetails.push(_objectSpread({
              token: token
            }, profitDetails));
          }
        case 39:
          _context6.next = 33;
          break;
        case 41:
          _context6.next = 46;
          break;
        case 43:
          _context6.prev = 43;
          _context6.t0 = _context6["catch"](31);
          _iterator4.e(_context6.t0);
        case 46:
          _context6.prev = 46;
          _iterator4.f();
          return _context6.finish(46);
        case 49:
          liquidationOpportunities.push(accountData);
        case 50:
          _context6.next = 52;
          return liquidationsCollection.updateOne({
            address: account
          }, {
            $set: accountData
          }, {
            upsert: true
          });
        case 52:
          console.log("Account ".concat(account.substring(0, 8), "... Health Factor: ").concat(healthFactorFormatted, " (Min: ").concat(minHealthFactorFormatted, ")"));
          _context6.next = 58;
          break;
        case 55:
          _context6.prev = 55;
          _context6.t1 = _context6["catch"](16);
          console.error("Error checking health factor for ".concat(account, ":"), _context6.t1);
        case 58:
          _context6.next = 14;
          break;
        case 60:
          _context6.next = 65;
          break;
        case 62:
          _context6.prev = 62;
          _context6.t2 = _context6["catch"](12);
          _iterator3.e(_context6.t2);
        case 65:
          _context6.prev = 65;
          _iterator3.f();
          return _context6.finish(65);
        case 68:
          _context6.next = 70;
          return saveLiquidationOpportunities(liquidationOpportunities);
        case 70:
          console.log("Found ".concat(liquidationOpportunities.length, " liquidation opportunities"));
          return _context6.abrupt("return", liquidationOpportunities);
        case 72:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[12, 62, 65, 68], [16, 55], [31, 43, 46, 49]]);
  }));
  return function checkHealthFactors(_x10) {
    return _ref6.apply(this, arguments);
  };
}();

// Listen for real-time events
var setupEventListeners = function setupEventListeners(contract) {
  // Listen for new CollateralDeposited events
  contract.on('CollateralDeposited', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(user, token, amount, event) {
      var depositEvent;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            console.log("New deposit from ".concat(user));

            // Add to tracked accounts if new
            _context7.next = 3;
            return saveAccount(user);
          case 3:
            // Add to deposit events
            depositEvent = {
              blockNumber: event.blockNumber,
              transactionHash: event.transactionHash,
              user: user,
              amount: amount.toString(),
              token: token,
              timestamp: new Date().toISOString()
            };
            _context7.next = 6;
            return saveDepositEvent(depositEvent);
          case 6:
            _context7.next = 8;
            return checkHealthFactors(contract);
          case 8:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function (_x11, _x12, _x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};
module.exports = {
  setupProvider: setupProvider,
  setupContract: setupContract,
  trackDepositEvents: trackDepositEvents,
  getContractConstants: getContractConstants,
  trackPriceFeeds: trackPriceFeeds,
  calculateLiquidationProfit: calculateLiquidationProfit,
  checkHealthFactors: checkHealthFactors,
  setupEventListeners: setupEventListeners
};