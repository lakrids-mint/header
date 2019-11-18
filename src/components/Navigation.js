import React, { useState } from "react"
import Logo from "../logo.svg"
import styled from 'styled-components'

const Header = styled.header`
  grid-area:header;
  display: grid;
  grid-template-columns:50px 2fr;
  grid-template-areas: "logo nav";
  
  position:fixed;
  width: 100%;
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
    grid-template-columns:1fr;
    align-items:center;
    justify-items:center;
    justify-self: end;
    @media only screen and (min-width: 600px) {
        grid-template-rows:1fr;
        grid-template-columns:none;
        justify-self: initial;
        align-self: end;
    
    }

      }
`
const StyledDropdown = styled.div`
//display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  margin-bottom: 150px;
`


const Navigation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleDropdown = () => {
        setIsVisible(!isVisible)
    }
    return (
        <Header>
            <img src={Logo} width="50" height="50" />
            <Nav>
                {isVisible ? <StyledDropdown><p>hello</p></StyledDropdown> : ""}


                <a href="#" onClick={toggleDropdown}> out</a>

            </Nav>
        </Header>
    )
}
export default Navigation