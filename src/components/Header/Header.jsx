import "./Header.css"
import { Link } from "react-router-dom"
import { Search } from "../Search/Search"

export function Header() {
  return (
    <header>
      <div className="title-container">
        <img className="logo" src="/sushi.png" alt="nigiri png" />
        <Link to='/' >
          <h1>//dive</h1>
        </Link>
      </div>
      <Search />  
    </header>
  )
}