describe("3.3 Formulario de contacto", () => {

  beforeEach(() => {
    cy.fixture("contacto").as("contacto");
  });

  it("envía el mensaje con datos válidos", function () {
    const datos = this.contacto.mensajeContactoValido;

    cy.visit("/#/contact");
    
    cy.get('[data-test="first-name"]').type(datos.first_name);
    cy.get('[data-test="last-name"]').type(datos.last_name);
    cy.get('[data-test="email"]').type(datos.email);
    cy.get('[data-test="subject"]').select(datos.subject);
    cy.get('[data-test="message"]').type(datos.message);
    cy.get('[data-test="contact-submit"]').click();

    cy.get('.alert-success', { timeout: 10000 }).should("contain", "Thanks for your message! We will contact you shortly.");
  });
});