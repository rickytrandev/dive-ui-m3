import "./Error.css"
import { Header } from "../Header/Header"

export function Error() {
  return (
    <>
      <Header />
      <div className="error" >
      <h2>Oops, there seems to be a problem with your request.. Please try again!</h2>
      <img src="https://media0.giphy.com/media/osncBSthuV9fWCHg7B/200w.gif?cid=6c09b952wlg0c8i81wgwixz8xpctx8ugxjf511lscgnonbw9&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="gone fishing gif" />
      </div>
    </>
  )
}