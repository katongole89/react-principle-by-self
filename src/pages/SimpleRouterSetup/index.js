import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import TestComponent from "../PropTypes/TestComponent"

const SimpleRouters = () => {
    return(
        <div>
            <Router>
                <Route path='/' component={TestComponent} />
                <Route path='/testing' component={TestComponent}/>
            </Router>
        </div>
    )
}

export default SimpleRouters