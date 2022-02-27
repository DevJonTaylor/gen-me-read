"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Markdown = exports.Link = exports.Image = void 0;
const link_1 = require("./link");
Object.defineProperty(exports, "Link", { enumerable: true, get: function () { return link_1.Link; } });
Object.defineProperty(exports, "Markdown", { enumerable: true, get: function () { return link_1.Markdown; } });
const badge_1 = require("../badge");
class Image extends link_1.Link {
    static get htmlBadge() {
        return new Image().url(badge_1.Badge.html);
    }
    static get cssBadge() {
        return new Image().url(badge_1.Badge.css);
    }
    static get jsBadge() {
        return new Image().url(badge_1.Badge.javaScript);
    }
    static badge(badge) {
        const isBadge = badge instanceof badge_1.Badge;
        return new Image().url(!isBadge ? badge_1.Badge.objectToBadge(badge) : badge);
    }
    /**
     * Implementing the ability to accept a Badge object.
     * @param url
     */
    url(url) {
        this._url = `${url}`;
        return this;
    }
    get render() {
        return `!${super.render}`;
    }
}
exports.Image = Image;
