import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Homepage'
import News from './News'
import TodoList from './TodoList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Homepage/>
    </>
  )
}

export default App
