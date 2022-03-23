import React, { useState } from "react";
import Die from "../die/Die";
import "./rollDice.css";

const RollDice = () => {
  const [numberOne, setNumberOne] = useState("one");
  const [numberTwo, setNumberTwo] = useState("one");
  const [shaking, setShaking] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    console.log("I`m rolling!");
    setShaking(true);
    const numbers = ["one", "two", "three", "four", "five", "six"];
    setTimeout(function () {
      setNumberOne(numbers[Math.floor(Math.random() * numbers.length)]);
      setNumberTwo(numbers[Math.floor(Math.random() * numbers.length)]);
      setShaking(false);
    }, 1000);
  }
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex">
        <div>
          <Die shaking={shaking} number={numberOne} />
        </div>
        <div>
          <Die shaking={shaking} number={numberTwo} />
        </div>
      </div>
      <button
        onClick={shaking ? null : handleClick}
        className="ease inline-block cursor-pointer rounded-full bg-pink-600 px-8 py-3 text-7xl text-white transition duration-500 hover:bg-indigo-900"
      >
        {" "}
        {!shaking ? 'Roll Dice!' : 'Rolling 0:'}
      </button>
    </div>
  );
};

export default RollDice;
