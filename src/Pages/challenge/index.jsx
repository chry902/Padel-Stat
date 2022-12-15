import CardStat from "../../Components/CardStat";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { useEffect, useState } from "react";

const Challeng = ({ peopleTraining, setPeopleTraining, setPlayerInAMatch }) => {
  const [delControll, setDelControll] = useState(false);
  const navigate = useNavigate();
  // ----------------controllo modale ---------------------
  const controllEnd = (e) => {
    e.preventDefault();
    setDelControll(!delControll);

    console.log(delControll);
  };

  // -----------------terminal allenamento svuotando array torna home --------------------
  const removeTraining = (e) => {
    e.preventDefault();
    setPlayerInAMatch("");
    navigate("/");
  };
  return (
    <div className={styles.cardContain}>
      <div
        className={`${styles.modal} 
        ${delControll === true ? styles.modalOn : ""}
          `}
      >
        <div className={styles.confirmeModal}>
          vuoi terminare questo allenamento ?
          <button onClick={(e) => controllEnd(e)}>NO!</button>
          <button onClick={(e) => removeTraining(e)}>SI!</button>
        </div>
      </div>
      <div>
        <button onClick={(e) => controllEnd(e)}>End the training</button>
      </div>
      {peopleTraining &&
        peopleTraining.map((item, index) => (
          <CardStat key={index} item={item} />
        ))}
      <div>
        <Link to="/SelectPeople"> ⬅︎ Return to select people </Link>
      </div>
    </div>
  );
};
export default Challeng;
