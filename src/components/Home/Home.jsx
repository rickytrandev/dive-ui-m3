import "./Home.css"
import { Header } from "../Header/Header"
import { Filter } from "../Filter/Filter"
import { FishContainer } from "../FishContainer/FishContainer"

export function Home({ addFavorite, fish}) {

  return (
    <>
      <main>
        <Filter />
        <FishContainer addFavorite={addFavorite} fish={fish}/>
      </main>
    </>

  )
}