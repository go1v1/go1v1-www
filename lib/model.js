import assign from 'deep-assign'
import Component from './component'

export default class Model extends Component {
  constructor(snapshot) {
    super()
    assign(this, snapshot.val())
    if ('function' === typeof this.enhance) this.enhance(snapshot, this)
  }

  static resolveWith(ctor, resolve) {
    return function(snapshot) {
      resolve(new ctor(snapshot))
    }
  }
}
