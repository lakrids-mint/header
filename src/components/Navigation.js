import React, {useState} from "react"
import Logo from "../logo.svg"
import styled from 'styled-components'
import DropDown from "./DropDown"

//https://medium.com/@sidbentifraouine/responsive-animated-top-navigation-bar-with-react-transition-group-fd0ccbfb4bbb
//import {GFLogo} from "./GFLogo"

const Header = styled.header`
  grid-area:header;
  display: grid;
  grid-template-areas: "logo nav";

  position:fixed;
  width: 100%;
  bottom:0; 
  
  background-color: #11497B;
  
  @media only screen and (min-width: 600px) {
    bottom:initial;
    left:0;
    grid-template-areas: 
    "logo" 
    "nav";
    height: 100%;  
    width:auto;
  }
`

const Nav = styled.nav`
    grid-area:nav;
    display:grid;
    grid-template-columns:repeat(5,auto);
    align-items:center;
    justify-items:center;
    justify-self: end;
    @media only screen and (min-width: 600px) {
        grid-template-rows:repeat(5,auto);
        grid-template-columns:none;
        justify-self: initial;
        align-self: end;
    }
      }
`
const StyledLogo = styled.img`
      display:none;
@media only screen and (min-width: 600px) {
    display: inline
}
`

const Navigation = () => {
  
    return (
        <Header>
            <StyledLogo alt="ff" src={Logo} width="50" height="50" />
            <Nav>
            

                <a href="#"> <i class="material-icons md-light">account_circle</i>
</a>
            </Nav>
           <DropDown/>
                   </Header>
    )
}
export default Navigation