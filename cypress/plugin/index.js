// const cucumber = require('cypress-cucumber-preprocessor').default
//     /**
//      * @type {Cypress.PluginConfig}
//      */

// module.exports = (on, config) => {
//     on('file:preprocessor', cucumber())
// }
const cucumber = require('cypress-cucumber-preprocessor').default;
const cypress = require("cypress");

module.exports = (on, config) => {
    on('file:preprocessor', cucumber());
};