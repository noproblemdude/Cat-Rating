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

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating */ \"./src/scripts/rating.ts\");\n\nvar icon = document.querySelector(\".fas\");\nvar loginButton = document.getElementById(\"loginButton\");\nvar password = document.getElementById(\"password\");\nvar username = document.getElementById(\"username\");\nvar errorMessage = document.getElementById(\"errorMessage\");\nicon.addEventListener('click', show);\nloginButton.addEventListener('click', login);\nvar ratingsList = new _rating__WEBPACK_IMPORTED_MODULE_0__.RatingsList();\nconsole.log(ratingsList.ratings[0].getid());\nsessionStorage.setItem(\"ratingsList\", JSON.stringify(ratingsList));\nfunction show() {\n    // ========== Checking type of password ===========\n    if (password.type === \"password\") {\n        password.type = \"text\";\n    }\n    else {\n        password.type = \"password\";\n    }\n}\nfunction login() {\n    if (username.value != \"\" && password.value != \"\") {\n        window.location.href = 'Home.html';\n    }\n    else {\n        errorMessage.textContent = \"Please enter a Username and Password\";\n    }\n}\n\n\n//# sourceURL=webpack://frontend-app/./src/scripts/index.ts?");

/***/ }),

/***/ "./src/scripts/rating.ts":
/*!*******************************!*\
  !*** ./src/scripts/rating.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Rating: () => (/* binding */ Rating),\n/* harmony export */   RatingsList: () => (/* binding */ RatingsList)\n/* harmony export */ });\nvar Rating = /** @class */ (function () {\n    function Rating(id, name, rating, email) {\n        this.id = id;\n        this.name = name;\n        this.rating = rating;\n        this.email = email;\n    }\n    Rating.prototype.getid = function () {\n        return this.id;\n    };\n    Rating.prototype.getName = function () {\n        return this.name;\n    };\n    Rating.prototype.getRating = function () {\n        return this.rating;\n    };\n    Rating.prototype.getEmail = function () {\n        return this.email;\n    };\n    return Rating;\n}());\n\nvar RatingsList = /** @class */ (function () {\n    function RatingsList() {\n        this.ratings = [];\n    }\n    RatingsList.prototype.copyRatings = function (newRatings) {\n        var rats;\n        rats = [];\n        for (var i = 0; i < newRatings.length; i++) {\n            var ratStr = JSON.stringify(newRatings[i]);\n            var newRat = new Rating(0, \"\", 0, \"\");\n            Object.assign(newRat, JSON.parse(ratStr));\n            rats.push(newRat);\n        }\n        this.ratings = rats;\n    };\n    RatingsList.prototype.addTolist = function (rating) {\n        this.ratings.push(rating);\n    };\n    RatingsList.prototype.removeFromList = function (id) {\n        var filteredArray = this.ratings.filter(function (it) { return it.getid() !== id; });\n        this.ratings = filteredArray;\n    };\n    return RatingsList;\n}());\n\n\n\n//# sourceURL=webpack://frontend-app/./src/scripts/rating.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.ts");
/******/ 	
/******/ })()
;