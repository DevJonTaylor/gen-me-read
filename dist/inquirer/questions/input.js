"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const question_1 = require("./question");
class Input extends question_1.Question {
    constructor() {
        super(...arguments);
        this._type = 'input';
    }
}
exports.Input = Input;
