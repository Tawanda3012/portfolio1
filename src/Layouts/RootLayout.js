import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// images
import logo from "../Assets/im/logo.png";

// css
import "../Assets/Styles/root.css";

function RootLayout() {
  return (
    <div className="lay container">
      <header className="container">
        <nav>
          <NavLink to="/" className="logo">
            <img src={logo} className="img-fluid" alt=" logo" />
          </NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="portfolio">Portfolio</NavLink>
          <NavLink to="hire">Hire</NavLink>
        </nav>
      </header>
      <main  >
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
