import './index.css'

const WinOrLoseCard = props => {
  const {isWin, score, onClickPlayBtn} = props

  const onWin = () => (
    <div>
      <h1>You Won</h1>
      <p className="won-txt">Best Score</p>
      <p className="won-txt">12/12</p>
    </div>
  )

  const onLose = () => (
    <div>
      <h1>You Lose</h1>
      <p className="won-txt">Score</p>
      <p className="won-txt">{score}/12</p>
    </div>
  )

  return (
    <div className="win-lost-cont">
      <div>
        {isWin ? onWin() : onLose()}
        <button type="button" className="play-btn" onClick={onClickPlayBtn}>
          Play Again
        </button>
      </div>
      <div>
        {isWin ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
          />
        )}
      </div>
    </div>
  )
}

export default WinOrLoseCard
