import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        {/* <Login/> */}
        <Home/>
      </div>
    </>
  )
}

export default App
