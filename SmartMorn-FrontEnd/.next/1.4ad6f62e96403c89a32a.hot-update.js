webpackHotUpdate(1,{

/***/ "./redux/reducers/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export actions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_api__ = __webpack_require__("./utils/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_define__ = __webpack_require__("./node_modules/redux-define/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_define___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_define__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var App = 'SMARTMORN';
var ACTION_AUTH_LOGIN = Object(__WEBPACK_IMPORTED_MODULE_2_redux_define__["defineAction"])('AUTH_LOGIN', ['PENDING', 'RESOLVED', 'REJECTED', 'CLEAR'], App);
var ACTION_AUTH_REGISTER = Object(__WEBPACK_IMPORTED_MODULE_2_redux_define__["defineAction"])('AUTH_REGISTER', ['PENDING', 'RESOLVED', 'REJECTED', 'CLEAR'], App);
console.log(ACTION_AUTH_REGISTER);
var initialState = {
  isLogin: false,
  loading: false,
  messageLogin: '',
  messageRegister: '',
  error: ''
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ACTION_AUTH_LOGIN.RESOLVED:
      return _objectSpread({}, state, {
        isLogin: !state.isLogin,
        loading: false,
        messageLogin: action.payload.message
      });

    case ACTION_AUTH_LOGIN.PENDING:
      return _objectSpread({}, state, {
        loading: !state.loading
      });

    case ACTION_AUTH_LOGIN.REJECTED:
      return _objectSpread({}, state, {
        loading: !state.loading,
        messageLogin: action.payload.message
      });

    case ACTION_AUTH_REGISTER.REJECTED:
      return _objectSpread({}, state, {
        loading: !state.loading,
        messageRegister: action.payload.message,
        error: true
      });

    case ACTION_AUTH_REGISTER.PENDING:
      return _objectSpread({}, state, {
        loading: !state.loading
      });

    case ACTION_AUTH_REGISTER.RESOLVED:
      return _objectSpread({}, state, {
        messageRegister: action.payload.message,
        error: false
      });

    case ACTION_AUTH_REGISTER.CLEAR:
      return _objectSpread({}, state, {
        messageRegister: false,
        error: false
      });

    case ACTION_AUTH_LOGIN.CLEAR:
      return _objectSpread({}, state, {
        messageLogin: false,
        error: false
      });

    default:
      return state;
  }
});
var actions = {
  Login: function Login(username, password) {
    return function (dispatch) {
      dispatch({
        type: ACTION_AUTH_LOGIN.PENDING
      });
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_api__["a" /* default */])().post('/users/login', {
        username: username,
        password: password
      }).then(function (resp) {
        if (!resp.data.error) {
          window.localStorage.setItem('SmartMornKey', resp.data.token);
          return dispatch({
            type: ACTION_AUTH_LOGIN.RESOLVED,
            payload: {
              message: false
            }
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
  Register: function Register(state) {
    return function (dispatch) {
      if (state.password != state.confirmPassword) {
        return dispatch({
          type: ACTION_AUTH_REGISTER.REJECTED,
          payload: {
            message: 'Password not Match'
          }
        });
      }

      dispatch({
        type: ACTION_AUTH_REGISTER.PENDING
      });
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_api__["a" /* default */])().post('/users/register', {
        username: state.username,
        password: state.password,
        birthday: state.birthday,
        gender: state.gender
      }).then(function (resp) {
        if (!resp.data.error) {
          return dispatch({
            type: ACTION_AUTH_REGISTER.RESOLVED,
            payload: {
              message: resp.data.message
            }
          });
        } else {
          return dispatch({
            type: ACTION_AUTH_REGISTER.REJECTED,
            payload: {
              message: resp.data.message
            }
          });
        }
      }).catch(function (error) {
        return dispatch({
          type: ACTION_AUTH_REGISTER.REJECTED,
          payload: {
            message: 'Error : cannot connect to api server'
          }
        });
      });
    };
  },
  clearMessageLogin: function clearMessageLogin() {
    return function (dispatch) {
      dispatch({
        type: ACTION_AUTH_LOGIN.CLEAR
      });
    };
  },
  clearMessageRegister: function clearMessageRegister() {
    return function (dispatch) {
      dispatch({
        type: ACTION_AUTH_REGISTER.CLEAR
      });
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

/***/ }),

/***/ "./redux/reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__("./redux/reducers/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alarm__ = __webpack_require__("./redux/reducers/alarm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sleepSession__ = __webpack_require__("./redux/reducers/sleepSession.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard__ = __webpack_require__("./redux/reducers/dashboard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adjustment__ = __webpack_require__("./redux/reducers/adjustment.js");






/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  auth: __WEBPACK_IMPORTED_MODULE_1__auth__["a" /* default */],
  alarm: __WEBPACK_IMPORTED_MODULE_2__alarm__["b" /* default */],
  sleep: __WEBPACK_IMPORTED_MODULE_3__sleepSession__["a" /* default */],
  dashboard: __WEBPACK_IMPORTED_MODULE_4__dashboard__["a" /* default */],
  adjustment: __WEBPACK_IMPORTED_MODULE_5__adjustment__["b" /* default */]
}));

/***/ }),

/***/ "./redux/reducers/sleepSession.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export actions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_api__ = __webpack_require__("./utils/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_define__ = __webpack_require__("./node_modules/redux-define/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_define___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_define__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var App = 'SMARTMORN';
var ACTION_AUTH_SLEEP = Object(__WEBPACK_IMPORTED_MODULE_2_redux_define__["defineAction"])('AUTH_SLEEP', ['PENDING', 'RESOLVED', 'REJECTED', 'CLEAR'], App);
console.log(ACTION_AUTH_SLEEP);
var initialState = {
  loading: false,
  error: '',
  message: ''
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ACTION_AUTH_SLEEP.RESOLVED:
      return _objectSpread({}, state, {
        error: false,
        message: action.payload.message
      });

    case ACTION_AUTH_SLEEP.PENDING:
      return _objectSpread({}, state);

    case ACTION_AUTH_SLEEP.REJECTED:
      return _objectSpread({}, state);

    case ACTION_AUTH_SLEEP.CLEAR:
      return _objectSpread({}, state, {
        message: false
      });

    default:
      return state;
  }
});
var actions = {
  setSleepSession: function setSleepSession(state) {
    return function (dispatch) {
      console.log('work @ redux');
      dispatch({
        type: ACTION_AUTH_SLEEP.PENDING
      });
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_api__["a" /* default */])().post('/users/setsleep', {
        time: state.sleepTime
      }).then(function (resp) {
        if (!resp.data.error) {
          dispatch({
            type: ACTION_AUTH_SLEEP.RESOLVED,
            payload: {
              message: resp.data.message
            }
          });
        } else {
          dispatch({
            type: ACTION_AUTH_SLEEP.REJECTED,
            payload: {
              message: resp.data.message
            }
          });
        }
      }).catch(function (error) {
        return dispatch({
          type: ACTION_AUTH_SLEEP.REJECTED,
          payload: {
            message: 'Error : cannot connect to api server'
          }
        });
      });
    };
  },
  clearMessage: function clearMessage() {
    return function (dispatch) {
      dispatch({
        type: ACTION_AUTH_SLEEP.CLEAR
      });
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
//# sourceMappingURL=1.4ad6f62e96403c89a32a.hot-update.js.map