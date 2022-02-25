"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const question_1 = require("./question");
class Checkbox extends question_1.Question {
    constructor() {
        super();
        this._type = 'checkbox';
        this.choices = [];
    }
    choice(name, checked = false) {
        this.choices.push({ name, checked });
        return this;
    }
    get toObject() {
        return {
            ...super.toObject,
            // @ts-ignore
            choices: this.choices
        };
    }
}
exports.Checkbox = Checkbox;
