// Write a functional component to render a list of items along with their prices.
// Above the list, there should be two input fields that allow the user to enter a string and number 
// and append a row to the list on submit. To the right of each row, there should be a button that allows the user 
// to remove that row from the list. The complete component with three items in the list is shown below.

// Ensure that both fields are populated before the user can submit their entry.
// Moreover, do not allow number values less than zero or more precise than two digits after the decimal.
// In the value column, append a dollar sign before each number.


import React, {useState} from 'react'

const Challenge16 = () =>{
    const [state, setState] = useState({
        price:'',
        food:'',
        foodList:[]


    })

    const handleChange = (e) =>{
        let updateState = true
        if(e.target.name == 'price'){
            //check if ts a number
            
            if( e.target.value.split('.').length > 2 ){
                // console.log('chceking the ..')
                updateState = false
            }

            if(isNaN(parseFloat(e.target.value)) && e.target.value !== ''){
                // console.log('value is not a number')
                updateState = false
            }
            //chcek if the it only has two decimal points
            let splitArr = e.target.value.split('.')
            if(splitArr.length>1){
                if(splitArr[1].length >2){
                    updateState = false
                    // console.log('checking the double digits')
                }
            }
            
        }

        if(updateState){
            setState({...state, [e.target.name]: e.target.value})
        }
    }

    const handleSubmit = () =>{
        if(state.price && state.food){
            setState({...state, food:'', price:'',
                foodList: [{
                    id:new Date().getUTCMilliseconds(),
                    price:state.price,
                    food:state.food
                }, ...state.foodList]
            })
        }

    }

    const RemoveFood = (id) => {
        const newFoodList = state.foodList.filter((food)=>{
            return food.id !== id
        })

        setState({...state, foodList:newFoodList})

    }

    return(
        <>
        <div style={{display:'flex', width:'100%'}}>
            <input name={'food'} onChange={handleChange} value={state.food} />
            <input name={'price'} onChange={handleChange} value={state.price} />
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
        <div style={{display:'flex', width:'100%', marginTop:'10px', flexDirection:'column'}}>
            {state.foodList.map((food)=>{
                return(
                    <div key={food.id} style={{display:'flex'}}>
                        <div style={{margin:'5px'}}>
                            <span>{food.food}</span>
                        </div>
                        <div style={{margin:'5px'}}>
                            <span>${food.price}</span>
                        </div>

                        <div style={{margin:'5px'}}>
                            <button onClick={()=>RemoveFood(food.id)}>Remove</button>
                        </div>
                    </div>
                )
            })}


        </div>
        </>

    )
}

export default Challenge16