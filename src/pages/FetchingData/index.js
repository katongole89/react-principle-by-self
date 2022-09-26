import React, {useState, useEffect} from 'react'

//using axios to get and to post
//using fetch to get and to post
const UsingFetchSetup = ({fetchData, isFetching}) =>{
    return(
        <>
            <span style={{fontWeight:'bold'}}>Fetch</span>
            <div style={{display:'flex',width:'100%', border: '1px solid gray', minHeight:'200px'}}>
                <div style={{flex:1,display:'flex',flexDirection:'column'}}>
                    <span>Get data</span>
                    <div>
                        <button>Get data</button>
                    </div>
                    {isFetching?
                        <div>Fetching data..</div>
                        :
                        <div>
                            {fetchData.length < 1?
                                <span>No data to display</span>
                            :
                                (fetchData.map(()=>{
                                    return(
                                        <div>
                                            single component
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
    return(

        <>
            <div>
                FetchingData
            </div>
            <div style={{display:'flex', width:'100%'}}>
                <div style={{flex:1,margin:'10px'}}>
                    <UsingFetchSetup fetchData={state.fetchData} isFetching={state.isFetching}/>
                </div>
                <div style={{flex:1,margin:'10px'}}>
                    <UsingAxiosSetup/>
                </div>


            </div>
        </>
    )
}

export default FetchingData