/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/***/ (() => {

eval("var icon = document.querySelector(\".fas\");\nvar loginButton = document.getElementById(\"loginButton\");\nvar password = document.getElementById(\"password\");\nvar username = document.getElementById(\"username\");\nvar errorMessage = document.getElementById(\"errorMessage\");\nicon.addEventListener('click', show);\nloginButton.addEventListener('click', login);\nfunction show() {\n    // ========== Checking type of password ===========\n    if (password.type === \"password\") {\n        password.type = \"text\";\n    }\n    else {\n        password.type = \"password\";\n    }\n}\nfunction login() {\n    if (username.value != \"\" && password.value != \"\") {\n        window.location.href = 'Home.html';\n    }\n    else {\n        errorMessage.textContent = \"Please enter a Username and Password\";\n    }\n}\n\n\n//# sourceURL=webpack://frontend-app/./src/scripts/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/index.ts"]();
/******/ 	
/******/ })()
;