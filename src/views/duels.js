import View from 'go1v1-lib/view'
import Store from 'go1v1-lib/store'
import DuelView from '::/views/duel'

export default class Duels extends View {
  constructor(selector, summonerName) {
    super(selector)

    this.summonerName = summonerName
    this.$selected = null

    Store.duels(summonerName).then((duels) => {
      this.duels = duels
      this.show()

      this.$el.on('click', '.duel', ::this.clicked)
      $(document).on('keyup', ::this.key)
    })
  }

  render() {
    return this.duels
    .map((duel) => new DuelView(this.selector, this.summonerName, duel))
    .reduce((html, view) => {
      html += `<li class="duel">${view.render()}</li>`
      return html
    }, '')
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

    this.emit('selected', this.duels[$duel.index()].id)
  }
}
