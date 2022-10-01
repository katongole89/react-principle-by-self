import React, {useState, useEffect, useRef} from 'react'

const SimpleModal = () =>{
    const modalRef = useRef()
    const [state, setState] = useState({
        modalOpen:false,
        modalContent:''
    })

    const handleClick = () => {
        setState({...state, modalOpen:true})
    }

    useEffect(()=>{
        const closeModal = () =>{
            setState({...state, modalOpen:false})
        }
 
        document.addEventListener('mousedown', closeModal)

        return () => document.removeEventListener('mousedown', closeModal)

    }, [state.modalOpen])

    return(
        <>
        <div style={{display:'flex', width:'100%', height:'100vh', position:'relative', justifyContent:'center', alignItems:'center'}}>
            <button onClick={handleClick}>click me</button>

        </div>
        {state.modalOpen?
            <div style={{height:'100px', width:'100px', inset:0, backgroundColor:'black', position:'absolute' }} ref={modalRef} >

            </div>
            :
            null
        }
        
        </>
    )
}

export default SimpleModal