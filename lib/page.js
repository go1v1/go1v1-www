import View from './view'

const $body = $('body')

export default class Page extends View {
  constructor(id) {
    super(id)
    this.selector = `#${id}`
    this.views = []
  }

  show() {
    if (0 === $body.find(this.selector).length) {
      $body.append(`<main id="${this.id}">`)
    }

    var html = this.render()
    $(this.selector).html(html)
  }
}
