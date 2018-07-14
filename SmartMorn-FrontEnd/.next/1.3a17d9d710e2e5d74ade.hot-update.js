webpackHotUpdate(1,{

/***/ "./redux/reducers/alarm.js":
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
var ACTION_AUTH_ALARM = Object(__WEBPACK_IMPORTED_MODULE_2_redux_define__["defineAction"])('AUTH_ALARM', ['PENDING', 'RESOLVED', 'REJECTED', 'CLEAR'], App);
console.log(ACTION_AUTH_ALARM);
var initialState = {
  loading: false,
  error: '',
  message: ''
};
/* harmony default export */ __webpack_exports__["b"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ACTION_AUTH_ALARM.RESOLVED:
      return _objectSpread({}, state, {
        error: false,
        message: action.payload.message
      });

    case ACTION_AUTH_ALARM.PENDING:
      return _objectSpread({}, state);

    case ACTION_AUTH_ALARM.REJECTED:
      return _objectSpread({}, state);

    case ACTION_AUTH_ALARM.CLEAR:
      return _objectSpread({}, state, {
        message: false
      });

    default:
      return state;
  }
});
var actions = {
  setAlarm: function setAlarm(state) {
    return function (dispatch) {
      console.log('work @ redux');
      dispatch({
        type: ACTION_AUTH_ALARM.PENDING
      });
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_api__["a" /* default */])().post('/users/setalarm', {
        date: state.date,
        time: state.time
      }).then(function (resp) {
        if (!resp.data.error) {
          dispatch({
            type: ACTION_AUTH_ALARM.RESOLVED,
            payload: {
              message: resp.data.message
            }
          });
        } else {
          dispatch({
            type: ACTION_AUTH_ALARM.REJECTED,
            payload: {
              message: resp.data.message
            }
          });
        }
      }).catch(function (error) {
        return dispatch({
          type: ACTION_AUTH_ALARM.REJECTED,
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
        type: ACTION_AUTH_ALARM.CLEAR
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
  auth: __WEBPACK_IMPORTED_MODULE_1__auth__["b" /* default */],
  alarm: __WEBPACK_IMPORTED_MODULE_2__alarm__["b" /* default */],
  sleep: __WEBPACK_IMPORTED_MODULE_3__sleepSession__["a" /* default */],
  dashboard: __WEBPACK_IMPORTED_MODULE_4__dashboard__["a" /* default */],
  adjustment: __WEBPACK_IMPORTED_MODULE_5__adjustment__["a" /* default */]
}));

/***/ })

})
//# sourceMappingURL=1.3a17d9d710e2e5d74ade.hot-update.js.map