(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _header = __webpack_require__(23);

var _header2 = _interopRequireDefault(_header);

var _ingress = __webpack_require__(24);

var _ingress2 = _interopRequireDefault(_ingress);

var _projects = __webpack_require__(25);

var _projects2 = _interopRequireDefault(_projects);

var _contact = __webpack_require__(36);

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import glamorous from 'glamorous'
//
// import logoImg from '../logo.png'

// const LogoImage = glamorous.img({
//   maxWidth: '100%',
// })


exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_header2.default, null),
    _react2.default.createElement(_ingress2.default, null),
    _react2.default.createElement(_projects2.default, null),
    _react2.default.createElement(_contact2.default, null)
  );
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var post = _ref.post;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/blog/' },
      '<',
      ' Back'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h3',
      null,
      post.title
    ),
    _react2.default.createElement(
      'p',
      null,
      post.body
    )
  );
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function () {
  return _react2.default.createElement('div', null);
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _glamorous = __webpack_require__(12);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _reactHotLoader = __webpack_require__(13);

var _reactStaticRoutes = __webpack_require__(14);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

// import { Router, Link } from 'react-static'
var AppStyles = _glamorous2.default.div({
  '& a': {
    textDecoration: 'none',
    color: '#108db8',
    fontWeight: 'bold'
  }
});

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      AppStyles,
      null,
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("glamorous");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(15);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(16);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(17);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(18);

var _reactUniversalComponent = __webpack_require__(19);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error() {
    return null;
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/Users/lendai/Code/personal/maunoio/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 5)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(5);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post',
  file: '/Users/lendai/Code/personal/maunoio/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 6)), (0, _importCss3.default)('src/containers/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(6);
  },
  chunkName: function chunkName() {
    return 'src/containers/Post';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Blog',
  file: '/Users/lendai/Code/personal/maunoio/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 7)), (0, _importCss3.default)('src/containers/Blog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Blog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(7);
  },
  chunkName: function chunkName() {
    return 'src/containers/Blog';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/Users/lendai/Code/personal/maunoio/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
var templateMap = {
  t_0: t_0,
  t_1: t_1,
  t_2: t_2,
  t_3: t_3

  // Template Tree
};var templateTree = { c: { "404": { t: "t_3" }, "/": { t: "t_0" }, "blog": { c: { "post": { c: { 1: { t: "t_1" }, 2: { t: "t_1" }, 3: { t: "t_1" }, 4: { t: "t_1" }, 5: { t: "t_1" }, 6: { t: "t_1" }, 7: { t: "t_1" }, 8: { t: "t_1" }, 9: { t: "t_1" }, "10": { t: "t_1" }, "11": { t: "t_1" }, "12": { t: "t_1" }, "13": { t: "t_1" }, "14": { t: "t_1" }, "15": { t: "t_1" }, "16": { t: "t_1" }, "17": { t: "t_1" }, "18": { t: "t_1" }, "19": { t: "t_1" }, "20": { t: "t_1" }, "21": { t: "t_1" }, "22": { t: "t_1" }, "23": { t: "t_1" }, "24": { t: "t_1" }, "25": { t: "t_1" }, "26": { t: "t_1" }, "27": { t: "t_1" }, "28": { t: "t_1" }, "29": { t: "t_1" }, "30": { t: "t_1" }, "31": { t: "t_1" }, "32": { t: "t_1" }, "33": { t: "t_1" }, "34": { t: "t_1" }, "35": { t: "t_1" }, "36": { t: "t_1" }, "37": { t: "t_1" }, "38": { t: "t_1" }, "39": { t: "t_1" }, "40": { t: "t_1" }, "41": { t: "t_1" }, "42": { t: "t_1" }, "43": { t: "t_1" }, "44": { t: "t_1" }, "45": { t: "t_1" }, "46": { t: "t_1" }, "47": { t: "t_1" }, "48": { t: "t_1" }, "49": { t: "t_1" }, "50": { t: "t_1" }, "51": { t: "t_1" }, "52": { t: "t_1" }, "53": { t: "t_1" }, "54": { t: "t_1" }, "55": { t: "t_1" }, "56": { t: "t_1" }, "57": { t: "t_1" }, "58": { t: "t_1" }, "59": { t: "t_1" }, "60": { t: "t_1" }, "61": { t: "t_1" }, "62": { t: "t_1" }, "63": { t: "t_1" }, "64": { t: "t_1" }, "65": { t: "t_1" }, "66": { t: "t_1" }, "67": { t: "t_1" }, "68": { t: "t_1" }, "69": { t: "t_1" }, "70": { t: "t_1" }, "71": { t: "t_1" }, "72": { t: "t_1" }, "73": { t: "t_1" }, "74": { t: "t_1" }, "75": { t: "t_1" }, "76": { t: "t_1" }, "77": { t: "t_1" }, "78": { t: "t_1" }, "79": { t: "t_1" }, "80": { t: "t_1" }, "81": { t: "t_1" }, "82": { t: "t_1" }, "83": { t: "t_1" }, "84": { t: "t_1" }, "85": { t: "t_1" }, "86": { t: "t_1" }, "87": { t: "t_1" }, "88": { t: "t_1" }, "89": { t: "t_1" }, "90": { t: "t_1" }, "91": { t: "t_1" }, "92": { t: "t_1" }, "93": { t: "t_1" }, "94": { t: "t_1" }, "95": { t: "t_1" }, "96": { t: "t_1" }, "97": { t: "t_1" }, "98": { t: "t_1" }, "99": { t: "t_1" }, "100": { t: "t_1" } } } }, t: "t_2" } }

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

if (typeof document !== 'undefined') {
  window.reactStaticGetComponentForPath = getComponentForPath;
}

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;

      var renderProps = {
        templateMap: templateMap,
        templateTree: templateTree,
        getComponentForPath: getComponentForPath
      };
      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }
      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getComponentForPath(props.location.pathname);
          if (!Comp) {
            Comp = getComponentForPath('404');
          }
          return Comp && _react2.default.createElement(Comp, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(20);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(21);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(22);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;
        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(3);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StartSection = function StartSection() {
  return _react2.default.createElement(
    "section",
    { className: "landing-page" },
    _react2.default.createElement(
      "main",
      { className: "landing-page__main-section" },
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "i",
          null,
          "All about the"
        )
      ),
      _react2.default.createElement(
        "h1",
        { className: "header__name" },
        "Mauno Pettersson",
        _react2.default.createElement("br", null),
        "Daniel"
      ),
      _react2.default.createElement(
        "div",
        null,
        "Product Manager & Creative Developer."
      )
    )
  );
};

exports.default = StartSection;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ingress = function Ingress() {
  return _react2.default.createElement(
    "section",
    { className: "ingress-section" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "p",
        null,
        'I am a person that makes things happen',
        ".",
        _react2.default.createElement("br", null),
        'I manage people and projects, write code and explore ideas.'
      )
    )
  );
};

exports.default = Ingress;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _section = __webpack_require__(26);

var _section2 = _interopRequireDefault(_section);

var _projects = __webpack_require__(27);

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extraBrands = ['Carlsberg', 'DDB', 'North Kingdom', 'Samsung', 'Volvo', 'Adidas', 'Svenska Spel', 'Mini Cooper', 'Vodafone', 'Sony', 'Nordea', 'McDonalds'].sort();

