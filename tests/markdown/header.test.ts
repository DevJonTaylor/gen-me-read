import { Header } from "../../src/components/markdown/";

describe('Markdown', () => {
  test('toString', () => {
    const header = new Header();
    header.text('sup');
    expect(`${header}`).toBe('# sup\n');
  })

  test('children', async () => {
    const header = new Header();
    expect.assertions(1);

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

  test('Does not exceed sixth header', async () => {
    expect.assertions(1);

    const h1 = new Header();
    const h2 = await h1.text('sup').header();
    const h3 = await h2.text('sup 2').header();
    const h4 = await h3.text('sup 3').header();
    const h5 = await h4.text('sup 4').header();
    const h6 = await h5.text('sup 5').header();
    const h7 = await h6.text('sup 6').header();

    h7.text('sup 7');

    expect(`${h1}`).toBe(`# sup
## sup 2
### sup 3
#### sup 4
##### sup 5
###### sup 6
###### sup 7
`);
  })
})