import './NavbarStyle.css'
import { NavLink} from 'react-router-dom'
import '../../index.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'
const NavBar = () => {
    const [burger, setBurger] = useState(false);
    const handleBurger = () =>{setBurger(!burger)}
    const [color, setColor] = useState(false)
    const changeColor = () =>{
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    window.addEventListener("scroll",changeColor)
  return (
  <>
    <div className={color ? "header header-bg" : "header"}>
        <div>
        <NavLink to={"/"}>
        <h1 className='porto'>Portfolio</h1>
        </NavLink>
        </div>
        <div>
        <ul className={burger ? 'nav-menu active ' : 'nav-menu'}>
            <li>
                <NavLink className='link' to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink className='link' to={"/project"}>Project</NavLink>
            </li>
            <li>
                <NavLink className='link' to={"/about"}>About</NavLink>
            </li>
            <li>
                <NavLink className='link' to={"/contact"}>Contact</NavLink>
            </li>
        </ul>
        <div className='hamburger' onClick={handleBurger}>
            {burger ? 
             (<FaTimes  size={20} style={{color:"white",cursor:"pointer"}}/>
            ) : (<FaBars  size={20} style={{color:"white",cursor:"pointer"}}/>
            )}
        </div>
        </div>
    </div>
  </>
  )
}

export default NavBar