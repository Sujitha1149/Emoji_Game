import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props
  return (
    <div className="nav-bg">
      <div className="nav-half">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt=" emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="nav-half">
          <p className="s-cont">Score: {currentScore}</p>
          <p className="s-cont">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
