const firebase = new Firebase('https://popping-inferno-4756.firebaseio.com/')

export default class SummonerService {
  get(name) {
    return firebaseFetch(`euw/summoners/${name}`)
    .then((snapshot) => snapshot.val())
  }
}

function firebaseFetch(path) {
  return new Promise(function(resolve, reject) {
    firebase.child(path).on('value', function(snapshot) {
      resolve(snapshot)
    }, reject)
  })
}
