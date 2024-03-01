import "./Home.css"
import { Header } from "../Header/Header"
import { Filter } from "../Filter/Filter"
import { FishContainer } from "../FishContainer/FishContainer"
import PropTypes from "prop-types";
import { fishShape } from "../../propTypes/fishShape";

export function Home({ addFavorite, fish}) {

  return (
    <>
      <Header />
      <main>
        <Filter />
        <FishContainer addFavorite={addFavorite} fish={fish}/>
      </main>
    </>

  )
}

Home.propTypes = {
  fish: PropTypes.arrayOf(fishShape).isRequired,
  addFavorite: PropTypes.func.isRequired
}

