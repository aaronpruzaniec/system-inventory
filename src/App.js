import React, { useState } from "react";

import a1 from "./a1.jpg";
import logo from "./logo.svg";
import Row from "./Components/Row/Row";

import "./App.scss";

function App() {
  const [state, setState] = useState({});
  const data = [
    {
      name: "smss.exe",
      device: "Stark",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
      status: "scheduled",
    },
    {
      name: "netsh.exe",
      device: "Targaryen",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
      status: "available",
    },
    {
      name: "uxtheme.dll",
      device: "Lanniester",
      path: "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
      status: "available",
    },
    {
      name: "cryptbase.dll",
      device: "Martell",
      path: "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
      status: "scheduled",
    },
    {
      name: "7za.exe",
      device: "Baratheon",
      path: "\\Device\\HarddiskVolume1\\temp\\7za.exe",
      status: "scheduled",
    },
  ];

  function select(newValue) {
    // let a = state;
    // a[newValue] = true;
    // setState(a);
    //console.log(a);
  }

  function exists(name) {}

  return (
    <div className="App">
      <div id="tools" data-testid="tools" className="">
        <div id="invertSelection" data-testid="invertSelection">
          []
        </div>
        <div id="count" data-testid="count">
          Selected {Object.entries(state).length}
        </div>
        <div id="" data-testid>
          Download Selected
        </div>
      </div>
      <img id="a1" src={a1}></img>
      <div id="directory">
        <div className="row">
          <div className=" c1">[]</div>
          <div className=" c2">Name</div>
          <div className=" c3">Device</div>
          <div className=" c4">Path</div>
          <div className=" c5">Status</div>
        </div>
        {data.map((x) => (
          <Row
            key={x.name}
            name={x.name}
            device={x.device}
            path={x.path}
            setState={setState}
            state={state}
            status={x.status}
            select={select}
          ></Row>
        ))}
      </div>
      {/* {state} */}
    </div>
  );
}

export default App;
