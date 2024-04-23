"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/global/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/global/Navbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/global */ \"./data/global.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction Navbar(param) {\n    var currentPage = param.currentPage;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n        className: \"flex items-center justify-between\",\n        __source: {\n            fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Navbar.tsx\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                className: \"list-none font-bold text-lg cursor-pointer\",\n                __source: {\n                    fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Navbar.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    __source: {\n                        fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Navbar.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                        className: \"font-black text-xl flex items-center\",\n                        __source: {\n                            fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Navbar.tsx\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                className: \"mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500\",\n                                src: \"/static/logos/logo_no_text.svg\",\n                                width: \"60\",\n                                __source: {\n                                    fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Navbar.tsx\",\n                                    lineNumber: 11,\n                                    columnNumber: 13\n                                },\n                                __self: this\n                            }),\n                            \"Sourav\".split(\"\").map(function(letter, index) {\n                                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim\",\n                                    __source: {\n                                        fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Navbar.tsx\",\n                                        lineNumber: 18,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: letter\n                                }, index));\n                            })\n                        ]\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                className: \"flex items-center space-x-10\",\n                __source: {\n                    fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Navbar.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: _data_global__WEBPACK_IMPORTED_MODULE_3__.routes.map(function(item, index) {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                        className: \"list-none text-white \".concat(currentPage === item.title ? \"opacity-100\" : \"opacity-40 hover:opacity-100 transition-opacity\"),\n                        __source: {\n                            fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Navbar.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: item.path,\n                            __source: {\n                                fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Navbar.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: item.title\n                        })\n                    }, index));\n                })\n            })\n        ]\n    }));\n}\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dsb2JhbC9OYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEI7QUFDSDtBQUNhO1NBRTdCRyxNQUFNLENBQUMsS0FBZSxFQUFFLENBQUM7UUFBaEJDLFdBQVcsR0FBYixLQUFlLENBQWJBLFdBQVc7O0lBQzNCLE1BQU0sdUVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQW1DOzs7Ozs7OztpRkFDL0NDLENBQUU7Z0JBQUNELFNBQVMsRUFBQyxDQUE0Qzs7Ozs7OzsrRkFDdkROLGtEQUFJO29CQUFDUSxJQUFJLEVBQUMsQ0FBRzs7Ozs7OztvR0FDWEMsQ0FBSTt3QkFBQ0gsU0FBUyxFQUFDLENBQXNDOzs7Ozs7OztpR0FDbkRJLENBQUc7Z0NBQ0ZKLFNBQVMsRUFBQyxDQUFrRjtnQ0FDNUZLLEdBQUcsRUFBQyxDQUFnQztnQ0FDcENDLEtBQUssRUFBQyxDQUFJOzs7Ozs7Ozs0QkFFWCxDQUFRLFFBQUNDLEtBQUssQ0FBQyxDQUFFLEdBQUVDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE1BQU0sRUFBRUMsS0FBSyxFQUFLLENBQUM7Z0NBQzFDLE1BQU0sc0VBQ0hQLENBQUk7b0NBQWFILFNBQVMsRUFBQyxDQUF3Rzs7Ozs7Ozs4Q0FDaklTLE1BQU07bUNBREVDLEtBQUs7NEJBSXBCLENBQUM7Ozs7O2lGQUlOQyxDQUFFO2dCQUFDWCxTQUFTLEVBQUMsQ0FBOEI7Ozs7Ozs7MEJBQ3pDSixvREFBVSxDQUFDLFFBQVEsQ0FBUGdCLElBQUksRUFBRUYsS0FBSyxFQUFLLENBQUM7b0JBQzVCLE1BQU0sc0VBQ0hULENBQUU7d0JBRURELFNBQVMsRUFBRyxDQUFxQix1QkFJaEMsT0FIQ0YsV0FBVyxLQUFLYyxJQUFJLENBQUNDLEtBQUssR0FDdEIsQ0FBYSxlQUNiLENBQWlEOzs7Ozs7O3VHQUd0RG5CLGtEQUFJOzRCQUFDUSxJQUFJLEVBQUVVLElBQUksQ0FBQ0UsSUFBSTs7Ozs7OztzQ0FBR0YsSUFBSSxDQUFDQyxLQUFLOzt1QkFQN0JILEtBQUs7Z0JBVWhCLENBQUM7Ozs7QUFJVCxDQUFDO0tBdkNRYixNQUFNO0FBeUNmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvTmF2YmFyLnRzeD8zMTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gXCJAL2RhdGEvZ2xvYmFsXCI7XG5cbmZ1bmN0aW9uIE5hdmJhcih7IGN1cnJlbnRQYWdlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3Qtbm9uZSBmb250LWJvbGQgdGV4dC1sZyBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYmxhY2sgdGV4dC14bCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yIHRyYW5zZm9ybSBob3Zlcjpyb3RhdGUtMzYwIGhvdmVyOnNjYWxlLTc1IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMFwiXG4gICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvbG9nb3MvbG9nb19ub190ZXh0LnN2Z1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNjBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtcIlNvdXJhdlwiLnNwbGl0KFwiXCIpLm1hcCgobGV0dGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZnVuLXBpbmsgaG92ZXI6LW10LTIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGhvdmVyOmR1cmF0aW9uLTEwMCBjbGljazpnb29kYnllTGV0dGVyQW5pbVwiPlxuICAgICAgICAgICAgICAgICAge2xldHRlcn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xMFwiPlxuICAgICAgICB7cm91dGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGxpc3Qtbm9uZSB0ZXh0LXdoaXRlICR7XG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2UgPT09IGl0ZW0udGl0bGVcbiAgICAgICAgICAgICAgICAgID8gXCJvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICAgICAgICA6IFwib3BhY2l0eS00MCBob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHlcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5wYXRofT57aXRlbS50aXRsZX08L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInJvdXRlcyIsIk5hdmJhciIsImN1cnJlbnRQYWdlIiwibmF2IiwiY2xhc3NOYW1lIiwibGkiLCJocmVmIiwic3BhbiIsImltZyIsInNyYyIsIndpZHRoIiwic3BsaXQiLCJtYXAiLCJsZXR0ZXIiLCJpbmRleCIsInVsIiwiaXRlbSIsInRpdGxlIiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/global/Navbar.tsx\n");

/***/ })

});