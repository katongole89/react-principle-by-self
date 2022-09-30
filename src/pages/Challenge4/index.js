// Write a component that renders five stacked identical images of ladder pieces.
// When the user hovers over a piece of the ladder, that ladder piece (as well as all the pieces below it)
// should expand to a larger size. The starting position of the component (when the user’s mouse is not over any of the images),
// should look like this. The component should return to this state when the user is not hovering over any images.
// The image can be found at “https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png”.

// Below are two other possible states — when the user is hovering their mouse over the second image from the bottom and when the user
// is hovering their mouse over the fourth image from the bottom, respectively. Importantly,
// your solution should also be easily generalizable to any number of ladder segments.

// Though the solution section will only create a component with only the features discussed in the specification up to this point,
// you can also try making the ladder grow on its own from the image on the bottom to the one at the top using a timer and useEffect().



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