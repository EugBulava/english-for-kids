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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/categories */ \"./src/modules/categories.js\");\n/* harmony import */ var _modules_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger-menu */ \"./src/modules/burger-menu.js\");\n/* harmony import */ var _modules_switcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/switcher */ \"./src/modules/switcher.js\");\n/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ \"./src/modules/cards.js\");\n/* harmony import */ var _modules_goToPageCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/goToPageCards */ \"./src/modules/goToPageCards.js\");\n\n\n\n\n\n\n\nfunction CreateCategory(category) {\n  const CREATE_CATEGORY_A = document.createElement('a');\n  CREATE_CATEGORY_A.className = category.class;\n  CREATE_CATEGORY_A.href = category.href;\n\n  const CREATE_CATEGORY_IMAGE = document.createElement('img');\n  CREATE_CATEGORY_IMAGE.src = category.urlImg;\n\n  const CREATE_CATEGORY_NAME = document.createElement('span');\n  CREATE_CATEGORY_NAME.innerText = category.title;\n  CREATE_CATEGORY_NAME.className = 'name-of-category';\n\n  document.querySelector('.categories').append(CREATE_CATEGORY_A);\n  document.getElementsByClassName('category')[category.id].append(CREATE_CATEGORY_NAME);\n  document.getElementsByClassName('category')[category.id].prepend(CREATE_CATEGORY_IMAGE);\n}\n\nfunction initCategories() {\n  const arrNamesOfCategories = Object.keys(_modules_categories__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  for (let i = 0; i < arrNamesOfCategories.length; i += 1) {\n    CreateCategory(_modules_categories__WEBPACK_IMPORTED_MODULE_0__[\"default\"][arrNamesOfCategories[i]]);\n  }\n}\n\nfunction initCards(card) {\n  const CARDS_BLOCK = document.getElementsByClassName('cards-block');\n  for (let i = 0; i < _modules_cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length; i += 1) {\n    for (let j = 0; j < _modules_cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"][i].length; j += 1) {\n      const CREATE_CARD_DIV = document.createElement('div');\n      CREATE_CARD_DIV.className = 'card';\n\n      const CREATE_CARD_IMAGE = document.createElement('img');\n      CREATE_CARD_IMAGE.src = card[i][j].image;\n\n      const CREATE_CARD_NAME = document.createElement('span');\n      CREATE_CARD_NAME.innerText = card[i][j].word;\n      CREATE_CARD_NAME.className = 'name-of-card';\n\n      CARDS_BLOCK[i].append(CREATE_CARD_DIV);\n      CARDS_BLOCK[i].getElementsByClassName('card')[j].append(CREATE_CARD_NAME);\n      CARDS_BLOCK[i].getElementsByClassName('card')[j].append(CREATE_CARD_IMAGE);\n    }\n  }\n}\n\nconst SWITCHER = document.querySelector('switcher');\nconst SWITCHER_TEXT = document.querySelector('switcher span');\nconst BURGER_MENU = document.querySelector('.burger-menu');\n\nif (window.location.pathname === '/src/index.html') {\n  initCategories();\n  document.querySelector('.link').classList.add('active-link-menu');\n  if (sessionStorage.getItem('mode') === 'true') {\n    SWITCHER_TEXT.classList.add('active-switch-text');\n    SWITCHER.classList.add('play-mode-color');\n    BURGER_MENU.classList.add('play-mode-color');\n    document.querySelectorAll('.category').forEach((a) => {\n      a.classList.add('play-mode-color');\n    });\n  }\n}\n\nif (window.location.pathname === '/src/cards.html') {\n  initCards(_modules_cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  if (sessionStorage.getItem('mode') === 'true') {\n    SWITCHER_TEXT.classList.add('active-switch-text');\n    SWITCHER.classList.add('play-mode-color');\n    BURGER_MENU.classList.add('play-mode-color');\n    document.querySelectorAll('.category').forEach((a) => {\n      a.classList.add('play-mode-color');\n    });\n    document.querySelectorAll('.card').forEach((a) => {\n      a.classList.add('play-mode-color');\n    });\n  }\n\n  document.querySelectorAll('.cards-block').forEach((block) => {\n    block.classList.add('hidden');\n  });\n\n  document.querySelector(`.${localStorage.getItem('page')}`).classList.remove('hidden');\n  document.querySelectorAll('.nav-li a')[localStorage.getItem('pageNumber')].classList.add('active-link-menu');\n}\n\nconst ALL_LINKS = document.querySelectorAll('.link');\nif (window.location.pathname === '/src/stats.html') {\n  ALL_LINKS[ALL_LINKS.length - 1].classList.add('active-link-menu');\n  if (sessionStorage.getItem('mode') === 'true') {\n    SWITCHER_TEXT.classList.add('active-switch-text');\n    SWITCHER.classList.add('play-mode-color');\n    BURGER_MENU.classList.add('play-mode-color');\n    document.querySelectorAll('.category').forEach((a) => {\n      a.classList.add('play-mode-color');\n    });\n  }\n}\n\ndocument.body.addEventListener('click', (event) => {\n  Object(_modules_burger_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event.target);\n  Object(_modules_switcher__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event.target);\n  Object(_modules_goToPageCards__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(event.target);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/burger-menu.js":
/*!************************************!*\
  !*** ./src/modules/burger-menu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst BURGER_MENU = document.querySelector('.burger-menu');\nconst BURGER_BUTTON = document.querySelector('.burger-button');\nconst BURGER_BUTTON_SPAN = document.querySelector('.burger-button span');\nconst NAV_MENU = document.querySelector('.nav');\nlet menuIsActive = false;\n\nconst burgerFunction = function makeBurgerMenu(targetEl) {\n  if (targetEl === BURGER_BUTTON || targetEl === BURGER_BUTTON_SPAN) {\n    if (menuIsActive === false) {\n      BURGER_MENU.classList.add('active-burger-menu');\n      BURGER_BUTTON.classList.add('active-burger-button');\n      menuIsActive = true;\n    } else {\n      BURGER_MENU.classList.remove('active-burger-menu');\n      BURGER_BUTTON.classList.remove('active-burger-button');\n      menuIsActive = false;\n    }\n  } else if (targetEl !== BURGER_MENU && targetEl !== NAV_MENU) {\n    if (menuIsActive === true) {\n      BURGER_MENU.classList.remove('active-burger-menu');\n      BURGER_BUTTON.classList.remove('active-burger-button');\n      menuIsActive = false;\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (burgerFunction);\n\n\n//# sourceURL=webpack:///./src/modules/burger-menu.js?");

/***/ }),

/***/ "./src/modules/cards.js":
/*!******************************!*\
  !*** ./src/modules/cards.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst cards = [\n  [\n    {\n      word: 'cry',\n      translation: 'плакать',\n      image: 'img/cry.jpg',\n      audioSrc: 'audio/cry.mp3',\n    },\n    {\n      word: 'dance',\n      translation: 'танцевать',\n      image: 'img/dance.jpg',\n      audioSrc: 'audio/dance.mp3',\n    },\n    {\n      word: 'dive',\n      translation: 'нырять',\n      image: 'img/dive.jpg',\n      audioSrc: 'audio/dive.mp3',\n    },\n    {\n      word: 'draw',\n      translation: 'рисовать',\n      image: 'img/draw.jpg',\n      audioSrc: 'audio/draw.mp3',\n    },\n    {\n      word: 'fish',\n      translation: 'ловить рыбу',\n      image: 'img/fish.jpg',\n      audioSrc: 'audio/fish.mp3',\n    },\n    {\n      word: 'fly',\n      translation: 'летать',\n      image: 'img/fly.jpg',\n      audioSrc: 'audio/fly.mp3',\n    },\n    {\n      word: 'hug',\n      translation: 'обнимать',\n      image: 'img/hug.jpg',\n      audioSrc: 'audio/hug.mp3',\n    },\n    {\n      word: 'jump',\n      translation: 'прыгать',\n      image: 'img/jump.jpg',\n      audioSrc: 'audio/jump.mp3',\n    },\n  ],\n  [\n    {\n      word: 'open',\n      translation: 'открывать',\n      image: 'img/open.jpg',\n      audioSrc: 'audio/open.mp3',\n    },\n    {\n      word: 'play',\n      translation: 'играть',\n      image: 'img/play.jpg',\n      audioSrc: 'audio/play.mp3',\n    },\n    {\n      word: 'point',\n      translation: 'указывать',\n      image: 'img/point.jpg',\n      audioSrc: 'audio/point.mp3',\n    },\n    {\n      word: 'ride',\n      translation: 'ездить',\n      image: 'img/ride.jpg',\n      audioSrc: 'audio/ride.mp3',\n\n    },\n    {\n      word: 'run',\n      translation: 'бегать',\n      image: 'img/run.jpg',\n      audioSrc: 'audio/run.mp3',\n    },\n    {\n      word: 'sing',\n      translation: 'петь',\n      image: 'img/sing.jpg',\n      audioSrc: 'audio/sing.mp3',\n    },\n    {\n      word: 'skip',\n      translation: 'пропускать, прыгать',\n      image: 'img/skip.jpg',\n      audioSrc: 'audio/skip.mp3',\n    },\n    {\n      word: 'swim',\n      translation: 'плавать',\n      image: 'img/swim.jpg',\n      audioSrc: 'audio/swim.mp3',\n    },\n  ],\n  [\n    {\n      word: 'argue',\n      translation: 'спорить',\n      image: 'img/argue.jpg',\n      audioSrc: 'audio/argue.mp3',\n    },\n    {\n      word: 'build',\n      translation: 'строить',\n      image: 'img/build.jpg',\n      audioSrc: 'audio/build.mp3',\n    },\n    {\n      word: 'carry',\n      translation: 'нести',\n      image: 'img/carry.jpg',\n      audioSrc: 'audio/carry.mp3',\n    },\n    {\n      word: 'catch',\n      translation: 'ловить',\n      image: 'img/catch.jpg',\n      audioSrc: 'audio/catch.mp3',\n    },\n    {\n      word: 'drive',\n      translation: 'водить машину',\n      image: 'img/drive.jpg',\n      audioSrc: 'audio/drive.mp3',\n    },\n    {\n      word: 'drop',\n      translation: 'падать',\n      image: 'img/drop.jpg',\n      audioSrc: 'audio/drop.mp3',\n    },\n    {\n      word: 'pull',\n      translation: 'тянуть',\n      image: 'img/pull.jpg',\n      audioSrc: 'audio/pull.mp3',\n    },\n    {\n      word: 'push',\n      translation: 'толкать',\n      image: 'img/push.jpg',\n      audioSrc: 'audio/push.mp3',\n    },\n  ],\n  [\n    {\n      word: 'big',\n      translation: 'большой',\n      image: 'img/big.jpg',\n      audioSrc: 'audio/big.mp3',\n    },\n    {\n      word: 'small',\n      translation: 'маленький',\n      image: 'img/small.jpg',\n      audioSrc: 'audio/small.mp3',\n    },\n    {\n      word: 'fast',\n      translation: 'быстрый',\n      image: 'img/fast.jpg',\n      audioSrc: 'audio/fast.mp3',\n    },\n    {\n      word: 'slow',\n      translation: 'медленный',\n      image: 'img/slow.jpg',\n      audioSrc: 'audio/slow.mp3',\n    },\n    {\n      word: 'friendly',\n      translation: 'дружелюбный',\n      image: 'img/friendly.jpg',\n      audioSrc: 'audio/friendly.mp3',\n    },\n    {\n      word: 'unfriendly',\n      translation: 'недружелюбный',\n      image: 'img/unfriendly.jpg',\n      audioSrc: 'audio/unfriendly.mp3',\n    },\n    {\n      word: 'young',\n      translation: 'молодой',\n      image: 'img/young.jpg',\n      audioSrc: 'audio/young.mp3',\n    },\n    {\n      word: 'old',\n      translation: 'старый',\n      image: 'img/old.jpg',\n      audioSrc: 'audio/old.mp3',\n    },\n  ],\n  [\n    {\n      word: 'cat',\n      translation: 'кот',\n      image: 'img/cat.jpg',\n      audioSrc: 'audio/cat.mp3',\n    },\n    {\n      word: 'chick',\n      translation: 'цыплёнок',\n      image: 'img/chick.jpg',\n      audioSrc: 'audio/chick.mp3',\n    },\n    {\n      word: 'chicken',\n      translation: 'курица',\n      image: 'img/chicken.jpg',\n      audioSrc: 'audio/chicken.mp3',\n    },\n    {\n      word: 'dog',\n      translation: 'собака',\n      image: 'img/dog.jpg',\n      audioSrc: 'audio/dog.mp3',\n    },\n    {\n      word: 'horse',\n      translation: 'лошадь',\n      image: 'img/horse.jpg',\n      audioSrc: 'audio/horse.mp3',\n    },\n    {\n      word: 'pig',\n      translation: 'свинья',\n      image: 'img/pig.jpg',\n      audioSrc: 'audio/pig.mp3',\n    },\n    {\n      word: 'rabbit',\n      translation: 'кролик',\n      image: 'img/rabbit.jpg',\n      audioSrc: 'audio/rabbit.mp3',\n    },\n    {\n      word: 'sheep',\n      translation: 'овца',\n      image: 'img/sheep.jpg',\n      audioSrc: 'audio/sheep.mp3',\n    },\n  ],\n  [\n    {\n      word: 'bird',\n      translation: 'птица',\n      image: 'img/bird.jpg',\n      audioSrc: 'audio/bird.mp3',\n    },\n    {\n      word: 'fish',\n      translation: 'рыба',\n      image: 'img/fish1.jpg',\n      audioSrc: 'audio/fish.mp3',\n    },\n    {\n      word: 'frog',\n      translation: 'жаба',\n      image: 'img/frog.jpg',\n      audioSrc: 'audio/frog.mp3',\n    },\n    {\n      word: 'giraffe',\n      translation: 'жирафа',\n      image: 'img/giraffe.jpg',\n      audioSrc: 'audio/giraffe.mp3',\n    },\n    {\n      word: 'lion',\n      translation: 'лев',\n      image: 'img/lion.jpg',\n      audioSrc: 'audio/lion.mp3',\n    },\n    {\n      word: 'mouse',\n      translation: 'мышь',\n      image: 'img/mouse.jpg',\n      audioSrc: 'audio/mouse.mp3',\n    },\n    {\n      word: 'turtle',\n      translation: 'черепаха',\n      image: 'img/turtle.jpg',\n      audioSrc: 'audio/turtle.mp3',\n    },\n    {\n      word: 'dolphin',\n      translation: 'дельфин',\n      image: 'img/dolphin.jpg',\n      audioSrc: 'audio/dolphin.mp3',\n    },\n  ],\n  [\n    {\n      word: 'skirt',\n      translation: 'юбка',\n      image: 'img/skirt.jpg',\n      audioSrc: 'audio/skirt.mp3',\n    },\n    {\n      word: 'pants',\n      translation: 'брюки',\n      image: 'img/pants.jpg',\n      audioSrc: 'audio/pants.mp3',\n    },\n    {\n      word: 'blouse',\n      translation: 'блузка',\n      image: 'img/blouse.jpg',\n      audioSrc: 'audio/blouse.mp3',\n    },\n    {\n      word: 'dress',\n      translation: 'платье',\n      image: 'img/dress.jpg',\n      audioSrc: 'audio/dress.mp3',\n    },\n    {\n      word: 'boot',\n      translation: 'ботинок',\n      image: 'img/boot.jpg',\n      audioSrc: 'audio/boot.mp3',\n    },\n    {\n      word: 'shirt',\n      translation: 'рубашка',\n      image: 'img/shirt.jpg',\n      audioSrc: 'audio/shirt.mp3',\n    },\n    {\n      word: 'coat',\n      translation: 'пальто',\n      image: 'img/coat.jpg',\n      audioSrc: 'audio/coat.mp3',\n    },\n    {\n      word: 'shoe',\n      translation: 'туфли',\n      image: 'img/shoe.jpg',\n      audioSrc: 'audio/shoe.mp3',\n    },\n  ],\n  [\n    {\n      word: 'sad',\n      translation: 'грустный',\n      image: 'img/sad.jpg',\n      audioSrc: 'audio/sad.mp3',\n    },\n    {\n      word: 'angry',\n      translation: 'сердитый',\n      image: 'img/angry.jpg',\n      audioSrc: 'audio/angry.mp3',\n    },\n    {\n      word: 'happy',\n      translation: 'счастливый',\n      image: 'img/happy.jpg',\n      audioSrc: 'audio/happy.mp3',\n    },\n    {\n      word: 'tired',\n      translation: 'уставший',\n      image: 'img/tired.jpg',\n      audioSrc: 'audio/tired.mp3',\n    },\n    {\n      word: 'surprised',\n      translation: 'удивлённый',\n      image: 'img/surprised.jpg',\n      audioSrc: 'audio/surprised.mp3',\n    },\n    {\n      word: 'scared',\n      translation: 'испуганный',\n      image: 'img/scared.jpg',\n      audioSrc: 'audio/scared.mp3',\n    },\n    {\n      word: 'smile',\n      translation: 'улыбка',\n      image: 'img/smile.jpg',\n      audioSrc: 'audio/smile.mp3',\n    },\n    {\n      word: 'laugh',\n      translation: 'смех',\n      image: 'img/laugh.jpg',\n      audioSrc: 'audio/laugh.mp3',\n    },\n  ],\n];\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cards);\n\n\n//# sourceURL=webpack:///./src/modules/cards.js?");

/***/ }),

