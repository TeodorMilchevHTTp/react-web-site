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

/***/ "./src/components/SpeakersToolbar.js":
/*!*******************************************!*\
  !*** ./src/components/SpeakersToolbar.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction SpeakersToolbar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"toolbar dark-theme-header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-content-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"toolrow d-flex flex-column flex-lg-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-lex flex-column flex-md-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Show Sessions \\xa0\\xa0\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 13,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"fav\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            checked: showSessions,\n                                            onChange: (e)=>setShowSessions(e.target.check)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                            lineNumber: 15,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"switch\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                            lineNumber: 20,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                            lineNumber: 12,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row ml-sm-5 ml-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Theme\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"dropdown\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"form-control theme\",\n                                        value: theme,\n                                        onChange: (e)=>setTheme(e.target.value),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Light\",\n                                                children: \"Light\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                                lineNumber: 31,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Dark\",\n                                                children: \"Dark\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                                lineNumber: 32,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                    lineNumber: 11,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersToolbar.js\",\n            lineNumber: 9,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersToolbar.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_c = SpeakersToolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersToolbar);\nvar _c;\n$RefreshReg$(_c, \"SpeakersToolbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc1Rvb2xiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUFpQztBQUVqQyxTQUFTQyxrQkFBa0I7SUFJdkIscUJBQ0ksOERBQUNDO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNiLDRFQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUdGLFdBQVU7O3NDQUNaLDhEQUFDRzs0QkFBR0gsV0FBVTs7OENBQ1osOERBQUNJOzhDQUFFOzs7Ozs7OENBQ0gsOERBQUNDO29DQUFNTCxXQUFVOztzREFDZiw4REFBQ007NENBQ0RDLE1BQUs7NENBQ0xDLFNBQVNDOzRDQUNUQyxVQUFVQyxDQUFBQSxJQUFLQyxnQkFBZ0JELEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7O3NEQUU3Qyw4REFBQ0M7NENBQUtmLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHcEIsOERBQUNHOzRCQUFHSCxXQUFVOzs4Q0FDWiw4REFBQ2dCOzhDQUFPOzs7Ozs7OENBQ1IsOERBQUNYO29DQUFNTCxXQUFVOzhDQUNmLDRFQUFDaUI7d0NBQ0RqQixXQUFVO3dDQUNWa0IsT0FBT0M7d0NBQ1BULFVBQVVDLENBQUFBLElBQUtTLFNBQVNULEVBQUVFLE1BQU0sQ0FBQ0ssS0FBSzs7MERBRXBDLDhEQUFDRztnREFBT0gsT0FBTTswREFBUTs7Ozs7OzBEQUN0Qiw4REFBQ0c7Z0RBQU9ILE9BQU07MERBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzNDO0tBdENTcEI7QUF3Q1QsK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNUb29sYmFyLmpzPzFlYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzVG9vbGJhcigpIHtcclxuXHJcblxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b29sYmFyIGRhcmstdGhlbWUtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvb2xyb3cgZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbGctcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1sZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGI+U2hvdyBTZXNzaW9ucyAmbmJzcDsmbmJzcDs8L2I+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dTZXNzaW9uc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTaG93U2Vzc2lvbnMoZS50YXJnZXQuY2hlY2spfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3cgbWwtc20tNSBtbC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGhlbWU8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGhlbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGVtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUaGVtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxpZ2h0XCI+TGlnaHQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEYXJrXCI+RGFyazwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNUb29sYmFyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNwZWFrZXJzVG9vbGJhciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJ1bCIsImxpIiwiYiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsInNob3dTZXNzaW9ucyIsIm9uQ2hhbmdlIiwiZSIsInNldFNob3dTZXNzaW9ucyIsInRhcmdldCIsImNoZWNrIiwic3BhbiIsInN0cm9uZyIsInNlbGVjdCIsInZhbHVlIiwidGhlbWUiLCJzZXRUaGVtZSIsIm9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersToolbar.js\n"));

/***/ })

});