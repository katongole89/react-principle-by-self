import React from 'react'

const FormsComponent = () => {
    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', minHeight:'100vh'}}>
            <form>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div>
                        <span>Username</span>
                        <input name='username'/>
                    </div>
                    <div>
                        <span>password</span>
                        <input name='password'/>
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