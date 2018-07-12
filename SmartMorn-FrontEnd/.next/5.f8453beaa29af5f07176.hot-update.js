webpackHotUpdate(5,{

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
      __WEBPACK_IMPORTED_MODULE_1__utils_api__["default"].get();
      console.log(action.payload);
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

/***/ }),

/***/ "./utils/api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


var createApiInstance = function createApiInstance() {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    baseURL: '/api/v1/',
    headers: {
      'x-access-token': window.localStorage.getItem('smartKey') || ''
    }
  });
};

var handleResponse = function handleResponse(response) {
  if (response.data) {
    return Promise.resolve(response);
  }

  return Promise.reject(response);
};

var catchError = function catchError(e) {
  return Promise.reject(e.response.data);
}; // export default {
//     get: path => (
//         createApiInstance()
//         .get(path)
//         .then(handleResponse)
//         .catch(catchError)
//     ),
//     post: (path, body = {}, headers = {}) => (
//         createApiInstance()
//         .request({
//             url: path,
//             method: 'POST',
//             headers,
//             data: body,
//         })
//         .then(handleResponse)
//         .catch(catchError)
//     ),
//     put: (path, body = {}) => (
//         createApiInstance()
//         .request({
//             url: path,
//             method: 'PUT',
//             data: body,
//         })
//         .then(handleResponse)
//         .catch(catchError)
//     ),
// };

/***/ })

})
//# sourceMappingURL=5.f8453beaa29af5f07176.hot-update.js.map