"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
class Question {
    constructor() {
        this._type = '';
        this._name = '';
        this._message = '';
        this._default = '';
        this._validate = undefined;
    }
    name(str) {
        this._name = !str ? '' : str;
        return this;
    }
    message(str) {
        this._message = !str ? '' : str;
        return this;
    }
    default(str) {
        this._default = !str ? '' : str;
        return this;
    }
    validate(callback) {
        this._validate = !callback ? (input) => input !== '' : callback;
        return this;
    }
    get toObject() {
        const question = {
            type: this._type,
            name: this._name,
            message: this._message
        };
        if (this._default !== '')
            question.default = this._default;
        if (this._validate !== undefined)
            question.validate = !this._validate ? () => true : this._validate;
        return question;
    }
}
exports.Question = Question;
