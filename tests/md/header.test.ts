import { Header } from "../../src/components/markdown/";
import { markdownToBe as expectedToBe } from '../testing.tools';

const headerTextToTest = 'Sup Header';
const nl = '\n';

/**
 * This controls the expected headerText.
 * @param headerLevel
 */
function testingText(headerLevel: number): string {
  const hash = new Array(headerLevel > 6 ? 6 : headerLevel).fill('#').join('');
  return `${hash} ${headerTextToTest}${nl}`
}

/**
 * Creates a new Header and includes the testing text.
 */
function h(): Header {
  return new Header().text(headerTextToTest);
}

function renderTest(): void {
  expectedToBe(h(), testingText(1));
}

function sevenHeadersTest(): void {
  const headerTestText = [
    testingText(1),
    testingText(2),
    testingText(3),
    testingText(4),
    testingText(5),
    testingText(6),
    testingText(6),
  ]
  const header = h();
  header.header()
    .then(h => h.text(headerTextToTest).header())
    .then(h => h.text(headerTextToTest).header())
    .then(h => h.text(headerTextToTest).header())
    .then(h => h.text(headerTextToTest).header())
    .then(h => h.text(headerTextToTest).header())
    .then(h => h.text(headerTextToTest))
    .then(() => {
      expectedToBe(header, headerTestText.join(''))
    }).catch(console.error)
}

function paragraphInsideHeaderTest(): void {
  const pText = 'Place the lentils in a grinder, and rinse immediately with grey champaign.'
  const testText = [
    testingText(1),
    testingText(2),
    pText+nl
  ]

  const header = h();
  header.header()
    .then(h => h.text(headerTextToTest).p())
    .then(p => p.text(pText))
    .then(() => expectedToBe(header, testText.join('')))
    .catch(console.error)
}

describe('Markdown > Header', () => {
  test('Rendering', renderTest)
  test('children', sevenHeadersTest)
  test('Does not exceed sixth header', paragraphInsideHeaderTest)
})