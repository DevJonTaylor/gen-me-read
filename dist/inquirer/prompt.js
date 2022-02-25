"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prompt = void 0;
const questions_1 = require("./questions");
const inquirer_1 = __importDefault(require("inquirer"));
class Prompt {
    constructor() {
        this.questions = [];
    }
    input(callback) {
        const input = callback(new questions_1.Input());
        if (input instanceof questions_1.Input)
            this.questions.push(input.toObject);
        else
            this.questions.push(input);
        return this;
    }
    checkbox(callback) {
        const checkbox = callback(new questions_1.Checkbox());
        checkbox instanceof questions_1.Checkbox ?
            this.questions.push(checkbox.toObject) :
            this.questions.push(checkbox);
        return this;
    }
    get prompt() {
        return inquirer_1.default.createPromptModule();
    }
    start() {
        return this.prompt(this.questions);
    }
}
exports.Prompt = Prompt;
