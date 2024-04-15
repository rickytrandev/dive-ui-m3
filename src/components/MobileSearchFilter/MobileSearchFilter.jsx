import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MobileSearchFilter.css";

export function MobileSearchFilter({ handleSearch, handleFilterClick }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSearch(query);
    }
  }

  return (
    <div className="mobile-search-container">
      <button className="filter-button" onClick={handleFilterClick} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="#d46161"
          class="bi bi-filter-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M7 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
        </svg>
      </button>
      <div className="search-container">
        <div className="search-bar">
          <input
            className=""
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            onClick={() => navigate("/main")}
          />
          <button onClick={() => handleSearch(query)} className="search-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                fill="#D46161"
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
