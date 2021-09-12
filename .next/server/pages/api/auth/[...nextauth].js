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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (true) {\n  if (false) {} else {\n    if (!global.prisma) {\n      global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n\n    prisma = global.prisma;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsSUFBSUUsTUFBSjs7QUFFQSxJQUFJLE1BQStCO0FBQ2pDLGFBQTJDLEVBQTNDLE1BRU87QUFDTCxRQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsTUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBRURDLElBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsaUVBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2xsZWt0aXZldC8uL2xpYi9wcmlzbWEuanM/YzU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWEsIFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xubGV0IHByaXNtYTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgfVxuXG4gICAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/adapters */ \"next-auth/adapters\");\n/* harmony import */ var next_auth_adapters__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_adapters__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.js\");\n\n\n\n\n\n\nconst authHandler = (req, res) => next_auth__WEBPACK_IMPORTED_MODULE_1___default()(req, res, options);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authHandler);\nconst options = {\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default().GitHub({\n    clientId: process.env.GITHUB_ID,\n    clientSecret: process.env.GITHUB_SECRET\n  })],\n  adapter: next_auth_adapters__WEBPACK_IMPORTED_MODULE_3___default().Prisma.Adapter({\n    prisma: _lib_prisma__WEBPACK_IMPORTED_MODULE_4__.default\n  }),\n  secret: process.env.SECRET,\n  callbacks: {\n    /**\n     * @param  {object} session      Session object\n     * @param  {object} user         User object    (if using database sessions)\n     *                               JSON Web Token (if not using database sessions)\n     * @return {object}              Session that will be returned to the client\n     */\n    session: async (session, user, _sessionToken) => {\n      session.user.id = user.id;\n      session.user.kollektivId = user.kollektivId;\n      return Promise.resolve(session);\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1LLFdBQVcsR0FBRyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBY04sZ0RBQVEsQ0FBQ0ssR0FBRCxFQUFNQyxHQUFOLEVBQVdDLE9BQVgsQ0FBMUM7O0FBQ0EsaUVBQWVILFdBQWY7QUFFQSxNQUFNRyxPQUFPLEdBQUc7QUFDZEMsRUFBQUEsU0FBUyxFQUFFLENBQ1RQLGlFQUFBLENBQWlCO0FBQ2ZTLElBQUFBLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFNBRFA7QUFFZkMsSUFBQUEsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGWCxHQUFqQixDQURTLENBREc7QUFPZEMsRUFBQUEsT0FBTyxFQUFFZCx3RUFBQSxDQUF3QjtBQUFFQyxJQUFBQSxNQUFNQSxrREFBQUE7QUFBUixHQUF4QixDQVBLO0FBUWRnQixFQUFBQSxNQUFNLEVBQUVSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxNQVJOO0FBU2RDLEVBQUFBLFNBQVMsRUFBRTtBQUNUO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJQyxJQUFBQSxPQUFPLEVBQUUsT0FBT0EsT0FBUCxFQUFnQkMsSUFBaEIsRUFBc0JDLGFBQXRCLEtBQXdDO0FBQy9DRixNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYUUsRUFBYixHQUFrQkYsSUFBSSxDQUFDRSxFQUF2QjtBQUNBSCxNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYUcsV0FBYixHQUEyQkgsSUFBSSxDQUFDRyxXQUFoQztBQUNBLGFBQU9DLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQk4sT0FBaEIsQ0FBUDtBQUNEO0FBWFE7QUFURyxDQUFoQiIsInNvdXJjZXMiOlsid2VicGFjazovL2tvbGxla3RpdmV0Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz85OTA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlIYW5kbGVyIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI7XG5pbXBvcnQgQWRhcHRlcnMgZnJvbSBcIm5leHQtYXV0aC9hZGFwdGVyc1wiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xuXG5jb25zdCBhdXRoSGFuZGxlciA9IChyZXEsIHJlcykgPT4gTmV4dEF1dGgocmVxLCByZXMsIG9wdGlvbnMpO1xuZXhwb3J0IGRlZmF1bHQgYXV0aEhhbmRsZXI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5HaXRIdWIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcbiAgYWRhcHRlcjogQWRhcHRlcnMuUHJpc21hLkFkYXB0ZXIoeyBwcmlzbWEgfSksXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxuICBjYWxsYmFja3M6IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IHNlc3Npb24gICAgICBTZXNzaW9uIG9iamVjdFxuICAgICAqIEBwYXJhbSAge29iamVjdH0gdXNlciAgICAgICAgIFVzZXIgb2JqZWN0ICAgIChpZiB1c2luZyBkYXRhYmFzZSBzZXNzaW9ucylcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKU09OIFdlYiBUb2tlbiAoaWYgbm90IHVzaW5nIGRhdGFiYXNlIHNlc3Npb25zKVxuICAgICAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgICAgIFNlc3Npb24gdGhhdCB3aWxsIGJlIHJldHVybmVkIHRvIHRoZSBjbGllbnRcbiAgICAgKi9cbiAgICBzZXNzaW9uOiBhc3luYyAoc2Vzc2lvbiwgdXNlciwgX3Nlc3Npb25Ub2tlbikgPT4ge1xuICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdXNlci5pZDtcbiAgICAgIHNlc3Npb24udXNlci5rb2xsZWt0aXZJZCA9IHVzZXIua29sbGVrdGl2SWQ7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlc3Npb24pO1xuICAgIH0sXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIk5leHRBcGlIYW5kbGVyIiwiTmV4dEF1dGgiLCJQcm92aWRlcnMiLCJBZGFwdGVycyIsInByaXNtYSIsImF1dGhIYW5kbGVyIiwicmVxIiwicmVzIiwib3B0aW9ucyIsInByb3ZpZGVycyIsIkdpdEh1YiIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJhZGFwdGVyIiwiUHJpc21hIiwiQWRhcHRlciIsInNlY3JldCIsIlNFQ1JFVCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ1c2VyIiwiX3Nlc3Npb25Ub2tlbiIsImlkIiwia29sbGVrdGl2SWQiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("next");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/adapters":
/*!*************************************!*\
  !*** external "next-auth/adapters" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-auth/adapters");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();