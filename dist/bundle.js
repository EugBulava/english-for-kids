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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/categories */ \"./src/modules/categories.js\");\n\n\n\nfunction CreateCategory(category) {\n  const CREATE_CATEGORY_A = document.createElement('a');\n  CREATE_CATEGORY_A.className = category.class;\n  CREATE_CATEGORY_A.href = category.href;\n  \n  const CREATE_CATEGORY_IMAGE = document.createElement('img');\n  CREATE_CATEGORY_IMAGE.src = category.urlImg;\n  \n  const CREATE_CATEGORY_NAME = document.createElement('span');\n  CREATE_CATEGORY_NAME.innerText = category.name;\n  CREATE_CATEGORY_NAME.className = 'name-of-category';\n\n  document.querySelector('.categories').append(CREATE_CATEGORY_A);\n  console.log(category.id);\n  document.getElementsByClassName('category')[category.id].append(CREATE_CATEGORY_NAME);\n  document.getElementsByClassName('category')[category.id].prepend(CREATE_CATEGORY_IMAGE);\n\n}\n\nCreateCategory(_modules_categories__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actionA);\nCreateCategory(_modules_categories__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actionB);\nCreateCategory(_modules_categories__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actionC);\nCreateCategory(_modules_categories__WEBPACK_IMPORTED_MODULE_0__[\"default\"].adjective);\nCreateCategory(_modules_categories__WEBPACK_IMPORTED_MODULE_0__[\"default\"].animalA);\nCreateCategory(_modules_categories__WEBPACK_IMPORTED_MODULE_0__[\"default\"].animalB);\nCreateCategory(_modules_categories__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clothes);\nCreateCategory(_modules_categories__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emotion);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/categories.js":
/*!***********************************!*\
  !*** ./src/modules/categories.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Categories {\n  constructor(options) {\n    this.name = options.name;\n    this.urlImg = options.urlImg;\n    this.id = options.id;\n    this.href = 'cards.html';\n    this.class = 'category';\n  }\n}\n\nconst categories = {\n  actionA: new Categories({\n    name: 'Action (set A)',\n    urlImg: 'img/dance.jpg',\n    id: 0\n  }),\n\n  actionB: new Categories({\n    name: 'Action (set B)',\n    urlImg: 'img/swim.jpg',\n    id: 1\n  }),\n\n  actionC: new Categories({\n    name: 'Action (set C)',\n    urlImg: 'img/drop.jpg',\n    id: 2\n  }),\n\n  adjective: new Categories({\n    name: 'Adjective',\n    urlImg: 'img/friendly.jpg',\n    id: 3\n  }),\n\n  animalA: new Categories({\n    name: 'Animal (set A)',\n    urlImg: 'img/cat.jpg',\n    id: 4\n  }),\n\n  animalB: new Categories({\n    name: 'Animal (set B)',\n    urlImg: 'img/bird.jpg',\n    id: 5\n  }),\n\n  clothes: new Categories({\n    name: 'Clothes',\n    urlImg: 'img/blouse.jpg',\n    id: 6\n  }),\n\n  emotion: new Categories({\n    name: 'Emotion',\n    urlImg: 'img/smile.jpg',\n    id: 7\n  }),\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (categories);\n\n\n//# sourceURL=webpack:///./src/modules/categories.js?");

/***/ })

/******/ });