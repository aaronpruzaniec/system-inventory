function Row(props) {
  function handleChange(event) {
    props.select(props.name);
  }

  return (
    <div
      className={`row ${props.state[props.name] ? "selected" : null}`}
      onClick={handleChange}
    >
      <div className={`c1`}>[{props.state[props.name]}]</div>
      <div className={`c2`}>{props.name}</div>
      <div className={`c3`}>{props.device}</div>
      <div className={`c4`}>{props.path}</div>
      <div className={`c5`}>{props.status}</div>
    </div>
  );
}

export default Row;
