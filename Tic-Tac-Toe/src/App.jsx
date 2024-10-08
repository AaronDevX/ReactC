import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function changeActivePlayer() {
      setActivePlayer((prevPlayer) => prevPlayer === "X" ? "O" : "X");
  }

  return (
    <main id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
        <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
      </ol>
      <GameBoard activePlayer={activePlayer} changePlayer={changeActivePlayer} />
    </main>
  )
}

export default App
