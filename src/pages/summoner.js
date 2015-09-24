import Page from 'go1v1-lib/page'
import Details from '::/views/details'
import Duels from '::/views/duels'
import Nav from '::/views/nav'

export default class SummonerPage extends Page {
  enter(ctx) {
    let summonerName = ctx.params.summoner

    // logged?
    //   load additional features

    let duels = new Duels('.duels', summonerName)
    let details = new Details('.details')
    let nav = new Nav('.nav', summonerName)

    duels.on('selected', ::details.update)
  }

  render() {
    return `
      <nav class="nav"></nav>
      <ul class="duels"></ul>
      <div class="details"></div>
    `
  }
}
