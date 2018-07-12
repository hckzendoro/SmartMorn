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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









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
var FormWithMargin = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["j" /* Form */]).withConfig({
  displayName: "register__FormWithMargin",
  componentId: "s1eza1y6-3"
})(["margin-top:16px;"]);

var Register =
/*#__PURE__*/
function (_Component) {
  _inherits(Register, _Component);

  function Register(props) {
    var _this;

    _classCallCheck(this, Register);

    _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "register", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return function (e) {
          e.preventDefault();

          _this.props.register();

          console.log(_this.state);
        };
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(field) {
        return function (e) {
          _this.setState(_defineProperty({}, field, e.target.value));
        };
      }
    });
    _this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      birthday: '',
      gender: 'Male'
    };
    return _this;
  }

  _createClass(Register, [{
    key: "render",
    value: function render() {
      var _React$createElement;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout_js__["a" /* default */], {
        title: "SmartMorn V1 - Register",
        Navbar: "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MarginTop, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["t" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["g" /* Col */], (_React$createElement = {
        md: "3"
      }, _defineProperty(_React$createElement, "md", {
        size: 4,
        offset: 4
      }), _defineProperty(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 61
      }), _React$createElement), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MarginBottom, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "static/images/smartmornlogo.png",
        width: "300",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["c" /* Card */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["d" /* CardBody */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, this.props.errorMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["a" /* Alert */], {
        color: "danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, this.props.errorMessage), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormWithMargin, {
        method: "post",
        onSubmit: this.register(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["k" /* FormGroup */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["m" /* Label */], {
        "for": "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Username"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["l" /* Input */], {
        type: "text",
        name: "username",
        id: "username",
        placeholder: "",
        onChange: this.handleChange('username'),
        value: this.state.username,
        required: "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["k" /* FormGroup */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["m" /* Label */], {
        "for": "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Password"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["l" /* Input */], {
        type: "password",
        name: "username",
        id: "password",
        placeholder: "",
        onChange: this.handleChange('password'),
        value: this.state.password,
        required: "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["k" /* FormGroup */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["m" /* Label */], {
        "for": "confirm_password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Confirm Password"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["l" /* Input */], {
        type: "password",
        name: "confirm_password",
        id: "confirm_password",
        placeholder: "",
        onChange: this.handleChange('confirmPassword'),
        value: this.state.confirmPassword,
        required: "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["k" /* FormGroup */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["m" /* Label */], {
        "for": "confirm_password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "BirthDay"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["l" /* Input */], {
        type: "date",
        name: "birthday",
        id: "birthday",
        placeholder: "",
        onChange: this.handleChange('birthday'),
        value: this.state.birthday,
        required: "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["k" /* FormGroup */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["m" /* Label */], {
        "for": "gender",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "Gender"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["l" /* Input */], {
        type: "select",
        name: "select",
        id: "gender",
        onChange: this.handleChange('gender'),
        value: this.state.gender,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "Male"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "Female"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["b" /* Button */], {
        className: "btn-outline-info active",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "icon ion-md-log-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), " Register"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MarginLink, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__utils_helper_Link__["a" /* default */], {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
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
//# sourceMappingURL=9.f6d03dc2bb69bf59fc57.hot-update.js.map