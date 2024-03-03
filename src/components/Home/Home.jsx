import "./Home.css"
import { Header } from "../Header/Header"
import { Filter } from "../Filter/Filter"
import { FishContainer } from "../FishContainer/FishContainer"
import PropTypes from "prop-types";
import { fishShape } from "../../propTypes/fishShape";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home({ addFavorite, fish}) {
  const [filteredFish, setFilteredFish] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setFilteredFish(fish)
  }, [fish])

  function handleSearch(query) {
    const search = fish.filter(f => {
      const englishName = f.name.toLowerCase();
      const japaneseName = f.japanese_name.toLowerCase();
      const searchTerm = query.toLowerCase();
  
      return englishName.includes(searchTerm) || japaneseName.includes(searchTerm);
    });
    setFilteredFish(search);
    navigate('/main')
  }
  

  return (
    <>
      <Header handleSearch={handleSearch} />
      <main>
        <Filter />
        <FishContainer addFavorite={addFavorite} filteredFish={filteredFish}/>
      </main>
    </>

  )
}

Home.propTypes = {
  fish: PropTypes.arrayOf(fishShape).isRequired,
  addFavorite: PropTypes.func.isRequired
}

