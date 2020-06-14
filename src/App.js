import React from "react"
import {BrowserRouter as Router, Route, Switch, Redirect, Prompt} from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Items from "./Items"
import About from "./About"
import Item from "./Item"

const DefaultRoute = () => {
    return <h1>ERROR 404</h1>
}

const Valid = () => {
    const validity = false
    
    if(validity) return <h1>Hello valid user!</h1>
    return <Redirect to="/error" />
}

const App = () => {
    const formNotFilled = true
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Redirect from="/home" to="/" />
                    <Route path="/items" exact component={Items} />
                    {/* <Prompt when={formNotFilled} message="Are u sure u wanna leave?" /> */}
                    <Route path="/about" component={About} />
                    <Route path="/items/:id" component={Item} />
                    <Route path="/valid" component={Valid} />
                    <Route component={DefaultRoute} />
                    
                </Switch>
                
            </div>
            
        </Router>
    )
}

export default App