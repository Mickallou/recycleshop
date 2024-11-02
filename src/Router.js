import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Men from './Components/Category/Men'
import Women from './Components/Category/Women'
import Kids from './Components/Category/Kids'
import Accessories from './Components/Category/Accessories'
import CategoryHome from './Components/Category/CategoryHome'
import Eletronics from './Components/Category/Eletronics'
import Login from './Components/Auth/Login'
import Signup from './Components/Auth/Signup'
import MyCard from './Components/Card/MyCard'
import NewProduct from './Components/Card/NewCard'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/men' element={<Men />} />
            <Route path='/women' element={<Women />} />
            <Route path='/kids' element={<Kids />} />
            <Route path='/accessories' element={<Accessories />} />
            <Route path='/categoryHome' element={<CategoryHome />} />
            <Route path='/eletronics' element={<Eletronics />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/myCard' element={<MyCard />} />
            <Route path='/newCard' element={<NewProduct />} />
        </Routes>
    )
}

export default Router
