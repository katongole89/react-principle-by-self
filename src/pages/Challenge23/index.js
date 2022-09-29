import React from 'react'
import { useFetchCoinData } from './useFetchCoinData'

const TestRegularFetchCustomHook = () => {
    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    const {isloading, data, isError} = useFetchCoinData(url)
    console.log('nigga data', data)
    return(
        <div>
            {isloading && !isError?
                <>
                    <div>
                        <span>Updating data</span>
                    </div>
                    
                </>
                :
                null
            }

            {!isError?
                <>
                    <div>
                        <span>{data}</span>
                    </div>
                    
                </>
                :
                null
            }



            {isError?
                <span>Internet error</span>
                :
                null
            }
            
        </div>
    )

}

export default TestRegularFetchCustomHook