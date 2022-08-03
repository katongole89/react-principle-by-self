import React, {useReducer, useCallback} from 'react'
import TheInput from './theInput'
import ConditionalDisplay from './ConditionalDislay'

const nameList = [
    {
        id:1,
        name:'katongole'
    },
    {
        id:2,
        name:'richard'
    },
    {
        id:3,
        name:'abaliwano'
    },
    {
        id:4,
        name:'francis'
    },

]

const defaultState ={
    searchInput:''
}


export const reducer = (state, action) => {
  if (action.type === 'UPDATE_SEARCH') {
    return { ...state, searchInput: action.payload };
  }

  throw new Error('no matching action type');
};





const SearchableDropdown = () =>{
    const [state, dispatch] = useReducer(reducer, defaultState)
    const handleChange = useCallback((e)=>{
        dispatch({type:'UPDATE_SEARCH', payload: e.target.value})
    })

    console.log(state)



    return(
        <div style={{display:'flex', width:'100%', minHeight:'90vh', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <TheInput onChange={handleChange}/>
            <ConditionalDisplay nameList={nameList}/>
        </div>
        
    )
}

export default SearchableDropdown