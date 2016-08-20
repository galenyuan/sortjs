var sortjs =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classify = __webpack_require__(1);

	var _classify2 = _interopRequireDefault(_classify);

	var _combine = __webpack_require__(2);

	var _combine2 = _interopRequireDefault(_combine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function (arr, key) {
		return sort(arr, key);
	};

	function sort(arr, key) {
		var classed = (0, _classify2.default)(arr, key);

		return (0, _combine2.default)(classed, key);
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (arr, key) {
		var result = {
			number: [],
			lower: [],
			upper: [],
			other: []
		};

		arr.forEach(function (item) {
			var str = (key ? item[key] : item).toString();

			result[getType(str[0])].push(item);
		});

		return result;
	};

	function getType(str) {
		if (isNumber(str)) return 'number';else if (isLowerCase(str)) return 'lower';else if (isUpperCase(str)) return 'upper';else return 'other';
	}

	function isNumber(str) {
		return !isNaN(parseInt(str));
	}

	function isLowerCase(str) {
		return (/[a-z]/.test(str)
		);
	}

	function isUpperCase(str) {
		return (/[A-Z]/.test(str)
		);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var orderBy = '';

	exports.default = function (obj, key) {
		orderBy = key;

		var num = commonSort(obj.number, 1);
		var lower = commonSort(obj.lower, 2);
		var upper = commonSort(obj.upper, 3);
		var other = sortLocale(obj.other);

		return num.concat(lower, upper, other);
	};

	function commonSort(arr, type) {
		return arr.sort(function (a, b) {
			return hasKey(a) > hasKey(b);
		});
	}

	function sortLocale(arr) {
		if (hasLocaleCompare()) {
			return arr.sort(function (a, b) {
				return hasKey(a).localeCompare(hasKey(b)) > 0;
			});
		} else {
			return arr;
		}
	}

	function hasLocaleCompare() {
		return !!'foo'.localeCompare();
	}

	function hasKey(data) {
		return orderBy ? data[orderBy] : data;
	}

/***/ }
/******/ ]);