export default class Auth {
  static connected() {
    return new Promise(function(resolve, reject) {
      resolve(Math.random() + .5 > 1)
    })
  }
}
