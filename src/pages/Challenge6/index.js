import React, {useEffect, useState} from 'react'

const SubTasks = ({subTasks}) => {
    const [state, setState] = useState({
        complete:[],
        notComplete:[]
    })
    useEffect(()=>{
        //determine the complete
        const theComplete = subTasks.filter((tsk)=> {
            let arrTskBool = Object.entries(tsk)[0][1]
            if(arrTskBool){
                return tsk
            }
        })

        const theNotComplete = subTasks.filter((tsk)=> {
            let arrTskBool = Object.entries(tsk)[0][1]
            if(!arrTskBool){
                return tsk
            }
        })

        setState({...state, complete:theComplete, notComplete:theNotComplete})

    }, [subTasks])


    return(
        <>
            <div style={{flex:1, marginRight:'10px', backgroundColor:'gray'}}>
                <div>
                    <span>completed</span>
                </div>

                <ul>
                    {state.complete.map((tsk)=>{
                        return(
                            <li>{Object.entries(tsk)[0][0]}</li>
                        )
                    })}
                </ul>

            </div>
            <div style={{flex:1, backgroundColor:'gray'}}>
                <div>
                    <span>Not yet completed</span>
                </div>

                <ul>
                    {state.notComplete.map((tsk)=>{
                        return(
                            <li>{Object.entries(tsk)[0][0]}</li>
                        )
                    })}

                </ul>
                
                

            </div>
        </>
    )

}

const MainTask = ({mainTask, subTasks}) =>{
    console.log(mainTask)
    return(
        <>
            <div>
                <h3>{mainTask}</h3>
            </div>
            <div style={{display:'flex', width:'100%'}}>
                <SubTasks subTasks={subTasks}/>
            </div>
        </>
    )
}



const Challenge6 = () =>{
    const INITIAL_LIST = {
        "Organize closet": [
          { "Donate old clothes and shoes": false },
          { "Buy new shelf": true },
          { "Put in shelf by color": true },
        ],
        "Finish homework": [
          { "Finish math homework": true },
          { "Finish science homework": false },
          { "Finish Reactjs homework": false },
        ],
        "Achieve nirvana": [
          { "Meditate a little": false },
          { "Gain some wisdom": false },
        ],
    };

    return(
        <div>
            {Object.entries(INITIAL_LIST).map(([mainTask, subTasks])=>{
                return(
                    <MainTask mainTask={mainTask} subTasks={subTasks} />
                )
                
            })}
            
        </div>
    )
}

export default Challenge6