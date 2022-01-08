import React from "react";

import inputOff from "../../inputOff.svg";
import inputOn from "../../inputOn.svg";
import inputNeutral from "../../inputNeutral.svg";

const Checkbox = ({ ariaChecked, click, width }) => {
  let checked;
  // Logic decides which asset to use
  if (ariaChecked === false) {
    checked = inputOff;
  } else if (ariaChecked === true) {
    checked = inputOn;
  } else {
    checked = inputNeutral;
  }
  return (
    <img
      style={{ width: width + "px", height: "auto" }}
      src={checked}
      role="checkbox"
      alt={"checkbox " + ariaChecked}
      aria-checked={ariaChecked}
      onClick={click}
    />
  );
};

export default Checkbox;
