import React from "react";
import "./Scan.css";

const Scan = props => (
  <div
    role="img"
    aria-label="click item"
    // onClick={() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`scan ${props.move}`}
  >
  </div>
);

export default Scan;
