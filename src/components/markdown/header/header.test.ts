import { Header } from "../index";

describe('Markdown > Header', () => {
  test('toString', () => {
    const header = new Header();
    header.text('sup');
    expect(`${header}`).toBe('# sup\n');
  })

  test('children', async () => {
    const header = new Header();

    header.text('sup');
    const h2 = await header.header();
    const h3 = await h2.header();
    h2.text('sup 2');
    h3.text('sup 3');

    expect(`${header}`).toBe(`# sup
## sup 2
### sup 3
`);
  })

  test('Does not exceed sixth header', () => {
    const h1 = new Header();
    h1.header()
      .then(h => h.text('sup 2').header())
      .then(h => h.text('sup 3').header())
      .then(h => h.text('sup 4').header())
      .then(h => h.text('sup 5').header())
      .then(h => h.text('sup 6').header())
      .then(h => h.text('sup 7'))
      .then(() => {
        expect(`${h1.text('sup')}`)
          .toBe(`# sup
## sup 2
### sup 3
#### sup 4
##### sup 5
###### sup 6
###### sup 7
`)
      });
  })
})