import assign from 'deep-assign'

export default class Model {
  constructor(snapshot) {
    assign(this, snapshot.val())
    if ('function' == typeof this.enhance) this.enhance(snapshot, this)
  }

  static resolveWith(ctor, resolve) {
    return function(snapshot) {
      resolve(new ctor(snapshot))
    }
  }
}
