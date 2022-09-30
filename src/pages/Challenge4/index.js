import React, {useState, useEffect} from 'react'
import ladderImage from '../../assets/images/ladder.png'

const SingleImage = ({url}) =>{
    const [state, setState] = useState({
        size:'100px'

    })
    return(
        <div>
            <img 
                src={url}
                onMouseEnter={() => setState({...state, size:'160px' })}
                onMouseOut={() => setState({...state, size:'100px' })}
                height={state.size}
                width={state.size}
            />
        </div>
    )
}

const Challenge4 = () =>{
    let img = 'https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png'
    let allImages = [1,2,3,4,5]

    return(
        <>
            <div style={{marginBottom:'10px'}}>
                <span>Images</span>
            </div>
            <div>
                {allImages.map((image)=>{
                    return(
                        <SingleImage key={image} url={ladderImage}/>
                    )

                })}

            </div>
        </>
    )

}

export default Challenge4