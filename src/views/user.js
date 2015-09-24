import View from '../../lib/view'
import Store from '../../lib/store'

export class User extends View {
  constructor(selector, summonerName) {
    super(selector)

    Store.summoner(summonerName).then((summoner) => {
      this.summoner = summoner
      this.show()
    })
  }

  render() {
    let summoner = this.summoner
    return `
      <img class="avatar" src="${summoner.icon}">
      <span class="name">${summoner.name}</span>
    `
  }
}
