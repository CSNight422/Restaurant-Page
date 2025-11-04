/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAbout)\n/* harmony export */ });\n/* harmony import */ var _cat_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat.jpg */ \"./src/cat.jpg\");\n\n\nclass createAbout{\n    constructor(contentRef){\n        this.contentRef = contentRef;\n    }\n    createHeadline(){\n        console.log('Random Headline');\n    }\n\n    createPage(){\n\n        const bodyRef = document.querySelector('#content');\n        let h1Ref = document.createElement('h1');\n        h1Ref.textContent = 'About Headline';\n        bodyRef.appendChild(h1Ref);\n        let pRef = document.createElement('p');\n        pRef.textContent = 'Text goes here to say what this is about';\n        bodyRef.appendChild(pRef);\n        let imgRef = document.createElement('img');\n        imgRef.src = _cat_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        bodyRef.appendChild(imgRef);\n\n\n    }\n    deletePage(){\n        bodyRef.removeChild(h1Ref);\n        bodyRef.removeChild(imgRef);\n    }\n}\n\n//# sourceURL=webpack://restaurantpage/./src/about.js?\n}");

/***/ }),

/***/ "./src/cat.jpg":
/*!*********************!*\
  !*** ./src/cat.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"56d65f0adc0351bd06fc.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/cat.jpg?\n}");

/***/ }),

/***/ "./src/dog.jpeg":
/*!**********************!*\
  !*** ./src/dog.jpeg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"7fbde552008ebe2abed4.jpeg\";\n\n//# sourceURL=webpack://restaurantpage/./src/dog.jpeg?\n}");

/***/ }),

/***/ "./src/hinto2.jpg":
/*!************************!*\
  !*** ./src/hinto2.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"341f79357c27d8cb0280.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/hinto2.jpg?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _hinto2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hinto2.jpg */ \"./src/hinto2.jpg\");\n\n\nclass createHome{\n    constructor(contentRef){\n        this.contentRef = contentRef;\n    }\n    createHeadline(){\n        console.log('Random Headline');\n    }\n\n    createPage(){\n\n        const bodyRef = document.querySelector('#content');\n        let h1Ref = document.createElement('h1');\n        h1Ref.textContent = 'Home Headline';\n        bodyRef.appendChild(h1Ref);\n        let pRef = document.createElement('p');\n        pRef.textContent = 'Text goes here to say what this is about';\n        bodyRef.appendChild(pRef);\n        let imgRef = document.createElement('img');\n        imgRef.src = _hinto2_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        bodyRef.appendChild(imgRef);\n\n\n    }\n    deletePage(){\n        bodyRef.removeChild(h1Ref);\n        bodyRef.removeChild(imgRef);\n    }\n}\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\nconsole.log('Hello')\n;\n\n\n\nconst bodyRef= document.querySelector('body');\nconst aboutButton = document.createElement('button');\nconst menuButton = document.createElement('button');\nconst homeButton = document.createElement('button');\n\nhomeButton.textContent = 'Home';\naboutButton.textContent = 'About';\nmenuButton.textContent = 'Menu'\nbodyRef.appendChild(menuButton);\nbodyRef.appendChild(aboutButton);\nbodyRef.appendChild(homeButton);\nconst contentRef = document.querySelector('#content');\n\nlet about = new _about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('this');\nlet menu = new _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('this');\nlet home = new _home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('This');\n\nhomeButton.addEventListener('click', function(){\n  contentRef.innerHTML = '';\n  home.createPage();\n})\nmenuButton.addEventListener('click',function(){\n  contentRef.innerHTML = ''\n  menu.createPage();\n\n})\naboutButton.addEventListener('click', function(){\n  contentRef.innerHTML = '';\n  about.createHeadline();\n  about.createPage();\n})\n// function openTab(tabName) {\n//   var i;\n//   var x = document.getElementsByClassName(\"tab\");\n//   for (i = 0; i < x.length; i++) {\n//     x[i].style.display = \"none\";\n//   }\n//   document.getElementById(tabName).style.display = \"block\";\n// }\n\n//all logic for button and tabing should be here not in other mod\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _dog_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dog.jpeg */ \"./src/dog.jpeg\");\n\n\nclass createMenu{\n    constructor(contentRef){\n        this.contentRef = contentRef;\n    }\n    createHeadline(){\n        console.log('Random Headline');\n    }\n\n    createPage(){\n\n        const bodyRef = document.querySelector('#content');\n        let h1Ref = document.createElement('h1');\n        h1Ref.textContent = 'Menu Headline';\n        bodyRef.appendChild(h1Ref);\n        let pRef = document.createElement('p');\n        pRef.textContent = 'Text goes here to say what this is about';\n        bodyRef.appendChild(pRef);\n        let imgRef = document.createElement('img');\n        imgRef.src = _dog_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n        bodyRef.appendChild(imgRef);\n\n\n    }\n    deletePage(){\n        bodyRef.removeChild(h1Ref);\n        bodyRef.removeChild(imgRef);\n    }\n}\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?\n}");

/***/ })

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;