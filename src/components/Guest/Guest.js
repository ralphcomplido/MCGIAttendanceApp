import React from "react";
import "./Guest.css";

const Guest = props => (
  <div
    role="img"
    aria-label="click item"
    onClick={() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`click-item ${props.move}`}
  >
  </div>
);

export default Guest;
