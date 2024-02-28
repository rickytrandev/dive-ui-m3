import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getFish } from '../../apiCalls';
import { Home } from '../Home/Home';
import { FishDetails } from '../FishDetails/FishDetails';
import { Favorites } from '../Favorites/Favorites';
import './App.css';

function App() {
  const [fish, setFish] = useState([]);
  const [error, setError] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFish()
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch. Status: ${res.status}`);
        }
        return res.json();
      })
      .then(fishData => {
        setFish(fishData.fish);
      })
      .catch(err => {
        console.log(err);
        setError(`Gone fishing... Please try again later.`);
      });
  }, []);

  useEffect(() => {
    const findFavorites = fish.filter(f => f.isFavorite);
    setFavorites(findFavorites);
  }, [fish]);

  function addFavorite(id) {
    setFish(prevFish => prevFish.map(f => {
      if (f.id === id) {
        return {
          ...f,
          isFavorite: !f.isFavorite
        };
      }
      return f;
    }));
  }

  return (
    <>
      {!fish.length && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Routes>
        <Route path='/main' element={<Home addFavorite={addFavorite} fish={fish} />} />
        <Route path='/favorites' element={<Favorites addFavorite={addFavorite} favorites={favorites} />} />
        <Route path='/main/fish-details/:id' element={<FishDetails addFavorite={addFavorite} fish={fish} />} />
      </Routes>
    </>
  );
}

export default App;
