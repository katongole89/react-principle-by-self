//useRef doesnt cause re-rendering on update
//can be used like useRef
//reference elements inside of the html

//-- u can use it to store your previous value of state

import React, {useRef, useEffect, useState} from 'react'

const TestUseRefHook = () =>{
    const [state, setState] = useState({
        theValue:''
    })
    const renderCount = useRef(0)
    const previousState = useRef('')

    const inputRef = useRef()

    useEffect(()=>{
        renderCount.current = renderCount.current + 1
    })

    useEffect(()=>{
        previousState.current = state
        console.log(previousState)
    }, [state])

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