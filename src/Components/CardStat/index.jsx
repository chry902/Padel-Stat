import styles from "./styles.module.scss";

import NameShoot from "../NameShoot";
import { useState } from "react";

const CardStat = ({ item, removePlayer }) => {
  const { storico } = item;
  storico.reverse();
  const [indx] = useState(item.storico.length - 1);
  const [training] = useState(item.storico[indx].allenamento);
  const [prova] = useState(storico);
  prova.reverse();
  const test = (ply) => {
    setTimeout(() => {
      console.log("eliminato");
      removePlayer(ply, "", "");
    }, "2000");
  };
  console.log("prova", prova.reverse());
  return (
    <div className={styles.CardWrapper}>
      <div>
        <h2>
          <span>
            {item.nome} {item.cognome}
          </span>
        </h2>
      </div>

      <div>
        <ul>
          {training &&
            training.map((el, index) => (
              <li key={index}>
                <NameShoot tiro={el} index={index} />
              </li>
            ))}
        </ul>
      </div>

      <button onClick={() => test(item)}>End the Challeng</button>
    </div>
  );
};
export default CardStat;
