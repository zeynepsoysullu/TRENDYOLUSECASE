// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//     e2e: {
//         setupNodeEvents(on, config) {
//             return require('./cypress/plugin/index')(on, config)
//         },
//         specPattern: 'cypress/e2e/BDD-Features',
//         excludeSpecPattern: ['*.js', '*.md']
//     }


// });


module.exports = {
    e2e: {
        setupNodeEvents: true,
        specPattern: 'cypress/e2e/BDD-Features',
        excludeSpecPattern: ['*.js', '*.md']
    }
};