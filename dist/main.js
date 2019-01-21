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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar poly = function poly(bound) {\n  var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;\n\n  var dist = 100 + 50 * (total - 1);\n  var mod = bound === 'start' ? dist : 0;\n  return new Array(total).fill('').reduce(function (acc, i, idx) {\n    var x1 = Math.floor(0 - mod - 50 * idx);\n    var x2 = Math.floor(dist - mod - 50 * idx);\n    var y1 = Math.floor(100 / total * idx);\n    var y2 = Math.floor(100 / total * (idx + 1));\n    var str = x1 + '% ' + y1 + '%, ' + x2 + '% ' + y1 + '%, ' + x2 + '% ' + y2 + '%, ' + x1 + '% ' + y2 + '%, ' + x1 + '% ' + y1 + '%' + (idx < total - 1 ? ', ' : '');\n    acc += str;\n    return acc;\n  }, '');\n};\n\n// Set up\nvar control = document.getElementById('segments');\nvar imgParent = document.querySelector('.revealer');\nvar src = 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=70&width=' + imgParent.clientWidth * window.devicePixelRatio;\n\nvar setUpImg = function setUpImg(container) {\n  var segments = parseInt(control.value, 10);\n  container.classList.remove('ready');\n  container.innerHTML = '';\n  var img = document.createElement('img');\n  container.appendChild(img);\n  container.style.WebkitClipPath = 'polygon(' + poly('start', segments) + ')';\n\n  img.addEventListener('load', function (e) {\n    container.classList.add('ready');\n    img.classList.add('loaded');\n    container.style.WebkitClipPath = 'polygon(' + poly('end', segments) + ')';\n  }, { once: true });\n  requestAnimationFrame(function () {\n    img.src = src;\n  });\n};\ncontrol.addEventListener('change', function () {\n  return setUpImg(imgParent);\n});\n\nsetUpImg(imgParent);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });