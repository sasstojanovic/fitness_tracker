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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".hidden {\\n  animation-name: hideView;\\n  animation-duration: 0.3s;\\n  animation-timing-function: ease-out;\\n  animation-fill-mode: forwards; }\\n\\n@keyframes hideView {\\n  from {\\n    opacity: 1; }\\n  to {\\n    opacity: 0;\\n    display: none; } }\\n\\n.week-review, .day-review, .one-day-container {\\n  animation-name: showView;\\n  animation-duration: 0.3s;\\n  animation-timing-function: ease-out; }\\n\\n@keyframes showView {\\n  from {\\n    opacity: 0; }\\n  to {\\n    opacity: 1; } }\\n\\n.spinner {\\n  -webkit-animation: spin 1s linear infinite;\\n  animation: spin 1s linear infinite; }\\n\\n@-webkit-keyframes spin {\\n  0% {\\n    -webkit-transform: rotate(0deg); }\\n  100% {\\n    -webkit-transform: rotate(360deg); } }\\n\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg); }\\n  100% {\\n    transform: rotate(360deg); } }\\n\\n#week-review-header, #day-review-header {\\n  width: 313px;\\n  max-width: 340px;\\n  border-radius: 28px;\\n  padding: 24px 27px;\\n  padding-right: 0px; }\\n\\n#week-review-header .header-message, #day-review-header .header-message {\\n  font-size: 34px;\\n  font-weight: 600;\\n  margin-bottom: 10px;\\n  word-wrap: break-word; }\\n\\n#week-review-header .header-description, #day-review-header .header-description {\\n  font-size: 16px;\\n  font-weight: 500;\\n  word-wrap: break-word; }\\n\\n#week-review-header {\\n  background-color: white; }\\n\\n#day-review-header {\\n  background-color: rgba(255, 255, 255, 0.25); }\\n\\n#week-review-header .header-message {\\n  color: #00b6a3; }\\n\\n#week-review-header .header-description {\\n  color: #898694; }\\n\\n#day-review-header .header-message {\\n  color: white; }\\n\\n#day-review-header .header-description {\\n  color: rgba(255, 255, 255, 0.7); }\\n\\n#day-review-header > div {\\n  display: inline-block; }\\n\\n.header-back {\\n  height: 40px;\\n  width: 40px;\\n  position: relative;\\n  top: -10px;\\n  left: -15px;\\n  border-radius: 50%; }\\n\\n.header-back:hover {\\n  cursor: pointer;\\n  background-color: white; }\\n\\n.header-back i {\\n  font-size: 40px;\\n  color: white; }\\n\\n.header-back:hover i {\\n  color: #00b6a3; }\\n\\n#loader {\\n  position: fixed;\\n  top: 0px;\\n  left: 0px;\\n  bottom: 0px;\\n  right: 0px;\\n  background-color: rgba(0, 0, 0, 0.7); }\\n\\n.spinner {\\n  border: 10px solid white;\\n  border-radius: 50%;\\n  border-top: 10px solid #34c7a0;\\n  width: 40px;\\n  height: 40px;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  margin-top: -50px;\\n  margin-left: -50px; }\\n\\n.icon-container {\\n  position: relative;\\n  top: 3px;\\n  color: white;\\n  width: 40px;\\n  height: 40px;\\n  background-color: rgba(255, 255, 255, 0.25);\\n  border-radius: 23px;\\n  margin-right: 15px; }\\n\\n.icon-container > i {\\n  padding: 8px;\\n  position: absolute; }\\n\\n#day-steps-icon {\\n  background-color: rgba(0, 182, 163, 0.25); }\\n\\n#day-steps-icon i {\\n  color: white;\\n  position: static; }\\n\\n#days-container {\\n  margin-top: 30px;\\n  margin-bottom: 15px; }\\n\\n.one-day-container {\\n  display: inline-block;\\n  background-color: rgba(255, 255, 255, 0.25);\\n  width: 60px;\\n  max-width: 60px;\\n  height: 60px;\\n  border-radius: 23px;\\n  margin-right: 5px;\\n  margin-left: 5px;\\n  margin-bottom: 15px; }\\n\\n.one-day-container:hover {\\n  cursor: pointer; }\\n\\n.one-day-container .one-day-content.active {\\n  cursor: default;\\n  color: #00b6a3;\\n  background-color: white;\\n  opacity: 1;\\n  -webkit-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.1);\\n  -moz-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.1);\\n  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.1); }\\n\\n.one-day-container:last-child {\\n  margin-right: 0px; }\\n\\n.one-day-container:first-child {\\n  margin-left: 0px; }\\n\\n.one-day-content {\\n  color: white;\\n  font-size: 16px;\\n  opacity: 0.7;\\n  padding: 11px;\\n  text-align: center;\\n  font-weight: 500;\\n  border-radius: 23px; }\\n\\n.action-panel {\\n  width: 300px;\\n  max-width: 340px;\\n  background-color: rgba(255, 255, 255, 0.25);\\n  border-radius: 28px;\\n  padding: 20px;\\n  margin-bottom: 15px; }\\n\\n.action-info > div {\\n  display: inline-block; }\\n\\n.action-title {\\n  font-size: 20px;\\n  color: white;\\n  font-weight: 500; }\\n\\n.action-description {\\n  font-size: 16px;\\n  color: rgba(255, 255, 255, 0.7);\\n  font-weight: 500; }\\n\\n#activity-value {\\n  font-size: 38px;\\n  color: white;\\n  font-weight: 600;\\n  margin-left: 55px;\\n  margin-bottom: 26px;\\n  margin-top: 26px; }\\n\\n#steps-container .action-info, #calories-container .action-info {\\n  display: inline-block; }\\n\\n.action-value {\\n  font-size: 38px;\\n  color: white;\\n  font-weight: 600;\\n  float: right; }\\n\\n#day-activity-container {\\n  width: 340px;\\n  max-width: 340px;\\n  border-radius: 28px 28px 0px 0px;\\n  padding: 24px 0px 24px 0px;\\n  background-color: white; }\\n\\n#day-steps-container {\\n  width: 231px;\\n  height: 231px;\\n  border: 8px solid #00b6a3;\\n  box-sizing: border-box;\\n  border-radius: 50%;\\n  padding: 18px;\\n  margin: 0 auto;\\n  margin-top: 15px;\\n  margin-bottom: 30px; }\\n\\n#day-steps-wrapper > div {\\n  margin: auto;\\n  text-align: center; }\\n\\n#day-steps-title {\\n  font-size: 20px;\\n  font-weight: 400;\\n  color: #151c1f;\\n  margin-top: 10px !important;\\n  margin-bottom: 10px !important; }\\n\\n#day-steps-value {\\n  font-size: 48px;\\n  font-weight: 600;\\n  color: #151c1f; }\\n\\n#day-review-progress-message {\\n  font-size: 20px;\\n  font-weight: 400;\\n  color: #151c1f;\\n  text-align: center; }\\n\\n#day-review-motivation-message {\\n  font-size: 40px;\\n  font-weight: 600;\\n  color: #151c1f;\\n  text-align: center; }\\n\\n#day-review-details {\\n  margin-top: 85px; }\\n\\n#day-review-details .day-review-details-wrapper:last-child {\\n  border-right: none; }\\n\\n.day-review-details-wrapper {\\n  display: inline-block;\\n  width: 32%;\\n  min-width: 100px;\\n  min-height: 75px;\\n  border-right: 1px solid #ebebeb;\\n  position: relative; }\\n\\n.day-review-details-title {\\n  font-size: 18px;\\n  font-weight: 400;\\n  color: #b3b3b3;\\n  text-align: center; }\\n\\n.day-review-details-value {\\n  font-size: 40px;\\n  font-weight: 600;\\n  color: #00b6a3;\\n  text-align: center; }\\n\\n.day-review-details-container {\\n  position: absolute;\\n  bottom: 0px;\\n  margin: auto;\\n  width: 100%; }\\n\\n* {\\n  margin: 0;\\n  padding: 0; }\\n\\nhtml, body {\\n  height: 100%;\\n  overflow: auto; }\\n\\nbody {\\n  font-family: \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n  background: #34c7a0;\\n  background: -moz-linear-gradient(152deg, #34c7a0, #008aa2);\\n  background: -webkit-linear-gradient(152deg, #34c7a0, #008aa2);\\n  background: linear-gradient(152deg, #34c7a0, #008aa2);\\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\\\"rgba(52, 199, 160, 1)\\\", endColorstr=\\\"rgba(0, 138, 162, 1)\\\",GradientType=1 );\\n  background-repeat: no-repeat; }\\n\\n.hidden {\\n  display: none; }\\n\\n#container {\\n  width: 340px;\\n  max-width: 340px;\\n  margin: auto;\\n  height: auto;\\n  padding: 20px;\\n  padding-bottom: 0px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/sass/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/app_config.js":
/*!******************************!*\
  !*** ./src/js/app_config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var APP_CONFIG = {\n  jsonUrl: \"https://api.myjson.com/bins/1gwnal\",\n  daysToShow: 5,\n  oneStepDistance: 0.762,\n  oneStepBurnsCal: 0.05,\n  oneStepTime: 0.5\n};\nmodule.exports = {\n  config: APP_CONFIG\n};\n\n//# sourceURL=webpack:///./src/js/app_config.js?");

/***/ }),

