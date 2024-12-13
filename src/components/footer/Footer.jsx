import { useState } from 'react'
import './Footer.css'
const Footer = ()=> {
    const [year, setYear] = useState(2025)
    return (
        <div className="footer_main">Derechos reservados - Copyright - {year}</div> 
    )
}
export default Footer