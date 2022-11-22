import styles from "./styles.module.scss";

const CardStat = () => {
  const nome = "nome " || "Mario";
  const cognome = "cognome" || "Rossi";

  return (
    <div className={styles.CardWrapper}>
      <div>
        <span>
          {nome} {cognome}
        </span>
      </div>

      <div>
        <ul>
          <li>
            <h3>Tiro dritto</h3>
            <div className={styles.pointWrapper}>
              <div>
                <h6>OK</h6>
                <span>{"0"}</span>
              </div>
              <div>
                <h6>VETRO</h6>
                <span>{"0"}</span>
              </div>
              <div>
                <h6>RETE</h6>
                <span>{"0"}</span>
              </div>
              <div>
                <h6>GRIGLIA</h6>
                <span>{"0"}</span>
              </div>
            </div>
          </li>
          <li>
            <h3>Tiro rovescio</h3>
            <div className={styles.pointWrapper}>
              <div>
                <h6>OK</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>VETRO</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>RETE</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>GRIGLIA</h6>
                <span>{"0"}</span>
              </div>
            </div>
          </li>
          <li>
            <h3>Vole`</h3>
            <div className={styles.pointWrapper}>
              <div>
                <h6>OK</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>VETRO</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>RETE</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>GRIGLIA</h6>
                <span>{"0"}</span>
              </div>
            </div>
          </li>
          <li>
            <h3>Bandeja</h3>
            <div className={styles.pointWrapper}>
              <div>
                <h6>OK</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>VETRO</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>RETE</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>GRIGLIA</h6>
                <span>{"0"}</span>
              </div>
            </div>
          </li>
          <li>
            <h3>Vibora</h3>
            <div className={styles.pointWrapper}>
              <div>
                <h6>OK</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>VETRO</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>RETE</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>GRIGLIA</h6>
                <span>{"0"}</span>
              </div>
            </div>
          </li>
          <li>
            <h3>Smash</h3>
            <div className={styles.pointWrapper}>
              <div>
                <h6>OK</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>VETRO</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>RETE</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>GRIGLIA</h6>
                <span>{"0"}</span>
              </div>
            </div>
          </li>
          <li>
            <h3>Ciquita</h3>
            <div className={styles.pointWrapper}>
              <div>
                <h6>OK</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>VETRO</h6>
                <span>{"0"}</span>
              </div>

              <div>
                <h6>RETE</h6>
                <span>{"0"}</span>
              </div>

              <div>
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
