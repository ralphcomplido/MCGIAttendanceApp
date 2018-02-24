import React from "react";
import "./Member.css";

const Member = props => (
  <div
    role="img"
    aria-label="click item"
    onClick={() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`click-item ${props.move}`}
  >
  </div>
);

export default Member;
