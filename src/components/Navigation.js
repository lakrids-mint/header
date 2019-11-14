import React from "react"
import Logo from "../logo.svg"
import styled from 'styled-components'
//https://medium.com/@sidbentifraouine/responsive-animated-top-navigation-bar-with-react-transition-group-fd0ccbfb4bbb

const Header = styled.header`
  grid-area:header;
  display: grid;
  grid-template-columns:50px 2fr;
  grid-template-areas: "logo nav";
  
  position:fixed;
  width: 100vw;
  bottom:0; 
  
  background-color: #eaeafb;
  
  @media only screen and (min-width: 600px) {
    grid-template-rows:50px 2fr;
    background-color:pink;
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
    grid-template-columns:repeat(4,1fr);
    align-items:center;
    justify-items:center;
    justify-self: end;
    @media only screen and (min-width: 600px) {
        grid-template-rows:repeat(4,1fr);
        grid-template-columns:none;
        justify-self: initial;
        align-self: end;
    
    }

      }
`

const Navigation = () => {
    return (
        <Header>
            <img src={Logo} width="50" height="50" />
            <Nav>
                <a href="#"> out</a>
            </Nav>
        </Header>
    )
}
export default Navigation