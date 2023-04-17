import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Hire from './Pages/Hire'
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index  element={<Home/>} />
      <Route path="about"  element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="Hire" element={<Hire />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
