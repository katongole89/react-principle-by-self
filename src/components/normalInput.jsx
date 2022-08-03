import React from 'react'
import styled from 'styled-components'

const NormalInput = styled.input`
    height:2rem;
    width: 12rem;
    border-radius: 3px
`


const InputNormal = (props) => {
    return(
        <NormalInput {...props} />
    )
}

export default InputNormal