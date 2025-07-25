import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {
    const [mob,setMob] = useState(false);
  return (
    <>
      <div className='navbar-container'>
        <div className='navbar-header'>
            <h1>Web App</h1>
        </div>
        <nav className={mob? "mob-menu" : "web-menu"}>
            <ul>
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" >About</NavLink>
                </li>
                <li>
                    <NavLink to="/country" >Country</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" >Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/posts" >API-Pratice</NavLink>
                </li>
                <li>
                    <a href="https://github.com/Nitesh47kumars" >GitHub</a>
                </li>
            </ul>
        </nav>
        <div className='mob-btn'>
          <button onClick={()=>setMob(!mob)}><CiMenuFries /></button>
        </div>
      </div>
    </>
  )
}

export default Navbar
