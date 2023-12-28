import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleGameBoard(rowIndex, colIndex, symbol) {
    // use prev value beacuse we dont want to lose previous state
    setGameBoard((prevValue) => {
      const updatedBoard = [...prevValue.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = "X";

      return updatedBoard;
    });
  }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li id={colIndex}>
                    <button
                      onClick={() => {
                        handleGameBoard(rowIndex, colIndex, "X");
                      }}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
