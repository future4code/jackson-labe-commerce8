import React from 'react';
import styled from 'styled-components';
import Filtro from './Components/Filtro'

const Master = styled.div`
display:flex;
align-items: center;
padding:10px;
gap:20px;

`



const Left = styled.div`
border: 1px solid black;
width: 350px;
height: 90vh;
`

const Middle = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
width: 100%;
height: 98vh;
margin-top:15px;
padding: 15px;
overflow-y: scroll;

`
const Right = styled.div`
border: 1px solid black;
width: 300px;
height: 90vh;
overflow-y: scroll;
`






const Menu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 20px;
margin-top: 0px;
margin-bottom: 10px;
`

const Cartoes = styled.div`
display: flex;
flex-wrap:wrap;
gap: 15px;

`



const Imagem = styled.img`
border: 1px solid gray;
width: 200px;
height: 200px;
display:flex;
justify-items:center;
`

const Card = styled.div`
display: flex;
border: 1px dashed orange;
width: 200px;
margin-bottom: 0px;
height: 350px;
flex-direction: column;
padding: 5px 5px;
align-items: center;`

const Botao = styled.button`
background:black;
margin-top:60px;
font-family: Montserrat;
font-size: 15px;
padding: 15px;
color: white;
width: 158.75px;
`







export default class App extends React.Component {
  state = {
    mostrarMensagem: false,
    carrinho: [],
    cartao: [
      {
          nome: "Item E",
          preco: 40.50,
          imagem: "https://picsum.photos/50/50",
          id: 1
      },
      {
          nome: "Item A",
          preco: 30.10,
          imagem: "https://picsum.photos/50/49",
          id: 2
      },
      {
          nome: "Item B",
          preco: 50,
          imagem: "https://picsum.photos/50/48",
          id: 3

      },
      {
          nome: "Item C",
          preco: 0,
          imagem: "https://picsum.photos/50/50",
          id: 4

      }

  ],
  valorTotal: [],

}
  mudarVisibilidade = () => {
    this.setState({
      mostrarMensagem: !this.state.mostrarMensagem
    });
  };

  onClickCarrinho = (id) => {
    const novoCarrinho = this.state.carrinho
    const novoValorTotal = this.state.valorTotal
    const novoArrayProdutos = this.state.cartao.filter((produto) => {
        if(id === produto.id) {
            return produto
        }
    })

    novoCarrinho.push(novoArrayProdutos[0])

    this.setState({carrinho: novoCarrinho})
    console.log(this.state.carrinho)
    const arrayValor = this.state.carrinho.map((valor) => {
      return valor.preco
    })

    novoValorTotal.push(arrayValor[0])
console.log(this.state.valorTotal)
}

  render(){

    const lista = this.state.cartao.map((card) => {
      return (
          <Card>
              <Imagem src={card.imagem} />
              <p>
                 Produto: {card.nome}
                 
              </p>
              <p>
              RS{card.preco}
              </p>
              <Botao onClick={() => {this.onClickCarrinho(card.id)}}>Adicionar no carrinho</Botao>
          </Card>

        )
  })

  const carrinhoRender = () => {
    const itensCarrinho = this.state.carrinho.map((produto) => {
      return (
        <div>
          <p>Produto: {produto.nome}</p>
          <p>Valor: R${produto.preco}</p>
        </div>
      )
    })
    return itensCarrinho
  }
    

  return (
    <Master>
      <Left>
        <Filtro/>
      </Left>

  

      <Middle>
      
          <Menu>
            <p> Quantidade de produtos:{} </p>
            <select>
                <option value="Preco Crescente" key="">Preco Crescente</option>
                <option value="Preco Decrescente" key="">Preco Decrescente</option>
            </select>
            <button onClick={this.mudarVisibilidade}>
          {this.state.mostrarMensagem ? "Ocultar Carrinho" : "Mostrar Carrinho"}
        </button>
        

          </Menu>
          <Cartoes>{lista}</Cartoes>
          
          
      </Middle>
      {this.state.mostrarMensagem && (
          <Right>
            {carrinhoRender()}
          </Right>
        )}
           
    </Master>
  );
}
}
