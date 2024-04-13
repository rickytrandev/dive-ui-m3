import "./Header.css";
import { Link } from "react-router-dom";
import { Search } from "../Search/Search";
import PropTypes from "prop-types";

export function Header({ handleSearch, toggleMenu }) {

  return (
    <header>
      <div className="title-container">
        <img className="logo" src="/sushi.png" alt="nigiri png" />
        <Link to="/">
          <h1>//dive</h1>
        </Link>
      </div>
      <Search handleSearch={handleSearch} />
      <nav className="hamburger-btn">
        <div className="menu-icon" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="white"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  handleSearch: PropTypes.func,
};
