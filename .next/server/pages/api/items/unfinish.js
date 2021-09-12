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
exports.id = "pages/api/items/unfinish";
exports.ids = ["pages/api/items/unfinish"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (true) {\n  if (false) {} else {\n    if (!global.prisma) {\n      global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n\n    prisma = global.prisma;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsSUFBSUUsTUFBSjs7QUFFQSxJQUFJLE1BQStCO0FBQ2pDLGFBQTJDLEVBQTNDLE1BRU87QUFDTCxRQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsTUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBRURDLElBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsaUVBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2xsZWt0aXZldC8uL2xpYi9wcmlzbWEuanM/YzU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWEsIFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xubGV0IHByaXNtYTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgfVxuXG4gICAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/items/unfinish.js":
/*!*************************************!*\
  !*** ./pages/api/items/unfinish.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handle(req, res) {\n  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n    req\n  });\n  const {\n    item\n  } = req.body;\n  console.log(session);\n  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.item.update({\n    where: {\n      id: item.id\n    },\n    data: {\n      bought: false,\n      finishedBy: {\n        disconnect: true\n      },\n      boughtAt: null,\n      pricePayed: null\n    }\n  });\n  res.json(result);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaXRlbXMvdW5maW5pc2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxlQUFlRSxNQUFmLENBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDN0MsUUFBTUMsT0FBTyxHQUFHLE1BQU1KLDREQUFVLENBQUM7QUFDL0JFLElBQUFBO0FBRCtCLEdBQUQsQ0FBaEM7QUFHQSxRQUFNO0FBQUVHLElBQUFBO0FBQUYsTUFBV0gsR0FBRyxDQUFDSSxJQUFyQjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosT0FBWjtBQUNBLFFBQU1LLE1BQU0sR0FBRyxNQUFNViw0REFBQSxDQUFtQjtBQUN0Q1ksSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLEVBQUUsRUFBRVAsSUFBSSxDQUFDTztBQURKLEtBRCtCO0FBSXRDQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsTUFBTSxFQUFFLEtBREo7QUFFSkMsTUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLFFBQUFBLFVBQVUsRUFBRTtBQURGLE9BRlI7QUFLSkMsTUFBQUEsUUFBUSxFQUFFLElBTE47QUFNSkMsTUFBQUEsVUFBVSxFQUFFO0FBTlI7QUFKZ0MsR0FBbkIsQ0FBckI7QUFhQWYsRUFBQUEsR0FBRyxDQUFDZ0IsSUFBSixDQUFTVixNQUFUO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2xsZWt0aXZldC8uL3BhZ2VzL2FwaS9pdGVtcy91bmZpbmlzaC5qcz83OTNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oe1xuICAgIHJlcSxcbiAgfSk7XG4gIGNvbnN0IHsgaXRlbSB9ID0gcmVxLmJvZHk7XG4gIGNvbnNvbGUubG9nKHNlc3Npb24pO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuaXRlbS51cGRhdGUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogaXRlbS5pZCxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGJvdWdodDogZmFsc2UsXG4gICAgICBmaW5pc2hlZEJ5OiB7XG4gICAgICAgIGRpc2Nvbm5lY3Q6IHRydWUsXG4gICAgICB9LFxuICAgICAgYm91Z2h0QXQ6IG51bGwsXG4gICAgICBwcmljZVBheWVkOiBudWxsLFxuICAgIH0sXG4gIH0pO1xuICByZXMuanNvbihyZXN1bHQpO1xufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImdldFNlc3Npb24iLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwiaXRlbSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwidXBkYXRlIiwid2hlcmUiLCJpZCIsImRhdGEiLCJib3VnaHQiLCJmaW5pc2hlZEJ5IiwiZGlzY29ubmVjdCIsImJvdWdodEF0IiwicHJpY2VQYXllZCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/items/unfinish.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/items/unfinish.js"));
module.exports = __webpack_exports__;

})();