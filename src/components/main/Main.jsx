import { useState } from 'react'
import './Main.css'
const Main = () => {
    //const saludo="Marlon"
    const [saludo, setSaludo] = useState("Marlon") //lineas 4 y 5 son lo mismo: la 5 usa hooks en react
    return (
        <div className="main">Bienvenidos a mi page - {saludo}</div>
    )
}
export default Main