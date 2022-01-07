import React from "react";

import inputOff from "../../inputOff.svg";
import inputOn from "../../inputOn.svg";
import inputNeutral from "../../inputNeutral.svg";

import "./Row.scss";

const Player = ({ data, setData, name, status, device, path }) => {
  const handleRemove = () => {
    let handleData = new Object();
    handleData.data = data.data;
    handleData.selected = data.selected;
    if (data.selected[name]) {
      delete data.selected[name];
    } else {
      data.selected[name] = true;
    }
    setData(handleData);
  };

  return (
    <div
      className={`row body ${data.selected[name] ? "selected" : null}`}
      onClick={status == "available" ? handleRemove : null}
    >
      <div className="c1">
        <img src={data.selected[name] ? inputOn : inputOff} />
      </div>
      <div className="c2">{name}</div>
      <div className="c3">{device}</div>
      <div className="c4">{path}</div>
      <div className="c5">{status}</div>
    </div>
  );
};

export default Player;
