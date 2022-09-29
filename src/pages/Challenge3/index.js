import React, {useState, useEffect} from 'react'
import axios from 'axios'

const RandomActivity = ({activity}) => {
    const [state, setState] = useState({
        show:false
    })
    console.log(activity)


    return(
        <div style={{margin:'10px', width:'250px', height:'150px', backgroundColor:'#eee'}}>
            {activity.activity}
            <button onClick={()=>setState({...state, show:true})}>Show</button>
            {state.show?
                <OtherComponents type={activity.type} participants={activity.participants} price={activity.price}/>
                :
                null
            }
            
        </div>
    )
}

const OtherComponents = ({type, participants, price}) => {
    return(
        <div>
            <div style={{display:'flex'}}>
                <span>type:</span>
                <span>{type}</span>
            </div>
            <div style={{display:'flex'}}>
                <span>participants:</span>
                <span>{participants}</span>
            </div>
            <div style={{display:'flex'}}>
                <span>price:</span>
                <span>{price}</span>
            </div>
        </div>
    )
}


const Challenge3 = () => {
    const [state, setState] = useState({
        activities: [],
        isLoading: false
    })

    const FetchingData = async () => {
        console.log('fetching data')
        const response = await axios('https://www.boredapi.com/api/activity')
        console.log(response)
        setState({...state,isLoading:false, activities:[{id:new Date().getUTCMilliseconds(),
             activity:response.data.activity,
             type: response.data.type,
             participants:response.data.participants,
             price: response.data.price

            }, ...state.activities]})
    }

    const handleClick = () =>{
        setState({...state, isLoading:true})
    }

    useEffect(()=>{
        if(state.isLoading){
            FetchingData()
        }
    }, [state.isLoading])

    console.log(state.activities)



    return(
        <>
            <div>
                <button onClick={handleClick}>Generate random activity</button>
            </div>

            {state.isLoading?
                <div>
                    <span>Generating new activity</span>
                </div>
                :
                null
            }
            
            <div style={{marginTop:'20px'}}>
                {state.activities.map((act)=>{
                    return(
                        <RandomActivity key={act.id} activity={act}/>
                    )
                })}
            </div>
        </>
    )
}

export default Challenge3