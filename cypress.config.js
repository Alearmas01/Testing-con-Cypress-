const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: "https://with-bugs.practicesoftwaretesting.com",
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    supportFile: 'cypress/support/e2e.js',
  },
});