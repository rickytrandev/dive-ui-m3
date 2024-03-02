import "./Hero.css"
import { Header } from "../Header/Header"
import { Link } from "react-router-dom"

export function Hero() {
  return (
    <>
      <Header />
      <main className="hero-main">
        <div className="action">
          <div className="call-to-action">
            <p>Discover the art of sushi like never before. Dive into a world of flavor, texture, and culture with our comprehensive sushi encyclopedia app. From rich maguro to delicate hamachi, explore the tastes and traditions of each sushi fish. Start your culinary journey today and elevate your sushi experience with our app.</p>
            <Link to='/main'>Explore</Link>
          </div>
        </div>
        <div className="images-container">
          <div className="white-box">
            <img className="img-1" src="/sushi-box.avif" alt="" />
            <img className="img-2" src="/tuna-sushi.avif" alt="" />
            <div className="red-box"></div>
          </div>
        </div>
      </main>
    </>
  )
}
