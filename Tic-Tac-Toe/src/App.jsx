import {useState} from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";

const PLAYERS = {
    "X": "Player 1",
    "O": "Player 2"
}
const INITIAL_GAME_BOARD = [
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

// Writes turns on the GameBoard
function deriveGameBoard(gameTurns){
    let gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])];

    for(const turn of gameTurns){
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }
    return gameBoard;
}

// check if there is a winner
function deriveWinner(gameBoard, players){
    let winner = false

    for(const combination of WINNING_COMBINATIONS){
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if(firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol){
            winner = players[firstSquareSymbol];
        }
    }
    return winner;
}


function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  let activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const isDraw = gameTurns.length === 9 && !winner;

// Extracts the names of the players according to their symbols
  function saveNames(symbol, player) {
      setPlayers((players)=>{
          return{
              ...players,
              [symbol]: player
          }
      })
  }
    
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

  function handleRestart(){
      setGameTurns([]);
  }

  return (
    <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player savePlayer={saveNames} initialName={PLAYERS.X} symbol="X" isActive={activePlayer === "X"}/>
                <Player savePlayer={saveNames} initialName={PLAYERS.O} symbol="O" isActive={activePlayer === "O"}/>
            </ol>
            {(winner || isDraw) && <GameOver winner={winner} restart={handleRestart}/>}
            <GameBoard board={gameBoard} onSelectSquare={changeActivePlayer}/>
        </div>
        <Log turns={gameTurns}/>
    </main>
  )
}

export default App
