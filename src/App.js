import React, { useState } from "react";

import Checkbox from "./Components/Checkbox/Checkbox";
import Column from "./Components/Column/Column";
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
  // Generate array of entries names whos status is available
  // ex. [[anetsh.exe"],["auxtheme.dll"]]
  let key = data.data
      .map((x) => [x.status, x.name])
      .filter((x) => x[0] == "available")
      .map((x) => x[1]),
    // Number of items currently selected
    selectLength = Object.entries(data.selected).length,
    // Number of items currently listed
    dataLength = Object.entries(data.data).length;

  function invertSelection(operation) {
    // operation is either 'all' or 'none'
    // inverSelector runs to invert selection
    if (operation == "none") {
      setData({ data: data.data, selected: {} });
    } else if (operation == "all") {
      let newKey = {};
      key.map((x) => (newKey[x] = true));
      setData({ data: data.data, selected: newKey });
    }
  }

  const processList = data.data.map(({ name, device, path, status }, index) => (
    // Iterate through the map to list all entries
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
          {/* 2. If maximum amount of selections show input on, click removes all */}
          {/* 3. If more than 0 items are selected, but less than maximum showed neutral */}
          {selectLength == 0 ? (
            <Checkbox
              click={() => invertSelection("all")}
              ariaChecked={false}
            />
          ) : selectLength == dataLength ? (
            <Checkbox
              click={() => invertSelection("none")}
              ariaChecked={true}
            />
          ) : (
            <Checkbox ariaChecked="mixed" />
          )}

          {selectLength > 0 ? "Selected " + selectLength : "None selected"}
        </div>
        <div id="download">
          <img src={download} alt="Download icon" />
          {"Download Selected"}
        </div>
      </div>
      <div id="directory">
        <div className="row header">
          <Column />
          <Column name="Name" />
          <Column name="Device" />
          <Column name="Path" />
          <Column name="Status" />
        </div>
        {processList}
      </div>
    </div>
  );
}
