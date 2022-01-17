import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "..images/wtg.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="this is the logo" />
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
