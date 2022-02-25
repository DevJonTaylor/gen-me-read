import {Header, Image, Link} from "../index";

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
   * If append is false then this overwrites the text in place with the new string.
   * If append is true then it adds it to the end including a space at the start of the new string.
   * @param str
   * @param append
   * @return this for chaining.
   */
  text(str: string, append: boolean = true): this {
    if(append)
      this.innerText += this.innerText === '' ? str : ` ${str}`;

    else
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
   * Creates a new Markdown and returns a promise that returns the element.
   */
  p(): Promise<Markdown> {
    return new Promise(res => res(new Markdown(this)))
  }

  /**
   * Returns a promise that returns a Header element.
   */
  header(): Promise<Header> {
    return new Promise(res => res(new Header(this)));
  }

  /**
   * Returns a promise that returns a Link element.
   */
  link(): Promise<Link> {
    return new Promise(res => res(new Link(this)));
  }

  /**
   * Returns a promise that returns an Image element.
   */
  image(): Promise<Image> {
    return new Promise(res => res(new Image(this)));
  }
}

export { Markdown }