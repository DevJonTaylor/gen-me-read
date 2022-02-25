"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Markdown = void 0;
const header_1 = require("./header");
class Markdown {
    constructor(parent) {
        this.innerText = '';
        this.root = this;
        this.parent = this;
        this.children = [];
        if (!parent)
            return;
        this.root = parent.root;
        this.parent = parent;
        this.parent.addChild(this);
    }
    addChild(child) {
        this.children.push(child);
        return this;
    }
    text(str) {
        this.innerText = str;
        return this;
    }
    get render() {
        return `${this.innerText}\n`;
    }
    toString() {
        if (this.children.length > 0)
            return `${this.render}${this.children.join('')}`;
        return `${this.render}`;
    }
    newHeader(cb) {
        const header = new header_1.Header(this);
        cb(header);
        return this;
    }
}
exports.Markdown = Markdown;
