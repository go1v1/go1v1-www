import View from '../../lib/view'

export default class Duel extends View {
  constructor(selector, summonerName, duel) {
    super(selector)
    this.summonerName = summonerName
    this.duel = duel
  }

  render() {
    return `
      ${this.renderCup()}
      <figure class="summoner creator">
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
        <figcaption>ngryman</figcaption>
      </figure>
      <span class="vs">vs</span>
      <figure class="summoner target">
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
        <figcaption>Vocyfera2</figcaption>
      </figure>
    `
  }

  renderCup() {
    return this.summonerName === this.duel[this.duel.winner] ? `
      <div class="cup">
        <svg>
          <use xlink:href="#svg-cup">
        </svg>
      </div>
    ` : ''
  }
}
