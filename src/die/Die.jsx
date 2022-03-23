import React from "react";
import "./die.css";

const Die = (props) => {
  console.log(props.number);
  let number = props.number;
  return (
    <div>
      <div>
        <i className={`fas fa-dice-${number}`}></i>
      </div>
    </div>
  );
};

export default Die;
