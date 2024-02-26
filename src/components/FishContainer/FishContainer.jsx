import "./FishContainer.css"
import { Card } from "../Card/Card"

export function FishContainer({ fish }) {
  return (
    <div className="main-content">
      {fish && fish.length > 0 ?
        fish.map(f => <Card fish={f}/>)
      : 
        <p>Loading...</p>}
    </div>
  )
}