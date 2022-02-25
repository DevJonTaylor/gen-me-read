"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Markdown = void 0;
const _1 = require("./");
/**
 * Abstract class created for extending.
 */
class Markdown {
    /**
     * @param parent The parent element of this element.
     * If it is undefined then the element does not have a parent.
     */
    constructor(parent) {
        /**
         * Holds the text to be displayed.
         */
        this.innerText = '';
        /**
         * A reference to the root for this element.
         */
        this.root = this;
        /**
         * A reference to the parent of this element.
         */
        this.parent = this;
        /**
         * Collection of elements that are children of this element.
         */
        this.children = [];
        if (!parent)
            return;
        this.root = parent.root;
        this.parent = parent;
        this.parent.addChild(this);
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
            this.innerText += str;
        else
            this.innerText = str;
        return this;
    }
    /**
     * A getter that returns the needed text as Markdown.
     */
    get render() {
        return `${this.innerText}`;
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
     * Creates a new Markdown and returns a promise that returns the element.
     */
    p() {
        return new Promise(res => res(new Markdown(this)));
    }
    /**
     * Returns a promise that returns a Header element.
     */
    header() {
        return new Promise(res => res(new _1.Header(this)));
    }
}
exports.Markdown = Markdown;
