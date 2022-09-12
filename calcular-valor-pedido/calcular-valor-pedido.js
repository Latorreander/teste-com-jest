const meuPedido = {
  itens: [
    { nome: "Poção de vida", valor: 215 },
    { nome: "Espada de prata", valor: 200 },
    { nome: "Armadura de ouro", valor: 70 },
    { nome: "Entrega", valor: 40, entrega: true },
  ],
};
const acrescimoValorEntrega = 0.3;
const calcularValorPedido = (pedido) => {
  const valorDosProdutos = pedido.itens
    .filter((item) => !item.entrega)
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0);

    
    const entrega = pedido.itens.filter((item) => item.entrega);
    
    if(pedido.estado ==='RS' || pedido.estado ==='SC'){
      const acrescimoEntrega = entrega[0].valor * acrescimoValorEntrega;
      entrega[0].valor += acrescimoEntrega;
    }


  //if refatorado:
  return valorDosProdutos >= 500
    ? valorDosProdutos
    : valorDosProdutos + entrega[0].valor;

  //    if(valorDosProdutos >= 500){
  //     return valorDosProdutos
  //    }else{
  //     return valorDosProdutos + entrega[0].valor
  //    }
};

module.exports = calcularValorPedido;
