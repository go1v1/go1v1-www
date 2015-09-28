import Auth from '::/services/auth'
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
    this.view('.nav', NavView, {
      summoner: Summoner.fetch(summonerName),
      connected: Auth.connected()
    })
    this.view('.duels', DuelsView, {
      duels: Duels.fetch(summonerName),
      summonerName: summonerName
    })
    .then(duelsView => {
      duelsView.on('selected', duelId => {
        let detailsView = this.view('.details')
        Duel.fetch(duelId).then(::detailsView.update)
      })

      if (0 !== duelsView.count) {
        duelsView.select(0)
      }
    })
  }

  bind() {
    $(document).on('keyup.summonerPage', ::this.key)
  }

  unbind() {
    $(document).off('duels.summonerPage')
  }

  render() {
    return `
      <nav class="nav"></nav>
      <ul class="duels"></ul>
      <div class="details"></div>
    `
  }

  key(e) {
    let duelsView = this.view('.duels')
    if (40 === e.which) {
      duelsView.next()
    }
    else if (38 === e.which) {
      duelsView.prev()
    }
  }
}
