import View from 'go1v1-lib/view'

export default class Details extends View {
  update(duel) {
    this.duel = duel
    this.show()
  }

  render() {
    let duel = this.duel
    return `
      <header class="summary">
        <div class="mode">${duel.mode.name}</div>
        <div class="score">${duel.creator.scores[duel.decisive]} / ${duel.target.scores[duel.decisive]} ${duel.mode.rules[duel.decisive].name}</div>
      </header>
      <table class="scores">
        <thead>
          <tr>
            <th></th>
            <th>
              <figure class="summoner creator">
                <!-- <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"> -->
                <figcaption>${duel.creator.name}</figcaption>
              </figure>
            </th>
            <th>
              <figure class="summoner target">
                <!-- <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"> -->
                <figcaption>${duel.target.name}</figcaption>
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
              <ul class="stuff">
                <li class="item"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="item"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="item"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="item"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="item"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
              </ul>
            </td>
            <td>
              <ul class="stuff">
                <li class="item"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="item"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="item"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="item"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
                <li class="item"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    `
  }

  renderRules(duel) {
    return _.reduce(duel.mode.rules, (markup, rule, id) => {
      markup += `
        <tr>
          <th>${rule.value} ${rule.name}</td>
          <td>${duel.creator.scores[id]}</td>
          <td>${duel.target.scores[id]}</td>
        </tr>
      `
      return markup
    }, '')
  }

  renderRestrictions(duel) {
    return _.reduce(duel.mode.restrictions, (markup, restriction) => {
      markup += `
        <tr>
          <th>${restriction.name}</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
      `
      return markup
    }, '')
  }
}
