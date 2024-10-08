import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
export default function GameBoard({activePlayer, changePlayer}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    
    function handleSelectSquare(row, col) {
        setGameBoard((prevGameBoard)=> {
            const updateGameBoard = [...prevGameBoard].map( rowBoard => [...rowBoard]);
            updateGameBoard[row][col] = activePlayer
            return updateGameBoard;
        })

        changePlayer()
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={()=> handleSelectSquare(rowIndex, colIndex)}
                                >{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}