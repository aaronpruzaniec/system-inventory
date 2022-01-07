import React, { useState } from "react";
import Row from "./Components/Row/Row";
// import "./App.scss";

export default function App() {
  const [players2, setPlayers2] = useState({
    data: [
      {
        name: "asmss.exe",
        device: "Stark",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
        status: "scheduled",
      },
      {
        name: "anetsh.exe",
        device: "Targaryen",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
        status: "available",
      },
      {
        name: "auxtheme.dll",
        device: "Lanniester",
        path: "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
        status: "available",
      },
      {
        name: "acryptbase.dll",
        device: "Martell",
        path: "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
        status: "scheduled",
      },
      {
        name: "a7za.exe",
        device: "Baratheon",
        path: "\\Device\\HarddiskVolume1\\temp\\7za.exe",
        status: "scheduled",
      },
    ],
    selected: {},
  });

  const playersList = players2.data.map(
    ({ name, device, path, status }, index) => (
      <div key={index}>
        <Row
          allPlayers={players2}
          removePlayer={setPlayers2}
          name={name}
          device={device}
          path={path}
          status={status}
        />
      </div>
    )
  );

  return (
    <div className="App">
      <h1>Team Members ({players2.data.length})</h1>
      {playersList}
    </div>
  );
}
