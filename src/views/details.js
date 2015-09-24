import View from '../../lib/view'
import Store from '../../lib/store'

export class Details extends View {
  constructor(selector) {
    super(selector)
  }

  update(duelId) {
    Store.duel(duelId).then((duel) => {
      this.duel = duel
      this.show()
    })
  }

  render() {
    let duel = this.duel
    return `
      <header class="summary">
        <div class="mode">${duel.mode.name}</div>
        <div class="score">${duel.decisive.creator} / ${duel.decisive.target} ${duel.decisive.name}</div>
      </header>
      <table class="scores">
        <thead>
          <tr>
            <th></th>
            <th>
              <figure class="summoner creator">
                <!-- <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"> -->
                <figcaption>${duel.creator}</figcaption>
              </figure>
            </th>
            <th>
              <figure class="summoner target">
                <!-- <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"> -->
                <figcaption>${duel.target}</figcaption>
              </figure>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="heading">
            <th></th>
            <th colspan="2">Rules</th>
          </tr>
          ${this.renderRules()}
          <tr class="heading">
            <th></th>
            <th colspan="2">Restrictions</th>
          </tr>
          ${this.renderRestrictions()}
          <tr class="heading">
            <th></th>
            <th colspan="2">Stuff</th>
          </tr>
          <tr>
            <th></th>
            <td>
              <ul>
                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
              </ul>
            </td>
            <td>
              <ul>
                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="stuff"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    `
  }

  renderRules() {
    let markup = ''
    for (let ruleId in this.duel.scores.rules) {
      let rule = this.duel.mode.rules[ruleId]
      let score = this.duel.scores.rules[ruleId]
      markup += `
        <tr>
          <th>${rule.value} ${rule.name}</td>
          <td>${score.creator}</td>
          <td>${score.target}</td>
        </tr>
      `
    }
    return markup
  }

  renderRestrictions() {
    let markup = ``
    for (let restrictionId in this.duel.mode.restrictions) {
      let restriction = this.duel.mode.restrictions[restrictionId]
      markup += `
        <tr>
          <th>${restriction.name}</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
      `
    }
    return markup
  }
}
