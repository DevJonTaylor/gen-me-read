import { Header, Image } from "../../src/components/markdown";
import { Badge } from "../../src/components/badge";
import { markdownToBe as expectedToBe } from "../testing.tools";

const imageJavaScriptBadge = `![](${Badge.javaScript})`
const imageCSSBadge = `![](${Badge.css})`
const imageHTMLBadge = `![](${Badge.html})`
const loremHeader = 'Assimilatios'
const loremSentence1 = `Combine lobster, white bread and rice.`
const loremSentence2 = `flavor with sliced marmalade and serve breaked with ginger.`;
const implementationText = [
  `# ${loremHeader}`,
  `## ${loremHeader}`,
  `${imageCSSBadge} ${loremSentence1} ${loremSentence2}`
].join('\n');

function js() {
  return new Image().url(`${Badge.javaScript}`)
}

function css() {
  return new Image().url(Badge.css)
}

function renderTest() {
  expectedToBe(js(), imageJavaScriptBadge);
}

function implementationTest() {
  const header = new Header();
  header
    .text(loremHeader)
    .header()
    .then(h => h.text(loremHeader).p())
    .then(p => p.text(`${css()} ${loremSentence1} ${loremSentence2}`))
    .then(() => expectedToBe(header, implementationText + '\n'))
    .catch(console.error)
}

function badgeTest() {
  expectedToBe(Image.htmlBadge, imageHTMLBadge)
}


describe('Markdown > Image', () => {
  test('Rendering', renderTest);
  test('Implementation', implementationTest);
  test('Badge Test', badgeTest);
})