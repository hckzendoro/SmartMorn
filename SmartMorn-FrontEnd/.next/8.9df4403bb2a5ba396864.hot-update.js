webpackHotUpdate(8,{

/***/ "./components/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_helper_Link__ = __webpack_require__("./utils/helper/Link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/Users/zendoro/Desktop/SmartMorn/SmartMorn-FrontEnd/components/Navbar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// // Nav.js
// import Link from 'next/link';
// import { Button,NavItem ,Navbar,Nav,MenuItem,NavDropdown } from 'react-bootstrap';
// const Navbars = () => {
//     return (
//         <div>
// 			<button className="btn btn-success">OK</button>
//         	{/* <nav className="navbar is-fixed-top is-info">
//         		<div className="navbar-brand">
// 					<Link href="/">
// 						<a className="navbar-item"> SmartMorn </a>
// 					</Link>
// 				</div>
// 				<div  className="navbar-burger burger">
// 					<span></span>
// 					<span></span>
// 					<span></span>
// 				</div>
// 				<div class="navbar-menu">
// 				<div className="navbar-start">
// 							<Link href="/" activeClassName="is-active">
// 								<a className="navbar-item">Home</a>
// 							</Link>
// 							<div className="navbar-item has-dropdown is-hoverable">
// 								<a className="navbar-link">
// 								Docs
// 								</a>
// 								<div className="navbar-dropdown">
// 									<a className="navbar-item">
// 										Overview
// 									</a>
// 									<a className="navbar-item">
// 										Elements
// 									</a>
// 									<a className="navbar-item">
// 										Components
// 									</a>
// 									<hr className="navbar-divider"/>
// 									<div className="navbar-item">
// 										Version 0.7.1
// 									</div>
// 								</div>
// 							</div>
// 					  	</div>
// 					  	<div className="navbar-end">
// 					  	</div>
// 				</div>
// 				<div class="navbar-menu is-active">
// 				</div>
//         	</nav>
//          */}
//         </div>
//     )
// }
// export default Navbars




var NavApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavApp, _React$Component);

  function NavApp(props) {
    var _this;

    _classCallCheck(this, NavApp);

    _this = _possibleConstructorReturn(this, (NavApp.__proto__ || Object.getPrototypeOf(NavApp)).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(NavApp, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["n" /* Navbar */], {
        color: "primary",
        dark: true,
        expand: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["o" /* NavbarBrand */], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "SmartMorn"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["p" /* NavbarToggler */], {
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* Collapse */], {
        isOpen: this.state.isOpen,
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["k" /* Nav */], {
        className: "navbar-nav mr-auto mt-2 mt-lg-0",
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["l" /* NavItem */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__utils_helper_Link__["a" /* default */], {
        href: "/dashboard",
        activeClassName: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["m" /* NavLink */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "HOME"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["l" /* NavItem */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__utils_helper_Link__["a" /* default */], {
        href: "/alarm",
        activeClassName: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["m" /* NavLink */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "Alarm"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["l" /* NavItem */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__utils_helper_Link__["a" /* default */], {
        href: "/sleeping",
        activeClassName: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["m" /* NavLink */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "Sleep Setting"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["l" /* NavItem */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__utils_helper_Link__["a" /* default */], {
        href: "/adjustment",
        activeClassName: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["m" /* NavLink */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "ADJUSTMENT")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["k" /* Nav */], {
        className: "navbar-nav my-2 my-lg-0",
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["l" /* NavItem */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__utils_helper_Link__["a" /* default */], {
        href: "/login",
        activeClassName: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["m" /* NavLink */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "LOGOUT"))))));
    }
  }]);

  return NavApp;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (NavApp);

/***/ })

})
//# sourceMappingURL=8.9df4403bb2a5ba396864.hot-update.js.map