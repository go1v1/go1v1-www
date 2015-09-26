import Model from 'go1v1-lib/model'

// const firebase = new Firebase('https://popping-inferno-4756.firebaseio.com/')

export default class Summoner extends Model {
  enhance(snapshot, summoner) {
    summoner.name = snapshot.key()
  }

  static fetch(name) {
    return new Promise(function(resolve, reject) {
      resolve(new Summoner({
        val() {
          return {
            victories: 2,
            defeats: 0
          }
        },
        key() {
          return 'ngryman'
        }
      }))
      // firebase.child(`euw/summoners/${name}`).on('value', function(snapshot) {
      //   resolve(new Summoner(snapshot))
      // }, reject)
    })
  }
}
