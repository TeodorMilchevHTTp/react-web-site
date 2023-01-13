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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n\n\nfunction Session(props) {\n    const title = props.title;\n    const room = props.room;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Session;\nconst IndexPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                const { id , bio , first , last , favorite , twitterHandle , company , sessions  } = speaker;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card card-height p-4 mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"contain-fit\",\n                                        src: \"/images/speaker-\".concat(id, \".jpg\"),\n                                        width: \"300\",\n                                        alt: \"\".concat(first, \" \").concat(last)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"speaker-info\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex justify-content-between mb-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-truncate w-200\",\n                                                children: [\n                                                    first,\n                                                    \" \",\n                                                    last\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    bio,\n                                                    \" \",\n                                                    company,\n                                                    \" \",\n                                                    twitterHandle,\n                                                    \" \",\n                                                    favorite\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                            lineNumber: 32,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"sessionBox card h-250\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n                                title: sessions[0].title,\n                                room: sessions[0].room.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBc0M7QUFFdEMsU0FBU0MsUUFBUUMsS0FBSyxFQUFFO0lBQ3RCLE1BQU1DLFFBQVFELE1BQU1DLEtBQUs7SUFDekIsTUFBTUMsT0FBT0YsTUFBTUUsSUFBSTtJQUN2QixxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTs7WUFDYkg7WUFBTzswQkFDUiw4REFBQ0k7O29CQUFPO29CQUFPSDs7Ozs7Ozs7Ozs7OztBQUdyQjtLQVRTSDtBQVdULE1BQU1PLFlBQVksSUFBTTtJQUN0QixxQkFDRSw4REFBQ0M7UUFBSUgsV0FBVTtrQkFDYiw0RUFBQ0c7WUFBSUgsV0FBVTtzQkFDWk4sa0RBQVEsQ0FBQyxTQUFVVyxPQUFPLEVBQUU7Z0JBQzNCLE1BQU0sRUFDSkMsR0FBRSxFQUNGQyxJQUFHLEVBQ0hDLE1BQUssRUFDTEMsS0FBSSxFQUNKQyxTQUFRLEVBQ1JDLGNBQWEsRUFDYkMsUUFBTyxFQUNQQyxTQUFRLEVBQ1QsR0FBR1I7Z0JBRUoscUJBQ0UsOERBQUNGO29CQUFJSCxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQUlILFdBQVU7OzhDQUNiLDhEQUFDRztvQ0FBSUgsV0FBVTs4Q0FDYiw0RUFBQ2M7d0NBQ0NkLFdBQVU7d0NBQ1ZlLEtBQUssbUJBQXNCLE9BQUhULElBQUc7d0NBQzNCVSxPQUFNO3dDQUNOQyxLQUFLLEdBQVlSLE9BQVRELE9BQU0sS0FBUSxPQUFMQzs7Ozs7Ozs7Ozs7OENBR3JCLDhEQUFDTjtvQ0FBSUgsV0FBVTs7c0RBQ2IsOERBQUNHOzRDQUFJSCxXQUFVO3NEQUNiLDRFQUFDa0I7Z0RBQUdsQixXQUFVOztvREFDWFE7b0RBQU07b0RBQUVDOzs7Ozs7Ozs7Ozs7c0RBR2IsOERBQUNOO3NEQUNDLDRFQUFDZ0I7O29EQUNFWjtvREFBSTtvREFBRUs7b0RBQVE7b0RBQUVEO29EQUFjO29EQUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUt6Qyw4REFBQ1A7NEJBQUlILFdBQVU7c0NBQ2IsNEVBQUNMO2dDQUNERSxPQUFPZ0IsUUFBUSxDQUFDLEVBQUUsQ0FBQ2hCLEtBQUs7Z0NBQ3hCQyxNQUFNZSxRQUFRLENBQUMsRUFBRSxDQUFDZixJQUFJLENBQUNzQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztZQUtuQzs7Ozs7Ozs7Ozs7QUFJUjtNQXBETWxCO0FBc0ROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi9TcGVha2VyRGF0YVwiO1xyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbihwcm9wcykge1xyXG4gIGNvbnN0IHRpdGxlID0gcHJvcHMudGl0bGU7XHJcbiAgY29uc3Qgcm9vbSA9IHByb3BzLnJvb207XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAge3RpdGxlfXtcIiBcIn1cclxuICAgICAgPHN0cm9uZz5Sb29tOiB7cm9vbX08L3N0cm9uZz5cclxuICAgIDwvc3Bhbj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIHtkYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgYmlvLFxyXG4gICAgICAgICAgICBmaXJzdCxcclxuICAgICAgICAgICAgbGFzdCxcclxuICAgICAgICAgICAgZmF2b3JpdGUsXHJcbiAgICAgICAgICAgIHR3aXR0ZXJIYW5kbGUsXHJcbiAgICAgICAgICAgIGNvbXBhbnksXHJcbiAgICAgICAgICAgIHNlc3Npb25zLFxyXG4gICAgICAgICAgfSA9IHNwZWFrZXI7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YmlvfSB7Y29tcGFueX0ge3R3aXR0ZXJIYW5kbGV9IHtmYXZvcml0ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAgICAgICAgICAgIDxTZXNzaW9uIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Nlc3Npb25zWzBdLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgcm9vbT17c2Vzc2lvbnNbMF0ucm9vbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7Il0sIm5hbWVzIjpbImRhdGEiLCJTZXNzaW9uIiwicHJvcHMiLCJ0aXRsZSIsInJvb20iLCJzcGFuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwiSW5kZXhQYWdlIiwiZGl2IiwibWFwIiwic3BlYWtlciIsImlkIiwiYmlvIiwiZmlyc3QiLCJsYXN0IiwiZmF2b3JpdGUiLCJ0d2l0dGVySGFuZGxlIiwiY29tcGFueSIsInNlc3Npb25zIiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJoMyIsInAiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});