import "./Header.css"
import { Search } from "../Search/Search"

export function Header() {
  return (
    <header>
      <div className="title-container">
        <img className="logo" src="src/assets/sushi.png" alt="nigiri png" />
        <h1>//dive</h1>
      </div>
      <Search />  
    </header>
  )
}