describe('Flujo de Búsqueda de Productos', () => {
  it('Debe buscar una herramienta en el catálogo y verificar los resultados', () => {
    // 1. Entrar a la página principal
    cy.visit('/');

    // 2. Escribir en el buscador y buscar
    cy.get('[data-test="search-query"]').type('Pliers');
    cy.get('[data-test="search-submit"]').click();

    // 3. Verificar que aparecen resultados (tarjetas de productos)
    cy.get('.card').should('be.visible');

    // 4. Verificar que el nombre del primer producto contiene la palabra buscada
    cy.get('[data-test="product-name"]').first().should('contain.text', 'Pliers');
  });
});