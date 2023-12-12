import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Add from './add'
import Mains from './mains'

function Routee() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Mains/>} />
        <Route path="/add" element={<Add />} />

    </Routes>
    
    </BrowserRouter>
  )
}

export default Routee