import React, {createContext, useState} from 'react'
import ChildComponent from './ChildComponent'

export const GeneralContext = createContext({})

const Challenge5 = () =>{
    const [state, setState] = useState({
        users:{
            Bob: true,
            Gary: true,
            Jessica: true,
            Sam: true,
            Eric: true,
        }
    });

    return(
        <GeneralContext.Provider value={{
            state,setState
        }}>
            <ChildComponent/>
        </GeneralContext.Provider>
    )
}

export default Challenge5