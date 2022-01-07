import React from "react";
import "./Row.scss";

// Destructuring props in the function arguments.
const Player = ({ allPlayers, removePlayer, name, yearsPro, position }) => {
  const handleRemove = () => {
    let handleData2 = new Object();
    handleData2.data = allPlayers.data;
    handleData2.selected = allPlayers.selected;
    allPlayers.selected[name] = true;
    let handleData = {
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
      selected: { "auxtheme.dll": true },
    };
    //handleData.selected[name] = true;
    console.log(handleData);
    console.log(handleData2);
    removePlayer(handleData2);
  };

  return (
    <span
      className={allPlayers.selected[name] ? "bold" : null}
      onClick={handleRemove}
    >
      {name}
    </span>
  );
};

export default Player;
