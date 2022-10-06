import axios from 'axios'
import React from 'react'

const DisplayData =() =>{
    return(
        <div>
            child component
        </div>
    )
}


const Challenge18 = () => {
    const [state, setState] = useState({
        data: []
    })

    const FetchData = async () =>{
        let response = await axios('https://randomuser.me/api?results=19')
        console.log(response)
        setState({...state, data:response.data})
    }


    return(
        <div>
            
        </div>
    )
}

export default Challenge18