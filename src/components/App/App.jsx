import { useState, useEffect } from 'react'
import './App.css'
import { getFish } from '../../apiCalls'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Home/Home'
import { FishDetails } from '../FishDetails/FishDetails'
import { Header } from '../Header/Header'

function App() {
  const [fish, setFish] = useState([])
  const [error, setError] = useState('')
  const [favorites, setFavorites] = useState([])

  function addFavorite(id) {
    const findFish = fish.find(f => f.id === id)
    const fishInFavs = favorites.find(fish => fish.id === id)

    if (!fishInFavs) {
      setFish(prevFish => (
        prevFish.map(fish => {
          if (fish.id === id) {
            return {
              ...fish,
              isFavorite : true
            }
          }
          return fish
        })
      ))
      setFavorites([...favorites, findFish])
    } else {
      const filterOut = favorites.filter(fish => fish.id !== id)
      setFish(prevFish => (
        prevFish.map(fish => {
          if (fish.id === id) {
            return {
              ...fish,
              isFavorite : false
            }
          }
          return fish
        })
      ))
      setFavorites(filterOut)
    }
  }

  useEffect(() => {
    getFish()
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch. Status: ${res.status}`);
        }
        return res.json();
      })
      .then(fish => {
        setFish(fish.fish);
        console.log(fish);
      })
      .catch(err => {
        console.log(err);
        setError(`Something went wrong. Please try again later.`);
      });
  }, []);
  


  return (
    <>
      {!fish && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Header />
      <Routes>
        <Route path='/main' element={<Home addFavorite={addFavorite} fish={fish} />}/>
        <Route path='main/fish-details/:id' element={<FishDetails addFavorite={addFavorite} fish={fish}/>} />
      </Routes>
    </>
  )
}

export default App
