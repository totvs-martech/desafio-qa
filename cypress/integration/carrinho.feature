Feature: Adicionar produto ao carrinho


Scenario: Adicionar produto ao carrinho

Given que acesso a loja virtual
E preencho o campo buscar produtos ”TOTVS RH (Linha RM) - Automação de Ponto”
E clico em buscar
When clico em adicionar ao carrinho
Then o item é inserido no meu carrinho
E sou redirecionado para o checkout