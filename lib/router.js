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
