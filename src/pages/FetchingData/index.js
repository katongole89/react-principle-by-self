import React, {useState, useEffect} from 'react'

//using axios to get and to post
//using fetch to get and to post
const UsingFetchSetup = ({fetchData, isFetching, handleClickFetchGet}) =>{
    return(
        <>
            <span style={{fontWeight:'bold'}}>Fetch</span>
            <div style={{display:'flex',width:'100%', border: '1px solid gray', minHeight:'200px'}}>
                <div style={{flex:1,display:'flex',flexDirection:'column'}}>
                    <span>Get data</span>
                    <div>
                        <button onClick={handleClickFetchGet}>Get data</button>
                    </div>
                    {isFetching?
                        <div>Fetching data..</div>
                        :
                        <div>
                            {fetchData.length < 1?
                                <span>No data to display</span>
                            :
                                (fetchData.map((district)=>{
                                    return(
                                        <div>
                                            <span>{district.name}</span>
                                        </div>
                                    )
                                }))
                            }
                        </div>
                    }
                    
                    
                </div>
                <div style={{flex:1}}>
                    Post data side
                </div>
            </div>
        </>
    )
}


const UsingAxiosSetup = () =>{
    return(
        <>
            <span style={{fontWeight:'bold'}}>Axios</span>
            <div style={{display:'flex',width:'100%', border: '1px solid gray', minHeight:'200px'}}>
                <div style={{flex:1}}>
                    <button>Get data</button>
                </div>
                <div style={{flex:1}}>
                    Post data side
                </div>
            </div>
        </>
    )
}

const FetchingData = () =>{
    const [state, setState] = useState({
        fetchData: [],
        isFetching:false,
        axiosData: [],
        isAxiosing:false
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
        let fetchedData = await fetch(url)
        const toJsonData = await fetchedData.json()
        setState({...state, isFetching:false, fetchData:toJsonData[0].districts}) 
    }

    useEffect(()=>{
        if(state.isFetching){
            console.log('fetching the data ...')
            FetchingFetch()
        }
    }, [state.isFetching])


    const handleClickFetchGet = () =>{
        setState({...state, isFetching:true})
    }

    console.log('fetched data',state.fetchData)



    return(

        <>
            <div>
                FetchingData
            </div>
            <div style={{display:'flex', width:'100%'}}>
                <div style={{flex:1,margin:'10px'}}>
                    <UsingFetchSetup fetchData={state.fetchData} isFetching={state.isFetching} handleClickFetchGet={handleClickFetchGet}/>
                </div>
                <div style={{flex:1,margin:'10px'}}>
                    <UsingAxiosSetup/>
                </div>


            </div>
        </>
    )
}

export default FetchingData