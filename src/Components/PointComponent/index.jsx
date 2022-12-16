import { useState } from "react";
import styles from "./styles.module.scss";

const PoinComponent = ({ item }) => {
  const [valuePoint, setValuePoint] = useState(item.value);
  const incrment = () => {
    item.value = item.value + 1;
    setValuePoint(item.value);
  };

  return (
    <div
      onClick={(e) => incrment()}
      className={`${styles.point} ${
        item.name === "ok" ? styles.green : styles.redColor
      } ${item.name === "ok" ? styles.bRadiusL : ""}${
        item.name === "griglia" ? styles.bRadiusR : ""
      }`}
    >
      <h6>{item.name}</h6>
      <h6>{valuePoint}</h6>
    </div>
  );
};
export default PoinComponent;
