import React from 'react'
import styled from 'styled-components'
import {pizzaRed} from '../Styles/colors'
import {Title} from '../Styles/title'
const NavbarStyled = styled.div`
    background-color : ${pizzaRed};
    padding:10px;
    width:100%;
    position:fixed;
    z-index:999;
`

const Logo =styled(Title)`
    font-size:20px;
    color: white; 
    font-weight:800; 
    text-shadow: 1px 1px 4px #380502;

`

export function Navbar(){
    return <NavbarStyled>
        <Logo>
        皮煞哈 <span role="img" aria-label="pizza slice">
          đ
        </span>
        </Logo>    
    </NavbarStyled>
}