import React, { useState } from "react";
import Die from "../die/Die";
import "./rollDice.css";

const RollDice = () => {
  const [numberOne, setNumberOne] = useState("one");
  const [numberTwo, setNumberTwo] = useState("one");

  function handleClick(e) {
    e.preventDefault();
    const numbers = ["one", "two", "three", "four", "five", "six"];

    let numberOne = setNumberOne(
      numbers[Math.floor(Math.random() * numbers.length)]
    );
    let numberTwo = setNumberTwo(
      numbers[Math.floor(Math.random() * numbers.length)]
    );
  }
  return (
    <div>
      <div className="RollDice">
        <div>
          <Die number={numberOne} />
        </div>
        <div>
          <Die number={numberTwo} />
        </div>
      </div>
      <button onClick={handleClick}> Roll Dice!</button>
    </div>
  );
};

export default RollDice;
