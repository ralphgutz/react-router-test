import React, {useEffect, useState} from "react"


const Item = ({match, location, history}) => {
    const [user, setUser] = useState([])

    useEffect(() => {
        console.log(match)
        console.log(location)
        console.log(history)
        fetchUser()
    }, [])

    const fetchUser = async () => {
        const request = await fetch(`https://api.github.com/users/${match.params.id}`)
        const data = await request.json()

        console.log(data)
        setUser(data)
    }

    return (
        <div>
            <img src={user.avatar_url} alt=""/>
            <h3>{user.login}</h3>
            
        </div>
    )
}

export default Item