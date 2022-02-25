import {Header} from "../index";

describe('Markdown', () => {
  test('Testing p', () => {
    const h1 = new Header();
    h1.text('sup')
      .p()
      .then(p => p.text('This is a paragraph for the definition of sup project'))
      .then(() => {
        expect(h1.toString()).toBe(`# sup
This is a paragraph for the definition of sup project
`);
      });
  })
})