var Projects = function Projects() {
  return _react2.default.createElement(
    _section2.default,
    { className: 'projects-section' },
    _react2.default.createElement(
      'div',
      { className: 'tighter-container' },
      _react2.default.createElement(
        'h2',
        { className: 'space-above-section projects-section-title' },
        'What I\'ve done so far'
      ),
      _projects2.default.map(function (project) {
        return _react2.default.createElement(
          'article',
          { key: project.title, className: 'project--' + project.slug },
          _react2.default.createElement(
            'figure',
            { className: 'project' },
            _react2.default.createElement(
              'div',
              { className: 'project-icon' },
              _react2.default.createElement('img', { src: project.logotype, alt: 'Dooer Logo' })
            ),
            _react2.default.createElement(
              'figcaption',
              null,
              _react2.default.createElement(
                'h2',
                null,
                project.title
              ),
              _react2.default.createElement(
                'p',
                { className: 'project__subtitle' },
                project.when && _react2.default.createElement(
                  'span',
                  null,
                  project.when
                ),
                project.when && project.subtitle ? _react2.default.createElement(
                  'span',
                  null,
                  ', '
                ) : null,
                project.subtitle && _react2.default.createElement(
                  'span',
                  null,
                  project.subtitle
                )
              ),
              _react2.default.createElement(
                'p',
                { className: 'project__description' },
                project.description
              )
            )
          )
        );
      }),
      _react2.default.createElement(
        'div',
        { style: { width: '70%', margin: '60px auto', color: '#232323', fontSize: '15px', lineHeight: '1.6', textAlign: 'center' } },
        _react2.default.createElement(
          'p',
          null,
          'During my time at Agigen I\'ve worked with a wide variety of high profile brands and agencys.',
          _react2.default.createElement('br', null),
          'A few of them are; ' + extraBrands.join(', ')
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'a',
            { href: '#contact' },
            'Get in touch'
          ),
          ' to learn more'
        )
      )
    )
  );
};

exports.default = Projects;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function Section(props) {
  var children = props.children,
      className = props.className;

  return _react2.default.createElement(
    'section',
    { className: className, style: { minHeight: '100vh', padding: '20px' } },
    _react2.default.createElement(
      'div',
      { style: { maxWidth: '1200px', width: '90%', margin: '0 auto' } },
      children
    )
  );
};

exports.default = Section;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dooerlogo = __webpack_require__(28);

var _dooerlogo2 = _interopRequireDefault(_dooerlogo);

var _agigenlogo = __webpack_require__(29);

var _agigenlogo2 = _interopRequireDefault(_agigenlogo);

var _ahlenslogo = __webpack_require__(30);

var _ahlenslogo2 = _interopRequireDefault(_ahlenslogo);

var _billogramlogo = __webpack_require__(31);

var _billogramlogo2 = _interopRequireDefault(_billogramlogo);

var _googlelogo = __webpack_require__(32);

var _googlelogo2 = _interopRequireDefault(_googlelogo);

var _uppconlogo = __webpack_require__(33);

var _uppconlogo2 = _interopRequireDefault(_uppconlogo);

var _bidsterlogo = __webpack_require__(34);

var _bidsterlogo2 = _interopRequireDefault(_bidsterlogo);

var _sjlogo = __webpack_require__(35);

