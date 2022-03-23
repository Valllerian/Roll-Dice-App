import React from "react";
import Die from "../die/Die";
import "./rollDice.css";

const RollDice = () => {
  return (
    <div>
      <div className="RollDice">
        <div>
          <Die number={"one"} />
        </div>
        <div>
          <Die number={"two"} />
        </div>
      </div>
      <button> Roll Dice!</button>
    </div>
  );
};

export default RollDice;
