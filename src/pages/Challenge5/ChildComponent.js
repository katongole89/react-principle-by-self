import React, {useContext} from 'react'
import { GeneralContext } from '.'

const ChildComponent = () =>{
    const contextData = useContext(GeneralContext)

    return(
        <div>Child component</div>
    )
}

export default ChildComponent