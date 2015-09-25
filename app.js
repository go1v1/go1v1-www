(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "classic": {
    "name": "Classic",
    "rules": {
      "kill": 3,
      "cs": 100,
      "turret": 1
    }
  },
  "first_blood": {
    "name": "First Blood",
    "rules": {
      "kill": 1
    }
  },
  "display_of_skill": {
    "name": "Time for a true display of skill",
    "rules": {
      "kill": 1
    },
    "restrictions": {
      "item": {
        "condition": "forbidden",
        "value": [
          "2003",
          "2004",
          "2009",
          "2010"
        ]
      }
    }
  },
  "inferior_skills": {
    "name": "Your skills are inferior!",
    "rules": {
      "kill": {
        "creator": 3,
        "target": 1
      }
    }
  }
}

},{}],2:[function(require,module,exports){
module.exports={
  "item": {
    "name": "Item",
    "values": "Items"
  },
  "duration": {
    "name": "Time",
    "values": [0, 1800]
  },
  "damages": {
    "name": "Damage",
    "values": "Damages"
  },
  "role": {
    "name": "Role",
    "values": "Roles"
  },
  "champion": {
    "name": "Champion",
    "values": "Champions"
  }
}

},{}],3:[function(require,module,exports){
module.exports={
  "kill": {
    "name": "Kill",
    "values": [0, 10]
  },
  "cs": {
    "name": "CS",
    "values": [0, 300]
  },
  "turret": {
    "name": "Turret",
    "values": [0, 4]
  }
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Component = (function () {
  function Component() {
    babelHelpers.classCallCheck(this, Component);

    this.component = {};
  }

  babelHelpers.createClass(Component, [{
    key: "on",
    value: function on(eventName, callback) {
      var events = this.component.events = this.component.events || new Map();
      if (!events.has(eventName)) {
        events.set(eventName, []);
      }
      var callbacks = events.get(eventName);
      callbacks.push(callback);
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      var events = this.component.events;
      if (!events) return;

      var callbacks = events.get(eventName);
      if (!callbacks) return;

      for (var i = 0; i < callbacks.length; i++) {
        if (c === callbacks[i]) {
          callbacks[i].splice(i, 1);
        }
      }
    }
  }, {
    key: "emit",
    value: function emit(eventName, data) {
      var events = this.component.events;
      if (!events) return;

      var callbacks = events.get(eventName);
      if (!callbacks) return;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = callbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var callback = _step.value;

          callback(data);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);
  return Component;
})();

exports["default"] = Component;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _view = require('./view');

var _view2 = babelHelpers.interopRequireDefault(_view);

var $body = $('body');

var Page = (function (_View) {
  babelHelpers.inherits(Page, _View);

  function Page(id) {
    babelHelpers.classCallCheck(this, Page);

    babelHelpers.get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, id);
    this.selector = '#' + id;
    this.views = [];
  }

  babelHelpers.createClass(Page, [{
    key: 'show',
    value: function show() {
      if (0 === $body.find(this.selector).length) {
        $body.append('<main id="' + this.id + '">');
      }

      var html = this.render();
      $(this.selector).html(html);
    }
  }]);
  return Page;
})(_view2['default']);

exports['default'] = Page;
module.exports = exports['default'];

},{"./view":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _page = require('page');

var _page2 = babelHelpers.interopRequireDefault(_page);

var Router = (function () {
  function Router() {
    babelHelpers.classCallCheck(this, Router);
  }

  babelHelpers.createClass(Router, null, [{
    key: 'add',
    value: function add(path, p) {
      (0, _page2['default'])(path, function (ctx) {
        p.enter(ctx);
        p.show();
      });
      _page2['default'].exit(path, p.exit);
    }
  }, {
    key: 'start',
    value: function start() {
      (0, _page2['default'])();
    }
  }]);
  return Router;
})();

exports['default'] = Router;
module.exports = exports['default'];

},{"page":13}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _deepAssign = require('deep-assign');

var _deepAssign2 = babelHelpers.interopRequireDefault(_deepAssign);

var _go1v1StaticModes = require('go1v1-static/modes');

var _go1v1StaticModes2 = babelHelpers.interopRequireDefault(_go1v1StaticModes);

var _go1v1StaticRules = require('go1v1-static/rules');

var _go1v1StaticRules2 = babelHelpers.interopRequireDefault(_go1v1StaticRules);

var _go1v1StaticRestrictions = require('go1v1-static/restrictions');

var _go1v1StaticRestrictions2 = babelHelpers.interopRequireDefault(_go1v1StaticRestrictions);

var firebase = new Firebase('https://popping-inferno-4756.firebaseio.com/');

var Store = (function () {
  function Store() {
    babelHelpers.classCallCheck(this, Store);
  }

  babelHelpers.createClass(Store, null, [{
    key: 'summoner',
    value: function summoner(summonerName) {
      return firebaseFetch('euw/summoners/' + summonerName).then(function (snapshot) {
        var summoner = snapshot.val();
        summoner.name = snapshot.key();
        return summoner;
      });
    }
  }, {
    key: 'duels',
    value: function duels(summonerName) {
      return firebaseFetch('euw/summoner-duels/' + summonerName).then(function (snapshot) {
        var duels = [];
        snapshot.forEach(function (childSnapshot) {
          var duel = childSnapshot.val();
          duel.id = childSnapshot.key();
          duels.push(duel);
        });
        return duels;
      });
    }
  }, {
    key: 'duel',
    value: function duel(duelId) {
      return firebaseFetch('euw/duels/' + duelId).then(function (snapshot) {
        var duel = snapshot.val();
        duel.mode = (0, _deepAssign2['default'])({}, _go1v1StaticModes2['default'][duel.mode]);

        // rules enhancement
        var duelRules = duel.mode.rules;
        for (var ruleId in duelRules) {
          duelRules[ruleId] = (0, _deepAssign2['default'])({ value: duelRules[ruleId] }, _go1v1StaticRules2['default'][ruleId]);
        }

        // restrictions enhancement
        for (var restrictionId in duel.mode.restrictions) {
          var restriction = duel.mode.restrictions[restrictionId];
          (0, _deepAssign2['default'])(duel.mode.restrictions[restrictionId], _go1v1StaticRestrictions2['default'][restrictionId]);
        }

        // decisive score
        duel.decisive = (0, _deepAssign2['default'])(duelRules[duel.decisive], duel.scores.rules[duel.decisive]);

        return duel;
      });
    }
  }]);
  return Store;
})();

exports['default'] = Store;

function firebaseFetch(path) {
  return new Promise(function (resolve, reject) {
    firebase.child(path).on('value', function (snapshot) {
      resolve(snapshot);
    }, reject);
  });
}
module.exports = exports['default'];

},{"deep-assign":11,"go1v1-static/modes":1,"go1v1-static/restrictions":2,"go1v1-static/rules":3}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _component = require('./component');

var _component2 = babelHelpers.interopRequireDefault(_component);

var View = (function (_Component) {
  babelHelpers.inherits(View, _Component);

  function View(selector) {
    babelHelpers.classCallCheck(this, View);

    babelHelpers.get(Object.getPrototypeOf(View.prototype), 'constructor', this).call(this);
    this.selector = selector;
    this.props = {};
  }

  babelHelpers.createClass(View, [{
    key: 'show',
    value: function show() {
      var html = this.render();
      this.$el = $(this.selector);
      this.$el.html(html);
    }
  }, {
    key: 'visible',
    get: function get() {
      return !!this.$el;
    }
  }]);
  return View;
})(_component2['default']);

exports['default'] = View;
module.exports = exports['default'];

},{"./component":4}],9:[function(require,module,exports){
(function (global){
(function (global) {
  var babelHelpers = global.babelHelpers = {};

  babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  babelHelpers.defaults = function (obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);

      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }

    return obj;
  };

  babelHelpers.createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  babelHelpers.createDecoratedClass = (function () {
    function defineProperties(target, descriptors, initializers) {
      for (var i = 0; i < descriptors.length; i++) {
        var descriptor = descriptors[i];
        var decorators = descriptor.decorators;
        var key = descriptor.key;
        delete descriptor.key;
        delete descriptor.decorators;
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor || descriptor.initializer) descriptor.writable = true;

        if (decorators) {
          for (var f = 0; f < decorators.length; f++) {
            var decorator = decorators[f];

            if (typeof decorator === "function") {
              descriptor = decorator(target, key, descriptor) || descriptor;
            } else {
              throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator);
            }
          }

          if (descriptor.initializer !== undefined) {
            initializers[key] = descriptor;
            continue;
          }
        }

        Object.defineProperty(target, key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers);
      if (staticProps) defineProperties(Constructor, staticProps, staticInitializers);
      return Constructor;
    };
  })();

  babelHelpers.createDecoratedObject = function (descriptors) {
    var target = {};

    for (var i = 0; i < descriptors.length; i++) {
      var descriptor = descriptors[i];
      var decorators = descriptor.decorators;
      var key = descriptor.key;
      delete descriptor.key;
      delete descriptor.decorators;
      descriptor.enumerable = true;
      descriptor.configurable = true;
      if ("value" in descriptor || descriptor.initializer) descriptor.writable = true;

      if (decorators) {
        for (var f = 0; f < decorators.length; f++) {
          var decorator = decorators[f];

          if (typeof decorator === "function") {
            descriptor = decorator(target, key, descriptor) || descriptor;
          } else {
            throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator);
          }
        }
      }

      if (descriptor.initializer) {
        descriptor.value = descriptor.initializer.call(target);
      }

      Object.defineProperty(target, key, descriptor);
    }

    return target;
  };

  babelHelpers.defineDecoratedPropertyDescriptor = function (target, key, descriptors) {
    var _descriptor = descriptors[key];
    if (!_descriptor) return;
    var descriptor = {};

    for (var _key in _descriptor) descriptor[_key] = _descriptor[_key];

    descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined;
    Object.defineProperty(target, key, descriptor);
  };

  babelHelpers.taggedTemplateLiteral = function (strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  };

  babelHelpers.taggedTemplateLiteralLoose = function (strings, raw) {
    strings.raw = raw;
    return strings;
  };

  babelHelpers.toArray = function (arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  };

  babelHelpers.toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  babelHelpers.slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  })();

  babelHelpers.slicedToArrayLoose = function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      var _arr = [];

      for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        _arr.push(_step.value);

        if (i && _arr.length === i) break;
      }

      return _arr;
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };

  babelHelpers.objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  babelHelpers.hasOwn = Object.prototype.hasOwnProperty;
  babelHelpers.slice = Array.prototype.slice;
  babelHelpers.bind = Function.prototype.bind;

  babelHelpers.defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  babelHelpers.asyncToGenerator = function (fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        var callNext = step.bind(null, "next");
        var callThrow = step.bind(null, "throw");

        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(callNext, callThrow);
          }
        }

        callNext();
      });
    };
  };

  babelHelpers.interopExportWildcard = function (obj, defaults) {
    var newObj = defaults({}, obj);
    delete newObj["default"];
    return newObj;
  };

  babelHelpers.interopRequireWildcard = function (obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj["default"] = obj;
      return newObj;
    }
  };

  babelHelpers.interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  };

  babelHelpers._typeof = function (obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  babelHelpers._extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  babelHelpers.get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  babelHelpers.set = function set(object, property, value, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent !== null) {
        set(parent, property, value, receiver);
      }
    } else if ("value" in desc && desc.writable) {
      desc.value = value;
    } else {
      var setter = desc.set;

      if (setter !== undefined) {
        setter.call(receiver, value);
      }
    }

    return value;
  };

  babelHelpers.newArrowCheck = function (innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  };

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.objectDestructuringEmpty = function (obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  };

  babelHelpers.temporalUndefined = {};

  babelHelpers.temporalAssertDefined = function (val, name, undef) {
    if (val === undef) {
      throw new ReferenceError(name + " is not defined - temporal dead zone");
    }

    return true;
  };

  babelHelpers.selfGlobal = typeof global === "undefined" ? self : global;
  babelHelpers.typeofReactElement = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;

  babelHelpers.defaultProps = function (defaultProps, props) {
    if (defaultProps) {
      for (var propName in defaultProps) {
        if (typeof props[propName] === "undefined") {
          props[propName] = defaultProps[propName];
        }
      }
    }

    return props;
  };

  babelHelpers._instanceof = function (left, right) {
    if (right != null && right[Symbol.hasInstance]) {
      return right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  };

  babelHelpers.interopRequire = function (obj) {
    return obj && obj.__esModule ? obj["default"] : obj;
  };
})(typeof global === "undefined" ? self : global);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],11:[function(require,module,exports){
'use strict';
var isObj = require('is-obj');
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Sources cannot be null or undefined');
	}

	return Object(val);
}

