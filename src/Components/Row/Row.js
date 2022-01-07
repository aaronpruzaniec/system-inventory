import React from "react";
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
    console.log(handleData);
    setData(handleData);
  };

  return (
    <div
      className={`row ${data.selected[name] ? "bold" : null}`}
      onClick={handleRemove}
    >
      <div className=" c1">[]</div>
      <div className=" c2">{name}</div>
      <div className=" c3">{device}</div>
      <div className=" c4">{path}</div>
      <div className=" c5">{status}</div>
    </div>
  );
};

export default Player;
