import './AboutContent.css'
import {NavLink} from 'react-router-dom'
import React from 'react'
import mern from '../../Assets/mern.png'
import chat from '../../Assets/chat.png'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>Im a MERN developer. I create responsive and secure websites for my clients.</p>
            <NavLink to={"/contact"}>
                <button className='btn'>Contact</button>
            </NavLink>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={chat} className="img" alt='about-pic'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={mern} className="img" alt='about-pic'/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AboutContent