/***/ "./src/js/data_loader.js":
/*!*******************************!*\
  !*** ./src/js/data_loader.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function getData(url, successFunction, faultFunction) {\n  var xmlhttp = new XMLHttpRequest();\n\n  xmlhttp.onreadystatechange = function () {\n    if (this.readyState == 4) {\n      if (this.status == 200) {\n        var data = JSON.parse(this.responseText);\n        successFunction(data);\n      } else {\n        if (faultFunction) {\n          faultFunction();\n        }\n      }\n    }\n  };\n\n  xmlhttp.open(\"GET\", url, true);\n  xmlhttp.send();\n}\n\nmodule.exports = {\n  execute: getData\n};\n\n//# sourceURL=webpack:///./src/js/data_loader.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n\nvar app = __webpack_require__(/*! ./app_config */ \"./src/js/app_config.js\");\n\nvar utilities = __webpack_require__(/*! ./utilities */ \"./src/js/utilities.js\");\n\nvar getData = __webpack_require__(/*! ./data_loader */ \"./src/js/data_loader.js\");\n\nvar spinLoader = __webpack_require__(/*! ./spin_loader */ \"./src/js/spin_loader.js\");\n\nvar dataStorage = {};\nvar views = {\n  week: {\n    name: \"week\",\n    className: \"week-review\",\n    isCurrent: true\n  },\n  day: {\n    name: \"day\",\n    className: \"day-review\",\n    isCurrent: false\n  }\n};\n\nfunction getCurrentViewName() {\n  var viewName = null;\n\n  for (prop in views) {\n    if (views[prop].isCurrent) {\n      viewName = views[prop].name;\n      break;\n    }\n  }\n\n  return viewName;\n}\n\nfunction changeView(view) {\n  var currentViewName = getCurrentViewName();\n\n  function setView() {\n    for (prop in views) {\n      var className = views[prop].className;\n      views[prop].isCurrent = false;\n      var dayReviewElements = document.getElementsByClassName(className);\n\n      for (var i = 0; i < dayReviewElements.length; i++) {\n        dayReviewElements.item(i).classList.add(\"hidden\");\n      }\n    }\n\n    view.isCurrent = true;\n    var weekReviewElements = document.getElementsByClassName(view.className);\n\n    for (var _i = 0; _i < weekReviewElements.length; _i++) {\n      weekReviewElements.item(_i).classList.remove(\"hidden\");\n    }\n  }\n\n  if (currentViewName) {\n    if (currentViewName != view.name) {\n      setView();\n    }\n  } else {\n    setView();\n  }\n}\n\nfunction resetSelectedDay() {\n  var daysElements = document.querySelectorAll(\"#days-container .one-day-container .one-day-content\");\n\n  for (var i = 0; i < daysElements.length; i++) {\n    daysElements[i].classList.remove(\"active\");\n  }\n}\n\nfunction setDayReview(selectedDate) {\n  var thisDaySteps = dataStorage[selectedDate].steps;\n  var thisDayKm = (thisDaySteps * app.config.oneStepDistance / 1000).toFixed(1);\n  var thisDayCaloriesBurned = Math.floor(thisDaySteps * app.config.oneStepBurnsCal);\n  var thisDayActiveTime = thisDaySteps * app.config.oneStepTime / 3600;\n  document.getElementById(\"day-steps-value\").innerHTML = utilities.execute.getNumberWithCommas(thisDaySteps);\n  document.getElementById(\"day-review-distance-value\").innerHTML = thisDayKm;\n  document.getElementById(\"day-review-calories-value\").innerHTML = thisDayCaloriesBurned;\n  document.getElementById(\"day-review-time-value\").innerHTML = parseFloat(Math.round(thisDayActiveTime * 100) / 100).toFixed(2);\n  document.getElementById(\"day-review-date\").innerHTML = utilities.execute.getFormatedDate(dataStorage[selectedDate].epochDate);\n  document.getElementById(\"day-review-week-day-name\").innerHTML = utilities.execute.getDayName(dataStorage[selectedDate].epochDate);\n  document.getElementById(\"day-review-progress-message\").innerHTML = \"Very good\";\n  document.getElementById(\"day-review-motivation-message\").innerHTML = \"Keep going!\";\n  spinLoader.hide();\n}\n\nfunction setWeekReview(sortedDays) {\n  var totalSteps = 0;\n  var totalSeconds = 0;\n  var totalCalories = 0;\n\n  for (var i = 0; i < sortedDays.length; i++) {\n    totalSteps += dataStorage[sortedDays[i]].steps;\n  }\n\n  totalSeconds = totalSteps * app.config.oneStepTime / app.config.daysToShow;\n  var hours = Math.floor(totalSeconds / 3600);\n  var minutes = Math.floor(totalSeconds % 3600 / 60);\n  totalCalories = Math.floor(totalSteps * app.config.oneStepBurnsCal);\n  document.getElementById(\"activity-value\").innerHTML = hours + \"h\" + \"&nbsp;\" + minutes + \"min\";\n  document.querySelectorAll(\"#steps-container .action-value\")[0].innerHTML = utilities.execute.getNumberWithCommas(totalSteps);\n  document.querySelectorAll(\"#calories-container .action-value\")[0].innerHTML = totalCalories.toString();\n  spinLoader.hide();\n}\n\nfunction fillDaysContainer() {\n  var daysContainerElement = document.getElementById(\"days-container\");\n  var sortedDays = Object.keys(dataStorage).sort(function (a, b) {\n    return dataStorage[b].epochDate - dataStorage[a].epochDate;\n  });\n  sortedDays.splice(app.config.daysToShow, sortedDays.length - 1);\n\n  for (var i = sortedDays.length - 1; i >= 0; i--) {\n    var oneDayContainerElement = document.createElement(\"DIV\");\n    oneDayContainerElement.className = \"one-day-container\";\n    var oneDayContentElement = document.createElement(\"DIV\");\n    oneDayContentElement.className = \"one-day-content\";\n    oneDayContentElement.dataset.date = dataStorage[sortedDays[i]].epochDate;\n    oneDayContentElement.innerHTML = dataStorage[sortedDays[i]].date + \"<br>\" + dataStorage[sortedDays[i]].day.toUpperCase();\n    oneDayContainerElement.appendChild(oneDayContentElement);\n    daysContainerElement.appendChild(oneDayContainerElement);\n  }\n\n  setWeekReview(sortedDays);\n}\n\nfunction processData(data) {\n  if (data) {\n    for (var i = 0; i < data.length; i++) {\n      var dayEpoch = null;\n      var steps = null;\n      var thisDay = null;\n      var thisDate = null;\n\n      if (data[i].timestamp) {\n        var currentDate = new Date(data[i].timestamp);\n        thisDate = currentDate.getDate();\n        thisDay = utilities.execute.getDayName(currentDate.getDay(), true);\n        currentDate = currentDate.setHours(0, 0, 0, 0);\n        dayEpoch = String(currentDate.valueOf());\n      }\n\n      if (data[i].steps) {\n        steps = data[i].steps;\n      }\n\n      if (dataStorage.hasOwnProperty(dayEpoch)) {\n        dataStorage[dayEpoch].steps += steps;\n      } else {\n        dataStorage[dayEpoch] = {\n          \"epochDate\": Number(dayEpoch),\n          \"steps\": steps,\n          \"date\": thisDate,\n          \"day\": thisDay\n        };\n      }\n    } // console.log(\"Data: \" + JSON.stringify(dataStorage, null, 4));\n\n  }\n\n  fillDaysContainer();\n}\n\nvar eventListeners = {\n  backToWeekReview: function backToWeekReview() {\n    resetSelectedDay();\n    changeView(views.week);\n  },\n  goToDayReview: function goToDayReview(e) {\n    if (e.target) {\n      if (e.target.classList.contains(\"one-day-content\")) {\n        var selectedDate = e.target.dataset.date;\n\n        if (e.target.classList.contains(\"active\")) {\n          return;\n        } else {\n          spinLoader.show();\n          resetSelectedDay();\n          e.target.classList.add(\"active\");\n          changeView(views.day);\n          setDayReview(selectedDate);\n        }\n      }\n    }\n  }\n};\n\nfunction initEvents() {\n  document.querySelectorAll(\"#day-review-header .header-back\")[0].addEventListener(\"click\", eventListeners.backToWeekReview);\n  document.getElementById(\"days-container\").addEventListener('click', eventListeners.goToDayReview);\n}\n\nfunction errorFunction() {\n  spinLoader.hide();\n  alert(\"A problem occurred while getting data.\");\n}\n\nfunction onPageLoad() {\n  spinLoader.show();\n  initEvents();\n  getData.execute(app.config.jsonUrl, processData, errorFunction);\n}\n\nwindow.onload = onPageLoad;\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/spin_loader.js":
