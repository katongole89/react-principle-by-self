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
    searchInput:'',
    nameList: []
}


export const reducer = (state, action) => {
  if (action.type === 'UPDATE_SEARCH') {
    return { ...state, searchInput: action.payload };
  }
  if (action.type === 'UPDATE_NAME_LIST') {
    return { ...state, nameList: action.payload };
  }

  throw new Error('no matching action type');
};


const SearchableDropdown = () =>{
    const [state, dispatch] = useReducer(reducer, defaultState)
    const filterData = useCallback((searchValue)=>{
        const newData = nameList.filter((option)=>{
            return option.name.includes(searchValue)
        })
        return newData
    }, [])

    const handleChange = useCallback((e)=>{
        // dispatch({type:'UPDATE_SEARCH', payload: e.target.value})
        const newData = filterData(e.target.value)
        console.log(newData)
        dispatch({type:'UPDATE_NAME_LIST', payload: newData})
        
    }, [])

    React.useEffect(()=>{
        dispatch({type:'UPDATE_NAME_LIST', payload: nameList})
    }, [])

    
    return(
        <div style={{display:'flex', width:'100%', minHeight:'90vh', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <TheInput onChange={handleChange}/>
            <ConditionalDisplay nameList={state.nameList}/>
        </div>
        
    )
}

export default SearchableDropdown