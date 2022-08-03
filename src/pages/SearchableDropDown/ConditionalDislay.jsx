import React from 'react'
import SelectOption from './SelectOption'


const ConditionalDisplay = ({nameList}) =>{
    return(
        <div >
            {nameList.map((option)=>
                <SelectOption key={option.id} option={option}/>
            )}
        </div>
    )
}

export default ConditionalDisplay