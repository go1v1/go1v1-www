import page from 'page'

export default class Router {
  static add(path, p) {
    page(path, (ctx) => {
      p.enter(ctx)
      p.attach(`#${p.component.kind}`)
      p.show()
    })
    page.exit(path, p.exit)
  }

  static start() {
    page()
  }
}
