import View from 'go1v1-lib/view'
import Store from 'go1v1-lib/store'

export default class User extends View {
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
