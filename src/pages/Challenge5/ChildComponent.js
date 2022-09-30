// Create a functional component that renders an object of users extracted from context using React’s useContext() hook.
// The object’s keys are the users' names and the associated values are booleans that indicate whether the users are online or offline.
// The object should be defined in the parent component’s state and the object, as well as its associated setState() function,
// should be provided to the aforementioned functional component via context.
// Here is an example object initialized in state:

// Again, userState and setUserState() should be passed to the child of their enclosing component via context.
// The child should extract userState and setUserState() using the useContext() hook.
// It should display each user’s name alongside an icon indicating if the user is online (🟢) or offline (🔴).
// Every two seconds, the component should change the status of a random user to the opposite of their current status.



import React, {useContext, useEffect} from 'react'
import { GeneralContext } from '.'
import offline from '../../assets/images/ofline.png'
import online from '../../assets/images/online.png'

const ChildComponent = () =>{
    const {state, setState} = useContext(GeneralContext)

    useEffect(()=>{
        console.log('setting interval')
        const randomPick = () => {
            let arrObj = Object.entries(state.users)
            let keyArray = Object.keys(arrObj)
            let randomIndex = Math.floor(Math.random()*keyArray.length)
            setState({...state, users:{...state.users, [arrObj[randomIndex][0]]: !state.users[arrObj[randomIndex][0]] } })
        }

        const newInterval = setInterval(randomPick, 2000)
        return ()=> clearInterval(newInterval)

    }, [])


    return(
        <div style={{marginTop:'30px'}} >
            {Object.entries(state.users).map(([name, bool])=>{
                return(
                    <div key={name} style={{display:'flex', width:'100%', justifyContent:'center', alignItems:'center'}}>
                        <div>
                            <span>{name}: </span>
                        </div>
                        <div>
                            {bool?
                                <img src={online}/>
                                :
                                <img src={offline}/>
                            }
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default ChildComponent