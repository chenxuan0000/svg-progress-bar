(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["svgProgressBar"] = factory();
	else
		root["svgProgressBar"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vueProgress = undefined;

var _progressBar = __webpack_require__(1);

var _progressBar2 = _interopRequireDefault(_progressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('svg-progress-bar', _progressBar2.default);
}

exports.vueProgress = _progressBar2.default;
exports.default = _progressBar2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(2)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(10),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "G:\\github\\progress-bar\\src\\components\\progress-bar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] progress-bar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e523313", Component.options)
  } else {
    hotAPI.reload("data-v-7e523313", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("c80c6df4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/_css-loader@0.25.0@css-loader/index.js!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7e523313\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./progress-bar.vue", function() {
     var newContent = require("!!../../node_modules/_css-loader@0.25.0@css-loader/index.js!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7e523313\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./progress-bar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(6)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueProgress = __webpack_require__(9);

var _vueProgress2 = _interopRequireDefault(_vueProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      vueProgress: null
    };
  },

  props: {
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    value: {
      type: [Number, String]
    },
    type: {
      type: String
    }
  },
  computed: {},
  components: {},
  methods: {
    update: function update(val, duration) {
      this.vueProgress.update(val, duration);
    },
    getVal: function getVal() {
      return this.vueProgress.getValue();
    }
  },
  watch: {
    value: function value(val1, val2) {
      this.update(val1, Math.abs(val1 - val2) * 12);
    }
  },
  mounted: function mounted() {
    this.vueProgress = _vueProgress2.default.create({
      dom: this.$refs.progress,
      type: this.type,
      radius: this.options.radius,
      circleWidth: this.options.circleWidth,
      circleWidthArray: this.options.circleWidthArray,
      circleLineCap: this.options.circleLineCap,
      maxValue: this.options.maxValue,
      value: this.value,
      text: this.options.text,
      textColor: this.options.textColor,
      pathColors: this.options.pathColors,
      gradientColor: this.options.gradientColor,
      gradientOpacity: this.options.gradientOpacity,
      duration: this.options.duration,
      rectWidth: this.options.rectWidth,
      rectHeight: this.options.rectHeight,
      rectRadius: this.options.rectRadius
    });
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
  setTimeout(callback, 1000 / 60);
},
    vueProgress = function vueProgress(options) {
  var endAngleRad = Math.PI / 180 * 270;
  this._el = options.dom;
  this._type = options.type || 'circle';
  this._rectWidth = options.rectWidth || 200;
  this._rectHeight = options.rectHeight || 20;
  this._rectRadius = options.rectRadius || 0;
  this._radius = options.radius || 50;
  this._duration = options.duration === undefined ? 500 : options.duration;
  this._maxValue = options.maxValue || 100;
  this._text = options.text === undefined ? function (value) {
    return this.htmlifyNumber(value);
  } : options.text;
  this._strokeWidth = options.circleWidth || 10;
  this._strokeWidthArray = options.circleWidthArray;
  this._circleLineCap = options.circleLineCap;
  this._colors = options.pathColors || ['#EEE', '#F00'];
  this._gradientColor = options.gradientColor;
  this._gradientOpacity = options.gradientOpacity || [1, 1];
  this._textColor = options.textColor || '#000';
  this._value = 0;
  this._svg = null;
  this._movingPath = null;
  this._wrapContainer = null;
  this._textContainer = null;
  this._wrpClass = options.wrapClass || 'circles-wrap';
  this._textClass = options.textClass || 'circles-text';
  this._valClass = options.valueStrokeClass || 'circles-valueStroke';
  this._maxValClass = options.maxValueStrokeClass || 'circles-maxValueStroke';
  this._styleWrapper = options.styleWrapper === false ? false : true;
  this._styleText = options.styleText === false ? false : true;
  this._start = -Math.PI / 180 * 90;
  this._startPrecise = this._precise(this._start);
  this._circ = endAngleRad - this._start;
  this._NS_SVG = 'http://www.w3.org/2000/svg';
  this._generate().update(options.value || 0);
};

vueProgress.prototype = {
  _generate: function _generate() {
    this._svgSize = this._radius * 2;

    this._radiusAdjusted = this._radius - (this._strokeWidthArray ? Math.max(this._strokeWidthArray[0], this._strokeWidthArray[1]) / 2 : this._strokeWidth / 2);
    this._generateSvg()._generateText()._generateWrapper();
    this._el.innerHTML = '';
    this._el.appendChild(this._wrapContainer);
    return this;
  },

  _setCss: function _setCss(dom, cssData) {
    for (var prop in cssData) {
      dom.style[prop] = cssData[prop];
    }
  },

  _setPercentage: function _setPercentage(percentage) {
    if (this._type === 'circle') {
      this._movingPath.setAttribute('d', this._calculatePath(percentage, true));
    } else if (this._type === 'rect') {
      this._movingPath.setAttribute('width', this._rectWidth * percentage / 100);
    }
    this._textContainer.innerHTML = this._getText(this.getValueFromPercent(percentage));
  },

  _generateWrapper: function _generateWrapper() {
    this._wrapContainer = document.createElement('div');
    this._wrapContainer.className = this._wrpClass;

    if (this._styleWrapper) {
      this._wrapContainer.style.position = 'relative';
      this._wrapContainer.style.display = 'inline-block';
    }
    this._wrapContainer.appendChild(this._svg);
    this._wrapContainer.appendChild(this._textContainer);
    return this;
  },

  _generateText: function _generateText() {
    this._textContainer = document.createElement('div');
    this._textContainer.className = this._textClass;
    if (this._styleText) {
      var style = {
        position: 'absolute',
        top: 0,
        left: 0,
        textAlign: 'center',
        width: '100%',
        fontSize: this._radius * 0.6 + 'px',
        height: this._svgSize + 'px',
        lineHeight: this._svgSize + 'px',
        color: this._textColor
      };
      this._setCss(this._textContainer, style);
    }

    this._textContainer.innerHTML = this._getText(0);
    return this;
  },

  _getText: function _getText(value) {
    if (!this._text) return '';

    if (value === undefined) value = this._value;

    value = parseFloat(value.toFixed(2));

    return typeof this._text === 'function' ? this._text.call(this, value) : this._text;
  },

  _generateSvg: function _generateSvg() {
    this._svg = document.createElementNS(this._NS_SVG, 'svg');
    this._svg.setAttribute('xmlns', this._NS_SVG);

    this._generatePath(100, false, this._colors[0], this._maxValClass)._generatePath(1, true, this._colors[1], this._valClass);
    if (this._type === 'circle') {
      this._svgWidth = this._svgHeight = this._svgSize;
      this._movingPath = this._svg.getElementsByTagName('path')[1];
    } else if (this._type === 'rect') {
      this._svgWidth = this._rectWidth;
      this._svgSize = this._svgHeight = this._rectHeight;
      this._movingPath = this._svg.getElementsByTagName('rect')[1];
    }
    this._svg.setAttribute('width', this._svgWidth);
    this._svg.setAttribute('height', this._svgHeight);
    return this;
  },

  _generatePath: function _generatePath(percentage, open, color, pathClass) {
    var path = void 0,
        now = +new Date();
    if (this._gradientColor && open) {
      var defs = document.createElementNS(this._NS_SVG, 'defs');
      var linearGradient = document.createElementNS(this._NS_SVG, 'linearGradient');
      linearGradient.id = now;
      var stop1 = document.createElementNS(this._NS_SVG, 'stop');
      stop1.setAttribute('offset', '0%');
      stop1.setAttribute('stop-color', this._gradientColor[0]);
      stop1.setAttribute('stop-opacity', this._gradientOpacity[0]);
      var stop2 = document.createElementNS(this._NS_SVG, 'stop');
      stop2.setAttribute('offset', '100%');
      stop2.setAttribute('stop-color', this._gradientColor[1]);
      stop2.setAttribute('stop-opacity', this._gradientOpacity[1]);
      linearGradient.appendChild(stop1);
      linearGradient.appendChild(stop2);
      defs.appendChild(linearGradient);
      this._svg.appendChild(defs);
    }
    if (this._type === 'circle') {
      path = document.createElementNS(this._NS_SVG, 'path');
      this._setCss(path, {
        'fill': 'transparent',
        'stroke': this._gradientColor && open ? 'url(#' + now + ')' : color,
        'stroke-width': this._strokeWidthArray ? open ? this._strokeWidthArray[1] : this._strokeWidthArray[0] : this._strokeWidth
      });
      path.setAttribute('d', this._calculatePath(percentage, open));
      path.setAttribute('class', pathClass);
      this._circleLineCap && path.setAttribute('stroke-linecap', this._circleLineCap);
    } else if (this._type === 'rect') {
      path = document.createElementNS(this._NS_SVG, 'rect');
      var rectStyle = {
        'fill': this._gradientColor && open ? 'url(#' + now + ')' : color
      };
      path.setAttribute('rx', this._rectRadius);
      path.setAttribute('ry', this._rectRadius);
      path.setAttribute('width', this._rectWidth * percentage / 100);
      path.setAttribute('height', this._rectHeight);
      this._setCss(path, rectStyle);
    }
    this._svg.appendChild(path);
    return this;
  },

  _calculatePath: function _calculatePath(percentage, open) {
    var end = this._start + percentage / 100 * this._circ,
        endPrecise = this._precise(end);
    return this._arc(endPrecise, open, percentage);
  },

  _arc: function _arc(end, open, percentage) {
    var endAdjusted = end - 0.001,
        longArc = end - this._startPrecise < Math.PI ? 0 : 1;

    return ['M', this._radius + this._radiusAdjusted * Math.cos(this._startPrecise), this._radius + this._radiusAdjusted * Math.sin(this._startPrecise), 'A', this._radiusAdjusted, this._radiusAdjusted, 0, longArc, 1, this._radius + this._radiusAdjusted * Math.cos(endAdjusted), this._radius + this._radiusAdjusted * Math.sin(endAdjusted), open && percentage < 100 ? '' : 'Z'].join(' ');
  },

  _precise: function _precise(value) {
    return Math.round(value * 1000) / 1000;
  },

  htmlifyNumber: function htmlifyNumber(number, integerPartClass, decimalPartClass) {
    integerPartClass = integerPartClass || 'circles-integer';
    decimalPartClass = decimalPartClass || 'circles-decimals';

    var parts = (number + '').split('.'),
        html = '<span class="' + integerPartClass + '">' + parts[0] + '</span>';

    if (parts.length > 1) {
      html += '.<span class="' + decimalPartClass + '" style="font-size: 0.45em">' + parts[1].substring(0, 2) + '</span>';
    }
    return html;
  },

  getPercent: function getPercent() {
    return this._value * 100 / this._maxValue;
  },

  getValueFromPercent: function getValueFromPercent(percentage) {
    return this._maxValue * percentage / 100;
  },

  getValue: function getValue() {
    return this._value;
  },

  update: function update(value, duration) {
    if (value === true) {
      this._setPercentage(this.getPercent());
      return this;
    }

    if (this._value == value || isNaN(value)) return this;
    if (duration === undefined) duration = this._duration;

    var self = this,
        oldPercentage = self.getPercent(),
        delta = 1,
        newPercentage = void 0,
        isGreater = void 0,
        steps = void 0,
        stepDuration = void 0;

    this._value = Math.min(this._maxValue, Math.max(0, value));

    if (!duration) {
      this._setPercentage(this.getPercent());
      return this;
    }

    newPercentage = self.getPercent();
    isGreater = newPercentage > oldPercentage;
    delta += newPercentage % 1;
    steps = Math.floor(Math.abs(newPercentage - oldPercentage) / delta);
    stepDuration = duration / steps;

    (function animate(lastFrame) {
      if (isGreater) {
        oldPercentage += delta;
      } else {
        oldPercentage -= delta;
      }
      if (isGreater && oldPercentage >= newPercentage || !isGreater && oldPercentage <= newPercentage) {
        requestAnimFrame(function () {
          self._setPercentage(newPercentage);
        });
        return;
      }

      requestAnimFrame(function () {
        self._setPercentage(oldPercentage);
      });

      var now = Date.now(),
          deltaTime = now - lastFrame;

      if (deltaTime >= stepDuration) {
        animate(now);
      } else {
        setTimeout(function () {
          animate(Date.now());
        }, stepDuration - deltaTime);
      }
    })(Date.now());

    return this;
  }
};

vueProgress.create = function (options) {
  return new vueProgress(options);
};

exports.default = vueProgress;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "progress"
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7e523313", module.exports)
  }
}

/***/ })
/******/ ])["default"];
});