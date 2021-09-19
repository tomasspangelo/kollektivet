"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/list",{

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _components_util_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/util/hooks */ \"./components/util/hooks.js\");\n/* harmony import */ var _components_ShoppingList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ShoppingList */ \"./components/ShoppingList.js\");\n/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AddShoppingCart */ \"./node_modules/@material-ui/icons/AddShoppingCart.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AddItemDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddItemDialog */ \"./components/AddItemDialog.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/tomash.spangelo/Desktop/kollektivet/pages/list.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar List = function List() {\n  _s();\n\n  var _useItems = (0,_components_util_hooks__WEBPACK_IMPORTED_MODULE_0__.useItems)(),\n      items = _useItems.items;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var numUnfinished = items === null || items === void 0 ? void 0 : items.filter(function (item) {\n    return item.bought;\n  }).length;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"flexCenter\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n        variant: \"h6\",\n        gutterBottom: true,\n        children: \"Handleliste\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n        variant: \"subtitle1\",\n        color: \"textSecondary\",\n        gutterBottom: true,\n        children: \"\".concat(numUnfinished, \"/\").concat(items === null || items === void 0 ? void 0 : items.length, \" gjenstander kj\\xF8pt inn.\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"overflowBox\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ShoppingList__WEBPACK_IMPORTED_MODULE_1__.default, {\n        items: items\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"flexCenter\",\n      style: {\n        marginTop: \"16px\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {\n        variant: \"outlined\",\n        startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 22\n        }, _this),\n        onClick: function onClick() {\n          return setOpen(true);\n        },\n        children: \"Legg til\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_AddItemDialog__WEBPACK_IMPORTED_MODULE_3__.default, {\n      open: open,\n      setOpen: setOpen\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(List, \"DbkCz/FlX5u8FrQVvr0VZxvW8MY=\", false, function () {\n  return [_components_util_hooks__WEBPACK_IMPORTED_MODULE_0__.useItems];\n});\n\n_c = List;\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\nvar _c;\n\n$RefreshReg$(_c, \"List\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1RLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsa0JBQWtCTCxnRUFBUSxFQUExQjtBQUFBLE1BQVFNLEtBQVIsYUFBUUEsS0FBUjs7QUFDQSxrQkFBd0JILCtDQUFRLENBQUMsS0FBRCxDQUFoQztBQUFBLE1BQU9JLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLE1BQU1DLGFBQWEsR0FBR0gsS0FBSCxhQUFHQSxLQUFILHVCQUFHQSxLQUFLLENBQUVJLE1BQVAsQ0FBYyxVQUFDQyxJQUFEO0FBQUEsV0FBVUEsSUFBSSxDQUFDQyxNQUFmO0FBQUEsR0FBZCxFQUFxQ0MsTUFBM0Q7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw4QkFDRSw4REFBQyx5REFBRDtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUF5QixvQkFBWSxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUsOERBQUMseURBQUQ7QUFBWSxlQUFPLEVBQUMsV0FBcEI7QUFBZ0MsYUFBSyxFQUFDLGVBQXRDO0FBQXNELG9CQUFZLE1BQWxFO0FBQUEsNEJBQ01KLGFBRE4sY0FDdUJILEtBRHZCLGFBQ3VCQSxLQUR2Qix1QkFDdUJBLEtBQUssQ0FBRU8sTUFEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFPRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFVRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsNkJBQ0UsOERBQUMsNkRBQUQ7QUFBYyxhQUFLLEVBQUVQO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsZUFhRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQTRCLFdBQUssRUFBRTtBQUFFUSxRQUFBQSxTQUFTLEVBQUU7QUFBYixPQUFuQztBQUFBLDZCQUNFLDhEQUFDLHFEQUFEO0FBQ0UsZUFBTyxFQUFDLFVBRFY7QUFFRSxpQkFBUyxlQUFFLDhEQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRmI7QUFHRSxlQUFPLEVBQUU7QUFBQSxpQkFBTU4sT0FBTyxDQUFDLElBQUQsQ0FBYjtBQUFBLFNBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkYsZUFzQkUsOERBQUMsOERBQUQ7QUFBZSxVQUFJLEVBQUVELElBQXJCO0FBQTJCLGFBQU8sRUFBRUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCRjtBQUFBLGtCQURGO0FBMEJELENBOUJEOztHQUFNSDtVQUNjTDs7O0tBRGRLO0FBZ0NOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xpc3QuanM/YTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENoZWNrYm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyB1c2VJdGVtcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWwvaG9va3NcIjtcbmltcG9ydCBTaG9wcGluZ0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hvcHBpbmdMaXN0XCI7XG5pbXBvcnQgQWRkU2hvcHBpbmdDYXJ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFNob3BwaW5nQ2FydFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBZGRJdGVtRGlhbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL0FkZEl0ZW1EaWFsb2dcIjtcblxuY29uc3QgTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgeyBpdGVtcyB9ID0gdXNlSXRlbXMoKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBudW1VbmZpbmlzaGVkID0gaXRlbXM/LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5ib3VnaHQpLmxlbmd0aDtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Q2VudGVyXCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICBIYW5kbGVsaXN0ZVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAge2Ake251bVVuZmluaXNoZWR9LyR7aXRlbXM/Lmxlbmd0aH0gZ2plbnN0YW5kZXIga2rDuHB0IGlubi5gfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxDaGVja2JveD48L0NoZWNrYm94PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93Qm94XCI+XG4gICAgICAgIDxTaG9wcGluZ0xpc3QgaXRlbXM9e2l0ZW1zfT48L1Nob3BwaW5nTGlzdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Q2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE2cHhcIiB9fT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgc3RhcnRJY29uPXs8QWRkU2hvcHBpbmdDYXJ0SWNvbiAvPn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxuICAgICAgICA+XG4gICAgICAgICAgTGVnZyB0aWxcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxBZGRJdGVtRGlhbG9nIG9wZW49e29wZW59IHNldE9wZW49e3NldE9wZW59PjwvQWRkSXRlbURpYWxvZz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2hlY2tib3giLCJUeXBvZ3JhcGh5IiwidXNlSXRlbXMiLCJTaG9wcGluZ0xpc3QiLCJBZGRTaG9wcGluZ0NhcnRJY29uIiwidXNlU3RhdGUiLCJBZGRJdGVtRGlhbG9nIiwiTGlzdCIsIml0ZW1zIiwib3BlbiIsInNldE9wZW4iLCJudW1VbmZpbmlzaGVkIiwiZmlsdGVyIiwiaXRlbSIsImJvdWdodCIsImxlbmd0aCIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/list.js\n");

/***/ })

});