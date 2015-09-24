import Page from 'go1v1-lib/page'
import Details from '::/views/details'
import Duels from '::/views/duels'
import Stats from '::/views/stats'
import User from '::/views/user'

export default class SummonerPage extends Page {
  enter(ctx) {
    let summonerName = ctx.params.summoner

    // logged?
    //   load additional features

    let duels = new Duels('.duels', summonerName)
    let details = new Details('.details')
    let stats = new Stats('.stats', summonerName)
    let user = new User('.user', summonerName)

    duels.on('selected', ::details.update)
  }

  render() {
    return `
      <nav class="nav">
        <header class="user"></header>
        <div class="stats"></div>
      </nav>
      <ul class="duels"></ul>
      <div class="details"></div>
    `
  }
}
