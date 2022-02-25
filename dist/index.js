"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *   'Description',
 *   'Table of Contents',
 *   'Installation',
 *   'Usage',
 *   'License',
 *   'Contributing',
 *   'Tests',
 *   'Questions'
 */
const inquirer_1 = require("./inquirer");
async function startPrompt() {
    const prompt = new inquirer_1.Prompt();
    return prompt
        .input(input => {
        return input
            .name('title')
            .message('Project Title: ')
            .validate();
    })
        .checkbox(checkbox => {
        return checkbox
            .name('sections')
            .message('Which sections would you like to add?')
            .choice('Description', true)
            .choice('Table of Contents', true)
            .choice('Installation', true)
            .choice('Usage', true)
            .choice('License', true)
            .choice('Contributing', true)
            .choice('Tests', true)
            .choice('Questions', true);
    })
        .start();
}
startPrompt()
    .then(console.log)
    .catch(console.log);
