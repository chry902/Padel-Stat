import styles from "./styles.module.scss";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <ul>
        <li>
          <Link to="/AddPlayer">New Player</Link>
        </li>
        <li>
          <Link to="/selectPeople">Start training</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
