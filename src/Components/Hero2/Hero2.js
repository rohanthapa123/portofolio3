import './Hero2.css'
import React from 'react'
import codess from '../../Assets/codess.jpg'
const Hero2 = ({heading,text}) => {
  return (
    <div className='hero-img'>
        <img className='mern-img' src={codess} alt='mern-img'/>
        <div className='heading'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Hero2