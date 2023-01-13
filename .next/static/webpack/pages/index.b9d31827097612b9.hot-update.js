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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n\n\nconst IndexPage = ()=>{\n    const { id , bio , first , last , favorite , twitterHandle , company , sessions  } = _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"contain-fit\",\n                                src: \"/images/speaker-\".concat(id, \".jpg\"),\n                                width: \"300\",\n                                alt: \"\".concat(first, \" \").concat(last)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"speaker-info\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex justify-content-between mb-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-truncate w-200\",\n                                    children: [\n                                        first,\n                                        \" \",\n                                        last\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                bio,\n                                \" \",\n                                company,\n                                \" \",\n                                twitterHandle,\n                                \" \",\n                                favorite\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sessionBox card h-250\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"session w-100\",\n                    children: [\n                        sessions[0].title,\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: [\n                                \"Room: \",\n                                sessions[0].room.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                            lineNumber: 41,\n                            columnNumber: 41\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Coding\\\\React\\\\React-intro\\\\react-web-site\\\\pages\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUM7QUFFbkMsTUFBTUMsWUFBWSxJQUFNO0lBRUosTUFBTSxFQUNOQyxHQUFFLEVBQ0ZDLElBQUcsRUFDSEMsTUFBSyxFQUNMQyxLQUFJLEVBQ0pDLFNBQVEsRUFDUkMsY0FBYSxFQUNiQyxRQUFPLEVBQ1BDLFNBQVEsRUFBQyxHQUFHVCxpREFBTztJQUduQyxxQkFDSSw4REFBQ1U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUVYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDQztnQ0FDR0QsV0FBVTtnQ0FDVkUsS0FBSyxtQkFBc0IsT0FBSFgsSUFBRztnQ0FDM0JZLE9BQU07Z0NBQ05DLEtBQUssR0FBWVYsT0FBVEQsT0FBTSxLQUFRLE9BQUxDOzs7Ozs7Ozs7OztzQ0FHekIsOERBQUNLOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ0s7b0NBQUdMLFdBQVU7O3dDQUNUUDt3Q0FBTTt3Q0FBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUlyQiw4REFBQ1k7O2dDQUFHZDtnQ0FBSTtnQ0FBRUs7Z0NBQVE7Z0NBQUVEO2dDQUFjO2dDQUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUc1Qyw4REFBQ0k7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNPO29CQUFLUCxXQUFVOzt3QkFDWEYsUUFBUSxDQUFDLEVBQUUsQ0FBQ1UsS0FBSzt3QkFBQztzQ0FBQyw4REFBQ0M7O2dDQUFPO2dDQUFPWCxRQUFRLENBQUMsRUFBRSxDQUFDWSxJQUFJLENBQUNDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1RTtLQTNDTXJCO0FBNkNOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vU3BlYWtlckRhdGFcIlxyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYmlvLCBcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHR3aXR0ZXJIYW5kbGUsIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbnksIFxyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25zfSA9IGRhdGFbMF1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntiaW99IHtjb21wYW55fSB7dHdpdHRlckhhbmRsZX0ge2Zhdm9yaXRlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbnNbMF0udGl0bGV9IDxzdHJvbmc+Um9vbToge3Nlc3Npb25zWzBdLnJvb20ubmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7Il0sIm5hbWVzIjpbImRhdGEiLCJJbmRleFBhZ2UiLCJpZCIsImJpbyIsImZpcnN0IiwibGFzdCIsImZhdm9yaXRlIiwidHdpdHRlckhhbmRsZSIsImNvbXBhbnkiLCJzZXNzaW9ucyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiaDMiLCJwIiwic3BhbiIsInRpdGxlIiwic3Ryb25nIiwicm9vbSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});