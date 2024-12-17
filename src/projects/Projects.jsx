import { useState } from "react"
import './Projects.css'
import Card from "../components/card/Card"
const Projects = () => {
    const user1="Marlon Nicolalde"
    const [user, setUser] = useState("Marlon")
    const [contador, setContador] = useState(0) //se puede almacenar cualquier tipo de valor
    const [login, setLogin] = useState(true)
    return(
        <>
        <div className="main_projects">Projects - {user}</div>
        <p>El valor es {contador}</p>
        <button onClick={()=>{setContador(contador+1)}}>Click</button>
        {login? <div>Proyectos destacados</div>: <div>Proyectos premium</div>}
        {login && <Card></Card>} 
        
        </>
    )
}
export default Projects