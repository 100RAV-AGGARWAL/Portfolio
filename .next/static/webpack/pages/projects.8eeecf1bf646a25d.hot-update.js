"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/projects/ProjectCard.tsx":
/*!*********************************************!*\
  !*** ./components/projects/ProjectCard.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/utils */ \"./utils/utils.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction ProjectCard(param) {\n    var project = param.project;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center\",\n        __source: {\n            fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                href: project.link || project.github,\n                target: \"_blank\",\n                className: \"w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard\",\n                __source: {\n                    fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    style: {\n                        aspectRatio: '5/3'\n                    },\n                    className: \"w-full rounded-md\",\n                    src: project.img,\n                    __source: {\n                        fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"w-full mt-5\",\n                __source: {\n                    fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex projects-center justify-between\",\n                        __source: {\n                            fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: project.link || project.github,\n                                target: \"_blank\",\n                                __source: {\n                                    fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                    className: \"text-lg font-bold\",\n                                    __source: {\n                                        fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: project.title\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"space-x-2\",\n                                __source: {\n                                    fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    project.link && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        href: project.link,\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        __source: {\n                                            fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"/static/icons/external-link.svg\",\n                                            width: 16,\n                                            height: 16,\n                                            alt: \"Link Icon\",\n                                            __source: {\n                                                fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                                                lineNumber: 31,\n                                                columnNumber: 17\n                                            },\n                                            __self: this\n                                        })\n                                    }),\n                                    project.github && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        href: project.github,\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        __source: {\n                                            fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"/static/icons/github.svg\",\n                                            width: 16,\n                                            height: 16,\n                                            alt: \"Github Icon\",\n                                            __source: {\n                                                fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 17\n                                            },\n                                            __self: this\n                                        })\n                                    })\n                                ]\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: \"text-fun-gray text-left text-sm\",\n                        __source: {\n                            fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: project.desc\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                        className: \"flex flex-wrap items-center mt-2 -ml-2 list-none\",\n                        __source: {\n                            fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: project.tags.map(function(tag, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                __source: {\n                                    fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/projects/tag/\".concat((0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.kebabCase)(tag)),\n                                    __source: {\n                                        fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75\",\n                                        __source: {\n                                            fileName: \"/Users/100rav/Documents/GitHub/Portfolio/components/projects/ProjectCard.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this,\n                                        children: tag\n                                    })\n                                })\n                            }, tag));\n                        })\n                    })\n                ]\n            })\n        ]\n    }, project.id));\n}\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDSztBQUNXO0FBQ2I7U0FFbkJJLFdBQVcsQ0FBQyxLQUFXLEVBQUUsQ0FBQztRQUFaQyxPQUFPLEdBQVQsS0FBVyxDQUFUQSxPQUFPOztJQUM1QixNQUFNLHVFQUNIQyxDQUFHO1FBQ0ZDLFNBQVMsRUFBQyxDQUFvRjs7Ozs7Ozs7aUZBRzdGQyxDQUFDO2dCQUNBQyxJQUFJLEVBQUVKLE9BQU8sQ0FBQ0ssSUFBSSxJQUFJTCxPQUFPLENBQUNNLE1BQU07Z0JBQ3BDQyxNQUFNLEVBQUMsQ0FBUTtnQkFDZkwsU0FBUyxFQUFHLENBQW9KOzs7Ozs7OytGQUUvSk0sQ0FBRztvQkFDSkMsS0FBSyxFQUFFLENBQUNDO3dCQUFBQSxXQUFXLEVBQUUsQ0FBSztvQkFBQSxDQUFDO29CQUN6QlIsU0FBUyxFQUFDLENBQW1CO29CQUM3QlMsR0FBRyxFQUFFWCxPQUFPLENBQUNRLEdBQUc7Ozs7Ozs7OztrRkFHbkJQLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFhOzs7Ozs7OzswRkFDekJELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFzQzs7Ozs7Ozs7aUdBQ2xEQyxDQUFDO2dDQUFDQyxJQUFJLEVBQUVKLE9BQU8sQ0FBQ0ssSUFBSSxJQUFJTCxPQUFPLENBQUNNLE1BQU07Z0NBQUVDLE1BQU0sRUFBQyxDQUFROzs7Ozs7OytHQUNyREssQ0FBRTtvQ0FBQ1YsU0FBUyxFQUFDLENBQW1COzs7Ozs7OzhDQUFFRixPQUFPLENBQUNhLEtBQUs7OztrR0FFakRaLENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUFXOzs7Ozs7OztvQ0FDdkJGLE9BQU8sQ0FBQ0ssSUFBSSx5RUFDVkYsQ0FBQzt3Q0FBQ0MsSUFBSSxFQUFFSixPQUFPLENBQUNLLElBQUk7d0NBQUVFLE1BQU0sRUFBQyxDQUFRO3dDQUFDTyxHQUFHLEVBQUMsQ0FBWTs7Ozs7Ozt1SEFDcERsQixtREFBSzs0Q0FDSmUsR0FBRyxFQUFDLENBQWlDOzRDQUNyQ0ksS0FBSyxFQUFFLEVBQUU7NENBQ1RDLE1BQU0sRUFBRSxFQUFFOzRDQUNWQyxHQUFHLEVBQUMsQ0FBVzs7Ozs7Ozs7O29DQUlwQmpCLE9BQU8sQ0FBQ00sTUFBTSx5RUFDWkgsQ0FBQzt3Q0FBQ0MsSUFBSSxFQUFFSixPQUFPLENBQUNNLE1BQU07d0NBQUVDLE1BQU0sRUFBQyxDQUFRO3dDQUFDTyxHQUFHLEVBQUMsQ0FBWTs7Ozs7Ozt1SEFDdERsQixtREFBSzs0Q0FDSmUsR0FBRyxFQUFDLENBQTBCOzRDQUM5QkksS0FBSyxFQUFFLEVBQUU7NENBQ1RDLE1BQU0sRUFBRSxFQUFFOzRDQUNWQyxHQUFHLEVBQUMsQ0FBYTs7Ozs7Ozs7Ozs7Ozt5RkFNMUJDLENBQUM7d0JBQUNoQixTQUFTLEVBQUMsQ0FBaUM7Ozs7Ozs7a0NBQUVGLE9BQU8sQ0FBQ21CLElBQUk7O3lGQUMzREMsQ0FBRTt3QkFBQ2xCLFNBQVMsRUFBQyxDQUFrRDs7Ozs7OztrQ0FDN0RGLE9BQU8sQ0FBQ3FCLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsR0FBRyxFQUFFQyxLQUFLLEVBQUssQ0FBQzs0QkFDakMsTUFBTSxzRUFDSEMsQ0FBRTs7Ozs7OzsrR0FDQTNCLGtEQUFJO29DQUFDTSxJQUFJLEVBQUcsQ0FBYyxnQkFBaUIsT0FBZlAsdURBQVMsQ0FBQzBCLEdBQUc7Ozs7Ozs7bUhBQ3ZDdEIsQ0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLENBQW1GOzs7Ozs7O2tEQUMvRnFCLEdBQUc7OzsrQkFIREEsR0FBRzt3QkFRaEIsQ0FBQzs7Ozs7T0FyREF2QixPQUFPLENBQUMwQixFQUFFO0FBMERyQixDQUFDO0tBOURRM0IsV0FBVztBQWdFcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RDYXJkLnRzeD8xOThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsga2ViYWJDYXNlIH0gZnJvbSBcIkAvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gUHJvamVjdENhcmQoeyBwcm9qZWN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJtYXgtdy1zbSBteC1hdXRvIGZsZXggZmxleC1jb2wgcHJvamVjdHMtY2VudGVyIG1kOnByb2plY3RzLXN0YXJ0IG1kOmp1c3RpZnktY2VudGVyXCJcbiAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICA+XG4gICAgICA8YVxuICAgICAgICBocmVmPXtwcm9qZWN0LmxpbmsgfHwgcHJvamVjdC5naXRodWJ9XG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCByZWxhdGl2ZSByb3VuZGVkLXhsIGJvcmRlci1mdW4tZ3JheSBib3JkZXIgcC0yIHRyYW5zaXRpb24gaG92ZXI6LXRyYW5zbGF0ZS15LTIgaG92ZXI6b3BhY2l0eS03NSBob3Zlcjpib3JkZXItZnVuLXBpbmsgd2lsbC1jaGFuZ2UtcHJvamVjdENhcmRgfVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgIHN0eWxlPXt7YXNwZWN0UmF0aW86ICc1LzMnfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1tZFwiXG4gICAgICAgICAgc3JjPXtwcm9qZWN0LmltZ31cbiAgICAgICAgLz5cbiAgICAgIDwvYT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG10LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHByb2plY3RzLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LmxpbmsgfHwgcHJvamVjdC5naXRodWJ9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+e3Byb2plY3QudGl0bGV9PC9oMz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTJcIj5cbiAgICAgICAgICAgIHtwcm9qZWN0LmxpbmsgJiYgKFxuICAgICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0Lmxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaWNvbnMvZXh0ZXJuYWwtbGluay5zdmdcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNn1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIkxpbmsgSWNvblwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9qZWN0LmdpdGh1YiAmJiAoXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3QuZ2l0aHVifSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ljb25zL2dpdGh1Yi5zdmdcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNn1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIkdpdGh1YiBJY29uXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1mdW4tZ3JheSB0ZXh0LWxlZnQgdGV4dC1zbVwiPntwcm9qZWN0LmRlc2N9PC9wPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIG10LTIgLW1sLTIgbGlzdC1ub25lXCI+XG4gICAgICAgICAge3Byb2plY3QudGFncy5tYXAoKHRhZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3RhZ30+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9qZWN0cy90YWcvJHtrZWJhYkNhc2UodGFnKX1gfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0xIHJvdW5kZWQtbGcgdGV4dC1zbSBiZy1mdW4tcGluay1kYXJrIHB5LTEgcHgtMiBjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTc1XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJrZWJhYkNhc2UiLCJMaW5rIiwiUHJvamVjdENhcmQiLCJwcm9qZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJsaW5rIiwiZ2l0aHViIiwidGFyZ2V0IiwiaW1nIiwic3R5bGUiLCJhc3BlY3RSYXRpbyIsInNyYyIsImgzIiwidGl0bGUiLCJyZWwiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInAiLCJkZXNjIiwidWwiLCJ0YWdzIiwibWFwIiwidGFnIiwiaW5kZXgiLCJsaSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/projects/ProjectCard.tsx\n");

/***/ })

});