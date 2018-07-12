webpackHotUpdate(9,{

/***/ "./redux/reducers/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_api__ = __webpack_require__("./utils/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_define__ = __webpack_require__("./node_modules/redux-define/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_define___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_define__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var App = 'SMARTMORN';
var ACTION_AUTH_LOGIN = Object(__WEBPACK_IMPORTED_MODULE_2_redux_define__["defineAction"])('AUTH_LOGIN', ['PENDING', 'RESOLVED', 'REJECTED'], App);
var ACTION_AUTH_REGISTER = Object(__WEBPACK_IMPORTED_MODULE_2_redux_define__["defineAction"])('AUTH_REGISTER', ['PENDING', 'RESOLVED', 'REJECTED'], App);
console.log(ACTION_AUTH_REGISTER);
var initialState = {
  isLogin: false,
  loading: false,
  errorMessage: ''
};
/* harmony default export */ __webpack_exports__["b"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ACTION_AUTH_LOGIN.RESOLVED:
      return _objectSpread({}, state, {
        isLogin: !state.isLogin,
        loading: !state.loading
      });

    case ACTION_AUTH_LOGIN.PENDING:
      return _objectSpread({}, state, {
        loading: !state.loading
      });

    case ACTION_AUTH_LOGIN.REJECTED:
      return _objectSpread({}, state, {
        loading: !state.loading,
        errorMessage: action.payload.message
      });

    default:
      return state;
  }
});
var actions = {
  Login: function Login(username, password) {
    return function (dispatch) {
      dispatch({
        type: ACTION_AUTH.PENDING
      });
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_api__["a" /* default */])().post('/users/login', {
        username: username,
        password: password
      }).then(function (resp) {
        if (!resp.data.error) {
          window.localStorage.setItem('SmartMornKey', resp.data.token);
          return dispatch({
            type: ACTION_AUTH_LOGIN.RESOLVED
          });
        } else {
          return dispatch({
            type: ACTION_AUTH_LOGIN.REJECTED,
            payload: {
              message: resp.data.message
            }
          });
        }
      }).catch(function (error) {
        return dispatch({
          type: ACTION_AUTH_LOGIN.REJECTED,
          payload: {
            message: 'Error : cannot connect to api server'
          }
        });
      });
    };
  },
  Register: function Register(username, password) {
    return function (dispatch) {
      console.log('register');
    };
  }
}; // Debug 
// export const login = (username,password) => (dispatch) => {
//     const data = dispatch({
//         type: 'Login',
//         payload: {
//             username: username,
//             password: password
//         }
//     });
//     console.log(data);
// }

/***/ })

})
//# sourceMappingURL=9.cd5a89a64cf7f08d87c7.hot-update.js.map