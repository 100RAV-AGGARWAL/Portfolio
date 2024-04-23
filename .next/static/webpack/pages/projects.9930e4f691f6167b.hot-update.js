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

/***/ "./data/content/projects.ts":
/*!**********************************!*\
  !*** ./data/content/projects.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allTags\": function() { return /* binding */ allTags; },\n/* harmony export */   \"allKebabTags\": function() { return /* binding */ allKebabTags; }\n/* harmony export */ });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/utils */ \"./utils/utils.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar projects = [\n    {\n        id: 0,\n        title: \"DecodeCollege\",\n        desc: \"All the resources you will need to get a boost into economics.\",\n        img: \"/static/projects/DecodeCollege.png\",\n        link: \"https://decode-college.vercel.app\",\n        github: \"https://github.com/Virtual-Beings/DecodeCollege\",\n        tags: [\n            \"Angular\",\n            \"NodeJs\",\n            \"MongoDb\",\n            \"CSS\",\n            \"Firebase\",\n            ''\n        ]\n    },\n    {\n        id: 1,\n        title: \"Aplavankula\",\n        desc: \"Beautiful HTML templates ready-made for your next landing page.\",\n        img: \"/static/projects/buildfaster.png\",\n        link: \"https://buildfaster-io.vercel.app/\",\n        tags: [\n            \"HTML\",\n            \"CSS\",\n            \"Javascript\",\n            \"Gumroad\"\n        ]\n    },\n    {\n        id: 2,\n        title: \"Most Influential Node Detection\",\n        desc: \"1800+ emojis at your fingertips. Ready-to-use with just a simple copy+paste.\",\n        img: \"/static/projects/react-emoji-search.png\",\n        link: \"https://react-emoji-search.braydentw.vercel.app/\",\n        github: \"https://github.com/braydentw/react-emoji-search\",\n        tags: [\n            \"React\",\n            \"CSS\",\n            \"JSON\"\n        ]\n    }, \n];\nvar allTags = [];\nprojects.forEach(function(project) {\n    project.tags.forEach(function(tag) {\n        return !allTags.includes(tag) && allTags.push(tag);\n    });\n});\nvar allKebabTags = allTags.map(function(tag) {\n    return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(tag);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (projects);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2NvbnRlbnQvcHJvamVjdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxRDtBQUdyRCxHQUFLLENBQUNDLFFBQVEsR0FBYyxDQUFDO0lBQzNCLENBQUM7UUFDQ0MsRUFBRSxFQUFFLENBQUM7UUFDTEMsS0FBSyxFQUFFLENBQWU7UUFDdEJDLElBQUksRUFBRSxDQUFnRTtRQUN0RUMsR0FBRyxFQUFFLENBQW9DO1FBQ3pDQyxJQUFJLEVBQUUsQ0FBbUM7UUFDekNDLE1BQU0sRUFBRSxDQUFpRDtRQUN6REMsSUFBSSxFQUFFLENBQUM7WUFBQSxDQUFTO1lBQUUsQ0FBUTtZQUFFLENBQVM7WUFBRSxDQUFLO1lBQUUsQ0FBVTtZQUFFLENBQUU7UUFBQSxDQUFDO0lBQy9ELENBQUM7SUFDRCxDQUFDO1FBQ0NOLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLEtBQUssRUFBRSxDQUFhO1FBQ3BCQyxJQUFJLEVBQUUsQ0FBaUU7UUFDdkVDLEdBQUcsRUFBRSxDQUFrQztRQUN2Q0MsSUFBSSxFQUFFLENBQW9DO1FBQzFDRSxJQUFJLEVBQUUsQ0FBQztZQUFBLENBQU07WUFBRSxDQUFLO1lBQUUsQ0FBWTtZQUFFLENBQVM7UUFBQSxDQUFDO0lBQ2hELENBQUM7SUFDRCxDQUFDO1FBQ0NOLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLEtBQUssRUFBRSxDQUFpQztRQUN4Q0MsSUFBSSxFQUFFLENBQThFO1FBQ3BGQyxHQUFHLEVBQUUsQ0FBeUM7UUFDOUNDLElBQUksRUFBRSxDQUFrRDtRQUN4REMsTUFBTSxFQUFFLENBQWlEO1FBQ3pEQyxJQUFJLEVBQUUsQ0FBQztZQUFBLENBQU87WUFBRSxDQUFLO1lBQUUsQ0FBTTtRQUFBLENBQUM7SUFDaEMsQ0FBQztBQUNILENBQUM7QUFFTSxHQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFFekJSLFFBQVEsQ0FBQ1MsT0FBTyxDQUFDLFFBQVEsQ0FBUEMsT0FBTyxFQUFLLENBQUM7SUFDN0JBLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDRSxPQUFPLENBQUMsUUFBUSxDQUFQRSxHQUFHO1FBQUssTUFBTSxFQUFMSCxPQUFPLENBQUNJLFFBQVEsQ0FBQ0QsR0FBRyxLQUFLSCxPQUFPLENBQUNLLElBQUksQ0FBQ0YsR0FBRzs7QUFDMUUsQ0FBQztBQUVNLEdBQUssQ0FBQ0csWUFBWSxHQUFHTixPQUFPLENBQUNPLEdBQUcsQ0FBQ0osUUFBUSxDQUFSQSxHQUFHO0lBQUksTUFDM0MsQ0FBRlosdURBQVMsQ0FBQ1ksR0FBRzs7QUFHZiwrREFBZVgsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL2NvbnRlbnQvcHJvamVjdHMudHM/MmI3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBrZWJhYkNhc2UsIGtlYmFiQXJyYXkgfSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCJ0eXBlc1wiO1xuXG5jb25zdCBwcm9qZWN0czogUHJvamVjdFtdID0gW1xuICB7XG4gICAgaWQ6IDAsXG4gICAgdGl0bGU6IFwiRGVjb2RlQ29sbGVnZVwiLFxuICAgIGRlc2M6IFwiQWxsIHRoZSByZXNvdXJjZXMgeW91IHdpbGwgbmVlZCB0byBnZXQgYSBib29zdCBpbnRvIGVjb25vbWljcy5cIixcbiAgICBpbWc6IFwiL3N0YXRpYy9wcm9qZWN0cy9EZWNvZGVDb2xsZWdlLnBuZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9kZWNvZGUtY29sbGVnZS52ZXJjZWwuYXBwXCIsXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9WaXJ0dWFsLUJlaW5ncy9EZWNvZGVDb2xsZWdlXCIsXG4gICAgdGFnczogW1wiQW5ndWxhclwiLCBcIk5vZGVKc1wiLCBcIk1vbmdvRGJcIiwgXCJDU1NcIiwgXCJGaXJlYmFzZVwiLCAnJ10sXG4gIH0sXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogXCJBcGxhdmFua3VsYVwiLFxuICAgIGRlc2M6IFwiQmVhdXRpZnVsIEhUTUwgdGVtcGxhdGVzIHJlYWR5LW1hZGUgZm9yIHlvdXIgbmV4dCBsYW5kaW5nIHBhZ2UuXCIsXG4gICAgaW1nOiBcIi9zdGF0aWMvcHJvamVjdHMvYnVpbGRmYXN0ZXIucG5nXCIsXG4gICAgbGluazogXCJodHRwczovL2J1aWxkZmFzdGVyLWlvLnZlcmNlbC5hcHAvXCIsXG4gICAgdGFnczogW1wiSFRNTFwiLCBcIkNTU1wiLCBcIkphdmFzY3JpcHRcIiwgXCJHdW1yb2FkXCJdLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6IFwiTW9zdCBJbmZsdWVudGlhbCBOb2RlIERldGVjdGlvblwiLFxuICAgIGRlc2M6IFwiMTgwMCsgZW1vamlzIGF0IHlvdXIgZmluZ2VydGlwcy4gUmVhZHktdG8tdXNlIHdpdGgganVzdCBhIHNpbXBsZSBjb3B5K3Bhc3RlLlwiLFxuICAgIGltZzogXCIvc3RhdGljL3Byb2plY3RzL3JlYWN0LWVtb2ppLXNlYXJjaC5wbmdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcmVhY3QtZW1vamktc2VhcmNoLmJyYXlkZW50dy52ZXJjZWwuYXBwL1wiLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vYnJheWRlbnR3L3JlYWN0LWVtb2ppLXNlYXJjaFwiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiQ1NTXCIsIFwiSlNPTlwiXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBhbGxUYWdzID0gW11cblxucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICBwcm9qZWN0LnRhZ3MuZm9yRWFjaCgodGFnKSA9PiAhYWxsVGFncy5pbmNsdWRlcyh0YWcpICYmIGFsbFRhZ3MucHVzaCh0YWcpKVxufSk7XG5cbmV4cG9ydCBjb25zdCBhbGxLZWJhYlRhZ3MgPSBhbGxUYWdzLm1hcCh0YWcgPT4gKFxuICBrZWJhYkNhc2UodGFnKVxuKSlcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHNcbiJdLCJuYW1lcyI6WyJrZWJhYkNhc2UiLCJwcm9qZWN0cyIsImlkIiwidGl0bGUiLCJkZXNjIiwiaW1nIiwibGluayIsImdpdGh1YiIsInRhZ3MiLCJhbGxUYWdzIiwiZm9yRWFjaCIsInByb2plY3QiLCJ0YWciLCJpbmNsdWRlcyIsInB1c2giLCJhbGxLZWJhYlRhZ3MiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/content/projects.ts\n");

/***/ })

});