import styles from "./styles.module.scss";
import PoinComponent from "../PointComponent";
import { useState } from "react";

const NameShoot = ({ tiro }) => {
  // const [punto, setPunto] = useState(tiro.punto);

  return (
    <>
      <h3>{tiro.tiro}</h3>

      <div className={styles.pointWrapper}>
        {tiro.punto &&
          tiro.punto.map((item, index) => (
            <PoinComponent key={index} item={item} />
          ))}
      </div>
    </>
  );
};
export default NameShoot;
