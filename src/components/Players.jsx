import { useState } from "react";

export default function Players(props) {
  // managing edit state
  const [isEditing, setIsEditing] = useState(false);
  const [playerSelectedName, setPlayerSelectedName] = useState(props.name);

  function handlePlayerChange(event) {
    setPlayerSelectedName(event.target.value);
  }

  function handleEditButton() {
    // switch the boolean on clicking the edit/save button
    // when updating the state based on previous value pass the previous value
    setIsEditing((prevValue) => !prevValue);
  }

  let playerName = <span className="player-name">{playerSelectedName}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={playerSelectedName}
        onChange={handlePlayerChange}
      ></input>
    );
  }

  return (
    <>
      <li className={props.isActive ? "active" : undefined}>
        <span className="player">
          {playerName}
          <span className="player-symbol">{props.symbol}</span>
        </span>
        <button onClick={handleEditButton}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </li>
    </>
  );
}
