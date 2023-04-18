import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';



// images
import logo from "../Assets/im/logo.png";

function RootLayout() {
  return (
    <div className="lay">
          <header>
          <nav>
            <div className="logo">
            <img src={logo} alt=" logo" />
            </div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="portfolio">Portfolio</NavLink>
            <NavLink to="hire">Hire</NavLink>
          </nav>
       </header>
       <main>
        <Outlet/>
       </main>
    </div>
  )
}

export default RootLayout