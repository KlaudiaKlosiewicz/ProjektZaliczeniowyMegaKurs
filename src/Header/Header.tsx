import React from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.header`
  grid-column: 1/13;
  grid-row: 1;
  height: 7vh;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    color: rgba(172, 33, 197, 0.96);
    font-family: Pacifico;
    font-size: 2.7em;
  }
`
const Header = () => {
    return(
        <HeaderContainer>
            <h1>Pogodynka</h1>
        </HeaderContainer>
    )
}

export default Header;