import React from "react";
import { Link } from "react-router-dom";
// import x from "./x-symbol.svg";

const Nav = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <a href="#">
              <h2>
                Group<span>37</span>
              </h2>
            </a>
          </div>

          {/* <svg viewBox="0 0 100 80" width="20" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg> */}

          <ul className="nav-links">
            {/* <img src={x} /> */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Product">Product</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
