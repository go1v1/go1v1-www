import page from 'page'

export default class Router {
  static add(path, p) {
    page(path, ctx => {
      p.attach(`#${p.component.kind}`)
      if ('function' === typeof p.enter) p.enter(ctx)
      p.show()
    })

    page.exit(path, () => {
      if ('function' === typeof p.exit) p.exit()
      p.detach(`#${p.component.kind}`)
    })
  }

  static start() {
    page()
  }
}
