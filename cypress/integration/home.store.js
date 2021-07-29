/// <reference types="Cypress" />

describe('My First Test', () => {
    it('clicking "type" navigates to a new url', () => {
        
        cy.visit('https://totvs.store')

        cy.get('body').type('TOTVS RH (Linha RM) - Automação de Ponto')

        cy.get('#search').click()

        cy.get('[href="https://totvs.store/br/produto/treinamento-automac-o-de-ponto-rm.html"] ').click()

        cy.get('#product-addtocart-button').click()

        cy.get('.message')

        cy.screenshot('success-message')
    })
})

