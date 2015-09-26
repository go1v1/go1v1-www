import Component from './component'

export default class View extends Component {
  attach(selector) {
    this.selector = selector
    this.$el = $(this.selector)
    if (this.bind) this.bind()
  }

  detach() {
    this.$el.empty()
    this.selector = null
    this.$el.off(`.${this.component.kind}`)
    if (this.unbind) this.unbind()
  }

  show() {
    this.$el.html(this.render())
  }

  get visible() {
    return (!!this.$el)
  }

  view(selector, ctor, promise) {
    if (1 === arguments.length) {
      return this.component.views[selector]
    }

    let views = this.component.views = this.component.views || []
    let autoShow = !!promise

    if (!promise) {
      promise = Promise.resolve()
    }

    return promise.then((res) => {
      let view = new ctor(res)
      view.attach(selector)
      if (autoShow) view.show()
      views[selector] = view
      return view
    })
  }
}