function base(to, from) {
	if (to === from) {
		return to;
	}

	from = Object(from);

	for (var key in from) {
		if (hasOwnProperty.call(from, key)) {
			var val = from[key];

			if (Array.isArray(val)) {
				to[key] = val.slice();
			} else if (isObj(val)) {
				to[key] = base(to[key] || {}, val);
			} else if (val !== undefined) {
				to[key] = val;
			}
		}
	}

	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(from);

		for (var i = 0; i < symbols.length; i++) {
			if (propIsEnumerable.call(from, symbols[i])) {
				to[symbols[i]] = from[symbols[i]];
			}
		}
	}

	return to;
}

module.exports = function deepAssign(target) {
	target = toObject(target);

	for (var s = 1; s < arguments.length; s++) {
		base(target, arguments[s]);
	}

	return target;
};

},{"is-obj":12}],12:[function(require,module,exports){
'use strict';
module.exports = function (x) {
	var type = typeof x;
	return x !== null && (type === 'object' || type === 'function');
};

},{}],13:[function(require,module,exports){
(function (process){
  /* globals require, module */

  'use strict';

  /**
   * Module dependencies.
   */

  var pathtoRegexp = require('path-to-regexp');

  /**
   * Module exports.
   */

  module.exports = page;

  /**
   * Detect click event
   */
  var clickEvent = ('undefined' !== typeof document) && document.ontouchstart ? 'touchstart' : 'click';

  /**
   * To work properly with the URL
   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
   */

  var location = ('undefined' !== typeof window) && (window.history.location || window.location);

  /**
   * Perform initial dispatch.
   */

  var dispatch = true;


  /**
   * Decode URL components (query string, pathname, hash).
   * Accommodates both regular percent encoding and x-www-form-urlencoded format.
   */
  var decodeURLComponents = true;

  /**
   * Base path.
   */

  var base = '';

  /**
   * Running flag.
   */

  var running;

  /**
   * HashBang option
   */

  var hashbang = false;

  /**
   * Previous context, for capturing
   * page exit events.
   */

  var prevContext;

  /**
   * Register `path` with callback `fn()`,
   * or route `path`, or redirection,
   * or `page.start()`.
   *
   *   page(fn);
   *   page('*', fn);
   *   page('/user/:id', load, user);
   *   page('/user/' + user.id, { some: 'thing' });
   *   page('/user/' + user.id);
   *   page('/from', '/to')
   *   page();
   *
   * @param {String|Function} path
   * @param {Function} fn...
   * @api public
   */

  function page(path, fn) {
    // <callback>
    if ('function' === typeof path) {
      return page('*', path);
    }

    // route <path> to <callback ...>
    if ('function' === typeof fn) {
      var route = new Route(path);
      for (var i = 1; i < arguments.length; ++i) {
        page.callbacks.push(route.middleware(arguments[i]));
      }
      // show <path> with [state]
    } else if ('string' === typeof path) {
      page['string' === typeof fn ? 'redirect' : 'show'](path, fn);
      // start [options]
    } else {
      page.start(path);
    }
  }

  /**
   * Callback functions.
   */

  page.callbacks = [];
  page.exits = [];

  /**
   * Current path being processed
   * @type {String}
   */
  page.current = '';

  /**
   * Number of pages navigated to.
   * @type {number}
   *
   *     page.len == 0;
   *     page('/login');
   *     page.len == 1;
   */

  page.len = 0;

  /**
   * Get or set basepath to `path`.
   *
   * @param {String} path
   * @api public
   */

  page.base = function(path) {
    if (0 === arguments.length) return base;
    base = path;
  };

  /**
   * Bind with the given `options`.
   *
   * Options:
   *
   *    - `click` bind to click events [true]
   *    - `popstate` bind to popstate [true]
   *    - `dispatch` perform initial dispatch [true]
   *
   * @param {Object} options
   * @api public
   */

  page.start = function(options) {
    options = options || {};
    if (running) return;
    running = true;
    if (false === options.dispatch) dispatch = false;
    if (false === options.decodeURLComponents) decodeURLComponents = false;
    if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);
    if (false !== options.click) {
      document.addEventListener(clickEvent, onclick, false);
    }
    if (true === options.hashbang) hashbang = true;
    if (!dispatch) return;
    var url = (hashbang && ~location.hash.indexOf('#!')) ? location.hash.substr(2) + location.search : location.pathname + location.search + location.hash;
    page.replace(url, null, true, dispatch);
  };

  /**
   * Unbind click and popstate event handlers.
   *
   * @api public
   */

  page.stop = function() {
    if (!running) return;
    page.current = '';
    page.len = 0;
    running = false;
    document.removeEventListener(clickEvent, onclick, false);
    window.removeEventListener('popstate', onpopstate, false);
  };

  /**
   * Show `path` with optional `state` object.
   *
   * @param {String} path
   * @param {Object} state
   * @param {Boolean} dispatch
   * @return {Context}
   * @api public
   */

  page.show = function(path, state, dispatch, push) {
    var ctx = new Context(path, state);
    page.current = ctx.path;
    if (false !== dispatch) page.dispatch(ctx);
    if (false !== ctx.handled && false !== push) ctx.pushState();
    return ctx;
  };

  /**
   * Goes back in the history
   * Back should always let the current route push state and then go back.
   *
   * @param {String} path - fallback path to go back if no more history exists, if undefined defaults to page.base
   * @param {Object} [state]
   * @api public
   */

  page.back = function(path, state) {
    if (page.len > 0) {
      // this may need more testing to see if all browsers
      // wait for the next tick to go back in history
      history.back();
      page.len--;
    } else if (path) {
      setTimeout(function() {
        page.show(path, state);
      });
    }else{
      setTimeout(function() {
        page.show(base, state);
      });
    }
  };


  /**
   * Register route to redirect from one path to other
   * or just redirect to another route
   *
   * @param {String} from - if param 'to' is undefined redirects to 'from'
   * @param {String} [to]
   * @api public
   */
  page.redirect = function(from, to) {
    // Define route from a path to another
    if ('string' === typeof from && 'string' === typeof to) {
      page(from, function(e) {
        setTimeout(function() {
          page.replace(to);
        }, 0);
      });
    }

    // Wait for the push state and replace it with another
    if ('string' === typeof from && 'undefined' === typeof to) {
      setTimeout(function() {
        page.replace(from);
      }, 0);
    }
  };

  /**
   * Replace `path` with optional `state` object.
   *
   * @param {String} path
   * @param {Object} state
   * @return {Context}
   * @api public
   */


  page.replace = function(path, state, init, dispatch) {
    var ctx = new Context(path, state);
    page.current = ctx.path;
    ctx.init = init;
    ctx.save(); // save before dispatching, which may redirect
    if (false !== dispatch) page.dispatch(ctx);
    return ctx;
  };

  /**
   * Dispatch the given `ctx`.
   *
   * @param {Object} ctx
   * @api private
   */

  page.dispatch = function(ctx) {
    var prev = prevContext,
      i = 0,
      j = 0;

    prevContext = ctx;

    function nextExit() {
      var fn = page.exits[j++];
      if (!fn) return nextEnter();
      fn(prev, nextExit);
    }

    function nextEnter() {
      var fn = page.callbacks[i++];

      if (ctx.path !== page.current) {
        ctx.handled = false;
        return;
      }
      if (!fn) return unhandled(ctx);
      fn(ctx, nextEnter);
    }

    if (prev) {
      nextExit();
    } else {
      nextEnter();
    }
  };

  /**
   * Unhandled `ctx`. When it's not the initial
   * popstate then redirect. If you wish to handle
   * 404s on your own use `page('*', callback)`.
   *
   * @param {Context} ctx
   * @api private
   */

  function unhandled(ctx) {
    if (ctx.handled) return;
    var current;

    if (hashbang) {
      current = base + location.hash.replace('#!', '');
    } else {
      current = location.pathname + location.search;
    }

    if (current === ctx.canonicalPath) return;
    page.stop();
    ctx.handled = false;
    location.href = ctx.canonicalPath;
  }

  /**
   * Register an exit route on `path` with
   * callback `fn()`, which will be called
   * on the previous context when a new
   * page is visited.
   */
  page.exit = function(path, fn) {
    if (typeof path === 'function') {
      return page.exit('*', path);
    }

    var route = new Route(path);
    for (var i = 1; i < arguments.length; ++i) {
      page.exits.push(route.middleware(arguments[i]));
    }
  };

  /**
   * Remove URL encoding from the given `str`.
   * Accommodates whitespace in both x-www-form-urlencoded
   * and regular percent-encoded form.
   *
   * @param {str} URL component to decode
   */
  function decodeURLEncodedURIComponent(val) {
    if (typeof val !== 'string') { return val; }
    return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
  }

  /**
   * Initialize a new "request" `Context`
   * with the given `path` and optional initial `state`.
   *
   * @param {String} path
   * @param {Object} state
   * @api public
   */

  function Context(path, state) {
    if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + (hashbang ? '#!' : '') + path;
    var i = path.indexOf('?');

    this.canonicalPath = path;
    this.path = path.replace(base, '') || '/';
    if (hashbang) this.path = this.path.replace('#!', '') || '/';

    this.title = document.title;
    this.state = state || {};
    this.state.path = path;
    this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
    this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
    this.params = {};

    // fragment
    this.hash = '';
    if (!hashbang) {
      if (!~this.path.indexOf('#')) return;
      var parts = this.path.split('#');
      this.path = parts[0];
      this.hash = decodeURLEncodedURIComponent(parts[1]) || '';
      this.querystring = this.querystring.split('#')[0];
    }
  }

  /**
   * Expose `Context`.
   */

  page.Context = Context;

  /**
   * Push state.
   *
   * @api private
   */

  Context.prototype.pushState = function() {
    page.len++;
    history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };

  /**
   * Save the context state.
   *
   * @api public
   */

  Context.prototype.save = function() {
    history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };

  /**
   * Initialize `Route` with the given HTTP `path`,
   * and an array of `callbacks` and `options`.
   *
   * Options:
   *
   *   - `sensitive`    enable case-sensitive routes
   *   - `strict`       enable strict matching for trailing slashes
   *
   * @param {String} path
   * @param {Object} options.
   * @api private
   */

  function Route(path, options) {
    options = options || {};
    this.path = (path === '*') ? '(.*)' : path;
    this.method = 'GET';
    this.regexp = pathtoRegexp(this.path,
      this.keys = [],
      options.sensitive,
      options.strict);
  }

  /**
   * Expose `Route`.
   */

  page.Route = Route;

  /**
   * Return route middleware with
   * the given callback `fn()`.
   *
   * @param {Function} fn
   * @return {Function}
   * @api public
   */

  Route.prototype.middleware = function(fn) {
    var self = this;
    return function(ctx, next) {
      if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
      next();
    };
  };

  /**
   * Check if this route matches `path`, if so
   * populate `params`.
   *
   * @param {String} path
   * @param {Object} params
   * @return {Boolean}
   * @api private
   */

  Route.prototype.match = function(path, params) {
    var keys = this.keys,
      qsIndex = path.indexOf('?'),
      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
      m = this.regexp.exec(decodeURIComponent(pathname));

    if (!m) return false;

    for (var i = 1, len = m.length; i < len; ++i) {
      var key = keys[i - 1];
      var val = decodeURLEncodedURIComponent(m[i]);
      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
        params[key.name] = val;
      }
    }

    return true;
  };


  /**
   * Handle "populate" events.
   */

  var onpopstate = (function () {
    var loaded = false;
    if ('undefined' === typeof window) {
      return;
    }
    if (document.readyState === 'complete') {
      loaded = true;
    } else {
      window.addEventListener('load', function() {
        setTimeout(function() {
          loaded = true;
        }, 0);
      });
    }
    return function onpopstate(e) {
      if (!loaded) return;
      if (e.state) {
        var path = e.state.path;
        page.replace(path, e.state);
      } else {
        page.show(location.pathname + location.hash, undefined, undefined, false);
      }
    };
  })();
  /**
   * Handle "click" events.
   */

  function onclick(e) {

    if (1 !== which(e)) return;

    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (e.defaultPrevented) return;



    // ensure link
    var el = e.target;
    while (el && 'A' !== el.nodeName) el = el.parentNode;
    if (!el || 'A' !== el.nodeName) return;



    // Ignore if tag has
    // 1. "download" attribute
    // 2. rel="external" attribute
    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;

    // ensure non-hash for the same path
    var link = el.getAttribute('href');
    if (!hashbang && el.pathname === location.pathname && (el.hash || '#' === link)) return;



    // Check for mailto: in the href
    if (link && link.indexOf('mailto:') > -1) return;

    // check target
    if (el.target) return;

    // x-origin
    if (!sameOrigin(el.href)) return;



    // rebuild path
    var path = el.pathname + el.search + (el.hash || '');

    // strip leading "/[drive letter]:" on NW.js on Windows
    if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {
      path = path.replace(/^\/[a-zA-Z]:\//, '/');
    }

    // same page
    var orig = path;

    if (path.indexOf(base) === 0) {
      path = path.substr(base.length);
    }

    if (hashbang) path = path.replace('#!', '');

    if (base && orig === path) return;

    e.preventDefault();
    page.show(orig);
  }

  /**
   * Event button.
   */

  function which(e) {
    e = e || window.event;
    return null === e.which ? e.button : e.which;
  }

  /**
   * Check if `href` is the same origin.
   */

  function sameOrigin(href) {
    var origin = location.protocol + '//' + location.hostname;
    if (location.port) origin += ':' + location.port;
    return (href && (0 === href.indexOf(origin)));
  }

  page.sameOrigin = sameOrigin;

}).call(this,require('_process'))

},{"_process":10,"path-to-regexp":14}],14:[function(require,module,exports){
var isArray = require('isarray');

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]
  // "/route(\\d+)" => [undefined, undefined, undefined, "\d+", undefined]
  '([\\/.])?(?:\\:(\\w+)(?:\\(((?:\\\\.|[^)])*)\\))?|\\(((?:\\\\.|[^)])*)\\))([+*?])?',
  // Match regexp special characters that are always escaped.
  '([.+*?=^!:${}()[\\]|\\/])'
].join('|'), 'g');

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {String} group
 * @return {String}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {RegExp} re
 * @param  {Array}  keys
 * @return {RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {String}
 */
function flags (options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {RegExp} path
 * @param  {Array}  keys
 * @return {RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name:      i,
        delimiter: null,
        optional:  false,
        repeat:    false
      });
    }
  }

  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {Array}  path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
  return attachKeys(regexp, keys);
}

