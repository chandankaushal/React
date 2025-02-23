import { useState } from "react";

import Ticket from "./Ticket";
import { generateRandom, sumArr } from "./helper";
import Button from "./Button";
import Result from "./Result";

export default function Lottery({ n, winningCond }) {
  let [ticket, setTicket] = useState(generateRandom(n));

  function buyTicket() {
    setTicket(generateRandom(n));
  }
  let isWinning = winningCond(ticket);

  return (
    <>
      <Ticket ticket={ticket}></Ticket>
      <Button action={buyTicket}></Button>
      <Result result={isWinning}></Result>
    </>
  );
}
