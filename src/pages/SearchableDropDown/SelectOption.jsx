import React from 'react'
import styled from 'styled-components'

const StyledOption = styled.div`
    border:2px;
    border-color:red;
    width: 12rem;
`

const SelectOption = ({option}) =>{
    
    return (
        <StyledOption>
            <span style={{fontWeight:'bold'}}>{option.name}</span>
        </StyledOption>
    )

}

export default SelectOption