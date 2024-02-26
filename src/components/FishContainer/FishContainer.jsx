import "./FishContainer.css"
import { Card } from "../Card/Card"

export function FishContainer({ fish, addFavorite }) {
  return (
    <div className="main-content">
      {fish && fish.length > 0 ?
        fish.map(f => <Card addFavorite={addFavorite} fish={f}/>)
      : 
      <p>One sec... Reeling in your fish.</p>}
    </div>
  )
}