import React, {useState, useEffect} from 'react'

const FormsComponent = () => {
    const [state, setState] = useState({
        username: '',
        password:''
    })

    const handleChangeFields = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('submitted data')
    }

    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', minHeight:'100vh'}}>
            <form onSubmit={handleSubmit}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div>
                        <span>Username</span>
                        <input name='username' onChange={handleChangeFields}/>
                    </div>
                    <div>
                        <span>password</span>
                        <input name='password' onChange={handleChangeFields}/>
                    </div>
                    <div>
                        <button type='submit'>Submit the data</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormsComponent