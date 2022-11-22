import CardStat from "../../Components/CardStat";
// import styles from "./styles.module.scss";

const Challeng = ({ takePlayer }) => {
  return (
    <div>
      {takePlayer && takePlayer.map((item, id) => <CardStat item={item} />)}
    </div>
  );
};
export default Challeng;
