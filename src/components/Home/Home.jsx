import "./Home.css"
import { Header } from "../Header/Header"
import { Filter } from "../Filter/Filter"
import { FishContainer } from "../FishContainer/FishContainer"

export function Home({ fish }) {
  return (
    <>
      <Header />
      <main>
        <Filter />
        <FishContainer fish={fish}/>
      </main>
    </>

  )
}