import "./Search.css"
import { useState } from "react";
import { HeartBtn } from "../HeartBtn/HeartBtn";
import { HomeBtn } from "../HomeBtn/HomeBtn";
import { Link, useNavigate } from "react-router-dom";

export function Search({ handleSearch }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate()

  function handleInputChange(event) {
    setQuery(event.target.value)
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSearch(query)
    }
  }

  return (
    <div className="search-bar" >
      <input 
        type="text" 
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        // onClick={() => navigate('/main')}
      />
        <button onClick={() => handleSearch(query)} className="search-btn" >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path fill="#D46161" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </button>
      <HeartBtn />
      <HomeBtn />
    </div>
  )
}