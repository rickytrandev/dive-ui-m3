import { useState, useEffect } from 'react'
import './App.css'
import { getFish } from '../../apiCalls'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Home/Home'

function App() {
  const [fish, setFish] = useState([])
  const [error, setError] = useState('')

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

      <Routes>
        <Route path='/' element={<Home fish={fish} />}/>

      </Routes>
    </>
  )
}

export default App
