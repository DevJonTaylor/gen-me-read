"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Abstract class created for extending.
 */
class Markdown {
    constructor(parent) {
        /**
         * Holds the text to be displayed.
         */
        this.innerText = '';
        /**
         * Tells render if the innerText is bold.
         */
        this.isBold = false;
        /**
         * Tells render if the innerText is italic
         */
        this.isItalic = false;
        /**
         * Tells render if the innerText is strikethrough.
         */
        this.isStrike = false;
        /**
         * Collection of elements that are children of this element.
         */
        this.children = [];
        if (!parent)
            return;
        parent.addChild(this);
    }
    /**
     * Creates a new Markdown old that is accessible inside a promise.
     */
    p() {
        return new Promise(res => res(new Markdown(this)));
    }
    /**
     * Adds a child element to the children array.
     * @param child
     * @return this for chaining.
     */
    addChild(child) {
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
    text(str, append = true) {
        if (append)
            this.innerText += this.innerText === '' ? str : ` ${str}`;
        else
            this.innerText = str;
        return this;
    }
    /**
     * Toggles bold on and off for the entire innerText.
     * @return this for chaining.
     */
    bold() {
        this.isBold = !this.isBold;
        return this;
    }
    /**
     * Toggles italic on and off for the entire innerText.
     * @return this for chaining.e
     */
    italic() {
        this.isItalic = !this.isItalic;
        return this;
    }
    /**
     * Toggles strikethrough on and off for the entire innerText.
     */
    strike() {
        this.isStrike = !this.isStrike;
        return this;
    }
    /**
     * Created so that the element can be added to a string and automatically render.
     */
    toString() {
        if (this.children.length > 0)
            return `${this.render}\n${this.children.join('')}`;
        return `${this.render}\n`;
    }
    /**
     * A getter that returns the needed text as Markdown.
     */
    get render() {
        let text = this.innerText;
        if (this.isStrike)
            text = `~~${text}~~`;
        if (this.isItalic)
            text = `*${text}*`;
        if (this.isBold)
            text = `**${text}**`;
        return `${text}`;
    }
}
exports.default = Markdown;
