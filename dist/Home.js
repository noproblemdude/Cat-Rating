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

/***/ "./src/scripts/Home.ts":
/*!*****************************!*\
  !*** ./src/scripts/Home.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating */ \"./src/scripts/rating.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\nvar rateButton = document.getElementById(\"ratebutton\");\nvar generateButton = document.getElementById(\"generatebutton\");\nvar seeRatingsButton = document.getElementById(\"seeRatingButton\");\nvar nickName = document.getElementById(\"Nickname\");\nvar rating = document.getElementById(\"Rating\");\nvar email = document.getElementById(\"Email\");\nvar message = document.getElementById(\"message\");\nvar picDiv = document.getElementById(\"catpic\");\nrateButton.addEventListener('click', rate);\ngenerateButton.addEventListener('click', generatePic);\nseeRatingsButton.addEventListener('click', seeRatings);\nvar ratingsList = new _rating__WEBPACK_IMPORTED_MODULE_0__.RatingsList();\nObject.assign(ratingsList, JSON.parse(sessionStorage.getItem(\"ratingsList\")));\nratingsList.copyRatings(ratingsList.ratings);\nsessionStorage.clear();\nfunction rate() {\n    var validInput = true;\n    message.textContent = \"\";\n    if (nickName.value == \"\") {\n        message.textContent = message.textContent + \"enter a nickname \";\n        validInput = false;\n    }\n    if (email.value == \"\") {\n        message.textContent = message.textContent + \"enter an email \";\n        validInput = false;\n    }\n    if (rating.value == \"\") {\n        message.textContent = message.textContent + \"enter a rating \";\n        validInput = false;\n    }\n    if (rating.valueAsNumber < 0 || rating.valueAsNumber > 10) {\n        message.textContent = message.textContent + \"the rating must be between 0 amd 10 \";\n        validInput = false;\n    }\n    if (validInput == true) {\n        message.textContent = message.textContent + \"The Cat has been rated! Rate another one!\";\n        rateNewCat();\n    }\n}\nfunction generatePic() {\n    return __awaiter(this, void 0, void 0, function () {\n        var catImg, imgElement, pictureResponse;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    catImg = document.getElementById(\"catimg\");\n                    if (catImg != null) {\n                        catImg.remove();\n                    }\n                    imgElement = document.createElement(\"img\");\n                    return [4 /*yield*/, fetch(\"https://api.thecatapi.com/v1/images/search?api_key=live_fY5kaLZT5mD5lSpviYYpTxXf4YyilhFVLnT9j75Rst466CsvWWmxUsUEfcuCtcDm\")];\n                case 1: return [4 /*yield*/, (_a.sent()).json()];\n                case 2:\n                    pictureResponse = _a.sent();\n                    imgElement.id = \"catimg\";\n                    imgElement.src = pictureResponse[0].url;\n                    imgElement.width = 700;\n                    picDiv.appendChild(imgElement);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nfunction seeRatings() {\n    sessionStorage.setItem(\"ratingsList\", JSON.stringify(ratingsList));\n    window.location.href = 'ratings.html';\n}\nfunction rateNewCat() {\n    console.log(ratingsList);\n    var newID = ratingsList.ratings.length;\n    var newRating = new _rating__WEBPACK_IMPORTED_MODULE_0__.Rating(newID, nickName.value, rating.valueAsNumber, email.value);\n    ratingsList.addTolist(newRating);\n    nickName.value = \"\";\n    rating.value = \"\";\n    email.value = \"\";\n    generatePic();\n}\ngeneratePic();\n\n\n//# sourceURL=webpack://frontend-app/./src/scripts/Home.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/Home.ts");
/******/ 	
/******/ })()
;