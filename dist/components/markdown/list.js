"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Markdown = exports.ListItem = exports.List = void 0;
const markdown_1 = __importDefault(require("./markdown"));
exports.Markdown = markdown_1.default;
/**
 * Markdown class for Lists both Unordered and Ordered.
 */
class List extends markdown_1.default {
    /**
     * Checks the indentLevel of the parent assuming it is a parent.
     * @param parent The parent element.  If undefined then this element is considered a root/parent element.
     * @param numbered This tells the element if it is ordered or unordered list.
     */
    constructor(parent, numbered = false) {
        super(parent);
        this.indentLevel = 1;
        this.isOrdered = false;
        if (parent instanceof List) {
            this.indentLevel = this.indentLevel + parent.indentLevel;
        }
        this.isOrdered = numbered;
    }
    /**
     * Toggles if this is a ordered list or unordered list.  Returns this for chaining.
     */
    ordered() {
        this.isOrdered = !this.isOrdered;
        return this;
    }
    /**
     * Adds a new item to the list.
     */
    item() {
        return new Promise(res => res(new ListItem(this)));
    }
    /**
     * Creates a new List to be added to the list.  This allows an indented item.
     */
    list() {
        return new Promise(res => res(new List(this)));
    }
    /**
     * Reworked the getter render to fit the List class.
     */
    get render() {
        const text = [];
        const indents = new Array(this.indentLevel).fill('  ').join('');
        let currentNumber = this.isOrdered ? 1 : 0;
        const label = currentNumber === 0 ?
            () => ' - ' :
            () => ` ${currentNumber++}. `;
        for (let child of this.children) {
            if (child instanceof List) {
                text.push(child);
            }
            else {
                text.push(`${indents}${label()}${child}`);
            }
        }
        return text.join('');
    }
    /**
     * Reworked the toString to fit the List class.
     */
    toString() {
        return this.render;
    }
}
exports.List = List;
class ListItem extends markdown_1.default {
    constructor(parent) {
        super(parent);
        this.parent = parent;
    }
    item() {
        return this.parent.item();
    }
    list() {
        return this.parent.list();
    }
}
exports.ListItem = ListItem;
