import {Header, Link} from '../'

describe('Markdown > Link', () => {
  test('Link element by itself', () => {
    const link = new Link();

    link
      .text('Bootstrap v5.1.3')
      .url('https://getbootstrap.com/')

    expect(link.toString()).toBe('[Bootstrap v5.1.3](https://getbootstrap.com/)')
  })

  test('Link element as a child', () => {
    const header = new Header();

    header
      .text('Sup!')
      .link()
      .then(link => link.text('Bootstrap v5.1.3').url('https://getbootstrap.com/'))
      .then(() => {
        expect(header.toString()).toBe(`# Sup!
[Bootstrap v5.1.3](https://getbootstrap.com/)`)
      })
      .catch(console.error)
  })
})