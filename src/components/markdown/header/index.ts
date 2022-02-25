import { Markdown } from '../index';

/**
 * This class is a header.
 * It will automatically adjust itself based on the header parents level.
 * It will not exceed six.
 */
class Header extends Markdown {

  /**
   * This variable represents the header level.  How many # will be before the text.
   * It will not exceed six.
   */
  headerLevel: number = 1;

  /**
   * Basically the same as Markdown, except it checks the header level to ensure it is not greater than six.
   * @param parent
   */
  constructor(parent?: Markdown | undefined) {
    super(parent);
    if(!parent) return

    if(parent instanceof Header) {
      this.headerLevel = parent.headerLevel + this.headerLevel;
      if(this.headerLevel > 6)
        this.headerLevel = 6;
    }
  }

  /**
   * Render adjusted to fit the header markdown.
   */
  get render() {
    const header = new Array(this.headerLevel).fill('#').join('');

    return `${header} ${super.render}`;
  }
}

export { Header }