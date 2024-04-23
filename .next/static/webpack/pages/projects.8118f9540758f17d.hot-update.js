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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allTags\": function() { return /* binding */ allTags; },\n/* harmony export */   \"allKebabTags\": function() { return /* binding */ allKebabTags; }\n/* harmony export */ });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/utils */ \"./utils/utils.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar projects = [\n    {\n        id: 0,\n        title: \"DecodeCollege\",\n        desc: \"Student Application to help college students manage their academic documents, find courses, remove plagiarism from text, calendar to view the deadlines and many more\",\n        img: \"/static/projects/DecodeCollege.png\",\n        link: \"https://decode-college.vercel.app\",\n        github: \"https://github.com/Virtual-Beings/DecodeCollege\",\n        tags: [\n            \"Angular\",\n            \"NodeJs\",\n            \"MongoDb\",\n            \"CSS\",\n            \"Cloud Firestore\"\n        ]\n    },\n    {\n        id: 1,\n        title: \"Most Influential Node Detection\",\n        desc: \"A Research Project aiming towards most influential node detection in a given social media network using centrality algorithms\",\n        img: \"/static/projects/InfluentialNode.png\",\n        github: \"https://github.com/100RAV-AGGARWAL/Most-Influential-Node\",\n        tags: [\n            \"Python\"\n        ]\n    },\n    {\n        id: 2,\n        title: \"Aplavankula\",\n        desc: \"An app developed to monitor, predict floods in India and inform the authorities and locals about the same.\",\n        img: \"/static/projects/Aplavankula.png\",\n        github: \"https://github.com/100RAV-AGGARWAL/FMA-SIH\",\n        tags: [\n            \"Flutter\",\n            \"NodeJs\",\n            \"Web APIs\"\n        ]\n    },\n    {\n        id: 3,\n        title: \"Mapty\",\n        desc: \"A simple application where you can add marks on map where you did your workout(running/cycling)\",\n        img: \"/static/projects/Mapty.png\",\n        github: \"https://github.com/100RAV-AGGARWAL/Mapty\",\n        link: \"https://mapty-100ravagg.netlify.app/\",\n        tags: [\n            \"HTML\",\n            \"CSS\",\n            \"Javascript\"\n        ]\n    },\n    {\n        id: 4,\n        title: \"Bankist\",\n        desc: \"A simple application with various animation and UI effects\",\n        img: \"/static/projects/Bankist.png\",\n        github: \"https://github.com/100RAV-AGGARWAL/Bankist\",\n        link: \"https://bankist-100ravagg.netlify.app/\",\n        tags: [\n            \"HTML\",\n            \"CSS\",\n            \"Javascript\"\n        ]\n    },\n    {\n        id: 5,\n        title: \"Dice Game\",\n        desc: \"A game where you roll a dice to accumulate number score. First one to reach a score of 20 wins.\",\n        img: \"/static/projects/DiceGame.png\",\n        github: \"https://github.com/100RAV-AGGARWAL/Dice-Game\",\n        link: \"https://dicegame-100ravagg.netlify.app/\",\n        tags: [\n            \"HTML\",\n            \"CSS\",\n            \"Javascript\"\n        ]\n    }, \n];\nvar allTags = [];\nprojects.forEach(function(project) {\n    project.tags.forEach(function(tag) {\n        return !allTags.includes(tag) && allTags.push(tag);\n    });\n});\nvar allKebabTags = allTags.map(function(tag) {\n    return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(tag);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (projects);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2NvbnRlbnQvcHJvamVjdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxRDtBQUdyRCxHQUFLLENBQUNDLFFBQVEsR0FBYyxDQUFDO0lBQzNCLENBQUM7UUFDQ0MsRUFBRSxFQUFFLENBQUM7UUFDTEMsS0FBSyxFQUFFLENBQWU7UUFDdEJDLElBQUksRUFBRSxDQUF1SztRQUM3S0MsR0FBRyxFQUFFLENBQW9DO1FBQ3pDQyxJQUFJLEVBQUUsQ0FBbUM7UUFDekNDLE1BQU0sRUFBRSxDQUFpRDtRQUN6REMsSUFBSSxFQUFFLENBQUM7WUFBQSxDQUFTO1lBQUUsQ0FBUTtZQUFFLENBQVM7WUFBRSxDQUFLO1lBQUUsQ0FBaUI7UUFBQSxDQUFDO0lBQ2xFLENBQUM7SUFDRCxDQUFDO1FBQ0NOLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLEtBQUssRUFBRSxDQUFpQztRQUN4Q0MsSUFBSSxFQUFFLENBQStIO1FBQ3JJQyxHQUFHLEVBQUUsQ0FBc0M7UUFDM0NFLE1BQU0sRUFBRSxDQUEwRDtRQUNsRUMsSUFBSSxFQUFFLENBQUM7WUFBQSxDQUFRO1FBQUEsQ0FBQztJQUNsQixDQUFDO0lBQ0QsQ0FBQztRQUNDTixFQUFFLEVBQUUsQ0FBQztRQUNMQyxLQUFLLEVBQUUsQ0FBYTtRQUNwQkMsSUFBSSxFQUFFLENBQTRHO1FBQ2xIQyxHQUFHLEVBQUUsQ0FBa0M7UUFDdkNFLE1BQU0sRUFBRSxDQUE0QztRQUNwREMsSUFBSSxFQUFFLENBQUM7WUFBQSxDQUFTO1lBQUUsQ0FBUTtZQUFFLENBQVU7UUFBQSxDQUFDO0lBQ3pDLENBQUM7SUFDRCxDQUFDO1FBQ0NOLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLEtBQUssRUFBRSxDQUFPO1FBQ2RDLElBQUksRUFBRSxDQUFpRztRQUN2R0MsR0FBRyxFQUFFLENBQTRCO1FBQ2pDRSxNQUFNLEVBQUUsQ0FBMEM7UUFDbERELElBQUksRUFBRSxDQUFzQztRQUM1Q0UsSUFBSSxFQUFFLENBQUM7WUFBQSxDQUFNO1lBQUUsQ0FBSztZQUFFLENBQVk7UUFBQSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxDQUFDO1FBQ0NOLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLEtBQUssRUFBRSxDQUFTO1FBQ2hCQyxJQUFJLEVBQUUsQ0FBNEQ7UUFDbEVDLEdBQUcsRUFBRSxDQUE4QjtRQUNuQ0UsTUFBTSxFQUFFLENBQTRDO1FBQ3BERCxJQUFJLEVBQUUsQ0FBd0M7UUFDOUNFLElBQUksRUFBRSxDQUFDO1lBQUEsQ0FBTTtZQUFFLENBQUs7WUFBRSxDQUFZO1FBQUEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsQ0FBQztRQUNDTixFQUFFLEVBQUUsQ0FBQztRQUNMQyxLQUFLLEVBQUUsQ0FBVztRQUNsQkMsSUFBSSxFQUFFLENBQWlHO1FBQ3ZHQyxHQUFHLEVBQUUsQ0FBK0I7UUFDcENFLE1BQU0sRUFBRSxDQUE4QztRQUN0REQsSUFBSSxFQUFFLENBQXlDO1FBQy9DRSxJQUFJLEVBQUUsQ0FBQztZQUFBLENBQU07WUFBRSxDQUFLO1lBQUUsQ0FBWTtRQUFBLENBQUM7SUFDckMsQ0FBQztBQUNILENBQUM7QUFFTSxHQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFFekJSLFFBQVEsQ0FBQ1MsT0FBTyxDQUFDLFFBQVEsQ0FBUEMsT0FBTyxFQUFLLENBQUM7SUFDN0JBLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDRSxPQUFPLENBQUMsUUFBUSxDQUFQRSxHQUFHO1FBQUssTUFBTSxFQUFMSCxPQUFPLENBQUNJLFFBQVEsQ0FBQ0QsR0FBRyxLQUFLSCxPQUFPLENBQUNLLElBQUksQ0FBQ0YsR0FBRzs7QUFDMUUsQ0FBQztBQUVNLEdBQUssQ0FBQ0csWUFBWSxHQUFHTixPQUFPLENBQUNPLEdBQUcsQ0FBQ0osUUFBUSxDQUFSQSxHQUFHO0lBQUksTUFDM0MsQ0FBRlosdURBQVMsQ0FBQ1ksR0FBRzs7QUFHZiwrREFBZVgsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL2NvbnRlbnQvcHJvamVjdHMudHM/MmI3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBrZWJhYkNhc2UsIGtlYmFiQXJyYXkgfSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCJ0eXBlc1wiO1xuXG5jb25zdCBwcm9qZWN0czogUHJvamVjdFtdID0gW1xuICB7XG4gICAgaWQ6IDAsXG4gICAgdGl0bGU6IFwiRGVjb2RlQ29sbGVnZVwiLFxuICAgIGRlc2M6IFwiU3R1ZGVudCBBcHBsaWNhdGlvbiB0byBoZWxwIGNvbGxlZ2Ugc3R1ZGVudHMgbWFuYWdlIHRoZWlyIGFjYWRlbWljIGRvY3VtZW50cywgZmluZCBjb3Vyc2VzLCByZW1vdmUgcGxhZ2lhcmlzbSBmcm9tIHRleHQsIGNhbGVuZGFyIHRvIHZpZXcgdGhlIGRlYWRsaW5lcyBhbmQgbWFueSBtb3JlXCIsXG4gICAgaW1nOiBcIi9zdGF0aWMvcHJvamVjdHMvRGVjb2RlQ29sbGVnZS5wbmdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZGVjb2RlLWNvbGxlZ2UudmVyY2VsLmFwcFwiLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vVmlydHVhbC1CZWluZ3MvRGVjb2RlQ29sbGVnZVwiLFxuICAgIHRhZ3M6IFtcIkFuZ3VsYXJcIiwgXCJOb2RlSnNcIiwgXCJNb25nb0RiXCIsIFwiQ1NTXCIsIFwiQ2xvdWQgRmlyZXN0b3JlXCJdLFxuICB9LFxuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6IFwiTW9zdCBJbmZsdWVudGlhbCBOb2RlIERldGVjdGlvblwiLFxuICAgIGRlc2M6IFwiQSBSZXNlYXJjaCBQcm9qZWN0IGFpbWluZyB0b3dhcmRzIG1vc3QgaW5mbHVlbnRpYWwgbm9kZSBkZXRlY3Rpb24gaW4gYSBnaXZlbiBzb2NpYWwgbWVkaWEgbmV0d29yayB1c2luZyBjZW50cmFsaXR5IGFsZ29yaXRobXNcIixcbiAgICBpbWc6IFwiL3N0YXRpYy9wcm9qZWN0cy9JbmZsdWVudGlhbE5vZGUucG5nXCIsXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS8xMDBSQVYtQUdHQVJXQUwvTW9zdC1JbmZsdWVudGlhbC1Ob2RlXCIsXG4gICAgdGFnczogW1wiUHl0aG9uXCJdLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6IFwiQXBsYXZhbmt1bGFcIixcbiAgICBkZXNjOiBcIkFuIGFwcCBkZXZlbG9wZWQgdG8gbW9uaXRvciwgcHJlZGljdCBmbG9vZHMgaW4gSW5kaWEgYW5kIGluZm9ybSB0aGUgYXV0aG9yaXRpZXMgYW5kIGxvY2FscyBhYm91dCB0aGUgc2FtZS5cIixcbiAgICBpbWc6IFwiL3N0YXRpYy9wcm9qZWN0cy9BcGxhdmFua3VsYS5wbmdcIixcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tLzEwMFJBVi1BR0dBUldBTC9GTUEtU0lIXCIsXG4gICAgdGFnczogW1wiRmx1dHRlclwiLCBcIk5vZGVKc1wiLCBcIldlYiBBUElzXCJdLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6IFwiTWFwdHlcIixcbiAgICBkZXNjOiBcIkEgc2ltcGxlIGFwcGxpY2F0aW9uIHdoZXJlIHlvdSBjYW4gYWRkIG1hcmtzIG9uIG1hcCB3aGVyZSB5b3UgZGlkIHlvdXIgd29ya291dChydW5uaW5nL2N5Y2xpbmcpXCIsXG4gICAgaW1nOiBcIi9zdGF0aWMvcHJvamVjdHMvTWFwdHkucG5nXCIsXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS8xMDBSQVYtQUdHQVJXQUwvTWFwdHlcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vbWFwdHktMTAwcmF2YWdnLm5ldGxpZnkuYXBwL1wiLFxuICAgIHRhZ3M6IFtcIkhUTUxcIiwgXCJDU1NcIiwgXCJKYXZhc2NyaXB0XCJdLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6IFwiQmFua2lzdFwiLFxuICAgIGRlc2M6IFwiQSBzaW1wbGUgYXBwbGljYXRpb24gd2l0aCB2YXJpb3VzIGFuaW1hdGlvbiBhbmQgVUkgZWZmZWN0c1wiLFxuICAgIGltZzogXCIvc3RhdGljL3Byb2plY3RzL0Jhbmtpc3QucG5nXCIsXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS8xMDBSQVYtQUdHQVJXQUwvQmFua2lzdFwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9iYW5raXN0LTEwMHJhdmFnZy5uZXRsaWZ5LmFwcC9cIixcbiAgICB0YWdzOiBbXCJIVE1MXCIsIFwiQ1NTXCIsIFwiSmF2YXNjcmlwdFwiXSxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIHRpdGxlOiBcIkRpY2UgR2FtZVwiLFxuICAgIGRlc2M6IFwiQSBnYW1lIHdoZXJlIHlvdSByb2xsIGEgZGljZSB0byBhY2N1bXVsYXRlIG51bWJlciBzY29yZS4gRmlyc3Qgb25lIHRvIHJlYWNoIGEgc2NvcmUgb2YgMjAgd2lucy5cIixcbiAgICBpbWc6IFwiL3N0YXRpYy9wcm9qZWN0cy9EaWNlR2FtZS5wbmdcIixcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tLzEwMFJBVi1BR0dBUldBTC9EaWNlLUdhbWVcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZGljZWdhbWUtMTAwcmF2YWdnLm5ldGxpZnkuYXBwL1wiLFxuICAgIHRhZ3M6IFtcIkhUTUxcIiwgXCJDU1NcIiwgXCJKYXZhc2NyaXB0XCJdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGFsbFRhZ3MgPSBbXVxuXG5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gIHByb2plY3QudGFncy5mb3JFYWNoKCh0YWcpID0+ICFhbGxUYWdzLmluY2x1ZGVzKHRhZykgJiYgYWxsVGFncy5wdXNoKHRhZykpXG59KTtcblxuZXhwb3J0IGNvbnN0IGFsbEtlYmFiVGFncyA9IGFsbFRhZ3MubWFwKHRhZyA9PiAoXG4gIGtlYmFiQ2FzZSh0YWcpXG4pKVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0c1xuIl0sIm5hbWVzIjpbImtlYmFiQ2FzZSIsInByb2plY3RzIiwiaWQiLCJ0aXRsZSIsImRlc2MiLCJpbWciLCJsaW5rIiwiZ2l0aHViIiwidGFncyIsImFsbFRhZ3MiLCJmb3JFYWNoIiwicHJvamVjdCIsInRhZyIsImluY2x1ZGVzIiwicHVzaCIsImFsbEtlYmFiVGFncyIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/content/projects.ts\n");

/***/ })

});