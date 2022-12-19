import styles from "./styles.module.scss";

import { Link } from "react-router-dom";
import logoCentrale from "../../Images/corto_padel.png";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <ul className={styles.home_Links_wrapper}>
        <li>
          <Link to="/AddPlayer"> Ad new Player</Link>
        </li>
        <li>
          <Link to="/selectPeople">Start training</Link>
        </li>
      </ul>

      <div className={styles.logo_centrale}>
        <img src={logoCentrale} alt="immagine uomo con pala al centro" />
      </div>
    </div>
  );
};
export default Home;
