const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://with-bugs.practicesoftwaretesting.com",
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents(on, config) {},
    supportFile: 'cypress/support/support-commands/e2e.js',
  },
});