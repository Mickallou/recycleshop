import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/cards/:id' element={<Home />} />
        </Routes>
    )
}

export default Router
