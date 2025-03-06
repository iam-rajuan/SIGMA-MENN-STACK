import React from 'react'
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
        <nav>
            <div className="nav-left">
      <NavLink className={(e)=>{return e.isActive? "red": ""}} to="/"><li>Home</li></NavLink>
      <NavLink className={(e)=>{return e.isActive? "red": ""}} to="/about"><li>About</li></NavLink>
      <NavLink className={(e)=>{return e.isActive? "red": ""}} to="/user"><li>User</li></NavLink>
            </div>
            <div className="nav-right">
      <NavLink className={(e)=>{return e.isActive? "red": ""}} to="/login"><li>Login</li></NavLink>
            </div>


        </nav>
    </div>
  )
}

export default Nav
