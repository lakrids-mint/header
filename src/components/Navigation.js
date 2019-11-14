import React from "react"
import Logo from "../logo.svg"
import styled from 'styled-components'
//meta tag
//content specific breakpoints 
const Header = styled.header`
  grid-area:header;
  display: grid;
  grid-template-columns:50px 2fr;
  grid-template-areas: "logo nav";
  background-color: #eaeafb;
  position:fixed;
  width: 100vw;
  bottom:0; 
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
    @media only screen and (min-width: 600px) {
        grid-template-rows:repeat(4,1fr);
        grid-template-columns:none;


      }
`

const Navigation = () => {
    return (
        <Header>
            <img src={Logo} width="50" height="50" />
            <Nav>
                <a href="#">link</a>
                <a href="#">log </a>
                <a href="#">link</a>
                <a href="#"> out</a>


            </Nav>
        </Header>
    )
}
export default Navigation