import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { lazy, Suspense, useState, useEffect } from "react";

import DataPlayer from "../src/DataPlayer/data.json";
import AddPlayer from "./Pages/addPlayer";
import SelectPeople from "./Pages/selectPeople";
import Challeng from "./Pages/challenge";
// import Get from "./Components/Time";
// import MyTime from "./Components/Time";

const Home = lazy(() => import("./Components/Home"));

function App() {
  const [players, setPlayers] = useState(DataPlayer);
  const [takePlayer, setTakePlayer] = useState("");
  // const [endChallenge, setEndchallenge] = useState("");
  // const [time, setTime] = useState([]);
  // useEffect(() => {
  //   Get().then((data) => setTime(data));
  // }, []);
  console.log("players", players);
  //---------------------------------------------------
  //
  //
  //
  const [playerInAMatch, setPlayerInAMatch] = useState([]);
  const sendPlayer = (ply) => {
    const alreadyExist = playerInAMatch.find((el) => el.phone === ply.phone);

    if (!alreadyExist) {
      setPlayerInAMatch((prev) => [...prev, ply]);
    }
  };
  const removePlayer = (ply) => {
    const refreshArr = playerInAMatch.filter((el) => el.phone !== ply.phone);

    setPlayerInAMatch(refreshArr);
  };

  useEffect(() => {
    setTakePlayer(playerInAMatch);
    console.log("newArr", players);
    // eslint-disable-next-line
  }, [playerInAMatch]);

  //---------------------------------------------------
  //
  //
  //

  // prendi dati id
  const takeObj = (obj, item) => {
    const id = players.indexOf(item);
    console.log("obj", obj, item);

    pushChallenge(id, obj, item);
  };
  // fai il push dei dati
  const pushChallenge = (id, obj, item) => {
    players[id].data.push(obj);
    removePlayer(item);
    console.log("singlePlayer", players[id]);
  };

  return (
    <Router>
      <div className="App">
        <h1>
          <Link to="/">Padel Statz</Link>
        </h1>

        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/SelectPeople"
            element={
              <Suspense>
                <SelectPeople
                  players={players}
                  setTakePlayer={setTakePlayer}
                  sendPlayer={sendPlayer}
                  removePlayer={removePlayer}
                  playerInAMatch={playerInAMatch}
                />
              </Suspense>
            }
          />
          <Route
            path="/AddPlayer"
            element={
              <Suspense>
                <AddPlayer players={players} setPlayers={setPlayers} />
              </Suspense>
            }
          />
          <Route
            path="/challenge"
            element={
              <Suspense>
                <Challeng takePlayer={takePlayer} takeObj={takeObj} />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
