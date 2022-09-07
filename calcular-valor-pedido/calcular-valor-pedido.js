const meuPedido = {
    itens: [
        {nome:'Poção de vida', valor: 215},
        {nome:'Espada de prata', valor: 200},
        {nome: 'Armadura de ouro', valor: 70},
        {nome:'Entrega', valor: 40, entrega: true}
    
    ]
}

const calcularValorPedido = pedido => {
    const valorDosProdutos = pedido.itens.filter(item => !item.entrega).reduce((totalPedidos, pedidoAtual)=> totalPedidos + pedidoAtual.valor, 0)

    const entrega = pedido.itens.filter(item => item.entrega)
   
   if(valorDosProdutos >= 500){
    return valorDosProdutos
   }else{
    return valorDosProdutos + entrega[0].valor
   }
}

module.exports = calcularValorPedido



