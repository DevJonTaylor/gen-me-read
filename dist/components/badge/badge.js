"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
class Badge {
    constructor() {
        this._text = { front: '', back: '' };
        this._color = { front: '', back: '', logo: '' };
        this._logo = '';
        this._style = '';
        this.shieldUrl = 'https://img.shields.io/badge/';
    }
    /**
     * Quickly get the HTML 5 badge.
     */
    static get html() {
        return new Badge()
            .text('HTML')
            .color('333', 'E34F26', 'E34F26')
            .logo('html5');
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
    static get javaScript() {
        return new Badge()
            .text('JavaScript')
            .color('333', 'F7DF1E', 'F7DF1E')
            .logo('javascript');
    }
    /**
     * Convert an object literal to a Badge object.
     * @param badge
     */
    static objectToBadge(badge) {
        if (!badge.text)
            badge.text = { front: '', back: '' };
        if (!badge.color)
            badge.color = { front: '', back: '', logo: '' };
        return new Badge()
            .text(badge.text)
            .color(badge.color)
            .style(badge.style)
            .logo(badge.logo);
    }
    /**
     * getter that returns text > front
     */
    get textFront() {
        if (!this._text.front)
            this._text.front = '';
        return this._text.front;
    }
    /**
     * getter that returns text > back
     */
    get textBack() {
        if (!this._text.back)
            this._text.back = '';
        return this._text.back;
    }
    /**
     * getter that returns the text object.
     */
    get texts() {
        return this._text;
    }
    /**
     * getter that returns color > front
     */
    get colorFront() {
        if (!this._color.front)
            this._color.front = '';
        return this._color.front;
    }
    /**
     * getter that returns color > back
     */
    get colorBack() {
        if (!this._color.back)
            this._color.back = '';
        return this._color.back;
    }
    /**
     * getter that returns color > logo
     */
    get colorLogo() {
        if (!this._color.logo)
            this._color.logo = '';
        return this._color.logo;
    }
    /**
     * getter that returns color object
     */
    get colors() {
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
        return this.colorFront !== '' ? `colorA=${this.colorFront}` : '';
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
    get render() {
        const queries = this.queries;
        return `${this.shieldUrl}${this.args}${queries === '' ? '' : '?' + queries}`;
    }
    /**
     * getter that returns the Badge object as a literal.
     */
    get toObject() {
        return {
            color: this.colors,
            logo: this.logo(),
            style: this.style(),
            text: this.texts
        };
    }
    /**
     * getter that returns the Badge object as a JSON stringify.
     */
    get toJSON() {
        return JSON.stringify(this.toObject);
    }
    logo(logo) {
        if (logo === undefined)
            return this._logo;
        this._logo = logo.toLowerCase();
        return this;
    }
    style(style) {
        if (style === undefined)
            return this._style;
        switch (style.toLowerCase().replaceAll(' ', '-')) {
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
    social() {
        return this.style('social');
    }
    /**
     * Sets the style of the badge to for-the-badge.  Returns this for chaining.
     */
    forTheBadge() {
        return this.style('for-the-badge');
    }
    /**
     * Sets the style of the badge to flat-square.  Returns this for chaining.
     */
    flatSquare() {
        return this.style('flat-square');
    }
    /**
     * Sets the style of the badge flat.  Returns this for chaining.
     */
    flat() {
        return this.style('flat');
    }
    /**
     * Sets the style of the badge to plastic.  Returns this for chaining.
     */
    plastic() {
        return this.style('plastic');
    }
    /**
     * Removes the badge style.  Returns this for chaining.
     */
    noStyle() {
        return this.style('');
    }
    /**
     * Sets the values for color.
     * @param front {string|object} Object is assigned to color & string is assigned to color > front
     * @param back {string|undefined} If a string is passed it is assigned to color > back
     * @param logo {string|undefined} If a string is passed it is assigned to color > logo
     */
    color(front, back, logo) {
        if (typeof front === 'object')
            this._color = front;
        else {
            if (back !== undefined)
                this._color.back = back;
            if (logo !== undefined)
                this._color.logo = logo;
            this._color.front = front;
        }
        return this;
    }
    /**
     * Sets the values for text.
     * @param front {object|string} Object is assigned to front & string is assigned to text > front.
     * @param back {string|undefined} String is assigned to text > back
     */
    text(front, back) {
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
    toString() {
        return this.render;
    }
}
exports.Badge = Badge;
