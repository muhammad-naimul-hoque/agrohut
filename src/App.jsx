import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav/NavBar'
import NavBar from './Nav/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
    </>
  )
}

export default App
