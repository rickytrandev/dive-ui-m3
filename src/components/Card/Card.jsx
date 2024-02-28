import "./Card.css"
import { Link } from "react-router-dom";

export function Card({ fish, addFavorite }) {
  
  const { isFavorite } = fish 

  return (
    <div key={fish.id} id={fish.id} className="fish-card">
      <img src={fish.image_url} alt={`${fish.name} sushi`} />
      <div className="details-container">
        <div className="names">
          <h3>{fish.japanese_name}</h3>
          <h3>{fish.name}</h3>
        </div>
        <div className="button-container">
          <button onClick={() => addFavorite(fish.id)} className="fav-btn" >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill={isFavorite ? "#D46161" : ""} fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
          </svg>
          </button>
          <Link to={`fish-details/${fish.id}`}>
            <button className="go-btn" >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
            </button> 
          </Link>
        </div>
      </div>

    </div>
  );
}
