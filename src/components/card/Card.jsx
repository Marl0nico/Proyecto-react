import { useEffect, useState } from 'react'
import './Card.css'
const Card = () => {
    const [user, setUser] = useState("")
    useEffect(() => {
        const obtenerDatos_user = async() => {
            const request=await fetch('https://dog.ceo/api/breeds/image/random')
            const data=await request.json()
            console.log(data.message)
            setUser(data.message)
        }
        obtenerDatos_user()
    }, [])
    
    return (
        //lógica del componente
        //hooks
        //funciones
        //return
        <div className="card_main">
            {<img src={user}></img>}
        </div>
    )
}
export default Card