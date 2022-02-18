"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const badge_1 = require("./components/badge");
async function getBadges() {
    const babel = await badge_1.Badge.readDb('babel');
    const bulma = await badge_1.Badge.readDb('bulma');
    if (babel instanceof badge_1.Badge && bulma instanceof badge_1.Badge) {
        babel.text.back = 'v7.5';
        bulma.text.back = 'v1.14';
    }
    console.log([babel, bulma].join(''));
}
getBadges()
    .catch(console.log);
