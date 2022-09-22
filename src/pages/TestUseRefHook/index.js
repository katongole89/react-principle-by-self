//useRef doesnt cause re-rendering on update
//can be used like useRef
//reference elements inside of the html

import React, {useRef, useEffect, useState} from 'react'

const TestUseRefHook = () =>{
    const [state, setState] = useState({
        theValue:''
    })
    const renderCount = useRef(0)

    const inputRef = useRef()

    useEffect(()=>{
        renderCount.current = renderCount.current + 1
    })

    function focus(){
        inputRef.current.focus()
    }

    
    return(
        <div>
            <input ref={inputRef} value={state.theValue} onChange={e=>setState({...state, theValue:e.target.value})}/>
            <span>Test use ref hook</span>
            <div>I rendered {renderCount.current} times</div>
            <button onClick={focus}></button>
        </div>
    )
}

export default TestUseRefHook