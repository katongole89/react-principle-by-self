// Write a functional component to render a button and a list of activities.
// The list of activities should start out with one activity.
// When the user clicks the button, an additional activity should be fetched and appended to the list.
// To generate a random activity, issue a get request to “https://www.boredapi.com/api/activity”
// — an API for development that does not require authentication. Each request will return a new, 
// random object containing the following fields: activity, type, participants, price, link, key, and accessibility.
// The values associated with these fields are either strings or numbers. 

// Each item in the list should display the activity and a button beside it that, 
// when clicked, renders the remaining fields from that activity’s object below it. 
// Here is an example of the final product, where the user has expanded the last activity in the list.



import React, {useState, useEffect} from 'react'
import axios from 'axios'

const RandomActivity = ({activity}) => {
    const [state, setState] = useState({
        show:false
    })

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