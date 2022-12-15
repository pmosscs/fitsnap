import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-wrapper">
      <header>
        <Link to="/">
          <h1>FitSnap</h1>
        </Link>
        <nav>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
          <Link to="/improve">
            <button>Improve</button>
          </Link>

          <button>Logout</button>
        </nav>
      </header>
      <div className="header-line"></div>
    </div>
  );
}

export default Header;
