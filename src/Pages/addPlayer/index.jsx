import { useState } from "react";

// import styles from "./styles.module.scss";

const AddPlayer = ({ players, setPlayers }) => {
  const [playerName, setPlayerName] = useState("");
  const [playerSurname, setPlayerSurname] = useState("");
  const [playerPhoneNumber, setPlayerPhoneNumber] = useState("");
  const [playerAge, setPlayerAge] = useState("");
  // const [player, setPlayer] = useState("");
  const addPlayer = (e) => {
    e.preventDefault();

    const newListPlayers = players;

    const newPlayer = {
      nome: playerName,
      cognome: playerSurname,
      age: playerAge,
      phone: playerPhoneNumber,
      data: "",
    };

    newListPlayers.push(newPlayer);
    setPlayers(newListPlayers);

    setPlayerName("");
    setPlayerSurname("");
    setPlayerAge("");
    setPlayerPhoneNumber("");
    // setPlayer({
    //   name: playerName,
    //   cognome: playerSurname,
    //   age: playerAge,
    // });

    // console.log("player", player);
    // setPlayers((prev) => [...players, player]);
  };

  return (
    <div>
      <h1>Add player</h1>
      <form onSubmit={addPlayer}>
        <label>Name</label>
        <input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          type="text"
          id="playerName"
          name="playerName"
          required
        />

        <label>Surname</label>
        <input
          value={playerSurname}
          onChange={(e) => setPlayerSurname(e.target.value)}
          type="text"
          id="playerSurname"
          name="playerSurname"
          required
        />

        <label>Phone number</label>
        <input
          value={playerPhoneNumber}
          onChange={(e) => setPlayerPhoneNumber(e.target.value)}
          type="number"
          id="playerPhoneNumber"
          name="playerPhoneNumber"
          required
        />

        {/* <label>Age</label>
        <input
          value={playerAge}
          onChange={(e) => setPlayerAge(e.target.value)}
          type="date"
          id="playerAge"
          name="playerAge"
          required
        /> */}
        <input type="submit" value="Send it!" />
      </form>
    </div>
  );
};
export default AddPlayer;
