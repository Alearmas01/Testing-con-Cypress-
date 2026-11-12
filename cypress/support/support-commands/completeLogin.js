Cypress.Commands.add('completeLogin', (email, password) => {
  //cy.visit('/auth/login')
  cy.get('[data-test="email"]').type(email)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-submit"]').click()
  cy.get('[data-test="login-submit"]').should('be.visible')
 
})
