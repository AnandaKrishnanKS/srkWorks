import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <div>
        <Header/>
        <Login/>
        <hr />
        <hr />
        <hr />
        <hr />
        <Home/>
      </div>
{/* 
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="Home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
      
    </>
  )
}

export default App
