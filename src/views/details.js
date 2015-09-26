import View from 'go1v1-lib/view'

export default class Details extends View {
  update(duel) {
    this.duel = duel
    this.show()
    // TODO: assign constructors parameters in view with pluralization of component's kind
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
          ${this.renderRules(duel)}
          <tr class="heading">
            <th></th>
            <th colspan="2">Restrictions</th>
          </tr>
          ${this.renderRestrictions(duel)}
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

  renderRules(duel) {
    let markup = ''
    for (let ruleId in duel.scores.rules) {
      let rule = duel.mode.rules[ruleId]
      let score = duel.scores.rules[ruleId]
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

  renderRestrictions(duel) {
    let markup = ``
    for (let restrictionId in duel.mode.restrictions) {
      let restriction = duel.mode.restrictions[restrictionId]
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
