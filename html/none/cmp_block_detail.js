/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var cmp_block_detail;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/block-detail.js"
/*!********************************!*\
  !*** ./src/js/block-detail.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_block_detail_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/_block-detail.scss */ \"./src/sass/_block-detail.scss\");\n/* harmony import */ var _sass_component_related_blogs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/_component-related-blogs.scss */ \"./src/sass/_component-related-blogs.scss\");\n\n\nfunction initDiscoverSlider() {\n  var sliderEl = document.querySelector(\".discoverBlogsSlider\");\n  if (sliderEl && !sliderEl.swiper) {\n    new Swiper(\".discoverBlogsSlider\", {\n      effect: \"slide\",\n      loop: false,\n      speed: 1000,\n      allowTouchMove: true,\n      watchOverflow: true,\n      initialSlide: 0,\n      navigation: {\n        nextEl: '.discover-blogs .nav-next',\n        prevEl: '.discover-blogs .nav-prev'\n      },\n      scrollbar: {\n        el: '.discoverBlogsSlider .swiper-scrollbar',\n        hide: false,\n        draggable: true\n      },\n      mousewheel: {\n        sensitivity: 1,\n        forceToAxis: true,\n        releaseOnEdges: true\n      },\n      breakpoints: {\n        320: {\n          slidesPerView: 1,\n          spaceBetween: 12\n        },\n        1024: {\n          slidesPerView: 2,\n          spaceBetween: 20,\n          allowTouchMove: false\n        }\n      }\n    });\n  }\n}\nfunction initTocSpy() {\n  var sections = document.querySelectorAll(\".content-section\");\n  var tocItems = document.querySelectorAll(\".toc-item\");\n  if (sections.length === 0 || tocItems.length === 0) return;\n\n  // Smooth scroll\n  tocItems.forEach(function (item) {\n    var link = item.querySelector(\"a\");\n    if (link) {\n      link.addEventListener(\"click\", function (e) {\n        e.preventDefault();\n        var targetId = link.getAttribute(\"href\");\n        var targetSection = document.querySelector(targetId);\n        if (targetSection) {\n          targetSection.scrollIntoView({\n            behavior: \"smooth\"\n          });\n        }\n      });\n    }\n  });\n\n  // IntersectionObserver for active class\n  var observerOptions = {\n    root: null,\n    rootMargin: \"-20% 0px -60% 0px\",\n    threshold: 0\n  };\n  var observer = new IntersectionObserver(function (entries) {\n    entries.forEach(function (entry) {\n      if (entry.isIntersecting) {\n        var id = entry.target.getAttribute(\"id\");\n        tocItems.forEach(function (item) {\n          var link = item.querySelector(\"a\");\n          if (link && link.getAttribute(\"href\") === \"#\".concat(id)) {\n            item.classList.add(\"active\");\n          } else {\n            item.classList.remove(\"active\");\n          }\n        });\n      }\n    });\n  }, observerOptions);\n  sections.forEach(function (section) {\n    return observer.observe(section);\n  });\n}\n\n// Run immediately\ninitDiscoverSlider();\ninitTocSpy();\n\n// Fallback\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  initDiscoverSlider();\n  initTocSpy();\n});\n\n//# sourceURL=webpack://modules/./src/js/block-detail.js?\n}");

/***/ },

/***/ "./src/sass/_block-detail.scss"
/*!*************************************!*\
  !*** ./src/sass/_block-detail.scss ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://modules/./src/sass/_block-detail.scss?\n}");

/***/ },

/***/ "./src/sass/_component-related-blogs.scss"
/*!************************************************!*\
  !*** ./src/sass/_component-related-blogs.scss ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://modules/./src/sass/_component-related-blogs.scss?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/block-detail.js");
/******/ 	(cmp_block_detail = typeof cmp_block_detail === "undefined" ? {} : cmp_block_detail).modules = __webpack_exports__;
/******/ 	
/******/ })()
;