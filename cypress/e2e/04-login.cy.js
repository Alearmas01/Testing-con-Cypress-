
describe('Inicio de sesión', () => {
  beforeEach(() => {
    cy.fixture('users').as('users')
    cy.visit('#/auth/login') // por si se agregan mas test 
  })

 it('Login con usuario y contraseña válidos', function() {   
    cy.get('[data-test="email"]').type(this.users.validUser.email)
    cy.get('[data-test="password"]').type(this.users.validUser.password)
    cy.get('[data-test="login-submit"]').click()
    cy.get('[data-test="login-submit"]').should('be.visible')
    cy.url().should('include', '/auth/login')
  
   })

  it('Login con usuario y contraseña inválidos', function() {  
    cy.get('[data-test="email"]').type(this.users.invalidUser.email)
    cy.get('[data-test="password"]').type(this.users.invalidUser.password)
    cy.get('[data-test="login-submit"]').click()
    cy.get('[data-test="login-error"]').should('be.visible')
    cy.url().should('include', '/auth/login')
    cy.get('[data-test="nav-menu"]').should('not.exist')
  })
})



