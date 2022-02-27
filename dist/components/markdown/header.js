"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Markdown = exports.Header = void 0;
const markdown_1 = __importDefault(require("./markdown"));
exports.Markdown = markdown_1.default;
/**
 * This class is a header.
 * It will automatically adjust itself based on the header parents level.
 * It will not exceed six.
 */
class Header extends markdown_1.default {
    /**
     * Basically the same as Markdown, except it checks the header level to ensure it is not greater than six.
     * @param parent
     */
    constructor(parent) {
        super(parent);
        /**
         * This variable represents the header level.  How many # will be before the text.
         * It will not exceed six.
         */
        this.headerLevel = 1;
        if (!parent)
            return;
        if (parent instanceof Header) {
            this.headerLevel = parent.headerLevel + this.headerLevel;
            if (this.headerLevel > 6)
                this.headerLevel = 6;
        }
    }
    /**
     * Creates a new header and appends it as a child.
     */
    header() {
        return new Promise(res => res(new Header(this)));
    }
    /**
     * Render adjusted to fit the header markdown.
     */
    get render() {
        const header = new Array(this.headerLevel).fill('#').join('');
        return `${header} ${super.render}`;
    }
}
exports.Header = Header;