/**
 * Replace the specific tags with regexp strings.
 *
 * @param  {String} path
 * @param  {Array}  keys
 * @return {String}
 */
function replacePath (path, keys) {
  var index = 0;

  function replace (_, escaped, prefix, key, capture, group, suffix, escape) {
    if (escaped) {
      return escaped;
    }

    if (escape) {
      return '\\' + escape;
    }

    var repeat   = suffix === '+' || suffix === '*';
    var optional = suffix === '?' || suffix === '*';

    keys.push({
      name:      key || index++,
      delimiter: prefix || '/',
      optional:  optional,
      repeat:    repeat
    });

    prefix = prefix ? ('\\' + prefix) : '';
    capture = escapeGroup(capture || group || '[^' + (prefix || '\\/') + ']+?');

    if (repeat) {
      capture = capture + '(?:' + prefix + capture + ')*';
    }

    if (optional) {
      return '(?:' + prefix + '(' + capture + '))?';
    }

    // Basic parameter support.
    return prefix + '(' + capture + ')';
  }

  return path.replace(PATH_REGEXP, replace);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(String|RegExp|Array)} path
 * @param  {Array}                 [keys]
 * @param  {Object}                [options]
 * @return {RegExp}
 */
function pathToRegexp (path, keys, options) {
  keys = keys || [];

  if (!isArray(keys)) {
    options = keys;
    keys = [];
  } else if (!options) {
    options = {};
  }

  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys, options);
  }

  if (isArray(path)) {
    return arrayToRegexp(path, keys, options);
  }

  var strict = options.strict;
  var end = options.end !== false;
  var route = replacePath(path, keys);
  var endsWithSlash = path.charAt(path.length - 1) === '/';

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithSlash ? '' : '(?=\\/|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

},{"isarray":15}],15:[function(require,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],16:[function(require,module,exports){
'use strict';

require('babel-core/external-helpers');

var _go1v1LibRouter = require('go1v1-lib/router');

var _go1v1LibRouter2 = babelHelpers.interopRequireDefault(_go1v1LibRouter);

var _pagesHome = require('::/pages/home');

var _pagesHome2 = babelHelpers.interopRequireDefault(_pagesHome);

var _pagesSummoner = require('::/pages/summoner');

var _pagesSummoner2 = babelHelpers.interopRequireDefault(_pagesSummoner);

_go1v1LibRouter2['default'].add('/', new _pagesHome2['default']());
_go1v1LibRouter2['default'].add('/summoner/:summoner', new _pagesSummoner2['default']());
_go1v1LibRouter2['default'].start();

},{"::/pages/home":17,"::/pages/summoner":18,"babel-core/external-helpers":9,"go1v1-lib/router":6}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _go1v1LibPage = require('go1v1-lib/page');

var _go1v1LibPage2 = babelHelpers.interopRequireDefault(_go1v1LibPage);

var HomePage = (function (_Page) {
  babelHelpers.inherits(HomePage, _Page);

  function HomePage() {
    babelHelpers.classCallCheck(this, HomePage);
    babelHelpers.get(Object.getPrototypeOf(HomePage.prototype), 'constructor', this).apply(this, arguments);
  }

  babelHelpers.createClass(HomePage, [{
    key: 'enter',
    value: function enter() {
      console.log('enter');
    }
  }, {
    key: 'exit',
    value: function exit() {
      console.log('exit');
    }
  }, {
    key: 'render',
    value: function render() {
      return '';
    }
  }]);
  return HomePage;
})(_go1v1LibPage2['default']);

exports['default'] = HomePage;
module.exports = exports['default'];

},{"go1v1-lib/page":5}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _go1v1LibPage = require('go1v1-lib/page');

var _go1v1LibPage2 = babelHelpers.interopRequireDefault(_go1v1LibPage);

var _viewsDetails = require('::/views/details');

var _viewsDetails2 = babelHelpers.interopRequireDefault(_viewsDetails);

var _viewsDuels = require('::/views/duels');

var _viewsDuels2 = babelHelpers.interopRequireDefault(_viewsDuels);

var _viewsNav = require('::/views/nav');

var _viewsNav2 = babelHelpers.interopRequireDefault(_viewsNav);

var SummonerPage = (function (_Page) {
  babelHelpers.inherits(SummonerPage, _Page);

  function SummonerPage() {
    babelHelpers.classCallCheck(this, SummonerPage);
    babelHelpers.get(Object.getPrototypeOf(SummonerPage.prototype), 'constructor', this).apply(this, arguments);
  }

  babelHelpers.createClass(SummonerPage, [{
    key: 'enter',
    value: function enter(ctx) {
      var summonerName = ctx.params.summoner;

      // logged?
      //   load additional features

      var duels = new _viewsDuels2['default']('.duels', summonerName);
      var details = new _viewsDetails2['default']('.details');
      var nav = new _viewsNav2['default']('.nav', summonerName);

      duels.on('selected', details.update.bind(details));
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      <nav class="nav"></nav>\n      <ul class="duels"></ul>\n      <div class="details"></div>\n    ';
    }
  }]);
  return SummonerPage;
})(_go1v1LibPage2['default']);

exports['default'] = SummonerPage;
module.exports = exports['default'];

},{"::/views/details":19,"::/views/duels":20,"::/views/nav":21,"go1v1-lib/page":5}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _go1v1LibView = require('go1v1-lib/view');

