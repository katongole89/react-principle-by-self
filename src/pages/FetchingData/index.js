import React from 'react'

//using axios to get and to post
//using fetch to get and to post
const UsingFetchSetup = () =>{
    return(
        <div style={{display:'flex',width:'100%', border: '1px solid gray', minHeight:'200px'}}>
            <div style={{flex:1}}>
                <button>Get data</button>
            </div>
            <div style={{flex:1}}>
                Post data side
            </div>
        </div>
    )
}



const FetchingData = () =>{
    return(
        <>
            <div>
                FetchingData
            </div>
            <div style={{display:'flex', width:'100%'}}>
                <div style={{flex:1,margin:'10px'}}>
                    <UsingFetchSetup/>
                </div>
                <div style={{flex:1}}>
                    second part
                </div>


            </div>
        </>
    )
}

export default FetchingData