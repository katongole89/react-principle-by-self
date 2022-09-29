import React, {useState, useEffect} from 'react'


const ImageComp = ({img, RemoveImage}) =>{
    // console.log(url)
    return(
        <div style={{padding:'10px', backgroundColor:'#eee', margin:'8px'}} onClick={()=>RemoveImage(img.id)}>
            <img src={img.url} width={'100px'} height={'100px'}/>
        </div>
    )
}

const Challenge2 = () =>{
    const [state, setState] = useState({
        word:'',
        image: []
    })

    const RemoveImage = (id) => {
        const newImages = state.image.filter((img)=>{
            return img.id !== id
        })

        setState({...state, image:newImages})
    }

    const handleOnChange = (e) => {
        setState({...state, word:e.target.value})
    }

    const AddImage = () =>{
        let url = `https://robohash.org/${state.word}`
        setState({...state, image:[{id:new Date().getUTCMilliseconds(), url:url}, ...state.image]})
    }

    console.log(state.word)

    return(
        <div>
            <div>
                <input onChange={handleOnChange}/>
                <button onClick={AddImage}>Enter</button>
            </div>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                {state.image.map((img)=>{
                    return(
                        <ImageComp key={img.id}  img= {img} RemoveImage={RemoveImage} />
                    )
                })}

            </div>

        </div>
        
    )
}

export default Challenge2