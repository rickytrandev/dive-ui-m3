import "./Menu.css";
import React from "react";
import { Link } from "react-router-dom";

export function Menu({ toggleMenu }) {
  return (
    <div>
      <ul className="menu">
        <li>
          <Link to="/main" onClick={toggleMenu} > Home </Link>
        </li>
        <li>
          <Link to="/main/favorites" onClick={toggleMenu} > Favorites </Link>
        </li>
      </ul>
    </div>
  );
}