/*!*******************************!*\
  !*** ./src/js/spin_loader.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function show() {\n  document.getElementById(\"loader\").classList.remove(\"hidden\");\n}\n\nfunction hide() {\n  document.getElementById(\"loader\").classList.add(\"hidden\");\n}\n\nmodule.exports = {\n  show: show,\n  hide: hide\n};\n\n//# sourceURL=webpack:///./src/js/spin_loader.js?");

/***/ }),

/***/ "./src/js/utilities.js":
/*!*****************************!*\
  !*** ./src/js/utilities.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var utilities = {\n  getNumberWithCommas: function getNumberWithCommas(thisNumber) {\n    var result = null;\n\n    if (thisNumber) {\n      result = thisNumber.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\");\n    }\n\n    return result;\n  },\n  getFormatedDate: function getFormatedDate(epochValue) {\n    var monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n    var thisDate = new Date(epochValue);\n    var thisMonthDay = thisDate.getDate();\n    var thisMonthName = monthNames[thisDate.getMonth()];\n    var thisYear = thisDate.getFullYear();\n    return thisMonthName + \" \" + thisMonthDay + \", \" + thisYear + \".\";\n  },\n  getDayName: function getDayName(epochValue, isShortName) {\n    var thisDate = new Date(epochValue);\n    var weekdays = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n    var dayName = weekdays[thisDate.getDay()];\n\n    if (isShortName) {\n      dayName = dayName.slice(0, 3);\n    }\n\n    return dayName;\n  }\n};\nmodule.exports = {\n  execute: utilities\n};\n\n//# sourceURL=webpack:///./src/js/utilities.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/sass/style.scss?");

/***/ })

/******/ });