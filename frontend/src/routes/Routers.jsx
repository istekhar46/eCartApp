import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Service from '../components/Service'
import Contact from '../components/Contact'
import Cart from '../components/Cart'

const Routers = () => {
  return (
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
  )
}

export default Routers