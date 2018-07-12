webpackHotUpdate(5,{

/***/ "./pages/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_helper_Link__ = __webpack_require__("./utils/helper/Link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_reducers_auth__ = __webpack_require__("./redux/reducers/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/Users/zendoro/Desktop/SmartMorn/SmartMorn-FrontEnd/pages/login.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var MarginTop = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "login__MarginTop",
  componentId: "tae21n-0"
})(["margin-top:13vh;"]);
var MarginLink = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "login__MarginLink",
  componentId: "tae21n-1"
})(["margin-top:10px;"]);
var MarginBottom = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "login__MarginBottom",
  componentId: "tae21n-2"
})(["margin-bottom:40px;"]);
var FormWithMargin = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["h" /* Form */]).withConfig({
  displayName: "login__FormWithMargin",
  componentId: "tae21n-3"
})(["margin-top:16px;"]);
var MarginForButton = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "login__MarginForButton",
  componentId: "tae21n-4"
})(["margin-top:20px;"]);

var LoginPage =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginPage, _Component);

  function LoginPage(props) {
    var _this;

    _classCallCheck(this, LoginPage);

    _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "Login", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault(); // console.log(this.state) 

        var _this$state = _this.state,
            username = _this$state.username,
            password = _this$state.password;

        _this.props.login(username, password);
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
      password: ''
    };
    return _this;
  }

  _createClass(LoginPage, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.isLogin) __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push('/dashboard');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _React$createElement;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout_js__["a" /* default */], {
        title: "SmartMorn V1 - Login",
        Navbar: "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MarginTop, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["r" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["e" /* Col */], (_React$createElement = {
        md: "3"
      }, _defineProperty(_React$createElement, "md", {
        size: 4,
        offset: 4
      }), _defineProperty(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 71
      }), _React$createElement), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MarginBottom, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "static/images/smartmornlogo.png",
        width: "300",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["c" /* Card */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["d" /* CardBody */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormWithMargin, {
        method: "post",
        onSubmit: function onSubmit(e) {
          return _this2.Login(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, this.props.errorMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["a" /* Alert */], {
        color: "danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, this.props.errorMessage), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["i" /* FormGroup */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["k" /* Label */], {
        "for": "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Username"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["j" /* Input */], {
        type: "text",
        name: "username",
        id: "username",
        placeholder: "",
        value: this.state.username,
        onChange: this.handleChange('username'),
        required: "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["i" /* FormGroup */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["k" /* Label */], {
        "for": "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Password"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["j" /* Input */], {
        type: "password",
        name: "username",
        id: "password",
        placeholder: "",
        value: this.state.password,
        onChange: this.handleChange('password'),
        required: "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MarginForButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_reactstrap__["b" /* Button */], {
        block: true,
        className: "btn-outline-info active",
        disabled: this.props.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "icon ion-md-log-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), " Login")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MarginLink, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "Don't have an account?", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__utils_helper_Link__["a" /* default */], {
        href: "/register",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, " Register")))))))))));
    }
  }]);

  return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    isLogin: auth.isLogin,
    errorMessage: auth.messageLogin
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: Object(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_7__redux_reducers_auth__["a" /* actions */].Login, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(LoginPage));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/login")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.65790f296905efffddf7.hot-update.js.map