
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

/* Acá guardo la función del CARRITO */
Cypress.Commands.add("agregarProductoAlCarrito", (selectorProducto) => {
  cy.visit("/");
  cy.get(`[data-test="${selectorProducto}"]`).click();
  cy.get('[data-test="product-name"]').should("be.visible");
  cy.get('[data-test="add-to-cart"]').click();
  cy.get('[data-test="cart-quantity"]').should("be.visible");
});

// Abre el carrito desde el ícono del menú.
Cypress.Commands.add("irAlCarrito", () => {
  cy.get('[data-test="nav-cart"]').click();
  cy.url().should("include", "/checkout");
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
