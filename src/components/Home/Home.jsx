import "./Home.css"
import { useState, useEffect } from "react"
import { MobileFilter } from "../MobileFilter/MobileFilter";
import { Filter } from "../Filter/Filter";
import { FishContainer } from "../FishContainer/FishContainer"
import PropTypes from "prop-types";
import { fishShape } from "../../propTypes/fishShape";
import { MobileSearchFilter } from "../MobileSearchFilter/MobileSearchFilter";

export function Home({ addFavorite, handleFilter, filteredFish, isMenuOpen, handleSearch}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  function handleFilterClick() {
    setIsFilterOpen(!isFilterOpen);
  }

  const [filter, setFilter] = useState([]);

  useEffect(() => {
    handleFilter(filter);
  }, [filter]);


  return (
    <>
      {isFilterOpen ? (
        <MobileFilter filter={filter} setFilter={setFilter} handleFilterClick={handleFilterClick} />
      ) : (
        !isMenuOpen &&
        <main>
          <MobileSearchFilter handleFilter={handleFilter} filteredFish={filteredFish} handleSearch={handleSearch} handleFilterClick={handleFilterClick} />
          <Filter filter={filter} setFilter={setFilter} />
          <FishContainer addFavorite={addFavorite} filteredFish={filteredFish}/>
        </main>
      )}
    </>
  )
}

Home.propTypes = {
  fish: PropTypes.arrayOf(fishShape).isRequired,
  addFavorite: PropTypes.func.isRequired
}

