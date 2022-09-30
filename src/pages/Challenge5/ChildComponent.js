import React, {useContext, useEffect} from 'react'
import { GeneralContext } from '.'

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
                                <span>Green</span>
                                :
                                <span>Red</span>
                            }
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default ChildComponent