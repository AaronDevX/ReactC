import {useState, useRef} from "react";

export default function Player(){
  const inputName = useRef();
  const [playerName, setPlayerName] = useState('unknown entity');

  function handleSetName(){
      setPlayerName(inputName.current.value)
      inputName.current.value = ""
  }
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={inputName} type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
