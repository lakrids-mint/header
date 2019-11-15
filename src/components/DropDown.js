import React, {useState, useRef} from "react"

import styled from 'styled-components'

// #11497B
const StyledDropDown = styled.div`
position:absolute;
background-color:pink;
height: 200px;
width:200px;

`

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(true);
    const ref = useRef()
    const toggle = ()=> {
        setIsOpen(!isOpen);
      };
    return (
      
            <StyledDropDown>
<p>Name</p>
            </StyledDropDown>
    )
}
export default DropDown