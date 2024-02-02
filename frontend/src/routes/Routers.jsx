import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
// import Service from '../pages/Services'
import Contact from '../pages/Contact'
import Cart from '../components/Cart'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Invoice from '../pages/Invoice'

const Routers = () => {
  return (
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/invoice" element={<Invoice/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
  )
}

export default Routers