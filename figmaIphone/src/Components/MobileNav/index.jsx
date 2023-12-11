import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import './index.scss'

function MobileNav({isNavOpen,setIsNavOpen}) {
  return (
    <div className={`mobile-nav ${isNavOpen ? 'nav-active' : ''}`}>
        <i onClick={()=>setIsNavOpen(!isNavOpen)} className='fa-solid fa-xmark'></i>
        
        <ul>
          <li>
            <NavLink className={"navlink"}  to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"navlink"}
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"navlink"}
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"navlink"}
              to={"/sign-up"}
            >
              Sign-up
            </NavLink>
          </li>
        </ul>
    </div>
  )
}

export default MobileNav