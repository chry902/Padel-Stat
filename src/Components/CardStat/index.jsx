import styles from "./styles.module.scss";
import { useState } from "react";
const CardStat = ({ item }) => {
  const nome = item.nome || "Mario";
  const cognome = item.cognome || "Rossi";

  // Tiri
  //
  //Tiro dritto
  const [tdOk, setTdOk] = useState(0);
  const [tdVet, setTdVet] = useState(0);
  const [tdRet, setTdRet] = useState(0);
  const [tdGrigl, setTdGrigl] = useState(0);
  //
  //
  // tiro rovescio
  const [trOk, setTrOk] = useState(0);
  const [trVet, setTrVet] = useState(0);
  const [trRet, setTrRet] = useState(0);
  const [trGrigl, setTrGrigl] = useState(0);
  //
  //
  // vole
  const [volOk, setVolOk] = useState(0);
  const [volVet, setVolVet] = useState(0);
  const [volRet, setVolRet] = useState(0);
  const [volGrigl, setVolGrigl] = useState(0);
  //
  //
  // bandeja
  // const [banOk, setBanOk] = useState(0);
  // const [banVet, setBanVet] = useState(0);
  // const [banRet, setBanRet] = useState(0);
  // const [banGrigl, setBanGrigl] = useState(0);
  // //
  // //
  // // vibora
  // const [vibOk, setVibOk] = useState(0);
  // const [vibVet, setVibVet] = useState(0);
  // const [vibRet, setVibRet] = useState(0);
  // const [vibGrigl, setVibGrigl] = useState(0);
  // //
  // //
  // // smash
  // const [smaOk, setSmaOk] = useState(0);
  // const [smaVet, setSmaVet] = useState(0);
  // const [smaRet, setSmaRet] = useState(0);
  // const [smaGrigl, setSmaGrigl] = useState(0);
  // //
  // //
  // // ciquita
  // const [ciqOk, setCiqOk] = useState(0);
  // const [ciqVet, setCiqVet] = useState(0);
  // const [ciqRet, setCiqRet] = useState(0);
  // const [ciqGrigl, setCiqGrigl] = useState(0);

  return (
    <div className={styles.CardWrapper}>
      <div>
        <h2>
          <span>
            {nome} {cognome}
          </span>
        </h2>
      </div>

      <div>
        <ul>
          <li>
            <h3>Tiro dritto</h3>
            <div className={styles.pointWrapper}>
              <div
                onClick={() => {
                  setTdOk(tdOk + 1);
                }}
                className={`${styles.point} ${styles.green} ${styles.bRadiusL}`}
              >
                <h6>OK</h6>
                <span>{tdOk}</span>
              </div>

              <div
                onClick={() => {
                  setTdVet(tdVet + 1);
                }}
                className={`${styles.point} ${styles.redColor}`}
              >
                <h6>VETRO</h6>
                <span>{tdVet}</span>
              </div>

              <div
                onClick={() => {
                  setTdRet(tdRet + 1);
                }}
                className={`${styles.point} ${styles.redColor}`}
              >
                <h6>RETE</h6>
                <span>{tdRet}</span>
              </div>

              <div
                onClick={() => {
                  setTdGrigl(tdGrigl + 1);
                }}
                className={`${styles.point} ${styles.redColor} ${styles.bRadiusR}`}
              >
                <h6>GRIGLIA</h6>
                <span>{tdGrigl}</span>
              </div>
            </div>
          </li>

          <li>
            <h3>Tiro rovescio</h3>
            <div className={styles.pointWrapper}>
              <div
                onClick={() => {
                  setTrOk(trOk + 1);
                }}
                className={`${styles.point} ${styles.green} ${styles.bRadiusL}`}
              >
                <h6>OK</h6>
                <span>{trOk}</span>
              </div>

              <div
                onClick={() => {
                  setTrVet(trVet + 1);
                }}
                className={`${styles.point} ${styles.redColor}`}
              >
                <h6>VETRO</h6>
                <span>{trVet}</span>
              </div>

              <div
                onClick={() => {
                  setTrRet(trRet + 1);
                }}
                className={`${styles.point} ${styles.redColor}`}
              >
                <h6>RETE</h6>
                <span>{trRet}</span>
              </div>
              <div
                onClick={() => {
                  setTrGrigl(trGrigl + 1);
                }}
                className={`${styles.point} ${styles.redColor} ${styles.bRadiusR}`}
              >
                <h6>GRIGLIA</h6>
                <span>{trGrigl}</span>
              </div>
            </div>
          </li>

          <li>
            <h3>Vole`</h3>
            <div className={styles.pointWrapper}>
              <div
                onClick={() => {
                  setVolOk(volOk + 1);
                }}
                className={`${styles.point} ${styles.green} ${styles.bRadiusL}`}
              >
                <h6>OK</h6>
                <span>{volOk}</span>
              </div>

              <div
                onClick={() => {
                  setVolVet(volVet + 1);
                }}
                className={`${styles.point} ${styles.redColor}`}
              >
                <h6>VETRO</h6>
                <span>{volVet}</span>
              </div>

              <div
                onClick={() => {
                  setVolRet(volRet + 1);
                }}
                className={`${styles.point} ${styles.redColor}`}
              >
                <h6>RETE</h6>
                <span>{volRet}</span>
              </div>
              <div
                onClick={() => {
                  setVolGrigl(volGrigl + 1);
                }}
                className={`${styles.point} ${styles.redColor} ${styles.bRadiusR}`}
              >
                <h6>GRIGLIA</h6>
                <span>{volGrigl}</span>
              </div>
            </div>
          </li>

          <li>
            <h3>Bandeja</h3>
            <div className={styles.pointWrapper}>
              <div
                className={`${styles.point} ${styles.green} ${styles.bRadiusL}`}
              >
                <h6>OK</h6>
                <span>{"0"}</span>
              </div>
              <div className={`${styles.point} ${styles.redColor}`}>
                <h6>VETRO</h6>
                <span>{"0"}</span>
              </div>
              <div className={`${styles.point} ${styles.redColor}`}>
                <h6>RETE</h6>
                <span>{"0"}</span>
              </div>
              <div
                className={`${styles.point} ${styles.redColor} ${styles.bRadiusR}`}
              >
                <h6>GRIGLIA</h6>
                <span>{"0"}</span>
              </div>
            </div>
          </li>

          <li>
            <h3>Vibora</h3>
            <div className={styles.pointWrapper}>
              <div
                className={`${styles.point} ${styles.green} ${styles.bRadiusL}`}
              >
                <h6>OK</h6>
                <span>{"0"}</span>
              </div>
              <div className={`${styles.point} ${styles.redColor}`}>
                <h6>VETRO</h6>
                <span>{"0"}</span>
              </div>
              <div className={`${styles.point} ${styles.redColor}`}>
                <h6>RETE</h6>
                <span>{"0"}</span>
              </div>
              <div
                className={`${styles.point} ${styles.redColor} ${styles.bRadiusR}`}
              >
                <h6>GRIGLIA</h6>
                <span>{"0"}</span>
              </div>
            </div>
          </li>

          <li>
            <h3>Smash</h3>
            <div className={styles.pointWrapper}>
              <div
                className={`${styles.point} ${styles.green} ${styles.bRadiusL}`}
              >
                <h6>OK</h6>
                <span>{"0"}</span>
              </div>
              <div className={`${styles.point} ${styles.redColor}`}>
                <h6>VETRO</h6>
                <span>{"0"}</span>
              </div>
              <div className={`${styles.point} ${styles.redColor}`}>
                <h6>RETE</h6>
                <span>{"0"}</span>
              </div>
              <div
                className={`${styles.point} ${styles.redColor} ${styles.bRadiusR}`}
              >
                <h6>GRIGLIA</h6>
                <span>{"0"}</span>
              </div>
            </div>
          </li>

          <li>
            <h3>Ciquita</h3>
            <div className={styles.pointWrapper}>
              <div
                className={`${styles.point} ${styles.green} ${styles.bRadiusL}`}
              >
                <h6>OK</h6>
                <span>{"0"}</span>
              </div>
              <div className={`${styles.point} ${styles.redColor}`}>
                <h6>VETRO</h6>
                <span>{"0"}</span>
              </div>
              <div className={`${styles.point} ${styles.redColor}`}>
                <h6>RETE</h6>
                <span>{"0"}</span>
              </div>
              <div
                className={`${styles.point} ${styles.redColor} ${styles.bRadiusR}`}
              >
                <h6>GRIGLIA</h6>
                <span>{"0"}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CardStat;
