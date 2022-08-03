import React from 'react'
import styled from 'styled-components'

const StyledOption = styled.div`
    border:1px;
    border-color:blue;
    width: 12rem;
`

const SelectOption = ({option}) =>{
    return (
        <StyledOption>Option</StyledOption>
    )

}

export default SelectOption