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
exports.id = "pages/api/members";
exports.ids = ["pages/api/members"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (true) {\n  if (false) {} else {\n    if (!global.prisma) {\n      global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n\n    prisma = global.prisma;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsSUFBSUUsTUFBSjs7QUFFQSxJQUFJLE1BQStCO0FBQ2pDLGFBQTJDLEVBQTNDLE1BRU87QUFDTCxRQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsTUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBRURDLElBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsaUVBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2xsZWt0aXZldC8uL2xpYi9wcmlzbWEuanM/YzU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWEsIFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xubGV0IHByaXNtYTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgfVxuXG4gICAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/members/index.js":
/*!************************************!*\
  !*** ./pages/api/members/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.js\");\n\n\nasync function handle(req, res) {\n  var _session$user;\n\n  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n    req\n  });\n  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.default.kollektiv.findFirst({\n    where: {\n      medlemmer: {\n        some: {\n          id: session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.id\n        }\n      }\n    },\n    include: {\n      medlemmer: true\n    }\n  });\n  res.json(result);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbWVtYmVycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVlLGVBQWVFLE1BQWYsQ0FBc0JDLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUFBOztBQUM3QyxRQUFNQyxPQUFPLEdBQUcsTUFBTUwsNERBQVUsQ0FBQztBQUFFRyxJQUFBQTtBQUFGLEdBQUQsQ0FBaEM7QUFDQSxRQUFNRyxNQUFNLEdBQUcsTUFBTUwsb0VBQUEsQ0FBMkI7QUFDOUNRLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxTQUFTLEVBQUU7QUFDVEMsUUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFVBQUFBLEVBQUUsRUFBRVAsT0FBRixhQUFFQSxPQUFGLHdDQUFFQSxPQUFPLENBQUVRLElBQVgsa0RBQUUsY0FBZUQ7QUFEZjtBQURHO0FBRE4sS0FEdUM7QUFROUNFLElBQUFBLE9BQU8sRUFBRTtBQUNQSixNQUFBQSxTQUFTLEVBQUU7QUFESjtBQVJxQyxHQUEzQixDQUFyQjtBQVlBTixFQUFBQSxHQUFHLENBQUNXLElBQUosQ0FBU1QsTUFBVDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29sbGVrdGl2ZXQvLi9wYWdlcy9hcGkvbWVtYmVycy9pbmRleC5qcz9lOGU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5rb2xsZWt0aXYuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgbWVkbGVtbWVyOiB7XG4gICAgICAgIHNvbWU6IHtcbiAgICAgICAgICBpZDogc2Vzc2lvbj8udXNlcj8uaWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgbWVkbGVtbWVyOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xuICByZXMuanNvbihyZXN1bHQpO1xufVxuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJwcmlzbWEiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwicmVzdWx0Iiwia29sbGVrdGl2IiwiZmluZEZpcnN0Iiwid2hlcmUiLCJtZWRsZW1tZXIiLCJzb21lIiwiaWQiLCJ1c2VyIiwiaW5jbHVkZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/members/index.js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/members/index.js"));
module.exports = __webpack_exports__;

})();