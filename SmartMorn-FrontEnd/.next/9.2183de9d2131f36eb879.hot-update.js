webpackHotUpdate(9,{

/***/ "./pages/register.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_helper_Link__ = __webpack_require__("./utils/helper/Link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_reducers_auth__ = __webpack_require__("./redux/reducers/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/Users/zendoro/Desktop/SmartMorn/SmartMorn-FrontEnd/pages/register.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var MarginTop = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "register__MarginTop",
  componentId: "s1eza1y6-0"
})(["margin-top:5vh;"]);
var MarginLink = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "register__MarginLink",
  componentId: "s1eza1y6-1"
})(["margin-top:10px;"]);
var MarginBottom = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "register__MarginBottom",
  componentId: "s1eza1y6-2"
})(["margin-bottom:40px;"]);
var FormWithMargin = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["i" /* Form */]).withConfig({
  displayName: "register__FormWithMargin",
  componentId: "s1eza1y6-3"
})(["margin-top:16px;"]);

var Register =
/*#__PURE__*/
function (_Component) {
  _inherits(Register, _Component);

  function Register(props) {
    _classCallCheck(this, Register);

    return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));
  }

  _createClass(Register, [{
    key: "register",
    value: function register(e) {
      e.preventDefault();
      console.log('ok');
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this,
          _React$createElement;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout_js__["a" /* default */], {
        title: "SmartMorn V1 - Register",
        Navbar: "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MarginTop, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["s" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["f" /* Col */], (_React$createElement = {
        md: "3"
      }, _defineProperty(_React$createElement, "md", {
        size: 4,
        offset: 4
      }), _defineProperty(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 46
      }), _React$createElement), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MarginBottom, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "static/images/smartmornlogo.png",
        width: "300",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["b" /* Card */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["c" /* CardBody */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormWithMargin, {
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["j" /* FormGroup */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["l" /* Label */], {
        "for": "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Username"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["k" /* Input */], {
        type: "text",
        name: "username",
        id: "username",
        placeholder: "",
        onChange: function onChange(e) {
          return _this.register();
        },
        value: this.props.username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["j" /* FormGroup */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["l" /* Label */], {
        "for": "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Password"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["k" /* Input */], {
        type: "password",
        name: "username",
        id: "password",
        placeholder: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["j" /* FormGroup */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["l" /* Label */], {
        "for": "confirm_password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Confirm Password"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["k" /* Input */], {
        type: "password",
        name: "confirm_password",
        id: "confirm_password",
        placeholder: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["j" /* FormGroup */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["l" /* Label */], {
        "for": "confirm_password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "BirthDay"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["k" /* Input */], {
        type: "date",
        name: "birthday",
        id: "birthday",
        placeholder: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["j" /* FormGroup */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["l" /* Label */], {
        "for": "gender",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Gender"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["k" /* Input */], {
        type: "select",
        name: "select",
        id: "gender",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Male"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Female"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["a" /* Button */], {
        className: "btn-outline-info active",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "icon ion-md-log-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), " Register"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MarginLink, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__utils_helper_Link__["a" /* default */], {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, " Back")))))))))));
    }
  }]);

  return Register;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    isLogin: auth.isLogin,
    errorMessage: auth.errorMessage
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    register: Object(__WEBPACK_IMPORTED_MODULE_6_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_4__redux_reducers_auth__["a" /* actions */].Register, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Register));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/register")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=9.2183de9d2131f36eb879.hot-update.js.map