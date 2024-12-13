import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './saludo.jsx'
import Cake from './cake.jsx'
import Navbar from './Navbar.jsx'
//import Footer from './Footer.jsx'
import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import Footer from './components/footer/Footer.jsx'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        <p>Hola</p>
        <br />
        <hr></hr>
        <Saludo></Saludo> 
        <hr />
        <Cake color="rosa" sabor="vainilla"></Cake>
        <hr />
        <Navbar></Navbar>
        <hr />
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
