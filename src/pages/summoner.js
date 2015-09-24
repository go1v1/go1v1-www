import Page from '../../lib/page'
import { Details, Duels, Stats, User } from '../views'

export class SummonerPage extends Page {
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
