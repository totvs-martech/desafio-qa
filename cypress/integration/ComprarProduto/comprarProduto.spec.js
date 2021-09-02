/// <reference types="cypress" />
require("cypress-xpath")

import ComprProd from '../../support/pages/comprarProdutoAcoes/compProd';

describe('Comprar Poduto',() => { 
    beforeEach(()=>{ 
        cy.visit('/')
    })

    it('Validar nome e valor de produto, ao adicionar no carrinho',()=>{ 
        ComprProd.produto('TOTVS Backoffice (Linha Protheus) - Arquitetura e Instalação - Atualização de Release','1')
    })
})