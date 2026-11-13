const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
reporterOptions: {
    charts: true,
    reportPageTitle: "Reporte de Pruebas - ToolShop",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: "https://with-bugs.practicesoftwaretesting.com",
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 800,
    video:true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    supportFile: 'cypress/support/e2e.js',
  },
});