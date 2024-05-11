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


const { defineConfig } = require("cypress");

module.exports = defineConfig({
    "spec": {
        "e2e": {
            "setupNodeEvents": (on, config) => {
                return require('./cypress/plugins')(on, config)
            },
            "specPattern": "cypress/e2e/BDD-Features",
            "excludeSpecPattern": ["*.js", "*.md"]
        }
    }



});