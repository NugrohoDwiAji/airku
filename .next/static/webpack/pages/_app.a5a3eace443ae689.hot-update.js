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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n// pages/_app.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const currentPath = router.pathname;\n    const hideFooter = currentPath === \"/loginPage\" || currentPath === \"/registerPage\" || currentPath === \"/resetPasswordPage\" || currentPath === \"/loginAdminPage\" || currentPath === \"/homeAdmin\" || currentPath === \"/artikelAdmin\" || currentPath === \"/inputBerita\" || currentPath === \"/donasiAdmin\";\n    const hideHeader = currentPath === \"/loginPage\" || currentPath === \"/registerPage\" || currentPath === \"/resetPasswordPage\" || currentPath === \"/homeAdmin\" || currentPath === \"/artikelAdmin\" || currentPath === \"/donasiAdmin\" || currentPath === \"/inputBerita\" || currentPath === \"/loginAdminPage\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            hideFooter: hideFooter,\n            hideHeader: hideHeader,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Brida\\\\airku2\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Brida\\\\airku2\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Brida\\\\airku2\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQjs7O0FBRXdCO0FBQ1g7QUFDb0I7QUFFVjtBQUd6QixTQUFTRyxJQUFJLEtBQWtDO1FBQWxDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZLEdBQWxDOztJQUMxQixNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTUssY0FBY0QsT0FBT0UsUUFBUTtJQUNuQyxNQUFNQyxhQUNKRixnQkFBZ0IsZ0JBQ2hCQSxnQkFBZ0IsbUJBQ2hCQSxnQkFBZ0Isd0JBQ2hCQSxnQkFBZ0IscUJBQ2hCQSxnQkFBZ0IsZ0JBQ2hCQSxnQkFBZ0IsbUJBQ2hCQSxnQkFBZ0Isa0JBQ2hCQSxnQkFBZ0I7SUFDbEIsTUFBTUcsYUFDSkgsZ0JBQWdCLGdCQUNoQkEsZ0JBQWdCLG1CQUNoQkEsZ0JBQWdCLHdCQUNoQkEsZ0JBQWdCLGdCQUNoQkEsZ0JBQWdCLG1CQUNoQkEsZ0JBQWdCLGtCQUNoQkEsZ0JBQWdCLGtCQUNoQkEsZ0JBQWdCO0lBRWxCLHFCQUNFLDhEQUFDTiw0REFBZUE7a0JBQ2QsNEVBQUNELDBEQUFNQTtZQUFDUyxZQUFZQTtZQUFZQyxZQUFZQTtzQkFDMUMsNEVBQUNOO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7R0E3QndCRjs7UUFDUEQsa0RBQVNBOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2FwcC50c3hcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgY3VycmVudFBhdGggPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgY29uc3QgaGlkZUZvb3RlciA9XHJcbiAgICBjdXJyZW50UGF0aCA9PT0gXCIvbG9naW5QYWdlXCIgfHxcclxuICAgIGN1cnJlbnRQYXRoID09PSBcIi9yZWdpc3RlclBhZ2VcIiB8fFxyXG4gICAgY3VycmVudFBhdGggPT09IFwiL3Jlc2V0UGFzc3dvcmRQYWdlXCIgfHxcclxuICAgIGN1cnJlbnRQYXRoID09PSBcIi9sb2dpbkFkbWluUGFnZVwifHxcclxuICAgIGN1cnJlbnRQYXRoID09PSBcIi9ob21lQWRtaW5cIiB8fFxyXG4gICAgY3VycmVudFBhdGggPT09IFwiL2FydGlrZWxBZG1pblwiIHx8XHJcbiAgICBjdXJyZW50UGF0aCA9PT0gXCIvaW5wdXRCZXJpdGFcIiB8fFxyXG4gICAgY3VycmVudFBhdGggPT09IFwiL2RvbmFzaUFkbWluXCI7XHJcbiAgY29uc3QgaGlkZUhlYWRlciA9XHJcbiAgICBjdXJyZW50UGF0aCA9PT0gXCIvbG9naW5QYWdlXCIgfHxcclxuICAgIGN1cnJlbnRQYXRoID09PSBcIi9yZWdpc3RlclBhZ2VcIiB8fFxyXG4gICAgY3VycmVudFBhdGggPT09IFwiL3Jlc2V0UGFzc3dvcmRQYWdlXCIgfHxcclxuICAgIGN1cnJlbnRQYXRoID09PSBcIi9ob21lQWRtaW5cIiB8fFxyXG4gICAgY3VycmVudFBhdGggPT09IFwiL2FydGlrZWxBZG1pblwiIHx8XHJcbiAgICBjdXJyZW50UGF0aCA9PT0gXCIvZG9uYXNpQWRtaW5cIiB8fFxyXG4gICAgY3VycmVudFBhdGggPT09IFwiL2lucHV0QmVyaXRhXCIgfHxcclxuICAgIGN1cnJlbnRQYXRoID09PSBcIi9sb2dpbkFkbWluUGFnZVwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlc3Npb25Qcm92aWRlcj5cclxuICAgICAgPExheW91dCBoaWRlRm9vdGVyPXtoaWRlRm9vdGVyfSBoaWRlSGVhZGVyPXtoaWRlSGVhZGVyfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiU2Vzc2lvblByb3ZpZGVyIiwidXNlUm91dGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiY3VycmVudFBhdGgiLCJwYXRobmFtZSIsImhpZGVGb290ZXIiLCJoaWRlSGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});