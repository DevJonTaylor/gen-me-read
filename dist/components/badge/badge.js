"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const promises_1 = require("fs/promises");
class Badge {
    constructor({ text = { front: '', back: '' }, color = { front: '', back: '', logo: '' }, style = '', logo = '' }) {
        this.text = { front: '', back: '' };
        this.color = { front: '', back: '', logo: '' };
        this.logo = '';
        this.style = '';
        this.text = text;
        this.color = color;
        this.style = style;
        this.logo = logo;
    }
    static get emptyBadge() {
        return new Badge({ text: { front: '', back: '' }, color: { front: '', back: '', logo: '' }, style: '', logo: '' });
    }
    get qTextF() {
        return !this.text.front ? false : this.textUrlReplacement(this.text.front);
    }
    get qTextB() {
        return !this.text.back ? false : this.textUrlReplacement(this.text.back);
    }
    get qColorA() {
        return this.color.front !== '' ? `colorA=${this.color.front}` : false;
    }
    get qColorLogo() {
        return this.color.logo !== '' ? `logoColor=${this.color.logo}` : false;
    }
    get colorQueries() {
        const queries = [];
        if (this.qColorA)
            queries.push(this.qColorA);
        if (this.qColorLogo)
            queries.push(this.qColorLogo);
        return queries.length === 0 ? false : queries.join('&');
    }
    get qStyle() {
        switch (this.style.toLowerCase()) {
            case "plastic":
            case "flat":
            case "flat-square":
            case "for-the-badge":
            case "social":
            case '':
                return this.style ? `style=${this.style}` : false;
            default:
                throw new Error(`Badge style provide is not valid: '${this.style}'`);
        }
    }
    get qLogo() {
        return this.logo ? `logo=${this.logo}` : false;
    }
    get box() {
        return `![${this.text.front}]`;
    }
    get url() {
        return `https://img.shields.io/badge/`;
    }
    get textOfTwo() {
        const textPieces = [];
        if (this.qTextF)
            textPieces.push(this.qTextF);
        if (this.qTextB)
            textPieces.push(this.qTextB);
        return textPieces.length === 0 ? false : textPieces.filter(v => v !== false).join('-');
    }
    get queries() {
        const queryPieces = [this.colorQueries, this.qStyle, this.qLogo].filter(v => v !== false);
        return queryPieces.length === 0 ? '' : `?${queryPieces.join('&')}`;
    }
    get build() {
        const theArguments = [this.textOfTwo, !this.color.back ? '333' : this.color.back].filter(v => v !== '');
        return [this.url, theArguments.join('-'), this.queries].filter(v => v !== '').join('');
    }
    get toObject() {
        return {
            color: {
                back: this.color.back,
                front: this.color.front,
                logo: this.color.logo
            },
            logo: this.logo,
            style: this.style,
            text: {
                front: this.text.front,
                back: this.text.back
            }
        };
    }
    textUrlReplacement(str) {
        return str
            .replaceAll('-', '--')
            .replaceAll('_', '__')
            .replaceAll(' ', '_');
    }
    toString() {
        return this.build;
    }
    static async readDb(badgeName = '') {
        const db = JSON.parse(await (0, promises_1.readFile)('./saved-badges.json', 'utf8'));
        if (badgeName === '')
            return db;
        const badge = db.filter((badge) => {
            return badge.text.front.toLowerCase() === badgeName.toLowerCase();
        });
        return badge.length === 0 ? false : new Badge(badge[0]);
    }
}
exports.Badge = Badge;
