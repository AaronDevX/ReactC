import {useState} from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

//Returns the last player of an array
function deriveActivePlayer(turns){
    let currentPlayer = "X";

    if(turns.length > 0 && turns[0].player === "X"){
        currentPlayer = "O";
    }
    return currentPlayer
}


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  let activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = [...initialGameBoard.map(row => [...row])];
  let winner = false

// Returns an array of Objects with the Moves Information
  function changeActivePlayer(row, col) {
      setGameTurns((prevTurns)=> {
          let actualPlayer = deriveActivePlayer(prevTurns)

          return [
              {square: {row, col}, player: actualPlayer},
              ...prevTurns
          ]
      });
  }

  // Writes turns on the GameBoard
  for(const turn of gameTurns){
      const {square, player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
  }

  // check if there is a winner
  for(const combination of WINNING_COMBINATIONS){
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

      if(firstSquareSymbol &&
          firstSquareSymbol === secondSquareSymbol &&
          firstSquareSymbol === thirdSquareSymbol){
          winner = firstSquareSymbol;
      }
  }

  const isDraw = gameTurns.length === 9 && !winner;

  function handleRestart(){
      setGameTurns([]);
      winner = null;
  }

  return (
    <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
                <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
            </ol>
            {(winner || isDraw) && <GameOver winner={winner} restart={handleRestart}/>}
            <GameBoard board={gameBoard} onSelectSquare={changeActivePlayer}/>
        </div>
        <Log turns={gameTurns}/>
    </main>
  )
}

export default App
