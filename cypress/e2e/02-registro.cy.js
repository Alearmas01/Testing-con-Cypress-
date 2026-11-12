//describe('Formulario de Registro', () => {

describe('Validaciones del formulario de registro', () => {
 beforeEach(() => {
    cy.fixture('registro').as('registro');
    cy.visit('#/auth/register')
  });

  it('Debe mostrar mensajes de errores en campos obligatorios al enviar el formulario vacío',function () {
    cy.get('[data-test="register-submit"]').click()
    cy.get('[data-test="first-name-error"]').should('be.visible')     
    cy.get('[data-test="last-name-error"]').should('be.visible')
    cy.get('[data-test="email-error"]').should('be.visible')
    cy.get('[data-test="password-error"]').should('be.visible')
    cy.url().should('include', '/auth/register')
  })


 })
