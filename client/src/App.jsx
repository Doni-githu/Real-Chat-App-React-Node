import React from 'react'
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"
import Add from "./pages/add"
import Detail from "./pages/detail"
import { Routes, Route } from "react-router"
import "./App.css"
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Detail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </>
  )
}

export default App