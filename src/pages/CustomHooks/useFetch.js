import React, {useState, useEffect} from 'react'

const useFetch = ({url, doFetch}) => {
    const [state, setState] = useState({
        loading:false,
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
            setState({...state, isloading:false, data:toJsonData[0].districts})
        }catch(error){
            console.log('catching the error')
            setState({...state, isloading:false })
        }
    }

    useEffect(()=>{
        if(doFetch){
            FetchingFetch()
        }
    }, [doFetch])

    return {loading:state.loading}

}