import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import TestComponent from "../PropTypes/TestComponent"

const SimpleRouters = () => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={TestComponent} />
                    <Route path='/testing' component={TestComponent}/>
                </Switch>
            </Router>
        </div>
    )
}

export default SimpleRouters