import Markdown from "./markdown";

class Link extends Markdown {
  _url: string = '';

  constructor(parent?: Markdown) {
    super(parent)
  }

  url(url: string): this {
    this._url = url;

    return this;
  }

  get render(): string {
    return `[${super.render}](${this._url})`;
  }

  /**
   * This needed to be overwritten to remove the newline.
   */
  toString(): string {
    return this.render;
  }
}

export { Markdown, Link }