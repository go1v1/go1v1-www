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
}
