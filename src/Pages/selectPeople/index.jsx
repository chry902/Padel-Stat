import { Link } from "react-router-dom";
// import styles from "./styles.module.scss";

const SelectPeople = ({
  players,
  setTakePlayer,
  sendPlayer,
  removePlayer,
  playerInAMatch,
}) => {
  // const [takePlayer, setTakePlayer] = useState('')

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