var _go1v1LibView2 = babelHelpers.interopRequireDefault(_go1v1LibView);

var _go1v1LibStore = require('go1v1-lib/store');

var _go1v1LibStore2 = babelHelpers.interopRequireDefault(_go1v1LibStore);

var Details = (function (_View) {
  babelHelpers.inherits(Details, _View);

  function Details(selector) {
    babelHelpers.classCallCheck(this, Details);

    babelHelpers.get(Object.getPrototypeOf(Details.prototype), 'constructor', this).call(this, selector);
  }

  babelHelpers.createClass(Details, [{
    key: 'update',
    value: function update(duelId) {
      var _this = this;

      _go1v1LibStore2['default'].duel(duelId).then(function (duel) {
        _this.duel = duel;
        _this.show();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var duel = this.duel;
      return '\n      <header class="summary">\n        <div class="mode">' + duel.mode.name + '</div>\n        <div class="score">' + duel.decisive.creator + ' / ' + duel.decisive.target + ' ' + duel.decisive.name + '</div>\n      </header>\n      <table class="scores">\n        <thead>\n          <tr>\n            <th></th>\n            <th>\n              <figure class="summoner creator">\n                <!-- <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"> -->\n                <figcaption>' + duel.creator + '</figcaption>\n              </figure>\n            </th>\n            <th>\n              <figure class="summoner target">\n                <!-- <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"> -->\n                <figcaption>' + duel.target + '</figcaption>\n              </figure>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class="heading">\n            <th></th>\n            <th colspan="2">Rules</th>\n          </tr>\n          ' + this.renderRules(duel) + '\n          <tr class="heading">\n            <th></th>\n            <th colspan="2">Restrictions</th>\n          </tr>\n          ' + this.renderRestrictions(duel) + '\n          <tr class="heading">\n            <th></th>\n            <th colspan="2">Stuff</th>\n          </tr>\n          <tr>\n            <th></th>\n            <td>\n              <ul>\n                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>\n                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>\n                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>\n                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>\n                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>\n              </ul>\n            </td>\n            <td>\n              <ul>\n                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>\n                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>\n                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>\n                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>\n                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>\n              </ul>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    ';
    }
  }, {
    key: 'renderRules',
    value: function renderRules(duel) {
      var markup = '';
      for (var ruleId in duel.scores.rules) {
        var rule = duel.mode.rules[ruleId];
        var score = duel.scores.rules[ruleId];
        markup += '\n        <tr>\n          <th>' + rule.value + ' ' + rule.name + '</td>\n          <td>' + score.creator + '</td>\n          <td>' + score.target + '</td>\n        </tr>\n      ';
      }
      return markup;
    }
  }, {
    key: 'renderRestrictions',
    value: function renderRestrictions(duel) {
      var markup = '';
      for (var restrictionId in duel.mode.restrictions) {
        var restriction = duel.mode.restrictions[restrictionId];
        markup += '\n        <tr>\n          <th>' + restriction.name + '</td>\n          <td>✓</td>\n          <td>✓</td>\n        </tr>\n      ';
      }
      return markup;
    }
  }]);
  return Details;
})(_go1v1LibView2['default']);

exports['default'] = Details;
module.exports = exports['default'];

},{"go1v1-lib/store":7,"go1v1-lib/view":8}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _go1v1LibView = require('go1v1-lib/view');

var _go1v1LibView2 = babelHelpers.interopRequireDefault(_go1v1LibView);

var _go1v1LibStore = require('go1v1-lib/store');

var _go1v1LibStore2 = babelHelpers.interopRequireDefault(_go1v1LibStore);

var Duels = (function (_View) {
  babelHelpers.inherits(Duels, _View);

  function Duels(selector, summonerName) {
    var _this = this;

    babelHelpers.classCallCheck(this, Duels);

    babelHelpers.get(Object.getPrototypeOf(Duels.prototype), 'constructor', this).call(this, selector);

    this.summonerName = summonerName;
    this.$selected = null;

    _go1v1LibStore2['default'].duels(summonerName).then(function (duels) {
      _this.duels = duels;
      _this.show();

      _this.$el.on('click', '.duel', _this.clicked.bind(_this));
      $(document).on('keyup', _this.key.bind(_this));
    });
  }

  babelHelpers.createClass(Duels, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return this.duels.reduce(function (markup, duel) {
        return markup + _this2.renderDuel(duel);
      }, '');
    }
  }, {
    key: 'renderDuel',
    value: function renderDuel(duel) {
      return '\n      <li class="duel">\n        ' + this.renderCup(duel) + '\n        ' + this.renderSummoner(duel.creator) + '\n        <span class="vs">vs</span>\n        ' + this.renderSummoner(duel.target) + '\n      </li>\n    ';
    }
  }, {
    key: 'renderCup',
    value: function renderCup(duel) {
      return this.summonerName === duel[duel.winner] ? '\n      <div class="cup">\n        <svg>\n          <use xlink:href="#svg-cup">\n        </svg>\n      </div>\n    ' : '';
    }
  }, {
    key: 'renderSummoner',
    value: function renderSummoner(summonerName) {
      return '\n      <figure class="summoner creator">\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">\n        <figcaption>' + summonerName + '</figcaption>\n      </figure>\n    ';
    }
  }, {
    key: 'clicked',
    value: function clicked(e) {
      this.selectElement($(e.currentTarget));
    }
  }, {
    key: 'key',
    value: function key(e) {
      if (40 === e.which) {
        this.selectElement(this.$selected.next());
      } else if (38 === e.which) {
        this.selectElement(this.$selected.prev());
      }
    }
  }, {
    key: 'selectElement',
    value: function selectElement($duel) {
      if (this.$selected) {
        this.$selected.removeClass('selected');
      }
      $duel.addClass('selected');
      this.$selected = $duel;
      this.emit('selected', this.duels[$duel.index()].id);
    }
  }]);
  return Duels;
})(_go1v1LibView2['default']);

