import React, {useState, useEffect} from 'react'

export const useFetch = ({url, doFetch}) => {
    const [state, setState] = useState({
        loading:true,
        data: []
    })

    const FetchingFetch = async () => {
        let requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // "Authorization": `Bearer ${refreshed_access?refreshed_access:access}`
            },
            redirect: 'follow'
        }
        let url = 'https://raw.githubusercontent.com/bahiirwa/uganda-APIs/master/districts.json'
         

        try{
            let fetchedData = await fetch(url)
            const toJsonData = await fetchedData.json()
            console.log(toJsonData)
            setState({...state, loading:false, data:toJsonData[0].districts})
        }catch(error){
            console.log('catching the error')
            setState({...state, isloading:false })
        }
    }

    useEffect(()=>{
        console.log('running the useEffect')
        FetchingFetch()
    }, [doFetch])

    return {loading:state.loading, data:state.data}

}

