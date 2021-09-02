import * as POSTBooks from '../requests/POSTBooks.request';

describe(' POST Books', () =>{

    it('Adicionando novo livro', ()=>{
        POSTBooks.addBook().should((response)=>{
            expect(response.status).to.equal(200);
            expect(response.body.title).to.equal("Automatizando uma API");
        })
    })

})