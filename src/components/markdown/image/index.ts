import { Link } from "../";

class Image extends Link {
  get render(): string {
    return `!${super.render}`;
  }

  toString() {
    return `${this.render}\n`;
  }
}

export { Image }