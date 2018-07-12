webpackHotUpdate(1,{

/***/ "./redux/reducers/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_api__ = __webpack_require__("./utils/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_define__ = __webpack_require__("./node_modules/redux-define/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_define___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_define__);



var ACTION_AUTH = Object(__WEBPACK_IMPORTED_MODULE_2_redux_define__["defineAction"])('AUTH', ['LOGIN', 'PENDING', 'RESOLVED', 'REJECTED'], 'SMARTMORN');
console.log(ACTION_AUTH);
var initialState = {
  isLogin: false,
  username: '',
  password: ''
};
/* harmony default export */ __webpack_exports__["b"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ACTION_AUTH.LOGIN:
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_api__["a" /* default */])().post('/users/login').then(function (resp) {
        console.log(resp);
      }).catch(function (error) {
        console.log(error);
      });
      return {
        isLogin: !state.isLogin,
        username: action.payload.username,
        password: action.payload.password
      };

    default:
      return state;
  }
});
var actions = {
  Login: function Login(username, password) {
    return {
      type: ACTION_AUTH.LOGIN,
      payload: {
        username: username,
        password: password
      }
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
//# sourceMappingURL=1.4d0af3ce36a2d8027618.hot-update.js.map