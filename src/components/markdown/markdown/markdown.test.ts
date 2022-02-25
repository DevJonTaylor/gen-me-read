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

  test('Testing strikethrough, bold, and italic combinations', () => {
    const p = new Markdown();

    p.text('y0 homie')

    expect(p.bold().italic().strike().toString()).toBe('***~~y0 homie~~***\n');
    expect(p.italic().toString()).toBe('**~~y0 homie~~**\n')
    expect(p.italic().bold().toString()).toBe('*~~y0 homie~~*\n')
    expect(p.strike().bold().toString()).toBe('***y0 homie***\n')
  })
})