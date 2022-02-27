import { Markdown } from "../../src/components/markdown";
import { markdownToBe } from "../testing.tools";

const paragraphToTest = `This is a paragraph for the definition of sup project`;
const nl = '\n'

function testingText(frontAndBack?: string, reverseBack: boolean = true): string {
  if(frontAndBack === undefined) return paragraphToTest;
  if(frontAndBack === '') return paragraphToTest + nl;

  const text = [paragraphToTest];
  const front = frontAndBack;
  const back = !reverseBack ? frontAndBack : frontAndBack.split('').reverse().join('');

  text.unshift(front);
  text.push(back);

  return text.join('') + nl;
}

function p(): Markdown {
  return new Markdown().text(testingText());
}

/**
 * Testing against the Markdown ability to convert to text.
 */
function testingRender(): void {
  markdownToBe(p(), testingText(''))
}

/**
 * Testing against the ability to create bold text.
 */
function testingBold(): void {
  markdownToBe(p().bold(), testingText('**', false));
}

/**
 * Testing against the ability to create italic text.
 */
function testingItalic(): void {
  markdownToBe(p().italic(), testingText('*', false))
}

/**
 * Testing against the ability to create strikethrough text.
 */
function testingStrike(): void {
  markdownToBe(p().strike(), testingText('~~', false))
}

/**
 * Testing against the ability to utilize combination of different styles.
 * 1. Bold & Strikethrough
 * 2. Bold & Italic
 * 3. Italic & Strikethrough
 * 4. Italic & Strikethrough & Bold
 */
function testingCombination() {
  const md = p();
  // Toggling Bold and Strike on.  Should be Bold and Strike.
  markdownToBe(md.bold().strike(), testingText('**~~'))

  // Toggling Italic on and Strike off. Should be Italic and Bold.
  markdownToBe(md.italic().strike(), testingText('***'))

  // Toggling Bold off and Strike on.  Should be Italic and Strike.
  markdownToBe(md.strike().bold(), testingText('*~~'))

  // Toggling Bold on.  Should be Bold, Italic, and Strike.
  markdownToBe(md.bold(), testingText('***~~'))
}

describe('Markdown', () => {
  test('Testing render', testingRender)
  test('Testing bold', testingBold)
  test('Testing italic', testingItalic)
  test('Testing strikethrough', testingStrike)
  test('Testing strikethrough, bold, and italic combinations', testingCombination)
})