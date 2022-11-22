import { useState } from "react";
import { Link } from "react-router-dom";
// import styles from "./styles.module.scss";

const SelectPeople = ({ players }) => {
  const [playerInAMatch, setPlayerInAMatch] = useState([]);
  // const [takePlayer, setTakePlayer] = useState('')

  const sendPlayer = (ply) => {
    console.log("ply", ply.id);
    const alreadyExist = playerInAMatch.find((el) => el.phone === ply.phone);
    console.log("alreadyExist", alreadyExist);
    if (!alreadyExist) {
      setPlayerInAMatch((prev) => [...prev, ply]);
      console.log("setPlayerMatch", playerInAMatch);
    }
  };
  const removePlayer = (ply) => {
    console.log("remove", ply);
    const refreshArr = playerInAMatch.filter((el) => el.phone !== ply.phone);
    console.log("newArr", refreshArr);
    setPlayerInAMatch(refreshArr);
  };
  return (
    <div>
      <div>
        <h2>Select players</h2>
        <ul>
          {players.map((item, id) => (
            <li key={id} onClick={() => sendPlayer(item)}>
              {item.nome} {item.cognome} {item.phone}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Player in a match </h2>
        <ul>
          {playerInAMatch.map((item, id) => (
            <li key={id} onClick={() => removePlayer(item)}>
              {item.nome} {item.cognome} <span>X</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link to="/challenge">Go challenge</Link>
      </div>
    </div>
  );
};
export default SelectPeople;
