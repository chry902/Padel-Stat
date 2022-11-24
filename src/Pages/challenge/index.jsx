import CardStat from "../../Components/CardStat";
// import styles from "./styles.module.scss";

const Challeng = ({ takePlayer, takeObj }) => {
  return (
    <div>
      {takePlayer &&
        takePlayer.map((item, id) => (
          <CardStat key={id} item={item} takeObj={takeObj} />
        ))}
    </div>
  );
};
export default Challeng;
