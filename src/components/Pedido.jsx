import { use } from "react";
import { useState } from "react"

//Array de objetos contendo o estado inicial do cardápio
const cardapio =[
    {id:1,nome:'Combo-01',preco:25.00,disponivel:true,quantidade:0},
    {id:2,nome:'Combo-02',preco:30.00,disponivel:true,quantidade:0},
    {id:3,nome:'Combo-03',preco:35.00,disponivel:false,quantidade:0},
    {id:4,nome:'Combo-04',preco:40.00,disponivel:true,quantidade:0},
]

const Pedido = () => {
    //hook - useState-Manipula o estado da variável
    //Exemplos vai gerenciar a lista de items do cardápio
    const [items,setItems]=useState(cardapio);
    const [status,setStatus]=useState("");
    const [enviar,setEnviar]=useState(false);
    
    //valor fixo adicionado ao total quando tiver items no carrinho
    const taxaEntrega = 5.00;

    //função que altera a quantidade do pedido
    const AlterarQuantidade=(id,valor)=>{
        setItems(prev=>
            //MAP percorre a lista para criar um novo array sem modificar o original 
            prev.map(item=>
                //ternário verifica se o item da interação atual é o que deve ser alterado
                //spred(...) : adiciona o item a lista atual ou modifica 
                //Math.max - objeto que garante que a quantidade nunca seja menor que 0
                //item: retorna o item intacto caso o id não corresponda 
                item.id===id ? {...item,quantidade:Math.max(0, item.quantidade + valor)}:item
            )
        )
    }

    //FILTER: seleciona apenas os produtos disponiveis e do carrinho
    const produtosDisponiveis = items.filter(item.disponivel);
    const carrinho = items.filter(item.quantidade >0);

    //REDUCE: calcula a soma dos items (preco * quantidade) e adiciona a taxa de entrega
    const subTotal = carrinho.reduce((ac,item)=>ac.item.preco * item.quantidade)
    const total = subTotal > 0 ? subTotal + taxaEntrega: 0;

  return (
    <>
      
    </>
  )
}

export default Pedido
