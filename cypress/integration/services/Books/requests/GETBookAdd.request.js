/// <reference types="cypress" />

function findBook(idBook) {
    return cy.request({
      method: 'GET',
      url: `/Books/${idBook}`,
      failOnStatusCode: false
      
    })
  }
  
  export { findBook };