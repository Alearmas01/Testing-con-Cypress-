const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://with-bugs.practicesoftwaretesting.com",
    setupNodeEvents(on, config) {},
  },
});