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

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n//Component housing single Session\n\nfunction Session(param) {\n    let { title , room  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, this);\n}\n_c = Session;\n//Component housing all sessions\nfunction Sessions(param) {\n    let { sessions  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n            title: sessions[0].title,\n            room: sessions[0].room.name\n        }, void 0, false, {\n            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Sessions;\n//Component housing the Speaker Image\nfunction SpeakerImage(param) {\n    let { first , last , id  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c2 = SpeakerImage;\n//Component housing speaker bio and media\nfunction SpeakerDemographics(param) {\n    let { first , last , bio , company , twitterHandle , favorite  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row at-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_c3 = SpeakerDemographics;\n//Main component forming the Speaker\nfunction Speaker(param) {\n    let { speaker  } = param;\n    const { id , first , last , sessions  } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {\n                        ...speaker\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_c4 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerDemographics\");\n$RefreshReg$(_c4, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBLGtDQUFrQztBQUNsQztBQUFBLFNBQVNBLFFBQVEsS0FBYSxFQUFFO1FBQWYsRUFBQ0MsTUFBSyxFQUFFQyxLQUFJLEVBQUMsR0FBYjtJQUNmLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOztZQUNiSDtZQUFPOzBCQUNSLDhEQUFDSTs7b0JBQU87b0JBQU9IOzs7Ozs7Ozs7Ozs7O0FBR3JCO0tBUFNGO0FBU1QsZ0NBQWdDO0FBQ2hDLFNBQVNNLFNBQVMsS0FBVSxFQUFFO1FBQVosRUFBQ0MsU0FBUSxFQUFDLEdBQVY7SUFDaEIscUJBQ0UsOERBQUNDO1FBQUlKLFdBQVU7a0JBQ2IsNEVBQUNKO1lBQ0NDLE9BQU9NLFFBQVEsQ0FBQyxFQUFFLENBQUNOLEtBQUs7WUFDeEJDLE1BQU1LLFFBQVEsQ0FBQyxFQUFFLENBQUNMLElBQUksQ0FBQ08sSUFBSTs7Ozs7Ozs7Ozs7QUFJbkM7TUFUU0g7QUFXVCxxQ0FBcUM7QUFDckMsU0FBU0ksYUFBYSxLQUFpQixFQUFFO1FBQW5CLEVBQUNDLE1BQUssRUFBRUMsS0FBSSxFQUFFQyxHQUFFLEVBQUMsR0FBakI7SUFDcEIscUJBQ0UsOERBQUNMO1FBQUlKLFdBQVU7a0JBQ2IsNEVBQUNVO1lBQ0NWLFdBQVU7WUFDVlcsS0FBSyxtQkFBc0IsT0FBSEYsSUFBRztZQUMzQkcsT0FBTTtZQUNOQyxLQUFLLEdBQVlMLE9BQVRELE9BQU0sS0FBUSxPQUFMQzs7Ozs7Ozs7Ozs7QUFJekI7TUFYU0Y7QUFhVCx5Q0FBeUM7QUFDekMsU0FBU1Esb0JBQW9CLEtBQW9ELEVBQUU7UUFBdEQsRUFBQ1AsTUFBSyxFQUFFQyxLQUFJLEVBQUVPLElBQUcsRUFBRUMsUUFBTyxFQUFFQyxjQUFhLEVBQUVDLFNBQVEsRUFBQyxHQUFwRDtJQUMzQixxQkFDRSw4REFBQ2Q7UUFBSUosV0FBVTs7MEJBQ2IsOERBQUNJO2dCQUFJSixXQUFVOzBCQUNiLDRFQUFDbUI7b0JBQUduQixXQUFVOzt3QkFDWE87d0JBQU07d0JBQUVDOzs7Ozs7Ozs7Ozs7MEJBR2IsOERBQUNKOztrQ0FDQyw4REFBQ2dCO3dCQUFFcEIsV0FBVTtrQ0FDVmU7Ozs7OztrQ0FFSCw4REFBQ1g7d0JBQUlKLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FBSUosV0FBVTs7a0RBQ2IsOERBQUNxQjtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQztrREFBSU47Ozs7Ozs7Ozs7OzswQ0FFUCw4REFBQ1o7Z0NBQUlKLFdBQVU7O2tEQUNiLDhEQUFDcUI7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0M7a0RBQUlMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakI7TUF6QlNIO0FBMkJULG9DQUFvQztBQUNwQyxTQUFTUyxRQUFRLEtBQVMsRUFBRTtRQUFYLEVBQUNDLFFBQU8sRUFBQyxHQUFUO0lBQ2YsTUFBTSxFQUNKZixHQUFFLEVBQ0ZGLE1BQUssRUFDTEMsS0FBSSxFQUNKTCxTQUFRLEVBQ1QsR0FBR3FCO0lBQ0oscUJBQ0UsOERBQUNwQjtRQUFJSixXQUFVOzswQkFDYiw4REFBQ0k7Z0JBQUlKLFdBQVU7O2tDQUNiLDhEQUFDTTt3QkFBYUcsSUFBSUE7d0JBQUlGLE9BQU9BO3dCQUFPQyxNQUFNQTs7Ozs7O2tDQUMxQyw4REFBQ007d0JBQXFCLEdBQUdVLE9BQU87Ozs7Ozs7Ozs7OzswQkFFbEMsOERBQUN0QjtnQkFBU0MsVUFBVUE7Ozs7Ozs7Ozs7OztBQUcxQjtNQWhCU29CO0FBa0JULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXIuanM/MjkyZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbXBvbmVudCBob3VzaW5nIHNpbmdsZSBTZXNzaW9uXHJcbmZ1bmN0aW9uIFNlc3Npb24oe3RpdGxlLCByb29tfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XHJcbiAgICAgIHt0aXRsZX17XCIgXCJ9XHJcbiAgICAgIDxzdHJvbmc+Um9vbToge3Jvb219PC9zdHJvbmc+XHJcbiAgICA8L3NwYW4+XHJcbiAgKVxyXG59XHJcblxyXG4vL0NvbXBvbmVudCBob3VzaW5nIGFsbCBzZXNzaW9uc1xyXG5mdW5jdGlvbiBTZXNzaW9ucyh7c2Vzc2lvbnN9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgIDxTZXNzaW9uIFxyXG4gICAgICAgIHRpdGxlPXtzZXNzaW9uc1swXS50aXRsZX1cclxuICAgICAgICByb29tPXtzZXNzaW9uc1swXS5yb29tLm5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8vQ29tcG9uZW50IGhvdXNpbmcgdGhlIFNwZWFrZXIgSW1hZ2VcclxuZnVuY3Rpb24gU3BlYWtlckltYWdlKHtmaXJzdCwgbGFzdCwgaWR9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxyXG4gICAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8vQ29tcG9uZW50IGhvdXNpbmcgc3BlYWtlciBiaW8gYW5kIG1lZGlhXHJcbmZ1bmN0aW9uIFNwZWFrZXJEZW1vZ3JhcGhpY3Moe2ZpcnN0LCBsYXN0LCBiaW8sIGNvbXBhbnksIHR3aXR0ZXJIYW5kbGUsIGZhdm9yaXRlfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIHtiaW99XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIGQtZmxleCBmbGV4LXJvdyBhdC00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cclxuICAgICAgICAgICAgPGg1PkNvbXBhbnk8L2g1PlxyXG4gICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+XHJcbiAgICAgICAgICAgIDxoNT5Ud2l0dGVyPC9oNT5cclxuICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8vTWFpbiBjb21wb25lbnQgZm9ybWluZyB0aGUgU3BlYWtlclxyXG5mdW5jdGlvbiBTcGVha2VyKHtzcGVha2VyfSkge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgZmlyc3QsXHJcbiAgICBsYXN0LFxyXG4gICAgc2Vzc2lvbnNcclxuICB9ID0gc3BlYWtlclxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cclxuICAgICAgICA8U3BlYWtlckltYWdlIGlkPXtpZH0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fS8+XHJcbiAgICAgICAgPFNwZWFrZXJEZW1vZ3JhcGhpY3Mgey4uLnNwZWFrZXJ9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9Lz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjsiXSwibmFtZXMiOlsiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsInNwYW4iLCJjbGFzc05hbWUiLCJzdHJvbmciLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiZGl2IiwibmFtZSIsIlNwZWFrZXJJbWFnZSIsImZpcnN0IiwibGFzdCIsImlkIiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJmYXZvcml0ZSIsImgzIiwicCIsImg1IiwiaDYiLCJTcGVha2VyIiwic3BlYWtlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ }),

