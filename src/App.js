import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { lazy, Suspense, useState } from "react";

import DataPlayer from "../src/DataPlayer/data.json";
import AddPlayer from "./Pages/addPlayer";
import SelectPeople from "./Pages/selectPeople";
import Challeng from "./Pages/challenge";
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
                <SelectPeople players={players} />
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
                <Challeng />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
