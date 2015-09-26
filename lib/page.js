import View from './view'

const $body = $('body')

export default class Page extends View {
  show() {
    if (0 === $body.find(this.selector).length) {
      $body.append(`<main id="${this.component.kind}">`)
    }

    var html = this.render()
    $(this.selector).html(html)
  }
}
