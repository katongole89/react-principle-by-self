import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import TestComponent from "../PropTypes/TestComponent"

const SimpleRouters = () => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={TestComponent} />
                    <Route path='/testing' component={TestComponent}/>
                    {/* //error or no page found */}
                    <Route path='*' component={TestComponent}/>
                </Switch>
            </Router>
        </div>
    )
}

export default SimpleRouters

{/* <Link to={}></Link> */}