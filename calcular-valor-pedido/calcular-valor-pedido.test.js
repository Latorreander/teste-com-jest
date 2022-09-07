const calcularValorPedido = require("./calcular-valor-pedido");
it("não cobra valor de frete quando o valor dos produtos for maior que 500", () => {
  ///AAA - 3 PASSOS DE CRIAÇÃO DEU UM TESTE

  //ARRANGE - OBJETO DE TESTE  arrumamos o que precisa passar pra função
  const meuPedido = {
    itens: [
      { nome: "Arco encantado", valor: 600 },
      { nome: "Entrega", valor: 100, entrega: true },
    ],
  };

  //ACT - Ação, agir, passar a função que queremos testar de fato
  const resultado = calcularValorPedido(meuPedido);

  //ASSERT - asserção é o resultado esperado do teste
  expect(resultado).toBe(600);
});

it("cobra o valor do frete se o valor dos produtos for menor que 500", () => {
  //ARRANGE
  const meuPedido = {
    itens: [
      { nome: "Sanduíche", valor: 20 },
      { nome: "Entrega", valor: 100, entrega: true },
    ],
  };
  //ACT
  const resultado = calcularValorPedido(meuPedido);

  //ASSERT
  expect(resultado).toBe(120);
});

it('não cobra o valor do frete quando o valor dos produtos for EXATAMENTE 500', () =>{
   //ARRANGE
   const meuPedido = {
      itens: [
        { nome: "Armadura de ouro", valor: 500 },
        { nome: "Entrega", valor: 100, entrega: true },
      ],
    };

    //ACT
    const resultado = calcularValorPedido(meuPedido);

    //ASSERT
    expect(resultado).toBe(500);

})