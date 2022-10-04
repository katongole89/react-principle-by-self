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