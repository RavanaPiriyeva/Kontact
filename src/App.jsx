import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Layout/Navbar/Navbar'
import Home from './Pages/Home'
import Footer from './Layout/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Home/>
     <Footer/>
   </>
  )
}

export default App
