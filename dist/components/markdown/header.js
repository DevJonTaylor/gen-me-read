"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const markdown_1 = require("./markdown");
class Header extends markdown_1.Markdown {
    constructor(parent) {
        super(parent);
        this.headerLevel = 1;
        if (!parent)
            return;
        if (parent instanceof Header) {
            this.headerLevel = parent.headerLevel + this.headerLevel;
        }
    }
    get render() {
        const header = new Array(this.headerLevel).fill('#').join('');
        return `${header} ${super.render}`;
    }
}
exports.Header = Header;
