import {Header, Markdown} from "../index";

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

  test('Testing bold', () => {
    const p = new Markdown();

    p.text('y0 homie').bold()

    expect(p.toString()).toBe('**y0 homie**\n');
  })

  test('Testing italic', () => {
    const p = new Markdown();

    p.text('y0 homie').italic()

    expect(p.toString()).toBe('*y0 homie*\n');
  })

  test('Testing bold and italic', () => {
    const p = new Markdown();

    p.text('y0 homie').bold().italic()

    expect(p.toString()).toBe('***y0 homie***\n');
  })
})