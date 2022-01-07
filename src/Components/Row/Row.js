import React, { useEffect, useState } from "react";

function Row(props) {
  const [rowData, setRowData] = useState({});

  useEffect(() => {
    setRowData(props);
  }, [props]);

  function handleChange(event) {
    //props.select(props.name);
    let a = props.state;
    a[props.name] = true;
    props.setState(a);
    setRowData(a);
  }
  return (
    <div
      className={`row ${props.state[props.name] ? "selected" : null}`}
      onClick={handleChange}
    >
      <div className={`c1`}>[{rowData.props ? "0" : "1"}]</div>
      <div className={`c2`}>{rowData.name}</div>
      <div className={`c3`}>{rowData.device}</div>
      <div className={`c4`}>{rowData.path}</div>
      <div className={`c5`}>{rowData.status}</div>
    </div>
  );
}

export default Row;
