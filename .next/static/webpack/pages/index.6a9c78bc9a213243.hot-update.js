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

/***/ "./data/content/home.ts":
/*!******************************!*\
  !*** ./data/content/home.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"skills\": function() { return /* binding */ skills; },\n/* harmony export */   \"testimonials\": function() { return /* binding */ testimonials; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar skills = [\n    {\n        title: \"HTML\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg\"\n    },\n    {\n        title: \"CSS\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg\"\n    },\n    {\n        title: \"Javascript\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg\"\n    },\n    {\n        title: \"TailwindCSS\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg\"\n    },\n    {\n        title: \"React\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg\"\n    },\n    {\n        title: \"Angular\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg\"\n    },\n    {\n        title: \"Typescript\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg\"\n    },\n    {\n        title: \"NodeJS\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg\"\n    },\n    {\n        title: \"MySQL\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg\"\n    },\n    {\n        title: \"MongoDB\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg\"\n    },\n    {\n        title: \"Redis\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg\"\n    },\n    {\n        title: \"Python\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg\"\n    },\n    {\n        title: \"Flutter\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg\"\n    },\n    {\n        title: \"Git\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg\"\n    },\n    {\n        title: \"Firebase\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg\"\n    },\n    {\n        title: \"Docker\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg\"\n    },\n    {\n        title: \"C++\",\n        icon: \"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg\"\n    }, \n];\nvar testimonials = [\n    {\n        quote: \"My vision was executed perfectly. Work assigned was properly documented and met the deadlines. The quality of code was excellent.\",\n        name: \"Nikhil Mittal\",\n        job: \"Founder of Kshipta Technologies LLP\"\n    },\n    {\n        quote: \"The communication throughout the project was spot on. The code was clean, easy to understand, and exactly what I was looking for.\",\n        name: \"Uday Atilli\",\n        job: \"Founder of Tracktrades\"\n    },\n    {\n        quote: \"The quality and speed of the work was excellent. Learning and Implementation of new concepts was also up to the mark.\",\n        name: \"Siraj Shaik\",\n        job: \"Reporting Manager of Accelalpha\"\n    }, \n];\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2NvbnRlbnQvaG9tZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFZTyxHQUFLLENBQUNBLE1BQU0sR0FBWSxDQUFDO0lBQzlCLENBQUM7UUFDQ0MsS0FBSyxFQUFFLENBQU07UUFDYkMsSUFBSSxFQUFFLENBQTZFO0lBQ3JGLENBQUM7SUFDRCxDQUFDO1FBQ0NELEtBQUssRUFBRSxDQUFLO1FBQ1pDLElBQUksRUFBRSxDQUEyRTtJQUNuRixDQUFDO0lBQ0QsQ0FBQztRQUNDRCxLQUFLLEVBQUUsQ0FBWTtRQUNuQkMsSUFBSSxFQUFFLENBQXVGO0lBQy9GLENBQUM7SUFDRCxDQUFDO1FBQ0NELEtBQUssRUFBRSxDQUFhO1FBQ3BCQyxJQUFJLEVBQUUsQ0FBZ0c7SUFDeEcsQ0FBQztJQUNELENBQUM7UUFDQ0QsS0FBSyxFQUFFLENBQU87UUFDZEMsSUFBSSxFQUFFLENBQTZFO0lBQ3JGLENBQUM7SUFDRCxDQUFDO1FBQ0NELEtBQUssRUFBRSxDQUFTO1FBQ2hCQyxJQUFJLEVBQUUsQ0FBd0Y7SUFDaEcsQ0FBQztJQUNELENBQUM7UUFDQ0QsS0FBSyxFQUFFLENBQVk7UUFDbkJDLElBQUksRUFBRSxDQUF1RjtJQUMvRixDQUFDO0lBQ0QsQ0FBQztRQUNDRCxLQUFLLEVBQUUsQ0FBUTtRQUNmQyxJQUFJLEVBQUUsQ0FBK0U7SUFDdkYsQ0FBQztJQUNELENBQUM7UUFDQ0QsS0FBSyxFQUFFLENBQU87UUFDZEMsSUFBSSxFQUFFLENBQTZGO0lBQ3JHLENBQUM7SUFDRCxDQUFDO1FBQ0NELEtBQUssRUFBRSxDQUFTO1FBQ2hCQyxJQUFJLEVBQUUsQ0FBd0Y7SUFDaEcsQ0FBQztJQUNELENBQUM7UUFDQ0QsS0FBSyxFQUFFLENBQU87UUFDZEMsSUFBSSxFQUFFLENBQW9GO0lBQzVGLENBQUM7SUFDRCxDQUFDO1FBQ0NELEtBQUssRUFBRSxDQUFRO1FBQ2ZDLElBQUksRUFBRSxDQUFzRjtJQUM5RixDQUFDO0lBQ0QsQ0FBQztRQUNDRCxLQUFLLEVBQUUsQ0FBUztRQUNoQkMsSUFBSSxFQUFFLENBQXdGO0lBQ2hHLENBQUM7SUFDRCxDQUFDO1FBQ0NELEtBQUssRUFBRSxDQUFLO1FBQ1pDLElBQUksRUFBRSxDQUF5RTtJQUNqRixDQUFDO0lBQ0QsQ0FBQztRQUNDRCxLQUFLLEVBQUUsQ0FBVTtRQUNqQkMsSUFBSSxFQUFFLENBQWdGO0lBQ3hGLENBQUM7SUFDRCxDQUFDO1FBQ0NELEtBQUssRUFBRSxDQUFRO1FBQ2ZDLElBQUksRUFBRSxDQUFtRjtJQUMzRixDQUFDO0lBQ0QsQ0FBQztRQUNDRCxLQUFLLEVBQUUsQ0FBSztRQUNaQyxJQUFJLEVBQUUsQ0FBNEY7SUFDcEcsQ0FBQztBQUNILENBQUM7QUFFTSxHQUFLLENBQUNDLFlBQVksR0FBa0IsQ0FBQztJQUMxQyxDQUFDO1FBQ0NDLEtBQUssRUFDSCxDQUFtSTtRQUNySUMsSUFBSSxFQUFFLENBQWU7UUFDckJDLEdBQUcsRUFBRSxDQUFxQztJQUM1QyxDQUFDO0lBQ0QsQ0FBQztRQUNDRixLQUFLLEVBQ0gsQ0FBbUk7UUFDcklDLElBQUksRUFBRSxDQUFhO1FBQ25CQyxHQUFHLEVBQUUsQ0FBd0I7SUFDL0IsQ0FBQztJQUNELENBQUM7UUFDQ0YsS0FBSyxFQUNILENBQXVIO1FBQ3pIQyxJQUFJLEVBQUUsQ0FBYTtRQUNuQkMsR0FBRyxFQUFFLENBQWlDO0lBQ3hDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGEvY29udGVudC9ob21lLnRzPzQyZDMiXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBTa2lsbCA9IHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgaWNvbjogc3RyaW5nLFxuICBzdHlsZT86IG9iamVjdFxufTtcbnR5cGUgVGVzdGltb25pYWwgPSB7XG4gIHF1b3RlOiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZyxcbiAgam9iOiBzdHJpbmdcbn07XG5cblxuZXhwb3J0IGNvbnN0IHNraWxsczogU2tpbGxbXSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkhUTUxcIixcbiAgICBpY29uOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL2h0bWw1L2h0bWw1LW9yaWdpbmFsLnN2Z1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ1NTXCIsXG4gICAgaWNvbjogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy9jc3MzL2NzczMtb3JpZ2luYWwuc3ZnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJKYXZhc2NyaXB0XCIsXG4gICAgaWNvbjogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy9qYXZhc2NyaXB0L2phdmFzY3JpcHQtb3JpZ2luYWwuc3ZnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUYWlsd2luZENTU1wiLFxuICAgIGljb246IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzLW9yaWdpbmFsLnN2Z1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUmVhY3RcIixcbiAgICBpY29uOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL3JlYWN0L3JlYWN0LW9yaWdpbmFsLnN2Z1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQW5ndWxhclwiLFxuICAgIGljb246IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2FuZ3VsYXIvYW5ndWxhci1vcmlnaW5hbC5zdmdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlR5cGVzY3JpcHRcIixcbiAgICBpY29uOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL3R5cGVzY3JpcHQvdHlwZXNjcmlwdC1vcmlnaW5hbC5zdmdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk5vZGVKU1wiLFxuICAgIGljb246IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvbm9kZWpzL25vZGVqcy1vcmlnaW5hbC5zdmdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk15U1FMXCIsXG4gICAgaWNvbjogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvbXlzcWwvbXlzcWwtb3JpZ2luYWwtd29yZG1hcmsuc3ZnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNb25nb0RCXCIsXG4gICAgaWNvbjogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvbW9uZ29kYi9tb25nb2RiLW9yaWdpbmFsLnN2Z1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUmVkaXNcIixcbiAgICBpY29uOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9yZWRpcy9yZWRpcy1vcmlnaW5hbC5zdmdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlB5dGhvblwiLFxuICAgIGljb246IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3B5dGhvbi9weXRob24tb3JpZ2luYWwuc3ZnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJGbHV0dGVyXCIsXG4gICAgaWNvbjogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZmx1dHRlci9mbHV0dGVyLW9yaWdpbmFsLnN2Z1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiR2l0XCIsXG4gICAgaWNvbjogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy9naXQvZ2l0LW9yaWdpbmFsLnN2Z1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRmlyZWJhc2VcIixcbiAgICBpY29uOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL2ZpcmViYXNlL2ZpcmViYXNlLXBsYWluLnN2Z1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRG9ja2VyXCIsXG4gICAgaWNvbjogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZG9ja2VyL2RvY2tlci1wbGFpbi5zdmdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkMrK1wiLFxuICAgIGljb246IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2NwbHVzcGx1cy9jcGx1c3BsdXMtb3JpZ2luYWwuc3ZnXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgdGVzdGltb25pYWxzOiBUZXN0aW1vbmlhbFtdID0gW1xuICB7XG4gICAgcXVvdGU6XG4gICAgICBcIk15IHZpc2lvbiB3YXMgZXhlY3V0ZWQgcGVyZmVjdGx5LiBXb3JrIGFzc2lnbmVkIHdhcyBwcm9wZXJseSBkb2N1bWVudGVkIGFuZCBtZXQgdGhlIGRlYWRsaW5lcy4gVGhlIHF1YWxpdHkgb2YgY29kZSB3YXMgZXhjZWxsZW50LlwiLFxuICAgIG5hbWU6IFwiTmlraGlsIE1pdHRhbFwiLFxuICAgIGpvYjogXCJGb3VuZGVyIG9mIEtzaGlwdGEgVGVjaG5vbG9naWVzIExMUFwiLFxuICB9LFxuICB7XG4gICAgcXVvdGU6XG4gICAgICBcIlRoZSBjb21tdW5pY2F0aW9uIHRocm91Z2hvdXQgdGhlIHByb2plY3Qgd2FzIHNwb3Qgb24uIFRoZSBjb2RlIHdhcyBjbGVhbiwgZWFzeSB0byB1bmRlcnN0YW5kLCBhbmQgZXhhY3RseSB3aGF0IEkgd2FzIGxvb2tpbmcgZm9yLlwiLFxuICAgIG5hbWU6IFwiVWRheSBBdGlsbGlcIixcbiAgICBqb2I6IFwiRm91bmRlciBvZiBUcmFja3RyYWRlc1wiLFxuICB9LFxuICB7XG4gICAgcXVvdGU6XG4gICAgICBcIlRoZSBxdWFsaXR5IGFuZCBzcGVlZCBvZiB0aGUgd29yayB3YXMgZXhjZWxsZW50LiBMZWFybmluZyBhbmQgSW1wbGVtZW50YXRpb24gb2YgbmV3IGNvbmNlcHRzIHdhcyBhbHNvIHVwIHRvIHRoZSBtYXJrLlwiLFxuICAgIG5hbWU6IFwiU2lyYWogU2hhaWtcIixcbiAgICBqb2I6IFwiUmVwb3J0aW5nIE1hbmFnZXIgb2YgQWNjZWxhbHBoYVwiLFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJza2lsbHMiLCJ0aXRsZSIsImljb24iLCJ0ZXN0aW1vbmlhbHMiLCJxdW90ZSIsIm5hbWUiLCJqb2IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/content/home.ts\n");

/***/ })

});