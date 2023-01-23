import './HeroImage.css'

import React from 'react'
import Codess from '../../Assets/codess.jpg'
import { NavLink } from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img src={Codess} className='into-img' alt='background' />
        </div>
        <div className='content'>
            <p>HI, I'M A WEB-DEVELOPER</p>
            <h1>MERN Developer</h1>
            <div>
                <NavLink to={"/project"} className="btn">Projects</NavLink>
                <NavLink to={"/contact"} className="btn btn-light">Contact</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Heroimg