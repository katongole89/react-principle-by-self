// Create a functional component to render a list of tasks (along with their subtasks) from an object.
// The subtasks should be organized into two columns, completed and to be completed, based on the boolean value associated with each task.
// The object will have the following format: any number of keys where each key is the text of the task,
// an array of any number of objects associated with each key, and finally, an object with one field (the subtask text) 
// and one associated boolean value at every index of the array.
// Here is an example of one such object:

// const INITIAL_LIST = {
//     "Organize closet": [
//       { "Donate old clothes and shoes": false },
//       { "Buy new shelf": false },
//       { "Put in shelf by color": false },
//     ],
//     "Finish homework": [
//       { "Finish math homework": false },
//       { "Finish science homework": false },
//       { "Finish Reactjs homework": false },
//     ],
//     "Achieve nirvana": [
//       { "Meditate a little": false },
//       { "Gain some wisdom": false },
//     ],
//   };


// When the user clicks on an uncompleted subtask, 
// it should move from the uncompleted list to the completed list.
// Likewise, when the user clicks on a completed subtask,
// it should move from the completed list to the uncompleted list



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