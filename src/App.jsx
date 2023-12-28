import { useState } from "react";

import GameBoard from "./components/GameBoard.jsx";
import Players from "./components/Players.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players name="Player 1" symbol="X" />
          <Players name="Player 2" symbol="0" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
