import React from "react";

import Column from "../../Components/Column/Column";

import inputOff from "../../inputOff.svg";
import inputOn from "../../inputOn.svg";
import "./Row.scss";

const Row = ({ data, setData, name, status, device, path }) => {
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
      <div className="column">
        {data.selected[name] ? (
          <img
            src={inputOn}
            role="checkbox"
            aria-checked="true"
            aria-labelledby={`label-${name}`}
            alt="checkbox on"
          />
        ) : (
          <img
            src={inputOff}
            role="checkbox"
            aria-checked="false"
            aria-labelledby={`label-${name}`}
            alt="checkbox off"
          />
        )}
      </div>
      <Column name={name} />
      <Column name={device} />
      <Column name={path} />
      <div
        className={`column titleCase ${
          status == "available" ? "available" : null
        }`}
      >
        {status[0].toUpperCase() + status.substring(1)}
      </div>
    </div>
  );
};

export default Row;
