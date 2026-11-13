describe("3.6 Eliminar un producto del carrito", () => {
  beforeEach(() => {
    cy.fixture("productos").as("productos");
  });

  it("Agrega un producto, lo elimina y el carrito queda vacío", function () {
    const { selector, nombre } = this.productos.productoCarrito;

    // 1. Home → abrir un producto → agregarlo al carrito
    cy.agregarProductoAlCarrito(selector);

    // 2. Ir al carrito y verificar que el producto está
    cy.irAlCarrito();
    cy.get('[data-test="product-title"]')
      .should("have.length", 1)
      .and("contain.text", nombre);

    // 3. Eliminar el producto
    // El botón no tiene data-test: se usa su clase (.btn-danger), el primero de la tabla
    cy.get(".btn-danger").first().click();

    // 4. Verificar que el carrito queda vacío
    cy.get('[data-test="product-title"]').should("not.exist");
  });
});
