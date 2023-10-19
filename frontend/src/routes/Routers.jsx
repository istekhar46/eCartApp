import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'

const Routers = () => {
  return (
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default Routers