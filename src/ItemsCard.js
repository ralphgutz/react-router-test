import React from "react"
import "./ItemsCard.css"

const ItemsCard = (props) => {
    return (
        <div>
            <img src={props.avatar_url} alt="" />
            <h3>{props.login}</h3>
        </div>
        
    )
}

export default ItemsCard