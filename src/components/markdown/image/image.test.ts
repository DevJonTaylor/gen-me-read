import { Header, Image } from '../'

describe('Markdown > Image', () => {
  test('Image element by itself', () => {
    const image = new Image();

    image
      .text('Code Button')
      .url('./assets/images/code_button.png')

    expect(`${image}`).toBe('![Code Button](./assets/images/code_button.png)\n')
  })

  test('Image element as a child', () => {
    const header = new Header();

    header
      .text('Sup!')
      .image()
      .then(image => image.text('Code Button').url('./assets/images/code_button.png'))
      .then(() => {
        expect(`${header}`).toBe(`# Sup!
![Code Button](./assets/images/code_button.png)
`)
      })
      .catch(console.error)
  })
})