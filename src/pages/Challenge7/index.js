import React, {useState, useRef, useEffect} from 'react'

const AddedString = ({word, onClickWord}) =>{
    return(
        <div onClick={()=>onClickWord(word.id)}>
            <span>{word.word}</span>
        </div>
        
    )
}

const Challenge7 = () =>{
    const [state, setState] = useState({
        listWords:[],
        word:'',
        modalOpen:false,
        modalText:''
    })

    const modalRef = useRef()

    useEffect(() => {
        const clickedOutside = (e) => {
          if (
            state.modalOpen &&
            modalRef.current &&
            !modalRef.current.contains(e.target)
          ) {
            // setModalOpen(false);
            setState({...state, modalOpen:false})
          }
        };
    
        document.addEventListener("mousedown", clickedOutside);
    
        return () => {
          document.removeEventListener("mousedown", clickedOutside);
        };
      }, [state.modalOpen]);

    const onClickWord = (id) =>{
        let theWord = ''
        state.listWords.forEach((word)=>{
            if(word.id === id){
                theWord = word.word
            }
        })
        setState({...state, modalOpen:true, modalText:theWord})
    }

    const handleChangeInput = (e) => {
        setState({...state, word:e.target.value})
    }

    const handleSubmitWord = (e) =>{
        e.preventDefault()
        setState({...state, word:'', listWords:[{id:new Date().getUTCMilliseconds(), word:state.word}, ...state.listWords]})
    }


    return(
        <>
            <div style={{display:'flex', width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', minHeight:'100vh', position: "relative",}}>
                <div>
                    <form onSubmit={handleSubmitWord}>
                        <input value={state.word} onChange={handleChangeInput} />
                    </form>
                </div>
                <div style={{marginTop:'10px'}}>
                    {state.listWords.map((word)=>{
                        return(
                            <AddedString key={word.id} word={word} onClickWord={onClickWord} />
                        )
                    })}

                </div>

                
            </div>

            {state.modalOpen?
                <div
                ref={modalRef}
                style={{
                    position: "absolute",
                    textAlign: "center",
                    inset: 0,
                    margin: "auto",
                    width: 600,
                    height: 600,
                    border: "5px solid black",
                    backgroundColor: "black",
                }}
                >
                {/* <p style={{ color: "white" }}>{`Full text: "${modalText}"`}</p> */}
                <p style={{color:'white'}}>{state.modalText}</p>
                </div>
                :
                null
            }

            
        </>
    )
}

export default Challenge7