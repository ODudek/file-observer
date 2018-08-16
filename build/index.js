/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const isArray = (element) => Array.isArray(element);\r\nconst log = console.log;\r\nconst currentTime = () => {\r\n    const date = new Date();\r\n    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();\r\n    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();\r\n    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();\r\n    return `${hours}:${minutes}:${seconds}`;\r\n};\r\n\r\nmodule.exports = {\r\n    isArray,\r\n    log,\r\n    currentTime\r\n}\r\n\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chalk */ \"chalk\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helpers__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _observer_conf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observer.conf */ \"./src/observer.conf.js\");\n/* harmony import */ var _observer_conf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_observer_conf__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\nconst ONE_SECOND = 1000;\r\nclass Observer {\r\n\tconstructor(config) {\r\n        console.clear();\r\n        this.config = config;\r\n        this.filesPath = this.config.files;\r\n        this.files = [];\r\n        this.createFileArray();\r\n        this.setup();\r\n    }\r\n\r\n    initConfig() {\r\n        this.clearConsole();\r\n\r\n    }\r\n\r\n    clearConsole () {\r\n        this.config.clearAfterChange && console.clear();\r\n    }\r\n\r\n    errorHandler(message) {\r\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"log\"])(chalk__WEBPACK_IMPORTED_MODULE_1___default.a.red(message));\r\n        process.abort();\r\n    }\r\n\r\n    createFileArray() {\r\n        if (Object(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"isArray\"])(this.filesPath)) {\r\n            this.filesPath.map((filePath) => {\r\n                this.files.push({ path: filePath, size: fs__WEBPACK_IMPORTED_MODULE_0___default.a.statSync(filePath).size });\r\n            });   \r\n        } else {\r\n\r\n        }\r\n    }\r\n    \r\n    setup() {\r\n        this.files.map(async (file) => {\r\n            const watchFile = await fs__WEBPACK_IMPORTED_MODULE_0___default.a.watchFile(path__WEBPACK_IMPORTED_MODULE_2___default.a.normalize(file.path), { interval: ONE_SECOND }, (changedFile) => {\r\n                if (changedFile.size !== file.size) {\r\n                    this.watchHandler();\r\n                    // watchFile.stop();\r\n                    // console.log('Stopped!')\r\n                }\r\n            });\r\n        });\r\n    }\r\n\r\n    stopWatchFile(watchFile) {\r\n        watchFile.stop();\r\n        \r\n    }\r\n\r\n    watchHandler() {\r\n        this.clearConsole();\r\n        console.log('File Changed ...');\r\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"log\"])(chalk__WEBPACK_IMPORTED_MODULE_1___default.a.green('File content at: ' + Object(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"currentTime\"])()))\r\n    }\r\n}\r\n\r\nnew Observer(_observer_conf__WEBPACK_IMPORTED_MODULE_4___default.a)\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/observer.conf.js":
/*!******************************!*\
  !*** ./src/observer.conf.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n    files: [\r\n        'demo/test.js',\r\n        'demo/test2.js'\r\n    ],\r\n    command: '',\r\n    clearAfterChange: true\r\n}\n\n//# sourceURL=webpack:///./src/observer.conf.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n\n//# sourceURL=webpack:///external_%22chalk%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });