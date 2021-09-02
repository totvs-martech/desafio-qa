const prod = require('../Elements/elements').COMPRAR


class compProduto{

    produto(nomeProduto,quantidade){
        cy.get(prod.pesquisa).type(nomeProduto,'{enter}')
            .get(prod.pesquisa).type('{enter}')
            .get(prod.produto).click()
            .get(prod.nomeProduto).invoke('text').should('be.eq',nomeProduto)
            .get(prod.preco)
            .invoke('text').then(
                (precoTelaInicial) => {
                    let valorPrecoProduto = precoTelaInicial.replace('','')

                cy.get(prod.quantidade).type('{backspace}')
                .get(prod.quantidade).type(quantidade)
                .get(prod.btnAddCarrinho).click()
                .get(prod.nomeProdutoNoCarrinho).invoke('text').should('be.eq', nomeProduto)
                .get(prod.precoNoCarrinho).invoke('text').should('be.eq', valorPrecoProduto)
                
                })
            
    }
}


export default new compProduto();