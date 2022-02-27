import {BadgeInterface, BadgeStyleTypes, ColorOptionInterface, TextOptionInterface} from "./badge.interfaces";

class Badge {
  /**
   * Quickly get the HTML 5 badge.
   */
  static get html(): Badge {
    return new Badge()
      .text('HTML')
      .color('333', 'E34F26', 'E34F26')
      .logo('html5')
  }

  /**
   * Quickly get the CSS3 badge.
   */
  static get css() {
    return new Badge()
      .text('CSS')
      .color('333', '1572B6', '1572B6')
      .logo('css3');
  }

  /**
   * Quickly get the JavaScript badge.
   */
  static get javaScript(): Badge {
    return new Badge()
      .text('JavaScript')
      .color('333', 'F7DF1E', 'F7DF1E')
      .logo('javascript');
  }

  /**
   * Convert an object literal to a Badge object.
   * @param badge
   */
  static objectToBadge(badge: BadgeInterface) {
    if(!badge.text) badge.text = {front: '', back: ''};
    if(!badge.color) badge.color = {front: '', back: '', logo: ''};
    return new Badge()
      .text(badge.text)
      .color(badge.color)
      .style(badge.style)
      .logo(badge.logo)
  }

  _text: TextOptionInterface = {front: '', back: ''}
  _color: ColorOptionInterface = {front: '', back: '', logo: ''}
  _logo: string = '';
  _style: BadgeStyleTypes = '';
  shieldUrl: string = 'https://img.shields.io/badge/';

  /**
   * getter that returns text > front
   */
  get textFront(): string {
    if(!this._text.front) this._text.front = '';
    return this._text.front
  }

  /**
   * getter that returns text > back
   */
  get textBack(): string {
    if(!this._text.back) this._text.back = '';
    return this._text.back;
  }

  /**
   * getter that returns the text object.
   */
  get texts(): TextOptionInterface {
    return this._text;
  }

  /**
   * getter that returns color > front
   */
  get colorFront(): string {
    if(!this._color.front) this._color.front = '';
    return this._color.front;
  }

  /**
   * getter that returns color > back
   */
  get colorBack(): string {
    if(!this._color.back) this._color.back = '';
    return this._color.back;
  }

  /**
   * getter that returns color > logo
   */
  get colorLogo(): string {
    if(!this._color.logo) this._color.logo = '';
    return this._color.logo;
  }

  /**
   * getter that returns color object
   */
  get colors(): ColorOptionInterface {
    return this._color;
  }

  /**
   * getter that returns the logo query used for the url.
   */
  get queryLogo() {
    return this._logo !== '' ? `logo=${encodeURIComponent(this.logo())}` : '';
  }

  /**
   * getter that returns the style query used for the url.
   */
  get queryStyle() {
    return this._style !== '' ? `style=${this.style()}` : '';
  }

  /**
   * getter that returns the color front query used for the url.
   */
  get queryColorFront() {
    return this.colorFront !== '' ? `colorA=${this.colorFront}` : ''
  }

  /**
   * getter that returns the logo color query used for the url.
   */
  get queryLogoColor() {
    const isLogoColor = (this.colorLogo !== '' && this._logo !== '');
    return isLogoColor ? `logoColor=${encodeURIComponent(this.colorLogo)}` : '';
  }

  /**
   * getter that returns all the used queries for the url.
   */
  get queries() {
    return [
      this.queryLogo,
      this.queryStyle,
      this.queryColorFront,
      this.queryLogoColor
    ]
      .filter(str => str !== '')
      .join('&');
  }

  /**
   * getter that returns the used arguments for the url.  In this case textFront-textBack-colorBack
   */
  get args() {
    return encodeURIComponent([this.textFront, this.textBack, this.colorBack].filter(str => str !== '').join('-'));
  }

  /**
   * Builds the URL for the shield badge.
   */
  get render(): string {
    const queries = this.queries;
    return `${this.shieldUrl}${this.args}${queries === '' ? '' : '?' + queries}`;
  }

  /**
   * getter that returns the Badge object as a literal.
   */
  get toObject(): BadgeInterface {
    return {
      color: this.colors,
      logo: this.logo(),
      style: this.style(),
      text: this.texts
    }
  }

  /**
   * getter that returns the Badge object as a JSON stringify.
   */
  get toJSON(): string {
    return JSON.stringify(this.toObject)
  }

  /**
   * If no argument is provided it will return the value of logo.
   */
  logo(): string

  /**
   * If a string is provided it will set the string to the value of logo and return this for chaining.
   * @param logo
   */
  logo(logo?: string): this
  logo(logo?: string): string | this {
    if(logo === undefined) return this._logo;

    this._logo = logo.toLowerCase();
    return this;
  }

  /**
   * If no argument is provided it will return the value of style.
   */
  style(): BadgeStyleTypes

  /**
   * If a accepted string is passed it will assign that value and return this for chaining.
   * @param style {string} This accepts (social, for-the-badge, flat-square, flat, plastic, '')
   */
  style(style?: BadgeStyleTypes ): this
  style(style?: BadgeStyleTypes): string | this {
    if(style === undefined) return this._style;
    switch(style.toLowerCase().replaceAll(' ', '-')) {
      case 'social':
      case 'for-the-badge':
      case 'flat-square':
      case 'flat':
      case 'plastic':
      case '':
        this._style = style;
        return this;
      default:
        this._style = '';
        return this;
    }
  }

  /**
   * Sets the style of the badge social.  Returns this for chaining.
   */
  social(): this {
    return this.style('social');
  }

  /**
   * Sets the style of the badge to for-the-badge.  Returns this for chaining.
   */
  forTheBadge(): this {
    return this.style('for-the-badge');
  }

  /**
   * Sets the style of the badge to flat-square.  Returns this for chaining.
   */
  flatSquare(): this {
    return this.style('flat-square');
  }

  /**
   * Sets the style of the badge flat.  Returns this for chaining.
   */
  flat(): this {
    return this.style('flat');
  }

  /**
   * Sets the style of the badge to plastic.  Returns this for chaining.
   */
  plastic(): this {
    return this.style('plastic');
  }

  /**
   * Removes the badge style.  Returns this for chaining.
   */
  noStyle(): this {
    return this.style('');
  }

  /**
   * Sets the values for color.
   * @param front {string|object} Object is assigned to color & string is assigned to color > front
   * @param back {string|undefined} If a string is passed it is assigned to color > back
   * @param logo {string|undefined} If a string is passed it is assigned to color > logo
   */
  color(front: string | ColorOptionInterface, back?: string, logo?: string): this {
    if(typeof front === 'object')
      this._color = front;
    else {
      if(back !== undefined) this._color.back = back;
      if(logo !== undefined) this._color.logo = logo;
      this._color.front = front;
    }

    return this;
  }

  /**
   * Sets the values for text.
   * @param front {object|string} Object is assigned to front & string is assigned to text > front.
   * @param back {string|undefined} String is assigned to text > back
   */
  text(front: string | TextOptionInterface, back?: string): this {
    typeof front === 'string' ?
      back !== undefined ?

        this._text = { front, back } :
        this._text.front = front :

      this._text = front;

    return this;
  }

  /**
   * Utilized this option to pass the object into a string and convert it to a URL.
   */
  toString(): string {
    return this.render;
  }
}

export { Badge }