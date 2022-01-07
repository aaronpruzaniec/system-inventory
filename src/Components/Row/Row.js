import React, { useEffect, useState } from "react";

function Row(props) {
  const [rowData, setRowData] = useState(props);
  const [test, setTest] = useState(false);

  useEffect(() => {
    setRowData(props);
  }, [props]);

  function handleChange(event) {
    let handleData2 = {};
    handleData2 = props.data;
    handleData2.selected[props.name] = true;
    props.setData(handleData2);
    // handleData2.data = props.state;
    // handleData2.selected = allPlayers.selected;
    // allPlayers.selected[name] = true;
    // console.log(handleData);
    // console.log(handleData2);
    // removePlayer(handleData2);
  }
  return (
    <div
      className={`row ${props.data[props.name] ? "selected" : null}`}
      onClick={handleChange}
    >
      <div className={`c1`}>
        [{test} {Object.entries(props.state).length}]
      </div>
      <div className={`c2`}>{rowData.name}</div>
      <div className={`c3`}>{rowData.device}</div>
      <div className={`c4`}>{rowData.path}</div>
      <div className={`c5`}>{rowData.status}</div>
    </div>
  );
}

export default Row;
