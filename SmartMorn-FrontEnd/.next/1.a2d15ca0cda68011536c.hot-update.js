webpackHotUpdate(1,{

/***/ "./redux/reducers/adjustment.js":
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
var ACTION_AUTH_ADJUST = Object(__WEBPACK_IMPORTED_MODULE_2_redux_define__["defineAction"])('AUTH_ADJUST', ['PENDING', 'RESOLVED', 'REJECTED', 'CLEAR'], App);
console.log(ACTION_AUTH_ADJUST);
var initialState = {
  loading: false,
  error: '',
  message: ''
};
/* harmony default export */ __webpack_exports__["b"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ACTION_AUTH_ADJUST.RESOLVED:
      return _objectSpread({}, state, {
        error: false,
        message: action.payload.message
      });

    case ACTION_AUTH_ADJUST.PENDING:
      return _objectSpread({}, state);

    case ACTION_AUTH_ADJUST.REJECTED:
      return _objectSpread({}, state);

    case ACTION_AUTH_ADJUST.CLEAR:
      return _objectSpread({}, state, {
        message: false
      });

    default:
      return state;
  }
});
var actions = {
  turnOn: function turnOn(state) {
    return function (dispatch) {
      dispatch({
        type: ACTION_AUTH_ADJUST.PENDING
      });
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_api__["a" /* default */])().get('/adjustment/on').then(function (resp) {
        if (!resp.data.error) {
          return dispatch({
            type: ACTION_AUTH_ADJUST.RESOLVED,
            payload: {
              message: resp.data.message
            }
          });
        } else {
          return dispatch({
            type: ACTION_AUTH_ADJUST.REJECTED,
            payload: {
              message: resp.data.message
            }
          });
        }
      }).catch(function (error) {
        return dispatch({
          type: ACTION_AUTH_ADJUST.REJECTED,
          payload: {
            message: 'Error : cannot connect to api server'
          }
        });
      });
    };
  },
  turnOff: function turnOff(state) {
    return function (dispatch) {
      dispatch({
        type: ACTION_AUTH_ADJUST.PENDING
      });
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_api__["a" /* default */])().get('/adjustment/off').then(function (resp) {
        if (!resp.data.error) {
          return dispatch({
            type: ACTION_AUTH_ADJUST.RESOLVED,
            payload: {
              message: resp.data.message
            }
          });
        } else {
          return dispatch({
            type: ACTION_AUTH_ADJUST.REJECTED,
            payload: {
              message: resp.data.message
            }
          });
        }
      }).catch(function (error) {
        return dispatch({
          type: ACTION_AUTH_ADJUST.REJECTED,
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
        type: ACTION_AUTH_ADJUST.CLEAR
      });
    };
  }
};

/***/ })

})
//# sourceMappingURL=1.a2d15ca0cda68011536c.hot-update.js.map