/***/ "./src/modules/categories.js":
/*!***********************************!*\
  !*** ./src/modules/categories.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Categories {\n  constructor(options) {\n    this.title = options.title;\n    this.urlImg = options.urlImg;\n    this.id = options.id;\n    this.name = options.name;\n    this.href = 'cards.html';\n    this.class = 'category';\n  }\n}\n\nconst categories = {\n  actionA: new Categories({\n    name: 'actionA',\n    title: 'Action (set A)',\n    urlImg: 'img/dance.jpg',\n    id: 0,\n  }),\n\n  actionB: new Categories({\n    name: 'actionB',\n    title: 'Action (set B)',\n    urlImg: 'img/swim.jpg',\n    id: 1,\n  }),\n\n  actionC: new Categories({\n    name: 'actionC',\n    title: 'Action (set C)',\n    urlImg: 'img/drop.jpg',\n    id: 2,\n  }),\n\n  adjective: new Categories({\n    name: 'adjective',\n    title: 'Adjective',\n    urlImg: 'img/friendly.jpg',\n    id: 3,\n  }),\n\n  animalA: new Categories({\n    name: 'animalA',\n    title: 'Animal (set A)',\n    urlImg: 'img/cat.jpg',\n    id: 4,\n  }),\n\n  animalB: new Categories({\n    name: 'animalB',\n    title: 'Animal (set B)',\n    urlImg: 'img/bird.jpg',\n    id: 5,\n  }),\n\n  clothes: new Categories({\n    name: 'clothes',\n    title: 'Clothes',\n    urlImg: 'img/blouse.jpg',\n    id: 6,\n  }),\n\n  emotion: new Categories({\n    name: 'emotion',\n    title: 'Emotion',\n    urlImg: 'img/smile.jpg',\n    id: 7,\n  }),\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (categories);\n\n\n//# sourceURL=webpack:///./src/modules/categories.js?");

/***/ }),

