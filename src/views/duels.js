import View from 'go1v1-lib/view'

export default class Duels extends View {
  bind() {
    this.selectedIndex = -1
    this.$selected = null
    this.$el.on('click.duels', '.duel', ::this.clicked)
  }

  render() {
    return this.duels
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

  get count() {
    return this.duels.length
  }

  select(index) {
    this.selectElement($(`.duel:nth-child(${index + 1})`))
  }

  next() {
    if (this.count - 1 === this.selectedIndex) return
    this.select(++this.selectedIndex)
  }

  prev() {
    if (0 === this.selectedIndex) return
    this.select(--this.selectedIndex)
  }

  clicked(e) {
    this.selectElement($(e.currentTarget))
  }

  selectElement($duel) {
    if (this.$selected) {
      this.$selected.removeClass('selected')
    }
    $duel.addClass('selected')
    this.selectedIndex = $duel.index()
    this.$selected = $duel
    this.emit('selected', this.duels[this.selectedIndex].id)
  }
}
