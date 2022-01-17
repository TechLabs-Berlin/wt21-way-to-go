import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logowtg";
import { navItems } from "./NavItems.js";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="this is the logo" />
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
