webpackHotUpdate(5,{

/***/ "./utils/api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);

/* harmony default export */ __webpack_exports__["a"] = (instance = function instance() {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    baseURL: '/api/v1/',
    headers: {
      'x-access-token': window.localStorage.getItem('smartKey') || ''
    }
  });
}); // const handleResponse = (response) => {
//     if (response.data) {
//         return Promise.resolve(response);
//     }
//     return Promise.reject(response);
// };
// const catchError = e => Promise.reject(e.response.data);
// export default {
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
//# sourceMappingURL=5.b8b85db60ad9f0908027.hot-update.js.map