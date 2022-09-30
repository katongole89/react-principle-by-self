import React, {createContext} from 'react'
import ContextComponent from './ContextComponent'


export const ContextApiContext = createContext()

const TestingContextApi = () => {
    
    return(
        <ContextApiContext.Provider value={{
            name:'katongole richard'
        }}>
            <ContextComponent/>
        </ContextApiContext.Provider>
    )
}

export default TestingContextApi