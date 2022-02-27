import Markdown from './markdown';

/**
 * Markdown class for Lists both Unordered and Ordered.
 */
class List extends Markdown {
  indentLevel: number = 1;
  isOrdered: boolean = false;

  /**
   * Checks the indentLevel of the parent assuming it is a parent.
   * @param parent The parent element.  If undefined then this element is considered a root/parent element.
   * @param numbered This tells the element if it is ordered or unordered list.
   */
  constructor(parent?: Markdown, numbered: boolean = false) {
    super(parent);

    if(parent instanceof List) {
      this.indentLevel = this.indentLevel + parent.indentLevel;
    }

    this.isOrdered = numbered;
  }

  /**
   * Toggles if this is a ordered list or unordered list.  Returns this for chaining.
   */
  ordered(): this {
    this.isOrdered = !this.isOrdered;

    return this;
  }

  /**
   * Adds a new item to the list.
   */
  item(): Promise<ListItem> {
    return new Promise(res => res(new ListItem(this)));
  }

  /**
   * Creates a new List to be added to the list.  This allows an indented item.
   */
  list(): Promise<List> {
    return new Promise(res => res(new List(this)));
  }

  /**
   * Reworked the getter render to fit the List class.
   */
  get render(): string {
    const text = [];
    const indents = new Array(this.indentLevel).fill('  ').join('');
    let currentNumber = this.isOrdered ? 1 : 0;
    const label = currentNumber === 0 ?
      () => ' - ' :
      () => ` ${currentNumber++}. `

    for(let child of this.children) {
      if(child instanceof List) {
        text.push(child)
      } else {
        text.push(`${indents}${label()}${child}`);
      }
    }

    return text.join('');
  }

  /**
   * Reworked the toString to fit the List class.
   */
  toString() {
    return this.render;
  }
}

class ListItem extends Markdown {
  parent: List;

  constructor(parent: List) {
    super(parent);

    this.parent = parent;
  }

  item(): Promise<ListItem> {
    return this.parent.item();
  }

  list(): Promise<List> {
    return this.parent.list();
  }
}

export { List, ListItem, Markdown }