import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="lay">
      <header>
        <nav>
          <img src="" alt="" className="logo" />

          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="portfolio">Portfolio</NavLink>
          <NavLink to="hire">Hire</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
