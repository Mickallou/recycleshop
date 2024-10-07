import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Men from './Components/Category/Men'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/men' element={<Men />} />
        </Routes>
    )
}

export default Router