var _sjlogo2 = _interopRequireDefault(_sjlogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dooer = {
  title: 'Dooer',
  slug: 'dooer',
  when: '2016 - Summer 2018',
  subtitle: 'Head of Product & Development',
  logotype: _dooerlogo2.default,
  involved: '',
  description: 'Fintech startup that acquired Agigen in 2016. Managed a team of about 30 developers, designers and team leads. The project included microservices, GraphQL and machine learning.'
};

var agigen = {
  title: 'Agigen',
  slug: 'agigen',
  when: '2008-2016',
  subtitle: 'CEO & Founder',
  logotype: _agigenlogo2.default,
  involved: '',
  description: 'Before joining Dooer I ran a digital production agency focused on high profile marketing campaigns and product development. We were fifteen employees when acquired by Dooer.'
};

var billogram = {
  title: 'Billogram',
  slug: 'billogram',
  when: '2010-2016',
  subtitle: 'CTO',
  logotype: _billogramlogo2.default,
  involved: '',
  description: 'The most successful product development project we ran at Agigen was Billogram. Billogram is an invoicing service focused on the customer experience. I worked as their CTO for the first four years, while also providing a team of consultants'
};

var ahlens = {
  title: 'Åhlens',
  slug: 'ahlens',
  when: '2015-2016',
  subtitle: 'Frontend Architect',
  logotype: _ahlenslogo2.default,
  involved: '',
  description: 'Project manager & technical architeture for the frontend for Åhlens.se, Swedens largest retail chain, as they moved into omnichannel commerce.'
};

var build = {
  title: 'Build with Chrome',
  slug: 'build-with-chrome',
  when: '2012-2014',
  subtitle: 'LEGO & Google',
  logotype: _googlelogo2.default,
  involved: '',
  description: 'Marketing campaign showcasing 3D capabilities of Google Chrome by building LEGO in the browser. I lead the Agigen team who built parts of the experience together with North Kingdom.'
};

var sj = {
  title: 'SJ.se',
  slug: 'sj',
  when: '2014-2015',
  subtitle: 'Pilot project for their new site',
  logotype: _sjlogo2.default,
  involved: '',
  description: 'I lead the techincal part together with the agency POND for creating the new version of sj.se, the site for the public train company in Sweden. A successful project that turned into their current solution.'
};

var bidster = {
  title: 'Bidster',
  slug: 'bidster',
  when: '2007-2008',
  subtitle: 'Fullstack Developer',
  logotype: _bidsterlogo2.default,
  involved: '',
  description: 'My first full-time job in tech. Developer for the startup Bidster, that did lowest-unique-bid auctions.'
};

var uppcon = {
  title: 'UppCon',
  slug: 'uppcon',
  when: '2001-2012',
  subtitle: 'Founder',
  logotype: _uppconlogo2.default,
  involved: '',
  description: 'Scandinavias largest event for youths interested in Japanese popular culture. A non-profit I founded which attracted around 5000 visitors during four days at it\'s peak'
};

exports.default = [dooer, agigen, billogram, ahlens, build, sj, uppcon, bidster];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NTIgMTU3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTIgMTU3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzExMTExMTt9Cgkuc3Qxe2ZpbGw6I0ZGMDA5OTt9Cjwvc3R5bGU+CjxnIGlkPSJQYWdlLTEiPgoJPGcgaWQ9IkRvb2VyLWxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIC02MzEuMDAwMDAwKSI+CgkJPGcgaWQ9IkxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA0NzkuMDAwMDAwKSI+CgkJCTxnIGlkPSJMb2dvVHJhbnNwYXJlbnRCbGFjayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMTUyLjAwMDAwMCkiPgoJCQkJPGcgaWQ9ImRvb2VyLWNvcHktMTktX3gyQl8tZG90Ij4KCQkJCQk8cGF0aCBpZD0iZG9vZXItY29weS0xOSIgY2xhc3M9InN0MCIgZD0iTTcuNCw0MWMtNSwwLTcuNCwyLjYtNy40LDcuOHYxMDYuNGg0MWMxOC42LDAsMjUuOC0xMS44LDI1LjgtMjUuNFY2Ni42CgkJCQkJCUM2Ni44LDUyLjQsNTkuMiw0MSw0MSw0MUg3LjR6IE0zMS43LDU4LjhjNi42LDAsOC44LDUuMiw4LjgsMTN2NTMuOGMwLDctMywxMi04LjgsMTJoLTUuNFY1OC44SDMxLjd6IE0xMTUuMyw0MAoJCQkJCQljLTIxLjYsMC0zMy40LDguNC0zMy40LDIyLjh2NzAuNGMwLDE0LjYsMTEuOCwyMywzMy40LDIzczMzLjQtOC4yLDMzLjQtMjIuOFY2Mi44QzE0OC43LDQ4LjQsMTM2LjksNDAsMTE1LjMsNDBMMTE1LjMsNDB6CgkJCQkJCSBNMTE1LjMsNTguMmM0LjYsMCw3LjIsMi4yLDcuMiw3LjZ2NjQuNmMwLDUuNC0yLjYsNy42LTcuMiw3LjZjLTQuOCwwLTcuMi0yLjYtNy4yLTcuNlY2NS44QzEwOC4xLDYwLjgsMTEwLjUsNTguMiwxMTUuMyw1OC4yCgkJCQkJCUwxMTUuMyw1OC4yeiBNMTk3LjEsNDBjLTIxLjYsMC0zMy40LDguNC0zMy40LDIyLjh2NzAuNGMwLDE0LjYsMTEuOCwyMywzMy40LDIzczMzLjQtOC4yLDMzLjQtMjIuOFY2Mi44CgkJCQkJCUMyMzAuNSw0OC40LDIxOC43LDQwLDE5Ny4xLDQwTDE5Ny4xLDQweiBNMTk3LjEsNTguMmM0LjYsMCw3LjIsMi4yLDcuMiw3LjZ2NjQuNmMwLDUuNC0yLjYsNy42LTcuMiw3LjYKCQkJCQkJYy00LjgsMC03LjItMi42LTcuMi03LjZWNjUuOEMxODkuOSw2MC44LDE5Mi4zLDU4LjIsMTk3LjEsNTguMkwxOTcuMSw1OC4yeiBNMjc5LjksNDBjLTIxLjYsMC0zMy40LDguMi0zMy40LDIyLjh2NzAuNgoJCQkJCQljMCwxNC40LDExLjgsMjIuOCwzMy40LDIyLjhzMzMuNC04LjQsMzMuNC0yMi44di0xMi42YzAtMS0wLjgtMS44LTEuOC0xLjhoLTIzYy0xLDAtMS44LDAuOC0xLjgsMS44djkuNmMwLDUtMS40LDcuNi02LjgsNy42CgkJCQkJCXMtNi44LTIuNC02LjgtOC42di0yMi44aDMwLjhjNi4yLDAsOS40LTMuMiw5LjQtOS42VjYyLjhDMzEzLjMsNDguNCwzMDEuNSw0MCwyNzkuOSw0MEwyNzkuOSw0MHogTTI3OS45LDU4LjIKCQkJCQkJYzUuNCwwLDYuOCwyLjQsNi44LDguNnYyMi42aC0xMy42VjY2LjhDMjczLjEsNjAuNiwyNzQuNSw1OC4yLDI3OS45LDU4LjJMMjc5LjksNTguMnogTTMzMC4xLDQxYy0xLDAtMS44LDAuOC0xLjgsMS44djEwMi44CgkJCQkJCWMwLDYuNCwzLjIsOS42LDkuNCw5LjZoMTUuMmMxLjEsMCwyLTAuOSwyLTJWNjYuNmMwLTYuMiwxLjgtOC40LDYuOC04LjRzNi44LDIuMiw2LjgsOC40djQuMmMwLDYuMiwzLjIsOS40LDkuNiw5LjRoMTUuMgoJCQkJCQljMSwwLDEuOC0wLjgsMS44LTEuOFY1Ni42YzAtOS40LTgtMTUuNi0xOS4yLTE1LjZjLTkuMywwLTI0LjQsMC0zMC42LDBIMzMwLjF6Ii8+CgkJCQkJPGNpcmNsZSBpZD0iZG90IiBjbGFzcz0ic3QxIiBjeD0iNDMyIiBjeT0iMjAiIHI9IjIwIi8+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMjQuMjgwMDAxIgogICBoZWlnaHQ9IjcuMDIiCiAgIGlkPSJzdmc1OTE4NyIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjEgIgogICBzb2RpcG9kaTpkb2NuYW1lPSJOZXVlcyBEb2t1bWVudCAzIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNTkxODkiPgogICAgPGNsaXBQYXRoCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIGlkPSJjbGlwUGF0aDEyOTI2Ij4KICAgICAgPHBhdGgKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgZD0ibSA0MDEuNDIxLDMxNi45OTQgMTcuODIxLDAgMCw0LjAxOCAtMTcuODIxLDAgMCwtNC4wMTggeiIKICAgICAgICAgaWQ9InBhdGgxMjkyOCIgLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI0MC4xMzI2NTMiCiAgICAgaW5rc2NhcGU6Y3g9IjEyLjEzOTk5NyIKICAgICBpbmtzY2FwZTpjeT0iMy41MSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEwMjQiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNjc4IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItNCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTQiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1OTE5MiI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS42NTA3NywtNjYwLjA4OTYpIj4KICAgIDxnCiAgICAgICBpZD0iZzEyOTIyIgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsLTEuMjUsLTE1OS4xMjM2NywxMDYyLjM1MzYpIj4KICAgICAgPGcKICAgICAgICAgaWQ9ImcxMjkyNCIKICAgICAgICAgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoMTI5MjYpIj4KICAgICAgICA8ZwogICAgICAgICAgIGlkPSJnMTI5MzAiCiAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDE1Ljc1NTIsMzE3LjkzODMpIj4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICBkPSJtIDAsMCBjIDAuMDExLC0wLjAxNSAwLjAxOCwtMC4wMjIgMC4wMjYsLTAuMDE4IDAuMDA1LDAuMDAzIDAuMDA1LDAuMDEyIDAuMDA1LDAuMDI3IDAsMCAwLDEuMzE1IDAsMS44NzYgbCAwLjUxNSwwIDAuMDAxLC0yLjc5NCAtMC40NDgsMCBjIC0wLjAzNSwwIC0wLjA3OCwwLjAyNCAtMC4wOTYsMC4wNTQgbCAtMS4zOTcsMS44MyBDIC0xLjQwNSwwLjk4OSAtMS40MTMsMC45OTcgLTEuNDIxLDAuOTkzIC0xLjQyNiwwLjk5IC0xLjQyNiwwLjk4MSAtMS40MjYsMC45NjYgbCAwLC0xLjg3NSAtMC41MTQsMCAwLDIuNzk0IDAuNDY5LDAgYyAwLjAzNywwIDAuMDU4LC0wLjAzMSAwLjA1OCwtMC4wMzEgTCAwLDAiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojZWQxYzI0O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgICAgaWQ9InBhdGgxMjkzMiIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICAgICAgPC9nPgogICAgICAgIDxnCiAgICAgICAgICAgaWQ9ImcxMjkzNCIKICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDcuMTE3MiwzMTguNzY0MykiPgogICAgICAgICAgPHBhdGgKICAgICAgICAgICAgIGQ9Im0gMCwwIGMgMCwtMC4wMzUgLTAuMDI5LC0wLjA2MyAtMC4wNjMsLTAuMDYzIGwgLTEuMzAyLDAgYyAtMC4wMzUsMCAtMC4wNjMsMC4wMjggLTAuMDYzLDAuMDYzIGwgMCwxLjA1OCAtMC41MTQsMCAxMGUtNCwtMi43OTUgMC41MTMsMCAwLDEuMTQ0IGMgMCwwLjAzNCAwLjAyOCwwLjA2MyAwLjA2MywwLjA2MyBsIDEuMzAyLDAgQyAtMC4wMjksLTAuNTMgMCwtMC41NTkgMCwtMC41OTMgbCAwLC0xLjE0MyAwLjUxMywwIDAsMi43OTQgTCAwLDEuMDU4IDAsMCIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNlZDFjMjQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBpZD0icGF0aDEyOTM2IgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcKICAgICAgICAgICBpZD0iZzEyOTM4IgogICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMC4zMjMxLDMxNy40OTg0KSI+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgZD0iTSAwLDAgLTEuMjU3LDAgQyAtMS4yOTEsMCAtMS4zMiwwLjAyOSAtMS4zMiwwLjA2MyBsIDAsMi4yNjEgLTAuNTEyLDAgMCwtMi43OTQgMS44OTUsMCAwLDAuNDA3IEMgMC4wNjMsLTAuMDI4IDAuMDM1LDAgMCwwIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2VkMWMyNDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGlkPSJwYXRoMTI5NDAiCiAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgICAgIDwvZz4KICAgICAgICA8ZwogICAgICAgICAgIGlkPSJnMTI5NDIiCiAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAyLjU2NTEsMzE4LjIyKSI+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgZD0ibSAwLDAgMC40MDYsMC44ODQgYyAwLDAgMC4wMjMsMC4wNiAwLjA2OCwwLjA2IDAuMDQ0LDAgMC4wNjgsLTAuMDU5IDAuMDY4LC0wLjA1OSBMIDAuOTUxLDAgMCwwIHogTSAwLjc3NCwxLjcyNCBDIDAuNjkzLDEuNjQzIDAuNTg2LDEuNTk5IDAuNDczLDEuNTk5IGMgLTAuMjM1LDAgLTAuNDI2LDAuMTkxIC0wLjQyNiwwLjQyNiAwLDAuMTE0IDAuMDQ0LDAuMjIxIDAuMTI1LDAuMzAxIDAuMDgsMC4wOCAwLjE4NywwLjEyNSAwLjMwMSwwLjEyNSAwLjExMywwIDAuMjIsLTAuMDQ1IDAuMzAxLC0wLjEyNSAwLjA4LC0wLjA4IDAuMTI1LC0wLjE4NyAwLjEyNSwtMC4zMDEgMCwtMC4xMTQgLTAuMDQ1LC0wLjIyMSAtMC4xMjUsLTAuMzAxIG0gLTEuOTE4LC0yLjkxNiAwLjU5NSwwIDAuMjcsMC41NzUgYyAwLDAgMC4wMzIsMC4wODggMC4wNzMsMC4xMTcgMC4wNDIsMC4wMjkgMC4xMTYsMC4wMyAwLjExNiwwLjAzIGwgMS4xMDYsMCBjIDAsMCAwLjA4NSwwLjAwOSAwLjEzLC0wLjAyNyAwLjA0NSwtMC4wMzYgMC4wODEsLTAuMTEzIDAuMDgxLC0wLjExMyBsIDAuMjczLC0wLjU4MiAwLjU4NSwwIC0xLjIwMiwyLjU2NCBDIDAuOTM0LDEuNDA0IDAuOTcyLDEuNDM5IDEuMDE1LDEuNDgyIDEuMTYsMS42MjcgMS4yNCwxLjgyIDEuMjQsMi4wMjUgMS4yNCwyLjQ0OCAwLjg5NiwyLjc5MiAwLjQ3MywyLjc5MiAwLjI2NywyLjc5MiAwLjA3NSwyLjcxMyAtMC4wNywyLjU2OCAtMC4yMTUsMi40MjIgLTAuMjk1LDIuMjMgLTAuMjk1LDIuMDI1IGMgMCwtMC4yMDUgMC4wOCwtMC4zOTggMC4yMjUsLTAuNTQzIDAuMDQsLTAuMDQgMC4wOTMsLTAuMDc1IDAuMTM5LC0wLjEwNSBsIC0xLjIxMywtMi41NjkiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojZWQxYzI0O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgICAgaWQ9InBhdGgxMjk0NCIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICAgICAgPC9nPgogICAgICAgIDxnCiAgICAgICAgICAgaWQ9ImcxMjk0NiIKICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTMuMDMyMSwzMTcuNDk3NikiPgogICAgICAgICAgPHBhdGgKICAgICAgICAgICAgIGQ9Ik0gMCwwIC0xLjQzNywwIEMgLTEuNDcxLDAgLTEuNSwwLjAyOCAtMS41LDAuMDYzIGwgMCwwLjY3MyAxLjA3LDAgYyAwLjAzNSwwIDAuMDYzLDAuMDI5IDAuMDYzLDAuMDYzIGwgMCwwLjM0MSBjIDAsMC4wMzUgLTAuMDI4LDAuMDYzIC0wLjA2MywwLjA2MyBsIC0xLjA3LDAgMCwwLjU5IGMgMCwwLjAzNSAwLjAyOCwwLjA2MyAwLjA2MywwLjA2MyBsIDEuMzUsMCBjIDAuMDM0LDAgMC4wNjMsMC4wMjkgMC4wNjMsMC4wNjMgbCAwLDAuNDA2IC0xLjAxOSwwIDAuOTgzLDAuNTk1IC0wLjY3OSwwIC0wLjY0OSwtMC41OTUgLTAuNjI0LDAgMCwtMi43OTUgMi4wNzUsMCAwLDAuNDA3IEMgMC4wNjMsLTAuMDI5IDAuMDM1LDAgMCwwIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2VkMWMyNDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGlkPSJwYXRoMTI5NDgiCiAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgICAgIDwvZz4KICAgICAgICA8ZwogICAgICAgICAgIGlkPSJnMTI5NTAiCiAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDE4LjE1NTQsMzE2Ljk5NDQpIj4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICBkPSJtIDAsMCBjIC0wLjU2OCwwIC0wLjk5NCwwLjIxIC0xLjI1MSwwLjQ3OSBsIDAuMzEzLDAuMzY4IGMgMC4yNDQsLTAuMjMxIDAuNTUsLTAuMzcgMC45MDMsLTAuMzcgMC4yMzYsMCAwLjU0OSwwLjA2MSAwLjU0OSwwLjM0OCAwLDAuMjY2IC0wLjMwOCwwLjMwNSAtMC41NzUsMC4zNjIgLTAuMTcxLDAuMDM2IC0xLjA1OSwwLjE3NiAtMS4wNTksMC44NDYgMCwwLjU1NiAwLjU1MiwwLjg0NCAxLjA5NywwLjg0NCAwLjMzOSwwIDAuNzYzLC0wLjA4MiAxLjAyNiwtMC4zMTEgTCAwLjc1OSwyLjE3NCBDIDAuNTMyLDIuMzUxIDAuMTgsMi40MTMgLTAuMDIzLDIuNDEzIGMgLTAuMTY0LDAgLTAuNTI4LC0wLjA3IC0wLjUyOCwtMC4zMzEgMCwtMC4yMzYgMC4zMTYsLTAuMzM5IDAuNjQ0LC0wLjM5NiBDIDAuODY5LDEuNTUzIDEuMDg3LDEuMjI3IDEuMDg3LDAuODQgMS4wODcsMC4yOTYgMC41ODksMCAwLDAiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojZWQxYzI0O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgICAgaWQ9InBhdGgxMjk1MiIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDYgNTIuMiI+PHBhdGggZD0iTTUxLjggNDEuNmMtNy4xIDAtMTIuOC01LjgtMTIuOC0xMi44di04LjZjMC03LjEtNS44LTEyLjgtMTIuOC0xMi44LTcuMSAwLTEyLjggNS44LTEyLjggMTIuOHYxLjdsLTEuNC40Yy0zLjUuOS02IDQuMS02IDcuNyAwIDQuNCAzLjYgNy45IDcuOSA3LjloMjAuOWMxIDAgMS44LjggMS44IDEuOHMtLjggMS44LTEuOCAxLjhIMTRjLTYuNCAwLTExLjYtNS4yLTExLjYtMTEuNiAwLTQuOCAzLTkuMSA3LjQtMTAuOC41LTguNiA3LjctMTUuNSAxNi41LTE1LjUgOS4xIDAgMTYuNSA3LjQgMTYuNSAxNi41djguNmMwIDUuMSA0LjEgOS4yIDkuMiA5LjJzOS4yLTQuMSA5LjItOS4yLTQuMS05LjItOS4yLTkuMmMtMSAwLTIgLjItMi45LjUtMSAuMy0yLS4yLTIuMy0xLjEtLjMtMSAuMi0yIDEuMS0yLjMgMS4zLS40IDIuNy0uNyA0LjEtLjcgNy4xIDAgMTIuOCA1LjggMTIuOCAxMi44LS4xIDcuMS01LjkgMTIuOS0xMyAxMi45em00MC45LTguM2MwIDEuNi0uMSAyLjQtLjQgMy4yLTEgMy4xLTMuOSA1LjQtNy40IDUuNC00LjMgMC03LjgtMy4zLTcuOC03LjZWMTcuOWMwLS44LjYtMS41IDEuNS0xLjVoLjVjLjggMCAxLjUuNiAxLjUgMS41djYuM2MwIC4yLjEuMy4zLjMuMSAwIC4xIDAgLjItLjEuNy0uNCAyLjEtMS4yIDMuNy0xLjIgMy41IDAgNi41IDIuMyA3LjQgNS40LjIuOC40IDEuNi40IDMuMnYxLjVoLjF6TTg5LjEgMzJjMC0xLjMgMC0xLjgtLjItMi41LS41LTEuOC0yLjEtMy4xLTQtMy4xLTEuMyAwLTIuNC42LTMuNiAxLjMtLjQuMi0uNi42LS42IDF2NS44YzAgMi4zIDEuOSA0LjIgNC4yIDQuMiAxLjkgMCAzLjUtMS4zIDQtMy4xLjItLjYuMi0xLjEuMi0yLjVWMzJ6bTExLjEtMTMuOWMwIDEuMi0xIDIuMi0yLjIgMi4yaC0uM2MtMS4yIDAtMi4yLTEtMi4yLTIuMnYtLjNjMC0xLjIgMS0yLjIgMi4yLTIuMmguM2MxLjIgMCAyLjIgMSAyLjIgMi4ydi4zem0tLjYgMjEuOGMwIC44LS42IDEuNS0xLjUgMS41aC0uNWMtLjggMC0xLjUtLjctMS41LTEuNVYyNS4yYzAtLjguNy0xLjUgMS41LTEuNWguNWMuOCAwIDEuNS43IDEuNSAxLjV2MTQuN3ptMTcuNi0zLjRjLS4yLS44LS40LTEuNS0uNC0zLjJ2LTEuNWMwLTEuNi4xLTIuNC40LTMuMiAxLTMuMSAzLjktNS40IDcuNC01LjQgMy41IDAgNi41IDIuMyA3LjQgNS40LjIuOC40IDEuNi40IDMuMnYxLjVjMCAxLjYtLjEgMi40LS40IDMuMi0xIDMuMS0zLjkgNS40LTcuNCA1LjQtMy41IDAtNi40LTIuMy03LjQtNS40em0zLjQtN2MtLjIuNi0uMiAxLjEtLjIgMi41djEuMWMwIDEuMyAwIDEuOC4yIDIuNS41IDEuOCAyLjEgMy4xIDQgMy4xczMuNS0xLjMgNC0zLjFjLjItLjYuMi0xLjEuMi0yLjVWMzJjMC0xLjMgMC0xLjgtLjItMi41LS41LTEuOC0yLjEtMy4xLTQtMy4xcy0zLjUgMS40LTQgMy4xem0xNC41IDdjLS4yLS44LS40LTEuNS0uNC0zLjJ2LTEuNWMwLTEuNi4xLTIuNC40LTMuMiAxLTMuMSAzLjktNS40IDcuNC01LjQgMS44IDAgMi45LjcgMy43IDEuMWwuOS42Yy4xIDAgLjIuMS4yLjEuMiAwIC4zLS4xLjMtLjIuMS0uNi42LTEuMSAxLjMtMS4xLjggMCAxLjMuNiAxLjMgMS4zdjE3LjNjMCAzLjUtMi44IDYuMi02LjMgNi4yaC0yLjdjLS44IDAtMS41LS43LTEuNS0xLjV2LS4yYzAtLjguNy0xLjUgMS41LTEuNWgyLjdjMS41IDAgMi43LTEuMiAyLjctMi43di0xLjdjMC0uMi0uMS0uMy0uMy0uMy0uMSAwLS4xIDAtLjIuMS0uNS40LTIuMSAxLjItMy43IDEuMi0zLjQgMC02LjQtMi4zLTcuMy01LjR6bTMuNC03Yy0uMi42LS4yIDEuMS0uMiAyLjV2MS4xYzAgMS4zIDAgMS44LjIgMi41LjUgMS44IDIuMSAzLjEgNCAzLjEuOSAwIDEuNy0uMyAyLjYtLjhsMS4xLS42Yy41LS4zLjUtLjUuNS0uOHYtNy43YzAtLjQgMC0uNS0uNS0uOC0uOS0uNS0yLjUtMS41LTMuNy0xLjUtMS45LS4xLTMuNSAxLjMtNCAzem0xOC45LS44djExLjJjMCAuOC0uNiAxLjUtMS41IDEuNWgtLjVjLS44IDAtMS41LS43LTEuNS0xLjVWMjVjMC0uOC41LTEuMyAxLjMtMS4zLjcgMCAxLjIuNCAxLjMgMS4xIDAgLjIuMS4yLjMuMi4xIDAgLjEgMCAuMi0uMWwuOS0uNmMuOC0uNCAxLjktMS4xIDMuNy0xLjEuOCAwIDEuNS43IDEuNSAxLjV2LjJjMCAuOC0uNyAxLjUtMS41IDEuNS0xLjMgMC0yLjguOS0zLjcgMS41LS41LjMtLjUuNC0uNS44em0yMSAxMS40YzAgLjgtLjUgMS4zLTEuMyAxLjNzLTEuMy0uNi0xLjMtMS4zYzAtLjItLjEtLjMtLjMtLjMtLjEgMC0uMSAwLS41LjItMSAuNy0yLjUgMS45LTQuOCAxLjloLS4zYy0zLjEgMC01LjctMi40LTUuNy01LjZ2LS4yYzAtMy4yIDIuNi01LjYgNS43LTUuNmg0LjNjLjQgMCAuNy0uMy43LS43VjI5YzAtMS41LTEuMi0yLjctMi43LTIuN2gtLjRjLTEuNCAwLTMuMSAxLjItNC4zIDEuOS0uMi4yLS41LjItLjguMi0uNSAwLTEtLjItMS4zLS43bC0uMi0uM2MtLjItLjItLjItLjUtLjItLjggMC0uNS4yLTEgLjctMS4zIDItMS4yIDMuNy0yLjIgNi4xLTIuMmguNGMzLjUgMCA2LjMgMi43IDYuMyA2LjJsLS4xIDEwLjh6bS0zLjYtNS45YzAtLjQtLjMtLjctLjctLjdoLTQuM2MtMS4yIDAtMi4xIDEtMi4xIDIuMnYuOGMwIDEuMi45IDIuMiAyLjEgMi4yaC43YzEuMiAwIDIuMy0uNiAzLjMtMS4ybC41LS4zYy41LS4zLjUtLjUuNS0uOHYtMi4yem0yOC43IDUuN2MwIC44LS43IDEuNS0xLjUgMS41aC0uNWMtLjggMC0xLjUtLjctMS41LTEuNVYyOS4xYzAtMS41LTEuMi0yLjctMi43LTIuNy0uNyAwLTEuNS40LTIuNC45LS40LjMtLjUuNC0uNS42LjEuNS4xLjkuMSAxLjN2MTAuNmMwIC44LS43IDEuNS0xLjUgMS41aC0uNWMtLjggMC0xLjUtLjctMS41LTEuNVYyOS4xYzAtMS41LTEuMi0yLjctMi43LTIuNy0uNiAwLTEuNC4zLTIuMi44LS41LjQtLjUuNS0uNS44djExLjhjMCAuOC0uNiAxLjUtMS41IDEuNWgtLjVjLS44IDAtMS41LS43LTEuNS0xLjVWMjVjMC0uOC41LTEuMyAxLjMtMS4zLjUgMCAuOS4zIDEuMi43LjEuMS4xLjIuMi4ycy4yIDAgLjMtLjFjLjktLjYgMS45LTEuMiAzLjItMS4yIDEuNiAwIDMuMS41IDQuMiAxLjYuMS4xLjIuMS4yLjEuMSAwIC4yIDAgLjMtLjEuMi0uMS41LS4zIDEtLjYuOS0uNSAxLjktMSAzLjMtMSAzLjUgMCA2LjMgMi44IDYuMyA2LjJ2MTAuNGgtLjF6bS05Ni44IDBjMCAuOC0uNiAxLjUtMS41IDEuNWgtLjVjLS44IDAtMS41LS43LTEuNS0xLjV2LTIyYzAtLjguNy0xLjUgMS41LTEuNWguNWMuOCAwIDEuNS43IDEuNSAxLjV2MjJ6bTcuMSAwYzAgLjgtLjYgMS41LTEuNSAxLjVoLS41Yy0uOCAwLTEuNS0uNy0xLjUtMS41di0yMmMwLS44LjctMS41IDEuNS0xLjVoLjVjLjggMCAxLjUuNyAxLjUgMS41djIyeiIgZmlsbD0iIzM3YmZiZiIvPjwvc3ZnPg=="

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjcyIDkyIiB3aWR0aD0iMjcyIiBoZWlnaHQ9IjkyIj48cGF0aCBmaWxsPSIjRUE0MzM1IiBkPSJNMTE1Ljc1IDQ3LjE4YzAgMTIuNzctOS45OSAyMi4xOC0yMi4yNSAyMi4xOHMtMjIuMjUtOS40MS0yMi4yNS0yMi4xOEM3MS4yNSAzNC4zMiA4MS4yNCAyNSA5My41IDI1czIyLjI1IDkuMzIgMjIuMjUgMjIuMTh6bS05Ljc0IDBjMC03Ljk4LTUuNzktMTMuNDQtMTIuNTEtMTMuNDRTODAuOTkgMzkuMiA4MC45OSA0Ny4xOGMwIDcuOSA1Ljc5IDEzLjQ0IDEyLjUxIDEzLjQ0czEyLjUxLTUuNTUgMTIuNTEtMTMuNDR6Ii8+PHBhdGggZmlsbD0iI0ZCQkMwNSIgZD0iTTE2My43NSA0Ny4xOGMwIDEyLjc3LTkuOTkgMjIuMTgtMjIuMjUgMjIuMThzLTIyLjI1LTkuNDEtMjIuMjUtMjIuMThjMC0xMi44NSA5Ljk5LTIyLjE4IDIyLjI1LTIyLjE4czIyLjI1IDkuMzIgMjIuMjUgMjIuMTh6bS05Ljc0IDBjMC03Ljk4LTUuNzktMTMuNDQtMTIuNTEtMTMuNDRzLTEyLjUxIDUuNDYtMTIuNTEgMTMuNDRjMCA3LjkgNS43OSAxMy40NCAxMi41MSAxMy40NHMxMi41MS01LjU1IDEyLjUxLTEzLjQ0eiIvPjxwYXRoIGZpbGw9IiM0Mjg1RjQiIGQ9Ik0yMDkuNzUgMjYuMzR2MzkuODJjMCAxNi4zOC05LjY2IDIzLjA3LTIxLjA4IDIzLjA3LTEwLjc1IDAtMTcuMjItNy4xOS0xOS42Ni0xMy4wN2w4LjQ4LTMuNTNjMS41MSAzLjYxIDUuMjEgNy44NyAxMS4xNyA3Ljg3IDcuMzEgMCAxMS44NC00LjUxIDExLjg0LTEzdi0zLjE5aC0uMzRjLTIuMTggMi42OS02LjM4IDUuMDQtMTEuNjggNS4wNC0xMS4wOSAwLTIxLjI1LTkuNjYtMjEuMjUtMjIuMDkgMC0xMi41MiAxMC4xNi0yMi4yNiAyMS4yNS0yMi4yNiA1LjI5IDAgOS40OSAyLjM1IDExLjY4IDQuOTZoLjM0di0zLjYxaDkuMjV6bS04LjU2IDIwLjkyYzAtNy44MS01LjIxLTEzLjUyLTExLjg0LTEzLjUyLTYuNzIgMC0xMi4zNSA1LjcxLTEyLjM1IDEzLjUyIDAgNy43MyA1LjYzIDEzLjM2IDEyLjM1IDEzLjM2IDYuNjMgMCAxMS44NC01LjYzIDExLjg0LTEzLjM2eiIvPjxwYXRoIGZpbGw9IiMzNEE4NTMiIGQ9Ik0yMjUgM3Y2NWgtOS41VjNoOS41eiIvPjxwYXRoIGZpbGw9IiNFQTQzMzUiIGQ9Ik0yNjIuMDIgNTQuNDhsNy41NiA1LjA0Yy0yLjQ0IDMuNjEtOC4zMiA5LjgzLTE4LjQ4IDkuODMtMTIuNiAwLTIyLjAxLTkuNzQtMjIuMDEtMjIuMTggMC0xMy4xOSA5LjQ5LTIyLjE4IDIwLjkyLTIyLjE4IDExLjUxIDAgMTcuMTQgOS4xNiAxOC45OCAxNC4xMWwxLjAxIDIuNTItMjkuNjUgMTIuMjhjMi4yNyA0LjQ1IDUuOCA2LjcyIDEwLjc1IDYuNzIgNC45NiAwIDguNC0yLjQ0IDEwLjkyLTYuMTR6bS0yMy4yNy03Ljk4bDE5LjgyLTguMjNjLTEuMDktMi43Ny00LjM3LTQuNy04LjIzLTQuNy00Ljk1IDAtMTEuODQgNC4zNy0xMS41OSAxMi45M3oiLz48cGF0aCBmaWxsPSIjNDI4NUY0IiBkPSJNMzUuMjkgNDEuNDFWMzJINjdjLjMxIDEuNjQuNDcgMy41OC40NyA1LjY4IDAgNy4wNi0xLjkzIDE1Ljc5LTguMTUgMjIuMDEtNi4wNSA2LjMtMTMuNzggOS42Ni0yNC4wMiA5LjY2QzE2LjMyIDY5LjM1LjM2IDUzLjg5LjM2IDM0LjkxLjM2IDE1LjkzIDE2LjMyLjQ3IDM1LjMuNDdjMTAuNSAwIDE3Ljk4IDQuMTIgMjMuNiA5LjQ5bC02LjY0IDYuNjRjLTQuMDMtMy43OC05LjQ5LTYuNzItMTYuOTctNi43Mi0xMy44NiAwLTI0LjcgMTEuMTctMjQuNyAyNS4wMyAwIDEzLjg2IDEwLjg0IDI1LjAzIDI0LjcgMjUuMDMgOC45OSAwIDE0LjExLTMuNjEgMTcuMzktNi44OSAyLjY2LTIuNjYgNC40MS02LjQ2IDUuMS0xMS42NWwtMjIuNDkuMDF6Ii8+PC9zdmc+Cg=="

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxODAiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Igp2aWV3Qm94PSIwIDAgMTMzLjkgMTIzLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEzMy45IDEyMy41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMjUuNywyNC41Yy01LjQtMTAtMTIuOC0xOC4xLTIyLjItMjQuM2wtOSwxMy43YzcuMSw0LjcsMTIuNywxMC45LDE3LDE4LjZjNC4yLDcuNiw2LjIsMTUuNiw2LjIsMjQKYzAsMTMuOS01LDI1LjgtMTUsMzUuN3MtMjEuOSwxNS0zNS43LDE1Yy05LjgsMC0xOC42LTIuNS0yNi40LTcuNWMtNS40LTQuMS05LjItOS41LTExLjEtMTYuMmMtMi41LTguNC0xLjYtMTYuNiwyLjctMjQuNQpjNC4zLTcuOCwxMC43LTEzLjEsMTkuMS0xNS41YzIuOC0wLjgsNS43LTEuMyw4LjYtMS4zYzIuNSwwLDUuMSwwLjMsNy43LDFjNS41LDEuNCwxMC41LDMuOSwxNC44LDcuNmwxLDAuOGwwLjgtMWw4LjgtMTAuMmwwLjktMQpsLTEtMC44Yy02LjQtNS40LTEzLjctOS4yLTIxLjctMTEuMWMtMy43LTAuOC03LjQtMS4zLTExLTEuM2MtNC41LDAtOSwwLjctMTMuMywxLjljLTEyLjUsMy43LTIyLjEsMTEuNS0yOC41LDIzLjMKYy0wLjYsMS4yLTEuMiwyLjQtMS44LDMuNmMwLjItOCwyLjMtMTUuNSw2LjMtMjIuN2M0LjMtNy43LDEwLTEzLjksMTcuMS0xOC42TDMwLjksMGMtOS41LDYuMi0xNywxNC4zLTIyLjUsMjQuNApDMi44LDM0LjUsMCw0NS4yLDAsNTYuNGMwLDE4LjMsNi42LDM0LjEsMTkuOCw0Ny4zQzMzLDExNyw0OC43LDEyMy41LDY3LDEyMy41YzE4LjMsMCwzNC4xLTYuNiw0Ny4yLTE5LjcKYzEzLjEtMTMuMiwxOS42LTI4LjksMTkuNi00Ny4zQzEzMy45LDQ1LjIsMTMxLjIsMzQuNiwxMjUuNywyNC41eiIvPgo8L3N2Zz4K"

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bidsterlogo.a7555168.png";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnDQogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iDQogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIg0KICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIg0KICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIg0KICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0iTGF5ZXJfMSINCiAgIHg9IjBweCINCiAgIHk9IjBweCINCiAgIHdpZHRoPSI1NTYiDQogICBoZWlnaHQ9IjM4MSINCiAgIHZpZXdCb3g9IjAgMCA1NTYgMzgxIg0KICAgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTk1IDg0MiINCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGgNCiAgIHN0eWxlPSJmaWxsOiMyMzFGMjAiDQogICBpZD0icGF0aDMxOS0wIg0KICAgZD0ibSAzMDcuNTAyLDc0MS42NDQgYyAtMC43NjgsNS4zNDMgLTUuNDkzLDUuNTgxIC04LjY1NSw1LjQwNCAtMC4yMjMsLTAuMDEyIC0wLjQ1NywtMC4wNTIgLTAuNjQ2LC0wLjA3NCAtMC4yOTcsLTAuMDM0IC0wLjMxOCwtMC4zNzEgLTAuMDYzLC0wLjQ4MiAwLjY0MiwtMC4yODIgMy44MDksLTEuOTk2IDQuMTUzLC01LjYyNSAwLjA3MSwtMC43NDkgMC4wNjksLTEuNzkzIDAuMDY5LC0xLjk5NSBWIDcyNC44NSBoIDUuMjI5IHYgMTQuMjExIGMgMTBlLTQsMS42NTkgLTAuMDQzLDIuMjc5IC0wLjA4NywyLjU4MyINCiAgIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8xMF8tMSkiDQogICB0cmFuc2Zvcm09Im1hdHJpeCg3LjcwMzM1MDIsMCwwLDcuNzAzMzUwMiwtMjAwMy4yNzE2LC01NTgwLjc4NDUpIiAvPjxwYXRoDQogICBzdHlsZT0iZmlsbDojMjMxRjIwIg0KICAgaWQ9InBhdGgzMjEtOSINCiAgIGQ9Im0gMzAxLjcxNCw3NTYuNTg1IGMgMC4yMTcsLTUuNDggNC43MDksLTkuMjU0IDExLjY1OCwtOS4yNTQgNC44MTUsMCAxNi41NzUsMCAxOC42NzgsMCAwLjI1NywwIDAuMzIxLDAuMTY0IDAuMTc4LDAuNDM3IC0wLjY4MSwxLjI5NiAtMi44NzEsNS4wMjEgLTUuNTgzLDUuMDIxIDAsMCAtOC42MDgsMCAtMTAuODcxLDAgLTYuMDA2LDAgLTEwLjAyNywzLjI3MyAtMTEuMTc5LDYuNjM4IC0wLjIwOSwwLjYxMyAtMC44MDEsMi4wNzUgLTEuNjU1LDIuMDc1IC0xLjE2OSwwIC0xLjM1NiwtMS41ODEgLTEuMjI2LC00LjkxNyINCiAgIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8xMF8tMSkiDQogICB0cmFuc2Zvcm09Im1hdHJpeCg3LjcwMzM1MDIsMCwwLDcuNzAzMzUwMiwtMjAwMy4yNzE2LC01NTgwLjc4NDUpIiAvPjxwYXRoDQogICBzdHlsZT0iZmlsbDojMjMxRjIwIg0KICAgaWQ9InBhdGgzMjMtNCINCiAgIGQ9Im0gMjkwLjU2Niw3NTYuNTg1IGMgLTAuMjE3LC01LjQ4IC00LjcxLC05LjI1NCAtMTEuNjU5LC05LjI1NCAtNC44MTUsMCAtMTYuNTc0LDAgLTE4LjY3NywwIC0wLjI1NywwIC0wLjMyMSwwLjE2NCAtMC4xNzgsMC40MzcgMC42NzksMS4yOTYgMi44NzIsNS4wMjEgNS41ODIsNS4wMjEgMCwwIDguNjA5LDAgMTAuODcyLDAgNi4wMDYsMCAxMC4wMjgsMy4yNzMgMTEuMTgsNi42MzggMC4yMDksMC42MTMgMC43OTksMi4wNzUgMS42NTMsMi4wNzUgMS4xNzMsMCAxLjM1OCwtMS41ODEgMS4yMjcsLTQuOTE3Ig0KICAgY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzEwXy0xKSINCiAgIHRyYW5zZm9ybT0ibWF0cml4KDcuNzAzMzUwMiwwLDAsNy43MDMzNTAyLC0yMDAzLjI3MTYsLTU1ODAuNzg0NSkiIC8+PHBhdGgNCiAgIHN0eWxlPSJmaWxsOiMyMzFGMjAiDQogICBpZD0icGF0aDMyNS04Ig0KICAgZD0ibSAyOTYuMTQsNzY3LjkzMiBjIDMuOTExLDAgNy44MzcsLTIuMDYzIDkuNDgxLC00LjMxMyAyLjAzNiwtMi43OTIgMi40MDUsLTcuODYyIDExLjUyMSwtNy44NjIgaCA4LjEyMyBjIDAsMCAwLjI2LDAuMTM3IDAuMTM5LDAuMzY2IC0wLjY4NiwxLjI3OCAtMy4xNDcsNS40OTUgLTUuOTI4LDUuNDk1IGggLTMuNzQ3IGMgLTIuMDIyLDAgLTIuNDk0LDEuMzg2IC0zLjQ2NywzLjAxMyAtMi44NjIsNS41MzMgLTguNTE0LDkuMjkxIC0xNi4xMjMsOS4yOTEgLTcuNjA5LDAgLTEzLjI1OSwtMy43NTggLTE2LjEyMywtOS4yOTEgLTAuOTczLC0xLjYyNyAtMS40NDQsLTMuMDEzIC0zLjQ2NywtMy4wMTMgaCAtMy43NDQgYyAtMi43ODMsMCAtNS4yNDUsLTQuMjE3IC01LjkyOCwtNS40OTUgLTAuMTI0LC0wLjIyOSAwLjEzNCwtMC4zNjYgMC4xMzQsLTAuMzY2IGggOC4xMjQgYyA5LjExNywwIDkuNDg2LDUuMDcgMTEuNTIzLDcuODYyIDEuNjQzLDIuMjQ5IDUuNTcyLDQuMzEzIDkuNDgyLDQuMzEzIg0KICAgY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzEwXy0xKSINCiAgIHRyYW5zZm9ybT0ibWF0cml4KDcuNzAzMzUwMiwwLDAsNy43MDMzNTAyLC0yMDAzLjI3MTYsLTU1ODAuNzg0NSkiIC8+PHBhdGgNCiAgIHN0eWxlPSJmaWxsOiMyMzFGMjAiDQogICBpZD0icGF0aDMyNy04Ig0KICAgZD0ibSAyOTguMDA1LDcyNS41MzkgdiAzLjQxOSBjIDAsMCAtMi43MSwtMS4zMTMgLTQuNzU4LC0xLjMxMyAtMi4wNDIsMCAtMy41ODYsMC43MjYgLTMuNTg2LDIuMjI5IDAsMS44NjcgMy40NzcsMi43NDcgNC43NTQsMy4xOTEgMS4yNzcsMC40NDMgNS4wNTgsMi4xMDYgNS4wNTgsNS40ODkgMCwzLjU4OCAtMS45NzIsNi44OCAtOC44MTIsNi44OCAtMy42MDIsMCAtNS42NTksLTEuMTE3IC01LjY1OSwtMS4xMTcgdiAtMy4zODIgYyAxLjE4OSwwLjQ0NyAzLjg2NCwxLjExNiA1LjI0MSwxLjExNiAyLjM0MywwIDMuNzU1LC0wLjUwNSAzLjc1NSwtMi4wMiAwLC0xLjkxOSAtMy42NzIsLTIuOTM2IC01LjA5LC0zLjUyIC0xLjQxOSwtMC41ODQgLTQuNjczLC0xLjk2MyAtNC42NzMsLTUuODg3IDAsLTQuMzc0IDMuOTIyLC02LjE2NCA4LjU5MywtNi4xNjQgMy4xNzQsMC4wMDIgNS4xNzcsMS4wNzkgNS4xNzcsMS4wNzkiDQogICBjbGlwLXBhdGg9InVybCgjU1ZHSURfMTBfLTEpIg0KICAgdHJhbnNmb3JtPSJtYXRyaXgoNy43MDMzNTAyLDAsMCw3LjcwMzM1MDIsLTIwMDMuMjcxNiwtNTU4MC43ODQ1KSIgLz48L3N2Zz4="

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactSection = function ContactSection() {
  return _react2.default.createElement(
    "section",
    { className: "contact-secion", id: "contact" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "main",
        { className: "conttact-secion__main-section" },
        _react2.default.createElement(
          "h2",
          { className: "space-above-section" },
          "Get in touch"
        ),
        _react2.default.createElement(
          "p",
          null,
          "The easiest way is to send an email to ",
          _react2.default.createElement(
            "a",
            { href: "mailto:daniel@mauno.io" },
            "daniel@mauno.io"
          ),
          ",",
          _react2.default.createElement("br", null),
          "a text message to ",
          _react2.default.createElement(
            "a",
            { href: "tel:46733445315" },
            "+46 733 44 5315"
          ),
          ",",
          _react2.default.createElement("br", null),
          "or hit me up on ",
          _react2.default.createElement(
            "a",
            { href: "https://www.linkedin.com/in/danielmaunopettersson/", target: "_blank" },
            "LinkedIn"
          ),
          _react2.default.createElement("br", null),
          "\uD83D\uDC4B"
        )
      )
    )
  );
};

exports.default = ContactSection;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.667e714b.js.map