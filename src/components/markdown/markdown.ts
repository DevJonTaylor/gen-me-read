import {Header} from "./header";


/**
 * Abstract class created for extending.
 */
class Markdown {
  /**
   * Holds the text to be displayed.
   */
  innerText: string = '';

  /**
   * A reference to the root for this element.
   */
  root: Markdown = this;

  /**
   * A reference to the parent of this element.
   */
  parent: Markdown = this;

  /**
   * Collection of elements that are children of this element.
   */
  children: Array<Markdown> = [];

  /**
   * @param parent The parent element of this element.
   * If it is undefined then the element does not have a parent.
   */
  constructor(parent?: Markdown | undefined) {
    if(!parent) return;
    this.root = parent.root;
    this.parent = parent;

    this.parent.addChild(this);
  }

  /**
   * Adds a child element to the children array.
   * @param child
   * @return this for chaining.
   */
  addChild(child: Markdown): this {
    this.children.push(child);
    return this;
  }

  /**
   * Sets the string to the innerText.
   * @param str
   * @return this for chaining.
   */
  text(str: string): this {
   this.innerText = str;

   return this;
  }

  /**
   * A getter that returns the needed text as Markdown.
   */
  get render(): string {
    return `${this.innerText}`;
  }

  /**
   * Created so that the element can be added to a string and automatically render.
   */
  toString(): string {
    if(this.children.length > 0)
      return `${this.render}\n${this.children.join('')}`
    return `${this.render}\n`;
  }

  /**
   * Creates a Header and passes it as an argument to the function added.
   * @param cb
   * @return this for chaining
   */
  newHeader(cb: (header: Header) => void) {
    const header = new Header(this);
    cb(header);

    return this;
  }
}

export { Markdown }