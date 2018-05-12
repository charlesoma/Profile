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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Layout = function () {\n  function Layout() {\n    _classCallCheck(this, Layout);\n\n    for (var _len = arguments.length, pages = Array(_len), _key = 0; _key < _len; _key++) {\n      pages[_key] = arguments[_key];\n    }\n\n    this.pages = pages;\n  }\n\n  _createClass(Layout, [{\n    key: 'load',\n    value: function load() {\n      return Promise.all(this.pages.map(function (page) {\n        return page.load();\n      }));\n    }\n  }, {\n    key: 'show',\n    value: function show(el) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this.pages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var page = _step.value;\n\n          var div = document.createElement('div');\n          page.show(div);\n          el.appendChild(div);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  }]);\n\n  return Layout;\n}();\n\nexports.default = Layout;\n\n//# sourceURL=webpack:///./src/js/layout.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _router = __webpack_require__(/*! ./router */ \"./src/js/router.js\");\n\nvar _router2 = _interopRequireDefault(_router);\n\nvar _layout = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\n\nvar _layout2 = _interopRequireDefault(_layout);\n\nvar _page = __webpack_require__(/*! ./page */ \"./src/js/page.js\");\n\nvar _page2 = _interopRequireDefault(_page);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar r = new _router2.default({\n  settings: new _layout2.default(new _page2.default('menu.html'), new _page2.default('settings.html')),\n  option1: new _layout2.default(new _page2.default('menu.html'), new _page2.default('option1.html')),\n  option2: new _layout2.default(new _page2.default('menu.html'), new _page2.default('option2.html')),\n  about: new _layout2.default(new _page2.default('menu.html'), new _page2.default('about.html')),\n  '#default': new _layout2.default(new _page2.default('menu.html'), new _page2.default('about.html'))\n}, document.querySelector('main'));\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/page.js":
/*!************************!*\
  !*** ./src/js/page.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Page = function () {\n  function Page(url) {\n    _classCallCheck(this, Page);\n\n    this.url = \"views/\" + url;\n  }\n\n  _createClass(Page, [{\n    key: \"load\",\n    value: function load() {\n      var _this = this;\n\n      return fetch(this.url).then(function (resp) {\n        return resp.text();\n      }).then(function (text) {\n        _this.html = text;\n      });\n    }\n  }, {\n    key: \"show\",\n    value: function show(el) {\n      el.innerHTML = this.html;\n    }\n  }]);\n\n  return Page;\n}();\n\nexports.default = Page;\n\n//# sourceURL=webpack:///./src/js/page.js?");

/***/ }),

/***/ "./src/js/router.js":
/*!**************************!*\
  !*** ./src/js/router.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Router = function () {\n  function Router(routes, el) {\n    _classCallCheck(this, Router);\n\n    this.routes = routes;\n    this.el = el;\n    window.onhashchange = this.hashChanged.bind(this);\n    this.hashChanged();\n  }\n\n  _createClass(Router, [{\n    key: 'hashChanged',\n    value: async function hashChanged(ev) {\n      if (window.location.hash.length > 0) {\n        var pageName = window.location.hash.substr(1);\n        this.show(pageName);\n      } else if (this.routes['#default']) {\n        this.show('#default');\n      }\n    }\n  }, {\n    key: 'show',\n    value: async function show(pageName) {\n      var page = this.routes[pageName];\n      await page.load();\n      this.el.innerHTML = '';\n      page.show(this.el);\n    }\n  }]);\n\n  return Router;\n}();\n\nexports.default = Router;\n\n//# sourceURL=webpack:///./src/js/router.js?");

/***/ })

/******/ });