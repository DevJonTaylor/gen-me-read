"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const _1 = require("./");
/**
 * This class is a header.
 * It will automatically adjust itself based on the header parents level.
 * It will not exceed six.
 */
class Header extends _1.Markdown {
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
     * Render adjusted to fit the header markdown.
     */
    get render() {
        const header = new Array(this.headerLevel).fill('#').join('');
        return `${header} ${super.render}`;
    }
}
exports.Header = Header;
