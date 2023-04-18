import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Hire from "./Pages/Hire";
import RootLayout from "./Layouts/RootLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="hire" element={<Hire />} />
    </Route>
  )
);

function App() {
  return (
    <div>
    
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
