/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var cmp_countdown;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/component-countdown.js"
/*!***************************************!*\
  !*** ./src/js/component-countdown.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initCountdown: () => (/* binding */ initCountdown)\n/* harmony export */ });\n/* harmony import */ var _sass_component_countdown_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/_component-countdown.scss */ \"./src/sass/_component-countdown.scss\");\n\nfunction initCountdown(elementOrSelector, targetDateString) {\n  var container = typeof elementOrSelector === \"string\" ? document.querySelector(elementOrSelector) : elementOrSelector;\n  if (!container) return;\n  var daysEl = container.querySelector(\"#days\");\n  var hoursEl = container.querySelector(\"#hours\");\n  var minutesEl = container.querySelector(\"#minutes\");\n  var secondsEl = container.querySelector(\"#seconds\");\n  var targetDate = new Date(targetDateString).getTime();\n  function update() {\n    var now = new Date().getTime();\n    var diff = targetDate - now;\n    if (diff <= 0) {\n      if (daysEl) daysEl.textContent = \"00\";\n      if (hoursEl) hoursEl.textContent = \"00\";\n      if (minutesEl) minutesEl.textContent = \"00\";\n      if (secondsEl) secondsEl.textContent = \"00\";\n      clearInterval(timer);\n      return;\n    }\n    var days = Math.floor(diff / (1000 * 60 * 60 * 24));\n    var hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n    var minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));\n    var seconds = Math.floor(diff % (1000 * 60) / 1000);\n    if (daysEl) daysEl.textContent = days.toString().padStart(2, \"0\");\n    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, \"0\");\n    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, \"0\");\n    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, \"0\");\n  }\n  var timer = setInterval(update, 1000);\n  update();\n}\n\n// Auto-init on page load if element has a data-end-date attribute\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var countdowns = document.querySelectorAll(\".countdown[data-end-date]\");\n  countdowns.forEach(function (el) {\n    var endDate = el.getAttribute(\"data-end-date\");\n    if (endDate) {\n      initCountdown(el, endDate);\n    }\n  });\n});\n\n//# sourceURL=webpack://modules/./src/js/component-countdown.js?\n}");

/***/ },

/***/ "./src/sass/_component-countdown.scss"
/*!********************************************!*\
  !*** ./src/sass/_component-countdown.scss ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://modules/./src/sass/_component-countdown.scss?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/component-countdown.js");
/******/ 	(cmp_countdown = typeof cmp_countdown === "undefined" ? {} : cmp_countdown).modules = __webpack_exports__;
/******/ 	
/******/ })()
;