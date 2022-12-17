import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const SelectPeople = ({
  players,
  removePlayer,
  playerInAMatch,
  sendPlayer,
}) => {
  return (
    <div className={styles.SelectPeopleContainer}>
      <div className={styles.SelectPeopleWrapper}>
        <h2>Select players</h2>
        <ul>
          {players &&
            players.map((item, id) => (
              <li key={id} onClick={() => sendPlayer(item)}>
                <h4>
                  {item.nome} {item.cognome} {item.phone}
                </h4>
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.playerInAMathcWrapper}>
        <h2>Player in a match </h2>
        <ul>
          {playerInAMatch &&
            playerInAMatch.map((item, id) => (
              <li key={id} onClick={() => removePlayer(item)}>
                <h4>
                  {item.nome} {item.cognome} {item.phone} <span>X</span>
                </h4>
              </li>
            ))}
        </ul>
      </div>
      <>
        <div>
          <Link to="/challenge">Go challenge</Link>
        </div>
        <div>
          <Link to="/"> ⬅︎Return to Home </Link>
        </div>
      </>
    </div>
  );
};
export default SelectPeople;
