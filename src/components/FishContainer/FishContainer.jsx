import "./FishContainer.css"
import { Card } from "../Card/Card"
import PropTypes from "prop-types"
import { fishShape } from "../../propTypes/fishShape";


export function FishContainer({ filteredFish, addFavorite }) {
  return (
    <div className="main-content">
      {filteredFish && filteredFish.length > 0 ?
        filteredFish.map(f => <Card key={f.id} addFavorite={addFavorite} fish={f}/>)
      : 
      <p>One moment... Reeling in your fish.</p>}
    </div>
  )
}

FishContainer.propTypes = {
  fish: PropTypes.arrayOf(fishShape),
  addFavorite: PropTypes.func.isRequired
}

Card.propTypes = {
  // fish: PropTypes.shape(fishShape),
  addFavorite: PropTypes.func.isRequired
}
