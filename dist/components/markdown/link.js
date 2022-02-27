"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.Markdown = void 0;
const markdown_1 = __importDefault(require("./markdown"));
exports.Markdown = markdown_1.default;
class Link extends markdown_1.default {
    constructor(parent) {
        super(parent);
        this._url = '';
    }
    url(url) {
        this._url = url;
        return this;
    }
    get render() {
        return `[${super.render}](${this._url})`;
    }
    /**
     * This needed to be overwritten to remove the newline.
     */
    toString() {
        return this.render;
    }
}
exports.Link = Link;
