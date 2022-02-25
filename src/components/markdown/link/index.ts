import { Markdown } from "../";

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

  toString(): string {
    return this.render;
  }
}

export { Link }