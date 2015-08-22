(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'

function Router(routes) {
  this.routes = []

  routes.forEach(this.add.bind(this))

  window.addEventListener('statechange', this.parse.bind(this))
  this.parse()
}

Router.prototype.add = function(route) {
  this.routes.push(route)
}

Router.prototype.parse = function() {
  console.log('parse')
  this.routes.forEach(function(route) {
    console.log(location.pathname, route.path)
    if (location.pathname === route.path) {
      route.handler()
    }
  }.bind(this))
}

module.exports = Router

},{}],2:[function(require,module,exports){
'use strict'

var Router = require('../lib/router')
  , routes = require('./routes')

var router = new Router(routes)

},{"../lib/router":1,"./routes":4}],3:[function(require,module,exports){
'use strict'

module.exports = {
  path: '/',
  title: 'Home',
  handler: function() {
    console.log('home')
  }
}

},{}],4:[function(require,module,exports){
'use strict'

module.exports = [
  require('./home')
]

},{"./home":3}]},{},[2])
//# sourceMappingURL=app.js.map
