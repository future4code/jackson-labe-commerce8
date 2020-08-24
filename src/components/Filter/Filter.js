import React, {Component} from 'react'

export default class Filter extends Component {

   
    filterText = (event) => {
        this.props.filterText(event.target.value)
    }

    filterMax = (event) => {
        this.props.filterMax(event.target.value)
    }

    filterMin = (event) => {
        this.props.filterMin(event.target.value)
    }

    render(){
        return(
            <form>
                <h1>Filter</h1>
                <p>Valor Mínimo:</p>
                <input type="number" onChange={this.filterMin}/>
                <p>Valor Máximo:</p>
                <input type="number" onChange={this.filterMax}/>
                <p>Buscar Produto:</p>
                <input type="text" onChange={this.filterText} />
            </form>
        )
    }
}