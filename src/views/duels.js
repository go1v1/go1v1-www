import View from 'go1v1-lib/view'

export default class Duels extends View {
  bind() {
    this.$selected = null
    this.$el.on('click', '.duel', ::this.clicked)
    $(document).on('keyup.duels', ::this.key)
  }

  unbind() {
    $(document).off('duels')
  }

  render() {
    return this.duelPreviews
    .reduce((markup, duel) =>
      markup + this.renderDuel(duel)
    , '')
  }

  renderDuel(duel) {
    return `
      <li class="duel">
        ${this.renderCup(duel)}
        ${this.renderSummoner(duel.creator)}
        <span class="vs">vs</span>
        ${this.renderSummoner(duel.target)}
      </li>
    `
  }

  renderCup(duel) {
    return this.summonerName === duel[duel.winner] ? `
      <div class="cup">
        <svg>
          <use xlink:href="#svg-cup">
        </svg>
      </div>
    ` : ''
  }

  renderSummoner(summonerName) {
    return `
      <figure class="summoner creator">
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
        <figcaption>${summonerName}</figcaption>
      </figure>
    `
  }

  clicked(e) {
    this.selectElement($(e.currentTarget))
  }

  key(e) {
    if (40 === e.which) {
      this.selectElement(this.$selected.next())
    }
    else if (38 === e.which) {
      this.selectElement(this.$selected.prev())
    }
  }

  selectElement($duel) {
    if (this.$selected) {
      this.$selected.removeClass('selected')
    }
    $duel.addClass('selected')
    this.$selected = $duel
    this.emit('selected', this.duelPreviews[$duel.index()].id)
  }
}
