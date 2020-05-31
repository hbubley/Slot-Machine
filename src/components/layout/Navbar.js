import React from "react";
import {Link} from 'react-router-dom'

const Navbar = ({icon, title}) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <Link to="/">
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/instructions">Instructions</Link>
        </li>
        <li>
          <Link to="/slots">Play</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
