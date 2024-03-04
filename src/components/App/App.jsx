import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getFish } from '../../apiCalls';
import { Home } from '../Home/Home';
import { FishDetails } from '../FishDetails/FishDetails';
import { Favorites } from '../Favorites/Favorites';
import { Hero } from '../Hero/Hero';
import { Error } from '../Error/Error';
import './App.css';

function App() {
  const [fish, setFish] = useState([]);
  const [error, setError] = useState('');
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
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
        navigate('*'); 
      });
  }, [navigate]);

  useEffect(() => {
    const findFavorites = fish.filter(f => f.isFavorite);
    setFavorites(findFavorites);
  }, [fish]);

  function addFavorite(id) {
    setFish(prevFish =>
      prevFish.map(f => {
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

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/main" element={<Home addFavorite={addFavorite} fish={fish} />} />
        <Route path="/main/favorites" element={<Favorites addFavorite={addFavorite} favorites={favorites} />} />
        <Route path="/main/favorites/fish-details/:id" element={<FishDetails addFavorite={addFavorite} fish={fish} />} />
        <Route path="/main/fish-details/:id" element={<FishDetails addFavorite={addFavorite} fish={fish} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
