describe("3.7 Prueba de API", () => {
  beforeEach(() => {
    cy.fixture("api").as("api");
  });

  // ---------- Flujo pedido por la consigna (los dos pedidos en el mismo it) ----------
  it("Lista productos y el usuario de prueba inicia sesión por API", function () {
    const { baseUrl, usuarioValido } = this.api;

    /*1. Lista de productos: status 200 y lista no vacía*/
    cy.apiGetProductos(baseUrl).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data).to.be.an("array").and.not.be.empty;
      expect(res.body.data[0]).to.include.keys("id", "name", "price");
    });

    // 2. Login: status 200 y trae token de acceso
    cy.apiLogin(baseUrl, usuarioValido.email, usuarioValido.password).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("access_token").and.to.be.a("string").and.not.be.empty;
      expect(res.body.token_type).to.eq("bearer");
    });
  });

  it("Login con contraseña incorrecta devuelve 401 y no trae token", function () {
    const { baseUrl, usuarioPasswordIncorrecta: u } = this.api;

    cy.apiLogin(baseUrl, u.email, u.password).then((res) => {
      expect(res.status).to.eq(401);
      expect(res.body).not.to.have.property("access_token");
    });
  });

  it("Pedir un producto que no existe devuelve 404", function () {
    const { baseUrl, productoInexistente } = this.api;

    cy.request({
      url: `${baseUrl}/products/${productoInexistente}`,
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(404);
    });
  });

  it("Login con el body vacío devuelve error de validación (401)", function () {
    cy.apiLogin(this.api.baseUrl, "", "").then((res) => {
      expect(res.status).to.eq(401);
    });
  });

  // ---------- Casos extra: de borde ----------
  it("Pedir una página fuera de rango devuelve 200 y una lista vacía", function () {
    const { baseUrl, paginaFueraDeRango } = this.api;

    cy.apiGetProductos(baseUrl, { page: paginaFueraDeRango }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data).to.be.an("array").and.be.empty;
    });
  });

  it("Buscar un producto inexistente devuelve 200 y ningún resultado", function () {
    const { baseUrl, busquedaSinResultados } = this.api;
    cy.request(`${baseUrl}/products/search?q=${busquedaSinResultados}`).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data).to.be.empty;
      expect(res.body.total).to.eq(0);
    });
  });
});
