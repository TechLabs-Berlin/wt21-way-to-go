import React from "react";
import CurrentLocation from "./components/currentLocation/currentLocation";
import Map from "./components/map/map";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navBar/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import How from "./pages/How";
import "./app.css";
import HowItWorks from "./components/howitworks/HowItWorks";

const App = function () {

  return (
    <div>
      <BrowserRouter>
        <Navbar expand="md" />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/how" element={<How />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>

      <HowItWorks expand="md" />
    </div >
  );
};

export default App