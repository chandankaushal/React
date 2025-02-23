import { useState } from "react";

export default function LotteryGame() {
  let [number, setNumber] = useState(0);
  let [result, setResult] = useState("");
  function ticketNumber() {
    let randomNumber = Math.floor(Math.random() * 900) + 100;
    setNumber(randomNumber);
    extractValue(randomNumber);
  }
  function extractValue(num) {
    let ones = num % 10;
    num = parseInt(num / 10);
    let tens = num % 10;
    num = parseInt(num / 10);
    let hundereds = num % 10;

    if (ones + tens + hundereds == 15) {
      setResult("Congratulations, You Won");
    } else {
      setResult("Loser");
    }
  }
  return (
    <>
      <h2>Lottery Game</h2>
      <p> {result}</p>
      <p>{number}</p>
      <button onClick={ticketNumber}>Generate</button>
    </>
  );
}
