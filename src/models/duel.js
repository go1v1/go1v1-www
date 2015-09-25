import assign from 'deep-assign'
import Model from 'go1v1-lib/model'
import modes from 'go1v1-static/modes'
import rules from 'go1v1-static/rules'
import restrictions from 'go1v1-static/restrictions'

const firebase = new Firebase('https://popping-inferno-4756.firebaseio.com/')

export default class Duel extends Model {
  enhance(snapshot, duel) {
    duel.mode = assign({}, modes[duel.mode])

    // rules enhancement
    let duelRules = duel.mode.rules
    for (let ruleId in duelRules) {
      duelRules[ruleId] = assign({ value: duelRules[ruleId] }, rules[ruleId])
    }

    // restrictions enhancement
    let duelRestrictions = duel.mode.restrictions
    for (let restrictionId in duelRestrictions) {
      let restriction = duelRestrictions[restrictionId]
      assign(duelRestrictions[restrictionId], restrictions[restrictionId])
    }

    // decisive score
    duel.decisive = assign(duelRules[duel.decisive], duel.scores.rules[duel.decisive])
  }

  static fetch(id) {
    return new Promise(function(resolve, reject) {
      firebase.child(`euw/duels/${id}`).on('value', Model.resolveWith(Duel, resolve), reject)
    })
  }
}
