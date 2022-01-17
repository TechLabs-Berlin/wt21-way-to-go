import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/wtg-logo-blue.png";
import { navItems } from "./NavItems.js";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} className="itemLogo" alt="this is the logo" />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            return (
              <li key={item.id} className={item.nName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
