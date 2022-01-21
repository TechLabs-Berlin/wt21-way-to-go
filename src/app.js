import React from "react";
// import CurrentLocation from "./components/currentLocation/currentLocation";
// import Map from "./components/map/map";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import How from "./components/pages/How";
import "./app.css";
// import HowItWorks from "./components/howitworks/HowItWorks";

const App = function () {

  return (
    <div>
      <BrowserRouter>
        <Navbar expand="md" />
        <Routes>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/how" component={How}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Routes>
      </BrowserRouter>
      {/* <HowItWorks expand="md" /> */}
      {/* {isLoaded && <Map onMapLoad={onMapLoad}></Map>} */}
    </div >
  );
};

export default App