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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; },\n/* harmony export */   metadata: function() { return /* binding */ metadata; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n// pages/_app.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst metadata = {\n    icons\n};\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const currentPath = router.pathname;\n    const hideFooter = currentPath === \"/loginPage\" || currentPath === \"/registerPage\" || currentPath === \"/resetPasswordPage\" || currentPath === \"/loginAdminPage\" || currentPath === \"/homeAdmin\" || currentPath === \"/artikelAdmin\" || currentPath === \"/inputBerita\" || currentPath === \"/donasiAdmin\";\n    const hideHeader = currentPath === \"/loginPage\" || currentPath === \"/registerPage\" || currentPath === \"/resetPasswordPage\" || currentPath === \"/homeAdmin\" || currentPath === \"/artikelAdmin\" || currentPath === \"/donasiAdmin\" || currentPath === \"/inputBerita\" || currentPath === \"/loginAdminPage\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            hideFooter: hideFooter,\n            hideHeader: hideHeader,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Brida\\\\airku2\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Brida\\\\airku2\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Brida\\\\airku2\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFBaUI7OztBQUV3QjtBQUNYO0FBQ29CO0FBRVY7QUFHakMsTUFBTUcsV0FBbUI7SUFDOUJDO0FBQ0YsRUFBQztBQUVjLFNBQVNDLElBQUksS0FBa0M7UUFBbEMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVksR0FBbEM7O0lBQzFCLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNTyxjQUFjRCxPQUFPRSxRQUFRO0lBQ25DLE1BQU1DLGFBQ0pGLGdCQUFnQixnQkFDaEJBLGdCQUFnQixtQkFDaEJBLGdCQUFnQix3QkFDaEJBLGdCQUFnQixxQkFDaEJBLGdCQUFnQixnQkFDaEJBLGdCQUFnQixtQkFDaEJBLGdCQUFnQixrQkFDaEJBLGdCQUFnQjtJQUNsQixNQUFNRyxhQUNKSCxnQkFBZ0IsZ0JBQ2hCQSxnQkFBZ0IsbUJBQ2hCQSxnQkFBZ0Isd0JBQ2hCQSxnQkFBZ0IsZ0JBQ2hCQSxnQkFBZ0IsbUJBQ2hCQSxnQkFBZ0Isa0JBQ2hCQSxnQkFBZ0Isa0JBQ2hCQSxnQkFBZ0I7SUFFbEIscUJBQ0UsOERBQUNSLDREQUFlQTtrQkFDZCw0RUFBQ0QsMERBQU1BO1lBQUNXLFlBQVlBO1lBQVlDLFlBQVlBO3NCQUMxQyw0RUFBQ047Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztHQTdCd0JGOztRQUNQSCxrREFBU0E7OztLQURGRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9fYXBwLnRzeFxyXG5cclxuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhZGF0YTpNZXRhZGF0YSA9e1xyXG4gIGljb25zXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgY3VycmVudFBhdGggPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgY29uc3QgaGlkZUZvb3RlciA9XHJcbiAgICBjdXJyZW50UGF0aCA9PT0gXCIvbG9naW5QYWdlXCIgfHxcclxuICAgIGN1cnJlbnRQYXRoID09PSBcIi9yZWdpc3RlclBhZ2VcIiB8fFxyXG4gICAgY3VycmVudFBhdGggPT09IFwiL3Jlc2V0UGFzc3dvcmRQYWdlXCIgfHxcclxuICAgIGN1cnJlbnRQYXRoID09PSBcIi9sb2dpbkFkbWluUGFnZVwifHxcclxuICAgIGN1cnJlbnRQYXRoID09PSBcIi9ob21lQWRtaW5cIiB8fFxyXG4gICAgY3VycmVudFBhdGggPT09IFwiL2FydGlrZWxBZG1pblwiIHx8XHJcbiAgICBjdXJyZW50UGF0aCA9PT0gXCIvaW5wdXRCZXJpdGFcIiB8fFxyXG4gICAgY3VycmVudFBhdGggPT09IFwiL2RvbmFzaUFkbWluXCI7XHJcbiAgY29uc3QgaGlkZUhlYWRlciA9XHJcbiAgICBjdXJyZW50UGF0aCA9PT0gXCIvbG9naW5QYWdlXCIgfHxcclxuICAgIGN1cnJlbnRQYXRoID09PSBcIi9yZWdpc3RlclBhZ2VcIiB8fFxyXG4gICAgY3VycmVudFBhdGggPT09IFwiL3Jlc2V0UGFzc3dvcmRQYWdlXCIgfHxcclxuICAgIGN1cnJlbnRQYXRoID09PSBcIi9ob21lQWRtaW5cIiB8fFxyXG4gICAgY3VycmVudFBhdGggPT09IFwiL2FydGlrZWxBZG1pblwiIHx8XHJcbiAgICBjdXJyZW50UGF0aCA9PT0gXCIvZG9uYXNpQWRtaW5cIiB8fFxyXG4gICAgY3VycmVudFBhdGggPT09IFwiL2lucHV0QmVyaXRhXCIgfHxcclxuICAgIGN1cnJlbnRQYXRoID09PSBcIi9sb2dpbkFkbWluUGFnZVwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlc3Npb25Qcm92aWRlcj5cclxuICAgICAgPExheW91dCBoaWRlRm9vdGVyPXtoaWRlRm9vdGVyfSBoaWRlSGVhZGVyPXtoaWRlSGVhZGVyfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiU2Vzc2lvblByb3ZpZGVyIiwidXNlUm91dGVyIiwibWV0YWRhdGEiLCJpY29ucyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImN1cnJlbnRQYXRoIiwicGF0aG5hbWUiLCJoaWRlRm9vdGVyIiwiaGlkZUhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});