import React from 'react';
import styled from 'styled-components';
import Cards from './Components/Cards'
import Filtro from './Components/Filtro'

const Master = styled.div`
display:flex;

padding:10px;
gap:20px;
`

const Left = styled.div`
border: 1px solid black;
width: 300px;
height: 98vh;
`

const Middle = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
width: 800px;
height: 98vh;
margin-top:15px;
padding: 15px;


`
const Right = styled.div`
border: 1px solid black;
width: 300px;
height: 98vh;

`
const Menu = styled.div`
display: flex;
justify-content: space-between;


heidh: 20px;


`







function App() {
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
            

          </Menu>
              <Cards/>
          
      </Middle>

      <Right>
      </Right>
           
    </Master>
  );
}

export default App;
