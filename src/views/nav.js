import View from 'go1v1-lib/view'

export default class Nav extends View {
  constructor(selector, summoner) {
    super(selector)
    this.summoner = summoner
    this.show()
  }

  render() {
    let summoner = this.summoner
    return `
      <header class="user">
        <img class="avatar" src="${summoner.icon}">
        <span class="name">${summoner.name}</span>
      </header>
      <div class="stats">
        <div class="stat victories">
          <div class="label">Victories</div>
          <div class="value">${summoner.victories}</div>
        </div>
        <div class="stat defeats">
          <div class="label">Defeats</div>
          <div class="value">${summoner.defeats}</div>
        </div>
      </div>
    `
  }
}
