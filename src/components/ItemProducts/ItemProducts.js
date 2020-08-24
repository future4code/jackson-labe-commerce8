import React, {Component} from 'react'
import styled from 'styled-components'

const ItemProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  width: 90%;
  height: 275px;
  border: 1px dashed orange;
    img{
        height:150px;
        width:150px;
    }

    p{
        margin:0;
        padding:0;
    }
`;

export default class Products extends Component {
    render(){

        const {id,image,name,price} = this.props.product;
        const {addBasket} = this.props

            return(
            <ItemProduct>
                <img src= {image} alt="product"/>
                <p> {name} </p>
                <p>R$ {price} </p>
                <button onClick={() => addBasket(id)}>Add Product</button>
            </ItemProduct>
        )
    }
}