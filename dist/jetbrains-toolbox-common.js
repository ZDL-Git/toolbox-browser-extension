/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

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

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".jetbrains-toolbox-" + ({"1":"github"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getToolboxURN = getToolboxURN;
	/* eslint-disable import/no-commonjs,max-len */
	/* globals chrome require */

	var supportedLanguages = exports.supportedLanguages = {
	  Java: ['idea'],
	  Kotlin: ['idea'],
	  Groovy: ['idea'],
	  Scala: ['idea'],
	  JavaScript: ['webstorm', 'idea'],
	  CoffeeScript: ['webstorm', 'idea'],
	  TypeScript: ['webstorm', 'idea'],
	  Dart: ['webstorm', 'idea'],
	  Go: ['goland'],
	  CSS: ['webstorm', 'idea'],
	  HTML: ['webstorm', 'idea'],
	  Python: ['pycharm', 'idea'],
	  PHP: ['phpstorm', 'idea'],
	  'C#': ['rider'],
	  'C++': ['clion'],
	  C: ['clion'],
	  Ruby: ['rubymine', 'idea'],
	  Puppet: ['rubymine', 'idea'],
	  'Objective-C': ['appcode'],
	  Swift: ['appcode']
	};

	var supportedTools = exports.supportedTools = {
	  idea: {
	    name: 'IDEA',
	    tag: 'idea',
	    icon: chrome.extension.getURL(__webpack_require__(2))
	  },
	  appcode: {
	    name: 'AppCode',
	    tag: 'appcode',
	    icon: chrome.extension.getURL(__webpack_require__(3))
	  },
	  clion: {
	    name: 'CLion',
	    tag: 'clion',
	    icon: chrome.extension.getURL(__webpack_require__(4))
	  },
	  pycharm: {
	    name: 'PyCharm',
	    tag: 'pycharm',
	    icon: chrome.extension.getURL(__webpack_require__(5))
	  },
	  phpstorm: {
	    name: 'PhpStorm',
	    tag: 'php-storm',
	    icon: chrome.extension.getURL(__webpack_require__(6))
	  },
	  rubymine: {
	    name: 'RubyMine',
	    tag: 'rubymine',
	    icon: chrome.extension.getURL(__webpack_require__(7))
	  },
	  webstorm: {
	    name: 'WebStorm',
	    tag: 'web-storm',
	    icon: chrome.extension.getURL(__webpack_require__(8))
	  },
	  rider: {
	    name: 'Project Rider',
	    tag: 'rd',
	    icon: chrome.extension.getURL(__webpack_require__(9))
	  },
	  goland: {
	    name: 'GoLand',
	    tag: 'goland',
	    icon: chrome.extension.getURL(__webpack_require__(10))
	  }
	};

	var USAGE_THRESHOLD = exports.USAGE_THRESHOLD = 0.05;

	function getToolboxURN(tool, cloneUrl) {
	  return 'jetbrains://' + tool + '/checkout/git?checkout.repo=' + cloneUrl + '&idea.required.plugins.id=Git4Idea';
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "intellij-idea.svg";

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "appcode.svg";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "clion.svg";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "pycharm.svg";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "phpstorm.svg";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "rubymine.svg";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "webstorm.svg";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "rider.svg";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "gogland.svg";

/***/ }
/******/ ]);