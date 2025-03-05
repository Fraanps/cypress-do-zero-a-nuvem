const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // configurando as dimensões do navegador
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
    failOnStatusCode: false,
  },
});
