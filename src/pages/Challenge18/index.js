
import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Person = ({personalData}) =>{
    return(
        <div>
            Person
        </div>
    )

}

const DisplayData =({data}) =>{
    return(
        <div>
            
        </div>
    )
}


const Challenge18 = () => {
    const [state, setState] = useState({
        data: [],
        page:'1'
    })

    const FetchData = async () =>{
        let response = await axios(`https://randomuser.me/api?results=${state.page}`)
        console.log(response)
        setState({...state, data:response.data})
    }

    useEffect(()=>{
        FetchData()
    }, [state.page])


    return(
        <div>
            <DisplayData data={state.data} />
        </div>
    )
}

export default Challenge18