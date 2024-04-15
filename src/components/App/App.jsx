import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getFish } from "../../apiCalls";
import { Home } from "../Home/Home";
import { FishDetails } from "../FishDetails/FishDetails";
import { Favorites } from "../Favorites/Favorites";
import { Hero } from "../Hero/Hero";
import { Error } from "../Error/Error";
import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import "./App.css";

function App() {
  const [fish, setFish] = useState([]);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    getFish()
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch. Status: ${res.status}`);
        }
        return res.json();
      })
      .then((fishData) => {
        setFish(fishData.fish);
      })
      .catch((err) => {
        console.log(err);
        setError(`Gone fishing... Please try again later.`);
        navigate("*");
      });
  }, []);

  useEffect(() => {
    const findFavorites = fish.filter((f) => f.isFavorite);
    setFavorites(findFavorites);
  }, [fish]);

  function addFavorite(id) {
    setFish((prevFish) =>
      prevFish.map((f) => {
        if (f.id === id) {
          return {
            ...f,
            isFavorite: !f.isFavorite,
          };
        }
        return f;
      })
    );
  }

  function handleSearch(query) {
    const search = fish.filter((f) => {
      const englishName = f.name.toLowerCase();
      const japaneseName = f.japanese_name.toLowerCase();
      const searchTerm = query.toLowerCase();

      return (
        englishName.includes(searchTerm) || japaneseName.includes(searchTerm)
      );
    });
    setFilteredFish(search);
    navigate("/main");
  }

  const [filteredFish, setFilteredFish] = useState([]);

  useEffect(() => {
    setFilteredFish(fish);
  }, [fish]);

  function handleFilter(filter) {
    const filteredFish = fish.filter(
      (f) =>
        filter.includes(f.taste_profile.taste.toLowerCase()) ||
        filter.includes(f.taste_profile.texture.toLowerCase())
    );
    if (!filter.length) {
      setFilteredFish(fish);
    } else {
      setFilteredFish(filteredFish);
    }
  }

  return (
    <>
      <Header toggleMenu={toggleMenu} handleSearch={handleSearch} />
      {isMenuOpen && <Menu toggleMenu={toggleMenu} />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/main"
          element={
            <Home
              handleSearch={handleSearch}
              addFavorite={addFavorite}
              fish={fish}
              handleFilter={handleFilter}
              filteredFish={filteredFish}
              isMenuOpen={isMenuOpen}
            />
          }
        />
        <Route
          path="/main/favorites"
          element={
            <Favorites
              addFavorite={addFavorite}
              favorites={favorites}
              isMenuOpen={isMenuOpen}
            />
          }
        />
        <Route
          path="/main/favorites/fish-details/:id"
          element={
            <FishDetails
              addFavorite={addFavorite}
              fish={fish}
              isMenuOpen={isMenuOpen}
            />
          }
        />
        <Route
          path="/main/fish-details/:id"
          element={
            <FishDetails
              addFavorite={addFavorite}
              fish={fish}
              isMenuOpen={isMenuOpen}
            />
          }
        />
        <Route path="*" element={<Error />} isMenuOpen={isMenuOpen} />
      </Routes>
    </>
  );
}

export default App;
