import './Favorites.css'
import { Header } from '../Header/Header'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import { fishShape } from "../../propTypes/fishShape";

export function Favorites({ favorites, addFavorite }) {
  
  return (
    <>
      <Header />
      <div className="fav-container">
        {!favorites.length && <p>We're unable to reel in your catch.. Add some fish to your favorites!</p>}
        {favorites.map(fish => (
          <div id={fish.id} key={fish.id} className="fav-card">
            <img className='fav-img' src={fish.image_url} alt={`${fish.name} nigiri`} />
            <div className="fav-details">
              <div className="fav-names">
                <h3>{fish.japanese_name}</h3>
                <h3>{fish.name}</h3>
              </div>
              <div className="button-container">
                <button onClick={() => addFavorite(fish.id)} className="fav-btn" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill={fish.isFavorite ? "#D46161" : ""} fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                  </svg>
                </button>
                  <Link to={`fish-details/${fish.id}`}>
                    <button className="go-btn" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                      </svg>
                    </button> 
                  </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(fishShape).isRequired,
  addFavorite: PropTypes.func.isRequired
}