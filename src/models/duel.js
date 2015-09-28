import assign from 'deep-assign'
import Model from 'go1v1-lib/model'
import modes from 'go1v1-static/modes'
import rules from 'go1v1-static/rules'
import restrictions from 'go1v1-static/restrictions'

const firebase = new Firebase('https://popping-inferno-4756.firebaseio.com/')

export default class Duel extends Model {
  enhance(snapshot, duel) {
    duel.mode = assign({}, modes[duel.mode])

    // rules instanciation
    duel.mode.rules = _.mapValues(duel.mode.rules, (val, id) =>
      assign({ value: val }, rules[id])
    )

    // restrictions instanciation
    duel.mode.restrictions = _.mapValues(duel.mode.restrictions, (val, id) =>
      assign(duel.mode.restrictions[id], restrictions[id])
    )
  }

  static fetch(id) {
    return new Promise(function(resolve, reject) {
      firebase.child(`euw/duels/${id}`).on('value', Model.resolveWith(Duel, resolve), reject)
    })
  }
}
