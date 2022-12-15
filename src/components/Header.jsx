import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>fitsnap header</h1>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/auth">
          <button>Auth</button>
        </Link>
        <Link to="/improve">
          <button>Home</button>
        </Link>
        <Link to="/submit">
          <button>submit</button>
        </Link>

        {/* <ul>
          <li>Home</li>
          <li>Auth</li>
          <li>Profile</li>
          <li>Submit</li>
          <li>Improve</li>
        </ul> */}
      </nav>
    </header>
  );
}

export default Header;
