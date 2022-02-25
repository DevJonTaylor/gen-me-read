"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const markdown_1 = require("./components/markdown");
const h1 = new markdown_1.Header();
h1
    .text('sup')
    .header()
    .then(h2 => h2.text('sup 2').header())
    .then(h3 => h3.text('sup 3'))
    .then(() => console.log(`${h1}`));
