import React, {useState} from 'react'

const AddedString = ({str}) =>{
    return(
        <div>
            <span>{str}</span>
        </div>
        
    )
}

const Challenge7 = () =>{
    const [state, setState] = useState({
        listWords:[],
        word:''
    })

    const handleChangeInput = (e) => {
        setState({...state, word:e.target.value})
    }

    const handleSubmitWord = (e) =>{
        e.preventDefault()
        setState({...state, word:'', listWords:[state.word, ...state.listWords]})
    }


    return(
        <div style={{display:'flex', width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', minHeight:'100vh'}}>
            <div>
                <form onSubmit={handleSubmitWord}>
                    <input value={state.word} onChange={handleChangeInput} />
                </form>
            </div>
            <div style={{marginTop:'10px'}}>
                {state.listWords.map((word)=>{
                    return(
                        <AddedString str={word} />
                    )
                })}

            </div>
        </div>
    )
}

export default Challenge7