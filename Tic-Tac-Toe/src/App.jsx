import {useState} from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function changeActivePlayer(row, col) {
      setActivePlayer((prevPlayer) => prevPlayer === "X" ? "O" : "X");

      setGameTurns((prevTurns)=> {
          let currentPlayer = "X";

          if(gameTurns.length > 0 && gameTurns[0].player === "X"){
              currentPlayer = "O";
          }

          return [
              {square: {row, col}, player: currentPlayer},
              ...prevTurns
          ]
      });
  }

  return (
    <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
                <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
            </ol>
            <GameBoard turns={gameTurns} onSelectSquare={changeActivePlayer}/>
        </div>
        <Log />
    </main>
  )
}

export default App
