import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../commonent/Layout'
import About from '../commonent/About'
import Home from '../commonent/Home'
import Portifolio from '../commonent/Portifolio'
import Contact from '../commonent/Contact'


export default function Router() {
    return(
        <Routes>
                <Route element={<Layout />}>
                   <Route path='/' element={<Home />}  />
                   <Route path='/about'  element={<About />}  />
                   <Route path='/portofolio' element={<Portifolio />}  />
                   <Route path='/contact' element={<Contact />}  />
                
                </Route>
        </Routes>
    )
}