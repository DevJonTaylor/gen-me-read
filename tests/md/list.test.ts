import { List } from '../../src/components/markdown/';
import { markdownToBe } from "../testing.tools";
import { listStrings } from "./test.strings";

function ul(): List {
  return new List();
}

function ol(): List {
  return ul().ordered();
}

async function renderOrderedTest() {
  const list = ol();
  const addNewItem = async (text: string) => {
    const item = await list.item();
    item.text(text);
    return item;
  }
  await addNewItem('hello');
  await addNewItem('hello');
  await addNewItem('hello');
  await addNewItem('hello');

  markdownToBe(list, listStrings.renderOrderedList);
}

async function renderUnorderedTest() {
  const list = ul();
  list.item()
    .then(li => li.text('hello').item())
    .then(li => li.text('hello').item())
    .then(li => li.text('hello').item())
    .then(li => li.text('hello'))
    .then(() => markdownToBe(list, listStrings.renderUnorderedList))
    .catch(console.error);
}

function nestedListTest() {
  const list = ul();
  list.item()
    .then(li => li.text('hello').list())
    .then(ul => ul.item()) // Start Nested
    .then(li => li.text('hi').item())
    .then(li => li.text('hi').item())
    .then(li => li.text('hi'))// End Nested
    .then(() => list.item())
    .then(li => li.text('hello').list())
    .then(ul => ul.item()) // Start Nested
    .then(li => li.text('sup').list())
    .then(ul => ul.item()) // Start Nested 2
    .then(li => li.text('homes').item())
    .then(li => li.text('homes').item())
    .then(li => li.text('homes'))
    .then(() => markdownToBe(list, listStrings.nestedList))
    .catch(console.error)
}

describe('Markdown > List', () => {
  test('Rendering Unordered', renderUnorderedTest)
  test('Rendering Ordered', renderOrderedTest)
  test('Nested Lists', nestedListTest)
})