import View from './view'

const $body = $('body')

export default class Page extends View {
  attach(selector) {
    if (0 === $body.find(this.selector).length) {
      $body.append(`<main id="${this.component.kind}">`)
    }
    super.attach(selector)
  }
}
