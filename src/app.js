import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navBar/Navbar";
import Footer from "./components/footer/footer";
import StickyFooter from "./components/stickyFooter/stickyfooter";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import How from "./pages/How";
import "./app.css";

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
      <Footer />
      <StickyFooter />

    </div>
  );
};

export default App;
