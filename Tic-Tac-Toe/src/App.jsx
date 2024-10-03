import Player from "./components/Player.jsx";

function App() {
  

  return (
    <main id="game-container">
      <ol id="players">
        <Player initialName="Player 1" symbol="X" />
        <Player initialName="Player 2" symbol="O" />
      </ol>
      GAME BOARD
    </main>
  )
}

export default App
