import { Header } from "../../src/components/markdown/header";

describe('Markdown', () => {
  test('toString', () => {
    const header = new Header();
    header.text('sup');
    expect(`${header}`).toBe('# sup\n');
  })

  test('children', () => {
    const header = new Header();
    header.text('sup')
      .newHeader((h2:Header) => {
        h2.text('sup 2')
          .newHeader((h3:Header) => {
            h3.text('sup 3')
          });
      })

    expect(`${header}`).toBe('# sup\n## sup 2\n### sup 3\n');
  })

  test('Does not exceed six headers', () => {
    const header = new Header();
    header.text('sup')
      .newHeader(h2 => {
        h2.text('sup 2')
          .newHeader(h3 => {
            h3.text('sup 3')
              .newHeader(h4 => {
                h4.text('sup 4')
                  .newHeader(h5 => {
                    h5.text('sup 5')
                      .newHeader(h6 => {
                        h6.text('sup 6')
                          .newHeader(h7 => {
                            h7.text('sup 7')
                          })
                      })
                  })
              })
          })
      })
    expect(`${header}`).toBe(`# sup\n## sup 2\n### sup 3\n#### sup 4\n##### sup 5\n###### sup 6\n###### sup 7\n`);
  })
})