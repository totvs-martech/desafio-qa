/// <reference types="Cypress" />

describe("API Testing", () => {

  Cypress.config("baseUrl", "http://fakerestapi.azurewebsites.net/api/v1")

    it("POST - create", () => {
        const item = {"title": "Automatizando uma API","description": "teste@store.com.br",
        "pageCount": "10",
        "excerpt": "Resumo do teste",
        "publisDate": "2020-09-10T13:00:00.549505+00:00",
        "id": "50"}
        cy.request(
          "POST", "/Books", item
        ).then((res) => {
        expect(res).to.have.property("status", 200);
        });
    }); 

    it("GET - read", () => {
      const item = {"title": "Automatizando uma API","description": "teste@store.com.br",
      "pageCount": "10",
      "excerpt": "Resumo do teste",
      "publisDate": "2020-09-10T13:00:00.549505+00:00",
      "id": "50"}
      cy.request("GET","/Books", item,
      ).then((res) => {
        expect(res).to.have.property("status", 200);
      });
    });

});