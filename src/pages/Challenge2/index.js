// Specification
// Write a functional component that includes a text input field and, below it,
// a list of images. At the start, the list should be empty. When the user submits
// some string input-string, the function should append the robot image corresponding to that string to the current list of images.


// The source of the image is ‘https://robohash.org/input-string’. Robohash provides unique images for any text. For example, put https://robohash.org/hello in your browser and you’ll see the image on the left.
// Put any other string, and you’ll see a different image.

// When a user clicks on a robot image, the image should be removed from the list. Finally,
// if you are inclined to take on styling details, center the input field and display the robot list in centered rows that wrap to the next line after exceeding the page’s width. After entering many robots, the page should look something like this:


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