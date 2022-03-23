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
    <div className="grid place-items-center h-screen">
      <div className="flex">
        <div>
          <Die number={numberOne} />
        </div>
        <div>
          <Die number={numberTwo} />
        </div>
      </div>
      <button onClick={handleClick} className="ease inline-block cursor-pointer rounded-full bg-pink-600 px-8 py-3 text-7xl text-white transition duration-500 hover:bg-indigo-900"> Roll Dice!</button>
    </div>
  );
};

export default RollDice;
