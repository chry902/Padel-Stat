import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { lazy, Suspense, useState } from "react";

import Challenge from "./Pages/challenge";
import DataPlayer from "../src/DataPlayer/data.json";
import AddPlayer from "./Pages/addPlayer";
const Home = lazy(() => import("./Components/Home"));

function App() {
  const [players, setPlayers] = useState(DataPlayer);

  // console.log("singlePlayer", singlePlayer);
  // useEffect(() => {

  //   setPlayers((prev) => [...players, singlePlayer]);
  //   // setAdd(/* (prev) =>  */ [...add, text]);

  // }, []);
  console.log("players", players);
  // const newFilter = players.filter((item) => item.nome !== players[0].nome);
  // console.log("fiter", newFilter);

  return (
    <Router>
      <div className="App">
        <h1>
          <Link to="/">Padel</Link>
        </h1>

        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/challenge"
              element={<Challenge players={players} />}
            />
            <Route
              path="/AddPlayer"
              element={<AddPlayer players={players} setPlayers={setPlayers} />}
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
