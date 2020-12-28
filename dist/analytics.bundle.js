/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**************************!*\
  !*** ./src/analytics.js ***!
  \**************************/
eval("function createAnalytics() {\n  let clicksCounter = 0;\n  let analyticsIsDestroyed = false;\n\n  function clickHandler() {\n    clicksCounter++;\n  }\n\n  document.addEventListener(\"click\", clickHandler);\n\n  return {\n    destroy: function () {\n      clicksCounter = 0;\n      analyticsIsDestroyed = true;\n    },\n\n    getClicks: function () {\n      if (analyticsIsDestroyed) {\n        return \"Analytics is destroyed!\";\n      } else {\n        return clicksCounter;\n      }\n    },\n  };\n}\n\nwindow.analytics = createAnalytics();\n\n\n//# sourceURL=webpack://webpack_learn_minin/./src/analytics.js?");
/******/ })()
;