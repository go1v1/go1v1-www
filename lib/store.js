import deepAssign from 'deep-assign'
import modes from 'go1v1-static/modes'
import rules from 'go1v1-static/rules'
import restrictions from 'go1v1-static/restrictions'

const firebase = new Firebase('https://popping-inferno-4756.firebaseio.com/')

export default class Store {
  static summoner(summonerName) {
    return firebaseFetch(`euw/summoners/${summonerName}`)
    .then((snapshot) => {
      let summoner = snapshot.val()
      summoner.name = snapshot.key()
      return summoner
    })
  }

  static duels(summonerName) {
    return firebaseFetch(`euw/summoner-duels/${summonerName}`)
    .then((snapshot) => {
      let duels = []
      snapshot.forEach((childSnapshot) => {
        let duel = childSnapshot.val()
        duel.id = childSnapshot.key()
        duels.push(duel)
      })
      return duels
    })
  }

  static duel(duelId) {
    return firebaseFetch(`euw/duels/${duelId}`)
    .then((snapshot) => {
      let duel = snapshot.val()
      duel.mode = deepAssign({}, modes[duel.mode])

      // rules enhancement
      let duelRules = duel.mode.rules
      for (let ruleId in duelRules) {
        duelRules[ruleId] = deepAssign({ value: duelRules[ruleId] }, rules[ruleId])
      }

      // restrictions enhancement
      for (let restrictionId in duel.mode.restrictions) {
        let restriction = duel.mode.restrictions[restrictionId]
        deepAssign(duel.mode.restrictions[restrictionId], restrictions[restrictionId])
      }

      // decisive score
      duel.decisive = deepAssign(duelRules[duel.decisive], duel.scores.rules[duel.decisive])

      return duel
    })
  }
}

function firebaseFetch(path) {
  return new Promise(function(resolve, reject) {
    firebase.child(path).on('value', function(snapshot) {
      resolve(snapshot)
    }, reject)
  })
}
