const firebase = new Firebase('https://popping-inferno-4756.firebaseio.com/')

const auth = firebase.getAuth()

export default class Auth {
  static get connected() {
    return null !== auth
  }

  static get uid() {
    if (!auth) return null
    return auth.uid
  }
}
