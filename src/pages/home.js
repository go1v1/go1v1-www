import Page from '../../lib/page'

export class HomePage extends Page{
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
