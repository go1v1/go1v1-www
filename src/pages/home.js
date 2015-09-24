import Page from 'go1v1-lib/page'

export default class HomePage extends Page{
  enter() {
    console.log('enter')
  }

  exit() {
    console.log('exit')
  }

  render() {
    return ''
  }
}
