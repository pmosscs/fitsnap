import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import AuthContext from "../store/AuthContext";

function Header() {
  const authCtx = useContext(AuthContext);
  //${!authCtx.token ? "hidden" : ""}

  return (
    <div className={`header-wrapper `}>
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
