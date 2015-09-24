import View from 'go1v1-lib/view'
import Store from 'go1v1-lib/store'

export default class Stats extends View {
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
      <div class="stat victories">
        <div class="label">Victories</div>
        <div class="value">${summoner.victories}</div>
      </div>
      <div class="stat defeats">
        <div class="label">Defeats</div>
        <div class="value">${summoner.defeats}</div>
      </div>
    `
  }
}
