// const cucumber = require('cypress-cucumber-preprocessor').default
//     /**
//      * @type {Cypress.PluginConfig}
//      */

// module.exports = (on, config) => {
//     on('file:preprocessor', cucumber())
// }


module.exports = (on, config) => {
    const cucumber = require('cypress-cucumber-preprocessor').default;
    on('file:preprocessor', cucumber());
};

// const cucumber = require('cypress-cucumber-preprocessor').default;
// const cypress = require("cypress");

// module.exports = (on, config) => {
//     on('file:preprocessor', cucumber());
// };