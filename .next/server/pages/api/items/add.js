"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/items/add";
exports.ids = ["pages/api/items/add"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (true) {\n  if (false) {} else {\n    if (!global.prisma) {\n      global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n\n    prisma = global.prisma;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsSUFBSUUsTUFBSjs7QUFFQSxJQUFJLE1BQStCO0FBQ2pDLGFBQTJDLEVBQTNDLE1BRU87QUFDTCxRQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsTUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBRURDLElBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsaUVBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2xsZWt0aXZldC8uL2xpYi9wcmlzbWEuanM/YzU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWEsIFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xubGV0IHByaXNtYTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgfVxuXG4gICAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/items/add.js":
/*!********************************!*\
  !*** ./pages/api/items/add.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handle(req, res) {\n  var _session$user, _session$user2;\n\n  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n    req\n  });\n  const {\n    title,\n    content\n  } = req.body;\n  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.item.create({\n    data: {\n      title: title,\n      content: content,\n      bought: false,\n      createdBy: {\n        connect: {\n          id: session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.id\n        }\n      },\n      kollektiv: {\n        connect: {\n          id: session === null || session === void 0 ? void 0 : (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.kollektivId\n        }\n      }\n    }\n  });\n  res.json(result);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaXRlbXMvYWRkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsZUFBZUUsTUFBZixDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQUE7O0FBQzdDLFFBQU1DLE9BQU8sR0FBRyxNQUFNSiw0REFBVSxDQUFDO0FBQy9CRSxJQUFBQTtBQUQrQixHQUFELENBQWhDO0FBR0EsUUFBTTtBQUFFRyxJQUFBQSxLQUFGO0FBQVNDLElBQUFBO0FBQVQsTUFBcUJKLEdBQUcsQ0FBQ0ssSUFBL0I7QUFDQSxRQUFNQyxNQUFNLEdBQUcsTUFBTVQsNERBQUEsQ0FBbUI7QUFDdENZLElBQUFBLElBQUksRUFBRTtBQUNKTixNQUFBQSxLQUFLLEVBQUVBLEtBREg7QUFFSkMsTUFBQUEsT0FBTyxFQUFFQSxPQUZMO0FBR0pNLE1BQUFBLE1BQU0sRUFBRSxLQUhKO0FBSUpDLE1BQUFBLFNBQVMsRUFBRTtBQUNUQyxRQUFBQSxPQUFPLEVBQUU7QUFDUEMsVUFBQUEsRUFBRSxFQUFFWCxPQUFGLGFBQUVBLE9BQUYsd0NBQUVBLE9BQU8sQ0FBRVksSUFBWCxrREFBRSxjQUFlRDtBQURaO0FBREEsT0FKUDtBQVNKRSxNQUFBQSxTQUFTLEVBQUU7QUFDVEgsUUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFVBQUFBLEVBQUUsRUFBRVgsT0FBRixhQUFFQSxPQUFGLHlDQUFFQSxPQUFPLENBQUVZLElBQVgsbURBQUUsZUFBZUU7QUFEWjtBQURBO0FBVFA7QUFEZ0MsR0FBbkIsQ0FBckI7QUFpQkFmLEVBQUFBLEdBQUcsQ0FBQ2dCLElBQUosQ0FBU1gsTUFBVDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29sbGVrdGl2ZXQvLi9wYWdlcy9hcGkvaXRlbXMvYWRkLmpzP2ZiMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7XG4gICAgcmVxLFxuICB9KTtcbiAgY29uc3QgeyB0aXRsZSwgY29udGVudCB9ID0gcmVxLmJvZHk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5pdGVtLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIGJvdWdodDogZmFsc2UsXG4gICAgICBjcmVhdGVkQnk6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiBzZXNzaW9uPy51c2VyPy5pZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBrb2xsZWt0aXY6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiBzZXNzaW9uPy51c2VyPy5rb2xsZWt0aXZJZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4gIHJlcy5qc29uKHJlc3VsdCk7XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiZ2V0U2Vzc2lvbiIsImhhbmRsZSIsInJlcSIsInJlcyIsInNlc3Npb24iLCJ0aXRsZSIsImNvbnRlbnQiLCJib2R5IiwicmVzdWx0IiwiaXRlbSIsImNyZWF0ZSIsImRhdGEiLCJib3VnaHQiLCJjcmVhdGVkQnkiLCJjb25uZWN0IiwiaWQiLCJ1c2VyIiwia29sbGVrdGl2Iiwia29sbGVrdGl2SWQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/items/add.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/items/add.js"));
module.exports = __webpack_exports__;

})();