/***/ "./src/modules/goToPageCards.js":
/*!**************************************!*\
  !*** ./src/modules/goToPageCards.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CATIGORIES = document.getElementsByClassName('category');\nconst LINKS = document.querySelectorAll('.nav-li a');\nconst goToPageCards = function goToPageCards(targetEl) {\n  if (targetEl === CATIGORIES[0] || targetEl === document.getElementsByTagName('img')[0] || targetEl === document.getElementsByClassName('name-of-category')[0]) {\n    localStorage.setItem('page', 'actionA');\n    localStorage.setItem('pageNumber', 1);\n  } else if (targetEl === CATIGORIES[1] || targetEl === document.getElementsByTagName('img')[1] || targetEl === document.getElementsByClassName('name-of-category')[1]) {\n    localStorage.setItem('page', 'actionB');\n    localStorage.setItem('pageNumber', 2);\n  } else if (targetEl === CATIGORIES[2] || targetEl === document.getElementsByTagName('img')[2] || targetEl === document.getElementsByClassName('name-of-category')[2]) {\n    localStorage.setItem('page', 'actionC');\n    localStorage.setItem('pageNumber', 3);\n  } else if (targetEl === CATIGORIES[3] || targetEl === document.getElementsByTagName('img')[3] || targetEl === document.getElementsByClassName('name-of-category')[3]) {\n    localStorage.setItem('page', 'adjective');\n    localStorage.setItem('pageNumber', 4);\n  } else if (targetEl === CATIGORIES[4] || targetEl === document.getElementsByTagName('img')[4] || targetEl === document.getElementsByClassName('name-of-category')[4]) {\n    localStorage.setItem('page', 'animalA');\n    localStorage.setItem('pageNumber', 5);\n  } else if (targetEl === CATIGORIES[5] || targetEl === document.getElementsByTagName('img')[5] || targetEl === document.getElementsByClassName('name-of-category')[5]) {\n    localStorage.setItem('page', 'animalB');\n    localStorage.setItem('pageNumber', 6);\n  } else if (targetEl === CATIGORIES[6] || targetEl === document.getElementsByTagName('img')[6] || targetEl === document.getElementsByClassName('name-of-category')[6]) {\n    localStorage.setItem('page', 'clothes');\n    localStorage.setItem('pageNumber', 7);\n  } else if (targetEl === CATIGORIES[7] || targetEl === document.getElementsByTagName('img')[7] || targetEl === document.getElementsByClassName('name-of-category')[7]) {\n    localStorage.setItem('page', 'emotion');\n    localStorage.setItem('pageNumber', 8);\n  }\n\n  if (targetEl === LINKS[1]) {\n    localStorage.setItem('page', 'actionA');\n    localStorage.setItem('pageNumber', 1);\n  } else if (targetEl === LINKS[2]) {\n    localStorage.setItem('page', 'actionB');\n    localStorage.setItem('pageNumber', 2);\n  } else if (targetEl === LINKS[3]) {\n    localStorage.setItem('page', 'actionC');\n    localStorage.setItem('pageNumber', 3);\n  } else if (targetEl === LINKS[4]) {\n    localStorage.setItem('page', 'adjective');\n    localStorage.setItem('pageNumber', 4);\n  } else if (targetEl === LINKS[5]) {\n    localStorage.setItem('page', 'animalA');\n    localStorage.setItem('pageNumber', 5);\n  } else if (targetEl === LINKS[6]) {\n    localStorage.setItem('page', 'animalB');\n    localStorage.setItem('pageNumber', 6);\n  } else if (targetEl === LINKS[7]) {\n    localStorage.setItem('page', 'clothes');\n    localStorage.setItem('pageNumber', 7);\n  } else if (targetEl === LINKS[8]) {\n    localStorage.setItem('page', 'emotion');\n    localStorage.setItem('pageNumber', 8);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (goToPageCards);\n\n\n//# sourceURL=webpack:///./src/modules/goToPageCards.js?");

/***/ }),

