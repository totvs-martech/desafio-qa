///<reference types="cypress" />
// Desafio QA
//Desafio Totvs - Márcia Teixeira
describe('Teste Totvs - Primeira Etapa', () =>{

it('Etapas WEB',() =>{
//Acessar o site e aceitar os cookies:
    cy.visit('https://totvs.store/')
    cy.get('#btn-cookie-allow > span').click()
//Pesquisar produto no site:
    cy.get('#search').type('Meu Checklist - Organizando suas tarefas{enter}')
//Acessar o produto e validar seu nome:
    cy.contains('Meu Checklist - Organizando suas Tarefas').click()
    cy.contains('Meu Checklist - Organizando suas Tarefas').should('be.visible')
//Adicionar produto no carinho:
    cy.get('.bundle-actions > #bundle-range > span').click()
    cy.get('[aria-hidden="false"] > a').click({force: true})
    cy.get('[aria-hidden="false"] > a').click()
    cy.get('[aria-hidden="false"] > a').click()
//Validar nome e preço do produto no carinho:
    cy.get('.product-item-name > a').should('have.text','Meu Checklist - Organizando suas Tarefas')
    cy.get(':nth-child(5) > .amount > .price').should('have.text','R$263,07')




})
    



})