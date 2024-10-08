import {useState} from 'react'

export default function Player({initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditing() {
        setIsEditing(editing => !editing);
    }

    function handleChangeName(e){
        setPlayerName(e.target.value);
    }

    let playerField = <span className="player-name">{playerName}</span>
    let editBtn = "Edit"

    if (isEditing) {
        playerField = <input type="text" defaultValue={playerName} onChange={handleChangeName}/>
        editBtn = "Save"
    }

    return (
        <li className={isActive ? 'active' : ''}>
          <span className="player">
            {playerField}
              <span className="player-symbol">{symbol}</span>
          </span>
            <button onClick={handleEditing}>{editBtn}</button>
        </li>
    )
}