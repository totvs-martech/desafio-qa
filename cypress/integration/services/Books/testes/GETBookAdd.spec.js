/// <reference types="cypress" />

import * as GETBookAdd from '../requests/GETBookAdd.request';

describe('GetBookAdd', ()=>{
    it('Buscar Livro Adicionado Anteriormente', () => {

        GETBookAdd.findBook(50).should((response) =>{
            expect(response.status).to.equal(200);
            expect(response.body.title).to.equal('Book 50');
              
        })
        
    });
})