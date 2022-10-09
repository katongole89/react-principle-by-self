import React, {useState, useEffect} from 'react'

const ItemComp = ({item, strikeItem}) =>{
    if(item.click){
        return(
            <li onClick={()=>strikeItem(item.id)}><s>{item.name}</s></li>
        )
    }else{
        return(
            <li onClick={()=>strikeItem(item.id)}>{item.name}</li>
        )
    }
    
}

const SimpleToDoList = () =>{
    const [state, setState] = useState({
        items: [],
        input:''
    })

    const handleSubmit =(e) =>{
        e.preventDefault()
        setState({...state, input:'' ,items:[{id:new Date().getUTCMilliseconds(), name:state.input, click:false}, ...state.items]})
    }

    const handleChange = (e) => {
        setState({...state, input:e.target.value})
    }

    const strikeItem = (id) =>{

        const newList = state.items.map((item)=>{
            if(item.id === id){
                return(
                    {...item, click:!item.click}
                )
            }else{
                return item
            }
        })
        setState({...state, items:newList})
    }

    const remainingTasks = React.useMemo(()=>{
        console.log('items change')
        const undone = state.items.filter((item)=>{
            return !item.click
        })

        return undone
    }, [state.items])


    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={state.input}/>
                <button type='submit'>Submit</button>
            </form>

            
        </div>
        <div style={{marginTop:'10px'}}>
            <span>{remainingTasks.length} remaining out of {state.items.length} tasks</span>
        </div>

        <div style={{marginTop:'10px'}}>
            <ul>
                {state.items.map((item)=>{
                    return(
                        <ItemComp key={item.id} item={item} strikeItem={strikeItem}/>
                    )
                })}

            </ul>
        </div>
        </>
    )
}

export default SimpleToDoList