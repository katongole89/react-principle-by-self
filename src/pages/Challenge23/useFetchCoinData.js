import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchCoinData = (url) => {
    const [state, setState] = useState({
        isloading:true,
        data: 'Getting current price ..',
        isError:false
    })
    const FetchingData = async () =>{
        try{
            console.log('making request')
            const response = await axios(url)
            console.log(response)
            setState({...state, isloading:false, isError:false, data:response.data.bpi.USD.rate})
        }catch(error){
            setState({...state, isError:true})
        }
    }

    useEffect(()=>{
        FetchingData()
        const interval = setInterval(() => FetchingData(), 6000);
        return () => clearInterval(interval);
    }, [])

    console.log(state.data)

    return {isloading:state.isloading, data:state.data, isError:state.isError}
}