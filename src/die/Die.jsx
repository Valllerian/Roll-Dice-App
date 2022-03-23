import React from "react";
import "./die.css";

const Die = (props) => {
  let number = props.number;
  return (
    <div>
      <div className="mx-6 my-6">
        <i className={`fas fa-dice-${number} fa-10x`}></i>
      </div>
    </div>
  );
};

export default Die;
