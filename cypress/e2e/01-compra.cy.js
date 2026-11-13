
describe("3.1 Compra exitosa", () => {
  beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();

    cy.fixture("users").as("users");
    cy.fixture("checkout").as("checkout");
  });

  it("compra un producto de punta a punta", function () {
    // Paso 1: la home muestra productos
    cy.visit("/");
    cy.get('[data-test="product-1"]').should("be.visible");

    // Paso 2: abrir el primer producto
    cy.get('[data-test="product-1"]').click();
    cy.url().should("include", "#/product/1");

    cy.get('[data-test="add-to-cart"]').click();

    // Paso 3: verificar que el producto se agregó al carrito
    cy.get('[data-test="nav-cart"]').click();
    cy.url().should("include", "#/checkout");

    // Verificar el producto en el carrito
    cy.get('[data-test="product-title"]')
      .should("contain.text", "Combination Pliers");

    // Verificar que la cantidad sea 1
    cy.get('[data-test="product-quantity"]').should("have.value", "1");

    // Verificar que el total no sea cero
    cy.get('[data-test="cart-total"]').should("not.have.text", "$0.00");

    // Paso 4: iniciar sesión con el usuario de prueba
    cy.get('[data-test="proceed-1"]').click();

    cy.get('[data-test="email"]')
      .should("be.visible")
      .type(this.users.validUser.email);

    cy.get('[data-test="password"]').type(
      this.users.validUser.password,
      { log: false }
    );

    cy.get('[data-test="login-submit"]').click();

    // Verificar que el login funcionó
    cy.contains("p", "you are already logged in").should("be.visible");

    // Continuar al checkout
    cy.get('[data-test="proceed-2"]').click();

    // Paso 5: completar el formulario de checkout
    cy.get('[data-test="address"]')
      .clear()
      .type(this.checkout.direccion.address);

    cy.get('[data-test="city"]')
      .clear()
      .type(this.checkout.direccion.city);

    cy.get('[data-test="country"]')
      .clear()
      .type(this.checkout.direccion.country);

    cy.get('[data-test="postcode"]')
      .clear()
      .type(this.checkout.direccion.postcode);

    // Completar State al final
    cy.get('[data-test="state"]').type(
      this.checkout.direccion.state,
      { delay: 100 }
    );

    // Verificar State
    cy.get('[data-test="state"]').should(
      "have.value",
      this.checkout.direccion.state
    );

    // Continuar si el formulario está completo
    cy.get('[data-test="proceed-3"]')
      .should("be.enabled")
      .click();

    // Paso 6: completar los datos de pago
    cy.contains("h3", "Payment").should("be.visible");

    const pago = this.checkout.pago;

    cy.get('[data-test="payment-method"]').select(pago.metodo);
    cy.get('[data-test="account-name"]').type(pago.nombreCuenta);
    cy.get('[data-test="account-number"]').type(pago.numeroCuenta);

    cy.get('[data-test="finish"]').click();

    // Paso 7: verificar que la compra fue exitosa
    cy.contains(".help-block", "Payment was successful")
      .should("be.visible");
  });
});
