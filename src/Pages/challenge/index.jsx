import { useState } from "react";
// import styles from "./styles.module.scss";

const Challenge = ({ players }) => {
  const [playerInAMatch, setPlayerInAMatch] = useState([]);
  // const [takePlayer, setTakePlayer] = useState('')

  const sendPlayer = (ply) => {
    console.log("ply", ply.id);
    const alreadyExist = playerInAMatch.find((el) => el.id === ply.id);
    console.log("alreadyExist", alreadyExist);
    if (!alreadyExist) {
      setPlayerInAMatch((prev) => [...prev, ply]);
      console.log("setPlayerMatch", playerInAMatch);
    }
  };
  return (
    <div>
      <div>
        <h2>Select players</h2>
        <ul>
          {players.map((item, id) => (
            <li key={id} onClick={() => sendPlayer(item)}>
              {item.nome} {item.cognome}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Player in a match </h2>
        <ul>
          {playerInAMatch.map((item, id) => (
            <li key={id} onClick={() => sendPlayer(item)}>
              {item.nome} {item.cognome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Challenge;
