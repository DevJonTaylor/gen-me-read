import { Link, Markdown } from "./link";
import {Badge, BadgeInterface} from "../badge";

class Image extends Link {
  static get htmlBadge(): Image {
    return new Image().url(Badge.html)
  }

  static get cssBadge(): Image {
    return new Image().url(Badge.css)
  }

  static get jsBadge(): Image {
    return new Image().url(Badge.javaScript)
  }

  static badge(badge: Badge | BadgeInterface) {
    const isBadge = badge instanceof Badge;

    return new Image().url(!isBadge ? Badge.objectToBadge(badge) : badge);
  }

  /**
   * Implementing the ability to accept a Badge object.
   * @param url
   */
  url(url: string | Badge): this {
    this._url = `${url}`;

    return this;
  }

  get render(): string {
    return `!${super.render}`;
  }
}

export { Image, Link, Markdown }