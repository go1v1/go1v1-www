import Component from './component'

export default class View extends Component {
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

  view(selector, ctor, data) {
    if (1 === arguments.length) {
      return this.component.views[selector]
    }

    let views = this.component.views = this.component.views || []

    data = data || {}
    let keys = Object.keys(data)
    let values = keys.map(key => data[key])
    let hasData = 0 !== keys.length

    return Promise.all(values).then(res => {
      let view = new ctor()

      if (hasData) {
        _.assign(view, keys.reduce((acc, key, i, k) => {
          acc[key] = res[i]
          return acc
        }, {}))
      }

      view.attach(selector)
      if (hasData) view.show()
      views[selector] = view

      return view
    })
  }
}
