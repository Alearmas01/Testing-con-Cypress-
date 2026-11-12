
Cypress.Commands.add("apiGetProductos", (baseUrl, qs = {}) => {
  return cy.request({
    method: "GET",
    url: `${baseUrl}/products`,
    qs,
    failOnStatusCode: false,
  });
});

// Inicia sesión por API. No corta el test si el status es 4xx,
// así se puede usar también en los casos negativos.
Cypress.Commands.add("apiLogin", (baseUrl, email, password) => {
  return cy.request({
    method: "POST",
    url: `${baseUrl}/users/login`,
    body: { email, password },
    failOnStatusCode: false,
  });
});

//registro usuario 
Cypress.Commands.add('completeRegister', () => {

  cy.get('[data-test="register-submit"]').click();

});
//login
Cypress.Commands.add('completeLogin', (email, password) => {
 
  cy.get('[data-test="email"]').type(email)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-submit"]').click()
  cy.get('[data-test="login-submit"]').should('be.visible')
 
})
