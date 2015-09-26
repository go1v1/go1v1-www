import Component from './component'

export default class View extends Component {
  constructor() {
    super()
    for (let arg of arguments) {
      if (arg && arg.component) {
        this[arg.component.kind] = arg
      }
      else if (Array.isArray(arg) && 0 !== arg.length) {
        this[arg[0].component.kind + 's'] = arg
      }
    }
  }

  attach(selector) {
    this.selector = selector
    this.$el = $(this.selector)
    if ('function' === typeof this.bind) this.bind()
  }

  detach() {
    this.$el.empty()
    this.selector = null
    this.$el.off(`.${this.component.kind}`)
    if ('function' === typeof this.unbind) this.unbind()
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
