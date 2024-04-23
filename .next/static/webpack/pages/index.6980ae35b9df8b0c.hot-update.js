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

/***/ "./data/content/projects.ts":
/*!**********************************!*\
  !*** ./data/content/projects.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allTags\": function() { return /* binding */ allTags; },\n/* harmony export */   \"allKebabTags\": function() { return /* binding */ allKebabTags; }\n/* harmony export */ });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/utils */ \"./utils/utils.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar projects = [\n    {\n        id: 0,\n        title: \"DecodeCollege\",\n        desc: \"Student Application to help college students manage their academic documents, find courses, remove plagiarism from text, calendar to view the deadlines and many more\",\n        img: \"/static/projects/DecodeCollege.png\",\n        link: \"https://decode-college.vercel.app\",\n        github: \"https://github.com/Virtual-Beings/DecodeCollege\",\n        tags: [\n            \"Angular\",\n            \"NodeJs\",\n            \"MongoDb\",\n            \"CSS\",\n            \"Cloud Firestore\"\n        ]\n    },\n    {\n        id: 1,\n        title: \"Aplavankula\",\n        desc: \"An app developed to monitor, predict floods in India and inform the authorities and locals about the same.\",\n        img: \"/static/projects/Aplavankula.png\",\n        github: \"https://github.com/100RAV-AGGARWAL/FMA-SIH\",\n        tags: [\n            \"Flutter\",\n            \"NodeJs\",\n            \"Web APIs\"\n        ]\n    },\n    {\n        id: 2,\n        title: \"Most Influential Node Detection\",\n        desc: \"1800+ emojis at your fingertips. Ready-to-use with just a simple copy+paste.\",\n        img: \"/static/projects/InfluentialNode.png\",\n        link: \"https://react-emoji-search.braydentw.vercel.app/\",\n        github: \"https://github.com/braydentw/react-emoji-search\",\n        tags: [\n            \"React\",\n            \"CSS\",\n            \"JSON\"\n        ]\n    }, \n];\nvar allTags = [];\nprojects.forEach(function(project) {\n    project.tags.forEach(function(tag) {\n        return !allTags.includes(tag) && allTags.push(tag);\n    });\n});\nvar allKebabTags = allTags.map(function(tag) {\n    return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(tag);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (projects);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2NvbnRlbnQvcHJvamVjdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxRDtBQUdyRCxHQUFLLENBQUNDLFFBQVEsR0FBYyxDQUFDO0lBQzNCLENBQUM7UUFDQ0MsRUFBRSxFQUFFLENBQUM7UUFDTEMsS0FBSyxFQUFFLENBQWU7UUFDdEJDLElBQUksRUFBRSxDQUF1SztRQUM3S0MsR0FBRyxFQUFFLENBQW9DO1FBQ3pDQyxJQUFJLEVBQUUsQ0FBbUM7UUFDekNDLE1BQU0sRUFBRSxDQUFpRDtRQUN6REMsSUFBSSxFQUFFLENBQUM7WUFBQSxDQUFTO1lBQUUsQ0FBUTtZQUFFLENBQVM7WUFBRSxDQUFLO1lBQUUsQ0FBaUI7UUFBQSxDQUFDO0lBQ2xFLENBQUM7SUFDRCxDQUFDO1FBQ0NOLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLEtBQUssRUFBRSxDQUFhO1FBQ3BCQyxJQUFJLEVBQUUsQ0FBNEc7UUFDbEhDLEdBQUcsRUFBRSxDQUFrQztRQUN2Q0UsTUFBTSxFQUFFLENBQTRDO1FBQ3BEQyxJQUFJLEVBQUUsQ0FBQztZQUFBLENBQVM7WUFBRSxDQUFRO1lBQUUsQ0FBVTtRQUFBLENBQUM7SUFDekMsQ0FBQztJQUNELENBQUM7UUFDQ04sRUFBRSxFQUFFLENBQUM7UUFDTEMsS0FBSyxFQUFFLENBQWlDO1FBQ3hDQyxJQUFJLEVBQUUsQ0FBOEU7UUFDcEZDLEdBQUcsRUFBRSxDQUFzQztRQUMzQ0MsSUFBSSxFQUFFLENBQWtEO1FBQ3hEQyxNQUFNLEVBQUUsQ0FBaUQ7UUFDekRDLElBQUksRUFBRSxDQUFDO1lBQUEsQ0FBTztZQUFFLENBQUs7WUFBRSxDQUFNO1FBQUEsQ0FBQztJQUNoQyxDQUFDO0FBQ0gsQ0FBQztBQUVNLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUV6QlIsUUFBUSxDQUFDUyxPQUFPLENBQUMsUUFBUSxDQUFQQyxPQUFPLEVBQUssQ0FBQztJQUM3QkEsT0FBTyxDQUFDSCxJQUFJLENBQUNFLE9BQU8sQ0FBQyxRQUFRLENBQVBFLEdBQUc7UUFBSyxNQUFNLEVBQUxILE9BQU8sQ0FBQ0ksUUFBUSxDQUFDRCxHQUFHLEtBQUtILE9BQU8sQ0FBQ0ssSUFBSSxDQUFDRixHQUFHOztBQUMxRSxDQUFDO0FBRU0sR0FBSyxDQUFDRyxZQUFZLEdBQUdOLE9BQU8sQ0FBQ08sR0FBRyxDQUFDSixRQUFRLENBQVJBLEdBQUc7SUFBSSxNQUMzQyxDQUFGWix1REFBUyxDQUFDWSxHQUFHOztBQUdmLCtEQUFlWCxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGEvY29udGVudC9wcm9qZWN0cy50cz8yYjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGtlYmFiQ2FzZSwga2ViYWJBcnJheSB9IGZyb20gXCJAL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcInR5cGVzXCI7XG5cbmNvbnN0IHByb2plY3RzOiBQcm9qZWN0W10gPSBbXG4gIHtcbiAgICBpZDogMCxcbiAgICB0aXRsZTogXCJEZWNvZGVDb2xsZWdlXCIsXG4gICAgZGVzYzogXCJTdHVkZW50IEFwcGxpY2F0aW9uIHRvIGhlbHAgY29sbGVnZSBzdHVkZW50cyBtYW5hZ2UgdGhlaXIgYWNhZGVtaWMgZG9jdW1lbnRzLCBmaW5kIGNvdXJzZXMsIHJlbW92ZSBwbGFnaWFyaXNtIGZyb20gdGV4dCwgY2FsZW5kYXIgdG8gdmlldyB0aGUgZGVhZGxpbmVzIGFuZCBtYW55IG1vcmVcIixcbiAgICBpbWc6IFwiL3N0YXRpYy9wcm9qZWN0cy9EZWNvZGVDb2xsZWdlLnBuZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9kZWNvZGUtY29sbGVnZS52ZXJjZWwuYXBwXCIsXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9WaXJ0dWFsLUJlaW5ncy9EZWNvZGVDb2xsZWdlXCIsXG4gICAgdGFnczogW1wiQW5ndWxhclwiLCBcIk5vZGVKc1wiLCBcIk1vbmdvRGJcIiwgXCJDU1NcIiwgXCJDbG91ZCBGaXJlc3RvcmVcIl0sXG4gIH0sXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogXCJBcGxhdmFua3VsYVwiLFxuICAgIGRlc2M6IFwiQW4gYXBwIGRldmVsb3BlZCB0byBtb25pdG9yLCBwcmVkaWN0IGZsb29kcyBpbiBJbmRpYSBhbmQgaW5mb3JtIHRoZSBhdXRob3JpdGllcyBhbmQgbG9jYWxzIGFib3V0IHRoZSBzYW1lLlwiLFxuICAgIGltZzogXCIvc3RhdGljL3Byb2plY3RzL0FwbGF2YW5rdWxhLnBuZ1wiLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vMTAwUkFWLUFHR0FSV0FML0ZNQS1TSUhcIixcbiAgICB0YWdzOiBbXCJGbHV0dGVyXCIsIFwiTm9kZUpzXCIsIFwiV2ViIEFQSXNcIl0sXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogXCJNb3N0IEluZmx1ZW50aWFsIE5vZGUgRGV0ZWN0aW9uXCIsXG4gICAgZGVzYzogXCIxODAwKyBlbW9qaXMgYXQgeW91ciBmaW5nZXJ0aXBzLiBSZWFkeS10by11c2Ugd2l0aCBqdXN0IGEgc2ltcGxlIGNvcHkrcGFzdGUuXCIsXG4gICAgaW1nOiBcIi9zdGF0aWMvcHJvamVjdHMvSW5mbHVlbnRpYWxOb2RlLnBuZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9yZWFjdC1lbW9qaS1zZWFyY2guYnJheWRlbnR3LnZlcmNlbC5hcHAvXCIsXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9icmF5ZGVudHcvcmVhY3QtZW1vamktc2VhcmNoXCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJDU1NcIiwgXCJKU09OXCJdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGFsbFRhZ3MgPSBbXVxuXG5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gIHByb2plY3QudGFncy5mb3JFYWNoKCh0YWcpID0+ICFhbGxUYWdzLmluY2x1ZGVzKHRhZykgJiYgYWxsVGFncy5wdXNoKHRhZykpXG59KTtcblxuZXhwb3J0IGNvbnN0IGFsbEtlYmFiVGFncyA9IGFsbFRhZ3MubWFwKHRhZyA9PiAoXG4gIGtlYmFiQ2FzZSh0YWcpXG4pKVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0c1xuIl0sIm5hbWVzIjpbImtlYmFiQ2FzZSIsInByb2plY3RzIiwiaWQiLCJ0aXRsZSIsImRlc2MiLCJpbWciLCJsaW5rIiwiZ2l0aHViIiwidGFncyIsImFsbFRhZ3MiLCJmb3JFYWNoIiwicHJvamVjdCIsInRhZyIsImluY2x1ZGVzIiwicHVzaCIsImFsbEtlYmFiVGFncyIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/content/projects.ts\n");

/***/ })

});