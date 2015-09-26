import Component from './component'

export default class View extends Component {
  constructor(selector) {
    super()
    this.selector = selector
  }

  destroy() {
    this.$el.off(`.${this.component.kind}`)
  }

  show() {
    var html = this.render()
    this.$el = $(this.selector)
    this.$el.html(html)
  }

  get visible() {
    return (!!this.$el)
  }

  view(selector, ctor, promise) {
    if (1 === arguments.length) {
      return this.component.views[selector]
    }

    let views = this.component.views = this.component.views || []

    if (!promise) {
      promise = Promise.resolve()
    }

    return promise.then((res) => {
      let view = new ctor(selector, res)
      views[selector] = view
      return view
    })
  }
}
