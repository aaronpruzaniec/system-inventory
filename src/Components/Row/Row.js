import React from "react";

import Checkbox from "../../Components/Checkbox/Checkbox";
import Column from "../../Components/Column/Column";

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
      className={`row body ${data.selected[name] ? "selected" : ""}`}
      onClick={status == "available" ? handleRemove : null}
    >
      <div className="column">
        {data.selected[name] ? (
          <Checkbox ariaChecked={true} />
        ) : (
          <Checkbox ariaChecked={false} />
        )}
      </div>
      <Column name={name} />
      <Column name={device} />
      <Column name={path} />
      <div
        className={`column titleCase ${
          status == "available" ? "available" : ""
        }`}
      >
        {status[0].toUpperCase() + status.substring(1)}
      </div>
    </div>
  );
};

export default Row;