exports['default'] = Duels;
module.exports = exports['default'];

},{"go1v1-lib/store":7,"go1v1-lib/view":8}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _go1v1LibView = require('go1v1-lib/view');

var _go1v1LibView2 = babelHelpers.interopRequireDefault(_go1v1LibView);

var _go1v1LibStore = require('go1v1-lib/store');

var _go1v1LibStore2 = babelHelpers.interopRequireDefault(_go1v1LibStore);

var Nav = (function (_View) {
  babelHelpers.inherits(Nav, _View);

  function Nav(selector, summonerName) {
    var _this = this;

    babelHelpers.classCallCheck(this, Nav);

    babelHelpers.get(Object.getPrototypeOf(Nav.prototype), 'constructor', this).call(this, selector);

    _go1v1LibStore2['default'].summoner(summonerName).then(function (summoner) {
      _this.summoner = summoner;
      _this.show();
    });
  }

  babelHelpers.createClass(Nav, [{
    key: 'render',
    value: function render() {
      var summoner = this.summoner;
      return '\n      <header class="user">\n        <img class="avatar" src="' + summoner.icon + '">\n        <span class="name">' + summoner.name + '</span>\n      </header>\n      <div class="stats">\n        <div class="stat victories">\n          <div class="label">Victories</div>\n          <div class="value">' + summoner.victories + '</div>\n        </div>\n        <div class="stat defeats">\n          <div class="label">Defeats</div>\n          <div class="value">' + summoner.defeats + '</div>\n        </div>\n      </div>\n    ';
    }
  }]);
  return Nav;
})(_go1v1LibView2['default']);

exports['default'] = Nav;
module.exports = exports['default'];

},{"go1v1-lib/store":7,"go1v1-lib/view":8}]},{},[16])
//# sourceMappingURL=app.js.map
