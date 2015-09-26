export default class Component {
  constructor() {
    this.component = {
      kind: this.constructor.name.toLowerCase()
    }
  }

  on(eventName, callback) {
    let events = this.component.events = this.component.events || new Map()
    if (!events.has(eventName)) {
      events.set(eventName, [])
    }
    let callbacks = events.get(eventName)
    callbacks.push(callback)
  }

  off(eventName, callback) {
    let events = this.component.events
    if (!events) return

    let callbacks = events.get(eventName)
    if (!callbacks) return

    for (let i = 0; i < callbacks.length; i++) {
      if (c === callbacks[i]) {
        callbacks[i].splice(i, 1)
      }
    }
  }

  emit(eventName, data) {
    let events = this.component.events
    if (!events) return

    let callbacks = events.get(eventName)
    if (!callbacks) return

    for (let callback of callbacks) {
      callback(data)
    }
  }
}
