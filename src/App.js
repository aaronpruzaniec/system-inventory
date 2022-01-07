import React, { useState } from "react";

import Row from "./Components/Row/Row";

import "./App.scss";
import download from "./download.svg";
import inputOff from "./inputOff.svg";
import inputOn from "./inputOn.svg";
import inputNeutral from "./inputNeutral.svg";

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
  let key = data.data.map((x) => x.status).filter((x) => x == "available");

  function invertSelection(operation) {
    let update = {};
    update = data;
    update.selected = {};
    setData({ data: data.data, selected: {} });
  }

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
      <div id="tools" data-testid="tools" className="">
        <div id="invertSelection" data-testid="invertSelection">
          {/* Code for determining state of invert selector */}
          {/* 1. If no items are selected show input off, click adds all */}
          {/* 2. If maximum amount of selections show input on, click deselects all */}
          {/* 3. If more than 0 items are selected, but less than maximum showed neutral */}
          {Object.entries(data.selected).length == 0 ? (
            <img src={inputOff} onClick={() => invertSelection("all")} />
          ) : Object.entries(data.selected).length == key.length ? (
            <img src={inputOn} onClick={() => invertSelection("none")} />
          ) : (
            <img src={inputNeutral} />
          )}

          {Object.entries(data.selected).length > 0
            ? "Selected " + Object.entries(data.selected).length
            : "None selected"}
        </div>
        <div id="" data-testid>
          <img src={download} />
          {"Download Selected"}
        </div>
      </div>
      <div id="directory">
        <div className="row header">
          <div className="column">[]</div>
          <div className="column">Name</div>
          <div className="column">Device</div>
          <div className="column">Path</div>
          <div className="column">Status</div>
        </div>
        {processList}
      </div>
      {Object.entries(data.selected).length}
    </div>
  );
}
