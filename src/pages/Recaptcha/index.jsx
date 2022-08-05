import React, {useCallback, useState} from 'react'
import Reaptcha from 'reaptcha';


// this recapture uses version 2 of recapture -- get keys for v2
// https://www.google.com/recaptcha/admin/site/558638280/setup
// http://www.google.com/recaptcha/admin

const TestRecaptcha = () => {
    const [state, setState] = useState({
        updated:false
    })
    const onVerify = useCallback((recaptchaResponse)=>{
        setState({...state, updated:true})
    });

    return(
        <div style={{display:'flex', width:'100%', minHeight:'90vh', justifyContent:'center', alignItems:'center', flexDirection:'column' }}>
            <span>Tesing recapture</span>
            {!state.updated?
                <Reaptcha sitekey="6LfIJEwhAAAAACQ1SpugerQGqE3sXmn4KtdGyClw" onVerify={onVerify} />
            :
                <span style={{fontWeight:'bold', color:'green'}}>User verified</span>
            }
            
        </div>
    )
}

export default TestRecaptcha