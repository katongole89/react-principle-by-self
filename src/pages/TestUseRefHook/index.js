//useRef doesnt cause re-rendering on update

import React, {useRef, useEffect, useState} from 'react'

const TestUseRefHook = () =>{
    const [state, setState] = useState({
        theValue:''
    })
    const renderCount = useRef(0)

    useEffect(()=>{
        renderCount.current = renderCount.current + 1
    })

    

    return(
        <div>
            <input value={state.theValue} onChange={e=>setState({...state, theValue:e.target.value})}/>
            <span>Test use ref hook</span>
            <div>I rendered {renderCount.current} times</div>
        </div>
    )
}

export default TestUseRefHook