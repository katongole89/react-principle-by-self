import React, {useContext} from 'react'
import { ContextApiContext } from '.'

const ContextComponent = () => {
    const {name} = useContext(ContextApiContext)
    return(
        <div>
            <span>{name}</span>
        </div>
    )
}

export default ContextComponent