/***/ "./src/components/Speakers.js":
/*!************************************!*\
  !*** ./src/components/Speakers.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _SpeakersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakersList */ \"./src/components/SpeakersList.js\");\n\n\n\nfunction Speakers() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fluid\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            data: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data\n        }, void 0, false, {\n            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speakers.js\",\n            lineNumber: 7,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\Speakers.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQXlDO0FBQ0M7QUFFMUMsU0FBU0UsV0FBVztJQUNoQixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0gscURBQVlBO1lBQUNELE1BQU1BLDhDQUFJQTs7Ozs7Ozs7Ozs7QUFHbEM7S0FOU0U7QUFRVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy5qcz8zZDE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi8uLi9TcGVha2VyRGF0YSc7XHJcbmltcG9ydCBTcGVha2Vyc0xpc3QgZnJvbSAnLi9TcGVha2Vyc0xpc3QnO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlcnMoKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICA8U3BlYWtlcnNMaXN0IGRhdGE9e2RhdGF9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7Il0sIm5hbWVzIjpbImRhdGEiLCJTcGVha2Vyc0xpc3QiLCJTcGVha2VycyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speakers.js\n"));

/***/ }),

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n\n\nfunction SpeakersList(param) {\n    let { data  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: data.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 8,\n                    columnNumber: 22\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 6,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQWdDO0FBRWhDLFNBQVNDLGFBQWEsS0FBTSxFQUFFO1FBQVIsRUFBQ0MsS0FBSSxFQUFDLEdBQU47SUFDbEIscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1pGLEtBQUtHLEdBQUcsQ0FBQyxTQUFVQyxPQUFPLEVBQUU7Z0JBQzNCLHFCQUFPLDhEQUFDTixnREFBT0E7b0JBQWtCTSxTQUFTQTttQkFBckJBLFFBQVFDLEVBQUU7Ozs7O1lBQ2pDOzs7Ozs7Ozs7OztBQUlaO0tBVlNOO0FBWVQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzPzJhNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHtkYXRhfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gPFNwZWFrZXIga2V5PXtzcGVha2VyLmlkfSBzcGVha2VyPXtzcGVha2VyfS8+XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzTGlzdDsiXSwibmFtZXMiOlsiU3BlYWtlciIsIlNwZWFrZXJzTGlzdCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJzcGVha2VyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});