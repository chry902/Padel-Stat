import "./App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense, useState, useEffect } from "react";
import DataPlayer from "../src/DataPlayer/data.json";
import Get from "./Components/Time";
import logoStatz from "./Images/logoStatz.png";
import padelBall from "./Images/pallaTennis.png";
import logoCentrale from "./Images/corto_padel.png";
const Home = lazy(() => import("./Components/Home"));
const AddPlayer = lazy(() => import("./Pages/addPlayer"));
const SelectPeople = lazy(() => import("./Pages/selectPeople"));
const Challeng = lazy(() => import("./Pages/challenge"));

function App() {
  // ----------array file json
  const [players, setPlayers] = useState(DataPlayer);
  // -------------------- array player selezionati per allenamento
  const [playerInAMatch, setPlayerInAMatch] = useState([]);
  // -------------------- array player allenamento
  const [peopleTraining, setPeopleTraining] = useState("");

  // --------------------fetch per la data dell allenamento
  const [time, setTime] = useState([]);
  useEffect(() => {
    Get().then((data) =>
      setTime(
        data.datetime.split("T")[0].split("-").reverse().join("-").toString()
      )
    );
  }, []);

  console.log("--------players", peopleTraining);

  // //----------------- seleziona i giocatori ed efettua un controllo ed aggiunge obj allenamento  ----------------------------------
  const sendPlayer = (ply) => {
    console.log("ply", ply);
    const alreadyExist = playerInAMatch.find((el) => el.id === ply.id);
    const pointExist = ply.storico.find((el) => el.data === time);

    if (!alreadyExist) {
      if (!pointExist) {
        const point = {
          data: time,
          allenamento: [
            {
              tiro: "Dritto",
              punto: [
                {
                  name: "ok",
                  value: 0,
                },
                {
                  name: "rete",
                  value: 0,
                },
                {
                  name: "vetro",
                  value: 0,
                },
                {
                  name: "griglia",
                  value: 0,
                },
              ],
            },
            {
              tiro: "Rovescio",
              punto: [
                {
                  name: "ok",
                  value: 0,
                },
                {
                  name: "rete",
                  value: 0,
                },
                {
                  name: "vetro",
                  value: 0,
                },
                {
                  name: "griglia",
                  value: 0,
                },
              ],
            },
            {
              tiro: "Ciquita",
              punto: [
                {
                  name: "ok",
                  value: 0,
                },
                {
                  name: "rete",
                  value: 0,
                },
                {
                  name: "vetro",
                  value: 0,
                },
                {
                  name: "griglia",
                  value: 0,
                },
              ],
            },
            {
              tiro: "Vole",
              punto: [
                {
                  name: "ok",
                  value: 0,
                },
                {
                  name: "rete",
                  value: 0,
                },
                {
                  name: "vetro",
                  value: 0,
                },
                {
                  name: "griglia",
                  value: 0,
                },
              ],
            },
            {
              tiro: "Bandeja",
              punto: [
                {
                  name: "ok",
                  value: 0,
                },
                {
                  name: "rete",
                  value: 0,
                },
                {
                  name: "vetro",
                  value: 0,
                },
                {
                  name: "griglia",
                  value: 0,
                },
              ],
            },
            {
              tiro: "Vibora",
              punto: [
                {
                  name: "ok",
                  value: 0,
                },
                {
                  name: "rete",
                  value: 0,
                },
                {
                  name: "vetro",
                  value: 0,
                },
                {
                  name: "griglia",
                  value: 0,
                },
              ],
            },
            {
              tiro: "Pallonetto",
              punto: [
                {
                  name: "ok",
                  value: 0,
                },
                {
                  name: "rete",
                  value: 0,
                },
                {
                  name: "vetro",
                  value: 0,
                },
                {
                  name: "griglia",
                  value: 0,
                },
              ],
            },
            {
              tiro: "Battuta",
              punto: [
                {
                  name: "ok",
                  value: 0,
                },
                {
                  name: "rete",
                  value: 0,
                },
                {
                  name: "vetro",
                  value: 0,
                },
                {
                  name: "griglia",
                  value: 0,
                },
              ],
            },
          ],
        };

        ply.storico.push(point);
      }
      setPlayerInAMatch((prev) => [...prev, ply]);
    }
  };
  // ----------------aggiorna array giocatori----------------------------
  useEffect(() => {
    setPeopleTraining(playerInAMatch);
  }, [playerInAMatch]);

  // -----------------rimuovi i giocatoriselezionati --------------------
  const removePlayer = (ply) => {
    console.log("eliminato>>>>>>>>>", ply, playerInAMatch);
    setPlayerInAMatch(playerInAMatch.filter((el) => el.id !== ply.id));
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <header className="headerContainer">
            <div className="titleWrapper">
              <img src={padelBall} alt="icona palla tennis" />
            </div>
            <h1>Padel Statz</h1>
            <div className="logoWrapper">
              <img src={logoStatz} alt="logo pagina" />
            </div>
          </header>
          <body>
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
                      time={time}
                      removePlayer={removePlayer}
                      sendPlayer={sendPlayer}
                      playerInAMatch={playerInAMatch}
                      setPlayerInAMatch={setPlayerInAMatch}
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
                    <Challeng
                      peopleTraining={peopleTraining}
                      setPlayerInAMatch={setPlayerInAMatch}
                    />
                  </Suspense>
                }
              />
            </Routes>
          </body>
        </div>
        <div className="logoCentrale">
          <img src={logoCentrale} alt="immagine uomo con pala al centro" />
        </div>
      </div>
    </Router>
  );
}

export default App;
