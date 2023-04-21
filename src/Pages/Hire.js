import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'



function Hire() {
  return (
    <div className='container' >
      Hire
     <nav>
      <NavLink to='contact'>Contact Me</NavLink>
     </nav>
      <Outlet/>
    </div>
  )
}

export default Hire