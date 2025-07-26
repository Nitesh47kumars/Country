import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {
    const [mob,setMob] = useState(false);

    const onLinkClicked = () =>{
      setMob(false);
    }
  return (
    <>
      <div className='navbar-container'>
        <div className='navbar-header'>
            <h1>Web App</h1>
        </div>
        <nav className={mob? "mob-menu" : "web-menu"}>
            <ul>
                <li>
                    <NavLink to="/" onClick={onLinkClicked}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={onLinkClicked}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/country" onClick={onLinkClicked}>Country</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={onLinkClicked}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/posts" onClick={onLinkClicked}>API-Pratice</NavLink>
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
