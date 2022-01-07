import React, { useState } from "react";

import Row from "./Components/Row/Row";

import a1 from "./a1.jpg";
import "./App.scss";

export default function App() {
  const [data, setData] = useState({
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

  const processList = data.data.map(({ name, device, path, status }, index) => (
    <div key={index}>
      <Row
        data={data}
        setData={setData}
        name={name}
        device={device}
        path={path}
        status={status}
      />
    </div>
  ));

  return (
    <div className="App">
      <img id="a1" src={a1}></img>
      <div id="tools" data-testid="tools" className="">
        <div id="invertSelection" data-testid="invertSelection">
          []
        </div>
        <div id="count" data-testid="count">
          Selected {Object.entries(data.selected).length}
        </div>
        <div id="" data-testid>
          Download Selected
        </div>
      </div>
      <div id="directory">
        <div className="row">
          <div className=" c1">[]</div>
          <div className=" c2">Name</div>
          <div className=" c3">Device</div>
          <div className=" c4">Path</div>
          <div className=" c5">Status</div>
        </div>
        {processList}
      </div>
    </div>
  );
}
