import Page from 'go1v1-lib/page'
import DetailsView from '::/views/details'
import Duel from '::/models/duel'
import Duels from '::/collections/duels'
import DuelsView from '::/views/duels'
import NavView from '::/views/nav'
import Summoner from '::/models/summoner'

export default class SummonerPage extends Page {
  enter(ctx) {
    let summonerName = ctx.params.summoner

    // logged?
    //   load additional features

    this.view('.details', DetailsView)
    this.view('.nav', NavView, Summoner.fetch(summonerName))
    this.view('.duels', DuelsView, Duels.fetch(summonerName)).then((duelsView) => {
      duelsView.on('selected', (duelId) => {
        let detailsView = this.view('.details')
        Duel.fetch(duelId).then(::detailsView.update)
      })
    })
  }

  render() {
    return `
      <nav class="nav"></nav>
      <ul class="duels"></ul>
      <div class="details"></div>
    `
  }
}
