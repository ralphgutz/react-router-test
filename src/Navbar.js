import React from "react"
import {NavLink} from "react-router-dom"
import "./App.css"

const Navbar = () => {
    return (
        <nav>
            <h3>React Router</h3>
            <ul className="nav-links">
                <li><NavLink to="/" exact activeClassName="active" >Home</NavLink></li>
                <li><NavLink to="/items" activeClassName="active" >Items</NavLink></li>
                <li><NavLink to="/about" activeClassName="active" >About</NavLink></li>
                <li><NavLink to="/valid" activeClassName="active" >For Valid Users</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar