"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_tomash_spangelo_Desktop_kollektivet_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BottomNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BottomNav */ \"./components/BottomNav.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tomash.spangelo/Desktop/kollektivet/components/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession)(),\n      _useSession2 = (0,_Users_tomash_spangelo_Desktop_kollektivet_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useSession, 2),\n      session = _useSession2[0],\n      loading = _useSession2[1];\n\n  var ongoingSession = session ? true : false;\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        id: \"content\",\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_BottomNav__WEBPACK_IMPORTED_MODULE_2__.default, {\n        style: {\n          width: \"100%\",\n          position: \"fixed\",\n          bottom: 0\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      id: \"content\",\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), !ongoingSession || /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_BottomNav__WEBPACK_IMPORTED_MODULE_2__.default, {\n      style: {\n        width: \"100%\",\n        position: \"fixed\",\n        bottom: 0\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Layout, \"btnbnkOsPYI0mLfZro/2DT47AuA=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession];\n});\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDL0Isb0JBQTJCRiw0REFBVSxFQUFyQztBQUFBO0FBQUEsTUFBT0csT0FBUDtBQUFBLE1BQWdCQyxPQUFoQjs7QUFDQSxNQUFJQyxjQUFjLEdBQUdGLE9BQU8sR0FBRyxJQUFILEdBQVUsS0FBdEM7O0FBQ0EsTUFBSUMsT0FBSixFQUFhO0FBQ1gsd0JBQ0U7QUFBQSw4QkFDRTtBQUFLLFVBQUUsRUFBQyxTQUFSO0FBQUEsa0JBQW1CRjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHSSw4REFBQywwREFBRDtBQUNFLGFBQUssRUFBRTtBQUNMSSxVQUFBQSxLQUFLLEVBQUUsTUFERjtBQUVMQyxVQUFBQSxRQUFRLEVBQUUsT0FGTDtBQUdMQyxVQUFBQSxNQUFNLEVBQUU7QUFISDtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBLG9CQURGO0FBY0Q7O0FBQ0Qsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLFFBQUUsRUFBQyxTQUFSO0FBQUEsZ0JBQW1CTjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRyxDQUFDRyxjQUFELGlCQUNDLDhEQUFDLDBEQUFEO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLFFBQUFBLEtBQUssRUFBRSxNQURGO0FBRUxDLFFBQUFBLFFBQVEsRUFBRSxPQUZMO0FBR0xDLFFBQUFBLE1BQU0sRUFBRTtBQUhIO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKO0FBQUEsa0JBREY7QUFjRCxDQWpDRDs7R0FBTVA7VUFDdUJEOzs7S0FEdkJDO0FBbUNOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzP2U1OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJvdHRvbU5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3R0b21OYXZcIjtcbmltcG9ydCB7IHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcbiAgbGV0IG9uZ29pbmdTZXNzaW9uID0gc2Vzc2lvbiA/IHRydWUgOiBmYWxzZTtcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICA8Qm90dG9tTmF2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGlkPVwiY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIHshb25nb2luZ1Nlc3Npb24gfHwgKFxuICAgICAgICA8Qm90dG9tTmF2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3R0b21OYXYiLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkxheW91dCIsImNoaWxkcmVuIiwic2Vzc2lvbiIsImxvYWRpbmciLCJvbmdvaW5nU2Vzc2lvbiIsIndpZHRoIiwicG9zaXRpb24iLCJib3R0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});