/***/ "./src/modules/switcher.js":
/*!*********************************!*\
  !*** ./src/modules/switcher.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SWITCHER = document.querySelector('switcher');\nconst TOGGLE_SWITCH = document.querySelector('switcher a');\nconst SWITCHER_TEXT = document.querySelector('switcher span');\nconst SWITCHER_TEXT_PLAY = document.querySelector('switcher .mode-text-play');\nconst BURGER_MENU = document.querySelector('.burger-menu');\nlet mode = false;\nconst switchMode = function switchMode(targetEl) {\n  if (targetEl === SWITCHER || targetEl === TOGGLE_SWITCH\n    || targetEl === SWITCHER_TEXT || targetEl === SWITCHER_TEXT_PLAY) {\n    if (mode === false) {\n      mode = true;\n      SWITCHER_TEXT.classList.add('active-switch-text');\n      SWITCHER.classList.add('play-mode-color');\n      BURGER_MENU.classList.add('play-mode-color');\n      document.querySelectorAll('.category').forEach((a) => {\n        a.classList.add('play-mode-color');\n      });\n      document.querySelectorAll('.card').forEach((a) => {\n        a.classList.add('play-mode-color');\n      });\n      sessionStorage.setItem('mode', true);\n    } else {\n      mode = false;\n      SWITCHER_TEXT.classList.remove('active-switch-text');\n      SWITCHER.classList.remove('play-mode-color');\n      BURGER_MENU.classList.remove('play-mode-color');\n      document.querySelectorAll('.category').forEach((a) => {\n        a.classList.remove('play-mode-color');\n      });\n      document.querySelectorAll('.card').forEach((a) => {\n        a.classList.remove('play-mode-color');\n      });\n      sessionStorage.setItem('mode', false);\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (switchMode);\n\n\n//# sourceURL=webpack:///./src/modules/switcher.js?");

/***/ })

/******/ });