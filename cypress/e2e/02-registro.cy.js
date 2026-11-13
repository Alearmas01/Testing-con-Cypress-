
describe('Pruebas de Registro de Usuarios', () => {

  beforeEach(() => {
    cy.fixture('registro').as('registro')
    cy.visit('/#/auth/register')
  })
  
  it('Intentar enviar el formulario vacío y permanecer en registro', () => {
    cy.get('@registro').then((datos) => {
      const { errores } = datos  
      cy.completeRegister()    
     
      // Verificar mensajes de error correspondientes
      cy.get('[data-test="first-name-error"]').should('be.visible').and('contain.text', errores.firstName)
      cy.get('[data-test="last-name-error"]').should('be.visible').and('contain.text', errores.lastName)
      cy.get('[data-test="dob-error"]').should('be.visible').and('contain.text', errores.dob)
      cy.get('[data-test="address-error"]').should('be.visible').and('contain.text', errores.address)
      cy.get('[data-test="postcode-error"]').should('be.visible').and('contain.text', errores.postalCode)
      cy.get('[data-test="city-error"]').should('be.visible').and('contain.text', errores.city)
      cy.get('[data-test="state-error"]').should('be.visible').and('contain.text', errores.state)
      cy.get('[data-test="country-error"]').should('be.visible').and('contain.text', errores.country)
      cy.get('[data-test="phone-error"]').should('be.visible').and('contain.text', errores.phone)
      cy.get('[data-test="email-error"]').should('be.visible').and('contain.text', errores.email)
      cy.get('[data-test="password-error"]').should('be.visible').and('contain.text', errores.password)

      // Verificar que seguimos en la página de registro
      cy.url().should('include', '/auth/register')
    })
  }) 

  it('Verificar etiquetas cruzadas de Country y State ', () => {
    cy.get('@registro').then((datos) => {
      const { errores } = datos      
      cy.completeRegister()

      // 1. Verifica que debajo de la etiqueta "Country" esté realmente el error de Country
      cy.contains('label', 'Country')
        .parent().find('[data-test="country-error"]').should('be.visible')
        .and('contain.text', errores.country)

      // 2. Verifica que debajo de la etiqueta "State" esté realmente el error de State
      cy.contains('label', 'State')
        .parent().find('[data-test="state-error"]').should('be.visible')
        .and('contain.text', errores.state)
    })
  }) 

}) 

