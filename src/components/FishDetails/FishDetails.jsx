import { useParams } from "react-router-dom";
import "./FishDetails.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import PropTypes from "prop-types"
import { fishShape } from "../../propTypes/fishShape";

export function FishDetails({ fish, addFavorite, isMenuOpen }) {
  const [findFish, setFindFish] = useState(null);
  const { id } = useParams();
  const { isFavorite } = findFish || {}
  const location = useLocation()
  const category = location.pathname.split('/')[2]
  
  useEffect(() => {
    setFindFish(fish.find(f => f.id === Number(id)));
  }, [fish]);
  
  return (
    <>
     {!isMenuOpen &&
      <div className="fish-details-container">
        <aside>
          {findFish && <img src={findFish.image_url} alt={`${findFish.name} nigiri`} />}
        </aside>
        <main>
          <article>
            {!findFish && <h2>One sec... Reeling in your fish.</h2>}
            {findFish && (
              <>
                <h2>{findFish.japanese_name}</h2>
                <h2>{findFish.name}</h2>
                <h3>Description</h3>
                <p>{findFish.description}</p>
                <h3>Flavor</h3>
                <p>{findFish.flavor_profile}</p>
                <h3>Origin</h3>
                <p>{findFish.origin}</p>
                <h3>Sustainability</h3>
                <p>{findFish.sustainability}</p>
                <section className="nutrition">
                  <h3>Nutrition</h3>
                  <p>Calories: {findFish.nutritional_information?.calories_per_serving}</p>
                  <p>Carbohydrates: {findFish.nutritional_information?.carbohydrates}</p>
                  <p>Fat: {findFish.nutritional_information?.fat}</p>
                  <p>Protein: {findFish.nutritional_information?.protein}</p>
                </section>
              </>
            )}
          </article>
          <div className="buttons-container">
            <button onClick={() => addFavorite(Number(id))} className="fav-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 13">
                <path fill={isFavorite ? "#D46161" : ""} fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
              </svg>
            </button>
            <Link to={category === "favorites" ? "/main/favorites" : "/main"} >
              <button className="go-btn" >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
              </svg>
              </button>
            </Link>
          </div>
        </main>
      </div>
      }
    </>
  );
}

FishDetails.propTypes = {
  fish: PropTypes.arrayOf(fishShape).isRequired,
  addFavorite: PropTypes.func.isRequired
}