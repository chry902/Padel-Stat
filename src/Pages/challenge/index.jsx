import CardStat from "../../Components/CardStat";
// import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

const Challeng = ({ peopleTraining, removePlayer }) => {
  // const [peopleTraining, setPeopleTraining] = useState([]);
  // useEffect(() => {
  //   setPeopleTraining(playerInAMatch);
  // }, [playerInAMatch]);
  return (
    <div>
      {peopleTraining &&
        peopleTraining.map((item, index) => (
          <CardStat key={index} item={item} removePlayer={removePlayer} />
        ))}
      <div>
        <Link to="/SelectPeople"> Return to select people </Link>
      </div>
    </div>
  );
};
export default Challeng;
