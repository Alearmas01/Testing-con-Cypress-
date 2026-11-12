
describe('Inicio de sesión', () => {
  beforeEach(() => {
    cy.fixture('users').as('users')
    cy.visit('/#/auth/login')
  })

  it('Login con usuario y contraseña válidos', () => {
    cy.get('@users').then((datos) => {
      cy.completeLogin(datos.validUser.email, datos.validUser.password)
    })

    cy.url().should('include', '/account')
  })

  it('Login con usuario y contraseña inválidos', () => {
    cy.get('@users').then((datos) => {
      cy.completeLogin(datos.invalidUser.email, datos.invalidUser.password)
    })

    cy.get('[data-test="login-error"]').should('be.visible').and('contain', 'Invalid email or password')
    cy.url().should('include', '/auth/login')
    cy.get('[data-test="nav-menu"]').should('not.exist')
  })
})
