# Challenge final: Testing con Cypress (Toolshop)

Proyecto de testing automatizado con Cypress sobre [Toolshop](https://with-bugs.practicesoftwaretesting.com/), una tienda online de herramientas hecha para practicar testing. Trabajo final del curso, realizado por el Grupo 1.

## Enlaces

- **Plan de casos de prueba:** [Google Sheets](https://docs.google.com/spreadsheets/d/1erbKcEtCD7Wlj86wWD6bJa_NNQelIjq-US0tPEn_hp8/edit?usp=sharing)
- **Tablero de bugs en Trello:** [Tablero de Trello](https://trello.com/invite/b/6aea61f690d9a313e2e52301/ATTIc66036cb83b91f32b1f913bd5c5b89b2B2AB104F/mi-tablero-de-trello)
- **Sitio testeado:** https://with-bugs.practicesoftwaretesting.com/
- **API (Swagger):** https://api-with-bugs.practicesoftwaretesting.com/api/documentation

## Integrantes del Grupo 1

| Nombre | Correo electrónico |
|---|---|
| María Grillo | mariagodoy348@gmail.com |
| Carolina Baeza | carobaeza85@gmail.com |
| Pamela Calafate | calafatepame@gmail.com |
| Alejandra Araceli Armas | alejandraarmasempleo@gmail.com |

## Estructura del proyecto

```
cypress/
  e2e/
    01-compra.cy.js     # 3.1 Compra exitosa
    02-registro.cy.js   # 3.2 Validaciones del registro
    03-contacto.cy.js   # 3.3 Formulario de contacto
    04-login.cy.js      # 3.4 Inicio de sesión con datos incorrectos
    05-busqueda.cy.js   # 3.5 Búsqueda de productos
    06-carrito.cy.js    # 3.6 Eliminar un producto del carrito
    07-api.cy.js        # 3.7 Prueba de API
  fixtures/
    users.json          # usuario de prueba
    contacto.json       # datos del formulario de contacto
    checkout.json       # dirección y pago del checkout
  support/
    commands.js         # custom commands
    e2e.js
cypress.config.js       # baseUrl del sitio
```

## Cómo ejecutar los tests

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Alearmas01/Testing-con-Cypress-.git
   cd Testing-con-Cypress-
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Abrir Cypress con interfaz gráfica:
   ```bash
   npx cypress open
   ```
   O correr todos los tests por terminal:
   ```bash
   npx cypress run
   ```

## Datos de prueba

- Usuario de prueba: `customer@practicesoftwaretesting.com` (la contraseña está en `cypress/fixtures/users.json`).
- La base de datos del sitio es compartida, por eso los tests no dependen de datos creados previamente y los mails de registro se generan únicos en cada ejecución.