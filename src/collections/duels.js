import Model from 'go1v1-lib/model'

// const firebase = new Firebase('https://popping-inferno-4756.firebaseio.com/')

export default class Duels {
  static fetch(summonerName) {
    return new Promise(function(resolve, reject) {
      resolve([
        new DuelPreview({
          val() {
            return {
              creator: 'ngryman',
              target: 'Vocyfera2',
              winner: 'ngryman'
            }
          },
          key() {
            return 1
          }
        }),
        new DuelPreview({
          val() {
            return {
              creator: 'ngryman',
              target: 'Vocyfera2',
              winner: 'ngryman'
            }
          },
          key() {
            return 2
          }
        })
      ])
      // firebase.child(`euw/summoner-duels/${summonerName}`).on('value', function(snapshot) {
      //   let duels = []
      //   snapshot.forEach((childSnapshot) => {
      //     duels.push(new DuelPreview(childSnapshot))
      //   })
      //   resolve(duels)
      // }, reject)
    })
  }
}

class DuelPreview extends Model {
  enhance(snapshot, duelPreview) {
    duelPreview.id = snapshot.key()
  }
}
