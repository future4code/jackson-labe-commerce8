import React from 'react';
import styled from 'styled-components';

const entradaForm = styled.p`
display:inline;
`






class Filtro extends React.Component {
    state = {
        parametro:'',
    }

pegarParametro = () => {
    console.log('Adicionar paramento', this.state.paramento) 
    const info = {
        parametro2: this.state.parametro,
    }
}
onChangeTextoParametro = (event) => {
    console.log('Adicionar paramento', this.state.parametro) 
    this.setState({parametro: event.target.value})
    const novaInfo = this.state.parametro
    console.log(novaInfo)
}



criarNovoTela = (novaInfo) => {
    const novaListaProd = this.state.Cards.cartao.filter()
}


    componentDidUpdate() {
        

    };
  
    componentDidMount() {
  
    };


    render() {

        return(
            <div>
                <h1>Filtros</h1>
                <entradaForm>Valor Minimo:</entradaForm>
                <input type="number" onChange={this.onChangeTextoParametroo}/>
                <entradaForm>Valor Maximo:</entradaForm>
                <input type="number" onChange={this.pegarParametroo}/>
                <entradaForm>Buscar Produto</entradaForm>
                <input 
                type="text" 
                onChange={this.onChangeTextoParametro}
                
                />
            </div>

        )

    }
    
}
export default Filtro;