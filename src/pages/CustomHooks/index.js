import React from 'react'
import { useFetch } from './useFetch'

const CustomHooks = () =>{
    const {loading, data} = useFetch('ty', true)

    return(
        <div>
            {loading?
                <span>Loading data ...</span>
            :
            <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                {data.map((district)=>{
                    return(
                        <span key={district.id}>{district.name}</span>
                    )
                })}            

            </div>
                
            }
        </div>
    )
}

export default CustomHooks