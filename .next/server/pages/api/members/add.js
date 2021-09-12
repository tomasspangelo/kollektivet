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
exports.id = "pages/api/members/add";
exports.ids = ["pages/api/members/add"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (true) {\n  if (false) {} else {\n    if (!global.prisma) {\n      global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n\n    prisma = global.prisma;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsSUFBSUUsTUFBSjs7QUFFQSxJQUFJLE1BQStCO0FBQ2pDLGFBQTJDLEVBQTNDLE1BRU87QUFDTCxRQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsTUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBRURDLElBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsaUVBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2xsZWt0aXZldC8uL2xpYi9wcmlzbWEuanM/YzU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWEsIFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xubGV0IHByaXNtYTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgfVxuXG4gICAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/members/add.js":
/*!**********************************!*\
  !*** ./pages/api/members/add.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.js\");\n\nasync function handle(req, res) {\n  const {\n    id,\n    kollektivId\n  } = req.body;\n  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.kollektiv.update({\n    where: {\n      id: kollektivId\n    },\n    data: {\n      medlemmer: {\n        connect: {\n          id: id\n        }\n      }\n    }\n  });\n  res.json(result);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbWVtYmVycy9hZGQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLGVBQWVDLE1BQWYsQ0FBc0JDLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM3QyxRQUFNO0FBQUVDLElBQUFBLEVBQUY7QUFBTUMsSUFBQUE7QUFBTixNQUFzQkgsR0FBRyxDQUFDSSxJQUFoQztBQUNBLFFBQU1DLE1BQU0sR0FBRyxNQUFNUCxpRUFBQSxDQUF3QjtBQUMzQ1UsSUFBQUEsS0FBSyxFQUFFO0FBQ0xOLE1BQUFBLEVBQUUsRUFBRUM7QUFEQyxLQURvQztBQUkzQ00sSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLFNBQVMsRUFBRTtBQUNUQyxRQUFBQSxPQUFPLEVBQUU7QUFDUFQsVUFBQUEsRUFBRSxFQUFFQTtBQURHO0FBREE7QUFEUDtBQUpxQyxHQUF4QixDQUFyQjtBQVlBRCxFQUFBQSxHQUFHLENBQUNXLElBQUosQ0FBU1AsTUFBVDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29sbGVrdGl2ZXQvLi9wYWdlcy9hcGkvbWVtYmVycy9hZGQuanM/ZGQ2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xuICBjb25zdCB7IGlkLCBrb2xsZWt0aXZJZCB9ID0gcmVxLmJvZHk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5rb2xsZWt0aXYudXBkYXRlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQ6IGtvbGxla3RpdklkLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbWVkbGVtbWVyOiB7XG4gICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICByZXMuanNvbihyZXN1bHQpO1xufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZSIsInJlcSIsInJlcyIsImlkIiwia29sbGVrdGl2SWQiLCJib2R5IiwicmVzdWx0Iiwia29sbGVrdGl2IiwidXBkYXRlIiwid2hlcmUiLCJkYXRhIiwibWVkbGVtbWVyIiwiY29ubmVjdCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/members/add.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/members/add.js"));
module.exports = __webpack_exports__;

})();