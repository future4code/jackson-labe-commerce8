import React, {Component} from 'react'
import Filter from './components/Filter/Filter'
import ItemProducts from './components/ItemProducts/ItemProducts'
import ItemBasket from './components/ItemBasket/ItemBasket'
import {list} from './list'

import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95vw;
  height: 100vh;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 10vw;
  height: 90vh;
  padding: 1rem 1rem;
  p{
    margin: 5px 0px;
    padding:0;
  }
  h1{
    margin:0;
    margin-bottom: 15px;
    padding:0;
    text-align: center;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 70vw;
  padding: 1rem 1rem;
`
const Info = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0 15px;
   p{
       font-weight: bold;
   }
`;

const RightInfo = styled.div`
    button{
        margin-left: 10px;
    }
`;

const Products = styled.div`
  display: grid;
  align-items: center;
  justify-items:center;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
 
`;

const HideMenu = styled.div`
    width: 18vw;
    height: 90vh;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid black;
    padding: 1rem 0.5rem;

    h1, h4{
      margin:0;
      margin-bottom: 15px;
      padding:0;
    }
`;

export default class App extends Component {
  state = {
    allList: list,
    myBasket: [],
    showBasket: false,
    filterText: "",
    filterMax: null,
    filterMin: null,
  }
  componentDidUpdate(){
    const objectMyBasket = {
      myBasket: this.state.myBasket
    }
    localStorage.setItem("myBasket", JSON.stringify(objectMyBasket))
    
  }

  componentDidMount(){
    const myBasketString = localStorage.getItem("myBasket")
    const myBasketObject = JSON.parse(myBasketString)

    if (myBasketObject){
      this.setState({
        myBasket: myBasketObject.myBasket
      })
    }
  }

  //  ---------------SHOWBASKET starts------------------- \\
  changeBasket = () =>{
    this.setState({showBasket : !this.state.showBasket})
  }
  //  ---------------SHOWBASKET end------------------- \\

  //  ---------------INFO starts------------------- \\
  changeSelect = (event) => {
    
    const noOrder = this.allList
    let newValue = event.target.value;

    switch(newValue){
      case "crescente":
        const ordemCrescente = this.state.allList.sort((a,b) => a.price - b.price)
        this.setState({allList : ordemCrescente})
        break
      case "decrescente":
        const ordemDecrescente = this.state.allList.sort((a,b) => b.price - a.price)
        this.setState({allList : ordemDecrescente})
        break   
      default: this.setState({allList : noOrder})
    }
  }
  //  ---------------INFO ends------------------- \\

  //  ---------------BASKET ends------------------- \\
  addBasket = (id) =>{
    const productBaskets = this.state.myBasket
    const productBasket = this.state.allList.filter((item) => { 
      return (id === item.id )
    })
    productBaskets.push(productBasket[0])
    this.setState({myBasket : productBaskets})   
  }

  delBasket = (id) =>{
    const newBasketList = this.state.myBasket.filter(item =>{
      return (id !== item.id)
    })
    this.setState({myBasket : newBasketList})
  } 
  //  ---------------BASKET ends------------------- \\

  //  ---------------FILTER starts------------------- \\
  filterText = (value) =>{
    this.setState({filterText : value})
  }

  filterMax = (value) => {
    this.setState({filterMax : value})
  }

  filterMin = (value) =>{
    this.setState({filterMin : value})
  }
  //  ---------------FILTER ends------------------- \\ 

  render(){

    //  ---------------BASKETS starts------------------- \\

    const amountOfProducts = this.state.allList.length

    const basketList = this.state.myBasket.map(item => {
      return(          
        <ItemBasket
        key = {item.id}
        product = {item} 
        delBasket = {this.delBasket}            
        />
        )
      })
      
      const priceArray = this.state.myBasket.map(item => item.price)
      const totalBasket = priceArray.reduce((acumulate, currentValue) => acumulate + currentValue, 0)
   
    //  ---------------BASKETS ends------------------- \\

    //  ---------------PRODUCTS starts------------------- \\

    const productList = this.state.allList

    .filter(item => {
      return item.name.toLowerCase().indexOf(this.state.filterText) >= 0
    })  

    .filter(item => {
      return item.price < (parseFloat(this.state.filterMax) || Infinity)
    })

    .filter(item => {
      return item.price > (parseFloat(this.state.filterMin) || 0)
    })
    
    .map(item => {
      return(
        <ItemProducts        
        key = {item.id}
        product = {item}
        addBasket = {this.addBasket} 
        filterText = {this.state.filterText}
        filterMax = {this.state.filterMax}   
        filterMin = {this.state.filterMin}      
        />
      )
    })

    //  ---------------PRODUCTS ENDS------------------- \\

    return(
      <Main>
          <FilterContainer>
            <Filter 
              productText = {this.state.filterText}
              filterText = {this.filterText}
              filterMax = {this.filterMax}
              filterMin = {this.filterMin}
            />
          </FilterContainer>
          <Section>
              <Info>
                <p>Quantidade de Produtos: {amountOfProducts}</p>
                <RightInfo>
                  <select onChange={this.changeSelect}>
                    <option value="crescente">Preço: Crescente</option>
                    <option value="decrescente">Preço: Decrescente</option>
                  </select>
                  <button onClick={this.changeBasket}>My Basket</button>
                </RightInfo>
              </Info>
              <Products>
                {productList}
              </Products>
          </Section>
          {this.state.showBasket && (
            <HideMenu>
              <h1>Basket</h1>
              <h4>Total: R${totalBasket}</h4>
              {basketList}
            </HideMenu>
          )}
      </Main>
    )
  }
}



