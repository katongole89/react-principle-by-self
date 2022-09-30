import React from 'react'

const SingleImage = ({url}) =>{
    return(
        <div>
            <img src={url}/>
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
                        <SingleImage key={image} url={img}/>
                    )

                })}

            </div>
        </>
    )

}

export default Challenge4