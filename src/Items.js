import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import ItemsCard from "./ItemsCard.js"
import "./ItemsCard.css"

const Items = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetchItems()
    }, [])

    const fetchItems = async () => {
        const request = await fetch(`https://api.github.com/users`)
        const data = await request.json()

        setItems(data)
        console.log(data)
    }

    return (
        <div>
            <h1>Items</h1>    
            <div className="card-container">
                {items.map((item) => {
                    return <div key={item.node_id} className="card">
                        <Link to={`/items/${item.login}`}>
                            <ItemsCard login={item.login} avatar_url={item.avatar_url}/>
                        </Link></div>
                })}
            </div>
        </div>
        
    )
}

export default Items