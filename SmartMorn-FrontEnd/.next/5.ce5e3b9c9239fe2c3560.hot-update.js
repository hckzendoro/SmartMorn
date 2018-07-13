webpackHotUpdate(5,{

/***/ "./pages/adjustment.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_reducers_adjustment__ = __webpack_require__("./redux/reducers/adjustment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
var _jsxFileName = "/Users/zendoro/Desktop/SmartMorn/SmartMorn-FrontEnd/pages/adjustment.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Margin = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "adjustment__Margin",
  componentId: "s81useu-0"
})(["margin-top:7vh;"]);

var PillowAdjustment =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PillowAdjustment, _React$Component);

  function PillowAdjustment(props) {
    var _this;

    _classCallCheck(this, PillowAdjustment);

    _this = _possibleConstructorReturn(this, (PillowAdjustment.__proto__ || Object.getPrototypeOf(PillowAdjustment)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "turnOnMC", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.turnOn(_this.state);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "turnOffMC", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.turnOff(_this.state);
      }
    });

    _this.checkLogin.bind(_assertThisInitialized(_this));

    _this.state = {};
    return _this;
  }

  _createClass(PillowAdjustment, [{
    key: "checkLogin",
    value: function checkLogin() {
      var token = localStorage.getItem('SmartMornKey');
      console.log(token);

      if (!token) {
        __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/login');
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkLogin();
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */], {
        title: "SmartMorn - PillowAdjustment",
        Navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Margin, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["o" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["f" /* Col */], {
        md: {
          size: 6,
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["b" /* Card */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["c" /* CardBody */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "icon ion-md-settings",
        style: {
          fontSize: '35px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), " Pillow Adjustment"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), this.props.message && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Alert, {
        color: "success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, this.props.message), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["a" /* Button */], {
        className: "btn-outline-info active",
        onClick: this.turnOnMC(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Turn On"), " | ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["a" /* Button */], {
        className: "btn-outline-warning active",
        onClick: this.turnOffMC(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Turn Off"))))))));
    }
  }]);

  return PillowAdjustment;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var adjustment = _ref.adjustment;
  return {
    message: adjustment.message
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    turnOn: Object(__WEBPACK_IMPORTED_MODULE_7__node_modules_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_5__redux_reducers_adjustment__["a" /* actions */].turnOn, dispatch),
    turnOff: Object(__WEBPACK_IMPORTED_MODULE_7__node_modules_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_5__redux_reducers_adjustment__["a" /* actions */].turnOff, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(PillowAdjustment));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/adjustment")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.ce5e3b9c9239fe2c3560.hot-update.js.map