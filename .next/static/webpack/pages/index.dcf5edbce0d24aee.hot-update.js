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

/***/ "./components/global/Footer.tsx":
/*!**************************************!*\
  !*** ./components/global/Footer.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/global */ \"./data/global.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction Footer() {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n        className: \"flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg\",\n        __source: {\n            fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-2 justify-between items-start\",\n                __source: {\n                    fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: _data_global__WEBPACK_IMPORTED_MODULE_3__.footer.columns.map(function(item1, index1) {\n                    var _this1 = _this;\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"text-left flex justify-center mb-5 sm:mb-0\",\n                        __source: {\n                            fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                className: \"uppercase flex justify-center text-fun-gray text-sm font-bold\",\n                                __source: {\n                                    fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                    lineNumber: 13,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: item1.title\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                __source: {\n                                    fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                    lineNumber: 16,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: item1.links.map(function(item, index) {\n                                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"my-4\",\n                                        __source: {\n                                            fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                            lineNumber: 19,\n                                            columnNumber: 21\n                                        },\n                                        __self: _this1,\n                                        children: item.leavesWebsite ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                            href: item.link,\n                                            target: \"_blank\",\n                                            className: \"items-center flex\",\n                                            __source: {\n                                                fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                                lineNumber: 21,\n                                                columnNumber: 25\n                                            },\n                                            __self: _this1,\n                                            children: [\n                                                item.icon && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                    className: \"pr-2 -mb-1 text-white\",\n                                                    __source: {\n                                                        fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                                        lineNumber: 27,\n                                                        columnNumber: 29\n                                                    },\n                                                    __self: _this1,\n                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                        src: item.icon,\n                                                        width: 20,\n                                                        height: 20,\n                                                        __source: {\n                                                            fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                                            lineNumber: 28,\n                                                            columnNumber: 31\n                                                        },\n                                                        __self: _this1\n                                                    })\n                                                }),\n                                                item.name\n                                            ]\n                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: item.link,\n                                            __source: {\n                                                fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 25\n                                            },\n                                            __self: _this1,\n                                            children: item.name\n                                        })\n                                    }, index));\n                                })\n                            })\n                        ]\n                    }, index1));\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark\",\n                __source: {\n                    fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                    className: \"flex flex-col items-center justify-center \",\n                    __source: {\n                        fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"inline-flex items-center uppercase text-xs font-bold tracking-widest\",\n                            __source: {\n                                fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                \"Made with\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"space-x-2 inline-flex items-center -mt-1 ml-3\",\n                                    __source: {\n                                        fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                            __source: {\n                                                fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                    src: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg\",\n                                                    width: \"26\",\n                                                    title: \"React\",\n                                                    __source: {\n                                                        fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                                        lineNumber: 50,\n                                                        columnNumber: 17\n                                                    },\n                                                    __self: this\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                    className: \"sr-only\",\n                                                    __source: {\n                                                        fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                                        lineNumber: 55,\n                                                        columnNumber: 17\n                                                    },\n                                                    __self: this,\n                                                    children: \"React\"\n                                                })\n                                            ]\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                            __source: {\n                                                fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                    src: \"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg\",\n                                                    width: \"26\",\n                                                    title: \"TailwindCSS\",\n                                                    __source: {\n                                                        fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 17\n                                                    },\n                                                    __self: this\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                    className: \"sr-only\",\n                                                    __source: {\n                                                        fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 17\n                                                    },\n                                                    __self: this,\n                                                    children: \"TailwindCSS\"\n                                                })\n                                            ]\n                                        })\n                                    ]\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"mt-2 text-xs \",\n                            __source: {\n                                fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                \"Made by\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    href: \"mailto:souravagg01@gmail.com\",\n                                    className: \"text-fun-gray-light font-medium\",\n                                    __source: {\n                                        fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/global/Footer.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: \"Sourav Aggarwal\"\n                                }),\n                                \".\"\n                            ]\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n}\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dsb2JhbC9Gb290ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNIO0FBQ2E7QUFDUjtTQUVyQkksTUFBTSxHQUFHLENBQUM7O0lBQ2pCLE1BQU0sdUVBQ0hGLENBQU07UUFBQ0csU0FBUyxFQUFDLENBQTZFOzs7Ozs7OztpRkFDNUZDLENBQUc7Z0JBQUNELFNBQVMsRUFBQyxDQUFxRjs7Ozs7OzswQkFDakdILDREQUFrQixDQUFDLFFBQVEsQ0FBUE8sS0FBSSxFQUFFQyxNQUFLLEVBQUssQ0FBQzs7b0JBQ3BDLE1BQU0sdUVBQ0hKLENBQUc7d0JBQWFELFNBQVMsRUFBQyxDQUE0Qzs7Ozs7Ozs7aUdBQ3BFTSxDQUFFO2dDQUFDTixTQUFTLEVBQUMsQ0FBK0Q7Ozs7Ozs7MENBQzFFSSxLQUFJLENBQUNHLEtBQUs7O2lHQUVaTixDQUFHOzs7Ozs7OzBDQUNERyxLQUFJLENBQUNJLEtBQUssQ0FBQ0wsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFFQyxLQUFLLEVBQUssQ0FBQztvQ0FDaEMsTUFBTSxzRUFDSEosQ0FBRzt3Q0FBYUQsU0FBUyxFQUFDLENBQU07Ozs7Ozs7a0RBQzlCSSxJQUFJLENBQUNLLGFBQWEseUVBQ2hCQyxDQUFDOzRDQUNBQyxJQUFJLEVBQUVQLElBQUksQ0FBQ1EsSUFBSTs0Q0FDZkMsTUFBTSxFQUFDLENBQVE7NENBQ2ZiLFNBQVMsRUFBQyxDQUFtQjs7Ozs7Ozs7Z0RBRTVCSSxJQUFJLENBQUNVLElBQUkseUVBQ1BDLENBQUk7b0RBQUNmLFNBQVMsRUFBQyxDQUF1Qjs7Ozs7OzttSUFDcENGLG1EQUFLO3dEQUFDa0IsR0FBRyxFQUFFWixJQUFJLENBQUNVLElBQUk7d0RBQUVHLEtBQUssRUFBRSxFQUFFO3dEQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7Ozs7O2dEQUcvQ2QsSUFBSSxDQUFDZSxJQUFJOztrSEFHWHhCLGtEQUFJOzRDQUFDZ0IsSUFBSSxFQUFFUCxJQUFJLENBQUNRLElBQUk7Ozs7Ozs7c0RBQUdSLElBQUksQ0FBQ2UsSUFBSTs7dUNBZjNCZCxLQUFLO2dDQW1CbkIsQ0FBQzs7O3VCQTFCS0EsTUFBSztnQkE4Qm5CLENBQUM7O2lGQUVGSixDQUFHO2dCQUFDRCxTQUFTLEVBQUMsQ0FBMkc7Ozs7Ozs7Z0dBQ3ZIb0IsQ0FBQztvQkFBQ3BCLFNBQVMsRUFBQyxDQUE0Qzs7Ozs7Ozs7OEZBQ3REQyxDQUFHOzRCQUFDRCxTQUFTLEVBQUMsQ0FBc0U7Ozs7Ozs7O2dDQUFDLENBQzNFO2dDQUFDLENBQUc7c0dBQ1pDLENBQUc7b0NBQUNELFNBQVMsRUFBQyxDQUErQzs7Ozs7Ozs7OEdBQzNEZSxDQUFJOzs7Ozs7OztxSEFDRk0sQ0FBRztvREFDRkwsR0FBRyxFQUFDLENBQTZFO29EQUNqRkMsS0FBSyxFQUFDLENBQUk7b0RBQ1ZWLEtBQUssRUFBQyxDQUFPOzs7Ozs7OztxSEFFZFEsQ0FBSTtvREFBQ2YsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7OERBQUMsQ0FBSzs7Ozs4R0FFaENlLENBQUk7Ozs7Ozs7O3FIQUNGTSxDQUFHO29EQUNGTCxHQUFHLEVBQUMsQ0FBZ0c7b0RBQ3BHQyxLQUFLLEVBQUMsQ0FBSTtvREFDVlYsS0FBSyxFQUFDLENBQWE7Ozs7Ozs7O3FIQUVwQlEsQ0FBSTtvREFBQ2YsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7OERBQUMsQ0FBVzs7Ozs7Ozs7OEZBSTFDQyxDQUFHOzRCQUFDRCxTQUFTLEVBQUMsQ0FBZTs7Ozs7Ozs7Z0NBQUMsQ0FDdEI7Z0NBQUMsQ0FBRztxR0FDVlUsQ0FBQztvQ0FDQUMsSUFBSSxFQUFDLENBQThCO29DQUNuQ1gsU0FBUyxFQUFDLENBQWlDOzs7Ozs7OzhDQUM1QyxDQUVEOztnQ0FBSSxDQUVOOzs7Ozs7OztBQUtWLENBQUM7S0EzRVFELE1BQU07QUE2RWYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dsb2JhbC9Gb290ZXIudHN4P2E5MzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZm9vdGVyIH0gZnJvbSBcIkAvZGF0YS9nbG9iYWxcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5mdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctc2NyZWVuIHB4LTUgcHktMTAgYm9yZGVyLXQgYm9yZGVyLWZ1bi1waW5rLWRhcmtlciB6LTUgYmctYmdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTR4bCBtLWF1dG8gZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtMiBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnRcIj5cbiAgICAgICAge2Zvb3Rlci5jb2x1bW5zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgZmxleCBqdXN0aWZ5LWNlbnRlciBtYi01IHNtOm1iLTBcIj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInVwcGVyY2FzZSBmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtZnVuLWdyYXkgdGV4dC1zbSBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7aXRlbS5saW5rcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sZWF2ZXNXZWJzaXRlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmljb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLTIgLW1iLTEgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pY29ufSB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmxpbmt9PntpdGVtLm5hbWV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgdy1mdWxsIG0tYXV0byBtdC04IHB0LTggc206bXQtNCBzbTpwdC00IHRleHQtY2VudGVyIHRleHQtZnVuLWdyYXkgYm9yZGVyLXQgYm9yZGVyLWZ1bi1waW5rLWRhcmtcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdXBwZXJjYXNlIHRleHQteHMgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdFwiPlxuICAgICAgICAgICAgTWFkZSB3aXRoe1wiIFwifVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTIgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIC1tdC0xIG1sLTNcIj5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvcmVhY3QvcmVhY3Qtb3JpZ2luYWwuc3ZnXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjZcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZWFjdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UmVhY3Q8L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzLW9yaWdpbmFsLnN2Z1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjI2XCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGFpbHdpbmRDU1NcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRhaWx3aW5kQ1NTPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgdGV4dC14cyBcIj5cbiAgICAgICAgICAgIE1hZGUgYnl7XCIgXCJ9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOnNvdXJhdmFnZzAxQGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZnVuLWdyYXktbGlnaHQgZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTb3VyYXYgQWdnYXJ3YWxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIC5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJmb290ZXIiLCJJbWFnZSIsIkZvb3RlciIsImNsYXNzTmFtZSIsImRpdiIsImNvbHVtbnMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJoNCIsInRpdGxlIiwibGlua3MiLCJsZWF2ZXNXZWJzaXRlIiwiYSIsImhyZWYiLCJsaW5rIiwidGFyZ2V0IiwiaWNvbiIsInNwYW4iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsIm5hbWUiLCJwIiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/global/Footer.tsx\n");

/***/ })

});