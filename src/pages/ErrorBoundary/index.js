import React from 'react'

export default class ErrorBoundadry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return{ hasError:true }
    }

    componentDidCatch(error, info){
        console.log(error, info)
    }

    render(){
        if(this.state.hasError){
            return(
                <div style={{
                    width: "600px",
                    backgroundColor:'yellow',
                    margin:'auto',
                    border:'black 1px solid'
                }}>
                    Fall back UI

                </div>
            )

        }
        return this.props.children
    }
}