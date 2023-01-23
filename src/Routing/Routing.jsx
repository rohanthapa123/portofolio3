import { BrowserRouter, Routes ,Route} from 'react-router-dom'

import React from 'react'

import Home from '../Pages/Home'
import HomeLayout from '../Layout/HomeLayout'
import Contact from '../Pages/Contact'
import Project from '../Pages/Project'
import About from '../Pages/About'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='project' element={<Project/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing