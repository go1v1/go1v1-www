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
      resolve({
        1: new Duel({
          val() {
            return {
              creator: 'ngryman',
              target: 'Vocyfera2',
              winner: 'ngryman',
              mode: 'classic',
              decisive: 'cs',
              scores: {
                rules: {
                  kill: {
                    creator: 3,
                    target: 1
                  },
                  cs: {
                    creator: 100,
                    target: 23
                  },
                  turret: {
                    creator: 0,
                    target: 0
                  }
                }
              }
            }
          },
          key() {
            return 1
          }
        }),
        2: new Duel({
          val() {
            return {
              creator: 'ngryman',
              target: 'Vocyfera2',
              winner: 'ngryman',
              mode: 'display_of_skill',
              decisive: 'kill',
              scores: {
                rules: {
                  kill: {
                    creator: 1,
                    target: 0
                  }
                }
              }
            }
          },
          key() {
            return 2
          }
        })
      }[id])
      // firebase.child(`euw/duels/${id}`).on('value', Model.resolveWith(Duel, resolve), reject)
    })
  }
}
