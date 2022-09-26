import React, {useEffect, useState} from 'react'

const EventListeners = () => {
    const [state, setState] = useState({
        size: window.innerWidth
    })

    const checkSize = () =>{
        setState({...state, size:window.innerWidth})
    }

    useEffect(()=>{
        console.log('running useEffect')
        window.addEventListener('resize', checkSize)
        //do useEffect cleanup - due to a memory leak
        return ()=>{
            window.removeEventListener('resize', checkSize)
        }
    }, [])


    return(
        <div>
            <span style={{marginRight:'20px'}}>the width: </span><span>{state.size}</span>
        </div>
    )
}

export default EventListeners