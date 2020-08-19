import React from 'react';
import styled from 'styled-components';

const Cartoes = styled.div`
display: flex;
flex-wrap:wrap;
gap: 15px;


`
const Card = styled.div`
display: flex;
border: 1px dashed orange;
width: 200px;
margin-bottom: 0px;
height: 350px;
flex-direction: column;
padding: 5px 5px;
align-items: center;

`
const Imagem = styled.img`
border: 1px solid gray;
width: 200px;
height: 200px;

`

const Botao = styled.button`
background:black;

font-family: Montserrat;
font-size: 11px;
color: white;

width: 158.75px;


`

class Cards extends React.Component {
    state = {

        cartao: [
            {
                nome: "Item E",
                preco: 40.50,
                imagem: "https://picsum.photos/50/50"
            },
            {
                nome: "Item A",
                preco: 30.10,
                imagem: "https://picsum.photos/50/49"
            },
            {
                nome: "Item B",
                preco: 50,
                imagem: "https://picsum.photos/50/48"
            },
            {
                nome: "Item C",
                preco: 0,
                imagem: "https://picsum.photos/50/50"
            }

        ]

    }

    onClickCarrinho = () => {
        //   if (this.state.curtido === false){
        //   this.setState({
        //     curtido: !this.state.curtido,
        //     numeroCurtidas: this.state.numeroCurtidas + 1
        //   })
        // } else {
        //   this.setState({
        //     curtido: !this.state.curtido,
        //     numeroCurtidas: this.state.numeroCurtidas - 1
        //   })
        // }
        // }
    }




    render() {
        const lista = this.state.cartao.map((card) => {
            return (
                <Card>
                    <Imagem src={card.imagem} />
                    <p>
                        {card.nome},
              {card.preco}
                    </p>
                    <Botao>Adicionar no carrinho</Botao>
                </Card>

              )
        })

        return(
            <Cartoes>
                {lista}
            </Cartoes>
        )

    }
}







export default Cards;


    // }

    //         let iconeCurtida

    //         if (this.state.curtido) {
    //             iconeCurtida = iconeCoracaoPreto
    //         } else {
    //             iconeCurtida = iconeCoracaoBranco
    //         }

    //         let componenteComentario

    //         if (this.state.comentando) {
    //             componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    //         }

    //         return <div className={'post-container'}>
    //             <div className={'post-header'}>
    //                 <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
    //                 <p>{this.props.nomeUsuario}</p>
    //             </div>

    //             <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'} />

    //             <div className={'post-footer'}>
    //                 <IconeComContador
    //                     icone={iconeCurtida}
    //                     onClickIcone={this.onClickCurtida}
    //                     valorContador={this.state.numeroCurtidas}
    //                 />

    //                 <IconeComContador
    //                     icone={iconeComentario}
    //                     onClickIcone={this.onClickComentario}
    //                     valorContador={this.state.numeroComentarios}
    //                 />
    //             </div>
    //             {componenteComentario}
    //         </div>
    //     }
