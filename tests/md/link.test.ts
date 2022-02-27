import { Link, Header } from "../../src/components/markdown";
import { markdownToBe as expectedToBe } from "../testing.tools";

const text = 'Bootstrap';
const url = 'https://getbootstrap.com';
const link = `[${text}](${url})`;
const expectedMarkdownToTest = [
  '# Welcome\n',
  `The parrot hoists with yellow fever, ${link} ransack the fortress.\n`
  ];

function a() {
  return new Link().text(text).url(url);
}

function renderTest() {
  expectedToBe(a(), link);
}

function implementationTest() {
  const header = new Header().text('Welcome');
  header.p()
    .then(p => p.text(`The parrot hoists with yellow fever, ${a()} ransack the fortress.`))
    .then(() => expectedToBe(header, expectedMarkdownToTest.join('')))
    .catch(console.error)
}

describe('Markdown > Link', () => {
  test('Rendering', renderTest)
  test('Implementation', implementationTest)
})